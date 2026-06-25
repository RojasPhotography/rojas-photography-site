import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { Fraunces, Hanken_Grotesk } from 'next/font/google';

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '500', '600', '700'], style: ['normal', 'italic'], variable: '--im-display', display: 'swap' });
const hanken = Hanken_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--im-body', display: 'swap' });

export const metadata: Metadata = {
  title: 'Redesign — Immersive (Cinematic, Full-Bleed) | Rojas Photography',
  robots: 'noindex, nofollow',
};

const css = `
.im{
  --ink:#0A0B0A; --ink-2:#101311; --cream:#F3F1E9; --muted:rgba(243,241,233,.62);
  --green:#1F6B4D; --green-lt:#37B07C; --line:rgba(243,241,233,.14);
  background:var(--ink); color:var(--cream);
  font-family:var(--im-body),system-ui,sans-serif; font-weight:300; -webkit-font-smoothing:antialiased;
}
.im-disp{ font-family:var(--im-display),Georgia,serif; }
.im-label{ letter-spacing:.32em; text-transform:uppercase; font-weight:600; font-size:11px; }
.im-em{ color:var(--green-lt); }

/* nav */
.im-link{ position:relative; }
.im-link::after{ content:''; position:absolute; left:0; bottom:-4px; height:1px; width:100%; background:var(--green-lt);
  transform:scaleX(0); transform-origin:left; transition:transform .45s cubic-bezier(.16,1,.3,1); }
.im-link:hover::after{ transform:scaleX(1); }

/* buttons */
.im-btn{ display:inline-flex; align-items:center; gap:.6rem; border-radius:999px; font-weight:600; font-size:13.5px;
  letter-spacing:.02em; transition:transform .4s cubic-bezier(.16,1,.3,1), background .4s, color .4s, border-color .4s; }
.im-btn:hover{ transform:translateY(-2px); }
.im-btn-green{ background:var(--green); color:var(--cream); }
.im-btn-green:hover{ background:var(--green-lt); color:#06140D; }
.im-btn-ghost{ background:rgba(243,241,233,.06); color:var(--cream); border:1px solid var(--line); backdrop-filter:blur(6px); }
.im-btn-ghost:hover{ border-color:var(--green-lt); }
.im-btn-cream{ background:var(--cream); color:#0A0B0A; }
.im-btn-cream:hover{ background:#fff; }

/* ken burns hero */
@keyframes im-kb{ from{transform:scale(1.16)} to{transform:scale(1.02)} }
.im-kb{ animation:im-kb 20s ease-out forwards; }
@keyframes im-fade{ from{opacity:0; transform:translateY(28px)} to{opacity:1; transform:translateY(0)} }
.im-fade{ opacity:0; animation:im-fade 1.1s cubic-bezier(.16,1,.3,1) forwards; }
.im-fade-2{ animation-delay:.18s } .im-fade-3{ animation-delay:.34s } .im-fade-4{ animation-delay:.5s }

/* scroll cue */
@keyframes im-bob{ 0%,100%{transform:translateY(0); opacity:.5} 50%{transform:translateY(7px); opacity:1} }
.im-bob{ animation:im-bob 2.2s ease-in-out infinite; }

/* marquee */
@keyframes im-marq{ from{transform:translateX(0)} to{transform:translateX(-50%)} }
.im-track{ display:flex; width:max-content; animation:im-marq 60s linear infinite; }
.im-track:hover{ animation-play-state:paused; }
.im-face{ position:relative; flex:0 0 auto; width:230px; height:300px; overflow:hidden; border-radius:3px; }
.im-face img{ filter:grayscale(1) brightness(.82); transition:filter .6s, transform .9s cubic-bezier(.16,1,.3,1); }
.im-face:hover img{ filter:grayscale(0) brightness(1); transform:scale(1.06); }
.im-tile img{ transition:transform 1s cubic-bezier(.16,1,.3,1), filter .6s; filter:brightness(.96); }
.im-tile:hover img{ transform:scale(1.05); filter:brightness(1.04); }

/* lane panels */
.im-panel{ position:relative; overflow:hidden; }
.im-panel img{ transition:transform 1.2s cubic-bezier(.16,1,.3,1), filter .8s; filter:brightness(.62); }
.im-panel:hover img{ transform:scale(1.06); filter:brightness(.74); }

/* scroll-driven reveal (Chrome/modern); safe fallback = visible */
.im-rv{ }
@supports (animation-timeline: view()){
  .im-rv{ opacity:0; transform:translateY(46px); animation:im-rvk linear forwards; animation-timeline:view(); animation-range:entry 6% cover 32%; }
  @keyframes im-rvk{ to{opacity:1; transform:none} }
}
@media (prefers-reduced-motion: reduce){
  .im-kb,.im-fade,.im-bob,.im-track{ animation:none } .im-fade{ opacity:1; transform:none }
  .im-rv{ opacity:1; transform:none }
}
`;

