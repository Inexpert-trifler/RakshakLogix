// Screen: RL-22 — Fleet Overview
// Route: /fleet
export const rl22Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto p-gutter-desktop flex flex-col gap-space-md">
<!-- ===================================================================== -->
<!-- SECTION 2: PAGE HEADER & FLEET READINESS STRIP                        -->
<!-- ===================================================================== -->
<section class="flex flex-col gap-space-sm">
<div class="flex items-baseline justify-between">
<div>
<h1 class="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">Fleet Overview</h1>
<p class="font-body-sm text-body-sm text-on-surface-variant">
              Monitor vehicle readiness, transport capacity, active movements, and fleet availability across the logistics network.
            </p>
</div>
<div class="font-mono text-label-xs text-label-xs text-on-surface-variant">
            OP-REF: HQ-SEC4-TRN-2026-OCT-188F
          </div>
</div>
<!-- 5 Compact Operational Metrics Strip -->
<div class="grid grid-cols-5 gap-space-sm">
<!-- Total Vehicles -->
<div class="bg-surface-container-lowest border border-outline-variant p-space-sm rounded">
<div class="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs uppercase">
<span>Total Fleet Strength</span>
<span class="material-symbols-outlined text-[15px] text-secondary">grid_view</span>
</div>
<div class="mt-1 flex items-baseline gap-2">
<span class="font-mono text-2xl font-bold text-on-surface">128</span>
<span class="font-label-xs text-label-xs text-secondary font-semibold bg-surface-container-high px-1 py-0.2 rounded">91% NOMINAL</span>
</div>
<div class="mt-1 text-[11px] text-on-surface-variant">Active asset register across 4 hubs</div>
</div>
<!-- Available for Dispatch -->
<div class="bg-surface-container-lowest border border-outline-variant p-space-sm rounded">
<div class="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs uppercase">
<span>Available for Dispatch</span>
<span class="material-symbols-outlined text-[15px] text-[#3f5135]">check_circle</span>
</div>
<div class="mt-1 flex items-baseline gap-2">
<span class="font-mono text-2xl font-bold text-[#233525]">94</span>
<span class="font-label-xs text-label-xs text-[#233525] font-semibold bg-[#e7efe4] px-1 py-0.2 rounded border border-[#b8cda9]">73% POOL</span>
</div>
<div class="mt-1 text-[11px] text-on-surface-variant">Immediate operational tasking ready</div>
</div>
<!-- On Mission -->
<div class="bg-surface-container-lowest border border-outline-variant p-space-sm rounded">
<div class="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs uppercase">
<span>On Active Mission</span>
<span class="material-symbols-outlined text-[15px] text-[#516446]">local_shipping</span>
</div>
<div class="mt-1 flex items-baseline gap-2">
<span class="font-mono text-2xl font-bold text-on-surface">21</span>
<span class="font-label-xs text-label-xs text-[#516446] font-semibold bg-surface-container-high px-1 py-0.2 rounded">16% SORTIES</span>
</div>
<div class="mt-1 text-[11px] text-on-surface-variant">In-transit on passes (NH-1D &amp; feeders)</div>
</div>
<!-- In Maintenance -->
<div class="bg-surface-container-lowest border border-outline-variant p-space-sm rounded">
<div class="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs uppercase">
<span>In Maintenance</span>
<span class="material-symbols-outlined text-[15px] text-[#c49a45]">build_circle</span>
</div>
<div class="mt-1 flex items-baseline gap-2">
<span class="font-mono text-2xl font-bold text-[#7a5b18]">9</span>
<span class="font-label-xs text-label-xs text-[#7a5b18] font-semibold bg-[#fef7e8] border border-[#d6be83] px-1 py-0.2 rounded">7% OVERHAUL</span>
</div>
<div class="mt-1 text-[11px] text-on-surface-variant">2nd &amp; 3rd echelon depot bays</div>
</div>
<!-- Unavailable / Grounded -->
<div class="bg-surface-container-lowest border border-outline-variant p-space-sm rounded">
<div class="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs uppercase">
<span>Unavailable / Refit</span>
<span class="material-symbols-outlined text-[15px] text-[#8b261e]">do_not_disturb_on</span>
</div>
<div class="mt-1 flex items-baseline gap-2">
<span class="font-mono text-2xl font-bold text-[#8b261e]">4</span>
<span class="font-label-xs text-label-xs text-[#8b261e] font-semibold bg-[#ffdad6] border border-[#ba1a1a] px-1 py-0.2 rounded">3% GROUNDED</span>
</div>
<div class="mt-1 text-[11px] text-on-surface-variant">Awaiting critical spares / cold kit</div>
</div>
</div>
<!-- Fleet Readiness Distribution Segmented Bar -->
<div class="bg-surface-container-lowest border border-outline-variant p-space-sm rounded flex flex-col gap-1.5">
<div class="flex items-center justify-between text-[11px]">
<span class="font-label-xs text-label-xs font-semibold uppercase text-on-surface">Fleet Readiness Allocation Model</span>
<div class="flex items-center gap-4 font-mono text-[11px]">
<span class="flex items-center gap-1"><span class="w-2.5 h-2.5 bg-[#3f5135] rounded-none"></span> Available: 73% (94)</span>
<span class="flex items-center gap-1"><span class="w-2.5 h-2.5 bg-[#a49a78] rounded-none"></span> On Mission: 16% (21)</span>
<span class="flex items-center gap-1"><span class="w-2.5 h-2.5 bg-[#c49a45] rounded-none"></span> Maintenance: 7% (9)</span>
<span class="flex items-center gap-1"><span class="w-2.5 h-2.5 bg-[#8b261e] rounded-none"></span> Unavailable: 4% (4)</span>
</div>
</div>
<!-- Bar -->
<div class="w-full h-3 bg-surface-container flex rounded-none overflow-hidden border border-outline-variant">
<div class="bg-[#3f5135] h-full" style="width: 73.4%;" title="Available 73%"></div>
<div class="bg-[#a49a78] h-full" style="width: 16.4%;" title="On Mission 16%"></div>
<div class="bg-[#c49a45] h-full" style="width: 7.0%;" title="Maintenance 7%"></div>
<div class="bg-[#8b261e] h-full" style="width: 3.2%;" title="Unavailable 4%"></div>
</div>
</div>
<!-- Transport Capacity Risk Callout (Restrained Tactical Warning Banner) -->
<div class="bg-[#fef9ed] border-l-4 border-[#c49a45] border-y border-r border-[#e0d6be] p-space-sm rounded-r flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-7 h-7 rounded bg-[#faedd0] border border-[#c49a45] flex items-center justify-center text-[#7a5b18] shrink-0">
<span class="material-symbols-outlined text-[18px]">warning</span>
</div>
<div>
<div class="font-label-sm text-label-sm font-bold text-[#684b12] uppercase tracking-wide">
                Transport Capacity Shortfall Projected (T+24h Window)
              </div>
