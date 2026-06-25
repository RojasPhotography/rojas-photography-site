import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Redesign Directions — 2026 Exploration | Rojas Photography',
  robots: 'noindex, nofollow',
};

const directions = [
  {
    href: '/redesign/immersive',
    no: '07',
    name: 'Immersive',
    vibe: 'Full-bleed · cinematic · motion · headshot-led',
    desc: 'The boldest direction. A full-screen portrait hero that slow-zooms, an auto-scrolling wall of 1,000+ faces, scroll-reveal statements, and two full-height service panels (studio headshots vs. we-come-to-you team days) with real buttons. Photography takes over the screen.',
    img: '/images/headshots/headshot-finance-ceo.jpg',
    tag: 'Newest',
  },
  {
    href: '/redesign/editorial-v2',
    no: '06',
    name: 'Warm Editorial',
    vibe: 'Cream · serif · deep green · headshot-led',
    desc: 'Headshot-first and premium. Logo top-left, an oversized serif headline, a charcoal-background executive hero, dual CTAs split into the two lanes (individual / team), and a trusted-by bar. The warm, light take.',
    img: '/images/headshots/headshot-attorney-02.jpg',
    tag: 'Light',
  },
  {
    href: '/redesign/studio',
    no: '01',
    name: 'Studio',
    vibe: 'Charcoal · bold sans · big photography',
    desc: 'Modern, dark, and photography-forward — the look of a top-tier headshot studio. Flanking portraits, a wall of 500+ faces, grayscale client logos, green accent. Built to your references.',
    img: '/images/headshots/headshot-attorney-01.jpg',
    tag: 'Recommended',
  },
  {
    href: '/redesign/atelier',
    no: '02',
    name: 'Maison',
    vibe: 'Emerald lacquer · gold foil · Bodoni',
    desc: 'Couture-house luxury. High-contrast Bodoni headlines, champagne-gold hairlines, photography matted like fine art. The ornate take.',
    img: '/images/headshots/headshot-comcast-executive.jpg',
    tag: 'Ornate',
  },
  {
    href: '/redesign/editorial',
    no: '03',
    name: 'Editorial Gallery',
    vibe: 'Warm ivory · serif · green + gold',
    desc: 'Magazine-grade and timeless. Oversized serif headlines, asymmetric grid, photography framed like gallery plates. Premium and approachable.',
    img: '/images/headshots/headshot-executive-ceo.jpg',
    tag: 'Timeless',
  },
  {
    href: '/redesign/noir',
    no: '04',
    name: 'Cinematic Noir',
    vibe: 'Near-black · forest green · gold · film grain',
    desc: 'Dark, dramatic, unforgettable. Full-bleed cinematic hero with slow motion and grain. The boldest, most differentiated direction.',
    img: '/images/Kaiser BTS Headshots.png',
    tag: 'Boldest',
  },
  {
    href: '/redesign/minimal',
    no: '05',
    name: 'Modern Minimal',
    vibe: 'Pure white · hairlines · vast air',
    desc: 'Swiss and architectural. Huge negative space, restrained motion, the photography does all the talking. Quiet, confident luxury.',
    img: '/images/Joyce-0029.jpg',
    tag: 'Quietest',
  },
];

export default function RedesignHub() {
  return (
    <div className="min-h-screen bg-[#0f1311] text-[#ECE8DD]" style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
      <header className="px-6 md:px-12 py-8 flex items-center justify-between border-b border-white/10">
        <span className="font-[family-name:var(--font-heading)] text-xl tracking-[0.15em]">ROJAS — REDESIGN</span>
        <Link href="/" className="text-xs uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors">← Live site</Link>
      </header>

      <section className="px-6 md:px-12 pt-16 md:pt-24 pb-12 max-w-4xl">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-primary-light)] mb-6">2026 Design Exploration</p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl leading-[1.05] mb-6">
          Seven directions. One studio.
        </h1>
        <p className="text-lg text-white/70 leading-relaxed">
          Each is a real, clickable prototype of a high-end 2026 homepage — built on your brand green, your real photography, and full accessibility. Your live site is untouched. Open each, see how it feels, then tell me which one to take all the way.
        </p>
      </section>

      <section className="px-6 md:px-12 pb-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {directions.map((d) => (
          <Link key={d.href} href={d.href} className="group block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10">
              <Image src={d.img} alt={d.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" style={{ objectPosition: '50% 25%' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <span className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.18em] bg-white/15 backdrop-blur-sm rounded-full px-3 py-1">{d.tag}</span>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-2">({d.no})</p>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl mb-2">{d.name}</h2>
                <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-primary-light)] mb-3">{d.vibe}</p>
                <p className="text-sm text-white/70 leading-relaxed">{d.desc}</p>
                <span className="inline-block mt-4 text-xs uppercase tracking-[0.18em] text-white group-hover:translate-x-1 transition-transform">View prototype →</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
