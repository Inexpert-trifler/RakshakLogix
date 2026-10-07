"""
RakshakLogix — Synthetic Logistics Data Generator

Generates realistic, deterministic synthetic datasets for forward logistics:
- 50 synthetic locations (Depots, Hubs, Forward Posts)
- 20 supply categories/items
- 180 days historical consumption time series
- 30 vehicles
- 100+ synthetic route segments
- 180 days weather observations
- 10,000+ inventory transactions
- 1,000+ synthetic shipments

Uses a deterministic seed (default: 42) for reproducible data generation.
"""

from __future__ import annotations

import random
import uuid
from datetime import UTC, date, datetime, timedelta

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import hash_password
from app.models.alert import Alert, AlertSeverity, AlertStatus
from app.models.consumption import ConsumptionRecord
from app.models.inventory import Inventory, InventoryTransaction, TransactionType
from app.models.item import Item, ItemCategory, ItemCriticality, ItemUnit
from app.models.location import Location, LocationStatus, LocationType, TerrainType
from app.models.route import Route, RouteSegment, RouteStatus
from app.models.shipment import Shipment, ShipmentItem, ShipmentPriority, ShipmentStatus
from app.models.user import User, UserRole, UserStatus
from app.models.vehicle import Vehicle, VehicleStatus, VehicleType
from app.models.weather import WeatherRecord, WeatherSeverity


