import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import BookingScheduler from '../components/BookingScheduler';
import DefinitionBox from '../components/DefinitionBox';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';
import { serviceDefinitions, statistics } from '../lib/definitions';

const faqs = [
  {
    question: 'How much do professional headshots cost in Modesto?',
    answer:
      'Rojas Photography professional headshot sessions are priced at $150 for the session fee, plus $150 per image you select. This transparent, flexible pricing means you only pay for the photos you love with no package minimums or surprise costs. All images are professionally edited and delivered within 48 hours via online private gallery, ready for LinkedIn, your website, and business marketing materials.',
  },
  {
    question: 'What should I wear for corporate headshot photos?',
    answer:
      'We recommend solid colors and professional business attire that represents your industry. Avoid busy patterns and logos. We offer free wardrobe consultation before your session to ensure you select looks that represent your professional brand. Feel free to bring multiple outfits—our sessions include unlimited wardrobe changes. Popular choices include dark blazer with light shirt, professional dress, or tailored suit.',
  },
  {
    question: 'How long does a professional headshot session take?',
    answer:
      'Our guided sessions include unlimited coaching time. Most sessions run 60-90 minutes, though we can move faster if you need to get in and out quickly. During your session, we guide you through posing, expression, and styling in real-time. Your professionally edited images are delivered within 48 hours. For time-sensitive needs, we offer rush delivery (additional $75 fee) with 24-hour turnaround.',
  },
  {
    question: 'Do you provide makeup and styling for headshots?',
    answer:
      'We don\'t provide makeup application in-studio, but we do offer professional wardrobe consultation to help you select looks that represent your brand. We can recommend trusted local makeup artists if needed. Many clients schedule makeup appointments before their session for a polished, camera-ready look. Styling consultation is included with every session at no additional cost.',
  },
  {
    question: 'Can I use these headshots for LinkedIn and my website?',
    answer:
      'Absolutely! Your headshots are fully licensed for professional use on LinkedIn, your website, company directory, and all business marketing materials. You own the images you purchase and can use them however you need for your professional brand. Typical uses include: LinkedIn profile photo, company website/bio page, professional email signature, industry directory, and printed marketing materials.',
  },
];

export const metadata: Metadata = {
  title: 'Professional Headshots Modesto CA | $150 Session | Rojas Photography',
  description:
    'Premium corporate headshots in Modesto. Guided studio sessions with real-time coaching. $150 session + $150/image. Trusted by 500+ executives. Book today.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/premium-headshots',
  },
  openGraph: {
    title: 'Professional Corporate Headshots in Modesto | Rojas Photography',
    description:
      'Premium corporate headshots for executives and business professionals in Modesto and Central Valley. Guided sessions with professional coaching.',
    url: 'https://rojasphotography.net/premium-headshots',
    type: 'website',
    images: [
      {
        url: '/images/Gina-0026 (1).jpg',
        alt: 'Professional corporate headshot - Modesto photographer',
      },
    ],
  },
};

