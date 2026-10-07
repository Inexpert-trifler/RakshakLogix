// Screen: RL-32 — Create Simulation Scenario
// Route: /simulations/create
export const rl32Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto flex-1 p-6 flex flex-col gap-6">
<!-- Operational Canvas Header -->
<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-outline-variant">
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2.5">
<h1 class="text-headline-lg font-headline-lg text-primary tracking-tight">Create Simulation</h1>
<span class="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed border border-secondary text-label-xs font-label-xs uppercase">
            Draft Scenario // ID: SIM-DRAFT-0089
          </span>
<span class="text-label-xs font-label-xs text-on-surface-variant">Last Modified: 2m ago by QM Ops Desk</span>
</div>
<p class="text-body-md font-body-md text-on-surface-variant max-w-3xl">
          Configure a controlled what-if scenario and evaluate its operational impact without altering live deployment plans.
        </p>
</div>
<div class="flex items-center gap-3">
<button class="px-3.5 py-2 text-label-md font-label-md bg-surface-container-lowest border border-outline text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-1.5">
<span class="material-symbols-outlined text-[16px]">visibility</span>
          Continue to Review
        </button>
<button class="px-4 py-2 text-label-md font-label-md bg-primary-container text-on-primary border border-primary hover:bg-secondary transition-colors flex items-center gap-2 shadow-sm">
<span class="material-symbols-outlined text-[18px]">bolt</span>
          Run Simulation Run (Direct)
        </button>
</div>
</div>
<!-- 6-Stage Operational Stepper Strip -->
<section class="bg-surface-container-lowest border border-outline-variant p-2 select-none overflow-x-auto">
<div class="grid grid-cols-6 min-w-[760px] gap-2">
<!-- Step 1: Scenario -->
<div class="flex items-center gap-2 p-2 bg-surface-container border border-outline-variant">
<div class="w-6 h-6 bg-secondary text-on-secondary flex items-center justify-center text-label-xs font-label-xs font-bold">
<span class="material-symbols-outlined text-[14px]">check</span>
</div>
<div class="flex flex-col">
<span class="text-label-xs font-label-xs text-on-surface-variant">STAGE 01</span>
<span class="text-label-sm font-label-sm text-primary font-semibold">Scenario</span>
</div>
</div>
<!-- Step 2: Scope (Active) -->
<div class="flex items-center gap-2 p-2 bg-primary-container text-on-primary border border-primary">
<div class="w-6 h-6 bg-on-primary text-primary-container flex items-center justify-center text-label-xs font-label-xs font-bold">
            02
          </div>
<div class="flex flex-col">
<span class="text-label-xs font-label-xs text-inverse-primary">STAGE 02</span>
<span class="text-label-sm font-label-sm text-on-primary font-semibold">Scope Lock</span>
</div>
</div>
<!-- Step 3: Variables -->
<div class="flex items-center gap-2 p-2 bg-surface-container-low border border-outline-variant">
<div class="w-6 h-6 bg-surface-container-high text-on-surface-variant flex items-center justify-center text-label-xs font-label-xs font-bold">
            03
          </div>
<div class="flex flex-col">
<span class="text-label-xs font-label-xs text-on-surface-variant">STAGE 03</span>
<span class="text-label-sm font-label-sm text-primary font-semibold">Variables</span>
</div>
</div>
<!-- Step 4: Constraints -->
<div class="flex items-center gap-2 p-2 bg-surface-container-low border border-outline-variant">
<div class="w-6 h-6 bg-surface-container-high text-on-surface-variant flex items-center justify-center text-label-xs font-label-xs font-bold">
            04
          </div>
<div class="flex flex-col">
<span class="text-label-xs font-label-xs text-on-surface-variant">STAGE 04</span>
<span class="text-label-sm font-label-sm text-primary font-semibold">Constraints</span>
</div>
</div>
<!-- Step 5: Data Readiness -->
<div class="flex items-center gap-2 p-2 bg-surface-container-low border border-outline-variant">
<div class="w-6 h-6 bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center text-label-xs font-label-xs font-bold">
            92%
          </div>
<div class="flex flex-col">
<span class="text-label-xs font-label-xs text-on-surface-variant">STAGE 05</span>
<span class="text-label-sm font-label-sm text-primary font-semibold">Data Readiness</span>
</div>
</div>
<!-- Step 6: Review & Run -->
<div class="flex items-center gap-2 p-2 bg-surface-container-low border border-outline-variant opacity-80">
<div class="w-6 h-6 bg-surface-container-highest text-on-surface-variant flex items-center justify-center text-label-xs font-label-xs font-bold">
            06
          </div>
