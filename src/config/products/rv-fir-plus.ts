import { RVProductWithVariants } from '@/types/product';

export const rvFirPlusProduct: RVProductWithVariants = {
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
  variants: {
    '6inch': {
      info: {
        id: '6inch',
        name: '6 inch',
        description: 'Compact 6" FIR technology for tight RV spaces',
        layerDescription: 'FIR-infused cover + 2" copper/graphite foam layer over 4" supportive base',
      },
      prices: {
        twin: 689,
        twinXL: 699,
        full: 739,
        fullXL: 759,
        customFull: 789,
        shortQueen: 819,
        queen: 889,
        rv28x75: 559,
        rv30x75: 569,
        rv30x80: 579,
        rv32x75: 579,
        rv34x75: 599,
        rv35x80: 619,
        rv36x75: 619,
        rv36x80: 629,
        rv38x72: 619,
        rv39x80: 699,
        rv42x72: 639,
        rv42x75: 659,
        rv42x80: 679,
        rv48x72: 699,
        rv48x73: 699,
        rv48x75: 719,
        rv48x80: 739,
        rv70x75: 869,
        rv70x80: 889,
        rvShortKing: 889,
        rvKing: 919,
        calKing: 969,
        standardKing: 939,
        customKing: 989
      }
    },
    '8inch': {
      info: {
        id: '8inch',
        name: '8 inch',
        description: 'Standard 8" FIR technology - ideal recovery balance',
        layerDescription: 'FIR-infused cover + 3" copper/graphite foam + gel memory foam over 5" supportive base',
      },
      prices: {
        twin: 749,
        twinXL: 759,
        full: 799,
        fullXL: 819,
        customFull: 849,
        shortQueen: 879,
        queen: 949,
        rv28x75: 619,
        rv30x75: 629,
        rv30x80: 639,
        rv32x75: 639,
        rv34x75: 659,
        rv35x80: 679,
        rv36x75: 679,
        rv36x80: 689,
        rv38x72: 679,
        rv39x80: 759,
        rv42x72: 699,
        rv42x75: 719,
        rv42x80: 739,
        rv48x72: 759,
        rv48x73: 759,
        rv48x75: 779,
        rv48x80: 799,
        rv70x75: 929,
        rv70x80: 949,
        rvShortKing: 949,
        rvKing: 979,
        calKing: 1029,
        standardKing: 999,
        customKing: 1049
      }
    },
    '10inch': {
      info: {
        id: '10inch',
        name: '10 inch',
        description: 'Premium 10" FIR technology - maximum recovery and comfort',
        layerDescription: 'FIR-infused cover + 4" copper/graphite foam + gel memory foam over 6" supportive base',
      },
      prices: {
        twin: 809,
        twinXL: 819,
        full: 859,
        fullXL: 879,
        customFull: 909,
        shortQueen: 939,
        queen: 1009,
        rv28x75: 679,
        rv30x75: 689,
        rv30x80: 699,
        rv32x75: 699,
        rv34x75: 719,
        rv35x80: 739,
        rv36x75: 739,
        rv36x80: 749,
        rv38x72: 739,
        rv39x80: 819,
        rv42x72: 759,
        rv42x75: 779,
        rv42x80: 799,
        rv48x72: 819,
        rv48x73: 819,
        rv48x75: 839,
        rv48x80: 859,
        rv70x75: 989,
        rv70x80: 1009,
        rvShortKing: 1009,
        rvKing: 1039,
        calKing: 1089,
        standardKing: 1059,
        customKing: 1109
      }
    }
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
