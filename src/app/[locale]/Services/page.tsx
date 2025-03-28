import { useTranslations } from 'next-intl';
import { FaCode, FaHeadset, FaCloud, FaRobot } from 'react-icons/fa';

export default function Services() {
  const t = useTranslations('Services');

  const services = [
    {
      title: t('developmentTitle'),
      description: t('developmentDescription'),
      icon: <FaCode className="text-4xl text-blue-600" />,
      items: [
        t('customSoftwareDevelopment'),
        t('mobileAppDevelopment'),
        t('webAppDevelopment'),
        t('enterpriseSolutions')
      ]
    },
    {
      title: t('supportTitle'),
      description: t('supportDescription'),
      icon: <FaHeadset className="text-4xl text-green-600" />,
      items: [
        t('itSupport'),
        t('helpDeskServices'),
        t('maintenanceServices')
      ]
    },
    {
      title: t('saasTitle'),
      description: t('saasDescription'),
      icon: <FaCloud className="text-4xl text-purple-600" />,
      items: [
        t('customSaaSDevelopment'),
        t('cloudSolutions'),
        t('scalableApps')
      ]
    },
    {
      title: t('botsTitle'),
      description: t('botsDescription'),
      icon: <FaRobot className="text-4xl text-yellow-600" />,
      items: [
        t('whatsappBots'),
        t('customerSupportBots'),
        t('appointmentSchedulingBots'),
        t('automatedResponseBots')
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 bg-gradient-to-b from-gray-100 to-gray-300">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">{t('title')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              {service.icon}
              <h2 className="text-2xl font-semibold text-gray-800 ml-4">{service.title}</h2>
            </div>
            <p className="text-lg text-gray-700 mb-4">{service.description}</p>
            <ul className="list-disc pl-6 text-gray-600">
              {service.items.map((item, i) => (
                <li key={i} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
