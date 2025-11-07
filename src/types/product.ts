export interface ProductPrices {
  twin: number;
  full: number;
  queen: number;
  king: number;
  calKing: number;
}

export interface ProductSpecs {
  foamType: string;
  cover: string;
  firmness: string;
  motionIsolation: string;
  edgeSupport: string;
  madeIn: string;
  certified: string;
}

export interface ProductReview {
  text: string;
  author: string;
  location: string;
  rating: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  images: string[];
  prices: ProductPrices;
  features: string[];
  specs: ProductSpecs;
  reviews: ProductReview[];
  layerDescription: string;
  warranty: string;
  bestFor: string;
}

export type SizeOption = 'twin' | 'full' | 'queen' | 'king' | 'calKing';