<div class="flex flex-col">
<span class="text-label-xs font-label-xs text-on-surface-variant">STAGE 06</span>
<span class="text-label-sm font-label-sm text-on-surface-variant font-medium">Review &amp; Run</span>
</div>
</div>
</div>
</section>
<!-- Split Grid Workspace (65% Main Config / 35% Live Baseline & Guidance) -->
<div class="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
<!-- ==================== LEFT MAIN CONFIGURATION COLUMN (65% -> 8 Cols) ==================== -->
<div class="xl:col-span-8 flex flex-col gap-6">
<!-- SECTION 1: SCENARIO DEFINITION & TEMPLATES -->
<section class="bg-surface-container-lowest border border-outline-variant p-5">
<div class="flex items-center justify-between pb-3 mb-4 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="w-2.5 h-2.5 bg-primary-container inline-block"></span>
<h2 class="text-headline-sm font-headline-sm text-primary uppercase tracking-wide">
                Section 1: Scenario Definition &amp; Domain Selection
              </h2>
</div>
<span class="text-label-xs font-label-xs text-on-surface-variant font-mono">CFG-SECT-01</span>
</div>
<!-- Scenario Inputs Form -->
<div class="space-y-4">
<div>
<label class="block text-label-sm font-label-sm text-primary font-semibold mb-1">
                SCENARIO NAME <span class="text-error">*</span>
</label>
<input class="w-full h-9 px-3 bg-surface-container-lowest border border-outline text-body-md font-body-md text-on-surface focus:border-primary focus:ring-0 rounded-none" type="text" value="Fuel Demand Surge — Forward Post Alpha (Sub-Zero Run)"/>
</div>
<div>
<label class="block text-label-sm font-label-sm text-primary font-semibold mb-1">
                OPERATIONAL DESCRIPTION &amp; OBJECTIVES
              </label>
<textarea class="w-full p-2.5 bg-surface-container-lowest border border-outline text-body-sm font-body-sm text-on-surface focus:border-primary focus:ring-0 rounded-none" rows="2">Evaluate the operational impact of a sustained +25% consumption surge across primary micro-turbines over a 7-day winter freeze horizon.</textarea>
</div>
<!-- Domain Selector Cards Grid -->
<div>
<label class="block text-label-xs font-label-xs text-on-surface-variant uppercase font-semibold mb-2">
                SCENARIO LOGISTICAL DOMAIN (SELECT PRIMARY FOCUS)
              </label>
<div class="grid grid-cols-2 md:grid-cols-3 gap-2.5">
<!-- Card 1: Selected -->
<div class="p-3 border-2 border-primary bg-surface-container-high cursor-pointer flex flex-col justify-between h-20">
<div class="flex items-center justify-between">
<span class="material-symbols-outlined text-primary">trending_up</span>
<span class="w-3.5 h-3.5 bg-primary rounded-full flex items-center justify-center">
<span class="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></span>
</span>
</div>
<span class="text-label-sm font-label-sm font-semibold text-primary">Demand Change</span>
</div>
<!-- Card 2 -->
<div class="p-3 border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer flex flex-col justify-between h-20 transition-colors">
<div class="flex items-center justify-between">
<span class="material-symbols-outlined text-on-surface-variant">inventory_2</span>
<span class="w-3.5 h-3.5 border border-outline rounded-full"></span>
</div>
<span class="text-label-sm font-label-sm font-medium text-on-surface">Inventory Disruption</span>
</div>
<!-- Card 3 -->
<div class="p-3 border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer flex flex-col justify-between h-20 transition-colors">
<div class="flex items-center justify-between">
<span class="material-symbols-outlined text-on-surface-variant">local_shipping</span>
<span class="w-3.5 h-3.5 border border-outline rounded-full"></span>
</div>
<span class="text-label-sm font-label-sm font-medium text-on-surface">Transport Disruption</span>
</div>
<!-- Card 4 -->
<div class="p-3 border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer flex flex-col justify-between h-20 transition-colors">
<div class="flex items-center justify-between">
<span class="material-symbols-outlined text-on-surface-variant">alt_route</span>
<span class="w-3.5 h-3.5 border border-outline rounded-full"></span>
</div>
<span class="text-label-sm font-label-sm font-medium text-on-surface">Route Disruption</span>
</div>
<!-- Card 5 -->
<div class="p-3 border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer flex flex-col justify-between h-20 transition-colors">
<div class="flex items-center justify-between">
<span class="material-symbols-outlined text-on-surface-variant">ac_unit</span>
<span class="w-3.5 h-3.5 border border-outline rounded-full"></span>
</div>
<span class="text-label-sm font-label-sm font-medium text-on-surface">Weather Impact</span>
</div>
<!-- Card 6 -->
<div class="p-3 border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer flex flex-col justify-between h-20 transition-colors">
<div class="flex items-center justify-between">
<span class="material-symbols-outlined text-on-surface-variant">hub</span>
<span class="w-3.5 h-3.5 border border-outline rounded-full"></span>
</div>
<span class="text-label-sm font-label-sm font-medium text-on-surface">Combined Multi-Domain</span>
</div>
</div>
</div>
<!-- Quick-Load Template Strip -->
<div class="pt-2">
<span class="text-label-xs font-label-xs text-on-surface-variant uppercase font-semibold block mb-2">PRE-CONFIGURED THEATER TEMPLATES</span>
<div class="flex flex-wrap gap-2">
<button class="px-2.5 py-1 text-label-xs font-label-xs bg-primary text-on-primary border border-primary font-semibold flex items-center gap-1.5">
<span class="material-symbols-outlined text-[13px]">bolt</span>
                  Demand Surge (Active)
                </button>
