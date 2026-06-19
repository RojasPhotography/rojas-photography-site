import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Archivo, Hanken_Grotesk } from 'next/font/google';
import SchemaScript from './components/SchemaScript';
import GoogleReviews from './components/GoogleReviews';
import { generateLocalBusinessSchema, generateWebSiteSchema, generatePersonSchema, generateFAQSchema } from './lib/schema';

const archivo = Archivo({ subsets: ['latin'], weight: ['500', '600', '700', '800'], variable: '--st-display', display: 'swap' });
const hanken = Hanken_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--st-body', display: 'swap' });

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

const css = `
.home{
  --ink:#0C0D0F; --ink-2:#131519; --panel:#16191E; --line:rgba(255,255,255,.10);
  --green:#1F6B4D; --green-lt:#37B07C; --cream:#F4F4F2; --muted:rgba(244,244,242,.64);
  background:var(--ink); color:var(--cream);
  font-family:var(--st-body),system-ui,sans-serif; font-weight:300;
}
.home h1,.home h2,.home h3{ font-family:var(--st-display),system-ui,sans-serif; }
.st-label{ font-family:var(--st-display),sans-serif; letter-spacing:.28em; text-transform:uppercase; font-weight:600; }
.st-em{ color:var(--green-lt); }
.home a:focus-visible{ outline:3px solid var(--green-lt); outline-offset:2px; }
@keyframes st-rise{ from{opacity:0; transform:translateY(26px)} to{opacity:1; transform:translateY(0)} }
.st-rise{ opacity:0; animation:st-rise 1s cubic-bezier(.16,1,.3,1) forwards; }
@keyframes st-fadein{ from{opacity:0} to{opacity:1} }
.st-fade{ opacity:0; animation:st-fadein 1.4s ease forwards; }
@keyframes st-kb{ from{transform:scale(1.12)} to{transform:scale(1)} }
.st-kb{ animation:st-kb 12s ease-out forwards; }
.st-cta{ position:relative; overflow:hidden; transition:color .45s, border-color .45s; }
.st-cta::before{ content:''; position:absolute; inset:0; background:var(--green-lt); transform:translateY(101%);
  transition:transform .45s cubic-bezier(.16,1,.3,1); z-index:-1; }
.st-cta:hover::before{ transform:translateY(0); }
.st-pill-green{ background:var(--green); }
.st-pill-green:hover{ color:#06140D; }
.st-under{ position:relative; }
.st-under::after{ content:''; position:absolute; left:0; bottom:-3px; height:1px; width:100%; background:var(--green-lt);
  transform:scaleX(0); transform-origin:left; transition:transform .45s cubic-bezier(.16,1,.3,1); }
.st-under:hover::after{ transform:scaleX(1); }
.st-link{ color:var(--green-lt); text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:1px; }
.st-link:hover{ color:var(--cream); }
.st-face{ filter:grayscale(1) brightness(.9); transition:filter .6s, transform .6s; }
.st-face:hover{ filter:grayscale(0) brightness(1); transform:scale(1.04); z-index:2; }
.st-logo{ opacity:.6; filter:grayscale(1); transition:opacity .4s; }
.st-logo:hover{ opacity:1; }
.st-tile{ overflow:hidden; }
.st-tile img{ transition:transform 1s cubic-bezier(.16,1,.3,1); }
.st-tile:hover img{ transform:scale(1.05); }
.st-faq summary{ cursor:pointer; list-style:none; }
.st-faq summary::-webkit-details-marker{ display:none; }
.st-faq[open] .st-faq-plus{ transform:rotate(45deg); }
@media (prefers-reduced-motion: reduce){
  .st-rise,.st-fade,.st-kb{ animation:none } .st-rise,.st-fade{ opacity:1 } .st-kb{ transform:none }
}
`;

