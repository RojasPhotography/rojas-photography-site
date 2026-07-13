'use client';

import { useEffect, useRef } from 'react';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  fade?: boolean;
}

// Content is server-rendered fully visible (no reveal class), so the page works
// without JavaScript and for crawlers. The hide-then-animate treatment is applied
// only after hydration, and only to elements still below the viewport.
export default function SectionReveal({
  children,
  className = '',
  fade = false,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) return;

    el.classList.add(fade ? 'reveal-fade' : 'reveal');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [fade]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
