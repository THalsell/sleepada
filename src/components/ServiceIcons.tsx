import Image from 'next/image';
import { serviceIcons } from '@/config/iconGrid';

export default function ServiceIcons() {
  return (
    <section className="w-full py-8 px-4" style={{ backgroundColor: '#E8E3DC' }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {serviceIcons.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-base text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
