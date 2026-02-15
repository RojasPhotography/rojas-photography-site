'use client';

import React from 'react';

interface TableRow {
  feature: string;
  option1: string;
  option2: string;
}

interface ComparisonTableProps {
  title: string;
  column1Label: string;
  column2Label: string;
  rows: TableRow[];
}

export default function ComparisonTable({
  title,
  column1Label,
  column2Label,
  rows,
}: ComparisonTableProps) {
  return (
    <section className="py-12 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-8 text-center">
          {title}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="px-4 py-3 text-left font-bold text-[var(--color-text-dark)]">
                  Feature
                </th>
                <th className="px-4 py-3 text-left font-bold text-[var(--color-text-dark)]">
                  {column1Label}
                </th>
                <th className="px-4 py-3 text-left font-bold text-[var(--color-text-dark)]">
                  {column2Label}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="px-4 py-3 font-semibold text-[var(--color-text-dark)]">
                    {row.feature}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text-body)]">
                    {row.option1}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text-body)]">
                    {row.option2}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
