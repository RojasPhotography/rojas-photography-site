import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'What is an annual headshot program?',
    answer:
      'It is a standing agreement where we become your firm’s headshot partner year over year. We photograph your whole team on a scheduled day each year for one consistent look, and we photograph new hires individually as they join — so your directory, website, and LinkedIn profiles always match, no matter when someone started.',
  },
  {
    question: 'How does the annual team day work?',
    answer:
      'We come to your office and set up a complete professional studio. Each person gets a coached, unhurried session — about 15 minutes each — so everyone looks their best, not rushed. A half day covers up to 16 people; a full day covers up to 32. Same lighting, same backdrop, same direction for every person, so the whole team looks cohesive.',
  },
  {
    question: 'What happens when we hire someone new?',
    answer:
      'Between your annual team days, new hires are photographed individually at a flat $300 per person, which includes one final edited image shot to your program’s exact look. It is pay-as-you-go — no bundle to track, no obligation — so your directory stays current as your team grows.',
  },
  {
    question: 'How much does an annual headshot program cost?',
    answer:
      'The annual team day is $2,500 for a half day (up to 16 people) or $5,000 for a full day (up to 32 people). New-hire sessions between days are $300 per person, including one edited image. Pricing is a flat, transparent agreement sized to your team — no packages or surprise fees. A full team day works out to roughly $156 per person.',
  },
  {
    question: 'Do all the headshots really match?',
    answer:
      'Yes — that is the entire point. We shoot every session to the same lighting, backdrop, and direction, whether it is the partner who has been with you ten years or the associate who started Tuesday. Consistency across your team page is the reason the program exists.',
  },
  {
    question: 'What if we have a large all-hands with 50 or more people?',
    answer:
      'For high-volume days where the goal is moving a large group through efficiently, we offer a headshot booth format priced by the hour — everyone still walks away with a great photo, just at a faster pace. Many firms combine the two: a coached day for leadership and a booth for the wider staff, all matched to the same look.',
  },
];

export const metadata: Metadata = {
  title: 'Annual Headshot Programs for Companies | Rojas Photography Modesto',
  description:
    'Keep your team’s headshots consistent year over year. Annual on-site team days plus pay-as-you-go new-hire sessions for law, medical, and financial firms across Modesto and the Central Valley.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/annual-headshot-programs',
  },
  openGraph: {
    title: 'Annual Headshot Programs for Companies | Rojas Photography',
    description:
      'A standing headshot partner for your firm — one consistent look across your whole team, with new hires photographed as they join. Modesto & Central Valley.',
    url: 'https://rojasphotography.net/annual-headshot-programs',
    type: 'website',
    images: [
      {
        url: '/images/Move Staff Group 9.jpg',
        alt: 'A Central Valley company team photographed by Rojas Photography',
      },
    ],
  },
};

const included = [
  { title: 'A Scheduled Team Day Each Year', desc: 'We come to your office once a year and refresh your entire team in one visit — coached, unhurried, everyone looking their best.' },
  { title: 'New Hires Photographed as They Join', desc: 'Pay-as-you-go individual sessions keep your directory current between team days. No one waits a year for a professional photo.' },
  { title: 'Self-Scheduling, Fully Managed', desc: 'Your team books their own sessions through an online calendar, and we handle every reminder and confirmation. You coordinate nothing — we manage all the communication.' },
  { title: 'One Consistent Look, Every Time', desc: 'Same lighting, backdrop, and direction across every person — so your team page looks cohesive from the first hire to the newest.' },
  { title: 'Complete Studio, Brought to You', desc: 'Professional lighting, backdrops, and cameras set up at your office. All you need is a 10x10 space and access to power — we handle the rest.' },
  { title: 'Individual Coaching for Everyone', desc: 'Every person gets real-time direction on posing and expression — even executives who dread the camera walk away confident.' },
  { title: 'Same-Day Delivery', desc: 'Edited images delivered the same day via a private online gallery, ready for your directory, website, and LinkedIn.' },
];

