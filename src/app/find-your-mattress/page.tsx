'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const questions = [
  {
    id: 'budget',
    question: 'What\'s your budget range?',
    options: [
      { text: 'Budget-friendly ($299-$499)', value: 'budget', points: { core: 3, prime: 1, fir: 0 } },
      { text: 'Mid-range ($499-$749)', value: 'mid', points: { core: 1, prime: 3, fir: 1 } },
      { text: 'Premium ($749+)', value: 'premium', points: { core: 0, prime: 1, fir: 3 } },
    ],
  },
  {
    id: 'sleep-hot',
    question: 'Do you sleep hot?',
    options: [
      { text: 'Yes, I often wake up sweating', value: 'yes', points: { core: 0, prime: 3, fir: 2 } },
      { text: 'Sometimes get warm', value: 'sometimes', points: { core: 1, prime: 2, fir: 2 } },
      { text: 'No, I sleep cool', value: 'no', points: { core: 2, prime: 1, fir: 1 } },
    ],
  },
  {
    id: 'firmness',
    question: 'What firmness do you prefer?',
    options: [
      { text: 'Firm support', value: 'firm', points: { core: 3, prime: 2, fir: 0 } },
      { text: 'Medium (balanced)', value: 'medium', points: { core: 2, prime: 3, fir: 1 } },
      { text: 'Plush and soft', value: 'plush', points: { core: 0, prime: 1, fir: 3 } },
    ],
  },
  {
    id: 'use-case',
    question: 'What\'s this mattress for?',
    options: [
      { text: 'Primary bedroom', value: 'primary', points: { core: 1, prime: 2, fir: 3 } },
      { text: 'Guest room', value: 'guest', points: { core: 3, prime: 2, fir: 0 } },
      { text: 'Kids\' room', value: 'kids', points: { core: 3, prime: 1, fir: 0 } },
      { text: 'RV/Camper', value: 'rv', points: { core: 2, prime: 2, fir: 1 } },
    ],
  },
  {
    id: 'recovery',
    question: 'Are you interested in recovery and wellness features?',
    options: [
      { text: 'Yes, I\'m an athlete or have muscle soreness', value: 'yes', points: { core: 0, prime: 1, fir: 3 } },
      { text: 'Maybe, sounds interesting', value: 'maybe', points: { core: 1, prime: 2, fir: 2 } },
      { text: 'No, just need a comfortable mattress', value: 'no', points: { core: 3, prime: 2, fir: 0 } },
    ],
  },
];

const products = {
  core: {
    name: 'Sleepada Core',
    slug: 'core',
    tagline: 'Essential Comfort, Exceptional Value',
    price: '$299-$499',
    description: 'Perfect for guest rooms, kids\' rooms, or budget-conscious buyers who still want quality sleep.',
    features: ['Medium-firm support', 'High-density memory foam', 'CertiPUR-US® certified', 'Great value'],
  },
  prime: {
    name: 'Sleepada Prime',
    slug: 'prime',
    tagline: 'Advanced Cooling & Support',
    price: '$499-$749',
    description: 'Ideal for hot sleepers and couples who want enhanced cooling with medium support.',
    features: ['Gel-infused cooling', 'Medium firmness', 'Pressure relief', 'Motion isolation'],
  },
  fir: {
    name: 'Sleepada FIR+',
    slug: 'fir-plus',
    tagline: 'Ultimate Recovery & Wellness',
    price: '$749-$1,099',
    description: 'Best for athletes, recovery-focused sleepers, and those seeking the ultimate sleep experience.',
    features: ['Far Infrared technology', 'Advanced cooling', 'Medium-plush comfort', 'Muscle recovery'],
  },
};

export default function FindYourMattressPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    const scores = { core: 0, prime: 0, fir: 0 };

    questions.forEach((question) => {
      const answer = answers[question.id];
      const selectedOption = question.options.find((opt) => opt.value === answer);
      if (selectedOption) {
        scores.core += selectedOption.points.core;
        scores.prime += selectedOption.points.prime;
        scores.fir += selectedOption.points.fir;
      }
    });

    // Find the product with highest score
    const maxScore = Math.max(scores.core, scores.prime, scores.fir);
    if (scores.fir === maxScore) return products.fir;
    if (scores.prime === maxScore) return products.prime;
    return products.core;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (showResults) {
    const recommended = calculateResults();

    return (
      <div className="min-h-screen bg-white">
        {/* Results Section */}
        <section className="py-16 px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)] mb-4">
                Your Perfect Match
              </h1>
              <p className="text-xl text-gray-600">
                Based on your answers, we recommend:
              </p>
            </div>

            {/* Recommended Product Card */}
            <div className="bg-[var(--color-cream)] p-8 md:p-12 rounded-lg shadow-lg mb-8">
              <h2 className="text-3xl font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)] mb-2">
                {recommended.name}
              </h2>
              <p className="text-xl text-[var(--color-copper)] mb-4">{recommended.tagline}</p>
              <p className="text-2xl font-bold text-[var(--color-hero-navy)] mb-4">
                {recommended.price}
              </p>
              <p className="text-lg text-gray-700 mb-6">
                {recommended.description}
              </p>

              <div className="mb-6">
                <h3 className="font-bold text-[var(--color-hero-navy)] mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {recommended.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[var(--color-copper)] mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/products/${recommended.slug}`}
                  className="bg-[var(--color-copper)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold text-center"
                >
                  View {recommended.name}
                </Link>
                <button
                  onClick={resetQuiz}
                  className="bg-transparent border-2 border-[var(--color-hero-navy)] text-[var(--color-hero-navy)] px-8 py-3 rounded-lg hover:bg-[var(--color-hero-navy)] hover:text-white transition-all font-semibold"
                >
                  Retake Quiz
                </button>
              </div>
            </div>

            {/* Other Options */}
            <div className="text-center">
              <h3 className="text-2xl font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)] mb-6">
                Want to Compare All Options?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.values(products).map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-[var(--color-copper)] transition-all"
                  >
                    <h4 className="font-bold text-[var(--color-hero-navy)] mb-2">
                      {product.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">{product.tagline}</p>
                    <p className="text-[var(--color-copper)] font-semibold">{product.price}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-hero-navy)] text-[var(--color-cream)] py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant-garamond)] mb-4">
            Find Your Perfect Mattress
          </h1>
          <p className="text-xl">
            Answer 5 quick questions to discover which Sleepada mattress is right for you
          </p>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-3xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[var(--color-copper)] h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-[var(--color-cream)] p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant-garamond)] text-[var(--color-hero-navy)] mb-8">
              {question.question}
            </h2>

            <div className="space-y-4">
              {question.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(question.id, option.value)}
                  className="w-full text-left p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-[var(--color-copper)] hover:bg-gray-50 transition-all"
                >
                  <span className="text-lg text-gray-700">{option.text}</span>
                </button>
              ))}
            </div>

            {/* Back Button */}
            {currentQuestion > 0 && (
              <div className="mt-8">
                <button
                  onClick={goBack}
                  className="text-[var(--color-copper)] hover:underline font-semibold"
                >
                  ← Back to Previous Question
                </button>
              </div>
            )}
          </div>

          {/* Skip Quiz Option */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Not sure? That's okay!</p>
            <Link
              href="/"
              className="text-[var(--color-copper)] hover:underline font-semibold"
            >
              Browse All Mattresses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
