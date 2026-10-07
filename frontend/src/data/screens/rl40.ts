// Screen: RL-40 — System Settings & Platform Configuration
// Route: /admin/settings
export const rl40Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto flex-1 overflow-y-auto px-gutter-desktop py-space-lg space-y-space-lg pb-24">
<!-- Status Banner Component -->
<div class="bg-surface-container-lowest border border-surface-variant p-space-md flex flex-wrap items-center justify-between gap-space-sm">
<div class="flex items-center gap-space-md">
<div class="w-8 h-8 bg-surface-container flex items-center justify-center text-primary">
<span class="material-symbols-outlined" style="font-size: 20px;">deployed_code</span>
</div>
<div>
<div class="flex items-center gap-space-sm text-label-xs font-label-xs">
<span class="font-bold text-primary">ACTIVE RELEASE: CFG-2026.10.07-REV4</span>
<span class="text-outline">|</span>
<span class="text-on-surface-variant">ENV: <span class="font-semibold text-primary">PRODUCTION ENCLAVE</span></span>
<span class="text-outline">|</span>
<span class="text-secondary font-bold">STATUS: OPERATIONAL (All 7 engines synchronized)</span>
</div>
<p class="text-body-sm font-body-sm text-outline">Deterministic baseline active across all forward supply echelons and sector command depots.</p>
</div>
</div>
<a class="text-label-xs font-label-xs text-secondary hover:underline flex items-center gap-1 font-semibold" href="#">
<span>View Full Configuration History (RL-39)</span>
<span class="material-symbols-outlined" style="font-size: 14px;">arrow_forward</span>
</a>
</div>
<!-- SECTION 2: OPERATIONAL THRESHOLDS & LIVE IMPACT SIMULATOR (HIGH PRIORITY FIRST) -->
<section class="bg-surface-container-lowest border border-surface-variant">
<div class="px-space-lg py-space-md border-b border-surface-variant flex items-center justify-between bg-surface-container-low">
<div class="flex items-center gap-space-sm">
<span class="material-symbols-outlined text-secondary" style="font-size: 20px;">speed</span>
<div>
<h2 class="text-headline-sm font-headline-sm text-primary">Section 2: Operational Thresholds &amp; Live Impact Simulator</h2>
<p class="text-label-xs font-label-xs text-outline">Real-time parameters dictating automated alert escalations and asset allocations</p>
</div>
</div>
<span class="px-2 py-0.5 bg-secondary-fixed text-primary font-bold text-label-xs border border-secondary">
                1 STAGED CHANGE DETECTED
              </span>
</div>
<div class="p-space-lg space-y-space-md">
<!-- Staged Impact Visual Callout Card -->
<div class="border border-secondary bg-surface-container-low p-space-md space-y-space-sm">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" style="font-size: 20px;">warning</span>
<span class="text-label-sm font-label-sm font-bold uppercase tracking-wider text-primary">
                      LIVE THRESHOLD IMPACT PREVIEW: FLEET HIGH UTILIZATION
                    </span>
</div>
<div class="flex items-center gap-2 text-label-xs font-label-xs">
<span class="text-outline line-through">PREVIOUS: 80%</span>
<span class="material-symbols-outlined text-secondary" style="font-size: 14px;">arrow_right_alt</span>
<span class="font-bold text-primary bg-secondary-fixed px-1.5 py-0.5 border border-secondary">PROPOSED: 75%</span>
</div>
</div>
<p class="text-body-md font-body-md text-on-surface">
<strong class="font-bold text-primary">Impact Simulation:</strong> Changing Fleet High Utilization from 80% to 75% will immediately reclassify <span class="font-bold text-primary underline decoration-secondary">12 additional multi-axle logistics vehicles</span> as High-Utilization across Sector IV-B (Leh-Kargil Axis).
                </p>
