// Screen: RL-38 — Roles & Permissions Governance
// Route: /admin/roles
export const rl38Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto p-6 space-y-5 flex-1 bg-surface-container-low">
<!-- ==================== 2. SECURITY & PERMISSION SUMMARY BAR ==================== -->
<section class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
<!-- KPI 1 -->
<div class="bg-surface-container-lowest p-3 rounded border border-outline-variant">
<div class="text-label-xs font-label-xs text-outline uppercase tracking-wider font-semibold">Total Roles</div>
<div class="flex items-baseline gap-2 mt-1">
<span class="text-headline-lg font-headline-lg font-bold text-primary">8</span>
<span class="text-label-xs font-label-xs text-on-surface-variant">7 Active · 1 Depr</span>
</div>
</div>
<!-- KPI 2 -->
<div class="bg-surface-container-lowest p-3 rounded border border-outline-variant">
<div class="text-label-xs font-label-xs text-outline uppercase tracking-wider font-semibold">Custom Roles</div>
<div class="flex items-baseline gap-2 mt-1">
<span class="text-headline-lg font-headline-lg font-bold text-primary">3</span>
<span class="text-label-xs font-label-xs text-secondary font-semibold">Locally Scoped</span>
</div>
</div>
<!-- KPI 3 -->
<div class="bg-surface-container-lowest p-3 rounded border border-outline-variant">
<div class="text-label-xs font-label-xs text-outline uppercase tracking-wider font-semibold">Users Assigned</div>
<div class="flex items-baseline gap-2 mt-1">
<span class="text-headline-lg font-headline-lg font-bold text-primary">186</span>
<span class="text-label-xs font-label-xs text-outline">Across 4 Corps</span>
</div>
</div>
<!-- KPI 4 -->
<div class="bg-surface-container-lowest p-3 rounded border border-outline-variant">
<div class="text-label-xs font-label-xs text-outline uppercase tracking-wider font-semibold">Privileged Users</div>
<div class="flex items-baseline gap-2 mt-1">
<span class="text-headline-lg font-headline-lg font-bold text-primary">12</span>
<span class="text-label-xs font-label-xs text-on-surface-variant font-semibold">Root &amp; Admins</span>
</div>
</div>
<!-- KPI 5 -->
<div class="bg-surface-container-lowest p-3 rounded border border-outline-variant">
<div class="text-label-xs font-label-xs text-outline uppercase tracking-wider font-semibold">Permission Changes</div>
<div class="flex items-baseline gap-2 mt-1">
<span class="text-headline-lg font-headline-lg font-bold text-primary">6</span>
<span class="text-label-xs font-label-xs text-outline">Last 48 Hours</span>
</div>
</div>
<!-- KPI 6 -->
<div class="bg-surface-container-lowest p-3 rounded border border-outline-variant">
<div class="text-label-xs font-label-xs text-outline uppercase tracking-wider font-semibold">Least-Privilege Hygiene</div>
<div class="flex items-baseline gap-2 mt-1">
<span class="text-headline-lg font-headline-lg font-bold text-secondary">94.2%</span>
<span class="text-label-xs font-label-xs text-secondary font-semibold">Nominal</span>
</div>
</div>
</section>
<!-- Conflict / Hygiene Alert Strip -->
<div class="bg-surface-container-lowest p-2.5 px-4 rounded border-l-4 border-l-secondary border border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-3 text-body-sm font-body-sm">
<span class="material-symbols-outlined text-secondary fill-icon">shield_lock</span>
<span>
<strong class="text-primary font-bold">Role Hygiene Notice:</strong> 2 roles possess dormant export privileges over 90 days. 1 scope boundary overlap identified at Forward Post Alpha (LOC-0042).
          </span>
</div>
<div class="flex items-center gap-2">
<button class="text-label-xs font-label-xs uppercase px-2.5 py-1 bg-surface-container-high hover:bg-surface-container text-primary rounded font-semibold border border-outline-variant">
            Review Scope Conflicts
          </button>
<button class="text-label-xs font-label-xs text-outline hover:text-primary">
            Dismiss
          </button>
