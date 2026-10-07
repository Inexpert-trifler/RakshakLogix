// Screen: RL-27 — Route Optimization Workspace
// Route: /routes/optimize
export const rl27Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto flex-1 p-6 grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
<!-- LEFT COLUMN (~60% = xl:col-span-7) -->
<div class="xl:col-span-7 flex flex-col gap-6">
<!-- GIS Route Optimization Tactical Radar Map -->
<div class="bg-surface-container-lowest rounded-lg border border-outline-variant overflow-hidden flex flex-col">
<!-- Map Card Header -->
<div class="px-4 py-2.5 bg-surface-container-low border-b border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[18px] text-secondary">explore</span>
<span class="font-headline-sm text-headline-sm text-primary font-bold">GIS Tactical Corridor Map</span>
<span class="font-mono text-label-xs text-label-xs text-on-surface-variant bg-surface-container px-2 py-0.5 rounded border border-outline-variant">LEH-KARGYL-FOTU LA AXIS</span>
</div>
<div class="flex items-center gap-2">
<span class="font-mono text-[10px] text-on-surface-variant">BRO CLEARANCE ACTIVE</span>
<div class="flex items-center bg-surface-container p-0.5 rounded border border-outline-variant">
<button class="px-2 py-0.5 text-label-xs text-label-xs bg-surface-container-lowest rounded shadow-xs font-semibold">Elevations</button>
<button class="px-2 py-0.5 text-label-xs text-label-xs text-on-surface-variant hover:text-on-surface">Snow Plows</button>
<button class="px-2 py-0.5 text-label-xs text-label-xs text-on-surface-variant hover:text-on-surface">Hazards</button>
</div>
</div>
</div>
<!-- Visual GIS Map Canvas Container -->
<div class="relative w-full h-[360px] bg-[#17251c] text-[#f7faf2] overflow-hidden gis-grid-pattern flex items-center justify-center p-4 select-none">
<!-- Subtle Topographic Contour Vectors -->
<svg class="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
<path d="M-50,80 Q150,120 300,60 T650,90 T900,40" fill="none" stroke="#d4e9c4" stroke-width="1.5"></path>
<path d="M-20,160 Q200,210 380,140 T720,180 T950,120" fill="none" stroke="#d4e9c4" stroke-width="1.2"></path>
<path d="M-30,240 Q180,310 420,220 T780,260 T1000,210" fill="none" stroke="#d4e9c4" stroke-width="1.5"></path>
<path d="M0,320 Q240,360 480,310 T840,330 T1050,300" fill="none" stroke="#d4e9c4" stroke-width="1"></path>
<!-- Elevation Contour Isolines -->
<circle cx="280" cy="180" fill="none" r="70" stroke="#a49a78" stroke-dasharray="3,3" stroke-width="1"></circle>
<circle cx="280" cy="180" fill="none" r="110" stroke="#a49a78" stroke-dasharray="3,3" stroke-width="0.8"></circle>
<circle cx="580" cy="130" fill="none" r="50" stroke="#a49a78" stroke-dasharray="3,3" stroke-width="1"></circle>
</svg>
<!-- Vector Route Paths -->
<svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
<!-- Route B: RTE-021 (Amber Dashed - Avoid/Hazard) -->
<path d="M 80,240 C 130,120 220,100 320,100 C 440,100 520,130 680,160" fill="none" stroke="#c49a45" stroke-dasharray="6,4" stroke-width="3"></path>
<!-- Route C: RTE-024 (Slate Muted Dashed - Southern Pass) -->
<path d="M 80,240 C 140,310 260,330 380,290 C 500,250 590,240 680,160" fill="none" stroke="#737873" stroke-dasharray="4,4" stroke-width="2.5"></path>
<!-- Route A: RTE-018 (RECOMMENDED - Bold Olive Solid Line) -->
<path d="M 80,240 C 160,220 230,230 310,210 C 390,190 480,140 680,160" fill="none" stroke="#d4e9c4" stroke-linecap="round" stroke-width="4.5"></path>
<!-- Checkpoint Nodes & Markers -->
<!-- Origin: DEP-0002 -->
<circle cx="80" cy="240" fill="#17251c" r="6" stroke="#d4e9c4" stroke-width="2"></circle>
<!-- CP 1: Bodhkharbu KM 42 -->
<circle cx="200" cy="225" fill="#f7faf2" r="4.5" stroke="#17251c" stroke-width="1.5"></circle>
<!-- CP 2: Khangral CP KM 96 (Vehicle Current Position) -->
<circle class="animate-ping opacity-75" cx="310" cy="210" fill="#516446" r="7" stroke="#ffffff" stroke-width="2"></circle>
<circle cx="310" cy="210" fill="#516446" r="6" stroke="#ffffff" stroke-width="2"></circle>
<!-- CP 3: Fotu La Pass KM 124 (High Summit) -->
<polygon fill="#c49a45" points="460,150 467,163 453,163" stroke="#ffffff" stroke-width="1"></polygon>
<!-- Hazard: Zojila Pass on Route B -->
<polygon fill="#ba1a1a" points="320,93 328,107 312,107" stroke="#ffffff" stroke-width="1"></polygon>
<!-- Destination: LOC-0042 Post Alpha -->
<rect fill="#ba1a1a" height="16" rx="2" stroke="#ffffff" stroke-width="2" width="16" x="672" y="152"></rect>
</svg>
<!-- Overlay Tactical Labels on Map -->
<div class="absolute left-10 top-[260px] font-mono text-[10px] bg-primary-container/90 px-2 py-0.5 rounded border border-outline-variant text-[#f7faf2]">
                DEP-0002 [LEH DEPOT]
              </div>
