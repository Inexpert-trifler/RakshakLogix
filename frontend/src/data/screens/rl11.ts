// Screen: RL-11 — Inventory Overview
// Route: /inventory
export const rl11Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto pb-8 min-h-screen">
<div class="px-6 py-4 space-y-4 max-w-[1720px] mx-auto">
<!-- 1. CRITICAL OPERATIONAL REPLENISHMENT ALERT BANNER -->
<section class="bg-error-container border-l-4 border-error p-3 rounded flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-on-error-container">
<div class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-error text-[22px] shrink-0 mt-0.5">crisis_alert</span>
<div>
<div class="flex items-center gap-2">
<span class="text-label-xs font-label-xs font-bold uppercase tracking-wider bg-error text-on-error px-1.5 py-0.5 rounded">CRITICAL ALERT</span>
<span class="text-label-sm font-label-sm font-semibold">POL Arctic Diesel (Class III) at Forward Post Alpha (LOC-0042)</span>
</div>
<p class="text-body-sm font-body-sm mt-0.5">
              Predicted to breach mandatory safety stock threshold in <strong class="underline decoration-error font-bold">6 days</strong> (Depletion ETA: 11 Oct 2026). Recommended emergency dispatch: <strong class="font-bold">2,500 L</strong>. Neural Model Confidence: <strong class="font-bold">91%</strong>.
            </p>
</div>
</div>
<div class="flex items-center gap-2 shrink-0 self-end md:self-auto">
<button class="px-3 py-1 bg-surface-container-lowest text-on-surface border border-outline-variant hover:bg-surface text-label-xs font-label-xs font-bold uppercase rounded transition-colors flex items-center gap-1">
<span>Review Risk Dossier</span>
<span class="material-symbols-outlined text-[13px]">arrow_forward</span>
</button>
<button class="px-3 py-1 bg-primary text-on-primary hover:bg-primary-container text-label-xs font-label-xs font-bold uppercase rounded transition-colors">
            Simulate Replenishment
          </button>
</div>
</section>
<!-- 2. HIGH-DENSITY OPERATIONAL METRIC RIBBON (5 Blocks) -->
<section class="grid grid-cols-2 md:grid-cols-5 gap-3">
<!-- Total Stock -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded">
<div class="flex items-center justify-between text-on-surface-variant text-[11px] uppercase font-semibold">
<span>Total Stock Tracked</span>
<span class="material-symbols-outlined text-[15px]">inventory</span>
</div>
<div class="mt-1 flex items-baseline gap-1.5">
<span class="text-headline-lg font-headline-lg font-bold text-on-surface">84,620</span>
<span class="text-body-sm font-body-sm text-outline">Units</span>
</div>
<div class="mt-1 text-[11px] text-on-surface-variant truncate">
            Across 42 Northern Sector Formations
          </div>
</div>
<!-- Healthy -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded border-t-2 border-t-secondary">
<div class="flex items-center justify-between text-on-surface-variant text-[11px] uppercase font-semibold">
<span>Healthy Buffer</span>
<span class="material-symbols-outlined text-[15px] text-secondary">check_circle</span>
</div>
<div class="mt-1 flex items-baseline gap-1.5">
<span class="text-headline-lg font-headline-lg font-bold text-secondary">72%</span>
<span class="text-body-sm font-body-sm text-outline">60,926 Units</span>
</div>
<div class="mt-1 text-[11px] text-secondary truncate">
            Within nominal operating buffer
          </div>
