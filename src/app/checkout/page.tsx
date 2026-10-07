'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/cart-context';
import { formatMoney } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';
import { useToast } from '@/context/toast-context';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ShieldCheck, Truck, MessageCircle, CheckCircle2, Lock } from 'lucide-react';

const nigerianStates = [
  'Lagos',
  'Abuja (FCT)',
  'Rivers',
  'Oyo',
  'Ogun',
  'Delta',
  'Edo',
  'Anambra',
  'Enugu',
  'Kaduna',
  'Kano',
  'Ondo',
  'Other States',
];

export default function CheckoutPage() {
  const { items, itemCount, subtotal, clearCart } = useCart();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'Lagos',
    notes: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<'card_transfer' | 'whatsapp'>('card_transfer');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState<string | null>(null);

  // Delivery fee calculation
  const deliveryFee = formData.state === 'Lagos' ? 2500 : 4500;
  const grandTotal = subtotal.amount + deliveryFee;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.address) {
      showToast('Please fill in your name, phone number, and delivery address.', 'error');
      return;
    }

    setIsSubmitting(true);
    const orderNumber = `PT-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      trackEvent({
        name: 'purchase',
        params: {
          order_id: orderNumber,
          value: grandTotal,
          currency: 'NGN',
          items_count: itemCount,
        },
      });

      if (paymentMethod === 'whatsapp') {
        const orderSummaryText = items
          .map((item) => `- ${item.product.name} (${item.variant?.title || 'Standard'}) x${item.quantity}`)
          .join('\n');

        const message = [
          `*New Order: ${orderNumber}*`,
          ``,
          `*Customer:* ${formData.fullName}`,
          `*Phone:* ${formData.phone}`,
          `*Delivery Address:* ${formData.address}, ${formData.city}, ${formData.state}`,
          formData.notes ? `*Notes:* ${formData.notes}` : null,
          ``,
          `*Ordered Items:*`,
          orderSummaryText,
          ``,
          `*Subtotal:* ₦${subtotal.amount.toLocaleString()}`,
          `*Delivery Fee (${formData.state}):* ₦${deliveryFee.toLocaleString()}`,
          `*Total Amount:* ₦${grandTotal.toLocaleString()}`,
          ``,
          `Please confirm my order and send payment account details. Thank you!`,
        ]
          .filter(Boolean)
          .join('\n');

        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
      }

      setOrderComplete(orderNumber);
      clearCart();
      showToast('Order placed successfully! Check your order details.');
    } catch {
      showToast('Error processing order. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderComplete) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24 text-center">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-brand">Order Confirmed</span>
        <h1 className="text-3xl font-serif font-bold text-text-main mt-1">
          Thank You, {formData.fullName}!
        </h1>
        <p className="text-sm text-text-muted mt-2">
          Your order reference is <span className="font-bold text-text-main">#{orderComplete}</span>.
        </p>

        <div className="bg-surface rounded-2xl p-6 border border-border mt-8 text-left space-y-3 text-xs sm:text-sm">
          <div className="flex justify-between pb-2 border-b border-border font-semibold">
            <span>Delivery To:</span>
            <span>{formData.address}, {formData.city}, {formData.state}</span>
          </div>
          <div className="flex justify-between pb-2 border-b border-border">
            <span>Contact Phone:</span>
            <span>{formData.phone}</span>
          </div>
          <div className="flex justify-between font-bold text-brand">
            <span>Total Payable:</span>
            <span>₦{grandTotal.toLocaleString()}</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/shop">
            <Button variant="primary" size="md">
              Return to Shop
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="md">
              Contact Customer Support
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-content mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-serif font-bold mb-4">No Items to Checkout</h2>
        <p className="text-sm text-text-muted mb-6">Your shopping bag is empty.</p>
        <Link href="/shop">
          <Button variant="primary">Shop Essentials</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-16 sm:pb-24">
      <Breadcrumbs items={[{ name: 'Bag', url: '/cart' }, { name: 'Checkout', url: '/checkout' }]} />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex items-center gap-2 pb-6 border-b border-border">
          <Lock className="w-5 h-5 text-brand" />
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-text-main">
            Secure Checkout
          </h1>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-start">
          {/* Customer & Delivery Form Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Contact Information */}
            <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border space-y-4">
              <h2 className="text-base font-serif font-bold text-text-main flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand text-white text-xs flex items-center justify-center font-sans">
                  1
                </span>
                <span>Contact Details</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-text-main mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Amina Bello"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm text-text-main placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-main mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 08012345678"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm text-text-main placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-text-main mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. amina@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm text-text-main placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Delivery Address */}
            <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border space-y-4">
              <h2 className="text-base font-serif font-bold text-text-main flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand text-white text-xs flex items-center justify-center font-sans">
                  2
                </span>
                <span>Delivery Address (Nigeria)</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-text-main mb-1">
                    Street Address & House/Flat No. *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="e.g. 14 Admiralty Way, Lekki Phase 1"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm text-text-main placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-main mb-1">
                    City / Area *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Lekki / Ikeja"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm text-text-main placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-main mb-1">
                    State *
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-brand"
                  >
                    {nigerianStates.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-text-main mb-1">
                    Delivery Instructions / Landmark (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={2}
                    placeholder="e.g. Opposite the blue gate, call on arrival"
                    className="w-full px-3.5 py-2 rounded-xl border border-border bg-background text-sm text-text-main placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Payment Method */}
            <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border space-y-4">
              <h2 className="text-base font-serif font-bold text-text-main flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand text-white text-xs flex items-center justify-center font-sans">
                  3
                </span>
                <span>Payment & Order Method</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card_transfer')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    paymentMethod === 'card_transfer'
                      ? 'border-brand bg-brand-soft/40 ring-2 ring-brand/20 font-semibold'
                      : 'border-border bg-background text-text-muted'
                  }`}
                >
                  <div className="text-sm text-text-main font-semibold">Online Payment / Transfer</div>
                  <div className="text-xs text-text-muted mt-1">Pay with Card, Bank Transfer, or USSD</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('whatsapp')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    paymentMethod === 'whatsapp'
                      ? 'border-emerald-500 bg-emerald-50/60 ring-2 ring-emerald-500/20 font-semibold'
                      : 'border-border bg-background text-text-muted'
                  }`}
                >
                  <div className="text-sm text-text-main font-semibold flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Order Confirmation</span>
                  </div>
                  <div className="text-xs text-text-muted mt-1">Send order draft directly to WhatsApp support</div>
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary Right Column */}
          <div className="lg:col-span-5 bg-surface rounded-3xl p-6 sm:p-8 border border-border space-y-6">
            <h2 className="text-lg font-serif font-bold text-text-main">
              Order Summary ({itemCount})
            </h2>

            {/* Item list */}
            <div className="divide-y divide-border max-h-60 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.id} className="py-3 first:pt-0 last:pb-0 flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-background border border-border shrink-0">
                    {item.product.images[0]?.url && (
                      <Image
                        src={item.product.images[0].url}
                        alt={item.product.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 text-xs">
                    <p className="font-semibold text-text-main line-clamp-1">{item.product.name}</p>
                    <p className="text-text-muted">{item.variant?.title || 'Standard'} x{item.quantity}</p>
                  </div>
                  <span className="text-xs font-bold text-text-main">
                    ₦{(item.unitPrice.amount * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="space-y-2.5 pt-4 border-t border-border text-xs sm:text-sm">
              <div className="flex justify-between text-text-muted">
                <span>Items Subtotal</span>
                <span>{formatMoney(subtotal)}</span>
              </div>
              <div className="flex justify-between text-text-muted">
                <span>Delivery ({formData.state})</span>
                <span>₦{deliveryFee.toLocaleString()}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between text-base font-bold text-text-main">
                <span>Total Amount</span>
                <span className="text-xl text-brand">₦{grandTotal.toLocaleString()}</span>
              </div>
            </div>

            {/* Place Order CTA */}
            <Button
              type="submit"
              variant={paymentMethod === 'whatsapp' ? 'whatsapp' : 'primary'}
              size="lg"
              className="w-full"
              isLoading={isSubmitting}
            >
              {paymentMethod === 'whatsapp' ? (
                <>
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Order via WhatsApp</span>
                </>
              ) : (
                <span>Complete Order (₦{grandTotal.toLocaleString()})</span>
              )}
            </Button>

            <div className="pt-2 text-center text-xs text-text-muted flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Safe and encrypted checkout experience</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
