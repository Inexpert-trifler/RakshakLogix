// Screen: RL-12 — Inventory Details // POL Arctic Diesel
// Route: /inventory/arctic-diesel
export const rl12Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto flex-1 p-space-lg flex flex-col gap-space-md">
<!-- 3A. ITEM IDENTITY & TACTICAL METRIC STRIP BANNER -->
<section class="bg-surface-container-lowest border border-outline-variant rounded p-space-md shadow-sm">
<div class="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm pb-space-sm border-b border-outline-variant">
<div>
<div class="flex items-center gap-2 mb-1 flex-wrap">
<span class="bg-surface-container text-on-surface-variant border border-outline-variant px-1.5 py-0.5 rounded text-label-xs font-label-xs">
              CLASS III POL
            </span>
<span class="text-label-xs font-label-xs text-outline tracking-wider">
              SKU: FUEL-001 // BATCH: 67B
            </span>
<span class="text-outline text-label-xs">•</span>
<span class="text-label-xs font-label-xs text-on-surface-variant">
              FORWARD POST ALPHA (LOC-0042) • NORTHERN SECTOR
            </span>
</div>
<h2 class="text-headline-lg font-headline-lg text-primary tracking-tight">POL Arctic Diesel (Class III Fuel)</h2>
</div>
<!-- HIGH-CRITICALITY BUFFER STATUS BADGE -->
<div class="flex items-center gap-2 bg-error-container/30 border border-error/50 px-3 py-2 rounded self-start lg:self-auto">
<span class="w-2.5 h-2.5 rounded-full bg-error animate-pulse"></span>
<span class="text-label-sm font-label-sm text-on-error-container">
            LOW STOCK — 6.1 DAYS OF SUPPLY REMAINING (CRITICAL BUFFER BREACH)
          </span>
