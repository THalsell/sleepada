'use client';

import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)] mb-6">
            Your Cart is Empty
          </h1>
          <p className="text-gray-600 mb-8">
            Add some products to get started!
          </p>
          <Link
            href="/"
            className="inline-block bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)] mb-8">
          Shopping Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
              >
                <div className="flex gap-6">
                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--color-hero-navy)] mb-2">
                      {item.productName}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Size: <span className="font-semibold">{item.size}</span>
                    </p>
                    <p className="text-2xl font-bold text-[var(--color-copper)] mb-4">
                      ${item.price}
                    </p>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-4 mb-4">
                      <label className="text-gray-700 font-semibold">Quantity:</label>
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors rounded-l-lg"
                        >
                          -
                        </button>
                        <span className="px-6 py-2 border-x border-gray-300 font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors rounded-r-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-800 font-semibold transition-colors"
                    >
                      Remove
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="text-right">
                    <p className="text-gray-600 mb-2">Subtotal:</p>
                    <p className="text-2xl font-bold text-[var(--color-hero-navy)]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[var(--color-cream)] rounded-lg p-6 shadow-md sticky top-24">
              <h2 className="text-2xl font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)] mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal:</span>
                  <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping:</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="border-t border-gray-300 pt-3 flex justify-between text-xl font-bold text-[var(--color-hero-navy)]">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <a
                href="mailto:sleepadasales@gmail.com?subject=Order Inquiry&body=I would like to place an order for the following items:%0D%0A%0D%0A"
                className="block w-full bg-[var(--color-copper)] text-white text-center px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold mb-4"
              >
                Contact Us to Complete Order
              </a>

              <Link
                href="/"
                className="block w-full text-center text-[var(--color-copper)] hover:underline font-semibold"
              >
                Continue Shopping
              </Link>

              <div className="mt-6 pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Note:</span> Please contact us via email to finalize your order. We&apos;ll get back to you within 24 hours!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
