"""
RakshakLogix — End-to-End API Integration Tests

Tests all REST endpoints:
- Authentication & JWT
- Locations & Items
- Inventory & Consumption Risk
- Demand Forecasting ML Pipeline
- Transportation, Routes & Route Optimization
- Risk Engine & Alerts
- What-If Scenario Simulations
- Executive Dashboard Metrics
"""

from __future__ import annotations

import pytest
from httpx import AsyncClient


class TestAPIIntegration:

    @pytest.mark.asyncio
    async def test_health_endpoints(self, client: AsyncClient) -> None:
        r = await client.get("/health")
        assert r.status_code == 200
        assert r.json()["status"] == "ok"

        r_v1 = await client.get("/api/v1/health")
        assert r_v1.status_code == 200
        assert "dependencies" in r_v1.json()

    @pytest.mark.asyncio
    async def test_auth_login_and_me(self, client: AsyncClient) -> None:
        login_res = await client.post(
            "/api/v1/auth/login",
            json={"email": "admin@rakshaklogix.dev", "password": "Admin@123456"},
        )
        assert login_res.status_code == 200
        tokens = login_res.json()
        assert "access_token" in tokens
        access_token = tokens["access_token"]

        headers = {"Authorization": f"Bearer {access_token}"}
        me_res = await client.get("/api/v1/auth/me", headers=headers)
        assert me_res.status_code == 200
        user_info = me_res.json()
        assert user_info["email"] == "admin@rakshaklogix.dev"
        assert user_info["role"] == "ADMIN"

    @pytest.mark.asyncio
    async def test_locations_and_items_flow(self, client: AsyncClient) -> None:
        # Auth token
        login = await client.post(
            "/api/v1/auth/login",
            json={"email": "admin@rakshaklogix.dev", "password": "Admin@123456"},
        )
        headers = {"Authorization": f"Bearer {login.json()['access_token']}"}

        # List locations
        locs_res = await client.get("/api/v1/locations", headers=headers)
        assert locs_res.status_code == 200
        locations = locs_res.json()
        assert len(locations) >= 50

        # Create new location
        new_loc = await client.post(
            "/api/v1/locations",
            json={
                "name": "Test Tactical Outpost",
                "type": "FORWARD_POST",
                "latitude": 34.12,
                "longitude": 77.14,
                "elevation_m": 4100.0,
                "terrain_type": "MOUNTAIN",
                "priority": 8,
            },
            headers=headers,
        )
        assert new_loc.status_code == 201
        created_loc = new_loc.json()
        assert created_loc["name"] == "Test Tactical Outpost"

        # List items
        items_res = await client.get("/api/v1/items", headers=headers)
        assert items_res.status_code == 200
        assert len(items_res.json()) >= 20

    @pytest.mark.asyncio
    async def test_inventory_and_risk(self, client: AsyncClient) -> None:
        login = await client.post(
            "/api/v1/auth/login",
            json={"email": "admin@rakshaklogix.dev", "password": "Admin@123456"},
        )
        headers = {"Authorization": f"Bearer {login.json()['access_token']}"}

        inv_res = await client.get("/api/v1/inventory", headers=headers)
        assert inv_res.status_code == 200

        risk_res = await client.get("/api/v1/inventory/risk", headers=headers)
        assert risk_res.status_code == 200
        risks = risk_res.json()
        assert len(risks) > 0

    @pytest.mark.asyncio
    async def test_demand_forecast_pipeline(self, client: AsyncClient) -> None:
        login = await client.post(
            "/api/v1/auth/login",
            json={"email": "admin@rakshaklogix.dev", "password": "Admin@123456"},
        )
        headers = {"Authorization": f"Bearer {login.json()['access_token']}"}

        # Get locations and items
        locs = (await client.get("/api/v1/locations", headers=headers)).json()
        items = (await client.get("/api/v1/items", headers=headers)).json()

        fc_req = await client.post(
            "/api/v1/forecast/demand",
            json={
                "location_id": locs[0]["id"],
                "item_id": items[0]["id"],
                "horizon_days": 14,
                "model_preference": "AUTO",
            },
            headers=headers,
        )
        assert fc_req.status_code == 201
        fc_data = fc_req.json()
        assert "forecast_id" in fc_data
        assert len(fc_data["points"]) == 14

    @pytest.mark.asyncio
    async def test_route_optimization(self, client: AsyncClient) -> None:
        login = await client.post(
            "/api/v1/auth/login",
            json={"email": "admin@rakshaklogix.dev", "password": "Admin@123456"},
        )
        headers = {"Authorization": f"Bearer {login.json()['access_token']}"}

        locs = (await client.get("/api/v1/locations", headers=headers)).json()
        items = (await client.get("/api/v1/items", headers=headers)).json()

        opt_res = await client.post(
            "/api/v1/routes/optimize",
            json={
                "source_location_id": locs[0]["id"],
                "destination_location_id": locs[1]["id"],
                "items": [{"item_id": items[0]["id"], "quantity": 500.0}],
                "max_risk_tolerance": 0.8,
            },
            headers=headers,
        )
        assert opt_res.status_code == 200
        assert "recommended_option" in opt_res.json()

    @pytest.mark.asyncio
    async def test_simulation_workflow(self, client: AsyncClient) -> None:
        login = await client.post(
            "/api/v1/auth/login",
            json={"email": "admin@rakshaklogix.dev", "password": "Admin@123456"},
        )
        headers = {"Authorization": f"Bearer {login.json()['access_token']}"}

        routes = (await client.get("/api/v1/routes", headers=headers)).json()
        target_r_id = routes[0]["id"]

        create_sim = await client.post(
            "/api/v1/simulations",
            json={
                "scenario_type": "ROUTE_BLOCK",
                "parameters": {"blocked_route_id": target_r_id},
            },
            headers=headers,
        )
        assert create_sim.status_code == 201
        sim_id = create_sim.json()["id"]

        run_sim = await client.post(
            f"/api/v1/simulations/{sim_id}/run", headers=headers
        )
        assert run_sim.status_code == 200
        res_data = run_sim.json()
        assert res_data["status"] == "COMPLETED"
        assert len(res_data["results"]) > 0

    @pytest.mark.asyncio
    async def test_dashboard_endpoints(self, client: AsyncClient) -> None:
        login = await client.post(
            "/api/v1/auth/login",
            json={"email": "admin@rakshaklogix.dev", "password": "Admin@123456"},
        )
        headers = {"Authorization": f"Bearer {login.json()['access_token']}"}

        summary = await client.get("/api/v1/dashboard/summary", headers=headers)
        assert summary.status_code == 200
        assert summary.json()["total_locations"] >= 50

        map_res = await client.get("/api/v1/dashboard/map", headers=headers)
        assert map_res.status_code == 200
        assert len(map_res.json()["locations"]) >= 50

        trends = await client.get("/api/v1/dashboard/trends", headers=headers)
        assert trends.status_code == 200
        assert len(trends.json()["trends"]) > 0
