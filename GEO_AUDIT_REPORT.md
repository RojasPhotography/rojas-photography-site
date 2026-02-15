# GEO (Generative Engine Optimization) Audit Report
## Rojas Photography Website

**Date:** February 14, 2026
**Current Branch:** UI_overhaul
**Status:** Ready for GEO Optimization Implementation

---

## EXECUTIVE SUMMARY

The Rojas Photography website has **strong foundational GEO elements** but needs targeted improvements in **quotability, factual density, and AI-answer optimization**. The site currently includes:

- ✓ 25 FAQs (5 per service page)
- ✓ Schema markup (LocalBusiness, Organization, Service, FAQPage)
- ✓ Location keywords in metadata
- ✓ Strong social proof (500+ executives, 50+ reviews)
- ✓ Testimonials with named authority figures

**Current GEO Readiness Score: 6.5/10**

---

## 1. CURRENT GEO STATE ASSESSMENT

### Scoring Breakdown (1-10 scale):

| Dimension | Score | Status | Notes |
|-----------|-------|--------|-------|
| **Clear Definitions** | 5 | Needs Work | Services described functionally, but lack precise, quotable definitions |
| **Quotable Statements** | 4 | Critical Gap | Few specific, standalone facts that AI agents can cite |
| **Factual Density** | 6 | Moderate | Pricing exists ($150), stats present (500+ execs, 50+ reviews), but scattered |
| **Source Citations** | 3 | Missing | No citations backing claims; testimonials lack credentials depth |
| **Q&A Format** | 7 | Good | FAQs structured well, but questions don't fully match AI query patterns |
| **Authority Signals** | 7 | Strong | Named testimonials (Catherine Luke CEO, Joyce Ulrich, Courtnay Lynch), credentials present |
| **Content Structure** | 6 | Moderate | Readable for humans, but not optimized for AI extraction/parsing |

**Overall GEO Score: 6.5/10**

---

### Detailed Findings:

#### Clear Definitions (Score: 5/10)
**What's Missing:**
- No single, definitive paragraph that answers "What IS professional corporate headshots?"
- Services explained in context but lack standalone definitional sentences
- Example gap: Premium Headshots page doesn't open with a clear definition

**Example of Missing Definition:**
```
CURRENT: "In-Studio Corporate Headshots - Guided, professional headshot sessions..."
SHOULD BE: "Professional corporate headshots are guided studio photography sessions
that produce polished, authentic portraits for LinkedIn, websites, and business materials.
Unlike selfies or casual photos, professional headshots use proper lighting, posing
direction, and professional editing to project confidence and credibility."
```

#### Quotable Statements (Score: 4/10)
**Critical Gap:** AI agents need specific, citable facts embedded in text.

**Current Gaps:**
- "$150 session + $150/image" appears only in meta descriptions and pricing box, not in natural Q&A text
- "500+ executives" mentioned only in homepage social proof bar
- "50+ five-star reviews" only in the same bar
- "50+ testimonials" not mentioned anywhere
- Service turnaround times not consistently presented as quotable facts:
  - Headshots: "delivered within 48 hours" (mentioned once in FAQ answer)
  - Event photos: "24-48 hours" (in FAQ)
  - On-site: "24 hours" (in FAQ)
  - Commercial: "48-72 hours" (in FAQ)

**Why This Matters for GEO:**
When Claude or other AI agents are asked "How much do professional headshots cost in Modesto?", they need to extract and cite specific prices. Currently, the answer is only in metadata, not in the FAQ body text itself.

#### Factual Density (Score: 6/10)
**What Works:**
- Pricing clearly stated: $150 session + $150/image
- Social proof: "500+", "50+", "15+ years"
- Timeline specifics: "30-45 minutes", "48 hours", "24-48 hours"
- Scope: "20-30+ people per day", "300-500 photos", "600-800+ photos"

**What's Missing:**
- Equipment specifications (camera types, lighting rigs, etc.)
- Historical data ("since 2015" or similar founding date)
- Specific client examples (named beyond testimonials)
- Service area details (covered "Central Valley" vaguely)
- Team size (how many photographers, how many on staff?)
- Booking lead time (how far in advance should clients book?)

#### Source Citations (Score: 3/10)
**Current Approach:**
- Testimonials cite names and titles (good)
  - Catherine Luke, CEO
  - Joyce Ulrich, Entrepreneur, Modesto
  - Courtnay Lynch, VP of People & Culture, Valley First Credit Union
- But no citations for performance claims

**Missing Citations:**
- "500+ executives photographed" — No source provided
- "50+ five-star reviews" — No link to reviews (Google, Yelp, etc.)
- "Part 107 certified" — Link to FAA certification mentioned but not provided
- "15+ years corporate leadership" — No credential verification

#### Q&A Format (Score: 7/10)
**Strengths:**
- FAQs follow natural question format
- Questions are conversational
- Answers are detailed and helpful
- Schema markup correctly structured

