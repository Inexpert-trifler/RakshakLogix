// Screen: RL-14 — Inventory Risk & Replenishment
// Route: /inventory/risk
export const rl14Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto flex-1 px-margin-desktop py-space-lg flex flex-col space-y-space-md">
<!-- Section Title, Subtitle and Horizon Controls -->
<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-space-sm pb-space-sm border-b border-outline-variant">
<div>
<div class="flex items-center space-x-2">
<span class="px-1.5 py-0.5 rounded bg-surface-container-high border border-outline-variant font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">RL-14 MODULE</span>
<h1 class="text-headline-lg font-headline-lg text-on-surface tracking-tight">Inventory Risk &amp; Replenishment</h1>
</div>
<p class="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
            Identify projected shortages and prioritize replenishment actions before stockouts occur.
          </p>
</div>
<!-- Action / Filter Controls Bar -->
<div class="flex flex-wrap items-center gap-space-sm">
<!-- Horizon Selector Pills -->
<div class="inline-flex rounded border border-outline-variant bg-surface-container-lowest p-0.5 text-label-xs font-label-xs">
<button class="px-2.5 py-1 text-on-surface-variant hover:text-on-surface rounded-sm transition-colors" type="button">7 Days</button>
<button class="px-2.5 py-1 bg-primary text-on-primary font-semibold rounded-sm shadow-none" type="button">Next 14 Days [Active]</button>
<button class="px-2.5 py-1 text-on-surface-variant hover:text-on-surface rounded-sm transition-colors" type="button">30 Days</button>
</div>
<!-- Location Selector -->
<div class="flex items-center h-8 bg-surface-container-lowest border border-outline-variant rounded px-2 text-label-sm font-label-sm text-on-surface">
<span class="material-symbols-outlined icon-sm text-outline mr-1.5">share_location</span>
<span class="font-medium truncate max-w-[170px]">All Formations // Sector IV-B</span>
<span class="material-symbols-outlined icon-sm text-outline ml-1">arrow_drop_down</span>
</div>
<!-- Category Selector -->
<div class="flex items-center h-8 bg-surface-container-lowest border border-outline-variant rounded px-2 text-label-sm font-label-sm text-on-surface">
<span class="material-symbols-outlined icon-sm text-outline mr-1.5">category</span>
<span>All Classes (POL, Ammo, Med)</span>
<span class="material-symbols-outlined icon-sm text-outline ml-1">arrow_drop_down</span>
</div>
<!-- Primary CTA Button -->
<button class="h-8 px-space-md bg-primary text-on-primary hover:bg-secondary rounded text-label-sm font-label-sm font-semibold tracking-wider flex items-center space-x-1.5 transition-colors cursor-pointer border border-primary" type="button">
<span class="material-symbols-outlined icon-sm">add</span>
<span>+ Create Replenishment Plan</span>
</button>
</div>
</div>
<!-- ==================== RISK SUMMARY STRIP (5 METRICS) ==================== -->
<section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-sm">
<!-- Metric 1: Critical -->
<div class="bg-surface-container-lowest border-l-4 border-l-error border border-outline-variant rounded p-space-sm flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs tracking-wider uppercase text-on-surface-variant font-bold">Critical</span>
<span class="material-symbols-outlined text-error text-base icon-fill">pixel_4_4xl_4a_5_5a_5g</span>
</div>
<div class="mt-2 flex items-baseline space-x-1.5">
<span class="text-headline-xl font-headline-xl text-error tabular-nums">7</span>
<span class="text-label-xs font-label-xs text-error font-medium">Items</span>
</div>
<span class="text-[11px] leading-tight text-on-surface-variant mt-1">Projected stockout &lt; 3 days / buffer breach</span>
</div>
<!-- Metric 2: High Risk -->
<div class="bg-surface-container-lowest border-l-4 border-l-[#C49A45] border border-outline-variant rounded p-space-sm flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs tracking-wider uppercase text-on-surface-variant font-bold">High Risk</span>
<span class="material-symbols-outlined text-[#C49A45] text-base">warning</span>
</div>
<div class="mt-2 flex items-baseline space-x-1.5">
<span class="text-headline-xl font-headline-xl text-on-surface tabular-nums">18</span>
<span class="text-label-xs font-label-xs text-on-surface-variant font-medium">Items</span>
</div>
<span class="text-[11px] leading-tight text-on-surface-variant mt-1">Projected to fall below safety stock floor</span>
</div>
<!-- Metric 3: Medium Risk -->
<div class="bg-surface-container-lowest border-l-4 border-l-secondary border border-outline-variant rounded p-space-sm flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs tracking-wider uppercase text-on-surface-variant font-bold">Medium Risk</span>
<span class="material-symbols-outlined text-secondary text-base">monitoring</span>
</div>
<div class="mt-2 flex items-baseline space-x-1.5">
<span class="text-headline-xl font-headline-xl text-on-surface tabular-nums">31</span>
<span class="text-label-xs font-label-xs text-on-surface-variant font-medium">Items</span>
</div>
<span class="text-[11px] leading-tight text-on-surface-variant mt-1">Telemetry monitoring / velocity check</span>
</div>
<!-- Metric 4: At Risk Locations -->
<div class="bg-surface-container-lowest border-l-4 border-l-outline border border-outline-variant rounded p-space-sm flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs tracking-wider uppercase text-on-surface-variant font-bold">At Risk Locations</span>
<span class="material-symbols-outlined text-on-surface text-base">pin_drop</span>
</div>
<div class="mt-2 flex items-baseline space-x-1.5">
<span class="text-headline-xl font-headline-xl text-on-surface tabular-nums">9</span>
<span class="text-label-xs font-label-xs text-on-surface-variant font-medium">Formations</span>
</div>
<span class="text-[11px] leading-tight text-on-surface-variant mt-1">Formations with active critical deficits</span>
</div>
<!-- Metric 5: Replenishment Required -->
<div class="bg-surface-container-lowest border-l-4 border-l-primary border border-outline-variant rounded p-space-sm flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs tracking-wider uppercase text-on-surface-variant font-bold">Replenishment Req</span>
<span class="material-symbols-outlined text-primary text-base">checklist</span>
</div>
<div class="mt-2 flex items-baseline space-x-1.5">
<span class="text-headline-xl font-headline-xl text-on-surface tabular-nums">24</span>
<span class="text-label-xs font-label-xs text-on-surface-variant font-medium">Protocols</span>
</div>
<span class="text-[11px] leading-tight text-on-surface-variant mt-1">Recommended dispatches awaiting sign-off</span>
</div>
</section>
<!-- ==================== TWO-COLUMN OPERATIONAL WORKSPACE ==================== -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
<!-- LEFT COLUMN (~62% = 7.5 of 12 cols -> span 7 or 8) -->
<div class="lg:col-span-7 xl:col-span-7 flex flex-col space-y-space-md">
<!-- Table Container Card -->
<div class="bg-surface-container-lowest border border-outline-variant rounded shadow-none overflow-hidden">
<!-- Table Header Bar & Filter Chips -->
<div class="p-space-sm bg-surface-container border-b border-outline-variant flex flex-col space-y-2">
<div class="flex items-center justify-between">
<div class="flex items-center space-x-2">
<span class="material-symbols-outlined text-primary">priority_high</span>
<h2 class="text-headline-sm font-headline-sm text-on-surface text-sm font-bold tracking-tight">Priority Replenishment Queue</h2>
</div>
<span class="text-label-xs font-label-xs text-on-surface-variant font-mono bg-surface-container-highest px-2 py-0.5 rounded border border-outline-variant">
                  Sorted by operational impact &amp; stockout horizon
                </span>
