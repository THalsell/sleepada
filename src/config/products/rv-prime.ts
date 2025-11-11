import { RVProduct } from '@/types/product';

export const rvPrimeProduct: RVProduct = {
  id: 'rv-prime',
  name: 'Sleepada RV Prime',
  slug: 'rv-prime',
  tagline: 'Gel-infused cooling technology for your RV',
  description: 'The Sleepada RV Prime elevates your travel experience with gel-infused or copper-infused memory foam for enhanced cooling on the road. Its medium feel and reinforced edge support make it ideal for couples and hot sleepers in RV environments. Every Prime mattress is handcrafted in Tennessee using premium domestic and imported materials.',
  images: [
    '/images/RV-mattress.png',
    '/images/RV-mattress.png',
    '/images/RV-mattress.png',
    '/images/RV-mattress.png'
  ],
  prices: {
    twin: 499,           // 38x75
    twinXL: 509,         // 38x80
    full: 549,           // 54x75
    fullXL: 559,         // 54x80
    customFull: 579,
    shortQueen: 599,     // 60x75
    queen: 649,          // 66x80
    rv28x75: 419,        // 28x75
    rv30x75: 429,        // 30x75
    rv30x80: 439,        // 30x80
    rv32x75: 439,        // 32x75
    rv34x75: 449,        // 34x75
    rv35x80: 459,        // 35x80
    rv36x75: 459,        // 36x75
    rv36x80: 469,        // 36x80
    rv38x72: 459,        // 38x72
    rv39x80: 509,        // 39x80
    rv42x72: 479,        // 42x72
    rv42x75: 489,        // 42x75
    rv42x80: 499,        // 42x80
    rv48x72: 519,        // 48x72
    rv48x73: 519,        // 48x73
    rv48x75: 529,        // 48x75
    rv48x80: 549,        // 48x80
    rv70x75: 659,        // 70x75
    rv70x80: 679,        // 70x80
    rvShortKing: 679,    // 72x75
    rvKing: 699,         // 72x80
    calKing: 729,        // 72x84
    standardKing: 719,   // 76x80
    customKing: 749
  },
  features: [
    'Medium Support',
    'Gel-Infused Cooling',
    'Very Good Motion Isolation',
    'Reinforced Edge Support',
    'CertiPUR-US® Certified',
    'Custom RV Sizing',
    'Temperature Regulation'
  ],
  specs: {
    foamType: 'Gel-infused or copper-infused memory foam',
    cover: 'Breathable knit blend',
    firmness: 'Medium',
    motionIsolation: 'Very Good',
    edgeSupport: 'Reinforced',
    madeIn: 'Tennessee, USA',
    certified: 'CertiPUR-US®'
  },
  reviews: [
    {
      text: 'Stays cool even in summer camping. Love it!',
      author: 'Michael S.',
      location: 'Chattanooga, TN',
      rating: 5
    },
    {
      text: 'Perfect for our RV. My partner and I both sleep great.',
      author: 'Amanda R.',
      location: 'Franklin, TN',
      rating: 5
    },
    {
      text: 'Great support and cooling on the road.',
      author: 'David P.',
      location: 'Murfreesboro, TN',
      rating: 5
    }
  ],
  layerDescription: 'Gel-infused comfort layer + transition foam + high-density support base, sized for RV beds',
  warranty: '3-20 years depending on model. Please contact us at sleepadasales@gmail.com for specific warranty information.',
  bestFor: 'RV couples, hot sleepers, all sleep positions',
  isRV: true
};
