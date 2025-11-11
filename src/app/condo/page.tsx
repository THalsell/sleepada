'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SizeOption } from '@/types/product';
import { condoCoreProduct } from '@/config/products/condo-core';
import { condoPrimeProduct } from '@/config/products/condo-prime';
import { condoFirPlusProduct } from '@/config/products/condo-fir-plus';
import CombinedCondoSelector from '@/components/product/CombinedCondoSelector';
import QuantitySelector from '@/components/product/QuantitySelector';
import AddToCartButton from '@/components/product/AddToCartButton';

type CondoTier = 'core' | 'prime' | 'fir-plus';

const condoProducts = {
  core: condoCoreProduct,
  prime: condoPrimeProduct,
  'fir-plus': condoFirPlusProduct
};

const tierInfo = {
  core: {
    name: 'Sleepada Condo Core',
    tagline: 'Entry-level memory foam comfort for condo living',
    features: [
      'Medium-Firm Support',
      'High-Density Memory Foam',
      'Good Motion Isolation',
      'CertiPUR-US® Certified',
      'Perfect for Condo Living',
      'Made in Tennessee, USA'
    ]
  },
  prime: {
    name: 'Sleepada Condo Prime',
    tagline: 'Gel-infused cooling technology for condo living',
    features: [
      'Medium Support',
      'Gel-Infused Cooling',
      'Very Good Motion Isolation',
      'Reinforced Edge Support',
      'CertiPUR-US® Certified',
      'Perfect for Condo Living',
      'Temperature Regulation'
    ]
  },
  'fir-plus': {
    name: 'Sleepada Condo FIR+',
    tagline: 'Premium with FIR infrared recovery tech for condo living',
    features: [
      'Medium-Plush Comfort',
      'FIR Infrared Recovery Tech',
      'Advanced Cooling + Graphite',
      'Excellent Motion Isolation',
      'Enhanced Edge Support',
      'Premium FIR-Infused Cover',
      'CertiPUR-US® Certified',
      'Perfect for Condo Living'
    ]
  }
};

export default function CondoPage() {
  const [selectedTier, setSelectedTier] = useState<CondoTier>('prime');
  const [selectedSize, setSelectedSize] = useState<SizeOption>('queen');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleSelectionChange = (tier: CondoTier, size: SizeOption) => {
    setSelectedTier(tier);
    setSelectedSize(size);
  };

  const prices = {
    core: condoCoreProduct.prices,
    prime: condoPrimeProduct.prices,
    'fir-plus': condoFirPlusProduct.prices
  };

  const currentProduct = condoProducts[selectedTier];
  const currentPrice = currentProduct.prices[selectedSize];
  const currentInfo = tierInfo[selectedTier];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-4">
            Urban Living, Elevated Sleep
          </h1>
          <p className="text-xl">
            Premium Mattresses Designed for Condo Life
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
                <span className="text-sm text-gray-600">(156 reviews)</span>
              </div>

              {/* Combined Tier and Size Selector */}
              <CombinedCondoSelector
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

      {/* Why Condo Dwellers Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Why Condo Dwellers Choose Sleepada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-lg">
              
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Easy Delivery & Setup
              </h3>
              <p className="text-gray-700">
                Compressed box delivery makes it simple to navigate elevators, narrow hallways, and tight doorways. No awkward furniture wrestling required.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg">
              
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Space-Efficient Sizes
              </h3>
              <p className="text-gray-700">
                From Twin to King, we offer sizes perfect for any condo bedroom — whether you&apos;re maximizing a cozy studio or outfitting a spacious primary suite.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg">
              
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Quality Craftsmanship
              </h3>
              <p className="text-gray-700">
                Handcrafted in Tennessee with CertiPUR-US® certified foams. Premium materials, honest pricing — no retail markup, just great sleep.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg">
              
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Move-In Ready
              </h3>
              <p className="text-gray-700">
                Perfect for new condo owners, renters, or anyone refreshing their space. Free shipping means one less thing to worry about on moving day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[var(--color-hero-navy)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Ready to Elevate Your Condo?
          </h2>
          <p className="text-xl mb-8">
            Discover mattresses designed for urban living. Quality sleep, delivered right to your door.
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
