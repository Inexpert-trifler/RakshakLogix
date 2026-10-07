// Screen: RL-16 — Import Consumption Data
// Route: /consumption/import
export const rl16Html = `<main  class="w-full flex-1 min-h-0 overflow-y-auto flex-1 flex flex-col bg-warm-off-white p-6 gap-5">
<!-- PAGE HEADER TITLE & METADATA -->
<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-soft-stone pb-4">
<div>
<div class="flex items-center gap-3">
<h1 class="font-headline-lg text-headline-lg text-charcoal font-bold tracking-tight">Import Consumption Data</h1>
<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-primary-container text-primary-fixed border border-tactical-khaki/30">
            INGESTION ENGINE: v4.8-LSTM
          </span>
<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-soft-stone text-charcoal border border-tactical-khaki">
            BATCH: IMP-2026-0048
          </span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Validate and add forward depot consumption records into the logistics intelligence ledger. Feeds 30-day baseline forecasting.
        </p>
</div>
<div class="flex items-center gap-2">
<button class="flex items-center gap-1.5 px-3 py-1.5 text-charcoal bg-white hover:bg-warm-off-white border border-tactical-khaki rounded text-[12px] font-medium shadow-sm transition-all">
<span class="material-symbols-outlined text-[16px]" data-icon="history">history</span>
          Import History (12 Batches)
        </button>
<button class="flex items-center gap-1.5 px-3 py-1.5 text-charcoal bg-white hover:bg-warm-off-white border border-tactical-khaki rounded text-[12px] font-medium shadow-sm transition-all">
<span class="material-symbols-outlined text-[16px]" data-icon="file_download">file_download</span>
          Download CSV Template
        </button>
</div>
</div>
<!-- 4-STEP OPERATIONAL PROGRESS STEPPER -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-2 bg-white p-2 rounded border border-soft-stone shadow-sm">
<!-- Step 01: Upload (Completed) -->
<div class="flex items-center gap-2.5 px-3 py-2 rounded bg-surface-container-low border border-soft-stone">
<div class="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-[11px] shrink-0">
<span class="material-symbols-outlined text-[14px]" data-icon="check">check</span>
</div>
<div class="min-w-0">
<div class="font-mono text-[10px] uppercase font-bold text-emerald-900 leading-tight">01 Upload Finished</div>
<div class="font-mono text-[11px] text-charcoal truncate" title="consumption_october_2026.xlsx (2.8 MB)">consumption_oct... (2.8MB)</div>
</div>
</div>
<!-- Step 02: Validate (Completed) -->
<div class="flex items-center gap-2.5 px-3 py-2 rounded bg-surface-container-low border border-soft-stone">
<div class="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-[11px] shrink-0">
<span class="material-symbols-outlined text-[14px]" data-icon="check">check</span>
</div>
<div class="min-w-0">
<div class="font-mono text-[10px] uppercase font-bold text-emerald-900 leading-tight">02 Validate Rules</div>
<div class="font-mono text-[11px] text-charcoal truncate">1,842 Records Processed</div>
</div>
</div>
<!-- Step 03: Review & Resolve (CURRENT ACTIVE) -->
<div class="flex items-center gap-2.5 px-3 py-2 rounded bg-army-olive text-white border-l-4 border-muted-amber shadow-sm">
<div class="w-6 h-6 rounded-full bg-muted-amber text-charcoal flex items-center justify-center font-bold text-[11px] shrink-0 font-mono">
          03
        </div>
<div class="min-w-0">
<div class="font-mono text-[10px] uppercase font-bold text-tactical-khaki leading-tight flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            Active Step
          </div>
<div class="text-[12px] font-semibold text-white truncate">Review &amp; Resolve (46 Issues)</div>
</div>
</div>
<!-- Step 04: Confirm & Ingest (Pending) -->
<div class="flex items-center gap-2.5 px-3 py-2 rounded bg-warm-off-white/60 border border-soft-stone/70 opacity-60">
<div class="w-6 h-6 rounded-full bg-soft-stone text-on-surface-variant flex items-center justify-center font-bold text-[11px] shrink-0 font-mono">
          04
        </div>
<div class="min-w-0">
<div class="font-mono text-[10px] uppercase font-bold text-on-surface-variant leading-tight">04 Ingest Ledger</div>
<div class="text-[11px] text-on-surface-variant truncate">Pending Resolution</div>
</div>
</div>
</div>
<!-- 5 COMPACT OPERATIONAL METRIC TILES -->
<div class="grid grid-cols-2 md:grid-cols-5 gap-3">
<!-- Metric 1 -->
<div class="bg-white p-3 rounded border border-soft-stone flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="font-label-xs text-label-xs uppercase text-tactical-khaki">Total Scanned</span>
<span class="material-symbols-outlined text-[16px] text-on-surface-variant" data-icon="receipt_long">receipt_long</span>
</div>
<div class="mt-1">
<div class="font-mono text-[22px] font-bold text-charcoal leading-none">1,842</div>
<div class="text-[10px] text-on-surface-variant mt-1">100% parsed from XLSX</div>
</div>
</div>
<!-- Metric 2 -->
<div class="bg-white p-3 rounded border border-soft-stone border-l-4 border-l-army-olive flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="font-label-xs text-label-xs uppercase text-army-olive">Clean &amp; Valid</span>
<span class="material-symbols-outlined text-[16px] text-army-olive" data-icon="check_circle">check_circle</span>
</div>
<div class="mt-1">
<div class="font-mono text-[22px] font-bold text-charcoal leading-none">1,796</div>
<div class="text-[10px] text-emerald-800 font-medium mt-1">97.5% integrity pass</div>
</div>
</div>
<!-- Metric 3 -->
<div class="bg-white p-3 rounded border border-soft-stone border-l-4 border-l-muted-amber flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="font-label-xs text-label-xs uppercase text-[#8A6A1E]">Burn Warnings</span>
<span class="material-symbols-outlined text-[16px] text-muted-amber" data-icon="warning">warning</span>
</div>
<div class="mt-1">
<div class="font-mono text-[22px] font-bold text-charcoal leading-none">31</div>
<div class="text-[10px] text-amber-900 mt-1">Spikes &amp; baseline drift</div>
</div>
</div>
<!-- Metric 4 -->
<div class="bg-white p-3 rounded border border-soft-stone border-l-4 border-l-dark-red flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="font-label-xs text-label-xs uppercase text-dark-red">Critical Errors</span>
<span class="material-symbols-outlined text-[16px] text-dark-red" data-icon="error">error</span>
</div>
<div class="mt-1">
<div class="font-mono text-[22px] font-bold text-dark-red leading-none">15</div>
<div class="text-[10px] text-red-900 mt-1">Missing keys &amp; null values</div>
</div>
</div>
<!-- Metric 5 -->
<div class="bg-white p-3 rounded border border-soft-stone border-l-4 border-l-tactical-khaki flex flex-col justify-between">
<div class="flex items-center justify-between">
<span class="font-label-xs text-label-xs uppercase text-charcoal">Duplicates</span>
<span class="material-symbols-outlined text-[16px] text-tactical-khaki" data-icon="content_copy">content_copy</span>
</div>
<div class="mt-1">
<div class="font-mono text-[22px] font-bold text-charcoal leading-none">08</div>
<div class="text-[10px] text-on-surface-variant mt-1">Matched existing TXN IDs</div>
</div>
</div>
</div>
<!-- ======================================================================= -->
<!-- 4. MAIN SPLIT WORKSPACE (65% Ledger / 35% Resolution Drawer)           -->
<!-- ======================================================================= -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
<!-- LEFT COLUMN (~65%): Review & Resolution Ledger -->
<div class="lg:col-span-8 flex flex-col gap-3">
<!-- Batch Manifest Banner -->
<div class="bg-white border border-soft-stone rounded px-3.5 py-2.5 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-on-surface-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-olive-green text-[18px]" data-icon="description">description</span>
<span class="font-bold text-charcoal">consumption_october_2026.xlsx</span>
<span class="text-tactical-khaki">•</span>
<span>2.8 MB</span>
<span class="text-tactical-khaki">•</span>
<span class="bg-warm-off-white px-1.5 py-0.5 rounded border border-soft-stone">SHA256: 8A39C4...</span>
</div>
<div class="flex items-center gap-3">
<span>Uploader: <strong class="text-charcoal font-sans">Hav. V. Negi</strong> (QMG-ND-4410)</span>
<span class="text-tactical-khaki">•</span>
<span>05 Oct 2026 14:32 IST</span>
</div>
</div>
<!-- Issue Filters, Search Bar & Quick Batch Actions -->
<div class="bg-white border border-soft-stone rounded p-3 flex flex-col gap-2.5">
<div class="flex flex-wrap items-center justify-between gap-2 border-b border-soft-stone pb-2.5">
<!-- Filter Tabs -->
<div class="flex items-center gap-1 overflow-x-auto text-[11px]">
<button class="px-2.5 py-1 rounded text-on-surface-variant hover:text-charcoal hover:bg-warm-off-white">
                All Records (1,842)
              </button>
<button class="px-2.5 py-1 rounded bg-charcoal text-white font-medium flex items-center gap-1.5 shadow-sm">
<span>Issues Requiring Action</span>
<span class="bg-dark-red text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full">46</span>
</button>
<button class="px-2.5 py-1 rounded text-on-surface-variant hover:text-charcoal hover:bg-warm-off-white flex items-center gap-1">
<span>Warnings</span>
<span class="bg-amber-100 text-amber-900 border border-muted-amber/40 text-[9px] font-bold px-1.5 py-0.2 rounded-full">31</span>
</button>
<button class="px-2.5 py-1 rounded text-on-surface-variant hover:text-charcoal hover:bg-warm-off-white flex items-center gap-1">
<span>Errors</span>
<span class="bg-red-100 text-dark-red text-[9px] font-bold px-1.5 py-0.2 rounded-full">15</span>
</button>
<button class="px-2.5 py-1 rounded text-on-surface-variant hover:text-charcoal hover:bg-warm-off-white">
                Duplicates (8)
              </button>
<button class="px-2.5 py-1 rounded text-on-surface-variant hover:text-charcoal hover:bg-warm-off-white">
                Clean (1,796)
              </button>
</div>
<!-- Quick Batch Automation -->
<div class="flex items-center gap-2">
<button class="px-2 py-1 text-[11px] bg-warm-off-white hover:bg-soft-stone border border-tactical-khaki text-charcoal rounded font-medium flex items-center gap-1 transition-all">
<span class="material-symbols-outlined text-[13px] text-olive-green" data-icon="auto_mode">auto_mode</span>
                Auto-Resolve 31 Warnings
              </button>
<button class="px-2 py-1 text-[11px] bg-red-50 hover:bg-red-100 border border-red-300 text-dark-red rounded font-medium flex items-center gap-1 transition-all">
<span class="material-symbols-outlined text-[13px]" data-icon="delete_sweep">delete_sweep</span>
                Exclude 15 Errors
              </button>
</div>
</div>
<!-- Search & Secondary Table Controls -->
<div class="flex items-center justify-between gap-3">
<div class="relative flex-1">
<span class="material-symbols-outlined absolute left-2.5 top-2 text-[16px] text-tactical-khaki" data-icon="search">search</span>
<input class="w-full pl-8 pr-3 py-1.5 text-[12px] bg-warm-off-white border border-soft-stone rounded focus:outline-none focus:border-army-olive text-charcoal placeholder:text-outline" placeholder="Search row, SKU, node code, or audit flag..." type="text"/>
</div>
<div class="flex items-center gap-2 text-[11px] font-mono text-on-surface-variant">
<span>Sort:</span>
<select class="bg-white border border-soft-stone rounded px-2 py-1 text-[11px] text-charcoal">
<option>Severity (Errors First)</option>
<option>Row Index (Ascending)</option>
<option>Quantity Outlier Magnitude</option>
</select>
</div>
</div>
</div>
<!-- Problematic & Flagged Records Table -->
<div class="bg-white border border-soft-stone rounded overflow-hidden shadow-sm">
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-soft-stone text-charcoal font-mono text-[10px] uppercase tracking-wider border-b-2 border-olive-green select-none">
<th class="table-cell-dense w-12 text-center">Row</th>
<th class="table-cell-dense w-24">Date</th>
<th class="table-cell-dense">Depot / Node</th>
<th class="table-cell-dense">Material / SKU</th>
<th class="table-cell-dense text-right w-20">Volume</th>
<th class="table-cell-dense">Integrity Flag / Diagnostic</th>
<th class="table-cell-dense text-center w-24">Severity</th>
<th class="table-cell-dense text-right w-28">Action</th>
</tr>
</thead>
<tbody class="divide-y divide-soft-stone font-body-sm text-[11.5px]">
<!-- ROW 241 (SELECTED ACTIVE ROW) -->
<tr class="bg-emerald-50/50 border-l-4 border-l-dark-red cursor-pointer">
<td class="table-cell-dense font-mono font-bold text-center text-charcoal">#241</td>
<td class="table-cell-dense font-mono text-on-surface-variant whitespace-nowrap">03 Oct 2026</td>
<td class="table-cell-dense">
<span class="inline-flex items-center gap-1 font-mono text-dark-red font-semibold bg-red-50 px-1 rounded">
<span class="material-symbols-outlined text-[13px]" data-icon="wrong_location">wrong_location</span>
                      LOC-9982 (GLACIER SUB)
                    </span>
</td>
<td class="table-cell-dense font-medium text-charcoal">
                    Potable Water <span class="font-mono text-[10px] text-tactical-khaki">(WTR-012)</span>
</td>
<td class="table-cell-dense font-mono text-right font-semibold text-charcoal">420 L</td>
<td class="table-cell-dense">
<span class="text-dark-red font-medium">Unrecognized formation code LOC-9982</span>
</td>
<td class="table-cell-dense text-center">
<span class="inline-flex px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-red-100 text-dark-red border border-red-300">
                      CRIT ERROR
                    </span>
</td>
<td class="table-cell-dense text-right whitespace-nowrap">
<button class="px-2 py-0.5 bg-army-olive text-white rounded text-[11px] font-medium hover:bg-primary-container shadow-xs">
                      Remap Node
                    </button>
</td>
</tr>
<!-- ROW 128 -->
<tr class="hover:bg-warm-off-white/80 transition-colors">
<td class="table-cell-dense font-mono text-center text-on-surface-variant">#128</td>
<td class="table-cell-dense font-mono text-on-surface-variant whitespace-nowrap">04 Oct 2026</td>
<td class="table-cell-dense font-mono text-charcoal">Forward Post Alpha (LOC-0042)</td>
<td class="table-cell-dense font-medium text-charcoal">
                    POL Arctic Diesel <span class="font-mono text-[10px] text-tactical-khaki">(FUEL-001)</span>
</td>
<td class="table-cell-dense font-mono text-right text-dark-red font-bold">— [NULL]</td>
<td class="table-cell-dense text-on-surface-variant">
<span class="text-dark-red">Null consumption quantity field in row parser</span>
</td>
<td class="table-cell-dense text-center">
<span class="inline-flex px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-red-100 text-dark-red border border-red-300">
                      CRIT ERROR
                    </span>
</td>
<td class="table-cell-dense text-right whitespace-nowrap">
<button class="px-2 py-0.5 bg-white border border-tactical-khaki text-charcoal rounded text-[11px] hover:bg-soft-stone">
                      Exclude
                    </button>
</td>
</tr>
<!-- ROW 388 -->
<tr class="hover:bg-warm-off-white/80 transition-colors">
<td class="table-cell-dense font-mono text-center text-on-surface-variant">#388</td>
<td class="table-cell-dense font-mono text-on-surface-variant whitespace-nowrap">01 Oct 2026</td>
<td class="table-cell-dense font-mono text-charcoal">Forward Post Bravo (LOC-0018)</td>
<td class="table-cell-dense font-medium text-charcoal">
                    POL Arctic Diesel <span class="font-mono text-[10px] text-tactical-khaki">(FUEL-001)</span>
</td>
<td class="table-cell-dense font-mono text-right font-bold text-amber-900">6,200 L</td>
<td class="table-cell-dense text-on-surface-variant">
<span class="text-amber-800 font-medium">Surge +412% over historical max (350-1,200 L)</span>
</td>
<td class="table-cell-dense text-center">
<span class="inline-flex px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-amber-100 text-amber-900 border border-muted-amber/50">
                      WARNING
                    </span>
</td>
<td class="table-cell-dense text-right whitespace-nowrap">
<button class="px-2 py-0.5 bg-white border border-tactical-khaki text-charcoal rounded text-[11px] hover:bg-soft-stone">
                      Approve Outlier
                    </button>
</td>
</tr>
<!-- ROW 512 -->
<tr class="hover:bg-warm-off-white/80 transition-colors">
<td class="table-cell-dense font-mono text-center text-on-surface-variant">#512</td>
<td class="table-cell-dense font-mono text-on-surface-variant whitespace-nowrap">02 Oct 2026</td>
<td class="table-cell-dense font-mono text-charcoal">Forward Post Alpha (LOC-0042)</td>
<td class="table-cell-dense font-medium text-charcoal">
                    POL Arctic Diesel <span class="font-mono text-[10px] text-tactical-khaki">(FUEL-001)</span>
</td>
<td class="table-cell-dense font-mono text-right font-semibold text-charcoal">680 L</td>
<td class="table-cell-dense text-on-surface-variant">
<span class="text-charcoal font-medium">Exact duplicate of CONS-8817 (Recorded 14:32)</span>
</td>
<td class="table-cell-dense text-center">
<span class="inline-flex px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-stone-200 text-charcoal border border-tactical-khaki">
                      DUPLICATE
                    </span>
</td>
<td class="table-cell-dense text-right whitespace-nowrap">
<button class="px-2 py-0.5 bg-white border border-tactical-khaki text-charcoal rounded text-[11px] hover:bg-soft-stone">
                      Merge / Skip
                    </button>
</td>
</tr>
<!-- ROW 604 -->
<tr class="hover:bg-warm-off-white/80 transition-colors">
<td class="table-cell-dense font-mono text-center text-on-surface-variant">#604</td>
<td class="table-cell-dense font-mono text-on-surface-variant whitespace-nowrap">30 Sep 2026</td>
<td class="table-cell-dense font-mono text-charcoal">Khardung Pass Depot (LOC-0033)</td>
<td class="table-cell-dense font-medium text-charcoal">
                    Sub-Zero Synthetic Lube <span class="font-mono text-[10px] text-tactical-khaki">(LUB-904)</span>
</td>
<td class="table-cell-dense font-mono text-right font-semibold text-charcoal">40 Can</td>
<td class="table-cell-dense text-on-surface-variant">
<span>Non-standard unit 'Ltrs' mapped into master 'Can'</span>
</td>
<td class="table-cell-dense text-center">
<span class="inline-flex px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-amber-100 text-amber-900 border border-muted-amber/50">
                      WARNING
                    </span>
</td>
<td class="table-cell-dense text-right whitespace-nowrap">
<span class="font-mono text-[10px] text-olive-green font-bold">Auto-Fixed</span>
</td>
</tr>
<!-- ROW 710 -->
<tr class="hover:bg-warm-off-white/80 transition-colors">
<td class="table-cell-dense font-mono text-center text-on-surface-variant">#710</td>
<td class="table-cell-dense font-mono text-on-surface-variant whitespace-nowrap">05 Oct 2026</td>
<td class="table-cell-dense font-mono text-charcoal">Post Charlie (LOC-0078)</td>
<td class="table-cell-dense font-medium text-charcoal">
                    Hypothermia Plasma Kit <span class="font-mono text-[10px] text-tactical-khaki">(MED-082)</span>
</td>
<td class="table-cell-dense font-mono text-right font-semibold text-charcoal">85 Kits</td>
<td class="table-cell-dense text-on-surface-variant">
<span class="text-amber-800">Batch expiration date (30-Sep) prior to record date</span>
</td>
<td class="table-cell-dense text-center">
<span class="inline-flex px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-amber-100 text-amber-900 border border-muted-amber/50">
                      WARNING
                    </span>
</td>
<td class="table-cell-dense text-right whitespace-nowrap">
<button class="px-2 py-0.5 bg-white border border-tactical-khaki text-charcoal rounded text-[11px] hover:bg-soft-stone">
                      Flag for Audit
                    </button>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Table Footer Pagination & Telemetry Audit info -->
<div class="px-3 py-2 bg-warm-off-white border-t border-soft-stone flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-on-surface-variant">
<div class="flex items-center gap-2">
<span>Showing 1–6 of 46 flagged records</span>
<span class="text-tactical-khaki">•</span>
<span class="text-emerald-800 font-sans font-medium flex items-center gap-1">
<span class="material-symbols-outlined text-[13px]" data-icon="lock">lock</span> Checksum Verification Active
              </span>
</div>
<div class="flex items-center gap-1">
<button class="px-2 py-0.5 bg-white border border-soft-stone rounded disabled:opacity-40" disabled="">Previous</button>
<button class="px-2 py-0.5 bg-army-olive text-white rounded font-bold">1</button>
<button class="px-2 py-0.5 bg-white border border-soft-stone rounded hover:bg-soft-stone">2</button>
<button class="px-2 py-0.5 bg-white border border-soft-stone rounded hover:bg-soft-stone">3</button>
<button class="px-2 py-0.5 bg-white border border-soft-stone rounded hover:bg-soft-stone">Next</button>
</div>
</div>
</div>
</div>
<!-- RIGHT COLUMN (~35%): Operational Resolution Drawer & Forecast Impact -->
<div class="lg:col-span-4 flex flex-col gap-3">
<!-- CARD 1: Selected Record Resolution Drawer -->
<div class="bg-white border-2 border-olive-green rounded p-3.5 shadow-sm">
<div class="flex items-center justify-between pb-2 border-b border-soft-stone">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-dark-red"></span>
<h2 class="font-mono text-[12px] font-bold text-charcoal uppercase tracking-wider">Record Resolution // Row 241</h2>
</div>
<span class="inline-flex px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-red-100 text-dark-red border border-red-300">
              UNMAPPED LOCATION
            </span>
</div>
<!-- Raw Input Strings -->
<div class="bg-warm-off-white border border-soft-stone rounded p-2.5 my-3 font-mono text-[11px] space-y-1">
<div class="text-[10px] text-tactical-khaki uppercase tracking-wider font-sans font-bold">Ingested Raw String:</div>
<div class="text-charcoal"><span class="text-outline">RAW_LOC:</span> "LOC-9982 (GLACIER SUB-POST)"</div>
<div class="text-charcoal"><span class="text-outline">RAW_SKU:</span> "WTR-012 - Potable Water"</div>
<div class="text-charcoal"><span class="text-outline">RAW_QTY:</span> "420.00" • <span class="text-outline">DATE:</span> "2026-10-03"</div>
</div>
<!-- Resolution Action Form -->
<div class="space-y-3">
<div>
<label class="block font-label-xs text-label-xs uppercase text-tactical-khaki mb-1">
                Target Existing Logistics Node:
              </label>
<select class="w-full bg-white border-2 border-army-olive rounded px-2.5 py-1.5 text-[12px] font-mono font-medium text-charcoal focus:outline-none">
<option selected="">Forward Post Alpha (LOC-0042 // Sector IV-B)</option>
<option>Forward Post Bravo (LOC-0018 // Sector IV-B)</option>
<option>Khardung Pass Depot (LOC-0033 // Transit Hub)</option>
<option>Glacier Basecamp Transit Node (LOC-0091)</option>
</select>
<div class="text-[10px] text-on-surface-variant mt-1 flex items-center gap-1">
<span class="material-symbols-outlined text-[13px] text-olive-green" data-icon="info">info</span>
                Confidence match: 89% proximity to Sub-Post 9982
              </div>
</div>
<!-- Radio Scope -->
<div class="space-y-1.5 pt-1">
<label class="flex items-center gap-2 text-[11px] text-charcoal cursor-pointer">
<input checked="" class="text-army-olive focus:ring-0" name="apply_scope" type="radio"/>
<span>Apply to all 4 matching records in this batch</span>
</label>
<label class="flex items-center gap-2 text-[11px] text-on-surface-variant cursor-pointer">
<input class="text-army-olive focus:ring-0" name="apply_scope" type="radio"/>
<span>Apply remapping to Row 241 only</span>
</label>
</div>
<!-- Action Buttons -->
<div class="flex items-center gap-2 pt-2 border-t border-soft-stone">
<button class="flex-1 py-1.5 px-3 bg-army-olive hover:bg-primary-container text-white rounded text-[12px] font-semibold transition-all shadow-xs flex items-center justify-center gap-1.5">
<span class="material-symbols-outlined text-[15px]" data-icon="check">check</span>
                Save &amp; Re-Validate
              </button>
<button class="py-1.5 px-3 bg-warm-off-white hover:bg-soft-stone border border-tactical-khaki text-charcoal rounded text-[12px] font-medium transition-all">
                Exclude Row
              </button>
</div>
</div>
</div>
<!-- CARD 2: Potential Demand Forecast Impact Preview -->
<div class="bg-white border border-soft-stone rounded p-3.5 shadow-sm space-y-3">
<div class="flex items-center justify-between pb-2 border-b border-soft-stone">
<h2 class="font-mono text-[12px] font-bold text-charcoal uppercase tracking-wider flex items-center gap-1.5">
<span class="material-symbols-outlined text-[16px] text-olive-green" data-icon="insights">insights</span>
              Demand Forecast Impact
            </h2>
<span class="font-mono text-[10px] bg-warm-off-white px-1.5 py-0.5 rounded text-tactical-khaki border border-soft-stone">
              RL-18 Engine
            </span>
</div>
<p class="text-[11px] text-on-surface-variant leading-snug">
            Simulating 1,796 incoming consumption data points on the <strong>LSTM Demand Engine v4.8</strong> pipeline:
          </p>
<!-- Impact Metrics Grid -->
<div class="grid grid-cols-2 gap-2 text-[11px] font-mono">
<div class="bg-warm-off-white p-2 rounded border border-soft-stone">
<div class="text-[10px] text-tactical-khaki uppercase font-sans">Sector IV-B Burn Rate</div>
<div class="font-bold text-charcoal text-[13px] mt-0.5">614 → 638 u/d</div>
<div class="text-[10px] text-amber-800 font-sans font-medium mt-0.5">+3.9% calibrated surge</div>
</div>
<div class="bg-warm-off-white p-2 rounded border border-soft-stone">
<div class="text-[10px] text-tactical-khaki uppercase font-sans">Forecast Confidence</div>
<div class="font-bold text-emerald-800 text-[13px] mt-0.5">91% → 94%</div>
<div class="text-[10px] text-emerald-700 font-sans font-medium mt-0.5">+3% 30-day continuous fill</div>
</div>
</div>
<!-- Critical Tactical Alert Pill -->
<div class="bg-amber-50 border border-muted-amber/60 rounded p-2 text-[11px] flex items-start gap-2">
<span class="material-symbols-outlined text-[16px] text-muted-amber shrink-0 mt-0.5" data-icon="hourglass_top">hourglass_top</span>
<div class="text-charcoal leading-tight">
<strong>Runway Shift Warning:</strong> POL Arctic Diesel projected stockout at <em>Forward Post Alpha</em> pulls forward from 11 Oct to <strong>10 Oct 18:00 IST</strong>!
            </div>
</div>
</div>
<!-- CARD 3: Ingestion Governance & Dual Signoff -->
<div class="bg-white border border-soft-stone rounded p-3.5 shadow-sm space-y-3">
<div class="flex items-center justify-between pb-1 border-b border-soft-stone">
<h2 class="font-mono text-[12px] font-bold text-charcoal uppercase tracking-wider">
              Ledger Ingestion Governance
            </h2>
<div class="text-[11px] font-mono font-bold text-emerald-800">SCORE: 96%</div>
</div>
<!-- Quality Metric Bar -->
<div class="space-y-1">
<div class="flex justify-between text-[10px] font-mono text-on-surface-variant">
<span>Integrity &amp; Validation Index</span>
<span>1,796 / 1,842 Records</span>
</div>
<div class="w-full bg-soft-stone h-2 rounded overflow-hidden flex">
<div class="bg-emerald-700 h-full" style="width: 97.5%" title="Valid: 97.5%"></div>
<div class="bg-muted-amber h-full" style="width: 1.7%" title="Warnings: 1.7%"></div>
<div class="bg-dark-red h-full" style="width: 0.8%" title="Errors: 0.8%"></div>
</div>
</div>
<!-- Dual Authorization Checkboxes -->
<div class="space-y-2 pt-1 font-mono text-[11px]">
<div class="flex items-center justify-between p-1.5 rounded bg-warm-off-white border border-soft-stone">
<span class="flex items-center gap-1.5 text-charcoal">
<span class="material-symbols-outlined text-[14px] text-emerald-700" data-icon="check_circle">check_circle</span>
                Hav. V. Negi (Operator)
              </span>
<span class="text-emerald-800 font-bold text-[10px]">PARSED // SIGNED</span>
</div>
<div class="flex items-center justify-between p-1.5 rounded bg-warm-off-white border border-muted-amber/60">
<span class="flex items-center gap-1.5 text-charcoal">
<span class="material-symbols-outlined text-[14px] text-muted-amber animate-spin" data-icon="progress_activity">progress_activity</span>
                Lt. Col. B. Kumar (Command)
              </span>
<span class="text-amber-900 font-bold text-[10px]">PENDING AUTH</span>
</div>
</div>
<!-- Dual PIN Authorization Input -->
<div class="pt-1">
<label class="block font-label-xs text-label-xs uppercase text-tactical-khaki mb-1">
              Officer PIN Signoff (DEF-ENC L4):
            </label>
<div class="flex items-center gap-2">
<input class="w-28 bg-warm-off-white border border-soft-stone rounded px-2.5 py-1.5 text-[12px] font-mono text-charcoal focus:border-army-olive focus:outline-none" placeholder="••••••••" type="password" value="78921"/>
<span class="text-[10px] font-mono text-emerald-800">Auth Token Active</span>
</div>
</div>
<!-- Commit Final Action Trigger -->
<div class="pt-2 border-t border-soft-stone space-y-2">
<button class="w-full py-2.5 px-4 bg-army-olive hover:bg-primary-container text-white font-semibold rounded text-[13px] tracking-wide flex items-center justify-center gap-2 shadow transition-all active:scale-[0.98]">
<span class="material-symbols-outlined text-[18px] text-secondary-fixed" data-icon="fact_check">fact_check</span>
              CONFIRM &amp; COMMIT 1,796 RECORDS
            </button>
<button class="w-full py-1.5 px-3 bg-white hover:bg-warm-off-white text-dark-red border border-red-200 rounded text-[11px] font-medium transition-all text-center">
              Quarantine &amp; Cancel Batch IMP-2026-0048
            </button>
</div>
</div>
</div>
</div>
</main>`;
