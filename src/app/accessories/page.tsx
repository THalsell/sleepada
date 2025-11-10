import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accessories | Sleepada™',
  description: 'Complete your sleep sanctuary with Sleepada™ accessories. Pillows, toppers, and more to enhance your sleep experience.',
};

export default function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Complete Your Sleep Sanctuary
          </h1>
          <p className="text-2xl">
            Everything You Need for Perfect Sleep
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-2xl font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)] mb-8">
            A great mattress is just the beginning. Complete your sleep experience with accessories crafted with the same Tennessee quality you trust.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From premium pillows to mattress toppers, every Sleepada™ accessory is designed to work together, creating the perfect sleep environment from head to toe.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillows */}
            <Link href="/pillows" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl text-[var(--color-copper)] mb-4">◇</div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
                Premium Pillows
              </h3>
              <p className="text-gray-700 mb-4">
                Support for every sleep position. Wake up refreshed with pillows designed to complement your Sleepada mattress perfectly.
              </p>
              <span className="text-[var(--color-copper)] font-semibold">
                Explore Pillows →
              </span>
            </Link>

            {/* Toppers */}
            <Link href="/toppers" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl text-[var(--color-copper)] mb-4">◆</div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
                Mattress Toppers
              </h3>
              <p className="text-gray-700 mb-4">
                Transform any mattress instantly. Add comfort, extend life, and customize your sleep surface with premium memory foam toppers.
              </p>
              <span className="text-[var(--color-copper)] font-semibold">
                Explore Toppers →
              </span>
            </Link>

            {/* Pet Beds */}
            <Link href="/pet" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl text-[var(--color-copper)] mb-4">✦</div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
                Pet Beds
              </h3>
              <p className="text-gray-700 mb-4">
                Your furry friends deserve quality sleep too. Premium pet beds crafted with the same materials and care as our mattresses.
              </p>
              <span className="text-[var(--color-copper)] font-semibold">
                Explore Pet Beds →
              </span>
            </Link>

            {/* Coming Soon */}
            <div className="bg-white p-8 rounded-lg shadow-md opacity-75">
              <div className="text-5xl text-[var(--color-copper)] mb-4">★</div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
                More Coming Soon
              </h3>
              <p className="text-gray-700 mb-4">
                We&apos;re always working to bring you new products to complete your perfect sleep sanctuary. Stay tuned for mattress protectors, sheets, and more.
              </p>
              <span className="text-gray-500 font-semibold">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sleepada Accessories */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            The Sleepada Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl text-[var(--color-copper)] mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-hero-navy)]">
                Handcrafted Quality
              </h3>
              <p className="text-gray-700">
                Every accessory is made in Tennessee with the same attention to detail as our mattresses.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl text-[var(--color-copper)] mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-hero-navy)]">
                Premium Materials
              </h3>
              <p className="text-gray-700">
                CertiPUR-US® certified foams and quality fabrics — no harmful chemicals, just comfort.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl text-[var(--color-copper)] mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-hero-navy)]">
                Honest Value
              </h3>
              <p className="text-gray-700">
                Direct-to-consumer pricing means you get premium quality without retail markup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[var(--color-hero-navy)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Build Your Perfect Sleep System
          </h2>
          <p className="text-xl mb-8">
            Start with a Sleepada mattress, then complete your sanctuary with accessories designed to work in harmony.
          </p>
          <Link
            href="/"
            className="bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold inline-block"
          >
            Shop Mattresses
          </Link>
        </div>
      </section>
    </div>
  );
}
