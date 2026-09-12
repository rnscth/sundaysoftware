---
name: Sunday Software Solutions
description: Warm midnight-and-amber single-page landing for a software and AI practice — sunrise over a flowing process. The Sunrise S mark anchors a dark-to-ivory journey from messy systems to understandable, automated, maintained operations.
colors:
  midnight: "#101C2C"
  midnight-soft: "#16263C"
  midnight-raised: "#1D3048"
  sunburst: "#FFB547"
  sunburst-hover: "#FFC76B"
  amber-deep: "#92400E"
  amber-soft: "rgba(255,181,71,0.14)"
  ivory: "#F5F0E6"
  ivory-muted: "#A8B3C2"
  shell: "#FAF6EE"
  ash-warm: "#EAE3D4"
  ink: "#23303F"
  ink-muted: "#58697B"
  ink-faint: "#75869A"
  line: "rgba(16,28,44,0.10)"
  line-dark: "rgba(245,240,230,0.16)"
  error: "#B42318"
  overlay: "rgba(9,16,28,0.66)"
  ease-smooth: "cubic-bezier(0.22,1,0.36,1)"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    weight: 600-700
  body:
    fontFamily: "Inter, Arial, sans-serif"
    weight: 400
    size: "1rem–1.125rem"
rounded:
  panel: "24px (rounded-3xl)"
  inner: "16px (rounded-2xl)"
  chip: "9999px"
spacing:
  section: "80–112px vertical (py-20 lg:py-28)"
  panel-padding: "32–40px"
  col-gap: "24px"
components:
  button-primary-hero:
    backgroundColor: "{colors.sunburst}"
    textColor: "{colors.midnight}"
    rounded: "full"
    hoverBackground: "{colors.sunburst-hover}"
  button-cta:
    backgroundColor: "{colors.midnight}"
    textColor: "{colors.ivory}"
    rounded: "full"
    hoverBackground: "{colors.midnight-soft}"
  panel:
    backgroundColor: "{colors.ivory}"
    border: "1px {colors.line}"
    rounded: "{rounded.panel}"
  input-field:
    backgroundColor: "{colors.shell}"
    border: "1px {colors.line}"
    textColor: "{colors.ink}"
    rounded: "{rounded.inner}"
---

# Design System: Sunday Software Solutions

## Overview

**Creative North Star: "Sunrise over a flowing process"**

Sunday is a software and AI practice that connects the systems a company already runs — data, processes, applications — and keeps an honest method behind it. The visual world turns that promise into a warm, specific journey: the page opens in deep midnight (the systems, opaque and connected), runs through ivory panels (the working surfaces where problems become plans), and points everything at sunrise amber (the moment things become understandable, automated and under control). The sunrise S engraved as "S" — the **Sunrise S** mark, one continuous flowing stroke between two colors — is the whole identity: header brand, footer brand, favicon. It is never redrawn; a single `BrandMark` component renders the exact vector.

This is a **Persuade** surface. Long-form one-page, generous rhythm, real typographic hierarchy from two deliberately contrasted families: Fraunces (warm, contemporary serif) for display statements, Inter for the operating text underneath. Sections alternate dark structure and warm light fields with hairlines and soft panels — never uniform card grids, never the same-size-icon-plus-text rectangle repeated. Composition is asymmetric on purpose (7/5 and offset 8/12 columns) so the page reads like an argument moving forward, not a menu.

