import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pillows | Sleepada™',
  description: 'Shredded memory foam and certified organic latex pillows manufactured in-house. Custom pillow covers available. Ships anywhere in the USA.',
};

export default function PillowsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            The Perfect Pillow Changes Everything
          </h1>
          <p className="text-2xl">
            Premium Comfort for Every Sleep Position
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-lg leading-relaxed space-y-6 text-gray-700">
            <p className="text-2xl font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)] mb-8">
              You&apos;ve found the perfect mattress. Your sleep schedule is on point. But you still wake up with a stiff neck or achy shoulders. Sound familiar?
            </p>
            <p>
              The truth is, a great mattress is only half the equation. The right pillow makes all the difference between tossing and turning and waking up truly refreshed.
            </p>
            <p>
              At Sleepada™, we manufacture our own shredded memory foam pillows and certified organic latex pillows right here in-house. We control every step of the process — from selecting premium materials to designing custom pillow covers to meet your exact needs.
            </p>
            <p>
              Whether you sleep on your back, side, or stomach — whether you prefer the adjustable comfort of shredded memory foam or the natural support of organic latex — we&apos;ve crafted options to match your unique sleep style.
            </p>
            <p>
              And we ship anywhere in the USA, so no matter where you call home, you can experience the comfort of a Tennessee-made Sleepada pillow.
            </p>
          </div>
        </div>
      </section>

      {/* Pillow Types Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Choose Your Perfect Pillow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
                Shredded Memory Foam Pillows
              </h3>
              <p className="text-gray-700 mb-4">
                Adjustable comfort that molds to your unique shape. Our shredded memory foam pillows offer the perfect balance of support and softness, allowing you to customize the loft by adding or removing fill.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Adjustable loft for personalized comfort</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Excellent breathability and cooling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Conforms to head and neck for pressure relief</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Great for all sleep positions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
                Certified Organic Latex Pillows
              </h3>
              <p className="text-gray-700 mb-4">
                Natural, sustainable, and incredibly supportive. Our certified organic latex pillows offer responsive support that bounces back night after night, made from pure, eco-friendly materials.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Certified organic latex — natural and sustainable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Naturally hypoallergenic and antimicrobial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Excellent durability — won&apos;t flatten over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Responsive, buoyant support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
              Custom Pillow Covers Available
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Need a specific size, fabric, or design? We can create custom pillow covers tailored to your exact specifications. Contact us to discuss your custom pillow needs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Pillows Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Why Choose Sleepada Pillows
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">✦</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Manufactured In-House
              </h3>
              <p className="text-gray-700">
                We don&apos;t outsource production. Every pillow is made right here in our Tennessee facility, giving us complete control over quality at every step.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">★</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Premium Materials
              </h3>
              <p className="text-gray-700">
                From shredded memory foam to certified organic latex, we use only the finest materials — no cheap fillers, no shortcuts.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">✓</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Custom Design Available
              </h3>
              <p className="text-gray-700">
                Need a custom pillow cover or special specifications? We can design and manufacture pillows tailored to your exact needs.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">◆</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Ships Anywhere in the USA
              </h3>
              <p className="text-gray-700">
                No matter where you are in the United States, we&apos;ll ship your pillows directly to your door with care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect Pairing Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-8 text-[var(--color-hero-navy)]">
            The Perfect Pairing
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Upgrade Your Entire Sleep Experience
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Pair your new pillow with a Sleepada mattress for the ultimate sleep upgrade. When your mattress and pillow work together, you get the support and comfort your body needs — from head to toe.
          </p>
          <Link
            href="/"
            className="text-[var(--color-copper)] hover:underline font-semibold text-lg inline-block"
          >
            Explore Our Mattresses →
          </Link>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[var(--color-hero-navy)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Ready for Better Sleep?
          </h2>
          <p className="text-xl mb-8">
            Find the pillow that&apos;s perfect for you. Wake up refreshed, every single morning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Shop Pillows
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
