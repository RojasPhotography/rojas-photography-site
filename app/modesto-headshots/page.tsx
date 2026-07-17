import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Camera, Video, Building2, Users, Star } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import { generateBreadcrumbSchema } from '../lib/schema';

function generateModestoLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://rojasphotography.net/modesto-headshots',
    name: 'Rojas Photography – Modesto Headshots',
    image: 'https://rojasphotography.net/images/headshots/headshot-executive-ceo.jpg',
    description:
      'Professional corporate headshots and photography services in Modesto, CA. Serving Save Mart, Stanislaus County, agricultural businesses, legal professionals, healthcare organizations, and executives across the Central Valley.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Modesto',
      addressRegion: 'CA',
      postalCode: '95350',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Modesto' },
      { '@type': 'City', name: 'Ceres' },
      { '@type': 'City', name: 'Turlock' },
      { '@type': 'City', name: 'Riverbank' },
      { '@type': 'City', name: 'Oakdale' },
    ],
    telephone: '+1-209-380-3727',
    email: 'alfonso@rojasphotography.net',
    url: 'https://rojasphotography.net/modesto-headshots',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '60',
    },
  };
}

function generateModestoServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Professional Headshots in Modesto, CA',
    description:
      'Professional corporate headshots for Modesto executives, Save Mart professionals, Stanislaus County employees, agricultural business leaders, legal professionals, healthcare professionals, and entrepreneurs across the Central Valley.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rojas Photography',
      telephone: '+1-209-380-3727',
      url: 'https://rojasphotography.net',
    },
    areaServed: {
      '@type': 'City',
      name: 'Modesto',
      containedInPlace: {
        '@type': 'State',
        name: 'California',
      },
    },
    url: 'https://rojasphotography.net/modesto-headshots',
    image: 'https://rojasphotography.net/images/headshots/headshot-executive-ceo.jpg',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '150',
      description: 'Professional headshot session fee. Image selection priced separately.',
    },
  };
}

function generateModestoFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is Rojas Photography located in Modesto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rojas Photography is based in Modesto, CA. Our professional studio is here in the Central Valley — no travel fee, no commute. We serve Modesto professionals, businesses, healthcare organizations, legal firms, agricultural companies, and Stanislaus County employees. We also travel throughout California for on-site team photography.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much do professional headshots cost in Modesto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Professional headshot sessions at our Modesto studio are $150, plus $150 per image you select. You only pay for the images you love — no packages, no minimums, no forced purchases. For teams and on-site photography, we provide customized quotes based on your team size and location. Contact us for a personalized quote.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a headshot session take in Modesto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sessions can run up to 3 hours — there is no hard time limit, and we work at your pace. We can move faster if your schedule requires it. Sessions include unlimited wardrobe changes, real-time coaching on posing and expression, and immediate image review. Your professionally edited images are delivered within 48 hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer on-site headshot photography for Modesto businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We bring our full professional studio setup — lighting, backdrop, camera equipment — directly to your Modesto office, medical facility, law firm, or business location. On-site photography is ideal for teams, avoiding disruption to your workday, and capturing staff in their professional environment. We have photographed teams for Save Mart, Comcast, Valley First Credit Union, and many other Central Valley organizations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do Modesto professionals choose Rojas Photography?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are Modesto locals — this is our home and our community. With 15+ years of corporate leadership experience, we understand the professional culture of the Central Valley. We have photographed 500+ professionals across healthcare, legal, agriculture, finance, and corporate sectors. Our guided approach makes even camera-shy professionals look confident and authentic. Images delivered within 48 hours.',
        },
      },
    ],
  };
}