<div class="absolute left-[265px] top-[170px] font-mono text-[10px] bg-secondary text-on-secondary px-2 py-0.5 rounded shadow-sm font-semibold flex items-center gap-1 border border-secondary-fixed">
<span class="material-symbols-outlined text-[12px]">local_shipping</span>
<span>VH-0087 (KM 96)</span>
</div>
<div class="absolute left-[440px] top-[115px] font-mono text-[10px] bg-primary-container/90 px-1.5 py-0.5 rounded border border-outline-variant text-[#f7faf2]">
                FOTU LA PASS (4,108m)
              </div>
<div class="absolute left-[300px] top-[65px] font-mono text-[10px] bg-error-container text-on-error-container px-1.5 py-0.5 rounded border border-error font-semibold flex items-center gap-1">
<span class="material-symbols-outlined text-[12px]">warning</span>
<span>ZOJILA: ICING + ROCKFALL</span>
</div>
<div class="absolute right-6 top-[180px] font-mono text-[10px] bg-primary-container/90 px-2 py-0.5 rounded border border-secondary text-surface-bright font-bold">
                LOC-0042 [FWD ALPHA]
              </div>
<!-- Map Legend in Bottom Left -->
<div class="absolute left-3 bottom-3 p-2 bg-primary-container/95 border border-outline-variant rounded text-[10px] font-mono flex flex-col gap-1.5 text-surface-bright backdrop-blur-xs">
<div class="flex items-center gap-2">
<span class="w-4 h-1 bg-[#d4e9c4] rounded"></span>
<span class="font-semibold text-[#d4e9c4]">RTE-018: Leh Axis (Recommended)</span>
</div>
<div class="flex items-center gap-2">
<span class="w-4 h-0.5 border-t border-dashed border-[#c49a45]"></span>
<span class="text-[#c49a45]">RTE-021: Zojila Bypass (Hazard Active)</span>
</div>
<div class="flex items-center gap-2">
<span class="w-4 h-0.5 border-t border-dashed border-[#737873]"></span>
<span class="text-[#c3c8c2]">RTE-024: Southern Chushul Pass</span>
</div>
</div>
<!-- Map Utility Control Floating Bar in Top Right -->
<div class="absolute right-3 top-3 flex flex-col gap-1 bg-primary-container/90 border border-outline-variant rounded p-1">
<button class="p-1 hover:bg-secondary rounded text-surface-bright" title="Zoom In">
<span class="material-symbols-outlined text-[16px]">add</span>
</button>
<button class="p-1 hover:bg-secondary rounded text-surface-bright" title="Zoom Out">
<span class="material-symbols-outlined text-[16px]">remove</span>
</button>
<button class="p-1 hover:bg-secondary rounded text-surface-bright" title="Center View">
<span class="material-symbols-outlined text-[16px]">filter_center_focus</span>
</button>
</div>
</div>
<!-- Route Map Quick Segment Metrics -->
<div class="px-4 py-2 bg-surface-container-low border-t border-outline-variant flex flex-wrap items-center justify-between text-xs font-mono">
<span class="text-on-surface-variant">CORRIDOR ELEVATION PROFILE: MIN 3,100M // SUMMIT 4,108M MSL // GRADIENT MAX 11.2%</span>
<span class="text-secondary font-semibold">ALL SEGMENTS MONITORED BY SATELLITE RADAR</span>
</div>
</div>
<!-- High-Density Candidate Route Comparison Table -->
<div class="bg-surface-container-lowest rounded-lg border border-outline-variant overflow-hidden flex flex-col">
<div class="px-4 py-3 bg-surface-container-low border-b border-outline-variant flex items-center justify-between">
<div>
<h3 class="font-headline-sm text-headline-sm text-primary font-bold">Candidate Corridor Comparison</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Synthesized trade-off matrix evaluated across delivery window, risk, and axle limits.</p>
</div>
<span class="font-mono text-label-xs text-label-xs text-on-surface-variant">3 FEASIBLE CORRIDORS RANKED</span>
</div>
<!-- Dense Data Table -->
<div class="overflow-x-auto custom-scroll">
<table class="w-full text-left border-collapse text-xs">
<thead>
<tr class="bg-surface-container border-b border-outline-variant text-[11px] font-semibold text-primary uppercase font-mono tracking-wider">
<th class="py-2.5 px-3">Route ID</th>
<th class="py-2.5 px-2 text-center">Score</th>
<th class="py-2.5 px-3">Dist</th>
<th class="py-2.5 px-3">ETA</th>
<th class="py-2.5 px-2">Duration</th>
<th class="py-2.5 px-3">Risk Level</th>
<th class="py-2.5 px-2">Reliability</th>
<th class="py-2.5 px-3">Payload Margin</th>
<th class="py-2.5 px-3">Variance</th>
<th class="py-2.5 px-3 text-right">Selection</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/60 font-mono text-[12px]">
<!-- Row 1: RECOMMENDED & SELECTED (RTE-018) -->
<tr class="bg-secondary-container/20 border-l-4 border-secondary hover:bg-secondary-container/30 transition-colors">
<td class="py-3 px-3">
<div class="flex items-center gap-1.5 font-bold text-on-surface">
<span class="material-symbols-outlined text-secondary text-[16px]" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span>RTE-018</span>
<span class="text-[9px] bg-secondary text-on-secondary px-1 py-0.2 rounded font-sans uppercase">Optimum</span>
</div>
<span class="text-[10px] text-on-surface-variant block font-sans">Leh - Khangral Axis</span>
</td>
<td class="py-3 px-2 text-center">
<span class="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold text-[13px] border border-secondary">
                        94
                      </span>
