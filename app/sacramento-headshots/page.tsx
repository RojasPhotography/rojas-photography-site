import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Camera, Video, Building2, Users, Star } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import { generateBreadcrumbSchema } from '../lib/schema';

function generateSacramentoSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://rojasphotography.net/sacramento-headshots',
    name: 'Rojas Photography – Sacramento Headshots',
    image: 'https://rojasphotography.net/images/Gina-0026 (1).jpg',
    description:
      'Professional corporate headshots and photography services in Sacramento, CA. Serving state legislators, government officials, lobbyists, legal professionals, UC Davis Medical Center staff, and business executives across the Sacramento region.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Modesto',
      addressRegion: 'CA',
      postalCode: '95356',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Sacramento' },
      { '@type': 'City', name: 'Modesto' },
      { '@type': 'City', name: 'Elk Grove' },
      { '@type': 'City', name: 'Roseville' },
      { '@type': 'City', name: 'Folsom' },
    ],
    telephone: '+1-209-380-3727',
    email: 'alfonso@rojasphotography.net',
    url: 'https://rojasphotography.net/sacramento-headshots',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '60',
    },
  };
}

function generateSacramentoServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Professional Headshots in Sacramento, CA',
    description:
      'Professional corporate headshots for Sacramento legislators, government officials, lobbyists, legal professionals, UC Davis Medical Center healthcare workers, and business executives across the state capital region.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rojas Photography',
      telephone: '+1-209-380-3727',
      url: 'https://rojasphotography.net',
    },
    areaServed: {
      '@type': 'City',
      name: 'Sacramento',
      containedInPlace: {
        '@type': 'State',
        name: 'California',
      },
    },
    url: 'https://rojasphotography.net/sacramento-headshots',
    image: 'https://rojasphotography.net/images/Gina-0026 (1).jpg',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '150',
      description: 'Professional headshot session fee. Image selection priced separately.',
    },
  };
}

const sacramentoFaqs = [
  {
    question: 'Can you run a headshot day at our Sacramento office or Capitol-area building?',
    answer:
      'Yes — on-site team days are most of what we do in Sacramento. We bring the full studio (lighting, backdrop, everything) to your Downtown, Midtown, Roseville, Folsom, Elk Grove, or Rancho Cordova location and photograph your whole team without anyone leaving the building. We just need about a 10x10 space and access to power. It works equally well for a legislative office, a law firm, an agency floor, or a corporate suite.',
  },
  {
    question: 'How does the drive from Modesto work, and is there a travel fee?',
    answer:
      'Sacramento is roughly 90 minutes north of our Modesto studio, a straight shot up Highway 99 — close enough that on-site days across the capital region are routine for us. A travel fee applies for on-site visits and is built into your quote up front. Individuals are also welcome to book a session at the studio, where you review and choose your images the same day.',
  },
  {
    question: 'Can you match a new hire to our team’s existing headshot look later?',
    answer:
      'Yes, and it matters most for firms and agencies where the directory has to stay consistent. We shoot to the same lighting, backdrop, and direction every time, so an attorney or staffer who starts mid-year is matched to the exact look of the team day — no mismatched square on the team page. Ask us about an annual program if you hire regularly.',
  },
  {
    question: 'We have a legislative bio or firm directory deadline. What’s your turnaround?',
    answer:
      'Studio sessions are delivered as professionally edited images within 48 hours, and on-site team days can deliver the same day. If a campaign launch, website relaunch, or directory update is driving the timeline, tell us the deadline and we’ll build the schedule around it.',
  },
  {
    question: 'Do you photograph healthcare teams on-site at Sacramento hospitals and clinics?',
    answer:
      'We do. Sacramento is a four-system healthcare region — Sutter Health, UC Davis Health, Kaiser Permanente, and Dignity Health — and clinical schedules don’t leave room to travel for a photo. We set up on-site so physicians, administrators, and staff can step in between shifts for an approachable, credible portrait, then get right back to work.',
  },
  {
    question: 'What does a Sacramento headshot session cost?',
    answer:
      'Individual studio sessions are $150, plus $150 per image you select — you only pay for the ones you love, with no package minimums. On-site team days for legislative offices, law firms, healthcare teams, and businesses are quoted by team size and scope. Contact us with your headcount and location for a clear quote.',
  },
];

function generateSacramentoFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sacramentoFaqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export const metadata: Metadata = {
  title: 'Professional Headshots Sacramento CA | Rojas Photography',
  description:
    'Professional headshots in Sacramento, CA for legislators, government officials, legal professionals & UC Davis Medical staff. 90 min from studio. $150 session. Book today.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/sacramento-headshots',
  },
  openGraph: {
    title: 'Professional Headshots in Sacramento, CA | Rojas Photography',
    description:
      'Authoritative corporate headshots for Sacramento legislators, government officials, legal professionals, healthcare workers & business executives. State capital quality.',
    url: 'https://rojasphotography.net/sacramento-headshots',
    type: 'website',
    images: [
      {
        url: '/images/Gina-0026 (1).jpg',
        width: 1200,
        height: 630,
        alt: 'Professional headshots Sacramento CA - Rojas Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Headshots in Sacramento, CA | Rojas Photography',
    description:
      'Professional headshots for Sacramento legislators, legal professionals & healthcare workers. $150 session fee. 90 minutes from Modesto.',
    images: ['/images/Gina-0026 (1).jpg'],
  },
};

export default function SacramentoHeadshotsPage() {
  return (
    <>
      <SchemaScript schema={generateSacramentoSchema()} />
      <SchemaScript schema={generateSacramentoServiceSchema()} />
      <SchemaScript schema={generateSacramentoFAQSchema()} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Sacramento Headshots', url: 'https://rojasphotography.net/sacramento-headshots' },
      ])} />
      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/Hero Image1.jpg"
          title="Professional Headshots in Sacramento, CA"
          tag="Serving Sacramento & the State Capital Region"
          fullHeight={false}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/discovery-call"
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
          {/* Intro Section */}
          <section className="py-20 md:py-28 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6 text-center">
                  Corporate Headshots for California&apos;s Capital City
                </h2>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-6 text-center">
                  Sacramento runs on credibility. It&apos;s the seat of a state government that employs more than 100,000 people, the headquarters city for Sutter Health, and home to the Downtown and Midtown law firms, government-affairs shops along K Street, and the UC Davis Health, Kaiser, and Dignity Health systems that anchor the region. In a city where a legislative bio, a firm directory, or a LinkedIn profile is often the first thing a constituent, client, or patient sees, a weak headshot is a liability you can&apos;t afford.
                </p>
                <p className="text-[var(--color-text-body)] leading-relaxed text-center">
                  We&apos;re Alfonso and Niomi Rojas. We drive up Highway 99 from our Modesto studio to photograph Sacramento&apos;s professionals — at the Capitol, in Midtown offices, out in the Roseville and Folsom tech corridor, and inside the hospitals and agencies that keep the region running. Book an individual session at our studio (about 90 minutes south), or have us bring the full studio to your office for a team day. Either way, you get the same coached, executive-level headshot — not a rushed snapshot.
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* Stats Bar */}
          <SectionReveal>
            <section className="py-12 px-8 bg-[var(--color-bg-warm)] border-y border-gray-100">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
                <div>
                  <p className="text-3xl font-bold text-[var(--color-primary)]">500+</p>
                  <p className="text-sm text-[var(--color-text-muted)]">Executives Photographed</p>
                </div>
                <div className="hidden md:block w-px h-10 bg-gray-200" />
                <div>
                  <p className="text-3xl font-bold text-[var(--color-primary)]">60+</p>
                  <p className="text-sm text-[var(--color-text-muted)]">Five-Star Reviews</p>
                </div>
                <div className="hidden md:block w-px h-10 bg-gray-200" />
                <div>
                  <p className="text-3xl font-bold text-[var(--color-primary)]">15+</p>
                  <p className="text-sm text-[var(--color-text-muted)]">Years Experience</p>
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

          {/* Services Section */}
          <section className="py-20 md:py-28 px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">
                    Photography Services Available in Sacramento
                  </h2>
                  <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                    Full-service corporate photography for Sacramento professionals — from individual executive headshots to Capitol office team photography and legislative event coverage.
                  </p>
                </div>
              </SectionReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Camera,
                    title: 'In-Studio Headshots',
                    desc: 'Executive headshot sessions at our premium Modesto studio, 90 minutes from Sacramento. Professional lighting, guided posing, real-time review, and 48-hour delivery.',
                    price: '$150 session + $150/image',
                    href: '/premium-headshots',
                    img: '/images/headshots/headshot-ceo-nutrition-02.jpg',
                    alt: 'Professional headshot session — Rojas Photography',
                  },
                  {
                    icon: Users,
                    title: 'On-Site Team Photography',
                    desc: 'We bring our full studio to your Sacramento location — Capitol office, law firm, UC Davis Medical Center, or your business. Efficient team photography without disrupting your operations. Travel fee applies.',
                    price: 'Custom pricing',
                    href: '/on-site-photography',
                    img: '/images/BB Individual Headshot Session.png',
                    alt: 'On-site team headshot photography',
                  },
                  {
                    icon: Building2,
                    title: 'Commercial Photography',
                    desc: 'Brand imagery, facility photography, product shots, and marketing visuals for Sacramento businesses, government agencies, legal firms, and healthcare institutions.',
                    price: 'Custom pricing',
                    href: '/commercial',
                    img: '/images/DoctorOffice 4.jpg',
                    alt: 'Commercial photography for businesses',
                  },
                  {
                    icon: Video,
                    title: 'Video Production',
                    desc: 'Corporate video content for Sacramento organizations — campaign videos, legislative content, client testimonials, educational videos, and FAA Part 107 certified drone footage.',
                    price: 'Custom pricing',
                    href: '/video',
                    img: '/images/BBSI-Corp-Video.jpg',
                    alt: 'Corporate video production',
                  },
                  {
                    icon: Star,
                    title: 'Event Photography',
                    desc: 'Professional coverage for Sacramento events — legislative sessions, Capitol receptions, legal conferences, healthcare fundraisers, and business gatherings. 24-48 hour turnaround.',
                    price: 'Custom pricing',
                    href: '/event-photography',
                    img: '/images/CLA AM 25 335.jpg',
                    alt: 'Corporate event photography coverage',
                  },
                  {
                    icon: Camera,
                    title: 'Headshot Booth',
                    desc: 'We set up a professional headshot station at your Sacramento event, Capitol office, law firm, or conference. High-volume, polished, and priced by the hour.',
                    price: 'Priced by the hour',
                    href: '/headshot-booth',
                    img: '/images/kaiser-bts-headshots1.jpeg',
                    alt: 'Headshot booth at corporate event',
                  },
                ].map((service) => (
                  <SectionReveal key={service.title}>
                    <Link href={service.href} aria-label={`Learn more about ${service.title}`} className="block group">
                      <div className="relative h-[380px] rounded-xl overflow-hidden hover:shadow-2xl transition-all">
                        <Image src={service.img} alt={service.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
                        <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform backdrop-blur-sm">
                            <service.icon className="text-white" size={24} aria-hidden="true" />
                          </div>
                          <h3 className="text-xl text-white mb-2">{service.title}</h3>
                          <p className="text-white/90 text-sm leading-relaxed mb-3">{service.desc}</p>
                          <p className="text-white/70 text-xs mb-3">{service.price}</p>
                          <span className="text-white font-semibold text-sm group-hover:underline">Learn More →</span>
                        </div>
                      </div>
                    </Link>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Sacramento sectors — unique local content */}
          <section className="py-20 md:py-28 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4 text-center">
                  The Sacramento Professionals We Photograph
                </h2>
                <p className="text-lg text-[var(--color-text-muted)] text-center mb-14 max-w-2xl mx-auto">
                  Every field in the capital region asks something a little different of a headshot. Here&apos;s how we approach the four worlds that define professional Sacramento.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-8">
                <SectionReveal>
                  <div className="bg-white rounded-xl p-8 h-full border border-gray-100">
                    <h3 className="text-xl text-[var(--color-primary)] mb-3">Government &amp; the Capitol</h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                      Legislators, agency directors, appointees, and government-affairs professionals need a portrait that reads as authoritative and trustworthy at a glance — because it lands on official directories, campaign material, and press pages where a constituent forms an opinion in seconds. We shoot for that: composed, credible, and consistent with the seriousness of public office. We can photograph individuals at our studio or run a headshot day at your Capitol-area office or agency.
                    </p>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="bg-white rounded-xl p-8 h-full border border-gray-100">
                    <h3 className="text-xl text-[var(--color-primary)] mb-3">Law Firms &amp; Legal</h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                      From large Downtown and Midtown firms to solo practitioners and lobbying shops, legal Sacramento lives or dies on a firm bio page that has to project competence and consistency across every attorney. We run team days that match every headshot to the same lighting and look — associate to managing partner — so your directory reads as one firm, not twelve different photographers. New hire mid-year? We match them to the exact look later.
                    </p>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="bg-white rounded-xl p-8 h-full border border-gray-100">
                    <h3 className="text-xl text-[var(--color-primary)] mb-3">Healthcare</h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                      Sacramento is a four-system healthcare town — Sutter Health is headquartered here, alongside UC Davis Health, Kaiser Permanente, and Dignity Health. Physicians, administrators, and healthcare executives need approachable-yet-credible portraits for provider directories, referral networks, and leadership pages. We bring the studio on-site so busy clinical teams get photographed between shifts, without leaving the building.
                    </p>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="bg-white rounded-xl p-8 h-full border border-gray-100">
                    <h3 className="text-xl text-[var(--color-primary)] mb-3">Tech &amp; Business</h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                      The Roseville–Folsom corridor and the wider Sacramento business community — from the Intel campus in Folsom to fast-growing firms across Placer County, Rancho Cordova, and Elk Grove — need modern, polished team headshots for websites, sales decks, and LinkedIn. We handle the whole team in one visit and deliver a consistent set your marketing team can use the same day.
                    </p>
                  </div>
                </SectionReveal>
              </div>
              <SectionReveal>
                <p className="text-[var(--color-text-body)] leading-relaxed mt-12 text-center max-w-3xl mx-auto">
                  <strong>Getting to you is simple.</strong> Sacramento is a straight shot up Highway 99 from our Modesto studio — close enough that on-site team days across Downtown, Midtown, Roseville, Folsom, Elk Grove, and Rancho Cordova are routine for us, and far enough that we plan the logistics so your day runs on schedule. Individuals are welcome to book a session at the studio; teams almost always have us come to them.
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* Why Sacramento Professionals Choose Us */}
          <section className="py-20 md:py-28 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">
                    Why Sacramento Professionals Choose Us
                  </h2>
                </div>
              </SectionReveal>

              <div className="grid md:grid-cols-2 gap-10">
                {[
                  {
                    title: 'We Understand Executive Presence and Authority',
                    desc: 'From state legislators and government officials to legal professionals and healthcare executives, we know your headshot has to communicate authority, expertise, and trustworthiness. Our 15+ years of corporate leadership experience shows in every session — we direct you into the posture and expression that project the credibility your position demands.',
                  },
                  {
                    title: 'Premium Studio, or We Come to You',
                    desc: 'Our Modesto studio offers premium lighting and a controlled environment for executive headshots that stand out (about 90 minutes from Sacramento). For busy legislative offices, law firms, healthcare teams, or corporate groups, we bring the full studio to your Sacramento location — efficient, professional, and convenient.',
                  },
                  {
                    title: 'Trusted by Government and Legal Professionals',
                    desc: 'We\'ve photographed 500+ executives and professionals across government, legal, healthcare, and business sectors. Sacramento legislators, lobbyists, attorneys, and healthcare leaders trust us because we understand the professional standards required in high-stakes fields. Your reputation matters — we deliver imagery that supports it.',
                  },
                  {
                    title: 'Fast Turnaround for Busy Professionals',
                    desc: 'Sacramento professionals work on tight deadlines. Most clients receive professionally edited headshots within 48 hours. On-site team photography delivers the same day. Campaign launch? New website? Firm directory update? We deliver professional imagery when you need it, without compromising quality.',
                  },
                ].map((item) => (
                  <SectionReveal key={item.title}>
                    <div className="flex gap-4">
                      <CheckCircle2
                        size={22}
                        className="text-[var(--color-primary)] flex-shrink-0 mt-1"
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="text-[var(--color-text-dark)] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Preview */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center mb-12 text-[var(--color-text-dark)]">
                  Our Work
                </h2>
              </SectionReveal>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { src: '/images/Gina-0026 (1).jpg', alt: 'Professional headshot - Sacramento executive woman' },
                  { src: '/images/Miguel-(2 of 6) (1).jpg', alt: 'Business headshot - Sacramento professional man' },
                  { src: '/images/Joyce-0029.jpg', alt: 'Corporate headshot - Sacramento executive woman' },
                ].map((img) => (
                  <SectionReveal
                    key={img.src}
                    className="img-hover-zoom rounded-xl overflow-hidden aspect-[3/4] relative"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* SB7: Success Vision */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">
                  Imagine a Profile Photo That Communicates Your Authority Before You Say a Word
                </h2>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed max-w-2xl mx-auto">
                  Imagine walking into a meeting, a legislative session, or a courtroom knowing your online image already has people&apos;s trust. That&apos;s what a great headshot does — and that&apos;s exactly what we deliver for Sacramento professionals who can&apos;t afford to leave a weak first impression.
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center mb-16 text-[var(--color-text-dark)]">
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

          {/* FAQ */}
          <FAQSection
            faqs={sacramentoFaqs}
            heading="Sacramento Headshot Questions Answered"
          />

          <CTASection
            heading="Ready to Book Your Sacramento Headshot Session?"
            subheading="Join 500+ Central Valley professionals who trust Rojas Photography. Premium studio in Modesto (90 min away) or on-site at your Sacramento location."
          />
        </main>
      </div>
    </>
  );
}
