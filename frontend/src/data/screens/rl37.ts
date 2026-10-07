// Screen: RL-37 — User Management
// Route: /admin/users
export const rl37Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto p-gutter-desktop flex-1 flex flex-col gap-space-lg pb-12">
<!-- 3. OPERATIONAL KPI SUMMARY STRIP -->
<section class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
<!-- KPI 1 -->
<div class="bg-surface-container-lowest p-space-md rounded border border-outline-variant flex flex-col justify-between">
<div class="flex items-center justify-between text-outline text-[11px] font-semibold uppercase tracking-wider">
<span>Total Authorized</span>
<span class="material-symbols-outlined text-[16px]" data-icon="group">group</span>
</div>
<div class="mt-2 flex items-baseline gap-2">
<span class="text-headline-lg font-headline-lg font-bold text-primary tabular-nums">186</span>
<span class="text-label-xs text-outline font-mono">USERS</span>
</div>
<div class="mt-1 text-[11px] text-on-surface-variant flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> 100% Provisioned
            </div>
</div>
<!-- KPI 2 -->
<div class="bg-surface-container-lowest p-space-md rounded border border-outline-variant flex flex-col justify-between">
<div class="flex items-center justify-between text-outline text-[11px] font-semibold uppercase tracking-wider">
<span>Active Operators</span>
<span class="material-symbols-outlined text-[16px] text-secondary" data-icon="verified">verified</span>
</div>
<div class="mt-2 flex items-baseline gap-2">
<span class="text-headline-lg font-headline-lg font-bold text-secondary tabular-nums">164</span>
<span class="text-label-xs text-secondary font-mono">88.2%</span>
</div>
<div class="mt-1 text-[11px] text-secondary font-medium">
              Access Nominal
            </div>
</div>
<!-- KPI 3 -->
<div class="bg-surface-container-lowest p-space-md rounded border border-outline-variant flex flex-col justify-between">
<div class="flex items-center justify-between text-outline text-[11px] font-semibold uppercase tracking-wider">
<span>Pending Invites</span>
<span class="material-symbols-outlined text-[16px] text-on-surface-variant" data-icon="hourglass_top">hourglass_top</span>
</div>
<div class="mt-2 flex items-baseline gap-2">
<span class="text-headline-lg font-headline-lg font-bold text-on-surface tabular-nums">9</span>
<span class="text-label-xs text-outline font-mono">QUEUED</span>
</div>
<div class="mt-1 text-[11px] text-on-surface-variant truncate" title="Awaiting L3 Token Verification">
              Awaiting L3 Token Verif.
            </div>
</div>
<!-- KPI 4 -->
<div class="bg-surface-container-lowest p-space-md rounded border border-error/30 flex flex-col justify-between">
<div class="flex items-center justify-between text-error text-[11px] font-semibold uppercase tracking-wider">
<span>Suspended</span>
<span class="material-symbols-outlined text-[16px] text-error" data-icon="gavel">gavel</span>
</div>
<div class="mt-2 flex items-baseline gap-2">
<span class="text-headline-lg font-headline-lg font-bold text-error tabular-nums">7</span>
<span class="text-label-xs text-error font-mono">FLAGGED</span>
</div>
<div class="mt-1 text-[11px] text-error font-medium">
              Under Security Hold
            </div>
</div>
<!-- KPI 5 -->
<div class="bg-surface-container-lowest p-space-md rounded border border-outline-variant flex flex-col justify-between">
<div class="flex items-center justify-between text-outline text-[11px] font-semibold uppercase tracking-wider">
<span>Inactive</span>
<span class="material-symbols-outlined text-[16px]" data-icon="bedtime">bedtime</span>
</div>
<div class="mt-2 flex items-baseline gap-2">
<span class="text-headline-lg font-headline-lg font-bold text-on-surface-variant tabular-nums">6</span>
<span class="text-label-xs text-outline font-mono">&gt;60D</span>
</div>
<div class="mt-1 text-[11px] text-outline">
              Dormant Credentials
            </div>
</div>
<!-- KPI 6 -->
<div class="bg-surface-container-lowest p-space-md rounded border border-outline-variant flex flex-col justify-between">
<div class="flex items-center justify-between text-outline text-[11px] font-semibold uppercase tracking-wider">
<span>Sys Administrators</span>
<span class="material-symbols-outlined text-[16px]" data-icon="admin_panel_settings">admin_panel_settings</span>
</div>
<div class="mt-2 flex items-baseline gap-2">
<span class="text-headline-lg font-headline-lg font-bold text-primary tabular-nums">12</span>
<span class="text-label-xs text-outline font-mono">ROOT/ORG</span>
</div>
<div class="mt-1 text-[11px] text-secondary font-medium">
              Key Holders Dual-Auth
            </div>
