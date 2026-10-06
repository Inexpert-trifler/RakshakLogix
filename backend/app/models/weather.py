"""
RakshakLogix — Weather Record Model

Stores environmental observations and forecasts impacting supply chain routes and locations.
"""

from __future__ import annotations

import enum
import uuid
from datetime import datetime

from sqlalchemy import DateTime, Float, ForeignKey, String, func
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.mixins import UUIDPrimaryKeyMixin


class WeatherSeverity(str, enum.Enum):
    LOW = "LOW"
    MODERATE = "MODERATE"
    SEVERE = "SEVERE"
    EXTREME = "EXTREME"


class WeatherRecord(UUIDPrimaryKeyMixin, Base):
    __tablename__ = "weather_records"

    location_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("locations.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    timestamp: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
        index=True,
    )
    temperature_c: Mapped[float | None] = mapped_column(Float, nullable=True)
    precipitation_mm: Mapped[float | None] = mapped_column(Float, nullable=True)
    wind_speed_kmh: Mapped[float | None] = mapped_column(Float, nullable=True)
    severity: Mapped[str] = mapped_column(
        String(32), nullable=False, default=WeatherSeverity.LOW.value, index=True
    )

    # Relationships
    location: Mapped[Location] = relationship("Location", lazy="select")  # noqa: F821

    def __repr__(self) -> str:
        return f"<WeatherRecord location={self.location_id} severity={self.severity!r} time={self.timestamp}>"
