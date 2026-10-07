// Screen: RL-15 — Consumption History Analytics
// Route: /consumption
export const rl15Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto px-gutter-desktop flex-1">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
<!-- ===================================================================== -->
<!-- LEFT / MAIN COLUMN (~66% width - 8 cols)                              -->
<!-- ===================================================================== -->
<div class="lg:col-span-8 space-y-4">
<!-- SECTION A: Consumption Trend & Baseline Comparison Chart Card -->
<div class="bg-surface-container-lowest border border-outline-variant rounded">
<!-- Card Header & Controls -->
<div class="p-3 border-b border-outline-variant flex flex-wrap items-center justify-between gap-3 bg-surface-container-low">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[20px]" data-icon="timeline">timeline</span>
<span class="font-label-md font-bold text-primary uppercase tracking-wide">Consumption Burn &amp; Baseline Vector</span>
<span class="px-2 py-0.5 rounded bg-surface-container border border-outline-variant font-label-xs font-mono text-outline">DAILY AGGREGATE</span>
</div>
<!-- Timeframe & Baseline Toggles -->
<div class="flex items-center gap-3">
<!-- Timeframe Segmented Control -->
<div class="flex items-center border border-outline-variant rounded overflow-hidden bg-surface-container-lowest">
<button class="px-2.5 py-1 text-label-xs font-medium text-on-surface-variant hover:bg-surface-container">7D</button>
<button class="px-2.5 py-1 text-label-xs font-bold bg-primary-container text-on-primary">30D</button>
<button class="px-2.5 py-1 text-label-xs font-medium text-on-surface-variant hover:bg-surface-container">90D</button>
<button class="px-2.5 py-1 text-label-xs font-medium text-on-surface-variant hover:bg-surface-container">6M</button>
<button class="px-2.5 py-1 text-label-xs font-medium text-on-surface-variant hover:bg-surface-container">1Y</button>
</div>
<!-- Baseline Comparison Toggle -->
<div class="hidden sm:flex items-center gap-1.5 text-label-xs bg-surface-container border border-outline-variant px-2 py-1 rounded">
<span class="text-outline font-medium">Ref:</span>
<select class="bg-transparent border-none p-0 text-label-xs font-semibold text-primary focus:ring-0 cursor-pointer">
<option selected="">Historical Average (30D Baseline)</option>
<option>Previous 30-Day Period</option>
<option>RL-18 Forecast Projection</option>
</select>
</div>
</div>
</div>
<!-- SVG Data Visualization Canvas -->
<div class="p-4">
<!-- Legend & Key Info -->
<div class="flex flex-wrap items-center justify-between mb-3 text-label-xs">
<div class="flex items-center gap-4">
<div class="flex items-center gap-1.5">
<span class="w-3.5 h-1 bg-secondary inline-block rounded-full"></span>
<span class="font-medium text-on-surface">Actual Daily Consumption (Units)</span>
</div>
<div class="flex items-center gap-1.5">
<span class="w-3.5 h-0.5 border-t-2 border-dashed border-outline inline-block"></span>
<span class="text-on-surface-variant">30D Baseline Avg (594 u/d)</span>
</div>
<div class="flex items-center gap-1.5">
<span class="w-2.5 h-2.5 rounded-full bg-error inline-block"></span>
<span class="text-error font-semibold">Anomalous Outlier Surge</span>
</div>
</div>
<div class="text-outline font-mono-tabular">TIMELINE: 05 SEP – 05 OCT 2026</div>
</div>
<!-- High-Density Inline SVG Chart -->
<div class="w-full h-64 bg-surface-container-low/50 border border-outline-variant/60 rounded p-2 relative overflow-hidden">
<svg class="w-full h-full" preserveaspectratio="none" viewbox="0 0 760 220">
<defs>
<!-- Gradient for area fill under actual consumption curve -->
<lineargradient id="oliveAreaGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#516446" stop-opacity="0.25"></stop>
<stop offset="100%" stop-color="#516446" stop-opacity="0.01"></stop>
</lineargradient>
<!-- Anomaly pulse highlight -->
<radialgradient cx="50%" cy="50%" id="anomalyGlow" r="50%">
<stop offset="0%" stop-color="#ba1a1a" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#ba1a1a" stop-opacity="0"></stop>
</radialgradient>
</defs>
<!-- Horizontal Grid Lines & Scale Marks -->
<g class="stroke-outline-variant/50" stroke-dasharray="2 3" stroke-width="1">
<line x1="40" x2="740" y1="20" y2="20"></line>
<line x1="40" x2="740" y1="65" y2="65"></line>
<line x1="40" x2="740" y1="110" y2="110"></line>
<line x1="40" x2="740" y1="155" y2="155"></line>
<line x1="40" x2="740" y1="200" y2="200"></line>
</g>
<!-- Y-Axis Labels -->
<text class="fill-outline text-[9px] font-mono" text-anchor="end" x="35" y="24">900 u</text>
<text class="fill-outline text-[9px] font-mono" text-anchor="end" x="35" y="69">750 u</text>
<text class="fill-outline text-[9px] font-mono" text-anchor="end" x="35" y="114">600 u</text>
<text class="fill-outline text-[9px] font-mono" text-anchor="end" x="35" y="159">450 u</text>
<text class="fill-outline text-[9px] font-mono" text-anchor="end" x="35" y="202">300 u</text>
<!-- 30D Baseline Reference Line (594 u -> Y ≈ 112) -->
<line stroke="#737873" stroke-dasharray="4 4" stroke-width="1.5" x1="40" x2="740" y1="112" y2="112"></line>
<text class="fill-outline text-[9px] font-mono font-semibold" text-anchor="end" x="735" y="106">BASELINE: 594 U/D</text>
<!-- Missing Telemetry Gap Annotation (21 Sep: X ≈ 410) -->
<rect fill="#e0e4dc" height="180" opacity="0.4" width="35" x="395" y="20"></rect>
<line stroke="#737873" stroke-dasharray="2 2" stroke-width="1" x1="395" x2="430" y1="125" y2="128"></line>
<!-- Actual Consumption Area Fill -->
<polygon fill="url(#oliveAreaGrad)" points="
                    50,135 74,130 98,142 122,128 146,120 170,132 194,124 218,118 242,126 266,138 
                    290,148 314,165 338,150 362,140 386,132 410,126 434,128 458,115 482,108 506,98 
                    530,92 554,84 578,88 602,78 626,86 650,28 674,72 698,76 722,68
                    722,200 50,200
                  "></polygon>
