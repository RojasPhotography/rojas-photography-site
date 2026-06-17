# Rojas Photography — Pre-Redesign Baseline Checklist

> Run this **before** changing anything. The goal: a snapshot of where the site stands today, so after launch you can prove the redesign helped — and immediately spot anything that slipped.
> Pick one date window and use it everywhere (recommended: **last 6 months**). Note the **capture date** at the top of your exports.
> Save every export into the repo at `docs/baseline/` (e.g. `docs/baseline/2026-06-17/`).

**Capture date: ____________**

---

## 1. Google Search Console  (organic visibility)
Use the **Performance → Search results** report. Set the date range to the last 6 months (and optionally compare to the prior 6 for trend).

- [ ] **Top pages** — Performance → "Pages" tab. Export. (Which URLs earn clicks/impressions.)
- [ ] **Top queries** — Performance → "Queries" tab. Export. (Records clicks, impressions, avg position, CTR per term.)
- [ ] **Overall totals** — record total clicks, total impressions, average CTR, average position.
- [ ] **Priority-keyword positions** — filter Queries for each and record current position + CTR:
  - headshot photographer modesto
  - corporate headshots modesto
  - professional headshots modesto
  - team / on-site headshots modesto
  - event photographer modesto
  - (plus your target cities: stockton, tracy, sacramento, east bay)
- [ ] **Indexing** — Indexing → "Pages" report. Note how many pages are indexed and any errors/excluded pages. Export.
- [ ] **Sitemaps** — note the current sitemap URL and its status.
- [ ] **Links** — Links report → export "Top linking sites" and "Top linked pages" (your backlink + internal-link baseline).
- [ ] **Core Web Vitals** — the CWV report (field data); note URLs flagged poor/needs-improvement.

## 2. Google Analytics 4  (traffic & conversions)
*GA4 menu labels shift occasionally; these are by report name/function.* Same 6-month window.

- [ ] **Pages & screens** (Engagement report) — top pages by views, users, engagement time. Export.
- [ ] **Traffic acquisition** — sessions by channel (Organic Search, Direct, Referral, Social, Paid). Export. (Know your organic share before you change anything.)
- [ ] **Landing page report** — which pages users enter on, esp. from organic. Export.
- [ ] **Device category** — desktop vs mobile vs tablet split (Tech report).
- [ ] **Key events / conversions** — record current counts for each key event (form submit, phone-call click, booking/discovery-call, newsletter signup). *(GA4 calls these "key events.")*
- [ ] **Health markers** — overall sessions, engagement rate, avg engagement time.
- [ ] ⚠️ **Confirm tracking actually works first.** If CTA/form/scheduler events aren't set up in GA4 yet, your conversion baseline is blank — flag this; it's also on the audit list.

## 3. Core Web Vitals / page speed  (performance)
Run **PageSpeed Insights** (pagespeed.web.dev) on each key page, **mobile and desktop**, and record:
- [ ] Performance score
- [ ] **LCP** (largest contentful paint)
- [ ] **INP** (interaction to next paint — the current responsiveness metric)
- [ ] **CLS** (cumulative layout shift)

Pages to test: Home · In-Studio Headshots · On-Site · Contact/Quote · Sacramento (and any other ranking page).

## 4. On-page SEO map  (so nothing is lost in the rebuild)
Record, for **every** page: `URL · Title tag · Meta description · H1 · primary keyword`.
- [ ] Build this table (a sheet or markdown table in `docs/baseline/`).
- [ ] **Fast way:** run the free **Screaming Frog SEO Spider** (handles up to 500 URLs free) and export all titles, metas, and H1s at once.
- [ ] This becomes your "must-preserve" reference during the redesign and your QA checklist after.

## 5. Conversion baseline  (the business number)
- [ ] Current monthly **inquiries / bookings** (from 17hats / your CRM), split by Signature vs team/event where possible.
- [ ] Where they come from (organic, referral, direct, word of mouth) — even a rough split.

## 6. Local SEO baseline  (high leverage in Modesto)
- [ ] **Google Business Profile:** record current **review count + average rating**, and the Profile performance numbers (views, calls, direction/website clicks) for the last 6 months. Screenshot it.
- [ ] **NAP check:** record your exact Name / Address / Phone as listed on the site, GBP, and major directories (they must match exactly going forward).

## 7. Archive the current site
- [ ] Take full-page screenshots of the homepage + each key page (desktop + mobile).
- [ ] Optionally save a snapshot via the Wayback Machine ("Save Page Now") for a dated record.

---

### When this is done you'll have:
A dated `docs/baseline/` folder containing your rankings, traffic, conversions, speed scores, on-page map, and local numbers — the yardstick you'll measure the redesign against in the post-launch monitoring window (Playbook §14).
