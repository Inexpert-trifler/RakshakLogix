// Screen: RL-25 — Shipment Details & Planning // SHP-2048
// Route: /shipments/SHP-2048
export const rl25Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto p-6 flex flex-col gap-5">
<!-- HEADER & OPERATIONAL STATUS -->
<section class="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant flex flex-col gap-4">
<div class="flex flex-wrap items-start justify-between gap-4">
<div class="flex flex-col gap-1.5">
<div class="flex items-center gap-3">
<h1 class="text-headline-lg font-headline-lg text-primary tracking-tight">SHP-2048 — Forward Fuel Replenishment</h1>
<div class="flex items-center gap-1.5">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs uppercase font-bold bg-secondary-container text-on-secondary-container border border-secondary flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> IN TRANSIT
                </span>
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs uppercase font-bold bg-error-container text-on-error-container border border-error">
                  CRITICAL PRIORITY
                </span>
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs uppercase font-semibold bg-surface-container-high text-on-surface border border-outline-variant">
                  REPLENISHMENT SORTIE
                </span>
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs uppercase font-mono text-on-surface-variant border border-outline-variant">
                  VERSION: OP-2026-10-05-A
                </span>
</div>
</div>
<p class="text-body-md font-body-md text-on-surface-variant max-w-4xl">
              Priority Class III POL replenishment sortied for Forward Post Alpha (LOC-0042) to mitigate high-altitude winter freeze stockout.
            </p>
</div>
<!-- Top Actions -->
<div class="flex items-center gap-2">
<button class="px-3 py-1.5 rounded text-label-sm font-label-sm uppercase font-semibold bg-secondary text-on-secondary hover:bg-primary-container transition-colors flex items-center gap-1.5">
<span class="material-symbols-outlined text-[16px]">sensors</span>
<span>Track Sortie (Live Telemetry)</span>
</button>
<button class="px-3 py-1.5 rounded text-label-sm font-label-sm uppercase font-semibold bg-surface-container text-on-surface border border-outline-variant hover:bg-surface-container-high transition-colors">
              Modify Plan
            </button>
<button class="px-3 py-1.5 rounded text-label-sm font-label-sm uppercase font-semibold bg-surface-container text-on-surface border border-outline-variant hover:bg-surface-container-high transition-colors">
              Report Delay
            </button>
<button class="px-3 py-1.5 rounded text-label-sm font-label-sm uppercase font-semibold bg-surface-container text-on-surface border border-outline-variant hover:bg-surface-container-high transition-colors">
              Reassign Vehicle
            </button>
<button class="px-2.5 py-1.5 rounded text-on-surface-variant border border-outline-variant hover:bg-surface-container-high transition-colors" title="Export Manifest Dossier">
<span class="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
</div>
<!-- Metadata Sub-bar -->
<div class="pt-3 border-t border-outline-variant flex flex-wrap items-center justify-between text-label-sm font-label-sm text-on-surface-variant font-mono">
<div class="flex items-center gap-6">
<div><span class="text-outline uppercase">Created:</span> 05 Oct 2026, 11:42 IST</div>
<div class="flex items-center gap-1.5">
<span class="text-outline uppercase">Last Telemetry:</span>
<span class="text-on-surface font-semibold">2 min ago</span>
<span class="text-secondary">(IRNSS Lock 8 Sat)</span>
</div>
<div><span class="text-outline uppercase">Required Delivery:</span> <span class="text-error font-semibold">05 Oct 2026 before 15:00 IST</span></div>
</div>
<div><span class="text-outline uppercase">Dispatch Authority:</span> Lt. Col. Quartermaster HQ</div>
</div>
</section>
<!-- KPI METRICS STRIP (6 Compact Tactical Cards) -->
<section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
<!-- 1. Cargo -->
<div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant flex flex-col justify-between">
<div class="text-label-xs font-label-xs text-outline uppercase tracking-wider">Cargo &amp; Tonnage</div>
<div class="mt-1">
<span class="text-headline-lg font-headline-lg text-primary">5.8</span>
<span class="text-label-sm font-label-sm text-on-surface-variant uppercase ml-0.5">MT Total</span>
</div>
<div class="text-label-xs font-label-xs text-on-surface-variant mt-1">5,000 L Polar Diesel + 0.8t Class I</div>
</div>
<!-- 2. Assigned Transport -->
<div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant flex flex-col justify-between">
<div class="text-label-xs font-label-xs text-outline uppercase tracking-wider">Assigned Unit</div>
<div class="mt-1">
<span class="text-headline-lg font-headline-lg text-primary">VH-0087</span>
</div>
<div class="text-label-xs font-label-xs text-secondary font-semibold mt-1">Stallion 4x4 · 89% Readiness</div>
</div>
<!-- 3. Tactical Corridor -->
<div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant flex flex-col justify-between">
<div class="text-label-xs font-label-xs text-outline uppercase tracking-wider">Tactical Corridor</div>
<div class="mt-1">
<span class="text-headline-lg font-headline-lg text-primary">RTE-018</span>
</div>
<div class="text-label-xs font-label-xs text-on-surface-variant mt-1">Leh-Khangral · 92% Route Rel.</div>
</div>
<!-- 4. Transit ETA -->
<div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant flex flex-col justify-between">
<div class="text-label-xs font-label-xs text-outline uppercase tracking-wider">Transit ETA</div>
<div class="mt-1">
<span class="text-headline-lg font-headline-lg text-primary">14:35</span>
<span class="text-label-sm font-label-sm text-secondary font-semibold ml-0.5">IST</span>
</div>
<div class="text-label-xs font-label-xs text-secondary font-semibold mt-1">On Schedule · T-minus 33m</div>
</div>
<!-- 5. Capacity Load -->
<div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant flex flex-col justify-between">
<div class="text-label-xs font-label-xs text-outline uppercase tracking-wider">Capacity Utilization</div>
<div class="mt-1">
<span class="text-headline-lg font-headline-lg text-primary">72.5%</span>
</div>
<div class="text-label-xs font-label-xs text-on-surface-variant mt-1">5.8 / 8.0 MT (2.2t margin)</div>
</div>
<!-- 6. Composite Risk -->
<div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant flex flex-col justify-between">
<div class="text-label-xs font-label-xs text-outline uppercase tracking-wider">Composite Mission Risk</div>
<div class="mt-1">
<span class="text-headline-lg font-headline-lg text-secondary">LOW</span>
</div>
<div class="text-label-xs font-label-xs text-on-surface-variant mt-1">BRO Plow Active · Av Hazard L-1</div>
</div>
</section>
<!-- HORIZONTAL SHIPMENT LIFECYCLE PIPELINE TRACKER -->
<section class="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant">
<div class="flex items-center justify-between mb-3">
<div class="text-label-xs font-label-xs uppercase tracking-wider font-bold text-outline">
            SORTIE LIFECYCLE AUDIT PIPELINE
          </div>
