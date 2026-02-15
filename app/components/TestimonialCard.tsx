import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
}

export default function TestimonialCard({
  name,
  role,
  quote,
}: TestimonialCardProps) {
  return (
    <div className="bg-[var(--color-bg-warm)] p-8 rounded-xl" role="article">
      <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={14}
            fill="currentColor"
            className="text-[var(--color-accent)]"
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="text-[var(--color-text-body)] leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="font-bold text-[var(--color-text-dark)] text-sm">{name}</p>
        <p className="text-[var(--color-text-muted)] text-sm">{role}</p>
      </div>
    </div>
  );
}
