export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface NavigationConfig {
  logo: string;
  primaryNav: NavLink[];
  secondaryNav: NavLink[];
}

export interface Button {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface HeroConfig {
  heading: string;
  subheading: string;
  buttons: Button[];
  image: {
    src: string;
    alt: string;
  };
}

export interface Feature {
  icon: string;
  title: string;
}

export interface WhySleepada {
  heading: string;
  features: Feature[];
}

export interface Product {
  name: string;
  description: string;
  image: string;
  href: string;
}

export interface ProductShowcase {
  products: Product[];
}

export interface ReviewSection {
  rating: number;
  quote: string;
  buttonLabel: string;
  buttonHref: string;
}

export interface CategoryLink {
  label: string;
  icon: string;
  href: string;
}
