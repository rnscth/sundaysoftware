"use client"
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { AiOutlineMail } from 'react-icons/ai'; // Icono de correo
import { FaWhatsapp } from 'react-icons/fa'; // Icono de WhatsApp

// Define el tipo para formData
interface FormData {
  name: string;
  company: string;
  requirementType: string;
  contactType: string;
  phone: string;
  email: string;
  projectDescription: string;
  businessSector: string;
}

export default function Contact() {
  const t = useTranslations('Contact');

  const [formData, setFormData] = useState<FormData>({
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);
  };

  return (
    <div className="container mx-auto px-6 py-12 bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center">
    {/* // <div className="container mx-auto p-8 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen flex flex-col items-center"> */}
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-primary text-gray-800">{t('title')}</h1>
        <p className="text-lg text-gray-700">{t('introDescription')}</p>
      </section>

      <section className="bg-gray-300 p-6 rounded-lg shadow-lg w-full max-w-lg">
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
              className="w-full p-2 border border-gray-700 bg-white rounded-md text-black text-sm focus:ring-2 focus:ring-primary"
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
              className="w-full p-2 border border-gray-700 bg-white rounded-md text-black text-sm focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="projectDescription">
              {t('projectDescription')}
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 bg-white rounded-md text-black text-sm focus:ring-2 focus:ring-primary"
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
              className="w-full p-2 border border-gray-700 bg-white rounded-md text-black text-sm focus:ring-2 focus:ring-primary"
              required
            />
          </div>




            <div key={'requirementType'}>
              <label className="block text-sm font-medium mb-2" htmlFor={'requirementType'}>
                {t('requirementType')}
              </label>
              <select
                id={'requirementType'}
                name={'requirementType'}
                value={formData['requirementType']}
                onChange={handleChange}
                className="w-full p-2 border border-gray-700 bg-white rounded-md text-black text-sm focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">{t(`select${'requirementType'}`)}</option>
                {['development', 'support', 'saas', 'bot', 'other'].map((option) => (
                  <option key={option} value={option}>{t(option)}</option>
                ))}
              </select>
            </div>

            <div key={'contactType'}>
              <label className="block text-sm font-medium mb-2" htmlFor={'contactType'}>
                {t('contactType')}
              </label>
              <select
                id={'contactType'}
                name={'contactType'}
                value={formData['contactType']}
                onChange={handleChange}
                className="w-full p-2 border border-gray-700 bg-white rounded-md text-black text-sm focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">{t(`select${'contactType'}`)}</option>
                {['Phone', 'Email'].map((option) => (
                  <option key={option} value={option}>{t(option)}</option>
                ))}
              </select>
            </div>


          {formData.contactType === 'Phone' && (
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="phone">
                {t('Phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-700 bg-white rounded-md text-black text-sm focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          )}

          {formData.contactType === 'Email' && (
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                {t('Email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-700 bg-white rounded-md text-black text-sm focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              
            >
              {t('submit')}
            </button>
          </div>
        </form>
      </section>

      <section className="mt-8 text-center">
        <p className="text-lg text-gray-700">{t('orContactUs')}</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="mailto:contact@sundaysoftware.com" className="flex items-center gap-2 text-primary hover:text-primary-light transition">
            <AiOutlineMail size={24} /> contact@sundaysoftware.com
          </a>
          <a href="https://wa.me/+1234567890" className="flex items-center gap-2 text-green-500 hover:text-green-400 transition">
            <FaWhatsapp size={24} /> +1 234 567 890
          </a>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-none bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-700 p-6 rounded-lg max-w-sm text-center shadow-lg">
            <h3 className="text-gray-300 text-xl font-semibold mb-4 text-primary">{t('thankYouTitle')}</h3>
            <p className="text-gray-300">{t('thankYouMessage')}</p>
          </div>
        </div>
      )}
    </div>
  );
}
