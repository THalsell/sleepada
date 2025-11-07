interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  max?: number;
}

export default function QuantitySelector({ quantity, onQuantityChange, max = 10 }: QuantitySelectorProps) {
  const handleIncrement = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="mb-6">
      <label className="text-lg font-semibold mb-3 block text-[var(--color-hero-navy)]">
        Quantity
      </label>
      <div className="flex items-center gap-3">
        <button
          onClick={handleDecrement}
          disabled={quantity <= 1}
          className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-xl font-semibold"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => {
            const val = parseInt(e.target.value);
            if (!isNaN(val) && val >= 1 && val <= max) {
              onQuantityChange(val);
            }
          }}
          min="1"
          max={max}
          className="w-20 h-10 border-2 border-gray-300 rounded-lg text-center font-semibold focus:outline-none focus:border-[var(--color-copper)]"
        />
        <button
          onClick={handleIncrement}
          disabled={quantity >= max}
          className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-xl font-semibold"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
}
