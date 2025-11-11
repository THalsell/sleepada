'use client';

import { useState } from 'react';
import { RVSizeOption } from '@/types/product';

type RVTier = 'core' | 'prime' | 'fir-plus';

interface CombinedRVSelectorProps {
  onSelectionChange: (tier: RVTier, size: RVSizeOption) => void;
  prices: Record<RVTier, Record<RVSizeOption, number>>;
  selectedTier: RVTier;
  selectedSize: RVSizeOption;
}

const tierLabels: Record<RVTier, string> = {
  'core': 'Sleepada RV Core - Entry-Level Comfort',
  'prime': 'Sleepada RV Prime - Gel-Infused Cooling',
  'fir-plus': 'Sleepada RV FIR+ - Premium Recovery Tech'
};

const rvSizeLabels: Record<RVSizeOption, { name: string; dimensions: string }> = {
  twin: { name: 'Twin', dimensions: '38" × 75"' },
  twinXL: { name: 'Twin XL', dimensions: '38" × 80"' },
  full: { name: 'Full', dimensions: '54" × 75"' },
  fullXL: { name: 'Full XL', dimensions: '54" × 80"' },
  customFull: { name: 'Custom Full', dimensions: 'Custom Size' },
  shortQueen: { name: 'Short Queen', dimensions: '60" × 75"' },
  queen: { name: 'Queen', dimensions: '66" × 80"' },
  rv28x75: { name: 'RV Bunk', dimensions: '28" × 75"' },
  rv30x75: { name: 'RV Bunk', dimensions: '30" × 75"' },
  rv30x80: { name: 'RV Bunk', dimensions: '30" × 80"' },
  rv32x75: { name: 'RV Bunk', dimensions: '32" × 75"' },
  rv34x75: { name: 'RV Bunk', dimensions: '34" × 75"' },
  rv35x80: { name: 'RV Bunk', dimensions: '35" × 80"' },
  rv36x75: { name: 'RV Bunk', dimensions: '36" × 75"' },
  rv36x80: { name: 'RV Bunk', dimensions: '36" × 80"' },
  rv38x72: { name: 'RV Custom', dimensions: '38" × 72"' },
  rv39x80: { name: 'RV Custom', dimensions: '39" × 80"' },
  rv42x72: { name: 'RV Custom', dimensions: '42" × 72"' },
  rv42x75: { name: 'RV Custom', dimensions: '42" × 75"' },
  rv42x80: { name: 'RV Custom', dimensions: '42" × 80"' },
  rv48x72: { name: 'RV Custom', dimensions: '48" × 72"' },
  rv48x73: { name: 'RV Custom', dimensions: '48" × 73"' },
  rv48x75: { name: 'RV Custom', dimensions: '48" × 75"' },
  rv48x80: { name: 'RV Custom', dimensions: '48" × 80"' },
  rv70x75: { name: 'RV Wide', dimensions: '70" × 75"' },
  rv70x80: { name: 'RV Wide', dimensions: '70" × 80"' },
  rvShortKing: { name: 'RV Short King', dimensions: '72" × 75"' },
  rvKing: { name: 'RV King', dimensions: '72" × 80"' },
  calKing: { name: 'California King', dimensions: '72" × 84"' },
  standardKing: { name: 'Standard King', dimensions: '76" × 80"' },
  customKing: { name: 'Custom King', dimensions: 'Custom Size' }
};

export default function CombinedRVSelector({
  onSelectionChange,
  prices,
  selectedTier,
  selectedSize
}: CombinedRVSelectorProps) {
  const tiers: RVTier[] = ['core', 'prime', 'fir-plus'];
  const sizes: RVSizeOption[] = [
    'twin',
    'twinXL',
    'full',
    'fullXL',
    'customFull',
    'shortQueen',
    'queen',
    'rv28x75',
    'rv30x75',
    'rv30x80',
    'rv32x75',
    'rv34x75',
    'rv35x80',
    'rv36x75',
    'rv36x80',
    'rv38x72',
    'rv39x80',
    'rv42x72',
    'rv42x75',
    'rv42x80',
    'rv48x72',
    'rv48x73',
    'rv48x75',
    'rv48x80',
    'rv70x75',
    'rv70x80',
    'rvShortKing',
    'rvKing',
    'calKing',
    'standardKing',
    'customKing'
  ];

  const currentPrice = prices[selectedTier][selectedSize];

  const handleTierChange = (tier: RVTier) => {
    onSelectionChange(tier, selectedSize);
  };

  const handleSizeChange = (size: RVSizeOption) => {
    onSelectionChange(selectedTier, size);
  };

  return (
    <div className="space-y-6">
      {/* Tier Selector */}
      <div>
        <label htmlFor="rv-tier-select" className="text-lg font-semibold mb-3 block text-[var(--color-hero-navy)]">
          Select Mattress Tier
        </label>
        <div className="relative">
          <select
            id="rv-tier-select"
            value={selectedTier}
            onChange={(e) => handleTierChange(e.target.value as RVTier)}
            className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg text-[var(--color-hero-navy)] font-medium bg-white hover:border-gray-400 focus:border-[var(--color-copper)] focus:outline-none focus:ring-2 focus:ring-[var(--color-copper)]/20 transition-all appearance-none cursor-pointer"
          >
            {tiers.map((tier) => (
              <option key={tier} value={tier}>
                {tierLabels[tier]}
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

      {/* Size Selector */}
      <div>
        <label htmlFor="rv-size-select" className="text-lg font-semibold mb-3 block text-[var(--color-hero-navy)]">
          Select RV Size
        </label>
        <div className="relative">
          <select
            id="rv-size-select"
            value={selectedSize}
            onChange={(e) => handleSizeChange(e.target.value as RVSizeOption)}
            className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg text-[var(--color-hero-navy)] font-medium bg-white hover:border-gray-400 focus:border-[var(--color-copper)] focus:outline-none focus:ring-2 focus:ring-[var(--color-copper)]/20 transition-all appearance-none cursor-pointer"
          >
            {sizes.map((size) => (
              <option key={size} value={size}>
                {rvSizeLabels[size].name} ({rvSizeLabels[size].dimensions})
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
      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-baseline justify-between">
          <span className="text-lg text-gray-600">Current price:</span>
          <span className="text-3xl font-bold text-[var(--color-copper)]">${currentPrice}</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">Free shipping included</p>
      </div>
    </div>
  );
}
