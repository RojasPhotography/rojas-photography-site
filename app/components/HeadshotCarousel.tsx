'use client';

import Image from 'next/image';

const headshots = [
  { src: '/images/headshots/headshot-ceo-nutrition-02.jpg', alt: 'Executive headshot 1', position: 'left center' },
  { src: '/images/headshots/headshot-attorney-06.jpg', alt: 'Attorney headshot 2', position: 'center' },
  { src: '/images/headshots/headshot-kaiser-medical-01.jpg', alt: 'Healthcare professional 3', position: 'center' },
  { src: '/images/headshots/headshot-finance-ceo.jpg', alt: 'Finance executive 4', position: 'center' },
  { src: '/images/headshots/headshot-sales-manager-01.jpg', alt: 'Sales manager 5', position: 'center' },
  { src: '/images/headshots/headshot-executive-02.jpg', alt: 'Executive headshot 6', position: 'center' },
];

export default function HeadshotCarousel() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {headshots.map((headshot, index) => (
          <div
            key={index}
            className="relative bg-gray-100 rounded-lg overflow-hidden"
            style={{ aspectRatio: '1/1' }}
          >
            <Image
              src={headshot.src}
              alt={headshot.alt}
              fill
              className="object-cover"
              style={{ objectPosition: headshot.position }}
              quality={90}
              priority={index < 3}
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