</div>
</section>
<!-- Access Risk Callout Bar -->
<div class="bg-surface-container-low border border-outline-variant rounded px-space-md py-2 flex flex-wrap items-center justify-between gap-2">
<div class="flex items-center gap-3 text-body-sm font-body-sm">
<span class="flex items-center gap-1 font-bold text-primary">
<span class="material-symbols-outlined text-secondary text-[18px]" data-icon="security_update_warning">security_update_warning</span>
              Access Risk Indicators:
            </span>
<span class="text-on-surface-variant">Users Without MFA: <strong class="text-primary font-mono">4</strong></span>
<span class="text-outline">•</span>
<span class="text-on-surface-variant">Dormant Accounts: <strong class="text-primary font-mono">8</strong></span>
<span class="text-outline">•</span>
<span class="text-on-surface-variant">Recently Privileged (48h): <strong class="text-primary font-mono">3</strong></span>
</div>
<button class="text-label-xs font-label-xs font-bold text-secondary hover:text-primary uppercase tracking-wider flex items-center gap-1">
<span>Review Security Risks</span>
<span class="material-symbols-outlined text-[14px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<!-- 4. SEARCH & MULTI-DOMAIN FILTER TOOLBAR -->
<div class="bg-surface-container-lowest border border-outline-variant rounded p-space-md flex flex-col gap-space-sm">
<!-- Upper Search & Dropdowns -->
<div class="flex flex-wrap items-center gap-2">
<!-- Search field -->
<div class="relative flex-1 min-w-[280px]">
<span class="material-symbols-outlined absolute left-2.5 top-2.5 text-outline text-[18px]" data-icon="search">search</span>
<input class="w-full h-9 pl-9 pr-3 bg-surface text-on-surface text-body-sm border border-outline-variant rounded focus:border-primary focus:ring-0 placeholder:text-outline font-body-sm" placeholder="Search full name, official email, military ID (USR-XXXX)..." type="text" value="Arjun Mehta"/>
</div>
<!-- Filters -->
<select class="h-9 px-2.5 bg-surface text-body-sm text-on-surface border border-outline-variant rounded font-body-sm focus:border-primary focus:ring-0">
<option>Status: All (186)</option>
<option selected="">Status: Active (164)</option>
<option>Status: Pending (9)</option>
<option>Status: Suspended (7)</option>
<option>Status: Inactive (6)</option>
</select>
<select class="h-9 px-2.5 bg-surface text-body-sm text-on-surface border border-outline-variant rounded font-body-sm focus:border-primary focus:ring-0">
<option>Role: All Roles</option>
<option>System Administrator</option>
<option selected="">Logistics Officer</option>
<option>Procurement Officer</option>
<option>Fleet Manager</option>
<option>Analyst</option>
</select>
<select class="h-9 px-2.5 bg-surface text-body-sm text-on-surface border border-outline-variant rounded font-body-sm focus:border-primary focus:ring-0">
<option>Command: All Commands</option>
<option selected="">Northern Command</option>
<option>Western Command</option>
<option>Central Depot</option>
<option>Eastern Theater</option>
</select>
<select class="h-9 px-2.5 bg-surface text-body-sm text-on-surface border border-outline-variant rounded font-body-sm focus:border-primary focus:ring-0">
<option>Location: All Stations</option>
<option>Forward Post Alpha</option>
<option>Leh HQ</option>
<option>Depot Bravo</option>
<option>Sector IV-B</option>
</select>
<select class="h-9 px-2.5 bg-surface text-body-sm text-on-surface border border-outline-variant rounded font-body-sm focus:border-primary focus:ring-0">
<option>MFA: Hardware &amp; App</option>
<option>MFA: Hardware Token</option>
<option>MFA: Authenticator</option>
<option>MFA: Pending/Disabled</option>
</select>
<button class="h-9 px-3 bg-surface hover:bg-surface-container-high text-on-surface-variant border border-outline-variant rounded text-label-xs uppercase font-bold tracking-wider flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]" data-icon="filter_alt_off">filter_alt_off</span>
<span>Reset</span>
</button>
</div>
<!-- Multi-action Bulk Operation Row -->
<div class="pt-2 border-t border-surface-container flex flex-wrap items-center justify-between gap-2 text-label-xs font-label-xs">
<div class="flex items-center gap-2">
<span class="px-2 py-0.5 bg-secondary-container text-on-secondary-container font-mono font-bold rounded">1 Selected</span>
<button class="text-secondary hover:underline font-semibold">Select All 186 Personnel</button>
</div>
<div class="flex items-center gap-1.5">
<button class="px-2.5 py-1 bg-surface-container-high hover:bg-surface-variant text-on-surface border border-outline-variant rounded">Assign Role</button>
<button class="px-2.5 py-1 bg-surface-container-high hover:bg-surface-variant text-on-surface border border-outline-variant rounded">Assign Org</button>
<button class="px-2.5 py-1 bg-error-container hover:bg-red-200 text-on-error-container border border-error/30 rounded">Suspend Access</button>
<button class="px-2.5 py-1 bg-surface-container-high hover:bg-surface-variant text-on-surface border border-outline-variant rounded">Reactivate</button>
<button class="px-2.5 py-1 bg-surface-container-high hover:bg-surface-variant text-on-surface border border-outline-variant rounded">Export Selected</button>
</div>
</div>
</div>
<!-- 5. SPLIT WORKSPACE: DIRECTORY TABLE (60%) & INTERACTIVE DETAIL DRAWER (40%) -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
<!-- LEFT: High-Density User Directory Table (7 of 12 cols = ~58-60%) -->
<div class="lg:col-span-7 bg-surface-container-lowest border border-outline-variant rounded flex flex-col overflow-hidden shadow-sm">
<div class="px-space-md py-2.5 bg-surface-container-low border-b border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="text-label-sm font-label-sm uppercase tracking-wider text-primary font-bold">Authorized Military Personnel</span>
<span class="text-[11px] font-mono text-outline">(Active Query: 7 records)</span>
</div>
<div class="flex items-center gap-2 text-label-xs text-outline">
<span>Density: High</span>
<span class="material-symbols-outlined text-[16px]" data-icon="table_rows">table_rows</span>
</div>
</div>
<!-- Responsive Table Wrapper -->
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container border-b-2 border-secondary text-primary font-headline-sm text-[11px] uppercase tracking-wider font-semibold">
<th class="py-2.5 px-3 w-8">
<input class="rounded border-outline text-primary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
</th>
<th class="py-2.5 px-3">Personnel / Identifier</th>
<th class="py-2.5 px-3">Role</th>
<th class="py-2.5 px-3">Command &amp; Location</th>
<th class="py-2.5 px-3">Auth / MFA</th>
<th class="py-2.5 px-3">Status</th>
<th class="py-2.5 px-3 text-right">Last Telemetry</th>
<th class="py-2.5 px-3 text-center">Action</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant text-body-sm font-body-sm">
<!-- ROW 1: Arjun Mehta (ACTIVE & SELECTED ROW) -->
<tr class="bg-secondary-container/20 border-l-4 border-l-secondary hover:bg-secondary-container/30 transition-colors cursor-pointer">
<td class="py-2.5 px-3">
<input checked="" class="rounded border-secondary text-secondary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
</td>
<td class="py-2.5 px-3">
<div class="flex flex-col">
<span class="font-bold text-primary flex items-center gap-1">
                          Arjun Mehta
                          <span class="material-symbols-outlined text-[14px] text-secondary filled" data-icon="verified_user" title="Hardware Token Verified">verified_user</span>
