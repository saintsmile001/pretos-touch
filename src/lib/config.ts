import { SiteSettings } from '@/types';

export const siteConfig: SiteSettings = {
  brandName: 'Pretos Touch',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://pretostouch.com',
  currency: process.env.NEXT_PUBLIC_CURRENCY || 'NGN',
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || '[BUSINESS_EMAIL]',
  supportPhone: process.env.NEXT_PUBLIC_SUPPORT_PHONE || '[BUSINESS_PHONE]',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '[WHATSAPP_NUMBER]',
  businessAddress: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || 'Lagos, Nigeria',
  socialLinks: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '[SOCIAL_INSTAGRAM_URL]',
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || '[SOCIAL_TIKTOK_URL]',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || '[SOCIAL_FACEBOOK_URL]',
  },
  deliveryPolicy:
    'Reliable nationwide delivery across Lagos and all Nigerian states. Timelines and delivery rates calculated at checkout or confirmed via WhatsApp support.',
  returnPolicy:
    'Customer satisfaction is our priority. For hygiene and wellness products, items must be in original, unopened packaging. Contact our customer care within the specified policy window for support.',
};

export function isConfigured(value?: string): boolean {
  if (!value) return false;
  return !value.startsWith('[') && !value.endsWith(']');
}
