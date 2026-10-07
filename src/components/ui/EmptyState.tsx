import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from './Button';

export interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
  actionText?: string;
  actionHref?: string;
  onAction?: () => void;
}

export function EmptyState({
  icon,
  title,
  description,
  actionText = 'Explore Shop',
  actionHref = '/shop',
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 sm:p-12 bg-surface rounded-2xl border border-border">
      {icon && <div className="p-4 bg-brand-soft rounded-full text-brand mb-4">{icon}</div>}
      <h3 className="text-lg font-semibold text-text-main mb-2">{title}</h3>
      <p className="text-sm text-text-muted max-w-sm mb-6 leading-relaxed">{description}</p>
      {actionHref ? (
        <Link href={actionHref}>
          <Button variant="primary">{actionText}</Button>
        </Link>
      ) : onAction ? (
        <Button variant="primary" onClick={onAction}>
          {actionText}
        </Button>
      ) : null}
    </div>
  );
}
