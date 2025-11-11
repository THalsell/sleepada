import { RVProduct } from '@/types/product';

export const rvFirPlusProduct: RVProduct = {
  id: 'rv-fir-plus',
  name: 'Sleepada RV FIR+',
  slug: 'rv-fir-plus',
  tagline: 'Premium with FIR infrared recovery tech for your RV',
  description: 'The Sleepada RV FIR+ is our flagship RV mattress, featuring revolutionary Far Infrared (FIR) technology that promotes muscle recovery and circulation while you travel. With advanced cooling, graphite-infused foam, and a medium-plush feel, it\'s designed for those who demand the ultimate in sleep performance on the road. Perfect for active travelers, health-conscious RVers, and anyone seeking premium comfort.',
  images: [
    '/images/RV-mattress.png',
    '/images/RV-mattress.png',
    '/images/RV-mattress.png',
    '/images/RV-mattress.png'
  ],
  prices: {
    twin: 749,           // 38x75
    twinXL: 759,         // 38x80
    full: 799,           // 54x75
    fullXL: 819,         // 54x80
    customFull: 849,
    shortQueen: 879,     // 60x75
    queen: 949,          // 66x80
    rv28x75: 619,        // 28x75
    rv30x75: 629,        // 30x75
    rv30x80: 639,        // 30x80
    rv32x75: 639,        // 32x75
    rv34x75: 659,        // 34x75
    rv35x80: 679,        // 35x80
    rv36x75: 679,        // 36x75
    rv36x80: 689,        // 36x80
    rv38x72: 679,        // 38x72
    rv39x80: 759,        // 39x80
    rv42x72: 699,        // 42x72
    rv42x75: 719,        // 42x75
    rv42x80: 739,        // 42x80
    rv48x72: 759,        // 48x72
    rv48x73: 759,        // 48x73
    rv48x75: 779,        // 48x75
    rv48x80: 799,        // 48x80
    rv70x75: 929,        // 70x75
    rv70x80: 949,        // 70x80
    rvShortKing: 949,    // 72x75
    rvKing: 979,         // 72x80
    calKing: 1029,       // 72x84
    standardKing: 999,   // 76x80
    customKing: 1049
  },
  features: [
    'Medium-Plush Comfort',
    'FIR Infrared Recovery Tech',
    'Advanced Cooling + Graphite',
    'Excellent Motion Isolation',
    'Enhanced Edge Support',
    'Premium FIR-Infused Cover',
    'CertiPUR-US® Certified',
    'Custom RV Sizing',
    'Optimized for Travel'
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
      text: 'Best sleep on the road! The FIR tech is incredible.',
      author: 'Sarah J.',
      location: 'Nashville, TN',
      rating: 5
    },
    {
      text: 'After long drives, this mattress helps me recover overnight!',
      author: 'James W.',
      location: 'Brentwood, TN',
      rating: 5
    },
    {
      text: 'Worth every penny for RV living. Amazing quality.',
      author: 'Emily C.',
      location: 'Knoxville, TN',
      rating: 5
    }
  ],
  layerDescription: 'FIR-infused cover + copper/graphite foam + gel memory foam + transition layer + high-density support base, custom-fitted for RV beds',
  warranty: '3-20 years depending on model. Please contact us at sleepadasales@gmail.com for specific warranty information.',
  bestFor: 'RV athletes, active travelers, health-conscious individuals, premium comfort seekers',
  isRV: true
};
