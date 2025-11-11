import { CondoProduct } from '@/types/product';

export const condoPrimeProduct: CondoProduct = {
  id: 'condo-prime',
  name: 'Sleepada Condo Prime',
  slug: 'condo-prime',
  tagline: 'Gel-infused cooling technology for condo living',
  description: 'The Sleepada Condo Prime elevates your urban lifestyle with gel-infused or copper-infused memory foam for enhanced cooling in compact living spaces. Its medium feel and reinforced edge support make it ideal for couples and hot sleepers in modern condos. Every Prime mattress is handcrafted in Tennessee using premium domestic and imported materials.',
  images: [
    '/images/condo.png',
    '/images/condo.png',
    '/images/condo.png',
    '/images/condo.png'
  ],
  prices: {
    twin: 499,
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
    'CertiPUR-US® Certified',
    'Perfect for Condo Living',
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
      text: 'Stays cool in my downtown condo. Perfect!',
      author: 'Michael S.',
      location: 'Chattanooga, TN',
      rating: 5
    },
    {
      text: 'Great for our modern loft. We both sleep great.',
      author: 'Amanda R.',
      location: 'Franklin, TN',
      rating: 5
    },
    {
      text: 'Excellent support and cooling for city living.',
      author: 'David P.',
      location: 'Murfreesboro, TN',
      rating: 5
    }
  ],
  layerDescription: 'Gel-infused comfort layer + transition foam + high-density support base',
  warranty: '3-20 years depending on model. Please contact us at sleepadasales@gmail.com for specific warranty information.',
  bestFor: 'Condo couples, hot sleepers, urban dwellers, all sleep positions',
  isCondo: true
};
