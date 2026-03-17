import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import SchemaScript from '../components/SchemaScript';
import { generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'How much does corporate event photography cost in Modesto?',
    answer:
      'Corporate event photography in Modesto typically costs $1,500–$2,500 for a 4-hour event with one photographer, and $2,500–$4,500 for a full-day event (8+ hours). Multi-photographer coverage for large events starts at $3,500. Contact Rojas Photography with your event date, duration, and coverage needs for a personalized quote within 24 hours.',
  },
  {
    question: 'How do event photographers structure their pricing?',
    answer:
      'Most professional event photographers offer three pricing models: hourly rates, half-day rates covering up to 4 hours, and full-day rates covering up to 8 hours. Rojas Photography charges $350/hr with a 2-hour minimum. Full-day rates are almost always better value than paying hourly for a long event.',
  },
  {
    question: 'What is included in corporate event photography?',
    answer:
      'Professional corporate event photography typically includes pre-event consultation and shot list planning, full event coverage by an experienced photographer, professional editing and color correction, and delivery of high-resolution images via a private online gallery within 24–48 hours. Rojas Photography includes all of these with every event booking.',
  },
  {
    question: 'How many photos will we receive from our event?',
    answer:
      'Photo counts depend on event duration and coverage needs. A 4-hour event with one photographer typically produces 300–500 professionally edited photos. A full-day event (8 hours) produces 600–800+ photos. All images are color-corrected and edited to a consistent professional standard.',
  },
  {
    question: 'Do you cover large corporate events with multiple photographers?',
    answer:
      'Yes. For larger events — conferences, galas, multi-room events — we deploy multiple photographers to ensure complete coverage. We coordinate the team to maintain consistent quality across all images. We\'ve covered large-scale events for Comcast, Save Mart, California Lawyers Association, and Valley First Credit Union.',
  },
  {
    question: 'How far in advance should I book a corporate event photographer?',
    answer:
      'For large events, book 4–8 weeks in advance to secure your preferred date. For smaller events, 2–3 weeks is typically sufficient. Popular dates (end of year galas, spring conferences) fill quickly. Contact us as soon as your event date is confirmed to check availability.',
  },
  {
    question: 'What is the difference between a cheap and a professional event photographer?',
    answer:
      'Beyond price, the differences are: reliability (professional photographers carry backup gear and insurance), consistency (every image is color-matched and professionally edited), experience (knowing where to be and when without disrupting the event), and deliverables (a private online gallery with licensed, print-ready images). A corporate event is a one-time moment — there is no reshooting it.',
  },
  {
    question: 'Do you travel outside Modesto for corporate events?',
    answer:
      'Yes. Rojas Photography travels statewide for corporate events. We regularly cover events in Modesto, Stockton, Fresno, Sacramento, the Bay Area, San Francisco, Los Angeles, Orange County, and San Diego. Travel fees apply for events outside the Central Valley. Contact us with your event location and date for a full quote.',
  },
];

export const metadata: Metadata = {
  title: 'Corporate Event Photography Cost | 2026 Pricing Guide | Modesto CA',
  description:
    'How much does corporate event photography cost? Complete 2026 pricing guide for Modesto & Central Valley. Hourly rates, packages, and what\'s included. Get a quote in 24 hrs.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/corporate-event-photography-cost',
  },
  openGraph: {
    title: 'Corporate Event Photography Cost — 2026 Pricing Guide',
    description:
      'Complete pricing guide for corporate event photography in Modesto and Central Valley. Hourly rates, packages, and what\'s included.',
    url: 'https://rojasphotography.net/corporate-event-photography-cost',
    type: 'article',
  },
};

