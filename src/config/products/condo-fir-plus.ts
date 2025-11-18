import { CondoProduct } from '@/types/product';

export const condoFirPlusProduct: CondoProduct = {
  id: 'condo-fir-plus',
  name: 'Sleepada Condo FIR+',
  slug: 'condo-fir-plus',
  tagline: 'Premium with FIR infrared recovery tech for condo living',
  description: 'The Sleepada Condo FIR+ is our flagship mattress for modern urban living, featuring revolutionary Far Infrared (FIR) technology that promotes muscle recovery and circulation while you sleep. With advanced cooling, graphite-infused foam, and a medium-plush feel, it\'s designed for discerning condo dwellers who demand the ultimate in sleep performance. Perfect for professionals, health-conscious individuals, and anyone seeking premium comfort in their urban sanctuary.',
  images: [
    '/images/condo.png',
    '/images/condo.png',
    '/images/condo.png',
    '/images/condo.png'
  ],
  prices: {
    twin: 749,
    twinXL: 769,
    full: 849,
    queen: 949,
    king: 1049,
    calKing: 1099
  },
  features: [
    'Medium-Plush Comfort',
    'FIR Infrared Recovery Tech',
    'Advanced Cooling + Graphite',
    'Excellent Motion Isolation',
    'Enhanced Edge Support',
    'Premium FIR-Infused Cover',
    'CertiPUR-US® Certified',
    'Perfect for Condo Living',
    'Optimized for Urban Lifestyle'
  ],
  specs: {
    foamType: 'Copper/graphite + gel memory foam',
    cover: 'FIR-infused premium knit',
    firmness: 'Medium-Plush',
    motionIsolation: 'Excellent',
    edgeSupport: 'Enhanced',
    madeIn: 'Tennessee, USA',
    certified: 'CertiPUR-US®'
  },
  reviews: [
    {
      text: 'Best sleep in my high-rise! The FIR tech is amazing.',
      author: 'Sarah J.',
      location: 'Nashville, TN',
      rating: 5
    },
    {
      text: 'After long work days, this helps me recover overnight!',
      author: 'James W.',
      location: 'Brentwood, TN',
      rating: 5
    },
    {
      text: 'Worth every penny for condo living. Incredible quality.',
      author: 'Emily C.',
      location: 'Knoxville, TN',
      rating: 5
    }
  ],
  layerDescription: 'FIR-infused cover + copper/graphite foam + gel memory foam + transition layer + high-density support base',
  warranty: '3-20 years depending on model. Please contact us at sleepadasales@gmail.com for specific warranty information.',
  bestFor: 'Urban professionals, health-conscious individuals, premium comfort seekers',
  isCondo: true
};
