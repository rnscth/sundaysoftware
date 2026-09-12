---
name: Sunday Software Solutions
description: Calm, dependable bilingual SMB software-services site — a dark charcoal workbench on a grey field with color-coded service tools.
colors:
  charcoal-slate: "#2f3337"
  deep-slate: "#1f2937"
  mid-slate: "#374151"
  wet-ink: "#333333"
  mist-grey: "#9a9fa3"
  cloud-guard: "#babbbc"
  fog: "#f3f4f6"
  ash: "#d1d5db"
  card-surface: "#ffffff"
  faint-ink: "#6b7280"
  muted-ink: "#4b5563"
  locale-ink: "#9ca3af"
  code-blue: "#2563eb"
  cloud-purple: "#9333ea"
  bot-gold: "#ca8a04"
  ai-red: "#dc2626"
  microsoft-blue: "#3b82f6"
  support-green: "#16a34a"
  security-teal: "#0d9488"
typography:
  display:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1
  headline:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.25
  title:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
rounded:
  base: "4px"
  pill: "5px"
  md: "6px"
  lg: "8px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  col-gap: "40px"
  page: "48px"
components:
  button-primary:
    backgroundColor: "{colors.deep-slate}"
    textColor: "{colors.card-surface}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.mid-slate}"
  card-service:
    backgroundColor: "{colors.card-surface}"
    textColor: "{colors.wet-ink}"
    rounded: "{rounded.lg}"
    padding: "32px"
  input-field:
    backgroundColor: "{colors.card-surface}"
    textColor: "{colors.wet-ink}"
    rounded: "{rounded.md}"
    padding: "8px"
  nav-link:
    textColor: "{colors.card-surface}"
    padding: "8px"
    hoverBackground: "{colors.mid-slate}"
  avatar:
    rounded: "{rounded.full}"
    size: "128px"
---

# Design System: Sunday Software Solutions

## Overview

**Creative North Star: "The Steady Workbench"**

Sunday Software Solutions presents itself as the dependable shop where growing companies bring work to be built, automated, and supported. The visual system makes that concrete: a solid dark workbench (the header and footer) anchors a calm grey field where white canvases — the service cards — sit ready for inspection, each tagged with the colored handle of the tool it represents. Nothing glitters and nothing shouts; the energy lives only in the small, colored icons that say "this is the kind of work we do here."

The system is deliberately neutral and quiet so that a non-technical business owner can read it without friction. Density is moderate: centered layouts, generous white space, one clear idea per panel. Hierarchy is achieved through weight (bold dark headings) and surface (white cards on grey), never through color. Depth is flat by default and reserved for interaction: a card or button lifts slightly and hardens its shadow when the visitor touches it, which makes hover the moment the page physically acknowledges the user.

Aesthetics run utilitarian-professional: a single sans family (Inter), restrained radius, and a strict rule that saturated color is the exclusive language of the service icons. This is a calm, neutral, confident reading experience — the web presence of a partner you hand your software problems to and expect a steady answer back.

**Key Characteristics:**
- Dark charcoal structure (header/footer/CTAs) framing a grey-gradient field of white cards.
- Saturated color used only as per-service icon "tool handles"; nothing else is colorful.
- Flat surfaces at rest; lift + deepened shadow as the only hover language.
- One font, one weight argument done with dark ink and bold weights.

## Colors

A cool slate-and-grey family with a restrained spectrum of tool colors used only on icons. The palette reads grey-on-grey with dark charcoal anchoring; any hue signals "service domain," not "brand."

