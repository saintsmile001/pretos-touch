'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { formatMoney } from '@/lib/utils';
import { useCart } from '@/context/cart-context';
import { Star, ShoppingBag, Check } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addItem } = useCart();
  const mainImage = product.images[0];
  const hoverImage = product.images[1] || mainImage;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Quick add default variant or primary product
    const defaultVariant = product.variants.length > 0 ? product.variants[0] : undefined;
    addItem(product, defaultVariant, 1);
  };

  const discountPercent =
    product.compareAtPrice && product.compareAtPrice.amount > product.price.amount
      ? Math.round(
          ((product.compareAtPrice.amount - product.price.amount) / product.compareAtPrice.amount) * 100
        )
      : 0;

  return (
    <div className="group relative bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* Image Area */}
      <Link href={`/products/${product.slug}`} className="block relative aspect-[4/5] bg-background overflow-hidden">
        {mainImage ? (
          <>
            <Image
              src={mainImage.url}
              alt={mainImage.alt || product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority={priority}
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            {product.images.length > 1 && (
              <Image
                src={hoverImage.url}
                alt={hoverImage.alt || product.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
              />
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-brand-soft/50 text-brand text-xs font-semibold">
            Pretos Touch
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {discountPercent > 0 && (
            <Badge variant="brand" className="text-[10px] sm:text-xs font-semibold shadow-sm">
              Save {discountPercent}%
            </Badge>
          )}
          {product.collectionIds.includes('col-best-sellers') && (
            <Badge variant="neutral" className="text-[10px] sm:text-xs font-medium shadow-sm">
              Best Seller
            </Badge>
          )}
        </div>

        {/* Quick Add Button on Hover */}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-surface/90 hover:bg-brand hover:text-white text-text-main shadow-md backdrop-blur-sm transition-all duration-200 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 focus:opacity-100 focus:translate-y-0"
          aria-label={`Quick add ${product.name} to bag`}
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </Link>

      {/* Content Area */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          {product.ratingAverage && (
            <div className="flex items-center gap-1 mb-1.5">
              <div className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </div>
              <span className="text-xs font-semibold text-text-main">
                {product.ratingAverage}
              </span>
              <span className="text-xs text-text-muted">
                ({product.reviewCount})
              </span>
            </div>
          )}

          {/* Title */}
          <Link href={`/products/${product.slug}`} className="block">
            <h3 className="text-sm sm:text-base font-semibold text-text-main group-hover:text-brand transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {/* Short description */}
          <p className="text-xs text-text-muted line-clamp-2 mt-1 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price Row */}
        <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm sm:text-base font-bold text-brand">
              {formatMoney(product.price)}
            </span>
            {product.compareAtPrice && product.compareAtPrice.amount > product.price.amount && (
              <span className="text-xs text-text-muted line-through">
                {formatMoney(product.compareAtPrice)}
              </span>
            )}
          </div>

          <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1">
            <Check className="w-3 h-3" />
            In Stock
          </span>
        </div>
      </div>
    </div>
  );
}
