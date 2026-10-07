import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { initialCategories } from '@/data/seed-data';
import { Search, ShoppingBag, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-20 sm:py-32 max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-6xl sm:text-7xl font-serif font-extrabold text-brand block">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-text-main">
          Page Not Found
        </h1>
        <p className="text-sm text-text-muted leading-relaxed">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link href="/shop" className="w-full sm:w-auto">
            <Button variant="primary" size="md" className="w-full sm:w-auto">
              <ShoppingBag className="w-4 h-4" />
              <span>Browse Shop</span>
            </Button>
          </Link>
          <Link href="/" className="w-full sm:w-auto">
            <Button variant="outline" size="md" className="w-full sm:w-auto">
              <span>Return Home</span>
            </Button>
          </Link>
        </div>

        {/* Suggested Collections */}
        <div className="pt-8 border-t border-border text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-text-main mb-3 text-center">
            Popular Collections
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {initialCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/collections/${cat.slug}`}
                className="px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-medium text-text-main hover:bg-brand-soft hover:text-brand transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
