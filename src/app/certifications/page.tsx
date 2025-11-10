import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Certifications | Sleepada™',
  description: 'CertiPUR-US certified foams and GOLS certified organic latex. Learn about our commitment to safe, quality materials in every Sleepada product.',
};

const certipurBenefits = [
  {
    icon: '✓',
    title: 'No Ozone Depleters',
    description: 'Our foams are made without ozone-depleting chemicals like CFCs, formaldehyde, or phthalates.',
  },
  {
    icon: '✓',
    title: 'No Flame Retardants',
    description: 'Free from PBDEs, TDCPP, and TCEP flame retardants that can harm health and the environment.',
  },
  {
    icon: '✓',
    title: 'No Heavy Metals',
    description: 'Tested to ensure no mercury, lead, or other heavy metals are present in the foam.',
  },
  {
    icon: '✓',
    title: 'Low VOC Emissions',
    description: 'Certified for low emissions (VOCs) for indoor air quality — typically less than 0.5 parts per million.',
  },
];

const whatItMeans = [
  'Made without ozone depleters',
  'Made without PBDE, TDCPP, or TCEP ("Tris") flame retardants',
  'Made without mercury, lead, and other heavy metals',
  'Made without formaldehyde',
  'Made without phthalates regulated by the Consumer Product Safety Commission',
  'Low VOC (Volatile Organic Compound) emissions for indoor air quality',
  'Tested for content, emissions, and durability',
  'Analyzed by independent, accredited testing laboratories',
];

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Certified for Your Safety
          </h1>
          <p className="text-2xl">
            Quality Materials You Can Trust
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-2xl font-[family-name:var(--font-cormorant-garamond)] text-center text-[var(--color-hero-navy)] mb-8">
            Your family&apos;s safety and health are too important to leave to chance.
          </p>
          <div className="text-lg leading-relaxed space-y-6 text-gray-700">
            <p>
              That&apos;s why every foam mattress, topper, and pillow we manufacture at Sleepada™ uses CertiPUR-US® certified foams. We also offer GOLS certified organic latex products for customers seeking natural, eco-friendly materials.
            </p>
            <p>
              These aren&apos;t just buzzwords or marketing labels — they&apos;re rigorous, third-party certifications that prove our materials meet the highest standards for content, emissions, and durability. When you see these certifications on a Sleepada product, you can rest easy knowing you&apos;re sleeping on materials that are safe, healthy, and responsibly made.
            </p>
          </div>
        </div>
      </section>

      {/* CertiPUR-US Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
              CertiPUR-US® Certified Foams
            </h2>
            <p className="text-xl text-gray-600">
              Independently Tested, Rigorously Certified
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-6 text-[var(--color-hero-navy)]">
              What is CertiPUR-US®?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              CertiPUR-US® is a certification program that tests and analyzes foam used in mattresses, toppers, and cushions. It&apos;s administered by independent, accredited testing laboratories to ensure that flexible polyurethane foam meets rigorous standards for content, emissions, and durability.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This certification isn&apos;t something manufacturers can claim on their own — every foam batch is tested by third parties to verify it meets the strict CertiPUR-US® criteria. That means you can trust the certification is real, not just a marketing claim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {certipurBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <span className="text-[var(--color-copper)] text-3xl font-bold shrink-0">
                    {benefit.icon}
                  </span>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-[var(--color-hero-navy)]">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-700">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-6 text-[var(--color-hero-navy)]">
              CertiPUR-US® Certified Foams Are:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whatItMeans.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[var(--color-copper)] text-xl mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GOLS Organic Latex Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
              GOLS Certified Organic Latex
            </h2>
            <p className="text-xl text-gray-600">
              100% Natural, Sustainably Sourced
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
                What is GOLS Certification?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The Global Organic Latex Standard (GOLS) is the world&apos;s leading certification for organic latex products. It ensures that the latex used in our pillows and toppers is made from at least 95% certified organic raw materials, processed without harmful chemicals, and produced sustainably.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
                Why Choose Organic Latex?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                GOLS certified organic latex is naturally hypoallergenic, antimicrobial, and incredibly durable. It&apos;s sustainably harvested from rubber trees, making it an eco-friendly choice. Plus, it offers responsive, buoyant support that won&apos;t flatten over time.
              </p>
            </div>
          </div>

          <div className="bg-[var(--color-cream)] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-6 text-[var(--color-hero-navy)] text-center">
              Benefits of GOLS Certified Organic Latex
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl text-[var(--color-copper)] mb-3">◆</div>
                <h4 className="font-bold text-[var(--color-hero-navy)] mb-2">95%+ Organic Content</h4>
                <p className="text-gray-700">Made from certified organic raw materials</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-[var(--color-copper)] mb-3">◆</div>
                <h4 className="font-bold text-[var(--color-hero-navy)] mb-2">Sustainably Produced</h4>
                <p className="text-gray-700">Eco-friendly harvesting and processing</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-[var(--color-copper)] mb-3">◆</div>
                <h4 className="font-bold text-[var(--color-hero-navy)] mb-2">No Harmful Chemicals</h4>
                <p className="text-gray-700">Free from pesticides and toxins</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-[var(--color-copper)] mb-3">◆</div>
                <h4 className="font-bold text-[var(--color-hero-navy)] mb-2">Naturally Hypoallergenic</h4>
                <p className="text-gray-700">Resistant to dust mites and allergens</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-[var(--color-copper)] mb-3">◆</div>
                <h4 className="font-bold text-[var(--color-hero-navy)] mb-2">Long-Lasting Durability</h4>
                <p className="text-gray-700">Won&apos;t break down or flatten easily</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-[var(--color-copper)] mb-3">◆</div>
                <h4 className="font-bold text-[var(--color-hero-navy)] mb-2">Third-Party Verified</h4>
                <p className="text-gray-700">Independently certified and tested</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Certifications Matter Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Why Certifications Matter
          </h2>

          <div className="space-y-6 text-lg text-gray-700">
            <div className="flex items-start gap-4">
              <span className="text-[var(--color-copper)] text-3xl font-bold mt-1">1</span>
              <div>
                <h3 className="font-bold text-[var(--color-hero-navy)] mb-2">You Spend a Third of Your Life in Bed</h3>
                <p>That&apos;s a lot of time in close contact with your mattress, pillow, and bedding. The materials you sleep on matter for your health, especially for children and those with sensitivities.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[var(--color-copper)] text-3xl font-bold mt-1">2</span>
              <div>
                <h3 className="font-bold text-[var(--color-hero-navy)] mb-2">Indoor Air Quality Matters</h3>
                <p>Uncertified foams can release harmful chemicals (VOCs) into your home for months or even years. CertiPUR-US® certified foams are tested for low emissions, ensuring better air quality in your bedroom.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[var(--color-copper)] text-3xl font-bold mt-1">3</span>
              <div>
                <h3 className="font-bold text-[var(--color-hero-navy)] mb-2">Not All Foams Are Created Equal</h3>
                <p>Some manufacturers use cheap, low-quality foams with harmful flame retardants or high chemical content to cut costs. Third-party certifications ensure you&apos;re getting materials that meet rigorous safety and quality standards.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[var(--color-copper)] text-3xl font-bold mt-1">4</span>
              <div>
                <h3 className="font-bold text-[var(--color-hero-navy)] mb-2">Peace of Mind</h3>
                <p>When you choose certified products, you don&apos;t have to wonder what&apos;s in your mattress or pillow. Independent testing and verification give you confidence that you&apos;re making a safe, healthy choice for your family.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6 text-[var(--color-hero-navy)]">
            Our Commitment to You
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Quality, Safety, and Transparency
          </p>
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              At Sleepada™, we don&apos;t just meet certification standards — we exceed them. We believe you deserve to know exactly what&apos;s in the products you bring into your home, and we&apos;re committed to using only the safest, highest-quality materials available.
            </p>
            <p>
              From CertiPUR-US® certified memory foam to GOLS certified organic latex, every material we use is chosen with your health, safety, and comfort in mind.
            </p>
            <p className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)] mt-8">
              Sleep safe. Sleep well. Sleep Sleepada.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[var(--color-hero-navy)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Experience Certified Quality
          </h2>
          <p className="text-xl mb-8">
            Discover mattresses, pillows, and toppers made with certified safe materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Shop Now
            </Link>
            <Link
              href="/faqs"
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
