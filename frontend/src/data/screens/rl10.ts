// Screen: RL-10 — Add / Edit Location Specification
// Route: /locations/new
export const rl10Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto p-space-xl grid grid-cols-12 gap-gutter-desktop items-start">
<!-- =================================================================== -->
<!-- LEFT COLUMN: Main Location Form (~65% width = 8 cols)               -->
<!-- =================================================================== -->
<section class="col-span-12 lg:col-span-8 space-y-space-lg">
<!-- SECTION 1: Location Information (Basic Info) -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-space-lg">
<div class="flex items-center justify-between pb-space-sm mb-space-md border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[20px]" data-icon="badge">badge</span>
<h2 class="font-headline-sm text-headline-sm text-on-surface">1. Location Information</h2>
</div>
<span class="font-label-xs text-label-xs uppercase tracking-wider text-outline">PRIMARY IDENTIFIER CLUSTER</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<!-- Location Name -->
<div class="space-y-1">
<label class="block font-label-sm text-label-sm text-on-surface" for="loc-name">
                Location Name <span class="text-error">*</span>
</label>
<input class="w-full h-9 px-3 bg-surface-container-lowest border border-outline rounded-DEFAULT text-body-md text-on-surface focus:outline-none focus:border-2 focus:border-primary transition-all" id="loc-name" type="text" value="Forward Post Alpha"/>
</div>
<!-- Location ID -->
<div class="space-y-1">
<label class="block font-label-sm text-label-sm text-on-surface" for="loc-id">
                Location ID <span class="font-label-xs text-outline">(Auto-Generated)</span>
</label>
<div class="relative">
<input class="w-full h-9 px-3 bg-surface-container-low border border-outline-variant rounded-DEFAULT font-mono text-body-sm text-on-surface-variant cursor-not-allowed" id="loc-id" readonly="" type="text" value="LOC-0042"/>
<span class="material-symbols-outlined absolute right-2.5 top-2 text-outline text-[18px]" data-icon="lock">lock</span>
</div>
</div>
<!-- Location Type -->
<div class="space-y-1">
<label class="block font-label-sm text-label-sm text-on-surface" for="loc-type">
                Location Type <span class="text-error">*</span>
</label>
<select class="w-full h-9 px-3 bg-surface-container-lowest border border-outline rounded-DEFAULT text-body-sm text-on-surface focus:outline-none focus:border-2 focus:border-primary" id="loc-type">
<option selected="">Forward Post</option>
<option>Supply Depot</option>
<option>Regional Depot</option>
<option>Transit Point</option>
<option>Distribution Point</option>
</select>
</div>
<!-- Operational Region -->
<div class="space-y-1">
<label class="block font-label-sm text-label-sm text-on-surface" for="loc-region">
                Operational Region <span class="text-error">*</span>