</div>
</div>
<!-- ==================== MAIN SPLIT WORKSPACE: 35% ROLES LIST vs 65% ROLE DEEP DIVE ==================== -->
<div class="grid grid-cols-12 gap-5 items-start">
<!-- ==================== 3. ROLE DIRECTORY (LEFT PANEL ~35%) ==================== -->
<section class="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded border border-outline-variant flex flex-col">
<!-- Filter pills & toolbar -->
<div class="p-3 border-b border-outline-variant space-y-2.5">
<div class="flex items-center justify-between">
<span class="text-headline-sm font-headline-sm text-primary font-bold">Role Directory</span>
<span class="text-label-xs font-label-xs text-outline">8 DEFINED ROLES</span>
</div>
<!-- Quick Filter Pills -->
<div class="flex flex-wrap gap-1.5">
<button class="px-2 py-0.5 text-label-xs font-label-xs rounded bg-primary-container text-surface-bright font-bold">All (8)</button>
<button class="px-2 py-0.5 text-label-xs font-label-xs rounded bg-surface-container-high text-on-surface-variant hover:bg-surface-container">System (1)</button>
<button class="px-2 py-0.5 text-label-xs font-label-xs rounded bg-surface-container-high text-on-surface-variant hover:bg-surface-container">Operational (4)</button>
<button class="px-2 py-0.5 text-label-xs font-label-xs rounded bg-surface-container-high text-on-surface-variant hover:bg-surface-container">Analytical (1)</button>
<button class="px-2 py-0.5 text-label-xs font-label-xs rounded bg-surface-container-high text-on-surface-variant hover:bg-surface-container">Custom (3)</button>
</div>
</div>
<!-- Role Table / List -->
<div class="divide-y divide-outline-variant text-body-sm font-body-sm overflow-hidden">
<!-- Item 1: System Administrator -->
<div class="p-3 hover:bg-surface-container-low transition-colors cursor-pointer flex flex-col space-y-1">
<div class="flex items-center justify-between">
<span class="font-bold text-primary flex items-center gap-1.5">
<span class="material-symbols-outlined text-sm text-outline">admin_panel_settings</span>
                  System Administrator
                </span>
<span class="text-label-xs font-label-xs px-1.5 py-0.5 bg-surface-container-high rounded text-on-surface-variant font-semibold">System</span>
</div>
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span>4 Users · Full Global Scope</span>
<span class="text-outline">Active · 2d ago</span>
</div>
</div>
<!-- Item 2: Logistics Officer (ACTIVE SELECTED) -->
<div class="p-3 bg-secondary-container/40 border-l-4 border-secondary transition-colors cursor-pointer flex flex-col space-y-1">
<div class="flex items-center justify-between">
<span class="font-bold text-primary flex items-center gap-1.5">
<span class="material-symbols-outlined text-sm text-secondary fill-icon">military_tech</span>
                  Logistics Officer
                  <span class="text-label-xs font-label-xs text-outline font-normal">ROLE-002</span>
</span>
<span class="text-label-xs font-label-xs px-1.5 py-0.5 bg-secondary-container text-on-secondary-container rounded font-bold">ACTIVE</span>
</div>
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span class="font-semibold text-primary">48 Users · Assigned Network Scope</span>
<span class="text-secondary font-semibold">Selected</span>
</div>
</div>
<!-- Item 3: Procurement Officer -->
<div class="p-3 hover:bg-surface-container-low transition-colors cursor-pointer flex flex-col space-y-1">
<div class="flex items-center justify-between">
<span class="font-bold text-primary flex items-center gap-1.5">
<span class="material-symbols-outlined text-sm text-outline">shopping_cart_checkout</span>
                  Procurement Officer
                </span>
<span class="text-label-xs font-label-xs px-1.5 py-0.5 bg-surface-container-high rounded text-on-surface-variant font-semibold">Built-in</span>
</div>
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span>32 Users · Assigned Locations Scope</span>
<span class="text-outline">Active · 8d ago</span>
</div>
</div>
<!-- Item 4: Fleet Manager -->
<div class="p-3 hover:bg-surface-container-low transition-colors cursor-pointer flex flex-col space-y-1">
<div class="flex items-center justify-between">
<span class="font-bold text-primary flex items-center gap-1.5">
<span class="material-symbols-outlined text-sm text-outline">local_shipping</span>
                  Fleet Manager
                </span>
