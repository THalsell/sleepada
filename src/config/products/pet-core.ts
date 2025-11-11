import { PetProduct } from '@/types/product';

export const petCoreProduct: PetProduct = {
  id: 'pet-core',
  name: 'Core Pet Bed',
  slug: 'pet-core',
  tagline: 'Comfort your pet deserves',
  description: 'Our Core Pet Bed offers premium support and comfort for your furry friend. Made with the same high-quality, CertiPUR-US® certified foam we use in our mattresses. Durable, supportive, and designed to keep its shape through years of use.',
  images: [
    '/images/petbed.png',
    '/images/petbed.png',
    '/images/petbed.png',
    '/images/petbed.png'
  ],
  prices: {
    small: 79,
    medium: 99,
    large: 129
  },
  features: [
    'CertiPUR-US® certified foam',
    'High-density foam support',
    'Removable, washable cover',
    'Non-slip bottom',
    'Handcrafted in Tennessee',
    'Built to last'
  ],
  specs: {
    foamType: 'High-density memory foam',
    cover: 'Removable, machine-washable cover',
    firmness: 'Medium-Firm',
    motionIsolation: 'Good',
    edgeSupport: 'Reinforced edges',
    madeIn: 'Tennessee, USA',
    certified: 'CertiPUR-US®'
  },
  reviews: [
    {
      text: 'My dog loves this bed! Worth every penny.',
      author: 'Sarah M.',
      location: 'Nashville, TN',
      rating: 5
    },
    {
      text: 'Great quality. Holds up well to my Lab.',
      author: 'John D.',
      location: 'Memphis, TN',
      rating: 5
    },
    {
      text: 'Best pet bed we\'ve ever purchased!',
      author: 'Emily R.',
      location: 'Knoxville, TN',
      rating: 5
    }
  ],
  layerDescription: 'High-density memory foam core with removable washable cover',
  warranty: 'Contact us at sleepadasales@gmail.com for warranty information.',
  bestFor: 'All dogs and cats, everyday comfort, durable support',
  isPet: true
};
