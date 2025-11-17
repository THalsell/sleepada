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

// RV-specific sizes
export type RVSizeOption =
  | 'twin'
  | 'twinXL'
  | 'full'
  | 'fullXL'
  | 'customFull'
  | 'shortQueen'
  | 'queen'
  | 'rv28x75'
  | 'rv30x75'
  | 'rv30x80'
  | 'rv32x75'
  | 'rv34x75'
  | 'rv35x80'
  | 'rv36x75'
  | 'rv36x80'
  | 'rv38x72'
  | 'rv39x80'
  | 'rv42x72'
  | 'rv42x75'
  | 'rv42x80'
  | 'rv48x72'
  | 'rv48x73'
  | 'rv48x75'
  | 'rv48x80'
  | 'rv70x75'
  | 'rv70x80'
  | 'rvShortKing'
  | 'rvKing'
  | 'calKing'
  | 'standardKing'
  | 'customKing';

export interface RVProductPrices {
  twin: number;
  twinXL: number;
  full: number;
  fullXL: number;
  customFull: number;
  shortQueen: number;
  queen: number;
  rv28x75: number;
  rv30x75: number;
  rv30x80: number;
  rv32x75: number;
  rv34x75: number;
  rv35x80: number;
  rv36x75: number;
  rv36x80: number;
  rv38x72: number;
  rv39x80: number;
  rv42x72: number;
  rv42x75: number;
  rv42x80: number;
  rv48x72: number;
  rv48x73: number;
  rv48x75: number;
  rv48x80: number;
  rv70x75: number;
  rv70x80: number;
  rvShortKing: number;
  rvKing: number;
  calKing: number;
  standardKing: number;
  customKing: number;
}

// Thickness/style variant for products
export interface ThicknessVariant {
  id: string;
  name: string;
  description: string;
  specs?: Partial<ProductSpecs>; // Optional specs that override base specs
  layerDescription?: string; // Optional layer description override
}

export interface RVProductWithVariants {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  images: string[];
  // Prices organized by thickness variant
  variants: {
    [variantId: string]: {
      info: ThicknessVariant;
      prices: RVProductPrices;
    };
  };
  features: string[];
  specs: ProductSpecs;
  reviews: ProductReview[];
  layerDescription: string;
  warranty: string;
  bestFor: string;
  isRV: true;
}

export interface RVProduct {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  images: string[];
  prices: RVProductPrices;
  features: string[];
  specs: ProductSpecs;
  reviews: ProductReview[];
  layerDescription: string;
  warranty: string;
  bestFor: string;
  isRV: true;
}

// Dorm-specific sizes
export type DormSizeOption = 'twinXL' | 'twin';

export interface DormProductPrices {
  twinXL: number;
  twin: number;
}

export interface DormProduct {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  images: string[];
  prices: DormProductPrices;
  features: string[];
  specs: ProductSpecs;
  reviews: ProductReview[];
  layerDescription: string;
  warranty: string;
  bestFor: string;
  isDorm: true;
}

// Condo products use standard sizes
export interface CondoProduct {
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
  isCondo: true;
}

// Pillow-specific sizes
export type PillowSizeOption = 'standard' | 'queen' | 'king';

export interface PillowProductPrices {
  standard: number;
  queen: number;
  king: number;
}

export interface PillowProduct {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  images: string[];
  prices: PillowProductPrices;
  features: string[];
  specs: ProductSpecs;
  reviews: ProductReview[];
  layerDescription: string;
  warranty: string;
  bestFor: string;
  isPillow: true;
}

// Topper products use standard sizes
export interface TopperProduct {
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
  isTopper: true;
}

// Pet bed specific sizes
export type PetSizeOption = 'medium' | 'large' | 'extraLarge';
export type PetThicknessOption = '3inch' | '5inch';
export type PetStyleOption = 'basic' | 'infrared';

export interface PetProductPrices {
  medium: number;
  large: number;
  extraLarge: number;
}

export interface PetProduct {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  images: string[];
  prices: PetProductPrices;
  features: string[];
  specs: ProductSpecs;
  reviews: ProductReview[];
  layerDescription: string;
  warranty: string;
  bestFor: string;
  isPet: true;
}

// Pet bed with style and thickness variants
export interface PetBedVariant {
  id: string;
  name: string;
  description: string;
  features?: string[];
}

export interface PetProductWithVariants {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  images: string[];
  // Organized by style, then thickness, then size
  variants: {
    [style in PetStyleOption]: {
      info: PetBedVariant;
      thicknesses: {
        [thickness in PetThicknessOption]: {
          info: PetBedVariant;
          prices: PetProductPrices;
        };
      };
    };
  };
  embroideryPrice: number; // Additional cost for embroidery
  specs: ProductSpecs;
  reviews: ProductReview[];
  warranty: string;
  bestFor: string;
  isPet: true;
}

// Topper uses RV sizes for custom sizing
export type TopperSizeOption = RVSizeOption;

export interface TopperProductWithSizes {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  images: string[];
  features: string[];
  specs: ProductSpecs;
  reviews: ProductReview[];
  layerDescription: string;
  warranty: string;
  bestFor: string;
  isTopper: true;
}