<span class="text-label-xs font-label-xs px-1.5 py-0.5 bg-surface-container-high rounded text-on-surface-variant font-semibold">Built-in</span>
</div>
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span>18 Users · Transport Network Scope</span>
<span class="text-outline">Active · 11d ago</span>
</div>
</div>
<!-- Item 5: Intelligence & Risk Analyst -->
<div class="p-3 hover:bg-surface-container-low transition-colors cursor-pointer flex flex-col space-y-1">
<div class="flex items-center justify-between">
<span class="font-bold text-primary flex items-center gap-1.5">
<span class="material-symbols-outlined text-sm text-outline">analytics</span>
                  Intelligence &amp; Risk Analyst
                </span>
<span class="text-label-xs font-label-xs px-1.5 py-0.5 bg-surface-container-high rounded text-on-surface-variant font-semibold">Analytical</span>
</div>
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span>51 Users · Read/Analyze Network</span>
<span class="text-outline">Active · 15d ago</span>
</div>
</div>
<!-- Item 6: Operational Viewer -->
<div class="p-3 hover:bg-surface-container-low transition-colors cursor-pointer flex flex-col space-y-1">
<div class="flex items-center justify-between">
<span class="font-bold text-primary flex items-center gap-1.5">
<span class="material-symbols-outlined text-sm text-outline">visibility</span>
                  Operational Viewer
                </span>
<span class="text-label-xs font-label-xs px-1.5 py-0.5 bg-surface-container-high rounded text-on-surface-variant font-semibold">Read-Only</span>
</div>
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span>33 Users · Read-Only Scope</span>
<span class="text-outline">Active · 20d ago</span>
</div>
</div>
<!-- Item 7: Forward Depot Custodian (Custom) -->
<div class="p-3 hover:bg-surface-container-low transition-colors cursor-pointer flex flex-col space-y-1">
<div class="flex items-center justify-between">
<span class="font-bold text-primary flex items-center gap-1.5">
<span class="material-symbols-outlined text-sm text-secondary">inventory_2</span>
                  Forward Depot Custodian
                </span>
<span class="text-label-xs font-label-xs px-1.5 py-0.5 bg-surface-container-high text-primary rounded font-bold">Custom</span>
</div>
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span>14 Users · Local Depot Scope</span>
<span class="text-outline">Active · 3d ago</span>
</div>
</div>
<!-- Item 8: Sortie Commander (Custom) -->
<div class="p-3 hover:bg-surface-container-low transition-colors cursor-pointer flex flex-col space-y-1">
<div class="flex items-center justify-between">
<span class="font-bold text-primary flex items-center gap-1.5">
<span class="material-symbols-outlined text-sm text-secondary">alt_route</span>
                  Sortie Commander
                </span>
<span class="text-label-xs font-label-xs px-1.5 py-0.5 bg-surface-container-high text-primary rounded font-bold">Custom</span>
</div>
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span>8 Users · Convoy Corridor Scope</span>
<span class="text-outline">Active · 6d ago</span>
</div>
</div>
</div>
<div class="p-2.5 bg-surface-container-high/60 border-t border-outline-variant text-center">
<span class="text-label-xs font-label-xs text-outline font-semibold">ROLE REGISTRY V4.2 · DISA-STIG COMPLIANT</span>
</div>
</section>
<!-- ==================== 4. ACTIVE ROLE DEEP-DIVE (RIGHT WORKSPACE ~65%) ==================== -->
<div class="col-span-12 lg:col-span-8 space-y-5">
<!-- Role Header & Metadata -->
<div class="bg-surface-container-lowest rounded border border-outline-variant p-5 space-y-4">
<div class="flex flex-col md:flex-row md:items-center justify-between gap-3">
<div>
<div class="flex items-center gap-2">
<h2 class="text-headline-lg font-headline-lg font-bold text-primary">Logistics Officer</h2>
<span class="text-label-md font-label-md px-2 py-0.5 bg-surface-container text-on-surface-variant rounded border border-outline-variant font-mono">ROLE-002</span>
<span class="text-label-xs font-label-xs px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded font-bold">BUILT-IN ROLE</span>
<span class="text-label-xs font-label-xs px-2 py-0.5 bg-surface-container text-secondary rounded font-bold border border-secondary">ACTIVE</span>
</div>
<p class="text-body-sm font-body-sm text-on-surface-variant mt-1 max-w-2xl">
                  Full operational authorization for logistics planning, replenishment approval, inventory transactions, transport allocation, route coordination, and simulation mitigation execution across assigned tactical theater.
                </p>
