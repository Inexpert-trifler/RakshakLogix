"""
RakshakLogix — Inventory & Inventory Transaction Models

Inventory: current stock levels per location/item combination.
InventoryTransaction: auditable record of every stock change.
"""

from __future__ import annotations

import enum
import uuid
from datetime import datetime

from sqlalchemy import DateTime, Float, ForeignKey, String, Text, func
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin


class TransactionType(str, enum.Enum):
    RECEIPT = "RECEIPT"  # goods received
    ISSUE = "ISSUE"  # goods issued out
    TRANSFER = "TRANSFER"  # transferred between locations
    ADJUSTMENT = "ADJUSTMENT"  # stock-count correction
    RESERVATION = "RESERVATION"  # reserve for pending shipment
    RELEASE = "RELEASE"  # release reserved stock


class Inventory(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    """
    Current stock level for a (location, item) pair.
    This is the authoritative inventory state table.
    Changes MUST go through InventoryTransaction.
    """

    __tablename__ = "inventory"

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
    quantity: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
    reserved_quantity: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
    safety_stock: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)

    # Relationships
    location: Mapped[Location] = relationship(  # noqa: F821
        "Location", back_populates="inventory", lazy="select"
    )
    item: Mapped[Item] = relationship(  # noqa: F821
        "Item", back_populates="inventory", lazy="select"
    )

    @property
    def available_quantity(self) -> float:
        """Quantity available after accounting for reservations."""
        reserved = self.reserved_quantity or 0.0
        qty = self.quantity or 0.0
        return max(0.0, qty - reserved)

    def __repr__(self) -> str:
        return f"<Inventory location={self.location_id} item={self.item_id} qty={self.quantity}>"


class InventoryTransaction(UUIDPrimaryKeyMixin, Base):
    """
    Immutable audit record of every inventory change.
    One row per stock movement — never update or delete these.
    """

    __tablename__ = "inventory_transactions"

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
    transaction_type: Mapped[str] = mapped_column(String(32), nullable=False, index=True)
    quantity: Mapped[float] = mapped_column(Float, nullable=False)
    reference_id: Mapped[str | None] = mapped_column(String(255), nullable=True)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)
    performed_by_id: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
    )
    occurred_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
        index=True,
    )

    def __repr__(self) -> str:
        return (
            f"<InventoryTransaction type={self.transaction_type!r} "
            f"item={self.item_id} qty={self.quantity}>"
        )
