import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { MessageCircle, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ)',
  description:
    'Common questions and answers regarding Pretos Touch products, sizing guides, nationwide delivery across Nigeria, and WhatsApp ordering.',
};

export default function FAQPage() {
  const orderingFaqs = [
    {
      id: 'ord-1',
      title: 'How do I place an order?',
      content:
        'You can order directly on our website by adding items to your bag and checking out, or by clicking "Order on WhatsApp" on any product page to chat directly with our sales team.',
    },
    {
      id: 'ord-2',
      title: 'What payment methods do you accept?',
      content:
        'We accept secure online debit/credit card payments, Nigerian bank transfers, and verified direct WhatsApp order payments.',
    },
    {
      id: 'ord-3',
      title: 'Can I pay on delivery?',
      content:
        'Pay on delivery may be available for selected locations in Lagos depending on courier schedule. Please confirm with our WhatsApp care team before placing your order.',
    },
  ];

  const deliveryFaqs = [
    {
      id: 'del-1',
      title: 'How long does delivery take in Nigeria?',
      content:
        'Deliveries within Lagos typically take 24–48 hours. Orders to Abuja, Rivers, Oyo, and all other states generally take 2–4 business days with trackable shipping.',
    },
    {
      id: 'del-2',
      title: 'How much is delivery?',
      content:
        'Standard Lagos delivery is approximately ₦2,500. Delivery to other states is approximately ₦4,500, calculated and confirmed clearly before dispatch.',
    },
  ];

  const productFaqs = [
    {
      id: 'prd-1',
      title: 'How do I choose the right size for the postpartum belt?',
      content:
        'Measure around the widest part of your belly/hips. If you are between sizes or right after childbirth, we recommend choosing one size up for comfortable, gradual adjustment.',
    },
    {
      id: 'prd-2',
      title: 'Is the Baby Electric Nail Trimmer safe for newborns?',
      content:
        'Yes! The kit includes an ultra-fine cushioned grinding head specifically designed for newborns aged 0–3 months that files softly without touching sensitive cuticles.',
    },
    {
      id: 'prd-3',
      title: 'How does the Menstrual Belt provide comfort?',
      content:
        'It combines continuous 3-second rapid heating (45°C–65°C) with gentle soothing vibration to promote circulation and relax tense lower abdominal muscles.',
    },
  ];

  return (
    <div className="pb-16 sm:pb-24">
      <Breadcrumbs items={[{ name: 'FAQ', url: '/faq' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">Help Center</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-text-main mt-1">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-text-muted mt-2">
            Everything you need to know about our products, delivery timelines, and ordering.
          </p>
        </div>

        <div className="space-y-12">
          {/* Section 1 */}
          <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border">
            <h2 className="text-xl font-serif font-bold text-text-main mb-4">
              Ordering & Payments
            </h2>
            <Accordion items={orderingFaqs} />
          </div>

          {/* Section 2 */}
          <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border">
            <h2 className="text-xl font-serif font-bold text-text-main mb-4">
              Nationwide Delivery & Timelines
            </h2>
            <Accordion items={deliveryFaqs} />
          </div>

          {/* Section 3 */}
          <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border">
            <h2 className="text-xl font-serif font-bold text-text-main mb-4">
              Products, Sizing & Care
            </h2>
            <Accordion items={productFaqs} />
          </div>
        </div>

        {/* Still have questions? */}
        <div className="mt-12 p-8 rounded-3xl bg-brand-soft/50 border border-border text-center space-y-4">
          <h3 className="font-serif font-bold text-xl text-text-main">
            Still have a question?
          </h3>
          <p className="text-xs sm:text-sm text-text-muted max-w-md mx-auto">
            Our customer care team is available on WhatsApp to answer your specific sizing and product questions.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button variant="whatsapp" size="md">
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Customer Care</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
