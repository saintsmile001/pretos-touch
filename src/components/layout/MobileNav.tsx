'use client';

import React from 'react';
import Link from 'next/link';
import { X, ChevronRight, ShoppingBag, HeartHandshake, Baby, Sparkles, BookOpen, HelpCircle, Phone } from 'lucide-react';
import { initialCategories } from '@/data/seed-data';

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-surface shadow-2xl flex flex-col z-50 transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <Link href="/" onClick={onClose} className="font-serif font-bold text-xl text-brand">
            Pretos Touch
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-text-muted hover:text-text-main hover:bg-background"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <div>
            <div className="text-xs font-semibold text-text-muted uppercase tracking-wider px-3 mb-2">
              Collections
            </div>
            <nav className="space-y-1">
              <Link
                href="/shop"
                onClick={onClose}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-text-main hover:bg-brand-soft hover:text-brand transition-colors"
              >
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-4 h-4 text-brand" />
                  <span>All Products</span>
                </div>
                <ChevronRight className="w-4 h-4 text-text-muted" />
              </Link>
              {initialCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/collections/${cat.slug}`}
                  onClick={onClose}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-text-main hover:bg-brand-soft hover:text-brand transition-colors"
                >
                  <span>{cat.name}</span>
                  <ChevronRight className="w-4 h-4 text-text-muted" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t border-border pt-4">
            <div className="text-xs font-semibold text-text-muted uppercase tracking-wider px-3 mb-2">
              Explore & Support
            </div>
            <nav className="space-y-1">
              <Link
                href="/blog"
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-text-main hover:bg-brand-soft hover:text-brand rounded-xl"
              >
                <BookOpen className="w-4 h-4 text-text-muted" />
                <span>Wellness Blog & Guides</span>
              </Link>
              <Link
                href="/about"
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-text-main hover:bg-brand-soft hover:text-brand rounded-xl"
              >
                <Sparkles className="w-4 h-4 text-text-muted" />
                <span>About Pretos Touch</span>
              </Link>
              <Link
                href="/faq"
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-text-main hover:bg-brand-soft hover:text-brand rounded-xl"
              >
                <HelpCircle className="w-4 h-4 text-text-muted" />
                <span>Frequently Asked Questions</span>
              </Link>
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-text-main hover:bg-brand-soft hover:text-brand rounded-xl"
              >
                <Phone className="w-4 h-4 text-text-muted" />
                <span>Contact & WhatsApp Support</span>
              </Link>
            </nav>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border bg-background/50">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand text-white font-medium text-sm shadow-sm hover:bg-brand-dark"
          >
            <Phone className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
