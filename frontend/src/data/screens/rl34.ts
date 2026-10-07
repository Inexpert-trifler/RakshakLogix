// Screen: RL-34 — Simulation Results // SIM-0084
// Route: /simulations/SIM-0084/results
export const rl34Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto p-6 min-h-[calc(100vh-3.5rem)] flex flex-col gap-6">
<!-- 2. RESULTS HEADER & EXECUTION METADATA -->
<section class="bg-surface-container-lowest p-5 rounded border border-outline-variant flex flex-col gap-4">
<div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
<div>
<div class="flex items-center gap-3">
<h1 class="font-headline-lg text-headline-lg font-bold text-primary tracking-tight">SIM-0084 — Fuel Demand Surge</h1>
<span class="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container border border-secondary font-label-xs text-label-xs uppercase font-bold flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
              SIMULATION COMPLETED (100%)
            </span>
</div>
<div class="font-body-md text-body-md text-on-surface-variant mt-1 flex items-center gap-2">
<span class="font-semibold text-on-surface">Forward Post Alpha (LOC-0042)</span>
<span>·</span>
<span>Combined Multi-Domain Logistics Simulation</span>
<span>·</span>
<span class="font-mono-code text-[11px] text-outline">HASH: 8F2A-LEH-04</span>
</div>
</div>
<!-- Action Strip -->
<div class="flex flex-wrap items-center gap-2">
<button class="h-9 px-3.5 bg-primary-container text-on-primary hover:bg-secondary font-label-md text-label-md font-semibold rounded flex items-center gap-2 border border-primary shadow-sm transition-colors duration-150">
<span class="material-symbols-outlined text-[18px]">verified</span>
<span>Review Recommendations</span>
</button>
<button class="h-9 px-3 bg-surface-container text-on-surface hover:bg-surface-container-highest border border-outline-variant font-label-md text-label-md font-medium rounded flex items-center gap-1.5">
<span class="material-symbols-outlined text-[16px]">compare_arrows</span>
<span>Compare Scenarios</span>
</button>
<button class="h-9 px-3 bg-surface-container text-on-surface hover:bg-surface-container-highest border border-outline-variant font-label-md text-label-md font-medium rounded flex items-center gap-1.5">
<span class="material-symbols-outlined text-[16px]">replay</span>
<span>Re-run Scenario</span>
</button>
<button class="h-9 px-3 bg-surface-container text-on-surface hover:bg-surface-container-highest border border-outline-variant font-label-md text-label-md font-medium rounded flex items-center gap-1.5">
<span class="material-symbols-outlined text-[16px]">open_in_new</span>
<span>Open Workspace (RL-33)</span>
</button>
<button class="h-9 px-2.5 bg-surface-container text-on-surface hover:bg-surface-container-highest border border-outline-variant rounded" title="Export PDF/CSV">
<span class="material-symbols-outlined text-[18px]">file_download</span>
</button>
</div>
</div>
<!-- Execution Telemetry Strip -->
<div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 pt-3 border-t border-outline-variant font-mono-code text-[11px] text-on-surface-variant">
<div class="bg-surface-container-low p-2 rounded border border-outline-variant">
<div class="text-[10px] text-outline font-semibold uppercase">Horizon</div>
<div class="text-on-surface font-bold">7 Days (09–16 Oct 2026)</div>
</div>
<div class="bg-surface-container-low p-2 rounded border border-outline-variant">
<div class="text-[10px] text-outline font-semibold uppercase">Baseline Model</div>
<div class="text-on-surface font-bold">DL-04 Current Network</div>
</div>
<div class="bg-surface-container-low p-2 rounded border border-outline-variant">
<div class="text-[10px] text-outline font-semibold uppercase">Iterations / Runtime</div>
<div class="text-on-surface font-bold">10,000 runs · 02m 48s</div>
</div>
<div class="bg-surface-container-low p-2 rounded border border-outline-variant">
<div class="text-[10px] text-outline font-semibold uppercase">Confidence Score</div>
<div class="text-on-surface font-bold text-secondary">89% (High Fidelity)</div>
</div>
<div class="bg-surface-container-low p-2 rounded border border-outline-variant">
<div class="text-[10px] text-outline font-semibold uppercase">Timestamp</div>
<div class="text-on-surface font-bold">07 Oct 2026 · 14:32 IST</div>
</div>
<div class="bg-surface-container-low p-2 rounded border border-outline-variant">
<div class="text-[10px] text-outline font-semibold uppercase">Telemetry Readiness</div>
<div class="text-on-surface font-bold">92% Validated (L4)</div>
</div>
</div>
</section>
<!-- 3. EXECUTIVE IMPACT SUMMARY & OPERATIONAL CALLOUT -->
<section class="flex flex-col gap-3">
<!-- Operational Directive Callout (Styled inspired by image mandate card) -->
<div class="bg-primary-container text-on-primary p-4 rounded border border-secondary flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div class="flex items-start gap-3">
<div class="p-2 rounded bg-tertiary-container border border-outline text-secondary-fixed">
<span class="material-symbols-outlined text-[24px]">crisis_alert</span>
</div>
<div>
<div class="font-label-xs text-label-xs tracking-wider uppercase text-inverse-primary font-mono-code font-bold">DIRECTIVE // APX-8012 — NORTHERN COMMAND SYNTHESIS</div>
<p class="font-body-md text-body-md text-on-primary mt-1 leading-snug">
              Under sustained <span class="font-bold text-secondary-fixed">+25% cold-weather turbine demand (+170 L/day)</span>, Forward Post Alpha breaches inviolable safety stock (2,000 L) on <span class="font-bold underline text-error-container">Day 5 (14 Oct)</span> and faces terminal stockout on Day 6 (15 Oct). Secondary sort pressure on Fotu La Pass (RTE-018) increases convoy delay risk to 27%.
            </p>
</div>
</div>
<div class="flex-shrink-0">
<span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold border border-error">
<span class="material-symbols-outlined text-[16px]">warning</span>
            CRITICAL INTERVENTION MANDATED
          </span>
