// Screen: RL-05 — Command Dashboard
// Route: /dashboard
export const rl05Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto flex-1 flex flex-col min-w-0 overflow-y-auto bg-surface-container-low">
<!-- Header Bar -->
<div class="px-space-md py-space-sm bg-surface-container-lowest border-b border-outline-variant flex flex-wrap justify-between items-center gap-space-sm sticky top-0 z-30">
<div>
<h1 class="text-headline-sm font-headline-sm text-primary tracking-tight">Command Dashboard</h1>
<p class="text-body-sm font-body-sm text-on-surface-variant">Operational Logistics Overview • HQ Northern Command</p>
</div>
<div class="flex items-center gap-space-md">
<!-- Telemetry Status Node Badge -->
<div class="flex items-center gap-1.5 px-2.5 py-1 bg-surface-container rounded border border-outline-variant text-label-xs font-mono">
<span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span class="text-on-surface font-semibold tracking-wider">SYSTEM OPERATIONAL // NODE DL-9941</span>
</div>
<!-- Notification Bell with Badge -->
<button class="relative p-1.5 text-on-surface-variant hover:text-primary rounded border border-outline-variant bg-surface-container-lowest hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
<span class="absolute -top-1 -right-1 bg-error text-white text-[9px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
</button>
<!-- Officer Quick Indicator -->
<div class="flex items-center gap-2 pl-2 border-l border-outline-variant">
<div class="w-7 h-7 rounded bg-primary-container text-white text-label-xs font-mono font-bold flex items-center justify-center border border-outline">
              BK
            </div>
<div class="text-label-xs leading-none hidden sm:block">
<span class="font-semibold text-on-surface block">Maj. B. Kumar</span>
<span class="text-on-surface-variant text-[9px]">DUTY OFFICER</span>
</div>
</div>
</div>
</div>
<!-- Operational Context & Filter Row -->
<div class="px-space-md py-2 bg-surface-container-high border-b border-outline-variant flex flex-wrap items-center justify-between gap-2 text-label-sm font-label-sm">
<div class="flex flex-wrap items-center gap-3">
<div class="flex items-center gap-1.5 text-on-surface">
<span class="material-symbols-outlined text-secondary text-[16px]" data-icon="my_location">my_location</span>
<span class="text-on-surface-variant">Scope:</span>
<span class="font-semibold bg-surface-container-lowest px-2 py-0.5 border border-outline-variant rounded">Sector IV-B / Leh-Ladakh (All Forward Locations)</span>
</div>
<div class="flex items-center gap-1.5 text-on-surface">
<span class="material-symbols-outlined text-secondary text-[16px]" data-icon="calendar_month">calendar_month</span>
<span class="text-on-surface-variant">Time Window:</span>
<span class="font-semibold bg-surface-container-lowest px-2 py-0.5 border border-outline-variant rounded">Next 30 Days (Predictive Cycle)</span>
</div>
<div class="text-body-sm font-mono text-on-surface-variant">
            Last Updated: 05 Oct 2026 • 14:32 IST
          </div>
</div>
<div class="flex items-center gap-2">
<button class="px-2.5 py-1 bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-container rounded text-label-sm flex items-center gap-1 transition-colors">
<span class="material-symbols-outlined text-[14px]" data-icon="filter_list">filter_list</span>
<span>Filter</span>
</button>
<button class="px-2.5 py-1 bg-primary-container text-white border border-primary rounded text-label-sm flex items-center gap-1 hover:bg-secondary transition-colors">
<span class="material-symbols-outlined text-[14px]" data-icon="refresh">refresh</span>
<span>Refresh Cycle</span>
</button>
</div>
</div>
<!-- MAIN SCROLLABLE DASHBOARD VIEWPORT -->
<div class="p-space-md space-y-space-md">
<!-- ================= 3. PRIMARY READINESS & KPI SECTION ================= -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
<!-- Primary Readiness Hero Card (4 cols) -->
<div class="lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded p-space-md flex flex-col justify-between">
<div>
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<span class="text-label-xs font-label-xs uppercase tracking-widest text-on-surface-variant">OPERATIONAL METRIC 01</span>
<span class="px-1.5 py-0.5 bg-secondary-container text-on-secondary-fixed text-label-xs font-mono font-semibold rounded border border-secondary/30">
                  READINESS INDEX
                </span>