</div>
</div>
<!-- METRIC STRIP (Compact horizontal row with vertical dividers) -->
<div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-outline-variant pt-space-sm mt-1">
<!-- Metric 1 -->
<div class="px-space-sm py-1">
<span class="text-label-xs font-label-xs text-on-surface-variant block uppercase">Available Stock</span>
<div class="flex items-baseline gap-1 mt-0.5">
<span class="text-headline-lg font-headline-lg text-primary font-bold">4,200</span>
<span class="text-label-xs font-label-xs text-secondary font-bold">L</span>
</div>
<span class="text-[11px] text-outline block">Cap: 20,000 L // 21.0% Fill</span>
</div>
<!-- Metric 2 -->
<div class="px-space-sm py-1">
<span class="text-label-xs font-label-xs text-on-surface-variant block uppercase">Daily Consumption</span>
<div class="flex items-baseline gap-1 mt-0.5">
<span class="text-headline-lg font-headline-lg text-primary font-bold">680</span>
<span class="text-label-xs font-label-xs text-secondary font-bold">L/day</span>
</div>
<span class="text-[11px] text-error font-medium block">+32% Surge over baseline</span>
</div>
<!-- Metric 3 -->
<div class="px-space-sm py-1">
<span class="text-label-xs font-label-xs text-on-surface-variant block uppercase">Buffer Floor (Safety)</span>
<div class="flex items-baseline gap-1 mt-0.5">
<span class="text-headline-lg font-headline-lg text-primary font-bold">2,000</span>
<span class="text-label-xs font-label-xs text-secondary font-bold">L</span>
</div>
<span class="text-[11px] text-on-secondary-fixed-variant font-medium block">Warning at &lt; 2,500 L</span>
</div>
<!-- Metric 4 -->
<div class="px-space-sm py-1">
<span class="text-label-xs font-label-xs text-on-surface-variant block uppercase">Days of Supply</span>
<div class="flex items-baseline gap-1 mt-0.5">
<span class="text-headline-lg font-headline-lg text-error font-bold">6.1</span>
<span class="text-label-xs font-label-xs text-error font-bold">DAYS</span>
</div>
<span class="text-[11px] text-outline block">Threshold Target: 14 Days</span>
</div>
<!-- Metric 5 -->
<div class="px-space-sm py-1">
<span class="text-label-xs font-label-xs text-on-surface-variant block uppercase">Forecasted Demand</span>
<div class="flex items-baseline gap-1 mt-0.5">
<span class="text-headline-lg font-headline-lg text-primary font-bold">+18%</span>
<span class="material-symbols-outlined text-[16px] text-error">trending_up</span>
</div>
<span class="text-[11px] text-outline block">14-day sustained projection</span>
</div>
<!-- Metric 6 -->
<div class="px-space-sm py-1">
<span class="text-label-xs font-label-xs text-on-surface-variant block uppercase">Stockout Probability</span>
<div class="flex items-baseline gap-1 mt-0.5">
<span class="text-headline-lg font-headline-lg text-error font-bold">91%</span>
<span class="text-label-xs font-label-xs text-error font-bold">PROB</span>
</div>
<span class="text-[11px] text-outline block">Ensemble LSTM-M4 Model</span>
</div>
</div>
</section>
<!-- ========================================================================= -->
<!-- 4. MAIN BALANCED 2-COLUMN VIEWPORT ARCHITECTURE                           -->
<!-- ========================================================================= -->
<div class="grid grid-cols-1 xl:grid-cols-12 gap-space-md items-start">
<!-- ======================================================= -->
<!-- 4A. LEFT COLUMN (~65% Viewport: col-span-8)             -->
<!-- ======================================================= -->
<div class="xl:col-span-8 flex flex-col gap-space-md">
<!-- BUFFER COMPRESSION STEPPER / POSITION GAUGE -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-space-md shadow-sm">
<div class="flex items-center justify-between mb-space-sm pb-space-xs border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[18px]">straighten</span>
<h3 class="text-label-sm font-label-sm text-primary uppercase tracking-wider">Depot Buffer Compression Spectrum (Tank Capacity: 20,000 L)</h3>
</div>
<span class="text-label-xs font-label-xs bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">Live Sensor Array: UST-Tank-01</span>
</div>
<!-- Multi-tier Linear Precision Gauge -->
<div class="space-y-2">
<div class="w-full h-8 bg-surface-container-high rounded relative overflow-hidden flex border border-outline-variant">
<!-- Current Available Stock: 4,200 / 20,000 = 21.0% -->
<div class="h-full bg-secondary relative flex items-center justify-end pr-2 text-surface text-[10px] font-bold" style="width: 21%;">
<span class="drop-shadow-sm">4,200 L</span>
</div>
<!-- Critical Buffer Gap: 2,000 to 4,200 (11%) -->
<div class="h-full bg-surface-container-highest flex items-center justify-center text-[10px] text-outline font-medium" style="width: 14%;">
<span class="hidden sm:inline">Operating Buffer</span>
</div>
<!-- Inactive tank airspace -->
<div class="h-full bg-surface-container-low flex-1 flex items-center pl-3 text-outline text-[10px]">
<span>Ullage Airspace (15,800 L)</span>
</div>
<!-- Markers -->
<!-- Safety Stock 2,000L = 10% -->
<div class="absolute top-0 bottom-0 left-[10%] w-[2px] bg-on-secondary-fixed-variant z-10"></div>
<!-- Critical Threshold 1,500L = 7.5% -->
<div class="absolute top-0 bottom-0 left-[7.5%] w-[2px] bg-error z-10"></div>
</div>
<!-- Segment Legend & Marker Annotations -->
<div class="grid grid-cols-4 gap-2 pt-1 text-[11px]">
<div class="flex items-start gap-1.5">
<span class="w-2.5 h-2.5 rounded-sm bg-secondary shrink-0 mt-0.5"></span>
<div>
<span class="font-bold text-primary block leading-tight">4,200 L (21%)</span>
<span class="text-outline text-[10px]">Current Available</span>
</div>
</div>
<div class="flex items-start gap-1.5">
<span class="w-2.5 h-2.5 rounded-sm bg-on-secondary-fixed-variant shrink-0 mt-0.5"></span>
<div>
<span class="font-bold text-primary block leading-tight">2,000 L (10%)</span>
<span class="text-outline text-[10px]">Safety Reserve Floor</span>
</div>
</div>
<div class="flex items-start gap-1.5">
<span class="w-2.5 h-2.5 rounded-sm bg-error shrink-0 mt-0.5"></span>
<div>
<span class="font-bold text-error block leading-tight">1,500 L (7.5%)</span>
<span class="text-outline text-[10px]">Critical Perimeter Reserve</span>
</div>
</div>
<div class="flex items-start gap-1.5">
<span class="w-2.5 h-2.5 rounded-sm bg-outline shrink-0 mt-0.5"></span>
<div>
<span class="font-bold text-error block leading-tight">0 L (Depletion)</span>
<span class="text-error font-medium text-[10px]">11 Oct 2026 // 04:00 IST</span>
</div>
</div>
</div>
</div>
</div>
<!-- DEFINING CAPABILITY: FORECAST-TO-STOCKOUT INTERSECT CHART -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-space-md shadow-sm">
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-space-sm border-b border-outline-variant">
<div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[18px]">show_chart</span>
<h3 class="text-headline-sm font-headline-sm text-primary">Runway Projection &amp; Surge Intersect Matrix</h3>
</div>
<p class="text-label-xs font-label-xs text-outline mt-0.5">30-Day Historical Actuals + 14-Day Forward Trajectory (LSTM Ensemble Model v4.8)</p>
</div>
<!-- Legend Indicators -->
<div class="flex items-center gap-3 text-label-xs font-label-xs">
<span class="flex items-center gap-1.5 text-outline">
<span class="w-3 h-0.5 bg-outline"></span> Baseline (420 L/d)
              </span>
