# GEO Implementation Testing Guide

## Quick Start Testing (5 minutes)

### 1. **Start Local Development Server**
```bash
npm run dev
```
Navigate to: `http://localhost:3000`

---

## Visual & Functional Testing

### ✅ Test 1: Definition Boxes Render Correctly

**What to check:**
- Each service page shows "What is [Service]?" section
- Blue background with left border visible
- Definition text is readable
- Supporting context paragraph displays

**Pages to test:**
- `http://localhost:3000/premium-headshots` - Definition Box ✅
- `http://localhost:3000/on-site-photography` - Definition Box ✅
- `http://localhost:3000/commercial` - Definition Box ✅
- `http://localhost:3000/video` - Definition Box ✅
- `http://localhost:3000/event-photography` - Definition Box ✅

**Expected content examples:**
- Premium Headshots: "Professional in-studio headshots are guided photography sessions..."
- On-Site: "On-site corporate photography is professional headshot and team photography..."
- Commercial: "Commercial photography is professional imagery created specifically..."
- Video: "Corporate video production is professional video content created..."
- Event: "Corporate event photography is professional documentation..."

---

### ✅ Test 2: Comparison Tables Display Correctly

**What to check:**
- Table renders with 3 columns (Feature, Option 1, Option 2)
- Headers are bold and visible
- Row colors alternate (white/gray)
- All data is readable
- Mobile: table scrolls horizontally

**Pages to test:**
- `http://localhost:3000/premium-headshots` - Studio vs. On-Site comparison
- `http://localhost:3000/on-site-photography` - Studio vs. On-Site comparison

**Expected table data:**
| Feature | Studio Sessions | On-Site Photography |
|---------|---|---|
| Setting | Modesto studio with controlled lighting | Your office/location |
| Cost per person | $300–$450 | $150–$300 |
| Duration | 30-45 minutes per person | Custom (typically 4-6 hours) |
| Best for | 1-5 people | 10+ people |
| Turnaround | 48 hours | 24 hours |

---

### ✅ Test 3: Enhanced FAQ Answers with Quotable Statements

**What to check:**
- FAQs expand/collapse smoothly
- New detailed answers display
- Specific numbers are visible ($150, 48 hours, etc.)
- Real examples mentioned (e.g., "4-hour event = 300-500 photos")

**Test FAQ on each page:**
```
Premium Headshots: "How much do professional headshots cost in Modesto?"
✅ Should show: "$150 session + $150 per image" + "Most clients invest $600–$1,150"

On-Site Photography: "How many people can you photograph in one day?"
✅ Should show: "20-30+ people per day" + "For 50+ people, recommend multiple days"

Commercial: "What is commercial photography used for?"
✅ Should show: "Increase customer engagement by 80%" + "Boost conversion rates by 35%"

Video: "Are you a licensed drone pilot?"
✅ Should show: "FAA Part 107 certified" + "Federal license for commercial operations"

Event: "How many photos do we receive from our event?"
✅ Should show: "4-hour event = 300-500 photos" + "Real example: 3-hour meeting = 280 photos"
```

---

### ✅ Test 4: Mobile Responsiveness

**Desktop Testing:**
```bash
# In Chrome DevTools:
1. Open DevTools (F12)
2. Click Device Toolbar icon (Ctrl+Shift+M)
3. Select iPhone 12 (390x844)
4. Test:
   - Definition boxes responsive ✓
   - Tables scroll horizontally ✓
   - FAQs expandable on mobile ✓
   - Text readable without zooming ✓
```

**Physical Device Testing:**
- Open on iPhone/Android
- Test all 5 service pages
- Click definition boxes
- Swipe table horizontally
- Expand/collapse FAQs

---

## Schema/Structured Data Testing

### ✅ Test 5: Validate Schema Markup

**Using Google Rich Results Test:**
1. Go to: https://search.google.com/test/rich-results
2. Enter URL: `https://localhost:3000/premium-headshots`
3. Check for:
   - ✅ Service schema detected
   - ✅ FAQPage schema detected
   - ✅ No errors or warnings

