import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs | Sleepada Mattresses - Answers to Common Questions',
  description: 'Find answers to common questions about Sleepada mattresses, including shipping, warranty, care instructions, and product details.',
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
