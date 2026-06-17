# CLAUDE.md — Rojas Photography Website

> Source of truth for the rojas-photography-site project. Read it fully before making changes.
> If anything here conflicts with a casual prompt, **this file wins.** Ask before doing anything outside the Guardrails section.

## Project
- **Live site:** https://rojasphotography.net
- **Stack:** Next.js (App Router) · Supabase · deployed on Vercel
- **Email / newsletter:** Resend + Supabase
- **Owner:** Alfonso Rojas — Rojas Photography LLC, Modesto, CA

## The business
Premium corporate photography & video studio serving Modesto / Central Valley, run by **Alfonso and Niomi Rojas** (they shoot together). Known clients: Save Mart, Comcast, CalPERS, California Lawyers Association, Kaiser, Tenet Health. Reputation: well known locally and intentionally **premium / expensive** — protect that positioning in every decision.

## Strategy we're building toward: the "Premium Barbell"
The site currently sells one thing (premium individual headshots) to one audience. The business is really **two lanes**, and the site should reflect that:
- **Signature (premium):** individual executives, attorneys, personal brands. White-glove, you + Niomi, hand-retouched. Carries the brand and the margin.
- **Express (volume, automation-driven):** team headshot days, event coverage, school portraits. Fast, same-day galleries, instant ordering. Captures volume **without adding shooters**.

Priority order behind every decision: **(1) brand / be THE name → (2) revenue & profit → (3) volume / market share.**

Mid-tier guardrail: Express must always feel like a *different experience* (fast, self-serve, event-based) — **never a discounted Signature** — so it never cheapens the premium brand.

## Brand & voice conventions (ALWAYS / NEVER)
- **Brand color:** deep green `#1F6B4D`. Standardize everywhere — buttons, `theme-color`, favicon. (Site currently uses `#1A5C3C` in places; migrate it.)
- **Voice:** first-person plural — "we," **Alfonso and Niomi.** The two-of-us is a premium differentiator. NEVER mix solo "I" and "we" on the same page; fix existing pages written in "I."
- **Pricing:** lead with outcome and craft. **NEVER put a price (e.g. "$150") in a page title or meta description.** Transparent pricing on-page, lower down, is fine.
- **Tone:** confident, restrained, premium. Don't repeat the same phrases ("story," "authentic," "undersold by a photo") multiple times per page.
- **Audience clarity:** every page should signal within seconds whether it's for an **individual** or a **company.**

## Homepage target structure (top → bottom)
1. **Nav** — logo · Work · Signature · Teams & Events · About · Contact · "Book a session" (green button).
2. **Hero** — image-led. Headline + **two CTAs:** "Book a Signature session" (primary) and "Headshot days for teams" (secondary). *This dual path is the #1 fix.*
3. **Proof bar** — client logos (Save Mart, Comcast, CalPERS, CLA) + "500+ executives · 60+ ★ reviews."
4. **Two lanes** — side-by-side cards: Signature (for the individual) vs Express (for teams & events). *The key missing section.*
5. **What we do** — a curated **four** services (see below), each a descriptive link. Not all services.
6. **Portfolio grid** — "The Rojas look."
7. **Testimonials** — real, named.
8. **Annual Programs band** — recurring corporate headshot programs CTA.
9. **Footer** — full service list, locations, contact, Google reviews link, newsletter (**one** signup, no aggressive popup).

## Services — homepage real estate vs nav-only
**Feature on the homepage (curated 4):**
1. Signature Executive Headshots (flagship)
2. Corporate / Team Headshot Days
3. Annual Headshot Programs (recurring — needs a NEW page)
4. Event Photography

**Nav-only (present, not featured):** Commercial Photography · Video Production · Headshot Booth (fold under Express).
**Its own front door, NOT on the premium homepage:** School Portraits (PhotoDay) — different audience; separate landing page, link from nav.
**Footer only:** location / SEO pages (Modesto, Stockton, Tracy, Sacramento, East Bay).

**Internal-linking rule:** link key pages from the homepage *body* with **descriptive anchor text** ("corporate headshot days in Modesto," never "learn more"). Feature a focused few; let nav + footer carry the rest.

## Guardrails (for safe agent changes — IMPORTANT)
- **Branch, never main.** Do all work on a feature branch (e.g. `homepage-redesign`). NEVER commit directly to `main`.
- **Never deploy to production.** Don't merge to main or trigger a production deploy. Pushing a branch for a **Vercel preview** is fine; going live is Alfonso's call only.
- **Ask before:** installing new dependencies, changing env vars / secrets, editing Supabase schema or auth, touching DNS / Vercel project settings, deleting files, or anything irreversible.
- **Don't touch:** `.env*`, API keys, Supabase service-role keys, deployment config — flag these to Alfonso instead.
- Keep changes **scoped and explained**; prefer small, reviewable commits.

## SEO preservation (whenever you change the homepage or any URL)
Protect the signals the site already ranks on. Before/while editing:
- **Keep URLs.** If a URL must change, add a **301 redirect** old → new. Never change a URL without one.
- **Keep keyword-rich text.** Don't strip the on-page copy that carries our terms (Modesto / Central Valley, headshots, corporate, service names) for the sake of a minimal look.
- **Keep/refine** title tags, meta descriptions, and a keyword-bearing H1/H2 on every page — don't blank them.
- **Preserve** descriptive image alt text, internal links to key pages, and existing schema (LocalBusiness / Service / FAQPage / Review).
- **Keep it fast & accessible:** responsive image sizes (no 3840px on mobile), lazy-load below the fold, AA color contrast.
- **Don't let previews get indexed;** ensure production stays indexable.
- After a change, flag anything that altered a URL, title, or meta so it can be checked in Search Console.
> Full detail: `docs/Rojas-Website-Redesign-Playbook.md`.

## Work plan (priority order)
**Now — quick, high-impact:**
- Remove "$150" from the headshot page title & meta; reframe to outcome.
- Add the dual-CTA hero on the homepage.
- Verify FAQ answers actually render; populate them; add FAQPage schema.
- Embed live Google reviews; consolidate newsletter to one signup (kill the popup).
- Sync nav & footer service lists; migrate brand green to `#1F6B4D`.

**Next — structural:**
- Rebuild the homepage into the two-lane structure above.
- Apply the consistent "we / Alfonso & Niomi" voice across all pages.
- Build the Annual / Corporate Headshot Programs page.
- Add a visual client logo bar; H1/keyword pass per page; verify schema sitewide.

**Later — expansion:**
- School-portraits landing page (separate audience).
- Location pages: Stockton, Tracy, East Bay.
- Insights / Journal authority hub.
- Core Web Vitals + analytics / conversion-tracking audit.

---
*Full line-by-line audit (20 findings: current vs. recommended, priority / impact / effort) lives in `Rojas-Website-Audit.xlsx`. This file is the working summary Claude Code should operate from.*
