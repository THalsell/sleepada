import { PillowProduct } from '@/types/product';

export const shreddedMemoryFoamPillow: PillowProduct = {
  id: 'shredded-memory-foam-pillow',
  name: 'Shredded Memory Foam Pillow',
  slug: 'shredded-memory-foam-pillow',
  tagline: 'Adjustable comfort for every sleep position',
  description: 'Our shredded memory foam pillow offers the perfect balance of support and softness, allowing you to customize the loft by adding or removing fill. Manufactured in-house in Tennessee with premium materials.',
  images: [
    '/images/pillow.jpg',
    '/images/pillow.jpg',
    '/images/pillow.jpg',
    '/images/pillow.jpg'
  ],
  prices: {
    standard: 49,   // 20x26
    queen: 59,      // 20x30
    king: 69        // 20x36
  },
  features: [
    'Adjustable loft for personalized comfort',
    'Excellent breathability and cooling',
    'Conforms to head and neck for pressure relief',
    'Great for all sleep positions',
    'Manufactured in Tennessee, USA',
    'Premium shredded memory foam'
  ],
  specs: {
    foamType: 'Shredded memory foam',
    cover: 'Breathable knit cover',
    firmness: 'Adjustable',
    motionIsolation: 'Good',
    edgeSupport: 'N/A',
    madeIn: 'Tennessee, USA',
    certified: 'Premium materials'
  },
  reviews: [
    {
      text: 'Best pillow I\'ve ever owned! The adjustable fill is a game changer.',
      author: 'Sarah M.',
      location: 'Nashville, TN',
      rating: 5
    },
    {
      text: 'Finally found a pillow that works for side sleeping. Love it!',
      author: 'John D.',
      location: 'Memphis, TN',
      rating: 5
    },
    {
      text: 'Great quality and very comfortable. Highly recommend!',
      author: 'Lisa K.',
      location: 'Knoxville, TN',
      rating: 5
    }
  ],
  layerDescription: 'Premium shredded memory foam with breathable knit cover for optimal comfort and adjustability',
  warranty: 'Contact us at sleepadasales@gmail.com for warranty information.',
  bestFor: 'All sleep positions, adjustable comfort seekers',
  isPillow: true
};
