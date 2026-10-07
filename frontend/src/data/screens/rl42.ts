// Screen: RL-42 — Notification Center
// Route: /notifications
export const rl42Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto min-h-[calc(100vh-3.5rem)] flex flex-col justify-between">
<div class="p-space-lg max-w-[1720px] mx-auto w-full space-y-4">
<!-- ================= 2. TOP COMMAND HEADER ================= -->
<section class="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-surface-dim">
<div>
<div class="flex items-center gap-2 text-label-xs font-label-xs uppercase tracking-wider text-outline mb-1">
<span>Account</span>
<span>/</span>
<span class="text-secondary font-bold">Notifications (RL-42)</span>
<span class="text-surface-dim">•</span>
<span class="font-mono text-outline">ENCLAVE: DEF-L4</span>
</div>
<h1 class="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">Notification Center</h1>
<p class="text-body-sm font-body-sm text-on-surface-variant">Operational alerts, predictive risk events, depot recommendations, and tactical queue dispatches.</p>
</div>
<div class="flex flex-wrap items-center gap-2">
<!-- Sync status -->
<div class="flex items-center gap-1.5 px-2.5 py-1 bg-surface-container rounded border border-surface-dim text-body-sm text-on-surface-variant">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="text-[11px] font-mono">Synced: 30s ago (14:46 IST)</span>
</div>
<button class="h-8 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface rounded text-label-sm font-label-sm uppercase border border-surface-dim flex items-center gap-1 transition-colors">
<span class="material-symbols-outlined text-sm">done_all</span>
            Mark All as Read
          </button>
<a class="h-8 px-3 bg-surface-container-lowest hover:bg-surface-container text-on-surface rounded text-label-sm font-label-sm uppercase border border-surface-dim flex items-center gap-1 transition-colors" href="#">
<span class="material-symbols-outlined text-sm">tune</span>
            Notification Settings (RL-41)
          </a>
<div class="flex items-center gap-1 px-2.5 py-1 bg-surface-container-high rounded border border-surface-dim text-label-xs font-label-xs font-mono text-secondary">
<span class="material-symbols-outlined text-sm">sensors</span>
            LIVE STREAM
          </div>
</div>
</section>
<!-- ================= 3. NOTIFICATION SUMMARY STRIP (Compact KPIs) ================= -->
<section class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2">
<!-- Unread Card -->
<div class="bg-surface-container-lowest p-2.5 rounded border border-surface-dim flex flex-col justify-between">
<span class="text-[10px] font-label-xs text-outline uppercase tracking-wider">Unread</span>
<div class="flex items-baseline justify-between mt-1">
<span class="text-2xl font-bold font-mono text-primary">14</span>
<span class="text-[10px] text-secondary font-medium">Queue Total</span>
</div>
</div>
<!-- Critical Card (Restrained dark earth red) -->
<div class="bg-surface-container-lowest p-2.5 rounded border-l-4 border-l-error border border-surface-dim flex flex-col justify-between">
<span class="text-[10px] font-label-xs text-error uppercase tracking-wider font-bold">Critical</span>
<div class="flex items-baseline justify-between mt-1">
<span class="text-2xl font-bold font-mono text-error">02</span>
<span class="px-1 py-0.5 rounded bg-error-container text-on-error-container text-[9px] font-bold">IMMEDIATE</span>
</div>
</div>
<!-- High Priority Card (Muted amber) -->
<div class="bg-surface-container-lowest p-2.5 rounded border-l-4 border-l-[#C49A45] border border-surface-dim flex flex-col justify-between">
<span class="text-[10px] font-label-xs text-[#7A5B18] uppercase tracking-wider font-bold">High Priority</span>
<div class="flex items-baseline justify-between mt-1">
<span class="text-2xl font-bold font-mono text-[#7A5B18]">05</span>
<span class="text-[10px] text-[#7A5B18] font-medium">&lt; 2 Hrs</span>
</div>
</div>
<!-- Operational -->
<div class="bg-surface-container-lowest p-2.5 rounded border border-surface-dim flex flex-col justify-between">
<span class="text-[10px] font-label-xs text-outline uppercase tracking-wider">Operational</span>
<div class="flex items-baseline justify-between mt-1">
<span class="text-2xl font-bold font-mono text-on-surface">09</span>
<span class="text-[10px] text-outline font-medium">Forward Ops</span>
</div>
</div>
<!-- Security -->
<div class="bg-surface-container-lowest p-2.5 rounded border border-surface-dim flex flex-col justify-between">
<span class="text-[10px] font-label-xs text-outline uppercase tracking-wider">Security</span>
<div class="flex items-baseline justify-between mt-1">
<span class="text-2xl font-bold font-mono text-on-surface">02</span>
<span class="text-[10px] text-error font-medium">Enclave Audit</span>
</div>
</div>
<!-- System -->
<div class="bg-surface-container-lowest p-2.5 rounded border border-surface-dim flex flex-col justify-between">
<span class="text-[10px] font-label-xs text-outline uppercase tracking-wider">System</span>
<div class="flex items-baseline justify-between mt-1">
<span class="text-2xl font-bold font-mono text-on-surface">03</span>
<span class="text-[10px] text-secondary font-medium">Telemetry OK</span>
</div>
</div>
<!-- Preferences Shortcut Callout -->
<div class="bg-surface-container-low p-2 rounded border border-surface-dim col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col justify-center">
<div class="text-[10px] font-label-xs text-outline uppercase tracking-wider leading-tight">Preferences</div>
<div class="text-[11px] font-body-sm text-on-surface mt-1 leading-snug">
<span class="font-semibold text-secondary">Critical:</span> Always • 
            <span class="font-semibold text-secondary">Sim:</span> In-App
          </div>
