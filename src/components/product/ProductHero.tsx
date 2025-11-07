'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product, SizeOption } from '@/types/product';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';
import AddToCartButton from './AddToCartButton';

interface ProductHeroProps {
  product: Product;
}

export default function ProductHero({ product }: ProductHeroProps) {
  const [selectedSize, setSelectedSize] = useState<SizeOption>('queen');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const currentPrice = product.prices[selectedSize];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Product Images */}
          <div>
            <div className="relative aspect-square w-full mb-4 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={product.images[selectedImageIndex]}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Thumbnail Gallery */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index
                      ? 'border-[var(--color-copper)]'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div>
            {/* Breadcrumb */}
            <div className="text-sm text-gray-600 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              {' > '}
              <Link href="/#product-tiers" className="hover:underline">Products</Link>
              {' > '}
              <span>{product.name}</span>
            </div>

            {/* Product Name */}
            <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)] mb-2">
              {product.name}
            </h1>

            {/* Tagline */}
            <p className="text-xl text-gray-600 mb-4">{product.tagline}</p>

            {/* Star Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <span className="text-sm text-gray-600">(127 reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <p className="text-3xl font-bold text-[var(--color-copper)]">
                ${currentPrice}
              </p>
              <p className="text-sm text-gray-600">Free shipping included</p>
            </div>

            {/* Size Selector */}
            <SizeSelector
              selectedSize={selectedSize}
              onSizeChange={setSelectedSize}
              prices={product.prices}
            />

            {/* Quantity Selector */}
            <QuantitySelector
              quantity={quantity}
              onQuantityChange={setQuantity}
            />

            {/* CTA Buttons */}
            <AddToCartButton
              productId={product.id}
              productName={product.name}
              size={selectedSize}
              quantity={quantity}
              price={currentPrice}
            />

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Warranty Included</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Made in USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
