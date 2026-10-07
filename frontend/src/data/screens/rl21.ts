// Screen: RL-21 — ML Model Performance & Governance
// Route: /model-performance
export const rl21Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto p-6 space-y-5 custom-scroll overflow-y-auto">
<!-- SECTION 1: HEADER & OPERATIONAL CONTEXT CONTROL BAR -->
<section class="bg-surface-container-lowest border border-outline-variant rounded p-4 space-y-3">
<div class="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
<div>
<div class="flex items-center gap-2">
<span class="text-[11px] font-mono uppercase tracking-widest text-secondary font-bold">SYSTEM TELEMETRY // AI GOVERNANCE SUITE</span>
<span class="text-[10px] font-mono bg-surface-container-highest px-1.5 py-0.2 rounded text-on-surface-variant border border-outline-variant">RL-21 DOCS REF</span>
</div>
<h1 class="text-headline-lg font-headline-lg text-primary tracking-tight mt-0.5">ML Model Performance & Governance</h1>
<p class="text-body-sm font-body-sm text-on-surface-variant mt-0.5">Continuous telemetry on forecast accuracy, error distributions, concept drift, and operational planning suitability across production models.</p>
</div>
<!-- Filter & Action Controls -->
<div class="flex flex-wrap items-center gap-2">
<!-- Model Dropdown -->
<div class="relative">
<label class="block text-[9px] font-mono text-outline uppercase font-semibold">Active Production Model</label>
<div class="flex items-center bg-surface-container-low border border-outline-variant rounded px-2.5 py-1 text-label-sm font-label-sm text-primary font-semibold gap-2">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span>DemandModel v2.4 (LSTM-Attn)</span>
<span class="text-[10px] bg-secondary-container text-on-secondary-container px-1 rounded">ACTIVE</span>
<span class="material-symbols-outlined text-[16px] text-outline">arrow_drop_down</span>
</div>
</div>
<!-- Horizon Selector -->
<div>
<label class="block text-[9px] font-mono text-outline uppercase font-semibold">Horizon Scope</label>
<div class="flex items-center bg-surface-container-low border border-outline-variant rounded px-2 py-1 text-label-sm font-label-sm text-primary gap-1">
<span>All (7D - 90D)</span>
<span class="material-symbols-outlined text-[16px] text-outline">arrow_drop_down</span>
</div>
</div>
<!-- Sector Filter -->
<div>
<label class="block text-[9px] font-mono text-outline uppercase font-semibold">Command Theater</label>
<div class="flex items-center bg-surface-container-low border border-outline-variant rounded px-2 py-1 text-label-sm font-label-sm text-primary gap-1">
<span>Sector IV-B // Northern Hubs</span>
<span class="material-symbols-outlined text-[16px] text-outline">arrow_drop_down</span>
</div>
</div>
<!-- Action Buttons -->
<div class="flex items-end gap-2 pt-3 xl:pt-0">
<button class="h-8 px-3 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant text-on-surface text-label-sm font-label-sm flex items-center gap-1.5 transition-colors">
<span class="material-symbols-outlined text-[15px]">description</span>
<span>Export Audit Dossier</span>
</button>
<a class="h-8 px-3 rounded bg-primary-container hover:bg-primary text-on-primary border border-primary-container text-label-sm font-label-sm flex items-center gap-1.5 transition-colors" href="#">
<span class="material-symbols-outlined text-[15px]">inventory</span>
<span>Model Registry (RL-22)</span>
</a>
</div>
</div>
</div>
<!-- Active Model Identity Strip -->
<div class="p-2.5 rounded bg-surface-container-low border border-outline-variant flex flex-wrap items-center justify-between gap-2 text-label-xs font-label-xs">
<div class="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono">
<span class="text-primary font-bold">DemandModel v2.4 (Bi-LSTM + Multi-Head Self-Attn)</span>
<span class="text-outline">|</span>
<span class="text-on-surface-variant">Checkpoint: <strong class="text-primary font-semibold">04 Oct 2026 23:20 IST</strong></span>
<span class="text-outline">|</span>
<span class="text-on-surface-variant">Training Window: <strong class="text-primary font-semibold">180 Days Audited</strong></span>
<span class="text-outline">|</span>
<span class="text-on-surface-variant">Evaluation Window: <strong class="text-primary font-semibold">30D Rolling Backtest</strong></span>
</div>
<div class="flex items-center gap-2">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-secondary/15 text-secondary border border-secondary/30">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              STATUS: HEALTHY // DEPLOYED
            </span>
<span class="font-mono text-[10px] text-outline">HASH: c9b8...44f2</span>
</div>
</div>
</section>
<!-- SECTION 2: TOP OPERATIONAL TELEMETRY METRIC STRIP (5-Metric Strip) -->
<section class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
<!-- Metric 1: Overall Accuracy -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-3 relative flex flex-col justify-between">
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span class="font-mono uppercase">Overall Accuracy</span>
<span class="material-symbols-outlined text-[16px] text-secondary">verified</span>
</div>
<div class="my-2 flex items-baseline gap-2">
<span class="text-headline-xl font-headline-xl text-primary font-bold font-mono">92.2%</span>
<span class="text-label-xs font-label-xs text-secondary font-bold font-mono flex items-center">
              +1.4%
              <span class="material-symbols-outlined text-[13px]">arrow_upward</span>
