// Screen: RL-35 — AI Recommendations Center
// Route: /recommendations
export const rl35Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto flex-1 p-6 space-y-5 bg-background">
<!-- ======================================================================= -->
<!-- 2. PAGE HEADER & OPERATIONAL SUMMARY KPI STRIP                         -->
<!-- ======================================================================= -->
<div class="space-y-4">
<div class="flex items-baseline justify-between border-b border-outline-variant/60 pb-3">
<div>
<h1 class="text-headline-lg font-headline-lg font-bold text-primary tracking-tight">AI Recommendations Center</h1>
<p class="text-body-sm font-body-sm text-on-surface-variant mt-0.5">Prioritized decision-support recommendations across forward depots, convoys, and corridors</p>
</div>
<div class="flex items-center gap-2">
<span class="text-label-xs font-label-xs uppercase tracking-wider px-2 py-1 rounded bg-secondary-container text-on-secondary-fixed font-bold border border-secondary">
            AUTONOMY LEVEL: HUMAN-SUPERVISED L2
          </span>
<span class="text-label-xs font-label-xs uppercase tracking-wider px-2 py-1 rounded bg-surface-container-high text-on-surface font-semibold border border-outline-variant">
            ACTIVE ENGINES: 5/5 ONLINE
          </span>
</div>
</div>
<!-- 6 Operational Metrics Grid (Utilitarian Military Design) -->
<div class="grid grid-cols-6 gap-3">
<!-- Metric 1: Pending Review -->
<div class="bg-surface-container-lowest p-3 border border-outline-variant rounded">
<div class="flex items-center justify-between text-label-xs font-label-xs uppercase font-bold text-on-surface-variant">
<span>Pending Review</span>
<span class="material-symbols-outlined text-[15px] text-primary">pending_actions</span>
</div>
<div class="mt-1.5 flex items-baseline gap-1.5">
<span class="text-headline-lg font-headline-lg font-bold text-primary num-tabular">18</span>
<span class="text-label-xs font-label-xs text-error font-semibold">3 Crit</span>
<span class="text-label-xs font-label-xs text-on-surface-variant">/ 7 High</span>
</div>
<div class="mt-1 text-label-xs font-label-xs text-on-surface-variant/80 border-t border-outline-variant/40 pt-1">Requires Quartermaster Signoff</div>
</div>
<!-- Metric 2: Critical Priority -->
<div class="bg-surface-container-lowest p-3 border-l-4 border-l-error border-y border-r border-outline-variant rounded">
<div class="flex items-center justify-between text-label-xs font-label-xs uppercase font-bold text-error">
<span>Critical Priority</span>
<span class="material-symbols-outlined text-[15px] text-error">notification_important</span>
</div>
<div class="mt-1.5 flex items-baseline gap-1.5">
<span class="text-headline-lg font-headline-lg font-bold text-error num-tabular">3</span>
<span class="text-label-xs font-label-xs text-on-surface-variant">Action &lt; 4h</span>
</div>
<div class="mt-1 text-label-xs font-label-xs text-error font-medium border-t border-outline-variant/40 pt-1">Breach threshold imminent</div>
</div>
<!-- Metric 3: High Priority -->
<div class="bg-surface-container-lowest p-3 border-l-4 border-l-[#C49A45] border-y border-r border-outline-variant rounded">
<div class="flex items-center justify-between text-label-xs font-label-xs uppercase font-bold text-[#7A5B18]">
<span>High Priority</span>
<span class="material-symbols-outlined text-[15px] text-[#C49A45]">speed</span>
</div>
<div class="mt-1.5 flex items-baseline gap-1.5">
<span class="text-headline-lg font-headline-lg font-bold text-primary num-tabular">7</span>
<span class="text-label-xs font-label-xs text-on-surface-variant">Runway &lt; 48h</span>
</div>
<div class="mt-1 text-label-xs font-label-xs text-on-surface-variant/80 border-t border-outline-variant/40 pt-1">Sortie scheduling queue</div>
</div>
<!-- Metric 4: Medium / Low -->
<div class="bg-surface-container-lowest p-3 border border-outline-variant rounded">
<div class="flex items-center justify-between text-label-xs font-label-xs uppercase font-bold text-on-surface-variant">
<span>Medium / Low</span>
<span class="material-symbols-outlined text-[15px] text-secondary">tune</span>
</div>
<div class="mt-1.5 flex items-baseline gap-1.5">
<span class="text-headline-lg font-headline-lg font-bold text-primary num-tabular">8</span>
<span class="text-label-xs font-label-xs text-on-surface-variant">Buffer &amp; Lift</span>
</div>
<div class="mt-1 text-label-xs font-label-xs text-on-surface-variant/80 border-t border-outline-variant/40 pt-1">Efficiency optimizations</div>
</div>
<!-- Metric 5: Approved Today -->
<div class="bg-surface-container-lowest p-3 border border-outline-variant rounded">
<div class="flex items-center justify-between text-label-xs font-label-xs uppercase font-bold text-on-surface-variant">
<span>Approved Today</span>
<span class="material-symbols-outlined text-[15px] text-secondary">task_alt</span>
</div>
<div class="mt-1.5 flex items-baseline gap-1.5">
<span class="text-headline-lg font-headline-lg font-bold text-secondary num-tabular">12</span>
<span class="text-label-xs font-label-xs text-on-surface-variant">Dispatched</span>
</div>
<div class="mt-1 text-label-xs font-label-xs text-on-surface-variant/80 border-t border-outline-variant/40 pt-1">100% Cryptographically Audited</div>
</div>
<!-- Metric 6: Operational Impact Aggregate -->
<div class="bg-surface-container-lowest p-3 border border-secondary rounded">
<div class="flex items-center justify-between text-label-xs font-label-xs uppercase font-bold text-secondary">
<span>Estimated 24h Impact</span>
<span class="material-symbols-outlined text-[15px]">insights</span>
</div>
<div class="mt-1 text-label-sm font-label-sm font-bold text-primary leading-snug">
            11 Stockouts Avoided
          </div>
