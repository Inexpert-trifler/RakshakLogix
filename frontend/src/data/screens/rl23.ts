// Screen: RL-23 — Vehicle Details // VH-0087
// Route: /fleet/VH-0087
export const rl23Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto flex-1 p-6 flex flex-col gap-5 max-w-[1720px]">
<!-- 1. VEHICLE HEADER BANNER & ACTION CONTEXT -->
<section class="bg-surface-container-lowest border border-outline-variant rounded-lg p-5 flex flex-col gap-4">
<div class="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
<!-- Left: Vehicle Identity Title & Badges -->
<div class="flex flex-col gap-1.5">
<div class="flex flex-wrap items-center gap-2.5">
<h1 class="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
              VH-0087 — Medium Cargo 4x4
            </h1>
<span class="font-label-sm text-label-sm font-medium text-on-surface-variant">
              (Ashok Leyland Stallion 4x4)
            </span>
<!-- Status Badges -->
<span class="px-2 py-0.5 rounded bg-secondary text-on-secondary font-label-xs text-label-xs font-bold tracking-wider inline-flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-surface-container-lowest animate-pulse"></span>
              ON MISSION
            </span>
<span class="px-2 py-0.5 rounded bg-surface-container text-on-surface border border-outline-variant font-label-xs text-label-xs font-semibold">
              CLASS: MEDIUM CARGO
            </span>
<span class="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container border border-secondary font-label-xs text-label-xs font-bold font-mono">
              IRNSS SECURE TRACKING: NOMINAL
            </span>
