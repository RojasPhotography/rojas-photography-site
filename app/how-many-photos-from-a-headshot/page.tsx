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
    question: 'How many images does Rojas Photography deliver?',
    answer: 'There is no minimum or maximum. You select your favorite images from the session, and each selected image is professionally edited and delivered within 48 hours. Most professionals select 2–4 images. You only pay for the images you choose — $150 per final edited image.',
  },
  {
    question: 'Do I get the raw or unedited files?',
    answer: 'No. Raw and unedited files are not provided — and a reputable headshot photographer will not offer them. The professional value is in the editing: retouching, color correction, skin refinement, and the final polish that makes a headshot work. Delivering raw files would be like a restaurant offering you raw ingredients.',
  },
  {
    question: 'What is included in professional editing?',
    answer: 'Professional retouching includes skin tone correction, blemish removal, reduction of under-eye shadows, color grading for consistent and flattering tones, sharpening, and background refinement. The goal is a version of you that looks like you on your best day — not an unrecognizable alteration.',
  },
  {
    question: 'Can I order more images after my session?',
    answer: 'Yes. After your session, your unedited selects are available for review. If you want additional images edited beyond your initial selection, you can order them at the standard $150 per image rate. Most clients review all their options and make their selections during this review.',
  },
  {
    question: 'How long does editing take?',
    answer: 'Final edited images are delivered within 48 hours of your session for individual sessions. Rush delivery (same day or next morning) is available for $75 per image.',
  },
];

export const metadata: Metadata = {
  title: 'How Many Photos Do You Get From a Headshot Session? (2026)',
  description: 'How many edited photos come from a professional headshot session? The honest answer — and how many you actually need for professional use.',
  robots: 'index, follow',
  alternates: { canonical: 'https://rojasphotography.net/how-many-photos-from-a-headshot' },
  openGraph: {
    title: 'How Many Photos Do You Get From a Headshot Session? (2026)',
    description: 'How many edited photos come from a professional headshot session? The honest answer — and how many you actually need.',
    url: 'https://rojasphotography.net/how-many-photos-from-a-headshot',
    type: 'article',
    images: [{ url: '/images/Hero Image1.jpg', alt: 'Professional headshots — Rojas Photography Modesto CA' }],
  },
};

export default function HowManyPhotosPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'How Many Photos From a Headshot Session', url: 'https://rojasphotography.net/how-many-photos-from-a-headshot' },
      ])} />
      <div className="min-h-screen bg-white">
        <HeroSection image="/images/Hero Image1.jpg" title="How Many Photos Do You Get From a Headshot Session?" tag="2026 Guide | Rojas Photography" objectPosition="center 30%" fullHeight={false}>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">The honest answer — and how many images you actually need for professional use.</p>
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
                    <strong className="text-[var(--color-text-dark)]">A professional headshot session typically delivers 2–5 final edited images.</strong> During the session, a photographer will take 50–200+ shots across multiple wardrobe changes and expressions — but the deliverable is a curated selection of the best, professionally edited.
                  </p>
                  <p className="text-lg text-[var(--color-text-body)] leading-relaxed">
                    At Rojas Photography, there is no minimum. You select your favorites from the session review, and each chosen image is professionally edited and delivered within 48 hours. Most professionals select 2–4 images. You only pay for what you choose.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-4">Why the Number Is Small — And Why That Is a Good Thing</h2>
                <p className="text-center text-[var(--color-text-body)] mb-10 text-lg max-w-2xl mx-auto">A photographer who delivers 50 unedited images is giving you a proof sheet, not a headshot.</p>
              </SectionReveal>
              <SectionReveal>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>Professional editing is where a good shot becomes a great headshot. Retouching, color correction, skin refinement, sharpening, and background cleanup require significant time per image. A photographer who delivers 50 images either is not editing them properly or is charging accordingly.</p>
                  <p>The right deliverable is 2–5 images that are genuinely excellent — not 50 images that are inconsistent and unfinished. Most professionals find that 2–3 high-quality images serve every professional purpose they have: LinkedIn, their company website, their email signature, and a press or speaker bio.</p>
                </div>
              </SectionReveal>
            </div>
          </section>

          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-10">How Many Images Do You Actually Need?</h2>
              </SectionReveal>
              <div className="space-y-4">
                {[
                  { count: '1 image', label: 'Minimum viable', desc: 'One strong headshot covers LinkedIn and your company directory. Sufficient for most professionals in stable roles who need a current, professional photo.' },
                  { count: '2–3 images', label: 'Recommended for most professionals', desc: 'Different expressions or wardrobe looks for different uses — one more formal for firm directories and Avvo, one warmer for LinkedIn and social, one for a press or speaker bio.' },
                  { count: '4+ images', label: 'For high-visibility professionals', desc: 'Speakers, authors, executives with heavy media presence, and professionals who appear frequently in press may benefit from a broader library of looks for different contexts.' },
                ].map(item => (
                  <SectionReveal key={item.count}>
                    <div className="flex gap-5 p-7 bg-white rounded-xl border border-gray-100">
                      <CheckCircle2 size={20} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-bold text-[var(--color-text-dark)] text-lg">{item.count}</span>
                          <span className="text-sm text-[var(--color-text-muted)] bg-gray-100 px-3 py-1 rounded-full">{item.label}</span>
                        </div>
                        <p className="text-[var(--color-text-body)] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          <FAQSection faqs={faqs} heading="Headshot Image Delivery — Frequently Asked Questions" />
          <CTASection heading="Ready to Book Your Session?" subheading="$150 session. $150 per image. No minimums. 48-hour delivery. Modesto, CA." primaryLabel="Book Your Session" primaryHref="/premium-headshots#booking-heading" showContactInfo={false} />
        </main>
      </div>
    </>
  );
}
