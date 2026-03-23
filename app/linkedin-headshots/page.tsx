import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import { generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'What makes a good LinkedIn headshot?',
    answer:
      'A great LinkedIn headshot has four qualities: professional lighting that eliminates harsh shadows and flatters your features, a natural expression that conveys approachability and confidence, appropriate attire for your industry, and a clean or simple background that keeps the focus on you. The goal is not to look like a different person — it is to look like the best version of yourself on your best day.',
  },
  {
    question: 'How much does a LinkedIn headshot cost?',
    answer:
      'At Rojas Photography, LinkedIn headshot sessions are $150, with images at $150 each. Most LinkedIn clients select 1–3 images — one primary profile photo and a couple of alternates for different platforms. There is no minimum purchase — you only pay for the images you love. Sessions run 60–90 minutes and images are delivered within 48 hours.',
  },
  {
    question: 'Should I smile in my LinkedIn photo?',
    answer:
      'Yes — but it should be a natural smile, not a forced grin. The most effective LinkedIn headshots show genuine warmth and approachability. During your session, we guide you to natural expressions by having a real conversation rather than asking you to "say cheese." The result is a photo that actually looks like you when you are engaged and confident.',
  },
  {
    question: 'What should I wear for a LinkedIn headshot?',
    answer:
      'Wear what you would wear to an important client meeting or job interview in your industry. Attorneys and executives typically wear suits or business professional attire. Healthcare professionals wear scrubs or a white coat. Creative professionals can go business casual. Avoid loud patterns, neon colors, or anything that distracts from your face. Bring 2–3 outfit options and we will help you choose what photographs best.',
  },
  {
    question: 'What is the ideal LinkedIn profile photo size?',
    answer:
      'LinkedIn recommends a profile photo of at least 400 x 400 pixels, up to 8MB. All images from Rojas Photography are delivered as high-resolution files suitable for LinkedIn, company websites, conference bios, and print use. You will never need to crop or resize — our images are ready to upload directly.',
  },
  {
    question: 'Do you offer LinkedIn headshots on-site at our office?',
    answer:
      'Yes. For teams, we bring our full studio setup — professional lighting, backdrop, and camera equipment — directly to your office or location. On-site LinkedIn headshot sessions are ideal for companies updating employee directories, onboarding new hires, or ensuring brand consistency across the team. Contact us for team pricing.',
  },
  {
    question: 'How often should I update my LinkedIn headshot?',
    answer:
      'Update your LinkedIn photo every 3–5 years, or sooner if your appearance has changed significantly — new hairstyle, weight change, or a major career transition. Your photo should look like you would look walking into a meeting today. An outdated headshot that no longer resembles you erodes the trust your profile is supposed to build.',
  },
];