</div>
</div>
<!-- 6-Metric High-Density Operational KPI Strip -->
<div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
<!-- Metric 1: Stockout Probability -->
<div class="bg-surface-container-lowest p-3.5 rounded border border-error bg-error-container/10 flex flex-col justify-between">
<div class="font-label-xs text-label-xs text-on-surface-variant uppercase font-semibold">Stockout Probability</div>
<div class="my-1.5 flex items-baseline justify-between">
<span class="font-headline-lg text-headline-lg font-bold text-error mono-num">74.0%</span>
<span class="font-label-xs text-label-xs text-error font-mono-code font-bold">▲ +56 pp</span>
</div>
<div class="text-[11px] font-mono-code text-on-surface-variant flex items-center justify-between">
<span>Base: 18.0%</span>
<span class="text-error font-bold">CRITICAL</span>
</div>
</div>
<!-- Metric 2: Replenishment Deficit -->
<div class="bg-surface-container-lowest p-3.5 rounded border border-outline-variant flex flex-col justify-between">
<div class="font-label-xs text-label-xs text-on-surface-variant uppercase font-semibold">Net Deficit (Safety Buffer)</div>
<div class="my-1.5 flex items-baseline justify-between">
<span class="font-headline-lg text-headline-lg font-bold text-primary mono-num">+2,500 L</span>
<span class="font-label-xs text-label-xs text-error font-mono-code font-bold">HIGH</span>
</div>
<div class="text-[11px] font-mono-code text-on-surface-variant flex items-center justify-between">
<span>Floor: 2,000 L</span>
<span class="text-on-surface font-semibold">URGENT</span>
</div>
</div>
<!-- Metric 3: Fleet Capacity Utilization -->
<div class="bg-surface-container-lowest p-3.5 rounded border border-outline-variant flex flex-col justify-between">
<div class="font-label-xs text-label-xs text-on-surface-variant uppercase font-semibold">Fleet Utilization</div>
<div class="my-1.5 flex items-baseline justify-between">
<span class="font-headline-lg text-headline-lg font-bold text-on-surface mono-num">81.4%</span>
<span class="font-label-xs text-label-xs text-on-surface-variant font-mono-code font-bold">▲ +9.4 pp</span>
</div>
<div class="text-[11px] font-mono-code text-on-surface-variant flex items-center justify-between">
<span>Base: 72.0%</span>
<span class="text-secondary font-semibold">CONSTRAINED</span>
</div>
</div>
<!-- Metric 4: RTE-018 Corridor Risk -->
<div class="bg-surface-container-lowest p-3.5 rounded border border-outline-variant flex flex-col justify-between">
<div class="font-label-xs text-label-xs text-on-surface-variant uppercase font-semibold">RTE-018 Corridor Risk</div>
<div class="my-1.5 flex items-baseline justify-between">
<span class="font-headline-lg text-headline-lg font-bold text-on-surface">MED (L2)</span>
<span class="font-label-xs text-label-xs text-on-surface-variant font-mono-code font-bold">+1 LEVEL</span>
</div>
<div class="text-[11px] font-mono-code text-on-surface-variant flex items-center justify-between">
<span>Base: Low (L1)</span>
<span class="text-on-surface font-semibold">CHOKE HAZARD</span>
</div>
</div>
<!-- Metric 5: Convoy Delay Risk (>2h) -->
<div class="bg-surface-container-lowest p-3.5 rounded border border-outline-variant flex flex-col justify-between">
<div class="font-label-xs text-label-xs text-on-surface-variant uppercase font-semibold">Convoy Delay Risk (&gt;2h)</div>
<div class="my-1.5 flex items-baseline justify-between">
<span class="font-headline-lg text-headline-lg font-bold text-on-surface mono-num">27.0%</span>
<span class="font-label-xs text-label-xs text-on-surface-variant font-mono-code font-bold">▲ +19 pp</span>
</div>
<div class="text-[11px] font-mono-code text-on-surface-variant flex items-center justify-between">
<span>Base: 8.0%</span>
<span class="text-on-surface font-semibold">WEATHER RISK</span>
</div>
</div>
<!-- Metric 6: Impacted Network Nodes -->
<div class="bg-surface-container-lowest p-3.5 rounded border border-outline-variant flex flex-col justify-between">
<div class="font-label-xs text-label-xs text-on-surface-variant uppercase font-semibold">Impacted Entities</div>
<div class="my-1.5 flex items-baseline justify-between">
<span class="font-headline-lg text-headline-lg font-bold text-primary mono-num">4 NODES</span>
<span class="font-label-xs text-label-xs text-primary font-mono-code font-bold">LINKED</span>
</div>
<div class="text-[11px] font-mono-code text-on-surface-variant flex items-center justify-between">
<span>LOC / RTE / SHP</span>
<span class="text-on-surface font-semibold">SECTOR IV-B</span>
</div>
</div>
</div>
</section>
<!-- 4. BASELINE (DL-04) VS. SIMULATED DELTA MATRIX -->
<section class="bg-surface-container-lowest rounded border border-outline-variant overflow-hidden">
<div class="px-4 py-3 bg-surface-container-low border-b border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">table_chart</span>
<h2 class="font-headline-sm text-headline-sm text-on-surface font-bold">Baseline (DL-04) vs. Simulated Projected Delta</h2>
</div>
<div class="flex items-center gap-2 font-mono-code text-[11px]">
<span class="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant border border-outline-variant">COMPARISON HASH: #CMP-9902</span>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container-high border-b-2 border-secondary font-label-xs text-label-xs text-primary uppercase font-bold tracking-wider">
<th class="py-2.5 px-4">Metric Descriptor</th>
<th class="py-2.5 px-4">Baseline (DL-04)</th>
<th class="py-2.5 px-4">Simulated Projected</th>
<th class="py-2.5 px-4">Net Operational Delta</th>
<th class="py-2.5 px-4">Statistical Confidence</th>
<th class="py-2.5 px-4 text-right">Tactical Severity</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant text-[13px] font-mono-code">
<!-- Row 1 -->
<tr class="hover:bg-surface-container-low transition-colors duration-100">
<td class="py-3 px-4 font-body-md font-semibold text-on-surface">Daily Fuel Consumption Rate</td>
<td class="py-3 px-4 text-on-surface-variant">680 L/day</td>
<td class="py-3 px-4 text-on-surface font-bold">850 L/day</td>
<td class="py-3 px-4 text-on-surface font-semibold">+170 L/day (+25.0%)</td>
<td class="py-3 px-4 text-on-surface-variant">96% (Sensor Mesh)</td>
<td class="py-3 px-4 text-right">
<span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-[10px] font-bold border border-outline-variant">ELEVATED BURN</span>
</td>
</tr>
<!-- Row 2 -->
<tr class="bg-error-container/10 hover:bg-error-container/20 transition-colors duration-100">
<td class="py-3 px-4 font-body-md font-semibold text-error flex items-center gap-1.5">
<span class="material-symbols-outlined text-[16px]">priority_high</span>
                Stockout Probability (Post Alpha)
              </td>
