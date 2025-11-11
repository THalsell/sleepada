import { DormProduct } from '@/types/product';

export const dormFirPlusProduct: DormProduct = {
  id: 'dorm-fir-plus',
  name: 'Sleepada Dorm FIR+',
  slug: 'dorm-fir-plus',
  tagline: 'Premium with FIR infrared recovery tech for dorm life',
  description: 'The Sleepada Dorm FIR+ is our flagship dorm mattress, featuring revolutionary Far Infrared (FIR) technology that promotes muscle recovery and circulation while you sleep. With advanced cooling, graphite-infused foam, and a medium-plush feel, it\'s designed for students who demand the ultimate in sleep performance. Perfect for student athletes, health-conscious individuals, and anyone seeking premium comfort.',
  images: [
    '/images/dorm.png',
    '/images/dorm.png',
    '/images/dorm.png',
    '/images/dorm.png'
  ],
  prices: {
    twinXL: 749,  // 39x80
    twin: 729     // 39x75
  },
  features: [
    'Medium-Plush Comfort',
    'FIR Infrared Recovery Tech',
    'Advanced Cooling + Graphite',
    'Excellent Motion Isolation',
    'Enhanced Edge Support',
    'Premium FIR-Infused Cover',
    'CertiPUR-US® Certified',
    'Perfect for Dorm Beds',
    'Optimized for Student Life'
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
      text: 'As a student athlete, this mattress helps me recover overnight!',
      author: 'Jordan W.',
      location: 'Nashville, TN',
      rating: 5
    },
    {
      text: 'Worth every penny for dorm life. Amazing quality!',
      author: 'Taylor M.',
      location: 'Brentwood, TN',
      rating: 5
    },
    {
      text: 'Best sleep I\'ve had in college. The FIR tech is real!',
      author: 'Casey R.',
      location: 'Knoxville, TN',
      rating: 5
    }
  ],
  layerDescription: 'FIR-infused cover + copper/graphite foam + gel memory foam + transition layer + high-density support base, custom-fitted for dorm beds',
  warranty: '3-20 years depending on model. Please contact us at sleepadasales@gmail.com for specific warranty information.',
  bestFor: 'Student athletes, health-conscious students, premium comfort seekers',
  isDorm: true
};
