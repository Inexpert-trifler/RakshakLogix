"""
RakshakLogix — Test Configuration & Shared Fixtures

Test strategy:
- Unit tests use SQLite in-memory (fast, no Docker required)
- Integration tests should use a real PostgreSQL/PostGIS instance
- GeoAlchemy2 geometry column is neutralized for SQLite compatibility
"""

from __future__ import annotations

import asyncio
from collections.abc import AsyncGenerator

import pytest
import pytest_asyncio
from httpx import ASGITransport, AsyncClient
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine

from app.core.database import Base, get_db
from app.main import app

# ──────────────────────────────────────────────────────────────────────────────
# Patch GeoAlchemy2 geometry column for SQLite compatibility
# We replace the Geometry column type with NullType before any table creation.
# ──────────────────────────────────────────────────────────────────────────────


def _neutralize_geom_column() -> None:
    """
    Replace GeoAlchemy2 Geometry type with Text for SQLite DDL compatibility.
    NullType cannot be compiled to DDL; Text is a safe, portable substitute.
    """
    from sqlalchemy import Text as SAText

    from app.models.location import Location  # noqa: ensure registered

    table = Location.__table__
    geom_col = table.c.get("geom")
    if geom_col is not None:
        col_type_name = type(geom_col.type).__name__
        if col_type_name not in ("Text", "NullType", "VARCHAR"):
            # Detach any DDL event listeners attached by GeoAlchemy2
            try:
                from sqlalchemy import event as sa_event

                for target in (geom_col, geom_col.type):
                    for identifier in (
                        "before_create",
                        "after_create",
                        "before_drop",
                        "after_drop",
                    ):
                        try:
                            sa_event.Events._remove(target, identifier, None)
                        except Exception:
                            pass
            except Exception:
                pass
            # Replace with plain Text column type
            geom_col.type = SAText()


try:
    _neutralize_geom_column()
except Exception:
    pass


# ──────────────────────────────────────────────────────────────────────────────
# Test database — SQLite in-memory
# ──────────────────────────────────────────────────────────────────────────────

TEST_DATABASE_URL = "sqlite+aiosqlite:///:memory:"


@pytest.fixture(scope="session")
def event_loop():
    """Single event loop for the entire test session."""
    loop = asyncio.new_event_loop()
    yield loop
    loop.close()


@pytest_asyncio.fixture(scope="session")
async def test_engine():
    """Create an in-memory SQLite engine, create tables, and seed demo dataset."""
    engine = create_async_engine(
        TEST_DATABASE_URL,
        echo=False,
        connect_args={"check_same_thread": False},
    )

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    # Seed synthetic data for integration tests
    from app.services.data_generation.generator import SyntheticDataGenerator

    session_factory = async_sessionmaker(
        bind=engine,
        expire_on_commit=False,
        autoflush=False,
        autocommit=False,
    )
    async with session_factory() as session:
        generator = SyntheticDataGenerator(seed=42)
        await generator.generate_all(session)

    yield engine

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)

    await engine.dispose()


@pytest_asyncio.fixture
async def db_session(test_engine) -> AsyncGenerator[AsyncSession, None]:
    """Per-test async session — always rolled back."""
    session_factory = async_sessionmaker(
        bind=test_engine,
        expire_on_commit=False,
        autoflush=False,
        autocommit=False,
    )
    async with session_factory() as session:
        yield session
        await session.rollback()


@pytest_asyncio.fixture
async def client(db_session: AsyncSession) -> AsyncGenerator[AsyncClient, None]:
    """Async HTTP test client with DB dependency injected."""

    async def override_get_db():
        yield db_session

    app.dependency_overrides[get_db] = override_get_db

    async with AsyncClient(
        transport=ASGITransport(app=app),
        base_url="http://testserver",
    ) as ac:
        yield ac

    app.dependency_overrides.clear()
