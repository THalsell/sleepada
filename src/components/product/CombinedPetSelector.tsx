'use client';

import { useState } from 'react';
import { PetSizeOption, PetProduct } from '@/types/product';
import { petCoreProduct } from '@/config/products/pet-core';
import { petPrimeProduct } from '@/config/products/pet-prime';
import { petFirPlusProduct } from '@/config/products/pet-fir-plus';
import QuantitySelector from './QuantitySelector';
import AddToCartButton from './AddToCartButton';

const petProducts = {
  'pet-core': petCoreProduct,
  'pet-prime': petPrimeProduct,
  'pet-fir-plus': petFirPlusProduct,
};

const sizeLabels: Record<PetSizeOption, { name: string; dimensions: string }> = {
  small: { name: 'Small', dimensions: '24" × 18"' },
  medium: { name: 'Medium', dimensions: '36" × 24"' },
  large: { name: 'Large', dimensions: '48" × 36"' },
};

export default function CombinedPetSelector() {
  const [selectedProduct, setSelectedProduct] = useState<keyof typeof petProducts>('pet-core');
  const [selectedSize, setSelectedSize] = useState<PetSizeOption>('medium');
  const [quantity, setQuantity] = useState(1);

  const product = petProducts[selectedProduct];
  const currentPrice = product.prices[selectedSize];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Product Tier Selector */}
      <div className="mb-6">
        <label htmlFor="pet-tier-select" className="text-lg font-semibold mb-3 block text-[var(--color-hero-navy)]">
          Select Pet Bed Type
        </label>
        <div className="relative">
          <select
            id="pet-tier-select"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value as keyof typeof petProducts)}
            className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg text-[var(--color-hero-navy)] font-medium bg-white hover:border-gray-400 focus:border-[var(--color-copper)] focus:outline-none focus:ring-2 focus:ring-[var(--color-copper)]/20 transition-all appearance-none cursor-pointer"
          >
            <option value="pet-core">Core Pet Bed - Everyday Comfort</option>
            <option value="pet-prime">Prime Pet Bed - Premium Cooling</option>
            <option value="pet-fir-plus">Fir Plus Pet Bed - Ultimate Wellness</option>
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

      {/* Size Selector */}
      <div className="mb-6">
        <label htmlFor="pet-size-select" className="text-lg font-semibold mb-3 block text-[var(--color-hero-navy)]">
          Select Size
        </label>
        <div className="relative">
          <select
            id="pet-size-select"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value as PetSizeOption)}
            className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg text-[var(--color-hero-navy)] font-medium bg-white hover:border-gray-400 focus:border-[var(--color-copper)] focus:outline-none focus:ring-2 focus:ring-[var(--color-copper)]/20 transition-all appearance-none cursor-pointer"
          >
            {(Object.keys(sizeLabels) as PetSizeOption[]).map((size) => (
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
        productId={product.id}
        productName={product.name}
        size={selectedSize}
        quantity={quantity}
        price={currentPrice}
      />
    </div>
  );
}