<!-- Actual Consumption Curve Line -->
<polyline fill="none" points="
                    50,135 74,130 98,142 122,128 146,120 170,132 194,124 218,118 242,126 266,138 
                    290,148 314,165 338,150 362,140 386,132 410,126 434,128 458,115 482,108 506,98 
                    530,92 554,84 578,88 602,78 626,86 650,28 674,72 698,76 722,68
                  " stroke="#3F5135" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></polyline>
<!-- Data Points Samples -->
<circle cx="50" cy="135" fill="#3F5135" r="2.5"></circle>
<circle cx="314" cy="165" fill="#3F5135" r="3"></circle> <!-- Min Day 18 Sep -->
<circle cx="554" cy="84" fill="#3F5135" r="2.5"></circle>
<!-- Anomaly Callout on 02 Oct (X=650, Y=28: 842 units) -->
<circle cx="650" cy="28" fill="url(#anomalyGlow)" r="14"></circle>
<circle cx="650" cy="28" fill="#ba1a1a" r="4.5" stroke="#ffffff" stroke-width="1.5"></circle>
<!-- Vertical Marker for Anomaly -->
<line opacity="0.6" stroke="#ba1a1a" stroke-dasharray="2 2" stroke-width="1" x1="650" x2="650" y1="36" y2="200"></line>
<!-- X-Axis Labels (Timeline) -->
<g class="fill-outline text-[9px] font-mono">
<text text-anchor="middle" x="50" y="214">05 SEP</text>
<text text-anchor="middle" x="146" y="214">09 SEP</text>
<text text-anchor="middle" x="242" y="214">13 SEP</text>
<text text-anchor="middle" x="314" y="214">18 SEP (MIN)</text>
<text text-anchor="middle" x="412" y="214">21 SEP (RELAY)</text>
<text text-anchor="middle" x="506" y="214">26 SEP</text>
<text text-anchor="middle" x="602" y="214">30 SEP</text>
<text class="fill-error font-bold" text-anchor="middle" x="650" y="214">02 OCT</text>
<text text-anchor="middle" x="722" y="214">05 OCT</text>
</g>
</svg>
<!-- Floating Anomaly Banner Overlay Inside Canvas -->
<div class="absolute top-3 right-28 bg-surface-container-lowest/95 border border-error/50 p-2 rounded shadow-sm max-w-xs pointer-events-none">
<div class="flex items-center gap-1.5 text-error font-label-xs font-bold">
<span class="material-symbols-outlined text-[14px]" data-icon="warning">warning</span>
<span>ANOMALY SPIKE: 02 OCT 2026</span>
</div>
<div class="font-mono-tabular text-body-sm font-bold text-primary mt-0.5">842 Units (+41.8% vs Baseline)</div>
<p class="font-label-xs text-on-surface-variant mt-0.5">
                    Sub-zero thermal array activation (Post Alpha heating perimeter).
                  </p>
