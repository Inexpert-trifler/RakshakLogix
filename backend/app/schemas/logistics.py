"""
RakshakLogix — Vehicles, Shipments, and Routes Schemas
"""

from __future__ import annotations

import uuid
from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field


class VehicleCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    vehicle_type: str = "MEDIUM_TRUCK"
    capacity_kg: float = Field(..., gt=0.0)
    availability_status: str = "AVAILABLE"
    home_location_id: uuid.UUID | None = None


class VehicleResponse(VehicleCreate):
    id: uuid.UUID

    model_config = ConfigDict(from_attributes=True)


class VehicleUpdate(BaseModel):
    availability_status: str | None = None
    home_location_id: uuid.UUID | None = None


class ShipmentUpdate(BaseModel):
    status: str | None = None
    vehicle_id: uuid.UUID | None = None
    actual_departure: datetime | None = None
    actual_arrival: datetime | None = None


class ShipmentItemCreate(BaseModel):

    item_id: uuid.UUID
    quantity: float = Field(..., gt=0.0)


class ShipmentItemResponse(ShipmentItemCreate):
    id: uuid.UUID

    model_config = ConfigDict(from_attributes=True)


class ShipmentCreate(BaseModel):
    source_location_id: uuid.UUID
    destination_location_id: uuid.UUID
    vehicle_id: uuid.UUID | None = None
    priority: str = "ROUTINE"
    planned_departure: datetime | None = None
    planned_arrival: datetime | None = None
    items: list[ShipmentItemCreate] = Field(..., min_length=1)


class ShipmentResponse(BaseModel):
    id: uuid.UUID
    source_location_id: uuid.UUID
    destination_location_id: uuid.UUID
    vehicle_id: uuid.UUID | None
    status: str
    priority: str
    planned_departure: datetime | None
    planned_arrival: datetime | None
    actual_departure: datetime | None
    actual_arrival: datetime | None
    items: list[ShipmentItemResponse]

    model_config = ConfigDict(from_attributes=True)


class RouteSegmentResponse(BaseModel):
    id: uuid.UUID
    from_location_id: uuid.UUID
    to_location_id: uuid.UUID
    segment_order: int
    distance_km: float
    travel_time_hours: float
    terrain_risk: float
    road_risk: float

    model_config = ConfigDict(from_attributes=True)


class RouteResponse(BaseModel):
    id: uuid.UUID
    name: str
    status: str
    base_risk_score: float
    segments: list[RouteSegmentResponse]

    model_config = ConfigDict(from_attributes=True)


class RouteOptimizeRequest(BaseModel):
    source_location_id: uuid.UUID
    destination_location_id: uuid.UUID
    items: list[ShipmentItemCreate]
    max_risk_tolerance: float = 0.8
    avoid_blocked_routes: bool = True


class RouteOption(BaseModel):
    route_id: uuid.UUID
    name: str
    total_distance_km: float
    total_travel_time_hours: float
    risk_score: float
    feasibility_status: str
    reasoning: list[str]


class RouteOptimizeResponse(BaseModel):
    source_location_id: uuid.UUID
    destination_location_id: uuid.UUID
    recommended_option: RouteOption | None
    alternative_options: list[RouteOption]
