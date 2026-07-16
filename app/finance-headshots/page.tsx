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
    question: 'What should a financial advisor wear for a headshot?',
    answer:
      'Conservative professional is the standard for finance headshots — a dark suit (navy, charcoal, or black) with a white or pale blue dress shirt or blouse. Minimal jewelry. A conservative tie for men. Solid colors throughout. Avoid anything bright, trendy, or casual. In finance, your headshot is a trust signal — the visual equivalent of a firm handshake — and what you wear contributes to that signal before a client reads a word about your credentials.',
  },
  {
    question: 'Should I smile in my finance headshot?',
    answer:
      'Yes — but the calibration matters. A warm, controlled smile communicates both approachability and stability. Finance clients want an advisor they can be honest with about their financial situation and confident will handle it seriously. A broad salesperson grin signals the wrong thing. A completely expressionless face creates distance. During your session, we coach you through the range and help you find the expression that communicates exactly the right blend of warmth and dependability for your specific clientele.',
  },
  {
    question: 'What background is best for a financial advisor headshot?',
    answer:
      'Dark gray or charcoal is the most common choice for finance professionals — it projects stability, authority, and seriousness, and it photographs extremely well for firm websites and LinkedIn. White or light gray reads as clean and transparent, which works well for advisors in planning or wealth management contexts. Avoid colorful or busy backgrounds. If your firm has a branded background or specific color guidelines, let us know during your pre-session consultation.',
  },
  {
    question: 'How often should financial professionals update their headshots?',
    answer:
      'Annually. In a referral-driven business, your headshot is part of every introduction. When a client recommends you to a colleague, that colleague looks you up. What they see should match the person who shows up for the first meeting. More importantly, the professional photography standard rises every year. A headshot from two or three years ago can quietly signal stagnation in an industry where credibility is your primary asset.',
  },
  {
    question: 'How much do finance professional headshots cost?',
    answer:
      '$150 for the session and $150 per final edited image, with no minimums. Most financial professionals select 1–2 images — one primary headshot for their firm bio, broker-dealer directory, and LinkedIn, and one alternate for marketing materials or press use. There is no minimum purchase requirement.',
  },
  {
    question: 'Can you photograph our entire financial advisory team?',
    answer:
      'Yes. We offer on-site team photography for financial firms, banks, wealth management offices, and insurance agencies. We bring a full professional studio setup to your location so every team member is photographed in consistent lighting against a consistent background. This is essential for firm websites, compliance materials, and marketing. Contact us for team pricing.',
  },
  {
    question: 'Do you provide headshots that meet compliance and broker-dealer requirements?',
    answer:
      'Yes. We deliver clean, professional headshots that meet standard compliance photo requirements — professional attire, neutral background, high resolution, correct file formats. If your broker-dealer or compliance department has specific photo requirements (background color, image dimensions, file type), discuss these in your pre-session consultation and we will ensure the delivered images meet those specifications.',
  },
  {
    question: 'What makes a good financial advisor headshot different from a regular professional headshot?',
    answer:
      'The precise balance of trustworthiness and approachability. Finance clients are entrusting you with their retirement, their family\'s security, and their financial future — they need to feel both safe and comfortable. A headshot that projects only authority can feel cold and transactional. One that is too casual fails to signal the competence that justifies your fees. We have photographed financial professionals across the Central Valley and we understand the visual language of financial services branding — guiding you to an expression and posture that builds the right kind of trust for your specific clientele.',
  },
];

export const metadata: Metadata = {
  title: 'Finance Professional Headshots | Financial Advisors, Bankers & Wealth Managers | Rojas Photography',
  description:
    'Professional headshots for financial advisors, bankers, and wealth managers in Modesto & Central Valley. Trust is your foundation — your image should reflect it. $150 session.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/finance-headshots',
  },
  openGraph: {
    title: 'Finance Professional Headshots | Financial Advisors, Bankers & Wealth Managers | Rojas Photography',
    description:
      'Professional headshots for financial advisors, bankers, and wealth managers in Modesto & Central Valley. Trust is your foundation — your image should reflect it. $150 session.',
    url: 'https://rojasphotography.net/finance-headshots',
    type: 'article',
    images: [{ url: '/images/Hero Image1.jpg', alt: 'Professional finance headshots — Rojas Photography Modesto CA' }],
  },
};

