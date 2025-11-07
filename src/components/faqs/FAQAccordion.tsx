'use client';

import { useState } from 'react';
import { FAQItem } from '@/config/faqs';
import Link from 'next/link';

interface FAQAccordionProps {
  questions: FAQItem[];
}

export default function FAQAccordion({ questions }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const formatAnswer = (answer: string) => {
    // Convert email addresses to mailto links
    const emailRegex = /(sleepadasales@gmail\.com)/g;
    const parts = answer.split(emailRegex);

    return parts.map((part, index) => {
      if (part.match(emailRegex)) {
        return (
          <a
            key={index}
            href={`mailto:${part}`}
            className="text-[var(--color-copper)] hover:underline"
          >
            {part}
          </a>
        );
      }

      // Check for Infrared Technology mention
      if (part.includes('Infrared Technology page')) {
        return (
          <span key={index}>
            {part.replace('Infrared Technology page', '')}
            <Link href="/infrared-technology" className="text-[var(--color-copper)] hover:underline">
              Infrared Technology page
            </Link>
          </span>
        );
      }

      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="space-y-4">
      {questions.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full p-6 flex justify-between items-start text-left hover:bg-gray-50 transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-lg text-[var(--color-hero-navy)] pr-4">
              {item.question}
            </span>
            <span className="text-2xl text-gray-400 flex-shrink-0">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6 pt-0 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                {formatAnswer(item.answer)}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
