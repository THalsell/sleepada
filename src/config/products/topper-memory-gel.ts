import { TopperProductWithSizes } from '@/types/product';

export const topperMemoryGelProduct: TopperProductWithSizes = {
  id: 'topper-memory-gel',
  name: 'Gel Infused Memory Foam Topper',
  slug: 'topper-memory-gel',
  tagline: 'Superior cooling comfort',
  description: 'Premium gel-infused memory foam topper. Gel beads provide enhanced cooling and temperature regulation. Ideal for hot sleepers. Custom cut to any size.',
  images: [
    '/images/foam-topper.png',
    '/images/foam-topper.png',
    '/images/foam-topper.png',
    '/images/foam-topper.png'
  ],
  features: [
    'Gel-infused memory foam',
    'Enhanced cooling technology',
    'Temperature regulation',
    'Custom cut to any size',
    'CertiPUR-US® certified',
    'Handcrafted in Tennessee'
  ],
  specs: {
    foamType: 'Gel-infused memory foam',
    cover: 'N/A',
    firmness: 'Medium',
    motionIsolation: 'Excellent',
    edgeSupport: 'N/A',
    madeIn: 'Tennessee, USA',
    certified: 'CertiPUR-US®'
  },
  reviews: [],
  layerDescription: 'Gel-infused memory foam for maximum cooling',
  warranty: 'Contact us at sleepadasales@gmail.com for warranty information.',
  bestFor: 'Hot sleepers, maximum cooling',
  isTopper: true
};
