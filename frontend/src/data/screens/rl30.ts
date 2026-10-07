// Screen: RL-30 — Risk / Alert Details // RISK-1042
// Route: /risks/RISK-1042
export const rl30Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto px-8 max-w-[1600px] w-full flex flex-col gap-6">
<!-- SECTION 1: INVESTIGATION HEADER BANNER -->
<section class="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">
<div class="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
<div class="flex flex-col gap-2">
<div class="flex flex-wrap items-center gap-2">
<span class="px-2.5 py-0.5 rounded text-label-xs font-mono font-bold bg-error-container text-on-error-container border border-error">
                HIGH SEVERITY // SCORE: 87/100
              </span>
<span class="px-2.5 py-0.5 rounded text-label-xs font-mono font-bold bg-secondary-container text-on-secondary-container border border-secondary">
                CONFIDENCE: 94%
              </span>
<span class="px-2.5 py-0.5 rounded text-label-xs font-mono font-bold bg-surface-container-high text-on-surface border border-outline-variant">
                STATUS: OPEN (AWAITING REVIEW)
              </span>
<span class="px-2.5 py-0.5 rounded text-label-xs font-mono font-semibold bg-surface-container text-on-surface-variant flex items-center gap-1 border border-outline-variant">
<span class="material-symbols-outlined text-xs" data-icon="pin_drop">pin_drop</span>
                Forward Post Alpha (LOC-0042, 4,820m MSL)
              </span>
</div>
<div class="flex items-center gap-3">
<h1 class="font-headline-lg text-headline-lg font-bold text-primary tracking-tight">
                RISK-1042 — Class III POL (Arctic Diesel) Fuel Stockout Risk
              </h1>
</div>
<div class="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant font-mono">
<span class="text-error font-semibold flex items-center gap-1">
<span class="material-symbols-outlined text-sm" data-icon="timer">timer</span>
                T-MINUS 144 HOURS (6 DAYS) TO RUNWAY BREACH
              </span>
<span class="text-outline">|</span>
<span>Primary Contingency Window: 09–15 Oct 2026</span>
<span class="text-outline">|</span>
<span>Audit Trail: #RL-2026-FPA-098</span>
</div>
</div>
<!-- Quick Action Buttons -->
<div class="flex flex-wrap items-center gap-2">
<button class="px-3 py-2 rounded-lg bg-surface border border-outline text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center gap-1.5 transition-colors">
<span class="material-symbols-outlined text-base" data-icon="check_circle">check_circle</span>
<span>Acknowledge</span>
</button>
<button class="px-3 py-2 rounded-lg bg-surface border border-outline text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center gap-1.5 transition-colors">
<span class="material-symbols-outlined text-base" data-icon="download">download</span>
<span>Export Classified Sitrep</span>
</button>
<button class="px-3.5 py-2 rounded-lg bg-secondary text-on-secondary hover:bg-secondary/90 font-label-sm text-label-sm flex items-center gap-1.5 transition-colors shadow-sm">
<span class="material-symbols-outlined text-base" data-icon="crisis_alert">crisis_alert</span>
<span>Plan Mitigation Workflow</span>
</button>
</div>
</div>
</section>
<!-- SECTION 2: OPERATIONAL SUMMARY KPI STRIP (6 compact dense cards) -->
<section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
<!-- KPI 1 -->
<div class="p-3.5 rounded-lg bg-surface-container-lowest border border-outline-variant flex flex-col justify-between">
<div class="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs uppercase">
<span>Stockout Prob.</span>
<span class="material-symbols-outlined text-error text-base" data-icon="warning">warning</span>
</div>
<div class="mt-2 flex items-baseline gap-1.5">
<span class="telemetry-num text-2xl font-bold text-error">91%</span>
<span class="font-label-xs text-label-xs text-error font-medium">Critical</span>
</div>
<span class="font-label-xs text-label-xs text-on-surface-variant mt-1">Safety buffer breach</span>
</div>
<!-- KPI 2 -->
<div class="p-3.5 rounded-lg bg-surface-container-lowest border border-outline-variant flex flex-col justify-between">
<div class="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs uppercase">
<span>Operational Severity</span>
<span class="material-symbols-outlined text-error text-base" data-icon="priority_high">priority_high</span>
</div>
<div class="mt-2 flex items-baseline gap-1">
<span class="font-headline-sm text-headline-sm font-bold text-error uppercase">CRITICAL</span>
</div>
<span class="font-label-xs text-label-xs text-on-surface-variant mt-1">Genset &amp; Habitat Heat</span>
</div>
<!-- KPI 3 -->
<div class="p-3.5 rounded-lg bg-surface-container-lowest border border-outline-variant flex flex-col justify-between">
<div class="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs uppercase">
<span>Time to Breach</span>
<span class="material-symbols-outlined text-secondary text-base" data-icon="hourglass_top">hourglass_top</span>
</div>
<div class="mt-2 flex items-baseline gap-1.5">
<span class="telemetry-num text-2xl font-bold text-primary">6 Days</span>
</div>
<span class="font-label-xs text-label-xs text-on-surface-variant mt-1">15 Oct 2026 Zero-Buffer</span>
</div>
<!-- KPI 4 -->
<div class="p-3.5 rounded-lg bg-surface-container-lowest border border-outline-variant flex flex-col justify-between">
<div class="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs uppercase">
<span>Algo Confidence</span>
<span class="material-symbols-outlined text-secondary text-base" data-icon="model_training">model_training</span>
</div>
<div class="mt-2 flex items-baseline gap-1.5">
<span class="telemetry-num text-2xl font-bold text-primary">94%</span>
<span class="font-label-xs text-label-xs text-secondary font-medium">Predict-Net</span>
</div>
<span class="font-label-xs text-label-xs text-on-surface-variant mt-1">Model v4.8 (High)</span>
</div>
<!-- KPI 5 -->
<div class="p-3.5 rounded-lg bg-surface-container-lowest border border-outline-variant flex flex-col justify-between">
<div class="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs uppercase">
<span>Interconnected Nodes</span>
<span class="material-symbols-outlined text-on-surface-variant text-base" data-icon="hub">hub</span>
</div>
<div class="mt-2 flex items-baseline gap-1.5">
<span class="telemetry-num text-2xl font-bold text-primary">4 Nodes</span>
</div>
<span class="font-label-xs text-label-xs text-on-surface-variant mt-1">1 Post, 1 Corridor, 2 Assets</span>
</div>
<!-- KPI 6 -->
<div class="p-3.5 rounded-lg bg-surface-container-lowest border border-outline-variant flex flex-col justify-between">
<div class="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs uppercase">
<span>Investigation State</span>
<span class="material-symbols-outlined text-on-surface-variant text-base" data-icon="policy">policy</span>
</div>
<div class="mt-2 flex items-baseline gap-1">
<span class="font-headline-sm text-headline-sm font-bold text-on-surface">OPEN</span>
</div>
<span class="font-label-xs text-label-xs text-on-surface-variant mt-1">Awaiting QM Sign-off</span>
</div>
</section>
<!-- SECTION 3: CAUSAL EXPLANATION & SUPPORTING EVIDENCE -->
<section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
<!-- High-Contrast Analytical Narrative (2 cols) -->
<div class="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl p-5 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between pb-3 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="psychology">psychology</span>
<h3 class="font-headline-sm text-headline-sm font-bold text-primary">Primary Investigation Narrative &amp; Causal Explanation</h3>
</div>
<span class="font-mono text-label-xs text-on-surface-variant bg-surface-container px-2 py-0.5 rounded border border-outline-variant">
                ANALYTICAL SYNTHESIS
              </span>