<div class="text-label-xs font-label-xs text-on-surface-variant font-mono">
            DISPATCH GATE: LEH LOGISTICS DEPOT II
          </div>
</div>
<div class="grid grid-cols-6 gap-2 relative">
<!-- Step 1 -->
<div class="flex flex-col gap-1 p-2 rounded bg-surface-container border-l-2 border-secondary">
<div class="flex items-center justify-between text-label-xs font-label-xs font-bold text-secondary">
<span>1. DRAFT</span>
<span class="material-symbols-outlined text-[14px]">check_circle</span>
</div>
<div class="text-label-sm font-label-sm font-mono text-on-surface">11:42 IST</div>
<div class="text-label-xs font-label-xs text-on-surface-variant">Req. Generated</div>
</div>
<!-- Step 2 -->
<div class="flex flex-col gap-1 p-2 rounded bg-surface-container border-l-2 border-secondary">
<div class="flex items-center justify-between text-label-xs font-label-xs font-bold text-secondary">
<span>2. PLANNED</span>
<span class="material-symbols-outlined text-[14px]">check_circle</span>
</div>
<div class="text-label-sm font-label-sm font-mono text-on-surface">11:48 IST</div>
<div class="text-label-xs font-label-xs text-on-surface-variant">QM HQ Order</div>
</div>
<!-- Step 3 -->
<div class="flex flex-col gap-1 p-2 rounded bg-surface-container border-l-2 border-secondary">
<div class="flex items-center justify-between text-label-xs font-label-xs font-bold text-secondary">
<span>3. ASSIGNED</span>
<span class="material-symbols-outlined text-[14px]">check_circle</span>
</div>
<div class="text-label-sm font-label-sm font-mono text-on-surface">11:55 IST</div>
<div class="text-label-xs font-label-xs text-on-surface-variant">VH-0087 / Seal #9a8</div>
</div>
<!-- Step 4 -->
<div class="flex flex-col gap-1 p-2 rounded bg-surface-container border-l-2 border-secondary">
<div class="flex items-center justify-between text-label-xs font-label-xs font-bold text-secondary">
<span>4. DISPATCHED</span>
<span class="material-symbols-outlined text-[14px]">check_circle</span>
</div>
<div class="text-label-sm font-label-sm font-mono text-on-surface">12:05 IST</div>
<div class="text-label-xs font-label-xs text-on-surface-variant">Depot Outpost</div>
</div>
<!-- Step 5 (ACTIVE) -->
<div class="flex flex-col gap-1 p-2 rounded bg-secondary-fixed text-on-secondary-fixed border-l-4 border-secondary shadow-sm">
<div class="flex items-center justify-between text-label-xs font-label-xs font-bold text-on-secondary-fixed">
<span class="flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span> 5. IN TRANSIT
              </span>
