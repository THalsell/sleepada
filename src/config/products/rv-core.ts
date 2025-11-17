import { RVProductWithVariants } from '@/types/product';

export const rvCoreProduct: RVProductWithVariants = {
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
  variants: {
    '6inch': {
      info: {
        id: '6inch',
        name: '6 inch',
        description: 'Compact 6" design - perfect for tight RV spaces',
        layerDescription: '2" high-density memory foam comfort layer over 4" supportive base foam',
      },
      prices: {
        twin: 249,
        twinXL: 259,
        full: 299,
        fullXL: 309,
        customFull: 319,
        shortQueen: 329,
        queen: 349,
        rv28x75: 199,
        rv30x75: 209,
        rv30x80: 219,
        rv32x75: 219,
        rv34x75: 229,
        rv35x80: 239,
        rv36x75: 239,
        rv36x80: 249,
        rv38x72: 239,
        rv39x80: 259,
        rv42x72: 249,
        rv42x75: 259,
        rv42x80: 269,
        rv48x72: 279,
        rv48x73: 279,
        rv48x75: 289,
        rv48x80: 299,
        rv70x75: 369,
        rv70x80: 379,
        rvShortKing: 379,
        rvKing: 389,
        calKing: 409,
        standardKing: 399,
        customKing: 419
      }
    },
    '8inch': {
      info: {
        id: '8inch',
        name: '8 inch',
        description: 'Standard 8" comfort - ideal balance of support and portability',
        layerDescription: '3" high-density memory foam comfort layer over 5" supportive base foam',
      },
      prices: {
        twin: 299,
        twinXL: 309,
        full: 349,
        fullXL: 359,
        customFull: 369,
        shortQueen: 379,
        queen: 399,
        rv28x75: 249,
        rv30x75: 259,
        rv30x80: 269,
        rv32x75: 269,
        rv34x75: 279,
        rv35x80: 289,
        rv36x75: 289,
        rv36x80: 299,
        rv38x72: 289,
        rv39x80: 309,
        rv42x72: 299,
        rv42x75: 309,
        rv42x80: 319,
        rv48x72: 329,
        rv48x73: 329,
        rv48x75: 339,
        rv48x80: 349,
        rv70x75: 419,
        rv70x80: 429,
        rvShortKing: 429,
        rvKing: 439,
        calKing: 459,
        standardKing: 449,
        customKing: 469
      }
    },
    '10inch': {
      info: {
        id: '10inch',
        name: '10 inch',
        description: 'Premium 10" luxury - maximum comfort for extended trips',
        layerDescription: '4" high-density memory foam comfort layer over 6" supportive base foam',
      },
      prices: {
        twin: 349,
        twinXL: 359,
        full: 399,
        fullXL: 409,
        customFull: 419,
        shortQueen: 429,
        queen: 449,
        rv28x75: 299,
        rv30x75: 309,
        rv30x80: 319,
        rv32x75: 319,
        rv34x75: 329,
        rv35x80: 339,
        rv36x75: 339,
        rv36x80: 349,
        rv38x72: 339,
        rv39x80: 359,
        rv42x72: 349,
        rv42x75: 359,
        rv42x80: 369,
        rv48x72: 379,
        rv48x73: 379,
        rv48x75: 389,
        rv48x80: 399,
        rv70x75: 469,
        rv70x80: 479,
        rvShortKing: 479,
        rvKing: 489,
        calKing: 509,
        standardKing: 499,
        customKing: 519
      }
    }
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
