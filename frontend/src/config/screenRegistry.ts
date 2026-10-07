export interface ScreenMetadata {
  id: string;
  num: number;
  name: string;
  route: string;
  module: string;
  accessLevel: string;
  parent: string | null;
  breadcrumb: string[];
  related: string[];
  folder: string;
}

export const SCREEN_REGISTRY: ScreenMetadata[] = [
  {
    "id": "RL-01",
    "num": 1,
    "name": "Secure Gateway // Login",
    "route": "/login",
    "module": "Auth",
    "accessLevel": "UNAUTHENTICATED",
    "parent": null,
    "breadcrumb": [
      "Authentication",
      "Secure Gateway"
    ],
    "related": [
      "RL-02",
      "RL-04",
      "RL-05"
    ],
    "folder": "rl_01_rakshaklogix_defence_logistics_login"
  },
  {
    "id": "RL-02",
    "num": 2,
    "name": "Password Recovery // Supply Node",
    "route": "/forgot-password",
    "module": "Auth",
    "accessLevel": "UNAUTHENTICATED",
    "parent": "RL-01",
    "breadcrumb": [
      "Authentication",
      "Password Recovery"
    ],
    "related": [
      "RL-01",
      "RL-03"
    ],
    "folder": "rl_02_rakshaklogix_defence_logistics_password_recovery"
  },
  {
    "id": "RL-03",
    "num": 3,
    "name": "Reset Password // Cryptographic Key",
    "route": "/reset-password",
    "module": "Auth",
    "accessLevel": "UNAUTHENTICATED",
    "parent": "RL-02",
    "breadcrumb": [
      "Authentication",
      "Reset Password"
    ],
    "related": [
      "RL-01",
      "RL-04"
    ],
    "folder": "rl_03_rakshaklogix_defence_logistics_reset_password"
  },
  {
    "id": "RL-04",
    "num": 4,
    "name": "Role & Access Selection",
    "route": "/access",
    "module": "Auth",
    "accessLevel": "RESTRICTED",
    "parent": "RL-01",
    "breadcrumb": [
      "Authentication",
      "Role Clearance"
    ],
    "related": [
      "RL-01",
      "RL-05"
    ],
    "folder": "rl_04_rakshaklogix_defence_logistics_role_access_selection"
  },
  {
    "id": "RL-05",
    "num": 5,
    "name": "Command Dashboard",
    "route": "/dashboard",
    "module": "Command",
    "accessLevel": "SEC-LVL 4",
    "parent": null,
    "breadcrumb": [
      "Command",
      "Dashboard Overview"
    ],
    "related": [
      "RL-06",
      "RL-07",
      "RL-08",
      "RL-11",
      "RL-18",
      "RL-22",
      "RL-24"
    ],
    "folder": "rl_05_rakshaklogix_command_dashboard"
  },
  {
    "id": "RL-06",
    "num": 6,
    "name": "GIS Command Center",
    "route": "/gis-command-center",
    "module": "Command",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-05",
    "breadcrumb": [
      "Command",
      "GIS Geospatial Telemetry"
    ],
    "related": [
      "RL-05",
      "RL-08",
      "RL-24",
      "RL-26"
    ],
    "folder": "rl_06_rakshaklogix_gis_command_center"
  },
  {
    "id": "RL-07",
    "num": 7,
    "name": "Alerts & Risk Center",
    "route": "/alerts",
    "module": "Command",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-05",
    "breadcrumb": [
      "Command",
      "Alerts & Risk Center"
    ],
    "related": [
      "RL-29",
      "RL-30",
      "RL-14"
    ],
    "folder": "rl_07_rakshaklogix_alerts_risk_center"
  },
  {
    "id": "RL-08",
    "num": 8,
    "name": "Locations Overview",
    "route": "/locations",
    "module": "Locations",
    "accessLevel": "SEC-LVL 3",
    "parent": "RL-05",
    "breadcrumb": [
      "Locations",
      "Base Depots & Outposts"
    ],
    "related": [
      "RL-09",
      "RL-10",
      "RL-11"
    ],
    "folder": "rl_08_rakshaklogix_locations_overview"
  },
  {
    "id": "RL-09",
    "num": 9,
    "name": "Location Details // Forward Post Alpha",
    "route": "/locations/forward-post-alpha",
    "module": "Locations",
    "accessLevel": "SEC-LVL 3",
    "parent": "RL-08",
    "breadcrumb": [
      "Locations",
      "Forward Post Alpha Dossier"
    ],
    "related": [
      "RL-10",
      "RL-11",
      "RL-14",
      "RL-24",
      "RL-26"
    ],
    "folder": "rl_09_rakshaklogix_location_details"
  },
  {
    "id": "RL-10",
    "num": 10,
    "name": "Add / Edit Location Specification",
    "route": "/locations/new",
    "module": "Locations",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-08",
    "breadcrumb": [
      "Locations",
      "Create / Modify Post"
    ],
    "related": [
      "RL-08",
      "RL-09"
    ],
    "folder": "rl_10_rakshaklogix_add_edit_location"
  },
  {
    "id": "RL-11",
    "num": 11,
    "name": "Inventory Overview",
    "route": "/inventory",
    "module": "Inventory",
    "accessLevel": "SEC-LVL 3",
    "parent": "RL-05",
    "breadcrumb": [
      "Inventory",
      "Stockpile & Depot Control"
    ],
    "related": [
      "RL-12",
      "RL-13",
      "RL-14"
    ],
    "folder": "rl_11_rakshaklogix_inventory_overview"
  },
  {
    "id": "RL-12",
    "num": 12,
    "name": "Inventory Details // POL Arctic Diesel",
    "route": "/inventory/arctic-diesel",
    "module": "Inventory",
    "accessLevel": "SEC-LVL 3",
    "parent": "RL-11",
    "breadcrumb": [
      "Inventory",
      "POL-DSL-ART-01 Details"
    ],
    "related": [
      "RL-13",
      "RL-14",
      "RL-20"
    ],
    "folder": "rl_12_rakshaklogix_inventory_details"
  },
  {
    "id": "RL-13",
    "num": 13,
    "name": "Inventory Transactions Ledger",
    "route": "/inventory/transactions",
    "module": "Inventory",
    "accessLevel": "SEC-LVL 3",
    "parent": "RL-11",
    "breadcrumb": [
      "Inventory",
      "Ledger & Material Movements"
    ],
    "related": [
      "RL-11",
      "RL-12",
      "RL-14",
      "RL-24"
    ],
    "folder": "rl_13_rakshaklogix_inventory_transactions"
  },
  {
    "id": "RL-14",
    "num": 14,
    "name": "Inventory Risk & Replenishment",
    "route": "/inventory/risk",
    "module": "Inventory",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-11",
    "breadcrumb": [
      "Inventory",
      "Risk & Replenishment Engine"
    ],
    "related": [
      "RL-09",
      "RL-18",
      "RL-24",
      "RL-35"
    ],
    "folder": "rl_14_rakshaklogix_inventory_risk_replenishment"
  },
  {
    "id": "RL-15",
    "num": 15,
    "name": "Consumption History Analytics",
    "route": "/consumption",
    "module": "Consumption & Data",
    "accessLevel": "SEC-LVL 3",
    "parent": "RL-05",
    "breadcrumb": [
      "Consumption",
      "Burn Rate Telemetry"
    ],
    "related": [
      "RL-16",
      "RL-17",
      "RL-18"
    ],
    "folder": "rl_15_rakshaklogix_consumption_history"
  },
  {
    "id": "RL-16",
    "num": 16,
    "name": "Import Consumption Data",
    "route": "/consumption/import",
    "module": "Consumption & Data",
    "accessLevel": "SEC-LVL 3",
    "parent": "RL-15",
    "breadcrumb": [
      "Consumption",
      "Batch Data Ingestion"
    ],
    "related": [
      "RL-15",
      "RL-17"
    ],
    "folder": "rl_16_rakshaklogix_import_consumption_data"
  },
  {
    "id": "RL-17",
    "num": 17,
    "name": "Data Quality Center",
    "route": "/data-quality",
    "module": "Consumption & Data",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-15",
    "breadcrumb": [
      "Consumption",
      "Data Integrity & Verification"
    ],
    "related": [
      "RL-15",
      "RL-16",
      "RL-21"
    ],
    "folder": "rl_17_rakshaklogix_data_quality_center"
  },
  {
    "id": "RL-18",
    "num": 18,
    "name": "Demand Forecasting Dashboard",
    "route": "/forecasting",
    "module": "Forecasting",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-05",
    "breadcrumb": [
      "Forecasting",
      "Predictive Demand Intelligence"
    ],
    "related": [
      "RL-19",
      "RL-20",
      "RL-21",
      "RL-14"
    ],
    "folder": "rl_18_rakshaklogix_demand_forecasting_dashboard"
  },
  {
    "id": "RL-19",
    "num": 19,
    "name": "Generate Forecast Workspace",
    "route": "/forecasting/generate",
    "module": "Forecasting",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-18",
    "breadcrumb": [
      "Forecasting",
      "Run Demand Model"
    ],
    "related": [
      "RL-18",
      "RL-20"
    ],
    "folder": "rl_19_rakshaklogix_generate_forecast"
  },
  {
    "id": "RL-20",
    "num": 20,
    "name": "Forecast Details // FCT-2026-X1",
    "route": "/forecasting/FCT-2026-X1",
    "module": "Forecasting",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-18",
    "breadcrumb": [
      "Forecasting",
      "Forecast FCT-2026-X1"
    ],
    "related": [
      "RL-14",
      "RL-24",
      "RL-31",
      "RL-35"
    ],
    "folder": "rl_20_rakshaklogix_forecast_details"
  },
  {
    "id": "RL-21",
    "num": 21,
    "name": "ML Model Performance & Governance",
    "route": "/model-performance",
    "module": "Forecasting",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-18",
    "breadcrumb": [
      "Forecasting",
      "Model Metrics & Validation"
    ],
    "related": [
      "RL-18",
      "RL-20"
    ],
    "folder": "rl_21_rakshaklogix_ml_model_performance"
  },
  {
    "id": "RL-22",
    "num": 22,
    "name": "Fleet Overview",
    "route": "/fleet",
    "module": "Transport",
    "accessLevel": "SEC-LVL 3",
    "parent": "RL-05",
    "breadcrumb": [
      "Transport",
      "Military Fleet Telemetry"
    ],
    "related": [
      "RL-23",
      "RL-24",
      "RL-26"
    ],
    "folder": "rl_22_rakshaklogix_fleet_overview"
  },
  {
    "id": "RL-23",
    "num": 23,
    "name": "Vehicle Details // VH-0087",
    "route": "/fleet/VH-0087",
    "module": "Transport",
    "accessLevel": "SEC-LVL 3",
    "parent": "RL-22",
    "breadcrumb": [
      "Transport",
      "Vehicle Dossier VH-0087"
    ],
    "related": [
      "RL-24",
      "RL-25",
      "RL-28"
    ],
    "folder": "rl_23_rakshaklogix_vehicle_details"
  },
  {
    "id": "RL-24",
    "num": 24,
    "name": "Shipment Management",
    "route": "/shipments",
    "module": "Transport",
    "accessLevel": "SEC-LVL 3",
    "parent": "RL-05",
    "breadcrumb": [
      "Transport",
      "Freight & Airhead Dispatch"
    ],
    "related": [
      "RL-25",
      "RL-22",
      "RL-26"
    ],
    "folder": "rl_24_rakshaklogix_shipment_management"
  },
  {
    "id": "RL-25",
    "num": 25,
    "name": "Shipment Details & Planning // SHP-2048",
    "route": "/shipments/SHP-2048",
    "module": "Transport",
    "accessLevel": "SEC-LVL 3",
    "parent": "RL-24",
    "breadcrumb": [
      "Transport",
      "Manifest SHP-2048"
    ],
    "related": [
      "RL-23",
      "RL-27",
      "RL-28",
      "RL-09"
    ],
    "folder": "rl_25_rakshaklogix_shipment_details_planning"
  },
  {
    "id": "RL-26",
    "num": 26,
    "name": "Route Intelligence",
    "route": "/routes",
    "module": "Routes",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-05",
    "breadcrumb": [
      "Routes",
      "Corridor Network & Recon"
    ],
    "related": [
      "RL-27",
      "RL-28",
      "RL-24"
    ],
    "folder": "rl_26_rakshaklogix_route_intelligence"
  },
  {
    "id": "RL-27",
    "num": 27,
    "name": "Route Optimization Workspace",
    "route": "/routes/optimize",
    "module": "Routes",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-26",
    "breadcrumb": [
      "Routes",
      "Optimization Engine"
    ],
    "related": [
      "RL-25",
      "RL-28",
      "RL-31"
    ],
    "folder": "rl_27_rakshaklogix_route_optimization_workspace"
  },
  {
    "id": "RL-28",
    "num": 28,
    "name": "Route Details // Corridor RTE-018",
    "route": "/routes/RTE-018",
    "module": "Routes",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-26",
    "breadcrumb": [
      "Routes",
      "Corridor RTE-018 Dossier"
    ],
    "related": [
      "RL-25",
      "RL-27",
      "RL-29"
    ],
    "folder": "rl_28_rakshaklogix_route_details"
  },
  {
    "id": "RL-29",
    "num": 29,
    "name": "Risk Intelligence Dashboard",
    "route": "/risks",
    "module": "Risk",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-05",
    "breadcrumb": [
      "Risk",
      "Threat Matrix & Weather Impacts"
    ],
    "related": [
      "RL-30",
      "RL-07",
      "RL-31"
    ],
    "folder": "rl_29_rakshaklogix_risk_intelligence_dashboard"
  },
  {
    "id": "RL-30",
    "num": 30,
    "name": "Risk / Alert Details // RISK-1042",
    "route": "/risks/RISK-1042",
    "module": "Risk",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-29",
    "breadcrumb": [
      "Risk",
      "Investigation RISK-1042"
    ],
    "related": [
      "RL-09",
      "RL-14",
      "RL-31",
      "RL-35"
    ],
    "folder": "rl_30_rakshaklogix_risk_alert_details"
  },
  {
    "id": "RL-31",
    "num": 31,
    "name": "Simulation Center",
    "route": "/simulations",
    "module": "Simulation",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-05",
    "breadcrumb": [
      "Simulation",
      "War-Game & Disruption Scenarios"
    ],
    "related": [
      "RL-32",
      "RL-33",
      "RL-34"
    ],
    "folder": "rl_31_rakshaklogix_simulation_center"
  },
  {
    "id": "RL-32",
    "num": 32,
    "name": "Create Simulation Scenario",
    "route": "/simulations/create",
    "module": "Simulation",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-31",
    "breadcrumb": [
      "Simulation",
      "Configure New Scenario"
    ],
    "related": [
      "RL-31",
      "RL-33"
    ],
    "folder": "rl_32_rakshaklogix_create_simulation"
  },
  {
    "id": "RL-33",
    "num": 33,
    "name": "Simulation Workspace // SIM-0084",
    "route": "/simulations/SIM-0084",
    "module": "Simulation",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-31",
    "breadcrumb": [
      "Simulation",
      "Workspace SIM-0084"
    ],
    "related": [
      "RL-34",
      "RL-31"
    ],
    "folder": "rl_33_rakshaklogix_simulation_workspace"
  },
  {
    "id": "RL-34",
    "num": 34,
    "name": "Simulation Results // SIM-0084",
    "route": "/simulations/SIM-0084/results",
    "module": "Simulation",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-33",
    "breadcrumb": [
      "Simulation",
      "Stress Test Results"
    ],
    "related": [
      "RL-35",
      "RL-36",
      "RL-14"
    ],
    "folder": "rl_34_rakshaklogix_simulation_results"
  },
  {
    "id": "RL-35",
    "num": 35,
    "name": "AI Recommendations Center",
    "route": "/recommendations",
    "module": "Recommendations",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-05",
    "breadcrumb": [
      "Recommendations",
      "Automated Mitigation Directives"
    ],
    "related": [
      "RL-36",
      "RL-14",
      "RL-34"
    ],
    "folder": "rl_35_rakshaklogix_ai_recommendations_center"
  },
  {
    "id": "RL-36",
    "num": 36,
    "name": "Recommendation Details & Approval // REC-2048",
    "route": "/recommendations/REC-2048",
    "module": "Recommendations",
    "accessLevel": "SEC-LVL 4",
    "parent": "RL-35",
    "breadcrumb": [
      "Recommendations",
      "Directive REC-2048"
    ],
    "related": [
      "RL-14",
      "RL-25",
      "RL-39",
      "RL-42"
    ],
    "folder": "rl_36_rakshaklogix_recommendation_details_approval"
  },
  {
    "id": "RL-37",
    "num": 37,
    "name": "User Management",
    "route": "/admin/users",
    "module": "Administration",
    "accessLevel": "SEC-LVL 5",
    "parent": "RL-05",
    "breadcrumb": [
      "Administration",
      "Officer Personnel Directory"
    ],
    "related": [
      "RL-38",
      "RL-39"
    ],
    "folder": "rl_37_rakshaklogix_user_management"
  },
  {
    "id": "RL-38",
    "num": 38,
    "name": "Roles & Permissions Governance",
    "route": "/admin/roles",
    "module": "Administration",
    "accessLevel": "SEC-LVL 5",
    "parent": "RL-37",
    "breadcrumb": [
      "Administration",
      "Access Control Lists"
    ],
    "related": [
      "RL-37",
      "RL-39"
    ],
    "folder": "rl_38_rakshaklogix_roles_permissions"
  },
  {
    "id": "RL-39",
    "num": 39,
    "name": "Audit Trail & Immutable Activity Log",
    "route": "/admin/audit",
    "module": "Administration",
    "accessLevel": "SEC-LVL 5",
    "parent": "RL-05",
    "breadcrumb": [
      "Administration",
      "Cryptographic Audit Ledger"
    ],
    "related": [
      "RL-37",
      "RL-38",
      "RL-40"
    ],
    "folder": "rl_39_rakshaklogix_audit_trail_activity_monitoring"
  },
  {
    "id": "RL-40",
    "num": 40,
    "name": "System Settings & Platform Configuration",
    "route": "/admin/settings",
    "module": "Administration",
    "accessLevel": "SEC-LVL 5",
    "parent": "RL-05",
    "breadcrumb": [
      "Administration",
      "Platform & Node Parameters"
    ],
    "related": [
      "RL-37",
      "RL-39"
    ],
    "folder": "rl_40_rakshaklogix_system_settings_platform_configuration"
  },
  {
    "id": "RL-41",
    "num": 41,
    "name": "My Profile & Account Management",
    "route": "/profile",
    "module": "Account",
    "accessLevel": "PERSONAL",
    "parent": "RL-05",
    "breadcrumb": [
      "Account",
      "Officer Profile"
    ],
    "related": [
      "RL-42",
      "RL-05"
    ],
    "folder": "rl_41_rakshaklogix_my_profile_account_management"
  },
  {
    "id": "RL-42",
    "num": 42,
    "name": "Notification Center",
    "route": "/notifications",
    "module": "Account",
    "accessLevel": "PERSONAL",
    "parent": "RL-05",
    "breadcrumb": [
      "Account",
      "Tactical Notification Center"
    ],
    "related": [
      "RL-07",
      "RL-30",
      "RL-36"
    ],
    "folder": "rl_42_rakshaklogix_notification_center"
  }
];

export const SCREEN_MAP = new Map<string, ScreenMetadata>(
  SCREEN_REGISTRY.map(s => [s.id, s])
);

export const ROUTE_MAP = new Map<string, ScreenMetadata>(
  SCREEN_REGISTRY.map(s => [s.route, s])
);