</div>
<div class="mt-4 space-y-3 font-body-md text-body-md text-on-surface leading-relaxed">
<p>
                Forward Post Alpha (LOC-0042) is undergoing an unpredicted fuel depletion curve for <strong class="text-primary font-semibold">Class III POL (Arctic High-Altitude Diesel)</strong>. A sudden alpine cold front has suppressed ambient temperatures to <span class="font-mono font-semibold">-24°C</span> at 4,820m MSL, precipitating a continuous 24-hour runtime requirement for the main 45 kVA habitat micro-turbine and environmental protection systems.
              </p>
<p>
                Baseline daily consumption of <span class="font-mono font-semibold">540 L/day</span> has surged by <strong class="text-error font-semibold">+18% (actual burn: 680 L/day)</strong>. Concurrently, inbound replenishment sortie <strong class="font-mono text-primary font-semibold">SHP-2048</strong> carrying 3,000 L via <strong class="font-mono text-primary font-semibold">RTE-018 (Fotu La Pass)</strong> is constrained by an active Level 1 avalanche warning and single-corridor axle restrictions.
              </p>
<div class="p-3 bg-surface-container-low rounded-lg border-l-4 border-error text-label-sm font-label-sm text-on-surface flex items-start gap-2.5">
<span class="material-symbols-outlined text-error text-lg flex-shrink-0" data-icon="error">error</span>
<span>
<strong>Tactical Conclusion:</strong> Without secondary replenishment or immediate broaching of tertiary strategic reserves at Bodhkharbu (DEP-0002), on-hand stock will breach the critical 2,000 L safety margin on <strong>12 Oct 2026</strong>, leading to total generator starvation by <strong>15 Oct 2026</strong>.
                </span>
