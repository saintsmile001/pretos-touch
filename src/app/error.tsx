'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="py-24 max-w-md mx-auto px-4 text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto">
        <RefreshCw className="w-8 h-8" />
      </div>
      <h1 className="text-2xl font-serif font-bold text-text-main">
        Something went wrong
      </h1>
      <p className="text-sm text-text-muted">
        We encountered an unexpected error loading this page. Please try refreshing or return to the homepage.
      </p>
      <div className="flex justify-center gap-3 pt-2">
        <Button variant="primary" size="md" onClick={() => reset()}>
          <RefreshCw className="w-4 h-4" />
          <span>Try Again</span>
        </Button>
        <Link href="/">
          <Button variant="outline" size="md">
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
