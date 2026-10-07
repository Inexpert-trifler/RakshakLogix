// Screen: RL-29 — Risk Intelligence Dashboard
// Route: /risks
export const rl29Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto p-6 space-y-5 flex-1">
<!-- ======================================================== -->
<!-- SECTION 2: RISK SUMMARY KPI STRIP -->
<!-- ======================================================== -->
<section class="grid grid-cols-7 gap-3">
<!-- Critical -->
<div class="bg-surface-container-lowest p-3 border border-outline-variant rounded flex flex-col justify-between border-l-4 border-l-[#9E2A2B]">
<div class="flex items-center justify-between">
<span class="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">CRITICAL RISK</span>
<span class="w-2 h-2 rounded-full bg-[#9E2A2B]"></span>
</div>
<div class="flex items-baseline gap-2 mt-1">
<span class="tabular-mono text-2xl font-bold text-[#9E2A2B]">04</span>
<span class="font-label-xs text-label-xs text-on-surface-variant">INCIDENTS</span>
</div>
<span class="font-mono text-[10px] text-outline mt-1">IMMEDIATE ACTION REQ</span>
</div>
<!-- High -->
<div class="bg-surface-container-lowest p-3 border border-outline-variant rounded flex flex-col justify-between border-l-4 border-l-[#C49A45]">
<div class="flex items-center justify-between">
<span class="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">HIGH PRIORITY</span>
<span class="w-2 h-2 rounded-full bg-[#C49A45]"></span>
</div>
<div class="flex items-baseline gap-2 mt-1">
<span class="tabular-mono text-2xl font-bold text-[#7A5B18]">11</span>
<span class="font-label-xs text-label-xs text-on-surface-variant">INCIDENTS</span>
</div>
<span class="font-mono text-[10px] text-outline mt-1">T-MINUS &lt; 72 HRS</span>
</div>
<!-- Medium -->
<div class="bg-surface-container-lowest p-3 border border-outline-variant rounded flex flex-col justify-between border-l-4 border-l-secondary">
<div class="flex items-center justify-between">
<span class="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">MEDIUM</span>
<span class="w-2 h-2 rounded-full bg-secondary"></span>
</div>
<div class="flex items-baseline gap-2 mt-1">
<span class="tabular-mono text-2xl font-bold text-primary">23</span>
<span class="font-label-xs text-label-xs text-on-surface-variant">INCIDENTS</span>
</div>
<span class="font-mono text-[10px] text-outline mt-1">STABLE / WATCHLIST</span>
</div>
<!-- Low -->
<div class="bg-surface-container-lowest p-3 border border-outline-variant rounded flex flex-col justify-between border-l-4 border-l-outline-variant">
<div class="flex items-center justify-between">
<span class="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">LOW</span>
<span class="w-2 h-2 rounded-full bg-outline-variant"></span>
</div>
<div class="flex items-baseline gap-2 mt-1">
<span class="tabular-mono text-2xl font-bold text-on-surface-variant">38</span>
<span class="font-label-xs text-label-xs text-on-surface-variant">INCIDENTS</span>
</div>
<span class="font-mono text-[10px] text-outline mt-1">ROUTINE CLEARANCE</span>
</div>
<!-- Emerging -->
<div class="bg-surface-container-lowest p-3 border border-outline-variant rounded flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">EMERGING</span>
<span class="material-symbols-outlined text-[16px] text-secondary">trending_up</span>
</div>
<div class="flex items-baseline gap-2 mt-1">
<span class="tabular-mono text-2xl font-bold text-primary">07</span>
<span class="font-label-xs text-label-xs text-on-surface-variant">VECTORS</span>
</div>
<span class="font-mono text-[10px] text-secondary font-medium mt-1">+3 DETECTED TODAY</span>
</div>
<!-- Resolved Today -->
<div class="bg-surface-container-lowest p-3 border border-outline-variant rounded flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">AUDITED / RESOLVED</span>
<span class="material-symbols-outlined text-[16px] text-secondary">task_alt</span>
</div>
<div class="flex items-baseline gap-2 mt-1">
<span class="tabular-mono text-2xl font-bold text-primary">16</span>
<span class="font-label-xs text-label-xs text-on-surface-variant">CLOSED</span>
</div>
<span class="font-mono text-[10px] text-outline mt-1">100% DISPATCH AUDIT</span>
</div>
<!-- Overall Posture -->
<div class="bg-surface-container p-3 border border-outline rounded flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="font-label-xs text-label-xs text-primary font-bold uppercase tracking-wider">NETWORK POSTURE</span>
<span class="px-1.5 py-0.2 bg-[#C49A45]/20 text-[#7A5B18] font-mono text-[10px] font-bold rounded border border-[#C49A45]/40">MEDIUM</span>
</div>
<div class="flex items-baseline gap-1 mt-1">
<span class="tabular-mono text-2xl font-bold text-primary">64.2</span>
<span class="font-mono text-[11px] text-outline">/ 100</span>
</div>
<div class="w-full bg-outline-variant h-1.5 rounded mt-1 overflow-hidden">
<div class="bg-[#C49A45] h-full" style="width: 64.2%"></div>
</div>
</div>
</section>
<!-- ======================================================== -->
<!-- SECTION 3: NETWORK RISK TREND & DOMAIN DISTRIBUTION -->
<!-- ======================================================== -->
<section class="grid grid-cols-12 gap-5">
<!-- 30-Day Network Risk Trend (7 cols) -->
<div class="col-span-7 bg-surface-container-lowest border border-outline-variant rounded p-4 flex flex-col justify-between">
<div class="flex items-center justify-between pb-3 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">show_chart</span>
<span class="font-label-md text-label-md font-bold text-primary uppercase">30-Day Network Risk Trend</span>
<span class="font-mono text-[11px] text-outline">| NORTHERN CMD SECTOR IV-B</span>
</div>
<div class="flex items-center gap-1 bg-surface-container p-0.5 rounded border border-outline-variant">
<button class="px-2 py-0.5 font-mono text-[11px] text-on-surface-variant hover:text-on-surface">7D</button>
<button class="px-2 py-0.5 font-mono text-[11px] bg-primary-container text-on-primary rounded font-semibold">30D</button>
<button class="px-2 py-0.5 font-mono text-[11px] text-on-surface-variant hover:text-on-surface">90D</button>
</div>
</div>
<!-- Synthetic Operational Chart Visualisation -->
<div class="py-4">
<div class="h-36 w-full flex items-end gap-1.5 pt-4 px-2 border-b border-outline-variant">
<!-- Day bars (Simulated 24-day timeline with stacked severity) -->
<div class="flex-1 flex flex-col gap-0.5 h-full justify-end" title="01 Sep"><div class="bg-[#9E2A2B] h-[6%]"></div><div class="bg-[#C49A45] h-[14%]"></div><div class="bg-secondary h-[22%]"></div><div class="bg-outline-variant h-[25%]"></div></div>
<div class="flex-1 flex flex-col gap-0.5 h-full justify-end" title="03 Sep"><div class="bg-[#9E2A2B] h-[6%]"></div><div class="bg-[#C49A45] h-[12%]"></div><div class="bg-secondary h-[24%]"></div><div class="bg-outline-variant h-[28%]"></div></div>
<div class="flex-1 flex flex-col gap-0.5 h-full justify-end" title="06 Sep"><div class="bg-[#9E2A2B] h-[8%]"></div><div class="bg-[#C49A45] h-[15%]"></div><div class="bg-secondary h-[20%]"></div><div class="bg-outline-variant h-[30%]"></div></div>
<div class="flex-1 flex flex-col gap-0.5 h-full justify-end" title="09 Sep"><div class="bg-[#9E2A2B] h-[5%]"></div><div class="bg-[#C49A45] h-[16%]"></div><div class="bg-secondary h-[25%]"></div><div class="bg-outline-variant h-[22%]"></div></div>
<div class="flex-1 flex flex-col gap-0.5 h-full justify-end" title="12 Sep"><div class="bg-[#9E2A2B] h-[7%]"></div><div class="bg-[#C49A45] h-[14%]"></div><div class="bg-secondary h-[28%]"></div><div class="bg-outline-variant h-[24%]"></div></div>
<div class="flex-1 flex flex-col gap-0.5 h-full justify-end" title="15 Sep"><div class="bg-[#9E2A2B] h-[6%]"></div><div class="bg-[#C49A45] h-[18%]"></div><div class="bg-secondary h-[30%]"></div><div class="bg-outline-variant h-[20%]"></div></div>
<div class="flex-1 flex flex-col gap-0.5 h-full justify-end" title="18 Sep"><div class="bg-[#9E2A2B] h-[9%]"></div><div class="bg-[#C49A45] h-[19%]"></div><div class="bg-secondary h-[28%]"></div><div class="bg-outline-variant h-[21%]"></div></div>
<div class="flex-1 flex flex-col gap-0.5 h-full justify-end" title="21 Sep"><div class="bg-[#9E2A2B] h-[11%]"></div><div class="bg-[#C49A45] h-[22%]"></div><div class="bg-secondary h-[26%]"></div><div class="bg-outline-variant h-[18%]"></div></div>
<div class="flex-1 flex flex-col gap-0.5 h-full justify-end" title="24 Sep"><div class="bg-[#9E2A2B] h-[10%]"></div><div class="bg-[#C49A45] h-[24%]"></div><div class="bg-secondary h-[25%]"></div><div class="bg-outline-variant h-[19%]"></div></div>
<div class="flex-1 flex flex-col gap-0.5 h-full justify-end" title="27 Sep"><div class="bg-[#9E2A2B] h-[12%]"></div><div class="bg-[#C49A45] h-[25%]"></div><div class="bg-secondary h-[28%]"></div><div class="bg-outline-variant h-[16%]"></div></div>
<div class="flex-1 flex flex-col gap-0.5 h-full justify-end" title="30 Sep"><div class="bg-[#9E2A2B] h-[14%]"></div><div class="bg-[#C49A45] h-[27%]"></div><div class="bg-secondary h-[26%]"></div><div class="bg-outline-variant h-[15%]"></div></div>
<div class="flex-1 flex flex-col gap-0.5 h-full justify-end" title="03 Oct"><div class="bg-[#9E2A2B] h-[15%]"></div><div class="bg-[#C49A45] h-[29%]"></div><div class="bg-secondary h-[24%]"></div><div class="bg-outline-variant h-[14%]"></div></div>
<div class="flex-1 flex flex-col gap-0.5 h-full justify-end" title="06 Oct"><div class="bg-[#9E2A2B] h-[18%]"></div><div class="bg-[#C49A45] h-[31%]"></div><div class="bg-secondary h-[22%]"></div><div class="bg-outline-variant h-[12%]"></div></div>
<div class="flex-1 flex flex-col gap-0.5 h-full justify-end" title="08 Oct"><div class="bg-[#9E2A2B] h-[21%]"></div><div class="bg-[#C49A45] h-[34%]"></div><div class="bg-secondary h-[20%]"></div><div class="bg-outline-variant h-[10%]"></div></div>
<!-- Current Day 09 Oct -->
<div class="flex-1 flex flex-col gap-0.5 h-full justify-end relative" title="09 Oct (Current)">
<div class="bg-[#9E2A2B] h-[24%] ring-1 ring-primary"></div>
<div class="bg-[#C49A45] h-[35%]"></div>
<div class="bg-secondary h-[18%]"></div>
<div class="bg-outline-variant h-[10%]"></div>
<div class="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#9E2A2B] rounded-full"></div>
</div>
</div>
<div class="flex justify-between font-mono text-[10px] text-outline px-2 pt-1.5">
<span>09 SEP (D-30)</span>
<span>19 SEP</span>
<span>29 SEP</span>
<span class="font-bold text-primary">09 OCT (TODAY)</span>
</div>
</div>
<!-- Trend Legend & Historical Annotation -->
<div class="pt-2 border-t border-outline-variant flex flex-col gap-2">
<div class="flex items-center justify-between text-[11px]">
<div class="flex items-center gap-3">
<span class="flex items-center gap-1 font-mono"><span class="w-2.5 h-2.5 bg-[#9E2A2B] rounded-sm"></span> Critical</span>
<span class="flex items-center gap-1 font-mono"><span class="w-2.5 h-2.5 bg-[#C49A45] rounded-sm"></span> High</span>
<span class="flex items-center gap-1 font-mono"><span class="w-2.5 h-2.5 bg-secondary rounded-sm"></span> Medium</span>
<span class="flex items-center gap-1 font-mono"><span class="w-2.5 h-2.5 bg-outline-variant rounded-sm"></span> Low</span>
</div>
<span class="font-mono text-outline">NET EVENTS: 82</span>
</div>
<div class="p-2 bg-surface-container rounded border border-outline-variant text-[11px] font-mono text-on-surface-variant flex items-center gap-2">
<span class="material-symbols-outlined text-[15px] text-[#C49A45]">info</span>
<span><strong>Historical Milestone:</strong> High-risk events increased +18% over prior 7 days due to Fotu La &amp; Zojila blizzard onset.</span>
</div>
</div>
</div>
<!-- Risk Distribution by Domain (5 cols) -->
<div class="col-span-5 bg-surface-container-lowest border border-outline-variant rounded p-4 flex flex-col justify-between">
<div class="flex items-center justify-between pb-3 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">pie_chart</span>
<span class="font-label-md text-label-md font-bold text-primary uppercase">Risk by Operational Domain</span>
</div>
<span class="px-1.5 py-0.2 bg-secondary-container text-on-secondary-container font-mono text-[10px] rounded font-semibold">6 DOMAINS</span>
</div>
<div class="space-y-2 py-2">
<!-- Domain: Inventory -->
<div>
<div class="flex justify-between font-body-sm text-body-sm mb-0.5">
<span class="font-medium text-primary flex items-center gap-1.5">
<span class="material-symbols-outlined text-[14px] text-outline">inventory_2</span>
<span>Inventory</span>
</span>
<span class="font-mono text-xs"><strong class="text-primary">14 risks</strong> <span class="text-[#9E2A2B] font-semibold">(4 Critical)</span></span>
</div>
<div class="w-full bg-surface-container h-2 rounded overflow-hidden flex">
<div class="bg-[#9E2A2B] h-full" style="width: 28%"></div>
<div class="bg-[#C49A45] h-full" style="width: 36%"></div>
<div class="bg-secondary h-full" style="width: 36%"></div>
</div>
</div>
<!-- Domain: Transport & Convoys -->
<div>
<div class="flex justify-between font-body-sm text-body-sm mb-0.5">
<span class="font-medium text-primary flex items-center gap-1.5">
<span class="material-symbols-outlined text-[14px] text-outline">local_shipping</span>
<span>Transport &amp; Convoys</span>
</span>
<span class="font-mono text-xs"><strong class="text-primary">11 risks</strong> <span class="text-[#7A5B18] font-semibold">(3 High)</span></span>
</div>
<div class="w-full bg-surface-container h-2 rounded overflow-hidden flex">
<div class="bg-[#9E2A2B] h-full" style="width: 10%"></div>
<div class="bg-[#C49A45] h-full" style="width: 45%"></div>
<div class="bg-secondary h-full" style="width: 45%"></div>
</div>
</div>
<!-- Domain: Routes & Passes -->
<div>
<div class="flex justify-between font-body-sm text-body-sm mb-0.5">
<span class="font-medium text-primary flex items-center gap-1.5">
<span class="material-symbols-outlined text-[14px] text-outline">alt_route</span>
<span>Routes &amp; Mountain Passes</span>
</span>
<span class="font-mono text-xs"><strong class="text-primary">9 risks</strong> <span class="text-[#9E2A2B] font-semibold">(2 Crit, 4 Restr.)</span></span>
</div>
<div class="w-full bg-surface-container h-2 rounded overflow-hidden flex">
<div class="bg-[#9E2A2B] h-full" style="width: 22%"></div>
<div class="bg-[#C49A45] h-full" style="width: 44%"></div>
<div class="bg-secondary h-full" style="width: 34%"></div>
</div>
</div>
<!-- Domain: Forward Demand -->
<div>
<div class="flex justify-between font-body-sm text-body-sm mb-0.5">
<span class="font-medium text-primary flex items-center gap-1.5">
<span class="material-symbols-outlined text-[14px] text-outline">monitoring</span>
<span>Forward Demand Surge</span>
</span>
<span class="font-mono text-xs"><strong class="text-primary">8 risks</strong> <span class="text-[#7A5B18] font-semibold">(2 High)</span></span>
</div>
<div class="w-full bg-surface-container h-2 rounded overflow-hidden flex">
<div class="bg-[#C49A45] h-full" style="width: 25%"></div>
<div class="bg-secondary h-full" style="width: 50%"></div>
<div class="bg-outline-variant h-full" style="width: 25%"></div>
</div>
</div>
<!-- Domain: Locations & Depots -->
<div>
<div class="flex justify-between font-body-sm text-body-sm mb-0.5">
<span class="font-medium text-primary flex items-center gap-1.5">
<span class="material-symbols-outlined text-[14px] text-outline">warehouse</span>
<span>Locations &amp; Depots</span>
</span>
<span class="font-mono text-xs"><strong class="text-primary">7 risks</strong> <span class="text-[#9E2A2B] font-semibold">(1 Critical)</span></span>
</div>
<div class="w-full bg-surface-container h-2 rounded overflow-hidden flex">
<div class="bg-[#9E2A2B] h-full" style="width: 14%"></div>
<div class="bg-[#C49A45] h-full" style="width: 28%"></div>
<div class="bg-secondary h-full" style="width: 58%"></div>
</div>
</div>
<!-- Domain: Weather & Avalanche -->
<div>
<div class="flex justify-between font-body-sm text-body-sm mb-0.5">
<span class="font-medium text-primary flex items-center gap-1.5">
<span class="material-symbols-outlined text-[14px] text-outline">ac_unit</span>
<span>Weather &amp; Avalanche</span>
</span>
<span class="font-mono text-xs"><strong class="text-primary">5 risks</strong> <span class="text-[#7A5B18] font-semibold">(3 Advisories)</span></span>
</div>
<div class="w-full bg-surface-container h-2 rounded overflow-hidden flex">
<div class="bg-[#C49A45] h-full" style="width: 60%"></div>
<div class="bg-secondary h-full" style="width: 40%"></div>
</div>
</div>
</div>
<!-- Risk Assessment Confidence Meter -->
<div class="pt-2 border-t border-outline-variant">
<div class="flex items-center justify-between text-xs mb-1">
<span class="font-label-xs text-label-xs text-on-surface-variant uppercase">Model Confidence Score</span>
<span class="font-mono font-bold text-primary">91.4% OVERALL</span>
</div>
<div class="grid grid-cols-6 gap-1 text-[10px] font-mono text-center text-outline">
<span class="bg-surface-container p-1 rounded">Inv 98%</span>
<span class="bg-surface-container p-1 rounded">Cons 94%</span>
<span class="bg-surface-container p-1 rounded">Fcst 91%</span>
<span class="bg-surface-container p-1 rounded">Flt 96%</span>
<span class="bg-surface-container p-1 rounded">Rte 89%</span>
<span class="bg-surface-container p-1 rounded">Wx 87%</span>
</div>
</div>
</div>
</section>
<!-- ======================================================== -->
<!-- SECTION 4: OPERATIONAL GIS RISK RADAR & 2x2 PRIORITY MATRIX -->
<!-- ======================================================== -->
<section class="grid grid-cols-12 gap-5">
<!-- Operational GIS Vector Map (~60% = 7 cols) -->
<div class="col-span-7 bg-surface-container-lowest border border-outline-variant rounded p-4 flex flex-col justify-between">
<div class="flex items-center justify-between pb-3 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">radar</span>
<span class="font-label-md text-label-md font-bold text-primary uppercase">GIS Operational Risk Vector Map</span>
<span class="px-1.5 py-0.2 bg-surface-container text-on-surface-variant font-mono text-[10px] rounded">SECTOR IV-B LEH</span>
</div>
<!-- Layer filter pills -->
<div class="flex items-center gap-1">
<button class="px-2 py-0.5 bg-primary-container text-on-primary font-mono text-[10px] rounded">All Active (42)</button>
<button class="px-2 py-0.5 bg-surface-container text-on-surface-variant font-mono text-[10px] rounded hover:bg-surface-container-high">Inventory (14)</button>
<button class="px-2 py-0.5 bg-surface-container text-on-surface-variant font-mono text-[10px] rounded hover:bg-surface-container-high">Routes (9)</button>
<button class="px-2 py-0.5 bg-surface-container text-on-surface-variant font-mono text-[10px] rounded hover:bg-surface-container-high">Weather (5)</button>
</div>
</div>
<!-- Map Simulation Tactical Canvas -->
<div class="relative my-3 h-72 bg-surface-container rounded border border-outline-variant tactical-grid overflow-hidden flex items-center justify-center">
<!-- Simulated Topographic Contour Lines -->
<svg class="absolute inset-0 w-full h-full stroke-outline-variant/60 fill-none" preserveaspectratio="none" viewbox="0 0 600 300">
<path d="M0,80 Q150,40 300,90 T600,60" stroke-dasharray="3,3" stroke-width="0.75"></path>
<path d="M0,140 Q200,100 400,160 T600,130" stroke-width="0.75"></path>
<path d="M0,210 Q250,170 450,220 T600,190" stroke-dasharray="3,3" stroke-width="0.75"></path>
<!-- Highway corridor lines -->
<path d="M60,260 L180,180 L290,160 L410,110 L520,70" stroke="#737873" stroke-linecap="round" stroke-width="2"></path>
<path d="M290,160 L360,230 L480,240" stroke="#c3c8c2" stroke-dasharray="4,2" stroke-width="1.5"></path>
</svg>
<!-- Coordinate / Elevation overlay HUD -->
<div class="absolute top-2 left-2 px-2 py-1 bg-surface-container-lowest/90 border border-outline-variant rounded font-mono text-[10px] text-on-surface-variant space-y-0.5">
<div>GRID: 34°09'09"N 77°34'30"E</div>
<div>ELEV BOUNDS: 3,100m – 5,400m MSL</div>
<div>WEATHER RADAR: PRECIP INTENSIFYING</div>
</div>
<!-- Map Controls -->
<div class="absolute top-2 right-2 flex flex-col gap-1">
<button class="w-6 h-6 bg-surface-container-lowest border border-outline-variant rounded flex items-center justify-center text-xs hover:bg-surface-container font-mono font-bold">+</button>
<button class="w-6 h-6 bg-surface-container-lowest border border-outline-variant rounded flex items-center justify-center text-xs hover:bg-surface-container font-mono font-bold">-</button>
<button class="w-6 h-6 bg-surface-container-lowest border border-outline-variant rounded flex items-center justify-center hover:bg-surface-container text-outline" title="Reset View">
<span class="material-symbols-outlined text-[13px]">crop_free</span>
</button>
</div>
<!-- Beacon 1: Red Beacon LOC-0042 (Selected Risk 1042) -->
<div class="absolute top-[22%] right-[18%] flex flex-col items-center">
<div class="relative flex items-center justify-center">
<span class="w-4 h-4 rounded-full bg-[#9E2A2B] animate-ping opacity-60 absolute"></span>
<span class="w-3.5 h-3.5 rounded-full bg-[#9E2A2B] border-2 border-white flex items-center justify-center text-white text-[8px] font-bold">!</span>
</div>
<div class="mt-1 px-1.5 py-0.5 bg-surface-container-lowest border border-[#9E2A2B] rounded text-[10px] font-mono font-bold text-[#9E2A2B] shadow-sm">
                LOC-0042 [STOCKOUT 91%]
              </div>
