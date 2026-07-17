import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import { generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'What should a real estate agent wear for a headshot?',
    answer:
      'Professional but approachable — a well-fitted blazer over a simple, solid-colored top is the standard. Avoid busy patterns that create visual noise on yard signs and postcards. High-contrast colors (navy, burgundy, charcoal) read well at distance on outdoor marketing. Bring 2–3 options and we will help you choose what works best for your brand and the marketing materials your photo will appear on.',
  },
  {
    question: 'How often should real estate agents update their headshots?',
    answer:
      'Annually. Your face is on every yard sign, every flyer, every listing platform, and every door hanger you produce. When the person who shows up to a listing presentation looks meaningfully different from the photo on your marketing, the client notices — and that discrepancy creates a trust gap before you say a word. Update annually to keep your brand current and your marketing working.',
  },
  {
    question: 'Can I use my headshot on yard signs and all marketing materials?',
    answer:
      'Yes. Every image delivered by Rojas Photography includes full commercial usage rights. Use your headshot on yard signs, postcards, door hangers, print advertising, digital marketing, your brokerage website, Zillow, Realtor.com, LinkedIn, and anywhere else your professional brand appears — with no additional licensing fees.',
  },
  {
    question: 'What background works best for real estate headshots?',
    answer:
      'A clean neutral background — white, light gray, or soft environmental — works for most platforms. For yard signs specifically, high contrast is important: a darker background behind a lighter outfit (or vice versa) ensures your face reads clearly at distance. We can also shoot outdoors in a clean, professional setting if that fits your brand. Discuss your marketing uses in your pre-session consultation and we will tailor the backdrop accordingly.',
  },
  {
    question: 'How much do real estate headshots cost?',
    answer:
      '$150 for the session and $150 per final edited image, with no minimums. Most real estate agents select 2–3 images — one primary headshot for yard signs and formal marketing, one warmer alternate for social media and LinkedIn, and sometimes a third for a specific campaign. Full commercial usage rights are included with every image.',
  },
  {
    question: 'Can you come to my brokerage for team headshots?',
    answer:
      'Yes. We bring a full professional studio setup — lighting, backdrops, camera equipment — directly to your brokerage. All agents are photographed in consistent lighting against a consistent background, so your team page, listing materials, and directory all look cohesive. Contact us for brokerage team pricing.',
  },
  {
    question: 'Should I smile in my real estate headshot?',
    answer:
      'Yes — a genuine, warm smile is essential in real estate. Clients are making one of the largest financial decisions of their lives and they want an agent they feel they can trust and communicate with openly. An approachable expression signals that you are someone they can be honest with. We coach you through the difference between a forced pose and a genuine expression that reads well on camera.',
  },
  {
    question: 'How many images do I need for real estate marketing?',
    answer:
      'Most agents get the most value from 2–3 images: a primary headshot for formal marketing (yard signs, listing flyers, business cards), a warmer expression for social media and LinkedIn, and optionally a third for a specific seasonal campaign or brokerage directory. Unlimited wardrobe changes are included in every session, so multiple looks are easy to capture in one appointment.',
  },
];

export const metadata: Metadata = {
  title: 'Real Estate Agent Headshots | Professional Photography for Realtors | Rojas Photography',
  description:
    'Professional headshots for real estate agents and realtors in Modesto & Central Valley. Your face is your brand — make it work. $150 session. 48-hr delivery.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/real-estate-headshots',
  },
  openGraph: {
    title: 'Real Estate Agent Headshots | Professional Photography for Realtors | Rojas Photography',
    description:
      'Professional headshots for real estate agents and realtors in Modesto & Central Valley. Your face is your brand — make it work. $150 session. 48-hr delivery.',
    url: 'https://rojasphotography.net/real-estate-headshots',
    type: 'article',
    images: [{ url: '/images/Hero Image1.jpg', alt: 'Professional real estate headshots — Rojas Photography Modesto CA' }],
  },
};

const whatWeCommunicate = [
  {
    quality: 'Confidence',
    desc: 'You know this market. Your headshot should project the expertise and command that makes a seller trust you with the biggest transaction of their life.',
  },
  {
    quality: 'Approachability',
    desc: 'Buying or selling a home is emotional. Clients want an agent they can be honest with — someone they feel comfortable calling with every question and concern.',
  },
  {
    quality: 'Energy',
    desc: 'Real estate is a relationship business driven by hustle. A flat, lifeless expression signals the opposite. Your photo should communicate that you are engaged, current, and ready to work.',
  },
  {
    quality: 'Consistency',
    desc: 'Your headshot appears on every platform where you market yourself. Consistent, professional imagery across every touchpoint reinforces that you are a serious professional — not a part-timer.',
  },
];

const sessionIncludes = [
  'Full studio session with professional lighting and backdrop',
  'Real-time posing and expression coaching throughout',
  'Unlimited wardrobe changes — bring multiple looks',
  'Multiple expressions and angles for different marketing uses',
  'Images reviewed together before you leave',
  'Professional retouching on all selected images',
  '48-hour delivery to your inbox',
  'Full commercial usage rights — yard signs, print, digital, social',
];

