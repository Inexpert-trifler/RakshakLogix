"""
RakshakLogix — Vehicle Model

Represents vehicles available for forward supply chain logistics.
"""

from __future__ import annotations

import enum
import uuid

from sqlalchemy import Float, ForeignKey, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin


class VehicleType(str, enum.Enum):
    LIGHT_TRUCK = "LIGHT_TRUCK"
    MEDIUM_TRUCK = "MEDIUM_TRUCK"
    HEAVY_TRUCK = "HEAVY_TRUCK"
    ALL_TERRAIN_VEHICLE = "ALL_TERRAIN_VEHICLE"
    CONVOY = "CONVOY"
    HELICOPTER = "HELICOPTER"


class VehicleStatus(str, enum.Enum):
    AVAILABLE = "AVAILABLE"
    IN_TRANSIT = "IN_TRANSIT"
    MAINTENANCE = "MAINTENANCE"
    UNAVAILABLE = "UNAVAILABLE"


class Vehicle(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "vehicles"

    name: Mapped[str] = mapped_column(String(100), nullable=False)
    vehicle_type: Mapped[str] = mapped_column(
        String(50), nullable=False, default=VehicleType.MEDIUM_TRUCK.value
    )
    capacity_kg: Mapped[float] = mapped_column(Float, nullable=False)
    availability_status: Mapped[str] = mapped_column(
        String(50), nullable=False, default=VehicleStatus.AVAILABLE.value, index=True
    )
    home_location_id: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("locations.id", ondelete="SET NULL"),
        nullable=True,
    )

    # Relationships
    home_location: Mapped[Location | None] = relationship(  # noqa: F821
        "Location", lazy="select"
    )

    def __repr__(self) -> str:
        return f"<Vehicle {self.name!r} type={self.vehicle_type!r} status={self.availability_status!r}>"