### Primary
- **Charcoal Slate** (#2f3337): the workbench frame. Header and footer background, white text above it. Also the global default body text tone. This is the structural dark: use it for full-width surfaces, never for small accents.
- **Deep Slate** (#1f2937): the CTA and workhorse dark. Fills primary buttons, the modal's focus ring, and doubles as the deepest heading ink (text-gray-800). The only color allowed to be both a fill and text.
- **Mid Slate** (#374151): the CTA hover state and the standard body ink (text-gray-700); also the modal panel background.

### Neutral
- **Card Surface** (#ffffff): every content panel — service cards, form card, About panels, mobile menu.
- **Wet Ink** (#333333): default body text from the global stylesheet.
- **Muted Ink** (#4b5563): secondary body tones, list items, hero description (text-gray-600).
- **Faint Ink** (#6b7280): tertiary — loading text, team roles (text-gray-500).
- **Locale Ink** (#9ca3af): the language switcher on the dark header (text-gray-400).
- **Fog** (#f3f4f6) / **Ash** (#d1d5db): the page shell — a soft top-down grey gradient (from-gray-100 to-gray-300) behind all white panels.
- **Mist Grey** (#9a9fa3): legacy global page background; the field the gradient sits on.
- **Cloud Guard** (#babbbc): the light hover wash behind nav links on the dark header.

### Tool Spectrum (icons, 600-scale accents)
- **Code Blue** (#2563eb): software development.
- **Cloud Purple** (#9333ea): SaaS and cloud solutions.
- **Bot Gold** (#ca8a04): bots and messaging.
- **AI Red** (#dc2626): AI-driven automation.
- **Microsoft Blue** (#3b82f6): Copilot Studio and Microsoft platform.
- **Support Green** (#16a34a): technical support.
- **Security Teal** (#0d9488): Entra and identity.

**The Workbench Rule.** Dark charcoal surfaces exist only as structure — the header, the footer, the button fill. The grey gradient field is never replaced with a dark or saturated background.

**The One Service, One Tool Rule.** Each service keeps the same icon color on every page (Home and Services). The icon is the only saturated element on any screen; count it as ≤10–15% of the pixels.

**The Neutral Field Rule.** Hierarchy comes from ink weight and surface contrast (white on grey), never from color. If an element needs emphasis and it is not a service icon or a CTA, make it darker and heavier — not red, not blue.

## Typography

**Display Font:** Inter (Arial/Helvetica fallback, loaded via `next/font`)
**Body Font:** Inter
**Label/Mono Font:** none distinct

**Character:** One quiet, utilitarian family. Inter carries no editorial voice — that is the point. Emphasis is expressed through weight (bold dark headings) and size steps, giving a professional-services calm. No display serif, no mono, no flourishes.

### Hierarchy
- **Display** (700, 3rem / text-5xl, lh 1): only the home hero title. Do not reuse this scale for inner-page headings.
- **Headline** (700, 2.25rem / text-4xl, lh 1.25): page titles across Services, About, Contact; the error/not-found titles.
- **Title** (600, 1.5rem / text-2xl, lh 1.25): card titles, section headings inside About, the brand line, modal title.
- **Body** (400, 1.125rem / text-lg, lh 1.75): paragraphs and card descriptions under headings; intro and CTA text.
- **Label** (500, 0.875rem / text-sm, lh normal): form field labels and nav links; lower-case, no letterspacing games.

**The Bold Ink Rule.** Headings are dark and heavy (gray-800/gray-900 family, weight ≥600) against white or grey. Never lighten a heading for style; weight and size are the whole hierarchy argument.

## Layout

Every page is a single centered container (`container mx-auto`) with horizontal padding `px-6` and vertical rhythm `py-12`, sitting on the fog-to-ash gradient shell. Component instant: the profile header row and footer, a full-page hero or title block, then a grid of white panels, then a center-aligned CTA row.

- Home: hero (centered), then a service-card grid that is 1 column mobile → 2 columns at `md` (768px) → 3 columns at `lg` (1024px), then a centered CTA section.
- Services: a 1 → 2-column grid of service panels at `md`.
- About: centered intro, stacked white panels (mission/vision, location), then a 1 → 2 → 3-column team grid.
- Contact: centered intro, a single white form card constrained to `max-w-lg` (~512px), then direct contact channels.
- Mobile: cards collapse to a single column; the nav collapses to brand + locale switcher + a hamburger that opens a white dropdown menu (`w-60`, centered under the header).
- Column gaps use the 40px column gap; internal card padding is 32px; page vertical sections are spaced at 48px.

## Elevation & Depth

Flat by default. The visual world is two-dimensional — dark frame, grey field, white panels — and depth appears only as a response to interaction plus one persistent control shadow. No permanent card elevation, no floating surfaces at rest.

### Shadow Vocabulary
- **control-rest** (`0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)`, shadow-md): the resting state of buttons and the white mobile menu; also the map embed.
- **panel-rest** (`0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)`, shadow-lg): resting white cards.
- **panel-lift** (`0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)`, shadow-xl): the hover state of cards, paired with `scale(1.05)` over 300ms.
- **modal-overlay** (`rgba(0,0,0,0.6)`): the full-screen scrim behind the success dialog.

**The Flat-Rest Rule.** Nothing is elevated at rest except inputs and controls. Hover is the only moment a card or button physically lifts, and when it lifts it does so with the 300ms ease and the deepened shadow — never with a hue change.

## Shapes

A soft, rounded-rectangle form language with discipline on which radius goes where: cards and buttons are gently rounded (8px, rounded-lg), form controls are a step tighter (6px, rounded-md), avatars are circles (rounded-full), and the nav-link hover is a small soft pill on the header (5px). This is the classic "white card on grey field" idiom — corners are soft enough to feel friendly to non-technical owners, never pill-shaped or gimmicky. Borders are rare on cards; separation comes from the grey field and shadows rather than strokes. Global `.button`/`.fade-in` legacy styles in `globals.css` are dead surface; the active system is the Tailwind utility set described here.

## Components

### Buttons
- **Shape:** gently rounded, 8px radius.
- **Primary:** Deep Slate (#1f2937) fill, white text, padding 12px 24px, Inter 500.
- **Hover / Focus:** Mid Slate (#374151) fill + `scale(1.05)` + deepened shadow over 300ms; `focus-visible` ring is a 2px Deep Slate outline around the button.
- **States:** disabled is a 60% opacity fill on the submit button while sending.
- **Ghost / Secondary:** none in the system — the only button is the solid primary CTA (Contact, retry, home). Keep it that way.

### Cards / Containers
- **Corner Style:** 8px radius.
- **Background:** white.
- **Shadow Strategy:** panel-rest (shadow-lg) at rest → panel-lift (shadow-xl) + `scale(1.05)` on hover, both over 300ms.
- **Border:** none; the grey field provides separation.
- **Internal Padding:** 32px for service/section panels; 24px for the form card and modal.
- **Icon slot:** service cards center a large tool icon (`text-5xl`, color = the service's Tool Spectrum color) above the title.

### Inputs / Fields
- **Style:** white fill, 1px Mid Slate (#374151) stroke, 6px radius, padding 8px, text-sm.
- **Focus:** 2px Deep Slate ring (focus:ring-2) swapping the border color; no glow, no color.
- **Labels:** 12px-above text-sm font-medium in ink.
- **Error / Disabled:** inline error text in outlined red (`text-red-600`) under the field; submit disabled at 60% opacity.

### Navigation
- **Style:** the dark Charcoal Slate header bar (`#2f3337`), white text, brand name at text-xl/2xl semibold on the left, centered links on desktop.
- **Default / Hover:** links are plain white text; hover floods a Mid Slate (#374151) 5px pill behind the link. **Deliberate deviation from the original Cloud Guard (#babbbc) pill:** Cloud Guard fails WCAG text contrast against the white link labels (~1.6:1 on hover/focus); the white-text pill idiom is preserved using Mid Slate, which passes AA. Cloud Guard remains defined in the sidecar but is retired from interactive use.
- **States:** current locale is a transparent select (Locale Ink text) in the bar; on mobile the links hide behind a hamburger that opens a white (`shadow-md`) centered dropdown with black links.
- **Territory:** white text on Charcoal Slate only. Never a light header.

### Locale Switcher
- **Style:** transparent select with Locale Ink (#9ca3af) text on the dark header; a `sr-only` label; no visible chrome, no caret by default.

### Success Dialog
- **Style:** full-screen Black 60% overlay, a Mid Slate (#374151) panel at 24px padding, 8px radius, `max-w-sm` (~384px).
- **Content:** white semibold title (text-xl), light ash body text (text-gray-300); focus is trapped inside the dialog (Escape or the close button) and close navigates home. **Deliberate deviation from the original "auto-navigates home after 3s":** the timer was dropped for WCAG 2.2.1 (no adjustable time limit); navigation happens only on explicit user action.

### Team Avatar
- **Style:** 128px circle with `object-fit: cover`, centered above name/role; role text in Faint Ink.

## Do's and Don'ts

### Do:
- **Do** use Charcoal Slate for full-width structure (header/footer) and Deep Slate for the CTA fill and heading ink. The two darks are the only fills allowed.
- **Do** keep every page on the fog-to-ash grey gradient (`from-gray-100 to-gray-300`) with white panels above it.
- **Do** always render service icons in that service's single Tool Spectrum color — the same color on Home and Services.
- **Do** communicate interactivity by lifting: card and button hover = scale(1.05) + one shadow step (panel-rest → panel-lift), 300ms.
- **Do** use quite rounded corners (8px cards/buttons, 6px inputs, circular avatars) and never fewer than two hierarchy levels of dark ink on white panels.
- **Do** keep the entrance motion to the two approved moves: the page fade-in (0.5s) and the template fade-and-rise (opacity + 10px, 0.4s, easeInOut).

### Don't:
- **Don't** use saturated colors for backgrounds, headings, borders, or fills — the Tool Spectrum is icons only.
- **Don't** restyle a card on hover with a hue change; only lift (scale + shadow).
- **Don't** introduce a second button variant or a light header; the single solid CTA on Charcoal Slate structure is the system.
- **Don't** put color-coded emphasis on body copy — ink weight (gray-800 bold) and size carry hierarchy.
- **Don't** increase card radius beyond 8px or start pill-ing cards; keep the "white panel on grey field" idiom intact.
- **Don't** reintroduce hard borders on white cards; the grey field and shadows separate surfaces.