const clients = ['SAVE MART', 'COMCAST', 'CalPERS', 'CALIFORNIA LAWYERS ASSN', 'KAISER PERMANENTE', 'TENET HEALTH'];

const wall = [
  'headshot-executive-ceo.jpg', 'headshot-attorney-01.jpg', 'headshot-comcast-executive.jpg', 'headshot-finance-ceo.jpg',
  'headshot-healthcare-executive-01.jpg', 'headshot-attorney-03.jpg', 'headshot-cpa-finance-01.jpg', 'headshot-realtor-01.jpg',
  'headshot-kaiser-medical-01.jpg', 'headshot-sales-manager-01.jpg', 'headshot-financial-advisor-01.jpg', 'headshot-attorney-familylaw-01.jpg',
  'headshot-mortgage-lender-01.jpg', 'headshot-executive-cpa.jpg', 'headshot-ceo-nutrition.jpg', 'headshot-attorney-02.jpg',
];

const services = [
  { href: '/premium-headshots', name: 'Premium Headshots', img: '/images/headshots/headshot-ceo-nutrition.jpg', pos: '50% 25%',
    desc: 'Headshots that tell the story of who you really are. We guide you through the session to capture authentic portraits that show personality and professionalism—not stiff, corporate photos.' },
  { href: '/on-site-photography', name: 'On-Site Photography', img: '/images/BB Individual Headshot Session.png', pos: '50% 30%',
    desc: 'We come to your organization, understand your culture, and create team imagery that tells your story authentically. Not just a lineup of faces—a visual narrative of your people.' },
  { href: '/headshot-booth', name: 'Headshot Booth', img: '/images/kaiser-bts-headshots1.jpeg', pos: '50% 30%',
    desc: 'We set up a professional headshot station at your event or office. High-volume, fast-moving, and polished — every attendee walks away with a photo they’re proud to use.' },
  { href: '/commercial', name: 'Commercial Photography', img: '/images/DoctorOffice 4.jpg', pos: '50% 25%',
    desc: 'Brand imagery that tells your story to customers. We collaborate to understand your values and create visuals that communicate them authentically—products, spaces, and people.' },
  { href: '/video', name: 'Video Production', img: '/images/BBSI-Corp-Video.jpg', pos: '50% 30%',
    desc: 'Your story deserves motion. We partner with you to create video content that connects emotionally—brand stories, testimonials, culture videos, and aerial footage that feels authentic, not scripted.' },
  { href: '/event-photography', name: 'Event Photography', img: '/images/CLA AM 25 335.jpg', pos: '40% 50%',
    desc: 'We don’t just document your events—we capture the story. The moments, connections, and culture. Your event has a narrative; we tell it through photos and video.' },
];

const steps = [
  { n: '1', title: 'Discovery & Story Development', body: 'We start with a real conversation about your organization — your values, your people, your story. We need to understand what you need your imagery to communicate before we pick up a camera.' },
  { n: '2', title: 'Collaborative Creation', body: 'You’re not just a subject — you’re a collaborator. We work with you on set to capture authentic moments, not posed performances. The result feels like you, because it is.' },
  { n: '3', title: 'Story-Driven Delivery', body: 'You receive polished, professional imagery you’re proud to put in front of anyone — delivered within 24-48 hours for photos, 2-4 weeks for video — ready for your website, LinkedIn, and every marketing touchpoint.' },
];

