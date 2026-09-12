import type {MetadataRoute} from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const locales = ['en', 'es'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: currentDate,
    priority: 1,
    alternates: {
      languages: {
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
      },
    },
  }));
}