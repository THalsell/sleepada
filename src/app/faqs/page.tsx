import { faqCategories } from '@/config/faqs';
import FAQAccordion from '@/components/faqs/FAQAccordion';
import FAQNavigation from '@/components/faqs/FAQNavigation';

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl mb-8">
            Everything you need to know about Sleepada mattresses
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <FAQNavigation categories={faqCategories} />

      {/* FAQ Sections */}
      {faqCategories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-12 px-4 ${
            index % 2 === 0 ? 'bg-white' : 'bg-[var(--color-cream)]'
          }`}
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-[family-name:var(--font-cormorant-garamond)] mb-8 text-[var(--color-hero-navy)]">
              {category.title}
            </h2>
            <FAQAccordion questions={category.questions} />
          </div>
        </section>
      ))}

      {/* Still Have Questions Section */}
      <section className="py-16 px-4 bg-[var(--color-hero-navy)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8">
            Our team is here to help. Reach out and we'll get back to you quickly.
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