**Test all pages:**
```
Premium Headshots: Service + FAQPage schemas
On-Site: Service + FAQPage schemas
Commercial: Service + FAQPage schemas
Video: Service + FAQPage schemas
Event: Service + FAQPage schemas
Homepage: LocalBusiness + Organization schemas
```

**Expected output:**
- "Service" schema with:
  - name, description, provider, areaServed
- "FAQPage" schema with:
  - Multiple Question/Answer pairs
  - Each question and answer text visible

---

### ✅ Test 6: Check Page Metadata

**In browser, right-click → View Page Source:**

Look for meta tags:

```html
<!-- Premium Headshots Example -->
<title>Professional Headshots Modesto CA | $150 Session | Rojas Photography</title>
<meta name="description" content="Premium corporate headshots in Modesto...">
<link rel="canonical" href="https://rojasphotography.net/premium-headshots">
```

**Checklist:**
- [x] Title tag under 60 characters
- [x] Description under 155 characters
- [x] Canonical URL present
- [x] Location keywords in title/description
- [x] CTA in description (if applicable)

---

## AI Readiness Testing

### ✅ Test 7: AI Quotability Check

**Test if AI systems can extract content:**

**Option A: Manual Check**
1. Open service page (e.g., premium-headshots)
2. Scroll to FAQ section
3. Look for standalone quotable statements
4. Should see specific numbers like:
   - "$150 session + $150 per image" ✓
   - "48 hours delivery" ✓
   - "3-5 images typical" ✓
   - "500+ executives photographed" ✓

**Option B: Ask Claude/ChatGPT**

Ask ChatGPT:
```
"How much do professional headshots cost in Modesto?"
```

Expected response should include:
- Site citation (if indexed)
- Specific pricing: "$150 session + $150/image"
- Example: "$600–$1,150 for 3-5 images"

Ask Claude:
```
"What is professional corporate photography?"
```

Expected response should include:
- Definition of service
- Key characteristics
- Use cases

---

### ✅ Test 8: Definition Extraction

**Check if definitions are AI-extractable:**

1. Go to `/premium-headshots`
2. Look at Definition Box
3. Should clearly state what the service IS

**Test all definitions:**
```
Premium Headshots: "Professional in-studio headshots are guided photography sessions..."
✅ Clear, standalone definition

On-Site: "On-site corporate photography is professional headshot and team photography..."
✅ Clear, standalone definition

Commercial: "Commercial photography is professional imagery created specifically..."
✅ Clear, standalone definition

Video: "Corporate video production is professional video content created..."
✅ Clear, standalone definition

Event: "Corporate event photography is professional documentation..."
✅ Clear, standalone definition
```

---

## Performance Testing

### ✅ Test 9: Page Load Speed

**Using PageSpeed Insights:**
1. Go to: https://pagespeed.web.dev/
2. Enter: `http://localhost:3000/premium-headshots`
3. Check metrics:
   - First Contentful Paint (should be < 1.8s)
   - Largest Contentful Paint (should be < 2.5s)
   - No errors from new components

**Expected results:**
- DefinitionBox: Fast (minimal CSS)
- ComparisonTable: Fast (simple HTML table)
- definitions.ts: No impact (static data)

---

### ✅ Test 10: Build Performance

```bash
# Check build output
npm run build

# Expected:
✓ Compiled successfully in ~900ms
✓ All 14 pages pre-rendered
✓ No errors or warnings
```

---

## Content Accuracy Testing

### ✅ Test 11: Verify Quotable Statements

**Checklist for each service page:**

**Premium Headshots:**
- [ ] Pricing: $150 session + $150/image
- [ ] Total investment: $600–$1,150
- [ ] Turnaround: 48 hours
- [ ] Capacity: 1-5 people per session
- [ ] Includes: wardrobe consultation, real-time coaching

**On-Site Photography:**
- [ ] Capacity: 20-30+ per day
- [ ] Cost per person: $150–$300
- [ ] Turnaround: 24 hours
- [ ] Equipment: professional lighting, backdrops
- [ ] Setup time: 4-6 hours typical

**Commercial:**
- [ ] Engagement lift: 80%
- [ ] Conversion lift: 35%
- [ ] Simple shoot: $500-$1,500
- [ ] Full-day: $2,000-$5,000
- [ ] Turnaround: 48-72 hours

