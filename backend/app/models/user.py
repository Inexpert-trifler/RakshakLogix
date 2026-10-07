"""
RakshakLogix — User Model

Roles per documentation:
  ADMIN, LOGISTICS_PLANNER, TRANSPORT_COORDINATOR, COMMAND_VIEWER, DATA_ANALYST
"""

from __future__ import annotations

import enum

from sqlalchemy import Boolean, String
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin


class UserRole(str, enum.Enum):
    ADMIN = "ADMIN"
    LOGISTICS_PLANNER = "LOGISTICS_PLANNER"
    TRANSPORT_COORDINATOR = "TRANSPORT_COORDINATOR"
    COMMAND_VIEWER = "COMMAND_VIEWER"
    DATA_ANALYST = "DATA_ANALYST"
    DATA_ML_ANALYST = "DATA_ML_ANALYST"


class UserStatus(str, enum.Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    SUSPENDED = "SUSPENDED"


class User(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    """
    Platform user with role-based access control.

    CRITICAL: password_hash MUST never be included in API responses.
    """

    __tablename__ = "users"

    name: Mapped[str] = mapped_column(String(255), nullable=False)
    email: Mapped[str] = mapped_column(String(255), nullable=False, unique=True, index=True)
    password_hash: Mapped[str] = mapped_column(String(512), nullable=False)
    role: Mapped[str] = mapped_column(
        String(64),
        nullable=False,
        default=UserRole.LOGISTICS_PLANNER.value,
    )
    status: Mapped[str] = mapped_column(
        String(32),
        nullable=False,
        default=UserStatus.ACTIVE.value,
    )
    is_superuser: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False)

    def __repr__(self) -> str:
        return f"<User id={self.id} email={self.email!r} role={self.role!r}>"
