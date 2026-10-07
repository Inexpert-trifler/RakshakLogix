// Screen: RL-17 — Data Quality Center
// Route: /data-quality
export const rl17Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto p-margin-desktop space-y-5">
<!-- ==================== PAGE HEADER & QUICK CONTROLS ==================== -->
<section class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-outline-variant">
<div>
<div class="flex items-center gap-2.5">
<h1 class="text-headline-lg font-headline-lg text-primary tracking-tight">Data Quality Center</h1>
<span class="px-2 py-0.5 bg-surface-container-high text-secondary border border-secondary/30 rounded text-label-xs font-mono">
              RL-17 OPERATIONAL GOVERNANCE // ENGINE: v3.2-INTEGRITY
            </span>
</div>
<p class="text-body-sm text-on-surface-variant mt-1 max-w-3xl">
            Monitor the reliability, completeness, and relational consistency of multi-echelon logistics telemetry powering predictive demand forecasts and dynamic forward replenishment models.
          </p>
</div>
<!-- Header Controls & Trigger -->
<div class="flex flex-wrap items-center gap-2">
<!-- Filter: Domain -->
<div class="flex items-center gap-1.5 bg-surface-container-lowest border border-outline-variant rounded px-2.5 py-1 text-[11px]">
<span class="text-outline font-mono">DOMAIN:</span>
<select class="bg-transparent text-on-surface font-semibold border-0 p-0 text-[11px] focus:ring-0 cursor-pointer">
<option>All Domains (Consumption, Inventory, Fleet)</option>
<option>Supply Consumption (Active Batch)</option>
<option>Depot Inventory</option>
<option>Convoy Telemetry</option>
</select>
</div>
<!-- Scope: Location -->
<div class="flex items-center gap-1.5 bg-surface-container-lowest border border-outline-variant rounded px-2.5 py-1 text-[11px]">
<span class="text-outline font-mono">SCOPE:</span>
<select class="bg-transparent text-on-surface font-semibold border-0 p-0 text-[11px] focus:ring-0 cursor-pointer">
<option>Sector IV-B Northern Hubs</option>
<option>Leh Forward Logistics Depot</option>
<option>Kargil Staging Terminal</option>
<option>Chushul Air Drop Point</option>
</select>
</div>
<!-- Primary Operational Button -->
<button class="bg-primary-container hover:bg-secondary text-surface-bright px-3.5 py-1.5 rounded text-label-sm font-bold tracking-wider flex items-center gap-2 shadow-sm transition-colors border border-primary-container">
<span class="material-symbols-outlined text-[16px]">play_circle</span>
<span>RUN QUALITY CHECK</span>
</button>
</div>
</section>
<!-- Timestamp info bar -->
<div class="flex items-center justify-between text-[11px] font-mono text-outline -mt-3">
<div>RULESET: MIL-STD-188F // ISO-8000 AUDIT PROTOCOL ACTIVE</div>
<div>LAST EVALUATED: 05 OCT 2026 · 14:35 IST (NEXT RUN IN 24 MIN)</div>
</div>
<!-- ==================== OVERALL DATA CONFIDENCE & 5-DIMENSION STRIP ==================== -->
<section class="grid grid-cols-1 xl:grid-cols-12 gap-4">
<!-- Primary Overall Confidence Metric (Left 4 cols) -->
<div class="xl:col-span-4 bg-surface-container-lowest border border-outline-variant rounded p-4 flex flex-col justify-between">
<div class="flex items-start justify-between">
<div>
<span class="text-[10px] font-mono tracking-wider uppercase text-outline">AGGREGATE QUALITY POSTURE</span>
<h2 class="text-headline-sm font-headline-sm text-primary mt-0.5">OVERALL DATA CONFIDENCE</h2>
</div>
<span class="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container border border-secondary text-label-xs font-mono">
              ● OPERATIONAL // GOOD
            </span>
</div>
<!-- Giant KPI display -->
<div class="my-3 flex items-baseline gap-3">
<span class="text-[44px] font-bold tracking-tight text-primary leading-none font-mono-tabular">94%</span>
<div class="text-[11px] text-on-surface-variant leading-tight">
<span class="font-semibold text-primary">1,842</span> Records Ingested<br/>
<span class="text-amber-700 font-semibold">79</span> Flagged Variances
            </div>
