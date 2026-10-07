// Screen: RL-36 — Recommendation Details & Approval // REC-2048
// Route: /recommendations/REC-2048
export const rl36Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto pb-16 min-h-screen">
<div class="p-space-md lg:p-space-lg max-w-[1680px] mx-auto space-y-space-md">
<!-- ===================================================================== -->
<!-- SECTION 2: PAGE HEADER & DECISION LIFECYCLE STATUS BANNER -->
<!-- ===================================================================== -->
<div class="bg-surface-container-lowest border border-outline-variant p-space-md rounded-DEFAULT space-y-space-md">
<!-- Header Row -->
<div class="flex flex-col md:flex-row md:items-start justify-between gap-space-sm pb-space-sm border-b border-outline-variant">
<div>
<div class="flex flex-wrap items-center gap-2 mb-1">
<span class="font-mono text-label-xs bg-error/15 text-error px-2 py-0.5 rounded-DEFAULT border border-error/30 font-bold uppercase tracking-wider">
                CRITICAL PRIORITY
              </span>
<span class="font-mono text-label-xs bg-amber-100 text-amber-900 px-2 py-0.5 rounded-DEFAULT border border-amber-300 font-bold uppercase tracking-wider flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse"></span>
                PENDING HUMAN REVIEW
              </span>
<span class="font-mono text-label-xs text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-DEFAULT border border-outline-variant">
                TARGET NODE: LOC-0042 (FORWARD POST ALPHA)
              </span>
</div>
<h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              REC-2048 — Increase Fuel Replenishment (+2,500 L Class III POL)
            </h1>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Sector: Ladakh Sub-Sector North (SSN) · Inventory Risk Mitigation · Triggered by Predictive Model SIM-0084
            </p>
