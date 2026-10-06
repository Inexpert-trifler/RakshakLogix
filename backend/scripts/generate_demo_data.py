"""
RakshakLogix — Generate Demo Data CLI Script

Usage:
  python -m scripts.generate_demo_data [--seed 42] [--reset] [--sqlite]
"""

from __future__ import annotations

import argparse
import asyncio
import sys
from pathlib import Path

# Ensure backend root is in PYTHONPATH
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from app.core.database import Base, engine, patch_sqlite_geom_compat
from app.services.data_generation.generator import SyntheticDataGenerator
from tests.conftest import _neutralize_geom_column


async def run_data_generation(
    seed: int = 42, reset: bool = False, use_sqlite: bool = False
) -> None:
    patch_sqlite_geom_compat()

    print(f"🌱 Initializing RakshakLogix Synthetic Data Engine (Seed={seed})...")

    current_engine = engine

    if use_sqlite:
        _neutralize_geom_column()
        from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine

        print("ℹ️ Using local SQLite database file (rakshaklogix_demo.db)...")
        current_engine = create_async_engine(
            "sqlite+aiosqlite:///rakshaklogix_demo.db", echo=False
        )
        session_factory = async_sessionmaker(
            bind=current_engine, expire_on_commit=False
        )
    else:
        # Probe PostgreSQL connection
        try:
            async with current_engine.begin() as conn:
                from sqlalchemy import text

                await conn.execute(text("SELECT 1"))
            from app.core.database import AsyncSessionLocal

            session_factory = AsyncSessionLocal
        except Exception:
            print(
                "⚠️ Could not connect to PostgreSQL on port 5432. Falling back to SQLite (rakshaklogix_demo.db)..."
            )
            _neutralize_geom_column()
            from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine

            current_engine = create_async_engine(
                "sqlite+aiosqlite:///rakshaklogix_demo.db", echo=False
            )
            session_factory = async_sessionmaker(
                bind=current_engine, expire_on_commit=False
            )

    if reset:
        print("⚠️ Resetting database schema...")
        async with current_engine.begin() as conn:
            await conn.run_sync(Base.metadata.drop_all)
            await conn.run_sync(Base.metadata.create_all)
    else:
        async with current_engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)

    async with session_factory() as session:
        generator = SyntheticDataGenerator(seed=seed)
        counts = await generator.generate_all(session)

    if counts.get("status") == 0:
        print(f"⚠️ {counts['message']}")
    else:
        print("✅ Synthetic dataset successfully generated:")
        for entity, count in counts.items():
            print(f"  - {entity}: {count}")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="RakshakLogix Synthetic Data Generator"
    )
    parser.add_argument(
        "--seed",
        type=int,
        default=42,
        help="Random seed for deterministic generation (default: 42)",
    )
    parser.add_argument(
        "--reset",
        action="store_true",
        help="Drop and recreate database schema before generation (dev only)",
    )
    parser.add_argument(
        "--sqlite",
        action="store_true",
        help="Force using local SQLite database file",
    )
    args = parser.parse_args()

    asyncio.run(
        run_data_generation(seed=args.seed, reset=args.reset, use_sqlite=args.sqlite)
    )


if __name__ == "__main__":
    main()
