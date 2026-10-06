"""
RakshakLogix — Demand Forecast Models

Stores demand forecasting metadata, model evaluation metrics, and daily time-series forecast points.
"""

from __future__ import annotations

import uuid
from datetime import date

from sqlalchemy import JSON, Date, Float, ForeignKey, Integer, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin


class DemandForecast(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "demand_forecasts"

    location_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("locations.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    item_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("items.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    horizon_days: Mapped[int] = mapped_column(Integer, nullable=False, default=30)
    model_version: Mapped[str] = mapped_column(String(64), nullable=False)
    metrics: Mapped[dict | None] = mapped_column(JSON, nullable=True)

    # Relationships
    location: Mapped[Location] = relationship("Location", lazy="select")  # noqa: F821
    item: Mapped[Item] = relationship("Item", lazy="select")  # noqa: F821
    points: Mapped[list[ForecastPoint]] = relationship(
        "ForecastPoint",
        back_populates="forecast",
        cascade="all, delete-orphan",
        lazy="select",
        order_by="ForecastPoint.target_date",
    )

    def __repr__(self) -> str:
        return (
            f"<DemandForecast id={self.id} location={self.location_id} "
            f"item={self.item_id} model={self.model_version!r}>"
        )


class ForecastPoint(UUIDPrimaryKeyMixin, Base):
    __tablename__ = "forecast_points"

    forecast_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("demand_forecasts.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    target_date: Mapped[date] = mapped_column(Date, nullable=False, index=True)
    prediction: Mapped[float] = mapped_column(Float, nullable=False)
    lower_bound: Mapped[float | None] = mapped_column(Float, nullable=True)
    upper_bound: Mapped[float | None] = mapped_column(Float, nullable=True)

    # Relationships
    forecast: Mapped[DemandForecast] = relationship(
        "DemandForecast", back_populates="points", lazy="select"
    )

    def __repr__(self) -> str:
        return f"<ForecastPoint date={self.target_date} prediction={self.prediction}>"
