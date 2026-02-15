import type { Metadata } from 'next';
import Image from 'next/image';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';

export const metadata: Metadata = {
  title: 'Our Work & Services | Rojas Photography',
  description:
    'Explore our professional photography services: corporate headshots, on-site photography, commercial, video production, and event coverage in Modesto and Central Valley.',
};

const services = [
  {
    title: 'In-Studio Headshots',
    description:
      'Guided, professional headshot sessions in our Modesto studio with real-time coaching and image selection. $150 session + $150/image.',
    href: '/premium-headshots',
    image: '/images/individual Headshot Website.png',
    imageAlt: 'Professional in-studio corporate headshot',
  },
  {
    title: 'On-Site Photography',
    description:
      'We bring our complete studio setup to your office for team headshots, group portraits, and corporate photography.',
    href: '/on-site-photography',
    image: '/images/BB Individual Headshot Session.png',
    imageAlt: 'On-site corporate headshot session',
  },
  {
    title: 'Commercial Photography',
    description:
      'Brand imagery, product photography, architectural shots, and marketing visuals that tell your business story.',
    href: '/commercial',
    image: '/images/MOVE Stanislaus-(3 of 28).jpg',
    imageAlt: 'Commercial photography for business',
  },
  {
    title: 'Video Production',
    description:
      'Corporate videos, client testimonials, aerial drone videography, and promotional content. Part 107 certified.',
    href: '/video',
    image: '/images/BBSI-Corp-Video.jpg',
    imageAlt: 'Corporate video production',
  },
  {
    title: 'Event Photography',
    description:
      'Professional coverage for conferences, galas, fundraisers, product launches, and corporate gatherings.',
    href: '/event-photography',
    image: '/images/CLA AM 25 201.jpg',
    imageAlt: 'Corporate event photography',
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Our Work"
        subtitle="Professional photography and video services for businesses and executives across the Central Valley."
        gradient
      />

      <main id="main-content">
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
                  Services
                </h2>
                <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
                  From executive headshots to event coverage, we deliver professional imagery that elevates your brand.
                </p>
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <SectionReveal key={service.href}>
                  <ServiceCard {...service} />
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          heading="Ready to Get Started?"
          subheading="Let's discuss your photography needs and create a plan that works for your business."
        />
      </main>
    </div>
  );
}
