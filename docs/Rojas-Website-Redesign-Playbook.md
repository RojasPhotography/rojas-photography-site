# Rojas Photography — Website Redesign Playbook

> A reference for the *full* homepage/site redesign — everything a senior web team weighs before, during, and after.
> **This is a planning reference, not a now task.** Keep it in `/docs`. The lean working rules live in `CLAUDE.md`; the line-by-line audit lives in `Rojas-Website-Audit.xlsx`. When the redesign begins, Claude Code reads this on demand.

---

## 0. How to use this
Work top to bottom. Sections 1–2 happen **before** any design or code. Don't skip the baseline (Section 2) — it's the single most-skipped, most-regretted step. Treat Section 8 (SEO) and Section 11 (Accessibility) as non-negotiable, not nice-to-haves.

---

## 1. Goals & success metrics
Decide what "better" means *numerically* before starting, so the redesign is judged on outcomes, not taste.
- **Primary goal:** more qualified inquiries (Signature consults + team/event quotes), while protecting premium positioning.
- **Secondary:** rank #1 for "Modesto headshot photographer" + sister terms; grow brand/direct traffic.
- **Define targets:** e.g. +X% inquiry conversion, hold/grow organic sessions, CWV all "good," reviews surfaced.
- **Strategy anchor:** the Premium Barbell — Signature (premium individuals) + Express (volume teams/events). Brand → revenue → volume.

## 2. Capture the baseline FIRST (before any change)
Export and save current-state numbers so you can prove impact and catch regressions:
- **Search Console:** top landing pages, top queries, current positions, impressions, CTR (last 3–6 months).
- **GA4:** sessions, top pages, traffic sources, conversion events, device split.
- **Core Web Vitals:** PageSpeed Insights / CrUX scores for home + key pages (mobile *and* desktop).
- **Current on-page SEO map:** every page's URL, title tag, meta description, H1 — so nothing is silently lost.
- **Conversion baseline:** current inquiry/booking volume and where it comes from.
- **Screenshot/archive** the current site for reference.

## 3. Audience & messaging
Design for two distinct buyers; every page should signal which one it's for within seconds.
- **Individual (Signature):** execs, attorneys, realtors, personal brands. Pain: "my photo undersells me." Wants: confidence, a guided experience, a result that looks like them.
- **Company (Express):** HR, ops, office managers, association/event leads. Pain: logistics, inconsistency, scale. Wants: easy coordination, fast delivery, consistent results across a team.
- **Messaging hierarchy per page:** one clear value prop → proof → the offer → a single primary CTA.

## 4. Brand & visual system
Lock these as design tokens in the Next.js project so they're consistent and reusable.
- **Color:** primary deep green `#1F6B4D`; define supporting neutrals (near-black text, warm off-white, soft gray), and one restrained accent. Standardize `theme-color` + favicon to match. Check all combinations for contrast (see Accessibility).
- **Typography:** one type scale (display / H1 / H2 / body / caption); pick a premium, legible pairing; consistent line-height and measure. Limit to two families.
- **Imagery / art direction:** the photography *is* the product — lead with it. Define a consistent crop, color/edit style ("the Rojas look"), and a hierarchy (hero > grid > supporting). Real client work over stock, always.
- **Layout & spacing:** a consistent grid and spacing scale; generous whitespace signals premium.
- **Components:** buttons (primary/secondary), cards (Signature vs Express), nav, forms, testimonial blocks, logo bar — defined once, reused.

## 5. Brand voice & copy
- **Voice:** first-person plural — "we," Alfonso **and** Niomi. Confident, warm, restrained. Never mix solo "I" and "we" on one page.
- **Premium tone:** lead with outcome and craft; never put price in titles/meta. Less copy, more precise copy. Avoid repeating signature phrases ("story," "authentic," "undersold") more than once per page.
- **Proof language:** name real clients (Save Mart, Comcast, CalPERS, CLA, Kaiser); use specific, attributed testimonials.
- **Microcopy:** buttons say what happens ("Book a Signature session," "Get a team quote"), not "Learn more."
- **Anchor text:** descriptive and keyword-aware for internal links ("corporate headshot days in Modesto").

## 6. Information architecture & UX
- **Sitemap:** Home · Work · Signature (+ in-studio) · Teams & Events (Express: team days, events, headshot booth) · Annual Programs · About · Contact. Nav-only: Commercial, Video. Separate front door: School Portraits. Footer: location/SEO pages + Journal.
- **Navigation:** organize by the two lanes; keep it shallow (everything ≤2 clicks). Sync nav and footer.
- **User flows:** Individual → discovery call/booking. Company → request a quote. Keep the two paths distinct end to end.
- **Page templates:** define reusable types (service page, location page, landing page, article) so future pages are fast and consistent.
- **Mobile-first:** design the small screen first; most local searches are mobile.

## 7. Content plan
- **Inventory & decide:** for every existing page/section — keep / revise / cut / create. Don't lose keyword-rich copy in the name of "minimal."
- **New content needed:** Annual Programs page, School Portraits landing, location pages (Stockton, Tracy, East Bay), Journal/insights hub.
- **Media:** curate portfolio galleries per lane; add BTS/video where it builds trust; embed real Google reviews.
- **FAQs:** real questions with real, visible answers (also feeds FAQ schema).

