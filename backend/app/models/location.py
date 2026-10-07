"""
RakshakLogix — Location Model

Supports PostGIS geospatial column for spatial queries (PostgreSQL/PostGIS only).

Types per documentation:
  DEPOT, HUB, FORWARD_POST, DISTRIBUTION_CENTER
"""

from __future__ import annotations

import enum

from sqlalchemy import Column, Float, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin

try:
    from geoalchemy2 import Geometry as _PGGeometry

    _geom_column: object = Column(
        "geom", _PGGeometry(geometry_type="POINT", srid=4326), nullable=True
    )
except ImportError:
    # geoalchemy2 not installed — use a plain text column as stub
    from sqlalchemy import Text as _Text  # noqa: F811

    _geom_column = Column("geom", _Text, nullable=True)


class LocationType(str, enum.Enum):
    DEPOT = "DEPOT"
    HUB = "HUB"
    FORWARD_POST = "FORWARD_POST"
    DISTRIBUTION_CENTER = "DISTRIBUTION_CENTER"


class TerrainType(str, enum.Enum):
    PLAINS = "PLAINS"
    MOUNTAIN = "MOUNTAIN"
    VALLEY = "VALLEY"
    GLACIER = "GLACIER"
    HIGH_PLATEAU = "HIGH_PLATEAU"
    MARSH = "MARSH"
    DESERT = "DESERT"
    JUNGLE = "JUNGLE"
    COASTAL = "COASTAL"
    URBAN = "URBAN"


class LocationStatus(str, enum.Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    DEGRADED = "DEGRADED"


class Location(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    """
    A logistics node in the supply network.
    Stored with a PostGIS POINT geometry for spatial querying.
    When running without PostGIS (unit tests, SQLite), geom is stored as text.
    """

    __tablename__ = "locations"

    name: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    type: Mapped[str] = mapped_column(String(64), nullable=False)
    latitude: Mapped[float] = mapped_column(Float, nullable=False)
    longitude: Mapped[float] = mapped_column(Float, nullable=False)
    elevation_m: Mapped[float | None] = mapped_column(Float, nullable=True)
    terrain_type: Mapped[str | None] = mapped_column(String(64), nullable=True)
    capacity: Mapped[float | None] = mapped_column(Float, nullable=True)
    priority: Mapped[int] = mapped_column(Integer, nullable=False, default=5)
    status: Mapped[str] = mapped_column(
        String(32), nullable=False, default=LocationStatus.ACTIVE.value
    )
    description: Mapped[str | None] = mapped_column(Text, nullable=True)

    # PostGIS POINT geometry — defined above to handle missing geoalchemy2
    geom = _geom_column

    # Relationships
    inventory: Mapped[list] = relationship("Inventory", back_populates="location", lazy="select")
    consumption_records: Mapped[list] = relationship(
        "ConsumptionRecord", back_populates="location", lazy="select"
    )

    def __repr__(self) -> str:
        return f"<Location id={self.id} name={self.name!r} type={self.type!r}>"
