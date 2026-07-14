import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, Users, Building2, Video, Star } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import { generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'How far is Bakersfield from your studio?',
    answer:
      'Our studio is located in Modesto, CA — approximately 2.5 hours from Bakersfield. Many Bakersfield professionals make the drive for a studio session, while others prefer our on-site option where we bring a complete professional studio directly to your office, clinic, or firm in Bakersfield. Contact us to discuss which option works best for your situation.',
  },
  {
    question: 'What industries do you serve in Bakersfield?',
    answer:
      'We serve the full range of Bakersfield\'s professional community: oil and energy sector professionals, healthcare professionals at Kern Medical Center, Adventist Health Bakersfield, and Dignity Health, attorneys and legal professionals serving the Kern County Bar, agricultural and agribusiness executives, financial advisors and bankers, and real estate agents throughout Kern County.',
  },
  {
    question: 'Do you photograph teams in Bakersfield?',
    answer:
      'Yes. We offer on-site team headshot sessions throughout California, including Bakersfield. We bring a complete professional studio — lighting, backdrop, camera equipment — directly to your location. All team members are photographed in consistent lighting and background so your directory, website, and marketing materials look cohesive. Contact us for team pricing and availability.',
  },
  {
    question: 'How much do professional headshots cost in Bakersfield?',
    answer:
      '$150 for the session and $150 per final edited image. For on-site sessions in Bakersfield, travel fees apply — contact us for a quote based on your team size and location. Individual sessions can also be completed at our Modesto studio with no travel fee.',
  },
  {
    question: 'How long does a headshot session take?',
    answer:
      'Individual sessions take 60–90 minutes including consultation, coaching, shooting, and wardrobe changes. On-site team sessions run approximately 10–20 minutes per person. A team of 20 can typically be completed in a half-day.',
  },
  {
    question: 'How often should Bakersfield professionals update their headshots?',
    answer:
      'Annually, or every other year at minimum. Your professional brand evolves — roles change, appearances change, and the standard for professional imagery rises every year. If your current headshot is more than two years old, or no longer looks like you walking into a meeting, it is already costing you.',
  },
];

export const metadata: Metadata = {
  title: 'Professional Headshots in Bakersfield, CA | Rojas Photography',
  description:
    'Professional headshots in Bakersfield, CA. Oil & energy, healthcare, legal, and agricultural business professionals. $150 session. On-site available throughout Kern County.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/bakersfield-headshots',
  },
  openGraph: {
    title: 'Professional Headshots in Bakersfield, CA | Rojas Photography',
    description:
      'Professional headshots in Bakersfield, CA. Oil & energy, healthcare, legal, and agricultural business professionals. $150 session. On-site available.',
    url: 'https://rojasphotography.net/bakersfield-headshots',
    type: 'website',
    images: [{ url: '/images/Hero Image1.jpg', alt: 'Professional headshots Bakersfield CA — Rojas Photography' }],
  },
};

const services = [
  { icon: Camera, name: 'In-Studio Headshots', detail: 'Studio in Modesto, CA — $150 session + $150/image', href: '/premium-headshots', img: '/images/headshots/headshot-ceo-nutrition-02.jpg', alt: 'Professional headshot session' },
  { icon: Users, name: 'On-Site Team Photography', detail: 'We bring our full portable studio to you in Bakersfield — custom quote by team size', href: '/on-site-photography', img: '/images/BB Individual Headshot Session.png', alt: 'On-site team headshot photography' },
  { icon: Building2, name: 'Commercial Photography', detail: 'Product, brand, and architectural photography — custom quote', href: '/commercial', img: '/images/DoctorOffice 4.jpg', alt: 'Commercial photography for businesses' },
  { icon: Video, name: 'Video Production', detail: 'Corporate video, testimonials, drone — custom quote', href: '/video', img: '/images/BBSI-Corp-Video.jpg', alt: 'Corporate video production' },
  { icon: Star, name: 'Event Photography', detail: 'Conferences, galas, corporate events — custom quote', href: '/event-photography', img: '/images/CLA AM 25 335.jpg', alt: 'Corporate event photography coverage' },
  { icon: Camera, name: 'Headshot Booth', detail: 'Live event headshot booth — hourly rates', href: '/headshot-booth', img: '/images/kaiser-bts-headshots1.jpeg', alt: 'Headshot booth at corporate event' },
];

const reasons = [
  { title: 'Sector Understanding', desc: 'We understand the professional landscape of Kern County — oil and energy, healthcare, legal, agricultural, and financial services each have distinct branding needs.' },
  { title: 'Studio or On-Site', desc: 'Visit our Modesto studio or have us bring a complete professional setup directly to your office, firm, clinic, or event venue in Bakersfield.' },
  { title: '15+ Years Corporate Experience', desc: 'Alfonso brings 15+ years in corporate leadership and 500+ professionals photographed across California. He understands what professional credibility looks like.' },
  { title: '48-Hour Turnaround', desc: 'Individual sessions delivered in 48 hours. On-site team sessions delivered the same day. No waiting weeks for images you need now.' },
];

export default function BakersfieldHeadshotsPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Bakersfield Headshots', url: 'https://rojasphotography.net/bakersfield-headshots' },
      ])} />

      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/Hero Image1.jpg"
          title="Professional Headshots in Bakersfield, CA"
          tag="Kern County | Rojas Photography"
          objectPosition="center 30%"
          fullHeight={false}
        >
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Serving oil and energy professionals, healthcare providers, legal professionals, and agricultural business leaders throughout Kern County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/premium-headshots#booking-heading" className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">
              Book Your Session
            </Link>
            <Link href="/professional-headshot-cost" className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">
              See Pricing
            </Link>
          </div>
        </HeroSection>

        <main id="main-content">

          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  Corporate Photography Serving Bakersfield & Kern County
                </h2>
                <p className="text-center text-[var(--color-text-body)] text-lg mb-14 max-w-2xl mx-auto">
                  Bakersfield is home to one of California&apos;s most diverse professional economies — energy, agriculture, healthcare, legal, and financial services. Every professional in every sector needs an image that reflects the authority they have built.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map(s => (
                  <SectionReveal key={s.name}>
                    <Link href={s.href} aria-label={`Learn more about ${s.name}`} className="block group">
                      <div className="relative h-[340px] rounded-xl overflow-hidden hover:shadow-2xl transition-all">
                        <Image src={s.img} alt={s.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
                        <div className="relative z-10 p-7 h-full flex flex-col justify-end">
                          <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm">
                            <s.icon className="text-white" size={22} aria-hidden="true" />
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2">{s.name}</h3>
                          <p className="text-white/80 text-sm leading-relaxed mb-3">{s.detail}</p>
                          <span className="text-white font-semibold text-sm group-hover:underline">Learn More →</span>
                        </div>
                      </div>
                    </Link>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  Why Bakersfield Professionals Choose Rojas Photography
                </h2>
                <p className="text-center text-[var(--color-text-body)] text-lg mb-14 max-w-2xl mx-auto">
                  Professional photography that understands the unique professional landscape of Kern County.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-5">
                {reasons.map((r, i) => (
                  <SectionReveal key={r.title}>
                    <div className="flex gap-5 p-7 bg-white rounded-xl border border-gray-100 h-full">
                      <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">{i + 1}</div>
                      <div>
                        <h3 className="font-bold text-[var(--color-text-dark)] text-lg mb-2">{r.title}</h3>
                        <p className="text-[var(--color-text-body)] leading-relaxed text-sm">{r.desc}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-6">
                  Your Image Should Match Your Professional Reputation
                </h2>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>
                    Bakersfield professionals work in some of the most demanding sectors in California. Energy executives managing multi-million dollar operations. Healthcare providers at regional medical centers trusted with patient lives. Attorneys navigating complex cases in Kern County courts. Agricultural leaders running operations that feed the state.
                  </p>
                  <p>
                    Every one of those professionals deserves a headshot that reflects the authority, competence, and credibility they have built. Not a generic studio photo. Not an AI approximation. A real image, coached and crafted to communicate who you actually are.
                  </p>
                  <p>
                    Whether you visit our Modesto studio or we come to you in Bakersfield, every session includes professional lighting, real-time expression and posing coaching, unlimited wardrobe changes, and 48-hour delivery. The same quality that serves executives at Comcast, Save Mart, and the California Lawyers Association — now available to Bakersfield professionals.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">What Clients Say</h2>
              </SectionReveal>
              <div className="grid md:grid-cols-3 gap-6">
                <SectionReveal>
                  <TestimonialCard name="Catherine Luke" role="CEO" quote="Professional, efficient, and high-quality. Within days, we had a corporate headshot ready for our website and LinkedIn. Highly recommended for any business." />
                </SectionReveal>
                <SectionReveal>
                  <TestimonialCard name="Joyce Ulrich" role="Entrepreneur, Modesto" quote="Alfonso and Niomi create a comfortable environment that puts you at ease immediately. The professional headshots turned out beautifully." />
                </SectionReveal>
                <SectionReveal>
                  <TestimonialCard name="Francisco Chamorro" role="BBSI — Business Management Solutions" quote="Responsive, open to input and above all super professional. The results were just what we expected. I would recommend." />
                </SectionReveal>
              </div>
            </div>
          </section>

          <FAQSection faqs={faqs} heading="Bakersfield Headshots — Frequently Asked Questions" />

          <CTASection
            heading="Ready for Professional Headshots in Bakersfield?"
            subheading="$150 session. $150 per image. On-site available throughout Kern County. 48-hour delivery."
            primaryLabel="Book Your Session"
            primaryHref="/premium-headshots#booking-heading"
            showContactInfo
          />
        </main>
      </div>
    </>
  );
}