<span class="flex items-center gap-1.5 text-primary font-semibold">
<span class="w-3 h-1 bg-secondary"></span> Surge Actual (680 L/d)
              </span>
<span class="flex items-center gap-1.5 text-error font-semibold">
<span class="w-2 h-2 rounded-full bg-error"></span> Breach Point
              </span>
</div>
</div>
<!-- MILITARY GRADE SVG INTERSECT GRAPH -->
<div class="relative w-full h-72 mt-space-sm bg-surface-container-low/40 border border-outline-variant/60 rounded p-2 overflow-hidden">
<svg class="w-full h-full" preserveaspectratio="none" viewbox="0 0 760 250">
<defs>
<!-- Shaded confidence area gradient -->
<lineargradient id="confidenceBand" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#C49A45" stop-opacity="0.25"></stop>
<stop offset="100%" stop-color="#C49A45" stop-opacity="0.02"></stop>
</lineargradient>
<lineargradient id="stockoutGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#8C2D19" stop-opacity="0.20"></stop>
<stop offset="100%" stop-color="#8C2D19" stop-opacity="0.0"></stop>
</lineargradient>
</defs>
<!-- Grid horizontal reference lines -->
<line stroke="#c3c8c2" stroke-dasharray="2,2" stroke-width="0.8" x1="40" x2="740" y1="20" y2="20"></line>
<text fill="#737873" font-family="IBM Plex Sans" font-size="9" text-anchor="end" x="35" y="24">10,000L</text>
<line stroke="#c3c8c2" stroke-dasharray="2,2" stroke-width="0.8" x1="40" x2="740" y1="75" y2="75"></line>
<text fill="#737873" font-family="IBM Plex Sans" font-size="9" text-anchor="end" x="35" y="79">7,500L</text>
<line stroke="#c3c8c2" stroke-dasharray="2,2" stroke-width="0.8" x1="40" x2="740" y1="130" y2="130"></line>
<text fill="#737873" font-family="IBM Plex Sans" font-size="9" text-anchor="end" x="35" y="134">4,200L</text>
<!-- Safety Buffer Floor (2,000L) -->
<line stroke="#516446" stroke-dasharray="4,3" stroke-width="1.2" x1="40" x2="740" y1="180" y2="180"></line>
<text fill="#516446" font-family="IBM Plex Sans" font-size="9" font-weight="bold" text-anchor="end" x="35" y="184">2,000L (BUF)</text>
<!-- Critical Reserve (1,500L) -->
<line stroke="#ba1a1a" stroke-dasharray="2,2" stroke-width="1" x1="40" x2="740" y1="198" y2="198"></line>
<text fill="#ba1a1a" font-family="IBM Plex Sans" font-size="8" text-anchor="end" x="35" y="201">1,500L (CRIT)</text>
<!-- Zero baseline -->
<line stroke="#737873" stroke-width="1.2" x1="40" x2="740" y1="230" y2="230"></line>
<text fill="#737873" font-family="IBM Plex Sans" font-size="9" text-anchor="end" x="35" y="233">0L</text>
<!-- Vertical Date Dividers -->
<line stroke="#17251c" stroke-dasharray="3,2" stroke-width="1.5" x1="260" x2="260" y1="15" y2="230"></line>
<text fill="#17251c" font-family="IBM Plex Sans" font-size="9" font-weight="bold" text-anchor="middle" x="260" y="12">TODAY (05 OCT)</text>
<!-- Confidence Band in projected sector (x: 260 -> 600) -->
<polygon fill="url(#confidenceBand)" points="260,130 380,165 470,195 560,225 560,230 470,230 380,210 260,130"></polygon>
<!-- Historical Actual Line (Past 30d slope down to 4200L) -->
<path d="M 50,45 Q 120,70 180,95 T 260,130" fill="none" stroke="#516446" stroke-width="2.5"></path>
<!-- Nominal Baseline Projection Line (420 L/day) -->
<path d="M 260,130 L 680,230" fill="none" stroke="#737873" stroke-dasharray="4,4" stroke-width="1.5"></path>
<!-- Surge Consumption Actual Projected (680 L/day - Steep drop) -->
<path d="M 260,130 L 460,230" fill="none" stroke="#ba1a1a" stroke-width="2.5"></path>
<!-- Intersect Point at Buffer Floor (Safety Stock: 2000L) -->
<circle cx="390" cy="180" fill="#ba1a1a" r="4.5" stroke="#ffffff" stroke-width="1.5"></circle>
<!-- Intersect Point at Zero Depletion -->
<circle cx="460" cy="230" fill="#ba1a1a" r="5" stroke="#ffffff" stroke-width="1.5"></circle>
<!-- Date labels on X axis -->
<text fill="#737873" font-family="IBM Plex Sans" font-size="8" x="60" y="244">15 SEP</text>
<text fill="#737873" font-family="IBM Plex Sans" font-size="8" x="160" y="244">25 SEP</text>
<text fill="#17251c" font-family="IBM Plex Sans" font-size="9" font-weight="bold" text-anchor="middle" x="260" y="244">05 OCT</text>
<text fill="#ba1a1a" font-family="IBM Plex Sans" font-size="8" font-weight="bold" text-anchor="middle" x="390" y="244">08 OCT (BUF BREACH)</text>
<text fill="#ba1a1a" font-family="IBM Plex Sans" font-size="8" font-weight="bold" text-anchor="middle" x="460" y="244">11 OCT (ZERO)</text>
<text fill="#737873" font-family="IBM Plex Sans" font-size="8" x="640" y="244">19 OCT</text>
</svg>
<!-- CALLOUT OVERLAY BADGE -->
<div class="absolute top-4 right-4 max-w-xs bg-surface-container-lowest/95 border border-error/60 rounded p-2.5 shadow-sm text-left backdrop-blur-xs">
<div class="flex items-center gap-1.5 text-error text-label-xs font-label-xs uppercase">
<span class="material-symbols-outlined text-[14px]">warning</span>
<span>Projected Stockout Breach</span>
</div>
<p class="text-body-sm font-body-sm font-semibold text-primary mt-0.5">11 Oct 2026 // 04:00 IST</p>
<p class="text-[11px] text-on-surface-variant mt-1 leading-snug">
                Sub-zero (-18°C) operations and perimeter heating bladders driving <span class="font-bold text-error">+23% surge burn</span> above standard winter allowance.
              </p>