</div>
<!-- Quick action buttons -->
<div class="flex items-center gap-2 shrink-0">
<button class="px-2.5 py-1.5 bg-surface-container hover:bg-surface-container-high text-primary rounded text-label-sm font-label-sm font-semibold border border-outline-variant">
                  Edit Configuration
                </button>
<button class="px-2.5 py-1.5 bg-surface-container hover:bg-surface-container-high text-primary rounded text-label-sm font-label-sm font-semibold border border-outline-variant">
                  Duplicate
                </button>
<button class="px-2.5 py-1.5 bg-primary-container text-surface-bright rounded text-label-sm font-label-sm font-semibold hover:bg-secondary border border-outline">
                  View 48 Users
                </button>
</div>
</div>
<!-- Inheritance chain & stats -->
<div class="flex flex-wrap items-center gap-3 pt-3 border-t border-outline-variant text-label-xs font-label-xs">
<span class="flex items-center gap-1.5 text-on-surface-variant">
<span class="material-symbols-outlined text-sm text-secondary">account_tree</span>
<strong class="text-primary font-bold">Inheritance Chain:</strong>
                Base Operational Staff (34 permissions)
              </span>
<span class="text-outline">→</span>
<span class="px-2 py-0.5 bg-surface-container rounded text-primary font-semibold border border-outline-variant">
                + Direct Elev: 14 perms (Replenishment Approval, Sortie Dispatch Override)
              </span>
<span class="ml-auto text-outline font-semibold">Security Level: L3 Operational Authority</span>
</div>
</div>
<!-- ==================== 5. CORE PERMISSION MATRIX ==================== -->
<div class="bg-surface-container-lowest rounded border border-outline-variant overflow-hidden">
<div class="p-4 border-b border-outline-variant flex items-center justify-between bg-surface-container/30">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary">table_chart</span>
<h3 class="text-headline-sm font-headline-sm font-bold text-primary">Module Permission Matrix</h3>
<span class="text-label-xs font-label-xs text-outline px-2 py-0.5 bg-surface-container-high rounded font-bold">12 MODULES · 6 ACTIONS</span>
</div>
<div class="flex items-center gap-4 text-label-xs font-label-xs text-on-surface-variant">
<span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-secondary"></span> Authorized (✓)</span>
<span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-outline-variant"></span> Denied (—)</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-xs text-secondary">lock</span> Dual-Auth Privileged</span>
</div>
</div>
<!-- Matrix Table -->
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse text-body-sm font-body-sm">
<thead>
<tr class="bg-surface-container-high text-label-xs font-label-xs text-primary font-bold uppercase tracking-wider border-b border-secondary">
<th class="py-2.5 px-3">Logistics Subsystem Module</th>
<th class="py-2.5 px-2 text-center w-20">View</th>
<th class="py-2.5 px-2 text-center w-20">Create</th>
<th class="py-2.5 px-2 text-center w-20">Edit</th>
<th class="py-2.5 px-2 text-center w-20">Delete</th>
<th class="py-2.5 px-2 text-center w-28 bg-surface-container-highest/70 border-x border-outline-variant">Approve (Crit)</th>
<th class="py-2.5 px-2 text-center w-20">Export</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant font-mono text-body-sm">
<!-- Row 1: Dashboard -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2 px-3 font-sans font-medium text-primary">Command Dashboard (RL-01)</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-outline-variant">—</td>
<td class="py-2 px-2 text-center text-outline-variant">—</td>
<td class="py-2 px-2 text-center text-outline-variant">—</td>
<td class="py-2 px-2 text-center text-outline-variant bg-surface-container-highest/20 border-x border-outline-variant">—</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
</tr>
<!-- Row 2: GIS Command Center -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2 px-3 font-sans font-medium text-primary">GIS Command Center (RL-04)</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-outline-variant">—</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓ <span class="font-sans text-[10px] text-outline block">Waypoints</span></td>
<td class="py-2 px-2 text-center text-outline-variant">—</td>
<td class="py-2 px-2 text-center text-outline-variant bg-surface-container-highest/20 border-x border-outline-variant">—</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
</tr>
<!-- Row 3: Locations -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2 px-3 font-sans font-medium text-primary">Locations &amp; Nodes (RL-08/10)</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-outline-variant">—</td>
<td class="py-2 px-2 text-center text-outline-variant bg-surface-container-highest/20 border-x border-outline-variant">—</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
</tr>
<!-- Row 4: Depot Inventory -->
<tr class="hover:bg-surface-container-low transition-colors bg-secondary-container/10">
<td class="py-2 px-3 font-sans font-semibold text-primary">Depot Inventory (RL-11/14)</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓ <span class="font-sans text-[10px] text-outline block">Trans</span></td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-outline-variant">—</td>
<td class="py-2 px-2 text-center text-secondary font-bold bg-secondary-container/30 border-x border-outline-variant font-sans">
<span class="inline-flex items-center gap-1 px-1.5 py-0.5 bg-surface-container-lowest rounded text-primary text-label-xs font-label-xs border border-outline-variant">
<span class="material-symbols-outlined text-[12px] text-secondary">lock</span> Approve
                      </span>
