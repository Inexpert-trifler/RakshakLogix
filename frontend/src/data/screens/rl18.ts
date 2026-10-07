// Screen: RL-18 — Demand Forecasting Dashboard
// Route: /forecasting
export const rl18Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto min-h-screen bg-background pb-12">
<div class="px-6 py-5 max-w-[1680px] mx-auto space-y-4">
<!-- ===================================================================== -->
<!-- 2. HEADER & CONTROL STRIP -->
<!-- ===================================================================== -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-4 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
<!-- Title & Subtitle -->
<div>
<div class="flex items-center gap-3">
<h1 class="text-headline-sm font-headline-sm text-primary font-bold tracking-tight">Demand Forecasting</h1>
<span class="px-2 py-0.5 bg-secondary/15 text-primary text-label-xs font-mono font-bold border border-secondary/40 rounded">
              RL-18 OPERATIONAL DEPLOYMENT
            </span>
</div>
<p class="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
            Predict future consumption across locations and inventory categories to support proactive logistics planning.
          </p>
</div>
<!-- Filter & Parameter Controls -->
<div class="flex flex-wrap items-center gap-2.5">
<!-- Horizon Selector -->
<div class="flex items-center bg-surface-container p-0.5 rounded border border-outline-variant text-label-xs font-label-xs">
<button class="px-2.5 py-1 text-on-surface-variant hover:text-on-surface">7 Days</button>
<button class="px-2.5 py-1 bg-primary text-on-primary font-bold rounded shadow-sm">14 Days [Active]</button>
<button class="px-2.5 py-1 text-on-surface-variant hover:text-on-surface">30 Days</button>
<button class="px-2.5 py-1 text-on-surface-variant hover:text-on-surface">60 Days</button>
<button class="px-2.5 py-1 text-on-surface-variant hover:text-on-surface">90 Days</button>
</div>
<!-- Location Selector -->
<div class="relative">
<select class="h-8 pl-2.5 pr-7 bg-surface-container-lowest border border-outline-variant rounded text-label-sm font-label-sm text-on-surface focus:border-primary focus:ring-0">
<option selected="">Sector IV-B // Northern Hubs</option>
<option>Sector III // Western Approaches</option>
<option>Sector I // Eastern Theater</option>
<option>Central Command Reserve Depots</option>
</select>
</div>
<!-- Category Selector -->
<div class="relative">
<select class="h-8 pl-2.5 pr-7 bg-surface-container-lowest border border-outline-variant rounded text-label-sm font-label-sm text-on-surface focus:border-primary focus:ring-0">
<option selected="">All Classes (POL, Subs, Med)</option>
<option>Class III: POL (Petroleum, Oils, Lubricants)</option>
<option>Class I: Subsistence Rations</option>
<option>Class VIII: Medical Logistics</option>
<option>Class II: Winter General Stores</option>
</select>
</div>
<!-- Model Version Tag -->
<div class="flex items-center gap-1.5 px-2.5 py-1 bg-surface-container border border-outline-variant rounded text-label-xs font-mono text-on-surface-variant" title="Active Checkpoint">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>FV-2026-10-05-02</span>
</div>
<!-- Primary Trigger Button -->
<button class="h-8 px-3.5 bg-primary-container hover:bg-secondary text-on-primary text-label-sm font-label-sm font-semibold rounded border border-primary transition-colors flex items-center gap-1.5">
<span class="material-symbols-outlined text-sm">auto_graph</span>
<span>+ Generate Forecast</span>
</button>
</div>
</div>
<!-- ===================================================================== -->
<!-- 3. OPERATIONAL FORECAST STATUS STRIP (5 Compact Metrics) -->
<!-- ===================================================================== -->
<div class="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-3">
<!-- Metric 1: Forecast Coverage -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs text-on-surface-variant uppercase tracking-wider">Forecast Coverage</span>
<span class="material-symbols-outlined text-sm text-secondary">verified</span>
</div>
<div class="mt-2 flex items-baseline gap-1.5">
<span class="text-headline-lg font-headline-lg font-bold text-primary font-mono">94%</span>
<span class="text-label-xs font-label-xs text-secondary font-medium">Nominal Target</span>
</div>
<p class="mt-1 text-[11px] text-on-surface-variant leading-tight">Monitored SKUs covered by active neural models</p>
</div>
<!-- Metric 2: High Demand Risk -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs text-error uppercase tracking-wider font-bold">High Demand Risk</span>
<span class="material-symbols-outlined text-sm text-error">warning</span>
</div>
<div class="mt-2 flex items-baseline gap-1.5">
<span class="text-headline-lg font-headline-lg font-bold text-error font-mono">14</span>
<span class="text-label-xs font-label-xs text-error font-medium">Critical Nodes</span>
</div>
<p class="mt-1 text-[11px] text-on-surface-variant leading-tight">Formations &amp; SKUs facing surge &gt; 15%</p>
</div>
<!-- Metric 3: Forecast Confidence -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs text-on-surface-variant uppercase tracking-wider">Forecast Confidence</span>
<span class="material-symbols-outlined text-sm text-secondary">model_training</span>
</div>
<div class="mt-2 flex items-baseline gap-1.5">
<span class="text-headline-lg font-headline-lg font-bold text-primary font-mono">91%</span>
<span class="text-label-xs font-label-xs text-secondary font-mono">+1.2% RL-17</span>
</div>
<p class="mt-1 text-[11px] text-on-surface-variant leading-tight">Historical consumption data quality backed</p>
</div>
<!-- Metric 4: Locations Forecasted -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs text-on-surface-variant uppercase tracking-wider">Locations Forecasted</span>
<span class="material-symbols-outlined text-sm text-on-surface-variant">location_on</span>
</div>
<div class="mt-2 flex items-baseline gap-1.5">
<span class="text-headline-lg font-headline-lg font-bold text-primary font-mono">28</span>
<span class="text-label-xs font-label-xs text-on-surface-variant font-mono">Active Nodes</span>
</div>
<p class="mt-1 text-[11px] text-on-surface-variant leading-tight">Field Depots &amp; high-altitude Forward Posts</p>
</div>
<!-- Metric 5: Next Run -->
<div class="bg-surface-container-lowest border border-outline-variant p-3 rounded flex flex-col justify-between col-span-2 sm:col-span-1">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs text-on-surface-variant uppercase tracking-wider">Next Run Scheduled</span>
<span class="material-symbols-outlined text-sm text-on-surface-variant">schedule</span>
</div>
<div class="mt-2 flex items-baseline gap-1.5">
<span class="text-headline-sm font-headline-sm font-bold text-primary font-mono">06 Oct · 06:00</span>
<span class="text-label-xs font-label-xs text-secondary font-mono">T-15h 20m</span>
</div>
<p class="mt-1 text-[11px] text-on-surface-variant leading-tight">Daily operational recalculation cycle</p>
</div>
</div>
<!-- ===================================================================== -->
<!-- CORE WORKSPACE 2-COLUMN SPLIT (CHART + TABLE vs DOSSIER) -->
<!-- ===================================================================== -->
<div class="grid grid-cols-1 xl:grid-cols-12 gap-4">
<!-- LEFT COLUMN: 8 COLS (Chart & High-Demand Items Queue) -->
<div class="xl:col-span-8 space-y-4">
<!-- ================================================================= -->
<!-- 4. MAIN DEMAND FORECAST CHART & VISUAL VECTOR -->
<!-- ================================================================= -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-4">
<!-- Chart Header & Focus SKU Selector -->
<div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-outline-variant gap-2">
<div>
<div class="flex items-center gap-2">
<span class="w-2.5 h-2.5 rounded-sm bg-secondary"></span>
<span class="text-label-sm font-label-sm text-primary uppercase tracking-wide font-bold">Primary Vector: POL Arctic Diesel (FUEL-001) // Class III</span>
</div>
<div class="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
                  Deployment at <strong class="text-primary">Forward Post Alpha (LOC-0042)</strong> · Sector IV-B North
                </div>
