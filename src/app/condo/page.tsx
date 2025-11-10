import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Condo Mattresses | Sleepada™',
  description: 'Premium mattresses perfect for condo living from Sleepada™. Space-efficient, easy to move, and crafted for quality sleep in your urban home.',
};

export default function CondoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Urban Living, Elevated Sleep
          </h1>
          <p className="text-2xl">
            Premium Mattresses Designed for Condo Life
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-lg leading-relaxed space-y-6 text-gray-700">
            <p className="text-2xl font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)] mb-8">
              City living is full of energy, opportunity, and possibility. But at the end of a long day navigating the hustle, your home should be your sanctuary.
            </p>
            <p>
              Whether you&apos;re moving into your first condo, downsizing to a sleek urban space, or just need a mattress that fits through narrow hallways and tight stairwells, you deserve quality sleep without the hassle.
            </p>
            <p>
              Sleepada™ mattresses are crafted right here in Tennessee with condo dwellers in mind. We understand the challenges of urban living — limited space, elevator logistics, and the need for furniture that&apos;s both practical and premium.
            </p>
            <p>
              Our compressed shipping means your mattress arrives at your door in a compact box, easy to maneuver through hallways, up elevators, and into your space. Once unboxed, it expands to its full size, delivering the comfort and support you need to recharge for whatever the city throws your way.
            </p>
          </div>
        </div>
      </section>

      {/* Why Condo Owners Choose Us Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Why Condo Dwellers Choose Sleepada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">✦</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Easy Delivery & Setup
              </h3>
              <p className="text-gray-700">
                Compressed box delivery makes it simple to navigate elevators, narrow hallways, and tight doorways. No awkward furniture wrestling required.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">★</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Space-Efficient Sizes
              </h3>
              <p className="text-gray-700">
                From Twin to King, we offer sizes perfect for any condo bedroom — whether you&apos;re maximizing a cozy studio or outfitting a spacious primary suite.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">✓</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Quality Craftsmanship
              </h3>
              <p className="text-gray-700">
                Handcrafted in Tennessee with CertiPUR-US® certified foams. Premium materials, honest pricing — no retail markup, just great sleep.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">◆</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Move-In Ready
              </h3>
              <p className="text-gray-700">
                Perfect for new condo owners, renters, or anyone refreshing their space. Free shipping means one less thing to worry about on moving day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[var(--color-hero-navy)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Ready to Elevate Your Condo?
          </h2>
          <p className="text-xl mb-8">
            Discover mattresses designed for urban living. Quality sleep, delivered right to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Shop Mattresses
            </Link>
            <a
              href="mailto:sleepadasales@gmail.com"
              className="bg-transparent border-2 border-[var(--color-cream)] text-[var(--color-cream)] px-8 py-3 rounded-lg hover:bg-[var(--color-cream)] hover:text-[var(--color-hero-navy)] transition-all font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
