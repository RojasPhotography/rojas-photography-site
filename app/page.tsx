import Link from 'next/link';
import HeroSection from './components/HeroSection';
import SectionReveal from './components/SectionReveal';
import TestimonialCard from './components/TestimonialCard';
import CTASection from './components/CTASection';

export default function HomePage() {
  return (
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

      <main id="main-content">
        {/* Portfolio Preview */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
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

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden aspect-[3/4]">
                <img
                  src="/images/Gina-0026 (1).jpg"
                  alt="Professional corporate headshot - executive woman"
                  className="w-full h-full object-cover"
                />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden aspect-[3/4]">
                <img
                  src="/images/Miguel-(2 of 6) (1).jpg"
                  alt="Professional corporate headshot - executive man"
                  className="w-full h-full object-cover"
                />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden aspect-[3/4]">
                <img
                  src="/images/Joyce-0029.jpg"
                  alt="Professional corporate headshot - business woman"
                  className="w-full h-full object-cover"
                />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden aspect-[3/4]">
                <img
                  src="/images/MOVE Stanislaus-(3 of 28).jpg"
                  alt="Commercial photography for business"
                  className="w-full h-full object-cover"
                />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden aspect-[3/4]">
                <img
                  src="/images/CLA AM 25 201.jpg"
                  alt="Corporate event photography"
                  className="w-full h-full object-cover scale-125"
                />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden aspect-[3/4]">
                <img
                  src="/images/individual Headshot Website.png"
                  alt="Individual headshot session"
                  className="w-full h-full object-cover"
                />
              </SectionReveal>
            </div>

            <SectionReveal className="text-center mt-12">
              <Link
                href="/work"
                className="btn-outline px-8 py-3 font-semibold rounded-full inline-block"
              >
                View All Services
              </Link>
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

        {/* About Teaser */}
        <section className="py-20 md:py-28 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <SectionReveal>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/images/Alfonso+Niomi-0026.jpg"
                    alt="Alfonso and Niomi Rojas - Founders of Rojas Photography"
                    className="w-full h-auto object-cover"
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
  );
}