<span class="text-label-xs font-label-xs font-bold">KM 96/184</span>
</div>
<div class="text-label-sm font-label-sm font-mono font-bold text-on-secondary-fixed">12:07 IST SORTIED</div>
<div class="text-label-xs font-label-xs font-semibold text-on-secondary-fixed/80">Khangral CP Pinged</div>
</div>
<!-- Step 6 -->
<div class="flex flex-col gap-1 p-2 rounded bg-surface-container-high/60 border-l-2 border-outline-variant opacity-80">
<div class="flex items-center justify-between text-label-xs font-label-xs font-bold text-outline">
<span>6. HANDOVER</span>
<span class="material-symbols-outlined text-[14px]">pending</span>
</div>
<div class="text-label-sm font-label-sm font-mono text-on-surface-variant">14:35 IST (ETA)</div>
<div class="text-label-xs font-label-xs text-on-surface-variant">Forward Post Alpha</div>
</div>
</div>
</section>
<!-- TWO-COLUMN OPERATIONAL WORKSPACE GRID -->
<div class="grid grid-cols-12 gap-6 items-start">
<!-- LEFT WORKSPACE COLUMN (~62% -> col-span-12 lg:col-span-7 xl:col-span-8) -->
<div class="col-span-12 lg:col-span-7 xl:col-span-8 flex flex-col gap-5">
<!-- 1. TACTICAL ROUTE TRACKING & GIS MAP -->
<div class="bg-surface-container-lowest rounded-lg border border-outline-variant overflow-hidden">
<div class="p-3.5 border-b border-outline-variant flex items-center justify-between bg-surface-container-low">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[20px]">explore</span>
<span class="text-label-md font-label-md font-semibold text-primary uppercase tracking-wide">
                  Tactical Route Telemetry — Corridor RTE-018
                </span>
<span class="text-label-xs font-label-xs font-mono px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                  LEH-BODHKHARBU-KHANGRAL AXIS
                </span>
