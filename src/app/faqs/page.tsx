'use client';

import { faqCategories } from '@/config/faqs';
import FAQAccordion from '@/components/faqs/FAQAccordion';
import { useState } from 'react';

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 120; // Account for sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl mb-8">
            Everything you need to know about Sleepada mattresses
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-white py-8 px-4 sticky top-0 z-40 border-b border-gray-200">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`px-4 py-2 rounded-full border-2 transition-all font-medium ${
                  activeCategory === category.id
                    ? 'bg-[var(--color-copper)] text-white border-[var(--color-copper)]'
                    : 'border-gray-300 text-gray-700 hover:border-[var(--color-copper)] hover:text-[var(--color-copper)]'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      {faqCategories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-12 px-4 ${
            index % 2 === 0 ? 'bg-white' : 'bg-[var(--color-cream)]'
          }`}
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-[family-name:var(--font-cormorant-garamond)] mb-8 text-[var(--color-hero-navy)]">
              {category.title}
            </h2>
            <FAQAccordion questions={category.questions} />
          </div>
        </section>
      ))}

      {/* Still Have Questions Section */}
      <section className="py-16 px-4 bg-[var(--color-hero-navy)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8">
            Our team is here to help. Reach out and we'll get back to you quickly.
          </p>
          <a
            href="mailto:sleepadasales@gmail.com"
            className="inline-block bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
