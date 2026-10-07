// Screen: RL-02 — Password Recovery // Supply Node
// Route: /forgot-password
export const rl02Html = `<!-- Core 42% / 58% Split Application Canvas -->
<main class="flex-1 flex flex-col lg:flex-row w-full min-h-screen">
<!-- LEFT PANEL (42% Width on Desktop, Hidden on Mobile/Small Tablet) -->
<aside class="hidden lg:flex lg:w-[42%] bg-primary-container text-surface flex-col justify-between p-8 xl:p-10 relative border-r border-outline-variant/30 overflow-hidden tactical-grid contour-lines">
<!-- Hairline Tactical Coordinate Overlays -->
<div class="absolute inset-0 pointer-events-none opacity-20">
<svg class="w-full h-full stroke-[#A49A78]" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M -50,150 Q 200,80 450,220 T 900,180" stroke-dasharray="4 6" stroke-width="0.75"></path>
<path d="M -50,260 Q 180,180 500,320 T 900,290" stroke-width="0.75"></path>
<path d="M -50,380 Q 220,310 540,440 T 900,410" stroke-dasharray="8 4" stroke-width="0.75"></path>
<path d="M -50,520 Q 260,460 580,580 T 900,530" stroke-width="0.75"></path>
<circle cx="280" cy="340" fill="#A49A78" r="1.5"></circle>
<circle cx="480" cy="210" fill="#A49A78" r="1.5"></circle>
<circle cx="160" cy="510" fill="#A49A78" r="1.5"></circle>
</svg>
</div>
<!-- Top Module: Status & Institutional Identity -->
<div class="relative z-10 space-y-6">
<!-- Telemetry & Status Pill -->
<div class="flex items-center justify-between border-b border-[#A49A78]/20 pb-4">
<div class="inline-flex items-center gap-2 px-2.5 py-1 bg-[#17251C] border border-[#596B48] rounded">
<span class="inline-block w-2 h-2 rounded-full bg-[#596B48] animate-pulse"></span>
<span class="font-mono text-label-xs text-[#E5E3D9] tracking-widest uppercase">SYSTEM READY</span>
</div>
<span class="font-mono text-label-xs text-[#A49A78] tracking-wider uppercase">SEC-LVL 4 // HARDENED</span>
</div>
<!-- Node & Geo Coordinates -->
<div class="space-y-1 font-mono text-label-xs text-[#A49A78]/90">
<p class="tracking-wide">MOD-ILMS NODE REF: RL-N941 // SEC-LVL 4</p>
<p class="text-[#E5E3D9]/75 tracking-wider">LAT 34°08'44"N / LON 77°34'02"E / ALT 3,500M MSL</p>
</div>
<!-- Institutional Header / Crest -->
<div class="pt-2">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded border border-[#596B48] bg-[#17251C] flex items-center justify-center text-[#E5E3D9]">
<span class="material-symbols-outlined text-2xl" style="font-variation-settings: 'FILL' 1;">shield</span>
</div>
<div>
<h1 class="text-headline-sm font-headline-sm font-semibold tracking-wider text-[#F4F3ED] uppercase">
                RAKSHAKLOGIX
              </h1>
<p class="text-label-xs font-label-xs text-[#A49A78] tracking-widest uppercase">
                MINISTRY OF DEFENCE SUPPLY NODE
              </p>
</div>
</div>
<div class="mt-4 inline-block px-2.5 py-1 bg-[#20241F]/80 border-l-2 border-[#596B48]">
<p class="text-label-xs font-label-xs text-[#E5E3D9] tracking-wider uppercase">
              PREDICTIVE LOGISTICS &amp; FORWARD SUPPLY CHAIN
            </p>
</div>
</div>
</div>
<!-- Middle Module: Operational Mandate -->
<div class="relative z-10 my-8 p-4 bg-[#20241F]/60 border border-[#A49A78]/25 rounded">
<div class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-[#A49A78] text-base shrink-0 mt-0.5">terminal</span>
<p class="text-body-sm font-body-sm text-[#E5E3D9] leading-relaxed">
<strong class="font-medium text-[#F4F3ED] tracking-wide">OPERATIONAL MANDATE:</strong> Integrated logistical lifecycle orchestration for forward depots, ration cold-chains, ordnance readiness, and active transit convoys across high-altitude and strategic border commands.
          </p>
</div>
</div>
<!-- Bottom Module: Philosophy & Tactical Metrics Grid -->
<div class="relative z-10 space-y-6">
<div>
<h2 class="text-headline-sm font-headline-sm font-semibold text-[#F4F3ED] tracking-wide">
            Predict. Prepare. Deliver.
          </h2>
<p class="text-body-sm font-body-sm text-[#A49A78] mt-1">
            Decision intelligence for mission-critical logistics.
          </p>
</div>
<!-- Tactical Metric Summary Box -->
<div class="p-3.5 bg-[#17251C] border border-[#596B48]/40 rounded grid grid-cols-2 gap-3 text-left">
<div class="border-r border-[#A49A78]/20 pr-3">
<span class="block text-label-xs font-mono text-[#A49A78] uppercase">Active Corridors</span>
<div class="flex items-baseline gap-1 mt-0.5">
<span class="text-base font-semibold text-[#F4F3ED] font-mono">14</span>
<span class="text-label-xs text-[#7c8f69] font-mono">NOMINAL</span>
</div>
</div>
<div class="pl-1">
<span class="block text-label-xs font-mono text-[#A49A78] uppercase">Forward Depots</span>
<div class="flex items-baseline gap-1 mt-0.5">
<span class="text-base font-semibold text-[#F4F3ED] font-mono">48</span>
<span class="text-label-xs text-[#7c8f69] font-mono">ONLINE</span>
</div>
</div>
<div class="col-span-2 pt-2 border-t border-[#A49A78]/20 flex items-center justify-between text-label-xs font-mono text-[#A49A78]">
<span>CRYPTOGRAPHY: AES-256 GCM</span>
<span class="text-[#E5E3D9]">MIL-STD-188F INTEROPERABLE</span>
</div>
</div>
</div>
</aside>
<!-- RIGHT PANEL (58% Width on Desktop, 100% on Mobile / Warm Off-White #F4F3ED Canvas) -->
<section class="w-full lg:w-[58%] bg-surface flex flex-col justify-between p-4 sm:p-8 xl:p-12 relative overflow-y-auto">
<!-- Top Operational Utility Bar -->
<header class="w-full flex items-center justify-between pb-4 border-b border-outline-variant/60">
<!-- Mobile Institutional Badge -->
<div class="flex lg:hidden items-center gap-2">
<span class="material-symbols-outlined text-primary text-xl" style="font-variation-settings: 'FILL' 1;">shield</span>
<span class="font-headline-sm text-headline-sm font-semibold text-primary uppercase tracking-wider">RAKSHAKLOGIX</span>
</div>
<!-- Node Status Indicator -->
<div class="hidden sm:flex items-center gap-2 font-mono text-label-xs text-on-surface-variant">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>PORTAL GATEWAY RL-V2.4</span>
</div>
<div class="flex items-center gap-3">
<div class="font-mono text-label-xs text-on-surface-variant flex items-center gap-1.5 px-2 py-0.5 bg-surface-container border border-outline-variant rounded">
<span>TLS 1.3 HARDENED</span>
<span class="text-secondary font-bold">●</span>
<span class="hidden sm:inline">NODE AUTH: ACTIVE</span>
</div>
<!-- Interactive State Switcher for Audit/Evaluation Demonstration -->
<button class="text-label-xs font-label-xs font-medium px-2 py-0.5 border border-outline text-secondary hover:bg-surface-container-high transition-colors rounded" id="toggle-state-btn" type="button">
            Switch: Request / Sent
          </button>
</div>
</header>
<!-- Central Form Canvas (Vertically centered, max 420px) -->
<div class="w-full max-w-[420px] mx-auto my-auto py-8">
<!-- STATE 1: RECOVERY REQUEST FORM -->
<div class="space-y-6" id="state-recovery-form">
<!-- Header cluster -->
<div>
<!-- Eyebrow Tag -->
<div class="inline-flex items-center gap-1.5 px-2 py-0.5 mb-3 bg-surface-container-low border border-outline-variant rounded">
<span class="material-symbols-outlined text-secondary text-sm">lock_reset</span>
<span class="font-label-xs text-label-xs font-semibold text-secondary tracking-wider uppercase">SECURE ACCESS</span>
</div>
<h2 class="text-headline-lg font-headline-lg text-primary tracking-tight font-semibold">
              Forgot your password?
            </h2>
<p class="text-body-md font-body-md text-on-surface-variant mt-2 leading-relaxed">
              Enter your registered email or service ID and we'll send you instructions to restore access.
            </p>
</div>
<!-- Muted Alert / Inline State Indicator (Simulated restrained warning/guidance) -->
<div class="hidden p-3 bg-[#C49A45]/15 border border-[#C49A45] rounded flex items-start gap-2.5" id="validation-note">
<span class="material-symbols-outlined text-[#7A5B18] text-base shrink-0 mt-0.5">warning</span>
<p class="text-body-sm font-body-sm text-[#7A5B18]">
              Enter a valid service number (e.g. IC-78921K) or defence enterprise email address.
            </p>
</div>
<!-- Form Element -->
<form class="space-y-4" id="recovery-form" onsubmit="event.preventDefault(); triggerSuccess();">
<div>
<div class="flex justify-between items-center mb-1.5">
<label class="text-label-sm font-label-sm text-primary uppercase font-semibold" for="service-id-input">
                  Email / Service ID
                </label>
<span class="font-mono text-label-xs text-outline">AUTH-KEY</span>
</div>
<div class="relative rounded-md">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
<span class="material-symbols-outlined text-lg">badge</span>
</div>
<input class="w-full pl-10 pr-3 py-2 text-body-md font-body-md bg-surface-container-lowest text-primary border border-[#E5E3D9] rounded-md focus:ring-1 focus:ring-[#17251C] focus:border-[#17251C] placeholder:text-outline/70 transition-all font-mono" id="service-id-input" placeholder="IC-78921K / army.mil.in" required="" type="text"/>
</div>
<p class="mt-1.5 text-body-sm font-body-sm text-on-surface-variant flex items-center gap-1">
<span class="material-symbols-outlined text-sm text-outline">info</span>
<span>Accepts Military Service Number or Defence Enterprise Email</span>
</p>
</div>
<!-- Primary Action Trigger -->
<div class="pt-2">
<button class="w-full py-2.5 px-4 bg-primary-container hover:bg-[#3F5135] active:bg-[#030e07] text-on-primary font-label-md text-label-md font-medium rounded-md border border-primary-container transition-all flex items-center justify-center gap-2 cursor-pointer shadow-none" type="submit">
<span>Send Reset Instructions</span>
<span class="material-symbols-outlined text-base">arrow_forward</span>
</button>
</div>
<!-- Back to Sign In Action -->
<div class="pt-2 text-center">
<a class="inline-flex items-center gap-1.5 text-label-md font-label-md font-medium text-secondary hover:text-primary transition-colors py-1 px-2 rounded hover:bg-surface-container" href="#" onclick="event.preventDefault();">
<span class="material-symbols-outlined text-base">arrow_back</span>
<span>Back to Sign In</span>
</a>
</div>
</form>
<!-- Security Footnote Container -->
<div class="pt-4 border-t border-outline-variant/60 flex items-center gap-2 text-on-surface-variant font-mono text-label-xs">
<span class="material-symbols-outlined text-sm text-secondary">verified_user</span>
<span>Secure account recovery • Encrypted connection (MIL-STD-188F)</span>
</div>
</div>
<!-- STATE 2: RECOVERY SUCCESS STATE (Hidden by default, toggleable via script or form submission) -->
<div class="hidden space-y-6" id="state-recovery-success">
<!-- Header Cluster with Status Pill -->
<div>
<div class="inline-flex items-center gap-1.5 px-2.5 py-1 mb-3 bg-[#516446]/10 border border-[#516446] rounded">
<span class="material-symbols-outlined text-secondary text-sm" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="font-label-xs text-label-xs font-semibold text-secondary tracking-wider uppercase">REQUEST SENT</span>
</div>
<h2 class="text-headline-lg font-headline-lg text-primary tracking-tight font-semibold">
              Check your inbox
            </h2>
<p class="text-body-md font-body-md text-on-surface-variant mt-2 leading-relaxed">
              If an account exists for this address, recovery instructions have been sent to your registered defence communications channel.
            </p>
</div>
<!-- Dispatch Telemetry Card -->
<div class="p-4 bg-surface-container-lowest border border-[#E5E3D9] rounded-md space-y-2">
<div class="flex items-center justify-between text-label-xs font-mono text-outline">
<span>DISPATCH PROTOCOL</span>
<span class="text-secondary font-medium">MOD-COMM-SPEC-9</span>
</div>
<p class="font-mono text-body-sm text-primary font-medium" id="display-target">
              user-dispatch@army.mil.in
            </p>
<div class="text-label-xs text-on-surface-variant font-body-sm pt-2 border-t border-[#E5E3D9]/60 flex items-center gap-1.5">
<span class="material-symbols-outlined text-sm text-secondary">schedule</span>
<span>Authorization link valid for 15 minutes</span>
</div>
</div>
<!-- Primary Confirmation Action -->
<div class="space-y-3 pt-2">
<button class="w-full py-2.5 px-4 bg-primary-container hover:bg-[#3F5135] active:bg-[#030e07] text-on-primary font-label-md text-label-md font-medium rounded-md border border-primary-container transition-all flex items-center justify-center gap-2 cursor-pointer" onclick="triggerReset();" type="button">
<span>Return to Sign In</span>
</button>
<div class="text-center pt-2">
<button class="text-label-sm font-label-sm text-secondary hover:text-primary transition-colors underline decoration-[#596B48] underline-offset-4" onclick="triggerReset();" type="button">
                Didn't receive an email? Try again
              </button>
</div>
</div>
<!-- Security Footnote Container -->
<div class="pt-4 border-t border-outline-variant/60 flex items-center gap-2 text-on-surface-variant font-mono text-label-xs">
<span class="material-symbols-outlined text-sm text-secondary">security</span>
<span>Defence Intranet Routing • Node Ref DL-9941</span>
</div>
</div>
</div>
<!-- Bottom Logistics Directorate Footer -->
<footer class="w-full pt-4 border-t border-outline-variant/60 flex flex-col sm:flex-row justify-between items-center gap-2 text-label-xs font-body-sm text-on-surface-variant">
<div class="flex items-center gap-2">
<span class="w-1.5 h-1.5 rounded-full bg-outline"></span>
<span>RakshakLogix • Operational Logistics Intelligence</span>
</div>
<div class="text-outline text-right">
          © 2026 Ministry of Defence Logistics Directorate • Classification: Restricted
        </div>
</footer>
</section>
</main>
<!-- Interactive State Controller -->`;
