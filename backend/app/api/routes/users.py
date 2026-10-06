"""
RakshakLogix — User Management API Routes

GET/POST  /api/v1/users
GET/PATCH /api/v1/users/{id}
"""

from __future__ import annotations

import uuid

from fastapi import APIRouter, Depends, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.core.deps import require_role
from app.core.exceptions import NotFoundError, ValidationError
from app.core.security import hash_password
from app.models.user import User, UserRole, UserStatus
from app.schemas.auth import UserCreate, UserResponse, UserUpdate

router = APIRouter(prefix="/users", tags=["User Management"])


@router.get("", response_model=list[UserResponse])
async def list_users(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_role("ADMIN")),
) -> list[UserResponse]:
    """Retrieves all registered platform users (ADMIN role required)."""
    stmt = select(User).order_by(User.name)
    result = await db.execute(stmt)
    users = result.scalars().all()
    return [UserResponse.model_validate(u) for u in users]


@router.post("", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def create_user(
    payload: UserCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_role("ADMIN")),
) -> UserResponse:
    """Registers a new platform user with specific role (ADMIN role required)."""
    # Check duplicate email
    stmt = select(User).where(User.email == payload.email)
    existing = (await db.execute(stmt)).scalar_one_or_none()
    if existing:
        raise ValidationError(f"User with email '{payload.email}' already exists.")

    user = User(
        name=payload.name,
        email=payload.email,
        password_hash=hash_password(payload.password),
        role=(
            payload.role
            if payload.role in {r.value for r in UserRole}
            else UserRole.LOGISTICS_PLANNER.value
        ),
        status=UserStatus.ACTIVE.value,
    )
    db.add(user)
    await db.commit()
    await db.refresh(user)
    return UserResponse.model_validate(user)


@router.get("/{id}", response_model=UserResponse)
async def get_user(
    id: uuid.UUID,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_role("ADMIN")),
) -> UserResponse:
    """Retrieves detailed user profile (ADMIN role required)."""
    stmt = select(User).where(User.id == id)
    user = (await db.execute(stmt)).scalar_one_or_none()
    if not user:
        raise NotFoundError(f"User {id} not found.")
    return UserResponse.model_validate(user)


@router.patch("/{id}", response_model=UserResponse)
async def update_user(
    id: uuid.UUID,
    payload: UserUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_role("ADMIN")),
) -> UserResponse:
    """Updates user profile or role status (ADMIN role required)."""
    stmt = select(User).where(User.id == id)
    user = (await db.execute(stmt)).scalar_one_or_none()
    if not user:
        raise NotFoundError(f"User {id} not found.")

    if payload.name is not None:
        user.name = payload.name
    if payload.role is not None:
        user.role = payload.role
    if payload.status is not None:
        user.status = payload.status

    await db.commit()
    await db.refresh(user)
    return UserResponse.model_validate(user)
