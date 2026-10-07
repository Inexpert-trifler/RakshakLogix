"""
RakshakLogix — Simulation & SimulationResult Models

Manages isolated what-if scenario simulations and comparative result metrics.
"""

from __future__ import annotations

import enum
import uuid
from datetime import datetime

from sqlalchemy import JSON, DateTime, Float, ForeignKey, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin


class ScenarioType(str, enum.Enum):
    ROUTE_UNAVAILABLE = "ROUTE_UNAVAILABLE"
    ROUTE_BLOCK = "ROUTE_BLOCK"
    DEMAND_SPIKE = "DEMAND_SPIKE"
    SEVERE_WEATHER = "SEVERE_WEATHER"
    WEATHER_DISRUPTION = "WEATHER_DISRUPTION"
    VEHICLE_UNAVAILABLE = "VEHICLE_UNAVAILABLE"
    VEHICLE_SHORTAGE = "VEHICLE_SHORTAGE"


class SimulationStatus(str, enum.Enum):
    DRAFT = "DRAFT"
    QUEUED = "QUEUED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"


class Simulation(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "simulations"

    scenario_type: Mapped[str] = mapped_column(String(64), nullable=False, index=True)
    name: Mapped[str | None] = mapped_column(String(255), nullable=True)
    description: Mapped[str | None] = mapped_column(String(1024), nullable=True)
    parameters: Mapped[dict] = mapped_column(JSON, nullable=False)
    creator_id: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
    )
    status: Mapped[str] = mapped_column(
        String(32), nullable=False, default=SimulationStatus.PENDING.value, index=True
    )
    started_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    completed_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    summary: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    error_message: Mapped[str | None] = mapped_column(String(2048), nullable=True)

    # Relationships
    results: Mapped[list[SimulationResult]] = relationship(
        "SimulationResult",
        back_populates="simulation",
        cascade="all, delete-orphan",
        lazy="select",
    )

    def __repr__(self) -> str:
        return f"<Simulation id={self.id} scenario={self.scenario_type!r} status={self.status!r}>"


class SimulationResult(UUIDPrimaryKeyMixin, Base):
    __tablename__ = "simulation_results"

    simulation_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("simulations.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    metric_name: Mapped[str] = mapped_column(String(100), nullable=False)
    baseline_value: Mapped[float] = mapped_column(Float, nullable=False)
    scenario_value: Mapped[float] = mapped_column(Float, nullable=False)
    delta: Mapped[float] = mapped_column(Float, nullable=False)
    details: Mapped[dict | None] = mapped_column(JSON, nullable=True)

    # Relationships
    simulation: Mapped[Simulation] = relationship(
        "Simulation", back_populates="results", lazy="select"
    )

    def __repr__(self) -> str:
        return (
            f"<SimulationResult metric={self.metric_name!r} "
            f"baseline={self.baseline_value} scenario={self.scenario_value}>"
        )
