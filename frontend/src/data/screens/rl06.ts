// Screen: RL-06 — GIS Command Center
// Route: /gis-command-center
export const rl06Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto flex-1 relative tactical-grid-bg overflow-hidden flex flex-col">
<!-- ================= FLOATING TOP FILTER BAR ================= -->
<div class="absolute top-3 left-4 right-4 z-20 flex flex-col lg:flex-row gap-2 items-stretch lg:items-center justify-between pointer-events-none">
<!-- Search Field -->
<div class="pointer-events-auto flex items-center gap-2 bg-surface-container-lowest border border-outline-variant px-3 py-1.5 rounded shadow-sm w-full lg:w-80">
<span class="material-symbols-outlined text-on-surface-variant text-[18px]" data-icon="search">search</span>
<input class="w-full bg-transparent border-none p-0 text-on-surface font-body-sm text-body-sm focus:ring-0 focus:outline-none placeholder:text-outline placeholder:text-body-sm" placeholder="Search locations, convoys, routes..." type="text"/>
<span class="px-1.5 py-0.5 rounded bg-surface-container font-label-xs text-[10px] text-on-surface-variant border border-outline-variant">⌘K</span>
</div>
<!-- Filter Selectors & Mode Switcher -->
<div class="pointer-events-auto flex flex-wrap items-center gap-1.5 bg-surface-container-lowest border border-outline-variant p-1 rounded shadow-sm">
<!-- Dropdown Filters -->
<div class="flex items-center gap-1 border-r border-outline-variant pr-1.5 mr-0.5">
<div class="flex items-center gap-1 text-on-surface font-label-xs text-label-xs font-semibold px-2 py-1 bg-surface-container rounded cursor-pointer border border-outline-variant">
<span class="text-outline">REGION:</span>
<span>SECTOR IV-B</span>
<span class="material-symbols-outlined text-[14px]" data-icon="arrow_drop_down">arrow_drop_down</span>
</div>
<div class="flex items-center gap-1 text-on-surface font-label-xs text-label-xs font-semibold px-2 py-1 bg-surface-container rounded cursor-pointer border border-outline-variant">
<span class="text-outline">RISK:</span>
<span class="text-error font-bold">ALL ELEVATED (7)</span>
<span class="material-symbols-outlined text-[14px]" data-icon="arrow_drop_down">arrow_drop_down</span>
</div>
<div class="hidden xl:flex items-center gap-1 text-on-surface font-label-xs text-label-xs font-semibold px-2 py-1 bg-surface-container rounded cursor-pointer border border-outline-variant">
<span class="text-outline">HORIZON:</span>
<span>14 DAYS</span>
<span class="material-symbols-outlined text-[14px]" data-icon="arrow_drop_down">arrow_drop_down</span>
</div>
</div>
<!-- Cartographic Layer / Heatmap Modes -->
<div class="flex items-center gap-1">
<button class="px-2.5 py-1 rounded font-label-xs text-label-xs font-bold uppercase transition-colors bg-primary-container text-white">
              Standard
            </button>
<button class="px-2.5 py-1 rounded font-label-xs text-label-xs font-semibold uppercase transition-colors text-on-surface-variant hover:bg-surface-container hover:text-on-surface">
              Risk Heatmap
            </button>
<button class="px-2.5 py-1 rounded font-label-xs text-label-xs font-semibold uppercase transition-colors text-on-surface-variant hover:bg-surface-container hover:text-on-surface hidden md:block">
              Inventory Health
            </button>
<button class="px-2.5 py-1 rounded font-label-xs text-label-xs font-semibold uppercase transition-colors text-on-surface-variant hover:bg-surface-container hover:text-on-surface hidden lg:block">
              Demand Pressure
            </button>
<button class="px-2.5 py-1 rounded font-label-xs text-label-xs font-semibold uppercase transition-colors text-on-surface-variant hover:bg-surface-container hover:text-on-surface">
              Route Hazards
            </button>
