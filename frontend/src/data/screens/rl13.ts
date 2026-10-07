// Screen: RL-13 — Inventory Transactions Ledger
// Route: /inventory/transactions
export const rl13Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto min-h-screen pb-12">
<div class="px-margin-desktop py-space-md space-y-space-md">
<!-- 1. COMPACT PAGE HEADER -->
<div class="flex flex-col md:flex-row md:items-center justify-between pb-space-xs border-b border-outline-variant gap-space-xs">
<div>
<div class="flex items-center gap-space-sm">
<h1 class="text-headline-sm font-headline-sm text-primary tracking-tight font-bold">Inventory Transactions</h1>
<span class="px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant text-label-xs font-label-xs font-mono text-on-surface-variant">
              LEDGER VER: 4.8.1-PROD
            </span>
</div>
<p class="text-body-sm font-body-sm text-on-surface-variant">
            Track, verify, and audit inventory movements across the logistics network.
          </p>
</div>
<div class="flex items-center gap-space-sm self-start md:self-auto">
<div class="text-right hidden sm:block">
<div class="text-label-xs font-label-xs text-on-surface-variant">OPERATIONAL FRESHNESS</div>
<div class="text-label-xs font-label-xs font-mono text-secondary font-semibold">
              Tamper-Evident Ledger // MIL-STD-188F // SHA-256 Chain Active
            </div>
</div>
<div class="flex items-center gap-1">
<button class="px-2.5 py-1 text-label-xs font-label-xs rounded bg-surface-container border border-outline-variant hover:bg-surface-container-high text-on-surface flex items-center gap-1">
<span class="material-symbols-outlined" style="font-size:14px;">download</span>
              CSV
            </button>
<button class="px-2.5 py-1 text-label-xs font-label-xs rounded bg-surface-container border border-outline-variant hover:bg-surface-container-high text-on-surface flex items-center gap-1">
<span class="material-symbols-outlined" style="font-size:14px;">table_chart</span>
              Excel
            </button>
<button class="px-2.5 py-1 text-label-xs font-label-xs rounded bg-secondary text-surface hover:bg-secondary/90 flex items-center gap-1">
<span class="material-symbols-outlined" style="font-size:14px;">verified</span>
              Audit Report
            </button>
</div>
</div>
</div>
<!-- 2. OPERATIONAL SUMMARY STRIP (5 Compact Metrics) -->
<section class="grid grid-cols-2 md:grid-cols-5 gap-space-sm">
<!-- Metric 1: Movements Today -->
<div class="bg-surface-container-lowest p-space-sm rounded-lg border border-outline-variant flex flex-col justify-between">
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span>MOVEMENTS TODAY</span>
<span class="material-symbols-outlined text-secondary" style="font-size: 16px;">receipt_long</span>
</div>
<div class="mt-1 flex items-baseline gap-1.5">
<span class="text-headline-sm font-headline-sm font-bold text-primary">184</span>
<span class="text-label-xs font-label-xs text-secondary font-semibold">+12% vs ystd</span>
</div>
<div class="text-label-xs font-label-xs text-outline mt-0.5">High velocity active tracking</div>
</div>
<!-- Metric 2: Receipts -->
<div class="bg-surface-container-lowest p-space-sm rounded-lg border border-outline-variant flex flex-col justify-between">
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span>RECEIPTS</span>
<span class="material-symbols-outlined text-secondary" style="font-size: 16px;">input</span>
</div>
<div class="mt-1 flex items-baseline gap-1.5">
<span class="text-headline-sm font-headline-sm font-bold text-primary">52</span>
<span class="text-label-xs font-label-xs text-secondary font-semibold">+18.4 KL POL</span>
</div>
<div class="text-label-xs font-label-xs text-outline mt-0.5">4.2k rations inbound cleared</div>
</div>
<!-- Metric 3: Issues -->
<div class="bg-surface-container-lowest p-space-sm rounded-lg border border-outline-variant flex flex-col justify-between">
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span>ISSUES</span>
<span class="material-symbols-outlined text-on-surface-variant" style="font-size: 16px;">output</span>
</div>
<div class="mt-1 flex items-baseline gap-1.5">
<span class="text-headline-sm font-headline-sm font-bold text-primary">87</span>
<span class="text-label-xs font-label-xs text-error font-semibold">Elevated draw</span>
</div>
<div class="text-label-xs font-label-xs text-outline mt-0.5">Driven by sub-zero heating run</div>
</div>
<!-- Metric 4: Transfers -->
<div class="bg-surface-container-lowest p-space-sm rounded-lg border border-outline-variant flex flex-col justify-between">
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span>TRANSFERS</span>
<span class="material-symbols-outlined text-on-surface-variant" style="font-size: 16px;">move_up</span>
</div>
<div class="mt-1 flex items-baseline gap-1.5">
<span class="text-headline-sm font-headline-sm font-bold text-primary">31</span>
<span class="text-label-xs font-label-xs text-on-surface-variant font-semibold">100% On-grid</span>
</div>
<div class="text-label-xs font-label-xs text-outline mt-0.5">Inter-depot stock rebalancing</div>
</div>
<!-- Metric 5: Adjustments -->
<div class="bg-surface-container-lowest p-space-sm rounded-lg border border-outline-variant flex flex-col justify-between col-span-2 md:col-span-1">
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<span>ADJUSTMENTS</span>
<span class="material-symbols-outlined text-tertiary-container" style="font-size: 16px;">balance</span>
</div>
<div class="mt-1 flex items-baseline gap-1.5">
<span class="text-headline-sm font-headline-sm font-bold text-primary">14</span>
<span class="text-label-xs font-label-xs text-amber-700 font-semibold">3 Pending</span>
</div>
<div class="text-label-xs font-label-xs text-outline mt-0.5">Physical audit audit-trail active</div>
</div>
</section>
<!-- 3. TRANSACTION TYPE DISTRIBUTION RIBBON -->
<section class="bg-surface-container-lowest p-space-sm rounded-lg border border-outline-variant space-y-1.5">
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant">
<div class="flex items-center gap-space-xs font-semibold uppercase tracking-wider text-primary">
<span class="material-symbols-outlined" style="font-size:14px;">donut_small</span>
            Transaction Category Velocity (Today: 184 Total Entries)
          </div>
