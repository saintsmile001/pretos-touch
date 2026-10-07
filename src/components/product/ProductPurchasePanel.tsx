'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product, ProductVariant } from '@/types';
import { formatMoney } from '@/lib/utils';
import { useCart } from '@/context/cart-context';
import { generateWhatsAppOrderLink } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { Button } from '@/components/ui/Button';
import { Star, Plus, Minus, MessageCircle, ShoppingBag, Zap, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export interface ProductPurchasePanelProps {
  product: Product;
}

export function ProductPurchasePanel({ product }: ProductPurchasePanelProps) {
  const router = useRouter();
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants.length > 0 ? product.variants[0] : undefined
  );
  const [quantity, setQuantity] = useState(1);

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;
  const currentCompareAt = selectedVariant?.compareAtPrice || product.compareAtPrice;

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const handleBuyNow = () => {
    addItem(product, selectedVariant, quantity);
    router.push('/checkout');
  };

  const whatsapp = generateWhatsAppOrderLink({
    product,
    variant: selectedVariant,
    quantity,
  });

  const handleWhatsAppClick = () => {
    trackEvent({
      name: 'whatsapp_click',
      params: {
        product_name: product.name,
        action_type: 'product_order',
      },
    });
    window.open(whatsapp.url, '_blank');
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Product Title & Ratings */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          {product.ratingAverage && (
            <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full text-amber-900 border border-amber-200/60">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span className="text-xs font-bold">{product.ratingAverage}</span>
              <span className="text-xs text-amber-700">({product.reviewCount} reviews)</span>
            </div>
          )}
          <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
            Available in Nigeria
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold font-serif text-text-main tracking-tight">
          {product.name}
        </h1>

        <p className="text-sm text-text-muted mt-2 leading-relaxed">
          {product.shortDescription}
        </p>
      </div>

      {/* Pricing */}
      <div className="flex items-baseline gap-3 pb-4 border-b border-border">
        <span className="text-2xl sm:text-3xl font-extrabold text-brand">
          {formatMoney(currentPrice)}
        </span>
        {currentCompareAt && currentCompareAt.amount > currentPrice.amount && (
          <span className="text-base text-text-muted line-through">
            {formatMoney(currentCompareAt)}
          </span>
        )}
      </div>

      {/* Variant Selector */}
      {product.variants.length > 0 && (
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-text-main">
            Select Option / Size
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {product.variants.map((v) => {
              const isSelected = selectedVariant?.id === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariant(v)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'border-brand bg-brand-soft/50 ring-2 ring-brand/20 font-semibold text-brand-dark'
                      : 'border-border bg-surface hover:border-text-muted text-text-main text-xs'
                  }`}
                >
                  <div className="text-xs font-medium">{v.title}</div>
                  <div className="text-[11px] text-text-muted mt-0.5">{formatMoney(v.price)}</div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Quantity & Actions */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-border rounded-xl bg-surface p-1">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="p-2 rounded-lg text-text-muted hover:text-text-main hover:bg-background"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 text-sm font-bold text-text-main">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="p-2 rounded-lg text-text-muted hover:text-text-main hover:bg-background"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Bag */}
          <Button
            variant="primary"
            size="lg"
            className="flex-1"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Add to Bag</span>
          </Button>
        </div>

        {/* Buy Now & WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button
            variant="outline"
            size="md"
            className="w-full font-semibold"
            onClick={handleBuyNow}
          >
            <Zap className="w-4 h-4 text-brand" />
            <span>Buy Now</span>
          </Button>

          <Button
            variant="whatsapp"
            size="md"
            className="w-full"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order on WhatsApp</span>
          </Button>
        </div>
      </div>

      {/* Trust & Reassurance Badges */}
      <div className="border-t border-border pt-6 space-y-3">
        <div className="flex items-center gap-3 text-xs text-text-muted">
          <Truck className="w-4 h-4 text-brand shrink-0" />
          <span>Nationwide door delivery across Lagos & all states</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-text-muted">
          <ShieldCheck className="w-4 h-4 text-brand shrink-0" />
          <span>Safe checkout & genuine product guarantee</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-text-muted">
          <RotateCcw className="w-4 h-4 text-brand shrink-0" />
          <span>Carefully inspected before dispatch</span>
        </div>
      </div>
    </div>
  );
}