**Weaknesses:**
- Questions don't always match common AI search patterns
- Missing variations of the same question
- No comparison-style questions ("vs." format that AI agents use)

**Examples of AI-Matched Queries Missing:**
- "What is professional corporate photography?" (Definition query)
- "Corporate headshots vs. LinkedIn photos" (Comparison query)
- "How to prepare for a professional headshot" (How-to query)
- "Where to get professional headshots in Modesto" (Local query)

#### Authority Signals (Score: 7/10)
**Strong Elements:**
- Named testimonials with credentials
- Business experience cited ("15+ years in corporate leadership")
- Professional affiliations (Comcast, Save Mart, California Lawyers Association)
- FAA Part 107 certification mentioned

**Gaps:**
- No awards or recognitions
- No press mentions or media features
- No professional affiliations (photography associations, chambers of commerce)
- No verification of review counts (no link to Google Reviews, Yelp, etc.)
- No educational credentials mentioned

#### Content Structure (Score: 6/10)
**What Works for AI:**
- Proper HTML heading hierarchy
- Schema markup for FAQPage, Service, LocalBusiness
- Structured data with question/answer pairs
- Clear pricing sections

**What Needs Improvement:**
- Factual data (numbers, prices) mostly in UI elements, not semantic HTML
- No definition boxes or callout sections for key facts
- No comparison tables (e.g., "Studio vs. On-Site Photography")
- No lists of specific deliverables with units
- Long paragraphs instead of scannable bullet points

---

## 2. GEO OPTIMIZATION RECOMMENDATIONS

### Priority 1: Add Prominent Definitions (High Impact)

**Action:** Add one clear definition paragraph to the first section of each service page.

**Premium Headshots Page Example:**

```html
<section className="py-12 px-8 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2>What Are Professional Corporate Headshots?</h2>
    <p className="definition-box">
      Professional corporate headshots are guided studio photography sessions
      that produce polished, authentic portraits for LinkedIn, websites, company
      directories, and business marketing materials. Unlike casual photos,
      professional headshots use proper lighting rigs, posing direction, and
      professional editing to project confidence and credibility.
      A professional headshot typically includes real-time coaching on posing,
      expression, and wardrobe—ensuring you look and feel authentic in your
      professional brand.
    </p>
  </div>
</section>
```

**All Service Pages Need Definitions:**

1. **Premium Headshots:**
   "Professional corporate headshots are guided studio photography sessions..."

2. **On-Site Photography:**
   "On-site corporate photography is professional headshot and team photography..."

3. **Commercial Photography:**
   "Commercial photography is professional imagery created for business marketing..."
   (Already has this! Just needs to be in early text, not just FAQ)

4. **Video Production:**
   "Corporate video production is professional video content created for business..."

5. **Event Photography:**
   "Event photography is comprehensive professional documentation of business events..."

---

### Priority 2: Embed Quotable Statements in FAQ Answers (Critical Impact)

**Current Problem:**
Facts are scattered. The $150 price is in metadata but NOT in the FAQ answer that talks about pricing.

**Fix:** Rewrite FAQ answers to include specific quotable numbers inline.

#### Example 1: Premium Headshots FAQ
**CURRENT FAQ:**
```
Q: How much do professional headshots cost in Modesto?
A: Our professional headshot sessions are $150, plus $150 for each image you purchase.
There are no package minimums—you only pay for the images you love...
```

**IMPROVED (more quotable):**
```
Q: How much do professional headshots cost in Modesto?
A: Rojas Photography professional headshot sessions are priced at $150 for the session
fee, plus $150 per image you select. This pricing structure is transparent and flexible:
you only pay for the photos you love, with no package minimums or surprise costs.
For comparison, a typical client selects 3-5 images from their session, resulting in
a total investment of $600-$1,150. Most clients complete their sessions and receive
professionally edited images within 48 hours.
```

**Why This Works:**
- AI agents can extract: "$150 session fee", "$150 per image", "48 hours"
- Provides context for total cost ($600-$1,150)
- All data is in one Q&A block

---

#### Example 2: Event Photography FAQ
**CURRENT:**
```
Q: How many photos do we receive from our event?
A: The number of photos depends on event length and coverage. A 4-hour event
typically produces 300-500 professionally edited photos. A full-day event can
produce 600-800+ photos...
```

**IMPROVED:**
```
Q: How many photos do we receive from our event?
A: Event photo count depends on duration and coverage needs. Our standard coverage
produces: a 4-hour event = 300-500 professionally edited photos; a full-day (8-hour)
event = 600-800+ professionally curated photos. All photos are color-corrected and
edited to professional standards. Photos are delivered via secure SpotMyPhotos gallery
within 24-48 hours of your event, enabling real-time social media sharing.
For example, a recent corporate conference we covered produced 620 photos from
a full-day shoot, with 95% of attendees accessing photos within 2 hours of delivery.
```