</div>
<!-- Quick Filter Chips -->
<div class="flex flex-wrap items-center gap-1.5 pt-1">
<button class="px-2 py-0.5 rounded text-[11px] font-semibold bg-surface-container-highest text-on-surface border border-outline-variant hover:bg-surface-container" type="button">All Risks (56)</button>
<button class="px-2 py-0.5 rounded text-[11px] font-semibold bg-error text-on-error border border-error" type="button">Critical (7)</button>
<button class="px-2 py-0.5 rounded text-[11px] font-medium bg-surface-container-low text-on-surface-variant border border-outline-variant hover:bg-surface-container" type="button">Stockout &lt; 3 Days (4)</button>
<button class="px-2 py-0.5 rounded text-[11px] font-medium bg-surface-container-low text-on-surface-variant border border-outline-variant hover:bg-surface-container" type="button">Below Safety Stock (18)</button>
<button class="px-2 py-0.5 rounded text-[11px] font-medium bg-surface-container-low text-on-surface-variant border border-outline-variant hover:bg-surface-container" type="button">No Inbound Supply (9)</button>
<button class="px-2 py-0.5 rounded text-[11px] font-medium bg-surface-container-low text-on-surface-variant border border-outline-variant hover:bg-surface-container" type="button">Awaiting Approval (12)</button>
</div>
</div>
<!-- Operational Data Table -->
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container text-label-xs font-label-xs uppercase tracking-wider text-on-surface-variant border-b border-outline-variant select-none">
<th class="py-2 px-2.5">Priority</th>
<th class="py-2 px-2">Item &amp; SKU</th>
<th class="py-2 px-2">Location / Node</th>
<th class="py-2 px-2 text-right">Current Stock</th>
<th class="py-2 px-2 text-right">Runway</th>
<th class="py-2 px-2 text-right">Safety Floor</th>
<th class="py-2 px-2">Stockout</th>
<th class="py-2 px-2 text-right">Surge</th>
<th class="py-2 px-2 text-right">Rec. Qty</th>
<th class="py-2 px-2 text-center">Risk</th>
<th class="py-2 px-2 text-center">Action</th>
</tr>
</thead>
<tbody class="text-body-sm font-body-sm divide-y divide-outline-variant">
<!-- ROW 1 (PRE-SELECTED / CRITICAL / POL ARCTIC DIESEL) -->
<tr class="bg-surface-container-low border-l-4 border-l-error border-y-2 border-y-secondary/40 font-medium">
<td class="py-2.5 px-2.5 whitespace-nowrap">
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-error text-on-error tracking-wider uppercase">
                        CRITICAL
                      </span>
</td>
<td class="py-2.5 px-2">
<div class="flex flex-col">
<span class="font-bold text-on-surface text-xs">POL Arctic Diesel</span>
<span class="text-[10px] font-mono text-on-surface-variant">FUEL-001 // CL-III</span>
</div>
</td>
<td class="py-2.5 px-2 whitespace-nowrap">
<div class="flex flex-col">
<span class="text-xs text-on-surface">Forward Post Alpha</span>
<span class="text-[10px] font-mono text-outline">LOC-0042 (Sector IV-B)</span>
</div>
</td>
<td class="py-2.5 px-2 text-right tabular-nums whitespace-nowrap font-bold text-on-surface">
                      4,200 L
                    </td>
