import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mattress Toppers | Sleepada™',
  description: 'Memory foam and certified organic latex toppers cut to order. Transform your mattress with premium American-made toppers from Sleepada™.',
};

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

      {/* Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-lg leading-relaxed space-y-6 text-gray-700">
            <p className="text-2xl font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)] mb-8">
              Not ready to replace your entire mattress, but need a better night&apos;s sleep? A quality mattress topper might be exactly what you need.
            </p>
            <p>
              Maybe your mattress is a little too firm. Maybe it&apos;s showing its age but still has some life left. Or maybe you just want to add an extra layer of plush comfort without breaking the bank. Whatever the reason, a Sleepada™ mattress topper can completely transform your sleep experience.
            </p>
            <p>
              Handcrafted right here in Tennessee with the same premium materials we use in our mattresses, our toppers add instant comfort and support. Choose from high-density memory foam that contours to your body or certified organic latex for natural, responsive support — both cut to order in our facility.
            </p>
            <p>
              It&apos;s an affordable upgrade that makes a real difference — extending the life of your current mattress while giving you the comfort you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Topper Types Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Choose Your Topper Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
                Memory Foam Toppers
              </h3>
              <p className="text-gray-700 mb-4">
                High-density memory foam that conforms to your body, relieving pressure points and providing customized support. Available in various densities and includes options with graphite or gel infusion for enhanced cooling.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>CertiPUR-US® certified foam</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Multiple density options available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Graphite or gel-infused cooling options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>Excellent pressure point relief</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
                Certified Organic Latex Toppers
              </h3>
              <p className="text-gray-700 mb-4">
                100% natural, GOLS certified organic latex cut to order. Eco-friendly, naturally hypoallergenic, and incredibly durable. Optional certified organic cotton zipper covers available.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-copper)] mt-1">•</span>
                  <span>GOLS certified organic latex</span>
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
              <div className="text-4xl text-[var(--color-copper)] mb-4">✦</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Instant Comfort Upgrade
              </h3>
              <p className="text-gray-700">
                Transform a too-firm mattress into a cloud of comfort, or revive an aging mattress with a fresh layer of support — all without buying new.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">★</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Premium Materials
              </h3>
              <p className="text-gray-700">
                Choose from CertiPUR-US® certified memory foam or GOLS certified organic latex — both cut to order in our Tennessee facility with premium materials.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">✓</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Handcrafted Quality
              </h3>
              <p className="text-gray-700">
                Made in Tennessee with the same craftsmanship and attention to detail as our mattresses. No shortcuts, just quality you can feel.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-[var(--color-copper)] mb-4">◆</div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Shop Toppers
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