</div>
</div>
<!-- Bottom micro-status notes -->
<div class="flex flex-wrap items-center justify-between gap-2 mt-space-sm pt-space-xs border-t border-outline-variant text-[11px] text-on-surface-variant">
<span class="flex items-center gap-1">
<span class="material-symbols-outlined text-[14px] text-secondary">memory</span>
              Telemetry feed: Tele-DL-42-UST1 (Active sample interval: 15s)
            </span>
<span class="font-mono text-[10px] text-outline">HASH: 9a8c::41f0::d991::c3</span>
</div>
</div>
<!-- INVENTORY TRANSACTIONS HISTORY & AUDIT LEDGER -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-space-md shadow-sm">
<div class="flex items-center justify-between pb-space-sm border-b border-outline-variant mb-space-sm">
<div>
<h3 class="text-headline-sm font-headline-sm text-primary">Recent Inventory Movements &amp; Telemetry Ledger</h3>
<p class="text-label-xs font-label-xs text-outline">Tamper-Evident Transaction Chain (MIL-STD-188F Audit Track)</p>
</div>
<div class="flex items-center gap-2">
<button class="bg-surface-container-low hover:bg-surface-container text-primary text-label-xs font-label-xs px-2.5 py-1.5 rounded border border-outline-variant flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">file_download</span>
<span>View Full Ledger (48 Logs)</span>
</button>
<button class="bg-secondary hover:bg-primary text-surface text-label-xs font-label-xs px-2.5 py-1.5 rounded flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">outbox</span>
<span>+ Issue Stock</span>
</button>
</div>
</div>
<!-- Tabular Ledger -->
<div class="overflow-x-auto border border-outline-variant rounded">
<table class="w-full text-left text-[12px] border-collapse">
<thead>
<tr class="bg-surface-container-high border-b border-secondary/50 text-[11px] font-semibold text-primary uppercase tracking-wider">
<th class="py-2 px-3">Timestamp / Date</th>
<th class="py-2 px-3">Type</th>
<th class="py-2 px-3 text-right">Quantity</th>
<th class="py-2 px-3 text-right">Balance</th>
<th class="py-2 px-3">Source / Purpose Reference</th>
<th class="py-2 px-3">Auth Officer</th>
<th class="py-2 px-3 font-mono text-[10px]">Audit Hash</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant font-body-sm">
<!-- Log 1 -->
<tr class="hover:bg-surface-container-low/60 transition-colors">
<td class="py-2.5 px-3 font-mono text-[11px] text-on-surface">05 Oct 11:20 IST</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center gap-1 bg-surface-container text-on-surface-variant text-[10px] font-bold px-1.5 py-0.5 rounded border border-outline-variant">
<span class="material-symbols-outlined text-[12px] text-secondary">output</span> ISSUED
                    </span>