</label>
<select class="w-full h-9 px-3 bg-surface-container-lowest border border-outline rounded-DEFAULT text-body-sm text-on-surface focus:outline-none focus:border-2 focus:border-primary" id="loc-region">
<option selected="">Northern Sector // Sector IV-B</option>
<option>Northern Sector // Sector IV-A</option>
<option>Eastern Sector // Sector II</option>
<option>Western Sector // Desert Command</option>
</select>
</div>
<!-- Operational Priority Radio Pills -->
<div class="col-span-1 md:col-span-2 space-y-1.5 pt-1">
<span class="block font-label-sm text-label-sm text-on-surface">Operational Priority</span>
<div class="grid grid-cols-4 gap-2">
<label class="border border-outline-variant bg-surface-container-lowest hover:bg-surface-container px-3 py-1.5 rounded-DEFAULT flex items-center justify-center gap-2 cursor-pointer transition-colors text-body-sm">
<input class="accent-primary" name="priority" type="radio" value="critical"/>
<span class="font-label-sm text-label-sm">Critical</span>
</label>
<label class="border-2 border-primary bg-primary/5 px-3 py-1.5 rounded-DEFAULT flex items-center justify-center gap-2 cursor-pointer transition-colors text-body-sm">
<input checked="" class="accent-primary" name="priority" type="radio" value="high"/>
<span class="font-label-sm text-label-sm font-semibold text-primary">High [Selected]</span>
</label>
<label class="border border-outline-variant bg-surface-container-lowest hover:bg-surface-container px-3 py-1.5 rounded-DEFAULT flex items-center justify-center gap-2 cursor-pointer transition-colors text-body-sm">
<input class="accent-primary" name="priority" type="radio" value="medium"/>
<span class="font-label-sm text-label-sm">Medium</span>
</label>
<label class="border border-outline-variant bg-surface-container-lowest hover:bg-surface-container px-3 py-1.5 rounded-DEFAULT flex items-center justify-center gap-2 cursor-pointer transition-colors text-body-sm">
<input class="accent-primary" name="priority" type="radio" value="low"/>
<span class="font-label-sm text-label-sm">Low</span>
</label>
</div>
</div>
</div>
</div>
<!-- SECTION 2: Geographic Information -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-space-lg">
<div class="flex items-center justify-between pb-space-sm mb-space-md border-b border-outline-variant">
<div class="space-y-0.5">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[20px]" data-icon="explore">explore</span>
<h2 class="font-headline-sm text-headline-sm text-on-surface">2. Geographic Information</h2>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">Feeds GIS cartography, route clearance matrices, and meteorological telemetry.</p>
</div>
<span class="hidden sm:inline-flex items-center gap-1 text-label-xs font-label-xs text-secondary bg-secondary/10 px-2 py-0.5 rounded-DEFAULT">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              GIS SYNCHRONIZED
            </span>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
<!-- Latitude -->
<div class="space-y-1">
<label class="block font-label-sm text-label-sm text-on-surface" for="lat">Latitude (°N)</label>
<div class="relative">
<input class="w-full h-9 pl-3 pr-8 font-mono bg-surface-container-lowest border border-outline rounded-DEFAULT text-body-md text-on-surface focus:outline-none focus:border-2 focus:border-primary" id="lat" type="text" value="34.1526"/>
<span class="absolute right-2.5 top-2 text-outline text-label-xs font-mono">°N</span>
</div>
</div>
<!-- Longitude -->
<div class="space-y-1">
<label class="block font-label-sm text-label-sm text-on-surface" for="long">Longitude (°E)</label>
<div class="relative">
<input class="w-full h-9 pl-3 pr-8 font-mono bg-surface-container-lowest border border-outline rounded-DEFAULT text-body-md text-on-surface focus:outline-none focus:border-2 focus:border-primary" id="long" type="text" value="77.5771"/>
<span class="absolute right-2.5 top-2 text-outline text-label-xs font-mono">°E</span>
</div>
</div>
<!-- Elevation -->
<div class="space-y-1">
<label class="block font-label-sm text-label-sm text-on-surface" for="elevation">Elevation (m MSL)</label>
<div class="relative">
<input class="w-full h-9 pl-3 pr-12 font-mono bg-surface-container-lowest border border-outline rounded-DEFAULT text-body-md text-on-surface focus:outline-none focus:border-2 focus:border-primary" id="elevation" type="text" value="2,840"/>
<span class="absolute right-2.5 top-2 text-outline text-label-xs font-mono">m MSL</span>
</div>
</div>
<!-- High Altitude Threshold Warning -->
<div class="col-span-1 md:col-span-3 p-space-sm bg-surface-container-low border-l-2 border-secondary flex items-start gap-2 rounded-DEFAULT">
<span class="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5" data-icon="ac_unit">ac_unit</span>
<p class="font-body-sm text-body-sm text-on-surface">
<span class="font-semibold text-secondary">High altitude threshold:</span> Winterization protocols &amp; cold-weather lubricants mandated. Standard payload allowances reduced by 15% across Route R-204.
              </p>
