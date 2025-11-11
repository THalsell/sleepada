import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the password from environment variable
  const sitePassword = process.env.SITE_PASSWORD;

  // If no password is set, allow access (for local development)
  if (!sitePassword) {
    return NextResponse.next();
  }

  // Check for authorization header
  const authHeader = request.headers.get('authorization');

  if (!authHeader) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  // Parse the authorization header
  const [scheme, credentials] = authHeader.split(' ');

  if (scheme !== 'Basic' || !credentials) {
    return new NextResponse('Invalid authentication', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  // Decode the credentials
  const decoded = Buffer.from(credentials, 'base64').toString('utf-8');
  const [username, password] = decoded.split(':');

  // Check if password matches (username can be anything)
  if (password === sitePassword) {
    return NextResponse.next();
  }

  return new NextResponse('Invalid credentials', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

// Only apply to page routes, exclude API routes, static files, and Next.js internals
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files (images, icons, etc - match by file extension)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)).*)',
  ],
};
