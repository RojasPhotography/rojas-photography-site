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
    question: 'How much should a professional headshot cost?',
    answer: 'A professional headshot session in 2026 typically ranges from $100 to $500 for an individual session, with final edited images ranging from $50 to $300 per image. At Rojas Photography, sessions are $150 with final images at $150 each. Be wary of very cheap options (under $75) — they often use minimal equipment, no coaching, and deliver inconsistent results. Be equally wary of very expensive options that charge per wardrobe change or limit coaching.',
  },
  {
    question: 'What should I look for in a headshot photographer\'s portfolio?',
    answer: 'Look for: consistent, professional-quality lighting (not flat or harsh shadows), expressions that read as genuine rather than forced or blank, a range of industries represented (not just one type of client), clean backgrounds that focus attention on the subject, and images that look current — not dated by styling or technique. If the portfolio images all look the same, the photographer may not be coaching expression and posture actively.',
  },
  {
    question: 'Should I hire a photographer who specializes in headshots or a general photographer?',
    answer: 'Headshot photography is a specialized skill — it requires knowledge of professional studio lighting, expression coaching, posing for the camera versus posing for life, and delivering images that perform on specific platforms like LinkedIn, Avvo, or Healthgrades. A general photographer who primarily does weddings or landscapes may have technical skills but lack the experience to coach professional expression and posture. Look for a photographer who explicitly focuses on professional headshots.',
  },
  {
    question: 'How important is expression coaching in a headshot session?',
    answer: 'Expression coaching is one of the most important differentiators between headshot photographers. Most people are not naturally photogenic on command — the expressions that look good in a mirror are different from the micro-expressions that read well on camera. A photographer who simply points and shoots gets whatever expression the subject defaults to under pressure. A photographer who actively coaches expression, eye contact, and posture consistently produces better results, regardless of the subject.',
  },
  {
    question: 'What questions should I ask a headshot photographer before booking?',
    answer: 'Ask: How long is the session and is there a time limit? Is expression and posture coaching included? How many final edited images are included? What is the turnaround time for delivery? Can I see examples from clients in my industry? Do you include commercial usage rights? What happens if I am not happy with the results? The answers tell you a lot about the photographer\'s process and what you can expect.',
  },
  {
    question: 'How do we know if a headshot photographer\'s style is right for me?',
    answer: 'Look at their portfolio with your specific use case in mind. If your headshot will appear on a legal directory, look for examples from attorneys. If you are in healthcare, look for medical professional examples. Review the lighting style — some photographers use very dramatic, high-contrast lighting that works for entertainment but can be too bold for corporate use. Ask if you can see examples from clients in your profession specifically.',
  },
  {
    question: 'Does location matter when choosing a headshot photographer?',
    answer: 'For most professionals, a local photographer is practical — you are not shipping a product, so proximity matters for scheduling. More importantly, a local photographer who understands your market understands the visual standards for your industry in your region. Professional norms vary — what reads as polished in a San Francisco tech startup looks different from what reads as polished in a Modesto law firm or Central Valley medical practice.',
  },
  {
    question: 'What is a reasonable turnaround time for headshot delivery?',
    answer: 'Industry standard for professional headshot delivery is 5–10 business days. Rojas Photography delivers within 48 hours. Same-day delivery is offered by some photographers but often at a premium. If a photographer quotes more than 2 weeks for a standard individual session, that is a signal about their workflow and volume — not necessarily a quality issue, but worth understanding before you book.',
  },
];

export const metadata: Metadata = {
  title: 'How to Choose a Headshot Photographer: What Actually Matters (2026)',
  description: 'What to look for in a headshot photographer — portfolio, coaching, pricing, and red flags. The honest guide to choosing well before you book.',
  robots: 'index, follow',
  alternates: { canonical: 'https://rojasphotography.net/how-to-choose-a-headshot-photographer' },
  openGraph: {
    title: 'How to Choose a Headshot Photographer: What Actually Matters (2026)',
    description: 'Portfolio, coaching, pricing, and red flags — the complete guide to choosing a headshot photographer.',
    url: 'https://rojasphotography.net/how-to-choose-a-headshot-photographer',
    type: 'article',
    images: [{ url: '/images/Hero Image1.jpg', alt: 'Professional headshots — Rojas Photography Modesto CA' }],
  },
};