</div>
<!-- Segmented Quality Bar -->
<div class="space-y-1.5">
<div class="h-2.5 w-full bg-surface-container-high rounded overflow-hidden flex">
<div class="bg-secondary h-full" style="width: 94%" title="94% Verified"></div>
<div class="bg-amber-500 h-full" style="width: 4%" title="4% Warnings"></div>
<div class="bg-error h-full" style="width: 2%" title="2% Critical"></div>
</div>
<div class="flex items-center justify-between text-[10px] font-mono text-outline">
<span class="flex items-center gap-1"><span class="w-2 h-2 rounded bg-secondary inline-block"></span> 94% Nominal</span>
<span class="flex items-center gap-1"><span class="w-2 h-2 rounded bg-amber-500 inline-block"></span> 4% Variance</span>
<span class="flex items-center gap-1"><span class="w-2 h-2 rounded bg-error inline-block"></span> 2% Severe</span>
</div>
</div>
</div>
<!-- 5 Dimensional Tiles (Right 8 cols) -->
<div class="xl:col-span-8 grid grid-cols-2 md:grid-cols-5 gap-2.5">
<!-- Tile 1: Completeness -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-3 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between text-[10px] font-mono text-outline">
<span>DIM-01</span>
<span class="material-symbols-outlined text-[15px] text-secondary">check_circle</span>
</div>
<div class="text-[12px] font-semibold text-primary mt-1">Completeness</div>
<div class="text-[10px] text-on-surface-variant leading-tight mt-0.5">Required keys &amp; timestamps</div>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant/50">
<div class="text-headline-sm font-bold text-primary font-mono-tabular">97%</div>
<div class="text-[10px] font-mono text-outline mt-0.5">42 pending keys</div>
</div>
</div>
<!-- Tile 2: Validity -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-3 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between text-[10px] font-mono text-outline">
<span>DIM-02</span>
<span class="material-symbols-outlined text-[15px] text-secondary">verified</span>
</div>
<div class="text-[12px] font-semibold text-primary mt-1">Validity</div>
<div class="text-[10px] text-on-surface-variant leading-tight mt-0.5">Format &amp; range bounds</div>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant/50">
<div class="text-headline-sm font-bold text-primary font-mono-tabular">95%</div>
<div class="text-[10px] font-mono text-outline mt-0.5">18 anomalies</div>
</div>
</div>
<!-- Tile 3: Consistency -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-3 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between text-[10px] font-mono text-outline">
<span>DIM-03</span>
<span class="material-symbols-outlined text-[15px] text-secondary">rule</span>
</div>
<div class="text-[12px] font-semibold text-primary mt-1">Consistency</div>
<div class="text-[10px] text-on-surface-variant leading-tight mt-0.5">Cross-domain parity</div>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant/50">
<div class="text-headline-sm font-bold text-primary font-mono-tabular">92%</div>
<div class="text-[10px] font-mono text-outline mt-0.5">11 mismatched</div>
</div>
</div>
<!-- Tile 4: Timeliness (Needs Attention) -->
<div class="bg-surface-container-lowest border-2 border-amber-500/50 rounded p-3 flex flex-col justify-between relative bg-amber-50/10">
<span class="absolute top-2 right-2 flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
</span>
<div>
<div class="flex items-center justify-between text-[10px] font-mono text-amber-800">
<span>DIM-04</span>
</div>
<div class="text-[12px] font-semibold text-amber-900 mt-1">Timeliness</div>
<div class="text-[10px] text-on-surface-variant leading-tight mt-0.5">Freshness &lt;4h SLA</div>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant/50">
<div class="text-headline-sm font-bold text-amber-800 font-mono-tabular">89%</div>
<div class="text-[10px] font-mono text-amber-700 font-semibold mt-0.5">Attention needed</div>
</div>
</div>
<!-- Tile 5: Duplicate-Free -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-3 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between text-[10px] font-mono text-outline">
<span>DIM-05</span>
<span class="material-symbols-outlined text-[15px] text-secondary">fingerprint</span>
</div>
<div class="text-[12px] font-semibold text-primary mt-1">Duplicate-Free</div>
<div class="text-[10px] text-on-surface-variant leading-tight mt-0.5">Cryptographic hash</div>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant/50">
<div class="text-headline-sm font-bold text-primary font-mono-tabular">99%</div>
<div class="text-[10px] font-mono text-outline mt-0.5">8 redundant IDs</div>
</div>
</div>
</div>
</section>
<!-- ==================== MAIN SPLIT LAYOUT (65% Left / 35% Right) ==================== -->
<div class="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">
<!-- ==================== LEFT COLUMN (65% / 8 cols) ==================== -->
<div class="xl:col-span-8 space-y-5">
<!-- Component A: Prioritized Data Quality Issues Table -->
<div class="bg-surface-container-lowest border border-outline-variant rounded overflow-hidden shadow-sm">
<!-- Table Header Bar & Category Tabs -->
<div class="p-3 border-b border-outline-variant bg-surface-container-low flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[18px]">gavel</span>
<h3 class="text-[13px] font-semibold uppercase tracking-wider text-primary">Data Quality Issues Ledger</h3>
</div>
<div class="text-[11px] text-outline font-mono">MIL-STD AUDIT QUEUE // SECTOR IV-B DISPATCHES</div>
</div>
<!-- Filter tabs -->
<div class="flex items-center gap-1 overflow-x-auto text-[11px] font-label-sm">
<button class="px-2.5 py-1 rounded bg-primary text-surface-bright font-semibold">Active (79)</button>
<button class="px-2 py-1 rounded hover:bg-surface-container-high text-error font-semibold">Critical (2)</button>
<button class="px-2 py-1 rounded hover:bg-surface-container-high text-amber-700 font-semibold">High (42)</button>
<button class="px-2 py-1 rounded hover:bg-surface-container-high text-on-surface-variant">Medium (24)</button>
<button class="px-2 py-1 rounded hover:bg-surface-container-high text-on-surface-variant">Low (11)</button>
<button class="px-2 py-1 rounded hover:bg-surface-container-high text-secondary font-semibold">Resolved Today (34)</button>
</div>
</div>
<!-- Table Sub-bar: Search & Batch Action -->
<div class="p-2.5 border-b border-outline-variant flex items-center justify-between bg-surface-bright gap-2">
<div class="flex items-center gap-2 flex-1">
<div class="relative flex-1 max-w-sm">
<span class="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-[15px] text-outline">filter_list</span>
<input class="w-full h-7 pl-7 pr-2 text-[11px] bg-surface-container-lowest border border-outline-variant rounded focus:ring-0" placeholder="Filter active anomalies by ID, batch, or message..." type="text"/>
</div>
<span class="text-[10px] font-mono text-outline hidden sm:inline">SORT: SEVERITY DESC</span>
</div>
<button class="h-7 px-2.5 bg-surface-container-high hover:bg-secondary-container text-on-surface border border-outline-variant rounded text-[10px] font-label-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors">
<span class="material-symbols-outlined text-[13px]">done_all</span>
<span>Auto-Reconcile Verified (12)</span>
</button>
</div>
<!-- Data Table Body -->
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse text-[12px]">
<thead>
<tr class="bg-surface-container-high text-primary border-b border-secondary/40 text-[10px] font-mono uppercase tracking-wider">
<th class="py-2 px-3">Severity</th>
<th class="py-2 px-3">Issue Description</th>
<th class="py-2 px-3">Domain</th>
<th class="py-2 px-3 text-right">Records</th>
<th class="py-2 px-3">Batch / Feed</th>
<th class="py-2 px-3">Downstream Risk</th>
<th class="py-2 px-3">Status</th>
<th class="py-2 px-3 text-center">Action</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/60 font-body-sm">
<!-- ROW 1 (SELECTED ACTIVE ROW) -->
<tr class="bg-secondary-container/30 hover:bg-secondary-container/50 border-l-4 border-secondary transition-colors cursor-pointer">
<td class="py-2 px-3 whitespace-nowrap">
<span class="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-400 font-mono text-[10px] font-bold uppercase">
                        HIGH
                      </span>
