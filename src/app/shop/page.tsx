import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getProducts } from '@/lib/services/product-service';
import { getCategories } from '@/lib/services/category-service';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Shop All Wellness & Care Essentials',
  description:
    'Discover our full range of postpartum belts, electric baby nail trimmers, wireless comfort bras, and menstrual heating belts in Nigeria.',
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: { sort?: 'featured' | 'price-asc' | 'price-desc' | 'rating'; category?: string };
}) {
  const categories = await getCategories();
  const products = await getProducts({
    categorySlug: searchParams.category,
    sort: searchParams.sort,
  });

  return (
    <div className="pb-16 sm:pb-24">
      <Breadcrumbs items={[{ name: 'Shop All', url: '/shop' }]} />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Pretos Touch Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-text-main mt-1">
            Shop All Essentials
          </h1>
          <p className="text-sm text-text-muted mt-2 leading-relaxed">
            Everyday confidence, postpartum recovery, baby grooming, and comforting wellness products thoughtfully crafted for Nigerian homes.
          </p>
        </div>

        {/* Category Shortcuts Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 scrollbar-none">
          <Link
            href="/shop"
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
              !searchParams.category
                ? 'bg-brand text-white shadow-sm'
                : 'bg-surface border border-border text-text-main hover:bg-brand-soft'
            }`}
          >
            All ({products.length})
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/collections/${cat.slug}`}
              className="px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap bg-surface border border-border text-text-main hover:bg-brand-soft transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Product Count & Sort Bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-border text-xs text-text-muted">
          <span>Showing {products.length} products</span>
          <div className="flex items-center gap-2">
            <span>Sort:</span>
            <span className="font-semibold text-text-main">Curated Essentials</span>
          </div>
        </div>

        {/* Grid */}
        <ProductGrid products={products} columns={4} />
      </div>
    </div>
  );
}
