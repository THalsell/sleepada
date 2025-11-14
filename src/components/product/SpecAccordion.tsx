'use client';

import { useState } from 'react';
import { ProductSpecs } from '@/types/product';

interface AccordionSection {
  title: string;
  content: React.ReactNode;
}

interface SpecAccordionProps {
  specs: ProductSpecs;
  layerDescription: string;
  warranty: string;
  bestFor: string;
}

export default function SpecAccordion({ specs, layerDescription, warranty, bestFor }: SpecAccordionProps) {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections: AccordionSection[] = [
    {
      title: 'Materials & Construction',
      content: (
        <div className="space-y-2 text-gray-700">
          <p><strong>Foam Type:</strong> {specs.foamType}</p>
          <p><strong>Cover Material:</strong> {specs.cover}</p>
          <p><strong>CertiPUR-US® Certified:</strong> Yes</p>
          <p><strong>Made in:</strong> {specs.madeIn}</p>
          <p><strong>Components:</strong> Domestic & Imported</p>
        </div>
      )
    },
    {
      title: 'Dimensions & Weight',
      content: (
        <div className="space-y-2 text-gray-700">
          <p><strong>Twin:</strong> 38" x 75" x 10" | Weight: [Contact for details]</p>
          <p><strong>Full:</strong> 54" x 75" x 10" | Weight: [Contact for details]</p>
          <p><strong>Queen:</strong> 60" x 80" x 10" | Weight: [Contact for details]</p>
          <p><strong>King:</strong> 76" x 80" x 10" | Weight: [Contact for details]</p>
          <p><strong>Cal King:</strong> 72" x 84" x 10" | Weight: [Contact for details]</p>
          <p className="text-sm italic mt-3">Contact us for exact weight specifications</p>
        </div>
      )
    },
    {
      title: 'Comfort & Support',
      content: (
        <div className="space-y-2 text-gray-700">
          <p><strong>Firmness:</strong> {specs.firmness}</p>
          <p><strong>Motion Isolation:</strong> {specs.motionIsolation}</p>
          <p><strong>Edge Support:</strong> {specs.edgeSupport}</p>
          <p><strong>Best For:</strong> {bestFor}</p>
        </div>
      )
    },
    {
      title: 'Care Instructions',
      content: (
        <ul className="space-y-2 text-gray-700 list-disc pl-5">
          <li>Rotate mattress every 3-6 months</li>
          <li>Spot clean only with mild detergent</li>
          <li>Use mattress protector (recommended)</li>
          <li>Do not dry clean or machine wash</li>
          <li>Allow 24-48 hours to fully expand after unboxing</li>
        </ul>
      )
    },
    {
      title: 'Warranty',
      content: (
        <div className="space-y-2 text-gray-700">
          <p><strong>Coverage:</strong> 3-20 years depending on model</p>
          <p>{warranty}</p>
          <a href="/contact" className="text-[var(--color-copper)] hover:underline inline-block mt-2">
            Contact Us for Warranty Details →
          </a>
        </div>
      )
    },
    {
      title: 'Shipping & Delivery',
      content: (
        <ul className="space-y-2 text-gray-700 list-disc pl-5">
          <li>Free shipping to continental US</li>
          <li>Compressed, rolled, and boxed for easy delivery</li>
          <li>Delivery time: 5-10 business days</li>
          <li>Ships from Tennessee facility</li>
        </ul>
      )
    }
  ];

  return (
    <section className="py-16 px-4 bg-[var(--color-cream)]">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
          Detailed Specifications
        </h2>
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => toggleSection(index)}
                className="w-full p-4 flex justify-between items-center font-semibold text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openSection === index}
              >
                <span className="text-[var(--color-hero-navy)]">{section.title}</span>
                <span className="text-2xl text-gray-400">
                  {openSection === index ? '−' : '+'}
                </span>
              </button>
              {openSection === index && (
                <div className="p-4 border-t border-gray-200">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
