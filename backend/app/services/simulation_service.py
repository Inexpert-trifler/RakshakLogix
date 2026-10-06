"""
RakshakLogix — Simulation Orchestration Service

Orchestrates creation, asynchronous background execution, DB loading, result persistence,
and audit logging for what-if scenario simulations.
"""

from __future__ import annotations

import logging
import uuid
from datetime import UTC, datetime

from sqlalchemy import delete, select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.core.exceptions import NotFoundError, ValidationError
from app.models.audit import AuditLog
from app.models.inventory import Inventory
from app.models.location import Location
from app.models.route import Route, RouteSegment
from app.models.shipment import Shipment
from app.models.simulation import (
    ScenarioType,
    Simulation,
    SimulationResult,
    SimulationStatus,
)
from app.models.vehicle import Vehicle
from app.schemas.simulation import SimulationCreate
from app.services.scenario_engine import ScenarioEngine

logger = logging.getLogger(__name__)


class SimulationService:
    """Service layer managing what-if scenario simulations."""

    @classmethod
    async def create_simulation(
        cls,
        db: AsyncSession,
        payload: SimulationCreate,
        user_id: uuid.UUID | None = None,
    ) -> Simulation:
        """Configures and creates a new simulation record in DRAFT/PENDING state."""
        raw_type = payload.scenario_type.upper()

        # Validate scenario type
        valid_types = {st.value for st in ScenarioType}
        if raw_type not in valid_types:
            raise ValidationError(
                f"Invalid scenario_type '{payload.scenario_type}'. Must be one of: {sorted(valid_types)}"
            )

        sim = Simulation(
            scenario_type=raw_type,
            name=payload.name or f"{raw_type.replace('_', ' ').title()} Scenario",
            description=payload.description,
            parameters=payload.parameters,
            creator_id=user_id,
            status=SimulationStatus.PENDING.value,
        )
        db.add(sim)
        await db.commit()
        await db.refresh(sim)

        # Record audit log
        audit = AuditLog(
            actor_id=user_id,
            action="SIMULATION_CREATED",
            entity_type="SIMULATION",
            entity_id=sim.id,
            metadata_json={
                "scenario_type": sim.scenario_type,
                "parameters": sim.parameters,
            },
        )
        db.add(audit)
        await db.commit()

        # Reload with results relationship
        stmt = (
            select(Simulation)
            .options(selectinload(Simulation.results))
            .where(Simulation.id == sim.id)
        )
        return (await db.execute(stmt)).scalar_one()

    @classmethod
    async def run_simulation(
        cls,
        db: AsyncSession,
        simulation_id: uuid.UUID,
        user_id: uuid.UUID | None = None,
    ) -> Simulation:
        """
        Executes a what-if scenario simulation asynchronously.
        Loads production DB data, executes ScenarioEngine on isolated copies, and persists results.
        Guarantees that production operational state is NEVER mutated.
        """
        stmt = (
            select(Simulation)
            .options(selectinload(Simulation.results))
            .where(Simulation.id == simulation_id)
        )
        sim = (await db.execute(stmt)).scalar_one_or_none()
        if not sim:
            raise NotFoundError(f"Simulation {simulation_id} not found.")

        sim.status = SimulationStatus.RUNNING.value
        sim.started_at = datetime.now(UTC)
        await db.commit()

        try:
            # 1. Fetch live production data as dictionaries
            locs_db = (await db.execute(select(Location))).scalars().all()
            locations_data = [
                {
                    "id": str(loc.id),
                    "name": loc.name,
                    "type": loc.type,
                    "latitude": loc.latitude,
                    "longitude": loc.longitude,
                    "elevation_m": loc.elevation_m,
                    "terrain_type": loc.terrain_type,
                    "status": loc.status,
                }
                for loc in locs_db
            ]

            inv_db = (await db.execute(select(Inventory))).scalars().all()
            inventory_data = [
                {
                    "id": str(inv.id),
                    "location_id": str(inv.location_id),
                    "item_id": str(inv.item_id),
                    "quantity": inv.quantity,
                    "reserved_quantity": inv.reserved_quantity,
                    "safety_stock": inv.safety_stock,
                    "daily_avg_consumption": 15.0,
                }
                for inv in inv_db
            ]

            routes_db = (await db.execute(select(Route))).scalars().all()
            routes_data = []
            for r in routes_db:
                segs = (
                    (
                        await db.execute(
                            select(RouteSegment)
                            .where(RouteSegment.route_id == r.id)
                            .order_by(RouteSegment.segment_order)
                        )
                    )
                    .scalars()
                    .all()
                )

                routes_data.append(
                    {
                        "id": str(r.id),
                        "name": r.name,
                        "status": r.status,
                        "base_risk_score": r.base_risk_score,
                        "segments": [
                            {
                                "id": str(s.id),
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

            vehicles_db = (await db.execute(select(Vehicle))).scalars().all()
            vehicles_data = [
                {
                    "id": str(v.id),
                    "name": v.name,
                    "vehicle_type": v.vehicle_type,
                    "capacity_kg": v.capacity_kg,
                    "availability_status": v.availability_status,
                }
                for v in vehicles_db
            ]

            shipments_db = (await db.execute(select(Shipment))).scalars().all()
            shipments_data = [
                {
                    "id": str(s.id),
                    "status": s.status,
                    "priority": s.priority,
                    "source_location_id": str(s.source_location_id),
                    "destination_location_id": str(s.destination_location_id),
                    "vehicle_id": str(s.vehicle_id) if s.vehicle_id else None,
                }
                for s in shipments_db
            ]

            # 2. Run Scenario Engine
            execution_res = ScenarioEngine.execute(
                scenario_type=sim.scenario_type,
                parameters=sim.parameters or {},
                live_locations=locations_data,
                live_inventory=inventory_data,
                live_routes=routes_data,
                live_vehicles=vehicles_data,
                live_shipments=shipments_data,
            )

            # 3. Clear old results if re-running
            await db.execute(
                delete(SimulationResult).where(SimulationResult.simulation_id == sim.id)
            )

            # 4. Save results
            new_results = []
            for r_item in execution_res.get("results", []):
                sr = SimulationResult(
                    simulation_id=sim.id,
                    metric_name=r_item["metric_name"],
                    baseline_value=r_item["baseline_value"],
                    scenario_value=r_item["scenario_value"],
                    delta=r_item["delta"],
                    details=r_item.get("details"),
                )
                db.add(sr)
                new_results.append(sr)

            sim.status = SimulationStatus.COMPLETED.value
            sim.completed_at = datetime.now(UTC)
            sim.summary = execution_res.get("summary")
            sim.results = new_results

            audit = AuditLog(
                actor_id=user_id or sim.creator_id,
                action="SIMULATION_COMPLETED",
                entity_type="SIMULATION",
                entity_id=sim.id,
                metadata_json={
                    "status": "COMPLETED",
                    "metrics_count": len(new_results),
                },
            )
            db.add(audit)
            await db.commit()

        except Exception as exc:
            logger.exception("Simulation execution failed for %s", simulation_id)
            sim.status = SimulationStatus.FAILED.value
            sim.completed_at = datetime.now(UTC)
            sim.error_message = str(exc)

            audit = AuditLog(
                actor_id=user_id or sim.creator_id,
                action="SIMULATION_FAILED",
                entity_type="SIMULATION",
                entity_id=sim.id,
                metadata_json={"error": str(exc)},
            )
            db.add(audit)
            await db.commit()

        # Reload updated simulation with results
        stmt = (
            select(Simulation)
            .options(selectinload(Simulation.results))
            .where(Simulation.id == sim.id)
        )
        return (await db.execute(stmt)).scalar_one()

    @classmethod
    async def get_simulation(
        cls, db: AsyncSession, simulation_id: uuid.UUID
    ) -> Simulation:
        """Retrieves simulation status, parameters, summary, and comparative metrics."""
        stmt = (
            select(Simulation)
            .options(selectinload(Simulation.results))
            .where(Simulation.id == simulation_id)
        )
        sim = (await db.execute(stmt)).scalar_one_or_none()
        if not sim:
            raise NotFoundError(f"Simulation {simulation_id} not found.")
        return sim

    @classmethod
    async def get_simulation_results(
        cls, db: AsyncSession, simulation_id: uuid.UUID
    ) -> list[SimulationResult]:
        """Retrieves comparative result metrics for a simulation."""
        # Ensure simulation exists
        await cls.get_simulation(db, simulation_id)
        stmt = select(SimulationResult).where(
            SimulationResult.simulation_id == simulation_id
        )
        return list((await db.execute(stmt)).scalars().all())
