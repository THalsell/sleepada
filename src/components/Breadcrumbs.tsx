'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Don't show breadcrumbs on homepage
  if (pathname === '/') {
    return null;
  }

  // Split pathname and filter out empty strings
  const pathSegments = pathname.split('/').filter(segment => segment);

  // Format segment name (replace hyphens with spaces and capitalize)
  const formatName = (segment: string) => {
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="bg-white py-4 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-sm text-gray-600">
          <Link href="/" className="hover:underline">Home</Link>
          {pathSegments.map((segment, index) => {
            const isLast = index === pathSegments.length - 1;
            const path = '/' + pathSegments.slice(0, index + 1).join('/');

            return (
              <span key={segment}>
                {' > '}
                {isLast ? (
                  <span>{formatName(segment)}</span>
                ) : (
                  <Link href={path} className="hover:underline">
                    {formatName(segment)}
                  </Link>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