<button class="px-2.5 py-1 text-label-xs font-label-xs bg-surface-container-low border border-outline text-on-surface hover:bg-surface-container-high">
                  Replenishment Delay
                </button>
<button class="px-2.5 py-1 text-label-xs font-label-xs bg-surface-container-low border border-outline text-on-surface hover:bg-surface-container-high">
                  Vehicle Shortage
                </button>
<button class="px-2.5 py-1 text-label-xs font-label-xs bg-surface-container-low border border-outline text-on-surface hover:bg-surface-container-high">
                  Route Closure (Fotu La)
                </button>
<button class="px-2.5 py-1 text-label-xs font-label-xs bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container-high">
                  [+] Blank Scenario
                </button>
</div>
</div>
</div>
</section>
<!-- SECTION 2: OPERATIONAL SCOPE DEFINITION -->
<section class="bg-surface-container-lowest border border-outline-variant p-5">
<div class="flex items-center justify-between pb-3 mb-4 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="w-2.5 h-2.5 bg-primary-container inline-block"></span>
<h2 class="text-headline-sm font-headline-sm text-primary uppercase tracking-wide">
                Section 2: Operational Scope Definition
              </h2>
</div>
<span class="text-label-xs font-label-xs text-on-surface-variant font-mono">CFG-SECT-02</span>
</div>
<!-- Scope Filter Selector Pills -->
<div class="flex flex-wrap items-center gap-2 pb-3 mb-4 border-b border-outline-variant">
<span class="text-label-xs font-label-xs text-on-surface-variant uppercase font-semibold mr-1">ACTIVE BOUNDS:</span>
<button class="px-2.5 py-1 text-label-xs font-label-xs bg-surface-container border border-outline-variant text-on-surface">Network</button>
<button class="px-2.5 py-1 text-label-xs font-label-xs bg-primary-container text-on-primary border border-primary font-semibold flex items-center gap-1">
<span>Location (Selected)</span>
<span class="material-symbols-outlined text-[13px]">check</span>
</button>
<button class="px-2.5 py-1 text-label-xs font-label-xs bg-primary-container text-on-primary border border-primary font-semibold flex items-center gap-1">
<span>Inventory (Selected)</span>
<span class="material-symbols-outlined text-[13px]">check</span>
</button>
<button class="px-2.5 py-1 text-label-xs font-label-xs bg-surface-container border border-outline-variant text-on-surface">Transport</button>
<button class="px-2.5 py-1 text-label-xs font-label-xs bg-surface-container border border-outline-variant text-on-surface">Route</button>
<button class="px-2.5 py-1 text-label-xs font-label-xs bg-secondary-fixed text-on-secondary-fixed border border-secondary font-bold">Combined (Active)</button>
</div>
<!-- Active Scope Summary Pill -->
<div class="p-2.5 bg-surface-container-high border-l-4 border-primary mb-4 flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[18px]">verified</span>
<span class="text-label-sm font-label-sm text-primary font-medium">
                1 Forward Post (LOC-0042) • 1 Inventory Class (Class III POL) • 1 Nominated Corridor (RTE-018) • 1 Sortie (SHP-2048)
              </span>
