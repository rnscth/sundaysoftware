import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';
import {
  FaCode,
  FaHeadset,
  FaCloud,
  FaRobot,
  FaBrain,
  FaMicrosoft,
} from 'react-icons/fa';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('pages.services.title'),
    description: t('pages.services.description'),
  };
}

export default function Services() {
  const t = useTranslations('Services');

  const services = [
    {
      id: 'development',
      title: t('developmentTitle'),
      description: t('developmentDescription'),
      icon: <FaCode className="text-5xl text-code-blue" aria-hidden="true" />,
      items: [
        t('customSoftwareDevelopment'),
        t('mobileAppDevelopment'),
        t('webAppDevelopment'),
        t('enterpriseSolutions'),
      ],
    },
    {
      id: 'support',
      title: t('supportTitle'),
      description: t('supportDescription'),
      icon: <FaHeadset className="text-5xl text-support-green" aria-hidden="true" />,
      items: [
        t('itSupport'),
        t('helpDeskServices'),
        t('maintenanceServices'),
      ],
    },
    {
      id: 'saas',
      title: t('saasTitle'),
      description: t('saasDescription'),
      icon: <FaCloud className="text-5xl text-cloud-purple" aria-hidden="true" />,
      items: [
        t('customSaaSDevelopment'),
        t('cloudSolutions'),
        t('scalableApps'),
      ],
    },
    {
      id: 'bots',
      title: t('botsTitle'),
      description: t('botsDescription'),
      icon: <FaRobot className="text-5xl text-bot-gold" aria-hidden="true" />,
      items: [
        t('whatsappBots'),
        t('customerSupportBots'),
        t('appointmentSchedulingBots'),
        t('automatedResponseBots'),
      ],
    },
    {
      id: 'ai',
      title: t('aiTitle'),
      description: t('aiDescription'),
      icon: <FaBrain className="text-5xl text-ai-red" aria-hidden="true" />,
      items: [
        t('aiWorkflowAutomation'),
        t('customAiAgents'),
        t('copilotStudioAgents'),
        t('aiDocumentProcessing'),
      ],
    },
    {
      id: 'microsoft',
      title: t('microsoftTitle'),
      description: t('microsoftDescription'),
      icon: <FaMicrosoft className="text-5xl text-microsoft-blue" aria-hidden="true" />,
      items: [
        t('entraId'),
        t('entraAppProxy'),
        t('ssoMfaIntegration'),
        t('powerPlatformAutomation'),
      ],
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-deep-slate mb-12">{t('title')}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-card-surface p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-[box-shadow,transform] duration-300 ease-smooth"
          >
            <div className="flex items-center mb-4">
              {service.icon}
              <h2 className="text-2xl font-semibold text-deep-slate ml-4">{service.title}</h2>
            </div>
            <p className="text-lg text-mid-slate mb-4">{service.description}</p>
            <ul className="list-disc pl-6 text-muted-ink">
              {service.items.map((item) => (
                <li key={item} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}