import { Product } from '@/types/product';

export const primeProduct: Product = {
  id: 'prime',
  name: 'Sleepada Prime',
  slug: 'prime',
  tagline: 'Gel-infused cooling technology',
  description: 'The Sleepada Prime elevates your sleep with gel-infused or copper-infused memory foam for enhanced cooling. Its medium feel and reinforced edge support make it ideal for couples and hot sleepers. Every Prime mattress is handcrafted in Tennessee using premium domestic and imported materials.',
  images: [
    '/images/sleepada-prime.png',
    '/images/sleepada-prime.png',
    '/images/sleepada-prime.png',
    '/images/sleepada-prime.png'
  ],
  prices: {
    twin: 499,
    twinXL: 519,
    full: 549,
    queen: 649,
    king: 749,
    calKing: 799
  },
  features: [
    'Medium Support',
    'Gel-Infused Cooling',
    'Very Good Motion Isolation',
    'Reinforced Edge Support',
    'CertiPUR-US® Certified'
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
      text: 'Stays cool all night. Game changer!',
      author: 'Michael S.',
      location: 'Chattanooga, TN',
      rating: 5
    },
    {
      text: 'My partner and I both love it.',
      author: 'Amanda R.',
      location: 'Franklin, TN',
      rating: 5
    },
    {
      text: 'Great support and cooling.',
      author: 'David P.',
      location: 'Murfreesboro, TN',
      rating: 5
    }
  ],
  layerDescription: 'Gel-infused comfort layer + transition foam + high-density support base',
  warranty: '3-20 years depending on model. Please contact us at sleepadasales@gmail.com for specific warranty information.',
  bestFor: 'Couples, hot sleepers, all sleep positions'
};