class SyntheticDataGenerator:
    """Orchestrates deterministic synthetic data generation."""

    def __init__(self, seed: int = 42) -> None:
        self.seed = seed

    def set_seed(self) -> None:
        random.seed(self.seed)

    async def generate_all(self, db: AsyncSession) -> dict[str, int]:
        self.set_seed()

        # Check existing data
        res = await db.execute(select(User).where(User.email == "admin@rakshaklogix.dev"))
        if res.scalar_one_or_none():
            return {"status": 0, "message": "Database already seeded."}

        counts: dict[str, int] = {}

        # 1. Users
        users = [
            User(
                name="Command Admin",
                email="admin@rakshaklogix.dev",
                password_hash=hash_password("Admin@123456"),
                role=UserRole.ADMIN.value,
                status=UserStatus.ACTIVE.value,
            ),
            User(
                name="Major V. Sharma (Logistics Planner)",
                email="planner@rakshaklogix.dev",
                password_hash=hash_password("Planner@123456"),
                role=UserRole.LOGISTICS_PLANNER.value,
                status=UserStatus.ACTIVE.value,
            ),
            User(
                name="Captain A. Kumar (Transport Coordinator)",
                email="transport@rakshaklogix.dev",
                password_hash=hash_password("Transport@123456"),
                role=UserRole.TRANSPORT_COORDINATOR.value,
                status=UserStatus.ACTIVE.value,
            ),
            User(
                name="Brigadier S. Singh (Command Viewer)",
                email="command@rakshaklogix.dev",
                password_hash=hash_password("Command@123456"),
                role=UserRole.COMMAND_VIEWER.value,
                status=UserStatus.ACTIVE.value,
            ),
            User(
                name="Dr. R. Verma (Data & ML Analyst)",
                email="analyst@rakshaklogix.dev",
                password_hash=hash_password("Analyst@123456"),
                role=UserRole.DATA_ML_ANALYST.value,
                status=UserStatus.ACTIVE.value,
            ),
        ]
        db.add_all(users)
        await db.flush()
        counts["users"] = len(users)

        # 2. Locations (50 Fictional Sector Nodes)
        base_locations = [
            (
                "Central Supply Depot Alpha",
                LocationType.DEPOT,
                30.73,
                76.77,
                350.0,
                TerrainType.PLAINS,
            ),
            (
                "Base Logistics Hub Bravo",
                LocationType.HUB,
                32.72,
                74.85,
                327.0,
                TerrainType.PLAINS,
            ),
            (
                "Forward Supply Depot Charlie",
                LocationType.DEPOT,
                34.08,
                74.79,
                1585.0,
                TerrainType.VALLEY,
            ),
            (
                "Divisional Logistics Hub Leh-Sector",
                LocationType.HUB,
                34.15,
                77.57,
                3500.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Brigade Logistics Hub Kargil-Sector",
                LocationType.HUB,
                34.55,
                76.13,
                2676.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Sub-Sector Hub Dras-West",
                LocationType.HUB,
                34.42,
                75.76,
                3230.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Forward Logistics Site North-1",
                LocationType.FORWARD_POST,
                34.65,
                76.32,
                2800.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Forward Logistics Site North-2",
                LocationType.FORWARD_POST,
                34.84,
                76.83,
                3000.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Sub-Sector Hub Diskit-North",
                LocationType.HUB,
                34.54,
                77.56,
                3144.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Glacier Support Hub Sasoma",
                LocationType.HUB,
                34.85,
                77.65,
                3600.0,
                TerrainType.GLACIER,
            ),
            (
                "High Altitude Site Glacier Base",
                LocationType.HUB,
                35.20,
                77.22,
                3650.0,
                TerrainType.GLACIER,
            ),
            (
                "Forward Tactical Post Kumar",
                LocationType.FORWARD_POST,
                35.35,
                77.15,
                4800.0,
                TerrainType.GLACIER,
            ),
            (
                "Forward Tactical Post Col",
                LocationType.FORWARD_POST,
                35.65,
                76.82,
                5700.0,
                TerrainType.GLACIER,
            ),
            (
                "Sub-Sector Hub Tangtse-East",
                LocationType.HUB,
                34.02,
                78.18,
                3900.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Forward Site Lukung",
                LocationType.FORWARD_POST,
                33.95,
                78.43,
                4250.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Forward Site Chushul",
                LocationType.FORWARD_POST,
                33.55,
                78.65,
                4350.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Forward Site Rezang",
                LocationType.FORWARD_POST,
                33.42,
                78.85,
                4800.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "High Plateau Logistics Hanle",
                LocationType.FORWARD_POST,
                32.77,
                78.98,
                4500.0,
                TerrainType.HIGH_PLATEAU,
            ),
            (
                "Advanced Hub Nyoma-South",
                LocationType.HUB,
                33.02,
                78.42,
                4180.0,
                TerrainType.HIGH_PLATEAU,
            ),
            (
                "Forward Site Demchok",
                LocationType.FORWARD_POST,
                32.70,
                79.45,
                4200.0,
                TerrainType.HIGH_PLATEAU,
            ),
        ]

        loc_objects = []
        for name, ltype, lat, lon, elev, terr in base_locations:
            loc = Location(
                name=name,
                type=ltype.value,
                latitude=lat,
                longitude=lon,
                elevation_m=elev,
                terrain_type=terr.value,
                capacity=round(random.uniform(1000.0, 10000.0), 1),
                priority=random.randint(1, 10),
                status=LocationStatus.ACTIVE.value,
            )
            loc_objects.append(loc)

        for i in range(len(base_locations) + 1, 51):
            loc = Location(
                name=f"Forward Site Delta-{i:02d}",
                type=LocationType.FORWARD_POST.value,
                latitude=round(33.0 + (i * 0.05), 4),
                longitude=round(77.0 + (i * 0.04), 4),
                elevation_m=round(3000.0 + (i * 35), 1),
                terrain_type=TerrainType.MOUNTAIN.value,
                capacity=800.0,
                priority=random.randint(3, 9),
                status=LocationStatus.ACTIVE.value,
            )
            loc_objects.append(loc)

        db.add_all(loc_objects)
        await db.flush()
        counts["locations"] = len(loc_objects)

        # 3. Items (20 Categories)
        item_definitions = [
            (
                "Winter Grade Diesel Fuel (5-D)",
                ItemCategory.FUEL,
                ItemUnit.LITRE,
                ItemCriticality.CRITICAL,
                730,
                10000.0,
                3000.0,
            ),
            (
                "Aviation Turbine Fuel (ATF)",
                ItemCategory.FUEL,
                ItemUnit.LITRE,
                ItemCriticality.CRITICAL,
                730,
                8000.0,
                2500.0,
            ),
            (
                "High Altitude Operational Rations (HAOR)",
                ItemCategory.FOOD,
                ItemUnit.RATION_PACK,
                ItemCriticality.HIGH,
                365,
                5000.0,
                1500.0,
            ),
            (
                "Fresh Produce & Dry Rations",
                ItemCategory.FOOD,
                ItemUnit.KG,
                ItemCriticality.MEDIUM,
                30,
                2000.0,
                500.0,
            ),
            (
                "High Altitude Trauma & Oxygen Kits",
                ItemCategory.MEDICAL,
                ItemUnit.BOX,
                ItemCriticality.CRITICAL,
                500,
                500.0,
                200.0,
            ),
            (
                "Essential Medical Supplies & Antidotes",
                ItemCategory.MEDICAL,
                ItemUnit.BOX,
                ItemCriticality.HIGH,
                365,
                400.0,
                150.0,
            ),
            (
                "7.62mm Rifle Ammunition Crate",
                ItemCategory.AMMUNITION,
                ItemUnit.BOX,
                ItemCriticality.CRITICAL,
                1825,
                1000.0,
                400.0,
            ),
            (
                "155mm Artillery Shells",
                ItemCategory.AMMUNITION,
                ItemUnit.UNIT,
                ItemCriticality.CRITICAL,
                3650,
                600.0,
                200.0,
            ),
            (
                "Extreme Cold Weather Clothing (ECWCS)",
                ItemCategory.CLOTHING,
                ItemUnit.SET,
                ItemCriticality.HIGH,
                1095,
                800.0,
                300.0,
            ),
            (
                "High Altitude Sleeping Bags (-40C)",
                ItemCategory.CLOTHING,
                ItemUnit.UNIT,
                ItemCriticality.HIGH,
                1095,
                600.0,
                200.0,
            ),
            (
                "Heavy Vehicle Engine Spare Parts",
                ItemCategory.SPARE_PARTS,
                ItemUnit.SET,
                ItemCriticality.MEDIUM,
                1825,
                200.0,
                50.0,
            ),
            (
                "Tyres & Snow Chains (4x4 / 6x6)",
                ItemCategory.SPARE_PARTS,
                ItemUnit.UNIT,
                ItemCriticality.HIGH,
                1095,
                300.0,
                100.0,
            ),
            (
                "Tactical VHF/UHF Radio Units",
                ItemCategory.COMMUNICATION,
                ItemUnit.UNIT,
                ItemCriticality.HIGH,
                1825,
                150.0,
                50.0,
            ),
            (
                "Satellite Phone Battery Packs",
                ItemCategory.COMMUNICATION,
                ItemUnit.UNIT,
                ItemCriticality.HIGH,
                730,
                400.0,
                100.0,
            ),
            (
                "Portable Diesel Generator Sets 15kVA",
                ItemCategory.EQUIPMENT,
                ItemUnit.UNIT,
                ItemCriticality.HIGH,
                1825,
                50.0,
                15.0,
            ),
            (
                "Snow Clearance & Shovel Equipment",
                ItemCategory.EQUIPMENT,
                ItemUnit.SET,
                ItemCriticality.MEDIUM,
                1825,
                300.0,
                100.0,
            ),
            (
                "Bunkers Reinforcement Cement & Steel",
                ItemCategory.CONSTRUCTION,
                ItemUnit.KG,
                ItemCriticality.LOW,
                1825,
                10000.0,
                2000.0,
            ),
            (
                "Corrugated Galvanized Iron Sheets",
                ItemCategory.CONSTRUCTION,
                ItemUnit.UNIT,
                ItemCriticality.LOW,
                1825,
                1000.0,
                200.0,
            ),
            (
                "Water Purification Powder Bags",
                ItemCategory.WATER,
                ItemUnit.BOX,
                ItemCriticality.CRITICAL,
                730,
                500.0,
                150.0,
            ),
            (
                "Kerosene Heating Fuel (SKO)",
                ItemCategory.FUEL,
                ItemUnit.LITRE,
                ItemCriticality.CRITICAL,
                730,
                12000.0,
                4000.0,
            ),
        ]

        item_objects = []
        for name, cat, unit, crit, shelf, min_s, safe_s in item_definitions:
            item = Item(
                name=name,
                category=cat.value,
                unit=unit.value,
                criticality=crit.value,
                shelf_life_days=shelf,
                min_stock=min_s,
                safety_stock=safe_s,
            )
            item_objects.append(item)

        db.add_all(item_objects)
        await db.flush()
        counts["items"] = len(item_objects)

        # 4. Vehicles (30 Vehicles)
        v_types = [
            VehicleType.LIGHT_TRUCK,
            VehicleType.MEDIUM_TRUCK,
            VehicleType.HEAVY_TRUCK,
            VehicleType.ALL_TERRAIN_VEHICLE,
            VehicleType.CONVOY,
            VehicleType.HELICOPTER,
        ]
        veh_objects = []
        for i in range(1, 31):
            vtype = v_types[i % len(v_types)]
            v = Vehicle(
                name=f"Supply Transport Vehicle-{i:02d}",
                vehicle_type=vtype.value,
                capacity_kg=(
                    15000.0
                    if vtype == VehicleType.HEAVY_TRUCK
                    else 5000.0
                    if vtype == VehicleType.MEDIUM_TRUCK
                    else 2500.0
                ),
                availability_status=(
                    VehicleStatus.AVAILABLE.value if i % 5 != 0 else VehicleStatus.IN_TRANSIT.value
                ),
                home_location_id=loc_objects[i % len(loc_objects)].id,
            )
            veh_objects.append(v)

        db.add_all(veh_objects)
        await db.flush()
        counts["vehicles"] = len(veh_objects)

        # 5. Inventory & Historical Consumption Records (180 Days)
        today = date.today()
        start_history_date = today - timedelta(days=180)

        n_consumption_records = 0
        n_transactions = 0

        for loc_idx, loc in enumerate(loc_objects[:25]):
            for item_idx, item in enumerate(item_objects[:15]):
                # Demonstrate Scenarios:
                # Scenario A: Demand Spike for location 0, item 0
                # Scenario B: Low Initial Inventory for location 1, item 0
                if loc_idx == 1 and item_idx == 0:
                    init_qty = round(item.safety_stock * 0.4, 1)  # Low stock breach scenario
                else:
                    init_qty = round(
                        random.uniform(item.safety_stock * 1.5, item.safety_stock * 3.5),
                        1,
                    )

                inv = Inventory(
                    location_id=loc.id,
                    item_id=item.id,
                    quantity=init_qty,
                    reserved_quantity=round(random.uniform(0.0, init_qty * 0.15), 1),
                    safety_stock=item.safety_stock,
                )
                db.add(inv)

                # Initial receipt transaction
                tx_init = InventoryTransaction(
                    location_id=loc.id,
                    item_id=item.id,
                    transaction_type=TransactionType.RECEIPT.value,
                    quantity=init_qty,
                    reference_id="INIT_STOCK_SEED",
                    notes="Initial seed receipt",
                    performed_by_id=users[0].id,
                )
                db.add(tx_init)
                n_transactions += 1

                # Generate 180 days time series with seasonality, trends & spikes
                base_demand = 20.0 + (loc_idx * 5.0) + (item_idx * 2.0)

                for day_idx in range(180):
                    c_date = start_history_date + timedelta(days=day_idx)
                    day_of_week = c_date.weekday()

                    # Weekly seasonality (higher demand on Monday/Tuesday)
                    season_factor = 1.25 if day_of_week in (0, 1) else 0.95

                    # Demand spike scenario in last 14 days for loc 0, item 0
                    if loc_idx == 0 and item_idx == 0 and day_idx >= 165:
                        spike_factor = 2.4
                    else:
                        spike_factor = 1.0

                    noise = random.uniform(0.85, 1.15)
                    cons_qty = max(
                        1.0,
                        round(base_demand * season_factor * spike_factor * noise, 1),
                    )

                    cr = ConsumptionRecord(
                        location_id=loc.id,
                        item_id=item.id,
                        date=c_date,
                        quantity=cons_qty,
                        source="AUTOMATED_TELEMETRY",
                    )
                    db.add(cr)
                    n_consumption_records += 1

                    # Add stock issue transaction every 5 days for 25x15 pairs = 375 * 36 = 13,500 transactions
                    if day_idx % 5 == 0:
                        tx_issue = InventoryTransaction(
                            location_id=loc.id,
                            item_id=item.id,
                            transaction_type=TransactionType.ISSUE.value,
                            quantity=cons_qty,
                            reference_id=f"ISSUE_{c_date}",
                            notes="Regular daily issue",
                            performed_by_id=users[1].id,
                        )
                        db.add(tx_issue)
                        n_transactions += 1

        counts["consumption_records"] = n_consumption_records
        counts["inventory_transactions"] = n_transactions

        # 6. Routes & Route Segments (100+ Segments)
        route_names = [
            "Pass Highway Route Alpha (NH-1)",
            "High-Pass Corridor Beta",
            "Pass Corridor Charlie to Pangong",
            "Tunnel Bypass Highway Delta",
            "High Altitude Pass Echo",
            "Tactical Feeder Route Foxtrot",
            "Diskit Forward Corridor Golf",
            "Nyoma High Plateau Sector Hotel",
            "Leh Lateral Link India",
            "Tangtse Perimeter Route Juliet",
        ]

        n_segments = 0
        for r_idx, r_name in enumerate(route_names):
            r = Route(
                name=r_name,
                status=(RouteStatus.ACTIVE.value if r_idx != 2 else RouteStatus.RESTRICTED.value),
                base_risk_score=round(0.15 + (r_idx * 0.03), 2),
            )
            db.add(r)
            await db.flush()

            for seg_i in range(1, 11):
                from_loc = loc_objects[(seg_i - 1) % len(loc_objects)]
                to_loc = loc_objects[seg_i % len(loc_objects)]
                seg = RouteSegment(
                    id=uuid.uuid4(),
                    route_id=r.id,
                    from_location_id=from_loc.id,
                    to_location_id=to_loc.id,
                    segment_order=seg_i,
                    distance_km=round(random.uniform(15.0, 65.0), 1),
                    travel_time_hours=round(random.uniform(0.8, 3.2), 1),
                    terrain_risk=round(random.uniform(0.1, 0.45), 2),
                    road_risk=round(random.uniform(0.05, 0.35), 2),
                )

                db.add(seg)
                n_segments += 1

        counts["routes"] = len(route_names)
        counts["route_segments"] = n_segments

        # 7. Weather Records (180 Days)
        n_weather = 0
        for loc in loc_objects[:10]:
            for d_offset in range(0, 180, 2):
                w_time = datetime.now(UTC) - timedelta(days=d_offset)
                temp = round(random.uniform(-25.0, 5.0), 1)
                sev = (
                    WeatherSeverity.SEVERE.value
                    if temp < -15.0
                    else (
                        WeatherSeverity.MODERATE.value if temp < -5.0 else WeatherSeverity.LOW.value
                    )
                )
                wr = WeatherRecord(
                    location_id=loc.id,
                    timestamp=w_time,
                    temperature_c=temp,
                    precipitation_mm=round(random.uniform(0.0, 45.0), 1),
                    wind_speed_kmh=round(random.uniform(10.0, 75.0), 1),
                    severity=sev,
                )
                db.add(wr)
                n_weather += 1

        counts["weather_records"] = n_weather

        # 8. Synthetic Shipments (1000+)
        n_shipments = 0
        for s_idx in range(1, 1001):
            src_loc = loc_objects[s_idx % len(loc_objects)]
            dst_loc = loc_objects[(s_idx + 3) % len(loc_objects)]
            veh = veh_objects[s_idx % len(veh_objects)]

            shp = Shipment(
                source_location_id=src_loc.id,
                destination_location_id=dst_loc.id,
                vehicle_id=veh.id,
                status=(
                    ShipmentStatus.PLANNED.value
                    if s_idx % 3 == 0
                    else (
                        ShipmentStatus.IN_TRANSIT.value
                        if s_idx % 2 == 0
                        else ShipmentStatus.DELIVERED.value
                    )
                ),
                priority=(
                    ShipmentPriority.URGENT.value
                    if s_idx % 5 == 0
                    else ShipmentPriority.ROUTINE.value
                ),
                planned_departure=datetime.now(UTC) - timedelta(hours=s_idx * 2),
                planned_arrival=datetime.now(UTC) + timedelta(hours=24 + s_idx),
            )
            db.add(shp)
            await db.flush()

            si = ShipmentItem(
                shipment_id=shp.id,
                item_id=item_objects[s_idx % len(item_objects)].id,
                quantity=round(random.uniform(100.0, 1500.0), 1),
            )
            db.add(si)
            n_shipments += 1

        counts["shipments"] = n_shipments

        # 9. Initial Alerts
        alerts = [
            Alert(
                severity=AlertSeverity.CRITICAL.value,
                alert_type="STOCKOUT_WARNING",
                title="Critical Stockout Warning: Diesel Fuel at Forward Site North-1",
                message="Demand surge detected. Projected stockout in 2.4 days.",
                entity_type="LOCATION",
                entity_id=loc_objects[0].id,
                status=AlertStatus.NEW.value,
            ),
            Alert(
                severity=AlertSeverity.HIGH.value,
                alert_type="SAFETY_STOCK_BREACH",
                title="Safety Stock Breach: Medical Kits at Base Hub Bravo",
                message="Current inventory 200.0 units is below safety stock threshold of 500.0 units.",
                entity_type="LOCATION",
                entity_id=loc_objects[1].id,
                status=AlertStatus.NEW.value,
            ),
        ]
        db.add_all(alerts)
        await db.flush()
        counts["alerts"] = len(alerts)

        await db.commit()
        return counts