export default function PremiumHeadshotsPage() {
  return (
    <>
      <SchemaScript schema={generateServiceSchema({
        name: 'Professional In-Studio Headshots',
        description: 'Guided, professional headshot sessions in our Modesto studio with real-time coaching and image selection. $150 session + $150/image.',
        url: 'https://rojasphotography.net/premium-headshots',
        image: 'https://rojasphotography.net/images/Gina-0026 (1).jpg',
      })} />
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Premium Headshots', url: 'https://rojasphotography.net/premium-headshots' },
      ])} />
      <div className="min-h-screen bg-white">
      {/* Hero Section - SB7: A Character */}
      <HeroSection
        image="/images/headshots/headshot-ceo-nutrition.jpg"
        title="Professional Headshots Shouldn't Feel Awkward."
        tag="Premium Corporate Headshots | Modesto, CA"
        objectPosition="70% 33%"
        fullHeight
      >
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Most professionals feel camera-shy or don't know how to pose. Our guided headshot sessions in Modesto include real-time coaching so you feel confident, look natural, and walk away with a headshot that builds credibility.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="#booking-heading"
            className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
          >
            Book Your Session
          </a>
          <Link
            href="/discovery-call"
            className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
          >
            Schedule Discovery Call
          </Link>
        </div>
      </HeroSection>

      {/* Problem Section - SB7: Has a Problem */}
      <section className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-8">
              Generic Corporate Headshots Hurt Your Credibility
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-[var(--color-text-body)] leading-relaxed">
              <div>
                <p className="mb-4">
                  You've seen them: stiff, awkward corporate headshots that scream "I was uncomfortable." Generic photographer drops you in front of a camera, snaps a few shots, and sends you images that look forced and inauthentic.
                </p>
                <p className="mb-4">
                  You don't know how to pose. You feel camera-shy. The photographer doesn't coach you—they just tell you to "look natural" and expect you to figure it out.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  The result? A headshot that doesn't reflect your expertise or build trust. On LinkedIn, your profile gets skipped. On your website, you blend in with everyone else.
                </p>
                <p className="mb-4 font-semibold text-[var(--color-text-dark)]">
                  Your professional image deserves better than a stiff, uncomfortable photo session that produces mediocre results.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Guide Section - SB7: Meets a Guide */}
      <section className="py-16 md:py-20 px-8 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
                Real-Time Coaching for Camera-Shy Professionals
              </h2>
              <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                <p className="font-semibold text-[var(--color-text-dark)]">
                  Here's what makes us different: We don't just take your photo—we coach you through the entire session.
                </p>
                <p>
                  Most of our clients feel the same way you do: awkward in front of the camera, unsure about posing, worried they're "not photogenic." We get it. That's exactly why our approach is built around real-time guidance.
                </p>
                <p>
                  We've photographed 500+ professionals across Modesto and the Central Valley—CEOs, attorneys, realtors, consultants, healthcare executives. With 15+ years of corporate leadership experience, we understand what a professional headshot needs to communicate: confidence, authenticity, and credibility.
                </p>
                <p>
                  You're not alone in front of a camera. We guide your posing, adjust your angles, coach your expression, and review images together in real-time so you see exactly what's working.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <main id="main-content">
        {/* Plan Section - SB7: Who Gives Them a Plan */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-5xl font-bold text-center text-[var(--color-text-dark)] mb-16">
                Our Guided Headshot Process
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <SectionReveal>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">
                    Pre-Session Consultation
                  </h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    We discuss your professional goals, the images you need, and offer wardrobe guidance. If you're camera-shy or uncertain, we'll walk you through what to expect so you arrive confident and prepared.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">
                    Coached Studio Session
                  </h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    You're not on your own. We coach you through posing, expression, angles, and confidence. See your photos in real-time, provide feedback, and adjust on the fly. Unlimited time, unlimited wardrobe changes.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">
                    Selection & Fast Delivery
                  </h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    We review your session together and help you select your best images. Only pay for the photos you love. Professionally edited images delivered within 48 hours, ready for LinkedIn and your website.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Urgent CTA Before Gallery - Early Conversion Opportunity */}
        <section className="py-12 px-8 bg-[var(--color-primary-dark)] text-center">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed">
                Don't settle for a stiff, awkward headshot that hurts your credibility.
              </p>
              <a
                href="#booking-heading"
                className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
              >
                Book Your Session
              </a>
            </SectionReveal>
          </div>
        </section>

        {/* Headshot Gallery */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--color-text-dark)]">
                Our Premium Corporate Headshots
              </h2>
              <p className="text-center text-[var(--color-text-body)] mb-12 max-w-2xl mx-auto">
                Professional headshots for attorneys, executives, financial advisors, healthcare professionals, and business leaders across Modesto and the Central Valley.
              </p>
            </SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Row 1: CEO & Nutrition Executives */}
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-ceo-nutrition.jpg" alt="Nutrition business owner headshot - Modesto wellness professional photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-[85%_50%]" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-attorney-03.jpg" alt="Professional headshot for attorney - Modesto legal photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-ceo-nutrition-01.jpg" alt="Nutrition CEO headshot - Modesto healthcare executive photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover scale-110" />
              </SectionReveal>
              {/* Row 2: Finance CPA */}
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-finance-cpa.jpg" alt="Finance CPA professional headshot - Modesto accounting photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-[75%_50%]" />
              </SectionReveal>
              {/* Row 2: Comcast Executive */}
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-comcast-executive.jpg" alt="Comcast executive headshot - Modesto corporate leadership photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-[60%_50%] scale-110" />
              </SectionReveal>
              {/* Row 2: Attorney - White background accent */}
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-attorney-04.jpg" alt="Professional attorney corporate headshot - Modesto CA" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover scale-110" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-finance-ceo.jpg" alt="Finance CEO headshot - Modesto financial executive photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-attorney-familylaw-01.jpg" alt="Family law attorney headshot - Modesto professional photographer" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-[40%_50%]" />
              </SectionReveal>
              {/* Row 4: Mortgage & Sales */}
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-mortgage-lender-02.jpg" alt="Mortgage lender headshot - Central Valley professional photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-sales-manager-01.jpg" alt="Sales manager professional headshot - Modesto corporate photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              {/* Row 5: Corporate Executives */}
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-executive.jpg" alt="Corporate executive headshot - professional photography Modesto" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-healthcare-executive-01.jpg" alt="Healthcare executive headshot - Modesto professional photographer" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-[30%_50%]" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-executive-ceo.jpg" alt="CEO executive headshot - Modesto corporate leadership photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-executive-cpa.jpg" alt="CPA executive headshot - Modesto financial professional photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-[65%_50%]" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-kaiser-medical-03.jpg" alt="Kaiser medical staff headshot - professional healthcare photography Modesto" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-3xl mx-auto text-center">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-[var(--color-text-body)] text-lg mb-10">
                No packages, no minimums. You only pay for the images you love.
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-6">
                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                  <p className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Session Fee</p>
                  <p className="text-5xl font-bold text-[var(--color-primary)] mb-3">$150</p>
                  <p className="text-[var(--color-text-body)] text-sm">Unlimited time, real-time coaching &amp; wardrobe changes</p>
                </div>
                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                  <p className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Per Image</p>
                  <p className="text-5xl font-bold text-[var(--color-primary)] mb-3">$150</p>
                  <p className="text-[var(--color-text-body)] text-sm">Professionally edited &amp; delivered within 48 hours</p>
                </div>
              </div>
              <p className="text-[var(--color-text-muted)] text-sm mb-10">Rush delivery available — 24-hour turnaround for an additional $75</p>
              <a
                href="#booking-heading"
                className="btn-primary px-10 py-4 text-lg font-semibold rounded-full inline-block"
              >
                Book Your Session
              </a>
            </SectionReveal>
          </div>
        </section>

        {/* Stakes Section - SB7: Helps Avoid Failure */}
        <section className="py-16 px-8 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
                A Bad Headshot Costs You Opportunities
              </h2>
              <div className="text-lg text-[var(--color-text-body)] leading-relaxed space-y-4">
                <p>
                  Your headshot is often the first impression potential clients, employers, or partners have of you. A stiff, awkward, or unprofessional photo sends the wrong message—no matter how qualified you are.
                </p>
                <p>
                  Studies show LinkedIn profiles with professional photos get 21x more views and 9x more connection requests. Without a strong headshot, you're invisible. With a bad one, you hurt your credibility.
                </p>
                <p>
                  Meanwhile, your competitors with confident, authentic headshots are winning the business you deserve.
                </p>
                <p className="font-semibold text-[var(--color-text-dark)]">
                  You've worked too hard building your expertise to let an awkward photo undermine it.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* CTA After Stakes */}
        <section className="py-16 px-8 bg-[var(--color-primary-dark)] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for a Headshot That Builds Credibility?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Schedule your guided session today. No awkwardness, no guesswork—just real-time coaching and a headshot you'll be proud to use.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#booking-heading"
                  className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                >
                  Book Your Session
                </a>
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

        {/* What's Included */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-16 text-center">
                What&apos;s Included
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-10 mb-16">
              {[
                { title: 'Guided Session - Unlimited Time', desc: 'Work with our professional photographers throughout your entire session. We guide you through posing, expression, and confidence so you look and feel your absolute best.' },
                { title: 'Unlimited Wardrobe Changes', desc: "Bring multiple outfits and change as many times as you'd like. We'll help you select the best looks for your professional brand." },
                { title: 'Real-Time Image Review', desc: "See your photos as we shoot them. We review images together in real-time and adjust on the fly so you know exactly what's working." },
                { title: 'Guided Image Selection', desc: 'We sit down together and help you select your best images. You choose only the photos you love—no filler, no pressure.' },
                { title: 'Wardrobe Consultation', desc: "Not sure what to wear? We'll consult with you beforehand on colors, styles, and looks that best represent your professional brand." },
                { title: 'Professional Editing & Fast Delivery', desc: 'Your selected images are professionally edited and delivered to your inbox within 48 hours, ready for LinkedIn, your website, and marketing materials.' },
              ].map((item) => (
                <SectionReveal key={item.title}>
                  <div className="flex gap-4">
                    <CheckCircle2 size={22} className="text-[var(--color-primary)] flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-[var(--color-text-dark)] mb-2">{item.title}</h3>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal>
              <div className="text-center mt-4">
                <a
                  href="#booking-heading"
                  className="btn-primary px-8 py-3 text-base font-semibold rounded-full inline-block"
                >
                  Book Your Session
                </a>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">What Clients Say</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-6">
              <SectionReveal>
                <TestimonialCard name="Catherine Luke" role="CEO" quote="Professional, efficient, and high-quality. Within days, our new employee had a corporate headshot ready for our website and LinkedIn. Highly recommended for any business." />
              </SectionReveal>
              <SectionReveal>
                <TestimonialCard name="Joyce Ulrich" role="Entrepreneur, Modesto" quote="Alfonso and Niomi create a comfortable environment that puts you at ease immediately. The professional headshots turned out beautifully—exactly what I needed for my business." />
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Booking Section - 17hats Calendar */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]" aria-labelledby="booking-heading">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 id="booking-heading" className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--color-text-dark)]">Schedule Your Session</h2>
              <p className="text-lg text-center text-[var(--color-text-body)] mb-16">Select your preferred date and time below to book your premium headshot session.</p>
            </SectionReveal>

            <div className="flex justify-center">
              <BookingScheduler height={750} />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          faqs={faqs}
          heading="Professional Headshot Questions"
        />

        <CTASection
          heading="Want to Discuss Your Project First?"
          subheading="Schedule a free discovery call to discuss your professional photography needs."
          primaryLabel="Book Your Discovery Call"
          showContactInfo={false}
        />
      </main>
      </div>
    </>
  );
}