<td class="py-2.5 px-2 text-right tabular-nums whitespace-nowrap">
<span class="text-error font-bold text-xs">6.1 d</span>
</td>
<td class="py-2.5 px-2 text-right tabular-nums whitespace-nowrap text-on-surface-variant text-xs">
                      2,000 L
                    </td>
<td class="py-2.5 px-2 whitespace-nowrap">
<span class="text-error font-bold text-xs">11 Oct 26</span>
</td>
<td class="py-2.5 px-2 text-right tabular-nums text-error font-bold text-xs">
                      +18%
                    </td>
<td class="py-2.5 px-2 text-right tabular-nums font-bold text-primary text-xs">
                      2,500 L
                    </td>
<td class="py-2.5 px-2 text-center whitespace-nowrap">
<span class="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-error-container text-on-error-container tabular-nums">91%</span>
</td>
<td class="py-2.5 px-2 text-center whitespace-nowrap">
<button class="px-2 py-1 rounded bg-secondary text-on-secondary text-label-xs font-semibold hover:bg-primary transition-colors" type="button">
                        Selected
                      </button>
</td>
</tr>
<!-- ROW 2: Plasma & IV Kits -->
<tr class="hover:bg-surface-container/60 transition-colors">
<td class="py-2.5 px-2.5 whitespace-nowrap">
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-error text-on-error tracking-wider uppercase">
                        CRITICAL
                      </span>
</td>
<td class="py-2.5 px-2">
<div class="flex flex-col">
<span class="font-bold text-on-surface text-xs">Trauma Plasma &amp; IV Kits</span>
<span class="text-[10px] font-mono text-on-surface-variant">MED-902 // CL-VIII</span>
</div>
</td>
<td class="py-2.5 px-2 whitespace-nowrap">
<div class="flex flex-col">
<span class="text-xs text-on-surface">Forward Post Charlie</span>
<span class="text-[10px] font-mono text-outline">LOC-0078</span>
</div>
</td>
<td class="py-2.5 px-2 text-right tabular-nums whitespace-nowrap font-bold text-on-surface">
                      34 Units
                    </td>
<td class="py-2.5 px-2 text-right tabular-nums whitespace-nowrap">
<span class="text-error font-bold text-xs">2.4 d</span>
</td>
<td class="py-2.5 px-2 text-right tabular-nums whitespace-nowrap text-on-surface-variant text-xs">
                      40 Units
                    </td>
<td class="py-2.5 px-2 whitespace-nowrap">
<span class="text-error font-bold text-xs">08 Oct 26</span>
</td>
<td class="py-2.5 px-2 text-right tabular-nums text-error font-bold text-xs">
                      +42%
                    </td>
<td class="py-2.5 px-2 text-right tabular-nums font-bold text-on-surface text-xs">
                      60 Units
                    </td>
<td class="py-2.5 px-2 text-center whitespace-nowrap">
<span class="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-error-container text-on-error-container tabular-nums">88%</span>
</td>
<td class="py-2.5 px-2 text-center whitespace-nowrap">
<button class="px-2 py-1 rounded border border-outline-variant hover:bg-surface-container text-label-xs font-medium text-on-surface" type="button">
                        Review
                      </button>
</td>
</tr>
<!-- ROW 3: Winter Rations MRE -->
<tr class="hover:bg-surface-container/60 transition-colors">
<td class="py-2.5 px-2.5 whitespace-nowrap">
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#C49A45]/20 text-[#7A5B18] border border-[#C49A45] tracking-wider uppercase">
                        HIGH
                      </span>
</td>
<td class="py-2.5 px-2">
<div class="flex flex-col">
<span class="font-bold text-on-surface text-xs">Winter Rations MRE Type-C</span>
<span class="text-[10px] font-mono text-on-surface-variant">RAT-104 // CL-I</span>
</div>
</td>
<td class="py-2.5 px-2 whitespace-nowrap">
<div class="flex flex-col">
<span class="text-xs text-on-surface">Sector Bravo Transit</span>
<span class="text-[10px] font-mono text-outline">LOC-0012</span>
</div>
</td>
<td class="py-2.5 px-2 text-right tabular-nums whitespace-nowrap text-on-surface">
                      1,820 Pk
                    </td>
<td class="py-2.5 px-2 text-right tabular-nums whitespace-nowrap">
<span class="text-[#7A5B18] font-bold text-xs">8.5 d</span>
</td>
<td class="py-2.5 px-2 text-right tabular-nums whitespace-nowrap text-on-surface-variant text-xs">
                      1,500 Pk
                    </td>
<td class="py-2.5 px-2 whitespace-nowrap">
<span class="text-on-surface text-xs">14 Oct 26</span>
</td>
<td class="py-2.5 px-2 text-right tabular-nums text-on-surface-variant text-xs">
                      +6%
                    </td>
<td class="py-2.5 px-2 text-right tabular-nums font-bold text-on-surface text-xs">
                      1,200 Pk
                    </td>
<td class="py-2.5 px-2 text-center whitespace-nowrap">
<span class="inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#C49A45]/20 text-[#7A5B18] tabular-nums">74%</span>
</td>
<td class="py-2.5 px-2 text-center whitespace-nowrap">
<button class="px-2 py-1 rounded border border-outline-variant hover:bg-surface-container text-label-xs font-medium text-on-surface" type="button">
                        Review
                      </button>
