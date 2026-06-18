import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Cormorant_Garamond, DM_Mono } from 'next/font/google';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--nr-display', display: 'swap' });
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400'], variable: '--nr-mono', display: 'swap' });

export const metadata: Metadata = {
  title: 'Redesign — Cinematic Noir | Rojas Photography',
  robots: 'noindex, nofollow',
};

const css = `
.nr{
  --bg:#0B0E0C; --panel:#121712; --ink:#EDE7D8; --green:#2E8C63; --green-dim:#1F6B4D; --gold:#C9A24B; --line:rgba(237,231,216,.14);
  background:var(--bg); color:var(--ink);
  font-family:var(--font-body),system-ui,sans-serif;
}
.nr-disp{ font-family:var(--nr-display),Georgia,serif; }
.nr-mono{ font-family:var(--nr-mono),monospace; letter-spacing:.22em; text-transform:uppercase; }
.nr-grain{ position:fixed; inset:0; z-index:60; pointer-events:none; opacity:.08;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
@keyframes nr-rise{ from{opacity:0; transform:translateY(34px)} to{opacity:1; transform:translateY(0)} }
.nr-rise{ opacity:0; animation:nr-rise 1.1s cubic-bezier(.16,1,.3,1) forwards; }
@keyframes nr-burns{ from{transform:scale(1.04)} to{transform:scale(1.16)} }
.nr-burns{ animation:nr-burns 22s ease-out forwards; }
@keyframes nr-glow{ 0%,100%{opacity:.5} 50%{opacity:.9} }
.nr-glow{ animation:nr-glow 5s ease-in-out infinite; }
.nr-card{ transition:transform .6s cubic-bezier(.16,1,.3,1), border-color .6s, background .6s; }
.nr-card:hover{ transform:translateY(-8px); border-color:var(--gold); background:#161C16; }
.nr-link{ position:relative; }
.nr-link::after{ content:''; position:absolute; left:0; bottom:-3px; height:1px; width:100%; background:var(--gold); transform:scaleX(0); transform-origin:left; transition:transform .5s cubic-bezier(.16,1,.3,1); }
.nr-link:hover::after{ transform:scaleX(1); }
.nr-imgwrap img{ transition:transform .9s cubic-bezier(.16,1,.3,1); }
.nr-imgwrap:hover img{ transform:scale(1.06); }
@media (prefers-reduced-motion: reduce){ .nr-rise,.nr-burns,.nr-glow{ animation:none } .nr-rise{ opacity:1 } }
`;