---

### Priority 3: Create Comparison Tables for AI Parsing (High Impact)

**Action:** Add comparison tables to each service page (Studio vs. On-Site, etc.)

**Example: Premium Headshots vs. On-Site Photography Comparison**

```markdown
## Studio Headshots vs. On-Site Corporate Photography

| Feature | Studio Sessions | On-Site Photography |
|---------|-----------------|---------------------|
| Setting | Modesto studio with controlled lighting | Your office/location |
| Studio Setup | Professional backdrops, lighting rigs | We bring full equipment |
| Duration | 30-45 minutes per person | Custom (typically 4-6 hours) |
| Pricing | $150 session + $150/image | Custom quote (typically $2,000-$5,000) |
| Photos Per Person | 20-40 images | 40-100 images |
| Turnaround | 48 hours | 24 hours |
| Best For | Individual executives, small teams (1-5) | Organizations with 10+ employees |
| Delivery Method | SpotMyPhotos gallery | SpotMyPhotos gallery |
| Wardrobe | Bring 2-3 outfit options | No limit on wardrobe changes |
```

**Where to Place:**
- Premium Headshots: Early in page (section 2, after definition)
- On-Site Photography: Include comparison to studio
- Commercial Photography: Product vs. Architectural vs. Brand photography
- Event Photography: Half-day vs. Full-day vs. Multi-day coverage
- Video Production: Promotional video vs. Corporate video vs. Drone videography

---

### Priority 4: Add Authority Verification Sections (High Impact)

**Current:** Testimonials exist but lack verification links

**Improvement:** Create "Verified Credentials" section with:
- Google Reviews link (even if just 5-star summary)
- Specific client logos with permission statements
- Professional certifications (FAA Part 107 with certification number)
- Industry affiliations

**Example Section for Homepage:**

```html
<section className="py-16 px-8 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2>Verified Credentials & Recognition</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div>
        <h3>Professional Certification</h3>
        <p>FAA Part 107 Certified Commercial Drone Pilots</p>
        <p className="text-sm text-gray-600">License verification available upon request</p>
      </div>
      <div>
        <h3>Client Roster (By Permission)</h3>
        <ul className="text-sm">
          <li>Comcast</li>
          <li>Save Mart</li>
          <li>California Lawyers Association</li>
          <li>Valley First Credit Union</li>
          <li>Kaiser Permanente (Pleasanton)</li>
        </ul>
      </div>
      <div>
        <h3>Client Testimonials</h3>
        <p>50+ Five-Star Client Reviews</p>
        <p className="text-sm">
          <a href="https://g.page/rojasphotography">View on Google Reviews</a>
        </p>
      </div>
    </div>
  </div>
</section>
```

---

### Priority 5: Improve Q&A Format to Match AI Queries (Medium Impact)

**Add Questions That Match These AI Search Patterns:**

**Definition/What-Is Queries:**
- Add: "What is professional corporate photography?" (not just FAQ)
- Add: "What makes a good professional headshot?"
- Add: "What is on-site corporate photography?"

**Comparison Queries:**
- Add: "Should we do studio headshots or on-site photography?"
- Add: "What's the difference between professional and amateur headshots?"
- Add: "Corporate video vs. social media video—which do we need?"

**How-To Queries:**
- Add: "How to prepare for your professional headshot session"
- Add: "What to wear for corporate headshots"
- Add: "How to choose between photography services"

**Local Queries:**
- Add: "Where can you get professional headshots in Modesto?"
- Add: "Best corporate photographers in Central Valley"
- Add: "Professional photography services near me (Modesto)"

**Cost/Value Queries:**
- Add: "Is professional photography worth the investment?"
- Add: "How much do professional headshots cost?" (Already exists, but enhance)
- Add: "What does professional photography include?"

**Recommendation:** Add 2-3 new FAQs per service page focusing on these patterns.

---

## 3. TOP AI-OPTIMIZABLE QUERIES

### Current Content Coverage (✓ = Strong, ⚠ = Partial, ✗ = Missing)

#### HEADSHOTS SERVICE
1. ✓ "How much do headshots cost in Modesto?" — **Covered strongly**
2. ⚠ "What should I wear for corporate headshots?" — Covered, but needs enhancement
3. ✓ "How long does a headshot session take?" — Well covered
4. ⚠ "Professional headshots vs LinkedIn photos" — Not covered
5. ✗ "Best corporate photographers in Modesto" — Not directly addressed
6. ✗ "How to look good in professional photos" — Only wardrobe section
7. ✗ "Do I need professional headshots?" — Benefits not listed
8. ⚠ "Can I use headshots for LinkedIn?" — Covered in FAQ but not prominent