</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
</tr>
<!-- Row 5: Demand Forecasting -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2 px-3 font-sans font-medium text-primary">Demand Forecasting (RL-18/20)</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓ <span class="font-sans text-[10px] text-outline block">Models</span></td>
<td class="py-2 px-2 text-center text-outline-variant">—</td>
<td class="py-2 px-2 text-center text-outline-variant">—</td>
<td class="py-2 px-2 text-center text-outline-variant bg-surface-container-highest/20 border-x border-outline-variant">—</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
</tr>
<!-- Row 6: Fleet & Vehicles -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2 px-3 font-sans font-medium text-primary">Fleet &amp; Vehicles (RL-22/24)</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-outline-variant">—</td>
<td class="py-2 px-2 text-center text-secondary font-bold bg-surface-container-highest/20 border-x border-outline-variant font-sans">
<span class="inline-flex items-center gap-1 px-1 py-0.5 bg-surface-container-lowest rounded text-primary text-label-xs font-label-xs">
<span class="material-symbols-outlined text-[12px] text-secondary">lock</span> Allocation
                      </span>
</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
</tr>
<!-- Row 7: Shipments & Convoys -->
<tr class="hover:bg-surface-container-low transition-colors bg-secondary-container/10">
<td class="py-2 px-3 font-sans font-semibold text-primary">Shipments &amp; Convoys (RL-24/25)</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓ <span class="font-sans text-[10px] text-outline block">Sortie</span></td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-outline-variant">—</td>
<td class="py-2 px-2 text-center text-secondary font-bold bg-secondary-container/30 border-x border-outline-variant font-sans">
<span class="inline-flex items-center gap-1 px-1.5 py-0.5 bg-surface-container-lowest rounded text-primary text-label-xs font-label-xs border border-outline-variant">
<span class="material-symbols-outlined text-[12px] text-secondary">lock</span> Dispatch
                      </span>
</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
</tr>
<!-- Row 8: Route Intelligence -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2 px-3 font-sans font-medium text-primary">Route Intelligence (RL-26/28)</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-outline-variant">—</td>
<td class="py-2 px-2 text-center text-secondary font-bold bg-surface-container-highest/20 border-x border-outline-variant font-sans">
<span class="inline-flex items-center gap-1 px-1 py-0.5 bg-surface-container-lowest rounded text-primary text-label-xs font-label-xs">
<span class="material-symbols-outlined text-[12px] text-secondary">lock</span> Clearance
                      </span>
</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
</tr>
<!-- Row 9: Threat Radar -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2 px-3 font-sans font-medium text-primary">Risk &amp; Threat Radar (RL-29/30)</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-outline-variant">—</td>
<td class="py-2 px-2 text-center text-secondary font-bold bg-surface-container-highest/20 border-x border-outline-variant font-sans">
<span class="inline-flex items-center gap-1 px-1 py-0.5 bg-surface-container-lowest rounded text-primary text-label-xs font-label-xs">
<span class="material-symbols-outlined text-[12px] text-secondary">lock</span> Mitigation
                      </span>
</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
</tr>
<!-- Row 10: Simulation Center -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2 px-3 font-sans font-medium text-primary">Simulation Center (RL-31/34)</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓ <span class="font-sans text-[10px] text-outline block">Scenario</span></td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-outline-variant">—</td>
<td class="py-2 px-2 text-center text-secondary font-bold bg-surface-container-highest/20 border-x border-outline-variant font-sans">
<span class="inline-flex items-center gap-1 px-1 py-0.5 bg-surface-container-lowest rounded text-primary text-label-xs font-label-xs">
<span class="material-symbols-outlined text-[12px] text-secondary">lock</span> Sortie Gate
                      </span>
