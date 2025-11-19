import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond, Bodoni_Moda } from 'next/font/google'
import "./globals.css";
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import Footer from '@/components/Footer';
import { CartProvider } from '@/contexts/CartContext';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant'
})

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-bodoni'
})

export const metadata: Metadata = {
  title: "Sleepada™ - Perfectly Comfortable",
  description: "Hand Crafted in the USA. Premium mattresses manufactured in Tennessee.",
  metadataBase: new URL('https://sleepada.com'),
  openGraph: {
    title: "Sleepada™ - Perfectly Comfortable",
    description: "Hand Crafted in the USA. Premium mattresses manufactured in Tennessee. American-made quality with no retail markup.",
    images: ['/images/hero-image.png'],
    type: 'website',
    siteName: 'Sleepada',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sleepada™ - Perfectly Comfortable",
    description: "Hand Crafted in the USA. Premium mattresses manufactured in Tennessee.",
    images: ['/images/hero-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: ['mattress', 'American-made mattress', 'Tennessee mattress', 'RV mattress', 'memory foam', 'infrared mattress', 'custom mattress'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable} ${bodoni.variable}`}>
      <body suppressHydrationWarning>
        <CartProvider>
          <Navbar />
          <Breadcrumbs />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}