<div class="text-label-xs font-label-xs text-on-surface-variant num-tabular mt-0.5 flex flex-col">
<span>+34.5 t Lift Optimized</span>
<span>-38 min Convoy Route Delay</span>
</div>
</div>
</div>
</div>
<!-- ======================================================================= -->
<!-- 3. CATEGORY TABS & TACTICAL FILTER TOOLBAR                             -->
<!-- ======================================================================= -->
<div class="space-y-3">
<!-- Domain Filter Tabs -->
<div class="flex items-center justify-between border-b border-outline-variant">
<div class="flex space-x-6">
<button class="pb-2.5 text-primary border-b-2 border-primary font-semibold text-label-md flex items-center gap-1.5">
<span>All Recommendations</span>
<span class="px-1.5 py-0.5 rounded text-label-xs font-label-xs bg-primary text-on-primary num-tabular">18</span>
</button>
<button class="pb-2.5 text-on-surface-variant hover:text-on-surface text-label-md flex items-center gap-1.5 transition-colors">
<span>Inventory</span>
<span class="px-1.5 py-0.5 rounded text-label-xs font-label-xs bg-surface-container-high text-on-surface num-tabular">06</span>
</button>
<button class="pb-2.5 text-on-surface-variant hover:text-on-surface text-label-md flex items-center gap-1.5 transition-colors">
<span>Demand</span>
<span class="px-1.5 py-0.5 rounded text-label-xs font-label-xs bg-surface-container-high text-on-surface num-tabular">02</span>
</button>
<button class="pb-2.5 text-on-surface-variant hover:text-on-surface text-label-md flex items-center gap-1.5 transition-colors">
<span>Transport &amp; Fleet</span>
<span class="px-1.5 py-0.5 rounded text-label-xs font-label-xs bg-surface-container-high text-on-surface num-tabular">04</span>
</button>
<button class="pb-2.5 text-on-surface-variant hover:text-on-surface text-label-md flex items-center gap-1.5 transition-colors">
<span>Routes</span>
<span class="px-1.5 py-0.5 rounded text-label-xs font-label-xs bg-surface-container-high text-on-surface num-tabular">03</span>
</button>
<button class="pb-2.5 text-on-surface-variant hover:text-on-surface text-label-md flex items-center gap-1.5 transition-colors">
<span>Risk &amp; Alerts</span>
<span class="px-1.5 py-0.5 rounded text-label-xs font-label-xs bg-surface-container-high text-on-surface num-tabular">02</span>
</button>
<button class="pb-2.5 text-on-surface-variant hover:text-on-surface text-label-md flex items-center gap-1.5 transition-colors">
<span>Simulation</span>
<span class="px-1.5 py-0.5 rounded text-label-xs font-label-xs bg-surface-container-high text-on-surface num-tabular">03</span>
</button>
</div>
<div class="pb-2 text-label-xs font-label-xs text-on-surface-variant font-mono">
          MODEL RE-EVAL CYCLE: 15 MIN
        </div>
</div>
<!-- Tactical Control Filter Toolbar -->
<div class="bg-surface-container-low p-2.5 rounded border border-outline-variant flex items-center justify-between gap-3 text-body-sm font-body-sm">
<div class="flex items-center gap-2 flex-wrap">
<!-- Priority Dropdown -->
<div class="flex items-center gap-1.5">
<span class="text-label-xs font-label-xs uppercase text-on-surface-variant font-semibold">Priority:</span>
<select class="h-7 text-label-sm font-label-sm bg-surface-container-lowest border border-outline-variant rounded px-2 py-0 focus:ring-0 focus:border-primary text-on-surface">
<option>All Priorities</option>
<option selected="">Critical &amp; High (10)</option>
<option>Critical (3)</option>
<option>Medium &amp; Low (8)</option>
</select>
</div>
<!-- Status Dropdown -->
<div class="flex items-center gap-1.5">
<span class="text-label-xs font-label-xs uppercase text-on-surface-variant font-semibold">Status:</span>
<select class="h-7 text-label-sm font-label-sm bg-surface-container-lowest border border-outline-variant rounded px-2 py-0 focus:ring-0 focus:border-primary text-on-surface">
<option selected="">Pending Review (18)</option>
<option>Under Review (4)</option>
<option>Approved (12)</option>
<option>Expiring Soon (&lt;6h)</option>
</select>
</div>
<!-- Source Model Dropdown -->
<div class="flex items-center gap-1.5">
<span class="text-label-xs font-label-xs uppercase text-on-surface-variant font-semibold">Engine:</span>
<select class="h-7 text-label-sm font-label-sm bg-surface-container-lowest border border-outline-variant rounded px-2 py-0 focus:ring-0 focus:border-primary text-on-surface">
<option selected="">All Engines</option>
<option>Simulation Kernel (SIM-0084)</option>
<option>Risk Engine (RISK-1042)</option>
<option>Route Optimizer (RTE-018)</option>
<option>Fleet Allocation Model</option>
</select>
</div>
<!-- Confidence Selector -->
<div class="flex items-center gap-1.5">
<span class="text-label-xs font-label-xs uppercase text-on-surface-variant font-semibold">Confidence:</span>
<select class="h-7 text-label-sm font-label-sm bg-surface-container-lowest border border-outline-variant rounded px-2 py-0 focus:ring-0 focus:border-primary text-on-surface">
<option selected="">&gt; 85% High Conf</option>
<option>&gt; 90% Ultra Conf</option>
<option>All (&gt;70%)</option>
</select>
</div>
<!-- Location Selector -->
<div class="flex items-center gap-1.5">
<span class="text-label-xs font-label-xs uppercase text-on-surface-variant font-semibold">Location:</span>
<select class="h-7 text-label-sm font-label-sm bg-surface-container-lowest border border-outline-variant rounded px-2 py-0 focus:ring-0 focus:border-primary text-on-surface">
<option selected="">Sector IV-B Leh / Forward Posts</option>
<option>Bodhkharbu Hub (DEP-0002)</option>
<option>LOC-0042 Forward Post Alpha</option>
<option>Fotu La Corridor RTE-018</option>
</select>
</div>
</div>
<!-- Bulk Action Buttons -->
<div class="flex items-center gap-2 shrink-0">
<button class="h-7 px-2.5 bg-surface-container-lowest hover:bg-surface-container border border-outline-variant text-on-surface rounded text-label-xs font-label-xs font-semibold uppercase tracking-wider transition-colors">
            Select Multiple
          </button>
