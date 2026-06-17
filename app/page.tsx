import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, Users, Briefcase, Video, Calendar, Aperture } from 'lucide-react';
import HeroSection from './components/HeroSection';
import SectionReveal from './components/SectionReveal';
import TestimonialCard from './components/TestimonialCard';
import CTASection from './components/CTASection';
import SchemaScript from './components/SchemaScript';
import TwoLanes from './components/TwoLanes';
import GoogleReviews from './components/GoogleReviews';
import { generateLocalBusinessSchema, generateWebSiteSchema, generatePersonSchema, generateFAQSchema } from './lib/schema';
import FAQSection from './components/FAQSection';

export const metadata: Metadata = {
  title: 'Corporate Photography Modesto CA | Professional Headshots & Video',
  description:
    'Expert corporate photography in Modesto and Central Valley. Professional headshots, on-site photography, commercial photography, video production, and event coverage. Trusted by 500+ executives.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net',
  },
  openGraph: {
    title: 'Corporate Photography Modesto CA | Professional Headshots & Video',
    description:
      'Professional corporate photography services in Modesto and Central Valley. In-studio headshots, on-site photography, commercial photography, video production, and event coverage.',
    url: 'https://rojasphotography.net',
    type: 'website',
    images: [
      {
        url: '/images/Kaiser BTS Headshots.png',
        alt: 'Behind the scenes corporate headshot session with Kaiser executives - Rojas Photography Modesto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Photography Modesto CA | Professional Headshots & Video',
    description:
      'Expert corporate photography in Modesto and Central Valley. Professional headshots, on-site photography, commercial photography, video production, and event coverage. Trusted by 500+ executives.',
    images: ['/images/Kaiser BTS Headshots.png'],
  },
};

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={generateLocalBusinessSchema()} />
      <SchemaScript schema={generateWebSiteSchema()} />
      {generatePersonSchema().map((person, i) => (
        <SchemaScript key={i} schema={person} />
      ))}
      <SchemaScript schema={generateFAQSchema([
        {
          question: 'Who is Alfonso Rojas?',
          answer: 'Alfonso Rojas is the founder and lead photographer of Rojas Photography, based in Modesto, CA. He has 15+ years of corporate leadership experience and is FAA Part 107 certified for drone operations. He has photographed 500+ executives and professionals across the Central Valley and holds 60+ five-star Google reviews.',
        },
        {
          question: 'What is Rojas Photography?',
          answer: 'Rojas Photography is a professional corporate photography and video studio based in Modesto, CA, founded and operated by Alfonso Rojas. Services include executive headshots, on-site team photography, headshot booth events, commercial photography, video production, and corporate event coverage throughout the Central Valley.',
        },
        {
          question: 'Where is Rojas Photography located?',
          answer: 'Rojas Photography is located in Modesto, CA 95350, in the heart of the Central Valley. The studio serves clients in Modesto, Stockton, Turlock, Fresno, Sacramento, Merced, and throughout Central Valley California. On-site photography is available at client locations throughout California.',
        },
        {
          question: 'How much does a professional headshot cost in Modesto, CA?',
          answer: 'A professional headshot session at Rojas Photography in Modesto costs $150 for the session fee, plus $150 per image selected. There is no minimum number of images to purchase — you only pay for the photos you love. For on-site team photography and headshot booth events, pricing is customized based on team size and scope.',
        },
        {
          question: 'What areas does Rojas Photography serve in California?',
          answer: 'Rojas Photography is based in Modesto, CA and serves the entire Central Valley including Stockton, Turlock, Fresno, Sacramento, Merced, Ceres, Riverbank, Oakdale, Tracy, Manteca, Lodi, and Clovis. On-site photography is available throughout California.',
        },
        {
          question: 'Does Rojas Photography offer on-site headshots for businesses?',
          answer: 'Yes. Alfonso Rojas brings a complete professional studio setup — lighting, backdrop, and camera equipment — directly to your office, medical facility, law firm, or business. On-site photography is priced per person and is ideal for contracted team headshots. For high-volume events, a headshot booth service is also available, priced by the hour.',
        },
      ])} />
      <div className="min-h-screen bg-white">
      {/* Hero Section - SB7: A Character */}
      <HeroSection
        image="/images/Kaiser BTS Headshots.png"
        title="Your Business Is Better Than Your Photos Suggest."
        tag="Premium Corporate Photography | Modesto, CA"
        objectPosition="center 40%"
        fullHeight
      >
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          We help professionals across Modesto and Central Valley create imagery that actually reflects the quality of who they are.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            href="/discovery-call"
            className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
          >
            Book a Signature session
          </Link>
          <Link
            href="/on-site-photography"
            className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
          >
            Headshot days for teams
          </Link>
        </div>
        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </HeroSection>

      {/* Proof Bar - client trust + stats (CLAUDE.md target structure #3) */}
      <SectionReveal>
        <section className="py-10 md:py-12 px-8 bg-[var(--color-bg-warm)] border-b border-gray-100">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 text-center">
            <div>
              <p className="text-3xl font-bold text-[var(--color-primary)]">500+</p>
              <p className="text-sm text-[var(--color-text-muted)]">Executives photographed</p>
            </div>
            <div className="hidden md:block w-px h-10 bg-gray-200" />
            <div>
              <p className="text-3xl font-bold text-[var(--color-primary)]">60+ &#9733;</p>
              <p className="text-sm text-[var(--color-text-muted)]">Five-star Google reviews</p>
            </div>
            <div className="hidden md:block w-px h-10 bg-gray-200" />
            <div>
              <p className="text-sm text-[var(--color-text-muted)]">Trusted by</p>
              <p className="font-semibold text-[var(--color-text-dark)]">
                Comcast &middot; Save Mart &middot; CalPERS &middot; CLA
              </p>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Two Lanes - Signature vs Express (the Premium Barbell) */}
      <TwoLanes />

      {/* Problem Section - SB7: Has a Problem */}
      <section className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-8">
              Your Story Deserves More Than Generic Photography
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-[var(--color-text-body)] leading-relaxed">
              <div>
                <p className="mb-4">
                  Many businesses struggle with photography and video that feels transactional, not collaborative. Images that look professional but don't tell their story. Photographers who don't take time to understand their organization.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Your business has a unique story—your values, your people, your culture. Your imagery and video content should tell that story authentically, not just fill space on a website or social media.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Intro Section - SB7: Meets a Guide */}
      <section className="py-16 md:py-20 px-8 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
                We Know What It Feels Like to Be Undersold
              </h2>
              <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                <p>
                  You've put years into building something real — a team, a reputation, a standard of work you're proud of. And then someone visits your website or finds your LinkedIn and the imagery doesn't come close to reflecting any of it. That gap is frustrating. We get it.
                </p>
                <p className="font-semibold text-[var(--color-text-dark)]">
                  We're Alfonso and Niomi Rojas. With a background in corporate leadership and operations before we picked up a camera, we understand business from the inside — which means we know how to translate what you've built into imagery that actually shows it.
                </p>
                <p>
                  We've helped 500+ professionals across the Central Valley — from <Link href="/premium-headshots" className="text-[var(--color-primary)] hover:underline">executive headshots</Link> to <Link href="/on-site-photography" className="text-[var(--color-primary)] hover:underline">on-site team photography</Link>, <Link href="/commercial" className="text-[var(--color-primary)] hover:underline">commercial imagery</Link>, and <Link href="/video" className="text-[var(--color-primary)] hover:underline">video production</Link> — create visuals they're genuinely proud to put in front of clients. Not as a vendor. As partners who care about getting it right.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <main id="main-content">
        {/* The Plan Section - SB7: Who Gives Them a Plan */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-5xl font-bold text-center text-[var(--color-text-dark)] mb-16">
                How We Work With You
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <SectionReveal>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">
                    Discovery & Story Development
                  </h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    We start with a real conversation about your organization — your values, your people, your story. We need to understand what you need your imagery to communicate before we pick up a camera.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">
                    Collaborative Creation
                  </h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    You're not just a subject — you're a collaborator. We work with you on set to capture authentic moments, not posed performances. The result feels like you, because it is.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">
                    Story-Driven Delivery
                  </h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    You receive polished, professional imagery you're proud to put in front of anyone — delivered within 24-48 hours for photos, 2-4 weeks for video — ready for your website, LinkedIn, and every marketing touchpoint.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Urgent CTA Before Services - Early Conversion Opportunity */}
        <section className="py-12 px-8 bg-[var(--color-primary-dark)] text-center">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed">
                You&apos;ve worked too hard to be undersold by a photo.
              </p>
              <Link
                href="/discovery-call"
                className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
              >
                Book Your Discovery Call
              </Link>
            </SectionReveal>
          </div>
        </section>

        {/* Services Section - SB7 Enhanced */}
        <section className="py-20 md:py-28 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-dark)] mb-4">
                  How We Can Help
                </h2>
                <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
                  Photography and video for professionals across Modesto and the Central Valley
                </p>
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Premium Headshots */}
              <SectionReveal>
                <Link href="/premium-headshots" aria-label="Learn more about Premium Headshots" className="block group">
                  <div className="relative h-[400px] rounded-xl overflow-hidden hover:shadow-2xl transition-all">
                    {/* Background Image */}
                    <Image
                      src="/images/headshots/headshot-ceo-nutrition.jpg"
                      alt="Premium Headshots - Professional corporate headshot"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                      <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform backdrop-blur-sm">
                        <Camera className="text-white" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Premium Headshots
                      </h3>
                      <p className="text-white/90 mb-4 leading-relaxed">
                        Headshots that tell the story of who you really are. We guide you through the session to capture authentic portraits that show personality and professionalism—not stiff, corporate photos.
                      </p>
                      <span className="text-white font-semibold group-hover:underline">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </Link>
              </SectionReveal>

              {/* On-Site Photography */}
              <SectionReveal>
                <Link href="/on-site-photography" aria-label="Learn more about On-Site Photography" className="block group">
                  <div className="relative h-[400px] rounded-xl overflow-hidden hover:shadow-2xl transition-all">
                    {/* Background Image */}
                    <Image
                      src="/images/BB Individual Headshot Session.png"
                      alt="On-Site Photography - Team headshot session"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                      <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform backdrop-blur-sm">
                        <Users className="text-white" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        On-Site Photography
                      </h3>
                      <p className="text-white/90 mb-4 leading-relaxed">
                        We come to your organization, understand your culture, and create team imagery that tells your story authentically. Not just a lineup of faces—a visual narrative of your people.
                      </p>
                      <span className="text-white font-semibold group-hover:underline">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </Link>
              </SectionReveal>

              {/* Headshot Booth */}
              <SectionReveal>
                <Link href="/headshot-booth" aria-label="Learn more about Headshot Booth" className="block group">
                  <div className="relative h-[400px] rounded-xl overflow-hidden hover:shadow-2xl transition-all">
                    <Image
                      src="/images/kaiser-bts-headshots1.jpeg"
                      alt="Headshot Booth - High-volume event headshots"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
                    <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                      <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform backdrop-blur-sm">
                        <Aperture className="text-white" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Headshot Booth
                      </h3>
                      <p className="text-white/90 mb-4 leading-relaxed">
                        We set up a professional headshot station at your event or office. High-volume, fast-moving, and polished — every attendee walks away with a photo they&apos;re proud to use.
                      </p>
                      <span className="text-white font-semibold group-hover:underline">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </Link>
              </SectionReveal>

              {/* Commercial Photography */}
              <SectionReveal>
                <Link href="/commercial" aria-label="Learn more about Commercial Photography" className="block group">
                  <div className="relative h-[400px] rounded-xl overflow-hidden hover:shadow-2xl transition-all">
                    {/* Background Image */}
                    <Image
                      src="/images/DoctorOffice 4.jpg"
                      alt="Commercial Photography - Professional business photography"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                      <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform backdrop-blur-sm">
                        <Briefcase className="text-white" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Commercial Photography
                      </h3>
                      <p className="text-white/90 mb-4 leading-relaxed">
                        Brand imagery that tells your story to customers. We collaborate to understand your values and create visuals that communicate them authentically—products, spaces, and people.
                      </p>
                      <span className="text-white font-semibold group-hover:underline">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </Link>
              </SectionReveal>

              {/* Video Production */}
              <SectionReveal>
                <Link href="/video" aria-label="Learn more about Video Production" className="block group">
                  <div className="relative h-[400px] rounded-xl overflow-hidden hover:shadow-2xl transition-all">
                    {/* Background Image */}
                    <Image
                      src="/images/BBSI-Corp-Video.jpg"
                      alt="Video Production - Corporate video production"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                      <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform backdrop-blur-sm">
                        <Video className="text-white" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Video Production
                      </h3>
                      <p className="text-white/90 mb-4 leading-relaxed">
                        Your story deserves motion. We partner with you to create video content that connects emotionally—brand stories, testimonials, culture videos, and aerial footage that feels authentic, not scripted.
                      </p>
                      <span className="text-white font-semibold group-hover:underline">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </Link>
              </SectionReveal>

              {/* Event Photography */}
              <SectionReveal>
                <Link href="/event-photography" aria-label="Learn more about Event Photography" className="block group">
                  <div className="relative h-[400px] rounded-xl overflow-hidden hover:shadow-2xl transition-all">
                    {/* Background Image */}
                    <Image
                      src="/images/CLA AM 25 335.jpg"
                      alt="Event Photography - Corporate event coverage"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                      <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform backdrop-blur-sm">
                        <Calendar className="text-white" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Event Photography
                      </h3>
                      <p className="text-white/90 mb-4 leading-relaxed">
                        We don't just document your events—we capture the story. The moments, connections, and culture. Your event has a narrative; we tell it through photos and video.
                      </p>
                      <span className="text-white font-semibold group-hover:underline">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Portfolio Bento Grid */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-dark)] mb-4">
                  Our Work
                </h2>
                <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
                  Visual storytelling for businesses across the Central Valley — photography and video that reflects the quality of who you are
                </p>
              </div>
            </SectionReveal>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
              {/* Large Featured - CEO Nutrition */}
              <SectionReveal className="md:col-span-2 md:row-span-2 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/headshots/headshot-ceo-nutrition.jpg"
                  alt="Professional CEO headshot Modesto - Executive corporate photography"
                  fill
                  className="object-cover object-[70%_50%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </SectionReveal>

              {/* Small - Attorney Headshot */}
              <SectionReveal className="md:col-span-1 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/headshots/headshot-attorney-03.jpg"
                  alt="Attorney headshot Modesto CA - Professional legal photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </SectionReveal>

              {/* Small - Joyce Headshot */}
              <SectionReveal className="md:col-span-1 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/Joyce-0029.jpg"
                  alt="Business professional headshot Central Valley - Corporate photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </SectionReveal>

              {/* Medium Wide - Commercial */}
              <SectionReveal className="md:col-span-2 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/MOVE Stanislaus-(3 of 28).jpg"
                  alt="Commercial photography Modesto - Business team photography"
                  fill
                  className="object-cover object-[50%_20%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </SectionReveal>

              {/* Small - Realtor Headshot */}
              <SectionReveal className="md:col-span-1 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/headshots/headshot-realtor-01.jpg"
                  alt="Real estate agent headshot Modesto - Professional realtor photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </SectionReveal>

              {/* Medium Wide - Team Group Photo */}
              <SectionReveal className="md:col-span-2 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/Move Staff Group 9.jpg"
                  alt="On-site team photography Modesto - Corporate group headshots"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </SectionReveal>

              {/* Small - Miguel Headshot */}
              <SectionReveal className="md:col-span-1 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/Miguel-(2 of 6) (1).jpg"
                  alt="Executive headshot Modesto CA - Professional corporate photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </SectionReveal>

              {/* Large Featured - Event */}
              <SectionReveal className="md:col-span-2 md:row-span-2 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/CLA AM 25 335.jpg"
                  alt="Corporate event photography Central Valley - Professional event coverage"
                  fill
                  className="object-cover object-[40%_50%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </SectionReveal>

              {/* Medium Wide - Doctor Office */}
              <SectionReveal className="md:col-span-2 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/DoctorOffice 4.jpg"
                  alt="Commercial architectural photography Modesto - Professional business photography"
                  fill
                  className="object-cover object-[50%_25%] scale-90"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </SectionReveal>

              {/* Small - On-Site Session */}
              <SectionReveal className="md:col-span-1 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/BB Individual Headshot Session.png"
                  alt="On-site corporate photography Modesto - Team headshot sessions"
                  fill
                  className="object-cover object-[50%_30%]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </SectionReveal>

              {/* Small - Video Production */}
              <SectionReveal className="md:col-span-1 md:row-span-1 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/BBSI-Corp-Video.jpg"
                  alt="Corporate video production Central Valley - Professional business videography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Stakes Section - SB7: Helps Avoid Failure */}
        <section className="py-16 px-8 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
                Outdated Imagery Costs You More Than You Think
              </h2>
              <div className="text-lg text-[var(--color-text-body)] leading-relaxed space-y-4">
                <p>
                  Every time a prospect visits your website or finds your LinkedIn, they're making a judgment call. If your photos don't reflect the quality of your work, they move on — and you never know it happened.
                </p>
                <p>
                  Generic imagery makes you look like everyone else. It undermines trust before you ever get a chance to speak. And the longer you wait, the more opportunities quietly walk past you.
                </p>
                <p className="font-semibold text-[var(--color-text-dark)]">
                  You've worked too hard to be undersold by a photo.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Discovery Call CTA #1 - After Portfolio - SB7: Call to Action */}
        <section className="py-16 px-8 bg-[var(--color-primary-dark)] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Tell Your Story Visually?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Schedule a free discovery call. We'll discuss your goals, show you examples of our work, and put together a custom plan. Zero pressure. Zero obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/discovery-call"
                  className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                >
                  Book Your Discovery Call
                </Link>
                <a
                  href="tel:2093803727"
                  className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                >
                  Call 209-380-3727
                </a>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Testimonials - Kept Authentic */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-dark)] mb-4">
                  Imagine Sharing Imagery You&apos;re Actually Proud Of
                </h2>
                <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                  A headshot that finally looks like you. A team photo that shows your culture. Brand imagery that makes the right people take notice. That&apos;s what working together looks like — here&apos;s what clients say.
                </p>
              </div>
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
                  quote="Alfonso and Niomi create a comfortable environment that puts you at ease immediately. The professional headshots turned out beautifully—exactly what I needed for my business."
                />
              </SectionReveal>
              <SectionReveal>
                <TestimonialCard
                  name="Courtnay Lynch"
                  role="VP of People & Culture, Valley First Credit Union"
                  quote="Alfonso and Niomi captured our corporate event beautifully. Professional, responsive, easy to work with. They understand business and deliver results."
                />
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Live Google Reviews - renders only when Places API env vars are set */}
        <GoogleReviews />

        {/* Discovery Call CTA #2 - After Testimonials */}
        <section className="py-12 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-2xl mx-auto text-center">
            <SectionReveal>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-dark)] mb-4">
                Your Story Deserves to Be Told Authentically
              </h2>
              <p className="text-[var(--color-text-body)] mb-6">
                Join hundreds of Central Valley professionals who've trusted us to tell their story visually. Your authentic narrative is one conversation away.
              </p>
              <Link
                href="/discovery-call"
                className="btn-primary px-10 py-4 text-lg font-semibold rounded-full inline-block"
              >
                Book Your Discovery Call
              </Link>
            </SectionReveal>
          </div>
        </section>

        {/* Authority & Credentials Section */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
                  Trusted by Central Valley Businesses
                </h2>
                <p className="text-lg text-[var(--color-text-muted)]">
                  Experience, expertise, and proven results
                </p>
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-4 gap-8">
              <SectionReveal>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">15+</div>
                  <p className="text-[var(--color-text-dark)] font-semibold mb-2">Years Experience</p>
                  <p className="text-sm text-[var(--color-text-body)]">Corporate leadership background</p>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">500+</div>
                  <p className="text-[var(--color-text-dark)] font-semibold mb-2">Professionals Photographed</p>
                  <p className="text-sm text-[var(--color-text-body)]">CEOs, attorneys, business leaders</p>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">60+</div>
                  <p className="text-[var(--color-text-dark)] font-semibold mb-2">Five-Star Reviews</p>
                  <p className="text-sm text-[var(--color-text-body)]">Proven client satisfaction</p>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">FAA</div>
                  <p className="text-[var(--color-text-dark)] font-semibold mb-2">Part 107 Certified</p>
                  <p className="text-sm text-[var(--color-text-body)]">Licensed drone operator</p>
                </div>
              </SectionReveal>
            </div>

            <SectionReveal>
              <div className="mt-16 p-8 bg-[var(--color-bg-warm)] rounded-xl text-center">
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed">
                  We partner with businesses across Modesto, Stockton, Fresno, Turlock, Merced, Sacramento, and the East Bay — helping organizations tell their story through professional photography and video content you can trust.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* About Teaser - SB7: Success Vision */}
        <section className="py-20 md:py-28 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <SectionReveal>
                <div className="rounded-2xl overflow-hidden relative aspect-[4/3]">
                  <Image
                    src="/images/Alfonso+Niomi-0026.jpg"
                    alt="Alfonso and Niomi Rojas - Founders of Rojas Photography"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-[50%_20%]"
                  />
                </div>
              </SectionReveal>
              <SectionReveal>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
                    Meet Alfonso & Niomi
                  </h2>
                  <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-4">
                    With 15+ years in corporate leadership and operations between us, we understand what businesses need. We've partnered with professionals across the Central Valley to create authentic photography and video content that tells their story and builds credibility.
                  </p>
                  <p className="text-[var(--color-text-body)] leading-relaxed mb-8">
                    Visual storytelling isn't about being &ldquo;photogenic.&rdquo; It's about presenting your authentic story with confidence — through imagery and video that connects.
                  </p>
                  <Link
                    href="/about-rojas-photography"
                    className="btn-outline px-8 py-3 font-semibold rounded-full inline-block"
                  >
                    Learn More About Us
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* FAQ Section - AEO */}
        <FAQSection
          faqs={[
            {
              question: 'How much does a professional headshot cost in Modesto?',
              answer: 'Our studio headshot sessions are $150 for the session, plus $150 per image you select. There is no minimum — you only pay for the photos you love. For on-site team photography, we provide custom quotes based on team size. For headshot booth events, pricing is hourly.',
            },
            {
              question: 'Do you travel for on-site photography outside of Modesto?',
              answer: 'Yes. We regularly travel throughout the Central Valley — Stockton, Turlock, Fresno, Sacramento, Merced, and beyond. We bring our full professional studio setup to your office, facility, or event. A travel fee applies for locations outside the immediate Modesto area.',
            },
            {
              question: 'What is the difference between a headshot booth and on-site photography?',
              answer: 'A headshot booth is a high-volume service priced by the hour — ideal for expos, conferences, and company events where the goal is moving many people through quickly. On-site photography is a contracted, per-person service where we spend dedicated time with each individual, providing personal coaching on posing and expression. Both involve us coming to your location with professional equipment.',
            },
            {
              question: 'How quickly will I receive my photos?',
              answer: 'Studio headshot sessions are delivered to a private online gallery within 48 hours. On-site team photography typically delivers within 24 hours. For corporate events with SpotMyPhotos live delivery (full-day bookings), guests can access their photos in real time during the event.',
            },
            {
              question: 'What should I wear to a headshot session?',
              answer: 'We send every client a preparation guide before their session with specific wardrobe recommendations. Generally, solid colors and professional attire photograph best. Bring multiple outfits — sessions include unlimited wardrobe changes at no extra charge. We guide you through everything in real time so you never have to guess.',
            },
          ]}
          heading="Common Questions"
        />

        {/* CTA + Contact */}
        <CTASection primaryLabel="Book Your Discovery Call" />
      </main>
      </div>
    </>
  );
}