</div>
</div>
</div>
<!-- Supporting Operational Evidence Pills -->
<div class="mt-5 pt-3 border-t border-outline-variant">
<span class="font-label-xs text-label-xs uppercase text-on-surface-variant font-semibold tracking-wider block mb-2">Auditable Telemetry Feeds</span>
<div class="grid grid-cols-2 md:grid-cols-4 gap-2">
<div class="p-2 rounded bg-surface-container border border-outline-variant text-label-xs flex flex-col">
<span class="text-on-surface-variant font-mono">LOC-0042 Ledger</span>
<span class="font-mono font-bold text-on-surface mt-0.5">4,200 L On-Hand</span>
<span class="text-secondary text-[9px] mt-0.5">Synced 5m ago</span>
</div>
<div class="p-2 rounded bg-surface-container border border-outline-variant text-label-xs flex flex-col">
<span class="text-on-surface-variant font-mono">Consumption Stream</span>
<span class="font-mono font-bold text-error mt-0.5">680 L/Day (+18%)</span>
<span class="text-secondary text-[9px] mt-0.5">Metering v2 (8m ago)</span>
</div>
<div class="p-2 rounded bg-surface-container border border-outline-variant text-label-xs flex flex-col">
<span class="text-on-surface-variant font-mono">Predict Engine</span>
<span class="font-mono font-bold text-on-surface mt-0.5">FV-2026-10-05-03</span>
<span class="text-secondary text-[9px] mt-0.5">91% Conf (Pass 4)</span>
</div>
<div class="p-2 rounded bg-surface-container border border-outline-variant text-label-xs flex flex-col">
<span class="text-on-surface-variant font-mono">Transit Manifest</span>
<span class="font-mono font-bold text-on-surface mt-0.5">SHP-2048 En Route</span>
<span class="text-secondary text-[9px] mt-0.5">RTE-018 GPS (3m ago)</span>
</div>
</div>
</div>
</div>
<!-- Risk Drivers & Contribution Weight Matrix (1 col) -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between pb-3 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="tune">tune</span>
<h3 class="font-headline-sm text-headline-sm font-bold text-primary">Risk Drivers &amp; Weights</h3>
</div>
<span class="font-mono text-label-xs text-on-surface-variant">TOTAL: 100%</span>
</div>
<div class="mt-4 space-y-4">
<!-- Driver 1 -->
<div>
<div class="flex items-center justify-between text-label-sm font-label-sm">
<span class="text-on-surface font-semibold">Daily Consumption Surge</span>
<span class="font-mono font-bold text-error">42% WEIGHT</span>
</div>
<div class="w-full bg-surface-container h-2 rounded mt-1.5 overflow-hidden">
<div class="bg-error h-2 rounded" style="width: 42%;"></div>
</div>
<span class="text-label-xs text-on-surface-variant font-mono mt-0.5 block">680 L/day (+140 L/day cold penalty)</span>
</div>
<!-- Driver 2 -->
<div>
<div class="flex items-center justify-between text-label-sm font-label-sm">
<span class="text-on-surface font-semibold">Physical Inventory Deficit</span>
<span class="font-mono font-bold text-error">31% WEIGHT</span>
</div>
<div class="w-full bg-surface-container h-2 rounded mt-1.5 overflow-hidden">
<div class="bg-error h-2 rounded" style="width: 31%;"></div>
</div>
<span class="text-label-xs text-on-surface-variant font-mono mt-0.5 block">4,200 L on-hand vs 2,000 L safety margin</span>
</div>
<!-- Driver 3 -->
<div>
<div class="flex items-center justify-between text-label-sm font-label-sm">
<span class="text-on-surface font-semibold">Inbound Transit Single Dependency</span>
<span class="font-mono font-bold text-secondary">18% WEIGHT</span>
</div>
<div class="w-full bg-surface-container h-2 rounded mt-1.5 overflow-hidden">
<div class="bg-secondary h-2 rounded" style="width: 18%;"></div>
</div>
<span class="text-label-xs text-on-surface-variant font-mono mt-0.5 block">SHP-2048 sole scheduled re-supply</span>
</div>
<!-- Driver 4 -->
<div>
<div class="flex items-center justify-between text-label-sm font-label-sm">
<span class="text-on-surface font-semibold">Alpine Pass Weather Vulnerability</span>
<span class="font-mono font-bold text-on-surface-variant">9% WEIGHT</span>
</div>
<div class="w-full bg-surface-container h-2 rounded mt-1.5 overflow-hidden">
<div class="bg-outline h-2 rounded" style="width: 9%;"></div>
</div>
<span class="text-label-xs text-on-surface-variant font-mono mt-0.5 block">Fotu La snow advisory Level 1</span>
</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-outline-variant bg-surface-container-low p-2.5 rounded border border-outline-variant text-label-xs">
<span class="font-semibold text-on-surface">Contribution Vector:</span>
<span class="text-on-surface-variant ml-1 font-mono">Thermal deficit &amp; supply chain singularity accounts for 73% of overall risk probability.</span>
</div>
</div>
</section>
<!-- SECTION 4: 7-DAY FUEL RUNWAY & RISK SCORE EVOLUTION (High Density Charts) -->
<section class="grid grid-cols-1 lg:grid-cols-12 gap-6">
<!-- Stockout Probability & Fuel Runway Projection (7 cols) -->
<div class="lg:col-span-7 bg-surface-container-lowest border border-outline-variant rounded-xl p-5 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between pb-3 border-b border-outline-variant">
<div>
<h3 class="font-headline-sm text-headline-sm font-bold text-primary">7-Day Fuel Runway Projection (POL Class III)</h3>
<span class="font-label-xs text-label-xs text-on-surface-variant">Simulated with 680 L/day dynamic burn rate &amp; single sortie arrival</span>
</div>
<div class="flex items-center gap-2">
<span class="flex items-center gap-1 text-label-xs font-mono text-on-surface-variant">
<span class="w-2.5 h-2.5 rounded-full bg-primary-container"></span> Projected
                </span>
<span class="flex items-center gap-1 text-label-xs font-mono text-error">
<span class="w-2.5 h-0.5 bg-error"></span> Critical Limit
                </span>
