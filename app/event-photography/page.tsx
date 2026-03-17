import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import DefinitionBox from '../components/DefinitionBox';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';
import { serviceDefinitions, statistics } from '../lib/definitions';

const faqs = [
  {
    question: 'How much does event photography cost in Modesto?',
    answer:
      'Event photography pricing is custom based on your event size, duration, and coverage needs. A 4-hour event typically costs $1,500-$2,500 with one photographer. A full-day event (8+ hours) typically costs $2,500-$4,500 with one photographer. Multi-photographer coverage starts at $3,500+. Contact us with your event date, expected attendance, and coverage needs for a personalized quote within 24 hours.',
  },
  {
    question: 'Do you provide photos during the event?',
    answer:
      'Yes! We photograph throughout your entire event and deliver professionally edited photos within 24-48 hours via our secure online private gallery. Attendees can view, download, and share photos immediately, making it perfect for real-time social media updates, event follow-up, and attendee engagement. This rapid delivery enables live social media updates during and immediately after your event.',
  },
  {
    question: 'How many photos do we receive from our event?',
    answer:
      'Event photo counts depend on duration and coverage needs. A 4-hour event with one photographer typically produces 300-500 professionally curated photos. A full-day (8-hour) event typically produces 600-800+ photos. All photos are professionally color-corrected and edited to the same high standard. For example, recent events: a 3-hour corporate meeting produced 280 photos, a 4-hour conference produced 480 photos, and a 6-hour gala produced 620 photos.',
  },
  {
    question: 'Can you handle large corporate events?',
    answer:
      'Absolutely! For larger events, we can deploy multiple photographers to ensure complete coverage across all areas and ensure no important moments are missed. We coordinate team photographers to maintain consistency and deliver all images from the same professional vision. We\'ve successfully covered major events for organizations like Comcast, Save Mart, California Lawyers Association, and Valley First Credit Union.',
  },
  {
    question: 'Do you do step and repeat photography at events?',
    answer:
      'Yes! We provide professional step and repeat backdrop photography with branded backgrounds perfect for sponsor recognition, brand activation, and creating shareable moments. This service is ideal for galas, award ceremonies, fundraising events, and product launches. Photos are instantly available for social media sharing, event promotion, and sponsor documentation. Typical investment: $700-$1,050 for a 2-3 hour step and repeat station.',
  },
];


export const metadata: Metadata = {
  title: 'Corporate Event Photography Modesto | Conference & Gala Photography',
  description:
    'Professional event photography in Modesto and Central Valley. Conference photography, gala coverage, product launches, and corporate event documentation. 24-hour delivery.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/event-photography',
  },
  openGraph: {
    title: 'Corporate Event Photography in Modesto | Rojas Photography',
    description:
      'Professional event coverage for conferences, galas, fundraisers, product launches, and corporate gatherings. Fast delivery with expert photography.',
    url: 'https://rojasphotography.net/event-photography',
    type: 'website',
    images: [
      {
        url: '/images/CLA AM 25 201.jpg',
        alt: 'Corporate event photography - Modesto photographer',
      },
    ],
  },
};

