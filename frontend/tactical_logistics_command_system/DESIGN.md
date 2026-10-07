---
name: Tactical Logistics Command System
colors:
  surface: '#f7faf2'
  surface-dim: '#d8dbd3'
  surface-bright: '#f7faf2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f5ec'
  surface-container: '#ecefe7'
  surface-container-high: '#e6e9e1'
  surface-container-highest: '#e0e4dc'
  on-surface: '#191d18'
  on-surface-variant: '#434844'
  inverse-surface: '#2d312c'
  inverse-on-surface: '#eff2ea'
  outline: '#737873'
  outline-variant: '#c3c8c2'
  surface-tint: '#536257'
  primary: '#030e07'
  on-primary: '#ffffff'
  primary-container: '#17251c'
  on-primary-container: '#7d8d81'
  inverse-primary: '#bacbbd'
  secondary: '#516446'
  on-secondary: '#ffffff'
  secondary-container: '#d1e6c1'
  on-secondary-container: '#55684a'
  tertiary: '#040e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#17260a'
  on-tertiary-container: '#7c8f69'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e7d8'
  primary-fixed-dim: '#bacbbd'
  on-primary-fixed: '#111e16'
  on-primary-fixed-variant: '#3b4a40'
  secondary-fixed: '#d4e9c4'
  secondary-fixed-dim: '#b8cda9'
  on-secondary-fixed: '#0f1f08'
  on-secondary-fixed-variant: '#3a4c30'
  tertiary-fixed: '#d5e9be'
  tertiary-fixed-dim: '#b9cda3'
  on-tertiary-fixed: '#111f05'
  on-tertiary-fixed-variant: '#3b4c2c'
  background: '#f7faf2'
  on-background: '#191d18'
  surface-variant: '#e0e4dc'
typography:
  headline-xl:
    fontFamily: IBM Plex Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: IBM Plex Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-md:
    fontFamily: IBM Plex Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: IBM Plex Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
  label-xs:
    fontFamily: IBM Plex Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system reflects the operational rigor, disciplined hierarchy, and mission-critical reliability of defence supply-chain infrastructure. Designed for command room dashboards, forward base supply depots, and logistics field headquarters, the interface synthesizes Indian military precision with the density and responsiveness of modern enterprise logistics management.

The visual ethos rejects ephemeral design trends—forgoing glassmorphism, decorative glows, and speculative sci-fi flourishes in favor of utilitarian clarity, spatial efficiency, and instant cognitive parsing under pressure. The target demographic includes staff officers, quartermasters, and depot logistical commanders who demand split-second auditability of asset movements, ordnance stocks, cold-chain rations, and convoy readiness. Every visual element communicates authoritative institutional permanence, structural order, and tactical legibility.

## Colors

The palette is rooted in disciplined terrestrial tones calibrated for high information density, long-shift visual endurance, and sharp distinction across data visualizations:

- **Primary Deep Forest Green (`#17251C`)**: Grounding color for command navigation ribbons, high-priority operational state indicators, and primary command CTAs.
- **Secondary Army Olive (`#3F5135`)**: Secondary interactive states, contextual tools, table header fills, and active filter selections.
- **Tertiary Olive Green (`#596B48`)**: Subtle state borders, secondary indicators, structural tree diagrams, and tactical telemetry icons.
- **Tactile Tactical Khaki (`#A49A78`)**: Institutional metadata, classification tags, depot coordinates, and subdued military badges.
- **Warm Off-White (`#F4F3ED`)**: Primary canvas background for content panels, reading surfaces, and data forms. Reduces glare under harsh terminal lighting while maintaining paper-grade contrast.
- **Soft Stone (`#E5E3D9`)**: Delimiting 1px structural hairline rules, panel cards, nested data tables, and resting input container fills.
- **Charcoal (`#20241F`)**: Primary typography, high-contrast headings, numerical data readouts, and strict scalar coordinates.
- **Muted Amber (`#C49A45`)**: Strictly metered operational status accent indicating supply deficit, convoy latency, maintenance requirement, or critical route deviation.

## Typography

The typographic hierarchy relies on **IBM Plex Sans**, selected for its industrial balance, engineered clarity, and unambiguous glyph distinctions (e.g., separating capital `I`, numeral `1`, and lowercase `l`). 

Numerical figures across inventory records, tonnage counts, fuel volumes, and grid coordinates must always be rendered with tabular figures (`font-variant-numeric: tabular-nums`) to preserve column verticality across data tables. Headings remain compact, disciplined, and strictly hierarchical, while micro-labels utilize generous letter spacing to guarantee readability at high densities and small point sizes.

## Layout & Spacing

The layout model is governed by a rigid 12-column responsive grid engineered for dense, mission-oriented enterprise applications:

- **Desktop (>=1280px)**: 12-column layout with 24px (`1.5rem`) gutters and 32px (`2rem`) screen margins. Features a persistent fixed 280px operational rail on the left, an adaptive core telemetry workspace, and an optional 360px contextual panel on the right for inspection details.
- **Tablet (768px - 1279px)**: 8-column layout with 16px (`1rem`) gutters and 20px margins. Navigational rail collapses to an icon-only dock (64px width); secondary inspection drawers become sliding modal sheets.
- **Mobile (<768px)**: 4-column layout with 12px gutters and 16px margins. Information shifts to vertical card stacks with top-anchored depot status cards.

Vertical spacing relies on a strict 4px/8px modular scale. Spacing within data modules is deliberately compact (`space-xs` and `space-sm`) to maximize spatial utility and minimize scroll overhead during active logistical tracking.

## Elevation & Depth

Visual hierarchy and spatial separation are established through crisp tonal layering and hairline mechanical boundaries rather than diffused ambient shadows:

- **Structural Borders**: 1px solid hairlines in Soft Stone (`#E5E3D9`) delineate panels, data grids, toolbars, and cards. Heavy shadows are completely excluded.
- **Tonal Stepping**: 
  - Level 0 (Base canvas): Warm Off-White (`#F4F3ED`).
  - Level 1 (Panels & Data containers): Pure white (`#FFFFFF`) or Soft Stone (`#E5E3D9`) with 1px border.
  - Level 2 (Flyouts & Operational Modals): `#FFFFFF` backed by a 1px border of Olive Green (`#596B48`) and a crisp, flat keyline shadow (`0 2px 4px rgba(23, 37, 28, 0.08)`).
- **Active State Highlights**: Modals, dropdowns, and focused items display a sharp 2px inset or outset border in Olive Green (`#596B48`) or Deep Forest Green (`#17251C`).

## Shapes

The geometric vocabulary adheres strictly to disciplined, low-radius engineering:

- **Base Radius (`0.25rem` / `4px`)**: Applied to standard interactive controls, inputs, data badges, and status chips.
- **Card & Panel Radius (`0.375rem` - `0.5rem` / `6px - 8px`)**: Applied to workspace cards, data grids, maps, telemetry modules, and inspection panels.
- **Pills and Full Rounding**: Prohibited except for circular status dot indicators and circular unit badges. No pill-shaped buttons.
- **Visual Structure**: All geometric forms must read as machined, rectilinear modules assembled with structural precision.

## Components

### Buttons & Action Triggers
- **Primary Operational Button**: Solid Deep Forest Green (`#17251C`) background, white text, 6px border radius, 1px hairline border in Deep Forest Green. Hover state transitions cleanly to Army Olive (`#3F5135`). Active/pressed state deepens contrast without blur.
- **Secondary Tactical Button**: Surface of Warm Off-White (`#F4F3ED`), 1px solid border in Olive Green (`#596B48`), text in Charcoal (`#20241F`). Hover triggers Soft Stone (`#E5E3D9`) background fill.
- **Destructive/Critical Action**: Outlined in high-alert red with neutral text; fills solid crimson only on active hold or confirmation modal.

### Status Chips & Metadata Badges
- Displayed with `label-xs` or `label-sm` uppercase text with 0.06em tracking.
- Height fixed at 22px or 26px with a 4px corner radius and 1px perimeter border.
- **Routine/Nominal**: Background Soft Stone (`#E5E3D9`), text Charcoal (`#20241F`), border Tactical Khaki (`#A49A78`).
- **Transit/Active**: Background tint of Army Olive (`#3F5135` at 10%), text Deep Forest Green (`#17251C`), border Army Olive (`#3F5135`).
- **Deficit/Attention**: Background tint of Muted Amber (`#C49A45` at 15%), text `#7A5B18`, border Muted Amber (`#C49A45`).

### Data Tables & Logistics Feeds
- **Header Rows**: Solid fill in Soft Stone (`#E5E3D9`), uppercase 11px semi-bold labels in Deep Forest Green (`#17251C`), bottom border 1.5px solid Olive Green (`#596B48`).
- **Data Rows**: Height 36px (compact) or 44px (default). Alternating subtle row tinting optional; default uses 1px solid divider `#E5E3D9`.
- **Numeric Cells**: Tabular-aligned with monospaced precision, right-aligned for inventory quantities, tonnage metrics, and consumption velocity.

### Input Fields & Controls
- **Inputs & Selects**: Height 36px, background `#FFFFFF`, border 1px solid Tactical Khaki (`#A49A78`), text Charcoal (`#20241F`). Focus state exhibits a crisp 1.5px border in Deep Forest Green (`#17251C`) with zero outer glow.
- **Checkboxes & Radios**: Square geometry (4px radius for checkbox), 1px solid frame. Checked state fills with Deep Forest Green (`#17251C`) and crisp mechanical check mark in Warm Off-White (`#F4F3ED`).

### Telemetry Cards & Module Surfaces
- Background `#FFFFFF` or `#F4F3ED` set against Soft Stone dividers.
- Header bands incorporate a subtle 1px border bottom with module identification tags styled in Tactical Khaki (`#A49A78`).
- KPI metrics use bold 24px numerals anchored immediately adjacent to their corresponding unit descriptors (e.g., "MT", "KL", "HRS").