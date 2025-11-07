import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Far Infrared Technology | Sleepada™ FIR+ Mattress',
  description: 'Discover how Far Infrared (FIR) technology transforms your mattress into a recovery tool, promoting better circulation, muscle recovery, and deeper sleep.',
};

const howItWorksSteps = [
  {
    number: '1',
    title: 'Your Body Heat is Absorbed',
    description: 'The FIR-infused materials in your mattress absorb your body\'s natural heat throughout the night.'
  },
  {
    number: '2',
    title: 'Converted to FIR Waves',
    description: 'This heat energy is converted into far infrared waves and reflected back into your body at the optimal wavelength.'
  },
  {
    number: '3',
    title: 'Deep Tissue Benefits',
    description: 'FIR waves penetrate deeply, promoting circulation, reducing inflammation, and supporting natural recovery while you rest.'
  }
];

const benefits = [
  {
    title: 'Enhanced Circulation',
    description: 'FIR technology promotes increased blood flow, delivering more oxygen and nutrients to your muscles and tissues throughout the night.'
  },
  {
    title: 'Accelerated Muscle Recovery',
    description: 'Athletes and active individuals experience faster recovery from workouts and physical activity, reducing soreness and stiffness.'
  },
  {
    title: 'Reduced Inflammation',
    description: 'FIR waves help reduce inflammation at the cellular level, providing relief for those with chronic pain or joint discomfort.'
  },
  {
    title: 'Deeper, More Restorative Sleep',
    description: 'The gentle warmth and improved circulation promote relaxation and deeper sleep cycles, helping you wake refreshed.'
  },
  {
    title: 'Better Temperature Regulation',
    description: 'While promoting warmth where needed, the FIR+ mattress maintains optimal sleeping temperature throughout the night.'
  },
  {
    title: 'Enhanced Overall Wellness',
    description: 'Regular FIR exposure supports your body&apos;s natural healing processes, contributing to better overall health and vitality.'
  }
];

const targetAudiences = [
  {
    title: 'Athletes & Active Individuals',
    description: 'Accelerate recovery, reduce muscle soreness, and wake up ready for your next workout or competition.'
  },
  {
    title: 'Those with Chronic Pain',
    description: 'Experience relief from joint pain, arthritis, and inflammation through gentle, overnight FIR therapy.'
  },
  {
    title: 'Health-Conscious Sleepers',
    description: 'Invest in your long-term wellness with technology that supports your body&apos;s natural healing processes.'
  }
];

export default function InfraredTechnologyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Far Infrared Technology
          </h1>
          <p className="text-2xl mb-8">
            Advanced Sleep Science for Peak Recovery
          </p>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Discover how FIR technology transforms your mattress into a recovery tool, promoting better circulation, muscle recovery, and deeper sleep.
          </p>
        </div>
      </section>

      {/* What is FIR Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-8 text-[var(--color-hero-navy)]">
            What is Far Infrared Technology?
          </h2>
          <div className="text-lg leading-relaxed space-y-6 text-gray-700">
            <p>
              Far Infrared (FIR) is a type of energy in the electromagnetic spectrum that falls just beyond visible light. Unlike UV rays, FIR is completely safe and naturally occurs in sunlight. When integrated into mattress materials, FIR technology gently reflects your body&apos;s natural heat back as far infrared waves.
            </p>
            <p>
              These gentle infrared waves penetrate deep into your muscles and tissues, promoting increased blood flow and cellular regeneration while you sleep. The Sleepada FIR+ mattress features advanced FIR-infused materials in both the cover and foam layers, creating an optimal recovery environment throughout the night.
            </p>
            <p>
              This isn&apos;t just marketing — FIR technology has been studied and used in wellness applications for decades. Now, we&apos;re bringing this proven technology directly into your bedroom for effortless, overnight recovery.
            </p>
          </div>
        </div>
      </section>

      {/* How FIR Works Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            How It Works While You Sleep
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step) => (
              <div key={step.number} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-[var(--color-copper)] text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                  {step.title}
                </h3>
                <p className="text-gray-700">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-4 text-[var(--color-hero-navy)]">
            The FIR+ Advantage
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            Science-Backed Benefits for Better Sleep and Recovery
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-[var(--color-cream)] p-6 rounded-lg border-l-4 border-[var(--color-copper)]">
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-hero-navy)]">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Who Benefits from FIR Technology?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetAudiences.map((audience, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
                  {audience.title}
                </h3>
                <p className="text-gray-700">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science & Safety Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-8 text-center text-[var(--color-hero-navy)]">
            Safe, Natural, Effective
          </h2>
          <div className="text-lg leading-relaxed space-y-6 text-gray-700">
            <p>
              Far Infrared technology is completely safe and has been extensively studied for wellness applications. Unlike harmful UV radiation, FIR waves are gentle and therapeutic, similar to the warmth you feel from the sun on a spring day.
            </p>
            <p>
              The FIR materials in our mattresses are passive — they don&apos;t require electricity or generate heat on their own. Instead, they work with your body&apos;s natural heat to create a beneficial environment for recovery and rest.
            </p>
            <p>
              Every Sleepada FIR+ mattress combines this advanced technology with our commitment to safety. All materials are CertiPUR-US® certified and manufactured in Tennessee to the highest quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[var(--color-hero-navy)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Experience FIR Technology Tonight
          </h2>
          <p className="text-xl mb-8">
            Discover the difference advanced sleep technology can make in your recovery and wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products/fir-plus"
              className="bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Shop FIR+ Mattress
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-[var(--color-cream)] text-[var(--color-cream)] px-8 py-3 rounded-lg hover:bg-[var(--color-cream)] hover:text-[var(--color-hero-navy)] transition-all font-semibold"
            >
              Have Questions?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