export const metadata: Metadata = {
  title: 'LinkedIn Headshots Modesto CA | Rojas Photography',
  description:
    'LinkedIn headshots in Modesto & Central Valley. Professional profile photos that build trust and get you noticed. $150 session. 48-hr delivery. Book today.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/linkedin-headshots',
  },
  openGraph: {
    title: 'LinkedIn Headshots in Modesto, CA | Rojas Photography',
    description:
      'Professional LinkedIn headshots for Central Valley executives, attorneys, healthcare professionals & business owners. $150 session. 48-hour delivery.',
    url: 'https://rojasphotography.net/linkedin-headshots',
    type: 'website',
    images: [
      {
        url: '/images/headshots/headshot-finance-ceo.jpg',
        alt: 'LinkedIn headshot photography — Rojas Photography Modesto CA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinkedIn Headshots in Modesto, CA | Rojas Photography',
    description:
      'Professional LinkedIn profile photos for Central Valley professionals. $150 session + $150/image. 48-hour delivery.',
    images: ['/images/headshots/headshot-finance-ceo.jpg'],
  },
};

const linkedInStats = [
  { stat: '21x', label: 'More profile views with a professional photo vs. no photo' },
  { stat: '9x', label: 'More connection requests accepted with a professional headshot' },
  { stat: '36x', label: 'More messages received by profiles with a photo vs. without' },
  { stat: '100ms', label: 'Time it takes someone to form a first impression from your photo' },
];

const whatWeDeliver = [
  'Profile-ready images sized and formatted for LinkedIn',
  'Alternate crops for company website and speaking bios',
  'High-resolution files for print use (business cards, directories)',
  'Multiple expressions and wardrobe options to choose from',
  'Private online gallery for easy download and sharing',
  '48-hour standard delivery — rush available for $75',
];

const industriesServed = [
  { industry: 'Attorneys & Legal Professionals', detail: 'Authority, approachability, and trust. We understand what clients look for in a legal professional\'s profile photo.' },
  { industry: 'Healthcare Executives & Physicians', detail: 'Credibility and warmth. Whether you wear a white coat or business attire, we capture the professional presence patients and colleagues trust.' },
  { industry: 'Financial Advisors & CPAs', detail: 'Trust is the foundation of every financial relationship. A polished headshot signals competence before your client ever reads your bio.' },
  { industry: 'Real Estate Agents & Brokers', detail: 'In real estate, your face is your brand. LinkedIn headshots that reflect the confidence clients need to hand you the biggest transaction of their lives.' },
  { industry: 'Corporate Executives & Business Owners', detail: 'C-suite professionals and founders who understand that their image is their first business card — seen by partners, investors, and talent before any meeting.' },
  { industry: 'Sales & Business Development', detail: 'LinkedIn is your hunting ground. A professional headshot dramatically increases connection acceptance and InMail response rates.' },
];

export default function LinkedInHeadshotsPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Premium Headshots', url: 'https://rojasphotography.net/premium-headshots' },
        { name: 'LinkedIn Headshots', url: 'https://rojasphotography.net/linkedin-headshots' },
      ])} />

      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/Hero Image1.jpg"
          title="LinkedIn Headshots That Get You Noticed for the Right Reasons"
          tag="Modesto & Central Valley | Rojas Photography"
          fullHeight={false}
        >
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Your LinkedIn photo is seen before your title, your experience, and your recommendations. Make sure it&apos;s saying the right things about you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/premium-headshots#booking-heading"
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

          {/* SB7: Character with a Problem */}
          <section className="py-20 md:py-28 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6 text-center">
                  Your LinkedIn Photo Is Working Against You
                </h2>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>
                    You have built a strong career. You have the experience, the credentials, the track record. But when someone clicks on your LinkedIn profile, the first thing they see is a blurry photo from three years ago — taken at a company picnic, cropped from a group shot, or snapped in bad lighting by someone with a phone.
                  </p>
                  <p>
                    Before they read a single word of your bio, they have already made a judgment. Research shows it takes as little as 100 milliseconds. And if your photo signals that you don&apos;t invest in your professional image, some portion of your audience will assume the same about your work.
                  </p>
                  <p>
                    This is not about vanity. It is about first impressions — and on LinkedIn, your photo <em>is</em> your first impression.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* LinkedIn Stats */}
          <SectionReveal>
            <section className="py-14 px-8 bg-[var(--color-bg-warm)] border-y border-gray-100">
              <div className="max-w-5xl mx-auto">
                <p className="text-center text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-10">Why Your LinkedIn Photo Matters</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  {linkedInStats.map((item) => (
                    <div key={item.stat}>
                      <p className="text-4xl font-bold text-[var(--color-primary)] mb-2">{item.stat}</p>
                      <p className="text-sm text-[var(--color-text-body)] leading-snug">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </SectionReveal>

          {/* SB7: Guide — Empathy + Authority */}
          <section className="py-20 md:py-28 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-14 items-center">
                <SectionReveal>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { src: '/images/headshots/headshot-finance-ceo.jpg', alt: 'LinkedIn headshot for financial executive — Rojas Photography' },
                      { src: '/images/headshots/headshot-attorney-01.jpg', alt: 'LinkedIn headshot for attorney — Modesto CA' },
                      { src: '/images/headshots/headshot-healthcare-executive-01.jpg', alt: 'LinkedIn headshot for healthcare professional — Central Valley' },
                      { src: '/images/headshots/headshot-comcast-executive.jpg', alt: 'LinkedIn headshot for corporate executive — Rojas Photography' },
                    ].map((img) => (
                      <div key={img.src} className="img-hover-zoom rounded-xl overflow-hidden aspect-square relative">
                        <Image src={img.src} alt={img.alt} fill sizes="25vw" className="object-cover object-top" />
                      </div>
                    ))}
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="space-y-5">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
                      We Make LinkedIn Headshots Feel Natural — Because They Are
                    </h2>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      Most people dread having their photo taken. They feel stiff in front of a camera, unsure where to look, convinced that they&apos;re not photogenic. We hear this from CEOs, attorneys, and healthcare executives — people who command rooms for a living — every single session.
                    </p>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      Our approach is not to pose you and click. We guide you through the entire session — coaching your posture, expression, and angles in real time — until we get the shot that actually looks like you at your best. No forced smiles. No awkward stiffness. Just a genuine image that works.
                    </p>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      With 15+ years of corporate experience and 60+ five-star reviews, we understand how professionals want to be seen — and how to get them there.
                    </p>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* SB7: Plan */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  Simple Process. Powerful Results.
                </h2>
                <p className="text-center text-[var(--color-text-body)] text-lg mb-14 max-w-2xl mx-auto">
                  From booking to gallery delivery, we handle everything.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Book Online',
                    desc: 'Schedule your session in minutes. We send a preparation guide so you know exactly what to wear, how to prep, and what to expect on the day.',
                  },
                  {
                    step: '02',
                    title: 'Guided Session',
                    desc: 'Arrive at our Modesto studio. We handle everything — lighting, posing, expression coaching, wardrobe changes. Sessions run 60–90 minutes. You leave knowing you have something great.',
                  },
                  {
                    step: '03',
                    title: '48-Hour Delivery',
                    desc: 'Your professionally edited images arrive in a private online gallery within 48 hours. Select what you love. Pay only for those images. Upload to LinkedIn immediately.',
                  },
                ].map((item) => (
                  <SectionReveal key={item.step}>
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                      <span className="text-5xl font-bold text-[var(--color-primary-light)]">{item.step}</span>
                      <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-4 mb-3">{item.title}</h3>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
              <SectionReveal>
                <div className="mt-12 bg-white rounded-xl p-8 border border-gray-100">
                  <h3 className="font-bold text-[var(--color-text-dark)] mb-4 text-lg">What We Deliver</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {whatWeDeliver.map(item => (
                      <div key={item} className="flex gap-2 text-sm text-[var(--color-text-body)]">
                        <CheckCircle2 size={15} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div className="text-center mt-10">
                  <p className="text-[var(--color-text-muted)] mb-6 text-lg">
                    <strong className="text-[var(--color-text-dark)]">$150 session</strong> &nbsp;·&nbsp; <strong className="text-[var(--color-text-dark)]">$150 per image</strong> &nbsp;·&nbsp; No minimum purchase
                  </p>
                  <Link
                    href="/premium-headshots#booking-heading"
                    className="btn-primary px-10 py-4 text-lg font-semibold rounded-full inline-block"
                  >
                    Book Your LinkedIn Headshot Session
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Industries */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  LinkedIn Headshots for Every Profession
                </h2>
                <p className="text-center text-[var(--color-text-body)] text-lg mb-14 max-w-2xl mx-auto">
                  We photograph professionals across every industry in Modesto and the Central Valley — understanding what &ldquo;professional&rdquo; looks like in your specific field.
                </p>
              </SectionReveal>
              <div className="space-y-4">
                {industriesServed.map((item) => (
                  <SectionReveal key={item.industry}>
                    <div className="flex gap-4 p-6 bg-[var(--color-bg-warm)] rounded-xl">
                      <CheckCircle2 size={20} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-[var(--color-text-dark)] mb-1">{item.industry}</h3>
                        <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* SB7: Avoid Failure */}
          <section className="py-20 px-8 bg-[var(--color-primary-dark)] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Every Day Your Photo Is Outdated, It&apos;s Costing You
                </h2>
                <p className="text-lg text-white/90 mb-4 leading-relaxed max-w-2xl mx-auto">
                  LinkedIn has over 900 million users. The professionals in your field are being discovered, connected with, and hired based partly on how their profile looks. An outdated, low-quality photo quietly filters you out of opportunities before you ever have a chance to compete.
                </p>
                <p className="text-lg text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                  One session. 48 hours. A photo that represents you the way you deserve to be represented.
                </p>
                <Link
                  href="/premium-headshots#booking-heading"
                  className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                >
                  Book Your Session Today
                </Link>
              </SectionReveal>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-8 bg-white">
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
                    quote="Alfonso and Niomi create a comfortable environment that puts you at ease immediately. The professional headshots turned out beautifully — exactly what I needed for my business."
                  />
                </SectionReveal>
                <SectionReveal>
                  <TestimonialCard
                    name="Francisco Chamorro"
                    role="BBSI — Business Management Solutions"
                    quote="Alfonso and Niomi are great to work with. Responsive, open to input and above all super professional. The results were just what we expected. I would recommend."
                  />
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <section className="py-14 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto text-center">
              <SectionReveal>
                <h3 className="font-bold text-[var(--color-text-dark)] mb-6 text-lg">Also Helpful</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/how-to-prepare-for-headshots" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">
                    How to Prepare for Your Session
                  </Link>
                  <Link href="/professional-headshot-cost" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">
                    Headshot Pricing Guide
                  </Link>
                  <Link href="/premium-headshots" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">
                    Premium Headshots
                  </Link>
                  <Link href="/modesto-headshots" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">
                    Modesto Headshots
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection
            faqs={faqs}
            heading="LinkedIn Headshot Questions Answered"
          />

          <CTASection
            heading="Ready for a LinkedIn Photo You&apos;re Proud Of?"
            subheading="$150 session. $150 per image. No minimums. 48-hour delivery. Modesto studio or on-site at your location."
            primaryLabel="Book Your Session"
            primaryHref="/premium-headshots#booking-heading"
            showContactInfo
          />

        </main>
      </div>
    </>
  );
}
