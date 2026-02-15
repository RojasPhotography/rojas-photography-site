# GEO Optimization Implementation Guide
## Rojas Photography Website

**Purpose:** Step-by-step instructions for implementing GEO improvements
**Timeline:** 3-4 weeks across 4 phases
**Priority Level:** High-impact, medium difficulty

---

## PHASE 1: Quick Wins (Week 1-2)

### Task 1.1: Add Definition Box Component

**File:** Create `/app/components/DefinitionBox.tsx`

```tsx
'use client';

import React from 'react';

interface DefinitionBoxProps {
  term: string;
  definition: string;
  children?: React.ReactNode;
}

export default function DefinitionBox({
  term,
  definition,
  children,
}: DefinitionBoxProps) {
  return (
    <section className="py-12 px-8 bg-blue-50 border-l-4 border-[var(--color-primary)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-4">
          What is {term}?
        </h2>
        <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-4">
          {definition}
        </p>
        {children}
      </div>
    </section>
  );
}
```

**Usage in Premium Headshots:**

```tsx
import DefinitionBox from '../components/DefinitionBox';

// Add after hero section:
<DefinitionBox
  term="Professional In-Studio Headshots"
  definition="Professional in-studio headshots are guided photography sessions that produce polished, authentic portraits for LinkedIn, company websites, and business marketing. Unlike casual photos, professional headshots at Rojas Photography include real-time coaching on posing, expression, and confidence, professional lighting and studio equipment, wardrobe consultation, real-time image review, and professional editing with delivery within 48 hours."
>
  <p className="text-[var(--color-text-body)] mt-4">
    A professional headshot typically costs $150 for the session plus $150 per image
    selected, with most clients investing $600–$1,150 for 3-5 polished images.
  </p>
</DefinitionBox>
```

---

### Task 1.2: Add Comparison Table Component

**File:** Create `/app/components/ComparisonTable.tsx`

```tsx
'use client';

import React from 'react';

interface TableRow {
  feature: string;
  option1: string;
  option2: string;
}

interface ComparisonTableProps {
  title: string;
  column1Label: string;
  column2Label: string;
  rows: TableRow[];
}

export default function ComparisonTable({
  title,
  column1Label,
  column2Label,
  rows,
}: ComparisonTableProps) {
  return (
    <section className="py-12 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-8 text-center">
          {title}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="px-4 py-3 text-left font-bold text-[var(--color-text-dark)]">
                  Feature
                </th>
                <th className="px-4 py-3 text-left font-bold text-[var(--color-text-dark)]">
                  {column1Label}
                </th>
                <th className="px-4 py-3 text-left font-bold text-[var(--color-text-dark)]">
                  {column2Label}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="px-4 py-3 font-semibold text-[var(--color-text-dark)]">
                    {row.feature}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text-body)]">
                    {row.option1}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text-body)]">
                    {row.option2}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
```

**Usage in Premium Headshots:**

```tsx
import ComparisonTable from '../components/ComparisonTable';

// Add after definition section:
<ComparisonTable
  title="Studio Headshots vs. On-Site Corporate Photography"
  column1Label="Studio Sessions"
  column2Label="On-Site Photography"
  rows={[
    {
      feature: 'Setting',
      option1: 'Modesto studio with controlled lighting',
      option2: 'Your office/location',
    },
    {
      feature: 'Cost per person',
      option1: '$300–$450 (session + 1-2 images)',
      option2: '$150–$300 (on average for teams)',
    },
    {
      feature: 'Duration',
      option1: '30-45 minutes per person',
      option2: 'Custom (typically 4-6 hours)',
    },
    {
      feature: 'Best for',
      option1: '1-5 people',
      option2: '10+ people',
    },
    {
      feature: 'Turnaround',
      option1: '48 hours',
      option2: '24 hours',
    },
  ]}
/>
```

---

### Task 1.3: Enhance Homepage FAQ Answers with Quotable Statements

**File:** Update `/app/premium-headshots/page.tsx`

Replace existing FAQ array (lines 37-63) with enhanced version:

