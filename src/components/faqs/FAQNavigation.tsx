'use client';

import { useState } from 'react';

interface Category {
  id: string;
  title: string;
}

interface FAQNavigationProps {
  categories: Category[];
}

const NAV_OFFSET = 120;

export default function FAQNavigation({ categories }: FAQNavigationProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - NAV_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-white py-8 px-4 sticky top-0 z-40 border-b border-gray-200">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
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
  );
}
