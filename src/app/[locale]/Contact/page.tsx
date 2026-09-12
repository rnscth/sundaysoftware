"use client";
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';

interface FormData {
  name: string;
  company: string;
  requirementType: string;
  contactType: string;
  phone: string;
  email: string;
  projectDescription: string;
  businessSector: string;
  website: string;
}

type FieldName = keyof FormData;

type Errors = Partial<Record<FieldName, string>>;

const initialFormData: FormData = {
  name: '',
  company: '',
  requirementType: '',
  contactType: '',
  phone: '',
  email: '',
  projectDescription: '',
  businessSector: '',
  website: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9()+\-\s]{7,20}$/;

const REQUIRED_FIELDS: FieldName[] = [
  'name',
  'company',
  'projectDescription',
  'businessSector',
  'requirementType',
  'contactType',
  'phone',
  'email',
];

export default function Contact() {
  const t = useTranslations('Contact');
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Errors>({});
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const abortControllerRef = useRef<AbortController | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    if (!showModal) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [showModal]);

  useEffect(() => {
    if (!showModal || !dialogRef.current) return;
    const dialog = dialogRef.current;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeAndRedirect();
        return;
      }
      if (e.key !== 'Tab') return;
      const focusables = dialog.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    dialog.addEventListener('keydown', handleKeyDown);
    const closeButton = dialog.querySelector<HTMLElement>('#success-close');
    closeButton?.focus();
    return () => dialog.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  const isAbortError = (error: unknown) =>
    error instanceof Error && error.name === 'AbortError';

  const validateForm = (): Errors => {
    const errs: Errors = {};
    const required = (field: FieldName) => {
      if (!formData[field].trim()) errs[field] = t('requiredError');
    };
    required('name');
    required('company');
    required('projectDescription');
    required('businessSector');
    if (!formData.requirementType) errs.requirementType = t('requiredError');
    if (!formData.contactType) errs.contactType = t('requiredError');
    if (formData.contactType === 'Phone') {
      const phone = formData.phone.trim();
      if (!phone) errs.phone = t('requiredError');
      else if (!PHONE_REGEX.test(phone)) errs.phone = t('invalidPhoneError');
    }
    if (formData.contactType === 'Email') {
      const email = formData.email.trim();
      if (!email) errs.email = t('requiredError');
      else if (!EMAIL_REGEX.test(email)) errs.email = t('invalidEmailError');
    }
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    const nextErrors = validateForm();
    if (Object.values(nextErrors).some((message) => message)) {
      setErrors(nextErrors);
      const firstInvalid = REQUIRED_FIELDS.find((field) => nextErrors[field]);
      if (firstInvalid) document.getElementById(firstInvalid)?.focus();
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    const controller = new AbortController();
    abortControllerRef.current = controller;
    const timeoutId = setTimeout(() => controller.abort(), 15000);
    try {
      const res = await fetch('/api/send_email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      if (!res.ok) throw new Error('send-error');
      setShowModal(true);
    } catch (error) {
      clearTimeout(timeoutId);
      setFormError(isAbortError(error) ? t('networkError') : t('sendError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeAndRedirect = () => {
    setShowModal(false);
    router.replace('/');
  };

  const inputClass =
    'w-full p-2 border border-mid-slate bg-card-surface rounded-md text-wet-ink text-sm focus:ring-2 focus:ring-deep-slate';

  const renderError = (field: FieldName) =>
    errors[field] ? (
      <p id={`${field}-error`} role="alert" className="text-error text-sm mt-1">
        {errors[field]}
      </p>
    ) : null;

  const fieldAria = (field: FieldName) => ({
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `${field}-error` : undefined,
    'aria-required': REQUIRED_FIELDS.includes(field) || undefined,
  });

  const requiredLabel = (label: string) => (
    <>
      {label} <span aria-hidden="true" className="text-error">*</span>
      <span className="sr-only">{t('requiredLabel')}</span>
    </>
  );

  return (
    <div className="container mx-auto max-w-6xl px-6 py-12 flex flex-col items-center">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-deep-slate">{t('title')}</h1>
        <p className="text-lg text-mid-slate max-w-2xl mx-auto">{t('introDescription')}</p>
      </section>

      <section className="bg-card-surface p-6 rounded-lg shadow-lg w-full max-w-lg">
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="sr-only">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              autoComplete="off"
              tabIndex={-1}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              {requiredLabel(t('name'))}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
              maxLength={120}
              autoComplete="name"
              {...fieldAria('name')}
            />
            {renderError('name')}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="company">
              {requiredLabel(t('company'))}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={inputClass}
              maxLength={120}
              autoComplete="organization"
              {...fieldAria('company')}
            />
            {renderError('company')}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="projectDescription">
              {requiredLabel(t('projectDescription'))}
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              className={inputClass}
              rows={3}
              maxLength={3000}
              {...fieldAria('projectDescription')}
            />
            {renderError('projectDescription')}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="businessSector">
              {requiredLabel(t('businessSector'))}
            </label>
            <input
              type="text"
              id="businessSector"
              name="businessSector"
              value={formData.businessSector}
              onChange={handleChange}
              className={inputClass}
              maxLength={120}
              {...fieldAria('businessSector')}
            />
            {renderError('businessSector')}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="requirementType">
              {requiredLabel(t('requirementType'))}
            </label>
            <select
              id="requirementType"
              name="requirementType"
              value={formData.requirementType}
              onChange={handleChange}
              className={inputClass}
              {...fieldAria('requirementType')}
            >
              <option value="">{t('selectrequirementType')}</option>
              {['development', 'support', 'saas', 'bot', 'ai', 'microsoft', 'other'].map((option) => (
                <option key={option} value={option}>{t(option)}</option>
              ))}
            </select>
            {renderError('requirementType')}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="contactType">
              {requiredLabel(t('contactType'))}
            </label>
            <select
              id="contactType"
              name="contactType"
              value={formData.contactType}
              onChange={handleChange}
              className={inputClass}
              {...fieldAria('contactType')}
            >
              <option value="">{t('selectcontactType')}</option>
              {['Phone', 'Email'].map((option) => (
                <option key={option} value={option}>{t(option)}</option>
              ))}
            </select>
            {renderError('contactType')}
          </div>

          {formData.contactType === 'Phone' && (
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="phone">
                {requiredLabel(t('Phone'))}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
                maxLength={20}
                autoComplete="tel"
                {...fieldAria('phone')}
              />
              {renderError('phone')}
            </div>
          )}

          {formData.contactType === 'Email' && (
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                {requiredLabel(t('Email'))}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                maxLength={254}
                autoComplete="email"
                {...fieldAria('email')}
              />
              {renderError('email')}
            </div>
          )}

          {formError && (
            <p className="text-error text-sm" role="alert">
              {formError}
            </p>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-deep-slate text-card-surface rounded-lg shadow-md hover:bg-mid-slate disabled:opacity-60 transform hover:scale-105 transition-[box-shadow,transform,background-color] duration-300 ease-smooth focus-visible:ring-2 focus-visible:ring-deep-slate focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {isSubmitting ? t('sending') : t('submit')}
            </button>
          </div>
        </form>
      </section>

      <section className="mt-8 text-center">
        <p className="text-lg text-mid-slate">{t('orContactUs')}</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-4">
          <a
            href="mailto:Sunday.Software.Solutions@gmail.com"
            className="flex items-center gap-2 py-3 rounded text-deep-slate hover:text-muted-ink transition-colors duration-200 ease-smooth focus-visible:ring-2 focus-visible:ring-deep-slate focus-visible:ring-offset-2 focus-visible:outline-none break-all"
          >
            <AiOutlineMail size={24} aria-hidden="true" /> Sunday.Software.Solutions@gmail.com
          </a>
          <a
            href="https://wa.me/+526865254888"
            className="flex items-center gap-2 py-3 rounded text-deep-slate hover:text-muted-ink transition-colors duration-200 ease-smooth focus-visible:ring-2 focus-visible:ring-deep-slate focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <FaWhatsapp size={24} className="text-support-green" aria-hidden="true" /> +52 686 525 4888
          </a>
        </div>
      </section>

      {showModal && (
        <div
          ref={dialogRef}
          className="fixed inset-0 bg-overlay flex justify-center items-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          aria-describedby="success-message"
        >
          <div className="bg-mid-slate p-6 rounded-lg max-w-sm w-full mx-4 text-center shadow-lg relative">
            <button
              id="success-close"
              type="button"
              onClick={closeAndRedirect}
              aria-label={t('close')}
              className="absolute top-1 right-1 p-2 min-h-11 min-w-11 flex items-center justify-center text-ash hover:text-card-surface transition-colors duration-200 ease-smooth focus-visible:ring-2 focus-visible:ring-card-surface focus-visible:outline-none"
            >
              <AiOutlineClose size={20} aria-hidden="true" />
            </button>
            <h2 id="success-title" className="text-card-surface text-xl font-semibold mb-4">{t('thankYouTitle')}</h2>
            <p id="success-message" className="text-ash">{t('thankYouMessage')}</p>
          </div>
        </div>
      )}
    </div>
  );
}