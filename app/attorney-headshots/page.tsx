import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
    question: 'What should an attorney wear for a headshot?',
    answer:
      'A dark suit is the standard for attorney headshots — navy, charcoal, or black all photograph well. Pair it with a conservative tie or professional blouse in a solid color or subtle pattern. Avoid busy prints, loud colors, or anything that draws the eye away from your face. If you practice in a more casual or creative environment, business professional still reads better on camera than business casual. Bring 2–3 outfit options and we will help you choose what projects the right image for your practice area.',
  },
  {
    question: 'Should I smile in my attorney headshot?',
    answer:
      'It depends on your practice area and your target client. A warm, natural smile works universally — it communicates approachability while still projecting competence. For family law, estate planning, or general counsel work, a relaxed smile builds the trust clients need to open up about personal matters. For criminal defense or litigation, a more composed, serious expression can project the commanding authority clients are hiring you for. During your session, we photograph you across a range of expressions and help you select the one that best fits your practice and personality.',
  },
  {
    question: 'What background is best for an attorney headshot?',
    answer:
      'A clean, neutral background — white, light gray, or dark charcoal — is the professional standard for attorney headshots and works across all directories including Avvo, Martindale-Hubbell, and your firm website. Avoid busy office backgrounds, bookshelves, or anything that competes with your presence. If your firm uses a specific branded background color, let us know and we can match it.',
  },
  {
    question: 'Can you come to my law firm for headshots?',
    answer:
      'Yes. We offer full on-site studio setups for law firms — bringing professional lighting, backdrops, and camera equipment directly to your office. This is ideal for firms updating their directory, onboarding new associates, or ensuring brand consistency across the team. Visit our on-site photography page for details on team headshot packages. Individual attorneys are also welcome at our Modesto studio.',
  },
  {
    question: 'How often should attorneys update their headshots?',
    answer:
      'Annually or every other year. Your professional brand evolves — you may make partner, change firms, shift practice areas, or simply look meaningfully different than your last photo. More importantly, the standards for professional imagery rise every year. A headshot that felt current three years ago can quietly signal stagnation today. If you have ever walked into a client meeting and noticed a flicker of surprise on their face — your photo no longer matches you.',
  },
  {
    question: 'How much do attorney headshots cost?',
    answer:
      'Attorney headshot sessions at Rojas Photography are $150, with final edited images at $150 each. Most attorneys select 1–2 images — one primary photo for their firm directory and Avvo/Martindale-Hubbell profiles, and one alternate for LinkedIn or speaking bios. There is no minimum purchase requirement — you only pay for the images you choose.',
  },
  {
    question: 'Do you photograph entire law firm teams?',
    answer:
      'Yes. We regularly photograph full firm teams — from solo practitioners to multi-partner firms. For team sessions, we bring our complete studio setup on-site so every attorney is photographed in consistent lighting against a consistent background. This ensures your firm directory looks cohesive and professional rather than a patchwork of photos taken at different times and places. Contact us for firm team pricing.',
  },
  {
    question: 'What makes a good attorney headshot different from a regular professional headshot?',
    answer:
      'The difference is calibration. A great attorney headshot communicates a specific blend of authority and approachability that is unique to the legal profession. Too formal and stiff, and clients feel they cannot approach you with their real situation. Too casual, and you undermine the credibility that justifies your hourly rate. We have photographed attorneys across practice areas and we understand the visual language of legal professional branding — guiding you to an expression and posture that hits the right note for your specific practice and clientele.',
  },
];

