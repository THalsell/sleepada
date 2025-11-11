import { DormProduct } from '@/types/product';

export const dormCoreProduct: DormProduct = {
  id: 'dorm-core',
  name: 'Sleepada Dorm Core',
  slug: 'dorm-core',
  tagline: 'Entry-level memory foam comfort for dorm life',
  description: 'The Sleepada Dorm Core delivers essential comfort perfectly sized for college living. Featuring high-density memory foam and medium-firm support, it\'s designed to fit standard Twin XL dorm beds while providing quality sleep through the semester. Handcrafted in Tennessee with CertiPUR-US® certified foams.',
  images: [
    '/images/dorm.png',
    '/images/dorm.png',
    '/images/dorm.png',
    '/images/dorm.png'
  ],
  prices: {
    twinXL: 299,  // 39x80
    twin: 279     // 39x75
  },
  features: [
    'Medium-Firm Support',
    'High-Density Memory Foam',
    'Good Motion Isolation',
    'CertiPUR-US® Certified',
    'Perfect for Dorm Beds',
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
      text: 'Way better than the dorm mattress! Best purchase for college.',
      author: 'Emily S.',
      location: 'Nashville, TN',
      rating: 5
    },
    {
      text: 'Actually get good sleep now. My grades improved!',
      author: 'Jake M.',
      location: 'Knoxville, TN',
      rating: 5
    },
    {
      text: 'Perfect fit for my dorm bed. So comfortable!',
      author: 'Sarah K.',
      location: 'Memphis, TN',
      rating: 5
    }
  ],
  layerDescription: 'High-density memory foam comfort layer over supportive base foam, optimized for dorm beds',
  warranty: '3-20 years depending on model. Please contact us at sleepadasales@gmail.com for specific warranty information.',
  bestFor: 'College students, dorm rooms, all sleep positions',
  isDorm: true
};