<div class="flex items-center gap-space-md text-label-xs font-label-xs">
<span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-xs bg-secondary"></span> Received (28%)</span>
<span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-xs bg-primary-container"></span> Issued (43%)</span>
<span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-xs bg-tertiary-fixed-dim"></span> Transferred (19%)</span>
<span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-xs bg-amber-600"></span> Adjusted (7%)</span>
<span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-xs bg-secondary-fixed"></span> Reserved (3%)</span>
</div>
</div>
<!-- Bar Visualizer -->
<div class="w-full h-2 rounded overflow-hidden flex bg-surface-container-high">
<div class="bg-secondary h-full" style="width: 28%" title="Received: 28%"></div>
<div class="bg-primary-container h-full" style="width: 43%" title="Issued: 43%"></div>
<div class="bg-tertiary-fixed-dim h-full" style="width: 19%" title="Transferred: 19%"></div>
<div class="bg-amber-600 h-full" style="width: 7%" title="Adjusted: 7%"></div>
<div class="bg-secondary-fixed h-full" style="width: 3%" title="Reserved: 3%"></div>
</div>
</section>
<!-- 4. FILTER & SEARCH BAR -->
<section class="bg-surface-container-lowest p-space-sm rounded-lg border border-outline-variant space-y-space-xs">
<div class="grid grid-cols-1 md:grid-cols-12 gap-space-xs items-center">
<!-- Main Search Input -->
<div class="md:col-span-4 relative">
<span class="material-symbols-outlined absolute left-2.5 top-2 text-outline" style="font-size: 16px;">search</span>
<input class="w-full h-8 pl-8 pr-3 text-body-sm font-body-sm bg-surface rounded border border-outline-variant focus:border-secondary focus:ring-0 text-on-surface" placeholder="Search item, transaction ID (TXN-2026-...), location, reference..." type="text" value="TXN-2026"/>
</div>
<!-- Select Filters -->
<div class="md:col-span-8 flex flex-wrap items-center gap-space-xs justify-end">
<!-- Date Range -->
<div class="flex items-center bg-surface border border-outline-variant rounded px-2 h-8 text-label-xs font-label-xs text-on-surface">
<span class="material-symbols-outlined mr-1 text-outline" style="font-size:14px;">calendar_today</span>
<span class="font-medium">05 Oct 2026 (Today)</span>
</div>
<!-- Transaction Type -->
<select class="h-8 py-0 pl-2 pr-7 text-label-xs font-label-xs bg-surface border border-outline-variant rounded text-on-surface focus:ring-0 focus:border-secondary">
<option>All Types</option>
<option selected="">Issued</option>
<option>Received</option>
<option>Transferred</option>
<option>Adjusted</option>
<option>Reserved</option>
</select>
<!-- Location -->
<select class="h-8 py-0 pl-2 pr-7 text-label-xs font-label-xs bg-surface border border-outline-variant rounded text-on-surface focus:ring-0 focus:border-secondary">
<option>Forward Post Alpha LOC-0042</option>
<option>All Forward Depots</option>
<option>Base Depot Leh</option>
<option>Transit Hub Karu</option>
</select>
<!-- Category -->
<select class="h-8 py-0 pl-2 pr-7 text-label-xs font-label-xs bg-surface border border-outline-variant rounded text-on-surface focus:ring-0 focus:border-secondary">
<option>Class III POL</option>
<option>Class I Subsistence</option>
<option>Class V Munitions</option>
<option>Class VIII Medical</option>
</select>
<!-- Status -->
<select class="h-8 py-0 pl-2 pr-7 text-label-xs font-label-xs bg-surface border border-outline-variant rounded text-on-surface focus:ring-0 focus:border-secondary">
<option>Verified &amp; Flagged</option>
<option>Verified Only</option>
<option>Reconciled</option>
<option>Pending Audit</option>
</select>
<!-- Active Tag & Reset -->
<div class="flex items-center gap-1 border-l border-outline-variant pl-2 ml-1">
<span class="bg-secondary-fixed text-on-secondary-fixed font-semibold text-label-xs font-label-xs px-1.5 py-0.5 rounded">
                4 Active
              </span>
