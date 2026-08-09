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

function generateTurlockSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://rojasphotography.net/turlock-headshots',
    name: 'Rojas Photography – Turlock Headshots',
    image: 'https://rojasphotography.net/images/Alfonso+Niomi-0026.jpg',
    description:
      'Professional corporate headshots and photography services in Turlock, CA. Serving CSU Stanislaus faculty, business professionals, and corporate teams across Stanislaus County.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Modesto',
      addressRegion: 'CA',
      postalCode: '95356',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Turlock' },
      { '@type': 'City', name: 'Modesto' },
      { '@type': 'City', name: 'Ceres' },
      { '@type': 'City', name: 'Hughson' },
      { '@type': 'City', name: 'Denair' },
    ],
    telephone: '+1-209-380-3727',
    email: 'alfonso@rojasphotography.net',
    url: 'https://rojasphotography.net/turlock-headshots',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '60',
    },
  };
}

function generateTurlockServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Professional Headshots in Turlock, CA',
    description:
      'Professional corporate headshots for CSU Stanislaus faculty, Turlock business owners, executives, and professionals across Stanislaus County.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rojas Photography',
      telephone: '+1-209-380-3727',
      url: 'https://rojasphotography.net',
    },
    areaServed: {
      '@type': 'City',
      name: 'Turlock',
      containedInPlace: {
        '@type': 'State',
        name: 'California',
      },
    },
    url: 'https://rojasphotography.net/turlock-headshots',
    image: 'https://rojasphotography.net/images/Miguel-(2 of 6) (1).jpg',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '150',
      description: 'Professional headshot session fee. Image selection priced separately.',
    },
  };
}

const turlockFaqs = [
  {
    question: 'You’re only 15 minutes away — should I just come to the studio?',
    answer:
      'For an individual headshot, yes — it’s an easy hop up Highway 99 to our Modesto studio, and you review and choose your images before you leave. For a team of more than a few people, it’s usually easier to have us come to you in Turlock; we bring the full studio and photograph everyone on-site without pulling them away from work for long.',
  },
  {
    question: 'Can you photograph our CSU Stanislaus department or faculty on campus?',
    answer:
      'Yes. We set up on the Turlock campus and photograph a department, a college, or the full faculty in one visit, matched to a single consistent look for the university directory, research pages, and conference bios. New faculty who join later are easy to match to the same setup.',
  },
  {
    question: 'Do you do on-site headshots at ag operations and processing facilities?',
    answer:
      'We do. Turlock is dairy and poultry country, and we’re comfortable photographing ag executives, sales teams, and family-business owners either in a clean office setting or out where the work happens. You get grounded, credible portraits for company sites, trade directories, and LinkedIn.',
  },
  {
    question: 'Can you match a new hire to our team’s existing headshots later?',
    answer:
      'Yes — we shoot to the same lighting, backdrop, and direction every time, so someone who starts after your team day is matched to the exact look. Being local makes this painless. If you hire regularly, ask about an annual program.',
  },
  {
    question: 'What’s the turnaround?',
    answer:
      'Studio sessions are professionally edited and delivered within 48 hours; on-site team days can deliver the same day. If you’re up against a website launch or directory deadline, tell us and we’ll plan around it.',
  },
  {
    question: 'What does a Turlock headshot session cost?',
    answer:
      'Individual studio sessions are $150 plus $150 per image you select — you only pay for the ones you love, no minimums. On-site team days are quoted by headcount and location. Because Turlock is so close, travel is minimal. Contact us with your team size for a quick quote.',
  },
];

function generateTurlockFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: turlockFaqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export const metadata: Metadata = {
  title: 'Professional Headshots Turlock CA | Rojas Photography',
  description:
    'Professional headshots in Turlock, CA for CSU Stanislaus faculty, business professionals & executives. 15 min from studio. $150 session fee. Book today.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/turlock-headshots',
  },
  openGraph: {
    title: 'Professional Headshots in Turlock, CA | Rojas Photography',
    description:
      'Polished corporate headshots for Turlock professionals, CSU Stanislaus faculty & business teams. Just 15 minutes from our Modesto studio.',
    url: 'https://rojasphotography.net/turlock-headshots',
    type: 'website',
    images: [
      {
        url: '/images/Miguel-(2 of 6) (1).jpg',
        width: 1200,
        height: 630,
        alt: 'Professional headshots Turlock CA - Rojas Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Headshots in Turlock, CA | Rojas Photography',
    description:
      'Professional headshots for Turlock professionals & CSU Stanislaus faculty. $150 session fee. Just 15 minutes from Modesto.',
    images: ['/images/Miguel-(2 of 6) (1).jpg'],
  },
};

export default function TurlockHeadshotsPage() {
  return (
    <>
      <SchemaScript schema={generateTurlockSchema()} />
      <SchemaScript schema={generateTurlockServiceSchema()} />
      <SchemaScript schema={generateTurlockFAQSchema()} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Turlock Headshots', url: 'https://rojasphotography.net/turlock-headshots' },
      ])} />
      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/Hero Image1.jpg"
          title="Professional Headshots in Turlock, CA"
          tag="Serving Turlock & Stanislaus County"
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
                  Corporate Headshots for Turlock — Practically Next Door
                </h2>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-6 text-center">
                  Turlock is our backyard. It&apos;s home to CSU Stanislaus — a university that pumps roughly $770 million a year into the regional economy — to Emanuel Medical Center, and to the agribusiness engine, from dairy processing to Foster Farms, that has defined this part of Stanislaus County for generations. It&apos;s a community built on relationships, where your reputation often arrives before you do, and your headshot is part of that reputation.
                </p>
                <p className="text-[var(--color-text-body)] leading-relaxed text-center">
                  We&apos;re Alfonso and Niomi Rojas, and our studio sits about 15 minutes up Highway 99 in Modesto — close enough that Turlock is genuinely local for us, not a road trip. Book an individual session at the studio, or have us set up on-site at your downtown office, your ag operation, or the CSU Stanislaus campus. Same coached, professional headshot either way.
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
                    Photography Services Available in Turlock
                  </h2>
                  <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                    Full-service corporate photography for Turlock professionals — from individual headshots to CSU campus shoots and commercial projects.
                  </p>
                </div>
              </SectionReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Camera, title: 'In-Studio Headshots', desc: 'Professional headshot sessions at our Modesto studio, just 15 minutes from Turlock. Guided posing, real-time review, and 48-hour delivery.', price: '$150 session + $150/image', href: '/premium-headshots', img: '/images/headshots/headshot-ceo-nutrition-02.jpg', alt: 'Professional headshot session' },
                  { icon: Users, title: 'On-Site Team Photography', desc: 'We bring our full studio to your Turlock office or CSU campus. We photograph your full team without disrupting the workday — a travel fee applies for on-site visits.', price: 'Custom pricing', href: '/on-site-photography', img: '/images/BB Individual Headshot Session.png', alt: 'On-site team headshot photography' },
                  { icon: Building2, title: 'Commercial Photography', desc: 'Brand imagery, product photography, architectural shots, and marketing visuals for Turlock businesses and agricultural operations.', price: 'Custom pricing', href: '/commercial', img: '/images/DoctorOffice 4.jpg', alt: 'Commercial photography for businesses' },
                  { icon: Video, title: 'Video Production', desc: 'Corporate video content for Turlock businesses and CSU Stanislaus — brand videos, testimonials, product demos, and FAA Part 107 certified drone footage.', price: 'Custom pricing', href: '/video', img: '/images/BBSI-Corp-Video.jpg', alt: 'Corporate video production' },
                  { icon: Star, title: 'Event Photography', desc: 'Professional coverage for Turlock corporate events, CSU conferences, award ceremonies, and business gatherings. 24-48 hour turnaround.', price: 'Custom pricing', href: '/event-photography', img: '/images/CLA AM 25 335.jpg', alt: 'Corporate event photography coverage' },
                  { icon: Camera, title: 'Headshot Booth', desc: "We set up a professional headshot station at your Turlock event or CSU campus. High-volume, fast-moving, and polished — every attendee walks away with a photo they're proud to use.", price: 'Priced by the hour', href: '/headshot-booth', img: '/images/kaiser-bts-headshots1.jpeg', alt: 'Headshot booth at corporate event' },
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

          {/* Turlock sectors — unique local content */}
          <section className="py-20 md:py-28 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4 text-center">
                  The Turlock Professionals We Photograph
                </h2>
                <p className="text-lg text-[var(--color-text-muted)] text-center mb-14 max-w-2xl mx-auto">
                  Turlock&apos;s economy runs on four engines, and each one asks something different of a professional headshot.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-8">
                <SectionReveal>
                  <div className="bg-white rounded-xl p-8 h-full border border-gray-100">
                    <h3 className="text-xl text-[var(--color-primary)] mb-3">CSU Stanislaus &amp; Education</h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                      Faculty, deans, and administrators need portraits that balance academic authority with approachability — for university profiles, research pages, conference bios, and grant materials. We photograph individuals at the studio or bring the setup to campus for a department or a full-college faculty refresh, matched to one consistent look.
                    </p>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="bg-white rounded-xl p-8 h-full border border-gray-100">
                    <h3 className="text-xl text-[var(--color-primary)] mb-3">Healthcare</h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                      Emanuel Medical Center and the clinics and practices around it run on tight clinical schedules. We bring the studio on-site so physicians, nurses, and administrators get a warm, credible portrait for provider directories and referral networks between patients — white coat or business professional, your call.
                    </p>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="bg-white rounded-xl p-8 h-full border border-gray-100">
                    <h3 className="text-xl text-[var(--color-primary)] mb-3">Agriculture &amp; Agribusiness</h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                      This is dairy and poultry country — from family operations to processors and the Foster Farms footprint. Ag executives, sales teams, and family-business owners need headshots that read as grounded and trustworthy for company sites, trade directories, and LinkedIn. We&apos;re comfortable shooting in a boardroom or out where the work actually happens.
                    </p>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="bg-white rounded-xl p-8 h-full border border-gray-100">
                    <h3 className="text-xl text-[var(--color-primary)] mb-3">Downtown &amp; Small Business</h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                      Turlock&apos;s downtown professionals — realtors, financial advisors, attorneys, insurance agents, and independent business owners — live and die on local reputation. A polished, current headshot on your yard signs, website, and marketing tells this community you take your work seriously. Being 15 minutes away means booking one is easy.
                    </p>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* Why Turlock Professionals Choose Us */}
          <section className="py-20 md:py-28 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">
                    Why Turlock Professionals Choose Us
                  </h2>
                </div>
              </SectionReveal>

              <div className="grid md:grid-cols-2 gap-10">
                {[
                  {
                    title: 'Just 15 Minutes From Turlock',
                    desc: 'Our professional studio in Modesto is incredibly convenient for Turlock professionals. Just 15-20 minutes via Highway 99 means you can get polished headshots without a long drive or disrupting your day. Quick, convenient, and high quality.',
                  },
                  {
                    title: 'I Understand Academia and Business',
                    desc: 'From CSU Stanislaus faculty needing headshots for university websites and academic profiles, to Turlock business owners building their brand — we understand what professionals need from their imagery. Our 15+ years of corporate experience shows in every session.',
                  },
                  {
                    title: 'In-Studio or we Come to Your Location',
                    desc: 'Our professional studio is 15 minutes from Turlock. I\'m also happy to travel to your Turlock location or CSU campus — for individuals or your entire team. A travel fee applies for on-site visits.',
                  },
                  {
                    title: 'Fast Turnaround, Professional Results',
                    desc: 'Most Turlock clients receive professionally edited headshots within 48 hours. On-site team photography delivers the same day. Professional imagery that builds credibility, delivered when you need it.',
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
                  Our Work
                </h2>
              </SectionReveal>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { src: '/images/Miguel-(2 of 6) (1).jpg', alt: 'Professional headshot - Turlock executive man' },
                  { src: '/images/Joyce-0029.jpg', alt: 'Business headshot - Turlock professional woman' },
                  { src: '/images/Gina-0026 (1).jpg', alt: 'Corporate headshot - Turlock executive woman' },
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
                  Imagine Walking Into Your Next Client Meeting Knowing Your Online Image Is on Point
                </h2>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed max-w-2xl mx-auto">
                  Imagine a headshot that builds trust before the first handshake — one that reflects your expertise whether you&apos;re a CSU faculty member, a business owner, or a corporate professional. We make that happen, and we&apos;re just 15 minutes away.
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
            faqs={turlockFaqs}
            heading="Turlock Headshot Questions Answered"
          />

          <CTASection
            heading="Ready to Book Your Turlock Headshot Session?"
            subheading="Join 500+ Central Valley professionals who trust Rojas Photography. In-studio in Modesto (15 min away) or on-site at your Turlock location."
          />
        </main>
      </div>
    </>
  );
}
