'use client';

import React from 'react';

interface DefinitionBoxProps {
  term: string;
  definition: string;
  children?: React.ReactNode;
}

export default function DefinitionBox({
  term,
  definition,
  children,
}: DefinitionBoxProps) {
  return (
    <section className="py-12 px-8 bg-[var(--color-bg-warm)] border-y border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl text-[var(--color-text-dark)] mb-4">
          What is {term}?
        </h2>
        <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-4">
          {definition}
        </p>
        {children}
      </div>
    </section>
  );
}