<button class="text-label-xs font-label-xs text-outline hover:text-primary underline px-1">
                Clear
              </button>
</div>
</div>
</div>
</section>
<!-- 5. MAIN WORKSPACE: TRANSACTION TABLE + RIGHT DETAIL DRAWER -->
<section class="grid grid-cols-1 lg:grid-cols-12 gap-space-sm items-start">
<!-- Dense Operational Ledger Table (~62% width on desktop) -->
<div class="lg:col-span-7 xl:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col">
<div class="overflow-x-auto custom-scroll">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container border-b-2 border-secondary text-label-xs font-label-xs text-primary uppercase tracking-wider">
<th class="py-2.5 px-3 whitespace-nowrap">TXN ID</th>
<th class="py-2.5 px-3 whitespace-nowrap">Timestamp</th>
<th class="py-2.5 px-3 whitespace-nowrap">Type</th>
<th class="py-2.5 px-3 whitespace-nowrap">Item &amp; SKU</th>
<th class="py-2.5 px-3 whitespace-nowrap">Location</th>
<th class="py-2.5 px-3 text-right whitespace-nowrap">Qty Movement</th>
<th class="py-2.5 px-3 text-right whitespace-nowrap">Balance</th>
<th class="py-2.5 px-3 whitespace-nowrap">Reference</th>
<th class="py-2.5 px-3 whitespace-nowrap">Operator</th>
<th class="py-2.5 px-3 whitespace-nowrap">Status</th>
<th class="py-2.5 px-2 text-center whitespace-nowrap">Action</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant text-body-sm font-body-sm">
<!-- ROW 1 (SELECTED ROW) -->
<tr class="bg-surface-container-high/80 border-l-4 border-l-secondary font-medium cursor-pointer transition-colors duration-150">
<td class="py-2 px-3 whitespace-nowrap">
<div class="flex items-center gap-1 font-mono text-primary font-bold">
<span class="material-symbols-outlined text-secondary" style="font-size:14px;">verified_user</span>
                      TXN-2026-01842
                    </div>
</td>
<td class="py-2 px-3 text-on-surface-variant whitespace-nowrap font-mono text-label-xs">
                    05 Oct · 14:32 IST
                  </td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs bg-primary-container text-surface uppercase font-bold">
                      Issued
                    </span>
</td>
<td class="py-2 px-3 whitespace-nowrap">
<div class="text-on-surface font-semibold leading-tight">POL Arctic Diesel</div>
<div class="text-label-xs font-label-xs text-outline font-mono">FUEL-001 // Cl-III</div>
</td>
<td class="py-2 px-3 whitespace-nowrap text-on-surface-variant text-label-sm">
                    Post Alpha <span class="text-outline text-label-xs">(LOC-0042)</span>
</td>
<td class="py-2 px-3 text-right whitespace-nowrap font-mono font-bold text-on-surface">
                    −680 L
                  </td>
<td class="py-2 px-3 text-right whitespace-nowrap font-mono text-primary font-semibold">
                    3,520 L
                  </td>
<td class="py-2 px-3 whitespace-nowrap font-mono text-label-xs text-on-surface-variant">
                    ISSUE-8821
                  </td>
<td class="py-2 px-3 whitespace-nowrap text-label-sm text-on-surface">
                    A. Sharma
                  </td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="inline-flex items-center gap-1 text-label-xs font-label-xs text-secondary font-semibold">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      Verified
                    </span>
</td>
<td class="py-2 px-2 text-center whitespace-nowrap">
<span class="text-secondary font-bold material-symbols-outlined" style="font-size:16px;">arrow_forward</span>
</td>
</tr>
<!-- ROW 2: TRANSFERRED -->
<tr class="hover:bg-surface-container transition-colors duration-150 cursor-pointer">
<td class="py-2 px-3 whitespace-nowrap font-mono text-on-surface font-semibold">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-outline" style="font-size:14px;">shield</span>
                      TXN-2026-01841
                    </div>
</td>
<td class="py-2 px-3 text-on-surface-variant whitespace-nowrap font-mono text-label-xs">
                    05 Oct · 13:45 IST
                  </td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs bg-tertiary-fixed-dim text-on-tertiary-fixed-variant uppercase font-bold">
                      Transferred
                    </span>
