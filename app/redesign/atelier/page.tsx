import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Bodoni_Moda, Jost } from 'next/font/google';

const bodoni = Bodoni_Moda({ subsets: ['latin'], variable: '--at-display', display: 'swap' });
const jost = Jost({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--at-sans', display: 'swap' });

export const metadata: Metadata = {
  title: 'Redesign — Maison (Couture Luxury) | Rojas Photography',
  robots: 'noindex, nofollow',
};

const css = `
.at{
  --noir:#0A1512; --noir-2:#0E1E18; --emerald:#1F6B4D; --emerald-deep:#12352A;
  --gold:#C7A461; --gold-lt:#E6D2A0; --cream:#F3EEE3; --line:rgba(199,164,97,.28);
  background:var(--noir); color:var(--cream);
  font-family:var(--at-sans),system-ui,sans-serif; font-weight:300;
}
.at-disp{ font-family:var(--at-display),'Didot',Georgia,serif; font-optical-sizing:auto; }
.at-label{ font-family:var(--at-sans),sans-serif; letter-spacing:.36em; text-transform:uppercase; font-weight:400; }
.at-gold{ background:linear-gradient(105deg,var(--gold) 0%,var(--gold-lt) 45%,var(--gold) 100%);
  -webkit-background-clip:text; background-clip:text; color:transparent; }
/* layered lacquer depth */
.at-veil{ position:fixed; inset:0; z-index:0; pointer-events:none;
  background:
    radial-gradient(120% 80% at 80% -10%, rgba(31,107,77,.30), transparent 55%),
    radial-gradient(90% 70% at 0% 110%, rgba(199,164,97,.10), transparent 50%),
    radial-gradient(60% 60% at 50% 50%, transparent 40%, rgba(0,0,0,.45) 100%); }
.at-hair{ height:1px; background:linear-gradient(90deg,transparent,var(--gold),transparent); opacity:.55; }
/* gallery mat frame */
.at-mat{ position:relative; padding:14px; background:
    linear-gradient(var(--noir-2),var(--noir-2)) padding-box,
    linear-gradient(135deg,var(--gold-lt),var(--emerald) 60%,var(--gold)) border-box;
  border:1px solid transparent; }
.at-mat::after{ content:''; position:absolute; inset:14px; border:1px solid var(--line); pointer-events:none; }
@keyframes at-rise{ from{opacity:0; transform:translateY(34px)} to{opacity:1; transform:translateY(0)} }
.at-rise{ opacity:0; animation:at-rise 1.1s cubic-bezier(.16,1,.3,1) forwards; }
@keyframes at-kb{ from{transform:scale(1.08)} to{transform:scale(1)} }
.at-kb{ animation:at-kb 9s ease-out forwards; }
@keyframes at-marq{ from{transform:translateX(0)} to{transform:translateX(-50%)} }
.at-track{ display:inline-flex; white-space:nowrap; animation:at-marq 42s linear infinite; }
.at-cta{ position:relative; overflow:hidden; transition:color .5s; }
.at-cta::before{ content:''; position:absolute; inset:0; background:linear-gradient(105deg,var(--gold),var(--gold-lt));
  transform:translateY(101%); transition:transform .5s cubic-bezier(.16,1,.3,1); z-index:-1; }
.at-cta:hover::before{ transform:translateY(0); }
.at-cta:hover{ color:var(--noir); }
.at-under{ position:relative; }
.at-under::after{ content:''; position:absolute; left:0; bottom:-4px; height:1px; width:100%;
  background:var(--gold); transform:scaleX(0); transform-origin:left; transition:transform .5s cubic-bezier(.16,1,.3,1); }
.at-under:hover::after{ transform:scaleX(1); }
.at-plate img{ transition:transform 1.1s cubic-bezier(.16,1,.3,1), filter 1.1s; filter:saturate(.92) brightness(.96); }
.at-plate:hover img{ transform:scale(1.05); filter:saturate(1.05) brightness(1.02); }
.at-seal{ box-shadow:0 0 0 1px var(--line), inset 0 0 0 1px var(--line); }
@media (prefers-reduced-motion: reduce){
  .at-rise,.at-kb,.at-track{ animation:none } .at-rise{ opacity:1 } .at-kb{ transform:none }
}
`;

const clients = ['Save Mart', 'Comcast', 'CalPERS', 'California Lawyers Association', 'Kaiser Permanente', 'Tenet Health'];

const services = [
  { no: 'I', name: 'Signature Executive Headshots', desc: 'The flagship. Individual portraits for executives, attorneys, and personal brands — guided and hand-retouched.', href: '#book' },
  { no: 'II', name: 'Corporate & Team Headshot Days', desc: 'We bring the studio to you. Consistent, polished headshots for the whole team in a single visit.', href: '#book' },
  { no: 'III', name: 'Annual Headshot Programs', desc: 'A standing relationship — recurring sessions that keep every new hire on-brand, year over year.', href: '#book' },
  { no: 'IV', name: 'Event Photography', desc: 'Conferences, galas, and corporate occasions captured with the same restraint and craft.', href: '#book' },
];

export default function AtelierRedesign() {
  return (
    <div className={`at ${bodoni.variable} ${jost.variable} relative min-h-screen overflow-x-hidden`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="at-veil" aria-hidden="true" />

      <div className="relative z-10">
        {/* Nav */}
        <header className="flex items-center justify-between px-6 md:px-14 py-7">
          <Link href="/redesign" className="flex items-center gap-3">
            <span className="at-seal at-disp grid h-10 w-10 place-items-center rounded-full text-lg at-gold">R</span>
            <span className="at-label text-[11px] text-cream/80">Rojas · Maison</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-10 at-label text-[10px] text-cream/65">
            <a className="at-under hover:text-cream" href="#work">Work</a>
            <a className="at-under hover:text-cream" href="#signature">Signature</a>
            <a className="at-under hover:text-cream" href="#teams">Teams &amp; Events</a>
            <a className="at-under hover:text-cream" href="#about">About</a>
          </nav>
          <a href="#book" className="at-cta at-label text-[10px] border border-[var(--gold)] text-[var(--gold)] rounded-full px-6 py-3">Book a session</a>
        </header>

        <div className="at-hair mx-6 md:mx-14" />

        {/* Hero */}
        <section className="px-6 md:px-14 pt-14 md:pt-20 pb-16 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="at-label text-[11px] at-gold mb-9 at-rise" style={{ animationDelay: '.1s' }}>Est. Modesto — Central Valley</p>
            <h1 className="at-disp font-light leading-[0.94] tracking-[-0.01em] text-[16vw] lg:text-[7.6vw]">
              <span className="block at-rise" style={{ animationDelay: '.2s' }}>The portrait</span>
              <span className="block at-rise" style={{ animationDelay: '.32s' }}>that earns the</span>
              <span className="block italic at-gold at-rise" style={{ animationDelay: '.44s' }}>room.</span>
            </h1>
            <p className="max-w-md text-cream/70 leading-relaxed mt-8 at-rise" style={{ animationDelay: '.56s' }}>
              Executive headshots and corporate photography for people who are introduced before they walk in — made, in person, by Alfonso &amp; Niomi Rojas.
            </p>
            <div className="at-rise flex flex-col sm:flex-row sm:items-center gap-5 mt-10" style={{ animationDelay: '.68s' }}>
              <a href="#book" className="at-cta at-label text-[10px] bg-[var(--gold)] text-[var(--noir)] rounded-full px-8 py-4">Book a Signature session</a>
              <a href="#teams" className="at-under at-label text-[10px] text-cream/70 hover:text-cream">Headshot days for teams →</a>
            </div>
          </div>

          <div className="lg:col-span-5 at-rise" style={{ animationDelay: '.4s' }}>
            <figure className="at-mat">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src="/images/headshots/headshot-executive-ceo.jpg" alt="Executive headshot by Rojas Photography in Modesto" fill priority sizes="(max-width:1024px) 100vw, 42vw" className="at-kb object-cover object-[50%_22%]" />
              </div>
              <figcaption className="at-label text-[9px] text-[var(--gold)]/80 mt-4 flex justify-between">
                <span>No. 01 — Chief Executive</span><span>Hand-retouched</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Proof bar */}
        <section className="px-6 md:px-14 py-10 border-y border-[var(--line)] flex flex-wrap items-baseline gap-x-12 gap-y-5">
          <p className="at-disp text-4xl">500<span className="at-gold">+</span> <span className="at-label text-[10px] align-middle text-cream/55">executives</span></p>
          <p className="at-disp text-4xl">60<span className="at-gold">+</span> <span className="at-label text-[10px] align-middle text-cream/55">five-star reviews</span></p>
          <p className="at-disp text-4xl">2<span className="at-gold">.</span> <span className="at-label text-[10px] align-middle text-cream/55">photographers, every shoot</span></p>
        </section>

        {/* Client marquee */}
        <section className="py-7 overflow-hidden border-b border-[var(--line)]">
          <p className="at-label text-[9px] text-cream/40 text-center mb-5">Trusted by the Valley&apos;s most recognized names</p>
          <div className="at-track at-label text-[12px] text-cream/55">
            {[...clients, ...clients].map((c, i) => (
              <span key={i} className="mx-9 inline-flex items-center gap-9">{c}<span className="at-gold">✦</span></span>
            ))}
          </div>
        </section>

        {/* Two lanes */}
        <section id="signature" className="px-6 md:px-14 py-24">
          <div className="flex items-end justify-between mb-14">
            <h2 className="at-disp text-5xl md:text-7xl tracking-[-0.01em]">Two ways<br />to work with us<span className="at-gold">.</span></h2>
            <span className="at-label text-[10px] text-cream/45 hidden md:block">Choose your lane</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { tag: 'For the individual', title: 'Signature', img: '/images/headshots/headshot-comcast-executive.jpg', pos: '50% 20%', body: 'White-glove executive and personal-brand portraits. Unhurried, directed, and finished by hand — the work that carries your name.', cta: 'Book a Signature session', anchor: undefined },
              { tag: 'For teams & events', title: 'Express', img: '/images/Move Staff Group 9.jpg', pos: '50% 40%', body: 'Fast, consistent headshots and coverage we bring on-site — for entire teams, conferences, and corporate events. Same-day galleries.', cta: 'Get a team quote', anchor: 'teams' },
            ].map((l) => (
              <article key={l.title} id={l.anchor} className="at-plate group relative overflow-hidden at-mat">
                <div className="relative aspect-[5/6] md:aspect-[4/3] overflow-hidden">
                  <Image src={l.img} alt={`${l.title} — Rojas Photography, Modesto`} fill sizes="(max-width:768px) 100vw, 45vw" className="object-cover" style={{ objectPosition: l.pos }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--noir)] via-[var(--noir)]/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <p className="at-label text-[10px] at-gold mb-3">{l.tag}</p>
                  <h3 className="at-disp text-4xl md:text-5xl mb-4">{l.title}</h3>
                  <p className="text-cream/75 leading-relaxed max-w-sm mb-6 text-sm">{l.body}</p>
                  <a href="#book" className="at-under at-label text-[10px] text-cream group-hover:text-[var(--gold)]">{l.cta} →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Services — curated four */}
        <section className="px-6 md:px-14 py-20 border-y border-[var(--line)]">
          <p className="at-label text-[10px] at-gold mb-10">What we make</p>
          <div className="grid md:grid-cols-2 gap-px bg-[var(--line)]">
            {services.map((s) => (
              <a key={s.no} href={s.href} className="group bg-[var(--noir)] p-9 md:p-11 flex gap-7 hover:bg-[var(--noir-2)] transition-colors">
                <span className="at-disp text-3xl at-gold leading-none shrink-0 w-10">{s.no}</span>
                <div>
                  <h3 className="at-disp text-2xl md:text-3xl mb-3 group-hover:text-[var(--gold)] transition-colors">{s.name}</h3>
                  <p className="text-cream/65 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Gallery — The Rojas look */}
        <section id="work" className="px-6 md:px-14 py-24">
          <div className="flex items-end justify-between mb-12">
            <h2 className="at-disp text-5xl md:text-7xl tracking-[-0.01em]">The Rojas look<span className="at-gold">.</span></h2>
            <p className="at-label text-[10px] text-cream/45 hidden md:block">Selected work · 2024–26</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-12 gap-4 auto-rows-[180px] md:auto-rows-[140px]">
            <Plate className="col-span-2 md:col-span-7 md:row-span-3" src="/images/headshots/headshot-ceo-nutrition.jpg" pos="50% 28%" cap="Chief Executive — in studio" />
            <Plate className="col-span-1 md:col-span-5 md:row-span-2" src="/images/Joyce-0029.jpg" pos="50% 20%" cap="Entrepreneur" />
            <Plate className="col-span-1 md:col-span-5 md:row-span-2" src="/images/headshots/headshot-attorney-03.jpg" pos="50% 22%" cap="Attorney — CLA" />
            <Plate className="col-span-2 md:col-span-7 md:row-span-2" src="/images/CLA AM 25 201.jpg" pos="50% 35%" cap="California Lawyers Association" />
            <Plate className="col-span-2 md:col-span-5 md:row-span-2" src="/images/Miguel-(2 of 6) (1).jpg" pos="50% 22%" cap="Finance executive" />
          </div>
        </section>

        {/* Testimonial */}
        <section id="about" className="px-6 md:px-14 py-28 border-y border-[var(--line)]">
          <div className="max-w-4xl mx-auto text-center">
            <span className="at-disp at-gold text-6xl block mb-4 leading-none">&ldquo;</span>
            <blockquote className="at-disp text-3xl md:text-5xl leading-[1.18] tracking-[-0.01em]">
              Alfonso and Niomi put you at ease the moment you arrive. The headshots turned out <span className="italic at-gold">beautifully</span> — better than I knew I could look.
            </blockquote>
            <footer className="at-label text-[10px] text-cream/55 mt-9">Joyce Ulrich — Entrepreneur, Modesto</footer>
          </div>
        </section>

        {/* Annual programs band */}
        <section className="px-6 md:px-14 py-20 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4 at-rise" style={{ animationDelay: '.1s' }}>
            <figure className="at-mat">
              <div className="relative aspect-square overflow-hidden">
                <Image src="/images/Alfonso+Niomi-0026.jpg" alt="Alfonso and Niomi Rojas" fill sizes="(max-width:768px) 100vw, 30vw" className="object-cover object-[50%_30%]" />
              </div>
            </figure>
          </div>
          <div className="md:col-span-8">
            <p className="at-label text-[10px] at-gold mb-5">Annual Headshot Programs</p>
            <h2 className="at-disp text-4xl md:text-6xl leading-[1.02] mb-6">Keep every face<br />on-brand, all year.</h2>
            <p className="text-cream/70 leading-relaxed max-w-xl mb-8">
              A standing relationship for growing companies — recurring sessions so new executives and hires match the same premium look, without renegotiating each time.
            </p>
            <a href="#book" className="at-cta at-label text-[10px] border border-[var(--gold)] text-[var(--gold)] rounded-full px-7 py-3.5 inline-block">Explore annual programs →</a>
          </div>
        </section>

        {/* CTA */}
        <section id="book" className="px-6 md:px-14 py-32 text-center">
          <p className="at-label text-[11px] at-gold mb-7">By appointment</p>
          <h2 className="at-disp font-light text-6xl md:text-[8.5vw] leading-[0.95] tracking-[-0.01em] mb-10">
            Sit for the<br /><span className="italic at-gold">finest</span> portrait<br />of your career.
          </h2>
          <a href="#" className="at-cta at-label text-[11px] bg-[var(--gold)] text-[var(--noir)] rounded-full px-10 py-5 inline-block">Begin the conversation →</a>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-14 py-10 border-t border-[var(--line)] flex flex-col md:flex-row justify-between gap-4 at-label text-[10px] text-cream/50">
          <span>© Rojas Photography — Modesto, California</span>
          <Link href="/redesign" className="at-under hover:text-cream">← Back to all directions</Link>
        </footer>
      </div>
    </div>
  );
}

function Plate({ src, cap, className = '', pos = '50% 50%' }: { src: string; cap: string; className?: string; pos?: string }) {
  return (
    <figure className={`at-plate group relative overflow-hidden ${className}`}>
      <Image src={src} alt={cap} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover" style={{ objectPosition: pos }} />
      <div className="absolute inset-0 ring-1 ring-inset ring-[var(--line)]" />
      <figcaption className="at-label absolute bottom-0 left-0 right-0 text-[9px] text-cream px-4 py-3 bg-gradient-to-t from-[var(--noir)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity">{cap}</figcaption>
    </figure>
  );
}
