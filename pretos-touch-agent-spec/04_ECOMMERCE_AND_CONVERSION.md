# Pretos Touch — Ecommerce & Conversion Specification

## Commerce model

Build the frontend so it can support a real ecommerce backend.

Required concepts:
- Products
- Variants
- Inventory
- Prices
- Discounts
- Cart
- Checkout
- Orders
- Customers
- Reviews
- Shipping
- Payment status

Keep commerce logic separated from UI components.

## Product data model

Minimum product fields:

```text
id
slug
name
shortDescription
description
category
collections[]
images[]
price
compareAtPrice
currency
availability
sku
variants[]
features[]
specifications[]
howToUse
careInstructions
shippingInfo
returnInfo
faqs[]
seoTitle
seoDescription
canonicalUrl
```

## Product variants

Support:
- Size
- Color
- Style
- Other future options

The UI should update:
- Price
- Availability
- SKU
- Images
based on selected variant where applicable.

## Cart

Cart must support:
- Add product
- Update quantity
- Remove item
- Persist cart
- Calculate subtotal
- Shipping estimate where available
- Discount/promo code where supported
- Checkout

## WhatsApp ordering

WhatsApp should be a complementary conversion path, not the only path.

Provide a button such as:
**Order on WhatsApp**

The generated message should contain:
- Product name
- Variant
- Quantity
- Product URL

Do not expose private customer data in public URLs.

Use the official Pretos Touch WhatsApp number once supplied by the owner. Never invent a number.

## Checkout

Design for Nigerian customers.

Potential payment methods should be configurable rather than hardcoded.

Examples may include:
- Card
- Bank transfer
- Other locally supported payment providers
- Cash on delivery only if the business actually offers it

Do not claim a payment method exists until configured.

## Shipping

Create a clear shipping page.

Include configurable:
- Delivery regions
- Delivery timelines
- Fees
- Order processing time
- Tracking information
- Failed delivery policy

Do not invent delivery times.

## Returns

Create a clear returns/refunds policy.

Product-specific restrictions must be explicit, especially for intimate/wearable products where hygiene rules may apply.

Do not make legal claims without the owner's actual policy.

## Product recommendations

Recommended logic:
- Same category
- Frequently bought together
- Related products
- Recently viewed

Examples:
- Postpartum belt → postpartum products
- Baby nail trimmer → baby care
- Kiss Bra → bras/shapewear

## Conversion principles

Above the fold:
- Product identity
- Value
- Price
- Availability
- CTA

Near CTA:
- Shipping reassurance
- Returns reassurance
- Secure checkout messaging
- WhatsApp support

Below:
- Details
- FAQs
- Reviews
- Related products

## Discounts

If discounts are implemented:
- Show original price
- Show current price
- Show savings
- Do not use fake discounts

## Forms

All forms need:
- Validation
- Error states
- Success states
- Accessible labels
- Spam protection
- Clear privacy expectations

## Empty/error states

Create polished states for:
- Empty cart
- No search results
- Product unavailable
- Out-of-stock
- Checkout error
- Network error
- 404
