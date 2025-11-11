import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { coreProduct } from '@/config/products/core';
import { primeProduct } from '@/config/products/prime';
import { firPlusProduct } from '@/config/products/fir-plus';
import { rvCoreProduct } from '@/config/products/rv-core';
import { rvPrimeProduct } from '@/config/products/rv-prime';
import { rvFirPlusProduct } from '@/config/products/rv-fir-plus';
import ProductHero from '@/components/product/ProductHero';
import KeyFeatures from '@/components/product/KeyFeatures';
import ProductDescription from '@/components/product/ProductDescription';
import SpecAccordion from '@/components/product/SpecAccordion';
import ProductReviews from '@/components/product/ProductReviews';
import ProductComparison from '@/components/product/ProductComparison';
import ProductCategories from '@/components/ProductCategories';
import { Product, RVProduct } from '@/types/product';

const products: Record<string, Product | RVProduct> = {
  'core': coreProduct,
  'prime': primeProduct,
  'fir-plus': firPlusProduct,
  'rv-core': rvCoreProduct,
  'rv-prime': rvPrimeProduct,
  'rv-fir-plus': rvFirPlusProduct,
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { slug: 'core' },
    { slug: 'prime' },
    { slug: 'fir-plus' },
    { slug: 'rv-core' },
    { slug: 'rv-prime' },
    { slug: 'rv-fir-plus' },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products[slug as keyof typeof products];

  if (!product) {
    return {
      title: 'Product Not Found | Sleepada™',
    };
  }

  return {
    title: `${product.name} - ${product.tagline} | Sleepada™`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products[slug as keyof typeof products];

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <ProductHero product={product as Product} />
      <KeyFeatures features={product.features} />
      <ProductDescription
        description={product.description}
        layerDescription={product.layerDescription}
      />
      <SpecAccordion
        specs={product.specs}
        layerDescription={product.layerDescription}
        warranty={product.warranty}
        bestFor={product.bestFor}
      />
      <ProductComparison currentProductId={product.id} />
      <ProductReviews reviews={product.reviews} productName={product.name} />
      <ProductCategories />
    </div>
  );
}
