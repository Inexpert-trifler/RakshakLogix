# RakshakLogix — Frontend to Backend Integration Map

This document maps all 42 frontend screens and modules in RakshakLogix to their corresponding FastAPI production backend endpoints.

---

## 1. Authentication & Access Gateway (RL-01 to RL-04)

| Screen ID | Screen Name | Route | Backend API Endpoint | HTTP Method |
|---|---|---|---|---|
| **RL-01** | Login Gateway | `/login` | `/api/v1/auth/login` | `POST` |
| **RL-02** | Password Recovery | `/forgot-password` | `/api/v1/auth/refresh` | `POST` |
| **RL-03** | Reset Password | `/reset-password` | `/api/v1/auth/refresh` | `POST` |
| **RL-04** | Role Access Selection | `/access` | `/api/v1/auth/me` | `GET` |

---

## 2. Command & GIS Intelligence Module (RL-05 to RL-07)

| Screen ID | Screen Name | Route | Backend API Endpoint | HTTP Method |
|---|---|---|---|---|
| **RL-05** | Command Dashboard | `/dashboard` | `/api/v1/dashboard/summary`<br>`/api/v1/dashboard/trends` | `GET`<br>`GET` |
| **RL-06** | GIS Command Center | `/gis-command-center` | `/api/v1/dashboard/map`<br>`/api/v1/locations`<br>`/api/v1/routes` | `GET`<br>`GET`<br>`GET` |
| **RL-07** | Alerts & Risk Center | `/alerts` | `/api/v1/alerts`<br>`/api/v1/alerts/{id}` | `GET`<br>`PATCH` |

---

## 3. Locations Module (RL-08 to RL-10)

| Screen ID | Screen Name | Route | Backend API Endpoint | HTTP Method |
|---|---|---|---|---|
| **RL-08** | Locations Overview | `/locations` | `/api/v1/locations` | `GET` |
| **RL-09** | Location Details | `/locations/:locationId` | `/api/v1/locations/{id}`<br>`/api/v1/inventory?location_id={id}` | `GET`<br>`GET` |
| **RL-10** | Add / Edit Location | `/locations/new` | `/api/v1/locations` | `POST` / `PATCH` |

---

## 4. Inventory & Consumption Module (RL-11 to RL-17)

| Screen ID | Screen Name | Route | Backend API Endpoint | HTTP Method |
|---|---|---|---|---|
| **RL-11** | Inventory Overview | `/inventory` | `/api/v1/inventory`<br>`/api/v1/items` | `GET`<br>`GET` |
| **RL-12** | Inventory Details | `/inventory/:inventoryId` | `/api/v1/inventory/{id}` | `GET` |
| **RL-13** | Inventory Transactions | `/inventory/transactions` | `/api/v1/inventory/transactions` | `POST` |
| **RL-14** | Inventory Risk / Replenishment | `/inventory/risk` | `/api/v1/inventory/risk` | `GET` |
| **RL-15** | Consumption History | `/consumption` | `/api/v1/inventory` | `GET` |
| **RL-16** | Import Consumption Data | `/consumption/import` | `/api/v1/consumption/import` | `POST` |
| **RL-17** | Data Quality Center | `/data-quality` | `/api/v1/consumption/import` | `GET` / `POST` |

---

## 5. Forecasting Module (RL-18 to RL-21)

| Screen ID | Screen Name | Route | Backend API Endpoint | HTTP Method |
|---|---|---|---|---|
| **RL-18** | Demand Forecasting Dashboard | `/forecasting` | `/api/v1/forecast/models` | `GET` |
| **RL-19** | Generate Forecast | `/forecasting/generate` | `/api/v1/forecast/demand`<br>`/api/v1/forecast/jobs/{job_id}` | `POST`<br>`GET` |
| **RL-20** | Forecast Details | `/forecasting/:forecastId` | `/api/v1/forecast/demand/{id}` | `GET` |
| **RL-21** | ML Model Performance | `/model-performance` | `/api/v1/forecast/models` | `GET` |

