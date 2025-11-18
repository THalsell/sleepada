'use client';

import { DormSizeOption } from '@/types/product';

type DormTier = 'core' | 'prime' | 'fir-plus';

interface CombinedDormSelectorProps {
  onSelectionChange: (tier: DormTier, size: DormSizeOption) => void;
  prices: Record<DormTier, Record<DormSizeOption, number>>;
  selectedTier: DormTier;
  selectedSize: DormSizeOption;
}

const tierLabels: Record<DormTier, string> = {
  'core': 'Sleepada Dorm Core - Entry-Level Comfort',
  'prime': 'Sleepada Dorm Prime - Gel-Infused Cooling',
  'fir-plus': 'Sleepada Dorm FIR+ - Premium Recovery Tech'
};

const dormSizeLabels: Record<DormSizeOption, { name: string; dimensions: string }> = {
  twinXL: { name: 'Twin XL (Standard Dorm)', dimensions: '39" × 80"' },
  twin: { name: 'Twin', dimensions: '39" × 75"' }
};

export default function CombinedDormSelector({
  onSelectionChange,
  prices,
  selectedTier,
  selectedSize
}: CombinedDormSelectorProps) {
  const tiers: DormTier[] = ['core', 'prime', 'fir-plus'];
  const sizes: DormSizeOption[] = ['twinXL', 'twin'];

  const currentPrice = prices[selectedTier][selectedSize];

  const handleTierChange = (tier: DormTier) => {
    onSelectionChange(tier, selectedSize);
  };

  const handleSizeChange = (size: DormSizeOption) => {
    onSelectionChange(selectedTier, size);
  };

  return (
    <div className="space-y-6">
      {/* Tier Selector */}
      <div>
        <label htmlFor="dorm-tier-select" className="text-lg font-semibold mb-3 block text-[var(--color-hero-navy)]">
          Select Mattress Tier
        </label>
        <div className="relative">
          <select
            id="dorm-tier-select"
            value={selectedTier}
            onChange={(e) => handleTierChange(e.target.value as DormTier)}
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
        <label htmlFor="dorm-size-select" className="text-lg font-semibold mb-3 block text-[var(--color-hero-navy)]">
          Select Dorm Size
        </label>
        <div className="relative">
          <select
            id="dorm-size-select"
            value={selectedSize}
            onChange={(e) => handleSizeChange(e.target.value as DormSizeOption)}
            className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg text-[var(--color-hero-navy)] font-medium bg-white hover:border-gray-400 focus:border-[var(--color-copper)] focus:outline-none focus:ring-2 focus:ring-[var(--color-copper)]/20 transition-all appearance-none cursor-pointer"
          >
            {sizes.map((size) => (
              <option key={size} value={size}>
                {dormSizeLabels[size].name} ({dormSizeLabels[size].dimensions})
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