</td>
<td class="py-2 px-3 font-semibold text-primary">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[15px] text-amber-700">warning</span>
<span>Missing consumption timestamps &amp; dates</span>
</div>
<div class="text-[10px] font-mono text-outline">DQ-00482 // 42 records unmapped to calendar curve</div>
</td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="text-[11px] font-medium text-on-surface">Consumption</span>
</td>
<td class="py-2 px-3 text-right font-mono-tabular font-bold text-primary">42</td>
<td class="py-2 px-3 font-mono text-[10px] text-outline">IMP-2026-0048</td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="text-amber-800 text-[11px] font-medium flex items-center gap-1">
<span class="material-symbols-outlined text-[13px]">trending_down</span>
                        Forecast Error &gt;6%
                      </span>
</td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-mono text-[10px] uppercase font-bold">
                        OPEN
                      </span>
</td>
<td class="py-2 px-3 text-center whitespace-nowrap">
<button class="px-2 py-1 bg-secondary text-surface-bright rounded text-[10px] font-label-xs font-bold uppercase tracking-wider hover:bg-primary-container transition-colors">
                        Inspect
                      </button>
</td>
</tr>
<!-- ROW 2 -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2 px-3 whitespace-nowrap">
<span class="px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-300 font-mono text-[10px] font-semibold uppercase">
                        MEDIUM
                      </span>
