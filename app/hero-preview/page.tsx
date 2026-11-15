import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import GoogleReviewsBadge from '../components/GoogleReviewsBadge';

export const metadata: Metadata = {
  title: 'Hero Preview — Internal',
  robots: 'noindex, nofollow',
};

const grid9 = [
  { src: '/images/headshots/headshot-executive-ceo.jpg', alt: 'Executive headshot — woman in red, dark backdrop' },
  { src: '/images/headshots/headshot-finance-ceo.jpg', alt: 'Executive headshot — man in dark suit' },
  { src: '/images/headshots/headshot-attorney-05.jpg', alt: 'Attorney headshot — woman, dark backdrop' },
  { src: '/images/headshots/headshot-healthcare-executive-01.jpg', alt: 'Healthcare executive headshot — woman in grey blazer' },
  { src: '/images/headshots/headshot-executive-02.jpg', alt: 'Executive headshot — man with glasses' },
  { src: '/images/headshots/headshot-ceo-nutrition-01.jpg', alt: 'CEO headshot — woman in pink blazer' },
  { src: '/images/headshots/headshot-cpa-finance-01.jpg', alt: 'Finance professional headshot — man with glasses' },
  { src: '/images/headshots/headshot-sales-manager-01.jpg', alt: 'Sales manager headshot — woman, dark backdrop' },
  { src: '/images/headshots/headshot-comcast-executive.jpg', alt: 'Corporate executive headshot — woman in white blazer' },
];

const grid12 = [
  ...grid9,
  { src: '/images/headshots/headshot-kaiser-medical-02.jpg', alt: 'Medical professional headshot — woman in black blazer' },
  { src: '/images/headshots/headshot-mortgage-lender-01.jpg', alt: 'Mortgage professional headshot — woman with glasses' },
  { src: '/images/headshots/headshot-ceo-nutrition-02.jpg', alt: 'Executive headshot — woman with glasses' },
];

function HeroCopy() {
  return (
    <>
      <p className="text-[var(--color-primary-light)] font-semibold text-xs md:text-sm tracking-[0.22em] mb-6 uppercase">
        Corporate Headshots · Modesto &amp; the Central Valley
      </p>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-[1.05] tracking-[-0.01em]">
        The headshot your reputation deserves.
      </h1>
      <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-10 max-w-xl">
        Most professionals are quietly undersold by their photo. In one session — in our Modesto
        studio or on location at your office — you&rsquo;ll have a headshot that matches the
        reputation you&rsquo;ve built.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/premium-headshots#booking-heading"
          className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block text-center"
        >
          Book a Studio Session
        </Link>
        <Link
          href="/on-site-photography"
          className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block text-center"
        >
          Headshot Day for Your Team →
        </Link>
      </div>
      <div className="mt-8">
        <GoogleReviewsBadge rating="5.0" count={64} href="https://g.page/r/CdOO4Sj3FR_lEBM" />
      </div>
      <div className="mt-10 border-t border-white/15 pt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm tracking-[0.15em] uppercase text-white/70">
        <span>500+ executives photographed</span>
        <span className="text-[var(--color-primary-light)]" aria-hidden="true">·</span>
        <span>Two photographers, every session</span>
      </div>
    </>
  );
}

function VariantLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black text-white text-center py-3 text-sm font-semibold tracking-[0.3em] uppercase">
      {children}
    </div>
  );
}

export default function HeroPreviewPage() {
  return (
    <div className="pt-28">
      <VariantLabel>Variant A — Split: copy left, grid right</VariantLabel>
      <section className="relative w-full overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F2E1E 0%, #1F6B4D 130%)' }}>
        <div className="max-w-7xl mx-auto px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-14 items-center text-white">
          <div>
            <HeroCopy />
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {grid9.map((img) => (
              <div key={img.src} className="relative aspect-[4/5] rounded-xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 1024px) 33vw, 16vw" className="object-cover object-top" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <VariantLabel>Variant B — Full-bleed wall of faces</VariantLabel>
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-4" aria-hidden="true">
          {grid12.map((img) => (
            <div key={img.src} className="relative">
              <Image src={img.src} alt="" fill sizes="25vw" className="object-cover object-top" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0" aria-hidden="true" style={{ background: 'linear-gradient(88deg, rgba(15,46,30,.93) 10%, rgba(15,46,30,.78) 55%, rgba(15,46,30,.6) 100%)' }} />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-24 text-white">
          <div className="max-w-2xl">
            <HeroCopy />
          </div>
        </div>
      </section>

      <div className="bg-black text-white text-center py-6 text-sm">
        Internal preview — not linked anywhere, not indexed. Current live hero stays untouched.
      </div>
    </div>
  );
}