// Curated fallback faces (used until you drop your own into /public/images/gallery)
const headshotWall = [
  'headshot-finance-ceo.jpg', 'headshot-attorney-02.jpg', 'headshot-comcast-executive.jpg', 'headshot-attorney-03.jpg',
  'headshot-healthcare-executive-01.jpg', 'headshot-executive-ceo.jpg', 'headshot-cpa-finance-01.jpg', 'headshot-attorney-01.jpg',
  'headshot-realtor-01.jpg', 'headshot-finance-cpa.jpg',
].map((f) => `/images/headshots/${f}`);

// Auto-read everything you drop into /public/images/gallery
function readGallery(): string[] {
  try {
    return fs
      .readdirSync(path.join(process.cwd(), 'public/images/gallery'))
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .sort()
      .map((f) => `/images/gallery/${f}`);
  } catch {
    return [];
  }
}
const galleryPaths = readGallery();
// Moving wall: prefer your gallery once there are enough, else the curated set
const wallPaths = galleryPaths.length >= 6 ? galleryPaths : headshotWall;

const clients = ['COMCAST', 'SAVE MART', 'CALIFORNIA LAWYERS ASSN', 'KAISER PERMANENTE', 'VALLEY FIRST CREDIT UNION'];

export default function Immersive() {
  const marquee = [...wallPaths, ...wallPaths];
  return (
    <div className={`im ${fraunces.variable} ${hanken.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* NAV (overlaid on hero) */}
      <header className="fixed top-0 inset-x-0 z-50">
        <nav className="max-w-[1320px] mx-auto px-6 md:px-10 h-[76px] flex items-center justify-between">
          <Link href="/redesign/immersive" className="flex items-center">
            <Image src="/images/Rojas Photography Logo 24.6.png" alt="Rojas Photography" width={2672} height={396} className="h-6 w-auto invert" priority />
          </Link>
          <div className="hidden lg:flex items-center gap-9 im-label" style={{ letterSpacing: '.18em' }}>
            <a href="#work" className="im-link">Work</a>
            <a href="#individuals" className="im-link">Individuals</a>
            <a href="#teams" className="im-link">Teams</a>
            <a href="#about" className="im-link">About</a>
          </div>
          <a href="#book" className="im-btn im-btn-green px-5 py-2.5">Book a session</a>
        </nav>
      </header>

      {/* HERO — full bleed */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <div className="absolute inset-0 im-kb">
          <Image src="/images/headshots/headshot-finance-ceo.jpg" alt="Cinematic executive headshot by Rojas Photography, Modesto" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: '64% 28%' }} />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(10,11,10,.92) 0%, rgba(10,11,10,.62) 38%, rgba(10,11,10,.15) 70%, rgba(10,11,10,.45) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(10,11,10,.85) 0%, transparent 36%)' }} />

        <div className="relative h-full max-w-[1320px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-[8vh]">
          <p className="im-label im-em im-fade">Professional Headshots · Modesto · Central Valley</p>
          <h1 className="im-disp im-fade im-fade-2 mt-6 font-medium text-[44px] sm:text-[66px] lg:text-[86px] leading-[0.98] max-w-[16ch]">
            Your headshot should look as good<br className="hidden md:block" /> as you <span className="italic im-em">actually are.</span>
          </h1>
          <p className="im-fade im-fade-3 mt-7 max-w-[40ch] text-[17px] leading-[1.7]" style={{ color: 'var(--muted)' }}>
            We&rsquo;re Alfonso and Niomi Rojas. For fifteen years we&rsquo;ve photographed the people who run the Central Valley &mdash;
            in our Modesto studio, or for entire teams on&nbsp;site in a single day.
          </p>
          <div className="im-fade im-fade-4 mt-9 flex flex-col sm:flex-row gap-3">
            <a href="#book" className="im-btn im-btn-green px-7 py-4">Book your headshot session</a>
            <a href="#teams" className="im-btn im-btn-ghost px-7 py-4">Headshot days for your team</a>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 im-bob im-label" style={{ color: 'var(--muted)' }}>Scroll</div>
      </section>

      {/* MARQUEE — wall of faces */}
      <section id="work" className="py-16 md:py-24 border-y" style={{ borderColor: 'var(--line)' }}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="im-disp text-[30px] md:text-[42px] leading-tight font-medium">
            1,000+ professionals. <span className="im-em">One studio.</span>
          </h2>
          <p className="max-w-[34ch] text-[14.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>
            Executives, attorneys, founders and physicians across Modesto and the Central Valley. Hover to bring a face to life.
          </p>
        </div>
        <div className="im-track">
          {marquee.map((src, i) => (
            <div key={i} className="im-face mr-4">
              <Image src={src} alt="" fill sizes="230px" className="object-cover" style={{ objectPosition: '50% 20%' }} />
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY GRID — auto-reads /public/images/gallery */}
      {galleryPaths.length > 0 && (
        <section className="max-w-[1320px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="im-rv mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="im-label im-em">The gallery</p>
              <h2 className="im-disp mt-4 text-[30px] md:text-[42px] leading-tight font-medium">Faces from the studio.</h2>
            </div>
            <Link href="/portfolio" className="im-label im-link im-em">See the full portfolio &rarr;</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryPaths.map((src, i) => (
              <div key={src} className="im-tile relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image src={src} alt={`Professional headshot ${i + 1} by Rojas Photography in Modesto`} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" style={{ objectPosition: '50% 18%' }} loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* STATEMENT */}
      <section id="about" className="max-w-[1100px] mx-auto px-6 md:px-10 py-28 md:py-40">
        <p className="im-label im-em im-rv">Why it matters</p>
        <p className="im-disp im-rv mt-8 text-[30px] sm:text-[42px] lg:text-[54px] leading-[1.15] font-medium">
          You are constantly being judged by a photo you didn&rsquo;t choose. <span className="im-em">We fix that</span> &mdash;
          one frame that finally looks like the person your reputation already promises.
        </p>
      </section>

      {/* TWO LANES — full-bleed split panels with real buttons */}
      <section className="grid md:grid-cols-2">
        <div id="individuals" className="im-panel group relative h-[78vh] min-h-[560px]">
          <Image src="/images/headshots/headshot-attorney-02.jpg" alt="In-studio executive headshots in Modesto" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" style={{ objectPosition: '50% 18%' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(10,11,10,.92) 0%, rgba(10,11,10,.12) 58%, rgba(10,11,10,.35) 100%)' }} />
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
            <p className="im-label im-em">In our studio &middot; for individuals</p>
            <h3 className="im-disp mt-3 text-[32px] md:text-[44px] leading-tight">Studio headshots</h3>
            <p className="mt-3 max-w-[40ch] text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              You come to our Modesto studio. Both of us behind the camera, directing you the whole way &mdash;
              relaxed, confident, and hand-retouched. Built for executives, attorneys, and personal brands.
            </p>
            <Link href="/premium-headshots" className="im-btn im-btn-green px-7 py-4 mt-7 w-fit">
              Book a studio session <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>

        <div id="teams" className="im-panel group relative h-[78vh] min-h-[560px]">
          <Image src="/images/Kaiser BTS Headshots.png" alt="On-site corporate team headshot day in the Central Valley" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" style={{ objectPosition: '50% 35%' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(10,11,10,.92) 0%, rgba(10,11,10,.12) 58%, rgba(10,11,10,.35) 100%)' }} />
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
            <p className="im-label im-em">We come to you &middot; for your whole team</p>
            <h3 className="im-disp mt-3 text-[32px] md:text-[44px] leading-tight">We bring the studio to you</h3>
            <p className="mt-3 max-w-[40ch] text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              We set up a full studio at your office and photograph your entire team in a single day &mdash;
              consistent, on-brand, and ready to use. No travel, no scheduling chaos, no downtime.
            </p>
            <Link href="/on-site-photography" className="im-btn im-btn-cream px-7 py-4 mt-7 w-fit">
              Plan a team headshot day <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="max-w-[1320px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="im-rv flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <div>
            <p className="im-label im-em">Beyond headshots</p>
            <h2 className="im-disp mt-4 text-[30px] md:text-[42px] leading-tight font-medium">Need something more than headshots?</h2>
          </div>
          <p className="max-w-[40ch] text-[14.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>
            Headshots are what we&rsquo;re known for &mdash; but we also cover the rest of what your brand needs across Modesto and the Central Valley.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            ['Commercial photography', 'Brand, product & workplace imagery', '/commercial'],
            ['Video production', 'Brand films, interviews & drone', '/video'],
            ['Event photography', 'Conferences & live coverage', '/event-photography'],
            ['Headshot booth', 'Fast, walk-up headshots for events', '/headshot-booth'],
          ].map(([title, sub, href]) => (
            <Link key={href} href={href} className="group rounded-md border p-6 flex flex-col justify-between min-h-[150px] transition-colors hover:border-[var(--green-lt)]" style={{ borderColor: 'var(--line)', background: 'var(--ink-2)' }}>
              <div>
                <h3 className="im-disp text-[20px] leading-tight">{title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>{sub}</p>
              </div>
              <span className="im-label mt-5 inline-flex items-center gap-2 group-hover:gap-3 transition-all im-em">View &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* TRUSTED + STATS */}
      <section className="max-w-[1320px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-10 md:gap-6 mb-16">
          {[['1,000+', 'professionals photographed'], ['60+', 'five-star reviews'], ['15+', 'years in corporate leadership']].map(([n, l]) => (
            <div key={l} className="im-rv text-center md:text-left">
              <div className="im-disp text-[48px] md:text-[60px] leading-none im-em">{n}</div>
              <div className="mt-3 im-label" style={{ color: 'var(--muted)' }}>{l}</div>
            </div>
          ))}
        </div>
        <div className="pt-10 border-t flex flex-col md:flex-row md:items-center gap-5 md:gap-10" style={{ borderColor: 'var(--line)' }}>
          <span className="im-label whitespace-nowrap" style={{ color: 'var(--muted)' }}>Trusted by</span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {clients.map((c) => (
              <span key={c} className="im-disp text-[15px] tracking-wide" style={{ color: 'var(--muted)' }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA — full bleed */}
      <section id="book" className="relative h-[80vh] min-h-[520px] overflow-hidden">
        <Image src="/images/Alfonso+Niomi-0026.jpg" alt="Alfonso and Niomi Rojas, Rojas Photography, Modesto" fill sizes="100vw" className="object-cover" style={{ objectPosition: '50% 30%', filter: 'brightness(.5)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="im-label im-em im-rv">You get both of us, every time</p>
          <h2 className="im-disp im-rv mt-6 text-[36px] sm:text-[52px] lg:text-[64px] leading-[1.05] font-medium max-w-[18ch]">
            Let&rsquo;s make a photo that earns its place.
          </h2>
          <div className="im-rv mt-9 flex flex-col sm:flex-row gap-3">
            <a href="/contact" className="im-btn im-btn-green px-8 py-4">Book your headshot session</a>
            <a href="/on-site-photography" className="im-btn im-btn-ghost px-8 py-4">Plan a team headshot day</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-[1320px] mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-5 im-label" style={{ color: 'var(--muted)' }}>
        <Image src="/images/Rojas Photography Logo 24.6.png" alt="Rojas Photography" width={2672} height={396} className="h-5 w-auto invert opacity-80" />
        <div className="flex flex-wrap gap-x-7 gap-y-2 justify-center">
          <a href="tel:+12092802727" className="im-link">(209) 280-2727</a>
          <Link href="/contact" className="im-link">Contact</Link>
          <Link href="/portfolio" className="im-link">Portfolio</Link>
          <span style={{ color: 'rgba(243,241,233,.4)' }}>Modesto · Stockton · Sacramento · Central Valley</span>
        </div>
      </footer>
    </div>
  );
}
