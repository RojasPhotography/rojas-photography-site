import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, Users, Briefcase, Video, Calendar } from 'lucide-react';
import HeroSection from './components/HeroSection';
import SectionReveal from './components/SectionReveal';
import TestimonialCard from './components/TestimonialCard';
import CTASection from './components/CTASection';
import SchemaScript from './components/SchemaScript';
import { generateLocalBusinessSchema } from './lib/schema';

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
        url: '/images/Hero Image1.jpg',
        alt: 'Professional corporate photography - Modesto photographer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Photography Modesto CA | Professional Headshots & Video',
    description:
      'Expert corporate photography in Modesto and Central Valley. Professional headshots, on-site photography, commercial photography, video production, and event coverage. Trusted by 500+ executives.',
    images: ['/images/Hero Image1.jpg'],
  },
};

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={generateLocalBusinessSchema()} />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        image="/images/Hero Image1.jpg"
        title="Corporate Photography That Builds Trust"
        tag="Premium Corporate Photography | Modesto, CA"
        fullHeight
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            href="/discovery-call"
            className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
          >
            Book Now
          </Link>
          <a
            href="tel:2093803727"
            className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
          >
            Call 209-380-3727
          </a>
        </div>
        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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

      {/* Intro Section */}
      <section className="py-16 md:py-20 px-8 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
                Corporate Photography & Video Production in Modesto
              </h2>
              <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                <p>
                  Rojas Photography provides professional corporate photography and video services for businesses across Modesto and the Central Valley. From <Link href="/premium-headshots" className="text-[var(--color-primary)] hover:underline">executive headshots</Link> to <Link href="/on-site-photography" className="text-[var(--color-primary)] hover:underline">on-site team photography</Link>, <Link href="/commercial" className="text-[var(--color-primary)] hover:underline">commercial imagery</Link>, and <Link href="/video" className="text-[var(--color-primary)] hover:underline">video production</Link>, we help companies present their best professional image.
                </p>
                <p>
                  With 15+ years of corporate leadership experience, we understand what executives need. We've photographed 500+ professionals and know how to make people feel comfortable in front of the camera while capturing authentic, professional results.
                </p>
                <p>
                  Whether you need a single headshot or comprehensive visual content for your entire organization, we bring the same level of professionalism and attention to detail to every project.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <main id="main-content">
        {/* Services Section */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-dark)] mb-4">
                  Our Services
                </h2>
                <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
                  Professional photography and video services for businesses across Modesto and the Central Valley
                </p>
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Premium Headshots */}
              <SectionReveal>
                <Link href="/premium-headshots" className="block group">
                  <div className="relative h-[400px] rounded-xl overflow-hidden hover:shadow-2xl transition-all">
                    {/* Background Image */}
                    <Image
                      src="/images/headshots/headshot-ceo-nutrition-02.jpg"
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
                        Professional in-studio headshots with real-time coaching. Perfect for executives, attorneys, and business professionals.
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
                <Link href="/on-site-photography" className="block group">
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
                        We bring our studio to your office. Ideal for teams of 10+ with 24-hour turnaround and minimal disruption.
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
                <Link href="/commercial" className="block group">
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
                        Product, architectural, and brand photography for websites, marketing campaigns, and e-commerce.
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
                <Link href="/video" className="block group">
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
                        Corporate videos, testimonials, and aerial drone footage by FAA Part 107 certified pilots.
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
                <Link href="/event-photography" className="block group">
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
                        Professional coverage for corporate events, conferences, and networking functions with same-day delivery options.
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
                  Professional imagery for executives, teams, and businesses across the Central Valley
                </p>
              </div>
            </SectionReveal>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
              {/* Large Featured - CEO Nutrition */}
              <SectionReveal className="md:col-span-2 md:row-span-2 img-hover-zoom rounded-xl overflow-hidden relative">
                <Image
                  src="/images/headshots/headshot-ceo-nutrition-02.jpg"
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

        {/* Discovery Call CTA #1 - After Portfolio */}
        <section className="py-16 px-8 bg-[var(--color-primary-dark)] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Discuss Your Photography Needs?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Schedule a free discovery call to discuss your project, ask questions, and see if we're the right fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/discovery-call"
                  className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                >
                  Schedule Discovery Call
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

        {/* Social Proof Bar */}
        <SectionReveal>
          <section className="py-12 px-8 bg-[var(--color-bg-warm)] border-y border-gray-100">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
              <div>
                <p className="text-3xl font-bold text-[var(--color-primary)]">500+</p>
                <p className="text-sm text-[var(--color-text-muted)]">Executives Photographed</p>
              </div>
              <div className="hidden md:block w-px h-10 bg-gray-200" />
              <div>
                <p className="text-3xl font-bold text-[var(--color-primary)]">50+</p>
                <p className="text-sm text-[var(--color-text-muted)]">Five-Star Reviews</p>
              </div>
              <div className="hidden md:block w-px h-10 bg-gray-200" />
              <div>
                <p className="text-sm text-[var(--color-text-muted)]">Trusted by</p>
                <p className="font-semibold text-[var(--color-text-dark)]">
                  Comcast &middot; Save Mart &middot; CLA
                </p>
              </div>
            </div>
          </section>
        </SectionReveal>

        {/* Testimonials */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-dark)] mb-4">
                  What Clients Say
                </h2>
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

        {/* Discovery Call CTA #2 - After Testimonials */}
        <section className="py-12 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-2xl mx-auto text-center">
            <SectionReveal>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-dark)] mb-4">
                Join 500+ Professionals Who Trust Rojas Photography
              </h2>
              <p className="text-[var(--color-text-body)] mb-6">
                Let's create professional images that elevate your brand.
              </p>
              <Link
                href="/discovery-call"
                className="btn-primary px-10 py-4 text-lg font-semibold rounded-full inline-block"
              >
                Schedule Your Free Consultation
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
                  <p className="text-[var(--color-text-dark)] font-semibold mb-2">Executives Photographed</p>
                  <p className="text-sm text-[var(--color-text-body)]">CEOs, attorneys, professionals</p>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">50+</div>
                  <p className="text-[var(--color-text-dark)] font-semibold mb-2">Five-Star Reviews</p>
                  <p className="text-sm text-[var(--color-text-body)]">Proven client satisfaction</p>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">FAA</div>
                  <p className="text-[var(--color-text-dark)] font-semibold mb-2">Part 107 Certified</p>
                  <p className="text-sm text-[var(--color-text-body)]">Licensed drone pilots</p>
                </div>
              </SectionReveal>
            </div>

            <SectionReveal>
              <div className="mt-16 p-8 bg-[var(--color-bg-warm)] rounded-xl text-center">
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed">
                  We serve businesses across Modesto, Stockton, Fresno, Turlock, Merced, Sacramento, and the East Bay with professional photography and video services you can trust.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* About Teaser */}
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
                    With 15+ years in corporate leadership, we understand what executives need. We&apos;ve helped 500+ professionals create authentic portraits that build credibility.
                  </p>
                  <p className="text-[var(--color-text-body)] leading-relaxed mb-8">
                    Professional photography isn&apos;t about being &ldquo;photogenic.&rdquo; It&apos;s about presenting your authentic professional self with confidence.
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

        {/* CTA + Contact */}
        <CTASection />
      </main>
      </div>
    </>
  );
}