</div>
<button class="text-label-xs font-label-xs text-secondary underline hover:text-primary">Modify Boundary</button>
</div>
<!-- Targeted Assets Specification (2-Col Sub-Bento) -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- Target 1: Post Location Details -->
<div class="border border-outline-variant p-3.5 bg-surface-container-low">
<div class="flex items-center justify-between mb-2">
<span class="text-label-xs font-label-xs bg-surface-container-highest px-2 py-0.5 font-mono text-primary font-semibold border border-outline">LOC-0042</span>
<span class="text-label-xs font-label-xs text-secondary font-semibold">SECTOR IV-B HIGH-ALTITUDE</span>
</div>
<h3 class="text-headline-sm font-headline-sm text-primary mb-1">Forward Post Alpha</h3>
<div class="grid grid-cols-2 gap-2 text-label-xs font-label-xs text-on-surface-variant pt-2 border-t border-outline-variant">
<div>
<span class="block">ELEVATION:</span>
<span class="font-mono text-primary font-semibold text-body-sm">4,820m MSL</span>
</div>
<div>
<span class="block">READINESS INDEX:</span>
<span class="font-mono text-secondary font-bold text-body-sm">78% Nominal</span>
</div>
<div>
<span class="block">DEMAND TREND:</span>
<span class="font-mono text-primary font-semibold text-body-sm">+18% (Weather Front)</span>
</div>
<div>
<span class="block">STOCKOUT RISK:</span>
<span class="font-mono text-error font-bold text-body-sm">91% In Surge</span>
</div>
</div>
</div>
<!-- Target 2: Inventory SKU Card -->
<div class="border border-outline-variant p-3.5 bg-surface-container-low">
<div class="flex items-center justify-between mb-2">
<span class="text-label-xs font-label-xs bg-surface-container-highest px-2 py-0.5 font-mono text-primary font-semibold border border-outline">FUEL-001</span>
<span class="text-label-xs font-label-xs bg-secondary-fixed text-on-secondary-fixed px-1.5 py-0.2 border border-secondary font-semibold">CLASS III (POL)</span>
</div>
<h3 class="text-headline-sm font-headline-sm text-primary mb-1">Arctic High-Grade Diesel</h3>
<div class="grid grid-cols-2 gap-2 text-label-xs font-label-xs text-on-surface-variant pt-2 border-t border-outline-variant">
<div>
<span class="block">CURRENT DEPOT STOCK:</span>
<span class="font-mono text-primary font-bold text-body-sm">4,200 Litres</span>
</div>
<div>
<span class="block">CURRENT BURN RATE:</span>
<span class="font-mono text-primary font-semibold text-body-sm">680 L/day</span>
</div>
<div>
<span class="block">SAFETY FLOOR:</span>
<span class="font-mono text-on-surface font-semibold text-body-sm">2,000 L (Inviolable)</span>
</div>
<div>
<span class="block">CONTAINER SPEC:</span>
<span class="font-mono text-on-surface font-semibold text-body-sm">Heavy Thermal Cell</span>
</div>
</div>
</div>
</div>
</section>
<!-- SECTION 3: PARAMETERIZED SCENARIO VARIABLES & HORIZON -->
<section class="bg-surface-container-lowest border border-outline-variant p-5">
<div class="flex items-center justify-between pb-3 mb-4 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="w-2.5 h-2.5 bg-primary-container inline-block"></span>
<h2 class="text-headline-sm font-headline-sm text-primary uppercase tracking-wide">
                Section 3: Parameterized Variables &amp; Time Horizon
              </h2>
