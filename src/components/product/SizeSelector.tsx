import { SizeOption, ProductPrices } from '@/types/product';

interface SizeSelectorProps {
  selectedSize: SizeOption;
  onSizeChange: (size: SizeOption) => void;
  prices: ProductPrices;
}

const sizeLabels: Record<SizeOption, string> = {
  twin: 'Twin',
  full: 'Full',
  queen: 'Queen',
  king: 'King',
  calKing: 'Cal King'
};

export default function SizeSelector({ selectedSize, onSizeChange, prices }: SizeSelectorProps) {
  const sizes: SizeOption[] = ['twin', 'full', 'queen', 'king', 'calKing'];

  return (
    <div className="mb-6">
      <label className="text-lg font-semibold mb-3 block text-[var(--color-hero-navy)]">
        Select Size
      </label>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeChange(size)}
            className={`px-4 py-3 border-2 rounded-lg transition-all ${
              selectedSize === size
                ? 'border-[var(--color-copper)] bg-[var(--color-copper)]/10 text-[var(--color-hero-navy)] font-semibold'
                : 'border-gray-300 text-gray-700 hover:border-gray-400'
            }`}
          >
            <div className="text-sm font-medium">{sizeLabels[size]}</div>
            <div className="text-xs text-gray-600">${prices[size]}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
