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
import DefinitionBox from '../components/DefinitionBox';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';
import { serviceDefinitions, statistics } from '../lib/definitions';

const faqs = [
  {
    question: 'How does on-site corporate photography work?',
    answer:
      'I schedule a date with your organization, arrive with a complete professional studio (lighting rigs, backdrops, cameras), and photograph your team at your location. For teams of 10+, I set up a custom scheduling system so employees can book their own time slots. Each person receives individual coaching and guided attention — not a rushed assembly line. Photos are professionally edited and delivered within 24 hours via a private online gallery.',
  },
  {
    question: 'Do you bring a full studio setup on-site?',
    answer:
      'Yes. I bring professional lighting rigs, quality backdrops, high-end cameras, and all necessary gear. I handle setup and breakdown completely so your team doesn\'t need to travel to a studio and you don\'t need to manage a thing. All you need is a reasonably sized space at your location.',
  },
  {
    question: 'How is on-site photography priced?',
    answer:
      'On-site photography is priced per person, reflecting the individual time and coaching each employee receives. This is different from a headshot booth (which is priced by the hour for high-volume events). For a custom quote based on your team size and location, contact me directly.',
  },
  {
    question: 'What\'s the difference between on-site photography and a headshot booth?',
    answer:
      'On-site photography is a contracted session where I come to your organization and spend individual time with each employee — coaching posture, expression, and angles to get the best possible result. It\'s priced per person. A headshot booth is designed for events and expos where the goal is moving a large group through efficiently — priced by the hour. If you\'re not sure which fits your need, reach out and I\'ll help you figure it out.',
  },
  {
    question: 'Can we do team group photos in addition to individual headshots?',
    answer:
      'Absolutely. Most organizations invest in both — individual headshots for company directories and LinkedIn, plus a professional group photo for the website and marketing materials. I handle both in the same session so nothing gets scheduled separately.',
  },
];


export const metadata: Metadata = {
  title: 'On-Site Corporate Headshots | We Come to You | Modesto CA',
  description:
    'Full studio at your office. Every person coached individually — headshots and team photos delivered the same day. No travel required. Modesto & Central Valley.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/on-site-photography',
  },
  openGraph: {
    title: 'On-Site Corporate Headshots | We Come to Your Office | Rojas Photography',
    description:
      'We bring professional lighting, backdrops, and coaching to your location. Individual headshots and team photos — every person coached, delivered the same day. Modesto & Central Valley.',
    url: 'https://rojasphotography.net/on-site-photography',
    type: 'website',
    images: [
      {
        url: '/images/BB Individual Headshot Session.png',
        alt: 'On-site corporate headshot session - Modesto photographer',
      },
    ],
  },
};

