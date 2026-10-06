"""
RakshakLogix — Route & RouteSegment Models

Represents forward logistics network routes and individual geographical route segments.
"""

from __future__ import annotations

import enum
import uuid

from sqlalchemy import Float, ForeignKey, Integer, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin


class RouteStatus(str, enum.Enum):
    ACTIVE = "ACTIVE"
    RESTRICTED = "RESTRICTED"
    BLOCKED = "BLOCKED"
    HIGH_RISK = "HIGH_RISK"


class Route(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "routes"

    name: Mapped[str] = mapped_column(String(100), nullable=False)
    status: Mapped[str] = mapped_column(
        String(32), nullable=False, default=RouteStatus.ACTIVE.value, index=True
    )
    base_risk_score: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)

    # Relationships
    segments: Mapped[list[RouteSegment]] = relationship(
        "RouteSegment",
        back_populates="route",
        cascade="all, delete-orphan",
        lazy="select",
        order_by="RouteSegment.segment_order",
    )

    def __repr__(self) -> str:
        return (
            f"<Route {self.name!r} status={self.status!r} risk={self.base_risk_score}>"
        )


class RouteSegment(UUIDPrimaryKeyMixin, Base):
    __tablename__ = "route_segments"

    route_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("routes.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    from_location_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("locations.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    to_location_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("locations.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    segment_order: Mapped[int] = mapped_column(Integer, nullable=False, default=1)
    distance_km: Mapped[float] = mapped_column(Float, nullable=False)
    travel_time_hours: Mapped[float] = mapped_column(Float, nullable=False)
    terrain_risk: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
    road_risk: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)

    # Relationships
    route: Mapped[Route] = relationship(
        "Route", back_populates="segments", lazy="select"
    )
    from_location: Mapped[Location] = relationship(
        "Location", foreign_keys=[from_location_id], lazy="select"
    )  # noqa: F821
    to_location: Mapped[Location] = relationship(
        "Location", foreign_keys=[to_location_id], lazy="select"
    )  # noqa: F821

    def __repr__(self) -> str:
        return (
            f"<RouteSegment route={self.route_id} order={self.segment_order} "
            f"distance={self.distance_km}km>"
        )
