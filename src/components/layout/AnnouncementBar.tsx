import React from 'react';
import Link from 'next/link';
import { Sparkles, MessageCircle } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <div className="bg-brand-dark text-white text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2 relative z-40 transition-colors">
      <Sparkles className="w-3.5 h-3.5 text-brand-soft shrink-0" />
      <span>Thoughtfully selected wellness, postpartum & everyday care</span>
      <span className="hidden md:inline-block text-white/40">|</span>
      <Link
        href="/contact"
        className="hidden md:inline-flex items-center gap-1 text-brand-soft hover:underline font-semibold"
      >
        <MessageCircle className="w-3 h-3" />
        Order on WhatsApp Available
      </Link>
    </div>
  );
}
