import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, getRelatedProducts } from '@/lib/services/product-service';
import { getCategoryBySlug } from '@/lib/services/category-service';
import { initialReviews } from '@/data/seed-data';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductPurchasePanel } from '@/components/product/ProductPurchasePanel';
import { MobileStickyPurchaseBar } from '@/components/product/MobileStickyPurchaseBar';
import { RelatedProducts } from '@/components/product/RelatedProducts';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Accordion } from '@/components/ui/Accordion';
import { getProductJsonLd } from '@/lib/seo';
import { Star, CheckCircle2, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: product.seo.title,
    description: product.seo.description,
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      images: product.images.map((img) => img.url),
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();

  const category = await getCategoryBySlug(product.categoryId.replace('cat-', ''));
  const relatedProducts = await getRelatedProducts(product.id, 4);
  const reviews = initialReviews.filter((r) => r.productId === product.id);

  const jsonLd = getProductJsonLd(product);

  const accordionItems = [
    {
      id: 'features-specifications',
      title: 'Features & Specifications',
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-text-muted">
            {product.features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>
          <div className="border-t border-border pt-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-main mb-2">
              Specifications
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {Object.entries(product.specifications).map(([key, val]) => (
                <div key={key} className="p-2.5 rounded-lg bg-background border border-border">
                  <span className="font-semibold text-text-main block">{key}</span>
                  <span className="text-text-muted">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'how-to-use',
      title: 'How to Use & Care Instructions',
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-text-muted">
          {product.howToUse && (
            <div>
              <span className="font-semibold text-text-main block mb-1">How to Use:</span>
              <p>{product.howToUse}</p>
            </div>
          )}
          {product.careInstructions && (
            <div className="border-t border-border pt-2">
              <span className="font-semibold text-text-main block mb-1">Care & Maintenance:</span>
              <p>{product.careInstructions}</p>
            </div>
          )}
        </div>
      ),
    },
    {
      id: 'shipping-returns',
      title: 'Shipping & Returns in Nigeria',
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-text-muted">
          <div className="flex items-start gap-2">
            <Truck className="w-4 h-4 text-brand shrink-0 mt-0.5" />
            <p>{product.shippingInfo || 'Nationwide delivery across Nigeria.'}</p>
          </div>
          <div className="flex items-start gap-2 border-t border-border pt-2">
            <RotateCcw className="w-4 h-4 text-brand shrink-0 mt-0.5" />
            <p>{product.returnInfo || 'Customer satisfaction guaranteed.'}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'faqs',
      title: `Frequently Asked Questions (${product.faqs.length})`,
      content: (
        <div className="space-y-4 text-xs sm:text-sm">
          {product.faqs.map((faq, idx) => (
            <div key={idx} className="space-y-1">
              <p className="font-semibold text-text-main">{faq.question}</p>
              <p className="text-text-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pb-24 sm:pb-32">
        <Breadcrumbs
          items={[
            { name: 'Shop', url: '/shop' },
            ...(category ? [{ name: category.name, url: `/collections/${category.slug}` }] : []),
            { name: product.name, url: `/products/${product.slug}` },
          ]}
        />

        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          {/* Main 2-Column Product Purchase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Gallery Column */}
            <div className="lg:col-span-7">
              <ProductGallery images={product.images} productName={product.name} />
            </div>

            {/* Purchase Panel Column */}
            <div className="lg:col-span-5">
              <ProductPurchasePanel product={product} />
            </div>
          </div>

          {/* Structured Product Details Section */}
          <section className="mt-16 sm:mt-24 pt-12 border-t border-border max-w-4xl">
            <h2 className="text-2xl font-serif font-bold text-text-main mb-6">
              Product Overview & Details
            </h2>
            <div className="prose prose-stone text-sm text-text-muted leading-relaxed mb-8">
              <p>{product.description}</p>
            </div>

            <Accordion items={accordionItems} defaultOpenIds={['features-specifications']} />
          </section>

          {/* Customer Reviews Section */}
          <section className="mt-16 sm:mt-24 pt-12 border-t border-border max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-serif font-bold text-text-main">
                  Customer Reviews
                </h2>
                {product.ratingAverage && (
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.ratingAverage!)
                              ? 'fill-amber-400'
                              : 'text-stone-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-text-main">
                      {product.ratingAverage} out of 5
                    </span>
                    <span className="text-xs text-text-muted">
                      ({product.reviewCount} verified reviews)
                    </span>
                  </div>
                )}
              </div>
            </div>

            {reviews.length > 0 ? (
              <div className="space-y-4">
                {reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-6 rounded-2xl bg-surface border border-border space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      {rev.verifiedPurchase && (
                        <span className="text-xs text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Verified Buyer
                        </span>
                      )}
                    </div>
                    {rev.title && (
                      <h4 className="font-semibold text-sm text-text-main">{rev.title}</h4>
                    )}
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                      {rev.body}
                    </p>
                    <span className="text-xs font-medium text-text-main block pt-2">
                      — {rev.customerName}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-surface border border-border text-center">
                <p className="text-sm text-text-muted">
                  No verified customer reviews yet for this product. Be the first to order and share your experience!
                </p>
              </div>
            )}
          </section>

          {/* Related Products */}
          <RelatedProducts products={relatedProducts} />
        </div>
      </div>

      {/* Mobile Sticky Purchase Bar */}
      <MobileStickyPurchaseBar product={product} />
    </>
  );
}