</td>
<td class="py-2 px-3 whitespace-nowrap">
<div class="text-on-surface leading-tight font-medium">Composite Rations MRE</div>
<div class="text-label-xs font-label-xs text-outline font-mono">RAT-902 // Cl-I</div>
</td>
<td class="py-2 px-3 whitespace-nowrap text-on-surface-variant text-label-sm">
                    CSD Leh → Post Alpha
                  </td>
<td class="py-2 px-3 text-right whitespace-nowrap font-mono font-bold text-on-surface-variant">
                    → 1,200 Pks
                  </td>
<td class="py-2 px-3 text-right whitespace-nowrap font-mono text-primary font-semibold">
                    4,200 Pks
                  </td>
<td class="py-2 px-3 whitespace-nowrap font-mono text-label-xs text-on-surface-variant">
                    XFER-4402
                  </td>
<td class="py-2 px-3 whitespace-nowrap text-label-sm text-on-surface">
                    Sub. Maj. Singh
                  </td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="inline-flex items-center gap-1 text-label-xs font-label-xs text-secondary font-semibold">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      Verified
                    </span>
</td>
<td class="py-2 px-2 text-center whitespace-nowrap text-outline hover:text-primary">
<span class="material-symbols-outlined" style="font-size:16px;">visibility</span>
</td>
</tr>
<!-- ROW 3: RECEIVED -->
<tr class="hover:bg-surface-container transition-colors duration-150 cursor-pointer">
<td class="py-2 px-3 whitespace-nowrap font-mono text-on-surface font-semibold">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-outline" style="font-size:14px;">shield</span>
                      TXN-2026-01840
                    </div>
</td>
<td class="py-2 px-3 text-on-surface-variant whitespace-nowrap font-mono text-label-xs">
                    05 Oct · 12:15 IST
                  </td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs bg-secondary-container text-on-secondary-container uppercase font-bold">
                      Received
                    </span>
</td>
<td class="py-2 px-3 whitespace-nowrap">
<div class="text-on-surface leading-tight font-medium">POL Arctic Diesel</div>
<div class="text-label-xs font-label-xs text-outline font-mono">FUEL-001 // Cl-III</div>
</td>
<td class="py-2 px-3 whitespace-nowrap text-on-surface-variant text-label-sm">
                    Forward Post Alpha
                  </td>
<td class="py-2 px-3 text-right whitespace-nowrap font-mono font-bold text-secondary">
                    +2,500 L
                  </td>
<td class="py-2 px-3 text-right whitespace-nowrap font-mono text-primary font-semibold">
                    4,200 L
                  </td>
<td class="py-2 px-3 whitespace-nowrap font-mono text-label-xs text-on-surface-variant">
                    RECV-0941
                  </td>
<td class="py-2 px-3 whitespace-nowrap text-label-sm text-on-surface">
                    Capt. S. Rathore
                  </td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="inline-flex items-center gap-1 text-label-xs font-label-xs text-secondary font-semibold">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      Verified
                    </span>
</td>
<td class="py-2 px-2 text-center whitespace-nowrap text-outline hover:text-primary">
<span class="material-symbols-outlined" style="font-size:16px;">visibility</span>
</td>
</tr>
<!-- ROW 4: ADJUSTED (FLAGGED) -->
<tr class="bg-amber-500/5 hover:bg-amber-500/10 transition-colors duration-150 cursor-pointer">
<td class="py-2 px-3 whitespace-nowrap font-mono text-on-surface font-semibold">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-amber-700" style="font-size:14px;">warning</span>
                      TXN-2026-01839
                    </div>
</td>
<td class="py-2 px-3 text-on-surface-variant whitespace-nowrap font-mono text-label-xs">
                    05 Oct · 11:20 IST
                  </td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs bg-amber-100 text-amber-900 border border-amber-300 uppercase font-bold">
                      Adjusted
                    </span>
</td>
<td class="py-2 px-3 whitespace-nowrap">
<div class="text-on-surface leading-tight font-medium">Sub-Zero Synthetic Lube</div>
<div class="text-label-xs font-label-xs text-outline font-mono">LUB-883 // Cl-III</div>
</td>
<td class="py-2 px-3 whitespace-nowrap text-on-surface-variant text-label-sm">
                    Khardung Transit Node
                  </td>
<td class="py-2 px-3 text-right whitespace-nowrap font-mono font-bold text-amber-800">
                    −480 L
                  </td>
<td class="py-2 px-3 text-right whitespace-nowrap font-mono text-primary font-semibold">
                    840 L
                  </td>
<td class="py-2 px-3 whitespace-nowrap font-mono text-label-xs text-on-surface-variant">
                    ADJ-0112
                  </td>
<td class="py-2 px-3 whitespace-nowrap text-label-sm text-on-surface">
                    M. Verma
                  </td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="inline-flex items-center gap-1 text-label-xs font-label-xs text-amber-800 font-bold bg-amber-100 px-1.5 py-0.5 rounded border border-amber-300">