</div>
<!-- Telemetry Pills -->
<div class="flex flex-wrap items-center gap-2">
<div class="px-2 py-1 bg-surface-container rounded border border-outline-variant text-label-xs font-mono">
<span class="text-on-surface-variant">Current Avg:</span> <strong class="text-primary">612 L/day</strong>
</div>
<div class="px-2 py-1 bg-secondary-container/40 rounded border border-secondary/40 text-label-xs font-mono">
<span class="text-on-secondary-container">Forecast Avg:</span> <strong class="text-secondary font-bold">720 L/day (+17.6%)</strong>
</div>
<div class="px-2 py-1 bg-surface-container rounded border border-outline-variant text-label-xs font-mono">
<span class="text-on-surface-variant">Confidence:</span> <strong class="text-secondary">91%</strong>
</div>
<div class="px-2 py-1 bg-surface-container rounded border border-outline-variant text-label-xs font-mono">
<span class="text-on-surface-variant">Model:</span> <strong class="text-primary">LSTM-M4 (v2.4)</strong>
</div>
</div>
</div>
<!-- Vector SVG Chart Canvas -->
<div class="pt-4 pb-2">
<div class="w-full h-64 relative">
<!-- SVG Vector Rendering -->
<svg class="w-full h-full" preserveaspectratio="none" viewbox="0 0 800 240">
<!-- Grid Guidelines -->
<line stroke="#E5E3D9" stroke-dasharray="3 3" stroke-width="1" x1="40" x2="780" y1="30" y2="30"></line>
<line stroke="#E5E3D9" stroke-dasharray="3 3" stroke-width="1" x1="40" x2="780" y1="80" y2="80"></line>
<line stroke="#E5E3D9" stroke-dasharray="3 3" stroke-width="1" x1="40" x2="780" y1="130" y2="130"></line>
<line stroke="#E5E3D9" stroke-dasharray="3 3" stroke-width="1" x1="40" x2="780" y1="180" y2="180"></line>
<!-- Y-Axis Labels -->
<text fill="#737873" font-family="IBM Plex Mono" font-size="10" text-anchor="end" x="35" y="34">800 L</text>
<text fill="#737873" font-family="IBM Plex Mono" font-size="10" text-anchor="end" x="35" y="84">700 L</text>
<text fill="#737873" font-family="IBM Plex Mono" font-size="10" text-anchor="end" x="35" y="134">600 L</text>
<text fill="#737873" font-family="IBM Plex Mono" font-size="10" text-anchor="end" x="35" y="184">500 L</text>
<!-- Forecast Confidence Shaded Band (from x=360 to x=760) -->
<!-- High line: 790 L -> y = 35. Low line: 650 L -> y = 105 -->
<polygon fill="#516446" fill-opacity="0.12" points="
                    360,125 
                    420,105 480,95 540,75 600,65 660,55 720,45 760,40
                    760,95 720,105 660,115 600,120 540,128 480,132 420,135
                    360,125"></polygon>
