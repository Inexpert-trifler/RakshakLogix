// Screen: RL-07 — Alerts & Risk Center
// Route: /alerts
export const rl07Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto flex-1 flex flex-col p-6 space-y-4">
<!-- Operational Context Bar / Directive Banner -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-3 flex flex-wrap items-center justify-between gap-4 shadow-sm">
<div class="flex items-center gap-3">
<span class="px-2 py-0.5 bg-primary-container text-on-primary text-label-xs font-label-xs rounded font-mono">SECTOR IV-B DIRECTIVE</span>
<p class="text-body-sm text-on-surface-variant max-w-3xl">
<span class="font-semibold text-on-surface">OPERATIONAL MANDATE:</span> Integrated logistical lifecycle orchestration for forward depots, ration cold-chains, ordnance readiness, and active transit convoys across high-altitude and strategic border commands.
        </p>
</div>
<div class="flex items-center gap-2">
<span class="text-label-xs font-label-xs uppercase text-on-surface-variant">AUTO-SYNC (30S):</span>
<span class="font-mono text-label-sm font-semibold text-secondary">ACTIVE 14:30:12 IST</span>
</div>
</div>
<!-- 3. Risk Summary Strip & 7-Day Trend -->
<section class="grid grid-cols-1 xl:grid-cols-12 gap-4">
<!-- Metrics Strip (7 Columns) -->
<div class="xl:col-span-8 bg-surface-container-lowest border border-outline-variant rounded p-3.5 flex flex-wrap items-center justify-between gap-3 shadow-sm">
<!-- Metric: Critical -->
<div class="flex items-center gap-3 min-w-[120px] pr-4 border-r border-outline-variant">
<div class="w-8 h-8 rounded bg-[#8C2D19]/10 border border-[#8C2D19]/30 flex items-center justify-center text-[#8C2D19]">
<span class="material-symbols-outlined text-lg" data-icon="error">error</span>
</div>
<div>
<div class="text-label-xs font-label-xs text-on-surface-variant uppercase tracking-wider">CRITICAL</div>
<div class="text-headline-lg font-headline-lg font-bold text-[#8C2D19] leading-none">03</div>
</div>
</div>
<!-- Metric: High -->
<div class="flex items-center gap-3 min-w-[120px] pr-4 border-r border-outline-variant">
<div class="w-8 h-8 rounded bg-[#C49A45]/15 border border-[#C49A45]/40 flex items-center justify-center text-[#7A5B18]">
<span class="material-symbols-outlined text-lg" data-icon="warning">warning</span>
</div>
<div>
<div class="text-label-xs font-label-xs text-on-surface-variant uppercase tracking-wider">HIGH RISK</div>
<div class="text-headline-lg font-headline-lg font-bold text-[#7A5B18] leading-none">08</div>
</div>
</div>
<!-- Metric: Medium -->
<div class="flex items-center gap-3 min-w-[120px] pr-4 border-r border-outline-variant">
<div class="w-8 h-8 rounded bg-surface-container border border-outline flex items-center justify-center text-on-surface-variant">
<span class="material-symbols-outlined text-lg" data-icon="info">info</span>
</div>
<div>
<div class="text-label-xs font-label-xs text-on-surface-variant uppercase tracking-wider">MEDIUM</div>
<div class="text-headline-lg font-headline-lg font-bold text-on-surface leading-none">17</div>
</div>
</div>
<!-- Metric: Resolved -->
<div class="flex items-center gap-3 min-w-[130px] pr-4 border-r border-outline-variant">
<div class="w-8 h-8 rounded bg-secondary-container/60 border border-secondary/40 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-lg" data-icon="check_circle">check_circle</span>
</div>
<div>
<div class="text-label-xs font-label-xs text-on-surface-variant uppercase tracking-wider">RESOLVED 24H</div>
<div class="text-headline-lg font-headline-lg font-bold text-secondary leading-none">24</div>
</div>
</div>
<!-- Metric: Total Active -->
<div class="flex items-center gap-3 min-w-[110px]">
<div>
<div class="text-label-xs font-label-xs text-on-surface-variant uppercase tracking-wider">TOTAL ACTIVE</div>
<div class="text-headline-lg font-headline-lg font-bold text-primary font-mono leading-none">28</div>
</div>
</div>
</div>
<!-- 7-Day Risk Trend Sparkline Container (4 Columns) -->
<div class="xl:col-span-4 bg-surface-container-lowest border border-outline-variant rounded p-3 flex items-center justify-between shadow-sm">
<div class="flex-1 pr-3">
<div class="flex items-center justify-between mb-1">
<span class="text-label-xs font-label-xs uppercase tracking-wider text-on-surface-variant">7-DAY RISK VELOCITY</span>
<span class="text-[10px] font-mono text-secondary font-bold">↓ 12% STABILIZING</span>
</div>
<div class="text-body-sm font-semibold text-primary">Critical: 3 <span class="text-on-surface-variant font-normal font-mono text-[11px]">(Down from 7 on Day -4)</span></div>
<!-- Compact Trendline SVG Sparkline -->
<div class="mt-2 h-7 w-full">
<svg class="w-full h-full" fill="none" preserveaspectratio="none" viewbox="0 0 200 30">
<!-- Active Risks Path (Muted Olive) -->
<path d="M0,24 Q30,22 60,18 T120,12 T160,15 T200,9" fill="none" stroke="#A49A78" stroke-dasharray="2 2" stroke-width="1.5"></path>
<!-- Critical Risks Path (Red Alert) -->
<path d="M0,18 Q30,10 60,22 T120,16 T160,8 T200,5" fill="none" stroke="#8C2D19" stroke-width="2"></path>
<!-- Marker dot for current day -->
<circle cx="200" cy="5" fill="#8C2D19" r="3"></circle>
</svg>
</div>
</div>
<div class="border-l border-outline-variant pl-3 text-right">
<span class="text-[9px] font-mono uppercase text-on-surface-variant block">CONFIDENCE</span>
<span class="text-body-sm font-bold font-mono text-primary">89.4%</span>
<span class="text-[9px] font-mono text-secondary block mt-1">LSTM RUN #41</span>
</div>
</div>
</section>
<!-- ======================================================== -->
<!-- 4. MAIN OPERATIONAL WORKSPACE (TWO-COLUMN BENTO)         -->
<!-- ======================================================== -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 items-start">
<!-- ====================================================== -->
<!-- LEFT COLUMN: ACTIVE RISK QUEUE (65-70% / 8 cols)       -->
<!-- ====================================================== -->
<section class="lg:col-span-7 xl:col-span-8 flex flex-col bg-surface-container-lowest border border-outline-variant rounded shadow-sm">
<!-- Filter Toolbar & Search -->
<div class="p-3 border-b border-outline-variant space-y-2.5">
<div class="flex flex-wrap items-center justify-between gap-2">
<!-- Quick Search Input -->
<div class="relative flex-1 min-w-[240px]">
<span class="material-symbols-outlined absolute left-2.5 top-2 text-on-surface-variant text-sm" data-icon="search">search</span>
<input class="w-full pl-8 pr-3 py-1.5 bg-background border border-outline-variant rounded text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-0 placeholder:text-outline text-xs" placeholder="Search risks by location, cargo, route, ID (e.g. Forward Post Alpha, POL)..." type="text"/>
</div>
<!-- Operational Bulk Actions Bar -->
<div class="flex items-center gap-1.5">
<button class="px-2.5 py-1.5 rounded bg-surface-container border border-outline-variant hover:bg-surface-container-high text-label-xs font-label-xs uppercase text-on-surface transition-colors">
                Acknowledge All
              </button>