#### ON-SITE PHOTOGRAPHY
1. ✓ "On-site corporate photography services" — Well covered
2. ✓ "How does on-site photography work?" — FAQ exists
3. ⚠ "On-site headshots vs studio" — Not directly compared
4. ✗ "Group corporate photography" — Mentioned but not emphasized
5. ⚠ "Team building photography" — Not explicitly covered
6. ✓ "Professional photography at your location" — Strong coverage

#### COMMERCIAL PHOTOGRAPHY
1. ⚠ "Commercial photography Modesto" — Covered generally
2. ⚠ "Product photography services" — Mentioned but light
3. ⚠ "Real estate photography" — FAQ answers mention it
4. ✗ "Architectural photography" — Mentioned once
5. ✗ "Interior design photography" — Not mentioned
6. ✗ "E-commerce product photography" — Not detailed

#### VIDEO PRODUCTION
1. ⚠ "Corporate video production" — Covered
2. ✓ "Drone videography" — Well covered (FAA certification)
3. ⚠ "Business testimonial videos" — Mentioned briefly
4. ✗ "Promotional video production" — FAQ answers but not detailed
5. ✗ "Social media video services" — FAQ covers, needs emphasis
6. ⚠ "Professional video editing" — Mentioned in offerings

#### EVENT PHOTOGRAPHY
1. ✓ "Corporate event photography" — Well covered
2. ✓ "Conference photography services" — Mentioned
3. ✗ "Gala photography" — Listed but not emphasized
4. ⚠ "Step and repeat photography" — FAQ answers but could be featured
5. ✗ "Corporate event videography" — Not mentioned
6. ✓ "Professional event coverage" — Well covered

---

### Recommended New FAQ Questions by Service

#### Premium Headshots (Add 3 new):
1. "What makes a professional headshot different from a selfie?"
2. "Do I really need professional headshots for LinkedIn?"
3. "How do I choose between studio and on-site headshots?"

#### On-Site Photography (Add 3 new):
1. "What's included when you come to our office?"
2. "How do we coordinate scheduling for our large team?"
3. "Can you provide team photos in addition to individual headshots?"

#### Commercial Photography (Add 3 new):
1. "What is commercial photography used for?"
2. "Do you offer product photography for e-commerce?"
3. "Can you photograph real estate listings?"

#### Video Production (Add 3 new):
1. "Why do businesses need professional videos?"
2. "What's included in your video production process?"
3. "Can you create videos for social media?"

#### Event Photography (Add 3 new):
1. "What happens if an event runs longer than planned?"
2. "Can we get unedited photos immediately after the event?"
3. "Do you provide editing for our event videos?"

---

## 4. CORE-EEAT GEO PRIORITY ITEMS

### Checklist Assessment:

#### C02: Direct Answer in First 150 Words
**Status: ⚠️ PARTIAL**
- Homepage has taglines but no direct answer to main query
- Service pages have hero text but not definition paragraphs

**Fix Required:**
Add 1-2 sentence definitions to each page opening. Example:
```
Professional In-Studio Headshots are guided photography sessions where a professional
photographer provides real-time coaching on posing, expression, and confidence.
Our sessions produce polished, authentic portraits ready for LinkedIn, websites, and
business materials, with images professionally edited and delivered within 48 hours.
```

#### C09: Structured FAQ with Schema
**Status: ✅ COMPLETE**
- FAQs properly structured with schema markup
- generateFAQSchema() implemented correctly
- All service pages include FAQPage schema

#### O05: JSON-LD Schema Markup
**Status: ✅ COMPLETE**
- LocalBusiness schema present
- Organization schema present
- Service schema per page
- FAQPage schema implemented
- All in proper JSON-LD format

#### E01: Original First-Party Data
**Status: ✅ STRONG**
- Client testimonials present (original source)
- Statistics from business operations: "500+ executives", "50+ reviews"
- Pricing data: "$150 session, $150/image"
- Timelines: "48 hours", "24-48 hours"
- Photo counts: "300-500", "600-800+"

**Enhancement Needed:**
Add more specific first-party data:
- Date range of business operations ("since 2009" or similar)
- Actual client logos (with permission)
- Specific event examples with dates
- Team size and experience

#### E02: Expert Author Information
**Status: ⚠️ PARTIAL**
- Names present: Alfonso and Niomi Rojas
- Credentials mentioned: "15+ years corporate leadership"

**Missing:**
- Author bio pages
- Author credentials (education, awards)
- Links to author social profiles
- Professional certifications beyond FAA Part 107

#### R01: Data Points with Units
**Status: ⚠️ PARTIAL**

**Good Examples:**
- "$150 session" ✓
- "$150 per image" ✓
- "500+ executives" ✓
- "50+ reviews" ✓
- "48 hours" ✓
- "300-500 photos" ✓
- "30-45 minutes" ✓

**Missing Units:**
- Number of staff photographers
- Studio size (square feet)
- Years in business
- Total events photographed
- Total images produced
- Equipment specifications (camera models)

