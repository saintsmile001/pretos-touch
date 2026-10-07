'use client';

import React from 'react';
import { Product, ProductVariant } from '@/types';
import { formatMoney } from '@/lib/utils';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/Button';
import { ShoppingBag } from 'lucide-react';

export interface MobileStickyPurchaseBarProps {
  product: Product;
  selectedVariant?: ProductVariant;
}

export function MobileStickyPurchaseBar({ product, selectedVariant }: MobileStickyPurchaseBarProps) {
  const { addItem } = useCart();
  const price = selectedVariant ? selectedVariant.price : product.price;

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 bg-surface/95 backdrop-blur-md border-t border-border p-3 z-30 shadow-lg">
      <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
        <div>
          <span className="text-xs text-text-muted block">Price</span>
          <span className="text-base font-bold text-brand">{formatMoney(price)}</span>
        </div>
        <Button
          variant="primary"
          size="md"
          className="flex-1 max-w-[200px]"
          onClick={() => addItem(product, selectedVariant, 1)}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Add to Bag</span>
        </Button>
      </div>
    </div>
  );
}