const whatWeCommunicate = [
  {
    quality: 'Trustworthiness',
    desc: 'Clients are handing you their financial future. Every visual signal — posture, expression, attire, lighting — either builds or erodes the foundational trust they need to take that step.',
  },
  {
    quality: 'Competence',
    desc: 'High-net-worth clients research their advisors thoroughly. A polished, authoritative headshot reinforces that you operate at the level of the portfolios you manage.',
  },
  {
    quality: 'Stability',
    desc: 'Finance clients want an advisor who will be there over the long term. A professional, confident image signals an established practitioner — not someone who might pivot industries next year.',
  },
  {
    quality: 'Approachability',
    desc: 'Clients need to be honest with you about their financial situation, their fears, and their goals. An expression that communicates warmth makes those conversations possible.',
  },
];

const financeRoles = [
  'Financial advisors and wealth managers',
  'Investment bankers and commercial bankers',
  'CPAs and public accountants',
  'Insurance professionals and brokers',
  'Mortgage brokers and loan officers',
  'CFOs and finance executives',
  'Compliance officers and risk managers',
  'Financial planners and retirement specialists',
];

const sessionIncludes = [
  'Full studio session with professional lighting and backdrop',
  'Real-time posing and expression coaching throughout',
  'Unlimited wardrobe changes — bring multiple options',
  'Images reviewed together before you leave the session',
  'Professional retouching on all selected images',
  '48-hour delivery to your inbox',
  'High-resolution files ready for firm bio, broker-dealer directory, and LinkedIn',
  'Compliance-ready formats available on request',
];