<button class="h-7 px-2.5 bg-secondary-container hover:bg-secondary hover:text-on-secondary border border-secondary text-on-secondary-fixed rounded text-label-xs font-label-xs font-semibold uppercase tracking-wider transition-colors">
            Bulk Review Low-Risk (8)
          </button>
<button class="h-7 px-2 text-on-surface-variant hover:text-error text-label-xs font-label-xs uppercase tracking-wider" title="Reset all applied filters">
            Clear
          </button>
</div>
</div>
</div>
<!-- ======================================================================= -->
<!-- 4. MAIN SPLIT WORKSPACE (Two-Column Master-Detail Layout)               -->
<!-- ======================================================================= -->
<div class="grid grid-cols-12 gap-5 items-start">
<!-- LEFT SIDE (~58% width, 7 cols): RECOMMENDATION PRIORITY QUEUE TABLE -->
<div class="col-span-7 bg-surface-container-lowest border border-outline-variant rounded flex flex-col shadow-sm">
<!-- Table Control Header -->
<div class="p-3 bg-surface-container-high border-b border-outline flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="text-label-sm font-label-sm font-bold uppercase tracking-wider text-primary">Queue: Action Priority Ranked</span>
<span class="text-label-xs font-label-xs px-2 py-0.5 rounded bg-surface-container-lowest border border-outline-variant text-on-surface-variant num-tabular">6 of 18 Displayed</span>
</div>
<div class="text-label-xs font-label-xs text-on-surface-variant font-mono">
            SORT: IMPACT_SEVERITY_DESC
          </div>
</div>
<!-- Density Table -->
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container text-primary font-bold text-label-xs font-label-xs uppercase tracking-wider border-b border-outline-variant">
<th class="py-2.5 px-3 w-8 text-center">
<input class="w-3.5 h-3.5 rounded-sm border-outline text-primary-container focus:ring-0" type="checkbox"/>
</th>
<th class="py-2.5 px-3">Rec ID &amp; Recommended Action</th>
<th class="py-2.5 px-2">Engine</th>
<th class="py-2.5 px-2">Target Node</th>
<th class="py-2.5 px-2 text-center">Priority</th>
<th class="py-2.5 px-2 text-right">Confidence</th>
<th class="py-2.5 px-3 text-right">Freshness</th>
<th class="py-2.5 px-3 text-center">Review</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant text-body-sm font-body-sm">
<!-- ROW 1: ACTIVE SELECTED ROW (REC-2048) -->
<tr class="bg-surface-container-low border-l-4 border-l-primary-container hover:bg-surface-container transition-colors cursor-pointer">
<td class="py-3 px-3 text-center">
<input checked="" class="w-3.5 h-3.5 rounded-sm border-outline text-primary-container focus:ring-0" type="checkbox"/>
</td>
<td class="py-3 px-3">
<div class="flex items-center gap-1.5">
<span class="font-mono font-bold text-primary text-label-sm font-label-sm">REC-2048</span>
<span class="w-1.5 h-1.5 rounded-full bg-error"></span>
</div>
<div class="font-medium text-primary leading-tight">Increase Class III POL Replenishment (+2,500 L)</div>
<div class="text-label-xs font-label-xs text-error font-medium mt-0.5">Stockout Risk: 74% → 21% (Day 6 Breach)</div>
</td>
<td class="py-3 px-2 text-label-xs font-label-xs text-on-surface-variant font-mono">SIM-0084</td>
<td class="py-3 px-2">
<div class="text-label-xs font-label-xs font-bold text-on-surface">LOC-0042</div>
<div class="text-label-xs font-label-xs text-on-surface-variant truncate max-w-[90px]">Post Alpha</div>
</td>
<td class="py-3 px-2 text-center">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs font-bold uppercase bg-error/15 text-error border border-error/40">CRITICAL</span>
</td>
<td class="py-3 px-2 text-right num-tabular font-bold text-secondary">
                  94%
                </td>
<td class="py-3 px-3 text-right num-tabular text-label-xs font-label-xs text-on-surface-variant">
                  8m ago
                </td>
<td class="py-3 px-3 text-center">
<button class="h-6 px-2.5 bg-primary-container text-on-primary text-label-xs font-label-xs rounded font-semibold flex items-center justify-center mx-auto hover:bg-secondary transition-colors">
                    Active
                  </button>
