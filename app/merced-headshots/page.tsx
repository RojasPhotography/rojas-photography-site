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

function generateMercedSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://rojasphotography.net/merced-headshots',
    name: 'Rojas Photography – Merced Headshots',
    image: 'https://rojasphotography.net/images/Joyce-0029.jpg',
    description:
      'Professional corporate headshots and photography services in Merced, CA. Serving UC Merced faculty, Mercy Medical Center professionals, healthcare workers, and business executives across Merced County.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Modesto',
      addressRegion: 'CA',
      postalCode: '95356',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Merced' },
      { '@type': 'City', name: 'Modesto' },
      { '@type': 'City', name: 'Atwater' },
      { '@type': 'City', name: 'Livingston' },
      { '@type': 'City', name: 'Los Banos' },
    ],
    telephone: '+1-209-380-3727',
    email: 'alfonso@rojasphotography.net',
    url: 'https://rojasphotography.net/merced-headshots',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '60',
    },
  };
}

function generateMercedServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Professional Headshots in Merced, CA',
    description:
      'Professional corporate headshots for UC Merced faculty, Mercy Medical Center healthcare professionals, Merced business leaders, and executives across Merced County.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rojas Photography',
      telephone: '+1-209-380-3727',
      url: 'https://rojasphotography.net',
    },
    areaServed: {
      '@type': 'City',
      name: 'Merced',
      containedInPlace: {
        '@type': 'State',
        name: 'California',
      },
    },
    url: 'https://rojasphotography.net/merced-headshots',
    image: 'https://rojasphotography.net/images/Joyce-0029.jpg',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '150',
      description: 'Professional headshot session fee. Image selection priced separately.',
    },
  };
}

function generateMercedFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you offer professional headshots in Merced, CA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We serve Merced professionals including UC Merced faculty and staff, Mercy Medical Center healthcare workers, business owners, and corporate executives across Merced County. We offer both in-studio sessions at our Modesto studio (50 minutes from Merced) and on-site photography at your Merced location or UC campus. Healthcare professionals and educators particularly appreciate our professional approach to corporate photography.',
        },
      },
      {
        '@type': 'Question',
        name: 'How far is your studio from Merced?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our professional studio is in Modesto, approximately 50 minutes from downtown Merced via Highway 99. We also bring our full portable professional studio — lighting, backdrops, and all equipment — directly to your Merced office, conference room, or breakroom. The same high-end results, in the comfort of your location. A travel fee applies for on-site visits.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do Merced headshot sessions cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Professional headshot sessions are $150, plus $150 per image you select. You only pay for the images you love — no package minimums, no forced purchases. For Merced healthcare teams, university departments, or corporate groups needing on-site photography, we provide customized pricing based on your team size and requirements. Contact us for a personalized quote.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with UC Merced faculty and Mercy Medical Center professionals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! We regularly serve UC Merced faculty, researchers, and administrators who need professional headshots for university websites, academic profiles, grant applications, and conference materials. We also work with Mercy Medical Center physicians, nurses, administrators, and healthcare professionals who need credibility-building headshots for hospital websites, medical directories, and professional profiles. We understand the unique needs of both academic and healthcare professionals.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do Merced professionals choose Rojas Photography?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Merced professionals choose Rojas Photography because we understand the Central Valley business, academic, and healthcare communities. With 15+ years of corporate leadership experience and 500+ executives photographed, we bring professionalism and expertise to every session. Our guided approach eliminates the stress of professional photography, helping UC Merced faculty, healthcare workers, and business leaders present themselves with confidence on LinkedIn, their websites, and all professional materials.',
        },
      },
    ],
  };
}

