"""
RakshakLogix — Authentication & User Schemas
"""

from __future__ import annotations

import uuid

from pydantic import BaseModel, ConfigDict, EmailStr, Field


class LoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=6)


class RefreshTokenRequest(BaseModel):
    refresh_token: str


class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    expires_in: int


class UserCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=255)
    email: EmailStr
    password: str = Field(..., min_length=6, max_length=128)
    role: str = Field(
        default="LOGISTICS_PLANNER",
        description="ADMIN, LOGISTICS_PLANNER, TRANSPORT_COORDINATOR, COMMAND_VIEWER, DATA_ANALYST",
    )


class UserUpdate(BaseModel):
    name: str | None = None
    role: str | None = None
    status: str | None = None


class UserResponse(BaseModel):
    id: uuid.UUID
    name: str
    email: EmailStr
    role: str
    status: str

    model_config = ConfigDict(from_attributes=True)
