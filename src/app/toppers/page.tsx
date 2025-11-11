'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SizeOption } from '@/types/product';
import { organicLatexTopper } from '@/config/products/topper';
import QuantitySelector from '@/components/product/QuantitySelector';
import AddToCartButton from '@/components/product/AddToCartButton';

export default function ToppersPage() {
  const [selectedSize, setSelectedSize] = useState<SizeOption>('queen');
  const [quantity, setQuantity] = useState(1);

  const topper = organicLatexTopper;
  const currentPrice = topper.prices[selectedSize];

  const sizeLabels: Record<SizeOption, { name: string; dimensions: string }> = {
    twin: { name: 'Twin', dimensions: '38" × 75"' },
    full: { name: 'Full', dimensions: '54" × 75"' },
    queen: { name: 'Queen', dimensions: '60" × 80"' },
    king: { name: 'King', dimensions: '76" × 80"' },
    calKing: { name: 'California King', dimensions: '72" × 84"' }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Transform Your Mattress Instantly
          </h1>
          <p className="text-2xl">
            Premium Toppers That Make All the Difference
          </p>
        </div>
      </section>

      
      {/* Product Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Our Certified Organic Latex Topper
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="relative w-full h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/toppers.webp"
                alt="Memory Foam Mattress Topper"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-3xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)] text-center">
              Certified Organic Latex Mattress Topper
            </h3>
            <p className="text-gray-700 mb-6 text-lg text-center max-w-2xl mx-auto">
              100% natural, GOLS certified organic latex cut to order. Eco-friendly, naturally hypoallergenic, and incredibly durable. Optional certified organic cotton zipper covers available.
            </p>

            {/* Size and Purchase Section */}
            <div className="max-w-md mx-auto mb-8">
              {/* Size Selector */}
              <div className="mb-6">
                <label htmlFor="topper-size-select" className="text-lg font-semibold mb-3 block text-[var(--color-hero-navy)]">
                  Select Size
                </label>
                <div className="relative">
                  <select
                    id="topper-size-select"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value as SizeOption)}
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
                productId={topper.id}
                productName={topper.name}
                size={selectedSize}
                quantity={quantity}
                price={currentPrice}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-copper)] text-2xl">✦</span>
                  <span className="text-lg">GOLS certified organic latex</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-copper)] text-2xl">✦</span>
                  <span className="text-lg">Naturally hypoallergenic and antimicrobial</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-copper)] text-2xl">✦</span>
                  <span className="text-lg">Responsive, buoyant support</span>
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-copper)] text-2xl">✦</span>
                  <span className="text-lg">Organic cotton cover options available</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-copper)] text-2xl">✦</span>
                  <span className="text-lg">Cut to order in Tennessee</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-copper)] text-2xl">✦</span>
                  <span className="text-lg">Eco-friendly and sustainable</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Topper Info Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Premium Features & Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
                Memory Foam Toppers
              </h3>
              <p className="text-gray-700 mb-4">
                High-density memory foam that conforms to your body, relieving pressure points and providing customized support. Available in various densities and includes options with graphite or gel infusion for enhanced cooling.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>CertiPUR-US® certified foam</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Multiple density options available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Graphite or gel-infused cooling options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Excellent pressure point relief</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
                Certified Organic Latex Toppers
              </h3>
              <p className="text-gray-700 mb-4">
                100% natural, GOLS certified organic latex cut to order. Eco-friendly, naturally hypoallergenic, and incredibly durable. Optional certified organic cotton zipper covers available.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>GOLS certified organic latex</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Naturally hypoallergenic and antimicrobial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Responsive, buoyant support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Organic cotton cover options available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Toppers Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Why Choose Sleepada Toppers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">✦</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Instant Comfort Upgrade
              </h3>
              <p className="text-gray-700">
                Transform a too-firm mattress into a cloud of comfort, or revive an aging mattress with a fresh layer of support — all without buying new.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">★</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Premium Materials
              </h3>
              <p className="text-gray-700">
                Choose from CertiPUR-US® certified memory foam or GOLS certified organic latex — both cut to order in our Tennessee facility with premium materials.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">✓</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Handcrafted Quality
              </h3>
              <p className="text-gray-700">
                Made in Tennessee with the same craftsmanship and attention to detail as our mattresses. No shortcuts, just quality you can feel.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">◆</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Custom Options Available
              </h3>
              <p className="text-gray-700">
                All standard sizes available, plus custom sizes on request. Add certified organic cotton zipper covers to your latex topper for complete eco-friendly comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use a Topper Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Is a Topper Right for You?
          </h2>
          <div className="text-lg space-y-3 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="text-[var(--color-copper)] text-xl mt-1">✓</span>
              <span className="text-gray-700">Your mattress is too firm and you want to add softness</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[var(--color-copper)] text-xl mt-1">✓</span>
              <span className="text-gray-700">You want to extend the life of an older mattress</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[var(--color-copper)] text-xl mt-1">✓</span>
              <span className="text-gray-700">You&apos;re looking for pressure point relief</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[var(--color-copper)] text-xl mt-1">✓</span>
              <span className="text-gray-700">You want an affordable upgrade without replacing your whole mattress</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[var(--color-copper)] text-xl mt-1">✓</span>
              <span className="text-gray-700">You need extra comfort for a guest room or rental property</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[var(--color-hero-navy)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Ready to Transform Your Sleep?
          </h2>
          <p className="text-xl mb-8">
            Add comfort, support, and years of life to your mattress with a Sleepada topper.
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
