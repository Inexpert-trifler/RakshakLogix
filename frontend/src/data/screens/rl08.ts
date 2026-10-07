// Screen: RL-08 — Locations Overview
// Route: /locations
export const rl08Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto flex-1 flex flex-col bg-background">
<!-- A. OPERATIONAL SUMMARY KPI STRIP -->
<section class="w-full bg-surface-container-low border-b border-outline-variant px-6 py-2.5">
<div class="max-w-[1720px] mx-auto flex flex-wrap items-center justify-between gap-4 font-mono-tabular text-body-sm font-body-sm">
<div class="flex flex-wrap items-center gap-6">
<!-- Total Locations -->
<div class="flex items-center gap-2">
<span class="text-label-xs font-label-xs uppercase font-bold text-on-surface-variant tracking-wider">Total Locations</span>
<span class="text-headline-sm font-headline-sm font-bold text-primary">42</span>
</div>
<div class="h-4 w-px bg-outline-variant"></div>
<!-- Operational -->
<div class="flex items-center gap-2">
<span class="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span class="text-label-xs font-label-xs uppercase text-on-surface-variant">Operational:</span>
<span class="font-bold text-primary">36</span>
</div>
<!-- Attention Required -->
<div class="flex items-center gap-2">
<span class="w-2.5 h-2.5 rounded-full bg-[#C49A45]"></span>
<span class="text-label-xs font-label-xs uppercase text-on-surface-variant">Attention Req:</span>
<span class="font-bold text-[#7A5B18]">4</span>
</div>
<!-- High Risk -->
<div class="flex items-center gap-2">
<span class="w-2.5 h-2.5 rounded-full bg-error"></span>
<span class="text-label-xs font-label-xs uppercase text-on-surface-variant">High Risk:</span>
<span class="font-bold text-error">2</span>
</div>
<!-- Critical -->
<div class="flex items-center gap-2">
<span class="w-2.5 h-2.5 rounded-full bg-on-error-container"></span>
<span class="text-label-xs font-label-xs uppercase text-on-surface-variant">Critical Stockout:</span>
<span class="font-bold text-on-surface">0</span>
</div>
<div class="h-4 w-px bg-outline-variant"></div>
<!-- Active Shipments -->
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[16px] text-secondary" data-icon="local_shipping">local_shipping</span>
<span class="text-label-xs font-label-xs uppercase text-on-surface-variant">Active Shipments En Route:</span>
<span class="font-bold text-primary">34</span>
</div>
</div>
<!-- Sync metadata -->
<div class="flex items-center gap-3 text-label-xs font-label-xs text-on-surface-variant">
<span>Telemetry Freshness: <strong class="text-primary">14:32:08 IST</strong></span>
<button class="p-1 hover:bg-surface-container rounded transition-colors text-primary" title="Force Re-synchronization">
<span class="material-symbols-outlined text-[16px]" data-icon="refresh">refresh</span>
</button>
</div>
</div>
</section>
<!-- B. SEARCH, FILTER & VIEW CONTROLS -->
<section class="w-full bg-surface-container-lowest border-b border-outline-variant px-6 py-3">
<div class="max-w-[1720px] mx-auto flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
<!-- Left: Search & Filter Chips -->
<div class="flex flex-wrap items-center gap-2 flex-1">
<!-- Quick search input -->
<div class="relative w-full max-w-xs">
<span class="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-[18px]" data-icon="search">search</span>
<input class="w-full h-8 pl-8 pr-3 bg-surface-container-low border border-outline-variant rounded text-label-sm font-label-sm text-on-surface placeholder:text-outline focus:border-primary focus:ring-0 focus:outline-none" placeholder="Search locations by name, code, sector..." type="text" value="LOC-0042"/>
</div>
<!-- Discrete Filter Dropdowns -->
<div class="flex items-center gap-1.5 flex-wrap">
<button class="h-8 px-2.5 bg-surface-container rounded border border-outline-variant flex items-center gap-1 text-label-xs font-label-xs uppercase font-semibold text-primary hover:bg-surface-variant">
<span>Region: <strong>Sector IV-B</strong></span>
<span class="material-symbols-outlined text-[14px]" data-icon="arrow_drop_down">arrow_drop_down</span>
</button>
<button class="h-8 px-2.5 bg-surface-container-low rounded border border-outline-variant flex items-center gap-1 text-label-xs font-label-xs uppercase font-semibold text-on-surface-variant hover:bg-surface-container">
<span>Type: <strong>All Types</strong></span>
<span class="material-symbols-outlined text-[14px]" data-icon="arrow_drop_down">arrow_drop_down</span>
</button>
<button class="h-8 px-2.5 bg-surface-container-low rounded border border-outline-variant flex items-center gap-1 text-label-xs font-label-xs uppercase font-semibold text-on-surface-variant hover:bg-surface-container">
<span>Risk: <strong>Highest First</strong></span>
<span class="material-symbols-outlined text-[14px]" data-icon="arrow_drop_down">arrow_drop_down</span>
</button>
<button class="h-8 px-2.5 bg-surface-container-low rounded border border-outline-variant flex items-center gap-1 text-label-xs font-label-xs uppercase font-semibold text-on-surface-variant hover:bg-surface-container">
<span>Terrain: <strong>High-Altitude Passes</strong></span>
<span class="material-symbols-outlined text-[14px]" data-icon="arrow_drop_down">arrow_drop_down</span>
</button>
<button class="h-8 px-2 bg-surface-container-lowest rounded border border-dashed border-outline text-label-xs font-label-xs text-outline hover:text-primary hover:border-primary flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]" data-icon="filter_alt">filter_alt</span>
<span>Reset</span>
</button>
</div>
</div>
<!-- Right: Bulk Actions & View Switcher -->
<div class="flex items-center justify-between lg:justify-end gap-3 border-t lg:border-t-0 pt-2 lg:pt-0 border-outline-variant">
<!-- Bulk actions toolbar -->
<div class="flex items-center gap-1.5 bg-secondary-container/40 px-2 py-1 rounded border border-secondary/30">
<span class="text-label-xs font-label-xs font-semibold text-on-secondary-container">2 Selected</span>
<button class="px-2 py-0.5 bg-surface-container-lowest hover:bg-surface-container rounded border border-outline-variant text-label-xs font-label-xs font-semibold text-primary">
              Export Selection
            </button>
