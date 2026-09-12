import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';

export default async function NotFoundPage() {
  const t = await getTranslations('NotFound');

  return (
    <div className="container mx-auto max-w-6xl px-6 py-24 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('title')}</h1>
      <p className="text-lg text-gray-600 mb-8">{t('description')}</p>
      <Link
        href="/"
        className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gray-800 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        {t('home')}
      </Link>
    </div>
  );
}