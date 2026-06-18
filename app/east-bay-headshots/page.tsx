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
    question: 'Do you offer professional headshots in the East Bay?',
    answer:
      'Yes! We serve East Bay and Tri-Valley professionals — corporate teams, tech companies, healthcare organizations, and financial and legal firms across Pleasanton, Dublin, Livermore, San Ramon, Walnut Creek, Danville, and the broader East Bay. We specialize in on-site team photography, bringing our full professional studio to your office, and we also welcome individuals at our Modesto studio.',
  },
  {
    question: 'Do you travel to the East Bay for on-site team photography?',
    answer:
      'Yes. We regularly travel to the East Bay and Tri-Valley — about an hour from our Modesto studio via I-580 and the Altamont Pass — and bring our complete professional studio (lighting, backdrops, and cameras) directly to your office. We handle setup and breakdown completely, so your team only steps away for a few minutes. A travel fee applies for on-site visits.',
  },
  {
    question: 'What do East Bay headshot sessions cost?',
    answer:
      'Individual studio sessions are $150 for the session, plus $150 per image you select. For East Bay on-site team photography, corporate programs, and events, pricing is customized based on your team size, location, and scope. Contact us with your details for a personalized quote.',
  },
  {
    question: 'Do you work with East Bay corporate and healthcare teams?',
    answer:
      'Absolutely. We have photographed corporate teams across the region, including the Kaiser Business Campus in Pleasanton. We handle individual executive headshots, full-team directory photos, and group photos on-site — with consistent lighting, backdrop, and editing so everyone on your team matches across your website and directory.',
  },
  {
    question: 'Why do East Bay companies choose Rojas Photography?',
    answer:
      'East Bay companies choose us for the combination of corporate understanding, efficient on-site execution, and consistent quality. With 15+ years of corporate leadership experience and 500+ professionals photographed, we know how to operate inside a business environment without disrupting it — coaching each person, keeping the day moving, and delivering polished, consistent results your whole team can use.',
  },
];

function generateEastBaySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://rojasphotography.net/east-bay-headshots',
    name: 'Rojas Photography – East Bay Headshots',
    image: 'https://rojasphotography.net/images/Kaiser BTS Headshots.png',
    description:
      'Professional corporate headshots and on-site team photography across the East Bay and Tri-Valley — Pleasanton, Dublin, Livermore, San Ramon, Walnut Creek, and the broader East Bay.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Modesto',
      addressRegion: 'CA',
      postalCode: '95350',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Pleasanton' },
      { '@type': 'City', name: 'Dublin' },
      { '@type': 'City', name: 'Livermore' },
      { '@type': 'City', name: 'San Ramon' },
      { '@type': 'City', name: 'Walnut Creek' },
      { '@type': 'City', name: 'Danville' },
      { '@type': 'City', name: 'Fremont' },
    ],
    telephone: '+1-209-380-3727',
    email: 'alfonso@rojasphotography.net',
    url: 'https://rojasphotography.net/east-bay-headshots',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '60',
    },
  };
}

function generateEastBayServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Professional Headshots in the East Bay, CA',
    description:
      'On-site corporate headshots and team photography for East Bay and Tri-Valley companies — Pleasanton, Dublin, Livermore, San Ramon, Walnut Creek, and beyond.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rojas Photography',
      telephone: '+1-209-380-3727',
      url: 'https://rojasphotography.net',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'East Bay, California',
    },
    url: 'https://rojasphotography.net/east-bay-headshots',
    image: 'https://rojasphotography.net/images/Kaiser BTS Headshots.png',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '150',
      description: 'Professional headshot session fee. On-site team photography priced separately.',
    },
  };
}