</td>
</tr>
<!-- ROW 4: Potable Water -->
<tr class="hover:bg-surface-container/60 transition-colors">
<td class="py-2.5 px-2.5 whitespace-nowrap">
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#C49A45]/20 text-[#7A5B18] border border-[#C49A45] tracking-wider uppercase">
                        HIGH
                      </span>
</td>
<td class="py-2.5 px-2">
<div class="flex flex-col">
<span class="font-bold text-on-surface text-xs">Potable Water Insulated Bowsers</span>
<span class="text-[10px] font-mono text-on-surface-variant">WTR-042 // CL-I</span>
</div>
</td>
<td class="py-2.5 px-2 whitespace-nowrap">
<div class="flex flex-col">
<span class="text-xs text-on-surface">Forward Post Alpha</span>
<span class="text-[10px] font-mono text-outline">LOC-0042</span>
</div>
</td>
<td class="py-2.5 px-2 text-right tabular-nums whitespace-nowrap text-on-surface">
                      8,400 L
                    </td>
<td class="py-2.5 px-2 text-right tabular-nums whitespace-nowrap">
<span class="text-[#7A5B18] font-bold text-xs">5.8 d</span>
</td>
<td class="py-2.5 px-2 text-right tabular-nums whitespace-nowrap text-on-surface-variant text-xs">
                      6,000 L
                    </td>
<td class="py-2.5 px-2 whitespace-nowrap">
<span class="text-on-surface text-xs">12 Oct 26</span>
</td>
<td class="py-2.5 px-2 text-right tabular-nums text-on-surface-variant text-xs">
                      +11%
                    </td>
<td class="py-2.5 px-2 text-right tabular-nums font-bold text-on-surface text-xs">
                      5,000 L
                    </td>
<td class="py-2.5 px-2 text-center whitespace-nowrap">
<span class="inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#C49A45]/20 text-[#7A5B18] tabular-nums">71%</span>
</td>
<td class="py-2.5 px-2 text-center whitespace-nowrap">
<button class="px-2 py-1 rounded border border-outline-variant hover:bg-surface-container text-label-xs font-medium text-on-surface" type="button">
                        Review
                      </button>
</td>
</tr>
<!-- ROW 5: Sub-Zero Synthetic Lube -->
<tr class="hover:bg-surface-container/60 transition-colors">
<td class="py-2.5 px-2.5 whitespace-nowrap">
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-surface-container-high text-on-surface-variant border border-outline-variant tracking-wider uppercase">
                        MEDIUM
                      </span>
</td>
<td class="py-2.5 px-2">
<div class="flex flex-col">
<span class="font-bold text-on-surface text-xs">Sub-Zero Synthetic Engine Lube</span>
<span class="text-[10px] font-mono text-on-surface-variant">LUB-884 // CL-III</span>
</div>
</td>
<td class="py-2.5 px-2 whitespace-nowrap">
<div class="flex flex-col">
<span class="text-xs text-on-surface">Khardung Pass Depot</span>
<span class="text-[10px] font-mono text-outline">LOC-0091</span>
</div>
</td>
<td class="py-2.5 px-2 text-right tabular-nums whitespace-nowrap text-on-surface">
                      340 Can
                    </td>
<td class="py-2.5 px-2 text-right tabular-nums whitespace-nowrap">
<span class="text-secondary font-bold text-xs">9.8 d</span>
</td>
<td class="py-2.5 px-2 text-right tabular-nums whitespace-nowrap text-on-surface-variant text-xs">
                      200 Can
                    </td>
<td class="py-2.5 px-2 whitespace-nowrap">
<span class="text-on-surface-variant text-xs">16 Oct 26</span>
</td>
<td class="py-2.5 px-2 text-right tabular-nums text-on-surface-variant text-xs">
                      +4%
                    </td>
<td class="py-2.5 px-2 text-right tabular-nums font-bold text-on-surface text-xs">
                      180 Can
                    </td>
<td class="py-2.5 px-2 text-center whitespace-nowrap">
<span class="inline-block px-1.5 py-0.5 rounded text-[10px] font-medium bg-surface-container text-on-surface-variant tabular-nums">48%</span>
</td>
<td class="py-2.5 px-2 text-center whitespace-nowrap">
<button class="px-2 py-1 rounded border border-outline-variant hover:bg-surface-container text-label-xs font-medium text-on-surface" type="button">
                        Review
                      </button>
</td>
</tr>
<!-- ROW 6: 7.62mm Munitions -->
<tr class="hover:bg-surface-container/60 transition-colors">
<td class="py-2.5 px-2.5 whitespace-nowrap">
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-surface-container-high text-on-surface-variant border border-outline-variant tracking-wider uppercase">
                        MEDIUM
                      </span>
</td>
<td class="py-2.5 px-2">
<div class="flex flex-col">
<span class="font-bold text-on-surface text-xs">7.62x51mm Belted Munitions</span>
<span class="text-[10px] font-mono text-on-surface-variant">AM-762 // CL-V</span>
</div>
</td>
<td class="py-2.5 px-2 whitespace-nowrap">
<div class="flex flex-col">
<span class="text-xs text-on-surface">Foxtrot Outpost</span>
<span class="text-[10px] font-mono text-outline">LOC-0033</span>
</div>
</td>
<td class="py-2.5 px-2 text-right tabular-nums whitespace-nowrap text-on-surface">
                      48,000 Rd
                    </td>
