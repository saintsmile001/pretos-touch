import React from 'react';
import { Product } from '@/types';
import { ProductCard } from './ProductCard';

export interface RelatedProductsProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export function RelatedProducts({
  products,
  title = 'You Might Also Love',
  subtitle = 'Thoughtfully paired essentials for your wellness and everyday comfort.',
}: RelatedProductsProps) {
  if (!products || products.length === 0) return null;

  return (
    <section className="mt-16 sm:mt-24 pt-12 border-t border-border">
      <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-text-main tracking-tight">
          {title}
        </h2>
        {subtitle && <p className="text-sm text-text-muted mt-2">{subtitle}</p>}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