<a class="text-[10px] font-label-xs text-secondary font-bold uppercase tracking-wider hover:underline mt-1 flex items-center gap-0.5" href="#">
            Manage Preferences (RL-41) <span class="material-symbols-outlined text-[11px]">arrow_forward</span>
</a>
</div>
</section>
<!-- ================= 4. MAIN CONTENT AREA (Bento / Two Column Grid) ================= -->
<section class="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
<!-- LEFT COLUMN (~62% width -> 7 of 12 cols in 12-col grid) -->
<div class="lg:col-span-7 space-y-3">
<!-- Search & Filter Controls Toolbar -->
<div class="bg-surface-container-lowest p-3 rounded border border-surface-dim space-y-2.5">
<!-- Search bar -->
<div class="relative w-full">
<span class="absolute inset-y-0 left-2.5 flex items-center pointer-events-none text-outline">
<span class="material-symbols-outlined">search</span>
</span>
<input class="w-full h-9 pl-9 pr-3 bg-surface text-on-surface text-body-sm rounded border border-surface-dim focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary font-mono placeholder:font-body-md placeholder:text-outline" placeholder="Search notifications (title, LOC-, SHP-, REC-, RISK-, SIM-)..." type="text"/>
</div>
<!-- Filter Status Pills & Filters Grid -->
<div class="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-surface-dim">
<!-- Status Pills -->
<div class="flex flex-wrap items-center gap-1">
<button class="px-2.5 py-1 rounded text-label-xs font-label-xs uppercase bg-primary-container text-on-primary">All</button>
<button class="px-2.5 py-1 rounded text-label-xs font-label-xs uppercase bg-surface-container hover:bg-surface-container-high text-on-surface border border-surface-dim flex items-center gap-1 font-bold">
                  Unread <span class="px-1 rounded bg-secondary text-on-secondary font-mono text-[9px]">14</span>
