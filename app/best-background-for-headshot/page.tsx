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
    question: 'Can I use an outdoor background for a professional headshot?',
    answer: 'Yes, in some cases. Outdoor environmental backgrounds can work well for real estate agents, personal brands, and certain creative industries. The key requirements: the background must be clean and uncluttered, lighting must be professional (overcast days are ideal — harsh midday sun creates unflattering shadows), and the setting should feel intentional rather than incidental. An outdoor background that looks like you stepped outside for a quick photo rarely reads as professional.',
  },
  {
    question: 'What background does LinkedIn recommend?',
    answer: 'LinkedIn does not specify a background color, but clean and neutral consistently produces the best results on the platform. White and light gray are the most common choices because they display well in LinkedIn\'s circular profile photo crop at both small (56px feed) and large (400px profile) sizes.',
  },
  {
    question: 'Does background color affect how professional I look?',
    answer: 'Yes — significantly. A busy, colorful, or distracting background shifts attention away from your face. A clean neutral background frames your face, keeps the focus where it belongs, and works across every directory and platform where your headshot appears. The background should support your presence, not compete with it.',
  },
  {
    question: 'Can I change the background after the session?',
    answer: 'Yes. Digital background replacement is possible post-session, but it rarely produces results as clean as a background photographed correctly in studio. For clean neutral backgrounds (white, gray, dark), shooting them in studio is always preferable to replacing them digitally. If you need a specific background color for a firm requirement, discuss this before your session.',
  },
  {
    question: 'What is the most popular background color for headshots?',
    answer: 'Light to medium gray is the single most popular background color for professional headshots in 2026. It is universally flattering across skin tones, photographs consistently under professional lighting, works across all directories, and does not read as dated. Dark charcoal is the preferred choice for executives and attorneys who want more authority and drama. White remains popular for medical and legal directories.',
  },
];

export const metadata: Metadata = {
  title: 'Best Background Color for a Professional Headshot (2026 Guide)',
  description: 'What background color is best for a professional headshot? White, gray, dark, or outdoor — the honest guide with industry-specific recommendations.',
  robots: 'index, follow',
  alternates: { canonical: 'https://rojasphotography.net/best-background-for-headshot' },
  openGraph: {
    title: 'Best Background Color for a Professional Headshot (2026)',
    description: 'White, gray, dark, or environmental — which background is right for your headshot?',
    url: 'https://rojasphotography.net/best-background-for-headshot',
    type: 'article',
    images: [{ url: '/images/Hero Image1.jpg', alt: 'Professional headshots — Rojas Photography Modesto CA' }],
  },
};

export default function BestBackgroundHeadshotPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Best Background for a Headshot', url: 'https://rojasphotography.net/best-background-for-headshot' },
      ])} />
      <div className="min-h-screen bg-white">
        <HeroSection image="/images/Hero Image1.jpg" title="What Is the Best Background Color for a Professional Headshot?" tag="2026 Guide | Rojas Photography" objectPosition="center 30%" fullHeight={false}>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">The background is what keeps the focus on you — or takes it away. Here is what actually works.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/premium-headshots#booking-heading" className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">Book Your Session</Link>
          </div>
        </HeroSection>
        <main id="main-content">
          <section className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-6">The Direct Answer</h2>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p><strong className="text-[var(--color-text-dark)]">For most professional headshots, a clean neutral background — white, light gray, or dark charcoal — is the best choice.</strong></p>
                  <p>Neutral backgrounds keep focus on your face, work across all professional directories, and photograph consistently. The right specific color depends on your industry, your skin tone, and what you want to communicate.</p>
                </div>
              </SectionReveal>
            </div>
          </section>

          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-10">Background Options — What Each Communicates</h2>
              </SectionReveal>
              <div className="space-y-4">
                {[
                  { bg: 'White', when: 'Medical directories, legal profiles, healthcare, clean/transparent brand', pros: 'Universally professional, required by some platforms (ZocDoc, Healthgrades)', cons: 'Can look flat if lighting is not carefully controlled; avoid if your outfit is predominantly white' },
                  { bg: 'Light Gray', when: 'Most professionals — universally safe choice', pros: 'Most versatile option; flattering across skin tones; works on every directory and platform; photographs consistently', cons: 'Less dramatic than dark backgrounds; not the best choice if you want to project maximum authority' },
                  { bg: 'Dark Gray / Charcoal', when: 'Executives, attorneys, finance professionals, anyone projecting authority', pros: 'Projects authority, stability, and seriousness; high contrast makes the subject pop; popular for firm directories', cons: 'Can appear severe if expression is too formal; not ideal for warm, approachable professions like family law or mental health' },
                  { bg: 'Environmental / Outdoor', when: 'Real estate agents, personal brands, creative professionals, certain executives', pros: 'Communicates context and personality; can feel more authentic and dynamic', cons: 'Requires careful execution — lighting must be professional; background must be uncluttered; can look casual if done poorly' },
                ].map(item => (
                  <SectionReveal key={item.bg}>
                    <div className="bg-[var(--color-bg-warm)] rounded-xl p-7 border border-gray-100">
                      <h3 className="font-bold text-[var(--color-text-dark)] text-lg mb-3">{item.bg}</h3>
                      <p className="text-sm text-[var(--color-text-muted)] mb-3"><strong>Best for:</strong> {item.when}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wide mb-2">Strengths</p>
                          <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{item.pros}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-amber-600 uppercase tracking-wide mb-2">Considerations</p>
                          <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{item.cons}</p>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-10">What to Avoid</h2>
              </SectionReveal>
              <div className="space-y-3">
                {[
                  'Busy or textured backgrounds (bookshelves, office walls, plants) — these compete with your face',
                  'Bright or saturated colors (red, orange, yellow, vivid blue) — these can look dated and limit use across directories',
                  'Matching your outfit to the background — if you wear a dark suit against a dark background, you disappear',
                  'Gradient or dramatic theatrical backgrounds — these can look like a school photo from 1998',
                  'Blurry office environments that were not intentionally composed — these look like you stepped outside for a quick photo rather than invested in a professional session',
                ].map(item => (
                  <SectionReveal key={item}>
                    <div className="flex gap-3 p-5 bg-white rounded-xl border border-gray-100">
                      <XCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          <FAQSection faqs={faqs} heading="Headshot Background — Frequently Asked Questions" />
          <CTASection heading="Ready to Book Your Session?" subheading="We handle background selection as part of your pre-session consultation. $150 session. 48-hour delivery. Modesto, CA." primaryLabel="Book Your Session" primaryHref="/premium-headshots#booking-heading" showContactInfo={false} />
        </main>
      </div>
    </>
  );
}