Aesthetics: warm-professional and precise. Amber appears only in two jobs — the brand voice (kickers, numbers, the S's colors, small rules) and the honest labels ("Straight talk", "Illustrative example"). Everything else is warm ink on warm ivory with midnight structure. Depth is quiet: panels declare a border or a shadow, never both; the single floating moment is the emphasized "Recurring service" panel that lifts slightly out of its row.

## Colors

A warm midnight-and-amber family on ivory. Dark = structure and brand; amber = voice and honesty; ivory/warm-grey = the reading field.

### Brand & Structure
- **Midnight** (#101C2C): header, footer, hero, the Company band and emphasized Relationship panel. The dark that expects light text. Also used for the form submit button and stronger focus rings.
- **Midnight Soft** (#16263C): raised dark panels inside dark areas (hero diagram inner surfaces).
- **Midnight Raised** (#1D3048): the top dark panel in the hero diagram, the mobile menu dropdown, the success modal.

### Voice & Honesty (amber)
- **Sunburst** (#FFB547): the hero's amber line, dark-surface accents, selection, small rules, and the emphasized-dark-surface text. On white it exists only as decorative dots/underlines, never as small text.
- **Sunburst Hover** (#FFC76B): hover of the amber primary button.
- **Amber Deep** (#92400E): small amber text and icons on light surfaces (kickers, sequence numbers, honest-chips) — clears 4.5:1 on ivory.
- **Amber Soft** (rgba(255,181,71,0.14)): the honest-chips and method-step dot halo.

### Reading Field
- **Ivory** (#F5F0E6): panel and card surfaces — deliberately warm, never pure white.
- **Shell** (#FAF6EE) → **Ash Warm** (#EAE3D4): the page gradient field behind panels.
- **Ivory Muted** (#A8B3C2): secondary text on dark surfaces (7:1 on midnight).
- **Ink** (#23303F): primary text on light. **Ink Muted** (#58697B): secondary text on light (4.8:1). **Ink Faint** (#75869A): light-surface third-tier only below 4.5:1 → stays off light surfaces; use on dark or decorative.

### Lines & System
- **Line** (rgba(16,28,44,0.10)): hairline borders on light. **Line Dark** (rgba(245,240,230,0.16)): hairlines on dark.
- **Error** (#B42318): form errors and required markers.
- **Overlay** (rgba(9,16,28,0.66)): modal scrim.

**The Two-Jobs-Only Rule for amber.** Amber is the brand voice (the S, kickers, numbers, small rules, honest chips) and nothing else. It never fills large backgrounds, never carries small body text on light surfaces, never degrades to gradients.

**The Warm-Field Rule.** Every light surface is warm (ivory/shell, never white, never grey). Every dark surface is the same midnight family so header, hero and footer read as one continuous block.

## Typography

**Display:** Fraunces 600/700 (variable, classic-but-warm serif, loaded via `next/font/google` with `--font-fraunces`; class `.font-display`). **Body/UI:** Inter 400/500/600.

**Character:** The serif carries the warmth and the honesty of a craft practice; Inter carries the operating detail underneath. Two families earn the page's hierarchy: size + weight on the serif for statements, small caps for labels.

### Hierarchy
- **Display/hero** (600, ~3.4rem, lh 1.08): one h1, three short lines, the third in Sunburst.
- **Section title** (600, 3–3.5rem, lh 1.15 tight): one per section.
- **Panel title** (600, 1.5–1.7rem): service lines, scenarios, method steps, relationship items.
- **Body** (400, 1–1.125rem, lh 1.7): statements under titles.
- **Label** (600, 0.75rem, uppercase, tracking 0.18–0.22em, amber or ink-muted): kickers, "Straight talk", honest chips. Amber labels on dark are Sunburst; on light they are Amber Deep.

**Kickers earn their place:** on this single-page anchor layout they are the reader's wayfinding labels ("What we do", "How we work", "Contact"), and their amber color is the signature handle of the Sunrise identity — the same job the S's upper curve does.

**The Serif-Warmth Rule.** Headings are Fraunces in Midnight or Ivory; never lighten for style, never letter-space the serif.

## Layout

A single centered column (`max-w-6xl`, `px-6`) running down a shell→ash-warm gradient. Rhythm alternates: dark hero → ivory-light field → border-separated light sections → a contained ivory method panel → emphasized midnight Relationship panel → full-width midnight Company band → light Contact. Sections breathe with `py-20 lg:py-28`; hairlines (`border-line`) separate adjacent light sections.

- **Hero:** 1-col mobile → 2-col at `lg`; left text (kicker, three-beat serif title with one amber line, description, audience line, two CTAs: amber "Conversemos sobre tu proceso." → `#contact`; ghost "Explorar soluciones" → `#services`); right the overview diagram — a labeled, honest schematic: sources → agent → answers/actions, ~no invented numbers.
- **Problems:** 1 → 2-col list of six pain statements with amber dots; closes with a serif outtake (the "connection is missing" line).
- **Services:** asymmetric 12-col grid. BI 7 cols + Automation 5 cols on row one; Support 8 cols offset to `col-start-5` on row two. Panels are ivory with hairline borders and amber sequence numbers (01/02/03).
- **Scenarios:** three alternating two-col rows; text + abstract geometry visuals (Q→A card, document pipeline pills, rules/dependencies/tests → status), each with an "Illustrative example" cherry chip.
- **Method:** contained ivory panel; four steps on a md+ top hairline with amber dots; a benefits strip below.
- **Relationship:** three panels; the middle ("Recurring service") is Midnight, `md:-my-4`, shadow — the only floating surface.
- **Company:** full-width Midnight band; honed prose referencing the founder's internal-agent work without client claims; Sunburst honest chip.
- **Contact:** 2-col at `lg`; left = heading, direct email/WhatsApp links with amber icons, privacy note; right = ivory form panel (`ContactForm`).

## Elevation & Depth

Depth is quiet and declared once. Panels use either a hairline border on the warm field, or a shadow on a dark surface — never both. The `--ease-smooth` token (`cubic-bezier(0.22,1,0.36,1)`) drives every transition (colors, backgrounds, transform) and is disabled under `prefers-reduced-motion`.

- Buttons: background-color + subtle transform on hover; focus-visible rings (Sunburst on dark, Midnight on light) with matching `ring-offset`.
- Cards/panels: no lift by default; the only floating object is the emphasized midnight Relationship panel.

## Shapes

Panels `rounded-3xl` (24px), inner surfaces and inputs `rounded-2xl`/`rounded-lg` (16/8px), interactive chips and CTAs full-pill. Hairline borders (1px) are the primary separation language on light; dark surfaces separate by background alone.

## Components

### Buttons
- **Hero primary:** Sunburst fill, Midnight text, full pill, `px-7 py-3`, hover Sunburst Hover.
- **CTA / submit:** Midnight fill, Ivory text, full pill; hover Midnight Soft.
- **Hero secondary:** 1px Line Dark outline, Ivory text; hover Sunburst border + text.
- All: `min-h-11`, 44px touch, `focus-visible` 2px ring (Sunburst on dark, Midnight on light) + matching ring-offset on the section color.

### Panels / Cards
- `rounded-3xl`, Ivory fill, 1px Line border, padding 32–40px. Service/scenario/method/relationship/contact panels all follow the same fill without becoming an identical grid (asymmetric columns, alternating rows, one dark panel).

### Inputs / Fields
- Shell fill, 1px Line border, `rounded-lg`, `p-3`, Ink text; focus swaps border to Midnight + a 2px Midnight ring. Labels `text-sm font-medium text-ink`, required `*` in Error. Errors: `text-error text-sm` with `role="alert"`, `aria-invalid`/`aria-describedby`.

### Navigation
- Midnight header (continues into the hero seamlessly). Left: `BrandMark` + wordmark. Center (lg): anchor links (`#services`, `#method`, `#company`) in Ivory Muted → Ivory on hover, with a soft ivory 8% hover wash; then the Sunburst CTA to `#contact`. Right: locale switcher (transparent, `text-ivory-muted`, Sunburst focus ring) + hamburger on mobile opening a Midnight Raised dropdown (`w-[min(20rem,calc(100%-1.5rem))]`). Skip link to `#main`; `FocusOnRouteChange` moves focus after locale navigation.

### Success Dialog
- Overlay scrim, Midnight Raised panel `rounded-2xl` with a full-pill Sunburst focus ring on the close button; focus trapped, Escape closes, close returns to the page (no navigation).

## App Icon

The **Sunrise S** mark: a thick, flowing "S" traced by two rounded strokes on a midnight rounded square (`rx≈0.22`). Upper curve Sunburst, lower curve Ivory, small Sunburst sun dot top-right — sunrise over a continuous, flowing process. Source `src/app/icon.svg` (favicon) + `src/app/apple-icon.png` (iOS). Rendered inline in the UI only through `src/components/brandMark.tsx` (same vectors, `aria-hidden`, always the same proportions).

## Do's and Don'ts

### Do:
- **Do** use Midnight for full-width structure (header, hero, Company, footer) and Midnight fields for CTAs on light.
- **Do** use amber only as the brand voice and the honesty label: kickers, sequence numbers, small rules, honest chips, the S's upper curve.
- **Do** keep every light surface warm — Ivory panels, Shell/Ash Warm field; never white.
- **Do** render the Sunrise S exclusively through `brandMark.tsx` (or the favicon files) — never redraw it.
- **Do** keep composition asymmetric: 7/5 and offset panels, alternating scenario rows, one emphasized dark panel.
- **Do** run real copy at every breakpoint; check hairline borders and pill wraps; keep 44px touch targets and `focus-visible` rings everywhere.
- **Do** keep motion to the two approved moves: the CSS `.page-enter` template fade and quiet color/background hovers under `--ease-smooth`.

### Don't:
- **Don't** put small Sunburst text on light surfaces (use Amber Deep) or Amber Deep text on dark (use Sunburst).
- **Don't** use amber for large fills, gradients, or running body copy.
- **Don't** fall back to uniform grids of icon + title + text cards.
- **Don't** add a second dark family or a grey/charcoal header — one Midnight world.
- **Don't** give panels both a border and a shadow (declare elevation once).
- **Don't** introduce a card-grid scaffold, hero-metric numbers, or section numbers beyond the meaningful 01/02/03/04 sequences.
- **Don't** draw decorative panels with invented figures; label illustrative diagrams honestly.