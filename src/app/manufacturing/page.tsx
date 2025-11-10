import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Manufacturing | Sleepada™',
  description: 'Discover how Sleepada mattresses are handcrafted in Tennessee. From foam cutting to quality testing, every step reflects our commitment to American manufacturing.',
};

const manufacturingSteps = [
  {
    number: 1,
    title: 'Premium Materials Selection',
    description: 'We start with the finest materials available — CertiPUR-US® certified foams in various densities, GOLS certified organic latex, gel-infused and graphite memory foam. Every component is carefully selected for quality, durability, and performance before it enters our facility.',
    image: '/images/foam-rolls.jpg',
  },
  {
    number: 2,
    title: 'Precision Foam Cutting & Fabrication',
    description: 'Our full-service foam fabrication shop cuts and shapes each comfort layer to exact specifications. Using state-of-the-art equipment and skilled craftspeople, we ensure every piece meets our strict standards for consistency and quality.',
    image: '/images/cutting-foam.jpg',
  },
  {
    number: 3,
    title: 'Layer Assembly & Lamination',
    description: 'Expert hands carefully laminate and assemble foam layers, building each mattress core with precision. Multiple comfort layers are bonded together to create the perfect balance of support and softness for each mattress tier.',
    image: '/images/layer-assembly.jpg',
  },
  {
    number: 4,
    title: 'Cut & Sew - Custom Covers',
    description: 'In our full-service cut and sew facility, we design and manufacture every mattress cover, pillow cover, and zipper cover in-house. From selecting premium fabrics to the final stitch, our team controls every detail to ensure quality and durability.',
    image: '/images/sewing-cover.jpg',
  },
  {
    number: 5,
    title: 'Rigorous Quality Testing',
    description: 'Before any mattress leaves our facility, it undergoes comprehensive quality inspection. We test for proper firmness, layer adhesion, cover fit, and overall construction integrity. Only mattresses that meet our high standards earn the Sleepada name.',
    image: '/images/quality-testing.jpg',
  },
  {
    number: 6,
    title: 'Roll Pack & Ship',
    description: 'We compress, roll, and box each mattress fresh in our Tennessee facility. This innovative packaging makes delivery easy while protecting your mattress during transit. We ship via FedEx and UPS anywhere in the USA, delivering quality sleep right to your door.',
    image: '/images/roll-packing.jpg',
  },
];

const capabilities = [
  {
    icon: '◆',
    title: 'Full Foam Fabrication',
    description: 'Complete in-house foam cutting and fabrication capabilities for mattresses, toppers, and pillows using memory foam, latex, gel-infused, and graphite foams.',
  },
  {
    icon: '◆',
    title: 'Cut & Sew Facility',
    description: 'Our on-site sewing team creates custom covers, zipper encasements, and textile components — ensuring every detail meets our quality standards.',
  },
  {
    icon: '◆',
    title: 'Roll Pack Technology',
    description: 'Advanced compression and roll-packing equipment allows us to ship mattresses nationwide in compact, easy-to-handle boxes.',
  },
  {
    icon: '◆',
    title: 'Quality Control',
    description: 'Every product is inspected by skilled craftspeople who take pride in their work. We don\'t let anything leave our facility unless it\'s perfect.',
  },
];

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Handcrafted in Tennessee
          </h1>
          <p className="text-2xl">
            From Foam to Finish, Every Step Matters
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-2xl font-[family-name:var(--font-cormorant-garamond)] text-center text-[var(--color-hero-navy)] mb-8">
            Quality isn&apos;t just a promise — it&apos;s what happens when you control every step of the process.
          </p>
          <div className="text-lg leading-relaxed space-y-6 text-gray-700">
            <p>
              At Sleepada™, we don&apos;t outsource our manufacturing. We don&apos;t cut corners. We don&apos;t trust someone else to build our products. Every mattress, every pillow, every topper is handcrafted right here in our Tennessee facility by skilled American workers who take pride in their craft.
            </p>
            <p>
              From the moment premium foams arrive at our facility to the final quality inspection before shipping, we oversee every detail. This commitment to in-house manufacturing means we can guarantee the quality, consistency, and craftsmanship that goes into every product bearing the Sleepada name.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-4 text-[var(--color-hero-navy)]">
            Our Manufacturing Process
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            Six Steps to Superior Sleep
          </p>

          <div className="space-y-12">
            {manufacturingSteps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[var(--color-copper)] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-4 text-[var(--color-hero-navy)]">
            Complete In-House Manufacturing
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            Everything Under One Roof
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-[var(--color-cream)] p-8 rounded-lg shadow-md">
                <div className="text-5xl text-[var(--color-copper)] mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                  {capability.title}
                </h3>
                <p className="text-gray-700">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why In-House Matters Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Why In-House Manufacturing Matters
          </h2>

          <div className="space-y-6 text-lg text-gray-700">
            <div className="flex items-start gap-4">
              <span className="text-[var(--color-copper)] text-3xl font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-[var(--color-hero-navy)] mb-2">Quality Control at Every Step</h3>
                <p>When we control the entire process, we catch issues before they become problems. Our team inspects materials, monitors production, and tests finished products to ensure consistent quality.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[var(--color-copper)] text-3xl font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-[var(--color-hero-navy)] mb-2">American Jobs & Craftsmanship</h3>
                <p>Every mattress we make supports American workers and their families. Our team takes pride in their craft, and that pride shows in every product that leaves our facility.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[var(--color-copper)] text-3xl font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-[var(--color-hero-navy)] mb-2">Faster Innovation</h3>
                <p>When production happens in-house, we can test new materials, refine designs, and improve our products quickly. We&apos;re not waiting on third-party manufacturers — we control our own destiny.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[var(--color-copper)] text-3xl font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-[var(--color-hero-navy)] mb-2">Custom Capabilities</h3>
                <p>Need a custom size? Special cover design? Because we manufacture in-house, we can accommodate custom orders that other companies simply can&apos;t handle.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[var(--color-copper)] text-3xl font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-[var(--color-hero-navy)] mb-2">Environmental Responsibility</h3>
                <p>Manufacturing locally reduces our carbon footprint. Less shipping, less packaging waste, and more control over sustainable practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Made in USA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6 text-[var(--color-hero-navy)]">
            Proudly Made in the USA
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Tennessee Craftsmanship, American Pride
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            When you choose Sleepada, you&apos;re not just buying a mattress — you&apos;re supporting American manufacturing, American jobs, and American craftsmanship. You&apos;re choosing quality over shortcuts, substance over hype, and honest value over inflated retail prices.
          </p>
          <p className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)]">
            That&apos;s the Sleepada difference.
          </p>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[var(--color-hero-navy)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Experience Handcrafted Quality
          </h2>
          <p className="text-xl mb-8">
            See what Tennessee craftsmanship can do for your sleep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Shop Mattresses
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-[var(--color-cream)] text-[var(--color-cream)] px-8 py-3 rounded-lg hover:bg-[var(--color-cream)] hover:text-[var(--color-hero-navy)] transition-all font-semibold"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