export const metadata: Metadata = {
  title: 'Professional Headshots Merced CA | Rojas Photography',
  description:
    'Professional headshots in Merced, CA for UC Merced faculty, Mercy Medical Center professionals & business executives. 50 min from studio. $150 session. Book today.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/merced-headshots',
  },
  openGraph: {
    title: 'Professional Headshots in Merced, CA | Rojas Photography',
    description:
      'Polished corporate headshots for Merced professionals, UC Merced faculty, healthcare workers & business teams. Gateway to Yosemite, gateway to great imagery.',
    url: 'https://rojasphotography.net/merced-headshots',
    type: 'website',
    images: [
      {
        url: '/images/Joyce-0029.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional headshots Merced CA - Rojas Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Headshots in Merced, CA | Rojas Photography',
    description:
      'Professional headshots for Merced professionals, UC Merced faculty & healthcare workers. $150 session fee. 50 minutes from Modesto.',
    images: ['/images/Joyce-0029.jpg'],
  },
};

export default function MercedHeadshotsPage() {
  return (
    <>
      <SchemaScript schema={generateMercedSchema()} />
      <SchemaScript schema={generateMercedServiceSchema()} />
      <SchemaScript schema={generateMercedFAQSchema()} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Merced Headshots', url: 'https://rojasphotography.net/merced-headshots' },
      ])} />
      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/Hero Image1.jpg"
          title="Professional Headshots in Merced, CA"
          tag="Serving Merced & Merced County"
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
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6 text-center">
                  Corporate Photography Serving Merced & Merced County
                </h2>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-6 text-center">
                  Merced&apos;s growing academic and healthcare communities need professional photography that communicates expertise and trust. Whether you&apos;re UC Merced faculty conducting groundbreaking research, a physician at Mercy Medical Center, or a business leader serving the gateway to Yosemite — your professional image matters.
                </p>
                <p className="text-[var(--color-text-body)] leading-relaxed text-center">
                  Rojas Photography serves Merced with professional headshots, on-site team photography, commercial photography, video production, and event coverage. Visit our Modesto studio (50 minutes from Merced) for premium studio sessions — or we bring our full setup to your UC campus, hospital, or Merced business location.
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
                  <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">
                    Photography Services Available in Merced
                  </h2>
                  <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                    Full-service corporate photography for Merced professionals — from individual headshots to UC campus shoots and hospital team photography.
                  </p>
                </div>
              </SectionReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Camera, title: 'In-Studio Headshots', desc: 'Professional headshot sessions at our Modesto studio, 50 minutes from Merced. Premium lighting, guided posing, real-time review, and 48-hour delivery.', price: '$150 session + $150/image', href: '/premium-headshots', img: '/images/headshots/headshot-ceo-nutrition-02.jpg', alt: 'Professional headshot session' },
                  { icon: Users, title: 'On-Site Team Photography', desc: 'We bring our full studio to your Merced location — UC campus, Mercy Medical Center, or your business. Photograph your full team efficiently without disrupting operations. Travel fee applies.', price: 'Custom pricing', href: '/on-site-photography', img: '/images/BB Individual Headshot Session.png', alt: 'On-site team headshot photography' },
                  { icon: Building2, title: 'Commercial Photography', desc: 'Brand imagery, facility photography, product shots, and marketing visuals for Merced businesses, healthcare facilities, and educational institutions.', price: 'Custom pricing', href: '/commercial', img: '/images/DoctorOffice 4.jpg', alt: 'Commercial photography for businesses' },
                  { icon: Video, title: 'Video Production', desc: 'Corporate video content for Merced organizations — brand videos, educational content, patient testimonials, faculty profiles, and FAA Part 107 certified drone footage.', price: 'Custom pricing', href: '/video', img: '/images/BBSI-Corp-Video.jpg', alt: 'Corporate video production' },
                  { icon: Star, title: 'Event Photography', desc: 'Professional coverage for Merced corporate events, UC conferences, healthcare fundraisers, award ceremonies, and business gatherings. 24-48 hour turnaround.', price: 'Custom pricing', href: '/event-photography', img: '/images/CLA AM 25 335.jpg', alt: 'Corporate event photography coverage' },
                  { icon: Camera, title: 'Headshot Booth', desc: 'We set up a professional headshot station at your Merced event, UC campus, or Mercy Medical Center. High-volume, polished, and priced by the hour.', price: 'Priced by the hour', href: '/headshot-booth', img: '/images/kaiser-bts-headshots1.jpeg', alt: 'Headshot booth at corporate event' },
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
                          <h3 className="text-xl text-white mb-2">{service.title}</h3>
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

          {/* Why Merced Professionals Choose Us */}
          <section className="py-20 md:py-28 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">
                    Why Merced Professionals Choose Me
                  </h2>
                </div>
              </SectionReveal>

              <div className="grid md:grid-cols-2 gap-10">
                {[
                  {
                    title: 'I Understand Academic and Healthcare Professionals',
                    desc: 'From UC Merced faculty needing headshots for academic publications and university websites, to Mercy Medical Center physicians requiring professional imagery for hospital directories and medical profiles — we understand what credibility looks like in your field. My experience shows in every session.',
                  },
                  {
                    title: 'Premium Studio or we Come to You',
                    desc: 'Our professional studio in Modesto offers premium lighting and environment for the highest quality results (50 minutes from Merced). For teams, we bring our full studio to your UC campus, hospital, or Merced business location — efficient team photography without disrupting your operations.',
                  },
                  {
                    title: 'Corporate Experience That Shows',
                    desc: 'We\'re Alfonso and Niomi Rojas, and our 15+ years of corporate leadership experience means we understand professional branding, executive presence, and what makes a headshot truly effective. We\'ve photographed 500+ executives and professionals across industries — from healthcare to academia to business leadership.',
                  },
                  {
                    title: 'Fast Turnaround, Professional Results',
                    desc: 'Most Merced clients receive professionally edited headshots within 48 hours. On-site team photography delivers the same day. Professional imagery that builds credibility and trust, delivered when you need it for your website, LinkedIn, or marketing materials.',
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
                        <h3 className="text-[var(--color-text-dark)] mb-2">
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
                <h2 className="text-3xl md:text-4xl text-center mb-12 text-[var(--color-text-dark)]">
                  My Work
                </h2>
              </SectionReveal>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { src: '/images/Joyce-0029.jpg', alt: 'Professional headshot - Merced executive woman' },
                  { src: '/images/Gina-0026 (1).jpg', alt: 'Business headshot - Merced professional woman' },
                  { src: '/images/Miguel-(2 of 6) (1).jpg', alt: 'Corporate headshot - Merced executive man' },
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
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">
                  Imagine Updating Your Profile and Finally Feeling Like It Represents You
                </h2>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed max-w-2xl mx-auto">
                  Imagine a headshot on your university profile, hospital directory, or LinkedIn that actually looks like the professional you&apos;ve worked hard to become. That&apos;s what we deliver — in a session that feels more like a conversation than a photo shoot.
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center mb-16 text-[var(--color-text-dark)]">
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
                question: 'Do you offer professional headshots in Merced, CA?',
                answer:
                  'Yes! We serve Merced professionals including UC Merced faculty and staff, Mercy Medical Center healthcare workers, business owners, and corporate executives across Merced County. We offer both in-studio sessions at our Modesto studio (50 minutes from Merced) and on-site photography at your Merced location or UC campus. Healthcare professionals and educators particularly appreciate my professional approach to corporate photography.',
              },
              {
                question: 'How far is your studio from Merced?',
                answer:
                  'Our professional studio is in Modesto, approximately 50 minutes from downtown Merced via Highway 99. We also bring our full portable professional studio — lighting, backdrops, and all equipment — directly to your Merced office, conference room, or breakroom. The same high-end results, in the comfort of your location. A travel fee applies for on-site visits.',
              },
              {
                question: 'What do Merced headshot sessions cost?',
                answer:
                  'Professional headshot sessions are $150, plus $150 per image you select. You only pay for the images you love — no package minimums, no forced purchases. For Merced healthcare teams, university departments, or corporate groups needing on-site photography, we provide customized pricing based on your team size and requirements. Contact us for a personalized quote.',
              },
              {
                question: 'Do you work with UC Merced faculty and Mercy Medical Center professionals?',
                answer:
                  'Absolutely! We regularly serve UC Merced faculty, researchers, and administrators who need professional headshots for university websites, academic profiles, grant applications, and conference materials. I also work with Mercy Medical Center physicians, nurses, administrators, and healthcare professionals who need credibility-building headshots for hospital websites, medical directories, and professional profiles. We understand the unique needs of both academic and healthcare professionals.',
              },
              {
                question: 'Why do Merced professionals choose Rojas Photography?',
                answer:
                  'Merced professionals choose us because we understand the Central Valley business, academic, and healthcare communities. With 15+ years of corporate leadership experience and 500+ executives photographed, we bring professionalism and expertise to every session. Our guided approach eliminates the stress of professional photography, helping UC Merced faculty, healthcare workers, and business leaders present themselves with confidence on LinkedIn, their websites, and all professional materials.',
              },
            ]}
            heading="Merced Headshot Questions Answered"
          />

          <CTASection
            heading="Ready to Book Your Merced Headshot Session?"
            subheading="Join 500+ Central Valley professionals who trust Rojas Photography. In-studio in Modesto (50 min away) or on-site at your Merced location."
          />
        </main>
      </div>
    </>
  );
}
