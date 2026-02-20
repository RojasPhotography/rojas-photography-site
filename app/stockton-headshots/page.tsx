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

function generateStocktonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://rojasphotography.net/stockton-headshots',
    name: 'Rojas Photography – Stockton Headshots',
    image: 'https://rojasphotography.net/images/Alfonso+Niomi-0026.jpg',
    description:
      'Professional corporate headshots and photography services in Stockton, CA. Serving executives, attorneys, and business professionals across San Joaquin County.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Modesto',
      addressRegion: 'CA',
      postalCode: '95350',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Stockton' },
      { '@type': 'City', name: 'Modesto' },
      { '@type': 'City', name: 'Lodi' },
      { '@type': 'City', name: 'Tracy' },
      { '@type': 'City', name: 'Manteca' },
    ],
    telephone: '+1-209-380-3727',
    email: 'alfonso@rojasphotography.net',
    url: 'https://rojasphotography.net/stockton-headshots',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '50',
    },
  };
}

function generateStocktonServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Professional Headshots in Stockton, CA',
    description:
      'Professional corporate headshots and photography services for executives, attorneys, and business professionals in Stockton and San Joaquin County.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rojas Photography',
      telephone: '+1-209-380-3727',
      url: 'https://rojasphotography.net',
    },
    areaServed: {
      '@type': 'City',
      name: 'Stockton',
      containedInPlace: {
        '@type': 'State',
        name: 'California',
      },
    },
    url: 'https://rojasphotography.net/stockton-headshots',
    image: 'https://rojasphotography.net/images/Gina-0026 (1).jpg',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '150',
      description: 'Professional headshot session fee. Image selection priced separately.',
    },
  };
}

function generateStocktonFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you offer professional headshots in Stockton, CA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We regularly serve business professionals and executives across Stockton and San Joaquin County. We offer both in-studio sessions at our Modesto studio (40 minutes from Stockton) and on-site photography at your Stockton office or business location. Most Stockton clients choose the in-studio option for the best quality results.',
        },
      },
      {
        '@type': 'Question',
        name: 'How far is your studio from Stockton?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our studio is located in Modesto, approximately 35-40 minutes from downtown Stockton via Highway 99. Many Stockton clients make the short drive for our professional studio environment with controlled lighting, professional backdrops, and a comfortable setup. We are also happy to travel to your Stockton location for on-site sessions — a travel fee applies. Contact us and we will build a plan that works for you.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do Stockton headshot sessions cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Professional headshot sessions are $150, plus $150 per image you select. You only pay for the images you love — no package minimums, no pressure. For Stockton teams needing on-site photography, pricing is customized based on your needs. Contact us for a personalized quote.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you photograph Stockton corporate events and teams?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! We serve Stockton businesses across all industries — healthcare, legal, financial services, and corporate teams throughout San Joaquin County. Our on-site photography brings our complete studio setup to your Stockton location — professional lighting, cameras, and backdrops — so your full team gets polished headshots without disrupting the workday. Edited images delivered within 24 hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do Stockton professionals choose Rojas Photography?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stockton professionals choose Rojas Photography because we understand business. With 15+ years of corporate leadership experience, we know what executives, attorneys, healthcare professionals, and business leaders need from their professional imagery. We have photographed 500+ executives across the Central Valley and maintain 50+ five-star reviews. Our guided sessions eliminate the awkwardness of professional photos, helping you look confident and authentic on LinkedIn, your company website, and all professional materials.',
        },
      },
    ],
  };
}