export default function EventPhotographyPage() {
  return (
    <>
      <SchemaScript schema={generateServiceSchema({
        name: 'Corporate Event Photography',
        description: 'Professional event photography for conferences, galas, fundraisers, and corporate gatherings in Modesto and Central Valley. 24-hour delivery.',
        url: 'https://rojasphotography.net/event-photography',
        image: 'https://rojasphotography.net/images/CLA AM 25 201.jpg',
      })} />
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Event Photography', url: 'https://rojasphotography.net/event-photography' },
      ])} />
      <div className="min-h-screen bg-white">
      {/* SB7: A Character - Event Organizer/Marketing Manager */}
      <HeroSection
        title="Your Event Happens Once. You Need a Photographer You Can Trust."
        subtitle="Professional event photography with fast delivery and complete coverage—so your conference, gala, or corporate event is documented flawlessly. Serving Modesto and Central Valley."
        tag="Professional Event Coverage & Documentation"
        gradient
      >
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <Link href="/contact-quote" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
            Request a Quote
          </Link>
          <Link href="/discovery-call" className="btn-outline px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
            Schedule Discovery Call
          </Link>
        </div>
      </HeroSection>

      {/* Definition Box */}
      <DefinitionBox
        term={serviceDefinitions.eventPhotography.term}
        definition={serviceDefinitions.eventPhotography.definition}
      >
        <p className="text-[var(--color-text-body)] mt-4">
          {serviceDefinitions.eventPhotography.context}
        </p>
      </DefinitionBox>

      <main id="main-content">
        {/* SB7: Has a Problem */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">Events Can&apos;t Be Redone—Bad Photography Ruins Everything</h2>
              <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                <p>
                  You&apos;re planning a major conference, gala, or corporate event. Hundreds of guests. Important speakers. Sponsors expecting professional coverage. Your reputation is on the line.
                </p>
                <p>
                  You hire a photographer. They show up late. They miss key moments—the keynote speech, the award presentation, the VIP networking. Half the photos are blurry, poorly lit, or unusable. Your event planner nightmare becomes reality: you have a $50,000 event with zero marketing assets to show for it.
                </p>
                <p>
                  Or worse—the photographer ghosts you after the event. Weeks pass with no photos delivered. Your sponsors are asking for images. Your social media is silent. Attendees are wondering if photos even exist.
                </p>
                <p>
                  <strong>Events happen once.</strong> There are no do-overs. An unreliable photographer doesn&apos;t just fail to capture moments—they destroy months of planning, waste your budget, and damage your professional reputation.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* SB7: Meets a Guide (Empathy + Authority) */}
        <section className="py-16 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">Reliable Event Photography You Can Count On</h2>
              <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                <p>
                  <strong>We understand the pressure of event photography.</strong> There&apos;s no second chance to capture the keynote, the award ceremony, or the networking moments. That&apos;s exactly why we specialize in reliable, professional event coverage with fast delivery—because your event deserves documentation as professional as the event itself.
                </p>
                <p>
                  <strong>We&apos;ve covered 500+ corporate events across Modesto and the Central Valley</strong>—from intimate executive dinners to 1,000+ person conferences. Organizations like Comcast, Save Mart, California Lawyers Association, and Valley First Credit Union trust us because we show up early, stay until the end, and deliver professionally edited photos within 24-48 hours. <em>Every single time.</em>
                </p>
                <p>
                  We don&apos;t just "take photos"—we anticipate moments, capture candid connections, coordinate with your event timeline, and deliver complete coverage so you have marketing assets, social media content, and sponsor documentation ready immediately.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* SB7: Who Gives Them a Plan */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">Our Event Photography Process</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-8">
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">01</span>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-4 mb-3">Pre-Event Planning</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    We discuss your event schedule, key moments to prioritize, important people to photograph, sponsor requirements, and photography goals. We coordinate with your event planner or AV team to ensure seamless integration. Based on your event scope, we can deploy multiple photographers for complete coverage.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">02</span>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-4 mb-3">Professional Coverage</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    We arrive early to scout lighting and key locations. Throughout your event, we capture candid moments, posed group photos, speaker presentations, attendee networking, sponsor activations, and all key moments. Professional, unobtrusive coverage that doesn&apos;t disrupt the experience—we blend in while capturing everything.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">03</span>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-4 mb-3">Rapid Delivery</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    Photos professionally edited, color-corrected, and delivered within 24-48 hours via secure online private gallery. Attendees can view, download, and share immediately. Perfect for real-time social media updates, event follow-up, and sponsor deliverables. You get complete coverage while the event is still fresh.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Urgent CTA After Plan - Early Conversion Opportunity */}
        <section className="py-12 px-8 bg-[var(--color-primary-dark)] text-center">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed">
                Stop gambling with unreliable photographers. Get professional event coverage you can trust.
              </p>
              <Link href="/contact-quote" className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">
                Request a Quote
              </Link>
            </SectionReveal>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-text-dark)]">Professional Event Photography in Modesto & Central Valley</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { src: '/images/CLA AM 25 201.jpg', alt: 'Corporate event photography in Modesto', extra: 'scale-125' },
                { src: '/images/DSC_1638.jpg', alt: 'Professional gala and formal event photography', extra: 'object-[center_40%]' },
                { src: '/images/CLA AM 25 335.jpg', alt: 'Conference and networking event coverage - Central Valley', extra: 'object-left' },
              ].map((img) => (
                <SectionReveal key={img.src} className="img-hover-zoom rounded-xl overflow-hidden h-96 relative">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className={`object-cover ${img.extra}`} />
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SB7: Helps Avoid Failure (Stakes) */}
        <section className="py-16 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">Bad Event Photography Destroys Months of Planning</h2>
              <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                <p>
                  When your photographer fails—shows up late, misses key moments, delivers blurry photos, or ghosts you completely—you don&apos;t just lose photos. You lose everything.
                </p>
                <p>
                  Your sponsors paid for visibility. They want photos of their branded activations, their executives networking, their logo in the background. No photos = broken sponsor commitments = lost relationships and future funding.
                </p>
                <p>
                  Your marketing team needs content. Social media posts. Website updates. Email follow-ups. Without professional event photos, your $50,000 conference produces <em>zero</em> marketing assets. The event happened, but digitally it might as well not exist.
                </p>
                <p>
                  Your attendees expect documentation. They want photos of themselves networking, learning, celebrating. Without photos, the event feels incomplete—attendees feel undervalued, and your reputation suffers.
                </p>
                <p>
                  <strong>Events happen once.</strong> There are no do-overs. Unreliable photography doesn&apos;t just fail to capture moments—it wastes your entire event investment and damages your professional credibility.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* CTA After Stakes */}
        <section className="py-16 px-8 bg-white text-center">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">Ready for Reliable Event Coverage?</h2>
              <p className="text-[var(--color-text-body)] text-lg mb-8 leading-relaxed">
                Get a custom quote for your event. We&apos;ll provide professional photography with fast delivery and complete coverage—so you can focus on running a successful event, not worrying about the photographer.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link href="/contact-quote" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
                  Request a Quote
                </Link>
                <Link href="/discovery-call" className="btn-outline px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
                  Schedule Discovery Call
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-16 text-center">What We Offer</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-10 mb-16">
              {[
                { title: 'Full Event Coverage', desc: 'Comprehensive photography from start to finish. Every important moment documented professionally.' },
                { title: 'Multiple Photographers', desc: 'For larger events, we deploy multiple photographers to ensure complete coverage across all areas.' },
                { title: 'Candid & Posed Photography', desc: 'Authentic moments and genuine interactions, plus professionally posed group photos and speaker shots.' },
                { title: 'Step & Repeat Photography', desc: 'Professional step and repeat backdrop photography. Perfect for sponsor recognition and brand activation.' },
                { title: 'Rapid Photo Delivery', desc: 'Event photos available within 24-48 hours. Perfect for social media during and after your event.' },
                { title: 'Professional Editing & Curation', desc: 'All photos professionally edited and color-corrected. We deliver only the best shots—curated for quality.' },
                { title: 'Online Gallery & Download', desc: 'Photos delivered via secure online private gallery. Attendees can view, download, and share.' },
                { title: 'Flexible Event Types', desc: 'We cover all event types: conferences, galas, fundraisers, product launches, award ceremonies, and more.' },
              ].map((item) => (
                <SectionReveal key={item.title}>
                  <div className="flex gap-4">
                    <CheckCircle2 size={22} className="text-[var(--color-primary)] flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-[var(--color-text-dark)] mb-2">{item.title}</h3>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
            <SectionReveal>
              <div className="bg-white p-8 rounded-xl border border-gray-100 max-w-sm mx-auto text-center shadow-sm">
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Pricing</h3>
                <p className="text-[var(--color-text-body)] mb-6">Custom pricing based on event size, duration, and coverage needs.</p>
                <Link href="/contact-quote" className="btn-primary px-8 py-3 text-base font-semibold rounded-full inline-block">
                  Get Your Quote
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-8">Events We Cover</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[var(--color-text-dark)] mb-4">Corporate Events</h4>
                  <ul className="text-[var(--color-text-body)] text-sm space-y-2">
                    <li>&#10003; Company conferences and conventions</li>
                    <li>&#10003; Annual meetings and celebrations</li>
                    <li>&#10003; Product launches and reveals</li>
                    <li>&#10003; Corporate retreats and team building</li>
                    <li>&#10003; Award ceremonies and recognition events</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-text-dark)] mb-4">Professional & Social Events</h4>
                  <ul className="text-[var(--color-text-body)] text-sm space-y-2">
                    <li>&#10003; Galas and formal dinners</li>
                    <li>&#10003; Fundraisers and charity events</li>
                    <li>&#10003; Networking events and mixers</li>
                    <li>&#10003; Trade shows and exhibitions</li>
                    <li>&#10003; Grand openings and celebrations</li>
                  </ul>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Why Choose Rojas */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text-dark)]">Why Choose Rojas Photography for Your Event</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Corporate Event Experience', desc: "We've covered events for Comcast, Save Mart, California Lawyers Association, and dozens of Central Valley businesses." },
                { title: 'Professional & Unobtrusive', desc: 'We blend into your event while capturing everything. Professional photographers who understand not to interrupt the experience.' },
                { title: 'Fast Turnaround', desc: 'Event photos delivered within 24-48 hours. Perfect for real-time social media updates and event follow-up.' },
                { title: 'Local Central Valley Service', desc: 'Based in Modesto, serving Stockton, Fresno, Turlock, and beyond.' },
              ].map((item) => (
                <SectionReveal key={item.title}>
                  <div className="flex gap-4">
                    <CheckCircle2 size={22} className="text-[var(--color-primary)] flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-[var(--color-text-dark)] mb-2">{item.title}</h3>
                      <p className="text-[var(--color-text-body)] text-sm">{item.desc}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">What Event Organizers Say</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-6">
              <SectionReveal>
                <TestimonialCard name="Courtnay Lynch" role="VP of People & Culture, Valley First Credit Union" quote="Alfonso and Niomi captured our corporate event beautifully. Professional, responsive, easy to work with. They understand business and deliver results." />
              </SectionReveal>
              <SectionReveal>
                <TestimonialCard name="Event Organizer" role="Corporate Client" quote="From planning to delivery, Rojas Photography was excellent. They understood our event goals, captured everything we needed, and delivered photos quickly." />
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Final CTA Before FAQ */}
        <section className="py-16 px-8 bg-[var(--color-bg-warm)] text-center">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">Your Event Deserves Reliable Photography</h2>
              <p className="text-[var(--color-text-body)] text-lg mb-8 leading-relaxed">
                Join hundreds of Central Valley organizations who&apos;ve trusted us for professional, reliable event coverage. Complete documentation with fast delivery is one quote away.
              </p>
              <Link href="/contact-quote" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
                Request a Quote
              </Link>
            </SectionReveal>
          </div>
        </section>

        {/* Pricing Guide CTA */}
        <section className="py-12 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-3xl mx-auto text-center">
            <SectionReveal>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-dark)] mb-4">
                Wondering About Event Photography Pricing?
              </h2>
              <p className="text-[var(--color-text-body)] text-lg mb-6 leading-relaxed">
                We put together a complete 2026 pricing guide covering hourly rates, packages by event type, and exactly what affects cost — so you can plan your budget with confidence.
              </p>
              <Link
                href="/corporate-event-photography-cost"
                className="btn-primary px-8 py-3 text-base font-semibold rounded-full inline-block"
              >
                View the Full Pricing Guide →
              </Link>
            </SectionReveal>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          faqs={faqs}
          heading="Event Photography Questions"
        />

        {/* Bottom CTA */}
        <section className="py-16 px-8 bg-white text-center">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">Ready to Capture Your Next Event?</h2>
              <p className="text-[var(--color-text-body)] text-lg mb-8 leading-relaxed">
                Let us document your event with professional photography. From planning to delivery, we handle everything.
              </p>
              <Link href="/contact-quote" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
                Request a Quote
              </Link>
            </SectionReveal>
          </div>
        </section>
      </main>
      </div>
    </>
  );
}
