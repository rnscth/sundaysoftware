import type {MetadataRoute} from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const locales = ['en', 'es'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return ['', '/privacy'].flatMap((path) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: currentDate,
      priority: path ? 0.5 : 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en${path}`,
          es: `${baseUrl}/es${path}`,
        },
      },
    }))
  );
}
