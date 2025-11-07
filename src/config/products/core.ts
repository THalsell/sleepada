import { Product } from '@/types/product';

export const coreProduct: Product = {
  id: 'core',
  name: 'Sleepada Core',
  slug: 'core',
  tagline: 'Entry-level memory foam comfort',
  description: 'The Sleepada Core delivers essential comfort at an exceptional value. Featuring high-density memory foam and medium-firm support, it\'s perfect for guest rooms, kids\' rooms, or anyone seeking quality sleep without the premium price tag. Handcrafted in Tennessee with CertiPUR-US® certified foams.',
  images: [
    '/images/sleepada-core.png',
    '/images/sleepada-core.png',
    '/images/sleepada-core.png',
    '/images/sleepada-core.png'
  ],
  prices: {
    twin: 299,
    full: 349,
    queen: 399,
    king: 449,
    calKing: 499
  },
  features: [
    'Medium-Firm Support',
    'Basic Memory Foam',
    'Good Motion Isolation',
    'CertiPUR-US® Certified'
  ],
  specs: {
    foamType: 'High-density memory foam',
    cover: 'Polyester knit',
    firmness: 'Medium-Firm',
    motionIsolation: 'Good',
    edgeSupport: 'Standard',
    madeIn: 'Tennessee, USA',
    certified: 'CertiPUR-US®'
  },
  reviews: [
    {
      text: 'Perfect for my guest room! Great value.',
      author: 'Jennifer M.',
      location: 'Nashville, TN',
      rating: 5
    },
    {
      text: 'Comfortable and supportive. Very happy!',
      author: 'Robert K.',
      location: 'Memphis, TN',
      rating: 5
    },
    {
      text: 'Best budget mattress I\'ve found.',
      author: 'Lisa T.',
      location: 'Knoxville, TN',
      rating: 5
    }
  ],
  layerDescription: 'High-density memory foam comfort layer over supportive base foam',
  warranty: '3-20 years depending on model. Please contact us at sleepadasales@gmail.com for specific warranty information.',
  bestFor: 'All sleep positions, guest rooms, kids\' rooms'
};
