import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, XCircle } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import SchemaScript from '../components/SchemaScript';
import { generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'Does LinkedIn require a professional photo?',
    answer: 'LinkedIn does not technically require a professional photo — you can upload any photo or no photo at all. But the platform\'s own data shows profiles with photos receive 21x more views, 9x more connection requests, and 36x more messages. The question is not whether LinkedIn requires it — it is whether your career can afford to go without it.',
  },
  {
    question: 'How much does a LinkedIn headshot cost?',
    answer: 'At Rojas Photography, a LinkedIn headshot session is $150, with each final edited image at $150. Most professionals select one primary LinkedIn headshot. There is no minimum — you pay only for the images you choose. The session includes coaching, unlimited wardrobe changes, and 48-hour delivery.',
  },
  {
    question: 'What size should a LinkedIn profile photo be?',
    answer: 'LinkedIn recommends a photo that is at least 400 x 400 pixels, with a maximum of 8MB. The platform displays your photo in a circular crop at small sizes (about 56 x 56 pixels in the feed). This means your face should take up at least 60% of the frame — tight headshot framing works far better than full-body photos.',
  },
  {
    question: 'How often should I update my LinkedIn photo?',
    answer: 'Annually, or every other year at minimum. Your LinkedIn photo is your first impression for every person who views your profile — recruiters, clients, referral partners, and prospects. A photo that no longer looks like you creates a trust gap at the moment of connection.',
  },
  {
    question: 'Can I use my company ID photo on LinkedIn?',
    answer: 'Company ID photos are rarely suitable for LinkedIn. They are typically taken quickly, with poor lighting, minimal framing consideration, and no expression coaching. They communicate exactly the wrong thing for a professional networking platform. A $150 dedicated LinkedIn headshot will outperform a company ID photo in every measurable way.',
  },
];

export const metadata: Metadata = {
  title: 'Do You Need a Professional Headshot for LinkedIn? (Honest Answer)',
  description: 'Do you actually need a professional headshot for LinkedIn? LinkedIn\'s own data and the honest assessment of when it matters — and when it does not.',
  robots: 'index, follow',
  alternates: { canonical: 'https://rojasphotography.net/do-you-need-professional-headshot-linkedin' },
  openGraph: {
    title: 'Do You Need a Professional Headshot for LinkedIn?',
    description: 'The honest answer — LinkedIn data, recruiter behavior, and when it actually matters.',
    url: 'https://rojasphotography.net/do-you-need-professional-headshot-linkedin',
    type: 'article',
    images: [{ url: '/images/Hero Image1.jpg', alt: 'LinkedIn headshots — Rojas Photography Modesto CA' }],
  },
};

export default function DoYouNeedLinkedInHeadshotPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'LinkedIn Headshots', url: 'https://rojasphotography.net/linkedin-headshots' },
        { name: 'Do You Need a Professional Headshot for LinkedIn', url: 'https://rojasphotography.net/do-you-need-professional-headshot-linkedin' },
      ])} />
      <div className="min-h-screen bg-white">
        <HeroSection image="/images/Hero Image1.jpg" title="Do You Need a Professional Headshot for LinkedIn?" tag="Honest Answer | Rojas Photography" objectPosition="center 30%" fullHeight={false}>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">LinkedIn&apos;s own data answers this question clearly. Here is what it says — and what it means for your career.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/premium-headshots#booking-heading" className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">Book Your Session</Link>
            <Link href="/linkedin-headshots" className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">LinkedIn Headshots</Link>
          </div>
        </HeroSection>
        <main id="main-content">
          <section className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-6">The Direct Answer</h2>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p><strong className="text-[var(--color-text-dark)]">Yes — for most professionals in client-facing roles, a professional headshot is one of the highest-ROI investments you can make for your LinkedIn profile.</strong></p>
                  <p>LinkedIn&apos;s own data: profiles with a photo receive <strong className="text-[var(--color-text-dark)]">21x more profile views</strong>, <strong className="text-[var(--color-text-dark)]">9x more connection requests</strong>, and <strong className="text-[var(--color-text-dark)]">36x more messages</strong> than profiles without one. These statistics compare profiles with photos to profiles without — but the quality gap between a professional headshot and a selfie is meaningful. Recruiters and clients notice.</p>
                  <p>The investment is $150. For most professionals, the value of one additional connection, client, or interview opportunity exceeds that cost many times over.</p>
                </div>
              </SectionReveal>
            </div>
          </section>

          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-10">When You Absolutely Need One</h2>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-5 mb-12">
                {[
                  { yes: true, label: 'Client-facing professionals', desc: 'Attorneys, physicians, financial advisors, real estate agents — any role where clients make decisions partly based on how you present yourself.' },
                  { yes: true, label: 'Executive and leadership roles', desc: 'The higher your role, the higher the scrutiny. Board members, investors, and press all look you up. Your photo should match your position.' },
                  { yes: true, label: 'Active job seekers', desc: 'Recruiters view your LinkedIn before and after every interview. A current, professional photo is table stakes for a serious job search.' },
                  { yes: true, label: 'Building a consulting or freelance practice', desc: 'Your LinkedIn is your storefront. A professional headshot communicates that you take your work seriously.' },
                  { yes: false, label: 'Entry-level roles with no client contact', desc: 'A well-composed casual photo is acceptable when starting out — though a professional headshot will still outperform it.' },
                  { yes: false, label: 'Internal-only LinkedIn presence', desc: 'If your LinkedIn is purely for internal networking within your company, a professional headshot matters less — though it still signals professionalism.' },
                ].map(item => (
                  <SectionReveal key={item.label}>
                    <div className="flex gap-3 p-6 bg-[var(--color-bg-warm)] rounded-xl border border-gray-100">
                      {item.yes
                        ? <CheckCircle2 size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                        : <XCircle size={18} className="text-gray-400 flex-shrink-0 mt-0.5" />}
                      <div>
                        <p className="font-semibold text-[var(--color-text-dark)] mb-1">{item.label}</p>
                        <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          <FAQSection faqs={faqs} heading="LinkedIn Headshot — Frequently Asked Questions" />
          <CTASection heading="Ready for Your LinkedIn Headshot?" subheading="$150 session. $150 per image. 48-hour delivery. Modesto, CA." primaryLabel="Book Your Session" primaryHref="/premium-headshots#booking-heading" showContactInfo={false} />
        </main>
      </div>
    </>
  );
}
