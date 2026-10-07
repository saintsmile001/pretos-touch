import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles, Heart, ShieldCheck, Truck } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft/40 via-background to-background pt-8 pb-16 lg:py-24 border-b border-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-soft border border-brand/10 text-brand-dark text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-brand" />
              <span>Thoughtful Essentials for Modern Women & Families</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-main leading-[1.15]">
              Comfort, Confidence & Care —{' '}
              <span className="text-brand italic font-normal">Delivered to Your Door.</span>
            </h1>

            <p className="text-base sm:text-lg text-text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Thoughtfully selected wellness, postpartum recovery belts, gentle baby grooming, and seamless everyday confidence essentials for Nigerian homes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Link href="/shop" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  <span>Shop Best Sellers</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/collections/postpartum-care" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto font-medium">
                  <span>Postpartum Collection</span>
                </Button>
              </Link>
            </div>

            {/* Trust Mini Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/80 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-brand shrink-0" />
                <span className="text-xs font-medium text-text-muted">Fast Nigeria Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-brand shrink-0" />
                <span className="text-xs font-medium text-text-muted">Caring & Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand shrink-0" />
                <span className="text-xs font-medium text-text-muted">Direct WhatsApp Help</span>
              </div>
            </div>
          </div>

          {/* Lifestyle/Product Hero Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-surface">
              <Image
                src="/images/hero/hero-lifestyle.jpg"
                alt="Mother and newborn comfort essentials by Pretos Touch"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 inset-x-6 bg-surface/90 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-lg text-text-main">
                <p className="text-xs font-bold text-brand uppercase tracking-wider">
                  Featured Choice
                </p>
                <p className="text-sm font-semibold text-text-main mt-0.5">
                  Postpartum Belly Support Wrap
                </p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/60">
                  <span className="text-xs font-bold text-brand">₦18,500</span>
                  <Link
                    href="/products/postpartum-belt"
                    className="text-xs font-semibold text-brand hover:underline flex items-center gap-1"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
