// Screen: RL-39 — Audit Trail & Immutable Activity Log
// Route: /admin/audit
export const rl39Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto md: flex-1 px-margin-desktop py-space-md space-y-space-md">
<!-- 1. EXECUTIVE AUDIT METRIC STRIP (7 KPI BLOCKS) -->
<section aria-label="Audit Telemetry Overview" class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-space-sm">
<!-- KPI 1: Events Today -->
<div class="bg-surface-container-lowest p-3 border border-outline-variant rounded flex flex-col justify-between">
<div class="text-label-xs font-label-xs text-outline uppercase">Events Today</div>
<div class="mt-1 flex items-baseline justify-between">
<div class="text-headline-sm font-headline-sm font-bold text-primary font-tech">2,846</div>
<span class="text-label-xs font-label-xs text-secondary font-semibold font-tech">▲ +14%</span>
</div>
<div class="text-label-xs font-label-xs text-on-surface-variant truncate mt-1">vs 7d avg baseline</div>
</div>
<!-- KPI 2: Operational Events -->
<div class="bg-surface-container-lowest p-3 border border-outline-variant rounded flex flex-col justify-between">
<div class="text-label-xs font-label-xs text-outline uppercase">Operational</div>
<div class="mt-1 flex items-baseline justify-between">
<div class="text-headline-sm font-headline-sm font-bold text-primary font-tech">2,431</div>
<span class="text-label-xs font-label-xs text-on-surface-variant font-tech">85.4%</span>
</div>
<div class="text-label-xs font-label-xs text-on-surface-variant truncate mt-1">Logistics &amp; Convoy Flow</div>
</div>
<!-- KPI 3: Administrative Events -->
<div class="bg-surface-container-lowest p-3 border border-outline-variant rounded flex flex-col justify-between">
<div class="text-label-xs font-label-xs text-outline uppercase">Administrative</div>
<div class="mt-1 flex items-baseline justify-between">
<div class="text-headline-sm font-headline-sm font-bold text-primary font-tech">186</div>
<span class="text-label-xs font-label-xs text-outline font-tech">6.5%</span>
</div>
<div class="text-label-xs font-label-xs text-on-surface-variant truncate mt-1">User &amp; Role Configs</div>
</div>
<!-- KPI 4: Security Events -->
<div class="bg-surface-container-lowest p-3 border border-outline-variant rounded flex flex-col justify-between">
<div class="text-label-xs font-label-xs text-outline uppercase">Security Events</div>
<div class="mt-1 flex items-baseline justify-between">
<div class="text-headline-sm font-headline-sm font-bold text-primary font-tech">229</div>
<span class="text-label-xs font-label-xs text-outline font-tech">8.0%</span>
</div>
<div class="text-label-xs font-label-xs text-on-surface-variant truncate mt-1">MFA, Session, Scope Gate</div>
</div>
<!-- KPI 5: Failed Actions -->
<div class="bg-surface-container-lowest p-3 border border-outline-variant rounded flex flex-col justify-between">
<div class="text-label-xs font-label-xs text-error uppercase font-semibold">Failed Actions</div>
<div class="mt-1 flex items-baseline justify-between">
<div class="text-headline-sm font-headline-sm font-bold text-error font-tech">17</div>
<span class="text-label-xs font-label-xs bg-error-container text-on-error-container px-1 py-0.2 rounded font-tech">ALERT</span>
</div>
<div class="text-label-xs font-label-xs text-error font-medium truncate mt-1">Requires Review</div>
</div>
<!-- KPI 6: Critical Events -->
<div class="bg-surface-container-lowest p-3 border border-outline-variant rounded flex flex-col justify-between">
<div class="text-label-xs font-label-xs text-outline uppercase">Critical Events</div>
<div class="mt-1 flex items-baseline justify-between">
<div class="text-headline-sm font-headline-sm font-bold text-primary font-tech">4</div>
<span class="text-label-xs font-label-xs text-outline font-tech">L4 Gate</span>
</div>
<div class="text-label-xs font-label-xs text-on-surface-variant truncate mt-1">Privileged Overrides</div>
</div>
<!-- KPI 7: Active Investigations -->
<div class="bg-surface-container-lowest p-3 border-l-4 border-l-secondary border border-outline-variant rounded flex flex-col justify-between">
<div class="text-label-xs font-label-xs text-secondary uppercase font-bold">Investigations</div>
<div class="mt-1 flex items-baseline justify-between">
<div class="text-headline-sm font-headline-sm font-bold text-secondary font-tech">2</div>
<span class="text-label-xs font-label-xs bg-secondary-container text-on-secondary-container px-1 py-0.2 rounded font-tech">OPEN</span>
</div>
<div class="text-label-xs font-label-xs text-on-surface-variant truncate mt-1 font-tech">Dossier #INV-09</div>
</div>
</section>
<!-- 2. SEARCH & FILTER TOOLBAR -->
<section class="bg-surface-container-lowest border border-outline-variant rounded p-space-sm space-y-space-sm">
<!-- Search Input & Quick Controls -->
<div class="flex flex-col md:flex-row gap-space-sm items-center justify-between">
<div class="relative w-full md:w-2/3">
<span class="material-symbols-outlined absolute left-3 top-2.5 text-outline text-sm" data-icon="search">search</span>
<input class="w-full pl-9 pr-4 py-2 bg-surface text-on-surface border border-outline-variant rounded text-body-sm font-tech placeholder:text-outline focus:border-primary focus:ring-0 transition-colors" placeholder="Search Event ID (EVT-...), User (USR-...), Object (REC-, SHP-, VH-, LOC-, ROLE-), IP, or Hash..." type="text"/>
</div>
<div class="flex items-center gap-space-sm w-full md:w-auto justify-end text-label-xs font-label-xs">
<div class="flex items-center gap-1.5 text-on-surface-variant px-2 py-1 bg-surface-container rounded border border-outline-variant font-tech">
<span class="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
<span>Stream: 1.2s</span>
</div>
<button class="px-2.5 py-1.5 bg-surface border border-outline-variant text-on-surface rounded hover:bg-surface-container">
            Density: Compact
          </button>