</div>
</div>
<!-- Compact Trend Telemetry Strip Below Chart -->
<div class="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-3 pt-3 border-t border-outline-variant text-label-xs">
<div class="bg-surface-container px-2.5 py-1.5 rounded">
<div class="text-outline uppercase">Overall Trend</div>
<div class="font-bold text-error mt-0.5 flex items-center gap-1">
<span>Increasing</span>
<span class="font-mono-tabular">(+12.4%)</span>
</div>
</div>
<div class="bg-surface-container px-2.5 py-1.5 rounded">
<div class="text-outline uppercase">Variability Index</div>
<div class="font-bold text-on-surface mt-0.5 font-mono-tabular">Moderate (σ = 68.4)</div>
</div>
<div class="bg-surface-container px-2.5 py-1.5 rounded">
<div class="text-outline uppercase">Peak Consumption</div>
<div class="font-bold text-primary mt-0.5 font-mono-tabular">02 Oct (842 u)</div>
</div>
<div class="bg-surface-container px-2.5 py-1.5 rounded">
<div class="text-outline uppercase">Minimum Burn Day</div>
<div class="font-bold text-on-surface mt-0.5 font-mono-tabular">18 Sep (412 u)</div>
</div>
<div class="bg-surface-container px-2.5 py-1.5 rounded">
<div class="text-outline uppercase">Model Fit Metric</div>
<div class="font-bold text-secondary mt-0.5 font-mono-tabular">94.2% R² (Nominal)</div>
</div>
</div>
</div>
</div>
<!-- SECTION B: Comparative Distribution (Tabs: By Category | By Location) -->
<div class="bg-surface-container-lowest border border-outline-variant rounded">
<!-- Tabs Header -->
<div class="p-3 border-b border-outline-variant flex items-center justify-between bg-surface-container-low">
<div class="flex items-center gap-4">
<span class="font-label-md font-bold text-primary uppercase tracking-wide">Comparative Distribution</span>
<!-- Segmented Tabs -->
<div class="flex items-center gap-1 bg-surface-container p-0.5 rounded border border-outline-variant">
<button class="px-2.5 py-0.5 rounded text-label-xs font-bold bg-surface-container-lowest text-primary shadow-xs">
                    By Supply Category
                  </button>
<button class="px-2.5 py-0.5 rounded text-label-xs font-medium text-on-surface-variant hover:text-on-surface">
                    By Forward Location
                  </button>
