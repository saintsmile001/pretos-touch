import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategoryBySlug, getCategories } from '@/lib/services/category-service';
import { getProducts } from '@/lib/services/product-service';
import { getArticles } from '@/lib/services/article-service';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Accordion } from '@/components/ui/Accordion';
import { ArrowRight, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const category = await getCategoryBySlug(params.slug);
  if (!category) return { title: 'Collection Not Found' };

  return {
    title: category.seo.title,
    description: category.seo.description,
    openGraph: {
      title: category.seo.title,
      description: category.seo.description,
    },
  };
}

export default async function CollectionPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = await getCategoryBySlug(params.slug);
  if (!category) notFound();

  const products = await getProducts({ categorySlug: params.slug });
  const allCategories = await getCategories();
  const relatedCategories = allCategories.filter((c) => c.slug !== params.slug);
  const articles = await getArticles(category.name);

  const categoryFaqs = [
    {
      id: 'faq-1',
      title: `How do I choose the best ${category.name} product for my needs?`,
      content:
        'Review individual product sizing guides and specifications. If you need personalized assistance, message our customer support team directly on WhatsApp for tailored recommendations.',
    },
    {
      id: 'faq-2',
      title: 'What are the delivery timelines in Nigeria?',
      content:
        'Orders within Lagos typically arrive in 24–48 hours. Deliveries to other Nigerian states usually take 2–4 business days with full parcel tracking.',
    },
    {
      id: 'faq-3',
      title: 'Can I place an order via WhatsApp?',
      content:
        'Yes! Every product page includes a direct "Order on WhatsApp" option that generates an instant order draft with your selected size and quantity.',
    },
  ];

  return (
    <div className="pb-16 sm:pb-24">
      <Breadcrumbs
        items={[
          { name: 'Shop', url: '/shop' },
          { name: category.name, url: `/collections/${category.slug}` },
        ]}
      />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Category Hero */}
        <div className="bg-gradient-to-r from-brand-soft/60 via-brand-soft/20 to-background rounded-3xl p-6 sm:p-10 border border-border mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Pretos Touch Collection
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-text-main mt-1 tracking-tight">
              {category.name}
            </h1>
            <p className="text-sm sm:text-base text-text-muted mt-3 leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border text-xs text-text-muted">
            <span>Showing {products.length} products</span>
          </div>

          <ProductGrid products={products} columns={4} />
        </section>

        {/* Category Buying Guide */}
        <section className="bg-surface rounded-3xl p-6 sm:p-10 border border-border mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Buying Guide & Practical Advice</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-text-main">
              Selecting the Right {category.name} Solution
            </h2>
            <p className="text-sm text-text-muted mt-3 leading-relaxed">
              When choosing items in our {category.name.toLowerCase()} range, prioritize breathable materials, ergonomic fit, and daily convenience. All our products are tested for everyday use under Nigerian weather conditions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border">
                <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-text-main">Accurate Sizing</h4>
                  <p className="text-xs text-text-muted mt-1">Check individual product measurements before ordering.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border">
                <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-text-main">Skin-Safe Materials</h4>
                  <p className="text-xs text-text-muted mt-1">Soft microfiber, breathable mesh, and gentle silicone adhesives.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16 max-w-3xl">
          <h2 className="text-2xl font-serif font-bold text-text-main mb-6">
            Frequently Asked Questions
          </h2>
          <Accordion items={categoryFaqs} />
        </section>

        {/* Related Educational Guides */}
        {articles.length > 0 && (
          <section className="mb-16 pt-12 border-t border-border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-serif font-bold text-text-main">
                Related {category.name} Guides
              </h2>
              <Link href="/blog" className="text-xs font-semibold text-brand hover:underline flex items-center gap-1">
                <span>View Blog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {articles.map((art) => (
                <Link
                  key={art.id}
                  href={`/blog/${art.slug}`}
                  className="p-5 rounded-2xl bg-surface border border-border hover:border-brand/40 transition-all flex items-start gap-3 group"
                >
                  <BookOpen className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-text-main group-hover:text-brand transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-xs text-text-muted mt-1 line-clamp-2">{art.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Categories */}
        <section className="pt-12 border-t border-border">
          <h2 className="text-xl font-serif font-bold text-text-main mb-6">
            Explore Other Collections
          </h2>
          <div className="flex flex-wrap gap-3">
            {relatedCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/collections/${cat.slug}`}
                className="px-5 py-2.5 rounded-xl bg-surface border border-border text-sm font-medium text-text-main hover:bg-brand-soft hover:text-brand transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