</span>
<span class="text-[11px] font-mono text-outline">USR-0148 • arjun.mehta@army.logix.mil</span>
</div>
</td>
<td class="py-2.5 px-3">
<span class="px-2 py-0.5 text-[11px] font-semibold bg-surface-container text-on-surface rounded border border-outline-variant">
                        Logistics Officer
                      </span>
</td>
<td class="py-2.5 px-3">
<div class="flex flex-col text-[11px]">
<span class="font-medium text-on-surface">Northern Command</span>
<span class="text-outline">Post Alpha (LOC-0042)</span>
</div>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-secondary">
<span class="material-symbols-outlined text-[14px]" data-icon="key">key</span> HW-FIDO2
                      </span>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-xs font-bold bg-secondary-container text-on-secondary-container border border-secondary/30">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> ACTIVE
                      </span>
</td>
<td class="py-2.5 px-3 text-right font-mono text-[11px] text-on-surface">
                      4m ago
                    </td>
<td class="py-2.5 px-3 text-center">
<button class="p-1 hover:bg-surface-container rounded text-outline hover:text-primary">
<span class="material-symbols-outlined text-[18px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- ROW 2: Priya Sharma -->
<tr class="hover:bg-surface-container-low transition-colors cursor-pointer">
<td class="py-2.5 px-3">
<input class="rounded border-outline-variant text-primary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
</td>
<td class="py-2.5 px-3">
<div class="flex flex-col">
<span class="font-bold text-on-surface">Priya Sharma</span>
<span class="text-[11px] font-mono text-outline">USR-0092 • p.sharma@depot.logix.mil</span>
</div>
</td>
<td class="py-2.5 px-3">
<span class="px-2 py-0.5 text-[11px] font-semibold bg-surface-container text-on-surface rounded border border-outline-variant">
                        Procurement Officer
                      </span>
