"""
RakshakLogix — Simulation API Routes

POST /api/v1/simulations
POST /api/v1/simulations/{id}/run
GET  /api/v1/simulations/{id}
GET  /api/v1/simulations/{id}/results
"""

from __future__ import annotations

import uuid

from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.core.deps import get_current_user
from app.models.user import User
from app.schemas.simulation import (
    SimulationCreate,
    SimulationResponse,
    SimulationResultResponse,
)
from app.services.simulation_service import SimulationService

router = APIRouter(prefix="/simulations", tags=["Simulation"])


@router.post("", response_model=SimulationResponse, status_code=status.HTTP_201_CREATED)
async def create_simulation(
    payload: SimulationCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> SimulationResponse:
    """Creates a new what-if scenario simulation configuration."""
    sim = await SimulationService.create_simulation(
        db=db,
        payload=payload,
        user_id=current_user.id,
    )
    return SimulationResponse.model_validate(sim)


@router.post("/{id}/run", response_model=SimulationResponse)
async def run_simulation(
    id: uuid.UUID,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> SimulationResponse:
    """Executes scenario simulation against isolated in-memory state clones."""
    sim = await SimulationService.run_simulation(
        db=db,
        simulation_id=id,
        user_id=current_user.id,
    )
    return SimulationResponse.model_validate(sim)


@router.get("/{id}", response_model=SimulationResponse)
async def get_simulation(
    id: uuid.UUID,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> SimulationResponse:
    """Retrieves simulation status, summary, parameters, and results."""
    sim = await SimulationService.get_simulation(
        db=db,
        simulation_id=id,
    )
    return SimulationResponse.model_validate(sim)


@router.get("/{id}/results", response_model=list[SimulationResultResponse])
async def get_simulation_results(
    id: uuid.UUID,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[SimulationResultResponse]:
    """Retrieves result metrics for a completed simulation."""
    results = await SimulationService.get_simulation_results(
        db=db,
        simulation_id=id,
    )
    return [SimulationResultResponse.model_validate(r) for r in results]