</div>
<!-- Terrain Dropdown -->
<div class="space-y-1 md:col-span-1">
<label class="block font-label-sm text-label-sm text-on-surface" for="terrain-type">Terrain Profile</label>
<select class="w-full h-9 px-3 bg-surface-container-lowest border border-outline rounded-DEFAULT text-body-sm text-on-surface focus:outline-none focus:border-2 focus:border-primary" id="terrain-type">
<option selected="">Mountainous // Glaciated Valley</option>
<option>Hilly // Ridge Line</option>
<option>Plains // Riverine</option>
<option>High Plateau Desert</option>
<option>Mixed Complex Terrain</option>
</select>
</div>
<!-- Accessibility Dropdown -->
<div class="space-y-1 md:col-span-2">
<label class="block font-label-sm text-label-sm text-on-surface" for="access-rule">Road Accessibility Class</label>
<select class="w-full h-9 px-3 bg-surface-container-lowest border border-outline rounded-DEFAULT text-body-sm text-on-surface focus:outline-none focus:border-2 focus:border-primary" id="access-rule">
<option selected="">Restricted (Winter Snow-Chain Mandate)</option>
<option>Normal (All-Weather Heavy Motorized)</option>
<option>Seasonal (4x4 Only During Monsoon/Thaw)</option>
<option>Difficult (Convoy Escort &amp; Recovery Assets Required)</option>
</select>
</div>
<!-- Sync confirmation chip -->
<div class="col-span-1 md:col-span-3 flex items-center justify-between text-label-xs font-mono text-outline border-t border-outline-variant pt-2">
<span class="flex items-center gap-1.5 text-secondary font-semibold">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
                Coordinates synced with GIS Vector Engine
              </span>