<button class="px-2.5 py-1.5 bg-surface border border-outline-variant text-outline rounded cursor-not-allowed">
            Investigate Selected (0)
          </button>
</div>
</div>
<!-- Domain Tabs -->
<div class="flex items-center gap-1 overflow-x-auto border-b border-outline-variant pb-1 font-label-xs text-label-xs">
<button class="px-3 py-1.5 border-b-2 border-secondary font-bold text-primary whitespace-nowrap bg-secondary-container text-on-secondary-container rounded-t">
          All Events (2,846)
        </button>
<button class="px-3 py-1.5 text-on-surface-variant hover:text-primary whitespace-nowrap">
          Authentication (412)
        </button>
<button class="px-3 py-1.5 text-on-surface-variant hover:text-primary whitespace-nowrap">
          Users &amp; Roles (186)
        </button>
<button class="px-3 py-1.5 text-on-surface-variant hover:text-primary whitespace-nowrap">
          Inventory (684)
        </button>
<button class="px-3 py-1.5 text-on-surface-variant hover:text-primary whitespace-nowrap">
          Forecasting &amp; Sim (430)
        </button>
<button class="px-3 py-1.5 text-on-surface-variant hover:text-primary whitespace-nowrap">
          Fleet &amp; Sorties (712)
        </button>
<button class="px-3 py-1.5 text-on-surface-variant hover:text-primary whitespace-nowrap">
          Recommendations (318)
        </button>
<button class="px-3 py-1.5 text-error hover:text-on-error-container whitespace-nowrap font-semibold">
          Security Incidents (104)
        </button>
</div>
<!-- Filter Dropdowns Row -->
<div class="flex flex-wrap items-center gap-space-sm pt-1">
<select class="py-1 px-2.5 bg-surface border border-outline-variant text-on-surface rounded text-label-xs font-label-xs">
<option>Time: Today - Last 24h</option>
<option>Past 6 Hours</option>
<option>Past 7 Days</option>
<option>Custom Epoch Range</option>
</select>
<select class="py-1 px-2.5 bg-surface border border-outline-variant text-on-surface rounded text-label-xs font-label-xs">
<option>Actor: All Actors / System / AI</option>
<option>Logistics Officers</option>
<option>Automated Engines</option>
<option>Privileged Admins</option>
</select>
<select class="py-1 px-2.5 bg-surface border border-outline-variant text-on-surface rounded text-label-xs font-label-xs">
<option>Action: All Actions (Approved, Modified, Staged)</option>
<option>Approved Recommendation</option>
<option>Modified Role Matrix</option>
<option>Parameter Override</option>
<option>Dispatch Attempt</option>
</select>
<select class="py-1 px-2.5 bg-surface border border-outline-variant text-on-surface rounded text-label-xs font-label-xs">
<option>Result: All Results (Success, Failed, Denied)</option>
<option>Success (200 OK)</option>
<option>Failed (Execution / Auth)</option>
<option>Denied (403 Forbidden)</option>
</select>
<select class="py-1 px-2.5 bg-surface border border-outline-variant text-on-surface rounded text-label-xs font-label-xs">
<option>Severity: All Severities</option>
<option>CRITICAL</option>
<option>HIGH</option>
<option>MEDIUM</option>
<option>INFORMATIONAL</option>
</select>
<button class="ml-auto text-label-xs font-label-xs text-secondary font-semibold hover:underline flex items-center gap-1">
<span class="material-symbols-outlined text-xs" data-icon="restart_alt">restart_alt</span>
          Reset Filters
        </button>