</td>
<td class="py-2.5 px-3">
<div class="flex flex-col text-[11px]">
<span class="font-medium text-on-surface">Central Depot</span>
<span class="text-outline">Depot Bravo (DEP-0002)</span>
</div>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center gap-1 text-[11px] font-mono text-on-surface-variant">
<span class="material-symbols-outlined text-[14px]" data-icon="smartphone">smartphone</span> App TOTP
                      </span>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-xs font-bold bg-secondary-container text-on-secondary-container border border-secondary/30">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> ACTIVE
                      </span>
</td>
<td class="py-2.5 px-3 text-right font-mono text-[11px] text-outline">
                      18m ago
                    </td>
<td class="py-2.5 px-3 text-center">
<button class="p-1 hover:bg-surface-container rounded text-outline hover:text-primary">
<span class="material-symbols-outlined text-[18px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- ROW 3: Rohan Singh -->
<tr class="hover:bg-surface-container-low transition-colors cursor-pointer">
<td class="py-2.5 px-3">
<input class="rounded border-outline-variant text-primary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
</td>
<td class="py-2.5 px-3">
<div class="flex flex-col">
<span class="font-bold text-on-surface">Rohan Singh</span>
<span class="text-[11px] font-mono text-outline">USR-0215 • rohan.singh@trans.logix.mil</span>
</div>
</td>
<td class="py-2.5 px-3">
<span class="px-2 py-0.5 text-[11px] font-semibold bg-surface-container text-on-surface rounded border border-outline-variant">
                        Fleet Manager
                      </span>
</td>
<td class="py-2.5 px-3">
<div class="flex flex-col text-[11px]">
<span class="font-medium text-on-surface">Transport Unit</span>
<span class="text-outline">Sector Bravo Core</span>
</div>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center gap-1 text-[11px] font-mono text-secondary">
<span class="material-symbols-outlined text-[14px]" data-icon="key">key</span> HW-Token
                      </span>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-xs font-bold bg-secondary-container text-on-secondary-container border border-secondary/30">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> ACTIVE
                      </span>
</td>
<td class="py-2.5 px-3 text-right font-mono text-[11px] text-outline">
                      42m ago
                    </td>
<td class="py-2.5 px-3 text-center">
<button class="p-1 hover:bg-surface-container rounded text-outline hover:text-primary">
<span class="material-symbols-outlined text-[18px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- ROW 4: Major Vikram Rathore -->
<tr class="hover:bg-surface-container-low transition-colors cursor-pointer">
<td class="py-2.5 px-3">
<input class="rounded border-outline-variant text-primary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
</td>
<td class="py-2.5 px-3">
<div class="flex flex-col">
<span class="font-bold text-on-surface flex items-center gap-1">
                          Maj. Vikram Rathore
                          <span class="material-symbols-outlined text-[14px] text-primary" data-icon="admin_panel_settings">admin_panel_settings</span>
</span>
<span class="text-[11px] font-mono text-outline">USR-0034 • v.rathore@hq.logix.mil</span>
</div>
</td>
<td class="py-2.5 px-3">
<span class="px-2 py-0.5 text-[11px] font-semibold bg-primary-container text-on-primary rounded border border-primary">
                        System Admin
                      </span>
</td>
<td class="py-2.5 px-3">
<div class="flex flex-col text-[11px]">
<span class="font-medium text-on-surface">HQ Command</span>
<span class="text-outline">Leh Center (SEC-01)</span>
</div>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-primary">
<span class="material-symbols-outlined text-[14px]" data-icon="vpn_key">vpn_key</span> Dual-Key
                      </span>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-xs font-bold bg-secondary-container text-on-secondary-container border border-secondary/30">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> ACTIVE
                      </span>
</td>
<td class="py-2.5 px-3 text-right font-mono text-[11px] text-outline">
                      1h ago
                    </td>
<td class="py-2.5 px-3 text-center">
<button class="p-1 hover:bg-surface-container rounded text-outline hover:text-primary">
<span class="material-symbols-outlined text-[18px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- ROW 5: Ankit Rao -->
<tr class="hover:bg-surface-container-low transition-colors cursor-pointer">
<td class="py-2.5 px-3">
<input class="rounded border-outline-variant text-primary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
</td>
<td class="py-2.5 px-3">
<div class="flex flex-col">
<span class="font-bold text-on-surface">Ankit Rao</span>
<span class="text-[11px] font-mono text-outline">USR-0309 • ankit.rao@plan.logix.mil</span>
</div>
</td>
<td class="py-2.5 px-3">
<span class="px-2 py-0.5 text-[11px] font-semibold bg-surface-container text-on-surface rounded border border-outline-variant">
                        Analyst
                      </span>
