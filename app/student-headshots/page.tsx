import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import { generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'How much do student headshots cost?',
    answer:
      'Rojas Photography offers a special student rate of $150 — which includes your session and one professionally edited image. That covers everything: professional studio lighting, coaching, unlimited wardrobe changes during your session, and 48-hour delivery of your edited photo. Additional images are available at the standard rate.',
  },
  {
    question: 'What should I wear for a student headshot?',
    answer:
      'Dress for the job or opportunity you are pursuing. If you are entering a corporate field, wear business professional or business casual attire. If you are applying to medical programs, a white coat or professional business attire both work well. Avoid busy patterns, logos, or overly casual clothing. Bring 2 outfits and we will help you choose what photographs best.',
  },
  {
    question: 'Do I need a professional headshot as a student?',
    answer:
      'Yes — especially if you are applying for internships, graduate programs, medical residencies (ERAS), law school, or your first professional position. Recruiters and program directors view dozens or hundreds of applications. A professional headshot immediately signals that you take your career seriously. It is one of the lowest-cost, highest-impact investments you can make before entering the workforce.',
  },
  {
    question: 'How long does a student headshot session take?',
    answer:
      'Sessions can run up to 3 hours, though we can move faster if needed. We guide you through posing and expression in real time — most students are surprised at how comfortable and natural the process feels. Your edited image is delivered within 48 hours.',
  },
  {
    question: 'Do you offer ERAS headshots for medical students?',
    answer:
      'Yes. We have photographed medical students applying through the ERAS (Electronic Residency Application Service) system. ERAS has specific photo requirements and program directors do review applicant photos. We deliver images in the correct format, sized and cropped for ERAS upload. Visit our ERAS headshots page for more details.',
  },
  {
    question: 'Where is your studio located?',
    answer:
      'Our studio is based in Modesto, CA — conveniently located for students at UC Merced, CSU Stanislaus, Modesto Junior College, and professionals throughout the Central Valley. We also serve Sacramento, Fresno, Stockton, and surrounding areas.',
  },
];

