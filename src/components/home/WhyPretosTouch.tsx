import React from 'react';
import { Heart, MessageSquareText, Sparkles, Truck } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: 'Carefully Selected Essentials',
    description:
      'We curate products that genuinely solve everyday comfort and wellness challenges for mothers and women.',
  },
  {
    icon: MessageSquareText,
    title: 'Direct WhatsApp Support',
    description:
      'Have sizing questions or need order assistance? Chat directly with our Nigerian customer support team.',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description:
      'Fast and discreet delivery directly to your doorstep across Lagos, Abuja, Port Harcourt, and all states.',
  },
  {
    icon: Heart,
    title: 'Built with Compassion',
    description:
      'Feminine, practical, and supportive care designed to help you feel confident and looked after every single day.',
  },
];

export function WhyPretosTouch() {
  return (
    <section className="py-16 sm:py-24 bg-brand-soft/30 border-y border-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Our Brand Promise
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-text-main mt-2 tracking-tight">
            Why Women & Families Choose Pretos Touch
          </h2>
          <p className="text-sm sm:text-base text-text-muted mt-3 leading-relaxed">
            We believe everyday wellness and recovery should be gentle, accessible, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="bg-surface rounded-2xl p-6 sm:p-8 border border-border/80 shadow-sm flex flex-col items-start hover:border-brand/30 transition-all"
              >
                <div className="p-3 bg-brand-soft rounded-2xl text-brand mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-text-main mb-2">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