</div>
<!-- Quick Action Timestamp Ledger -->
<div class="text-right font-mono text-label-xs text-on-surface-variant shrink-0 bg-surface-container-low px-space-sm py-1.5 rounded-DEFAULT border border-outline-variant">
<div>GENERATED: <strong class="text-on-surface">14:32:09 IST</strong></div>
<div>VERIFICATION WINDOW: <strong class="text-amber-800">47 MIN REMAINING</strong></div>
</div>
</div>
<!-- Decision Lifecycle Stepper Strip -->
<div class="pt-1">
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
<!-- Step 1: Generated (Complete) -->
<div class="p-2 bg-surface-container rounded-DEFAULT border-l-4 border-secondary flex items-start gap-2">
<span class="material-symbols-outlined text-secondary text-[16px] mt-0.5" data-icon="check_circle">check_circle</span>
<div class="min-w-0">
<div class="font-label-xs text-label-xs uppercase text-on-surface-variant font-mono">STEP 01: SYSTEM</div>
<div class="font-label-sm text-label-sm text-on-surface font-semibold truncate">Generated</div>
<div class="font-mono text-label-xs text-on-surface-variant">SIM-0084 · 14:32 IST</div>
</div>
</div>
<!-- Step 2: Under Review (Active) -->
<div class="p-2 bg-secondary/15 rounded-DEFAULT border-l-4 border-primary-container flex items-start gap-2">
<span class="material-symbols-outlined text-primary-container text-[16px] mt-0.5" data-icon="edit_note">edit_note</span>
<div class="min-w-0">
<div class="font-label-xs text-label-xs uppercase text-primary-container font-mono font-bold">STEP 02: ACTIVE</div>
<div class="font-label-sm text-label-sm text-on-surface font-semibold truncate">Under Review</div>
<div class="font-mono text-label-xs text-on-surface">Lt. Col. B. Kumar</div>
</div>
</div>
<!-- Step 3: Modified (Staged) -->
<div class="p-2 bg-surface-container rounded-DEFAULT border-l-4 border-amber-600 flex items-start gap-2">
<span class="material-symbols-outlined text-amber-700 text-[16px] mt-0.5" data-icon="tune">tune</span>
<div class="min-w-0">
<div class="font-label-xs text-label-xs uppercase text-on-surface-variant font-mono">STEP 03: STAGED</div>
<div class="font-label-sm text-label-sm text-on-surface font-semibold truncate">Operator Override</div>
<div class="font-mono text-label-xs text-amber-900 font-bold">+500 L Buffer Added</div>
</div>
</div>
<!-- Step 4: Approved for Planning (Target) -->
<div class="p-2 bg-surface-container-low rounded-DEFAULT border-l-4 border-outline-variant flex items-start gap-2 opacity-75">
<span class="material-symbols-outlined text-outline text-[16px] mt-0.5" data-icon="pending">pending</span>
<div class="min-w-0">
<div class="font-label-xs text-label-xs uppercase text-on-surface-variant font-mono">STEP 04: PENDING</div>
<div class="font-label-sm text-label-sm text-on-surface font-semibold truncate">Planning Sign-off</div>
<div class="font-mono text-label-xs text-on-surface-variant">DISP-9921 Token Sign</div>
</div>
</div>
<!-- Step 5: Tracked in Queue -->
<div class="p-2 bg-surface-container-low rounded-DEFAULT border-l-4 border-outline-variant flex items-start gap-2 opacity-60">
<span class="material-symbols-outlined text-outline text-[16px] mt-0.5" data-icon="local_shipping">local_shipping</span>
<div class="min-w-0">
<div class="font-label-xs text-label-xs uppercase text-on-surface-variant font-mono">STEP 05: QUEUE</div>
<div class="font-label-sm text-label-sm text-on-surface font-semibold truncate">Convoy Staged</div>
<div class="font-mono text-label-xs text-on-surface-variant">DEP-0002 Sortie</div>
</div>
</div>
</div>
</div>
</div>
<!-- ===================================================================== -->
<!-- SECTION 3: EXECUTIVE RECOMMENDATION SUMMARY CARDS (6-Metric Strip) -->
<!-- ===================================================================== -->
<div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-space-sm">
<!-- Metric 1: Recommendation Payload -->
<div class="bg-surface-container-lowest border border-outline-variant p-space-sm rounded-DEFAULT">
<div class="font-label-xs text-label-xs text-on-surface-variant uppercase font-mono tracking-wider">Target Payload</div>
<div class="flex items-baseline gap-1 mt-1">
<span class="font-mono font-bold text-headline-sm text-primary">+2,500</span>
<span class="font-mono text-body-sm text-on-surface-variant font-semibold">LITERS</span>
</div>
<div class="font-body-sm text-body-sm text-on-surface-variant truncate mt-1">Class III POL Arctic Diesel</div>
<div class="mt-2 text-label-xs font-mono text-secondary bg-surface-container px-1 py-0.5 rounded-DEFAULT inline-block">DEP-0002 Sortie</div>
</div>
<!-- Metric 2: Stockout Probability -->
<div class="bg-surface-container-lowest border border-outline-variant p-space-sm rounded-DEFAULT">
<div class="font-label-xs text-label-xs text-on-surface-variant uppercase font-mono tracking-wider">Stockout Risk</div>
<div class="flex items-baseline gap-1 mt-1">
<span class="font-mono font-bold text-headline-sm text-error">74%</span>
<span class="font-mono text-body-sm text-outline">→</span>
<span class="font-mono font-bold text-headline-sm text-emerald-700">21%</span>
</div>
<div class="font-body-sm text-body-sm text-emerald-800 font-semibold mt-1">-53 pp Risk Abatement</div>
<div class="mt-2 text-label-xs font-mono text-on-surface-variant bg-surface-container px-1 py-0.5 rounded-DEFAULT inline-block">Projected at Day 6</div>
</div>
<!-- Metric 3: Safety Stock Runway -->
<div class="bg-surface-container-lowest border border-outline-variant p-space-sm rounded-DEFAULT">
<div class="font-label-xs text-label-xs text-on-surface-variant uppercase font-mono tracking-wider">Safety Runway</div>
<div class="flex items-baseline gap-1 mt-1">
<span class="font-mono font-bold text-headline-sm text-on-surface">18.5</span>
<span class="font-mono text-body-sm text-on-surface-variant font-semibold">DAYS</span>
</div>
<div class="font-body-sm text-body-sm text-on-surface-variant mt-1">Breach Averted (was Day 5)</div>
<div class="mt-2 text-label-xs font-mono text-emerald-800 bg-emerald-50 px-1 py-0.5 rounded-DEFAULT inline-block border border-emerald-200">+13.5d Extension</div>
</div>
<!-- Metric 4: Confidence Score -->
<div class="bg-surface-container-lowest border border-outline-variant p-space-sm rounded-DEFAULT">
<div class="font-label-xs text-label-xs text-on-surface-variant uppercase font-mono tracking-wider">Confidence Score</div>
<div class="flex items-baseline gap-1 mt-1">
<span class="font-mono font-bold text-headline-sm text-primary">94%</span>
<span class="font-mono text-body-sm text-emerald-700 font-semibold">HIGH</span>
</div>
<div class="font-body-sm text-body-sm text-on-surface-variant mt-1">Multi-Model Convergence</div>
<div class="mt-2 text-label-xs font-mono text-on-surface-variant bg-surface-container px-1 py-0.5 rounded-DEFAULT inline-block">5 Telemetry Inputs</div>
</div>
<!-- Metric 5: Time to Impact -->
<div class="bg-surface-container-lowest border border-outline-variant p-space-sm rounded-DEFAULT">
<div class="font-label-xs text-label-xs text-on-surface-variant uppercase font-mono tracking-wider">Critical Horizon</div>
<div class="flex items-baseline gap-1 mt-1">
<span class="font-mono font-bold text-headline-sm text-amber-800">6</span>
<span class="font-mono text-body-sm text-on-surface-variant font-semibold">DAYS</span>
</div>
<div class="font-body-sm text-body-sm text-on-surface-variant mt-1">Terminal Stockout: 15 Oct</div>
<div class="mt-2 text-label-xs font-mono text-amber-900 bg-amber-50 px-1 py-0.5 rounded-DEFAULT inline-block border border-amber-200">Dispatch Window: 18h</div>
</div>
<!-- Metric 6: Affected Asset/Node -->
<div class="bg-surface-container-lowest border border-outline-variant p-space-sm rounded-DEFAULT">
<div class="font-label-xs text-label-xs text-on-surface-variant uppercase font-mono tracking-wider">Forward Node</div>
<div class="flex items-baseline gap-1 mt-1">
<span class="font-mono font-bold text-headline-sm text-on-surface">LOC-0042</span>
</div>
<div class="font-body-sm text-body-sm text-on-surface-variant truncate mt-1">4,820m MSL · -24°C Alpine</div>
<div class="mt-2 text-label-xs font-mono text-on-surface-variant bg-surface-container px-1 py-0.5 rounded-DEFAULT inline-block">SSN Frontline Post</div>
</div>
</div>
<!-- ===================================================================== -->
<!-- SECTION 4: MAIN CONTENT 2-COLUMN SPLIT -->
<!-- ===================================================================== -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
<!-- =================================================================== -->
<!-- LEFT COLUMN (~62% = col-span-7 or 8 on 12-col grid) -->
<!-- =================================================================== -->
<div class="lg:col-span-7 xl:col-span-7 space-y-space-md">
<!-- 4.1 "Why the System Recommends This" (Explainable AI Operational Reasoning) -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-space-md">
<div class="flex items-center justify-between pb-space-xs border-b border-outline-variant mb-space-sm">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="psychology">psychology</span>
<h2 class="font-headline-sm text-headline-sm text-primary">Explainable AI Operational Reasoning</h2>
</div>
<span class="font-mono text-label-xs text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-DEFAULT">
                MODEL: SIM-LOGIX-v4.9
              </span>
</div>
<!-- Narrative Paragraph -->
<p class="font-body-md text-body-md text-on-surface leading-relaxed mb-space-md">
              Demand at <strong class="text-primary font-semibold">Forward Post Alpha (LOC-0042)</strong> is projected to escalate by <strong class="text-error font-semibold">+25%</strong> over the next 72 hours due to sustained severe alpine conditions (-24°C ambient with 45kt katabatic gusts). This drives continuous micro-turbine heating and diesel-generator baseload operation. Current depot balance of <strong class="font-mono font-semibold">4,200 L</strong> will deplete at <strong class="font-mono font-semibold">850 L/day</strong> (against normal baseline of 680 L/day), breaching the mandatory inviolable safety reserve floor of <strong class="font-mono font-semibold">2,000 L</strong> on <strong class="font-semibold text-error">Day 5 (14 Oct)</strong> and precipitating a terminal stockout event on Day 6 without immediate staging from Bodhkharbu (DEP-0002).
            </p>