const portfolio = [
  { src: '/images/headshots/headshot-ceo-nutrition.jpg', alt: 'Professional CEO headshot Modesto - Executive corporate photography', cls: 'col-span-2 md:col-span-2 md:row-span-2', pos: '70% 50%' },
  { src: '/images/headshots/headshot-attorney-03.jpg', alt: 'Attorney headshot Modesto CA - Professional legal photography', cls: 'col-span-1 md:col-span-1 md:row-span-1', pos: '50% 25%' },
  { src: '/images/Joyce-0029.jpg', alt: 'Business professional headshot Central Valley - Corporate photography', cls: 'col-span-1 md:col-span-1 md:row-span-1', pos: '50% 20%' },
  { src: '/images/MOVE Stanislaus-(3 of 28).jpg', alt: 'Commercial photography Modesto - Business team photography', cls: 'col-span-2 md:col-span-2 md:row-span-1', pos: '50% 20%' },
  { src: '/images/headshots/headshot-realtor-01.jpg', alt: 'Real estate agent headshot Modesto - Professional realtor photography', cls: 'col-span-1 md:col-span-1 md:row-span-1', pos: '50% 25%' },
  { src: '/images/Move Staff Group 9.jpg', alt: 'On-site team photography Modesto - Corporate group headshots', cls: 'col-span-1 md:col-span-2 md:row-span-1', pos: '50% 35%' },
  { src: '/images/Miguel-(2 of 6) (1).jpg', alt: 'Executive headshot Modesto CA - Professional corporate photography', cls: 'col-span-1 md:col-span-1 md:row-span-1', pos: '50% 25%' },
  { src: '/images/CLA AM 25 335.jpg', alt: 'Corporate event photography Central Valley - Professional event coverage', cls: 'col-span-2 md:col-span-2 md:row-span-2', pos: '40% 50%' },
  { src: '/images/DoctorOffice 4.jpg', alt: 'Commercial architectural photography Modesto - Professional business photography', cls: 'col-span-2 md:col-span-2 md:row-span-1', pos: '50% 25%' },
  { src: '/images/BB Individual Headshot Session.png', alt: 'On-site corporate photography Modesto - Team headshot sessions', cls: 'col-span-1 md:col-span-1 md:row-span-1', pos: '50% 30%' },
  { src: '/images/BBSI-Corp-Video.jpg', alt: 'Corporate video production Central Valley - Professional business videography', cls: 'col-span-1 md:col-span-1 md:row-span-1', pos: '50% 50%' },
];

const testimonials = [
  { name: 'Catherine Luke', role: 'CEO', quote: 'Professional, efficient, and high-quality. Within days, our new employee had a corporate headshot ready for our website and LinkedIn. Highly recommended for any business.' },
  { name: 'Joyce Ulrich', role: 'Entrepreneur, Modesto', quote: 'Alfonso and Niomi create a comfortable environment that puts you at ease immediately. The professional headshots turned out beautifully—exactly what I needed for my business.' },
  { name: 'Courtnay Lynch', role: 'VP of People & Culture, Valley First Credit Union', quote: 'Alfonso and Niomi captured our corporate event beautifully. Professional, responsive, easy to work with. They understand business and deliver results.' },
];