<td class="py-3 px-4 text-on-surface-variant">18.0%</td>
<td class="py-3 px-4 text-error font-bold">74.0%</td>
<td class="py-3 px-4 text-error font-bold">+56.0 pp</td>
<td class="py-3 px-4 text-on-surface-variant">91% (Monte Carlo)</td>
<td class="py-3 px-4 text-right">
<span class="px-2 py-0.5 rounded bg-error-container text-on-error-container text-[10px] font-bold border border-error">CRITICAL BREACH</span>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container-low transition-colors duration-100">
<td class="py-3 px-4 font-body-md font-semibold text-on-surface">Fleet Capacity Utilization</td>
<td class="py-3 px-4 text-on-surface-variant">72.0%</td>
<td class="py-3 px-4 text-on-surface font-bold">81.4%</td>
<td class="py-3 px-4 text-on-surface font-semibold">+9.4 pp</td>
<td class="py-3 px-4 text-on-surface-variant">88% (Divisions)</td>
<td class="py-3 px-4 text-right">
<span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-[10px] font-bold border border-outline-variant">CONSTRAINED</span>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-surface-container-low transition-colors duration-100">
<td class="py-3 px-4 font-body-md font-semibold text-on-surface">RTE-018 Corridor Risk Index</td>
<td class="py-3 px-4 text-on-surface-variant">Low (L1)</td>
<td class="py-3 px-4 text-on-surface font-bold">Medium (L2)</td>
<td class="py-3 px-4 text-on-surface font-semibold">+1 Severity Level</td>
<td class="py-3 px-4 text-on-surface-variant">93% (BRO Survey)</td>
<td class="py-3 px-4 text-right">
<span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-[10px] font-bold border border-outline-variant">MONITOR PASS</span>
</td>
</tr>
<!-- Row 5 -->
<tr class="hover:bg-surface-container-low transition-colors duration-100">
<td class="py-3 px-4 font-body-md font-semibold text-on-surface">Convoy Delay Risk (&gt;2h Delay)</td>
<td class="py-3 px-4 text-on-surface-variant">8.0%</td>
<td class="py-3 px-4 text-on-surface font-bold">27.0%</td>
<td class="py-3 px-4 text-on-surface font-semibold">+19.0 pp</td>
<td class="py-3 px-4 text-on-surface-variant">90% (Met Office)</td>
<td class="py-3 px-4 text-right">
<span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-[10px] font-bold border border-outline-variant">WEATHER RISK</span>
</td>
</tr>
<!-- Row 6 -->
<tr class="hover:bg-surface-container-low transition-colors duration-100">
<td class="py-3 px-4 font-body-md font-semibold text-on-surface">Emergency Replenishment Deficit</td>
<td class="py-3 px-4 text-on-surface-variant">0 Liters</td>
<td class="py-3 px-4 text-error font-bold">2,500 Liters</td>
<td class="py-3 px-4 text-error font-bold">+2,500 L Buffer Gap</td>
<td class="py-3 px-4 text-on-surface-variant">94% (Inventory Sim)</td>
<td class="py-3 px-4 text-right">
<span class="px-2 py-0.5 rounded bg-error-container text-on-error-container text-[10px] font-bold border border-error">IMMEDIATE ACTION</span>
</td>
</tr>
</tbody>
</table>
</div>
</section>
<!-- 5. GIS TACTICAL IMPACT MAP & 7-DAY TIMELINE SCRUBBER (SPLIT VIEW) -->
<section class="grid grid-cols-1 lg:grid-cols-12 gap-6">
<!-- GIS Tactical Map Card (7 Cols) -->
<div class="lg:col-span-7 bg-surface-container-lowest rounded border border-outline-variant flex flex-col justify-between overflow-hidden">
<!-- Card Header -->
<div class="p-3.5 bg-surface-container-low border-b border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">explore</span>
<span class="font-headline-sm text-headline-sm text-on-surface font-bold">Sector IV-B Cartographic Impact Map</span>
</div>
<div class="flex items-center gap-1.5 font-mono-code text-[10px]">
<span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface border border-outline-variant">LEH SUB-COMMAND</span>
<span class="px-2 py-0.5 rounded bg-secondary text-on-secondary font-semibold">GRID: 34.15°N 77.57°E</span>
</div>
</div>
<!-- Map Tactical Surface (Clean Vector Cartography) -->
<div class="relative bg-[#17251C] h-[340px] w-full overflow-hidden p-4 select-none">
<!-- Fine Tactical Grid Background -->
<div class="absolute inset-0 opacity-15" style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 24px 24px;"></div>
<!-- Elevation Contours (Faint SVG) -->
<svg class="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="60%" cy="40%" fill="none" rx="180" ry="120" stroke="#ffffff" stroke-width="1"></ellipse>
<ellipse cx="60%" cy="40%" fill="none" rx="240" ry="170" stroke="#ffffff" stroke-width="0.8"></ellipse>
<ellipse cx="60%" cy="40%" fill="none" rx="300" ry="220" stroke="#ffffff" stroke-width="0.6"></ellipse>
<!-- RTE-018 Corridor Vector Line -->
<path d="M 80 260 L 190 200 L 320 150 L 460 110" fill="none" stroke="#A49A78" stroke-dasharray="4,4" stroke-width="3"></path>
<!-- Alternate Route Vector RTE-021 -->
<path d="M 80 260 L 150 140 L 290 80 L 460 110" fill="none" stroke="#516446" stroke-dasharray="2,2" stroke-width="1.5"></path>
</svg>
<!-- Node 1: Leh Main Depot (DEP-0002) -->
<div class="absolute left-16 bottom-16 flex flex-col items-center">
<div class="w-7 h-7 rounded bg-surface-container-lowest text-primary flex items-center justify-center border-2 border-secondary shadow font-bold text-xs font-mono-code">
              DEP
            </div>
