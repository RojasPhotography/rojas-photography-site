import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import { generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'Should I wear a white coat for my healthcare headshot?',
    answer:
      'A white coat is appropriate and commonly used for clinical specialties — it immediately signals your expertise and works well across hospital directories, ZocDoc, and Healthgrades profiles. However, if your role is more administrative, executive, or in private practice, business professional attire may communicate your position more accurately. Our recommendation: bring both. We will photograph you in each and you choose — or select one for clinical directories and one for LinkedIn.',
  },
  {
    question: 'What should healthcare professionals wear for a headshot?',
    answer:
      'For clinical roles, a clean, pressed white coat over a professional shirt or blouse is the standard. For administrative or executive roles, business professional attire — suit, blazer, or equivalent — photographs best. Avoid scrubs for formal directories and public-facing profiles, as scrubs can read as too casual in a first-impression context. Bring 2–3 options and we will help you choose what fits your role and your patient audience.',
  },
  {
    question: 'Can you come to our hospital or clinic for headshots?',
    answer:
      'Yes. We bring our full studio setup — professional lighting, backdrops, and equipment — directly to your hospital, clinic, or medical practice. On-site sessions are ideal for department updates, new staff onboarding, or ensuring consistent imagery across your entire medical team. Visit our on-site photography page for details on team packages and scheduling.',
  },
  {
    question: 'How much do healthcare professional headshots cost?',
    answer:
      'Healthcare headshot sessions at Rojas Photography are $150, with final edited images at $150 each. Most healthcare professionals select 1–2 images — one for their hospital or practice directory and one for LinkedIn or their professional bio. There is no minimum purchase requirement. You only pay for the images you love.',
  },
  {
    question: 'Do you photograph ERAS medical residency headshots?',
    answer:
      'Yes. We have extensive experience photographing ERAS headshots for medical students applying for residency. ERAS has specific photo requirements — white or off-white background, professional attire, correct sizing — and we deliver images that meet all of them, ready for direct upload. Visit our ERAS headshots page for details on the student rate and what is included.',
  },
  {
    question: 'How often should healthcare professionals update their headshots?',
    answer:
      'Annually or every other year. Your role, specialty, appearance, and professional context evolve — and your photo should reflect the professional you are today, not three years ago. If you have changed positions, joined a new practice, or simply look meaningfully different than your current photo, it is time to update. Patients who research you before their first appointment should see the person who will actually walk through the door.',
  },
  {
    question: 'What background is best for a physician headshot?',
    answer:
      'A clean, neutral background — white or light gray — works best across all medical directories and professional platforms. It keeps the focus entirely on you and photographs consistently whether your image appears large on a practice website or small in a hospital directory thumbnail. We avoid busy clinical environments, office backgrounds, or anything that competes with your professional presence.',
  },
  {
    question: 'Can I get headshots for my entire medical practice or hospital department?',
    answer:
      'Yes. We regularly photograph full medical teams — from small private practices to large hospital departments. Our on-site studio setup ensures every team member is photographed in consistent lighting against a consistent background, so your team directory looks cohesive and professional. Contact us for team and department pricing.',
  },
];