</div>
<div class="flex items-center gap-1.5">
<button class="px-2 py-1 text-label-xs font-label-xs uppercase font-medium bg-surface-container-lowest border border-outline-variant rounded hover:bg-surface-container">Fit Route</button>
<button class="px-2 py-1 text-label-xs font-label-xs uppercase font-medium bg-surface-container-lowest border border-outline-variant rounded hover:bg-surface-container">Elevation Profile</button>
<button class="px-2 py-1 text-label-xs font-label-xs uppercase font-medium bg-surface-container-lowest border border-outline-variant rounded hover:bg-surface-container">Corridor Layers</button>
</div>
</div>
<!-- Stylized Tactical GIS Visualizer -->
<div class="relative bg-primary-container p-4 h-[240px] flex flex-col justify-between overflow-hidden select-none">
<!-- Grid overlay pattern -->
<div class="absolute inset-0 opacity-15" style="background-image: radial-gradient(#d6e7d8 1px, transparent 1px); background-size: 16px 16px;"></div>
<!-- Top Telemetry Status within GIS -->
<div class="relative z-10 flex items-center justify-between text-on-primary text-label-xs font-label-xs font-mono">
<div class="flex items-center gap-3">
<span class="px-2 py-0.5 rounded bg-surface-variant/20 border border-outline/50 flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
<span>IRNSS TRANSIT LOCK: VH-0087</span>
</span>
<span>ALT: 3,420M MSL</span>
<span>SURFACE: PACKED SNOW (CHAINS ON)</span>
</div>
<div class="flex items-center gap-2">
<span class="px-1.5 py-0.5 rounded bg-surface-variant/20 border border-outline/50 text-[#C49A45]">BRO SNOW-PLOW ACTIVE AT KM 118</span>
</div>
</div>
<!-- Route Vector Graphic (Mechanical Tactical Render) -->
<div class="relative z-10 my-auto px-4">
<!-- Track Line -->
<div class="relative h-2 w-full bg-surface-variant/30 rounded-full overflow-hidden flex">
<!-- Completed segment (96 km / 184 km = ~52%) -->
<div class="h-full bg-secondary-fixed w-[52%] relative">
<div class="absolute inset-0 bg-secondary opacity-40"></div>
</div>
<!-- Remaining segment -->
<div class="h-full bg-outline/40 w-[48%] border-l border-dashed border-on-primary"></div>
</div>
<!-- Checkpoint Nodes -->
<div class="relative w-full flex justify-between mt-2 text-label-xs font-label-xs font-mono text-on-primary-container">
<!-- Node 0 -->
<div class="flex flex-col items-start">
<span class="w-2.5 h-2.5 rounded-full bg-secondary-fixed border-2 border-primary-container -mt-4.5 mb-1"></span>
<span class="text-on-primary font-semibold">DEP-0002</span>
<span>KM 0 (Leh Depot)</span>
</div>
<!-- Node 1 -->
<div class="flex flex-col items-center">
<span class="w-2.5 h-2.5 rounded-full bg-secondary-fixed border-2 border-primary-container -mt-4.5 mb-1"></span>
<span class="text-on-primary font-semibold">Bodhkharbu</span>
<span>KM 42</span>
</div>
<!-- Node 2 (ACTIVE CURRENT POSITION) -->
<div class="flex flex-col items-center -ml-8">
<div class="relative -mt-6 mb-1 flex items-center justify-center">
<span class="absolute w-5 h-5 rounded-full bg-secondary-fixed/30 animate-ping"></span>
<span class="w-4 h-4 rounded-full bg-secondary-fixed border-2 border-primary flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[10px]">local_shipping</span>
</span>
</div>
<span class="text-secondary-fixed font-bold bg-secondary/80 px-1 rounded">VH-0087 (KM 96)</span>
<span class="text-on-primary font-medium">Khangral CP</span>
</div>
<!-- Node 3 -->
<div class="flex flex-col items-center">
<span class="w-2.5 h-2.5 rounded-full bg-outline border-2 border-primary-container -mt-4.5 mb-1"></span>
<span class="text-on-primary font-semibold">Fotu La Pass</span>
<span class="text-[#C49A45]">KM 124 (Hazard L-1)</span>
</div>
<!-- Destination -->
<div class="flex flex-col items-end">
<span class="w-2.5 h-2.5 rounded-full bg-error border-2 border-primary-container -mt-4.5 mb-1"></span>
<span class="text-on-primary font-semibold">LOC-0042</span>
<span class="text-error-container">KM 184 (Fwd Alpha)</span>
</div>
</div>
</div>
<!-- Map Footer Live Data Strip -->
<div class="relative z-10 flex items-center justify-between text-label-xs font-label-xs font-mono text-on-primary-container pt-2 border-t border-outline/30">
<div>SPEED: 42 KM/H (AVG NOMINAL)</div>
<div>CLIMB RATE: +140 M/HR</div>
<div>NEXT COMM-CHECK: FOTU LA PASS (T-18 MIN)</div>
<div>WIND: 32 KTS SSW // TEMP: -18°C</div>
</div>
</div>
<!-- Route Metrics Bar Below Map -->
<div class="p-3 bg-surface-container grid grid-cols-2 md:grid-cols-6 gap-2 text-center text-label-xs font-label-xs border-t border-outline-variant">
<div>
<span class="text-outline uppercase block">Total Distance</span>
<span class="font-mono text-body-sm font-semibold text-on-surface">184 km</span>
</div>
<div>
<span class="text-outline uppercase block">Completed</span>
<span class="font-mono text-body-sm font-semibold text-secondary">96 km (52%)</span>
</div>
<div>
<span class="text-outline uppercase block">Remaining</span>
<span class="font-mono text-body-sm font-semibold text-on-surface">88 km (48%)</span>
</div>
<div>
<span class="text-outline uppercase block">Average Velocity</span>
<span class="font-mono text-body-sm font-semibold text-on-surface">42 km/h</span>
</div>
<div>
<span class="text-outline uppercase block">Next Waypoint</span>
<span class="font-mono text-body-sm font-semibold text-primary">Fotu La (KM 124)</span>
</div>
<div>
<span class="text-outline uppercase block">Road Condition</span>
<span class="font-mono text-body-sm font-semibold text-secondary">Packed Snow</span>
</div>
</div>
</div>
<!-- 2. CARGO MANIFEST & DESTINATION REQUIREMENT LEDGER -->
<div class="bg-surface-container-lowest rounded-lg border border-outline-variant p-4 flex flex-col gap-4">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[20px]">inventory</span>
<h3 class="text-headline-sm font-headline-sm text-primary">Cargo Manifest &amp; Destination Requirement Ledger</h3>
</div>
<span class="text-label-xs font-label-xs font-mono uppercase text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
                CLASS III POL + CLASS I STORES
              </span>