<td class="py-2.5 px-2 text-right tabular-nums whitespace-nowrap">
<span class="text-secondary font-bold text-xs">28.0 d</span>
</td>
<td class="py-2.5 px-2 text-right tabular-nums whitespace-nowrap text-on-surface-variant text-xs">
                      20,000 Rd
                    </td>
<td class="py-2.5 px-2 whitespace-nowrap">
<span class="text-on-surface-variant text-xs">04 Nov 26</span>
</td>
<td class="py-2.5 px-2 text-right tabular-nums text-on-surface-variant text-xs">
                      -2%
                    </td>
<td class="py-2.5 px-2 text-right tabular-nums font-bold text-on-surface text-xs">
                      15,000 Rd
                    </td>
<td class="py-2.5 px-2 text-center whitespace-nowrap">
<span class="inline-block px-1.5 py-0.5 rounded text-[10px] font-medium bg-surface-container text-on-surface-variant tabular-nums">32%</span>
</td>
<td class="py-2.5 px-2 text-center whitespace-nowrap">
<button class="px-2 py-1 rounded border border-outline-variant hover:bg-surface-container text-label-xs font-medium text-on-surface" type="button">
                        Review
                      </button>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Table Footer Pagination & Telemetry Note -->
<div class="px-space-sm py-2 bg-surface-container border-t border-outline-variant flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span>Showing 6 of 56 telemetry monitored items across Sector IV-B</span>
<div class="flex items-center space-x-1">
<button class="px-1.5 py-0.5 rounded border border-outline-variant bg-surface-container-lowest text-on-surface disabled:opacity-50">Prev</button>
<span class="px-2 font-mono">1 / 10</span>
<button class="px-1.5 py-0.5 rounded border border-outline-variant bg-surface-container-lowest text-on-surface">Next</button>
</div>
</div>
</div>
<!-- COMPACT SECONDARY PANEL: Inventory Risk by Location Matrix -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-space-sm">
<div class="flex items-center justify-between pb-2 border-b border-outline-variant mb-2">
<div class="flex items-center space-x-1.5">
<span class="material-symbols-outlined text-primary text-base">hub</span>
<h3 class="text-label-md font-label-md font-bold text-on-surface uppercase tracking-wide">Inventory Risk by Location Matrix</h3>
</div>
<span class="text-label-xs font-label-xs text-on-surface-variant">Sector IV-B Logistics Perimeter</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-5 gap-2">
<!-- Loc 1: Forward Post Alpha -->
<div class="p-2 rounded bg-surface-container-low border border-error/50 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="font-bold text-xs text-on-surface truncate">Post Alpha</span>
<span class="text-[9px] font-bold text-error bg-error/10 px-1 rounded">CRIT</span>
</div>
<span class="text-[10px] font-mono text-outline">LOC-0042</span>
</div>
<div class="mt-2 space-y-0.5 text-[11px] tabular-nums">
<div class="flex justify-between text-on-surface-variant"><span>Crit Items:</span> <span class="font-bold text-error">2</span></div>
<div class="flex justify-between text-on-surface-variant"><span>Earliest:</span> <span class="font-bold text-error">11 Oct</span></div>
<div class="flex justify-between text-on-surface-variant"><span>Requisition:</span> <span class="font-bold text-primary">2 Active</span></div>
</div>
</div>
<!-- Loc 2: Forward Post Charlie -->
<div class="p-2 rounded bg-surface-container-low border border-error/50 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="font-bold text-xs text-on-surface truncate">Post Charlie</span>
<span class="text-[9px] font-bold text-error bg-error/10 px-1 rounded">CRIT</span>
</div>
<span class="text-[10px] font-mono text-outline">LOC-0078</span>
</div>
<div class="mt-2 space-y-0.5 text-[11px] tabular-nums">
<div class="flex justify-between text-on-surface-variant"><span>Crit Items:</span> <span class="font-bold text-error">3</span></div>
<div class="flex justify-between text-on-surface-variant"><span>Earliest:</span> <span class="font-bold text-error">08 Oct</span></div>
<div class="flex justify-between text-on-surface-variant"><span>Requisition:</span> <span class="font-bold text-primary">3 Active</span></div>
</div>
</div>
<!-- Loc 3: Foxtrot Outpost -->
<div class="p-2 rounded bg-surface-container-low border border-outline-variant flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="font-bold text-xs text-on-surface truncate">Foxtrot Outpost</span>
<span class="text-[9px] font-medium text-secondary bg-secondary/10 px-1 rounded">MED</span>
</div>
<span class="text-[10px] font-mono text-outline">LOC-0033</span>
</div>
<div class="mt-2 space-y-0.5 text-[11px] tabular-nums">
<div class="flex justify-between text-on-surface-variant"><span>Crit Items:</span> <span>0</span></div>
<div class="flex justify-between text-on-surface-variant"><span>Earliest:</span> <span>28 Oct</span></div>
<div class="flex justify-between text-on-surface-variant"><span>Requisition:</span> <span class="font-bold text-on-surface">1 Plan</span></div>
</div>
</div>
<!-- Loc 4: Khardung Transit Node -->
<div class="p-2 rounded bg-surface-container-low border border-[#C49A45]/40 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="font-bold text-xs text-on-surface truncate">Khardung Node</span>
<span class="text-[9px] font-bold text-[#7A5B18] bg-[#C49A45]/15 px-1 rounded">HIGH</span>
</div>
<span class="text-[10px] font-mono text-outline">LOC-0091</span>
</div>
<div class="mt-2 space-y-0.5 text-[11px] tabular-nums">
<div class="flex justify-between text-on-surface-variant"><span>Crit Items:</span> <span class="font-bold text-[#7A5B18]">1</span></div>
<div class="flex justify-between text-on-surface-variant"><span>Earliest:</span> <span class="font-bold text-on-surface">14 Oct</span></div>
<div class="flex justify-between text-on-surface-variant"><span>Requisition:</span> <span class="font-bold text-primary">1 Active</span></div>
</div>
</div>
<!-- Loc 5: Logistics Hub North -->
<div class="p-2 rounded bg-surface-container-low border border-outline-variant flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="font-bold text-xs text-on-surface truncate">Hub North Leh</span>
<span class="text-[9px] font-medium text-secondary bg-secondary/10 px-1 rounded">NOMINAL</span>
</div>
<span class="text-[10px] font-mono text-outline">LOC-0001 (HQ)</span>
</div>
<div class="mt-2 space-y-0.5 text-[11px] tabular-nums">
<div class="flex justify-between text-on-surface-variant"><span>Crit Items:</span> <span>0</span></div>
<div class="flex justify-between text-on-surface-variant"><span>Earliest:</span> <span>&gt;45 d</span></div>
<div class="flex justify-between text-on-surface-variant"><span>Requisition:</span> <span class="font-bold text-secondary">Depot Source</span></div>
</div>
</div>
</div>
</div>
</div>
<!-- RIGHT COLUMN (~38% = 5 of 12 cols): Selected Risk & Replenishment Decision Dossier -->
<div class="lg:col-span-5 xl:col-span-5 flex flex-col space-y-space-md">
<div class="bg-surface-container-lowest border-2 border-secondary/50 rounded shadow-none overflow-hidden flex flex-col">
<!-- DOSSIER 1. Header & Position -->
<div class="bg-primary-container text-surface p-space-md border-b border-outline-variant/30 flex flex-col space-y-2">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs font-mono tracking-wider text-secondary-fixed">
                  DECISION DOSSIER // SKU-FUEL-001
                </span>
