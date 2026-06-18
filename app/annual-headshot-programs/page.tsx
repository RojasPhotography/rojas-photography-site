import type { Metadata } from 'next';
import Link from 'next/link';
import { Palette, UserPlus, RefreshCw, CalendarClock, Building2, Wallet } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'What is an annual headshot program?',
    answer:
      'An annual headshot program is a managed, recurring arrangement where we handle your company\'s headshots over time instead of one booking at a time. We agree on a consistent look and a schedule up front, photograph new hires as they join, and refresh the whole team on a regular cadence — so everyone matches and nothing falls out of date.',
  },
  {
    question: 'How does pricing work for a headshot program?',
    answer:
      'Programs are quoted annually based on your team size, number of locations, how often you want sessions, and your expected new-hire volume. You get predictable, fixed pricing for the year instead of negotiating every booking — which makes it easy to budget and easy to renew. Contact us with your details for a program quote.',
  },
  {
    question: 'How do you keep new hires consistent with the rest of the team?',
    answer:
      'At the start of the program we lock in a documented style guide — background, lighting, framing, and retouching. Every session afterward follows the same recipe, so a headshot taken next quarter matches one taken today. New hires can be photographed on-site, in our Modesto studio, or batched on a monthly cadence.',
  },
  {
    question: 'How often do you photograph our team?',
    answer:
      'Most programs run new-hire sessions on a monthly or quarterly cadence, plus one full-team refresh each year. We tailor the schedule to your hiring pace and your locations — the goal is that no one waits long for a professional headshot and your directory never drifts out of date.',
  },
  {
    question: 'Do you run programs on-site or in-studio?',
    answer:
      'Both. We bring our complete professional studio — lighting, backdrops, and cameras — to your office for team days and large refreshes. Between sessions, individuals and new hires are welcome at our Modesto studio. You choose whatever is most convenient for your team throughout the year.',
  },
];

export const metadata: Metadata = {
  title: 'Annual Headshot Programs for Companies | Rojas Photography',
  description:
    "Keep your team's headshots consistent year-round — new hires photographed on day one, scheduled refreshes, and one locked-in look. Modesto & Central Valley.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/annual-headshot-programs',
  },
  openGraph: {
    title: 'Annual Headshot Programs for Companies | Rojas Photography',
    description:
      'A managed corporate headshot program for growing teams — consistent look, new-hire coverage, and an annual refresh across Modesto and Central Valley.',
    url: 'https://rojasphotography.net/annual-headshot-programs',
    type: 'website',
    images: [
      {
        url: '/images/Move Staff Group 9.jpg',
        alt: 'Annual corporate headshot program team session - Modesto photographer',
      },
    ],
  },
};

