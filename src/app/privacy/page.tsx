import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Pretos Touch customer privacy policy, data collection, and security practices.',
};

export default function PrivacyPage() {
  return (
    <div className="pb-16 sm:pb-24">
      <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy' }]} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand">Legal & Security</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-text-main mt-1">
            Privacy Policy
          </h1>
          <p className="text-xs text-text-muted mt-2">Last updated: {new Date().getFullYear()}</p>
        </div>

        <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border space-y-6 text-xs sm:text-sm text-text-muted leading-relaxed">
          <section className="space-y-2">
            <h3 className="font-serif font-bold text-base text-text-main">1. Information We Collect</h3>
            <p>
              When you purchase products or communicate with us on Pretos Touch, we collect personal information such as your name, shipping address, phone number, and email address solely for fulfilling orders and communicating dispatch updates.
            </p>
          </section>

          <section className="space-y-2 border-t border-border pt-4">
            <h3 className="font-serif font-bold text-base text-text-main">2. Payment Information</h3>
            <p>
              We do not store or process payment card numbers or banking passwords on our servers. All transactions are handled securely by accredited payment gateways with end-to-end encryption.
            </p>
          </section>

          <section className="space-y-2 border-t border-border pt-4">
            <h3 className="font-serif font-bold text-base text-text-main">3. Data Protection</h3>
            <p>
              Your personal data is never sold, rented, or shared with unauthorized third parties. Information is shared strictly with delivery couriers for delivery purposes only.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
