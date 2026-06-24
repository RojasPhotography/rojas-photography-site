import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Fraunces, Hanken_Grotesk } from 'next/font/google';

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'], variable: '--ev-display', display: 'swap' });
const hanken = Hanken_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--ev-body', display: 'swap' });

export const metadata: Metadata = {
  title: 'Redesign — Warm Editorial (Headshot-Led) | Rojas Photography',
  robots: 'noindex, nofollow',
};

const css = `
.ev{
  --ink:#1A1D1A; --ink-2:#3C413B; --cream:#F4F1E8; --cream-2:#ECE7DA; --card:#FBFAF5;
  --green:#1F6B4D; --green-dk:#164F39; --green-lt:#2E8B66; --line:rgba(26,29,26,.14);
  background:var(--cream); color:var(--ink);
  font-family:var(--ev-body),system-ui,sans-serif; font-weight:400;
  -webkit-font-smoothing:antialiased;
}
.ev-disp{ font-family:var(--ev-display),Georgia,serif; }
.ev-label{ letter-spacing:.24em; text-transform:uppercase; font-weight:600; font-size:11px; }
.ev-link{ position:relative; }
.ev-link::after{ content:''; position:absolute; left:0; bottom:-3px; height:1px; width:100%; background:var(--green);
  transform:scaleX(0); transform-origin:left; transition:transform .4s cubic-bezier(.16,1,.3,1); }
.ev-link:hover::after{ transform:scaleX(1); }
.ev-btn{ display:inline-flex; align-items:center; justify-content:center; gap:.5rem; border-radius:999px;
  font-weight:600; font-size:14px; letter-spacing:.01em; transition:transform .35s cubic-bezier(.16,1,.3,1), background .35s, color .35s, border-color .35s; }
.ev-btn:hover{ transform:translateY(-2px); }
.ev-btn-green{ background:var(--green); color:var(--cream); }
.ev-btn-green:hover{ background:var(--green-dk); }
.ev-btn-out{ background:transparent; color:var(--ink); border:1px solid var(--line); }
.ev-btn-out:hover{ border-color:var(--green); color:var(--green); }
.ev-plate{ position:relative; overflow:hidden; border-radius:4px; }
.ev-plate img{ transition:transform 1.1s cubic-bezier(.16,1,.3,1); }
.ev-plate:hover img{ transform:scale(1.04); }
.ev-rule{ height:1px; background:var(--line); }
.ev-rise{ opacity:0; transform:translateY(22px); animation:ev-rise 1s cubic-bezier(.16,1,.3,1) forwards; }
.ev-rise-2{ animation-delay:.12s; } .ev-rise-3{ animation-delay:.24s; } .ev-rise-4{ animation-delay:.36s; }
@keyframes ev-rise{ to{opacity:1; transform:translateY(0)} }
.ev-lane{ transition:transform .5s cubic-bezier(.16,1,.3,1), box-shadow .5s; }
.ev-lane:hover{ transform:translateY(-4px); box-shadow:0 24px 60px -28px rgba(22,79,57,.45); }
.ev-strip img{ filter:grayscale(.15); transition:filter .6s, transform .8s; }
.ev-strip a:hover img{ filter:grayscale(0); transform:scale(1.05); }
@media (prefers-reduced-motion: reduce){
  .ev-rise{ animation:none; opacity:1; transform:none } .ev-btn:hover{ transform:none }
}
`;

const clients = ['COMCAST', 'SAVE MART', 'CALIFORNIA LAWYERS ASSN', 'VALLEY FIRST CREDIT UNION', 'KAISER PERMANENTE'];

const lookGrid = [
  'headshot-attorney-02.jpg',
  'headshot-finance-ceo.jpg',
  'headshot-healthcare-executive-01.jpg',
  'headshot-realtor-01.jpg',
  'headshot-comcast-executive.jpg',
  'headshot-cpa-finance-01.jpg',
];

