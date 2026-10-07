'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/context/toast-context';
import { siteConfig } from '@/lib/config';
import { MessageCircle, Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      showToast('Your message has been received! Our support team will get back to you shortly.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 600);
  };

  const handleWhatsAppChat = () => {
    const defaultMsg = encodeURIComponent('Hello Pretos Touch, I would like to inquire about your products and sizing.');
    window.open(`https://wa.me/?text=${defaultMsg}`, '_blank');
  };

  return (
    <div className="pb-16 sm:pb-24">
      <Breadcrumbs items={[{ name: 'Contact & Support', url: '/contact' }]} />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">We&apos;re Here to Help</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-text-main mt-1">
            Get in Touch
          </h1>
          <p className="text-sm text-text-muted mt-2 leading-relaxed">
            Have questions about product sizing, postpartum belts, order tracking, or wholesale? Send us a message or chat directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-surface rounded-3xl p-6 sm:p-8 border border-border space-y-6">
            <h2 className="text-lg font-serif font-bold text-text-main">
              Direct Support Channels
            </h2>

            <div className="space-y-4">
              <div
                onClick={handleWhatsAppChat}
                className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 cursor-pointer hover:bg-emerald-100/70 transition-colors flex items-start gap-3"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-emerald-950">WhatsApp Care Support</h4>
                  <p className="text-xs text-emerald-800 mt-0.5">Quickest for sizing help and immediate order confirmation.</p>
                  <span className="inline-block text-xs font-bold text-emerald-700 mt-2">Chat Now →</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-background border border-border flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-text-main">Email Support</h4>
                  <p className="text-xs text-text-muted mt-0.5">{siteConfig.supportEmail}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-background border border-border flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-text-main">Phone Line</h4>
                  <p className="text-xs text-text-muted mt-0.5">{siteConfig.supportPhone}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-background border border-border flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-text-main">Location & Operations</h4>
                  <p className="text-xs text-text-muted mt-0.5">{siteConfig.businessAddress}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-surface rounded-3xl p-6 sm:p-8 border border-border">
            <h2 className="text-lg font-serif font-bold text-text-main mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text-main mb-1">Your Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Chioma Adebayo"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-main mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 08012345678"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-main mb-1">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. chioma@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-main mb-1">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Postpartum Belt Sizing Question"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-main mb-1">Your Message *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                  required
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto" isLoading={isSubmitting}>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