</div>
</div>
<!-- Stylized SVG Projection Runway Chart -->
<div class="mt-4 w-full h-56 relative">
<svg class="w-full h-full" preserveaspectratio="none" viewbox="0 0 600 200">
<!-- Grid lines -->
<line stroke="#E5E3D9" stroke-width="1" x1="40" x2="580" y1="20" y2="20"></line>
<line stroke="#E5E3D9" stroke-width="1" x1="40" x2="580" y1="60" y2="60"></line>
<line stroke="#E5E3D9" stroke-width="1" x1="40" x2="580" y1="100" y2="100"></line>
<line stroke="#E5E3D9" stroke-width="1" x1="40" x2="580" y1="140" y2="140"></line>
<!-- Safety Buffer Floor (2,000 L line) -->
<line stroke="#BA1A1A" stroke-dasharray="4,4" stroke-width="1.5" x1="40" x2="580" y1="110" y2="110"></line>
<text fill="#BA1A1A" font-family="IBM Plex Mono" font-size="10" font-weight="600" x="50" y="106">SAFETY RESERVE FLOOR: 2,000 L</text>
<!-- Depletion Area Fill -->
<polygon fill="#BA1A1A" fill-opacity="0.08" points="50,40 135,62 220,86 305,115 390,148 475,175 560,192 560,195 50,195"></polygon>
<!-- Trend Line -->
<polyline fill="none" points="50,40 135,62 220,86 305,115 390,148 475,175 560,192" stroke="#17251C" stroke-width="2.5"></polyline>
<!-- Data Points -->
<circle cx="50" cy="40" fill="#17251C" r="4"></circle>
<circle cx="135" cy="62" fill="#17251C" r="3.5"></circle>
<circle cx="220" cy="86" fill="#17251C" r="3.5"></circle>
<!-- Breach Intersection Point -->
<circle cx="305" cy="115" fill="#BA1A1A" r="5"></circle>
<circle cx="390" cy="148" fill="#BA1A1A" r="3.5"></circle>
<circle cx="475" cy="175" fill="#BA1A1A" r="3.5"></circle>
<circle cx="560" cy="192" fill="#BA1A1A" r="4"></circle>
<!-- Callout annotation on breach -->
<rect fill="#FFDAD6" height="22" rx="4" stroke="#BA1A1A" stroke-width="1" width="140" x="235" y="125"></rect>
<text fill="#93000A" font-family="IBM Plex Mono" font-size="9.5" font-weight="700" x="242" y="139">12 OCT: FLOOR BREACH</text>
</svg>
<!-- X-Axis Labels -->
<div class="flex justify-between text-label-xs font-mono text-on-surface-variant px-4 pt-1 border-t border-outline-variant">
<span>09 Oct (4.2k L)</span>
<span>10 Oct (3.5k L)</span>
<span>11 Oct (2.8k L)</span>
<span class="text-error font-bold">12 Oct (2.1k L)</span>
<span>13 Oct (1.4k L)</span>
<span>14 Oct (0.7k L)</span>
<span class="text-error font-bold">15 Oct (120 L)</span>
</div>
</div>
</div>
<!-- Bottom Telemetry Metric Strip -->
<div class="mt-4 grid grid-cols-3 gap-2 bg-surface-container p-2.5 rounded-lg border border-outline-variant">
<div class="flex flex-col">
<span class="font-label-xs text-label-xs text-on-surface-variant font-mono">CURRENT STOCK</span>
<span class="font-mono text-headline-sm font-bold text-primary">4,200 L</span>
<span class="text-label-xs text-secondary">6.17 Days Operational</span>
</div>
<div class="flex flex-col">
<span class="font-label-xs text-label-xs text-on-surface-variant font-mono">DAILY RUNTIME BURN</span>
<span class="font-mono text-headline-sm font-bold text-error">680 L/D</span>
<span class="text-label-xs text-error">+140 L/D Over Baseline</span>
</div>
<div class="flex flex-col">
<span class="font-label-xs text-label-xs text-on-surface-variant font-mono">SAFETY BREACH MOMENT</span>
<span class="font-mono text-headline-sm font-bold text-error">T+72 HRS</span>
<span class="text-label-xs text-on-surface-variant">12 Oct 06:00 IST</span>
</div>
</div>
</div>
<!-- Historical Risk Score Trend & Timeline Milestones (5 cols) -->
<div class="lg:col-span-5 bg-surface-container-lowest border border-outline-variant rounded-xl p-5 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between pb-3 border-b border-outline-variant">
<div>
<h3 class="font-headline-sm text-headline-sm font-bold text-primary">Risk Escalation Milestones</h3>
<span class="font-label-xs text-label-xs text-on-surface-variant">Timeline of automated model detections</span>
</div>
<span class="font-mono text-label-xs font-bold px-2 py-0.5 rounded bg-error-container text-on-error-container border border-error">
                SCORE: 87/100
              </span>
</div>
<!-- Vertical Timeline Trail -->
<div class="mt-4 space-y-3 font-mono text-label-sm">
<!-- Item 1 -->
<div class="flex items-start gap-3">
<span class="text-on-surface-variant w-14 flex-shrink-0 text-label-xs mt-0.5">05 OCT</span>
<div class="w-2.5 h-2.5 rounded-full bg-secondary mt-1.5 flex-shrink-0"></div>
<div class="flex-1 bg-surface-container-low p-2 rounded border border-outline-variant">
<div class="flex justify-between items-center">
<span class="font-semibold text-on-surface">Demand Surge Flagged</span>
<span class="text-secondary font-bold">42/100</span>
</div>
<span class="text-on-surface-variant text-label-xs font-sans block mt-0.5">Alpine temperature drops to -18°C. Auxiliary burner engagement detected.</span>
</div>
</div>
<!-- Item 2 -->
<div class="flex items-start gap-3">
<span class="text-on-surface-variant w-14 flex-shrink-0 text-label-xs mt-0.5">06 OCT</span>
<div class="w-2.5 h-2.5 rounded-full bg-secondary mt-1.5 flex-shrink-0"></div>
<div class="flex-1 bg-surface-container-low p-2 rounded border border-outline-variant">
<div class="flex justify-between items-center">
<span class="font-semibold text-on-surface">Baseline Exceeded (+140 L/d)</span>
<span class="text-secondary font-bold">51/100</span>
</div>
<span class="text-on-surface-variant text-label-xs font-sans block mt-0.5">Metering sensors confirm 680 L sustained burn rate.</span>
</div>
</div>
<!-- Item 3 -->
<div class="flex items-start gap-3">
<span class="text-on-surface-variant w-14 flex-shrink-0 text-label-xs mt-0.5">07 OCT</span>
<div class="w-2.5 h-2.5 rounded-full bg-on-secondary-container mt-1.5 flex-shrink-0"></div>
<div class="flex-1 bg-surface-container-low p-2 rounded border border-outline-variant">
<div class="flex justify-between items-center">
<span class="font-semibold text-on-surface">Forecast Depletion Recalibrated</span>
<span class="text-on-secondary-container font-bold">63/100</span>
</div>
<span class="text-on-surface-variant text-label-xs font-sans block mt-0.5">Projected stockout pulled forward by 4 days to 15 Oct.</span>
</div>
</div>
<!-- Item 4 -->
<div class="flex items-start gap-3">
<span class="text-on-surface-variant w-14 flex-shrink-0 text-label-xs mt-0.5">08 OCT</span>
<div class="w-2.5 h-2.5 rounded-full bg-error mt-1.5 flex-shrink-0"></div>
<div class="flex-1 bg-surface-container-low p-2 rounded border border-outline-variant">
<div class="flex justify-between items-center">
<span class="font-semibold text-on-surface">Fotu La Storm Warning Issued</span>
<span class="text-error font-bold">72/100</span>
</div>
<span class="text-on-surface-variant text-label-xs font-sans block mt-0.5">Route-018 transit velocity halved. Probability exceeds 80%.</span>
</div>
</div>
<!-- Item 5 (Current) -->
<div class="flex items-start gap-3">
<span class="text-error font-bold w-14 flex-shrink-0 text-label-xs mt-0.5">09 OCT</span>
<div class="w-2.5 h-2.5 rounded-full bg-error animate-ping mt-1.5 flex-shrink-0"></div>
<div class="flex-1 bg-error-container/40 p-2 rounded border border-error">
<div class="flex justify-between items-center">
<span class="font-semibold text-on-error-container">Critical High-Risk Threshold</span>
<span class="text-error font-bold">87/100</span>
</div>
<span class="text-on-surface text-label-xs font-sans block mt-0.5 font-medium">Automatic escalation to HQ Northern Command Logistics Desk.</span>
</div>
</div>
</div>
</div>
<div class="mt-3 flex items-center justify-between text-label-xs font-mono text-on-surface-variant pt-2 border-t border-outline-variant">
<span>LOW: 0–40</span>
<span>MED: 41–65</span>
<span>HIGH: 66–80</span>
<span class="text-error font-bold">CRITICAL: 81–100</span>
</div>
</div>
</section>
<!-- SECTION 5: OPERATIONAL IMPACT CHAIN & ENTITY CROSS-LINKS -->
<section class="bg-surface-container-lowest border border-outline-variant rounded-xl p-5">
<div class="flex items-center justify-between pb-3 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="account_tree">account_tree</span>
<div>
<h3 class="font-headline-sm text-headline-sm font-bold text-primary">Operational Impact Chain &amp; Entity Cross-Links</h3>
<span class="font-label-xs text-label-xs text-on-surface-variant">Linked operational entities subject to cascading degradation</span>
</div>
</div>
<span class="font-mono text-label-xs text-on-surface-variant bg-surface-container px-2 py-0.5 rounded border border-outline-variant">
            5 CONNECTED ASSETS
          </span>
