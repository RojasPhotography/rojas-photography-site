'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SectionReveal from './SectionReveal';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  heading?: string;
}

export default function FAQSection({ faqs, heading = 'Frequently Asked Questions' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl text-center mb-16 text-[var(--color-text-dark)]">
            {heading}
          </h2>
        </SectionReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <SectionReveal key={index}>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <h3 className="text-lg font-semibold text-[var(--color-text-dark)] text-left">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-${index}`}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={20}
                      aria-hidden="true"
                      className={`flex-shrink-0 text-[var(--color-primary)] transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                {/* Answers stay in the HTML (hidden, not unmounted) so crawlers can read them and they match the FAQPage schema. */}
                <div
                  id={`faq-${index}`}
                  hidden={openIndex !== index}
                  className="px-6 py-4 bg-gray-50 border-t border-gray-200"
                >
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