</div>
<div class="mt-3 flex items-baseline gap-3">
<span class="text-[44px] font-mono font-bold leading-none text-primary">92%</span>
<div>
<div class="text-label-sm font-label-sm uppercase font-bold text-on-surface">OVERALL LOGISTICS READINESS</div>
<div class="text-label-xs text-secondary font-mono flex items-center gap-0.5 mt-0.5">
<span class="material-symbols-outlined text-[14px]" data-icon="arrow_upward">arrow_upward</span>
<span>↑ 4.2% from previous cycle</span>
</div>
</div>
</div>
</div>
<!-- Compact breakdown grid -->
<div class="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-outline-variant">
<div class="p-1.5 bg-surface-container-low border border-outline-variant rounded">
<div class="text-label-xs text-on-surface-variant flex justify-between">
<span>Inventory</span>
<span class="font-mono font-bold text-on-surface">94%</span>
</div>
<div class="w-full bg-outline-variant h-1 rounded mt-1 overflow-hidden">
<div class="bg-secondary h-full" style="width: 94%"></div>
</div>
</div>
<div class="p-1.5 bg-surface-container-low border border-outline-variant rounded">
<div class="text-label-xs text-on-surface-variant flex justify-between">
<span>Transportation</span>
<span class="font-mono font-bold text-on-surface">91%</span>
</div>
<div class="w-full bg-outline-variant h-1 rounded mt-1 overflow-hidden">
<div class="bg-secondary h-full" style="width: 91%"></div>
</div>
</div>
<div class="p-1.5 bg-surface-container-low border border-outline-variant rounded">
<div class="text-label-xs text-on-surface-variant flex justify-between">
<span>Supply Coverage</span>
<span class="font-mono font-bold text-on-surface">93%</span>
</div>
<div class="w-full bg-outline-variant h-1 rounded mt-1 overflow-hidden">
<div class="bg-secondary h-full" style="width: 93%"></div>
</div>
</div>
<div class="p-1.5 bg-surface-container-low border border-outline-variant rounded">
<div class="text-label-xs text-on-surface-variant flex justify-between">
<span>Route Access</span>
<span class="font-mono font-bold text-on-surface">89%</span>
</div>
<div class="w-full bg-outline-variant h-1 rounded mt-1 overflow-hidden">
<div class="bg-tertiary-fixed-dim h-full" style="width: 89%"></div>
</div>
</div>
</div>
</div>
<!-- Critical Operations KPI Strip (5 compact cards) (8 cols) -->
<div class="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-sm">
<!-- KPI 1: Tracked Inventory -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-space-sm flex flex-col justify-between">
<div class="flex items-center justify-between text-on-surface-variant">
<span class="text-label-xs uppercase font-semibold">Tracked Stock</span>
<span class="material-symbols-outlined text-[16px]" data-icon="inventory">inventory</span>
</div>
<div class="my-2">
<div class="text-headline-lg font-mono font-bold text-primary">1,284</div>
<div class="text-label-xs text-on-surface-variant">Items nominal</div>
</div>
<div class="text-label-xs text-secondary font-mono flex items-center">
<span>● 98.4% telemetry sync</span>
</div>
</div>
<!-- KPI 2: At Risk Locations -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-space-sm flex flex-col justify-between">
<div class="flex items-center justify-between text-on-surface-variant">
<span class="text-label-xs uppercase font-semibold">At-Risk Posts</span>
<span class="material-symbols-outlined text-[16px]" data-icon="location_off">location_off</span>
</div>
<div class="my-2">
<div class="text-headline-lg font-mono font-bold text-primary">17</div>
<div class="text-label-xs text-on-surface-variant">Active monitoring</div>
</div>
<div class="text-label-xs text-on-surface-variant font-mono">
<span>Sector IV &amp; VI</span>
</div>
</div>
<!-- KPI 3: Predicted Shortages (Highlighted Muted Amber Badge) -->
<div class="bg-surface-container-lowest border-2 border-[#C49A45] rounded p-space-sm flex flex-col justify-between relative bg-[#C49A45]/5">
<div class="flex items-center justify-between text-[#7A5B18]">
<span class="text-label-xs uppercase font-bold">Predicted Deficit</span>
<span class="material-symbols-outlined text-[16px]" data-icon="warning">warning</span>
</div>
<div class="my-2">
<div class="text-headline-lg font-mono font-bold text-[#7A5B18]">08</div>
<div class="text-label-xs text-on-surface-variant font-medium">Within 14 days</div>
</div>
<div class="text-label-xs font-mono font-bold px-1 py-0.5 rounded bg-[#C49A45]/20 text-[#7A5B18] text-center border border-[#C49A45]/40">
                ACTION REQ
              </div>
</div>
<!-- KPI 4: Active Shipments -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-space-sm flex flex-col justify-between">
<div class="flex items-center justify-between text-on-surface-variant">
<span class="text-label-xs uppercase font-semibold">Active Convoys</span>
<span class="material-symbols-outlined text-[16px]" data-icon="local_shipping">local_shipping</span>
</div>
<div class="my-2">
<div class="text-headline-lg font-mono font-bold text-primary">34</div>
<div class="text-label-xs text-on-surface-variant">In transit phase</div>
</div>
<div class="text-label-xs text-secondary font-mono">
<span>940 MT tonnage</span>
</div>
</div>
<!-- KPI 5: Route Risks -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-space-sm flex flex-col justify-between">
<div class="flex items-center justify-between text-on-surface-variant">
<span class="text-label-xs uppercase font-semibold">Route Hazard</span>
<span class="material-symbols-outlined text-[16px]" data-icon="alt_route">alt_route</span>
</div>
<div class="my-2">
<div class="text-headline-lg font-mono font-bold text-primary">05</div>
<div class="text-label-xs text-on-surface-variant">Elevated risk paths</div>
</div>
<div class="text-label-xs text-error font-mono flex items-center">
<span>Weather/Zojila Pass</span>
</div>
</div>
</div>
</div>
<!-- ================= 4. CENTRAL GIS OPERATIONAL MAP & CRITICAL ATTENTION GRID ================= -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
<!-- Left GIS Tactical Situation Map (approx 65% -> 8 cols) -->
<div class="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded flex flex-col overflow-hidden">
<!-- Map Header -->
<div class="px-space-md py-space-sm border-b border-outline-variant flex flex-wrap justify-between items-center gap-2 bg-surface-container-low">
<div>
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<h2 class="text-headline-sm font-headline-sm text-primary">Forward Logistics Situation</h2>
<span class="text-label-xs font-mono bg-surface-container px-1.5 py-0.5 rounded border border-outline-variant">LEH-ENCLAVE // SECTOR IV-B</span>
</div>
<p class="text-body-sm font-body-sm text-on-surface-variant">Location readiness, inventory risk and active movement telemetry</p>
</div>
<!-- Map Layer Controls -->
<div class="flex items-center gap-1 bg-surface-container-lowest p-0.5 border border-outline-variant rounded text-label-xs font-label-xs">
<button class="px-2 py-0.5 bg-primary-container text-white rounded font-medium">Layers</button>
<button class="px-2 py-0.5 hover:bg-surface-container rounded text-on-surface">Risk</button>
<button class="px-2 py-0.5 hover:bg-surface-container rounded text-on-surface">Inventory</button>
<button class="px-2 py-0.5 hover:bg-surface-container rounded text-on-surface">Shipments</button>
<button class="px-2 py-0.5 hover:bg-surface-container rounded text-on-surface">Weather</button>
</div>
</div>
<!-- GIS Tactical Canvas Simulator -->
<div class="relative w-full h-[420px] bg-[#EBE9DF] gis-grid-pattern overflow-hidden flex items-center justify-center select-none border-b border-outline-variant">
<!-- Subtle Topographic Contour Lines SVG Background -->
<svg class="absolute inset-0 w-full h-full pointer-events-none opacity-40" preserveaspectratio="none" viewbox="0 0 800 450">
<path d="M-50,120 Q180,60 360,140 T850,90" fill="none" stroke="#A49A78" stroke-dasharray="3,3" stroke-width="1"></path>
<path d="M-50,220 Q220,170 420,240 T850,200" fill="none" stroke="#A49A78" stroke-width="1.2"></path>
<path d="M-50,320 Q260,280 500,340 T850,310" fill="none" stroke="#A49A78" stroke-dasharray="4,2" stroke-width="1"></path>
<circle cx="480" cy="180" fill="none" opacity="0.6" r="140" stroke="#A49A78" stroke-width="0.8"></circle>
<circle cx="480" cy="180" fill="none" opacity="0.6" r="80" stroke="#A49A78" stroke-width="0.8"></circle>
<!-- Supply Route Arcs -->
<!-- NH-1D Main Arterial -->
<path d="M120,380 L290,260 L480,180" fill="none" stroke="#516446" stroke-dasharray="6,4" stroke-width="2.5"></path>
<!-- Khardung La Pass Corridor -->
<path d="M480,180 L590,110 L680,80" fill="none" stroke="#BA1A1A" stroke-dasharray="4,3" stroke-width="2"></path>
<!-- Secondary Feeder to Charlie -->
<path d="M480,180 L620,280 L710,320" fill="none" stroke="#516446" stroke-width="2"></path>
</svg>
<!-- MAP NODE: Leh Central Logistics Depot (Central Node) -->
<div class="absolute top-[160px] left-[450px] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div class="w-8 h-8 rounded bg-primary text-white border-2 border-primary-fixed flex items-center justify-center shadow-sm">
<span class="material-symbols-outlined text-[18px]" data-icon="warehouse">warehouse</span>
</div>
<div class="bg-surface-container-lowest border border-outline-variant px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-on-surface mt-1 shadow-sm">
                  LEH DEPOT (CENTRAL)
                </div>