export default function RealEstateHeadshotsPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Premium Headshots', url: 'https://rojasphotography.net/premium-headshots' },
        { name: 'Real Estate Headshots', url: 'https://rojasphotography.net/real-estate-headshots' },
      ])} />

      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/Hero Image1.jpg"
          title="Real Estate Headshots That Win Listings Before You Walk In the Door"
          tag="Modesto & Central Valley | Rojas Photography"
          objectPosition="center 30%"
          fullHeight={false}
        >
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Your face is on every yard sign, every listing, and every platform where clients find you. Make sure it looks like you on your best day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/premium-headshots#booking-heading"
              className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Book Your Session
            </Link>
            <Link
              href="/professional-headshot-cost"
              className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              See Pricing
            </Link>
          </div>
        </HeroSection>

        <main id="main-content">

          {/* SB7: Character with a Problem */}
          <section className="py-20 md:py-28 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6 text-center">
                  Your Face Is Everywhere — Make It Work For You
                </h2>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>
                    As a real estate agent, your headshot is your most-used marketing asset. It appears on yard signs, door hangers, postcards, Zillow and Realtor.com profiles, your brokerage website, LinkedIn, business cards, and every social media platform where you build your brand. Everywhere a potential client encounters your name, they encounter your face.
                  </p>
                  <p>
                    That means an outdated headshot is not just a minor aesthetic issue — it is actively working against your marketing budget. Every piece of print material, every digital ad, every listing flyer you produce is carrying an image that no longer represents who you are today.
                  </p>
                  <p>
                    And when a seller evaluates two agents before their listing presentation, the one whose materials look current, polished, and professional has already made a first impression. Before you walk through the door, your photo walked in first.
                  </p>
                  <p>
                    You work harder than almost anyone to earn a client&apos;s trust. Your image should reflect that work.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* What Your Headshot Needs to Communicate */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-4">
                  What Your Real Estate Headshot Needs to Communicate
                </h2>
                <p className="text-center text-[var(--color-text-body)] text-lg mb-14 max-w-2xl mx-auto">
                  A great real estate headshot does more than look professional. It signals exactly the right things to a client who is deciding whether to trust you with the biggest transaction of their life.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-5">
                {whatWeCommunicate.map((item, i) => (
                  <SectionReveal key={item.quality}>
                    <div className="flex gap-5 p-7 bg-white rounded-xl border border-gray-100">
                      <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-[var(--color-text-dark)] text-lg mb-2">{item.quality}</h3>
                        <p className="text-[var(--color-text-body)] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Guide Section */}
          <section className="py-20 md:py-28 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6 text-center">
                  One Session. Every Platform Covered.
                </h2>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-10 text-center max-w-2xl mx-auto">
                  We understand that real estate agents use their headshot more broadly and more publicly than almost any other profession. A single session with multiple looks gives you everything you need for every format.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { use: 'Yard Signs & Print Marketing', desc: 'Bold, high-contrast, reads clearly at distance. Your primary brand photo for all physical marketing materials.' },
                  { use: 'Zillow & Realtor.com', desc: 'Clean, professional, current. The photo that appears next to every listing you carry — first impression for every buyer.' },
                  { use: 'LinkedIn & Professional Directories', desc: 'Polished and credible. Positions you as a serious professional for referral partners, lenders, and corporate relocation clients.' },
                  { use: 'Social Media & Email Campaigns', desc: 'Warm and approachable. The version of your headshot that invites engagement and feels like you in conversation.' },
                ].map((item) => (
                  <SectionReveal key={item.use}>
                    <div className="flex gap-4 p-6 bg-[var(--color-bg-warm)] rounded-xl border border-gray-100">
                      <CheckCircle2 size={20} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-[var(--color-text-dark)] mb-1">{item.use}</h3>
                        <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
              <SectionReveal>
                <div className="mt-10 bg-[var(--color-bg-warm)] rounded-xl p-7 border border-gray-100">
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    <strong className="text-[var(--color-text-dark)]">Our process:</strong> Before your session, we discuss your market, your brand, and every platform your photo will appear on. During your session, we coach you through multiple expressions and wardrobe looks so you leave with images tailored to each use — not just one generic headshot you will try to use everywhere.
                  </p>
                  <div className="mt-6">
                    <ol className="space-y-3">
                      {[
                        'Pre-session consultation — discuss your brand, your market, and how your photo will be used',
                        'Coached session — multiple looks and expressions for different marketing contexts',
                        '48-hour delivery — high-resolution files ready for every platform, print-ready for yard signs',
                      ].map((step, i) => (
                        <li key={i} className="flex gap-3 text-[var(--color-text-body)] text-sm leading-relaxed">
                          <span className="w-6 h-6 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Stakes */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <div className="flex gap-4 mb-8 items-start">
                  <AlertTriangle size={28} className="text-amber-500 flex-shrink-0 mt-1" />
                  <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)]">
                    The Cost of an Outdated Headshot
                  </h2>
                </div>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>
                    When your yard sign photo looks like it was taken five years ago, potential sellers notice. It is a small signal, but in a business built entirely on trust and credibility, small signals add up. If your marketing materials do not look current, the implied question is: how current is your market knowledge?
                  </p>
                  <p>
                    When a client looks at your Zillow profile before your listing presentation and then meets a person who looks meaningfully different from the photo, trust takes a quiet hit before you say a word. The first meeting is now spent re-establishing the connection your marketing should have already built.
                  </p>
                  <p>
                    Real estate is built on relationships — and relationships start with first impressions. You cannot control what the market does. You can control what your first impression looks like. An annual headshot update is one of the lowest-cost, highest-return marketing investments you make all year.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* What's Included */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-14">
                  What&apos;s Included in Your Session
                </h2>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-6">
                <SectionReveal>
                  <div className="bg-[var(--color-bg-warm)] rounded-xl p-8 border border-gray-100 h-full">
                    <h3 className="text-[var(--color-text-dark)] text-lg mb-5">Session Details</h3>
                    <ul className="space-y-3">
                      {sessionIncludes.map(item => (
                        <li key={item} className="flex gap-2 text-sm text-[var(--color-text-body)]">
                          <CheckCircle2 size={15} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="space-y-5">
                    <div className="bg-[var(--color-bg-warm)] rounded-xl p-8 border border-gray-100">
                      <h3 className="text-[var(--color-text-dark)] text-lg mb-3">Pricing</h3>
                      <p className="text-[var(--color-text-body)] mb-2">
                        <strong className="text-[var(--color-text-dark)]">$150</strong> session fee
                      </p>
                      <p className="text-[var(--color-text-body)] mb-4">
                        <strong className="text-[var(--color-text-dark)]">$150</strong> per final edited image — full commercial usage rights included
                      </p>
                      <p className="text-sm text-[var(--color-text-muted)]">
                        No minimums. Most agents select 2–3 images for different marketing uses.
                      </p>
                    </div>
                    <div className="bg-[var(--color-bg-warm)] rounded-xl p-8 border border-gray-100">
                      <h3 className="text-[var(--color-text-dark)] text-lg mb-3">Where we Serve</h3>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed mb-3">
                        Studio in Modesto, CA — central to agents throughout the Central Valley including Stockton, Turlock, Merced, Fresno, and Sacramento.
                      </p>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                        On-site brokerage team sessions available throughout California. Contact us for team pricing.
                      </p>
                    </div>
                    <div className="text-center pt-2">
                      <Link
                        href="/premium-headshots#booking-heading"
                        className="btn-primary px-10 py-4 text-lg font-semibold rounded-full inline-block"
                      >
                        Book Your Real Estate Headshot Session
                      </Link>
                    </div>
                  </div>
                </SectionReveal>
              </div>
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
                    role="CEO, Modesto"
                    quote="Professional, efficient, and high-quality. Within days, we had a corporate headshot ready for our website and LinkedIn. Highly recommended for any business."
                  />
                </SectionReveal>
                <SectionReveal>
                  <TestimonialCard
                    name="Joyce Ulrich"
                    role="Entrepreneur, Modesto"
                    quote="Alfonso and Niomi create a comfortable environment that puts you at ease immediately. The professional headshots turned out beautifully — exactly what I needed."
                  />
                </SectionReveal>
                <SectionReveal>
                  <TestimonialCard
                    name="Francisco Chamorro"
                    role="BBSI — Business Management Solutions"
                    quote="Alfonso and Niomi are great to work with. Responsive, open to input and above all super professional. The results were just what we expected."
                  />
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <section className="py-14 px-8 bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <SectionReveal>
                <h3 className="text-[var(--color-text-dark)] mb-6 text-lg">Also Helpful</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/what-to-wear-for-a-headshot" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">What to Wear</Link>
                  <Link href="/professional-headshot-cost" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">Headshot Pricing Guide</Link>
                  <Link href="/on-site-photography" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">On-Site Brokerage Sessions</Link>
                  <Link href="/linkedin-headshots" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">LinkedIn Headshots</Link>
                  <Link href="/how-to-prepare-for-headshots" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">How to Prepare</Link>
                </div>
              </SectionReveal>
            </div>
          </section>

          <FAQSection faqs={faqs} heading="Real Estate Headshot Questions Answered" />

          <CTASection
            heading="Book Your Real Estate Headshot Session"
            subheading="$150 session. $150 per image. Full commercial usage rights. 48-hour delivery. Modesto studio or on-site at your brokerage."
            primaryLabel="Book Your Session"
            primaryHref="/premium-headshots#booking-heading"
            showContactInfo
          />
        </main>
      </div>
    </>
  );
}
