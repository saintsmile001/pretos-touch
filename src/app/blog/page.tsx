import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticles } from '@/lib/services/article-service';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wellness Guides & Practical Advice',
  description:
    'Educational articles on postpartum recovery, safe baby nail grooming, menstrual comfort, and bra fitting guides from Pretos Touch.',
};

import Image from 'next/image';

export default async function BlogPage() {
  const articles = await getArticles();
  const featured = articles[0];
  const regularArticles = articles.slice(1);

  return (
    <div className="pb-16 sm:pb-24">
      <Breadcrumbs items={[{ name: 'Wellness Guides', url: '/blog' }]} />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Pretos Touch Editorial
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-text-main mt-1">
            Practical Wellness Guides
          </h1>
          <p className="text-sm text-text-muted mt-2 leading-relaxed">
            Evidence-based, practical tips to support comfort, confidence, and peace of mind for mothers and women in Nigeria.
          </p>
        </div>

        {/* Featured Guide Banner */}
        {featured && (
          <div className="bg-gradient-to-r from-brand-soft/80 via-brand-soft/40 to-background rounded-3xl p-6 sm:p-10 border border-border mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="brand">{featured.category}</Badge>
                {featured.readingTimeMinutes && (
                  <span className="text-xs text-text-muted flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readingTimeMinutes} min read
                  </span>
                )}
              </div>

              <Link href={`/blog/${featured.slug}`} className="block">
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-text-main hover:text-brand transition-colors leading-snug">
                  {featured.title}
                </h2>
              </Link>

              <p className="text-sm text-text-muted leading-relaxed max-w-2xl">
                {featured.excerpt}
              </p>

              <div className="pt-2">
                <Link
                  href={`/blog/${featured.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand text-white text-xs font-semibold hover:bg-brand-dark transition-colors shadow-sm"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            {featured.featuredImage?.url && (
              <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={featured.featuredImage.url}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {regularArticles.map((article) => (
            <article
              key={article.id}
              className="bg-surface rounded-2xl border border-border overflow-hidden flex flex-col justify-between hover:shadow-md transition-all group"
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
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
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
                    <h3 className="font-serif font-bold text-lg text-text-main hover:text-brand transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-text-muted mt-2.5 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-border/60">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
