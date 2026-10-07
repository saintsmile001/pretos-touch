# Pretos Touch — Environment & Configuration Contract

## Principle

Business-specific values must be configurable.

Never invent production credentials or business contact details.

## Suggested public configuration

```text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_CURRENCY=NGN

NEXT_PUBLIC_WHATSAPP_NUMBER=

NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_TIKTOK_URL=
NEXT_PUBLIC_FACEBOOK_URL=

NEXT_PUBLIC_ANALYTICS_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_TIKTOK_PIXEL_ID=
```

Only use variables relevant to the selected stack.

## Server-only configuration

Examples:

```text
DATABASE_URL=
PAYMENT_PROVIDER_SECRET=
PAYMENT_WEBHOOK_SECRET=
EMAIL_PROVIDER_API_KEY=
CMS_API_KEY=
```

Never expose server-only variables to browser bundles.

## Site settings model

Prefer a central configuration object:

```ts
type SiteSettings = {
  brandName: string;
  siteUrl: string;
  currency: string;
  supportEmail?: string;
  supportPhone?: string;
  whatsappNumber?: string;
  socialLinks: {
    instagram?: string;
    tiktok?: string;
    facebook?: string;
  };
};
```

## Placeholder policy

If a setting is missing:
- Hide the corresponding feature
- Show a clear development placeholder
- Do not fabricate a value

Example:
If WhatsApp number is missing, do not render a broken WhatsApp link.

## Production safety

Before production:
- Verify environment variables
- Verify payment credentials
- Verify webhook secrets
- Verify domain
- Verify analytics IDs
- Verify social URLs
- Verify business contact information