<div class="mt-1 px-1.5 py-0.5 rounded bg-primary-container/90 text-inverse-primary border border-secondary text-[9px] font-mono-code whitespace-nowrap">
              DEP-0002 LEH (94% NOMINAL)
            </div>
</div>
<!-- Node 2: Bodhkharbu Staging Hub -->
<div class="absolute left-[36%] bottom-[42%] flex flex-col items-center">
<div class="w-6 h-6 rounded bg-secondary-container text-on-secondary-container flex items-center justify-center border border-secondary text-xs">
<span class="material-symbols-outlined text-[14px]">warehouse</span>
</div>
<div class="mt-1 px-1 py-0.5 rounded bg-primary-container/90 text-on-primary-container text-[8px] font-mono-code whitespace-nowrap">
              BODHKHARBU HUB
            </div>
</div>
<!-- Node 3: Fotu La Pass (Chokepoint) -->
<div class="absolute left-[58%] top-[34%] flex flex-col items-center">
<div class="w-6 h-6 rounded-full bg-error-container text-on-error-container flex items-center justify-center border border-error animate-pulse">
<span class="material-symbols-outlined text-[14px]">terrain</span>
</div>
<div class="mt-1 px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface text-[9px] font-mono-code font-bold shadow whitespace-nowrap">
              FOTU LA (4,108m) // 86% SATURATED
            </div>
</div>
<!-- Node 4: Forward Post Alpha (LOC-0042) [CRITICAL] -->
<div class="absolute right-12 top-14 flex flex-col items-center">
<div class="relative">
<div class="w-9 h-9 rounded bg-error text-on-error flex items-center justify-center border-2 border-surface-container-lowest shadow-lg">
<span class="material-symbols-outlined text-[18px]">emergency</span>
</div>
<span class="absolute -top-1 -right-1 flex h-3 w-3">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
<span class="relative inline-flex rounded-full h-3 w-3 bg-error"></span>
</span>
</div>
<div class="mt-1.5 px-2 py-1 rounded bg-error text-on-error text-[10px] font-mono-code font-bold tracking-wider shadow whitespace-nowrap">
              LOC-0042 POST ALPHA (+25% SURGE)
            </div>
