'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';

export default function CartIcon() {
  const { totalItems } = useCart();

  return (
    <Link href="/cart" className="relative group">
      <div className="relative w-6 h-6 transition-all">
        <Image
          src="/icons/shoppingcart.png"
          alt="Shopping Cart"
          width={24}
          height={24}
          className="transition-all duration-200"
          style={{
            filter: 'brightness(0) invert(1)',
          }}
        />
        <style jsx>{`
          .group:hover img {
            filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(346deg) brightness(95%) contrast(92%) !important;
          }
        `}</style>
      </div>
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-[var(--color-copper)] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
