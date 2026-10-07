"""Initial schema — users, locations, items, inventory, transactions, consumption

Revision ID: 0001
Revises:
Create Date: 2026-10-05 10:00:00.000000 UTC
"""

from __future__ import annotations

from collections.abc import Sequence

import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

from alembic import op

# revision identifiers, used by Alembic.
revision: str = "0001"
down_revision: str | None = None
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    # ------------------------------------------------------------------
    # Enable PostGIS extension (idempotent)
    # ------------------------------------------------------------------
    op.execute("CREATE EXTENSION IF NOT EXISTS postgis")
    op.execute("CREATE EXTENSION IF NOT EXISTS postgis_topology")
    op.execute('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

    # ------------------------------------------------------------------
    # users
    # ------------------------------------------------------------------
    op.create_table(
        "users",
        sa.Column(
            "id",
            postgresql.UUID(as_uuid=True),
            primary_key=True,
            server_default=sa.text("uuid_generate_v4()"),
        ),
        sa.Column("name", sa.String(255), nullable=False),
        sa.Column("email", sa.String(255), nullable=False, unique=True),
        sa.Column("password_hash", sa.String(512), nullable=False),
        sa.Column(
            "role",
            sa.String(64),
            nullable=False,
            server_default="LOGISTICS_PLANNER",
        ),
        sa.Column(
            "status",
            sa.String(32),
            nullable=False,
            server_default="ACTIVE",
        ),
        sa.Column("is_superuser", sa.Boolean(), nullable=False, server_default="false"),
        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            server_default=sa.text("NOW()"),
            nullable=False,
        ),
        sa.Column(
            "updated_at",
            sa.DateTime(timezone=True),
            server_default=sa.text("NOW()"),
            nullable=False,
        ),
    )
    op.create_index("ix_users_id", "users", ["id"])
    op.create_index("ix_users_email", "users", ["email"])

    # ------------------------------------------------------------------
    # locations
    # ------------------------------------------------------------------
    op.create_table(
        "locations",
        sa.Column(
            "id",
            postgresql.UUID(as_uuid=True),
            primary_key=True,
            server_default=sa.text("uuid_generate_v4()"),
        ),
        sa.Column("name", sa.String(255), nullable=False),
        sa.Column("type", sa.String(64), nullable=False),
        sa.Column("latitude", sa.Float(), nullable=False),
        sa.Column("longitude", sa.Float(), nullable=False),
        sa.Column("elevation_m", sa.Float(), nullable=True),
        sa.Column("terrain_type", sa.String(64), nullable=True),
        sa.Column("capacity", sa.Float(), nullable=True),
        sa.Column("priority", sa.Integer(), nullable=False, server_default="5"),
        sa.Column("status", sa.String(32), nullable=False, server_default="ACTIVE"),
        sa.Column("description", sa.Text(), nullable=True),
        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            server_default=sa.text("NOW()"),
            nullable=False,
        ),
        sa.Column(
            "updated_at",
            sa.DateTime(timezone=True),
            server_default=sa.text("NOW()"),
            nullable=False,
        ),
    )
    op.create_index("ix_locations_id", "locations", ["id"])
    op.create_index("ix_locations_name", "locations", ["name"])

    # Add PostGIS geometry column (POINT, WGS84)
    op.execute("ALTER TABLE locations ADD COLUMN geom geometry(POINT, 4326)")
    op.execute("CREATE INDEX ix_locations_geom ON locations USING GIST (geom)")

    # ------------------------------------------------------------------
    # items
    # ------------------------------------------------------------------
    op.create_table(
        "items",
        sa.Column(
            "id",
            postgresql.UUID(as_uuid=True),
            primary_key=True,
            server_default=sa.text("uuid_generate_v4()"),
        ),
        sa.Column("name", sa.String(255), nullable=False),
        sa.Column("category", sa.String(64), nullable=False),
        sa.Column("unit", sa.String(32), nullable=False, server_default="UNIT"),
        sa.Column("criticality", sa.String(32), nullable=False, server_default="MEDIUM"),
        sa.Column("shelf_life_days", sa.Integer(), nullable=True),
        sa.Column("min_stock", sa.Float(), nullable=False, server_default="0"),
        sa.Column("safety_stock", sa.Float(), nullable=False, server_default="0"),
        sa.Column("description", sa.Text(), nullable=True),
        sa.Column("is_active", sa.Boolean(), nullable=False, server_default="true"),
        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            server_default=sa.text("NOW()"),
            nullable=False,
        ),
        sa.Column(
            "updated_at",
            sa.DateTime(timezone=True),
            server_default=sa.text("NOW()"),
            nullable=False,
        ),
    )
    op.create_index("ix_items_id", "items", ["id"])
    op.create_index("ix_items_name", "items", ["name"])

    # ------------------------------------------------------------------
    # inventory
    # ------------------------------------------------------------------
    op.create_table(
        "inventory",
        sa.Column(
            "id",
            postgresql.UUID(as_uuid=True),
            primary_key=True,
            server_default=sa.text("uuid_generate_v4()"),
        ),
        sa.Column(
            "location_id",
            postgresql.UUID(as_uuid=True),
            sa.ForeignKey("locations.id", ondelete="CASCADE"),
            nullable=False,
        ),
        sa.Column(
            "item_id",
            postgresql.UUID(as_uuid=True),
            sa.ForeignKey("items.id", ondelete="CASCADE"),
            nullable=False,
        ),
        sa.Column("quantity", sa.Float(), nullable=False, server_default="0"),
        sa.Column("reserved_quantity", sa.Float(), nullable=False, server_default="0"),
        sa.Column("safety_stock", sa.Float(), nullable=False, server_default="0"),
        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            server_default=sa.text("NOW()"),
            nullable=False,
        ),
        sa.Column(
            "updated_at",
            sa.DateTime(timezone=True),
            server_default=sa.text("NOW()"),
            nullable=False,
        ),
    )
    op.create_index("ix_inventory_id", "inventory", ["id"])
    op.create_index("ix_inventory_location_id", "inventory", ["location_id"])
    op.create_index("ix_inventory_item_id", "inventory", ["item_id"])

    # ------------------------------------------------------------------
    # inventory_transactions
    # ------------------------------------------------------------------
    op.create_table(
        "inventory_transactions",
        sa.Column(
            "id",
            postgresql.UUID(as_uuid=True),
            primary_key=True,
            server_default=sa.text("uuid_generate_v4()"),
        ),
        sa.Column(
            "location_id",
            postgresql.UUID(as_uuid=True),
            sa.ForeignKey("locations.id", ondelete="CASCADE"),
            nullable=False,
        ),
        sa.Column(
            "item_id",
            postgresql.UUID(as_uuid=True),
            sa.ForeignKey("items.id", ondelete="CASCADE"),
            nullable=False,
        ),
        sa.Column(
            "performed_by_id",
            postgresql.UUID(as_uuid=True),
            sa.ForeignKey("users.id", ondelete="SET NULL"),
            nullable=True,
        ),
        sa.Column("transaction_type", sa.String(32), nullable=False),
        sa.Column("quantity", sa.Float(), nullable=False),
        sa.Column("reference_id", sa.String(255), nullable=True),
        sa.Column("notes", sa.Text(), nullable=True),
        sa.Column(
            "occurred_at",
            sa.DateTime(timezone=True),
            server_default=sa.text("NOW()"),
            nullable=False,
        ),
    )
    op.create_index("ix_inventory_transactions_id", "inventory_transactions", ["id"])
    op.create_index(
        "ix_inventory_transactions_location_id",
        "inventory_transactions",
        ["location_id"],
    )
    op.create_index("ix_inventory_transactions_item_id", "inventory_transactions", ["item_id"])
    op.create_index(
        "ix_inventory_transactions_type", "inventory_transactions", ["transaction_type"]
    )
    op.create_index(
        "ix_inventory_transactions_occurred_at",
        "inventory_transactions",
        ["occurred_at"],
    )

    # ------------------------------------------------------------------
    # consumption_records
    # ------------------------------------------------------------------
    op.create_table(
        "consumption_records",
        sa.Column(
            "id",
            postgresql.UUID(as_uuid=True),
            primary_key=True,
            server_default=sa.text("uuid_generate_v4()"),
        ),
        sa.Column(
            "location_id",
            postgresql.UUID(as_uuid=True),
            sa.ForeignKey("locations.id", ondelete="CASCADE"),
            nullable=False,
        ),
        sa.Column(
            "item_id",
            postgresql.UUID(as_uuid=True),
            sa.ForeignKey("items.id", ondelete="CASCADE"),
            nullable=False,
        ),
        sa.Column("date", sa.Date(), nullable=False),
        sa.Column("quantity", sa.Float(), nullable=False),
        sa.Column("source", sa.String(32), nullable=False, server_default="MANUAL"),
        sa.Column("import_batch_id", sa.String(64), nullable=True),
        sa.Column("is_outlier", sa.Boolean(), nullable=False, server_default="false"),
        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            server_default=sa.text("NOW()"),
            nullable=False,
        ),
        sa.Column(
            "updated_at",
            sa.DateTime(timezone=True),
            server_default=sa.text("NOW()"),
            nullable=False,
        ),
        sa.UniqueConstraint(
            "location_id",
            "item_id",
            "date",
            name="uq_consumption_location_item_date",
        ),
    )
    op.create_index("ix_consumption_records_id", "consumption_records", ["id"])
    op.create_index("ix_consumption_records_location_id", "consumption_records", ["location_id"])
    op.create_index("ix_consumption_records_item_id", "consumption_records", ["item_id"])
    op.create_index("ix_consumption_records_date", "consumption_records", ["date"])
    op.create_index(
        "ix_consumption_records_import_batch_id",
        "consumption_records",
        ["import_batch_id"],
    )

    # ------------------------------------------------------------------
    # Updated_at trigger function
    # ------------------------------------------------------------------
    op.execute("""
        CREATE OR REPLACE FUNCTION update_updated_at_column()
        RETURNS TRIGGER AS $$
        BEGIN
            NEW.updated_at = NOW();
            RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;
    """)

    for table in ["users", "locations", "items", "inventory", "consumption_records"]:
        op.execute(f"""
            CREATE TRIGGER trg_{table}_updated_at
            BEFORE UPDATE ON {table}
            FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
        """)


def downgrade() -> None:
    # Drop triggers
    for table in ["users", "locations", "items", "inventory", "consumption_records"]:
        op.execute(f"DROP TRIGGER IF EXISTS trg_{table}_updated_at ON {table}")

    op.execute("DROP FUNCTION IF EXISTS update_updated_at_column")

    op.drop_table("consumption_records")
    op.drop_table("inventory_transactions")
    op.drop_table("inventory")
    op.drop_table("items")
    op.drop_table("locations")
    op.drop_table("users")
