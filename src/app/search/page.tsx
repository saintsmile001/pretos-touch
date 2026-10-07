import React from 'react';
import type { Metadata } from 'next';
import { getProducts } from '@/lib/services/product-service';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { EmptyState } from '@/components/ui/EmptyState';
import { Search as SearchIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Search Catalog',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || '';
  const products = query ? await getProducts({ search: query }) : [];
  const bestSellers = await getProducts({ collectionSlug: 'best-sellers' });

  return (
    <div className="pb-16 sm:pb-24">
      <Breadcrumbs items={[{ name: 'Search', url: '/search' }]} />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Search Header */}
        <div className="max-w-2xl mb-8">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-text-main">
            {query ? `Search Results for "${query}"` : 'Search Our Catalog'}
          </h1>
          {query && (
            <p className="text-xs sm:text-sm text-text-muted mt-1">
              Found {products.length} {products.length === 1 ? 'item' : 'items'} matching your query
            </p>
          )}
        </div>

        {/* Results */}
        {products.length > 0 ? (
          <ProductGrid products={products} columns={4} />
        ) : (
          <div className="space-y-12">
            <EmptyState
              icon={<SearchIcon className="w-8 h-8" />}
              title={query ? `No results found for "${query}"` : 'Type a query to search'}
              description="Try searching for 'postpartum', 'baby nail trimmer', 'menstrual belt', or 'kiss bra'."
              actionText="Browse All Products"
              actionHref="/shop"
            />

            {/* Popular recommendations below empty search */}
            <div>
              <h2 className="text-xl font-serif font-bold text-text-main mb-6">
                Popular Essentials You Might Like
              </h2>
              <ProductGrid products={bestSellers.slice(0, 4)} columns={4} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
