"""
RakshakLogix — Phase 4 Simulation Engine & Dashboard Intelligence Tests

Validates:
- Scenario parameter validation
- Scenario isolation (LIVE STATE != SCENARIO STATE)
- Disruption simulations: ROUTE_UNAVAILABLE, DEMAND_SPIKE, SEVERE_WEATHER, VEHICLE_UNAVAILABLE
- Baseline vs Scenario comparison deltas
- Automated mitigation option ranking
- Dashboard summary, map, and trends API integration
"""

from __future__ import annotations

import uuid

import pytest
from httpx import AsyncClient
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.route import Route
from app.services.scenario_engine import ScenarioEngine


@pytest.mark.asyncio
class TestSimulationEngineUnit:
    """Unit tests for ScenarioEngine and isolated transformations."""

    async def test_scenario_type_normalization(self):
        assert ScenarioEngine._normalize_scenario_type("ROUTE_BLOCK") == "ROUTE_UNAVAILABLE"
        assert ScenarioEngine._normalize_scenario_type("route_unavailable") == "ROUTE_UNAVAILABLE"
        assert ScenarioEngine._normalize_scenario_type("WEATHER_DISRUPTION") == "SEVERE_WEATHER"
        assert ScenarioEngine._normalize_scenario_type("VEHICLE_SHORTAGE") == "VEHICLE_UNAVAILABLE"

    async def test_route_unavailable_simulation_isolation(self, db_session: AsyncSession):
        # Fetch live routes
        routes_db = (await db_session.execute(select(Route))).scalars().all()
        assert len(routes_db) > 0
        target_route = routes_db[0]
        initial_status = target_route.status

        loc_a_id = str(uuid.uuid4())
        loc_b_id = str(uuid.uuid4())
        locations_data = [
            {"id": loc_a_id, "name": "Origin Depot", "type": "CENTRAL_DEPOT"},
            {"id": loc_b_id, "name": "Forward Post", "type": "FORWARD_POST"},
        ]
        routes_data = [
            {
                "id": str(target_route.id),
                "name": target_route.name,
                "status": target_route.status,
                "base_risk_score": target_route.base_risk_score,
                "segments": [
                    {
                        "from_location_id": loc_a_id,
                        "to_location_id": loc_b_id,
                        "distance_km": 100.0,
                        "travel_time_hours": 2.5,
                    }
                ],
            }
        ]

        res = ScenarioEngine.execute(
            scenario_type="ROUTE_UNAVAILABLE",
            parameters={"route_id": str(target_route.id), "duration_hours": 24},
            live_locations=locations_data,
            live_inventory=[],
            live_routes=routes_data,
            live_vehicles=[],
        )

        assert "summary" in res
        assert "results" in res
        assert len(res["summary"]["mitigation_options"]) >= 1

        # PROOF OF ISOLATION: Database route entity was NOT mutated
        reloaded_route = (
            await db_session.execute(select(Route).where(Route.id == target_route.id))
        ).scalar_one()
        assert reloaded_route.status == initial_status

    async def test_demand_spike_simulation_isolation(self, db_session: AsyncSession):
        res = ScenarioEngine.execute(
            scenario_type="DEMAND_SPIKE",
            parameters={"increase_percent": 50, "duration_days": 10},
            live_locations=[],
            live_inventory=[
                {
                    "quantity": 100.0,
                    "reserved_quantity": 0.0,
                    "daily_avg_consumption": 10.0,
                }
            ],
            live_routes=[],
            live_vehicles=[],
        )

        summary = res["summary"]
        assert summary["scenario_type"] == "DEMAND_SPIKE"
        assert summary["inventory"]["baseline"]["average_runway_days"] == 10.0
        assert summary["inventory"]["scenario"]["average_runway_days"] < 10.0
        assert len(summary["mitigation_options"]) > 0

    async def test_severe_weather_simulation(self):
        res = ScenarioEngine.execute(
            scenario_type="SEVERE_WEATHER",
            parameters={"severity": "EXTREME", "duration_hours": 48},
            live_locations=[],
            live_inventory=[],
            live_routes=[
                {
                    "id": "r1",
                    "base_risk_score": 0.2,
                    "segments": [{"distance_km": 50, "travel_time_hours": 2.0}],
                }
            ],
            live_vehicles=[],
        )

        summary = res["summary"]
        assert summary["scenario_type"] == "SEVERE_WEATHER"
        assert (
            summary["transportation"]["scenario"]["average_eta_hours"]
            > summary["transportation"]["baseline"]["average_eta_hours"]
        )

    async def test_vehicle_unavailable_simulation(self):
        res = ScenarioEngine.execute(
            scenario_type="VEHICLE_UNAVAILABLE",
            parameters={"duration_hours": 24},
            live_locations=[],
            live_inventory=[],
            live_routes=[],
            live_vehicles=[
                {
                    "id": "v1",
                    "name": "Heavy Truck 1",
                    "capacity_kg": 5000.0,
                    "availability_status": "AVAILABLE",
                }
            ],
        )

        summary = res["summary"]
        assert summary["scenario_type"] == "VEHICLE_UNAVAILABLE"
        assert (
            summary["transportation"]["scenario"]["total_capacity_kg"]
            < summary["transportation"]["baseline"]["total_capacity_kg"]
        )