function generateEastBayFAQSchema() {
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
  title: 'Professional Headshots in the East Bay | Rojas Photography',
  description:
    'On-site corporate headshots across the East Bay & Tri-Valley — Pleasanton, Dublin, Livermore, Walnut Creek. We bring the full studio to your office. 48-hour delivery.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/east-bay-headshots',
  },
  openGraph: {
    title: 'Professional Headshots in the East Bay | Rojas Photography',
    description:
      'On-site corporate headshots and team photography for East Bay and Tri-Valley companies — Pleasanton, Dublin, Livermore, San Ramon, and Walnut Creek.',
    url: 'https://rojasphotography.net/east-bay-headshots',
    type: 'website',
    images: [
      {
        url: '/images/Kaiser BTS Headshots.png',
        width: 1200,
        height: 630,
        alt: 'On-site corporate headshots East Bay - Rojas Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Headshots in the East Bay | Rojas Photography',
    description:
      'On-site corporate headshots for East Bay & Tri-Valley teams — Pleasanton, Dublin, Livermore, Walnut Creek. We bring the studio to your office.',
    images: ['/images/Kaiser BTS Headshots.png'],
  },
};

export default function EastBayHeadshotsPage() {
  return (
    <>
      <SchemaScript schema={generateEastBaySchema()} />
      <SchemaScript schema={generateEastBayServiceSchema()} />
      <SchemaScript schema={generateEastBayFAQSchema()} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'East Bay Headshots', url: 'https://rojasphotography.net/east-bay-headshots' },
      ])} />
      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/Kaiser BTS Headshots.png"
          title="On-Site Corporate Headshots in the East Bay"
          tag="Serving the East Bay & Tri-Valley"
          objectPosition="center 35%"
          fullHeight={false}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact-quote"
              className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Get a Team Quote
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
                  Corporate Photography Serving the East Bay &amp; Tri-Valley
                </h2>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-6 text-center">
                  The East Bay and Tri-Valley are home to corporate campuses, healthcare systems, and professional-services firms that expect a polished, consistent team. Whether you&apos;re coordinating headshots for a Pleasanton corporate office, a Livermore lab, a Walnut Creek firm, or a Dublin healthcare team — your people should look the part across your website, directory, and LinkedIn.
                </p>
                <p className="text-[var(--color-text-body)] leading-relaxed text-center">
                  Rojas Photography serves the East Bay with on-site team headshots, corporate and commercial photography, video production, and event coverage. We bring our full professional studio to your office (about an hour from Modesto), and individuals are always welcome at our Modesto studio.
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
                    Comcast &middot; Kaiser &middot; CalPERS &middot; CLA
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
                    Photography Services Available in the East Bay
                  </h2>
                  <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                    Full-service corporate photography for East Bay teams — built around on-site sessions we bring to your office.
                  </p>
                </div>
              </SectionReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Users, title: 'On-Site Team Photography', desc: 'We bring our full professional studio to your East Bay office and photograph your whole team in one efficient visit — consistent lighting, backdrop, and coaching for everyone. Travel fee applies.', price: 'Custom pricing', href: '/on-site-photography', img: '/images/BB Individual Headshot Session.png', alt: 'On-site team headshot photography' },
                  { icon: Star, title: 'Annual Headshot Programs', desc: 'A managed program for growing East Bay companies — new hires photographed on a schedule and an annual full-team refresh, all matching your locked-in look.', price: 'Custom pricing', href: '/annual-headshot-programs', img: '/images/Move Staff Group 9.jpg', alt: 'Annual corporate headshot program' },
                  { icon: Camera, title: 'In-Studio Headshots', desc: 'Prefer the studio? Individuals are welcome at our Modesto studio (about an hour from the East Bay). Premium lighting, guided posing, and 48-hour delivery.', price: '$150 session + $150/image', href: '/premium-headshots', img: '/images/headshots/headshot-ceo-nutrition.jpg', alt: 'Professional headshot session' },
                  { icon: Building2, title: 'Commercial Photography', desc: 'Brand imagery, office and facility photography, product shots, and marketing visuals for East Bay businesses, tech companies, and healthcare organizations.', price: 'Custom pricing', href: '/commercial', img: '/images/DoctorOffice 4.jpg', alt: 'Commercial photography for businesses' },
                  { icon: Video, title: 'Video Production', desc: 'Corporate video for East Bay organizations — brand stories, recruiting and culture videos, testimonials, and FAA Part 107 certified drone footage.', price: 'Custom pricing', href: '/video', img: '/images/BBSI-Corp-Video.jpg', alt: 'Corporate video production' },
                  { icon: Camera, title: 'Headshot Booth', desc: 'We set up a professional headshot station at your East Bay event, conference, or all-hands. High-volume, polished, and priced by the hour.', price: 'Priced by the hour', href: '/headshot-booth', img: '/images/kaiser-bts-headshots1.jpeg', alt: 'Headshot booth at corporate event' },
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

          {/* Why East Bay Companies Choose Us */}
          <section className="py-20 md:py-28 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
                    Why East Bay Companies Choose Us
                  </h2>
                </div>
              </SectionReveal>

              <div className="grid md:grid-cols-2 gap-10">
                {[
                  {
                    title: 'We Bring the Studio to Your Office',
                    desc: 'For East Bay teams, on-site is the easy button. We bring lighting, backdrops, and cameras to your Pleasanton, Dublin, Livermore, or Walnut Creek office and photograph everyone in one efficient visit — no one has to travel or block out half a day.',
                  },
                  {
                    title: 'Trusted by East Bay Corporate Teams',
                    desc: 'We have photographed corporate teams across the region, including the Kaiser Business Campus in Pleasanton. Individual executive headshots, full-team directory photos, and group photos — handled professionally and delivered fast.',
                  },
                  {
                    title: 'Corporate Experience That Shows',
                    desc: 'We\'re Alfonso and Niomi Rojas, and our 15+ years of corporate leadership experience means we understand professional branding and how to operate inside a business environment without disrupting it. We\'ve photographed 500+ executives and professionals across industries.',
                  },
                  {
                    title: 'Consistent Results Across Your Whole Team',
                    desc: 'Same lighting, same backdrop, same editing from the first person to the last — so your directory and website look cohesive. Ideal for companies that care how their team shows up to clients and candidates.',
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
                  { src: '/images/headshots/headshot-executive-ceo.jpg', alt: 'Professional headshot - East Bay executive' },
                  { src: '/images/Move Staff Group 9.jpg', alt: 'On-site team headshots - East Bay corporate team' },
                  { src: '/images/Miguel-(2 of 6) (1).jpg', alt: 'Corporate headshot - East Bay executive man' },
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
                  Imagine Your Whole Team Looking Like It Belongs Together
                </h2>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed max-w-2xl mx-auto">
                  A directory where everyone matches. New hires photographed the same way as everyone else. A team page you&apos;re proud to send clients and candidates to. That&apos;s what one on-site session — or an ongoing program — looks like for East Bay companies.
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
                    name="Kaiser Business Campus, Pleasanton"
                    role="Admin Specialist"
                    quote="With very short notice, Alfonso from Rojas Photography was able to provide a quote and take our Innovations team's headshots and group photo. Alfonso and Niomi were amazing! They were complete pros, putting all of us at ease and getting some very good-looking photos - in real time! Our team could not be more satisfied with the work provided."
                  />
                </SectionReveal>
                <SectionReveal>
                  <TestimonialCard
                    name="Courtnay Lynch"
                    role="VP of People & Culture, Valley First Credit Union"
                    quote="Alfonso and Niomi captured our corporate event beautifully. Professional, responsive, easy to work with. They understand business and deliver results."
                  />
                </SectionReveal>
                <SectionReveal>
                  <TestimonialCard
                    name="Catherine Luke"
                    role="CEO"
                    quote="Professional, efficient, and high-quality. Within days, our new employee had a corporate headshot ready for our website and LinkedIn. Highly recommended for any business."
                  />
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection faqs={faqs} heading="East Bay Headshot Questions Answered" />

          <CTASection
            heading="Ready to Photograph Your East Bay Team?"
            subheading="Tell us your team size and location — we'll bring the full studio to your East Bay office and deliver consistent, professional headshots for everyone."
            primaryHref="/contact-quote"
            primaryLabel="Get a Team Quote"
          />
        </main>
      </div>
    </>
  );
}
