import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import { generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'What are the ERAS photo requirements?',
    answer:
      'ERAS requires a color photograph in JPEG format, at least 2.5 x 3.5 inches (passport-size ratio), with a plain white or off-white background. The photo must be professional — program directors use it when reviewing applications. Casual photos, selfies, or photos with distracting backgrounds are not appropriate. All images from Rojas Photography are delivered in the correct format, sized and ready for ERAS upload.',
  },
  {
    question: 'How much do ERAS headshots cost?',
    answer:
      'Rojas Photography offers a special student rate of $150 — which includes your session and one professionally edited, ERAS-ready image. That covers professional studio lighting, posing coaching, editing, and 48-hour delivery. No hidden fees, no minimum purchases.',
  },
  {
    question: 'Does my ERAS photo really matter?',
    answer:
      'Yes. Program directors review ERAS applications with your photo visible. While your Step scores, clinical experience, and letters of recommendation carry the most weight, your photo contributes to the first impression you make before an interview is offered. A professional, approachable headshot signals that you take the process seriously — a poor photo can subtly undermine an otherwise strong application.',
  },
  {
    question: 'When should I get my ERAS headshot taken?',
    answer:
      'ERAS applications typically open in late summer (August) with the season beginning September 1st. We recommend booking your headshot session 4–6 weeks before your target submission date to allow time for revisions if needed. Do not wait until the last minute — spots fill quickly during peak ERAS season.',
  },
  {
    question: 'What should I wear for my ERAS headshot?',
    answer:
      'Business professional is standard for ERAS photos. For most specialties, a dark suit or blazer with a professional shirt or blouse photographs best. A white coat is acceptable and appropriate for some specialties. Avoid busy patterns, bright colors, or anything that distracts from your face. Bring 2 outfit options and we will help you choose what works best on camera.',
  },
  {
    question: 'Can I use a white coat for my ERAS photo?',
    answer:
      'Yes. A white coat is an appropriate and commonly used option for ERAS photos, particularly for clinical specialties. If you choose to wear a white coat, make sure it is clean, pressed, and professional. We can photograph you in both a white coat and business attire so you have options to choose from.',
  },
  {
    question: 'How quickly will I receive my ERAS photo?',
    answer:
      'Standard delivery is 48 hours. If you have an urgent deadline, rush delivery (24-hour turnaround) is available for an additional $75. Your image will be delivered as a high-resolution JPEG, properly sized and formatted for ERAS upload.',
  },
  {
    question: 'Do you serve medical students outside of Modesto?',
    answer:
      'Yes. Our studio is based in Modesto, CA — conveniently located for students at UC Merced and throughout the Central Valley. We also serve Sacramento, Fresno, Stockton, and surrounding areas. If you are traveling for your session, we recommend combining it with other errands in the area.',
  },
];

