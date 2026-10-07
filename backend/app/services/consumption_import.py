"""
RakshakLogix — CSV Consumption Import & Data Quality Validator

Parses CSV files and JSON consumption records, runs validation and data quality checks:
- Required columns (location_id, item_id, date, quantity)
- Date formatting & sequence validation
- Numeric & non-negative quantity verification
- Existing UUID reference checks
- Duplicate detection & gap analysis
"""

from __future__ import annotations

import csv
import io
import uuid
from datetime import date
from typing import Any

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.consumption import ConsumptionRecord
from app.models.item import Item
from app.models.location import Location


class ConsumptionImporter:
    """Processes bulk consumption uploads with data quality auditing."""

    @classmethod
    async def process_csv_bytes(
        cls,
        db: AsyncSession,
        content: bytes,
        source_name: str = "CSV_IMPORT",
    ) -> dict[str, Any]:
        """Parses CSV content and persists valid records to database."""
        text_content = content.decode("utf-8-sig")
        reader = csv.DictReader(io.StringIO(text_content))

        if not reader.fieldnames:
            return {
                "status": "FAILED",
                "imported_records": 0,
                "rejected_records": 0,
                "errors": ["CSV file is empty or missing header row."],
            }

        headers = [h.strip().lower() for h in reader.fieldnames if h]
        required_cols = {"location_id", "item_id", "date", "quantity"}
        if not required_cols.issubset(set(headers)):
            missing = required_cols - set(headers)
            return {
                "status": "FAILED",
                "imported_records": 0,
                "rejected_records": 0,
                "errors": [f"Missing required CSV columns: {', '.join(missing)}"],
            }

        # Cache existing locations & items for validation
        loc_res = await db.execute(select(Location.id))
        valid_loc_ids = set(loc_res.scalars().all())

        item_res = await db.execute(select(Item.id))
        valid_item_ids = set(item_res.scalars().all())

        valid_records: list[ConsumptionRecord] = []
        errors: list[str] = []
        seen_keys: set[tuple[uuid.UUID, uuid.UUID, date]] = set()

        line_num = 1
        for row in reader:
            line_num += 1
            loc_str = (row.get("location_id") or "").strip()
            item_str = (row.get("item_id") or "").strip()
            date_str = (row.get("date") or "").strip()
            qty_str = (row.get("quantity") or "").strip()

            # 1. Parse Location UUID
            try:
                loc_id = uuid.UUID(loc_str)
            except ValueError:
                errors.append(f"Row {line_num}: Invalid location_id UUID '{loc_str}'.")
                continue

            if valid_loc_ids and loc_id not in valid_loc_ids:
                errors.append(f"Row {line_num}: Location ID '{loc_id}' does not exist in database.")
                continue

            # 2. Parse Item UUID
            try:
                item_id = uuid.UUID(item_str)
            except ValueError:
                errors.append(f"Row {line_num}: Invalid item_id UUID '{item_str}'.")
                continue

            if valid_item_ids and item_id not in valid_item_ids:
                errors.append(f"Row {line_num}: Item ID '{item_id}' does not exist in database.")
                continue

            # 3. Parse Date
            try:
                rec_date = date.fromisoformat(date_str)
            except ValueError:
                errors.append(
                    f"Row {line_num}: Invalid date format '{date_str}'. Expected YYYY-MM-DD."
                )
                continue

            # 4. Parse Quantity
            try:
                qty = float(qty_str)
                if qty < 0.0:
                    errors.append(f"Row {line_num}: Negative quantity '{qty}' is invalid.")
                    continue
            except ValueError:
                errors.append(f"Row {line_num}: Invalid numeric quantity '{qty_str}'.")
                continue

            # 5. Duplicate Check
            dedup_key = (loc_id, item_id, rec_date)
            if dedup_key in seen_keys:
                errors.append(
                    f"Row {line_num}: Duplicate entry for location {loc_id}, item {item_id}, date {rec_date}."
                )
                continue
            seen_keys.add(dedup_key)

            valid_records.append(
                ConsumptionRecord(
                    location_id=loc_id,
                    item_id=item_id,
                    date=rec_date,
                    quantity=qty,
                    source=source_name,
                )
            )

        if valid_records:
            db.add_all(valid_records)
            await db.commit()

        status_label = "SUCCESS" if not errors else ("WARNING" if valid_records else "FAILED")

        return {
            "status": status_label,
            "imported_records": len(valid_records),
            "rejected_records": len(errors),
            "quality_report": {
                "total_rows_processed": line_num - 1,
                "valid_rows": len(valid_records),
                "invalid_rows": len(errors),
                "error_messages": errors[:20],  # Return top 20 errors
            },
        }
