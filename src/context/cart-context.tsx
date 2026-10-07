'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Product, ProductVariant, CartItem, Money } from '@/types';
import { trackEvent } from '@/lib/analytics';
import { useToast } from './toast-context';

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  subtotal: Money;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, variant?: ProductVariant, quantity?: number) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'pretos_touch_cart_v1';

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const { showToast } = useToast();

  // Load from LocalStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load cart from localStorage', e);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save to LocalStorage whenever items change (after initial hydration)
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [items, isHydrated]);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);
  const toggleCart = useCallback(() => setIsCartOpen((prev) => !prev), []);

  const addItem = useCallback(
    (product: Product, variant?: ProductVariant, quantity = 1) => {
      const lineItemId = variant ? `${product.id}-${variant.id}` : `${product.id}-default`;
      const priceToUse = variant ? variant.price : product.price;

      setItems((prev) => {
        const existingIndex = prev.findIndex((item) => item.id === lineItemId);

        if (existingIndex > -1) {
          const updated = [...prev];
          const newQty = updated[existingIndex].quantity + quantity;
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: newQty,
          };
          return updated;
        }

        return [
          ...prev,
          {
            id: lineItemId,
            product,
            variant,
            quantity,
            unitPrice: priceToUse,
          },
        ];
      });

      // Fire Analytics
      trackEvent({
        name: 'add_to_cart',
        params: {
          id: product.id,
          name: product.name,
          variant: variant?.title,
          quantity,
          price: priceToUse.amount,
        },
      });

      showToast(`Added ${product.name} to your bag`);
      openCart();
    },
    [openCart, showToast]
  );

  const updateQuantity = useCallback(
    (itemId: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(itemId);
        return;
      }

      setItems((prev) =>
        prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
      );
    },
    []
  );

  const removeItem = useCallback((itemId: string) => {
    setItems((prev) => {
      const toRemove = prev.find((item) => item.id === itemId);
      if (toRemove) {
        trackEvent({
          name: 'remove_from_cart',
          params: {
            id: toRemove.product.id,
            name: toRemove.product.name,
            quantity: toRemove.quantity,
          },
        });
      }
      return prev.filter((item) => item.id !== itemId);
    });
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotalAmount = items.reduce(
    (sum, item) => sum + item.unitPrice.amount * item.quantity,
    0
  );

  const subtotal: Money = {
    amount: subtotalAmount,
    currency: items[0]?.unitPrice.currency || 'NGN',
  };

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        subtotal,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