<span class="w-1.5 h-1.5 rounded-full bg-amber-600 animate-ping"></span>
                      Flagged (3.8x Dev)
                    </span>
</td>
<td class="py-2 px-2 text-center whitespace-nowrap text-outline hover:text-primary">
<span class="material-symbols-outlined" style="font-size:16px;">visibility</span>
</td>
</tr>
<!-- ROW 5: RESERVED -->
<tr class="hover:bg-surface-container transition-colors duration-150 cursor-pointer">
<td class="py-2 px-3 whitespace-nowrap font-mono text-on-surface font-semibold">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-outline" style="font-size:14px;">shield</span>
                      TXN-2026-01838
                    </div>
</td>
<td class="py-2 px-3 text-on-surface-variant whitespace-nowrap font-mono text-label-xs">
                    05 Oct · 09:30 IST
                  </td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs bg-secondary-fixed text-on-secondary-fixed uppercase font-bold">
                      Reserved
                    </span>
</td>
<td class="py-2 px-3 whitespace-nowrap">
<div class="text-on-surface leading-tight font-medium">Trauma Plasma &amp; IV Kits</div>
<div class="text-label-xs font-label-xs text-outline font-mono">MED-009 // Cl-VIII</div>
</td>
<td class="py-2 px-3 whitespace-nowrap text-on-surface-variant text-label-sm">
                    Base Hospital Leh
                  </td>
<td class="py-2 px-3 text-right whitespace-nowrap font-mono font-bold text-secondary">
                    180 Kits
                  </td>
<td class="py-2 px-3 text-right whitespace-nowrap font-mono text-primary font-semibold">
                    820 Kits
                  </td>
<td class="py-2 px-3 whitespace-nowrap font-mono text-label-xs text-on-surface-variant">
                    RESV-7719
                  </td>
<td class="py-2 px-3 whitespace-nowrap text-label-sm text-on-surface">
                    Maj. K. Nair
                  </td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="inline-flex items-center gap-1 text-label-xs font-label-xs text-secondary font-semibold">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      Verified
                    </span>
</td>
<td class="py-2 px-2 text-center whitespace-nowrap text-outline hover:text-primary">
<span class="material-symbols-outlined" style="font-size:16px;">visibility</span>
</td>
</tr>
<!-- ROW 6: ISSUED (MUNITIONS) -->
<tr class="hover:bg-surface-container transition-colors duration-150 cursor-pointer">
<td class="py-2 px-3 whitespace-nowrap font-mono text-on-surface font-semibold">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-outline" style="font-size:14px;">shield</span>
                      TXN-2026-01837
                    </div>
</td>
<td class="py-2 px-3 text-on-surface-variant whitespace-nowrap font-mono text-label-xs">
                    05 Oct · 08:15 IST
                  </td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="px-2 py-0.5 rounded text-label-xs font-label-xs bg-primary-container text-surface uppercase font-bold">
                      Issued
                    </span>
</td>
<td class="py-2 px-3 whitespace-nowrap">
<div class="text-on-surface leading-tight font-medium">7.62mm Munitions Link</div>
<div class="text-label-xs font-label-xs text-outline font-mono">AMMO-762 // Cl-V</div>
</td>
<td class="py-2 px-3 whitespace-nowrap text-on-surface-variant text-label-sm">
                    Foxtrot Outpost
                  </td>
<td class="py-2 px-3 text-right whitespace-nowrap font-mono font-bold text-on-surface">
                    −1,200 Rds
                  </td>
<td class="py-2 px-3 text-right whitespace-nowrap font-mono text-primary font-semibold">
                    24,500 Rds
                  </td>
<td class="py-2 px-3 whitespace-nowrap font-mono text-label-xs text-on-surface-variant">
                    ISSUE-8819
                  </td>
<td class="py-2 px-3 whitespace-nowrap text-label-sm text-on-surface">
                    Hav. R. Paul
                  </td>
<td class="py-2 px-3 whitespace-nowrap">
<span class="inline-flex items-center gap-1 text-label-xs font-label-xs text-secondary font-semibold">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      Verified
                    </span>