<div class="pt-space-xs border-t border-surface-variant flex flex-wrap items-center justify-between gap-2 text-label-xs font-label-xs">
<div class="flex items-center gap-2 text-outline">
<span class="font-semibold text-on-surface">Downstream Modules Affected:</span>
<span class="px-1.5 py-0.5 bg-surface border border-outline-variant text-on-surface">Fleet Overview (RL-22)</span>
<span class="px-1.5 py-0.5 bg-surface border border-outline-variant text-on-surface">Risk Intelligence (RL-29)</span>
<span class="px-1.5 py-0.5 bg-surface border border-outline-variant text-on-surface">Recommendations Center (RL-35)</span>
</div>
<span class="text-secondary font-bold">PRE-FLIGHT VALIDATION: 100% NOMINAL</span>
</div>
</div>
<!-- Operational Thresholds Grid Matrix -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md pt-space-xs">
<!-- Category 1: Inventory -->
<div class="border border-surface-variant bg-surface p-space-md space-y-space-sm">
<div class="flex items-center justify-between border-b border-surface-variant pb-1.5">
<span class="text-label-sm font-label-sm font-bold text-primary uppercase">INVENTORY</span>
<span class="material-symbols-outlined text-outline" style="font-size: 16px;">inventory_2</span>
</div>
<div>
<label class="block text-label-xs font-label-xs text-on-surface-variant mb-1">Low Stock Warning</label>
<div class="flex items-center border border-outline-variant bg-surface-container-lowest px-2 py-1">
<input class="w-full text-label-sm font-label-sm border-0 p-0 text-on-surface focus:ring-0" type="text" value="20"/>
<span class="text-label-xs font-label-xs text-outline font-bold">%</span>
</div>
</div>
<div>
<label class="block text-label-xs font-label-xs text-on-surface-variant mb-1">Critical Stock Floor</label>
<div class="flex items-center border border-outline-variant bg-surface-container-lowest px-2 py-1">
<input class="w-full text-label-sm font-label-sm border-0 p-0 text-on-surface focus:ring-0" type="text" value="10"/>
<span class="text-label-xs font-label-xs text-outline font-bold">%</span>
</div>
</div>
<p class="text-label-xs font-label-xs text-outline italic">Safety Stock: Governed under SOP-810G Threshold guidelines.</p>
</div>
<!-- Category 2: Demand Forecasting -->
<div class="border border-surface-variant bg-surface p-space-md space-y-space-sm">
<div class="flex items-center justify-between border-b border-surface-variant pb-1.5">
<span class="text-label-sm font-label-sm font-bold text-primary uppercase">DEMAND FORECAST</span>
<span class="material-symbols-outlined text-outline" style="font-size: 16px;">query_stats</span>
</div>
<div>
<label class="block text-label-xs font-label-xs text-on-surface-variant mb-1">Confidence Warning</label>
<div class="flex items-center border border-outline-variant bg-surface-container-lowest px-2 py-1">
<span class="text-label-xs font-label-xs text-outline mr-1">&lt;</span>
<input class="w-full text-label-sm font-label-sm border-0 p-0 text-on-surface focus:ring-0" type="text" value="80"/>
<span class="text-label-xs font-label-xs text-outline font-bold">%</span>
</div>
</div>
<div>
<label class="block text-label-xs font-label-xs text-on-surface-variant mb-1">Model Degradation Crit.</label>
<div class="flex items-center border border-outline-variant bg-surface-container-lowest px-2 py-1">
<span class="text-label-xs font-label-xs text-outline mr-1">&lt;</span>
<input class="w-full text-label-sm font-label-sm border-0 p-0 text-on-surface focus:ring-0" type="text" value="65"/>
<span class="text-label-xs font-label-xs text-outline font-bold">%</span>
</div>
</div>
<p class="text-label-xs font-label-xs text-outline italic">Auto-triggers fallback to static seasonal buffer models.</p>
</div>
<!-- Category 3: Route Risk -->
<div class="border border-surface-variant bg-surface p-space-md space-y-space-sm">
<div class="flex items-center justify-between border-b border-surface-variant pb-1.5">
<span class="text-label-sm font-label-sm font-bold text-primary uppercase">ROUTE RISK</span>
<span class="material-symbols-outlined text-outline" style="font-size: 16px;">alt_route</span>
</div>
<div>
<label class="block text-label-xs font-label-xs text-on-surface-variant mb-1">Warning Score</label>
<div class="flex items-center border border-outline-variant bg-surface-container-lowest px-2 py-1">
<span class="text-label-xs font-label-xs text-outline mr-1">&gt;</span>
<input class="w-full text-label-sm font-label-sm border-0 p-0 text-on-surface focus:ring-0" type="text" value="60"/>
<span class="text-label-xs font-label-xs text-outline font-bold">PTS</span>
</div>
</div>
<div>
<label class="block text-label-xs font-label-xs text-on-surface-variant mb-1">Critical Closure</label>
<div class="flex items-center border border-outline-variant bg-surface-container-lowest px-2 py-1">
<span class="text-label-xs font-label-xs text-outline mr-1">&gt;</span>
<input class="w-full text-label-sm font-label-sm border-0 p-0 text-on-surface focus:ring-0" type="text" value="80"/>
<span class="text-label-xs font-label-xs text-outline font-bold">PTS</span>
</div>
</div>
<p class="text-label-xs font-label-xs text-outline italic">Triggers convoy re-route recommendations across BRO passes.</p>
</div>
<!-- Category 4: Convoy Delivery -->
<div class="border border-surface-variant bg-surface p-space-md space-y-space-sm">
<div class="flex items-center justify-between border-b border-surface-variant pb-1.5">
<span class="text-label-sm font-label-sm font-bold text-primary uppercase">CONVOY TRANSIT</span>
<span class="material-symbols-outlined text-outline" style="font-size: 16px;">rv_hookup</span>
</div>
<div>
<label class="block text-label-xs font-label-xs text-on-surface-variant mb-1">Delay Warning</label>
<div class="flex items-center border border-outline-variant bg-surface-container-lowest px-2 py-1">
<span class="text-label-xs font-label-xs text-outline mr-1">&gt;</span>
<input class="w-full text-label-sm font-label-sm border-0 p-0 text-on-surface focus:ring-0" type="text" value="30"/>
<span class="text-label-xs font-label-xs text-outline font-bold">MIN</span>
</div>
</div>
<div>
<label class="block text-label-xs font-label-xs text-on-surface-variant mb-1">Transit Breach Alert</label>
<div class="flex items-center border border-outline-variant bg-surface-container-lowest px-2 py-1">
<span class="text-label-xs font-label-xs text-outline mr-1">&gt;</span>
<input class="w-full text-label-sm font-label-sm border-0 p-0 text-on-surface focus:ring-0" type="text" value="60"/>
<span class="text-label-xs font-label-xs text-outline font-bold">MIN</span>
</div>
</div>
<p class="text-label-xs font-label-xs text-outline italic">Direct dispatch to Division Logistics Operational Center (D-LOC).</p>
</div>
</div>
</div>
</section>
<!-- SECTION 1: GENERAL PLATFORM & LOCALIZATION CONFIGURATION -->
<section class="bg-surface-container-lowest border border-surface-variant">
<div class="px-space-lg py-space-md border-b border-surface-variant flex items-center justify-between bg-surface-container-low">
<div class="flex items-center gap-space-sm">
<span class="material-symbols-outlined text-secondary" style="font-size: 20px;">manufacturing</span>
<div>
<h2 class="text-headline-sm font-headline-sm text-primary">Section 1: General Platform &amp; Localization Configuration</h2>
<p class="text-label-xs font-label-xs text-outline">Base parameters for Northern Command terminal deployments and precision telemetry units</p>
</div>
</div>
<span class="text-label-xs font-label-xs text-outline uppercase font-semibold">ALL PARAMETERS LOCKED UNDER AES-256</span>
</div>
<div class="p-space-lg">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
<!-- Field 1 -->
<div>
<label class="block text-label-xs font-label-xs font-bold text-on-surface mb-1">PLATFORM INSTANCE IDENTIFIER</label>
<input class="w-full h-9 bg-surface-container-low border border-outline-variant px-3 text-body-sm font-body-sm text-primary cursor-not-allowed" readonly="" type="text" value="Predictive Logistics Command System (RL-NORTH-04)"/>
<span class="text-label-xs font-label-xs text-outline mt-0.5 block">Static enclave UID configured during bare-metal deployment.</span>
</div>
<!-- Field 2 -->
<div>
<label class="block text-label-xs font-label-xs font-bold text-on-surface mb-1">DEPLOYMENT THEATER / SECTOR</label>
<select class="w-full h-9 bg-surface-container-lowest border border-outline-variant px-3 text-body-sm font-body-sm text-primary focus:border-primary">
<option selected="">Northern Command (Leh Enclave)</option>
<option>Western Command (Chandimandir)</option>
<option>Eastern Command (Kolkata Forward Hub)</option>
<option>Southern Command (Pune Enclave)</option>
</select>
<span class="text-label-xs font-label-xs text-outline mt-0.5 block">Dictates GIS layer routing boundary &amp; ordnance classifications.</span>
</div>
<!-- Field 3 -->
<div>
<label class="block text-label-xs font-label-xs font-bold text-on-surface mb-1">OPERATIONAL TIMEZONE</label>
<select class="w-full h-9 bg-surface-container-lowest border border-outline-variant px-3 text-body-sm font-body-sm text-primary focus:border-primary">
<option selected="">IST (UTC+05:30) - Indian Standard Time</option>
<option>ZULU (UTC+00:00) - Coordinated Universal Time</option>
</select>
<span class="text-label-xs font-label-xs text-outline mt-0.5 block">Synchronized via Stratum-1 Military NTP reference.</span>
</div>
<!-- Field 4: System Units -->
<div class="lg:col-span-2">
<label class="block text-label-xs font-label-xs font-bold text-on-surface mb-1">MILITARY MEASUREMENT UNITS MATRIX</label>
<div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
<div class="border border-outline-variant p-2 bg-surface">
<span class="text-[10px] text-outline block uppercase font-bold">DISTANCE</span>
<span class="text-label-sm font-label-sm font-semibold text-primary">Kilometers (km)</span>
</div>
<div class="border border-outline-variant p-2 bg-surface">
<span class="text-[10px] text-outline block uppercase font-bold">MASS / WEIGHT</span>
<span class="text-label-sm font-label-sm font-semibold text-primary">Metric Tonnes (t)</span>
</div>
<div class="border border-outline-variant p-2 bg-surface">
<span class="text-[10px] text-outline block uppercase font-bold">LIQUID POL</span>
<span class="text-label-sm font-label-sm font-semibold text-primary">Litres (L) / KL</span>
</div>
<div class="border border-outline-variant p-2 bg-surface">
<span class="text-[10px] text-outline block uppercase font-bold">TEMPERATURE</span>
<span class="text-label-sm font-label-sm font-semibold text-primary">Celsius (°C)</span>
</div>
</div>
</div>
<!-- Field 5: Interface Density & Timeout -->
<div>
<label class="block text-label-xs font-label-xs font-bold text-on-surface mb-1">INTERFACE CONFIGURATION</label>
<div class="space-y-2">
<div class="flex items-center justify-between border border-outline-variant p-2 bg-surface-container-lowest">
<span class="text-label-xs font-label-xs text-on-surface">Density Profile:</span>
<span class="text-label-xs font-label-xs font-bold text-primary">Compact (Enterprise Std)</span>
</div>
<div class="flex items-center justify-between border border-outline-variant p-2 bg-surface-container-lowest">
<span class="text-label-xs font-label-xs text-on-surface">Inactivity Auto-Reauth:</span>
<span class="text-label-xs font-label-xs font-bold text-secondary">30 mins (STRICT)</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- SECTION 3: RISK MODEL WEIGHT DISTRIBUTION (100% Guaranteed) -->
<section class="bg-surface-container-lowest border border-surface-variant">
<div class="px-space-lg py-space-md border-b border-surface-variant flex items-center justify-between bg-surface-container-low">
<div class="flex items-center gap-space-sm">
<span class="material-symbols-outlined text-secondary" style="font-size: 20px;">balance</span>
<div>
<h2 class="text-headline-sm font-headline-sm text-primary">Section 3: Risk Model Weight Distribution</h2>
<p class="text-label-xs font-label-xs text-outline">Continuous multi-factor weighting algorithm for route safety and convoy dispatch</p>
</div>
</div>
<div class="flex items-center gap-2">
<span class="text-label-xs font-label-xs uppercase text-outline">TOTAL SUM:</span>
<span class="px-2 py-0.5 bg-secondary-fixed text-primary font-bold text-label-xs border border-secondary">100% VALIDATED</span>
</div>
</div>
<div class="p-space-lg space-y-space-md">
<!-- Segmented Horizontal Visual Bar -->
<div class="space-y-1.5">
<div class="flex justify-between text-label-xs font-label-xs text-outline">
<span>WEIGHT REPARTITION BAR GRAPH</span>
<span class="font-bold text-primary">100.0% AGGREGATE</span>
</div>
<div class="h-6 w-full flex overflow-hidden border border-outline-variant">
<div class="bg-primary-container text-on-primary flex items-center justify-center text-[10px] font-bold" style="width: 30%;" title="Route Reliability: 30%">
                    30%
                  </div>