</td>
<td class="py-2 px-3 text-on-surface">
<div>Unknown formation code <span class="font-mono text-primary font-semibold">LOC-9982</span></div>
<div class="text-[10px] font-mono text-outline">Ordnance requisition lacking master node mapping</div>
</td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="text-[11px]">Locations / Cons.</span>
</td>
<td class="py-2 px-3 text-right font-mono-tabular">18</td>
<td class="py-2 px-3 font-mono text-[10px] text-outline">ERP-Sync-48</td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="text-on-surface-variant text-[11px]">Inventory Runway Obscured</span>
</td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-mono text-[10px] uppercase">
                        OPEN
                      </span>
</td>
<td class="py-2 px-3 text-center whitespace-nowrap">
<button class="px-2 py-1 bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-high rounded text-[10px] font-label-xs font-semibold uppercase tracking-wider text-on-surface">
                        Map Code
                      </button>
</td>
</tr>
<!-- ROW 3 -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2 px-3 whitespace-nowrap">
<span class="px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-300 font-mono text-[10px] font-semibold uppercase">
                        MEDIUM
                      </span>
</td>
<td class="py-2 px-3 text-on-surface">
<div>Duplicate transaction IDs detected (<span class="font-mono">CONS-8817</span>)</div>
<div class="text-[10px] font-mono text-outline">Identical SHA256 receipt payload transmitted twice</div>
</td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="text-[11px]">Inventory Ledger</span>
</td>
<td class="py-2 px-3 text-right font-mono-tabular">8</td>
<td class="py-2 px-3 font-mono text-[10px] text-outline">IMP-2026-0048</td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="text-amber-700 text-[11px]">Double Count Risk (+24 MT)</span>
</td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-mono text-[10px] uppercase">
                        REVIEWING
                      </span>
</td>
<td class="py-2 px-3 text-center whitespace-nowrap">
<button class="px-2 py-1 bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-high rounded text-[10px] font-label-xs font-semibold uppercase tracking-wider text-on-surface">
                        Dedupe
                      </button>
</td>
</tr>
<!-- ROW 4 -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2 px-3 whitespace-nowrap">
<span class="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant border border-outline-variant font-mono text-[10px] font-semibold uppercase">
                        LOW
                      </span>
</td>
<td class="py-2 px-3 text-on-surface">
<div>Delayed GPS / Telemetry updates (&gt;2h lag)</div>
<div class="text-[10px] font-mono text-outline">Pass-level atmospheric interference on Zojila axis</div>
</td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="text-[11px]">Fleet / Transport</span>
</td>
<td class="py-2 px-3 text-right font-mono-tabular">11 units</td>
<td class="py-2 px-3 font-mono text-[10px] text-outline">Convoy-Beacon</td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="text-on-surface-variant text-[11px]">Route ETA Confidence ↓</span>
</td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="px-1.5 py-0.5 rounded bg-surface-container text-outline font-mono text-[10px] uppercase">
                        MONITORING
                      </span>
