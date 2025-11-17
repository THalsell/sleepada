import { RVProductWithVariants } from '@/types/product';

export const rvPrimeProduct: RVProductWithVariants = {
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
  variants: {
    '6inch': {
      info: {
        id: '6inch',
        name: '6 inch',
        description: 'Compact 6" gel-infused design for tight RV spaces',
        layerDescription: '2" gel-infused memory foam comfort layer over 4" supportive base foam',
      },
      prices: {
        twin: 439,
        twinXL: 449,
        full: 489,
        fullXL: 499,
        customFull: 519,
        shortQueen: 539,
        queen: 589,
        rv28x75: 359,
        rv30x75: 369,
        rv30x80: 379,
        rv32x75: 379,
        rv34x75: 389,
        rv35x80: 399,
        rv36x75: 399,
        rv36x80: 409,
        rv38x72: 399,
        rv39x80: 449,
        rv42x72: 419,
        rv42x75: 429,
        rv42x80: 439,
        rv48x72: 459,
        rv48x73: 459,
        rv48x75: 469,
        rv48x80: 489,
        rv70x75: 599,
        rv70x80: 619,
        rvShortKing: 619,
        rvKing: 639,
        calKing: 669,
        standardKing: 659,
        customKing: 689
      }
    },
    '8inch': {
      info: {
        id: '8inch',
        name: '8 inch',
        description: 'Standard 8" gel-infused comfort - ideal cooling balance',
        layerDescription: '3" gel-infused memory foam comfort layer over 5" supportive base foam',
      },
      prices: {
        twin: 499,
        twinXL: 509,
        full: 549,
        fullXL: 559,
        customFull: 579,
        shortQueen: 599,
        queen: 649,
        rv28x75: 419,
        rv30x75: 429,
        rv30x80: 439,
        rv32x75: 439,
        rv34x75: 449,
        rv35x80: 459,
        rv36x75: 459,
        rv36x80: 469,
        rv38x72: 459,
        rv39x80: 509,
        rv42x72: 479,
        rv42x75: 489,
        rv42x80: 499,
        rv48x72: 519,
        rv48x73: 519,
        rv48x75: 529,
        rv48x80: 549,
        rv70x75: 659,
        rv70x80: 679,
        rvShortKing: 679,
        rvKing: 699,
        calKing: 729,
        standardKing: 719,
        customKing: 749
      }
    },
    '10inch': {
      info: {
        id: '10inch',
        name: '10 inch',
        description: 'Premium 10" gel-infused luxury - maximum cooling comfort',
        layerDescription: '4" gel-infused memory foam comfort layer over 6" supportive base foam',
      },
      prices: {
        twin: 559,
        twinXL: 569,
        full: 609,
        fullXL: 619,
        customFull: 639,
        shortQueen: 659,
        queen: 709,
        rv28x75: 479,
        rv30x75: 489,
        rv30x80: 499,
        rv32x75: 499,
        rv34x75: 509,
        rv35x80: 519,
        rv36x75: 519,
        rv36x80: 529,
        rv38x72: 519,
        rv39x80: 569,
        rv42x72: 539,
        rv42x75: 549,
        rv42x80: 559,
        rv48x72: 579,
        rv48x73: 579,
        rv48x75: 589,
        rv48x80: 609,
        rv70x75: 719,
        rv70x80: 739,
        rvShortKing: 739,
        rvKing: 759,
        calKing: 789,
        standardKing: 779,
        customKing: 809
      }
    }
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