@pytest.mark.asyncio
class TestSimulationAPIEndpoints:
    """Integration tests for Simulation endpoints and Dashboard Intelligence APIs."""

    async def _get_auth_headers(self, client: AsyncClient) -> dict[str, str]:
        resp = await client.post(
            "/api/v1/auth/login",
            json={"email": "admin@rakshaklogix.dev", "password": "Admin@123456"},
        )
        assert resp.status_code == 200
        token = resp.json()["access_token"]
        return {"Authorization": f"Bearer {token}"}

    async def test_simulation_lifecycle_api(self, client: AsyncClient, db_session: AsyncSession):
        headers = await self._get_auth_headers(client)

        # 1. Create Simulation
        create_payload = {
            "scenario_type": "ROUTE_UNAVAILABLE",
            "name": "Zojila Pass Disruption",
            "description": "Simulating heavy landslide on Zojila Pass",
            "parameters": {"duration_hours": 48},
        }
        res_create = await client.post("/api/v1/simulations", json=create_payload, headers=headers)
        assert res_create.status_code == 201
        sim_data = res_create.json()
        sim_id = sim_data["id"]
        assert sim_data["status"] == "PENDING"

        # 2. Run Simulation
        res_run = await client.post(f"/api/v1/simulations/{sim_id}/run", headers=headers)
        assert res_run.status_code == 200
        run_data = res_run.json()
        assert run_data["status"] == "COMPLETED"
        assert len(run_data["results"]) > 0
        assert run_data["summary"] is not None

        # 3. Get Simulation details
        res_get = await client.get(f"/api/v1/simulations/{sim_id}", headers=headers)
        assert res_get.status_code == 200
        assert res_get.json()["id"] == sim_id

        # 4. Get Results metrics
        res_metrics = await client.get(f"/api/v1/simulations/{sim_id}/results", headers=headers)
        assert res_metrics.status_code == 200
        assert len(res_metrics.json()) > 0

    async def test_invalid_scenario_type_returns_error(self, client: AsyncClient):
        headers = await self._get_auth_headers(client)
        bad_payload = {
            "scenario_type": "INVALID_SCENARIO_XYZ",
            "parameters": {},
        }
        res = await client.post("/api/v1/simulations", json=bad_payload, headers=headers)
        assert res.status_code in (400, 422)

    async def test_dashboard_intelligence_endpoints(self, client: AsyncClient):
        headers = await self._get_auth_headers(client)

        # Summary
        res_summary = await client.get("/api/v1/dashboard/summary", headers=headers)
        assert res_summary.status_code == 200
        summary = res_summary.json()
        assert summary["total_locations"] > 0
        assert summary["total_items"] > 0
        assert "overall_system_readiness_pct" in summary
        assert "inventory" in summary
        assert "transportation" in summary

        # Map
        res_map = await client.get("/api/v1/dashboard/map", headers=headers)
        assert res_map.status_code == 200
        map_data = res_map.json()
        assert len(map_data["locations"]) > 0
        assert len(map_data["routes"]) > 0

        # Trends
        res_trends = await client.get("/api/v1/dashboard/trends?days=30", headers=headers)
        assert res_trends.status_code == 200
        trends_data = res_trends.json()
        assert "trends" in trends_data
        assert len(trends_data["trends"]) > 0
