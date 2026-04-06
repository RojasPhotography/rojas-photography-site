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
    question: 'What colors look best for a professional headshot?',
    answer: 'Navy blue, burgundy, forest green, charcoal gray, and royal blue consistently photograph well. These colors are flattering across a wide range of skin tones, read as professional on camera, and work against both light and dark backgrounds. Avoid neon colors, very light pastels, and all-white or all-black against a matching background.',
  },
  {
    question: 'Should I wear a suit for my headshot?',
    answer: 'It depends on your industry. Attorneys, financial professionals, and executives should typically wear a suit. Tech and creative professionals often look best in business casual — a polished top or open-collar button-down. Healthcare professionals benefit from a white coat or business professional. The rule of thumb: wear what you would wear to an important client meeting in your industry.',
  },
  {
    question: 'Can I bring multiple outfits to my headshot session?',
    answer: 'Yes — unlimited wardrobe changes are included in every Rojas Photography session. Bring 2–3 outfits that represent different looks: one formal, one slightly more casual, and one with a different color. Having options gives you more versatility in your final images for different platforms and uses.',
  },
  {
    question: 'What patterns should I avoid for headshots?',
    answer: 'Avoid: thin stripes, small checks, herringbone, and busy florals. These patterns can cause moiré distortion on camera — a visual vibration effect where the pattern interferes with the camera sensor and creates a distracting pattern that was not visible to the naked eye. Solid colors and subtle textures photograph much more reliably.',
  },
  {
    question: 'Should I wear a white coat for my medical headshot?',
    answer: 'Yes, for most clinical settings. A white coat communicates expertise and clinical authority, and is expected on medical directories like Healthgrades and Doximity. For administrative or executive roles in healthcare, business professional is more appropriate. Bring both to your session and we will photograph you in each — you can choose which image fits each specific use.',
  },
  {
    question: 'What should I wear for a LinkedIn headshot?',
    answer: 'One step up from your daily work attire — professional but authentic to your industry. If you wear business casual daily, wear business professional for your LinkedIn headshot. If you are in finance or law and already wear formal attire daily, a well-fitted suit in a flattering color is the right choice. The goal is to look like a polished, current version of yourself.',
  },
  {
    question: 'How should I do my makeup for a headshot session?',
    answer: 'Natural and polished — reduce shine, even skin tone, and define your features without heavy drama. Studio lighting can amplify makeup that looks fine in everyday settings. Heavy contouring, dramatic eye makeup, or very bold lips can look exaggerated in professional headshots. A matte powder to reduce shine is particularly helpful. Apply makeup as you would for an important presentation, not a night out.',
  },
  {
    question: 'How often should I update my headshot?',
    answer: 'Annually, or every other year at minimum. Your professional brand evolves — roles change, appearances change, and the standard for professional imagery rises every year. If your current headshot no longer looks like you walking into a meeting, update it.',
  },
];

export const metadata: Metadata = {
  title: 'What to Wear for a Professional Headshot (2026 Guide by Industry)',
  description: 'Complete wardrobe guide for professional headshots — what colors, patterns, and styles work by industry. Attorneys, healthcare, finance, real estate, and more.',
  robots: 'index, follow',
  alternates: { canonical: 'https://rojasphotography.net/what-to-wear-for-a-headshot' },
  openGraph: {
    title: 'What to Wear for a Professional Headshot (2026 Complete Guide)',
    description: 'Industry-by-industry wardrobe guide for professional headshots. Colors, patterns, and styles that work on camera.',
    url: 'https://rojasphotography.net/what-to-wear-for-a-headshot',
    type: 'article',
    images: [{ url: '/images/Hero Image1.jpg', alt: 'Professional headshots — Rojas Photography Modesto CA' }],
  },
};

