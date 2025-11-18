import { ProductReview } from '@/types/product';
import Link from 'next/link';

interface ProductReviewsProps {
  reviews: ProductReview[];
}

export default function ProductReviews({ reviews }: ProductReviewsProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[var(--color-cream)] p-6 rounded-lg">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">&ldquo;{review.text}&rdquo;</p>
              <p className="text-sm font-semibold text-[var(--color-hero-navy)]">
                {review.author}
              </p>
              <p className="text-xs text-gray-600">{review.location}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/#reviews" className="text-[var(--color-copper)] hover:underline font-semibold">
            Read All Reviews →
          </Link>
        </div>
      </div>
    </section>
  );
}