</td>
<td class="py-2.5 px-3 text-right font-mono font-semibold text-error">- 320 L</td>
<td class="py-2.5 px-3 text-right font-mono font-bold text-primary">4,200 L</td>
<td class="py-2.5 px-3 text-on-surface font-medium">Field Generator Grid Bravo (DG-02)</td>
<td class="py-2.5 px-3 text-on-surface-variant">Capt. S. Rathore</td>
<td class="py-2.5 px-3 font-mono text-[10px] text-outline">f4a2::7b91</td>
</tr>
<!-- Log 2 -->
<tr class="hover:bg-surface-container-low/60 transition-colors">
<td class="py-2.5 px-3 font-mono text-[11px] text-on-surface">05 Oct 06:15 IST</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center gap-1 bg-surface-container text-on-surface-variant text-[10px] font-bold px-1.5 py-0.5 rounded border border-outline-variant">
<span class="material-symbols-outlined text-[12px] text-secondary">output</span> ISSUED
                    </span>
</td>
<td class="py-2.5 px-3 text-right font-mono font-semibold text-error">- 210 L</td>
<td class="py-2.5 px-3 text-right font-mono font-bold text-primary">4,520 L</td>
<td class="py-2.5 px-3 text-on-surface font-medium">Perimeter Heating Bladders (Sector 3)</td>
<td class="py-2.5 px-3 text-on-surface-variant">Subedar Major T. Singh</td>
<td class="py-2.5 px-3 font-mono text-[10px] text-outline">e1c0::89de</td>
</tr>
<!-- Log 3 -->
<tr class="hover:bg-surface-container-low/60 transition-colors">
<td class="py-2.5 px-3 font-mono text-[11px] text-on-surface">04 Oct 22:45 IST</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center gap-1 bg-surface-container text-on-surface-variant text-[10px] font-bold px-1.5 py-0.5 rounded border border-outline-variant">
<span class="material-symbols-outlined text-[12px] text-secondary">output</span> ISSUED
                    </span>