</td>
<td class="py-2 px-3 text-center whitespace-nowrap">
<button class="px-2 py-1 bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-high rounded text-[10px] font-label-xs font-semibold uppercase tracking-wider text-on-surface">
                        Ping
                      </button>
</td>
</tr>
<!-- ROW 5 (CRITICAL) -->
<tr class="hover:bg-error-container/20 transition-colors">
<td class="py-2 px-3 whitespace-nowrap">
<span class="px-1.5 py-0.5 rounded bg-error text-surface-bright font-mono text-[10px] font-bold uppercase">
                        CRITICAL
                      </span>
</td>
<td class="py-2 px-3 text-primary font-semibold">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[15px] text-error">error</span>
<span>Negative stock posture on POL Arctic Diesel</span>
</div>
<div class="text-[10px] font-mono text-error">Physical dip: 14,200 L // Ledger shows -480 L</div>
</td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="text-[11px] font-semibold text-error">Inventory</span>
</td>
<td class="py-2 px-3 text-right font-mono-tabular font-bold text-error">2</td>
<td class="py-2 px-3 font-mono text-[10px] text-outline">Post-Charlie</td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="text-error font-semibold text-[11px]">Requisition Engine Blocked</span>
</td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-mono text-[10px] uppercase font-bold">
                        IN PROGRESS
                      </span>
</td>
<td class="py-2 px-3 text-center whitespace-nowrap">
<button class="px-2 py-1 bg-error hover:bg-error/90 text-surface-bright rounded text-[10px] font-label-xs font-bold uppercase tracking-wider transition-colors">
                        Adjust
                      </button>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Table Footer Pagination -->
<div class="p-2.5 border-t border-outline-variant bg-surface-container-low flex flex-col sm:flex-row sm:items-center sm:justify-between text-[11px] text-on-surface-variant font-mono gap-2">
<div>SHOWING 1–5 OF 79 DETECTED ANOMALIES ACROSS SECTOR IV-B</div>
<div class="flex items-center gap-2">
<span class="text-outline">PAGE 1 OF 16</span>
<div class="flex gap-1">
<button class="w-6 h-6 rounded bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-outline cursor-not-allowed">«</button>
<button class="w-6 h-6 rounded bg-primary text-surface-bright flex items-center justify-center font-bold">1</button>
<button class="w-6 h-6 rounded bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-high flex items-center justify-center text-on-surface">2</button>
<button class="w-6 h-6 rounded bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-high flex items-center justify-center text-on-surface">3</button>
<button class="w-6 h-6 rounded bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-high flex items-center justify-center text-on-surface">»</button>
</div>
</div>
</div>
</div>
<!-- Component B: Cross-Domain Consistency & Source Freshness Matrix -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
<!-- Matrix 1: Cross-Domain Consistency Table -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-3.5 space-y-3">
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[17px] text-secondary">compare_arrows</span>
<h4 class="text-[12px] font-semibold uppercase tracking-wider text-primary">Cross-Domain Consistency</h4>
</div>
<span class="text-[9px] font-mono bg-surface-container-high px-1.5 py-0.5 rounded text-outline">RELATIONAL RECON</span>
</div>
<div class="space-y-2 text-[11px]">
<!-- Pair 1 -->
<div class="flex items-center justify-between p-2 rounded bg-surface-container-low border border-outline-variant/60">
<div>
<div class="font-semibold text-primary flex items-center gap-1">
<span>Inventory</span>
<span class="text-outline">↔</span>
<span>Consumption</span>
</div>
<div class="text-[10px] text-outline font-mono">Burn rate aligns with physical deduction</div>
</div>
<div class="text-right">
<span class="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-mono text-[10px] font-bold">
                      PARITY: 98.4%
                    </span>