<span>WGS-84 EPSG:4326 // GRID SQ: NL-44</span>
</div>
</div>
</div>
<!-- SECTION 3: Operational Capacity -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-space-lg">
<div class="flex items-center justify-between pb-space-sm mb-space-md border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[20px]" data-icon="warehouse">warehouse</span>
<h2 class="font-headline-sm text-headline-sm text-on-surface">3. Operational Capacity</h2>
</div>
<span class="font-label-xs text-label-xs uppercase tracking-wider text-outline">STORAGE &amp; LOGISTICAL FOOTPRINT</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<!-- Storage Capacity with Utilization -->
<div class="space-y-1">
<div class="flex justify-between items-baseline">
<label class="block font-label-sm text-label-sm text-on-surface" for="storage-cap">Storage Capacity (Units)</label>
<span class="font-mono text-label-xs text-secondary font-semibold">5,760 / 8,000 MT (72%)</span>
</div>
<input class="w-full h-9 px-3 font-mono bg-surface-container-lowest border border-outline rounded-DEFAULT text-body-md text-on-surface focus:outline-none focus:border-2 focus:border-primary" id="storage-cap" type="text" value="8,000"/>
<!-- Visual Bar -->
<div class="w-full h-1.5 bg-surface-container rounded-full overflow-hidden mt-1.5">
<div class="h-full bg-secondary w-[72%]"></div>
</div>
</div>
<!-- Personnel Capacity -->
<div class="space-y-1">
<label class="block font-label-sm text-label-sm text-on-surface" for="personnel-cap">Personnel Capacity</label>
<input class="w-full h-9 px-3 bg-surface-container-lowest border border-outline rounded-DEFAULT text-body-md text-on-surface focus:outline-none focus:border-2 focus:border-primary" id="personnel-cap" type="text" value="120 Personnel"/>
<p class="font-label-xs text-outline">Nominal compliment: 84 troops + 36 transit personnel.</p>
</div>
<!-- Vehicle Capacity -->
<div class="space-y-1">
<label class="block font-label-sm text-label-sm text-on-surface" for="veh-cap">Vehicle Staging Capacity</label>
<input class="w-full h-9 px-3 bg-surface-container-lowest border border-outline rounded-DEFAULT text-body-md text-on-surface focus:outline-none focus:border-2 focus:border-primary" id="veh-cap" type="text" value="14 Heavy ALS / 4x4 Tankers"/>
</div>
<!-- Operating Status Dropdown -->
<div class="space-y-1">
<label class="block font-label-sm text-label-sm text-on-surface" for="op-status">Operating Status</label>
<select class="w-full h-9 px-3 bg-surface-container-lowest border border-outline rounded-DEFAULT text-body-sm text-on-surface focus:outline-none focus:border-2 focus:border-primary" id="op-status">
<option selected="">Operational</option>
<option>Limited (Reduced Readiness)</option>
<option>Temporarily Closed (Weather Cut-Off)</option>
<option>Planned (Under Construction)</option>
</select>
</div>
</div>
</div>
<!-- SECTION 4: Logistics Configuration -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-space-lg">
<div class="flex items-center justify-between pb-space-sm mb-space-md border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[20px]" data-icon="hub">hub</span>
<h2 class="font-headline-sm text-headline-sm text-on-surface">4. Logistics Configuration</h2>
</div>
<span class="font-label-xs text-label-xs uppercase tracking-wider text-outline">SUPPLY-CHAIN LINKAGE</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<!-- Primary Supply Function -->
<div class="space-y-1">
<label class="block font-label-sm text-label-sm text-on-surface" for="supply-func">Primary Supply Function</label>
<select class="w-full h-9 px-3 bg-surface-container-lowest border border-outline rounded-DEFAULT text-body-sm text-on-surface focus:outline-none focus:border-2 focus:border-primary" id="supply-func">
<option selected="">Mixed // Fuel &amp; Subsistence Priority</option>
<option>POL (Petroleum, Oils &amp; Lubricants) Depot</option>
<option>Dry Rations &amp; Subsistence Reserve</option>
<option>Medical &amp; Evacuation Staging</option>
<option>Ordnance &amp; Ammunition Holding</option>
</select>
</div>
<!-- Preferred Supply Depot -->
<div class="space-y-1">
<label class="block font-label-sm text-label-sm text-on-surface" for="parent-depot">Preferred Supply Depot (Parent)</label>
<input class="w-full h-9 px-3 bg-surface-container-lowest border border-outline rounded-DEFAULT text-body-md text-on-surface focus:outline-none focus:border-2 focus:border-primary" id="parent-depot" type="text" value="Central Supply Depot Leh (Base 01)"/>
</div>
<!-- Standard Resupply Window -->
<div class="space-y-1">
<label class="block font-label-sm text-label-sm text-on-surface" for="lead-time">Standard Resupply Window</label>
<input class="w-full h-9 px-3 bg-surface-container-lowest border border-outline rounded-DEFAULT text-body-md text-on-surface focus:outline-none focus:border-2 focus:border-primary" id="lead-time" type="text" value="18 Hours (via Route R-204)"/>
</div>
<!-- Resupply Priority -->
<div class="space-y-1">
<label class="block font-label-sm text-label-sm text-on-surface">Replenishment Escalation</label>
<div class="grid grid-cols-4 gap-1.5 pt-0.5">
<button class="h-8 border border-outline-variant text-label-xs rounded-DEFAULT hover:bg-surface-container" type="button">Crit</button>
<button class="h-8 border-2 border-primary bg-primary text-on-primary font-bold text-label-xs rounded-DEFAULT" type="button">High</button>
<button class="h-8 border border-outline-variant text-label-xs rounded-DEFAULT hover:bg-surface-container" type="button">Med</button>
<button class="h-8 border border-outline-variant text-label-xs rounded-DEFAULT hover:bg-surface-container" type="button">Low</button>
</div>
</div>
</div>
</div>
<!-- SECTION 5: Operational Notes -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-space-lg">
<div class="flex items-center justify-between pb-space-sm mb-space-md border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[20px]" data-icon="description">description</span>
<h2 class="font-headline-sm text-headline-sm text-on-surface">5. Operational &amp; Tactical Notes</h2>
</div>
<span class="font-mono text-label-xs text-outline">MAX 500 CHARS</span>
</div>
<div class="space-y-1">
<textarea class="w-full px-3 py-2 bg-surface-container-lowest border border-outline rounded-DEFAULT text-body-sm text-on-surface focus:outline-none focus:border-2 focus:border-primary leading-relaxed" rows="3">High-altitude tactical post subject to extreme winter temperature drop (-25°C). Critical POL arctic diesel heating reserve threshold strictly enforced at 6,500 L. Daily telemetry sync via GSAT-7A required at 06:00 and 18:00 hours.</textarea>
<div class="flex justify-between text-label-xs text-outline font-mono">
<span>Classified Military Telemetry Rule // Form SEC-LOC-42</span>
<span>248 / 500</span>
</div>
</div>
</div>
<!-- SECTION 6: Main Action Footer Bar -->
<div class="bg-surface-container-low border border-outline-variant rounded-DEFAULT p-space-md flex flex-wrap items-center justify-between gap-4">
<div class="flex items-center gap-2 text-label-sm font-label-sm text-secondary">
<span class="material-symbols-outlined text-[18px]" data-icon="check_circle">check_circle</span>
<span>All parameters validated under MIL-STD-188F data protocol</span>
</div>
<div class="flex items-center gap-space-md">
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">
              Cancel
            </a>