</td>
<td class="py-2.5 px-3 text-right font-mono font-semibold text-error">- 150 L</td>
<td class="py-2.5 px-3 text-right font-mono font-bold text-primary">4,730 L</td>
<td class="py-2.5 px-3 text-on-surface font-medium">Mobile ALS Snow Clearing Unit #4</td>
<td class="py-2.5 px-3 text-on-surface-variant">Capt. S. Rathore</td>
<td class="py-2.5 px-3 font-mono text-[10px] text-outline">98d4::12aa</td>
</tr>
<!-- Log 4 (Receipt) -->
<tr class="hover:bg-surface-container-low/60 transition-colors bg-secondary-container/15">
<td class="py-2.5 px-3 font-mono text-[11px] text-on-surface">03 Oct 15:30 IST</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center gap-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold px-1.5 py-0.5 rounded border border-secondary/40">
<span class="material-symbols-outlined text-[12px] text-secondary">input</span> RECEIVED
                    </span>
</td>
<td class="py-2.5 px-3 text-right font-mono font-semibold text-secondary">+ 1,800 L</td>
<td class="py-2.5 px-3 text-right font-mono font-bold text-primary">4,880 L</td>
<td class="py-2.5 px-3 text-on-surface font-medium">ALS Tanker Offload SH-1992 (CSD Leh)</td>
<td class="py-2.5 px-3 text-on-surface-variant">Lt. Col. B. Kumar</td>
<td class="py-2.5 px-3 font-mono text-[10px] text-outline">81cb::5501</td>
</tr>
<!-- Log 5 -->
<tr class="hover:bg-surface-container-low/60 transition-colors">
<td class="py-2.5 px-3 font-mono text-[11px] text-on-surface">02 Oct 19:10 IST</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center gap-1 bg-surface-container text-on-surface-variant text-[10px] font-bold px-1.5 py-0.5 rounded border border-outline-variant">
<span class="material-symbols-outlined text-[12px] text-secondary">output</span> ISSUED
                    </span>
</td>
<td class="py-2.5 px-3 text-right font-mono font-semibold text-error">- 350 L</td>
<td class="py-2.5 px-3 text-right font-mono font-bold text-primary">3,080 L</td>
<td class="py-2.5 px-3 text-on-surface font-medium">HQ Shelter Thermal Array 01-B</td>
<td class="py-2.5 px-3 text-on-surface-variant">Subedar Major T. Singh</td>
<td class="py-2.5 px-3 font-mono text-[10px] text-outline">33ff::981c</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<!-- ======================================================= -->
<!-- 4B. RIGHT COLUMN (~35% Viewport: col-span-4)            -->
<!-- ======================================================= -->
<div class="xl:col-span-4 flex flex-col gap-space-md">
<!-- AI PRESCRIPTIVE REPLENISHMENT PROTOCOL (Human-in-the-Loop) -->
<div class="bg-surface-container-lowest border-2 border-secondary rounded p-space-md shadow-sm relative">
<div class="flex items-center justify-between pb-space-xs border-b border-outline-variant">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-secondary text-[18px]">psychology</span>
<h3 class="text-label-sm font-label-sm text-primary uppercase tracking-wider">AI Prescriptive Replenishment</h3>
</div>
<span class="bg-secondary-container text-on-secondary-container px-1.5 py-0.5 rounded text-[10px] font-bold tracking-tight">
              MIL-STD-188F
            </span>