</div>
<!-- Active Convoy Telemetry Marker -->
<div class="absolute left-[44%] bottom-[50%] flex items-center gap-1.5 px-2 py-1 rounded bg-primary-container border border-outline text-inverse-on-surface text-[9px] font-mono-code">
<span class="material-symbols-outlined text-[13px] text-secondary-fixed">local_shipping</span>
<span>VH-0087 (ETA: 4h 48m // -6°C)</span>
</div>
<!-- Map Layer Controls Floating Bar -->
<div class="absolute bottom-2 right-2 flex items-center gap-1 bg-surface-container-lowest/90 backdrop-blur p-1 rounded border border-outline-variant font-mono-code text-[9px]">
<span class="px-1.5 py-0.5 rounded bg-primary text-on-primary">All Layers</span>
<span class="px-1.5 py-0.5 rounded text-on-surface hover:bg-surface-container">Routes</span>
<span class="px-1.5 py-0.5 rounded text-on-surface hover:bg-surface-container">Thermal</span>
<span class="px-1.5 py-0.5 rounded text-on-surface hover:bg-surface-container">Terrain</span>
</div>
</div>
<!-- Map Footer Legend -->
<div class="p-3 bg-surface-container border-t border-outline-variant flex flex-wrap items-center justify-between text-[11px] font-mono-code text-on-surface-variant">
<div class="flex items-center gap-4">
<span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-secondary"></span> Nominal Depot</span>
<span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-error"></span> Stockout Risk</span>
<span class="flex items-center gap-1.5"><span class="w-2.5 h-0.5 bg-outline"></span> Axis RTE-018</span>
</div>
<span class="text-on-surface font-semibold">LEH CORRIDOR TELEMETRY: REAL-TIME L4</span>
</div>
</div>
<!-- 7-Day Timeline Scrubber Card (5 Cols) -->
<div class="lg:col-span-5 bg-surface-container-lowest rounded border border-outline-variant flex flex-col justify-between">
<div class="p-3.5 bg-surface-container-low border-b border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">timeline</span>
<span class="font-headline-sm text-headline-sm text-on-surface font-bold">7-Day Simulation Trajectory</span>
</div>
<span class="font-mono-code text-[11px] text-on-surface-variant">HORIZON: 09–16 OCT</span>
</div>
<!-- Scrubber List & Interactivity -->
<div class="p-4 flex flex-col gap-2.5 font-mono-code text-[12px] custom-scrollbar max-h-[340px] overflow-y-auto">
<!-- Day 0 -->
<div class="p-2 rounded bg-surface-container-low border border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="w-6 h-6 rounded bg-surface-container-high flex items-center justify-center font-bold text-[10px]">D0</span>
<span class="text-on-surface font-semibold">09 Oct · Baseline Normal</span>
</div>
<span class="text-on-surface-variant">Stock: 6,800 L</span>
</div>
<!-- Day 1 -->
<div class="p-2 rounded bg-surface-container-low border border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="w-6 h-6 rounded bg-surface-container-high flex items-center justify-center font-bold text-[10px]">D1</span>
<span class="text-on-surface font-semibold">10 Oct · Demand Surge Starts (+25%)</span>
</div>
<span class="text-on-surface-variant">Burn: 850 L/d</span>
</div>
<!-- Day 2 -->
<div class="p-2 rounded bg-surface-container-low border border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="w-6 h-6 rounded bg-surface-container-high flex items-center justify-center font-bold text-[10px]">D2</span>
<span class="text-on-surface font-semibold">11 Oct · Thermal Demand Sustained</span>
</div>
<span class="text-on-surface-variant">Stock: 5,100 L</span>
</div>
<!-- Day 3 -->
<div class="p-2 rounded bg-surface-container-low border border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="w-6 h-6 rounded bg-surface-container-high flex items-center justify-center font-bold text-[10px]">D3</span>
<span class="text-on-surface font-semibold">12 Oct · Reserve Erosion Notice</span>
</div>
<span class="text-on-surface-variant">Stock: 4,250 L</span>
</div>
<!-- Day 4 -->
<div class="p-2 rounded bg-surface-container border border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="w-6 h-6 rounded bg-surface-container-highest text-on-surface flex items-center justify-center font-bold text-[10px]">D4</span>
<span class="text-on-surface font-semibold">13 Oct · Floor Warning Threshold</span>
</div>
<span class="text-on-surface font-bold">Stock: 3,400 L</span>
</div>
<!-- Day 5: Critical Breach -->
<div class="p-2.5 rounded bg-error-container/20 border-2 border-error flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="w-6 h-6 rounded bg-error text-on-error flex items-center justify-center font-bold text-[10px]">D5</span>
<div>
<span class="text-error font-bold block leading-none">14 Oct · Inviolable Floor Breached</span>
<span class="text-[10px] text-on-surface-variant">Safety threshold of 2,000 L violated</span>
</div>
</div>
<span class="text-error font-bold">Stock: 1,850 L</span>
</div>
<!-- Day 6: Terminal Stockout -->
<div class="p-2.5 rounded bg-error text-on-error flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="w-6 h-6 rounded bg-surface-container-lowest text-error flex items-center justify-center font-bold text-[10px]">D6</span>
<div>
<span class="font-bold block leading-none">15 Oct · Terminal Stockout</span>
<span class="text-[10px] text-inverse-on-surface opacity-80">Turbine fuel depleted to 0 L</span>
</div>
</div>
<span class="font-bold text-inverse-primary">DEFICIT: 2,500 L</span>
</div>
</div>
<div class="p-3 bg-surface-container border-t border-outline-variant text-[11px] font-mono-code text-on-surface-variant flex items-center justify-between">
<span>RUNWAY DEPLETION VELOCITY: -850 L/D</span>
<span class="text-error font-bold">SAFE RUNWAY: 4.8 DAYS</span>
</div>
</div>
</section>
<!-- 6. ANALYTICAL DEEP DIVES (4-CARD BALANCED BENTO GRID) -->
<section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
<!-- Panel A: Inventory Impact Analysis -->
<div class="bg-surface-container-lowest p-4 rounded border border-outline-variant flex flex-col justify-between">
<div>
<div class="flex items-center justify-between pb-2 border-b border-outline-variant">
<span class="font-label-sm text-label-sm uppercase font-bold text-primary">A // Inventory Runway</span>
<span class="material-symbols-outlined text-secondary text-[18px]">show_chart</span>
</div>
<div class="my-3">
<div class="flex items-baseline justify-between font-mono-code">
<span class="text-[11px] text-outline">Simulated vs Baseline</span>
<span class="text-error text-xs font-bold">-2,500 L Gap</span>
</div>
<!-- Visual CSS bar chart representation -->
<div class="mt-2 flex flex-col gap-1.5 font-mono-code text-[11px]">
<div>
<div class="flex justify-between text-[10px] mb-0.5"><span>Baseline (680 L/d)</span><span>Runway: 10d</span></div>
<div class="w-full bg-surface-container-high h-2 rounded">
<div class="bg-secondary h-2 rounded" style="width: 85%;"></div>
</div>
</div>
<div>
<div class="flex justify-between text-[10px] mb-0.5 text-error font-bold"><span>Surge (+25% / 850 L/d)</span><span>Runway: 4.8d</span></div>
<div class="w-full bg-surface-container-high h-2 rounded">
<div class="bg-error h-2 rounded" style="width: 48%;"></div>
</div>
</div>
<div class="pt-2 text-[10px] text-on-surface-variant border-t border-outline-variant">
                Safety stock floor is set at exactly 2,000 Liters (MIL-STD cold weather reserve).
              </div>
</div>
</div>
</div>
<div class="p-2 rounded bg-surface-container-low font-mono-code text-[11px] text-on-surface">
          Intersection point: <strong class="text-error">14 Oct 11:20 IST</strong>
</div>
</div>
<!-- Panel B: Transport & Fleet Pressure -->
<div class="bg-surface-container-lowest p-4 rounded border border-outline-variant flex flex-col justify-between">
<div>
<div class="flex items-center justify-between pb-2 border-b border-outline-variant">
<span class="font-label-sm text-label-sm uppercase font-bold text-primary">B // Fleet &amp; Transport</span>
<span class="material-symbols-outlined text-secondary text-[18px]">local_shipping</span>
</div>
<div class="my-3 font-mono-code text-[12px] flex flex-col gap-2">
<div class="flex justify-between">
<span class="text-on-surface-variant">Total Fleet Active:</span>
<span class="font-bold text-on-surface">34 Vehicles</span>
</div>
<div class="flex justify-between">
<span class="text-on-surface-variant">Capacity In Use:</span>
<span class="font-bold text-on-surface">81.4% (+9.4 pp)</span>
</div>
<div class="flex justify-between">
<span class="text-on-surface-variant">Available Reserve Tonnage:</span>
<span class="font-bold text-on-surface">196 t (down from 214 t)</span>
</div>
<div class="flex justify-between text-secondary">
<span>Required Sortie:</span>
<span class="font-bold">SMP-2062 (3 Bowsers)</span>
</div>
</div>
</div>
<div class="p-2 rounded bg-surface-container-low font-mono-code text-[11px] text-on-surface">
          Dispatch Station: <strong>Bodhkharbu Hub</strong>
</div>
</div>
<!-- Panel C: Route Corridor RTE-018 Saturation -->
<div class="bg-surface-container-lowest p-4 rounded border border-outline-variant flex flex-col justify-between">
<div>
<div class="flex items-center justify-between pb-2 border-b border-outline-variant">
<span class="font-label-sm text-label-sm uppercase font-bold text-primary">C // Corridor RTE-018</span>
<span class="material-symbols-outlined text-secondary text-[18px]">traffic</span>
</div>
<div class="my-3 font-mono-code text-[12px] flex flex-col gap-2">
<div class="flex justify-between">
<span class="text-on-surface-variant">Transit Window:</span>
<span class="font-bold text-on-surface">4h 48m (+38 min)</span>
</div>
<div class="flex justify-between">
<span class="text-on-surface-variant">Pass Elevation:</span>
<span class="font-bold text-on-surface">4,108 m MSL</span>
</div>
<div class="flex justify-between">
<span class="text-on-surface-variant">Pass Reliability:</span>
<span class="font-bold text-on-surface">86.0% (Base: 92%)</span>
</div>
<div class="flex justify-between text-on-surface-variant">
<span>Clearance Duty:</span>
<span class="font-bold">BRO 14TF Detachment</span>
</div>
</div>
</div>
<div class="p-2 rounded bg-surface-container-low font-mono-code text-[11px] text-on-surface">
          Critical Hazard: <strong>Snow Drifts at Km 72</strong>
</div>
</div>
<!-- Panel D: Projected Risk Decomposition -->
<div class="bg-surface-container-lowest p-4 rounded border border-outline-variant flex flex-col justify-between">
<div>
<div class="flex items-center justify-between pb-2 border-b border-outline-variant">
<span class="font-label-sm text-label-sm uppercase font-bold text-primary">D // Risk Decomposition</span>
<span class="material-symbols-outlined text-secondary text-[18px]">assessment</span>
</div>
<div class="my-3 font-mono-code text-[11px] flex flex-col gap-1.5">
<div class="flex justify-between">
<span>Fuel Stockout (LOC-0042):</span>
<span class="text-error font-bold">74%</span>
</div>
<div class="flex justify-between">
<span>Transit Delay (&gt;2h):</span>
<span class="font-bold text-on-surface">27%</span>
</div>
<div class="flex justify-between">
<span>Corridor Severance:</span>
<span class="font-bold text-on-surface">12%</span>
</div>
<div class="flex justify-between">
<span>Overall Network Risk:</span>
<span class="font-bold text-secondary">64/100 (MODERATE)</span>
</div>
</div>
</div>
<div class="p-2 rounded bg-surface-container-low font-mono-code text-[11px] text-on-surface">
          Threat Vector: <strong>Thermal Runaway Burn</strong>
</div>
</div>
</section>
<!-- 7. IMPACT PROPAGATION CHAIN & AFFECTED OPERATIONS -->
<section class="bg-surface-container-lowest p-5 rounded border border-outline-variant flex flex-col gap-4">
<div class="flex items-center justify-between border-b border-outline-variant pb-3">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">account_tree</span>
<h2 class="font-headline-sm text-headline-sm text-on-surface font-bold">Causal Impact Propagation Chain</h2>
</div>
<span class="font-mono-code text-[11px] text-on-surface-variant">DETERMINISTIC SIMULATION LINKAGE</span>
</div>
<!-- Visual Causal Graph Nodes -->
<div class="grid grid-cols-1 md:grid-cols-5 gap-2 items-center font-mono-code text-[11px]">
<!-- Node 1 -->
<div class="p-3 rounded bg-surface-container-low border border-outline-variant">
<div class="text-[9px] text-outline font-bold">TRIGGER EVENT</div>
<div class="font-bold text-on-surface mt-0.5">Surge +25%</div>
<div class="text-[10px] text-on-surface-variant">Cold wave (-14°C)</div>
</div>
<!-- Connector -->
<div class="hidden md:flex justify-center text-outline-variant">
<span class="material-symbols-outlined">arrow_forward</span>
</div>
<!-- Node 2 -->
<div class="p-3 rounded bg-surface-container-low border border-outline-variant">
<div class="text-[9px] text-outline font-bold">CONSUMPTION</div>
<div class="font-bold text-on-surface mt-0.5">850 L/day Burn</div>
<div class="text-[10px] text-on-surface-variant">+170 L micro-turbine</div>
</div>
<!-- Connector -->
<div class="hidden md:flex justify-center text-outline-variant">
<span class="material-symbols-outlined">arrow_forward</span>
</div>
<!-- Node 3 (Critical breach) -->
<div class="p-3 rounded bg-error-container/20 border border-error">
<div class="text-[9px] text-error font-bold">SAFETY BREACH</div>
<div class="font-bold text-error mt-0.5">Day 5 Floor Breach</div>
<div class="text-[10px] text-on-error-container">2,000 L floor broken</div>
</div>
</div>
<!-- Affected Operations Ledger Table -->
<div class="mt-2 overflow-x-auto">
<table class="w-full text-left border-collapse font-mono-code text-[12px]">
<thead>
<tr class="bg-surface-container border-b border-outline-variant text-[11px] text-on-surface font-bold uppercase">
<th class="py-2 px-3">Entity Code</th>
<th class="py-2 px-3">Entity Type</th>
<th class="py-2 px-3">Operational Impact</th>
<th class="py-2 px-3">Severity</th>
<th class="py-2 px-3 text-right">Inspection Action</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<tr>
<td class="py-2.5 px-3 font-bold text-on-surface">LOC-0042 (Post Alpha)</td>
<td class="py-2.5 px-3 text-on-surface-variant">Forward Base Facility</td>
<td class="py-2.5 px-3 text-error font-bold">2,500 L Fuel Deficit by D6</td>
<td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded bg-error text-on-error text-[10px] font-bold">CRITICAL</span></td>
<td class="py-2.5 px-3 text-right">
<button class="text-primary font-bold underline hover:text-secondary">View Location</button>
</td>
</tr>
<tr>
<td class="py-2.5 px-3 font-bold text-on-surface">RTE-018 (Leh-Bodhkharbu)</td>
<td class="py-2.5 px-3 text-on-surface-variant">High-Altitude Corridor</td>
<td class="py-2.5 px-3 text-on-surface">Pass Saturated (86%), +38m transit delay</td>
<td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-[10px] font-bold border border-outline-variant">MEDIUM</span></td>
<td class="py-2.5 px-3 text-right">
<button class="text-primary font-bold underline hover:text-secondary">View Route</button>
</td>
</tr>
<tr>
<td class="py-2.5 px-3 font-bold text-on-surface">SHP-2048</td>
<td class="py-2.5 px-3 text-on-surface-variant">Scheduled Supply Sortie</td>
<td class="py-2.5 px-3 text-on-surface">Arrival pushed back from 14:30 to 18:05 IST</td>
<td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-[10px] font-bold border border-outline-variant">ELEVATED</span></td>
<td class="py-2.5 px-3 text-right">
<button class="text-primary font-bold underline hover:text-secondary">View Shipment</button>
</td>
</tr>
<tr>
<td class="py-2.5 px-3 font-bold text-on-surface">VH-0087 (Fleet Div-04)</td>
<td class="py-2.5 px-3 text-on-surface-variant">Stallion 4x4 Heavy Bowser</td>
<td class="py-2.5 px-3 text-on-surface">Operating at 91% continuous engine duty</td>
<td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-[10px] font-bold border border-outline-variant">MONITOR</span></td>
<td class="py-2.5 px-3 text-right">
<button class="text-primary font-bold underline hover:text-secondary">View Vehicle</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
<!-- 8. SCENARIO SENSITIVITY ANALYSIS ('WHAT CHANGES THE OUTCOME?') -->
<section class="bg-surface-container-lowest rounded border border-outline-variant overflow-hidden">
<div class="p-3.5 bg-surface-container-low border-b border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">tune</span>
<h2 class="font-headline-sm text-headline-sm text-on-surface font-bold">Sensitivity Analysis — Parameter Swing Matrix</h2>
</div>
<span class="font-mono-code text-[11px] text-on-surface-variant">ELASTICITY CO-EFFICIENT EVALUATION</span>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse font-mono-code text-[12px]">
<thead>
<tr class="bg-surface-container-high border-b border-outline-variant font-label-xs text-label-xs text-primary uppercase font-bold">
<th class="py-2.5 px-4">Parameter Name</th>
<th class="py-2.5 px-4">Current Value</th>
<th class="py-2.5 px-4">Downside Swing (-Δ)</th>
<th class="py-2.5 px-4">Upside Swing (+Δ)</th>
<th class="py-2.5 px-4 text-right">Elasticity Rating</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<tr>
<td class="py-3 px-4 font-bold text-on-surface">Demand Surge Variance</td>
<td class="py-3 px-4 text-primary font-bold">+25%</td>
<td class="py-3 px-4 text-secondary">+15% (Stockout Risk: 38%)</td>
<td class="py-3 px-4 text-error font-bold">+35% (Stockout Risk: 91%)</td>
<td class="py-3 px-4 text-right">
<span class="px-2 py-0.5 rounded bg-error-container text-on-error-container font-bold text-[10px]">HIGH IMPACT (Dominant)</span>
</td>
</tr>
<tr>
<td class="py-3 px-4 font-bold text-on-surface">Replenishment Volume</td>
<td class="py-3 px-4 text-primary font-bold">2,500 L</td>
<td class="py-3 px-4 text-on-surface-variant">1,500 L (Stockout Risk: 52%)</td>
<td class="py-3 px-4 text-secondary font-bold">4,000 L (Stockout Risk: 11%)</td>
<td class="py-3 px-4 text-right">
<span class="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold text-[10px]">HIGH MITIGATING POWER</span>
</td>
</tr>
<tr>
<td class="py-3 px-4 font-bold text-on-surface">Fleet Availability Factor</td>
<td class="py-3 px-4 text-primary font-bold">-10%</td>
<td class="py-3 px-4 text-error">-20% (Stockout Risk: 84%)</td>
<td class="py-3 px-4 text-on-surface-variant">0% Nominal (Risk: 68%)</td>
<td class="py-3 px-4 text-right">
<span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-bold text-[10px] border border-outline-variant">MEDIUM IMPACT</span>
</td>
</tr>
<tr>
<td class="py-3 px-4 font-bold text-on-surface">BRO Snow Clearing Delay</td>
<td class="py-3 px-4 text-primary font-bold">+38 min</td>
<td class="py-3 px-4 text-on-surface-variant">+15 min (Stockout Risk: 69%)</td>
<td class="py-3 px-4 text-error">+75 min (Stockout Risk: 88%)</td>
<td class="py-3 px-4 text-right">
<span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-bold text-[10px] border border-outline-variant">MEDIUM IMPACT</span>
</td>
</tr>
</tbody>
</table>
</div>
</section>
<!-- 9. PRESCRIPTIVE RECOMMENDED MITIGATIONS & MULTI-OPTION COMPARISON -->
<section class="flex flex-col gap-4">
<!-- Primary Recommended Response Banner -->
<div class="bg-surface-container-lowest p-5 rounded border-2 border-secondary flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
<div class="flex items-start gap-3.5">
<div class="w-10 h-10 rounded bg-secondary text-on-secondary flex items-center justify-center font-bold">
<span class="material-symbols-outlined text-[24px]">recommend</span>
</div>
<div>
<div class="flex items-center gap-2">
<span class="font-label-xs text-label-xs uppercase font-bold px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container">PRIMARY LOGISTICAL RESPONSE</span>
<span class="font-mono-code text-[11px] text-on-surface-variant">SORTIE CODE: SHP-2062</span>
</div>
<h3 class="font-headline-sm text-headline-sm font-bold text-primary mt-1">Authorize Secondary Reserve Sortie SHP-2062 (+2,500 L Arctic Diesel)</h3>
<p class="font-body-md text-body-md text-on-surface-variant mt-1">
              Dispatch 3x Stallion heavy bowsers from <strong class="text-on-surface">Bodhkharbu Hub (DEP-0002)</strong> at 06:00 IST via RTE-018. Reduces stockout probability from <span class="line-through text-error font-mono-code">74%</span> to <strong class="text-secondary font-mono-code">21%</strong> (or 14% with BRO snowplow escort) and extends safety runway to 18.5 days.
            </p>
</div>
</div>
<button class="h-10 px-4 bg-primary-container text-on-primary hover:bg-secondary rounded font-label-md text-label-md font-bold flex items-center gap-2 border border-secondary shadow transition-colors duration-150 whitespace-nowrap">
<span class="material-symbols-outlined text-[18px]">verified_user</span>
<span>Execute Sortie SHP-2062</span>
</button>
</div>
<!-- Trade-Off Decision Matrix (4 Options) -->
<div class="bg-surface-container-lowest rounded border border-outline-variant overflow-hidden">
<div class="p-3 bg-surface-container-low border-b border-outline-variant flex items-center justify-between font-mono-code text-[11px]">
<span class="font-bold text-on-surface">MULTI-OPTION MITIGATION TRADE-OFF EVALUATION</span>
<span class="text-outline">DECISION HORIZON: 24 HOURS</span>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse font-mono-code text-[12px]">
<thead>
<tr class="bg-surface-container-high border-b border-outline-variant font-label-xs text-label-xs text-primary uppercase font-bold">
<th class="py-2.5 px-3">Option ID &amp; Strategy</th>
<th class="py-2.5 px-3">Stockout Risk</th>
<th class="py-2.5 px-3">Fleet Util.</th>
<th class="py-2.5 px-3">Corridor Risk</th>
<th class="py-2.5 px-3">Convoy Delay</th>
<th class="py-2.5 px-3">Resource Effort</th>
<th class="py-2.5 px-3 text-right">Viability Status</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<!-- Option 1 -->
<tr class="bg-error-container/10">
<td class="py-3 px-3 font-bold text-error">Option 1: No Action (Status Quo)</td>
<td class="py-3 px-3 font-bold text-error">74.0% (Critical)</td>
<td class="py-3 px-3">81.4%</td>
<td class="py-3 px-3">Medium (L2)</td>
<td class="py-3 px-3 text-error">27.0%</td>
<td class="py-3 px-3">Zero (No cost)</td>
<td class="py-3 px-3 text-right">
<span class="px-2 py-0.5 rounded bg-error text-on-error font-bold text-[10px]">UNACCEPTABLE</span>
</td>
</tr>
<!-- Option 2 (Recommended) -->
<tr class="bg-secondary-container/20">
<td class="py-3 px-3 font-bold text-primary flex items-center gap-1.5">
<span class="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                  Option 2: Resupply +2,500 L Sortie
                </td>
<td class="py-3 px-3 font-bold text-secondary">21.0% (Low)</td>
<td class="py-3 px-3">84.2%</td>
<td class="py-3 px-3">Low (L1)</td>
<td class="py-3 px-3 text-secondary">12.0%</td>
<td class="py-3 px-3">Medium (3 Bowsers)</td>
<td class="py-3 px-3 text-right">
<span class="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold text-[10px] border border-secondary">RECOMMENDED</span>
</td>
</tr>
<!-- Option 3 -->
<tr>
<td class="py-3 px-3 font-bold text-on-surface">Option 3: Alternate Route RTE-021</td>
<td class="py-3 px-3 font-bold text-on-surface">43.0% (Moderate)</td>
<td class="py-3 px-3">82.0%</td>
<td class="py-3 px-3">Low (L1)</td>
<td class="py-3 px-3">15.0%</td>
<td class="py-3 px-3">Low (+18m transit)</td>
<td class="py-3 px-3 text-right">
<span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-bold text-[10px] border border-outline-variant">CONTINGENCY</span>
</td>
</tr>
<!-- Option 4 -->
<tr>
<td class="py-3 px-3 font-bold text-on-surface">Option 4: Combined Resupply + BRO Escort</td>
<td class="py-3 px-3 font-bold text-secondary">12.0% (Minimal)</td>
<td class="py-3 px-3">86.0%</td>
<td class="py-3 px-3">Low (L1)</td>
<td class="py-3 px-3 text-secondary">8.0%</td>
<td class="py-3 px-3">High (3 Bowsers + 1 Snowplow)</td>
<td class="py-3 px-3 text-right">
<span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-bold text-[10px] border border-outline-variant">OPTIMAL RESERVE</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
<!-- 10. HUMAN-IN-THE-LOOP DECISION & GOVERNANCE GATE -->
<section class="bg-surface-container-lowest p-5 rounded border border-outline-variant flex flex-col gap-4">
<div class="flex items-center justify-between border-b border-outline-variant pb-3">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">gavel</span>
<h2 class="font-headline-sm text-headline-sm text-on-surface font-bold">Quartermaster Governance &amp; Sign-Off Gate</h2>
</div>
<div class="flex items-center gap-2 font-mono-code text-[11px]">
<span class="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant border border-outline-variant">MANDATE: MIL-STD-810G</span>
<span class="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold">DEF-ENC L4 VERIFIED</span>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
<!-- Disclaimer & Authority Note (7 cols) -->
<div class="lg:col-span-7 flex flex-col gap-2">
<div class="font-label-xs text-label-xs tracking-wider uppercase text-on-surface-variant font-mono-code font-bold">DECISION PENDING // FORMAL OPERATIONAL SIGN-OFF</div>
<p class="font-body-md text-body-md text-on-surface">
            Simulation outputs represent high-fidelity algorithmic decision support. Actual convoy deployment, ordnance rerouting, or fuel redistribution requires formal electronic cryptographic token signing by the designated Quartermaster or Operations Commander.
          </p>
<div class="font-mono-code text-[11px] text-on-surface-variant mt-1 flex flex-wrap gap-4">
<span>Overall Model Confidence: <strong class="text-on-surface">89%</strong></span>
<span>Telemetry Age: <strong class="text-on-surface">12m 40s</strong></span>
<span>Audit Trail: <strong class="text-on-surface">14:32:10 IST // Ops Planning</strong></span>
</div>
</div>
<!-- Electronic Signature Controls (5 cols) -->
<div class="lg:col-span-5 flex flex-col gap-2.5 bg-surface-container-low p-4 rounded border border-outline-variant">
<button class="w-full h-10 px-4 bg-primary-container text-on-primary hover:bg-secondary rounded font-label-md text-label-md font-bold flex items-center justify-center gap-2 border border-primary shadow transition-colors duration-150">
<span class="material-symbols-outlined text-[18px]">verified</span>
<span>Approve &amp; Execute Resupply (DISP-9921)</span>
</button>
<div class="grid grid-cols-3 gap-2">
<button class="h-8 px-2 bg-surface-container-lowest text-on-surface hover:bg-surface-container-high border border-outline-variant rounded font-mono-code text-[11px] font-semibold">
              Branch What-If
            </button>
<button class="h-8 px-2 bg-surface-container-lowest text-on-surface hover:bg-surface-container-high border border-outline-variant rounded font-mono-code text-[11px] font-semibold">
              Save Benchmark
            </button>
<button class="h-8 px-2 bg-surface-container-lowest text-on-surface hover:bg-surface-container-high border border-outline-variant rounded font-mono-code text-[11px] font-semibold">
              Export Dossier
            </button>
</div>
</div>
</div>
</section>
<!-- 11. DEFENSE COMPLIANCE FOOTER -->
<footer class="pt-4 pb-6 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-3 font-mono-code text-[10px] text-on-surface-variant">
<div class="flex items-center gap-3">
<span class="font-bold text-primary">SECURITY CLASSIFICATION: SECRET // RESTRICTED DEFENCE HQ</span>
<span>•</span>
<span>SYSTEM RUN ID: SIM-0084-RESULTS</span>
</div>
<div class="flex items-center gap-3">
<span>MIL-STD-188F INTEROPERABLE</span>
<span>•</span>
<span>AES-256 GCM</span>
<span>•</span>
<span class="font-bold text-primary">RAKSHAKLOGIX RL-34</span>
</div>
</footer>
</main>`;
