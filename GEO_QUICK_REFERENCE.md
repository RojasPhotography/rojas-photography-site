# GEO Quick Reference Guide
## Rojas Photography - Quick Implementation Notes

---

## CURRENT SCORE: 6.5/10 → TARGET: 9.5/10

---

## TOP 3 QUICK WINS (Do These First)

### 1. Add Quotable Stats to FAQ Answers
**PROBLEM:** Prices only in metadata
**SOLUTION:** Add "$150 session + $150/image" directly to FAQ answer text
**TIME:** 30 minutes per service page
**IMPACT:** Highest

Example text to add:
```
"Rojas Photography charges $150 for the session, plus $150 per image.
Most clients select 3-5 images for a total of $600–$1,150."
```

### 2. Create Definition Sections
**PROBLEM:** No clear "what is" definitions
**SOLUTION:** Add 1-2 sentence definition before service details
**TIME:** 15 minutes per page
**IMPACT:** High

Example:
```
"Professional corporate headshots are guided photography sessions
that produce polished, authentic portraits for LinkedIn and business
materials. Unlike casual photos, professional headshots use proper
lighting, posing direction, and professional editing."
```

### 3. Add Comparison Tables
**PROBLEM:** No side-by-side comparisons for AI parsing
**SOLUTION:** Create simple 3-column tables (Feature | Option 1 | Option 2)
**TIME:** 45 minutes per table
**IMPACT:** High

Example structure:
| Feature | Studio | On-Site |
|---------|--------|---------|
| Cost | $300-450 | $150-300 |
| Duration | 30-45 min | 4-6 hrs |

---

## KEY STATISTICS TO EMBED

### Prices (Add to FAQ Answers):
- Session: $150
- Per image: $150
- Typical investment: $600–$1,150

### Social Proof:
- 500+ executives photographed
- 50+ five-star reviews
- 15+ years experience

### Turnaround Times:
- Headshots: 48 hours
- On-site: 24 hours
- Event: 24-48 hours
- Commercial: 48-72 hours
- Video: 2-4 weeks

### Delivery Metrics:
- Session duration: 30-45 minutes
- Event photos (4-hour): 300-500
- Event photos (full-day): 600-800+
- Team capacity: 20-30 per day

---

## NEW FAQ QUESTIONS BY SERVICE

### Premium Headshots (Add 3):
1. "What makes a professional headshot different from a selfie?"
2. "Do I really need professional headshots?"
3. "How should I choose between studio and on-site?"

### On-Site Photography (Add 3):
1. "What's included when you come to our office?"
2. "How do we coordinate scheduling?"
3. "Can you provide team photos too?"

### Commercial (Add 3):
1. "What is commercial photography?"
2. "Do you offer product photography?"
3. "Can you photograph real estate?"

### Video (Add 3):
1. "Why do businesses need videos?"
2. "What's in your production process?"
3. "Can you create social media videos?"

### Event (Add 3):
1. "What if the event runs long?"
2. "Can we get photos immediately?"
3. "Do you edit event videos?"

---

## COMPONENTS TO CREATE

### Priority Order:
1. **DefinitionBox.tsx** — 30 min
2. **ComparisonTable.tsx** — 30 min
3. **AuthorBio.tsx** — 30 min
4. **CredentialsSection.tsx** — 45 min
5. **SuccessStories.tsx** — 30 min

---

## FILES TO UPDATE

**Core Service Pages (5 files):**
- /app/premium-headshots/page.tsx → Add definition + comparison
- /app/on-site-photography/page.tsx → Add table + data
- /app/commercial/page.tsx → Add definition + table
- /app/video/page.tsx → Add equipment specs
- /app/event-photography/page.tsx → Add scope table

**Supporting Files (3 files):**
- /app/lib/schema.ts → Add Equipment & Event schemas
- /app/lib/definitions.ts → CREATE → Central definitions library
- /app/page.tsx → Add CredentialsSection component

---

## CONTENT EXAMPLES TO COPY-PASTE

### Definition Template:
```
Professional [SERVICE] is [one sentence definition].
[Details about what's included]. This service typically costs [price range]
and delivers [turnaround time].
```

### FAQ Answer Template:
```
[Direct answer with specific numbers]. For example, [specific case study].
Additional context: [data point]. Call us at 209-380-3727 or schedule a
free discovery call to discuss your specific needs.
```