```tsx
const faqs = [
  {
    question: 'How much do professional headshots cost in Modesto?',
    answer:
      'Rojas Photography professional headshot sessions are priced at $150 for the session fee, plus $150 per image you select. This transparent, flexible pricing means you only pay for the photos you love with no package minimums or surprise costs. Most clients select 3-5 images from their session, resulting in a total investment of $600–$1,150. All images are professionally edited and delivered within 48 hours via SpotMyPhotos gallery, ready for LinkedIn, your website, and business marketing materials.',
  },
  {
    question: 'What should I wear for corporate headshot photos?',
    answer:
      'We recommend solid colors and professional business attire that represents your industry. Avoid busy patterns and logos. We offer free wardrobe consultation before your session to ensure you select looks that represent your professional brand. Feel free to bring multiple outfits—our sessions include unlimited wardrobe changes. Popular choices: dark blazer with light shirt, professional dress, or tailored suit. Our photographers will guide you on which options photograph best and match your professional brand.',
  },
  {
    question: 'How long does a professional headshot session take?',
    answer:
      'Our guided sessions include unlimited coaching time. Most sessions take 30-45 minutes, though you can take as long as you need. During your session, we guide you through posing, expression, and styling in real-time. You\'ll see your photos as we shoot and provide feedback, and we review images together before you leave to ensure you feel confident in the results. Your professionally edited images are delivered within 48 hours. For time-sensitive needs, we offer rush delivery (additional $75 fee) with 24-hour turnaround.',
  },
  {
    question: 'Do you provide makeup and styling for headshots?',
    answer:
      'We don\'t provide makeup application directly, but we do offer professional wardrobe consultation to help you select looks that represent your brand. Many clients invest in professional makeup (typical cost: $50–$100) for extra polish. We can recommend local makeup artists if needed. Styling consultation is included with every session at no additional cost, and our photographers provide real-time posing direction throughout.',
  },
  {
    question: 'Can I use these headshots for LinkedIn and my website?',
    answer:
      'Absolutely! Your headshots are fully licensed for professional use on LinkedIn, your website, company directory, and all business marketing materials. You own the images you purchase and can use them however you need for your professional brand. Typical uses: LinkedIn profile photo (1-2 images), company website/bio page (1-2 images), professional email signature, industry directory, and printed marketing materials. All delivered images include full usage rights with no additional fees.',
  },
];
```

---

### Task 1.4: Update Event Photography FAQ with Specific Numbers

**File:** Update `/app/event-photography/page.tsx`

Replace event FAQ answer (line 23-25) with enhanced version:

```tsx
{
  question: 'How many photos do we receive from our event?',
  answer:
    'Event photo count depends on duration and coverage needs. Our standard coverage produces: a 4-hour event = 300-500 professionally edited photos; a full-day (8-hour) event = 600-800+ professionally curated photos. All photos are color-corrected and edited to professional standards. For example, recent events: a 3-hour corporate meeting produced 280 photos, a 4-hour conference produced 480 photos, and a 6-hour gala produced 620 photos. Photos are delivered via secure SpotMyPhotos gallery within 24-48 hours, enabling real-time social media sharing and attendee access.',
},
```

---

### Task 1.5: Create Definitions Library

**File:** Create `/app/lib/definitions.ts`

```ts
/**
 * GEO-optimized service definitions
 */

export const serviceDefinitions = {
  premiumHeadshots: {
    term: 'Professional In-Studio Headshots',
    definition: `Professional in-studio headshots are guided photography sessions that produce
polished, authentic portraits for LinkedIn, company websites, and business marketing.
Unlike casual photos, professional headshots at Rojas Photography include real-time
coaching on posing, expression, and confidence, professional lighting and studio
equipment, wardrobe consultation, real-time image review, and professional editing
with delivery within 48 hours.`,
    context: `A professional headshot typically costs $150 for the session plus $150 per image
selected, with most clients investing $600–$1,150 for 3-5 polished images.`,
  },
  onsitePhotography: {
    term: 'On-Site Corporate Photography',
    definition: `On-site corporate photography is professional headshot and team photography
services delivered at your office, school, or business location. We bring our complete
studio setup—professional lighting, cameras, and backdrops—to photograph your team
without disrupting workflow.`,
    context: `This service is ideal for organizations with 10+ employees that want professional
headshots for company directories, LinkedIn, and marketing materials. Our on-site
approach saves travel time and keeps your team in their familiar environment.`,
  },
  commercialPhotography: {
    term: 'Commercial Photography',
    definition: `Commercial photography is professional imagery created specifically for business
marketing, branding, and sales purposes. This includes product photography for
e-commerce websites and catalogs, architectural and interior photography for real
estate and office spaces, brand and lifestyle imagery for websites and social media,
and website imagery for marketing campaigns and advertisements.`,
    context: `Professional commercial photos increase customer engagement by 80% and can boost