<div class="bg-secondary text-on-secondary flex items-center justify-center text-[10px] font-bold" style="width: 25%;" title="Severe Weather: 25%">
                    25%
                  </div>
<div class="bg-outline text-surface-bright flex items-center justify-center text-[10px] font-bold" style="width: 25%;" title="Capacity Pressure: 25%">
                    25%
                  </div>
<div class="bg-surface-container-highest text-on-surface flex items-center justify-center text-[10px] font-bold" style="width: 20%;" title="Mountain Terrain: 20%">
                    20%
                  </div>
</div>
</div>
<!-- Risk Factor Weight Sliders/Cards Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
<!-- Weight Card 1 -->
<div class="p-space-md border border-surface-variant bg-surface space-y-2">
<div class="flex items-center justify-between">
<span class="w-3 h-3 bg-primary-container inline-block"></span>
<span class="text-label-sm font-label-sm font-bold text-primary">30%</span>
</div>
<div>
<h4 class="text-label-sm font-label-sm font-bold text-on-surface">Route Reliability &amp; BRO</h4>
<p class="text-label-xs font-label-xs text-outline mt-0.5">Border Roads Organisation status feed, landslide histories &amp; snow clearance reports.</p>
</div>
<input class="w-full accent-primary-container cursor-pointer" max="100" min="0" type="range" value="30"/>
</div>
<!-- Weight Card 2 -->
<div class="p-space-md border border-surface-variant bg-surface space-y-2">
<div class="flex items-center justify-between">
<span class="w-3 h-3 bg-secondary inline-block"></span>
<span class="text-label-sm font-label-sm font-bold text-primary">25%</span>
</div>
<div>
<h4 class="text-label-sm font-label-sm font-bold text-on-surface">Severe Weather &amp; Katabatic</h4>
<p class="text-label-xs font-label-xs text-outline mt-0.5">IMD Doppler radar, sub-zero blizzard telemetry, high-pass icing coefficients.</p>
</div>
<input class="w-full accent-secondary cursor-pointer" max="100" min="0" type="range" value="25"/>
</div>
<!-- Weight Card 3 -->
<div class="p-space-md border border-surface-variant bg-surface space-y-2">
<div class="flex items-center justify-between">
<span class="w-3 h-3 bg-outline inline-block"></span>
<span class="text-label-sm font-label-sm font-bold text-primary">25%</span>
</div>
<div>
<h4 class="text-label-sm font-label-sm font-bold text-on-surface">Forward Capacity Pressure</h4>
<p class="text-label-xs font-label-xs text-outline mt-0.5">Buffer depletion ratios at forward staging posts, ammunition supply rates.</p>
</div>
<input class="w-full accent-outline cursor-pointer" max="100" min="0" type="range" value="25"/>
</div>
<!-- Weight Card 4 -->
<div class="p-space-md border border-surface-variant bg-surface space-y-2">
<div class="flex items-center justify-between">
<span class="w-3 h-3 bg-surface-container-highest border border-outline inline-block"></span>
<span class="text-label-sm font-label-sm font-bold text-primary">20%</span>
</div>
<div>
<h4 class="text-label-sm font-label-sm font-bold text-on-surface">Mountain Terrain &amp; Altitude</h4>
<p class="text-label-xs font-label-xs text-outline mt-0.5">Gradient strain, engine derating at &gt;14,000 ft, oxygen enrichment factors.</p>
</div>
<input class="w-full accent-surface-tint cursor-pointer" max="100" min="0" type="range" value="20"/>
</div>
</div>
</div>
</section>
<!-- SECTION 4: DATA SOURCES & FRESHNESS MATRIX -->
<section class="bg-surface-container-lowest border border-surface-variant">
<div class="px-space-lg py-space-md border-b border-surface-variant flex items-center justify-between bg-surface-container-low">
<div class="flex items-center gap-space-sm">
<span class="material-symbols-outlined text-secondary" style="font-size: 20px;">dataset</span>
<div>
<h2 class="text-headline-sm font-headline-sm text-primary">Section 4: Data Sources &amp; Freshness Matrix</h2>
<p class="text-label-xs font-label-xs text-outline">Real-time telemetry ingestion pipelines and SLA breach tolerance parameters</p>
</div>
</div>
<button class="h-7 px-space-sm text-label-xs font-label-xs bg-surface border border-outline-variant hover:bg-surface-container text-on-surface flex items-center gap-1">
<span class="material-symbols-outlined" style="font-size: 14px;">sync</span>
                Probe All Telemetry Feeds
              </button>