</td>
<td class="py-3 px-3 font-semibold text-on-surface">184 km</td>
<td class="py-3 px-3">
<span class="font-bold text-secondary">14:35 IST</span>
<span class="text-[10px] text-on-surface-variant block font-sans">Buffer: +1h 25m</span>
</td>
<td class="py-3 px-2 text-on-surface">4h 10m</td>
<td class="py-3 px-3">
<span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface-container text-on-surface text-[11px] font-semibold border border-outline-variant">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        Low (12%)
                      </span>
</td>
<td class="py-3 px-2 font-semibold text-on-surface">92.4%</td>
<td class="py-3 px-3 text-on-surface">
<span>72.5%</span>
<span class="text-[10px] text-on-surface-variant block">18 MT backhaul</span>
</td>
<td class="py-3 px-3 text-secondary font-semibold">+0 min</td>
<td class="py-3 px-3 text-right">
<span class="px-2.5 py-1 bg-secondary text-on-secondary font-bold text-[11px] rounded uppercase tracking-wider inline-flex items-center gap-1">
                        Selected
                      </span>
</td>
</tr>
<!-- Row 2: RTE-021 (Zojila Bypass) -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-3 px-3">
<div class="flex items-center gap-1.5 font-bold text-on-surface">
<span class="material-symbols-outlined text-outline text-[16px]">radio_button_unchecked</span>
<span>RTE-021</span>
</div>
<span class="text-[10px] text-on-surface-variant block font-sans">Zojila High Bypass</span>
</td>
<td class="py-3 px-2 text-center">
<span class="px-2 py-0.5 rounded bg-surface-container text-on-surface font-bold text-[12px] border border-outline-variant">
                        82
                      </span>