</div>
</section>
<!-- 3. SPLIT WORKSPACE: MAIN EVENT TABLE (~62%) & EVENT DETAIL DRAWER (~38%) -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
<!-- ==================== MAIN AUDIT TABLE (62% -> 7 or 8 columns in 12-col grid) ==================== -->
<section class="lg:col-span-7 bg-surface-container-lowest border border-outline-variant rounded overflow-hidden flex flex-col">
<!-- Table Action Header -->
<div class="p-space-sm bg-surface-container border-b border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-base" data-icon="database">database</span>
<span class="text-label-md font-label-md font-bold text-primary">Immutable Ledger Stream</span>
<span class="text-label-xs font-label-xs bg-surface-container-highest px-2 py-0.5 rounded text-on-surface-variant font-tech">2,846 RECORDS</span>
</div>
<div class="text-label-xs font-label-xs text-outline font-tech">
            LATEST: 14:46:21 IST
          </div>
</div>
<!-- The Table -->
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container-high border-b-2 border-secondary text-primary text-label-xs font-label-xs tracking-wider uppercase font-tech">
<th class="py-2.5 px-3">Timestamp</th>
<th class="py-2.5 px-3">Actor / ID</th>
<th class="py-2.5 px-3">Action</th>
<th class="py-2.5 px-3">Object ID</th>
<th class="py-2.5 px-3">Scope</th>
<th class="py-2.5 px-3">Result</th>
<th class="py-2.5 px-3">Severity</th>
<th class="py-2.5 px-2 text-center">Inspect</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant font-tech text-body-sm">
<!-- ROW 1 (SELECTED ROW: Arjun Mehta) -->
<tr class="bg-secondary-container bg-opacity-40 border-l-4 border-l-secondary cursor-pointer hover:bg-secondary-container hover:bg-opacity-50 transition-colors">
<td class="py-2 px-3 text-label-xs font-label-xs text-on-surface font-semibold whitespace-nowrap">14:46:21 IST</td>
<td class="py-2 px-3">
<div class="text-label-xs font-label-xs font-bold text-primary">Arjun Mehta</div>
<div class="text-label-xs font-label-xs text-on-surface-variant">USR-0148 (Logistics)</div>
</td>
<td class="py-2 px-3 text-label-xs font-label-xs text-primary font-medium">Approved Recommendation</td>
<td class="py-2 px-3">
<span class="bg-surface px-1.5 py-0.5 rounded border border-outline-variant text-secondary font-bold text-label-xs">REC-2048</span>
<div class="text-label-xs font-label-xs text-on-surface-variant">+3,000 L Fuel</div>
</td>
<td class="py-2 px-3 text-label-xs font-label-xs text-on-surface-variant">LOC-0042 (Alpha)</td>
<td class="py-2 px-3">
<span class="bg-secondary-fixed text-on-secondary-fixed-variant px-1.5 py-0.5 rounded text-label-xs font-label-xs font-semibold">SUCCESS</span>
</td>
<td class="py-2 px-3">
<span class="inline-flex items-center gap-1 text-label-xs font-label-xs font-bold text-primary">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> HIGH
                  </span>
</td>
<td class="py-2 px-2 text-center">
<span class="material-symbols-outlined text-secondary text-sm" data-icon="visibility">visibility</span>
</td>
</tr>
<!-- ROW 2: Maj. V. Rathore (CRITICAL) -->
<tr class="hover:bg-surface-container transition-colors cursor-pointer">
<td class="py-2 px-3 text-label-xs font-label-xs text-outline whitespace-nowrap">14:42:08 IST</td>
<td class="py-2 px-3">
<div class="text-label-xs font-label-xs font-bold text-primary">Maj. V. Rathore</div>
<div class="text-label-xs font-label-xs text-on-surface-variant">USR-0034 (Admin)</div>
</td>
<td class="py-2 px-3 text-label-xs font-label-xs text-primary">Modified Role Matrix</td>
<td class="py-2 px-3">
<span class="bg-surface px-1.5 py-0.5 rounded border border-outline-variant text-primary font-medium text-label-xs">ROLE-002</span>
<div class="text-label-xs font-label-xs text-on-surface-variant">Elevated Sortie</div>
</td>
<td class="py-2 px-3 text-label-xs font-label-xs text-on-surface-variant">Northern Sec IV-B</td>
<td class="py-2 px-3">
<span class="bg-secondary-fixed text-on-secondary-fixed-variant px-1.5 py-0.5 rounded text-label-xs font-label-xs font-semibold">SUCCESS</span>
</td>
<td class="py-2 px-3">
<span class="inline-flex items-center gap-1 text-label-xs font-label-xs font-bold text-error">
<span class="w-1.5 h-1.5 rounded-full bg-error"></span> CRITICAL
                  </span>