</div>
<!-- Crisp Military Data Table -->
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container border-b border-secondary">
<th class="px-space-lg py-2.5 text-label-xs font-label-xs text-primary uppercase">Source Identifier</th>
<th class="px-space-md py-2.5 text-label-xs font-label-xs text-primary uppercase">Interface Channel</th>
<th class="px-space-md py-2.5 text-label-xs font-label-xs text-primary uppercase">Last Ingest</th>
<th class="px-space-md py-2.5 text-label-xs font-label-xs text-primary uppercase">Max Warning SLA</th>
<th class="px-space-md py-2.5 text-label-xs font-label-xs text-primary uppercase">Max Critical SLA</th>
<th class="px-space-lg py-2.5 text-label-xs font-label-xs text-primary uppercase text-right">Integrity Status</th>
</tr>
</thead>
<tbody class="divide-y divide-surface-variant text-body-sm font-body-sm">
<!-- Row 1 -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="px-space-lg py-2.5 font-semibold text-primary">
                      Inventory Telemetry API
                      <span class="block text-[10px] text-outline font-normal">Auto-poller // Depot Stock Master Level</span>
</td>
<td class="px-space-md py-2.5 font-mono text-label-xs">REST / HTTPS (mTLS)</td>
<td class="px-space-md py-2.5">
<span class="inline-flex items-center gap-1 font-semibold text-secondary">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> 2m ago
                      </span>