</div>
<!-- Manifest Data Table -->
<div class="border border-outline-variant rounded overflow-hidden">
<table class="w-full text-left text-body-sm font-body-sm">
<thead class="bg-surface-container text-label-xs font-label-xs uppercase text-primary border-b border-outline-variant">
<tr>
<th class="py-2 px-3">Item Description</th>
<th class="py-2 px-2">NATO Class</th>
<th class="py-2 px-2 text-right">Quantity</th>
<th class="py-2 px-2 text-right">Gross Wt</th>
<th class="py-2 px-3">Handling Protocol</th>
<th class="py-2 px-3">Packaging / Containment</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/60 font-mono text-label-sm font-label-sm">
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2 px-3 font-semibold text-primary">Arctic Diesel (Polar Cetane 50)</td>
<td class="py-2 px-2 text-on-surface-variant">Class III (POL)</td>
<td class="py-2 px-2 text-right font-bold text-primary">5,000 L</td>
<td class="py-2 px-2 text-right">5.0 MT</td>
<td class="py-2 px-3 text-secondary font-semibold">Sub-Zero Anti-Freeze Additive</td>
<td class="py-2 px-3 text-on-surface-variant">Heated Tanker Bladder Blk-A</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2 px-3 font-semibold text-primary">High-Altitude Ration Packs (HAR-P)</td>
<td class="py-2 px-2 text-on-surface-variant">Class I (Sub)</td>
<td class="py-2 px-2 text-right font-bold text-primary">400 Kits</td>
<td class="py-2 px-2 text-right">0.8 MT</td>
<td class="py-2 px-3 text-on-surface-variant">Moisture Shield Sealed</td>
<td class="py-2 px-3 text-on-surface-variant">Heavy Poly Crated Pallets</td>
</tr>
</tbody>
</table>
</div>
<!-- Destination Stockout Telemetry Card -->
<div class="p-3.5 bg-surface-container-low rounded border border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2">
<span class="text-label-xs font-label-xs font-bold uppercase text-error tracking-wider">
                    CRITICAL DESTINATION STATUS: FORWARD POST ALPHA (LOC-0042)
                  </span>
<span class="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
</div>
<div class="text-body-sm font-body-sm text-on-surface">
                  Current On-Hand Fuel: <span class="font-bold text-primary">4,200 L</span> | Daily Velocity: <span class="font-bold text-error">680 L/day (+18% winter surge)</span> | Safety Floor: <span class="font-bold">2,000 L</span>
</div>
<div class="text-label-xs font-label-xs text-on-surface-variant">
                  Projected stockout without this sortie: <span class="text-error font-bold font-mono">11 OCT 2026 (T-6 days to critical reserve breach)</span>
</div>
</div>
<div class="flex items-center gap-2">
<a class="px-2.5 py-1.5 rounded text-label-xs font-label-xs uppercase font-medium bg-surface-container-lowest border border-outline-variant hover:bg-surface-container transition-colors" href="#">
                  Location (RL-09)
                </a>
<a class="px-2.5 py-1.5 rounded text-label-xs font-label-xs uppercase font-medium bg-surface-container-lowest border border-outline-variant hover:bg-surface-container transition-colors" href="#">
                  Runway (RL-14)
                </a>
</div>
</div>
</div>
<!-- 3. DESTINATION INVENTORY IMPACT RUNWAY (BEFORE VS AFTER) -->
<div class="bg-surface-container-lowest rounded-lg border border-outline-variant p-4 flex flex-col gap-3">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[20px]">stacked_bar_chart</span>
<h3 class="text-headline-sm font-headline-sm text-primary">Destination Inventory Impact Runway (Before vs After Handover)</h3>
</div>
<span class="text-label-xs font-label-xs text-secondary font-semibold uppercase">Stockout Averted: +7.7 Days Safe Margin</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
<!-- Before Handover Box -->
<div class="p-3 rounded border border-outline-variant bg-surface-container-low flex flex-col gap-2">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs uppercase font-bold text-on-surface-variant">Current Pre-Handover Posture</span>
<span class="text-label-xs font-label-xs font-mono text-error font-bold">5.8 DAYS RUNWAY</span>
</div>
<div class="text-headline-sm font-headline-sm text-primary font-mono">4,200 L</div>
<!-- Visual Bar Pre -->
<div class="w-full bg-outline-variant h-3 rounded-full overflow-hidden flex">
<div class="bg-error h-full w-[28%]" title="Safety reserve 2,000L"></div>
<div class="bg-[#C49A45] h-full w-[28%]" title="Operating buffer 2,200L"></div>
</div>
<div class="flex justify-between text-label-xs font-label-xs text-on-surface-variant">
<span>Safety Threshold: 2,000 L</span>
<span>Exhaustion: 11 Oct 2026</span>
</div>
</div>
<!-- After Handover Box -->
<div class="p-3 rounded border border-secondary bg-secondary-fixed/20 flex flex-col gap-2">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs uppercase font-bold text-secondary">Projected Post-Handover Posture</span>
<span class="text-label-xs font-label-xs font-mono text-secondary font-bold">13.5 DAYS RUNWAY (+7.7 D)</span>
</div>
<div class="text-headline-sm font-headline-sm text-primary font-mono">9,200 L <span class="text-body-sm font-body-sm text-secondary font-normal">(+5,000 L Replenished)</span></div>
<!-- Visual Bar Post -->
<div class="w-full bg-outline-variant h-3 rounded-full overflow-hidden flex">
<div class="bg-secondary-container h-full w-[22%]"></div>
<div class="bg-secondary h-full w-[78%]"></div>
</div>
<div class="flex justify-between text-label-xs font-label-xs text-secondary font-semibold">
<span>Safety Threshold Protected</span>
<span>Exhaustion Extended: 18 Oct 2026</span>
</div>
</div>
</div>
</div>
<!-- 4. PLANNING ALTERNATIVES & COMPARATIVE DECISION MATRIX -->
<div class="bg-surface-container-lowest rounded-lg border border-outline-variant p-4 flex flex-col gap-3">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[20px]">alt_route</span>
<h3 class="text-headline-sm font-headline-sm text-primary">Planning Alternatives &amp; Comparative Matrix</h3>
</div>
<button class="px-2.5 py-1 rounded text-label-xs font-label-xs uppercase font-semibold border border-outline-variant bg-surface-container hover:bg-surface-container-high transition-colors">
                Apply Alternative Configuration
              </button>
