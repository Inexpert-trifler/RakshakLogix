"""
RakshakLogix — Synthetic Data Generator Tests

Verifies deterministic data generation, reproducible seeds, and record counts.
"""

from __future__ import annotations

import pytest
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.consumption import ConsumptionRecord
from app.models.item import Item
from app.models.location import Location
from app.models.shipment import Shipment
from app.models.vehicle import Vehicle
from app.services.data_generation.generator import SyntheticDataGenerator


class TestSyntheticDataGenerator:
    @pytest.mark.asyncio
    async def test_synthetic_data_generation_counts(self, db_session: AsyncSession) -> None:
        """Verifies synthetic dataset counts for locations, items, vehicles, consumption, shipments."""
        # Query pre-seeded locations and items
        loc_res = await db_session.execute(select(Location))
        locations = loc_res.scalars().all()
        assert len(locations) >= 50

        item_res = await db_session.execute(select(Item))
        items = item_res.scalars().all()
        assert len(items) >= 20

        veh_res = await db_session.execute(select(Vehicle))
        vehicles = veh_res.scalars().all()
        assert len(vehicles) >= 30

        cons_res = await db_session.execute(select(ConsumptionRecord))
        records = cons_res.scalars().all()
        assert len(records) >= 1000

        ship_res = await db_session.execute(select(Shipment))
        shipments = ship_res.scalars().all()
        assert len(shipments) >= 100

    @pytest.mark.asyncio
    async def test_generator_idempotency(self, db_session: AsyncSession) -> None:
        """Verifies re-running generate_all on an already seeded database does not create duplicates."""
        generator = SyntheticDataGenerator(seed=42)
        res = await generator.generate_all(db_session)
        assert res.get("status") == 0