</div>
<!-- MAP NODE: Forward Post Alpha (HIGH RISK FOCUS) -->
<div class="absolute top-[80px] left-[660px] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group">
<div class="relative">
<div class="w-7 h-7 rounded-full bg-[#BA1A1A] text-white border-2 border-white flex items-center justify-center animate-bounce">
<span class="material-symbols-outlined text-[15px]" data-icon="priority_high">priority_high</span>
</div>
<span class="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#BA1A1A] animate-ping opacity-75"></span>
</div>
<div class="bg-white border border-[#BA1A1A] px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-[#BA1A1A] mt-1 shadow">
                  POST ALPHA [DEFICIT]
                </div>
<!-- Interactive inspection overlay popup on Forward Post Alpha -->
<div class="absolute top-10 right-0 w-64 bg-surface-container-lowest border-2 border-primary-container p-2.5 rounded shadow-lg text-left z-20">
<div class="flex items-center justify-between border-b border-outline-variant pb-1 mb-1.5">
<span class="text-label-sm font-bold text-primary">POST ALPHA (NORTH SECTOR)</span>
<span class="px-1 py-0.2 bg-[#FFDAD6] text-[#93000A] text-[9px] font-mono font-bold rounded">HIGH RISK</span>
</div>
<div class="space-y-1 text-label-xs">
<div class="flex justify-between text-on-surface-variant">
<span>Operational Readiness:</span>
<span class="font-mono font-bold text-[#BA1A1A]">78%</span>
</div>
<div class="flex justify-between text-on-surface-variant">
<span>Inventory Condition:</span>
<span class="font-mono font-semibold text-[#BA1A1A]">CRITICAL</span>
</div>
<div class="flex justify-between text-on-surface-variant">
<span>Diesel Stockout Projection:</span>
<span class="font-mono font-bold text-error">6 Days</span>
</div>
<div class="flex justify-between text-on-surface-variant">
<span>Nearest Support Convoys:</span>
<span class="font-mono">SH-2048 (42 km)</span>
</div>
</div>
<div class="mt-2 pt-1.5 border-t border-outline-variant flex justify-between items-center">
<span class="text-[9px] font-mono text-on-surface-variant">SECTOR IV-B / LAT: 34.15°N</span>
<a class="text-label-xs font-semibold text-secondary hover:underline flex items-center" href="#">
                      View Location →
                    </a>