<div class="text-[9px] text-secondary font-mono mt-0.5">NOMINAL</div>
</div>
</div>
<!-- Pair 2 -->
<div class="flex items-center justify-between p-2 rounded bg-surface-container-low border border-outline-variant/60">
<div>
<div class="font-semibold text-primary flex items-center gap-1">
<span>Inventory</span>
<span class="text-outline">↔</span>
<span>Fleet Waybills</span>
</div>
<div class="text-[10px] text-outline font-mono">In-transit stock vs depot unloads</div>
</div>
<div class="text-right">
<span class="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-mono text-[10px] font-bold">
                      PARITY: 91.2%
                    </span>
<div class="text-[9px] text-amber-700 font-mono mt-0.5">2 BATCHES UNCONFIRMED</div>
</div>
</div>
<!-- Pair 3 -->
<div class="flex items-center justify-between p-2 rounded bg-surface-container-low border border-outline-variant/60">
<div>
<div class="font-semibold text-primary flex items-center gap-1">
<span>Locations</span>
<span class="text-outline">↔</span>
<span>Asset Registers</span>
</div>
<div class="text-[10px] text-outline font-mono">Coordinates mapped to physical posts</div>
</div>
<div class="text-right">
<span class="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-mono text-[10px] font-bold">
                      PARITY: 99.8%
                    </span>
<div class="text-[9px] text-secondary font-mono mt-0.5">NOMINAL</div>
</div>
</div>
</div>
</div>
<!-- Matrix 2: Data Sources & Freshness Matrix -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-3.5 space-y-3">
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[17px] text-secondary">database</span>
<h4 class="text-[12px] font-semibold uppercase tracking-wider text-primary">Source Feeds &amp; Freshness</h4>
</div>
<span class="text-[9px] font-mono bg-surface-container-high px-1.5 py-0.5 rounded text-outline">SLA: &lt;4h TARGET</span>
</div>
<div class="space-y-2 text-[11px]">
<!-- Feed 1 -->
<div class="flex items-center justify-between p-2 rounded bg-surface-container-low border border-outline-variant/60">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-secondary"></div>
<div>
<div class="font-semibold text-primary">Consumption Import (Batch)</div>
<div class="text-[10px] text-outline font-mono">Source: Leh Field Headquarters</div>
</div>
</div>
<div class="text-right font-mono">
<div class="text-secondary font-bold">4m ago</div>
<div class="text-[9px] text-outline">Score: 96%</div>
</div>
</div>
<!-- Feed 2 -->
<div class="flex items-center justify-between p-2 rounded bg-surface-container-low border border-outline-variant/60">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-secondary"></div>
<div>
<div class="font-semibold text-primary">Depot Stock Telemetry Feed</div>
<div class="text-[10px] text-outline font-mono">Source: RFID &amp; Weighbridge Array</div>
</div>
</div>
<div class="text-right font-mono">
<div class="text-secondary font-bold">8m ago</div>
<div class="text-[9px] text-outline">Score: 94%</div>
</div>
</div>
<!-- Feed 3 -->
<div class="flex items-center justify-between p-2 rounded bg-surface-container-low border border-outline-variant/60">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-amber-500"></div>
<div>
<div class="font-semibold text-primary">Convoy Fleet Telemetry (IRNSS)</div>
<div class="text-[10px] text-amber-700 font-mono">STALE: Satellite transponder ping latency</div>
</div>
</div>
<div class="text-right font-mono">
<div class="text-amber-700 font-bold">2h 18m ago</div>
<div class="text-[9px] text-outline">Score: 89%</div>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- ==================== RIGHT COLUMN (35% / 4 cols) ==================== -->
<!-- Contextual Inspection Drawer & Impact Dossier -->
<div class="xl:col-span-4 space-y-4">
<!-- Box A: Issue Resolution Drawer for Selected Row -->
<div class="bg-surface-container-lowest border-2 border-secondary rounded p-4 shadow-sm relative space-y-3.5">
<!-- Drawer Header -->
<div class="border-b border-outline-variant pb-2.5">
<div class="flex items-center justify-between">
<span class="px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 font-mono text-[10px] font-bold uppercase">
                  SEVERITY: HIGH
                </span>