</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
</tr>
<!-- Row 11: AI Recommendations -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-2 px-3 font-sans font-medium text-primary">AI Recommendations (RL-35/36)</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
<td class="py-2 px-2 text-center text-outline-variant">—</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓ <span class="font-sans text-[10px] text-outline block">Override</span></td>
<td class="py-2 px-2 text-center text-outline-variant">—</td>
<td class="py-2 px-2 text-center text-secondary font-bold bg-surface-container-highest/20 border-x border-outline-variant font-sans">
<span class="inline-flex items-center gap-1 px-1 py-0.5 bg-surface-container-lowest rounded text-primary text-label-xs font-label-xs">
<span class="material-symbols-outlined text-[12px] text-secondary">lock</span> Sign-off
                      </span>
</td>
<td class="py-2 px-2 text-center text-secondary font-bold font-sans">✓</td>
</tr>
<!-- Row 12: User & System Admin (RESTRICTED) -->
<tr class="hover:bg-surface-container-low transition-colors bg-surface-container-highest/30">
<td class="py-2 px-3 font-sans font-medium text-on-surface-variant flex items-center justify-between">
<span>User &amp; System Admin (RL-37/40)</span>
<span class="text-label-xs font-label-xs px-1.5 py-0.2 bg-error-container text-on-error-container rounded">RESTRICTED</span>
</td>
<td class="py-2 px-2 text-center text-outline">—</td>
<td class="py-2 px-2 text-center text-outline">—</td>
<td class="py-2 px-2 text-center text-outline">—</td>
<td class="py-2 px-2 text-center text-outline">—</td>
<td class="py-2 px-2 text-center text-outline bg-surface-container-highest/40 border-x border-outline-variant">—</td>
<td class="py-2 px-2 text-center text-outline">—</td>
</tr>
</tbody>
</table>
</div>
<!-- Footer Note -->
<div class="p-2.5 px-4 bg-surface-container text-label-xs font-label-xs text-on-surface-variant flex items-center justify-between">
<span>* Privileged operations (Approve) require Dual-Officer 2FA or cryptographic passkey validation.</span>
<button class="text-primary font-bold hover:underline">Batch Modify Matrix</button>
</div>
</div>
<!-- ==================== 6. OPERATIONAL SCOPE MODELING SECTION ==================== -->
<div class="bg-surface-container-lowest rounded border border-outline-variant p-4 space-y-3">
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">my_location</span>
<h3 class="text-headline-sm font-headline-sm font-bold text-primary">Operational Scope Modeling (Where)</h3>
<span class="text-label-xs font-label-xs text-secondary px-2 py-0.5 bg-secondary-container rounded font-bold">NETWORK BOUND</span>
</div>
<span class="text-label-xs font-label-xs text-outline font-mono">SCOPE_ID: SCOPE-LEH-IVB</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
<!-- Boundary 1 -->
<div class="p-3 bg-surface-container-low rounded border border-outline-variant space-y-1.5">
<div class="text-label-xs font-label-xs uppercase font-bold text-outline">Assigned Command Sector</div>
<div class="text-label-md font-label-md font-bold text-primary">Northern Logistics Command</div>
<div class="text-body-sm font-body-sm text-on-surface-variant">Sector IV-B Leh Tactical Theater</div>
<div class="pt-1 text-label-xs font-label-xs text-secondary font-semibold">Strict Geographic Fence Active</div>
</div>
<!-- Boundary 2 -->
<div class="p-3 bg-surface-container-low rounded border border-outline-variant space-y-1.5">
<div class="text-label-xs font-label-xs uppercase font-bold text-outline">Authorized Logistics Nodes (14)</div>
<div class="flex flex-wrap gap-1">
<span class="px-1.5 py-0.5 bg-surface-container-lowest rounded text-label-xs font-label-xs border border-outline-variant text-primary font-semibold">Forward Post Alpha</span>
<span class="px-1.5 py-0.5 bg-surface-container-lowest rounded text-label-xs font-label-xs border border-outline-variant text-primary font-semibold">Bodhkharbu Depot</span>
<span class="px-1.5 py-0.5 bg-surface-container-lowest rounded text-label-xs font-label-xs border border-outline-variant text-primary font-semibold">Khangral CP</span>
<span class="px-1.5 py-0.5 bg-surface-container-lowest rounded text-label-xs font-label-xs border border-outline-variant text-primary font-semibold">Leh Central HQ</span>
<span class="px-1.5 py-0.5 bg-surface-container-lowest rounded text-label-xs font-label-xs border border-outline-variant text-primary font-semibold">Dras Transit</span>
</div>
<div class="text-label-xs font-label-xs text-outline">Excluded: Western &amp; Eastern Command Depots</div>
</div>
<!-- Boundary 3 -->
<div class="p-3 bg-surface-container-low rounded border border-outline-variant space-y-1.5">
<div class="text-label-xs font-label-xs uppercase font-bold text-outline">Permitted Route Corridors</div>
<div class="text-body-sm font-body-sm text-primary font-semibold">Route RTE-018 &amp; Route RTE-021</div>
<div class="text-label-xs font-label-xs text-on-surface-variant">Fleet Attachments: 14th Corps Column, Div-04 Bowser Pool</div>
<div class="pt-1 text-label-xs font-label-xs text-on-error-container font-semibold">Excluded: NH-1A Southern Sector</div>
</div>
</div>
</div>
<!-- ==================== 7. INTERACTIVE EFFECTIVE ACCESS SIMULATOR ==================== -->
<div class="bg-surface-container-lowest rounded border border-outline-variant p-4 space-y-3">
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary">play_circle</span>
<h3 class="text-headline-sm font-headline-sm font-bold text-primary">Effective Access Simulator (Sandbox Test)</h3>
</div>
<span class="text-label-xs font-label-xs text-secondary font-bold">REAL-TIME DETERMINISTIC ENGINE</span>
</div>
<!-- Input simulator controls -->
<div class="flex flex-col sm:flex-row items-center gap-3 bg-surface-container-low p-2.5 rounded border border-outline-variant">
<div class="flex-1 w-full flex items-center gap-2">
<span class="text-label-xs font-label-xs font-bold text-outline uppercase tracking-wider shrink-0">Test Subject:</span>
<div class="relative flex-1">
<select class="w-full bg-surface-container-lowest text-body-sm font-body-sm rounded border border-outline-variant py-1.5 px-2.5 text-primary font-semibold focus:outline-none">
<option selected="">Maj. Arjun Mehta [USR-0148] (Logistics Officer)</option>
<option>Capt. S. Raghavan [USR-0204] (Fleet Manager)</option>
<option>Lt. P. Nair [USR-0312] (Forward Custodian)</option>
</select>
</div>
</div>
<button class="w-full sm:w-auto px-3 py-1.5 bg-primary-container text-surface-bright rounded text-label-md font-label-md font-semibold hover:bg-secondary border border-outline flex items-center justify-center gap-1.5">
<span class="material-symbols-outlined text-sm">run_circle</span>
                Evaluate Access Matrix
              </button>