**Video:**
- [ ] Certification: FAA Part 107
- [ ] Engagement: 80% more than static
- [ ] Conversion: +47%
- [ ] 30-second promo: $1,500-$2,500
- [ ] Corporate video: $3,500-$7,500

**Event:**
- [ ] 4-hour event: 300-500 photos
- [ ] Full-day: 600-800+ photos
- [ ] Pricing: $1,500-$6,000+
- [ ] Turnaround: 24-48 hours
- [ ] Step-and-repeat: $300-$500

---

## Browser Compatibility Testing

### ✅ Test 12: Cross-Browser Testing

Test on:
- [x] Chrome (Latest)
- [x] Safari (Latest)
- [x] Firefox (Latest)
- [x] Edge (Latest)
- [x] Mobile Safari (iPhone)
- [x] Chrome Mobile (Android)

**Checklist:**
- [ ] Definition boxes render
- [ ] Comparison tables display correctly
- [ ] FAQs expand/collapse
- [ ] Styles apply properly
- [ ] No console errors

---

## Accessibility Testing

### ✅ Test 13: Accessibility Check

**Using WAVE or Chrome DevTools:**

1. Open page in Chrome
2. DevTools → Lighthouse → Accessibility
3. Check for:
   - [ ] No color contrast issues
   - [ ] Proper heading hierarchy
   - [ ] ARIA labels where needed
   - [ ] Keyboard navigation works
   - [ ] Score > 90

**Manual tests:**
- [ ] Tab through FAQ buttons - all focusable
- [ ] Definition boxes have proper heading hierarchy
- [ ] Table headers are properly marked

---

## Quick Validation Checklist

Print this and check off as you test:

### Visual & Functional
- [ ] Definition boxes on all 5 service pages
- [ ] Comparison tables on Premium Headshots & On-Site
- [ ] Enhanced FAQ answers with specific numbers
- [ ] All text readable and properly formatted
- [ ] Mobile layout responsive

### Schema & SEO
- [ ] Google Rich Results shows no errors
- [ ] All pages have unique title tags
- [ ] All pages have meta descriptions
- [ ] Canonical URLs present
- [ ] Schema markup validates

### AI Readiness
- [ ] Definitions are clear and standalone
- [ ] Quotable statements have specific numbers
- [ ] FAQ answers are information-rich
- [ ] Service descriptions are in first 150 words

### Performance
- [ ] Build succeeds without errors
- [ ] Pages load in < 2 seconds
- [ ] No JavaScript errors in console
- [ ] Mobile performance acceptable

### Content Accuracy
- [ ] All pricing is correct
- [ ] All turnaround times are accurate
- [ ] All statistics have sources
- [ ] All claims are verifiable

---

## Testing Workflow

**Quick Test (5 min):**
```
1. npm run dev
2. Visit each service page
3. Click Definition Box - renders? ✓
4. Click Comparison Table - displays? ✓
5. Expand FAQ - quotable statements visible? ✓
```

**Full Test (30 min):**
```
1. Run visual tests (Tests 1-4)
2. Validate schema (Tests 5-6)
3. Check mobile (Test 4)
4. Test AI readiness (Tests 7-8)
5. Check performance (Tests 9-10)
```

**Comprehensive Test (1 hour):**
```
1. Run all 13 tests
2. Cross-browser testing
3. Accessibility check
4. Build verification
5. Document any issues
```

---

## Reporting Issues

If you find any issues:

**Create a test report:**
```
Issue: [Description]
Page: [URL]
Browser: [Chrome/Safari/etc]
Device: [Desktop/iPhone/etc]
Steps to reproduce: [Steps]
Expected: [What should happen]
Actual: [What happens]
Screenshot: [If applicable]
```

---

## Next Steps After Testing

**If all tests pass ✅:**
- Proceed to Phase 2 (Additional FAQs, Authority section)
- Monitor Google Search Console for indexing
- Track AI citations weekly
- Monitor traffic changes

**If issues found ❌:**
- Document in test report
- Create issues in task list
- Fix before Phase 2
- Re-run affected tests

---

**Happy Testing! 🧪**