</td>
<td class="py-2 px-2 text-center text-outline hover:text-primary">
<span class="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</td>
</tr>
<!-- ROW 3: SYSTEM SIM-LOGIX -->
<tr class="hover:bg-surface-container transition-colors cursor-pointer">
<td class="py-2 px-3 text-label-xs font-label-xs text-outline whitespace-nowrap">14:38:14 IST</td>
<td class="py-2 px-3">
<div class="text-label-xs font-label-xs font-bold text-primary">SYSTEM</div>
<div class="text-label-xs font-label-xs text-outline">ENGINE:SIM-LOGIX</div>
</td>
<td class="py-2 px-3 text-label-xs font-label-xs text-on-surface">Generated Forecast</td>
<td class="py-2 px-3">
<span class="bg-surface px-1.5 py-0.5 rounded border border-outline-variant text-primary font-medium text-label-xs">FC-018</span>
<div class="text-label-xs font-label-xs text-on-surface-variant">Winter Diesel Surge</div>
</td>
<td class="py-2 px-3 text-label-xs font-label-xs text-on-surface-variant">DEP-0002 (Bodhkharbu)</td>
<td class="py-2 px-3">
<span class="bg-secondary-fixed text-on-secondary-fixed-variant px-1.5 py-0.5 rounded text-label-xs font-label-xs font-semibold">SUCCESS</span>
</td>
<td class="py-2 px-3">
<span class="inline-flex items-center gap-1 text-label-xs font-label-xs font-medium text-on-surface">
<span class="w-1.5 h-1.5 rounded-full bg-outline"></span> MEDIUM
                  </span>
</td>
<td class="py-2 px-2 text-center text-outline hover:text-primary">
<span class="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</td>
</tr>
<!-- ROW 4: Rohan Singh -->
<tr class="hover:bg-surface-container transition-colors cursor-pointer">
<td class="py-2 px-3 text-label-xs font-label-xs text-outline whitespace-nowrap">14:31:52 IST</td>
<td class="py-2 px-3">
<div class="text-label-xs font-label-xs font-bold text-primary">Rohan Singh</div>
<div class="text-label-xs font-label-xs text-on-surface-variant">USR-0215 (Fleet Mgr)</div>
</td>
<td class="py-2 px-3 text-label-xs font-label-xs text-on-surface">Rerouted Convoy Sortie</td>
<td class="py-2 px-3">
<span class="bg-surface px-1.5 py-0.5 rounded border border-outline-variant text-primary font-medium text-label-xs">SHP-2048</span>
<div class="text-label-xs font-label-xs text-on-surface-variant">via RTE-021 Chushul</div>
</td>
<td class="py-2 px-3 text-label-xs font-label-xs text-on-surface-variant">Corridor RTE-018/021</td>
<td class="py-2 px-3">
<span class="bg-secondary-fixed text-on-secondary-fixed-variant px-1.5 py-0.5 rounded text-label-xs font-label-xs font-semibold">SUCCESS</span>
</td>
<td class="py-2 px-3">
<span class="inline-flex items-center gap-1 text-label-xs font-label-xs font-bold text-primary">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> HIGH
                  </span>
</td>
<td class="py-2 px-2 text-center text-outline hover:text-primary">
<span class="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</td>
</tr>
<!-- ROW 5: Maj. V. Rathore (Suspension) -->
<tr class="hover:bg-surface-container transition-colors cursor-pointer">
<td class="py-2 px-3 text-label-xs font-label-xs text-outline whitespace-nowrap">14:27:19 IST</td>
<td class="py-2 px-3">
<div class="text-label-xs font-label-xs font-bold text-primary">Maj. V. Rathore</div>
<div class="text-label-xs font-label-xs text-on-surface-variant">USR-0034 (Admin)</div>
</td>
<td class="py-2 px-3 text-label-xs font-label-xs text-primary">Suspended Dormant User</td>
<td class="py-2 px-3">
<span class="bg-surface px-1.5 py-0.5 rounded border border-outline-variant text-error font-medium text-label-xs">USR-0182</span>
<div class="text-label-xs font-label-xs text-on-surface-variant">Devendra Joshi</div>
</td>
<td class="py-2 px-3 text-label-xs font-label-xs text-on-surface-variant">Global Scope</td>
<td class="py-2 px-3">
<span class="bg-secondary-fixed text-on-secondary-fixed-variant px-1.5 py-0.5 rounded text-label-xs font-label-xs font-semibold">SUCCESS</span>
</td>
<td class="py-2 px-3">
<span class="inline-flex items-center gap-1 text-label-xs font-label-xs font-bold text-error">
<span class="w-1.5 h-1.5 rounded-full bg-error"></span> CRITICAL
                  </span>
</td>
<td class="py-2 px-2 text-center text-outline hover:text-primary">
<span class="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</td>
</tr>
<!-- ROW 6: SYSTEM CONNECTOR:INV -->
<tr class="hover:bg-surface-container transition-colors cursor-pointer">
<td class="py-2 px-3 text-label-xs font-label-xs text-outline whitespace-nowrap">14:15:02 IST</td>
<td class="py-2 px-3">
<div class="text-label-xs font-label-xs font-bold text-primary">SYSTEM</div>
<div class="text-label-xs font-label-xs text-outline">CONNECTOR:INV</div>
</td>
<td class="py-2 px-3 text-label-xs font-label-xs text-on-surface">Batch Decant Synced</td>
<td class="py-2 px-3">
<span class="bg-surface px-1.5 py-0.5 rounded border border-outline-variant text-primary font-medium text-label-xs">INV-284</span>
<div class="text-label-xs font-label-xs text-on-surface-variant">Khangral CP Fuel</div>
</td>
<td class="py-2 px-3 text-label-xs font-label-xs text-on-surface-variant">LOC-0078</td>
<td class="py-2 px-3">
<span class="bg-secondary-fixed text-on-secondary-fixed-variant px-1.5 py-0.5 rounded text-label-xs font-label-xs font-semibold">SUCCESS</span>
</td>
<td class="py-2 px-3">
<span class="inline-flex items-center gap-1 text-label-xs font-label-xs font-medium text-outline">
<span class="w-1.5 h-1.5 rounded-full bg-outline"></span> INFO
                  </span>
