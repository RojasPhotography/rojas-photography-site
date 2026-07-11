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
import { generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'Do you offer professional headshots in Stockton, CA?',
    answer: 'Yes. We regularly serve business professionals and executives across Stockton and San Joaquin County. We offer both in-studio sessions at our Modesto studio (35–40 minutes from Stockton via Highway 99) and on-site photography at your Stockton office. Our portable professional studio — lighting, backdrops, and full equipment — produces the same high-end results on-site as in the studio. You choose what is most convenient.',
  },
  {
    question: 'How far is your studio from Stockton?',
    answer: 'Our studio is in Modesto, approximately 35–40 minutes from downtown Stockton via Highway 99. We also bring our full professional portable studio — lighting, backdrops, and equipment — directly to your Stockton office, conference room, or breakroom. The same quality results either way. A travel fee applies for on-site visits.',
  },
  {
    question: 'What do headshot sessions cost for Stockton professionals?',
    answer: '$150 for the session and $150 per final edited image you select. You only pay for the images you love — no package minimums. For Stockton teams needing on-site photography, pricing is customized by team size. Contact us for a quote.',
  },
  {
    question: 'Do you photograph Stockton corporate teams and events?',
    answer: 'Yes. We serve Stockton businesses across healthcare, legal, financial services, and corporate teams throughout San Joaquin County. On-site sessions bring our complete studio setup to your Stockton location so your full team gets consistent, polished headshots without disrupting the workday. Team photos delivered the same day.',
  },
  {
    question: 'How long does a headshot session take?',
    answer: 'Individual sessions take 60–90 minutes including consultation, expression coaching, multiple wardrobe changes, and a frame review before you leave. On-site team sessions run approximately 10–20 minutes per person — a team of 20 can typically be completed in a half-day.',
  },
  {
    question: 'Why do Stockton professionals choose Rojas Photography?',
    answer: 'Stockton professionals choose Rojas Photography because we understand business. With 15+ years of corporate leadership experience, we know what executives, attorneys, healthcare professionals, and business leaders need from their professional imagery. We have photographed 500+ professionals across the Central Valley and maintain 60+ five-star reviews.',
  },
];

export const metadata: Metadata = {
  title: 'Professional Headshots Stockton CA | $150 Session | Rojas Photography',
  description: 'Professional headshots in Stockton, CA for executives, attorneys, healthcare, and business teams. $150 session. In-studio or on-site. 48-hour delivery. San Joaquin County.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/stockton-headshots',
  },
  openGraph: {
    title: 'Professional Headshots in Stockton, CA | Rojas Photography',
    description: 'Polished corporate headshots for Stockton executives, attorneys & business professionals. In-studio or on-site. $150 session. 48-hour delivery.',
    url: 'https://rojasphotography.net/stockton-headshots',
    type: 'website',
    images: [{ url: '/images/Gina-0026 (1).jpg', alt: 'Professional headshots Stockton CA — Rojas Photography' }],
  },
};

const industries = [
  { name: 'Healthcare & Medical', orgs: 'Dignity Health, Dameron Hospital, San Joaquin General', note: 'White coat and business professional options — photographed for Healthgrades, Doximity, and hospital directories.' },
  { name: 'Legal & Attorneys', orgs: 'San Joaquin County Bar Association, downtown law firms', note: 'Authority-forward headshots for Avvo, Martindale-Hubbell, and firm directories.' },
  { name: 'Port of Stockton & Logistics', orgs: 'Executives, operations leaders, and logistics professionals', note: 'Executive headshots for LinkedIn, company directories, and press materials.' },
  { name: 'University of the Pacific', orgs: 'Faculty, administrators, and department leadership', note: 'Academic professional headshots balancing authority with approachability.' },
  { name: 'Financial Services', orgs: 'Financial advisors, bankers, CPAs, and insurance professionals', note: 'High-trust professional imagery for FINRA profiles, firm websites, and client-facing platforms.' },
  { name: 'Real Estate', orgs: 'Stockton and San Joaquin County real estate agents', note: 'High-contrast headshots optimized for yard signs, Zillow, Realtor.com, and marketing materials.' },
];

