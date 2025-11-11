import { SizeOption, RVSizeOption, DormSizeOption, PillowSizeOption } from '@/types/product';

interface AddToCartButtonProps {
  productId: string;
  productName: string;
  size: SizeOption | RVSizeOption | DormSizeOption | PillowSizeOption;
  quantity: number;
  price: number;
}

export default function AddToCartButton({ productId, productName, size, quantity, price }: AddToCartButtonProps) {
  const handleAddToCart = () => {
    const cartItem = {
      product: productId,
      productName,
      size,
      quantity,
      price,
      total: price * quantity
    };

    console.log('Add to Cart:', cartItem);
    // TODO: Implement Shopify integration
    alert(`Added ${quantity}x ${productName} (${size.toUpperCase()}) to cart - $${price * quantity}`);
  };

  const handleShopAmazon = () => {
    console.log('Shop on Amazon:', { product: productId, size, quantity });
    // TODO: Add actual Amazon link
    alert('Amazon link will be added soon!');
  };

  return (
    <div className="space-y-3 mb-6">
      <button
        onClick={handleAddToCart}
        className="w-full bg-[var(--color-copper)] text-white py-4 text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity"
      >
        Add to Cart
      </button>
      <button
        onClick={handleShopAmazon}
        className="w-full bg-[var(--color-sky-blue)] text-[var(--color-text-dark)] py-4 text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity"
      >
        Shop on Amazon
      </button>
    </div>
  );
}
