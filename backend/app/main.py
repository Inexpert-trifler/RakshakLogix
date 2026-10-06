"""
RakshakLogix — FastAPI Application Entry Point

Responsibilities:
- Create and configure the FastAPI app instance
- Register all API v1 routers
- Register exception handlers
- Configure CORS
- Configure OpenAPI metadata
- Run startup / shutdown lifecycle hooks
"""

from __future__ import annotations

from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from starlette.exceptions import HTTPException as StarletteHTTPException

from app.core.config import settings
from app.core.exceptions import (
    RakshakLogixError,
    domain_exception_handler,
    http_exception_handler,
    unhandled_exception_handler,
    validation_exception_handler,
)
from app.core.logging import configure_logging, get_logger

# ──────────────────────────────────────────────────────────────────────────────
# Configure logging before anything else
# ──────────────────────────────────────────────────────────────────────────────
configure_logging()
logger = get_logger(__name__)


# ──────────────────────────────────────────────────────────────────────────────
# Lifespan (startup / shutdown)
# ──────────────────────────────────────────────────────────────────────────────


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Startup and shutdown lifecycle manager."""
    logger.info(
        "rakshaklogix_starting",
        version=settings.app_version,
        environment=settings.app_env,
    )
    yield
    logger.info("rakshaklogix_shutdown")


# ──────────────────────────────────────────────────────────────────────────────
# Application factory
# ──────────────────────────────────────────────────────────────────────────────


def create_application() -> FastAPI:
    app = FastAPI(
        title="RakshakLogix API",
        description=(
            "**RakshakLogix** — AI-assisted Predictive Logistics & Forward Supply Chain "
            "Decision-Support Platform.\n\n"
            "SIH Problem Statement 26251 | Indian Army — Predictive Logistics.\n\n"
            "> Predict → Detect → Simulate → Optimize → Act"
        ),
        version=settings.app_version,
        openapi_url=f"{settings.api_v1_prefix}/openapi.json",
        docs_url=f"{settings.api_v1_prefix}/docs",
        redoc_url=f"{settings.api_v1_prefix}/redoc",
        lifespan=lifespan,
    )

    # ------------------------------------------------------------------
    # CORS
    # ------------------------------------------------------------------
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # ------------------------------------------------------------------
    # Exception handlers
    # ------------------------------------------------------------------
    app.add_exception_handler(RakshakLogixError, domain_exception_handler)  # type: ignore[arg-type]
    app.add_exception_handler(StarletteHTTPException, http_exception_handler)  # type: ignore[arg-type]
    app.add_exception_handler(RequestValidationError, validation_exception_handler)  # type: ignore[arg-type]
    app.add_exception_handler(Exception, unhandled_exception_handler)

    # ------------------------------------------------------------------
    # Routers — import here to avoid circular imports
    # ------------------------------------------------------------------
    from app.api.routes.auth import router as auth_router
    from app.api.routes.dashboard import router as dashboard_router
    from app.api.routes.forecast import router as forecast_router
    from app.api.routes.health import router as health_router
    from app.api.routes.inventory import router as inventory_router
    from app.api.routes.locations import router as locations_router
    from app.api.routes.logistics import router as logistics_router
    from app.api.routes.risks import router as risks_router
    from app.api.routes.simulations import router as simulations_router
    from app.api.routes.users import router as users_router

    # Root health (no prefix)
    app.include_router(health_router)

    # Versioned API routes (/api/v1/...)
    app.include_router(auth_router, prefix=settings.api_v1_prefix)
    app.include_router(users_router, prefix=settings.api_v1_prefix)
    app.include_router(locations_router, prefix=settings.api_v1_prefix)
    app.include_router(inventory_router, prefix=settings.api_v1_prefix)
    app.include_router(forecast_router, prefix=settings.api_v1_prefix)
    app.include_router(logistics_router, prefix=settings.api_v1_prefix)
    app.include_router(risks_router, prefix=settings.api_v1_prefix)
    app.include_router(simulations_router, prefix=settings.api_v1_prefix)
    app.include_router(dashboard_router, prefix=settings.api_v1_prefix)

    return app


# ──────────────────────────────────────────────────────────────────────────────
# Application instance
# ──────────────────────────────────────────────────────────────────────────────

app = create_application()
