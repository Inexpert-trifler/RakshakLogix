"""
RakshakLogix — Alert Schemas
"""

from __future__ import annotations

import uuid
from datetime import datetime

from pydantic import BaseModel, ConfigDict


class AlertResponse(BaseModel):
    id: uuid.UUID
    severity: str
    alert_type: str
    title: str
    message: str | None
    entity_type: str | None
    entity_id: uuid.UUID | None
    status: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class AlertUpdate(BaseModel):
    status: str  # ACKNOWLEDGED, RESOLVED, DISMISSED