</div>
<div class="border border-outline-variant rounded overflow-hidden">
<table class="w-full text-left text-body-sm font-body-sm">
<thead class="bg-surface-container text-label-xs font-label-xs uppercase text-primary border-b border-outline-variant">
<tr>
<th class="py-2 px-3">Sortie Scenario</th>
<th class="py-2 px-2">Assigned Transport</th>
<th class="py-2 px-2">Tactical Route</th>
<th class="py-2 px-2 text-right">ETA</th>
<th class="py-2 px-2 text-right">Load %</th>
<th class="py-2 px-2 text-center">Risk Vector</th>
<th class="py-2 px-3 text-right">Status / Evaluation</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/60 font-mono text-label-sm font-label-sm">
<!-- Row 1: Active Recommended -->
<tr class="bg-secondary-fixed/20 font-semibold">
<td class="py-2.5 px-3 text-primary flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span>Plan OP-A (Current)</span>
</td>
<td class="py-2.5 px-2 text-on-surface">VH-0087 (Stallion)</td>
<td class="py-2.5 px-2 text-on-surface">RTE-018 (Leh-Khangral)</td>
<td class="py-2.5 px-2 text-right text-secondary">14:35 IST</td>
<td class="py-2.5 px-2 text-right">72.5%</td>
<td class="py-2.5 px-2 text-center text-secondary font-bold">LOW (92% Rel)</td>
<td class="py-2.5 px-3 text-right">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs uppercase font-bold bg-secondary text-on-secondary">
                        ACTIVE · OPTIMAL
                      </span>
</td>
</tr>
<!-- Row 2: Alternative Vehicle -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2.5 px-3 text-on-surface">Alt 1 (Heavy Unit)</td>
<td class="py-2.5 px-2 text-on-surface-variant">VH-0091 (Tatra 8x8)</td>
<td class="py-2.5 px-2 text-on-surface-variant">RTE-018</td>
<td class="py-2.5 px-2 text-right text-on-surface">15:10 IST</td>
<td class="py-2.5 px-2 text-right">81.0%</td>
<td class="py-2.5 px-2 text-center text-secondary">LOW</td>
<td class="py-2.5 px-3 text-right text-error text-label-xs font-label-xs font-bold">
                      EXCEEDS 15:00 CUTOFF
                    </td>
</tr>
<!-- Row 3: Alternative Route -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2.5 px-3 text-on-surface">Alt 2 (Bypass Axis)</td>
<td class="py-2.5 px-2 text-on-surface-variant">VH-0087</td>
<td class="py-2.5 px-2 text-on-surface-variant">RTE-021 (Zojila Bypass)</td>
<td class="py-2.5 px-2 text-right text-on-surface">14:50 IST</td>
<td class="py-2.5 px-2 text-right">72.5%</td>
<td class="py-2.5 px-2 text-center text-[#7A5B18] font-bold">MEDIUM (Icing)</td>
<td class="py-2.5 px-3 text-right text-label-xs font-label-xs text-on-surface-variant">
                      FEASIBLE WITH DELAY RISK
                    </td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<!-- RIGHT WORKSPACE COLUMN (~38% -> col-span-12 lg:col-span-5 xl:col-span-4) -->
<div class="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col gap-5">
<!-- 1. TACTICAL DECISION RECOMMENDATION & GOVERNANCE -->
<div class="bg-surface-container-lowest rounded-lg border-2 border-secondary p-4 flex flex-col gap-3">
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-secondary text-[20px]">military_tech</span>
<span class="text-label-xs font-label-xs font-bold uppercase tracking-wider text-secondary">
                  TACTICAL GOVERNANCE DECISION
                </span>
</div>
<span class="text-label-xs font-label-xs font-mono px-2 py-0.5 rounded bg-secondary text-on-secondary font-bold">
                94% CONFIDENCE
              </span>