## 8. SEO preservation & growth  ← the high-risk area
**Preserve (so a redesign doesn't drop rankings):**
- **URLs:** keep existing URLs where possible. The homepage (root) is safe. For any page whose URL changes, add a **301 redirect** from old → new. Maintain a redirect map.
- **Content & keywords:** retain the target keywords currently earning rankings in visible on-page text (Modesto/Central Valley, headshots, corporate, the service terms). Premium ≠ empty.
- **Title tags & meta descriptions:** refine, don't gut; keep core keywords. (Remove "$150" from the headshots title/meta.)
- **Headings:** keep a keyword-bearing H1/H2 on each page even if the hero line is emotional.
- **Image SEO:** preserve/improve descriptive alt text and sensible file names.
- **Internal links:** keep the homepage links your other pages rely on; improve anchor text.
- **Structured data:** keep/extend LocalBusiness, Service, FAQPage, Review/AggregateRating schema; validate with Rich Results test.

**Technical SEO hygiene:**
- **XML sitemap** + `robots.txt` updated and submitted in Search Console.
- **Canonical tags** correct on every page; no duplicate-content traps.
- **Keep the Vercel preview out of Google** (noindex preview URLs) so it never competes with production; confirm **production is indexable** before/after launch.
- **404 page** + monitor for new crawl errors post-launch.

**Local SEO (high leverage for Modesto):**
- Optimize the Google Business Profile; ensure reviews actually show; keep **NAP** (name/address/phone) identical across site, GBP, and directories.
- Build genuine, unique **location landing pages** (not thin duplicates).

**Growth (after preservation):**
- Launch the Journal/insights hub targeting buyer + local terms.
- Earn local citations/backlinks (Chamber, associations, clients, press).

## 9. Conversion & analytics
- **Define conversions:** Signature consult booked, team quote requested, phone call, newsletter signup.
- **CTA strategy:** one clear primary CTA per page + the lane-appropriate secondary; consistent placement.
- **Trust signals:** logo bar, live Google rating, named testimonials, credentials (15+ yrs, FAA Part 107).
- **Forms & scheduling:** minimal fields; test the full booking + quote flow on mobile; confirm confirmations fire.
- **Analytics:** GA4 with **event tracking** on every CTA, form submit, and the scheduler — so you can see what converts. Verify before launch.

## 10. Technical & performance
- **Stack:** Next.js (App Router) · Supabase · Vercel. Reuse components; keep design tokens central.
- **Performance budget:** target Core Web Vitals "good" on mobile — optimize hero LCP, serve responsive image sizes (avoid shipping 3840px to phones), lazy-load below the fold, minimize JS.
- **Responsive:** test real breakpoints + real devices, not just the desktop preview.
- **Cross-browser:** Chrome, Safari, Firefox, Edge; iOS + Android.
- **Privacy/compliance:** privacy policy, form-consent, cookie/consent handling if analytics/marketing pixels are used.
- **Security:** never expose Supabase service-role keys or secrets client-side; handle form spam (honeypot/rate limit).

## 11. Accessibility (WCAG 2.1 AA — a successful company doesn't skip this)
- Color contrast meets AA (your green-on-white/dark combos especially).
- Semantic HTML, proper heading order, descriptive alt text.
- Keyboard navigable; visible focus states; logical tab order.
- Labels on all form fields; errors announced.
- Respect reduced-motion preferences for any animation.
- (Bonus: better accessibility correlates with better SEO.)

## 12. Pre-launch QA checklist
- [ ] All links work; no broken internal/external links.
- [ ] Every form + the scheduler tested end to end (incl. mobile + confirmations).
- [ ] Titles, metas, H1s correct on every page (vs the Section 2 map).
- [ ] Redirect map implemented and tested (no redirect chains/loops).
- [ ] Schema validates; sitemap + robots correct.
- [ ] CWV/page speed acceptable on mobile.
- [ ] Analytics + conversion events firing.
- [ ] Cross-browser + cross-device pass.
- [ ] Accessibility pass (contrast, keyboard, focus, alt text).
- [ ] Copy proofread; brand voice consistent; one voice ("we").
- [ ] Production is indexable; preview is not.

## 13. Launch sequence
1. Final review on the Vercel **preview** URL (you + Niomi, on phone + desktop).
2. Merge the branch → production deploy (your call only).
3. In Search Console: submit the updated sitemap, **request indexing** for the homepage + key pages.
4. Confirm redirects resolve and analytics is recording.

## 14. Post-launch monitoring (first 2–4 weeks)
- Expect minor ranking fluctuation for ~1–2 weeks while Google re-crawls — normal.
- Watch in GSC: coverage/crawl errors, new 404s, position/CTR vs the baseline.
- Watch in GA4: conversions and traffic vs baseline; fix any drop-off fast.
- Re-check Core Web Vitals on the live site.
- Keep a short "issues found post-launch" list and resolve quickly.

## 15. The redesign trap list (avoid these)
1. **Going so minimal you strip the keyword-rich text** Google ranks you on.
2. **Changing URLs without 301 redirects.**
3. **No baseline captured** — you can't tell if you helped or hurt.
4. **Letting the preview get indexed** (duplicate content).
5. **Dropping schema or internal links** in the rebuild.
6. **Shipping huge images** that tank mobile speed.
7. **Mixed voice** ("I" vs "we") and repetitive copy.
8. **Forgetting analytics/event tracking** so you fly blind on conversions.
9. **Skipping accessibility** until it's expensive to retrofit.
10. **No post-launch monitoring window.**
