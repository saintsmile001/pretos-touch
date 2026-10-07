// Analytics Abstraction Layer
// Emits vendor-agnostic events for Google Analytics, Meta Pixel, TikTok Pixel, etc.

export type AnalyticsEvent =
  | { name: 'view_item'; params: { id: string; name: string; category?: string; price?: number } }
  | { name: 'select_item'; params: { id: string; name: string } }
  | { name: 'add_to_cart'; params: { id: string; name: string; variant?: string; quantity: number; price?: number } }
  | { name: 'remove_from_cart'; params: { id: string; name: string; quantity: number } }
  | { name: 'begin_checkout'; params: { items_count: number; value: number; currency: string } }
  | { name: 'purchase'; params: { order_id: string; value: number; currency: string; items_count: number } }
  | { name: 'search'; params: { search_term: string; results_count: number } }
  | { name: 'whatsapp_click'; params: { product_name?: string; action_type: 'product_order' | 'cart_order' | 'support_chat' } }
  | { name: 'newsletter_signup'; params: { source: string } };

export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === 'undefined') return;

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.info(`[Pretos Touch Analytics] Tracked: ${event.name}`, event.params);
  }

  // Google Analytics 4 (dataLayer / gtag)
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', event.name, event.params);
  }

  // Meta Pixel (fbq)
  if (typeof (window as any).fbq === 'function') {
    if (event.name === 'view_item') (window as any).fbq('track', 'ViewContent', event.params);
    if (event.name === 'add_to_cart') (window as any).fbq('track', 'AddToCart', event.params);
    if (event.name === 'begin_checkout') (window as any).fbq('track', 'InitiateCheckout', event.params);
    if (event.name === 'purchase') (window as any).fbq('track', 'Purchase', event.params);
  }
}
