'use client';

import {useTranslations} from 'next-intl';
import {useEffect} from 'react';

export default function ErrorPage({
  error,
  reset
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  const t = useTranslations('ErrorPage');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto max-w-6xl px-6 py-24 text-center">
      <h1 className="text-4xl font-bold text-midnight mb-4">{t('title')}</h1>
      <p className="text-lg text-ink-muted mb-8">{t('description')}</p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-midnight text-ivory rounded-full shadow-md hover:bg-midnight-soft transition-[box-shadow,transform,background-color] duration-300 ease-smooth focus-visible:ring-2 focus-visible:ring-midnight focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        {t('retry')}
      </button>
    </div>
  );
}