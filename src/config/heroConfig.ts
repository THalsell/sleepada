import { HeroConfig } from '@/types';

export const heroConfig: HeroConfig = {
  heading: 'Perfectly Comfortable',
  subheading: 'Hand Crafted in the USA',
  buttons: [
    {
      label: 'Shop Mattresses',
      href: '/#products',
      variant: 'primary',
    },
    {
      label: 'Find Your Mattress',
      href: '/find-your-mattress',
      variant: 'secondary',
    },
  ],
  image: {
    src: '/images/hero-image.png',
    alt: 'Sleepada bedroom with comfortable mattress',
  },
};
