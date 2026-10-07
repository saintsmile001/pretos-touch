import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Truck, Clock, ShieldCheck, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shipping & Delivery Policy in Nigeria',
  description:
    'Pretos Touch delivery timelines, dispatch process, delivery fees across Lagos and other Nigerian states.',
};

export default function ShippingPage() {
  return (
    <div className="pb-16 sm:pb-24">
      <Breadcrumbs items={[{ name: 'Shipping Policy', url: '/shipping' }]} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand">Delivery Information</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-text-main mt-1">
            Shipping & Nationwide Delivery
          </h1>
          <p className="text-sm text-text-muted mt-2 leading-relaxed">
            We partner with reliable courier partners to ensure your wellness essentials arrive safely and promptly anywhere in Nigeria.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-surface rounded-2xl p-6 border border-border space-y-2">
            <div className="flex items-center gap-2 text-brand font-semibold text-sm">
              <Clock className="w-4 h-4" />
              <span>Lagos Deliveries</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              Typically delivered within <strong>24 to 48 hours</strong> following order confirmation.
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-6 border border-border space-y-2">
            <div className="flex items-center gap-2 text-brand font-semibold text-sm">
              <MapPin className="w-4 h-4" />
              <span>Nationwide States</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              Delivered within <strong>2 to 4 business days</strong> with tracking notifications to Abuja, Rivers, Oyo, Kano, and all states.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border space-y-6 text-xs sm:text-sm text-text-muted leading-relaxed">
          <section className="space-y-2">
            <h3 className="font-serif font-bold text-base text-text-main">1. Order Processing Time</h3>
            <p>
              All orders are processed and packed within 24 hours of confirmation. Orders placed on Sundays or public holidays are processed the next business day.
            </p>
          </section>

          <section className="space-y-2 border-t border-border pt-4">
            <h3 className="font-serif font-bold text-base text-text-main">2. Delivery Rates</h3>
            <p>
              Delivery fees are calculated based on your destination:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Lagos Mainland & Island: ~₦2,500</li>
              <li>Other Nigerian States: ~₦4,500</li>
            </ul>
          </section>

          <section className="space-y-2 border-t border-border pt-4">
            <h3 className="font-serif font-bold text-base text-text-main">3. Discreet Packaging</h3>
            <p>
              For your privacy and peace of mind, all postpartum garments, menstrual belts, and bras are shipped in opaque, unmarked exterior packaging.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