<button class="px-2 py-0.5 bg-surface-container-lowest hover:bg-surface-container rounded border border-outline-variant text-label-xs font-label-xs font-semibold text-primary">
              Assign Region
            </button>
</div>
<!-- View Switcher Segmented Toggle -->
<div class="flex items-center bg-surface-container rounded p-0.5 border border-outline-variant">
<button class="px-3 py-1 bg-surface-container-lowest rounded text-label-xs font-label-xs uppercase font-bold text-primary shadow-xs flex items-center gap-1" id="view-toggle-list" onclick="switchView('list')">
<span class="material-symbols-outlined text-[14px]" data-icon="table_rows">table_rows</span>
<span>List</span>
</button>
<button class="px-3 py-1 hover:bg-surface-container-low rounded text-label-xs font-label-xs uppercase font-semibold text-on-surface-variant flex items-center gap-1" id="view-toggle-map" onclick="switchView('map')">
<span class="material-symbols-outlined text-[14px]" data-icon="map">map</span>
<span>Map Preview</span>
</button>
</div>
</div>
</div>
</section>
<!-- C. MAIN LOCATION INTELLIGENCE WORKSPACE -->
<div class="p-6 max-w-[1720px] mx-auto w-full flex-1 flex flex-col gap-6">
<!-- VIEW 1: DATA TABLE (DEFAULT PRIMARY VIEW) -->
<div class="bg-surface-container-lowest rounded border border-outline-variant overflow-hidden flex flex-col" id="locations-table-view">
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse font-body-sm text-body-sm">
<thead>
<tr class="bg-surface-container border-b-[1.5px] border-secondary text-primary font-headline-sm">
<th class="py-2.5 px-3 w-8 text-center">
<input class="rounded border-outline text-primary-container focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
</th>
<th class="py-2.5 px-3 text-label-xs font-label-xs uppercase font-bold text-primary tracking-wider">Location &amp; Identifier</th>
<th class="py-2.5 px-3 text-label-xs font-label-xs uppercase font-bold text-primary tracking-wider">Formation Type</th>
<th class="py-2.5 px-3 text-label-xs font-label-xs uppercase font-bold text-primary tracking-wider">Sector / Command</th>
<th class="py-2.5 px-3 text-label-xs font-label-xs uppercase font-bold text-primary tracking-wider w-36">Readiness Score</th>
<th class="py-2.5 px-3 text-label-xs font-label-xs uppercase font-bold text-primary tracking-wider">Stock Status</th>
<th class="py-2.5 px-3 text-label-xs font-label-xs uppercase font-bold text-primary tracking-wider">Consumption Trend</th>
<th class="py-2.5 px-3 text-label-xs font-label-xs uppercase font-bold text-primary tracking-wider">Risk Index</th>
<th class="py-2.5 px-3 text-label-xs font-label-xs uppercase font-bold text-primary tracking-wider">Inbound Transit</th>
<th class="py-2.5 px-3 text-label-xs font-label-xs uppercase font-bold text-primary tracking-wider">Status</th>
<th class="py-2.5 px-3 text-label-xs font-label-xs uppercase font-bold text-primary tracking-wider text-right">Operational Dossier</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant font-mono-tabular">
<!-- ROW 1: Forward Post Alpha (ACTIVE HOVERED HIGHLIGHT) -->
<tr class="hover:bg-surface-container-low transition-colors bg-secondary-fixed/10 group cursor-pointer border-l-4 border-l-error">
<td class="py-3 px-3 text-center">
<input checked="" class="rounded border-outline text-primary-container focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
</td>
<td class="py-3 px-3">
<div class="flex flex-col">
<div class="flex items-center gap-1.5">
<span class="font-bold text-primary text-body-md font-body-md">Forward Post Alpha</span>
<span class="material-symbols-outlined text-[15px] text-error" data-icon="priority_high" title="Critical Low Diesel Warning">priority_high</span>
</div>
<div class="flex items-center gap-2 mt-0.5">
<span class="text-label-xs font-label-xs text-on-surface-variant font-semibold">LOC-0042</span>
<span class="px-1.5 py-0.2 bg-surface-container rounded text-label-xs font-label-xs text-on-surface-variant">Glacial Valley // 4,200m</span>
</div>
</div>
</td>
<td class="py-3 px-3 font-body-sm font-body-sm text-on-surface">Forward Outpost (High-Alt)</td>
<td class="py-3 px-3 text-label-sm font-label-sm text-on-surface-variant">Northern Sec // IV-B</td>
<td class="py-3 px-3">
<div class="flex flex-col gap-1 w-28">
<div class="flex justify-between items-center text-label-xs font-label-xs">
<span class="font-bold text-primary">78%</span>
<span class="text-outline text-[10px]">DEFCON 3</span>
</div>
<div class="w-full h-1.5 bg-surface-container-highest rounded overflow-hidden">
<div class="h-full bg-[#C49A45] rounded" style="width: 78%"></div>
</div>
</div>
</td>
<td class="py-3 px-3">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs uppercase font-bold bg-[#ffdad6] text-[#93000a] border border-[#ffdad6]">
                    CRITICAL (POL)
                  </span>
</td>
<td class="py-3 px-3 font-semibold text-error">
<span class="flex items-center gap-0.5">
<span class="material-symbols-outlined text-[14px]" data-icon="trending_up">trending_up</span>
<span>↑ 32% (Surge)</span>
</span>
</td>
<td class="py-3 px-3">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs uppercase font-bold bg-error-container text-on-error-container border border-error">
                    HIGH RISK
                  </span>
</td>
<td class="py-3 px-3 text-label-sm font-label-sm">
<div class="flex flex-col">
<span class="font-bold text-primary">2 convoys</span>
<span class="text-outline text-label-xs font-label-xs">SH-2048 ETA 4h (42km)</span>
</div>
</td>
<td class="py-3 px-3">
<span class="flex items-center gap-1.5 text-label-xs font-label-xs font-bold text-secondary">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span>RESTRICTED</span>
</span>
</td>
<td class="py-3 px-3 text-right">
<a class="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-container-low hover:bg-surface-container text-primary rounded border border-outline-variant text-label-xs font-label-xs font-bold uppercase transition-colors" href="#">
<span>Dossier</span>
<span class="material-symbols-outlined text-[14px]" data-icon="arrow_forward">arrow_forward</span>
</a>
</td>
</tr>
<!-- ROW 2: Base Depot Leh (Central Hub) -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-3 px-3 text-center">
<input class="rounded border-outline text-primary-container focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
</td>
<td class="py-3 px-3">
<div class="flex flex-col">
<span class="font-bold text-primary text-body-md font-body-md">Central Supply Depot Leh</span>
<div class="flex items-center gap-2 mt-0.5">
<span class="text-label-xs font-label-xs text-on-surface-variant font-semibold">LOC-0001</span>
<span class="px-1.5 py-0.2 bg-surface-container rounded text-label-xs font-label-xs text-on-surface-variant">Urban Logistics Hub // 3,500m</span>
</div>
</div>
</td>
<td class="py-3 px-3 font-body-sm font-body-sm text-on-surface">Regional Supply Hub</td>
<td class="py-3 px-3 text-label-sm font-label-sm text-on-surface-variant">Northern Sec // HQ Base</td>
<td class="py-3 px-3">
<div class="flex flex-col gap-1 w-28">
<div class="flex justify-between items-center text-label-xs font-label-xs">
<span class="font-bold text-primary">96%</span>
<span class="text-outline text-[10px]">OPTIMAL</span>
</div>
<div class="w-full h-1.5 bg-surface-container-highest rounded overflow-hidden">
<div class="h-full bg-secondary rounded" style="width: 96%"></div>
</div>
</div>
</td>
<td class="py-3 px-3">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs uppercase font-bold bg-secondary-container text-on-secondary-container border border-secondary">
                    HEALTHY
                  </span>
</td>
<td class="py-3 px-3 text-on-surface-variant">
<span class="flex items-center gap-0.5">
<span class="material-symbols-outlined text-[14px]" data-icon="trending_flat">trending_flat</span>
<span>→ Stable</span>
</span>
</td>
<td class="py-3 px-3">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs uppercase font-bold bg-surface-container text-on-surface-variant border border-outline-variant">
                    NOMINAL
                  </span>
</td>
<td class="py-3 px-3 text-label-sm font-label-sm">
<div class="flex flex-col">
<span class="font-bold text-primary">14 convoys</span>
<span class="text-outline text-label-xs font-label-xs">Inbound Air/Road</span>
</div>
</td>
<td class="py-3 px-3">
<span class="flex items-center gap-1.5 text-label-xs font-label-xs font-bold text-secondary">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span>OPERATIONAL</span>
</span>
</td>
<td class="py-3 px-3 text-right">
<a class="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-container-low hover:bg-surface-container text-primary rounded border border-outline-variant text-label-xs font-label-xs font-bold uppercase transition-colors" href="#">
<span>Dossier</span>
<span class="material-symbols-outlined text-[14px]" data-icon="arrow_forward">arrow_forward</span>
</a>
</td>
</tr>
<!-- ROW 3: Forward Observation Post Charlie -->
<tr class="hover:bg-surface-container-low transition-colors border-l-4 border-l-[#C49A45]">
<td class="py-3 px-3 text-center">
<input checked="" class="rounded border-outline text-primary-container focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
</td>
<td class="py-3 px-3">
<div class="flex flex-col">
<span class="font-bold text-primary text-body-md font-body-md">Forward Post Charlie</span>
<div class="flex items-center gap-2 mt-0.5">
<span class="text-label-xs font-label-xs text-on-surface-variant font-semibold">LOC-0078</span>
<span class="px-1.5 py-0.2 bg-surface-container rounded text-label-xs font-label-xs text-on-surface-variant">Mountain Ridge // 5,100m</span>
</div>
</div>
</td>
<td class="py-3 px-3 font-body-sm font-body-sm text-on-surface">Forward Observation Post</td>
<td class="py-3 px-3 text-label-sm font-label-sm text-on-surface-variant">Northern Sec // IV-B</td>
<td class="py-3 px-3">
<div class="flex flex-col gap-1 w-28">
<div class="flex justify-between items-center text-label-xs font-label-xs">
<span class="font-bold text-primary">64%</span>
<span class="text-outline text-[10px]">DEFICIT</span>
</div>
<div class="w-full h-1.5 bg-surface-container-highest rounded overflow-hidden">
<div class="h-full bg-[#C49A45] rounded" style="width: 64%"></div>
</div>
</div>
</td>
<td class="py-3 px-3">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs uppercase font-bold bg-[#fdf6e2] text-[#7A5B18] border border-[#C49A45]">
                    LOW (RATIONS)
                  </span>
</td>
<td class="py-3 px-3 font-semibold text-[#7A5B18]">
<span class="flex items-center gap-0.5">
<span class="material-symbols-outlined text-[14px]" data-icon="trending_up">trending_up</span>
<span>↑ 18%</span>
</span>
</td>
<td class="py-3 px-3">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs uppercase font-bold bg-[#fdf6e2] text-[#7A5B18] border border-[#C49A45]">
                    ATTENTION
                  </span>
</td>
<td class="py-3 px-3 text-label-sm font-label-sm">
<div class="flex flex-col">
<span class="font-bold text-primary">1 aerial</span>
<span class="text-outline text-label-xs font-label-xs">SH-2091 ETA 11h</span>
</div>
</td>
<td class="py-3 px-3">
<span class="flex items-center gap-1.5 text-label-xs font-label-xs font-bold text-[#7A5B18]">
<span class="w-2 h-2 rounded-full bg-[#C49A45]"></span>
<span>ELEVATED WATCH</span>
</span>
</td>
<td class="py-3 px-3 text-right">
<a class="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-container-low hover:bg-surface-container text-primary rounded border border-outline-variant text-label-xs font-label-xs font-bold uppercase transition-colors" href="#">
<span>Dossier</span>
<span class="material-symbols-outlined text-[14px]" data-icon="arrow_forward">arrow_forward</span>
</a>
</td>
</tr>
<!-- ROW 4: Khardung Transit Node -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-3 px-3 text-center">
<input class="rounded border-outline text-primary-container focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
</td>
<td class="py-3 px-3">
<div class="flex flex-col">
<span class="font-bold text-primary text-body-md font-body-md">Khardung Transit Staging Node</span>
<div class="flex items-center gap-2 mt-0.5">
<span class="text-label-xs font-label-xs text-on-surface-variant font-semibold">LOC-0019</span>
<span class="px-1.5 py-0.2 bg-surface-container rounded text-label-xs font-label-xs text-on-surface-variant">Pass Chokepoint // 5,350m</span>
</div>
</div>
</td>
<td class="py-3 px-3 font-body-sm font-body-sm text-on-surface">Transit &amp; Staging Depot</td>
<td class="py-3 px-3 text-label-sm font-label-sm text-on-surface-variant">Northern Sec // IV-A</td>
<td class="py-3 px-3">
<div class="flex flex-col gap-1 w-28">
<div class="flex justify-between items-center text-label-xs font-label-xs">
<span class="font-bold text-primary">88%</span>
<span class="text-outline text-[10px]">STABLE</span>
</div>
<div class="w-full h-1.5 bg-surface-container-highest rounded overflow-hidden">
<div class="h-full bg-secondary rounded" style="width: 88%"></div>
</div>
</div>
</td>
<td class="py-3 px-3">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs uppercase font-bold bg-secondary-container text-on-secondary-container border border-secondary">
                    HEALTHY
                  </span>
</td>
<td class="py-3 px-3 text-secondary">
<span class="flex items-center gap-0.5">
<span class="material-symbols-outlined text-[14px]" data-icon="trending_down">trending_down</span>
<span>↓ 4%</span>
</span>
</td>
<td class="py-3 px-3">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs uppercase font-bold bg-surface-container text-on-surface-variant border border-outline-variant">
                    NOMINAL
                  </span>
</td>
<td class="py-3 px-3 text-label-sm font-label-sm">
<div class="flex flex-col">
<span class="font-bold text-primary">5 convoys</span>
<span class="text-outline text-label-xs font-label-xs">Pass clearance OK</span>
</div>
</td>
<td class="py-3 px-3">
<span class="flex items-center gap-1.5 text-label-xs font-label-xs font-bold text-secondary">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span>OPERATIONAL</span>
</span>
</td>
<td class="py-3 px-3 text-right">
<a class="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-container-low hover:bg-surface-container text-primary rounded border border-outline-variant text-label-xs font-label-xs font-bold uppercase transition-colors" href="#">
<span>Dossier</span>
<span class="material-symbols-outlined text-[14px]" data-icon="arrow_forward">arrow_forward</span>
</a>
</td>
</tr>
<!-- ROW 5: Siachen Base Camp Logistics Depot -->
<tr class="hover:bg-surface-container-low transition-colors border-l-4 border-l-error">
<td class="py-3 px-3 text-center">
<input class="rounded border-outline text-primary-container focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
</td>
<td class="py-3 px-3">
<div class="flex flex-col">
<div class="flex items-center gap-1.5">
<span class="font-bold text-primary text-body-md font-body-md">Siachen Base Camp Node</span>
<span class="material-symbols-outlined text-[15px] text-error" data-icon="ac_unit" title="Weather Lockout Warning">ac_unit</span>
</div>
<div class="flex items-center gap-2 mt-0.5">
<span class="text-label-xs font-label-xs text-on-surface-variant font-semibold">LOC-0009</span>
<span class="px-1.5 py-0.2 bg-surface-container rounded text-label-xs font-label-xs text-on-surface-variant">Glacial Base // 3,650m</span>
</div>
</div>
</td>
<td class="py-3 px-3 font-body-sm font-body-sm text-on-surface">Base Logistics Depot</td>
<td class="py-3 px-3 text-label-sm font-label-sm text-on-surface-variant">Northern Sec // IV-B</td>
<td class="py-3 px-3">
<div class="flex flex-col gap-1 w-28">
<div class="flex justify-between items-center text-label-xs font-label-xs">
<span class="font-bold text-primary">71%</span>
<span class="text-outline text-[10px]">WEATHER RISK</span>
</div>
<div class="w-full h-1.5 bg-surface-container-highest rounded overflow-hidden">
<div class="h-full bg-error rounded" style="width: 71%"></div>
</div>
</div>
</td>
<td class="py-3 px-3">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs uppercase font-bold bg-[#fdf6e2] text-[#7A5B18] border border-[#C49A45]">
                    LOW (MEDEVAC/O2)
                  </span>
</td>
<td class="py-3 px-3 font-semibold text-error">
<span class="flex items-center gap-0.5">
<span class="material-symbols-outlined text-[14px]" data-icon="trending_up">trending_up</span>
<span>↑ 24%</span>
</span>
</td>
<td class="py-3 px-3">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs uppercase font-bold bg-error-container text-on-error-container border border-error">
                    HIGH RISK
                  </span>
</td>
<td class="py-3 px-3 text-label-sm font-label-sm">
<div class="flex flex-col">
<span class="font-bold text-primary">1 helidrop</span>
<span class="text-outline text-label-xs font-label-xs">Delayed by blizzard (4h)</span>
</div>
</td>
<td class="py-3 px-3">
<span class="flex items-center gap-1.5 text-label-xs font-label-xs font-bold text-on-surface-variant">
<span class="w-2 h-2 rounded-full bg-outline"></span>
<span>WEATHER RESTRICTED</span>
</span>
</td>
<td class="py-3 px-3 text-right">
<a class="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-container-low hover:bg-surface-container text-primary rounded border border-outline-variant text-label-xs font-label-xs font-bold uppercase transition-colors" href="#">
<span>Dossier</span>
<span class="material-symbols-outlined text-[14px]" data-icon="arrow_forward">arrow_forward</span>
</a>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Table Pagination & Count metadata -->
<div class="py-2.5 px-4 bg-surface-container-low border-t border-outline-variant flex items-center justify-between text-label-xs font-label-xs font-mono-tabular text-on-surface-variant">
<span>Displaying 1–5 of 42 forward formations (Filtered by Sector IV-B)</span>
<div class="flex items-center gap-2">
<span class="text-outline">Page 1 of 9</span>
<div class="flex gap-1">
<button class="w-6 h-6 rounded bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-primary disabled:opacity-50" disabled="">
<span class="material-symbols-outlined text-[14px]" data-icon="chevron_left">chevron_left</span>
</button>
<button class="w-6 h-6 rounded bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-primary hover:bg-surface-container">
<span class="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
<!-- VIEW 2: EMBEDDED GEOSPATIAL MAP VIEW (TOGGLEABLE) -->
<div class="hidden flex-col bg-surface-container-lowest rounded border border-outline-variant p-4" id="locations-map-view">
<div class="flex justify-between items-center mb-3">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="explore">explore</span>
<span class="font-headline-sm text-headline-sm font-bold text-primary">Sector IV-B Tactical Elevation &amp; Node Matrix</span>
<span class="px-2 py-0.5 bg-surface-container rounded text-label-xs font-label-xs uppercase font-mono-tabular text-on-surface-variant">Topographic Contour Sync: 3D-LIDAR 1.2M</span>
</div>
<a class="text-label-xs font-label-xs uppercase font-bold text-secondary hover:text-primary flex items-center gap-1" href="#">
<span>Open Full GIS Command Center (RL-06)</span>
<span class="material-symbols-outlined text-[14px]" data-icon="open_in_new">open_in_new</span>
</a>
</div>
<!-- Geospatial Preview Canvas / Military Raster Map -->
<div class="relative w-full h-[480px] bg-[#d8dbd3] rounded border border-outline-variant overflow-hidden flex items-center justify-center">
<img class="absolute inset-0 w-full h-full object-cover opacity-85 filter contrast-125" data-alt="A tactical top-down cartographic military grid map showing mountainous terrain of Ladakh, contour lines, muted olive green and khaki terrain shading, precision latitude-longitude crosshairs, tactical node circles indicating military supply depots and convoy routes with clear labels, daylight overhead briefing style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN1xra0FepCMqbXdn0_TbaK85jcSMLEPWpycjWuqeKBAd6lG5AizFdXeXfLXZh0H2ZehSKqej9v047Q_4WI7PjaDbCOaHBp0tYxAfOVszaQ571Dk9L2fFoTHHOKygG85o0af78eDs6gqt-0bRtRrI33GrwnKHJd3iEE6Iq4Igsqb0cjHkVGf8Emt6oWeoE69zLWbk81D8joBhogre65RhNjxrV5iIdh3_1qG6GeBt4wD_Re1hg-V49"/>
<!-- Synthetic HUD Crosshairs and Overlays -->
<div class="absolute inset-0 pointer-events-none border border-outline-variant/50 p-6 flex flex-col justify-between">
<div class="flex justify-between text-label-xs font-label-xs font-mono-tabular text-primary-container bg-surface-container-lowest/80 p-2 rounded backdrop-blur-xs max-w-sm border border-outline-variant">
<span>LAT: 34°09'12"N // LONG: 77°34'38"E</span>
<span class="font-bold">ELEV: 4,200M</span>
</div>
<div class="text-label-xs font-label-xs font-mono-tabular text-on-surface bg-surface-container-lowest/80 p-2 rounded max-w-xs border border-outline-variant">
<span>CONVOY STATUS: 2 EN ROUTE TO FORWARD POST ALPHA (42 KM OUT)</span>
</div>
</div>
<!-- Tactical Marker: LOC-0042 (Forward Post Alpha) -->
<div class="absolute top-[38%] left-[45%] flex flex-col items-center group cursor-pointer z-10">
<div class="w-7 h-7 rounded-full bg-error border-2 border-surface-container-lowest flex items-center justify-center text-on-error shadow-sm animate-bounce">
<span class="material-symbols-outlined text-[16px]" data-icon="warning">warning</span>
</div>
<div class="mt-1 px-2 py-0.5 bg-primary-container text-on-primary text-label-xs font-label-xs rounded font-bold shadow-md whitespace-nowrap">
              Forward Post Alpha [CRITICAL POL]
            </div>
</div>
<!-- Tactical Marker: Central Supply Hub -->
<div class="absolute top-[60%] left-[28%] flex flex-col items-center group cursor-pointer z-10">
<div class="w-6 h-6 rounded bg-secondary border-2 border-surface-container-lowest flex items-center justify-center text-on-secondary shadow-sm">
<span class="material-symbols-outlined text-[14px]" data-icon="warehouse">warehouse</span>
</div>
<div class="mt-1 px-2 py-0.5 bg-surface-container-lowest text-primary text-label-xs font-label-xs rounded font-bold border border-outline-variant shadow-md whitespace-nowrap">
              Central Depot Leh (96%)
            </div>
</div>
<!-- Tactical Marker: Charlie Observation Post -->
<div class="absolute top-[22%] left-[68%] flex flex-col items-center group cursor-pointer z-10">
<div class="w-6 h-6 rounded-full bg-[#C49A45] border-2 border-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
<span class="material-symbols-outlined text-[14px]" data-icon="visibility">visibility</span>
</div>
<div class="mt-1 px-2 py-0.5 bg-surface-container-lowest text-primary text-label-xs font-label-xs rounded font-bold border border-outline-variant shadow-md whitespace-nowrap">
              FP Charlie [LOW RATIONS]
            </div>
</div>
</div>
</div>
<!-- D. CONTEXTUAL INSPECTION CARD: FORWARD POST ALPHA (LOC-0042) -->
<div class="bg-surface-container-low rounded border border-outline-variant p-4">
<div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-3 border-b border-outline-variant">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded bg-primary-container text-secondary-fixed flex items-center justify-center">
<span class="material-symbols-outlined text-[24px]" data-icon="hub">hub</span>
</div>
<div>
<div class="flex items-center gap-2">
<span class="font-headline-sm text-headline-sm font-bold text-primary">Selected Node Telemetry: Forward Post Alpha</span>
<span class="px-2 py-0.5 bg-error-container text-on-error-container rounded text-label-xs font-label-xs font-bold uppercase">Critical Attention</span>
</div>
<p class="text-body-sm font-body-sm text-on-surface-variant font-mono-tabular">ID: LOC-0042 // SECTOR IV-B // CO-ORD: 34.152N, 77.577E // ALTITUDE: 4,200M // POST COMMANDER: CAPT. S. RATHORE</p>
</div>
</div>
<div class="flex items-center gap-2">
<button class="px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container rounded border border-outline-variant text-label-xs font-label-xs uppercase font-bold text-primary flex items-center gap-1.5 transition-colors">
<span class="material-symbols-outlined text-[16px]" data-icon="alt_route">alt_route</span>
<span>Re-route Tanker Convoy</span>
</button>
<a class="px-3.5 py-1.5 bg-primary-container text-on-primary hover:bg-secondary rounded text-label-xs font-label-xs uppercase font-bold tracking-wider flex items-center gap-1.5 transition-colors" href="#">
<span>Open Full Dossier (RL-09)</span>
<span class="material-symbols-outlined text-[16px]" data-icon="open_in_new">open_in_new</span>
</a>
</div>
</div>
<!-- Contextual Quick Metrics Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 font-mono-tabular">
<!-- Metric 1: POL Fuel Reserve -->
<div class="p-3 bg-surface-container-lowest rounded border border-outline-variant flex flex-col justify-between">
<div class="flex justify-between items-center text-label-xs font-label-xs uppercase text-on-surface-variant">
<span>POL Diesel Inventory</span>
<span class="text-error font-bold flex items-center gap-0.5">
<span class="material-symbols-outlined text-[12px]" data-icon="warning">warning</span>
<span>Stockout in 6 Days</span>
</span>
</div>
<div class="my-2 flex items-baseline gap-1.5">
<span class="text-headline-lg font-headline-lg font-bold text-error">4.2</span>
<span class="text-label-sm font-label-sm text-outline font-semibold">KL / 20.0 KL Max</span>
</div>
<div class="w-full h-1.5 bg-surface-container-highest rounded overflow-hidden">
<div class="h-full bg-error rounded" style="width: 21%"></div>
</div>
</div>
<!-- Metric 2: Rations & Cold-chain -->
<div class="p-3 bg-surface-container-lowest rounded border border-outline-variant flex flex-col justify-between">
<div class="flex justify-between items-center text-label-xs font-label-xs uppercase text-on-surface-variant">
<span>Composite Rations</span>
<span class="text-secondary font-bold">Stable</span>
</div>
<div class="my-2 flex items-baseline gap-1.5">
<span class="text-headline-lg font-headline-lg font-bold text-primary">28</span>
<span class="text-label-sm font-label-sm text-outline font-semibold">Days Reserve (4.8 MT)</span>
</div>
<div class="w-full h-1.5 bg-surface-container-highest rounded overflow-hidden">
<div class="h-full bg-secondary rounded" style="width: 82%"></div>
</div>
</div>
<!-- Metric 3: Active Convoy Intercept -->
<div class="p-3 bg-surface-container-lowest rounded border border-outline-variant flex flex-col justify-between">
<div class="flex justify-between items-center text-label-xs font-label-xs uppercase text-on-surface-variant">
<span>Inbound Convoy SH-2048</span>
<span class="text-primary font-bold">ETA 4h 12m</span>
</div>
<div class="my-2 flex items-baseline gap-1.5">
<span class="text-headline-lg font-headline-lg font-bold text-primary">42</span>
<span class="text-label-sm font-label-sm text-outline font-semibold">KM Out // 4x4 Tanker Unit</span>
</div>
<span class="text-label-xs font-label-xs text-on-surface-variant">Pass clear; slight sleet at Chang La</span>
</div>
<!-- Metric 4: Tactical Medical & Munitions -->
<div class="p-3 bg-surface-container-lowest rounded border border-outline-variant flex flex-col justify-between">
<div class="flex justify-between items-center text-label-xs font-label-xs uppercase text-on-surface-variant">
<span>Munitions &amp; Medical O2</span>
<span class="text-secondary font-bold">Readiness Level 1</span>
</div>
<div class="my-2 flex items-baseline gap-1.5">
<span class="text-headline-lg font-headline-lg font-bold text-primary">91%</span>
<span class="text-label-sm font-label-sm text-outline font-semibold">Nominal Scale</span>
</div>
<span class="text-label-xs font-label-xs text-secondary font-semibold">Full diagnostic verified at 12:00 IST</span>
</div>
</div>
</div>
</div>
</main>
<!-- ========================================================================= -->
<!-- 4. MODAL: REGISTER NEW FORWARD NODE (Triggered by '+ Add Location')        -->
<!-- ========================================================================= -->
<div class="hidden fixed inset-0 z-50 bg-primary/60 backdrop-blur-xs flex items-center justify-center p-4" id="add-location-modal">
<div class="bg-surface-container-lowest border-2 border-secondary rounded max-w-2xl w-full p-6 shadow-xl flex flex-col gap-5">
<!-- Modal Header -->
<div class="flex items-center justify-between pb-3 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[22px]" data-icon="add_location_alt">add_location_alt</span>
<span class="font-headline-sm text-headline-sm font-bold text-primary">Register New Forward Formation / Depot Node</span>
</div>
<button class="text-outline hover:text-primary p-1" onclick="document.getElementById('add-location-modal').classList.add('hidden')">
<span class="material-symbols-outlined text-[20px]" data-icon="close">close</span>
</button>
</div>
<!-- Form Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-body-sm text-body-sm">
<div>
<label class="block text-label-xs font-label-xs uppercase font-bold text-on-surface-variant mb-1">Location Identifier (Auto-generated)</label>
<input class="w-full h-9 px-3 bg-surface-container rounded border border-outline-variant font-mono-tabular font-bold text-primary focus:outline-none" readonly="" type="text" value="LOC-0043"/>
</div>
<div>
<label class="block text-label-xs font-label-xs uppercase font-bold text-on-surface-variant mb-1">Formation Name</label>
<input class="w-full h-9 px-3 bg-surface-container-lowest rounded border border-outline-variant focus:border-secondary focus:ring-0 text-primary" placeholder="e.g. Forward Post Delta" type="text"/>
</div>
<div>
<label class="block text-label-xs font-label-xs uppercase font-bold text-on-surface-variant mb-1">Formation Type</label>
<select class="w-full h-9 px-3 bg-surface-container-lowest rounded border border-outline-variant focus:border-secondary focus:ring-0 text-primary">
<option>Forward Outpost</option>
<option>Transit &amp; Staging Point</option>
<option>Supply Depot (POL/Ration)</option>
<option>Airstrip / Helipad Staging</option>
<option>Observation Post</option>
</select>
</div>
<div>
<label class="block text-label-xs font-label-xs uppercase font-bold text-on-surface-variant mb-1">Sector / Command Jurisdiction</label>
<select class="w-full h-9 px-3 bg-surface-container-lowest rounded border border-outline-variant focus:border-secondary focus:ring-0 text-primary">
<option>Northern Sector // Sub-sector IV-B (Leh)</option>
<option>Northern Sector // Sub-sector IV-A (Kargil)</option>
<option>Northern Sector // Sub-sector V (Siachen)</option>
<option>Eastern Sector // Sub-sector II</option>
</select>
</div>
<div>
<label class="block text-label-xs font-label-xs uppercase font-bold text-on-surface-variant mb-1">Co-ordinates &amp; Altitude</label>
<input class="w-full h-9 px-3 bg-surface-container-lowest rounded border border-outline-variant focus:border-secondary focus:ring-0 text-primary font-mono-tabular" placeholder="34.120N, 77.410E // 4,100M" type="text"/>
</div>
<div>
<label class="block text-label-xs font-label-xs uppercase font-bold text-on-surface-variant mb-1">Terrain Category</label>
<select class="w-full h-9 px-3 bg-surface-container-lowest rounded border border-outline-variant focus:border-secondary focus:ring-0 text-primary">
<option>Glacial Valley / Permafrost</option>
<option>High-Altitude Mountain Pass</option>
<option>Riverine Gorge</option>
<option>Semi-Arid High Plateau</option>
</select>
</div>
<div>
<label class="block text-label-xs font-label-xs uppercase font-bold text-on-surface-variant mb-1">POL Capacity (Kiloliters)</label>
<input class="w-full h-9 px-3 bg-surface-container-lowest rounded border border-outline-variant focus:border-secondary focus:ring-0 text-primary font-mono-tabular" placeholder="25" type="number"/>
</div>
<div>
<label class="block text-label-xs font-label-xs uppercase font-bold text-on-surface-variant mb-1">Strategic Supply Priority</label>
<select class="w-full h-9 px-3 bg-surface-container-lowest rounded border border-outline-variant focus:border-secondary focus:ring-0 text-primary">
<option>Priority 1 (Critical Line of Actual Control)</option>
<option>Priority 2 (Secondary Ridge Defense)</option>
<option>Priority 3 (Logistics Feeder Node)</option>
<option>Priority 4 (Reserve Base)</option>
</select>
</div>
</div>
<!-- Modal Footer -->
<div class="flex items-center justify-end gap-3 pt-3 border-t border-outline-variant mt-2">
<button class="px-4 py-2 bg-surface-container hover:bg-surface-variant rounded text-label-xs font-label-xs uppercase font-semibold text-primary transition-colors" onclick="document.getElementById('add-location-modal').classList.add('hidden')">
          Cancel
        </button>
<button class="px-5 py-2 bg-primary-container text-on-primary hover:bg-secondary rounded text-label-xs font-label-xs uppercase font-bold tracking-wider transition-colors border border-primary-container" onclick="document.getElementById('add-location-modal').classList.add('hidden')">
          Register Forward Node
        </button>
</div>
</div>
</div>
<!-- Inline Script for Interactive Switching & Controls -->`;
