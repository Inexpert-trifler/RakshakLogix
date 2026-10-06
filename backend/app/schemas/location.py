"""
RakshakLogix — Location & Item Schemas
"""

from __future__ import annotations

import uuid

from pydantic import BaseModel, ConfigDict, Field


class LocationBase(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    type: str  # DEPOT, HUB, FORWARD_POST, DISTRIBUTION_CENTER
    latitude: float = Field(..., ge=-90.0, le=90.0)
    longitude: float = Field(..., ge=-180.0, le=180.0)
    elevation_m: float | None = 0.0
    terrain_type: str = "PLAINS"  # PLAINS, MOUNTAIN, DESERT, JUNGLE, MARSH
    capacity: float | None = 1000.0
    priority: int = Field(5, ge=1, le=10)
    status: str = "ACTIVE"


class LocationCreate(LocationBase):
    pass


class LocationUpdate(BaseModel):
    name: str | None = None
    type: str | None = None
    latitude: float | None = None
    longitude: float | None = None
    elevation_m: float | None = None
    terrain_type: str | None = None
    capacity: float | None = None
    priority: int | None = None
    status: str | None = None


class LocationResponse(LocationBase):
    id: uuid.UUID

    model_config = ConfigDict(from_attributes=True)


class ItemBase(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    category: str  # FUEL, FOOD, MEDICAL, AMMUNITION, etc.
    unit: str  # KG, LITRE, UNIT, BOX, RATION_PACK
    criticality: str = "MEDIUM"  # LOW, MEDIUM, HIGH, CRITICAL
    shelf_life_days: int | None = None
    min_stock: float = 0.0
    safety_stock: float = 0.0


class ItemCreate(ItemBase):
    pass


class ItemResponse(ItemBase):
    id: uuid.UUID

    model_config = ConfigDict(from_attributes=True)
