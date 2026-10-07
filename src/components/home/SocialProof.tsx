import React from 'react';
import Link from 'next/link';
import { initialReviews, initialProducts } from '@/data/seed-data';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';

export function SocialProof() {
  return (
    <section className="py-16 sm:py-24 bg-surface">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Real Experiences
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-text-main mt-1">
              Loved by Mothers & Women
            </h2>
          </div>
          <Link
            href="/reviews"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
          >
            <span>Read All Verified Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initialReviews.map((rev) => {
            const product = initialProducts.find((p) => p.id === rev.productId);
            return (
              <div
                key={rev.id}
                className="bg-background rounded-2xl p-6 border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {rev.title && (
                    <h3 className="font-semibold text-sm text-text-main mb-2">
                      &quot;{rev.title}&quot;
                    </h3>
                  )}
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed italic">
                    &quot;{rev.body}&quot;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-text-main block">{rev.customerName}</span>
                    {product && (
                      <span className="text-[11px] text-brand line-clamp-1">{product.name}</span>
                    )}
                  </div>
                  {rev.verifiedPurchase && (
                    <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1 font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
