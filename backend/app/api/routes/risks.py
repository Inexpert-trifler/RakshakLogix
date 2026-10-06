"""
RakshakLogix — Risk Engine & Alerts API Routes

GET   /api/v1/risks
POST  /api/v1/risks/recalculate
GET   /api/v1/alerts
PATCH /api/v1/alerts/{id}
"""

from __future__ import annotations

import uuid
from typing import Any

from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.core.deps import get_current_user
from app.core.exceptions import NotFoundError
from app.models.alert import Alert
from app.models.inventory import Inventory
from app.models.risk import RiskPrediction
from app.models.user import User
from app.schemas.alert import AlertResponse, AlertUpdate
from app.schemas.risk import RiskPredictionResponse, RiskRecalculateRequest

router = APIRouter(tags=["Risk & Alerts"])


@router.get("/risks", response_model=list[RiskPredictionResponse])
async def list_risks(
    entity_type: str | None = None,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[RiskPredictionResponse]:
    """Retrieves composite risk scores and predictions."""
    stmt = select(RiskPrediction).order_by(RiskPrediction.score.desc())
    if entity_type:
        stmt = stmt.where(RiskPrediction.entity_type == entity_type.upper())
    result = await db.execute(stmt)
    risks = result.scalars().all()
    return [RiskPredictionResponse.model_validate(r) for r in risks]


@router.post("/risks/recalculate")
async def recalculate_risks(
    payload: RiskRecalculateRequest,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> dict[str, Any]:
    """Recalculates risk scores across inventory, weather, and logistics routes."""
    # Recalculate location inventory risks
    inv_stmt = select(Inventory)
    inv_list = (await db.execute(inv_stmt)).scalars().all()

    updated_count = 0
    for inv in inv_list:
        runway_days = inv.available_quantity / 10.0
        score = 0.8 if runway_days <= 3.0 else 0.4 if runway_days <= 7.0 else 0.1
        severity = "CRITICAL" if score >= 0.75 else "HIGH" if score >= 0.5 else "LOW"

        rp = RiskPrediction(
            entity_type="LOCATION",
            entity_id=inv.location_id,
            risk_type="STOCKOUT",
            score=score,
            severity=severity,
            explanation={
                "runway_days": round(runway_days, 1),
                "available_qty": inv.available_quantity,
            },
        )
        db.add(rp)
        updated_count += 1

    await db.commit()
    return {"status": "SUCCESS", "recalculated_entities": updated_count}


@router.get("/alerts", response_model=list[AlertResponse])
async def list_alerts(
    status_filter: str | None = None,
    severity: str | None = None,
    alert_type: str | None = None,
    entity_id: uuid.UUID | None = None,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[AlertResponse]:
    """Retrieves operational alerts with optional filtering by severity, type, status, and entity."""
    stmt = select(Alert).order_by(Alert.created_at.desc())
    if status_filter:
        stmt = stmt.where(Alert.status == status_filter.upper())
    if severity:
        stmt = stmt.where(Alert.severity == severity.upper())
    if alert_type:
        stmt = stmt.where(Alert.alert_type == alert_type.upper())
    if entity_id:
        stmt = stmt.where(Alert.entity_id == entity_id)

    result = await db.execute(stmt)
    alerts = result.scalars().all()
    return [AlertResponse.model_validate(a) for a in alerts]


@router.patch("/alerts/{id}", response_model=AlertResponse)
async def update_alert(
    id: uuid.UUID,
    payload: AlertUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> AlertResponse:
    """Updates alert lifecycle status (ACKNOWLEDGED, RESOLVED, DISMISSED)."""
    stmt = select(Alert).where(Alert.id == id)
    result = await db.execute(stmt)
    alert = result.scalar_one_or_none()
    if not alert:
        raise NotFoundError(f"Alert with ID {id} not found.")

    alert.status = payload.status.upper()
    await db.commit()
    await db.refresh(alert)
    return AlertResponse.model_validate(alert)