</td>
<td class="py-2.5 px-3">
<div class="flex flex-col text-[11px]">
<span class="font-medium text-on-surface">Planning Cell</span>
<span class="text-outline">Central HQ</span>
</div>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center gap-1 text-[11px] font-mono text-outline">
<span class="material-symbols-outlined text-[14px]" data-icon="pending">pending</span> Pending
                      </span>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-xs font-bold bg-surface-container-high text-on-surface-variant border border-outline-variant">
<span class="w-1.5 h-1.5 rounded-full bg-outline"></span> PENDING (48H)
                      </span>
</td>
<td class="py-2.5 px-3 text-right font-mono text-[11px] text-outline">
                      Never
                    </td>
<td class="py-2.5 px-3 text-center">
<button class="p-1 hover:bg-surface-container rounded text-outline hover:text-primary">
<span class="material-symbols-outlined text-[18px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- ROW 6: Devendra Joshi (SUSPENDED) -->
<tr class="hover:bg-error-container/20 transition-colors cursor-pointer bg-error-container/10">
<td class="py-2.5 px-3">
<input class="rounded border-outline-variant text-primary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
</td>
<td class="py-2.5 px-3">
<div class="flex flex-col">
<span class="font-bold text-on-surface">Devendra Joshi</span>
<span class="text-[11px] font-mono text-outline">USR-0182 • d.joshi@fwd.logix.mil</span>
</div>
</td>
<td class="py-2.5 px-3">
<span class="px-2 py-0.5 text-[11px] font-semibold bg-surface-container text-on-surface rounded border border-outline-variant">
                        Logistics Officer
                      </span>
</td>
<td class="py-2.5 px-3">
<div class="flex flex-col text-[11px]">
<span class="font-medium text-on-surface">Western Border Div</span>
<span class="text-outline">Post Tango</span>
</div>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center gap-1 text-[11px] font-mono text-outline">
<span class="material-symbols-outlined text-[14px]" data-icon="lock">lock</span> Revoked
                      </span>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-xs font-bold bg-error-container text-on-error-container border border-error/30">
<span class="w-1.5 h-1.5 rounded-full bg-error"></span> SUSPENDED
                      </span>
</td>
<td class="py-2.5 px-3 text-right font-mono text-[11px] text-error font-medium">
                      14 Oct Hold
                    </td>
<td class="py-2.5 px-3 text-center">
<button class="p-1 hover:bg-surface-container rounded text-outline hover:text-primary">
<span class="material-symbols-outlined text-[18px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- ROW 7: Sunita Deshmukh (INACTIVE) -->
<tr class="hover:bg-surface-container-low transition-colors cursor-pointer">
<td class="py-2.5 px-3">
<input class="rounded border-outline-variant text-primary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
</td>
<td class="py-2.5 px-3">
<div class="flex flex-col">
<span class="font-bold text-on-surface-variant">Sunita Deshmukh</span>
<span class="text-[11px] font-mono text-outline">USR-0261 • s.deshmukh@supply.logix.mil</span>
</div>
</td>
<td class="py-2.5 px-3">
<span class="px-2 py-0.5 text-[11px] font-semibold bg-surface-container text-on-surface-variant rounded border border-outline-variant">
                        Procurement Officer
                      </span>
</td>
<td class="py-2.5 px-3">
<div class="flex flex-col text-[11px]">
<span class="font-medium text-on-surface-variant">Forward Supply Depot</span>
<span class="text-outline">Leh Hub</span>
</div>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center gap-1 text-[11px] font-mono text-outline">
<span class="material-symbols-outlined text-[14px]" data-icon="check_circle">check_circle</span> Active Token
                      </span>
</td>
<td class="py-2.5 px-3">
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-xs font-bold bg-surface-container text-outline border border-outline-variant">
<span class="w-1.5 h-1.5 rounded-full bg-outline"></span> INACTIVE
                      </span>
</td>
<td class="py-2.5 px-3 text-right font-mono text-[11px] text-outline">
                      64d ago
                    </td>
<td class="py-2.5 px-3 text-center">
<button class="p-1 hover:bg-surface-container rounded text-outline hover:text-primary">
<span class="material-symbols-outlined text-[18px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Table Pagination Bar -->
<div class="p-space-md border-t border-outline-variant bg-surface-container-low flex flex-wrap items-center justify-between gap-2 text-label-xs font-label-xs">
<span class="text-on-surface-variant">
                Showing <strong class="font-mono text-primary font-bold">1–7</strong> of <strong class="font-mono text-primary font-bold">186</strong> users • Page <strong class="font-mono text-primary">1</strong> of 27
              </span>