export default function FinanceHeadshotsPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Premium Headshots', url: 'https://rojasphotography.net/premium-headshots' },
        { name: 'Finance Professional Headshots', url: 'https://rojasphotography.net/finance-headshots' },
      ])} />

      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/Hero Image1.jpg"
          title="Finance Headshots That Build Trust Before the First Meeting"
          tag="Modesto & Central Valley | Rojas Photography"
          objectPosition="center 30%"
          fullHeight={false}
        >
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            In financial services, trust is earned slowly and lost quickly. Your headshot is the first signal you send — make sure it says the right thing.
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

          {/* SB7: Character + Problem */}
          <section className="py-20 md:py-28 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6 text-center">
                  In Finance, Trust Is Everything — And It Starts Before You Speak
                </h2>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>
                    Financial services is an industry built entirely on trust. Before a prospective client hands you their retirement savings, their estate plan, or their business finances, they research you. They read your bio. They look at your credentials. And they look at your photo.
                  </p>
                  <p>
                    A headshot that looks generic, outdated, or poorly lit raises a silent doubt — one that can prevent the first meeting from ever happening. In a referral-driven business, that doubt can propagate through an entire network. If someone your client trusts referred you, and your photo does not match that recommendation, the disconnect creates friction before you have said a word.
                  </p>
                  <p>
                    High-net-worth clients do their research. Before a first meeting, they look at your LinkedIn, your firm bio, your photo. An outdated or generic headshot raises an unspoken question: if you do not invest in your own professional image, how carefully do you manage your clients&apos; investments?
                  </p>
                  <p>
                    Your expertise is real. Your image should communicate that — clearly, confidently, and before the first handshake.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* What Your Headshot Communicates */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-4">
                  What Your Finance Headshot Needs to Communicate
                </h2>
                <p className="text-center text-[var(--color-text-body)] text-lg mb-14 max-w-2xl mx-auto">
                  A great finance headshot is not just a polished photo. It is a precisely calibrated trust signal.
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
                  We Understand What Finance Professionals Need
                </h2>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed mb-10">
                  <p>
                    We understand that in financial services, your image is part of your value proposition. A generic headshot signals generic service. We work with financial professionals across the Central Valley — advisors, bankers, CPAs, and insurance professionals who understand that their professional brand is inseparable from their results.
                  </p>
                  <p>
                    Before we picked up a camera, we spent 15+ years in corporate leadership. We know what it looks like when a professional takes their work seriously — and we know how to capture that in an image. The expression that communicates both warmth and authority is not something you arrive at by accident. It requires coaching and calibration.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div className="bg-[var(--color-bg-warm)] rounded-xl p-7 border border-gray-100">
                  <p className="text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-4">The Process</p>
                  <ol className="space-y-3">
                    {[
                      'Pre-session consultation — discuss your clientele, your firm, and the platforms your photo will appear on (firm bio, broker-dealer directory, LinkedIn, marketing materials)',
                      'Coached studio session — expression guidance for the precise blend of trustworthiness and approachability that finance clients need to see',
                      '48-hour delivery — edited images in your inbox, ready for every directory and compliance requirement',
                    ].map((step, i) => (
                      <li key={i} className="flex gap-3 text-[var(--color-text-body)] leading-relaxed">
                        <span className="w-6 h-6 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Finance Roles */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-4">
                  Finance Professionals we Photograph
                </h2>
                <p className="text-center text-[var(--color-text-body)] text-lg mb-12 max-w-2xl mx-auto">
                  Serving financial professionals across every discipline in the Central Valley and throughout California.
                </p>
              </SectionReveal>
              <SectionReveal>
                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {financeRoles.map(role => (
                    <div key={role} className="flex gap-2 text-[var(--color-text-body)]">
                      <CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      {role}
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Stakes */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <div className="flex gap-4 mb-8 items-start">
                  <AlertTriangle size={28} className="text-amber-500 flex-shrink-0 mt-1" />
                  <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)]">
                    The Silent Signal Your Headshot Sends
                  </h2>
                </div>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>
                    High-net-worth clients research advisors before the first meeting. An outdated or generic headshot raises an unspoken question: if you do not invest in your own professional image, how carefully do you manage your clients&apos; investments? That inference is unfair — but it happens, and it happens in the seconds before your first phone call.
                  </p>
                  <p>
                    In a referral-driven business, your photo is part of every introduction. When a satisfied client recommends you to a colleague, that colleague looks you up. What they see is your first impression. A photo that does not match the recommendation creates friction. A photo that reinforces it accelerates trust.
                  </p>
                  <p>
                    The investment is $150 for the session. The cost of losing one prospective client to a competitor whose image communicated more confidence is orders of magnitude higher. Your headshot is working for you or against you — every day, on every platform where your name appears.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* What's Included */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-14">
                  What&apos;s Included in Your Session
                </h2>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-6">
                <SectionReveal>
                  <div className="bg-white rounded-xl p-8 border border-gray-100 h-full">
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
                    <div className="bg-white rounded-xl p-8 border border-gray-100">
                      <h3 className="text-[var(--color-text-dark)] text-lg mb-3">Pricing</h3>
                      <p className="text-[var(--color-text-body)] mb-2">
                        <strong className="text-[var(--color-text-dark)]">$150</strong> session fee
                      </p>
                      <p className="text-[var(--color-text-body)] mb-4">
                        <strong className="text-[var(--color-text-dark)]">$150</strong> per final edited image
                      </p>
                      <p className="text-sm text-[var(--color-text-muted)]">
                        No minimums. Most financial professionals select 1–2 images. You only pay for the images you choose.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-8 border border-gray-100">
                      <h3 className="text-[var(--color-text-dark)] text-lg mb-3">Where we Serve</h3>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed mb-3">
                        Studio in Modesto, CA — serving financial professionals throughout the Central Valley, Sacramento, and the Bay Area.
                      </p>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                        On-site team sessions available for financial firms, banks, and advisory offices throughout California.
                      </p>
                    </div>
                    <div className="text-center pt-2">
                      <Link
                        href="/premium-headshots#booking-heading"
                        className="btn-primary px-10 py-4 text-lg font-semibold rounded-full inline-block"
                      >
                        Book Your Finance Headshot Session
                      </Link>
                    </div>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-8 bg-white">
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
                    quote="Responsive, open to input and above all super professional. The results were just what we expected. I would recommend."
                  />
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <section className="py-14 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto text-center">
              <SectionReveal>
                <h3 className="text-[var(--color-text-dark)] mb-6 text-lg">Also Helpful</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/what-to-wear-for-a-headshot" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">What to Wear</Link>
                  <Link href="/professional-headshot-cost" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">Headshot Pricing Guide</Link>
                  <Link href="/on-site-photography" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">On-Site Team Sessions</Link>
                  <Link href="/linkedin-headshots" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">LinkedIn Headshots</Link>
                  <Link href="/how-to-prepare-for-headshots" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">How to Prepare</Link>
                </div>
              </SectionReveal>
            </div>
          </section>

          <FAQSection faqs={faqs} heading="Finance Headshot Questions Answered" />

          <CTASection
            heading="Book Your Finance Headshot Session"
            subheading="$150 session. $150 per image. No minimums. 48-hour delivery. Modesto studio or on-site at your firm."
            primaryLabel="Book Your Session"
            primaryHref="/premium-headshots#booking-heading"
            showContactInfo
          />
        </main>
      </div>
    </>
  );
}
