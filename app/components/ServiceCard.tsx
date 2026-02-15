import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  image,
  imageAlt,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group service-card block rounded-xl overflow-hidden bg-white border border-gray-100">
      <div className="img-hover-zoom aspect-[4/3]">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-2 group-hover:text-[var(--color-primary)] transition-colors font-[family-name:var(--font-heading)]">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-text-body)] mb-4 leading-relaxed">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] group-hover:gap-3 transition-all">
          View Details <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
