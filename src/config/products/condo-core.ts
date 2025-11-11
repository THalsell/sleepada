import { CondoProduct } from '@/types/product';

export const condoCoreProduct: CondoProduct = {
  id: 'condo-core',
  name: 'Sleepada Condo Core',
  slug: 'condo-core',
  tagline: 'Entry-level memory foam comfort for condo living',
  description: 'The Sleepada Condo Core delivers essential comfort perfectly sized for modern condo living. Featuring high-density memory foam and medium-firm support, it\'s designed to maximize comfort in compact urban spaces while providing quality sleep. Handcrafted in Tennessee with CertiPUR-US® certified foams.',
  images: [
    '/images/condo.png',
    '/images/condo.png',
    '/images/condo.png',
    '/images/condo.png'
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
    'High-Density Memory Foam',
    'Good Motion Isolation',
    'CertiPUR-US® Certified',
    'Perfect for Condo Living',
    'Compressed Box Shipping'
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
      text: 'Perfect for my downtown condo. Great quality and price!',
      author: 'Jennifer M.',
      location: 'Nashville, TN',
      rating: 5
    },
    {
      text: 'Easy delivery to my high-rise. Very comfortable!',
      author: 'Robert K.',
      location: 'Memphis, TN',
      rating: 5
    },
    {
      text: 'Best mattress for the price. Love it!',
      author: 'Lisa T.',
      location: 'Knoxville, TN',
      rating: 5
    }
  ],
  layerDescription: 'High-density memory foam comfort layer over supportive base foam',
  warranty: '3-20 years depending on model. Please contact us at sleepadasales@gmail.com for specific warranty information.',
  bestFor: 'Condo dwellers, urban living, all sleep positions',
  isCondo: true
};