</td>
<td class="py-2 px-2 text-center text-outline hover:text-primary">
<span class="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</td>
</tr>
<!-- ROW 7: Capt. S. Nair (DENIED 403) -->
<tr class="bg-error-container bg-opacity-20 hover:bg-error-container hover:bg-opacity-30 transition-colors cursor-pointer">
<td class="py-2 px-3 text-label-xs font-label-xs text-error font-semibold whitespace-nowrap">13:58:44 IST</td>
<td class="py-2 px-3">
<div class="text-label-xs font-label-xs font-bold text-primary">Capt. S. Nair</div>
<div class="text-label-xs font-label-xs text-on-surface-variant">USR-0291 (Sortie Cmdr)</div>
</td>
<td class="py-2 px-3 text-label-xs font-label-xs text-error font-medium">Unauthorized Dispatch</td>
<td class="py-2 px-3">
<span class="bg-surface px-1.5 py-0.5 rounded border border-outline-variant text-error font-bold text-label-xs">SHP-2051</span>
<div class="text-label-xs font-label-xs text-on-surface-variant">Ammo Sortie West Cmd</div>
</td>
<td class="py-2 px-3 text-label-xs font-label-xs text-on-surface-variant">Sector III-A</td>
<td class="py-2 px-3">
<span class="bg-error-container text-on-error-container border border-error px-1.5 py-0.5 rounded text-label-xs font-label-xs font-bold">DENIED (403)</span>
</td>
<td class="py-2 px-3">
<span class="inline-flex items-center gap-1 text-label-xs font-label-xs font-bold text-error">
<span class="w-1.5 h-1.5 rounded-full bg-error"></span> HIGH
                  </span>
</td>
<td class="py-2 px-2 text-center text-error hover:text-on-error-container">
<span class="material-symbols-outlined text-sm" data-icon="report">report</span>
</td>
</tr>
<!-- ROW 8: Lt. Col. B. Kumar -->
<tr class="hover:bg-surface-container transition-colors cursor-pointer">
<td class="py-2 px-3 text-label-xs font-label-xs text-outline whitespace-nowrap">13:42:11 IST</td>
<td class="py-2 px-3">
<div class="text-label-xs font-label-xs font-bold text-primary">Lt. Col. B. Kumar</div>
<div class="text-label-xs font-label-xs text-on-surface-variant">USR-0012 (Directorate)</div>
</td>
<td class="py-2 px-3 text-label-xs font-label-xs text-on-surface">Parameter Override Staged</td>
<td class="py-2 px-3">
<span class="bg-surface px-1.5 py-0.5 rounded border border-outline-variant text-primary font-medium text-label-xs">REC-2048</span>
<div class="text-label-xs font-label-xs text-on-surface-variant">+500 L Alpine Margin</div>
</td>
<td class="py-2 px-3 text-label-xs font-label-xs text-on-surface-variant">LOC-0042</td>
<td class="py-2 px-3">
<span class="bg-secondary-fixed text-on-secondary-fixed-variant px-1.5 py-0.5 rounded text-label-xs font-label-xs font-semibold">SUCCESS</span>
</td>
<td class="py-2 px-3">
<span class="inline-flex items-center gap-1 text-label-xs font-label-xs font-bold text-primary">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> HIGH
                  </span>
</td>
<td class="py-2 px-2 text-center text-outline hover:text-primary">
<span class="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</td>
</tr>
<!-- ROW 9: DISA-IDS MFA Failed -->
<tr class="bg-error-container bg-opacity-20 hover:bg-error-container hover:bg-opacity-30 transition-colors cursor-pointer">
<td class="py-2 px-3 text-label-xs font-label-xs text-error font-semibold whitespace-nowrap">13:20:30 IST</td>
<td class="py-2 px-3">
<div class="text-label-xs font-label-xs font-bold text-error">SECURITY MONITOR</div>
<div class="text-label-xs font-label-xs text-outline">DISA-IDS ENGINE</div>
</td>
<td class="py-2 px-3 text-label-xs font-label-xs text-error font-medium">MFA Handshake Failed</td>
<td class="py-2 px-3">
<span class="bg-surface px-1.5 py-0.5 rounded border border-outline-variant text-error font-medium text-label-xs">USR-0309</span>
<div class="text-label-xs font-label-xs text-on-surface-variant">Ankit Rao (4 Retries)</div>
</td>
<td class="py-2 px-3 text-label-xs font-label-xs text-on-surface-variant">IP: 10.24.12.8 (Leh)</td>
<td class="py-2 px-3">
<span class="bg-error-container text-on-error-container border border-error px-1.5 py-0.5 rounded text-label-xs font-label-xs font-bold">FAILED</span>
</td>
<td class="py-2 px-3">
<span class="inline-flex items-center gap-1 text-label-xs font-label-xs font-bold text-error">
<span class="w-1.5 h-1.5 rounded-full bg-error"></span> CRITICAL
                  </span>