---

## 6. Fleet & Transportation Module (RL-22 to RL-25)

| Screen ID | Screen Name | Route | Backend API Endpoint | HTTP Method |
|---|---|---|---|---|
| **RL-22** | Fleet Overview | `/fleet` | `/api/v1/vehicles` | `GET` |
| **RL-23** | Vehicle Details | `/fleet/:vehicleId` | `/api/v1/vehicles` | `GET` |
| **RL-24** | Shipment Management | `/shipments` | `/api/v1/shipments` | `GET` / `POST` |
| **RL-25** | Shipment Details & Planning | `/shipments/:shipmentId` | `/api/v1/shipments` | `GET` |

---

## 7. Route Intelligence & Optimization (RL-26 to RL-28)

| Screen ID | Screen Name | Route | Backend API Endpoint | HTTP Method |
|---|---|---|---|---|
| **RL-26** | Route Intelligence | `/routes` | `/api/v1/routes` | `GET` |
| **RL-27** | Route Optimization Workspace | `/routes/optimize` | `/api/v1/routes/optimize`<br>`/api/v1/optimization/jobs/{job_id}` | `POST`<br>`GET` |
| **RL-28** | Route Details | `/routes/:routeId` | `/api/v1/routes` | `GET` |

---

## 8. Risk Intelligence (RL-29 to RL-30)

| Screen ID | Screen Name | Route | Backend API Endpoint | HTTP Method |
|---|---|---|---|---|
| **RL-29** | Risk Intelligence Dashboard | `/risks` | `/api/v1/risks`<br>`/api/v1/risks/recalculate` | `GET`<br>`POST` |
| **RL-30** | Risk & Alert Details | `/risks/:riskId` | `/api/v1/alerts`<br>`/api/v1/risks` | `GET` |

---

## 9. Disruption Simulation Center (RL-31 to RL-34)

| Screen ID | Screen Name | Route | Backend API Endpoint | HTTP Method |
|---|---|---|---|---|
| **RL-31** | Simulation Center | `/simulations` | `/api/v1/simulations/{id}` | `GET` |
| **RL-32** | Create Simulation | `/simulations/create` | `/api/v1/simulations` | `POST` |
| **RL-33** | Simulation Workspace | `/simulations/:simulationId` | `/api/v1/simulations/{id}/run` | `POST` |
| **RL-34** | Simulation Results | `/simulations/:simulationId/results` | `/api/v1/simulations/{id}/results` | `GET` |

---

## 10. AI Recommendations & Directives (RL-35 to RL-36)

| Screen ID | Screen Name | Route | Backend API Endpoint | HTTP Method |
|---|---|---|---|---|
| **RL-35** | AI Recommendations Center | `/recommendations` | `/api/v1/simulations/{id}/results` | `GET` |
| **RL-36** | Recommendation Details & Approval | `/recommendations/:recommendationId` | `/api/v1/alerts/{id}` | `PATCH` |

---

## 11. Administration, Security & Account (RL-37 to RL-42)

| Screen ID | Screen Name | Route | Backend API Endpoint | HTTP Method |
|---|---|---|---|---|
| **RL-37** | User Management | `/admin/users` | `/api/v1/users` | `GET` / `POST` / `PATCH` |
| **RL-38** | Roles & Permissions | `/admin/roles` | `/api/v1/users` | `GET` |
| **RL-39** | Audit Trail & Activity Monitoring | `/admin/audit` | `/api/v1/health` | `GET` |
| **RL-40** | System Settings | `/admin/settings` | `/api/v1/health` | `GET` |
| **RL-41** | My Profile | `/profile` | `/api/v1/auth/me` | `GET` |
| **RL-42** | Notification Center | `/notifications` | `/api/v1/alerts` | `GET` |
