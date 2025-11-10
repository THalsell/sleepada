import Hero from '@/components/Hero';
import ProductTiers from '@/components/ProductTiers';
import ManufacturingProcess from '@/components/ManufacturingProcess';
import QualityIcons from '@/components/QualityIcons';
import ProductCategories from '@/components/ProductCategories';
import ServiceIcons from '@/components/ServiceIcons';
import Reviews from '@/components/Reviews';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <ProductTiers />
        <ServiceIcons />
        <ProductCategories />
        <QualityIcons />
        <ManufacturingProcess />
        <Reviews />
      </main>
    </div>
  );
}
