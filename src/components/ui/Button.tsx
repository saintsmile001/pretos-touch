import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, disabled, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.98]';

    const variants = {
      primary:
        'bg-brand text-white hover:bg-brand-dark focus-visible:ring-brand shadow-sm',
      secondary:
        'bg-brand-soft text-brand-dark hover:bg-brand-soft/80 focus-visible:ring-brand',
      outline:
        'border border-border bg-surface text-text-main hover:bg-background hover:border-gray-300 focus-visible:ring-brand',
      ghost:
        'text-text-main hover:bg-brand-soft/50 focus-visible:ring-brand',
      whatsapp:
        'bg-[#25D366] text-white hover:bg-[#20bd5a] focus-visible:ring-[#25D366] shadow-sm font-semibold',
    };

    const sizes = {
      sm: 'text-xs px-3 py-2 gap-1.5 min-h-[36px]',
      md: 'text-sm px-5 py-2.5 gap-2 min-h-[44px]',
      lg: 'text-base px-6 py-3.5 gap-2.5 min-h-[50px]',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