<!-- Causal Chain Flowchart Block -->
<div class="bg-surface-container-low p-space-sm rounded-DEFAULT border border-outline-variant">
<div class="font-label-xs text-label-xs uppercase font-mono text-on-surface-variant mb-2">Deterministic Operational Causal Chain:</div>
<div class="grid grid-cols-1 md:grid-cols-5 gap-1.5 items-center font-mono text-label-xs">
<div class="p-2 bg-surface-container-lowest border border-outline-variant rounded-DEFAULT text-center">
<div class="text-error font-bold">+25% SURGE</div>
<div class="text-[10px] text-on-surface-variant leading-tight mt-0.5">-24°C Alpine Storm</div>
</div>
<div class="flex justify-center text-outline">
<span class="material-symbols-outlined rotate-90 md:rotate-0" data-icon="arrow_forward">arrow_forward</span>
</div>
<div class="p-2 bg-surface-container-lowest border border-outline-variant rounded-DEFAULT text-center">
<div class="font-bold text-on-surface">850 L / DAY</div>
<div class="text-[10px] text-on-surface-variant leading-tight mt-0.5">Micro-Turbine Burn</div>
</div>
<div class="flex justify-center text-outline">
<span class="material-symbols-outlined rotate-90 md:rotate-0" data-icon="arrow_forward">arrow_forward</span>
</div>
<div class="p-2 bg-surface-container-lowest border border-error/40 rounded-DEFAULT text-center">
<div class="text-error font-bold">DAY 5 BREACH</div>
<div class="text-[10px] text-on-surface-variant leading-tight mt-0.5">&lt; 2,000 L Floor</div>
</div>
</div>
<div class="mt-2 text-right">
<span class="font-label-xs text-label-xs text-secondary font-mono font-semibold">→ INITIATING SORTIE SHP-2062 (+2,500 L REPLENISHMENT)</span>
</div>
</div>
</div>
<!-- 4.2 Evidence & Supporting Telemetry Table -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT overflow-hidden">
<div class="p-space-sm bg-surface-container flex items-center justify-between border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="table_chart">table_chart</span>
<h3 class="font-headline-sm text-headline-sm text-primary">Evidence &amp; Traceable Telemetry Feeds</h3>
</div>
<span class="font-mono text-label-xs text-on-surface-variant">6 VERIFIED SOURCES</span>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container border-b-2 border-secondary font-mono text-label-xs text-primary uppercase">
<th class="py-2 px-space-sm">Telemetry Metric</th>
<th class="py-2 px-space-sm text-right">Observed Value</th>
<th class="py-2 px-space-sm">Source Node</th>
<th class="py-2 px-space-sm">Freshness</th>
<th class="py-2 px-space-sm text-right">Conf.</th>
<th class="py-2 px-space-sm text-center">Verification Action</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant font-body-sm text-body-sm">
<!-- Row 1 -->
<tr class="hover:bg-surface-container/50 transition-colors">
<td class="py-2 px-space-sm font-medium text-on-surface">Daily Fuel Demand</td>
<td class="py-2 px-space-sm text-right font-mono font-bold text-error">850 L/day (+25%)</td>
<td class="py-2 px-space-sm font-mono text-label-xs text-on-surface-variant">Forecast FC-018</td>
<td class="py-2 px-space-sm font-mono text-label-xs text-emerald-800">2 min ago</td>
<td class="py-2 px-space-sm text-right font-mono font-semibold">93%</td>
<td class="py-2 px-space-sm text-center">
<a class="font-label-xs font-mono text-secondary hover:underline inline-flex items-center gap-0.5" href="#fc018">
                        Open Forecast <span class="material-symbols-outlined text-[13px]" data-icon="open_in_new">open_in_new</span>
</a>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-surface-container/50 transition-colors">
<td class="py-2 px-space-sm font-medium text-on-surface">Depot Balance (LOC-0042)</td>
<td class="py-2 px-space-sm text-right font-mono font-bold text-amber-900">4,200 L (Day 5 Breach)</td>
<td class="py-2 px-space-sm font-mono text-label-xs text-on-surface-variant">Inventory INV-284</td>
<td class="py-2 px-space-sm font-mono text-label-xs text-emerald-800">2 min ago</td>
<td class="py-2 px-space-sm text-right font-mono font-semibold">96%</td>
<td class="py-2 px-space-sm text-center">
<a class="font-label-xs font-mono text-secondary hover:underline inline-flex items-center gap-0.5" href="#inv284">
                        Open Inventory <span class="material-symbols-outlined text-[13px]" data-icon="open_in_new">open_in_new</span>
</a>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container/50 transition-colors">
<td class="py-2 px-space-sm font-medium text-on-surface">Safety Stock Threshold</td>
<td class="py-2 px-space-sm text-right font-mono font-bold text-primary">2,000 L (Inviolable)</td>
<td class="py-2 px-space-sm font-mono text-label-xs text-on-surface-variant">MIL-STD-810G SOP</td>
<td class="py-2 px-space-sm font-mono text-label-xs text-on-surface-variant">Permanent</td>
<td class="py-2 px-space-sm text-right font-mono font-semibold">100%</td>
<td class="py-2 px-space-sm text-center">
<a class="font-label-xs font-mono text-secondary hover:underline inline-flex items-center gap-0.5" href="#policy">
                        View Policy <span class="material-symbols-outlined text-[13px]" data-icon="open_in_new">open_in_new</span>
</a>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-surface-container/50 transition-colors">
<td class="py-2 px-space-sm font-medium text-on-surface">Projected Stockout Probability</td>
<td class="py-2 px-space-sm text-right font-mono font-bold text-error">74% (Critical Breach)</td>
<td class="py-2 px-space-sm font-mono text-label-xs text-on-surface-variant">Simulation SIM-0084</td>
<td class="py-2 px-space-sm font-mono text-label-xs text-emerald-800">8 min ago</td>
<td class="py-2 px-space-sm text-right font-mono font-semibold">89%</td>
<td class="py-2 px-space-sm text-center">
<a class="font-label-xs font-mono text-secondary hover:underline inline-flex items-center gap-0.5" href="#sim0084">
                        Open Simulation <span class="material-symbols-outlined text-[13px]" data-icon="open_in_new">open_in_new</span>
</a>
</td>
</tr>
<!-- Row 5 -->
<tr class="hover:bg-surface-container/50 transition-colors">
<td class="py-2 px-space-sm font-medium text-on-surface">Corridor Reliability (Fotu La)</td>
<td class="py-2 px-space-sm text-right font-mono font-bold text-on-surface">86% (Passable / -6°C)</td>
<td class="py-2 px-space-sm font-mono text-label-xs text-on-surface-variant">BRO Route RTE-018</td>
<td class="py-2 px-space-sm font-mono text-label-xs text-emerald-800">5 min ago</td>
<td class="py-2 px-space-sm text-right font-mono font-semibold">92%</td>
<td class="py-2 px-space-sm text-center">
<a class="font-label-xs font-mono text-secondary hover:underline inline-flex items-center gap-0.5" href="#rte018">
                        Open Route <span class="material-symbols-outlined text-[13px]" data-icon="open_in_new">open_in_new</span>
