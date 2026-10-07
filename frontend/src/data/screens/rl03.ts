// Screen: RL-03 — Reset Password // Cryptographic Key
// Route: /reset-password
export const rl03Html = `<!-- TOP MINIMAL SECURITY TICKER / STATUS STRIP -->
<div class="w-full bg-primary-container text-on-primary-container px-4 md:px-margin-desktop py-1.5 flex justify-between items-center text-label-xs font-label-xs border-b border-outline-variant">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-tertiary-fixed inline-block"></span>
<span class="text-primary-fixed tracking-wider">DEFENCE LOGISTICS COMMAND ENCLAVE // NODE REF: RL-N941</span>
<span class="hidden sm:inline text-outline-variant">• LAT 34°08'44"N / LON 77°34'02"E (LEH DEPOT CLUSTER)</span>
</div>
<div class="flex items-center gap-4">
<span class="text-outline-variant hidden md:inline">SESSION ID: 0x9AF8-D91</span>
<span class="text-primary-fixed bg-surface-container-highest px-2 py-0.5 rounded text-on-primary-fixed">CLEARANCE: LEVEL 4</span>
</div>
</div>
<!-- MAIN WORKSPACE SPLIT (12 COLUMNS ARCHITECTURE) -->
<div class="flex-1 flex flex-col lg:flex-row w-full min-h-[calc(100vh-66px)]">
<!-- LEFT IDENTITY PANEL (42% on Desktop, Tactical Deep Green) -->
<div class="lg:w-[42%] bg-primary-container text-on-primary-fixed relative overflow-hidden flex flex-col justify-between p-6 sm:p-8 lg:p-10 border-r border-[#3f5135]/40">
<!-- Geodetic & Contour Background FX -->
<div class="absolute inset-0 custom-grid-pattern pointer-events-none"></div>
<div class="absolute inset-0 contour-lines pointer-events-none"></div>
<!-- Top Identity Cluster -->
<div class="relative z-10 space-y-6">
<div class="flex items-center justify-between">
<div class="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#132018]/80 text-[#d8dbd3] text-label-xs font-label-xs border border-[#3f5135]/50 tracking-wider">
<span class="w-1.5 h-1.5 rounded-full bg-tertiary-fixed"></span>
            SYSTEM READY // SEC-LVL 4 HARDENED
          </div>
<span class="text-label-xs font-label-xs text-[#a49a78] tracking-wider font-mono">ALT: 3,500M MSL</span>
</div>
<div>
<div class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-primary-fixed" data-icon="shield">shield</span>
<span class="text-headline-lg font-headline-lg tracking-wider text-primary-fixed uppercase">RAKSHAKLOGIX</span>
</div>
<p class="text-label-sm font-label-sm text-[#a49a78] tracking-widest uppercase mt-1">
            PREDICTIVE LOGISTICS &amp; FORWARD SUPPLY CHAIN
          </p>
</div>
<!-- Operational Mandate Callout Card -->
<div class="p-4 rounded-xl bg-[#132018]/70 border border-[#3f5135]/40 space-y-2 mt-4 shadow-sm">
<div class="flex items-center justify-between text-label-xs font-label-xs text-[#a49a78] tracking-wider font-mono">
<span>DIRECTIVE // APX-8012</span>
<span>NORTHERN COMMAND</span>
</div>
<p class="text-[13px] leading-relaxed font-body-sm text-[#d8dbd3]">
            OPERATIONAL MANDATE: Integrated logistical lifecycle orchestration for forward depots, ration cold-chains, ordnance readiness, and active transit convoys across high-altitude and strategic border commands.
          </p>
</div>
</div>
<!-- Mid-Panel Vector Topology Motif -->
<div class="relative z-10 my-6 py-4 border-y border-[#3f5135]/40 flex flex-col gap-2">
<div class="flex justify-between items-center text-label-xs font-label-xs text-[#a49a78] font-mono tracking-wider">
<span>COORDINATE MAPPING // SECTOR IV-B</span>
<span class="material-symbols-outlined text-primary-fixed" data-icon="terminal">terminal</span>
</div>
<div class="grid grid-cols-3 gap-2 text-center text-label-xs font-label-xs">
<div class="bg-[#132018]/70 py-2.5 px-1 rounded border border-[#3f5135]/40">
<div class="text-[#a49a78] font-mono tracking-wider text-[10px]">SURVEY ROUTE</div>
<div class="text-[#f7faf2] font-semibold mt-1">NH-1D SECURE</div>
</div>
<div class="bg-[#132018]/70 py-2.5 px-1 rounded border border-[#3f5135]/40">
<div class="text-[#a49a78] font-mono tracking-wider text-[10px]">COLD-CHAIN</div>
<div class="text-[#f7faf2] font-semibold mt-1">-18°C NOMINAL</div>
</div>
<div class="bg-[#132018]/70 py-2.5 px-1 rounded border border-[#3f5135]/40">
<div class="text-[#a49a78] font-mono tracking-wider text-[10px]">AIR DROP</div>
<div class="text-[#f7faf2] font-semibold mt-1">CHUSHUL STBY</div>
</div>
</div>
</div>
<!-- Bottom Panel Branding & Telemetry Metrics -->
<div class="relative z-10 space-y-5">
<div>
<h2 class="text-headline-sm font-headline-sm text-primary-fixed tracking-tight">Predict. Prepare. Deliver.</h2>
<p class="text-body-sm font-body-sm text-[#a49a78]">Decision intelligence for mission-critical logistics.</p>
</div>
<!-- Telemetry Data Container -->
<div class="p-4 rounded-xl bg-[#132018]/70 border border-[#3f5135]/40 grid grid-cols-3 gap-2">
<div>
<div class="text-[10px] font-mono text-[#a49a78] uppercase tracking-wider">ACTIVE CORRIDORS</div>
<div class="text-body-md font-body-md font-semibold font-mono text-[#f7faf2] mt-0.5">14 NOMINAL</div>
</div>
<div>
<div class="text-[10px] font-mono text-[#a49a78] uppercase tracking-wider">FORWARD DEPOTS</div>
<div class="text-body-md font-body-md font-semibold font-mono text-[#f7faf2] mt-0.5">48 ONLINE</div>
</div>
<div>
<div class="text-[10px] font-mono text-[#a49a78] uppercase tracking-wider">CRYPTOGRAPHY</div>
<div class="text-body-md font-body-md font-semibold font-mono text-[#f7faf2] mt-0.5">AES-256 GCM</div>
</div>
</div>
<div class="text-label-xs font-label-xs text-[#a49a78] flex items-center justify-between pt-1">
<span>MIL-STD-188F INTEROPERABLE</span>
<span>HARDWARE TOKEN SYNCHRONIZED</span>
</div>
</div>
</div>
<!-- RIGHT AUTHENTICATION PANEL (58% on Desktop, Warm Off-White) -->
<div class="lg:w-[58%] bg-surface flex flex-col justify-between p-6 sm:p-8 lg:p-12 relative">
<!-- Top Action Bar & State Switcher -->
<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-outline-variant">
<div class="flex items-center gap-2 text-label-xs font-label-xs text-on-surface-variant uppercase tracking-wider">
<span class="w-2 h-2 rounded-full bg-secondary inline-block"></span>
<span>PORTAL GATEWAY RL-V2.4</span>
<span class="text-outline-variant">|</span>
<span>TLS 1.3 HARDENED</span>
<span class="text-outline-variant">•</span>
<span class="text-secondary font-semibold">NODE AUTH: ACTIVE</span>
</div>
<!-- Prototype Switcher for Evaluation -->
<div class="inline-flex p-1 bg-surface-container-high rounded-lg border border-outline-variant text-label-xs font-label-xs" role="tablist">
<button aria-selected="true" class="px-2.5 py-1 rounded font-semibold bg-surface-container-lowest text-primary shadow-sm transition-all" id="tab-form" onclick="switchState('form')" role="tab">
            1. Form Input
          </button>
<button aria-selected="false" class="px-2.5 py-1 rounded text-on-surface-variant hover:text-primary transition-all" id="tab-success" onclick="switchState('success')" role="tab">
            2. Success State
          </button>
<button aria-selected="false" class="px-2.5 py-1 rounded text-on-surface-variant hover:text-primary transition-all" id="tab-expired" onclick="switchState('expired')" role="tab">
            3. Expired Link
          </button>
</div>
</div>
<!-- CENTERED CANVAS CONTAINER (~440px wide) -->
<div class="w-full max-w-[440px] mx-auto my-auto py-8">
<!-- ============================================== -->
<!-- STATE 1: ACTIVE PASSWORD RESET FORM            -->
<!-- ============================================== -->
<div class="space-y-6" id="state-form">
<!-- Module Eyebrow & Header -->
<div class="space-y-1.5">
<div class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container text-secondary text-label-xs font-label-xs border border-outline-variant uppercase">
<span class="material-symbols-outlined text-[14px]" data-icon="shield">shield</span>
<span>SECURE ACCESS ENCLAVE</span>
</div>
<h1 class="text-headline-lg font-headline-lg text-primary tracking-tight">Create a new password</h1>
<p class="text-body-md font-body-md text-on-surface-variant">
              Set a strong password to restore secure access to your RakshakLogix account.
            </p>
</div>
<!-- Form Element -->
<form class="space-y-4" id="reset-password-form" onsubmit="event.preventDefault(); switchState('success');">
<!-- New Password Field -->
<div class="space-y-1.5">
<label class="block text-label-sm font-label-sm text-on-surface" for="new-password">New password</label>
<div class="relative">
<input class="w-full h-10 px-3 pr-10 bg-surface-container-lowest border border-outline-variant rounded-lg text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all" id="new-password" name="new-password" oninput="handlePasswordInput(this.value)" required="" type="password" value="Kargil#2026Secure"/>
<button aria-label="Toggle password visibility" class="absolute right-3 top-2.5 text-on-surface-variant hover:text-primary transition-colors focus:outline-none" onclick="togglePasswordVisibility('new-password', 'toggle-new-icon')" type="button">
<span class="material-symbols-outlined text-[18px]" data-icon="visibility" id="toggle-new-icon">visibility</span>
</button>
</div>
</div>
<!-- Horizontal Password Strength Indicator Bar -->
<div class="p-3 bg-surface-container-low rounded-lg border border-outline-variant space-y-2">
<div class="flex items-center justify-between text-label-xs font-label-xs">
<span class="text-on-surface-variant uppercase">STRENGTH METER</span>
<span class="font-semibold text-secondary uppercase tracking-wider" id="strength-label">Password strength: Strong</span>
</div>
<!-- 3-Segment Subtle Gauge -->
<div class="grid grid-cols-3 gap-1.5 h-1.5 w-full">
<div class="h-full rounded-sm bg-secondary" id="meter-seg-1"></div>
<div class="h-full rounded-sm bg-secondary" id="meter-seg-2"></div>
<div class="h-full rounded-sm bg-secondary" id="meter-seg-3"></div>
</div>
</div>
<!-- Password Requirements Checklist -->
<div class="p-3 bg-surface-container-lowest rounded-lg border border-outline-variant space-y-2">
<span class="block text-label-xs font-label-xs text-on-surface-variant uppercase tracking-wider">
                PASSWORD REQUIREMENTS
              </span>
<ul class="space-y-1.5 text-body-sm font-body-sm">
<li class="flex items-center gap-2 text-secondary" id="req-length">
<span class="material-symbols-outlined text-[16px]" data-icon="check_circle" data-weight="fill" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span>At least 8 characters</span>
</li>
<li class="flex items-center gap-2 text-secondary" id="req-upper">
<span class="material-symbols-outlined text-[16px]" data-icon="check_circle" data-weight="fill" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span>One uppercase letter</span>
</li>
<li class="flex items-center gap-2 text-secondary" id="req-number">
<span class="material-symbols-outlined text-[16px]" data-icon="check_circle" data-weight="fill" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span>One number</span>
</li>
<li class="flex items-center gap-2 text-secondary" id="req-special">
<span class="material-symbols-outlined text-[16px]" data-icon="check_circle" data-weight="fill" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span>One special character (!@#$%^&amp;*)</span>
</li>
</ul>
</div>
<!-- Confirm New Password Field -->
<div class="space-y-1.5 pt-1">
<div class="flex items-center justify-between">
<label class="block text-label-sm font-label-sm text-on-surface" for="confirm-password">Confirm new password</label>
<span class="text-label-xs font-label-xs text-secondary font-semibold flex items-center gap-1" id="match-indicator">
<span class="material-symbols-outlined text-[14px]" data-icon="check">check</span>
                  Passwords match
                </span>
</div>
<div class="relative">
<input class="w-full h-10 px-3 pr-10 bg-surface-container-lowest border border-outline-variant rounded-lg text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all" id="confirm-password" name="confirm-password" oninput="handleConfirmInput(this.value)" required="" type="password" value="Kargil#2026Secure"/>
<button aria-label="Toggle confirm password visibility" class="absolute right-3 top-2.5 text-on-surface-variant hover:text-primary transition-colors focus:outline-none" onclick="togglePasswordVisibility('confirm-password', 'toggle-confirm-icon')" type="button">
<span class="material-symbols-outlined text-[18px]" data-icon="visibility" id="toggle-confirm-icon">visibility</span>
</button>
</div>
</div>
<!-- Primary Action CTA Button -->
<button class="w-full h-11 mt-2 bg-primary-container text-surface-container-lowest hover:bg-secondary active:opacity-90 rounded-lg text-label-md font-label-md tracking-wider flex items-center justify-center gap-2 transition-all duration-150 shadow-sm border border-primary-container" type="submit">
<span>Reset Password</span>
<span class="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</form>
<!-- Navigation & Cryptographic Assurance -->
<div class="pt-2 text-center space-y-4">
<a class="inline-flex items-center gap-1.5 text-label-sm font-label-sm text-secondary hover:underline transition-colors font-medium" href="#signin" onclick="alert('Redirecting to RL-01 Sign In screen.');">
<span class="material-symbols-outlined text-[16px]" data-icon="arrow_back">arrow_back</span>
<span>Back to Sign In</span>
</a>
<div class="flex items-center justify-center gap-2 text-label-xs font-label-xs text-on-surface-variant pt-2 border-t border-outline-variant">
<span class="material-symbols-outlined text-[14px] text-secondary" data-icon="lock">lock</span>
<span>Your password is securely encrypted. • Secure session (MIL-STD-188F)</span>
</div>
</div>
</div>
<!-- ============================================== -->
<!-- STATE 2: SUCCESS / PASSWORD UPDATED            -->
<!-- ============================================== -->
<div class="hidden space-y-6" id="state-success">
<div class="space-y-3">
<div class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-secondary-container text-on-secondary-container text-label-xs font-label-xs border border-secondary font-semibold uppercase">
<span class="material-symbols-outlined text-[16px]" data-icon="check_circle">check_circle</span>
<span>PASSWORD UPDATED</span>
</div>
<h1 class="text-headline-lg font-headline-lg text-primary tracking-tight">Password successfully reset</h1>
<p class="text-body-md font-body-md text-on-surface-variant leading-relaxed">
              Your RakshakLogix password has been updated. You can now sign in with your new credentials and authenticated hardware token.
            </p>
</div>
<!-- Session Metadata Receipt Card -->
<div class="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant space-y-2.5">
<div class="flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant pb-2 border-b border-outline-variant">
<span>AUDIT RECEIPT CODE</span>
<span class="font-mono text-on-surface font-semibold">RX-8849-OK</span>
</div>
<div class="grid grid-cols-2 gap-2 text-body-sm font-body-sm">
<div>
<span class="text-label-xs font-label-xs text-on-surface-variant block uppercase">SECURITY LEVEL</span>
<span class="text-on-surface font-medium">MOD LEVEL 4</span>
</div>
<div>
<span class="text-label-xs font-label-xs text-on-surface-variant block uppercase">SESSION STATUS</span>
<span class="text-secondary font-semibold">CLEARED FOR LOGIN</span>
</div>
</div>
</div>
<!-- Primary Confirmation Action -->
<button class="w-full h-11 bg-primary-container text-surface-container-lowest hover:bg-secondary active:opacity-90 rounded-lg text-label-md font-label-md tracking-wider flex items-center justify-center gap-2 transition-all duration-150 shadow-sm border border-primary-container" onclick="alert('Redirecting to RL-01 Sign In...'); switchState('form');" type="button">
<span>Return to Sign In</span>
<span class="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</button>
<div class="text-center pt-2">
<p class="text-label-xs font-label-xs text-on-surface-variant flex items-center justify-center gap-1.5">
<span class="material-symbols-outlined text-[14px] text-secondary" data-icon="verified_user">verified_user</span>
<span>Your account remains protected by secure authentication protocols.</span>
</p>
</div>
</div>
<!-- ============================================== -->
<!-- STATE 3: EXPIRED / INVALID LINK                -->
<!-- ============================================== -->
<div class="hidden space-y-6" id="state-expired">
<div class="space-y-3">
<div class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-error-container text-on-error-container text-label-xs font-label-xs border border-error font-semibold uppercase">
<span class="material-symbols-outlined text-[16px]" data-icon="warning">warning</span>
<span>RESET LINK EXPIRED</span>
</div>
<h1 class="text-headline-lg font-headline-lg text-primary tracking-tight">This reset link is no longer valid</h1>
<p class="text-body-md font-body-md text-on-surface-variant leading-relaxed">
              For your security, password reset links expire after a limited period (15 minutes). No account details are stored or exposed.
            </p>
</div>
<!-- Diagnostic Telemetry Notice -->
<div class="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant space-y-2">
<div class="flex items-center gap-2 text-label-xs font-label-xs text-on-surface-variant uppercase">
<span class="material-symbols-outlined text-[16px] text-outline" data-icon="info">info</span>
<span>SECURITY PROTOCOL 188F-EXPIRE</span>
</div>
<p class="text-body-sm font-body-sm text-on-surface-variant">
              The cryptographic single-use ticket for this operation has timed out or was already consumed. To proceed, please generate a fresh password recovery token.
            </p>
</div>
<!-- Dual Recovery CTAs -->
<div class="space-y-3">
<button class="w-full h-11 bg-primary-container text-surface-container-lowest hover:bg-secondary active:opacity-90 rounded-lg text-label-md font-label-md tracking-wider flex items-center justify-center gap-2 transition-all duration-150 shadow-sm border border-primary-container" onclick="alert('Redirecting to RL-02 Forgot Password screen...'); switchState('form');" type="button">
<span>Request New Reset Link</span>
<span class="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</button>
<a class="w-full h-11 bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-container-high rounded-lg text-label-md font-label-md tracking-wider flex items-center justify-center gap-2 transition-all" href="#signin" onclick="switchState('form');">
<span class="material-symbols-outlined text-[16px]" data-icon="arrow_back">arrow_back</span>
<span>Back to Sign In</span>
</a>
</div>
</div>
</div>
<!-- BOTTOM AUDIT FOOTER -->
<div class="pt-6 border-t border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-2 text-label-xs font-label-xs text-on-surface-variant">
<div>
<span>RakshakLogix • Operational Logistics Intelligence</span>
</div>
<div>
<span>© 2026 Ministry of Defence Logistics Directorate • Classification: Restricted</span>
</div>
</div>
</div>
</div>
<!-- SCRIPT FOR STATE SWITCHING AND CLIENT VALIDATION -->`;