</div>
</div>
<span class="font-label-xs text-outline font-mono-tabular">TOTAL: 18,420 UNITS</span>
</div>
<div class="p-4 grid grid-cols-1 md:grid-cols-12 gap-4">
<!-- Left Sub-column: Proportional Bars for Categories -->
<div class="md:col-span-5 space-y-3">
<div class="font-label-xs uppercase tracking-wider text-outline font-bold">Category Burn Allocation</div>
<!-- Category 1: POL Fuel -->
<div class="space-y-1">
<div class="flex justify-between items-center text-label-xs">
<span class="font-bold text-primary">Class III Fuel (POL)</span>
<span class="font-mono-tabular font-semibold text-primary">8,420 L (45.7%)</span>
</div>
<div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div class="bg-secondary h-full rounded-full" style="width: 45.7%"></div>
</div>
<div class="flex justify-between text-[10px] text-outline">
<span>Arctic Grade High-Flash Diesel</span>
<span class="text-error font-medium font-mono-tabular">▲ +14% vs normal</span>
</div>
</div>
<!-- Category 2: Class I Rations -->
<div class="space-y-1">
<div class="flex justify-between items-center text-label-xs">
<span class="font-semibold text-primary">Class I Subsistence (Rations)</span>
<span class="font-mono-tabular font-semibold text-primary">4,120 Pks (22.4%)</span>
</div>
<div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div class="bg-outline h-full rounded-full" style="width: 22.4%"></div>
</div>
<div class="flex justify-between text-[10px] text-outline">
<span>High-Altitude Rations Pack</span>
<span class="text-secondary font-medium font-mono-tabular">Stable (0.2%)</span>
</div>
</div>
<!-- Category 3: Class VIII Medical -->
<div class="space-y-1">
<div class="flex justify-between items-center text-label-xs">
<span class="font-semibold text-primary">Class VIII Medical Supplies</span>
<span class="font-mono-tabular font-semibold text-primary">2,640 u (14.3%)</span>
</div>
<div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div class="bg-outline h-full rounded-full" style="width: 14.3%"></div>
</div>
<div class="flex justify-between text-[10px] text-outline">
<span>Trauma packs &amp; Frostbite units</span>
<span class="text-error font-medium font-mono-tabular">▲ +8% season</span>
</div>
</div>
<!-- Category 4: Potable Water -->
<div class="space-y-1">
<div class="flex justify-between items-center text-label-xs">
<span class="font-semibold text-primary">Class I Water (Potable Tanker)</span>
<span class="font-mono-tabular font-semibold text-primary">2,140 L (11.6%)</span>
</div>
<div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div class="bg-outline h-full rounded-full" style="width: 11.6%"></div>
</div>
</div>
<!-- Category 5: Class IX Spares -->
<div class="space-y-1">
<div class="flex justify-between items-center text-label-xs">
<span class="font-semibold text-primary">Class IX Spare Parts</span>
<span class="font-mono-tabular font-semibold text-primary">1,100 u (6.0%)</span>
</div>
<div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div class="bg-outline-variant h-full rounded-full" style="width: 6.0%"></div>
</div>
</div>
</div>
<!-- Right Sub-column: High-Velocity Location Breakdown Table -->
<div class="md:col-span-7 border-l border-outline-variant pl-0 md:pl-4">
<div class="font-label-xs uppercase tracking-wider text-outline font-bold mb-2">Location Consumption Intensity</div>
<div class="overflow-x-auto">
<table class="w-full text-left text-body-sm">
<thead>
<tr class="border-b border-outline-variant bg-surface-container text-label-xs text-on-surface-variant uppercase">
<th class="py-1.5 px-2">Location Node</th>
<th class="py-1.5 px-2 text-right">30D Burn</th>
<th class="py-1.5 px-2 text-right">Daily Avg</th>
<th class="py-1.5 px-2 text-right">Delta</th>
<th class="py-1.5 px-2 text-center">Status</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<!-- Row 1 -->
<tr class="hover:bg-surface-container-low transition bg-surface-container-lowest">
<td class="py-1.5 px-2 font-medium text-primary flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-error"></span>
<span>Forward Post Alpha (LOC-0042)</span>
</td>
<td class="py-1.5 px-2 text-right font-mono-tabular font-semibold">6,420 u</td>
<td class="py-1.5 px-2 text-right font-mono-tabular text-outline">214 u/d</td>
<td class="py-1.5 px-2 text-right font-mono-tabular text-error font-medium">+18%</td>
<td class="py-1.5 px-2 text-center">
<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                            ELEVATED
                          </span>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-surface-container-low transition bg-surface-container-lowest">
<td class="py-1.5 px-2 font-medium text-primary flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span>Forward Post Bravo (LOC-0018)</span>
</td>
<td class="py-1.5 px-2 text-right font-mono-tabular font-semibold">4,820 u</td>
<td class="py-1.5 px-2 text-right font-mono-tabular text-outline">161 u/d</td>
<td class="py-1.5 px-2 text-right font-mono-tabular text-secondary font-medium">+7%</td>
<td class="py-1.5 px-2 text-center">
<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container">
                            NORMAL
                          </span>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container-low transition bg-surface-container-lowest">
<td class="py-1.5 px-2 font-medium text-primary flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span>Logistics Hub North (HUB-0004)</span>
</td>
<td class="py-1.5 px-2 text-right font-mono-tabular font-semibold">3,910 u</td>
<td class="py-1.5 px-2 text-right font-mono-tabular text-outline">130 u/d</td>
<td class="py-1.5 px-2 text-right font-mono-tabular text-on-surface-variant font-medium">-4%</td>
<td class="py-1.5 px-2 text-center">
<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container">
                            NORMAL
                          </span>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-surface-container-low transition bg-surface-container-lowest">
<td class="py-1.5 px-2 font-medium text-primary flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-error"></span>
<span>Supply Point Delta (LOC-0091)</span>
</td>
<td class="py-1.5 px-2 text-right font-mono-tabular font-semibold">2,140 u</td>
<td class="py-1.5 px-2 text-right font-mono-tabular text-outline">71 u/d</td>
<td class="py-1.5 px-2 text-right font-mono-tabular text-error font-medium">+21%</td>
<td class="py-1.5 px-2 text-center">
<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-error-container text-on-error-container">
                            REVIEW
                          </span>
</td>
</tr>
<!-- Row 5 -->
<tr class="hover:bg-surface-container-low transition bg-surface-container-lowest">
<td class="py-1.5 px-2 font-medium text-primary flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-outline"></span>
<span>Khardung Pass Depot (LOC-0033)</span>
</td>
<td class="py-1.5 px-2 text-right font-mono-tabular font-semibold">1,130 u</td>
<td class="py-1.5 px-2 text-right font-mono-tabular text-outline">38 u/d</td>
<td class="py-1.5 px-2 text-right font-mono-tabular text-on-surface-variant font-medium">+11%</td>
<td class="py-1.5 px-2 text-center">
<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-surface-container-high text-on-surface-variant border border-outline-variant">
                            MONITOR
                          </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
