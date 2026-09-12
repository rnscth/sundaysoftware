import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';

export default async function NotFoundPage() {
  const t = await getTranslations('NotFound');

  return (
    <div className="container mx-auto max-w-6xl px-6 py-24 text-center">
      <h1 className="text-4xl font-bold text-deep-slate mb-4">{t('title')}</h1>
      <p className="text-lg text-muted-ink mb-8">{t('description')}</p>
      <Link
        href="/"
        className="px-6 py-3 bg-deep-slate text-card-surface rounded-lg shadow-md hover:bg-mid-slate transition-[box-shadow,transform,background-color] duration-300 ease-smooth focus-visible:ring-2 focus-visible:ring-deep-slate focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        {t('home')}
      </Link>
    </div>
  );
}