const services = [
  { icon: Camera, title: 'In-Studio Headshots', desc: 'Professional session at our Modesto studio — 35 minutes from Stockton. Guided coaching, multiple wardrobe changes, frame review before you leave.', price: '$150 session + $150/image', href: '/premium-headshots', img: '/images/headshots/headshot-ceo-nutrition.jpg', alt: 'Professional headshot session' },
  { icon: Users, title: 'On-Site Team Photography', desc: 'We bring our complete studio to your Stockton office. Your full team photographed in consistent lighting and background without leaving the building.', price: 'Custom quote', href: '/on-site-photography', img: '/images/BB Individual Headshot Session.png', alt: 'On-site team headshot photography' },
  { icon: Building2, title: 'Commercial Photography', desc: 'Brand imagery, product, architectural, and marketing visuals for Stockton businesses and commercial real estate.', price: 'Custom quote', href: '/commercial', img: '/images/DoctorOffice 4.jpg', alt: 'Commercial photography for businesses' },
  { icon: Video, title: 'Video Production', desc: 'Corporate video, brand films, testimonials, and FAA Part 107 certified drone footage for Stockton businesses.', price: 'Custom quote', href: '/video', img: '/images/BBSI-Corp-Video.jpg', alt: 'Corporate video production' },
  { icon: Star, title: 'Event Photography', desc: 'Professional coverage for Stockton corporate events, conferences, award ceremonies, and business gatherings. 24–48 hour delivery.', price: 'Custom quote', href: '/event-photography', img: '/images/CLA AM 25 335.jpg', alt: 'Corporate event photography coverage' },
  { icon: Camera, title: 'Headshot Booth', desc: 'A professional headshot station set up at your Stockton event or office — high volume, fast-moving, and polished.', price: 'Priced by the hour', href: '/headshot-booth', img: '/images/kaiser-bts-headshots1.jpeg', alt: 'Headshot booth at corporate event' },
];