</div>
<!-- Low Stock -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded border-t-2 border-t-[#C49A45]">
<div class="flex items-center justify-between text-on-surface-variant text-[11px] uppercase font-semibold">
<span>Low Stock</span>
<span class="material-symbols-outlined text-[15px] text-[#C49A45]">warning</span>
</div>
<div class="mt-1 flex items-baseline gap-1.5">
<span class="text-headline-lg font-headline-lg font-bold text-on-surface">14</span>
<span class="text-body-sm font-body-sm text-[#C49A45]">SKUs</span>
</div>
<div class="mt-1 text-[11px] text-on-surface-variant truncate">
            Approaching safety reserve floor
          </div>
</div>
<!-- Critical -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded border-t-2 border-t-error">
<div class="flex items-center justify-between text-on-surface-variant text-[11px] uppercase font-semibold">
<span>Critical Reserve</span>
<span class="material-symbols-outlined text-[15px] text-error">fmd_bad</span>
</div>
<div class="mt-1 flex items-baseline gap-1.5">
<span class="text-headline-lg font-headline-lg font-bold text-error">5</span>
<span class="text-body-sm font-body-sm text-error">Items</span>
</div>
<div class="mt-1 text-[11px] text-error font-medium truncate">
            Immediate dispatch required
          </div>
</div>
<!-- Predicted Shortages -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded border-t-2 border-t-primary-container">
<div class="flex items-center justify-between text-on-surface-variant text-[11px] uppercase font-semibold">
<span>Predicted Shortages</span>
<span class="material-symbols-outlined text-[15px] text-primary-container">auto_graph</span>
</div>
<div class="mt-1 flex items-baseline gap-1.5">
<span class="text-headline-lg font-headline-lg font-bold text-on-surface">8</span>
<span class="text-body-sm font-body-sm text-outline">Deficits</span>
</div>
<div class="mt-1 text-[11px] text-on-surface-variant truncate">
            14-Day LSTM predictive horizon
          </div>
</div>
</section>
<!-- 3. INVENTORY HEALTH & SAFETY COMPLIANCE GAUGES -->
<section class="bg-surface-container-lowest border border-outline-variant p-3.5 rounded grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- Distribution split bar -->
<div>
<div class="flex items-center justify-between text-[11px] font-semibold uppercase mb-1.5">
<span class="text-on-surface">Overall Inventory Health Distribution</span>
<span class="font-mono text-on-surface-variant">N = 84,620 Units</span>
</div>
<div class="h-3 w-full bg-surface-container flex rounded overflow-hidden">
<div class="bg-[#596B48] h-full" style="width: 72%" title="Healthy: 72%"></div>
<div class="bg-[#A49A78] h-full" style="width: 18%" title="Watch: 18%"></div>
<div class="bg-[#C49A45] h-full" style="width: 7%" title="Low: 7%"></div>
<div class="bg-[#ba1a1a] h-full" style="width: 3%" title="Critical: 3%"></div>
</div>
<div class="flex items-center justify-between text-[10px] font-mono mt-1 text-on-surface-variant">
<span class="flex items-center gap-1"><span class="w-2 h-2 rounded-sm bg-[#596B48]"></span> Healthy 72%</span>
<span class="flex items-center gap-1"><span class="w-2 h-2 rounded-sm bg-[#A49A78]"></span> Watch 18%</span>
<span class="flex items-center gap-1"><span class="w-2 h-2 rounded-sm bg-[#C49A45]"></span> Low 7%</span>
<span class="flex items-center gap-1"><span class="w-2 h-2 rounded-sm bg-[#ba1a1a]"></span> Critical 3%</span>
</div>
</div>
<!-- Safety Stock Compliance -->
<div>
<div class="flex items-center justify-between text-[11px] font-semibold uppercase mb-1.5">
<span class="text-on-surface">Safety Stock Compliance Standard</span>
<span class="font-mono text-on-surface-variant">WAR RESERVES OP-PLAN 2026</span>
</div>
<div class="h-3 w-full bg-surface-container flex rounded overflow-hidden">
<div class="bg-[#3F5135] h-full" style="width: 68%" title="Above Target: 68%"></div>
<div class="bg-[#A49A78] h-full" style="width: 21%" title="Near Threshold: 21%"></div>
<div class="bg-[#ba1a1a] h-full" style="width: 11%" title="Below Threshold: 11%"></div>
</div>
<div class="flex items-center justify-between text-[10px] font-mono mt-1 text-on-surface-variant">
<span class="flex items-center gap-1"><span class="w-2 h-2 rounded-sm bg-[#3F5135]"></span> Above Target 68%</span>
<span class="flex items-center gap-1"><span class="w-2 h-2 rounded-sm bg-[#A49A78]"></span> Near Threshold 21%</span>
<span class="flex items-center gap-1"><span class="w-2 h-2 rounded-sm bg-[#ba1a1a]"></span> Below Threshold 11%</span>
</div>
</div>
</section>
<!-- ===================================================================== -->
<!-- MAIN SPLIT WORKSPACE: REGISTRY (~68%) + INTELLIGENCE RAIL (~32%)    -->
<!-- ===================================================================== -->
<div class="grid grid-cols-1 xl:grid-cols-12 gap-4">
<!-- LEFT/CENTER COLUMN: Master Inventory Registry (8 Cols ~68%) -->
<div class="xl:col-span-8 space-y-3">
<!-- Filters & Quick Chips Bar -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded space-y-2.5">
<!-- Quick Category Status Chips -->
<div class="flex flex-wrap items-center gap-1.5">
<span class="text-[11px] font-semibold uppercase text-outline mr-1">Views:</span>
<button class="px-2.5 py-1 text-label-xs font-label-xs bg-primary text-on-primary rounded font-bold uppercase transition-colors">
                All (24)
              </button>
<button class="px-2.5 py-1 text-label-xs font-label-xs bg-error-container text-on-error-container border border-error/30 hover:border-error rounded font-bold uppercase transition-colors flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-error"></span>
                Critical (5)
              </button>
<button class="px-2.5 py-1 text-label-xs font-label-xs bg-[#C49A45]/15 text-[#7A5B18] border border-[#C49A45]/40 hover:border-[#C49A45] rounded font-bold uppercase transition-colors">
                Low Stock (14)
              </button>
<button class="px-2.5 py-1 text-label-xs font-label-xs bg-surface-container hover:bg-surface-container-high text-on-surface border border-outline-variant rounded font-semibold uppercase transition-colors">
                Below Safety Stock (8)
              </button>
<button class="px-2.5 py-1 text-label-xs font-label-xs bg-surface-container hover:bg-surface-container-high text-on-surface border border-outline-variant rounded font-semibold uppercase transition-colors">
                Predicted Shortage (8)
              </button>
<button class="px-2.5 py-1 text-label-xs font-label-xs bg-surface-container hover:bg-surface-container-high text-on-surface border border-outline-variant rounded font-semibold uppercase transition-colors">
                High Consumption Surge (4)
              </button>
</div>
<!-- Detailed Search and Sub-Filters -->
<div class="pt-2 border-t border-outline-variant/40 flex flex-wrap items-center justify-between gap-2">
<div class="flex-1 min-w-[280px] relative">
<span class="material-symbols-outlined absolute left-2.5 top-2 text-outline text-[16px]">search</span>
<input class="w-full h-8 pl-8 pr-3 text-body-sm font-body-sm bg-surface border border-outline-variant rounded focus:border-primary focus:ring-0 text-on-surface placeholder:text-outline/70" placeholder="Search by supply item, SKU (e.g. FUEL-001), formation or category..." type="text"/>
</div>
<div class="flex items-center gap-2">
<!-- Location Filter -->
<select class="h-8 px-2 text-[11px] font-mono bg-surface border border-outline-variant rounded text-on-surface focus:border-primary">
<option>LOC: Sector IV-B (Leh)</option>
<option>LOC: Forward Post Alpha</option>
<option>LOC: Central Depot Leh</option>
<option>LOC: Forward Post Charlie</option>
</select>
<!-- Category Filter -->
<select class="h-8 px-2 text-[11px] font-mono bg-surface border border-outline-variant rounded text-on-surface focus:border-primary">
<option>All Classes (I, III, V, VIII)</option>
<option>Class III: POL (Petroleum, Oil, Lubes)</option>
<option>Class I: Subsistence / Rations</option>
<option>Class V: Munitions</option>
<option>Class VIII: Medical</option>
</select>
<!-- Sort -->
<select class="h-8 px-2 text-[11px] font-mono bg-surface border border-outline-variant rounded text-on-surface focus:border-primary">
<option>Sort: Risk Highest First</option>
<option>Sort: Days of Supply (Asc)</option>
<option>Sort: Burn Rate (Desc)</option>
</select>
<div class="h-5 w-px bg-outline-variant"></div>
<button class="flex items-center gap-1 text-[11px] font-mono text-outline hover:text-on-surface" title="Synchronize telemetry">
<span class="material-symbols-outlined text-[15px]">sync</span>
<span class="hidden sm:inline">14:32:15 IST</span>
</button>
</div>
</div>
</div>
<!-- Master Inventory Table (utilitarian, high-density) -->
<div class="bg-surface-container-lowest border border-outline-variant rounded overflow-hidden">
<div class="overflow-x-auto custom-scroll">
<table class="w-full text-left border-collapse text-body-sm">
<thead>
<tr class="bg-surface-container-high border-b border-outline-variant text-[10px] font-mono uppercase tracking-wider text-on-surface">
<th class="py-2 px-3 w-8 text-center"><input class="rounded border-outline-variant text-primary focus:ring-0" type="checkbox"/></th>
<th class="py-2 px-2">Supply Item &amp; Code</th>
<th class="py-2 px-2">Class</th>
<th class="py-2 px-2">Storage Node</th>
<th class="py-2 px-2 text-right">Available Stock</th>
<th class="py-2 px-2 text-right">Daily Burn</th>
<th class="py-2 px-3 text-center">Runway (Days)</th>
<th class="py-2 px-2 text-right">Buffer Floor</th>
<th class="py-2 px-2 text-center">Trend (14D)</th>
<th class="py-2 px-2 text-center">Risk Level</th>
<th class="py-2 px-2 text-center">Status</th>
<th class="py-2 px-3 text-right">Inspect</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/50 font-mono text-[11px]">
<!-- Row 1: Diesel at Forward Post Alpha (CRITICAL) -->
<tr class="hover:bg-error-container/20 transition-colors bg-error-container/10">
<td class="py-2.5 px-3 text-center"><input checked="" class="rounded border-outline-variant text-primary focus:ring-0" type="checkbox"/></td>
<td class="py-2.5 px-2">
<div class="font-sans font-semibold text-on-surface">POL Arctic Diesel</div>
<div class="text-[10px] text-outline">SKU: FUEL-001 // BATCH-67B</div>
</td>
<td class="py-2.5 px-2">
<span class="px-1.5 py-0.5 bg-surface-container-high rounded text-[10px] text-on-surface">Class III</span>
</td>
<td class="py-2.5 px-2">
<div class="font-sans">Forward Post Alpha</div>
<div class="text-[10px] text-outline">LOC-0042 // SECTOR IV-B</div>
</td>
<td class="py-2.5 px-2 text-right">
<div class="font-bold text-error">4,200 L</div>
<div class="text-[9px] text-outline">Cap: 20,000 L</div>
</td>
<td class="py-2.5 px-2 text-right text-error font-medium">
                      680 L/d
                      <span class="text-[9px] block text-error">+32% Surge</span>
</td>
<td class="py-2.5 px-3 text-center">
<div class="inline-flex flex-col items-center">
<span class="text-error font-bold">6.1 Days</span>
<div class="w-14 h-1.5 bg-surface-container rounded overflow-hidden mt-0.5">
<div class="bg-error h-full" style="width: 25%"></div>
</div>
</div>
</td>
<td class="py-2.5 px-2 text-right text-outline">2,000 L</td>
<td class="py-2.5 px-2 text-center text-error font-semibold">
                      ↑ 24% Spike
                    </td>
<td class="py-2.5 px-2 text-center">
<span class="px-1.5 py-0.5 bg-error text-on-error rounded text-[9px] font-bold">HIGH RISK</span>
</td>
<td class="py-2.5 px-2 text-center">
<span class="px-1.5 py-0.5 border border-error text-error rounded text-[9px] font-bold">CRITICAL</span>
</td>
<td class="py-2.5 px-3 text-right font-sans">
<a class="text-secondary hover:text-primary font-bold hover:underline" href="#">RL-12 →</a>
</td>
</tr>
<!-- Row 2: Trauma Blood Plasma at Charlie (WATCH / AMBER) -->
<tr class="hover:bg-surface-container/60 transition-colors">
<td class="py-2.5 px-3 text-center"><input class="rounded border-outline-variant text-primary focus:ring-0" type="checkbox"/></td>
<td class="py-2.5 px-2">
<div class="font-sans font-semibold text-on-surface">Trauma Plasma &amp; IV</div>
<div class="text-[10px] text-outline">SKU: MED-804 // COLD-CHAIN</div>
</td>
<td class="py-2.5 px-2">
<span class="px-1.5 py-0.5 bg-surface-container-high rounded text-[10px] text-on-surface">Class VIII</span>
</td>
<td class="py-2.5 px-2">
<div class="font-sans">Forward Post Charlie</div>
<div class="text-[10px] text-outline">LOC-0078 // SIANCHEN GL</div>
</td>
<td class="py-2.5 px-2 text-right">
<div class="font-bold text-[#7A5B18]">180 Kits</div>
<div class="text-[9px] text-outline">Cap: 1,000 Kits</div>
</td>
<td class="py-2.5 px-2 text-right text-on-surface">
                      22 Kits/d
                      <span class="text-[9px] block text-[#C49A45]">+15% Cold Inc</span>
</td>
<td class="py-2.5 px-3 text-center">
<div class="inline-flex flex-col items-center">
<span class="text-[#7A5B18] font-bold">8.1 Days</span>
<div class="w-14 h-1.5 bg-surface-container rounded overflow-hidden mt-0.5">
<div class="bg-[#C49A45] h-full" style="width: 38%"></div>
</div>
</div>
</td>
<td class="py-2.5 px-2 text-right text-outline">150 Kits</td>
<td class="py-2.5 px-2 text-center text-[#7A5B18]">
                      ↑ 18% Surge
                    </td>
<td class="py-2.5 px-2 text-center">
<span class="px-1.5 py-0.5 bg-[#C49A45]/20 text-[#7A5B18] rounded text-[9px] font-bold">ATTENTION</span>
</td>
<td class="py-2.5 px-2 text-center">
<span class="px-1.5 py-0.5 border border-[#C49A45] text-[#7A5B18] rounded text-[9px] font-bold">WATCH</span>
</td>
<td class="py-2.5 px-3 text-right font-sans">
<a class="text-secondary hover:text-primary font-bold hover:underline" href="#">RL-12 →</a>
</td>
</tr>
<!-- Row 3: Composite Rations MRE at Forward Post Alpha (HEALTHY) -->
<tr class="hover:bg-surface-container/60 transition-colors">
<td class="py-2.5 px-3 text-center"><input class="rounded border-outline-variant text-primary focus:ring-0" type="checkbox"/></td>
<td class="py-2.5 px-2">
<div class="font-sans font-semibold text-on-surface">Composite Rations MRE</div>
<div class="text-[10px] text-outline">SKU: RAT-102 // VEG/NON-VEG</div>
</td>
<td class="py-2.5 px-2">
<span class="px-1.5 py-0.5 bg-surface-container-high rounded text-[10px] text-on-surface">Class I</span>
</td>
<td class="py-2.5 px-2">
<div class="font-sans">Forward Post Alpha</div>
<div class="text-[10px] text-outline">LOC-0042 // SECTOR IV-B</div>
</td>
<td class="py-2.5 px-2 text-right">
<div class="font-bold text-on-surface">8,400 Pks</div>
<div class="text-[9px] text-outline">Cap: 15,000 Pks</div>
</td>
<td class="py-2.5 px-2 text-right text-on-surface">
                      620 Pks/d
                      <span class="text-[9px] block text-outline">Nominal</span>
</td>
<td class="py-2.5 px-3 text-center">
<div class="inline-flex flex-col items-center">
<span class="text-secondary font-bold">13.5 Days</span>
<div class="w-14 h-1.5 bg-surface-container rounded overflow-hidden mt-0.5">
<div class="bg-secondary h-full" style="width: 65%"></div>
</div>
</div>
</td>
<td class="py-2.5 px-2 text-right text-outline">3,000 Pks</td>
<td class="py-2.5 px-2 text-center text-outline">
                      → Stable
                    </td>
<td class="py-2.5 px-2 text-center">
<span class="px-1.5 py-0.5 bg-surface-container-high text-on-surface-variant rounded text-[9px] font-bold">NOMINAL</span>
</td>
<td class="py-2.5 px-2 text-center">
<span class="px-1.5 py-0.5 border border-secondary text-secondary rounded text-[9px] font-bold">HEALTHY</span>
</td>
<td class="py-2.5 px-3 text-right font-sans">
<a class="text-secondary hover:text-primary font-bold hover:underline" href="#">RL-12 →</a>
</td>
</tr>
<!-- Row 4: 7.62mm Munitions at Foxtrot Outpost (HEALTHY) -->
<tr class="hover:bg-surface-container/60 transition-colors">
<td class="py-2.5 px-3 text-center"><input class="rounded border-outline-variant text-primary focus:ring-0" type="checkbox"/></td>
<td class="py-2.5 px-2">
<div class="font-sans font-semibold text-on-surface">7.62mm Munitions (Link)</div>
<div class="text-[10px] text-outline">SKU: AMM-501 // ARMOURED CRATE</div>
</td>
<td class="py-2.5 px-2">
<span class="px-1.5 py-0.5 bg-surface-container-high rounded text-[10px] text-on-surface">Class V</span>
</td>
<td class="py-2.5 px-2">
<div class="font-sans">Foxtrot Outpost</div>
<div class="text-[10px] text-outline">LOC-0055 // PASS-RIDGELINE</div>
</td>
<td class="py-2.5 px-2 text-right">
<div class="font-bold text-on-surface">24,500 Rds</div>
<div class="text-[9px] text-outline">Cap: 30,000 Rds</div>
</td>
<td class="py-2.5 px-2 text-right text-on-surface">
                      870 Rds/d
                      <span class="text-[9px] block text-outline">Baseline Patrol</span>
</td>
<td class="py-2.5 px-3 text-center">
<div class="inline-flex flex-col items-center">
<span class="text-secondary font-bold">28.1 Days</span>
<div class="w-14 h-1.5 bg-surface-container rounded overflow-hidden mt-0.5">
<div class="bg-secondary h-full" style="width: 90%"></div>
</div>
</div>
</td>
<td class="py-2.5 px-2 text-right text-outline">10,000 Rds</td>
<td class="py-2.5 px-2 text-center text-outline">
                      ↓ -4% Cons
                    </td>
<td class="py-2.5 px-2 text-center">
<span class="px-1.5 py-0.5 bg-surface-container-high text-on-surface-variant rounded text-[9px] font-bold">NOMINAL</span>
</td>
<td class="py-2.5 px-2 text-center">
<span class="px-1.5 py-0.5 border border-secondary text-secondary rounded text-[9px] font-bold">HEALTHY</span>
</td>
<td class="py-2.5 px-3 text-right font-sans">
<a class="text-secondary hover:text-primary font-bold hover:underline" href="#">RL-12 →</a>
</td>
</tr>
<!-- Row 5: Potable Heated Water at Central Depot Leh -->
<tr class="hover:bg-surface-container/60 transition-colors">
<td class="py-2.5 px-3 text-center"><input class="rounded border-outline-variant text-primary focus:ring-0" type="checkbox"/></td>
<td class="py-2.5 px-2">
<div class="font-sans font-semibold text-on-surface">Potable Insulated Water</div>
<div class="text-[10px] text-outline">SKU: WTR-012 // HEATED BLADDERS</div>
</td>
<td class="py-2.5 px-2">
<span class="px-1.5 py-0.5 bg-surface-container-high rounded text-[10px] text-on-surface">Class I</span>
</td>
<td class="py-2.5 px-2">
<div class="font-sans">Central Depot Leh</div>
<div class="text-[10px] text-outline">LOC-0001 // LOG-CORE</div>
</td>
<td class="py-2.5 px-2 text-right">
<div class="font-bold text-on-surface">36,000 L</div>
<div class="text-[9px] text-outline">Cap: 50,000 L</div>
</td>
<td class="py-2.5 px-2 text-right text-on-surface">
                      1,850 L/d
                      <span class="text-[9px] block text-outline">Bulk Dispense</span>
</td>
<td class="py-2.5 px-3 text-center">
<div class="inline-flex flex-col items-center">
<span class="text-secondary font-bold">19.4 Days</span>
<div class="w-14 h-1.5 bg-surface-container rounded overflow-hidden mt-0.5">
<div class="bg-secondary h-full" style="width: 78%"></div>
</div>
</div>
</td>
<td class="py-2.5 px-2 text-right text-outline">12,000 L</td>
<td class="py-2.5 px-2 text-center text-outline">
                      → Stable
                    </td>
<td class="py-2.5 px-2 text-center">
<span class="px-1.5 py-0.5 bg-surface-container-high text-on-surface-variant rounded text-[9px] font-bold">NOMINAL</span>
</td>
<td class="py-2.5 px-2 text-center">
<span class="px-1.5 py-0.5 border border-secondary text-secondary rounded text-[9px] font-bold">HEALTHY</span>
</td>
<td class="py-2.5 px-3 text-right font-sans">
<a class="text-secondary hover:text-primary font-bold hover:underline" href="#">RL-12 →</a>
</td>
</tr>
<!-- Row 6: High Altitude Lubricants (LOW STOCK) -->
<tr class="hover:bg-surface-container/60 transition-colors">
<td class="py-2.5 px-3 text-center"><input class="rounded border-outline-variant text-primary focus:ring-0" type="checkbox"/></td>
<td class="py-2.5 px-2">
<div class="font-sans font-semibold text-on-surface">Sub-Zero Synthetic Lube</div>
<div class="text-[10px] text-outline">SKU: LUB-903 // BARRELS 200L</div>
</td>
<td class="py-2.5 px-2">
<span class="px-1.5 py-0.5 bg-surface-container-high rounded text-[10px] text-on-surface">Class III</span>
</td>
<td class="py-2.5 px-2">
<div class="font-sans">Khardung Transit Node</div>
<div class="text-[10px] text-outline">LOC-0019 // PASS SUMMIT</div>
</td>
<td class="py-2.5 px-2 text-right">
<div class="font-bold text-[#7A5B18]">840 L</div>
<div class="text-[9px] text-outline">Cap: 4,000 L</div>
</td>
<td class="py-2.5 px-2 text-right text-on-surface">
                      85 L/d
                      <span class="text-[9px] block text-[#C49A45]">+19% Mechanical</span>
</td>
<td class="py-2.5 px-3 text-center">
<div class="inline-flex flex-col items-center">
<span class="text-[#7A5B18] font-bold">9.8 Days</span>
<div class="w-14 h-1.5 bg-surface-container rounded overflow-hidden mt-0.5">
<div class="bg-[#C49A45] h-full" style="width: 44%"></div>
</div>
</div>
</td>
<td class="py-2.5 px-2 text-right text-outline">600 L</td>
<td class="py-2.5 px-2 text-center text-[#7A5B18]">
                      ↑ 14% Spk
                    </td>
<td class="py-2.5 px-2 text-center">
<span class="px-1.5 py-0.5 bg-[#C49A45]/20 text-[#7A5B18] rounded text-[9px] font-bold">ATTENTION</span>
</td>
<td class="py-2.5 px-2 text-center">
<span class="px-1.5 py-0.5 border border-[#C49A45] text-[#7A5B18] rounded text-[9px] font-bold">LOW</span>
</td>
<td class="py-2.5 px-3 text-right font-sans">
<a class="text-secondary hover:text-primary font-bold hover:underline" href="#">RL-12 →</a>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Table Pagination & Operational Density Footer -->
<div class="py-2 px-3 bg-surface-container-high/40 border-t border-outline-variant flex items-center justify-between text-[11px] font-mono">
<div class="text-on-surface-variant">
                Showing 1-6 of 24 tracked strategic items • Selected: <strong>1</strong>
</div>
<div class="flex items-center gap-1">
<button class="px-2 py-0.5 bg-surface border border-outline-variant rounded disabled:opacity-50">Prev</button>
<span class="px-2 font-bold text-on-surface">Page 1 of 4</span>
<button class="px-2 py-0.5 bg-surface border border-outline-variant rounded hover:bg-surface-container">Next</button>
</div>
</div>
</div>
<!-- Replenishment Dispatch Action Queue Table -->
<div class="bg-surface-container-lowest border border-outline-variant p-3.5 rounded space-y-2">
<div class="flex items-center justify-between border-b border-outline-variant/40 pb-2">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[18px]">local_shipping</span>
<span class="text-label-sm font-label-sm font-semibold uppercase text-on-surface">Replenishment Action &amp; Resupply Dispatch Queue</span>
</div>
<a class="text-[11px] font-mono text-secondary hover:underline font-bold" href="#">Review All Replenishments →</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1 font-mono text-[11px]">
<!-- Item 1 -->
<div class="p-2 border border-outline-variant rounded bg-surface-container-low flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="font-bold text-on-surface font-sans">POL Diesel → Post Alpha</span>
<span class="px-1 py-0.2 bg-error text-on-error rounded text-[9px] font-bold">HIGH</span>
</div>
<div class="text-[10px] text-on-surface-variant mt-1">Req: <strong>2,500 L</strong> Arctic Fuel</div>
<div class="text-[10px] text-secondary font-semibold mt-0.5">Inbound Convoy SH-2048 (ETA 4h)</div>
</div>
<div class="mt-2 pt-1.5 border-t border-outline-variant/40 flex justify-between items-center text-[10px]">
<span>DEP: Leh Core</span>
<span class="text-secondary font-bold">En Route</span>
</div>
</div>
<!-- Item 2 -->
<div class="p-2 border border-outline-variant rounded bg-surface-container-low flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="font-bold text-on-surface font-sans">Rations MRE → Post Bravo</span>
<span class="px-1 py-0.2 bg-[#C49A45]/30 text-[#7A5B18] rounded text-[9px] font-bold">MED</span>
</div>
<div class="text-[10px] text-on-surface-variant mt-1">Req: <strong>1,800 Units</strong> Pack Rations</div>
<div class="text-[10px] text-outline mt-0.5">Planned Convoy SH-2052 (T-18h)</div>
</div>
<div class="mt-2 pt-1.5 border-t border-outline-variant/40 flex justify-between items-center text-[10px]">
<span>DEP: Khardung Node</span>
<span class="text-[#7A5B18] font-bold">Scheduled</span>
</div>
</div>
<!-- Item 3 -->
<div class="p-2 border border-outline-variant rounded bg-surface-container-low flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="font-bold text-on-surface font-sans">Blood Plasma → Post Charlie</span>
<span class="px-1 py-0.2 bg-error text-on-error rounded text-[9px] font-bold">HIGH</span>
</div>
<div class="text-[10px] text-on-surface-variant mt-1">Req: <strong>600 Units</strong> Cryo Plasma</div>
<div class="text-[10px] text-error font-semibold mt-0.5">Heli-Drop Sortie Queued (WX Watch)</div>
</div>
<div class="mt-2 pt-1.5 border-t border-outline-variant/40 flex justify-between items-center text-[10px]">
<span>DEP: Base Hospital Leh</span>
<span class="text-error font-bold">Heli-Sortie</span>
</div>
</div>
</div>
</div>
</div>
<!-- RIGHT INTELLIGENCE & CONTEXT COLUMN (4 Cols ~32%) -->
<div class="xl:col-span-4 space-y-3">
<!-- 1. PREDICTED SHORTAGES QUEUE (DECISION INTELLIGENCE) -->
<div class="bg-surface-container-lowest border border-outline-variant p-3.5 rounded space-y-3">
<div class="flex items-center justify-between border-b border-outline-variant/40 pb-2">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-error text-[18px]">psychology</span>
<span class="text-label-sm font-label-sm font-semibold uppercase text-on-surface">Predicted Shortages (LSTM Engine)</span>
</div>
<span class="text-[10px] font-mono bg-surface-container-high px-1.5 py-0.5 rounded text-on-surface-variant">T-14 DAYS</span>
</div>
<div class="space-y-2.5">
<!-- Card 1 -->
<div class="p-2.5 bg-error-container/15 border-l-2 border-l-error border border-outline-variant/50 rounded">
<div class="flex items-center justify-between text-[11px]">
<span class="font-sans font-bold text-on-surface">POL Arctic Diesel</span>
<span class="font-mono text-error font-bold">0 Stock in 6 Days</span>
</div>
<div class="text-[10px] font-mono text-on-surface-variant mt-0.5">Forward Post Alpha (LOC-0042)</div>
<div class="grid grid-cols-2 gap-2 mt-2 pt-1.5 border-t border-outline-variant/30 text-[10px] font-mono">
<div>Current: <strong class="text-on-surface">4,200 L</strong></div>
<div>Rec Resupply: <strong class="text-error">2,500 L</strong></div>
</div>
<div class="mt-2 flex items-center justify-between">
<span class="text-[10px] font-mono text-secondary font-semibold">91% LSTM Confidence</span>
<button class="px-2 py-0.5 text-[10px] font-mono bg-error text-on-error hover:bg-error/90 font-bold rounded">
                    Review Action →
                  </button>
</div>
</div>
<!-- Card 2 -->
<div class="p-2.5 bg-surface-container-low border-l-2 border-l-[#C49A45] border border-outline-variant/50 rounded">
<div class="flex items-center justify-between text-[11px]">
<span class="font-sans font-bold text-on-surface">Class VIII Trauma Kits</span>
<span class="font-mono text-[#7A5B18] font-bold">0 Stock in 11 Days</span>
</div>
<div class="text-[10px] font-mono text-on-surface-variant mt-0.5">Forward Post Charlie (LOC-0078)</div>
<div class="grid grid-cols-2 gap-2 mt-2 pt-1.5 border-t border-outline-variant/30 text-[10px] font-mono">
<div>Current: <strong class="text-on-surface">180 Units</strong></div>
<div>Rec Resupply: <strong class="text-[#7A5B18]">600 Units</strong></div>
</div>
<div class="mt-2 flex items-center justify-between">
<span class="text-[10px] font-mono text-secondary font-semibold">84% Confidence</span>
<button class="px-2 py-0.5 text-[10px] font-mono bg-surface-container border border-outline-variant hover:bg-surface-container-high font-bold rounded text-on-surface">
                    Review Action →
                  </button>
</div>
</div>
<!-- Card 3 -->
<div class="p-2.5 bg-surface-container-low border-l-2 border-l-[#A49A78] border border-outline-variant/50 rounded">
<div class="flex items-center justify-between text-[11px]">
<span class="font-sans font-bold text-on-surface">Winter Rations MRE</span>
<span class="font-mono text-on-surface-variant font-bold">Runway 8.5 Days</span>
</div>
<div class="text-[10px] font-mono text-on-surface-variant mt-0.5">Sector Bravo Transit Hub (LOC-0012)</div>
<div class="grid grid-cols-2 gap-2 mt-2 pt-1.5 border-t border-outline-variant/30 text-[10px] font-mono">
<div>Current: <strong class="text-on-surface">1,400 Pks</strong></div>
<div>Rec Resupply: <strong class="text-on-surface">2,000 Pks</strong></div>
</div>
<div class="mt-2 flex items-center justify-between">
<span class="text-[10px] font-mono text-secondary font-semibold">88% Confidence</span>
<button class="px-2 py-0.5 text-[10px] font-mono bg-surface-container border border-outline-variant hover:bg-surface-container-high font-bold rounded text-on-surface">
                    Review Action →
                  </button>
</div>
</div>
</div>
</div>
<!-- 2. INVENTORY DISTRIBUTION BY FORMATION -->
<div class="bg-surface-container-lowest border border-outline-variant p-3.5 rounded space-y-3">
<div class="flex items-center justify-between border-b border-outline-variant/40 pb-2">
<span class="text-label-sm font-label-sm font-semibold uppercase text-on-surface">Stock Distribution by Formation</span>
<div class="flex items-center text-[9px] font-mono border border-outline-variant rounded overflow-hidden">
<button class="px-1.5 py-0.5 bg-primary text-on-primary">Qty</button>
<button class="px-1.5 py-0.5 bg-surface text-on-surface hover:bg-surface-container">Risk</button>
</div>
</div>
<!-- Proportional horizontal bars -->
<div class="space-y-2 text-[11px] font-mono">
<!-- Leh -->
<div>
<div class="flex justify-between mb-0.5">
<span class="text-on-surface font-sans">Central Supply Depot Leh</span>
<span class="text-on-surface-variant">42% (35,540 u)</span>
</div>
<div class="h-2 w-full bg-surface-container rounded overflow-hidden">
<div class="bg-secondary h-full" style="width: 42%"></div>
</div>
</div>
<!-- Khardung -->
<div>
<div class="flex justify-between mb-0.5">
<span class="text-on-surface font-sans">Khardung Transit Node</span>
<span class="text-on-surface-variant">28% (23,690 u)</span>
</div>
<div class="h-2 w-full bg-surface-container rounded overflow-hidden">
<div class="bg-secondary h-full" style="width: 28%"></div>
</div>
</div>
<!-- Post Alpha -->
<div>
<div class="flex justify-between mb-0.5">
<span class="text-on-surface font-sans">Forward Post Alpha</span>
<span class="text-error font-bold">12% (10,150 u)</span>
</div>
<div class="h-2 w-full bg-surface-container rounded overflow-hidden">
<div class="bg-error h-full" style="width: 12%"></div>
</div>
</div>
<!-- Post Bravo -->
<div>
<div class="flex justify-between mb-0.5">
<span class="text-on-surface font-sans">Forward Post Bravo</span>
<span class="text-on-surface-variant">9% (7,615 u)</span>
</div>
<div class="h-2 w-full bg-surface-container rounded overflow-hidden">
<div class="bg-secondary-fixed-dim h-full" style="width: 9%"></div>
</div>
</div>
<!-- Post Charlie -->
<div>
<div class="flex justify-between mb-0.5">
<span class="text-on-surface font-sans">Forward Post Charlie</span>
<span class="text-[#7A5B18] font-bold">6% (5,077 u)</span>
</div>
<div class="h-2 w-full bg-surface-container rounded overflow-hidden">
<div class="bg-[#C49A45] h-full" style="width: 6%"></div>
</div>
</div>
<!-- Outposts -->
<div>
<div class="flex justify-between mb-0.5">
<span class="text-on-surface font-sans">Remote Patrol Outposts</span>
<span class="text-on-surface-variant">3% (2,548 u)</span>
</div>
<div class="h-2 w-full bg-surface-container rounded overflow-hidden">
<div class="bg-outline h-full" style="width: 3%"></div>
</div>
</div>
</div>
</div>
<!-- 3. CATEGORY ALLOCATION & CONSUMPTION PRESSURE -->
<div class="bg-surface-container-lowest border border-outline-variant p-3.5 rounded space-y-2.5">
<div class="flex items-center justify-between border-b border-outline-variant/40 pb-2">
<span class="text-label-sm font-label-sm font-semibold uppercase text-on-surface">Category Allocation</span>
<span class="text-[10px] font-mono text-outline">CLASS I - VIII</span>
</div>
<!-- Category split breakdown -->
<div class="grid grid-cols-2 gap-2 text-[10px] font-mono">
<div class="p-1.5 bg-surface-container rounded border border-outline-variant/30">
<div class="text-outline">Class III: Fuel</div>
<div class="text-label-md font-bold text-on-surface">38% <span class="text-[10px] font-normal text-outline">(32,150 L)</span></div>
</div>
<div class="p-1.5 bg-surface-container rounded border border-outline-variant/30">
<div class="text-outline">Class I: Subsistence</div>
<div class="text-label-md font-bold text-on-surface">26% <span class="text-[10px] font-normal text-outline">(22,000 u)</span></div>
</div>
<div class="p-1.5 bg-surface-container rounded border border-outline-variant/30">
<div class="text-outline">Class V: Munitions</div>
<div class="text-label-md font-bold text-on-surface">20% <span class="text-[10px] font-normal text-outline">(16,920 u)</span></div>
</div>
<div class="p-1.5 bg-surface-container rounded border border-outline-variant/30">
<div class="text-outline">Class VIII: Medical</div>
<div class="text-label-md font-bold text-on-surface">10% <span class="text-[10px] font-normal text-outline">(8,460 u)</span></div>
</div>
</div>
<!-- Winter Warning Callout -->
<div class="p-2 bg-surface-container-high border-l-2 border-l-[#C49A45] rounded text-[11px]">
<div class="font-bold text-on-surface flex items-center gap-1">
<span class="material-symbols-outlined text-[14px] text-[#C49A45]">ac_unit</span>
<span>High-Altitude Heating Surge Alert</span>
</div>
<p class="text-body-sm font-body-sm text-on-surface-variant mt-0.5 text-[11px] leading-tight">
                Fuel burn across glaciated posts is <strong class="font-bold text-on-surface">+23% above 30-day baseline</strong>. Winter pass resupply cutoff scheduled in <strong class="text-error font-bold">T-45 days</strong>.
              </p>
</div>
</div>
<!-- 4. COMPACT GEOSPATIAL SITUATION CONTEXT (RADAR THUMBNAIL) -->
<div class="bg-surface-container-lowest border border-outline-variant p-3.5 rounded space-y-2">
<div class="flex items-center justify-between border-b border-outline-variant/40 pb-2">
<span class="text-label-sm font-label-sm font-semibold uppercase text-on-surface">Forward Post Telemetry Context</span>
<span class="text-[10px] font-mono text-secondary">RADAR-SYNC 100%</span>
</div>
<!-- Topographic GIS radar mockup preview -->
<div class="h-32 bg-primary-container rounded border border-outline-variant/50 relative overflow-hidden flex items-center justify-center p-2">
<!-- Grid overlay pattern -->
<div class="absolute inset-0 opacity-15" style="background-image: radial-gradient(#d6e7d8 1px, transparent 1px); background-size: 16px 16px;"></div>
<!-- Sector rings -->
<div class="absolute w-24 h-24 rounded-full border border-secondary/40"></div>
<div class="absolute w-40 h-40 rounded-full border border-secondary/20"></div>
<!-- Nodes on Radar -->
<!-- Central Leh (Green) -->
<div class="absolute top-16 left-16 flex items-center gap-1">
<div class="w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-secondary/50"></div>
<span class="text-[9px] font-mono text-on-primary bg-primary-container/80 px-1 rounded">LEH CORE</span>
</div>
<!-- Post Charlie (Amber) -->
<div class="absolute top-6 right-20 flex items-center gap-1">
<div class="w-2.5 h-2.5 rounded-full bg-[#C49A45] ring-2 ring-[#C49A45]/50 animate-pulse"></div>
<span class="text-[9px] font-mono text-on-primary bg-primary-container/80 px-1 rounded">CHARLIE [WATCH]</span>
</div>
<!-- Post Alpha (Red Alert) -->
<div class="absolute bottom-6 right-12 flex items-center gap-1">
<div class="w-3 h-3 rounded-full bg-error ring-4 ring-error/40 animate-ping"></div>
<div class="w-2.5 h-2.5 rounded-full bg-error absolute"></div>
<span class="text-[9px] font-mono text-error font-bold bg-primary-container/90 px-1 rounded ml-3">ALPHA [DEFICIT]</span>
</div>
<div class="absolute bottom-1 left-2 text-[9px] font-mono text-on-primary-container">
                COORD: 34.1526° N, 77.5771° E
              </div>
</div>
<a class="w-full py-1.5 px-2 bg-surface hover:bg-surface-container border border-outline-variant rounded text-center text-label-xs font-label-xs font-semibold uppercase text-on-surface transition-colors flex items-center justify-center gap-1" href="#">
<span>Open Full GIS Command Center (RL-06)</span>
<span class="material-symbols-outlined text-[13px]">north_east</span>
</a>
</div>
</div>
</div>
</div>
</main>`;
