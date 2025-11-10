import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RV Mattresses | Sleepada™',
  description: 'Custom RV mattresses from Sleepada™. Sleep comfortably on the road with our handcrafted, American-made mattresses designed for your RV adventures.',
};

export default function RVPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Sleep Better on the Road
          </h1>
          <p className="text-2xl">
            Custom RV Mattresses Made for Adventure
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-lg leading-relaxed space-y-6 text-gray-700">
            <p className="text-2xl font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)] mb-8">
              There&apos;s nothing quite like waking up to the sunrise streaming through your RV window, the smell of fresh coffee brewing, and the promise of a new destination on the horizon.
            </p>
            <p>
              But here&apos;s the truth every RV owner knows — those factory mattresses? They weren&apos;t made for real sleep. Thin, uncomfortable, and oddly sized, they can turn your dream road trip into a restless night.
            </p>
            <p>
              That&apos;s where we come in. At Sleepada™, we craft custom RV mattresses right here in Tennessee, designed to fit your unique space and deliver the kind of sleep you deserve — whether you&apos;re parked at a mountain campsite or rolling down the highway toward your next adventure.
            </p>
            <p>
              We know your RV is more than just a vehicle — it&apos;s your home on wheels, your freedom, your sanctuary. And a great day on the road starts with a great night&apos;s sleep.
            </p>
          </div>
        </div>
      </section>

      {/* Why RV Owners Choose Us Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Why RV Owners Choose Sleepada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">✦</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Custom Sizes
              </h3>
              <p className="text-gray-700">
                RVs don&apos;t use standard mattress sizes. We can craft a mattress to your exact specifications, ensuring a perfect fit for your space.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">★</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Lightweight & Durable
              </h3>
              <p className="text-gray-700">
                Designed with RV living in mind — light enough to move easily, yet durable enough to handle the road.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">✓</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Made in America
              </h3>
              <p className="text-gray-700">
                Every mattress is handcrafted in Tennessee, USA, with CertiPUR-US® certified foams — no harmful chemicals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">◆</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Ships to Your Door
              </h3>
              <p className="text-gray-700">
                Free shipping to wherever you call home — or wherever your RV is parked — so you can get back to adventuring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[var(--color-hero-navy)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Ready to Upgrade Your RV Sleep?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your custom RV mattress. Every adventure deserves a great night&apos;s sleep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Explore Mattresses
            </Link>
            <a
              href="mailto:sleepadasales@gmail.com"
              className="bg-transparent border-2 border-[var(--color-cream)] text-[var(--color-cream)] px-8 py-3 rounded-lg hover:bg-[var(--color-cream)] hover:text-[var(--color-hero-navy)] transition-all font-semibold"
            >
              Contact Us for Custom Sizes
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
