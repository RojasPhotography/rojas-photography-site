import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Archivo, Hanken_Grotesk } from 'next/font/google';

const archivo = Archivo({ subsets: ['latin'], weight: ['500', '600', '700', '800'], variable: '--st-display', display: 'swap' });
const hanken = Hanken_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--st-body', display: 'swap' });

export const metadata: Metadata = {
  title: 'Redesign — Studio (Modern Premium) | Rojas Photography',
  robots: 'noindex, nofollow',
};

const css = `
.st{
  --ink:#0C0D0F; --ink-2:#131519; --panel:#16191E; --line:rgba(255,255,255,.10);
  --green:#1F6B4D; --green-lt:#37B07C; --cream:#F4F4F2; --muted:rgba(244,244,242,.62);
  background:var(--ink); color:var(--cream);
  font-family:var(--st-body),system-ui,sans-serif; font-weight:300;
}
.st-disp{ font-family:var(--st-display),system-ui,sans-serif; }
.st-label{ font-family:var(--st-display),sans-serif; letter-spacing:.28em; text-transform:uppercase; font-weight:600; }
.st-em{ color:var(--green-lt); }
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
.st-face{ filter:grayscale(1) brightness(.9); transition:filter .6s, transform .6s; }
.st-face:hover{ filter:grayscale(0) brightness(1); transform:scale(1.04); z-index:2; }
.st-logo{ opacity:.55; filter:grayscale(1); transition:opacity .4s; }
.st-logo:hover{ opacity:1; }
.st-tile img{ transition:transform 1s cubic-bezier(.16,1,.3,1); }
.st-tile:hover img{ transform:scale(1.05); }
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
  { no: '01', name: 'Signature Executive Headshots', desc: 'The flagship — individual portraits for executives, attorneys, and personal brands. Directed and hand-retouched.' },
  { no: '02', name: 'Corporate & Team Headshot Days', desc: 'We bring the studio to you. Consistent, polished headshots for the whole team in a single on-site visit.' },
  { no: '03', name: 'Annual Headshot Programs', desc: 'A standing relationship that keeps every new hire on-brand, with the same look, year after year.' },
  { no: '04', name: 'Event Photography', desc: 'Conferences, galas, and corporate occasions covered with the same craft and consistency.' },
];

export default function StudioRedesign() {
  return (
    <div className={`st ${archivo.variable} ${hanken.variable} min-h-screen overflow-x-hidden`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* Nav */}
      <header className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-6 md:px-12 py-6">
        <Link href="/redesign" className="st-disp font-extrabold tracking-[0.12em] text-lg">ROJAS</Link>
        <nav className="hidden lg:flex items-center gap-9 st-label text-[10px] text-cream/75">
          <a className="st-under hover:text-cream" href="#work">Work</a>
          <a className="st-under hover:text-cream" href="#signature">Signature</a>
          <a className="st-under hover:text-cream" href="#teams">Teams &amp; Events</a>
          <a className="st-under hover:text-cream" href="#about">About</a>
        </nav>
        <a href="#book" className="st-cta st-pill-green st-label text-[10px] text-cream rounded-full px-6 py-3">Book a session</a>
      </header>

      {/* Hero — flanked by portraits */}
      <section className="relative min-h-[88vh] md:min-h-screen flex items-center justify-center px-6 text-center overflow-hidden">
        {/* flanking portraits (desktop) */}
        <div className="st-fade hidden md:block absolute left-0 top-0 bottom-0 w-[26vw]" style={{ animationDelay: '.2s' }}>
          <Image src="/images/headshots/headshot-comcast-executive.jpg" alt="Executive headshot — Modesto" fill priority quality={90} sizes="26vw" className="st-kb object-cover object-[60%_30%]" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(12,13,15,.35), var(--ink) 92%)' }} />
        </div>
        <div className="st-fade hidden md:block absolute right-0 top-0 bottom-0 w-[26vw]" style={{ animationDelay: '.35s' }}>
          <Image src="/images/headshots/headshot-attorney-01.jpg" alt="Attorney headshot — Central Valley" fill priority quality={90} sizes="26vw" className="st-kb object-cover object-[40%_25%]" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(270deg, rgba(12,13,15,.35), var(--ink) 92%)' }} />
        </div>
        {/* mobile single bg */}
        <div className="st-fade md:hidden absolute inset-0">
          <Image src="/images/headshots/headshot-executive-ceo.jpg" alt="Executive headshot — Modesto" fill priority quality={90} sizes="100vw" className="object-cover object-[50%_25%]" />
          <div className="absolute inset-0 bg-[var(--ink)]/70" />
        </div>

        <div className="relative z-10 max-w-3xl py-24">
          <p className="st-label text-[11px] st-em mb-7 st-rise" style={{ animationDelay: '.15s' }}>Modesto &amp; Central Valley — On-site statewide</p>
          <h1 className="st-disp font-extrabold leading-[0.95] tracking-[-0.02em] text-[12vw] md:text-[5.6vw]">
            <span className="block st-rise" style={{ animationDelay: '.25s' }}>Headshots that get</span>
            <span className="block st-rise" style={{ animationDelay: '.37s' }}>you taken <span className="st-em">seriously.</span></span>
          </h1>
          <p className="mx-auto max-w-xl text-cream/70 leading-relaxed mt-7 st-rise" style={{ animationDelay: '.5s' }}>
            Executive portraits and corporate photography for the Valley&apos;s most recognized people and companies — made in person by Alfonso &amp; Niomi Rojas.
          </p>
          <div className="st-rise flex flex-col sm:flex-row sm:justify-center items-center gap-4 mt-9" style={{ animationDelay: '.62s' }}>
            <a href="#book" className="st-cta st-pill-green st-label text-[10px] text-cream rounded-full px-8 py-4">Book a Signature session</a>
            <a href="#teams" className="st-cta st-label text-[10px] text-cream rounded-full px-8 py-4 border border-[var(--line)]">Headshot days for teams →</a>
          </div>
        </div>

        <div className="absolute bottom-6 inset-x-0 flex justify-center st-fade" style={{ animationDelay: '1s' }}>
          <span className="st-label text-[9px] text-cream/40">Scroll</span>
        </div>
      </section>

      {/* Proof / client logos */}
      <section className="px-6 md:px-12 py-12 border-y border-[var(--line)] bg-[var(--ink-2)]">
        <p className="st-label text-[9px] text-cream/40 text-center mb-7">Trusted by the names you already know</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {clients.map((c) => (
            <span key={c} className="st-logo st-disp font-bold text-cream text-base md:text-lg tracking-[0.04em]">{c}</span>
          ))}
        </div>
        <div className="mt-10 pt-8 border-t border-[var(--line)] flex flex-wrap items-baseline justify-center gap-x-14 gap-y-4 text-center">
          <p className="st-disp font-extrabold text-4xl">500<span className="st-em">+</span> <span className="st-label text-[10px] align-middle text-cream/50">executives photographed</span></p>
          <p className="st-disp font-extrabold text-4xl">60<span className="st-em">+</span> <span className="st-label text-[10px] align-middle text-cream/50">five-star reviews</span></p>
          <p className="st-disp font-extrabold text-4xl">2 <span className="st-label text-[10px] align-middle text-cream/50">photographers, every shoot</span></p>
        </div>
      </section>

      {/* Two lanes */}
      <section id="signature" className="px-6 md:px-12 py-24">
        <div className="max-w-2xl mb-14">
          <p className="st-label text-[10px] st-em mb-4">Two ways to work with us</p>
          <h2 className="st-disp font-bold text-4xl md:text-6xl leading-[1.0] tracking-[-0.02em]">Whether it&apos;s just you — or your whole team.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { tag: 'For the individual', title: 'Signature', img: '/images/headshots/headshot-ceo-nutrition.jpg', pos: '50% 25%', body: 'White-glove executive and personal-brand portraits. Unhurried, directed, finished by hand — the work that carries your name.', cta: 'Book a Signature session', anchor: undefined },
            { tag: 'For teams & events', title: 'Express', img: '/images/Move Staff Group 9.jpg', pos: '50% 38%', body: 'Fast, consistent headshots and coverage we bring on-site — for entire teams, conferences, and corporate events. Same-day galleries.', cta: 'Get a team quote', anchor: 'teams' },
          ].map((l) => (
            <article key={l.title} id={l.anchor} className="st-tile group relative overflow-hidden rounded-2xl border border-[var(--line)]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={l.img} alt={`${l.title} — Rojas Photography, Modesto`} fill quality={85} sizes="(max-width:768px) 100vw, 46vw" className="object-cover" style={{ objectPosition: l.pos }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, var(--ink) 8%, rgba(12,13,15,.25) 60%, transparent)' }} />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-8 md:p-10">
                <p className="st-label text-[10px] st-em mb-3">{l.tag}</p>
                <h3 className="st-disp font-bold text-4xl mb-3">{l.title}</h3>
                <p className="text-cream/75 leading-relaxed max-w-sm mb-6 text-sm">{l.body}</p>
                <a href="#book" className="st-under st-label text-[10px] text-cream group-hover:text-[var(--green-lt)]">{l.cta} →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Wall of faces */}
      <section id="work" className="px-6 md:px-12 py-20 border-y border-[var(--line)] bg-[var(--ink-2)]">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <h2 className="st-disp font-bold text-4xl md:text-6xl tracking-[-0.02em] max-w-xl leading-[1.0]">500+ executives. <span className="st-em">One look</span> they all trust.</h2>
          <p className="text-cream/55 text-sm max-w-xs">A small sample of the leaders, attorneys, and founders we&apos;ve photographed across the Central Valley.</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-8 gap-2 md:gap-3">
          {wall.map((src, i) => (
            <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image src={`/images/headshots/${src}`} alt={`Executive headshot ${i + 1} — Modesto`} fill sizes="(max-width:768px) 33vw, 12vw" className="st-face object-cover" style={{ objectPosition: '50% 22%' }} />
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-6 md:px-12 py-24">
        <p className="st-label text-[10px] st-em mb-10">What we make</p>
        <div className="grid md:grid-cols-2 gap-px bg-[var(--line)] rounded-2xl overflow-hidden">
          {services.map((s) => (
            <a key={s.no} href="#book" className="group bg-[var(--ink)] p-9 md:p-12 flex gap-7 hover:bg-[var(--panel)] transition-colors">
              <span className="st-disp font-extrabold text-2xl st-em shrink-0">{s.no}</span>
              <div>
                <h3 className="st-disp font-bold text-2xl md:text-3xl mb-3 group-hover:text-[var(--green-lt)] transition-colors">{s.name}</h3>
                <p className="text-cream/60 text-sm leading-relaxed max-w-md">{s.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section id="about" className="px-6 md:px-12 py-28 border-y border-[var(--line)] bg-[var(--ink-2)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="st-label text-[10px] st-em mb-6">★★★★★ — 60+ five-star reviews</p>
          <blockquote className="st-disp font-medium text-3xl md:text-5xl leading-[1.15] tracking-[-0.01em]">
            &ldquo;Alfonso and Niomi put you at ease the moment you arrive. The headshots turned out <span className="st-em">better than I knew I could look.</span>&rdquo;
          </blockquote>
          <footer className="st-label text-[10px] text-cream/55 mt-9">Joyce Ulrich — Entrepreneur, Modesto</footer>
        </div>
      </section>

      {/* Annual programs band */}
      <section className="px-6 md:px-12 py-24 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5 st-tile relative overflow-hidden rounded-2xl border border-[var(--line)]">
          <div className="relative aspect-[5/4]">
            <Image src="/images/Alfonso+Niomi-0026.jpg" alt="Alfonso and Niomi Rojas" fill quality={85} sizes="(max-width:768px) 100vw, 40vw" className="object-cover object-[50%_30%]" />
          </div>
        </div>
        <div className="md:col-span-7">
          <p className="st-label text-[10px] st-em mb-5">Annual Headshot Programs</p>
          <h2 className="st-disp font-bold text-4xl md:text-6xl leading-[1.0] tracking-[-0.02em] mb-6">Keep every face on-brand, all year.</h2>
          <p className="text-cream/65 leading-relaxed max-w-xl mb-8">
            A standing relationship for growing companies — recurring sessions so new executives and hires match the same premium look, without renegotiating each time.
          </p>
          <a href="#book" className="st-cta st-label text-[10px] text-cream rounded-full px-7 py-4 border border-[var(--line)] inline-block">Explore annual programs →</a>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="relative px-6 md:px-12 py-36 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/headshots/headshot-executive.jpg" alt="" fill sizes="100vw" className="object-cover object-[50%_20%] opacity-25" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, var(--ink), rgba(12,13,15,.7) 50%, var(--ink))' }} />
        </div>
        <div className="relative z-10">
          <p className="st-label text-[11px] st-em mb-6">By appointment</p>
          <h2 className="st-disp font-extrabold text-5xl md:text-[6vw] leading-[0.95] tracking-[-0.02em] mb-9">
            Let&apos;s make the photo<br />that opens doors.
          </h2>
          <a href="#" className="st-cta st-pill-green st-label text-[11px] text-cream rounded-full px-10 py-5 inline-block">Book your session →</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-10 border-t border-[var(--line)] flex flex-col md:flex-row justify-between gap-4 st-label text-[10px] text-cream/50">
        <span>© Rojas Photography — Modesto, California</span>
        <Link href="/redesign" className="st-under hover:text-cream">← Back to all directions</Link>
      </footer>
    </div>
  );
}
