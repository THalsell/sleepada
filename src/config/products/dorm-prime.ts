import { DormProduct } from '@/types/product';

export const dormPrimeProduct: DormProduct = {
  id: 'dorm-prime',
  name: 'Sleepada Dorm Prime',
  slug: 'dorm-prime',
  tagline: 'Gel-infused cooling technology for dorm life',
  description: 'The Sleepada Dorm Prime elevates your college sleep experience with gel-infused or copper-infused memory foam for enhanced cooling in dorm environments. Its medium feel and reinforced edge support make it ideal for students who sleep hot or need extra support. Every Prime mattress is handcrafted in Tennessee using premium domestic and imported materials.',
  images: [
    '/images/dorm.png',
    '/images/dorm.png',
    '/images/dorm.png',
    '/images/dorm.png'
  ],
  prices: {
    twinXL: 499,  // 39x80
    twin: 479     // 39x75
  },
  features: [
    'Medium Support',
    'Gel-Infused Cooling',
    'Very Good Motion Isolation',
    'Reinforced Edge Support',
    'CertiPUR-US® Certified',
    'Perfect for Dorm Beds',
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
      text: 'Stays cool even during summer sessions. Love it!',
      author: 'Alex T.',
      location: 'Chattanooga, TN',
      rating: 5
    },
    {
      text: 'Best investment for my dorm room. Sleep is amazing!',
      author: 'Rachel P.',
      location: 'Franklin, TN',
      rating: 5
    },
    {
      text: 'Great support and cooling. Perfect for college.',
      author: 'Marcus L.',
      location: 'Murfreesboro, TN',
      rating: 5
    }
  ],
  layerDescription: 'Gel-infused comfort layer + transition foam + high-density support base, sized for dorm beds',
  warranty: '3-20 years depending on model. Please contact us at sleepadasales@gmail.com for specific warranty information.',
  bestFor: 'College students, hot sleepers, dorm rooms, all sleep positions',
  isDorm: true
};
