import { Product } from '@/types/product';

export const cooling8Product: Product = {
  id: 'cooling-8',
  name: 'Sleepada 8" Cooling',
  slug: 'cooling-8',
  tagline: 'Graphite-infused memory foam for a cooler night\'s sleep',
  description: 'Experience the relaxing comfort of our 8-inch memory foam mattress built in America using only CertiPUR-US® certified foam. Featuring a 6-inch high-density base layer for essential support topped with a 2-inch graphite-infused memory foam layer, this mattress delivers plush medium-firm comfort. Graphite-infused memory foam is appreciated for its help with temperature regulation, creating a cooler sleeping experience. Encased in a soft, stretch knit fabric cover that enhances breathability, the 8-inch profile makes it a versatile choice for a variety of bed frames.',
  images: [
    '/images/8_cooling.png',
    '/images/8_cooling.png',
    '/images/8_cooling.png',
    '/images/8_cooling.png'
  ],
  prices: {
    twin: 380,
    twinXL: 400,
    full: 440,
    fullXL: 450,
    queen: 490,
    king: 550,
    calKing: 560
  },
  features: [
    'Medium-Firm Comfort',
    'Graphite-Infused Cooling Layer',
    'CertiPUR-US® Certified Foam',
    'Made in America'
  ],
  specs: {
    foamType: '2" graphite-infused memory foam over 6" high-density base foam',
    cover: 'Soft stretch knit fabric',
    firmness: 'Medium-Firm',
    motionIsolation: 'Good',
    edgeSupport: 'Standard',
    madeIn: 'Tennessee, USA',
    certified: 'CertiPUR-US®'
  },
  reviews: [
    {
      text: 'Sleeps much cooler than my old mattress. Very happy with this purchase.',
      author: 'Amanda R.',
      location: 'Nashville, TN',
      rating: 5
    },
    {
      text: 'Great value for a quality American-made mattress.',
      author: 'David S.',
      location: 'Knoxville, TN',
      rating: 5
    },
    {
      text: 'The graphite foam really does help with temperature. Comfortable and supportive.',
      author: 'Karen M.',
      location: 'Chattanooga, TN',
      rating: 5
    }
  ],
  layerDescription: '2" graphite-infused memory foam comfort layer over 6" high-density support base',
  warranty: '3-20 years depending on model. Please contact us at sleepadasales@gmail.com for specific warranty information.',
  bestFor: 'Hot sleepers, all sleep positions, versatile bed frames'
};
