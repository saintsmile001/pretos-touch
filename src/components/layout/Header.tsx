'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { MobileNav } from './MobileNav';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { initialCategories } from '@/data/seed-data';

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { itemCount, openCart } = useCart();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md border-b border-border transition-all">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile Menu Trigger */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileNavOpen(true)}
                className="p-2 -ml-2 text-text-muted hover:text-text-main focus:outline-none"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="group flex items-center gap-2">
                <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-brand group-hover:text-brand-dark transition-colors">
                  Pretos Touch
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/shop"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === '/shop'
                    ? 'text-brand font-semibold bg-brand-soft/60'
                    : 'text-text-main hover:text-brand hover:bg-brand-soft/40'
                }`}
              >
                Shop All
              </Link>
              {initialCategories.slice(0, 4).map((category) => {
                const href = `/collections/${category.slug}`;
                const isActive = pathname === href;
                return (
                  <Link
                    key={category.id}
                    href={href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-brand font-semibold bg-brand-soft/60'
                        : 'text-text-main hover:text-brand hover:bg-brand-soft/40'
                    }`}
                  >
                    {category.name}
                  </Link>
                );
              })}
              <Link
                href="/blog"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname?.startsWith('/blog')
                    ? 'text-brand font-semibold bg-brand-soft/60'
                    : 'text-text-main hover:text-brand hover:bg-brand-soft/40'
                }`}
              >
                Guides
              </Link>
            </nav>

            {/* Right Icons: Search & Cart */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-xl text-text-muted hover:text-text-main hover:bg-background transition-colors"
                aria-label="Search catalog"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={openCart}
                className="p-2 rounded-xl text-text-main hover:text-brand hover:bg-brand-soft/40 transition-colors relative"
                aria-label={`Shopping bag with ${itemCount} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-brand text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-scale-in">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Search Input */}
        {isSearchOpen && (
          <div className="border-t border-border bg-background/90 p-4 transition-all animate-fade-in">
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSearch} className="relative flex items-center">
                <Search className="w-5 h-5 text-text-muted absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search postpartum belts, baby trimmers, bras, menstrual belts..."
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-border bg-surface text-sm text-text-main placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-3 text-text-muted hover:text-text-main p-1"
                  aria-label="Close search"
                >
                  <X className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer */}
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />

      {/* Slide-out Cart Drawer */}
      <CartDrawer />
    </>
  );
}
