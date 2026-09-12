import type {MetadataRoute} from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const locales = ['en', 'es'] as const;
const routes: Array<{path: string; priority: number}> = [
  {path: '', priority: 1},
  {path: '/Services', priority: 0.8},
  {path: '/About', priority: 0.8},
  {path: '/Contact', priority: 0.8},
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return locales.flatMap((locale) =>
    routes.map(({path, priority}) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((other) => [other, `${baseUrl}/${other}${path}`])
        ),
      },
    }))
  );
}