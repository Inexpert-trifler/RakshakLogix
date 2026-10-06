"""
RakshakLogix — SQLAlchemy Async Database Engine & Session Factory

Provides:
- Async engine configured from settings (PostgreSQL/PostGIS production or SQLite dev)
- AsyncSession factory with dependency injection helper
- Base declarative model class
"""

from __future__ import annotations

from collections.abc import AsyncGenerator

from sqlalchemy import Text
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase

from app.core.config import settings
from app.core.logging import get_logger

logger = get_logger(__name__)

# ──────────────────────────────────────────────────────────────────────────────
# Engine Factory
# ──────────────────────────────────────────────────────────────────────────────

is_sqlite = settings.database_url.startswith("sqlite")

engine_kwargs: dict = {
    "echo": settings.database_echo,
}

if not is_sqlite:
    engine_kwargs.update(
        {
            "pool_size": settings.database_pool_size,
            "max_overflow": settings.database_max_overflow,
            "pool_pre_ping": True,
            "pool_recycle": 3600,
        }
    )

engine = create_async_engine(settings.database_url, **engine_kwargs)


def patch_sqlite_geom_compat() -> None:
    """Neutralize GeoAlchemy2 PostGIS events when running against SQLite."""
    if is_sqlite:
        from app.models.location import Location

        if hasattr(Location, "__table__") and "geom" in Location.__table__.c:
            Location.__table__.c.geom.type = Text()


# ──────────────────────────────────────────────────────────────────────────────
# Session factory
# ──────────────────────────────────────────────────────────────────────────────

AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    expire_on_commit=False,
    autoflush=False,
    autocommit=False,
)


# ──────────────────────────────────────────────────────────────────────────────
# Declarative Base
# ──────────────────────────────────────────────────────────────────────────────


class Base(DeclarativeBase):
    """Shared declarative base for all SQLAlchemy models."""

    pass


# ──────────────────────────────────────────────────────────────────────────────
# FastAPI Dependency
# ──────────────────────────────────────────────────────────────────────────────


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """
    FastAPI dependency that yields an AsyncSession and ensures it is
    committed on success or rolled back on exception, then closed.
    """
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()
