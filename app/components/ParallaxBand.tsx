interface ParallaxBandProps {
  /** Background image path (a wide, atmospheric photo works best). */
  image: string;
  /** Overlay strength 0–100 (darkness of the green wash over the photo). Default 70. */
  overlayOpacity?: number;
  children: React.ReactNode;
  /** Vertical padding size. */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * A full-width parallax "breather" band: a fixed background photo the content
 * scrolls over, with a brand-green overlay for text legibility.
 *
 * - Pure CSS, no dependencies and no scroll-driven JavaScript.
 * - The `parallax-fixed` class (see globals.css) pins the image on desktop and
 *   falls back to a normal scrolling image on touch devices, where fixed
 *   backgrounds are janky — and it is disabled under prefers-reduced-motion.
 */
export default function ParallaxBand({
  image,
  overlayOpacity = 70,
  children,
  size = 'md',
}: ParallaxBandProps) {
  const pad = size === 'lg' ? 'py-28 md:py-36' : size === 'sm' ? 'py-14 md:py-16' : 'py-20 md:py-28';

  return (
    <section
      className={`parallax-fixed relative px-8 text-center ${pad}`}
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `color-mix(in srgb, var(--color-primary-dark) ${overlayOpacity}%, transparent)` }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-3xl mx-auto">{children}</div>
    </section>
  );
}
