'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { formatMoney } from '@/lib/utils';
import { generateWhatsAppCartOrderLink } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { Button } from '@/components/ui/Button';

export function CartDrawer() {
  const { isCartOpen, closeCart, items, itemCount, subtotal, updateQuantity, removeItem } = useCart();

  if (!isCartOpen) return null;

  const whatsapp = generateWhatsAppCartOrderLink(items);

  const handleWhatsAppOrder = () => {
    trackEvent({
      name: 'whatsapp_click',
      params: { action_type: 'cart_order' },
    });
    window.open(whatsapp.url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-brand" />
              <h2 className="text-lg font-bold text-text-main">
                Your Bag <span className="text-sm font-normal text-text-muted">({itemCount})</span>
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 rounded-lg text-text-muted hover:text-text-main hover:bg-background"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-brand-soft flex items-center justify-center text-brand mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-semibold text-text-main mb-1">Your bag is empty</h3>
                <p className="text-sm text-text-muted max-w-xs mb-6">
                  Explore our carefully selected wellness, postpartum and baby care essentials.
                </p>
                <Link href="/shop" onClick={closeCart}>
                  <Button variant="primary" size="md">
                    Start Shopping
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="divide-y divide-border">
                {items.map((item) => (
                  <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                    {/* Thumbnail */}
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-background border border-border shrink-0">
                      {item.product.images[0]?.url ? (
                        <Image
                          src={item.product.images[0].url}
                          alt={item.product.images[0].alt || item.product.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-brand-soft text-brand font-medium text-xs">
                          Care
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <Link
                            href={`/products/${item.product.slug}`}
                            onClick={closeCart}
                            className="text-sm font-semibold text-text-main hover:text-brand transition-colors line-clamp-1"
                          >
                            {item.product.name}
                          </Link>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-text-muted hover:text-danger p-1"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        {item.variant && (
                          <p className="text-xs text-text-muted mt-0.5">{item.variant.title}</p>
                        )}
                        <p className="text-sm font-semibold text-brand mt-1">
                          {formatMoney(item.unitPrice)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-border rounded-lg bg-background">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 text-text-muted hover:text-text-main hover:bg-surface rounded-l-lg transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-xs font-semibold text-text-main">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 text-text-muted hover:text-text-main hover:bg-surface rounded-r-lg transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-xs font-medium text-text-muted">
                          Subtotal:{' '}
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
            )}
          </div>

          {/* Footer & Actions */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-border bg-background/50 space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-muted">Estimated Subtotal</span>
                  <span className="font-bold text-base text-text-main">{formatMoney(subtotal)}</span>
                </div>
                <p className="text-xs text-text-muted">
                  Shipping and delivery fees calculated at checkout.
                </p>
              </div>

              <div className="space-y-2">
                <Link href="/checkout" onClick={closeCart} className="block w-full">
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
                  <span>Order Bag via WhatsApp</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
