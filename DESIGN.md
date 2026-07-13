---
name: Rojas Photography
description: Premium corporate photography for Modesto & the Central Valley — big portraits on quiet ground, signed in green.
colors:
  rojas-green: "#1F6B4D"
  forest-ink: "#0f2e1e"
  mint-whisper: "#d1fae5"
  gold-star: "#b8860b"
  warm-paper: "#fafaf8"
  warm-paper-alt: "#f5f5f0"
  ink: "#1a1a1a"
  slate-body: "#374151"
  slate-muted: "#6b7280"
  white: "#ffffff"
typography:
  display:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.1
  title:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.22em"
rounded:
  xl: "0.75rem"
  "2xl": "1rem"
  full: "9999px"
spacing:
  gap: "1.25rem"
  card-pad: "1.75rem"
  gutter: "2rem"
  section-y: "5rem"
  section-y-lg: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.rojas-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "16px 40px"
  button-primary-hover:
    backgroundColor: "{colors.forest-ink}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.rojas-green}"
    rounded: "{rounded.full}"
    padding: "12px 32px"
  button-inverse:
    backgroundColor: "{colors.white}"
    textColor: "{colors.forest-ink}"
    rounded: "{rounded.full}"
    padding: "16px 40px"
  card-green:
    backgroundColor: "{colors.rojas-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.xl}"
    padding: "{spacing.card-pad}"
  card-surface:
    backgroundColor: "{colors.white}"
    textColor: "{colors.slate-body}"
    rounded: "{rounded.xl}"
    padding: "2rem"
---

# Design System: Rojas Photography

## 1. Overview

**Creative North Star: "The Corner Office"**

This is the design language of executive confidence: a well-appointed office rendered as a website. Deep green leather, serif numerals, framed portraits on quiet walls. The photography — real clients, real light — carries every page; the design's job is to hang it well and stay out of the argument. Whites and warm papers do the walls, Rojas Green does the upholstery, and DM Serif Display speaks only when something deserves letterhead.

The system is *quiet and confident*: soft pill buttons, gentle lifts on hover, one green voice used with intent. It explicitly rejects everything PRODUCT.md rejects — discount energy, couture ornament, six equal cards shouting at once — and it never trades the customer's clarity ("individual or team?") for decoration.

**Key Characteristics:**
- Photography-first: full-bleed portraits and image tiles do the visual heavy lifting
- One committed brand color (Rojas Green) with a dark forest anchor and a mint whisper for accents on green
- Serif display voice reserved for headings and numerals; humanist sans for everything read
- Flat at rest; depth appears only as a response to hover or as a gallery frame
- Motion is choreographed once (hero entrance), then restrained (scroll reveals, small lifts)

## 2. Colors

A committed single-hue palette: green carries the brand, warm neutrals carry the pages, gold appears only as praise.

