'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { initialReviews, initialProducts } from '@/data/seed-data';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/context/toast-context';
import { Star, CheckCircle2, MessageSquarePlus, Sparkles } from 'lucide-react';

export default function ReviewsPage() {
  const { showToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', product: initialProducts[0].name, rating: 5, review: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Thank you! Your review has been submitted for moderation.');
    setIsModalOpen(false);
    setFormData({ name: '', product: initialProducts[0].name, rating: 5, review: '' });
  };

  return (
    <div className="pb-16 sm:pb-24">
      <Breadcrumbs items={[{ name: 'Customer Reviews', url: '/reviews' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-border gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">Real Experiences</span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-text-main mt-1">
              Customer Reviews
            </h1>
            <p className="text-sm text-text-muted mt-1">
              Read authentic feedback from mothers and women using Pretos Touch essentials.
            </p>
          </div>

          <Button variant="primary" size="md" onClick={() => setIsModalOpen(true)}>
            <MessageSquarePlus className="w-4 h-4" />
            <span>Write a Review</span>
          </Button>
        </div>

        {/* Rating Overview Summary Box */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 my-10 bg-surface rounded-3xl p-6 sm:p-8 border border-border items-center">
          <div className="sm:col-span-4 text-center sm:border-r sm:border-border sm:pr-8">
            <span className="text-5xl font-extrabold font-serif text-brand block">4.8</span>
            <div className="flex items-center justify-center text-amber-500 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs text-text-muted block">Based on verified customer feedback</span>
          </div>

          <div className="sm:col-span-8 space-y-2 text-xs">
            <div className="flex items-center gap-3">
              <span className="w-12 font-semibold">5 Stars</span>
              <div className="flex-1 h-2 bg-background rounded-full overflow-hidden border border-border">
                <div className="w-[88%] h-full bg-brand rounded-full" />
              </div>
              <span className="text-text-muted w-8 text-right">88%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 font-semibold">4 Stars</span>
              <div className="flex-1 h-2 bg-background rounded-full overflow-hidden border border-border">
                <div className="w-[10%] h-full bg-brand rounded-full" />
              </div>
              <span className="text-text-muted w-8 text-right">10%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 font-semibold">3 Stars</span>
              <div className="flex-1 h-2 bg-background rounded-full overflow-hidden border border-border">
                <div className="w-[2%] h-full bg-brand rounded-full" />
              </div>
              <span className="text-text-muted w-8 text-right">2%</span>
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {initialReviews.map((rev) => {
            const product = initialProducts.find((p) => p.id === rev.productId);
            return (
              <div key={rev.id} className="bg-surface rounded-2xl p-6 sm:p-8 border border-border space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {rev.verifiedPurchase && (
                    <span className="text-xs text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Purchase
                    </span>
                  )}
                </div>

                {rev.title && <h3 className="text-base font-bold text-text-main">&quot;{rev.title}&quot;</h3>}
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed italic">&quot;{rev.body}&quot;</p>

                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs text-text-muted">
                  <span className="font-bold text-text-main">{rev.customerName}</span>
                  {product && (
                    <Link href={`/products/${product.slug}`} className="text-brand font-medium hover:underline">
                      Purchased: {product.name}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Review Modal Form */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-surface rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-border shadow-2xl space-y-4">
              <h3 className="text-lg font-serif font-bold text-text-main">Leave a Product Review</h3>
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold mb-1">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-border bg-background focus:ring-2 focus:ring-brand"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Select Product</label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-border bg-background focus:ring-2 focus:ring-brand"
                  >
                    {initialProducts.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1">Rating</label>
                  <select
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                    className="w-full px-3.5 py-2 rounded-xl border border-border bg-background focus:ring-2 focus:ring-brand"
                  >
                    <option value={5}>5 Stars (Excellent)</option>
                    <option value={4}>4 Stars (Very Good)</option>
                    <option value={3}>3 Stars (Average)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1">Your Review</label>
                  <textarea
                    rows={3}
                    value={formData.review}
                    onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-border bg-background focus:ring-2 focus:ring-brand"
                    required
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <Button type="button" variant="outline" size="sm" onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" size="sm">
                    Submit Review
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
