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

function generateFresnoSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://rojasphotography.net/fresno-headshots',
    name: 'Rojas Photography – Fresno Headshots',
    image: 'https://rojasphotography.net/images/Alfonso+Niomi-0026.jpg',
    description:
      'Professional corporate headshots and photography services in Fresno, CA. Serving Fresno State faculty, Community Regional Medical Center and Saint Agnes Medical Center professionals, legal firms, agricultural businesses, and executives across Fresno County.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Modesto',
      addressRegion: 'CA',
      postalCode: '95350',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Fresno' },
      { '@type': 'City', name: 'Modesto' },
      { '@type': 'City', name: 'Clovis' },
      { '@type': 'City', name: 'Sanger' },
      { '@type': 'City', name: 'Madera' },
    ],
    telephone: '+1-209-380-3727',
    email: 'alfonso@rojasphotography.net',
    url: 'https://rojasphotography.net/fresno-headshots',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '60',
    },
  };
}

function generateFresnoServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Professional Headshots in Fresno, CA',
    description:
      'Professional corporate headshots for Fresno State faculty, Community Regional Medical Center and Saint Agnes Medical Center healthcare professionals, legal professionals, agricultural business leaders, and executives across Fresno County.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rojas Photography',
      telephone: '+1-209-380-3727',
      url: 'https://rojasphotography.net',
    },
    areaServed: {
      '@type': 'City',
      name: 'Fresno',
      containedInPlace: {
        '@type': 'State',
        name: 'California',
      },
    },
    url: 'https://rojasphotography.net/fresno-headshots',
    image: 'https://rojasphotography.net/images/Alfonso+Niomi-0026.jpg',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '150',
      description: 'Professional headshot session fee. Image selection priced separately.',
    },
  };
}

function generateFresnoFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you offer professional headshots in Fresno, CA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We serve Fresno professionals including Fresno State faculty and staff, Community Regional Medical Center and Saint Agnes Medical Center healthcare workers, legal professionals, agricultural business leaders, and corporate executives across Fresno County and the Central Valley. We offer both in-studio sessions at our Modesto studio (90 minutes from Fresno) and on-site photography at your Fresno office, campus, hospital, or business location.',
        },
      },
      {
        '@type': 'Question',
        name: 'How far is your studio from Fresno?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our professional studio is in Modesto, approximately 90 minutes from Fresno via Highway 99. Many Fresno professionals value the drive for our premium studio environment, professional lighting, and executive-level results. For teams or organizations preferring on-site service, we bring our full studio to your Fresno location — Fresno State campus, Community Regional, Saint Agnes, your law firm, or business office. A travel fee applies for on-site visits.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do Fresno headshot sessions cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Professional headshot sessions are $150, plus $150 per image you select. You only pay for the images you love — no package minimums, no forced purchases. For Fresno healthcare teams, university departments, law firms, or agricultural businesses needing on-site photography, we provide customized pricing based on your team size and requirements. Contact us for a personalized quote.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with Fresno State faculty and healthcare professionals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! We regularly serve Fresno State faculty, administrators, and researchers who need professional headshots for university websites, academic profiles, grant applications, and conference materials. We also work with Community Regional Medical Center and Saint Agnes Medical Center physicians, nurses, administrators, and healthcare professionals who need credible, professional headshots for hospital websites, medical directories, and professional profiles. We understand both academic and healthcare professional imagery needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do Fresno professionals choose Rojas Photography?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fresno professionals choose Rojas Photography because we understand the Central Valley business, academic, healthcare, and agricultural communities. With 15+ years of corporate leadership experience and 500+ executives photographed, we bring professionalism and expertise to every session. Our guided approach eliminates the stress of professional photography, helping Fresno State faculty, healthcare workers, legal professionals, agricultural business leaders, and executives present themselves with confidence on LinkedIn, their websites, and all professional materials.',
        },
      },
    ],
  };
}

