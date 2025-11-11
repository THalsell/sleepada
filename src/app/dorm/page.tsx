'use client';

import { useState } from 'react';
import Image from 'next/image';
import { DormSizeOption } from '@/types/product';
import { dormCoreProduct } from '@/config/products/dorm-core';
import { dormPrimeProduct } from '@/config/products/dorm-prime';
import { dormFirPlusProduct } from '@/config/products/dorm-fir-plus';
import CombinedDormSelector from '@/components/product/CombinedDormSelector';
import QuantitySelector from '@/components/product/QuantitySelector';
import AddToCartButton from '@/components/product/AddToCartButton';

type DormTier = 'core' | 'prime' | 'fir-plus';

const dormProducts = {
  core: dormCoreProduct,
  prime: dormPrimeProduct,
  'fir-plus': dormFirPlusProduct
};

const tierInfo = {
  core: {
    name: 'Sleepada Dorm Core',
    tagline: 'Entry-level memory foam comfort for dorm life',
    features: [
      'Medium-Firm Support',
      'High-Density Memory Foam',
      'Good Motion Isolation',
      'CertiPUR-US® Certified',
      'Perfect for Dorm Beds',
      'Made in Tennessee, USA'
    ]
  },
  prime: {
    name: 'Sleepada Dorm Prime',
    tagline: 'Gel-infused cooling technology for dorm life',
    features: [
      'Medium Support',
      'Gel-Infused Cooling',
      'Very Good Motion Isolation',
      'Reinforced Edge Support',
      'CertiPUR-US® Certified',
      'Perfect for Dorm Beds',
      'Temperature Regulation'
    ]
  },
  'fir-plus': {
    name: 'Sleepada Dorm FIR+',
    tagline: 'Premium with FIR infrared recovery tech for dorm life',
    features: [
      'Medium-Plush Comfort',
      'FIR Infrared Recovery Tech',
      'Advanced Cooling + Graphite',
      'Excellent Motion Isolation',
      'Enhanced Edge Support',
      'Premium FIR-Infused Cover',
      'CertiPUR-US® Certified',
      'Perfect for Dorm Beds'
    ]
  }
};

export default function DormPage() {
  const [selectedTier, setSelectedTier] = useState<DormTier>('prime');
  const [selectedSize, setSelectedSize] = useState<DormSizeOption>('twinXL');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleSelectionChange = (tier: DormTier, size: DormSizeOption) => {
    setSelectedTier(tier);
    setSelectedSize(size);
  };

  const prices = {
    core: dormCoreProduct.prices,
    prime: dormPrimeProduct.prices,
    'fir-plus': dormFirPlusProduct.prices
  };

  const currentProduct = dormProducts[selectedTier];
  const currentPrice = currentProduct.prices[selectedSize];
  const currentInfo = tierInfo[selectedTier];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-4">
            Study Hard, Sleep Better
          </h1>
          <p className="text-xl">
            Quality Mattresses Built for Dorm Life
          </p>
        </div>
      </section>

      {/* Product Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side - Product Images */}
            <div>
              <div className="relative aspect-square w-full mb-4 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={currentProduct.images[selectedImageIndex]}
                  alt={currentInfo.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* Thumbnail Gallery */}
              <div className="flex gap-3">
                {currentProduct.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? 'border-[var(--color-copper)]'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${currentInfo.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div>
              {/* Product Name */}
              <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)] mb-2">
                {currentInfo.name}
              </h2>

              {/* Tagline */}
              <p className="text-xl text-gray-600 mb-4">{currentInfo.tagline}</p>

              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">(98 reviews)</span>
              </div>

              {/* Combined Tier and Size Selector */}
              <CombinedDormSelector
                selectedTier={selectedTier}
                selectedSize={selectedSize}
                onSelectionChange={handleSelectionChange}
                prices={prices}
              />

              {/* Quantity Selector */}
              <div className="mt-6">
                <QuantitySelector
                  quantity={quantity}
                  onQuantityChange={setQuantity}
                />
              </div>

              {/* CTA Buttons */}
              <div className="mt-6">
                <AddToCartButton
                  productId={currentProduct.id}
                  productName={currentInfo.name}
                  size={selectedSize}
                  quantity={quantity}
                  price={currentPrice}
                />
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Warranty Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Made in USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Compact Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentInfo.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="text-[var(--color-copper)] text-2xl">✦</div>
                  <p className="text-lg text-gray-700">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Students Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Why Students Choose Sleepada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-lg">
              
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Perfect Fit for Dorms
              </h3>
              <p className="text-gray-700">
                Twin XL is the standard dorm size, and we&apos;ve got you covered. No measuring, no guessing — just a mattress that fits perfectly.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg">
              
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Compressed Shipping
              </h3>
              <p className="text-gray-700">
                Ships in a compact box that&apos;s easy to carry up dorm stairs and fits in your car. No need to rent a truck or beg friends with a van.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg">
              
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Safe & Certified
              </h3>
              <p className="text-gray-700">
                Made in America with CertiPUR-US® certified foams — no harsh chemicals, just clean, comfortable sleep you can trust.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg">
              
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Quality on a Budget
              </h3>
              <p className="text-gray-700">
                Direct-to-consumer pricing means no retail markup. You get premium quality without breaking your student budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[var(--color-hero-navy)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Ready to Upgrade Your Dorm Room?
          </h2>
          <p className="text-xl mb-8">
            Don&apos;t settle for that standard-issue mattress. Sleep better, study smarter.
          </p>
          <a
            href="mailto:sleepadasales@gmail.com"
            className="inline-block bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Contact Us for Questions
          </a>
        </div>
      </section>
    </div>
  );
}