</td>
<td class="py-2 px-2 text-center text-error hover:text-on-error-container">
<span class="material-symbols-outlined text-sm" data-icon="shield">shield</span>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Table Pagination Footer -->
<div class="p-space-sm bg-surface-container border-t border-outline-variant flex flex-wrap items-center justify-between text-label-xs font-label-xs font-tech">
<div class="text-on-surface-variant">
            Showing <span class="font-bold text-primary">1–9</span> of <span class="font-bold text-primary">2,846</span> events
          </div>
<div class="flex items-center gap-space-md">
<div class="flex items-center gap-1.5">
<span>Rows per page:</span>
<select class="py-0.5 px-2 bg-surface border border-outline-variant rounded text-label-xs font-label-xs">
<option>25</option>
<option>50</option>
<option>100</option>
</select>
</div>
<div class="flex items-center gap-1">
<button class="w-6 h-6 flex items-center justify-center border border-outline-variant rounded bg-surface text-outline hover:text-primary">
<span class="material-symbols-outlined text-xs" data-icon="chevron_left">chevron_left</span>
</button>
<button class="w-6 h-6 flex items-center justify-center border border-secondary rounded bg-secondary text-on-secondary font-bold">1</button>
<button class="w-6 h-6 flex items-center justify-center border border-outline-variant rounded bg-surface hover:bg-surface-container">2</button>
<button class="w-6 h-6 flex items-center justify-center border border-outline-variant rounded bg-surface hover:bg-surface-container">3</button>
<span class="px-1 text-outline">...</span>
<button class="w-6 h-6 flex items-center justify-center border border-outline-variant rounded bg-surface hover:bg-surface-container">114</button>
<button class="w-6 h-6 flex items-center justify-center border border-outline-variant rounded bg-surface text-on-surface hover:text-primary">
<span class="material-symbols-outlined text-xs" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</section>
<!-- ==================== EVENT DETAIL DRAWER (~38% -> 5 cols in 12-col grid) ==================== -->
<section aria-label="Event Forensic Dossier" class="lg:col-span-5 bg-surface-container-lowest border border-outline-variant rounded overflow-hidden flex flex-col space-y-space-sm">
<!-- Forensic Header -->
<div class="p-space-sm bg-surface-container border-b border-outline-variant flex items-center justify-between">
<div>
<div class="flex items-center gap-2">
<span class="text-label-xs font-label-xs text-outline uppercase font-tech">EVENT FORENSIC DOSSIER</span>
<span class="bg-secondary text-on-secondary text-label-xs font-label-xs px-1.5 py-0.2 rounded font-tech">IMMUTABLE</span>
</div>
<div class="text-label-md font-label-md font-bold text-primary font-tech">EVT-20261007-01482</div>
</div>
<div class="text-right">
<span class="inline-flex items-center gap-1 bg-secondary-fixed text-on-secondary-fixed-variant px-2 py-0.5 rounded text-label-xs font-label-xs font-bold font-tech">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> 200 OK SUCCESS
            </span>
<div class="text-label-xs font-label-xs text-outline font-tech mt-0.5">SEVERITY: HIGH</div>
</div>
</div>
<div class="p-space-md space-y-space-md overflow-y-auto">
<!-- Narrative Human Explanation Box -->
<div class="bg-surface-container-low p-space-sm border-l-2 border-secondary rounded">
<div class="text-label-xs font-label-xs text-outline uppercase font-bold tracking-wider mb-1">Human Narrative &amp; Intent</div>
<p class="text-body-sm font-body-sm text-on-surface leading-relaxed">
              Logistics Officer <strong>Arjun Mehta (USR-0148)</strong> formally approved high-priority AI recommendation <strong>REC-2048</strong> to increase Arctic Diesel resupply for <strong>Forward Post Alpha (LOC-0042)</strong> with an operator override from 2,500 L to 3,000 L, citing impending Fotu La blizzard conditions.
            </p>