</td>
<td class="py-3 px-3 text-on-surface">171 km</td>
<td class="py-3 px-3">
<span class="font-medium text-on-surface">14:50 IST</span>
<span class="text-[10px] text-error block font-sans">Buffer: +1h 10m</span>
</td>
<td class="py-3 px-2 text-on-surface">4h 35m</td>
<td class="py-3 px-3">
<span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 text-[11px] font-semibold border border-amber-300">
<span class="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                        Med (27%)
                      </span>
</td>
<td class="py-3 px-2 text-on-surface">81.0%</td>
<td class="py-3 px-3 text-on-surface">
<span class="text-error font-semibold">91.2%</span>
<span class="text-[10px] text-on-surface-variant block">Axle cap 6.5 MT</span>
</td>
<td class="py-3 px-3 text-error font-semibold">+42 min</td>
<td class="py-3 px-3 text-right">
<button class="px-2 py-1 bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-[11px] rounded border border-outline-variant uppercase transition-colors">
                        Compare
                      </button>
</td>
</tr>
<!-- Row 3: RTE-024 (Southern Chushul) -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-3 px-3">
<div class="flex items-center gap-1.5 font-bold text-on-surface">
<span class="material-symbols-outlined text-outline text-[16px]">radio_button_unchecked</span>
<span>RTE-024</span>
</div>
<span class="text-[10px] text-on-surface-variant block font-sans">Southern Chushul Ridge</span>
</td>
<td class="py-3 px-2 text-center">
<span class="px-2 py-0.5 rounded bg-surface-container text-on-surface font-bold text-[12px] border border-outline-variant">
                        76
                      </span>
</td>
<td class="py-3 px-3 text-on-surface">198 km</td>
<td class="py-3 px-3">
<span class="font-medium text-on-surface">15:05 IST</span>
<span class="text-[10px] text-on-surface-variant block font-sans">Buffer: +55m</span>
</td>
<td class="py-3 px-2 text-on-surface">4h 50m</td>
<td class="py-3 px-3">
<span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface-container text-on-surface text-[11px] font-semibold border border-outline-variant">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        Low (15%)
                      </span>
</td>
<td class="py-3 px-2 text-on-surface">86.2%</td>
<td class="py-3 px-3 text-on-surface">
<span>64.0%</span>
<span class="text-[10px] text-on-surface-variant block">Ample spare cap</span>
</td>
<td class="py-3 px-3 text-on-surface font-semibold">+15 min</td>
<td class="py-3 px-3 text-right">
<button class="px-2 py-1 bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-[11px] rounded border border-outline-variant uppercase transition-colors">
                        Compare
                      </button>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Segment Level Micro-Audit Breakdown for RTE-018 -->
<div class="p-3.5 bg-surface-container-low border-t border-outline-variant flex flex-col gap-2">
<div class="flex items-center justify-between">
<span class="font-label-xs text-label-xs text-primary font-bold uppercase tracking-wider">
                  SEGMENT TELEMETRY BREAKDOWN // SELECTED CORRIDOR (RTE-018)
                </span>