export default function StocktonHeadshotsPage() {
  return (
    <>
      <SchemaScript schema={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://rojasphotography.net/stockton-headshots',
        name: 'Rojas Photography – Stockton Headshots',
        image: 'https://rojasphotography.net/images/Alfonso+Niomi-0026.jpg',
        description: 'Professional headshots and photography services for executives, attorneys, and business professionals in Stockton and San Joaquin County.',
        address: { '@type': 'PostalAddress', addressLocality: 'Modesto', addressRegion: 'CA', postalCode: '95350', addressCountry: 'US' },
        areaServed: [
          { '@type': 'City', name: 'Stockton' },
          { '@type': 'City', name: 'Lodi' },
          { '@type': 'City', name: 'Tracy' },
          { '@type': 'City', name: 'Manteca' },
        ],
        telephone: '+1-209-380-3727',
        email: 'alfonso@rojasphotography.net',
        url: 'https://rojasphotography.net/stockton-headshots',
        priceRange: '$$',
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '60' },
      }} />
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Stockton Headshots', url: 'https://rojasphotography.net/stockton-headshots' },
      ])} />

      <div className="min-h-screen bg-white">
        <HeroSection image="/images/Hero Image1.jpg" title="Professional Headshots in Stockton, CA" tag="Serving Stockton & San Joaquin County | Rojas Photography" objectPosition="center 30%" fullHeight={false}>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">Your headshot is the first thing Stockton clients, employers, and colleagues see before you ever meet. Make sure it earns the meeting.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/premium-headshots#booking-heading" className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">Book Your Session</Link>
            <a href="tel:2093803727" className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">Call 209-380-3727</a>
          </div>
        </HeroSection>

        <main id="main-content">

          {/* Stats Bar */}
          <SectionReveal>
            <section className="py-12 px-8 bg-[var(--color-bg-warm)] border-b border-gray-100">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
                <div><p className="text-3xl font-bold text-[var(--color-primary)]">500+</p><p className="text-sm text-[var(--color-text-muted)]">Professionals Photographed</p></div>
                <div className="hidden md:block w-px h-10 bg-gray-200" />
                <div><p className="text-3xl font-bold text-[var(--color-primary)]">60+</p><p className="text-sm text-[var(--color-text-muted)]">Five-Star Reviews</p></div>
                <div className="hidden md:block w-px h-10 bg-gray-200" />
                <div><p className="text-3xl font-bold text-[var(--color-primary)]">48 hrs</p><p className="text-sm text-[var(--color-text-muted)]">Delivery Time</p></div>
                <div className="hidden md:block w-px h-10 bg-gray-200" />
                <div><p className="text-sm text-[var(--color-text-muted)]">Trusted by</p><p className="font-semibold text-[var(--color-text-dark)]">Comcast · Save Mart · CLA</p></div>
              </div>
            </section>
          </SectionReveal>

          {/* Character + Problem */}
          <section className="py-16 md:py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-6">Stockton Is Growing. Your Professional Image Should Keep Up.</h2>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>Stockton&apos;s business community is expanding — healthcare systems, logistics at the Port, legal practices, financial services, and a growing tech presence across San Joaquin County. In every one of these industries, your professional image is doing work before you walk in the room.</p>
                  <p>An outdated photo on LinkedIn, a low-quality headshot on your firm directory, or a mismatched image across platforms quietly signals that you haven&apos;t kept up. It costs you credibility before you have a chance to demonstrate it.</p>
                  <p>A polished, current headshot from a professional session tells the right story — that you take your work seriously, and you are who you say you are.</p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Industries */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">Serving Stockton&apos;s Professional Community</h2>
                <p className="text-center text-[var(--color-text-body)] mb-12 text-lg max-w-2xl mx-auto">Every industry in San Joaquin County has its own visual standard. We know what professional credibility looks like in each one.</p>
              </SectionReveal>
              <div className="space-y-4">
                {industries.map(item => (
                  <SectionReveal key={item.name}>
                    <div className="bg-white rounded-xl p-6 border border-gray-100">
                      <h3 className="font-bold text-[var(--color-text-dark)] mb-1">{item.name}</h3>
                      <p className="text-sm text-[var(--color-text-muted)] mb-2">{item.orgs}</p>
                      <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{item.note}</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">Photography Services Available in Stockton</h2>
                <p className="text-center text-[var(--color-text-body)] mb-14 text-lg max-w-2xl mx-auto">Full-service corporate photography for Stockton businesses — individual headshots through full team and commercial projects.</p>
              </SectionReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map(service => (
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

          {/* The Plan — 3 steps */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">How It Works</h2>
                <p className="text-center text-[var(--color-text-body)] mb-12 text-lg max-w-xl mx-auto">Three steps. No awkwardness. Images you will actually use.</p>
              </SectionReveal>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { step: '1', title: 'Book Online', desc: 'Schedule your session at rojasphotography.net. Choose in-studio (Modesto) or request an on-site quote for your Stockton location.' },
                  { step: '2', title: 'Get Coached', desc: 'Alfonso guides your expression, posture, and energy throughout the session. You leave looking like the professional you are — not stiff or forced.' },
                  { step: '3', title: 'Receive Your Images', desc: 'Review your best frames before you leave. Professionally edited images delivered within 48 hours. Ready for LinkedIn, your firm directory, and everywhere else.' },
                ].map(item => (
                  <SectionReveal key={item.step}>
                    <div className="bg-white rounded-xl p-8 border border-gray-100 text-center h-full">
                      <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">{item.step}</div>
                      <h3 className="font-bold text-[var(--color-text-dark)] text-lg mb-3">{item.title}</h3>
                      <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{item.desc}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Preview */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-text-dark)]">The Work</h2>
              </SectionReveal>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { src: '/images/Gina-0026 (1).jpg', alt: 'Professional headshot — Stockton executive' },
                  { src: '/images/Miguel-(2 of 6) (1).jpg', alt: 'Corporate headshot — Stockton business professional' },
                  { src: '/images/Joyce-0029.jpg', alt: 'Business headshot — Stockton professional' },
                ].map(img => (
                  <SectionReveal key={img.src} className="img-hover-zoom rounded-xl overflow-hidden aspect-[3/4] relative">
                    <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Success Vision */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-6">What a Great Headshot Does for You</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Your LinkedIn profile earns views, connection requests, and messages from the right people',
                    'Clients and employers feel confident before they ever reach out',
                    'Your image on your firm directory, website, and marketing materials is consistent and current',
                    'You look like who you actually are — a credible, capable professional',
                  ].map(item => (
                    <div key={item} className="flex gap-3 p-5 bg-white rounded-xl border border-gray-100">
                      <CheckCircle2 size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-text-dark)]">What Clients Say</h2>
              </SectionReveal>
              <div className="grid md:grid-cols-3 gap-6">
                <SectionReveal>
                  <TestimonialCard name="Catherine Luke" role="CEO" quote="Professional, efficient, and high-quality. Within days, our new employee had a corporate headshot ready for our website and LinkedIn. Highly recommended for any business." />
                </SectionReveal>
                <SectionReveal>
                  <TestimonialCard name="Joyce Ulrich" role="Entrepreneur, Modesto" quote="Alfonso and Niomi create a comfortable environment that puts you at ease immediately. The professional headshots turned out beautifully — exactly what I needed for my business." />
                </SectionReveal>
                <SectionReveal>
                  <TestimonialCard name="Courtnay Lynch" role="VP of People & Culture, Valley First Credit Union" quote="Alfonso and Niomi captured our corporate event beautifully. Professional, responsive, easy to work with. They understand business and deliver results." />
                </SectionReveal>
              </div>
            </div>
          </section>

          <FAQSection faqs={faqs} heading="Stockton Headshots — Frequently Asked Questions" />
          <CTASection heading="Ready to Book Your Stockton Headshot?" subheading="$150 session. Expression coaching included. 48-hour delivery. In-studio in Modesto or on-site at your Stockton location." primaryLabel="Book Your Session" primaryHref="/premium-headshots#booking-heading" showContactInfo={false} />
        </main>
      </div>
    </>
  );
}
