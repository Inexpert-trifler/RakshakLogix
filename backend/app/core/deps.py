"""
RakshakLogix — Dependency Injection Module

Provides:
- `get_current_user`: extracts and validates JWT bearer token, fetching active user from DB.
- `require_role`: role-based access control (RBAC) guard.
"""

from __future__ import annotations

import uuid
from collections.abc import Callable

from fastapi import Depends
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.core.exceptions import AuthenticationError, AuthorizationError
from app.core.security import decode_token
from app.models.user import User

security_scheme = HTTPBearer(auto_error=False)


async def get_current_user(
    credentials: HTTPAuthorizationCredentials | None = Depends(security_scheme),
    db: AsyncSession = Depends(get_db),
) -> User:
    """Validates HTTP Bearer token and returns authenticated active user."""
    if not credentials or not credentials.credentials:
        # Fallback demo user for development/unauthenticated testing if configured, else auth error
        # In full production JWT required:
        raise AuthenticationError("Authentication token is missing.")

    token = credentials.credentials
    payload = decode_token(token)
    user_id_str = payload.get("sub")

    if not user_id_str:
        raise AuthenticationError("Invalid token payload.")

    try:
        user_id = uuid.UUID(user_id_str)
    except ValueError:
        raise AuthenticationError("Invalid user ID in token.")

    stmt = select(User).where(User.id == user_id)
    result = await db.execute(stmt)
    user = result.scalar_one_or_none()

    if not user:
        raise AuthenticationError("User associated with token not found.")

    if user.status != "ACTIVE":
        raise AuthenticationError(f"User account is {user.status.lower()}.")

    return user


def require_role(*allowed_roles: str) -> Callable:
    """RBAC Guard requiring user to have one of the specified roles."""

    async def role_checker(current_user: User = Depends(get_current_user)) -> User:
        if current_user.role not in allowed_roles and current_user.role != "ADMIN":
            raise AuthorizationError(
                f"Action requires one of the following roles: {', '.join(allowed_roles)}"
            )
        return current_user

    return role_checker
