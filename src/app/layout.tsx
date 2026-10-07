import type { Metadata } from 'next';
import './globals.css';
import { ToastProvider } from '@/context/toast-context';
import { CartProvider } from '@/context/cart-context';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getOrganizationSchema, getWebSiteSchema } from '@/lib/seo';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: 'Pretos Touch | Women’s Wellness, Postpartum & Everyday Care in Nigeria',
    template: '%s | Pretos Touch',
  },
  description:
    'Thoughtfully selected postpartum belts, gentle baby grooming tools, wireless bras, and everyday wellness essentials for women and families in Nigeria.',
  keywords: [
    'postpartum belt Nigeria',
    'baby electric nail trimmer',
    'menstrual belt Nigeria',
    'wireless bra Nigeria',
    'invisible push up bra',
    'womens wellness Nigeria',
    'Pretos Touch',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: siteConfig.siteUrl,
    siteName: siteConfig.brandName,
    title: 'Pretos Touch | Comfort, Confidence & Care',
    description:
      'Thoughtfully selected postpartum, baby-care and everyday wellness essentials for women and families in Nigeria.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pretos Touch | Women’s Wellness & Care in Nigeria',
    description:
      'Explore thoughtfully selected postpartum belts, gentle baby grooming tools, wireless bras, and everyday comfort products.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-background text-text-main selection:bg-brand-soft selection:text-brand-dark">
        <ToastProvider>
          <CartProvider>
            <AnnouncementBar />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
