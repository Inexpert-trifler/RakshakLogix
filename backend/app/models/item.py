"""
RakshakLogix — Supply Item Model

Represents a generic supply category (fuel, food, ammunition, medical, etc.)
Not classified / operational data — uses generic categories.
"""

from __future__ import annotations

import enum

from sqlalchemy import Float, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin


class ItemCategory(str, enum.Enum):
    FUEL = "FUEL"
    FOOD = "FOOD"
    MEDICAL = "MEDICAL"
    AMMUNITION = "AMMUNITION"
    EQUIPMENT = "EQUIPMENT"
    CLOTHING = "CLOTHING"
    SPARE_PARTS = "SPARE_PARTS"
    CONSTRUCTION = "CONSTRUCTION"
    COMMUNICATION = "COMMUNICATION"
    WATER = "WATER"
    OTHER = "OTHER"


class ItemCriticality(str, enum.Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"


class ItemUnit(str, enum.Enum):
    KG = "KG"
    LITRE = "LITRE"
    UNIT = "UNIT"
    BOX = "BOX"
    TON = "TON"
    METRE = "METRE"
    PACK = "PACK"
    RATION_PACK = "RATION_PACK"
    SET = "SET"


class Item(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    """
    A generic supply item/category tracked by the logistics system.
    """

    __tablename__ = "items"

    name: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    category: Mapped[str] = mapped_column(String(64), nullable=False)
    unit: Mapped[str] = mapped_column(String(32), nullable=False, default=ItemUnit.UNIT.value)
    criticality: Mapped[str] = mapped_column(
        String(32), nullable=False, default=ItemCriticality.MEDIUM.value
    )
    shelf_life_days: Mapped[int | None] = mapped_column(Integer, nullable=True)
    min_stock: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
    safety_stock: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    is_active: Mapped[bool] = mapped_column(default=True, nullable=False)

    # Relationships
    inventory: Mapped[list] = relationship("Inventory", back_populates="item", lazy="select")
    consumption_records: Mapped[list] = relationship(
        "ConsumptionRecord", back_populates="item", lazy="select"
    )

    def __repr__(self) -> str:
        return f"<Item id={self.id} name={self.name!r} category={self.category!r}>"