<div class="flex items-center gap-2">
<span class="text-outline">Rows:</span>
<select class="h-7 px-1.5 bg-surface text-[11px] border border-outline-variant rounded">
<option>25 per page</option>
<option>50 per page</option>
<option>100 per page</option>
</select>
<div class="flex items-center space-x-1">
<button class="w-7 h-7 flex items-center justify-center bg-surface border border-outline-variant rounded text-outline opacity-50 cursor-not-allowed" disabled="">
<span class="material-symbols-outlined text-[14px]" data-icon="chevron_left">chevron_left</span>
</button>
<button class="w-7 h-7 flex items-center justify-center bg-primary text-on-primary rounded font-mono font-bold">1</button>
<button class="w-7 h-7 flex items-center justify-center bg-surface hover:bg-surface-container border border-outline-variant rounded font-mono text-on-surface">2</button>
<button class="w-7 h-7 flex items-center justify-center bg-surface hover:bg-surface-container border border-outline-variant rounded font-mono text-on-surface">3</button>
<span class="text-outline">...</span>
<button class="w-7 h-7 flex items-center justify-center bg-surface hover:bg-surface-container border border-outline-variant rounded font-mono text-on-surface">27</button>
<button class="w-7 h-7 flex items-center justify-center bg-surface hover:bg-surface-container border border-outline-variant rounded text-on-surface">
<span class="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
<!-- RIGHT: Interactive User Detail Drawer (~40-42%) -->
<div class="lg:col-span-5 flex flex-col gap-space-md">
<!-- Main Detail Dossier Card -->
<div class="bg-surface-container-lowest border border-outline-variant rounded overflow-hidden">
<!-- Card Header & Badge -->
<div class="p-space-md bg-surface-container-low border-b border-outline-variant flex items-start justify-between">
<div class="flex items-center gap-3">
<div class="w-12 h-12 rounded bg-primary-container text-on-primary font-bold flex items-center justify-center text-headline-sm border border-primary">
                    AM
                  </div>
<div class="flex flex-col">
<div class="flex items-center gap-2">
<span class="text-headline-sm font-headline-sm font-bold text-primary">Arjun Mehta</span>
<span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-secondary-container text-on-secondary-container border border-secondary/30">
                        ACTIVE
                      </span>
</div>
<div class="flex items-center gap-2 text-label-xs font-mono text-on-surface-variant">
<span>USR-0148</span>
<span class="text-outline">•</span>
<span class="text-secondary font-bold">SEC-CLEARANCE: LEVEL 3 (SECRET)</span>
</div>
</div>
</div>
<div class="flex items-center gap-1">
<button class="p-1.5 text-outline hover:text-primary rounded hover:bg-surface-container" title="Print Dossier">
<span class="material-symbols-outlined text-[18px]" data-icon="print">print</span>
</button>
<button class="p-1.5 text-outline hover:text-primary rounded hover:bg-surface-container" title="Close Drawer">
<span class="material-symbols-outlined text-[18px]" data-icon="close">close</span>
</button>
</div>
</div>
<!-- Lifecycle Progression Visualizer -->
<div class="px-space-md py-2.5 bg-surface border-b border-outline-variant">
<div class="text-[10px] font-mono text-outline uppercase tracking-wider mb-1.5">Identity Provisioning Lifecycle</div>
<div class="grid grid-cols-4 gap-1 items-center text-center">
<div class="bg-secondary-container text-on-secondary-container py-1 rounded text-[10px] font-mono font-bold">
                    1. Invited (22 Aug)
                  </div>
<div class="bg-secondary-container text-on-secondary-container py-1 rounded text-[10px] font-mono font-bold">
                    2. Token (24 Aug)
                  </div>
<div class="bg-secondary text-on-secondary py-1 rounded text-[10px] font-mono font-bold">
                    3. Nominal (Active)
                  </div>
<div class="bg-surface-container-high text-outline py-1 rounded text-[10px] font-mono">
                    4. Post Deploy
                  </div>