</td>
<td class="py-2 px-2 text-center whitespace-nowrap text-outline hover:text-primary">
<span class="material-symbols-outlined" style="font-size:16px;">visibility</span>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Bottom Pagination Controls -->
<div class="p-space-sm bg-surface-container-low border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-space-xs text-label-xs font-label-xs text-on-surface-variant">
<div class="flex items-center gap-space-sm">
<span>Showing <strong class="text-primary font-semibold">1–25</strong> of 1,842 transactions</span>
<div class="flex items-center gap-1">
<span>Rows:</span>
<select class="h-6 py-0 pl-1 pr-5 text-label-xs font-label-xs bg-surface border border-outline-variant rounded">
<option selected="">25</option>
<option>50</option>
<option>100</option>
</select>
</div>
</div>
<div class="flex items-center gap-1">
<span class="mr-2">Page 1 of 74</span>
<button class="px-2 py-1 bg-surface border border-outline-variant rounded text-outline cursor-not-allowed">Previous</button>
<button class="px-2 py-1 bg-surface border border-outline-variant rounded hover:bg-surface-container text-on-surface">Next</button>
</div>
</div>
</div>
<!-- Right Side: Selected Transaction Detail Drawer (TXN-2026-01842) -->
<div class="lg:col-span-5 xl:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-lg p-space-sm space-y-space-md shadow-none">
<!-- Drawer Header -->
<div class="pb-space-xs border-b border-outline-variant flex items-start justify-between">
<div>
<div class="flex items-center gap-1.5">
<span class="font-mono text-headline-sm font-headline-sm font-bold text-primary">TXN-2026-01842</span>
<span class="px-1.5 py-0.5 rounded text-label-xs font-label-xs bg-secondary-fixed text-on-secondary-fixed font-bold">
                  VERIFIED
                </span>
</div>
<div class="text-label-xs font-label-xs text-on-surface-variant mt-0.5">
                DISPATCH ENTRY // TYPE: <span class="font-bold text-primary">ISSUED (CONSUMPTION)</span>
</div>
</div>
<button class="text-outline hover:text-primary p-1">
<span class="material-symbols-outlined">close</span>
</button>
</div>
<!-- Quick Metadata Grid -->
<div class="bg-surface-container-low p-space-xs rounded border border-outline-variant/60 grid grid-cols-2 gap-space-xs text-label-xs font-label-xs">
<div>
<div class="text-outline">TARGET ITEM</div>
<div class="font-semibold text-primary">POL Arctic Diesel</div>
<div class="text-label-xs text-on-surface-variant font-mono">FUEL-001 (Class III POL)</div>
</div>
<div>
<div class="text-outline">DEPLOYED NODE</div>
<div class="font-semibold text-primary">Forward Post Alpha</div>
<div class="text-label-xs text-on-surface-variant font-mono">LOC-0042 // Sector IV-B</div>
</div>
<div class="col-span-2 pt-1 border-t border-outline-variant/30 flex justify-between items-center">
<div>
<div class="text-outline">NET BALANCE CHANGE</div>
<div class="font-mono text-headline-sm font-headline-sm font-bold text-on-surface">−680 L</div>
</div>
<div class="text-right">
<div class="text-outline">RUNWAY BALANCE</div>
<div class="font-mono text-label-md font-label-md font-semibold text-secondary">
                  4,200 L → 3,520 L
                </div>
</div>
</div>
</div>
<!-- Operational Authority & Sign-Off Block -->
<div class="space-y-1 text-label-xs font-label-xs border-b border-outline-variant pb-space-xs">
<div class="flex justify-between">
<span class="text-outline">Auth Reference:</span>
<span class="font-mono font-bold text-on-surface">ISSUE-8821 // OP-ORD-2026-99</span>
</div>
<div class="flex justify-between">
<span class="text-outline">Operator / Quartermaster:</span>
<span class="font-medium text-on-surface">A. Sharma (Logistics Officer IC-81042)</span>
</div>
<div class="flex justify-between">
<span class="text-outline">Cryptographic SHA-256:</span>
<span class="font-mono text-secondary truncate max-w-[190px]">9a8c::41f0::d991::c37a::e8b1</span>
</div>
</div>
<!-- Predictive Runway Alert Callout -->
<div class="p-space-xs bg-amber-50 border-l-4 border-amber-600 rounded text-label-xs font-label-xs text-amber-900 space-y-1">
<div class="flex items-center gap-1 font-bold text-amber-950">
<span class="material-symbols-outlined" style="font-size:16px;">trending_down</span>
<span>Stockout Projection Updated: 11 Oct 2026 (04:00 IST)</span>
</div>
<p class="leading-relaxed">
              LSTM-M4 telemetry recalculates current sub-zero draw velocity at 680 L/day. Runway reduced from 6.1 to 5.2 days. Priority replenishment request of 2,500 L confirmed active.
            </p>
</div>
<!-- Audit & Predictive Event Timeline -->
<div class="space-y-space-xs">
<div class="text-label-xs font-label-xs font-bold uppercase tracking-wider text-outline">
              TAMPER-EVIDENT LOG AUDIT TRAIL
            </div>