</div>
<!-- Subtitle Depot & Node Details -->
<p class="font-body-sm text-body-sm text-on-surface-variant font-mono flex flex-wrap items-center gap-2">
<span><strong class="text-primary font-semibold">Assigned Depot:</strong> DEP-0002 Central Supply Depot</span>
<span class="text-outline">//</span>
<span><strong class="text-primary font-semibold">Registration:</strong> BA-78A-0087</span>
<span class="text-outline">//</span>
<span><strong class="text-primary font-semibold">Operational Node:</strong> Sector IV-B Leh Axis</span>
</p>
</div>
<!-- Right: Operational Actions -->
<div class="flex flex-wrap items-center gap-2">
<button class="h-9 px-3.5 bg-primary hover:bg-surface-tint text-on-primary rounded font-label-md text-label-md font-semibold flex items-center gap-2 transition-all shadow-sm">
<span class="material-symbols-outlined text-[18px]">navigation</span>
<span>View Current Mission (SHP-2048)</span>
</button>
<button class="h-9 px-3 bg-surface-container hover:bg-surface-container-high border border-outline-variant text-primary rounded font-label-md text-label-md font-medium flex items-center gap-1.5 transition-colors">
<span class="material-symbols-outlined text-[18px]">alt_route</span>
<span>Open Route (RTE-018)</span>
</button>
<button class="h-9 px-3 bg-surface-container-low text-outline border border-outline-variant rounded font-label-md text-label-md cursor-not-allowed flex items-center gap-1.5 opacity-60" disabled="">
<span class="material-symbols-outlined text-[16px]">lock</span>
<span>Mark Available</span>
</button>
<button class="h-9 px-3 bg-surface-container hover:bg-surface-container-high border border-outline-variant text-primary rounded font-label-md text-label-md font-medium flex items-center gap-1.5 transition-colors">
<span class="material-symbols-outlined text-[18px]">calendar_month</span>
<span>Schedule Maintenance</span>
</button>
</div>
</div>
<!-- Quick Telemetry Metadata Horizontal Bar -->
<div class="grid grid-cols-2 md:grid-cols-5 gap-3 pt-3 border-t border-outline-variant font-label-sm text-label-sm">
<div class="flex flex-col">
<span class="text-on-surface-variant font-label-xs text-label-xs font-mono">GROSS RATED CAPACITY</span>
<span class="font-bold text-primary font-mono text-[15px]">8.0 MT Max</span>
</div>
<div class="flex flex-col">
<span class="text-on-surface-variant font-label-xs text-label-xs font-mono">CURRENT ALLOCATED PAYLOAD</span>
<span class="font-bold text-secondary font-mono text-[15px]">5.8 MT (72.5% Utilized)</span>
</div>
<div class="flex flex-col">
<span class="text-on-surface-variant font-label-xs text-label-xs font-mono">MULTI-FACTOR READINESS</span>
<span class="font-bold text-primary font-mono text-[15px]">89% Operational</span>
</div>
<div class="flex flex-col">
<span class="text-on-surface-variant font-label-xs text-label-xs font-mono">TOTAL ODOMETER</span>
<span class="font-bold text-primary font-mono text-[15px]">42,850 KM</span>
</div>
<div class="flex flex-col">
<span class="text-on-surface-variant font-label-xs text-label-xs font-mono">ENGINE OPERATING HOURS</span>
<span class="font-bold text-primary font-mono text-[15px]">1,420 Operating Hrs</span>
</div>
</div>
</section>
<!-- 2. OPERATIONAL KPI SUMMARY STRIP (6 compact tactical cards) -->
<section class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
<!-- Card 1: Readiness -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded flex flex-col justify-between">
<div class="flex items-center justify-between text-on-surface-variant mb-1">
<span class="font-label-xs text-label-xs font-mono">OVERALL READINESS</span>
<span class="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
</div>
<div class="flex items-baseline gap-1.5 my-0.5">
<span class="text-headline-lg font-headline-lg font-bold text-primary font-mono">89%</span>
<span class="font-label-xs text-label-xs font-semibold text-secondary">OPERATIONAL</span>
</div>
<p class="font-label-xs text-label-xs text-on-surface-variant font-mono truncate">94% Mech • 92% Cold Kit</p>
</div>
<!-- Card 2: Payload -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded flex flex-col justify-between">
<div class="flex items-center justify-between text-on-surface-variant mb-1">
<span class="font-label-xs text-label-xs font-mono">PAYLOAD UTILIZATION</span>
<span class="material-symbols-outlined text-[16px] text-primary">weight</span>
</div>
<div class="flex items-baseline gap-1.5 my-0.5">
<span class="text-headline-lg font-headline-lg font-bold text-primary font-mono">5.8<span class="text-[14px]">t</span></span>
<span class="font-label-xs text-label-xs text-on-surface-variant font-mono">/ 8.0t (72.5%)</span>
</div>
<p class="font-label-xs text-label-xs text-secondary font-mono truncate">2.2 MT spare capacity</p>
</div>
<!-- Card 3: Location -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded flex flex-col justify-between">
<div class="flex items-center justify-between text-on-surface-variant mb-1">
<span class="font-label-xs text-label-xs font-mono">CURRENT LOCATION</span>
<span class="material-symbols-outlined text-[16px] text-secondary">explore</span>
</div>
<div class="my-0.5">
<span class="font-bold text-primary font-mono text-[14px] block leading-tight">KM 42 / 78</span>
<span class="font-label-xs text-label-xs text-on-surface-variant font-mono">RTE-018 Leh-Kargil Axis</span>
</div>
<p class="font-label-xs text-label-xs text-on-surface-variant font-mono truncate">Speed: 38 km/h</p>
</div>
<!-- Card 4: ETA -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded flex flex-col justify-between">
<div class="flex items-center justify-between text-on-surface-variant mb-1">
<span class="font-label-xs text-label-xs font-mono">ESTIMATED ARRIVAL (ETA)</span>
<span class="material-symbols-outlined text-[16px] text-primary">schedule</span>
</div>
<div class="flex items-baseline gap-1.5 my-0.5">
<span class="text-headline-lg font-headline-lg font-bold text-primary font-mono">14:35</span>
<span class="font-label-xs text-label-xs text-on-surface-variant font-mono">IST</span>
</div>
<p class="font-label-xs text-label-xs text-secondary font-mono truncate">T-minus 33 mins // On-Time</p>
</div>
<!-- Card 5: Fuel & Range -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded flex flex-col justify-between">
<div class="flex items-center justify-between text-on-surface-variant mb-1">
<span class="font-label-xs text-label-xs font-mono">FUEL & COMBAT RANGE</span>
<span class="material-symbols-outlined text-[16px] text-secondary">local_gas_station</span>
</div>
<div class="flex items-baseline gap-1.5 my-0.5">
<span class="text-headline-lg font-headline-lg font-bold text-primary font-mono">68%</span>
<span class="font-label-xs text-label-xs font-mono text-secondary font-semibold">340 KM</span>
</div>
<p class="font-label-xs text-label-xs text-on-surface-variant font-mono truncate">Arctic Fuel Blend Grade 4</p>
</div>
<!-- Card 6: Maintenance Overhaul -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded flex flex-col justify-between">
<div class="flex items-center justify-between text-on-surface-variant mb-1">
<span class="font-label-xs text-label-xs font-mono">NEXT OVERHAUL DUE</span>
<span class="material-symbols-outlined text-[16px] text-outline">engineering</span>
</div>
<div class="flex items-baseline gap-1.5 my-0.5">
<span class="text-headline-lg font-headline-lg font-bold text-primary font-mono">42 <span class="text-[13px]">HRS</span></span>
<span class="font-label-xs text-label-xs px-1 py-0.2 bg-surface-container text-on-surface rounded font-mono">T-42H</span>
</div>
<p class="font-label-xs text-label-xs text-on-surface-variant font-mono truncate">Est. 18 Oct 2026 // Bay 4</p>
</div>
</section>
<!-- 3. MAIN CONTENT TWO-COLUMN GRID (Left ~62%, Right ~38%) -->
<div class="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">
<!-- ================= LEFT / MAIN COLUMN (7 COLUMNS) ================= -->
<div class="xl:col-span-7 flex flex-col gap-5">
<!-- A. CURRENT MISSION DOSSIER (High Priority Card) -->
<article class="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col gap-4">
<div class="flex items-center justify-between pb-3 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[20px]">assignment_turned_in</span>
<h2 class="font-headline-sm text-headline-sm text-primary font-bold">
                Current Mission: Shipment SHP-2048
              </h2>
</div>
<span class="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container border border-secondary font-label-xs text-label-xs font-bold">
              PRIORITY 1: ARCTIC FUEL & SUBSISTENCE
            </span>