export default function EditorialV2() {
  return (
    <div className={`ev ${fraunces.variable} ${hanken.variable} min-h-screen`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md" style={{ background: 'rgba(244,241,232,.86)', borderBottom: '1px solid var(--line)' }}>
        <nav className="max-w-[1240px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
          <Link href="/redesign/editorial-v2" className="flex items-center">
            <Image src="/images/Rojas Photography Logo 24.6.png" alt="Rojas Photography" width={2672} height={396} className="h-7 w-auto" priority />
          </Link>
          <div className="hidden lg:flex items-center gap-8 ev-label" style={{ letterSpacing: '.14em' }}>
            <a href="#individuals" className="ev-link">Individuals</a>
            <a href="#teams" className="ev-link">Teams</a>
            <a href="#work" className="ev-link">Work</a>
            <a href="#about" className="ev-link">About</a>
            <a href="tel:+12092802727" className="ev-link" style={{ color: 'var(--green)' }}>(209) 280-2727</a>
          </div>
          <a href="#book" className="ev-btn ev-btn-green px-5 py-2.5">Book a session</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-12 grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-16 items-center">
        <div>
          <p className="ev-label ev-rise" style={{ color: 'var(--green)' }}>Professional Headshots · Modesto, CA</p>
          <h1 className="ev-disp ev-rise ev-rise-2 mt-5 text-[40px] sm:text-[54px] lg:text-[62px] leading-[1.04] font-medium">
            Your headshot should look<br className="hidden sm:block" /> as good as you <span className="italic" style={{ color: 'var(--green)' }}>actually are.</span>
          </h1>
          <p className="ev-rise ev-rise-3 mt-6 max-w-[34rem] text-[17px] leading-[1.7]" style={{ color: 'var(--ink-2)' }}>
            We&rsquo;re Alfonso and Niomi Rojas. We make professional headshots that look like your best self &mdash;
            relaxed, confident, unmistakably you &mdash; in our Modesto studio, or for your whole team on&nbsp;site in a single day.
          </p>
          <div className="ev-rise ev-rise-3 mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#book" className="ev-btn ev-btn-green px-7 py-3.5">Book your headshot session</a>
            <a href="#teams" className="ev-btn ev-btn-out px-7 py-3.5">Headshot days for your team</a>
          </div>
          <div className="ev-rise ev-rise-4 mt-10 grid grid-cols-3 gap-4 max-w-[34rem]">
            {[
              ['1,000+', 'professionals photographed'],
              ['60+', 'five-star reviews'],
              ['15+', 'years in corporate leadership'],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="ev-disp text-[30px] leading-none" style={{ color: 'var(--green)' }}>{n}</div>
                <div className="mt-2 text-[12px] leading-snug" style={{ color: 'var(--ink-2)' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="ev-rise ev-rise-2">
          <div className="ev-plate aspect-[4/5]">
            <Image src="/images/headshots/headshot-attorney-02.jpg" alt="Executive headshot photographed in Modesto by Rojas Photography" fill priority sizes="(max-width:1024px) 100vw, 46vw" className="object-cover" style={{ objectPosition: '50% 22%' }} />
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="border-y" style={{ borderColor: 'var(--line)', background: 'var(--cream-2)' }}>
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-7 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
          <span className="ev-label whitespace-nowrap" style={{ color: 'var(--ink-2)' }}>Trusted by</span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {clients.map((c) => (
              <span key={c} className="ev-disp text-[15px] tracking-wide" style={{ color: 'var(--ink-2)' }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TWO LANES */}
      <section id="individuals" className="max-w-[1240px] mx-auto px-6 md:px-10 pt-20 md:pt-28">
        <div className="max-w-[40rem]">
          <p className="ev-label" style={{ color: 'var(--green)' }}>Two ways to work with us</p>
          <h2 className="ev-disp mt-4 text-[34px] md:text-[44px] leading-[1.08] font-medium">
            One studio. Whether it&rsquo;s just you, or your whole team.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Lane A — Individual */}
          <article className="ev-lane rounded-md overflow-hidden border" style={{ borderColor: 'var(--line)', background: 'var(--card)' }}>
            <div className="ev-plate aspect-[16/10]">
              <Image src="/images/headshots/headshot-attorney-01.jpg" alt="Individual executive headshot session in Modesto" fill sizes="(max-width:768px) 100vw, 46vw" className="object-cover" style={{ objectPosition: '50% 20%' }} />
            </div>
            <div className="p-7 md:p-9">
              <p className="ev-label" style={{ color: 'var(--green)' }}>For individuals</p>
              <h3 className="ev-disp mt-3 text-[26px] md:text-[30px] leading-tight">Individual &amp; executive headshots</h3>
              <p className="mt-4 text-[15.5px] leading-[1.7]" style={{ color: 'var(--ink-2)' }}>
                White-glove and unhurried. You work with both of us, we direct you the whole way, and every frame is
                hand-retouched. Built for executives, attorneys, and personal brands who only want to do this once.
              </p>
              <Link href="/premium-headshots" className="ev-link inline-block mt-6 ev-label" style={{ color: 'var(--green)' }}>
                Explore signature headshots in Modesto &rarr;
              </Link>
            </div>
          </article>

          {/* Lane B — Team */}
          <article id="teams" className="ev-lane rounded-md overflow-hidden border" style={{ borderColor: 'var(--line)', background: 'var(--card)' }}>
            <div className="ev-plate aspect-[16/10]">
              <Image src="/images/Kaiser BTS Headshots.png" alt="On-site corporate team headshot day in Modesto and Central Valley" fill sizes="(max-width:768px) 100vw, 46vw" className="object-cover" style={{ objectPosition: '50% 35%' }} />
            </div>
            <div className="p-7 md:p-9">
              <p className="ev-label" style={{ color: 'var(--green)' }}>For teams</p>
              <h3 className="ev-disp mt-3 text-[26px] md:text-[30px] leading-tight">Team headshot days</h3>
              <p className="mt-4 text-[15.5px] leading-[1.7]" style={{ color: 'var(--ink-2)' }}>
                We bring the studio to you. Consistent, on-brand headshots for your whole team in a single day &mdash;
                fast, organized, and ready to use. Ideal for firms, healthcare groups, and growing companies.
              </p>
              <Link href="/on-site-photography" className="ev-link inline-block mt-6 ev-label" style={{ color: 'var(--green)' }}>
                See corporate headshot days in the Central Valley &rarr;
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* THE LOOK */}
      <section id="work" className="max-w-[1240px] mx-auto px-6 md:px-10 pt-20 md:pt-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-[34rem]">
            <p className="ev-label" style={{ color: 'var(--green)' }}>The work</p>
            <h2 className="ev-disp mt-4 text-[34px] md:text-[44px] leading-[1.08] font-medium">The Rojas look.</h2>
          </div>
          <Link href="/portfolio" className="ev-link ev-label pb-1" style={{ color: 'var(--green)' }}>See the full portfolio &rarr;</Link>
        </div>
        <div className="ev-strip mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {lookGrid.map((src, i) => (
            <Link key={src} href="/portfolio" className="ev-plate aspect-[4/5] block">
              <Image src={`/images/headshots/${src}`} alt={`Professional headshot ${i + 1} by Rojas Photography in Modesto`} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover" style={{ objectPosition: '50% 20%' }} />
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="max-w-[900px] mx-auto px-6 md:px-10 pt-20 md:pt-28 text-center">
        <p className="ev-disp text-[24px] md:text-[32px] leading-[1.4] italic">
          &ldquo;Alfonso and Niomi made the whole thing easy &mdash; and the headshots are the best our team has ever had.
          Half our leadership has rebooked since.&rdquo;
        </p>
        <p className="mt-6 ev-label" style={{ color: 'var(--ink-2)' }}>Marketing Director &middot; Central Valley law firm</p>
      </section>

      {/* CLOSING CTA */}
      <section id="book" className="mt-20 md:mt-28" style={{ background: 'var(--green)' }}>
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-16 md:py-20 text-center" style={{ color: 'var(--cream)' }}>
          <h2 className="ev-disp text-[32px] md:text-[46px] leading-[1.08] font-medium">Let&rsquo;s make a photo that earns its place.</h2>
          <p className="mt-5 max-w-[34rem] mx-auto text-[16px] leading-[1.7]" style={{ color: 'rgba(244,241,232,.82)' }}>
            Book your individual session, or tell us about your team headshot day in Modesto or anywhere in the Central Valley.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contact" className="ev-btn px-7 py-3.5" style={{ background: 'var(--cream)', color: 'var(--green-dk)' }}>Book your headshot session</a>
            <a href="/on-site-photography" className="ev-btn px-7 py-3.5" style={{ background: 'transparent', color: 'var(--cream)', border: '1px solid rgba(244,241,232,.4)' }}>Plan a team headshot day</a>
          </div>
        </div>
      </section>

      {/* ABOUT / DUO + FOOTER */}
      <footer id="about" className="max-w-[1240px] mx-auto px-6 md:px-10 py-16 grid md:grid-cols-[.9fr_1.1fr] gap-10 items-center">
        <div className="ev-plate aspect-[5/4]">
          <Image src="/images/Alfonso+Niomi-0026.jpg" alt="Alfonso and Niomi Rojas, Rojas Photography, Modesto" fill sizes="(max-width:768px) 100vw, 42vw" className="object-cover" />
        </div>
        <div>
          <p className="ev-label" style={{ color: 'var(--green)' }}>About</p>
          <h2 className="ev-disp mt-4 text-[28px] md:text-[36px] leading-[1.12] font-medium">You get both of us, every time.</h2>
          <p className="mt-5 text-[15.5px] leading-[1.7] max-w-[36rem]" style={{ color: 'var(--ink-2)' }}>
            Rojas Photography is Alfonso and Niomi Rojas &mdash; a premium corporate headshot and portrait studio
            in Modesto, serving the Central Valley. Two photographers, one standard, and a fifteen-year track record
            with leaders at Save Mart, Comcast, Kaiser, and the California Lawyers Association.
          </p>
          <div className="ev-rule my-8" />
          <div className="flex flex-wrap gap-x-8 gap-y-2 ev-label" style={{ color: 'var(--ink-2)' }}>
            <a href="tel:+12092802727" className="ev-link">(209) 280-2727</a>
            <Link href="/contact" className="ev-link">Contact</Link>
            <Link href="/portfolio" className="ev-link">Portfolio</Link>
            <span style={{ color: 'rgba(26,29,26,.5)' }}>Modesto · Stockton · Sacramento · Central Valley</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
