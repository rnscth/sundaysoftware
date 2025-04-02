import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const res = createMiddleware(routing)(req); // Ejecuta el middleware de next-intl

  // Verifica si la cookie de idioma ya existe
  const localeCookie = req.cookies.get('NEXT_LOCALE')?.value;

  if (!localeCookie) {
    const browserLang = req.headers.get("accept-language")?.split(",")[0].split("-")[0] || "en";
    res.cookies.set('NEXT_LOCALE', browserLang, { path: '/', maxAge: 31536000 });
  }
  return res;
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
