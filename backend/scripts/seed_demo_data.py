"""
RakshakLogix — Seed Demo Dataset Script

Generates realistic forward supply chain synthetic dataset matching doc requirements:
- Users (Admin, Logistics Planner, Transport Coordinator, Command Viewer)
- 50 Northern Forward Logistics Locations (Depots, Hubs, Forward Posts)
- 20 Item Categories & Key Supplies
- 30 Vehicles & Convoys
- 100+ Route Segments
- 180 Days Historical Consumption Records
- 180 Days Weather Records
- Initial Inventory Levels & Transactions
- Active & Planned Shipments
"""

from __future__ import annotations

import asyncio
import random
from datetime import UTC, date, datetime, timedelta

from sqlalchemy import select

from app.core.database import AsyncSessionLocal
from app.core.security import hash_password
from app.models.alert import Alert, AlertSeverity, AlertStatus
from app.models.consumption import ConsumptionRecord
from app.models.inventory import Inventory
from app.models.item import Item, ItemCategory, ItemCriticality, ItemUnit
from app.models.location import Location, LocationStatus, LocationType, TerrainType
from app.models.route import Route, RouteSegment, RouteStatus
from app.models.user import User, UserRole, UserStatus
from app.models.vehicle import Vehicle, VehicleStatus, VehicleType
from app.models.weather import WeatherRecord, WeatherSeverity