</div>
<!-- Mission Path Nodes & Status -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 bg-surface-container-low rounded border border-outline-variant font-mono">
<div class="flex flex-col">
<span class="font-label-xs text-label-xs text-on-surface-variant font-mono">ORIGIN NODE</span>
<span class="font-bold text-primary font-label-md text-label-md">DEP-0002 Central Supply Depot</span>
<span class="font-label-xs text-label-xs text-outline">Dispatched: 11:42 IST</span>
</div>
<div class="flex flex-col items-center justify-center text-center">
<span class="font-label-xs text-label-xs text-secondary font-bold">CONVOY TRANSIT (C-04)</span>
<div class="flex items-center gap-1.5 w-full my-1">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<div class="h-0.5 bg-secondary flex-1"></div>
<span class="material-symbols-outlined text-secondary text-[16px]">local_shipping</span>
<div class="h-0.5 bg-outline-variant flex-1"></div>
<span class="w-2 h-2 rounded-full border border-outline"></span>
</div>
<span class="font-label-xs text-label-xs text-on-surface-variant">58 KM / 78 KM (74.3%)</span>
</div>
<div class="flex flex-col text-right">
<span class="font-label-xs text-label-xs text-on-surface-variant font-mono">DESTINATION NODE</span>
<span class="font-bold text-primary font-label-md text-label-md">LOC-0042 Forward Post Alpha</span>
<span class="font-label-xs text-label-xs text-outline">Elevation: 3,500m MSL</span>
</div>
</div>
<!-- Manifest Breakdown Details -->
<div class="flex flex-col gap-2">
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant font-mono">
<span class="font-bold text-primary">SECURE MANIFEST COMPOSITION</span>
<span>SHA-256 SEAL VERIFIED: 9a88f...bc01</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
<div class="p-2.5 bg-surface-container rounded border border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">oil_barrel</span>
<div class="flex flex-col">
<span class="font-label-sm text-label-sm font-semibold text-primary">Diesel POL Arctic Grade</span>
<span class="font-label-xs text-label-xs text-on-surface-variant font-mono">Class III • Tank Bladder 5,000L</span>
</div>
</div>
<span class="font-mono font-bold text-primary text-label-md">4.2 MT</span>
</div>
<div class="p-2.5 bg-surface-container rounded border border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">restaurant</span>
<div class="flex flex-col">
<span class="font-label-sm text-label-sm font-semibold text-primary">High-Altitude Subsistence Packs</span>
<span class="font-label-xs text-label-xs text-on-surface-variant font-mono">Class I • 1,200 Ration Kits</span>
</div>
</div>
<span class="font-mono font-bold text-primary text-label-md">1.6 MT</span>
</div>
</div>
</div>
<!-- Convoy & Action Triggers -->
<div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-outline-variant">
<div class="flex items-center gap-2 font-label-sm text-label-sm">
<span class="material-symbols-outlined text-outline text-[18px]">group_work</span>
<span class="text-on-surface-variant font-mono">Tactical Formation:</span>
<span class="font-bold text-primary">Sortie Convoy C-04 (Lead Vehicle of 3)</span>
</div>
<div class="flex items-center gap-2 font-label-sm text-label-sm">
<button class="px-2.5 py-1.5 bg-surface-container hover:bg-surface-container-high border border-outline-variant rounded font-semibold text-primary flex items-center gap-1.5 transition-colors">
<span class="material-symbols-outlined text-[16px]">folder_open</span>
<span>Open Shipment Dossier</span>
</button>
<button class="px-2.5 py-1.5 bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant rounded font-semibold text-primary flex items-center gap-1.5 transition-colors">
<span class="material-symbols-outlined text-[16px]">radio</span>
<span>Radio Convoy Lead</span>
</button>
</div>
</div>
</article>
<!-- B. TACTICAL GIS ROUTE TELEMETRY MAP -->
<article class="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col gap-3">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">map</span>
<h2 class="font-headline-sm text-headline-sm text-primary font-bold">
                Route Tracking & GIS Telemetry (RTE-018: Leh > Zojila Axis)
              </h2>
