import {getTranslations} from 'next-intl/server';

export default async function LoadingPage() {
  const t = await getTranslations('Loading');

  return (
    <div className="container mx-auto max-w-6xl px-6 py-24 text-center">
      <p className="text-lg text-gray-600">{t('text')}</p>
    </div>
  );
}