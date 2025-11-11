'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PillowSizeOption } from '@/types/product';
import { shreddedMemoryFoamPillow } from '@/config/products/pillow';
import QuantitySelector from '@/components/product/QuantitySelector';
import AddToCartButton from '@/components/product/AddToCartButton';

export default function PillowsPage() {
  const [selectedSize, setSelectedSize] = useState<PillowSizeOption>('queen');
  const [quantity, setQuantity] = useState(1);

  const pillow = shreddedMemoryFoamPillow;
  const currentPrice = pillow.prices[selectedSize];

  const sizeLabels: Record<PillowSizeOption, { name: string; dimensions: string }> = {
    standard: { name: 'Standard', dimensions: '20" × 26"' },
    queen: { name: 'Queen', dimensions: '20" × 30"' },
    king: { name: 'King', dimensions: '20" × 36"' }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            The Perfect Pillow Changes Everything
          </h1>
          <p className="text-2xl">
            Premium Comfort for Every Sleep Position
          </p>
        </div>
      </section>

      

      {/* Pillow Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Our Shredded Memory Foam Pillow
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="relative w-full h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/pillow.jpg"
                alt="Shredded Memory Foam Pillow"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-3xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)] text-center">
              Shredded Memory Foam Pillow
            </h3>
            <p className="text-gray-700 mb-6 text-lg text-center max-w-2xl mx-auto">
              Adjustable comfort that molds to your unique shape. Our shredded memory foam pillow offers the perfect balance of support and softness, allowing you to customize the loft by adding or removing fill.
            </p>

            {/* Size and Purchase Section */}
            <div className="max-w-md mx-auto mb-8">
              {/* Size Selector */}
              <div className="mb-6">
                <label htmlFor="pillow-size-select" className="text-lg font-semibold mb-3 block text-[var(--color-hero-navy)]">
                  Select Size
                </label>
                <div className="relative">
                  <select
                    id="pillow-size-select"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value as PillowSizeOption)}
                    className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg text-[var(--color-hero-navy)] font-medium bg-white hover:border-gray-400 focus:border-[var(--color-copper)] focus:outline-none focus:ring-2 focus:ring-[var(--color-copper)]/20 transition-all appearance-none cursor-pointer"
                  >
                    {Object.entries(sizeLabels).map(([size, label]) => (
                      <option key={size} value={size}>
                        {label.name} ({label.dimensions})
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Price Display */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-baseline justify-between">
                  <span className="text-lg text-gray-600">Price:</span>
                  <span className="text-3xl font-bold text-[var(--color-copper)]">${currentPrice}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Free shipping included</p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <QuantitySelector
                  quantity={quantity}
                  onQuantityChange={setQuantity}
                />
              </div>

              {/* Add to Cart Button */}
              <AddToCartButton
                productId={pillow.id}
                productName={pillow.name}
                size={selectedSize}
                quantity={quantity}
                price={currentPrice}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-copper)] text-2xl">✦</span>
                  <span className="text-lg">Adjustable loft for personalized comfort</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-copper)] text-2xl">✦</span>
                  <span className="text-lg">Excellent breathability and cooling</span>
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-copper)] text-2xl">✦</span>
                  <span className="text-lg">Conforms to head and neck for pressure relief</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-copper)] text-2xl">✦</span>
                  <span className="text-lg">Great for all sleep positions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Pillow Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Why Choose Sleepada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">✦</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Manufactured In-House
              </h3>
              <p className="text-gray-700">
                We don&apos;t outsource production. Every pillow is made right here in our Tennessee facility, giving us complete control over quality at every step.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">★</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Premium Materials
              </h3>
              <p className="text-gray-700">
                High-quality shredded memory foam that provides the perfect balance of comfort and support — no cheap fillers, no shortcuts.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">◆</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Ships Anywhere in the USA
              </h3>
              <p className="text-gray-700">
                No matter where you are in the United States, we&apos;ll ship your pillow directly to your door with care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect Pairing Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-8 text-[var(--color-hero-navy)]">
            The Perfect Pairing
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Upgrade Your Entire Sleep Experience
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Pair your new pillow with a Sleepada mattress for the ultimate sleep upgrade. When your mattress and pillow work together, you get the support and comfort your body needs — from head to toe.
          </p>
          <Link
            href="/"
            className="text-[var(--color-copper)] hover:underline font-semibold text-lg inline-block"
          >
            Explore Our Mattresses →
          </Link>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[var(--color-hero-navy)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Ready for Better Sleep?
          </h2>
          <p className="text-xl mb-8">
            Have questions about our pillow? We&apos;re here to help.
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