<span class="text-[10px] font-mono text-outline">REF: DQ-00482</span>
</div>
<h3 class="text-[14px] font-bold text-primary mt-1.5">Missing Consumption Dates</h3>
<div class="text-[11px] font-mono text-secondary font-medium">BATCH: IMP-2026-0048 // 42 UNINDEXED ENTRIES</div>
</div>
<!-- Explanatory Breakdown -->
<div class="space-y-2 text-[12px]">
<div>
<span class="text-[10px] font-mono uppercase tracking-wider text-outline block">1. Operational Root Cause</span>
<p class="text-on-surface-variant text-[11px] leading-relaxed mt-0.5">
                  42 supply distribution entries uploaded via manual field terminal from Leh Forward Depot lack ISO-8601 date-time stamps due to clock synchronization desync on terminal RL-T04.
                </p>
</div>
<div>
<span class="text-[10px] font-mono uppercase tracking-wider text-outline block">2. Downstream Algorithmic Impact</span>
<p class="text-on-surface-variant text-[11px] leading-relaxed mt-0.5">
                  Records cannot be mapped to the 30-day LSTM replenishment model, suppressing forecast confidence from <strong class="text-primary font-mono">94.2%</strong> down to <strong class="text-amber-800 font-mono">87.0%</strong> for Forward Post Alpha.
                </p>
</div>
<!-- Ingested Snippet Preview -->
<div>
<span class="text-[10px] font-mono uppercase tracking-wider text-outline block mb-1">3. Ingested Payload Snippet</span>
<div class="bg-surface-container-high/60 border border-outline-variant rounded p-2 text-[10px] font-mono space-y-1 text-on-surface">
<div class="flex justify-between border-b border-outline-variant/30 pb-0.5">
<span>#241 | WTR-012 (420 L)</span>
<span class="text-error font-bold">DATE: NULL</span>
</div>
<div class="flex justify-between">
<span>#242 | FUEL-001 (680 L)</span>
<span class="text-error font-bold">DATE: NULL</span>
</div>
</div>
</div>
</div>
<!-- Interactive Reconciliation Controls -->
<div class="border-t border-outline-variant pt-3 space-y-2">
<span class="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block">Select Resolution Strategy:</span>
<!-- Option 1 (Recommended) -->
<label class="flex items-start gap-2 p-2 rounded border border-secondary bg-secondary-container/20 cursor-pointer">
<input checked="" class="mt-0.5 text-secondary focus:ring-secondary" name="dq_resolution" type="radio"/>
<div class="text-[11px]">
<div class="font-bold text-primary flex items-center gap-1.5">
<span>Interpolate sequential log timeline</span>
<span class="text-[9px] font-mono bg-secondary text-surface-bright px-1 rounded">RECOMMENDED</span>
</div>
<div class="text-outline text-[10px] leading-tight mt-0.5">Map to 03 Oct 2026 (14:00–16:00 IST) based on sequential voucher index.</div>
</div>
</label>
<!-- Option 2 -->
<label class="flex items-start gap-2 p-2 rounded border border-outline-variant hover:bg-surface-container-low cursor-pointer">
<input class="mt-0.5 text-secondary focus:ring-secondary" name="dq_resolution" type="radio"/>
<div class="text-[11px]">
<div class="font-semibold text-primary">Assign batch ingest timestamp</div>
<div class="text-outline text-[10px] leading-tight mt-0.5">Assign current upload cycle date (05 Oct 2026 · 14:00 IST).</div>
</div>
</label>
<!-- Option 3 -->
<label class="flex items-start gap-2 p-2 rounded border border-outline-variant hover:bg-surface-container-low cursor-pointer">
<input class="mt-0.5 text-secondary focus:ring-secondary" name="dq_resolution" type="radio"/>
<div class="text-[11px]">
<div class="font-semibold text-on-surface">Quarantine 42 records</div>
<div class="text-outline text-[10px] leading-tight mt-0.5">Exclude from demand training set into manual review silo.</div>
</div>
</label>
</div>
<!-- Action Triggers -->
<div class="pt-2 flex flex-col gap-2">
<button class="w-full bg-secondary hover:bg-primary-container text-surface-bright py-2 rounded text-[11px] font-label-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 border border-secondary-fixed/40">
<span class="material-symbols-outlined text-[15px]">check_circle</span>
<span>APPLY RESOLUTION &amp; RECALCULATE</span>
</button>
<button class="w-full bg-surface-container-lowest hover:bg-surface-container-high border border-outline text-on-surface py-1.5 rounded text-[10px] font-label-xs font-semibold uppercase tracking-wider transition-colors">
                Mark as Accepted Exception
              </button>