</div>
<span class="text-label-xs font-label-xs text-on-surface-variant font-mono">CFG-SECT-03</span>
</div>
<!-- Time Horizon Segmented Strip -->
<div class="mb-5">
<label class="block text-label-xs font-label-xs text-on-surface-variant uppercase font-semibold mb-2">SIMULATION HORIZON WINDOW</label>
<div class="grid grid-cols-2 sm:grid-cols-6 gap-1 bg-surface-container p-1 border border-outline-variant">
<button class="py-1.5 text-label-sm font-label-sm text-on-surface-variant hover:bg-surface-container-lowest">24 Hours</button>
<button class="py-1.5 text-label-sm font-label-sm text-on-surface-variant hover:bg-surface-container-lowest">3 Days</button>
<button class="py-1.5 text-label-sm font-label-sm bg-primary-container text-on-primary font-semibold shadow-sm">7 Days (Active)</button>
<button class="py-1.5 text-label-sm font-label-sm text-on-surface-variant hover:bg-surface-container-lowest">14 Days</button>
<button class="py-1.5 text-label-sm font-label-sm text-on-surface-variant hover:bg-surface-container-lowest">30 Days</button>
<button class="py-1.5 text-label-xs font-label-xs font-mono text-primary bg-surface-container-lowest border border-outline">09-16 OCT 2026</button>
</div>
</div>
<!-- Primary Operational Variables Sliders & Steppers -->
<div class="space-y-4">
<!-- Variable Knob 1: Demand Delta -->
<div class="p-3 border border-outline-variant bg-surface-container-low">
<div class="flex items-center justify-between mb-1.5">
<div class="flex items-center gap-2">
<span class="text-label-sm font-label-sm font-semibold text-primary">Demand Delta Surge (Micro-Turbines)</span>
<span class="text-label-xs font-label-xs bg-error text-on-error px-1.5 py-0.2">HIGH IMPACT</span>
</div>
<span class="text-headline-sm font-headline-sm font-mono text-primary">+25%</span>
</div>
<input class="w-full h-1.5 bg-outline-variant cursor-pointer" max="100" min="-50" type="range" value="25"/>
<div class="flex justify-between items-center text-label-xs font-label-xs text-on-surface-variant mt-1.5">
<span>Range: -50% to +100%</span>
<span class="font-mono text-primary font-semibold">Burn shifts from 680 L/day ➔ 850 L/day (+170 L)</span>
</div>
</div>
<!-- Variable Knob 2: Inbound Transit Delay -->
<div class="p-3 border border-outline-variant bg-surface-container-low">
<div class="flex items-center justify-between mb-1.5">
<div class="flex items-center gap-2">
<span class="text-label-sm font-label-sm font-semibold text-primary">Inbound Transit Alpine Delay (RTE-018)</span>
<span class="text-label-xs font-label-xs bg-secondary-fixed text-on-secondary-fixed border border-secondary px-1.5 py-0.2">ROAD DISRUPTION</span>
</div>
<span class="text-headline-sm font-headline-sm font-mono text-primary">+3.5 Hours</span>
</div>
<input class="w-full h-1.5 bg-outline-variant cursor-pointer" max="12" min="0" step="0.5" type="range" value="3.5"/>
<div class="flex justify-between items-center text-label-xs font-label-xs text-on-surface-variant mt-1.5">
<span>Pass Status: Single-lane convoy clearance</span>
<span class="font-mono text-primary font-semibold">Passage window extended: 05:30 ➔ 09:00 Transit</span>
</div>
</div>
<!-- Variable Knobs 3 & 4 Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- Knob 3: Fleet Availability -->
<div class="p-3 border border-outline-variant bg-surface-container-low">
<div class="flex items-center justify-between mb-1">
<span class="text-label-sm font-label-sm font-semibold text-primary">Fleet Availability Factor</span>
<span class="font-mono text-label-md font-label-md font-bold text-primary">-10%</span>
</div>
<input class="w-full h-1.5 bg-outline-variant cursor-pointer" max="20" min="-40" type="range" value="-10"/>
<div class="flex justify-between text-label-xs font-label-xs text-on-surface-variant mt-1">
<span>Reallocation</span>
<span class="font-mono">1 Heavy Bowser diverted</span>
</div>
</div>
<!-- Knob 4: Weather Severity -->
<div class="p-3 border border-outline-variant bg-surface-container-low">
<div class="flex items-center justify-between mb-1">
<span class="text-label-sm font-label-sm font-semibold text-primary">Weather Escalation</span>
<span class="text-label-xs font-label-xs bg-error text-on-error px-1.5 py-0.5 font-bold uppercase">Severe Blizzard</span>
</div>
<select class="w-full h-8 text-label-sm font-label-sm bg-surface-container-lowest border border-outline text-primary focus:border-primary focus:ring-0 mt-1">
<option>Moderate Frost (Nominal)</option>
<option selected="">Severe Blizzard (BRO Level 2 Advisory)</option>
<option>Full Pass Whiteout (BRO Category 4 Red)</option>
</select>
</div>
</div>
</div>
</section>
<!-- SECTION 4: OPERATIONAL CONSTRAINTS & AUTOMATED VALIDATION -->
<section class="bg-surface-container-lowest border border-outline-variant p-5">
<div class="flex items-center justify-between pb-3 mb-4 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="w-2.5 h-2.5 bg-primary-container inline-block"></span>
<h2 class="text-headline-sm font-headline-sm text-primary uppercase tracking-wide">
                Section 4: Operational Constraints &amp; Validation Check
              </h2>