</div>
</div>
</div>
<!-- ================= MAP CANVAS / CARTOGRAPHIC STAGE ================= -->
<div class="w-full h-full relative overflow-hidden flex items-center justify-center">
<!-- Topographic Contour & Sector Vector Graphic Simulation -->
<svg class="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="120" id="tactical-subgrid" patternunits="userSpaceOnUse" width="120">
<path d="M 120 0 L 0 0 0 120" fill="none" opacity="0.35" stroke="#A49A78" stroke-dasharray="2 6" stroke-width="0.5"></path>
<circle cx="0" cy="0" fill="#A49A78" opacity="0.6" r="1.5"></circle>
</pattern>
</defs>
<rect fill="url(#tactical-subgrid)" height="100%" width="100%"></rect>
<!-- Elevation Contour Rings (Himalayan / High Altitude Terrain Representation) -->
<g fill="none" opacity="0.6" stroke="#3F5135" stroke-width="0.8">
<path d="M 100,200 Q 250,120 400,250 T 700,200 T 1100,300 T 1400,180"></path>
<path d="M 120,230 Q 260,150 420,270 T 720,220 T 1080,330 T 1380,210" stroke-dasharray="4 4" stroke-width="1.2"></path>
<path d="M 160,280 Q 300,180 440,310 T 750,260 T 1040,370 T 1320,250"></path>
<path d="M 220,340 Q 360,250 500,350 T 800,320 T 980,420 T 1250,320"></path>
<!-- Northern Ridge Outlines -->
<path d="M 280,80 Q 450,40 680,120 T 1020,90 T 1350,110" stroke="#596B48"></path>
<path d="M 320,110 Q 480,70 700,140 T 1000,120 T 1310,140" stroke="#596B48" stroke-width="0.5"></path>
</g>
<!-- Mountain Passes and Elevation Reference Points -->
<text fill="#A49A78" font-family="monospace" font-size="9" letter-spacing="1" x="310" y="160">ZOJILA PASS // ELEV 3,528M</text>
<text fill="#A49A78" font-family="monospace" font-size="9" letter-spacing="1" x="740" y="190">KHARDUNG LA // ELEV 5,359M</text>
<text fill="#A49A78" font-family="monospace" font-size="9" letter-spacing="1" x="980" y="420">CHANG LA CORRIDOR // ELEV 5,360M</text>
<!-- Geographic Coordinates Lat/Long -->
<text fill="#A49A78" font-family="monospace" font-size="9" opacity="0.6" x="30" y="120">34°30'00"N</text>
<text fill="#A49A78" font-family="monospace" font-size="9" opacity="0.6" x="30" y="320">34°15'00"N</text>
<text fill="#A49A78" font-family="monospace" font-size="9" opacity="0.6" x="30" y="520">34°00'00"N</text>
<text fill="#A49A78" font-family="monospace" font-size="9" opacity="0.6" x="350" y="30">76°45'00"E</text>
<text fill="#A49A78" font-family="monospace" font-size="9" opacity="0.6" x="650" y="30">77°15'00"E</text>
<text fill="#A49A78" font-family="monospace" font-size="9" opacity="0.6" x="950" y="30">77°45'00"E</text>
<!-- Primary Corridors Vectors -->
<!-- Nominal Route NH-1D Segment -->
<path d="M 220,440 L 380,360 L 520,380 L 680,290" fill="none" stroke="#596B48" stroke-linecap="round" stroke-width="2.5"></path>
<!-- At-Risk Route Corridor (NH-1D / Pass Alpha) Hazard segment with amber dash -->
<path d="M 380,360 L 460,220 L 560,180" fill="none" stroke="#C49A45" stroke-dasharray="6 4" stroke-linecap="round" stroke-width="3"></path>
<!-- High Risk Link to Forward Post Alpha -->
<path d="M 680,290 L 760,220 L 890,200" fill="none" stroke="#ba1a1a" stroke-dasharray="3 3" stroke-width="2"></path>
<!-- Secondary Forward Logistics Spurs -->
<path d="M 680,290 L 820,370 L 960,340" fill="none" stroke="#596B48" stroke-dasharray="4 2" stroke-width="2"></path>
<path d="M 220,440 L 320,530 L 540,510" fill="none" stroke="#596B48" stroke-width="1.8"></path>
</svg>
<!-- MAP MARKER: Central Logistics Base (Srinagar Depot) -->
<div class="absolute" style="top: 430px; left: 210px;">
<div class="relative group cursor-pointer">
<div class="w-8 h-8 bg-surface-container-lowest border-2 border-primary-container rounded-sm flex items-center justify-center shadow-md">
<span class="material-symbols-outlined text-[18px] text-primary" data-icon="warehouse">warehouse</span>
</div>
<!-- Depot Tag -->
<div class="absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary-container text-white px-2 py-0.5 rounded font-label-xs text-[10px] font-bold border border-outline flex items-center gap-1">
<span>CENTRAL DEPOT // BASE 01</span>
<span class="text-primary-fixed">98% CAP</span>
</div>
</div>
</div>
<!-- MAP MARKER: Leh Regional Logistics Cluster -->
<div class="absolute" style="top: 280px; left: 670px;">
<div class="relative group cursor-pointer">
<div class="w-9 h-9 bg-primary-container border-2 border-primary-fixed rounded-sm flex items-center justify-center shadow-lg">
<span class="material-symbols-outlined text-[20px] text-primary-fixed" data-icon="hub">hub</span>
</div>
<!-- Depot Tag -->
<div class="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary-container/95 text-white px-2 py-0.5 rounded font-label-xs text-[10px] font-bold border border-primary-fixed-dim">
              LEH LOGISTICS CLUSTER // RHQ
            </div>