</div>
<!-- Live test outcomes -->
<div class="space-y-2">
<!-- Query 1 -->
<div class="p-2.5 bg-surface-container-lowest rounded border border-outline-variant flex items-start gap-3">
<span class="text-secondary font-bold text-label-md">✓</span>
<div class="flex-1 text-body-sm font-body-sm">
<div class="text-primary font-semibold">Can Maj. Arjun Mehta Approve +2,500 L Fuel Replenishment at Forward Post Alpha (LOC-0042)?</div>
<div class="text-label-xs font-label-xs text-secondary font-bold mt-0.5">
                    AUTHORIZED ✓ — Role 'Logistics Officer' possesses Approve Replenishment privilege AND Node LOC-0042 sits within Sector IV-B Leh scope.
                  </div>
</div>
<span class="text-label-xs font-label-xs px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded font-bold">200 OK</span>
</div>
<!-- Query 2 -->
<div class="p-2.5 bg-surface-container-lowest rounded border border-outline-variant flex items-start gap-3">
<span class="text-error font-bold text-label-md">✕</span>
<div class="flex-1 text-body-sm font-body-sm">
<div class="text-primary font-semibold">Can Maj. Arjun Mehta Modify User Clearance or System Roles?</div>
<div class="text-label-xs font-label-xs text-error font-bold mt-0.5">
                    DENIED ✕ — Module RL-37/40 is strictly restricted to System Administrator.
                  </div>