</div>
</div>
<!-- Box B: Downstream Operational Impact & Forecast Confidence (RL-18 Bridge) -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-3.5 space-y-3">
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[17px] text-secondary">insights</span>
<h4 class="text-[12px] font-semibold uppercase tracking-wider text-primary">Downstream Logistics Impact</h4>
</div>
<span class="text-[9px] font-mono bg-surface-container-high px-1.5 py-0.5 rounded text-outline">RL-18 BRIDGE</span>
</div>
<div class="space-y-2 text-[11px]">
<!-- Impact Item 1 -->
<div class="flex items-center justify-between">
<span class="text-on-surface">Inventory Risk Model</span>
<span class="font-mono text-secondary font-bold">94% (HIGH)</span>
</div>
<!-- Impact Item 2 (Diminished) -->
<div class="flex items-center justify-between p-1.5 bg-amber-50 rounded border border-amber-200">
<div>
<span class="font-semibold text-amber-900 block leading-tight">Demand Forecast Engine</span>
<span class="text-[9px] text-amber-700 font-mono">Missing dates induce 6% variance</span>
</div>
<span class="font-mono text-amber-800 font-bold text-[12px]">87% (MODERATE)</span>
</div>
<!-- Impact Item 3 -->
<div class="flex items-center justify-between">
<span class="text-on-surface">Route Dispatch Matrix</span>
<span class="font-mono text-secondary font-bold">96% (HIGH)</span>
</div>
<!-- Impact Item 4 -->
<div class="flex items-center justify-between">
<span class="text-on-surface">Replenishment Prescription</span>
<span class="font-mono text-secondary font-bold">89% (NOMINAL)</span>
</div>
</div>
<!-- Forecast calibration banner -->
<div class="p-2 rounded bg-surface-container-low border border-secondary/30 text-[10px] text-on-surface-variant leading-relaxed">
<strong class="text-primary">Calibration Notice:</strong> Reconciling the 42 missing dates in Batch 0048 will restore Demand Forecast Confidence back to <strong class="text-secondary font-mono">94.2%</strong>.
            </div>
</div>
<!-- Box C: Recent Quality Governance Ledger & Accepted Exceptions -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-3.5 space-y-3">
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[17px] text-outline">history_edu</span>
<h4 class="text-[12px] font-semibold uppercase tracking-wider text-primary">Governance Audit Trail</h4>
</div>
<span class="text-[9px] font-mono text-outline">PAST 24 HRS</span>
</div>
<div class="space-y-2 text-[11px]">
<div class="border-l-2 border-secondary pl-2 space-y-0.5">
<div class="text-primary font-semibold">1,796 consumption records validated</div>
<div class="text-[9px] font-mono text-outline">05 Oct 14:36 · Signed: Hav. V. Negi (IC-901)</div>
</div>
<div class="border-l-2 border-secondary pl-2 space-y-0.5">
<div class="text-primary font-semibold">18 location aliases mapped to LOC-0042</div>
<div class="text-[9px] font-mono text-outline">05 Oct 13:42 · Automated Rule: RULE-GEO-09</div>
</div>
<div class="border-l-2 border-secondary pl-2 space-y-0.5">
<div class="text-primary font-semibold">8 duplicate transactions purged</div>
<div class="text-[9px] font-mono text-outline">04 Oct 18:10 · Authorized: Capt. S. Rathore</div>
</div>
</div>
<div class="pt-2 border-t border-outline-variant/60 flex items-center justify-between text-[10px] font-mono text-outline">
<span>3 MONITORED EXCEPTIONS</span>
<span class="text-secondary font-semibold">ALL WITH QMG SIGN-OFF</span>
</div>
</div>
</div>
</div>
</main>`;
