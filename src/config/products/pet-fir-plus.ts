import { PetProduct } from '@/types/product';

export const petFirPlusProduct: PetProduct = {
  id: 'pet-fir-plus',
  name: 'Fir Plus Pet Bed',
  slug: 'pet-fir-plus',
  tagline: 'Ultimate comfort and wellness',
  description: 'Our Fir Plus Pet Bed is the ultimate in pet comfort. Features graphite-infused memory foam with far-infrared properties for enhanced wellness, premium orthopedic support, and a luxury removable cover. The best choice for pets who deserve exceptional care.',
  images: [
    '/images/petbed.png',
    '/images/petbed.png',
    '/images/petbed.png',
    '/images/petbed.png'
  ],
  prices: {
    small: 149,
    medium: 189,
    large: 239
  },
  features: [
    'Graphite-infused memory foam with FIR properties',
    'Superior orthopedic support',
    'Luxury ultra-plush removable cover',
    'Waterproof liner protection',
    'Temperature regulating',
    'Non-slip bottom',
    'Handcrafted in Tennessee'
  ],
  specs: {
    foamType: 'Graphite-infused memory foam with far-infrared properties',
    cover: 'Luxury ultra-plush, removable, machine-washable cover',
    firmness: 'Medium-Plush',
    motionIsolation: 'Superior',
    edgeSupport: 'Premium reinforced edges',
    madeIn: 'Tennessee, USA',
    certified: 'CertiPUR-US®'
  },
  reviews: [
    {
      text: 'Life-changing for our arthritic Labrador. He moves better now!',
      author: 'Jennifer W.',
      location: 'Knoxville, TN',
      rating: 5
    },
    {
      text: 'The best investment we\'ve made for our senior pets.',
      author: 'Robert H.',
      location: 'Nashville, TN',
      rating: 5
    },
    {
      text: 'Our dogs absolutely love this bed. Premium quality shows.',
      author: 'Amanda S.',
      location: 'Memphis, TN',
      rating: 5
    }
  ],
  layerDescription: 'Graphite-infused memory foam with far-infrared properties over premium support foam',
  warranty: 'Contact us at sleepadasales@gmail.com for warranty information.',
  bestFor: 'Senior pets, pets with arthritis, maximum comfort and wellness',
  isPet: true
};
