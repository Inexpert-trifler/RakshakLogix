"""
RakshakLogix — Health Check Endpoints

Provides:
  GET /                    — service root info
  GET /health              — liveness probe (no auth)
  GET /health/db           — database health check
  GET /api/v1/health       — versioned health with dependency checks
"""

from __future__ import annotations

from datetime import UTC, datetime

from fastapi import APIRouter, Depends
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.core.database import get_db
from app.core.logging import get_logger

logger = get_logger(__name__)

router = APIRouter(tags=["Health"])


@router.get("/", summary="Root index info")
async def root_index() -> dict:
    return {
        "status": "ok",
        "service": settings.app_name,
        "version": settings.app_version,
        "docs_url": f"{settings.api_v1_prefix}/docs",
    }


@router.get("/health", summary="Root health check")
async def root_health() -> dict:
    """
    Lightweight liveness probe — no database connection required.
    Used by Docker/Kubernetes liveness checks.
    """
    return {
        "status": "ok",
        "service": settings.app_name,
        "version": settings.app_version,
        "environment": settings.app_env,
        "timestamp": datetime.now(UTC).isoformat(),
    }


@router.get("/ready", summary="Readiness probe")
async def readiness_probe(db: AsyncSession = Depends(get_db)) -> dict:
    """
    Readiness probe — verifies core database connectivity.
    Used by load balancers and orchestrators.
    """
    try:
        await db.execute(text("SELECT 1"))
        return {
            "status": "ready",
            "service": settings.app_name,
            "database": "connected",
            "timestamp": datetime.now(UTC).isoformat(),
        }
    except Exception as exc:
        logger.error("readiness_probe_failed", error=str(exc))
        return {
            "status": "not_ready",
            "service": settings.app_name,
            "database": "disconnected",
            "error": str(exc),
        }


@router.get("/health/db", summary="Database connection health check")
async def db_health(db: AsyncSession = Depends(get_db)) -> dict:
    """
    Probes PostgreSQL/database connectivity directly.
    """
    try:
        await db.execute(text("SELECT 1"))
        return {"status": "ok", "database": "connected"}
    except Exception as exc:
        logger.error("db_health_check_failed", error=str(exc))
        return {"status": "error", "database": "disconnected", "detail": str(exc)}


@router.get(
    f"{settings.api_v1_prefix}/health",
    summary="Versioned health check with dependency status",
)
async def versioned_health(db: AsyncSession = Depends(get_db)) -> dict:
    """
    Detailed health check that probes PostgreSQL connectivity.
    Used for operational monitoring.
    """
    db_status = "ok"
    db_error: str | None = None

    try:
        await db.execute(text("SELECT 1"))
    except Exception as exc:
        db_status = "error"
        db_error = str(exc)
        logger.error("health_check_db_failed", error=db_error)

    overall = "ok" if db_status == "ok" else "degraded"

    return {
        "status": overall,
        "service": settings.app_name,
        "version": settings.app_version,
        "environment": settings.app_env,
        "timestamp": datetime.now(UTC).isoformat(),
        "dependencies": {
            "database": {
                "status": db_status,
                **({"error": db_error} if db_error else {}),
            }
        },
    }
