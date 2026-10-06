"""
RakshakLogix — Locations & Items API Routes

GET/POST  /api/v1/locations
GET/PATCH /api/v1/locations/{id}
GET/POST  /api/v1/items
"""

from __future__ import annotations

import uuid

from fastapi import APIRouter, Depends, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.core.deps import get_current_user
from app.core.exceptions import NotFoundError
from app.models.item import Item
from app.models.location import Location
from app.models.user import User
from app.schemas.location import (
    ItemCreate,
    ItemResponse,
    LocationCreate,
    LocationResponse,
    LocationUpdate,
)

router = APIRouter(tags=["Locations & Items"])


@router.get("/locations", response_model=list[LocationResponse])
async def list_locations(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[LocationResponse]:
    """Retrieves all registered forward supply chain locations."""
    stmt = select(Location).order_by(Location.name)
    result = await db.execute(stmt)
    locations = result.scalars().all()
    return [LocationResponse.model_validate(loc) for loc in locations]


@router.post(
    "/locations",
    response_model=LocationResponse,
    status_code=(
        status.HTTP_211_CREATED
        if hasattr(status, "HTTP_211_CREATED")
        else status.HTTP_201_CREATED
    ),
)
async def create_location(
    payload: LocationCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> LocationResponse:
    """Creates a new logistics location (Depot, Hub, Forward Post)."""
    loc = Location(**payload.model_dump())
    db.add(loc)
    await db.commit()
    await db.refresh(loc)
    return LocationResponse.model_validate(loc)


@router.get("/locations/{id}", response_model=LocationResponse)
async def get_location(
    id: uuid.UUID,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> LocationResponse:
    """Retrieves detailed information for a specific location."""
    stmt = select(Location).where(Location.id == id)
    result = await db.execute(stmt)
    loc = result.scalar_one_or_none()
    if not loc:
        raise NotFoundError(f"Location with ID {id} not found.")
    return LocationResponse.model_validate(loc)


@router.patch("/locations/{id}", response_model=LocationResponse)
async def update_location(
    id: uuid.UUID,
    payload: LocationUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> LocationResponse:
    """Updates fields of an existing location."""
    stmt = select(Location).where(Location.id == id)
    result = await db.execute(stmt)
    loc = result.scalar_one_or_none()
    if not loc:
        raise NotFoundError(f"Location with ID {id} not found.")

    update_data = payload.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(loc, field, value)

    await db.commit()
    await db.refresh(loc)
    return LocationResponse.model_validate(loc)


@router.get("/items", response_model=list[ItemResponse])
async def list_items(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[ItemResponse]:
    """Retrieves all registered supply items and categories."""
    stmt = select(Item).order_by(Item.name)
    result = await db.execute(stmt)
    items = result.scalars().all()
    return [ItemResponse.model_validate(item) for item in items]


@router.post("/items", response_model=ItemResponse, status_code=status.HTTP_201_CREATED)
async def create_item(
    payload: ItemCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> ItemResponse:
    """Creates a new supply item catalog entry."""
    item = Item(**payload.model_dump())
    db.add(item)
    await db.commit()
    await db.refresh(item)
    return ItemResponse.model_validate(item)
