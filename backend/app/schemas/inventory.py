"""
RakshakLogix — Inventory & Consumption Schemas
"""

from __future__ import annotations

import uuid
from datetime import date, datetime

from pydantic import BaseModel, ConfigDict, Field


class InventoryResponse(BaseModel):
    id: uuid.UUID
    location_id: uuid.UUID
    item_id: uuid.UUID
    quantity: float
    reserved_quantity: float
    available_quantity: float
    safety_stock: float
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)


class InventoryTransactionCreate(BaseModel):
    location_id: uuid.UUID
    item_id: uuid.UUID
    transaction_type: str = Field(
        ..., description="RECEIPT, ISSUE, TRANSFER, ADJUSTMENT, RESERVATION, RELEASE"
    )
    quantity: float = Field(..., gt=0.0)
    reference_id: str | None = None
    notes: str | None = None


class ConsumptionRecordCreate(BaseModel):
    location_id: uuid.UUID
    item_id: uuid.UUID
    date: date
    quantity: float = Field(..., ge=0.0)
    source: str = "MANUAL_ENTRY"


class ConsumptionImportRequest(BaseModel):
    records: list[ConsumptionRecordCreate]


class InventoryRiskResponse(BaseModel):
    location_id: uuid.UUID
    location_name: str
    item_id: uuid.UUID
    item_name: str
    current_quantity: float
    safety_stock: float
    runway_days: float | None
    risk_level: str
