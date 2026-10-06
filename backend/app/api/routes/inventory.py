"""
RakshakLogix — Inventory & Consumption API Routes

GET  /api/v1/inventory
GET  /api/v1/inventory/{id}
POST /api/v1/inventory/transactions
POST /api/v1/consumption/import
GET  /api/v1/inventory/risk
"""

from __future__ import annotations

import uuid
from typing import Any

from fastapi import APIRouter, Depends, File, UploadFile, status
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.core.deps import get_current_user
from app.core.exceptions import NotFoundError, ValidationError
from app.ml.risk import CompositeRiskCalculator
from app.models.consumption import ConsumptionRecord
from app.models.inventory import Inventory, InventoryTransaction
from app.models.item import Item
from app.models.location import Location
from app.models.user import User
from app.schemas.inventory import (
    ConsumptionImportRequest,
    InventoryResponse,
    InventoryRiskResponse,
    InventoryTransactionCreate,
)
from app.services.consumption_import import ConsumptionImporter

router = APIRouter(tags=["Inventory & Consumption"])


@router.get("/inventory", response_model=list[InventoryResponse])
async def list_inventory(
    location_id: uuid.UUID | None = None,
    item_id: uuid.UUID | None = None,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[InventoryResponse]:
    """Retrieves current stock levels per location and item."""
    stmt = select(Inventory)
    if location_id:
        stmt = stmt.where(Inventory.location_id == location_id)
    if item_id:
        stmt = stmt.where(Inventory.item_id == item_id)

    result = await db.execute(stmt)
    inv_list = result.scalars().all()
    return [InventoryResponse.model_validate(inv) for inv in inv_list]


@router.get("/inventory/risk", response_model=list[InventoryRiskResponse])
async def evaluate_inventory_risk(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[InventoryRiskResponse]:
    """Calculates stockout runway risk for all active inventory locations."""
    stmt = (
        select(Inventory, Location, Item)
        .join(Location, Inventory.location_id == Location.id)
        .join(Item, Inventory.item_id == Item.id)
    )

    result = await db.execute(stmt)
    rows = result.all()

    risks = []
    for inv, loc, item in rows:
        cons_stmt = select(func.avg(ConsumptionRecord.quantity)).where(
            ConsumptionRecord.location_id == inv.location_id,
            ConsumptionRecord.item_id == inv.item_id,
        )
        avg_cons = (await db.execute(cons_stmt)).scalar() or 10.0

        runway_days = inv.available_quantity / max(0.1, avg_cons)
        is_breached = inv.available_quantity < inv.safety_stock

        risk_res = CompositeRiskCalculator.calculate_risk(
            days_to_stockout=runway_days,
            is_safety_breached=is_breached,
        )

        risks.append(
            InventoryRiskResponse(
                location_id=loc.id,
                location_name=loc.name,
                item_id=item.id,
                item_name=item.name,
                current_quantity=inv.quantity,
                safety_stock=inv.safety_stock,
                runway_days=round(runway_days, 1),
                risk_level=risk_res["severity"],
            )
        )

    return risks


@router.get("/inventory/{id}", response_model=InventoryResponse)
async def get_inventory(
    id: uuid.UUID,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> InventoryResponse:
    """Retrieves specific inventory record."""
    stmt = select(Inventory).where(Inventory.id == id)
    result = await db.execute(stmt)
    inv = result.scalar_one_or_none()
    if not inv:
        raise NotFoundError(f"Inventory record {id} not found.")
    return InventoryResponse.model_validate(inv)


@router.post(
    "/inventory/transactions",
    response_model=InventoryResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_inventory_transaction(
    payload: InventoryTransactionCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> InventoryResponse:
    """Processes an immutable stock transaction (RECEIPT, ISSUE, TRANSFER, ADJUSTMENT, RESERVATION, RELEASE)."""
    # Verify inventory record exists or create default
    stmt = select(Inventory).where(
        Inventory.location_id == payload.location_id,
        Inventory.item_id == payload.item_id,
    )
    result = await db.execute(stmt)
    inv = result.scalar_one_or_none()

    if not inv:
        inv = Inventory(
            location_id=payload.location_id,
            item_id=payload.item_id,
            quantity=0.0,
            reserved_quantity=0.0,
            safety_stock=0.0,
        )
        db.add(inv)

    # Apply state mutation
    ttype = payload.transaction_type.upper()
    if ttype in ("RECEIPT", "ADJUSTMENT"):
        inv.quantity += payload.quantity
    elif ttype == "ISSUE":
        if inv.available_quantity < payload.quantity:
            raise ValidationError(
                "Insufficient available quantity for issue transaction."
            )
        inv.quantity -= payload.quantity
    elif ttype == "RESERVATION":
        if inv.available_quantity < payload.quantity:
            raise ValidationError("Insufficient available quantity for reservation.")
        inv.reserved_quantity += payload.quantity
    elif ttype == "RELEASE":
        inv.reserved_quantity = max(0.0, inv.reserved_quantity - payload.quantity)
    else:
        inv.quantity += payload.quantity

    # Create immutable audit transaction log
    tx = InventoryTransaction(
        location_id=payload.location_id,
        item_id=payload.item_id,
        transaction_type=ttype,
        quantity=payload.quantity,
        reference_id=payload.reference_id,
        notes=payload.notes,
        performed_by_id=current_user.id,
    )
    db.add(tx)

    await db.commit()
    await db.refresh(inv)
    return InventoryResponse.model_validate(inv)


@router.post("/consumption/import", status_code=status.HTTP_201_CREATED)
async def import_consumption_records(
    payload: ConsumptionImportRequest,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> dict[str, Any]:
    """Imports historical consumption records in bulk."""
    imported_count = 0
    for rec in payload.records:
        cr = ConsumptionRecord(
            location_id=rec.location_id,
            item_id=rec.item_id,
            date=rec.date,
            quantity=rec.quantity,
            source=rec.source,
        )
        db.add(cr)
        imported_count += 1

    await db.commit()
    return {"status": "SUCCESS", "imported_records": imported_count}


@router.post("/consumption/import/csv", status_code=status.HTTP_201_CREATED)
async def import_consumption_csv(
    file: UploadFile = File(...),
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> dict[str, Any]:
    """Imports historical consumption time series from CSV file with data quality validation."""
    if not file.filename or not (
        file.filename.endswith(".csv") or file.filename.endswith(".txt")
    ):
        raise ValidationError("File must be a CSV format document.")

    content = await file.read()
    return await ConsumptionImporter.process_csv_bytes(
        db=db, content=content, source_name=f"CSV_{file.filename}"
    )
