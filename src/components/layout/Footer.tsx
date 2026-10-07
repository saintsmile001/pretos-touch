'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { initialCategories } from '@/data/seed-data';
import { siteConfig } from '@/lib/config';
import { trackEvent } from '@/lib/analytics';
import { useToast } from '@/context/toast-context';
import { MessageCircle, Mail, ShieldCheck, Truck, RefreshCw, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { showToast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }

    setIsSubscribing(true);
    try {
      trackEvent({
        name: 'newsletter_signup',
        params: { source: 'footer' },
      });
      showToast('Thank you for subscribing to Pretos Touch!');
      setEmail('');
    } catch {
      showToast('Subscription error. Please try again.', 'error');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-surface border-t border-border mt-16 sm:mt-24 text-text-main">
      {/* Trust Highlights Strip */}
      <div className="border-b border-border bg-background/50">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-brand-soft rounded-xl text-brand shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-main">Nationwide Delivery</h4>
                <p className="text-xs text-text-muted mt-0.5">Reliable dispatch across Lagos & all Nigerian states.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-brand-soft rounded-xl text-brand shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-main">Thoughtful Quality</h4>
                <p className="text-xs text-text-muted mt-0.5">Tested for comfort, skin friendliness, and durability.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-brand-soft rounded-xl text-brand shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-main">WhatsApp Support</h4>
                <p className="text-xs text-text-muted mt-0.5">Direct, friendly customer care for questions and sizing.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-brand-soft rounded-xl text-brand shrink-0">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-main">Customer First Care</h4>
                <p className="text-xs text-text-muted mt-0.5">Dedicated resolution support for every purchase.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="font-serif font-bold text-2xl text-brand tracking-tight">
              Pretos Touch
            </Link>
            <p className="text-sm text-text-muted leading-relaxed max-w-sm">
              Helping women and families feel more comfortable, confident, cared for, and prepared through thoughtfully selected everyday wellness and care products.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-soft text-brand-dark hover:bg-brand-soft/80 text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Support</span>
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-main mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/shop" className="text-text-muted hover:text-brand transition-colors">
                  All Products
                </Link>
              </li>
              {initialCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/collections/${cat.slug}`}
                    className="text-text-muted hover:text-brand transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-main mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/shipping" className="text-text-muted hover:text-brand transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-text-muted hover:text-brand transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-text-muted hover:text-brand transition-colors">
                  FAQ & Sizing
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-text-muted hover:text-brand transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-muted hover:text-brand transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-main mb-4">
              Stay Connected
            </h4>
            <p className="text-xs text-text-muted leading-relaxed mb-3">
              Subscribe for wellness guides, product updates, and exclusive customer discounts.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm text-text-main placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand"
                required
              />
              <Button type="submit" variant="primary" size="sm" className="w-full" isLoading={isSubscribing}>
                Join Community
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Pretos Touch. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-brand transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/about" className="hover:text-brand transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