<!-- SECTION C: Detailed Consumption Records Ledger (Audit-Grade Table) -->
<div class="bg-surface-container-lowest border border-outline-variant rounded">
<!-- Table Header Toolbar -->
<div class="p-3 border-b border-outline-variant flex flex-wrap items-center justify-between gap-3 bg-surface-container-low">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[20px]" data-icon="receipt_long">receipt_long</span>
<span class="font-label-md font-bold text-primary uppercase tracking-wide">Historical Consumption Ledger</span>
<span class="px-2 py-0.5 rounded bg-surface-container border border-outline-variant font-label-xs font-mono text-outline">18,420 RECORDS LOGGED</span>
</div>
<!-- Ledger Quick Filters -->
<div class="flex items-center gap-2">
<div class="relative w-48">
<span class="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-[14px] text-outline" data-icon="filter_list">filter_list</span>
<input class="w-full h-7 pl-6 pr-2 bg-surface-container-lowest border border-outline-variant rounded text-label-xs text-on-surface placeholder:text-outline focus:outline-none" placeholder="Filter SKU / Ref..." type="text"/>
</div>
<button class="h-7 px-2 border border-outline-variant rounded bg-surface-container-lowest text-label-xs text-on-surface hover:bg-surface-container flex items-center gap-1">
<span>Only Anomalies</span>
<span class="w-1.5 h-1.5 rounded-full bg-error"></span>
</button>
</div>
</div>
<!-- Ledger Table -->
<div class="overflow-x-auto">
<table class="w-full text-left text-body-sm">
<thead>
<tr class="bg-surface-container text-label-xs text-on-surface-variant uppercase border-b border-outline-variant">
<th class="py-2 px-3">Timestamp (IST)</th>
<th class="py-2 px-3">Location</th>
<th class="py-2 px-3">Item Specification &amp; SKU</th>
<th class="py-2 px-3 text-right">Quantity</th>
<th class="py-2 px-3">Reference</th>
<th class="py-2 px-3">Consuming Formation / Purpose</th>
<th class="py-2 px-3">Logged By</th>
<th class="py-2 px-3 text-center">Status</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant font-body-sm">
<!-- Row 1: Selected / Highlighted Record -->
<tr class="bg-surface-container-high/40 hover:bg-surface-container-high transition">
<td class="py-2 px-3 font-mono-tabular font-medium text-primary">05 Oct 14:32</td>
<td class="py-2 px-3 font-medium text-primary">Forward Post Alpha</td>
<td class="py-2 px-3">
<div class="font-bold text-primary">POL Arctic Diesel</div>
<div class="font-label-xs font-mono text-outline">FUEL-001 // CL-III</div>
</td>
<td class="py-2 px-3 text-right font-mono-tabular font-bold text-error">-680 L</td>
<td class="py-2 px-3 font-mono-tabular text-outline text-label-xs">CONS-8821</td>
<td class="py-2 px-3 text-on-surface-variant">Perimeter Heating Array Bravo</td>
<td class="py-2 px-3 text-label-xs text-on-surface">A. Sharma // Staff Sgt</td>
<td class="py-2 px-3 text-center">
<span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container">
<span class="material-symbols-outlined text-[12px]" data-icon="check_circle">check_circle</span>
                        Verified
                      </span>
</td>
</tr>
<!-- Row 2: Anomaly Row -->
<tr class="bg-error-container/10 hover:bg-error-container/20 transition">
<td class="py-2 px-3 font-mono-tabular font-medium text-primary">02 Oct 09:14</td>
<td class="py-2 px-3 font-medium text-primary">Forward Post Alpha</td>
<td class="py-2 px-3">
<div class="font-bold text-primary">POL Arctic Diesel</div>
<div class="font-label-xs font-mono text-outline">FUEL-001 // CL-III</div>
</td>
<td class="py-2 px-3 text-right font-mono-tabular font-bold text-error">-842 L</td>
<td class="py-2 px-3 font-mono-tabular text-outline text-label-xs">CONS-8790</td>
<td class="py-2 px-3 text-error font-medium">Sub-Zero Bladder Pre-Heat (Surge)</td>
<td class="py-2 px-3 text-label-xs text-on-surface">V. Negi // Havildar</td>
<td class="py-2 px-3 text-center">
<span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-error-container text-on-error-container">
<span class="material-symbols-outlined text-[12px]" data-icon="warning">warning</span>
                        Anomaly
                      </span>
