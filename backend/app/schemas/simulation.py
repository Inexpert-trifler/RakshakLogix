"""
RakshakLogix — Simulation Schemas
"""

from __future__ import annotations

import uuid
from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field


class SimulationCreate(BaseModel):
    scenario_type: str = Field(
        ...,
        description="ROUTE_UNAVAILABLE, DEMAND_SPIKE, SEVERE_WEATHER, VEHICLE_UNAVAILABLE",
    )
    name: str | None = Field(default=None, description="Human-readable title")
    description: str | None = Field(default=None, description="Detailed scenario rationale")
    parameters: dict = Field(
        ...,
        description="Structured scenario parameters (e.g., {'route_id': '...', 'duration_hours': 24})",
    )


class SimulationResultResponse(BaseModel):
    id: uuid.UUID
    metric_name: str
    baseline_value: float
    scenario_value: float
    delta: float
    details: dict | None = None

    model_config = ConfigDict(from_attributes=True)


class SimulationResponse(BaseModel):
    id: uuid.UUID
    scenario_type: str
    name: str | None = None
    description: str | None = None
    parameters: dict
    creator_id: uuid.UUID | None = None
    status: str
    started_at: datetime | None = None
    completed_at: datetime | None = None
    summary: dict | None = None
    error_message: str | None = None
    results: list[SimulationResultResponse] = []
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class SimulationRunResponse(BaseModel):
    simulation_id: uuid.UUID
    job_id: str | None = None
    status: str
    message: str = "Simulation execution initialized."
