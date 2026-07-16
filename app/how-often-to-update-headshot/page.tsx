import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import SchemaScript from '../components/SchemaScript';
import { generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'When is a headshot too old?',
    answer: 'A headshot is too old when it no longer looks like you walking into a meeting — or when it was taken more than two years ago. Both conditions matter. A two-year-old photo that still looks current is acceptable. A six-month-old photo where you have significantly changed your appearance is already outdated.',
  },
  {
    question: 'Does LinkedIn care how old your photo is?',
    answer: 'LinkedIn does not enforce photo age, but your connections and prospects do. When someone views your profile and then meets you in person or on a video call, a photo that does not match creates a trust disruption. LinkedIn\'s own data shows that profiles with photos receive 21x more views than those without — but the quality and currency of that photo affects how those views convert.',
  },
  {
    question: 'Should I update my headshot before a job search?',
    answer: 'Yes — always update your headshot before an active job search. Recruiters and hiring managers view your LinkedIn profile before and after every interview. An outdated photo that does not match who shows up to the interview creates a subtle but real credibility gap. Invest in a current headshot before you start applying.',
  },
  {
    question: 'How do we know if my headshot is outdated?',
    answer: 'Ask yourself: if someone looked at my headshot and then met me in person today, would they recognize me immediately without a second look? If the answer is no — different hair, significantly different appearance, or just a noticeably older version of you — your headshot is outdated.',
  },
  {
    question: 'Does updating your headshot help your LinkedIn performance?',
    answer: 'Yes. A current, professional headshot consistently outperforms an outdated one in profile views, connection acceptance rates, and message response rates. The effect is not just about having a photo — it is about having one that looks current and credible. An obviously outdated photo can perform worse than a well-composed current photo even if the older photo was technically higher quality.',
  },
];

export const metadata: Metadata = {
  title: 'How Often Should You Update Your Professional Headshot? (2026)',
  description: 'How often should you update your professional headshot? The 2026 answer for executives, attorneys, healthcare professionals, and job seekers.',
  robots: 'index, follow',
  alternates: { canonical: 'https://rojasphotography.net/how-often-to-update-headshot' },
  openGraph: {
    title: 'How Often Should You Update Your Professional Headshot? (2026)',
    description: 'How often should you update your professional headshot? The honest 2026 answer by profession.',
    url: 'https://rojasphotography.net/how-often-to-update-headshot',
    type: 'article',
    images: [{ url: '/images/Hero Image1.jpg', alt: 'Professional headshots — Rojas Photography Modesto CA' }],
  },
};

export default function HowOftenUpdateHeadshotPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'How Often to Update Your Headshot', url: 'https://rojasphotography.net/how-often-to-update-headshot' },
      ])} />
      <div className="min-h-screen bg-white">
        <HeroSection image="/images/Hero Image1.jpg" title="How Often Should You Update Your Professional Headshot?" tag="2026 Guide | Rojas Photography" objectPosition="center 30%" fullHeight={false}>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">The answer varies by profession — but the minimum standard has risen significantly in 2026.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/premium-headshots#booking-heading" className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">Book Your Session</Link>
            <Link href="/professional-headshot-cost" className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">See Pricing</Link>
          </div>
        </HeroSection>
        <main id="main-content">
          <section className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-6">The Direct Answer</h2>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-4">
                    <strong className="text-[var(--color-text-dark)]">Update your professional headshot annually, or every other year at minimum.</strong> This is not just about appearance changes — it is about keeping your professional brand current. In 2026, the standard for professional photography and the expectations of platforms like LinkedIn have risen significantly.
                  </p>
                  <p className="text-lg text-[var(--color-text-body)] leading-relaxed">
                    A photo that looked current two years ago can quietly signal stagnation today. Your headshot is a living part of your professional brand — not a one-time task you check off once and forget.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-10">Update Frequency by Profession</h2>
              </SectionReveal>
              <div className="space-y-4">
                {[
                  { role: 'Real estate agents', freq: 'Annually', reason: 'Your face is on every yard sign, every listing, every platform. It must match the person who shows up to the presentation.' },
                  { role: 'Executives in public-facing roles', freq: 'Annually', reason: 'Board members, investors, press, and clients all look you up. Your image should reflect the leader you are today.' },
                  { role: 'Job seekers', freq: 'Before every active search', reason: 'Recruiters view your LinkedIn before and after every interview. Currency matters.' },
                  { role: 'Attorneys', freq: 'Annually', reason: 'Your headshot appears on Avvo, Martindale, firm directories, and press releases. It should look like you walking into a client meeting.' },
                  { role: 'Healthcare professionals', freq: 'Annually or every other year', reason: 'Patients research providers. Your ZocDoc and Healthgrades photo is their first impression.' },
                  { role: 'Financial advisors', freq: 'Annually', reason: 'In a referral-driven business, your photo is part of every introduction. It should reinforce the recommendation.' },
                  { role: 'Speakers, authors, media personalities', freq: 'Annually', reason: 'Your photo appears in conference programs, press kits, and media coverage. Currency is a credibility signal.' },
                  { role: 'Stable professionals in non-client-facing roles', freq: 'Every other year', reason: 'Less exposure means less urgency — but two years is still the outer limit for a professional photo.' },
                ].map(item => (
                  <SectionReveal key={item.role}>
                    <div className="flex gap-4 p-6 bg-[var(--color-bg-warm)] rounded-xl border border-gray-100">
                      <CheckCircle2 size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <span className="font-bold text-[var(--color-text-dark)]">{item.role}</span>
                          <span className="text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-primary-light)] px-3 py-0.5 rounded-full">{item.freq}</span>
                        </div>
                        <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{item.reason}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <div className="flex gap-4 items-start">
                  <AlertTriangle size={24} className="text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl text-[var(--color-text-dark)] mb-4">Update Immediately If Any of These Apply</h2>
                    <ul className="space-y-3">
                      {[
                        'Your appearance has changed significantly (hair, weight, major style change)',
                        'You have changed roles, industries, or career direction',
                        'Your current photo is more than 2 years old',
                        'You are actively job searching or pursuing new clients',
                        'You have started speaking, publishing, or building a public profile',
                        'Someone has commented that your photo does not look like you',
                      ].map(item => (
                        <li key={item} className="flex gap-2 text-[var(--color-text-body)]">
                          <CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </section>

          <FAQSection faqs={faqs} heading="Headshot Update Frequency — Frequently Asked Questions" />
          <CTASection heading="Time for an Updated Headshot?" subheading="$150 session. $150 per image. 48-hour delivery. Modesto, CA — serving the Central Valley and all of California." primaryLabel="Book Your Session" primaryHref="/premium-headshots#booking-heading" showContactInfo={false} />
        </main>
      </div>
    </>
  );
}