<button class="px-2.5 py-1.5 rounded bg-surface-container border border-outline-variant hover:bg-surface-container-high text-label-xs font-label-xs uppercase text-on-surface transition-colors flex items-center gap-1">
<span class="material-symbols-outlined text-xs" data-icon="filter_list">filter_list</span>
<span>Filters</span>
</button>
</div>
</div>
<!-- Multi-tier Filter Tags -->
<div class="flex flex-wrap items-center gap-1.5 text-xs">
<span class="text-label-xs font-label-xs uppercase text-on-surface-variant pr-1">SEVERITY:</span>
<button class="px-2 py-0.5 rounded bg-primary text-on-primary font-semibold text-[11px]">All (28)</button>
<button class="px-2 py-0.5 rounded bg-[#8C2D19]/10 text-[#8C2D19] border border-[#8C2D19]/30 font-semibold text-[11px] hover:bg-[#8C2D19]/20">Critical (3)</button>
<button class="px-2 py-0.5 rounded bg-[#C49A45]/15 text-[#7A5B18] border border-[#C49A45]/40 font-semibold text-[11px] hover:bg-[#C49A45]/30">High (8)</button>
<button class="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant border border-outline-variant text-[11px]">Medium (17)</button>
<span class="text-outline-variant mx-1">|</span>
<span class="text-label-xs font-label-xs uppercase text-on-surface-variant pr-1">TYPE:</span>
<button class="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant hover:bg-surface-container-high text-[11px]">Inventory (12)</button>
<button class="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant hover:bg-surface-container-high text-[11px]">Demand (6)</button>
<button class="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant hover:bg-surface-container-high text-[11px]">Transport (5)</button>
<button class="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant hover:bg-surface-container-high text-[11px]">Route (3)</button>
</div>
</div>
<!-- Table Header -->
<div class="grid grid-cols-12 bg-surface-container px-3 py-2 text-label-xs font-label-xs text-primary uppercase font-semibold border-b border-secondary/40 items-center">
<div class="col-span-1 flex items-center gap-1.5">
<input class="rounded border-outline text-primary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span>SEV</span>
</div>
<div class="col-span-4">RISK ANCHOR &amp; IDENTIFIER</div>
<div class="col-span-3">IMPACT PROJECTION</div>
<div class="col-span-2 text-right">MODEL CONF.</div>
<div class="col-span-2 text-right pr-2">STATUS / TIME</div>
</div>
<!-- Risk Queue Rows (Dense Operational Data Feed) -->
<div class="divide-y divide-hairline custom-scroll max-h-[640px] overflow-y-auto">
<!-- ROW 1 (SELECTED STATE - Forward Post Alpha) -->
<div class="grid grid-cols-12 px-3 py-2.5 items-center bg-[#F4F3ED] border-l-4 border-l-[#8C2D19] hover:bg-[#EAE8DD] cursor-pointer transition-colors group">
<div class="col-span-1 flex items-center gap-2">
<input checked="" class="rounded border-outline text-primary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span class="px-1.5 py-0.5 rounded bg-[#8C2D19] text-white text-[9px] font-bold tracking-wider">CRIT</span>
</div>
<div class="col-span-4 pr-2">
<div class="flex items-center gap-1.5">
<span class="font-semibold text-primary text-body-sm">Forward Post Alpha</span>
<span class="px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant text-[10px] font-mono">POL-D</span>
</div>
<p class="text-xs text-on-surface-variant truncate">Diesel stockout predicted in 6 days (Capacity: 12,000L)</p>
</div>
<div class="col-span-3">
<div class="text-xs font-medium text-error flex items-center gap-1">
<span class="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
<span>Consump. +32% (Sub-zero burn)</span>
</div>
<div class="text-[11px] text-on-surface-variant font-mono">Runway: 6 Days Remaining</div>
</div>
<div class="col-span-2 text-right font-mono text-xs">
<span class="font-bold text-primary">91%</span>
<span class="text-[10px] text-on-surface-variant block">LSTM-M4</span>
</div>
<div class="col-span-2 text-right pr-1">
<span class="inline-block px-2 py-0.5 rounded bg-[#8C2D19]/15 text-[#8C2D19] text-[10px] font-bold tracking-wide border border-[#8C2D19]/30">INVESTIGATING</span>
<span class="block text-[10px] font-mono text-on-surface-variant mt-0.5">14:26 IST</span>
</div>
</div>
<!-- ROW 2: Zojila Pass Weather Threat -->
<div class="grid grid-cols-12 px-3 py-2.5 items-center hover:bg-surface-container/60 cursor-pointer transition-colors">
<div class="col-span-1 flex items-center gap-2">
<input class="rounded border-outline text-primary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span class="px-1.5 py-0.5 rounded bg-[#8C2D19] text-white text-[9px] font-bold tracking-wider">CRIT</span>
</div>
<div class="col-span-4 pr-2">
<div class="flex items-center gap-1.5">
<span class="font-semibold text-primary text-body-sm">Zojila Pass Corridor</span>
<span class="px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant text-[10px] font-mono">ROUTE</span>
</div>
<p class="text-xs text-on-surface-variant truncate">Blizzard risk 68% - transit closure imminent within 12h</p>
</div>
<div class="col-span-3">
<div class="text-xs font-medium text-on-surface">Convoy SH-2051 holding at staging</div>
<div class="text-[11px] text-on-surface-variant font-mono">Delay window: +24 hrs</div>
</div>
<div class="col-span-2 text-right font-mono text-xs">
<span class="font-bold text-primary">88%</span>
<span class="text-[10px] text-on-surface-variant block">WRF-GFS</span>
</div>
<div class="col-span-2 text-right pr-1">
<span class="inline-block px-2 py-0.5 rounded bg-error-container text-on-error-container text-[10px] font-bold tracking-wide">NEW</span>
<span class="block text-[10px] font-mono text-on-surface-variant mt-0.5">14:12 IST</span>
</div>
</div>
<!-- ROW 3: Sector Bravo Medical Kits -->
<div class="grid grid-cols-12 px-3 py-2.5 items-center hover:bg-surface-container/60 cursor-pointer transition-colors">
<div class="col-span-1 flex items-center gap-2">
<input class="rounded border-outline text-primary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span class="px-1.5 py-0.5 rounded bg-[#8C2D19] text-white text-[9px] font-bold tracking-wider">CRIT</span>
</div>
<div class="col-span-4 pr-2">
<div class="flex items-center gap-1.5">
<span class="font-semibold text-primary text-body-sm">Sector Bravo Hub</span>
<span class="px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant text-[10px] font-mono">MED-CL8</span>
</div>
<p class="text-xs text-on-surface-variant truncate">Class VIII trauma kits runway below safety threshold (4d)</p>
</div>
<div class="col-span-3">
<div class="text-xs font-medium text-on-surface">Replenishment scheduled 5 days</div>
<div class="text-[11px] text-error font-mono">Deficit buffer: -1.2 Days</div>
</div>
<div class="col-span-2 text-right font-mono text-xs">
<span class="font-bold text-primary">84%</span>
<span class="text-[10px] text-on-surface-variant block">BAYES-INV</span>
</div>
<div class="col-span-2 text-right pr-1">
<span class="inline-block px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-[10px] font-bold tracking-wide">ACKNOWLEDGED</span>
<span class="block text-[10px] font-mono text-on-surface-variant mt-0.5">13:45 IST</span>
</div>
</div>
<!-- ROW 4: Forward Post Charlie Rations -->
<div class="grid grid-cols-12 px-3 py-2.5 items-center hover:bg-surface-container/60 cursor-pointer transition-colors">
<div class="col-span-1 flex items-center gap-2">
<input class="rounded border-outline text-primary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span class="px-1.5 py-0.5 rounded bg-[#C49A45] text-white text-[9px] font-bold tracking-wider">HIGH</span>
</div>
<div class="col-span-4 pr-2">
<div class="flex items-center gap-1.5">
<span class="font-semibold text-primary text-body-sm">Forward Post Charlie</span>
<span class="px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant text-[10px] font-mono">RAT-CL1</span>
</div>
<p class="text-xs text-on-surface-variant truncate">Sudden surge Class I cold-weather pack consumption (+28%)</p>
</div>
<div class="col-span-3">
<div class="text-xs font-medium text-on-surface">Buffer drops to 9 days</div>
<div class="text-[11px] text-on-surface-variant font-mono">Exp. Depletion: D+11</div>
</div>
<div class="col-span-2 text-right font-mono text-xs">
<span class="font-bold text-primary">86%</span>
<span class="text-[10px] text-on-surface-variant block">TS-PROPHET</span>
</div>
<div class="col-span-2 text-right pr-1">
<span class="inline-block px-2 py-0.5 rounded bg-[#C49A45]/20 text-[#7A5B18] text-[10px] font-bold tracking-wide">INVESTIGATING</span>
<span class="block text-[10px] font-mono text-on-surface-variant mt-0.5">13:10 IST</span>
</div>
</div>
<!-- ROW 5: Convoy SH-2048 Transit ETA Variance -->
<div class="grid grid-cols-12 px-3 py-2.5 items-center hover:bg-surface-container/60 cursor-pointer transition-colors">
<div class="col-span-1 flex items-center gap-2">
<input class="rounded border-outline text-primary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span class="px-1.5 py-0.5 rounded bg-[#C49A45] text-white text-[9px] font-bold tracking-wider">HIGH</span>
</div>
<div class="col-span-4 pr-2">
<div class="flex items-center gap-1.5">
<span class="font-semibold text-primary text-body-sm">Convoy SH-2048 (4x ALS)</span>
<span class="px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant text-[10px] font-mono">CONVOY</span>
</div>
<p class="text-xs text-on-surface-variant truncate">Transit ETA variance +8.5 hrs on NH-1D arterial pass</p>
</div>
<div class="col-span-3">
<div class="text-xs font-medium text-on-surface">Mechanical brake check required</div>
<div class="text-[11px] text-on-surface-variant font-mono">Current Speed: 14 km/h</div>
</div>
<div class="col-span-2 text-right font-mono text-xs">
<span class="font-bold text-primary">89%</span>
<span class="text-[10px] text-on-surface-variant block">TELE-GPS</span>
</div>
<div class="col-span-2 text-right pr-1">
<span class="inline-block px-2 py-0.5 rounded bg-[#C49A45]/20 text-[#7A5B18] text-[10px] font-bold tracking-wide">INVESTIGATING</span>
<span class="block text-[10px] font-mono text-on-surface-variant mt-0.5">12:35 IST</span>
</div>
</div>
<!-- ROW 6: Foxtrot Outpost Munitions Buffer -->
<div class="grid grid-cols-12 px-3 py-2.5 items-center hover:bg-surface-container/60 cursor-pointer transition-colors">
<div class="col-span-1 flex items-center gap-2">
<input class="rounded border-outline text-primary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span class="px-1.5 py-0.5 rounded bg-[#C49A45] text-white text-[9px] font-bold tracking-wider">HIGH</span>
</div>
<div class="col-span-4 pr-2">
<div class="flex items-center gap-1.5">
<span class="font-semibold text-primary text-body-sm">Foxtrot Outpost</span>
<span class="px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant text-[10px] font-mono">AMMO-CL5</span>
</div>
<p class="text-xs text-on-surface-variant truncate">Class V Small Arms Munitions buffer at 14 days ceiling</p>
</div>
<div class="col-span-3">
<div class="text-xs font-medium text-on-surface">Safety minimum: 15 days</div>
<div class="text-[11px] text-on-surface-variant font-mono">Reserve: 38,000 rds</div>
</div>
<div class="col-span-2 text-right font-mono text-xs">
<span class="font-bold text-primary">82%</span>
<span class="text-[10px] text-on-surface-variant block">OR-CALC</span>
</div>
<div class="col-span-2 text-right pr-1">
<span class="inline-block px-2 py-0.5 rounded bg-error-container text-on-error-container text-[10px] font-bold tracking-wide">NEW</span>
<span class="block text-[10px] font-mono text-on-surface-variant mt-0.5">11:50 IST</span>
</div>
</div>
<!-- ROW 7: Leh Depot Cluster Heavy Maintenance -->
<div class="grid grid-cols-12 px-3 py-2.5 items-center hover:bg-surface-container/60 cursor-pointer transition-colors">
<div class="col-span-1 flex items-center gap-2">
<input class="rounded border-outline text-primary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span class="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant border border-outline text-[9px] font-bold tracking-wider">MED</span>
</div>
<div class="col-span-4 pr-2">
<div class="flex items-center gap-1.5">
<span class="font-semibold text-primary text-body-sm">Leh Depot Cluster</span>
<span class="px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant text-[10px] font-mono">FLEET</span>
</div>
<p class="text-xs text-on-surface-variant truncate">Heavy vehicle maintenance turnaround latency (+14%)</p>
</div>
<div class="col-span-3">
<div class="text-xs font-medium text-on-surface">8 ALS 4x4 chassis docked</div>
<div class="text-[11px] text-on-surface-variant font-mono">Parts queue: 3 days</div>
</div>
<div class="col-span-2 text-right font-mono text-xs">
<span class="font-bold text-primary">79%</span>
<span class="text-[10px] text-on-surface-variant block">BAYES-REP</span>
</div>
<div class="col-span-2 text-right pr-1">
<span class="inline-block px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-[10px] font-bold tracking-wide">ACKNOWLEDGED</span>
<span class="block text-[10px] font-mono text-on-surface-variant mt-0.5">10:20 IST</span>
</div>
</div>
<!-- ROW 8: Khardung La Black Ice -->
<div class="grid grid-cols-12 px-3 py-2.5 items-center hover:bg-surface-container/60 cursor-pointer transition-colors">
<div class="col-span-1 flex items-center gap-2">
<input class="rounded border-outline text-primary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span class="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant border border-outline text-[9px] font-bold tracking-wider">MED</span>
</div>
<div class="col-span-4 pr-2">
<div class="flex items-center gap-1.5">
<span class="font-semibold text-primary text-body-sm">Khardung La Passway</span>
<span class="px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant text-[10px] font-mono">ROUTE</span>
</div>
<p class="text-xs text-on-surface-variant truncate">Surface black ice detected at km marker 42. Reduced axle cap.</p>
</div>
<div class="col-span-3">
<div class="text-xs font-medium text-on-surface">Max speed capped 10 km/h</div>
<div class="text-[11px] text-on-surface-variant font-mono">Chains mandatory</div>
</div>
<div class="col-span-2 text-right font-mono text-xs">
<span class="font-bold text-primary">93%</span>
<span class="text-[10px] text-on-surface-variant block">SENSOR-IOT</span>
</div>
<div class="col-span-2 text-right pr-1">
<span class="inline-block px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-[10px] font-bold tracking-wide">MONITORING</span>
<span class="block text-[10px] font-mono text-on-surface-variant mt-0.5">09:15 IST</span>
</div>
</div>
</div>
<!-- Table Pagination & Queue Status Footer -->
<div class="p-2.5 bg-surface-container border-t border-outline-variant flex items-center justify-between text-xs text-on-surface-variant">
<div class="flex items-center gap-2">
<span>Showing 1–8 of 28 Active Tactical Risks</span>
<span class="text-outline-variant">•</span>
<span class="font-mono text-[11px]">Filter: SECTOR IV-B ENCLAVE</span>
</div>
<div class="flex items-center gap-1">
<button class="px-2 py-1 rounded bg-surface-container-lowest border border-outline-variant hover:bg-surface-container text-on-surface text-label-xs font-label-xs uppercase">Prev</button>
<span class="px-2 py-0.5 font-mono text-xs font-bold text-primary">Page 1 of 4</span>
<button class="px-2 py-1 rounded bg-surface-container-lowest border border-outline-variant hover:bg-surface-container text-on-surface text-label-xs font-label-xs uppercase">Next</button>
</div>
</div>
</section>
<!-- ====================================================== -->
<!-- RIGHT COLUMN: SELECTED RISK INVESTIGATION & ACTION     -->
<!-- ====================================================== -->
<section class="lg:col-span-5 xl:col-span-4 flex flex-col bg-surface-container-lowest border border-secondary/40 rounded shadow-md overflow-hidden">
<!-- Investigation Header -->
<div class="p-4 bg-[#F4F3ED] border-b border-outline-variant">
<div class="flex items-center justify-between gap-2 mb-2">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#8C2D19] text-white text-[10px] font-bold tracking-wider uppercase">
<span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              CRITICAL RISK • INVENTORY DEFICIT
            </span>
<div class="flex items-center gap-1">
<button class="px-2 py-1 rounded bg-surface-container-lowest border border-outline-variant text-[11px] font-semibold text-on-surface hover:bg-surface-container" onclick="openAcknowledgeModal()">
                Acknowledge
              </button>
<button class="px-2 py-1 rounded bg-primary text-on-primary text-[11px] font-semibold hover:bg-secondary" onclick="openResolveModal()">
                Resolve...
              </button>
</div>
</div>
<h2 class="text-headline-sm font-headline-sm text-primary leading-tight font-bold">
            Forward Post Alpha — POL Arctic Diesel Stockout
          </h2>
<div class="mt-1 flex flex-wrap items-center gap-2 text-label-xs font-label-xs text-on-surface-variant font-mono">
<span>REF ID: RSK-LEH-0842</span>
<span>•</span>
<span>LOGGED: 14:26 IST</span>
<span>•</span>
<span class="text-primary font-bold">ASSIGNEE: BHAVYA KUMAR (BK)</span>
</div>
</div>
<div class="p-4 space-y-4 overflow-y-auto max-h-[720px] custom-scroll">
<!-- Primary Metric Quad -->
<div class="grid grid-cols-2 gap-2">
<div class="p-2.5 rounded bg-background border border-hairline">
<span class="text-[10px] font-mono uppercase text-on-surface-variant block">PREDICTED STOCKOUT</span>
<div class="flex items-baseline gap-1 mt-0.5">
<span class="text-2xl font-bold font-mono text-[#8C2D19]">06</span>
<span class="text-xs font-bold text-[#8C2D19]">DAYS</span>
</div>
<span class="text-[10px] text-error font-medium">Critical buffer breach</span>
</div>
<div class="p-2.5 rounded bg-background border border-hairline">
<span class="text-[10px] font-mono uppercase text-on-surface-variant block">CONFIDENCE SCORE</span>
<div class="flex items-baseline gap-1 mt-0.5">
<span class="text-2xl font-bold font-mono text-primary">91%</span>
</div>
<span class="text-[10px] text-on-surface-variant">Ensemble LSTM (#41)</span>
</div>
<div class="p-2.5 rounded bg-background border border-hairline">
<span class="text-[10px] font-mono uppercase text-on-surface-variant block">CURRENT RESERVE</span>
<div class="flex items-baseline gap-1 mt-0.5">
<span class="text-xl font-bold font-mono text-primary">2,100</span>
<span class="text-xs font-medium text-on-surface-variant">L</span>
</div>
<span class="text-[10px] text-on-surface-variant font-mono">Cap: 12,000 L (17.5%)</span>
</div>
<div class="p-2.5 rounded bg-background border border-hairline">
<span class="text-[10px] font-mono uppercase text-on-surface-variant block">BURN RATE (VELOCITY)</span>
<div class="flex items-baseline gap-1 mt-0.5">
<span class="text-xl font-bold font-mono text-[#8C2D19]">680</span>
<span class="text-xs font-medium text-on-surface-variant">L/DAY</span>
</div>
<span class="text-[10px] text-error font-semibold">+32% over baseline</span>
</div>
</div>
<!-- Risk Drivers (Root Cause Attribution) -->
<div class="p-3 rounded bg-surface-container-low border border-outline-variant">
<div class="flex items-center justify-between mb-2">
<h3 class="text-label-xs font-label-xs uppercase tracking-wider text-primary font-bold">ROOT CAUSE ATTRIBUTION</h3>
<span class="text-[10px] font-mono text-on-surface-variant">VARIANCE MODEL</span>
</div>
<div class="space-y-2 text-xs">
<div>
<div class="flex justify-between text-[11px] mb-0.5">
<span class="text-on-surface font-medium">Sub-zero heating surge (-18°C ambient)</span>
<span class="font-mono font-bold text-primary">45%</span>
</div>
<div class="w-full h-1.5 bg-outline-variant/40 rounded-full overflow-hidden">
<div class="h-full bg-[#8C2D19] rounded-full" style="width: 45%"></div>
</div>
</div>
<div>
<div class="flex justify-between text-[11px] mb-0.5">
<span class="text-on-surface font-medium">Convoy SH-2048 transit delay (+18h)</span>
<span class="font-mono font-bold text-primary">30%</span>
</div>
<div class="w-full h-1.5 bg-outline-variant/40 rounded-full overflow-hidden">
<div class="h-full bg-[#C49A45] rounded-full" style="width: 30%"></div>
</div>
</div>
<div>
<div class="flex justify-between text-[11px] mb-0.5">
<span class="text-on-surface font-medium">Zojila pass weather closure probability</span>
<span class="font-mono font-bold text-primary">15%</span>
</div>
<div class="w-full h-1.5 bg-outline-variant/40 rounded-full overflow-hidden">
<div class="h-full bg-secondary rounded-full" style="width: 15%"></div>
</div>
</div>
<div>
<div class="flex justify-between text-[11px] mb-0.5">
<span class="text-on-surface font-medium">Leh staging depot dispatch lag</span>
<span class="font-mono font-bold text-primary">10%</span>
</div>
<div class="w-full h-1.5 bg-outline-variant/40 rounded-full overflow-hidden">
<div class="h-full bg-outline rounded-full" style="width: 10%"></div>
</div>
</div>
</div>
</div>
<!-- Expected Impact Projection -->
<div class="p-3 rounded border border-outline-variant bg-surface-container-lowest">
<h3 class="text-label-xs font-label-xs uppercase tracking-wider text-primary font-bold mb-2">CONSEQUENCES OF INACTION</h3>
<ul class="space-y-1.5 text-body-sm text-on-surface">
<li class="flex items-center gap-2">
<span class="w-1.5 h-1.5 rounded-full bg-[#8C2D19]"></span>
<span>Operational Readiness Impact: <strong class="text-error font-mono">↓ 8.4%</strong> in Sector IV-B.</span>
</li>
<li class="flex items-center gap-2">
<span class="w-1.5 h-1.5 rounded-full bg-[#8C2D19]"></span>
<span>Complete Stockout Window: <strong class="font-mono text-primary">3.5 Days</strong> without dispatch.</span>
</li>
<li class="flex items-center gap-2">
<span class="w-1.5 h-1.5 rounded-full bg-[#8C2D19]"></span>
<span>Impacted Strategic Assets: <strong>1 Forward Formation, 2 Attached Patrols</strong>.</span>
</li>
</ul>
</div>
<!-- AI Prescriptive Intelligence Assessment -->
<div class="p-3 rounded bg-surface-container border-l-4 border-l-secondary space-y-2">
<div class="flex items-center justify-between">
<span class="text-[10px] font-mono font-bold text-secondary tracking-wider">AI PRESCRIPTIVE INTELLIGENCE</span>
<span class="text-[9px] font-mono text-on-surface-variant">MIL-STD-188F</span>
</div>
<p class="text-body-sm text-on-surface italic">
              "Unplanned thermal consumption at Forward Post Alpha is outpacing static allocation. Inbound convoy SH-2048 cannot bridge the depletion gap prior to Day 6 under current transit throttles."
            </p>
<div class="text-[10px] font-mono text-on-surface-variant uppercase font-semibold">
              ● MANDATORY HUMAN-IN-THE-LOOP APPROVAL REQUIRED PRIOR TO DISPATCH EXECUTION
            </div>
</div>
<!-- Recommended Tactical Action Box -->
<div class="p-3.5 rounded bg-primary-container text-on-primary space-y-2.5">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs uppercase tracking-wider text-secondary-fixed">RECOMMENDED TACTICAL PROTOCOL</span>
<span class="px-1.5 py-0.5 rounded bg-secondary text-[9px] font-mono font-bold text-on-secondary">+8.2% READINESS</span>
</div>
<p class="text-body-sm text-inverse-on-surface font-medium">
              Authorize Priority Dispatch of <strong>2,500 L Arctic Grade POL</strong> from Leh Central Reserve via Bypass Route B.
            </p>
<div class="flex items-center gap-2 pt-1">
<button class="flex-1 py-2 px-3 rounded bg-secondary hover:bg-secondary/90 text-on-secondary font-label-xs text-label-xs uppercase font-bold tracking-wider transition-colors flex items-center justify-center gap-1.5">
<span>APPROVE DISPATCH PROTOCOL</span>
<span class="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
<button class="py-2 px-2.5 rounded bg-[#0e1711] hover:bg-[#1a2c1f] border border-outline/30 text-on-primary text-label-xs font-label-xs uppercase transition-colors" title="Simulate">
                Sandbox
              </button>
</div>
</div>
<!-- Operational Timeline (Chronological Audit Trail) -->
<div>
<h3 class="text-label-xs font-label-xs uppercase tracking-wider text-on-surface-variant font-bold mb-2">OPERATIONAL AUDIT TRAIL</h3>
<div class="relative pl-4 space-y-2.5 border-l border-outline-variant text-xs">
<div class="relative">
<span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#8C2D19] ring-2 ring-surface-container-lowest"></span>
<div class="font-mono text-[10px] text-on-surface-variant">14:26 IST</div>
<div class="font-medium text-primary">Risk escalated to CRITICAL by automated threshold daemon.</div>
</div>
<div class="relative">
<span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-outline ring-2 ring-surface-container-lowest"></span>
<div class="font-mono text-[10px] text-on-surface-variant">13:20 IST</div>
<div class="text-on-surface">Stockout runway breached 7-day safety ceiling.</div>
</div>
<div class="relative">
<span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-outline ring-2 ring-surface-container-lowest"></span>
<div class="font-mono text-[10px] text-on-surface-variant">12:05 IST</div>
<div class="text-on-surface">Predictive LSTM updated burn model following -18°C weather feed.</div>
</div>
<div class="relative">
<span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-outline ring-2 ring-surface-container-lowest"></span>
<div class="font-mono text-[10px] text-on-surface-variant">10:42 IST</div>
<div class="text-on-surface">Anomaly telemetry flag triggered by Leh Depot Telemetry Gateway.</div>
</div>
</div>
</div>
<!-- Related Logistics Entities (Cross-Navigation Links) -->
<div class="pt-2 border-t border-hairline">
<h3 class="text-label-xs font-label-xs uppercase tracking-wider text-on-surface-variant font-bold mb-2">LINKED TACTICAL ENTITIES</h3>
<div class="grid grid-cols-2 gap-1.5 text-[11px] font-mono">
<a class="p-1.5 rounded bg-surface-container hover:bg-surface-container-high text-primary flex items-center justify-between" href="#">
<span>LOC: FWD Post Alpha</span>
<span class="material-symbols-outlined text-xs" data-icon="north_east">north_east</span>
</a>
<a class="p-1.5 rounded bg-surface-container hover:bg-surface-container-high text-primary flex items-center justify-between" href="#">
<span>CARGO: POL Class III</span>
<span class="material-symbols-outlined text-xs" data-icon="north_east">north_east</span>
</a>
<a class="p-1.5 rounded bg-surface-container hover:bg-surface-container-high text-primary flex items-center justify-between" href="#">
<span>CONVOY: SH-2048</span>
<span class="material-symbols-outlined text-xs" data-icon="north_east">north_east</span>
</a>
<a class="p-1.5 rounded bg-surface-container hover:bg-surface-container-high text-primary flex items-center justify-between" href="#">
<span>ROUTE: Bypass B</span>
<span class="material-symbols-outlined text-xs" data-icon="north_east">north_east</span>
</a>
</div>
</div>
</div>
</section>
</div>
</main>
<!-- ======================================================== -->
<!-- 6. MODALS / WORKFLOW DRAWERS (INTERACTION PREVIEW)        -->
<!-- ======================================================== -->
<!-- Acknowledge Risk Modal -->
<div class="fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm hidden items-center justify-center p-4" id="ackModal">
<div class="bg-surface-container-lowest border border-outline rounded w-full max-w-md shadow-2xl p-5 space-y-4">
<div class="flex items-center justify-between border-b border-hairline pb-2.5">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="assignment_turned_in">assignment_turned_in</span>
<h3 class="text-headline-sm font-headline-sm text-primary">Acknowledge Risk Protocol</h3>
</div>
<button class="text-on-surface-variant hover:text-on-surface" onclick="closeModals()">
<span class="material-symbols-outlined text-base" data-icon="close">close</span>
</button>
</div>
<p class="text-body-sm text-on-surface-variant">
        Acknowledging assigns risk <span class="font-mono font-bold text-primary">RSK-LEH-0842</span> to your command queue and pauses automated escalation daemons for 4 hours.
      </p>
<div class="space-y-1.5">
<label class="text-label-xs font-label-xs uppercase text-on-surface font-semibold">Priority Assignment</label>
<select class="w-full text-body-sm bg-background border border-outline-variant rounded p-2 focus:ring-0 focus:border-primary">
<option>High Priority (Forward Post Alpha Support Unit)</option>
<option>Emergency High Altitude Rapid Response</option>
<option>Standard Logistical Queue</option>
</select>
</div>
<div class="flex items-center justify-end gap-2 pt-2 border-t border-hairline">
<button class="px-3 py-1.5 rounded bg-surface-container text-body-sm hover:bg-surface-container-high" onclick="closeModals()">Cancel</button>
<button class="px-4 py-1.5 rounded bg-primary text-on-primary text-body-sm font-semibold hover:bg-secondary" onclick="closeModals()">Confirm Acknowledgement</button>
</div>
</div>
</div>
<!-- Resolve Risk Modal -->
<div class="fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm hidden items-center justify-center p-4" id="resolveModal">
<div class="bg-surface-container-lowest border border-outline rounded w-full max-w-lg shadow-2xl p-5 space-y-4">
<div class="flex items-center justify-between border-b border-hairline pb-2.5">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="task_alt">task_alt</span>
<h3 class="text-headline-sm font-headline-sm text-primary">Resolve &amp; Log Risk Manifest</h3>
</div>
<button class="text-on-surface-variant hover:text-on-surface" onclick="closeModals()">
<span class="material-symbols-outlined text-base" data-icon="close">close</span>
</button>
</div>
<div class="p-2.5 rounded bg-surface-container text-xs text-on-surface-variant font-mono">
        LOGGED ENTITY: RSK-LEH-0842 // DIESEL POL DEFICIT // SECTOR IV-B
      </div>
<div class="space-y-1.5">
<label class="text-label-xs font-label-xs uppercase text-on-surface font-semibold">Mitigation Strategy Executed *</label>
<select class="w-full text-body-sm bg-background border border-outline-variant rounded p-2 focus:ring-0 focus:border-primary">
<option>Emergency Fuel Air Drop Initiated (Chushul Detachment)</option>
<option selected="">Rerouted Inbound Reserve via Bypass B (2,500 L)</option>
<option>Depot Load Reallocation from Forward Post Beta</option>
<option>Tactical Consumption Rationing Order Signed</option>
</select>
</div>
<div class="space-y-1.5">
<label class="text-label-xs font-label-xs uppercase text-on-surface font-semibold">Operational Audit Note (Permanent Sign-off) *</label>
<textarea class="w-full text-body-sm bg-background border border-outline-variant rounded p-2 focus:ring-0 focus:border-primary text-xs" placeholder="Enter commander authorization code, convoy dispatch serial number, or rationale..." rows="3"></textarea>
</div>
<div class="flex items-center justify-end gap-2 pt-2 border-t border-hairline">
<button class="px-3 py-1.5 rounded bg-surface-container text-body-sm hover:bg-surface-container-high" onclick="closeModals()">Cancel</button>
<button class="px-4 py-1.5 rounded bg-secondary text-on-secondary text-body-sm font-semibold hover:bg-secondary/90" onclick="closeModals()">Sign &amp; Archive Resolution</button>
</div>
</div>
</div>
<!-- Inline Script for UI Micro-Interactions -->`;
