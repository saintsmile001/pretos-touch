import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Heart, Sparkles, ShieldCheck, Truck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Pretos Touch | Comfort, Confidence & Care',
  description:
    'Learn about Pretos Touch—our mission to support women and families with thoughtfully selected wellness, postpartum recovery, and everyday care essentials in Nigeria.',
};

export default function AboutPage() {
  return (
    <div className="pb-16 sm:pb-24">
      <Breadcrumbs items={[{ name: 'About Us', url: '/about' }]} />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center space-y-4 py-8 sm:py-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Our Story & Philosophy
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-text-main leading-tight">
            Everyday Care & Confidence, Crafted for You
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Pretos Touch was built on a simple premise: everyday wellness, postpartum recovery, and baby care should feel comfortable, reassuring, and readily accessible.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 max-w-5xl mx-auto">
          <div className="bg-surface rounded-3xl p-8 border border-border space-y-3">
            <div className="p-3 bg-brand-soft rounded-2xl text-brand w-fit">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-text-main">Care First</h3>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              We select every product with empathy, focusing on the real physical comfort needs of postpartum mothers and modern women.
            </p>
          </div>

          <div className="bg-surface rounded-3xl p-8 border border-border space-y-3">
            <div className="p-3 bg-brand-soft rounded-2xl text-brand w-fit">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-text-main">Tested Quality</h3>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              No shortcuts. We prioritize gentle, skin-friendly fabrics, reliable micro-motors, and durable fastenings suited for Nigerian climates.
            </p>
          </div>

          <div className="bg-surface rounded-3xl p-8 border border-border space-y-3">
            <div className="p-3 bg-brand-soft rounded-2xl text-brand w-fit">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-text-main">Effortless Shopping</h3>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              From online checkout to direct WhatsApp assistance, we make ordering fast, transparent, and hassle-free.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-brand-soft/40 rounded-3xl p-8 sm:p-12 border border-border max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-text-main">
            &quot;Helping women and families feel more comfortable, confident, cared for, and prepared.&quot;
          </h2>
          <div className="pt-2">
            <Link href="/shop">
              <Button variant="primary" size="lg">
                <span>Explore Our Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