</button>
<button class="px-2.5 py-1 rounded text-label-xs font-label-xs uppercase bg-surface-container hover:bg-surface-container-high text-on-surface border border-surface-dim">Action Required (7)</button>
<button class="px-2.5 py-1 rounded text-label-xs font-label-xs uppercase bg-surface-container hover:bg-surface-container-high text-on-surface border border-surface-dim">Resolved</button>
<button class="px-2.5 py-1 rounded text-label-xs font-label-xs uppercase bg-surface-container hover:bg-surface-container-high text-on-surface border border-surface-dim">Archived</button>
</div>
<!-- Dropdown Selects -->
<div class="flex items-center gap-1.5">
<select class="h-7 text-label-xs font-label-xs bg-surface text-on-surface rounded border border-surface-dim px-2 py-0 focus:outline-none focus:ring-1 focus:ring-secondary">
<option>Type: All Types</option>
<option>Risk (3)</option>
<option>Inventory (4)</option>
<option>Shipment (2)</option>
<option>Fleet (1)</option>
<option>Simulation (1)</option>
<option>Recommendation (2)</option>
<option>Security (1)</option>
</select>
<select class="h-7 text-label-xs font-label-xs bg-surface text-on-surface rounded border border-surface-dim px-2 py-0 focus:outline-none focus:ring-1 focus:ring-secondary">
<option>Priority: All</option>
<option>Critical (2)</option>
<option>High (5)</option>
<option>Medium (4)</option>
<option>Low / Info (3)</option>
</select>
</div>
</div>
<!-- Batch Selection Bar -->
<div class="bg-surface-container px-3 py-1.5 rounded flex items-center justify-between text-body-sm border border-surface-dim">
<div class="flex items-center gap-2">
<input checked="" class="rounded border-outline text-secondary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span class="text-label-xs font-label-xs text-on-surface font-semibold uppercase">4 Selected</span>
</div>
<div class="flex items-center gap-1">
<button class="px-2 py-0.5 rounded bg-surface-container-lowest hover:bg-surface-container-high text-on-surface border border-surface-dim text-label-xs font-label-xs uppercase">Mark as Read</button>
<button class="px-2 py-0.5 rounded bg-surface-container-lowest hover:bg-surface-container-high text-on-surface border border-surface-dim text-label-xs font-label-xs uppercase">Mark as Unread</button>
<button class="px-2 py-0.5 rounded bg-surface-container-lowest hover:bg-surface-container-high text-on-surface border border-surface-dim text-label-xs font-label-xs uppercase">Archive</button>
</div>
</div>
</div>
<!-- Notification Feed Rows -->
<div class="space-y-2">
<!-- ROW 1: SELECTED & UNREAD, CRITICAL -->
<div class="bg-surface-container-lowest p-3.5 rounded border-2 border-secondary relative hover:bg-surface-container-low transition-colors cursor-pointer ring-1 ring-secondary/20 shadow-sm">
<div class="flex items-start gap-3">
<input checked="" class="mt-1 rounded border-outline text-secondary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<div class="w-7 h-7 rounded bg-error-container text-on-error-container flex items-center justify-center shrink-0 border border-error/30 mt-0.5">
<span class="material-symbols-outlined fill text-error text-[16px]">emergency</span>
</div>
<div class="flex-1 min-w-0">
<div class="flex flex-wrap items-center justify-between gap-1 mb-0.5">
<div class="flex items-center gap-1.5 flex-wrap">
<span class="px-1.5 py-0.5 rounded bg-error text-on-error text-[9px] font-label-xs font-bold uppercase tracking-wider">CRITICAL</span>
<span class="text-label-sm font-label-sm text-primary font-bold">Fuel Stockout Risk Increased</span>
<span class="text-outline text-body-sm">—</span>
<span class="font-mono text-body-sm font-medium text-secondary">Forward Post Alpha (LOC-0042)</span>
</div>
<span class="text-[11px] font-mono text-outline shrink-0">6 min ago</span>
</div>
<p class="text-body-sm font-body-sm text-on-surface mb-2">Projected fuel stockout probability surged to 74% within 6 days due to severe Fotu La blizzard warning.</p>
<div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-surface-dim text-[11px]">
<div class="flex items-center gap-2 text-outline font-mono">
<span>Source: Risk Engine (Confidence: 94%)</span>
<span>•</span>
<span>Related: <span class="text-primary font-semibold">RISK-1042</span>, <span class="text-primary font-semibold">REC-2048</span></span>
</div>
<div class="flex items-center gap-1.5">
<button class="px-2 py-0.5 rounded bg-primary-container text-on-primary hover:bg-secondary text-[10px] font-label-xs uppercase">Review Risk</button>
<button class="px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface border border-surface-dim text-[10px] font-label-xs uppercase">View Location</button>
<button class="px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface border border-surface-dim text-[10px] font-label-xs uppercase">Review Rec</button>
</div>
</div>
</div>
</div>
</div>
<!-- ROW 2: UNREAD, HIGH -->
<div class="bg-surface-container-lowest p-3.5 rounded border border-surface-dim hover:border-secondary transition-colors cursor-pointer">
<div class="flex items-start gap-3">
<input checked="" class="mt-1 rounded border-outline text-secondary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<div class="w-7 h-7 rounded bg-[#d5e9be] text-on-tertiary-container flex items-center justify-center shrink-0 border border-secondary mt-0.5">
<span class="material-symbols-outlined text-[16px] text-secondary">local_shipping</span>
</div>
<div class="flex-1 min-w-0">
<div class="flex flex-wrap items-center justify-between gap-1 mb-0.5">
<div class="flex items-center gap-1.5 flex-wrap">
<span class="px-1.5 py-0.5 rounded bg-[#C49A45]/20 text-[#7A5B18] border border-[#C49A45] text-[9px] font-label-xs font-bold uppercase tracking-wider">HIGH</span>
<span class="text-label-sm font-label-sm text-primary font-bold">Shipment Delay Predicted</span>
<span class="text-outline text-body-sm">—</span>
<span class="font-mono text-body-sm text-on-surface">SHP-2048 (Arctic POL Bowser Sortie)</span>
</div>
<span class="text-[11px] font-mono text-outline shrink-0">18 min ago</span>
</div>
<p class="text-body-sm font-body-sm text-on-surface-variant mb-2">Estimated transit delay increased by +38 minutes on Corridor RTE-021 due to BRO snow-clearing backlog.</p>
<div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-surface-dim text-[11px]">
<div class="text-outline font-mono">
                      Source: Fleet GPS &amp; Weather Telemetry
                    </div>
<div class="flex items-center gap-1.5">
<button class="px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface border border-surface-dim text-[10px] font-label-xs uppercase">View Shipment SHP-2048</button>
<button class="px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface border border-surface-dim text-[10px] font-label-xs uppercase">Reroute Matrix</button>
</div>
</div>
</div>
</div>
</div>
<!-- ROW 3: UNREAD, HIGH -->
<div class="bg-surface-container-lowest p-3.5 rounded border border-surface-dim hover:border-secondary transition-colors cursor-pointer">
<div class="flex items-start gap-3">
<input checked="" class="mt-1 rounded border-outline text-secondary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<div class="w-7 h-7 rounded bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 border border-secondary mt-0.5">
<span class="material-symbols-outlined text-[16px]">smart_toy</span>
</div>
<div class="flex-1 min-w-0">
<div class="flex flex-wrap items-center justify-between gap-1 mb-0.5">
<div class="flex items-center gap-1.5 flex-wrap">
<span class="px-1.5 py-0.5 rounded bg-[#C49A45]/20 text-[#7A5B18] border border-[#C49A45] text-[9px] font-label-xs font-bold uppercase tracking-wider">HIGH</span>
<span class="text-label-sm font-label-sm text-primary font-bold">Recommendation Requires Review</span>
<span class="text-outline text-body-sm">—</span>
<span class="font-mono text-body-sm text-on-surface">REC-2048</span>
</div>
<span class="text-[11px] font-mono text-outline shrink-0">24 min ago</span>
</div>
<p class="text-body-sm font-body-sm text-on-surface-variant mb-2">AI Engine advises +2,500 L Arctic Diesel replenishment increase prior to pass freeze.</p>
<div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-surface-dim text-[11px]">
<div class="text-outline font-mono">
                      Source: AI Recommendation Center • Confidence: 94%
                    </div>
<div class="flex items-center gap-1.5">
<button class="px-2 py-0.5 rounded bg-primary-container text-on-primary hover:bg-secondary text-[10px] font-label-xs uppercase">Review Recommendation</button>
<button class="px-2 py-0.5 rounded bg-secondary hover:bg-primary-container text-on-secondary text-[10px] font-label-xs uppercase">Quick Approve</button>
</div>
</div>
</div>
</div>
</div>
<!-- ROW 4: READ, MEDIUM -->
<div class="bg-surface-container-low p-3.5 rounded border border-surface-dim hover:border-outline transition-colors cursor-pointer opacity-90">
<div class="flex items-start gap-3">
<input class="mt-1 rounded border-outline text-secondary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<div class="w-7 h-7 rounded bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0 border border-surface-dim mt-0.5">
<span class="material-symbols-outlined text-[16px]">science</span>
</div>
<div class="flex-1 min-w-0">
<div class="flex flex-wrap items-center justify-between gap-1 mb-0.5">
<div class="flex items-center gap-1.5 flex-wrap">
<span class="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant border border-surface-dim text-[9px] font-label-xs font-bold uppercase tracking-wider">MEDIUM</span>
<span class="text-label-sm font-label-sm text-on-surface font-semibold">Simulation Completed</span>
<span class="text-outline text-body-sm">—</span>
<span class="font-mono text-body-sm text-outline">SIM-0084 (Winter Surge Scenario)</span>
</div>
<span class="text-[11px] font-mono text-outline shrink-0">42 min ago</span>
</div>
<p class="text-body-sm font-body-sm text-on-surface-variant mb-2">Monte Carlo multi-echelon simulation completed with 6 operational impact points.</p>
<div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-surface-dim text-[11px]">
<div class="text-outline font-mono">
                      Source: Simulation Engine
                    </div>
<button class="px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface border border-surface-dim text-[10px] font-label-xs uppercase">View Simulation Results</button>
</div>
</div>
</div>
</div>
<!-- ROW 5: UNREAD, CRITICAL SECURITY -->
<div class="bg-surface-container-lowest p-3.5 rounded border border-error/50 hover:border-error transition-colors cursor-pointer">
<div class="flex items-start gap-3">
<input class="mt-1 rounded border-outline text-secondary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<div class="w-7 h-7 rounded bg-error-container text-on-error-container flex items-center justify-center shrink-0 border border-error/30 mt-0.5">
<span class="material-symbols-outlined fill text-error text-[16px]">gpp_maybe</span>
</div>
<div class="flex-1 min-w-0">
<div class="flex flex-wrap items-center justify-between gap-1 mb-0.5">
<div class="flex items-center gap-1.5 flex-wrap">
<span class="px-1.5 py-0.5 rounded bg-error text-on-error text-[9px] font-label-xs font-bold uppercase tracking-wider">CRITICAL</span>
<span class="text-label-sm font-label-sm text-primary font-bold">Cross-Sector Unauthorized Dispatch Attempt</span>
<span class="text-outline text-body-sm">—</span>
<span class="font-mono text-body-sm text-error">SHP-2051</span>
</div>
<span class="text-[11px] font-mono text-outline shrink-0">1h ago</span>
</div>
<p class="text-body-sm font-body-sm text-on-surface-variant mb-2">Sortie dispatch command blocked by DEF-L4 Enclave boundary. Security incident logged.</p>
<div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-surface-dim text-[11px]">
<div class="text-outline font-mono">
                      Source: DISA-IDS Gateway • Incident: <span class="text-error font-semibold">#SEC-403</span>
</div>
<button class="px-2 py-0.5 rounded bg-error text-on-error hover:bg-[#93000A] text-[10px] font-label-xs uppercase">Review Security Dossier #INV-09</button>
</div>
</div>
</div>
</div>
<!-- ROW 6: GROUPED NOTIFICATION, READ -->
<div class="bg-surface-container p-3 rounded border border-surface-dim">
<div class="flex items-start gap-3">
<input class="mt-1 rounded border-outline text-secondary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<div class="w-7 h-7 rounded bg-surface-container-highest text-on-surface-variant flex items-center justify-center shrink-0 border border-surface-dim mt-0.5">
<span class="material-symbols-outlined text-[16px]">folder</span>
</div>
<div class="flex-1 min-w-0">
<div class="flex items-center justify-between gap-1 mb-1">
<span class="text-label-sm font-label-sm text-primary font-semibold flex items-center gap-1.5">
                      3 Inventory Notifications — Bodhkharbu Depot <span class="font-mono text-outline font-normal">(DEP-0002)</span>
</span>
<span class="text-[11px] font-mono text-outline">2h ago</span>
</div>
<ul class="text-[11px] font-body-sm text-on-surface-variant space-y-1 my-1.5 pl-2 border-l border-surface-dim">
<li class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-outline"></span> Stock level decreased (-12%) in Bay 4</li>
<li class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-[#C49A45]"></span> Safety floor crossed for high-altitude rations</li>
<li class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> Consumption telemetry synchronized with HQ Northern Command</li>
</ul>
<div class="flex items-center justify-between pt-1">
<span class="text-[10px] font-mono text-outline">Cluster Hash: #GRP-DEP02-881</span>
<button class="px-2 py-0.5 rounded bg-surface-container-lowest hover:bg-surface-container-high text-on-surface border border-surface-dim text-[10px] font-label-xs uppercase">Expand Group (3)</button>
</div>
</div>
</div>
</div>
</div>
<!-- Pagination Bar -->
<div class="bg-surface-container-lowest p-2.5 rounded border border-surface-dim flex flex-col sm:flex-row items-center justify-between gap-2 text-body-sm">
<span class="text-label-xs font-mono text-outline">
              Showing 1–6 of 14 Unread (Total 438 archived) • Density: Compact
            </span>
<div class="flex items-center gap-1 font-mono text-label-xs">
<button class="w-6 h-6 rounded bg-surface-container text-on-surface flex items-center justify-center border border-surface-dim disabled:opacity-50" disabled="">&lt;</button>
<button class="w-6 h-6 rounded bg-primary-container text-on-primary font-bold flex items-center justify-center">1</button>
<button class="w-6 h-6 rounded bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center border border-surface-dim">2</button>
<button class="w-6 h-6 rounded bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center border border-surface-dim">3</button>
<span class="px-1 text-outline">...</span>
<button class="w-6 h-6 rounded bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center border border-surface-dim">8</button>
<button class="w-6 h-6 rounded bg-surface-container text-on-surface flex items-center justify-center border border-surface-dim">&gt;</button>
</div>
</div>
</div>
<!-- RIGHT COLUMN (~38% width -> 5 of 12 cols) - Interactive Notification Detail Drawer -->
<div class="lg:col-span-5 bg-surface-container-lowest rounded border border-surface-dim p-4 space-y-4 shadow-sm">
<!-- Detail Header -->
<div class="border-b border-surface-dim pb-3">
<div class="flex items-center justify-between mb-2">
<span class="px-2 py-0.5 rounded bg-error text-on-error text-[10px] font-label-xs font-bold uppercase tracking-wider">CRITICAL ESCALATION</span>
<div class="flex items-center gap-2">
<span class="text-[10px] font-mono text-outline">REF: NTF-2026-1042</span>
<button class="text-outline hover:text-on-surface" title="Close panel"><span class="material-symbols-outlined text-[16px]">close</span></button>
</div>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary font-bold">Fuel Stockout Risk Increased (Forward Post Alpha)</h3>
<div class="flex items-center gap-2 mt-1 text-[11px] font-mono text-outline">
<span class="text-error font-semibold">STATUS: UNREAD / ACTION REQUIRED</span>
<span>•</span>
<span>07 Oct 2026 · 14:42 IST</span>
</div>
</div>
<!-- Context & Narrative -->
<div class="bg-surface-container-low p-3 rounded border border-surface-dim">
<p class="text-[10px] font-label-xs text-outline uppercase tracking-wider mb-1">Operational Assessment Context</p>
<p class="text-body-sm font-body-sm text-on-surface leading-relaxed">
              Projected fuel consumption at Forward Post Alpha (<span class="font-mono text-secondary font-semibold">LOC-0042</span>) has increased by +25% amid high-altitude sub-zero drops (-22°C), driving projected inventory below the mandatory 2,000 L safety-stock floor by Day 5. Fotu La pass closure imminent.
            </p>
</div>
<!-- Key Metrics Grid -->
<div>
<p class="text-[10px] font-label-xs text-outline uppercase tracking-wider mb-2">Telemetry Snapshot &amp; Stock Projections</p>
<div class="grid grid-cols-2 gap-2 text-center">
<div class="bg-surface p-2 rounded border border-surface-dim">
<span class="text-[10px] font-label-xs text-outline uppercase">Current Inventory</span>
<p class="text-xl font-bold font-mono text-primary mt-0.5">4,200 <span class="text-xs font-normal text-outline">L</span></p>
</div>
<div class="bg-surface p-2 rounded border border-surface-dim">
<span class="text-[10px] font-label-xs text-outline uppercase">Daily Demand</span>
<p class="text-xl font-bold font-mono text-primary mt-0.5">850 <span class="text-xs font-normal text-outline">L/day</span></p>
</div>
<div class="bg-surface p-2 rounded border border-surface-dim">
<span class="text-[10px] font-label-xs text-outline uppercase">Safety Stock Floor</span>
<p class="text-xl font-bold font-mono text-[#7A5B18] mt-0.5">2,000 <span class="text-xs font-normal text-outline">L</span></p>
</div>
<div class="bg-surface p-2 rounded border border-surface-dim bg-error-container/20">
<span class="text-[10px] font-label-xs text-error uppercase font-bold">Stockout Prob</span>
<p class="text-xl font-bold font-mono text-error mt-0.5">74% <span class="text-[10px] font-normal text-error">(▲ +32%)</span></p>
</div>
</div>
<div class="mt-2 p-2 rounded bg-surface-container text-center border border-surface-dim">
<span class="text-[10px] font-label-xs text-outline uppercase">Estimated Time to Critical Impact</span>
<p class="text-lg font-bold font-mono text-error mt-0.5">6 DAYS, 14 HOURS</p>
</div>
</div>
<!-- Linked Platform Objects -->
<div>
<p class="text-[10px] font-label-xs text-outline uppercase tracking-wider mb-1.5">Linked Operational Gateways</p>
<div class="flex flex-wrap gap-1.5">
<a class="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-surface-dim text-label-xs font-mono text-primary flex items-center gap-1" href="#">
<span class="material-symbols-outlined text-[12px] text-error">warning</span> RISK-1042 (RL-29)
              </a>
<a class="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-surface-dim text-label-xs font-mono text-primary flex items-center gap-1" href="#">
<span class="material-symbols-outlined text-[12px] text-secondary">location_on</span> LOC-0042 Alpha (RL-09)
              </a>
<a class="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-surface-dim text-label-xs font-mono text-primary flex items-center gap-1" href="#">
<span class="material-symbols-outlined text-[12px] text-secondary">inventory</span> REC-2048 (+2.5k L, RL-36)
              </a>
<a class="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-surface-dim text-label-xs font-mono text-primary flex items-center gap-1" href="#">
<span class="material-symbols-outlined text-[12px] text-outline">route</span> RTE-021 Fotu La (RL-28)
              </a>
<a class="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-surface-dim text-label-xs font-mono text-primary flex items-center gap-1" href="#">
<span class="material-symbols-outlined text-[12px] text-outline">science</span> SIM-0084 (RL-33)
              </a>
</div>
</div>
<!-- Notification Lifecycle & Event Timeline -->
<div>
<p class="text-[10px] font-label-xs text-outline uppercase tracking-wider mb-2">Audit &amp; Dispatch Timeline</p>
<div class="space-y-2 border-l border-surface-dim ml-2 pl-3 text-[11px] font-mono">
<div class="relative">
<span class="absolute -left-[17px] top-1 w-2 h-2 rounded-full bg-outline"></span>
<p class="text-on-surface font-semibold">14:32 IST</p>
<p class="text-on-surface-variant font-body-sm">Simulation SIM-0084 batch executed with high-altitude pass variables.</p>
</div>
<div class="relative">
<span class="absolute -left-[17px] top-1 w-2 h-2 rounded-full bg-outline"></span>
<p class="text-on-surface font-semibold">14:35 IST</p>
<p class="text-on-surface-variant font-body-sm">Risk assessment model refreshed via automated ML pipeline.</p>
</div>
<div class="relative">
<span class="absolute -left-[17px] top-1 w-2 h-2 rounded-full bg-[#C49A45]"></span>
<p class="text-[#7A5B18] font-semibold">14:39 IST</p>
<p class="text-on-surface-variant font-body-sm">Stockout probability crossed configured 70% threshold.</p>
</div>
<div class="relative">
<span class="absolute -left-[17px] top-1 w-2 h-2 rounded-full bg-error"></span>
<p class="text-error font-semibold">14:42 IST</p>
<p class="text-on-surface-variant font-body-sm">Critical priority notification dispatched to Quartermaster channel.</p>
</div>
<div class="relative">
<span class="absolute -left-[17px] top-1 w-2 h-2 rounded-full bg-secondary"></span>
<p class="text-secondary font-semibold">14:46 IST (Current)</p>
<p class="text-on-surface-variant font-body-sm">Viewed in Notification Center by Lt. Col. Arjun Mehta.</p>
</div>
</div>
</div>
<!-- Operational Action Triggers -->
<div class="pt-3 border-t border-surface-dim space-y-2">
<div class="grid grid-cols-2 gap-2">
<button class="h-9 px-3 bg-primary-container hover:bg-secondary text-on-primary rounded text-label-sm font-label-sm uppercase flex items-center justify-center gap-1 transition-colors">
<span class="material-symbols-outlined text-[15px]">crisis_alert</span>
                Review Risk RL-30
              </button>
<button class="h-9 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface rounded text-label-sm font-label-sm uppercase border border-surface-dim flex items-center justify-center gap-1 transition-colors">
<span class="material-symbols-outlined text-[15px]">assignment_turned_in</span>
                Inspect REC-2048
              </button>
</div>
<div class="flex items-center gap-2">
<button class="flex-1 h-8 px-2 bg-surface hover:bg-surface-container text-on-surface rounded text-label-xs font-label-xs uppercase border border-surface-dim flex items-center justify-center gap-1 transition-colors">
<span class="material-symbols-outlined text-[14px]">check_circle</span>
                Mark as Resolved
              </button>
<button class="h-8 px-3 bg-surface hover:bg-surface-container text-outline hover:text-error rounded text-label-xs font-label-xs uppercase border border-surface-dim flex items-center justify-center gap-1 transition-colors">
<span class="material-symbols-outlined text-[14px]">archive</span>
                Archive
              </button>
</div>
</div>
</div>
</section>
</div>
<!-- ================= 5. DEFENSE COMPLIANCE FOOTER ================= -->
<footer class="w-full bg-surface-container-lowest border-t border-surface-dim px-gutter-desktop py-2.5 mt-6">
<div class="flex flex-col md:flex-row items-center justify-between gap-2 text-[10px] font-mono text-outline text-center md:text-left">
<div>
<span>DEFENCE LOGISTICS INFORMATION SYSTEM (DLIS)</span>
<span class="mx-1">•</span>
<span>AUDITABLE NOTIFICATION BUS REF: <span class="text-primary font-semibold">NTF-BUS-042</span></span>
<span class="mx-1">•</span>
<span>MIL-STD-810H &amp; DISA STIG COMPLIANT</span>
</div>
<div class="flex items-center gap-3">
<span class="text-secondary font-semibold">ENCRYPTION: AES-256-GCM</span>
<span>•</span>
<span class="text-primary font-bold">HQ 14 CORPS LOGISTICS COMMAND</span>
</div>
</div>
</footer>
</main>`;
