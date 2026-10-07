// Screen: RL-24 — Shipment Management
// Route: /shipments
export const rl24Html = `<!-- ========================================================================= -->
<!-- MAIN WORKSPACE CONTAINER (Offset by 280px left rail)                      -->
<!-- ========================================================================= -->
<div class="w-full flex-1 flex-1 flex flex-col h-screen overflow-hidden bg-background">
<!-- ======================================================================= -->
<!-- TOP COMMAND BAR (TopNavBar Component)                                   -->
<!-- ======================================================================= -->
<header class="h-14 px-6 bg-surface-container-lowest border-b border-outline-variant flex items-center justify-between shrink-0">
<!-- Left: Breadcrumb Context & Tactical Coordinates -->
<div class="flex items-center gap-5">
<div class="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant">
<span class="uppercase tracking-wider">Transport</span>
<span class="material-symbols-outlined text-[14px]">chevron_right</span>
<span class="text-primary font-semibold border-b-2 border-primary pb-0.5">Shipments (RL-24)</span>
</div>
<div class="h-4 w-px bg-outline-variant"></div>
<div class="flex items-center gap-3 text-[11px] font-mono text-on-surface-variant">
<div class="flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded border border-outline-variant">
<span class="material-symbols-outlined text-[13px] text-secondary">explore</span>
<span>34.1526° N, 77.5771° E // SECTOR IV-B LEH</span>
</div>
<span class="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed font-semibold rounded text-[10px] border border-secondary">
            DEFCON 3: YELLOW ALERT
          </span>
<span class="text-outline">SYNC: ACTIVE (0.4s)</span>
</div>
</div>
<!-- Right: Search, Trailing Tactical Actions & Quick Profile -->
<div class="flex items-center gap-3">
<!-- Quick Search Bar -->
<div class="relative w-64">
<span class="material-symbols-outlined absolute left-2.5 top-2 text-[16px] text-outline">search</span>
<input class="w-full h-8 w-full flex-1 pr-3 text-body-sm font-body-sm bg-surface-container-low border border-outline-variant rounded focus:border-primary focus:ring-0 focus:outline-none placeholder-outline text-on-surface" placeholder="Search manifests, vehicles, nodes..." type="text"/>
</div>
<!-- Trailing Tactical Icons -->
<button class="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-high transition-colors" title="Active Notifications">
<span class="material-symbols-outlined text-[18px]">notifications_active</span>
</button>
<button class="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-high transition-colors" title="Satellite Link Status">
<span class="material-symbols-outlined text-[18px]">satellite_alt</span>
</button>
<button class="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-high transition-colors" title="Command Help">
<span class="material-symbols-outlined text-[18px]">help_outline</span>
</button>
<div class="h-4 w-px bg-outline-variant"></div>
<!-- Actions -->
<button class="h-8 px-2.5 text-label-xs font-label-xs font-semibold uppercase tracking-wider text-error bg-error-container/40 border border-error hover:bg-error-container transition-colors rounded">
          Emergency Freeze
        </button>
<button class="h-8 px-3 text-label-xs font-label-xs font-semibold uppercase tracking-wider text-on-primary bg-primary-container hover:bg-secondary transition-colors rounded flex items-center gap-1.5 border border-primary">
<span class="material-symbols-outlined text-[14px]">send</span>
<span>Transmit Manifest</span>
</button>
</div>
</header>
<!-- ======================================================================= -->
<!-- SCROLLABLE PAGE BODY                                                    -->
<!-- ======================================================================= -->
<div class="flex-1 overflow-y-auto p-6 space-y-4">
<!-- PAGE HEADER & ACTION TOOLBAR -->
<div class="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-outline-variant pb-4">
<div>
<div class="flex items-center gap-3">
<h2 class="text-headline-lg font-headline-lg text-primary tracking-tight">Shipment Management</h2>
<span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono text-label-xs border border-outline-variant">RL-24 ACTIVE</span>
</div>
<p class="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
            Plan, monitor, prioritize, and coordinate forward logistics movements across Sector IV-B.
          </p>
</div>
<!-- Header Actions -->
<div class="flex items-center gap-2">
<div class="flex items-center gap-1.5 text-label-xs font-mono text-outline mr-2">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span>DATA UPDATED 2 MIN AGO</span>
</div>
<button class="h-8 px-3 text-label-sm font-label-sm text-on-surface bg-surface-container-lowest border border-outline hover:bg-surface-container transition-colors rounded flex items-center gap-1.5">
<span class="material-symbols-outlined text-[15px]">refresh</span>
<span>Refresh</span>
</button>
<button class="h-8 px-3 text-label-sm font-label-sm text-on-surface bg-surface-container-lowest border border-outline hover:bg-surface-container transition-colors rounded flex items-center gap-1.5">
<span class="material-symbols-outlined text-[15px]">file_upload</span>
<span>Import Manifest</span>
</button>
<button class="h-8 px-3 text-label-sm font-label-sm text-on-surface bg-surface-container-lowest border border-outline hover:bg-surface-container transition-colors rounded flex items-center gap-1.5">
<span class="material-symbols-outlined text-[15px]">download</span>
<span>Export Ledger</span>
</button>
<button class="h-8 px-3.5 text-label-sm font-label-sm font-semibold text-on-secondary bg-secondary hover:bg-secondary/90 transition-colors rounded flex items-center gap-1.5 border border-secondary">
<span class="material-symbols-outlined text-[15px]">add</span>
<span>Create Shipment</span>
</button>
</div>
</div>
<!-- ===================================================================== -->
<!-- OPERATIONAL KPI STRIP                                                 -->
<!-- ===================================================================== -->
<div class="grid grid-cols-2 md:grid-cols-6 gap-2.5">
<!-- Active Shipments -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs uppercase tracking-wider text-outline">Active Shipments</span>
<span class="material-symbols-outlined text-[16px] text-secondary">inventory</span>
</div>
<div class="flex items-baseline gap-2 mt-1">
<span class="text-headline-lg font-headline-lg font-mono text-primary">24</span>
<span class="text-label-xs font-mono text-secondary font-semibold">92% on-sched</span>
</div>
<div class="text-[11px] text-on-surface-variant mt-0.5">Tactical sorties registered</div>
</div>
<!-- In Transit -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs uppercase tracking-wider text-outline">In Transit</span>
<span class="material-symbols-outlined text-[16px] text-secondary">local_shipping</span>
</div>
<div class="flex items-baseline gap-2 mt-1">
<span class="text-headline-lg font-headline-lg font-mono text-primary">17</span>
<span class="text-label-xs font-mono text-on-surface-variant font-medium">Active sorties</span>
</div>
<div class="text-[11px] text-on-surface-variant mt-0.5">High-pass corridors active</div>
</div>
<!-- Awaiting Dispatch -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs uppercase tracking-wider text-outline">Awaiting Dispatch</span>
<span class="material-symbols-outlined text-[16px] text-outline">schedule</span>
</div>
<div class="flex items-baseline gap-2 mt-1">
<span class="text-headline-lg font-headline-lg font-mono text-primary">4</span>
<span class="text-label-xs font-mono text-outline">Staged at bays</span>
</div>
<div class="text-[11px] text-on-surface-variant mt-0.5">DEP-0002 &amp; DEP-0004</div>
</div>
<!-- Delayed / At Risk -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded border-l-2 border-l-error">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs uppercase tracking-wider text-error font-semibold">Delayed / At Risk</span>
<span class="material-symbols-outlined text-[16px] text-error">warning</span>
</div>
<div class="flex items-baseline gap-2 mt-1">
<span class="text-headline-lg font-headline-lg font-mono text-error">3</span>
<span class="text-label-xs font-mono text-error font-semibold">+42m max dev</span>
</div>
<div class="text-[11px] text-on-surface-variant mt-0.5">Zojila Pass icing hazard</div>
</div>
<!-- High / Critical Priority -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded border-l-2 border-l-amber-600">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs uppercase tracking-wider text-amber-700 font-semibold">Critical Priority</span>
<span class="material-symbols-outlined text-[16px] text-amber-700">priority_high</span>
</div>
<div class="flex items-baseline gap-2 mt-1">
<span class="text-headline-lg font-headline-lg font-mono text-primary">6</span>
<span class="text-label-xs font-mono text-amber-700 font-semibold">Forward posts</span>
</div>
<div class="text-[11px] text-on-surface-variant mt-0.5">POL fuel &amp; plasma cold-chain</div>
</div>
<!-- Committed Cargo & Capacity -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs uppercase tracking-wider text-outline">Committed Cargo</span>
<span class="material-symbols-outlined text-[16px] text-outline">weight</span>
</div>
<div class="flex items-baseline gap-1 mt-1">
<span class="text-headline-lg font-headline-lg font-mono text-primary">86.4</span>
<span class="text-body-sm font-mono text-outline">/ 214 t</span>
</div>
<div class="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden mt-1">
<div class="bg-secondary h-full rounded-full" style="width: 40.4%;"></div>
</div>
<div class="text-[10px] font-mono text-outline mt-0.5">40.4% Fleet Utilization</div>
</div>
</div>
<!-- ===================================================================== -->
<!-- SHIPMENT LIFECYCLE PIPELINE (Flow Bar)                                -->
<!-- ===================================================================== -->
<div class="bg-surface-container-lowest border border-outline-variant p-2.5 rounded flex items-center justify-between text-label-xs uppercase tracking-wider">
<div class="flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded border border-outline-variant">
<span class="w-2 h-2 rounded-full bg-outline"></span>
<span class="text-on-surface font-semibold">1. Draft (2)</span>
</div>
<span class="material-symbols-outlined text-outline text-[16px]">trending_flat</span>
<div class="flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded border border-outline-variant">
<span class="w-2 h-2 rounded-full bg-outline"></span>
<span class="text-on-surface font-semibold">2. Planned (4)</span>
</div>
<span class="material-symbols-outlined text-outline text-[16px]">trending_flat</span>
<div class="flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded border border-outline-variant">
<span class="w-2 h-2 rounded-full bg-outline"></span>
<span class="text-on-surface font-semibold">3. Assigned (3)</span>
</div>
<span class="material-symbols-outlined text-outline text-[16px]">trending_flat</span>
<div class="flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded border border-outline-variant">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="text-on-surface font-semibold">4. Dispatched (4)</span>
</div>
<span class="material-symbols-outlined text-outline text-[16px]">trending_flat</span>
<div class="flex items-center gap-1.5 px-3.5 py-1 bg-secondary text-on-secondary rounded font-bold border border-secondary shadow-sm">
<span class="w-2 h-2 rounded-full bg-secondary-fixed animate-ping"></span>
<span>5. In Transit (17 Active)</span>
</div>
<span class="material-symbols-outlined text-outline text-[16px]">trending_flat</span>
<div class="flex items-center gap-1.5 px-3 py-1 bg-surface-container-low rounded border border-outline-variant text-outline">
<span class="material-symbols-outlined text-[13px] text-secondary">check_circle</span>
<span class="text-on-surface font-semibold">6. Delivered Today (11)</span>
</div>
</div>
<!-- ===================================================================== -->
<!-- FILTERING & ACTION TOOLBAR                                            -->
<!-- ===================================================================== -->
<div class="flex flex-wrap items-center justify-between gap-2.5 pt-1">
<!-- Filter Selectors & Search -->
<div class="flex flex-wrap items-center gap-2">
<div class="relative w-72">
<span class="material-symbols-outlined absolute left-2.5 top-2 text-[15px] text-outline">filter_list</span>
<input class="w-full h-8 w-full flex-1 pr-3 text-body-sm font-body-sm bg-surface-container-lowest border border-outline-variant rounded focus:border-primary focus:ring-0 focus:outline-none" placeholder="Search by ID, Node, Vehicle, Cargo, Route..." type="text"/>
</div>
<!-- Status Dropdown -->
<div class="relative">
<select class="h-8 w-full flex-1.5 pr-7 text-label-xs font-label-xs uppercase tracking-wider bg-surface-container-lowest border border-outline rounded text-on-surface focus:outline-none cursor-pointer">
<option>Status: All (24)</option>
<option selected="">Status: In Transit (17)</option>
<option>Status: Awaiting Dispatch (4)</option>
<option>Status: Delayed (3)</option>
</select>
</div>
<!-- Priority Dropdown -->
<div class="relative">
<select class="h-8 w-full flex-1.5 pr-7 text-label-xs font-label-xs uppercase tracking-wider bg-surface-container-lowest border border-outline rounded text-on-surface focus:outline-none cursor-pointer">
<option>Priority: All</option>
<option>Critical Priority (6)</option>
<option>High Priority (8)</option>
<option>Routine (10)</option>
</select>
</div>
<!-- Cargo Category Dropdown -->
<div class="relative">
<select class="h-8 w-full flex-1.5 pr-7 text-label-xs font-label-xs uppercase tracking-wider bg-surface-container-lowest border border-outline rounded text-on-surface focus:outline-none cursor-pointer">
<option>Cargo: All Classes</option>
<option>Class III POL Fuel</option>
<option>Class I Subsistence</option>
<option>Class VIII Medical</option>
<option>Class IX Heavy Spares</option>
</select>
</div>
<!-- Corridor Axis Dropdown -->
<div class="relative">
<select class="h-8 w-full flex-1.5 pr-7 text-label-xs font-label-xs uppercase tracking-wider bg-surface-container-lowest border border-outline rounded text-on-surface focus:outline-none cursor-pointer">
<option>Corridor: All Passes</option>
<option>RTE-018 Zojila Pass</option>
<option>RTE-021 Khardung La</option>
<option>RTE-009 Chang La</option>
</select>
</div>
<button class="h-8 px-2 text-label-xs font-label-xs uppercase tracking-wider text-outline hover:text-on-surface underline">
            Clear Filters
          </button>
</div>
<!-- View Controls & Bulk Actions -->
<div class="flex items-center gap-2">
<!-- View Toggle -->
<div class="flex items-center border border-outline-variant rounded overflow-hidden bg-surface-container-lowest">
<button class="px-2.5 py-1 bg-secondary text-on-secondary text-label-xs uppercase font-semibold flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">view_list</span>
<span>Ledger</span>
</button>
<button class="px-2.5 py-1 text-on-surface-variant hover:bg-surface-container text-label-xs uppercase font-semibold flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">map</span>
<span>Tactical Map</span>
</button>
</div>
<button class="h-8 px-2.5 text-label-xs font-label-xs font-semibold uppercase tracking-wider bg-surface-container-lowest border border-outline rounded text-on-surface hover:bg-surface-container flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">group_work</span>
<span>Assign Formation</span>
</button>
</div>
</div>
<!-- ===================================================================== -->
<!-- MAIN WORKSPACE SPLIT (Table Left 65%, Detail Dossier Right 35%)       -->
<!-- ===================================================================== -->
<div class="grid grid-cols-12 gap-4 items-start">
<!-- LEFT: MAIN SHIPMENT DATA LEDGER (Col 8 / ~67%) -->
<div class="col-span-12 xl:col-span-8 bg-surface-container-lowest border border-outline-variant rounded overflow-hidden">
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container-high border-b-2 border-secondary text-primary text-[11px] font-label-sm uppercase tracking-wider">
<th class="py-2.5 w-full flex-1 pr-2 w-8">
<input class="w-3.5 h-3.5 rounded text-primary focus:ring-0 cursor-pointer" type="checkbox"/>
</th>
<th class="py-2.5 px-2">Shipment ID</th>
<th class="py-2.5 px-2">Priority</th>
<th class="py-2.5 px-2">Origin → Destination</th>
<th class="py-2.5 px-2">Cargo &amp; Tonnage</th>
<th class="py-2.5 px-2">Vehicle</th>
<th class="py-2.5 px-2">Route</th>
<th class="py-2.5 px-2">Status</th>
<th class="py-2.5 px-2 text-right">ETA / Progress</th>
<th class="py-2.5 px-2 text-center">Risk</th>
<th class="py-2.5 pr-3 w-full flex-1 text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant text-body-sm font-body-sm">
<!-- ROW 1: ACTIVE SELECTED (SHP-2048) -->
<tr class="bg-secondary-fixed/30 border-l-4 border-l-secondary hover:bg-secondary-fixed/40 transition-colors cursor-pointer">
<td class="py-2.5 w-full flex-1 pr-2">
<input checked="" class="w-3.5 h-3.5 rounded text-primary focus:ring-0" type="checkbox"/>
</td>
<td class="py-2.5 px-2">
<div class="font-mono font-semibold text-primary">SHP-2048</div>
<div class="text-[10px] text-outline font-mono">SORTIE-08B</div>
</td>
<td class="py-2.5 px-2">
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-error-container text-error border border-error">
                      CRITICAL
                    </span>
</td>
<td class="py-2.5 px-2">
<div class="font-medium text-on-surface">DEP-0002 Central Depot</div>
<div class="text-[11px] text-on-surface-variant flex items-center gap-1">
<span class="material-symbols-outlined text-[11px] text-secondary">arrow_forward</span>
<span>LOC-0042 Post Alpha</span>
</div>
</td>
<td class="py-2.5 px-2">
<div class="font-medium text-primary">Arctic Diesel &amp; Rations</div>
<div class="text-[11px] font-mono text-outline">5,000 L / 5.8 t</div>
</td>
<td class="py-2.5 px-2">
<div class="font-mono text-primary font-medium">VH-0087</div>
<div class="text-[10px] text-outline">Stallion 4x4</div>
</td>
<td class="py-2.5 px-2">
<span class="font-mono text-[11px] bg-surface-container px-1 py-0.5 rounded border border-outline-variant">
                      RTE-018 Leh
                    </span>
</td>
<td class="py-2.5 px-2">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-secondary-container text-on-secondary-container border border-secondary">
<span class="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                      IN TRANSIT
                    </span>
</td>
<td class="py-2.5 px-2 text-right">
<div class="font-mono font-semibold text-primary">14:35 IST</div>
<div class="w-20 bg-surface-container-high h-1.5 rounded-full w-full flex-1 mt-1 overflow-hidden">
<div class="bg-secondary h-full" style="width: 74%;"></div>
</div>
<div class="text-[10px] font-mono text-secondary font-semibold">74% (KM 58/78)</div>
</td>
<td class="py-2.5 px-2 text-center">
<span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold bg-surface-container-high text-on-surface-variant">LOW</span>
</td>
<td class="py-2.5 pr-3 w-full flex-1 text-right">
<div class="flex items-center justify-end gap-1">
<button class="p-1 hover:bg-surface-container-high rounded text-primary" title="Open Dossier">
<span class="material-symbols-outlined text-[16px]">visibility</span>
</button>
<button class="p-1 hover:bg-surface-container-high rounded text-outline" title="Re-route Convoy">
<span class="material-symbols-outlined text-[16px]">alt_route</span>
</button>
<button class="p-1 hover:bg-surface-container-high rounded text-outline" title="Radio Lead">
<span class="material-symbols-outlined text-[16px]">settings_remote</span>
</button>
</div>
</td>
</tr>
<!-- ROW 2: SHP-2051 (DELAYED / EXCEPTION) -->
<tr class="hover:bg-surface-container-low transition-colors cursor-pointer border-l-4 border-l-transparent">
<td class="py-2.5 w-full flex-1 pr-2">
<input class="w-3.5 h-3.5 rounded text-primary focus:ring-0" type="checkbox"/>
</td>
<td class="py-2.5 px-2">
<div class="font-mono font-semibold text-primary">SHP-2051</div>
<div class="text-[10px] text-outline font-mono">SORTIE-02C</div>
</td>
<td class="py-2.5 px-2">
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 text-amber-800 border border-amber-400">
                      HIGH
                    </span>
</td>
<td class="py-2.5 px-2">
<div class="font-medium text-on-surface">DEP-0001 Leh Logistics</div>
<div class="text-[11px] text-on-surface-variant flex items-center gap-1">
<span class="material-symbols-outlined text-[11px] text-secondary">arrow_forward</span>
<span>LOC-0019 Kargil Fwd</span>
</div>
</td>
<td class="py-2.5 px-2">
<div class="font-medium text-primary">155mm HE Munitions</div>
<div class="text-[11px] font-mono text-outline">Class V / 7.4 t</div>
</td>
<td class="py-2.5 px-2">
<div class="font-mono text-primary font-medium">VH-0114</div>
<div class="text-[10px] text-outline">Tatra 8x8</div>
</td>
<td class="py-2.5 px-2">
<span class="font-mono text-[11px] bg-surface-container px-1 py-0.5 rounded border border-outline-variant">
                      RTE-021 Zojila
                    </span>
</td>
<td class="py-2.5 px-2">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-error-container text-error border border-error">
<span class="w-1.5 h-1.5 rounded-full bg-error"></span>
                      DELAYED (+42m)
                    </span>
</td>
<td class="py-2.5 px-2 text-right">
<div class="font-mono font-semibold text-error">18:10 IST</div>
<div class="w-20 bg-surface-container-high h-1.5 rounded-full w-full flex-1 mt-1 overflow-hidden">
<div class="bg-amber-600 h-full" style="width: 42%;"></div>
</div>
<div class="text-[10px] font-mono text-error font-medium">42% (Ice hold)</div>
</td>
<td class="py-2.5 px-2 text-center">
<span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-error-container text-error">AMBER</span>
</td>
<td class="py-2.5 pr-3 w-full flex-1 text-right">
<div class="flex items-center justify-end gap-1">
<button class="p-1 hover:bg-surface-container-high rounded text-outline"><span class="material-symbols-outlined text-[16px]">visibility</span></button>
<button class="p-1 hover:bg-surface-container-high rounded text-error"><span class="material-symbols-outlined text-[16px]">alt_route</span></button>
<button class="p-1 hover:bg-surface-container-high rounded text-outline"><span class="material-symbols-outlined text-[16px]">settings_remote</span></button>
</div>
</td>
</tr>
<!-- ROW 3: SHP-2055 -->
<tr class="hover:bg-surface-container-low transition-colors cursor-pointer border-l-4 border-l-transparent">
<td class="py-2.5 w-full flex-1 pr-2">
<input class="w-3.5 h-3.5 rounded text-primary focus:ring-0" type="checkbox"/>
</td>
<td class="py-2.5 px-2">
<div class="font-mono font-semibold text-primary">SHP-2055</div>
<div class="text-[10px] text-outline font-mono">SORTIE-14A</div>
</td>
<td class="py-2.5 px-2">
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-surface-container-high text-on-surface-variant border border-outline-variant">
                      NORMAL
                    </span>
</td>
<td class="py-2.5 px-2">
<div class="font-medium text-on-surface">DEP-0002 Central Depot</div>
<div class="text-[11px] text-on-surface-variant flex items-center gap-1">
<span class="material-symbols-outlined text-[11px] text-secondary">arrow_forward</span>
<span>LOC-0031 Nubra Outpost</span>
</div>
</td>
<td class="py-2.5 px-2">
<div class="font-medium text-primary">Aviation Turbine Fuel</div>
<div class="text-[11px] font-mono text-outline">8,000 L / 6.8 t</div>
</td>
<td class="py-2.5 px-2">
<div class="font-mono text-primary font-medium">VH-0092</div>
<div class="text-[10px] text-outline">Bulk Bowzer</div>
</td>
<td class="py-2.5 px-2">
<span class="font-mono text-[11px] bg-surface-container px-1 py-0.5 rounded border border-outline-variant">
                      RTE-004 Khardung
                    </span>
</td>
<td class="py-2.5 px-2">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-secondary-container text-on-secondary-container border border-secondary">
                      IN TRANSIT
                    </span>
</td>
<td class="py-2.5 px-2 text-right">
<div class="font-mono font-semibold text-primary">16:40 IST</div>
<div class="w-20 bg-surface-container-high h-1.5 rounded-full w-full flex-1 mt-1 overflow-hidden">
<div class="bg-secondary h-full" style="width: 58%;"></div>
</div>
<div class="text-[10px] font-mono text-outline">58% (KM 41/70)</div>
</td>
<td class="py-2.5 px-2 text-center">
<span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold bg-surface-container-high text-on-surface-variant">LOW</span>
</td>
<td class="py-2.5 pr-3 w-full flex-1 text-right">
<div class="flex items-center justify-end gap-1">
<button class="p-1 hover:bg-surface-container-high rounded text-outline"><span class="material-symbols-outlined text-[16px]">visibility</span></button>
<button class="p-1 hover:bg-surface-container-high rounded text-outline"><span class="material-symbols-outlined text-[16px]">alt_route</span></button>
<button class="p-1 hover:bg-surface-container-high rounded text-outline"><span class="material-symbols-outlined text-[16px]">settings_remote</span></button>
</div>
</td>
</tr>
<!-- ROW 4: SHP-2060 (UNASSIGNED VEHICLE / MEDICAL CRITICAL) -->
<tr class="hover:bg-surface-container-low transition-colors cursor-pointer border-l-4 border-l-transparent bg-amber-50/40">
<td class="py-2.5 w-full flex-1 pr-2">
<input class="w-3.5 h-3.5 rounded text-primary focus:ring-0" type="checkbox"/>
</td>
<td class="py-2.5 px-2">
<div class="font-mono font-semibold text-primary">SHP-2060</div>
<div class="text-[10px] text-amber-700 font-mono font-semibold">HOLDING DISPATCH</div>
</td>
<td class="py-2.5 px-2">
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-error-container text-error border border-error">
                      CRITICAL
                    </span>
</td>
<td class="py-2.5 px-2">
<div class="font-medium text-on-surface">Base Hospital Leh</div>
<div class="text-[11px] text-on-surface-variant flex items-center gap-1">
<span class="material-symbols-outlined text-[11px] text-secondary">arrow_forward</span>
<span>LOC-0042 Post Alpha</span>
</div>
</td>
<td class="py-2.5 px-2">
<div class="font-medium text-error">Medical Plasma Cold-Chain</div>
<div class="text-[11px] font-mono text-outline">Class VIII / 0.8 t (-20°C)</div>
</td>
<td class="py-2.5 px-2">
<span class="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-200 text-amber-900 border border-amber-300">
                      AWAITING VEH
                    </span>
</td>
<td class="py-2.5 px-2">
<span class="font-mono text-[11px] bg-surface-container px-1 py-0.5 rounded border border-outline-variant">
                      RTE-018 Leh
                    </span>
</td>
<td class="py-2.5 px-2">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-surface-container-high text-on-surface border border-outline">
                      STAGED BAY 3
                    </span>
</td>
<td class="py-2.5 px-2 text-right">
<div class="font-mono font-semibold text-outline">PENDING</div>
<div class="text-[10px] font-mono text-amber-700 font-semibold">Slot 15:15 IST</div>
</td>
<td class="py-2.5 px-2 text-center">
<span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-amber-100 text-amber-800">ELEVATED</span>
</td>
<td class="py-2.5 pr-3 w-full flex-1 text-right">
<div class="flex items-center justify-end gap-1">
<button class="p-1 hover:bg-surface-container-high rounded text-secondary font-semibold" title="Assign Carrier">
<span class="material-symbols-outlined text-[16px]">local_shipping</span>
</button>
<button class="p-1 hover:bg-surface-container-high rounded text-outline"><span class="material-symbols-outlined text-[16px]">visibility</span></button>
</div>
</td>
</tr>
<!-- ROW 5: SHP-2062 -->
<tr class="hover:bg-surface-container-low transition-colors cursor-pointer border-l-4 border-l-transparent">
<td class="py-2.5 w-full flex-1 pr-2">
<input class="w-3.5 h-3.5 rounded text-primary focus:ring-0" type="checkbox"/>
</td>
<td class="py-2.5 px-2">
<div class="font-mono font-semibold text-primary">SHP-2062</div>
<div class="text-[10px] text-outline font-mono">SORTIE-19D</div>
</td>
<td class="py-2.5 px-2">
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-surface-container-high text-on-surface-variant border border-outline-variant">
                      NORMAL
                    </span>
</td>
<td class="py-2.5 px-2">
<div class="font-medium text-on-surface">DEP-0004 Chushul Support</div>
<div class="text-[11px] text-on-surface-variant flex items-center gap-1">
<span class="material-symbols-outlined text-[11px] text-secondary">arrow_forward</span>
<span>LOC-0056 Spanggur Gap</span>
</div>
</td>
<td class="py-2.5 px-2">
<div class="font-medium text-primary">Winter Rations &amp; Thermal Gear</div>
<div class="text-[11px] font-mono text-outline">Class I &amp; II / 3.4 t</div>
</td>
<td class="py-2.5 px-2">
<div class="font-mono text-primary font-medium">VH-0142</div>
<div class="text-[10px] text-outline">Heavy 6x6</div>
</td>
<td class="py-2.5 px-2">
<span class="font-mono text-[11px] bg-surface-container px-1 py-0.5 rounded border border-outline-variant">
                      RTE-009 Chang La
                    </span>
</td>
<td class="py-2.5 px-2">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-surface-container-high text-on-surface border border-outline">
                      DISPATCHED
                    </span>
</td>
<td class="py-2.5 px-2 text-right">
<div class="font-mono font-semibold text-primary">21:00 IST</div>
<div class="w-20 bg-surface-container-high h-1.5 rounded-full w-full flex-1 mt-1 overflow-hidden">
<div class="bg-secondary h-full" style="width: 15%;"></div>
</div>
<div class="text-[10px] font-mono text-outline">15% (KM 12/80)</div>
</td>
<td class="py-2.5 px-2 text-center">
<span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold bg-surface-container-high text-on-surface-variant">LOW</span>
</td>
<td class="py-2.5 pr-3 w-full flex-1 text-right">
<div class="flex items-center justify-end gap-1">
<button class="p-1 hover:bg-surface-container-high rounded text-outline"><span class="material-symbols-outlined text-[16px]">visibility</span></button>
<button class="p-1 hover:bg-surface-container-high rounded text-outline"><span class="material-symbols-outlined text-[16px]">alt_route</span></button>
<button class="p-1 hover:bg-surface-container-high rounded text-outline"><span class="material-symbols-outlined text-[16px]">settings_remote</span></button>
</div>
</td>
</tr>
<!-- ROW 6: SHP-2065 -->
<tr class="hover:bg-surface-container-low transition-colors cursor-pointer border-l-4 border-l-transparent">
<td class="py-2.5 w-full flex-1 pr-2">
<input class="w-3.5 h-3.5 rounded text-primary focus:ring-0" type="checkbox"/>
</td>
<td class="py-2.5 px-2">
<div class="font-mono font-semibold text-primary">SHP-2065</div>
<div class="text-[10px] text-outline font-mono">SORTIE-22B</div>
</td>
<td class="py-2.5 px-2">
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 text-amber-800 border border-amber-400">
                      HIGH
                    </span>
</td>
<td class="py-2.5 px-2">
<div class="font-medium text-on-surface">DEP-0002 Central Depot</div>
<div class="text-[11px] text-on-surface-variant flex items-center gap-1">
<span class="material-symbols-outlined text-[11px] text-secondary">arrow_forward</span>
<span>LOC-0014 Siachen Base</span>
</div>
</td>
<td class="py-2.5 px-2">
<div class="font-medium text-primary">Kerosene Oil Bladders (SKO)</div>
<div class="text-[11px] font-mono text-outline">Class III / 9.2 t</div>
</td>
<td class="py-2.5 px-2">
<div class="font-mono text-primary font-medium">VH-0044</div>
<div class="text-[10px] text-outline">Tatra 8x8 Bowzer</div>
</td>
<td class="py-2.5 px-2">
<span class="font-mono text-[11px] bg-surface-container px-1 py-0.5 rounded border border-outline-variant">
                      RTE-031 Nubra
                    </span>
</td>
<td class="py-2.5 px-2">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-secondary-container text-on-secondary-container border border-secondary">
                      IN TRANSIT
                    </span>
</td>
<td class="py-2.5 px-2 text-right">
<div class="font-mono font-semibold text-primary">17:15 IST</div>
<div class="w-20 bg-surface-container-high h-1.5 rounded-full w-full flex-1 mt-1 overflow-hidden">
<div class="bg-secondary h-full" style="width: 48%;"></div>
</div>
<div class="text-[10px] font-mono text-outline">48% (KM 52/108)</div>
</td>
<td class="py-2.5 px-2 text-center">
<span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold bg-surface-container-high text-on-surface-variant">LOW</span>
</td>
<td class="py-2.5 pr-3 w-full flex-1 text-right">
<div class="flex items-center justify-end gap-1">
<button class="p-1 hover:bg-surface-container-high rounded text-outline"><span class="material-symbols-outlined text-[16px]">visibility</span></button>
<button class="p-1 hover:bg-surface-container-high rounded text-outline"><span class="material-symbols-outlined text-[16px]">alt_route</span></button>
<button class="p-1 hover:bg-surface-container-high rounded text-outline"><span class="material-symbols-outlined text-[16px]">settings_remote</span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Table Ledger Pagination & Summary Bar -->
<div class="px-4 py-2 bg-surface-container-low border-t border-outline-variant flex items-center justify-between text-[11px] font-mono text-on-surface-variant">
<div>
              SHOWING <span class="font-bold text-primary">1–6</span> OF <span class="font-bold text-primary">24</span> ACTIVE SHIPMENTS // TOTAL RUNNING CARGO: 86.4 TONNES
            </div>
<div class="flex items-center gap-1">
<button class="px-2 py-0.5 border border-outline-variant rounded bg-surface-container-lowest text-outline" disabled="">PREV</button>
<button class="px-2 py-0.5 border border-secondary rounded bg-secondary text-on-secondary font-bold">1</button>
<button class="px-2 py-0.5 border border-outline-variant rounded bg-surface-container-lowest hover:bg-surface-container">2</button>
<button class="px-2 py-0.5 border border-outline-variant rounded bg-surface-container-lowest hover:bg-surface-container">3</button>
<button class="px-2 py-0.5 border border-outline-variant rounded bg-surface-container-lowest hover:bg-surface-container">NEXT</button>
</div>
</div>
<!-- Integrated Operational Sub-Panel: EXCEPTIONS & FLEET CAPACITY -->
<div class="p-4 bg-surface-container border-t border-outline-variant grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- Urgent Exceptions Queue -->
<div class="bg-surface-container-lowest p-3 rounded border border-outline-variant">
<div class="flex items-center justify-between mb-2">
<div class="flex items-center gap-1.5 text-label-xs font-label-xs uppercase font-bold text-error">
<span class="material-symbols-outlined text-[15px]">report</span>
<span>Operational Exceptions (2 Active)</span>
</div>
<span class="text-[10px] font-mono text-outline">AUTO-DISPATCH LOG</span>
</div>
<div class="space-y-2 text-body-sm">
<!-- Exception Item 1 -->
<div class="p-2 rounded bg-error-container/20 border border-error/30 flex items-start gap-2">
<span class="material-symbols-outlined text-[16px] text-error shrink-0 mt-0.5">snowing</span>
<div class="text-[11px] leading-tight">
<span class="font-mono font-bold text-error">SHP-2051</span>: Weather hold on Zojila Pass. Snow drift + black ice reported. Salt disperser team notified. Estimated delay: +42m.
                  </div>
</div>
<!-- Exception Item 2 -->
<div class="p-2 rounded bg-amber-50 border border-amber-300 flex items-start gap-2">
<span class="material-symbols-outlined text-[16px] text-amber-800 shrink-0 mt-0.5">medical_services</span>
<div class="text-[11px] leading-tight">
<span class="font-mono font-bold text-amber-800">SHP-2060</span>: Plasma Class VIII awaiting refrigerated carrier. Target vehicle VH-0312 returning to bay at 15:05 IST.
                  </div>
</div>
</div>
</div>
<!-- Fleet Capacity & Formation Summary -->
<div class="bg-surface-container-lowest p-3 rounded border border-outline-variant flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-2">
<span class="text-label-xs font-label-xs uppercase font-bold text-primary">Fleet Capacity Availability</span>
<a class="text-[11px] font-mono text-secondary hover:underline flex items-center gap-0.5" href="#">
<span>Fleet Overview (RL-22)</span>
<span class="material-symbols-outlined text-[12px]">open_in_new</span>
</a>
</div>
<div class="space-y-1.5 font-mono text-[11px]">
<div class="flex justify-between text-on-surface-variant">
<span>Total Nominal Capacity:</span>
<span class="font-bold text-primary">214.0 Tonnes</span>
</div>
<div class="flex justify-between text-on-surface-variant">
<span>Committed in Active Sorties:</span>
<span class="font-bold text-secondary">86.4 Tonnes (40.4%)</span>
</div>
<div class="flex justify-between text-on-surface-variant">
<span>Available Spare Capacity:</span>
<span class="font-bold text-primary">127.6 Tonnes</span>
</div>
<div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mt-1.5">
<div class="bg-secondary h-full" style="width: 40.4%;"></div>
</div>
</div>
</div>
<div class="pt-2 border-t border-outline-variant flex items-center justify-between text-[10px] text-outline font-mono">
<span>CONVOY PROTOCOL: ARMED ESCORT SECTOR IV-B</span>
<span class="text-secondary font-semibold">ALL 17 CONVOYS SATELLITE LOCKED</span>
</div>
</div>
</div>
</div>
<!-- =================================================================== -->
<!-- RIGHT: SELECTED SHIPMENT DOSSIER & ACTION DRAWER (Col 4 / ~33%)     -->
<!-- =================================================================== -->
<div class="col-span-12 xl:col-span-4 bg-surface-container-lowest border border-outline-variant rounded overflow-hidden flex flex-col">
<!-- Dossier Drawer Header -->
<div class="p-3.5 bg-surface-container-high border-b border-outline-variant">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[18px] text-secondary">inventory_2</span>
<span class="font-mono text-label-sm font-bold text-primary">INSPECTION DOSSIER</span>
</div>
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-error-container text-error border border-error">
                CRITICAL PRIORITY
              </span>
</div>
<div class="mt-2">
<h3 class="text-headline-sm font-headline-sm text-primary">SHP-2048 — Arctic Fuel &amp; Rations</h3>
<div class="flex items-center gap-2 text-label-xs font-mono text-outline mt-0.5">
<span>DEP-0002 LEH</span>
<span class="material-symbols-outlined text-[12px]">arrow_forward</span>
<span class="text-primary font-semibold">LOC-0042 POST ALPHA</span>
</div>
</div>
</div>
<!-- Drawer Body Content -->
<div class="p-4 space-y-4 flex-1 overflow-y-auto">
<!-- LIVE STEP PROGRESS TIMELINE -->
<div>
<div class="flex items-center justify-between mb-2">
<span class="text-label-xs font-label-xs uppercase font-bold text-outline">Sortie Transit Progress</span>
<span class="text-label-xs font-mono font-semibold text-secondary">74% COMPLETED</span>
</div>
<!-- Vertical / Compact Step Tracker -->
<div class="border-l-2 border-secondary w-full flex-1 w-full flex-1 space-y-2.5 text-[11px] font-mono">
<div class="relative">
<span class="w-2.5 h-2.5 rounded-full bg-secondary absolute -left-[17px] top-0.5 ring-2 ring-surface-container-lowest"></span>
<div class="flex items-center justify-between">
<span class="text-primary font-semibold">1. Manifest Created</span>
<span class="text-outline">08:30 IST ✓</span>
</div>
<div class="text-[10px] text-on-surface-variant">Validated by Quartermaster HQ</div>
</div>
<div class="relative">
<span class="w-2.5 h-2.5 rounded-full bg-secondary absolute -left-[17px] top-0.5 ring-2 ring-surface-container-lowest"></span>
<div class="flex items-center justify-between">
<span class="text-primary font-semibold">2. Sortie Planned &amp; Route Locked</span>
<span class="text-outline">09:15 IST ✓</span>
</div>
<div class="text-[10px] text-on-surface-variant">Corridor RTE-018 assigned</div>
</div>
<div class="relative">
<span class="w-2.5 h-2.5 rounded-full bg-secondary absolute -left-[17px] top-0.5 ring-2 ring-surface-container-lowest"></span>
<div class="flex items-center justify-between">
<span class="text-primary font-semibold">3. Vehicle Assigned: VH-0087</span>
<span class="text-outline">10:00 IST ✓</span>
</div>
<div class="text-[10px] text-on-surface-variant">Ashok Leyland Stallion 4x4 (Bay 04)</div>
</div>
<div class="relative">
<span class="w-2.5 h-2.5 rounded-full bg-secondary absolute -left-[17px] top-0.5 ring-2 ring-surface-container-lowest"></span>
<div class="flex items-center justify-between">
<span class="text-primary font-semibold">4. Departed Depot Gate</span>
<span class="text-outline">11:42 IST ✓</span>
</div>
<div class="text-[10px] text-on-surface-variant">Security seal hash verified</div>
</div>
<!-- Current Active Step -->
<div class="relative bg-secondary-fixed/30 p-2 rounded -w-full flex-1 border-l-2 border-l-secondary">
<span class="w-2.5 h-2.5 rounded-full bg-secondary absolute -left-[18px] top-2.5 ring-2 ring-surface-container-lowest animate-ping"></span>
<div class="flex items-center justify-between">
<span class="text-primary font-bold">5. In Transit (Current)</span>
<span class="text-secondary font-bold">KM 58 / 78</span>
</div>
<div class="text-[10px] text-on-surface font-medium mt-0.5">
                    Checkpoint Khangral cleared 13:20 IST. 20 KM remaining to Forward Post Alpha.
                  </div>
</div>
<div class="relative text-outline">
<span class="w-2.5 h-2.5 rounded-full bg-outline-variant absolute -left-[17px] top-0.5 ring-2 ring-surface-container-lowest"></span>
<div class="flex items-center justify-between">
<span class="font-semibold">6. Target Delivery ETA</span>
<span class="text-primary font-bold">14:35 IST</span>
</div>
<div class="text-[10px]">Unloading Staging Point Post Alpha</div>
</div>
</div>
</div>
<!-- CARGO & SECURITY MANIFEST -->
<div class="pt-2 border-t border-outline-variant">
<div class="flex items-center justify-between mb-2">
<span class="text-label-xs font-label-xs uppercase font-bold text-outline">Cargo &amp; Security Manifest</span>
<span class="text-[10px] font-mono text-secondary font-semibold">SEALED &amp; AUDITED</span>
</div>
<div class="bg-surface-container p-2.5 rounded space-y-2 border border-outline-variant text-[11px]">
<div class="flex justify-between items-center">
<div>
<div class="font-bold text-primary">Arctic Diesel Cetane 50 (POL Class III)</div>
<div class="text-[10px] text-outline font-mono">5,000 Liters (Collapsible Arctic Bladder)</div>
</div>
<span class="font-mono font-bold text-primary">4.2 Tonnes</span>
</div>
<div class="hairline-t pt-1.5 flex justify-between items-center">
<div>
<div class="font-bold text-primary">High-Altitude Subsistence MREs (Class I)</div>
<div class="text-[10px] text-outline font-mono">1,200 Vacuum Rations (30-day pack)</div>
</div>
<span class="font-mono font-bold text-primary">1.6 Tonnes</span>
</div>
<div class="hairline-t pt-1.5 flex items-center justify-between text-[10px] font-mono text-outline">
<span>SHA-256 SEAL HASH:</span>
<span class="text-primary font-semibold">8f92c10b...3d04</span>
</div>
</div>
</div>
<!-- TRANSPORT LINKAGE & TELEMETRY -->
<div class="pt-2 border-t border-outline-variant">
<div class="flex items-center justify-between mb-2">
<span class="text-label-xs font-label-xs uppercase font-bold text-outline">Vehicle Telemetry</span>
<a class="text-[10px] font-mono text-secondary hover:underline flex items-center gap-0.5" href="#">
<span>Vehicle Profile (RL-23)</span>
<span class="material-symbols-outlined text-[11px]">arrow_outward</span>
</a>
</div>
<div class="grid grid-cols-2 gap-2 text-body-sm">
<div class="p-2 rounded bg-surface-container border border-outline-variant">
<div class="text-[10px] font-mono text-outline uppercase">Carrier Asset</div>
<div class="font-mono font-bold text-primary">VH-0087</div>
<div class="text-[10px] text-on-surface-variant">Stallion 4x4 (89% Health)</div>
</div>
<div class="p-2 rounded bg-surface-container border border-outline-variant">
<div class="text-[10px] font-mono text-outline uppercase">Speed &amp; Ambient</div>
<div class="font-mono font-bold text-primary">38 KM/H</div>
<div class="text-[10px] text-on-surface-variant">-18°C (Packed Snow)</div>
</div>
</div>
</div>
<!-- DOWNSTREAM INVENTORY DEPENDENCY BRIDGE -->
<div class="pt-2 border-t border-outline-variant">
<div class="flex items-center justify-between mb-1.5">
<span class="text-label-xs font-label-xs uppercase font-bold text-primary">Forward Post Dependency Bridge</span>
<span class="material-symbols-outlined text-[14px] text-secondary">account_tree</span>
</div>
<div class="p-2.5 rounded bg-surface-container-high border border-outline-variant text-[11px]">
<div class="flex justify-between items-center font-mono">
<span class="text-on-surface-variant">Post Alpha POL Runway:</span>
<span class="text-error font-bold">5.8 Days Remaining</span>
</div>
<div class="text-[10px] text-error mt-0.5">
                  Critical safety floor breach predicted on 11 Oct without replenishment.
                </div>
<div class="mt-2 pt-1.5 border-t border-outline-variant flex justify-between items-center text-[10px] font-mono text-secondary">
<span>SHP-2048 Injection:</span>
<span class="font-bold">+4,200 L (+10.6 Days)</span>
</div>
<div class="text-[10px] text-on-surface-variant mt-0.5">
                  Post-arrival estimated runway extends to <strong class="text-primary font-mono">16.4 Days</strong>.
                </div>
</div>
</div>
</div>
<!-- Dossier Operational Action Buttons -->
<div class="p-3 bg-surface-container border-t border-outline-variant space-y-2">
<button class="w-full h-8 px-3 text-label-xs font-label-xs font-bold uppercase tracking-wider text-on-primary bg-primary hover:bg-secondary transition-colors rounded flex items-center justify-center gap-1.5 border border-primary">
<span class="material-symbols-outlined text-[15px]">description</span>
<span>Open Full Dossier (RL-25)</span>
</button>
<div class="grid grid-cols-3 gap-1.5">
<button class="h-7 text-[10px] font-label-xs uppercase tracking-wider bg-surface-container-lowest border border-outline hover:bg-surface-container rounded text-on-surface flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-[13px]">alt_route</span>
<span>Re-Route</span>
</button>
<button class="h-7 text-[10px] font-label-xs uppercase tracking-wider bg-surface-container-lowest border border-outline hover:bg-surface-container rounded text-on-surface flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-[13px]">radio</span>
<span>Radio Lead</span>
</button>
<button class="h-7 text-[10px] font-label-xs uppercase tracking-wider text-error bg-error-container/40 border border-error hover:bg-error-container rounded flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-[13px]">flag</span>
<span>Flag</span>
</button>
</div>
</div>
</div>
</div>
</div>
<!-- ======================================================================= -->
<!-- SECURE COMPLIANCE FOOTER BAR                                            -->
<!-- ======================================================================= -->
<footer class="h-7 px-6 bg-primary-container text-on-primary-container border-t border-outline-variant flex items-center justify-between text-[10px] font-mono shrink-0">
<div class="flex items-center gap-4">
<span>RAKSHAKLOGIX ENTERPRISE v4.8</span>
<span class="text-outline">//</span>
<span>MIL-STD-188F INTEROPERABLE</span>
<span class="text-outline">//</span>
<span class="flex items-center gap-1 text-secondary-fixed">
<span class="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span>
          AES-256 ENCRYPTED COMM-LINK
        </span>
</div>
<div class="flex items-center gap-4">
<span>NODE: SEC4-TRN-SHP</span>
<span class="text-outline">//</span>
<span>06 OCT 2026</span>
<span class="text-outline">//</span>
<span class="font-bold text-on-primary">14:38:22 IST</span>
</div>
</footer>
</div>`;
