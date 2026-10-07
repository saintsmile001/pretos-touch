import React from 'react';
import Link from 'next/link';
import { ProductGrid } from '@/components/product/ProductGrid';
import { CategoryTiles } from '@/components/home/CategoryTiles';
import { HeroSection } from '@/components/home/HeroSection';
import { WhyPretosTouch } from '@/components/home/WhyPretosTouch';
import { SocialProof } from '@/components/home/SocialProof';
import { FeaturedArticles } from '@/components/home/FeaturedArticles';
import { getProducts } from '@/lib/services/product-service';
import { getCategories } from '@/lib/services/category-service';
import { ArrowRight, MessageCircle, Sparkles, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default async function HomePage() {
  const [bestSellers, categories] = await Promise.all([
    getProducts({ collectionSlug: 'best-sellers' }),
    getCategories(),
  ]);

  return (
    <div className="space-y-0">
      {/* 1. FRONT & CENTER: SHOP BEST SELLERS (Product-First Shopping Experience) */}
      <section className="pt-6 pb-12 sm:pb-16 bg-background border-b border-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Category Navigation Strip */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
            <Link
              href="/shop"
              className="px-4 py-2 rounded-full text-xs font-bold bg-brand text-white shadow-sm whitespace-nowrap flex items-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>All Products</span>
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/collections/${cat.slug}`}
                className="px-4 py-2 rounded-full text-xs font-medium bg-surface border border-border text-text-main hover:bg-brand-soft hover:text-brand whitespace-nowrap transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-soft text-brand-dark text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-brand" />
                <span>Customer Favorites in Nigeria</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-serif font-bold text-text-main tracking-tight">
                Shop Best Sellers
              </h1>
              <p className="text-xs sm:text-sm text-text-muted mt-1">
                Thoughtfully selected postpartum, wellness, and baby care essentials ready for fast delivery.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand hover:text-brand-dark transition-colors shrink-0"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Product Grid */}
          <ProductGrid products={bestSellers} columns={4} />

          {/* Value Micro-bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-border/80">
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <Truck className="w-4 h-4 text-brand shrink-0" />
              <span>Nationwide delivery across Nigeria</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <ShieldCheck className="w-4 h-4 text-brand shrink-0" />
              <span>Genuine & inspected products</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <MessageCircle className="w-4 h-4 text-brand shrink-0" />
              <span>Direct WhatsApp order support</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <Sparkles className="w-4 h-4 text-brand shrink-0" />
              <span>Comfort & care guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Shop by Category Tiles */}
      <CategoryTiles />

      {/* 3. Brand Story & Care Mission */}
      <HeroSection />

      {/* 4. Why Pretos Touch Benefits */}
      <WhyPretosTouch />

      {/* 5. Verified Customer Proof & Reviews */}
      <SocialProof />

      {/* 6. Practical Educational Guides */}
      <FeaturedArticles />

      {/* 7. WhatsApp Community CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-brand-dark via-brand to-brand-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex p-3 rounded-full bg-white/10 backdrop-blur-sm text-brand-soft">
            <MessageCircle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
            Have Sizing Questions or Need Quick Ordering?
          </h2>
          <p className="text-sm sm:text-base text-brand-soft/90 max-w-xl mx-auto leading-relaxed">
            Our friendly customer care team is available on WhatsApp to guide you through choosing the right size, postpartum support, and fast delivery options.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button
                variant="whatsapp"
                size="lg"
                className="shadow-lg hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat with Pretos Touch on WhatsApp</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