</div>
<div class="mt-4 grid grid-cols-1 md:grid-cols-5 gap-3">
<!-- Node 1 -->
<div class="p-3 bg-surface-container-low rounded-lg border border-outline-variant flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="material-symbols-outlined text-secondary" data-icon="fort">fort</span>
<span class="font-mono text-label-xs px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface">RL-09</span>
</div>
<span class="font-label-sm font-bold text-on-surface mt-2 block">LOC-0042 Post Alpha</span>
<span class="text-label-xs text-on-surface-variant block mt-0.5">Primary Target Depot</span>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant font-mono text-label-xs flex justify-between">
<span class="text-on-surface-variant">Genset Status:</span>
<span class="text-error font-bold">Alert</span>
</div>
</div>
<!-- Node 2 -->
<div class="p-3 bg-surface-container-low rounded-lg border border-outline-variant flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="material-symbols-outlined text-secondary" data-icon="oil_barrel">oil_barrel</span>
<span class="font-mono text-label-xs px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface">RL-12</span>
</div>
<span class="font-label-sm font-bold text-on-surface mt-2 block">Arctic Diesel Cl-III</span>
<span class="text-label-xs text-on-surface-variant block mt-0.5">Stockpile Commodity</span>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant font-mono text-label-xs flex justify-between">
<span class="text-on-surface-variant">Safety Margin:</span>
<span class="text-error font-bold">-18%</span>
</div>
</div>
<!-- Node 3 -->
<div class="p-3 bg-surface-container-low rounded-lg border border-outline-variant flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="material-symbols-outlined text-secondary" data-icon="local_shipping">local_shipping</span>
<span class="font-mono text-label-xs px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface">RL-25</span>
</div>
<span class="font-label-sm font-bold text-on-surface mt-2 block">Sortie SHP-2048</span>
<span class="text-label-xs text-on-surface-variant block mt-0.5">Replenishment Bowsers</span>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant font-mono text-label-xs flex justify-between">
<span class="text-on-surface-variant">Delay:</span>
<span class="text-error font-bold">+1h 40m</span>
</div>
</div>
<!-- Node 4 -->
<div class="p-3 bg-surface-container-low rounded-lg border border-outline-variant flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="material-symbols-outlined text-secondary" data-icon="alt_route">alt_route</span>
<span class="font-mono text-label-xs px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface">RL-28</span>
</div>
<span class="font-label-sm font-bold text-on-surface mt-2 block">RTE-018 Leh Axis</span>
<span class="text-label-xs text-on-surface-variant block mt-0.5">Fotu La High Pass</span>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant font-mono text-label-xs flex justify-between">
<span class="text-on-surface-variant">Condition:</span>
<span class="text-error font-bold">L-1 Storm</span>
</div>
</div>
<!-- Node 5 -->
<div class="p-3 bg-surface-container-low rounded-lg border border-outline-variant flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="material-symbols-outlined text-secondary" data-icon="commute">commute</span>
<span class="font-mono text-label-xs px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface">RL-23</span>
</div>
<span class="font-label-sm font-bold text-on-surface mt-2 block">VH-0087 Stallion 4x4</span>
<span class="text-label-xs text-on-surface-variant block mt-0.5">Heavy Bowsers (x3)</span>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant font-mono text-label-xs flex justify-between">
<span class="text-on-surface-variant">Health:</span>
<span class="text-secondary font-bold">100% OK</span>
</div>
</div>
</div>
</section>
<!-- SECTION 6: PRESCRIPTIVE MITIGATION COMPARISON MATRIX -->
<section class="bg-surface-container-lowest border border-outline-variant rounded-xl p-5">
<div class="flex items-center justify-between pb-3 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="compare">compare</span>
<div>
<h3 class="font-headline-sm text-headline-sm font-bold text-primary">Prescriptive Mitigation Comparison Matrix</h3>
<span class="font-label-xs text-label-xs text-on-surface-variant">Multi-criteria decision matrix evaluated against fuel runway and logistical impact</span>
</div>
</div>
<span class="font-mono text-label-xs text-secondary font-semibold bg-secondary-container px-2 py-0.5 rounded border border-secondary">
            RECOMMENDED: OPTION A
          </span>
