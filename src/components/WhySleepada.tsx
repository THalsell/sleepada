import Image from 'next/image';
import { whySleepada } from '@/config/whySleepada';

export default function WhySleepada() {
  return (
    <section className="w-full bg-[#fff8ef] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1b3249] mb-12">
          {whySleepada.heading}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {whySleepada.features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="relative w-32 h-32 md:w-36 md:h-36 mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <p className="text-xs md:text-sm font-medium text-[var(--color-text-dark)] max-w-[150px]">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