</td>
</tr>
<!-- Row 3: Subsistence Ration -->
<tr class="hover:bg-surface-container-low transition bg-surface-container-lowest">
<td class="py-2 px-3 font-mono-tabular font-medium text-primary">01 Oct 18:20</td>
<td class="py-2 px-3 font-medium text-primary">Post Bravo</td>
<td class="py-2 px-3">
<div class="font-bold text-primary">High Altitude Ration Pack</div>
<div class="font-label-xs font-mono text-outline">RAT-CL1-04 // CL-I</div>
</td>
<td class="py-2 px-3 text-right font-mono-tabular font-bold text-on-surface-variant">-140 Pks</td>
<td class="py-2 px-3 font-mono-tabular text-outline text-label-xs">CONS-8765</td>
<td class="py-2 px-3 text-on-surface-variant">Scheduled Garrison Ration Issuance</td>
<td class="py-2 px-3 text-label-xs text-on-surface">M. Gurung // Subedar</td>
<td class="py-2 px-3 text-center">
<span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container">
<span class="material-symbols-outlined text-[12px]" data-icon="check_circle">check_circle</span>
                        Verified
                      </span>
</td>
</tr>
<!-- Row 4: Medical Units -->
<tr class="hover:bg-surface-container-low transition bg-surface-container-lowest">
<td class="py-2 px-3 font-mono-tabular font-medium text-primary">30 Sep 11:45</td>
<td class="py-2 px-3 font-medium text-primary">Hub North Base</td>
<td class="py-2 px-3">
<div class="font-bold text-primary">Hypothermia Trauma Kit</div>
<div class="font-label-xs font-mono text-outline">MED-8890 // CL-VIII</div>
</td>
<td class="py-2 px-3 text-right font-mono-tabular font-bold text-on-surface-variant">-42 Kits</td>
<td class="py-2 px-3 font-mono-tabular text-outline text-label-xs">CONS-8740</td>
<td class="py-2 px-3 text-on-surface-variant">Forward Aid Post Replenishment</td>
<td class="py-2 px-3 text-label-xs text-on-surface">Dr. S. Nair // Surg Maj</td>
<td class="py-2 px-3 text-center">
<span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container">
<span class="material-symbols-outlined text-[12px]" data-icon="check_circle">check_circle</span>
                        Verified
                      </span>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Ledger Pagination & Quick Status -->
<div class="p-2.5 border-t border-outline-variant bg-surface-container flex items-center justify-between text-label-xs text-on-surface-variant">
<div class="flex items-center gap-2">
<span>Showing 1 to 4 of 18,420 entries</span>
<span class="text-outline">|</span>
<span class="font-mono-tabular">Checksum: SHA256-8A39C</span>
</div>
<div class="flex items-center gap-1">
<button class="px-2 py-1 rounded bg-surface-container-lowest border border-outline-variant disabled:opacity-50" disabled="">Previous</button>
<button class="px-2 py-1 rounded bg-primary-container text-on-primary font-bold">1</button>
<button class="px-2 py-1 rounded bg-surface-container-lowest border border-outline-variant hover:bg-surface-container">2</button>
<button class="px-2 py-1 rounded bg-surface-container-lowest border border-outline-variant hover:bg-surface-container">3</button>
<button class="px-2 py-1 rounded bg-surface-container-lowest border border-outline-variant hover:bg-surface-container">Next</button>
</div>
</div>
</div>
</div>
<!-- ===================================================================== -->
<!-- RIGHT COLUMN (~34% width - 4 cols) - Selected Item & Pattern Dossier  -->
<!-- ===================================================================== -->
<div class="lg:col-span-4 space-y-4">
<!-- Section: Selected Item & Pattern Dossier Card -->
<div class="bg-surface-container-lowest border border-outline-variant rounded">
<!-- Dossier Header -->
<div class="p-3 border-b border-outline-variant bg-primary-container text-on-primary rounded-t">
<div class="flex items-center justify-between">
<span class="font-label-xs font-mono uppercase tracking-widest text-secondary-fixed">CONSUMPTION DOSSIER</span>
<span class="px-1.5 py-0.5 rounded bg-error font-label-xs font-bold text-on-error">ATTENTION REQUIRED</span>
</div>
<h3 class="font-headline-sm text-headline-sm font-bold mt-1 text-on-primary">POL Arctic Diesel</h3>
<p class="font-label-xs text-on-primary-container font-mono-tabular">SKU: FUEL-001 // CLASS III POL</p>
</div>
<!-- Key Node & Current Velocity Strip -->
<div class="p-3 bg-surface-container-low border-b border-outline-variant space-y-2">
<div class="flex items-center justify-between text-body-sm">
<span class="text-on-surface-variant font-medium">Reporting Node:</span>
<span class="font-bold text-primary">Post Alpha (LOC-0042)</span>
</div>
<div class="flex items-center justify-between text-body-sm">
<span class="text-on-surface-variant font-medium">Sector Alignment:</span>
<span class="font-mono text-outline text-label-xs">Sector IV-B // High-Altitude North</span>
</div>
<div class="pt-2 border-t border-outline-variant flex items-center justify-between">
<div>
<div class="font-label-xs text-outline uppercase font-semibold">Current Daily Burn Rate</div>
<div class="text-headline-sm font-bold font-mono-tabular text-error">680 L/day</div>
</div>
<div class="text-right">
<div class="font-label-xs text-outline uppercase font-semibold">30-Day Avg Baseline</div>
<div class="text-headline-sm font-bold font-mono-tabular text-on-surface">575 L/day</div>
<div class="font-label-xs text-error font-bold font-mono-tabular">+18.3% Surge</div>
</div>
</div>
</div>
<!-- Inventory Depletion Impact (Runway Correlation RL-12/14) -->
<div class="p-3 border-b border-outline-variant bg-surface-container-high/40 space-y-2">
<div class="flex items-center justify-between">
<span class="font-label-xs uppercase tracking-wider font-bold text-primary flex items-center gap-1">
<span class="material-symbols-outlined text-[16px] text-error" data-icon="hourglass_top">hourglass_top</span>
                  Inventory Runway Correlation
                </span>