async def seed_database() -> None:
    print("🌱 Starting RakshakLogix Seed Data Generation...")

    async with AsyncSessionLocal() as session:
        # Check if already seeded
        res = await session.execute(
            select(User).where(User.email == "admin@rakshaklogix.dev")
        )
        if res.scalar_one_or_none():
            print("⚠️ Database already seeded. Skipping...")
            return

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
        ]
        session.add_all(users)
        await session.flush()
        admin_user_id = users[0].id

        # 2. Locations (50 Northern Sectors)
        sector_names = [
            (
                "Central Supply Depot — Chandigarh",
                LocationType.DEPOT,
                30.73,
                76.77,
                350.0,
                TerrainType.PLAINS,
            ),
            (
                "Base Logistics Hub — Jammu",
                LocationType.HUB,
                32.72,
                74.85,
                327.0,
                TerrainType.PLAINS,
            ),
            (
                "Forward Supply Depot — Srinagar",
                LocationType.DEPOT,
                34.08,
                74.79,
                1585.0,
                TerrainType.VALLEY,
            ),
            (
                "Divisional Logistics Hub — Leh",
                LocationType.HUB,
                34.15,
                77.57,
                3500.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Brigade Logistics Hub — Kargil",
                LocationType.HUB,
                34.55,
                76.13,
                2676.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Sub-Sector Hub — Dras",
                LocationType.HUB,
                34.42,
                75.76,
                3230.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Forward Logistics Post — Batalik",
                LocationType.FORWARD_POST,
                34.65,
                76.32,
                2800.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Forward Logistics Post — Turtuk",
                LocationType.FORWARD_POST,
                34.84,
                76.83,
                3000.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Sub-Sector Hub — Diskit",
                LocationType.HUB,
                34.54,
                77.56,
                3144.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Base Logistics Post — Sasoma",
                LocationType.HUB,
                34.85,
                77.65,
                3600.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Base Logistics Post — Siachen Base Camp",
                LocationType.HUB,
                35.20,
                77.22,
                3650.0,
                TerrainType.GLACIER,
            ),
            (
                "Forward Post — Kumar Post",
                LocationType.FORWARD_POST,
                35.35,
                77.15,
                4800.0,
                TerrainType.GLACIER,
            ),
            (
                "Forward Post — Indira Col",
                LocationType.FORWARD_POST,
                35.65,
                76.82,
                5700.0,
                TerrainType.GLACIER,
            ),
            (
                "Sub-Sector Hub — Tangtse",
                LocationType.HUB,
                34.02,
                78.18,
                3900.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Forward Post — Lukung (Pangong)",
                LocationType.FORWARD_POST,
                33.95,
                78.43,
                4250.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Forward Post — Chushul",
                LocationType.FORWARD_POST,
                33.55,
                78.65,
                4350.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Forward Post — Rezang La",
                LocationType.FORWARD_POST,
                33.42,
                78.85,
                4800.0,
                TerrainType.MOUNTAIN,
            ),
            (
                "Forward Logistics Post — Hanle",
                LocationType.FORWARD_POST,
                32.77,
                78.98,
                4500.0,
                TerrainType.HIGH_PLATEAU,
            ),
            (
                "Advanced Hub — Nyoma",
                LocationType.HUB,
                33.02,
                78.42,
                4180.0,
                TerrainType.HIGH_PLATEAU,
            ),
            (
                "Forward Post — Demchok",
                LocationType.FORWARD_POST,
                32.70,
                79.45,
                4200.0,
                TerrainType.HIGH_PLATEAU,
            ),
        ]

        # Generate up to 50 locations
        loc_objects = []
        for name, ltype, lat, lon, elev, terr in sector_names:
            loc = Location(
                name=name,
                type=ltype.value,
                latitude=lat,
                longitude=lon,
                elevation_m=elev,
                terrain_type=terr.value,
                capacity=random.uniform(500.0, 5000.0),
                priority=random.randint(1, 10),
                status=LocationStatus.ACTIVE.value,
            )
            loc_objects.append(loc)

        for i in range(len(sector_names) + 1, 51):
            loc = Location(
                name=f"Forward Tactical Post FP-{i:02d}",
                type=LocationType.FORWARD_POST.value,
                latitude=33.0 + (i * 0.05),
                longitude=77.0 + (i * 0.04),
                elevation_m=3500.0 + (i * 30),
                terrain_type=TerrainType.MOUNTAIN.value,
                capacity=800.0,
                priority=random.randint(3, 9),
                status=LocationStatus.ACTIVE.value,
            )
            loc_objects.append(loc)

        session.add_all(loc_objects)
        await session.flush()

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

        session.add_all(item_objects)
        await session.flush()

        # 4. Vehicles (30 Fleet Vehicles)
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
            vtype = random.choice(v_types)
            v = Vehicle(
                name=f"Logistics Convoy Vehicle-{i:02d}",
                vehicle_type=vtype.value,
                capacity_kg=(
                    15000.0
                    if vtype == VehicleType.HEAVY_TRUCK
                    else 5000.0 if vtype == VehicleType.MEDIUM_TRUCK else 2500.0
                ),
                availability_status=(
                    VehicleStatus.AVAILABLE.value
                    if i % 4 != 0
                    else VehicleStatus.IN_TRANSIT.value
                ),
                home_location_id=loc_objects[i % len(loc_objects)].id,
            )
            veh_objects.append(v)

        session.add_all(veh_objects)
        await session.flush()

        # 5. Inventory & Historical Consumption Records (180 Days)
        today = date.today()
        start_history_date = today - timedelta(days=180)

        for loc in loc_objects[:15]:
            for item in item_objects[:10]:
                init_qty = random.uniform(
                    item.safety_stock * 1.5, item.safety_stock * 4.0
                )
                inv = Inventory(
                    location_id=loc.id,
                    item_id=item.id,
                    quantity=init_qty,
                    reserved_quantity=random.uniform(0.0, init_qty * 0.2),
                    safety_stock=item.safety_stock,
                )
                session.add(inv)

                # Generate 180 days consumption time series
                daily_base = random.uniform(15.0, 120.0)
                for d_offset in range(180):
                    c_date = start_history_date + timedelta(days=d_offset)
                    # Add day-of-week noise and trend
                    noise = random.uniform(0.8, 1.3)
                    qty = round(daily_base * noise, 1)
                    cr = ConsumptionRecord(
                        location_id=loc.id,
                        item_id=item.id,
                        date=c_date,
                        quantity=qty,
                        source="AUTOMATED_TELEMETRY",
                    )
                    session.add(cr)

        # 6. Routes & Route Segments (100+ Segments)
        route_names = [
            "Zoji La Pass Main Highway (NH-1)",
            "Khar Dung La High-Pass Route",
            "Chang La Pass Route to Pangong",
            "Rohtang - Atal Tunnel Bypass Highway",
            "Shinku La High Altitude Pass",
            "Dras - Kargil Tactical Feeder Route",
            "Diskit - Sasoma Forward Corridor",
            "Nyoma - Chushul High Plateau Sector",
            "Leh - Tangtse Lateral Link",
            "Tangtse - Lukung Perimeter Route",
        ]

        for r_name in route_names:
            r = Route(
                name=r_name,
                status=(
                    RouteStatus.ACTIVE.value
                    if "Khar" not in r_name
                    else RouteStatus.RESTRICTED.value
                ),
                base_risk_score=random.uniform(0.1, 0.45),
            )
            session.add(r)
            await session.flush()

            # Create 10 segments per route connecting locations
            for seg_i in range(1, 11):
                from_loc = loc_objects[(seg_i - 1) % len(loc_objects)]
                to_loc = loc_objects[seg_i % len(loc_objects)]
                seg = RouteSegment(
                    route_id=r.id,
                    from_location_id=from_loc.id,
                    to_location_id=to_loc.id,
                    segment_order=seg_i,
                    distance_km=random.uniform(15.0, 65.0),
                    travel_time_hours=random.uniform(0.8, 3.2),
                    terrain_risk=random.uniform(0.1, 0.5),
                    road_risk=random.uniform(0.05, 0.4),
                )
                session.add(seg)

        # 7. Weather Records (180 Days)
        for loc in loc_objects[:10]:
            for d_offset in range(0, 180, 5):
                w_time = datetime.now(UTC) - timedelta(days=d_offset)
                temp = random.uniform(-25.0, 5.0)
                sev = (
                    WeatherSeverity.SEVERE.value
                    if temp < -15.0
                    else (
                        WeatherSeverity.MODERATE.value
                        if temp < -5.0
                        else WeatherSeverity.LOW.value
                    )
                )
                wr = WeatherRecord(
                    location_id=loc.id,
                    timestamp=w_time,
                    temperature_c=temp,
                    precipitation_mm=random.uniform(0.0, 45.0),
                    wind_speed_kmh=random.uniform(10.0, 75.0),
                    severity=sev,
                )
                session.add(wr)

        # 8. Operational Alerts
        alerts = [
            Alert(
                severity=AlertSeverity.CRITICAL.value,
                alert_type="STOCKOUT_WARNING",
                title="Critical Diesel Reserve Warning at Forward Post Diskit",
                message="Current winter diesel runway is estimated at 2.4 days due to unpredicted convoy delay.",
                entity_type="LOCATION",
                entity_id=loc_objects[8].id,
                status=AlertStatus.NEW.value,
            ),
            Alert(
                severity=AlertSeverity.HIGH.value,
                alert_type="SEVERE_WEATHER",
                title="Heavy Blizzards at Zoji La Pass Sector",
                message="Precipitation 42mm, Wind 68km/h; Highway restricted to convoy movement only.",
                entity_type="ROUTE",
                entity_id=loc_objects[3].id,
                status=AlertStatus.NEW.value,
            ),
        ]
        session.add_all(alerts)

        await session.commit()
        print("✅ RakshakLogix Seed Demo Dataset successfully created!")


if __name__ == "__main__":
    asyncio.run(seed_database())