export const metadata: Metadata = {
  title: 'Professional Headshots Fresno CA | Rojas Photography',
  description:
    'Professional headshots in Fresno, CA for Fresno State faculty, Community Regional & Saint Agnes Medical staff, legal professionals & business executives. $150 session. Book today.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/fresno-headshots',
  },
  openGraph: {
    title: 'Professional Headshots in Fresno, CA | Rojas Photography',
    description:
      'Polished corporate headshots for Fresno professionals, Fresno State faculty, healthcare workers, legal professionals & business teams. Central Valley\'s largest city deserves professional imagery.',
    url: 'https://rojasphotography.net/fresno-headshots',
    type: 'website',
    images: [
      {
        url: '/images/Alfonso+Niomi-0026.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional headshots Fresno CA - Rojas Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Headshots in Fresno, CA | Rojas Photography',
    description:
      'Professional headshots for Fresno professionals, Fresno State faculty & healthcare workers. $150 session fee. 90 minutes from Modesto.',
    images: ['/images/Alfonso+Niomi-0026.jpg'],
  },
};

export default function FresnoHeadshotsPage() {
  return (
    <>
      <SchemaScript schema={generateFresnoSchema()} />
      <SchemaScript schema={generateFresnoServiceSchema()} />
      <SchemaScript schema={generateFresnoFAQSchema()} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Fresno Headshots', url: 'https://rojasphotography.net/fresno-headshots' },
      ])} />
      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/Hero Image1.jpg"
          title="Professional Headshots in Fresno, CA"
          tag="Serving Fresno & Fresno County"
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
                  Corporate Photography Serving Fresno & Fresno County
                </h2>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-6 text-center">
                  As the largest city in the Central Valley, Fresno&apos;s diverse professional community — from Fresno State faculty and researchers to Community Regional and Saint Agnes Medical Center healthcare professionals, legal firms, agricultural business leaders, and corporate executives — needs professional photography that builds credibility and trust in competitive markets.
                </p>
                <p className="text-[var(--color-text-body)] leading-relaxed text-center">
                  Rojas Photography serves Fresno with professional headshots, on-site team photography, commercial photography, video production, and event coverage. Visit our premium studio in Modesto (90 minutes from Fresno) for executive sessions — or we bring our full professional setup to your Fresno State campus, hospital, law firm, agricultural business, or corporate office.
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
                    Photography Services Available in Fresno
                  </h2>
                  <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                    Full-service corporate photography for Fresno professionals — from individual headshots to Fresno State campus shoots, hospital team photography, and agricultural business imagery.
                  </p>
                </div>
              </SectionReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Camera,
                    title: 'In-Studio Headshots',
                    desc: 'Executive headshot sessions at our premium Modesto studio, 90 minutes from Fresno. Professional lighting, guided posing, real-time review, and 48-hour delivery.',
                    price: '$150 session + $150/image',
                    href: '/premium-headshots',
                    cta: 'Learn More',
                  },
                  {
                    icon: Users,
                    title: 'On-Site Team Photography',
                    desc: 'We bring our full studio to your Fresno location — Fresno State campus, Community Regional, Saint Agnes, your law firm, agricultural business, or corporate office. Efficient team photography without disrupting operations. Travel fee applies.',
                    price: 'Custom pricing',
                    href: '/on-site-photography',
                    cta: 'Learn More',
                  },
                  {
                    icon: Building2,
                    title: 'Commercial Photography',
                    desc: 'Brand imagery, facility photography, product shots, agricultural operations photography, and marketing visuals for Fresno businesses, healthcare facilities, and educational institutions.',
                    price: 'Custom pricing',
                    href: '/commercial',
                    cta: 'Learn More',
                  },
                  {
                    icon: Video,
                    title: 'Video Production',
                    desc: 'Corporate video content for Fresno organizations — brand videos, agricultural operation videos, educational content, patient testimonials, faculty profiles, and FAA Part 107 certified drone footage.',
                    price: 'Custom pricing',
                    href: '/video',
                    cta: 'Learn More',
                  },
                  {
                    icon: Star,
                    title: 'Event Photography',
                    desc: 'Professional coverage for Fresno events — Fresno State conferences, healthcare fundraisers, agricultural industry events, legal conferences, and business gatherings. 24-48 hour turnaround.',
                    price: 'Custom pricing',
                    href: '/event-photography',
                    cta: 'Learn More',
                  },
                  {
                    icon: Camera,
                    title: 'Headshot Booth',
                    desc: 'I set up a professional headshot station at your Fresno event, Fresno State campus, hospital, or office. High-volume, polished, and priced by the hour.',
                    price: 'Priced by the hour',
                    href: '/headshot-booth',
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

          {/* Why Fresno Professionals Choose Us */}
          <section className="py-20 md:py-28 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
                    Why Fresno Professionals Choose Me
                  </h2>
                </div>
              </SectionReveal>

              <div className="grid md:grid-cols-2 gap-10">
                {[
                  {
                    title: 'I Understand Fresno\'s Diverse Professional Community',
                    desc: 'From Fresno State faculty needing academic headshots to Community Regional and Saint Agnes Medical Center healthcare professionals, agricultural business leaders building their brands, and legal professionals requiring authoritative imagery — I understand the unique needs of Fresno\'s varied professional sectors. My experience across industries shows in every session.',
                  },
                  {
                    title: 'Premium Studio or I Come to Your Fresno Location',
                    desc: 'My professional studio in Modesto offers premium lighting and environment for executive headshots (90 minutes from Fresno). For teams, I bring my full studio to your Fresno State campus, Community Regional, Saint Agnes, law firm, agricultural business, or corporate office — efficient, professional team photography without disrupting your operations.',
                  },
                  {
                    title: 'Corporate Leadership Experience Across Industries',
                    desc: 'I\'m Alfonso Rojas, and my 15+ years of corporate leadership experience means I understand professional branding across healthcare, academia, legal, agricultural, and corporate sectors. I\'ve photographed 500+ executives and professionals. Whether you need academic credibility, healthcare professionalism, legal authority, or executive presence — I deliver.',
                  },
                  {
                    title: 'Fast Turnaround for Central Valley\'s Largest City',
                    desc: 'Fresno professionals work on demanding timelines. Most clients receive professionally edited headshots within 48 hours. On-site team photography delivers in 24 hours. New faculty directory? Hospital website update? Firm expansion? Agricultural business launch? I deliver professional imagery when you need it.',
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
                  My Work
                </h2>
              </SectionReveal>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { src: '/images/Alfonso+Niomi-0026.jpg', alt: 'Professional headshot - Fresno executive couple' },
                  { src: '/images/Miguel-(2 of 6) (1).jpg', alt: 'Business headshot - Fresno professional man' },
                  { src: '/images/Joyce-0029.jpg', alt: 'Corporate headshot - Fresno executive woman' },
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

          {/* SB7: Success Vision */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
                  Imagine Sharing Imagery You&apos;re Actually Proud to Put in Your Directory or on Your Website
                </h2>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed max-w-2xl mx-auto">
                  Imagine a headshot that communicates your expertise before anyone reads your bio. Whether you&apos;re a Fresno State professor, a physician at Community Regional, or a business executive — I deliver imagery that reflects the professional you&apos;ve worked hard to become.
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
          <FAQSection
            faqs={[
              {
                question: 'Do you offer professional headshots in Fresno, CA?',
                answer:
                  'Yes! I serve Fresno professionals including Fresno State faculty and staff, Community Regional Medical Center and Saint Agnes Medical Center healthcare workers, legal professionals, agricultural business leaders, and corporate executives across Fresno County and the Central Valley. I offer both in-studio sessions at my Modesto studio (90 minutes from Fresno) and on-site photography at your Fresno office, campus, hospital, or business location.',
              },
              {
                question: 'How far is your studio from Fresno?',
                answer:
                  'My professional studio is in Modesto, approximately 90 minutes from Fresno via Highway 99. Many Fresno professionals value the drive for my premium studio environment, professional lighting, and executive-level results. For teams or organizations preferring on-site service, I bring my full studio to your Fresno location — Fresno State campus, Community Regional, Saint Agnes, your law firm, or business office. A travel fee applies for on-site visits.',
              },
              {
                question: 'What do Fresno headshot sessions cost?',
                answer:
                  'Professional headshot sessions are $150, plus $150 per image you select. You only pay for the images you love — no package minimums, no forced purchases. For Fresno healthcare teams, university departments, law firms, or agricultural businesses needing on-site photography, I provide customized pricing based on your team size and requirements. Contact me for a personalized quote.',
              },
              {
                question: 'Do you work with Fresno State faculty and healthcare professionals?',
                answer:
                  'Absolutely! I regularly serve Fresno State faculty, administrators, and researchers who need professional headshots for university websites, academic profiles, grant applications, and conference materials. I also work with Community Regional Medical Center and Saint Agnes Medical Center physicians, nurses, administrators, and healthcare professionals who need credible, professional headshots for hospital websites, medical directories, and professional profiles. I understand both academic and healthcare professional imagery needs.',
              },
              {
                question: 'Why do Fresno professionals choose Rojas Photography?',
                answer:
                  'Fresno professionals choose me because I understand the Central Valley business, academic, healthcare, and agricultural communities. With 15+ years of corporate leadership experience and 500+ executives photographed, I bring professionalism and expertise to every session. My guided approach eliminates the stress of professional photography, helping Fresno State faculty, healthcare workers, legal professionals, agricultural business leaders, and executives present themselves with confidence on LinkedIn, their websites, and all professional materials.',
              },
            ]}
            heading="Fresno Headshot Questions Answered"
          />

          <CTASection
            heading="Ready to Book Your Fresno Headshot Session?"
            subheading="Join 500+ Central Valley professionals who trust Rojas Photography. Premium studio in Modesto (90 min away) or on-site at your Fresno location."
          />
        </main>
      </div>
    </>
  );
}
