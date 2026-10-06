"""
RakshakLogix — ConsumptionRecord Model

Represents a historical daily consumption observation for a
(location, item) pair. Used as the primary input for demand forecasting.
"""

from __future__ import annotations

import uuid
from datetime import date

from sqlalchemy import Date, Float, ForeignKey, String, UniqueConstraint
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin


class ConsumptionSource(str):
    MANUAL = "MANUAL"
    CSV_IMPORT = "CSV_IMPORT"
    SYSTEM = "SYSTEM"


class ConsumptionRecord(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    """
    One row = one day's consumption of an item at a location.

    The unique constraint on (location_id, item_id, date) prevents
    duplicate records during import operations.
    """

    __tablename__ = "consumption_records"

    __table_args__ = (
        UniqueConstraint(
            "location_id",
            "item_id",
            "date",
            name="uq_consumption_location_item_date",
        ),
    )

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
    date: Mapped[date] = mapped_column(Date, nullable=False, index=True)
    quantity: Mapped[float] = mapped_column(Float, nullable=False)
    source: Mapped[str] = mapped_column(
        String(32), nullable=False, default=ConsumptionSource.MANUAL
    )
    import_batch_id: Mapped[str | None] = mapped_column(
        String(64), nullable=True, index=True
    )
    is_outlier: Mapped[bool] = mapped_column(default=False, nullable=False)

    # Relationships
    location: Mapped[Location] = relationship(  # noqa: F821
        "Location", back_populates="consumption_records", lazy="select"
    )
    item: Mapped[Item] = relationship(  # noqa: F821
        "Item", back_populates="consumption_records", lazy="select"
    )

    def __repr__(self) -> str:
        return (
            f"<ConsumptionRecord location={self.location_id} "
            f"item={self.item_id} date={self.date} qty={self.quantity}>"
        )