<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-error text-on-error uppercase tracking-wider">
                  CRITICAL // 91% STOCKOUT PROBABILITY
                </span>
</div>
<div class="flex flex-col">
<h2 class="text-headline-sm font-headline-sm font-bold text-surface tracking-tight">POL Arctic Diesel Fuel</h2>
<div class="flex items-center space-x-2 text-label-xs font-label-xs text-on-primary-container">
<span>Forward Post Alpha</span>
<span>•</span>
<span>LOC-0042 // Sector IV-B</span>
<span>•</span>
<span>Class III Bulk Liquid</span>
</div>
</div>
<!-- Current Operational Numbers Strip -->
<div class="grid grid-cols-4 gap-1.5 pt-2 mt-1 border-t border-outline-variant/20 text-center font-mono">
<div class="bg-surface/5 p-1 rounded">
<span class="block text-[9px] text-on-primary-container">CURRENT</span>
<span class="text-xs font-bold text-surface tabular-nums">4,200 L</span>
</div>
<div class="bg-surface/5 p-1 rounded">
<span class="block text-[9px] text-on-primary-container">DAILY BURN</span>
<span class="text-xs font-bold text-surface tabular-nums">680 L/d</span>
</div>
<div class="bg-surface/5 p-1 rounded">
<span class="block text-[9px] text-on-primary-container">SAFETY FLOOR</span>
<span class="text-xs font-bold text-secondary-fixed tabular-nums">2,000 L</span>
</div>
<div class="bg-error/20 p-1 rounded border border-error/40">
<span class="block text-[9px] text-error-container">DEPLETION</span>
<span class="text-xs font-bold text-error-container tabular-nums">11 Oct 26</span>
</div>
</div>
</div>
<div class="p-space-md flex flex-col space-y-space-md">
<!-- DOSSIER 2. Explainable Risk Drivers -->
<div class="border border-outline-variant rounded p-space-sm bg-surface-container-low">
<div class="flex items-center space-x-1.5 pb-1.5 border-b border-outline-variant mb-2">
<span class="material-symbols-outlined text-primary text-base">psychology</span>
<h4 class="text-label-sm font-label-sm font-bold uppercase tracking-wide text-on-surface">Explainable Risk Drivers (Why is this at risk?)</h4>
</div>
<div class="space-y-2 text-body-sm font-body-sm">
<div class="flex items-start space-x-2">
<span class="material-symbols-outlined text-error text-base shrink-0 mt-0.5">trending_up</span>
<div>
<span class="font-semibold text-on-surface text-xs">+18% sustained demand surge:</span>
<p class="text-[11px] text-on-surface-variant leading-tight">Extreme sub-zero (-18°C) thermal bladders and auxiliary generator heaters operating continuously.</p>
</div>
</div>
<div class="flex items-start space-x-2">
<span class="material-symbols-outlined text-error text-base shrink-0 mt-0.5">timer_off</span>
<div>
<span class="font-semibold text-on-surface text-xs">Runway drops below 5-day safety floor in 1.1 days:</span>
<p class="text-[11px] text-on-surface-variant leading-tight">Without prompt dispatch initiation, safety margin will breach by 07 Oct 16:00 IST.</p>
</div>
</div>
<div class="flex items-start space-x-2">
<span class="material-symbols-outlined text-[#C49A45] text-base shrink-0 mt-0.5">ac_unit</span>
<div>
<span class="font-semibold text-on-surface text-xs">Transit corridor R-204 blizzard window:</span>
<p class="text-[11px] text-on-surface-variant leading-tight">Meteorological window closes in T-48h. Post-closure delays convoy access by 72-96 hours.</p>
</div>
</div>
</div>
</div>
<!-- DOSSIER 3. Inventory Depletion & Replenishment Projection Chart -->
<div class="border border-outline-variant rounded p-space-sm bg-surface-container-lowest">
<div class="flex items-center justify-between pb-1.5 border-b border-outline-variant mb-2">
<div class="flex items-center space-x-1.5">
<span class="material-symbols-outlined text-primary text-base">show_chart</span>
<h4 class="text-label-sm font-label-sm font-bold uppercase tracking-wide text-on-surface">Depletion &amp; Replenishment Projection</h4>
</div>
<span class="text-[10px] font-mono text-outline">HORIZON: 14 DAYS</span>
</div>
<!-- Projection Visual (SVG Line Chart with Reference Lines) -->
<div class="w-full bg-surface-container-low rounded p-2 border border-outline-variant">
<svg class="w-full h-auto select-none" viewbox="0 0 420 170" xmlns="http://www.w3.org/2000/svg">
<!-- Background Grid -->
<line stroke="#E5E3D9" stroke-width="1" x1="40" x2="400" y1="20" y2="20"></line>
<line stroke="#E5E3D9" stroke-width="1" x1="40" x2="400" y1="55" y2="55"></line>
<line stroke="#E5E3D9" stroke-width="1" x1="40" x2="400" y1="90" y2="90"></line>
<line stroke="#E5E3D9" stroke-width="1" x1="40" x2="400" y1="125" y2="125"></line>
<line stroke="#737873" stroke-width="1.5" x1="40" x2="400" y1="150" y2="150"></line>
<!-- Y-Axis Labels -->
<text fill="#737873" font-family="IBM Plex Sans" font-size="9" text-anchor="end" x="34" y="24">6k L</text>
<text fill="#737873" font-family="IBM Plex Sans" font-size="9" text-anchor="end" x="34" y="59">4.2k</text>
<text fill="#516446" font-family="IBM Plex Sans" font-size="9" font-weight="bold" text-anchor="end" x="34" y="94">2k (SF)</text>
<text fill="#BA1A1A" font-family="IBM Plex Sans" font-size="9" text-anchor="end" x="34" y="153">0 L</text>
<!-- Safety Floor (2,000 L) Dashed Line -->
<line stroke="#516446" stroke-dasharray="4,4" stroke-width="1.5" x1="40" x2="400" y1="90" y2="90"></line>
<text fill="#516446" font-family="IBM Plex Sans" font-size="9" font-weight="bold" text-anchor="end" x="395" y="86">Safety Floor (2,000 L)</text>
<!-- X-Axis Milestones -->
<text fill="#737873" font-family="IBM Plex Sans" font-size="9" x="50" y="162">Today</text>
<text fill="#737873" font-family="IBM Plex Sans" font-size="9" x="140" y="162">07 Oct</text>
<text fill="#516446" font-family="IBM Plex Sans" font-size="9" font-weight="bold" x="210" y="162">09 Oct (Resupply)</text>
<text fill="#BA1A1A" font-family="IBM Plex Sans" font-size="9" font-weight="bold" x="290" y="162">11 Oct (Stockout)</text>
<text fill="#737873" font-family="IBM Plex Sans" font-size="9" x="380" y="162">16 Oct</text>
<!-- Trajectory A: No Action (Steep red decline towards zero) -->
<path d="M 50 55 L 140 85 L 210 110 L 290 150" fill="none" stroke="#BA1A1A" stroke-dasharray="2,2" stroke-width="2"></path>
<circle cx="290" cy="150" fill="#BA1A1A" r="4"></circle>
<text fill="#BA1A1A" font-family="IBM Plex Sans" font-size="8.5" font-weight="bold" x="295" y="142">Zero Stock 11 Oct 04:00</text>
<!-- Trajectory B: Resupply Dispatch (+2,500 L on 09 Oct) -->
<path d="M 50 55 L 140 85 L 210 110 L 212 32 L 290 58 L 380 95" fill="none" stroke="#17251C" stroke-width="2.5"></path>
<!-- Arrival Marker on 09 Oct -->
<line stroke="#516446" stroke-dasharray="3,3" stroke-width="1" x1="210" x2="210" y1="20" y2="150"></line>
<circle cx="212" cy="32" fill="#17251C" r="4"></circle>
<rect fill="#17251C" height="18" rx="2" width="130" x="218" y="24"></rect>
<text fill="#ffffff" font-family="IBM Plex Sans" font-size="8.5" font-weight="bold" x="222" y="36">+2,500 L Arrival (Recovers to 5,420 L)</text>
</svg>
</div>
<div class="flex items-center justify-between text-[10px] text-on-surface-variant mt-1.5 px-1 font-mono">
<span class="flex items-center"><span class="w-3 h-0.5 bg-error inline-block mr-1"></span> Unmitigated burn trajectory</span>
<span class="flex items-center"><span class="w-3 h-0.5 bg-primary inline-block mr-1"></span> Projected trajectory with 2,500 L resupply</span>
</div>
</div>
<!-- DOSSIER 4. Explainable Replenishment Calculation -->
<div class="border border-outline-variant rounded p-space-sm bg-surface-container-low">
<div class="flex items-center justify-between pb-1.5 border-b border-outline-variant mb-2">
<div class="flex items-center space-x-1.5">
<span class="material-symbols-outlined text-primary text-base">calculate</span>
<h4 class="text-label-sm font-label-sm font-bold uppercase tracking-wide text-on-surface">Explainable Replenishment Calculation</h4>
</div>
<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container">
                    94% CONFIDENCE
                  </span>