</div>
<!-- Analytical Data Grid -->
<div class="mt-4 overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container border-b-2 border-secondary font-mono text-label-xs text-primary uppercase">
<th class="py-2.5 px-3">Option ID / Plan</th>
<th class="py-2.5 px-3">Action Description</th>
<th class="py-2.5 px-3">Risk After</th>
<th class="py-2.5 px-3">Logistical Effort</th>
<th class="py-2.5 px-3">Time to Effect</th>
<th class="py-2.5 px-3">Model Conf.</th>
<th class="py-2.5 px-3 text-right">Execution Trigger</th>
</tr>
</thead>
<tbody class="font-body-sm text-body-sm divide-y divide-outline-variant">
<!-- Option A: RECOMMENDED -->
<tr class="bg-secondary-container/15 hover:bg-secondary-container/25 transition-colors">
<td class="py-3 px-3 font-mono font-bold text-primary">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-secondary text-sm" data-icon="stars">stars</span>
<span>OPTION A</span>
</div>
<span class="text-label-xs text-secondary font-bold uppercase tracking-wider block">RECOMMENDED</span>
</td>
<td class="py-3 px-3">
<strong class="text-primary font-semibold">Authorize Secondary Reserve Dispatch:</strong> Release +2,500 L arctic diesel from Bodhkharbu (DEP-0002) via standby sortie SHP-2062.
                </td>
<td class="py-3 px-3 font-mono">
<span class="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold text-label-xs border border-secondary">
                    14% (LOW)
                  </span>
</td>
<td class="py-3 px-3 font-mono text-on-surface">Medium (2 Drivers)</td>
<td class="py-3 px-3 font-mono text-on-surface">18 Hours</td>
<td class="py-3 px-3 font-mono font-semibold text-secondary">94.2%</td>
<td class="py-3 px-3 text-right">
<button class="px-3 py-1.5 rounded bg-secondary text-on-secondary hover:bg-secondary/90 font-label-xs font-semibold uppercase tracking-wider shadow-sm transition-colors">
                    APPROVE DISPATCH
                  </button>
</td>
</tr>
<!-- Option B -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-3 px-3 font-mono font-bold text-primary">
<span>OPTION B</span>
</td>
<td class="py-3 px-3">
<strong class="text-primary font-semibold">Fast-Track SHP-2048 with BRO Snow Escort:</strong> Deploy Border Roads Organisation snow plough escort on Fotu La to recover 45 mins transit time.
                </td>
<td class="py-3 px-3 font-mono">
<span class="px-2 py-0.5 rounded bg-surface-container text-on-surface font-semibold text-label-xs border border-outline-variant">
                    38% (MED)
                  </span>
</td>
<td class="py-3 px-3 font-mono text-on-surface">Low (Task Escort)</td>
<td class="py-3 px-3 font-mono text-on-surface">3.5 Hours</td>
<td class="py-3 px-3 font-mono font-semibold text-on-surface">88.0%</td>
<td class="py-3 px-3 text-right">
<button class="px-3 py-1.5 rounded border border-outline text-on-surface hover:bg-surface-container font-label-xs font-semibold uppercase tracking-wider transition-colors">
                    ENGAGE BRO
                  </button>
</td>
</tr>
<!-- Option C -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-3 px-3 font-mono font-bold text-primary">
<span>OPTION C</span>
</td>
<td class="py-3 px-3">
<strong class="text-primary font-semibold">Mandate Post Energy Rationing:</strong> Enforce -25% power curtailment to non-essential quarters; isolate secondary electronics shelters.
                </td>
<td class="py-3 px-3 font-mono">
<span class="px-2 py-0.5 rounded bg-surface-container text-on-surface font-semibold text-label-xs border border-outline-variant">
                    49% (MED)
                  </span>
</td>
<td class="py-3 px-3 font-mono text-on-surface">High (Morale/Op Impact)</td>
<td class="py-3 px-3 font-mono text-on-surface">Immediate</td>
<td class="py-3 px-3 font-mono font-semibold text-on-surface">76.5%</td>
<td class="py-3 px-3 text-right">
<button class="px-3 py-1.5 rounded border border-outline text-on-surface hover:bg-surface-container font-label-xs font-semibold uppercase tracking-wider transition-colors">
                    ISSUE DIRECTIVE
                  </button>
</td>
</tr>
<!-- Option D -->
<tr class="hover:bg-surface-container-low transition-colors text-on-surface-variant">
<td class="py-3 px-3 font-mono font-bold text-error">
<span>OPTION D</span>
</td>
<td class="py-3 px-3">
<strong class="text-error font-semibold">Status Quo (No Immediate Intervention):</strong> Rely solely on SHP-2048 without secondary sortie or pass escort.
                </td>
<td class="py-3 px-3 font-mono">
<span class="px-2 py-0.5 rounded bg-error-container text-on-error-container font-bold text-label-xs border border-error">
                    91% (CRITICAL)
                  </span>