<button class="h-9 px-space-xl bg-primary-container hover:bg-secondary text-on-primary font-label-md rounded-DEFAULT shadow-xs flex items-center gap-2 transition-transform active:scale-[0.99]" type="button">
<span class="material-symbols-outlined text-[18px]" data-icon="save">save</span>
<span>Save Changes</span>
</button>
</div>
</div>
</section>
<!-- =================================================================== -->
<!-- RIGHT COLUMN: Location Preview & Data Quality Intelligence (~35%)    -->
<!-- =================================================================== -->
<aside class="col-span-12 lg:col-span-4 space-y-space-lg">
<!-- CARD 1: Live Tactical GIS Map Preview -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT overflow-hidden">
<div class="p-space-md border-b border-outline-variant flex items-center justify-between bg-surface-container-low">
<div class="leading-none">
<h3 class="font-headline-sm text-headline-sm text-on-surface">Location Preview</h3>
<span class="font-mono text-label-xs text-outline">LOC-0042 // SECTOR IV-B</span>
</div>
<span class="px-2 py-0.5 bg-surface border border-outline-variant text-label-xs font-mono text-secondary rounded-DEFAULT">
              Interactive Map Preview
            </span>
</div>
<!-- Tactical Map Visual Canvas Container -->
<div class="relative h-64 bg-surface-container tactical-grid overflow-hidden border-b border-outline-variant">
<!-- Map Topographic / Vector Graphic Representation -->
<svg class="absolute inset-0 w-full h-full text-secondary/30" xmlns="http://www.w3.org/2000/svg">
<!-- Contour Lines -->
<path d="M-20,120 Q80,60 160,110 T340,90 T480,140" fill="none" stroke="currentColor" stroke-dasharray="3,3" stroke-width="1.2"></path>
<path d="M-20,160 Q90,100 180,150 T360,130 T480,180" fill="none" stroke="currentColor" stroke-width="1"></path>
<path d="M-20,200 Q100,140 200,190 T380,170 T480,220" fill="none" stroke="currentColor" stroke-width="1"></path>
<!-- Supply Route R-204 Line -->
<path d="M40,240 L110,180 L180,160 L240,115 L320,80" fill="none" stroke="#516446" stroke-linecap="round" stroke-width="2.5"></path>
<text fill="#516446" font-family="monospace" font-size="9" font-weight="bold" x="75" y="195">ROUTE R-204</text>
</svg>
<!-- Coordinate Grid Labels -->
<div class="absolute top-2 left-2 font-mono text-[9px] text-outline bg-surface/90 px-1 py-0.5 rounded-DEFAULT border border-outline-variant">
              34°15'N, 77°35'E
            </div>
