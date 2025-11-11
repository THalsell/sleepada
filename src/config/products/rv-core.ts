import { RVProduct } from '@/types/product';

export const rvCoreProduct: RVProduct = {
  id: 'rv-core',
  name: 'Sleepada RV Core',
  slug: 'rv-core',
  tagline: 'Entry-level memory foam comfort for your RV',
  description: 'The Sleepada RV Core delivers essential comfort perfectly sized for RV living. Featuring high-density memory foam and medium-firm support, it\'s designed to fit your RV\'s unique dimensions while providing quality sleep on the road. Handcrafted in Tennessee with CertiPUR-US® certified foams.',
  images: [
    '/images/RV-mattress.png',
    '/images/RV-mattress.png',
    '/images/RV-mattress.png',
    '/images/RV-mattress.png'
  ],
  prices: {
    twin: 299,           // 38x75
    twinXL: 309,         // 38x80
    full: 349,           // 54x75
    fullXL: 359,         // 54x80
    customFull: 369,
    shortQueen: 379,     // 60x75
    queen: 399,          // 66x80
    rv28x75: 249,        // 28x75
    rv30x75: 259,        // 30x75
    rv30x80: 269,        // 30x80
    rv32x75: 269,        // 32x75
    rv34x75: 279,        // 34x75
    rv35x80: 289,        // 35x80
    rv36x75: 289,        // 36x75
    rv36x80: 299,        // 36x80
    rv38x72: 289,        // 38x72
    rv39x80: 309,        // 39x80
    rv42x72: 299,        // 42x72
    rv42x75: 309,        // 42x75
    rv42x80: 319,        // 42x80
    rv48x72: 329,        // 48x72
    rv48x73: 329,        // 48x73
    rv48x75: 339,        // 48x75
    rv48x80: 349,        // 48x80
    rv70x75: 419,        // 70x75
    rv70x80: 429,        // 70x80
    rvShortKing: 429,    // 72x75
    rvKing: 439,         // 72x80
    calKing: 459,        // 72x84
    standardKing: 449,   // 76x80
    customKing: 469
  },
  features: [
    'Medium-Firm Support',
    'Basic Memory Foam',
    'Good Motion Isolation',
    'CertiPUR-US® Certified',
    'Custom RV Sizing',
    'Compact for Easy Installation'
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
      text: 'Perfect fit for our RV! Great value and comfortable.',
      author: 'Jennifer M.',
      location: 'Nashville, TN',
      rating: 5
    },
    {
      text: 'Sleeps great on the road. Very happy with this purchase!',
      author: 'Robert K.',
      location: 'Memphis, TN',
      rating: 5
    },
    {
      text: 'Best RV mattress for the price. Highly recommend!',
      author: 'Lisa T.',
      location: 'Knoxville, TN',
      rating: 5
    }
  ],
  layerDescription: 'High-density memory foam comfort layer over supportive base foam, optimized for RV dimensions',
  warranty: '3-20 years depending on model. Please contact us at sleepadasales@gmail.com for specific warranty information.',
  bestFor: 'RV travelers, campers, all sleep positions',
  isRV: true
};