</a>
</td>
</tr>
<!-- Row 6 -->
<tr class="hover:bg-surface-container/50 transition-colors">
<td class="py-2 px-space-sm font-medium text-on-surface">Stallion Bowser Capacity</td>
<td class="py-2 px-space-sm text-right font-mono font-bold text-emerald-800">3x Available (DEP-0002)</td>
<td class="py-2 px-space-sm font-mono text-label-xs text-on-surface-variant">Fleet VH-0087/088</td>
<td class="py-2 px-space-sm font-mono text-label-xs text-emerald-800">3 min ago</td>
<td class="py-2 px-space-sm text-right font-mono font-semibold">88%</td>
<td class="py-2 px-space-sm text-center">
<a class="font-label-xs font-mono text-secondary hover:underline inline-flex items-center gap-0.5" href="#vh0087">
                        Open Fleet <span class="material-symbols-outlined text-[13px]" data-icon="open_in_new">open_in_new</span>
</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<!-- 4.3 Baseline vs. Recommended Action Matrix -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-space-md">
<div class="flex items-center justify-between pb-space-xs border-b border-outline-variant mb-space-sm">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="balance">balance</span>
<h3 class="font-headline-sm text-headline-sm text-primary">Baseline vs. Recommended Action Matrix</h3>
</div>
<span class="font-mono text-label-xs text-on-surface-variant">DELTA PROJECTIONS</span>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse font-body-sm text-body-sm">
<thead>
<tr class="bg-surface-container border-b-2 border-secondary font-mono text-label-xs text-primary uppercase">
<th class="py-2 px-2">Operational Dimension</th>
<th class="py-2 px-2">Current Baseline (No Action)</th>
<th class="py-2 px-2 bg-secondary/10">Recommended Action (+2,500 L)</th>
<th class="py-2 px-2 text-right">Projected Delta</th>
<th class="py-2 px-2">Mission Impact Significance</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<tr>
<td class="py-2 px-2 font-medium text-on-surface">Depot Usable Fuel</td>
<td class="py-2 px-2 font-mono text-amber-900">4,200 L</td>
<td class="py-2 px-2 font-mono font-bold text-on-surface bg-secondary/10">6,700 L (Post-Resupply)</td>
<td class="py-2 px-2 font-mono font-bold text-emerald-800 text-right">+2,500 L Buffer</td>
<td class="py-2 px-2 text-on-surface-variant">Guarantees 18.5 day mission runtime above 2,000 L floor</td>
</tr>
<tr>
<td class="py-2 px-2 font-medium text-on-surface">Stockout Probability</td>
<td class="py-2 px-2 font-mono text-error font-bold">74% (Critical)</td>
<td class="py-2 px-2 font-mono font-bold text-emerald-800 bg-secondary/10">21% (Low / Controlled)</td>
<td class="py-2 px-2 font-mono font-bold text-emerald-800 text-right">-53 pp</td>
<td class="py-2 px-2 text-on-surface-variant">Averts shutdown of radar installation and habitat heating</td>
</tr>
<tr>
<td class="py-2 px-2 font-medium text-on-surface">Depot Fleet Utilization</td>
<td class="py-2 px-2 font-mono">72%</td>
<td class="py-2 px-2 font-mono font-bold bg-secondary/10">76% (+1 Sortie Load)</td>
<td class="py-2 px-2 font-mono text-right text-on-surface">+4 pp</td>
<td class="py-2 px-2 text-on-surface-variant">Easily absorbed by Bodhkharbu reserve bowser pool</td>
</tr>
<tr>
<td class="py-2 px-2 font-medium text-on-surface">Route RTE-018 Saturation</td>
<td class="py-2 px-2 font-mono">Medium (86% corridor cap)</td>
<td class="py-2 px-2 font-mono font-bold bg-secondary/10">Low-Medium (88% corridor)</td>
<td class="py-2 px-2 font-mono text-right text-on-surface">+2% Load</td>
<td class="py-2 px-2 text-on-surface-variant">Escorted within established daylight convoy window (08:00–16:00)</td>
</tr>
<tr>
<td class="py-2 px-2 font-medium text-on-surface">Delivery Delay Probability</td>
<td class="py-2 px-2 font-mono text-error font-bold">27% (Weather Delay)</td>
<td class="py-2 px-2 font-mono font-bold text-emerald-800 bg-secondary/10">12%</td>
<td class="py-2 px-2 font-mono font-bold text-emerald-800 text-right">-15 pp</td>
<td class="py-2 px-2 text-on-surface-variant">Timed ahead of BRO Level 2 blizzard alert at Fotu La Pass</td>
</tr>
</tbody>
</table>
</div>
</div>
<!-- 4.4 Tactical GIS Corridor Preview & Impact Map -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-space-md">
<div class="flex items-center justify-between pb-space-xs border-b border-outline-variant mb-space-sm">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="map">map</span>
<h3 class="font-headline-sm text-headline-sm text-primary">Tactical GIS Corridor Preview &amp; Waypoints</h3>
</div>
<div class="flex items-center gap-2">
<span class="font-mono text-label-xs bg-surface-container px-2 py-0.5 rounded-DEFAULT">AXIS: RTE-018 (118 KM)</span>
<button class="text-secondary font-label-xs font-mono hover:underline flex items-center gap-0.5" type="button">
                  Full GIS View <span class="material-symbols-outlined text-[13px]" data-icon="open_in_new">open_in_new</span>
</button>
</div>
</div>
<!-- Stylized Tactical Military GIS Schematic -->
<div class="bg-[#1A231B] border border-outline-variant p-4 rounded-DEFAULT relative overflow-hidden text-surface-container-lowest select-none">
<!-- Topographical Grid Overlay Lines -->
<div class="absolute inset-0 opacity-15 pointer-events-none" style="background-image: radial-gradient(#d6e7d8 1px, transparent 1px); background-size: 20px 20px;"></div>
<div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 py-2">
<!-- Origin Node -->
<div class="bg-primary-container border border-secondary p-3 rounded-DEFAULT w-full md:w-56 text-left">
<div class="flex items-center justify-between text-secondary-fixed font-mono text-[10px] mb-1">
<span>DEPOT ORIGIN</span>
<span class="material-symbols-outlined text-[14px]" data-icon="warehouse">warehouse</span>
</div>
<div class="font-headline-sm text-body-lg text-surface-container-lowest font-bold">Bodhkharbu</div>
<div class="font-mono text-label-xs text-on-primary-container">DEP-0002 · 3,450m MSL</div>
<div class="mt-2 text-label-xs font-mono text-emerald-400 bg-secondary/40 px-1 py-0.5 rounded-DEFAULT inline-block">
                    VH-0087 STAGED
                  </div>