<div class="absolute bottom-2 right-2 font-mono text-[9px] text-outline bg-surface/90 px-1 py-0.5 rounded-DEFAULT border border-outline-variant">
              SCALE: 1:50,000
            </div>
<!-- Targeted Tactical Crosshair & Marker -->
<div class="absolute top-[42%] left-[58%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<!-- Pulse Ring -->
<div class="relative flex items-center justify-center">
<span class="absolute w-8 h-8 rounded-full border border-secondary animate-ping opacity-60"></span>
<span class="w-6 h-6 rounded-full bg-primary-container text-tertiary-fixed flex items-center justify-center shadow-md">
<span class="material-symbols-outlined text-[14px]" data-icon="location_searching">location_searching</span>
</span>
</div>
<div class="mt-1 px-1.5 py-0.5 bg-primary-container text-on-primary font-mono text-[10px] rounded-DEFAULT shadow whitespace-nowrap">
                Forward Post Alpha [LOC-0042]
              </div>
</div>
<!-- Quick Map Interaction Tools Overlay -->
<div class="absolute top-2 right-2 flex flex-col gap-1">
<button class="w-6 h-6 bg-surface border border-outline-variant text-on-surface hover:bg-surface-container flex items-center justify-center rounded-DEFAULT font-bold text-xs" title="Zoom In">
                +
              </button>
<button class="w-6 h-6 bg-surface border border-outline-variant text-on-surface hover:bg-surface-container flex items-center justify-center rounded-DEFAULT font-bold text-xs" title="Zoom Out">
                -
              </button>
<button class="w-6 h-6 bg-surface border border-outline-variant text-on-surface hover:bg-surface-container flex items-center justify-center rounded-DEFAULT text-xs" title="Recenter Location">
<span class="material-symbols-outlined text-[13px]" data-icon="my_location">my_location</span>
</button>
</div>
<!-- Sub-overlay dragging prompt -->
<div class="absolute bottom-2 left-2 text-[10px] text-on-surface-variant bg-surface/90 px-2 py-0.5 rounded-DEFAULT border border-outline-variant flex items-center gap-1">
<span class="material-symbols-outlined text-[12px] text-secondary" data-icon="pan_tool">pan_tool</span>
<span>Drag marker to fine-tune coordinates</span>
</div>
</div>
<!-- Context Telemetry Chip below Map -->
<div class="p-space-sm bg-surface-container-low font-mono text-label-xs text-on-surface divide-y divide-outline-variant/60">
<div class="flex justify-between py-1">
<span class="text-outline">GEOGRAPHIC COORDS:</span>
<span class="font-semibold">34.1526° N, 77.5771° E</span>
</div>
<div class="flex justify-between py-1">
<span class="text-outline">ELEVATION (MSL):</span>
<span class="font-semibold">2,840 m (High Cold Zone)</span>
</div>
<div class="flex justify-between py-1">
<span class="text-outline">TERRAIN PROFILE:</span>
<span class="font-semibold">Glaciated Mountainous</span>
</div>
<div class="flex justify-between py-1">
<span class="text-outline">WEATHER CUTOFF RISK:</span>
<span class="font-semibold text-secondary">MODERATE // T-MINUS 45 DAYS</span>
</div>
</div>
</div>
<!-- CARD 2: Data Quality & Readiness Engine -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-space-md space-y-space-md">
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-secondary text-[18px]" data-icon="fact_check">fact_check</span>
<h3 class="font-headline-sm text-headline-sm text-on-surface">Data Quality &amp; Audit</h3>
</div>
<span class="px-2 py-0.5 bg-secondary text-on-secondary font-label-xs font-bold rounded-DEFAULT">
              100% Score
            </span>
