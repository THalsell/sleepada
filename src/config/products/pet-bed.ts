import { PetProductWithVariants } from '@/types/product';

export const petBedProduct: PetProductWithVariants = {
  id: 'pet-bed',
  name: 'Sleepada Pet Bed',
  slug: 'pet-bed',
  tagline: 'Premium comfort your pet deserves',
  description: 'Our pet beds are made with the same high-quality, CertiPUR-US® certified foam we use in our mattresses. Choose between our Basic everyday comfort or Infrared wellness technology, available in 3" or 5" profiles. Optional name embroidery makes it uniquely theirs.',
  images: [
    '/images/petbed.png',
    '/images/petbed.png',
    '/images/petbed.png',
    '/images/petbed.png'
  ],
  variants: {
    basic: {
      info: {
        id: 'basic',
        name: 'Basic Comfort',
        description: 'High-quality memory foam comfort for everyday use',
        features: [
          'CertiPUR-US® certified foam',
          'High-density foam support',
          'Removable, washable cover',
          'Non-slip bottom',
          'Handcrafted in Tennessee',
          'Built to last'
        ]
      },
      thicknesses: {
        '3inch': {
          info: {
            id: '3inch',
            name: '3 inch',
            description: 'Compact 3" design - perfect for smaller spaces and lighter pets'
          },
          prices: {
            medium: 89,      // 30" x 24"
            large: 119,      // 40" x 30"
            extraLarge: 149  // 48" x 36"
          }
        },
        '5inch': {
          info: {
            id: '5inch',
            name: '5 inch',
            description: 'Premium 5" thickness - extra cushioning for maximum comfort'
          },
          prices: {
            medium: 119,     // 30" x 24"
            large: 159,      // 40" x 30"
            extraLarge: 199  // 48" x 36"
          }
        }
      }
    },
    infrared: {
      info: {
        id: 'infrared',
        name: 'Infrared Wellness',
        description: 'FIR (Far Infrared) technology for enhanced recovery and comfort',
        features: [
          'FIR Infrared Recovery Technology',
          'CertiPUR-US® certified foam',
          'High-density foam support',
          'Premium FIR-infused cover',
          'Removable, washable cover',
          'Non-slip bottom',
          'Enhanced circulation support',
          'Handcrafted in Tennessee'
        ]
      },
      thicknesses: {
        '3inch': {
          info: {
            id: '3inch',
            name: '3 inch',
            description: 'Compact 3" with infrared technology'
          },
          prices: {
            medium: 129,     // 30" x 24"
            large: 169,      // 40" x 30"
            extraLarge: 209  // 48" x 36"
          }
        },
        '5inch': {
          info: {
            id: '5inch',
            name: '5 inch',
            description: 'Premium 5" with infrared technology - ultimate wellness and comfort'
          },
          prices: {
            medium: 169,     // 30" x 24"
            large: 219,      // 40" x 30"
            extraLarge: 269  // 48" x 36"
          }
        }
      }
    }
  },
  embroideryPrice: 25, // Add $25 for personalized name embroidery
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
      text: 'My dog loves this bed! The embroidered name is such a nice touch.',
      author: 'Sarah M.',
      location: 'Nashville, TN',
      rating: 5
    },
    {
      text: 'Great quality. The infrared version really seems to help my older Lab\'s joints.',
      author: 'John D.',
      location: 'Memphis, TN',
      rating: 5
    },
    {
      text: 'Best pet bed we\'ve ever purchased! Worth every penny.',
      author: 'Emily R.',
      location: 'Knoxville, TN',
      rating: 5
    }
  ],
  warranty: 'Contact us at sleepadasales@gmail.com for warranty information.',
  bestFor: 'All dogs and cats, everyday comfort, durable support',
  isPet: true
};