const industryGuide = [
  {
    industry: 'Attorneys & Legal Professionals',
    wear: 'Dark suit (navy, charcoal, or black), white or light blue dress shirt or blouse, conservative tie or minimal jewelry. Avoid: loud ties, trendy silhouettes, casual fabrics.',
    note: 'Authority is the primary signal. Conservative professional reads best across Avvo, Martindale, and firm directories.',
  },
  {
    industry: 'Healthcare & Medical Professionals',
    wear: 'White coat over business professional for most clinical roles. Business professional alone for administrative or executive positions. Avoid: scrubs for formal directories.',
    note: 'Bring both — we photograph you in your white coat and business attire so you have options for different platforms.',
  },
  {
    industry: 'Financial Advisors & Bankers',
    wear: 'Dark suit, white or pale blue shirt, conservative tie or blouse. High-trust signal. Avoid: bright colors, casual fabrics, anything that reads as weekend attire.',
    note: 'In finance, your image is part of your value proposition. Conservative and polished is always the right direction.',
  },
  {
    industry: 'Real Estate Agents',
    wear: 'Professional but approachable — blazer over a solid-colored top. High-contrast colors for yard signs. Avoid: busy patterns that lose detail at small sizes on marketing materials.',
    note: 'Your headshot goes on yard signs — readability at distance matters. High-contrast solid colors work best.',
  },
  {
    industry: 'Tech & Startup Professionals',
    wear: 'Business casual — polished open-collar button-down, blazer optional, minimal jewelry. Avoid: overly formal suits that feel out of character, or casual t-shirts that undercut credibility.',
    note: 'The goal is authentic credibility — polished without looking like you are performing formality.',
  },
  {
    industry: 'Executives & Corporate Leaders',
    wear: 'Tailored suit or executive blazer, classic colors (navy, charcoal, deep burgundy), minimal accessories. Solid colors or subtle textures.',
    note: 'Executive presence is conveyed through polish and intentionality. Well-fitted clothing in authoritative colors projects leadership.',
  },
  {
    industry: 'Educators & Academics',
    wear: 'Approachable professional — blazer, structured top, approachable colors (medium blue, warm burgundy, forest green). Authority without intimidation.',
    note: 'Academics benefit from projecting both expertise and approachability. Avoid very formal corporate attire that can feel disconnected from an academic context.',
  },
  {
    industry: 'Marketing & Creative Professionals',
    wear: 'More expressive — one statement piece (bolder color, interesting texture) is acceptable while staying professional. Avoid wearing your entire personality in one outfit.',
    note: 'Creatives can push slightly beyond conservative professional — but the headshot is still for a professional context. One interesting element per look.',
  },
];