<ol class="relative border-l border-outline-variant ml-2 space-y-2.5 text-label-xs font-label-xs">
<li class="ml-3">
<span class="absolute -left-1 mt-1 w-2 h-2 rounded-full bg-secondary"></span>
<div class="font-mono text-on-surface-variant">14:32:00 IST</div>
<div class="text-on-surface font-semibold">Transaction recorded via terminal LOC-0042-T1</div>
</li>
<li class="ml-3">
<span class="absolute -left-1 mt-1 w-2 h-2 rounded-full bg-secondary"></span>
<div class="font-mono text-on-surface-variant">14:32:45 IST</div>
<div class="text-on-surface font-semibold">Ledger balance updated across 6 sync relays</div>
</li>
<li class="ml-3">
<span class="absolute -left-1 mt-1 w-2 h-2 rounded-full bg-secondary"></span>
<div class="font-mono text-on-surface-variant">14:33:10 IST</div>
<div class="text-on-surface font-semibold">Dual-signoff verified by Capt. S. Rathore</div>
</li>
<li class="ml-3">
<span class="absolute -left-1 mt-1 w-2 h-2 rounded-full bg-amber-600"></span>
<div class="font-mono text-on-surface-variant">14:34:00 IST</div>
<div class="text-on-surface font-semibold">Runway model updated (Zero-Stock: 11 Oct)</div>
</li>
</ol>
</div>
<!-- Strict Operational Actions (No Casual Editing Allowed) -->
<div class="space-y-1.5 pt-space-xs border-t border-outline-variant">
<div class="grid grid-cols-2 gap-space-xs">
<button class="w-full py-1.5 px-2 bg-secondary text-surface text-label-xs font-label-xs rounded font-semibold hover:bg-secondary/90 flex items-center justify-center gap-1">
<span class="material-symbols-outlined" style="font-size:14px;">task_alt</span>
                Verify Sign-Off
              </button>
<button class="w-full py-1.5 px-2 bg-surface-container border border-outline-variant text-on-surface text-label-xs font-label-xs rounded font-medium hover:bg-surface-container-high flex items-center justify-center gap-1">
<span class="material-symbols-outlined" style="font-size:14px;">print</span>
                Certificate
              </button>
</div>
<div class="grid grid-cols-2 gap-space-xs">
<button class="w-full py-1.5 px-2 bg-surface-container border border-amber-300 text-amber-900 text-label-xs font-label-xs rounded hover:bg-amber-100 flex items-center justify-center gap-1">
<span class="material-symbols-outlined" style="font-size:14px;">flag</span>
                Flag for Audit
              </button>
<button class="w-full py-1.5 px-2 bg-surface-container border border-error/40 text-error text-label-xs font-label-xs rounded hover:bg-error-container flex items-center justify-center gap-1">
<span class="material-symbols-outlined" style="font-size:14px;">undo</span>
                Formal Reversal
              </button>
</div>
</div>
</div>
</section>
<!-- 6. MODAL / DOCKED COMPONENT: RECORD INVENTORY TRANSACTION -->
<div class="hidden fixed inset-0 z-50 bg-primary/60 backdrop-blur-xs flex items-center justify-center p-4" id="record-modal">
<div class="bg-surface-container-lowest border-2 border-secondary rounded-lg w-full max-w-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
<!-- Modal Top Band -->
<div class="bg-primary-container px-space-md py- space-sm text-surface flex items-center justify-between">
<div class="flex items-center gap-space-xs">
<span class="material-symbols-outlined text-secondary-fixed">assignment_add</span>
<div>
<div class="text-headline-sm font-headline-sm font-semibold text-surface">Record Inventory Transaction</div>
<div class="text-label-xs font-label-xs text-on-primary-container">TAMPER-EVIDENT DISPATCH LOGGING // MIL-STD ENTRY</div>
</div>
</div>
<button class="text-surface/70 hover:text-surface" onclick="document.getElementById('record-modal').classList.add('hidden')">
<span class="material-symbols-outlined">close</span>
</button>
</div>
<!-- Transaction Type Toggle Strip -->
<div class="px-space-md pt-space-sm bg-surface-container-low border-b border-outline-variant flex gap-1">
<button class="px-3 py-1.5 text-label-xs font-label-xs font-semibold rounded-t border-t border-x border-secondary bg-surface-container-lowest text-primary">
              Issued (Draw)
            </button>
<button class="px-3 py-1.5 text-label-xs font-label-xs font-medium text-on-surface-variant hover:text-primary">
              Received (Inbound)
            </button>
<button class="px-3 py-1.5 text-label-xs font-label-xs font-medium text-on-surface-variant hover:text-primary">
              Transferred
            </button>
<button class="px-3 py-1.5 text-label-xs font-label-xs font-medium text-on-surface-variant hover:text-primary">
              Adjusted
            </button>
<button class="px-3 py-1.5 text-label-xs font-label-xs font-medium text-on-surface-variant hover:text-primary">
              Reserved
            </button>