</div>
<!-- Corridor Path with Waypoint -->
<div class="flex-1 flex flex-col items-center px-2 w-full">
<div class="font-mono text-[11px] text-secondary-fixed mb-1 flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-emerald-400"></span>
<span>SORTIE SHP-2062 // RTE-018</span>
</div>
<div class="w-full relative flex items-center justify-center my-2">
<div class="w-full h-0.5 bg-outline-variant/60"></div>
<!-- Waypoint: Fotu La Pass -->
<div class="absolute bg-surface-container-lowest text-primary px-2 py-1 rounded-DEFAULT border border-secondary font-mono text-label-xs shadow-sm flex items-center gap-1">
<span class="material-symbols-outlined text-amber-700 text-[14px]" data-icon="terrain">terrain</span>
<span>Fotu La Pass (4,108m)</span>
</div>
</div>
<div class="flex justify-between w-full font-mono text-[10px] text-on-primary-container mt-1">
<span>KM 0.0</span>
<span class="text-amber-300">PASSABLE // -6°C // 86% REL.</span>
<span>KM 118.0</span>
</div>
</div>
<!-- Destination Node -->
<div class="bg-primary-container border border-error/70 p-3 rounded-DEFAULT w-full md:w-56 text-left">
<div class="flex items-center justify-between text-error font-mono text-[10px] mb-1">
<span>FORWARD POST</span>
<span class="material-symbols-outlined text-[14px]" data-icon="flag">flag</span>
</div>
<div class="font-headline-sm text-body-lg text-surface-container-lowest font-bold">Post Alpha</div>
<div class="font-mono text-label-xs text-on-primary-container">LOC-0042 · 4,820m MSL</div>
<div class="mt-2 text-label-xs font-mono text-amber-400 bg-error/30 px-1 py-0.5 rounded-DEFAULT inline-block">
                    CRITICAL DEFICIT (74%)
                  </div>
</div>
</div>
<!-- Corridor Meta Bar -->
<div class="mt-3 pt-3 border-t border-outline-variant/30 flex flex-wrap items-center justify-between font-mono text-label-xs text-on-primary-container">
<div class="flex items-center gap-3">
<span>TRANSIT TIME: <strong>4.8 HRS</strong></span>
<span>EST. CONVOY SPEED: <strong>26 KM/H</strong></span>
<span>ESCORT: <strong>1x CASPER 4x4</strong></span>
</div>
<div class="flex items-center gap-2">
<a class="text-secondary-fixed hover:underline" href="#loc0042">[View Location]</a>
<a class="text-secondary-fixed hover:underline" href="#rte018">[View Route]</a>
<a class="text-secondary-fixed hover:underline" href="#shp2062">[View Sortie]</a>
</div>
</div>
</div>
</div>
<!-- 4.5 Multi-Option Strategy Comparison (Alternatives & Trade-offs) -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-space-md">
<div class="flex items-center justify-between pb-space-xs border-b border-outline-variant mb-space-sm">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="alt_route">alt_route</span>
<h3 class="font-headline-sm text-headline-sm text-primary">Multi-Option Strategy Comparison</h3>
</div>
<span class="font-mono text-label-xs text-on-surface-variant">ALGORITHMIC TRADE-OFFS</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
<!-- Option A: RECOMMENDED -->
<div class="border-2 border-secondary bg-surface-container-low p-space-sm rounded-DEFAULT relative">
<div class="absolute -top-2.5 right-3 bg-secondary text-surface-container-lowest font-mono text-label-xs px-2 py-0.5 rounded-DEFAULT uppercase tracking-wider">
                  System Preferred
                </div>
<div class="font-label-md text-label-md font-bold text-primary mb-1">Option A: Direct Resupply (+2,500 L)</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-2">
                  Dispatch 1x Stallion bowser via primary axis RTE-018 prior to 11:30 IST window.
                </p>
<div class="grid grid-cols-3 gap-1 font-mono text-label-xs border-t border-outline-variant pt-2">
<div>Stockout: <strong class="text-emerald-800">21%</strong></div>
<div>Corridor Risk: <strong class="text-amber-800">14%</strong></div>
<div>ETA: <strong class="text-on-surface">4.8h</strong></div>
</div>
</div>
<!-- Option B: Chushul Axis Alternate -->
<div class="border border-outline-variant bg-surface-container-lowest p-space-sm rounded-DEFAULT">
<div class="font-label-md text-label-md font-bold text-on-surface mb-1">Option B: Chushul Axis Reroute</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-2">
                  Divert replenishment via southern RTE-021 axis. Avoids Fotu La pass entirely.
                </p>
<div class="grid grid-cols-3 gap-1 font-mono text-label-xs border-t border-outline-variant pt-2">
<div>Stockout: <strong class="text-amber-800">38%</strong></div>
<div>Corridor Risk: <strong class="text-emerald-800">8%</strong></div>
<div>ETA: <strong class="text-error">9.2h</strong></div>
</div>
</div>
<!-- Option C: Demand Rationing -->
<div class="border border-outline-variant bg-surface-container-lowest p-space-sm rounded-DEFAULT">
<div class="font-label-md text-label-md font-bold text-on-surface mb-1">Option C: Throttle Post Habitat</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-2">
                  Curtail auxiliary heating to living shelters by 35%. Maintain radar power only.
                </p>
<div class="grid grid-cols-3 gap-1 font-mono text-label-xs border-t border-outline-variant pt-2">
<div>Stockout: <strong class="text-amber-800">45%</strong></div>
<div>Health Risk: <strong class="text-error">HIGH</strong></div>
<div>Fuel Saved: <strong class="text-emerald-800">220 L/d</strong></div>
</div>
</div>
<!-- Option D: Status Quo -->
<div class="border border-outline-variant bg-surface-container-lowest p-space-sm rounded-DEFAULT">
<div class="font-label-md text-label-md font-bold text-error mb-1">Option D: Status Quo (No Action)</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-2">
                  Rely strictly on scheduled bi-weekly cycle on 18 Oct. Severe stockout certainty.
                </p>
