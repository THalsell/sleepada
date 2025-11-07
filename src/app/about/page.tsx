import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Sleepada™ | Tennessee-Made Mattresses',
  description: 'Learn about Sleepada™, a Tennessee-based mattress company committed to handcrafted quality, American manufacturing, and honest value. Discover our story.',
};

const values = [
  {
    title: 'Quality Craftsmanship',
    description: 'Every mattress is handcrafted with attention to detail, from the first cut to the final stitch. We take pride in creating products built to last.',
    icon: '✦'
  },
  {
    title: 'American Made',
    description: 'Proudly manufactured in Tennessee, USA. We believe in supporting American workers and keeping jobs in our communities.',
    icon: '★'
  },
  {
    title: 'Honest Value',
    description: 'No middlemen, no retail markups. We sell directly to you, passing the savings along while maintaining uncompromising quality.',
    icon: '✓'
  }
];

const benefits = [
  'Handcrafted in Tennessee, USA',
  'CertiPUR-US® certified foams',
  'Direct-to-consumer pricing (no retail markup)',
  'Premium domestic and imported materials',
  'Free shipping to your door',
  'Warranty included on every mattress',
  'Supporting American jobs and manufacturing'
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Our Story
          </h1>
          <p className="text-2xl">
            Crafting Better Sleep, Right Here at Home
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-8 text-[var(--color-hero-navy)]">
            Born in the Hills of Tennessee
          </h2>
          <div className="text-lg leading-relaxed space-y-6 text-gray-700">
            <p>
              Sleepada™ was founded on one simple promise — to craft better sleep, right here at home. Nestled in the beautiful hills of Tennessee, our story began with a vision to bring quality, American-made mattresses to families across the country without the markup of traditional retail.
            </p>
            <p>
              Every Sleepada mattress is handcrafted in Tennessee using premium domestic and imported materials. We believe in honest craftsmanship, transparent pricing, and supporting American manufacturing. When you choose Sleepada, you&apos;re not just buying a mattress — you&apos;re supporting local jobs and American industry.
            </p>
            <p>
              From cutting the first piece of foam to the final quality inspection, each mattress reflects our commitment to excellence. Our CertiPUR-US® certified foams are high-density, durable, and made without harmful chemicals, ensuring you and your family sleep safe and sound.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl text-[var(--color-copper)] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                  {value.title}
                </h3>
                <p className="text-gray-700">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From Foam to Finish Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-8 text-[var(--color-hero-navy)]">
            From Foam to Finish
          </h2>
          <p className="text-xl mb-12 text-gray-600">
            Every Step Reflects Our Commitment
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Our manufacturing process ensures every Sleepada mattress meets the highest standards. From selecting premium foams to precision cutting, expert assembly, and rigorous quality testing — each step is performed with care by skilled craftspeople right here in Tennessee.
          </p>
          <Link
            href="/#manufacturing"
            className="text-[var(--color-copper)] hover:underline font-semibold text-lg inline-block"
          >
            See Our Manufacturing Process →
          </Link>
        </div>
      </section>

      {/* Our Materials Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Premium Materials, Responsibly Sourced
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - CertiPUR-US */}
            <div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
                CertiPUR-US® Certified Foams
              </h3>
              <p className="text-gray-700 leading-relaxed">
                All our foams are CertiPUR-US® certified, meaning they&apos;re made without ozone depleters, PBDE flame retardants, mercury, lead, heavy metals, formaldehyde, or phthalates. Your family&apos;s safety is our priority.
              </p>
            </div>

            {/* Right Column - Quality Components */}
            <div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
                Quality Components
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We use a blend of premium domestic and imported materials, carefully selected for durability, comfort, and performance. Every component meets our strict quality standards before it becomes part of a Sleepada mattress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sleepada Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-12 text-[var(--color-hero-navy)]">
            Why Choose Sleepada?
          </h2>
          <div className="text-lg space-y-3 text-left max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-[var(--color-copper)] text-xl mt-1">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[var(--color-hero-navy)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Ready for Better Sleep?
          </h2>
          <p className="text-xl mb-8">
            Experience the Sleepada difference. Handcrafted quality, delivered to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Shop Mattresses
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-[var(--color-cream)] text-[var(--color-cream)] px-8 py-3 rounded-lg hover:bg-[var(--color-cream)] hover:text-[var(--color-hero-navy)] transition-all font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
