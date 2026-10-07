"""
RakshakLogix — Centralized Exception Handling

Provides:
- Domain exception hierarchy
- FastAPI exception handlers that return consistent JSON error envelopes
"""

from __future__ import annotations

import uuid
from typing import Any

from fastapi import Request, status
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from starlette.exceptions import HTTPException as StarletteHTTPException

from app.core.logging import get_logger

logger = get_logger(__name__)


# ──────────────────────────────────────────────────────────────────────────────
# Domain Exception Hierarchy
# ──────────────────────────────────────────────────────────────────────────────


class RakshakLogixError(Exception):
    """Base exception for all domain errors."""

    http_status: int = status.HTTP_500_INTERNAL_SERVER_ERROR
    error_code: str = "INTERNAL_ERROR"

    def __init__(self, message: str = "An unexpected error occurred.", details: Any = None) -> None:
        super().__init__(message)
        self.message = message
        self.details = details or {}


class NotFoundError(RakshakLogixError):
    """Raised when a requested resource does not exist."""

    http_status = status.HTTP_404_NOT_FOUND
    error_code = "NOT_FOUND"


class ConflictError(RakshakLogixError):
    """Raised when an operation conflicts with existing state."""

    http_status = status.HTTP_409_CONFLICT
    error_code = "CONFLICT"


class ValidationError(RakshakLogixError):
    """Raised when business-rule validation fails (not HTTP validation)."""

    http_status = getattr(status, "HTTP_422_UNPROCESSABLE_CONTENT", 422)
    error_code = "VALIDATION_ERROR"


class AuthenticationError(RakshakLogixError):
    """Raised on invalid credentials or expired tokens."""

    http_status = status.HTTP_401_UNAUTHORIZED
    error_code = "AUTHENTICATION_FAILED"


class AuthorizationError(RakshakLogixError):
    """Raised when the caller lacks permission."""

    http_status = status.HTTP_403_FORBIDDEN
    error_code = "FORBIDDEN"


class ImportError(RakshakLogixError):  # noqa: A001
    """Raised when a data import cannot proceed at all."""

    http_status = status.HTTP_400_BAD_REQUEST
    error_code = "IMPORT_FAILED"


class ServiceUnavailableError(RakshakLogixError):
    """Raised when a downstream dependency is unavailable."""

    http_status = status.HTTP_503_SERVICE_UNAVAILABLE
    error_code = "SERVICE_UNAVAILABLE"


# ──────────────────────────────────────────────────────────────────────────────
# Response Builder
# ──────────────────────────────────────────────────────────────────────────────


def _error_envelope(
    code: str,
    message: str,
    details: Any,
    request_id: str,
    http_status: int,
) -> JSONResponse:
    return JSONResponse(
        status_code=http_status,
        content={
            "error": {
                "code": code,
                "message": message,
                "details": details if details is not None else {},
                "request_id": request_id,
            }
        },
    )


# ──────────────────────────────────────────────────────────────────────────────
# FastAPI Exception Handlers
# ──────────────────────────────────────────────────────────────────────────────


async def domain_exception_handler(request: Request, exc: RakshakLogixError) -> JSONResponse:
    request_id = str(uuid.uuid4())
    logger.warning(
        "domain_error",
        code=exc.error_code,
        message=exc.message,
        path=str(request.url),
        request_id=request_id,
    )
    return _error_envelope(
        code=exc.error_code,
        message=exc.message,
        details=exc.details,
        request_id=request_id,
        http_status=exc.http_status,
    )


async def http_exception_handler(request: Request, exc: StarletteHTTPException) -> JSONResponse:
    request_id = str(uuid.uuid4())
    logger.info(
        "http_exception",
        status_code=exc.status_code,
        detail=exc.detail,
        path=str(request.url),
        request_id=request_id,
    )
    return _error_envelope(
        code="HTTP_ERROR",
        message=str(exc.detail),
        details={},
        request_id=request_id,
        http_status=exc.status_code,
    )


async def validation_exception_handler(
    request: Request, exc: RequestValidationError
) -> JSONResponse:
    request_id = str(uuid.uuid4())
    errors = [
        {
            "field": " → ".join(str(loc) for loc in err["loc"]),
            "message": err["msg"],
            "type": err["type"],
        }
        for err in exc.errors()
    ]
    logger.info(
        "validation_error",
        errors=errors,
        path=str(request.url),
        request_id=request_id,
    )
    return _error_envelope(
        code="VALIDATION_ERROR",
        message="Request validation failed.",
        details={"errors": errors},
        request_id=request_id,
        http_status=getattr(status, "HTTP_422_UNPROCESSABLE_CONTENT", 422),
    )


async def unhandled_exception_handler(request: Request, exc: Exception) -> JSONResponse:
    request_id = str(uuid.uuid4())
    logger.exception(
        "unhandled_exception",
        exc_info=exc,
        path=str(request.url),
        request_id=request_id,
    )
    # Never expose stack traces to clients
    return _error_envelope(
        code="INTERNAL_ERROR",
        message="An unexpected internal error occurred.",
        details={},
        request_id=request_id,
        http_status=status.HTTP_500_INTERNAL_SERVER_ERROR,
    )
