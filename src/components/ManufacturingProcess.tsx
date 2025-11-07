import Image from 'next/image';

const steps = [
  {
    number: 1,
    image: '/images/foam-rolls.jpg',
    title: 'Premium Foams & Textiles',
  },
  {
    number: 2,
    image: '/images/cutting-foam.jpg',
    title: 'Precision-Cut Comfort Layers',
  },
  {
    number: 3,
    image: '/images/layer-assembly.jpg',
    title: 'Expert Layer Assembly',
  },
  {
    number: 4,
    image: '/images/sewing-cover.jpg',
    title: 'Hand-Finished Cooling Cover',
  },
  {
    number: 5,
    image: '/images/quality-testing.jpg',
    title: 'Performance & Durability Tested',
  },
  {
    number: 6,
    image: '/images/roll-packing.jpg',
    title: 'Compressed, Rolled, & Boxed Fresh',
  },
];

export default function ManufacturingProcess() {
  return (
    <section className="py-16 px-4 bg-[var(--color-hero-navy)]">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-4 text-[var(--color-cream)]">
          From Foam to Finish
        </h2>
        <p className="text-xl text-center mb-12 text-[var(--color-cream)]">
          Crafted With Care, Built to Perform
        </p>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-6 gap-4 mb-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-center mb-2">
                <div className="bg-[var(--color-copper)] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              <p className="text-base font-semibold text-[var(--color-cream)] text-center">
                {step.title}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Scroll */}
        <div className="md:hidden overflow-x-auto snap-x snap-mandatory mb-8 pb-4">
          <div className="flex gap-4 px-4">
            {steps.map((step) => (
              <div key={step.number} className="snap-center shrink-0 w-64">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-center mb-2">
                  <div className="bg-[var(--color-copper)] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                <p className="text-base font-semibold text-[var(--color-cream)] text-center">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-lg text-center max-w-3xl mx-auto text-[var(--color-cream)] mt-8">
          Every Sleepada mattress is handcrafted in Tennessee using premium domestic and imported materials. From cutting foam to quality testing, each step reflects our commitment to American craftsmanship and your comfort.
        </p>

        <p className="text-2xl text-center font-bold text-[var(--color-cream)] mt-8">
          Delivered to Your Door
        </p>
      </div>
    </section>
  );
}
