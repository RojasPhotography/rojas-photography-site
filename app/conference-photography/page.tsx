import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Camera, Video, Zap } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import TestimonialCard from '../components/TestimonialCard';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import DefinitionBox from '../components/DefinitionBox';
import MasonryGallery from '../components/MasonryGallery';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'How much does conference photography cost?',
    answer:
      'Conference coverage is quoted per event, based on the number of days, how many photographers you need, and whether you add a highlight video or an attendee headshot station. As a rough guide, a single-day, single-photographer conference typically runs $2,500–$4,500, and multi-day or multi-photographer coverage is custom-quoted from there. Send us your dates, venue, expected attendance, and your run of show, and we’ll return a clear quote within 24 hours.',
  },
  {
    question: 'Our conference runs multiple sessions at once. Can you cover all of it?',
    answer:
      'Yes. That’s exactly why conferences need a plan, not just a photographer. For multi-track programs we deploy a coordinated team of photographers so the keynote, the breakout rooms, the expo floor, and the networking are all covered at the same time — with one consistent look across every image. We map your run of show in advance so nothing important happens off-camera.',
  },
  {
    question: 'Do you travel to Sacramento, the Bay Area, or beyond for conferences?',
    answer:
      'We do, regularly. We’re based in Modesto and cover conferences throughout the Central Valley and Sacramento, and we travel for statewide association meetings and Bay Area events — we’ve photographed conferences as far as San Francisco. Travel is simply built into your quote.',
  },
  {
    question: 'Can you set up a headshot station for attendees at our conference?',
    answer:
      'Yes — it’s one of the most popular add-ons. We set up a professional headshot station on-site so attendees walk away with a polished, updated headshot as a perk of attending. It draws people to your sponsor area, and each person can receive their finished image the same day. It pairs perfectly with full conference coverage.',
  },
  {
    question: 'How fast do we get the photos?',
    answer:
      'Standard delivery is a complete, professionally edited gallery within 5–7 business days. For teams that need content while the event is still live, we offer a same-day highlight set for social and press, plus a real-time delivery add-on that sends attendees their own photos automatically as they’re taken.',
  },
  {
    question: 'Can you also produce a conference highlight video?',
    answer:
      'Yes. Alongside photography, we produce a highlight video that captures the energy of the room — keynotes, reactions, networking, sponsor moments — edited into a recap you can use to promote next year’s event and prove ROI to sponsors and stakeholders.',
  },
];

export const metadata: Metadata = {
  title: 'Conference Photographer | Modesto & Central Valley CA',
  description:
    'Multi-photographer conference photography across Modesto, the Central Valley & Sacramento — keynotes, breakouts, expo, and networking, delivered fast.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/conference-photography',
  },
  openGraph: {
    title: 'Conference Photography in Modesto, Central Valley & Sacramento',
    description:
      'Professional multi-photographer conference coverage — keynotes, breakout sessions, the expo floor, and networking. Trusted by the California Lawyers Association.',
    url: 'https://rojasphotography.net/conference-photography',
    type: 'website',
    images: [
      {
        url: '/images/CLA AM 25 335.jpg',
        alt: 'Conference photography at the California Lawyers Association Annual Meeting',
      },
    ],
  },
};