</div>
<span class="text-label-xs font-label-xs px-2 py-0.5 bg-error-container text-on-error-container rounded font-bold">403 FORBIDDEN</span>
</div>
<!-- Query 3 -->
<div class="p-2.5 bg-surface-container-lowest rounded border border-outline-variant flex items-start gap-3">
<span class="text-error font-bold text-label-md">✕</span>
<div class="flex-1 text-body-sm font-body-sm">
<div class="text-primary font-semibold">Can Maj. Arjun Mehta Dispatch Convoy Sortie in Western Command Sector?</div>
<div class="text-label-xs font-label-xs text-error font-bold mt-0.5">
                    DENIED ✕ — User possesses Sortie Dispatch privilege, but target corridor falls OUTSIDE Sector IV-B Leh scope fence.
                  </div>
</div>
<span class="text-label-xs font-label-xs px-2 py-0.5 bg-error-container text-on-error-container rounded font-bold">SCOPE EXCLUDED</span>
</div>
</div>
</div>
<!-- ==================== 8 & 9. LEAST-PRIVILEGE HYGIENE & AUDIT LEDGER ==================== -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- Least-Privilege Hygiene Card -->
<div class="bg-surface-container-lowest rounded border border-outline-variant p-4 space-y-3">
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<span class="text-headline-sm font-headline-sm font-bold text-primary flex items-center gap-1.5">
<span class="material-symbols-outlined text-secondary">balance</span>
                  Least-Privilege Hygiene
                </span>
<span class="text-label-xs font-label-xs px-1.5 py-0.5 bg-surface-container rounded text-primary font-bold">MODERATE RISK</span>
</div>
<div class="p-2.5 bg-surface-container-low rounded border border-outline-variant text-body-sm font-body-sm space-y-1">
<div class="font-bold text-primary">Unused Privilege Detected</div>
<p class="text-on-surface-variant text-label-xs font-label-xs">
                  'Export Fleet Telemetry' has not been exercised by any of the 48 assigned officers in the preceding 90 days.
                </p>
<div class="pt-1.5 flex items-center justify-between">
<button class="text-label-xs font-label-xs text-secondary font-bold hover:underline">
                    Reduce Privilege
                  </button>
<span class="text-label-xs font-label-xs text-outline">Confidence: 99.4%</span>
</div>
</div>
<div class="flex justify-between items-center text-label-xs font-label-xs text-on-surface-variant pt-1">
<span>Role Entropy Score: 0.18 (Low)</span>
<span class="text-secondary font-bold">Safe for Operations</span>
</div>
</div>
<!-- Immutable Audit Trail Card -->
<div class="bg-surface-container-lowest rounded border border-outline-variant p-4 space-y-3">
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<span class="text-headline-sm font-headline-sm font-bold text-primary flex items-center gap-1.5">
<span class="material-symbols-outlined text-primary">history_edu</span>
                  Role Change Ledger
                </span>
<span class="text-label-xs font-label-xs text-outline font-mono">APPEND-ONLY</span>
</div>
<div class="space-y-2 text-body-sm font-body-sm">
<div class="p-2 bg-surface-container-low rounded border border-outline-variant text-label-xs font-label-xs space-y-1">
<div class="flex justify-between text-outline">
<span class="font-mono">TODAY 14:42 IST</span>
<span class="text-secondary font-bold">USR-0034</span>
</div>
<div class="font-medium text-primary">
                    Maj. V. Rathore (Admin) elevated: Added <span class="font-bold">Approve Route Clearance</span> to ROLE-002.
                  </div>
<div class="text-outline">Reason: SOP Update 44-B // Impacted 48 active accounts.</div>
</div>
<div class="p-2 bg-surface-container-low rounded border border-outline-variant text-label-xs font-label-xs space-y-1">
<div class="flex justify-between text-outline">
<span class="font-mono">18 OCT 09:15 IST</span>
<span class="text-secondary font-bold">USR-0002</span>
</div>
<div class="font-medium text-primary">
                    Depot boundary added: Bodhkharbu Depot (DEP-0002) mapped to Sector IV-B scope.
                  </div>
</div>
</div>
<div class="text-center pt-1">
<a class="text-label-xs font-label-xs text-primary font-bold hover:underline" href="#">View Complete Hash-Chained Trail (RL-39) →</a>
</div>
</div>
</div>
</div>
</div>
</main>`;
