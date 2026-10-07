import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Money } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMoney(money: Money | undefined | null): string {
  if (!money) return '₦0';
  if (money.amount === 0) {
    return '₦0 (Contact for Price)';
  }
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: money.currency || 'NGN',
    maximumFractionDigits: 0,
  }).format(money.amount);
}
