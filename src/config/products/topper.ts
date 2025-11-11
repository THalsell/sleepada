import { TopperProduct } from '@/types/product';

export const organicLatexTopper: TopperProduct = {
  id: 'organic-latex-topper',
  name: 'Certified Organic Latex Mattress Topper',
  slug: 'organic-latex-topper',
  tagline: 'Natural, sustainable comfort',
  description: '100% natural, GOLS certified organic latex cut to order. Eco-friendly, naturally hypoallergenic, and incredibly durable. Optional certified organic cotton zipper covers available. Handcrafted in our Tennessee facility.',
  images: [
    '/images/toppers.webp',
    '/images/toppers.webp',
    '/images/toppers.webp',
    '/images/toppers.webp'
  ],
  prices: {
    twin: 199,
    full: 249,
    queen: 299,
    king: 349,
    calKing: 379
  },
  features: [
    'GOLS certified organic latex',
    'Naturally hypoallergenic and antimicrobial',
    'Responsive, buoyant support',
    'Organic cotton cover options available',
    'Cut to order in Tennessee',
    'Eco-friendly and sustainable'
  ],
  specs: {
    foamType: 'GOLS certified organic latex',
    cover: 'Optional organic cotton zipper cover',
    firmness: 'Medium to Medium-Firm',
    motionIsolation: 'Good',
    edgeSupport: 'N/A',
    madeIn: 'Tennessee, USA',
    certified: 'GOLS Certified Organic'
  },
  reviews: [
    {
      text: 'Love knowing it\'s all natural and organic. Sleeps great!',
      author: 'Karen W.',
      location: 'Nashville, TN',
      rating: 5
    },
    {
      text: 'The latex is so responsive and comfortable. Worth every penny.',
      author: 'Michael R.',
      location: 'Memphis, TN',
      rating: 5
    },
    {
      text: 'Perfect for our eco-friendly bedroom. No chemical smell at all!',
      author: 'Amy T.',
      location: 'Knoxville, TN',
      rating: 5
    }
  ],
  layerDescription: '100% GOLS certified organic latex with optional certified organic cotton cover',
  warranty: 'Contact us at sleepadasales@gmail.com for warranty information.',
  bestFor: 'Eco-conscious sleepers, natural materials, responsive support',
  isTopper: true
};