</div>
<div class="bg-surface-container-lowest p-2 rounded border border-outline-variant text-label-xs font-mono space-y-1">
<div class="flex justify-between text-on-surface">
<span>Projected Demand (Next 14 Days):</span>
<span class="font-bold tabular-nums">6,100 L</span>
</div>
<div class="flex justify-between text-on-surface">
<span>+ Required Safety Reserve Floor:</span>
<span class="font-bold tabular-nums">+ 2,000 L</span>
</div>
<div class="flex justify-between text-on-surface-variant">
<span>- Current On-Hand Available:</span>
<span class="tabular-nums">- 4,200 L</span>
</div>
<div class="flex justify-between text-on-surface-variant">
<span>- Net Inbound Convoy Allocation:</span>
<span class="tabular-nums">- 1,200 L</span>
</div>
<div class="border-t border-outline-variant pt-1 mt-1 flex justify-between text-xs font-bold text-primary">
<span class="uppercase">Prescriptive Dispatch Requirement:</span>
<span class="tabular-nums text-sm">2,500 L POL</span>
</div>
</div>
</div>
<!-- DOSSIER 5. Source, Route & Inbound Context -->
<div class="border border-outline-variant rounded p-space-sm bg-surface-container-lowest space-y-2">
<div class="flex items-center space-x-1.5 pb-1 border-b border-outline-variant">
<span class="material-symbols-outlined text-primary text-base">route</span>
<h4 class="text-label-sm font-label-sm font-bold uppercase tracking-wide text-on-surface">Source &amp; Route Feasibility</h4>
</div>
<div class="grid grid-cols-2 gap-2 text-label-xs font-label-xs">
<div class="p-1.5 rounded bg-surface-container-low border border-outline-variant/60">
<span class="text-on-surface-variant block text-[10px]">SUGGESTED DISPATCH DEPOT</span>
<span class="font-bold text-on-surface text-xs block mt-0.5">Central Supply Depot Leh (Base 01)</span>
<span class="text-secondary font-mono text-[10px]">Avail Capacity: 84,000 L POL</span>
</div>
<div class="p-1.5 rounded bg-surface-container-low border border-outline-variant/60">
<span class="text-on-surface-variant block text-[10px]">TRANSIT CORRIDOR</span>
<span class="font-bold text-on-surface text-xs block mt-0.5">Route R-204 (1.5 Days)</span>
<span class="text-[#7A5B18] font-mono text-[10px]">Moderate Pass Risk // Alt: Route B</span>
</div>
</div>
<!-- Inbound Convoy Note -->
<div class="p-2 rounded bg-surface-container border border-outline-variant flex items-center justify-between text-label-xs font-label-xs">
<div class="flex items-center space-x-2">
<span class="material-symbols-outlined icon-sm text-secondary">local_shipping</span>
<div>
<span class="font-bold text-on-surface">Convoy SH-2048:</span>
<span class="text-on-surface-variant">1,200 L POL (ETA 09 Oct 18:40 IST)</span>
</div>
</div>
<span class="text-[10px] bg-secondary-fixed text-primary px-1.5 py-0.5 rounded font-bold uppercase">
                    In Transit
                  </span>
