'use client';

import { useState } from 'react';
import { PetSizeOption, PetThicknessOption, PetStyleOption } from '@/types/product';
import { petBedProduct } from '@/config/products/pet-bed';

const sizeLabels: Record<PetSizeOption, { name: string; dimensions: string }> = {
  medium: { name: 'Medium', dimensions: '30" × 24"' },
  large: { name: 'Large', dimensions: '40" × 30"' },
  extraLarge: { name: 'Extra Large', dimensions: '48" × 36"' },
};

const styleLabels: Record<PetStyleOption, { name: string; description: string }> = {
  basic: { name: 'Basic Comfort', description: 'High-quality memory foam for everyday use' },
  infrared: { name: 'Infrared Wellness', description: 'FIR technology for enhanced recovery' },
};

const thicknessLabels: Record<PetThicknessOption, { name: string; description: string }> = {
  '3inch': { name: '3"', description: 'Compact design' },
  '5inch': { name: '5"', description: 'Premium thickness' },
};

export default function CombinedPetSelector() {
  const [selectedStyle, setSelectedStyle] = useState<PetStyleOption>('basic');
  const [selectedThickness, setSelectedThickness] = useState<PetThicknessOption>('5inch');
  const [selectedSize, setSelectedSize] = useState<PetSizeOption>('large');
  const [wantsEmbroidery, setWantsEmbroidery] = useState(false);
  const [petName, setPetName] = useState('');

  const product = petBedProduct;

  // Calculate price
  const basePrice = product.variants[selectedStyle].thicknesses[selectedThickness].prices[selectedSize];
  const embroideryCharge = wantsEmbroidery ? product.embroideryPrice : 0;
  const totalPrice = basePrice + embroideryCharge;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Style Selector */}
      <div>
        <label className="text-lg font-semibold mb-3 block text-[var(--color-hero-navy)]">
          Select Style
        </label>
        <div className="grid grid-cols-1 gap-3">
          {(Object.keys(styleLabels) as PetStyleOption[]).map((style) => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                selectedStyle === style
                  ? 'border-[var(--color-copper)] bg-[var(--color-copper)]/5'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="font-semibold text-[var(--color-hero-navy)]">
                {styleLabels[style].name}
              </div>
              <div className="text-sm text-gray-600 mt-1">
                {styleLabels[style].description}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Thickness Selector */}
      <div>
        <label className="text-lg font-semibold mb-3 block text-[var(--color-hero-navy)]">
          Select Thickness
        </label>
        <div className="grid grid-cols-2 gap-3">
          {(Object.keys(thicknessLabels) as PetThicknessOption[]).map((thickness) => (
            <button
              key={thickness}
              onClick={() => setSelectedThickness(thickness)}
              className={`p-4 rounded-lg border-2 text-center transition-all ${
                selectedThickness === thickness
                  ? 'border-[var(--color-copper)] bg-[var(--color-copper)]/5'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="font-semibold text-[var(--color-hero-navy)]">
                {thicknessLabels[thickness].name}
              </div>
              <div className="text-sm text-gray-600 mt-1">
                {thicknessLabels[thickness].description}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Size Selector */}
      <div>
        <label className="text-lg font-semibold mb-3 block text-[var(--color-hero-navy)]">
          Select Size
        </label>
        <div className="grid grid-cols-3 gap-3">
          {(Object.keys(sizeLabels) as PetSizeOption[]).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`p-4 rounded-lg border-2 text-center transition-all ${
                selectedSize === size
                  ? 'border-[var(--color-copper)] bg-[var(--color-copper)]/5'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="font-semibold text-[var(--color-hero-navy)]">
                {sizeLabels[size].name}
              </div>
              <div className="text-sm text-gray-600 mt-1">
                {sizeLabels[size].dimensions}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Embroidery Option */}
      <div className="bg-[var(--color-cream)] p-4 rounded-lg">
        <div className="flex items-start gap-3 mb-3">
          <input
            type="checkbox"
            id="embroidery-checkbox"
            checked={wantsEmbroidery}
            onChange={(e) => setWantsEmbroidery(e.target.checked)}
            className="mt-1 w-5 h-5 text-[var(--color-copper)] border-gray-300 rounded focus:ring-[var(--color-copper)]"
          />
          <label htmlFor="embroidery-checkbox" className="flex-1 cursor-pointer">
            <div className="font-semibold text-[var(--color-hero-navy)]">
              Add Name Embroidery (+${product.embroideryPrice})
            </div>
            <div className="text-sm text-gray-600">
              Personalize with your pet&apos;s name beautifully embroidered on the bed
            </div>
          </label>
        </div>

        {wantsEmbroidery && (
          <div className="mt-3">
            <label htmlFor="pet-name-input" className="text-sm font-semibold mb-2 block text-[var(--color-hero-navy)]">
              Pet&apos;s Name
            </label>
            <input
              type="text"
              id="pet-name-input"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder="Enter your pet's name"
              maxLength={20}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-[var(--color-hero-navy)] bg-white focus:border-[var(--color-copper)] focus:outline-none focus:ring-2 focus:ring-[var(--color-copper)]/20 transition-all"
            />
            <p className="text-xs text-gray-500 mt-1">Maximum 20 characters</p>
          </div>
        )}
      </div>

      {/* Price Display */}
      <div className="pt-4 border-t border-gray-200">
        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <span className="text-gray-600">Base Price:</span>
            <span className="text-xl font-semibold text-[var(--color-hero-navy)]">${basePrice}</span>
          </div>
          {wantsEmbroidery && (
            <div className="flex items-baseline justify-between text-sm">
              <span className="text-gray-600">Name Embroidery:</span>
              <span className="font-medium text-[var(--color-hero-navy)]">+${product.embroideryPrice}</span>
            </div>
          )}
          <div className="flex items-baseline justify-between pt-2 border-t border-gray-200">
            <span className="text-lg font-semibold text-gray-700">Total:</span>
            <span className="text-3xl font-bold text-[var(--color-copper)]">${totalPrice}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-3">Free shipping included</p>
      </div>

      {/* Contact Button */}
      <a
        href={`mailto:sleepadasales@gmail.com?subject=Pet Bed Order - ${styleLabels[selectedStyle].name}, ${thicknessLabels[selectedThickness].name}, ${sizeLabels[selectedSize].name}${wantsEmbroidery ? ` with "${petName}" embroidery` : ''}&body=I would like to order:%0D%0A%0D%0AStyle: ${styleLabels[selectedStyle].name}%0D%0AThickness: ${thicknessLabels[selectedThickness].name}%0D%0ASize: ${sizeLabels[selectedSize].name} (${sizeLabels[selectedSize].dimensions})%0D%0AEmbroidery: ${wantsEmbroidery ? `Yes - "${petName}"` : 'No'}%0D%0A%0D%0ATotal Price: $${totalPrice}`}
        className="w-full bg-[var(--color-copper)] text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold text-center block"
      >
        Contact Us to Order
      </a>
    </div>
  );
}
