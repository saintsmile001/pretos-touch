'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenIds?: string[];
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpenIds = [],
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('divide-y divide-border border-y border-border', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="py-3">
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between py-2 text-left font-medium text-text-main hover:text-brand transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg"
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium">{item.title}</span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-text-muted transition-transform duration-200 shrink-0 ml-4',
                  isOpen && 'transform rotate-180 text-brand'
                )}
              />
            </button>
            {isOpen && (
              <div className="pt-2 pb-4 text-sm text-text-muted leading-relaxed animate-fade-in">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