</div>
</div>
<!-- Detail Panels Accordion / Sections -->
<div class="p-space-md space-y-space-md text-body-sm">
<!-- Section 1: Identity & Assignment -->
<div>
<div class="text-label-xs font-label-xs uppercase tracking-wider font-bold text-primary pb-1.5 border-b border-surface-container flex items-center justify-between">
<span>1. Identity &amp; Command Unit</span>
<span class="text-[10px] font-mono text-outline">LOC-NODE 0042</span>
</div>
<div class="grid grid-cols-2 gap-2 pt-2 text-[12px]">
<div>
<span class="text-outline block text-[10px] uppercase font-mono">Official Email</span>
<span class="font-medium text-on-surface truncate block">arjun.mehta@army.logix.mil</span>
</div>
<div>
<span class="text-outline block text-[10px] uppercase font-mono">Direct Mil-Comms</span>
<span class="font-mono text-on-surface">TAC-NET: #782-901</span>
</div>
<div>
<span class="text-outline block text-[10px] uppercase font-mono">Assigned Command</span>
<span class="font-medium text-on-surface">HQ Northern Command // Sector IV-B</span>
</div>
<div>
<span class="text-outline block text-[10px] uppercase font-mono">Duty Station</span>
<span class="font-medium text-on-surface">LOC-0042 Forward Post Alpha</span>
</div>
</div>
</div>
<!-- Section 2: Access Scope & Effective Modules -->
<div>
<div class="text-label-xs font-label-xs uppercase tracking-wider font-bold text-primary pb-1.5 border-b border-surface-container flex items-center justify-between">
<span>2. Access Scope &amp; Role Permissions</span>
<span class="text-secondary font-mono text-[11px] font-bold">Logistics Officer</span>
</div>
<div class="pt-2 text-[12px]">
<div class="mb-2">
<span class="text-outline text-[10px] uppercase font-mono block">Geographical Boundary Scope</span>
<span class="font-medium text-on-surface">Northern Logistics Network (14 Frontline Nodes, 3 Depots)</span>
</div>
<div class="mb-2">
<span class="text-outline text-[10px] uppercase font-mono block mb-1">Accessible Functional Modules (9)</span>
<div class="flex flex-wrap gap-1">
<span class="px-1.5 py-0.5 text-[10px] bg-secondary-container/40 text-on-secondary-container rounded font-medium border border-secondary/20">Command Dashboard</span>
<span class="px-1.5 py-0.5 text-[10px] bg-secondary-container/40 text-on-secondary-container rounded font-medium border border-secondary/20">GIS Command Center</span>
<span class="px-1.5 py-0.5 text-[10px] bg-secondary-container/40 text-on-secondary-container rounded font-medium border border-secondary/20">Inventory Overview</span>
<span class="px-1.5 py-0.5 text-[10px] bg-secondary-container/40 text-on-secondary-container rounded font-medium border border-secondary/20">Demand Forecasting</span>
<span class="px-1.5 py-0.5 text-[10px] bg-secondary-container/40 text-on-secondary-container rounded font-medium border border-secondary/20">Fleet Overview</span>
<span class="px-1.5 py-0.5 text-[10px] bg-secondary-container/40 text-on-secondary-container rounded font-medium border border-secondary/20">Shipments</span>
<span class="px-1.5 py-0.5 text-[10px] bg-secondary-container/40 text-on-secondary-container rounded font-medium border border-secondary/20">Route Intel</span>
<span class="px-1.5 py-0.5 text-[10px] bg-secondary-container/40 text-on-secondary-container rounded font-medium border border-secondary/20">Risk Intel</span>
<span class="px-1.5 py-0.5 text-[10px] bg-secondary-container/40 text-on-secondary-container rounded font-medium border border-secondary/20">Simulation Center</span>
</div>
</div>
<div>
<span class="text-outline text-[10px] uppercase font-mono block mb-1">Restricted Administrative Modules</span>
<div class="flex flex-wrap gap-1">
<span class="px-1.5 py-0.5 text-[10px] bg-surface-container-high text-outline rounded line-through">User Management</span>
<span class="px-1.5 py-0.5 text-[10px] bg-surface-container-high text-outline rounded line-through">Roles &amp; Permissions</span>
<span class="px-1.5 py-0.5 text-[10px] bg-surface-container-high text-outline rounded line-through">System Config</span>
</div>
</div>
<div class="mt-2 pt-1">
<a class="text-[11px] font-bold text-secondary hover:text-primary flex items-center gap-1" href="#">
<span>View Effective Permissions &amp; Boundary Matrix (RL-38)</span>
<span class="material-symbols-outlined text-[13px]" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</div>
<!-- Section 3: Active Sessions & Hardware Bindings -->
<div>
<div class="text-label-xs font-label-xs uppercase tracking-wider font-bold text-primary pb-1.5 border-b border-surface-container flex items-center justify-between">
<span>3. Active Authenticated Sessions</span>
<button class="text-[11px] font-bold text-error hover:underline">Revoke All Sessions</button>
</div>
<div class="space-y-2 pt-2">
<div class="p-2 bg-surface rounded border border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="desktop_windows">desktop_windows</span>
<div class="text-[11px]">
<div class="font-bold text-on-surface">Chrome 128 / macOS • Leh Station HQ</div>
<div class="text-outline font-mono">IP: 10.24.12.8 • Active 4m ago</div>
</div>
</div>
<button class="px-2 py-0.5 text-[10px] font-bold bg-surface-container hover:bg-surface-container-high text-on-surface border border-outline-variant rounded">
                        Revoke
                      </button>
</div>
<div class="p-2 bg-surface rounded border border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-outline" data-icon="tablet_mac">tablet_mac</span>
<div class="text-[11px]">
<div class="font-bold text-on-surface">Mobile Field PDU • Leh HQ Sub-net</div>
<div class="text-outline font-mono">IP: 10.24.19.44 • Active 3h ago</div>
</div>
</div>
<button class="px-2 py-0.5 text-[10px] font-bold bg-surface-container hover:bg-surface-container-high text-on-surface border border-outline-variant rounded">
                        Revoke
                      </button>