const pricingFactors = [
  { factor: 'Event Duration', detail: 'The single biggest pricing variable. A 2-hour executive portrait session costs far less than an 8-hour conference. Most photographers offer better per-hour rates for longer events.' },
  { factor: 'Number of Photographers', detail: 'A single photographer can cover most events under 100 people. Larger events, multi-room conferences, or events requiring simultaneous coverage in different locations need 2+ photographers.' },
  { factor: 'Photographer Experience', detail: 'Entry-level photographers charge $100–$175/hr. Experienced professionals who work corporate events regularly charge $300–$500/hr. Rojas Photography charges $350/hr — reflecting 15+ years of corporate photography experience across the Central Valley.' },
  { factor: 'Editing & Turnaround', detail: 'Standard delivery is 48–72 hours. Rush delivery (24 hours or same-day) commands a premium of $150–$400. All professional packages include color correction and editing — raw, unedited files are not standard.' },
  { factor: 'Travel Distance', detail: 'Most photographers include travel within a certain radius (typically 20–30 miles). Events beyond that incur mileage fees, typically $0.67–$1.50/mile, plus potential hotel costs for distant events.' },
  { factor: 'Add-On Services', detail: 'Step and repeat backdrop photography, drone coverage, on-site headshot stations, and SpotMyPhotos instant delivery are common add-ons. SpotMyPhotos uses facial recognition so attendees can find and download their photos instantly during the event — included with full-day bookings, available as an add-on for shorter events.' },
  { factor: 'Usage Rights & Licensing', detail: 'Most professional photographers include standard commercial usage rights for internal and marketing use. Exclusive rights, editorial licensing, or advertising use may cost extra. Always confirm licensing in your contract.' },
];

const eventTypes = [
  { type: 'Conference / Keynote', coverage: 'Full-day, 1–2 photographers', range: '$2,500–$4,500', notes: 'Speakers, audience, networking, breakout sessions' },
  { type: 'Gala / Awards Ceremony', coverage: '4–6 hours, 1–2 photographers', range: '$1,800–$3,500', notes: 'Red carpet, awards, step & repeat, dinner' },
  { type: 'Company Holiday Party', coverage: '3–5 hours, 1 photographer', range: '$1,200–$2,500', notes: 'Candid coverage, group photos, entertainment' },
  { type: 'Product Launch', coverage: '4–8 hours, 1–2 photographers', range: '$2,000–$4,000', notes: 'Product demos, executive portraits, press coverage' },
  { type: 'Trade Show / Expo', coverage: 'Half or full day, 1–2 photographers', range: '$1,500–$3,500', notes: 'Booth coverage, demos, networking, signage' },
  { type: 'Fundraiser / Non-Profit', coverage: '3–5 hours, 1 photographer', range: '$1,200–$2,500', notes: 'Donors, speakers, live auction, candid moments' },
  { type: 'Team Building / Off-site', coverage: '2–4 hours, 1 photographer', range: '$800–$2,000', notes: 'Candid activity coverage, group photos' },
  { type: 'Step & Repeat Station Only', coverage: '2–3 hours', range: '$700–$1,050', notes: 'Branded backdrop, instant social sharing' },
];

const redFlags = [
  'No written contract or vague contract language about deliverables',
  'No professional liability insurance or backup equipment',
  'Unable to show a portfolio of similar corporate events',
  'No clear licensing terms for how you can use the images',
  'Promises an unusually high photo count (quantity over quality)',
  'No pre-event consultation or shot list discussion',
  'Requests full payment upfront with no cancellation policy',
];

const whatToAsk = [
  'Can you share a portfolio of corporate events similar to ours?',
  'What is your backup plan if your primary camera fails?',
  'What is included in the editing — will all images be color-corrected?',
  'What are the usage rights for the images we receive?',
  'How are images delivered, and what is the turnaround time?',
  'Do you carry professional liability insurance?',
  'What happens if you get sick or have an emergency on our event day?',
];

export default function CorporateEventPhotographyCostPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Event Photography', url: 'https://rojasphotography.net/event-photography' },
        { name: 'Corporate Event Photography Cost', url: 'https://rojasphotography.net/corporate-event-photography-cost' },
      ])} />

      <div className="min-h-screen bg-white">

        {/* SB7: A Character with a Goal */}
        <HeroSection
          image="/images/CLA AM 25 335.jpg"
          title="Corporate Event Photography Cost: 2026 Pricing Guide"
          tag="Modesto & Central Valley | Rojas Photography"
          objectPosition="center 30%"
        >
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Planning a corporate event and trying to budget for photography? This guide covers real pricing ranges, what affects cost, and what you should expect to receive — so you can make a confident, informed decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact-quote"
              className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Get a Quote
            </Link>
            <Link
              href="/discovery-call"
              className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Schedule Discovery Call
            </Link>
          </div>
        </HeroSection>

        <main id="main-content">

          {/* SB7: Has a Problem — why pricing is confusing */}
          <section className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-8">
                  Why Corporate Event Photography Pricing Is Hard to Find
                </h2>
                <div className="grid md:grid-cols-2 gap-8 text-[var(--color-text-body)] leading-relaxed text-lg">
                  <p>
                    Most photographers don&apos;t publish their rates online — which forces you to submit a quote request before you even know if someone is in your budget. That&apos;s frustrating when you&apos;re trying to plan a corporate event with a defined budget.
                  </p>
                  <p>
                    This guide gives you the real numbers upfront, explains exactly what drives cost up or down, and tells you what you should expect to receive at each price point — so you can plan confidently and ask the right questions.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Primary Pricing Section — anchor for featured snippet */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4 text-center">
                  How Much Does Corporate Event Photography Cost?
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-14 text-lg max-w-2xl mx-auto">
                  Pricing varies based on duration, photographer experience, and coverage needs. Here are the standard ranges for professional corporate event photography.
                </p>
              </SectionReveal>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <SectionReveal>
                  <div className="bg-[var(--color-bg-warm)] rounded-xl p-8 text-center border border-gray-100">
                    <p className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Hourly Rate</p>
                    <p className="text-4xl font-bold text-[var(--color-primary)] mb-2">$350</p>
                    <p className="text-[var(--color-text-muted)] text-sm mb-4">per hour</p>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">Most photographers require a 2–3 hour minimum. Best for shorter events or add-on coverage.</p>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="bg-[var(--color-primary)] rounded-xl p-8 text-center shadow-lg">
                    <p className="text-sm font-semibold text-white/70 uppercase tracking-wide mb-2">Half-Day (4 hrs)</p>
                    <p className="text-4xl font-bold text-white mb-2">$1,500–$2,500</p>
                    <p className="text-white/70 text-sm mb-4">most popular</p>
                    <p className="text-white/90 text-sm leading-relaxed">Covers a half-day conference, gala, product launch, or company event. Includes editing and delivery.</p>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="bg-[var(--color-bg-warm)] rounded-xl p-8 text-center border border-gray-100">
                    <p className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Full Day (8 hrs)</p>
                    <p className="text-4xl font-bold text-[var(--color-primary)] mb-2">$2,500–$4,500</p>
                    <p className="text-[var(--color-text-muted)] text-sm mb-4">per photographer</p>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">Full-day conferences, all-day expos, and multi-session events. Best per-hour value for long events.</p>
                  </div>
                </SectionReveal>
              </div>

              <SectionReveal>
                <div className="bg-[var(--color-bg-warm)] rounded-xl p-8 border border-gray-100">
                  <h3 className="font-bold text-[var(--color-text-dark)] mb-3 text-lg">Multi-Photographer Events</h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    Large conferences, galas with 200+ attendees, and multi-room events benefit from 2+ photographers to ensure complete coverage. Multi-photographer coverage starts at <strong className="text-[var(--color-text-dark)]">$3,500</strong> and scales based on team size and duration. We coordinate our team to deliver consistent, cohesive coverage across your entire event.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Event gallery */}
          <section className="py-8 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-3 gap-4">
                <SectionReveal className="relative">
                  <div className="img-hover-zoom rounded-xl overflow-hidden relative aspect-video">
                    <Image src="/images/CLA AM 25 201.jpg" alt="California Lawyers Association annual meeting event photography - Rojas Photography" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                  </div>
                </SectionReveal>
                <SectionReveal className="relative">
                  <div className="img-hover-zoom rounded-xl overflow-hidden relative aspect-video">
                    <Image src="/images/events/antitrust-salesforce/Anti-Trust_SF-SalesForce-19.jpg" alt="Anti-Trust corporate event photography at Salesforce - San Francisco CA" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                  </div>
                </SectionReveal>
                <SectionReveal className="relative">
                  <div className="img-hover-zoom rounded-xl overflow-hidden relative aspect-video">
                    <Image src="/images/events/antitrust-salesforce/Anti-Trust_SF-SalesForce-49.jpg" alt="Corporate event photography Salesforce Tower San Francisco - Rojas Photography" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                  </div>
                </SectionReveal>
              </div>
              <p className="text-center text-sm text-[var(--color-text-muted)] mt-4">
                Corporate event coverage across Modesto and the Central Valley —{' '}
                <Link href="/event-photography" className="text-[var(--color-primary)] hover:underline">view full event gallery →</Link>
              </p>
            </div>
          </section>

          {/* Event Types Pricing Table */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4 text-center">
                  Pricing by Event Type
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-12 text-lg max-w-2xl mx-auto">
                  Different events have different coverage needs. Here&apos;s what to expect for the most common corporate event types.
                </p>
              </SectionReveal>
              <SectionReveal>
                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                  <table className="w-full bg-white text-sm">
                    <thead>
                      <tr className="bg-[var(--color-primary)] text-white">
                        <th className="px-5 py-4 text-left font-semibold">Event Type</th>
                        <th className="px-5 py-4 text-left font-semibold">Typical Coverage</th>
                        <th className="px-5 py-4 text-left font-semibold">Price Range</th>
                        <th className="px-5 py-4 text-left font-semibold hidden md:table-cell">What&apos;s Covered</th>
                      </tr>
                    </thead>
                    <tbody>
                      {eventTypes.map((row, i) => (
                        <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-5 py-4 font-semibold text-[var(--color-text-dark)]">{row.type}</td>
                          <td className="px-5 py-4 text-[var(--color-text-body)]">{row.coverage}</td>
                          <td className="px-5 py-4 font-semibold text-[var(--color-primary)]">{row.range}</td>
                          <td className="px-5 py-4 text-[var(--color-text-body)] hidden md:table-cell">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-[var(--color-text-muted)] mt-4 text-center">
                  Ranges reflect single-photographer coverage. Events listed as "1–2 photographers" are priced at the lower end for one photographer and higher end for two. Additional photographers add $800–$1,500 each.
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* 7 Pricing Factors */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4 text-center">
                  7 Factors That Affect Corporate Event Photography Pricing
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-14 text-lg max-w-2xl mx-auto">
                  Understanding what drives cost helps you budget accurately and compare quotes fairly.
                </p>
              </SectionReveal>
              <div className="space-y-4">
                {pricingFactors.map((item, i) => (
                  <SectionReveal key={item.factor}>
                    <div className="flex gap-5 p-6 bg-[var(--color-bg-warm)] rounded-xl">
                      <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--color-text-dark)] mb-1">{item.factor}</h3>
                        <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Why professional photography ROI */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6 text-center">
                  Why Professional Event Photos Are Worth the Investment
                </h2>
                <div className="grid md:grid-cols-2 gap-8 text-[var(--color-text-body)] leading-relaxed">
                  <div className="space-y-4">
                    <p>
                      Corporate events are one-time moments. Unlike a product shoot or headshot session, there is no reshooting a keynote address or a live award presentation. The stakes of getting the photography right are high.
                    </p>
                    <p>
                      But the value goes beyond documentation. Professional event photos fuel your content strategy for months after the event:
                    </p>
                    <ul className="space-y-2 text-sm">
                      {['LinkedIn posts and company updates', 'Press releases and media coverage', 'Internal newsletters and employee communications', 'Website news and case study pages', 'Sponsor and partner reporting', 'Next year\'s event marketing materials'].map(item => (
                        <li key={item} className="flex gap-3">
                          <CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <p>
                      A single well-executed corporate event shoot can generate dozens of pieces of social content, support PR outreach, and serve as proof of your organization&apos;s reach and impact for stakeholders.
                    </p>
                    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                      <p className="font-bold text-[var(--color-text-dark)] mb-2">The Hidden Cost of Bad Photos</p>
                      <p className="text-sm text-[var(--color-text-body)] leading-relaxed">
                        Blurry, poorly lit, or inconsistently edited photos from an inexperienced photographer damage your brand credibility and can&apos;t be used in marketing materials. The cost of bad event photography is often higher than the cost of hiring a professional.
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* SB7: Guide section — Rojas Photography */}
          <section className="py-20 px-8 bg-white border-y border-gray-100">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4 text-center">
                  Corporate Event Photography in Modesto & the Central Valley
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-12 text-lg max-w-2xl mx-auto">
                  Rojas Photography travels statewide for corporate events — from the Central Valley to San Francisco, Los Angeles, Orange County, and San Diego.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <SectionReveal>
                  <div className="relative aspect-video rounded-2xl overflow-hidden">
                    <Image src="/images/MOVE Stanislaus-(3 of 28).jpg" alt="Corporate event photography - MOVE Stanislaus event Modesto CA" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                    <p>
                      We&apos;ve photographed conferences, galas, fundraisers, product launches, and large-scale corporate events for clients including <strong className="text-[var(--color-text-dark)]">Comcast, Save Mart, California Lawyers Association,</strong> and <strong className="text-[var(--color-text-dark)]">Valley First Credit Union</strong>.
                    </p>
                    <p>
                      Every event includes pre-event planning and a shot list, professional coverage by an experienced corporate photographer, full editing and color correction, and delivery to a private online gallery within <strong className="text-[var(--color-text-dark)]">24–48 hours</strong>. Full-day bookings include <strong className="text-[var(--color-text-dark)]">SpotMyPhotos</strong> — a facial recognition platform that lets attendees find and download their photos instantly during the event, perfect for social sharing and sponsor visibility.
                    </p>
                    <p>
                      We cover events throughout California — Central Valley, San Francisco Bay Area, Sacramento, Los Angeles, Orange County, and San Diego. If your event is in California, we can be there.
                    </p>
                    <Link
                      href="/contact-quote"
                      className="btn-primary px-8 py-3 text-base font-semibold rounded-full inline-block mt-4"
                    >
                      Get a Quote for Your Event
                    </Link>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* How to Choose */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-12 text-center">
                  How to Choose the Right Corporate Event Photographer
                </h2>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-10">
                <SectionReveal>
                  <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-5">Questions to Ask</h3>
                    <ul className="space-y-3">
                      {whatToAsk.map(q => (
                        <li key={q} className="flex gap-3 text-[var(--color-text-body)] text-sm leading-relaxed">
                          <CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-5 flex items-center gap-2">
                      <AlertTriangle size={20} className="text-amber-500" /> Red Flags to Watch For
                    </h3>
                    <ul className="space-y-3">
                      {redFlags.map(flag => (
                        <li key={flag} className="flex gap-3 text-[var(--color-text-body)] text-sm leading-relaxed">
                          <XCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                          {flag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* SB7: Avoid Failure CTA */}
          <section className="py-16 px-8 bg-[var(--color-primary-dark)] text-white">
            <div className="max-w-3xl mx-auto text-center">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Get a Quote for Your Event
                </h2>
                <p className="text-lg mb-8 text-white/90">
                  Tell us about your event — date, location, duration, and expected attendance — and we&apos;ll send you a personalized quote within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact-quote"
                    className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                  >
                    Request a Quote
                  </Link>
                  <Link
                    href="/discovery-call"
                    className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                  >
                    Schedule Discovery Call
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection
            faqs={faqs}
            heading="Corporate Event Photography — Frequently Asked Questions"
          />

          {/* SB7: Success */}
          <CTASection
            heading="Ready to Document Your Next Corporate Event?"
            subheading="Trusted by Comcast, Save Mart, California Lawyers Association, and organizations across California."
            primaryLabel="Get a Quote"
            primaryHref="/contact-quote"
            showContactInfo={false}
          />
        </main>
      </div>
    </>
  );
}