const faqs = [
  { q: 'How much does a professional headshot cost in Modesto?', a: 'Our studio headshot sessions are $150 for the session, plus $150 per image you select. There is no minimum — you only pay for the photos you love. For on-site team photography, we provide custom quotes based on team size. For headshot booth events, pricing is hourly.' },
  { q: 'Do you travel for on-site photography outside of Modesto?', a: 'Yes. We regularly travel throughout the Central Valley — Stockton, Turlock, Fresno, Sacramento, Merced, and beyond. We bring our full professional studio setup to your office, facility, or event. A travel fee applies for locations outside the immediate Modesto area.' },
  { q: 'What is the difference between a headshot booth and on-site photography?', a: 'A headshot booth is a high-volume service priced by the hour — ideal for expos, conferences, and company events where the goal is moving many people through quickly. On-site photography is a contracted, per-person service where we spend dedicated time with each individual, providing personal coaching on posing and expression. Both involve us coming to your location with professional equipment.' },
  { q: 'How quickly will I receive my photos?', a: 'Studio headshot sessions are delivered to a private online gallery within 48 hours. On-site team photography typically delivers within 24 hours. For corporate events with SpotMyPhotos live delivery (full-day bookings), guests can access their photos in real time during the event.' },
  { q: 'What should I wear to a headshot session?', a: 'We send every client a preparation guide before their session with specific wardrobe recommendations. Generally, solid colors and professional attire photograph best. Bring multiple outfits — sessions include unlimited wardrobe changes at no extra charge. We guide you through everything in real time so you never have to guess.' },
];

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

      <div className={`home ${archivo.variable} ${hanken.variable} min-h-screen overflow-x-hidden`}>
        <style dangerouslySetInnerHTML={{ __html: css }} />

        {/* Hero — flanked by portraits (dual CTA) */}
        <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center px-6 pt-28 pb-16 text-center overflow-hidden">
          <div className="st-fade hidden md:block absolute left-0 top-0 bottom-0 w-[26vw]" style={{ animationDelay: '.2s' }}>
            <Image src="/images/headshots/headshot-comcast-executive.jpg" alt="Executive headshot — corporate photography in Modesto" fill priority quality={90} sizes="26vw" className="st-kb object-cover object-[60%_30%]" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(12,13,15,.35), var(--ink) 92%)' }} />
          </div>
          <div className="st-fade hidden md:block absolute right-0 top-0 bottom-0 w-[26vw]" style={{ animationDelay: '.35s' }}>
            <Image src="/images/headshots/headshot-attorney-01.jpg" alt="Attorney headshot — Central Valley corporate photography" fill priority quality={90} sizes="26vw" className="st-kb object-cover object-[40%_25%]" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(270deg, rgba(12,13,15,.35), var(--ink) 92%)' }} />
          </div>
          <div className="st-fade md:hidden absolute inset-0">
            <Image src="/images/headshots/headshot-executive-ceo.jpg" alt="Executive headshot — corporate photography in Modesto" fill priority quality={90} sizes="100vw" className="object-cover object-[50%_25%]" />
            <div className="absolute inset-0 bg-[var(--ink)]/70" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <p className="st-label text-[11px] st-em mb-7 st-rise" style={{ animationDelay: '.15s' }}>Premium Corporate Photography · Modesto &amp; Central Valley</p>
            <h1 className="font-extrabold leading-[0.96] tracking-[-0.02em] text-[10vw] md:text-[5vw] st-rise" style={{ animationDelay: '.25s' }}>
              Your business is better than your <span className="st-em">photos suggest.</span>
            </h1>
            <p className="mx-auto max-w-xl text-[var(--muted)] leading-relaxed mt-7 st-rise" style={{ animationDelay: '.5s' }}>
              We help professionals across Modesto and the Central Valley create imagery that actually reflects the quality of who they are.
            </p>
            <div className="st-rise flex flex-col sm:flex-row sm:justify-center items-center gap-4 mt-9" style={{ animationDelay: '.62s' }}>
              <Link href="/discovery-call" className="st-cta st-pill-green st-label text-[10px] text-cream rounded-full px-8 py-4">Book a Signature session</Link>
              <Link href="/on-site-photography" className="st-cta st-label text-[10px] text-cream rounded-full px-8 py-4 border border-[var(--line)]">Headshot days for teams →</Link>
            </div>
          </div>
        </section>

        {/* Proof / client logos + stats */}
        <section className="px-6 md:px-12 py-12 border-y border-[var(--line)] bg-[var(--ink-2)]">
          <p className="st-label text-[9px] text-[var(--muted)] text-center mb-7">Trusted by the names you already know</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
            {clients.map((c) => (
              <span key={c} className="st-logo font-bold text-cream text-base md:text-lg tracking-[0.04em]" style={{ fontFamily: 'var(--st-display)' }}>{c}</span>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-[var(--line)] flex flex-wrap items-baseline justify-center gap-x-14 gap-y-4 text-center">
            <p className="font-extrabold text-4xl" style={{ fontFamily: 'var(--st-display)' }}>500<span className="st-em">+</span> <span className="st-label text-[10px] align-middle text-[var(--muted)]">executives photographed</span></p>
            <p className="font-extrabold text-4xl" style={{ fontFamily: 'var(--st-display)' }}>60<span className="st-em">+</span> <span className="st-label text-[10px] align-middle text-[var(--muted)]">five-star Google reviews</span></p>
            <p className="font-extrabold text-4xl" style={{ fontFamily: 'var(--st-display)' }}>2 <span className="st-label text-[10px] align-middle text-[var(--muted)]">photographers, every shoot</span></p>
          </div>
        </section>

        {/* Two lanes — Signature vs Express */}
        <section className="px-6 md:px-12 py-24">
          <div className="max-w-2xl mb-14">
            <p className="st-label text-[10px] st-em mb-4">Two ways to work with us</p>
            <h2 className="font-bold text-4xl md:text-6xl leading-[1.0] tracking-[-0.02em]">Whether it&apos;s just you — or your whole team.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { tag: 'For the individual', title: 'Signature', img: '/images/headshots/headshot-ceo-nutrition.jpg', pos: '50% 25%', body: 'White-glove executive and personal-brand portraits. Unhurried, directed, finished by hand — the work that carries your name.', cta: 'Book a Signature session', href: '/premium-headshots' },
              { tag: 'For teams & events', title: 'Express', img: '/images/Move Staff Group 9.jpg', pos: '50% 38%', body: 'Fast, consistent headshots and coverage we bring on-site — for entire teams, conferences, and corporate events. Same-day galleries.', cta: 'Get a team quote', href: '/on-site-photography' },
            ].map((l) => (
              <Link key={l.title} href={l.href} className="st-tile group relative block overflow-hidden rounded-2xl border border-[var(--line)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={l.img} alt={`${l.title} corporate photography — Rojas Photography, Modesto`} fill quality={85} sizes="(max-width:768px) 100vw, 46vw" className="object-cover" style={{ objectPosition: l.pos }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, var(--ink) 8%, rgba(12,13,15,.25) 60%, transparent)' }} />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-8 md:p-10">
                  <p className="st-label text-[10px] st-em mb-3">{l.tag}</p>
                  <h3 className="font-bold text-4xl mb-3">{l.title}</h3>
                  <p className="text-[var(--muted)] leading-relaxed max-w-sm mb-6 text-sm">{l.body}</p>
                  <span className="st-under st-label text-[10px] text-cream group-hover:text-[var(--green-lt)]">{l.cta} →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Problem */}
        <section className="px-6 md:px-12 py-20 border-t border-[var(--line)] bg-[var(--ink-2)]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 tracking-[-0.02em] leading-[1.05]">Your story deserves more than generic photography</h2>
            <div className="grid md:grid-cols-2 gap-8 text-[var(--muted)] leading-relaxed">
              <p>Many businesses struggle with photography and video that feels transactional, not collaborative. Images that look professional but don&apos;t tell their story. Photographers who don&apos;t take time to understand their organization.</p>
              <p>Your business has a unique story—your values, your people, your culture. Your imagery and video content should tell that story authentically, not just fill space on a website or social media.</p>
            </div>
          </div>
        </section>

        {/* Guide */}
        <section className="px-6 md:px-12 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-[-0.02em] leading-[1.05]">We know what it feels like to be undersold</h2>
            <div className="space-y-5 text-lg text-[var(--muted)] leading-relaxed">
              <p>You&apos;ve put years into building something real — a team, a reputation, a standard of work you&apos;re proud of. And then someone visits your website or finds your LinkedIn and the imagery doesn&apos;t come close to reflecting any of it. That gap is frustrating. We get it.</p>
              <p className="font-medium text-cream">We&apos;re Alfonso and Niomi Rojas. With a background in corporate leadership and operations before we picked up a camera, we understand business from the inside — which means we know how to translate what you&apos;ve built into imagery that actually shows it.</p>
              <p>We&apos;ve helped 500+ professionals across the Central Valley — from <Link href="/premium-headshots" className="st-link">executive headshots</Link> to <Link href="/on-site-photography" className="st-link">on-site team photography</Link>, <Link href="/commercial" className="st-link">commercial imagery</Link>, and <Link href="/video" className="st-link">video production</Link> — create visuals they&apos;re genuinely proud to put in front of clients. Not as a vendor. As partners who care about getting it right.</p>
            </div>
          </div>
        </section>

        <main id="main-content">
          {/* Plan */}
          <section className="px-6 md:px-12 py-20 md:py-28 border-t border-[var(--line)] bg-[var(--ink-2)]">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-[-0.02em]">How we work with you</h2>
              <div className="grid md:grid-cols-3 gap-10">
                {steps.map((s) => (
                  <div key={s.n}>
                    <div className="w-14 h-14 rounded-full grid place-items-center mb-6 font-extrabold text-xl text-cream" style={{ background: 'var(--green)', fontFamily: 'var(--st-display)' }}>{s.n}</div>
                    <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                    <p className="text-[var(--muted)] leading-relaxed text-sm">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mid CTA */}
          <section className="px-6 py-16 text-center" style={{ background: 'var(--green)' }}>
            <div className="max-w-2xl mx-auto">
              <p className="text-cream text-lg md:text-2xl mb-6 leading-relaxed font-medium">You&apos;ve worked too hard to be undersold by a photo.</p>
              <Link href="/discovery-call" className="st-cta st-label text-[10px] bg-[var(--ink)] text-cream rounded-full px-9 py-4 inline-block">Book your discovery call</Link>
            </div>
          </section>

          {/* Services */}
          <section className="px-6 md:px-12 py-24">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-[-0.02em]">How we can help</h2>
              <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">Photography and video for professionals across Modesto and the Central Valley</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <Link key={s.href} href={s.href} aria-label={`Learn more about ${s.name}`} className="st-tile group relative block h-[420px] rounded-2xl overflow-hidden border border-[var(--line)]">
                  <Image src={s.img} alt={`${s.name} — Rojas Photography, Modesto & Central Valley`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" style={{ objectPosition: s.pos }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, var(--ink) 6%, rgba(12,13,15,.55) 45%, rgba(12,13,15,.2))' }} />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold mb-3">{s.name}</h3>
                    <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">{s.desc}</p>
                    <span className="st-under st-label text-[10px] text-cream group-hover:text-[var(--green-lt)] self-start">Learn more →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Wall of faces */}
          <section className="px-6 md:px-12 py-20 border-y border-[var(--line)] bg-[var(--ink-2)]">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <h2 className="font-bold text-4xl md:text-6xl tracking-[-0.02em] max-w-xl leading-[1.0]">500+ executives. <span className="st-em">One look</span> they all trust.</h2>
              <p className="text-[var(--muted)] text-sm max-w-xs">A small sample of the leaders, attorneys, and founders we&apos;ve photographed across the Central Valley.</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-8 gap-2 md:gap-3">
              {wall.map((src, i) => (
                <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image src={`/images/headshots/${src}`} alt={`Professional executive headshot ${i + 1} — Modesto, Central Valley`} fill sizes="(max-width:768px) 33vw, 12vw" className="st-face object-cover" style={{ objectPosition: '50% 22%' }} />
                </div>
              ))}
            </div>
          </section>

          {/* Portfolio */}
          <section className="px-6 md:px-12 py-24">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-[-0.02em]">Our work</h2>
              <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">Visual storytelling for businesses across the Central Valley — photography and video that reflects the quality of who you are</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[200px]">
              {portfolio.map((p) => (
                <figure key={p.src} className={`st-tile relative overflow-hidden rounded-xl ${p.cls}`}>
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width:768px) 50vw, 50vw" className="object-cover" style={{ objectPosition: p.pos }} />
                </figure>
              ))}
            </div>
          </section>

          {/* Stakes */}
          <section className="px-6 md:px-12 py-20 border-y border-[var(--line)] bg-[var(--ink-2)]">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-[-0.02em] leading-[1.05]">Outdated imagery costs you more than you think</h2>
              <div className="text-lg text-[var(--muted)] leading-relaxed space-y-4">
                <p>Every time a prospect visits your website or finds your LinkedIn, they&apos;re making a judgment call. If your photos don&apos;t reflect the quality of your work, they move on — and you never know it happened.</p>
                <p>Generic imagery makes you look like everyone else. It undermines trust before you ever get a chance to speak. And the longer you wait, the more opportunities quietly walk past you.</p>
                <p className="font-medium text-cream">You&apos;ve worked too hard to be undersold by a photo.</p>
              </div>
            </div>
          </section>

          {/* CTA #1 */}
          <section className="px-6 py-24 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-[-0.02em]">Ready to tell your story visually?</h2>
              <p className="text-lg mb-9 text-[var(--muted)]">Schedule a free discovery call. We&apos;ll discuss your goals, show you examples of our work, and put together a custom plan. Zero pressure. Zero obligation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/discovery-call" className="st-cta st-pill-green st-label text-[10px] text-cream rounded-full px-9 py-4">Book your discovery call</Link>
                <a href="tel:2093803727" className="st-cta st-label text-[10px] text-cream rounded-full px-9 py-4 border border-[var(--line)]">Call 209-380-3727</a>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="px-6 md:px-12 py-24 border-t border-[var(--line)] bg-[var(--ink-2)]">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-[-0.02em]">Imagine sharing imagery you&apos;re actually proud of</h2>
              <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">A headshot that finally looks like you. A team photo that shows your culture. Brand imagery that makes the right people take notice. That&apos;s what working together looks like — here&apos;s what clients say.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((t) => (
                <figure key={t.name} className="bg-[var(--panel)] border border-[var(--line)] rounded-2xl p-8">
                  <p className="st-em mb-4 text-sm tracking-[0.2em]">★★★★★</p>
                  <blockquote className="text-cream/90 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="st-label text-[10px] text-[var(--muted)]">{t.name} — {t.role}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* Live Google Reviews - renders only when Places API env vars are set */}
          <GoogleReviews />

          {/* Annual Programs band */}
          <section className="px-6 md:px-12 py-16 border-y border-[var(--line)]">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-[-0.01em]">Hiring all year? Keep every headshot consistent.</h2>
                <p className="text-[var(--muted)] leading-relaxed">Our <Link href="/annual-headshot-programs" className="st-link">annual headshot programs for companies</Link> photograph new hires as they join and refresh your whole team on a schedule — one locked-in look across your directory, website, and LinkedIn.</p>
              </div>
              <Link href="/annual-headshot-programs" className="st-cta st-pill-green st-label text-[10px] text-cream rounded-full px-8 py-4 inline-block whitespace-nowrap shrink-0">Explore programs</Link>
            </div>
          </section>

          {/* CTA #2 */}
          <section className="px-6 py-16 text-center bg-[var(--ink-2)]">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-[-0.02em]">Your story deserves to be told authentically</h2>
              <p className="text-[var(--muted)] mb-7">Join hundreds of Central Valley professionals who&apos;ve trusted us to tell their story visually. Your authentic narrative is one conversation away.</p>
              <Link href="/discovery-call" className="st-cta st-pill-green st-label text-[10px] text-cream rounded-full px-9 py-4 inline-block">Book your discovery call</Link>
            </div>
          </section>

          {/* Authority */}
          <section className="px-6 md:px-12 py-24">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-[-0.02em]">Trusted by Central Valley businesses</h2>
                <p className="text-lg text-[var(--muted)]">Experience, expertise, and proven results</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { big: '15+', t: 'Years Experience', s: 'Corporate leadership background' },
                  { big: '500+', t: 'Professionals Photographed', s: 'CEOs, attorneys, business leaders' },
                  { big: '60+', t: 'Five-Star Reviews', s: 'Proven client satisfaction' },
                  { big: 'FAA', t: 'Part 107 Certified', s: 'Licensed drone operator' },
                ].map((a) => (
                  <div key={a.t} className="text-center">
                    <div className="text-4xl font-extrabold st-em mb-2" style={{ fontFamily: 'var(--st-display)' }}>{a.big}</div>
                    <p className="text-cream font-semibold mb-2">{a.t}</p>
                    <p className="text-sm text-[var(--muted)]">{a.s}</p>
                  </div>
                ))}
              </div>
              <div className="mt-14 p-8 bg-[var(--ink-2)] border border-[var(--line)] rounded-2xl text-center">
                <p className="text-lg text-[var(--muted)] leading-relaxed">We partner with businesses across Modesto, Stockton, Fresno, Turlock, Merced, Sacramento, and the East Bay — helping organizations tell their story through professional photography and video content you can trust.</p>
              </div>
            </div>
          </section>

          {/* About teaser */}
          <section className="px-6 md:px-12 py-24 border-t border-[var(--line)] bg-[var(--ink-2)]">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="st-tile rounded-2xl overflow-hidden relative aspect-[4/3] border border-[var(--line)]">
                <Image src="/images/Alfonso+Niomi-0026.jpg" alt="Alfonso and Niomi Rojas - Founders of Rojas Photography" fill quality={85} sizes="(max-width:768px) 100vw, 50vw" className="object-cover object-[50%_20%]" />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-[-0.02em]">Meet Alfonso &amp; Niomi</h2>
                <p className="text-lg text-[var(--muted)] leading-relaxed mb-4">With 15+ years in corporate leadership and operations between us, we understand what businesses need. We&apos;ve partnered with professionals across the Central Valley to create authentic photography and video content that tells their story and builds credibility.</p>
                <p className="text-[var(--muted)] leading-relaxed mb-8">Visual storytelling isn&apos;t about being &ldquo;photogenic.&rdquo; It&apos;s about presenting your authentic story with confidence — through imagery and video that connects.</p>
                <Link href="/about-rojas-photography" className="st-cta st-label text-[10px] text-cream rounded-full px-8 py-4 border border-[var(--line)] inline-block">Learn more about us →</Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="px-6 md:px-12 py-24">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center tracking-[-0.02em]">Common questions</h2>
              <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {faqs.map((f) => (
                  <details key={f.q} className="st-faq group py-5">
                    <summary className="flex items-center justify-between gap-6 text-lg font-medium text-cream">
                      <span>{f.q}</span>
                      <span className="st-faq-plus st-em shrink-0 text-2xl leading-none transition-transform duration-300">+</span>
                    </summary>
                    <p className="text-[var(--muted)] leading-relaxed mt-4">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="relative px-6 py-32 text-center overflow-hidden border-t border-[var(--line)]">
            <div className="absolute inset-0">
              <Image src="/images/headshots/headshot-executive.jpg" alt="" fill sizes="100vw" className="object-cover object-[50%_20%] opacity-20" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, var(--ink), rgba(12,13,15,.7) 50%, var(--ink))' }} />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="st-label text-[11px] st-em mb-6">By appointment</p>
              <h2 className="font-extrabold text-4xl md:text-6xl leading-[0.98] tracking-[-0.02em] mb-9">Let&apos;s make the photo that opens doors.</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/discovery-call" className="st-cta st-pill-green st-label text-[11px] text-cream rounded-full px-10 py-5">Book your discovery call</Link>
                <Link href="/contact-quote" className="st-cta st-label text-[11px] text-cream rounded-full px-10 py-5 border border-[var(--line)]">Request a quote →</Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
