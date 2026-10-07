import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { RotateCcw, ShieldCheck, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Returns & Exchanges Policy',
  description:
    'Pretos Touch return policy, hygiene restrictions for intimate items, exchange procedures, and warranty terms.',
};

export default function ReturnsPage() {
  return (
    <div className="pb-16 sm:pb-24">
      <Breadcrumbs items={[{ name: 'Returns & Exchanges', url: '/returns' }]} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand">Customer Care</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-text-main mt-1">
            Returns & Exchanges Policy
          </h1>
          <p className="text-sm text-text-muted mt-2 leading-relaxed">
            Your satisfaction and confidence are paramount. Please review our product return and hygiene guidelines below.
          </p>
        </div>

        <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border space-y-6 text-xs sm:text-sm text-text-muted leading-relaxed">
          <section className="space-y-2">
            <h3 className="font-serif font-bold text-base text-text-main">1. Eligibility Window</h3>
            <p>
              Items with manufacturing defects or incorrect sizes may be reported for exchange within <strong>48 hours</strong> of delivery.
            </p>
          </section>

          <section className="space-y-2 border-t border-border pt-4">
            <div className="flex items-center gap-2 text-brand font-semibold">
              <AlertCircle className="w-4 h-4" />
              <span>2. Hygiene & Safety Restrictions for Intimate Items</span>
            </div>
            <p>
              Due to strict health and hygiene standards, wearable intimate garments (such as adhesive bras, postpartum belts, and wireless bras) must remain completely unworn with original hygiene seals, tags, and protective plastic intact to be eligible for return or exchange.
            </p>
          </section>

          <section className="space-y-2 border-t border-border pt-4">
            <h3 className="font-serif font-bold text-base text-text-main">3. Defective Electronic Items</h3>
            <p>
              Electronic grooming devices (such as the Baby Electric Nail Trimmer and Menstrual Heating Belt) come with a 7-day replacement warranty for technical or motor defects when reported in original packaging.
            </p>
          </section>

          <section className="space-y-2 border-t border-border pt-4">
            <h3 className="font-serif font-bold text-base text-text-main">4. How to Request an Exchange</h3>
            <p>
              Simply send a WhatsApp message to our customer care team with your order number and photos/video of the item. We will arrange a replacement promptly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