<div class="grid grid-cols-3 gap-1 font-mono text-label-xs border-t border-outline-variant pt-2">
<div>Stockout: <strong class="text-error font-bold">74%</strong></div>
<div>Safety Floor: <strong class="text-error">BREACH</strong></div>
<div>Buffer: <strong class="text-error">0.0d</strong></div>
</div>
</div>
</div>
</div>
<!-- 4.6 Related Recommendations & Operational Dependencies -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-space-md">
<div class="flex items-center justify-between pb-space-xs border-b border-outline-variant mb-space-sm">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="account_tree">account_tree</span>
<h3 class="font-headline-sm text-headline-sm text-primary">Cross-Recommendation Dependencies</h3>
</div>
<span class="font-mono text-label-xs text-on-surface-variant">3 LINKED OBJECTS</span>
</div>
<div class="space-y-2">
<!-- Item 1 -->
<div class="p-2 border border-outline-variant rounded-DEFAULT flex items-center justify-between bg-surface-container-low">
<div class="flex items-center gap-2">
<span class="font-mono text-label-xs bg-secondary text-surface-container-lowest px-1.5 py-0.5 rounded-DEFAULT font-bold">REC-2051</span>
<div>
<div class="font-label-sm text-label-sm font-semibold text-primary">Reassign 1x Ashok Leyland Stallion Bowser from Bodhkharbu reserve pool</div>
<div class="font-mono text-label-xs text-on-surface-variant">STATUS: PREREQUISITE (AUTOMATICALLY STAGED WITH THIS APPROVAL)</div>
</div>
</div>
<span class="font-mono text-label-xs text-emerald-800 font-semibold">[READY]</span>
</div>
<!-- Item 2 -->
<div class="p-2 border border-outline-variant rounded-DEFAULT flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="font-mono text-label-xs bg-surface-container text-on-surface-variant px-1.5 py-0.5 rounded-DEFAULT font-bold">REC-2053</span>
<div>
<div class="font-label-sm text-label-sm font-semibold text-on-surface">Standby reserve dispatch via Chushul Route RTE-021</div>
<div class="font-mono text-label-xs text-on-surface-variant">STATUS: CONTINGENCY BACKUP (SECONDARY ALTERNATIVE)</div>
</div>
</div>
<span class="font-mono text-label-xs text-on-surface-variant">[STANDBY]</span>
</div>
<!-- Item 3 -->
<div class="p-2 border border-error/30 rounded-DEFAULT flex items-center justify-between bg-error/5">
<div class="flex items-center gap-2">
<span class="font-mono text-label-xs bg-error text-on-error px-1.5 py-0.5 rounded-DEFAULT font-bold">RISK-1042</span>
<div>
<div class="font-label-sm text-label-sm font-semibold text-error">Critical Arctic Diesel Deficit Alert — Post Alpha Command Sub-Sector</div>
<div class="font-mono text-label-xs text-on-surface-variant">STATUS: MITIGATED UPON APPROVAL OF REC-2048</div>
</div>
</div>
<span class="font-mono text-label-xs text-error font-semibold">[ACTIVE ALARM]</span>
</div>
</div>
</div>
</div>
<!-- =================================================================== -->
<!-- RIGHT COLUMN (~38% = col-span-5 on 12-col grid) -->
<!-- =================================================================== -->
<div class="lg:col-span-5 xl:col-span-5 space-y-space-md">
<!-- 4.7 Human-in-the-Loop Parameter Override & Customization -->
<div class="bg-surface-container-lowest border-2 border-secondary rounded-DEFAULT p-space-md shadow-sm">
<div class="flex items-center justify-between pb-space-xs border-b border-outline-variant mb-space-sm">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="tune">tune</span>
<h3 class="font-headline-sm text-headline-sm text-primary">Operational Parameter Override</h3>
</div>
<span class="font-mono text-label-xs bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-DEFAULT font-bold">
                OPERATOR OVERRIDE ACTIVE
              </span>
</div>
<!-- Side-by-Side System vs Override Comparison -->
<div class="grid grid-cols-2 gap-2 mb-space-sm font-mono text-body-sm">
<!-- AI Suggested Box -->
<div class="p-2 bg-surface-container-low rounded-DEFAULT border border-outline-variant">
<div class="font-label-xs text-label-xs text-on-surface-variant uppercase mb-1">AI Recommendation</div>
<div class="font-bold text-headline-sm text-on-surface leading-tight">2,500 L</div>
<div class="text-[11px] text-on-surface-variant mt-1">Priority: <strong class="text-error">CRITICAL</strong></div>
<div class="text-[11px] text-on-surface-variant">Corridor: RTE-018</div>
<div class="text-[11px] text-on-surface-variant">Safety Runway: 13.5d</div>
</div>
<!-- Human Override Box -->
<div class="p-2 bg-secondary/15 rounded-DEFAULT border-2 border-secondary">
<div class="font-label-xs text-label-xs text-secondary uppercase font-bold mb-1">Lt. Col. Kumar Override</div>
<div class="font-bold text-headline-sm text-primary leading-tight">3,000 L</div>
<div class="text-[11px] text-emerald-800 font-bold mt-1">+500 L Safety Margin</div>
<div class="text-[11px] text-on-surface">Corridor: RTE-018 (Direct)</div>
<div class="text-[11px] text-emerald-800 font-bold">Safety Runway: 18.5d</div>
</div>
</div>
<!-- Interactive Parameter Sliders / Inputs (Visualized as Enterprise Controls) -->
<div class="space-y-space-sm">
<div>
<div class="flex justify-between text-label-xs font-mono text-on-surface mb-1">
<span>DISPATCH VOLUME (LITERS)</span>
<span class="font-bold text-primary">3,000 L (STAGED)</span>
</div>
<input class="w-full accent-secondary h-2 bg-surface-container rounded-DEFAULT cursor-pointer" max="4000" min="1500" step="250" type="range" value="3000"/>
<div class="flex justify-between text-[10px] font-mono text-on-surface-variant mt-0.5">
<span>1,500 L (Min)</span>
<span class="text-primary font-semibold">2,500 L (AI Rec)</span>
<span>4,000 L (Max Bowser Cap)</span>
</div>
</div>
<div class="grid grid-cols-2 gap-2">
<div>
<label class="block font-label-xs text-label-xs uppercase font-mono text-on-surface-variant mb-1">CONVOY DEPARTURE</label>
<select class="w-full h-9 bg-surface-container-lowest border border-outline text-on-surface text-body-sm rounded-DEFAULT px-2 focus:border-secondary focus:ring-0">
<option selected="">09:30 IST (Daylight Gate 1)</option>
<option>11:00 IST (Daylight Gate 2)</option>
<option>13:30 IST (Marginal Weather)</option>
</select>
</div>
<div>
<label class="block font-label-xs text-label-xs uppercase font-mono text-on-surface-variant mb-1">TRANSIT ROUTE</label>
<select class="w-full h-9 bg-surface-container-lowest border border-outline text-on-surface text-body-sm rounded-DEFAULT px-2 focus:border-secondary focus:ring-0">
<option selected="">RTE-018 (Fotu La Direct)</option>
<option>RTE-021 (Chushul Axis)</option>
</select>
</div>
</div>
<!-- Mandatory Officer Justification Textbox -->
<div>
<label class="block font-label-xs text-label-xs uppercase font-mono text-on-surface mb-1 font-semibold">
                  MANDATORY COMMAND JUSTIFICATION (MIL-STD AUDITED):
                </label>
