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
      icon: <FaCode className="text-5xl text-code-blue" aria-hidden="true" />,
    },
    {
      id: 'support',
      title: t('services.support'),
      description: t('services.supportDesc'),
      icon: <FaHeadset className="text-5xl text-support-green" aria-hidden="true" />,
    },
    {
      id: 'saas',
      title: t('services.saas'),
      description: t('services.saasDesc'),
      icon: <FaCloud className="text-5xl text-cloud-purple" aria-hidden="true" />,
    },
    {
      id: 'bots',
      title: t('services.bots'),
      description: t('services.botsDesc'),
      icon: <FaRobot className="text-5xl text-bot-gold" aria-hidden="true" />,
    },
    {
      id: 'ai',
      title: t('services.ai'),
      description: t('services.aiDesc'),
      icon: <FaBrain className="text-5xl text-ai-red" aria-hidden="true" />,
    },
    {
      id: 'microsoft',
      title: t('services.microsoft'),
      description: t('services.microsoftDesc'),
      icon: <FaMicrosoft className="text-5xl text-microsoft-blue" aria-hidden="true" />,
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-deep-slate">{t('title')}</h1>
        <p className="text-lg text-muted-ink mt-4 max-w-2xl mx-auto">{t('description')}</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-card-surface p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-[box-shadow,transform] duration-300 ease-smooth text-center"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-deep-slate">{service.title}</h2>
            <p className="text-mid-slate mt-2">{service.description}</p>
          </div>
        ))}
      </section>

      <section className="text-center mt-16">
        <p className="text-lg text-mid-slate">{t('cta.text')}</p>
        <Link
          href="/Contact"
          className="inline-block mt-4 px-6 py-3 bg-deep-slate text-card-surface rounded-lg shadow-md hover:bg-mid-slate transform hover:scale-105 transition-[box-shadow,transform,background-color] duration-300 ease-smooth focus-visible:ring-2 focus-visible:ring-deep-slate focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          {t('cta.button')}
        </Link>
      </section>
    </div>
  );
}