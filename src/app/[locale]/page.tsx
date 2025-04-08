import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FaCode, FaCloud, FaRobot } from 'react-icons/fa';

export default function HomePage() {
  const t = useTranslations('HomePage');

  const services = [
    {
      title: t('services.software'),
      description: t('services.softwareDesc'),
      icon: <FaCode className="text-5xl text-blue-600" />,
    },
    {
      title: t('services.saas'),
      description: t('services.saasDesc'),
      icon: <FaCloud className="text-5xl text-purple-600" />,
    },
    {
      title: t('services.bots'),
      description: t('services.botsDesc'),
      icon: <FaRobot className="text-5xl text-yellow-600" />,
    },
  ];

  return (
      <div className="container mx-auto px-6 py-12 bg-gradient-to-b from-gray-100 to-gray-300">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 animate-fade-in">{t('title')}</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{t('description')}</p>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-800">{service.title}</h2>
            <p className="text-gray-700 mt-2">{service.description}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center mt-16">
        <p className="text-lg text-gray-700">{t('cta.text')}</p>
        <Link href="/Contact">
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
            {t('cta.button')}
          </button>
        </Link>
      </section>
    </div>
  );
}
