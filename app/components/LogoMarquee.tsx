'use client';

import Image from 'next/image';
import { Pause, Play } from 'lucide-react';
import { useState } from 'react';

// Heights are tuned per logo so wide wordmarks and round seals read at a similar visual weight.
const logos = [
  { src: '/images/logos/savemart.png', name: 'Save Mart', w: 711, h: 160, cls: 'h-7' },
  { src: '/images/logos/comcast.svg', name: 'Comcast', w: 1000, h: 354, cls: 'h-7' },
  { src: '/images/logos/kaiser.png', name: 'Kaiser Permanente', w: 440, h: 160, cls: 'h-9' },
  { src: '/images/logos/tenet-health.png', name: 'Tenet Health', w: 313, h: 160, cls: 'h-10' },
  { src: '/images/logos/cla.png', name: 'California Lawyers Association', w: 350, h: 77, cls: 'h-8' },
  { src: '/images/logos/valley-first-cu.png', name: 'Valley First Credit Union', w: 584, h: 149, cls: 'h-8' },
  { src: '/images/logos/merced-city-schools.png', name: 'Merced City School District', w: 151, h: 160, cls: 'h-12' },
  { src: '/images/logos/granite-wealth.png', name: 'Granite Wealth Management', w: 247, h: 160, cls: 'h-11' },
  { src: '/images/logos/city-of-ceres.png', name: 'City of Ceres', w: 160, h: 160, cls: 'h-12' },
  { src: '/images/logos/move.png', name: 'MOVE', w: 476, h: 160, cls: 'h-8' },
  { src: '/images/logos/wfg-title.png', name: 'WFG National Title Insurance Company', w: 444, h: 108, cls: 'h-8' },
  { src: '/images/logos/ceres-unified.png', name: 'Ceres Unified School District', w: 161, h: 160, cls: 'h-12' },
  { src: '/images/logos/stanislaus-equity-partners.png', name: 'Stanislaus Equity Partners', w: 419, h: 160, cls: 'h-10' },
  { src: '/images/logos/acsa-region-9.png', name: 'Association of California School Administrators Region 9', w: 828, h: 80, cls: 'h-5' },
  { src: '/images/logos/radiant-mobile-imaging.png', name: 'Radiant Mobile Imaging', w: 187, h: 160, cls: 'h-11' },
  { src: '/images/logos/city-of-riverbank.png', name: 'City of Riverbank', w: 102, h: 133, cls: 'h-12' },
  { src: '/images/logos/success-capital.png', name: 'Success Capital', w: 194, h: 160, cls: 'h-11' },
  { src: '/images/logos/cal-lawyers-foundation.png', name: 'California Lawyers Foundation', w: 394, h: 94, cls: 'h-7' },
  { src: '/images/logos/west-modesto-cc.png', name: 'West Modesto Community Collaborative', w: 209, h: 160, cls: 'h-11' },
  { src: '/images/logos/craft-and-bauer.png', name: 'Craft & Bauer', w: 327, h: 160, cls: 'h-11' },
  { src: '/images/logos/balanced-books.png', name: 'Balanced Books', w: 430, h: 82, cls: 'h-7' },
  { src: '/images/logos/mocse.png', name: 'Mocse', w: 216, h: 48, cls: 'h-6' },
];

function LogoSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex items-center gap-x-14 gap-y-6 px-7 shrink-0" aria-hidden={hidden || undefined}>
      {logos.map((logo) => (
        <li key={logo.src} className="shrink-0 flex items-center">
          <Image
            src={logo.src}
            alt={hidden ? '' : `${logo.name} logo`}
            width={logo.w}
            height={logo.h}
            className={`${logo.cls} w-auto`}
          />
        </li>
      ))}
    </ul>
  );
}

export default function LogoMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-10 bg-[var(--color-bg-warm)] border-b border-gray-100" aria-label="Clients who trust Rojas Photography">
      <div className="flex items-center justify-center gap-2 mb-6 px-8">
        <span className="text-xs tracking-[0.22em] uppercase text-[var(--color-text-muted)] font-semibold">Trusted by</span>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="logo-marquee-pause inline-flex items-center justify-center min-w-11 min-h-11 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
          aria-label={paused ? 'Play client logo scroll' : 'Pause client logo scroll'}
        >
          {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
        </button>
      </div>
      <div className="logo-marquee" data-paused={paused}>
        <div className="logo-marquee-track">
          <LogoSet />
          <LogoSet hidden />
        </div>
      </div>
    </section>
  );
}