<span class="font-mono text-[10px] text-on-surface-variant">BRO CLEARANCE VALID UNTIL 18:00 IST</span>
</div>
<div class="grid grid-cols-1 sm:grid-cols-4 gap-2 text-[11px] font-mono">
<!-- S-01 -->
<div class="p-2 bg-surface-container-lowest rounded border border-outline-variant">
<div class="flex items-center justify-between">
<span class="font-bold text-on-surface">S-01: Depot → Bodhkharbu</span>
<span class="text-secondary font-bold">CLEAR</span>
</div>
<div class="text-on-surface-variant text-[10px] mt-0.5">42 km · 55 min · Risk: Negligible</div>
</div>
<!-- S-02 -->
<div class="p-2 bg-surface-container-lowest rounded border border-outline-variant">
<div class="flex items-center justify-between">
<span class="font-bold text-on-surface">S-02: Bodhkharbu → Khangral</span>
<span class="text-secondary font-bold">NOMINAL</span>
</div>
<div class="text-on-surface-variant text-[10px] mt-0.5">54 km · 1h 10m · Hard Snow</div>
</div>
<!-- S-03 -->
<div class="p-2 bg-surface-container-lowest rounded border border-amber-300">
<div class="flex items-center justify-between">
<span class="font-bold text-on-surface">S-03: Khangral → Fotu La</span>
<span class="text-amber-700 font-bold">CHAINS REQ</span>
</div>
<div class="text-on-surface-variant text-[10px] mt-0.5">28 km · 45 min · Snow Cutter Op</div>
</div>
<!-- S-04 -->
<div class="p-2 bg-surface-container-lowest rounded border border-outline-variant">
<div class="flex items-center justify-between">
<span class="font-bold text-on-surface">S-04: Fotu La → Post Alpha</span>
<span class="text-secondary font-bold">GRADED</span>
</div>
<div class="text-on-surface-variant text-[10px] mt-0.5">60 km · 1h 20m · Descent nominal</div>
</div>
</div>
<div class="text-[11px] text-on-surface-variant flex items-center gap-1.5 pt-1">
<span class="material-symbols-outlined text-[14px] text-secondary">info</span>
<span>Primary hazard driver is Fotu La pass approach (S-03); snow plow BRO Sector-4 cleared road surface at 13:45 IST.</span>
</div>
</div>
</div>
</div>
<!-- RIGHT COLUMN (~40% = xl:col-span-5) -->
<div class="xl:col-span-5 flex flex-col gap-6">
<!-- 1. Recommended Route Dossier & Score Breakdown Card -->
<div class="bg-surface-container-lowest rounded-lg border border-outline-variant p-4 flex flex-col gap-4">
<div class="flex items-center justify-between border-b border-outline-variant pb-3">
<div>
<span class="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider">OPTIMAL CANDIDATE DOSSIER</span>
<h2 class="font-headline-sm text-headline-sm text-primary font-bold">RTE-018 (Leh - Khangral Axis)</h2>
</div>
<div class="text-right">
<span class="font-mono text-headline-lg text-headline-lg font-bold text-secondary">94<span class="text-on-surface-variant text-[14px]">/100</span></span>
<span class="block font-label-xs text-label-xs text-on-surface-variant uppercase font-semibold">Algorithm Confidence</span>
</div>
</div>
<!-- Score Sub-component Progress Bars -->
<div class="flex flex-col gap-2.5 font-mono text-xs">
<div>
<div class="flex items-center justify-between mb-1">
<span class="text-on-surface font-sans font-medium">Delivery Performance (Window Safety)</span>
<span class="font-bold text-secondary">38 / 40 pts</span>
</div>
<div class="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
<div class="bg-secondary h-full rounded-full" style="width: 95%;"></div>
</div>
</div>
<div>
<div class="flex items-center justify-between mb-1">
<span class="text-on-surface font-sans font-medium">Risk Mitigation (Avalanche / Icing)</span>
<span class="font-bold text-secondary">28 / 30 pts</span>
</div>
<div class="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
<div class="bg-secondary h-full rounded-full" style="width: 93%;"></div>
</div>
</div>
<div>
<div class="flex items-center justify-between mb-1">
<span class="text-on-surface font-sans font-medium">Corridor Historical Reliability</span>
<span class="font-bold text-secondary">18 / 20 pts</span>
</div>
<div class="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
<div class="bg-secondary h-full rounded-full" style="width: 90%;"></div>
</div>
</div>
<div>
<div class="flex items-center justify-between mb-1">
<span class="text-on-surface font-sans font-medium">Backhaul &amp; Axle Capacity Headroom</span>
<span class="font-bold text-secondary">10 / 10 pts</span>
</div>
<div class="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
<div class="bg-secondary h-full rounded-full" style="width: 100%;"></div>
</div>
</div>
</div>
<!-- Human-Readable Operational Rationale List -->
<div class="p-3 bg-surface-container-low rounded border border-outline-variant flex flex-col gap-2 text-xs">
<span class="font-label-xs text-label-xs text-on-surface font-bold uppercase tracking-wider">Engine Operational Justification:</span>
<ul class="flex flex-col gap-1.5 text-on-surface-variant">
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">verified</span>
<span><strong>Satisfies Delivery Window:</strong> ETA 14:35 IST provides an operational cushion of 1h 25m prior to Post Alpha hard cutoff (16:00 IST).</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">verified</span>
<span><strong>Hazard Bypassed:</strong> Eliminates Zojila Pass icing bottleneck that has stalled 3 civilian convoys since 12:15 IST.</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">verified</span>
<span><strong>Axle Load Compliance:</strong> 5.8 MT payload operates within 72.5% axle limit across 11.2% maximum road gradient.</span>
</li>
</ul>
</div>
</div>
<!-- 2. Delivery Time & Margin Visual Timeline Analysis -->
<div class="bg-surface-container-lowest rounded-lg border border-outline-variant p-4 flex flex-col gap-3">
<div class="flex items-center justify-between">
<h3 class="font-label-md text-label-md font-bold text-primary uppercase tracking-wider">Delivery Window Timeline &amp; Margin</h3>
<span class="font-mono text-label-xs text-label-xs text-error font-bold">CUTOFF: 16:00 IST</span>
</div>
<div class="relative py-4 px-2">
<!-- Timeline Horizontal Bar -->
<div class="w-full h-2 bg-surface-container rounded-full relative overflow-visible">
<!-- Nominal Span -->
<div class="absolute left-[30%] right-[10%] h-full bg-secondary/30 rounded-full"></div>
<!-- Candidate B Point: 14:50 -->
<div class="absolute left-[45%] top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
<div class="w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-surface-container-lowest"></div>
<span class="font-mono text-[9px] mt-1 text-on-surface-variant">RTE-021 (14:50)</span>
</div>
<!-- Candidate A Point: 14:35 (Selected) -->
<div class="absolute left-[35%] top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
<div class="w-4 h-4 rounded-full bg-secondary border-2 border-surface-container-lowest shadow-sm"></div>
<span class="font-mono text-[10px] font-bold text-secondary mt-1">RTE-018 (14:35)</span>
</div>
<!-- Candidate C Point: 15:05 -->
<div class="absolute left-[55%] top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
<div class="w-3.5 h-3.5 rounded-full bg-outline border-2 border-surface-container-lowest"></div>
<span class="font-mono text-[9px] mt-1 text-on-surface-variant">RTE-024 (15:05)</span>
</div>
<!-- Hard Cutoff: 16:00 -->
<div class="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
<div class="w-4 h-4 rounded-full bg-error border-2 border-surface-container-lowest"></div>
<span class="font-mono text-[10px] font-bold text-error mt-1">16:00 Hard Stop</span>
</div>
</div>
</div>
<div class="flex items-center justify-between text-xs font-mono pt-2 border-t border-outline-variant text-on-surface-variant">
<span>DEPARTURE: 10:25 IST</span>
<span class="text-secondary font-bold">SAFETY CUSHION: +85 MINS</span>
<span>DEP-0002 → LOC-0042</span>
</div>
</div>
<!-- 3. Interactive 'What-If?' Scenario Testing Mini-Console -->
<div class="bg-surface-container-lowest rounded-lg border border-outline-variant p-4 flex flex-col gap-3">
<div class="flex items-center justify-between">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[16px] text-on-surface-variant">tune</span>
<h3 class="font-label-md text-label-md font-bold text-primary uppercase tracking-wider">Interactive 'What-If?' Simulation</h3>
</div>
<span class="font-mono text-label-xs text-label-xs text-on-surface-variant">RAPID HEURISTIC</span>
</div>
<div class="flex flex-col gap-2">
<!-- Toggle 1 -->
<div class="p-2.5 bg-surface-container-low rounded border border-outline-variant flex items-center justify-between text-xs">
<div>
<span class="font-bold text-on-surface block">If delivery cutoff tightens to 14:15 IST</span>
<span class="text-error text-[11px] font-mono">No ground corridor viable; mandates Mi-17 heavy-lift air-drop sortie.</span>
</div>
<button class="px-2 py-1 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-mono text-[11px] rounded border border-outline-variant">
                  Simulate
                </button>