export const metadata: Metadata = {
  title: 'Healthcare Professional Headshots | Doctors, Nurses & Medical Staff | Rojas Photography',
  description:
    'Professional headshots for doctors, nurses, and medical staff in Modesto & Central Valley. Patients judge before they call. 48-hr delivery.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/healthcare-headshots',
  },
  openGraph: {
    title: 'Healthcare Professional Headshots | Doctors, Nurses & Medical Staff | Rojas Photography',
    description:
      'Professional headshots for doctors, nurses, and medical staff in Modesto & Central Valley. Patients judge before they call. 48-hr delivery.',
    url: 'https://rojasphotography.net/healthcare-headshots',
    type: 'article',
    images: [
      {
        url: '/images/Hero Image1.jpg',
        alt: 'Professional healthcare headshots — Rojas Photography Modesto CA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Professional Headshots | Doctors, Nurses & Medical Staff | Rojas Photography',
    description:
      'Professional headshots for doctors, nurses, and medical staff in Modesto & Central Valley. 48-hour delivery.',
    images: ['/images/headshots/headshot-healthcare-executive-01.jpg'],
  },
};

const whatWeCommunicate = [
  {
    quality: 'Competence',
    desc: 'Patients need to know you are skilled at what you do. Your headshot should project the clinical authority and professional mastery that reassures them they are in capable hands.',
  },
  {
    quality: 'Warmth',
    desc: 'Healthcare is deeply personal. A cold, clinical expression in your photo — even with impeccable credentials — can make a patient feel like a case file rather than a person. Warmth is not optional; it is essential.',
  },
  {
    quality: 'Approachability',
    desc: 'Patients need to feel comfortable enough to tell you things that are difficult to say. A guarded or distant expression creates barriers before the first appointment even happens.',
  },
  {
    quality: 'Professionalism',
    desc: 'You take your role seriously. Your image should communicate the discipline, precision, and commitment that defines great clinical and administrative work in healthcare.',
  },
];

const specialtiesServed = [
  'Physicians (all specialties)',
  'Nurse practitioners and physician assistants',
  'Hospital administrators and medical directors',
  'Healthcare executives and C-suite leaders',
  'Mental health professionals (therapists, psychiatrists, psychologists)',
  'Dentists and dental practice staff',
  'Physical therapists and rehabilitation specialists',
  'Medical students (ERAS residency applications)',
  'Registered nurses and nursing leadership',
  'Healthcare practice owners and private practitioners',
];

const whiteCoatGuidance = [
  {
    option: 'White Coat',
    best: 'Clinical specialties, hospital directories, ZocDoc, Healthgrades',
    notes: 'Must be clean, pressed, and professional. White coat over a professional shirt or blouse. Works especially well for physicians, NPs, PAs, and any clinical role where the coat is part of daily practice.',
  },
  {
    option: 'Business Professional',
    best: 'Administrative roles, healthcare executives, private practice owners, LinkedIn',
    notes: 'A suit or blazer reads as polished and authoritative without the clinical signal of a white coat. Better for roles where leadership, business, or strategy is more central than bedside care.',
  },
  {
    option: 'Both (Our Recommendation)',
    best: 'Any role with multiple platforms and audiences',
    notes: 'Bring both options. We photograph you in each. One image for your hospital directory and clinical profiles, one for LinkedIn and executive bios. Maximum flexibility from a single session.',
  },
];

const sessionIncludes = [
  'Full studio session with professional lighting and backdrop',
  'Real-time posing and expression coaching throughout',
  'Unlimited wardrobe changes — white coat and business professional both welcome',
  'Guidance calibrated for clinical authority and human warmth',
  'Images reviewed together before you leave the session',
  'Professional retouching on all selected images',
  '48-hour delivery to a private online gallery',
  'High-resolution files ready for hospital directories, ZocDoc, Healthgrades, LinkedIn, and print',
];

export default function HealthcareHeadshotsPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Premium Headshots', url: 'https://rojasphotography.net/premium-headshots' },
        { name: 'Healthcare Headshots', url: 'https://rojasphotography.net/healthcare-headshots' },
      ])} />

      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/Hero Image1.jpg"
          title="Healthcare Headshots That Make Patients Feel Safe Before They Call"
          tag="Modesto & Central Valley | Rojas Photography"
          objectPosition="center 30%"
          fullHeight={false}
        >
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Patients research their providers before the first appointment. Your headshot is the first thing they use to decide whether to trust you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/premium-headshots#booking-heading"
              className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Book Your Session
            </Link>
            <Link
              href="/professional-headshot-cost"
              className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              See Pricing
            </Link>
          </div>
        </HeroSection>

        <main id="main-content">

          {/* SB7: Character with a Problem */}
          <section className="py-20 md:py-28 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6 text-center">
                  Patients Research You Before They Call
                </h2>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>
                    Your headshot appears on your hospital directory, ZocDoc, Healthgrades, your practice website, LinkedIn, and medical association profiles. Before a patient calls to schedule their first appointment — before they read a single review or scan your credentials — they have already formed an impression of you from your photo.
                  </p>
                  <p>
                    Research on physician trustworthiness is unambiguous: patients form strong impressions of competence and warmth from a headshot alone, and these impressions meaningfully influence their decisions about which provider to choose. In an era when most patients have more options than ever, your digital presence begins — and sometimes ends — with your photo.
                  </p>
                  <p>
                    An outdated photo that no longer matches your current appearance. A clinical, stiff expression that makes you look cold rather than competent. A photo that looks like it was taken in a hallway with a phone. These are not cosmetic concerns — they are patient acquisition problems. Every day your photo is working against the care you bring to every patient encounter, you are losing people who would have been well served by you.
                  </p>
                  <p>
                    You have dedicated your career to your patients&apos; health. Your image should reflect the same level of care and intention.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* What Your Headshot Needs to Communicate */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  What Your Healthcare Headshot Needs to Communicate
                </h2>
                <p className="text-center text-[var(--color-text-body)] text-lg mb-14 max-w-2xl mx-auto">
                  A great healthcare professional headshot does more than look polished. It performs a precise communication job — simultaneously projecting four qualities that patients use to decide whether to trust you with their health.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-5">
                {whatWeCommunicate.map((item, i) => (
                  <SectionReveal key={item.quality}>
                    <div className="flex gap-5 p-7 bg-white rounded-xl border border-gray-100">
                      <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--color-text-dark)] text-lg mb-2">{item.quality}</h3>
                        <p className="text-[var(--color-text-body)] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* SB7: Guide — Empathy + Authority */}
          <section className="py-20 md:py-28 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-14 items-center">
                <SectionReveal>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { src: '/images/headshots/headshot-healthcare-executive-01.jpg', alt: 'Healthcare executive headshot — Rojas Photography Modesto CA' },
                      { src: '/images/headshots/headshot-kaiser-medical-01.jpg', alt: 'Physician headshot photography — Central Valley' },
                      { src: '/images/headshots/headshot-kaiser-medical-02.jpg', alt: 'Medical staff headshots — Modesto CA' },
                      { src: '/images/headshots/headshot-kaiser-medical-03.jpg', alt: 'Doctor headshot — Rojas Photography' },
                    ].map((img) => (
                      <div key={img.src} className="img-hover-zoom rounded-xl overflow-hidden aspect-square relative">
                        <Image src={img.src} alt={img.alt} fill sizes="25vw" className="object-cover object-top" />
                      </div>
                    ))}
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="space-y-5">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
                      We Understand What Healthcare Professionals Need
                    </h2>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      The balance between clinical authority and human warmth is unique to healthcare — and getting it wrong in either direction has real consequences. Too cold and clinical, and patients feel like numbers. Too casual, and you undermine the confidence they need to put their health in your hands.
                    </p>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      We have photographed healthcare professionals across the Central Valley, including staff at UC Davis Medical Center, Community Regional Medical Center, and Saint Agnes Medical Center. We also photograph ERAS medical residency headshots and understand the full range of healthcare professional photography — from medical students beginning their careers to hospital executives managing entire systems.
                    </p>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      We know the difference between a headshot that makes a patient feel at ease and one that feels cold. That distinction is the entire job.
                    </p>
                    <div className="pt-2">
                      <p className="text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">The Process</p>
                      <ol className="space-y-3">
                        {[
                          'Pre-session consultation — we discuss your specialty, your clinical setting, and the patient audience you serve',
                          'Coached studio or on-site session — white coat guidance, expression coaching for warmth and competence, posture calibration',
                          '48-hour delivery — edited images in your private gallery, ready for every directory and platform where you appear',
                        ].map((step, i) => (
                          <li key={i} className="flex gap-3 text-[var(--color-text-body)] text-sm leading-relaxed">
                            <span className="w-6 h-6 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* White Coat or Business Professional? */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  White Coat or Business Professional?
                </h2>
                <p className="text-center text-[var(--color-text-body)] text-lg mb-14 max-w-2xl mx-auto">
                  The right choice depends on your role, your specialty, and where your photo will be used. Here is how to think about it — and why we recommend bringing both.
                </p>
              </SectionReveal>
              <div className="space-y-4">
                {whiteCoatGuidance.map((item) => (
                  <SectionReveal key={item.option}>
                    <div className="flex gap-5 p-7 bg-white rounded-xl border border-gray-100">
                      <CheckCircle2 size={20} className="text-[var(--color-primary)] flex-shrink-0 mt-1" />
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="font-bold text-[var(--color-text-dark)] text-lg">{item.option}</h3>
                          <span className="text-xs bg-[var(--color-bg-warm)] border border-gray-200 text-[var(--color-text-muted)] px-3 py-1 rounded-full">
                            Best for: {item.best}
                          </span>
                        </div>
                        <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.notes}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Specialties We Photograph */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <SectionReveal>
                  <div className="space-y-5">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
                      Specialties We Photograph
                    </h2>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      We photograph healthcare professionals across every specialty and role — from newly graduated medical students to hospital system executives. Whether you wear a white coat daily or run the administrative side of a major health system, your professional image matters equally.
                    </p>
                    <p className="text-[var(--color-text-body)] leading-relaxed">
                      Our clients include staff from UC Davis Medical Center, Community Regional Medical Center, and Saint Agnes Medical Center in Fresno. We understand the full spectrum of what &ldquo;professional&rdquo; looks like across different healthcare roles, specialties, and institutional settings.
                    </p>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <ul className="space-y-3">
                    {specialtiesServed.map(item => (
                      <li key={item} className="flex gap-2 text-sm text-[var(--color-text-body)]">
                        <CheckCircle2 size={15} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* SB7: Avoid Failure — Stakes */}
          <section className="py-20 md:py-28 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <div className="flex gap-4 mb-8 items-start">
                  <AlertTriangle size={28} className="text-amber-500 flex-shrink-0 mt-1" aria-hidden="true" />
                  <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
                    A Headshot That Doesn&apos;t Reflect Your Care Costs You Patients
                  </h2>
                </div>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>
                    Patients research physicians before their first appointment. When they open ZocDoc or Healthgrades and see two providers with similar credentials and comparable reviews, the photo becomes a tiebreaker. A headshot that looks cold, clinical, or disconnected from the warmth you actually bring to patient care can cause someone to scroll past you — to a provider who invested in their professional image.
                  </p>
                  <p>
                    An outdated photo creates a different problem: the patient who selected you based on your image arrives at your office and finds someone who looks meaningfully different. That moment of disconnect — however small — creates an instinctive recalibration. Trust that should have been established before they walked in the door now has to be rebuilt in the room.
                  </p>
                  <p>
                    In an era when patients have more healthcare choices than ever, your digital first impression is not a formality. It is the beginning of the patient relationship. A photo that communicates warmth, competence, and genuine professional commitment does real work before you ever say a word.
                  </p>
                  <p>
                    You chose healthcare because you care about people. Your headshot should show that.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* What's Included */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  What&apos;s Included in Your Session
                </h2>
                <p className="text-center text-[var(--color-text-body)] text-lg mb-14 max-w-2xl mx-auto">
                  Every healthcare headshot session includes everything from preparation guidance to final delivery — so you never have to wonder what to expect.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-6">
                <SectionReveal>
                  <div className="bg-[var(--color-bg-warm)] rounded-xl p-8 border border-gray-100 h-full">
                    <h3 className="font-bold text-[var(--color-text-dark)] text-lg mb-5">Session Details</h3>
                    <ul className="space-y-3">
                      {sessionIncludes.map(item => (
                        <li key={item} className="flex gap-2 text-sm text-[var(--color-text-body)]">
                          <CheckCircle2 size={15} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="space-y-5">
                    <div className="bg-[var(--color-bg-warm)] rounded-xl p-8 border border-gray-100">
                      <h3 className="font-bold text-[var(--color-text-dark)] text-lg mb-3">Pricing</h3>
                      <p className="text-[var(--color-text-body)] mb-2">
                        <strong className="text-[var(--color-text-dark)]">$150</strong> session fee
                      </p>
                      <p className="text-[var(--color-text-body)] mb-4">
                        <strong className="text-[var(--color-text-dark)]">$150</strong> per final edited image
                      </p>
                      <p className="text-sm text-[var(--color-text-muted)]">
                        No minimum purchase. Most healthcare professionals select 1–2 images. You only pay for the images you choose.
                      </p>
                    </div>
                    <div className="bg-[var(--color-bg-warm)] rounded-xl p-8 border border-gray-100">
                      <h3 className="font-bold text-[var(--color-text-dark)] text-lg mb-3">Where We Serve</h3>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed mb-3">
                        Our studio is in Modesto, CA — convenient for healthcare professionals at Community Regional, Memorial Medical Center, and throughout the Central Valley. We also serve Sacramento, Fresno, Stockton, and surrounding areas.
                      </p>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                        We bring our full on-site studio to hospitals, clinics, and medical practices for team sessions. Contact us for department and group pricing.
                      </p>
                    </div>
                    <div className="text-center pt-2">
                      <Link
                        href="/premium-headshots#booking-heading"
                        className="btn-primary px-10 py-4 text-lg font-semibold rounded-full inline-block"
                      >
                        Book Your Healthcare Headshot Session
                      </Link>
                    </div>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">
                  What Clients Say
                </h2>
              </SectionReveal>
              <div className="grid md:grid-cols-3 gap-6">
                <SectionReveal>
                  <TestimonialCard
                    name="Catherine Luke"
                    role="CEO"
                    quote="Professional, efficient, and high-quality. Within days, our new employee had a corporate headshot ready for our website and LinkedIn. Highly recommended for any business."
                  />
                </SectionReveal>
                <SectionReveal>
                  <TestimonialCard
                    name="Joyce Ulrich"
                    role="Entrepreneur, Modesto"
                    quote="Alfonso and Niomi create a comfortable environment that puts you at ease immediately. The professional headshots turned out beautifully — exactly what I needed for my business."
                  />
                </SectionReveal>
                <SectionReveal>
                  <TestimonialCard
                    name="Francisco Chamorro"
                    role="BBSI — Business Management Solutions"
                    quote="Alfonso and Niomi are great to work with. Responsive, open to input and above all super professional. The results were just what we expected. I would recommend."
                  />
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <section className="py-14 px-8 bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <SectionReveal>
                <h3 className="font-bold text-[var(--color-text-dark)] mb-6 text-lg">Also Helpful</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/eras-headshots" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">
                    ERAS Residency Headshots
                  </Link>
                  <Link href="/how-to-prepare-for-headshots" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">
                    How to Prepare for Your Session
                  </Link>
                  <Link href="/professional-headshot-cost" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">
                    Headshot Pricing Guide
                  </Link>
                  <Link href="/on-site-photography" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">
                    On-Site Hospital & Clinic Sessions
                  </Link>
                  <Link href="/premium-headshots" className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-full inline-block">
                    Premium Headshots
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection
            faqs={faqs}
            heading="Healthcare Headshot Questions Answered"
          />

          <CTASection
            heading="Book Your Healthcare Headshot Session"
            subheading="$150 session. $150 per image. No minimums. 48-hour delivery. Modesto studio or on-site at your hospital or clinic."
            primaryLabel="Book Your Session"
            primaryHref="/premium-headshots#booking-heading"
            showContactInfo
          />

        </main>
      </div>
    </>
  );
}