export default function ConferencePhotographyPage() {
  return (
    <>
      <SchemaScript schema={generateServiceSchema({
        name: 'Conference Photography',
        description: 'Professional multi-photographer conference and multi-day event photography in Modesto, the Central Valley, and Sacramento — keynotes, breakout sessions, expo floor, and networking. Trusted by the California Lawyers Association.',
        url: 'https://rojasphotography.net/conference-photography',
        image: 'https://rojasphotography.net/images/CLA AM 25 335.jpg',
      })} />
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Conference Photography', url: 'https://rojasphotography.net/conference-photography' },
      ])} />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <HeroSection
          title="Conference Photography That Covers Every Room — Not Just the Keynote"
          subtitle="Coordinated, multi-photographer coverage for conferences, annual meetings, and multi-day events across Modesto, the Central Valley, and Sacramento — keynotes, breakout sessions, the expo floor, and the hallway conversations, all delivered fast."
          tag="Conference & Multi-Day Event Photography"
          gradient
        >
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <Link href="/contact-quote" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
              Request a Conference Quote
            </Link>
            <Link href="/discovery-call" className="btn-outline px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
              Schedule a Call
            </Link>
          </div>
        </HeroSection>

        {/* Proof band — CLA */}
        <section className="bg-[var(--color-bg-warm)] py-12 px-8 border-b border-gray-100">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <SectionReveal className="rounded-xl overflow-hidden h-64 relative order-2 md:order-1">
              <Image
                src="/images/CLA AM 25 335.jpg"
                alt="Rojas Photography covering the California Lawyers Association 2025 Annual Meeting — branded stage and panel"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </SectionReveal>
            <SectionReveal className="order-1 md:order-2">
              <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)] mb-3">Trusted with the room</p>
              <h2 className="text-2xl md:text-3xl text-[var(--color-text-dark)] mb-4">
                The California Lawyers Association trusts us with their Annual Meeting
              </h2>
              <p className="text-[var(--color-text-body)] leading-relaxed">
                Statewide associations, legal and healthcare organizations, and corporate teams bring us in when the stakes are high and the schedule is packed. We know how conference days move — and we&apos;re built to keep up with them.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Definition */}
        <DefinitionBox
          term="Conference Photography"
          definition="Professional coverage of a multi-session business event — keynotes, breakout sessions, panels, the expo or sponsor floor, and networking — with one or more photographers working the full run of show and delivering a curated, edited gallery your marketing, PR, and sponsor teams can use right away."
        >
          <p className="text-[var(--color-text-body)] mt-4">
            It&apos;s a different discipline from a single headshot or a two-hour event. Conferences have overlapping sessions, moving speakers, sponsor obligations, and no second takes — so the coverage has to be planned like the event itself.
          </p>
        </DefinitionBox>

        {/* Delivery / team callout */}
        <div className="bg-[var(--color-primary-dark)] py-4 px-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left">
            <p className="text-white font-semibold text-base md:text-lg">
              Multi-photographer teams for multi-track days. &nbsp;·&nbsp; Edited gallery in 5–7 business days, with same-day highlights available.
            </p>
            <Link href="/contact-quote" className="flex-shrink-0 bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap">
              Get a Quote
            </Link>
          </div>
        </div>

        <main id="main-content">
          {/* Problem */}
          <section className="py-16 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">A Conference Is Ten Events Happening at Once</h2>
                <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                  <p>
                    While the keynote is on the main stage, three breakout sessions are running down the hall, sponsors are working the expo floor, and the real conversations are happening over coffee. It all happens once, on a tight schedule, in front of the people whose opinion of your organization matters most.
                  </p>
                  <p>
                    One photographer with one camera can&apos;t be in four rooms. Hire the wrong team and you find out the hard way: the keynote is covered but the breakouts aren&apos;t, the sponsor activations got missed, half the frames are dark or blurry, and the gallery shows up two weeks later — long after your marketing team needed it and your sponsors stopped asking.
                  </p>
                  <p>
                    <strong>And your name is on it.</strong> You chose the photographer. When the board asks for photos, when sponsors want proof their logo was seen, when next year&apos;s promotion needs assets — that all traces back to a decision you made months ago.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Guide / authority */}
          <section className="py-16 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">We Photograph Conferences the Way You Plan Them — Session by Session</h2>
                <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                  <p>
                    We&apos;re Alfonso and Niomi Rojas, based in Modesto. We&apos;ve covered everything from single-day association meetings to multi-day conferences, and we treat your run of show the way you do: as a plan where every session, speaker, and sponsor moment has to be accounted for.
                  </p>
                  <p className="font-semibold text-[var(--color-text-dark)]">
                    For multi-track programs, we bring a coordinated team of photographers so nothing overlaps into a gap — and every image comes back with the same consistent, polished look. Organizations like the California Lawyers Association trust us with their annual meeting because we show up early, work the whole schedule, and deliver fast.
                  </p>
                  <p>
                    We don&apos;t just hand you a folder of frames. We map the priorities with you in advance, coordinate with your AV and event team on the day, and deliver a curated gallery your marketing, PR, and sponsor teams can put to work immediately.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Plan */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center mb-16 text-[var(--color-text-dark)]">How We Cover Your Conference</h2>
              </SectionReveal>
              <div className="grid md:grid-cols-3 gap-8">
                <SectionReveal>
                  <div>
                    <span className="text-5xl font-bold text-[var(--color-primary-light)]">01</span>
                    <h3 className="text-xl text-[var(--color-text-dark)] mt-4 mb-3">We Map the Run of Show</h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                      Before the event, we walk through your schedule together — keynotes, breakout tracks, panels, the expo floor, VIPs to prioritize, and every sponsor deliverable. We plan photographer coverage against the agenda so nothing important happens off-camera.
                    </p>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div>
                    <span className="text-5xl font-bold text-[var(--color-primary-light)]">02</span>
                    <h3 className="text-xl text-[var(--color-text-dark)] mt-4 mb-3">A Coordinated Team Works the Floor</h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                      On the day, our photographers cover concurrent sessions at once — unobtrusively — capturing speakers, engaged audiences, networking, and sponsor activations. One consistent look across the whole team, so the gallery feels like it came from a single vision.
                    </p>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div>
                    <span className="text-5xl font-bold text-[var(--color-primary-light)]">03</span>
                    <h3 className="text-xl text-[var(--color-text-dark)] mt-4 mb-3">Fast, Usable Delivery</h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                      Your complete, professionally edited gallery arrives within 5–7 business days. Need content while the event is live? Add same-day highlights for social and press, or real-time delivery that sends attendees their own photos as they&apos;re taken.
                    </p>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* Early CTA */}
          <section className="py-12 px-8 bg-[var(--color-primary-dark)] text-center">
            <div className="max-w-2xl mx-auto">
              <SectionReveal>
                <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed">
                  Planning a conference or annual meeting? Let&apos;s make sure every room is covered.
                </p>
                <Link href="/contact-quote" className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">
                  Request a Conference Quote
                </Link>
              </SectionReveal>
            </div>
          </section>

          {/* What we photograph */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-16 text-center">What We Capture at a Conference</h2>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-10">
                {[
                  { title: 'Keynotes & Main Stage', desc: 'Speakers in their element, the stage in full, and the room reacting — the anchor images of your event.' },
                  { title: 'Breakout Sessions & Panels', desc: 'Concurrent sessions covered by a coordinated team, so no track goes undocumented.' },
                  { title: 'Expo Floor & Sponsor Activations', desc: 'Booths, brand activations, and sponsor logos in action — the deliverables your sponsors paid to see.' },
                  { title: 'Networking & Candids', desc: 'The receptions, hallway conversations, and genuine moments that show the energy of the room.' },
                  { title: 'Awards & Recognition', desc: 'On-stage presentations and reactions, captured cleanly for recaps and press.' },
                  { title: 'Attendee Headshot Station', desc: 'An optional on-site studio where attendees get a polished, updated headshot as a perk of attending.' },
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
            </div>
          </section>

          {/* Add-ons */}
          <section className="py-16 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <div className="text-center mb-10">
                  <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)] mb-3">Popular Add-Ons</p>
                  <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">
                    Make Your Conference Photos Work Harder
                  </h2>
                </div>
              </SectionReveal>
              <div className="grid md:grid-cols-3 gap-6">
                <SectionReveal>
                  <div className="bg-[var(--color-bg-warm)] rounded-2xl p-8 h-full border border-[var(--color-border-light)]">
                    <Camera size={32} className="text-[var(--color-primary)] mb-4" aria-hidden="true" />
                    <h3 className="text-xl text-[var(--color-text-dark)] mb-3">Attendee Headshot Station</h3>
                    <p className="text-[var(--color-text-body)] leading-relaxed text-sm">
                      A professional headshot studio on the conference floor. Attendees leave with a polished, updated photo — a perk they remember and a magnet for your sponsor area. See our{' '}
                      <Link href="/headshot-booth" className="text-[var(--color-primary)] underline">headshot station</Link>.
                    </p>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="bg-[var(--color-bg-warm)] rounded-2xl p-8 h-full border border-[var(--color-border-light)]">
                    <Video size={32} className="text-[var(--color-primary)] mb-4" aria-hidden="true" />
                    <h3 className="text-xl text-[var(--color-text-dark)] mb-3">Conference Highlight Video</h3>
                    <p className="text-[var(--color-text-body)] leading-relaxed text-sm">
                      A recap film that captures the energy of the room — keynotes, reactions, networking — perfect for promoting next year and proving ROI to sponsors. See our{' '}
                      <Link href="/video" className="text-[var(--color-primary)] underline">video services</Link>.
                    </p>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="bg-[var(--color-bg-warm)] rounded-2xl p-8 h-full border border-[var(--color-border-light)]">
                    <Zap size={32} className="text-[var(--color-primary)] mb-4" aria-hidden="true" />
                    <h3 className="text-xl text-[var(--color-text-dark)] mb-3">Real-Time & Sponsor Branding</h3>
                    <p className="text-[var(--color-text-body)] leading-relaxed text-sm">
                      Attendees receive their own photos automatically as they&apos;re taken, delivered through a branded landing page carrying your sponsor logos — so sponsor visibility travels with every share.
                    </p>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center mb-4 text-[var(--color-text-dark)]">Conference Photography in Action</h2>
                <p className="text-center text-[var(--color-text-muted)] mb-12 max-w-2xl mx-auto">
                  From the California Lawyers Association Annual Meeting to statewide professional conferences.
                </p>
              </SectionReveal>
              <MasonryGallery
                images={[
                  { src: '/images/CLA AM 25 335.jpg', alt: 'California Lawyers Association 2025 Annual Meeting stage and panel — conference photography' },
                  { src: '/images/CLA AM 25 201.jpg', alt: 'Panel discussion on stage at a professional conference — Rojas Photography' },
                  { src: '/images/events/antitrust-salesforce/Anti-Trust_SF-SalesForce-103.jpg', alt: 'Engaged audience during a conference session — professional conference photography' },
                  { src: '/images/events/antitrust-salesforce/Anti-Trust_SF-SalesForce-4.jpg', alt: 'Conference networking reception with skyline views — corporate event photography' },
                  { src: '/images/events/antitrust-salesforce/Anti-Trust_SF-SalesForce-19.jpg', alt: 'Attendees networking at a professional conference reception' },
                  { src: '/images/events/antitrust-salesforce/Anti-Trust_SF-SalesForce-49.jpg', alt: 'Conference attendees in conversation — candid event photography' },
                  { src: '/images/events/antitrust-salesforce/Anti-Trust_SF-SalesForce-69.jpg', alt: 'Professional conference networking moment — Rojas Photography' },
                  { src: '/images/events/antitrust-salesforce/Anti-Trust_SF-SalesForce-111.jpg', alt: 'Conference session audience — professional event coverage' },
                  { src: '/images/events/antitrust-salesforce/Anti-Trust_SF-SalesForce-137.jpg', alt: 'Candid conference networking photography' },
                ]}
              />
            </div>
          </section>

          {/* Success vision */}
          <section className="py-16 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">What It Looks Like When It Goes Right</h2>
                <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                  <p>
                    The conference ends and nothing was missed. Every keynote, every breakout track, every sponsor activation, and the best candid moments — all captured, all consistent, all professionally edited.
                  </p>
                  <p>
                    Your marketing team starts posting while the energy is still fresh. Sponsors get proof their logos were seen. Your board recap looks the way the event actually felt. And when planning starts for next year, you already have a library of assets to sell it with.
                  </p>
                  <p>
                    <strong>That&apos;s the standard we hold for every conference</strong> — not a lucky outcome, a planned one.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Conference types — Central Valley + Sacramento */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl text-[var(--color-text-dark)] mb-4">Conferences We Cover Across the Central Valley, Sacramento &amp; Beyond</h2>
                <p className="text-[var(--color-text-body)] text-lg mb-12 leading-relaxed max-w-3xl">
                  From association annual meetings to industry summits, we work with the organizations that convene this region — and travel statewide when they need us to.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { category: 'Legal & Professional Associations', items: ['Bar & legal association meetings', 'CLE conferences', 'Statewide association summits', 'Board & leadership retreats'] },
                  { category: 'Healthcare & Medical', items: ['Medical society conferences', 'Continuing education events', 'Hospital leadership summits', 'Research & symposium coverage'] },
                  { category: 'Agriculture & Industry', items: ['Ag industry conferences', 'Trade shows & expos', 'Grower & commodity meetings', 'Manufacturing & logistics summits'] },
                  { category: 'Finance & Business', items: ['Credit union & banking conferences', 'Chamber of Commerce summits', 'Real estate & development events', 'Professional development days'] },
                  { category: 'Government & Education', items: ['State agency conferences', 'University & college convenings', 'Public-sector summits', 'Training & seminar series'] },
                  { category: 'Regional & Statewide', items: ['Sacramento association meetings', 'Bay Area corporate conferences', 'Multi-day, multi-photographer events', 'High-profile statewide galas'] },
                ].map((group) => (
                  <SectionReveal key={group.category}>
                    <div className="bg-white rounded-xl p-6 h-full border border-gray-100">
                      <h3 className="text-[var(--color-text-dark)] mb-4 text-base">{group.category}</h3>
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

          {/* Why organizers trust us */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl text-center mb-12 text-[var(--color-text-dark)]">Why Conference Organizers Choose Us</h2>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: 'Built for Multi-Track Days', desc: 'Coordinated photographer teams so the keynote, breakouts, and expo floor are covered at the same time — with one consistent look.' },
                  { title: 'We Plan Around Your Agenda', desc: 'We map your run of show in advance, prioritize VIPs and sponsor deliverables, and coordinate with your AV and event team on the day.' },
                  { title: 'Fast, Usable Delivery', desc: 'Full edited gallery in 5–7 business days, with same-day highlight and real-time attendee delivery available.' },
                  { title: 'Trusted at the Highest Level', desc: 'From the California Lawyers Association Annual Meeting to statewide professional conferences, organizations trust us when it matters.' },
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
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">What Organizers Say</h2>
                </div>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-6">
                <SectionReveal>
                  <TestimonialCard name="Courtnay Lynch" role="VP of People & Culture, Valley First Credit Union" quote="Alfonso and Niomi captured our corporate event beautifully. Professional, responsive, easy to work with. They understand business and deliver results." />
                </SectionReveal>
                <SectionReveal>
                  <TestimonialCard name="Haley Baker" role="Corporate Event Client · Google Review" quote="We had Rojas Photography take photos and video at a company event and they were fantastic. We booked them with somewhat short notice and they were able to step in and make it work. They offered a QR code access for our team to get immediate photos that contained their faces during the event. The quality of the photos were excellent. Both Alfonso and Niomi are personable and easy to work with." />
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* Related services */}
          <section className="py-16 px-8 bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <SectionReveal>
                <h2 className="text-2xl md:text-3xl text-[var(--color-text-dark)] mb-4">Planning More Than a Conference?</h2>
                <p className="text-[var(--color-text-body)] text-lg mb-8 leading-relaxed">
                  We also cover galas, fundraisers, and corporate celebrations through our{' '}
                  <Link href="/event-photography" className="text-[var(--color-primary)] underline">corporate event photography</Link>, run{' '}
                  <Link href="/on-site-photography" className="text-[var(--color-primary)] underline">on-site team headshot days</Link>, and manage recurring{' '}
                  <Link href="/annual-headshot-programs" className="text-[var(--color-primary)] underline">annual headshot programs</Link> for organizations across the Central Valley.
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* Pricing guide cross-link */}
          <section className="py-12 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-3xl mx-auto text-center">
              <SectionReveal>
                <h2 className="text-2xl md:text-3xl text-[var(--color-text-dark)] mb-4">
                  Budgeting for Conference Coverage?
                </h2>
                <p className="text-[var(--color-text-body)] text-lg mb-6 leading-relaxed">
                  Our 2026 pricing guide breaks down what drives cost for conferences and corporate events — days, photographers, add-ons, and delivery — so you can plan with confidence.
                </p>
                <Link
                  href="/corporate-event-photography-cost"
                  className="btn-primary px-8 py-3 text-base font-semibold rounded-full inline-block"
                >
                  View the Pricing Guide →
                </Link>
              </SectionReveal>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection
            faqs={faqs}
            heading="Conference Photography Questions"
          />

          {/* Bottom CTA */}
          <section className="py-16 px-8 bg-white text-center">
            <div className="max-w-2xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">Let&apos;s Cover Your Next Conference</h2>
                <p className="text-[var(--color-text-body)] text-lg mb-8 leading-relaxed">
                  Send us your dates, venue, and run of show. We&apos;ll return a clear quote within 24 hours — and make sure every room is covered.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Link href="/contact-quote" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
                    Request a Conference Quote
                  </Link>
                  <Link href="/discovery-call" className="btn-outline px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
                    Schedule a Call
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