</div>
<div class="flex items-center gap-1 font-label-xs text-label-xs font-mono">
<span class="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-semibold">CADENCE: 2s</span>
<span class="px-1.5 py-0.5 rounded bg-surface-container text-on-surface border border-outline-variant">ZOOM: 1:25K</span>
</div>
</div>
<!-- Cartographic Canvas Representation -->
<div class="relative w-full h-72 bg-[#17251c] rounded-lg overflow-hidden border border-outline flex items-center justify-center select-none">
<!-- Grid Lines Background -->
<svg class="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="tactical-grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#bacbbd" stroke-width="0.5"></path>
</pattern>
</defs>
<rect fill="url(#tactical-grid)" height="100%" width="100%"></rect>
</svg>
<!-- Tactical Elevation Contours & Mountain Pass Passages -->
<svg class="absolute inset-0 w-full h-full" fill="none" viewbox="0 0 800 288" xmlns="http://www.w3.org/2000/svg">
<!-- Contour Lines -->
<path d="M 50 240 Q 150 180 280 200 T 520 170 T 750 120" fill="none" stroke="#3a4c30" stroke-dasharray="4 4" stroke-width="1.2"></path>
<path d="M 20 180 Q 200 130 380 150 T 600 100 T 780 70" fill="none" stroke="#3a4c30" stroke-dasharray="4 4" stroke-width="1.2"></path>
<path d="M 100 270 Q 300 220 450 230 T 720 190" fill="none" stroke="#253526" stroke-width="1"></path>
<!-- Tactical Highway Route Line (RTE-018) -->
<!-- Completed Portion -->
<path d="M 80 210 L 220 185 L 340 140 L 490 125" fill="none" stroke="#7c8f69" stroke-linecap="round" stroke-width="4"></path>
<!-- Remaining Projected Route -->
<path d="M 490 125 L 610 115 L 720 90" fill="none" stroke="#536257" stroke-dasharray="6 4" stroke-linecap="round" stroke-width="3"></path>
<!-- Waypoint 1: Origin Central Depot -->
<circle cx="80" cy="210" fill="#17251c" r="6" stroke="#d5e9be" stroke-width="2.5"></circle>
<text fill="#eff2ea" font-family="monospace" font-size="10" text-anchor="middle" x="80" y="235">DEP-0002 [KM 0]</text>
<!-- Waypoint 2: Bodhkharbu Checkpoint -->
<circle cx="340" cy="140" fill="#3F5135" r="4.5" stroke="#d5e9be" stroke-width="1.5"></circle>
<text fill="#eff2ea" font-family="monospace" font-size="9" text-anchor="middle" x="340" y="162">Bodhkharbu CP</text>
<!-- Waypoint 3: Fotu La Pass Summit -->
<polygon fill="#c49a45" points="610,107 617,120 603,120" stroke="#17251c" stroke-width="1"></polygon>
<text fill="#d5e9be" font-family="monospace" font-size="9" text-anchor="middle" x="610" y="102">Fotu La (4,108m)</text>
<!-- Waypoint 4: Destination Forward Post Alpha -->
<circle cx="720" cy="90" fill="#ba1a1a" r="7" stroke="#ffffff" stroke-width="2"></circle>
<text fill="#eff2ea" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle" x="720" y="78">LOC-0042 [FP Alpha]</text>
<!-- Vehicle Live Ping Marker (KM 42) -->
<g transform="translate(490, 125)">
<circle class="animate-ping" cx="0" cy="0" fill="#516446" fill-opacity="0.3" r="14"></circle>
<circle cx="0" cy="0" fill="#d5e9be" r="8" stroke="#17251c" stroke-width="2"></circle>
<polygon fill="#17251c" points="0,-4 3,3 0,1 -3,3" transform="rotate(-65)"></polygon>
</g>
</svg>
<!-- Floating Telemetry Tooltip over Vehicle Position -->
<div class="absolute top-4 left-6 bg-[#17251c]/90 backdrop-blur-sm border border-[#596B48] p-2.5 rounded shadow-lg text-white font-mono text-[11px] flex flex-col gap-0.5">
<div class="flex items-center gap-1.5 text-secondary-fixed font-bold">
<span class="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
<span>VH-0087: ACTIVE SORTIE</span>
</div>
<div class="text-[#bacbbd] text-[10px]">Speed: 38 km/h • Elev: 3,420m MSL • Bearing: 284° NW</div>
<div class="text-[#e0e4dc] text-[10px]">Coordinate: 34.2981° N, 76.8402° E • ETA: 14:35 IST</div>
</div>
<!-- Weather Indicator Overlay Pill -->
<div class="absolute bottom-3 left-3 bg-[#17251c]/90 border border-outline-variant px-2.5 py-1 rounded text-white font-mono text-label-xs text-label-xs flex items-center gap-2">
<span class="material-symbols-outlined text-[14px] text-surface-tint">ac_unit</span>
<span>-18°C Cold-Wave</span>
<span class="text-outline">|</span>
<span>Surface: Packed Snow (Chains Fitted)</span>
</div>
<!-- Map Layer & Zoom Controls Floating Top Right -->
<div class="absolute top-3 right-3 flex flex-col gap-1">
<button class="w-7 h-7 bg-surface-container-lowest text-primary rounded flex items-center justify-center font-bold hover:bg-surface-container transition-colors shadow">
<span class="material-symbols-outlined text-[16px]">add</span>
</button>
<button class="w-7 h-7 bg-surface-container-lowest text-primary rounded flex items-center justify-center font-bold hover:bg-surface-container transition-colors shadow">
<span class="material-symbols-outlined text-[16px]">remove</span>
</button>
<button class="w-7 h-7 bg-surface-container-lowest text-primary rounded flex items-center justify-center hover:bg-surface-container transition-colors shadow" title="Center View">
<span class="material-symbols-outlined text-[16px]">center_focus_strong</span>
</button>
<button class="w-7 h-7 bg-surface-container-lowest text-primary rounded flex items-center justify-center hover:bg-surface-container transition-colors shadow" title="Toggle Layers">
<span class="material-symbols-outlined text-[16px]">layers</span>
</button>
</div>
</div>
<!-- Bottom Route Status Meta -->
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant font-mono pt-1">
<span>CORRIDOR: NH-1D HIGH-ALTITUDE STRATEGIC HIGHWAY</span>
<span>BRO SNOW PLOW STATUS: CLEAR AT PASS SUMMIT</span>
</div>
</article>
<!-- C. CAPACITY & AXLE LOAD DISTRIBUTION -->
<article class="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col gap-3.5">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">balance</span>
<h2 class="font-headline-sm text-headline-sm text-primary font-bold">
                Capacity & Axle Weight Distribution
              </h2>