</div>
</div>
</div>
<!-- Section 4: Recent Operational Activity Audit -->
<div>
<div class="text-label-xs font-label-xs uppercase tracking-wider font-bold text-primary pb-1.5 border-b border-surface-container">
                    4. Recent Operational Telemetry
                  </div>
<div class="pt-2 space-y-1.5 text-[11px] font-mono">
<div class="flex items-start gap-2">
<span class="text-secondary font-bold">13:42 IST</span>
<span class="text-on-surface">Ran What-If Simulation <strong class="text-primary">SIM-0084</strong> (Forward Post Alpha)</span>
</div>
<div class="flex items-start gap-2">
<span class="text-secondary font-bold">13:28 IST</span>
<span class="text-on-surface">Approved Fuel Requisition <strong class="text-primary">REC-2048</strong> (+2,500 L POL)</span>
</div>
<div class="flex items-start gap-2">
<span class="text-secondary font-bold">12:15 IST</span>
<span class="text-on-surface">Inspected Convoy Movement <strong class="text-primary">SHP-2048</strong></span>
</div>
</div>
</div>
<!-- Section 5: Administrative Control Actions -->
<div class="pt-2 border-t border-outline-variant">
<div class="text-label-xs font-label-xs uppercase tracking-wider font-bold text-primary mb-2">
                    Administrative Command Actions
                  </div>
<div class="grid grid-cols-2 gap-2">
<button class="px-2.5 py-1.5 bg-surface text-on-surface hover:bg-surface-container border border-outline-variant rounded text-label-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-[14px]" data-icon="published_with_changes">published_with_changes</span>
<span>Change Role / Scope</span>
</button>
<button class="px-2.5 py-1.5 bg-surface text-on-surface hover:bg-surface-container border border-outline-variant rounded text-label-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-[14px]" data-icon="token">token</span>
<span>Reset MFA Token</span>
</button>
<button class="px-2.5 py-1.5 bg-surface text-on-surface hover:bg-surface-container border border-outline-variant rounded text-label-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-[14px]" data-icon="lock_reset">lock_reset</span>
<span>Force Password Reset</span>
</button>
<button class="px-2.5 py-1.5 bg-error-container hover:bg-red-200 text-on-error-container border border-error/30 rounded text-label-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-[14px]" data-icon="block">block</span>
<span>Suspend Access</span>
</button>
</div>
</div>
<!-- Section 6: Audit Record -->
<div class="p-2 bg-surface-container-high rounded text-[11px] font-mono text-on-surface-variant border border-outline-variant">
<span class="font-bold text-primary">AUDIT RECORD:</span> 14 Oct 10:14 IST — Role updated by Maj. Vikram Rathore (USR-0034) • Reason: Operational deployment to Sector IV-B.
                </div>
</div>
</div>
<!-- 7. ROLE CHANGE IMPACT PREVIEW (Drawer Embedded Module) -->
<div class="bg-surface-container-lowest border-2 border-secondary/40 rounded p-space-md">
<div class="flex items-center justify-between pb-2 border-b border-outline-variant">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-secondary" data-icon="rule">rule</span>
<span class="text-label-sm font-label-sm font-bold uppercase tracking-wider text-primary">Role Change Impact Preview</span>
</div>
<span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container">PRE-FLIGHT SIM</span>
</div>
<div class="mt-3 grid grid-cols-2 gap-3 text-[11px]">
<div class="p-2 bg-surface rounded border border-outline-variant">
<span class="text-[10px] uppercase font-mono text-outline block">Current Profile</span>
<span class="font-bold text-on-surface">Analyst (Planning Cell)</span>
<span class="text-outline text-[10px] block mt-1">3 Modules • Read Only</span>
</div>
<div class="p-2 bg-secondary-container/30 rounded border border-secondary/40">
<span class="text-[10px] uppercase font-mono text-secondary block font-bold">Proposed New Profile</span>
<span class="font-bold text-primary">Logistics Officer</span>
<span class="text-secondary font-bold text-[10px] block mt-1">+5 Modules • Order Approval</span>
</div>
</div>
<div class="mt-3 p-2 bg-surface rounded border border-outline-variant space-y-1">
<div class="text-[10px] font-mono font-bold text-primary uppercase">Mandatory Compliance Check</div>
<label class="flex items-start gap-2 text-[11px] text-on-surface-variant cursor-pointer">
<input checked="" class="mt-0.5 rounded border-outline text-secondary focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span>Operational Justification logged under DISA &amp; MIL-STD-810H audit rules.</span>
</label>
</div>
</div>
</div>
</div>
</main>`;
