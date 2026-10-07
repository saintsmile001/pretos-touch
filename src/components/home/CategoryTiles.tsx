import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { initialCategories } from '@/data/seed-data';
import { ArrowRight } from 'lucide-react';

const categoryImages: Record<string, string> = {
  'postpartum-care': '/images/categories/postpartum-care.jpg',
  'womens-wellness': '/images/categories/womens-wellness.jpg',
  'bras-shapewear': '/images/categories/bras-shapewear.jpg',
  'baby-care': '/images/categories/baby-care.jpg',
  'beauty-personal-care': '/images/categories/beauty-personal-care.jpg',
};

export function CategoryTiles() {
  return (
    <section className="py-16 sm:py-24 bg-surface">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Curated Collections
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-text-main mt-1">
              Shop by Category
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {initialCategories.map((category) => {
            const imageUrl = categoryImages[category.slug] || categoryImages['postpartum-care'];
            return (
              <Link
                key={category.id}
                href={`/collections/${category.slug}`}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-background border border-border hover:shadow-md hover:border-brand/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 inset-x-3 text-white">
                    <h3 className="font-semibold text-sm sm:text-base leading-snug">
                      {category.name}
                    </h3>
                  </div>
                </div>
                <div className="p-3 text-xs text-text-muted line-clamp-2 leading-relaxed bg-surface flex-1">
                  {category.description}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
