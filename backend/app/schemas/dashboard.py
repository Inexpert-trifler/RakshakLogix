"""
RakshakLogix — Dashboard Schemas
"""

from __future__ import annotations

import uuid

from pydantic import BaseModel, Field


class LocationMapPin(BaseModel):
    id: uuid.UUID
    name: str
    type: str
    latitude: float
    longitude: float
    status: str
    risk_severity: str = "LOW"
    stockout_risk_items_count: int = 0


class RouteMapLine(BaseModel):
    id: uuid.UUID
    name: str
    status: str
    risk_score: float
    segments: list[dict]


class DashboardSummaryResponse(BaseModel):
    total_locations: int
    total_items: int
    active_shipments: int
    critical_alerts: int
    high_risk_routes: int
    overall_system_readiness_pct: float
    inventory: dict = Field(default_factory=dict)
    risk: dict = Field(default_factory=dict)
    transportation: dict = Field(default_factory=dict)
    active_simulations: int = 0


class DashboardMapResponse(BaseModel):
    locations: list[LocationMapPin]
    routes: list[RouteMapLine]


class TrendPoint(BaseModel):
    period: str
    consumption_qty: float
    forecast_qty: float


class DashboardTrendsResponse(BaseModel):
    trends: list[TrendPoint]
