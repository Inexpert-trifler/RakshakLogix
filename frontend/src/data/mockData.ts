export interface LocationEntity {
  id: string;
  code: string;
  name: string;
  sector: string;
  type: string;
  elevation: string;
  coordinates: string;
  status: 'OPERATIONAL' | 'VULNERABLE' | 'CRITICAL' | 'MAINTENANCE';
  currentStockDays: number;
  fuelReserve: number;
  fuelCapacity: number;
  commander: string;
}

export interface VehicleEntity {
  id: string;
  registration: string;
  model: string;
  payloadCapacity: string;
  fuelLevel: number;
  driver: string;
  unit: string;
  status: 'DISPATCH_TRANSIT' | 'STANDBY_DEPOT' | 'MAINTENANCE' | 'OFFLINE';
  assignedShipmentId?: string;
  currentLocation: string;
}

export interface ShipmentEntity {
  id: string;
  title: string;
  item: string;
  quantity: string;
  origin: string;
  destination: string;
  destinationId: string;
  vehicleId: string;
  routeId: string;
  priority: 'CRITICAL' | 'HIGH' | 'ROUTINE';
  status: 'IN_TRANSIT' | 'STAGED' | 'DISPATCHED' | 'DELIVERED';
  eta: string;
  dispatchedAt: string;
}

export interface RouteEntity {
  id: string;
  name: string;
  distance: string;
  estimatedDuration: string;
  terrainGrade: string;
  status: 'ACTIVE' | 'CONSTRAINED' | 'BLOCKED';
  weatherRisk: 'SEVERE' | 'MODERATE' | 'LOW';
  elevationPeak: string;
}

export interface RiskEntity {
  id: string;
  title: string;
  locationId: string;
  locationName: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  stockoutProbability: number;
  affectedItem: string;
  timeToDepletion: string;
  recommendationId: string;
  status: 'ACTIVE' | 'MITIGATING' | 'RESOLVED';
}

export interface SimulationEntity {
  id: string;
  title: string;
  scenarioType: string;
  scope: string;
  duration: string;
  status: 'COMPLETED' | 'RUNNING' | 'DRAFT';
  projectedStockoutRisk: number;
  projectedDeficit: string;
  recommendedAction: string;
  recommendationId: string;
}

export interface RecommendationEntity {
  id: string;
  title: string;
  locationId: string;
  locationName: string;
  actionSummary: string;
  requiredVolume: string;
  priority: 'CRITICAL' | 'HIGH' | 'ROUTINE';
  confidenceScore: number;
  riskReduction: string;
  status: 'PENDING_APPROVAL' | 'APPROVED' | 'REJECTED' | 'MODIFIED';
  approvedBy?: string;
  approvedAt?: string;
}

export interface NotificationEntity {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'ALERT' | 'INFO' | 'SUCCESS';
  targetRoute: string;
}

export interface AuditEventEntity {
  id: string;
  timestamp: string;
  officer: string;
  officerId: string;
  role: string;
  action: string;
  entity: string;
  entityId: string;
  hash: string;
  status: 'VERIFIED' | 'FLAGGED';
}

