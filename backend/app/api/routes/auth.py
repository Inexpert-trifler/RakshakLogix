"""
RakshakLogix — Authentication API Routes

POST /api/v1/auth/login
GET  /api/v1/auth/me
POST /api/v1/auth/refresh
"""

from __future__ import annotations

from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.core.deps import get_current_user
from app.core.exceptions import AuthenticationError
from app.core.security import create_access_token, create_refresh_token, verify_password
from app.models.user import User
from app.schemas.auth import (
    LoginRequest,
    RefreshTokenRequest,
    TokenResponse,
    UserResponse,
)

router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post("/login", response_model=TokenResponse)
async def login(
    payload: LoginRequest,
    db: AsyncSession = Depends(get_db),
) -> TokenResponse:
    """Authenticates user credentials and returns JWT access and refresh tokens."""
    stmt = select(User).where(User.email == payload.email)
    result = await db.execute(stmt)
    user = result.scalar_one_or_none()

    if not user or not verify_password(payload.password, user.password_hash):
        raise AuthenticationError("Invalid email or password.")

    if user.status != "ACTIVE":
        raise AuthenticationError(f"User account is currently {user.status.lower()}.")

    access_token = create_access_token(
        subject=str(user.id), claims={"role": user.role, "email": user.email}
    )
    refresh_token = create_refresh_token(subject=str(user.id))

    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        token_type="bearer",
        expires_in=1800,  # 30 mins
    )


@router.get("/me", response_model=UserResponse)
async def get_me(current_user: User = Depends(get_current_user)) -> UserResponse:
    """Returns profile for currently authenticated user."""
    return UserResponse.model_validate(current_user)


@router.post("/refresh", response_model=TokenResponse)
async def refresh_token(
    payload: RefreshTokenRequest,
    db: AsyncSession = Depends(get_db),
) -> TokenResponse:
    """Refreshes an expired access token using a valid refresh token."""
    from app.core.security import decode_token

    decoded = decode_token(payload.refresh_token)
    if decoded.get("type") != "refresh":
        raise AuthenticationError("Invalid refresh token.")

    user_id = decoded.get("sub")
    stmt = select(User).where(User.id == user_id)
    result = await db.execute(stmt)
    user = result.scalar_one_or_none()

    if not user or user.status != "ACTIVE":
        raise AuthenticationError("User is no longer active.")

    access_token = create_access_token(
        subject=str(user.id), claims={"role": user.role, "email": user.email}
    )
    new_refresh = create_refresh_token(subject=str(user.id))

    return TokenResponse(
        access_token=access_token,
        refresh_token=new_refresh,
        token_type="bearer",
        expires_in=1800,
    )