</div>
<span class="text-label-xs font-label-xs text-on-surface-variant font-mono">CFG-SECT-04</span>
</div>
<!-- Constraint Inputs Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
<div class="p-2.5 bg-surface-container-low border border-outline-variant">
<span class="text-label-xs font-label-xs text-on-surface-variant block mb-1">SAFETY FLOOR (L)</span>
<input class="w-full h-8 px-2 bg-surface-container-lowest border border-outline text-label-md font-label-md font-mono text-primary font-bold" type="text" value="2,000 L"/>
<span class="text-label-xs font-label-xs text-error font-medium mt-1 block">Inviolable Reserve</span>
</div>
<div class="p-2.5 bg-surface-container-low border border-outline-variant">
<span class="text-label-xs font-label-xs text-on-surface-variant block mb-1">MAX ROUTE RISK</span>
<select class="w-full h-8 px-2 bg-surface-container-lowest border border-outline text-label-sm font-label-sm text-primary">
<option>Low (Standard)</option>
<option selected="">Medium (Level 2)</option>
<option>High (Emergency Only)</option>
</select>
<span class="text-label-xs font-label-xs text-on-surface-variant mt-1 block">BRO Pass Regs</span>
</div>
<div class="p-2.5 bg-surface-container-low border border-outline-variant">
<span class="text-label-xs font-label-xs text-on-surface-variant block mb-1">DELIVERY CUTOFF</span>
<input class="w-full h-8 px-2 bg-surface-container-lowest border border-outline text-label-md font-label-md font-mono text-primary font-bold" type="text" value="16:00 IST"/>
<span class="text-label-xs font-label-xs text-on-surface-variant mt-1 block">Daylight Mountain Limit</span>
</div>
<div class="p-2.5 bg-surface-container-low border border-outline-variant">
<span class="text-label-xs font-label-xs text-on-surface-variant block mb-1">MAX AXLE LOAD</span>
<input class="w-full h-8 px-2 bg-surface-container-lowest border border-outline text-label-md font-label-md font-mono text-primary font-bold" type="text" value="10.0 MT"/>
<span class="text-label-xs font-label-xs text-on-surface-variant mt-1 block">Bridge Classification 18</span>
</div>
</div>
<!-- Live Constraint Validation Warning Notice (Restrained Dark Earth Red) -->
<div class="bg-surface-container-low border-l-4 border-error p-3.5 flex items-start gap-3">
<span class="material-symbols-outlined text-error text-[22px] mt-0.5">warning</span>
<div class="flex flex-col gap-1 flex-1">
<div class="flex items-center justify-between">
<span class="text-label-sm font-label-sm text-primary font-bold">
                  1 WARNING DETECTED // 0 BLOCKING ERRORS
                </span>
<span class="text-label-xs font-label-xs bg-error text-on-error px-1.5 py-0.2 uppercase font-mono">NON-BLOCKING</span>
</div>
<p class="text-body-sm font-body-sm text-on-surface">
                Selected <span class="font-bold">+3.5h delay on RTE-018</span> pushes Sortie <span class="font-mono font-bold">SHP-2048</span> arrival to <span class="font-mono font-bold">18:05 IST</span>, exceeding the standard <span class="font-bold">16:00 IST daylight mountain transit cutoff</span>. Requires BRO Night Escort Authorization or rescheduling prior to dispatch commit.
              </p>
</div>
</div>
</section>
</div>
<!-- ==================== RIGHT PERSISTENT SIDEBAR PANEL (35% -> 4 Cols) ==================== -->
<div class="xl:col-span-4 flex flex-col gap-6">
<!-- CURRENT OPERATIONAL BASELINE CARD -->
<div class="bg-surface-container-lowest border border-outline-variant p-4">
<div class="flex items-center justify-between pb-2.5 mb-3 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[18px]">readiness_score</span>
<span class="text-label-sm font-label-sm text-primary uppercase font-bold">Live Depot Baseline</span>
</div>
<span class="text-label-xs font-label-xs font-mono text-secondary font-bold">TELEMETRY: T-0</span>
</div>
<div class="grid grid-cols-2 gap-3 text-label-xs font-label-xs">
<div class="p-2 bg-surface-container-low border border-outline-variant">
<span class="text-on-surface-variant block">ON-HAND STOCK</span>
<span class="text-headline-sm font-headline-sm font-mono text-primary">4,200 <span class="text-label-xs font-normal">L</span></span>
</div>
<div class="p-2 bg-surface-container-low border border-outline-variant">
<span class="text-on-surface-variant block">DAILY BASE BURN</span>
<span class="text-headline-sm font-headline-sm font-mono text-primary">680 <span class="text-label-xs font-normal">L/day</span></span>
</div>
<div class="p-2 bg-surface-container-low border border-outline-variant">
<span class="text-on-surface-variant block">CORRIDOR LOAD (RTE-018)</span>
<span class="text-headline-sm font-headline-sm font-mono text-primary">72.0%</span>
</div>
<div class="p-2 bg-surface-container-low border border-outline-variant">
<span class="text-on-surface-variant block">FLEET UTILIZATION</span>
<span class="text-headline-sm font-headline-sm font-mono text-primary">72.5%</span>
</div>
</div>
</div>
<!-- REAL-TIME BASELINE VS. SIMULATED PROJECTION PREVIEW -->
<div class="bg-surface-container-lowest border border-outline-variant p-4">
<div class="flex items-center justify-between pb-2.5 mb-3 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[18px]">compare_arrows</span>
<span class="text-label-sm font-label-sm text-primary uppercase font-bold">Baseline vs. Simulation Delta</span>
</div>
<span class="text-label-xs font-label-xs bg-secondary-fixed text-on-secondary-fixed px-1.5 py-0.2 border border-secondary font-bold">
              +25% SURGE
            </span>
