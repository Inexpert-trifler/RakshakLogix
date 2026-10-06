# RakshakLogix — Predictive Logistics & Forward Supply Chain Backend

**RakshakLogix** is an AI-assisted Predictive Logistics & Forward Supply Chain Decision-Support Platform developed for **SIH Problem Statement 26251: Indian Army — Predictive Logistics & Forward Supply Chain**.

> **Predict → Detect → Simulate → Optimize → Act**

---

## 🏗️ Architecture & Stack

### Target Architecture
```text
Client
  ↓
FastAPI Routes (Thin handlers)
  ↓
Schemas & Pydantic Validation
  ↓
Service Layer (SimulationService, OptimizationPlanner, DemandForecaster)
  ↓
Repository / Database Access Layer
  ↓
PostgreSQL + PostGIS / Redis / Celery Background Workers
```

### Technology Stack
- **Framework**: FastAPI (Python 3.13) with Pydantic v2
- **Database**: PostgreSQL with PostGIS extension (SQLAlchemy 2.0 Async ORM + Alembic migrations)
- **Security**: Argon2id password hashing, JWT access & refresh tokens, Role-Based Access Control (RBAC)
- **Intelligence & Analytics**: Pandas, NumPy, scikit-learn, Statsmodels (Demand Forecasting), Composite Risk Engine, NetworkX Graph Route Optimizer, Google OR-Tools MIP Solver, Isolated What-If Scenario Engine
- **Background Infrastructure**: Redis & Celery worker setup (`generate_forecast_task`, `run_route_optimization_task`, `run_simulation_task`)
- **Testing**: Pytest & HTTPX (83 passing unit and integration tests)
- **Containerization**: Docker & Docker Compose

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- Docker & Docker Compose
- Python 3.12+ (for local development without Docker)

### 2. Environment Configuration
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Default configuration includes:
```env
APP_NAME=RakshakLogix
APP_ENV=development
API_V1_PREFIX=/api/v1
DATABASE_URL=postgresql+asyncpg://rakshak:rakshak_dev@localhost:5432/rakshaklogix
REDIS_URL=redis://localhost:6379/0
JWT_SECRET_KEY=CHANGE_ME_IN_PRODUCTION_SUPER_SECRET_KEY
```

### 3. Running with Docker Compose
Start the complete stack (API, PostgreSQL/PostGIS, Redis, Celery Worker):
```bash
docker compose up --build
```

### 4. Database Migrations (Alembic)
To run database migrations:
```bash
docker compose exec api alembic upgrade head
```

Or locally:
```bash
.venv/bin/alembic upgrade head
```

### 5. Synthetic Data Generation & Schema Reset
Generate deterministic synthetic logistics dataset (50 locations, 20 items, 30 vehicles, 180 days consumption, 10,000+ transactions, 1,000+ shipments, weather observations):
```bash
python -m scripts.generate_demo_data --seed 42
```
To safely reset schema and regenerate dataset in development mode:
```bash
python -m scripts.generate_demo_data --seed 42 --reset
```

### 6. Running Celery Worker locally
To run the Celery background worker locally:
```bash
.venv/bin/celery -A app.workers.celery_app worker --loglevel=info
```

---

## 🔮 Phase 4: Disruption Simulation, Scenario Comparison & Dashboard Intelligence

### 1. Scenario Simulation Engine (`app/services/scenario_engine.py` & `app/services/simulation_service.py`)
Executes isolated what-if scenario simulations on in-memory state clones. **Guarantees ZERO mutation of live operational database state.**

Supported Scenario Types:
- **`ROUTE_UNAVAILABLE`** (or `ROUTE_BLOCK`): Simulates route/segment blockages due to landslides or weather; evaluates alternative corridors via NetworkX graph and recalculates transit ETAs and downstream stockout risks.
- **`DEMAND_SPIKE`**: Simulates sudden consumption surges (e.g., +35% to +200%); recalculates inventory runway days, safety stock breaches, and required emergency resupply quantities.
- **`SEVERE_WEATHER`** (or `WEATHER_DISRUPTION`): Simulates severe weather (blizzards, heavy rain); applies travel time multipliers and elevated risk scores to affected corridors.
- **`VEHICLE_UNAVAILABLE`** (or `VEHICLE_SHORTAGE`): Simulates fleet breakdown or capacity loss; re-runs vehicle assignment optimization to reallocate payload.

### 2. Automated Mitigation Options & Comparative Analysis
The simulation engine generates ranked mitigation alternatives (e.g. Alternative Pass Route, Secondary Depot Source, Air Express Airlift) complete with:
- Expected impact (ETA, distance, risk score, stockout avoidance)
- Confidence score and explainable command reasoning
- Baseline vs. Scenario delta comparison metrics (inventory deltas, transit delay deltas, risk deltas)

### 3. Real-Time Dashboard Intelligence APIs (`app/api/routes/dashboard.py`)
Returns real aggregated database data (absolutely zero hardcoded numbers):
- **`GET /api/v1/dashboard/summary`**: Overall system readiness %, total locations/items, active/delayed shipments, critical alerts, high-risk routes, and structured inventory/risk/transportation breakdown.
- **`GET /api/v1/dashboard/map`**: GIS map pins with real-time risk severity and stockout risk items count, and route corridor lines.
- **`GET /api/v1/dashboard/trends?days=30`**: Historical consumption vs. predictive forecast time-series data for command center charting.

### 4. API Endpoints
- `POST /api/v1/simulations`: Configure new simulation scenario
- `POST /api/v1/simulations/{id}/run`: Run simulation asynchronously
- `GET /api/v1/simulations/{id}`: Fetch simulation status, parameters, summary, and mitigation options
- `GET /api/v1/simulations/{id}/results`: Fetch comparative metric delta records

---

## 🧪 Testing

Run the full pytest suite (83 passing unit and integration tests across Phase 1–4):
```bash
.venv/bin/pytest
```

---

## 🔑 Default User Accounts (Demo Seed Data)
- **Admin**: `admin@rakshaklogix.dev` / `Admin@123456` (`ADMIN`)
- **Logistics Planner**: `planner@rakshaklogix.dev` / `Planner@123456` (`LOGISTICS_PLANNER`)
- **Transport Coordinator**: `transport@rakshaklogix.dev` / `Transport@123456` (`TRANSPORT_COORDINATOR`)
- **Command Viewer**: `command@rakshaklogix.dev` / `Command@123456` (`COMMAND_VIEWER`)

---

## 🛡️ Security & Privacy Notice
RakshakLogix is a decision-support platform operating on synthetic/public demonstration data only. All AI recommendations are explainable, auditable, and subject to human command approval.