</div>
<span class="font-label-xs text-label-xs font-mono text-secondary font-bold">
              BALANCED CONFIGURATION
            </span>
</div>
<!-- Segmented Utilization Bar -->
<div class="flex flex-col gap-1.5">
<div class="flex justify-between font-label-sm text-label-sm font-mono">
<span class="font-semibold text-primary">5.8 MT Allocated / 8.0 MT Gross (72.5% Utilization)</span>
<span class="text-secondary font-bold">2.2 MT Spare Backhaul Margin</span>
</div>
<div class="w-full h-4 bg-surface-container-highest rounded overflow-hidden flex border border-outline-variant">
<!-- POL Diesel Allocated -->
<div class="h-full bg-secondary text-on-secondary text-[10px] font-mono flex items-center justify-center font-bold" style="width: 52.5%;">
                POL: 4.2 MT
              </div>
<!-- Rations Allocated -->
<div class="h-full bg-secondary-fixed-dim text-on-surface text-[10px] font-mono flex items-center justify-center font-bold" style="width: 20%;">
                RATIONS: 1.6 MT
              </div>
<!-- Spare Margin -->
<div class="h-full bg-surface-container-low text-outline text-[10px] font-mono flex items-center justify-center" style="width: 27.5%;">
                AVAILABLE: 2.2 MT
              </div>
</div>
</div>
<!-- Axle Load Indicators -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
<div class="p-3 bg-surface-container rounded border border-outline-variant flex flex-col gap-1">
<div class="flex justify-between font-label-sm text-label-sm font-mono">
<span class="text-on-surface-variant">Front Steering Axle:</span>
<span class="font-bold text-primary">2.4 MT / 3.0 MT Limit</span>
</div>
<div class="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
<div class="h-full bg-secondary" style="width: 80%;"></div>
</div>
<span class="font-label-xs text-label-xs text-outline font-mono">Nominal gradient steering traction</span>
</div>
<div class="p-3 bg-surface-container rounded border border-outline-variant flex flex-col gap-1">
<div class="flex justify-between font-label-sm text-label-sm font-mono">
<span class="text-on-surface-variant">Rear Drive Dual Axle:</span>
<span class="font-bold text-primary">5.4 MT / 6.5 MT Limit</span>
</div>
<div class="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
<div class="h-full bg-secondary" style="width: 83%;"></div>
</div>
<span class="font-label-xs text-label-xs text-outline font-mono">Differential lock disengaged (Nominal)</span>
</div>
</div>
<!-- Technical Compliance Note -->
<div class="bg-surface-container-low p-2.5 rounded border-l-2 border-secondary font-label-xs text-label-xs text-on-surface-variant font-mono">
<strong>OPERATIONAL INSIGHT:</strong> Payload calibrated within extreme cold-weather gradient limits for pass traverse (>3,000m MSL). Return manifest pre-cleared for 1.8 MT salvageable cold-boxes.
          </div>
</article>
<!-- D. RECENT MISSION & SORTIE HISTORY TABLE -->
<article class="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col gap-3">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">history</span>
<h2 class="font-headline-sm text-headline-sm text-primary font-bold">
                Recent Sortie & Movement History (Last 30 Days)
              </h2>
</div>
<span class="font-label-xs text-label-xs font-mono text-on-surface-variant">TOTAL SORTIES: 14</span>
</div>
<div class="overflow-x-auto custom-scroll border border-outline-variant rounded">
<table class="w-full text-left font-label-sm text-label-sm">
<thead class="bg-surface-container-high border-b-2 border-secondary text-primary font-mono text-label-xs uppercase">
<tr>
<th class="py-2 px-3">Sortie ID</th>
<th class="py-2 px-3">Date</th>
<th class="py-2 px-3">Corridor / Route</th>
<th class="py-2 px-3">Cargo Spec</th>
<th class="py-2 px-3 text-right">Payload</th>
<th class="py-2 px-3 text-right">Dist</th>
<th class="py-2 px-3 text-right">Duration</th>
<th class="py-2 px-3 text-center">Status</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant font-mono">
<!-- Row 1 -->
<tr class="hover:bg-surface-container transition-colors">
<td class="py-2.5 px-3 font-bold text-primary">SHP-2031</td>
<td class="py-2.5 px-3 text-on-surface-variant">02 Oct 2026</td>
<td class="py-2.5 px-3 text-on-surface truncate max-w-[150px]">Central Depot → FP Bravo</td>
<td class="py-2.5 px-3 text-on-surface-variant">Class I Subsistence</td>
<td class="py-2.5 px-3 text-right font-bold text-primary">6.2 t</td>
<td class="py-2.5 px-3 text-right text-on-surface-variant">184 km</td>
<td class="py-2.5 px-3 text-right text-on-surface-variant">4h 12m</td>
<td class="py-2.5 px-3 text-center">
<span class="px-2 py-0.5 rounded bg-surface-container text-on-surface border border-outline-variant font-label-xs text-label-xs font-bold">
                      COMPLETED
                    </span>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-surface-container transition-colors">
