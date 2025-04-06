import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const res = createMiddleware(routing)(req);
  const localeCookie = req.cookies.get('NEXT_LOCALE')?.value;

  const browserLang = req.headers.get("accept-language")?.split(",")[0].split("-")[0] || "en";

  // Extraer solo el path (sin el dominio)
  const pathname = req.nextUrl.pathname;

  if (!localeCookie) {
    res.cookies.set('NEXT_LOCALE', browserLang, { path: '/', maxAge: 31536000 });

    if (!pathname.startsWith(`/${browserLang}`)) {
      const newUrl = new URL(`/${browserLang}${pathname}`, req.url);
      return NextResponse.redirect(newUrl);
    }
  } else {
    res.cookies.set('NEXT_LOCALE', localeCookie, { path: '/', maxAge: 31536000 });
  }

  return res;
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