</td>
<td class="px-space-md py-2.5 font-mono text-on-surface">15 mins</td>
<td class="px-space-md py-2.5 font-mono text-error font-semibold">30 mins</td>
<td class="px-space-lg py-2.5 text-right">
<span class="px-2 py-0.5 bg-secondary-fixed text-primary text-label-xs font-bold border border-secondary">
                        CONNECTED
                      </span>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="px-space-lg py-2.5 font-semibold text-primary">
                      Convoy GPS Fleet Tracker
                      <span class="block text-[10px] text-outline font-normal">NavIC Constellation // Tactical Sat-Mesh</span>
</td>
<td class="px-space-md py-2.5 font-mono text-label-xs">MQTT / Encrypted Kafka</td>
<td class="px-space-md py-2.5">
<span class="inline-flex items-center gap-1 font-semibold text-secondary">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> 3m ago
                      </span>
</td>
<td class="px-space-md py-2.5 font-mono text-on-surface">10 mins</td>
<td class="px-space-md py-2.5 font-mono text-error font-semibold">20 mins</td>
<td class="px-space-lg py-2.5 text-right">
<span class="px-2 py-0.5 bg-secondary-fixed text-primary text-label-xs font-bold border border-secondary">
                        CONNECTED
                      </span>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="px-space-lg py-2.5 font-semibold text-primary">
                      IMD Alpine Weather Radar
                      <span class="block text-[10px] text-outline font-normal">Doppler Radar Feeds // Kargil-Siachen</span>
