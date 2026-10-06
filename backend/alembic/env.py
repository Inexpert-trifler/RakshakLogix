"""
Alembic migration environment configuration for RakshakLogix.

Uses synchronous psycopg2 URL (Alembic does not support asyncpg directly).
Reads configuration from application Settings to avoid duplicating credentials.
"""

from __future__ import annotations

from logging.config import fileConfig

from sqlalchemy import engine_from_config, pool

import app.models  # noqa: F401 — ensures all models are registered
from alembic import context

# Import Base and all models so autogenerate can detect them
from app.core.config import settings
from app.core.database import Base

# ──────────────────────────────────────────────────────────────────────────────
# Alembic Config object
# ──────────────────────────────────────────────────────────────────────────────
config = context.config

# Set the SQLAlchemy URL from application settings (synchronous psycopg2 driver)
config.set_main_option("sqlalchemy.url", settings.database_sync_url)

# Interpret the config file for Python logging
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# Metadata for autogenerate support
target_metadata = Base.metadata


# ──────────────────────────────────────────────────────────────────────────────
# Migration runners
# ──────────────────────────────────────────────────────────────────────────────


def run_migrations_offline() -> None:
    """
    Run migrations in 'offline' mode — emit SQL to stdout.
    Useful for generating deployment scripts.
    """
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
        compare_type=True,
        compare_server_default=True,
    )
    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    """
    Run migrations in 'online' mode — use a live database connection.
    """
    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )
    with connectable.connect() as connection:
        context.configure(
            connection=connection,
            target_metadata=target_metadata,
            compare_type=True,
            compare_server_default=True,
        )
        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
