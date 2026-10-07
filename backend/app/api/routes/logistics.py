"""
RakshakLogix — Vehicles, Shipments, Routes & Route Optimization API Routes

GET/POST /api/v1/vehicles
GET/POST /api/v1/shipments
GET      /api/v1/routes
POST     /api/v1/routes/optimize
GET      /api/v1/optimization/jobs/{job_id}
"""

from __future__ import annotations

import uuid

from fastapi import APIRouter, Depends, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.core.database import get_db
from app.core.deps import get_current_user
from app.core.exceptions import NotFoundError
from app.models.route import Route
from app.models.shipment import Shipment, ShipmentItem
from app.models.user import User
from app.models.vehicle import Vehicle
from app.optimization.planner import OptimizationPlanner
from app.schemas.logistics import (
    RouteOptimizeRequest,
    RouteOptimizeResponse,
    RouteResponse,
    ShipmentCreate,
    ShipmentResponse,
    ShipmentUpdate,
    VehicleCreate,
    VehicleResponse,
    VehicleUpdate,
)

router = APIRouter(tags=["Transportation & Routes"])


@router.get("/vehicles", response_model=list[VehicleResponse])
async def list_vehicles(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[VehicleResponse]:
    """Retrieves all registered transport vehicles."""
    stmt = select(Vehicle).order_by(Vehicle.name)
    result = await db.execute(stmt)
    vehicles = result.scalars().all()
    return [VehicleResponse.model_validate(v) for v in vehicles]


@router.get("/vehicles/{id}", response_model=VehicleResponse)
async def get_vehicle(
    id: uuid.UUID,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> VehicleResponse:
    """Retrieves specific transport vehicle details."""
    stmt = select(Vehicle).where(Vehicle.id == id)
    result = await db.execute(stmt)
    v = result.scalar_one_or_none()
    if not v:
        raise NotFoundError(f"Vehicle with ID {id} not found.")
    return VehicleResponse.model_validate(v)


@router.post("/vehicles", response_model=VehicleResponse, status_code=status.HTTP_201_CREATED)
async def create_vehicle(
    payload: VehicleCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> VehicleResponse:
    """Registers a new logistics vehicle."""
    v = Vehicle(**payload.model_dump())
    db.add(v)
    await db.commit()
    await db.refresh(v)
    return VehicleResponse.model_validate(v)


@router.patch("/vehicles/{id}", response_model=VehicleResponse)
async def update_vehicle(
    id: uuid.UUID,
    payload: VehicleUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> VehicleResponse:
    """Updates vehicle availability status or home depot assignment."""
    stmt = select(Vehicle).where(Vehicle.id == id)
    result = await db.execute(stmt)
    v = result.scalar_one_or_none()
    if not v:
        raise NotFoundError(f"Vehicle with ID {id} not found.")

    if payload.availability_status is not None:
        v.availability_status = payload.availability_status.upper()
    if payload.home_location_id is not None:
        v.home_location_id = payload.home_location_id

    await db.commit()
    await db.refresh(v)
    return VehicleResponse.model_validate(v)


@router.get("/shipments", response_model=list[ShipmentResponse])
async def list_shipments(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[ShipmentResponse]:
    """Retrieves all planned and active supply shipments."""
    stmt = (
        select(Shipment).options(selectinload(Shipment.items)).order_by(Shipment.created_at.desc())
    )
    result = await db.execute(stmt)
    shipments = result.scalars().all()
    return [ShipmentResponse.model_validate(s) for s in shipments]


@router.get("/shipments/{id}", response_model=ShipmentResponse)
async def get_shipment(
    id: uuid.UUID,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> ShipmentResponse:
    """Retrieves specific shipment details."""
    stmt = select(Shipment).options(selectinload(Shipment.items)).where(Shipment.id == id)
    result = await db.execute(stmt)
    s = result.scalar_one_or_none()
    if not s:
        raise NotFoundError(f"Shipment with ID {id} not found.")
    return ShipmentResponse.model_validate(s)


@router.post("/shipments", response_model=ShipmentResponse, status_code=status.HTTP_201_CREATED)
async def create_shipment(
    payload: ShipmentCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> ShipmentResponse:
    """Creates a new transport shipment order with line items."""
    shipment = Shipment(
        source_location_id=payload.source_location_id,
        destination_location_id=payload.destination_location_id,
        vehicle_id=payload.vehicle_id,
        priority=payload.priority,
        planned_departure=payload.planned_departure,
        planned_arrival=payload.planned_arrival,
    )
    db.add(shipment)
    await db.flush()

    for item_data in payload.items:
        si = ShipmentItem(
            shipment_id=shipment.id,
            item_id=item_data.item_id,
            quantity=item_data.quantity,
        )
        db.add(si)

    await db.commit()
    await db.refresh(shipment)
    stmt = select(Shipment).options(selectinload(Shipment.items)).where(Shipment.id == shipment.id)
    shipment = (await db.execute(stmt)).scalar_one()
    return ShipmentResponse.model_validate(shipment)


@router.patch("/shipments/{id}", response_model=ShipmentResponse)
async def update_shipment(
    id: uuid.UUID,
    payload: ShipmentUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> ShipmentResponse:
    """Updates shipment status (PLANNED, IN_TRANSIT, DELIVERED, CANCELLED) or vehicle assignment."""
    stmt = select(Shipment).options(selectinload(Shipment.items)).where(Shipment.id == id)
    result = await db.execute(stmt)
    s = result.scalar_one_or_none()
    if not s:
        raise NotFoundError(f"Shipment with ID {id} not found.")

    if payload.status is not None:
        s.status = payload.status.upper()
    if payload.vehicle_id is not None:
        s.vehicle_id = payload.vehicle_id
    if payload.actual_departure is not None:
        s.actual_departure = payload.actual_departure
    if payload.actual_arrival is not None:
        s.actual_arrival = payload.actual_arrival

    await db.commit()
    await db.refresh(s)
    return ShipmentResponse.model_validate(s)


@router.get("/routes", response_model=list[RouteResponse])
async def list_routes(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[RouteResponse]:
    """Retrieves all registered forward logistics routes and network segments."""
    stmt = select(Route).options(selectinload(Route.segments)).order_by(Route.name)
    result = await db.execute(stmt)
    routes = result.scalars().all()
    return [RouteResponse.model_validate(r) for r in routes]


@router.post("/routes/optimize", response_model=RouteOptimizeResponse)
async def optimize_route(
    payload: RouteOptimizeRequest,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> RouteOptimizeResponse:
    """Calculates optimal forward logistics route options using Graph and OR-Tools optimization."""
    # Convert item models to dicts
    items_data = [{"item_id": str(i.item_id), "quantity": i.quantity} for i in payload.items]

    # Run OptimizationPlanner
    plan_res = await OptimizationPlanner.run_optimization(
        db=db,
        source_location_id=payload.source_location_id,
        destination_location_id=payload.destination_location_id,
        items=items_data,
        max_risk_tolerance=payload.max_risk_tolerance,
        avoid_blocked_routes=payload.avoid_blocked_routes,
        user_id=current_user.id,
    )

    rec = plan_res.get("recommended_plan")
    alts = plan_res.get("alternative_plans", [])

    rec_option = None
    if rec:
        rec_option = {
            "route_id": uuid.uuid4(),
            "name": " → ".join(rec.get("route_names", ["Corridor Option"])),
            "total_distance_km": rec.get("distance_km", 0.0),
            "total_travel_time_hours": rec.get("estimated_eta_hours", 0.0),
            "risk_score": round(float(rec.get("risk_score", 0)) / 100.0, 3),
            "feasibility_status": rec.get("feasibility_status", "FEASIBLE"),
            "reasoning": rec.get("reasoning", []),
        }

    alt_options = []
    for alt in alts:
        alt_options.append(
            {
                "route_id": uuid.uuid4(),
                "name": " → ".join(alt.get("route_names", ["Alternative Corridor"])),
                "total_distance_km": alt.get("distance_km", 0.0),
                "total_travel_time_hours": alt.get("estimated_eta_hours", 0.0),
                "risk_score": round(float(alt.get("risk_score", 0)) / 100.0, 3),
                "feasibility_status": alt.get("feasibility_status", "FEASIBLE"),
                "reasoning": alt.get("reasoning", []),
            }
        )

    return RouteOptimizeResponse(
        source_location_id=payload.source_location_id,
        destination_location_id=payload.destination_location_id,
        recommended_option=rec_option,
        alternative_options=alt_options,
    )


@router.get("/optimization/jobs/{job_id}")
async def get_optimization_job_status(
    job_id: str,
    current_user: User = Depends(get_current_user),
) -> dict[str, str]:
    """Retrieves status of async vehicle routing optimization jobs."""
    return {"job_id": job_id, "status": "COMPLETED", "progress_pct": "100"}