export default function WhatToWearHeadshotPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'How to Prepare for Headshots', url: 'https://rojasphotography.net/how-to-prepare-for-headshots' },
        { name: 'What to Wear for a Headshot', url: 'https://rojasphotography.net/what-to-wear-for-a-headshot' },
      ])} />
      <div className="min-h-screen bg-white">
        <HeroSection image="/images/Hero Image1.jpg" title="What to Wear for a Professional Headshot: The Complete 2026 Guide" tag="Wardrobe Guide | Rojas Photography" objectPosition="center 30%" fullHeight={false}>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">Your wardrobe either frames your face or competes with it. Here is exactly what works — by industry.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/premium-headshots#booking-heading" className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">Book Your Session</Link>
            <Link href="/how-to-prepare-for-headshots" className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">Full Prep Guide</Link>
          </div>
        </HeroSection>

        <main id="main-content">

          <section className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-6">Why Wardrobe Matters More Than You Think</h2>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>A camera compresses depth and flattens color in ways that are not visible in a mirror. Patterns that look subtle in person — thin stripes, small checks, herringbone — can create visual noise on camera. A professional headshot is designed to draw attention to your face. Your clothing should frame it, not compete with it.</p>
                  <p>The most common wardrobe mistake is not wearing the wrong thing — it is wearing something that distracts. A bold pattern, an overly bright color, or a cluttered accessory can take up visual attention that should be spent on your expression and your presence.</p>
                </div>
              </SectionReveal>
            </div>
          </section>

          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">The Best Colors for a Professional Headshot</h2>
                <p className="text-center text-[var(--color-text-body)] mb-12 text-lg max-w-2xl mx-auto">These colors consistently photograph well, flatter a wide range of skin tones, and read as professional across all industries.</p>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { color: 'Navy Blue', why: 'Universally flattering, reads as authority and trustworthiness, works on any background. The single safest choice for any professional.' },
                  { color: 'Burgundy / Deep Red', why: 'Bold and confident without being aggressive. Flattering across most skin tones. Memorable without being loud.' },
                  { color: 'Forest / Emerald Green', why: 'Sophisticated and modern. Flattering across a wide range of skin tones. Unexpected and memorable in a sea of navy and gray.' },
                  { color: 'Charcoal Gray', why: 'Polished, versatile, and pairs with any background. Particularly strong for executive and legal contexts.' },
                  { color: 'Royal or Medium Blue', why: 'Approachable and professional. Slightly less formal than navy — well-suited for LinkedIn and platforms where approachability matters.' },
                  { color: 'Muted Teal', why: 'Modern and flattering. Works particularly well for healthcare and approachable professional contexts.' },
                ].map(item => (
                  <SectionReveal key={item.color}>
                    <div className="flex gap-4 p-6 bg-[var(--color-bg-warm)] rounded-xl border border-gray-100">
                      <CheckCircle2 size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-[var(--color-text-dark)] mb-1">{item.color}</h3>
                        <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{item.why}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">What to Wear by Industry</h2>
                <p className="text-center text-[var(--color-text-body)] mb-14 text-lg max-w-2xl mx-auto">The right wardrobe for a corporate attorney is different from what works for a tech founder. Here is the breakdown.</p>
              </SectionReveal>
              <div className="space-y-5">
                {industryGuide.map(item => (
                  <SectionReveal key={item.industry}>
                    <div className="bg-white rounded-xl p-7 border border-gray-100">
                      <h3 className="font-bold text-[var(--color-text-dark)] text-lg mb-2">{item.industry}</h3>
                      <p className="text-[var(--color-text-body)] leading-relaxed mb-3"><strong className="text-[var(--color-text-dark)]">Wear:</strong> {item.wear}</p>
                      <p className="text-sm text-[var(--color-text-muted)] italic">{item.note}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-10">What to Avoid</h2>
              </SectionReveal>
              <div className="space-y-3">
                {[
                  'Busy patterns — stripes, checks, herringbone, florals — can cause moiré distortion on camera',
                  'Neon or very bright colors — dominates the image and distracts from your face',
                  'Sleeveless tops without a jacket — often reads as too casual for professional headshots',
                  'T-shirts or casual tops — signals low investment regardless of industry',
                  'Visible logos or text — distracts, can date the image, and creates complications for commercial use',
                  'Wrinkled or ill-fitting clothing — camera amplifies poor fit and wrinkles significantly',
                  'Excessive jewelry — anything that catches light or creates movement on camera is a distraction',
                  'Matching your outfit color to your background — you will blend into the image',
                ].map(item => (
                  <SectionReveal key={item}>
                    <div className="flex gap-3 p-5 bg-[var(--color-bg-warm)] rounded-xl border border-gray-100">
                      <XCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-[var(--color-text-body)] leading-relaxed">{item}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-10">The Day-Before Checklist</h2>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Steam or iron all outfits — do this the night before, not the morning of',
                  'Lay out 2–3 outfit options so you are not making decisions the day of',
                  'Check for lint, pet hair, and loose threads on every piece',
                  'Confirm fit — nothing too tight that restricts posture or too loose that looks sloppy',
                  'Get a full night of sleep — tired eyes show in headshots',
                  'Plan hair and grooming — styled as you would for an important meeting',
                  'If you wear makeup, test your look under bright lighting in advance',
                  'Get a haircut one week before — not the day before (hair needs to settle)',
                ].map(item => (
                  <SectionReveal key={item}>
                    <div className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100">
                      <CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{item}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          <FAQSection faqs={faqs} heading="Headshot Wardrobe — Frequently Asked Questions" />
          <CTASection heading="Ready to Book? We Guide You Through the Rest." subheading="$150 session. Unlimited wardrobe changes. 48-hour delivery. Modesto, CA." primaryLabel="Book Your Session" primaryHref="/premium-headshots#booking-heading" showContactInfo={false} />
        </main>
      </div>
    </>
  );
}