<a class="font-label-xs text-secondary hover:underline font-semibold" href="#">View RL-14 Risk →</a>
</div>
<div class="grid grid-cols-2 gap-2 mt-1">
<div class="bg-surface-container-lowest p-2 rounded border border-outline-variant">
<div class="font-label-xs text-outline">Available On-Hand</div>
<div class="font-bold font-mono-tabular text-primary text-body-md mt-0.5">4,200 Litres</div>
</div>
<div class="bg-surface-container-lowest p-2 rounded border border-outline-variant">
<div class="font-label-xs text-outline">Depletion Runway</div>
<div class="font-bold font-mono-tabular text-error text-body-md mt-0.5">6.1 Days Remaining</div>
</div>
</div>
<div class="w-full bg-outline-variant h-1.5 rounded-full overflow-hidden mt-1">
<div class="bg-error h-full rounded-full" style="width: 28%"></div>
</div>
<p class="font-label-xs text-on-surface-variant italic">
                *Depletion accelerates if sub-zero conditions sustain below -15°C.
              </p>
</div>
<!-- Observed Consumption Pattern & Environmental Drivers -->
<div class="p-3 border-b border-outline-variant space-y-2.5">
<div class="font-label-xs uppercase tracking-wider font-bold text-primary flex items-center justify-between">
<span>Observed Pattern Classification</span>
<span class="px-1.5 py-0.2 rounded bg-error-container text-on-error-container font-mono-tabular text-[10px] font-bold">
                  CONFIDENCE: 92%
                </span>
</div>
<div class="p-2 bg-surface-container rounded border border-outline-variant text-label-xs font-semibold text-primary">
                PATTERN: ACCELERATED / SYSTEMIC INCREASE
              </div>
<!-- Root Causes / Environmental Drivers -->
<div class="space-y-1.5 text-body-sm">
<div class="flex items-start gap-2 bg-surface-container-low p-2 rounded border border-outline-variant/60">
<span class="material-symbols-outlined text-secondary text-[16px] mt-0.5" data-icon="ac_unit">ac_unit</span>
<div>
<span class="font-bold text-primary">Sustained Sub-Zero (-18°C):</span>
<p class="text-on-surface-variant font-normal text-label-xs mt-0.5">
                      Demands 24/7 continuous perimeter fuel circulation and auxiliary generator heating.
                    </p>
</div>
</div>
<div class="flex items-start gap-2 bg-surface-container-low p-2 rounded border border-outline-variant/60">
<span class="material-symbols-outlined text-secondary text-[16px] mt-0.5" data-icon="altitude">altitude</span>
<div>
<span class="font-bold text-primary">High Altitude Air Thinning:</span>
<p class="text-on-surface-variant font-normal text-label-xs mt-0.5">
                      Elevation 2,840m MSL causes 14% fuel-to-kilowatt thermal generator inefficiency.
                    </p>
</div>
</div>
</div>
</div>
<!-- Recent Consumption Anomalies Box -->
<div class="p-3 border-b border-outline-variant space-y-2 bg-error-container/10">
<div class="flex items-center justify-between">
<span class="font-label-xs font-bold text-error uppercase tracking-wider flex items-center gap-1">
<span class="material-symbols-outlined text-[15px]" data-icon="bolt">bolt</span>
                  Audit Anomaly Flagged
                </span>