<td class="py-2.5 px-3 font-bold text-primary">SHP-1994</td>
<td class="py-2.5 px-3 text-on-surface-variant">28 Sep 2026</td>
<td class="py-2.5 px-3 text-on-surface truncate max-w-[150px]">Log Hub North → FP Alpha</td>
<td class="py-2.5 px-3 text-on-surface-variant">Class IX Spares</td>
<td class="py-2.5 px-3 text-right font-bold text-primary">4.8 t</td>
<td class="py-2.5 px-3 text-right text-on-surface-variant">142 km</td>
<td class="py-2.5 px-3 text-right text-on-surface-variant">3h 45m</td>
<td class="py-2.5 px-3 text-center">
<span class="px-2 py-0.5 rounded bg-surface-container text-on-surface border border-outline-variant font-label-xs text-label-xs font-bold">
                      COMPLETED
                    </span>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container transition-colors">
<td class="py-2.5 px-3 font-bold text-primary">SHP-1942</td>
<td class="py-2.5 px-3 text-on-surface-variant">22 Sep 2026</td>
<td class="py-2.5 px-3 text-on-surface truncate max-w-[150px]">Central Depot → SP Delta</td>
<td class="py-2.5 px-3 text-on-surface-variant">Medical Plasma Cold-Chain</td>
<td class="py-2.5 px-3 text-right font-bold text-primary">3.5 t</td>
<td class="py-2.5 px-3 text-right text-on-surface-variant">98 km</td>
<td class="py-2.5 px-3 text-right text-on-surface-variant">2h 15m</td>
<td class="py-2.5 px-3 text-center">
<span class="px-2 py-0.5 rounded bg-surface-container text-on-surface border border-outline-variant font-label-xs text-label-xs font-bold">
                      COMPLETED
                    </span>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-surface-container transition-colors">
<td class="py-2.5 px-3 font-bold text-primary">SHP-1890</td>
<td class="py-2.5 px-3 text-on-surface-variant">15 Sep 2026</td>
<td class="py-2.5 px-3 text-on-surface truncate max-w-[150px]">Central Depot → OP Charlie</td>
<td class="py-2.5 px-3 text-on-surface-variant">Fuel Bowzer Tender</td>
<td class="py-2.5 px-3 text-right font-bold text-primary">7.4 t</td>
<td class="py-2.5 px-3 text-right text-on-surface-variant">210 km</td>
<td class="py-2.5 px-3 text-right text-on-surface-variant">5h 30m</td>
<td class="py-2.5 px-3 text-center">
<span class="px-2 py-0.5 rounded bg-surface-container text-on-surface border border-outline-variant font-label-xs text-label-xs font-bold">
                      COMPLETED
                    </span>
</td>
</tr>
</tbody>
</table>
</div>
</article>
</div>
<!-- ================= RIGHT COLUMN (5 COLUMNS) ================= -->
<div class="xl:col-span-5 flex flex-col gap-5">
<!-- A. MULTI-FACTOR READINESS MATRIX -->
<article class="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col gap-3.5">
<div class="flex items-center justify-between pb-2 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">speed</span>
<h2 class="font-headline-sm text-headline-sm text-primary font-bold">
                Readiness Matrix
              </h2>
</div>
<div class="flex items-center gap-1.5">
<span class="font-headline-sm text-headline-sm font-bold text-secondary font-mono">89%</span>
<span class="font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold font-mono">OVERALL</span>
</div>
</div>
<!-- Readiness Diagnostic Items -->
<div class="flex flex-col gap-3 font-label-sm text-label-sm">
<!-- Item 1 -->
<div class="flex flex-col gap-1">
<div class="flex items-center justify-between">
<span class="font-semibold text-primary">Engine & Powertrain</span>
<span class="font-mono text-secondary font-bold">94% HEALTHY</span>
</div>
<div class="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-secondary" style="width: 94%;"></div>
</div>
<span class="font-label-xs text-label-xs text-outline font-mono">Sub-zero oil block heater verified active</span>
</div>
<!-- Item 2 -->
<div class="flex flex-col gap-1">
<div class="flex items-center justify-between">
<span class="font-semibold text-primary">Tires & Mobility Systems</span>
<span class="font-mono text-primary font-bold">86% NOMINAL</span>
</div>
<div class="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-secondary" style="width: 86%;"></div>
</div>
<span class="font-label-xs text-label-xs text-outline font-mono">Studded radial snow chains mounted & torqued</span>
</div>
<!-- Item 3 -->
<div class="flex flex-col gap-1">
<div class="flex items-center justify-between">
<span class="font-semibold text-primary">Extreme Cold Weather Kit</span>
<span class="font-mono text-secondary font-bold">92% CERTIFIED</span>
</div>
<div class="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-secondary" style="width: 92%;"></div>
</div>
<span class="font-label-xs text-label-xs text-outline font-mono">Rated down to -35°C arctic cold start</span>
</div>
<!-- Item 4 -->
<div class="flex flex-col gap-1">
<div class="flex items-center justify-between">
<span class="font-semibold text-primary">Communications & Telemetry</span>
<span class="font-mono text-secondary font-bold">95% SECURE LINK</span>
</div>
<div class="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-secondary" style="width: 95%;"></div>
</div>
<span class="font-label-xs text-label-xs text-outline font-mono">IRNSS encrypted burst & VHF radio synched</span>
</div>
<!-- Item 5 -->
<div class="flex flex-col gap-1">
<div class="flex items-center justify-between">
<span class="font-semibold text-primary">Braking & Pneumatics</span>
<span class="font-mono text-primary font-bold">88% OPERATIONAL</span>
</div>
<div class="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-secondary" style="width: 88%;"></div>
</div>
<span class="font-label-xs text-label-xs text-outline font-mono">Pneumatic air-dryer purged at 11:30 IST</span>
</div>
<!-- Item 6 -->
<div class="flex flex-col gap-1">
<div class="flex items-center justify-between">
<span class="font-semibold text-primary">Scheduled Maintenance Window</span>
<span class="font-mono text-[#7A5B18] font-bold">78% DUE IN 42 HRS</span>
</div>
<div class="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-surface-tint" style="width: 78%;"></div>
</div>
<span class="font-label-xs text-label-xs text-outline font-mono">Standard 2nd-echelon fluid & filter swap</span>
</div>
</div>
</article>
<!-- B. OPERATIONAL AVAILABILITY FORECAST (Quartermaster Predictive Timeline) -->
<article class="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col gap-3">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">update</span>
<h2 class="font-headline-sm text-headline-sm text-primary font-bold">
                Operational Availability Forecast
              </h2>
