import { useTranslations } from 'next-intl';
import {
  FaCode,
  FaHeadset,
  FaCloud,
  FaRobot,
  FaBrain,
  FaMicrosoft,
} from 'react-icons/fa';

export default function Services() {
  const t = useTranslations('Services');

  const services = [
    {
      id: 'development',
      title: t('developmentTitle'),
      description: t('developmentDescription'),
      icon: <FaCode className="text-5xl text-blue-600" aria-hidden="true" />,
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
      icon: <FaHeadset className="text-5xl text-green-600" aria-hidden="true" />,
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
      icon: <FaCloud className="text-5xl text-purple-600" aria-hidden="true" />,
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
      icon: <FaRobot className="text-5xl text-yellow-600" aria-hidden="true" />,
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
      icon: <FaBrain className="text-5xl text-red-600" aria-hidden="true" />,
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
      icon: <FaMicrosoft className="text-5xl text-blue-500" aria-hidden="true" />,
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
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">{t('title')}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-[box-shadow,transform] duration-300"
          >
            <div className="flex items-center mb-4">
              {service.icon}
              <h2 className="text-2xl font-semibold text-gray-800 ml-4">{service.title}</h2>
            </div>
            <p className="text-lg text-gray-700 mb-4">{service.description}</p>
            <ul className="list-disc pl-6 text-gray-600">
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