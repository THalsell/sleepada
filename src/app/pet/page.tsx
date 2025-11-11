import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Pet Beds | Sleepada™',
  description: 'Premium pet beds from Sleepada™. Give your furry friends the same quality sleep you enjoy. Handcrafted, comfortable, and built to last.',
};

export default function PetPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Comfort for Your Best Friend
          </h1>
          <p className="text-2xl">
            Premium Pet Beds Crafted with the Same Care
          </p>
        </div>
      </section>

      

      {/* Why Pet Owners Choose Us Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Why Pet Parents Choose Sleepada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Premium Materials
              </h3>
              <p className="text-gray-700">
                Made with the same high-quality, CertiPUR-US® certified foams we use in our mattresses — supportive, durable, and safe for your pets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Built to Last
              </h3>
              <p className="text-gray-700">
                High-density foam that won&apos;t flatten after a few months. These beds are designed to keep their shape and support through years of use.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Handcrafted in Tennessee
              </h3>
              <p className="text-gray-700">
                Made in America with pride. Every pet bed is handcrafted with the same attention to detail we put into every Sleepada product.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Multiple Sizes
              </h3>
              <p className="text-gray-700">
                From small cats and toy breeds to large dogs, we offer sizes to fit your pet perfectly. Custom sizes available upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[var(--color-hero-navy)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Give Your Pet the Gift of Great Sleep
          </h2>
          <p className="text-xl mb-8">
            They&apos;ve given you unconditional love. Give them a bed they&apos;ll love just as much.
          </p>
          <a
            href="mailto:sleepadasales@gmail.com"
            className="inline-block bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Contact Us for Custom Sizes
          </a>
        </div>
      </section>
    </div>
  );
}
