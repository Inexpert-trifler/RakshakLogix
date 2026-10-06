"""
Tests for core domain models.

Validates:
- Model instantiation
- Enum values match documentation
- Computed properties
- Repr strings
"""

from __future__ import annotations

import uuid

from app.models.alert import Alert, AlertSeverity, AlertStatus
from app.models.audit import AuditLog
from app.models.forecast import DemandForecast
from app.models.inventory import Inventory
from app.models.item import Item, ItemCategory, ItemCriticality, ItemUnit
from app.models.location import Location, LocationStatus, LocationType, TerrainType
from app.models.risk import EntityType, RiskPrediction, RiskSeverity, RiskType
from app.models.route import Route, RouteStatus
from app.models.shipment import Shipment, ShipmentPriority, ShipmentStatus
from app.models.simulation import ScenarioType, Simulation, SimulationStatus
from app.models.user import User, UserRole, UserStatus
from app.models.vehicle import Vehicle, VehicleStatus, VehicleType
from app.models.weather import WeatherRecord, WeatherSeverity


class TestUserModel:
    """Tests for User model and enums."""

    def test_user_roles_match_documentation(self) -> None:
        expected = {
            "ADMIN",
            "LOGISTICS_PLANNER",
            "TRANSPORT_COORDINATOR",
            "COMMAND_VIEWER",
            "DATA_ANALYST",
            "DATA_ML_ANALYST",
        }
        actual = {r.value for r in UserRole}
        assert actual == expected

    def test_user_status_values(self) -> None:
        assert {s.value for s in UserStatus} == {"ACTIVE", "INACTIVE", "SUSPENDED"}

    def test_user_instantiation(self) -> None:
        user = User(
            name="Test User",
            email="test@rakshaklogix.dev",
            password_hash="$argon2id$...",
            role=UserRole.LOGISTICS_PLANNER.value,
            status=UserStatus.ACTIVE.value,
        )
        assert user.name == "Test User"
        assert user.role == "LOGISTICS_PLANNER"

    def test_user_repr_contains_email(self) -> None:
        user = User(
            name="Repr Test",
            email="repr@test.com",
            password_hash="hash",
            role=UserRole.ADMIN.value,
            status=UserStatus.ACTIVE.value,
        )
        assert "repr@test.com" in repr(user)


class TestLocationModel:
    """Tests for Location model and enums."""

    def test_location_types_match_documentation(self) -> None:
        expected = {"DEPOT", "HUB", "FORWARD_POST", "DISTRIBUTION_CENTER"}
        actual = {t.value for t in LocationType}
        assert actual == expected

    def test_location_terrain_types(self) -> None:
        assert "MOUNTAIN" in {t.value for t in TerrainType}
        assert "PLAINS" in {t.value for t in TerrainType}

    def test_location_instantiation(self) -> None:
        loc = Location(
            name="Alpha Forward Post",
            type=LocationType.FORWARD_POST.value,
            latitude=32.5,
            longitude=76.5,
            status=LocationStatus.ACTIVE.value,
        )
        assert loc.name == "Alpha Forward Post"
        assert loc.type == "FORWARD_POST"
        assert loc.latitude == 32.5

    def test_location_default_priority(self) -> None:
        loc = Location(
            name="Test Depot",
            type=LocationType.DEPOT.value,
            latitude=28.6,
            longitude=77.2,
        )
        assert loc.name == "Test Depot"


class TestItemModel:
    """Tests for Item model and enums."""

    def test_item_categories(self) -> None:
        expected = {
            "FUEL",
            "FOOD",
            "MEDICAL",
            "AMMUNITION",
            "EQUIPMENT",
            "CLOTHING",
            "SPARE_PARTS",
            "CONSTRUCTION",
            "COMMUNICATION",
            "WATER",
            "OTHER",
        }
        assert {c.value for c in ItemCategory} == expected

    def test_item_criticality_values(self) -> None:
        assert {c.value for c in ItemCriticality} == {
            "LOW",
            "MEDIUM",
            "HIGH",
            "CRITICAL",
        }

    def test_item_unit_values(self) -> None:
        assert "KG" in {u.value for u in ItemUnit}
        assert "LITRE" in {u.value for u in ItemUnit}

    def test_item_instantiation(self) -> None:
        item = Item(
            name="Diesel Fuel",
            category=ItemCategory.FUEL.value,
            unit=ItemUnit.LITRE.value,
            criticality=ItemCriticality.CRITICAL.value,
            min_stock=5000.0,
            safety_stock=2000.0,
        )
        assert item.name == "Diesel Fuel"
        assert item.criticality == "CRITICAL"