</div>
<div>
<div class="text-headline-sm font-headline-sm text-primary font-bold">
                CONTINUE CURRENT SORTIE PLAN
              </div>
<p class="text-body-sm font-body-sm text-on-surface-variant mt-1">
                Supported by DemandModel v2.4, IRNSS telemetry vector, and BRO pass clearance. ETA satisfies critical 15:00 IST cutoff.
              </p>
</div>
<!-- Evidence Checklist -->
<div class="flex flex-col gap-1.5 text-label-xs font-label-xs font-mono bg-surface-container-low p-2.5 rounded border border-outline-variant">
<div class="flex items-center gap-2 text-secondary font-semibold">
<span class="material-symbols-outlined text-[16px]">check</span>
<span>Vehicle VH-0087: 89% Readiness (Zero Engine Faults)</span>
</div>
<div class="flex items-center gap-2 text-secondary font-semibold">
<span class="material-symbols-outlined text-[16px]">check</span>
<span>Corridor RTE-018: 92% Reliability · BRO Active</span>
</div>
<div class="flex items-center gap-2 text-secondary font-semibold">
<span class="material-symbols-outlined text-[16px]">check</span>
<span>Axle &amp; Weight Loads within high-altitude margins</span>
</div>
<div class="flex items-center gap-2 text-secondary font-semibold">
<span class="material-symbols-outlined text-[16px]">check</span>
<span>Estimated Arrival 14:35 IST (&lt; 15:00 IST Hard Floor)</span>
</div>
</div>
<div class="flex flex-col gap-2 pt-1">
<button class="w-full py-2 px-3 rounded text-label-sm font-label-sm uppercase font-bold bg-secondary text-on-secondary hover:bg-primary-container transition-colors flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-[16px]">verified</span>
<span>Confirm &amp; Maintain Sortie Plan</span>
</button>
<button class="w-full py-1.5 px-3 rounded text-label-xs font-label-xs uppercase font-semibold bg-surface-container text-on-surface border border-outline-variant hover:bg-surface-container-high transition-colors">
                Initiate Plan Modification
              </button>
</div>
</div>
<!-- 2. VEHICLE ASSIGNMENT DOSSIER (VH-0087) -->
<div class="bg-surface-container-lowest rounded-lg border border-outline-variant p-4 flex flex-col gap-3">
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[20px]">local_shipping</span>
<h3 class="text-label-md font-label-md font-bold text-primary uppercase">Vehicle Assignment Dossier</h3>
</div>
<span class="text-label-xs font-label-xs font-mono text-secondary font-bold">89% OPERATIONAL</span>
</div>
<div class="flex items-start justify-between">
<div>
<div class="text-body-md font-body-md font-bold text-primary">VH-0087</div>
<div class="text-label-xs font-label-xs text-on-surface-variant">Ashok Leyland Stallion (Medium Cargo 4x4)</div>
</div>
<div class="text-right">
<div class="text-label-sm font-label-sm font-mono font-semibold text-primary">FUEL: 68%</div>
<div class="text-label-xs font-label-xs text-on-surface-variant">340 km Combat Range</div>
</div>
</div>
<!-- Mechanical Specifications -->
<div class="grid grid-cols-2 gap-2 text-label-xs font-label-xs bg-surface-container p-2.5 rounded border border-outline-variant font-mono">
<div>
<span class="text-outline uppercase block">Engine Hours</span>
<span class="font-semibold text-on-surface">1,420 Hrs</span>
</div>
<div>
<span class="text-outline uppercase block">Maintenance</span>
<span class="font-semibold text-secondary">Next in 42 Hrs</span>
</div>
<div>
<span class="text-outline uppercase block">Front Axle Cert</span>
<span class="font-semibold text-on-surface">2.4 t / 3.0 t (OK)</span>
</div>
<div>
<span class="text-outline uppercase block">Rear Axle Cert</span>
<span class="font-semibold text-on-surface">5.4 t / 6.5 t (OK)</span>
</div>
</div>
<div class="flex items-center justify-between pt-1">
<a class="text-label-xs font-label-xs uppercase font-semibold text-secondary hover:underline" href="#">
                View Vehicle Telemetry (RL-23) →
              </a>
<a class="text-label-xs font-label-xs uppercase text-on-surface-variant hover:underline" href="#">
                Reassign Unit
              </a>