export const MOCK_DATA = {
  locations: [
    {
      id: 'forward-post-alpha',
      code: 'LOC-FPA-01',
      name: 'Forward Post Alpha',
      sector: 'Sector IV-B // Leh-Ladakh',
      type: 'Forward Operating Base (FOB)',
      elevation: '4,200m ASL',
      coordinates: '34.2268° N, 77.5619° E',
      status: 'CRITICAL',
      currentStockDays: 2.1,
      fuelReserve: 3200,
      fuelCapacity: 12000,
      commander: 'Maj. R. Vardhan (IC-77402M)',
    },
    {
      id: 'depot-leh',
      code: 'DEPOT-LEH-HQ',
      name: 'Central Supply Depot Leh',
      sector: 'Sector IV HQ Enclave',
      type: 'Command Supply Depot',
      elevation: '3,524m ASL',
      coordinates: '34.1526° N, 77.5771° E',
      status: 'OPERATIONAL',
      currentStockDays: 45,
      fuelReserve: 280000,
      fuelCapacity: 500000,
      commander: 'Lt. Col. V. Joshi (IC-70198M)',
    },
    {
      id: 'post-bravo',
      code: 'LOC-FPB-02',
      name: 'Forward Post Bravo',
      sector: 'Sector IV-C // Shyok Corridor',
      type: 'High Altitude Outpost',
      elevation: '3,950m ASL',
      coordinates: '34.4210° N, 77.9214° E',
      status: 'OPERATIONAL',
      currentStockDays: 14.5,
      fuelReserve: 8400,
      fuelCapacity: 15000,
      commander: 'Capt. D. Sharma (IC-81204K)',
    },
  ] as LocationEntity[],

  vehicles: [
    {
      id: 'VH-0087',
      registration: 'BA-2024-8742',
      model: 'Ashok Leyland Stallion 4x4 Heavy Logistics',
      payloadCapacity: '6.5 MT',
      fuelLevel: 88,
      driver: 'Havildar R. Singh (14 Corps Reg.)',
      unit: '342 Supply Coy ASC',
      status: 'DISPATCH_TRANSIT',
      assignedShipmentId: 'SHP-2048',
      currentLocation: 'Corridor RTE-018 (MP 42.4)',
    },
    {
      id: 'VH-0104',
      registration: 'BA-2023-1104',
      model: 'Tata LPTA 715 4x4 Light Tactical Transport',
      payloadCapacity: '2.5 MT',
      fuelLevel: 94,
      driver: 'Naik S. Yadav (14 Corps Reg.)',
      unit: '342 Supply Coy ASC',
      status: 'STANDBY_DEPOT',
      currentLocation: 'Central Supply Depot Leh',
    },
    {
      id: 'VH-0042',
      registration: 'BA-2022-0042',
      model: 'BEML Tatra T815 8x8 Heavy Transport',
      payloadCapacity: '12.0 MT',
      fuelLevel: 72,
      driver: 'Havildar P. Nair',
      unit: '501 Army Base Workshop',
      status: 'MAINTENANCE',
      currentLocation: 'Workshop Bay 3 Leh',
    },
  ] as VehicleEntity[],

  shipments: [
    {
      id: 'SHP-2048',
      title: 'Priority Arctic Diesel Forward Staging Requisition',
      item: 'POL-DSL-ART-01 (Arctic Grade HSD)',
      quantity: '2,500 L',
      origin: 'Central Supply Depot Leh',
      destination: 'Forward Post Alpha',
      destinationId: 'forward-post-alpha',
      vehicleId: 'VH-0087',
      routeId: 'RTE-018',
      priority: 'CRITICAL',
      status: 'IN_TRANSIT',
      eta: '4.2 Hours (18:45 IST)',
      dispatchedAt: '05 Oct 2026 • 14:15 IST',
    },
    {
      id: 'SHP-2049',
      title: 'Cold Weather Combat Rations & Medical Stores',
      item: 'RATION-PACK-WINTER / MED-CW-02',
      quantity: '1.8 MT',
      origin: 'Central Supply Depot Leh',
      destination: 'Forward Post Bravo',
      destinationId: 'post-bravo',
      vehicleId: 'VH-0104',
      routeId: 'RTE-022',
      priority: 'ROUTINE',
      status: 'STAGED',
      eta: '8.0 Hours (Tomorrow 08:00 IST)',
      dispatchedAt: 'Pending Convoy Clearance',
    },
  ] as ShipmentEntity[],

  routes: [
    {
      id: 'RTE-018',
      name: 'Highway NH-1D Corridor via Chang La Pass',
      distance: '142.4 km',
      estimatedDuration: '5.5 Hours',
      terrainGrade: 'Grade-C Mountainous / High Gradient',
      status: 'CONSTRAINED',
      weatherRisk: 'SEVERE',
      elevationPeak: '5,360m (Chang La Crest)',
    },
    {
      id: 'RTE-022',
      name: 'Southern Valley Bypass via Tanglang La',
      distance: '186.2 km',
      estimatedDuration: '6.8 Hours',
      terrainGrade: 'Grade-B Paved Highway',
      status: 'ACTIVE',
      weatherRisk: 'MODERATE',
      elevationPeak: '5,328m',
    },
  ] as RouteEntity[],

  risks: [
    {
      id: 'RISK-1042',
      title: 'Forward Post Alpha Arctic Fuel Stockout Vulnerability',
      locationId: 'forward-post-alpha',
      locationName: 'Forward Post Alpha',
      severity: 'CRITICAL',
      stockoutProbability: 74,
      affectedItem: 'POL-DSL-ART-01 (Arctic Grade Diesel)',
      timeToDepletion: '48 Hours (at current sub-zero burn rate)',
      recommendationId: 'REC-2048',
      status: 'ACTIVE',
    },
    {
      id: 'RISK-1043',
      title: 'Chang La Pass Imminent Blizzard & Road Icing Hazard',
      locationId: 'depot-leh',
      locationName: 'Chang La Sector RTE-018',
      severity: 'HIGH',
      stockoutProbability: 42,
      affectedItem: 'Convoy Transit Latency',
      timeToDepletion: 'Estimated +3.5 Hrs Delay',
      recommendationId: 'REC-2048',
      status: 'ACTIVE',
    },
  ] as RiskEntity[],

  simulations: [
    {
      id: 'SIM-0084',
      title: 'Winter Closure 72-Hour Blizzard Logistics Stress Test',
      scenarioType: 'Severe Weather Disruption & Supply Disconnection',
      scope: 'Sector IV-B Forward Outposts',
      duration: '72 Hours Forward Horizon',
      status: 'COMPLETED',
      projectedStockoutRisk: 74,
      projectedDeficit: '2,500 L Arctic Grade Diesel',
      recommendedAction: 'Immediate pre-emptive staging of 2,500 L Arctic Diesel via VH-0087 (REC-2048)',
      recommendationId: 'REC-2048',
    },
  ] as SimulationEntity[],

  recommendations: [
    {
      id: 'REC-2048',
      title: 'Arctic Diesel Forward Staging & Pre-emptive Replenishment',
      locationId: 'forward-post-alpha',
      locationName: 'Forward Post Alpha',
      actionSummary: 'Authorize emergency dispatch of 2,500 L Arctic Diesel via Vehicle VH-0087 along Corridor RTE-018 before Chang La weather window closes at 18:00 IST.',
      requiredVolume: '2,500 L',
      priority: 'CRITICAL',
      confidenceScore: 94.2,
      riskReduction: 'Reduces stockout probability from 74% to 12%',
      status: 'PENDING_APPROVAL',
    },
  ] as RecommendationEntity[],

  notifications: [
    {
      id: 'NOTIF-01',
      title: 'Critical Inventory Risk: Forward Post Alpha',
      message: 'Fuel stockout probability reached 74% due to extreme cold snap. Action required (RISK-1042).',
      timestamp: '10 mins ago',
      read: false,
      type: 'ALERT',
      targetRoute: '/risks/RISK-1042',
    },
    {
      id: 'NOTIF-02',
      title: 'Convoy Dispatch Active: SHP-2048',
      message: 'Vehicle VH-0087 departed Central Depot Leh heading to Forward Post Alpha via RTE-018.',
      timestamp: '25 mins ago',
      read: false,
      type: 'INFO',
      targetRoute: '/shipments/SHP-2048',
    },
    {
      id: 'NOTIF-03',
      title: 'AI Directive Pending Authorization: REC-2048',
      message: 'Winter stress simulation SIM-0084 generated replenishment directive REC-2048.',
      timestamp: '42 mins ago',
      read: false,
      type: 'SUCCESS',
      targetRoute: '/recommendations/REC-2048',
    },
  ] as NotificationEntity[],

  auditEvents: [
    {
      id: 'AUD-9941-01',
      timestamp: '05 Oct 2026 • 14:32:18 IST',
      officer: 'Maj. B. Kumar',
      officerId: 'IC-78921K',
      role: 'Logistics Planner',
      action: 'GENERATED_DEMAND_FORECAST',
      entity: 'Forecast FCT-2026-X1',
      entityId: 'FCT-2026-X1',
      hash: 'sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
      status: 'VERIFIED',
    },
    {
      id: 'AUD-9941-02',
      timestamp: '05 Oct 2026 • 14:35:04 IST',
      officer: 'Maj. B. Kumar',
      officerId: 'IC-78921K',
      role: 'Logistics Planner',
      action: 'EXECUTED_SIMULATION',
      entity: 'Winter Stress SIM-0084',
      entityId: 'SIM-0084',
      hash: 'sha256:cb8379ac2098aa165029e3938a51da0bcecfc008b679d440a16472279c723280',
      status: 'VERIFIED',
    },
    {
      id: 'AUD-9941-03',
      timestamp: '05 Oct 2026 • 14:38:40 IST',
      officer: 'Col. S. Deshmukh',
      officerId: 'IC-65412A',
      role: 'Corps Logistics Commander',
      action: 'AUTHORIZED_RECOMMENDATION',
      entity: 'Replenishment Directive REC-2048',
      entityId: 'REC-2048',
      hash: 'sha256:4dff4ea340f0a823f15d3f4f01ab62eae0e5da579ccb851f8db9dfe84c58b2b3',
      status: 'VERIFIED',
    },
  ] as AuditEventEntity[],
};

