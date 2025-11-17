'use client';

import CombinedPetSelector from '@/components/product/CombinedPetSelector';
import Image from 'next/image';

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

      {/* Product Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Choose Your Perfect Pet Bed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Product Image */}
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/petbed.png"
                alt="Premium Pet Bed"
                fill
                className="object-contain object-top"
              />
            </div>

            {/* Right Side - Product Selector */}
            <div>
              <CombinedPetSelector />
            </div>
          </div>
        </div>
      </section>

      {/* Infrared Technology Explanation Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            What is Infrared Technology?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mb-8">
            {/* Image */}
            <div className="relative w-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/pet-infrared.png"
                alt="Infrared Technology for Pet Beds"
                fill
                className="object-contain"
              />
            </div>
            {/* Text Content */}
            <div className="bg-[var(--color-cream)] p-8 rounded-lg flex flex-col justify-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                An infrared pet bed uses your pet&apos;s body heat to reflect far infrared (FIR) rays back into their body, which can help with pain relief, inflammation, and circulation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                These beds are beneficial for pets with conditions like arthritis, hip dysplasia, or muscle pain, but are also suitable for any pet that needs extra comfort or warmth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our infrared beds are non-heated and use your pet&apos;s own body heat with FIR technology - providing therapeutic benefits naturally without electricity or cords.
              </p>
            </div>
          </div>

          {/* Fabric Close-up Image */}
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/infrared-fabric.webp"
              alt="FIR-Infused Fabric Close-up"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
              <div className="text-center">
                <h3 className="text-3xl font-[family-name:var(--font-cormorant-garamond)] font-bold text-white mb-3">
                  FIR-Infused Fabric
                </h3>
                <p className="text-white text-lg leading-relaxed max-w-2xl mx-auto">
                  Our premium cover is infused with Far Infrared technology that uses your pet&apos;s body heat to promote circulation and wellness
                </p>
              </div>
            </div>
          </div>
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
                From medium to extra large sizes, we offer beds to fit your pet perfectly. Custom sizes available upon request.
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