</td>
</tr>
<!-- ROW 2: REC-2047 -->
<tr class="hover:bg-surface-container-low transition-colors cursor-pointer">
<td class="py-3 px-3 text-center">
<input class="w-3.5 h-3.5 rounded-sm border-outline text-primary-container focus:ring-0" type="checkbox"/>
</td>
<td class="py-3 px-3">
<div class="flex items-center gap-1.5">
<span class="font-mono font-bold text-primary text-label-sm font-label-sm">REC-2047</span>
</div>
<div class="font-medium text-primary leading-tight">Pre-position Class I Cold-Chain Rations</div>
<div class="text-label-xs font-label-xs text-on-surface-variant mt-0.5">Buffer: +4.5 Days (Fotu Pass Closure Buffer)</div>
</td>
<td class="py-3 px-2 text-label-xs font-label-xs text-on-surface-variant font-mono">RISK-1042</td>
<td class="py-3 px-2">
<div class="text-label-xs font-label-xs font-bold text-on-surface">DEP-0002</div>
<div class="text-label-xs font-label-xs text-on-surface-variant truncate max-w-[90px]">Bodhkharbu</div>
</td>
<td class="py-3 px-2 text-center">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs font-bold uppercase bg-error/15 text-error border border-error/40">CRITICAL</span>
</td>
<td class="py-3 px-2 text-right num-tabular font-bold text-secondary">
                  92%
                </td>
<td class="py-3 px-3 text-right num-tabular text-label-xs font-label-xs text-on-surface-variant">
                  19m ago
                </td>
<td class="py-3 px-3 text-center">
<button class="h-6 px-2.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-label-xs font-label-xs rounded font-semibold border border-outline-variant flex items-center justify-center mx-auto transition-colors">
                    Review
                  </button>
