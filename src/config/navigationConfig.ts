import { NavigationConfig } from '@/types';

export const navigationConfig: NavigationConfig = {
  logo: 'Sleepada™',
  primaryNav: [],
  secondaryNav: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'RV',
      href: '/rv',
    },
    {
      label: 'Condo',
      href: '/condo',
    },
    {
      label: 'Dorm',
      href: '/dorm',
    },
    {
      label: 'Accessories',
      href: '#',
      children: [
        {
          label: 'Pet Beds',
          href: '/pet',
        },
        {
          label: 'Pillows',
          href: '/pillows',
        },
        {
          label: 'Toppers',
          href: '/toppers',
        },
      ],
    },
  ],
};