</div>
<!-- Toggle 2 -->
<div class="p-2.5 bg-surface-container-low rounded border border-outline-variant flex items-center justify-between text-xs">
<div>
<span class="font-bold text-on-surface block">If Zojila Pass is de-iced before 13:30 IST</span>
<span class="text-secondary text-[11px] font-mono">RTE-021 score increases from 82 to 91 (Distance savings: 13 km).</span>
</div>
<button class="px-2 py-1 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-mono text-[11px] rounded border border-outline-variant">
                  Simulate
                </button>
</div>
<!-- Toggle 3 -->
<div class="p-2.5 bg-surface-container-low rounded border border-outline-variant flex items-center justify-between text-xs">
<div>
<span class="font-bold text-on-surface block">If payload load is increased by +2.2 MT (Total: 8.0 MT)</span>
<span class="text-on-surface-variant text-[11px] font-mono">RTE-021 strictly invalidated (Axle cap 6.5 MT breached).</span>
</div>
<button class="px-2 py-1 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-mono text-[11px] rounded border border-outline-variant">
                  Simulate
                </button>
</div>
</div>
</div>
<!-- 4. Apply Selected Route Confirmation & Human-in-the-Loop Action Card -->
<div class="bg-surface-container-lowest rounded-lg border-2 border-secondary p-4 flex flex-col gap-3 shadow-sm">
<div class="flex items-center justify-between pb-2 border-b border-outline-variant">
<span class="font-label-xs text-label-xs text-secondary font-bold uppercase tracking-wider flex items-center gap-1">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
                READY FOR COMMAND AUTHORIZATION
              </span>
