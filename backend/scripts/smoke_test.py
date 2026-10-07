"""
RakshakLogix — End-to-End API Smoke Test Script

Validates that all backend subsystems are fully operational:
- Authentication & JWT
- Health & Readiness Probes
- Executive Dashboard Intelligence
- Locations & Item Catalog
- Inventory & Stockout Runway Risk
- Demand Forecasting ML Pipeline
- Transportation Fleet & Shipments
- Route Optimization Solver
- Risk Engine & System Alerts
- What-If Disruption Simulations & Mitigation Engine

Usage:
  python scripts/smoke_test.py [--url http://localhost:8000]
"""

from __future__ import annotations

import argparse
import asyncio
import sys
from pathlib import Path

# Ensure backend root is in PYTHONPATH
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

import httpx


async def run_smoke_test(base_url: str = "http://localhost:8000") -> None:
    print(f"🔥 Starting RakshakLogix Backend Smoke Test against {base_url}...\n")

    transport = None
    # Check if target server is live
    try:
        async with httpx.AsyncClient(base_url=base_url, timeout=3.0) as check_client:
            res = await check_client.get("/health")
            if res.status_code != 200:
                raise Exception("Server not live")
    except Exception:
        print(
            "ℹ️ Live HTTP server not detected on port 8000. Spinning up in-process ASGITransport test engine..."
        )
        from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine

        from app.core.database import Base, patch_sqlite_geom_compat
        from app.main import app
        from app.services.data_generation.generator import SyntheticDataGenerator
        from tests.conftest import _neutralize_geom_column

        _neutralize_geom_column()
        patch_sqlite_geom_compat()
        test_engine = create_async_engine("sqlite+aiosqlite:///:memory:", echo=False)
        async with test_engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)

        session_factory = async_sessionmaker(bind=test_engine, expire_on_commit=False)
        async with session_factory() as session:
            generator = SyntheticDataGenerator(seed=42)
            await generator.generate_all(session)

        from app.core.database import get_db

        async def override_get_db():
            async with session_factory() as s:
                yield s

        app.dependency_overrides[get_db] = override_get_db
        transport = httpx.ASGITransport(app=app)
        base_url = "http://testserver"

    async with httpx.AsyncClient(transport=transport, base_url=base_url, timeout=15.0) as client:
        # 1. Health & Readiness
        res_h = await client.get("/health")
        assert res_h.status_code == 200, f"Health check failed: {res_h.text}"
        res_r = await client.get("/ready")
        assert res_r.status_code == 200, f"Readiness check failed: {res_r.text}"
        print(" [PASS] Health & Readiness Probes (/health & /ready)")

        # 2. Authentication
        login_res = await client.post(
            "/api/v1/auth/login",
            json={"email": "admin@rakshaklogix.dev", "password": "Admin@123456"},
        )
        assert login_res.status_code == 200, f"Auth login failed: {login_res.text}"
        token = login_res.json()["access_token"]
        headers = {"Authorization": f"Bearer {token}"}

        me_res = await client.get("/api/v1/auth/me", headers=headers)
        assert me_res.status_code == 200, f"Auth /me failed: {me_res.text}"
        assert me_res.json()["email"] == "admin@rakshaklogix.dev"

        users_res = await client.get("/api/v1/users", headers=headers)
        assert users_res.status_code == 200, f"List users failed: {users_res.text}"
        assert len(users_res.json()) > 0
        print(" [PASS] Authentication, Users & JWT Tokens (/auth/login, /auth/me, /users)")

        # 3. Dashboard Summary, Map & Trends
        dash_sum = await client.get("/api/v1/dashboard/summary", headers=headers)
        assert dash_sum.status_code == 200, f"Dashboard summary failed: {dash_sum.text}"
        assert dash_sum.json()["total_locations"] > 0
        print(" [PASS] Dashboard Summary Intelligence (/dashboard/summary)")

        dash_map = await client.get("/api/v1/dashboard/map", headers=headers)
        assert dash_map.status_code == 200, f"Dashboard map failed: {dash_map.text}"
        assert len(dash_map.json()["locations"]) > 0
        print(" [PASS] Dashboard GIS Overlay (/dashboard/map)")

        dash_trends = await client.get("/api/v1/dashboard/trends?days=30", headers=headers)
        assert dash_trends.status_code == 200, f"Dashboard trends failed: {dash_trends.text}"
        assert len(dash_trends.json()["trends"]) > 0
        print(" [PASS] Dashboard Time-Series Trends (/dashboard/trends)")

        # 4. Locations & Items
        locs_res = await client.get("/api/v1/locations", headers=headers)
        assert locs_res.status_code == 200, f"List locations failed: {locs_res.text}"
        locations = locs_res.json()
        assert len(locations) > 0
        print(" [PASS] Locations Catalog (/locations)")

        items_res = await client.get("/api/v1/items", headers=headers)
        assert items_res.status_code == 200, f"List items failed: {items_res.text}"
        items = items_res.json()
        assert len(items) > 0
        print(" [PASS] Supply Item Catalog (/items)")

        # 5. Inventory & Risk
        inv_res = await client.get("/api/v1/inventory", headers=headers)
        assert inv_res.status_code == 200, f"List inventory failed: {inv_res.text}"
        print(" [PASS] Inventory Levels (/inventory)")

        inv_risk = await client.get("/api/v1/inventory/risk", headers=headers)
        assert inv_risk.status_code == 200, f"Evaluate inventory risk failed: {inv_risk.text}"
        assert len(inv_risk.json()) > 0
        print(" [PASS] Inventory Runway Risk Engine (/inventory/risk)")

        # 6. Forecasting ML Pipeline
        fc_models = await client.get("/api/v1/forecast/models", headers=headers)
        assert fc_models.status_code == 200, f"Forecast models failed: {fc_models.text}"
        print(" [PASS] Demand Forecasting Models (/forecast/models)")

        fc_gen = await client.post(
            "/api/v1/forecast/demand",
            json={
                "location_id": locations[0]["id"],
                "item_id": items[0]["id"],
                "horizon_days": 14,
                "model_preference": "AUTO",
            },
            headers=headers,
        )
        assert fc_gen.status_code == 201, f"Forecast generation failed: {fc_gen.text}"
        fc_id = fc_gen.json()["forecast_id"]

        fc_get = await client.get(f"/api/v1/forecast/demand/{fc_id}", headers=headers)
        assert fc_get.status_code == 200, f"Get forecast failed: {fc_get.text}"
        print(" [PASS] Demand Forecasting Inference Pipeline (/forecast/demand)")

        # 7. Transportation Fleet, Shipments & Routes
        veh_res = await client.get("/api/v1/vehicles", headers=headers)
        assert veh_res.status_code == 200, f"List vehicles failed: {veh_res.text}"
        print(" [PASS] Fleet Vehicles (/vehicles)")

        ship_res = await client.get("/api/v1/shipments", headers=headers)
        assert ship_res.status_code == 200, f"List shipments failed: {ship_res.text}"
        print(" [PASS] Transport Shipments (/shipments)")

        routes_res = await client.get("/api/v1/routes", headers=headers)
        assert routes_res.status_code == 200, f"List routes failed: {routes_res.text}"
        routes = routes_res.json()
        assert len(routes) > 0
        print(" [PASS] Logistics Route Corridors (/routes)")

        # 8. Route Optimization Engine
        opt_res = await client.post(
            "/api/v1/routes/optimize",
            json={
                "source_location_id": locations[0]["id"],
                "destination_location_id": locations[1]["id"],
                "items": [{"item_id": items[0]["id"], "quantity": 300.0}],
                "max_risk_tolerance": 0.8,
            },
            headers=headers,
        )
        assert opt_res.status_code == 200, f"Route optimization failed: {opt_res.text}"
        assert "recommended_option" in opt_res.json()
        print(" [PASS] Multi-Objective Route & Fleet Optimizer (/routes/optimize)")

        # 9. Risk Engine & System Alerts
        risks_res = await client.get("/api/v1/risks", headers=headers)
        assert risks_res.status_code == 200, f"List risks failed: {risks_res.text}"
        print(" [PASS] Composite Risk Engine (/risks)")

        alerts_res = await client.get("/api/v1/alerts", headers=headers)
        assert alerts_res.status_code == 200, f"List alerts failed: {alerts_res.text}"
        print(" [PASS] System Operational Alerts (/alerts)")

        # 10. What-If Scenario Simulation
        create_sim = await client.post(
            "/api/v1/simulations",
            json={
                "scenario_type": "ROUTE_UNAVAILABLE",
                "name": "Zojila Pass Disruption",
                "parameters": {"route_id": routes[0]["id"], "duration_hours": 48},
            },
            headers=headers,
        )
        assert create_sim.status_code == 201, f"Create simulation failed: {create_sim.text}"
        sim_id = create_sim.json()["id"]

        run_sim = await client.post(f"/api/v1/simulations/{sim_id}/run", headers=headers)
        assert run_sim.status_code == 200, f"Run simulation failed: {run_sim.text}"
        sim_res = run_sim.json()
        assert sim_res["status"] == "COMPLETED"
        assert len(sim_res["summary"]["mitigation_options"]) > 0
        print(" [PASS] Disruption Simulation Engine Execution (/simulations/{id}/run)")

        res_metrics = await client.get(f"/api/v1/simulations/{sim_id}/results", headers=headers)
        assert res_metrics.status_code == 200, f"Get simulation results failed: {res_metrics.text}"
        assert len(res_metrics.json()) > 0
        print(
            " [PASS] Simulation Comparative Results & Mitigation Analysis (/simulations/{id}/results)"
        )

    print("\n✨ RakshakLogix backend smoke test: PASSED")


def main() -> None:
    parser = argparse.ArgumentParser(description="RakshakLogix Smoke Test CLI")
    parser.add_argument(
        "--url",
        type=str,
        default="http://localhost:8000",
        help="Base URL of backend server (default: http://localhost:8000)",
    )
    args = parser.parse_args()
    try:
        asyncio.run(run_smoke_test(base_url=args.url))
    except Exception as err:
        print(f"\n❌ RakshakLogix backend smoke test FAILED: {err}")
        sys.exit(1)


if __name__ == "__main__":
    main()
