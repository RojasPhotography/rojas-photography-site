import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Fraunces, DM_Mono } from 'next/font/google';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--ed-display', display: 'swap' });
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--ed-mono', display: 'swap' });

export const metadata: Metadata = {
  title: 'Redesign — Editorial Gallery | Rojas Photography',
  robots: 'noindex, nofollow',
};

const css = `
.ed{
  --ivory:#F6F2E9; --ink:#17150F; --green:#1F6B4D; --gold:#9C6B1E; --line:#DED7C7;
  background:var(--ivory); color:var(--ink);
  font-family:var(--font-body),system-ui,sans-serif;
}
.ed-disp{ font-family:var(--ed-display),Georgia,serif; font-optical-sizing:auto; }
.ed-mono{ font-family:var(--ed-mono),monospace; letter-spacing:.18em; text-transform:uppercase; }
.ed-grain{ position:fixed; inset:0; z-index:60; pointer-events:none; opacity:.05; mix-blend-mode:multiply;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
@keyframes ed-rise{ from{opacity:0; transform:translateY(28px)} to{opacity:1; transform:translateY(0)} }
.ed-rise{ opacity:0; animation:ed-rise .9s cubic-bezier(.22,1,.36,1) forwards; }
@keyframes ed-marquee{ from{transform:translateX(0)} to{transform:translateX(-50%)} }
.ed-track{ display:inline-flex; white-space:nowrap; animation:ed-marquee 38s linear infinite; }
.ed-plate{ transition:transform .6s cubic-bezier(.22,1,.36,1), box-shadow .6s; }
.ed-plate:hover{ transform:translateY(-6px); box-shadow:0 30px 60px -30px rgba(23,21,15,.45); }
.ed-link{ position:relative; }
.ed-link::after{ content:''; position:absolute; left:0; bottom:-3px; height:1px; width:100%; background:currentColor; transform:scaleX(0); transform-origin:left; transition:transform .4s cubic-bezier(.22,1,.36,1); }
.ed-link:hover::after{ transform:scaleX(1); }
@media (prefers-reduced-motion: reduce){ .ed-rise,.ed-track{ animation:none } .ed-rise{ opacity:1 } }
`;

const clients = ['Save Mart', 'Comcast', 'CalPERS', 'California Lawyers Association', 'Kaiser', 'Tenet Health'];

