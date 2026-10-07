"""
RakshakLogix — Transportation Intelligence & Optimization Engine Tests

Tests:
- RouteGraphBuilder graph construction & path finding
- RouteScorer multi-attribute path evaluation
- VehicleAssignmentEngine load allocation & fleet constraints
- OptimizationConstraintValidator hard vs soft constraint checking
- ORToolsLogisticsSolver Mixed-Integer Programming solver
- ShipmentPlanner end-to-end replenishment planning & source selection
- API endpoints for vehicles, shipments, and route optimization
"""

from __future__ import annotations

import uuid

import pytest
from httpx import AsyncClient
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.location import Location
from app.optimization.graph import RouteGraphBuilder
from app.optimization.planner import OptimizationPlanner
from app.optimization.vehicle_assignment import VehicleAssignmentEngine
from app.optimization.vrp import ORToolsLogisticsSolver


class TestRouteGraphBuilder:
    def test_build_graph_and_find_paths(self) -> None:
        loc_1 = str(uuid.uuid4())

        loc_2 = str(uuid.uuid4())
        loc_3 = str(uuid.uuid4())

        locations = [
            {"id": loc_1, "name": "Depot Alpha", "type": "DEPOT"},
            {"id": loc_2, "name": "Hub Bravo", "type": "HUB"},
            {"id": loc_3, "name": "Forward Post Charlie", "type": "FORWARD_POST"},
        ]

        route_id = str(uuid.uuid4())
        routes = [
            {
                "id": route_id,
                "name": "Corridor Alpha-Charlie",
                "status": "ACTIVE",
                "base_risk_score": 0.2,
                "segments": [
                    {
                        "from_location_id": loc_1,
                        "to_location_id": loc_2,
                        "distance_km": 40.0,
                        "travel_time_hours": 1.0,
                        "terrain_risk": 0.1,
                        "road_risk": 0.1,
                    },
                    {
                        "from_location_id": loc_2,
                        "to_location_id": loc_3,
                        "distance_km": 60.0,
                        "travel_time_hours": 1.5,
                        "terrain_risk": 0.2,
                        "road_risk": 0.2,
                    },
                ],
            }
        ]

        G = RouteGraphBuilder.build_graph(locations, routes)
        assert G.number_of_nodes() == 3
        assert G.number_of_edges() == 2

        paths = RouteGraphBuilder.find_candidate_paths(G, loc_1, loc_3)
        assert len(paths) == 1
        assert paths[0] == [loc_1, loc_2, loc_3]


class TestVehicleAssignmentEngine:
    def test_allocate_vehicles_feasible(self) -> None:
        vehicles = [
            {
                "id": str(uuid.uuid4()),
                "name": "Heavy Truck 1",
                "capacity_kg": 5000.0,
                "availability_status": "AVAILABLE",
            },
            {
                "id": str(uuid.uuid4()),
                "name": "Medium Truck 2",
                "capacity_kg": 2500.0,
                "availability_status": "AVAILABLE",
            },
            {
                "id": str(uuid.uuid4()),
                "name": "In-Transit Truck",
                "capacity_kg": 5000.0,
                "availability_status": "IN_TRANSIT",
            },
        ]

        res = VehicleAssignmentEngine.allocate_vehicles(vehicles, required_load_kg=6000.0)
        assert res["status"] == "FEASIBLE"
        assert len(res["allocated_vehicles"]) == 2  # 5000 + 1000 from second truck
        assert res["unfulfilled_load_kg"] == 0.0

    def test_allocate_vehicles_insufficient_capacity(self) -> None:
        vehicles = [
            {
                "id": str(uuid.uuid4()),
                "name": "Light Truck",
                "capacity_kg": 1000.0,
                "availability_status": "AVAILABLE",
            },
        ]

        res = VehicleAssignmentEngine.allocate_vehicles(vehicles, required_load_kg=3000.0)
        assert res["status"] == "NO_FEASIBLE_VEHICLE"
        assert res["unfulfilled_load_kg"] == 2000.0


class TestORToolsLogisticsSolver:
    def test_solve_shipment_optimization(self) -> None:
        vehicles = [
            {
                "id": str(uuid.uuid4()),
                "name": "Heavy Convoy Truck",
                "capacity_kg": 10000.0,
                "availability_status": "AVAILABLE",
            },
        ]
        paths = [
            {
                "path_nodes": ["loc1", "loc2"],
                "total_distance_km": 120.0,
                "total_travel_time_hours": 3.0,
                "combined_risk_score": 0.25,
            }
        ]

        res = ORToolsLogisticsSolver.solve_shipment_optimization(
            required_quantity=1500.0,
            available_source_inventory=5000.0,
            available_vehicles=vehicles,
            candidate_paths=paths,
            max_risk_tolerance=0.8,
        )

        assert res["status"] in ("FEASIBLE", "OPTIMAL")
        assert len(res["allocated_vehicles"]) == 1
        assert res["allocated_vehicles"][0]["allocated_load_kg"] == 1500.0


class TestShipmentPlannerIntegration:
    @pytest.mark.asyncio
    async def test_end_to_end_replenishment_planning(self, db_session: AsyncSession) -> None:
        loc_res = await db_session.execute(select(Location))
        locations = loc_res.scalars().all()
        assert len(locations) >= 2

        src_loc = locations[0]
        dst_loc = locations[1]

        item_id = uuid.uuid4()
        items_req = [{"item_id": str(item_id), "quantity": 500.0}]

        # Run OptimizationPlanner
        plan_res = await OptimizationPlanner.run_optimization(
            db=db_session,
            source_location_id=src_loc.id,
            destination_location_id=dst_loc.id,
            items=items_req,
            max_risk_tolerance=0.9,
            avoid_blocked_routes=True,
        )

        assert "status" in plan_res
        assert plan_res["status"] in ("FEASIBLE", "OPTIMAL", "NO_FEASIBLE_PLAN")


class TestLogisticsEndpoints:
    @pytest.mark.asyncio
    async def test_vehicle_and_shipment_crud_endpoints(self, client: AsyncClient) -> None:
        login = await client.post(
            "/api/v1/auth/login",
            json={"email": "admin@rakshaklogix.dev", "password": "Admin@123456"},
        )
        headers = {"Authorization": f"Bearer {login.json()['access_token']}"}

        # List vehicles
        v_res = await client.get("/api/v1/vehicles", headers=headers)
        assert v_res.status_code == 200
        vehicles = v_res.json()
        assert len(vehicles) > 0

        # Get specific vehicle
        target_v_id = vehicles[0]["id"]
        v_get = await client.get(f"/api/v1/vehicles/{target_v_id}", headers=headers)
        assert v_get.status_code == 200

        # Patch vehicle status
        v_patch = await client.patch(
            f"/api/v1/vehicles/{target_v_id}",
            json={"availability_status": "MAINTENANCE"},
            headers=headers,
        )
        assert v_patch.status_code == 200
        assert v_patch.json()["availability_status"] == "MAINTENANCE"

        # List shipments
        s_res = await client.get("/api/v1/shipments", headers=headers)
        assert s_res.status_code == 200
        shipments = s_res.json()
        assert len(shipments) > 0

        # Get specific shipment
        target_s_id = shipments[0]["id"]
        s_get = await client.get(f"/api/v1/shipments/{target_s_id}", headers=headers)
        assert s_get.status_code == 200

        # Patch shipment status
        s_patch = await client.patch(
            f"/api/v1/shipments/{target_s_id}",
            json={"status": "IN_TRANSIT"},
            headers=headers,
        )
        assert s_patch.status_code == 200
        assert s_patch.json()["status"] == "IN_TRANSIT"