export const metadata: Metadata = {
  title: 'Professional Headshots Modesto CA | Rojas Photography',
  description:
    'Modesto\'s top corporate headshot photographer. Studio sessions & on-site team photography for executives, healthcare, legal & business professionals. $150 session. Book today.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/modesto-headshots',
  },
  openGraph: {
    title: 'Professional Headshots in Modesto, CA | Rojas Photography',
    description:
      'Corporate headshots for Modesto professionals — executives, healthcare, legal, agricultural & business teams. Studio or on-site. Delivered in 48 hours.',
    url: 'https://rojasphotography.net/modesto-headshots',
    type: 'website',
    images: [
      {
        url: '/images/headshots/headshot-executive-ceo.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional headshots Modesto CA - Rojas Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Headshots in Modesto, CA | Rojas Photography',
    description:
      'Corporate headshots for Modesto professionals. Studio sessions & on-site team photography. $150 session fee. 48-hour delivery.',
    images: ['/images/headshots/headshot-executive-ceo.jpg'],
  },
};

export default function ModestoHeadshotsPage() {
  return (
    <>
      <SchemaScript schema={generateModestoLocalBusinessSchema()} />
      <SchemaScript schema={generateModestoServiceSchema()} />
      <SchemaScript schema={generateModestoFAQSchema()} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Modesto Headshots', url: 'https://rojasphotography.net/modesto-headshots' },
      ])} />

      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/Hero Image1.jpg"
          title="Professional Headshots in Modesto, CA"
          tag="Rojas Photography — Locally Based, Professionally Driven"
          fullHeight={false}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/premium-headshots#booking-heading"
              className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Book Your Session
            </Link>
            <a
              href="tel:2093803727"
              className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Call 209-380-3727
            </a>
          </div>
        </HeroSection>

        <main id="main-content">

          {/* SB7: Character with a Problem */}
          <section className="py-20 md:py-28 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6 text-center">
                  Modesto Professionals Deserve a Headshot That Actually Looks Like Them at Their Best
                </h2>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>
                    You know the feeling — you open LinkedIn, see your profile photo, and wince. It&apos;s years old. Or it was taken on a phone in bad lighting. Or it looks nothing like how you actually carry yourself in a boardroom, a courtroom, or a client meeting.
                  </p>
                  <p>
                    The problem isn&apos;t how you look. It&apos;s that nobody coached you. Nobody controlled the lighting. Nobody told you how to hold your shoulders or where to look or how to get that natural expression that actually builds trust instead of just filling a box on your website.
                  </p>
                  <p>
                    Studies show people form a first impression in as little as 100 milliseconds — and in the Central Valley, where relationships drive business, your headshot is often that first impression before anyone shakes your hand. It should do more than exist — it should work for you.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Stats Bar */}
          <SectionReveal>
            <section className="py-12 px-8 bg-[var(--color-bg-warm)] border-y border-gray-100">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
                <div>
                  <p className="text-3xl font-bold text-[var(--color-primary)]">500+</p>
                  <p className="text-sm text-[var(--color-text-muted)]">Professionals Photographed</p>
                </div>
                <div className="hidden md:block w-px h-10 bg-gray-200" />
                <div>
                  <p className="text-3xl font-bold text-[var(--color-primary)]">60+</p>
                  <p className="text-sm text-[var(--color-text-muted)]">Five-Star Reviews</p>
                </div>
                <div className="hidden md:block w-px h-10 bg-gray-200" />
                <div>
                  <p className="text-3xl font-bold text-[var(--color-primary)]">48 hrs</p>
                  <p className="text-sm text-[var(--color-text-muted)]">Delivery Turnaround</p>
                </div>
                <div className="hidden md:block w-px h-10 bg-gray-200" />
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Trusted by</p>
                  <p className="font-semibold text-[var(--color-text-dark)]">
                    Save Mart &middot; Comcast &middot; Valley First CU
                  </p>
                </div>
              </div>
            </section>
          </SectionReveal>

          {/* SB7: Guide — Empathy + Authority */}
          <section className="py-20 md:py-28 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-14 items-center">
                <SectionReveal>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/headshots/headshot-executive-ceo.jpg"
                      alt="Professional executive headshot — Modesto CA — Rojas Photography"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="space-y-5">
                    <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)]">
                      We Know What Modesto Professionals Are Up Against
                    </h2>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      Most people come to me not because they want a photo — but because they&apos;re embarrassed by the one they have. Outdated. Phone quality. Or just wrong. It doesn&apos;t look like how you carry yourself in a room, and you know it.
                    </p>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      We&apos;re Alfonso and Niomi Rojas — Modesto-based photographers with 15+ years of corporate leadership experience working alongside CEOs, CFOs, attorneys, and healthcare executives. I built this business right here in the Central Valley because we understand the community, the professional culture, and the relationships that drive it.
                    </p>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      That&apos;s why we guide every session with real-time coaching on posing, expression, and angles — because the right headshot isn&apos;t just taken, it&apos;s directed.
                    </p>
                    <Link
                      href="/about-rojas-photography"
                      className="inline-block text-[var(--color-primary)] font-semibold hover:underline"
                    >
                      Learn more about me →
                    </Link>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* SB7: Plan */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-4">
                  Three Steps to a Headshot That Works for You
                </h2>
                <p className="text-center text-[var(--color-text-body)] text-lg mb-14 max-w-2xl mx-auto">
                  No guessing. No awkward posing. No wondering if it turned out okay. Here&apos;s exactly how it works.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Book Your Session',
                    desc: 'Book online at your convenience — no back-and-forth needed. Once booked, you\'ll receive a preparation guide so you know exactly what to wear, how to prep, and what to expect.',
                  },
                  {
                    step: '02',
                    title: 'I Guide You Through It',
                    desc: 'You are never alone in this process. We review what I\'m capturing with you in real time, talk through what\'s working and what to adjust, and guide your posing and expression throughout. Most sessions run 60–90 minutes with unlimited wardrobe changes.',
                  },
                  {
                    step: '03',
                    title: 'Receive Your Images in 48 Hours',
                    desc: 'You select and purchase your favorite images with us in the studio — $150 per image, no minimum. Professionally edited, color-corrected finals delivered to your inbox within 48 hours.',
                  },
                ].map((item) => (
                  <SectionReveal key={item.step}>
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                      <span className="text-5xl font-bold text-[var(--color-primary-light)]">{item.step}</span>
                      <h3 className="text-xl text-[var(--color-text-dark)] mt-4 mb-3">{item.title}</h3>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
              <SectionReveal>
                <div className="text-center mt-12">
                  <Link
                    href="/premium-headshots#booking-heading"
                    className="btn-primary px-10 py-4 text-lg font-semibold rounded-full inline-block"
                  >
                    Book Your Modesto Session
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Portfolio Gallery */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center mb-4 text-[var(--color-text-dark)]">
                  Headshots for Modesto Professionals
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-12 text-lg max-w-2xl mx-auto">
                  Attorneys, executives, healthcare professionals, financial advisors, real estate agents — every session is guided, every image is delivered ready to use.
                </p>
              </SectionReveal>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { src: '/images/headshots/headshot-attorney-01.jpg', alt: 'Attorney headshot — Modesto CA — Rojas Photography' },
                  { src: '/images/headshots/headshot-healthcare-executive-01.jpg', alt: 'Healthcare executive headshot — Modesto CA' },
                  { src: '/images/headshots/headshot-finance-ceo.jpg', alt: 'Finance CEO headshot — Modesto CA — Rojas Photography' },
                  { src: '/images/headshots/headshot-comcast-executive.jpg', alt: 'Corporate executive headshot — Modesto CA' },
                  { src: '/images/headshots/headshot-realtor-01.jpg', alt: 'Real estate professional headshot — Modesto CA' },
                  { src: '/images/headshots/headshot-financial-advisor-01.jpg', alt: 'Financial advisor headshot — Modesto CA — Rojas Photography' },
                ].map((img) => (
                  <SectionReveal
                    key={img.src}
                    className="img-hover-zoom rounded-xl overflow-hidden aspect-square relative"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover object-top"
                    />
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Who we Serve */}
          <section className="py-20 md:py-28 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-4">
                  Who we Photograph in Modesto
                </h2>
                <p className="text-center text-[var(--color-text-body)] text-lg mb-14 max-w-2xl mx-auto">
                  From downtown law firms to agricultural businesses, healthcare organizations to financial services — we know the Modesto professional community.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Building2,
                    title: 'Corporate Executives',
                    desc: 'CEOs, CFOs, VPs, and directors who need imagery that reflects their leadership. We understand C-suite professionals and how to capture authority without losing authenticity.',
                  },
                  {
                    icon: Users,
                    title: 'Healthcare Professionals',
                    desc: 'Healthcare professionals at Memorial Medical Center, Doctors Medical Center, and organizations across Stanislaus County. Credibility matters in healthcare — your headshot should reflect that.',
                  },
                  {
                    icon: Camera,
                    title: 'Legal Professionals',
                    desc: 'Attorneys, partners, and legal staff who need authoritative, professional imagery for firm websites, directories, and client-facing materials. First impressions in law are everything.',
                  },
                  {
                    icon: Star,
                    title: 'Agricultural & Business Leaders',
                    desc: 'The Central Valley runs on agriculture and the businesses that support it. We work with founders, owners, and executives across Modesto\'s agricultural and business community.',
                  },
                  {
                    icon: Video,
                    title: 'Financial & Real Estate Professionals',
                    desc: 'Financial advisors, CPAs, mortgage lenders, and real estate agents who need headshots that build trust with clients before the first meeting. A professional image drives referrals.',
                  },
                  {
                    icon: Users,
                    title: 'Government & Nonprofit Leaders',
                    desc: 'Stanislaus County employees, nonprofit directors, and community leaders who represent organizations and need imagery that reflects their role and mission.',
                  },
                ].map((item) => (
                  <SectionReveal key={item.title}>
                    <div className="bg-white rounded-2xl p-8 flex flex-col h-full border border-gray-100 hover:border-[var(--color-primary)] transition-colors duration-300">
                      <item.icon size={32} className="text-[var(--color-primary)] mb-4" aria-hidden="true" />
                      <h3 className="text-lg text-[var(--color-text-dark)] mb-3">{item.title}</h3>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed flex-1">{item.desc}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-4">
                  Photography Services in Modesto
                </h2>
                <p className="text-center text-[var(--color-text-body)] text-lg mb-14 max-w-2xl mx-auto">
                  Beyond headshots — full-service visual content for Modesto businesses, organizations, and professionals.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SectionReveal>
                  <Link href="/premium-headshots" className="block group">
                    <div className="relative h-[360px] rounded-xl overflow-hidden hover:shadow-2xl transition-all">
                      <Image src="/images/headshots/headshot-executive-ceo.jpg" alt="Premium studio headshots Modesto" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
                      <div className="relative z-10 p-7 h-full flex flex-col justify-end">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm">
                          <Camera className="text-white" size={22} />
                        </div>
                        <h3 className="text-xl text-white mb-2">Premium Studio Headshots</h3>
                        <p className="text-white/85 text-sm leading-relaxed mb-3">Individual sessions at my Modesto studio. Guided posing, unlimited wardrobe changes, 48-hour delivery. $150 session + $150/image.</p>
                        <span className="text-white text-sm font-semibold group-hover:underline">Learn more →</span>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
                <SectionReveal>
                  <Link href="/on-site-photography" className="block group">
                    <div className="relative h-[360px] rounded-xl overflow-hidden hover:shadow-2xl transition-all">
                      <Image src="/images/BB Individual Headshot Session.png" alt="On-site team photography Modesto" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
                      <div className="relative z-10 p-7 h-full flex flex-col justify-end">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm">
                          <Users className="text-white" size={22} />
                        </div>
                        <h3 className="text-xl text-white mb-2">On-Site Team Photography</h3>
                        <p className="text-white/85 text-sm leading-relaxed mb-3">We bring the studio to your Modesto office or facility. Efficient team headshots without pulling staff away from their day. Custom pricing.</p>
                        <span className="text-white text-sm font-semibold group-hover:underline">Learn more →</span>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
                <SectionReveal>
                  <Link href="/headshot-booth" className="block group">
                    <div className="relative h-[360px] rounded-xl overflow-hidden hover:shadow-2xl transition-all">
                      <Image src="/images/kaiser-bts-headshots1.jpeg" alt="Headshot booth Modesto events" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
                      <div className="relative z-10 p-7 h-full flex flex-col justify-end">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm">
                          <Star className="text-white" size={22} />
                        </div>
                        <h3 className="text-xl text-white mb-2">Headshot Booth</h3>
                        <p className="text-white/85 text-sm leading-relaxed mb-3">We set up at your event or office and move attendees through quickly. High-volume, polished, and priced by the hour.</p>
                        <span className="text-white text-sm font-semibold group-hover:underline">Learn more →</span>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
                <SectionReveal>
                  <Link href="/commercial" className="block group">
                    <div className="relative h-[360px] rounded-xl overflow-hidden hover:shadow-2xl transition-all">
                      <Image src="/images/DoctorOffice 4.jpg" alt="Commercial photography Modesto" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
                      <div className="relative z-10 p-7 h-full flex flex-col justify-end">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm">
                          <Building2 className="text-white" size={22} />
                        </div>
                        <h3 className="text-xl text-white mb-2">Commercial Photography</h3>
                        <p className="text-white/85 text-sm leading-relaxed mb-3">Brand imagery, facility photography, product shots, and marketing visuals for Modesto businesses. Delivered in 48–72 hours.</p>
                        <span className="text-white text-sm font-semibold group-hover:underline">Learn more →</span>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
                <SectionReveal>
                  <Link href="/video" className="block group">
                    <div className="relative h-[360px] rounded-xl overflow-hidden hover:shadow-2xl transition-all">
                      <Image src="/images/BBSI-Corp-Video.jpg" alt="Video production Modesto" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
                      <div className="relative z-10 p-7 h-full flex flex-col justify-end">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm">
                          <Video className="text-white" size={22} />
                        </div>
                        <h3 className="text-xl text-white mb-2">Video Production</h3>
                        <p className="text-white/85 text-sm leading-relaxed mb-3">Brand videos, testimonials, culture content, and FAA Part 107 certified drone footage for Modesto businesses.</p>
                        <span className="text-white text-sm font-semibold group-hover:underline">Learn more →</span>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
                <SectionReveal>
                  <Link href="/event-photography" className="block group">
                    <div className="relative h-[360px] rounded-xl overflow-hidden hover:shadow-2xl transition-all">
                      <Image src="/images/CLA AM 25 335.jpg" alt="Corporate event photography Modesto" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
                      <div className="relative z-10 p-7 h-full flex flex-col justify-end">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm">
                          <Camera className="text-white" size={22} />
                        </div>
                        <h3 className="text-xl text-white mb-2">Corporate Event Photography</h3>
                        <p className="text-white/85 text-sm leading-relaxed mb-3">Professional coverage for Modesto conferences, galas, and fundraisers. Real-time delivery via SpotMyPhotos on full-day bookings.</p>
                        <span className="text-white text-sm font-semibold group-hover:underline">Learn more →</span>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* SB7: Avoid Failure */}
          <section className="py-20 px-8 bg-[var(--color-primary-dark)] text-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center mb-8">
                  A Weak Headshot Costs You More Than a Session
                </h2>
                <div className="grid md:grid-cols-2 gap-8 text-white/90 leading-relaxed">
                  <p>
                    In a market like Modesto — where relationships are everything and word-of-mouth drives business — the way you present yourself online is your first handshake. A blurry, outdated, or poorly lit photo signals that you don&apos;t take your professional image seriously. Whether it&apos;s fair or not, people make judgments before they ever reach out.
                  </p>
                  <p>
                    Clients hesitate. Referrals go elsewhere. Opportunities pass to the person who looks the part. A professional headshot isn&apos;t vanity — it&apos;s a business asset that works for you 24 hours a day on LinkedIn, your firm&apos;s website, Google Business Profile, speaking applications, and every platform where potential clients decide whether to trust you.
                  </p>
                </div>
                <div className="text-center mt-12">
                  <Link
                    href="/premium-headshots#booking-heading"
                    className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                  >
                    Book Your Session
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* SB7: Success Vision */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto text-center">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">
                  Imagine Opening LinkedIn and Actually Feeling Proud of Your Photo
                </h2>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed max-w-2xl mx-auto">
                  Imagine a headshot that stops people mid-scroll. One that makes clients feel confident before they ever call you. One that looks exactly like how you carry yourself when you&apos;re at your best — in the boardroom, in the courtroom, in the exam room. That&apos;s what we work toward in every session.
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center mb-16 text-[var(--color-text-dark)]">
                  What Modesto Professionals Say
                </h2>
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
                    quote="Alfonso and Niomi create a comfortable environment that puts you at ease immediately. The professional headshots turned out beautifully — exactly what I needed for my business."
                  />
                </SectionReveal>
                <SectionReveal>
                  <TestimonialCard
                    name="Teresa Tolentino"
                    role="Save Mart Companies"
                    quote="Alfonso and Niomi are incredibly professional, making everyone involved in the project feel relaxed. Even with a same-day turnaround, they deliver every time. I highly recommend Rojas Photography."
                  />
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection
            faqs={[
              {
                question: 'Where is Rojas Photography located in Modesto?',
                answer:
                  'I\'m based right here in Modesto, CA. Our professional studio is in the Central Valley — no travel fee, no commute. We serve Modesto professionals, businesses, healthcare organizations, legal firms, agricultural companies, and Stanislaus County employees. I also travel throughout California for on-site team photography.',
              },
              {
                question: 'How much do professional headshots cost in Modesto?',
                answer:
                  'Professional headshot sessions at my Modesto studio are $150, plus $150 per image you select. You only pay for the images you love — no packages, no minimums, no forced purchases. For teams and on-site photography, we provide customized quotes based on your team size and location. Contact me for a personalized quote.',
              },
              {
                question: 'How long does a headshot session take?',
                answer:
                  'Sessions can run up to 3 hours — there is no hard time limit, and we work at your pace. We can move faster if your schedule requires it. Sessions include unlimited wardrobe changes, real-time coaching on posing and expression, and immediate image review. Your professionally edited images are delivered within 48 hours.',
              },
              {
                question: 'Do you offer on-site headshot photography for Modesto businesses?',
                answer:
                  'Yes. We bring our full professional studio setup — lighting, backdrop, camera equipment — directly to your Modesto office, medical facility, law firm, or business location. On-site photography is ideal for teams, avoiding disruption to your workday, and capturing staff in their professional environment. We\'ve photographed teams for Save Mart, Comcast, Valley First Credit Union, and many other Central Valley organizations.',
              },
              {
                question: 'Why do Modesto professionals choose Rojas Photography?',
                answer:
                  'I\'m a Modesto local — this is my home and my community. With 15+ years of corporate leadership experience, we understand the professional culture of the Central Valley. We\'ve photographed 500+ professionals across healthcare, legal, agriculture, finance, and corporate sectors. Our guided approach makes even camera-shy professionals look confident and authentic. Images delivered within 48 hours.',
              },
            ]}
            heading="Modesto Headshot Questions Answered"
          />

          <CTASection
            heading="Ready to Book Your Modesto Headshot Session?"
            subheading="Studio sessions in Modesto or on-site at your location. 48-hour delivery. Trusted by Modesto's top professionals."
            primaryLabel="Book Your Session"
            primaryHref="/premium-headshots#booking-heading"
            showContactInfo
          />

        </main>
      </div>
    </>
  );
}
