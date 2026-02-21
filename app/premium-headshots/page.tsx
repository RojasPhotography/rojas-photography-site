import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import BookingScheduler from '../components/BookingScheduler';
import DefinitionBox from '../components/DefinitionBox';
import { generateServiceSchema, generateFAQSchema } from '../lib/schema';
import { serviceDefinitions, statistics } from '../lib/definitions';

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

  const faqs = [
    {
      question: 'How much do professional headshots cost in Modesto?',
      answer:
        'Rojas Photography professional headshot sessions are priced at $150 for the session fee, plus $150 per image you select. This transparent, flexible pricing means you only pay for the photos you love with no package minimums or surprise costs. Most clients select 3-5 images from their session, resulting in a total investment of $600–$1,150. All images are professionally edited and delivered within 48 hours via SpotMyPhotos gallery, ready for LinkedIn, your website, and business marketing materials.',
    },
    {
      question: 'What should I wear for corporate headshot photos?',
      answer:
        'We recommend solid colors and professional business attire that represents your industry. Avoid busy patterns and logos. We offer free wardrobe consultation before your session to ensure you select looks that represent your professional brand. Feel free to bring multiple outfits—our sessions include unlimited wardrobe changes. Popular choices include dark blazer with light shirt, professional dress, or tailored suit. Our photographers will guide you on which options photograph best and match your professional brand.',
    },
    {
      question: 'How long does a professional headshot session take?',
      answer:
        'Our guided sessions include unlimited coaching time. Most sessions take 30-45 minutes, though you can take as long as you need. During your session, we guide you through posing, expression, and styling in real-time. You\'ll see your photos as we shoot and provide feedback, and we review images together before you leave to ensure you feel confident in the results. Your professionally edited images are delivered within 48 hours. For time-sensitive needs, we offer rush delivery (additional $75 fee) with 24-hour turnaround.',
    },
    {
      question: 'Do you provide makeup and styling for headshots?',
      answer:
        'We don\'t provide makeup application in-studio, but we do offer professional wardrobe consultation to help you select looks that represent your brand. We can recommend trusted local makeup artists if needed. Many clients schedule makeup appointments before their session for a polished, camera-ready look. Styling consultation is included with every session at no additional cost, and our photographers provide real-time posing direction throughout.',
    },
    {
      question: 'Can I use these headshots for LinkedIn and my website?',
      answer:
        'Absolutely! Your headshots are fully licensed for professional use on LinkedIn, your website, company directory, and all business marketing materials. You own the images you purchase and can use them however you need for your professional brand. Typical uses include: LinkedIn profile photo (1-2 images), company website/bio page (1-2 images), professional email signature, industry directory, and printed marketing materials. All delivered images include full usage rights with no additional fees.',
    },
    {
      question: 'Why is professional photography important for my career?',
      answer:
        'Professional headshots are often the first impression potential clients, employers, or business partners have of you. A high-quality, authentic headshot builds credibility, conveys confidence, and differentiates you from competitors with amateur photos. Studies show that LinkedIn profiles with professional photos receive 21x more profile views and 9x more connection requests. Whether you\'re a CEO, entrepreneur, attorney, or consultant, a professional headshot is an essential investment in your professional brand and career growth.',
    },
    {
      question: 'What if I\'m not photogenic or camera shy?',
      answer:
        'This is extremely common—most of our clients feel the same way! Our approach is different: we provide real-time coaching throughout your session to guide your posing, expression, and confidence. We see our role as helping you present your authentic professional self, not creating an artificial image. Our photographers have experience working with professionals who are camera-shy, and we create a comfortable, supportive environment. Most clients are surprised by how natural and professional they look in their final images.',
    },
    {
      question: 'Can we rush the turnaround if we need photos quickly?',
      answer:
        'Yes! While standard turnaround is 48 hours, we offer rush delivery for an additional $75 fee with 24-hour turnaround. This means you can schedule a session in the morning and have professionally edited images by the next morning. This is perfect for time-sensitive needs like last-minute LinkedIn updates, company announcements, or sudden website needs. Contact us about same-day or next-day availability.',
    },
    {
      question: 'Do you offer virtual consultations before the session?',
      answer:
        'Absolutely! We offer free virtual consultations via Zoom or phone before your session. During the consultation, we discuss your professional goals, wardrobe options, the images you need, and any concerns you have. This pre-session planning ensures you feel confident and prepared when you arrive. We can also provide wardrobe recommendations, discuss styling choices, and answer any questions you have about the process.',
    },
  ];

  return (
    <>
      <SchemaScript schema={generateServiceSchema({
        name: 'Professional In-Studio Headshots',
        description: 'Guided, professional headshot sessions in our Modesto studio with real-time coaching and image selection. $150 session + $150/image.',
        url: 'https://rojasphotography.net/premium-headshots',
        image: '/images/Gina-0026 (1).jpg',
      })} />
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <div className="min-h-screen bg-white">
      <HeroSection
        title="In-Studio Corporate Headshots"
        subtitle="Guided, professional headshot sessions in our Modesto studio with real-time coaching and image selection"
        gradient
      />

      {/* Definition Box */}
      <DefinitionBox
        term={serviceDefinitions.premiumHeadshots.term}
        definition={serviceDefinitions.premiumHeadshots.definition}
      >
        <p className="text-[var(--color-text-body)] mt-4">
          {serviceDefinitions.premiumHeadshots.context}
        </p>
      </DefinitionBox>

      <main id="main-content">
        {/* CTA Buttons */}
        <section className="py-12 px-8 bg-white">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#booking-heading" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
              Book Now
            </a>
            <a href="/discovery-call" className="btn-outline px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
              Schedule Discovery Call
            </a>
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
              {/* Row 1: Kaiser Medical + Healthcare Executive */}
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-kaiser-medical-02.jpg" alt="Kaiser healthcare professional headshot - medical photography Central Valley" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-kaiser-medical-01.jpg" alt="Kaiser medical professional headshot - healthcare photography Modesto" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-healthcare-executive-01.jpg" alt="Healthcare executive headshot - Modesto professional photographer" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              {/* Row 2: Kaiser Medical continues + Attorneys begin */}
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-kaiser-medical-03.jpg" alt="Kaiser medical staff headshot - professional healthcare photography Modesto" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-attorney-01.jpg" alt="Professional attorney headshot - Modesto corporate photographer" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-attorney-02.jpg" alt="Professional attorney headshot - Modesto law firm photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              {/* Row 3: Attorneys continued - White background accent */}
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-attorney-04.jpg" alt="Professional attorney corporate headshot - Modesto CA" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-attorney-03.jpg" alt="Professional headshot for attorney - Modesto legal photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-attorney-familylaw-01.jpg" alt="Family law attorney headshot - Modesto professional photographer" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              {/* Row 4: Financial & Real Estate */}
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-financial-advisor-01.jpg" alt="Financial advisor professional headshot - Central Valley" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-cpa-finance-01.jpg" alt="CPA finance professional headshot - Modesto accountant photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-realestate-agent.jpg" alt="Real estate agent professional headshot - Modesto" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              {/* Row 5: Mortgage & Sales */}
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-mortgage-lender-01.jpg" alt="Mortgage lender professional headshot - Central Valley" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-mortgage-lender-02.jpg" alt="Mortgage lender headshot - Central Valley professional photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-sales-manager-01.jpg" alt="Sales manager professional headshot - Modesto corporate photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              {/* Row 6: Sales & Corporate Executives */}
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-sales-manager-02.jpg" alt="Sales professional headshot - Modesto business photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-executive.jpg" alt="Corporate executive headshot - professional photography Modesto" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-comcast-exectutive.jpg" alt="Corporate executive headshot - Modesto business professional photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-finance-cpa.jpg" alt="Finance CPA professional headshot - Modesto accounting photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-executive-ceo.jpg" alt="CEO executive headshot - Modesto corporate leadership photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-executive-cpa.jpg" alt="CPA executive headshot - Modesto financial professional photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-finance-ceo.jpg" alt="Finance CEO headshot - Modesto financial executive photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-ceo-nutrition-01.jpg" alt="Nutrition CEO headshot - Modesto healthcare executive photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                <Image src="/images/headshots/headshot-ceo-nutrition.jpg" alt="Nutrition business owner headshot - Modesto wellness professional photography" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </SectionReveal>
            </div>
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
              <div className="bg-white p-8 rounded-xl border border-gray-100 max-w-sm mx-auto text-center shadow-sm">
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Pricing</h3>
                <p className="text-[var(--color-text-body)] mb-2">Session Fee: <span className="text-[var(--color-primary)] font-bold text-lg">$150</span></p>
                <p className="text-[var(--color-text-body)]">Per Image: <span className="text-[var(--color-primary)] font-bold text-lg">$150 each</span></p>
                <p className="text-[var(--color-text-muted)] text-sm mt-4">Only pay for the images you love. No package minimums, no surprises.</p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">Our Process</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Pre-Session Consultation', desc: "We discuss your professional goals, the images you need, and your vision. If you'd like wardrobe guidance, we'll help you prepare so you feel confident and ready." },
                { step: '02', title: 'Guided Coaching Session', desc: "During your session, we guide every detail—posing, expression, angles, and confidence. You're not standing alone in front of a camera; we're coaching you the entire way." },
                { step: '03', title: 'Selection & Delivery', desc: 'We review your session photos together and help you select the perfect shots. Your images are professionally edited and delivered within 48 hours.' },
              ].map((item) => (
                <SectionReveal key={item.step}>
                  <div>
                    <span className="text-5xl font-bold text-[var(--color-primary-light)]">{item.step}</span>
                    <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-4 mb-3">{item.title}</h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-6">Who This Service Is For</h2>
              <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-4">
                Premium Corporate Headshots are perfect for business professionals who want guidance throughout their session. Whether you&apos;re a CEO, attorney, consultant, realtor, or entrepreneur, this service is designed for people who need direction and want to walk away confident in their images.
              </p>
              <p className="text-[var(--color-text-body)] leading-relaxed">
                If you&apos;re unsure about posing, angles, or which looks best for your brand—we&apos;ve got you covered. Our coaching approach removes the stress and ensures you get professional portraits you&apos;ll love.
              </p>
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
          faqs={[
            {
              question: 'How much do professional headshots cost in Modesto?',
              answer:
                'Our professional headshot sessions are $150, plus $150 for each image you purchase. There are no package minimums—you only pay for the images you love. This flexible pricing model lets you select exactly the photos you need without wasting money on images you won\'t use.',
            },
            {
              question: 'What should I wear for corporate headshot photos?',
              answer:
                'We recommend solid colors and professional business attire that represents your industry. Avoid busy patterns and busy logos. We offer free wardrobe consultation before your session to ensure you select looks that represent your professional brand. Feel free to bring multiple outfits—our sessions include unlimited wardrobe changes.',
            },
            {
              question: 'How long does a professional headshot session take?',
              answer:
                'Our guided sessions include unlimited coaching time. Most sessions take 30-45 minutes, though you can take as long as you need. We guide you through posing, expression, and styling in real-time, and we review images together before you leave. Your professionally edited images are delivered within 48 hours.',
            },
            {
              question: 'Do you provide makeup and styling for headshots?',
              answer:
                'We don\'t provide makeup application in-studio, but we do offer professional wardrobe consultation to help you select looks that represent your brand. We can recommend trusted local makeup artists if needed. Many clients schedule makeup appointments before their session for a polished, camera-ready look.',
            },
            {
              question: 'Can I use these headshots for LinkedIn and my website?',
              answer:
                'Absolutely! Your headshots are fully licensed for professional use on LinkedIn, your website, company directory, and all business marketing materials. You own the images you purchase and can use them however you need for your professional brand.',
            },
          ]}
          heading="Professional Headshot Questions"
        />

        <CTASection
          heading="Want to Discuss Your Project First?"
          subheading="Schedule a free discovery call to discuss your professional photography needs."
          showContactInfo={false}
        />
      </main>
      </div>
    </>
  );
}
