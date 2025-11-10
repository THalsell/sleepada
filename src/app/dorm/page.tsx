import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dorm Mattresses | Sleepada™',
  description: 'Quality dorm mattresses from Sleepada™. Twin XL and custom sizes perfect for college students. Sleep better, study smarter.',
};

export default function DormPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Study Hard, Sleep Better
          </h1>
          <p className="text-2xl">
            Quality Mattresses Built for Dorm Life
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-lg leading-relaxed space-y-6 text-gray-700">
            <p className="text-2xl font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)] mb-8">
              College is an adventure — late-night study sessions, new friendships, early morning classes, and a whole lot of coffee. But here&apos;s the truth: none of it works without good sleep.
            </p>
            <p>
              Those standard-issue dorm mattresses? They&apos;re about as comfortable as sleeping on a textbook. Thin, worn-out, and who knows how many students slept on them before you. You deserve better.
            </p>
            <p>
              At Sleepada™, we know college students need real rest to perform their best. That&apos;s why we craft quality mattresses right here in Tennessee — comfortable, affordable, and designed to fit standard Twin XL dorm beds perfectly.
            </p>
            <p>
              Whether you&apos;re a freshman moving into your first dorm or a senior finally upgrading your sleep situation, a Sleepada mattress means you&apos;ll wake up refreshed and ready to tackle whatever the semester throws at you.
            </p>
            <p>
              Because great grades start with great sleep.
            </p>
          </div>
        </div>
      </section>

      {/* Why Students Choose Us Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Why Students Choose Sleepada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">✦</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Perfect Fit for Dorms
              </h3>
              <p className="text-gray-700">
                Twin XL is the standard dorm size, and we&apos;ve got you covered. No measuring, no guessing — just a mattress that fits perfectly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">★</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Compressed Shipping
              </h3>
              <p className="text-gray-700">
                Ships in a compact box that&apos;s easy to carry up dorm stairs and fits in your car. No need to rent a truck or beg friends with a van.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">✓</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Safe & Certified
              </h3>
              <p className="text-gray-700">
                Made in America with CertiPUR-US® certified foams — no harsh chemicals, just clean, comfortable sleep you can trust.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">◆</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Quality on a Budget
              </h3>
              <p className="text-gray-700">
                Direct-to-consumer pricing means no retail markup. You get premium quality without breaking your student budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[var(--color-hero-navy)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Ready to Upgrade Your Dorm Room?
          </h2>
          <p className="text-xl mb-8">
            Don&apos;t settle for that standard-issue mattress. Sleep better, study smarter.
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
