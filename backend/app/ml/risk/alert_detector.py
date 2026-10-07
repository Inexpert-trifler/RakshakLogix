"""
RakshakLogix — Automated Alert Generator & Detector

Scans inventory, forecast projections, and risk scores to automatically detect:
- STOCKOUT_WARNING
- SAFETY_STOCK_BREACH
- DEMAND_SPIKE
- LOGISTICS_RISK
"""

from __future__ import annotations

import uuid

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.alert import Alert, AlertSeverity, AlertStatus


class AlertDetector:
    """Detects logistics risks and emits automated system alerts."""

    @classmethod
    async def evaluate_and_emit_alerts(
        cls,
        db: AsyncSession,
        location_id: uuid.UUID,
        item_id: uuid.UUID,
        location_name: str,
        item_name: str,
        days_to_stockout: float,
        is_safety_breached: bool,
        risk_score: int,
        severity: str,
        demand_spike_detected: bool = False,
    ) -> list[Alert]:
        """Evaluates thresholds and creates Alert database records if necessary."""

        created_alerts: list[Alert] = []

        # 1. STOCKOUT_WARNING
        if days_to_stockout <= 3.0:
            sev = (
                AlertSeverity.CRITICAL.value
                if days_to_stockout <= 1.5
                else AlertSeverity.HIGH.value
            )
            title = f"Critical Stockout Warning: {item_name} at {location_name}"
            msg = f"Imminent stockout projected within {days_to_stockout:.1f} days. Immediate replenishment required."

            alert = await cls._create_alert_if_not_exists(
                db=db,
                alert_type="STOCKOUT_WARNING",
                severity=sev,
                title=title,
                message=msg,
                entity_type="LOCATION",
                entity_id=location_id,
            )
            if alert:
                created_alerts.append(alert)

        # 2. SAFETY_STOCK_BREACH
        if is_safety_breached:
            title = f"Safety Stock Breach: {item_name} at {location_name}"
            msg = f"Projected inventory for {item_name} falls below configured safety stock threshold."

            alert = await cls._create_alert_if_not_exists(
                db=db,
                alert_type="SAFETY_STOCK_BREACH",
                severity=AlertSeverity.HIGH.value,
                title=title,
                message=msg,
                entity_type="LOCATION",
                entity_id=location_id,
            )
            if alert:
                created_alerts.append(alert)

        # 3. DEMAND_SPIKE
        if demand_spike_detected:
            title = f"Demand Spike Detected: {item_name} at {location_name}"
            msg = f"Recent consumption of {item_name} deviates significantly above baseline expectations."

            alert = await cls._create_alert_if_not_exists(
                db=db,
                alert_type="DEMAND_SPIKE",
                severity=AlertSeverity.WARNING.value,
                title=title,
                message=msg,
                entity_type="LOCATION",
                entity_id=location_id,
            )

            if alert:
                created_alerts.append(alert)

        # 4. LOGISTICS_RISK
        if risk_score >= 75:
            title = f"High Composite Logistics Risk: {location_name}"
            msg = f"Composite risk score reached {risk_score}/100 ({severity}). Review supply chain factors."

            alert = await cls._create_alert_if_not_exists(
                db=db,
                alert_type="LOGISTICS_RISK",
                severity=(
                    AlertSeverity.CRITICAL.value if risk_score >= 85 else AlertSeverity.HIGH.value
                ),
                title=title,
                message=msg,
                entity_type="LOCATION",
                entity_id=location_id,
            )
            if alert:
                created_alerts.append(alert)

        return created_alerts

    @classmethod
    async def _create_alert_if_not_exists(
        cls,
        db: AsyncSession,
        alert_type: str,
        severity: str,
        title: str,
        message: str,
        entity_type: str,
        entity_id: uuid.UUID,
    ) -> Alert | None:
        """Avoids duplicate open alerts for the same entity and alert type."""
        stmt = select(Alert).where(
            Alert.alert_type == alert_type,
            Alert.entity_id == entity_id,
            Alert.status == AlertStatus.NEW.value,
        )
        res = await db.execute(stmt)
        existing = res.scalar_one_or_none()
        if existing:
            return None

        alert = Alert(
            alert_type=alert_type,
            severity=severity,
            title=title,
            message=message,
            entity_type=entity_type,
            entity_id=entity_id,
            status=AlertStatus.NEW.value,
        )
        db.add(alert)
        await db.flush()
        return alert