<span class="font-mono text-[10px] text-on-surface-variant">OP-DISPATCH READY</span>
</div>
<!-- Route Transformation Summary -->
<div class="grid grid-cols-2 gap-3 text-xs font-mono">
<div class="p-2 bg-surface-container-low rounded border border-outline-variant">
<span class="text-[10px] text-on-surface-variant block uppercase font-sans">Current Nominated Route</span>
<span class="font-bold text-error text-[12px]">RTE-021 (Delayed +42m)</span>
<span class="text-[10px] text-on-surface-variant block">Risk: Medium · Zojila freeze</span>
</div>
<div class="p-2 bg-secondary-container/30 rounded border border-secondary">
<span class="text-[10px] text-on-secondary-container block uppercase font-sans font-bold">Optimized Route Proposal</span>
<span class="font-bold text-secondary text-[12px]">RTE-018 (Leh Axis)</span>
<span class="text-[10px] text-on-surface-variant block">ETA Delta: -15 min · Risk: Low</span>
</div>
</div>
<!-- Action Buttons -->
<div class="flex flex-col gap-2 pt-1">
<button class="w-full py-2.5 px-4 bg-primary-container hover:bg-secondary text-surface-bright rounded-lg font-label-md text-label-md uppercase font-bold tracking-wider transition-all duration-150 active:scale-[0.99] flex items-center justify-center gap-2 border border-primary-container shadow-sm">
<span class="material-symbols-outlined text-[18px]">done_all</span>
<span>CONFIRM &amp; APPLY ROUTE TO SHP-2048</span>
</button>
<div class="flex items-center gap-2">
<button class="flex-1 py-1.5 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface rounded font-label-xs text-label-xs uppercase font-semibold border border-outline-variant transition-colors">
                  Save as Alternate Contingency
                </button>
<button class="py-1.5 px-3 bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface rounded font-label-xs text-label-xs uppercase border border-outline-variant transition-colors">
                  Discard
                </button>
</div>
</div>
<div class="text-[10px] font-mono text-center text-on-surface-variant">
              Executing this updates active telemetry for Stallion VH-0087 and notifies Post Alpha Command.
            </div>
</div>
<!-- Optimization Audit Trail Mini-Feed -->
<div class="p-3 bg-surface-container-low rounded-lg border border-outline-variant flex flex-col gap-2 text-[11px] font-mono">
<span class="font-label-xs text-label-xs text-on-surface-variant uppercase font-semibold">Optimization Event Log</span>
<div class="flex flex-col gap-1 text-on-surface-variant">
<div class="flex items-center justify-between">
<span>14:48:12 IST</span>
<span class="text-on-surface">Route RTE-018 nominated by Officer BK</span>
</div>
<div class="flex items-center justify-between">
<span>14:42:04 IST</span>
<span class="text-secondary font-semibold">Algorithm convergence (0.84s, 12 nodes)</span>
</div>
<div class="flex items-center justify-between">
<span>14:38:50 IST</span>
<span>Constraints ingested from RL-26 Route Intelligence</span>
</div>
<div class="flex items-center justify-between">
<span>14:35:10 IST</span>
<span>BRO Weather Alert #104 flagged on Zojila Pass</span>
</div>
</div>
</div>
</div>
</main>`;