export default function NoirRedesign() {
  return (
    <div className={`nr ${cormorant.variable} ${dmMono.variable} min-h-screen overflow-x-hidden`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="nr-grain" aria-hidden="true" />

      {/* Hero — full-bleed cinematic */}
      <section className="relative min-h-screen flex flex-col">
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/images/Kaiser BTS Headshots.png" alt="" fill priority className="object-cover nr-burns" style={{ objectPosition: '50% 30%' }} aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(120% 90% at 50% 10%, rgba(11,14,12,.35) 0%, rgba(11,14,12,.72) 55%, rgba(11,14,12,.96) 100%)' }} />
        </div>

        {/* nav */}
        <header className="relative z-20 flex items-center justify-between px-6 md:px-12 py-7">
          <Link href="/redesign" className="nr-disp text-2xl font-medium tracking-[0.18em]">ROJAS</Link>
          <nav className="hidden md:flex items-center gap-9 text-sm text-[var(--ink)]/80">
            <a className="nr-link" href="#work">Work</a>
            <a className="nr-link" href="#lanes">Signature</a>
            <a className="nr-link" href="#lanes">Teams</a>
          </nav>
          <a href="#book" className="nr-mono text-[10px] border border-[var(--ink)]/30 rounded-full px-5 py-2.5 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors">Book</a>
        </header>

        {/* hero content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 pb-24 max-w-5xl">
          <p className="nr-mono text-[11px] text-[var(--gold)] mb-8 nr-rise" style={{ animationDelay: '.1s' }}>Premium Corporate Photography — Modesto</p>
          <h1 className="nr-disp font-light leading-[0.95] tracking-[-0.01em] text-[14vw] md:text-[7.5vw]">
            <span className="block nr-rise" style={{ animationDelay: '.2s' }}>Your business is better</span>
            <span className="block nr-rise" style={{ animationDelay: '.35s' }}>than your photos <span className="italic text-[var(--gold)]">suggest.</span></span>
          </h1>
          <div className="nr-rise flex flex-col sm:flex-row sm:items-center gap-6 mt-12" style={{ animationDelay: '.55s' }}>
            <a href="#book" className="nr-mono text-[11px] bg-[var(--ink)] text-[var(--bg)] rounded-full px-8 py-4 hover:bg-[var(--gold)] transition-colors">Book a Signature session</a>
            <a href="#lanes" className="nr-link nr-mono text-[11px] text-[var(--ink)]/70">Headshot days for teams →</a>
          </div>
        </div>

        {/* bottom proof strip */}
        <div className="relative z-10 px-6 md:px-12 py-6 border-t border-[var(--line)] flex flex-wrap items-center gap-x-10 gap-y-3">
          <span className="nr-mono text-[10px] text-[var(--ink)]/50">Trusted by</span>
          {['Save Mart', 'Comcast', 'CalPERS', 'Kaiser', 'CLA'].map((c) => (
            <span key={c} className="nr-disp text-xl text-[var(--ink)]/85">{c}</span>
          ))}
          <span className="nr-mono text-[10px] text-[var(--ink)]/50 ml-auto nr-glow">Scroll ↓</span>
        </div>
      </section>

      {/* Spotlight stat row */}
      <section className="relative px-6 md:px-12 py-24 grid md:grid-cols-3 gap-px bg-[var(--line)]">
        {[
          { v: '500+', l: 'Executives photographed' },
          { v: '60+', l: 'Five-star reviews' },
          { v: '15+', l: 'Years in corporate leadership' },
        ].map((s) => (
          <div key={s.l} className="bg-[var(--bg)] py-12 text-center">
            <p className="nr-disp text-7xl font-light text-[var(--gold)]">{s.v}</p>
            <p className="nr-mono text-[11px] text-[var(--ink)]/55 mt-3">{s.l}</p>
          </div>
        ))}
      </section>

      {/* Two lanes — dark cards */}
      <section id="lanes" className="relative px-6 md:px-12 pb-24 grid md:grid-cols-2 gap-6">
        {[
          { n: '01', kicker: 'For the individual', title: 'Signature', body: 'White-glove executive headshots, guided start to finish by Alfonso and Niomi.', img: '/images/headshots/headshot-executive-ceo.jpg', link: 'Book a session' },
          { n: '02', kicker: 'For teams & events', title: 'Express', body: 'Fast, consistent coverage we bring to your office — for whole teams and corporate events.', img: '/images/Move Staff Group 9.jpg', link: 'Get a team quote' },
        ].map((lane) => (
          <article key={lane.n} className="nr-card border border-[var(--line)] bg-[var(--panel)] overflow-hidden">
            <div className="nr-imgwrap relative h-64 overflow-hidden">
              <Image src={lane.img} alt={lane.title} fill className="object-cover" style={{ objectPosition: '50% 25%' }} sizes="(max-width:768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--panel)] to-transparent" />
              <span className="nr-disp absolute top-5 left-6 text-5xl text-[var(--gold)]">{lane.n}</span>
            </div>
            <div className="p-8 md:p-10">
              <p className="nr-mono text-[10px] text-[var(--ink)]/50 mb-3">{lane.kicker}</p>
              <h2 className="nr-disp text-5xl mb-4">{lane.title}</h2>
              <p className="text-[var(--ink)]/70 leading-relaxed max-w-md mb-8">{lane.body}</p>
              <a href="#book" className="nr-link nr-mono text-[11px] text-[var(--gold)]">{lane.link} →</a>
            </div>
          </article>
        ))}
      </section>

      {/* Gallery */}
      <section id="work" className="relative px-6 md:px-12 py-24 border-t border-[var(--line)]">
        <h2 className="nr-disp text-6xl md:text-8xl font-light tracking-[-0.01em] mb-12">The Rojas look<span className="text-[var(--gold)]">.</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: '/images/headshots/headshot-ceo-nutrition.jpg', pos: '50% 30%' },
            { src: '/images/Joyce-0029.jpg', pos: '50% 20%' },
            { src: '/images/headshots/headshot-attorney-03.jpg', pos: '50% 25%' },
            { src: '/images/Miguel-(2 of 6) (1).jpg', pos: '50% 25%' },
          ].map((img) => (
            <div key={img.src} className="nr-imgwrap relative aspect-[3/4] overflow-hidden border border-[var(--line)]">
              <Image src={img.src} alt="Portrait" fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" style={{ objectPosition: img.pos }} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="relative px-6 md:px-12 py-32 text-center border-t border-[var(--line)]">
        <p className="nr-mono text-[11px] text-[var(--gold)] mb-6">Book a session</p>
        <h2 className="nr-disp text-6xl md:text-9xl font-light leading-[0.95] tracking-[-0.02em] mb-12">
          Step into<br /><span className="italic text-[var(--gold)]">the light.</span>
        </h2>
        <a href="#" className="nr-mono text-[11px] bg-[var(--ink)] text-[var(--bg)] rounded-full px-10 py-4 inline-block hover:bg-[var(--gold)] transition-colors">Begin →</a>
      </section>

      <footer className="relative px-6 md:px-12 py-10 border-t border-[var(--line)] flex flex-col md:flex-row justify-between gap-4 nr-mono text-[10px] text-[var(--ink)]/50">
        <span>© Rojas Photography — Modesto, CA</span>
        <Link href="/redesign" className="nr-link">← Back to all directions</Link>
      </footer>
    </div>
  );
}
