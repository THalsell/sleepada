import Link from 'next/link';
import Image from 'next/image';
import { footerConfig } from '@/config/footer';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-hero-navy)] text-[var(--color-text-light)] py-12 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About Sleepada */}
          <div>
            <h3 className="text-2xl font-[family-name:var(--font-cormorant-garamond)] mb-4">
              {footerConfig.about.title}
            </h3>
            <p className="text-sm mb-4 opacity-90">
              {footerConfig.about.tagline}
            </p>
            <p className="text-sm mb-4 opacity-90">
              {footerConfig.about.description}
            </p>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {footerConfig.shop.title}
            </h4>
            <ul className="space-y-2">
              {footerConfig.shop.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="text-sm opacity-90 hover:opacity-100 transition block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {footerConfig.company.title}
            </h4>
            <ul className="space-y-2">
              {footerConfig.company.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="text-sm opacity-90 hover:opacity-100 transition block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {footerConfig.contact.title}
            </h4>
            <p className="text-sm">
              <a
                href={`mailto:${footerConfig.contact.email}`}
                className="hover:opacity-80 transition"
              >
                {footerConfig.contact.email}
              </a>
            </p>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-[var(--color-text-light)] border-opacity-20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-90">
              {footerConfig.copyright.text}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {footerConfig.about.social.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  className="opacity-90 hover:opacity-100 transition"
                  aria-label={social.name}
                >
                  <div className="relative w-6 h-6" style={{ filter: 'brightness(0) saturate(100%) invert(93%) sepia(13%) saturate(439%) hue-rotate(335deg) brightness(103%) contrast(92%)' }}>
                    <Image
                      src={social.icon}
                      alt={social.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
