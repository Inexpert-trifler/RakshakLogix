"""
RakshakLogix — Risk Schemas
"""

from __future__ import annotations

import uuid
from datetime import datetime

from pydantic import BaseModel, ConfigDict


class RiskPredictionResponse(BaseModel):
    id: uuid.UUID
    entity_type: str
    entity_id: uuid.UUID
    risk_type: str
    score: float
    severity: str
    explanation: dict | None
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class RiskRecalculateRequest(BaseModel):
    entity_type: str | None = None
    entity_id: uuid.UUID | None = None