</td>
</tr>
<!-- ROW 3: REC-2046 -->
<tr class="hover:bg-surface-container-low transition-colors cursor-pointer">
<td class="py-3 px-3 text-center">
<input class="w-3.5 h-3.5 rounded-sm border-outline text-primary-container focus:ring-0" type="checkbox"/>
</td>
<td class="py-3 px-3">
<div class="flex items-center gap-1.5">
<span class="font-mono font-bold text-primary text-label-sm font-label-sm">REC-2046</span>
</div>
<div class="font-medium text-primary leading-tight">Reroute Heavy Convoy Sortie via Chushul Axis</div>
<div class="text-label-xs font-label-xs text-[#7A5B18] font-medium mt-0.5">Avoids Rockslide at KM 84 • Delay: -42 min</div>
</td>
<td class="py-3 px-2 text-label-xs font-label-xs text-on-surface-variant font-mono">RTE-018</td>
<td class="py-3 px-2">
<div class="text-label-xs font-label-xs font-bold text-on-surface">RTE-021</div>
<div class="text-label-xs font-label-xs text-on-surface-variant truncate max-w-[90px]">Chushul Axis</div>
</td>
<td class="py-3 px-2 text-center">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs font-bold uppercase bg-[#C49A45]/20 text-[#7A5B18] border border-[#C49A45]">HIGH</span>
</td>
<td class="py-3 px-2 text-right num-tabular font-bold text-secondary">
                  89%
                </td>
<td class="py-3 px-3 text-right num-tabular text-label-xs font-label-xs text-on-surface-variant">
                  31m ago
                </td>
<td class="py-3 px-3 text-center">
<button class="h-6 px-2.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-label-xs font-label-xs rounded font-semibold border border-outline-variant flex items-center justify-center mx-auto transition-colors">
                    Review
                  </button>
</td>
</tr>
<!-- ROW 4: REC-2045 -->
<tr class="hover:bg-surface-container-low transition-colors cursor-pointer">
<td class="py-3 px-3 text-center">
<input class="w-3.5 h-3.5 rounded-sm border-outline text-primary-container focus:ring-0" type="checkbox"/>
</td>
<td class="py-3 px-3">
<div class="flex items-center gap-1.5">
<span class="font-mono font-bold text-primary text-label-sm font-label-sm">REC-2045</span>
</div>
<div class="font-medium text-primary leading-tight">Stage 4x ALS Trucks at Sector Bravo Depot</div>
<div class="text-label-xs font-label-xs text-on-surface-variant mt-0.5">Lift Capacity: +8.0 t Surge Ready</div>
</td>
<td class="py-3 px-2 text-label-xs font-label-xs text-on-surface-variant font-mono">FLEET-M</td>
<td class="py-3 px-2">
<div class="text-label-xs font-label-xs font-bold text-on-surface">DEP-0003</div>
<div class="text-label-xs font-label-xs text-on-surface-variant truncate max-w-[90px]">Sector Bravo</div>
</td>
<td class="py-3 px-2 text-center">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs font-bold uppercase bg-[#C49A45]/20 text-[#7A5B18] border border-[#C49A45]">HIGH</span>
</td>
<td class="py-3 px-2 text-right num-tabular font-bold text-secondary">
                  91%
                </td>
<td class="py-3 px-3 text-right num-tabular text-label-xs font-label-xs text-on-surface-variant">
                  45m ago
                </td>
<td class="py-3 px-3 text-center">
<button class="h-6 px-2.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-label-xs font-label-xs rounded font-semibold border border-outline-variant flex items-center justify-center mx-auto transition-colors">
                    Review
                  </button>
</td>
</tr>
<!-- ROW 5: REC-2044 -->
<tr class="hover:bg-surface-container-low transition-colors cursor-pointer">
<td class="py-3 px-3 text-center">
<input class="w-3.5 h-3.5 rounded-sm border-outline text-primary-container focus:ring-0" type="checkbox"/>
</td>
<td class="py-3 px-3">
<div class="flex items-center gap-1.5">
<span class="font-mono font-bold text-primary text-label-sm font-label-sm">REC-2044</span>
</div>
<div class="font-medium text-primary leading-tight">Recalibrate 155mm Shell Daily Draw Rate (+18%)</div>
<div class="text-label-xs font-label-xs text-on-surface-variant mt-0.5">Aligns with Alpine Fire Drill Cycle 4</div>
</td>
<td class="py-3 px-2 text-label-xs font-label-xs text-on-surface-variant font-mono">FC-018</td>
<td class="py-3 px-2">
<div class="text-label-xs font-label-xs font-bold text-on-surface">LOC-0078</div>
<div class="text-label-xs font-label-xs text-on-surface-variant truncate max-w-[90px]">Firebase Tango</div>
</td>
<td class="py-3 px-2 text-center">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs font-bold uppercase bg-secondary-fixed text-on-secondary-fixed-variant border border-secondary">MEDIUM</span>
</td>
<td class="py-3 px-2 text-right num-tabular font-bold text-secondary">
                  87%
                </td>
<td class="py-3 px-3 text-right num-tabular text-label-xs font-label-xs text-on-surface-variant">
                  1h 12m
                </td>
<td class="py-3 px-3 text-center">
<button class="h-6 px-2.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-label-xs font-label-xs rounded font-semibold border border-outline-variant flex items-center justify-center mx-auto transition-colors">
                    Review
                  </button>
</td>
</tr>
<!-- ROW 6: REC-2043 -->
<tr class="hover:bg-surface-container-low transition-colors cursor-pointer">
<td class="py-3 px-3 text-center">
<input class="w-3.5 h-3.5 rounded-sm border-outline text-primary-container focus:ring-0" type="checkbox"/>
</td>
<td class="py-3 px-3">
<div class="flex items-center gap-1.5">
<span class="font-mono font-bold text-primary text-label-sm font-label-sm">REC-2043</span>
</div>
<div class="font-medium text-primary leading-tight">Consolidate Spare Bogie Wheel Assemblies</div>
<div class="text-label-xs font-label-xs text-on-surface-variant mt-0.5">Optimizes Depot Holding Cost (-14%)</div>
</td>
<td class="py-3 px-2 text-label-xs font-label-xs text-on-surface-variant font-mono">INV-284</td>
<td class="py-3 px-2">
<div class="text-label-xs font-label-xs font-bold text-on-surface">DEP-0001</div>
<div class="text-label-xs font-label-xs text-on-surface-variant truncate max-w-[90px]">Leh Base Central</div>
</td>
<td class="py-3 px-2 text-center">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs font-bold uppercase bg-surface-container-high text-on-surface-variant border border-outline-variant">LOW</span>
</td>
<td class="py-3 px-2 text-right num-tabular font-bold text-secondary">
                  84%
                </td>
<td class="py-3 px-3 text-right num-tabular text-label-xs font-label-xs text-on-surface-variant">
                  1h 40m
                </td>
<td class="py-3 px-3 text-center">
<button class="h-6 px-2.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-label-xs font-label-xs rounded font-semibold border border-outline-variant flex items-center justify-center mx-auto transition-colors">
                    Review
                  </button>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Table Footer / Pagination -->
<div class="p-2.5 bg-surface-container-low border-t border-outline-variant flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<div class="flex items-center gap-2">
<span>Showing 6 of 18 recommendations</span>
<span class="text-outline">|</span>
<span>Batch Auto-Filter: HIGH_AND_CRITICAL_ONLY</span>
</div>
<div class="flex items-center gap-1">
<button class="px-2 py-1 bg-surface-container-lowest border border-outline-variant rounded disabled:opacity-50" disabled="">Previous</button>
<span class="px-2 py-1 bg-primary text-on-primary rounded font-mono font-bold">1</span>
<button class="px-2 py-1 bg-surface-container-lowest border border-outline-variant rounded hover:bg-surface-container">2</button>
<button class="px-2 py-1 bg-surface-container-lowest border border-outline-variant rounded hover:bg-surface-container">3</button>
<button class="px-2 py-1 bg-surface-container-lowest border border-outline-variant rounded hover:bg-surface-container">Next</button>
</div>
</div>
</div>
<!-- RIGHT SIDE (~42% width, 5 cols): SELECTED RECOMMENDATION DETAILED REVIEW PANEL (REC-2048) -->
<div class="col-span-5 space-y-4">
<!-- Main Inspection Dossier Card -->
<div class="bg-surface-container-lowest border border-primary-container rounded shadow-sm overflow-hidden">
<!-- Dossier Header Strip -->
<div class="p-3.5 bg-primary-container text-on-primary border-b border-primary flex items-start justify-between">
<div>
<div class="flex items-center gap-2">
<span class="font-mono text-tertiary-fixed font-bold text-label-sm font-label-sm">REC-2048</span>
<span class="px-1.5 py-0.5 rounded text-label-xs font-label-xs font-bold bg-error text-on-error uppercase">CRITICAL</span>
<span class="text-label-xs font-label-xs text-surface-dim font-mono">CONF: 94%</span>
</div>
<h2 class="text-headline-sm font-headline-sm font-bold text-surface-bright mt-0.5">
                Class III POL (Arctic Diesel) Replenishment
              </h2>
<div class="text-label-xs font-label-xs text-on-primary-container mt-0.5">
                Kernel: SIM-0084 (Linked to RISK-1042) • Target: Forward Post Alpha (LOC-0042)
              </div>
</div>
<div class="text-right">
<span class="text-label-xs font-label-xs px-2 py-0.5 rounded bg-secondary text-surface-bright font-mono">
                PENDING REVIEW
              </span>
<div class="text-label-xs font-label-xs text-surface-dim mt-1">Generated: 8m ago</div>
</div>
</div>
<div class="p-4 space-y-4">
<!-- Section 1: Explainable Operational Reasoning -->
<div class="space-y-1.5">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs font-bold uppercase tracking-wider text-secondary">
                  Operational Reasoning &amp; Evidence Base
                </span>
<span class="text-label-xs font-label-xs text-on-surface-variant font-mono">MODEL RUN: 14:32:09 IST</span>
</div>
<p class="text-body-sm font-body-sm text-on-surface leading-relaxed bg-surface-container-low p-2.5 rounded border border-outline-variant">
                Post Alpha (LOC-0042) is undergoing sustained <strong>-24°C alpine conditions</strong>, driving arctic generator fuel consumption <strong>+25% above baseline</strong> (850 L/day vs 680 L/day). Current depot holding of <strong>4,200 L</strong> will breach the inviolable wartime safety floor of <strong>2,000 L</strong> on Day 5 (14 Oct), triggering terminal stockout on Day 6 without immediate sortie dispatch.
              </p>
</div>
<!-- Evidence Metrics Strip -->
<div class="grid grid-cols-4 gap-2 text-center">
<div class="p-2 bg-surface-container rounded border border-outline-variant">
<div class="text-label-xs font-label-xs uppercase text-on-surface-variant">Surge Rate</div>
<div class="text-label-md font-label-md font-bold text-error num-tabular mt-0.5">+25% (850 L/d)</div>
</div>
<div class="p-2 bg-surface-container rounded border border-outline-variant">
<div class="text-label-xs font-label-xs uppercase text-on-surface-variant">Post Balance</div>
<div class="text-label-md font-label-md font-bold text-primary num-tabular mt-0.5">4,200 L</div>
</div>
<div class="p-2 bg-surface-container rounded border border-outline-variant">
<div class="text-label-xs font-label-xs uppercase text-on-surface-variant">Safety Floor</div>
<div class="text-label-md font-label-md font-bold text-primary num-tabular mt-0.5">2,000 L</div>
</div>
<div class="p-2 bg-surface-container rounded border border-outline-variant">
<div class="text-label-xs font-label-xs uppercase text-error font-bold">Stockout Risk</div>
<div class="text-label-md font-label-md font-bold text-error num-tabular mt-0.5">74% (Crit)</div>
</div>
</div>
<!-- Section 2: Baseline vs Recommended Impact -->
<div class="space-y-1.5 pt-1 border-t border-outline-variant/60">
<span class="text-label-xs font-label-xs font-bold uppercase tracking-wider text-secondary">
                Simulation Projection: Delta Analysis
              </span>
<div class="bg-surface-container-low p-2.5 rounded border border-outline-variant space-y-2 text-body-sm font-body-sm">
<div class="flex items-center justify-between">
<span class="text-on-surface-variant text-label-sm font-label-sm">Stockout Risk Mitigation:</span>
<div class="flex items-center gap-1.5 font-bold num-tabular">
<span class="text-error line-through">74%</span>
<span class="material-symbols-outlined text-[14px] text-secondary">arrow_forward</span>
<span class="text-secondary bg-secondary-container px-1.5 py-0.2 rounded">21% (-53 pp)</span>
</div>
</div>
<div class="flex items-center justify-between">
<span class="text-on-surface-variant text-label-sm font-label-sm">Required Allocation Sortie:</span>
<span class="font-bold text-primary num-tabular">+2,500 L Arctic Diesel (Sortie SHP-2062)</span>
</div>
<div class="flex items-center justify-between">
<span class="text-on-surface-variant text-label-sm font-label-sm">Fleet Utilization Impact:</span>
<span class="text-on-surface num-tabular">72% → 76% (+4% Capacity Absorbable)</span>
</div>
<div class="flex items-center justify-between">
<span class="text-on-surface-variant text-label-sm font-label-sm">Transit Corridor Risk (RTE-018):</span>
<span class="text-label-xs font-label-xs font-bold uppercase px-1.5 py-0.2 rounded bg-surface-container-high text-primary border border-outline-variant">LOW (L1 Nominal)</span>
</div>
</div>
</div>
<!-- Section 3: Traceable Operational Evidence Links -->
<div class="space-y-1.5 pt-1 border-t border-outline-variant/60">
<span class="text-label-xs font-label-xs font-bold uppercase tracking-wider text-secondary">
                Audit Chain &amp; Source Artifacts
              </span>
<div class="grid grid-cols-2 gap-2 text-label-xs font-label-xs">
<div class="flex items-center justify-between p-1.5 bg-surface-container rounded border border-outline-variant">
<span class="font-mono text-on-surface truncate">SIM-0084 Run</span>
<button class="text-secondary font-semibold hover:underline flex items-center gap-0.5">
                    Open <span class="material-symbols-outlined text-[12px]">open_in_new</span>
</button>
</div>
<div class="flex items-center justify-between p-1.5 bg-surface-container rounded border border-outline-variant">
<span class="font-mono text-on-surface truncate">RISK-1042 Fuel</span>
<button class="text-secondary font-semibold hover:underline flex items-center gap-0.5">
                    Open <span class="material-symbols-outlined text-[12px]">open_in_new</span>
</button>
</div>
<div class="flex items-center justify-between p-1.5 bg-surface-container rounded border border-outline-variant">
<span class="font-mono text-on-surface truncate">FC-018 Demand</span>
<button class="text-secondary font-semibold hover:underline flex items-center gap-0.5">
                    Open <span class="material-symbols-outlined text-[12px]">open_in_new</span>
</button>
</div>
<div class="flex items-center justify-between p-1.5 bg-surface-container rounded border border-outline-variant">
<span class="font-mono text-on-surface truncate">RTE-018 Ledger</span>
<button class="text-secondary font-semibold hover:underline flex items-center gap-0.5">
                    Open <span class="material-symbols-outlined text-[12px]">open_in_new</span>
</button>
</div>
</div>
</div>
<!-- Section 4: Compact GIS Routing Thumbnail -->
<div class="space-y-1.5 pt-1 border-t border-outline-variant/60">
<div class="flex items-center justify-between text-label-xs font-label-xs">
<span class="font-bold uppercase tracking-wider text-secondary">Corridor Telemetry Route</span>
<span class="font-mono text-on-surface-variant">RTE-018 • 118 KM TRANSIT</span>
</div>
<div class="relative h-28 bg-surface-container-high rounded border border-outline-variant overflow-hidden flex items-center justify-center">
<!-- Tactical Map Stylized SVG / Canvas Representation -->
<div class="absolute inset-0 bg-[#e0e4dc] opacity-80" data-location="Leh Sector IV-B" style="">
<svg class="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
<line stroke="#17251c" stroke-dasharray="4,4" stroke-width="2" x1="20" x2="160" y1="90" y2="45"></line>
<line stroke="#17251c" stroke-width="3" x1="160" x2="360" y1="45" y2="25"></line>
<circle cx="20" cy="90" fill="#516446" r="5"></circle>
<circle cx="160" cy="45" fill="#a49a78" r="4"></circle>
<circle cx="360" cy="25" fill="#ba1a1a" r="6"></circle>
</svg>
</div>
<div class="relative z-10 w-full px-4 flex items-center justify-between text-label-xs font-label-xs font-mono">
<div class="bg-surface-container-lowest/95 p-1.5 rounded border border-outline-variant shadow-sm">
<div class="font-bold text-primary">DEP-0002</div>
<div class="text-[10px] text-on-surface-variant">Bodhkharbu Hub</div>
</div>
<div class="bg-primary-container text-tertiary-fixed px-2 py-1 rounded border border-tertiary-fixed-dim shadow-sm flex items-center gap-1 text-[11px]">
<span class="material-symbols-outlined text-[13px] animate-pulse">local_shipping</span>
<span>Sortie SHP-2062</span>
</div>
<div class="bg-error-container/95 p-1.5 rounded border border-error/40 shadow-sm text-right">
<div class="font-bold text-error">LOC-0042</div>
<div class="text-[10px] text-on-surface-variant">Post Alpha (-24°C)</div>
</div>
</div>
</div>
</div>
<!-- Section 5: Alternative Options Comparison Matrix -->
<div class="space-y-1.5 pt-1 border-t border-outline-variant/60">
<span class="text-label-xs font-label-xs font-bold uppercase tracking-wider text-secondary">
                Candidate Solution Matrix
              </span>
<div class="space-y-1.5">
<!-- Option A: Selected -->
<div class="p-2 bg-secondary-container/40 rounded border border-secondary flex items-center justify-between text-label-xs font-label-xs">
<div>
<span class="font-bold text-primary">Option A (AI Baseline):</span>
<span class="text-on-surface ml-1">Replenish +2,500 L from DEP-0002</span>
</div>
<div class="flex items-center gap-2 num-tabular font-mono">
<span class="text-secondary font-bold">Risk: 21%</span>
<span class="text-on-surface-variant">Effort: 3 Bowsers</span>
<span class="px-1.5 py-0.2 rounded bg-secondary text-on-secondary font-bold">RECOMMENDED</span>
</div>
</div>
<!-- Option B -->
<div class="p-2 bg-surface-container-low rounded border border-outline-variant flex items-center justify-between text-label-xs font-label-xs opacity-85">
<div>
<span class="font-bold text-on-surface">Option B:</span>
<span class="text-on-surface-variant ml-1">Reroute via RTE-021 Chushul Axis</span>
</div>
<div class="flex items-center gap-2 num-tabular font-mono">
<span class="text-[#7A5B18] font-bold">Risk: 43%</span>
<span class="text-on-surface-variant">Delay: -19m</span>
<span class="text-on-surface-variant">Conf: 91%</span>
</div>
</div>
<!-- Option C -->
<div class="p-2 bg-surface-container-low rounded border border-outline-variant flex items-center justify-between text-label-xs font-label-xs opacity-85">
<div>
<span class="font-bold text-on-surface">Option C:</span>
<span class="text-on-surface-variant ml-1">Ration post consumption (Safety Floor reduction)</span>
</div>
<div class="flex items-center gap-2 num-tabular font-mono">
<span class="text-[#7A5B18] font-bold">Risk: 34%</span>
<span class="text-on-surface-variant">Effort: High</span>
<span class="text-on-surface-variant">Conf: 86%</span>
</div>
</div>
<!-- Option D -->
<div class="p-2 bg-error/5 rounded border border-error/30 flex items-center justify-between text-label-xs font-label-xs opacity-75">
<div>
<span class="font-bold text-error">Option D (No Action):</span>
<span class="text-on-surface-variant ml-1">Status Quo</span>
</div>
<div class="flex items-center gap-2 num-tabular font-mono text-error font-bold">
<span>Risk: 74% Critical Stockout (Day 6)</span>
<span class="text-[10px] uppercase underline">UNACCEPTABLE</span>
</div>
</div>
</div>
</div>
<!-- Section 6: Human-in-the-Loop Override & Decision Controls -->
<div class="space-y-3 pt-2 border-t-2 border-secondary bg-surface-container-low -mx-4 -mb-4 p-4">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1">
<span class="material-symbols-outlined text-[15px] text-secondary">tune</span>
                  Human-in-the-Loop Override
                </span>
<span class="text-label-xs font-label-xs text-on-surface-variant">L2 Human Authority</span>
</div>
<!-- Parameter Adjustment Inputs -->
<div class="grid grid-cols-2 gap-3">
<div>
<label class="block text-label-xs font-label-xs text-on-surface-variant mb-1 uppercase font-semibold">AI Baseline Target</label>
<div class="h-8 px-2.5 bg-surface-container rounded border border-outline-variant text-label-sm font-label-sm flex items-center text-on-surface-variant num-tabular">
                    2,500 Liters
                  </div>
</div>
<div>
<label class="block text-label-xs font-label-xs text-primary mb-1 uppercase font-bold flex items-center justify-between">
<span>Officer Adjusted Value</span>
<span class="text-secondary font-mono text-[10px]">+500 L Buffer</span>
</label>
<input class="w-full h-8 px-2.5 bg-surface-container-lowest rounded border border-primary text-label-sm font-label-sm font-bold text-primary num-tabular focus:ring-0" type="number" value="3000"/>
</div>
</div>
<!-- Mandatory Operational Justification -->
<div>
<label class="block text-label-xs font-label-xs text-on-surface-variant mb-1 uppercase font-semibold">Mandatory Officer Justification (Audited):</label>
<textarea class="w-full p-2 bg-surface-container-lowest rounded border border-outline-variant text-body-sm font-body-sm text-on-surface focus:border-primary focus:ring-0 resize-none" rows="2">Anticipating severe blizzard on Fotu La Pass (BRO Level 2 advisory); increasing sortie capacity to 3,000 L for 18.5 day buffer.</textarea>
</div>
<!-- Decision Triggers -->
<div class="space-y-2 pt-1">
<div class="grid grid-cols-2 gap-2">
<!-- Primary Action Button -->
<button class="h-9 bg-primary hover:bg-secondary text-on-primary rounded text-label-sm font-label-sm font-bold flex items-center justify-center gap-1.5 transition-colors border border-primary">
<span class="material-symbols-outlined text-[16px] text-tertiary-fixed">check_circle</span>
<span>Approve for Planning (DISP-9921)</span>
</button>
<button class="h-9 bg-surface-container-lowest hover:bg-surface-container border border-outline text-on-surface rounded text-label-sm font-label-sm font-medium flex items-center justify-center gap-1.5 transition-colors">
<span class="material-symbols-outlined text-[15px]">edit</span>
<span>Modify Parameters</span>
</button>
</div>
<div class="grid grid-cols-3 gap-2">
<button class="h-7 bg-surface-container-lowest hover:bg-error-container hover:text-error border border-outline-variant text-on-surface-variant rounded text-label-xs font-label-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-[13px]">block</span>
<span>Reject</span>
</button>
<button class="h-7 bg-surface-container-lowest hover:bg-surface-container border border-outline-variant text-on-surface-variant rounded text-label-xs font-label-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-[13px]">snooze</span>
<span>Snooze (2h)</span>
</button>
<button class="h-7 bg-surface-container-lowest hover:bg-surface-container border border-outline-variant text-on-surface-variant rounded text-label-xs font-label-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-[13px]">person_add</span>
<span>Assign QM</span>
</button>
</div>
</div>
<!-- Governance Warning Strip -->
<div class="p-2 rounded bg-surface-container border border-outline-variant/50 text-[10px] text-on-surface-variant flex items-start gap-1.5 leading-tight">
<span class="material-symbols-outlined text-[14px] text-secondary shrink-0 mt-0.5">verified</span>
<span>
<strong>Human-in-the-Loop Governance:</strong> Approving commits this recommendation to the operational logistics draft queue. Physical convoy dispatch and fuel decanting require separate cryptographic order signoff.
                </span>
</div>
</div>
</div>
</div>
<!-- Audit Trail Log for Selected Recommendation -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-3 text-label-xs font-label-xs space-y-2 shadow-sm">
<div class="flex items-center justify-between border-b border-outline-variant/60 pb-1.5">
<span class="font-bold uppercase tracking-wider text-primary flex items-center gap-1">
<span class="material-symbols-outlined text-[14px] text-secondary">history</span>
              Audit Trail Ledger (REC-2048)
            </span>
<span class="font-mono text-on-surface-variant">BLOCK: #882109-L</span>
</div>
<div class="space-y-1.5 font-mono text-[11px] text-on-surface-variant">
<div class="flex items-start justify-between">
<span class="text-on-surface font-medium">14:42:09 IST</span>
<span class="text-right flex-1 ml-2">Generated by SIM-0084 (Risk Score: 74%)</span>
</div>
<div class="flex items-start justify-between">
<span class="text-on-surface font-medium">14:46:18 IST</span>
<span class="text-right flex-1 ml-2">Opened by Lt. Col. B. Kumar (IC-78921K)</span>
</div>
<div class="flex items-start justify-between">
<span class="text-on-surface font-medium">14:49:50 IST</span>
<span class="text-right flex-1 ml-2">Telemetry cross-checked with RISK-1042</span>
</div>
<div class="flex items-start justify-between text-primary font-bold">
<span>14:52:11 IST</span>
<span class="text-right flex-1 ml-2">Parameter override staged: 2,500 L → 3,000 L</span>
</div>
</div>
</div>
</div>
</div>
</main>`;