</div>
<p class="text-[11px] text-outline italic mt-1.5 mb-3">AI Recommendation • Human Authorization Required</p>
<!-- Core Replenishment Specifics -->
<div class="bg-surface-container-low rounded border border-outline-variant p-space-sm space-y-2">
<div class="flex justify-between items-baseline">
<span class="text-[11px] text-on-surface-variant font-medium">Recommended Dispatch:</span>
<span class="text-body-md font-body-md font-bold text-primary">2,500 L POL Arctic</span>
</div>
<div class="flex justify-between items-baseline">
<span class="text-[11px] text-on-surface-variant font-medium">Preferred Source Depot:</span>
<span class="text-body-sm font-body-sm font-semibold text-primary">CSD Leh (Base 01)</span>
</div>
<div class="flex justify-between items-baseline">
<span class="text-[11px] text-on-surface-variant font-medium">Critical Dispatch Window:</span>
<span class="text-body-sm font-body-sm font-bold text-error">&lt; 18h // Arrival T+3 Days</span>
</div>
<div class="flex justify-between items-baseline border-t border-outline-variant pt-1.5">
<span class="text-[11px] text-on-surface-variant font-medium">Projected Impact:</span>
<span class="text-body-sm font-body-sm font-bold text-secondary">+8.4% Readiness (Secures 14.5d)</span>
</div>
</div>
<!-- Why this recommendation? (Causal Factor Breakdown) -->
<div class="mt-space-sm">
<span class="text-label-xs font-label-xs uppercase text-primary font-bold tracking-wider block mb-2">
              Causal Weight Drivers:
            </span>
<div class="space-y-1.5 text-[11px]">
<div class="flex items-center justify-between p-1.5 rounded bg-surface-container border border-outline-variant/60">
<span class="text-on-surface">Depot Stock Buffer:</span>
<span class="font-bold text-error">21% of Safe Cap (CRITICAL)</span>
</div>
<div class="flex items-center justify-between p-1.5 rounded bg-surface-container border border-outline-variant/60">
<span class="text-on-surface">Burn Rate Elevation:</span>
<span class="font-bold text-error">+32% Sustained Surge</span>
</div>
<div class="flex items-center justify-between p-1.5 rounded bg-surface-container border border-outline-variant/60">
<span class="text-on-surface">Pass Weather Risk:</span>
<span class="font-bold text-on-secondary-fixed-variant">68% Blizzard at Khardung (48h)</span>
</div>
<div class="flex items-center justify-between p-1.5 rounded bg-surface-container border border-outline-variant/60">
<span class="text-on-surface">Inbound Gap Window:</span>
<span class="font-bold text-on-surface">SH-2048 only covers 2,000 L</span>
</div>
</div>
</div>
<!-- Action Buttons -->
<div class="mt-space-md flex flex-col gap-2">
<button class="w-full bg-primary hover:bg-secondary text-surface text-label-sm font-label-sm py-2 px-3 rounded border border-primary flex items-center justify-center gap-1.5 transition-colors font-semibold shadow-sm">
<span class="material-symbols-outlined text-[16px]">verified</span>
<span>Approve Dispatch Protocol</span>
</button>
<button class="w-full bg-surface-container-low hover:bg-surface-container text-on-surface text-label-sm font-label-sm py-1.5 px-3 rounded border border-outline-variant flex items-center justify-center gap-1.5 transition-colors">
<span class="material-symbols-outlined text-[16px] text-secondary">tune</span>
<span>Simulate Replenishment Impact</span>
</button>
</div>
</div>
<!-- INBOUND REPLENISHMENT CONVOY TRACKER -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-space-md shadow-sm">
<div class="flex items-center justify-between pb-space-xs border-b border-outline-variant mb-space-sm">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-secondary text-[18px]">local_shipping</span>
<h3 class="text-label-sm font-label-sm text-primary uppercase tracking-wider">Active Inbound Convoy</h3>
</div>
<span class="bg-surface-container px-2 py-0.5 rounded text-[10px] font-bold text-on-surface-variant font-mono">
              GPS: LOCK-4
            </span>
</div>
<div class="border border-outline-variant rounded p-space-sm bg-surface-container-low">
<div class="flex justify-between items-start">
<div>
<h4 class="text-body-md font-body-md font-bold text-primary">Convoy SH-2048</h4>
<p class="text-[11px] text-outline">4x ALS Heavy Tanker Units // 2,000 L Arctic POL</p>
</div>
<span class="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-[10px] font-bold">
                EN ROUTE
              </span>
