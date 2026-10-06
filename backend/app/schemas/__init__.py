"""
RakshakLogix — Schemas Package
"""

from app.schemas.alert import AlertResponse, AlertUpdate
from app.schemas.auth import (
    LoginRequest,
    RefreshTokenRequest,
    TokenResponse,
    UserResponse,
)
from app.schemas.dashboard import (
    DashboardMapResponse,
    DashboardSummaryResponse,
    DashboardTrendsResponse,
    LocationMapPin,
    RouteMapLine,
    TrendPoint,
)
from app.schemas.forecast import (
    ForecastPointResponse,
    ForecastRequest,
    ForecastResponse,
    ModelInfoResponse,
)
from app.schemas.inventory import (
    ConsumptionImportRequest,
    ConsumptionRecordCreate,
    InventoryResponse,
    InventoryRiskResponse,
    InventoryTransactionCreate,
)
from app.schemas.location import (
    ItemCreate,
    ItemResponse,
    LocationCreate,
    LocationResponse,
    LocationUpdate,
)
from app.schemas.logistics import (
    RouteOptimizeRequest,
    RouteOptimizeResponse,
    RouteOption,
    RouteResponse,
    RouteSegmentResponse,
    ShipmentCreate,
    ShipmentItemCreate,
    ShipmentItemResponse,
    ShipmentResponse,
    VehicleCreate,
    VehicleResponse,
)
from app.schemas.risk import RiskPredictionResponse, RiskRecalculateRequest
from app.schemas.simulation import (
    SimulationCreate,
    SimulationResponse,
    SimulationResultResponse,
)

__all__ = [
    "LoginRequest",
    "RefreshTokenRequest",
    "TokenResponse",
    "UserResponse",
    "LocationCreate",
    "LocationUpdate",
    "LocationResponse",
    "ItemCreate",
    "ItemResponse",
    "InventoryResponse",
    "InventoryTransactionCreate",
    "ConsumptionRecordCreate",
    "ConsumptionImportRequest",
    "InventoryRiskResponse",
    "ForecastRequest",
    "ForecastPointResponse",
    "ForecastResponse",
    "ModelInfoResponse",
    "VehicleCreate",
    "VehicleResponse",
    "ShipmentItemCreate",
    "ShipmentItemResponse",
    "ShipmentCreate",
    "ShipmentResponse",
    "RouteSegmentResponse",
    "RouteResponse",
    "RouteOptimizeRequest",
    "RouteOption",
    "RouteOptimizeResponse",
    "RiskPredictionResponse",
    "RiskRecalculateRequest",
    "AlertResponse",
    "AlertUpdate",
    "SimulationCreate",
    "SimulationResponse",
    "SimulationResultResponse",
    "DashboardSummaryResponse",
    "DashboardMapResponse",
    "LocationMapPin",
    "RouteMapLine",
    "DashboardTrendsResponse",
    "TrendPoint",
]