</div>
<!-- Beacon 2: Amber Beacon RTE-021 (Zojila Pass) -->
<div class="absolute top-[48%] left-[28%] flex flex-col items-center">
<div class="w-3 h-3 rounded-full bg-[#C49A45] border-2 border-white"></div>
<div class="mt-1 px-1.5 py-0.5 bg-surface-container-lowest border border-[#C49A45] rounded text-[10px] font-mono text-[#7A5B18] shadow-sm">
                RTE-021 ZOJILA [BLIZZARD]
              </div>
</div>
<!-- Beacon 3: Yellow/Olive Beacon DEP-0002 (Bodhkharbu) -->
<div class="absolute bottom-[24%] left-[55%] flex flex-col items-center">
<div class="w-3 h-3 rounded-full bg-secondary border-2 border-white"></div>
<div class="mt-1 px-1.5 py-0.5 bg-surface-container-lowest border border-outline-variant rounded text-[10px] font-mono text-primary shadow-sm">
                DEP-0002 BODHKHARBU
              </div>
</div>
<!-- Node 4: Leh HQ -->
<div class="absolute top-[32%] right-[42%] flex flex-col items-center">
<div class="w-2.5 h-2.5 rounded-sm bg-primary border border-white"></div>
<span class="mt-0.5 px-1 bg-surface-container-lowest text-[9px] font-mono text-outline rounded border border-outline-variant">HQ LEH</span>
</div>
<!-- Bottom Map Bar -->
<div class="absolute bottom-2 left-2 right-2 px-2.5 py-1 bg-surface-container-lowest/90 border border-outline-variant rounded flex justify-between items-center text-[10px] font-mono">
<span class="text-on-surface-variant">ACTIVE CORRIDORS: NH-1D (RESTRICTED) // DSDBO (OPEN)</span>
<span class="text-secondary font-semibold">14 CONVOYS MONITORED</span>
</div>
</div>
<!-- GIS Legend Strip -->
<div class="flex items-center justify-between text-[11px] font-mono text-on-surface-variant pt-2 border-t border-outline-variant">
<span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-[#9E2A2B]"></span> Critical Stockout / Breach</span>
<span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-[#C49A45]"></span> Route Weather / Avalanche</span>
<span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-secondary"></span> Staging Hub Delay</span>
<span class="text-outline">LAYER: VECTOR-TERRAIN V3.1</span>
</div>
</div>
<!-- 2x2 Risk Priority Matrix (~40% = 5 cols) -->
<div class="col-span-5 bg-surface-container-lowest border border-outline-variant rounded p-4 flex flex-col justify-between">
<div class="flex items-center justify-between pb-3 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">grid_view</span>
<span class="font-label-md text-label-md font-bold text-primary uppercase">Risk Priority Matrix</span>
</div>
<span class="font-mono text-[10px] text-outline">IMPACT vs PROBABILITY</span>
</div>
<!-- 2x2 Tactical Grid -->
<div class="my-3 relative">
<!-- Left Y-Axis Label -->
<div class="absolute -left-5 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-mono uppercase tracking-wider text-outline">
              Impact (Low → High)
            </div>
<div class="grid grid-cols-2 grid-rows-2 gap-2 h-72 pl-2">
<!-- Quad 1 (Top-Left): High Impact / Low-Med Prob -> High Priority -->
<div class="bg-surface-container p-2.5 rounded border border-outline-variant flex flex-col justify-between relative">
<div class="flex justify-between items-start">
<span class="px-1.5 py-0.2 bg-[#C49A45]/20 text-[#7A5B18] font-mono text-[10px] font-bold rounded">HIGH PRIORITY</span>
<span class="font-mono text-[10px] text-outline">Q2</span>
</div>
<!-- Plotted Risk Token -->
<div class="p-1.5 bg-surface-container-lowest rounded border border-[#C49A45] flex items-center justify-between text-[11px] font-mono">
<span class="font-bold text-[#7A5B18]">RISK-1064</span>
<span class="text-outline">Fleet Axle (74%)</span>
</div>
<span class="text-[10px] font-mono text-outline">Impact: High // Prob: 50-75%</span>
</div>
<!-- Quad 2 (Top-Right): High Impact / High Prob -> CRITICAL ZONE -->
<div class="bg-[#ffdad6]/30 p-2.5 rounded border-2 border-[#9E2A2B] flex flex-col justify-between relative">
<div class="flex justify-between items-start">
<span class="px-1.5 py-0.2 bg-[#9E2A2B] text-white font-mono text-[10px] font-bold rounded">CRITICAL ZONE</span>
<span class="font-mono text-[10px] text-[#9E2A2B]">Q1</span>
</div>
<!-- Plotted Critical Risks (Clickable/Highlighted) -->
<div class="space-y-1.5">
<div class="p-1.5 bg-surface-container-lowest rounded border border-[#9E2A2B] flex items-center justify-between text-[11px] font-mono shadow-sm ring-1 ring-[#9E2A2B]">
<span class="font-bold text-[#9E2A2B] flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]"></span>
                      RISK-1042
                    </span>
<span class="text-primary font-bold">Fuel LOC-0042 (91%)</span>
</div>
<div class="p-1.5 bg-surface-container-lowest rounded border border-[#9E2A2B] flex items-center justify-between text-[11px] font-mono">
<span class="font-bold text-[#9E2A2B]">RISK-1088</span>
<span class="text-outline">Depot Silt (84%)</span>
</div>
</div>
<span class="text-[10px] font-mono text-[#9E2A2B] font-semibold">Immediate Command Action</span>
</div>
<!-- Quad 3 (Bottom-Left): Low Impact / Low Prob -> MONITOR -->
<div class="bg-surface-container-low p-2.5 rounded border border-outline-variant flex flex-col justify-between">
<div class="flex justify-between items-start">
<span class="px-1.5 py-0.2 bg-outline-variant/40 text-on-surface-variant font-mono text-[10px] font-bold rounded">MONITOR</span>
<span class="font-mono text-[10px] text-outline">Q3</span>
</div>
<div class="p-1.5 bg-surface-container-lowest rounded border border-outline-variant flex items-center justify-between text-[11px] font-mono text-outline">
<span>38 Low Cluster</span>
<span>Ration Shelf</span>
</div>
<span class="text-[10px] font-mono text-outline">Routine Ops Tracking</span>
</div>
<!-- Quad 4 (Bottom-Right): Low Impact / High Prob -> ATTENTION -->
<div class="bg-surface-container p-2.5 rounded border border-outline-variant flex flex-col justify-between">
<div class="flex justify-between items-start">
<span class="px-1.5 py-0.2 bg-secondary-container text-on-secondary-container font-mono text-[10px] font-bold rounded">ATTENTION</span>
<span class="font-mono text-[10px] text-outline">Q4</span>
</div>
<!-- Plotted items -->
<div class="space-y-1">
<div class="p-1.5 bg-surface-container-lowest rounded border border-outline-variant flex items-center justify-between text-[11px] font-mono">
<span class="font-bold text-secondary">RISK-1055</span>
<span class="text-outline">Zojila Ice (78%)</span>
</div>
<div class="p-1.5 bg-surface-container-lowest rounded border border-outline-variant flex items-center justify-between text-[11px] font-mono">
<span class="font-bold text-secondary">RISK-1071</span>
<span class="text-outline">Plasma (+24%)</span>
</div>
</div>
<span class="text-[10px] font-mono text-outline">Impact: Med // Prob: 68-78%</span>
</div>
</div>
<!-- Bottom X-Axis Label -->
<div class="text-center pt-2 text-[10px] font-mono uppercase tracking-wider text-outline">
              Probability (Low → High)
            </div>
</div>
<div class="pt-2 border-t border-outline-variant flex justify-between items-center text-[11px] font-mono text-on-surface-variant">
<span>SELECTED FOCUS: <strong class="text-[#9E2A2B]">RISK-1042</strong></span>
<span class="text-outline">CLICK ROW TO REDIRECT</span>
</div>
</div>
</section>
<!-- ======================================================== -->
<!-- SECTION 5: PRIORITY RISK QUEUE (PRIMARY WORKING LEDGER TABLE) -->
<!-- ======================================================== -->
<section class="bg-surface-container-lowest border border-outline-variant rounded p-4">
<!-- Table Toolbar & Filters -->
<div class="flex items-center justify-between pb-3 mb-3 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">format_list_bulleted</span>
<span class="font-label-md text-label-md font-bold text-primary uppercase">Priority Risk Queue</span>
<span class="px-2 py-0.5 bg-primary-container text-on-primary font-mono text-[10px] font-bold rounded">42 ACTIVE</span>
</div>
<!-- Filters -->
<div class="flex items-center gap-3 text-xs">
<div class="flex items-center gap-1.5">
<span class="font-mono text-outline text-[11px]">SEVERITY:</span>
<select class="h-7 px-2 bg-surface-container border border-outline-variant rounded font-mono text-[11px] text-on-surface focus:ring-0">
<option>ALL (Critical + High)</option>
<option>Critical Only (4)</option>
<option>High Only (11)</option>
</select>
</div>
<div class="flex items-center gap-1.5">
<span class="font-mono text-outline text-[11px]">DOMAIN:</span>
<select class="h-7 px-2 bg-surface-container border border-outline-variant rounded font-mono text-[11px] text-on-surface focus:ring-0">
<option>All Domains</option>
<option>Inventory (14)</option>
<option>Routes &amp; Passes (9)</option>
<option>Transport (11)</option>
</select>
</div>
<div class="flex items-center gap-1.5">
<span class="font-mono text-outline text-[11px]">HORIZON:</span>
<select class="h-7 px-2 bg-surface-container border border-outline-variant rounded font-mono text-[11px] text-on-surface focus:ring-0">
<option>&lt; 7 Days</option>
<option>&lt; 24 Hours</option>
<option>&lt; 30 Days</option>
</select>
</div>
<button class="h-7 px-2.5 bg-surface-container border border-outline-variant rounded font-label-sm text-label-sm text-on-surface hover:bg-surface-container-high flex items-center gap-1">
<span class="material-symbols-outlined text-[13px]">filter_alt</span>
<span>Reset</span>
</button>
</div>
</div>
<!-- Dense Data Table -->
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container border-b-2 border-secondary text-primary font-label-xs text-label-xs uppercase tracking-wider">
<th class="py-2.5 px-3">Risk ID</th>
<th class="py-2.5 px-3">Severity</th>
<th class="py-2.5 px-3">Domain</th>
<th class="py-2.5 px-3">Target Entity</th>
<th class="py-2.5 px-3">Risk Event Descriptor</th>
<th class="py-2.5 px-3 text-right">Probability</th>
<th class="py-2.5 px-3">Operational Impact</th>
<th class="py-2.5 px-3 text-center">Time to Impact</th>
<th class="py-2.5 px-3 text-center">Confidence</th>
<th class="py-2.5 px-3">Status</th>
<th class="py-2.5 px-3 text-right">Action</th>
</tr>
</thead>
<tbody class="font-body-sm text-body-sm divide-y divide-outline-variant">
<!-- ROW 1: RISK-1042 (SELECTED ROW - Styled with Olive Highlight & Keyline) -->
<tr class="bg-secondary-container/40 border-l-4 border-l-secondary hover:bg-secondary-container/60 transition-colors">
<td class="py-2.5 px-3 font-mono font-bold text-primary flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]"></span>
<span>RISK-1042</span>
</td>
<td class="py-2.5 px-3">
<span class="px-2 py-0.5 bg-[#9E2A2B] text-white font-mono text-[10px] font-bold rounded">CRITICAL</span>
</td>
<td class="py-2.5 px-3 font-medium text-primary">Inventory</td>
<td class="py-2.5 px-3 font-mono text-primary font-semibold">LOC-0042 (Post Alpha)</td>
<td class="py-2.5 px-3 text-on-surface">Diesel Fuel Stockout (Class III POL)</td>
<td class="py-2.5 px-3 text-right">
<div class="inline-flex items-center gap-1.5">
<div class="w-12 bg-surface-container h-1.5 rounded overflow-hidden">
<div class="bg-[#9E2A2B] h-full" style="width: 91%"></div>
</div>
<span class="tabular-mono font-bold text-[#9E2A2B]">91%</span>
</div>
</td>
<td class="py-2.5 px-3 font-medium text-[#9E2A2B]">Loss of outpost heating &amp; gen backup</td>
<td class="py-2.5 px-3 text-center tabular-mono font-bold text-primary">6 Days <span class="text-outline text-[11px]">(T-144h)</span></td>
<td class="py-2.5 px-3 text-center tabular-mono text-on-surface-variant">94%</td>
<td class="py-2.5 px-3">
<span class="px-1.5 py-0.5 bg-[#C49A45]/20 text-[#7A5B18] font-mono text-[10px] font-bold rounded border border-[#C49A45]">OPEN (AWAITING)</span>
</td>
<td class="py-2.5 px-3 text-right">
<button class="h-6 px-2.5 bg-primary-container text-white text-[11px] font-label-sm rounded hover:bg-secondary font-semibold">
                    Investigate
                  </button>
</td>
</tr>
<!-- ROW 2: RISK-1055 -->
<tr class="hover:bg-surface-container transition-colors">
<td class="py-2.5 px-3 font-mono font-bold text-primary">RISK-1055</td>
<td class="py-2.5 px-3">
<span class="px-2 py-0.5 bg-[#C49A45] text-white font-mono text-[10px] font-bold rounded">HIGH</span>
</td>
<td class="py-2.5 px-3 text-on-surface-variant">Routes &amp; Passes</td>
<td class="py-2.5 px-3 font-mono text-on-surface">RTE-021 (Zojila Pass)</td>
<td class="py-2.5 px-3 text-on-surface">Black Ice &amp; Blizzard Avalanche Hazard</td>
<td class="py-2.5 px-3 text-right">
<div class="inline-flex items-center gap-1.5">
<div class="w-12 bg-surface-container h-1.5 rounded overflow-hidden">
<div class="bg-[#C49A45] h-full" style="width: 78%"></div>
</div>
<span class="tabular-mono font-bold text-[#7A5B18]">78%</span>
</div>
</td>
<td class="py-2.5 px-3 text-on-surface-variant">Convoy stall &gt; 14 hrs on NH-1D</td>
<td class="py-2.5 px-3 text-center tabular-mono font-bold text-[#7A5B18]">18 Hours <span class="text-outline text-[11px]">(T-18h)</span></td>
<td class="py-2.5 px-3 text-center tabular-mono text-on-surface-variant">91%</td>
<td class="py-2.5 px-3">
<span class="px-1.5 py-0.5 bg-secondary-container text-on-secondary-container font-mono text-[10px] font-bold rounded">INVESTIGATING</span>
</td>
<td class="py-2.5 px-3 text-right">
<button class="h-6 px-2.5 bg-surface-container border border-outline-variant text-[11px] font-label-sm rounded hover:bg-surface-container-high">
                    Details
                  </button>
</td>
</tr>
<!-- ROW 3: RISK-1064 -->
<tr class="hover:bg-surface-container transition-colors">
<td class="py-2.5 px-3 font-mono font-bold text-primary">RISK-1064</td>
<td class="py-2.5 px-3">
<span class="px-2 py-0.5 bg-[#C49A45] text-white font-mono text-[10px] font-bold rounded">HIGH</span>
</td>
<td class="py-2.5 px-3 text-on-surface-variant">Transport</td>
<td class="py-2.5 px-3 font-mono text-on-surface">Stallion Fleet Div-04</td>
<td class="py-2.5 px-3 text-on-surface">Axle Stress &amp; Overdue Grade-B Maintenance</td>
<td class="py-2.5 px-3 text-right">
<div class="inline-flex items-center gap-1.5">
<div class="w-12 bg-surface-container h-1.5 rounded overflow-hidden">
<div class="bg-[#C49A45] h-full" style="width: 74%"></div>
</div>
<span class="tabular-mono font-bold text-[#7A5B18]">74%</span>
</div>
</td>
<td class="py-2.5 px-3 text-on-surface-variant">22 MT payload immobilization</td>
<td class="py-2.5 px-3 text-center tabular-mono font-medium text-primary">3 Days <span class="text-outline text-[11px]">(T-72h)</span></td>
<td class="py-2.5 px-3 text-center tabular-mono text-on-surface-variant">96%</td>
<td class="py-2.5 px-3">
<span class="px-1.5 py-0.5 bg-surface-container text-on-surface-variant font-mono text-[10px] font-bold rounded border border-outline-variant">OPEN</span>
</td>
<td class="py-2.5 px-3 text-right">
<button class="h-6 px-2.5 bg-surface-container border border-outline-variant text-[11px] font-label-sm rounded hover:bg-surface-container-high">
                    Details
                  </button>
</td>
</tr>
<!-- ROW 4: RISK-1071 -->
<tr class="hover:bg-surface-container transition-colors">
<td class="py-2.5 px-3 font-mono font-bold text-primary">RISK-1071</td>
<td class="py-2.5 px-3">
<span class="px-2 py-0.5 bg-secondary-container text-on-secondary-container font-mono text-[10px] font-bold rounded border border-secondary">MEDIUM</span>
</td>
<td class="py-2.5 px-3 text-on-surface-variant">Forward Demand</td>
<td class="py-2.5 px-3 font-mono text-on-surface">Kargil Sector Hospital</td>
<td class="py-2.5 px-3 text-on-surface">Cold-Chain Plasma Surge (+24% sub-zero)</td>
<td class="py-2.5 px-3 text-right">
<div class="inline-flex items-center gap-1.5">
<div class="w-12 bg-surface-container h-1.5 rounded overflow-hidden">
<div class="bg-secondary h-full" style="width: 68%"></div>
</div>
<span class="tabular-mono font-medium text-primary">68%</span>
</div>
</td>
<td class="py-2.5 px-3 text-on-surface-variant">Depletion of emergency blood buffer</td>
<td class="py-2.5 px-3 text-center tabular-mono font-medium text-primary">5 Days <span class="text-outline text-[11px]">(T-120h)</span></td>
<td class="py-2.5 px-3 text-center tabular-mono text-on-surface-variant">88%</td>
<td class="py-2.5 px-3">
<span class="px-1.5 py-0.5 bg-secondary-container text-on-secondary-container font-mono text-[10px] font-bold rounded">MITIGATION PLANNED</span>
</td>
<td class="py-2.5 px-3 text-right">
<button class="h-6 px-2.5 bg-surface-container border border-outline-variant text-[11px] font-label-sm rounded hover:bg-surface-container-high">
                    Details
                  </button>
</td>
</tr>
<!-- ROW 5: RISK-1088 -->
<tr class="hover:bg-surface-container transition-colors">
<td class="py-2.5 px-3 font-mono font-bold text-primary">RISK-1088</td>
<td class="py-2.5 px-3">
<span class="px-2 py-0.5 bg-[#9E2A2B] text-white font-mono text-[10px] font-bold rounded">CRITICAL</span>
</td>
<td class="py-2.5 px-3 text-on-surface-variant">Locations &amp; Depots</td>
<td class="py-2.5 px-3 font-mono text-on-surface">Bodhkharbu Staging Bay</td>
<td class="py-2.5 px-3 text-on-surface">Depot Flooding / Runoff Silt Inundation</td>
<td class="py-2.5 px-3 text-right">
<div class="inline-flex items-center gap-1.5">
<div class="w-12 bg-surface-container h-1.5 rounded overflow-hidden">
<div class="bg-[#9E2A2B] h-full" style="width: 84%"></div>
</div>
<span class="tabular-mono font-bold text-[#9E2A2B]">84%</span>
</div>
</td>
<td class="py-2.5 px-3 font-medium text-[#9E2A2B]">Loading apron contamination &amp; lock</td>
<td class="py-2.5 px-3 text-center tabular-mono font-bold text-[#9E2A2B]">36 Hours <span class="text-outline text-[11px]">(T-36h)</span></td>
<td class="py-2.5 px-3 text-center tabular-mono text-on-surface-variant">92%</td>
<td class="py-2.5 px-3">
<span class="px-1.5 py-0.5 bg-surface-container text-on-surface-variant font-mono text-[10px] font-bold rounded border border-outline-variant">OPEN</span>
</td>
<td class="py-2.5 px-3 text-right">
<button class="h-6 px-2.5 bg-surface-container border border-outline-variant text-[11px] font-label-sm rounded hover:bg-surface-container-high">
                    Details
                  </button>
</td>
</tr>
</tbody>
</table>
</div>
<div class="pt-3 mt-2 border-t border-outline-variant flex justify-between items-center text-xs font-mono text-outline">
<span>SHOWING 5 OF 42 MONITORED LOGISTICS RISKS</span>
<div class="flex items-center gap-2">
<button class="px-2 py-0.5 bg-surface-container rounded border border-outline-variant hover:text-on-surface">&lt; PREV</button>
<span class="text-primary font-bold">1 / 9</span>
<button class="px-2 py-0.5 bg-surface-container rounded border border-outline-variant hover:text-on-surface">NEXT &gt;</button>
</div>
</div>
</section>
<!-- ======================================================== -->
<!-- SECTION 6: SELECTED RISK INSPECTION DOSSIER (RISK-1042 FOCUS) -->
<!-- ======================================================== -->
<section class="bg-surface-container-lowest border-2 border-secondary rounded p-5 relative">
<!-- Top Dossier Identification Banner -->
<div class="flex items-start justify-between pb-4 border-b border-outline-variant">
<div>
<div class="flex items-center gap-2.5">
<span class="px-2 py-0.5 bg-[#9E2A2B] text-white font-mono text-xs font-bold rounded">CRITICAL DOSSIER</span>
<h2 class="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">
                RISK-1042 — Fuel Stockout Risk at Forward Post Alpha (LOC-0042)
              </h2>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Class III POL (Arctic High-Grade Diesel) depletion timeline accelerating due to sustained sub-zero temperatures.
            </p>
</div>
<div class="text-right font-mono text-xs">
<span class="text-outline">TARGET OUTPOST:</span>
<span class="font-bold text-primary ml-1">SECTOR IV-B // ELEV: 4,820M</span>
<div class="text-[#9E2A2B] font-bold text-sm mt-0.5">T-MINUS 144 HOURS TO RUNWAY BREACH</div>
</div>
</div>
<!-- 3-Column Decomposition -->
<div class="grid grid-cols-12 gap-5 py-4">
<!-- Col A: Risk Drivers Decomposition (4 cols) -->
<div class="col-span-4 bg-surface-container-low p-3.5 rounded border border-outline-variant flex flex-col justify-between">
<div>
<div class="flex items-center justify-between pb-2 border-b border-outline-variant">
<span class="font-label-sm text-label-sm font-bold text-primary uppercase">Risk Drivers Decomposition</span>
<span class="material-symbols-outlined text-outline text-[16px]">oil_barrel</span>
</div>
<div class="space-y-2.5 mt-3 text-xs">
<div class="flex justify-between items-center">
<span class="text-on-surface-variant">Current Physical Inventory:</span>
<span class="font-mono font-bold text-primary tabular-mono">4,200 L</span>
</div>
<div class="flex justify-between items-center">
<span class="text-on-surface-variant">Daily Consumption Burn:</span>
<span class="font-mono font-bold text-[#9E2A2B] tabular-mono">680 L/day (+18% surge)</span>
</div>
<div class="flex justify-between items-center">
<span class="text-on-surface-variant">Safety Stock Minimum:</span>
<span class="font-mono font-bold text-outline tabular-mono">2,000 L (Threshold)</span>
</div>
<div class="flex justify-between items-center">
<span class="text-on-surface-variant">Projected Zero-Buffer Date:</span>
<span class="font-mono font-bold text-[#9E2A2B] tabular-mono">15 OCT 2024</span>
</div>
<div class="flex justify-between items-center pt-2 border-t border-outline-variant">
<span class="text-on-surface-variant">Incoming Sortie Replenishment:</span>
<span class="font-mono font-bold text-secondary tabular-mono">SHP-2048 (+5,000 L)</span>
</div>
</div>
</div>
<div class="mt-3 p-2 bg-surface-container rounded border border-outline-variant text-[11px] font-mono text-on-surface-variant">
<strong class="text-primary">Root Causal Driver:</strong> Demand surge from continuous generator heating runtimes combined with single mountain pass vulnerability creates zero tolerance for convoy stall.
            </div>
</div>
<!-- Col B: Operational Entity Impact Chain (4 cols) -->
<div class="col-span-4 bg-surface-container-low p-3.5 rounded border border-outline-variant flex flex-col justify-between">
<div>
<div class="flex items-center justify-between pb-2 border-b border-outline-variant">
<span class="font-label-sm text-label-sm font-bold text-primary uppercase">Operational Entity Impact Chain</span>
<span class="material-symbols-outlined text-outline text-[16px]">account_tree</span>
</div>
<div class="space-y-2 mt-3 text-xs font-mono">
<!-- Node 1 -->
<div class="p-2 bg-surface-container-lowest rounded border border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[15px] text-[#9E2A2B]">pin_drop</span>
<div>
<div class="font-bold text-primary">LOC-0042 Post Alpha</div>
<div class="text-[10px] text-outline">Target Garrison Site</div>
</div>
</div>
<button class="px-2 py-0.5 bg-surface-container border border-outline-variant rounded text-[10px] hover:bg-surface-container-high">RL-09 →</button>
</div>
<!-- Node 2 -->
<div class="p-2 bg-surface-container-lowest rounded border border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[15px] text-[#C49A45]">inventory</span>
<div>
<div class="font-bold text-primary">Arctic Diesel Class III</div>
<div class="text-[10px] text-outline">SKU: POL-DL-48</div>
</div>
</div>
<button class="px-2 py-0.5 bg-surface-container border border-outline-variant rounded text-[10px] hover:bg-surface-container-high">RL-12 →</button>
</div>
<!-- Node 3 -->
<div class="p-2 bg-surface-container-lowest rounded border border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[15px] text-secondary">local_shipping</span>
<div>
<div class="font-bold text-primary">Sortie SHP-2048</div>
<div class="text-[10px] text-outline">ETA 14:35 IST via Convoy 9</div>
</div>
</div>
<button class="px-2 py-0.5 bg-surface-container border border-outline-variant rounded text-[10px] hover:bg-surface-container-high">RL-25 →</button>
</div>
<!-- Node 4 -->
<div class="p-2 bg-surface-container-lowest rounded border border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[15px] text-outline">alt_route</span>
<div>
<div class="font-bold text-primary">RTE-018 Leh Axis</div>
<div class="text-[10px] text-outline">Bottleneck Pass Corridor</div>
</div>
</div>
<button class="px-2 py-0.5 bg-surface-container border border-outline-variant rounded text-[10px] hover:bg-surface-container-high">RL-28 →</button>
</div>
</div>
</div>
<div class="text-[10px] font-mono text-outline pt-2 text-right">
              CROSS-MODULE GRAPH LINKED // 4 REPOSITORIES
            </div>
</div>
<!-- Col C: Risk Evolution Timeline (4 cols) -->
<div class="col-span-4 bg-surface-container-low p-3.5 rounded border border-outline-variant flex flex-col justify-between">
<div>
<div class="flex items-center justify-between pb-2 border-b border-outline-variant">
<span class="font-label-sm text-label-sm font-bold text-primary uppercase">Risk Evolution Timeline</span>
<span class="material-symbols-outlined text-outline text-[16px]">history</span>
</div>
<div class="relative pl-4 space-y-3 mt-3 text-xs before:absolute before:left-1.5 before:top-1.5 before:bottom-1.5 before:w-0.5 before:bg-outline-variant font-mono">
<!-- Step 1 -->
<div class="relative">
<div class="absolute -left-4 top-1 w-2 h-2 rounded-full bg-outline"></div>
<div class="font-bold text-on-surface">05 Oct (D-4)</div>
<div class="text-on-surface-variant text-[11px]">Demand spike (+18%) detected from sub-zero heating runtimes.</div>
</div>
<!-- Step 2 -->
<div class="relative">
<div class="absolute -left-4 top-1 w-2 h-2 rounded-full bg-outline"></div>
<div class="font-bold text-on-surface">06 Oct (D-3)</div>
<div class="text-on-surface-variant text-[11px]">Actual consumption exceeded 90-day baseline by 140 L/day.</div>
</div>
<!-- Step 3 -->
<div class="relative">
<div class="absolute -left-4 top-1 w-2 h-2 rounded-full bg-[#C49A45]"></div>
<div class="font-bold text-[#7A5B18]">07 Oct (D-2)</div>
<div class="text-on-surface-variant text-[11px]">Forecast engine revised projected stockout date to 15 Oct.</div>
</div>
<!-- Step 4 -->
<div class="relative">
<div class="absolute -left-4 top-1 w-2 h-2 rounded-full bg-[#9E2A2B]"></div>
<div class="font-bold text-[#9E2A2B]">08 Oct (D-1)</div>
<div class="text-on-surface-variant text-[11px]">Fotu La snowstorm advisory issued; stockout probability escalated &gt;80%.</div>
</div>
<!-- Current -->
<div class="relative">
<div class="absolute -left-4 top-1 w-2.5 h-2.5 rounded-full bg-[#9E2A2B] ring-2 ring-white"></div>
<div class="font-bold text-[#9E2A2B]">09 Oct (Today)</div>
<div class="text-primary font-medium text-[11px]">Critical threshold: 91% stockout prob without confirmed handover.</div>
</div>
</div>
</div>
<div class="pt-2 text-[10px] font-mono text-outline flex items-center justify-between border-t border-outline-variant mt-2">
<span>ALGORITHM: PREDICT-NET v4.8</span>
<span class="text-secondary font-semibold">CONFIDENCE: 94%</span>
</div>
</div>
</div>
</section>
<!-- ======================================================== -->
<!-- SECTION 7: CASCADING RISK CORRELATION & PRESCRIPTIVE MITIGATION -->
<!-- ======================================================== -->
<section class="grid grid-cols-12 gap-5">
<!-- Cascading Risk Correlation Chains (5 cols) -->
<div class="col-span-5 bg-surface-container-lowest border border-outline-variant rounded p-4 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between pb-3 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">hub</span>
<span class="font-label-md text-label-md font-bold text-primary uppercase">Cascading Risk Chains</span>
</div>
<span class="font-mono text-[10px] text-outline">MULTI-DOMAIN CORRELATION</span>
</div>
<div class="space-y-4 py-3">
<!-- Chain A -->
<div class="p-3 bg-surface-container rounded border border-outline-variant">
<div class="flex justify-between items-center mb-2">
<span class="font-mono text-xs font-bold text-primary">CASCADE VECTOR A // WEATHER → POL</span>
<span class="px-1.5 py-0.2 bg-[#9E2A2B] text-white font-mono text-[9px] font-bold rounded">HIGH THREAT</span>
</div>
<div class="flex items-center gap-1.5 font-mono text-[11px] text-on-surface-variant flex-wrap">
<span class="px-1.5 py-0.5 bg-surface-container-lowest rounded border border-outline-variant">Sub-zero Cold Front</span>
<span>→</span>
<span class="px-1.5 py-0.5 bg-surface-container-lowest rounded border border-outline-variant">Heating Surge (+18%)</span>
<span>→</span>
<span class="px-1.5 py-0.5 bg-[#ffdad6] text-[#9E2A2B] font-bold rounded border border-[#9E2A2B]">Burn &gt; 680L</span>
<span>→</span>
<span class="px-1.5 py-0.5 bg-[#9E2A2B] text-white font-bold rounded">Stockout LOC-0042</span>
</div>
</div>
<!-- Chain B -->
<div class="p-3 bg-surface-container rounded border border-outline-variant">
<div class="flex justify-between items-center mb-2">
<span class="font-mono text-xs font-bold text-primary">CASCADE VECTOR B // PASS → CORRIDOR</span>
<span class="px-1.5 py-0.2 bg-[#C49A45] text-white font-mono text-[9px] font-bold rounded">BOTTLENECK</span>
</div>
<div class="flex items-center gap-1.5 font-mono text-[11px] text-on-surface-variant flex-wrap">
<span class="px-1.5 py-0.5 bg-surface-container-lowest rounded border border-outline-variant">Zojila Black Ice</span>
<span>→</span>
<span class="px-1.5 py-0.5 bg-surface-container-lowest rounded border border-outline-variant">RTE-021 Choke</span>
<span>→</span>
<span class="px-1.5 py-0.5 bg-surface-container-lowest rounded border border-outline-variant">Diverted to RTE-018</span>
<span>→</span>
<span class="px-1.5 py-0.5 bg-secondary-container text-on-secondary-container font-bold rounded">Corridor Cap 91%</span>
</div>
</div>
</div>
</div>
<div class="pt-2 border-t border-outline-variant text-[11px] font-mono text-outline flex items-center justify-between">
<span>GRAPH TRAVERSAL DEPTH: 4 HOPS</span>
<span>CROSS-SECTOR VALIDATED</span>
</div>
</div>
<!-- Prescriptive Mitigation Directives (7 cols) -->
<div class="col-span-7 bg-surface-container-lowest border-2 border-secondary rounded p-4 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between pb-3 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">bolt</span>
<span class="font-label-md text-label-md font-bold text-primary uppercase">Prescriptive Mitigation Desk</span>
</div>
<span class="px-2 py-0.5 bg-secondary text-white font-mono text-[10px] font-bold rounded">AI SYNTHESIS // 94% CONF</span>
</div>
<!-- Primary Recommended Mitigation -->
<div class="mt-3 p-3.5 bg-secondary-container/30 border border-secondary rounded">
<div class="flex items-center justify-between mb-1.5">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="font-label-sm text-label-sm font-bold text-primary uppercase tracking-wide">
                    PRIMARY DIRECTIVE: RESERVE DISPATCH (RECOMMENDED)
                  </span>
</div>
<span class="font-mono text-xs font-bold text-secondary">PROBABILITY IMPACT: 91% → 14%</span>
</div>
<p class="font-body-sm text-body-sm text-primary mb-2">
                Authorize immediate reserve dispatch of <strong>+2,500 L</strong> Arctic Diesel via Secondary Sortie <strong>SHP-2062</strong> from Bodhkharbu Staging Depot (DEP-0002).
              </p>
<div class="grid grid-cols-3 gap-2 py-2 border-t border-secondary/30 text-xs font-mono">
<div>
<span class="text-on-surface-variant block text-[10px]">NEW RUNWAY:</span>
<span class="font-bold text-primary">18.5 DAYS (SAFE)</span>
</div>
<div>
<span class="text-on-surface-variant block text-[10px]">TRANSIT TIME:</span>
<span class="font-bold text-primary">4.2 HRS VIA BRO</span>
</div>
<div>
<span class="text-on-surface-variant block text-[10px]">ALGORITHM CONFIDENCE:</span>
<span class="font-bold text-secondary">94.2%</span>
</div>
</div>
</div>
<!-- Alternative Action -->
<div class="mt-2.5 p-2.5 bg-surface-container rounded border border-outline-variant flex items-center justify-between text-xs">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[16px] text-outline">alt_route</span>
<div>
<span class="font-bold text-primary">ALTERNATIVE:</span>
<span class="text-on-surface-variant ml-1">Fast-track SHP-2048 transit with BRO Priority Snow Escort (Advance ETA by 45m).</span>
</div>
</div>
<span class="font-mono text-[11px] text-outline">Risk 91% → 38%</span>
</div>
</div>
<!-- Human-in-the-Loop Operational Actions -->
<div class="pt-3 border-t border-outline-variant flex items-center justify-between gap-3">
<button class="h-9 px-4 bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold rounded border border-primary hover:bg-secondary transition-colors flex items-center gap-2">
<span class="material-symbols-outlined text-[16px]">check_circle</span>
<span>EXECUTE MITIGATION DIRECTIVE</span>
</button>
<button class="h-9 px-3.5 bg-surface-container border border-outline-variant font-label-sm text-label-sm text-on-surface rounded hover:bg-surface-container-high transition-colors flex items-center gap-1.5">
<span class="material-symbols-outlined text-[16px]">science</span>
<span>RUN WHAT-IF SIMULATION (RL-30)</span>
</button>
<button class="h-9 px-3 bg-surface-container border border-outline-variant font-label-sm text-label-sm text-on-surface-variant rounded hover:text-on-surface hover:bg-surface-container-high transition-colors">
              ACKNOWLEDGE &amp; DEFER
            </button>
</div>
</div>
</section>
</main>`;
