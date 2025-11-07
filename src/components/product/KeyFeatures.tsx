interface KeyFeaturesProps {
  features: string[];
}

export default function KeyFeatures({ features }: KeyFeaturesProps) {
  return (
    <section className="py-16 px-4 bg-[var(--color-cream)]">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
              <span className="text-[var(--color-copper)] text-xl mt-1">✓</span>
              <span className="text-gray-700 flex-1">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
