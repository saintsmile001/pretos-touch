import { Product, ProductVariant } from '@/types';
import { siteConfig, isConfigured } from '@/lib/config';

export function generateWhatsAppOrderLink(options: {
  product: Product;
  variant?: ProductVariant;
  quantity: number;
}): { url: string; isAvailable: boolean; message: string } {
  const { product, variant, quantity } = options;
  const baseUrl = siteConfig.siteUrl;
  const productUrl = `${baseUrl}/products/${product.slug}`;

  const variantText = variant ? `Variant: ${variant.title}` : 'Standard';
  const priceText = product.price.amount > 0 ? `Price: ₦${product.price.amount.toLocaleString()}` : '';

  const message = [
    `Hello Pretos Touch, I would like to place an order:`,
    ``,
    `🛍️ Product: ${product.name}`,
    `📦 ${variantText}`,
    `🔢 Quantity: ${quantity}`,
    priceText ? `💰 ${priceText}` : null,
    `🔗 Product Link: ${productUrl}`,
    ``,
    `Please confirm availability and delivery details. Thank you!`,
  ]
    .filter(Boolean)
    .join('\n');

  const encodedMessage = encodeURIComponent(message);
  const rawNumber = siteConfig.whatsappNumber;

  if (!isConfigured(rawNumber)) {
    // If not configured, return an alertable fallback or direct prompt
    return {
      url: `https://wa.me/?text=${encodedMessage}`,
      isAvailable: false,
      message,
    };
  }

  // Clean the number format
  const sanitizedNumber = rawNumber.replace(/[^0-9]/g, '');

  return {
    url: `https://wa.me/${sanitizedNumber}?text=${encodedMessage}`,
    isAvailable: true,
    message,
  };
}

export function generateWhatsAppCartOrderLink(items: { product: Product; variant?: ProductVariant; quantity: number }[]): {
  url: string;
  isAvailable: boolean;
  message: string;
} {
  const itemsText = items
    .map(
      (item, idx) =>
        `${idx + 1}. ${item.product.name} (${item.variant?.title || 'Standard'}) x${item.quantity} - ₦${(
          (item.variant?.price.amount || item.product.price.amount) * item.quantity
        ).toLocaleString()}`
    )
    .join('\n');

  const total = items.reduce(
    (sum, item) => sum + (item.variant?.price.amount || item.product.price.amount) * item.quantity,
    0
  );

  const message = [
    `Hello Pretos Touch, I would like to order items from my cart:`,
    ``,
    itemsText,
    ``,
    `💰 Total Estimated: ₦${total.toLocaleString()}`,
    ``,
    `Please assist me with delivery and payment options.`,
  ].join('\n');

  const encodedMessage = encodeURIComponent(message);
  const rawNumber = siteConfig.whatsappNumber;

  if (!isConfigured(rawNumber)) {
    return {
      url: `https://wa.me/?text=${encodedMessage}`,
      isAvailable: false,
      message,
    };
  }

  const sanitizedNumber = rawNumber.replace(/[^0-9]/g, '');
  return {
    url: `https://wa.me/${sanitizedNumber}?text=${encodedMessage}`,
    isAvailable: true,
    message,
  };
}
