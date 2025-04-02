import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const res = createMiddleware(routing)(req); // Ejecuta el middleware de next-intl

  // Verifica si la cookie de idioma ya existe
  const localeCookie = req.cookies.get('NEXT_LOCALE')?.value;

  if (!localeCookie) {
    res.cookies.set('NEXT_LOCALE', 'en', { path: '/', maxAge: 31536000 }); // Fijamos 'en' si no existe
  }

  return res;
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