export const metadata: Metadata = {
  title: 'Professional Headshots Stockton CA | Rojas Photography',
  description:
    'Professional headshots in Stockton, CA for executives, attorneys & business teams. Serving San Joaquin County. $150 session fee. Book today.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/stockton-headshots',
  },
  openGraph: {
    title: 'Professional Headshots in Stockton, CA | Rojas Photography',
    description:
      'Polished corporate headshots for Stockton executives, attorneys & business professionals. In-studio or on-site. Trusted by 500+ Central Valley professionals.',
    url: 'https://rojasphotography.net/stockton-headshots',
    type: 'website',
    images: [
      {
        url: '/images/Gina-0026 (1).jpg',
        width: 1200,
        height: 630,
        alt: 'Professional headshots Stockton CA - Rojas Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Headshots in Stockton, CA | Rojas Photography',
    description:
      'Professional headshots for Stockton executives, attorneys & business teams. $150 session fee. Serving San Joaquin County.',
    images: ['/images/Gina-0026 (1).jpg'],
  },
};

export default function StocktonHeadshotsPage() {
  return (
    <>
      <SchemaScript schema={generateStocktonSchema()} />
      <SchemaScript schema={generateStocktonServiceSchema()} />
      <SchemaScript schema={generateStocktonFAQSchema()} />
      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/Hero Image1.jpg"
          title="Professional Headshots in Stockton, CA"
          tag="Serving Stockton & San Joaquin County"
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
                  Corporate Photography Serving Stockton & San Joaquin County
                </h2>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-6 text-center">
                  Stockton&apos;s business community is growing fast. From the healthcare professionals at Dignity Health and Dameron Hospital to the legal firms downtown, the executives at the Port of Stockton, and the faculty at University of the Pacific — every professional in Stockton deserves photography that reflects their credibility and expertise.
                </p>
                <p className="text-[var(--color-text-body)] leading-relaxed text-center">
                  Rojas Photography serves Stockton executives, attorneys, business owners, and corporate teams with professional headshots, on-site team photography, commercial photography, video production, and event coverage. Our Modesto studio is just 35-40 minutes away — or we come to you.
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
                  <p className="text-3xl font-bold text-[var(--color-primary)]">50+</p>
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
                    Comcast &middot; Save Mart &middot; CLA
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
                    Photography Services Available in Stockton
                  </h2>
                  <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                    Full-service corporate photography for Stockton businesses — from individual headshots to full team shoots and commercial projects.
                  </p>
                </div>
              </SectionReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Camera,
                    title: 'In-Studio Headshots',
                    desc: 'Professional headshot sessions at our Modesto studio, 35 minutes from Stockton. Guided posing, real-time review, and 48-hour delivery.',
                    price: '$150 session + $150/image',
                    href: '/premium-headshots',
                    cta: 'Learn More',
                  },
                  {
                    icon: Users,
                    title: 'On-Site Team Photography',
                    desc: 'We bring our full studio to your Stockton office. We photograph your full team without disrupting the workday — a travel fee applies for on-site visits.',
                    price: 'Custom pricing',
                    href: '/on-site-photography',
                    cta: 'Learn More',
                  },
                  {
                    icon: Building2,
                    title: 'Commercial Photography',
                    desc: 'Brand imagery, product photography, architectural shots, and marketing visuals for Stockton businesses and real estate professionals.',
                    price: 'Custom pricing',
                    href: '/commercial',
                    cta: 'Learn More',
                  },
                  {
                    icon: Video,
                    title: 'Video Production',
                    desc: 'Corporate video content for Stockton businesses — brand videos, testimonials, product demos, and FAA Part 107 certified drone footage.',
                    price: 'Custom pricing',
                    href: '/video',
                    cta: 'Learn More',
                  },
                  {
                    icon: Star,
                    title: 'Event Photography',
                    desc: 'Professional coverage for Stockton corporate events, conferences, award ceremonies, and business gatherings. 24-48 hour turnaround.',
                    price: 'Custom pricing',
                    href: '/event-photography',
                    cta: 'Learn More',
                  },
                ].map((service) => (
                  <SectionReveal key={service.title}>
                    <div className="bg-[var(--color-bg-warm)] rounded-2xl p-8 flex flex-col h-full border border-gray-100 hover:border-[var(--color-primary)] transition-colors duration-300">
                      <service.icon
                        size={32}
                        className="text-[var(--color-primary)] mb-4"
                        aria-hidden="true"
                      />
                      <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed mb-4 flex-1">
                        {service.desc}
                      </p>
                      <p className="text-sm font-semibold text-[var(--color-primary)] mb-4">
                        {service.price}
                      </p>
                      <Link
                        href={service.href}
                        className="btn-outline text-sm font-semibold px-6 py-2.5 rounded-full text-center inline-block"
                      >
                        {service.cta}
                      </Link>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Why Stockton Professionals Choose Us */}
          <section className="py-20 md:py-28 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
                    Why Stockton Professionals Choose Rojas Photography
                  </h2>
                </div>
              </SectionReveal>

              <div className="grid md:grid-cols-2 gap-10">
                {[
                  {
                    title: 'We Understand the Stockton Business Community',
                    desc: 'From healthcare professionals at Dignity Health and St. Joseph\'s Medical Center, to attorneys at downtown law firms, to executives at Port of Stockton — we understand what Stockton\'s business leaders need from their professional image.',
                  },
                  {
                    title: 'Corporate Experience You Can See',
                    desc: 'Alfonso brings 15+ years of corporate leadership experience to every session. He knows how executives think and what they need. You\'re not just hiring a photographer — you\'re working with someone who\'s been in the boardroom.',
                  },
                  {
                    title: 'In-Studio or We Come to You',
                    desc: 'Our professional studio is 35-40 minutes from downtown Stockton. We\'re also happy to travel to your Stockton location — for individuals or your entire team. A travel fee applies for on-site visits.',
                  },
                  {
                    title: 'Real Results, Real Fast',
                    desc: 'Most Stockton clients receive their professionally edited headshots within 48 hours. On-site team photography delivers in 24 hours. Professional imagery that makes an impact, delivered when you need it.',
                  },
                ].map((item) => (
                  <SectionReveal key={item.title}>
                    <div className="flex gap-4">
                      <CheckCircle2
                        size={22}
                        className="text-[var(--color-primary)] flex-shrink-0 mt-1"
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="font-bold text-[var(--color-text-dark)] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                          {item.desc}
                        </p>
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
                  { src: '/images/Gina-0026 (1).jpg', alt: 'Professional headshot - Stockton executive woman' },
                  { src: '/images/Miguel-(2 of 6) (1).jpg', alt: 'Corporate headshot - Stockton executive man' },
                  { src: '/images/Joyce-0029.jpg', alt: 'Business headshot - Stockton professional woman' },
                ].map((img) => (
                  <SectionReveal
                    key={img.src}
                    className="img-hover-zoom rounded-xl overflow-hidden aspect-[3/4] relative"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </SectionReveal>
                ))}
              </div>
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
          <FAQSection
            faqs={[
              {
                question: 'Do you offer professional headshots in Stockton, CA?',
                answer:
                  'Yes! We regularly serve business professionals and executives across Stockton and San Joaquin County. We offer both in-studio sessions at our Modesto studio (35-40 minutes from Stockton) and on-site photography at your Stockton office or business location. Most Stockton clients choose the in-studio option for the best quality results.',
              },
              {
                question: 'How far is your studio from Stockton?',
                answer:
                  'Our professional studio is located in Modesto, approximately 35-40 minutes from downtown Stockton via Highway 99. Many Stockton clients make the short drive for our controlled studio environment with professional lighting and backdrops. We are also happy to travel to your Stockton location for on-site sessions — a travel fee applies. Contact us and we\'ll build a plan that works for you.',
              },
              {
                question: 'What do headshot sessions cost for Stockton professionals?',
                answer:
                  'Professional headshot sessions are $150, plus $150 per image you select. You only pay for the images you love — no package minimums, no pressure. For Stockton teams needing on-site photography, pricing is customized based on your needs. Contact us for a personalized quote.',
              },
              {
                question: 'Do you photograph Stockton corporate events and teams?',
                answer:
                  'Absolutely! We serve Stockton businesses across all industries — healthcare, legal, financial services, and corporate teams throughout San Joaquin County. Our on-site photography brings our complete studio setup to your Stockton location so your full team gets polished headshots without disrupting the workday. Edited images delivered within 24 hours.',
              },
              {
                question: 'Why do Stockton professionals choose Rojas Photography?',
                answer:
                  'Stockton professionals choose Rojas Photography because we understand business. With 15+ years of corporate leadership experience, we\'ve helped 500+ executives across the Central Valley present themselves with confidence. We have 50+ five-star reviews and are trusted by organizations like Comcast, Save Mart, and the California Lawyers Association. Our guided sessions make professional photography comfortable and stress-free.',
              },
            ]}
            heading="Stockton Headshot Questions Answered"
          />

          <CTASection
            heading="Ready to Book Your Stockton Headshot Session?"
            subheading="Join 500+ Central Valley professionals who trust Rojas Photography. In-studio in Modesto or on-site at your Stockton location."
          />
        </main>
      </div>
    </>
  );
}