<div class="text-[12px] text-[#4d3d1a]">
                Available cargo capacity <span class="font-mono font-semibold">214 tonnes</span> vs Expected logistics dispatch demand <span class="font-mono font-semibold">238 tonnes</span> (<strong class="text-[#8b261e]">24 tonne deficit</strong> across Sector IV-B forward axes).
              </div>
</div>
</div>
<button class="h-7 px-3 bg-[#c49a45] hover:bg-[#b08738] text-white rounded font-label-xs text-label-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-none border border-[#9b762c]">
            Review Shipment Allocation
          </button>
</div>
</section>
<!-- ===================================================================== -->
<!-- SECTION 3: MAIN DUAL-COLUMN CONTENT LAYOUT                            -->
<!-- ===================================================================== -->
<div class="grid grid-cols-12 gap-space-md items-start">
<!-- LEFT COLUMN (~65% width: 8 Cols) -->
<div class="col-span-8 flex flex-col gap-space-md">
<!-- Table Container: Fleet Operations Ledger -->
<div class="bg-surface-container-lowest border border-outline-variant rounded">
<!-- Table Header Toolbar -->
<div class="p-space-sm border-b border-outline-variant flex items-center justify-between bg-surface-container-low">
<div class="flex items-center gap-space-sm">
<span class="font-label-sm text-label-sm font-bold uppercase text-on-surface tracking-wider">Fleet Operations Ledger</span>
<span class="font-mono text-label-xs text-label-xs bg-surface-container-high px-1.5 py-0.5 rounded text-on-surface-variant">128 UNITS RECORDED</span>
</div>
<!-- Filter chips -->
<div class="flex items-center gap-1">
<button class="px-2 py-0.5 rounded bg-primary-container text-surface-bright font-label-xs text-label-xs font-semibold">All (128)</button>
<button class="px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-xs text-label-xs">Available (94)</button>
<button class="px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-xs text-label-xs">On Mission (21)</button>
<button class="px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-xs text-label-xs">Maintenance (9)</button>
<button class="px-2 py-0.5 rounded bg-[#fef7e8] border border-[#c49a45] text-[#7a5b18] font-label-xs text-label-xs font-bold">Capacity Risk (6)</button>
</div>
</div>
<!-- Search Filter Bar -->
<div class="p-space-sm border-b border-outline-variant flex items-center gap-space-sm bg-surface-bright">
<div class="relative flex-1">
<span class="material-symbols-outlined absolute left-2 top-2 text-on-surface-variant text-[16px]">search</span>
<input class="w-full h-8 pl-7 pr-3 bg-surface-container-lowest border border-outline-variant rounded text-[12px] font-mono focus:border-primary focus:ring-0" placeholder="Search vehicle ID, model, location node, active shipment..." type="text" value="VH-0087"/>
</div>
<select class="h-8 bg-surface-container-lowest border border-outline-variant rounded text-[11px] font-label-sm px-2 text-on-surface">
<option>Class: All Cargo Tiers</option>
<option>Medium Cargo (4x4)</option>
<option>Heavy Cargo (6x6)</option>
<option>POL Bowzers</option>
</select>
<select class="h-8 bg-surface-container-lowest border border-outline-variant rounded text-[11px] font-label-sm px-2 text-on-surface">
<option>Base Depot: All Locations</option>
<option>Forward Post Alpha</option>
<option>Central Supply Depot</option>
<option>Logistics Hub North</option>
</select>
</div>
<!-- Dense Data Table -->
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container border-b-2 border-secondary font-label-xs text-label-xs text-primary uppercase tracking-wider">
<th class="py-2 px-3">Vehicle ID</th>
<th class="py-2 px-3">Classification &amp; Model</th>
<th class="py-2 px-3">Current Location</th>
<th class="py-2 px-3">Status</th>
<th class="py-2 px-3 text-right">Capacity / Load</th>
<th class="py-2 px-3 text-right">Readiness</th>
<th class="py-2 px-3">Assigned Task</th>
<th class="py-2 px-3 text-center">Action</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant font-body-sm text-[12px]">
<!-- ROW 1 (SELECTED / HIGHLIGHTED) -->
<tr class="bg-[#f0f4ec] border-l-4 border-l-[#3f5135]">
<td class="py-2.5 px-3 font-mono font-bold text-on-surface">
<div class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-[#3f5135]"></span>
                        VH-0087
                      </div>
</td>
<td class="py-2.5 px-3">
<div class="font-semibold text-on-surface">Medium Cargo</div>
<div class="text-[10px] text-on-surface-variant font-mono">Ashok Leyland Stallion 4x4</div>
</td>
<td class="py-2.5 px-3">
<div class="text-on-surface">Forward Post Alpha</div>
<div class="text-[10px] font-mono text-on-surface-variant">LOC-0042 (In Transit)</div>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold font-mono uppercase bg-[#ece7d6] text-[#554a2b] border border-[#a49a78]">
                        ON MISSION
                      </span>
</td>
<td class="py-2.5 px-3 text-right font-mono">
<div class="font-bold text-on-surface">5.8 t / 8.0 t</div>
<div class="text-[10px] text-secondary font-semibold">72.5% Utilized</div>
</td>
<td class="py-2.5 px-3 text-right font-mono">
<span class="inline-block px-1.5 py-0.2 bg-[#e2edd8] text-[#294220] font-bold rounded">89%</span>
</td>
<td class="py-2.5 px-3 font-mono">
<div class="text-[11px] font-bold text-on-surface">SHP-2048</div>
<div class="text-[10px] text-on-surface-variant">ETA 16:30 IST</div>
</td>
<td class="py-2.5 px-3 text-center">
<button class="px-2 py-1 bg-[#3f5135] text-white rounded text-[11px] font-label-sm font-semibold hover:bg-[#2e3d27] transition-colors">
                        Inspect
                      </button>
</td>
</tr>
<!-- ROW 2 -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2.5 px-3 font-mono font-bold text-on-surface">
<div class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-[#516446]"></span>
                        VH-0142
                      </div>
</td>
<td class="py-2.5 px-3">
<div class="font-semibold text-on-surface">Heavy Cargo</div>
<div class="text-[10px] text-on-surface-variant font-mono">Tata 6x6 Heavy Logistics</div>
</td>
<td class="py-2.5 px-3">
<div class="text-on-surface">Logistics Hub North</div>
<div class="text-[10px] font-mono text-on-surface-variant">HUB-0001 (Staging Bay 3)</div>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold font-mono uppercase bg-[#e7efe4] text-[#233525] border border-[#b8cda9]">
                        AVAILABLE
                      </span>
</td>
<td class="py-2.5 px-3 text-right font-mono">
<div class="font-bold text-on-surface">0.0 t / 12.0 t</div>
<div class="text-[10px] text-on-surface-variant">0% (Empty)</div>
</td>
<td class="py-2.5 px-3 text-right font-mono">
<span class="inline-block px-1.5 py-0.2 bg-[#e2edd8] text-[#294220] font-bold rounded">96%</span>
</td>
<td class="py-2.5 px-3 font-mono text-on-surface-variant">
<span>—</span>
</td>
<td class="py-2.5 px-3 text-center">
<button class="px-2 py-1 bg-surface-container border border-outline-variant text-on-surface rounded text-[11px] font-label-sm font-semibold hover:bg-surface-container-high transition-colors">
                        Assign
                      </button>
</td>
</tr>
<!-- ROW 3 -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2.5 px-3 font-mono font-bold text-on-surface">
<div class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-[#516446]"></span>
                        VH-0211
                      </div>
</td>
<td class="py-2.5 px-3">
<div class="font-semibold text-on-surface">Fuel Carrier (POL)</div>
<div class="text-[10px] text-on-surface-variant font-mono">Bulk POL Bowzer 10KL</div>
</td>
<td class="py-2.5 px-3">
<div class="text-on-surface">Central Supply Depot</div>
<div class="text-[10px] font-mono text-on-surface-variant">DEP-0002 (POL Yard)</div>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold font-mono uppercase bg-[#e7efe4] text-[#233525] border border-[#b8cda9]">
                        AVAILABLE
                      </span>
</td>
<td class="py-2.5 px-3 text-right font-mono">
<div class="font-bold text-on-surface">0.0 L / 10,000 L</div>
<div class="text-[10px] text-on-surface-variant">Purged &amp; Certified</div>
</td>
<td class="py-2.5 px-3 text-right font-mono">
<span class="inline-block px-1.5 py-0.2 bg-[#e2edd8] text-[#294220] font-bold rounded">94%</span>
</td>
<td class="py-2.5 px-3 font-mono text-on-surface-variant">
<span>—</span>
</td>
<td class="py-2.5 px-3 text-center">
<button class="px-2 py-1 bg-surface-container border border-outline-variant text-on-surface rounded text-[11px] font-label-sm font-semibold hover:bg-surface-container-high transition-colors">
                        Assign
                      </button>
</td>
</tr>
<!-- ROW 4 -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2.5 px-3 font-mono font-bold text-on-surface">
<div class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-[#c49a45]"></span>
                        VH-0114
                      </div>
</td>
<td class="py-2.5 px-3">
<div class="font-semibold text-on-surface">Medium Cargo</div>
<div class="text-[10px] text-on-surface-variant font-mono">Ashok Leyland Stallion 4x4</div>
</td>
<td class="py-2.5 px-3">
<div class="text-on-surface">Supply Point Delta</div>
<div class="text-[10px] font-mono text-on-surface-variant">LOC-0089 (Pass Route)</div>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold font-mono uppercase bg-[#fef7e8] text-[#7a5b18] border border-[#c49a45]">
                        DELAYED (+42M)
                      </span>
</td>
<td class="py-2.5 px-3 text-right font-mono">
<div class="font-bold text-on-surface">4.2 t / 8.0 t</div>
<div class="text-[10px] text-on-surface-variant">52.5% Utilized</div>
</td>
<td class="py-2.5 px-3 text-right font-mono">
<span class="inline-block px-1.5 py-0.2 bg-[#f0ebd9] text-[#6d5722] font-bold rounded">82%</span>
</td>
<td class="py-2.5 px-3 font-mono">
<div class="text-[11px] font-bold text-on-surface">SHP-2051</div>
<div class="text-[10px] text-[#7a5b18]">Via Zojila</div>
</td>
<td class="py-2.5 px-3 text-center">
<button class="px-2 py-1 bg-surface-container border border-outline-variant text-on-surface rounded text-[11px] font-label-sm font-semibold hover:bg-surface-container-high transition-colors">
                        Track
                      </button>
</td>
</tr>
<!-- ROW 5 -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2.5 px-3 font-mono font-bold text-on-surface">
<div class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-[#a49a78]"></span>
                        VH-0312
                      </div>
</td>
<td class="py-2.5 px-3">
<div class="font-semibold text-on-surface">Light Cargo</div>
<div class="text-[10px] text-on-surface-variant font-mono">4x4 High Mobility Carrier</div>
</td>
<td class="py-2.5 px-3">
<div class="text-on-surface">Khardung Outpost</div>
<div class="text-[10px] font-mono text-on-surface-variant">LOC-0104 (High Alt Base)</div>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold font-mono uppercase bg-[#ece7d6] text-[#554a2b] border border-[#a49a78]">
                        MAINT DUE (3D)
                      </span>
</td>
<td class="py-2.5 px-3 text-right font-mono">
<div class="font-bold text-on-surface">0.0 t / 2.5 t</div>
<div class="text-[10px] text-on-surface-variant">Standby Asset</div>
</td>
<td class="py-2.5 px-3 text-right font-mono">
<span class="inline-block px-1.5 py-0.2 bg-[#f0ebd9] text-[#6d5722] font-bold rounded">78%</span>
</td>
<td class="py-2.5 px-3 font-mono text-on-surface-variant">
<span>—</span>
</td>
<td class="py-2.5 px-3 text-center">
<button class="px-2 py-1 bg-surface-container border border-outline-variant text-on-surface rounded text-[11px] font-label-sm font-semibold hover:bg-surface-container-high transition-colors">
                        Service
                      </button>
</td>
</tr>
<!-- ROW 6 -->
<tr class="hover:bg-surface-container-low transition-colors bg-[#fff8f8]">
<td class="py-2.5 px-3 font-mono font-bold text-on-surface">
<div class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-[#8b261e]"></span>
                        VH-0174
                      </div>
</td>
<td class="py-2.5 px-3">
<div class="font-semibold text-on-surface">Heavy Cargo 6x6</div>
<div class="text-[10px] text-on-surface-variant font-mono">Tata Heavy Logistics</div>
</td>
<td class="py-2.5 px-3">
<div class="text-on-surface">Central Supply Depot</div>
<div class="text-[10px] font-mono text-on-surface-variant">DEP-0002 (Workshop 2)</div>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold font-mono uppercase bg-[#ffdad6] text-[#8b261e] border border-[#ba1a1a]">
                        OVERDUE (2D)
                      </span>
</td>
<td class="py-2.5 px-3 text-right font-mono">
<div class="font-bold text-on-surface">0.0 t / 12.0 t</div>
<div class="text-[10px] text-[#8b261e]">Grounded - Brake Line</div>
</td>
<td class="py-2.5 px-3 text-right font-mono">
<span class="inline-block px-1.5 py-0.2 bg-[#fadbd8] text-[#8b261e] font-bold rounded">64%</span>
</td>
<td class="py-2.5 px-3 font-mono text-[#8b261e] font-semibold text-[11px]">
                      Grounded
                    </td>
<td class="py-2.5 px-3 text-center">
<button class="px-2 py-1 bg-[#8b261e] text-white rounded text-[11px] font-label-sm font-semibold hover:bg-[#6c1c16] transition-colors">
                        Overhaul
                      </button>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Ledger Pagination / Metadata Bar -->
<div class="p-space-sm border-t border-outline-variant bg-surface-container-low flex items-center justify-between text-on-surface-variant font-body-sm text-[11px]">
<div class="font-mono">Showing 1 to 6 of 128 registered vehicles</div>
<div class="flex items-center gap-1 font-mono">
<button class="px-2 py-0.5 border border-outline-variant bg-surface-container rounded text-on-surface disabled:opacity-50" disabled="">&lt; PREV</button>
<span class="px-2 py-0.5 font-bold bg-surface-container-lowest border border-outline-variant rounded text-on-surface">PAGE 01 / 22</span>
<button class="px-2 py-0.5 border border-outline-variant bg-surface-container-lowest rounded text-on-surface hover:bg-surface-container-high">NEXT &gt;</button>
</div>
</div>
</div>
<!-- Active Movements Tracking Panel (Vehicles on route) -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-space-sm">
<div class="flex items-center justify-between pb-space-sm border-b border-outline-variant mb-space-sm">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[18px] text-secondary">route</span>
<h3 class="font-label-md text-label-md font-bold uppercase text-on-surface tracking-wider">Active Convoys &amp; Movements Tracking</h3>
</div>
<span class="font-mono text-[11px] text-secondary font-semibold">3 SORTIES MONITORED VIA IRNSS</span>
</div>
<!-- Sortie list -->
<div class="space-y-2">
<!-- Movement Item 1 -->
<div class="p-space-sm bg-surface-container-low border border-outline-variant rounded flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded bg-[#3f5135] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    2048
                  </div>
<div>
<div class="flex items-center gap-2">
<span class="font-mono font-bold text-xs text-on-surface">SHP-2048</span>
<span class="text-[11px] font-mono text-secondary">(VH-0087 • Stallion 4x4)</span>
<span class="font-label-xs text-label-xs bg-[#e2edd8] text-[#294220] px-1 rounded uppercase">ON ROUTE</span>
</div>
<div class="text-[12px] text-on-surface-variant flex items-center gap-2 mt-0.5 font-mono">
<span>Central Depot</span>
<span class="material-symbols-outlined text-[13px]">arrow_forward</span>
<span class="font-semibold text-on-surface">Forward Post Alpha</span>
<span>• 5.8t Arctic Fuel &amp; Subsistence</span>
</div>
</div>
</div>
<div class="text-right font-mono text-xs">
<div class="font-bold text-on-surface">ETA: 16:30 IST</div>
<div class="text-[11px] text-secondary">3h 48m remaining</div>
</div>
</div>
<!-- Movement Item 2 -->
<div class="p-space-sm bg-[#fefcf6] border border-[#e0d8c3] rounded flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded bg-[#a49a78] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    2051
                  </div>
<div>
<div class="flex items-center gap-2">
<span class="font-mono font-bold text-xs text-on-surface">SHP-2051</span>
<span class="text-[11px] font-mono text-secondary">(VH-0114 • Stallion 4x4)</span>
<span class="font-label-xs text-label-xs bg-[#fef7e8] text-[#7a5b18] px-1 rounded uppercase font-bold border border-[#c49a45]">WEATHER DELAY</span>
</div>
<div class="text-[12px] text-on-surface-variant flex items-center gap-2 mt-0.5 font-mono">
<span>Logistics Hub North</span>
<span class="material-symbols-outlined text-[13px]">arrow_forward</span>
<span class="font-semibold text-on-surface">Supply Point Delta</span>
<span>• 4.2t Cold-Chain Plasma/Vaccine</span>
</div>
</div>
</div>
<div class="text-right font-mono text-xs">
<div class="font-bold text-[#7a5b18]">ETA: 18:10 IST (+42m)</div>
<div class="text-[11px] text-on-surface-variant">Pass clear in ~25m</div>
</div>
</div>
<!-- Movement Item 3 -->
<div class="p-space-sm bg-surface-container-low border border-outline-variant rounded flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded bg-[#3f5135] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    2055
                  </div>
<div>
<div class="flex items-center gap-2">
<span class="font-mono font-bold text-xs text-on-surface">SHP-2055</span>
<span class="text-[11px] font-mono text-secondary">(VH-0092 • POL 10KL Bowzer)</span>
<span class="font-label-xs text-label-xs bg-[#e2edd8] text-[#294220] px-1 rounded uppercase">ON ROUTE</span>
</div>
<div class="text-[12px] text-on-surface-variant flex items-center gap-2 mt-0.5 font-mono">
<span>Central Depot</span>
<span class="material-symbols-outlined text-[13px]">arrow_forward</span>
<span class="font-semibold text-on-surface">Post Charlie</span>
<span>• 8,000L Arctic Diesel (Special Grade)</span>
</div>
</div>
</div>
<div class="text-right font-mono text-xs">
<div class="font-bold text-on-surface">ETA: 21:00 IST</div>
<div class="text-[11px] text-secondary">8h 18m remaining</div>
</div>
</div>
</div>
</div>
</div>
<!-- RIGHT COLUMN (~35% width: 4 Cols) -->
<div class="col-span-4 flex flex-col gap-space-md">
<!-- CARD: Active Vehicle Inspection Drawer (VH-0087) -->
<div class="bg-surface-container-lowest border-2 border-[#596b48] rounded shadow-[0_2px_4px_rgba(23,37,28,0.08)]">
<!-- Inspection Card Header -->
<div class="p-space-sm bg-surface-container-high border-b border-outline-variant flex items-center justify-between">
<div>
<div class="flex items-center gap-2">
<span class="font-mono font-bold text-sm text-on-surface">VH-0087</span>
<span class="font-label-xs text-label-xs bg-[#ece7d6] text-[#554a2b] border border-[#a49a78] px-1 py-0.2 rounded font-mono">ON MISSION</span>
</div>
<div class="text-[11px] font-mono text-on-surface-variant">Medium Cargo 4x4 • Ashok Leyland Stallion</div>
</div>
<div class="text-right font-mono text-[10px] text-on-surface-variant">
<div>DEPOT: DEP-0002</div>
<div>CENTRAL SUPPLY</div>
</div>
</div>
<!-- Card Body: Assignment & Payload Bridge -->
<div class="p-space-sm border-b border-outline-variant space-y-2">
<div class="text-label-xs font-label-xs font-bold uppercase text-secondary tracking-wider">Direct Tactical Assignment</div>
<div class="grid grid-cols-2 gap-2 text-[12px] font-mono">
<div class="bg-surface-container-low p-1.5 rounded border border-outline-variant">
<div class="text-[10px] text-on-surface-variant uppercase">Shipment Ref</div>
<div class="font-bold text-on-surface">SHP-2048</div>
<div class="text-[10px] text-secondary truncate">Arctic POL &amp; Rations</div>
</div>
<div class="bg-surface-container-low p-1.5 rounded border border-outline-variant">
<div class="text-[10px] text-on-surface-variant uppercase">Tactical Route</div>
<div class="font-bold text-on-surface">RTE-018</div>
<div class="text-[10px] text-on-surface-variant">Leh Axis &gt; Zojila</div>
</div>
</div>
<!-- Payload Utilization -->
<div class="bg-surface-container-low p-space-sm rounded border border-outline-variant">
<div class="flex items-center justify-between text-[11px] font-mono mb-1">
<span class="text-on-surface-variant">PAYLOAD UTILIZATION</span>
<span class="font-bold text-on-surface">5.8 t / 8.0 t (72.5%)</span>
</div>
<div class="w-full h-2 bg-surface-container rounded-none overflow-hidden">
<div class="h-full bg-secondary" style="width: 72.5%;"></div>
</div>
<div class="flex justify-between items-center text-[10px] text-on-surface-variant mt-1 font-mono">
<span>Available Spare: 2.2 tonnes</span>
<span>Max Gross: 12.8 t</span>
</div>
</div>
</div>
<!-- Readiness Breakdown Telemetry -->
<div class="p-space-sm border-b border-outline-variant space-y-2">
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs font-bold uppercase text-secondary tracking-wider">Multi-Factor Readiness</span>
<span class="font-mono text-xs font-bold text-secondary bg-[#e2edd8] px-1.5 rounded">89% OVERALL</span>
</div>
<div class="space-y-1.5 text-[11px] font-mono">
<div>
<div class="flex justify-between text-[10px] text-on-surface">
<span>Engine &amp; Drive Transmission</span>
<span class="font-bold">94%</span>
</div>
<div class="w-full h-1.5 bg-surface-container mt-0.5"><div class="h-full bg-[#3f5135]" style="width: 94%;"></div></div>
</div>
<div>
<div class="flex justify-between text-[10px] text-on-surface">
<span>Extreme Cold Weather Kit (-30°C)</span>
<span class="font-bold">92%</span>
</div>
<div class="w-full h-1.5 bg-surface-container mt-0.5"><div class="h-full bg-[#3f5135]" style="width: 92%;"></div></div>
</div>
<div>
<div class="flex justify-between text-[10px] text-on-surface">
<span>Tyre Tread &amp; Studded Snow Chains</span>
<span class="font-bold">86%</span>
</div>
<div class="w-full h-1.5 bg-surface-container mt-0.5"><div class="h-full bg-[#a49a78]" style="width: 86%;"></div></div>
</div>
<div>
<div class="flex justify-between text-[10px] text-on-surface">
<span>IRNSS Military Convoy Beacon</span>
<span class="font-bold">85%</span>
</div>
<div class="w-full h-1.5 bg-surface-container mt-0.5"><div class="h-full bg-[#a49a78]" style="width: 85%;"></div></div>
</div>
</div>
</div>
<!-- Maintenance Schedule -->
<div class="p-space-sm border-b border-outline-variant bg-surface-bright space-y-1 font-mono text-[11px]">
<div class="flex justify-between">
<span class="text-on-surface-variant">Next Scheduled Service:</span>
<span class="font-bold text-on-surface">18 Oct 2026 (Due in 12d)</span>
</div>
<div class="flex justify-between">
<span class="text-on-surface-variant">Last Preventive Overhaul:</span>
<span class="text-on-surface">18 Sep 2026 (48-pt OK)</span>
</div>
<div class="flex justify-between">
<span class="text-on-surface-variant">Maintenance Health:</span>
<span class="text-[#3f5135] font-bold">On Schedule (Nominal)</span>
</div>
</div>
<!-- Quick Action Bar -->
<div class="p-space-sm bg-surface-container-low flex flex-col gap-1.5">
<button class="w-full py-1.5 bg-primary-container text-surface-bright rounded text-[11px] font-label-sm font-semibold hover:bg-[#25392b] transition-colors flex items-center justify-center gap-1.5">
<span class="material-symbols-outlined text-[15px]">description</span>
                View Shipment Dossier (SHP-2048)
              </button>
<div class="grid grid-cols-2 gap-1.5">
<button class="py-1 bg-surface-container-lowest border border-outline-variant hover:bg-surface-container text-on-surface rounded text-[11px] font-label-sm font-semibold transition-colors flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-[14px]">alt_route</span>
                  Re-route Convoy
                </button>
<button class="py-1 bg-surface-container-lowest border border-outline-variant hover:bg-surface-container text-on-surface rounded text-[11px] font-label-sm font-semibold transition-colors flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-[14px]">cell_tower</span>
                  Radio Beacon
                </button>
</div>
</div>
</div>
<!-- CARD: Tactical GIS Sector Cluster (Leh-Ladakh Vector Grid) -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-space-sm space-y-2">
<div class="flex items-center justify-between">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[17px] text-secondary">map</span>
<span class="font-label-sm text-label-sm font-bold uppercase text-on-surface tracking-wider">Sector IV-B Fleet Topology</span>
</div>
<span class="font-mono text-[10px] text-on-surface-variant">GRID: 34°N / 77°E</span>
</div>
<!-- Stylized Tactical Vector Map Simulation -->
<div class="h-44 w-full bg-[#18241d] rounded border border-[#2f4033] relative overflow-hidden flex flex-col justify-between p-2 select-none">
<!-- Tactical grid overlays -->
<div class="absolute inset-0 opacity-15 pointer-events-none" style="background-image: linear-gradient(#596b48 1px, transparent 1px), linear-gradient(90deg, #596b48 1px, transparent 1px); background-size: 20px 20px;"></div>
<!-- Sector nodes representation -->
<div class="relative z-10 flex justify-between text-[10px] font-mono text-white">
<span class="bg-[#243528] px-1 py-0.5 rounded border border-[#3d5341]">SUB-SECTOR IV-NORTH</span>
<span class="text-[#a49a78]">ZOJILA AXIS PASS</span>
</div>
<!-- Map Node Clusters -->
<div class="relative z-10 grid grid-cols-2 gap-2 text-[10px] font-mono">
<!-- Node 1: Hub North -->
<div class="bg-[#121c15]/90 border border-[#445d49] p-1 rounded text-[#e0e4dc]">
<div class="font-bold flex items-center justify-between text-[#d5e9be]">
<span>HUB NORTH</span>
<span class="w-2 h-2 rounded-full bg-[#516446]"></span>
</div>
<div class="text-[9px] text-[#a49a78]">28 Veh (20 Avail)</div>
</div>
<!-- Node 2: Central Supply Depot -->
<div class="bg-[#121c15]/90 border border-[#445d49] p-1 rounded text-[#e0e4dc]">
<div class="font-bold flex items-center justify-between text-[#d5e9be]">
<span>CENTRAL DEPOT</span>
<span class="w-2 h-2 rounded-full bg-[#516446]"></span>
</div>
<div class="text-[9px] text-[#a49a78]">42 Veh (31 Avail)</div>
</div>
<!-- Node 3: Forward Alpha -->
<div class="bg-[#121c15]/90 border border-[#a49a78] p-1 rounded text-[#e0e4dc]">
<div class="font-bold flex items-center justify-between text-[#f4f3ed]">
<span>POST ALPHA (FWD)</span>
<span class="w-2 h-2 rounded-full bg-[#c49a45] animate-ping"></span>
</div>
<div class="text-[9px] text-[#a49a78]">18 Veh (11 Avail)</div>
</div>
<!-- Node 4: Forward Bravo -->
<div class="bg-[#121c15]/90 border border-[#445d49] p-1 rounded text-[#e0e4dc]">
<div class="font-bold flex items-center justify-between text-[#d5e9be]">
<span>POST BRAVO</span>
<span class="w-2 h-2 rounded-full bg-[#516446]"></span>
</div>
<div class="text-[9px] text-[#a49a78]">16 Veh (12 Avail)</div>
</div>
</div>
<!-- Map Footer Status -->
<div class="relative z-10 flex items-center justify-between text-[9px] font-mono text-[#7d8d81] pt-1 border-t border-[#26382b]">
<span>NH-1D CONVOY CHANNEL: CLEAR</span>
<span class="text-[#d5e9be]">MIL-GEO-DATA LIVE</span>
</div>
</div>
<!-- Mission Allocation Tonnage Ledger -->
<div class="pt-2 border-t border-outline-variant space-y-1">
<div class="text-label-xs font-label-xs font-bold uppercase text-secondary tracking-wider">Payload by Formation</div>
<div class="grid grid-cols-2 gap-1.5 text-[11px] font-mono">
<div class="p-1 bg-surface-container-low rounded border border-outline-variant flex justify-between">
<span class="text-on-surface-variant">Fuel / POL:</span>
<span class="font-bold text-on-surface">6 veh / 58 t</span>
</div>
<div class="p-1 bg-surface-container-low rounded border border-outline-variant flex justify-between">
<span class="text-on-surface-variant">Ordnance/Cargo:</span>
<span class="font-bold text-on-surface">8 veh / 74 t</span>
</div>
<div class="p-1 bg-surface-container-low rounded border border-outline-variant flex justify-between">
<span class="text-on-surface-variant">Potable Water:</span>
<span class="font-bold text-on-surface">4 veh / 32 t</span>
</div>
<div class="p-1 bg-surface-container-low rounded border border-outline-variant flex justify-between">
<span class="text-on-surface-variant">Medical Cold:</span>
<span class="font-bold text-on-surface">3 veh / 18 t</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>`;
