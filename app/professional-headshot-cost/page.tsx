import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import SchemaScript from '../components/SchemaScript';
import { generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'How much does a professional headshot cost?',
    answer:
      'Professional headshot pricing typically ranges from $150–$500 for a session fee, with per-image selection fees of $50–$300 per image. Budget photographers charge $50–$150 but often lack the lighting, coaching, and editing quality needed for corporate use. Mid-range professional photographers charge $150–$300 per session with $100–$200 per image. Premium corporate headshot photographers charge $300–$500+ per session. At Rojas Photography, sessions are $150 with images at $150 each — you only pay for what you love.',
  },
  {
    question: 'What is included in a professional headshot session?',
    answer:
      'A professional headshot session should include: pre-session consultation, professional studio lighting, real-time posing and expression coaching, unlimited wardrobe changes, immediate image review, professional editing and color correction, and delivery via a private online gallery. At Rojas Photography, all of this is included with every session — delivered within 48 hours.',
  },
  {
    question: 'Is it better to pay per image or buy a package?',
    answer:
      'Per-image pricing is almost always better for the client. With packages, you\'re forced to select a minimum number of images whether you love them or not. With per-image pricing, you only pay for the shots you genuinely want to use. At Rojas Photography, there is no minimum purchase — if you love three images, you pay for three. If you love one, you pay for one.',
  },
  {
    question: 'How many headshot images will I receive?',
    answer:
      'Most individual sessions produce 50–100 raw images from which you select your favorites for editing. The number of final edited images depends on how many you choose to purchase. Most clients select 2–5 images for different uses — LinkedIn, company website, speaking bio, business card, and social media.',
  },
  {
    question: 'Do I need a professional headshot or can I use a phone photo?',
    answer:
      'For any professional context — LinkedIn, company website, conference speaker bios, legal directories, medical profiles — a phone photo signals that your professional image is not a priority. Clients, employers, and referral partners judge credibility from your photo before you ever speak. A professional headshot is not a luxury; it is a business tool that works for you 24 hours a day.',
  },
  {
    question: 'How long does a headshot session take?',
    answer:
      'Sessions at Rojas Photography typically run 60–90 minutes, though we can move faster if needed. There is no hard time limit. Sessions include unlimited wardrobe changes and real-time coaching throughout. Your professionally edited images are delivered within 48 hours.',
  },
  {
    question: 'Can I get headshots for my entire team?',
    answer:
      'Yes. For teams, we offer on-site photography at your Modesto or Central Valley location — we bring our full studio setup to your office. On-site team photography is custom-priced based on team size and location. We can photograph 20–30 people per day efficiently without disrupting your operations. Contact us for a team quote.',
  },
  {
    question: 'How soon will I receive my headshots?',
    answer:
      'Standard delivery is 48 hours. For time-sensitive needs, rush delivery (24-hour turnaround) is available for an additional $75. All images are professionally edited, color-corrected, and delivered via a private online gallery you can download immediately.',
  },
];

export const metadata: Metadata = {
  title: 'Professional Headshot Cost | 2026 Pricing Guide',
  description:
    'How much does a professional headshot cost? 2026 pricing guide — session fees, per-image rates & what\'s included. Modesto studio. $150 session + $150/image. Book today.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/professional-headshot-cost',
  },
  openGraph: {
    title: 'Professional Headshot Cost | 2026 Pricing Guide',
    description:
      'How much does a professional headshot cost? Real 2026 pricing — session fees, per-image rates, and what to expect at each price point.',
    url: 'https://rojasphotography.net/professional-headshot-cost',
    type: 'article',
    images: [
      {
        url: '/images/headshots/headshot-executive-ceo.jpg',
        alt: 'Professional headshot pricing guide — Rojas Photography Modesto CA',
      },
    ],
  },
};

