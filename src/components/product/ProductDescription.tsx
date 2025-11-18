interface ProductDescriptionProps {
  description: string;
  layerDescription: string;
}

export default function ProductDescription({ description, layerDescription }: ProductDescriptionProps) {
  return (
    <>
      {/* About This Mattress */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-[family-name:var(--font-cormorant-garamond)] mb-8 text-[var(--color-hero-navy)]">
            About This Mattress
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            {description}
          </p>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-8 text-[var(--color-hero-navy)]">
            What&apos;s Inside
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <p className="text-lg text-gray-700 mb-4">{layerDescription}</p>
            <p className="text-sm text-gray-600 italic">
              Detailed layer diagrams coming soon. Contact us for construction specifications.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
