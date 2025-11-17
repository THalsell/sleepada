import Image from 'next/image';
import Link from 'next/link';
import { productTiersConfig } from '@/config/productTiersConfig';

function ProductCard({ product }: { product: typeof productTiersConfig.products[0] }) {
  return (
    <div className="flex flex-col items-center h-full">
      <h3 className="text-5xl font-semi-bold font-[family-name:var(--font-bodoni)] mb-0 text-center">
        {product.name}
      </h3>
      <p className="text-lg text-copper font-semibold text-center mt-4 flex-1">{product.description}</p>
      <div className="w-full aspect-square relative -mt-2" style={{ filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))' }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain object-bottom transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
        />
      </div>
      
      <Link
        href={product.link}
        className="mt-4 bg-[var(--color-copper)] text-white px-8 py-3 rounded hover:opacity-90 transition"
      >
        Learn More
      </Link>
    </div>
  );
}

export default function ProductTiers() {
  return (
    <section id="products" className=" py-16 px-4" style={{ background: 'var(--color-cream)' }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {productTiersConfig.products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
