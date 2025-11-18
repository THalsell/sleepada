'use client';

import Image from 'next/image';
import { useState } from 'react';

const reviews = [
  {
    text: "Best mattress I've ever owned! The quality is outstanding and I've been sleeping better than ever. Worth every penny.",
    name: "Sarah Johnson",
    location: "Nashville, TN",
    rating: 5,
  },
  {
    text: "Exceptional comfort and support. My back pain has disappeared since switching to Sleepada. Highly recommend!",
    name: "Michael Chen",
    location: "Austin, TX",
    rating: 5,
  },
  {
    text: "The cooling technology really works! No more waking up hot in the middle of the night. Great investment.",
    name: "Jennifer Martinez",
    location: "Phoenix, AZ",
    rating: 5,
  },
];

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  return (
    <section className="relative w-full py-16 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mattress-clouds.jpg"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant-garamond)] mb-3 text-[var(--color-hero-navy)]">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mb-8">Join thousands of happy sleepers</p>

        {/* Single Review */}
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            {[...Array(reviews[currentReview].rating)].map((_, index) => (
              <span key={index} className="text-[var(--color-copper)] text-2xl">★</span>
            ))}
          </div>
          <p className="text-gray-700 text-lg md:text-xl mb-6 italic px-4">
            &ldquo;{reviews[currentReview].text}&rdquo;
          </p>
          <p className="text-[var(--color-hero-navy)] font-semibold">
            {reviews[currentReview].name}
          </p>
          <p className="text-gray-600 text-sm">
            {reviews[currentReview].location}
          </p>
        </div>

        {/* Carousel dots */}
        <div className="flex justify-center gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-2 h-2 rounded-full transition ${
                currentReview === index ? 'bg-[var(--color-copper)]' : 'bg-gray-400'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
