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
      'Standard delivery is 5–7 business days — your complete, professionally edited gallery delivered via a secure private online gallery. We also offer a premium real-time add-on: you get access to all photos immediately as they\'re taken, and each attendee automatically receives their own photos using face recognition technology within seconds of capture. It also includes a custom branded landing page with your sponsor logos, making it a powerful tool for attendee engagement and sponsor ROI.',
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
      'Yes! We provide professional step and repeat backdrop photography with branded backgrounds perfect for sponsor recognition, brand activation, and creating shareable moments. This service is ideal for galas, award ceremonies, fundraising events, and product launches. Photos are instantly available for social media sharing, event promotion, and sponsor documentation. Contact us for pricing based on your event location and duration.',
  },
];


export const metadata: Metadata = {
  title: 'Corporate Event Photography Modesto | Conference & Gala Photography',
  description:
    'Professional event photography in Modesto and Central Valley. Conference photography, gala coverage, product launches, and corporate event documentation. Delivered in 5–7 business days.',
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
        description: 'Professional event photography for conferences, galas, fundraisers, and corporate gatherings in Modesto and Central Valley. Delivered in 5–7 business days.',
        url: 'https://rojasphotography.net/event-photography',
        image: 'https://rojasphotography.net/images/CLA AM 25 201.jpg',
        aggregateRating: { ratingValue: '5', reviewCount: '60' },
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
        <p className="text-white/70 text-sm mt-5">Starting from $1,500 &nbsp;·&nbsp; Custom quotes in 24 hours &nbsp;·&nbsp; No commitment required</p>
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

      {/* Fast Delivery Callout */}
      <div className="bg-[var(--color-primary-dark)] py-4 px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left">
          <span className="text-2xl">⚡</span>
          <p className="text-white font-semibold text-base md:text-lg">
            Standard delivery: 5–7 business days. &nbsp;·&nbsp; With our real-time add-on: you and your attendees get photos instantly.
          </p>
          <Link href="/contact-quote" className="flex-shrink-0 bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap">
            Get a Quote
          </Link>
        </div>
      </div>

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
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">I Understand the Pressure You&apos;re Under</h2>
              <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                <p>
                  You&apos;ve planned this event for months. There are sponsors to satisfy, executives to photograph, moments that cannot be missed — and you need a photographer who gets all of that without you having to manage them through it. The last thing you need is another variable to worry about on the day of.
                </p>
                <p className="font-semibold text-[var(--color-text-dark)]">
                  I&apos;m Alfonso Rojas. I show up early, stay until the end, anticipate moments before they happen, and deliver professionally edited photos within 5–7 business days — every single time. Organizations like Comcast, Save Mart, the California Lawyers Association, and Valley First Credit Union trust me with their events because reliability isn&apos;t something I negotiate on.
                </p>
                <p>
                  I don&apos;t just take photos — I coordinate with your event timeline, capture the candid connections alongside the formal moments, and make sure you walk away with complete coverage and marketing-ready assets, not just a folder of snapshots.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* SB7: Who Gives Them a Plan */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">How I Approach Your Event</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-8">
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">01</span>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-4 mb-3">Pre-Event Planning</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    I review your event schedule, key moments to prioritize, important people to photograph, and sponsor requirements. I coordinate with your event planner or AV team directly so nothing falls through the cracks on the day of.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">02</span>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-4 mb-3">Professional Coverage</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    I arrive early to scout lighting and key locations. Throughout the event, I capture candid moments, posed group photos, speaker presentations, networking, and sponsor activations — unobtrusively, without disrupting the experience.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">03</span>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-4 mb-3">Rapid Delivery</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    Photos edited, color-corrected, and delivered within 5–7 business days via a private gallery. With our real-time delivery add-on, attendees can receive their own photos automatically using face recognition — even while the event is still in progress. Sponsors get their deliverables, your team gets content, and you have everything documented professionally.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Real-Time Delivery + Sponsorship Add-On Feature */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-10">
                <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)] mb-3">Premium Add-On</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
                  Turn Your Event Photos Into a Sponsorship Asset
                </h2>
                <p className="text-lg text-[var(--color-text-body)] max-w-2xl mx-auto leading-relaxed">
                  We offer a premium real-time photo experience that goes far beyond fast delivery — it transforms your event photography into a powerful tool for attendee engagement and sponsor ROI.
                </p>
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Benefit 1: Real-time delivery */}
              <SectionReveal>
                <div className="bg-[var(--color-bg-warm)] rounded-2xl p-8 h-full border border-[var(--color-border-light)]">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">
                    All Photos Delivered Instantly — For You and Every Attendee
                  </h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed mb-4">
                    You get access to every photo in real time — no waiting days for your gallery. Attendees register once with their phone or email, and from that point on, every photo they appear in is automatically sent to them using face recognition technology, within seconds of the shot being taken.
                  </p>
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    They don&apos;t browse through hundreds of photos. Their photos find them. They&apos;re sharing on social media before they leave the room.
                  </p>
                </div>
              </SectionReveal>

              {/* Benefit 2: Sponsorship tool */}
              <SectionReveal>
                <div className="bg-[var(--color-bg-warm)] rounded-2xl p-8 h-full border border-[var(--color-border-light)]">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">
                    A Custom Branded Experience That Helps You Sell Sponsorships
                  </h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed mb-4">
                    We build a custom branded landing page for your event featuring all of your sponsor logos. Every photo is delivered through that branded experience — so your sponsors get visibility every time an attendee views or shares their photos.
                  </p>
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    That&apos;s not just event coverage — it&apos;s a sponsorship deliverable you can pitch before the event. Sponsors love it because their logo travels with every photo shared on social media, long after the event is over.
                  </p>
                </div>
              </SectionReveal>
            </div>

            <SectionReveal>
              <div className="mt-8 text-center">
                <Link href="/contact-quote" className="btn-primary px-10 py-4 text-base font-semibold rounded-full inline-block">
                  Ask About This Add-On
                </Link>
              </div>
            </SectionReveal>
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
                { src: '/images/CLA AM 25 201.jpg', alt: 'California Lawyers Association annual meeting - corporate event photography Modesto', extra: 'scale-125' },
                { src: '/images/DSC_1638.jpg', alt: 'Professional gala and formal event photography Central Valley', extra: 'object-[center_40%]' },
                { src: '/images/CLA AM 25 335.jpg', alt: 'Conference and networking event photography - Rojas Photography Central Valley', extra: 'object-left' },
                { src: '/images/events/antitrust-salesforce/Anti-Trust_SF-SalesForce-69.jpg', alt: 'Anti-Trust corporate event photography at Salesforce San Francisco CA', extra: '' },
                { src: '/images/events/antitrust-salesforce/Anti-Trust_SF-SalesForce-111.jpg', alt: 'Corporate conference event photography Salesforce San Francisco - Rojas Photography', extra: '' },
                { src: '/images/events/antitrust-salesforce/Anti-Trust_SF-SalesForce-4.jpg', alt: 'Professional corporate event photographer San Francisco CA - Rojas Photography', extra: '' },
              ].map((img) => (
                <SectionReveal key={img.src} className="img-hover-zoom rounded-xl overflow-hidden h-72 relative">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className={`object-cover ${img.extra}`} />
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SB7: Success Vision */}
        <section className="py-16 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">What Your Event Looks Like When It Goes Right</h2>
              <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                <p>
                  Your event ends. Your gallery is ready — whether that&apos;s in real time if you&apos;ve added our premium delivery service, or within 5–7 business days with our standard package. Hundreds of professionally edited photos: the keynote speaker, award presentations, the networking moments your team spent months setting up. All of it, documented beautifully.
                </p>
                <p>
                  Your marketing team gets to work immediately. Social posts go up while the energy is still fresh. Sponsors see their logos in every photo your attendees are already sharing. Your event recap email goes out with images that make attendees proud they were there.
                </p>
                <p>
                  Attendees don&apos;t wonder where the photos are. Their photos already found them. Your event doesn&apos;t just happen — it lives on.
                </p>
                <p>
                  <strong>That&apos;s the standard we hold ourselves to for every single event.</strong> Not a lucky outcome — a guaranteed one.
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
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-16 text-center">What I Cover</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-10 mb-16">
              {[
                { title: 'Full Event Coverage', desc: 'Comprehensive photography from start to finish. Every important moment documented professionally.' },
                { title: 'Multiple Photographers', desc: 'For larger events, we deploy multiple photographers to ensure complete coverage across all areas.' },
                { title: 'Candid & Posed Photography', desc: 'Authentic moments and genuine interactions, plus professionally posed group photos and speaker shots.' },
                { title: 'Step & Repeat Photography', desc: 'Professional step and repeat backdrop photography. Perfect for sponsor recognition and brand activation.' },
                { title: 'Fast Photo Delivery', desc: 'Complete professionally edited gallery delivered within 5–7 business days. Add-on available for real-time attendee delivery using face recognition.' },
                { title: 'Professional Editing & Curation', desc: 'All photos professionally edited and color-corrected. We deliver only the best shots—curated for quality.' },
                { title: 'Online Gallery & Download', desc: 'Photos delivered via secure private gallery. With our real-time delivery add-on, attendees receive their individual photos automatically — no browsing required.' },
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
              <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text-dark)]">Why Event Organizers Trust Me</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Proven Track Record', desc: "I've covered events for Comcast, Save Mart, the California Lawyers Association, and dozens of Central Valley organizations." },
                { title: 'Professional & Unobtrusive', desc: 'I blend into the event while capturing everything — you and your guests won\'t feel like you\'re being photographed.' },
                { title: 'Fast Delivery', desc: 'Full edited gallery delivered within 5–7 business days. Ask about our add-on for real-time face recognition delivery to attendees during your event.' },
                { title: 'Local to the Central Valley', desc: 'Based in Modesto, serving Stockton, Fresno, Turlock, the Bay Area, and beyond.' },
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
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">Imagine Leaving Your Event With Everything You Need</h2>
                <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                  Sponsor deliverables handled. Social media content ready. A gallery of professional photos that make the event look as good as it actually was. Here&apos;s what event organizers say about working with me.
                </p>
              </div>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-6">
              <SectionReveal>
                <TestimonialCard name="Courtnay Lynch" role="VP of People & Culture, Valley First Credit Union" quote="Alfonso and Niomi captured our corporate event beautifully. Professional, responsive, easy to work with. They understand business and deliver results." />
              </SectionReveal>
              <SectionReveal>
                <TestimonialCard name="Haley Baker" role="Corporate Event Client · Google Review" quote="We had Rojas Photography take photos and video at a company event and they were fantastic. We booked them with somewhat short notice and they were able to step in and make it work. They offered a QR code access for our team to get immediate photos that contained their faces during the event. The quality of the photos were excellent. Both Alfonso and Niomi are personable and easy to work with." />
              </SectionReveal>
              <SectionReveal>
                <TestimonialCard name="Curt Zimmerman" role="Corporate Event Client · Google Review" quote="I hosted a client appreciation event and Rojas Photography was AMAZING in capturing moments and couple shots at the event. Pictures were branded with my company logo and able to view instantly for all of my clients to enjoy. I HIGHLY recommend Alfonso & Niomi for your next event." />
              </SectionReveal>
              <SectionReveal>
                <TestimonialCard name="Reyna Perales" role="Nonprofit Fundraiser Gala Client · Google Review" quote="Alfonso and Niomi were fantastic to work with and highly professional. They did our staff headshots and also handled the photography at our fundraiser gala. For both events, they did an incredible job — making our team feel confident during the headshots and capturing all the perfect moments and memories that truly showcased our gala." />
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