</div>
<!-- High-Density Telemetry Comparison Table -->
<div class="border border-outline-variant overflow-hidden">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container border-b-2 border-secondary text-primary text-label-xs font-label-xs uppercase">
<th class="p-2">METRIC</th>
<th class="p-2 text-right">BASELINE</th>
<th class="p-2 text-right">SIM DELTA</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant text-body-sm font-body-sm">
<!-- Row 1 -->
<tr class="hover:bg-surface-container-low">
<td class="p-2 font-medium text-primary">Daily Demand</td>
<td class="p-2 text-right font-mono text-on-surface-variant">680 L</td>
<td class="p-2 text-right font-mono font-bold text-primary">850 L (+25%)</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-surface-container-low bg-error-container/30">
<td class="p-2 font-medium text-error flex items-center gap-1">
<span>Stockout Risk</span>
<span class="material-symbols-outlined text-[14px]">warning</span>
</td>
<td class="p-2 text-right font-mono text-on-surface-variant">18%</td>
<td class="p-2 text-right font-mono font-bold text-error">74% (▲ +56%)</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container-low">
<td class="p-2 font-medium text-primary">Zero-Buffer Horizon</td>
<td class="p-2 text-right font-mono text-on-surface-variant">Day 13 (22 Oct)</td>
<td class="p-2 text-right font-mono font-bold text-error">Day 6 (15 Oct)</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-surface-container-low">
<td class="p-2 font-medium text-primary">Buffer Deficit</td>
<td class="p-2 text-right font-mono text-on-surface-variant">0 L</td>
<td class="p-2 text-right font-mono font-bold text-primary">+2,500 L</td>
</tr>
<!-- Row 5 -->
<tr class="hover:bg-surface-container-low">
<td class="p-2 font-medium text-primary">Convoy Sorties Req.</td>
<td class="p-2 text-right font-mono text-on-surface-variant">3 Runs</td>
<td class="p-2 text-right font-mono font-bold text-primary">4 Runs (+1 Heavy)</td>
</tr>
</tbody>
</table>
</div>
<div class="mt-2.5 p-2 bg-surface-container-low border border-outline-variant text-label-xs font-label-xs text-on-surface-variant">
<span class="font-bold text-primary block">CRITICAL DEPLETION ADVISORY:</span>
            Without supplemental convoy dispatch by 12 Oct 06:00 IST, reserve fuel breaches mandatory 2,000 L safety margin at 14 Oct 19:40 IST.
          </div>
</div>
<!-- SIMULATION DATA READINESS MATRIX (92% OVERALL) -->
<div class="bg-surface-container-lowest border border-outline-variant p-4">
<div class="flex items-center justify-between pb-2.5 mb-3 border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[18px]">rule</span>
<span class="text-label-sm font-label-sm text-primary uppercase font-bold">Data Feed Readiness Matrix</span>
</div>
<div class="flex items-center gap-1 font-mono font-bold text-label-sm text-secondary">
<span class="w-2 h-2 bg-secondary rounded-full"></span>
              92% VALIDATED
            </div>
