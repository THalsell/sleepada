'use client';

import { useState } from 'react';
import Image from 'next/image';
import { RVSizeOption } from '@/types/product';
import { rvCoreProduct } from '@/config/products/rv-core';
import { rvPrimeProduct } from '@/config/products/rv-prime';
import { rvFirPlusProduct } from '@/config/products/rv-fir-plus';
import CombinedRVSelector from '@/components/product/CombinedRVSelector';
import QuantitySelector from '@/components/product/QuantitySelector';
import AddToCartButton from '@/components/product/AddToCartButton';

type RVTier = 'core' | 'prime' | 'fir-plus';
type ThicknessOption = '6inch' | '8inch' | '10inch';

const rvProducts = {
  core: rvCoreProduct,
  prime: rvPrimeProduct,
  'fir-plus': rvFirPlusProduct
};

const tierInfo = {
  core: {
    name: 'Sleepada RV Core',
    tagline: 'Entry-level memory foam comfort for your RV',
    features: [
      'Medium-Firm Support',
      'High-Density Memory Foam',
      'Good Motion Isolation',
      'CertiPUR-US® Certified',
      'Custom RV Sizing',
      'Made in Tennessee, USA'
    ]
  },
  prime: {
    name: 'Sleepada RV Prime',
    tagline: 'Gel-infused cooling technology for your RV',
    features: [
      'Medium Support',
      'Gel-Infused Cooling',
      'Very Good Motion Isolation',
      'Reinforced Edge Support',
      'CertiPUR-US® Certified',
      'Custom RV Sizing',
      'Temperature Regulation'
    ]
  },
  'fir-plus': {
    name: 'Sleepada RV FIR+',
    tagline: 'Premium with FIR infrared recovery tech for your RV',
    features: [
      'Medium-Plush Comfort',
      'FIR Infrared Recovery Tech',
      'Advanced Cooling + Graphite',
      'Excellent Motion Isolation',
      'Enhanced Edge Support',
      'Premium FIR-Infused Cover',
      'CertiPUR-US® Certified',
      'Custom RV Sizing'
    ]
  }
};

export default function RVPage() {
  const [selectedTier, setSelectedTier] = useState<RVTier>('prime');
  const [selectedThickness, setSelectedThickness] = useState<ThicknessOption>('8inch');
  const [selectedSize, setSelectedSize] = useState<RVSizeOption>('shortQueen');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleSelectionChange = (tier: RVTier, thickness: ThicknessOption, size: RVSizeOption) => {
    setSelectedTier(tier);
    setSelectedThickness(thickness);
    setSelectedSize(size);
  };

  const prices = {
    core: {
      '6inch': rvCoreProduct.variants['6inch'].prices,
      '8inch': rvCoreProduct.variants['8inch'].prices,
      '10inch': rvCoreProduct.variants['10inch'].prices
    },
    prime: {
      '6inch': rvPrimeProduct.variants['6inch'].prices,
      '8inch': rvPrimeProduct.variants['8inch'].prices,
      '10inch': rvPrimeProduct.variants['10inch'].prices
    },
    'fir-plus': {
      '6inch': rvFirPlusProduct.variants['6inch'].prices,
      '8inch': rvFirPlusProduct.variants['8inch'].prices,
      '10inch': rvFirPlusProduct.variants['10inch'].prices
    }
  };

  const currentProduct = rvProducts[selectedTier];
  // All tiers now use variant structure
  const currentPrice = (prices[selectedTier] as any)[selectedThickness][selectedSize];
  const currentInfo = tierInfo[selectedTier];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section
        className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-24 md:py-32 px-4 relative bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/rv-hero.png)' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-4">
            Sleep Better on the Road
          </h1>
          <p className="text-xl">
            Custom RV Mattresses Made for Adventure
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
                <span className="text-sm text-gray-600">(127 reviews)</span>
              </div>

              {/* Combined Tier and Size Selector */}
              <CombinedRVSelector
                selectedTier={selectedTier}
                selectedThickness={selectedThickness}
                selectedSize={selectedSize}
                onSelectionChange={handleSelectionChange}
                prices={prices as any}
                showThicknessSelector={true} // Always show thickness buttons
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
                  <span>Custom RV Sizing</span>
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

      {/* Why RV Owners Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Why RV Owners Choose Sleepada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-lg">
              
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Custom Sizes
              </h3>
              <p className="text-gray-700">
                RVs don&apos;t use standard mattress sizes. We craft mattresses to exact RV specifications, ensuring a perfect fit for your space.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg">
              
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Lightweight & Durable
              </h3>
              <p className="text-gray-700">
                Designed with RV living in mind — light enough to move easily, yet durable enough to handle the road.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg">
              
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Made in America
              </h3>
              <p className="text-gray-700">
                Every mattress is handcrafted in Tennessee, USA, with CertiPUR-US® certified foams — no harmful chemicals.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg">
              
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Ships to Your Door
              </h3>
              <p className="text-gray-700">
                Free shipping to wherever you call home — or wherever your RV is parked — so you can get back to adventuring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[var(--color-hero-navy)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Need a Custom Size?
          </h2>
          <p className="text-xl mb-8">
            We can create any custom size to fit your unique RV space. Contact us for a personalized quote.
          </p>
          <a
            href="mailto:sleepadasales@gmail.com"
            className="inline-block bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Contact Us for Custom Sizes
          </a>
        </div>
      </section>
    </div>
  );
}