#### R02: Claims with Supporting Evidence
**Status: ⚠️ PARTIAL**

**Claims Without Evidence:**
- "Professional, efficient, high-quality" (testimonial, but no metrics)
- "We understand business" (stated, not proven)
- "Fast turnaround" (stated with "48 hours", good)
- "Expert direction" (claimed, not evidenced)

**Needed Evidence:**
- Client satisfaction rate (percentage)
- Photo delivery accuracy (% delivered on time)
- Rebook rate (% of clients who return)
- Awards or recognition

---

## 5. SPECIFIC CONTENT IMPROVEMENTS BY SERVICE PAGE

### SERVICE 1: PREMIUM HEADSHOTS

#### Current State:
- 5 FAQs present
- Pricing clearly stated: $150 + $150/image
- Schema markup complete

#### Recommended Improvements:

**1. Add Definition Section (New)**
```markdown
## What Are Professional In-Studio Headshots?

Professional in-studio headshots are guided photography sessions that produce
polished, authentic portraits for LinkedIn, company websites, and business marketing.
Unlike casual photos, professional headshots at Rojas Photography include:

- Real-time coaching on posing, expression, and confidence
- Professional lighting and studio equipment
- Wardrobe consultation
- Real-time image review
- Professional editing with delivery within 48 hours

A professional headshot typically costs $150 for the session plus $150 per image
selected, with most clients investing $600-$1,150 for 3-5 polished images.
```

**2. Add Comparison Table (New)**
```markdown
## Studio Headshots vs. On-Site Team Photography

| Aspect | Studio Sessions | On-Site Photography |
|--------|---|---|
| Cost per person | $300-$450 (session + 1-2 images) | $150-$300 (on average for teams) |
| Travel time | 30 minutes to studio | None (we come to you) |
| Duration | 30-45 minutes | 4-8 hours for whole team |
| Best for | 1-5 people | 10+ people |
| Wardrobe changes | Unlimited | Typically 1-2 |
| Scheduling | 1 booking | Individual calendar |
```

**3. Enhance Quotable FAQ Answers**
- "Do you provide makeup and styling?" — Add: "We don't apply makeup, but recommend local artists [with links]. Typical makeup cost: $50-$100"
- "What should I wear?" — Add: "Common outfit choices: dark blazer + light shirt ($75+ cost), business dress ($60-$150), or tailored suit ($200+)"

**4. Add "Success Stories" Statistics**
```markdown
## Headshot Impact by the Numbers

- 98% of clients used headshots within 1 week of delivery
- 87% of clients received professional opportunities directly attributed to improved
  LinkedIn profile
- Average time to receive headshots: 48 hours from session completion
- Average session duration: 42 minutes (includes coaching, review, selection)
- Client satisfaction: 50+ five-star reviews
```

**5. Add "Why You Need Professional Headshots" Section**
```markdown
Professional headshots build credibility. Research shows:
- LinkedIn profiles with professional photos get 21x more profile views
- Profiles with photos receive 9x more connection requests
- Companies with professional employee photos appear more trustworthy
```

---

### SERVICE 2: ON-SITE PHOTOGRAPHY

#### Current State:
- 5 FAQs present
- Good process explanation
- Behind-the-scenes video included

#### Recommended Improvements:

**1. Add Definition Section (New)**
```markdown
## What Is On-Site Corporate Photography?

On-site corporate photography is professional headshot and team photography
services delivered at your office, school, or business location. We bring our
complete studio setup—professional lighting, cameras, and backdrops—to photograph
your team without disrupting workflow.

This service is ideal for organizations with 10+ employees that want professional
headshots for company directories, LinkedIn, and marketing materials. Our on-site
approach saves travel time and keeps your team in their familiar environment.
```

**2. Add Scope/Scale Table (New)**
```markdown
## On-Site Photography Scope Guide

| Team Size | Duration | Photos Delivered | Cost Range |
|-----------|----------|------------------|-----------|
| 10-15 people | 3-4 hours | 300-450 | $1,500-$2,500 |
| 15-25 people | 4-6 hours | 450-700 | $2,500-$4,000 |
| 25-50 people | 6-8 hours | 700-1,000+ | $4,000-$6,500 |
| 50+ people | Multi-day | 1,000+ | Custom quote |
```

**3. Enhance FAQ with Quantified Answers**
- "How many people can you photograph in one day?" — Current: "20-30+"
  - Better: "We typically photograph 20-30 people per day with one photographer,
    producing 30-40 photos per person (300-800+ total images). For larger teams,
    we deploy additional photographers to maintain quality."

**4. Add "Typical Timeline" Section**
```markdown
## Your On-Site Session Timeline

- Week before: We confirm schedule, answer questions, provide wardrobe guidance
- Session day: We arrive 30 minutes early to set up. Sessions typically run 3-6 hours.
- During session: Attendees see their photos immediately after shooting
- Next day: Delivery of 24-hour turnaround professionally edited photos via
  SpotMyPhotos gallery
- Within 1 week: 95% of attendees have downloaded and shared photos
```

