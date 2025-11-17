'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navigationConfig } from '@/config/navigationConfig';
import CartIcon from '@/components/CartIcon';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="top-0 z-50 bg-[var(--color-hero-navy)] shadow-md sticky">
      {/* Shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent overflow-hidden"></div>
      <div className="py-4 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Left Side */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-3xl text-[var(--color-cream)]
  font-[family-name:var(--font-bodoni)]"
              >
                {navigationConfig.logo}
              </Link>
            </div>

            {/* Desktop Navigation - Right Side */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
              {navigationConfig.secondaryNav.map((link) => (
                link.children ? (
                  <div
                    key={link.label}
                    className="relative group"
                  >
                    <button
                      className="text-xl lg:text-2xl text-[var(--color-cream)] hover:text-[var(--color-copper)] transition-colors font-semibold flex items-center gap-1"
                      aria-label={`${link.label} menu`}
                    >
                      {link.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="w-48 bg-white rounded-md shadow-lg py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-lg text-[var(--color-hero-navy)] hover:bg-[var(--color-cream)] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xl lg:text-2xl text-[var(--color-cream)] hover:text-[var(--color-copper)] transition-colors font-semibold"
                  >
                    {link.label}
                  </Link>
                )
              ))}

              {/* Shopping Cart Icon - Desktop */}
              <div className="ml-4">
                <CartIcon />
              </div>
            </div>

            {/* Mobile Cart & Menu */}
            <div className="md:hidden flex items-center gap-4">
              {/* Shopping Cart Icon - Mobile */}
              <CartIcon />

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-cream)] hover:bg-white/10 focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--color-hero-navy)] border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationConfig.secondaryNav.map((link) => (
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className="w-full text-left px-3 py-2 rounded-md text-lg font-semibold text-[var(--color-cream)] hover:bg-white/10 transition-colors flex items-center justify-between"
                  >
                    {link.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === link.label && (
                    <div className="pl-6 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 rounded-md text-base text-[var(--color-cream)] hover:bg-white/10 transition-colors"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-lg font-semibold text-[var(--color-cream)] hover:bg-white/10 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