export const metadata: Metadata = {
  title: 'Student Headshots Modesto CA | Rojas Photography',
  description:
    'Professional student headshots in Modesto, CA — one guided session, one polished image. Perfect for LinkedIn, internships, ERAS & first jobs. Book today.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/student-headshots',
  },
  openGraph: {
    title: 'Student Headshots in Modesto, CA | Rojas Photography',
    description:
      'Professional headshots for college students — LinkedIn, internships, ERAS applications & first jobs. $150 includes session + one edited image. 48-hour delivery.',
    url: 'https://rojasphotography.net/student-headshots',
    type: 'website',
    images: [
      {
        url: '/images/headshots/headshot-ceo-nutrition.jpg',
        alt: 'Student headshots Modesto CA — Rojas Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Headshots in Modesto, CA | Rojas Photography',
    description:
      'Professional student headshots. $150 includes session + one edited image. 48-hour delivery. Modesto, CA.',
    images: ['/images/headshots/headshot-ceo-nutrition.jpg'],
  },
};

const useCases = [
  {
    title: 'LinkedIn Profile',
    desc: 'Recruiters search LinkedIn before they open your resume. A professional headshot dramatically increases profile views and connection acceptance — giving you an edge before the first email is ever sent.',
  },
  {
    title: 'Internship Applications',
    desc: 'Competitive internships at top companies attract hundreds of applicants. A professional photo on your LinkedIn and application materials signals maturity and intentionality that sets you apart from other students.',
  },
  {
    title: 'Graduate & Professional School',
    desc: 'MBA programs, law school, medical school, and other professional programs increasingly expect applicants who present themselves professionally across all platforms. A strong headshot supports that image.',
  },
  {
    title: 'ERAS Medical Residency',
    desc: 'ERAS applications require a professional photo, and program directors do look at them. Medical students applying for residency positions need a headshot that conveys both competence and approachability.',
  },
  {
    title: 'First Job Search',
    desc: 'Your first role after graduation is one of the most competitive hiring moments of your career. A professional headshot gives you an immediate credibility signal that most new graduates overlook.',
  },
  {
    title: 'Personal Branding',
    desc: 'Whether you are building a personal website, publishing research, speaking at events, or growing a professional audience, a quality headshot is the foundation of everything else.',
  },
];

export default function StudentHeadshotsPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Premium Headshots', url: 'https://rojasphotography.net/premium-headshots' },
        { name: 'Student Headshots', url: 'https://rojasphotography.net/student-headshots' },
      ])} />

      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/Hero Image1.jpg"
          title="Student Headshots That Launch Your Career"
          tag="Special Student Rate | Rojas Photography — Modesto, CA"
          fullHeight={false}
        >
          <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
            You have worked hard to get here. Make sure your first impression reflects that.
          </p>
          <div className="inline-block bg-white/10 border border-white/30 rounded-2xl px-8 py-4 mb-8">
            <p className="text-white text-lg font-semibold">
              Student Rate: <span className="text-3xl font-bold">$150</span>
            </p>
            <p className="text-white/80 text-sm mt-1">Session + one professionally edited image included</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/premium-headshots#booking-heading"
              className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Book Your Session
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

          {/* SB7: Problem */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6 text-center">
                  Your Career Starts Before You Graduate
                </h2>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>
                    Recruiters are looking at your LinkedIn before you apply. Program directors are reviewing your photo on your application. Your first professional connection has already formed an opinion before you shake hands.
                  </p>
                  <p>
                    Most students show up with a phone selfie, a photo from a friend&apos;s birthday party, or nothing at all. That gap — between how seriously you take your career and how your profile looks — is exactly where opportunities quietly slip away.
                  </p>
                  <p>
                    A professional headshot is not something you get after you land the job. It is part of how you land the job.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Pricing Callout */}
          <section className="py-14 px-8 bg-[var(--color-bg-warm)] border-y border-gray-100">
            <div className="max-w-3xl mx-auto text-center">
              <SectionReveal>
                <p className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-4">Student Rate</p>
                <p className="text-6xl font-bold text-[var(--color-primary)] mb-3">$150</p>
                <p className="text-xl text-[var(--color-text-dark)] font-semibold mb-6">Session + one professionally edited image</p>
                <div className="grid sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto mb-8">
                  {[
                    '60–90 minute guided session',
                    'Professional studio lighting',
                    'Real-time posing & expression coaching',
                    'Unlimited wardrobe changes',
                    'Professional editing & color correction',
                    '48-hour delivery to your inbox',
                  ].map(item => (
                    <div key={item} className="flex gap-2 text-sm text-[var(--color-text-body)]">
                      <CheckCircle2 size={15} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[var(--color-text-muted)] mb-8">Valid for currently enrolled students. Additional images available at standard rate. Bring your student ID.</p>
                <Link
                  href="/premium-headshots#booking-heading"
                  className="btn-primary px-10 py-4 text-lg font-semibold rounded-full inline-block"
                >
                  Book Your Student Session
                </Link>
              </SectionReveal>
            </div>
          </section>

          {/* Gallery */}
          <section className="py-16 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { src: '/images/headshots/headshot-ceo-nutrition.jpg', alt: 'Student professional headshot — Rojas Photography Modesto' },
                  { src: '/images/headshots/headshot-sales-manager-01.jpg', alt: 'Young professional headshot — Central Valley CA' },
                  { src: '/images/headshots/headshot-financial-advisor-01.jpg', alt: 'Student headshot for LinkedIn — Modesto CA' },
                ].map((img) => (
                  <SectionReveal key={img.src} className="relative">
                    <div className="img-hover-zoom rounded-xl overflow-hidden relative aspect-square">
                      <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover object-top" />
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  Where Your Headshot Will Work for You
                </h2>
                <p className="text-center text-[var(--color-text-body)] text-lg mb-14 max-w-2xl mx-auto">
                  One session. One image. Everywhere that matters.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-6">
                {useCases.map((item) => (
                  <SectionReveal key={item.title}>
                    <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100">
                      <CheckCircle2 size={20} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-[var(--color-text-dark)] mb-1">{item.title}</h3>
                        <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Guide Section */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <SectionReveal>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/headshots/headshot-mortgage-lender-01.jpg"
                      alt="Professional student headshot — Rojas Photography Modesto CA"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="space-y-5">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
                      We Make It Easy — Even If You&apos;ve Never Done This Before
                    </h2>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      Most students walk in feeling nervous or unsure what to do. That is completely normal — and it is exactly why coaching is built into every session. We guide you through posing, expression, and angles in real time so you never have to guess.
                    </p>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      We have photographed students at UC Merced, CSU Stanislaus, Modesto Junior College, and medical students applying through ERAS. We understand what each application or platform requires — and we make sure your image meets those needs.
                    </p>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      Your edited image is delivered within 48 hours — ready to upload to LinkedIn, ERAS, or anywhere else you need it.
                    </p>
                    <Link
                      href="/how-to-prepare-for-headshots"
                      className="inline-block text-[var(--color-primary)] font-semibold hover:underline text-sm"
                    >
                      Read our headshot preparation guide →
                    </Link>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* SB7: Avoid Failure */}
          <section className="py-16 px-8 bg-[var(--color-primary-dark)] text-white text-center">
            <div className="max-w-3xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Don&apos;t Let a Bad Photo Cost You Your First Opportunity
                </h2>
                <p className="text-lg text-white/90 mb-10 leading-relaxed">
                  You are competing against candidates with the same GPA, the same degree, and the same ambition. A professional headshot will not win the job for you — but an unprofessional one can quietly eliminate you before you ever get the chance to be heard.
                </p>
                <Link
                  href="/premium-headshots#booking-heading"
                  className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                >
                  Book Your $150 Student Session
                </Link>
              </SectionReveal>
            </div>
          </section>

          {/* Related */}
          <section className="py-12 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto text-center">
              <SectionReveal>
                <h3 className="font-bold text-[var(--color-text-dark)] mb-6 text-lg">Also Helpful</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/eras-headshots" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">
                    ERAS Headshots for Medical Students
                  </Link>
                  <Link href="/how-to-prepare-for-headshots" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">
                    How to Prepare for Your Session
                  </Link>
                  <Link href="/professional-headshot-cost" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">
                    Headshot Pricing Guide
                  </Link>
                  <Link href="/linkedin-headshots" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">
                    LinkedIn Headshots
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </section>

          <FAQSection
            faqs={faqs}
            heading="Student Headshot Questions Answered"
          />

          <CTASection
            heading="Ready to Start Your Career on the Right Foot?"
            subheading="$150 student rate — session and one edited image included. Modesto studio. 48-hour delivery."
            primaryLabel="Book Your Student Session"
            primaryHref="/premium-headshots#booking-heading"
            showContactInfo
          />

        </main>
      </div>
    </>
  );
}