<!-- Historical Curve (Solid Deep Army Olive #3F5135) -->
<!-- Points: 29 Sep(60), 30 Sep(110), 01 Oct(160), 02 Oct(210 Surge), 03 Oct(260), 04 Oct(310), 05 Oct(360 Today) -->
<polyline fill="none" points="
                    60,132 
                    110,128 
                    160,130 
                    210,88 
                    260,126 
                    310,124 
                    360,125" stroke="#3F5135" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></polyline>
<!-- Forecast Curve (Dashed Forest Green #17251C with upward trajectory) -->
<polyline fill="none" points="
                    360,125 
                    420,118 
                    480,110 
                    540,98 
                    600,90 
                    660,82 
                    720,72 
                    760,68" stroke="#17251C" stroke-dasharray="5 4" stroke-linecap="round" stroke-width="2.5"></polyline>
<!-- Data Markers Historical -->
<circle cx="60" cy="132" fill="#3F5135" r="3"></circle>
<circle cx="110" cy="128" fill="#3F5135" r="3"></circle>
<circle cx="160" cy="130" fill="#3F5135" r="3"></circle>
<!-- Oct 02 Anomaly / Surge Marker -->
<circle cx="210" cy="88" fill="#ba1a1a" r="4.5" stroke="#ffffff" stroke-width="1.5"></circle>
<circle cx="260" cy="126" fill="#3F5135" r="3"></circle>
<circle cx="310" cy="124" fill="#3F5135" r="3"></circle>
<circle cx="360" cy="125" fill="#17251C" r="4" stroke="#ffffff" stroke-width="1.5"></circle>
<!-- Projected End Point Marker -->
<circle cx="760" cy="68" fill="#17251C" r="4.5" stroke="#516446" stroke-width="2"></circle>
<!-- Vertical Partition Line: 05 Oct (Today / Cutover) -->
<line stroke="#17251C" stroke-dasharray="2 2" stroke-width="1.5" x1="360" x2="360" y1="20" y2="200"></line>
</svg>
<!-- Annotation Badges Anchored Onto Canvas -->
<!-- Anomaly Callout -->
<div class="absolute top-[36px] left-[200px] -translate-x-1/2 bg-surface-container-lowest border border-error/40 px-2 py-0.5 rounded shadow-sm flex items-center gap-1 text-[10px] font-mono text-error font-semibold">
<span>02 Oct Surge (Reg. RL-16)</span>
</div>
<!-- Today Marker Callout -->
<div class="absolute top-[12px] left-[360px] -translate-x-1/2 bg-primary text-on-primary px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider">
                  TODAY · 05 OCT
                </div>
<!-- Projected Vector Callout -->
<div class="absolute top-[28px] right-[40px] bg-secondary-container text-on-primary-container border border-secondary px-2.5 py-1 rounded text-right shadow-sm">
<div class="text-[10px] font-mono font-bold text-primary">Peak: 760 L/day (+24.1%)</div>
<div class="text-[9px] font-mono text-on-secondary-container">19 Oct Confidence: 650–790 L</div>
</div>
</div>
<!-- Time Horizon Axis Labels -->
<div class="flex items-center justify-between text-[11px] font-mono text-on-surface-variant pt-2 border-t border-outline-variant/60 px-4">
<div class="flex gap-10">
<span>29 Sep</span>
<span>30 Sep</span>
<span>01 Oct</span>
<span class="text-error font-semibold">02 Oct (Spike)</span>
<span>03 Oct</span>
<span>04 Oct</span>
</div>
<div class="font-bold text-primary">05 Oct [Synchronized]</div>
<div class="flex gap-10 text-secondary font-semibold">
<span>07 Oct</span>
<span>09 Oct</span>
<span>11 Oct (Critical)</span>
<span>14 Oct</span>
<span>17 Oct</span>
<span>19 Oct</span>
</div>
</div>
<!-- Chart Sub-Legend -->
<div class="flex flex-wrap items-center justify-between mt-3 pt-3 border-t border-outline-variant/30 text-label-xs font-label-xs text-on-surface-variant">
<div class="flex items-center gap-5">
<div class="flex items-center gap-1.5">
<span class="w-4 h-0.5 bg-[#3F5135]"></span>
<span>Historical Actuals (Cleaned)</span>
</div>
<div class="flex items-center gap-1.5">
<span class="w-4 h-0.5 border-t-2 border-dashed border-primary"></span>
<span class="font-semibold text-primary">Forecast Vector (+17.6%)</span>
</div>
<div class="flex items-center gap-1.5">
<span class="w-3.5 h-2.5 bg-secondary/20 border border-secondary/40 rounded-xs"></span>
<span>90% Confidence Interval</span>
</div>
</div>
<span class="font-mono text-[10px]">INFERENCE LATENCY: 22ms · SEED #4412</span>
</div>
</div>
</div>
<!-- ================================================================= -->
<!-- 5. HIGH-DEMAND ITEMS QUEUE & PRIORITIZED TABLE -->
<!-- ================================================================= -->
<div class="bg-surface-container-lowest border border-outline-variant rounded">
<!-- Table Header Strip -->
<div class="px-4 py-3 border-b border-outline-variant flex items-center justify-between">
<div>
<h3 class="text-label-md font-label-md text-primary font-bold uppercase tracking-wide">High-Demand Items Queue &amp; Prioritized Action</h3>
<p class="text-body-sm font-body-sm text-on-surface-variant">Ranked by expected percentage surge, consumption velocity, and downstream stockout urgency.</p>
</div>
<div class="flex items-center gap-2">
<span class="text-label-xs font-mono px-2 py-0.5 bg-surface-container border border-outline-variant rounded text-on-surface-variant">
                  5 SKUs flagged for immediate intervention
                </span>
</div>
</div>
<!-- Table Component -->
<div class="overflow-x-auto">
<table class="w-full text-left text-body-sm font-body-sm">
<thead class="bg-surface-container text-label-sm font-label-sm uppercase text-primary border-b border-secondary/40">
<tr>
<th class="py-2.5 px-4 font-semibold">SKU / Item</th>
<th class="py-2.5 px-4 font-semibold">Location Node</th>
<th class="py-2.5 px-4 font-semibold text-right">Current Avg</th>
<th class="py-2.5 px-4 font-semibold text-right">Forecast Avg</th>
<th class="py-2.5 px-4 font-semibold text-right">Expected Shift</th>
<th class="py-2.5 px-4 font-semibold text-center">Confidence</th>
<th class="py-2.5 px-4 font-semibold">Stockout Risk</th>
<th class="py-2.5 px-4 font-semibold text-center">Action</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<!-- Row 1: Diesel [Selected Row] -->
<tr class="bg-surface-container-low/70 border-l-4 border-l-primary hover:bg-surface-container-high/60 transition-colors">
<td class="py-3 px-4 font-mono font-medium text-primary">
<div class="font-bold">Diesel (FUEL-001)</div>
<div class="text-[10px] text-on-surface-variant">Class III Arctic Grade</div>
</td>
<td class="py-3 px-4">
<div class="font-semibold text-on-surface">Forward Post Alpha</div>
<div class="text-[10px] font-mono text-on-surface-variant">LOC-0042 // Sec IV-B</div>
</td>
<td class="py-3 px-4 font-mono text-right text-on-surface-variant">612 L/d</td>
<td class="py-3 px-4 font-mono text-right font-bold text-primary">720 L/d</td>
<td class="py-3 px-4 font-mono text-right font-bold text-error">+17.6%</td>
<td class="py-3 px-4 text-center">
<span class="px-1.5 py-0.5 rounded text-[11px] font-mono bg-secondary-container text-on-secondary-container font-semibold">91%</span>
</td>
<td class="py-3 px-4">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-xs font-mono bg-error-container text-on-error-container border border-error/30 font-bold">
<span class="w-1.5 h-1.5 rounded-full bg-error"></span>
                        High (5.8d)
                      </span>
</td>
<td class="py-3 px-4 text-center">
<button class="px-2.5 py-1 bg-primary text-on-primary text-label-xs font-label-xs rounded font-bold hover:bg-secondary transition-colors">
                        Selected
                      </button>
</td>
</tr>
<!-- Row 2: Potable Water -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-3 px-4 font-mono font-medium text-primary">
<div class="font-bold">Potable Water (WTR-012)</div>
<div class="text-[10px] text-on-surface-variant">Class I Insulated Storage</div>
</td>
<td class="py-3 px-4">
<div class="font-semibold text-on-surface">Forward Post Bravo</div>
<div class="text-[10px] font-mono text-on-surface-variant">LOC-0045 // Sec IV-B</div>
</td>
<td class="py-3 px-4 font-mono text-right text-on-surface-variant">410 L/d</td>
<td class="py-3 px-4 font-mono text-right font-bold text-primary">468 L/d</td>
<td class="py-3 px-4 font-mono text-right font-bold text-secondary">+14.1%</td>
<td class="py-3 px-4 text-center">
<span class="px-1.5 py-0.5 rounded text-[11px] font-mono bg-surface-container text-on-surface-variant font-semibold">88%</span>
</td>
<td class="py-3 px-4">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-xs font-mono bg-surface-container-high text-on-surface-variant border border-outline-variant font-medium">
                        Med (8.2d)
                      </span>
</td>
<td class="py-3 px-4 text-center">
<button class="px-2 py-1 text-primary hover:bg-surface-container text-label-xs font-label-xs border border-outline-variant rounded transition-colors">
                        View Dossier
                      </button>
</td>
</tr>
<!-- Row 3: Winter Rations -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-3 px-4 font-mono font-medium text-primary">
<div class="font-bold">Winter Rations (RAT-104)</div>
<div class="text-[10px] text-on-surface-variant">Class I High-Calorie Pack</div>
</td>
<td class="py-3 px-4">
<div class="font-semibold text-on-surface">Supply Point Delta</div>
<div class="text-[10px] font-mono text-on-surface-variant">LOC-0089 // Transit Post</div>
</td>
<td class="py-3 px-4 font-mono text-right text-on-surface-variant">280 pks/d</td>
<td class="py-3 px-4 font-mono text-right font-bold text-primary">319 pks/d</td>
<td class="py-3 px-4 font-mono text-right font-bold text-secondary">+13.9%</td>
<td class="py-3 px-4 text-center">
<span class="px-1.5 py-0.5 rounded text-[11px] font-mono bg-secondary-container text-on-secondary-container font-semibold">94%</span>
</td>
<td class="py-3 px-4">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-xs font-mono bg-surface-container-high text-on-surface-variant border border-outline-variant font-medium">
                        Med (11.4d)
                      </span>
</td>
<td class="py-3 px-4 text-center">
<button class="px-2 py-1 text-primary hover:bg-surface-container text-label-xs font-label-xs border border-outline-variant rounded transition-colors">
                        View Dossier
                      </button>
</td>
</tr>
<!-- Row 4: Hypothermia Kits -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-3 px-4 font-mono font-medium text-primary">
<div class="font-bold">Hypothermia Kits (MED-8890)</div>
<div class="text-[10px] text-on-surface-variant">Class VIII Thermal Shock Packs</div>
</td>
<td class="py-3 px-4">
<div class="font-semibold text-on-surface">Post Charlie</div>
<div class="text-[10px] font-mono text-on-surface-variant">LOC-0051 // Sector Ridge</div>
</td>
<td class="py-3 px-4 font-mono text-right text-on-surface-variant">14 kits/d</td>
<td class="py-3 px-4 font-mono text-right font-bold text-error">22 kits/d</td>
<td class="py-3 px-4 font-mono text-right font-bold text-error">+57.1%</td>
<td class="py-3 px-4 text-center">
<span class="px-1.5 py-0.5 rounded text-[11px] font-mono bg-surface-variant text-on-surface-variant font-semibold">79%</span>
</td>
<td class="py-3 px-4">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-xs font-mono bg-error-container text-on-error-container border border-error/30 font-bold">
<span class="w-1.5 h-1.5 rounded-full bg-error"></span>
                        High (3.1d)
                      </span>
</td>
<td class="py-3 px-4 text-center">
<button class="px-2 py-1 text-primary hover:bg-surface-container text-label-xs font-label-xs border border-outline-variant rounded transition-colors">
                        View Dossier
                      </button>
</td>
</tr>
<!-- Row 5: Sub-Zero Synthetic Lube -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-3 px-4 font-mono font-medium text-primary">
<div class="font-bold">Sub-Zero Synth Lube (LUB-884)</div>
<div class="text-[10px] text-on-surface-variant">Class III-A Tank Mechanics</div>
</td>
<td class="py-3 px-4">
<div class="font-semibold text-on-surface">Khardung Pass Depot</div>
<div class="text-[10px] font-mono text-on-surface-variant">DEP-0012 // High Altitude</div>
</td>
<td class="py-3 px-4 font-mono text-right text-on-surface-variant">42 can/d</td>
<td class="py-3 px-4 font-mono text-right font-bold text-primary">48 can/d</td>
<td class="py-3 px-4 font-mono text-right font-bold text-secondary">+14.3%</td>
<td class="py-3 px-4 text-center">
<span class="px-1.5 py-0.5 rounded text-[11px] font-mono bg-secondary-container text-on-secondary-container font-semibold">92%</span>
</td>
<td class="py-3 px-4">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-xs font-mono bg-surface-container text-secondary border border-outline-variant font-medium">
                        Low (18.0d)
                      </span>
</td>
<td class="py-3 px-4 text-center">
<button class="px-2 py-1 text-primary hover:bg-surface-container text-label-xs font-label-xs border border-outline-variant rounded transition-colors">
                        View Dossier
                      </button>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Table Footer -->
<div class="p-3 border-t border-outline-variant flex items-center justify-between text-label-xs font-mono text-on-surface-variant">
<span>SHOWING 5 OF 14 CRITICAL FLAGGED ITEMS</span>
<div class="flex items-center gap-2">
<button class="px-2 py-1 border border-outline-variant rounded hover:bg-surface-container">Previous</button>
<span class="px-2">Page 1 of 3</span>
<button class="px-2 py-1 border border-outline-variant rounded hover:bg-surface-container">Next</button>
</div>
</div>
</div>
</div>
<!-- RIGHT COLUMN: 4 COLS (Selected Demand Dossier & Downstream Impact Bridge) -->
<div class="xl:col-span-4 space-y-4">
<!-- ================================================================= -->
<!-- 6. SELECTED DEMAND DOSSIER & DOWNSTREAM IMPACT BRIDGE -->
<!-- ================================================================= -->
<div class="bg-surface-container-lowest border border-outline-variant rounded divide-y divide-outline-variant">
<!-- Dossier Header -->
<div class="p-4 bg-surface-container-low">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs uppercase font-bold text-secondary tracking-wider">Demand Dossier &amp; Causality</span>
<span class="text-label-xs font-mono px-2 py-0.5 rounded bg-primary-container text-on-primary">NODE LOC-0042</span>
</div>
<h2 class="text-headline-sm font-headline-sm text-primary font-bold mt-1">POL Arctic Diesel</h2>
<div class="flex items-center gap-2 mt-1 text-body-sm font-body-sm text-on-surface-variant">
<span>SKU: <strong class="text-primary font-mono">FUEL-001</strong></span>
<span>·</span>
<span>Location: <strong class="text-primary">Forward Post Alpha</strong></span>
</div>
</div>
<!-- Explainable Demand Drivers -->
<div class="p-4 space-y-3">
<div class="text-label-sm font-label-sm text-primary uppercase font-bold tracking-wider flex items-center gap-1.5">
<span class="material-symbols-outlined text-sm text-secondary">psychology</span>
                Explainable Demand Drivers
              </div>
<!-- Driver 1: Weather -->
<div class="p-2.5 rounded bg-surface-container border border-outline-variant space-y-1">
<div class="flex items-center justify-between text-label-xs font-mono">
<span class="font-bold text-primary flex items-center gap-1">
<span class="material-symbols-outlined text-xs text-error">ac_unit</span>
                    Sub-zero Ambient Temp Alert
                  </span>
<span class="font-bold text-error">+12.0% burn</span>
</div>
<p class="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Meteorological feed indicates severe cold snap (-21°C expected in T-72h) triggering mandatory perimeter and crew quarters continuous heating burn.
                </p>
</div>
<!-- Driver 2: Tactical Movement -->
<div class="p-2.5 rounded bg-surface-container border border-outline-variant space-y-1">
<div class="flex items-center justify-between text-label-xs font-mono">
<span class="font-bold text-primary flex items-center gap-1">
<span class="material-symbols-outlined text-xs text-secondary">local_shipping</span>
                    Sector Convoy Surge
                  </span>
<span class="font-bold text-secondary">+5.6% draw</span>
</div>
<p class="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Fleet &amp; Convoy RL-08 schedule indicates 3 armored patrols refueling at Forward Post Alpha between 09 Oct and 13 Oct.
                </p>
</div>
<!-- Driver 3: Data Integrity Regularization -->
<div class="p-2.5 rounded bg-surface-container border border-outline-variant space-y-1">
<div class="flex items-center justify-between text-label-xs font-mono">
<span class="font-bold text-primary flex items-center gap-1">
<span class="material-symbols-outlined text-xs text-secondary">tune</span>
                    Anomaly Regularization
                  </span>
<span class="font-mono text-secondary">0.0% neutral</span>
</div>
<p class="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  02 Oct supply tanker leak (+180 L) was audited and scrubbed in RL-16 / RL-17, preventing false positive forecast acceleration.
                </p>
</div>
</div>
<!-- Downstream Inventory & Replenishment Impact (Bridge to RL-14) -->
<div class="p-4 space-y-3 bg-surface-container-low/40">
<div class="text-label-sm font-label-sm text-primary uppercase font-bold tracking-wider flex items-center gap-1.5">
<span class="material-symbols-outlined text-sm text-error">notification_important</span>
                Downstream Replenishment Impact (RL-14 Bridge)
              </div>
<!-- Metrics Matrix -->
<div class="grid grid-cols-2 gap-2 text-label-xs font-mono">
<div class="p-2 bg-surface-container-lowest border border-outline-variant rounded">
<span class="text-on-surface-variant block">Current Stock:</span>
<span class="text-headline-sm font-headline-sm font-bold text-primary">4,200 L</span>
</div>
<div class="p-2 bg-surface-container-lowest border border-error/40 rounded">
<span class="text-error block font-bold">Unmitigated Stockout:</span>
<span class="text-body-md font-body-md font-bold text-error">11 Oct · 04:00</span>
</div>
</div>
<!-- Recommendation comparison -->
<div class="p-2.5 bg-surface-container-lowest border border-outline-variant rounded space-y-1.5">
<div class="flex items-center justify-between text-label-xs font-mono">
<span class="text-on-surface-variant">Recommended Order:</span>
<span class="font-bold text-primary text-body-md">2,500 Liters</span>
</div>
<div class="w-full bg-surface-container h-2 rounded-full overflow-hidden flex">
<div class="bg-outline-variant h-full w-[80%]" title="Baseline unforecasted: 2,000 L"></div>
<div class="bg-error h-full w-[20%]" title="Surge delta: +500 L"></div>
</div>
<div class="flex items-center justify-between text-[11px] text-on-surface-variant">
<span>Baseline: 2,000 L</span>
<span class="text-error font-mono font-bold">+500 L Forecast Gap Buffer</span>
</div>
</div>
<!-- CTA to RL-14 -->
<button class="w-full py-2.5 px-3 bg-primary hover:bg-secondary text-on-primary text-label-sm font-label-sm font-bold rounded transition-colors duration-150 flex items-center justify-center gap-2 border border-primary">
<span class="material-symbols-outlined text-sm">assignment_turned_in</span>
<span>Review &amp; Authorize Replenishment (RL-14)</span>
</button>
</div>
<!-- Model Governance & Accuracy Snapshot -->
<div class="p-4 space-y-2.5">
<div class="flex items-center justify-between">
<div class="text-label-sm font-label-sm text-primary uppercase font-bold tracking-wider flex items-center gap-1.5">
<span class="material-symbols-outlined text-sm text-secondary">memory</span>
                  Model Governance
                </div>
<span class="text-[10px] font-mono text-secondary font-bold">HEALTHY</span>
</div>
<div class="space-y-1 text-body-sm font-body-sm text-on-surface-variant">
<div class="flex justify-between">
<span>Architecture:</span>
<span class="font-mono text-primary font-semibold">DemandModel v2.4 (LSTM-Attn)</span>
</div>
<div class="flex justify-between">
<span>Training Window:</span>
<span class="font-mono text-primary">180 Days (Last: 04 Oct)</span>
</div>
<div class="flex justify-between">
<span>Error Diagnostics:</span>
<span class="font-mono text-primary">MAE: 42 L | MAPE: 7.8%</span>
</div>
<div class="flex justify-between">
<span>Systemic Bias:</span>
<span class="font-mono text-secondary font-semibold">+1.4% (Within ±3% Limit)</span>
</div>
</div>
<button class="w-full py-1.5 px-3 bg-surface-container hover:bg-surface-container-high text-primary text-label-xs font-label-xs font-semibold rounded border border-outline-variant transition-colors flex items-center justify-center gap-1.5">
<span class="material-symbols-outlined text-xs">analytics</span>
<span>Inspect Model Performance (RL-21)</span>
</button>
</div>
</div>
</div>
</div>
<!-- ===================================================================== -->
<!-- 7. LOCATION & CATEGORY DEMAND OUTLOOK STRIP -->
<!-- ===================================================================== -->
<div class="grid grid-cols-1 xl:grid-cols-12 gap-4">
<!-- Location Comparison Cards (8 COLS) -->
<div class="xl:col-span-8 bg-surface-container-lowest border border-outline-variant rounded p-4">
<div class="flex items-center justify-between pb-3 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-base text-secondary">near_me</span>
<h4 class="text-label-md font-label-md text-primary font-bold uppercase tracking-wider">Sector Location Outlook Summary</h4>
</div>
<span class="text-label-xs font-mono text-on-surface-variant">Northern Hubs // 14-Day Shift</span>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-3">
<!-- Node 1: Post Alpha -->
<div class="p-3 rounded bg-surface-container-low border border-error/40 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="text-label-xs font-mono text-on-surface-variant">LOC-0042</span>
<span class="text-[9px] font-mono px-1 rounded bg-error-container text-on-error-container font-bold">HIGH RISK</span>
</div>
<div class="font-bold text-primary text-body-md mt-1">Forward Post Alpha</div>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant/40 flex items-baseline justify-between font-mono">
<span class="text-headline-sm font-headline-sm font-bold text-error">+17.6%</span>
<span class="text-label-xs text-on-surface-variant">Diesel / Rations</span>
</div>
</div>
<!-- Node 2: Post Bravo -->
<div class="p-3 rounded bg-surface-container-low border border-outline-variant flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="text-label-xs font-mono text-on-surface-variant">LOC-0045</span>
<span class="text-[9px] font-mono px-1 rounded bg-secondary-container text-on-secondary-container font-medium">NORMAL</span>
</div>
<div class="font-bold text-primary text-body-md mt-1">Forward Post Bravo</div>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant/40 flex items-baseline justify-between font-mono">
<span class="text-headline-sm font-headline-sm font-bold text-primary">+8.4%</span>
<span class="text-label-xs text-on-surface-variant">Water / Subs</span>
</div>
</div>
<!-- Node 3: Logistics Hub North -->
<div class="p-3 rounded bg-surface-container-low border border-outline-variant flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="text-label-xs font-mono text-on-surface-variant">HUB-0001</span>
<span class="text-[9px] font-mono px-1 rounded bg-surface-container text-secondary font-medium">STABLE</span>
</div>
<div class="font-bold text-primary text-body-md mt-1">Logistics Hub North</div>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant/40 flex items-baseline justify-between font-mono">
<span class="text-headline-sm font-headline-sm font-bold text-secondary">-2.1%</span>
<span class="text-label-xs text-on-surface-variant">Buffer Reserve</span>
</div>
</div>
<!-- Node 4: Supply Point Delta -->
<div class="p-3 rounded bg-surface-container-low border border-outline-variant flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="text-label-xs font-mono text-on-surface-variant">LOC-0089</span>
<span class="text-[9px] font-mono px-1 rounded bg-surface-container text-on-surface-variant font-medium">ELEVATED</span>
</div>
<div class="font-bold text-primary text-body-md mt-1">Supply Point Delta</div>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant/40 flex items-baseline justify-between font-mono">
<span class="text-headline-sm font-headline-sm font-bold text-primary">+13.9%</span>
<span class="text-label-xs text-on-surface-variant">Packs / Ammo</span>
</div>
</div>
</div>
</div>
<!-- Category Distribution (4 COLS) -->
<div class="xl:col-span-4 bg-surface-container-lowest border border-outline-variant rounded p-4">
<div class="flex items-center justify-between pb-3 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-base text-secondary">pie_chart</span>
<h4 class="text-label-md font-label-md text-primary font-bold uppercase tracking-wider">Demand Share by Class</h4>
</div>
<span class="text-label-xs font-mono text-on-surface-variant">Aggregate Tonnage</span>
</div>
<div class="mt-3 space-y-2.5">
<!-- Fuel (48%) -->
<div>
<div class="flex justify-between text-label-xs font-mono mb-1">
<span class="text-primary font-bold">Class III: Fuel &amp; POL</span>
<span class="font-bold text-primary">48% (128 MT)</span>
</div>
<div class="w-full bg-surface-container h-2 rounded overflow-hidden">
<div class="bg-primary h-full w-[48%]"></div>
</div>
</div>
<!-- Subsistence Rations (22%) -->
<div>
<div class="flex justify-between text-label-xs font-mono mb-1">
<span class="text-primary font-bold">Class I: Subsistence Rations</span>
<span class="font-bold text-primary">22% (58 MT)</span>
</div>
<div class="w-full bg-surface-container h-2 rounded overflow-hidden">
<div class="bg-secondary h-full w-[22%]"></div>
</div>
</div>
<!-- Medical (15%) -->
<div>
<div class="flex justify-between text-label-xs font-mono mb-1">
<span class="text-primary font-bold">Class VIII: Medical Logistics</span>
<span class="font-bold text-primary">15% (40 MT)</span>
</div>
<div class="w-full bg-surface-container h-2 rounded overflow-hidden">
<div class="bg-error h-full w-[15%]"></div>
</div>
</div>
<!-- Water (10%) -->
<div>
<div class="flex justify-between text-label-xs font-mono mb-1">
<span class="text-primary font-bold">Potable Water Logistics</span>
<span class="font-bold text-primary">10% (26 MT)</span>
</div>
<div class="w-full bg-surface-container h-2 rounded overflow-hidden">
<div class="bg-outline h-full w-[10%]"></div>
</div>
</div>
<!-- Spare Parts (5%) -->
<div>
<div class="flex justify-between text-label-xs font-mono mb-1">
<span class="text-primary font-bold">Class IX: Spare Parts</span>
<span class="font-bold text-primary">5% (13 MT)</span>
</div>
<div class="w-full bg-surface-container h-2 rounded overflow-hidden">
<div class="bg-outline-variant h-full w-[5%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>`;