const pricingTiers = [
  {
    label: 'Budget',
    range: '$50–$150',
    session: 'session',
    highlight: false,
    includes: [
      'Basic studio or outdoor shoot',
      'Limited coaching or posing direction',
      'Minimal or no editing',
      'Often delivered as-is or lightly retouched',
    ],
    misses: [
      'Professional lighting setup',
      'Real-time expression coaching',
      'Color correction and professional editing',
      'Corporate-ready quality',
    ],
    note: 'Fine for casual use. Not recommended for LinkedIn, company websites, or client-facing materials.',
  },
  {
    label: 'Professional',
    range: '$150–$300',
    session: 'session',
    highlight: true,
    includes: [
      'Professional studio lighting',
      'Posing and expression coaching throughout',
      'Unlimited wardrobe changes',
      'Professional editing and color correction',
      '48-hour delivery to private gallery',
    ],
    misses: [],
    note: 'The right choice for most executives, attorneys, healthcare professionals, financial advisors, and business owners.',
  },
  {
    label: 'Premium',
    range: '$300–$500+',
    session: 'session',
    highlight: false,
    includes: [
      'Everything in the Professional tier',
      'Extended session time',
      'Hair and makeup included (some)',
      'Multiple location setups',
      'Dedicated retouching artist',
    ],
    misses: [],
    note: 'Best for high-visibility executives, public figures, and brand campaigns where image is a core marketing asset.',
  },
];

const whatMatters = [
  { title: 'Lighting', desc: 'Professional lighting is the single biggest difference between a good headshot and a great one. It shapes your face, eliminates harsh shadows, and creates depth that a ring light or window simply cannot replicate.' },
  { title: 'Coaching', desc: 'Most people are not naturally comfortable in front of a camera. A skilled photographer directs your posture, chin position, eye contact, and expression in real time — the result is a photo that looks natural because it was guided, not posed.' },
  { title: 'Editing', desc: 'Professional editing is not about altering how you look. It is color correction, skin tone balancing, blemish removal, and shine reduction — the difference between an image that looks like a snapshot and one that looks like it belongs on a company website.' },
  { title: 'Turnaround', desc: 'Professional photographers deliver within 24–72 hours. If a photographer says "2–4 weeks," that is a red flag — either they are overwhelmed or editing is not a priority.' },
  { title: 'Coaching Experience', desc: 'A photographer who shoots weddings and portraits may produce beautiful images, but corporate headshots require a specific understanding of professional branding, LinkedIn optimization, and executive presence. Specialization matters.' },
];

const redFlags = [
  'No clear pricing on their website — forces you to submit before knowing if they\'re in budget',
  'Turnaround longer than 1 week for individual headshots',
  'No portfolio of corporate or professional headshots specifically',
  'Packages that force you to buy a minimum number of images',
  'No posing or expression coaching mentioned anywhere',
  'Images delivered without professional editing or color correction',
  'Outdated portfolio — more than 2-3 years old',
];

export default function ProfessionalHeadshotCostPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Premium Headshots', url: 'https://rojasphotography.net/premium-headshots' },
        { name: 'Professional Headshot Cost', url: 'https://rojasphotography.net/professional-headshot-cost' },
      ])} />

      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/Hero Image1.jpg"
          title="How Much Does a Professional Headshot Cost?"
          tag="2026 Pricing Guide | Rojas Photography"
          objectPosition="center 30%"
          fullHeight={false}
        >
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Real pricing, honest breakdowns, and exactly what you should expect at each price point — so you can make a confident decision and stop guessing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/premium-headshots#booking-heading"
              className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Book Your Session
            </Link>
            <Link
              href="/discovery-call"
              className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Schedule Discovery Call
            </Link>
          </div>
        </HeroSection>

        <main id="main-content">

          {/* Why pricing is confusing */}
          <section className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-8">
                  Why Headshot Pricing Is So Hard to Find
                </h2>
                <div className="grid md:grid-cols-2 gap-8 text-[var(--color-text-body)] leading-relaxed text-lg">
                  <p>
                    Most photographers don&apos;t publish their prices. You submit a contact form, wait for a response, and still can&apos;t tell if the photographer you&apos;re looking at is $200 or $2,000. That makes comparison nearly impossible when you&apos;re trying to budget.
                  </p>
                  <p>
                    This guide gives you real numbers, explains the difference between price points, and tells you what you should actually be getting at each level — so you can walk into any conversation with a photographer knowing exactly what to ask and what to expect.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Primary Pricing — Rojas */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4 text-center">
                  Rojas Photography Headshot Pricing
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-14 text-lg max-w-2xl mx-auto">
                  Simple, transparent pricing. No packages. No minimums. You only pay for the images you love.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <SectionReveal>
                  <div className="bg-[var(--color-bg-warm)] rounded-xl p-10 text-center border border-gray-100">
                    <p className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Session Fee</p>
                    <p className="text-5xl font-bold text-[var(--color-primary)] mb-2">$150</p>
                    <p className="text-[var(--color-text-muted)] text-sm mb-6">per session</p>
                    <ul className="text-left space-y-3 text-sm text-[var(--color-text-body)]">
                      {[
                        '60–90 minute guided session',
                        'Professional studio lighting',
                        'Real-time posing & expression coaching',
                        'Unlimited wardrobe changes',
                        'Immediate image review on set',
                      ].map(item => (
                        <li key={item} className="flex gap-2">
                          <CheckCircle2 size={15} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="bg-[var(--color-primary)] rounded-xl p-10 text-center shadow-lg">
                    <p className="text-sm font-semibold text-white/70 uppercase tracking-wide mb-2">Per Image</p>
                    <p className="text-5xl font-bold text-white mb-2">$150</p>
                    <p className="text-white/70 text-sm mb-6">per selected image</p>
                    <ul className="text-left space-y-3 text-sm text-white/90">
                      {[
                        'Professional editing & color correction',
                        'Skin tone balancing & blemish removal',
                        'Shine reduction & hair cleanup',
                        'Delivered to private online gallery',
                        '48-hour turnaround',
                      ].map(item => (
                        <li key={item} className="flex gap-2">
                          <CheckCircle2 size={15} className="text-white flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>
              </div>
              <SectionReveal>
                <div className="bg-[var(--color-bg-warm)] rounded-xl p-7 border border-gray-100 text-center">
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    <strong className="text-[var(--color-text-dark)]">No minimum purchase.</strong> Most clients select 2–5 images for different uses — LinkedIn, company website, speaking bio, and business card. You decide what you need. Rush delivery (24-hour turnaround) available for an additional $75.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Gallery */}
          <section className="py-8 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { src: '/images/headshots/headshot-attorney-01.jpg', alt: 'Attorney professional headshot — Rojas Photography Modesto' },
                  { src: '/images/headshots/headshot-finance-ceo.jpg', alt: 'Finance CEO headshot — Rojas Photography Central Valley' },
                  { src: '/images/headshots/headshot-healthcare-executive-01.jpg', alt: 'Healthcare executive headshot — Rojas Photography' },
                ].map((img) => (
                  <SectionReveal key={img.src} className="relative">
                    <div className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                      <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover object-top" />
                    </div>
                  </SectionReveal>
                ))}
              </div>
              <p className="text-center text-sm text-[var(--color-text-muted)] mt-4">
                Corporate headshots for attorneys, executives, healthcare professionals & more —{' '}
                <Link href="/premium-headshots" className="text-[var(--color-primary)] hover:underline">view full headshot gallery →</Link>
              </p>
            </div>
          </section>

          {/* Industry Price Tiers */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4 text-center">
                  What You Get at Each Price Point
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-14 text-lg max-w-2xl mx-auto">
                  Price differences in headshot photography are real — here is exactly what changes as you move up the range.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-3 gap-6">
                {pricingTiers.map((tier) => (
                  <SectionReveal key={tier.label}>
                    <div className={`rounded-xl p-8 h-full flex flex-col border ${tier.highlight ? 'bg-white border-[var(--color-primary)] shadow-lg' : 'bg-white border-gray-100'}`}>
                      {tier.highlight && (
                        <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-widest mb-3">Most Popular</span>
                      )}
                      <p className="text-lg font-bold text-[var(--color-text-dark)]">{tier.label}</p>
                      <p className="text-3xl font-bold text-[var(--color-primary)] mb-1">{tier.range}</p>
                      <p className="text-sm text-[var(--color-text-muted)] mb-6">{tier.session}</p>
                      <ul className="space-y-2 mb-4 flex-1">
                        {tier.includes.map(item => (
                          <li key={item} className="flex gap-2 text-sm text-[var(--color-text-body)]">
                            <CheckCircle2 size={14} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                        {tier.misses.map(item => (
                          <li key={item} className="flex gap-2 text-sm text-[var(--color-text-muted)]">
                            <XCircle size={14} className="text-red-300 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-[var(--color-text-muted)] italic leading-relaxed border-t border-gray-100 pt-4 mt-2">{tier.note}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* What actually matters */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4 text-center">
                  5 Things That Actually Determine Headshot Quality
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-14 text-lg max-w-2xl mx-auto">
                  Price matters — but these are the things that separate a headshot you&apos;re proud to use from one you quietly hide.
                </p>
              </SectionReveal>
              <div className="space-y-4">
                {whatMatters.map((item, i) => (
                  <SectionReveal key={item.title}>
                    <div className="flex gap-5 p-6 bg-[var(--color-bg-warm)] rounded-xl">
                      <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--color-text-dark)] mb-1">{item.title}</h3>
                        <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Red Flags */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4 text-center">
                  Red Flags When Hiring a Headshot Photographer
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-12 text-lg max-w-2xl mx-auto">
                  Price alone is not the only thing to watch. These warning signs apply at any budget level.
                </p>
              </SectionReveal>
              <SectionReveal>
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                  <ul className="space-y-4">
                    {redFlags.map(flag => (
                      <li key={flag} className="flex gap-3 text-[var(--color-text-body)] text-sm leading-relaxed">
                        <AlertTriangle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                        {flag}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* About Rojas CTA */}
          <section className="py-20 px-8 bg-white border-y border-gray-100">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <SectionReveal>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src="/images/headshots/headshot-comcast-executive.jpg"
                      alt="Corporate headshot — Rojas Photography Modesto CA"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="space-y-5">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
                      Corporate Headshots in Modesto & the Central Valley
                    </h2>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      Rojas Photography is based in Modesto, CA. We photograph executives, attorneys, healthcare professionals, financial advisors, real estate agents, and business teams throughout the Central Valley and statewide.
                    </p>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      With 15+ years of corporate experience and 60+ five-star reviews, we understand how professionals want to be seen — and how to get them there. Every session includes full coaching, professional lighting, unlimited wardrobe changes, and 48-hour delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <Link
                        href="/premium-headshots#booking-heading"
                        className="btn-primary px-8 py-3 text-base font-semibold rounded-full inline-block text-center"
                      >
                        Book Your Session — $150
                      </Link>
                      <Link
                        href="/how-to-prepare-for-headshots"
                        className="btn-outline px-8 py-3 text-base font-semibold rounded-full inline-block text-center"
                      >
                        How to Prepare
                      </Link>
                    </div>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection
            faqs={faqs}
            heading="Professional Headshot Pricing — Frequently Asked Questions"
          />

          <CTASection
            heading="Ready to Invest in a Headshot That Works for You?"
            subheading="$150 session. $150 per image. No minimums. 48-hour delivery. Serving Modesto, the Central Valley, and all of California."
            primaryLabel="Book Your Session"
            primaryHref="/premium-headshots#booking-heading"
            showContactInfo={false}
          />

        </main>
      </div>
    </>
  );
}
