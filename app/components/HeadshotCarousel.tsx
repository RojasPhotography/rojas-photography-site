'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const headshots = [
  { src: '/images/headshots/headshot-ceo-nutrition-02.jpg', alt: 'Executive headshot 1' },
  { src: '/images/headshots/headshot-attorney-06.jpg', alt: 'Attorney headshot 2' },
  { src: '/images/headshots/headshot-kaiser-medical-01.jpg', alt: 'Healthcare professional 3' },
  { src: '/images/headshots/headshot-finance-ceo.jpg', alt: 'Finance executive 4' },
  { src: '/images/headshots/headshot-sales-manager-01.jpg', alt: 'Sales manager 5' },
];

export default function HeadshotCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? headshots.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === headshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative mx-auto" style={{ width: '200px' }}>
      {/* Main Image */}
      <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden" style={{ aspectRatio: '1/1' }}>
        <Image
          src={headshots[currentIndex].src}
          alt={headshots[currentIndex].alt}
          fill
          className="object-cover object-center"
          priority
          sizes="200px"
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6 px-2">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-[#1F6B4D] text-white hover:bg-[#1a5340] transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Slide Indicator */}
        <div className="flex gap-2">
          {headshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-[#1F6B4D]' : 'bg-gray-300'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-[#1F6B4D] text-white hover:bg-[#1a5340] transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Counter */}
      <div className="text-center mt-4 text-sm text-gray-600">
        {currentIndex + 1} / {headshots.length}
      </div>
    </div>
  );
}