### Authority Statement Template:
```
Rojas Photography has photographed [500+] [executives/businesses].
Our [15+ years] of experience means we understand [your industry].
Client testimonials: [list names and titles].
```

---

## SCHEMA MARKUP CHECKLIST

- [x] LocalBusiness schema
- [x] Organization schema
- [x] Service schema (per page)
- [x] FAQPage schema (per page)
- [ ] Equipment schema (NEW)
- [ ] Event schema (NEW)
- [ ] BreadcrumbList schema (NEW)
- [ ] Person schema for Alfonso/Niomi (NEW)

---

## KEYWORD OPPORTUNITIES (Currently Not Optimized)

### Definition Queries:
- "What is professional corporate photography?"
- "What are professional headshots?"
- "What is on-site photography?"

### Comparison Queries:
- "Studio vs. on-site headshots"
- "Professional headshots vs. DIY photos"
- "Product photography vs. lifestyle photography"

### How-To Queries:
- "How to prepare for professional headshots"
- "How to choose a photographer"
- "How to use headshots for LinkedIn"

### Local Queries:
- "Professional photographers in Modesto"
- "Corporate photographers near me"
- "Headshot photographers Modesto CA"

### Value Queries:
- "Are professional headshots worth it?"
- "ROI of professional headshots"
- "Why do I need professional photos?"

---

## CRITICAL FAQ IMPROVEMENTS

### Current Weakness:
FAQ answers are functional but not quotable. Facts are scattered.

### Fix:
Rewrite each FAQ answer to include:
1. Direct answer with specific number
2. Concrete example or case study
3. Related statistics
4. Call-to-action

### Example Before/After:

**BEFORE:**
```
Q: How much does it cost?
A: Sessions are $150, plus $150 per image. No package minimums.
```

**AFTER:**
```
Q: How much do professional headshots cost at Rojas Photography?
A: Rojas Photography charges $150 for the session fee, plus $150 per
image selected. This pay-per-image model is flexible: most clients
select 3-5 images for a total of $600–$1,150. For example, a recent
client selected 4 images and invested $750 total. All images are
professionally edited and delivered within 48 hours. Call 209-380-3727
to discuss your budget and needs.
```

---

## TESTIMONIAL ENHANCEMENT

### Current:
```
"Professional, efficient, and high-quality." — Catherine Luke, CEO
```

### Enhanced with Data:
```
"Professional, efficient, and high-quality. Within days, our new
employee had a corporate headshot ready for our website and LinkedIn.
Highly recommended for any business." — Catherine Luke, CEO, [Company Name]
```

### Add Context:
- Company size (employees)
- Number of headshots ordered
- Result/outcome (promoted, featured, etc.)
- Time to implementation
- ROI or business impact

---

## METADATA OPTIMIZATION

### Current Meta Descriptions:
Good, but could include quotable stats

### Better Meta Descriptions:
```
Professional headshots in Modesto. $150 session + $150/image.
Guided studio photography with 48-hour delivery. 500+ executives
photographed. 50+ five-star reviews.
```

### Title Tags:
Include specific stat when possible
```
Professional Headshots Modesto CA | $150 Session | Rojas Photography
```

---

## MONITORING & SUCCESS METRICS

### Track These (Baseline → After 4 weeks):
- [ ] Organic traffic to service pages
- [ ] FAQ section engagement (clicks)
- [ ] Conversion rate from content
- [ ] Rankings for definition queries
- [ ] AI citations (search for your content in Claude responses)
- [ ] Testimonial page visits
- [ ] Definition landing page traffic

### Tools:
- Google Analytics: Track traffic sources
- Google Search Console: Monitor rankings
- AI Tools: Ask Claude directly if it cites your content
- Schema.org Validator: Verify markup

---

## QUICK CONTENT AUDIT

### What You Have (Good):
- ✓ Schema markup
- ✓ Clear pricing
- ✓ Named testimonials
- ✓ Statistics (500+, 50+, 15+ years)
- ✓ Multiple service pages

### What You're Missing (Fix):
- ✗ Service definitions (add first)
- ✗ Quotable facts in FAQ bodies (add second)
- ✗ Comparison tables (add third)
- ✗ Authority verification (links/credentials)
- ✗ Case studies with data
- ✗ Equipment specifications
- ✗ Process timelines

---

## IMPLEMENTATION PRIORITY

### Week 1 (Quick Wins):
1. Define all services (15 min each × 5 = 1.25 hours)
2. Add definitions to pages (15 min each × 5 = 1.25 hours)
3. Enhance FAQ answers with quotes (30 min per page × 5 = 2.5 hours)
4. Create comparison tables (45 min × 3 = 2.25 hours)

