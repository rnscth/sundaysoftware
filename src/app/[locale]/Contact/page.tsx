"use client"
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { AiOutlineMail } from 'react-icons/ai'; // Icono de correo
import { FaWhatsapp } from 'react-icons/fa'; // Icono de WhatsApp

export default function Contact() {
  const t = useTranslations('Contact');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    requirementType: '',
    contactType: '',
    phone: '',
    email: '',
    projectDescription: '',
    businessSector: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí se incluiría la lógica para enviar el formulario a la API del chatbot en el futuro.
    // Ejemplo:
    // await fetch('/api/chatbot', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });

    setShowModal(true);

    // Redirigir al Home después de 3 segundos
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Título de la Página */}
      <section className="mb-8">
        <h1 className="text-2xl font-semibold text-center mb-4">{t('title')}</h1>
        <p className="text-center text-sm">{t('introDescription')}</p>
      </section>

      {/* Formulario de Contacto */}
      <section className="bg-white p-4 rounded-md shadow-md w-full max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              {t('name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="company">
              {t('company')}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="requirementType">
              {t('requirementType')}
            </label>
            <select
              id="requirementType"
              name="requirementType"
              value={formData.requirementType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              required
            >
              <option value="">{t('selectRequirement')}</option>
              <option value="Development">{t('development')}</option>
              <option value="Support">{t('support')}</option>
              <option value="SaaS">{t('saas')}</option>
              <option value="Bot">{t('bot')}</option>
              <option value="Otro">{t('other')}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="contactType">
              {t('contactType')}
            </label>
            <select
              id="contactType"
              name="contactType"
              value={formData.contactType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              required
            >
              <option value="">{t('selectContactType')}</option>
              <option value="Phone">{t('phone')}</option>
              <option value="Email">{t('email')}</option>
            </select>
          </div>

          {/* Campo de Teléfono o Correo según el tipo de contacto */}
          {formData.contactType === 'Phone' && (
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="phone">
                {t('phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                required
              />
            </div>
          )}

          {formData.contactType === 'Email' && (
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                {t('email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="projectDescription">
              {t('projectDescription')}
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              // onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="businessSector">
              {t('businessSector')}
            </label>
            <input
              type="text"
              id="businessSector"
              name="businessSector"
              value={formData.businessSector}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md text-sm"
            >
              {t('submit')}
            </button>
          </div>
        </form>
      </section>

      {/* Información de Contacto */}
      <section className="mt-8 text-center">
        <p className="text-sm text-gray-600">{t('orContactUs')}</p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="mailto:contact@sundaysoftware.com"
            className="flex items-center gap-2 text-blue-500"
          >
            <AiOutlineMail size={20} />
            contact@sundaysoftware.com
          </a>
          <a
            href="https://wa.me/+1234567890"
            className="flex items-center gap-2 text-green-500"
          >
            <FaWhatsapp size={20} />
            +1 234 567 890
          </a>
        </div>
      </section>

      {/* Modal de Agradecimiento */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm text-center">
            <h3 className="text-lg font-semibold mb-4">{t('thankYouTitle')}</h3>
            <p>{t('thankYouMessage')}</p>
          </div>
        </div>
      )}
    </div>
  );
}
