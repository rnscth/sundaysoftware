const DEFAULT_PHONE = '+01 555 666 7777';

export const CONTACT_PHONE = process.env.CONTACT_PHONE?.trim() || DEFAULT_PHONE;

const digits = CONTACT_PHONE.replace(/\D/g, '');

export const CONTACT_WHATSAPP_URL = `https://wa.me/${digits}`;