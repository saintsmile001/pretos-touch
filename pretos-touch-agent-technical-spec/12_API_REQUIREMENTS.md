# Pretos Touch — API Requirements

## Principle

Keep the frontend independent from the underlying commerce provider.

Expose domain-level services.

Do not make UI components know whether data comes from PostgreSQL, a commerce platform, REST, GraphQL, or another backend.

## Product API

### GET `/api/products`

Query:
```text
category
collection
search
page
limit
sort
available
```

Response:
```json
{
  "items": [],
  "page": 1,
  "limit": 24,
  "total": 0,
  "totalPages": 0
}
```

### GET `/api/products/:slug`

Returns complete public product data.

Must include:
- Product
- Images
- Variants
- Availability
- Reviews summary
- FAQs
- Related products

### POST `/api/products/:id/reviews`

Creates a review submission.

Must:
- Validate rating
- Sanitize content
- Rate-limit
- Spam protect
- Default to moderation/pending unless verified workflow exists

## Categories

### GET `/api/categories`

Returns public categories.

### GET `/api/categories/:slug`

Returns:
- Category
- Products
- SEO metadata
- Related categories
- Related articles

## Collections

### GET `/api/collections/:slug`

Returns collection and products.

## Search

### GET `/api/search?q=`

Returns:
- Product matches
- Category matches
- Optional article matches

Search endpoint must be rate-limited.

Do not index search results.

## Cart

### GET `/api/cart`

Returns current cart.

### POST `/api/cart/items`

Payload:
```json
{
  "productId": "uuid",
  "variantId": "uuid",
  "quantity": 1
}
```

### PATCH `/api/cart/items/:id`

Update quantity.

### DELETE `/api/cart/items/:id`

Remove item.

### DELETE `/api/cart`

Clear cart.

Cart identity may use:
- authenticated user
- secure session/cart token

Do not expose private cart data publicly.

## Checkout

### POST `/api/checkout`

Creates/initializes checkout.

Payload should be provider-specific behind a service layer.

Return:
```json
{
  "checkoutId": "provider-or-internal-id",
  "redirectUrl": "https://..."
}
```

Never put secret payment credentials in client code.

## Orders

### GET `/api/orders/:id`

Only accessible to:
- Authorized customer
- Authorized admin

Do not expose arbitrary order lookup without authorization.

## WhatsApp

### GET/POST `/api/whatsapp/order-link`

Prefer generating the message client-side when no sensitive information is included.

Message should contain:
- Product name
- Variant
- Quantity
- Public product URL

Use owner-configured WhatsApp number.

Never invent a number.

## Reviews

### GET `/api/products/:id/reviews`

Return approved reviews only.

### POST `/api/products/:id/reviews`

Validate:
- Rating
- Name
- Body
- Optional images

## Blog

### GET `/api/articles`

Supports:
- Category
- Page
- Limit

### GET `/api/articles/:slug`

Returns article.

## Newsletter

### POST `/api/newsletter/subscribe`

Payload:
```json
{
  "email": "customer@example.com"
}
```

Requirements:
- Validate email
- Rate limit
- Consent where required
- Provider integration behind service layer

Do not claim subscription if provider API failed.

## Analytics

Frontend analytics abstraction should emit:
```text
view_item
select_item
add_to_cart
remove_from_cart
begin_checkout
purchase
search
whatsapp_click
newsletter_signup
```

No customer secrets should be sent to analytics.

## Error contract

Use consistent API errors:

```json
{
  "error": {
    "code": "PRODUCT_NOT_FOUND",
    "message": "Product not found."
  }
}
```

Do not expose stack traces to customers.

## HTTP semantics

Use:
- 200 success
- 201 created
- 204 successful no content
- 400 invalid request
- 401 unauthenticated
- 403 unauthorized
- 404 not found
- 409 conflict
- 422 validation failure
- 429 rate limited
- 500 server error

## Security

Every mutation must:
- Validate input
- Authorize user
- Rate limit where appropriate
- Sanitize content
- Avoid SQL injection
- Avoid leaking internal errors

## Caching

Cache public:
- Products
- Categories
- Collections
- Articles

Do not publicly cache:
- Cart
- Customer
- Order
- Checkout
- Admin data

## Webhooks

If using a payment/ecommerce provider, support secure webhooks for:
- Payment succeeded
- Payment failed
- Order created
- Order fulfilled
- Refund

Verify webhook signatures.

Never trust payment status from the browser alone.