<div class="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-primary-fixed-dim font-label-xs text-[9px] bg-black/60 px-1 rounded">
              STOCK: 14,200 MT // DISPATCHING
            </div>
</div>
</div>
<!-- MAP MARKER: Forward Post Charlie (Elevated Spike) -->
<div class="absolute" style="top: 360px; left: 810px;">
<div class="relative cursor-pointer">
<div class="w-6 h-6 rounded-full bg-[#C49A45] border-2 border-white flex items-center justify-center shadow">
<div class="w-2 h-2 rounded-full bg-white"></div>
</div>
<div class="absolute top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-surface-container-lowest px-1.5 py-0.5 rounded font-label-xs text-[10px] text-on-surface font-semibold border border-outline-variant shadow">
              POST CHARLIE (SPIKE +18%)
            </div>
</div>
</div>
<!-- MAP MARKER: Foxtrot Outpost -->
<div class="absolute" style="top: 330px; left: 950px;">
<div class="relative cursor-pointer">
<div class="w-6 h-6 rounded-full bg-[#596B48] border-2 border-white flex items-center justify-center shadow">
<div class="w-2 h-2 rounded-full bg-white"></div>
</div>
<div class="absolute top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-surface-container-lowest px-1.5 py-0.5 rounded font-label-xs text-[10px] text-on-surface font-semibold border border-outline-variant shadow">
              FOXTROT OUTPOST // NOMINAL
            </div>
</div>
</div>
<!-- ACTIVE CONVOY TRANSIT: SH-2048 moving toward Alpha -->
<div class="absolute" style="top: 245px; left: 785px;">
<div class="relative flex items-center gap-1.5 cursor-pointer">
<div class="w-7 h-7 rounded bg-secondary text-white flex items-center justify-center shadow-md border border-white animate-pulse">
<span class="material-symbols-outlined text-[16px]" data-icon="local_shipping">local_shipping</span>
</div>
<div class="bg-primary-container text-white px-2 py-0.5 rounded font-label-xs text-[10px] font-bold border border-outline-variant whitespace-nowrap flex items-center gap-1">
<span>SH-2048</span>
<span class="text-primary-fixed">POL DIESEL (42 KM ETA 18:40)</span>
</div>
</div>
</div>
<!-- CONVOY SH-2051 on Pass Road (Delayed) -->
<div class="absolute" style="top: 280px; left: 410px;">
<div class="relative flex items-center gap-1 cursor-pointer">
<div class="w-6 h-6 rounded bg-[#C49A45] text-primary flex items-center justify-center border border-white shadow">
<span class="material-symbols-outlined text-[14px]" data-icon="warning">warning</span>
</div>
<div class="bg-surface-container-lowest text-on-surface px-1.5 py-0.5 rounded font-label-xs text-[10px] font-bold border border-outline-variant whitespace-nowrap">
              SH-2051 // DELAY +8H BLIZZARD
            </div>
</div>
</div>
<!-- ================= INTERACTIVE POPUP 1: ACTIVE PIN INSPECTOR (FORWARD POST ALPHA) ================= -->
<div class="absolute" style="top: 150px; left: 880px;">
<!-- Pin Beacon with Critical Red Glow/Border -->
<div class="relative">
<div class="w-8 h-8 rounded-full bg-error border-2 border-white flex items-center justify-center text-white shadow-lg animate-bounce">
<span class="material-symbols-outlined text-[18px]" data-icon="priority_high">priority_high</span>
</div>
<!-- Detailed Tactical Inspector Card -->
<div class="absolute top-10 left-1/2 -translate-x-1/2 w-80 bg-surface-container-lowest border-2 border-error rounded shadow-xl p-space-md z-40 text-on-surface">
<!-- Header -->
<div class="flex items-center justify-between border-b border-outline-variant pb-2 mb-2">
<div>
<div class="font-label-xs text-label-xs text-error font-bold uppercase tracking-wider flex items-center gap-1">
<span class="w-2 h-2 rounded-full bg-error animate-ping"></span>
<span>CRITICAL DEFICIT IMMINENT</span>
</div>
<div class="font-headline-sm text-headline-sm font-bold text-on-surface">Forward Post Alpha</div>
<div class="font-label-xs text-label-xs text-outline tracking-wider uppercase">Sector IV-B // Elev 4,820m</div>
</div>
<div class="text-right">
<div class="font-headline-sm text-headline-sm font-bold text-on-surface">78%</div>
<div class="font-label-xs text-label-xs text-outline">READINESS</div>
</div>
</div>
<!-- Telemetry Metrics Grid -->
<div class="grid grid-cols-2 gap-2 my-space-sm bg-surface-container-low p-2 rounded border border-outline-variant">
<div>
<div class="font-label-xs text-label-xs text-outline uppercase font-semibold">Class III (POL Diesel)</div>
<div class="font-headline-sm text-headline-sm font-bold text-error flex items-baseline gap-1">
                    6 <span class="font-label-xs text-label-xs text-on-surface">DAYS RUNWAY</span>