const greenFlags = [
  { flag: 'Portfolio shows range across industries', why: 'Means the photographer can adapt to different professional contexts — not just one type of client.' },
  { flag: 'Expression coaching is explicitly part of the process', why: 'The difference between a good headshot and a great one is coaching. If they do not mention it, they are probably not doing it.' },
  { flag: 'Image review is included before you leave', why: 'You should not leave without knowing what you are getting. Reviewing images together ensures you are satisfied before the session ends.' },
  { flag: 'Turnaround is 48–72 hours', why: 'A fast, professional turnaround signals a well-run workflow — not a hobbyist or part-time operation.' },
  { flag: 'Pricing is transparent and published', why: 'Photographers who hide pricing until after consultation often have complicated packages or upsells. Transparent pricing shows confidence in their value.' },
  { flag: 'Commercial usage rights are included', why: 'Your headshot needs to work on LinkedIn, your firm website, printed materials, and marketing. Photographers who charge extra for commercial usage are taking something that should be standard.' },
  { flag: 'They ask about how your image will be used', why: 'A photographer who asks about your profession, your goals, and where the headshot will appear is directing the session with intention — not just taking photos.' },
];

const redFlags = [
  { flag: 'No clear examples from professionals in your industry', why: 'Portraits for artists and wedding photos do not tell you how they handle a corporate headshot for a financial advisor or attorney.' },
  { flag: 'Session "package" charges per wardrobe change', why: 'Wardrobe changes should be included. Charging per change is a price structure designed to extract money, not serve the client.' },
  { flag: 'Very low prices with vague deliverables', why: 'A $50 headshot session rarely includes proper lighting, coaching, or editing. You get what you pay for — but you also pay what you get charged for.' },
  { flag: 'Delivery time exceeds 2 weeks', why: 'More than 2 weeks for an individual session suggests an overbooked or disorganized workflow. Your professional needs do not wait 3 weeks.' },
  { flag: 'No consultation or pre-session communication', why: 'A session that starts cold — no discussion of profession, goals, or wardrobe — produces generic results. Good photographers prepare before you arrive.' },
  { flag: 'Portfolio images all look identical in expression', why: 'If every subject has the same slight-smile-direct-gaze, the photographer is not coaching — they are pointing and shooting.' },
  { flag: 'They cannot explain their lighting setup', why: 'Understanding what lighting does — why it flatters or flattens — is fundamental. A photographer who cannot explain it has not mastered it.' },
];

const questions = [
  { q: 'Is expression and posture coaching part of your process?', why: 'This separates photographers who direct from those who just capture.' },
  { q: 'Can I see examples from clients in my profession?', why: 'Portfolio proof that they know your industry\'s visual standards.' },
  { q: 'How long is the session and are wardrobe changes included?', why: 'Understand exactly what you are paying for before you book.' },
  { q: 'What is your turnaround time for delivery?', why: 'Sets expectations and signals professionalism.' },
  { q: 'Do the delivered images include commercial usage rights?', why: 'Ensures you can use the images on all platforms without additional licensing.' },
  { q: 'Do we review the images together before I leave?', why: 'Confirms you will have say in what gets edited — not just what the photographer preferred.' },
];

export default function HowToChooseHeadshotPhotographerPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'How to Prepare for Headshots', url: 'https://rojasphotography.net/how-to-prepare-for-headshots' },
        { name: 'How to Choose a Headshot Photographer', url: 'https://rojasphotography.net/how-to-choose-a-headshot-photographer' },
      ])} />
      <div className="min-h-screen bg-white">
        <HeroSection image="/images/Hero Image1.jpg" title="How to Choose a Headshot Photographer: What Actually Matters" tag="2026 Guide | Rojas Photography" objectPosition="center 30%" fullHeight={false}>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">Most photographers take photos. A headshot photographer shapes how the world sees you professionally. Here is how to tell the difference.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/premium-headshots#booking-heading" className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">Book Your Session</Link>
            <Link href="/how-to-prepare-for-headshots" className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">Full Prep Guide</Link>
          </div>
        </HeroSection>

        <main id="main-content">

          <section className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-6">The One Thing Most People Get Wrong</h2>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>Most professionals choose a headshot photographer the same way they pick a plumber — price, availability, and a few Google reviews. The result is a technically competent photo that does not actually represent them well professionally.</p>
                  <p>A headshot is not a picture of you. It is a crafted first impression — a professional signal that either earns trust before you open your mouth or costs you an opportunity before you ever get to speak. The photographer you choose determines which one it is.</p>
                  <p>The factors that matter most are not the ones most people check first.</p>
                </div>
              </SectionReveal>
            </div>
          </section>

          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-4">What to Look For: Green Flags</h2>
                <p className="text-center text-[var(--color-text-body)] mb-12 text-lg max-w-2xl mx-auto">These signals consistently identify photographers who produce results you will actually use confidently for years.</p>
              </SectionReveal>
              <div className="space-y-4">
                {greenFlags.map(item => (
                  <SectionReveal key={item.flag}>
                    <div className="flex gap-4 p-6 bg-[var(--color-bg-warm)] rounded-xl border border-gray-100">
                      <CheckCircle2 size={20} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-[var(--color-text-dark)] mb-1">{item.flag}</h3>
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
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-4">Red Flags to Watch For</h2>
                <p className="text-center text-[var(--color-text-body)] mb-12 text-lg max-w-2xl mx-auto">These are signs that a session will produce results you will not use — or will need to redo.</p>
              </SectionReveal>
              <div className="space-y-4">
                {redFlags.map(item => (
                  <SectionReveal key={item.flag}>
                    <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100">
                      <XCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-[var(--color-text-dark)] mb-1">{item.flag}</h3>
                        <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{item.why}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-4">Questions to Ask Before You Book</h2>
                <p className="text-center text-[var(--color-text-body)] mb-12 text-lg max-w-2xl mx-auto">These six questions reveal more about a photographer&apos;s process than any portfolio image.</p>
              </SectionReveal>
              <div className="space-y-4">
                {questions.map((item, i) => (
                  <SectionReveal key={item.q}>
                    <div className="flex gap-5 p-6 bg-[var(--color-bg-warm)] rounded-xl border border-gray-100">
                      <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">{i + 1}</div>
                      <div>
                        <p className="font-bold text-[var(--color-text-dark)] mb-1">&ldquo;{item.q}&rdquo;</p>
                        <p className="text-sm text-[var(--color-text-body)] leading-relaxed"><strong>Why ask:</strong> {item.why}</p>
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
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-10">How Rojas Photography Approaches This</h2>
              </SectionReveal>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-5 text-lg text-[var(--color-text-body)] leading-relaxed">
                <SectionReveal>
                  <p>Every session at Rojas Photography starts with a consultation — not a camera. Before the first frame, Alfonso asks about your profession, your goals, the platforms your headshot will appear on, and what you want to communicate. The session direction is set before you change into your first outfit.</p>
                </SectionReveal>
                <SectionReveal>
                  <p>Throughout the session, you receive real-time coaching on expression, eye contact, posture, and energy — not just direction on where to stand. Most people are surprised how different this feels from having a photo taken quickly.</p>
                </SectionReveal>
                <SectionReveal>
                  <p>Before you leave, you review your best images together and select which ones get edited. You leave knowing exactly what you are getting — not waiting anxiously for a surprise delivery a week later.</p>
                </SectionReveal>
                <SectionReveal>
                  <div className="grid sm:grid-cols-3 gap-4 pt-2">
                    {[
                      { stat: '$150', label: 'Session fee', sub: 'Unlimited wardrobe changes included' },
                      { stat: '48 hrs', label: 'Delivery time', sub: 'Edited images delivered fast' },
                      { stat: '60+', label: 'Five-star reviews', sub: 'Verified Google reviews' },
                    ].map(item => (
                      <div key={item.stat} className="bg-[var(--color-bg-warm)] rounded-xl p-5 text-center border border-gray-100">
                        <div className="text-3xl font-bold text-[var(--color-primary)] mb-1">{item.stat}</div>
                        <div className="font-semibold text-[var(--color-text-dark)] text-sm mb-1">{item.label}</div>
                        <div className="text-xs text-[var(--color-text-muted)]">{item.sub}</div>
                      </div>
                    ))}
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-10">What Happens If You Choose the Wrong Photographer</h2>
              </SectionReveal>
              <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                <SectionReveal>
                  <p>You get images you do not want to use. They sit on your phone or desktop while your outdated photo stays on LinkedIn, your firm directory, and your email signature — quietly signaling that your professional brand has not been updated in years.</p>
                </SectionReveal>
                <SectionReveal>
                  <p>Or worse: you use the images anyway, because you paid for them and feel you should. Recruiters notice. Clients notice. The photo does not look like you walked into the room. The trust gap before you speak is wider than it should be.</p>
                </SectionReveal>
                <SectionReveal>
                  <p>The cost of a professional headshot session is not significant. The cost of the wrong professional headshot — or no professional headshot at all — is measured in opportunities you cannot count.</p>
                </SectionReveal>
              </div>
            </div>
          </section>

          <FAQSection faqs={faqs} heading="Choosing a Headshot Photographer — Frequently Asked Questions" />
          <CTASection heading="Ready to Book? Alfonso Will Guide You Through the Rest." subheading="$150 session. Expression coaching. Frame review before you leave. 48-hour delivery. Modesto, CA." primaryLabel="Book Your Session" primaryHref="/premium-headshots#booking-heading" showContactInfo={false} />
        </main>
      </div>
    </>
  );
}
