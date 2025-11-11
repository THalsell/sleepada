import { PetProduct } from '@/types/product';

export const petPrimeProduct: PetProduct = {
  id: 'pet-prime',
  name: 'Prime Pet Bed',
  slug: 'pet-prime',
  tagline: 'Premium comfort for your best friend',
  description: 'Our Prime Pet Bed combines premium memory foam layers for superior comfort and support. Features gel-infused foam for temperature regulation and a plush, removable cover. Perfect for pets who deserve the very best.',
  images: [
    '/images/petbed.png',
    '/images/petbed.png',
    '/images/petbed.png',
    '/images/petbed.png'
  ],
  prices: {
    small: 109,
    medium: 139,
    large: 179
  },
  features: [
    'Gel-infused memory foam for cooling',
    'Multi-layer foam construction',
    'Premium plush removable cover',
    'Waterproof liner protection',
    'Non-slip bottom',
    'Handcrafted in Tennessee'
  ],
  specs: {
    foamType: 'Gel-infused memory foam with high-density base',
    cover: 'Premium plush, removable, machine-washable cover',
    firmness: 'Medium',
    motionIsolation: 'Excellent',
    edgeSupport: 'Reinforced edges',
    madeIn: 'Tennessee, USA',
    certified: 'CertiPUR-US®'
  },
  reviews: [
    {
      text: 'The cooling gel foam is perfect for my Golden Retriever!',
      author: 'Mike T.',
      location: 'Chattanooga, TN',
      rating: 5
    },
    {
      text: 'Luxury for our pets. They fight over who gets this bed!',
      author: 'Lisa K.',
      location: 'Nashville, TN',
      rating: 5
    },
    {
      text: 'Amazing quality. Our senior dog sleeps so much better.',
      author: 'David P.',
      location: 'Memphis, TN',
      rating: 5
    }
  ],
  layerDescription: 'Gel-infused memory foam top layer with high-density support foam base',
  warranty: 'Contact us at sleepadasales@gmail.com for warranty information.',
  bestFor: 'Senior pets, pets with joint issues, temperature-sensitive pets',
  isPet: true
};