export default function OnSitePhotographyPage() {
  return (
    <>
      <SchemaScript schema={generateServiceSchema({
        name: 'On-Site Corporate Photography',
        description: 'Professional on-site headshots, team photography, and corporate photography at your location in Modesto and Central Valley.',
        url: 'https://rojasphotography.net/on-site-photography',
        image: 'https://rojasphotography.net/images/BB Individual Headshot Session.png',
      })} />
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'On-Site Photography', url: 'https://rojasphotography.net/on-site-photography' },
      ])} />
      <div className="min-h-screen bg-white">
      {/* Hero Section - SB7: A Character */}
      <HeroSection
        image="/images/Move Staff Group 9.jpg"
        title="Coordinating Team Headshots Shouldn't Be a Logistics Nightmare."
        tag="Professional On-Site Photography | Modesto, CA"
        objectPosition="50% 20%"
        fullHeight
      >
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          We bring our complete professional studio to your office in Modesto and Central Valley—so your team gets consistent, professional headshots without disrupting their workday or traveling to a studio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            href="/contact-quote"
            className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
          >
            Request a Quote
          </Link>
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
              Coordinating Team Photos Is a Headache
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-[var(--color-text-body)] leading-relaxed">
              <div>
                <p className="mb-4">
                  You need updated headshots for your entire team. But coordinating 20, 30, or 50+ people to travel to a studio? That's a logistics nightmare.
                </p>
                <p className="mb-4">
                  Employees have to block out time, drive across town, and disrupt their workday. Sessions scheduled over multiple days lead to inconsistent lighting and backgrounds. Some people never schedule at all, leaving you with outdated or missing headshots.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Meanwhile, your website shows team photos from 3 years ago. New employees don't have professional headshots. Your brand looks inconsistent and unprofessional.
                </p>
                <p className="mb-4 font-semibold text-[var(--color-text-dark)]">
                  Getting professional team headshots shouldn't require herding cats or disrupting an entire workday.
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
                I Know How Much Goes Into Coordinating This
              </h2>
              <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                <p>
                  Wrangling a team of 20, 30, or 50+ people for photos is no small task — especially when everyone is busy and nobody wants to leave the office. I've seen how disruptive it gets, and I built my on-site service specifically to take that burden off your plate.
                </p>
                <p className="font-semibold text-[var(--color-text-dark)]">
                  I'm Alfonso Rojas. I bring a complete professional studio — lighting, backdrops, cameras, everything — directly to your location. Your team stays at work, I come to them, and we move through efficiently without derailing anyone's day.
                </p>
                <p>
                  I've photographed 500+ professionals across the Central Valley — law firms, healthcare organizations, corporate offices, school districts — and with 15+ years in corporate leadership, I understand how to operate inside a business environment without disrupting it.
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
                How I Work With Your Team
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <SectionReveal>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">
                    Discovery & Planning
                  </h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    I start by learning your team size, location, timeline, and what you need the photos for. For teams of 10+, I set up an online scheduling system so employees can book their own time slots without you having to coordinate every one.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">
                    On-Site Setup & Sessions
                  </h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    I arrive, set up the full studio at your location, and your team comes to me throughout the day — no travel, no disruption. I coach everyone through posing so results are consistent across your entire organization.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">
                    Immediate Delivery
                  </h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    Professionally edited images delivered the same day via online private gallery. Your team can download photos immediately for LinkedIn, your website, and all marketing materials.
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
                Stop coordinating travel to studios. I come to you.
              </p>
              <Link
                href="/contact-quote"
                className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
              >
                Request a Quote
              </Link>
            </SectionReveal>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-text-dark)]">Professional On-Site Photography Services in Modesto</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { src: '/images/BB Individual Headshot Session.png', alt: 'On-site individual headshot session', label: 'On-Site Headshots', objectPosition: 'center 40%' },
                { src: '/images/Move Staff Group 9.jpg', alt: 'Team and group photos', label: 'Team Photos', objectPosition: 'center' },
                { src: '/images/Marily4170.jpg', alt: 'Business photography at client location', label: 'Corporate Photography', objectPosition: 'center 30%' },
              ].map((img) => (
                <SectionReveal key={img.label} className="relative rounded-xl overflow-hidden h-96 group">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: img.objectPosition }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 className="text-white text-2xl font-bold">{img.label}</h3>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stakes Section - SB7: Helps Avoid Failure */}
        <section className="py-16 px-8 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
                Inconsistent Team Photos Hurt Your Brand
              </h2>
              <div className="text-lg text-[var(--color-text-body)] leading-relaxed space-y-4">
                <p>
                  When your team headshots are inconsistent—different lighting, different backgrounds, different quality—your brand looks unprofessional. Potential clients notice. Employees notice.
                </p>
                <p>
                  Outdated or missing headshots make your organization look out-of-touch. New hires without professional photos send the wrong message. Your website's "Meet the Team" page becomes a liability instead of an asset.
                </p>
                <p>
                  Meanwhile, you're wasting hours coordinating travel to studios, chasing down employees who haven't scheduled yet, and paying premium studio prices for each individual session.
                </p>
                <p className="font-semibold text-[var(--color-text-dark)]">
                  Your team deserves consistent, professional imagery that reflects the quality of your organization.
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
                Ready for Consistent Team Headshots?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Get a custom quote for your organization. I'll bring my professional studio to your office and photograph your entire team efficiently — with zero travel required on their end.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-quote"
                  className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                >
                  Request a Quote
                </Link>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-16 text-center">What&apos;s Included</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-10 mb-16">
              {[
                { title: 'Full Studio Setup at Your Location', desc: 'I bring my complete professional studio to your office — all equipment, lighting, and direction. No one on your team needs to leave the building.' },
                { title: 'Individual Headshots & Team Photos', desc: 'Individual executive headshots, team portraits, group photos, and building photography if needed. I handle everything with expert guidance so you don\'t have to manage a thing.' },
                { title: 'Custom Employee Scheduling', desc: 'For organizations with 10+ employees, I create a custom online calendar so your team members can book their own time slots — no back-and-forth coordination needed.' },
                { title: 'Real-Time Coaching for Every Person', desc: 'I coach each person through posing and expression as we shoot. Everyone sees their photos in real-time so there are no surprises at delivery.' },
                { title: 'No Disruption to Your Workday', desc: 'I set up, work efficiently, and break down — all while your business keeps running. Employees step away for 10-15 minutes and get back to work.' },
                { title: 'Delivered Same Day', desc: 'Every image is professionally edited and delivered via private online gallery the same day — ready for LinkedIn, your website, and marketing materials.' },
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
                <p className="text-[var(--color-text-body)] mb-6">Custom pricing based on your organization&apos;s size and photography needs.</p>
                <Link
                  href="/contact-quote"
                  className="btn-primary px-8 py-3 text-base font-semibold rounded-full inline-block"
                >
                  Get Your Quote
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text-dark)]">See Us In Action</h2>
              <div className="flex justify-center">
                <div style={{ maxWidth: '360px', width: '100%' }}>
                  <iframe width="100%" height="640" src="https://www.youtube.com/embed/1eTNLV6G0dM" title="Rojas Photography On-Site Corporate Headshots" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-xl" />
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Behind the Scenes */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text-dark)]">Behind-the-Scenes</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { src: '/images/Kaiser BTS Headshots.png', alt: 'Behind the scenes at Kaiser on-site headshots' },
                { src: '/images/EsmilcoBTS.png', alt: 'Behind the scenes at on-site session' },
                { src: '/images/Mayor RIverbank BTS.png', alt: 'Behind the scenes at Riverbank Mayor session' },
              ].map((img) => (
                <SectionReveal key={img.src} className="img-hover-zoom rounded-xl overflow-hidden h-64 relative">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">Imagine Your Entire Team Updated by Tomorrow</h2>
                <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                  Consistent headshots across every employee. A &quot;Meet the Team&quot; page you&apos;re proud to send clients to. New hires photographed the same day they start. Here&apos;s what that looks like for organizations I&apos;ve worked with.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal>
              <TestimonialCard
                name="Kaiser Business Campus, Pleasanton"
                role="Admin Specialist"
                quote="With very short notice, Alfonso from Rojas Photography was able to provide a quote and take our Innovations team's headshots and group photo. Alfonso and Niomi were amazing! They were complete pros, putting all of us at ease and getting some very good-looking photos - in real time! Our team could not be more satisfied with the work provided."
              />
            </SectionReveal>
          </div>
        </section>

        {/* Final CTA Before FAQ */}
        <section className="py-12 px-8 bg-[var(--color-bg-warm)] text-center">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-dark)] mb-4">
                Your Team Deserves Professional Headshots
              </h2>
              <p className="text-[var(--color-text-body)] mb-6 leading-relaxed">
                Join hundreds of Central Valley organizations who&apos;ve trusted me to handle their team photography efficiently and professionally. Consistent team imagery is one quote away.
              </p>
              <Link
                href="/contact-quote"
                className="btn-primary px-10 py-4 text-lg font-semibold rounded-full inline-block"
              >
                Request a Quote
              </Link>
            </SectionReveal>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          faqs={faqs}
          heading="On-Site Photography Questions"
        />

        <CTASection
          heading="Ready to Bring Professional Photography On-Site?"
          subheading="Let us handle your team's professional headshots and corporate photography at your location."
          primaryHref="/contact-quote"
          primaryLabel="Request a Quote"
        />
      </main>
      </div>
    </>
  );
}
