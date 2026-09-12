import "@/app/globals.css";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {routing} from '@/i18n/routing';
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Nav from "@/components/navigation";
import FocusOnRouteChange from "@/components/focusOnRouteChange";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
    title: t('title'),
    description: t('description'),
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations({locale, namespace: 'Nav'});

  return (
    <html lang={locale}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 focus:px-4 focus:py-2 focus:bg-deep-slate focus:text-card-surface focus:rounded-lg"
        >
          {t('skipToContent')}
        </a>
        <NextIntlClientProvider messages={messages}>
          <FocusOnRouteChange />
          <header className="text-card-surface p-4">
            <Nav/>
          </header>
          {children}
        </NextIntlClientProvider>
        <Footer/>
      </body>
    </html>
  );
}