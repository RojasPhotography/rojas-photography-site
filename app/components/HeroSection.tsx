import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  tag?: string;
  image?: string;
  gradient?: boolean;
  fullHeight?: boolean;
  objectPosition?: string;
  children?: React.ReactNode;
}

export default function HeroSection({
  title,
  subtitle,
  tag,
  image,
  gradient = false,
  fullHeight = false,
  objectPosition,
  children,
}: HeroSectionProps) {
  const heightClass = fullHeight ? 'min-h-screen' : 'min-h-[50vh]';

  if (image) {
    return (
      <section
        className={`relative w-full ${heightClass} flex items-center justify-center overflow-hidden pt-20`}
        aria-label={title}
      >
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={objectPosition ? { objectPosition } : undefined}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[var(--color-primary-dark)]/70" />
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-white text-center py-20">
          {tag && (
            <p className="text-[var(--color-primary-light)] font-semibold text-xs md:text-sm tracking-[0.2em] mb-6 uppercase">
              {tag}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-200">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative w-full ${heightClass} flex items-center justify-center overflow-hidden pt-20 ${
        gradient
          ? 'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)]'
          : 'bg-[var(--color-primary)]'
      }`}
      aria-label={title}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-white text-center py-20">
        {tag && (
          <p className="text-[var(--color-primary-light)] font-semibold text-xs md:text-sm tracking-[0.2em] mb-6 uppercase">
            {tag}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-200">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
