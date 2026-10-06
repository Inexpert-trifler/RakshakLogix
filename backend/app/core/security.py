"""
RakshakLogix — Security Utilities

Provides:
- Password hashing/verification (Argon2id primary, bcrypt fallback)
- JWT access and refresh token creation and decoding
"""

from __future__ import annotations

from datetime import UTC, datetime, timedelta
from typing import Any

from jose import JWTError, jwt
from passlib.context import CryptContext

from app.core.config import settings
from app.core.exceptions import AuthenticationError
from app.core.logging import get_logger

logger = get_logger(__name__)

# ──────────────────────────────────────────────────────────────────────────────
# Password Hashing
# ──────────────────────────────────────────────────────────────────────────────

_SCHEMES = (
    ["argon2", "bcrypt"] if settings.password_hash_scheme == "argon2id" else ["bcrypt"]
)

pwd_context = CryptContext(schemes=_SCHEMES, deprecated="auto")


def hash_password(plain_password: str) -> str:
    """Return the hashed representation of a plaintext password."""
    return pwd_context.hash(plain_password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Return True if plain_password matches hashed_password."""
    return pwd_context.verify(plain_password, hashed_password)


# ──────────────────────────────────────────────────────────────────────────────
# JWT
# ──────────────────────────────────────────────────────────────────────────────


def create_access_token(
    subject: str,
    role: str = "COMMAND_VIEWER",
    claims: dict[str, Any] | None = None,
    extra_claims: dict[str, Any] | None = None,
) -> str:
    """Create a signed JWT access token."""
    expire = datetime.now(UTC) + timedelta(
        minutes=settings.jwt_access_token_expire_minutes
    )
    payload: dict[str, Any] = {
        "sub": subject,
        "role": role,
        "exp": expire,
        "iat": datetime.now(UTC),
        "type": "access",
    }
    if claims:
        payload.update(claims)
    if extra_claims:
        payload.update(extra_claims)

    return jwt.encode(
        payload, settings.jwt_secret_key, algorithm=settings.jwt_algorithm
    )


def create_refresh_token(subject: str) -> str:
    """Create a signed JWT refresh token."""
    expire = datetime.now(UTC) + timedelta(days=7)
    payload: dict[str, Any] = {
        "sub": subject,
        "exp": expire,
        "iat": datetime.now(UTC),
        "type": "refresh",
    }
    return jwt.encode(
        payload, settings.jwt_secret_key, algorithm=settings.jwt_algorithm
    )


def decode_token(token: str) -> dict[str, Any]:
    """Decode and validate a JWT token (access or refresh)."""
    try:
        payload = jwt.decode(
            token,
            settings.jwt_secret_key,
            algorithms=[settings.jwt_algorithm],
        )
        return payload
    except JWTError as exc:
        logger.debug("jwt_decode_failed", error=str(exc))
        raise AuthenticationError("Invalid or expired token.") from exc


def decode_access_token(token: str) -> dict[str, Any]:
    """Decode and validate a JWT access token."""
    payload = decode_token(token)
    if payload.get("type") != "access":
        raise AuthenticationError("Invalid token type.")
    return payload