</div>
<!-- Before / After State Diff -->
<div>
<div class="text-label-xs font-label-xs text-outline uppercase font-bold tracking-wider mb-space-xs font-tech flex items-center gap-1">
<span class="material-symbols-outlined text-xs text-secondary" data-icon="difference">difference</span>
<span>State Transition Differential (Before vs After)</span>
</div>
<div class="border border-outline-variant rounded divide-y divide-outline-variant font-tech text-label-xs font-label-xs">
<!-- Item 1: Replenishment Volume -->
<div class="p-2 grid grid-cols-12 gap-1 bg-surface-container-lowest">
<div class="col-span-4 text-on-surface-variant font-medium">Replenishment Vol:</div>
<div class="col-span-4 text-outline line-through">2,500 L (AI Baseline)</div>
<div class="col-span-4 text-secondary font-bold">→ 3,000 L (+500 L Override)</div>
</div>
<!-- Item 2: Decision State -->
<div class="p-2 grid grid-cols-12 gap-1 bg-surface-container-low">
<div class="col-span-4 text-on-surface-variant font-medium">Decision State:</div>
<div class="col-span-4 text-outline">PENDING REVIEW</div>
<div class="col-span-4 text-primary font-bold">→ APPROVED (DISP-9921)</div>
</div>
<!-- Item 3: Stockout Risk -->
<div class="p-2 grid grid-cols-12 gap-1 bg-surface-container-lowest">
<div class="col-span-4 text-on-surface-variant font-medium">Stockout Risk:</div>
<div class="col-span-4 text-error font-medium">74.0% (Day 6 Breach)</div>
<div class="col-span-4 text-secondary font-bold">→ 21.0% (Safe 18.5d Runway)</div>
</div>
<!-- Item 4: Justification Log -->
<div class="p-2 bg-surface-container-low">
<div class="text-on-surface-variant font-medium mb-1">Operator Justification Note:</div>
<div class="text-on-surface font-body-sm italic bg-surface p-1.5 rounded border border-outline-variant">
                  "Anticipating severe blizzard on Fotu La Pass (BRO Level 2 advisory); increasing sortie capacity to 3,000 L for full 18.5-day buffer."
                </div>
</div>
</div>
</div>
<!-- Event Forensic Metadata -->
<div>
<div class="text-label-xs font-label-xs text-outline uppercase font-bold tracking-wider mb-space-xs font-tech flex items-center gap-1">
<span class="material-symbols-outlined text-xs text-secondary" data-icon="fingerprint">fingerprint</span>
<span>Cryptographic Chain &amp; Session Metadata</span>
</div>
<div class="grid grid-cols-2 gap-2 font-tech text-label-xs font-label-xs">
<div class="p-2 bg-surface border border-outline-variant rounded">
<span class="text-outline block">ACTOR ROLE / PRIVILEGE</span>
<span class="text-primary font-semibold">Logistics Officer (ROLE-002)</span>
</div>
<div class="p-2 bg-surface border border-outline-variant rounded">
<span class="text-outline block">AUTH METHOD</span>
<span class="text-secondary font-semibold">Hardware FIDO2 (YubiKey L4)</span>
</div>
<div class="p-2 bg-surface border border-outline-variant rounded">
<span class="text-outline block">SESSION IDENTIFIER</span>
<span class="text-primary font-semibold">SES-9941-LEH-04</span>
</div>
<div class="p-2 bg-surface border border-outline-variant rounded">
<span class="text-outline block">ORIGIN IP / ENCLAVE</span>
<span class="text-primary font-semibold">10.24.12.8 (Leh HQ Enclave)</span>
</div>
<div class="col-span-2 p-2 bg-surface border border-outline-variant rounded">
<span class="text-outline block">CRYPTOGRAPHIC SIGNATURE (ED25519)</span>
<span class="text-primary font-semibold truncate block">ed25519:7b3a9e144c8032b95fae2118...0f12c (Verified)</span>
<span class="text-outline-variant text-[9px] mt-0.5 block">Merkle Tree Block #882109-L • ISO-27001 Digest Valid</span>
</div>
<div class="col-span-2 p-2 bg-surface border border-outline-variant rounded">
<span class="text-outline block">AFFECTED OBJECT LINEAGE</span>
<span class="text-secondary font-semibold">REC-2048</span>
<span class="text-on-surface-variant"> (Parent: Model SIM-0084 • Target Risk: RISK-1042)</span>
</div>
</div>
</div>
<!-- Event Correlation Chain (Timeline for REC-2048) -->
<div>
<div class="text-label-xs font-label-xs text-outline uppercase font-bold tracking-wider mb-space-xs font-tech flex items-center gap-1">
<span class="material-symbols-outlined text-xs text-secondary" data-icon="timeline">timeline</span>
<span>Correlation Chain (Audited Lifecycle of REC-2048)</span>
</div>
<div class="relative pl-4 border-l border-outline-variant space-y-3 font-tech text-label-xs font-label-xs">
<!-- Step 1 -->
<div class="relative">
<span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-outline"></span>
<div class="text-outline">14:32:09 IST</div>
<div class="text-on-surface">Model SIM-0084 Generated (+2,500 L baseline recommendation)</div>
</div>
<!-- Step 2 -->
<div class="relative">
<span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-outline"></span>
<div class="text-outline">14:35:40 IST</div>
<div class="text-on-surface">Operator Opened &amp; Inspected Evidence Dossier (FC-018, INV-284)</div>
</div>
<!-- Step 3 -->
<div class="relative">
<span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-secondary"></span>
<div class="text-outline">14:42:01 IST</div>
<div class="text-on-surface">Parameter Override Staged (2,500 L → 3,000 L) by Lt. Col. B. Kumar</div>
</div>
<!-- Step 4 -->
<div class="relative">
<span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-secondary"></span>
<div class="text-outline">14:44:30 IST</div>
<div class="text-on-surface">Mandatory Weather Advisory Justification Recorded</div>
</div>
<!-- Step 5 (Current Event) -->
<div class="relative bg-secondary-container p-2 rounded -ml-2 border-l-2 border-secondary">
<span class="absolute -left-[15px] top-3 w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-background"></span>
<div class="text-secondary font-bold flex items-center justify-between">
<span>14:46:21 IST</span>
<span class="bg-secondary text-on-secondary px-1 rounded text-[9px]">CURRENT EVENT</span>
</div>
<div class="text-primary font-bold">Formal Cryptographic Approval DISP-9921 Executed</div>
</div>
</div>
</div>
<!-- Auditor Action Bar -->
<div class="pt-space-sm border-t border-outline-variant grid grid-cols-2 gap-2">
<button class="flex items-center justify-center gap-1.5 bg-primary text-on-primary py-2 px-3 rounded font-label-sm text-label-sm hover:bg-secondary transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="policy">policy</span>
<span>Start Investigation</span>
</button>
<button class="flex items-center justify-center gap-1.5 bg-surface border border-outline text-on-surface py-2 px-3 rounded font-label-sm text-label-sm hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="hub">hub</span>
<span>Correlate Similar</span>
</button>
<button class="flex items-center justify-center gap-1.5 bg-surface border border-outline-variant text-on-surface py-1.5 px-3 rounded font-label-sm text-label-sm hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="picture_as_pdf">picture_as_pdf</span>
<span>Export Evidence PDF</span>
</button>
<button class="flex items-center justify-center gap-1.5 bg-surface border border-outline-variant text-on-surface py-1.5 px-3 rounded font-label-sm text-label-sm hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="content_copy">content_copy</span>
<span>Copy Merkle Hash</span>
</button>
</div>
</div>
</section>
</div>
<!-- 4. DEDICATED SECURITY INCIDENTS & FAILURES SUB-PANEL -->
<section aria-label="Security Incidents Under Scrutiny" class="bg-surface-container-lowest border border-error border-opacity-40 rounded p-space-sm space-y-space-sm">
<div class="flex items-center justify-between border-b border-outline-variant pb-2">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-error" data-icon="gpp_bad">gpp_bad</span>
<span class="text-label-md font-label-md font-bold text-primary">Active Security Exceptions Requiring Investigation</span>
<span class="bg-error-container text-on-error-container font-tech text-label-xs font-label-xs px-2 py-0.5 rounded font-bold">2 INCIDENTS ACTIVE</span>
</div>
<div class="flex items-center gap-2">
<span class="text-label-xs font-label-xs text-outline font-tech">DISA-IDS ENFORCEMENT ENGINE</span>
<button class="text-label-xs font-label-xs text-primary font-bold hover:underline">View Security Dossier →</button>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-space-sm font-tech">
<!-- INCIDENT 1: SEC-402 -->
<div class="bg-surface p-3 border-l-4 border-l-error border border-outline-variant rounded flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs font-bold text-error">INCIDENT #SEC-402</span>
<span class="text-label-xs font-label-xs bg-error-container text-on-error-container px-1 rounded">MFA BRUTE-FORCE PROBE</span>
</div>
<div class="text-body-sm font-body-sm font-bold text-primary mt-1">Repeated MFA Handshake Failures on USR-0309</div>
<p class="text-label-xs font-label-xs text-on-surface-variant font-tech mt-1">
              Actor: Ankit Rao (USR-0309) • 4 consecutive PIN rejected handshakes from terminal IP: 10.24.12.8 (Leh Station Sub-Net). User token auto-quarantined.
            </p>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant flex items-center justify-between text-label-xs font-label-xs">