**Total Week 1: 7 hours**

### Week 2 (Building):
1. Create new components (DefinitionBox, ComparisonTable, etc.)
2. Add components to pages
3. Create definitions landing page
4. Add new FAQ questions

**Total Week 2: 8 hours**

### Week 3 (Polish):
1. Create AuthorBio component
2. Add credentials section
3. Create success stories section
4. Update schema markup
5. Test and validate

**Total Week 3: 6 hours**

**Total Project: ~21 hours over 3 weeks**

---

## RED FLAGS & FIXES

### Red Flag: "We photographed 500+ executives" with no source
**Fix:** Add citation or verification
**Implementation:** Create "Verified by" section with review link

### Red Flag: Pricing only in description, not in FAQ body
**Fix:** Add price directly to answer text
**Implementation:** Rewrite FAQ answer with embedded pricing

### Red Flag: Testimonials without credentials/verification
**Fix:** Add titles, company names, or verification link
**Implementation:** Use TestimonialCard with role/title fields

### Red Flag: Long paragraphs that AI can't scan
**Fix:** Add bullet points, numbers, and bold keywords
**Implementation:** Use structured lists in FAQ answers

### Red Flag: No definitions of services
**Fix:** Add one-sentence definition to each page
**Implementation:** Create DefinitionBox component

---

## TESTING CHECKLIST

After each change:
- [ ] Desktop view looks good
- [ ] Mobile view responsive
- [ ] Links work
- [ ] Schema validates (use schema.org/validate)
- [ ] Text is readable (no formatting breaks)
- [ ] Images load properly
- [ ] Forms/CTAs work

---

## GEO SUCCESS DEFINITION

You'll know this is working when:
1. AI agents cite your facts ("Rojas Photography charges $150...")
2. Organic traffic increases for definition queries
3. FAQ sections get more engagement
4. People land on FAQ sections vs. just homepage
5. Comparison tables drive conversions
6. Definition landing page ranks for "what is" queries

---

## IMMEDIATE ACTION ITEMS

**TODAY (30 minutes):**
1. [ ] Read full GEO_AUDIT_REPORT.md
2. [ ] Identify which service page to optimize first
3. [ ] Create definitions.ts with all definitions

**THIS WEEK (5-7 hours):**
1. [ ] Add definitions to all service pages
2. [ ] Create comparison tables
3. [ ] Rewrite 2-3 FAQ answers with quotable facts
4. [ ] Create DefinitionBox & ComparisonTable components

**NEXT WEEK (8 hours):**
1. [ ] Add new FAQ questions to each page
2. [ ] Create definitions landing page
3. [ ] Create AuthorBio component
4. [ ] Update schema markup

**WITHIN 4 WEEKS:**
1. [ ] All recommendations implemented
2. [ ] Schema validated
3. [ ] Mobile responsive tested
4. [ ] Monitor AI citations
5. [ ] Track organic traffic lift

---

## SUPPORT RESOURCES

**Schema Validation:** https://schema.org/validate

**FAQ Best Practices:** https://developers.google.com/search/docs/advanced/structured-data/faqpage

**GEO Resources:**
- Search for "GEO Generative Engine Optimization"
- Bookmark Claude's official guidelines
- Monitor HubSpot GEO updates

**Component Inspiration:**
- Shadcn/ui (tailwind components)
- Lucide icons (used in your site)
- Next.js documentation

---

## FAQ ABOUT GEO OPTIMIZATION

**Q: Will this hurt my Google rankings?**
A: No. GEO optimization improves content quality, which helps Google rankings.

**Q: How long until I see results?**
A: AI citations within 2-4 weeks. Organic traffic within 1-2 months.

**Q: Do I need to rewrite everything?**
A: No. Start with definitions and quotable FAQ answers. Add more over time.

**Q: Will users notice these changes?**
A: Yes, in a good way. Content is clearer, more structured, and more useful.

**Q: What if AI cites a competitor instead?**
A: Good content + authority signals win. Keep improving.

**Q: How do I track if it's working?**
A: Ask Claude/ChatGPT directly about your services. See if your site is cited.

---

**Remember:** GEO is about making your content more valuable and citable for AI. Better content = better rankings = more business.

Start small. Implement quickly. Measure results. Iterate.

Good luck! 🚀
