'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { AiOutlineClose } from 'react-icons/ai';

interface FormData {
  name: string;
  email: string;
  interest: string;
  message: string;
  website: string;
}

type FieldName = keyof FormData;
type Errors = Partial<Record<FieldName, string>>;

const initialFormData: FormData = {
  name: '',
  email: '',
  interest: '',
  message: '',
  website: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUIRED_FIELDS: FieldName[] = ['name', 'email', 'interest', 'message'];

export default function ContactForm() {
  const t = useTranslations('Contact');

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Errors>({});
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const abortControllerRef = useRef<AbortController | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const submitRef = useRef<HTMLButtonElement | null>(null);

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
        closeModal();
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
    for (const field of REQUIRED_FIELDS) {
      if (!formData[field].trim()) {
        errs[field] = t('requiredError');
      }
    }
    if (formData.email && !EMAIL_REGEX.test(formData.email.trim())) {
      errs.email = t('invalidEmailError');
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

  const closeModal = () => {
    setShowModal(false);
    submitRef.current?.focus();
  };

  const inputClass =
    'w-full rounded-lg bg-shell border border-line p-3 text-ink text-sm transition-colors duration-200 ease-smooth focus:border-midnight focus:ring-2 focus:ring-midnight focus:outline-none';

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
    <>
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="sr-only" aria-hidden="true">
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
          <label className="block text-sm font-medium mb-2 text-ink" htmlFor="name">
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
          <label className="block text-sm font-medium mb-2 text-ink" htmlFor="email">
            {requiredLabel(t('email'))}
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

        <div>
          <label className="block text-sm font-medium mb-2 text-ink" htmlFor="interest">
            {requiredLabel(t('interest'))}
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className={inputClass}
            {...fieldAria('interest')}
          >
            <option value="">{t('interestPlaceholder')}</option>
            <option value="bi">{t('interestBi')}</option>
            <option value="automation">{t('interestAuto')}</option>
            <option value="support">{t('interestSupport')}</option>
            <option value="other">{t('interestOther')}</option>
          </select>
          {renderError('interest')}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-ink" htmlFor="message">
            {requiredLabel(t('message'))}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={inputClass}
            rows={4}
            maxLength={3000}
            {...fieldAria('message')}
          />
          {renderError('message')}
        </div>

        {formError && (
          <p className="text-error text-sm" role="alert">
            {formError}
          </p>
        )}

        <button
          ref={submitRef}
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center min-h-11 rounded-full bg-midnight px-6 py-3 text-ivory font-semibold hover:bg-midnight-soft disabled:opacity-60 transition-[background-color,transform] duration-300 ease-smooth focus-visible:ring-2 focus-visible:ring-midnight focus-visible:ring-offset-2 focus-visible:ring-offset-ivory focus-visible:outline-none"
        >
          {isSubmitting ? t('sending') : t('submit')}
        </button>
      </form>

      {showModal && (
        <div
          ref={dialogRef}
          className="fixed inset-0 bg-overlay flex justify-center items-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          aria-describedby="success-message"
        >
          <div className="bg-midnight-raised p-6 rounded-2xl max-w-sm w-full mx-4 text-center relative">
            <button
              id="success-close"
              type="button"
              onClick={closeModal}
              aria-label={t('close')}
              className="absolute top-2 right-2 p-2 min-h-11 min-w-11 flex items-center justify-center text-ivory-muted hover:text-ivory transition-colors duration-200 ease-smooth rounded focus-visible:ring-2 focus-visible:ring-sunburst focus-visible:outline-none"
            >
              <AiOutlineClose size={20} aria-hidden="true" />
            </button>
            <h2 id="success-title" className="text-ivory text-xl font-semibold mb-3 font-display">
              {t('thankYouTitle')}
            </h2>
            <p id="success-message" className="text-ivory-muted">
              {t('thankYouMessage')}
            </p>
          </div>
        </div>
      )}
    </>
  );
}