### Primary
- **Rojas Green** (#1F6B4D): The signature. Primary buttons, links, eyebrow labels, stat numerals, and the light end of the brand-band gradient. If a page has one colored element, it is this color.
- **Forest Ink** (#0f2e1e): The dark anchor — button hover, the deep end of every green gradient, hero overlay washes, footer ground. Never used for body text.
- **Mint Whisper** (#d1fae5): Text and icon accents *on green surfaces only* — kicker labels in the hero, "Learn More" links on green cards, halo rings around process numerals. Never a page background.

### Secondary
- **Gold Star** (#b8860b): Testimonial stars only. Its scarcity is what makes five of them feel earned.

### Neutral
- **White** (#ffffff): Primary page ground and text on green.
- **Warm Paper** (#fafaf8) / **Warm Paper Alt** (#f5f5f0): Alternating section grounds; the gallery wall between white rooms.
- **Ink** (#1a1a1a): Headings on light ground.
- **Slate Body** (#374151): Body copy on light ground — never lighter than this for paragraphs.
- **Slate Muted** (#6b7280): Supporting captions and metadata only, at 16px+.

### Named Rules
**The One Green Rule.** Every green on the site comes from the Rojas Green ↔ Forest Ink ramp. No second green, ever. Green *bands* (gradient sections and cards) are the brand moments; between them, pages stay paper-quiet so the portraits win.

**The Bloom Rule.** Green surfaces are never flat fills. They carry the signature gradient: `radial-gradient(bloom of white at the top edge) + linear-gradient(160deg, Rojas Green → Forest Ink)`. The bloom is subtle (≤ .14 white alpha) — light falling into a dark room, not a spotlight.

## 3. Typography

**Display Font:** DM Serif Display (with Georgia fallback)
**Body Font:** DM Sans (with system-ui fallback)

**Character:** A single-weight serif that reads like engraved letterhead over a plain-spoken humanist sans. The serif brings the gravitas, the sans does the explaining. These two families are the brand's committed identity — keep them despite their ubiquity elsewhere; identity-preservation wins.

### Hierarchy
- **Display** (400, clamp(2.25rem → 4.5rem), 1.02, -0.01em): The hero headline only. One per page.
- **Headline** (400, 1.875–3rem, ~1.1): Section H2s. Every one carries a keyword ("Professional Headshots in Modesto — Two Ways").
- **Title** (400, 1.25–1.5rem): Card and lane H3s.
- **Body** (400, 1–1.125rem, 1.65): DM Sans, max ~65–75ch. On green grounds use white at 80–90% opacity, never gray.
- **Label** (600, 0.75rem, 0.22em tracking, UPPERCASE): Eyebrow kickers and the hero proof line. Rojas Green on light ground, Mint Whisper on green ground.

### Named Rules
**The Serif Speaks Rule.** DM Serif Display appears only in headings and featured numerals (stats, process steps). It never sets a paragraph. If the serif is doing body work, the hierarchy has failed.

## 4. Elevation

Flat at rest. Depth exists for exactly two reasons: a *state response* (cards and buttons lift on hover) and a *gallery frame* (featured portraits stand slightly off the wall at rest). Everything else sits flush on its ground; section separation comes from the white ↔ warm-paper alternation and hairline borders (gray-100/200 on light, white at 15% on dark), not from shadows.

### Shadow Vocabulary
- **Gallery frame** (`box-shadow: shadow-xl` + `ring-1 ring-black/5`): Featured lane portraits at rest — a mounted print, not a floating card.
- **Hover lift** (`shadow-2xl`, often with `translateY(-4px)`): The only motion-shadow. Applied to interactive cards on hover.
- **Green glow** (`0 12px 32px rgba(31, 107, 77, 0.12)`): Service-card hover — the shadow is tinted with the brand green, never plain black.

### Named Rules
**The Flat-at-Rest Rule.** If an element casts a shadow while nobody is interacting with it, it must be a photograph. Everything else earns depth through hover.

## 5. Components

Quiet and confident: assurance over excitement. Nothing snaps, flashes, or bounces; things settle.

### Buttons
- **Shape:** Full pill (9999px radius), generous padding (16px 40px), semibold DM Sans.
- **Primary:** Rojas Green fill, white text; hover deepens to Forest Ink with a 1px rise.
- **Outline:** 2px Rojas Green border, green text; hover fills green with white text.
- **Inverse (on green bands):** White fill, Forest Ink text; the highest-contrast CTA in the system.
- **Ghost (on imagery):** 2px white/40 border, white text; hover adds white/10 fill.

### Cards / Containers
- **Corner Style:** 0.75rem (xl) for cards; 1rem (2xl) for featured photography.
- **Green service card (signature):** The Bloom Rule gradient, 280px min height, icon in a white/10 circular chip with a white/20 border, white title, white/80 body, Mint Whisper "Learn More →". Hover: -4px lift + shadow-2xl.
- **Photo tile:** Image fills the container; text (when present) sits on a bottom-weighted black gradient scrim (from 10–15% to 85%). Images zoom to 1.05 over 0.5s on hover.
- **Surface card (testimonials):** White, xl radius, hairline gray border, 2rem padding, Gold Star rating row.

### Inputs / Fields
- **Style:** Rounded, quiet borders; on dark bands they sit as translucent wells with muted placeholders.
- **Focus:** 3px solid Rojas Green outline, offset 2px — the site-wide focus signature.

### Navigation
- White bar, DM Sans links; hover draws a 2px Rojas Green underline via `transform: scaleX` (left origin, 0.3s). "Book Now" is a primary pill, always visible. Mobile: slide-in drawer with staggered items; Services expands as an accordion.

### Process Numerals (signature)
Step circles: Rojas Green fill, white DM Serif numeral, wrapped in an 8px Mint Whisper halo ring at 60% — the wax-seal of the "how we work" section.

## 6. Do's and Don'ts

### Do:
- **Do** let photography carry every section that has any — full-bleed heroes, mounted lane portraits, the bento work grid. The design frames; it does not perform.
- **Do** answer "individual or team?" within the first viewport of any page, with one CTA path for each (PRODUCT.md's two-lane doctrine).
- **Do** use the Bloom Rule gradient on every green surface, and Mint Whisper — never gray — for secondary text on green.
- **Do** keep AA contrast everywhere: Slate Body (#374151) is the *floor* for paragraph text on light ground; white/80 is the floor on green.
- **Do** honor `prefers-reduced-motion` for every entrance and reveal — content must be fully readable with animations off.
- **Do** give every image descriptive, keyword-bearing alt text ("On-location corporate team headshot day at a Kaiser office"), never filenames or "photo".

### Don't:
- **Don't** let anything read as discounted or volume-cheap — the team/Express lane is "a different experience, never a cheaper Signature" (PRODUCT.md, verbatim).
- **Don't** put prices in page titles or meta descriptions. Outcome first; pricing lives on-page, lower down.
- **Don't** reach for ornate, couture, fashion-house luxury — no filigree, no script faces, no drop caps. This is modern, photographic restraint.
- **Don't** rebuild the old failure: six equal service cards competing at once. Two lanes lead; everything else is deliberately subordinate.
- **Don't** introduce a second accent hue, use Gold Star outside testimonial stars, or set gray text on green ground.
- **Don't** animate layout properties (width/height/padding); transforms and opacity only.
- **Don't** use solo "I" voice anywhere in UI copy — "we, Alfonso & Niomi," always.
