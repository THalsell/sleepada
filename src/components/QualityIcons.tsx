import Image from 'next/image';
import Link from 'next/link';
import { qualityIcons } from '@/config/iconGrid';

export default function QualityIcons() {
  return (
    <section className="w-full py-16 px-4" style={{ backgroundColor: '#E8E3DC' }}>
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-[family-name:var(--font-cormorant-garamond)] text-center mb-12 text-[var(--color-hero-navy)]">
          Why Sleepada
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityIcons.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-text-dark)]">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Brand Story */}
        <div className="max-w-3xl mx-auto text-center mt-12 px-4">
          <p className="text-lg leading-relaxed text-gray-700">
            Born in the hills of Tennessee, Sleepada™ was founded on one simple promise — to craft better sleep, right here at home. Every mattress is handcrafted using premium domestic and imported materials, backed by our commitment to quality and American craftsmanship.
          </p>
          <Link
            href="/about"
            className="text-[var(--color-copper)] hover:underline font-semibold mt-4 inline-block"
          >
            Read Our Full Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