</div>
</div>
<!-- 3. TACTICAL CORRIDOR & RISK ASSESSMENT (RTE-018) -->
<div class="bg-surface-container-lowest rounded-lg border border-outline-variant p-4 flex flex-col gap-3">
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[20px]">traffic</span>
<h3 class="text-label-md font-label-md font-bold text-primary uppercase">Corridor Risk Breakdown</h3>
</div>
<span class="text-label-xs font-label-xs font-mono text-secondary font-bold">92% RELIABILITY</span>
</div>
<!-- Risk Factors List -->
<div class="flex flex-col gap-2 text-label-xs font-label-xs">
<div class="flex items-center justify-between">
<span class="text-on-surface">Route Surface Stability:</span>
<span class="font-mono text-secondary font-bold">NOMINAL (Packed Snow)</span>
</div>
<div class="flex items-center justify-between">
<span class="text-on-surface">Pass Elevation Hazard:</span>
<span class="font-mono text-[#7A5B18] font-bold">LEVEL-1 (Fotu La)</span>
</div>
<div class="flex items-center justify-between">
<span class="text-on-surface">Weather / Met Office:</span>
<span class="font-mono text-on-surface">-18°C · Moderate Flurries</span>
</div>
<div class="flex items-center justify-between">
<span class="text-on-surface">Destination Fuel Urgency:</span>
<span class="font-mono text-error font-bold">CRITICAL STOCKOUT RISK</span>
</div>
</div>
<div class="pt-2 border-t border-outline-variant flex items-center justify-between">
<a class="text-label-xs font-label-xs uppercase font-semibold text-secondary hover:underline" href="#">
                Open Route Intel (RL-26) →
              </a>
<button class="text-label-xs font-label-xs uppercase text-on-surface-variant hover:text-primary">
                Recalculate Vector
              </button>
</div>
</div>
<!-- 4. DATA FRESHNESS & SENSOR INTEGRITY STRIP -->
<div class="bg-surface-container rounded-lg border border-outline-variant p-3 flex flex-col gap-2">
<div class="text-label-xs font-label-xs font-bold uppercase tracking-wider text-outline">
              Telemetry Freshness &amp; Sensor Integrity
            </div>
<div class="grid grid-cols-2 gap-2 text-label-xs font-label-xs font-mono">
<div class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span class="text-on-surface-variant">Vehicle:</span>
<span class="text-on-surface font-semibold">2m ago</span>
</div>
<div class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span class="text-on-surface-variant">Route:</span>
<span class="text-on-surface font-semibold">6m ago</span>
</div>
<div class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span class="text-on-surface-variant">Inventory:</span>
<span class="text-on-surface font-semibold">5m ago</span>
</div>
<div class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span class="text-on-surface-variant">Met Office:</span>
<span class="text-on-surface font-semibold">21m ago</span>
</div>
</div>
</div>
<!-- 5. CRYPTOGRAPHIC MIL-SPEC AUDIT LOG TIMELINE -->
<div class="bg-surface-container-lowest rounded-lg border border-outline-variant p-4 flex flex-col gap-3">
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[20px]">history</span>
<h3 class="text-label-md font-label-md font-bold text-primary uppercase">Hardened Sortie Audit</h3>
</div>
<span class="text-label-xs font-label-xs font-mono text-outline uppercase">SHA-256</span>
</div>
<div class="flex flex-col gap-2 font-mono text-label-xs font-label-xs relative pl-4 border-l border-outline-variant ml-1">
<!-- Log 1 -->
<div class="relative">
<span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-secondary border-2 border-surface-container-lowest"></span>
<div class="text-primary font-bold">13:20 IST</div>
<div class="text-on-surface-variant">Checkpoint Khangral transponder ping validated (KM 96).</div>
</div>
<!-- Log 2 -->
<div class="relative">
<span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-outline border-2 border-surface-container-lowest"></span>
<div class="text-primary font-bold">12:48 IST</div>
<div class="text-on-surface-variant">Elevation climb confirmed: 3,200m MSL, tyre chains engaged.</div>
</div>
<!-- Log 3 -->
<div class="relative">
<span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-outline border-2 border-surface-container-lowest"></span>
<div class="text-primary font-bold">12:05 IST</div>
<div class="text-on-surface-variant">Dispatched from Central Supply Depot Gate 2.</div>
</div>
<!-- Log 4 -->
<div class="relative">
<span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-outline border-2 border-surface-container-lowest"></span>
<div class="text-primary font-bold">11:55 IST</div>
<div class="text-on-surface-variant">Vehicle VH-0087 assigned &amp; seal #9a88f verified.</div>
</div>
<!-- Log 5 -->
<div class="relative">
<span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-outline border-2 border-surface-container-lowest"></span>
<div class="text-primary font-bold">11:42 IST</div>
<div class="text-on-surface-variant">Requisition generated from stockout alert LOC-0042.</div>
</div>
</div>
<div class="pt-2 border-t border-outline-variant text-right">
<a class="text-label-xs font-label-xs uppercase font-semibold text-secondary hover:underline" href="#">
                View Full Hardened Audit Log (RL-38) →
              </a>
</div>
</div>
</div>
</div>
</main>`;