</span>
</div>
<div class="pt-1.5 border-t border-outline-variant/60 flex items-center justify-between text-[11px] font-mono text-on-surface-variant">
<span>Target: 90.0% Baseline</span>
<span class="text-secondary font-semibold">Target Met</span>
</div>
</div>
<!-- Metric 2: MAPE -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-3 relative flex flex-col justify-between">
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span class="font-mono uppercase">MAPE (Mean Abs % Error)</span>
<span class="material-symbols-outlined text-[16px] text-secondary">trending_down</span>
</div>
<div class="my-2 flex items-baseline gap-2">
<span class="text-headline-xl font-headline-xl text-primary font-bold font-mono">7.8%</span>
<span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-secondary/15 text-secondary border border-secondary/30">Nominal</span>
</div>
<div class="pt-1.5 border-t border-outline-variant/60 flex items-center justify-between text-[11px] font-mono text-on-surface-variant">
<span>Target < 10.0%</span>
<span>MAE: 42.0 | RMSE: 67.2</span>
</div>
</div>
<!-- Metric 3: Systemic Bias (MPE) -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-3 relative flex flex-col justify-between">
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span class="font-mono uppercase">Systemic Bias (MPE)</span>
<span class="material-symbols-outlined text-[16px] text-outline">balance</span>
</div>
<div class="my-2 flex items-baseline gap-2">
<span class="text-headline-xl font-headline-xl text-primary font-bold font-mono">+1.4%</span>
<span class="text-label-xs font-label-xs text-outline font-mono">Over-pred buffer</span>
</div>
<div class="pt-1.5 border-t border-outline-variant/60 flex items-center justify-between text-[11px] font-mono text-on-surface-variant">
<span>Threshold: ±3.0%</span>
<span class="text-secondary font-semibold">Glacier Safe</span>
</div>
</div>
<!-- Metric 4: Forecast Footprint Coverage -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-3 relative flex flex-col justify-between">
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span class="font-mono uppercase">Coverage Footprint</span>
<span class="material-symbols-outlined text-[16px] text-secondary">hub</span>
</div>
<div class="my-2 flex items-baseline gap-2">
<span class="text-headline-xl font-headline-xl text-primary font-bold font-mono">94.0%</span>
<span class="text-label-xs font-label-xs text-on-surface-variant font-mono">28 / 30 Nodes</span>
</div>
<div class="pt-1.5 border-t border-outline-variant/60 flex items-center justify-between text-[11px] font-mono text-on-surface-variant">
<span>2 Nodes Cold Ingestion</span>
<span class="text-amber-800 font-mono font-semibold">2 Stale</span>
</div>
</div>
<!-- Metric 5: Concept & Data Drift -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-3 relative flex flex-col justify-between">
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span class="font-mono uppercase">Concept & Data Drift</span>
<span class="material-symbols-outlined text-[16px] text-secondary">waves</span>
</div>
<div class="my-2 flex items-baseline gap-2">
<span class="text-headline-lg font-headline-lg text-secondary font-bold font-mono">STABLE</span>
<span class="text-[11px] font-mono text-on-surface-variant">PSI: 0.042</span>
</div>
<div class="pt-1.5 border-t border-outline-variant/60 flex items-center justify-between text-[11px] font-mono text-on-surface-variant">
<span>Drift Index: 0.08</span>
<span class="text-secondary font-semibold">Retrain: NO</span>
</div>
</div>
</section>
<!-- SECTION 3: MAIN GRID LAYOUT (65% Analytical Core, 35% Diagnostics & Governance) -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
<!-- LEFT COLUMN: ANALYTICAL CORE (~65% -> 8 columns on 12-col grid) -->
<div class="lg:col-span-8 space-y-5">
<!-- CARD A: FORECAST ACCURACY & ERROR TREND CHART -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-4 space-y-3">
<div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-outline-variant gap-2">
<div>
<div class="flex items-center gap-2">
<span class="text-[10px] font-mono uppercase tracking-wider text-outline">TELEMETRY RUN // 30-DAY BACKTEST</span>
<span class="px-1.5 py-0.2 rounded text-[10px] font-mono bg-secondary-container text-on-secondary-container font-semibold">CONTINUOUS FEED</span>
</div>
<h2 class="text-headline-sm font-headline-sm text-primary font-bold">Accuracy & Error Rate Evolution</h2>
</div>
<!-- Horizon Selector Tabs -->
<div class="flex items-center bg-surface-container rounded p-0.5 border border-outline-variant text-[11px] font-mono">
<button class="px-2 py-1 rounded text-on-surface-variant hover:text-primary">7D (94.8%)</button>
<button class="px-2 py-1 rounded text-on-surface-variant hover:text-primary">14D (93.2%)</button>
<button class="px-2 py-1 rounded bg-surface-container-lowest text-primary font-bold shadow-sm border border-outline-variant/40">30D Active (92.2%)</button>
<button class="px-2 py-1 rounded text-on-surface-variant hover:text-primary">60D (89.4%)</button>
<button class="px-2 py-1 rounded text-on-surface-variant hover:text-primary">90D (86.8%)</button>
</div>
</div>
<!-- SVG Visual Trend Area -->
<div class="space-y-2">
<div class="relative w-full h-64 bg-surface-container-low/60 rounded border border-outline-variant/60 p-2">
<!-- SVG Canvas -->
<svg class="w-full h-full overflow-visible font-mono" preserveaspectratio="none" viewbox="0 0 760 220">
<defs>
<lineargradient id="accuracyGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#516446" stop-opacity="0.25"></stop>
<stop offset="100%" stop-color="#516446" stop-opacity="0.0"></stop>
</lineargradient>
</defs>
<!-- Gridlines -->
<line stroke="#c3c8c2" stroke-dasharray="3 3" stroke-width="0.8" x1="50" x2="740" y1="30" y2="30"></line>
<line stroke="#c3c8c2" stroke-dasharray="3 3" stroke-width="0.8" x1="50" x2="740" y1="75" y2="75"></line>
<line stroke="#c3c8c2" stroke-dasharray="3 3" stroke-width="0.8" x1="50" x2="740" y1="120" y2="120"></line>
<line stroke="#c3c8c2" stroke-dasharray="3 3" stroke-width="0.8" x1="50" x2="740" y1="165" y2="165"></line>
<!-- Y-Axis Labels -->
<text fill="#737873" font-size="10" text-anchor="end" x="40" y="34">96.0%</text>
<text fill="#737873" font-size="10" text-anchor="end" x="40" y="79">93.0%</text>
<text fill="#737873" font-size="10" text-anchor="end" x="40" y="124">90.0% (Target)</text>
<text fill="#737873" font-size="10" text-anchor="end" x="40" y="169">87.0%</text>
<!-- Target Baseline (90%) Guideline -->
<line stroke="#ba1a1a" stroke-dasharray="4 4" stroke-width="1.2" x1="50" x2="740" y1="120" y2="120"></line>
<!-- Area Fill for Accuracy -->
<polygon fill="url(#accuracyGrad)" points="60,135 120,138 180,130 240,122 300,118 360,126 420,112 480,105 540,100 600,92 660,86 720,78 720,195 60,195"></polygon>
<!-- Accuracy Line (Olive Green) climbing 89.2% -> 92.2% -->
<polyline fill="none" points="60,135 120,138 180,130 240,122 300,118 360,126 420,112 480,105 540,100 600,92 660,86 720,78" stroke="#516446" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></polyline>
<!-- MAPE Line (Inverted / Low is good) -->
<polyline fill="none" points="60,165 120,162 180,170 240,175 300,178 360,172 420,180 480,183 540,185 600,189 660,191 720,193" stroke="#A49A78" stroke-dasharray="2 2" stroke-width="1.8"></polyline>
<!-- Nodes on Accuracy Curve -->
<circle cx="60" cy="135" fill="#17251C" r="3" stroke="#ffffff" stroke-width="1.5"></circle>
<circle cx="240" cy="122" fill="#17251C" r="3" stroke="#ffffff" stroke-width="1.5"></circle>
<circle cx="420" cy="112" fill="#17251C" r="3" stroke="#ffffff" stroke-width="1.5"></circle>
<circle cx="600" cy="92" fill="#516446" r="3.5" stroke="#ffffff" stroke-width="1.5"></circle>
<circle cx="720" cy="78" fill="#17251C" r="4" stroke="#ffffff" stroke-width="2"></circle>
<!-- Event Callout 1 (02 Oct Tanker Anomaly Scrubbed) -->
<line stroke="#737873" stroke-dasharray="2 2" stroke-width="1" x1="560" x2="560" y1="20" y2="195"></line>
<rect fill="#F4F3ED" height="18" rx="2" stroke="#737873" stroke-width="0.8" width="125" x="500" y="10"></rect>
<text fill="#191d18" font-size="8.5" font-weight="600" x="505" y="22">02 Oct: Tanker Anomaly RL-16</text>
<!-- Event Callout 2 (04 Oct Retrained v2.4 Promoted) -->
<line stroke="#516446" stroke-dasharray="2 2" stroke-width="1" x1="680" x2="680" y1="20" y2="195"></line>
<rect fill="#d1e6c1" height="18" rx="2" stroke="#516446" stroke-width="0.8" width="112" x="625" y="32"></rect>
<text fill="#111f05" font-size="8.5" font-weight="bold" x="630" y="44">04 Oct: v2.4 Promoted</text>
<!-- X-Axis Labels -->
<text fill="#737873" font-size="9.5" text-anchor="middle" x="60" y="210">05 Sep</text>
<text fill="#737873" font-size="9.5" text-anchor="middle" x="180" y="210">12 Sep</text>
<text fill="#737873" font-size="9.5" text-anchor="middle" x="300" y="210">19 Sep</text>
<text fill="#737873" font-size="9.5" text-anchor="middle" x="420" y="210">26 Sep</text>
<text fill="#737873" font-size="9.5" text-anchor="middle" x="540" y="210">01 Oct</text>
<text fill="#737873" font-size="9.5" text-anchor="middle" x="660" y="210">04 Oct</text>
<text fill="#191d18" font-size="9.5" font-weight="bold" text-anchor="middle" x="720" y="210">05 Oct (Today)</text>
</svg>
</div>
<!-- Legend & Calibration Bar -->
<div class="flex flex-wrap items-center justify-between text-[11px] font-mono pt-1 text-on-surface-variant">
<div class="flex items-center gap-4">
<div class="flex items-center gap-1.5">
<span class="w-3 h-1 bg-secondary rounded"></span>
<span class="text-primary font-semibold">Model Accuracy (92.2% Today)</span>
</div>
<div class="flex items-center gap-1.5">
<span class="w-3 h-1 border-t-2 border-dashed border-[#A49A78]"></span>
<span>MAPE Trend (7.8%)</span>
</div>
<div class="flex items-center gap-1.5">
<span class="w-3 h-1 border-t-2 border-dashed border-error"></span>
<span>Target Floor (90.0%)</span>
</div>
</div>
<div class="flex items-center gap-2">
<span class="text-outline">Noise Filter: Active (Kalman)</span>
<span class="text-outline">|</span>
<span class="text-secondary font-semibold">Confidence Envelope: 95% CI</span>
</div>
</div>
</div>
</div>
<!-- CARD B: ACTUAL VS. PREDICTED DEMAND TRAJECTORY (Selected Strategic SKU) -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-4 space-y-3">
<div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-outline-variant gap-2">
<div>
<div class="flex items-center gap-2">
<span class="text-[10px] font-mono text-outline uppercase tracking-wider">DEEP TRAJECTORY PROJECTION</span>
<span class="px-1.5 py-0.2 rounded text-[10px] font-mono bg-surface-container text-primary font-semibold border border-outline-variant">LOC-0042 // HIGH-ALTITUDE</span>
</div>
<h3 class="text-headline-sm font-headline-sm text-primary font-bold">
                  Actual vs. Predicted Consumption: Arctic Diesel (FUEL-001)
                </h3>
