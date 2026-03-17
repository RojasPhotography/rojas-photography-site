import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, XCircle } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import SchemaScript from '../components/SchemaScript';
import { generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'When should I get a haircut before a headshot session?',
    answer:
      'Schedule your haircut 5-7 days before your session — not the day before. A fresh cut looks slightly too tight on camera and your hair needs a few days to settle into its natural shape. If you color your hair, do it at least one week before to allow color to settle and avoid any scalp redness.',
  },
  {
    question: 'Should I wear makeup for a professional headshot?',
    answer:
      'Yes — and go slightly heavier than your everyday makeup. Studio lighting washes out features, so your makeup needs to compensate. Use matte foundation and avoid shimmer or glitter. Bring your makeup bag for touch-ups between outfit changes. Men: a light application of matte powder helps reduce shine under studio lights.',
  },
  {
    question: 'What colors should I wear for a professional headshot?',
    answer:
      'Solid, muted tones photograph best: navy, charcoal, forest green, burgundy, and black are all excellent choices. Navy in particular signals trust and competence (backed by color psychology research). Avoid white — it can wash out against lighter backgrounds. Avoid neon or very bright colors that draw attention away from your face.',
  },
  {
    question: 'How many outfits should I bring to a headshot session?',
    answer:
      'Bring 2-4 outfits. Our sessions include unlimited wardrobe changes, so having options means you can shoot different looks for different uses — LinkedIn, your website bio, business cards, and marketing materials. Pack clothes on hangers in a garment bag to keep them wrinkle-free.',
  },
  {
    question: 'What should I avoid the night before a headshot session?',
    answer:
      'Avoid alcohol (it shows in your skin and eyes), salty foods (cause facial puffiness), and late nights (dark circles are difficult to remove in editing). Skip trying new skincare products that could cause a reaction. Do not get a new haircut the day before — schedule it 5-7 days in advance.',
  },
  {
    question: 'How do I look natural and not stiff in headshots?',
    answer:
      'Working with a photographer who coaches you in real-time is the single biggest factor. At Rojas Photography, we guide your posing, angles, and expression throughout the entire session — you never have to guess what to do. Between shots, shake out your hands and roll your shoulders to release tension. Think of a genuine smile by recalling a funny moment rather than forcing one.',
  },
  {
    question: 'What retouching is included with my headshots?',
    answer:
      'Every image includes professional editing: skin tone correction, blemish removal, shine reduction, and stray hair cleanup. We do not alter your permanent features — retouching is designed to present the best version of you, not a different person. This is why preparation matters: the better you look when you arrive, the better your final images will be.',
  },
  {
    question: 'What should I do with my headshots after the session?',
    answer:
      'Update your LinkedIn profile photo first — profiles with professional photos get 14x more views and 36x more connection requests. Then update your company website bio, email signature, and any professional directory listings. For LinkedIn, use a square crop (400x400px minimum). For website headers, you may want a wider crop — we can provide both during selection.',
  },
];

export const metadata: Metadata = {
  title: 'How to Prepare for Professional Headshots | Complete Guide',
  description:
    'Complete guide: wardrobe, hair, makeup & day-of tips for your headshot session. Industry-specific advice from Modesto\'s top corporate photographer.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/how-to-prepare-for-headshots',
  },
  openGraph: {
    title: 'How to Prepare for Professional Headshots | Complete Guide',
    description:
      'Complete guide: wardrobe, hair, makeup & day-of tips for your headshot session. Industry-specific advice from Modesto\'s top corporate photographer.',
    url: 'https://rojasphotography.net/how-to-prepare-for-headshots',
    type: 'article',
    images: [
      {
        url: '/images/headshots/headshot-ceo-nutrition.jpg',
        alt: 'Professional corporate headshot - Rojas Photography Modesto CA',
      },
    ],
  },
};

