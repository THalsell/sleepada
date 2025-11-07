import Link from 'next/link';
import Image from 'next/image';
import { productCategories } from '@/config/productCategories';

export default function ProductCategories() {
  return (
    <section className="w-full bg-hero-navy py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-cream)]">
          Complete Your Sleep Setup
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
            >
              {/* Image or placeholder */}
              {category.image ? (
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl text-gray-400">
                    {category.name === 'Toppers' && '📐'}
                    {category.name === 'Pet Beds' && '🐾'}
                  </span>
                </div>
              )}

              {/* Text overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition">
                <h3 className="text-4xl font-bold font-[family-name:var(--font-cormorant-garamond)] text-white">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