</td>
<td class="px-space-md py-2.5 font-mono text-label-xs">WMS GeoTIFF / Vector API</td>
<td class="px-space-md py-2.5">
<span class="inline-flex items-center gap-1 font-semibold text-secondary">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> 5m ago
                      </span>
</td>
<td class="px-space-md py-2.5 font-mono text-on-surface">30 mins</td>
<td class="px-space-md py-2.5 font-mono text-error font-semibold">60 mins</td>
<td class="px-space-lg py-2.5 text-right">
<span class="px-2 py-0.5 bg-secondary-fixed text-primary text-label-xs font-bold border border-secondary">
                        CONNECTED
                      </span>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="px-space-lg py-2.5 font-semibold text-primary">
                      Ordnance Requisition Ledger
                      <span class="block text-[10px] text-outline font-normal">Immutable Audit Store // Echelon Replenishment</span>
</td>
<td class="px-space-md py-2.5 font-mono text-label-xs">PostgreSQL WAL Replica</td>
<td class="px-space-md py-2.5">
<span class="inline-flex items-center gap-1 font-semibold text-secondary">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> 4m ago
                      </span>
</td>
<td class="px-space-md py-2.5 font-mono text-on-surface">15 mins</td>
<td class="px-space-md py-2.5 font-mono text-error font-semibold">30 mins</td>
<td class="px-space-lg py-2.5 text-right">
<span class="px-2 py-0.5 bg-secondary-fixed text-primary text-label-xs font-bold border border-secondary">
                        CONNECTED
                      </span>
