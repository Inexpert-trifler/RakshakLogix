// Screen: RL-04 — Role & Access Selection
// Route: /access
export const rl04Html = `<!-- Top Minimal Utility Bar from Shared Architecture (Linear Sub-Journey: No bottom tab nav, task-focused top status) -->
<header class="w-full px-4 md:px-8 py-2.5 flex justify-between items-center border-b border-[#E5E3D9] bg-white z-50 text-[11px] font-mono tracking-tight text-[#434844]">
<div class="flex items-center gap-3">
<span class="font-bold text-[#17251C] tracking-wider uppercase font-headline-sm text-sm">RAKSHAKLOGIX // DEFENCE LOGISTICS COMMAND</span>
<span class="text-[#c3c8c2] hidden sm:inline">|</span>
<span class="hidden sm:inline-flex items-center gap-1.5 text-[#516446]">
<span class="w-1.5 h-1.5 rounded-full bg-[#3F5135] animate-pulse"></span>
        GATEWAY NODE: DL-9941 [NORTHERN COMMAND]
      </span>
</div>
<div class="flex items-center gap-4">
<span class="hidden md:inline text-xs text-[#737873]">CLASSIFICATION: <strong class="text-[#17251C] font-semibold">RESTRICTED // APX-8012</strong></span>
<div class="flex items-center gap-2 px-2 py-0.5 border border-[#c3c8c2] rounded bg-[#F4F3ED]">
<span class="material-symbols-outlined text-[14px] text-[#3F5135]">shield</span>
<span class="text-[10px] font-semibold tracking-wider text-[#17251C]">MIL-STD-188F SECURE</span>
</div>
</div>
</header>
<!-- 42% / 58% Split Workspace Root Layout -->
<div class="flex-1 flex flex-col lg:flex-row w-full min-h-[calc(100vh-42px)]">
<!-- LEFT PANEL: 42% Desktop Width (#17251C Deep Forest Green Operational Canvas) -->
<aside class="w-full lg:w-[42%] bg-[#17251C] text-[#eff2ea] p-6 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[#3F5135]/40 tactical-grid-pattern contour-lines">
<!-- Topography & Vector Overlay Graphic Elements -->
<div class="absolute inset-0 pointer-events-none opacity-20">
<svg class="w-full h-full" preserveaspectratio="none" viewbox="0 0 500 800" xmlns="http://www.w3.org/2000/svg">
<path d="M-50,120 Q120,80 250,190 T550,220" fill="none" stroke="#A49A78" stroke-dasharray="3,3" stroke-width="0.75"></path>
<path d="M-30,260 Q180,240 320,380 T580,360" fill="none" stroke="#A49A78" stroke-width="0.75"></path>
<path d="M-60,420 Q90,380 280,510 T560,490" fill="none" stroke="#A49A78" stroke-dasharray="4,2" stroke-width="0.75"></path>
<path d="M-20,620 Q200,560 380,710 T540,680" fill="none" stroke="#A49A78" stroke-width="0.75"></path>
<!-- Transit node vectors -->
<circle cx="250" cy="190" fill="#A49A78" r="3"></circle>
<circle cx="320" cy="380" fill="#A49A78" r="2.5"></circle>
<line stroke="#3F5135" stroke-dasharray="2,2" stroke-width="1.5" x1="250" x2="320" y1="190" y2="380"></line>
</svg>
</div>
<!-- Left Panel Header Content -->
<div class="relative z-10 space-y-6">
<!-- Geodetic Coordinate Strip -->
<div class="flex flex-wrap items-center gap-y-1 gap-x-3 text-[10px] font-mono tracking-widest text-[#A49A78] uppercase border-b border-[#3F5135]/40 pb-3">
<span>LAT 34°08'44"N</span>
<span>•</span>
<span>LON 77°34'02"E</span>
<span>•</span>
<span>ALT 3,500M MSL</span>
<span class="ml-auto text-[#bacbbd] font-semibold">SECTOR: LEH-LADAKH</span>
</div>
<!-- Branding Stack -->
<div>
<div class="flex items-center gap-2.5 mb-2">
<span class="material-symbols-outlined text-[#d6e7d8] text-2xl">terminal</span>
<span class="text-xs font-mono uppercase tracking-widest text-[#bacbbd]">INTEGRATED DEFENCE ENCLAVE</span>
</div>
<h1 class="font-headline-xl text-3xl sm:text-4xl text-[#FFFFFF] tracking-tight uppercase font-bold leading-tight">
            RAKSHAKLOGIX
          </h1>
<p class="font-label-sm text-xs text-[#A49A78] tracking-widest uppercase mt-1 font-semibold">
            PREDICTIVE LOGISTICS &amp; FORWARD SUPPLY CHAIN
          </p>
</div>
<!-- Authentication Verification Pill -->
<div class="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#1f3226] border border-[#3F5135]">
<span class="w-2 h-2 rounded-full bg-[#52c41a] animate-pulse"></span>
<span class="font-mono text-xs font-semibold text-[#d6e7d8] tracking-wider uppercase">
            AUTHENTICATED // SEC-LVL 4 ACTIVE
          </span>
</div>
<!-- Operational Mandate Callout Box -->
<div class="bg-[#121c16]/85 border border-[#3F5135]/60 rounded-lg p-4 space-y-2">
<div class="flex items-center gap-2 text-[#A49A78] font-mono text-[10px] tracking-wider uppercase font-semibold">
<span class="material-symbols-outlined text-xs">verified</span>
            OPERATIONAL MANDATE
          </div>
<p class="text-xs text-[#d8dbd3] leading-relaxed">
            Integrated logistical lifecycle orchestration for forward depots, ration cold-chains, ordnance readiness, and active transit convoys across high-altitude and strategic border commands.
          </p>
</div>
<!-- Telemetry Metric Boxes -->
<div class="grid grid-cols-3 gap-2.5 pt-2">
<div class="bg-[#19271e] border border-[#3F5135]/40 rounded p-2.5">
<span class="block text-[9px] font-mono uppercase text-[#A49A78] tracking-wider mb-1">Active Corridors</span>
<span class="text-lg font-bold font-mono text-white">14</span>
<span class="block text-[9px] text-[#bacbbd] font-mono">NOMINAL FLOW</span>
</div>
<div class="bg-[#19271e] border border-[#3F5135]/40 rounded p-2.5">
<span class="block text-[9px] font-mono uppercase text-[#A49A78] tracking-wider mb-1">Forward Depots</span>
<span class="text-lg font-bold font-mono text-white">48</span>
<span class="block text-[9px] text-[#52c41a] font-mono">ONLINE / READY</span>
</div>
<div class="bg-[#19271e] border border-[#3F5135]/40 rounded p-2.5">
<span class="block text-[9px] font-mono uppercase text-[#A49A78] tracking-wider mb-1">Cryptography</span>
<span class="text-sm font-bold font-mono text-white mt-1">AES-256</span>
<span class="block text-[9px] text-[#A49A78] font-mono">GCM HARDENED</span>
</div>
</div>
</div>
<!-- Left Panel Bottom Footer Anchor -->
<div class="relative z-10 pt-8 mt-6 border-t border-[#3F5135]/40 space-y-3">
<p class="text-xs text-[#bacbbd] font-mono leading-tight">
<strong class="text-white">Predict. Prepare. Deliver.</strong> / Decision intelligence for mission-critical logistics.
        </p>
<div class="flex flex-wrap items-center justify-between text-[10px] font-mono text-[#A49A78] uppercase">
<span>MIL-STD-188F INTEROPERABLE</span>
<span>HARDWARE TOKEN SYNCHRONIZED</span>
</div>
</div>
</aside>
<!-- RIGHT PANEL: 58% Desktop Width (#F4F3ED Warm Off-White Interaction Canvas) -->
<main class="w-full lg:w-[58%] bg-[#F4F3ED] flex items-center justify-center p-4 sm:p-8 lg:p-10">
<!-- Max-width 620px Content Container -->
<div class="w-full max-w-[620px] bg-white border border-[#E5E3D9] rounded-xl shadow-[0_2px_4px_rgba(23,37,28,0.04)] p-6 sm:p-8 space-y-5">
<!-- Top Utility Bar with Mode Switcher Pill -->
<div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E5E3D9] text-[11px] font-mono">
<div class="flex items-center gap-2 text-[#434844]">
<span class="w-2 h-2 rounded-full bg-[#3F5135]"></span>
<span>NODE AUTH: <strong class="text-[#17251C]">ACTIVE</strong></span>
<span class="text-[#c3c8c2]">|</span>
<span>SESSION: <span class="text-[#17251C]">0x9AF8-D91</span></span>
</div>
<!-- Interactive Mode Toggle: Multi-Role vs Single Assigned Role -->
<div class="inline-flex p-0.5 rounded-lg border border-[#A49A78] bg-[#F4F3ED] text-[10px] font-sans font-semibold">
<button class="px-2.5 py-1 rounded bg-[#17251C] text-white transition-all duration-150" id="toggle-multi-btn">
              Multi-Role Selection
            </button>
<button class="px-2.5 py-1 rounded text-[#434844] hover:text-[#17251C] transition-all duration-150" id="toggle-single-btn">
              Single Assigned Role
            </button>
</div>
</div>
<!-- Eyebrow & Headline Header -->
<div class="space-y-1.5">
<div class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-[#A49A78] bg-[#F4F3ED] text-[10px] font-mono tracking-widest uppercase font-semibold text-[#3F5135]">
<span class="material-symbols-outlined text-[13px]">shield</span>
            AUTHORIZED ACCESS // RBAC ENCLAVE
          </div>
<h2 class="font-headline-lg text-xl sm:text-2xl text-[#17251C] font-bold tracking-tight" id="main-heading">
            Select your authorized workspace
          </h2>
<p class="text-xs text-[#434844]" id="main-subtext">
            Choose the operational workspace associated with your assigned clearance and mission posting.
          </p>
</div>
<!-- Authenticated User Identity Strip -->
<div class="flex items-center justify-between bg-[#F4F3ED] border border-[#E5E3D9] rounded-lg p-3">
<div class="flex items-center gap-3">
<div class="w-9 h-9 rounded bg-[#17251C] text-[#F4F3ED] flex items-center justify-center font-mono font-bold text-xs border border-[#3F5135]">
              BK
            </div>
<div>
<div class="flex items-center gap-2">
<span class="font-semibold text-xs text-[#17251C]">Bhavya Kumar</span>
<span class="text-[10px] font-mono bg-white border border-[#c3c8c2] px-1.5 rounded text-[#434844]">IC-78921K</span>
</div>
<p class="text-[11px] text-[#737873]">
                Authenticated User • HQ Northern Command
              </p>
</div>
</div>
<div class="hidden sm:flex flex-col items-end text-right font-mono">
<span class="inline-flex items-center gap-1 text-[10px] font-semibold text-[#3F5135]">
<span class="w-1.5 h-1.5 rounded-full bg-[#3F5135]"></span>
              Active Secure Session
            </span>
<span class="text-[10px] text-[#737873]">Node DL-9941</span>
</div>
</div>
<!-- VIEW 1: Multi-Role Selection List (Default View) -->
<div class="space-y-2" id="multi-role-view">
<!-- Role Item 01 (Default Selected) -->
<div class="role-card cursor-pointer border rounded-lg p-3 transition-all duration-150 border-[#3F5135] bg-[#f2f5ec]" data-role="01">
<div class="flex items-start justify-between gap-3">
<div class="flex items-start gap-3">
<div class="role-icon-box mt-0.5 w-7 h-7 rounded border border-[#3F5135] bg-white flex items-center justify-center text-[#3F5135]">
<span class="material-symbols-outlined text-[17px]">inventory_2</span>
</div>
<div>
<div class="flex items-center gap-2">
<span class="font-semibold text-xs text-[#17251C] font-mono">01 — Logistics Planner</span>
<span class="role-badge text-[9px] font-mono uppercase px-1.5 py-0.2 rounded border font-semibold border-[#3F5135] text-[#17251C] bg-white">
                      ACTIVE CLEARANCE
                    </span>
</div>
<p class="text-[11px] text-[#434844] mt-0.5 leading-snug">
                    Monitor demand, inventory, replenishment and logistics readiness.
                  </p>
</div>
</div>
<div class="radio-indicator mt-1">
<span class="material-symbols-outlined fill text-base text-[#17251C]">check_circle</span>
</div>
</div>
</div>
<!-- Role Item 02 -->
<div class="role-card cursor-pointer border rounded-lg p-3 transition-all duration-150 border-[#E5E3D9] bg-white hover:border-[#A49A78]" data-role="02">
<div class="flex items-start justify-between gap-3">
<div class="flex items-start gap-3">
<div class="role-icon-box mt-0.5 w-7 h-7 rounded border border-[#c3c8c2] bg-[#F4F3ED] flex items-center justify-center text-[#434844]">
<span class="material-symbols-outlined text-[17px]">local_shipping</span>
</div>
<div>
<div class="flex items-center gap-2">
<span class="font-semibold text-xs text-[#17251C] font-mono">02 — Transport Coordinator</span>
<span class="role-badge hidden text-[9px] font-mono uppercase px-1.5 py-0.2 rounded border font-semibold border-[#3F5135] text-[#17251C] bg-white">
                      ACTIVE CLEARANCE
                    </span>
</div>
<p class="text-[11px] text-[#434844] mt-0.5 leading-snug">
                    Manage fleet, shipments, routes and transportation capacity.
                  </p>
</div>
</div>
<div class="radio-indicator mt-1">
<span class="material-symbols-outlined text-base text-[#c3c8c2]">radio_button_unchecked</span>
</div>
</div>
</div>
<!-- Role Item 03 -->
<div class="role-card cursor-pointer border rounded-lg p-3 transition-all duration-150 border-[#E5E3D9] bg-white hover:border-[#A49A78]" data-role="03">
<div class="flex items-start justify-between gap-3">
<div class="flex items-start gap-3">
<div class="role-icon-box mt-0.5 w-7 h-7 rounded border border-[#c3c8c2] bg-[#F4F3ED] flex items-center justify-center text-[#434844]">
<span class="material-symbols-outlined text-[17px]">radar</span>
</div>
<div>
<div class="flex items-center gap-2">
<span class="font-semibold text-xs text-[#17251C] font-mono">03 — Operations Viewer</span>
<span class="role-badge hidden text-[9px] font-mono uppercase px-1.5 py-0.2 rounded border font-semibold border-[#3F5135] text-[#17251C] bg-white">
                      ACTIVE CLEARANCE
                    </span>
</div>
<p class="text-[11px] text-[#434844] mt-0.5 leading-snug">
                    Monitor operational status, risks and logistics intelligence.
                  </p>
</div>
</div>
<div class="radio-indicator mt-1">
<span class="material-symbols-outlined text-base text-[#c3c8c2]">radio_button_unchecked</span>
</div>
</div>
</div>
<!-- Role Item 04 -->
<div class="role-card cursor-pointer border rounded-lg p-3 transition-all duration-150 border-[#E5E3D9] bg-white hover:border-[#A49A78]" data-role="04">
<div class="flex items-start justify-between gap-3">
<div class="flex items-start gap-3">
<div class="role-icon-box mt-0.5 w-7 h-7 rounded border border-[#c3c8c2] bg-[#F4F3ED] flex items-center justify-center text-[#434844]">
<span class="material-symbols-outlined text-[17px]">insights</span>
</div>
<div>
<div class="flex items-center gap-2">
<span class="font-semibold text-xs text-[#17251C] font-mono">04 — Data &amp; ML Analyst</span>
<span class="role-badge hidden text-[9px] font-mono uppercase px-1.5 py-0.2 rounded border font-semibold border-[#3F5135] text-[#17251C] bg-white">
                      ACTIVE CLEARANCE
                    </span>
</div>
<p class="text-[11px] text-[#434844] mt-0.5 leading-snug">
                    Review forecasts, models, data quality and predictive performance.
                  </p>
</div>
</div>
<div class="radio-indicator mt-1">
<span class="material-symbols-outlined text-base text-[#c3c8c2]">radio_button_unchecked</span>
</div>
</div>
</div>
<!-- Role Item 05 -->
<div class="role-card cursor-pointer border rounded-lg p-3 transition-all duration-150 border-[#E5E3D9] bg-white hover:border-[#A49A78]" data-role="05">
<div class="flex items-start justify-between gap-3">
<div class="flex items-start gap-3">
<div class="role-icon-box mt-0.5 w-7 h-7 rounded border border-[#c3c8c2] bg-[#F4F3ED] flex items-center justify-center text-[#434844]">
<span class="material-symbols-outlined text-[17px]">admin_panel_settings</span>
</div>
<div>
<div class="flex items-center gap-2">
<span class="font-semibold text-xs text-[#17251C] font-mono">05 — System Administrator</span>
<span class="role-badge hidden text-[9px] font-mono uppercase px-1.5 py-0.2 rounded border font-semibold border-[#3F5135] text-[#17251C] bg-white">
                      ACTIVE CLEARANCE
                    </span>
</div>
<p class="text-[11px] text-[#434844] mt-0.5 leading-snug">
                    Manage users, permissions, configuration and audit controls.
                  </p>
</div>
</div>
<div class="radio-indicator mt-1">
<span class="material-symbols-outlined text-base text-[#c3c8c2]">radio_button_unchecked</span>
</div>
</div>
</div>
</div>
<!-- VIEW 2: Single Assigned Role Alternate View (Hidden by default, activated via top switcher) -->
<div class="hidden space-y-3" id="single-role-view">
<div class="p-4 rounded-lg border-2 border-[#3F5135] bg-[#f2f5ec] space-y-3">
<div class="flex items-center justify-between">
<span class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#3F5135] bg-white px-2 py-0.5 border border-[#3F5135] rounded">
                EXPLICIT DEPUTATION ASSIGNMENT
              </span>
<span class="text-[10px] font-mono text-[#737873]">POSTING REF: LEH-LAD-4902</span>
</div>
<div class="flex items-start gap-3.5">
<div class="w-10 h-10 rounded border border-[#3F5135] bg-white flex items-center justify-center text-[#17251C] shrink-0 mt-0.5">
<span class="material-symbols-outlined text-2xl">inventory_2</span>
</div>
<div>
<h3 class="text-sm font-bold font-mono text-[#17251C]">Logistics Planner (Exclusive Workspace)</h3>
<p class="text-xs text-[#434844] mt-0.5">
                  Your credentials have been provisioned exclusively for operational logistics planning at Northern Command Depot Hub.
                </p>
</div>
</div>
<div class="pt-2 border-t border-[#c3c8c2]/50 text-[11px] grid grid-cols-2 gap-2 text-[#434844] font-mono">
<div>• Mandate: <strong>Depot Orchestration</strong></div>
<div>• Authority: <strong>Quartermaster Gen Branch</strong></div>
</div>
</div>
</div>
<!-- Authorization Metadata Summary Panel (Dynamically updates based on selection) -->
<div class="bg-[#F4F3ED] border border-[#E5E3D9] rounded-lg p-3 text-xs space-y-2" id="metadata-summary-panel">
<div class="flex flex-wrap items-center justify-between gap-1 text-[11px] font-mono text-[#17251C] border-b border-[#E5E3D9] pb-2">
<span id="meta-access-level">Access Level: <strong>Tier-2 Operational Planning</strong></span>
<span class="text-[#737873]" id="meta-station">Station: <strong>Leh Logistics Hub</strong></span>
</div>
<div class="space-y-1">
<div class="text-[10px] font-mono uppercase text-[#737873] tracking-wider">Modules Granted:</div>
<div class="text-[11px] text-[#20241F] font-mono" id="meta-modules">
              Dashboard • Inventory Matrix • Forecasting Engine • Forward Routes • Cold-Chain Simulation
            </div>
</div>
<div class="pt-1 flex items-center justify-between text-[10px] font-mono">
<span class="text-[#737873]">Clearance Tag:</span>
<span class="font-semibold text-[#17251C] bg-white px-2 py-0.5 border border-[#c3c8c2] rounded">
              Restricted // Need-To-Know Directive APX-8012
            </span>
</div>
</div>
<!-- Primary Operational Action -->
<div class="space-y-2 pt-1">
<button class="w-full bg-[#17251C] hover:bg-[#3F5135] active:bg-[#121c16] text-white py-3 px-4 rounded-md font-semibold text-xs sm:text-sm tracking-wide transition-all duration-150 flex items-center justify-center gap-2 border border-[#17251C] shadow-sm" id="btn-enter-workspace">
<span>Enter Workspace</span>
<span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
<div class="text-center">
<button class="text-xs text-[#737873] hover:text-[#ba1a1a] transition-colors py-1 inline-flex items-center gap-1 font-mono" id="btn-signout">
<span class="material-symbols-outlined text-xs">logout</span>
              Sign Out (Terminate Session)
            </button>
</div>
</div>
<!-- Security & Legal Protocol Footer -->
<div class="pt-2 border-t border-[#E5E3D9] flex items-start gap-2 text-[10px] text-[#737873]">
<span class="material-symbols-outlined text-[13px] text-[#3F5135] shrink-0 mt-0.5">lock</span>
<p class="leading-tight">
            Access is strictly governed by institutional role-based permissions (RBAC). • Secure operational session (MIL-STD-188F) auditable under Defence Cyber Agency protocols.
          </p>
</div>
</div>
</main>
</div>
<!-- Micro-Interactivity Vanilla JS Script -->`;
