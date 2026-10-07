import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Pretos Touch terms of service, customer agreement, and online shopping terms.',
};

export default function TermsPage() {
  return (
    <div className="pb-16 sm:pb-24">
      <Breadcrumbs items={[{ name: 'Terms & Conditions', url: '/terms' }]} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand">Legal & Usage</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-text-main mt-1">
            Terms of Service
          </h1>
          <p className="text-xs text-text-muted mt-2">Last updated: {new Date().getFullYear()}</p>
        </div>

        <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border space-y-6 text-xs sm:text-sm text-text-muted leading-relaxed">
          <section className="space-y-2">
            <h3 className="font-serif font-bold text-base text-text-main">1. General Overview</h3>
            <p>
              By visiting our website and purchasing products from Pretos Touch, you agree to comply with and be bound by the following terms and conditions.
            </p>
          </section>

          <section className="space-y-2 border-t border-border pt-4">
            <h3 className="font-serif font-bold text-base text-text-main">2. Product Descriptions & Pricing</h3>
            <p>
              We endeavor to describe all products accurately. Prices for our products are in Nigerian Naira (NGN) and are subject to change without prior notice.
            </p>
          </section>

          <section className="space-y-2 border-t border-border pt-4">
            <h3 className="font-serif font-bold text-base text-text-main">3. Health & Wellness Guidance</h3>
            <p>
              Pretos Touch products are designed for everyday wellness, recovery, and support. Content provided on this site is for informational purposes and should not be construed as clinical medical advice. Always consult your qualified healthcare provider for specific medical recovery plans.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