</div>
<!-- Readiness Checklist Items -->
<ul class="space-y-2 font-label-sm text-label-sm text-on-surface">
<li class="flex items-center justify-between p-1.5 bg-surface-container-low rounded-DEFAULT border border-outline-variant/40">
<span class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[16px]" data-icon="check_circle">check_circle</span>
<span>Location Identifier Unique &amp; Registered</span>
</span>
<span class="font-mono text-[10px] text-outline">LOC-0042</span>
</li>
<li class="flex items-center justify-between p-1.5 bg-surface-container-low rounded-DEFAULT border border-outline-variant/40">
<span class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[16px]" data-icon="check_circle">check_circle</span>
<span>Coordinates in Sector IV-B Boundary</span>
</span>
<span class="font-mono text-[10px] text-outline">PASS</span>
</li>
<li class="flex items-center justify-between p-1.5 bg-surface-container-low rounded-DEFAULT border border-outline-variant/40">
<span class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[16px]" data-icon="check_circle">check_circle</span>
<span>Terrain &amp; Elevation Correlated</span>
</span>
<span class="font-mono text-[10px] text-outline">VALID</span>
</li>
<li class="flex items-center justify-between p-1.5 bg-surface-container-low rounded-DEFAULT border border-outline-variant/40">
<span class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[16px]" data-icon="check_circle">check_circle</span>
<span>Storage &amp; Commodity Class Mapped</span>
</span>
<span class="font-mono text-[10px] text-outline">CLASS I/III</span>
</li>
<li class="flex items-center justify-between p-1.5 bg-surface-container-low rounded-DEFAULT border border-outline-variant/40">
<span class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[16px]" data-icon="check_circle">check_circle</span>
<span>Primary Depot Linkage Established</span>
</span>
<span class="font-mono text-[10px] text-outline">BASE-01</span>
</li>
</ul>
<!-- Status Box -->
<div class="p-space-sm bg-secondary/10 border border-secondary rounded-DEFAULT flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[18px]" data-icon="task_alt">task_alt</span>
<span class="font-label-md text-label-md font-bold text-secondary">Node Status: Ready to Commit</span>
</div>
<span class="font-mono text-label-xs text-secondary font-bold">READY</span>
</div>
<!-- Audit Metadata -->
<div class="pt-1 text-[10px] font-mono text-on-surface-variant space-y-0.5 border-t border-outline-variant">
<div>LAST MODIFIED: 05 Oct 2026 • 14:32 IST</div>
<div>OPERATOR: Lt. Col. B. Kumar (IC-78921K)</div>
<div>AUDIT HASH: SEC-LOC-9941-FPA-ND4</div>
</div>
</div>
<!-- CARD 3: Node Deactivation & Safety Protocol Warning -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-space-md space-y-2">
<div class="flex items-center gap-1.5 text-error">
<span class="material-symbols-outlined text-[18px]" data-icon="warning">warning</span>
<span class="font-label-sm text-label-sm font-bold uppercase tracking-wider">Deactivation Safety Protocol</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">
            Deactivating Forward Post Alpha will immediately reroute <span class="font-semibold text-on-surface">3 active resupply convoys</span> to Transit Point Bravo and trigger automated rebalancing in the Northern Sector fuel grid.
          </p>
<div class="pt-1 flex items-center justify-between">
<span class="font-mono text-label-xs text-outline">AUTHORIZATION REQUIRED</span>
<button class="text-label-xs font-semibold text-error hover:underline flex items-center gap-1" type="button">
<span>Review Impact Matrix</span>
<span class="material-symbols-outlined text-[12px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</aside>
</main>`;
