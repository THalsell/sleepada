'use client';

import { SizeOption } from '@/types/product';

type CondoTier = 'core' | 'prime' | 'fir-plus';

interface CombinedCondoSelectorProps {
  onSelectionChange: (tier: CondoTier, size: SizeOption) => void;
  prices: Record<CondoTier, Record<SizeOption, number>>;
  selectedTier: CondoTier;
  selectedSize: SizeOption;
}

const tierLabels: Record<CondoTier, string> = {
  'core': 'Sleepada Condo Core - Entry-Level Comfort',
  'prime': 'Sleepada Condo Prime - Gel-Infused Cooling',
  'fir-plus': 'Sleepada Condo FIR+ - Premium Recovery Tech'
};

const sizeLabels: Record<SizeOption, { name: string; dimensions: string }> = {
  twin: { name: 'Twin', dimensions: '39" × 75"' },
  twinXL: { name: 'Twin XL', dimensions: '39" × 80"' },
  full: { name: 'Full', dimensions: '54" × 75"' },
  queen: { name: 'Queen', dimensions: '60" × 80"' },
  king: { name: 'King', dimensions: '76" × 80"' },
  calKing: { name: 'Cal King', dimensions: '72" × 84"' }
};

export default function CombinedCondoSelector({
  onSelectionChange,
  prices,
  selectedTier,
  selectedSize
}: CombinedCondoSelectorProps) {
  const tiers: CondoTier[] = ['core', 'prime', 'fir-plus'];
  const sizes: SizeOption[] = ['twin', 'twinXL', 'full', 'queen', 'king', 'calKing'];

  const currentPrice = prices[selectedTier][selectedSize];

  const handleTierChange = (tier: CondoTier) => {
    onSelectionChange(tier, selectedSize);
  };

  const handleSizeChange = (size: SizeOption) => {
    onSelectionChange(selectedTier, size);
  };

  return (
    <div className="space-y-6">
      {/* Tier Selector */}
      <div>
        <label htmlFor="condo-tier-select" className="text-lg font-semibold mb-3 block text-[var(--color-hero-navy)]">
          Select Mattress Tier
        </label>
        <div className="relative">
          <select
            id="condo-tier-select"
            value={selectedTier}
            onChange={(e) => handleTierChange(e.target.value as CondoTier)}
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
        <label htmlFor="condo-size-select" className="text-lg font-semibold mb-3 block text-[var(--color-hero-navy)]">
          Select Size
        </label>
        <div className="relative">
          <select
            id="condo-size-select"
            value={selectedSize}
            onChange={(e) => handleSizeChange(e.target.value as SizeOption)}
            className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg text-[var(--color-hero-navy)] font-medium bg-white hover:border-gray-400 focus:border-[var(--color-copper)] focus:outline-none focus:ring-2 focus:ring-[var(--color-copper)]/20 transition-all appearance-none cursor-pointer"
          >
            {sizes.map((size) => (
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
