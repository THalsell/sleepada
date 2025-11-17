'use client';

import { SizeOption, RVSizeOption, DormSizeOption, PillowSizeOption, PetSizeOption } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface AddToCartButtonProps {
  productId: string;
  productName: string;
  size: SizeOption | RVSizeOption | DormSizeOption | PillowSizeOption | PetSizeOption;
  quantity: number;
  price: number;
}

const SUCCESS_MESSAGE_DURATION = 3000;

export default function AddToCartButton({ productId, productName, size, quantity, price }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = () => {
    addItem({
      productId,
      productName,
      size,
      quantity,
      price,
    });

    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), SUCCESS_MESSAGE_DURATION);
  };

  const handleShopAmazon = () => {
    // TODO: Add actual Amazon link
    alert('Amazon link will be added soon!');
  };

  return (
    <div className="space-y-3 mb-6">
      {showSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-3">
          <p className="font-semibold">✓ Added to cart!</p>
        </div>
      )}

      <button
        onClick={handleAddToCart}
        className="w-full bg-[var(--color-copper)] text-white py-4 text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity"
      >
        Add to Cart
      </button>

      {showSuccess && (
        <button
          onClick={() => router.push('/cart')}
          className="w-full bg-[var(--color-hero-navy)] text-white py-4 text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          View Cart
        </button>
      )}

      <button
        onClick={handleShopAmazon}
        className="w-full bg-[var(--color-sky-blue)] text-[var(--color-text-dark)] py-4 text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity"
      >
        Shop on Amazon
      </button>
    </div>
  );
}