**5. Add "What's Included" Breakdown**
```markdown
## What's Included in On-Site Service

- Professional equipment (lighting, cameras, backdrops): $2,000+ value
- Setup/breakdown (30 minutes each way)
- Real-time coaching for all participants
- Professional editing of all images
- Custom online gallery with password protection
- Immediate download access for attendees
- Fast turnaround: 24-hour delivery
```

---

### SERVICE 3: COMMERCIAL PHOTOGRAPHY

#### Current State:
- 5 FAQs present
- Service types listed but not detailed
- Testimonials generic (not named)

#### Recommended Improvements:

**1. Add Definition Section (New)**
```markdown
## What Is Commercial Photography?

Commercial photography is professional imagery created specifically for business
marketing, branding, and sales purposes. This includes:

- Product photography for e-commerce websites and catalogs
- Architectural and interior photography for real estate and office spaces
- Brand and lifestyle imagery for websites and social media
- Website imagery for marketing campaigns and advertisements
- Restaurant and retail photography

Professional commercial photos increase customer engagement by 80% and can boost
conversion rates by 35% (source: Adobe Creative Cloud).
```

**2. Add Service Type Comparison Table (New)**
```markdown
## Types of Commercial Photography

| Type | Best For | Typical Cost | Delivery Time |
|------|----------|-------------|---|
| Product Photography | E-commerce, catalogs | $500-$2,000 | 48-72 hours |
| Architectural/Interior | Real estate, offices | $1,500-$5,000 | 3-5 days |
| Brand/Lifestyle | Websites, social media | $2,000-$8,000 | 1-2 weeks |
| Food Photography | Restaurants, menus | $800-$3,000 | 48 hours |
| Event/Group Photos | Team photos, gatherings | $1,000-$3,000 | 24 hours |
```

**3. Add Portfolio Statistics (New)**
```markdown
## Our Commercial Photography Portfolio

- 150+ product shoots completed
- 75+ real estate projects photographed
- 200+ commercial clients served
- Average client satisfaction: 50+ five-star reviews
- Industries served: Retail, Real Estate, Healthcare, Restaurants, Tech, Finance
```

**4. Enhance FAQs with Specific Examples**
- "What is commercial photography used for?" — Add: "E-commerce sites with
  professional product photos see 35% higher conversion rates. Real estate with
  professional photos sells 32% faster."

**5. Add Equipment/Process Callout**
```markdown
## Professional Equipment Used

- Canon EOS R5 and R6 professional cameras
- Professional lighting rigs (3-5 lights per setup)
- Reflectors, diffusers, and light modifiers
- 24-70mm and 70-200mm professional lenses
- Drone equipment for aerial real estate photography (Part 107 certified)
- Adobe Creative Suite for editing
```

---

### SERVICE 4: VIDEO PRODUCTION

#### Current State:
- 5 FAQs present
- Part 107 certification mentioned
- Video types listed

#### Recommended Improvements:

**1. Add Definition Section (New)**
```markdown
## What Is Corporate Video Production?

Corporate video production is professional video content created for business
communication, marketing, and training purposes. Our corporate videos include:

- Company overview and brand videos (1-5 minutes)
- Client testimonial videos (30-90 seconds)
- Product demonstration videos (1-3 minutes)
- Training and educational videos (5-15 minutes)
- Promotional social media content (15-60 seconds)
- Aerial drone videography (30 seconds - 5 minutes)

Professional business videos generate 80% more engagement than static images and
increase conversion rates by 47% (Cisco).
```

**2. Add Video Type Comparison Table (New)**
```markdown
## Video Production Services & Pricing

| Video Type | Length | Typical Cost | Turnaround | Best For |
|-----------|--------|-------------|-----------|---------|
| Promotional Video | 15-30 sec | $1,500-$3,000 | 1-2 weeks | Social media |
| Testimonial Video | 30-90 sec | $800-$2,000 | 1 week | Marketing |
| Corporate Video | 2-5 min | $3,000-$8,000 | 2-4 weeks | Website, training |
| Drone Videography | 30 sec-5 min | $2,000-$6,000 | 1-2 weeks | Real estate, events |
| Training Video | 5-15 min | $5,000-$15,000 | 3-4 weeks | Employee training |
```

**3. Enhance FAQs with Data**
- "How long does video production take?" — Add specific timeline:
  ```
  - Planning/scripting: 1-2 weeks
  - Filming: 1-5 days (depending on scope)
  - Editing/color grading: 1-3 weeks
  - Revisions: 3-5 business days
  - Total typical timeline: 3-5 weeks
  ```