</div>
</div>
<!-- DOSSIER 6. Human-in-the-Loop Decision & Action Triggers -->
<div class="pt-2 border-t border-outline-variant flex flex-col space-y-2">
<div class="flex items-center justify-between text-label-xs font-label-xs">
<div class="flex items-center space-x-1.5">
<span class="w-2 h-2 rounded-full bg-[#C49A45] inline-block"></span>
<span class="font-bold text-on-surface uppercase">Suggested // Awaiting Authorization</span>
</div>
<span class="text-outline font-mono text-[10px]">AUTH-ROLE: LOG-DIR-HQ</span>
</div>
<!-- Primary and Secondary Actions -->
<div class="flex flex-col sm:flex-row items-center gap-2">
<button class="w-full sm:flex-1 py-2 px-space-sm bg-primary text-on-primary hover:bg-secondary rounded font-label-sm text-label-sm font-semibold tracking-wider flex items-center justify-center space-x-2 transition-colors cursor-pointer border border-primary" type="button">
<span class="material-symbols-outlined icon-sm">verified</span>
<span>Approve Replenishment Protocol</span>
</button>
<button class="w-full sm:w-auto py-2 px-3 bg-surface-container border border-outline-variant hover:bg-surface-container-high rounded text-label-sm font-label-sm text-on-surface font-medium transition-colors" type="button">
                    Modify Qty
                  </button>
<button class="w-full sm:w-auto py-2 px-3 bg-surface-container border border-outline-variant hover:bg-surface-container-high rounded text-label-sm font-label-sm text-on-surface font-medium transition-colors" type="button">
                    Simulate
                  </button>
</div>
<!-- MIL-STD Audit Stamp -->
<div class="flex items-center justify-between pt-1 text-[10px] font-mono text-outline">
<span>AUDIT TRAIL: MIL-STD-188F TELEMETRY VERIFIED</span>
<span>HASH: #9A24-F001-ALPHA</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>`;