</td>
<td class="py-3 px-3 font-mono text-on-surface">None</td>
<td class="py-3 px-3 font-mono text-error font-bold">Breach in 6d</td>
<td class="py-3 px-3 font-mono font-semibold text-error">99.0%</td>
<td class="py-3 px-3 text-right">
<span class="text-label-xs font-mono text-error uppercase font-semibold">NOT VIABLE</span>
</td>
</tr>
</tbody>
</table>
</div>
</section>
<!-- SECTION 7: INTERACTIVE WHAT-IF SIMULATION STRIP -->
<section class="bg-primary-container text-on-primary rounded-xl p-5 border border-outline-variant shadow-sm">
<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-outline-variant/40">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary-fixed" data-icon="science">science</span>
<div>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-primary">Interactive What-If Simulation Parameters</h3>
<span class="font-label-xs text-label-xs text-on-primary-container">Quick-test operational variables to gauge risk delta</span>
</div>
</div>
<button class="px-3.5 py-1.5 rounded-lg bg-secondary text-on-secondary hover:bg-secondary/90 font-label-sm text-label-sm flex items-center gap-1.5 self-start md:self-auto transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
<span>Open Scenario in Simulation (RL-31)</span>
</button>
</div>
<div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
<!-- Knob 1 -->
<div class="p-3.5 rounded-lg bg-surface-container-high/10 border border-outline-variant/30 flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="text-label-xs font-mono uppercase text-inverse-primary">Variable 1: Transit Velocity</span>
<span class="text-label-xs font-mono text-secondary-fixed font-bold">-45 MINS</span>
</div>
<p class="text-body-sm text-body-sm text-on-primary mt-2">
              If SHP-2048 ETA accelerates by 45 mins via convoy priority:
            </p>
<div class="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-label-xs font-mono text-on-primary-container">Projected Risk:</span>
<span class="font-mono text-label-sm font-bold text-secondary-fixed">87% → 74% (-13%)</span>
</div>
</div>
<!-- Knob 2 -->
<div class="p-3.5 rounded-lg bg-surface-container-high/10 border border-outline-variant/30 flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="text-label-xs font-mono uppercase text-inverse-primary">Variable 2: Secondary Sortie</span>
<span class="text-label-xs font-mono text-secondary-fixed font-bold">+2,500 L</span>
</div>
<p class="text-body-sm text-body-sm text-on-primary mt-2">
              If secondary sortie SHP-2062 is released from Bodhkharbu Depot:
            </p>
<div class="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-label-xs font-mono text-on-primary-container">Projected Risk:</span>
<span class="font-mono text-label-sm font-bold text-secondary-fixed">87% → 14% (-73%)</span>
</div>
</div>
<!-- Knob 3 -->
<div class="p-3.5 rounded-lg bg-surface-container-high/10 border border-outline-variant/30 flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="text-label-xs font-mono uppercase text-inverse-primary">Variable 3: Pass Closure</span>
<span class="text-label-xs font-mono text-error font-bold">BLIZZARD</span>
</div>
<p class="text-body-sm text-body-sm text-on-primary mt-2">
              If blizzard closes Fotu La corridor for &gt;48 hours:
            </p>
