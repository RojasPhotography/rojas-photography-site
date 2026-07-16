import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import SchemaScript from '../components/SchemaScript';
import { generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'Can a portrait be used as a professional headshot?',
    answer: 'Sometimes — but not always. An environmental portrait with a clean, professional look and tight framing can work for LinkedIn or a website bio. A highly artistic, dramatically lit, or loosely framed portrait is unlikely to meet the professional standard expected on directories like Avvo, Martindale-Hubbell, Healthgrades, or broker-dealer platforms. When in doubt, a dedicated headshot session produces the result you need.',
  },
  {
    question: 'What framing is standard for a LinkedIn headshot?',
    answer: 'LinkedIn recommends a photo where your face takes up at least 60% of the frame — face and shoulders. The platform displays profile photos in a circular crop at small sizes, so anything outside the face-and-shoulders frame is cropped out on most views. A tight headshot framing optimized for this works far better than a full-body or environmental photo.',
  },
  {
    question: 'Do actors need headshots or portraits?',
    answer: 'Actors need headshots — specifically commercial and theatrical headshots that are tightly framed and expression-focused. Acting headshots are a specialized form of professional headshot (not artistic portraits) with their own industry conventions around framing, expression, and lighting. If you need acting headshots, let us know during your booking consultation.',
  },
  {
    question: 'What is an environmental portrait?',
    answer: 'An environmental portrait places the subject in their professional environment — an office, a clinic, a workshop, a courtroom — with enough context to communicate what they do. These can be powerful for website About pages and personal brand use, but they are not interchangeable with a clean headshot for directories and LinkedIn.',
  },
  {
    question: 'Can I get both a headshot and a portrait in one session?',
    answer: 'Yes. Many professionals book a session that includes both tight headshot frames for LinkedIn and directories, and slightly wider or more relaxed frames for their website About page or personal brand. Unlimited wardrobe changes and flexible framing are included in every Rojas Photography session — discuss your needs during your pre-session consultation.',
  },
];

export const metadata: Metadata = {
  title: 'Headshot vs. Portrait: What Is the Difference? (2026)',
  description: 'What is the difference between a headshot and a portrait? Clear explanation of purpose, framing, and when to use each for professional and personal use.',
  robots: 'index, follow',
  alternates: { canonical: 'https://rojasphotography.net/headshot-vs-portrait' },
  openGraph: {
    title: 'Headshot vs. Portrait: What Is the Difference? (2026)',
    description: 'What is the difference between a headshot and a portrait? When to use each, and what each is designed for.',
    url: 'https://rojasphotography.net/headshot-vs-portrait',
    type: 'article',
    images: [{ url: '/images/Hero Image1.jpg', alt: 'Professional headshots — Rojas Photography Modesto CA' }],
  },
};

export default function HeadshotVsPortraitPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Headshot vs. Portrait', url: 'https://rojasphotography.net/headshot-vs-portrait' },
      ])} />
      <div className="min-h-screen bg-white">
        <HeroSection image="/images/Hero Image1.jpg" title="Headshot vs. Portrait: What Is the Difference?" tag="2026 Guide | Rojas Photography" objectPosition="center 30%" fullHeight={false}>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">Two different tools for two different purposes — here is when you need each one.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/premium-headshots#booking-heading" className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">Book a Headshot Session</Link>
          </div>
        </HeroSection>
        <main id="main-content">
          <section className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-6">The Direct Answer</h2>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p><strong className="text-[var(--color-text-dark)]">A headshot</strong> is a tightly framed professional photograph — typically face and shoulders — designed for a specific professional purpose: LinkedIn, a company directory, a press kit, a legal or medical profile.</p>
                  <p><strong className="text-[var(--color-text-dark)]">A portrait</strong> is broader and more expressive — it can include more of the body, the environment, or creative compositional elements. Portraits are used for personal branding, artistic contexts, website About pages, and editorial use.</p>
                  <p>Most professionals need a headshot. Portraits are valuable additions for personal brands, speakers, and those with heavy media presence — but they do not replace headshots for standard professional directories.</p>
                </div>
              </SectionReveal>
            </div>
          </section>

          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-10">Side-by-Side Comparison</h2>
              </SectionReveal>
              <SectionReveal>
                <div className="overflow-x-auto rounded-xl border border-gray-100">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[var(--color-bg-warm)] border-b border-gray-200">
                        <th className="text-left px-5 py-4 font-bold text-[var(--color-text-dark)]">Attribute</th>
                        <th className="text-left px-5 py-4 font-bold text-[var(--color-primary)]">Headshot</th>
                        <th className="text-left px-5 py-4 font-bold text-[var(--color-text-dark)]">Portrait</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { attr: 'Framing', hs: 'Face and shoulders', por: 'Varies — can include full body or environment' },
                        { attr: 'Background', hs: 'Clean, neutral (white, gray, dark)', por: 'Varied — environmental, artistic, location' },
                        { attr: 'Primary purpose', hs: 'Professional directories, LinkedIn, press kit', por: 'Personal brand, website, editorial, artistic' },
                        { attr: 'Expression', hs: 'Professional, controlled, industry-appropriate', por: 'Varied — can be candid, artistic, expressive' },
                        { attr: 'Style', hs: 'Standardized, consistent', por: 'Creative, individualized' },
                        { attr: 'Usage', hs: 'LinkedIn, Avvo, Healthgrades, firm directory', por: 'Website About page, book cover, press feature' },
                        { attr: 'Shelf life', hs: 'Annually or every other year', por: 'Varies — often longer for artistic use' },
                      ].map(row => (
                        <tr key={row.attr} className="hover:bg-gray-50">
                          <td className="px-5 py-4 font-semibold text-[var(--color-text-dark)]">{row.attr}</td>
                          <td className="px-5 py-4 text-[var(--color-text-body)]">{row.hs}</td>
                          <td className="px-5 py-4 text-[var(--color-text-muted)]">{row.por}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </SectionReveal>
            </div>
          </section>

          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-10">Which One Do You Need?</h2>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { label: 'You need a headshot if...', items: ['Your photo appears on LinkedIn', 'You are listed in a professional directory (Avvo, Healthgrades, Martindale)', 'You are applying for jobs or residency programs', 'Your firm or company uses a directory with a required photo format', 'You are building or refreshing your professional brand'] },
                  { label: 'A portrait is valuable if...', items: ['You have a personal brand website with an About page', 'You speak at conferences and appear in event programs', 'You are publishing a book or building an author platform', 'You want to show your professional environment', 'You need editorial-style images for press coverage or media features'] },
                ].map(col => (
                  <SectionReveal key={col.label}>
                    <div className="bg-white rounded-xl p-8 border border-gray-100 h-full">
                      <h3 className="text-[var(--color-text-dark)] text-lg mb-4">{col.label}</h3>
                      <ul className="space-y-3">
                        {col.items.map(item => (
                          <li key={item} className="flex gap-2 text-sm text-[var(--color-text-body)]">
                            <CheckCircle2 size={15} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          <FAQSection faqs={faqs} heading="Headshot vs. Portrait — Frequently Asked Questions" />
          <CTASection heading="Ready to Book Your Headshot?" subheading="$150 session. $150 per image. Professional headshots for LinkedIn, directories, and press use. Modesto, CA." primaryLabel="Book Your Session" primaryHref="/premium-headshots#booking-heading" showContactInfo={false} />
        </main>
      </div>
    </>
  );
}
