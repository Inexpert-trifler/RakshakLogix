"""
RakshakLogix — Optimization Engine Facade & Main Entry Point

Central interface orchestrating route optimization, vehicle allocation,
OR-Tools constrained solving, and decision audit logging.
"""

from __future__ import annotations

import uuid
from typing import Any

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.audit import AuditLog
from app.models.inventory import Inventory
from app.models.location import Location
from app.models.route import Route, RouteSegment
from app.models.vehicle import Vehicle
from app.optimization.routing import RouteOptimizer
from app.optimization.shipment_planner import ShipmentPlanner


class OptimizationPlanner:
    """Facade for executing transportation intelligence planning tasks."""

    @classmethod
    async def run_optimization(
        cls,
        db: AsyncSession,
        source_location_id: uuid.UUID | str,
        destination_location_id: uuid.UUID | str,
        items: list[dict[str, Any]],
        priority: str = "ROUTINE",
        max_risk_tolerance: float = 0.8,
        avoid_blocked_routes: bool = True,
        user_id: uuid.UUID | None = None,
    ) -> dict[str, Any]:
        """Runs the complete transportation optimization pipeline."""
        src_id = str(source_location_id)
        dst_id = str(destination_location_id)

        # 1. Fetch Locations
        loc_res = await db.execute(select(Location))
        locations_db = loc_res.scalars().all()
        locations = [
            {
                "id": str(loc.id),
                "name": loc.name,
                "type": loc.type,
                "terrain_type": loc.terrain_type,
                "elevation_m": loc.elevation_m,
                "latitude": loc.latitude,
                "longitude": loc.longitude,
            }
            for loc in locations_db
        ]

        # Fetch destination name
        dst_name = next(
            (loc["name"] for loc in locations if loc["id"] == dst_id),
            "Destination Site",
        )

        # 2. Fetch Inventories
        inv_res = await db.execute(select(Inventory))
        inventories = [
            {
                "location_id": str(inv.location_id),
                "item_id": str(inv.item_id),
                "quantity": inv.quantity,
                "available_quantity": inv.available_quantity,
            }
            for inv in inv_res.scalars().all()
        ]

        # 3. Fetch Vehicles
        veh_res = await db.execute(select(Vehicle))
        vehicles = [
            {
                "id": str(v.id),
                "name": v.name,
                "vehicle_type": v.vehicle_type,
                "capacity_kg": v.capacity_kg,
                "availability_status": v.availability_status,
                "home_location_id": (str(v.home_location_id) if v.home_location_id else None),
            }
            for v in veh_res.scalars().all()
        ]

        # 4. Fetch Routes & Route Segments
        routes_res = await db.execute(select(Route))
        routes_db = routes_res.scalars().all()

        routes_data = []
        for r in routes_db:
            seg_stmt = (
                select(RouteSegment)
                .where(RouteSegment.route_id == r.id)
                .order_by(RouteSegment.segment_order)
            )
            segs = (await db.execute(seg_stmt)).scalars().all()
            routes_data.append(
                {
                    "id": str(r.id),
                    "name": r.name,
                    "status": r.status,
                    "base_risk_score": r.base_risk_score,
                    "segments": [
                        {
                            "from_location_id": str(s.from_location_id),
                            "to_location_id": str(s.to_location_id),
                            "distance_km": s.distance_km,
                            "travel_time_hours": s.travel_time_hours,
                            "terrain_risk": s.terrain_risk,
                            "road_risk": s.road_risk,
                        }
                        for s in segs
                    ],
                }
            )

        # 5. Execute Shipment Planner
        plan_res = ShipmentPlanner.plan_replenishment(
            destination_location_id=dst_id,
            destination_name=dst_name,
            items_requested=items,
            available_locations=locations,
            available_inventories=inventories,
            available_vehicles=vehicles,
            available_routes=routes_data,
            priority=priority,
            max_risk_tolerance=max_risk_tolerance,
            avoid_blocked_routes=avoid_blocked_routes,
        )

        # Fallback to direct RouteOptimizer if source was explicitly provided
        if plan_res["status"] != "FEASIBLE":
            opt_res = RouteOptimizer.optimize_route(
                locations=locations,
                routes=routes_data,
                source_id=src_id,
                destination_id=dst_id,
                shipment_weight_kg=sum(float(i.get("quantity", 0.0)) for i in items),
                max_risk_tolerance=max_risk_tolerance,
                avoid_blocked_routes=avoid_blocked_routes,
            )
            rec = opt_res.get("recommended_option")
            if rec:
                plan_res = {
                    "status": rec.get("feasibility_status", "FEASIBLE"),
                    "recommended_plan": {
                        "source_location_id": src_id,
                        "destination_location_id": dst_id,
                        "vehicles": [],
                        "route_names": [rec.get("name", "Corridor")],
                        "distance_km": rec.get("total_distance_km", 0.0),
                        "estimated_eta_hours": rec.get("total_travel_time_hours", 0.0),
                        "risk_score": int(round(rec.get("risk_score", 0.0) * 100)),
                        "utilization": 0.8,
                        "reasoning": rec.get("reasoning", []),
                    },
                    "alternative_plans": opt_res.get("alternative_options", []),
                    "reasoning": rec.get("reasoning", []),
                }

        # Record Audit Log
        if user_id:
            audit = AuditLog(
                actor_id=user_id,
                action="OPTIMIZE_ROUTE",
                entity_type="ROUTE",
                entity_id=uuid.UUID(dst_id) if len(dst_id) == 36 else None,
                metadata_json={
                    "source_id": src_id,
                    "destination_id": dst_id,
                    "status": plan_res["status"],
                    "items_count": len(items),
                },
            )
            db.add(audit)
            await db.commit()

        return plan_res