</div>
<!-- Form Fields Container -->
<form class="p-space-md space-y-space-sm text-body-sm font-body-sm" onsubmit="event.preventDefault(); document.getElementById('record-modal').classList.add('hidden');">
<!-- Row 1: Target Item & Location -->
<div class="grid grid-cols-2 gap-space-sm">
<div>
<label class="block text-label-xs font-label-xs text-on-surface-variant mb-1 font-semibold uppercase">Target Item / SKU</label>
<select class="w-full h-8 text-label-sm font-label-sm bg-surface border border-outline-variant rounded focus:border-secondary focus:ring-0">
<option selected="">POL Arctic Diesel (FUEL-001)</option>
<option>Composite Rations MRE (RAT-902)</option>
<option>7.62mm Munitions Link (AMMO-762)</option>
<option>Trauma Plasma &amp; IV Kits (MED-009)</option>
</select>
</div>
<div>
<label class="block text-label-xs font-label-xs text-on-surface-variant mb-1 font-semibold uppercase">Station / Node</label>
<select class="w-full h-8 text-label-sm font-label-sm bg-surface border border-outline-variant rounded focus:border-secondary focus:ring-0">
<option selected="">Forward Post Alpha (LOC-0042)</option>
<option>Foxtrot Outpost (LOC-0089)</option>
<option>CSD Leh Central Depot</option>
</select>
</div>
</div>
<!-- Row 2: Quantities & Live Impact Assessment -->
<div class="grid grid-cols-2 gap-space-sm items-center">
<div>
<label class="block text-label-xs font-label-xs text-on-surface-variant mb-1 font-semibold uppercase">Current Depot Balance</label>
<div class="h-8 px-2.5 flex items-center bg-surface-container rounded border border-outline-variant font-mono font-bold text-primary">
                  3,520 L
                </div>
</div>
<div>
<label class="block text-label-xs font-label-xs text-on-surface-variant mb-1 font-semibold uppercase">Issue Quantity (Draw)</label>
<input class="w-full h-8 text-label-sm font-label-sm font-mono font-bold bg-surface border border-outline-variant rounded focus:border-secondary focus:ring-0 text-on-surface" type="text" value="680"/>
</div>
</div>
<!-- Live Calculation & Risk Banner -->
<div class="p-space-xs rounded bg-surface-container border border-outline-variant space-y-1">
<div class="flex justify-between text-label-xs font-label-xs">
<span class="text-on-surface-variant">Post-Transaction Projected Balance:</span>
<span class="font-mono font-bold text-primary">2,840 L</span>
</div>
<div class="flex items-center gap-1.5 text-label-xs font-label-xs text-amber-900 bg-amber-100/70 p-1.5 rounded border border-amber-300">
<span class="material-symbols-outlined text-amber-800" style="font-size:16px;">warning</span>
<span>Amber Warning: Draw drops local supply runway to 4.1 days (below 5-day command threshold).</span>
</div>
</div>
<!-- Row 3: Operational Reference & Authorizing Officer -->
<div class="grid grid-cols-2 gap-space-sm">
<div>
<label class="block text-label-xs font-label-xs text-on-surface-variant mb-1 font-semibold uppercase">Operational Order / Ref</label>
<input class="w-full h-8 text-label-sm font-label-sm font-mono bg-surface border border-outline-variant rounded focus:border-secondary focus:ring-0 text-on-surface" type="text" value="OP-ORD-2026-104"/>
</div>
<div>
<label class="block text-label-xs font-label-xs text-on-surface-variant mb-1 font-semibold uppercase">Authorizing Officer PIN / ID</label>
<input class="w-full h-8 text-label-sm font-label-sm bg-surface border border-outline-variant rounded focus:border-secondary focus:ring-0 text-on-surface" type="password" value="••••••••"/>
</div>
</div>
<!-- Modal Action Buttons -->
<div class="pt-space-xs flex justify-end gap-space-xs border-t border-outline-variant">
<button class="px-3 py-1.5 text-label-sm font-label-sm rounded bg-surface-container border border-outline-variant text-on-surface hover:bg-surface-container-high transition-colors" onclick="document.getElementById('record-modal').classList.add('hidden')" type="button">
                Cancel
              </button>
<button class="px-4 py-1.5 text-label-sm font-label-sm rounded bg-primary-container hover:bg-secondary text-surface font-semibold flex items-center gap-1 transition-colors" type="submit">
<span class="material-symbols-outlined" style="font-size:16px;">check_circle</span>
                Confirm &amp; Sign Transaction
              </button>
</div>
</form>
</div>
</div>
<!-- 7. INSTITUTIONAL STATUS FOOTER -->
<footer class="pt-space-xs border-t border-outline-variant flex flex-col md:flex-row items-center justify-between text-label-xs font-label-xs text-outline gap-2">
<div class="flex items-center gap-space-md">
<span class="font-bold text-on-surface-variant">RAKSHAKLOGIX DEFENCE LOGISTICS</span>
<span>NODE: DL-9941 (LEH-FORWARD)</span>
<span>SYSTEM: MIL-STD-188F // ENCRYPTION: AES-256 GCM</span>
</div>
<div class="flex items-center gap-2">
<span class="inline-block w-2 h-2 rounded-full bg-secondary"></span>
<span>DISTRIBUTED LEDGER CONSENSUS: SYNCHRONIZED</span>
</div>
</footer>
</div>
</main>`;