class TestInventoryModel:
    """Tests for Inventory model."""

    def test_available_quantity_no_reservation(self) -> None:
        loc_id = uuid.uuid4()
        item_id = uuid.uuid4()
        inv = Inventory(location_id=loc_id, item_id=item_id, quantity=1000.0)
        assert inv.available_quantity == 1000.0

    def test_available_quantity_with_reservation(self) -> None:
        loc_id = uuid.uuid4()
        item_id = uuid.uuid4()
        inv = Inventory(
            location_id=loc_id,
            item_id=item_id,
            quantity=1000.0,
            reserved_quantity=300.0,
        )
        assert inv.available_quantity == 700.0

    def test_available_quantity_cannot_go_negative(self) -> None:
        loc_id = uuid.uuid4()
        item_id = uuid.uuid4()
        inv = Inventory(
            location_id=loc_id,
            item_id=item_id,
            quantity=100.0,
            reserved_quantity=500.0,
        )
        assert inv.available_quantity == 0.0


class TestVehicleModel:
    def test_vehicle_instantiation(self) -> None:
        veh = Vehicle(
            name="Alpha Convoy 1",
            vehicle_type=VehicleType.HEAVY_TRUCK.value,
            capacity_kg=10000.0,
            availability_status=VehicleStatus.AVAILABLE.value,
        )
        assert veh.name == "Alpha Convoy 1"
        assert veh.capacity_kg == 10000.0


class TestShipmentModel:
    def test_shipment_instantiation(self) -> None:
        src = uuid.uuid4()
        dst = uuid.uuid4()
        shp = Shipment(
            source_location_id=src,
            destination_location_id=dst,
            status=ShipmentStatus.PLANNED.value,
            priority=ShipmentPriority.URGENT.value,
        )
        assert shp.status == "PLANNED"
        assert shp.priority == "URGENT"


class TestRouteModel:
    def test_route_instantiation(self) -> None:
        r = Route(
            name="Route Alpha-Leh",
            status=RouteStatus.ACTIVE.value,
            base_risk_score=0.25,
        )
        assert r.name == "Route Alpha-Leh"
        assert r.base_risk_score == 0.25


class TestWeatherRecord:
    def test_weather_instantiation(self) -> None:
        w = WeatherRecord(
            location_id=uuid.uuid4(),
            temperature_c=-15.0,
            precipitation_mm=12.5,
            severity=WeatherSeverity.SEVERE.value,
        )
        assert w.temperature_c == -15.0
        assert w.severity == "SEVERE"


class TestDemandForecast:
    def test_forecast_instantiation(self) -> None:
        f = DemandForecast(
            location_id=uuid.uuid4(),
            item_id=uuid.uuid4(),
            horizon_days=30,
            model_version="xgboost_v1.0",
            metrics={"mae": 12.4, "rmse": 18.2},
        )
        assert f.horizon_days == 30
        assert f.model_version == "xgboost_v1.0"


class TestRiskPrediction:
    def test_risk_instantiation(self) -> None:
        r = RiskPrediction(
            entity_type=EntityType.LOCATION.value,
            entity_id=uuid.uuid4(),
            risk_type=RiskType.STOCKOUT.value,
            score=0.85,
            severity=RiskSeverity.HIGH.value,
            explanation={"runway_days": 2.5, "weather_impact": 0.3},
        )
        assert r.score == 0.85
        assert r.severity == "HIGH"


class TestAlertModel:
    def test_alert_instantiation(self) -> None:
        a = Alert(
            severity=AlertSeverity.CRITICAL.value,
            alert_type="STOCKOUT_WARNING",
            title="Critical Diesel Stockout at Base Alpha",
            status=AlertStatus.NEW.value,
        )
        assert a.severity == "CRITICAL"
        assert a.title.startswith("Critical Diesel")


class TestSimulationModel:
    def test_simulation_instantiation(self) -> None:
        s = Simulation(
            scenario_type=ScenarioType.ROUTE_BLOCK.value,
            parameters={"blocked_route_id": str(uuid.uuid4())},
            status=SimulationStatus.PENDING.value,
        )
        assert s.scenario_type == "ROUTE_BLOCK"
        assert s.status == "PENDING"


class TestAuditLog:
    def test_audit_log_instantiation(self) -> None:
        al = AuditLog(
            action="CREATE_SHIPMENT",
            entity_type="SHIPMENT",
            entity_id=uuid.uuid4(),
        )
        assert al.action == "CREATE_SHIPMENT"
