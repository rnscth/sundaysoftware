import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className="space-y-10 p-6">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <p className="text-lg text-gray-600 mt-4">{t('description')}</p>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{t('services.software')}</h2>
          <p className="text-gray-600">{t('services.softwareDesc')}</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{t('services.saas')}</h2>
          <p className="text-gray-600">{t('services.saasDesc')}</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{t('services.bots')}</h2>
          <p className="text-gray-600">{t('services.botsDesc')}</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-10">
        <p className="text-lg text-gray-700">{t('cta.text')}</p>
        <Link href="/Contact">
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            {t('cta.button')}
          </button>
        </Link>
      </section>
    </div>
  );
}
