import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Sleepada™',
  description: 'Get in touch with Sleepada™. Questions about mattresses, custom orders, or bulk inquiries? We\'re here to help.',
};

const contactReasons = [
  {
    icon: '◆',
    title: 'Product Questions',
    description: 'Need help choosing the right mattress, pillow, or topper? We\'ll help you find the perfect fit for your needs.',
  },
  {
    icon: '◆',
    title: 'Custom Orders',
    description: 'Need a custom size mattress, RV bed, or special pillow cover? We can manufacture custom products to your specifications.',
  },
  {
    icon: '◆',
    title: 'Warranty & Returns',
    description: 'Questions about your warranty, return policy, or need to file a claim? We\'re here to help.',
  },
  {
    icon: '◆',
    title: 'Bulk & Wholesale',
    description: 'Interested in bulk orders for rental properties, hotels, or retail? Contact us for wholesale pricing and options.',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            We&apos;re Here to Help
          </h1>
          <p className="text-2xl">
            Questions? Custom Orders? Let&apos;s Talk.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              We typically respond within 1-2 business days
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Email */}
            <div className="bg-[var(--color-cream)] p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl text-[var(--color-copper)] mb-4">✉</div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Email Us
              </h3>
              <p className="text-gray-700 mb-4">
                For all inquiries, questions, and support
              </p>
              <a
                href="mailto:sleepadasales@gmail.com"
                className="text-[var(--color-copper)] hover:underline font-semibold text-lg"
              >
                sleepadasales@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-[var(--color-cream)] p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl text-[var(--color-copper)] mb-4">📍</div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                Location
              </h3>
              <p className="text-gray-700 mb-4">
                Handcrafted in Tennessee, USA
              </p>
              <p className="text-gray-600 italic">
                Online-direct business • No physical showroom
              </p>
            </div>
          </div>

          <div className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-4">
              Available 24/7 Online
            </h3>
            <p className="text-lg mb-2">Contact us anytime via email</p>
            <p className="text-gray-300">We respond to all inquiries within 1-2 business days</p>
          </div>
        </div>
      </section>

      {/* What Can We Help With Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            What Can We Help You With?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactReasons.map((reason, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl text-[var(--color-copper)] mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
                  {reason.title}
                </h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders Callout */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="bg-[var(--color-cream)] p-8 md:p-12 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-[family-name:var(--font-cormorant-garamond)] mb-4 text-[var(--color-hero-navy)]">
              Need a Custom Size or Design?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Because we manufacture everything in-house at our Tennessee facility, we can create custom mattresses, toppers, pillows, and covers to your exact specifications. Whether it&apos;s an RV mattress, boat cushion, odd-sized bed, or special pillow cover design — if you can dream it, we can build it.
            </p>
            <div className="space-y-3 text-left max-w-2xl mx-auto mb-6">
              <div className="flex items-start gap-3">
                <span className="text-[var(--color-copper)] text-xl mt-1">✓</span>
                <span className="text-gray-700">Custom mattress sizes for RVs, campers, boats, and unique bed frames</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--color-copper)] text-xl mt-1">✓</span>
                <span className="text-gray-700">Custom pillow covers in any size, fabric, or design</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--color-copper)] text-xl mt-1">✓</span>
                <span className="text-gray-700">Custom mattress toppers cut to order (memory foam or organic latex)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--color-copper)] text-xl mt-1">✓</span>
                <span className="text-gray-700">Bulk orders for rental properties, hotels, or retail</span>
              </div>
            </div>
            <a
              href="mailto:sleepadasales@gmail.com?subject=Custom Order Inquiry"
              className="inline-block bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Request a Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Reference Section */}
      <section className="py-16 px-4 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6 text-[var(--color-hero-navy)]">
            Have a Quick Question?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Check our FAQs — your answer might already be there!
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We&apos;ve compiled answers to the most common questions about our products, shipping, warranties, care instructions, and more. It&apos;s the fastest way to get the information you need.
          </p>
          <Link
            href="/faqs"
            className="inline-block bg-[var(--color-hero-navy)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Visit Our FAQs
          </Link>
        </div>
      </section>

      {/* Before You Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
            Before You Contact Us
          </h2>

          <div className="space-y-6">
            <div className="bg-[var(--color-cream)] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-hero-navy)]">For Warranty Claims:</h3>
              <p className="text-gray-700">Please include your order number, photos of the issue, and a description of the problem. This helps us process your claim faster.</p>
            </div>

            <div className="bg-[var(--color-cream)] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-hero-navy)]">For Custom Orders:</h3>
              <p className="text-gray-700">Include the dimensions you need, the type of product (mattress, topper, pillow), and any special requirements (firmness, materials, cover fabric, etc.).</p>
            </div>

            <div className="bg-[var(--color-cream)] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-hero-navy)]">For Product Questions:</h3>
              <p className="text-gray-700">Let us know your sleep preferences (position, firmness preference), any special needs (cooling, support, allergies), and we&apos;ll help you find the perfect product.</p>
            </div>

            <div className="bg-[var(--color-cream)] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-hero-navy)]">For Bulk/Wholesale Inquiries:</h3>
              <p className="text-gray-700">Tell us what type of business you operate, the quantity you&apos;re interested in, and the products you need. We&apos;ll provide wholesale pricing and options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[var(--color-hero-navy)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Whether you&apos;re ready to order or just have questions, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sleepadasales@gmail.com"
              className="bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Email Us Now
            </a>
            <Link
              href="/"
              className="bg-transparent border-2 border-[var(--color-cream)] text-[var(--color-cream)] px-8 py-3 rounded-lg hover:bg-[var(--color-cream)] hover:text-[var(--color-hero-navy)] transition-all font-semibold"
            >
              Shop Mattresses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