<span class="font-mono-tabular text-label-xs text-error font-semibold">02 OCT 2026</span>
</div>
<div class="p-2 bg-surface-container-lowest border border-error/40 rounded space-y-1">
<div class="flex items-baseline justify-between">
<span class="font-bold text-primary text-label-sm">842 L Spike (+41.8% deviation)</span>
<span class="px-1.5 py-0.2 bg-error text-on-error text-[9px] font-bold rounded">HIGH</span>
</div>
<p class="text-label-xs text-on-surface-variant">
                  Discharge exceeded normal operational tolerance. Registered by Hav. V. Negi for cold front emergency bladder warming.
                </p>
<div class="pt-1 flex items-center justify-between">
<span class="font-mono text-[10px] text-outline">TXN-2026-01784</span>
<a class="font-label-xs text-secondary hover:underline font-semibold flex items-center gap-0.5" href="#">
<span>Audit in RL-13</span>
<span class="material-symbols-outlined text-[14px]" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</div>
<!-- Forecast Input Linkage (Bridge to RL-18 Demand Forecasting) -->
<div class="p-3 border-b border-outline-variant space-y-2 bg-surface-container-low">
<div class="font-label-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1">
<span class="material-symbols-outlined text-[16px] text-secondary" data-icon="schema">schema</span>
                Pipeline: Demand Forecast Ingestion
              </div>
<div class="p-2 bg-surface-container-lowest border border-outline-variant rounded font-mono-tabular text-label-xs space-y-1.5">
<div class="flex items-center justify-between text-on-surface-variant">
<span>30D Historical Aggregate:</span>
<span class="font-bold text-primary">18,420 Units</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant">
<span>Calculated Trend Vector:</span>
<span class="font-bold text-error">+12.4% Acceleration</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant">
<span>Calibrated Baseline Burn:</span>
<span class="font-bold text-primary">680 L/Day Target</span>
</div>
</div>
<button class="w-full py-1.5 px-3 bg-secondary text-on-secondary rounded font-label-xs uppercase font-bold tracking-wider hover:bg-secondary/90 transition flex items-center justify-center gap-1.5 shadow-xs">
<span>Deploy to RL-18 Forecast Engine</span>
<span class="material-symbols-outlined text-[16px]" data-icon="trending_up">trending_up</span>
</button>
</div>
<!-- Data Quality & Telemetry Integrity Index (Bridge to RL-17) -->
<div class="p-3 space-y-2">
<div class="flex items-center justify-between">
<span class="font-label-xs font-bold text-on-surface-variant uppercase tracking-wider">Data Quality Index</span>
<span class="font-mono-tabular font-bold text-secondary text-label-sm">94.0% OPERATIONAL</span>
</div>
<!-- Multi-segment Progress Bar -->
<div class="w-full bg-outline-variant h-2 rounded-full overflow-hidden flex">
<div class="bg-secondary h-full" style="width: 94%" title="Synchronized (94%)"></div>
<div class="bg-amber-400 h-full" style="width: 4%" title="Delayed Relay (4%)"></div>
<div class="bg-error h-full" style="width: 2%" title="Flagged Anomalies (2%)"></div>
</div>
<div class="flex justify-between items-center text-[10px] text-on-surface-variant font-mono-tabular">
<span>94% Validated</span>
<span>4% Offline Relay</span>
<span class="text-error font-semibold">2% Anomaly Flagged</span>
</div>
<div class="pt-1 text-right">
<a class="font-label-xs text-secondary hover:underline font-semibold inline-flex items-center gap-1" href="#">
<span>Audit Data Quality (RL-17)</span>
<span class="material-symbols-outlined text-[12px]" data-icon="chevron_right">chevron_right</span>
</a>
</div>
</div>
</div>
<!-- Quick Action Utility Box: Re-calibrate Baseline -->
<div class="bg-surface-container border border-outline-variant rounded p-3 space-y-2">
<div class="font-label-xs uppercase tracking-wider font-bold text-primary flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]" data-icon="tune">tune</span>
              Operational Baseline Calibration
            </div>
<p class="text-label-xs text-on-surface-variant">
              Re-calibrate baseline consumption model to exclude emergency anomaly surge (02 Oct 2026) for normalized quarterly budgeting.
            </p>
<div class="flex items-center gap-2 pt-1">
<button class="flex-1 py-1.5 px-2 bg-surface-container-lowest border border-outline-variant rounded text-label-xs font-semibold text-primary hover:bg-surface-container-high transition">
                Exclude Outliers
              </button>
<button class="flex-1 py-1.5 px-2 bg-primary-container text-on-primary rounded text-label-xs font-semibold hover:bg-secondary transition">
                Recompute Baseline
              </button>
</div>
</div>
</div>
</div>
</main>`;