export default function EditorialRedesign() {
  return (
    <div className={`ed ${fraunces.variable} ${dmMono.variable} min-h-screen overflow-x-hidden`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="ed-grain" aria-hidden="true" />

      {/* Nav */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6 border-b border-[var(--line)]">
        <Link href="/redesign" className="ed-disp text-2xl tracking-[0.2em] font-semibold">ROJAS</Link>
        <nav className="hidden md:flex items-center gap-9 text-sm">
          <a className="ed-link" href="#work">Work</a>
          <a className="ed-link" href="#signature">Signature</a>
          <a className="ed-link" href="#teams">Teams &amp; Events</a>
          <a className="ed-link" href="#about">About</a>
        </nav>
        <a href="#book" className="ed-mono text-[11px] border border-[var(--ink)] rounded-full px-5 py-2.5 hover:bg-[var(--ink)] hover:text-[var(--ivory)] transition-colors">Book a session</a>
      </header>

      {/* Hero — asymmetric editorial */}
      <section className="relative z-10 px-6 md:px-12 pt-16 md:pt-24 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="ed-mono text-[11px] text-[var(--green)] mb-8 ed-rise" style={{ animationDelay: '.05s' }}>(01) — Signature Executive Portraits</p>
            <h1 className="ed-disp font-light leading-[0.92] tracking-[-0.02em] text-[15vw] lg:text-[8.5vw]">
              <span className="block ed-rise" style={{ animationDelay: '.1s' }}>The Valley&apos;s</span>
              <span className="block ed-rise" style={{ animationDelay: '.2s' }}>most trusted</span>
              <span className="block italic ed-rise" style={{ animationDelay: '.3s' }}>
                exec&shy;utives<span className="text-[var(--gold)]">.</span>
              </span>
            </h1>
            <div className="ed-rise flex flex-col sm:flex-row sm:items-center gap-6 mt-10" style={{ animationDelay: '.45s' }}>
              <a href="#book" className="ed-mono text-[11px] bg-[var(--green)] text-[var(--ivory)] rounded-full px-7 py-3.5 hover:bg-[var(--ink)] transition-colors">Book a Signature session</a>
              <a href="#teams" className="ed-link ed-mono text-[11px] text-[var(--ink)]/70">Headshot days for teams →</a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="ed-plate relative aspect-[4/5] border border-[var(--line)] p-2 bg-white ed-rise" style={{ animationDelay: '.35s' }}>
              <div className="relative h-full w-full overflow-hidden">
                <Image src="/images/headshots/headshot-executive-ceo.jpg" alt="Executive headshot — Modesto" fill className="object-cover object-[50%_25%]" sizes="(max-width:1024px) 100vw, 40vw" priority />
              </div>
              <figcaption className="ed-mono text-[10px] text-[var(--ink)]/50 mt-2 flex justify-between">
                <span>Fig. 01 — CEO, Central Valley</span><span>Hand-retouched</span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* meta row */}
        <div className="mt-16 pt-6 border-t border-[var(--line)] flex flex-wrap items-baseline gap-x-10 gap-y-4">
          <p className="ed-disp text-3xl">500<span className="text-[var(--gold)]">+</span> <span className="text-base ed-mono align-middle text-[var(--ink)]/60">executives</span></p>
          <p className="ed-disp text-3xl">60<span className="text-[var(--gold)]">+</span> <span className="text-base ed-mono align-middle text-[var(--ink)]/60">five-star reviews</span></p>
          <p className="ed-mono text-[11px] text-[var(--ink)]/50 ml-auto">Alfonso &amp; Niomi Rojas · Modesto, CA</p>
        </div>
      </section>

      {/* Client marquee */}
      <section className="relative z-10 border-y border-[var(--line)] py-5 overflow-hidden">
        <div className="ed-track ed-mono text-[12px] text-[var(--ink)]/55">
          {[...clients, ...clients].map((c, i) => (
            <span key={i} className="mx-8 inline-flex items-center gap-8">{c}<span className="text-[var(--gold)]">✦</span></span>
          ))}
        </div>
      </section>

      {/* Two lanes — editorial split */}
      <section id="signature" className="relative z-10 px-6 md:px-12 py-24 grid md:grid-cols-2 gap-px bg-[var(--line)]">
        {[
          { n: '01', kicker: 'For the individual', title: 'Signature', body: 'White-glove executive headshots and personal-brand portraits, guided start to finish by Alfonso and Niomi.', link: 'Book a Signature session', accent: 'var(--green)' },
          { n: '02', kicker: 'For teams & events', title: 'Express', body: 'Fast, consistent headshots and coverage we bring to you — for whole teams, conferences, and corporate events.', link: 'Get a team quote', accent: 'var(--gold)' },
        ].map((lane) => (
          <div key={lane.n} id={lane.n === '02' ? 'teams' : undefined} className="bg-[var(--ivory)] p-10 md:p-14 group">
            <div className="flex items-start justify-between mb-8">
              <span className="ed-disp text-7xl leading-none" style={{ color: lane.accent }}>{lane.n}</span>
              <span className="ed-mono text-[11px] text-[var(--ink)]/50">{lane.kicker}</span>
            </div>
            <h2 className="ed-disp text-5xl mb-5">{lane.title}</h2>
            <p className="text-[var(--ink)]/75 leading-relaxed max-w-md mb-10">{lane.body}</p>
            <a href="#book" className="ed-link ed-mono text-[11px]">{lane.link} →</a>
          </div>
        ))}
      </section>

      {/* Gallery plates — asymmetric */}
      <section id="work" className="relative z-10 px-6 md:px-12 py-24">
        <div className="flex items-end justify-between mb-12 border-b border-[var(--line)] pb-6">
          <h2 className="ed-disp text-5xl md:text-7xl tracking-[-0.02em]">The Rojas look<span className="text-[var(--gold)]">.</span></h2>
          <p className="ed-mono text-[11px] text-[var(--ink)]/50 hidden md:block">Selected work — 2024–26</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-12 gap-5 auto-rows-[200px] md:auto-rows-[150px]">
          <Plate className="col-span-2 md:col-span-7 md:row-span-3" src="/images/headshots/headshot-ceo-nutrition.jpg" pos="50% 30%" cap="Fig. 02 — Executive, in studio" />
          <Plate className="col-span-1 md:col-span-5 md:row-span-2" src="/images/Joyce-0029.jpg" pos="50% 20%" cap="Fig. 03 — Entrepreneur" />
          <Plate className="col-span-1 md:col-span-5 md:row-span-2" src="/images/headshots/headshot-attorney-03.jpg" pos="50% 25%" cap="Fig. 04 — Attorney, CLA" />
          <Plate className="col-span-2 md:col-span-7 md:row-span-2" src="/images/Move Staff Group 9.jpg" pos="50% 35%" cap="Fig. 05 — On-site team day" />
          <Plate className="col-span-2 md:col-span-5 md:row-span-2" src="/images/Miguel-(2 of 6) (1).jpg" pos="50% 25%" cap="Fig. 06 — Finance executive" />
        </div>
      </section>

      {/* Pull quote */}
      <section id="about" className="relative z-10 px-6 md:px-12 py-24 border-y border-[var(--line)]">
        <blockquote className="max-w-4xl mx-auto text-center">
          <p className="ed-disp text-3xl md:text-5xl leading-[1.15] tracking-[-0.01em]">
            &ldquo;Alfonso and Niomi create a comfortable environment that puts you at ease immediately. The headshots turned out <span className="italic text-[var(--green)]">beautifully</span>.&rdquo;
          </p>
          <footer className="ed-mono text-[11px] text-[var(--ink)]/55 mt-8">Joyce Ulrich — Entrepreneur, Modesto</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section id="book" className="relative z-10 px-6 md:px-12 py-28 text-center">
        <p className="ed-mono text-[11px] text-[var(--green)] mb-6">Book a session</p>
        <h2 className="ed-disp text-6xl md:text-8xl tracking-[-0.02em] leading-[0.95] mb-10">Let&apos;s make<br /><span className="italic">something worth</span><br />looking at.</h2>
        <a href="#" className="ed-mono text-[11px] bg-[var(--ink)] text-[var(--ivory)] rounded-full px-9 py-4 inline-block hover:bg-[var(--green)] transition-colors">Begin →</a>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 py-10 border-t border-[var(--line)] flex flex-col md:flex-row justify-between gap-4 ed-mono text-[11px] text-[var(--ink)]/55">
        <span>© Rojas Photography — Modesto, CA</span>
        <Link href="/redesign" className="ed-link">← Back to all directions</Link>
      </footer>
    </div>
  );
}

function Plate({ src, cap, className = '', pos = '50% 50%' }: { src: string; cap: string; className?: string; pos?: string }) {
  return (
    <figure className={`ed-plate group relative overflow-hidden bg-white border border-[var(--line)] ${className}`}>
      <Image src={src} alt={cap} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" style={{ objectPosition: pos }} />
      <figcaption className="ed-mono absolute bottom-0 left-0 right-0 text-[10px] text-white px-3 py-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">{cap}</figcaption>
    </figure>
  );
}