<span class="text-outline">TIME: 13:20:30 IST</span>
<div class="flex gap-2">
<button class="text-secondary font-bold hover:underline">Verify Identity</button>
<button class="text-error font-bold hover:underline">Revoke Keyring</button>
</div>
</div>
</div>
<!-- INCIDENT 2: SEC-403 -->
<div class="bg-surface p-3 border-l-4 border-l-error border border-outline-variant rounded flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="text-label-xs font-label-xs font-bold text-error">INCIDENT #SEC-403</span>
<span class="text-label-xs font-label-xs bg-error-container text-on-error-container px-1 rounded">SCOPE GATE VIOLATION</span>
</div>
<div class="text-body-sm font-body-sm font-bold text-primary mt-1">Cross-Sector Unauthorized Dispatch Attempt</div>
<p class="text-label-xs font-label-xs text-on-surface-variant font-tech mt-1">
              Actor: Capt. S. Nair (USR-0291) • Out-of-theatre dispatch command issued for Western Command Munitions SHP-2051. Blocked via DEF-L4 Scope Boundary.
            </p>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant flex items-center justify-between text-label-xs font-label-xs">
<span class="text-outline">TIME: 13:58:44 IST</span>
<div class="flex gap-2">
<button class="text-secondary font-bold hover:underline">Review Scope</button>
<button class="text-primary font-bold hover:underline">File Dossier #INV-09</button>
</div>
</div>
</div>
</div>
</section>
</main>`;
