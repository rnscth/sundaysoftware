import {useTranslations} from 'next-intl';

export default function About() {
  const t = useTranslations('About');
  
  return (
    <div className="container mx-auto p-8">
      {/* Sección de Introducción */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-center mb-4">{t('title')}</h1>
        <p className="text-lg text-center mb-4">{t('introDescription')}</p>
      </section>

      {/* Sección de Misión y Visión */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">{t('missionTitle')}</h2>
        <p className="text-lg mb-8">{t('missionDescription')}</p>

        <h2 className="text-3xl font-semibold mb-4">{t('visionTitle')}</h2>
        <p className="text-lg">{t('visionDescription')}</p>
      </section>

      {/* Sección de Miembros del Equipo */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">{t('teamTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Miembro 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src="member1.jpg" alt="Member 1"/>
            <h3 className="text-xl font-semibold text-center">John Doe</h3>
            <p className="text-center text-gray-600">CEO</p>
            <p className="mt-2 text-center">{t('member1JobDescription')}</p>
          </div>

          {/* Miembro 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src="member2.jpg" alt="Member 2"/>
            <h3 className="text-xl font-semibold text-center">Jane Smith</h3>
            <p className="text-center text-gray-600">CTO</p>
            <p className="mt-2 text-center">{t('member2JobDescription')}</p>
          </div>

          {/* Miembro 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src="member3.jpg" alt="Member 3"/>
            <h3 className="text-xl font-semibold text-center">Alex Johnson</h3>
            <p className="text-center text-gray-600">Lead Developer</p>
            <p className="mt-2 text-center">{t('member3JobDescription')}</p>
          </div>
        </div>
      </section>

      {/* Sección de Ubicación */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">{t('locationTitle')}</h2>
        <p className="text-lg mb-4">{t('locationDescription')}</p>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=your-embed-code"
            width="600" height="450" style={{border: 0}} allowFullScreen={false} loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Sección de Información Adicional */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">{t('extraInfoTitle')}</h2>
        <p className="text-lg mb-4">{t('extraInfoDescription')}</p>
      </section>
    </div>
  );
}