</div>
</div>
</div>
<!-- MAP NODE: Sector Bravo -->
<div class="absolute top-[260px] left-[260px] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div class="w-6 h-6 rounded bg-[#C49A45] text-white border-2 border-white flex items-center justify-center">
<span class="material-symbols-outlined text-[14px]" data-icon="shield">shield</span>
</div>
<div class="bg-surface-container-lowest border border-outline-variant px-1.5 py-0.5 rounded text-[10px] font-mono text-on-surface mt-1">
                  SECTOR BRAVO (86%)
                </div>
</div>
<!-- MAP NODE: Forward Post Charlie -->
<div class="absolute top-[310px] left-[690px] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div class="w-6 h-6 rounded bg-secondary text-white border-2 border-white flex items-center justify-center">
<span class="material-symbols-outlined text-[14px]" data-icon="check">check</span>
</div>
<div class="bg-surface-container-lowest border border-outline-variant px-1.5 py-0.5 rounded text-[10px] font-mono text-on-surface mt-1">
                  POST CHARLIE (94%)
                </div>
</div>
<!-- MAP NODE: Staging Post Delta -->
<div class="absolute top-[360px] left-[130px] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div class="w-6 h-6 rounded bg-secondary text-white border-2 border-white flex items-center justify-center">
<span class="material-symbols-outlined text-[14px]" data-icon="check">check</span>
</div>
<div class="bg-surface-container-lowest border border-outline-variant px-1.5 py-0.5 rounded text-[10px] font-mono text-on-surface mt-1">
                  DELTA HUB (98%)
                </div>
</div>
<!-- Moving Convoy Marker -->
<div class="absolute top-[135px] left-[550px] transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 bg-primary text-white text-[9px] font-mono px-1.5 py-0.5 rounded shadow">
<span class="material-symbols-outlined text-[12px] text-tertiary-fixed" data-icon="local_shipping">local_shipping</span>
<span>SH-2048 [CONVOY]</span>
</div>
<!-- Tactical Map Legend (Bottom-Left) -->
<div class="absolute bottom-2 left-2 bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant p-2 rounded text-label-xs font-mono space-y-1">
<div class="font-bold text-on-surface mb-0.5 text-[10px]">CORRIDOR STATUS</div>
<div class="flex items-center gap-2"><span class="w-3 h-0.5 bg-secondary inline-block"></span> <span>NH-1D: Clear / Nominal</span></div>
<div class="flex items-center gap-2"><span class="w-3 h-0.5 bg-error inline-block"></span> <span>Khardung La: Weather Alert</span></div>
<div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#BA1A1A] inline-block"></span> <span>Critical Deficit Zone</span></div>
</div>
<!-- Map Controls: Bottom-Right Zoom & Recenter -->
<div class="absolute bottom-2 right-2 flex flex-col gap-1">
<button class="w-7 h-7 bg-surface-container-lowest border border-outline-variant rounded flex items-center justify-center text-on-surface hover:bg-surface-container" title="Zoom In">+</button>
<button class="w-7 h-7 bg-surface-container-lowest border border-outline-variant rounded flex items-center justify-center text-on-surface hover:bg-surface-container" title="Zoom Out">-</button>
<button class="w-7 h-7 bg-surface-container-lowest border border-outline-variant rounded flex items-center justify-center text-on-surface hover:bg-surface-container" title="Recenter">
<span class="material-symbols-outlined text-[14px]" data-icon="filter_center_focus">filter_center_focus</span>
</button>
</div>
</div>
<!-- Map Footer Telemetry Strip -->
<div class="px-space-md py-2 bg-surface-container-low flex flex-wrap justify-between items-center text-label-xs font-mono text-on-surface-variant">
<div>GPS SYNC: 14 SATELLITES LOCK • LAT 34°10'N LONG 77°34'E • ALT: 3,500m</div>
<div>MAP ENGINE: MIL-GIS VECTOR CORE V3 • LAST TILE REFRESH 30s AGO</div>
</div>
</div>
<!-- Right 'Requires Attention' Panel (approx 35% -> 4 cols) -->
<div class="lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded flex flex-col justify-between">
<div>
<div class="px-space-md py-space-sm border-b border-outline-variant flex items-center justify-between bg-surface-container-low">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-error animate-pulse"></span>
<h2 class="text-headline-sm font-headline-sm text-primary">Requires Attention</h2>
</div>
<span class="px-2 py-0.5 bg-error-container text-on-error-container text-label-xs font-mono font-bold rounded">
                  03 CRITICAL
                </span>
</div>
<!-- 3 Prioritized Mission-Critical Risks -->
<div class="p-space-sm space-y-space-sm">
<!-- Risk 01: Forward Post Alpha -->
<div class="border-l-4 border-error bg-surface-container-low p-space-sm rounded-r border-t border-r border-b border-outline-variant">
<div class="flex items-center justify-between text-label-xs font-mono mb-1">
<span class="font-bold text-error">DEFICIT #01 • IMMEDIATE</span>
<span class="text-on-surface-variant font-semibold">CONFIDENCE 91%</span>
</div>
<div class="text-label-md font-label-md font-bold text-on-surface">Forward Post Alpha</div>
<p class="text-body-sm text-on-surface-variant mt-0.5">
                    Diesel shortage predicted | Reserve runway: <span class="font-mono font-bold text-error">6 days</span> at current consumption velocity.
                  </p>
<div class="mt-2 flex items-center justify-between pt-2 border-t border-outline-variant">
<span class="text-label-xs text-on-surface-variant font-mono">Stock: 2,100 L / Req: 5,000 L</span>
<button class="px-2.5 py-1 bg-primary text-white rounded text-label-xs font-semibold hover:bg-secondary transition-colors">
                      Review Stock →
                    </button>
</div>
</div>
<!-- Risk 02: Sector Bravo -->
<div class="border-l-4 border-[#C49A45] bg-surface-container-low p-space-sm rounded-r border-t border-r border-b border-outline-variant">
<div class="flex items-center justify-between text-label-xs font-mono mb-1">
<span class="font-bold text-[#7A5B18]">ALERT #02 • TRANSIT RISK</span>
<span class="text-on-surface-variant font-semibold">CONFIDENCE 84%</span>
</div>
<div class="text-label-md font-label-md font-bold text-on-surface">Sector Bravo Pass Corridor</div>
<p class="text-body-sm text-on-surface-variant mt-0.5">
                    Route accessibility declining | Heavy weather risk elevated (Zojila pass closure probability 68%).
                  </p>
<div class="mt-2 flex items-center justify-between pt-2 border-t border-outline-variant">
<span class="text-label-xs text-on-surface-variant font-mono">Pass Status: RESTRICTED</span>
<button class="px-2.5 py-1 bg-surface-container-highest text-on-surface border border-outline rounded text-label-xs font-semibold hover:bg-surface-container transition-colors">
                      View Route
                    </button>
</div>
</div>
<!-- Risk 03: Forward Post Charlie -->
<div class="border-l-4 border-outline bg-surface-container-low p-space-sm rounded-r border-t border-r border-b border-outline-variant">
<div class="flex items-center justify-between text-label-xs font-mono mb-1">
<span class="font-bold text-on-surface">ALERT #03 • TELEMETRY VARIANCE</span>
<span class="text-on-surface-variant font-semibold">CONFIDENCE 88%</span>
</div>
<div class="text-label-md font-label-md font-bold text-on-surface">Forward Post Charlie Movement</div>
<p class="text-body-sm text-on-surface-variant mt-0.5">
                    Shipment delay risk on Convoy 14-B | ETA variance <span class="font-mono font-bold text-on-surface">+8 hrs</span> due to mechanical staging check.
                  </p>
<div class="mt-2 flex items-center justify-between pt-2 border-t border-outline-variant">
<span class="text-label-xs text-on-surface-variant font-mono">Convoy: SH-2051</span>
<button class="px-2.5 py-1 bg-surface-container-highest text-on-surface border border-outline rounded text-label-xs font-semibold hover:bg-surface-container transition-colors">
                      Review Telemetry
                    </button>
</div>
</div>
</div>
</div>
<!-- Panel Bottom Status Indicator -->
<div class="p-space-sm border-t border-outline-variant bg-surface-container-low text-label-xs text-on-surface-variant flex items-center justify-between">
<span>AUTOMATED AUDIT DISPATCH</span>
<span class="font-mono text-secondary font-semibold">ALL SENSORS REPORTING</span>
</div>
</div>
</div>
<!-- ================= 5. PREDICTIVE INTELLIGENCE & ACTIVE MOVEMENT SECTION ================= -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
<!-- Predictive Outlook (Next 14 Days) (5 cols) -->
<div class="lg:col-span-5 bg-surface-container-lowest border border-outline-variant rounded p-space-md flex flex-col justify-between">
<div>
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<div>
<h3 class="text-headline-sm font-headline-sm text-primary">Predictive Outlook</h3>
<p class="text-body-sm font-body-sm text-on-surface-variant">Demand index &amp; readiness projection corridor (Next 14 Days)</p>
</div>
<span class="text-label-xs font-mono bg-surface-container px-2 py-0.5 rounded border border-outline-variant">
                  AI CYCLE 41-B
                </span>
</div>
<!-- SVG Trend Graph with Confidence Band -->
<div class="mt-4 relative">
<div class="h-44 w-full bg-surface-container-low rounded border border-outline-variant p-2 flex flex-col justify-between relative overflow-hidden">
<!-- Gridlines -->
<div class="absolute inset-0 flex flex-col justify-between p-3 pointer-events-none opacity-20">
<div class="border-b border-on-surface w-full"></div>
<div class="border-b border-on-surface w-full"></div>
<div class="border-b border-on-surface w-full"></div>
<div class="border-b border-on-surface w-full"></div>
</div>
<!-- Graph Canvas -->
<svg class="w-full h-full" preserveaspectratio="none" viewbox="0 0 400 140">
<!-- Confidence Band Corridor (Shaded) -->
<polygon fill="#516446" fill-opacity="0.15" points="
                      0,40 40,42 80,45 120,50 160,78 200,88 240,65 280,48 320,40 360,35 400,32
                      400,60 360,65 320,70 280,82 240,110 200,122 160,110 120,75 80,68 40,64 0,60
                    "></polygon>
<!-- Dip Warning Region (Days 6-8) -->
<rect fill="#BA1A1A" fill-opacity="0.06" height="140" width="80" x="150" y="0"></rect>
<line stroke="#BA1A1A" stroke-dasharray="2,2" stroke-width="1" x1="190" x2="190" y1="10" y2="130"></line>
<!-- Historical Realized Baseline -->
<polyline fill="none" points="0,50 40,53 80,55 120,62" stroke="#17251C" stroke-width="2.5"></polyline>
<!-- Predicted Projection Curve -->
<polyline fill="none" points="120,62 160,94 200,105 240,88 280,65 320,55 360,50 400,45" stroke="#3F5135" stroke-dasharray="4,3" stroke-width="2"></polyline>
<!-- Critical Dip Point -->
<circle cx="200" cy="105" fill="#BA1A1A" r="4" stroke="#FFFFFF" stroke-width="1.5"></circle>
</svg>
<!-- Dip Annotation Marker -->
<div class="absolute top-4 left-[46%] transform -translate-x-1/2 bg-white/95 border border-[#BA1A1A] px-1.5 py-0.5 rounded text-[10px] font-mono text-error font-bold shadow-sm">
                    DAY 6-8: STOCKOUT WINDOW
                  </div>
<!-- X-Axis Labels -->
<div class="flex justify-between text-[10px] font-mono text-on-surface-variant pt-1 z-10">
<span>TODAY</span>
<span>DAY 3</span>
<span class="text-error font-bold">DAY 7 (TROUGH)</span>
<span>DAY 10</span>
<span>DAY 14</span>
</div>
</div>
</div>
</div>
<div class="mt-3 pt-3 border-t border-outline-variant flex items-center justify-between text-label-xs text-on-surface-variant">
<span>CONFIDENCE MODEL: ENSEMBLE RNN-LSTM</span>
<span class="font-mono text-primary font-semibold">91.4% HISTORICAL ACCURACY</span>
</div>
</div>
<!-- Upcoming Stockout Risks Table (7 cols) -->
<div class="lg:col-span-7 bg-surface-container-lowest border border-outline-variant rounded p-space-md flex flex-col justify-between">
<div>
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<div>
<h3 class="text-headline-sm font-headline-sm text-primary">Upcoming Stockout Projections</h3>
<p class="text-body-sm font-body-sm text-on-surface-variant">Classified logistics reserves with imminent replenish triggers</p>
</div>
<span class="text-label-xs font-mono text-on-surface-variant">4 ITEMS FLAGGED</span>
</div>
<!-- Table -->
<div class="overflow-x-auto mt-2">
<table class="w-full text-left border-collapse">
<thead>
<tr class="border-b border-outline-variant bg-surface-container-low text-label-xs font-label-xs uppercase text-on-surface">
<th class="py-2 px-3">Location</th>
<th class="py-2 px-3">Stock Commodity</th>
<th class="py-2 px-3 text-right">Runway</th>
<th class="py-2 px-3 text-right">Model Conf.</th>
<th class="py-2 px-3 text-center">Action</th>
</tr>
</thead>
<tbody class="text-body-sm divide-y divide-outline-variant font-mono">
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2.5 px-3 font-semibold text-primary">Alpha Post</td>
<td class="py-2.5 px-3 font-sans">High-Altitude Diesel (Arctic Grade)</td>
<td class="py-2.5 px-3 text-right font-bold text-error">6 days</td>
<td class="py-2.5 px-3 text-right text-on-surface">91%</td>
<td class="py-2.5 px-3 text-center">
<button class="px-2 py-0.5 bg-primary text-white rounded text-label-xs font-sans hover:bg-secondary transition-colors">View</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2.5 px-3 font-semibold text-primary">Bravo Sector</td>
<td class="py-2.5 px-3 font-sans">Cold-Pack Sealed Rations (Class I)</td>
<td class="py-2.5 px-3 text-right font-bold text-[#7A5B18]">9 days</td>
<td class="py-2.5 px-3 text-right text-on-surface">87%</td>
<td class="py-2.5 px-3 text-center">
<button class="px-2 py-0.5 bg-surface-container-highest border border-outline rounded text-label-xs font-sans hover:bg-surface-container transition-colors">View</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2.5 px-3 font-semibold text-primary">Charlie Post</td>
<td class="py-2.5 px-3 font-sans">Trauma Kits &amp; Frostbite Plasma (Class VIII)</td>
<td class="py-2.5 px-3 text-right font-bold text-on-surface">12 days</td>
<td class="py-2.5 px-3 text-right text-on-surface">82%</td>
<td class="py-2.5 px-3 text-center">
<button class="px-2 py-0.5 bg-surface-container-highest border border-outline rounded text-label-xs font-sans hover:bg-surface-container transition-colors">View</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2.5 px-3 font-semibold text-primary">Foxtrot Outpost</td>
<td class="py-2.5 px-3 font-sans">Small Arms Munitions Class V</td>
<td class="py-2.5 px-3 text-right font-bold text-on-surface">14 days</td>
<td class="py-2.5 px-3 text-right text-on-surface">89%</td>
<td class="py-2.5 px-3 text-center">
<button class="px-2 py-0.5 bg-surface-container-highest border border-outline rounded text-label-xs font-sans hover:bg-surface-container transition-colors">View</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div class="pt-2 text-label-xs text-on-surface-variant flex justify-between items-center">
<span>TRIGGER LOGIC: MINIMUM SAFETY RUNWAY THRESHOLD = 10 DAYS</span>
<a class="text-secondary font-semibold hover:underline" href="#">View All Predicted Shortages (8) →</a>
</div>
</div>
</div>
<!-- ================= ACTIVE LOGISTICS MOVEMENT TABLE ================= -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-space-md">
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<div>
<h3 class="text-headline-sm font-headline-sm text-primary">Active Movement &amp; Convoy Tracking</h3>
<p class="text-body-sm font-body-sm text-on-surface-variant">Real-time GPS transponder feeds &amp; dispatch velocity across Northern Corridors</p>
</div>
<div class="flex items-center gap-2">
<span class="text-label-xs font-mono text-on-surface-variant">34 CONVOYS ACTIVE</span>
<button class="px-2.5 py-1 bg-surface-container border border-outline-variant text-on-surface rounded text-label-xs font-semibold hover:bg-surface-container-high transition-colors">
                Export Manifest
              </button>
</div>
</div>
<div class="overflow-x-auto mt-3">
<table class="w-full text-left border-collapse">
<thead>
<tr class="border-b border-outline-variant bg-surface-container-low text-label-xs font-label-xs uppercase text-on-surface">
<th class="py-2 px-3">Shipment ID</th>
<th class="py-2 px-3">Origin Depot</th>
<th class="py-2 px-3">Destination Post</th>
<th class="py-2 px-3 text-center">Priority</th>
<th class="py-2 px-3 text-right">ETA (Forecast)</th>
<th class="py-2 px-3 text-center">Operational Status</th>
<th class="py-2 px-3 text-right">Telemetry</th>
</tr>
</thead>
<tbody class="text-body-sm divide-y divide-outline-variant font-mono">
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2.5 px-3 font-bold text-primary">SH-2048</td>
<td class="py-2.5 px-3 font-sans">Leh Central Reserve</td>
<td class="py-2.5 px-3 font-sans">Forward Post Alpha</td>
<td class="py-2.5 px-3 text-center font-sans">
<span class="px-2 py-0.5 bg-error-container text-[#93000A] text-label-xs font-bold rounded">CRITICAL</span>
</td>
<td class="py-2.5 px-3 text-right">05 Oct • 19:45</td>
<td class="py-2.5 px-3 text-center">
<span class="inline-flex items-center gap-1 text-label-xs text-secondary font-bold">
<span class="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                      ON ROUTE (42 km remaining)
                    </span>
</td>
<td class="py-2.5 px-3 text-right font-sans">
<button class="text-label-xs font-semibold text-secondary hover:underline">Track Transponder →</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2.5 px-3 font-bold text-primary">SH-2051</td>
<td class="py-2.5 px-3 font-sans">Srinagar Base Staging</td>
<td class="py-2.5 px-3 font-sans">Sector Bravo Hub</td>
<td class="py-2.5 px-3 text-center font-sans">
<span class="px-2 py-0.5 bg-[#C49A45]/20 text-[#7A5B18] text-label-xs font-bold rounded border border-[#C49A45]/30">HIGH</span>
</td>
<td class="py-2.5 px-3 text-right">06 Oct • 08:30</td>
<td class="py-2.5 px-3 text-center">
<span class="inline-flex items-center gap-1 text-label-xs text-[#7A5B18] font-bold">
<span class="w-1.5 h-1.5 rounded-full bg-[#C49A45]"></span>
                      CONVOY IN TRANSIT (DELAY +8H)
                    </span>
</td>
<td class="py-2.5 px-3 text-right font-sans">
<button class="text-label-xs font-semibold text-secondary hover:underline">Track Transponder →</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2.5 px-3 font-bold text-primary">SH-2055</td>
<td class="py-2.5 px-3 font-sans">Chandigarh Railhead</td>
<td class="py-2.5 px-3 font-sans">Delta Staging Hub</td>
<td class="py-2.5 px-3 text-center font-sans">
<span class="px-2 py-0.5 bg-surface-container text-on-surface-variant text-label-xs font-bold rounded">NOMINAL</span>
</td>
<td class="py-2.5 px-3 text-right">07 Oct • 14:00</td>
<td class="py-2.5 px-3 text-center">
<span class="inline-flex items-center gap-1 text-label-xs text-on-surface-variant font-bold">
<span class="w-1.5 h-1.5 rounded-full bg-outline"></span>
                      HOLD STAGING (INSPECTION)
                    </span>
</td>
<td class="py-2.5 px-3 text-right font-sans">
<button class="text-label-xs font-semibold text-secondary hover:underline">Track Transponder →</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<!-- ================= 6. PRESCRIPTIVE INTELLIGENCE: RECOMMENDED ACTIONS ================= -->
<div class="bg-primary-container text-white border-2 border-primary-fixed/20 rounded p-space-md">
<div class="flex items-center justify-between border-b border-white/10 pb-2">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary-fixed text-[20px]" data-icon="smart_toy">smart_toy</span>
<div>
<h3 class="text-headline-sm font-headline-sm text-white">Prescriptive Intelligence // Decision Support Recommendations</h3>
<p class="text-body-sm font-body-sm text-on-primary-container">AI-guided tactical logistics optimization (Rule-Engine validated)</p>
</div>
</div>
<span class="text-label-xs font-mono bg-white/10 text-white px-2 py-0.5 rounded border border-white/20">
              DGOL PROTOCOL COMPLIANT
            </span>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-space-md">
<!-- Action Card 1: Replenish Diesel -->
<div class="bg-black/30 border border-outline rounded p-space-sm flex flex-col justify-between">
<div>
<div class="flex items-center justify-between text-label-xs font-mono text-tertiary-fixed mb-1">
<span class="font-bold">RECOMMENDATION #RL-A1</span>
<span class="bg-error/30 text-white px-1.5 py-0.2 rounded border border-error/50">HIGH PRIORITY</span>
</div>
<div class="text-label-md font-bold text-white">Replenish Arctic Diesel — Forward Post Alpha</div>
<p class="text-body-sm text-surface-variant mt-1">
                  Stockout predicted in <span class="text-white font-mono font-bold">6 days</span> based on drop to -18°C. Recommended allocation: <span class="text-white font-mono font-bold">2,500 L</span> from Leh Central Reserve.
                </p>
<div class="mt-2 text-label-xs font-mono text-tertiary-fixed-dim bg-white/5 p-1.5 rounded">
                  EXPECTED IMPACT: +8% POST READINESS • RISK MITIGATION: 94%
                </div>
</div>
<div class="mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
<button class="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-label-xs font-semibold transition-colors">
                  Review Protocol
                </button>
<button class="px-3 py-1 bg-secondary text-white rounded text-label-xs font-semibold hover:bg-secondary/80 flex items-center gap-1 transition-colors">
<span>Approve Dispatch →</span>
</button>
</div>
</div>
<!-- Action Card 2: Reroute Shipment -->
<div class="bg-black/30 border border-outline rounded p-space-sm flex flex-col justify-between">
<div>
<div class="flex items-center justify-between text-label-xs font-mono text-tertiary-fixed mb-1">
<span class="font-bold">RECOMMENDATION #RL-A2</span>
<span class="bg-[#C49A45]/30 text-tertiary-fixed px-1.5 py-0.2 rounded border border-[#C49A45]/50">ROUTING BYPASS</span>
</div>
<div class="text-label-md font-bold text-white">Reroute Shipment SH-2048 via Corridor B</div>
<p class="text-body-sm text-surface-variant mt-1">
                  Severe blizzard advisory on NH-1D pass. Alternative Route B bypasses pass hazard, reduces transit hazard probability by <span class="text-white font-mono font-bold">31%</span>.
                </p>
<div class="mt-2 text-label-xs font-mono text-tertiary-fixed-dim bg-white/5 p-1.5 rounded">
                  EXPECTED IMPACT: +3.5 HRS TRANSIT TIME BUT 0% PASS CLOSURE RISK
                </div>
</div>
<div class="mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
<button class="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-label-xs font-semibold transition-colors">
                  Review Simulation
                </button>
<button class="px-3 py-1 bg-secondary text-white rounded text-label-xs font-semibold hover:bg-secondary/80 flex items-center gap-1 transition-colors">
<span>Optimize Route →</span>
</button>
</div>
</div>
</div>
</div>
<!-- ================= 7. RISK DISTRIBUTION & OPERATIONAL ACTIVITY LOG ================= -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
<!-- Operational Risk Distribution (Horizontal Bar Gauges) (6 cols) -->
<div class="lg:col-span-6 bg-surface-container-lowest border border-outline-variant rounded p-space-md flex flex-col justify-between">
<div>
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<h3 class="text-headline-sm font-headline-sm text-primary">Operational Risk Distribution</h3>
<span class="text-label-xs font-mono text-on-surface-variant">SECTOR IV-B AGGREGATE</span>
</div>
<div class="space-y-3 mt-3">
<!-- Bar 1: Inventory -->
<div>
<div class="flex justify-between text-label-xs mb-1 font-mono">
<span class="font-bold text-on-surface">INVENTORY DEFICIT RISK</span>
<span class="font-bold text-error">HIGH (78%)</span>
</div>
<div class="w-full bg-surface-container h-2 rounded overflow-hidden">
<div class="bg-error h-full" style="width: 78%"></div>
</div>
</div>
<!-- Bar 2: Demand Volatility -->
<div>
<div class="flex justify-between text-label-xs mb-1 font-mono">
<span class="font-bold text-on-surface">DEMAND VOLATILITY</span>
<span class="font-bold text-[#7A5B18]">MEDIUM (54%)</span>
</div>
<div class="w-full bg-surface-container h-2 rounded overflow-hidden">
<div class="bg-[#C49A45] h-full" style="width: 54%"></div>
</div>
</div>
<!-- Bar 3: Transportation Fleet Availability -->
<div>
<div class="flex justify-between text-label-xs mb-1 font-mono">
<span class="font-bold text-on-surface">FLEET ASSET STRESS</span>
<span class="font-bold text-[#7A5B18]">MEDIUM (48%)</span>
</div>
<div class="w-full bg-surface-container h-2 rounded overflow-hidden">
<div class="bg-[#C49A45] h-full" style="width: 48%"></div>
</div>
</div>
<!-- Bar 4: Weather Hazard -->
<div>
<div class="flex justify-between text-label-xs mb-1 font-mono">
<span class="font-bold text-on-surface">METEOROLOGICAL RISK</span>
<span class="font-bold text-secondary">LOW (24%)</span>
</div>
<div class="w-full bg-surface-container h-2 rounded overflow-hidden">
<div class="bg-secondary h-full" style="width: 24%"></div>
</div>
</div>
<!-- Bar 5: Route Disruption -->
<div>
<div class="flex justify-between text-label-xs mb-1 font-mono">
<span class="font-bold text-on-surface">ROUTE / PASS DISRUPTION</span>
<span class="font-bold text-[#7A5B18]">MEDIUM (62%)</span>
</div>
<div class="w-full bg-surface-container h-2 rounded overflow-hidden">
<div class="bg-[#C49A45] h-full" style="width: 62%"></div>
</div>
</div>
<!-- Bar 6: Delivery Variance -->
<div>
<div class="flex justify-between text-label-xs mb-1 font-mono">
<span class="font-bold text-on-surface">DELIVERY ETA VARIANCE</span>
<span class="font-bold text-secondary">LOW (18%)</span>
</div>
<div class="w-full bg-surface-container h-2 rounded overflow-hidden">
<div class="bg-secondary h-full" style="width: 18%"></div>
</div>
</div>
</div>
</div>
<div class="pt-3 border-t border-outline-variant text-label-xs text-on-surface-variant flex justify-between">
<span>WEIGHTED AGGREGATE RISK SCORE: 47.3 / 100</span>
<span class="font-mono text-on-surface font-semibold">STATUS: NOMINAL / CONTROLLED</span>
</div>
</div>
<!-- Operational Activity Log (6 cols) -->
<div class="lg:col-span-6 bg-surface-container-lowest border border-outline-variant rounded p-space-md flex flex-col justify-between">
<div>
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<h3 class="text-headline-sm font-headline-sm text-primary">Recent Operational Activity</h3>
<span class="text-label-xs font-mono text-on-surface-variant">REAL-TIME LOG AUDIT</span>
</div>
<div class="space-y-2 mt-3 font-mono text-label-xs">
<!-- Log Entry 1 -->
<div class="p-2 bg-surface-container-low rounded border border-outline-variant flex items-start gap-2">
<span class="font-bold text-primary">14:28</span>
<div class="flex-1 font-sans">
<span class="font-semibold text-on-surface font-mono">[FORECAST_BATCH_812]</span>
<span class="text-on-surface-variant block">Forecast generated for Forward Post Alpha; inventory threshold triggered alert.</span>
</div>
</div>
<!-- Log Entry 2 -->
<div class="p-2 bg-surface-container-low rounded border border-outline-variant flex items-start gap-2">
<span class="font-bold text-primary">14:21</span>
<div class="flex-1 font-sans">
<span class="font-semibold text-secondary font-mono">[TELEMETRY_SYNC]</span>
<span class="text-on-surface-variant block">Shipment SH-2048 route telemetry updated: waypoint Khardung South verified.</span>
</div>
</div>
<!-- Log Entry 3 -->
<div class="p-2 bg-surface-container-low rounded border border-outline-variant flex items-start gap-2">
<span class="font-bold text-error">14:07</span>
<div class="flex-1 font-sans">
<span class="font-semibold text-error font-mono">[THRESHOLD_ALERT]</span>
<span class="text-on-surface-variant block">Inventory threshold alert triggered at Sector Bravo (Class I Rations runway &lt; 10 days).</span>
</div>
</div>
<!-- Log Entry 4 -->
<div class="p-2 bg-surface-container-low rounded border border-outline-variant flex items-start gap-2">
<span class="font-bold text-primary">13:54</span>
<div class="flex-1 font-sans">
<span class="font-semibold text-on-surface font-mono">[SIM_COMPLETE]</span>
<span class="text-on-surface-variant block">Winterization cold-chain simulation run completed for high-altitude passes.</span>
</div>
</div>
</div>
</div>
<div class="pt-3 border-t border-outline-variant text-label-xs text-on-surface-variant flex justify-between items-center">
<span>ACTIVE DAEMON: EVENT_AUDIT_STREAM_V4</span>
<a class="text-secondary font-semibold hover:underline" href="#">Full Audit Registry →</a>
</div>
</div>
</div>
</div>
<!-- ================= 8. INSTITUTIONAL FOOTER & AUDIT META (Shared Component Anchor) ================= -->
<footer class="w-full px-margin-desktop py-space-md flex flex-col md:flex-row justify-between items-center gap-space-sm border-t border-outline-variant bg-surface-container-low text-on-surface mt-auto">
<div class="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
<span class="text-label-sm font-label-sm uppercase font-semibold text-primary">
            RESTRICTED CLASSIFIED // MINISTRY OF DEFENCE ENTERPRISE LOGISTICS INFRASTRUCTURE // AUDITABLE NODE REF: DL-9941
          </span>
</div>
<div class="flex flex-wrap items-center justify-center gap-space-md text-label-xs font-label-xs text-on-surface-variant uppercase tracking-widest">
<a class="hover:text-primary underline transition-colors duration-150" href="#">Classification Protocols</a>
<a class="hover:text-primary underline transition-colors duration-150" href="#">MIL-STD Data Security</a>
<a class="hover:text-primary underline transition-colors duration-150" href="#">Audit Registry</a>
<a class="hover:text-primary underline transition-colors duration-150" href="#">Hardware Token Auth</a>
<a class="hover:text-primary underline transition-colors duration-150" href="#">Field Telemetry Directives</a>
</div>
</footer>
<!-- Bottom Compliance Bar -->
<div class="w-full px-margin-desktop py-1 bg-surface-container-highest border-t border-outline-variant text-[10px] font-mono text-on-surface-variant flex justify-between">
<span>MIL-STD-188F Interoperable • AES-256 Encrypted Telemetry • DGOL / Integrated Defence Staff Logistics Node DL-9941</span>
<span>LATENCY: 12ms // BUFFER: 100% // INTEGRITY VERIFIED</span>
</div>
</main>`;