</div>
<!-- Readiness Feed Rows -->
<div class="space-y-2 text-label-xs font-label-xs">
<div class="flex items-center justify-between p-1.5 bg-surface-container-low border border-outline-variant">
<span class="font-medium text-primary">Inventory Records</span>
<div class="flex items-center gap-2 font-mono">
<span class="text-on-surface-variant">Fresh 5m ago</span>
<span class="font-bold text-secondary">98% READY</span>
</div>
</div>
<div class="flex items-center justify-between p-1.5 bg-surface-container-low border border-outline-variant">
<span class="font-medium text-primary">Consumption Stream</span>
<div class="flex items-center gap-2 font-mono">
<span class="text-on-surface-variant">Fresh 8m ago</span>
<span class="font-bold text-secondary">94% READY</span>
</div>
</div>
<div class="flex items-center justify-between p-1.5 bg-surface-container-low border border-outline-variant">
<span class="font-medium text-primary">Demand Forecast v4.8</span>
<div class="flex items-center gap-2 font-mono">
<span class="text-on-surface-variant">Fresh 21m ago</span>
<span class="font-bold text-secondary">91% READY</span>
</div>
</div>
<div class="flex items-center justify-between p-1.5 bg-surface-container-low border border-outline-variant">
<span class="font-medium text-primary">Fleet Transponders</span>
<div class="flex items-center gap-2 font-mono">
<span class="text-on-surface-variant">Fresh 2m ago</span>
<span class="font-bold text-secondary">96% READY</span>
</div>
</div>
<div class="flex items-center justify-between p-1.5 bg-surface-container-low border border-outline-variant">
<span class="font-medium text-primary">Route &amp; GIS Met</span>
<div class="flex items-center gap-2 font-mono">
<span class="text-on-surface-variant">Fresh 5m ago</span>
<span class="font-bold text-secondary">89% READY</span>
</div>
</div>
<div class="flex items-center justify-between p-1.5 bg-surface-container-low border border-outline-variant">
<span class="font-medium text-primary">Weather Radar INSAT</span>
<div class="flex items-center gap-2 font-mono">
<span class="text-on-surface-variant">Fresh 8m ago</span>
<span class="font-bold text-secondary">87% READY</span>
</div>
</div>
</div>
</div>
<!-- PRE-EXECUTION CONFIRMATION & ACTIONS -->
<div class="bg-surface-container-high border-2 border-primary p-4">
<div class="flex items-center justify-between mb-2">
<span class="text-label-xs font-label-xs uppercase font-bold text-primary">SIMULATION DISPATCH GATE</span>
<span class="text-label-xs font-label-xs bg-secondary text-on-secondary px-2 py-0.5 font-mono font-bold">AUTHORIZED</span>
</div>
<p class="text-body-sm font-body-sm text-on-surface mb-3">
            Simulation parameters locked to <span class="font-semibold text-primary">LOC-0042 (Forward Post Alpha)</span>. Kernel will initiate 10,000 Monte Carlo iterations across 7 operational days.
          </p>
<div class="flex flex-col gap-2">
<button class="w-full bg-primary-container text-on-primary py-3 px-4 font-headline-sm text-headline-sm flex items-center justify-center gap-2 border border-primary hover:bg-secondary transition-colors shadow-sm">
<span class="material-symbols-outlined text-[20px]">bolt</span>
<span>RUN SIMULATION (SIM-0089)</span>
</button>
<div class="grid grid-cols-2 gap-2 mt-1">
<button class="py-2 text-label-sm font-label-sm bg-surface-container-lowest border border-outline text-on-surface hover:bg-surface-container-high transition-colors">
                Save Draft State
              </button>
<button class="py-2 text-label-sm font-label-sm bg-surface-container-lowest border border-outline text-on-surface-variant hover:bg-surface-container-high transition-colors">
                Reset to Defaults
              </button>
</div>
</div>
</div>
</div>
</div>
<!-- ==================== 5. INSTITUTIONAL DEFENSE COMPLIANCE FOOTER ==================== -->
<footer class="mt-8 pt-4 pb-6 border-t border-outline-variant text-center md:text-left flex flex-col md:flex-row items-center justify-between text-label-xs font-label-xs text-on-surface-variant font-mono">
<div class="flex items-center gap-2">
<span class="w-2 h-2 bg-secondary inline-block"></span>
<span>MIL-STD-188F INTEROPERABLE // AES-256 ENCRYPTED SIMULATION ENGINE // MONTE CARLO KERNEL: V4.9</span>
</div>
<div class="mt-2 md:mt-0 flex items-center gap-3">
<span>SECTOR IV-B LEH // FORWARD LOGISTICS</span>
<span>•</span>
<span class="font-bold text-primary">RAKSHAKLOGIX RL-32 CREATE</span>
</div>
</footer>
</main>`;