<p class="text-body-sm font-body-sm text-on-surface-variant">Forward Post Alpha (3,500m MSL) — 20-Day Interval with Extreme Sub-Zero Viscosity Drag Correction</p>
</div>
<div class="flex items-center gap-2">
<span class="text-label-xs font-label-xs font-mono text-on-surface-variant">Buffer Policy: <strong class="text-primary">+1.4% Glacier Stockout Reserve</strong></span>
</div>
</div>
<!-- SVG Actual vs Predicted -->
<div class="relative w-full h-52 bg-surface-container-low/60 rounded border border-outline-variant/60 p-2">
<svg class="w-full h-full font-mono" preserveaspectratio="none" viewbox="0 0 760 190">
<!-- Confidence Band Fill -->
<polygon fill="#516446" fill-opacity="0.12" points="60,115 130,110 200,95 270,105 340,90 410,75 480,85 550,70 620,60 690,52 690,88 620,95 550,110 480,120 410,110 340,125 270,135 200,130 130,140 60,145"></polygon>
<!-- Actual Ingested Consumption (Solid Dark Charcoal #17251C) -->
<polyline fill="none" points="60,130 130,125 200,110 270,120 340,105 410,92 480,102 550,88 620,78 690,68" stroke="#17251C" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2"></polyline>
<!-- Model Predicted Vector (Dashed Olive #516446 with +1.4% safety buffer) -->
<polyline fill="none" points="60,127 130,122 200,107 270,116 340,101 410,88 480,98 550,84 620,74 690,64" stroke="#516446" stroke-dasharray="4 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
<!-- Points & Metrics -->
<circle cx="690" cy="68" fill="#17251C" r="4" stroke="#ffffff" stroke-width="2"></circle>
<circle cx="690" cy="64" fill="#516446" r="3.5" stroke="#ffffff" stroke-width="1.5"></circle>
<!-- Value Callout on latest point -->
<rect fill="#17251C" height="26" rx="2" width="135" x="610" y="24"></rect>
<text fill="#ffffff" font-size="9" font-weight="600" x="618" y="36">Actual: 242 KL</text>
<text fill="#d1e6c1" font-size="8.5" x="618" y="46">Pred: 245.4 KL (+1.4%)</text>
<!-- Grid Horizontal Markers -->
<line stroke="#c3c8c2" stroke-dasharray="2 2" stroke-width="0.6" x1="50" x2="740" y1="40" y2="40"></line>
<line stroke="#c3c8c2" stroke-dasharray="2 2" stroke-width="0.6" x1="50" x2="740" y1="90" y2="90"></line>
<line stroke="#c3c8c2" stroke-dasharray="2 2" stroke-width="0.6" x1="50" x2="740" y1="140" y2="140"></line>
<text fill="#737873" font-size="9" text-anchor="end" x="42" y="44">280 KL</text>
<text fill="#737873" font-size="9" text-anchor="end" x="42" y="94">240 KL</text>
<text fill="#737873" font-size="9" text-anchor="end" x="42" y="144">200 KL</text>
<!-- Time Axis -->
<text fill="#737873" font-size="9" x="60" y="175">15 Sep</text>
<text fill="#737873" font-size="9" x="200" y="175">20 Sep</text>
<text fill="#737873" font-size="9" x="340" y="175">25 Sep</text>
<text fill="#737873" font-size="9" x="480" y="175">30 Sep</text>
<text fill="#737873" font-size="9" x="620" y="175">03 Oct</text>
<text fill="#191d18" font-size="9" font-weight="bold" x="690" y="175">05 Oct</text>
</svg>
</div>
<!-- Error Distribution Breakdown Bar -->
<div class="pt-2 border-t border-outline-variant space-y-1.5">
<div class="flex items-center justify-between text-[11px] font-mono">
<span class="text-on-surface-variant font-semibold uppercase">Calibrated Error Distribution (Last 450 Ingestion Cycles):</span>
<span class="text-secondary font-semibold">Kurtosis: 1.12 // Skew: +0.08</span>
</div>
<div class="w-full h-3 rounded-sm flex overflow-hidden border border-outline-variant/60 text-[9px] font-mono text-center font-bold">
<div class="bg-amber-600/30 text-amber-900 flex items-center justify-center border-r border-outline-variant" style="width: 18%">Under: 18%</div>
<div class="bg-secondary-container text-on-secondary-container flex items-center justify-center border-r border-outline-variant" style="width: 72%">Within ±5% Tolerance: 72% Nominal</div>
<div class="bg-blue-600/20 text-blue-900 flex items-center justify-center" style="width: 10%">Over: 10%</div>
</div>
<div class="flex items-center justify-between text-[10px] font-mono text-outline">
<span>Severe Under-forecasts (>10% deficit): 0 Incidents</span>
<span>Max Absolute Deviation: 4.8 KL</span>
</div>
</div>
</div>
<!-- CARD C: PERFORMANCE MATRICES (Tabs: By Supply Category vs By Strategic Node) -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-4 space-y-3">
<div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-outline-variant gap-2">
<div>
<span class="text-[10px] font-mono text-outline uppercase tracking-wider">STRATIFIED DISAGGREGATION</span>
<h3 class="text-headline-sm font-headline-sm text-primary font-bold">Model Diagnostics Breakdown</h3>
</div>
<!-- Tab Pills -->
<div class="flex items-center bg-surface-container rounded p-0.5 border border-outline-variant text-[11px] font-mono">
<button class="px-2.5 py-1 rounded bg-surface-container-lowest text-primary font-bold shadow-sm border border-outline-variant/40">By Supply Category</button>
<button class="px-2.5 py-1 rounded text-on-surface-variant hover:text-primary">By Strategic Node</button>
</div>
</div>
<!-- Table: By Supply Category -->
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse text-body-sm font-body-sm">
<thead>
<tr class="bg-surface-container border-b-2 border-secondary text-primary font-mono text-[11px] uppercase tracking-wider">
<th class="py-2 px-3">Class & Nomenclature</th>
<th class="py-2 px-2 text-right">Forecasts</th>
<th class="py-2 px-2 text-right">MAPE</th>
<th class="py-2 px-2 text-right">Systemic Bias</th>
<th class="py-2 px-2 text-right">Accuracy</th>
<th class="py-2 px-3 text-center">Status</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/50 font-mono text-[12px]">
<!-- Row 1 -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2.5 px-3">
<div class="font-bold text-primary">Fuel & POL</div>
<div class="text-[10px] text-outline">Class III // Arctic Diesel & Aviation Turbine</div>
</td>
<td class="py-2.5 px-2 text-right font-medium">42</td>
<td class="py-2.5 px-2 text-right text-secondary font-semibold">6.4%</td>
<td class="py-2.5 px-2 text-right text-primary">+0.8%</td>
<td class="py-2.5 px-2 text-right font-bold text-primary">93.6%</td>
<td class="py-2.5 px-3 text-center">
<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-secondary-container/40 text-secondary border border-secondary/30">
                        HEALTHY
                      </span>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2.5 px-3">
<div class="font-bold text-primary">Subsistence Rations</div>
<div class="text-[10px] text-outline">Class I // High-Altitude Cold-Chain & MRE Packets</div>
</td>
<td class="py-2.5 px-2 text-right font-medium">28</td>
<td class="py-2.5 px-2 text-right text-secondary font-semibold">7.2%</td>
<td class="py-2.5 px-2 text-right text-primary">-0.4%</td>
<td class="py-2.5 px-2 text-right font-bold text-primary">92.8%</td>
<td class="py-2.5 px-3 text-center">
<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-secondary-container/40 text-secondary border border-secondary/30">
                        HEALTHY
                      </span>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2.5 px-3">
<div class="font-bold text-primary">Medical Trauma Kits</div>
<div class="text-[10px] text-outline">Class VIII // High-Altitude Pulmonary Edema Modules</div>
</td>
<td class="py-2.5 px-2 text-right font-medium">16</td>
<td class="py-2.5 px-2 text-right text-secondary font-semibold">8.9%</td>
<td class="py-2.5 px-2 text-right text-primary">+1.8%</td>
<td class="py-2.5 px-2 text-right font-bold text-primary">91.1%</td>
<td class="py-2.5 px-3 text-center">
<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-secondary-container/40 text-secondary border border-secondary/30">
                        HEALTHY
                      </span>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2.5 px-3">
<div class="font-bold text-primary">Potable Water Logistics</div>
<div class="text-[10px] text-outline">Class I Insulated // Heated Tanker Distribution</div>
</td>
<td class="py-2.5 px-2 text-right font-medium">14</td>
<td class="py-2.5 px-2 text-right text-secondary font-semibold">8.4%</td>
<td class="py-2.5 px-2 text-right text-primary">-0.6%</td>
<td class="py-2.5 px-2 text-right font-bold text-primary">91.6%</td>
<td class="py-2.5 px-3 text-center">
<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-secondary-container/40 text-secondary border border-secondary/30">
                        HEALTHY
                      </span>
</td>
</tr>
<!-- Row 5 (Review Needed) -->
<tr class="hover:bg-surface-container-low transition-colors bg-amber-500/5">
<td class="py-2.5 px-3">
<div class="font-bold text-amber-900">Vehicle Spare Parts</div>
<div class="text-[10px] text-amber-700">Class IX // Heavy Axles, Track Shoes & Cold-Start Igniters</div>
</td>
<td class="py-2.5 px-2 text-right font-medium">12</td>
<td class="py-2.5 px-2 text-right text-amber-800 font-bold">11.2%</td>
<td class="py-2.5 px-2 text-right text-amber-900 font-bold">+3.4%</td>
<td class="py-2.5 px-2 text-right font-bold text-amber-900">88.8%</td>
<td class="py-2.5 px-3 text-center">
<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-900 border border-amber-500/40">
                        REVIEW NEEDED
                      </span>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Context Alert for Class IX -->
<div class="p-2 rounded bg-surface-container-low border border-outline-variant flex items-center justify-between text-[11px] font-mono">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[15px] text-amber-700">info</span>
<span class="text-on-surface-variant">Class IX high variance attributed to unplanned convoy refits during Khardung La early freeze.</span>
</div>
<button class="px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant text-primary text-[10px] font-bold">
                Inspect Anomalies
              </button>
</div>
</div>
</div>
<!-- RIGHT COLUMN: GOVERNANCE, COMPARISON & DRIFT DIAGNOSTICS (~35% -> 4 columns) -->
<div class="lg:col-span-4 space-y-5">
<!-- CARD 1: MODEL ASSESSMENT & OPERATIONAL TRUST DOSSIER -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-4 space-y-3">
<div class="border-b border-outline-variant pb-2">
<span class="text-[10px] font-mono text-outline uppercase tracking-wider">COMMAND DIRECTIVE SUITABILITY</span>
<h3 class="text-headline-sm font-headline-sm text-primary font-bold">Operational Trust Dossier</h3>
</div>
<div class="space-y-2">
<!-- Tactical Replenishment -->
<div class="p-2.5 rounded bg-surface-container-low border border-outline-variant space-y-1">
<div class="flex items-center justify-between">
<span class="text-label-sm font-label-sm font-bold text-primary">Tactical Replenishment (RL-14)</span>
<span class="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-secondary-container text-on-secondary-container">
                    HIGH TRUST
                  </span>
</div>
<p class="text-[11px] text-on-surface-variant">Fully certified for automated order drafting. 7-14 day variance safely cushioned by baseline stock.</p>
</div>
<!-- Convoy Load Dispatch -->
<div class="p-2.5 rounded bg-surface-container-low border border-outline-variant space-y-1">
<div class="flex items-center justify-between">
<span class="text-label-sm font-label-sm font-bold text-primary">Convoy Load Dispatch (RL-08)</span>
<span class="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-secondary-container text-on-secondary-container">
                    HIGH TRUST
                  </span>
</div>
<p class="text-[11px] text-on-surface-variant">Payload tonnage calculations bounded by 90% uncertainty envelope. Zero pass-closure overflows reported.</p>
</div>
<!-- Strategic Procurement -->
<div class="p-2.5 rounded bg-surface-container-low border border-outline-variant space-y-1">
<div class="flex items-center justify-between">
<span class="text-label-sm font-label-sm font-bold text-primary">Strategic Procurement (>60D)</span>
<span class="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-900 border border-amber-500/30">
                    MODERATE TRUST
                  </span>
</div>
<p class="text-[11px] text-on-surface-variant">Manual Quartermaster review recommended for horizons exceeding 60D due to seasonal shift uncertainty.</p>
</div>
</div>
<!-- Model Architecture Card -->
<div class="p-2.5 rounded bg-surface-container border border-outline-variant/80 text-[11px] font-mono space-y-1">
<div class="text-[10px] uppercase text-outline font-bold">Input Feature Embeddings:</div>
<ul class="list-disc list-inside text-on-surface-variant space-y-0.5 text-[10.5px]">
<li>30D Historical Rolling Consumption Vector</li>
<li>Meteorological Sub-zero Ambient Telemetry (-22°C)</li>
<li>Convoy Schedule Matrix & Pass Traffic Flow</li>
<li>Elevation Viscosity Drag Coefficient (3,500m MSL)</li>
</ul>
</div>
</div>
<!-- CARD 2: MULTI-MODEL BENCHMARKING (Production vs Shadow) -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-4 space-y-3">
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<div>
<span class="text-[10px] font-mono text-outline uppercase tracking-wider">CHALLENGER BENCHMARKING</span>
<h3 class="text-headline-sm font-headline-sm text-primary font-bold">Production vs Shadow Models</h3>
</div>
<span class="material-symbols-outlined text-[18px] text-secondary">compare_arrows</span>
</div>
<div class="space-y-2 font-mono text-[11px]">
<!-- Model 1 (Active) -->
<div class="p-2.5 rounded bg-secondary/10 border-2 border-secondary space-y-1.5">
<div class="flex items-center justify-between">
<span class="font-bold text-primary">DemandModel v2.4 (Bi-LSTM)</span>
<span class="text-[9px] bg-secondary text-on-primary px-1.5 py-0.2 rounded font-bold">ACTIVE</span>
</div>
<div class="grid grid-cols-4 gap-1 text-[10px] text-center pt-1 border-t border-outline-variant/40">
<div><span class="block text-outline">MAPE</span><strong class="text-secondary font-bold">7.8%</strong></div>
<div><span class="block text-outline">BIAS</span><strong class="text-primary">+1.4%</strong></div>
<div><span class="block text-outline">COVER</span><strong>94%</strong></div>
<div><span class="block text-outline">LATENCY</span><strong>22ms</strong></div>
</div>
</div>
<!-- Model 2 (Standby) -->
<div class="p-2.5 rounded bg-surface-container-low border border-outline-variant space-y-1.5">
<div class="flex items-center justify-between">
<span class="font-bold text-on-surface">SeasonalModel v1.9 (Holt-Winters)</span>
<span class="text-[9px] bg-surface-container text-outline px-1.5 py-0.2 rounded font-bold border border-outline-variant">STANDBY</span>
</div>
<div class="grid grid-cols-4 gap-1 text-[10px] text-center pt-1 border-t border-outline-variant/40">
<div><span class="block text-outline">MAPE</span><strong class="text-primary font-bold">9.2%</strong></div>
<div><span class="block text-outline">BIAS</span><strong class="text-primary">-0.8%</strong></div>
<div><span class="block text-outline">COVER</span><strong>89%</strong></div>
<div><span class="block text-outline">LATENCY</span><strong>8ms</strong></div>
</div>
</div>
<!-- Model 3 (Baseline) -->
<div class="p-2.5 rounded bg-surface-container-low border border-outline-variant space-y-1.5 opacity-80">
<div class="flex items-center justify-between">
<span class="font-bold text-on-surface">Uniform Moving Avg (30D Uniform)</span>
<span class="text-[9px] bg-surface-container text-outline px-1.5 py-0.2 rounded font-bold border border-outline-variant">BENCHMARK</span>
</div>
<div class="grid grid-cols-4 gap-1 text-[10px] text-center pt-1 border-t border-outline-variant/40">
<div><span class="block text-outline">MAPE</span><strong class="text-amber-800 font-bold">13.6%</strong></div>
<div><span class="block text-outline">BIAS</span><strong class="text-primary">+3.2%</strong></div>
<div><span class="block text-outline">COVER</span><strong>100%</strong></div>
<div><span class="block text-outline">LATENCY</span><strong>1ms</strong></div>
</div>
</div>
</div>
<!-- Actions -->
<div class="pt-1 flex items-center gap-2">
<button class="flex-1 h-7 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant text-[11px] font-mono font-semibold text-primary transition-colors">
                Run Differential Backtest
              </button>
<button class="h-7 px-2 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant text-[11px] font-mono text-outline transition-colors">
                Registry
              </button>
</div>
</div>
<!-- CARD 3: DRIFT TELEMETRY & RETRAINING TRIGGER MONITOR -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-4 space-y-3">
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<div>
<span class="text-[10px] font-mono text-outline uppercase tracking-wider">STATISTICAL DRIFT ENGINE</span>
<h3 class="text-headline-sm font-headline-sm text-primary font-bold">Data & Feature Drift</h3>
</div>
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-secondary-container text-on-secondary-container">
                NORMAL
              </span>
</div>
<div class="space-y-2 text-[11px] font-mono">
<!-- Feature Drift -->
<div class="space-y-1">
<div class="flex justify-between">
<span class="text-on-surface-variant">Feature Drift Index (PSI)</span>
<span class="font-bold text-secondary">0.06 / 0.20 Threshold</span>
</div>
<div class="w-full bg-surface-container rounded-sm h-1.5 overflow-hidden">
<div class="bg-secondary h-1.5 rounded-sm" style="width: 30%"></div>
</div>
</div>
<!-- Label/Target Drift -->
<div class="space-y-1">
<div class="flex justify-between">
<span class="text-on-surface-variant">Target Demand Drift</span>
<span class="font-bold text-amber-700">0.09 / 0.20 (Seasonal Transition)</span>
</div>
<div class="w-full bg-surface-container rounded-sm h-1.5 overflow-hidden">
<div class="bg-amber-600 h-1.5 rounded-sm" style="width: 45%"></div>
</div>
</div>
<!-- Covariate Shift -->
<div class="space-y-1">
<div class="flex justify-between">
<span class="text-on-surface-variant">Covariate Shift (Weather / Met-Office)</span>
<span class="font-bold text-secondary">0.08 / 0.25 (Sub-Zero Transition)</span>
</div>
<div class="w-full bg-surface-container rounded-sm h-1.5 overflow-hidden">
<div class="bg-secondary h-1.5 rounded-sm" style="width: 32%"></div>
</div>
</div>
</div>
<!-- Retraining Policy Rule Box -->
<div class="p-2.5 rounded bg-surface-container-low border border-outline-variant text-[11px] font-mono space-y-1">
<div class="text-[10px] uppercase text-outline font-bold flex items-center justify-between">
<span>Retraining Automation Policy:</span>
<span class="text-secondary font-bold">NOMINAL</span>
</div>
<p class="text-on-surface-variant text-[10.5px]">Automatic retraining job queued if 14-day rolling MAPE > 10.0% OR Population Stability Index > 0.20.</p>
<div class="pt-1 flex items-center justify-between text-[10px] text-outline border-t border-outline-variant/60">
<span>Next Scheduled Checkpoint:</span>
<span class="font-bold text-primary">07 Oct 2026 02:00 IST</span>
</div>
</div>
</div>
<!-- CARD 4: AUDIT TRAIL & CRYPTOGRAPHIC PROVENANCE -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-4 space-y-2.5">
<div class="border-b border-outline-variant pb-2 flex items-center justify-between">
<div>
<span class="text-[10px] font-mono text-outline uppercase tracking-wider">IMMUTABLE LEDGER</span>
<h3 class="text-headline-sm font-headline-sm text-primary font-bold">Audit Trail & Verification</h3>
</div>
<span class="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
</div>
<div class="space-y-2 text-[11px] font-mono text-on-surface-variant">
<div class="p-2 rounded bg-surface-container-low border border-outline-variant space-y-0.5">
<div class="flex items-center justify-between text-[10px]">
<span class="text-primary font-bold">05 Oct 19:43 IST</span>
<span class="text-secondary font-semibold">PASS</span>
</div>
<div class="text-on-surface">Forecast generation FV-2026-10-05-03 evaluated against telemetry.</div>
</div>
<div class="p-2 rounded bg-surface-container-low border border-outline-variant space-y-0.5">
<div class="flex items-center justify-between text-[10px]">
<span class="text-primary font-bold">05 Oct 18:10 IST</span>
<span class="text-secondary font-semibold">COMPLETE</span>
</div>
<div class="text-on-surface">Automated continuous backtest executed on 1,842 forward records.</div>
</div>
<div class="p-2 rounded bg-surface-container-low border border-outline-variant space-y-0.5">
<div class="flex items-center justify-between text-[10px]">
<span class="text-primary font-bold">04 Oct 23:40 IST</span>
<span class="text-secondary-fixed-variant font-bold">PROMOTED</span>
</div>
<div class="text-on-surface">DemandModel v2.4 promoted to ACTIVE by Chief ML Officer Lt. Col. V. Sharma.</div>
</div>
</div>
<div class="pt-1 text-[10px] font-mono text-outline flex items-center justify-between">
<span>SHA-256: 9e3f88...42a1b9</span>
<span>NODE: LEH-HQ-01</span>
</div>
</div>
</div>
</div>
<!-- INSTITUTIONAL FOOTER -->
<footer class="mt-8 pt-4 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-on-surface-variant gap-3">
<div class="flex items-center gap-2">
<span class="font-bold text-primary">RAKSHAKLOGIX DEFENCE SYSTEM</span>
<span>//</span>
<span>MIL-STD-188F INTEROPERABLE</span>
<span>//</span>
<span>HARDWARE TOKEN SYNCHRONIZED</span>
</div>
<div class="flex items-center gap-3 text-outline">
<span>CLASSIFICATION: RESTRICTED // MIL-LOG-OPS</span>
<span>ENC-KEY: AES-256 GCM</span>
<span>SYSTEM RUNTIME: 99.98%</span>
</div>
</footer>
</main>`;