<textarea class="w-full bg-surface-container-lowest border border-secondary text-body-sm text-on-surface rounded-DEFAULT p-2 font-mono text-[12px] leading-relaxed focus:border-primary-container focus:ring-0" readonly="" rows="3">Anticipating severe blizzard on Fotu La Pass (BRO Level 2 advisory); increasing sortie capacity to 3,000 L to provide a full 18.5-day autonomous reserve buffer.</textarea>
<div class="flex items-center justify-between text-[10px] font-mono text-on-surface-variant mt-0.5">
<span>RECORDED BY: LT. COL. B. KUMAR</span>
<span>TIME: 14:44:30 IST</span>
</div>
</div>
</div>
</div>
<!-- 4.8 Pre-Approval Operational Checklist (Verification Gate) -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-space-md">
<div class="flex items-center justify-between pb-space-xs border-b border-outline-variant mb-space-sm">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="checklist">checklist</span>
<h3 class="font-headline-sm text-headline-sm text-primary">Pre-Approval Verification Gate</h3>
</div>
<span class="font-mono text-label-xs bg-emerald-100 text-emerald-900 border border-emerald-300 px-2 py-0.5 rounded-DEFAULT font-bold">
                5 / 6 VERIFIED
              </span>
</div>
<div class="space-y-2">
<!-- Checklist 1 -->
<label class="flex items-start gap-2.5 p-2 bg-surface-container-low rounded-DEFAULT border border-outline-variant/60 cursor-pointer">
<input checked="" class="mt-0.5 rounded-DEFAULT text-primary focus:ring-0 w-4 h-4" type="checkbox"/>
<div class="text-body-sm">
<div class="font-semibold text-on-surface">1. Verify Inventory Requirement</div>
<div class="font-mono text-label-xs text-on-surface-variant">4,200 L verified via depot sensor INV-284</div>
</div>
</label>
<!-- Checklist 2 -->
<label class="flex items-start gap-2.5 p-2 bg-surface-container-low rounded-DEFAULT border border-outline-variant/60 cursor-pointer">
<input checked="" class="mt-0.5 rounded-DEFAULT text-primary focus:ring-0 w-4 h-4" type="checkbox"/>
<div class="text-body-sm">
<div class="font-semibold text-on-surface">2. Review Forecast Model Confidence</div>
<div class="font-mono text-label-xs text-on-surface-variant">93% confidence recorded on model FC-018</div>
</div>
</label>
<!-- Checklist 3 -->
<label class="flex items-start gap-2.5 p-2 bg-surface-container-low rounded-DEFAULT border border-outline-variant/60 cursor-pointer">
<input checked="" class="mt-0.5 rounded-DEFAULT text-primary focus:ring-0 w-4 h-4" type="checkbox"/>
<div class="text-body-sm">
<div class="font-semibold text-on-surface">3. Confirm Transport Capacity</div>
<div class="font-mono text-label-xs text-on-surface-variant">3x Stallion 4x4 Bowsers operational at DEP-0002</div>
</div>
</label>
<!-- Checklist 4 -->
<label class="flex items-start gap-2.5 p-2 bg-surface-container-low rounded-DEFAULT border border-outline-variant/60 cursor-pointer">
<input checked="" class="mt-0.5 rounded-DEFAULT text-primary focus:ring-0 w-4 h-4" type="checkbox"/>
<div class="text-body-sm">
<div class="font-semibold text-on-surface">4. Review Mountain Corridor Status</div>
<div class="font-mono text-label-xs text-on-surface-variant">Fotu La Pass reported open until 11:30 IST</div>
</div>
</label>
<!-- Checklist 5 -->
<label class="flex items-start gap-2.5 p-2 bg-surface-container-low rounded-DEFAULT border border-outline-variant/60 cursor-pointer">
<input checked="" class="mt-0.5 rounded-DEFAULT text-primary focus:ring-0 w-4 h-4" type="checkbox"/>
<div class="text-body-sm">
<div class="font-semibold text-on-surface">5. Conflicting Sortie Cross-Check</div>
<div class="font-mono text-label-xs text-on-surface-variant">Zero conflicting priority convoys on RTE-018</div>
</div>
</label>
<!-- Checklist 6 (PENDING) -->
<label class="flex items-start gap-2.5 p-2 bg-amber-50/60 rounded-DEFAULT border border-amber-300 cursor-pointer">
<input class="mt-0.5 rounded-DEFAULT text-amber-700 focus:ring-0 w-4 h-4" type="checkbox"/>
<div class="text-body-sm">
<div class="font-semibold text-amber-950 flex items-center gap-1.5">
<span>6. Daylight Arrival Confirmation</span>
<span class="font-mono text-label-xs bg-amber-200 text-amber-900 px-1 py-0.2 rounded-DEFAULT">PENDING SIGN</span>
</div>
<div class="font-mono text-label-xs text-amber-800">Ensure delivery completes before 16:00 IST thermal curfew</div>
</div>
</label>
</div>
</div>
<!-- 4.9 Confidence Analysis & Telemetry Freshness Breakdown -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-space-md">
<div class="flex items-center justify-between pb-space-xs border-b border-outline-variant mb-space-sm">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="troubleshoot">troubleshoot</span>
<h3 class="font-headline-sm text-headline-sm text-primary">Confidence &amp; Freshness Decomposition</h3>
</div>
<span class="font-mono text-label-xs text-emerald-800 bg-surface-container px-2 py-0.5 rounded-DEFAULT font-bold">
                AGGREGATE 94%
              </span>
