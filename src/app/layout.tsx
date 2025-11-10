import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond, Bodoni_Moda } from 'next/font/google'
import "./globals.css";
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import Footer from '@/components/Footer';

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable} ${bodoni.variable}`}>
      <body>
        <Navbar />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  )
}