</div>
<!-- Route Stepper -->
<div class="mt-3 relative pl-4 border-l-2 border-secondary space-y-3 text-[11px]">
<div class="relative">
<span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-secondary border border-surface"></span>
<p class="font-bold text-primary">CSD Leh (Depot Base 01)</p>
<p class="text-[10px] text-outline">Departed: 04 Oct 08:00 IST</p>
</div>
<div class="relative">
<span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-error border border-surface animate-ping"></span>
<span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-error border border-surface"></span>
<p class="font-bold text-error">Current: Km 118 (Near Chang La Pass)</p>
<p class="text-[10px] text-error font-medium">Snow chains engaged • 42 KM Remaining</p>
</div>
<div class="relative">
<span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-outline-variant border border-surface"></span>
<p class="font-bold text-on-surface-variant">Forward Post Alpha (LOC-0042)</p>
<p class="text-[10px] text-outline font-semibold">ETA: Today 18:40 IST (+1.5h buffer)</p>
</div>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant flex items-center justify-between text-[11px]">
<span class="text-outline">Route R-204 Pass status: Passable with chains</span>
<a class="text-secondary font-bold hover:underline flex items-center gap-0.5" href="#">
<span>Track on GIS</span>
<span class="material-symbols-outlined text-[13px]">arrow_forward</span>
</a>
</div>
</div>
</div>
<!-- OPERATIONAL CONTEXT & ROUTE VULNERABILITY -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-space-md shadow-sm">
<div class="flex items-center gap-1.5 pb-space-xs border-b border-outline-variant mb-space-xs">
<span class="material-symbols-outlined text-secondary text-[18px]">altitude</span>
<h3 class="text-label-sm font-label-sm text-primary uppercase tracking-wider">Tactical Node &amp; Corridor Risk</h3>
</div>
<div class="space-y-2 text-[11px] pt-1">
<div class="flex justify-between py-1 border-b border-outline-variant/60">
<span class="text-on-surface-variant">Post Classification:</span>
<span class="font-semibold text-primary">Glaciated Valley Defensive Node</span>
</div>
<div class="flex justify-between py-1 border-b border-outline-variant/60">
<span class="text-on-surface-variant">Ambient Temperature:</span>
<span class="font-mono font-bold text-error">-18°C (Extreme High Altitude)</span>
</div>
<div class="flex justify-between py-1 border-b border-outline-variant/60">
<span class="text-on-surface-variant">Primary Corridor:</span>
<span class="font-medium text-primary">Route R-204 (Medium Blizzard Risk)</span>
</div>
<div class="flex justify-between py-1">
<span class="text-on-surface-variant">Contingency Corridor:</span>
<span class="font-medium text-secondary">Route B (Valley Bypass, -31% Risk)</span>
</div>
</div>
<button class="w-full mt-3 bg-surface-container hover:bg-surface-container-high text-primary text-label-xs font-label-xs py-1.5 rounded border border-outline-variant flex items-center justify-center gap-1 transition-colors">
<span class="material-symbols-outlined text-[14px]">alt_route</span>
<span>Optimize Corridor Corridor Routing</span>
</button>
</div>
<!-- INTELLIGENCE BRIEF SUMMARY NARRATIVE -->
<div class="bg-surface-container-high/40 border border-outline-variant rounded p-space-md">
<div class="flex items-center gap-1.5 mb-1 text-on-surface-variant">
<span class="material-symbols-outlined text-[16px] text-secondary">feed</span>
<span class="text-label-xs font-label-xs uppercase font-bold tracking-wider">Staff Logistics Assessment</span>
</div>
<p class="text-[12px] leading-relaxed text-on-surface">
            Operational diesel consumption at <strong class="text-primary font-semibold">Forward Post Alpha</strong> has sustained <span class="text-error font-bold">+32%</span> above historical 30-day baseline due to -18°C sub-zero ambient heating demands. Without immediate secondary dispatch authorization of <span class="font-semibold text-primary">2,500 L</span> before predicted weather closure on Route R-204, critical heating reserve breach will occur in <span class="font-bold text-error">6.1 days</span>.
          </p>
<div class="mt-2 pt-2 border-t border-outline-variant/40 flex items-center justify-between text-[10px] text-outline">
<span>OFFICER IN CHARGE: LT. COL. B. KUMAR</span>
<span>HQ COMMAND DESK 04</span>
</div>
</div>
</div>
</div>
</main>`;
