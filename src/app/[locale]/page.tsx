import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import {
  FaCode,
  FaHeadset,
  FaCloud,
  FaRobot,
  FaBrain,
  FaMicrosoft,
} from 'react-icons/fa';

export default function HomePage() {
  const t = useTranslations('HomePage');

  const services = [
    {
      id: 'development',
      title: t('services.development'),
      description: t('services.developmentDesc'),
      icon: <FaCode className="text-5xl text-blue-600" aria-hidden="true" />,
    },
    {
      id: 'support',
      title: t('services.support'),
      description: t('services.supportDesc'),
      icon: <FaHeadset className="text-5xl text-green-600" aria-hidden="true" />,
    },
    {
      id: 'saas',
      title: t('services.saas'),
      description: t('services.saasDesc'),
      icon: <FaCloud className="text-5xl text-purple-600" aria-hidden="true" />,
    },
    {
      id: 'bots',
      title: t('services.bots'),
      description: t('services.botsDesc'),
      icon: <FaRobot className="text-5xl text-yellow-600" aria-hidden="true" />,
    },
    {
      id: 'ai',
      title: t('services.ai'),
      description: t('services.aiDesc'),
      icon: <FaBrain className="text-5xl text-red-600" aria-hidden="true" />,
    },
    {
      id: 'microsoft',
      title: t('services.microsoft'),
      description: t('services.microsoftDesc'),
      icon: <FaMicrosoft className="text-5xl text-blue-500" aria-hidden="true" />,
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800">{t('title')}</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{t('description')}</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-[box-shadow,transform] duration-300 text-center"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-800">{service.title}</h2>
            <p className="text-gray-700 mt-2">{service.description}</p>
          </div>
        ))}
      </section>

      <section className="text-center mt-16">
        <p className="text-lg text-gray-700">{t('cta.text')}</p>
        <Link
          href="/Contact"
          className="inline-block mt-4 px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transform hover:scale-105 transition-[box-shadow,transform] duration-300 focus-visible:ring-2 focus-visible:ring-gray-800 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          {t('cta.button')}
        </Link>
      </section>
    </div>
  );
}