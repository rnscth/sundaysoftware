import {useTranslations} from 'next-intl';

export default function Services() {
  const t = useTranslations('Services');
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">{t('title')}</h1>
      
      <div className="space-y-8">
        {/* Desarrollo de Software */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">{t('developmentTitle')}</h2>
          <p className="text-lg mb-4">{t('developmentDescription')}</p>
          <ul className="list-disc pl-8">
            <li>{t('customSoftwareDevelopment')}</li>
            <li>{t('mobileAppDevelopment')}</li>
            <li>{t('webAppDevelopment')}</li>
            <li>{t('enterpriseSolutions')}</li>
          </ul>
        </section>

        {/* Soporte Técnico */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">{t('supportTitle')}</h2>
          <p className="text-lg mb-4">{t('supportDescription')}</p>
          <ul className="list-disc pl-8">
            <li>{t('itSupport')}</li>
            <li>{t('helpDeskServices')}</li>
            <li>{t('maintenanceServices')}</li>
          </ul>
        </section>

        {/* SaaS */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">{t('saasTitle')}</h2>
          <p className="text-lg mb-4">{t('saasDescription')}</p>
          <ul className="list-disc pl-8">
            <li>{t('customSaaSDevelopment')}</li>
            <li>{t('cloudSolutions')}</li>
            <li>{t('scalableApps')}</li>
          </ul>
        </section>

        {/* Bots */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">{t('botsTitle')}</h2>
          <p className="text-lg mb-4">{t('botsDescription')}</p>
          <ul className="list-disc pl-8">
            <li>{t('whatsappBots')}</li>
            <li>{t('customerSupportBots')}</li>
            <li>{t('appointmentSchedulingBots')}</li>
            <li>{t('automatedResponseBots')}</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
