import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Video, Calendar, Aperture } from 'lucide-react';
import SectionReveal from './components/SectionReveal';
import TestimonialCard from './components/TestimonialCard';
import CTASection from './components/CTASection';
import SchemaScript from './components/SchemaScript';
import { generateLocalBusinessSchema, generateWebSiteSchema, generatePersonSchema, generateFAQSchema } from './lib/schema';
import FAQSection from './components/FAQSection';

export const metadata: Metadata = {
  title: 'Corporate Photography Modesto CA | Professional Headshots & Video',
  description:
    'Expert corporate photography in Modesto and Central Valley. Professional headshots, on-site photography, commercial photography, video production, and event coverage. Trusted by 500+ executives.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net',
  },
  openGraph: {
    title: 'Corporate Photography Modesto CA | Professional Headshots & Video',
    description:
      'Professional corporate photography services in Modesto and Central Valley. In-studio headshots, on-site photography, commercial photography, video production, and event coverage.',
    url: 'https://rojasphotography.net',
    type: 'website',
    images: [
      {
        url: '/images/Kaiser BTS Headshots.png',
        alt: 'Behind the scenes corporate headshot session with Kaiser executives - Rojas Photography Modesto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Photography Modesto CA | Professional Headshots & Video',
    description:
      'Expert corporate photography in Modesto and Central Valley. Professional headshots, on-site photography, commercial photography, video production, and event coverage. Trusted by 500+ executives.',
    images: ['/images/Kaiser BTS Headshots.png'],
  },
};

const otherServices = [
  {
    href: '/headshot-booth',
    name: 'Headshot Booth for Events',
    icon: Aperture,
    desc: 'High-volume headshot stations for conferences, expos, and company events.',
  },
  {
    href: '/event-photography',
    name: 'Corporate Event Photography',
    icon: Calendar,
    desc: 'Conferences, galas, and company events across the Central Valley.',
  },
  {
    href: '/commercial',
    name: 'Commercial Photography',
    icon: Briefcase,
    desc: 'Brand imagery for your website and marketing — products, spaces, and people.',
  },
  {
    href: '/video',
    name: 'Video Production',
    icon: Video,
    desc: 'Brand stories, testimonials, and FAA-certified aerial footage.',
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
      <SchemaScript schema={generateFAQSchema([
        {
          question: 'Who are Alfonso and Niomi Rojas?',
          answer: 'Alfonso and Niomi Rojas are the husband-and-wife owners and photographers of Rojas Photography, based in Modesto, CA. They photograph every session together — two photographers on every job. They bring 15+ years of corporate leadership experience, and Alfonso is FAA Part 107 certified for drone operations. Together they have photographed 500+ executives and professionals across the Central Valley and hold 60+ five-star Google reviews.',
        },
        {
          question: 'What is Rojas Photography?',
          answer: 'Rojas Photography is a professional corporate photography and video studio based in Modesto, CA, founded and operated by Alfonso and Niomi Rojas, who shoot every session together. Services include executive headshots, on-site team photography, headshot booth events, commercial photography, video production, and corporate event coverage throughout the Central Valley.',
        },
        {
          question: 'Where is Rojas Photography located?',
          answer: 'Rojas Photography is located in Modesto, CA 95350, in the heart of the Central Valley. The studio serves clients in Modesto, Stockton, Turlock, Fresno, Sacramento, Merced, and throughout Central Valley California. On-site photography is available at client locations throughout California.',
        },
        {
          question: 'How much does a professional headshot cost in Modesto, CA?',
          answer: 'A professional headshot session at Rojas Photography in Modesto costs $150 for the session fee, plus $150 per image selected. There is no minimum number of images to purchase — you only pay for the photos you love. For on-site team photography and headshot booth events, pricing is customized based on team size and scope.',
        },
        {
          question: 'What areas does Rojas Photography serve in California?',
          answer: 'Rojas Photography is based in Modesto, CA and serves the entire Central Valley including Stockton, Turlock, Fresno, Sacramento, Merced, Ceres, Riverbank, Oakdale, Tracy, Manteca, Lodi, and Clovis. On-site photography is available throughout California.',
        },
        {
          question: 'Does Rojas Photography offer on-site headshots for businesses?',
          answer: 'Yes. Alfonso and Niomi Rojas bring a complete professional studio setup — lighting, backdrop, and camera equipment — directly to your office, medical facility, law firm, or business. On-site photography is priced per person and is ideal for contracted team headshots. For high-volume events, a headshot booth service is also available, priced by the hour.',
        },
      ])} />
      <div className="min-h-screen bg-white">
      <main id="main-content">
      {/* Hero — full-bleed portrait, dual CTA (studio vs on-location) */}
      <section
        className="relative w-full min-h-screen flex items-end overflow-hidden pt-20"
        aria-label="Corporate headshots in Modesto and the Central Valley"
      >
        <Image
          src="/images/headshots/headshot-ceo-nutrition.jpg"
          alt="Executive headshot photographed by Rojas Photography in Modesto, California"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: '62% 22%' }}
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: 'linear-gradient(88deg, rgba(15,46,30,.92) 8%, rgba(15,46,30,.62) 40%, rgba(15,46,30,.08) 72%, rgba(15,46,30,.35) 100%)' }}
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: 'linear-gradient(0deg, rgba(15,46,30,.8) 4%, rgba(15,46,30,.35) 24%, transparent 48%)' }}
        />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 pb-14 md:pb-20 pt-24 text-white">
          <p className="hero-rise text-[var(--color-primary-light)] font-semibold text-xs md:text-sm tracking-[0.22em] mb-6 uppercase" style={{ animationDelay: '0.1s' }}>
            Corporate Headshots · Modesto &amp; the Central Valley
          </p>
          <h1 className="hero-rise text-4xl sm:text-6xl lg:text-7xl mb-6 leading-[1.02] tracking-[-0.01em] max-w-[17ch]" style={{ animationDelay: '0.22s' }}>
            The headshot your reputation deserves.
          </h1>
          <p className="hero-rise text-lg md:text-xl max-w-2xl leading-relaxed text-white/90 mb-10" style={{ animationDelay: '0.38s' }}>
            Most professionals are quietly undersold by their photo. In one session — in our Modesto
            studio or on location at your office — you&rsquo;ll have a headshot that matches the
            reputation you&rsquo;ve built.
          </p>
          <div className="hero-rise flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.52s' }}>
            <Link
              href="/premium-headshots#booking-heading"
              className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block text-center"
            >
              Book a Studio Session
            </Link>
            <Link
              href="/on-site-photography"
              className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block text-center"
            >
              Headshot Day for Your Team →
            </Link>
          </div>
          <div className="hero-rise mt-12 border-t border-white/15 pt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm tracking-[0.15em] uppercase text-white/70" style={{ animationDelay: '0.68s' }}>
            <span>500+ executives photographed</span>
            <span className="text-[var(--color-primary-light)]" aria-hidden="true">·</span>
            <span>60+ five-star Google reviews</span>
            <span className="text-[var(--color-primary-light)]" aria-hidden="true">·</span>
            <span>Two photographers, every session</span>
          </div>
        </div>
      </section>

      {/* Proof bar — the names they already know */}
      <SectionReveal>
        <section className="py-10 px-8 bg-[var(--color-bg-warm)] border-b border-gray-100" aria-label="Clients who trust Rojas Photography">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center">
            <span className="text-xs tracking-[0.22em] uppercase text-[var(--color-text-muted)] font-semibold">Trusted by</span>
            {['Save Mart', 'Comcast', 'California Lawyers Association', 'Kaiser Permanente', 'Tenet Health'].map((c) => (
              <span key={c} className="text-[var(--color-text-dark)] text-sm md:text-base tracking-[0.04em]" style={{ fontFamily: 'var(--font-heading)' }}>{c}</span>
            ))}
          </div>
        </section>
      </SectionReveal>

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
                Meet Alfonso &amp; Niomi — Two Photographers, Every Session
              </h2>
              <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-4">
                You've put years into building something real — a team, a reputation, a standard of work you're proud of. Then someone finds your LinkedIn and the photo doesn't come close to reflecting any of it. That gap is frustrating. We get it.
              </p>
              <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-4">
                With a background in corporate leadership and operations before we picked up a camera, we understand business from the inside. We've helped 500+ professionals — from <Link href="/premium-headshots" className="text-[var(--color-primary)] hover:underline">executive headshots</Link> to <Link href="/on-site-photography" className="text-[var(--color-primary)] hover:underline">on-site team photography</Link>, <Link href="/commercial" className="text-[var(--color-primary)] hover:underline">commercial imagery</Link>, and <Link href="/video" className="text-[var(--color-primary)] hover:underline">video production</Link> — create visuals they're genuinely proud to put in front of clients. Not as a vendor. As partners who care about getting it right.
              </p>
              <p className="text-[var(--color-text-body)] leading-relaxed mb-8">
                We photograph businesses across Modesto, Stockton, Fresno, Turlock, Merced, Sacramento, and the East Bay.
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

        {/* Two lanes — Studio vs On-Location headshots */}
        <section className="py-20 md:py-28 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl text-[var(--color-text-dark)] mb-4">
                  Professional Headshots in Modesto — Two Ways
                </h2>
                <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
                  In our studio, or on location at your office. Both of us, either way.
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
                    For executives, attorneys, and personal brands who need one photograph that carries their name. We guide you through every pose and expression — unlimited wardrobe changes, personal direction from both of us, and hand-finished retouching.
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
                    Sessions are $150, plus $150 per finished image you choose. No minimum.
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
                    src="/images/Kaiser BTS Headshots.png"
                    alt="On-location corporate team headshot day at a Kaiser office in the Central Valley"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: '50% 35%' }}
                  />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Portfolio Bento Grid */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl text-[var(--color-text-dark)] mb-4">
                  The Rojas Look
                </h2>
                <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
                  A sample of the executives, attorneys, and teams we&apos;ve photographed across Modesto and the Central Valley
                </p>
              </div>
            </SectionReveal>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
              {/* Large Featured - CEO Nutrition */}
              <SectionReveal className="md:col-span-2 md:row-span-2 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/headshots/headshot-executive-ceo.jpg"
                  alt="Executive CEO headshot Modesto - Premium corporate photography"
                  fill
                  className="object-cover object-[50%_25%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </SectionReveal>

              {/* Small - Attorney Headshot */}
              <SectionReveal className="md:col-span-1 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/headshots/headshot-attorney-03.jpg"
                  alt="Attorney headshot Modesto CA - Professional legal photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </SectionReveal>

              {/* Small - Joyce Headshot */}
              <SectionReveal className="md:col-span-1 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/Joyce-0029.jpg"
                  alt="Business professional headshot Central Valley - Corporate photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </SectionReveal>

              {/* Small - Executive */}
              <SectionReveal className="md:col-span-1 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/headshots/headshot-executive-02.jpg"
                  alt="Executive headshot Modesto CA - Corporate leadership photography"
                  fill
                  className="object-cover object-[55%_30%]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </SectionReveal>

              {/* Small - CPA Finance */}
              <SectionReveal className="md:col-span-1 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/headshots/headshot-cpa-finance-01.jpg"
                  alt="CPA finance professional headshot Modesto - Accounting photography"
                  fill
                  className="object-cover object-[50%_25%]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </SectionReveal>

              {/* Small - Realtor Headshot */}
              <SectionReveal className="md:col-span-1 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/headshots/headshot-realtor-01.jpg"
                  alt="Real estate agent headshot Modesto - Professional realtor photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </SectionReveal>

              {/* Medium Wide - Team Group Photo */}
              <SectionReveal className="md:col-span-2 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/Move Staff Group 9.jpg"
                  alt="On-site team photography Modesto - Corporate group headshots"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </SectionReveal>

              {/* Small - Miguel Headshot */}
              <SectionReveal className="md:col-span-1 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/Miguel-(2 of 6) (1).jpg"
                  alt="Executive headshot Modesto CA - Professional corporate photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </SectionReveal>

              {/* Large Featured - Event */}
              <SectionReveal className="md:col-span-2 md:row-span-2 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/headshots/headshot-comcast-executive.jpg"
                  alt="Comcast executive headshot Modesto - Premium corporate photography"
                  fill
                  className="object-cover object-[60%_30%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </SectionReveal>

              {/* Small - Healthcare Executive */}
              <SectionReveal className="md:col-span-1 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/headshots/headshot-healthcare-executive-01.jpg"
                  alt="Healthcare executive headshot Modesto - Professional medical photography"
                  fill
                  className="object-cover object-[50%_25%]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </SectionReveal>

              {/* Small - Finance CEO */}
              <SectionReveal className="md:col-span-1 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/headshots/headshot-finance-ceo.jpg"
                  alt="Finance CEO headshot Modesto - Executive financial photography"
                  fill
                  className="object-cover object-[50%_25%]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </SectionReveal>

              {/* Small - On-Site Session */}
              <SectionReveal className="md:col-span-1 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/headshots/headshot-kaiser-medical-01.jpg"
                  alt="Kaiser medical professional headshot Modesto - Healthcare photography"
                  fill
                  className="object-cover object-[50%_25%]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </SectionReveal>

              {/* Small - Video Production */}
              <SectionReveal className="md:col-span-1 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/headshots/headshot-financial-advisor-01.jpg"
                  alt="Financial advisor headshot Modesto - Professional business photography"
                  fill
                  className="object-cover object-[50%_25%]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Beyond Headshots — other services, brand-green cards */}
        <section id="beyond-headshots" className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl text-[var(--color-text-dark)] mb-3">
                  Beyond Headshots
                </h2>
                <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
                  Photography and video for everything else your business needs across Modesto and the Central Valley.
                </p>
              </div>
            </SectionReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                  What Central Valley Professionals Say About Working With Us
                </h2>
                <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                  A headshot that finally looks like you. A team photo that shows your culture. Brand imagery that makes the right people take notice. That&apos;s what working together looks like — here&apos;s what clients say.
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
                <a href="https://g.page/r/CdOO4Sj3FR_lEBM/review" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-semibold hover:underline">
                  See our 60+ five-star Google reviews →
                </a>
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Discovery Call CTA #1 - After Portfolio - SB7: Call to Action */}
        <section
          className="py-16 px-8 text-white"
          style={{ background: 'radial-gradient(90% 140% at 50% -30%, rgba(255,255,255,.1), transparent 60%), linear-gradient(160deg, var(--color-primary) 0%, var(--color-primary-dark) 80%)' }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl mb-4">
                Ready for a Headshot You&apos;re Proud Of?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                You'll spend the session with both of us — Alfonso and Niomi. Studio sessions book online in minutes — pick your time and you're set. Prefer to talk it through first? Call us directly and we'll point you to the right session.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/premium-headshots#booking-heading"
                  className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                >
                  Book a Studio Session
                </Link>
                <a
                  href="tel:2093803727"
                  className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                >
                  Call 209-380-3727
                </a>
              </div>
              <p className="text-white/60 text-sm mt-5">In our Modesto studio · pick your favorites before you leave · edited images in your inbox within 48 hours</p>
            </SectionReveal>
          </div>
        </section>

        {/* FAQ Section - AEO */}
        <FAQSection
          faqs={[
            {
              question: 'How much does a professional headshot cost in Modesto?',
              answer: 'Our studio headshot sessions are $150 for the session, plus $150 per image you select. There is no minimum — you only pay for the photos you love. For on-site team photography, we provide custom quotes based on team size. For headshot booth events, pricing is hourly.',
            },
            {
              question: 'Do you travel for on-site photography outside of Modesto?',
              answer: 'Yes. We regularly travel throughout the Central Valley — Stockton, Turlock, Fresno, Sacramento, Merced, and beyond. We bring our full professional studio setup to your office, facility, or event. A travel fee applies for locations outside the immediate Modesto area.',
            },
            {
              question: 'What is the difference between a headshot booth and on-site photography?',
              answer: 'A headshot booth is a high-volume service priced by the hour — ideal for expos, conferences, and company events where the goal is moving many people through quickly. On-site photography is a contracted, per-person service where we spend dedicated time with each individual, providing personal coaching on posing and expression. Both involve us coming to your location with professional equipment.',
            },
            {
              question: 'How quickly will I receive my photos?',
              answer: 'For studio sessions, you review, choose, and purchase your favorite images with us before you leave; the edited finals arrive in your inbox within 48 hours. On-site team photography is delivered the same day. For corporate events with SpotMyPhotos live delivery (full-day bookings), guests can access their photos in real time during the event.',
            },
            {
              question: 'What should I wear to a headshot session?',
              answer: 'We send every client a preparation guide before their session with specific wardrobe recommendations. Generally, solid colors and professional attire photograph best. Bring multiple outfits — sessions include unlimited wardrobe changes at no extra charge. We guide you through everything in real time so you never have to guess.',
            },
          ]}
          heading="Common Questions"
        />

        {/* CTA + Contact */}
        <CTASection
          primaryHref="/premium-headshots#booking-heading"
          primaryLabel="Book a Studio Session"
          subheading="Studio sessions book online in minutes. For team headshot days and custom projects, call us or start with a free discovery call."
        />
      </main>
      </div>
    </>
  );
}
