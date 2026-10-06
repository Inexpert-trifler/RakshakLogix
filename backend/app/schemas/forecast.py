"""
RakshakLogix — Demand Forecast Schemas
"""

from __future__ import annotations

import uuid
from datetime import date, datetime

from pydantic import BaseModel, ConfigDict, Field


class ForecastRequest(BaseModel):
    location_id: uuid.UUID
    item_id: uuid.UUID
    horizon_days: int = Field(30, ge=1, le=180)
    model_preference: str | None = "HOLT_WINTERS"


class ForecastPointResponse(BaseModel):
    target_date: date
    prediction: float
    lower_bound: float | None = None
    upper_bound: float | None = None

    model_config = ConfigDict(from_attributes=True)


class ForecastResponse(BaseModel):
    forecast_id: uuid.UUID
    location_id: uuid.UUID
    item_id: uuid.UUID
    horizon_days: int
    model_version: str
    metrics: dict
    points: list[ForecastPointResponse]
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class ModelInfoResponse(BaseModel):
    model_key: str
    name: str
    description: str
    is_baseline: bool = False
