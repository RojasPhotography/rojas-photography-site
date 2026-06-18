import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Newsreader, DM_Mono } from 'next/font/google';

const newsreader = Newsreader({ subsets: ['latin'], weight: ['300', '400', '500'], style: ['normal', 'italic'], variable: '--mn-display', display: 'swap' });
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400'], variable: '--mn-mono', display: 'swap' });

export const metadata: Metadata = {
  title: 'Redesign — Modern Minimal | Rojas Photography',
  robots: 'noindex, nofollow',
};

const css = `
.mn{
  --paper:#FFFFFF; --ink:#111110; --mut:#7A7872; --green:#1F6B4D; --line:#E8E6E0;
  background:var(--paper); color:var(--ink);
  font-family:var(--font-body),system-ui,sans-serif;
}
.mn-disp{ font-family:var(--mn-display),Georgia,serif; }
.mn-mono{ font-family:var(--mn-mono),monospace; letter-spacing:.16em; text-transform:uppercase; }
@keyframes mn-fade{ from{opacity:0; transform:translateY(18px)} to{opacity:1; transform:translateY(0)} }
.mn-fade{ opacity:0; animation:mn-fade 1s cubic-bezier(.22,1,.36,1) forwards; }
.mn-imgwrap img{ transition:transform 1.1s cubic-bezier(.22,1,.36,1); }
.mn-imgwrap:hover img{ transform:scale(1.04); }
.mn-row{ transition:padding-left .4s cubic-bezier(.22,1,.36,1); }
.mn-row:hover{ padding-left:14px; }
.mn-link{ position:relative; }
.mn-link::after{ content:''; position:absolute; left:0; bottom:-2px; height:1px; width:100%; background:currentColor; transform:scaleX(0); transform-origin:left; transition:transform .4s cubic-bezier(.22,1,.36,1); }
.mn-link:hover::after{ transform:scaleX(1); }
@media (prefers-reduced-motion: reduce){ .mn-fade{ animation:none; opacity:1 } }
`;