export const metadata: Metadata = {
  title: 'Attorney Headshots | Professional Headshots for Lawyers | Rojas Photography',
  description:
    'Professional headshots for attorneys and lawyers in Modesto & Central Valley. Build trust before clients ever meet you. $150 session. 48-hr delivery.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/attorney-headshots',
  },
  openGraph: {
    title: 'Attorney Headshots | Professional Headshots for Lawyers | Rojas Photography',
    description:
      'Professional headshots for attorneys and lawyers in Modesto & Central Valley. Build trust before clients ever meet you. $150 session. 48-hr delivery.',
    url: 'https://rojasphotography.net/attorney-headshots',
    type: 'article',
    images: [
      {
        url: '/images/Hero Image1.jpg',
        alt: 'Professional attorney headshots — Rojas Photography Modesto CA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Attorney Headshots | Professional Headshots for Lawyers | Rojas Photography',
    description:
      'Professional headshots for attorneys and lawyers in Modesto & Central Valley. $150 session + $150/image. 48-hour delivery.',
    images: ['/images/headshots/headshot-attorney-01.jpg'],
  },
};

const whatWeCommunicate = [
  {
    quality: 'Authority',
    desc: 'You are the expert in the room. Your headshot should project the command and competence that justifies a client trusting you with their most serious legal matter.',
  },
  {
    quality: 'Approachability',
    desc: 'Clients need to feel they can be honest with you. A guarded or stiff expression creates distance. The right photo signals that you are someone they can actually talk to.',
  },
  {
    quality: 'Trustworthiness',
    desc: 'Legal clients are making a leap of faith. Before they read a word of your bio, your image is already building or undermining the trust they need to hire you.',
  },
  {
    quality: 'Confidence',
    desc: 'Clients hire attorneys who believe they can win. A hesitant or uncomfortable expression in your headshot quietly signals the same about your performance in the courtroom or at the negotiating table.',
  },
];

const practiceAreaGuidance = [
  {
    area: 'Criminal Defense',
    guidance: 'Commanding and serious. Clients facing charges need to believe you can fight for them. A composed, direct expression with strong posture projects the tenacity they are paying for.',
  },
  {
    area: 'Family Law',
    guidance: 'Warm and approachable. Clients in family law are navigating emotionally difficult situations — divorce, custody, support. A headshot that communicates human understanding makes you easier to trust with their most personal circumstances.',
  },
  {
    area: 'Corporate & Transactional',
    guidance: 'Polished and executive. Corporate clients expect their counsel to look the part. A clean, buttoned-up presentation signals that you operate at the level of the deals you handle.',
  },
  {
    area: 'Personal Injury',
    guidance: 'Trustworthy and determined. Clients who have been hurt need to believe you are in their corner. A warm but purposeful expression communicates both empathy and the resolve to fight for what they are owed.',
  },
  {
    area: 'Estate Planning & Elder Law',
    guidance: 'Calm, reassuring, and professional. Clients engaging with estate planning are thinking about mortality and legacy — they need an attorney they trust completely. An approachable, steady presence goes a long way.',
  },
  {
    area: 'Public Interest & Nonprofit',
    guidance: 'Approachable and dedicated. Clients served by public interest attorneys often come from vulnerable situations. A photo that communicates genuine care and commitment helps bridge the gap before you ever meet.',
  },
];

const sessionIncludes = [
  'Full studio session with professional lighting and backdrop',
  'Real-time posing and expression coaching throughout',
  'Unlimited wardrobe changes — bring multiple options',
  'White coat or professional attire (your choice)',
  'Images reviewed together before you leave the session',
  'Professional retouching on all selected images',
  '48-hour delivery to a private online gallery',
  'High-resolution files ready for Avvo, Martindale, LinkedIn, and print',
];

export default function AttorneyHeadshotsPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Premium Headshots', url: 'https://rojasphotography.net/premium-headshots' },
        { name: 'Attorney Headshots', url: 'https://rojasphotography.net/attorney-headshots' },
      ])} />

      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/Hero Image1.jpg"
          title="Attorney Headshots That Build Trust Before You Speak"
          tag="Modesto & Central Valley | Rojas Photography"
          objectPosition="center 30%"
          fullHeight={false}
        >
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Clients choose attorneys based on gut feeling as much as credentials. Your headshot is working the moment someone types your name.
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
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6 text-center">
                  Your Clients Judge You Before You Speak
                </h2>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>
                    In legal, first impressions are everything. Your headshot appears on your firm directory, your Avvo profile, LinkedIn, Martindale-Hubbell, bar association directories, and press releases. It is the first piece of visual information a prospective client encounters — before your bio, before your practice areas, before a single review.
                  </p>
                  <p>
                    Before a client reads a word about your experience or track record, they have already decided whether they trust you. Research on professional first impressions is unambiguous: appearance signals competence, reliability, and warmth within the first fraction of a second. And in law — where clients are often frightened, vulnerable, or facing the most serious situation of their lives — that split-second judgment carries enormous weight.
                  </p>
                  <p>
                    An outdated photo. A stiff expression. Poor lighting that flattens your features. These are not minor details. They are the first signals your brand sends to every potential client who looks you up — and you are not in the room to correct the impression.
                  </p>
                  <p>
                    You have built a career on the strength of your preparation and your judgment. Your headshot should reflect that.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* What Your Headshot Needs to Communicate */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  What Your Attorney Headshot Needs to Communicate
                </h2>
                <p className="text-center text-[var(--color-text-body)] text-lg mb-14 max-w-2xl mx-auto">
                  A great attorney headshot is not just a nice photo. It is a precise communication tool that does four specific jobs simultaneously.
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
                        <h3 className="font-bold text-[var(--color-text-dark)] text-lg mb-2">{item.quality}</h3>
                        <p className="text-[var(--color-text-body)] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* SB7: Guide — Empathy + Authority */}
          <section className="py-20 md:py-28 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-14 items-center">
                <SectionReveal>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { src: '/images/headshots/headshot-attorney-01.jpg', alt: 'Professional attorney headshot — Rojas Photography Modesto CA' },
                      { src: '/images/headshots/headshot-attorney-02.jpg', alt: 'Lawyer headshot photography — Central Valley' },
                      { src: '/images/headshots/headshot-attorney-03.jpg', alt: 'Law firm headshots — Modesto CA' },
                      { src: '/images/headshots/headshot-attorney-familylaw-01.jpg', alt: 'Family law attorney headshot — Rojas Photography' },
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
                      I Understand What Legal Professionals Need
                    </h2>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      I know the pressure of projecting authority while remaining approachable — that balance is everything in legal professional branding. Too formal, and clients feel they cannot talk to you. Too relaxed, and they question whether you will fight hard enough for them.
                    </p>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      I have photographed attorneys across practice areas throughout the Central Valley — including members of the California Lawyers Association — and I bring 15+ years of corporate professional experience to every session. I understand how serious professionals want to be seen, and I know how to get you there.
                    </p>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      You are not the hero of this story — your client is. Your headshot should communicate that you are the trusted guide who can help them navigate the most difficult situation of their life. That is the look we are after.
                    </p>
                    <div className="pt-2">
                      <p className="text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">The Process</p>
                      <ol className="space-y-3">
                        {[
                          'Pre-session consultation — we discuss your practice area, your target client, and the image you want to project',
                          'Coached studio session — posing, expression, and posture guidance calibrated for legal authority',
                          '48-hour delivery — edited images in your private gallery, ready for every directory and platform where you appear',
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
            </div>
          </section>

          {/* Practice Area Guidance */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  The Right Look for Your Practice Area
                </h2>
                <p className="text-center text-[var(--color-text-body)] text-lg mb-14 max-w-2xl mx-auto">
                  Not every attorney headshot should look the same. The tone, expression, and styling that works for a criminal defense attorney is different from what a family law practitioner needs. We calibrate accordingly.
                </p>
              </SectionReveal>
              <div className="space-y-4">
                {practiceAreaGuidance.map((item) => (
                  <SectionReveal key={item.area}>
                    <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100">
                      <CheckCircle2 size={20} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-[var(--color-text-dark)] mb-1">{item.area}</h3>
                        <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.guidance}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* SB7: Avoid Failure — Stakes */}
          <section className="py-20 md:py-28 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <div className="flex gap-4 mb-8 items-start">
                  <AlertTriangle size={28} className="text-amber-500 flex-shrink-0 mt-1" aria-hidden="true" />
                  <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
                    A Bad Attorney Headshot Has Real Consequences
                  </h2>
                </div>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>
                    Clients choose attorneys based partly on gut feeling. They cannot evaluate your legal knowledge before they hire you — but they can evaluate how you present yourself. An outdated photo that no longer matches your current appearance creates a trust disruption the moment you walk into a first meeting. The client who was expecting the person from your website is now recalibrating, not listening.
                  </p>
                  <p>
                    A stiff, uncoached expression signals discomfort in front of a camera — and clients tend to read discomfort as a proxy for performance. If you look uncomfortable in a controlled studio setting, how do you look in a deposition? In a courtroom? At a negotiating table? These are unfair inferences, but they happen.
                  </p>
                  <p>
                    Poor lighting, low resolution, or a background that looks like a conference room closet — all of it quietly tells the client that you do not invest in the details. And clients who are evaluating whether to trust you with their most serious legal matter pay attention to the details.
                  </p>
                  <p>
                    Attorneys who invest in professional headshots consistently report higher profile engagement, more inbound inquiries, and stronger initial meetings. Your photo is working 24 hours a day on every directory and platform where your name appears. It should be working for you.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* What's Included */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  What&apos;s Included in Your Session
                </h2>
                <p className="text-center text-[var(--color-text-body)] text-lg mb-14 max-w-2xl mx-auto">
                  Every attorney headshot session includes everything you need — from preparation to final delivery.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-6">
                <SectionReveal>
                  <div className="bg-white rounded-xl p-8 border border-gray-100 h-full">
                    <h3 className="font-bold text-[var(--color-text-dark)] text-lg mb-5">Session Details</h3>
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
                      <h3 className="font-bold text-[var(--color-text-dark)] text-lg mb-3">Pricing</h3>
                      <p className="text-[var(--color-text-body)] mb-2">
                        <strong className="text-[var(--color-text-dark)]">$150</strong> session fee
                      </p>
                      <p className="text-[var(--color-text-body)] mb-4">
                        <strong className="text-[var(--color-text-dark)]">$150</strong> per final edited image
                      </p>
                      <p className="text-sm text-[var(--color-text-muted)]">
                        No minimum purchase. Most attorneys select 1–2 images. You only pay for the images you choose.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-8 border border-gray-100">
                      <h3 className="font-bold text-[var(--color-text-dark)] text-lg mb-3">Where We Serve</h3>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed mb-3">
                        Our studio is in Modesto, CA — convenient for attorneys throughout the Central Valley, including Stockton, Fresno, Sacramento, and surrounding areas.
                      </p>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                        We also offer full on-site studio setups for law firm team sessions — contact us for firm pricing.
                      </p>
                    </div>
                    <div className="text-center pt-2">
                      <Link
                        href="/premium-headshots#booking-heading"
                        className="btn-primary px-10 py-4 text-lg font-semibold rounded-full inline-block"
                      >
                        Book Your Attorney Headshot Session
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
                  <Link href="/on-site-photography" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">
                    On-Site Law Firm Sessions
                  </Link>
                  <Link href="/linkedin-headshots" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">
                    LinkedIn Headshots
                  </Link>
                  <Link href="/premium-headshots" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">
                    Premium Headshots
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection
            faqs={faqs}
            heading="Attorney Headshot Questions Answered"
          />

          <CTASection
            heading="Book Your Attorney Headshot Session"
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
