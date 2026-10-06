"""
RakshakLogix — Shipment & ShipmentItem Models

Manages shipment transport orders and manifest line items between locations.
"""

from __future__ import annotations

import enum
import uuid
from datetime import datetime

from sqlalchemy import DateTime, Float, ForeignKey, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin


class ShipmentStatus(str, enum.Enum):
    PLANNED = "PLANNED"
    DISPATCHED = "DISPATCHED"
    IN_TRANSIT = "IN_TRANSIT"
    DELIVERED = "DELIVERED"
    CANCELLED = "CANCELLED"
    DELAYED = "DELAYED"


class ShipmentPriority(str, enum.Enum):
    ROUTINE = "ROUTINE"
    PRIORITY = "PRIORITY"
    URGENT = "URGENT"
    CRITICAL_EMERGENCY = "CRITICAL_EMERGENCY"


class Shipment(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "shipments"

    source_location_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("locations.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    destination_location_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("locations.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    vehicle_id: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("vehicles.id", ondelete="SET NULL"),
        nullable=True,
    )
    status: Mapped[str] = mapped_column(
        String(32), nullable=False, default=ShipmentStatus.PLANNED.value, index=True
    )
    priority: Mapped[str] = mapped_column(
        String(32), nullable=False, default=ShipmentPriority.ROUTINE.value, index=True
    )
    planned_departure: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True), nullable=True
    )
    planned_arrival: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True), nullable=True
    )
    actual_departure: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True), nullable=True
    )
    actual_arrival: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True), nullable=True
    )

    # Relationships
    source_location: Mapped[Location] = relationship(  # noqa: F821
        "Location", foreign_keys=[source_location_id], lazy="select"
    )
    destination_location: Mapped[Location] = relationship(  # noqa: F821
        "Location", foreign_keys=[destination_location_id], lazy="select"
    )
    vehicle: Mapped[Vehicle | None] = relationship(  # noqa: F821
        "Vehicle", lazy="select"
    )
    items: Mapped[list[ShipmentItem]] = relationship(
        "ShipmentItem",
        back_populates="shipment",
        cascade="all, delete-orphan",
        lazy="select",
    )

    def __repr__(self) -> str:
        return (
            f"<Shipment id={self.id} status={self.status!r} priority={self.priority!r}>"
        )


class ShipmentItem(UUIDPrimaryKeyMixin, Base):
    __tablename__ = "shipment_items"

    shipment_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("shipments.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    item_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("items.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    quantity: Mapped[float] = mapped_column(Float, nullable=False)

    # Relationships
    shipment: Mapped[Shipment] = relationship(
        "Shipment", back_populates="items", lazy="select"
    )
    item: Mapped[Item] = relationship("Item", lazy="select")  # noqa: F821

    def __repr__(self) -> str:
        return f"<ShipmentItem shipment={self.shipment_id} item={self.item_id} qty={self.quantity}>"
