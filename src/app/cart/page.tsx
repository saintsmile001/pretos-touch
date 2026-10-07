'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/cart-context';
import { formatMoney } from '@/lib/utils';
import { generateWhatsAppCartOrderLink } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { EmptyState } from '@/components/ui/EmptyState';
import { Trash2, Plus, Minus, ArrowRight, MessageCircle, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';

export default function CartPage() {
  const { items, itemCount, subtotal, updateQuantity, removeItem, clearCart } = useCart();

  const whatsapp = generateWhatsAppCartOrderLink(items);

  const handleWhatsAppOrder = () => {
    trackEvent({
      name: 'whatsapp_click',
      params: { action_type: 'cart_order' },
    });
    window.open(whatsapp.url, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="pb-16 sm:pb-24">
        <Breadcrumbs items={[{ name: 'Shopping Bag', url: '/cart' }]} />
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <EmptyState
            icon={<ShoppingBag className="w-8 h-8" />}
            title="Your bag is currently empty"
            description="Explore our postpartum support belts, gentle baby nail trimmers, and everyday wellness items."
            actionText="Continue Shopping"
            actionHref="/shop"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="pb-16 sm:pb-24">
      <Breadcrumbs items={[{ name: 'Shopping Bag', url: '/cart' }]} />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex items-center justify-between pb-6 border-b border-border">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-text-main">
            Shopping Bag ({itemCount})
          </h1>
          <button
            onClick={clearCart}
            className="text-xs text-text-muted hover:text-danger underline transition-colors"
          >
            Clear bag
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-8 divide-y divide-border">
            {items.map((item) => (
              <div key={item.id} className="py-6 first:pt-0 last:pb-0 flex gap-4 sm:gap-6">
                {/* Image */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-background border border-border shrink-0">
                  {item.product.images[0]?.url ? (
                    <Image
                      src={item.product.images[0].url}
                      alt={item.product.name}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-brand-soft text-brand text-xs font-semibold">
                      Care
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <Link
                        href={`/products/${item.product.slug}`}
                        className="font-serif font-semibold text-base sm:text-lg text-text-main hover:text-brand transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-text-muted hover:text-danger p-1 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    {item.variant && (
                      <p className="text-xs text-text-muted mt-1 font-medium">
                        {item.variant.title}
                      </p>
                    )}
                    <p className="text-sm font-bold text-brand mt-1.5">
                      {formatMoney(item.unitPrice)}
                    </p>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-border rounded-xl bg-surface p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 rounded-lg text-text-muted hover:text-text-main hover:bg-background"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3.5 text-xs font-bold text-text-main">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 rounded-lg text-text-muted hover:text-text-main hover:bg-background"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="text-sm font-bold text-text-main">
                      {formatMoney({
                        amount: item.unitPrice.amount * item.quantity,
                        currency: item.unitPrice.currency,
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Column */}
          <div className="lg:col-span-4 bg-surface rounded-3xl p-6 sm:p-8 border border-border space-y-6">
            <h2 className="text-lg font-serif font-bold text-text-main">Order Summary</h2>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between text-text-muted">
                <span>Subtotal ({itemCount} items)</span>
                <span className="font-semibold text-text-main">{formatMoney(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between text-text-muted">
                <span>Estimated Delivery</span>
                <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                  Calculated at Checkout
                </span>
              </div>
              <div className="border-t border-border pt-3 flex items-center justify-between text-base font-bold text-text-main">
                <span>Total</span>
                <span className="text-xl text-brand">{formatMoney(subtotal)}</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <Link href="/checkout" className="block w-full">
                <Button variant="primary" size="lg" className="w-full">
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Button
                variant="whatsapp"
                size="md"
                className="w-full"
                onClick={handleWhatsAppOrder}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order via WhatsApp</span>
              </Button>
            </div>

            <div className="border-t border-border pt-4 space-y-2 text-xs text-text-muted">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-brand" />
                <span>Nationwide delivery across Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand" />
                <span>Safe and secure order processing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