</div>
<div class="font-label-xs text-[10px] text-error font-medium">Critical Stockout Level</div>
</div>
<div>
<div class="font-label-xs text-label-xs text-outline uppercase font-semibold">Daily Consumption</div>
<div class="font-headline-sm text-headline-sm font-bold text-on-surface flex items-baseline gap-1">
                    1.8 <span class="font-label-xs text-label-xs text-outline">KL / DAY</span>
</div>
<div class="font-label-xs text-[10px] text-on-surface-variant font-medium">Generator load high</div>
</div>
</div>
<!-- Inbound Shipments Link -->
<div class="mb-space-md bg-secondary/10 p-2 rounded border border-secondary/30">
<div class="flex items-center justify-between font-label-xs text-label-xs font-bold text-secondary mb-1">
<span>ACTIVE INBOUND SHIPMENTS (2)</span>
<span class="text-on-surface font-semibold">ETA SYNCED</span>
</div>
<div class="font-label-sm text-label-sm text-on-surface flex justify-between">
<span>• SH-2048 (POL Fuel - 24 KL)</span>
<span class="font-bold text-primary">18:40 IST (42km)</span>
</div>
<div class="font-label-sm text-label-sm text-on-surface flex justify-between mt-0.5">
<span>• SH-2059 (Rations Class I)</span>
<span class="text-outline">T+36 HRS</span>
</div>
</div>
<!-- Button CTA -->
<button class="w-full py-1.5 bg-primary-container text-white font-label-sm text-label-sm font-bold uppercase rounded border border-primary-container hover:bg-secondary transition-colors flex items-center justify-center gap-1">
<span>View Detailed Post Dossier</span>
<span class="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
<!-- ================= INTERACTIVE POPUP 2: ROUTE HAZARD INSPECTOR (PASS ALPHA / NH-1D) ================= -->
<div class="absolute" style="top: 180px; left: 450px;">
<div class="w-72 bg-surface-container-lowest border border-[#C49A45] rounded shadow-lg p-space-sm z-30">
<div class="flex items-center justify-between border-b border-outline-variant pb-1.5 mb-1.5">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[#C49A45] text-[18px]" data-icon="alt_route">alt_route</span>
<span class="font-label-sm text-label-sm font-bold text-on-surface">CORRIDOR NH-1D // PASS ALPHA</span>
</div>
<span class="px-1.5 py-0.2 bg-[#C49A45]/20 text-[#7A5B18] font-label-xs text-[10px] font-bold rounded border border-[#C49A45]">REROUTE</span>
</div>
<div class="flex flex-col gap-1 text-on-surface font-body-sm text-body-sm">
<div class="flex justify-between font-label-xs text-label-xs">
<span class="text-outline uppercase">Corridor Length:</span>
<span class="font-bold">240 KM</span>
</div>
<div class="flex justify-between font-label-xs text-label-xs">
<span class="text-outline uppercase">Weather Hazard:</span>
<span class="text-error font-bold">Blizzard Risk 68% (Zojila closure)</span>
</div>
<div class="flex justify-between font-label-xs text-label-xs">
<span class="text-outline uppercase">Transit Feasibility:</span>
<span class="text-[#7A5B18] font-bold">Convoy Speed &lt; 15 km/h</span>
</div>
</div>
<div class="mt-2 pt-1.5 border-t border-outline-variant flex gap-2">
<button class="flex-1 py-1 bg-surface-container hover:bg-surface-variant font-label-xs text-label-xs font-bold text-on-surface rounded border border-outline-variant">
                Check Bypass B
              </button>
<button class="flex-1 py-1 bg-primary text-white font-label-xs text-label-xs font-bold rounded hover:bg-secondary">
                Issue Transit Hold
              </button>
</div>
</div>
</div>
<!-- ================= FLOATING MAP TOOLS (Right Side of Map) ================= -->
<div class="absolute right-4 top-20 z-20 flex flex-col gap-1 bg-surface-container-lowest border border-outline-variant p-1 rounded shadow-md">
<button class="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container text-on-surface" title="Zoom In">
<span class="material-symbols-outlined text-[18px]" data-icon="add">add</span>
</button>
<button class="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container text-on-surface" title="Zoom Out">
<span class="material-symbols-outlined text-[18px]" data-icon="remove">remove</span>
</button>
<div class="h-px bg-outline-variant my-0.5"></div>
<button class="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container text-on-surface" title="Center Location">
<span class="material-symbols-outlined text-[18px]" data-icon="my_location">my_location</span>
</button>
<button class="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container text-primary font-bold" title="Reset North">
<span class="font-label-xs text-[11px]">N ▲</span>
</button>
<button class="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container text-on-surface" title="Measure Distance Tool">
<span class="material-symbols-outlined text-[18px]" data-icon="straighten">straighten</span>
</button>
<button class="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container text-on-surface" title="Fullscreen Toggle">
<span class="material-symbols-outlined text-[18px]" data-icon="fullscreen">fullscreen</span>
</button>
</div>
<!-- ================= FLOATING LAYERS CONTROL (Top-Right Overlay) ================= -->
<div class="absolute right-16 top-20 z-20 w-52 bg-surface-container-lowest border border-outline-variant p-space-sm rounded shadow-md hidden lg:block">
<div class="flex items-center justify-between border-b border-outline-variant pb-1 mb-2">
<span class="font-label-xs text-label-xs font-bold text-on-surface uppercase tracking-wider">Tactical GIS Layers</span>
<span class="material-symbols-outlined text-[16px] text-outline" data-icon="layers">layers</span>
</div>
<div class="flex flex-col gap-1.5 font-label-xs text-label-xs text-on-surface">
<label class="flex items-center gap-2 cursor-pointer">
<input checked="" class="rounded border-outline text-primary-container focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span>Locations &amp; Bases</span>
</label>
<label class="flex items-center gap-2 cursor-pointer">
<input checked="" class="rounded border-outline text-primary-container focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span class="text-error font-semibold">Inventory Risk Halos</span>
</label>
<label class="flex items-center gap-2 cursor-pointer">
<input checked="" class="rounded border-outline text-primary-container focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span>Active Convoys (34)</span>
</label>
<label class="flex items-center gap-2 cursor-pointer">
<input checked="" class="rounded border-outline text-primary-container focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span>Supply Routes &amp; Passes</span>
</label>
<label class="flex items-center gap-2 cursor-pointer">
<input checked="" class="rounded border-outline text-primary-container focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span class="text-[#7A5B18]">Weather Radar Overlay</span>
</label>
<label class="flex items-center gap-2 cursor-pointer">
<input class="rounded border-outline text-primary-container focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span class="text-outline">Terrain Elevation 3D</span>
</label>
</div>
</div>
<!-- ================= FLOATING TACTICAL LEGEND (Bottom-Left) ================= -->
<div class="absolute bottom-4 left-4 z-20 bg-surface-container-lowest/95 border border-outline-variant px-3 py-1.5 rounded shadow-sm flex flex-wrap items-center gap-3 font-label-xs text-[10px] text-on-surface backdrop-blur-sm">
<div class="flex items-center gap-1">
<span class="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span>Forward Post</span>
</div>
<div class="flex items-center gap-1">
<span class="w-2.5 h-2.5 bg-primary-container"></span>
<span>Supply Depot</span>
</div>
<div class="flex items-center gap-1">
<span class="w-4 h-0.5 bg-secondary"></span>
<span>Nominal Route</span>
</div>
<div class="flex items-center gap-1">
<span class="w-4 h-0.5 border-t border-dashed border-[#C49A45]"></span>
<span class="text-[#7A5B18] font-bold">At-Risk Corridor</span>
</div>
<div class="flex items-center gap-1">
<span class="w-2.5 h-2.5 rounded-full bg-error border border-white"></span>
<span class="text-error font-bold">Stockout Risk</span>
</div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[13px] text-primary" data-icon="local_shipping">local_shipping</span>
<span>Convoy Transit</span>
</div>
</div>
</div>
</main>`;