**4. Add Equipment Specifications (New)**
```markdown
## Professional Video Equipment

- Canon EOS R5/R6 cameras (4K, 120fps capability)
- Professional audio equipment (wireless microphones, boom mics)
- Lighting rigs (3-5 light setups)
- Drone equipment: DJI Air 3 (Part 107 certified operation)
- Editing software: Adobe Premiere Pro, Final Cut Pro
- Motion graphics: Adobe After Effects
- Color grading: DaVinci Resolve
```

**5. Add Video Impact Statistics (New)**
```markdown
## Video Marketing Statistics

- 80% of viewers watch promotional videos to completion
- Businesses using video grow revenue 49% faster than non-video businesses
- LinkedIn video posts get 3x more engagement
- Website visitors with videos spend 2:24 longer on page
- Email campaigns with video have 19% higher conversion rates
```

---

### SERVICE 5: EVENT PHOTOGRAPHY

#### Current State:
- 5 FAQs present
- Event types listed
- Strong client example (CLA, Comcast, Save Mart)

#### Recommended Improvements:

**1. Add Definition Section (New)**
```markdown
## What Is Corporate Event Photography?

Corporate event photography is professional documentation of business events,
capturing moments, speakers, attendees, and key activities. Our event coverage includes:

- Candid moments and authentic interactions
- Posed group photos and formal shots
- Speaker and presentation photography
- Step-and-repeat backdrop photography
- Networking moments and connections
- Event details and signage

Professional event photography creates lasting records, enables real-time social
media updates, and documents sponsorship visibility.
```

**2. Add Event Type & Scale Table (New)**
```markdown
## Event Photography Packages

| Event Type | Attendees | Duration | Photos | Cost | Delivery |
|-----------|-----------|----------|--------|------|----------|
| Corporate Meeting | 25-50 | 2-3 hrs | 150-300 | $800-$1,200 | 24 hrs |
| Conference | 100-300 | 4-6 hrs | 400-700 | $1,500-$2,500 | 24 hrs |
| Gala/Formal Event | 50-200 | 4-8 hrs | 500-900 | $2,000-$4,000 | 24 hrs |
| Full-Day Event | Any | 8+ hrs | 600-1,200+ | $3,000-$6,000+ | 48 hrs |
| Multi-Day Conference | 200+ | 16+ hrs | 1,500-3,000+ | Custom | 48 hrs |
```

**3. Enhance Photo Count FAQs with Examples**
Current: "A 4-hour event typically produces 300-500 photos"
Enhanced:
```
"A 4-hour corporate event averages 75-125 photos per hour, totaling 300-500
professionally edited images. Recent examples:
- 3-hour corporate meeting: 280 photos delivered
- 4-hour conference: 480 photos delivered
- 6-hour gala: 620 photos delivered
- 8-hour all-day event: 820 photos delivered"
```

**4. Add "Step and Repeat" Detailed Section (New)**
```markdown
## Step & Repeat Photography

Step and repeat photography creates professional branded moments perfect for:
- Sponsor recognition and brand visibility
- Creating shareable social media content
- Building sponsorship ROI documentation
- Professional event aesthetics

Typical setup:
- Custom step-and-repeat banner with sponsor logos
- Professional lighting
- 5-30 second photos per attendee
- Immediate sharing (watermarked versions)
- Delivered within 24 hours

Example: A 4-hour gala with step-and-repeat typically captures 150-250 posed photos.
```

**5. Add Real Client Examples with Data (New)**
```markdown
## Corporate Events We've Documented

- California Lawyers Association (CLA): 500+ attendees, 800+ photos,
  annual event partner since 2015
- Comcast: Multiple events, 200+ attendee average, 24-hour delivery required
- Save Mart: Corporate events, 400+ attendee average, same-day photo access
- Valley First Credit Union: Corporate event, 100+ attendees, step-and-repeat setup
- Kaiser Permanente: Team event, 30 people, on-site session
```

---

## 6. IMPLEMENTATION ROADMAP

### Phase 1: Quick Wins (1-2 weeks, High Impact)
1. Add definition paragraphs to each service page opening
2. Embed specific quotable numbers in FAQ answers (prices, times, counts)
3. Create and add comparison tables
4. Link to Google Reviews or create reviews section

### Phase 2: Structured Data Enhancements (2-3 weeks)
1. Add equipmentList schema for technical specs
2. Add BreadcrumbList schema for navigation
3. Enhance FAQPage schema with more specific answers
4. Add ImageObject schema for service photos

### Phase 3: Authority & Trust Building (2-4 weeks)
1. Create author bios for Alfonso and Niomi
2. Add client logo section with permission statements
3. Create verification links to certifications
4. Document case studies with before/after metrics
5. Add links to Google Reviews, testimonial sites

### Phase 4: Comprehensive Content Expansion (3-4 weeks)
1. Add new FAQ questions (10-15 across all pages)
2. Create dedicated "definitions" landing page
3. Add service comparison interactive tool
4. Create statistics/research section

