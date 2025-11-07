import Link from 'next/link';
import { coreProduct } from '@/config/products/core';
import { primeProduct } from '@/config/products/prime';
import { firPlusProduct } from '@/config/products/fir-plus';

interface ProductComparisonProps {
  currentProductId: string;
}

export default function ProductComparison({ currentProductId }: ProductComparisonProps) {
  const products = [coreProduct, primeProduct, firPlusProduct];

  return (
    <section className="py-16 px-4 bg-[var(--color-cream)]">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
          How Does It Compare?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-white p-6 rounded-lg shadow-md ${
                product.id === currentProductId ? 'ring-2 ring-[var(--color-copper)]' : ''
              }`}
            >
              {product.id === currentProductId && (
                <div className="bg-[var(--color-copper)] text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                  Current Product
                </div>
              )}
              <h3 className="text-2xl font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)] mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-3">{product.tagline}</p>
              <p className="text-xl font-bold text-[var(--color-copper)] mb-4">
                Starting at ${product.prices.twin}
              </p>
              <ul className="space-y-2 mb-6">
                {product.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-[var(--color-copper)]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {product.id !== currentProductId && (
                <Link
                  href={`/products/${product.slug}`}
                  className="block text-center bg-[var(--color-hero-navy)] text-white py-2 rounded-lg hover:opacity-90 transition"
                >
                  View {product.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/#product-tiers" className="text-[var(--color-copper)] hover:underline font-semibold">
            Compare All Mattresses →
          </Link>
        </div>
      </div>
    </section>
  );
}