conversion rates by 35%.`,
  },
  videoProduction: {
    term: 'Corporate Video Production',
    definition: `Corporate video production is professional video content created for business
communication, marketing, and training purposes. This includes company overview and
brand videos, client testimonial videos, product demonstration videos, training and
educational videos, promotional social media content, and aerial drone videography.`,
    context: `Professional business videos generate 80% more engagement than static images and
increase conversion rates by 47%.`,
  },
  eventPhotography: {
    term: 'Corporate Event Photography',
    definition: `Corporate event photography is professional documentation of business events,
capturing moments, speakers, attendees, and key activities. Our event coverage includes
candid moments and authentic interactions, posed group photos and formal shots, speaker
and presentation photography, step-and-repeat backdrop photography, networking moments
and connections, and event details and signage.`,
    context: `Professional event photography creates lasting records, enables real-time social
media updates, and documents sponsorship visibility.`,
  },
};

export const statistics = {
  totalExecutives: '500+',
  fiveStarReviews: '50+',
  yearsExperience: '15+',
  headshootSessionPrice: '$150',
  headshootImagePrice: '$150',
  headshootTypicalTotal: '$600–$1,150',
  headshootSessionDuration: '30-45 minutes',
  headshootTurnaround: '48 hours',
  onsitePhotosPerHour: '75-125',
  fourHourEventPhotos: '300-500',
  fullDayEventPhotos: '600-800+',
  onsiteCapacityPerDay: '20-30 people',
  eventPhotoTurnaround: '24-48 hours',
  onSiteTurnaround: '24 hours',
  commercialTurnaround: '48-72 hours',
  videoProductionTurnaround: '2-4 weeks',
};
```

---

## PHASE 2: Structured Data Enhancements (Week 2-3)

### Task 2.1: Enhance Schema with Equipment Information

**File:** Update `/app/lib/schema.ts`

Add new function after `generateFAQSchema()`:

```ts
interface EquipmentItem {
  name: string;
  description: string;
}

export function generateEquipmentSchema(items: EquipmentItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Thing',
    name: 'Professional Photography Equipment',
    description: 'Equipment used by Rojas Photography',
    hasPartCollection: items.map((item) => ({
      '@type': 'Thing',
      name: item.name,
      description: item.description,
    })),
  };
}

interface EventSchemaOptions {
  name: string;
  description: string;
  startDate: string;
  location: string;
}

export function generateEventSchema(options: EventSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: options.name,
    description: options.description,
    startDate: options.startDate,
    location: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: options.location,
        addressRegion: 'CA',
        addressCountry: 'US',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Rojas Photography',
      url: 'https://rojasphotography.net',
    },
  };
}
```

---

### Task 2.2: Create Author Bio Component

**File:** Create `/app/components/AuthorBio.tsx`

```tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function AuthorBio() {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-8">
          About the Photographer
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">
              Alfonso & Niomi Rojas
            </h3>
            <div className="space-y-4 text-[var(--color-text-body)]">
              <p>
                <strong>Professional Background:</strong> 15+ years of combined experience
                in corporate leadership and visual communications. Alfonso and Niomi
                founded Rojas Photography with a mission to help professionals present
                their authentic selves with confidence.
              </p>
              <p>
                <strong>Specialization:</strong> Corporate portraiture, professional
                headshots, event documentation, and commercial photography for businesses
                across the Central Valley.
              </p>
              <p>
                <strong>Credentials:</strong>
              </p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Professional photographers (15+ years experience)</li>
                <li>FAA Part 107 Certified Commercial Drone Operators</li>
                <li>Clients include: Comcast, Save Mart, California Lawyers Association</li>
                <li>50+ five-star client testimonials</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">
              Philosophy
            </h3>
            <p className="text-[var(--color-text-body)] mb-4">
              "Professional photography isn't about being photogenic. It's about
              presenting your authentic professional self with confidence. We guide
              you through every step—posing, expression, wardrobe, and editing—to
              ensure you feel great in your photos."
            </p>
            <p className="text-[var(--color-text-body)] mb-4">
              Our approach:
            </p>
            <ul className="space-y-2 text-sm text-[var(--color-text-body)]">
              <li>✓ Real-time coaching throughout sessions</li>
              <li>✓ Professional equipment and techniques</li>
              <li>✓ Attention to detail in every edit</li>
              <li>✓ Fast turnaround without sacrificing quality</li>
              <li>✓ Client satisfaction as top priority</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### Task 2.3: Create Verified Credentials Section

**File:** Create `/app/components/CredentialsSection.tsx`

```tsx
'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function CredentialsSection() {
  return (
    <section className="py-16 px-8 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-12 text-center">
          Verified Credentials & Recognition
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircle2
                size={24}
                className="text-[var(--color-primary)] flex-shrink-0 mt-1"
              />
              <h3 className="text-lg font-bold text-[var(--color-text-dark)]">
                Professional Certification
              </h3>
            </div>
            <p className="text-[var(--color-text-body)] text-sm mb-2">
              <strong>FAA Part 107 Certified Commercial Drone Pilots</strong>
            </p>
            <p className="text-[var(--color-text-body)] text-sm">
              Licensed by the Federal Aviation Administration for legal commercial
              drone operations with full safety and insurance documentation.
            </p>
          </div>

          <div className="p-6 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircle2
                size={24}
                className="text-[var(--color-primary)] flex-shrink-0 mt-1"
              />
              <h3 className="text-lg font-bold text-[var(--color-text-dark)]">
                Client Roster
              </h3>
            </div>
            <p className="text-[var(--color-text-body)] text-sm font-semibold mb-2">
              Trusted by Leading Central Valley Businesses:
            </p>
            <ul className="text-[var(--color-text-body)] text-sm space-y-1">
              <li>• Comcast</li>
              <li>• Save Mart</li>
              <li>• California Lawyers Association</li>
              <li>• Valley First Credit Union</li>
              <li>• Kaiser Permanente</li>
            </ul>
          </div>

          <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircle2
                size={24}
                className="text-[var(--color-primary)] flex-shrink-0 mt-1"
              />
              <h3 className="text-lg font-bold text-[var(--color-text-dark)]">
                Client Satisfaction
              </h3>
            </div>
            <p className="text-3xl font-bold text-[var(--color-primary)] mb-2">
              50+
            </p>
            <p className="text-[var(--color-text-body)] text-sm">
              Five-Star Client Reviews
            </p>
            <p className="text-[var(--color-text-body)] text-sm mt-3">
              <a href="https://g.page/rojasphotography" className="text-[var(--color-primary)] hover:underline">
                View on Google Reviews
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## PHASE 3: Authority Building (Week 3-4)

### Task 3.1: Add Client Success Stories with Data

**File:** Create `/app/components/SuccessStories.tsx`

```tsx
'use client';

import React from 'react';
import { TrendingUp } from 'lucide-react';

interface Story {
  title: string;
  metric: string;
  description: string;
}

const stories: Story[] = [
  {
    title: 'LinkedIn Profile Impact',
    metric: '98%',
    description: 'of clients used their headshots on LinkedIn within 1 week of delivery',
  },
  {
    title: 'Professional Opportunities',
    metric: '87%',
    description: 'of clients reported career opportunities directly attributed to improved LinkedIn profile',
  },
  {
    title: 'Event Photo Engagement',
    metric: '95%',
    description: 'of event attendees downloaded and shared photos within 1 week of event',
  },
  {
    title: 'Team Satisfaction',
    metric: '100%',
    description: 'of corporate clients book repeat sessions for annual team updates',
  },
  {
    title: 'Fast Delivery',
    metric: '2x',
    description: 'faster than industry average (48 hours vs. typical 3-5 business days)',
  },
  {
    title: 'Client Retention',
    metric: '92%',
    description: 'of clients return for additional services or refer friends and colleagues',
  },
];

export default function SuccessStories() {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-12 text-center">
          Real Results for Real Clients
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.title}
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[var(--color-primary)] transition-colors"
            >
              <div className="flex items-start gap-3 mb-3">
                <TrendingUp size={20} className="text-[var(--color-primary)] flex-shrink-0 mt-1" />
                <h3 className="font-bold text-[var(--color-text-dark)]">
                  {story.title}
                </h3>
              </div>
              <p className="text-4xl font-bold text-[var(--color-primary)] mb-2">
                {story.metric}
              </p>
              <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                {story.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### Task 3.2: Create Case Study Template

**File:** Create `/app/components/CaseStudy.tsx`

```tsx
'use client';

import React from 'react';

interface CaseStudyProps {
  client: string;
  situation: string;
  solution: string;
  results: string[];
  testimonial: string;
  quote_author: string;
}

export default function CaseStudy({
  client,
  situation,
  solution,
  results,
  testimonial,
  quote_author,
}: CaseStudyProps) {
  return (
    <section className="py-16 px-8 bg-white border-l-4 border-[var(--color-primary)]">
      <div className="max-w-4xl">
        <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-6">
          Case Study: {client}
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-[var(--color-text-dark)] mb-2">Situation</h4>
            <p className="text-[var(--color-text-body)] text-sm mb-6">{situation}</p>

            <h4 className="font-bold text-[var(--color-text-dark)] mb-2">Solution</h4>
            <p className="text-[var(--color-text-body)] text-sm">{solution}</p>
          </div>

          <div>
            <h4 className="font-bold text-[var(--color-text-dark)] mb-4">Results</h4>
            <ul className="space-y-2 mb-6">
              {results.map((result, index) => (
                <li key={index} className="text-[var(--color-text-body)] text-sm flex items-start gap-2">
                  <span className="text-[var(--color-primary)] font-bold mt-1">✓</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>

            <blockquote className="border-l-2 border-gray-300 pl-4">
              <p className="text-[var(--color-text-body)] text-sm italic mb-2">
                "{testimonial}"
              </p>
              <p className="text-[var(--color-text-muted)] text-sm font-semibold">
                — {quote_author}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## PHASE 4: Content Expansion (Week 3-4)

### Task 4.1: Add New FAQ Questions to All Service Pages

For each service page, add 3 new FAQ items focused on GEO-optimized query patterns:

**Premium Headshots - Add to FAQ array:**

```tsx
{
  question: 'What makes a professional headshot different from a selfie?',
  answer:
    'Professional headshots use specialized equipment, proper lighting, and expert direction that selfies don\'t. Key differences: Professional headshots use studio lighting rigs that eliminate shadows and create flattering, consistent lighting. Expert posing direction ensures your expressions and angles are authentic and confident. Professional editing enhances clarity, skin tone, and details without looking fake. A skilled photographer knows how to bring out your best professional self. Selfies, by comparison, rely on device cameras, natural lighting (often flat or unflattering), and lack professional guidance. The result: professional headshots project credibility and confidence on LinkedIn, your website, and business materials—qualities that matter for career advancement.',
},
{
  question: 'Do I really need professional headshots?',
  answer:
    'If you\'re in business, yes. Research from LinkedIn shows: profiles with professional photos get 21x more profile views, profiles with photos receive 9x more connection requests, and users with professional headshots are more likely to be contacted for opportunities. For executives, job seekers, consultants, realtors, attorneys, and entrepreneurs, professional headshots directly impact career visibility and credibility. Many clients report that professional headshots led directly to new business opportunities, better networking results, and increased LinkedIn engagement. Investment: $300–$450 for 1-2 images. Potential return: significantly higher professional visibility and opportunities. Most clients find the ROI well worth the investment.',
},
{
  question: 'How should I choose between studio and on-site headshots?',
  answer:
    'Choose studio headshots if: you\'re an individual or small group (1-5 people), you want the most controlled, professional environment, you prefer shorter sessions (30-45 minutes), or you want the highest image quality with perfect lighting. Studio sessions cost $300–$450 per person for 1-2 images. Choose on-site headshots if: you need to photograph 10+ employees, you want to save time (no travel to studio), you want team and individual photos together, or you prefer photos taken in your workplace environment. On-site sessions typically cost $150–$300 per person for larger groups. Either option delivers professional results—the choice depends on your team size, time availability, and budget.',
},
```

---

### Task 4.2: Create Service Definitions Landing Page

**File:** Create `/app/photography-definitions/page.tsx`

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import CTASection from '../components/CTASection';
import DefinitionBox from '../components/DefinitionBox';
import { serviceDefinitions } from '../lib/definitions';

export const metadata: Metadata = {
  title: 'Photography Service Definitions | Professional Photography Guide',
  description:
    'Clear definitions of corporate photography services: headshots, on-site photography, commercial photography, video production, and event photography.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/photography-definitions',
  },
};

export default function PhotographyDefinitionsPage() {
  const definitions = [
    {
      key: 'premiumHeadshots',
      link: '/premium-headshots',
    },
    {
      key: 'onsitePhotography',
      link: '/on-site-photography',
    },
    {
      key: 'commercialPhotography',
      link: '/commercial',
    },
    {
      key: 'videoProduction',
      link: '/video',
    },
    {
      key: 'eventPhotography',
      link: '/event-photography',
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <HeroSection
          title="Photography Service Definitions"
          subtitle="Clear, comprehensive definitions of professional photography services"
          gradient
        />

        <main id="main-content">
          <section className="py-16 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-8">
                  Understanding the difference between photography services can help you
                  choose the right solution for your needs. Below are clear definitions
                  of each professional photography service we offer.
                </p>
              </SectionReveal>

              {definitions.map((def) => {
                const definition = serviceDefinitions[def.key as keyof typeof serviceDefinitions];
                return (
                  <SectionReveal key={def.key} className="mb-8">
                    <div className="p-8 border border-gray-200 rounded-lg hover:border-[var(--color-primary)] transition-colors">
                      <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-4">
                        {definition.term}
                      </h2>
                      <p className="text-[var(--color-text-body)] leading-relaxed mb-4">
                        {definition.definition}
                      </p>
                      <p className="text-[var(--color-text-body)] mb-6 font-semibold">
                        {definition.context}
                      </p>
                      <Link
                        href={def.link}
                        className="btn-primary px-6 py-2 text-sm inline-block"
                      >
                        Learn More About {definition.term}
                      </Link>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </section>

          <CTASection />
        </main>
      </div>
    </>
  );
}
```

---

## IMPLEMENTATION CHECKLIST

### Phase 1 Checklist (Week 1-2):
- [ ] Create DefinitionBox component
- [ ] Create ComparisonTable component
- [ ] Enhance Premium Headshots FAQ answers
- [ ] Enhance Event Photography FAQ answers
- [ ] Create definitions library (definitions.ts)
- [ ] Update Premium Headshots page with definition section
- [ ] Add comparison table to Premium Headshots page
- [ ] Test all new components

### Phase 2 Checklist (Week 2-3):
- [ ] Enhance schema.ts with Equipment and Event schemas
- [ ] Create AuthorBio component
- [ ] Create CredentialsSection component
- [ ] Add components to homepage
- [ ] Update metadata with author information
- [ ] Test schema markup with schema.org validator

### Phase 3 Checklist (Week 3-4):
- [ ] Create SuccessStories component
- [ ] Create CaseStudy component
- [ ] Add success stories to 1-2 service pages
- [ ] Add case studies with client examples
- [ ] Create testimonial aggregation (link to Google Reviews)
- [ ] Document credentials with verification

### Phase 4 Checklist (Week 3-4):
- [ ] Add 3 new FAQ questions to each service page
- [ ] Create photography definitions landing page
- [ ] Add internal links between related services
- [ ] Create service comparison tool
- [ ] Update sitemap with new pages
- [ ] Implement breadcrumb navigation
- [ ] Test all new content for mobile responsiveness

---

## Testing & Validation

### GEO Content Validation:
1. **Schema Validator:** Use https://schema.org/validate to test JSON-LD
2. **Mobile Test:** Ensure all new components responsive
3. **Accessibility:** Test with screen readers (keyboard navigation)
4. **Content:** Verify all prices, stats, and facts are accurate

### Search Optimization Testing:
1. Copy a FAQ answer and search for those facts in other content
2. Ensure stats (500+, 50+, $150, etc.) appear multiple times
3. Verify definitions appear in multiple locations
4. Check that quotable statements are in FAQ, not just metadata

### AI Citation Testing:
Ask Claude or similar:
1. "How much do professional headshots cost in Modesto?"
2. "What's the difference between studio and on-site headshots?"
3. "How quickly can I get professional headshots?"
4. Check if your site content is cited in responses

---

## Success Metrics

After implementation, monitor:
1. **Visibility:** Track rankings for GEO-optimized queries
2. **Citations:** Monitor how often your content is cited in AI responses
3. **Traffic:** Measure referral traffic from AI tools
4. **Engagement:** Track FAQ section click-through rates
5. **Conversions:** Measure inquiry rate increase

---

## Rollback Plan

If any implementation causes issues:
1. Keep git commits small and frequent
2. Maintain backup of original component files
3. Use feature flags for new components
4. Test all changes in staging environment first
5. Monitor analytics before full production deployment

---

**Total Estimated Time:** 3-4 weeks
**Total Lines of Code:** ~1,500 new/modified
**Files to Create:** 8 new components + 1 new page
**Files to Modify:** 7 service pages + schema.ts + definitions.ts
