import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Zap, Trophy } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import DefinitionBox from '../components/DefinitionBox';
import MasonryGallery from '../components/MasonryGallery';
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
      'You\'ll receive a generous gallery of professionally edited, color-corrected images — enough to cover every key moment, speaker, and interaction throughout your event. Every photo is ready to use: post on social media, send to sponsors, add to your website, or include in event recaps. The images are delivered via a private online gallery, ready to download and share immediately.',
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
  title: 'Corporate Event Photography Modesto | Conferences, Galas & Summits',
  description:
    'Conferences, galas, product launches, and fundraisers — event photography that tells your brand story, not just documents it. Modesto & Central Valley.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/event-photography',
  },
  openGraph: {
    title: 'Corporate Event Photography in Modesto | Rojas Photography',
    description:
      'Conferences, galas, product launches, corporate summits — event photography in Modesto & Central Valley that tells your brand story with fast, consistent delivery.',
    url: 'https://rojasphotography.net/event-photography',
    type: 'website',
    images: [
      {
        url: '/images/events/gallery/wfg-awards-red-carpet.jpg',
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
        image: 'https://rojasphotography.net/images/events/gallery/wfg-awards-red-carpet.jpg',
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

      {/* Fast Delivery Callout */}
      <div className="bg-[var(--color-primary-dark)] py-4 px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left">
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
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">Every Event Happens Once. The Photos Have to Be Right.</h2>
              <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                <p>
                  Whether you&apos;re putting on a chamber gala for 200 people, a nonprofit fundraiser, a credit union member appreciation night, or a large-scale conference — you&apos;ve put real time, money, and reputation into making it happen. The photography has to match.
                </p>
                <p>
                  You hire a photographer. They show up late. They miss key moments — the award presentation, the keynote speaker, the networking conversations your attendees came for. The photos come back blurry, dark, or unusable. Weeks pass with nothing delivered. Your sponsors are waiting. Your social media is silent.
                </p>
                <p>
                  And underneath all of it is a feeling that&apos;s hard to shake: <em>we recommended this person. I put my name on it. If this goes wrong, that&apos;s on me.</em> You shouldn&apos;t have to carry that weight on top of everything else you&apos;re managing.
                </p>
                <p>
                  <strong>Events happen once.</strong> There are no do-overs. An unreliable photographer doesn&apos;t just miss shots — they erase months of work and leave you with nothing to show your board, your sponsors, or next year&apos;s attendees.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* SB7: Meets a Guide (Empathy + Authority) */}
        <section className="py-16 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">We Work With Organizations of Every Size — And I Treat Every Event the Same Way</h2>
              <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                <p>
                  We&apos;ve photographed intimate 40-person nonprofit dinners and large-scale multi-day conferences for thousands of attendees. The size of the event doesn&apos;t change how I show up. Every client gets the same preparation, the same professionalism, and the same quality of work.
                </p>
                <p className="font-semibold text-[var(--color-text-dark)]">
                  We&apos;re Alfonso and Niomi Rojas, based in Modesto. We know this region — the venues, the organizations, and what Central Valley event organizers need. I show up early, stay until the end, anticipate moments before they happen, and deliver professionally edited photos within 5–7 business days, every time. Organizations like the California Lawyers Association, Valley First Credit Union, Comcast, and Save Mart trust me because I treat their events like they matter — because they do.
                </p>
                <p>
                  I don&apos;t just take photos — I coordinate with your timeline, communicate with your team, and make sure you walk away with complete coverage and marketing-ready images, not just a folder of snapshots.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* SB7: Who Gives Them a Plan */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-center mb-16 text-[var(--color-text-dark)]">How I Approach Your Event</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-8">
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">01</span>
                  <h3 className="text-xl text-[var(--color-text-dark)] mt-4 mb-3">Pre-Event Planning</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    We review your event schedule, key moments to prioritize, important people to photograph, and sponsor requirements. I coordinate with your event planner or AV team directly so nothing falls through the cracks on the day of.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">02</span>
                  <h3 className="text-xl text-[var(--color-text-dark)] mt-4 mb-3">Professional Coverage</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    We arrive early to scout lighting and key locations. Throughout the event, we capture candid moments, posed group photos, speaker presentations, networking, and sponsor activations — unobtrusively, without disrupting the experience.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">03</span>
                  <h3 className="text-xl text-[var(--color-text-dark)] mt-4 mb-3">Rapid Delivery</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    Photos edited, color-corrected, and delivered within 5–7 business days via a private gallery. With our real-time delivery add-on, attendees can receive their own photos automatically using face recognition — even while the event is still in progress. Sponsors get their deliverables, your team gets content, and you have everything documented professionally.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* SB7: Avoid Failure */}
        <section className="py-12 px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <SectionReveal>
              <div className="bg-[var(--color-bg-warm)] border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl text-[var(--color-text-dark)] mb-3">What&apos;s at stake if you get this wrong</h3>
                <ul className="space-y-2 text-[var(--color-text-body)] leading-relaxed">
                  <li>— Sponsors who paid for visibility get nothing to show for it</li>
                  <li>— Your board or leadership asks for photos and you have none worth sharing</li>
                  <li>— Attendees feel like the event wasn&apos;t worth documenting</li>
                  <li>— Next year&apos;s promotion has no assets to build from</li>
                  <li>— You spend months planning an event that disappears the moment it ends</li>
                </ul>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Real-Time Delivery + Sponsorship Add-On Feature */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-10">
                <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)] mb-3">Premium Add-On</p>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">
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
                  <Zap size={32} className="text-[var(--color-primary)] mb-4" aria-hidden="true" />
                  <h3 className="text-xl text-[var(--color-text-dark)] mb-4">
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
                  <Trophy size={32} className="text-[var(--color-primary)] mb-4" aria-hidden="true" />
                  <h3 className="text-xl text-[var(--color-text-dark)] mb-4">
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
              <h2 className="text-3xl md:text-4xl text-center mb-12 text-[var(--color-text-dark)]">Professional Event Photography in Modesto & Central Valley</h2>
            </SectionReveal>
            <MasonryGallery
              images={[
                { src: '/images/events/gallery/wfg-awards-outdoor-group.jpg', alt: 'Company team celebrating at an outdoor awards event in Danville — corporate event photography', width: 2560, height: 1706 },
                { src: '/images/events/gallery/wfg-awards-podium.jpg', alt: 'Award presentation at a corporate recognition gala — event photography Central Valley', width: 2560, height: 1706 },
                { src: '/images/events/gallery/united-way-power-of-the-purse-stage.jpg', alt: 'United Way Power of the Purse fundraiser gala on stage at the Gallo Center, Modesto', width: 2560, height: 1703 },
                { src: '/images/events/gallery/valley-first-celebration.jpg', alt: 'Guests celebrating at a Valley First Credit Union corporate event — Central Valley event photography', width: 2560, height: 1703 },
                { src: '/images/events/gallery/corporate-reception-san-francisco.jpg', alt: 'Corporate networking reception with San Francisco skyline views — event photography', width: 2560, height: 1703 },
                { src: '/images/events/gallery/wfg-awards-red-carpet.jpg', alt: 'Team on the red carpet at a corporate awards gala in Modesto — event photography', width: 2560, height: 1706 },
                { src: '/images/events/gallery/united-way-keynote.jpg', alt: 'Keynote speaker at a nonprofit fundraiser gala — Modesto event photography', width: 2560, height: 1703 },
                { src: '/images/events/gallery/corporate-dinner-tablescape.jpg', alt: 'Elegant award dinner tablescape at a corporate gala — event photography Central Valley', width: 2560, height: 1706 },
                { src: '/images/events/gallery/wfg-awards-winner.jpg', alt: 'Award winner with trophy at a corporate recognition event — event photography', width: 1706, height: 2560 },
                { src: '/images/events/gallery/valley-first-speaker.jpg', alt: 'Speaker at a Valley First Credit Union corporate event — Central Valley event photography', width: 2560, height: 1703 },
                { src: '/images/events/gallery/united-way-gala-guests.jpg', alt: 'Guests at a nonprofit fundraiser gala at the Gallo Center, Modesto — event photography', width: 2560, height: 1703 },
                { src: '/images/events/antitrust-salesforce/friends-networking.jpg', alt: 'Colleagues networking at a corporate holiday party in Stockton — event photography', width: 6048, height: 4024 },
                { src: '/images/events/antitrust-salesforce/laughing-attendee.jpg', alt: 'Candid moment at a corporate holiday party — authentic event photography Central Valley', width: 6048, height: 4024 },
                { src: '/images/DSC_1638.jpg', alt: 'Formal gala and evening event photography — Central Valley', width: 800, height: 1200 },
              ]}
            />
          </div>
        </section>

        {/* SB7: Success Vision */}
        <section className="py-16 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">What Your Event Looks Like When It Goes Right</h2>
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
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">Ready for Reliable Event Coverage?</h2>
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

        {/* What we Offer */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-16 text-center">What I Cover</h2>
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
                      <h3 className="text-[var(--color-text-dark)] mb-2">{item.title}</h3>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
            <SectionReveal>
              <div className="bg-white p-8 rounded-xl border border-gray-100 max-w-sm mx-auto text-center shadow-sm">
                <h3 className="text-2xl text-[var(--color-primary)] mb-4">Pricing</h3>
                <p className="text-[var(--color-text-body)] mb-6">Custom pricing based on event size, duration, and coverage needs.</p>
                <Link href="/contact-quote" className="btn-primary px-8 py-3 text-base font-semibold rounded-full inline-block">
                  Get Your Quote
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Event Types — Central Valley Focused */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl text-[var(--color-text-dark)] mb-4">Events we Cover Across the Central Valley & Beyond</h2>
              <p className="text-[var(--color-text-body)] text-lg mb-12 leading-relaxed max-w-3xl">
                From intimate nonprofit dinners to regional conferences, we work with the organizations that drive this community — and we bring the same level of professionalism to every one.
              </p>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  category: 'Nonprofits & Associations',
                  items: ['Fundraiser galas & benefit dinners', 'Annual member events', 'Award ceremonies', 'Board & donor appreciation events', 'Community recognition nights'],
                },
                {
                  category: 'Business & Professional',
                  items: ['Chamber of Commerce events & expos', 'Client appreciation events', 'Grand openings & ribbon cuttings', 'Corporate conferences & retreats', 'Product launches'],
                },
                {
                  category: 'Industry & Trade',
                  items: ['Agricultural industry conferences', 'Legal & professional association events', 'Real estate & finance events', 'Healthcare organization galas', 'Credit union member events'],
                },
                {
                  category: 'Formal & Social Events',
                  items: ['Black tie galas & formal dinners', 'Networking events & mixers', 'Trade shows & exhibitions', 'Step & repeat / brand activations', 'Multi-day conferences'],
                },
                {
                  category: 'Education & Government',
                  items: ['University & college events', 'School foundation fundraisers', 'City & county public events', 'Recognition & commencement events', 'Training & seminar photography'],
                },
                {
                  category: 'Bay Area & Regional',
                  items: ['Large-scale corporate conferences', 'Tech & innovation summits', 'Multi-photographer team coverage', 'Statewide association events', 'High-profile galas & receptions'],
                },
              ].map((group) => (
                <SectionReveal key={group.category}>
                  <div className="bg-[var(--color-bg-warm)] rounded-xl p-6 h-full">
                    <h4 className="text-[var(--color-text-dark)] mb-4 text-base">{group.category}</h4>
                    <ul className="text-[var(--color-text-body)] text-sm space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-[var(--color-primary)] font-bold flex-shrink-0">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Rojas */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl text-center mb-12 text-[var(--color-text-dark)]">Why Event Organizers Trust Me</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Local Expertise, Regional Reach', desc: "Based in Modesto, we know the Central Valley — the venues, the organizations, the community. We serve clients from Stockton and Fresno to Sacramento and the Bay Area, with the same local commitment everywhere I go." },
                { title: 'Every Event Gets My Full Attention', desc: "A 50-person chamber mixer gets the same preparation and professionalism as a 500-person gala. We review your schedule, communicate with your team, and show up ready — every time." },
                { title: 'Professional & Unobtrusive', desc: 'I blend into the event while capturing everything — you and your guests won\'t feel like you\'re being photographed.' },
                { title: 'Fast Delivery', desc: 'Full edited gallery delivered within 5–7 business days. Ask about our add-on for real-time face recognition delivery to attendees during your event.' },
              ].map((item) => (
                <SectionReveal key={item.title}>
                  <div className="flex gap-4">
                    <CheckCircle2 size={22} className="text-[var(--color-primary)] flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="text-[var(--color-text-dark)] mb-2">{item.title}</h3>
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
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">Imagine Leaving Your Event With Everything You Need</h2>
                <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                  Sponsor deliverables handled. Social media content ready. A gallery of professional photos that make the event look as good as it actually was. Here&apos;s what event organizers say about working with us.
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
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">Your Event Deserves Reliable Photography</h2>
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
              <h2 className="text-2xl md:text-3xl text-[var(--color-text-dark)] mb-4">
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
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">Ready to Capture Your Next Event?</h2>
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
