import Image from 'next/image';
import Link from 'next/link';
import { heroConfig } from '@/config/heroConfig';

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroConfig.image.src}
          alt={heroConfig.image.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          style={{ objectPosition: 'center center' }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Promotional Badge */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
        <div className="bg-[var(--color-copper)] text-white px-6 py-4 md:px-10 md:py-6 rounded-xl shadow-2xl font-bold rotate-3 animate-pulse text-center">
          <div className="text-sm md:text-lg opacity-90">Real Sleep with Real Savings</div>
          <div className="text-xl md:text-3xl mt-1">Save 20% Now</div>
          <div className="text-xs md:text-sm opacity-90 mt-1">Free Shipping</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end items-start px-8 md:px-16 lg:px-24 pb-20 md:pb-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 max-w-md">
          {heroConfig.heading}
        </h1>
        <p className="text-lg md:text-xl text-white mb-24 md:mb-32">
          {heroConfig.subheading}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {heroConfig.buttons.map((button) => (
            <Link
              key={button.href}
              href={button.href}
              className={`px-6 py-3 rounded font-semibold text-sm md:text-base transition-all duration-300 ${
                button.variant === 'primary'
                  ? 'bg-[var(--color-copper)] text-white hover:bg-[#A66829]'
                  : 'bg-[var(--color-sky-blue)] text-[var(--color-text-dark)] hover:bg-[#8FC7F0]'
              }`}
            >
              {button.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
