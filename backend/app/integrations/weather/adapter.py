"""
RakshakLogix — Weather Data Integration Adapter Boundary

Provides a decoupled interface for querying environmental and weather conditions
affecting forward logistics routes and locations.
"""

from __future__ import annotations

import uuid
from typing import Any

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.weather import WeatherRecord, WeatherSeverity


class WeatherAdapter:
    """Boundary adapter for fetching location and corridor weather risk metrics."""

    @classmethod
    async def get_location_weather_risk(
        cls,
        db: AsyncSession,
        location_id: uuid.UUID | str,
    ) -> dict[str, Any]:
        """Fetches the latest weather observation for a location."""
        try:
            loc_uuid = uuid.UUID(str(location_id))
        except ValueError:
            return {
                "severity": WeatherSeverity.LOW.value,
                "temperature_c": 0.0,
                "risk_score": 0.1,
            }

        stmt = (
            select(WeatherRecord)
            .where(WeatherRecord.location_id == loc_uuid)
            .order_by(WeatherRecord.timestamp.desc())
        )
        res = await db.execute(stmt)
        record = res.scalars().first()

        if not record:
            return {
                "severity": WeatherSeverity.LOW.value,
                "temperature_c": 0.0,
                "precipitation_mm": 0.0,
                "wind_speed_kmh": 10.0,
                "risk_score": 0.1,
            }

        sev_map = {
            WeatherSeverity.LOW.value: 0.1,
            WeatherSeverity.MODERATE.value: 0.35,
            WeatherSeverity.SEVERE.value: 0.70,
            WeatherSeverity.EXTREME.value: 0.95,
        }
        r_score = sev_map.get(record.severity, 0.1)

        return {
            "severity": record.severity,
            "temperature_c": record.temperature_c,
            "precipitation_mm": record.precipitation_mm,
            "wind_speed_kmh": record.wind_speed_kmh,
            "risk_score": r_score,
        }