// 20-Step SIH Master Demonstration Journey
export const DEMO_FLOW_STEPS = [
  { step: 1, id: 'RL-01', route: '/login', title: 'Secure Gateway // Military Login', description: 'Authenticate into HQ Northern Logistics Command' },
  { step: 2, id: 'RL-05', route: '/dashboard', title: 'Command Dashboard', description: 'Review high-level Northern Command operational logistics posture' },
  { step: 3, id: 'RL-08', route: '/locations', title: 'Locations Overview', description: 'Review forward operating bases & supply depots' },
  { step: 4, id: 'RL-09', route: '/locations/forward-post-alpha', title: 'Location Details // Forward Post Alpha', description: 'Inspect Forward Post Alpha inventory, runway & elevation telemetry' },
  { step: 5, id: 'RL-11', route: '/inventory', title: 'Inventory Overview', description: 'Monitor strategic stockpiles across POL, rations & munitions' },
  { step: 6, id: 'RL-18', route: '/forecasting', title: 'Demand Forecasting Dashboard', description: 'View predictive surge indicators for sub-zero operating window' },
  { step: 7, id: 'RL-20', route: '/forecasting/FCT-2026-X1', title: 'Forecast Details // FCT-2026-X1', description: 'Inspect +25% fuel surge model projecting 2,500 L arctic diesel deficit' },
  { step: 8, id: 'RL-14', route: '/inventory/risk', title: 'Inventory Risk & Replenishment', description: 'Observe stockout risk escalating to critical 74% probability' },
  { step: 9, id: 'RL-13', route: '/inventory/transactions', title: 'Inventory Transactions & Requisition', description: 'Check ledger and prepare replenishment dispatch batch' },
  { step: 10, id: 'RL-24', route: '/shipments', title: 'Shipment Management', description: 'Locate urgent dispatch shipment SHP-2048' },
  { step: 11, id: 'RL-25', route: '/shipments/SHP-2048', title: 'Shipment Planning // SHP-2048', description: 'Review cargo manifest: 2,500 L Arctic HSD for Forward Post Alpha' },
  { step: 12, id: 'RL-23', route: '/fleet/VH-0087', title: 'Vehicle Details // VH-0087', description: 'Inspect Ashok Leyland 4x4 Stallion assigned to mission' },
  { step: 13, id: 'RL-26', route: '/routes', title: 'Route Intelligence', description: 'Evaluate primary corridor RTE-018 and mountain passes' },
  { step: 14, id: 'RL-27', route: '/routes/optimize', title: 'Route Optimization Workspace', description: 'Run multi-criteria route optimization considering Chang La blizzard' },
  { step: 15, id: 'RL-28', route: '/routes/RTE-018', title: 'Route Details // Corridor RTE-018', description: 'Lock waypoint telemetry along Chang La corridor' },
  { step: 16, id: 'RL-29', route: '/risks', title: 'Risk Intelligence Dashboard', description: 'Examine threat matrix & weather disruption impact' },
  { step: 17, id: 'RL-30', route: '/risks/RISK-1042', title: 'Risk Investigation // RISK-1042', description: 'Deep-dive into Forward Post Alpha fuel stockout threat' },
  { step: 18, id: 'RL-33', route: '/simulations/SIM-0084', title: 'Simulation Workspace // SIM-0084', description: 'Configure 72-hour winter closure disruption stress test' },
  { step: 19, id: 'RL-34', route: '/simulations/SIM-0084/results', title: 'Simulation Results // SIM-0084', description: 'Review simulation results showing 74% stockout risk mitigated to 12%' },
  { step: 20, id: 'RL-36', route: '/recommendations/REC-2048', title: 'Recommendation Approval // REC-2048', description: 'Authorize AI Directive REC-2048 to seal dispatch and record in Audit Log' },
];
