import "@/app/globals.css";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Nav from "@/components/navigation";
import * as FramerMotion from 'framer-motion';
import AnimatedWrapper from "@/components/animatedWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sunday Software Solutions",
  description: "Expertos en desarrollo de software, SaaS, bots y soporte tecnológico.",
};


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


  return (
    <html lang={locale}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
      <NextIntlClientProvider>
        <header className="text-white p-4 text-center text-l font-bold">
          <Nav/>
        </header>
          <AnimatedWrapper>
            {children}
          </AnimatedWrapper>
        </NextIntlClientProvider>
        <Footer/>
      </body>
    </html>
  );
}