export default function MinimalRedesign() {
  return (
    <div className={`mn ${newsreader.variable} ${dmMono.variable} min-h-screen overflow-x-hidden`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* Nav */}
      <header className="flex items-center justify-between px-6 md:px-16 py-8 border-b border-[var(--line)]">
        <Link href="/redesign" className="text-sm font-medium tracking-tight">Rojas Photography</Link>
        <nav className="hidden md:flex items-center gap-10 mn-mono text-[10px] text-[var(--mut)]">
          <a className="mn-link" href="#work">Work</a>
          <a className="mn-link" href="#lanes">Services</a>
          <a className="mn-link" href="#book">Contact</a>
        </nav>
        <a href="#book" className="mn-mono text-[10px] text-[var(--green)]">Book →</a>
      </header>

      {/* Hero — huge type, vast air */}
      <section className="px-6 md:px-16 pt-24 md:pt-40 pb-24 md:pb-40">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <p className="md:col-span-2 mn-mono text-[10px] text-[var(--mut)] mn-fade pt-3" style={{ animationDelay: '.05s' }}>(01)<br />Modesto, CA</p>
          <h1 className="md:col-span-10 mn-disp font-light leading-[1.0] tracking-[-0.03em] text-[13vw] md:text-[8vw]">
            <span className="block mn-fade" style={{ animationDelay: '.1s' }}>Executive headshots,</span>
            <span className="block italic text-[var(--mut)] mn-fade" style={{ animationDelay: '.25s' }}>quietly exceptional.</span>
          </h1>
        </div>
        <div className="grid md:grid-cols-12 gap-8 mt-16 md:mt-24">
          <div className="md:col-span-2" />
          <div className="md:col-span-6 mn-fade" style={{ animationDelay: '.4s' }}>
            <p className="text-lg text-[var(--ink)]/80 leading-relaxed max-w-md">
              Premium corporate photography for the Central Valley, by Alfonso and Niomi Rojas. Two lanes — individual and team — one standard.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end items-start mn-fade" style={{ animationDelay: '.5s' }}>
            <a href="#book" className="mn-mono text-[11px] border-b border-[var(--ink)] pb-1 hover:text-[var(--green)] hover:border-[var(--green)] transition-colors">Book a session →</a>
          </div>
        </div>
      </section>

      {/* Full-bleed image band */}
      <section className="mn-imgwrap relative h-[60vh] md:h-[78vh] overflow-hidden border-y border-[var(--line)]">
        <Image src="/images/headshots/headshot-ceo-nutrition.jpg" alt="Executive headshot, Modesto" fill priority className="object-cover" style={{ objectPosition: '50% 22%' }} sizes="100vw" />
      </section>

      {/* Two lanes — hairline index rows */}
      <section id="lanes" className="px-6 md:px-16 py-24">
        <p className="mn-mono text-[10px] text-[var(--mut)] mb-10">Services — select</p>
        {[
          { n: '01', title: 'Signature', sub: 'For the individual', desc: 'Guided executive & personal-brand portraits.' },
          { n: '02', title: 'Express', sub: 'For teams & events', desc: 'On-site team headshots and event coverage.' },
          { n: '03', title: 'Annual Programs', sub: 'For growing companies', desc: 'New hires and a yearly refresh, kept consistent.' },
        ].map((row) => (
          <a key={row.n} href="#book" className="mn-row group block border-t border-[var(--line)] py-8 md:py-10">
            <div className="grid md:grid-cols-12 gap-4 items-baseline">
              <span className="md:col-span-1 mn-mono text-[11px] text-[var(--mut)]">{row.n}</span>
              <h2 className="md:col-span-4 mn-disp text-4xl md:text-5xl font-light">{row.title}</h2>
              <span className="md:col-span-3 mn-mono text-[10px] text-[var(--mut)]">{row.sub}</span>
              <p className="md:col-span-3 text-[var(--ink)]/70">{row.desc}</p>
              <span className="md:col-span-1 text-right text-[var(--green)] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </a>
        ))}
        <div className="border-t border-[var(--line)]" />
      </section>

      {/* Quiet gallery */}
      <section id="work" className="px-6 md:px-16 pb-24">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="mn-disp text-4xl md:text-6xl font-light tracking-[-0.02em]">Selected work</h2>
          <span className="mn-mono text-[10px] text-[var(--mut)]">2024 — 2026</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: '/images/Joyce-0029.jpg', pos: '50% 20%', cap: 'Entrepreneur' },
            { src: '/images/headshots/headshot-attorney-03.jpg', pos: '50% 25%', cap: 'Attorney' },
            { src: '/images/headshots/headshot-executive-ceo.jpg', pos: '50% 25%', cap: 'CEO' },
            { src: '/images/Miguel-(2 of 6) (1).jpg', pos: '50% 25%', cap: 'Finance' },
          ].map((img) => (
            <figure key={img.src} className="mn-imgwrap group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={img.src} alt={img.cap} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" style={{ objectPosition: img.pos }} />
              </div>
              <figcaption className="mn-mono text-[10px] text-[var(--mut)] mt-3 flex justify-between">
                <span>{img.cap}</span><span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="px-6 md:px-16 py-32 border-t border-[var(--line)]">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <h2 className="md:col-span-9 mn-disp text-5xl md:text-8xl font-light leading-[1.0] tracking-[-0.03em]">
            Let&apos;s make something <span className="italic text-[var(--mut)]">worth looking at.</span>
          </h2>
          <div className="md:col-span-3 md:text-right">
            <a href="#" className="mn-mono text-[11px] border-b border-[var(--ink)] pb-1 hover:text-[var(--green)] hover:border-[var(--green)] transition-colors">Book a session →</a>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-16 py-10 border-t border-[var(--line)] flex flex-col md:flex-row justify-between gap-4 mn-mono text-[10px] text-[var(--mut)]">
        <span>© Rojas Photography — Modesto, CA</span>
        <Link href="/redesign" className="mn-link text-[var(--ink)]">← Back to all directions</Link>
      </footer>
    </div>
  );
}
