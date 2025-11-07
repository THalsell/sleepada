import { Product } from '@/types/product';

export const firPlusProduct: Product = {
  id: 'fir-plus',
  name: 'Sleepada FIR+',
  slug: 'fir-plus',
  tagline: 'Premium with FIR infrared recovery tech',
  description: 'The Sleepada FIR+ is our flagship mattress, featuring revolutionary Far Infrared (FIR) technology that promotes muscle recovery and circulation while you sleep. With advanced cooling, graphite-infused foam, and a medium-plush feel, it\'s designed for those who demand the ultimate in sleep performance. Perfect for athletes, health-conscious individuals, and anyone seeking premium comfort.',
  images: [
    '/images/sleepada-FIR+.png',
    '/images/sleepada-FIR+.png',
    '/images/sleepada-FIR+.png',
    '/images/sleepada-FIR+.png'
  ],
  prices: {
    twin: 749,
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
    'CertiPUR-US® Certified'
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
      text: 'Best sleep I\'ve had in years!',
      author: 'Sarah J.',
      location: 'Nashville, TN',
      rating: 5
    },
    {
      text: 'The FIR technology really works!',
      author: 'James W.',
      location: 'Brentwood, TN',
      rating: 5
    },
    {
      text: 'Worth every penny. Incredible quality.',
      author: 'Emily C.',
      location: 'Knoxville, TN',
      rating: 5
    }
  ],
  layerDescription: 'FIR-infused cover + copper/graphite foam + gel memory foam + transition layer + high-density support base',
  warranty: '3-20 years depending on model. Please contact us at sleepadasales@gmail.com for specific warranty information.',
  bestFor: 'Athletes, health-conscious individuals, premium comfort seekers'
};
