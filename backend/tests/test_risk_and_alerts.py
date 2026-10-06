"""
RakshakLogix — Risk Engine & Alert Generator Tests

Tests:
- InventoryRunwayEngine calculation
- CompositeRiskCalculator scoring & explainability
- AlertDetector trigger logic
- ConsumptionImporter CSV validation & quality reporting
"""

from __future__ import annotations

import uuid
from datetime import date, timedelta

import pytest
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.ml.risk import AlertDetector, CompositeRiskCalculator, InventoryRunwayEngine
from app.models.item import Item
from app.models.location import Location
from app.services.consumption_import import ConsumptionImporter


class TestInventoryRunwayEngine:

    def test_runway_calculation(self) -> None:
        today = date.today()
        forecast_pts = [
            {"target_date": today + timedelta(days=i), "prediction": 100.0}
            for i in range(1, 11)
        ]

        res = InventoryRunwayEngine.calculate_runway(
            current_quantity=500.0,
            reserved_quantity=50.0,
            safety_stock=200.0,
            min_stock=100.0,
            forecast_points=forecast_pts,
        )

        assert res["net_available_quantity"] == 450.0
        assert res["days_to_safety_breach"] == 3.0
        assert res["days_to_stockout"] == 5.0


class TestCompositeRiskCalculator:

    def test_risk_scoring_and_explanation(self) -> None:
        res = CompositeRiskCalculator.calculate_risk(
            days_to_stockout=2.0,
            is_safety_breached=True,
            demand_cv=0.35,
            weather_severity="SEVERE",
            route_risk_score=0.6,
            delivery_delay_hours=18.0,
        )

        assert res["risk_score"] >= 75
        assert res["severity"] == "CRITICAL"
        assert "factors" in res
        assert res["factors"]["inventory"] >= 75
        assert "Imminent stockout projected" in res["explanation"]


class TestAlertDetector:

    @pytest.mark.asyncio
    async def test_alert_generation(self, db_session: AsyncSession) -> None:
        location_id = uuid.uuid4()
        item_id = uuid.uuid4()

        alerts = await AlertDetector.evaluate_and_emit_alerts(
            db=db_session,
            location_id=location_id,
            item_id=item_id,
            location_name="Forward Post North",
            item_name="Winter Diesel Fuel",
            days_to_stockout=1.2,
            is_safety_breached=True,
            risk_score=85,
            severity="CRITICAL",
            demand_spike_detected=True,
        )

        assert len(alerts) >= 4
        alert_types = [a.alert_type for a in alerts]
        assert "STOCKOUT_WARNING" in alert_types
        assert "SAFETY_STOCK_BREACH" in alert_types
        assert "DEMAND_SPIKE" in alert_types
        assert "LOGISTICS_RISK" in alert_types


class TestConsumptionImporter:

    @pytest.mark.asyncio
    async def test_csv_import_validation(self, db_session: AsyncSession) -> None:
        loc_res = await db_session.execute(select(Location))
        loc = loc_res.scalars().first()
        assert loc is not None

        item_res = await db_session.execute(select(Item))
        item = item_res.scalars().first()
        assert item is not None

        valid_csv = f"""location_id,item_id,date,quantity
{loc.id},{item.id},{date.today()},150.0
"""
        res = await ConsumptionImporter.process_csv_bytes(
            db=db_session,
            content=valid_csv.encode("utf-8"),
        )
        assert res["status"] in ("SUCCESS", "WARNING")
        assert res["imported_records"] == 1

        invalid_csv = b"location_id,item_id,date\n123,456,2026-01-01\n"
        res_invalid = await ConsumptionImporter.process_csv_bytes(
            db=db_session,
            content=invalid_csv,
        )
        assert res_invalid["status"] == "FAILED"
        assert res_invalid["imported_records"] == 0