export default function AnnualHeadshotProgramsPage() {
  return (
    <>
      <SchemaScript schema={generateServiceSchema({
        name: 'Annual Headshot Programs',
        description: 'Managed, recurring corporate headshot programs for companies in Modesto and Central Valley — a consistent look, new-hire coverage, and an annual team refresh.',
        url: 'https://rojasphotography.net/annual-headshot-programs',
        image: 'https://rojasphotography.net/images/Move Staff Group 9.jpg',
      })} />
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Annual Headshot Programs', url: 'https://rojasphotography.net/annual-headshot-programs' },
      ])} />

      <div className="min-h-screen bg-white">
        {/* Hero - SB7: A Character */}
        <HeroSection
          image="/images/Move Staff Group 9.jpg"
          title="Keep Your Team Looking Consistent — Every Hire, Every Year."
          tag="Annual Headshot Programs | Modesto & Central Valley"
          objectPosition="50% 30%"
          fullHeight
        >
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            A managed headshot program for growing companies. We lock in your look, photograph new hires as they join, and refresh the whole team on a schedule — so your directory and website always match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact-quote"
              className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Get a program quote
            </Link>
            <Link
              href="/discovery-call"
              className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Schedule a discovery call
            </Link>
          </div>
        </HeroSection>

        {/* Problem - SB7: Has a Problem */}
        <section className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-8">
                Team Photos Drift Out of Sync — Fast
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-[var(--color-text-body)] leading-relaxed">
                <div>
                  <p className="mb-4">
                    New hires show up to the directory with a phone selfie. Last year&apos;s headshots were shot against a different background. Half your team page is current, half is three years old.
                  </p>
                  <p className="mb-4">
                    And every time you decide to fix it, you start the whole coordination project over from scratch — chasing schedules, comparing photographers, re-explaining what you need.
                  </p>
                </div>
                <div>
                  <p className="mb-4">
                    The result is a team page that looks pieced together, and a brand that reads inconsistent to the clients and candidates judging you by it.
                  </p>
                  <p className="mb-4 font-semibold text-[var(--color-text-dark)]">
                    Keeping everyone consistent shouldn&apos;t mean re-running the entire project every single year.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Guide - SB7: Meets a Guide */}
        <section className="py-16 md:py-20 px-8 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
                  We Make Consistency the Default
                </h2>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>
                    We&apos;re Alfonso and Niomi Rojas. We&apos;ve photographed 500+ professionals and run on-site headshot days for law firms, healthcare organizations, and corporate teams across the Central Valley.
                  </p>
                  <p className="font-semibold text-[var(--color-text-dark)]">
                    An annual program takes the recurring headshot problem off your plate entirely — one documented look, one point of contact, and one predictable plan for the whole year.
                  </p>
                  <p>
                    You stop thinking about headshots, and your team always looks like it belongs together — on your website, your directory, and every LinkedIn profile that represents your brand.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        <main id="main-content">
          {/* Plan - SB7: Who Gives Them a Plan */}
          <section className="py-20 md:py-28 px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-5xl font-bold text-center text-[var(--color-text-dark)] mb-16">
                  How an Annual Program Works
                </h2>
              </SectionReveal>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    n: '1',
                    title: 'Lock In Your Look',
                    desc: 'We define your background, lighting, crop, and retouching up front and document it as a style guide. Every session afterward follows the same recipe, so photos taken months apart still match.',
                  },
                  {
                    n: '2',
                    title: 'Photograph On Your Schedule',
                    desc: 'We set a cadence that fits your hiring pace — monthly or quarterly new-hire sessions, plus an annual full-team refresh — on-site at your office or in our Modesto studio.',
                  },
                  {
                    n: '3',
                    title: 'Managed, Consistent Delivery',
                    desc: 'Edited images land in one organized gallery, named and ready for your directory, website, and LinkedIn — with the same turnaround, every single time.',
                  },
                ].map((step) => (
                  <SectionReveal key={step.n}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                        {step.n}
                      </div>
                      <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">{step.title}</h3>
                      <p className="text-[var(--color-text-body)] leading-relaxed">{step.desc}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* What's Included */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-16 text-center">
                  What Every Program Includes
                </h2>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-10">
                {[
                  { icon: Palette, title: 'A Documented Style Guide', desc: 'Background, lighting, framing, and retouching locked in — so every headshot matches, this year and next.' },
                  { icon: UserPlus, title: 'New-Hire Coverage', desc: 'New employees photographed on a regular cadence, so no one is stuck with a placeholder or a phone selfie in the directory.' },
                  { icon: RefreshCw, title: 'Annual Team Refresh', desc: 'A scheduled full-team session each year keeps your entire directory and website current.' },
                  { icon: CalendarClock, title: 'Priority Scheduling', desc: 'Program clients get first access to our calendar and faster booking around hiring spikes and deadlines.' },
                  { icon: Building2, title: 'On-Site or In-Studio', desc: 'We bring the full studio to your office for team days; individuals and new hires are welcome at our Modesto studio in between.' },
                  { icon: Wallet, title: 'Predictable Annual Pricing', desc: 'One fixed program quote for the year instead of negotiating every booking — simple to budget and simple to renew.' },
                ].map((item) => (
                  <SectionReveal key={item.title}>
                    <div className="flex gap-4">
                      <item.icon size={24} className="text-[var(--color-primary)] flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <h3 className="font-bold text-[var(--color-text-dark)] mb-2">{item.title}</h3>
                        <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Who it's for */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
                  Built for Teams That Keep Growing
                </h2>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed">
                  Annual programs fit law firms adding associates, healthcare groups onboarding clinicians, financial and professional-services firms, agencies, and any Central Valley organization that hires year-round and cares how its people show up online. If you&apos;re photographing more than a handful of new faces a year, a program is almost always simpler — and more consistent — than booking each one separately.
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* Early CTA band */}
          <section className="py-12 px-8 bg-[var(--color-primary-dark)] text-center">
            <div className="max-w-2xl mx-auto">
              <SectionReveal>
                <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed">
                  Stop re-running the team-photo project every year. Set it once, keep it consistent.
                </p>
                <Link
                  href="/contact-quote"
                  className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                >
                  Get a program quote
                </Link>
              </SectionReveal>
            </div>
          </section>

          {/* Testimonial */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-3xl mx-auto">
              <SectionReveal>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
                    A Team That Looks the Part — Consistently
                  </h2>
                  <p className="text-lg text-[var(--color-text-muted)]">
                    Here&apos;s what working with us looks like for a corporate team.
                  </p>
                </div>
                <TestimonialCard
                  name="Kaiser Business Campus, Pleasanton"
                  role="Admin Specialist"
                  quote="With very short notice, Alfonso from Rojas Photography was able to provide a quote and take our Innovations team's headshots and group photo. Alfonso and Niomi were amazing! They were complete pros, putting all of us at ease and getting some very good-looking photos - in real time! Our team could not be more satisfied with the work provided."
                />
              </SectionReveal>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection faqs={faqs} heading="Annual Program Questions" />

          {/* Closing CTA */}
          <CTASection
            heading="Let's Build Your Program"
            subheading="Tell us your team size, locations, and hiring pace — we'll put together a simple annual plan and a fixed quote, with zero obligation."
            primaryHref="/contact-quote"
            primaryLabel="Get a program quote"
          />
        </main>
      </div>
    </>
  );
}
