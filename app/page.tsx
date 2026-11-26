import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Repeat, Aperture } from 'lucide-react';
import SectionReveal from './components/SectionReveal';
import LogoMarquee from './components/LogoMarquee';
import ParallaxBand from './components/ParallaxBand';
import TestimonialCard from './components/TestimonialCard';
import GoogleReviewsBadge from './components/GoogleReviewsBadge';
import CTASection from './components/CTASection';
import SchemaScript from './components/SchemaScript';
import { generateLocalBusinessSchema, generateWebSiteSchema, generatePersonSchema, generateFAQSchema } from './lib/schema';
import FAQSection from './components/FAQSection';

export const metadata: Metadata = {
  title: 'Corporate Photography Modesto CA | Professional Headshots',
  description:
    'Premium corporate headshots in Modesto & the Central Valley — in our studio or at your office. Led by Alfonso and Niomi. Trusted by 500+ executives.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net',
  },
  openGraph: {
    title: 'Corporate Photography Modesto CA | Professional Headshots',
    description:
      'Premium corporate headshots in Modesto & the Central Valley — in our studio or at your office. Led by Alfonso and Niomi. Trusted by 500+ executives.',
    url: 'https://rojasphotography.net',
    type: 'website',
    images: [
      {
        url: '/images/kaiser-bts-headshots.jpg',
        alt: 'Behind the scenes corporate headshot session with Kaiser executives - Rojas Photography Modesto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Photography Modesto CA | Professional Headshots',
    description:
      'Premium corporate headshots in Modesto & the Central Valley — in our studio or at your office. Led by Alfonso and Niomi. Trusted by 500+ executives.',
    images: ['/images/kaiser-bts-headshots.jpg'],
  },
};

const otherServices = [
  {
    href: '/headshot-booth',
    name: 'Headshot Booth',
    icon: Aperture,
    desc: 'A flat-rate headshot station for conferences, expos, and company events — unlimited attendees, same-day gallery.',
  },
  {
    href: '/annual-headshot-programs',
    name: 'Annual Headshot Programs',
    icon: Repeat,
    desc: 'Recurring team days plus pay-as-you-go new-hire sessions, so your whole roster stays current.',
  },
  {
    href: '/commercial',
    name: 'Commercial Photography',
    icon: Briefcase,
    desc: 'Brand imagery for your website and marketing — products, spaces, and people.',
  },
];

const portfolio: { src: string; alt: string; pos: string; wide?: boolean }[] = [
  { src: '/images/headshots/headshot-attorney-07.jpg', alt: 'Lawyer headshot Modesto CA - Professional legal photography', pos: '55% 30%' },
  { src: '/images/headshots/headshot-executive-02.jpg', alt: 'Executive headshot Modesto CA - Corporate leadership photography', pos: '55% 30%' },
  { src: '/images/headshots/headshot-attorney-08.jpg', alt: 'Attorney headshot Modesto - Central Valley law firm photography', pos: '50% 32%' },
  { src: '/images/headshots/headshot-healthcare-executive-01.jpg', alt: 'Healthcare executive headshot Modesto - Professional medical photography', pos: '40% 28%' },
  { src: '/images/headshots/headshot-ceo-nutrition-01.jpg', alt: 'CEO headshot Modesto CA - Smiling executive in pink blazer on gray backdrop', pos: '49% 30%' },
  { src: '/images/headshots/headshot-attorney-11.jpg', alt: 'Lawyer headshot Modesto - Modern attorney portrait photography', pos: '58% 32%' },
  { src: '/images/work/cla-annual-meeting-2026/cla-annual-meeting-speaker-laughing.jpg', alt: 'Conference photography California - speaker on stage at the CLA Annual Meeting San Diego', pos: '50% 35%' },
  { src: '/images/events/gallery/united-way-gala-guests.jpg', alt: 'Corporate event photography Modesto - United Way gala guests', pos: '50% 40%' },
  { src: '/images/BBSI-Corp-Video.jpg', alt: 'Corporate video production Modesto - behind the scenes with BBSI', pos: '50% 40%' },
  { src: '/images/Move Staff Group 9.jpg', alt: 'On-site team photography Modesto - Corporate group headshots', pos: '50% 35%', wide: true },
  { src: '/images/headshots/headshot-finance-ceo.jpg', alt: 'Finance CEO headshot Modesto - Executive financial photography', pos: '50% 25%' },
  { src: '/images/headshots/headshot-cpa-finance-01.jpg', alt: 'CPA finance professional headshot Modesto - Accounting photography', pos: '50% 25%' },
  { src: '/images/headshots/headshot-comcast-executive.jpg', alt: 'Comcast executive headshot Modesto - Premium corporate photography', pos: '60% 30%' },
  { src: '/images/headshots/headshot-sales-manager-01.jpg', alt: 'Sales manager headshot Modesto - Professional business photography', pos: '50% 25%' },
  { src: '/images/headshots/headshot-mortgage-lender-01.jpg', alt: 'Mortgage lender headshot Modesto - Financial professional photography', pos: '50% 25%' },
  { src: '/images/headshots/headshot-financial-advisor-01.jpg', alt: 'Financial advisor headshot Modesto - Professional business photography', pos: '50% 28%' },
  { src: '/images/headshots/headshot-executive.jpg', alt: 'Executive headshot Modesto CA - Corporate business photography', pos: '50% 28%' },
  { src: '/images/headshots/headshot-realestate-agent.jpg', alt: 'Real estate agent headshot Modesto - Professional realtor photography', pos: '50% 28%' },
  { src: '/images/headshots/headshot-mortgage-lender-02.jpg', alt: 'Mortgage professional headshot Modesto - Financial services photography', pos: '50% 26%' },
];

// One list feeds both the visible FAQ and the FAQPage schema, so they can't drift apart.
const homeFaqs = [
  {
    question: 'Who will be photographing me?',
    answer: 'Our team will. Rojas Photography is led by Alfonso and Niomi Rojas, a husband-and-wife team in Modesto, CA, and every session is handled by us and our team, with more hands added when a project calls for it. We bring 15+ years of corporate leadership experience, and together we have photographed 500+ executives and professionals across the Central Valley, with 70 five-star Google reviews.',
  },
  {
    question: 'What services do you offer?',
    answer: 'For individuals, we offer premium in-studio headshots for executives, attorneys, healthcare and finance professionals, real estate agents and LinkedIn profiles. For teams and companies, we offer on-site team headshots, annual headshot programs and commercial photography. For events and conferences, we offer event photography, conference photography and headshot booths. And for brands, our video production includes brand and story films, event video coverage and social media reels.',
  },
  {
    question: 'Where are you located, and do you travel outside of Modesto?',
    answer: 'Our studio is in Modesto, CA 95356, in the heart of the Central Valley. We regularly work throughout the Central Valley, including Stockton, Turlock, Fresno, Sacramento, Merced, Ceres, Riverbank, Oakdale, Tracy, Manteca, Lodi and Clovis, and travel statewide for conferences, events and team days, including the Bay Area, Los Angeles and San Diego. Tell us the location when you request a quote.',
  },
  {
    question: 'How much does a professional headshot cost in Modesto?',
    answer: 'Our studio headshot sessions are $150 for the session, plus $150 per image you select. There is no minimum — you only pay for the photos you love. On-site team photography is $150 per person with no minimum, and a headshot booth for events starts at a flat $2,500 for a half day with unlimited attendees.',
  },
  {
    question: 'What is the difference between a headshot booth and on-site photography?',
    answer: 'A headshot booth is a flat-rate, high-volume service — ideal for expos, conferences, and company events where the goal is photographing everyone who steps up. On-site photography is $150 per person, where we spend dedicated time with each individual, providing personal coaching on posing and expression. Both involve us coming to your location with professional equipment.',
  },
  {
    question: 'How quickly will I receive my photos?',
    answer: 'For studio sessions, you review, choose, and purchase your favorite images with us before you leave; the edited finals arrive in your inbox within 48 hours. On-site team photography is delivered the same day. For corporate events with SpotMyPhotos live delivery (full-day bookings), guests can access their photos in real time during the event.',
  },
  {
    question: 'What should I wear to a headshot session?',
    answer: 'We send every client a preparation guide before their session with specific wardrobe recommendations. Generally, solid colors and professional attire photograph best. Bring multiple outfits — sessions include unlimited wardrobe changes at no extra charge. We guide you through everything in real time so you never have to guess.',
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={generateLocalBusinessSchema()} />
      <SchemaScript schema={generateWebSiteSchema()} />
      {generatePersonSchema().map((person, i) => (
        <SchemaScript key={i} schema={person} />
      ))}
      <SchemaScript schema={generateFAQSchema(homeFaqs)} />
      <div className="min-h-screen bg-white">
      <main id="main-content">
      {/* Hero — full-bleed portrait, dual CTA (studio vs on-location) */}
      <section
        className="relative w-full overflow-hidden pt-20 lg:pt-28"
        style={{ background: 'linear-gradient(135deg, #0F2E1E 0%, #1F6B4D 130%)' }}
        aria-label="Corporate photography and video for California companies"
      >
        <div className="max-w-7xl mx-auto px-8 py-14 md:py-20 grid lg:grid-cols-2 gap-14 items-center text-white">
          <div>
            <h1 className="hero-rise mb-6" style={{ animationDelay: '0.1s' }}>
              <span className="block text-[var(--color-primary-light)] font-semibold text-xs md:text-sm tracking-[0.22em] mb-6 uppercase">
                Corporate Photography &amp; Video · Modesto, CA
              </span>{' '}
              <span className="block text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.01em]">
                Look as good as your work.
              </span>
            </h1>
            <p className="hero-rise text-lg md:text-xl max-w-xl leading-relaxed text-white/90 mb-10" style={{ animationDelay: '0.3s' }}>
              Headshots, team days, events and video for companies across California.
            </p>
            <div className="hero-rise flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.52s' }}>
              <Link
                href="/contact-quote"
                className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block text-center"
              >
                Get Started
              </Link>
              <Link
                href="/work"
                className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block text-center"
              >
                See Our Work →
              </Link>
            </div>
            <div className="hero-rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-3" style={{ animationDelay: '0.6s' }}>
              <GoogleReviewsBadge rating="5.0" count={70} href="https://g.page/r/CdOO4Sj3FR_lEBM" />
              <span className="text-xs md:text-sm tracking-[0.15em] uppercase text-white/70">
                500+ executives <span className="text-[var(--color-primary-light)]" aria-hidden="true">·</span> Led by Alfonso &amp; Niomi
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {[
              { src: '/images/headshots/headshot-executive-ceo.jpg', alt: 'Executive headshot by Rojas Photography — woman in red on dark backdrop', pos: '48% 50%' },
              { src: '/images/events/conferences/cla-annual-meeting-panelists.jpg', alt: 'Conference photography — panelists on stage at the California Lawyers Association Annual Meeting', pos: '50% 50%' },
              { src: '/images/headshots/headshot-finance-ceo.jpg', alt: 'Corporate headshot — finance executive in dark suit', pos: '50% 50%' },
              { src: '/images/kaiser-bts-headshots.jpg', alt: 'On-site headshot booth in action at a Kaiser corporate event', pos: '50% 50%' },
              { src: '/images/headshots/headshot-comcast-executive.jpg', alt: 'Corporate executive headshot — woman in white blazer', pos: '57% 50%' },
              { src: '/images/events/gallery/wfg-awards-red-carpet.jpg', alt: 'Corporate event photography — red carpet at the WFG awards gala', pos: '50% 50%' },
              { src: '/images/headshots/headshot-attorney-11.jpg', alt: 'Attorney headshot — smiling lawyer in yellow blazer on dark backdrop', pos: '75% 50%' },
              { src: '/images/BBSI-Corp-Video.jpg', alt: 'Corporate video production for BBSI — behind the scenes', pos: '50% 50%' },
              { src: '/images/headshots/headshot-healthcare-executive-01.jpg', alt: 'Healthcare executive headshot — woman in grey blazer', pos: '26% 50%' },
            ].map((img, i) => (
              <div key={img.src} className="hero-rise relative aspect-[4/5] rounded-xl overflow-hidden" style={{ animationDelay: `${0.15 + i * 0.06}s` }}>
                <Image src={img.src} alt={img.alt} fill priority={i < 3} sizes="(max-width: 1024px) 33vw, 16vw" className="object-cover" style={{ objectPosition: img.pos }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof bar — the names they already know */}
      <SectionReveal>
        <LogoMarquee />
      </SectionReveal>

      {/* SB7: The problem & stakes */}
      <section className="py-16 md:py-24 px-8 bg-white" aria-label="Why professional imagery matters">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-5xl text-[var(--color-text-dark)] mb-6">
              Your work is excellent. Does it look that way online?
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-text-body)] leading-relaxed max-w-3xl mx-auto mb-10">
              Every day, clients, recruits, and partners size up your company from a screen — the headshot on
              LinkedIn, the team page, the photos from your last event. When that image lags behind the work,
              you pay for it quietly: in trust, in talent, in deals that go to the firm that simply looked the part.
            </p>
          </SectionReveal>
          <SectionReveal>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              {[
                { t: 'Outdated headshots', d: 'A ten-year-old photo tells people your details slip — before you say a word.' },
                { t: 'Inconsistent team pages', d: 'A patchwork of selfies and old photos makes a strong team look like a loose collection of individuals.' },
                { t: 'Undocumented wins', d: 'Conferences, galas, and milestones your company worked hard for — gone, because nobody captured them well.' },
              ].map((p) => (
                <div key={p.t} className="rounded-xl border border-gray-100 bg-[var(--color-bg-warm)] p-6">
                  <h3 className="text-[var(--color-text-dark)] font-semibold mb-2">{p.t}</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
          <SectionReveal>
            <p className="mt-10 text-lg text-[var(--color-text-dark)] font-medium">
              The corporate world moves fast — your work deserves to be captured, documented, and shown at its best. Our job is to make sure it is.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* The guides — SB7: problem + guide, humans up front */}
      <section className="py-16 md:py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <SectionReveal>
            <div className="rounded-2xl overflow-hidden relative aspect-[4/3] shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/Alfonso+Niomi-0026.jpg"
                alt="Alfonso and Niomi Rojas - Founders of Rojas Photography"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[50%_20%]"
              />
            </div>
          </SectionReveal>
          <SectionReveal>
            <div>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">
                Meet Alfonso &amp; Niomi and Our Team
              </h2>
              <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-4">
                You've put years into building something real — a team, a reputation, a standard of work you're proud of. Then someone looks your company up — a headshot, a team page, last year's event — and what they find doesn't come close to reflecting any of it. That gap is frustrating. We get it.
              </p>
              <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-4">
                We come from corporate leadership ourselves, so we know how to work with marketing teams, CEOs, CFOs and the professionals who report to them. We've helped 500+ executives and their teams — from <Link href="/premium-headshots" className="text-[var(--color-primary)] hover:underline">executive headshots</Link> to <Link href="/on-site-photography" className="text-[var(--color-primary)] hover:underline">on-site team photography</Link>, <Link href="/commercial" className="text-[var(--color-primary)] hover:underline">commercial imagery</Link>, and <Link href="/video" className="text-[var(--color-primary)] hover:underline">video production</Link> — create visuals they're genuinely proud to put in front of clients. Not as a vendor. As partners who care about getting it right.
              </p>
              <p className="text-[var(--color-text-body)] leading-relaxed mb-8">
                We photograph businesses across Modesto, Stockton, Fresno, Sacramento, and the Bay Area — and travel statewide for conferences, events, and team days, including Los Angeles and San Diego.
              </p>
              <Link
                href="/about-rojas-photography"
                className="btn-outline px-8 py-3 font-semibold rounded-full inline-block"
              >
                More About Us
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

        {/* SB7: The plan — three steps */}
        <section className="py-16 md:py-20 px-8 bg-white" aria-label="How working with Rojas Photography works">
          <div className="max-w-5xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-4">
                Getting Started Is Simple
              </h2>
              <p className="text-center text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto mb-14">
                Whether you need one headshot or a three-day conference covered, your path is the same.
              </p>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { n: '1', t: 'Tell us what you need', d: 'Book a studio session online, or request a quote for team days, events, conferences, or video. We reply within 24 hours with one clear number.' },
                { n: '2', t: 'We handle the day', d: 'Led by Alfonso and Niomi, with our team when the day calls for it — coaching each person, covering every room, building the schedule around your people, not ours.' },
                { n: '3', t: 'Delivered fast', d: 'Studio finals in your inbox within 48 hours. Team days and booths: same-day galleries. Events: live delivery while the room is still buzzing.' },
              ].map((s) => (
                <SectionReveal key={s.n}>
                  <div className="text-center px-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xl font-bold mx-auto mb-5">{s.n}</div>
                    <h3 className="text-xl text-[var(--color-text-dark)] mb-3">{s.t}</h3>
                    <p className="text-[var(--color-text-body)] leading-relaxed">{s.d}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Two lanes — Studio vs On-Location headshots */}
        <section className="py-20 md:py-28 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl text-[var(--color-text-dark)] mb-4">
                  How We Help
                </h2>
                <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
                  Professional headshots in Modesto — in our studio or at your office — plus event, conference, and video coverage across California. Every job is led by Alfonso and Niomi, with our team when the day calls for it.
                </p>
              </div>
            </SectionReveal>

            {/* Lane 1 — Studio */}
            <SectionReveal>
              <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-16 md:mb-24">
                <Link href="/premium-headshots" className="block group rounded-2xl overflow-hidden relative aspect-[4/3] shadow-xl ring-1 ring-black/5 hover:shadow-2xl transition-all">
                  <Image
                    src="/images/headshots/headshot-attorney-02.jpg"
                    alt="Professional studio headshot of an attorney at the Rojas Photography studio in Modesto"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: '50% 16%' }}
                  />
                </Link>
                <div>
                  <p className="text-[var(--color-primary)] font-semibold text-xs tracking-[0.2em] uppercase mb-3">
                    In Our Modesto Studio
                  </p>
                  <h3 className="text-2xl md:text-4xl text-[var(--color-text-dark)] mb-5">
                    Headshots for One
                  </h3>
                  <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-4">
                    For executives, attorneys, and personal brands who need one photograph that carries their name. We guide you through every pose and expression — unlimited wardrobe changes, personal direction from us, and hand-finished retouching.
                  </p>
                  <p className="text-[var(--color-text-body)] leading-relaxed mb-8">
                    We review every image together in the studio — you choose and purchase your favorites before you leave, and the edited finals arrive in your inbox within 48 hours.
                  </p>
                  <Link
                    href="/premium-headshots#booking-heading"
                    className="btn-primary px-8 py-4 text-lg font-semibold rounded-full inline-block"
                  >
                    Book a Studio Session
                  </Link>
                  <p className="text-sm text-[var(--color-text-muted)] mt-4">
                    Sessions are $150, plus $150 per finished image you choose. No minimum.{' '}
                    <Link href="/professional-headshot-cost" className="text-[var(--color-primary)] underline">See how headshot pricing works</Link>.
                  </p>
                </div>
              </div>
            </SectionReveal>

            {/* Lane 2 — On-location */}
            <SectionReveal>
              <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
                <div className="md:order-1 order-2">
                  <p className="text-[var(--color-primary)] font-semibold text-xs tracking-[0.2em] uppercase mb-3">
                    We Come to You
                  </p>
                  <h3 className="text-2xl md:text-4xl text-[var(--color-text-dark)] mb-5">
                    Headshots for Teams
                  </h3>
                  <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-6">
                    We bring the complete studio — lighting, backdrop, and direction — to your office, firm, or facility anywhere in the Central Valley. From a handful of partners to hundreds of employees — everyone photographed without leaving the building.
                  </p>
                  <ul className="space-y-3 text-[var(--color-text-body)] mb-8">
                    {['Full studio setup at your office', 'A consistent, on-brand look across the entire team', 'Galleries delivered the same day', 'Multiple headshot stations — or a multi-day schedule — for large teams and shift-based workplaces'].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-[var(--color-primary)] font-bold mt-0.5" aria-hidden="true">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/on-site-photography"
                    className="btn-primary px-8 py-4 text-lg font-semibold rounded-full inline-block"
                  >
                    Plan a Headshot Day for Your Team
                  </Link>
                </div>
                <Link href="/on-site-photography" className="md:order-2 order-1 block group rounded-2xl overflow-hidden relative aspect-[4/3] shadow-xl ring-1 ring-black/5 hover:shadow-2xl transition-all">
                  <Image
                    src="/images/kaiser-bts-headshots.jpg"
                    alt="On-location corporate team headshot day at a Kaiser office in the Central Valley"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: '50% 35%' }}
                  />
                </Link>
              </div>
            </SectionReveal>

            {/* Lane 3 — Events & Conferences */}
            <SectionReveal>
              <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mt-16 md:mt-24">
                <Link href="/event-photography" className="block group rounded-2xl overflow-hidden relative aspect-[4/3] shadow-xl ring-1 ring-black/5 hover:shadow-2xl transition-all">
                  <Image
                    src="/images/work/cla-annual-meeting-2026/cla-annual-meeting-panel-stage-audience.jpg"
                    alt="Corporate conference photography — panel on stage at the California Lawyers Association Annual Meeting in San Diego"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div>
                  <p className="text-[var(--color-primary)] font-semibold text-xs tracking-[0.2em] uppercase mb-3">
                    Statewide — Modesto to San Diego
                  </p>
                  <h3 className="text-2xl md:text-4xl text-[var(--color-text-dark)] mb-5">
                    Events &amp; Conferences
                  </h3>
                  <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-6">
                    Conferences, galas, award nights, and multi-day annual meetings — covered wall to wall by
                    Alfonso, Niomi and our team, with live photo delivery while your event is still running and a{' '}
                    <Link href="/headshot-booth" className="text-[var(--color-primary)] hover:underline">headshot booth</Link>{' '}
                    your attendees will line up for.
                  </p>
                  <ul className="space-y-3 text-[var(--color-text-body)] mb-8">
                    {['Keynote and candids covered at the same time', 'Live delivery via SpotMyPhotos during the event', 'Trusted by the California Lawyers Association, every year'].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-[var(--color-primary)] font-bold mt-0.5" aria-hidden="true">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <Link
                      href="/event-photography"
                      className="btn-primary px-8 py-4 text-lg font-semibold rounded-full inline-block"
                    >
                      Plan Your Event Coverage
                    </Link>
                    <Link href="/work/cla-annual-meeting-2026" className="text-[var(--color-primary)] font-semibold hover:underline">
                      See the CLA case study →
                    </Link>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Lane 4 — Video */}
            <SectionReveal>
              <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mt-16 md:mt-24">
                <div className="md:order-1 order-2">
                  <p className="text-[var(--color-primary)] font-semibold text-xs tracking-[0.2em] uppercase mb-3">
                    Corporate Video &amp; Drone
                  </p>
                  <h3 className="text-2xl md:text-4xl text-[var(--color-text-dark)] mb-5">
                    Video That Works as Hard as You Do
                  </h3>
                  <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-6">
                    Brand films, client testimonials, event recaps, and social-ready short-form — produced by the
                    same two-person team that shoots your photography, with FAA-certified drone coverage when the
                    story needs altitude.
                  </p>
                  <Link
                    href="/video"
                    className="btn-primary px-8 py-4 text-lg font-semibold rounded-full inline-block"
                  >
                    Explore Video Production
                  </Link>
                </div>
                <Link href="/video" className="md:order-2 order-1 block group rounded-2xl overflow-hidden relative aspect-[4/3] shadow-xl ring-1 ring-black/5 hover:shadow-2xl transition-all">
                  <Image
                    src="/images/BBSI-Corp-Video.jpg"
                    alt="Corporate video production behind the scenes for BBSI — Rojas Photography video services"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Portfolio grid — The Rojas Look */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl text-[var(--color-text-dark)] mb-4">
                  The Rojas Look
                </h2>
                <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
                  Executives, teams, conferences, and events from Modesto to San Diego — every one of them at their best
                </p>
              </div>
            </SectionReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[220px] md:auto-rows-[280px]">
              {portfolio.map((t) => (
                <SectionReveal key={t.src} className={`img-hover-zoom rounded-xl overflow-hidden relative ${t.wide ? 'col-span-2' : ''}`}>
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    sizes={t.wide ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                    className="object-cover"
                    style={{ objectPosition: t.pos }}
                  />
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Beyond Headshots — other services, brand-green cards */}
        <section id="beyond-headshots" className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl text-[var(--color-text-dark)] mb-3">
                  Rounding Out the Lineup
                </h2>
                <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
                  The programs and formats that keep a company&apos;s image current year-round.
                </p>
              </div>
            </SectionReveal>
            <div className="grid sm:grid-cols-3 gap-5">
              {otherServices.map((s) => (
                <SectionReveal key={s.href}>
                  <Link
                    href={s.href}
                    aria-label={`Learn more about ${s.name}`}
                    className="group relative flex h-[280px] flex-col justify-between rounded-xl p-7 transition-all hover:shadow-2xl hover:-translate-y-1"
                    style={{
                      background:
                        'radial-gradient(120% 80% at 85% -10%, rgba(255,255,255,.14), transparent 60%), linear-gradient(160deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
                    }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
                      <s.icon className="text-[var(--color-primary-light)]" size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl text-white mb-2">{s.name}</h3>
                      <p className="text-white/80 text-sm leading-snug mb-4">{s.desc}</p>
                      <span className="text-[var(--color-primary-light)] text-sm font-semibold group-hover:underline">
                        Learn More →
                      </span>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
            <SectionReveal>
              <p className="mt-12 text-center text-[var(--color-text-body)]">
                Planning a conference or annual meeting? See our <Link href="/conference-photography" className="text-[var(--color-primary)] font-semibold hover:underline">conference photography across the Central Valley, Sacramento and statewide</Link>.
                <br className="hidden md:block" />
                Larger or custom project? <Link href="/discovery-call" className="text-[var(--color-primary)] font-semibold hover:underline">Book a free, zero-pressure discovery call →</Link>
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Testimonials - Kept Authentic */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl text-[var(--color-text-dark)] mb-4">
                  Central Valley Professionals, In Their Own Words
                </h2>
                <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto mb-8">
                  A headshot that finally looks like you. A team photo that shows your culture. That&apos;s what working together looks like — and nearly half of our 70 five-star reviews mention the same thing: how comfortable the session felt, often from people who dread being photographed.
                </p>
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-6">
              <SectionReveal>
                <TestimonialCard
                  name="Catherine Luke"
                  role="CEO"
                  quote="Professional, efficient, and high-quality. Within days, our new employee had a corporate headshot ready for our website and LinkedIn. Highly recommended for any business."
                />
              </SectionReveal>
              <SectionReveal>
                <TestimonialCard
                  name="Joyce Ulrich"
                  role="Entrepreneur, Modesto"
                  quote="Alfonso and Niomi create a comfortable environment that puts you at ease immediately. The professional headshots turned out beautifully—exactly what I needed for my business."
                />
              </SectionReveal>
              <SectionReveal>
                <TestimonialCard
                  name="Courtnay Lynch"
                  role="VP of People & Culture, Valley First Credit Union"
                  quote="Alfonso and Niomi captured our corporate event beautifully. Professional, responsive, easy to work with. They understand business and deliver results."
                />
              </SectionReveal>
            </div>
            <SectionReveal>
              <p className="text-center mt-10">
                <a href="https://g.page/r/CdOO4Sj3FR_lEBM" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-semibold hover:underline">
                  Read all 70 reviews on Google →
                </a>
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Discovery Call CTA #1 - After Portfolio - SB7: Call to Action — parallax band */}
        <ParallaxBand image="/images/alfonso-niomi-band.jpg" overlayOpacity={78} size="lg" position="center 30%">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl mb-4 text-white">
              Ready to Look as Good as You Are?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Studio sessions book online in minutes. Team days, events, conferences, and video start with one
              quick quote. Either way, you&apos;ll know exactly what happens next within 24 hours — and every job
              is led by Alfonso and Niomi, with our team when the day calls for it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/premium-headshots#booking-heading"
                className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
              >
                Book a Studio Session
              </Link>
              <Link
                href="/contact-quote"
                className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
              >
                Get a Custom Quote
              </Link>
            </div>
            <p className="text-white/60 text-sm mt-5">In our Modesto studio · pick your favorites before you leave · edited images in your inbox within 48 hours</p>
          </SectionReveal>
        </ParallaxBand>

        {/* FAQ Section - AEO */}
        <FAQSection
          faqs={homeFaqs}
          heading="Common Questions"
        />

        {/* CTA + Contact */}
        <CTASection
          primaryHref="/premium-headshots#booking-heading"
          primaryLabel="Book a Studio Session"
          subheading="Studio sessions book online in minutes. For team days, events, conferences, commercial, and video, request a quote — one clear answer within 24 hours."
        />
      </main>
      </div>
    </>
  );
}