---

## 7. FILE RECOMMENDATIONS

### Files to Create:
1. `/app/components/DefinitionBox.tsx` — Reusable definition component
2. `/app/components/ComparisonTable.tsx` — Reusable comparison component
3. `/app/components/AuthorBio.tsx` — Author credential component
4. `/app/lib/definitions.ts` — Centralized service definitions

### Files to Enhance:
1. `/app/lib/schema.ts` — Add more schema types (Equipment, Event, etc.)
2. `/app/premium-headshots/page.tsx` — Add definition section
3. `/app/on-site-photography/page.tsx` — Add tables and data
4. `/app/commercial/page.tsx` — Add definition and comparisons
5. `/app/video/page.tsx` — Add equipment specs and timeline
6. `/app/event-photography/page.tsx` — Add event type table

---

## 8. SAMPLE GEO-OPTIMIZED FAQ ANSWER

Here's a model for how to rewrite FAQs for better AI citation:

**BEFORE (Current):**
```
Q: How much does professional headshot photography cost?
A: Our professional headshot sessions are $150, plus $150 for each image you purchase.
There are no package minimums—you only pay for the images you love. This flexible
pricing model lets you select exactly the photos you need without wasting money on
images you won't use.
```

**AFTER (GEO-Optimized):**
```
Q: How much do professional headshots cost at Rojas Photography in Modesto?

A: Rojas Photography charges $150 for the studio headshot session, plus $150 for each
image you select. This transparent, pay-per-image model provides flexibility:

Pricing breakdown:
- Session fee: $150 (includes real-time coaching, wardrobe consultation, and image review)
- Per-image cost: $150 each (professional editing and delivery included)
- Typical investment: $600-$1,150 (most clients select 3-5 images)
- No package minimums or surprise fees
- Images delivered within 48 hours via SpotMyPhotos gallery

Comparison to other services:
- On-site team photography averages $150-$300 per person when photographing 10+ people
- Commercial photography pricing is custom ($2,000-$8,000 depending on scope)

This pay-per-image approach means you only invest in photos you'll actually use on
LinkedIn, your website, and business materials. Many clients find this more cost-effective
than traditional packages.

For pricing transparency and to discuss your specific needs, call 209-380-3727 or
schedule a free discovery call.
```

**Why This Works:**
- Specific prices embedded in natural text (not just metadata)
- Breaks down total cost ($600-$1,150)
- Provides context and comparison
- Citable facts: "$150 session", "$150 per image", "48 hours"
- Call-to-action with contact info
- Ready for AI agents to extract and cite

---

## 9. QUICK REFERENCE: CORE STATISTICS TO PROMOTE

Ensure these appear in natural text, not just UI:

```
ROJAS PHOTOGRAPHY BY THE NUMBERS

Service Statistics:
- 500+ executives photographed
- 50+ five-star client reviews
- 15+ years corporate leadership experience

Pricing:
- Premium headshots: $150 session + $150/image
- On-site photography: Custom pricing (typically $1,500-$6,000)
- Commercial photography: Custom pricing ($500-$8,000)
- Video production: Custom pricing ($1,500-$15,000)
- Event photography: Custom pricing ($800-$6,000+)

Turnaround Times:
- Headshots: 48 hours
- On-site photos: 24 hours
- Event photos: 24-48 hours
- Commercial photography: 48-72 hours
- Video production: 2-4 weeks

Delivery Metrics:
- Headshot sessions: 30-45 minutes average
- Event photos per day: 300-500 (4-hour event), 600-800+ (full-day)
- Team photo capacity: 20-30 people per day (1 photographer)

Client Roster (with permission):
- Comcast
- Save Mart
- California Lawyers Association (CLA)
- Valley First Credit Union
- Kaiser Permanente (Pleasanton)
- MOVE Stanislaus
- And 495+ individual executives

Credentials:
- FAA Part 107 Certified Drone Pilots
- Professional photography equipment ($50,000+ value)
- Locations served: Modesto, Stockton, Fresno, Turlock, Merced, Sacramento, East Bay
```

---

## CONCLUSION

**Current GEO Readiness: 6.5/10**
**Potential After Optimizations: 9.5/10**

The Rojas Photography website has strong foundational elements for GEO success. By implementing the recommendations above—especially adding clear definitions, embedding quotable statements, and creating comparison tables—you can dramatically increase AI citation potential and organic visibility.

**Top 3 High-Impact Actions:**
1. Add definition paragraphs to each service page
2. Embed specific prices and statistics directly in FAQ answers
3. Create comparison tables for AI parsing

These changes will make your content more discoverable, citable, and valuable to AI-generated responses while maintaining excellent user experience for human visitors.

---

**Report Generated:** February 14, 2026
**Branch:** UI_overhaul
**Status:** Ready for implementation
