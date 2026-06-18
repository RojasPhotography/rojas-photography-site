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

const faqs = [
  {
    question: 'Do you offer professional headshots in Tracy, CA?',
    answer:
      'Yes! We serve Tracy professionals including logistics and operations leaders, Sutter Tracy Community Hospital healthcare teams, real estate agents, financial professionals, and business owners across San Joaquin County. We offer both in-studio sessions at our Modesto studio (about 40 minutes from Tracy) and on-site photography at your Tracy office, distribution center, or facility.',
  },
  {
    question: 'How far is your studio from Tracy?',
    answer:
      'Our professional studio is in Modesto, about 40 minutes from Tracy via Highway 120 and I-5. We also bring our full portable professional studio — lighting, backdrops, and all equipment — directly to your Tracy office, warehouse, conference room, or breakroom. The same high-end results, in the comfort of your location. A travel fee applies for on-site visits.',
  },
  {
    question: 'What do Tracy headshot sessions cost?',
    answer:
      'Professional headshot sessions are $150, plus $150 per image you select. You only pay for the images you love — no package minimums, no forced purchases. For Tracy teams and organizations needing on-site photography, we provide customized pricing based on your team size and location. Contact us for a personalized quote.',
  },
  {
    question: 'Do you photograph teams at Tracy distribution centers and offices?',
    answer:
      'Absolutely. Tracy is a major logistics and distribution hub, and we regularly bring our full professional studio on-site to offices, warehouses, and facilities — photographing entire teams efficiently without disrupting operations. We set up, coach each person, and break down completely, so your staff step away for only a few minutes. Individual headshots, team portraits, and group photos are all available.',
  },
  {
    question: 'Why do Tracy professionals choose Rojas Photography?',
    answer:
      'Tracy professionals choose us because we understand the San Joaquin County and Central Valley business community. With 15+ years of corporate leadership experience and 500+ executives photographed, we bring professionalism and expertise to every session. Our guided approach eliminates the stress of professional photography, helping operations leaders, healthcare workers, real estate agents, and business owners present themselves with confidence on LinkedIn, their websites, and all professional materials.',
  },
];

function generateTracySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://rojasphotography.net/tracy-headshots',
    name: 'Rojas Photography – Tracy Headshots',
    image: 'https://rojasphotography.net/images/headshots/headshot-executive-ceo.jpg',
    description:
      'Professional corporate headshots and photography services in Tracy, CA. Serving logistics and operations leaders, Sutter Tracy Community Hospital teams, real estate agents, and business professionals across San Joaquin County.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Modesto',
      addressRegion: 'CA',
      postalCode: '95350',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Tracy' },
      { '@type': 'City', name: 'Mountain House' },
      { '@type': 'City', name: 'Lathrop' },
      { '@type': 'City', name: 'Manteca' },
      { '@type': 'City', name: 'Modesto' },
    ],
    telephone: '+1-209-380-3727',
    email: 'alfonso@rojasphotography.net',
    url: 'https://rojasphotography.net/tracy-headshots',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '60',
    },
  };
}

function generateTracyServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Professional Headshots in Tracy, CA',
    description:
      'Professional corporate headshots for Tracy logistics and operations leaders, Sutter Tracy Community Hospital teams, real estate agents, and business professionals across San Joaquin County.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rojas Photography',
      telephone: '+1-209-380-3727',
      url: 'https://rojasphotography.net',
    },
    areaServed: {
      '@type': 'City',
      name: 'Tracy',
      containedInPlace: {
        '@type': 'State',
        name: 'California',
      },
    },
    url: 'https://rojasphotography.net/tracy-headshots',
    image: 'https://rojasphotography.net/images/headshots/headshot-executive-ceo.jpg',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '150',
      description: 'Professional headshot session fee. Image selection priced separately.',
    },
  };
}

function generateTracyFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export const metadata: Metadata = {
  title: 'Professional Headshots Tracy CA | Rojas Photography',
  description:
    'Professional headshots in Tracy, CA for logistics leaders, healthcare teams, realtors, and business professionals. On-site or in-studio, 48-hour delivery. San Joaquin County.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/tracy-headshots',
  },
  openGraph: {
    title: 'Professional Headshots in Tracy, CA | Rojas Photography',
    description:
      'Polished corporate headshots for Tracy professionals — logistics and operations leaders, healthcare teams, real estate agents, and business owners. On-site or in-studio.',
    url: 'https://rojasphotography.net/tracy-headshots',
    type: 'website',
    images: [
      {
        url: '/images/headshots/headshot-executive-ceo.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional headshots Tracy CA - Rojas Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Headshots in Tracy, CA | Rojas Photography',
    description:
      'Professional headshots for Tracy professionals — logistics, healthcare, real estate, and business teams. On-site or in our Modesto studio, ~40 minutes away.',
    images: ['/images/headshots/headshot-executive-ceo.jpg'],
  },
};

export default function TracyHeadshotsPage() {
  return (
    <>
      <SchemaScript schema={generateTracySchema()} />
      <SchemaScript schema={generateTracyServiceSchema()} />
      <SchemaScript schema={generateTracyFAQSchema()} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Tracy Headshots', url: 'https://rojasphotography.net/tracy-headshots' },
      ])} />
      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/Hero Image1.jpg"
          title="Professional Headshots in Tracy, CA"
          tag="Serving Tracy & San Joaquin County"
          fullHeight={false}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/discovery-call"
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
          {/* Intro Section */}
          <section className="py-20 md:py-28 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6 text-center">
                  Corporate Photography Serving Tracy &amp; San Joaquin County
                </h2>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-6 text-center">
                  Tracy&apos;s economy runs on logistics, healthcare, and a fast-growing community of professionals and Bay Area commuters. Whether you&apos;re an operations leader along the distribution corridor, a clinician at Sutter Tracy Community Hospital, a real estate agent in one of the Valley&apos;s hottest markets, or a local business owner — your professional image matters.
                </p>
                <p className="text-[var(--color-text-body)] leading-relaxed text-center">
                  Rojas Photography serves Tracy with professional headshots, on-site team photography, commercial photography, video production, and event coverage. Visit our Modesto studio (about 40 minutes from Tracy) for premium studio sessions — or we bring our full setup to your Tracy office, warehouse, or facility.
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* Stats Bar */}
          <SectionReveal>
            <section className="py-12 px-8 bg-[var(--color-bg-warm)] border-y border-gray-100">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
                <div>
                  <p className="text-3xl font-bold text-[var(--color-primary)]">500+</p>
                  <p className="text-sm text-[var(--color-text-muted)]">Executives Photographed</p>
                </div>
                <div className="hidden md:block w-px h-10 bg-gray-200" />
                <div>
                  <p className="text-3xl font-bold text-[var(--color-primary)]">60+</p>
                  <p className="text-sm text-[var(--color-text-muted)]">Five-Star Reviews</p>
                </div>
                <div className="hidden md:block w-px h-10 bg-gray-200" />
                <div>
                  <p className="text-3xl font-bold text-[var(--color-primary)]">15+</p>
                  <p className="text-sm text-[var(--color-text-muted)]">Years Experience</p>
                </div>
                <div className="hidden md:block w-px h-10 bg-gray-200" />
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Trusted by</p>
                  <p className="font-semibold text-[var(--color-text-dark)]">
                    Comcast &middot; Save Mart &middot; CalPERS &middot; CLA
                  </p>
                </div>
              </div>
            </section>
          </SectionReveal>

          {/* Services Section */}
          <section className="py-20 md:py-28 px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
                    Photography Services Available in Tracy
                  </h2>
                  <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                    Full-service corporate photography for Tracy professionals — from individual headshots to on-site team days at offices, warehouses, and facilities.
                  </p>
                </div>
              </SectionReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Camera, title: 'In-Studio Headshots', desc: 'Professional headshot sessions at our Modesto studio, about 40 minutes from Tracy. Premium lighting, guided posing, real-time review, and 48-hour delivery.', price: '$150 session + $150/image', href: '/premium-headshots', img: '/images/headshots/headshot-ceo-nutrition.jpg', alt: 'Professional headshot session' },
                  { icon: Users, title: 'On-Site Team Photography', desc: 'We bring our full studio to your Tracy office, distribution center, or facility. Photograph your full team efficiently without disrupting operations. Travel fee applies.', price: 'Custom pricing', href: '/on-site-photography', img: '/images/BB Individual Headshot Session.png', alt: 'On-site team headshot photography' },
                  { icon: Building2, title: 'Commercial Photography', desc: 'Brand imagery, facility and warehouse photography, product shots, and marketing visuals for Tracy businesses, logistics companies, and healthcare facilities.', price: 'Custom pricing', href: '/commercial', img: '/images/DoctorOffice 4.jpg', alt: 'Commercial photography for businesses' },
                  { icon: Video, title: 'Video Production', desc: 'Corporate video content for Tracy organizations — brand videos, recruiting and training content, testimonials, and FAA Part 107 certified drone footage.', price: 'Custom pricing', href: '/video', img: '/images/BBSI-Corp-Video.jpg', alt: 'Corporate video production' },
                  { icon: Star, title: 'Event Photography', desc: 'Professional coverage for Tracy corporate events, conferences, grand openings, award ceremonies, and business gatherings. 24-48 hour turnaround.', price: 'Custom pricing', href: '/event-photography', img: '/images/CLA AM 25 335.jpg', alt: 'Corporate event photography coverage' },
                  { icon: Camera, title: 'Headshot Booth', desc: 'We set up a professional headshot station at your Tracy event or facility. High-volume, polished, and priced by the hour.', price: 'Priced by the hour', href: '/headshot-booth', img: '/images/kaiser-bts-headshots1.jpeg', alt: 'Headshot booth at corporate event' },
                ].map((service) => (
                  <SectionReveal key={service.title}>
                    <Link href={service.href} aria-label={`Learn more about ${service.title}`} className="block group">
                      <div className="relative h-[380px] rounded-xl overflow-hidden hover:shadow-2xl transition-all">
                        <Image src={service.img} alt={service.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
                        <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform backdrop-blur-sm">
                            <service.icon className="text-white" size={24} aria-hidden="true" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                          <p className="text-white/90 text-sm leading-relaxed mb-3">{service.desc}</p>
                          <p className="text-white/70 text-xs mb-3">{service.price}</p>
                          <span className="text-white font-semibold text-sm group-hover:underline">Learn More →</span>
                        </div>
                      </div>
                    </Link>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Why Tracy Professionals Choose Us */}
          <section className="py-20 md:py-28 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
                    Why Tracy Professionals Choose Us
                  </h2>
                </div>
              </SectionReveal>

              <div className="grid md:grid-cols-2 gap-10">
                {[
                  {
                    title: 'We Understand Tracy\'s Business Community',
                    desc: 'From the logistics and distribution companies along the I-205 and I-5 corridor to Sutter Tracy Community Hospital teams, real estate professionals, and local business owners — we understand what credibility looks like for Tracy professionals. Our experience across industries shows in every session.',
                  },
                  {
                    title: 'Premium Studio or We Come to You',
                    desc: 'Our professional studio in Modesto is about 40 minutes from Tracy via Highway 120. For teams, we bring our full studio to your Tracy office, warehouse, hospital, or business location — efficient team photography without disrupting your operations.',
                  },
                  {
                    title: 'Corporate Experience That Shows',
                    desc: 'We\'re Alfonso and Niomi Rojas, and our 15+ years of corporate leadership experience means we understand professional branding, executive presence, and what makes a headshot truly effective. We\'ve photographed 500+ executives and professionals across industries — from logistics and healthcare to finance and real estate.',
                  },
                  {
                    title: 'Fast Turnaround for Busy Professionals',
                    desc: 'Most Tracy clients receive professionally edited headshots within 48 hours. On-site team photography delivers in 24 hours. Professional imagery that builds credibility and trust, delivered when you need it for your website, LinkedIn, or marketing materials.',
                  },
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
            </div>
          </section>

          {/* Portfolio Preview */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-text-dark)]">
                  Our Work
                </h2>
              </SectionReveal>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { src: '/images/headshots/headshot-executive-ceo.jpg', alt: 'Professional headshot - Tracy executive' },
                  { src: '/images/Gina-0026 (1).jpg', alt: 'Business headshot - Tracy professional woman' },
                  { src: '/images/Miguel-(2 of 6) (1).jpg', alt: 'Corporate headshot - Tracy executive man' },
                ].map((img) => (
                  <SectionReveal key={img.src} className="img-hover-zoom rounded-xl overflow-hidden aspect-[3/4] relative">
                    <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* SB7: Success Vision */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
                  Imagine Updating Your Profile and Finally Feeling Like It Represents You
                </h2>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed max-w-2xl mx-auto">
                  Imagine a headshot on your company directory, LinkedIn, or real estate listing that actually looks like the professional you&apos;ve worked hard to become. That&apos;s what we deliver — in a session that feels more like a conversation than a photo shoot.
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">
                  What Clients Say
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
            </div>
          </section>

          {/* FAQ */}
          <FAQSection faqs={faqs} heading="Tracy Headshot Questions Answered" />

          <CTASection
            heading="Ready to Book Your Tracy Headshot Session?"
            subheading="Join 500+ Central Valley professionals who trust Rojas Photography. In-studio in Modesto (about 40 minutes away) or on-site at your Tracy location."
          />
        </main>
      </div>
    </>
  );
}