</div>
<span class="font-label-xs text-label-xs font-mono text-secondary font-bold">NEXT 24-48 HRS</span>
</div>
<!-- Timeline -->
<div class="relative pl-6 space-y-3.5 border-l-2 border-outline-variant ml-2 mt-2 font-mono">
<!-- Timeline Item 1 -->
<div class="relative">
<span class="absolute -left-[31px] top-0.5 w-3.5 h-3.5 rounded-full bg-secondary border-2 border-surface-container-lowest"></span>
<div class="flex flex-col">
<div class="flex items-center gap-2">
<span class="font-bold text-primary font-label-md text-label-md">14:35 IST</span>
<span class="font-label-xs text-label-xs px-1.5 py-0.2 bg-secondary-container text-on-secondary-container font-semibold rounded">APPROACHING</span>
</div>
<span class="font-label-sm text-label-sm text-on-surface-variant">Arrival at Forward Post Alpha (LOC-0042)</span>
</div>
</div>
<!-- Timeline Item 2 -->
<div class="relative">
<span class="absolute -left-[31px] top-0.5 w-3.5 h-3.5 rounded-full bg-surface-variant border-2 border-surface-container-lowest"></span>
<div class="flex flex-col">
<span class="font-bold text-primary font-label-md text-label-md">14:35 – 15:30 IST</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Cargo Unloading, Decanting POL & Cold-Chain Handover</span>
</div>
</div>
<!-- Timeline Item 3 -->
<div class="relative">
<span class="absolute -left-[31px] top-0.5 w-3.5 h-3.5 rounded-full bg-surface-variant border-2 border-surface-container-lowest"></span>
<div class="flex flex-col">
<span class="font-bold text-primary font-label-md text-label-md">15:30 – 16:15 IST</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Post-Mission Technical Turnaround & Tyre Pressure Check</span>
</div>
</div>
<!-- Timeline Item 4: KEY EVENT AVAILABLE -->
<div class="relative bg-secondary-container/40 p-2 rounded border border-secondary -ml-3 pl-5">
<span class="absolute -left-[19px] top-3 w-3.5 h-3.5 rounded-full bg-secondary border-2 border-surface-container-lowest"></span>
<div class="flex flex-col">
<div class="flex items-center gap-2">
<span class="font-bold text-primary font-label-md text-label-md">16:15 IST</span>
<span class="font-label-xs text-label-xs px-1.5 py-0.2 bg-secondary text-on-secondary font-bold rounded">AVAILABLE</span>
</div>
<span class="font-label-sm text-label-sm text-on-secondary-container font-bold">VEHICLE AVAILABLE FOR IMMEDIATE TASKING</span>
<span class="font-label-xs text-label-xs text-outline">Eligible for South Sector Backhaul or Leh Depot Return</span>
</div>
</div>
<!-- Timeline Item 5 -->
<div class="relative">
<span class="absolute -left-[31px] top-0.5 w-3.5 h-3.5 rounded-full bg-surface-variant border-2 border-surface-container-lowest"></span>
<div class="flex flex-col">
<span class="font-bold text-primary font-label-md text-label-md">19 Oct 08:00 IST</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Scheduled 2nd-Echelon Depot Inspection (DEP-0002 Bay 4)</span>
</div>
</div>
</div>
</article>
<!-- C. ROUTE & TACTICAL RISK INTELLIGENCE CONTEXT -->
<article class="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col gap-3">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">warning_amber</span>
<h2 class="font-headline-sm text-headline-sm text-primary font-bold">
                Tactical Risk Intelligence
              </h2>
</div>
<span class="px-2 py-0.5 rounded bg-secondary text-on-secondary font-label-xs text-label-xs font-bold font-mono">
              LOW / STABLE
            </span>
