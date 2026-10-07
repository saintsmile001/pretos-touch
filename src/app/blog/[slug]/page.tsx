import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticleBySlug, getArticles } from '@/lib/services/article-service';
import { getProducts } from '@/lib/services/product-service';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getArticleJsonLd } from '@/lib/seo';
import { Clock, Calendar, BookOpen, ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: article.seo.title,
    description: article.seo.description,
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      type: 'article',
      publishedTime: article.publishedAt,
    },
  };
}

import Image from 'next/image';

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  const allArticles = await getArticles();
  const otherArticles = allArticles.filter((a) => a.id !== article.id).slice(0, 2);
  const products = await getProducts();
  const featuredProduct = products.find((p) => p.categoryId.includes(article.category.toLowerCase().replace(/[^a-z]/g, ''))) || products[0];

  const jsonLd = getArticleJsonLd(article);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pb-16 sm:pb-24">
        <Breadcrumbs
          items={[
            { name: 'Wellness Guides', url: '/blog' },
            { name: article.title, url: `/blog/${article.slug}` },
          ]}
        />

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          {/* Header */}
          <div className="space-y-4 pb-8 border-b border-border">
            <Badge variant="brand">{article.category}</Badge>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-text-main leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted pt-2">
              <span className="font-semibold text-text-main">
                By {article.authorName || 'Pretos Touch Team'}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(article.publishedAt).toLocaleDateString('en-NG', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
              {article.readingTimeMinutes && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readingTimeMinutes} min read
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Featured Image */}
          {article.featuredImage?.url && (
            <div className="my-8 relative aspect-[16/9] rounded-3xl overflow-hidden shadow-md">
              <Image
                src={article.featuredImage.url}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          )}

          {/* Article Excerpt */}
          <div className="py-6 text-base sm:text-lg text-text-muted font-serif italic leading-relaxed border-b border-border">
            &quot;{article.excerpt}&quot;
          </div>

          {/* Article Body Content */}
          <div className="py-8 space-y-6 text-sm sm:text-base text-text-main leading-relaxed">
            {article.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="font-serif font-bold text-2xl text-text-main mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="font-serif font-bold text-lg text-text-main mt-6 mb-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('> ')) {
                return (
                  <blockquote
                    key={index}
                    className="p-4 rounded-xl bg-brand-soft/60 border-l-4 border-brand text-brand-dark italic my-4 text-sm"
                  >
                    {paragraph.replace('> ', '')}
                  </blockquote>
                );
              }
              return <p key={index} className="text-text-muted leading-relaxed">{paragraph}</p>;
            })}
          </div>

          {/* Contextual Product Recommendation Banner */}
          {featuredProduct && (
            <div className="my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-soft/70 to-surface border border-brand/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Recommended Product</span>
                </span>
                <h3 className="font-serif font-bold text-xl text-text-main">
                  {featuredProduct.name}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted max-w-md">
                  {featuredProduct.shortDescription}
                </p>
              </div>
              <Link href={`/products/${featuredProduct.slug}`} className="shrink-0 w-full sm:w-auto">
                <Button variant="primary" size="md" className="w-full sm:w-auto">
                  <ShoppingBag className="w-4 h-4" />
                  <span>View Product</span>
                </Button>
              </Link>
            </div>
          )}

          {/* Related Articles */}
          {otherArticles.length > 0 && (
            <div className="pt-12 mt-12 border-t border-border">
              <h2 className="font-serif font-bold text-2xl text-text-main mb-6">
                Read Next
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherArticles.map((art) => (
                  <Link
                    key={art.id}
                    href={`/blog/${art.slug}`}
                    className="p-5 rounded-2xl bg-surface border border-border hover:border-brand/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <Badge variant="brand" className="mb-2">{art.category}</Badge>
                      <h4 className="text-sm font-semibold text-text-main group-hover:text-brand transition-colors">
                        {art.title}
                      </h4>
                    </div>
                    <span className="text-xs font-bold text-brand mt-4 flex items-center gap-1">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </>
  );
}
