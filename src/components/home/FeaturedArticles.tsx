import React from 'react';
import Link from 'next/link';
import { initialArticles } from '@/data/seed-data';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

import Image from 'next/image';

export function FeaturedArticles() {
  return (
    <section className="py-16 sm:py-24 bg-background border-t border-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Knowledge & Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-text-main mt-1">
              Practical Guides & Wellness Tips
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {initialArticles.map((article) => (
            <article
              key={article.id}
              className="bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-md transition-all flex flex-col justify-between group"
            >
              {article.featuredImage?.url && (
                <Link href={`/blog/${article.slug}`} className="block relative aspect-[16/9] overflow-hidden bg-background">
                  <Image
                    src={article.featuredImage.url}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="brand">{article.category}</Badge>
                  {article.readingTimeMinutes && (
                    <span className="text-xs text-text-muted flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readingTimeMinutes} min read
                    </span>
                  )}
                </div>

                <Link href={`/blog/${article.slug}`}>
                  <h3 className="font-serif font-bold text-lg text-text-main group-hover:text-brand transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                </Link>

                <p className="text-xs sm:text-sm text-text-muted mt-2.5 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