<div class="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-label-xs font-mono text-on-primary-container">Projected Risk:</span>
<span class="font-mono text-label-sm font-bold text-error">87% → 100% (+13%)</span>
</div>
</div>
</div>
</section>
<!-- SECTION 8: CASCADING FAILURE GRAPH & PLANNER REVIEW DESK -->
<section class="grid grid-cols-1 lg:grid-cols-12 gap-6">
<!-- Cascading Failure Model (7 cols) -->
<div class="lg:col-span-7 bg-surface-container-lowest border border-outline-variant rounded-xl p-5 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between pb-3 border-b border-outline-variant">
<div>
<h3 class="font-headline-sm text-headline-sm font-bold text-primary">Risk Relationship Chain (Cascading Failure Model)</h3>
<span class="font-label-xs text-label-xs text-on-surface-variant">Deterministic causality propagation from meteorological shock to mission degradation</span>
</div>
<span class="material-symbols-outlined text-secondary" data-icon="schema">schema</span>
</div>
<div class="mt-5 flex flex-col md:flex-row items-center justify-between gap-2 text-center font-mono">
<!-- Node A -->
<div class="p-2.5 rounded bg-surface-container border border-outline-variant w-full md:w-36 flex flex-col items-center">
<span class="material-symbols-outlined text-primary text-base" data-icon="ac_unit">ac_unit</span>
<span class="font-bold text-label-xs text-on-surface mt-1">Sub-Zero Cold Front</span>
<span class="text-[9px] text-on-surface-variant mt-0.5">-24°C Alpine Drop</span>
</div>
<span class="material-symbols-outlined text-secondary text-sm hidden md:inline" data-icon="arrow_forward">arrow_forward</span>
<span class="material-symbols-outlined text-secondary text-sm md:hidden" data-icon="arrow_downward">arrow_downward</span>
<!-- Node B -->
<div class="p-2.5 rounded bg-surface-container border border-outline-variant w-full md:w-36 flex flex-col items-center">
<span class="material-symbols-outlined text-primary text-base" data-icon="cyclone">cyclone</span>
<span class="font-bold text-label-xs text-on-surface mt-1">24h Turbine Run</span>
<span class="text-[9px] text-on-surface-variant mt-0.5">Continuous Heating</span>
</div>
<span class="material-symbols-outlined text-secondary text-sm hidden md:inline" data-icon="arrow_forward">arrow_forward</span>
<span class="material-symbols-outlined text-secondary text-sm md:hidden" data-icon="arrow_downward">arrow_downward</span>
<!-- Node C -->
<div class="p-2.5 rounded bg-surface-container border border-outline-variant w-full md:w-36 flex flex-col items-center">
<span class="material-symbols-outlined text-error text-base" data-icon="speed">speed</span>
<span class="font-bold text-label-xs text-error mt-1">+18% Burn Velocity</span>
<span class="text-[9px] text-error mt-0.5">680 L/day Surge</span>
</div>
<span class="material-symbols-outlined text-error text-sm hidden md:inline" data-icon="arrow_forward">arrow_forward</span>
<span class="material-symbols-outlined text-error text-sm md:hidden" data-icon="arrow_downward">arrow_downward</span>
<!-- Node D -->
<div class="p-2.5 rounded bg-error-container border border-error w-full md:w-36 flex flex-col items-center">
<span class="material-symbols-outlined text-on-error-container text-base" data-icon="report">report</span>
<span class="font-bold text-label-xs text-on-error-container mt-1">Floor Breach</span>
<span class="text-[9px] text-on-error-container mt-0.5">&lt; 2,000 L Reserve</span>
</div>
<span class="material-symbols-outlined text-error text-sm hidden md:inline" data-icon="arrow_forward">arrow_forward</span>
<span class="material-symbols-outlined text-error text-sm md:hidden" data-icon="arrow_downward">arrow_downward</span>
<!-- Node E -->
<div class="p-2.5 rounded bg-error-container border border-error w-full md:w-36 flex flex-col items-center">
<span class="material-symbols-outlined text-on-error-container text-base" data-icon="power_off">power_off</span>
<span class="font-bold text-label-xs text-on-error-container mt-1">Power Failure</span>
<span class="text-[9px] text-on-error-container mt-0.5">15 Oct Exhaustion</span>
</div>
</div>
</div>
<div class="mt-4 p-3 bg-surface-container-low rounded-lg border border-outline-variant flex items-center justify-between text-label-xs">
<span class="text-on-surface-variant font-mono">Mitigation Impact Target: Intercept chain between Node B and Node C via Bodhkharbu dispatch.</span>
<span class="font-mono font-bold text-secondary">EFFECTIVENESS: 96%</span>
</div>
</div>
<!-- Human-in-the-Loop Planner Review Desk (5 cols) -->
<div class="lg:col-span-5 bg-surface-container-lowest border border-outline-variant rounded-xl p-5 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between pb-3 border-b border-outline-variant">
<div>
<h3 class="font-headline-sm text-headline-sm font-bold text-primary">Planner Review &amp; Status Transitions</h3>
<span class="font-label-xs text-label-xs text-on-surface-variant">Quartermaster sign-off &amp; transition protocol</span>
</div>
<span class="font-mono text-label-xs px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container border border-secondary font-bold">
                AUDIT L-4
              </span>
</div>
<!-- Transition Actions Strip -->
<div class="mt-4 space-y-2.5">
<div class="flex items-center justify-between p-2.5 rounded bg-surface-container border border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="edit_note">edit_note</span>
<div class="flex flex-col">
<span class="font-label-sm font-bold text-on-surface">1. Transition to Active Investigation</span>
<span class="text-label-xs text-on-surface-variant">Assigns case officer IC-78921K</span>
</div>
</div>
<button class="px-2.5 py-1 rounded bg-surface border border-outline text-label-xs font-mono font-semibold hover:bg-surface-container-high transition-colors">
                  BEGIN
                </button>
</div>
<div class="flex items-center justify-between p-2.5 rounded bg-secondary-container/30 border border-secondary">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="task_alt">task_alt</span>
<div class="flex flex-col">
<span class="font-label-sm font-bold text-on-surface">2. Approve Mitigation Plan (Option A)</span>
<span class="text-label-xs text-secondary font-medium">Auto-creates Dispatch Order DISP-9921</span>
</div>
</div>
<button class="px-2.5 py-1 rounded bg-secondary text-on-secondary text-label-xs font-mono font-semibold hover:bg-secondary/90 transition-colors shadow-sm">
                  AUTHORIZE
                </button>
</div>
<div class="flex items-center justify-between p-2.5 rounded bg-surface-container border border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="emergency_share">emergency_share</span>
<div class="flex flex-col">
<span class="font-label-sm font-bold text-on-surface">3. Escalate to Northern Command</span>
<span class="text-label-xs text-on-surface-variant">Alert Major General (Ops) Log</span>
</div>
</div>
<button class="px-2.5 py-1 rounded bg-surface border border-outline text-label-xs font-mono font-semibold hover:bg-surface-container-high transition-colors">
                  ESCALATE
                </button>
</div>
</div>
</div>
<!-- Resolution Evidence Requirement Box -->
<div class="mt-4 p-3 bg-surface-container-low rounded border border-outline-variant text-label-xs">
<span class="font-semibold text-primary font-mono block mb-1">Mandatory Close-Out Criteria:</span>
<ul class="list-disc list-inside text-on-surface-variant space-y-0.5">
<li>Verified dispatch receipt from Bodhkharbu (DEP-0002).</li>
<li>Recalibrated model runway showing buffer &gt; 10 days.</li>
</ul>
</div>
</div>
</section>
<!-- DEFENSE TELEMETRY FOOTER -->
<footer class="pt-4 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-3 text-label-xs font-mono text-on-surface-variant">
<div class="flex items-center gap-4">
<span class="flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
            MIL-STD-188F INTEROPERABLE
          </span>
<span>AES-256 ENCRYPTED COMM-LINK</span>
<span>HARDWARE TOKEN HSM VALIDATED</span>
</div>
<div class="flex items-center gap-3">
<span>NODE: SEC4-RSK-1042-INVESTIGATION</span>
<span class="text-outline">|</span>
<span>RAKSHAKLOGIX V4.8.1</span>
</div>
</footer>
</main>`;
