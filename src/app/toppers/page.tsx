'use client';

import CombinedTopperSelector from '@/components/product/CombinedTopperSelector';

export default function ToppersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Transform Your Mattress Instantly
          </h1>
          <p className="text-2xl">
            Premium Toppers That Make All the Difference
          </p>
        </div>
      </section>


      {/* Product Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Choose Your Perfect Topper
          </h2>
          <CombinedTopperSelector />
        </div>
      </section>

      {/* Additional Topper Info Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Premium Features & Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
                Memory Foam Toppers
              </h3>
              <p className="text-gray-700 mb-4">
                High-density memory foam that conforms to your body, relieving pressure points and providing customized support. Available in graphite, copper, gel, or HD slow recovery options for enhanced cooling, antimicrobial properties, and maximum support.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>CertiPUR-US® certified foam</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Graphite, copper, gel, or HD infusion options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Temperature regulation and antimicrobial properties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Excellent pressure point relief</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
                Natural Latex Toppers
              </h3>
              <p className="text-gray-700 mb-4">
                100% natural latex cut to order in soft, medium, or firm options. Eco-friendly, naturally hypoallergenic, and incredibly durable. Optional certified organic cotton zipper covers available.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>100% natural latex</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Soft, medium, or firm options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Naturally hypoallergenic and antimicrobial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Responsive, buoyant support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Organic cotton cover options available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Toppers Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Why Choose Sleepada Toppers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Instant Comfort Upgrade
              </h3>
              <p className="text-gray-700">
                Transform a too-firm mattress into a cloud of comfort, or revive an aging mattress with a fresh layer of support — all without buying new.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Premium Materials
              </h3>
              <p className="text-gray-700">
                Choose from CertiPUR-US® certified memory foam or GOLS certified organic latex — both cut to order in our Tennessee facility with premium materials.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
            
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Handcrafted Quality
              </h3>
              <p className="text-gray-700">
                Made in Tennessee with the same craftsmanship and attention to detail as our mattresses. No shortcuts, just quality you can feel.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Custom Options Available
              </h3>
              <p className="text-gray-700">
                All standard sizes available, plus custom sizes on request. Add certified organic cotton zipper covers to your latex topper for complete eco-friendly comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use a Topper Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Is a Topper Right for You?
          </h2>
          <div className="text-lg space-y-3 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="text-[var(--color-copper)] text-xl mt-1">✓</span>
              <span className="text-gray-700">Your mattress is too firm and you want to add softness</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[var(--color-copper)] text-xl mt-1">✓</span>
              <span className="text-gray-700">You want to extend the life of an older mattress</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[var(--color-copper)] text-xl mt-1">✓</span>
              <span className="text-gray-700">You&apos;re looking for pressure point relief</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[var(--color-copper)] text-xl mt-1">✓</span>
              <span className="text-gray-700">You want an affordable upgrade without replacing your whole mattress</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[var(--color-copper)] text-xl mt-1">✓</span>
              <span className="text-gray-700">You need extra comfort for a guest room or rental property</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[var(--color-hero-navy)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Ready to Transform Your Sleep?
          </h2>
          <p className="text-xl mb-8">
            Add comfort, support, and years of life to your mattress with a Sleepada topper.
          </p>
          <a
            href="mailto:sleepadasales@gmail.com"
            className="inline-block bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