</div>
<div class="grid grid-cols-2 gap-2 text-label-xs font-label-xs font-mono">
<div class="p-2 bg-surface-container rounded border border-outline-variant flex flex-col">
<span class="text-on-surface-variant">CORRIDOR RELIABILITY</span>
<span class="font-bold text-primary text-label-md">92% Historical</span>
</div>
<div class="p-2 bg-surface-container rounded border border-outline-variant flex flex-col">
<span class="text-on-surface-variant">AVALANCHE HAZARD</span>
<span class="font-bold text-secondary text-label-md">GREEN (L-1 Low)</span>
</div>
<div class="p-2 bg-surface-container rounded border border-outline-variant flex flex-col">
<span class="text-on-surface-variant">ROAD CLEARANCE</span>
<span class="font-bold text-primary text-label-md">BRO PLOW ACTIVE</span>
</div>
<div class="p-2 bg-surface-container rounded border border-outline-variant flex flex-col">
<span class="text-on-surface-variant">SURFACE FRICTION</span>
<span class="font-bold text-primary text-label-md">0.42 (CHAIN COEF)</span>
</div>
</div>
<div class="flex justify-end pt-1">
<a class="font-label-sm text-label-sm font-semibold text-secondary hover:text-primary flex items-center gap-1 transition-colors" href="#">
<span>Open Corridor Intelligence (RL-25)</span>
<span class="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
</article>
<!-- D. VEHICLE ALERTS & ANOMALY NOTICES -->
<article class="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col gap-3">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[20px]">crisis_alert</span>
<h2 class="font-headline-sm text-headline-sm text-primary font-bold">
                Vehicle Alerts & Telemetry Notices
              </h2>
</div>
<span class="font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-mono font-bold">2 ACTIVE</span>
</div>
<div class="flex flex-col gap-2 font-label-sm text-label-sm">
<!-- Notice 1: Amber Alert -->
<div class="p-2.5 bg-surface-container-high rounded border-l-2 border-outline flex items-start gap-2.5">
<span class="material-symbols-outlined text-outline text-[18px] shrink-0 mt-0.5">info</span>
<div class="flex flex-col">
<span class="font-semibold text-primary">Route Delay Buffer (+12m)</span>
<span class="text-body-sm text-body-sm text-on-surface-variant">
                  Speed restricted to 35 km/h across Bodhkharbu icy switchbacks per Army Border Roads safety directive.
                </span>
<span class="font-label-xs text-label-xs text-outline font-mono mt-0.5">Reported: 13:50 IST • Auto-absorbed in ETA</span>
</div>
</div>
<!-- Notice 2: Maintenance Notice -->
<div class="p-2.5 bg-surface-container rounded border-l-2 border-secondary flex items-start gap-2.5">
<span class="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">calendar_month</span>
<div class="flex flex-col">
<span class="font-semibold text-primary">Preventive Maintenance Due in 42 Operating Hours</span>
<span class="text-body-sm text-body-sm text-on-surface-variant">
                  Scheduled service slot pre-reserved at Central Supply Depot Maintenance Bay 4 (18 Oct 2026).
                </span>
<span class="font-label-xs text-label-xs text-outline font-mono mt-0.5">Ref: MNT-REG-8821</span>
</div>
</div>
</div>
</article>
<!-- E. AUDIT TRAIL & CRYPTOGRAPHIC TELEMETRY LOG -->
<article class="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col gap-3">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">lock_clock</span>
<h2 class="font-headline-sm text-headline-sm text-primary font-bold">
                Cryptographic Audit Trail
              </h2>
</div>
<span class="font-label-xs text-label-xs font-mono text-outline">IRNSS SYNCED</span>
</div>
<div class="flex flex-col divide-y divide-outline-variant font-mono text-label-xs text-label-xs">
<div class="py-1.5 flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="font-bold text-primary">14:02 IST</span>
<span class="text-on-surface-variant truncate max-w-[220px]">Telemetry Ping: Speed 38 km/h, KM 42</span>
</div>
<span class="text-secondary font-bold">SHA-256 VALID</span>
</div>
<div class="py-1.5 flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="font-bold text-primary">13:48 IST</span>
<span class="text-on-surface-variant truncate max-w-[220px]">Waypoint 3 (Bodhkharbu CP) crossed</span>
</div>
<span class="text-secondary font-bold">SHA-256 VALID</span>
</div>
<div class="py-1.5 flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="font-bold text-primary">12:45 IST</span>
<span class="text-on-surface-variant truncate max-w-[220px]">Departure DEP-0002 Staging Area</span>
</div>
<span class="text-secondary font-bold">SHA-256 VALID</span>
</div>
<div class="py-1.5 flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="font-bold text-primary">11:42 IST</span>
<span class="text-on-surface-variant truncate max-w-[220px]">SHP-2048 Digital Seal by Maj. S. Nair</span>
</div>
<span class="text-secondary font-bold">IC-81094M SIGN</span>
</div>
</div>
<div class="pt-2 border-t border-outline-variant flex justify-between items-center text-label-xs font-label-xs font-mono">
<span class="text-outline">IMMUTABLE HARDENED LEDGER</span>
<a class="text-secondary hover:underline font-bold" href="#">View Full Mil-Spec Log</a>
</div>
</article>
</div>
</div>
</main>`;
