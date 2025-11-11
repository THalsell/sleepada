'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TopperSizeOption, TopperProductWithSizes } from '@/types/product';
import { topperMemoryGraphiteProduct } from '@/config/products/topper-memory-graphite';
import { topperMemoryCopperProduct } from '@/config/products/topper-memory-copper';
import { topperMemoryGelProduct } from '@/config/products/topper-memory-gel';
import { topperMemoryHDProduct } from '@/config/products/topper-memory-hd';
import { topperLatexSoftProduct } from '@/config/products/topper-latex-soft';
import { topperLatexMediumProduct } from '@/config/products/topper-latex-medium';
import { topperLatexFirmProduct } from '@/config/products/topper-latex-firm';

type FoamCategory = 'memory' | 'latex';

const memoryFoamProducts = {
  'topper-memory-graphite': topperMemoryGraphiteProduct,
  'topper-memory-copper': topperMemoryCopperProduct,
  'topper-memory-gel': topperMemoryGelProduct,
  'topper-memory-hd': topperMemoryHDProduct,
};

const latexProducts = {
  'topper-latex-soft': topperLatexSoftProduct,
  'topper-latex-medium': topperLatexMediumProduct,
  'topper-latex-firm': topperLatexFirmProduct,
};

const sizeLabels: Record<TopperSizeOption, { name: string; dimensions: string }> = {
  twin: { name: 'Twin', dimensions: '38" × 75"' },
  twinXL: { name: 'Twin XL', dimensions: '38" × 80"' },
  full: { name: 'Full', dimensions: '54" × 75"' },
  fullXL: { name: 'Full XL', dimensions: '54" × 80"' },
  customFull: { name: 'Custom Full', dimensions: 'Custom' },
  shortQueen: { name: 'Short Queen', dimensions: '60" × 75"' },
  queen: { name: 'Queen', dimensions: '60" × 80"' },
  rv28x75: { name: '28" × 75"', dimensions: '28" × 75"' },
  rv30x75: { name: '30" × 75"', dimensions: '30" × 75"' },
  rv30x80: { name: '30" × 80"', dimensions: '30" × 80"' },
  rv32x75: { name: '32" × 75"', dimensions: '32" × 75"' },
  rv34x75: { name: '34" × 75"', dimensions: '34" × 75"' },
  rv35x80: { name: '35" × 80"', dimensions: '35" × 80"' },
  rv36x75: { name: '36" × 75"', dimensions: '36" × 75"' },
  rv36x80: { name: '36" × 80"', dimensions: '36" × 80"' },
  rv38x72: { name: '38" × 72"', dimensions: '38" × 72"' },
  rv39x80: { name: '39" × 80"', dimensions: '39" × 80"' },
  rv42x72: { name: '42" × 72"', dimensions: '42" × 72"' },
  rv42x75: { name: '42" × 75"', dimensions: '42" × 75"' },
  rv42x80: { name: '42" × 80"', dimensions: '42" × 80"' },
  rv48x72: { name: '48" × 72"', dimensions: '48" × 72"' },
  rv48x73: { name: '48" × 73"', dimensions: '48" × 73"' },
  rv48x75: { name: '48" × 75"', dimensions: '48" × 75"' },
  rv48x80: { name: '48" × 80"', dimensions: '48" × 80"' },
  rv70x75: { name: '70" × 75"', dimensions: '70" × 75"' },
  rv70x80: { name: '70" × 80"', dimensions: '70" × 80"' },
  rvShortKing: { name: 'RV Short King', dimensions: '72" × 75"' },
  rvKing: { name: 'RV King', dimensions: '72" × 80"' },
  calKing: { name: 'California King', dimensions: '72" × 84"' },
  standardKing: { name: 'Standard King', dimensions: '76" × 80"' },
  customKing: { name: 'Custom King', dimensions: 'Custom' },
};