export const metadata: Metadata = {
  title: 'ERAS Headshots for Medical Students | Rojas Photography',
  description:
    'ERAS-ready headshots for medical students applying for residency. $150 includes session & one edited image. Proper format, 48-hr delivery. Modesto, CA. Book today.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/eras-headshots',
  },
  openGraph: {
    title: 'ERAS Headshots for Medical Students | Rojas Photography',
    description:
      'Professional ERAS headshots for medical residency applications. $150 student rate — session + one edited, ERAS-ready image. 48-hour delivery. Modesto, CA.',
    url: 'https://rojasphotography.net/eras-headshots',
    type: 'website',
    images: [
      {
        url: '/images/headshots/headshot-healthcare-executive-01.jpg',
        alt: 'ERAS headshots for medical students — Rojas Photography Modesto CA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERAS Headshots for Medical Students | Rojas Photography',
    description:
      'ERAS-ready headshots for medical residency applications. $150 student rate. 48-hour delivery. Modesto, CA.',
    images: ['/images/headshots/headshot-healthcare-executive-01.jpg'],
  },
};

const erasRequirements = [
  { req: 'Color JPEG format', detail: 'ERAS requires a color photo in JPEG format — no black and white, no PNG.' },
  { req: 'Plain white or off-white background', detail: 'Busy, colored, or outdoor backgrounds are not appropriate for ERAS. Our studio backdrop meets this requirement exactly.' },
  { req: 'Passport-style dimensions', detail: 'Minimum 2.5 x 3.5 inches. We deliver your image properly sized and ready for upload — no resizing needed.' },
  { req: 'Professional appearance', detail: 'Business professional or white coat. No casual clothing, no selfies, no photos cropped from group shots.' },
  { req: 'Recent photo', detail: 'Your photo should look like you today. Program directors will recognize you at interviews — a significantly outdated photo creates an awkward first impression.' },
];

const whatIsIncluded = [
  'Professional studio with white/off-white backdrop (ERAS compliant)',
  'Full posing and expression coaching throughout',
  'Multiple outfit options photographed (white coat + business attire)',
  'Professional editing — color correction, blemish removal, shine reduction',
  'JPEG delivered at proper dimensions for ERAS upload',
  '48-hour turnaround — rush available for $75',
];

export default function ERASHeadshotsPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Student Headshots', url: 'https://rojasphotography.net/student-headshots' },
        { name: 'ERAS Headshots', url: 'https://rojasphotography.net/eras-headshots' },
      ])} />

      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/kaiser-bts-headshots1.jpeg"
          title="ERAS Headshots for Medical Residency Applications"
          tag="Student Rate | Rojas Photography — Modesto, CA"
          objectPosition="center 25%"
          fullHeight={false}
        >
          <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
            Your ERAS application photo is the first visual impression you make on program directors. Make it count.
          </p>
          <div className="inline-block bg-white/10 border border-white/30 rounded-2xl px-8 py-4 mb-8">
            <p className="text-white text-lg font-semibold">
              Student Rate: <span className="text-3xl font-bold">$150</span>
            </p>
            <p className="text-white/80 text-sm mt-1">Session + one ERAS-ready edited image included</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/premium-headshots#booking-heading"
              className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Book Your ERAS Session
            </Link>
            <a
              href="tel:2093803727"
              className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Call 209-380-3727
            </a>
          </div>
        </HeroSection>

        <main id="main-content">

          {/* What is ERAS */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6 text-center">
                  Your ERAS Photo Is Seen Before Your Scores
                </h2>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>
                    The Electronic Residency Application Service (ERAS) is the gateway to residency programs across the country. When program directors open your application, your photo appears alongside your name, medical school, and scores — before they have read a single word of your personal statement.
                  </p>
                  <p>
                    You have worked years for this moment. Step 1, Step 2, clinical rotations, letters of recommendation — every piece of your application reflects the investment you have made in your career. Your photo should do the same.
                  </p>
                  <p>
                    A professional headshot takes one session and 48 hours. It is one of the simplest things you can do to ensure that your first impression on a program director is as strong as everything else in your application.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-14 px-8 bg-[var(--color-bg-warm)] border-y border-gray-100">
            <div className="max-w-3xl mx-auto text-center">
              <SectionReveal>
                <p className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-4">Student Rate</p>
                <p className="text-6xl font-bold text-[var(--color-primary)] mb-3">$150</p>
                <p className="text-xl text-[var(--color-text-dark)] font-semibold mb-6">Session + one ERAS-ready edited image</p>
                <div className="grid sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto mb-8">
                  {whatIsIncluded.map(item => (
                    <div key={item} className="flex gap-2 text-sm text-[var(--color-text-body)]">
                      <CheckCircle2 size={15} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[var(--color-text-muted)] mb-8">Valid for currently enrolled medical students. Bring your student ID. Additional images available at standard rate.</p>
                <Link
                  href="/premium-headshots#booking-heading"
                  className="btn-primary px-10 py-4 text-lg font-semibold rounded-full inline-block"
                >
                  Book Your ERAS Session
                </Link>
              </SectionReveal>
            </div>
          </section>

          {/* ERAS Photo Requirements */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4 text-center">
                  ERAS Photo Requirements — we Handle All of This
                </h2>
                <p className="text-center text-[var(--color-text-body)] text-lg mb-14 max-w-2xl mx-auto">
                  ERAS has specific technical and professional requirements for application photos. Every image we deliver meets all of them.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {erasRequirements.map((item) => (
                  <SectionReveal key={item.req}>
                    <div className="flex gap-4 p-6 bg-[var(--color-bg-warm)] rounded-xl">
                      <CheckCircle2 size={20} className="text-[var(--color-primary)] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-[var(--color-text-dark)] mb-1">{item.req}</h3>
                        <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
              <SectionReveal>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
                  <AlertTriangle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-amber-900 text-sm leading-relaxed">
                    <strong>Do not use a selfie or phone photo for ERAS.</strong> Poor image quality, wrong aspect ratio, casual backgrounds, and unflattering lighting are common mistakes that undermine otherwise strong applications. Program directors review hundreds of applicants — a professional photo signals that you take this process as seriously as they do.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Gallery + Guide */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <SectionReveal>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { src: '/images/headshots/headshot-healthcare-executive-01.jpg', alt: 'ERAS headshot for medical student — Rojas Photography' },
                      { src: '/images/headshots/headshot-kaiser-medical-01.jpg', alt: 'Medical professional headshot — Modesto CA' },
                      { src: '/images/headshots/headshot-kaiser-medical-02.jpg', alt: 'ERAS application photo — Rojas Photography Central Valley' },
                      { src: '/images/headshots/headshot-kaiser-medical-03.jpg', alt: 'Medical student headshot — Rojas Photography' },
                    ].map((img) => (
                      <div key={img.src} className="img-hover-zoom rounded-xl overflow-hidden aspect-square relative">
                        <Image src={img.src} alt={img.alt} fill sizes="25vw" className="object-cover object-top" />
                      </div>
                    ))}
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="space-y-5">
                    <h2 className="text-3xl text-[var(--color-text-dark)]">
                      We Have Photographed Medical Students. We Know What ERAS Needs.
                    </h2>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      We have worked with medical students applying through ERAS and understand the specific requirements for application photos — the background, the format, the professional standard programs expect.
                    </p>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      We also understand that match season is stressful. Our goal is to make this one part of the process completely effortless. Book your session, arrive, and leave knowing you have an image that represents you at your best — delivered within 48 hours and ready to upload.
                    </p>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      We photograph both white coat and business professional options in every session so you have the flexibility to choose what feels right for your target specialty.
                    </p>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* When to Book */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-12 text-center">
                  When to Book Your ERAS Headshot
                </h2>
              </SectionReveal>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    timing: 'Early (Recommended)',
                    window: 'June – July',
                    desc: 'Book before ERAS season begins. You have time to review your images, request any revisions, and have your photo ready before applications open in August.',
                  },
                  {
                    timing: 'On Time',
                    window: 'August',
                    desc: 'Applications open in late August. Booking in August means your image is ready before submission deadlines. Our 48-hour delivery makes this straightforward.',
                  },
                  {
                    timing: 'Cutting It Close',
                    window: 'September+',
                    desc: 'After September 1st, many programs begin reviewing applications. Rush delivery ($75) is available for 24-hour turnaround if you are working against a deadline.',
                  },
                ].map((item) => (
                  <SectionReveal key={item.timing}>
                    <div className="bg-[var(--color-bg-warm)] rounded-xl p-7 border border-gray-100 h-full">
                      <p className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1">{item.timing}</p>
                      <p className="text-2xl font-bold text-[var(--color-text-dark)] mb-3">{item.window}</p>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* SB7: Avoid Failure */}
          <section className="py-16 px-8 bg-[var(--color-primary-dark)] text-white text-center">
            <div className="max-w-3xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl mb-4">
                  You Have Earned This Application. Represent It Well.
                </h2>
                <p className="text-lg text-white/90 mb-10 leading-relaxed">
                  Match season is one of the most important and competitive moments of your medical career. Every part of your application should reflect the work you have put in. Your photo is one of the easiest parts to get right — and one of the most overlooked.
                </p>
                <Link
                  href="/premium-headshots#booking-heading"
                  className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                >
                  Book Your ERAS Session — $150
                </Link>
              </SectionReveal>
            </div>
          </section>

          {/* Related */}
          <section className="py-12 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto text-center">
              <SectionReveal>
                <h3 className="text-[var(--color-text-dark)] mb-6 text-lg">Also Helpful</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/student-headshots" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">
                    Student Headshots
                  </Link>
                  <Link href="/how-to-prepare-for-headshots" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">
                    How to Prepare for Your Session
                  </Link>
                  <Link href="/professional-headshot-cost" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">
                    Headshot Pricing Guide
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </section>

          <FAQSection
            faqs={faqs}
            heading="ERAS Headshot Questions Answered"
          />

          <CTASection
            heading="Get Your ERAS Photo Done Right"
            subheading="$150 student rate — session and one ERAS-ready edited image included. 48-hour delivery. Modesto studio."
            primaryLabel="Book Your ERAS Session"
            primaryHref="/premium-headshots#booking-heading"
            showContactInfo
          />

        </main>
      </div>
    </>
  );
}