</td>
</tr>
</tbody>
</table>
</div>
</section>
<!-- SECTION 5: SECURITY, SESSION GOVERNANCE & SYSTEM HEALTH STRIP -->
<section class="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
<!-- Sub-Card 1: Authentication & MFA -->
<div class="bg-surface-container-lowest border border-surface-variant p-space-md space-y-space-sm">
<div class="flex items-center justify-between border-b border-surface-variant pb-2">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-secondary" style="font-size: 18px;">key</span>
<span class="text-label-sm font-label-sm font-bold text-primary uppercase">AUTHENTICATION GUARDRAILS</span>
</div>
<span class="text-label-xs font-label-xs font-bold text-secondary">L3/L4 ENFORCED</span>
</div>
<p class="text-body-sm font-body-sm text-on-surface">
                Hardware Cryptographic Token (FIDO2 / YubiKey) mandated for all Staff Officer and Quartermaster operational levels.
              </p>
<div class="text-label-xs font-label-xs space-y-1.5 pt-1">
<div class="flex justify-between py-1 border-b border-surface-variant">
<span class="text-outline">Max Consecutive Retries:</span>
<span class="font-bold text-primary">5 Attempts (15m lockout)</span>
</div>
<div class="flex justify-between py-1 border-b border-surface-variant">
<span class="text-outline">Active Staff Sessions:</span>
<span class="font-bold text-secondary">186 Operators Provisioned</span>
</div>
<div class="flex justify-between py-1">
<span class="text-outline">Privileged Access Mode:</span>
<span class="font-bold text-primary">Hardware Enclave Only</span>
</div>
</div>
</div>
<!-- Sub-Card 2: Engine Health Metrics -->
<div class="bg-surface-container-lowest border border-surface-variant p-space-md space-y-space-sm">
<div class="flex items-center justify-between border-b border-surface-variant pb-2">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-secondary" style="font-size: 18px;">monitor_heart</span>
<span class="text-label-sm font-label-sm font-bold text-primary uppercase">ENGINE PERFORMANCE</span>
</div>
<span class="text-label-xs font-label-xs font-bold text-secondary">ALL NOMINAL</span>
</div>
<div class="space-y-2 pt-1 text-label-xs font-label-xs">
<div class="flex items-center justify-between">
<span class="text-on-surface">Forecast Predictive Engine:</span>
<span class="font-mono font-bold text-secondary">Healthy (42ms)</span>
</div>
<div class="w-full bg-surface-container-highest h-1.5 overflow-hidden">
<div class="bg-secondary h-full" style="width: 25%;"></div>
</div>
<div class="flex items-center justify-between">
<span class="text-on-surface">Route Simulation Engine:</span>
<span class="font-mono font-bold text-secondary">Healthy (184ms)</span>
</div>
<div class="w-full bg-surface-container-highest h-1.5 overflow-hidden">
<div class="bg-secondary h-full" style="width: 48%;"></div>
</div>
<div class="flex items-center justify-between">
<span class="text-on-surface">GIS Vector Topology Core:</span>
<span class="font-mono font-bold text-secondary">Healthy (61ms)</span>
</div>
<div class="w-full bg-surface-container-highest h-1.5 overflow-hidden">
<div class="bg-secondary h-full" style="width: 32%;"></div>
</div>
</div>
</div>
<!-- Sub-Card 3: Maintenance Mode & Ledger Integrity -->
<div class="bg-surface-container-lowest border border-surface-variant p-space-md space-y-space-sm flex flex-col justify-between">
<div>
<div class="flex items-center justify-between border-b border-surface-variant pb-2">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-secondary" style="font-size: 18px;">build_circle</span>
<span class="text-label-sm font-label-sm font-bold text-primary uppercase">MAINTENANCE &amp; INTEGRITY</span>
</div>
<span class="text-label-xs font-label-xs font-bold text-outline">STANDBY</span>
</div>
<div class="mt-space-sm space-y-2">
<div class="flex items-center justify-between p-2 border border-outline-variant bg-surface">
<div>
<span class="text-label-xs font-label-xs font-bold text-primary block">Emergency Maintenance Mode</span>
<span class="text-[10px] text-outline">Restricts platform to read-only state.</span>
</div>
<!-- Mechanical Toggle (OFF) -->
<div class="w-10 h-5 bg-surface-container-highest border border-outline-variant flex items-center p-0.5 cursor-pointer">
<div class="w-4 h-4 bg-outline"></div>
</div>
</div>
<div class="p-2 border border-secondary bg-secondary-fixed/20 text-label-xs font-label-xs space-y-1">
<div class="flex items-center gap-1 font-bold text-primary">
<span class="material-symbols-outlined" style="font-size: 14px;">verified</span>
<span>LEDGER INTEGRITY VERIFIED</span>
</div>
<p class="text-outline text-[11px]">SHA-256 Merkle root matches Northern Command root keystore.</p>
</div>
</div>
</div>
<div class="text-[10px] text-outline font-mono pt-2 border-t border-surface-variant flex justify-between">
<span>HASH: 8f9b...a12c</span>
<span>SIGNATURE: VALID</span>
</div>
</div>
</section>
</main>`;