export default function CombinedTopperSelector() {
  const [selectedCategory, setSelectedCategory] = useState<FoamCategory>('memory');
  const [selectedMemoryProduct, setSelectedMemoryProduct] = useState<keyof typeof memoryFoamProducts>('topper-memory-graphite');
  const [selectedLatexProduct, setSelectedLatexProduct] = useState<keyof typeof latexProducts>('topper-latex-medium');
  const [selectedSize, setSelectedSize] = useState<TopperSizeOption>('queen');

  const product = selectedCategory === 'memory'
    ? memoryFoamProducts[selectedMemoryProduct]
    : latexProducts[selectedLatexProduct];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Category Selection with Images */}
      <div className="mb-8">
        <h3 className="text-2xl font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)] mb-6 text-center">
          Choose Your Topper Type
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Memory Foam Card */}
          <button
            onClick={() => setSelectedCategory('memory')}
            className={`relative p-6 rounded-lg border-4 transition-all ${
              selectedCategory === 'memory'
                ? 'border-[var(--color-copper)] bg-[var(--color-cream)]'
                : 'border-gray-300 bg-white hover:border-gray-400'
            }`}
          >
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/foam-topper.png"
                alt="Memory Foam Topper"
                fill
                className="object-contain"
              />
            </div>
            <h4 className="text-xl font-bold text-[var(--color-hero-navy)] mb-2">Memory Foam Toppers</h4>
            <p className="text-gray-600 text-sm">
              Graphite, Copper, Gel, or HD options available
            </p>
          </button>

          {/* Latex Card */}
          <button
            onClick={() => setSelectedCategory('latex')}
            className={`relative p-6 rounded-lg border-4 transition-all ${
              selectedCategory === 'latex'
                ? 'border-[var(--color-copper)] bg-[var(--color-cream)]'
                : 'border-gray-300 bg-white hover:border-gray-400'
            }`}
          >
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/toppers.webp"
                alt="Latex Topper"
                fill
                className="object-contain"
              />
            </div>
            <h4 className="text-xl font-bold text-[var(--color-hero-navy)] mb-2">Latex Toppers</h4>
            <p className="text-gray-600 text-sm">
              Soft, Medium, or Firm options available
            </p>
          </button>
        </div>
      </div>

      {/* Specific Type Selector */}
      {selectedCategory === 'memory' ? (
        <div className="mb-6">
          <label htmlFor="memory-type-select" className="text-lg font-semibold mb-3 block text-[var(--color-hero-navy)]">
            Select Memory Foam Type
          </label>
          <div className="relative">
            <select
              id="memory-type-select"
              value={selectedMemoryProduct}
              onChange={(e) => setSelectedMemoryProduct(e.target.value as keyof typeof memoryFoamProducts)}
              className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg text-[var(--color-hero-navy)] font-medium bg-white hover:border-gray-400 focus:border-[var(--color-copper)] focus:outline-none focus:ring-2 focus:ring-[var(--color-copper)]/20 transition-all appearance-none cursor-pointer"
            >
              <option value="topper-memory-graphite">Graphite Infused - Temperature Regulating</option>
              <option value="topper-memory-copper">Copper Infused - Antimicrobial</option>
              <option value="topper-memory-gel">Gel Infused - Superior Cooling</option>
              <option value="topper-memory-hd">HD Slow Recovery - Maximum Support</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-6">
          <label htmlFor="latex-type-select" className="text-lg font-semibold mb-3 block text-[var(--color-hero-navy)]">
            Select Latex Firmness
          </label>
          <div className="relative">
            <select
              id="latex-type-select"
              value={selectedLatexProduct}
              onChange={(e) => setSelectedLatexProduct(e.target.value as keyof typeof latexProducts)}
              className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg text-[var(--color-hero-navy)] font-medium bg-white hover:border-gray-400 focus:border-[var(--color-copper)] focus:outline-none focus:ring-2 focus:ring-[var(--color-copper)]/20 transition-all appearance-none cursor-pointer"
            >
              <option value="topper-latex-soft">Soft - Plush Comfort</option>
              <option value="topper-latex-medium">Medium - Balanced Support</option>
              <option value="topper-latex-firm">Firm - Maximum Support</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Size Selector */}
      <div className="mb-6">
        <label htmlFor="topper-size-select" className="text-lg font-semibold mb-3 block text-[var(--color-hero-navy)]">
          Select Size
        </label>
        <div className="relative">
          <select
            id="topper-size-select"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value as TopperSizeOption)}
            className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg text-[var(--color-hero-navy)] font-medium bg-white hover:border-gray-400 focus:border-[var(--color-copper)] focus:outline-none focus:ring-2 focus:ring-[var(--color-copper)]/20 transition-all appearance-none cursor-pointer"
          >
            {(Object.keys(sizeLabels) as TopperSizeOption[]).map((size) => (
              <option key={size} value={size}>
                {sizeLabels[size].name} ({sizeLabels[size].dimensions})
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

      {/* Product Description */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-gray-700 mb-3">{product.description}</p>
        <p className="text-sm text-gray-600">
          <strong>Features:</strong> {product.features.slice(0, 3).join(', ')}
        </p>
      </div>

      {/* Contact Us */}
      <div className="text-center">
        <a
          href="mailto:sleepadasales@gmail.com?subject=Topper Inquiry&body=I'm interested in a topper with the following specifications:%0D%0A%0D%0AFoam Type: %0D%0ASize: %0D%0A%0D%0APlease provide pricing and availability."
          className="inline-block w-full bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
        >
          Contact Us for Pricing
        </a>
        <p className="text-sm text-gray-600 mt-3">
          Custom sizes available. We'll respond within 24 hours.
        </p>
      </div>
    </div>
  );
}