export default function AnnualHeadshotProgramsPage() {
  return (
    <>
      <SchemaScript schema={generateServiceSchema({
        name: 'Annual Headshot Programs for Companies',
        description: 'Recurring corporate headshot programs for law, medical, and financial firms in Modesto and the Central Valley. Annual on-site team days plus pay-as-you-go new-hire sessions for a consistent team look.',
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
          title="Keep Every Headshot on Your Team Consistent — Year After Year."
          tag="Annual Headshot Programs | Modesto & Central Valley"
          objectPosition="center 35%"
          fullHeight
        >
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            We become your firm&rsquo;s standing headshot partner — refreshing your whole team once a year and photographing new hires as they join, so your directory always matches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact-quote"
              className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Request Your Program Quote
            </Link>
            <Link
              href="/discovery-call"
              className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Schedule a Discovery Call
            </Link>
          </div>
        </HeroSection>

        {/* Problem - SB7: Has a Problem */}
        <section className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-8">
                Your Team Page Tells a Story — Make Sure It&rsquo;s the Right One
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-[var(--color-text-body)] leading-relaxed">
                <div>
                  <p className="mb-4">
                    One headshot was taken in a studio. Another is a cropped phone photo from a conference. A third is five years old. And your three newest hires? No professional photo at all.
                  </p>
                  <p className="mb-4">
                    Every prospective client, recruit, and referral partner who visits your directory sees that patchwork — and quietly reads it as &ldquo;this firm doesn&rsquo;t sweat the details.&rdquo;
                  </p>
                </div>
                <div>
                  <p className="mb-4">
                    The problem isn&rsquo;t any one photo — it&rsquo;s that keeping a growing team consistent feels like a project no one owns. So it never happens, and the inconsistency compounds with every new hire.
                  </p>
                  <p className="mb-4 font-semibold text-[var(--color-text-dark)]">
                    A directory where every face matches signals a firm that&rsquo;s buttoned-up, established, and worth trusting.
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
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">
                  We Make Consistency Someone&rsquo;s Job — Ours
                </h2>
                <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p>
                    We&rsquo;re Alfonso and Niomi Rojas. We&rsquo;ve photographed 500+ professionals across the Central Valley — attorneys, physicians, executives, and financial advisors — and we&rsquo;ve seen how quickly a team&rsquo;s directory drifts out of sync as people come and go.
                  </p>
                  <p className="font-semibold text-[var(--color-text-dark)]">
                    An annual program takes that off your plate for good. We handle the scheduling, the setup, the coaching, and the delivery — and we shoot every session to the same look, so your team stays consistent without anyone at your firm having to manage it.
                  </p>
                  <p>
                    With 15+ years in corporate leadership between us, we understand how firms run and how to work inside them without creating a disruption.
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
                <h2 className="text-3xl md:text-5xl text-center text-[var(--color-text-dark)] mb-16">
                  How the Program Works
                </h2>
              </SectionReveal>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { n: '1', title: 'One Team Day a Year', desc: 'We come to your office and photograph your whole team in a single visit — coached, consistent, everyone refreshed to the same look.' },
                  { n: '2', title: 'New Hires as They Join', desc: 'Between team days, new hires are photographed individually at a flat per-person rate, shot to your program’s exact look. Your directory never falls behind.' },
                  { n: '3', title: 'Always Matched', desc: 'Same lighting, backdrop, and direction every time. Ten-year partner or Tuesday’s new associate — on your team page, they look like one cohesive firm.' },
                ].map((s) => (
                  <SectionReveal key={s.n}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>{s.n}</div>
                      <h3 className="text-xl text-[var(--color-text-dark)] mb-4">{s.title}</h3>
                      <p className="text-[var(--color-text-body)] leading-relaxed">{s.desc}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Hands-off scheduling — the managed-service differentiator */}
          <section
            className="py-20 px-8 text-center"
            style={{ background: 'radial-gradient(90% 140% at 50% -30%, rgba(255,255,255,.1), transparent 60%), linear-gradient(160deg, var(--color-primary) 0%, var(--color-primary-dark) 80%)' }}
          >
            <div className="max-w-3xl mx-auto text-white">
              <SectionReveal>
                <p className="text-[var(--color-primary-light)] font-semibold text-xs md:text-sm tracking-[0.22em] uppercase mb-5">Fully Managed</p>
                <h2 className="text-3xl md:text-4xl mb-6">Your Team Books Themselves. You Do Nothing.</h2>
                <p className="text-lg text-white/90 leading-relaxed mb-4">
                  Every program includes an online scheduling calendar — your people pick their own time, and we handle every invitation, reminder, confirmation, and follow-up directly with them.
                </p>
                <p className="text-lg text-white/90 leading-relaxed mb-9">
                  No spreadsheets, no chasing anyone down, nothing to coordinate on your end. From the first invite to the final gallery, we manage all of it — so keeping your whole team&rsquo;s headshots current is genuinely hands-off for you.
                </p>
                <Link
                  href="/contact-quote"
                  className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                >
                  Request Your Program Quote
                </Link>
              </SectionReveal>
            </div>
          </section>

          {/* What's Included */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-16 text-center">What Every Program Includes</h2>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-10">
                {included.map((item) => (
                  <SectionReveal key={item.title}>
                    <div className="flex gap-4">
                      <CheckCircle2 size={22} className="text-[var(--color-primary)] flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <h3 className="text-[var(--color-text-dark)] mb-2">{item.title}</h3>
                        <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]" aria-labelledby="pricing-heading">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <div className="text-center mb-14">
                  <h2 id="pricing-heading" className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">Simple, Transparent Program Pricing</h2>
                  <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">A flat agreement sized to your team — no packages, no surprise fees.</p>
                </div>
              </SectionReveal>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: 'New Hires & Individuals', price: '$300', unit: 'per person', note: 'Pay-as-you-go between team days. Includes one final edited image, shot to your program’s look.' },
                  { label: 'Team Half Day', price: '$2,500', unit: 'up to 16 people', note: 'A coached 15-minute session for each person. Works out to about $156 per person at capacity.', feature: true },
                  { label: 'Team Full Day', price: '$5,000', unit: 'up to 32 people', note: 'The same coached experience for larger teams or multiple departments — about $156 per person.' },
                ].map((t) => (
                  <SectionReveal key={t.label}>
                    <div className={`h-full rounded-2xl p-8 text-center ${t.feature ? 'bg-[var(--color-primary)] text-white shadow-xl' : 'bg-white border border-gray-100'}`}>
                      <p className={`text-xs font-semibold tracking-[0.15em] uppercase mb-4 ${t.feature ? 'text-[var(--color-primary-light)]' : 'text-[var(--color-text-muted)]'}`}>{t.label}</p>
                      <p className={`text-4xl mb-1 ${t.feature ? 'text-white' : 'text-[var(--color-text-dark)]'}`} style={{ fontFamily: 'var(--font-heading)' }}>{t.price}</p>
                      <p className={`text-sm mb-5 ${t.feature ? 'text-white/80' : 'text-[var(--color-text-muted)]'}`}>{t.unit}</p>
                      <p className={`text-sm leading-relaxed ${t.feature ? 'text-white/90' : 'text-[var(--color-text-body)]'}`}>{t.note}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
              <SectionReveal>
                <p className="text-center text-[var(--color-text-body)] mt-10 max-w-2xl mx-auto">
                  The more of your team we photograph in a day, the lower the per-person cost — a full team day works out to roughly <strong className="text-[var(--color-text-dark)]">$156 a person, about half the individual rate</strong>. Photographing 50+ at once? Ask about our <Link href="/headshot-booth" className="text-[var(--color-primary)] hover:underline">headshot booth</Link> format.
                </p>
              </SectionReveal>
              <SectionReveal>
                <div className="text-center mt-10">
                  <Link href="/contact-quote" className="btn-primary px-9 py-4 text-lg font-semibold rounded-full inline-block">
                    Request Your Program Quote
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Coached day vs booth — clear the pricing confusion */}
          <section className="py-20 px-8 bg-white border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <div className="text-center mb-4">
                  <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">Coached Team Day or Headshot Booth?</h2>
                  <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto mb-14">
                    Both bring a complete studio to you. The real difference is <strong className="text-[var(--color-text-dark)]">attention per person</strong> — not the clock, and not the price.
                  </p>
                </div>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-6">
                <SectionReveal>
                  <div className="h-full rounded-2xl border-2 border-[var(--color-primary)] p-8">
                    <h3 className="text-2xl text-[var(--color-text-dark)] mb-2">Coached Team Day</h3>
                    <p className="text-[var(--color-primary)] font-semibold text-sm mb-6">The premium experience — this program</p>
                    <ul className="space-y-3 text-[var(--color-text-body)]">
                      <li className="flex gap-3"><span className="text-[var(--color-primary)] font-bold" aria-hidden="true">•</span><span><strong className="text-[var(--color-text-dark)]">Best for</strong> teams where every headshot has to be its best — attorneys, executives, advisors, client-facing staff.</span></li>
                      <li className="flex gap-3"><span className="text-[var(--color-primary)] font-bold" aria-hidden="true">•</span><span>An unhurried <strong className="text-[var(--color-text-dark)]">15 minutes per person</strong>, with real individual coaching on posing and expression.</span></li>
                      <li className="flex gap-3"><span className="text-[var(--color-primary)] font-bold" aria-hidden="true">•</span><span>About <strong className="text-[var(--color-text-dark)]">16 people in a half day</strong> — depth over volume.</span></li>
                      <li className="flex gap-3"><span className="text-[var(--color-primary)] font-bold" aria-hidden="true">•</span><span>You&rsquo;re investing in <strong className="text-[var(--color-text-dark)]">each person&rsquo;s best possible shot</strong>, matched across the team.</span></li>
                    </ul>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="h-full rounded-2xl border border-gray-200 p-8 bg-[var(--color-bg-warm)]">
                    <h3 className="text-2xl text-[var(--color-text-dark)] mb-2">Headshot Booth</h3>
                    <p className="text-[var(--color-text-muted)] font-semibold text-sm mb-6">The high-volume option</p>
                    <ul className="space-y-3 text-[var(--color-text-body)]">
                      <li className="flex gap-3"><span className="text-[var(--color-text-muted)] font-bold" aria-hidden="true">•</span><span><strong className="text-[var(--color-text-dark)]">Best for</strong> large all-hands and events where the goal is getting everyone done efficiently.</span></li>
                      <li className="flex gap-3"><span className="text-[var(--color-text-muted)] font-bold" aria-hidden="true">•</span><span>A quick, coached pass — people flow through in a few minutes each.</span></li>
                      <li className="flex gap-3"><span className="text-[var(--color-text-muted)] font-bold" aria-hidden="true">•</span><span><strong className="text-[var(--color-text-dark)]">50+ people</strong> in the same window — volume over depth.</span></li>
                      <li className="flex gap-3"><span className="text-[var(--color-text-muted)] font-bold" aria-hidden="true">•</span><span>You&rsquo;re investing in <strong className="text-[var(--color-text-dark)]">fast, consistent coverage at scale</strong>. <Link href="/headshot-booth" className="text-[var(--color-primary)] hover:underline">See the booth &rarr;</Link></span></li>
                    </ul>
                  </div>
                </SectionReveal>
              </div>
              <SectionReveal>
                <p className="text-center text-[var(--color-text-body)] mt-10 max-w-2xl mx-auto">
                  Same afternoon, two different jobs. If your team is small enough that each person&rsquo;s headshot matters, the coached day earns its individual attention. Photographing a big group fast? The booth is built for it — and we can run <strong className="text-[var(--color-text-dark)]">both</strong>, matched to the same look.
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* Who it's for */}
          <section className="py-20 px-8 bg-white border-y border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">Built for Growing Professional Firms</h2>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-4">
                  Annual programs are ideal for firms where a polished, consistent team image matters and people join throughout the year — <Link href="/attorney-headshots" className="text-[var(--color-primary)] hover:underline">law firms</Link>, <Link href="/healthcare-headshots" className="text-[var(--color-primary)] hover:underline">medical groups</Link>, <Link href="/finance-headshots" className="text-[var(--color-primary)] hover:underline">financial and advisory firms</Link>, and corporate teams across Modesto, Stockton, Turlock, Merced, Sacramento, Fresno, and the greater Central Valley.
                </p>
                <p className="text-[var(--color-text-body)] leading-relaxed">
                  If your directory needs to look as established as your firm actually is, a program keeps it that way — automatically.
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* Stakes */}
          <section className="py-16 px-8 bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">
                  An Inconsistent Directory Quietly Costs You
                </h2>
                <div className="text-lg text-[var(--color-text-body)] leading-relaxed space-y-4">
                  <p>
                    Prospective clients compare firms before they ever call. When one firm&rsquo;s team looks polished and cohesive and another looks like a patchwork of mismatched photos, the polished one wins the benefit of the doubt — before a word is exchanged.
                  </p>
                  <p className="font-semibold text-[var(--color-text-dark)]">
                    Your people are your firm. The way they&rsquo;re presented should reflect the standard of work you actually deliver.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* CTA After Stakes */}
          <section className="py-16 px-8 bg-[var(--color-primary-dark)] text-white">
            <div className="max-w-3xl mx-auto text-center">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl mb-4">
                  Ready to Put Your Team&rsquo;s Headshots on Autopilot?
                </h2>
                <p className="text-lg mb-8 text-white/90">
                  Tell us your team size and we&rsquo;ll send you a flat-rate program quote. No packages, no surprises — just a clear plan to keep your directory consistent, year after year.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact-quote"
                    className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                  >
                    Request Your Program Quote
                  </Link>
                  <Link
                    href="/discovery-call"
                    className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                  >
                    Schedule a Discovery Call
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection
            faqs={faqs}
            heading="Annual Program Questions"
          />

          <CTASection
            heading="Let&rsquo;s Build Your Program"
            subheading="Schedule a free discovery call and we&rsquo;ll map out exactly what an annual program looks like for your team size and hiring pace."
            primaryHref="/contact-quote"
            primaryLabel="Request Your Program Quote"
          />

        </main>
      </div>
    </>
  );
}
