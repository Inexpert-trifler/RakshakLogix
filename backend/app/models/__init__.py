"""
RakshakLogix — SQLAlchemy Models Package

Import all models here so Alembic's autogenerate and Base.metadata can discover them.
"""

from app.models.alert import Alert, AlertSeverity, AlertStatus
from app.models.audit import AuditLog
from app.models.consumption import ConsumptionRecord
from app.models.forecast import DemandForecast, ForecastPoint
from app.models.inventory import Inventory, InventoryTransaction, TransactionType
from app.models.item import Item, ItemCategory, ItemCriticality, ItemUnit
from app.models.location import Location, LocationStatus, LocationType, TerrainType
from app.models.risk import EntityType, RiskPrediction, RiskSeverity, RiskType
from app.models.route import Route, RouteSegment, RouteStatus
from app.models.shipment import Shipment, ShipmentItem, ShipmentPriority, ShipmentStatus
from app.models.simulation import (
    ScenarioType,
    Simulation,
    SimulationResult,
    SimulationStatus,
)
from app.models.user import User, UserRole, UserStatus
from app.models.vehicle import Vehicle, VehicleStatus, VehicleType
from app.models.weather import WeatherRecord, WeatherSeverity

__all__ = [
    "User",
    "UserRole",
    "UserStatus",
    "Location",
    "LocationType",
    "LocationStatus",
    "TerrainType",
    "Item",
    "ItemCategory",
    "ItemCriticality",
    "ItemUnit",
    "Inventory",
    "InventoryTransaction",
    "TransactionType",
    "ConsumptionRecord",
    "Vehicle",
    "VehicleType",
    "VehicleStatus",
    "Shipment",
    "ShipmentItem",
    "ShipmentStatus",
    "ShipmentPriority",
    "Route",
    "RouteSegment",
    "RouteStatus",
    "WeatherRecord",
    "WeatherSeverity",
    "DemandForecast",
    "ForecastPoint",
    "RiskPrediction",
    "RiskSeverity",
    "RiskType",
    "EntityType",
    "Alert",
    "AlertSeverity",
    "AlertStatus",
    "Simulation",
    "SimulationResult",
    "ScenarioType",
    "SimulationStatus",
    "AuditLog",
]