const industryGuide = [
  { industry: 'Corporate Executive', clothing: 'Classic suit or blazer, solid tie', colors: 'Navy, charcoal, black', hair: 'Conservative, polished', notes: 'Project authority and confidence' },
  { industry: 'Attorney / Legal', clothing: 'Suit or blazer with collared shirt/blouse', colors: 'Navy, charcoal, dark gray', hair: 'Neat, professional', notes: 'Convey trustworthiness and competence' },
  { industry: 'Real Estate Agent', clothing: 'Business casual blazer, approachable style', colors: 'Navy, burgundy, warm tones', hair: 'Natural and polished', notes: 'Balance professionalism with approachability' },
  { industry: 'Healthcare Professional', clothing: 'Business casual or scrubs with a blazer', colors: 'Navy, teal, dark blue', hair: 'Clean and controlled', notes: 'Convey care and competence' },
  { industry: 'Financial Advisor / CPA', clothing: 'Conservative suit or blazer', colors: 'Navy, charcoal, deep green', hair: 'Conservative and groomed', notes: 'Build trust through professional appearance' },
  { industry: 'Entrepreneur / Startup', clothing: 'Business casual with personality', colors: 'Dark solids, brand-aligned tones', hair: 'Your authentic style', notes: 'Show personality while staying professional' },
  { industry: 'Creative Professional', clothing: 'Business casual with a creative touch', colors: 'Bold solids that match your brand', hair: 'Expressive but polished', notes: 'Personality and professionalism together' },
  { industry: 'Sales Professional', clothing: 'Blazer, approachable business casual', colors: 'Navy, warm neutrals', hair: 'Clean and energetic', notes: 'Convey energy and trustworthiness' },
];

const wearDo = [
  'Solid colors — navy, charcoal, forest green, burgundy, black',
  'Well-fitted clothing (not too tight, not baggy)',
  'Classic, timeless styles that won\'t date quickly',
  'Clothes you\'ve worn before and feel confident in',
  'Pressed, wrinkle-free garments (steam the night before)',
  '2-4 outfit options (we have unlimited wardrobe changes)',
];

const wearDont = [
  'Busy patterns — stripes, plaids, florals (cause visual distortion on camera)',
  'Logos or branding on clothing',
  'Bright white against light backgrounds',
  'Neon or very saturated colors that pull focus from your face',
  'Distracting statement jewelry',
  'Brand new outfits you\'ve never worn before',
];

const nightBeforeChecklist = [
  'Lay out 2-4 outfit options and hang them in a garment bag',
  'Steam or press any wrinkled clothing',
  'Set out your makeup, hair products, and touch-up supplies',
  'Get a full 7-8 hours of sleep — it shows in your eyes',
  'Drink at least 8 glasses of water throughout the day',
  'Eat a light dinner and avoid salty foods that cause puffiness',
  'Skip alcohol — it affects your skin and eye clarity',
  'Confirm your session time and studio address',
  'Avoid applying new skincare products that could cause a reaction',
];

const dayOfChecklist = [
  'Eat a light breakfast — avoid heavy, salty foods',
  'Drink water — dehydration visibly affects skin on camera',
  'Shower and groom as you would for an important meeting',
  'Apply makeup (slightly heavier than everyday for camera)',
  'Pack clothes on hangers; bring hair products and a compact',
  'Arrive 10-15 minutes early to settle in before the session',
  'Silence your phone and clear your schedule — be fully present',
];

export default function HowToPrepareForHeadshotsPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Premium Headshots', url: 'https://rojasphotography.net/premium-headshots' },
        { name: 'How to Prepare for Headshots', url: 'https://rojasphotography.net/how-to-prepare-for-headshots' },
      ])} />

      <div className="min-h-screen bg-white">

        {/* SB7: A Character with a Goal */}
        <HeroSection
          image="/images/headshots/headshot-ceo-nutrition.jpg"
          title="How to Prepare for a Professional Headshot"
          tag="Complete Preparation Guide | Rojas Photography — Modesto, CA"
          objectPosition="70% 33%"
        >
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            The difference between an awkward headshot and one that builds instant credibility often comes down to preparation. This guide covers everything — wardrobe, hair, makeup, and day-of logistics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/premium-headshots#booking-heading"
              className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Book Your Session
            </Link>
            <Link
              href="/discovery-call"
              className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Schedule Discovery Call
            </Link>
          </div>
        </HeroSection>

        <main id="main-content">

          {/* SB7: Has a Problem */}
          <section className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-8">
                  Why Most People Get Disappointing Headshots
                </h2>
                <div className="grid md:grid-cols-2 gap-8 text-[var(--color-text-body)] leading-relaxed text-lg">
                  <div>
                    <p className="mb-4">
                      Studies show that people form a first impression in as little as 100 milliseconds — and your headshot is often the first impression clients, employers, or partners have of you before they ever meet you.
                    </p>
                    <p>
                      LinkedIn profiles with professional photos receive <strong className="text-[var(--color-text-dark)]">14x more views</strong> and <strong className="text-[var(--color-text-dark)]">36x more messages</strong> than those without. The stakes are real.
                    </p>
                  </div>
                  <div>
                    <p className="mb-4">
                      Most disappointing headshots happen for one of two reasons: the photographer didn&apos;t coach the client, or the client arrived unprepared — wrong clothing, rushed, unsure what to expect.
                    </p>
                    <p className="font-semibold text-[var(--color-text-dark)]">
                      Preparation is the part you control. This guide gives you everything you need.
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Quick Checklist — featured snippet bait */}
          <section className="py-16 px-8 bg-white border-b border-gray-100">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  Quick Headshot Prep Checklist
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-10 text-lg">
                  Short on time? Here&apos;s the essentials at a glance.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[var(--color-bg-warm)] rounded-xl p-6">
                    <h3 className="font-bold text-[var(--color-text-dark)] mb-4 text-lg">1 Week Before</h3>
                    <ul className="space-y-2 text-[var(--color-text-body)] text-sm">
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Get a haircut (not the day before)</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Color your hair if needed (let it settle)</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Plan and test your outfit options</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Book makeup/hair appointments if needed</li>
                    </ul>
                  </div>
                  <div className="bg-[var(--color-bg-warm)] rounded-xl p-6">
                    <h3 className="font-bold text-[var(--color-text-dark)] mb-4 text-lg">Night Before</h3>
                    <ul className="space-y-2 text-[var(--color-text-body)] text-sm">
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Steam/press outfits and hang in garment bag</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Skip alcohol and salty foods</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Drink plenty of water</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Get 7-8 hours of sleep</li>
                    </ul>
                  </div>
                  <div className="bg-[var(--color-bg-warm)] rounded-xl p-6">
                    <h3 className="font-bold text-[var(--color-text-dark)] mb-4 text-lg">Day Of</h3>
                    <ul className="space-y-2 text-[var(--color-text-body)] text-sm">
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Eat a light meal, avoid salty foods</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Apply makeup (slightly heavier than usual)</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Arrive 10-15 minutes early</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Bring touch-up supplies in a small bag</li>
                    </ul>
                  </div>
                  <div className="bg-[var(--color-bg-warm)] rounded-xl p-6">
                    <h3 className="font-bold text-[var(--color-text-dark)] mb-4 text-lg">Bring to Your Session</h3>
                    <ul className="space-y-2 text-[var(--color-text-body)] text-sm">
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />2-4 outfit options on hangers</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Hair products and brush/comb</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Makeup bag and blotting papers</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Reference photos if you have them</li>
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Wardrobe Section */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4 text-center">
                  What to Wear for Your Professional Headshot
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-14 max-w-2xl mx-auto text-lg">
                  Clothing is one of the most controllable factors in your headshot results.
                </p>
              </SectionReveal>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <SectionReveal>
                  <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm h-full">
                    <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-5 flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-[var(--color-primary)]" /> Do Wear
                    </h3>
                    <ul className="space-y-3">
                      {wearDo.map((item) => (
                        <li key={item} className="flex gap-3 text-[var(--color-text-body)] text-sm leading-relaxed">
                          <CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>

                <SectionReveal>
                  <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm h-full">
                    <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-5 flex items-center gap-2">
                      <XCircle size={20} className="text-red-400" /> Avoid
                    </h3>
                    <ul className="space-y-3">
                      {wearDont.map((item) => (
                        <li key={item} className="flex gap-3 text-[var(--color-text-body)] text-sm leading-relaxed">
                          <XCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>
              </div>

              <SectionReveal>
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">Why Patterns Are a Problem</h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    Busy patterns like stripes, plaids, and small prints create a visual distortion called &ldquo;moiré effect&rdquo; when photographed and compressed digitally. The result is a distracting visual banding that pulls the viewer&apos;s eye away from your face — exactly the opposite of what you want. Solid colors keep all attention where it belongs.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Hair Section */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-12 text-center">
                  Hair Preparation
                </h2>
              </SectionReveal>
              <div className="grid md:grid-cols-3 gap-8">
                <SectionReveal>
                  <div className="bg-[var(--color-bg-warm)] rounded-xl p-8 h-full">
                    <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-4">Timing Your Haircut</h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed mb-4">
                      Schedule your haircut <strong>5-7 days before</strong> your session — not the day before. A brand-new cut looks too tight on camera and needs a few days to relax into its natural shape.
                    </p>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                      If you color your hair, do it at least one week before to allow the color to settle and avoid any scalp redness or irritation.
                    </p>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="bg-[var(--color-bg-warm)] rounded-xl p-8 h-full">
                    <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-4">Day-of Hair Tips</h3>
                    <ul className="space-y-3 text-[var(--color-text-body)] text-sm leading-relaxed">
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Style hair as you would for an important meeting</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Bring products for touch-ups between outfit changes</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />If hair is very clean and hard to style, a light dry shampoo can help add texture</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Women: consider bringing options for hair up and hair down — both can look great</li>
                    </ul>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="bg-[var(--color-bg-warm)] rounded-xl p-8 h-full">
                    <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-4">For Men</h3>
                    <ul className="space-y-3 text-[var(--color-text-body)] text-sm leading-relaxed">
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Shave or groom facial hair 1-2 hours before your session — not the morning of (to allow redness to settle)</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Bring a razor and grooming supplies for touch-ups</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Trim nose and ear hair — small details show clearly in close-up photography</li>
                    </ul>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* Makeup & Grooming */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-12 text-center">
                  Makeup & Grooming Tips
                </h2>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-8">
                <SectionReveal>
                  <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">For Women</h3>
                    <ul className="space-y-3 text-[var(--color-text-body)] text-sm leading-relaxed">
                      <li className="flex gap-3"><CheckCircle2 size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Go slightly heavier than everyday makeup — studio lighting washes features out</li>
                      <li className="flex gap-3"><CheckCircle2 size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Use matte foundation and powder — avoid shimmer or glitter that reflects harshly under lights</li>
                      <li className="flex gap-3"><CheckCircle2 size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Set your makeup well so it lasts through multiple outfit changes</li>
                      <li className="flex gap-3"><CheckCircle2 size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Bring blotting papers and your compact for touch-ups between looks</li>
                      <li className="flex gap-3"><CheckCircle2 size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Avoid applying heavy face lotion immediately before the session — it can create shine under lights</li>
                      <li className="flex gap-3"><CheckCircle2 size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Consider booking a professional makeup artist for the best results — we can recommend trusted local artists in Modesto</li>
                    </ul>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">For Men</h3>
                    <ul className="space-y-3 text-[var(--color-text-body)] text-sm leading-relaxed">
                      <li className="flex gap-3"><CheckCircle2 size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />A light application of matte setting powder significantly reduces shine under studio lighting — even if you don&apos;t normally wear any products</li>
                      <li className="flex gap-3"><CheckCircle2 size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Moisturize the night before for healthy skin, but avoid applying lotion the morning of</li>
                      <li className="flex gap-3"><CheckCircle2 size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Bring blotting papers for in-session touch-ups</li>
                      <li className="flex gap-3"><CheckCircle2 size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />If you have visible blemishes, a small amount of concealer can save editing time</li>
                      <li className="flex gap-3"><CheckCircle2 size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Trim eyebrows if needed — camera picks up details your mirror might miss</li>
                    </ul>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* Night Before */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-3xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4 text-center">
                  The Night Before Your Session
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-12 text-lg">
                  How you prepare the night before has a direct impact on how you look on camera.
                </p>
                <div className="bg-[var(--color-bg-warm)] rounded-xl p-8">
                  <ul className="space-y-4">
                    {nightBeforeChecklist.map((tip) => (
                      <li key={tip} className="flex gap-4 items-start">
                        <CheckCircle2 size={20} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--color-text-body)] leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <p className="text-amber-900 text-sm leading-relaxed">
                    <strong>Pro tip:</strong> If your eyes tend to be puffy in the morning, place two spoons in the freezer overnight and apply them to your under-eye area for 1-2 minutes the morning of your session. It works.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Day Of */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-3xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-12 text-center">
                  Day-of Session Checklist
                </h2>
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                  <ul className="space-y-4">
                    {dayOfChecklist.map((tip) => (
                      <li key={tip} className="flex gap-4 items-start">
                        <CheckCircle2 size={20} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--color-text-body)] leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* SB7: Meets a Guide — What to expect at Rojas Photography */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6 text-center">
                  What to Expect at Your Session
                </h2>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>
                    The most common fear going into a headshot session is feeling awkward or not knowing what to do. We hear this from nearly every client — CEOs, attorneys, healthcare executives — all of them.
                  </p>
                  <p>
                    <strong className="text-[var(--color-text-dark)]">At Rojas Photography, you are never on your own in front of the camera.</strong> Our sessions are built entirely around real-time coaching. We guide your posing, angles, and expression step by step throughout the session. You see your images on a screen in real-time and give feedback as we go — so you always know what&apos;s working.
                  </p>
                  <p>
                    When you arrive, we&apos;ll do a brief consultation to review your goals and outfits. Sessions typically run 30-45 minutes, but there is no time limit — take as long as you need. Unlimited wardrobe changes are included. Your professionally edited images are delivered to a private online gallery within 48 hours.
                  </p>
                </div>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/premium-headshots#booking-heading"
                    className="btn-primary px-10 py-4 text-lg font-semibold rounded-full inline-block text-center"
                  >
                    View Session Details & Book
                  </Link>
                  <Link
                    href="/discovery-call"
                    className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block text-center"
                  >
                    Schedule a Discovery Call
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Industry Guide */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4 text-center">
                  Headshot Preparation by Industry
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-12 text-lg max-w-2xl mx-auto">
                  Different professions project different qualities. Here&apos;s a quick reference by industry.
                </p>
              </SectionReveal>
              <SectionReveal>
                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                  <table className="w-full bg-white text-sm">
                    <thead>
                      <tr className="bg-[var(--color-primary)] text-white">
                        <th className="px-5 py-4 text-left font-semibold">Industry</th>
                        <th className="px-5 py-4 text-left font-semibold">Clothing</th>
                        <th className="px-5 py-4 text-left font-semibold">Best Colors</th>
                        <th className="px-5 py-4 text-left font-semibold hidden md:table-cell">Goal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {industryGuide.map((row, i) => (
                        <tr key={row.industry} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-5 py-4 font-semibold text-[var(--color-text-dark)]">{row.industry}</td>
                          <td className="px-5 py-4 text-[var(--color-text-body)]">{row.clothing}</td>
                          <td className="px-5 py-4 text-[var(--color-text-body)]">{row.colors}</td>
                          <td className="px-5 py-4 text-[var(--color-text-body)] hidden md:table-cell">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Industry Headshot Gallery */}
          <section className="py-16 px-8 bg-white">
            <div className="max-w-3xl mx-auto">
              <SectionReveal>
                <p className="text-center text-[var(--color-text-muted)] text-sm mb-10 uppercase tracking-widest font-semibold">
                  Real results from Rojas Photography — Modesto, CA
                </p>
              </SectionReveal>
              <div className="grid grid-cols-3 gap-3">
                <SectionReveal className="relative">
                  <div className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                    <Image src="/images/headshots/headshot-attorney-03.jpg" alt="Professional attorney headshot - Modesto legal photography" fill sizes="(max-width: 768px) 33vw, 20vw" className="object-cover" />
                  </div>
                  <p className="text-center text-sm text-[var(--color-text-muted)] mt-2 font-medium">Attorney</p>
                </SectionReveal>
                <SectionReveal className="relative">
                  <div className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                    <Image src="/images/headshots/headshot-executive-ceo.jpg" alt="Corporate executive CEO headshot - Modesto professional photography" fill sizes="(max-width: 768px) 33vw, 20vw" className="object-cover" />
                  </div>
                  <p className="text-center text-sm text-[var(--color-text-muted)] mt-2 font-medium">Corporate Executive</p>
                </SectionReveal>
                <SectionReveal className="relative">
                  <div className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                    <Image src="/images/headshots/headshot-healthcare-executive-01.jpg" alt="Healthcare executive headshot - Modesto medical professional photography" fill sizes="(max-width: 768px) 33vw, 20vw" className="object-cover object-[30%_50%]" />
                  </div>
                  <p className="text-center text-sm text-[var(--color-text-muted)] mt-2 font-medium">Healthcare</p>
                </SectionReveal>
                <SectionReveal className="relative">
                  <div className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                    <Image src="/images/headshots/headshot-finance-cpa.jpg" alt="Finance CPA professional headshot - Modesto accounting photography" fill sizes="(max-width: 768px) 33vw, 20vw" className="object-cover object-[75%_50%]" />
                  </div>
                  <p className="text-center text-sm text-[var(--color-text-muted)] mt-2 font-medium">Finance / CPA</p>
                </SectionReveal>
                <SectionReveal className="relative">
                  <div className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                    <Image src="/images/headshots/headshot-realtor-01.jpg" alt="Real estate agent headshot - Modesto realtor professional photography" fill sizes="(max-width: 768px) 33vw, 20vw" className="object-cover" />
                  </div>
                  <p className="text-center text-sm text-[var(--color-text-muted)] mt-2 font-medium">Real Estate</p>
                </SectionReveal>
                <SectionReveal className="relative">
                  <div className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                    <Image src="/images/headshots/headshot-sales-manager-01.jpg" alt="Sales manager professional headshot - Modesto corporate photography" fill sizes="(max-width: 768px) 33vw, 20vw" className="object-cover" />
                  </div>
                  <p className="text-center text-sm text-[var(--color-text-muted)] mt-2 font-medium">Sales</p>
                </SectionReveal>
              </div>
              <SectionReveal>
                <p className="text-center mt-8">
                  <Link href="/premium-headshots#booking-heading" className="text-[var(--color-primary)] font-semibold hover:underline">
                    View full headshot gallery →
                  </Link>
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* Looking Natural — Psychology */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6 text-center">
                  How to Look Natural and Relaxed on Camera
                </h2>
                <div className="grid md:grid-cols-2 gap-8 text-[var(--color-text-body)] leading-relaxed">
                  <div className="space-y-4">
                    <p>
                      Feeling stiff in front of a camera is normal. The good news: it&apos;s almost entirely solvable with the right photographer and a few simple techniques.
                    </p>
                    <div>
                      <h3 className="font-bold text-[var(--color-text-dark)] mb-2">Before Your Session</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Practice expressions in a mirror — find your natural resting face and a genuine smile</li>
                        <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Bring 2-3 reference photos of headshots you admire</li>
                        <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Come with questions — knowing what to expect reduces anxiety</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-[var(--color-text-dark)] mb-2">During Your Session</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Take slow, deep breaths between shots — tension shows in your jaw and shoulders</li>
                        <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Shake out your hands and roll your shoulders before each set</li>
                        <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />For a genuine smile: recall a funny memory rather than saying &ldquo;cheese&rdquo;</li>
                        <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Trust your photographer&apos;s guidance — that&apos;s what we&apos;re here for</li>
                      </ul>
                    </div>
                    <p className="text-sm italic text-[var(--color-text-muted)]">
                      If you&apos;re feeling particularly stressed or unwell on the day of your session, it&apos;s okay to reschedule. Mental state shows in photos more than most people realize.
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Retouching Transparency */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6 text-center">
                  What Retouching Is Included
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-10 text-lg max-w-2xl mx-auto">
                  Every image is professionally edited. Here&apos;s exactly what that includes — and what it doesn&apos;t.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-[var(--color-text-dark)] mb-4 flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-[var(--color-primary)]" /> What We Retouch
                    </h3>
                    <ul className="space-y-2 text-[var(--color-text-body)] text-sm leading-relaxed">
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Temporary blemishes and breakouts</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Skin tone correction and color balance</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Shine and glare reduction</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Stray hairs and flyaways</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Wrinkle reduction in clothing</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Under-eye shadow softening</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-[var(--color-text-dark)] mb-4 flex items-center gap-2">
                      <XCircle size={20} className="text-red-400" /> What We Don&apos;t Alter
                    </h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed mb-4">
                      Retouching is designed to present the best version of you — not a different person. We don&apos;t alter your permanent features, bone structure, eye color, or body shape.
                    </p>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                      This is exactly why preparation matters so much. The better you arrive, the better the final images — and the less time is needed in editing.
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* What to do after */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6 text-center">
                  What to Do With Your Headshots After the Session
                </h2>
                <div className="grid md:grid-cols-2 gap-8 text-[var(--color-text-body)] leading-relaxed">
                  <div>
                    <h3 className="font-bold text-[var(--color-text-dark)] mb-3">Update LinkedIn First</h3>
                    <p className="text-sm mb-4">Profiles with professional photos get 14x more views and 36x more connection requests. LinkedIn profile photos should be a square crop, minimum 400x400 pixels. Upload the highest resolution version you have.</p>
                    <h3 className="font-bold text-[var(--color-text-dark)] mb-3">Then Update These</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Company website bio page</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Professional email signature</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Industry directories and association listings</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Google Business Profile</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Business cards (if due for a refresh)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-text-dark)] mb-3">How Often to Update</h3>
                    <p className="text-sm mb-4">
                      Update your headshot every 2-3 years, or sooner if your appearance has changed significantly — new hairstyle, significant weight change, or a major career transition. An outdated headshot creates a disconnect when people meet you in person.
                    </p>
                    <h3 className="font-bold text-[var(--color-text-dark)] mb-3">Image Sizing Guide</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />LinkedIn: 400x400px (square)</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Website bio: varies — we can provide wider crops during selection</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Email signature: 100-200px wide</li>
                      <li className="flex gap-3"><CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />Print: use the highest resolution file provided</li>
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Sample image */}
          <section className="py-8 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <div className="relative aspect-[16/7] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/kaiser-bts-headshots1.jpeg"
                    alt="Behind the scenes at a corporate headshot session with Kaiser Permanente - Rojas Photography Pleasanton CA"
                    fill
                    className="object-cover object-[center_40%]"
                    sizes="(max-width: 768px) 100vw, 900px"
                  />
                </div>
                <p className="text-center text-sm text-[var(--color-text-muted)] mt-4">
                  Behind the scenes at a corporate headshot session with Kaiser Permanente — Pleasanton, CA
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* SB7: Avoid Failure — mid-page CTA */}
          <section className="py-16 px-8 bg-[var(--color-primary-dark)] text-white">
            <div className="max-w-3xl mx-auto text-center">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Put This Into Practice?
                </h2>
                <p className="text-lg mb-8 text-white/90">
                  Book your guided headshot session in Modesto. We handle the coaching — you just show up prepared.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/premium-headshots#booking-heading"
                    className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                  >
                    Book Your Session
                  </Link>
                  <Link
                    href="/discovery-call"
                    className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                  >
                    Schedule Discovery Call
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection
            faqs={faqs}
            heading="Headshot Preparation — Frequently Asked Questions"
          />

          {/* SB7: Success */}
          <CTASection
            heading="Walk Away With a Headshot You're Proud to Use"
            subheading="500+ executives, attorneys, and business leaders across Modesto and the Central Valley have done it. Now it's your turn."
            primaryLabel="Book Your Headshot Session"
            primaryHref="/premium-headshots"
            showContactInfo={false}
          />
        </main>
      </div>
    </>
  );
}