</div>
<div class="space-y-2.5">
<!-- Confidence Item 1 -->
<div>
<div class="flex justify-between font-mono text-label-xs text-on-surface mb-1">
<span>Inventory Telemetry (INV-284)</span>
<span class="font-bold">96% · 2m fresh</span>
</div>
<div class="w-full bg-surface-container h-1.5 rounded-DEFAULT overflow-hidden">
<div class="bg-secondary h-full" style="width: 96%"></div>
</div>
</div>
<!-- Confidence Item 2 -->
<div>
<div class="flex justify-between font-mono text-label-xs text-on-surface mb-1">
<span>Demand Forecast Model (FC-018)</span>
<span class="font-bold">93% · 2m fresh</span>
</div>
<div class="w-full bg-surface-container h-1.5 rounded-DEFAULT overflow-hidden">
<div class="bg-secondary h-full" style="width: 93%"></div>
</div>
</div>
<!-- Confidence Item 3 -->
<div>
<div class="flex justify-between font-mono text-label-xs text-on-surface mb-1">
<span>Corridor Route Weather (RTE-018)</span>
<span class="font-bold">92% · 5m fresh</span>
</div>
<div class="w-full bg-surface-container h-1.5 rounded-DEFAULT overflow-hidden">
<div class="bg-secondary h-full" style="width: 92%"></div>
</div>
</div>
<!-- Confidence Item 4 -->
<div>
<div class="flex justify-between font-mono text-label-xs text-on-surface mb-1">
<span>Depot Fleet Readiness (DEP-0002)</span>
<span class="font-bold">88% · 3m fresh</span>
</div>
<div class="w-full bg-surface-container h-1.5 rounded-DEFAULT overflow-hidden">
<div class="bg-secondary h-full" style="width: 88%"></div>
</div>
</div>
<!-- Confidence Item 5 -->
<div>
<div class="flex justify-between font-mono text-label-xs text-on-surface mb-1">
<span>Stochastic Simulation Convergence</span>
<span class="font-bold">89% · 8m fresh</span>
</div>
<div class="w-full bg-surface-container h-1.5 rounded-DEFAULT overflow-hidden">
<div class="bg-secondary h-full" style="width: 89%"></div>
</div>
</div>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant text-[11px] font-mono text-on-surface-variant flex items-center justify-between">
<span>SYNC PULSE: ACTIVE L4 ENCLAVE</span>
<span class="text-emerald-800 font-bold">ALL TELEMETRY &lt; 10M FRESH</span>
</div>
</div>
<!-- 4.10 Quartermaster Governance & Decision Action Gate -->
<div class="bg-primary-container text-surface-container-lowest border border-outline-variant p-space-md rounded-DEFAULT space-y-space-sm">
<div class="flex items-center gap-2 text-secondary-fixed border-b border-on-primary-fixed-variant pb-2">
<span class="material-symbols-outlined" data-icon="gavel">gavel</span>
<span class="font-label-sm text-label-sm font-mono uppercase tracking-wider">Quartermaster Operational Governance Gate</span>
</div>
<p class="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
              MIL-STD-810G / DEF-ENC L4 Governance: Approval promotes this recommendation to <strong class="text-surface-container-lowest">APPROVED FOR PLANNING (DISP-9921)</strong>. Convoy physical gate departure and POL decanting mandate hardware cryptographic token sign-off (IC-78921K).
            </p>
<!-- Primary Action Button -->
<button class="w-full py-3 bg-secondary hover:bg-secondary/90 text-surface-container-lowest font-headline-sm text-body-lg rounded-DEFAULT border border-secondary-fixed font-bold tracking-wider flex items-center justify-center gap-2 active:scale-[0.99] transition-transform duration-100" type="button">
<span class="material-symbols-outlined fill-icon text-secondary-fixed" data-icon="verified_user">verified_user</span>
<span>APPROVE FOR PLANNING (DISP-9921)</span>
</button>
<!-- Secondary Tactical Actions Strip -->
<div class="grid grid-cols-2 gap-2 pt-1 font-label-xs font-mono uppercase">
<button class="py-2 px-2 bg-on-primary-fixed-variant/40 hover:bg-on-primary-fixed-variant text-surface-container-lowest rounded-DEFAULT border border-outline-variant/40 transition-colors text-center" type="button">
                Modify Override
              </button>
<button class="py-2 px-2 bg-on-primary-fixed-variant/40 hover:bg-on-primary-fixed-variant text-surface-container-lowest rounded-DEFAULT border border-outline-variant/40 transition-colors text-center" type="button">
                Re-Analyze Model
              </button>
<button class="py-2 px-2 bg-error/20 hover:bg-error/30 text-red-300 rounded-DEFAULT border border-error/40 transition-colors text-center" type="button">
                Reject with Reason
              </button>
<button class="py-2 px-2 bg-on-primary-fixed-variant/40 hover:bg-on-primary-fixed-variant text-surface-container-lowest rounded-DEFAULT border border-outline-variant/40 transition-colors text-center" type="button">
                Snooze Gate (2h)
              </button>
</div>
</div>
<!-- 4.11 Immutable Audit Trail Ledger -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-space-md">
<div class="flex items-center justify-between pb-space-xs border-b border-outline-variant mb-space-sm">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="history">history</span>
<h3 class="font-headline-sm text-headline-sm text-primary">Immutable Audit Trail Ledger</h3>
</div>
<span class="font-mono text-label-xs text-on-surface-variant">SHA-256 LINKED</span>
</div>
<div class="space-y-2 font-mono text-label-xs">
<div class="flex items-start gap-2 text-on-surface-variant">
<span class="text-on-surface shrink-0">14:32:09 IST</span>
<span>Generated by Predictive Engine v4.9 (SIM-0084, 94% Conf.)</span>
</div>
<div class="flex items-start gap-2 text-on-surface-variant">
<span class="text-on-surface shrink-0">14:35:40 IST</span>
<span>Opened for operational review by Lt. Col. B. Kumar (IC-78921K)</span>
</div>
<div class="flex items-start gap-2 text-on-surface-variant">
<span class="text-on-surface shrink-0">14:39:15 IST</span>
<span>Telemetry cross-verified against live sensors INV-284 &amp; FC-018</span>
</div>
<div class="flex items-start gap-2 text-on-surface">
<span class="text-amber-800 font-bold shrink-0">14:42:01 IST</span>
<span class="text-amber-950 font-semibold">Parameter override applied: 2,500 L → 3,000 L (+500 L Buffer)</span>
</div>
<div class="flex items-start gap-2 text-on-surface-variant">
<span class="text-on-surface shrink-0">14:44:30 IST</span>
<span>Mandatory operational justification recorded and signed</span>
</div>
<div class="flex items-start gap-2 text-emerald-800 font-semibold">
<span class="shrink-0">14:46:00 IST</span>
<span>Verification gate checklist updated: 5 of 6 items completed</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>`;
