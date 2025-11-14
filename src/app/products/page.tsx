import ProductTiers from '@/components/ProductTiers';
import ProductCategories from '@/components/ProductCategories';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products | Sleepada™',
  description: 'Explore our full range of premium mattresses, pillows, toppers, and pet beds. Handcrafted in Tennessee with the finest materials.',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Our Products
          </h1>
          <p className="text-2xl">
            Premium Sleep Solutions Handcrafted in Tennessee
          </p>
        </div>
      </section>

      {/* Main Mattresses Section */}
      <ProductTiers />

      {/* Specialty Mattresses Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-4 text-[var(--color-hero-navy)]">
            Specialty Mattresses
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Purpose-built solutions for unique spaces
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/dorm"
              className="bg-[var(--color-cream)] p-8 rounded-lg shadow-md hover:shadow-lg transition group"
            >
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)] group-hover:text-[var(--color-copper)] transition">
                Dorm Mattresses
              </h3>
              <p className="text-gray-700 mb-4">
                Perfect for college living. Available in Twin XL and Full sizes.
              </p>
              <span className="text-[var(--color-copper)] font-semibold">
                Explore Dorm Options →
              </span>
            </Link>

            <Link
              href="/condo"
              className="bg-[var(--color-cream)] p-8 rounded-lg shadow-md hover:shadow-lg transition group"
            >
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)] group-hover:text-[var(--color-copper)] transition">
                Condo & Small Space
              </h3>
              <p className="text-gray-700 mb-4">
                Optimized for apartments and compact living spaces.
              </p>
              <span className="text-[var(--color-copper)] font-semibold">
                Explore Condo Options →
              </span>
            </Link>

            <Link
              href="/rv"
              className="bg-[var(--color-cream)] p-8 rounded-lg shadow-md hover:shadow-lg transition group"
            >
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)] group-hover:text-[var(--color-copper)] transition">
                RV Mattresses
              </h3>
              <p className="text-gray-700 mb-4">
                Custom sizes designed specifically for recreational vehicles.
              </p>
              <span className="text-[var(--color-copper)] font-semibold">
                Explore RV Options →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <ProductCategories />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6 text-[var(--color-hero-navy)]">
            Need Help Choosing?
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Not sure which mattress is right for you? Take our quiz or contact us for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/find-your-mattress"
              className="bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold"
            >
              Take the Quiz
            </Link>
            <Link
              href="/contact"
              className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
