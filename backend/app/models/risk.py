"""
RakshakLogix — Risk Prediction Model

Stores composite risk calculations and explainable risk factor breakdowns for locations, routes, and shipments.
"""

from __future__ import annotations

import enum
import uuid

from sqlalchemy import JSON, Float, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin


class EntityType(str, enum.Enum):
    LOCATION = "LOCATION"
    ROUTE = "ROUTE"
    SHIPMENT = "SHIPMENT"
    INVENTORY = "INVENTORY"


class RiskType(str, enum.Enum):
    STOCKOUT = "STOCKOUT"
    WEATHER = "WEATHER"
    TERRAIN = "TERRAIN"
    DELAY = "DELAY"
    COMPOSITE = "COMPOSITE"


class RiskSeverity(str, enum.Enum):
    LOW = "LOW"
    MODERATE = "MODERATE"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"


class RiskPrediction(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "risk_predictions"

    entity_type: Mapped[str] = mapped_column(String(32), nullable=False, index=True)
    entity_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), nullable=False, index=True)
    risk_type: Mapped[str] = mapped_column(String(32), nullable=False, index=True)
    score: Mapped[float] = mapped_column(Float, nullable=False)
    severity: Mapped[str] = mapped_column(String(32), nullable=False, index=True)
    explanation: Mapped[dict | None] = mapped_column(JSON, nullable=True)

    def __repr__(self) -> str:
        return (
            f"<RiskPrediction entity={self.entity_type}:{self.entity_id} "
            f"type={self.risk_type!r} score={self.score} severity={self.severity!r}>"
        )
