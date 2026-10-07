# Pretos Touch — Exact Page-by-Page UI Specification

## Global UI rules

Every page must use the shared:
- AnnouncementBar
- Header
- Navigation
- Main content container
- Footer
- Cookie/privacy mechanism if required
- Toast/notification system
- Responsive layout system

Desktop max content width: approximately 1200–1320px.
Mobile side padding: approximately 16–20px.
Desktop side padding: approximately 32px.

Do not make every section full-bleed. Use full-bleed sections selectively.

---

# 1. Homepage `/`

## Purpose
Introduce Pretos Touch, establish trust, expose categories, show products, and convert first-time visitors.

## Sections

### 1. Announcement bar
Content is configurable.
Examples:
- Delivery information
- New customer offer
- Support availability

Do not hardcode a promotion.

### 2. Header
Desktop:
- Logo
- Shop
- Postpartum Care
- Women's Wellness
- Bras & Shapewear
- Baby Care
- Blog
- Search
- Account
- Cart

Mobile:
- Hamburger
- Logo
- Search
- Cart

### 3. Hero
Desktop:
- Two-column layout
- Copy on left
- Product/lifestyle image on right

Content:
- Eyebrow
- H1
- Supporting paragraph
- Primary CTA
- Secondary CTA

Suggested message direction:
"Comfort, Confidence & Care — Delivered to Your Door."

Do not use this exact copy if a stronger brand message is available.

### 4. Featured products
Heading:
"Shop Best Sellers"

4 products desktop.
2 products tablet/mobile depending on width.

Product card:
- Image
- Badge
- Name
- Rating if real
- Price
- Compare-at price if applicable
- Quick add

### 5. Shop by category
Use 4–5 visual category tiles:
- Postpartum Care
- Women's Wellness
- Bras & Shapewear
- Baby Care
- Beauty & Personal Care

Each tile:
- Image
- Category name
- Short descriptor
- Link

### 6. Why Pretos Touch
3–4 benefit cards:
- Carefully selected products
- Customer-first support
- Convenient ordering
- Delivery across supported locations

Only claim services actually offered.

### 7. Social proof
Use genuine:
- Reviews
- Ratings
- Customer photos
- UGC

If no reviews exist, use an editorial brand section rather than fake reviews.

### 8. Featured educational content
3 article cards.

### 9. Social/UGC section
Heading such as:
"See Pretos Touch in Real Life"

Show social imagery if available.

### 10. Newsletter/WhatsApp CTA
Keep concise.
Explain the value of joining.

### 11. Footer
Multi-column desktop; stacked mobile.

---

# 2. Shop `/shop`

## Purpose
Universal product discovery.

Layout:
- Breadcrumb
- H1: Shop
- Intro
- Category shortcuts
- Filter/sort bar
- Product grid

Desktop:
- Optional sidebar filters
- 3–4 columns

Mobile:
- Filter button
- Sort dropdown
- 2-column grid where practical

Product grid must support:
- Loading
- Empty
- Error
- Pagination/load-more

Do not create crawlable duplicate URLs for every filter combination.

---

# 3. Category pages

Examples:
`/collections/postpartum-care`
`/collections/womens-wellness`
`/collections/bras-shapewear`
`/collections/baby-care`

Structure:
1. Breadcrumb
2. Category hero
3. Category description
4. Product grid
5. Buying guide
6. FAQs
7. Related categories
8. Related blog content

Category hero:
- H1
- 1–2 sentence description
- Image
- Optional CTA

---

# 4. Product detail `/products/[slug]`

## Desktop
Two-column primary area.

Left:
- Image gallery
- Main image
- Thumbnail rail/grid
- Zoom where appropriate

Right:
- Breadcrumb
- Product name
- Rating
- Price
- Compare-at price
- Short description
- Variant selectors
- Quantity
- Add to Cart
- Buy Now
- WhatsApp
- Shipping reassurance
- Availability

Below:
- Description
- Benefits
- Features
- Specifications
- How to use
- Care
- Shipping/returns
- FAQs
- Reviews
- Related products

## Mobile
Stack content.

Add a sticky bottom purchase bar:
- Price
- Add to Cart / Buy Now

Do not cover important content.

## Image behavior
- Swipe gallery on mobile
- Keyboard accessible on desktop
- Alt text for meaningful images
- Decorative images must not have redundant alt

---

# 5. Search results `/search?q=`

Structure:
- Search input
- Result count
- Product results
- Suggested categories
- Helpful content suggestions

No-result state:
- Clear message
- Search suggestions
- Popular categories
- Best sellers

Internal search result pages should normally be `noindex`.

---

# 6. Cart `/cart`

Desktop:
- Cart item list left
- Order summary right

Mobile:
- Items
- Summary
- Sticky checkout CTA

Cart item:
- Image
- Product
- Variant
- Quantity control
- Price
- Remove

Summary:
- Subtotal
- Discount
- Shipping if known
- Total
- Checkout CTA
- WhatsApp option where appropriate

Empty cart:
- Friendly message
- Continue Shopping
- Best sellers

---

# 7. Checkout

Use the commerce provider's secure checkout where possible.

If custom checkout:
- Contact
- Delivery
- Payment
- Review
- Confirmation

Do not store payment credentials in the Pretos Touch application.

Checkout must show:
- Order items
- Amount
- Delivery information
- Payment status
- Error handling

---

# 8. About `/about`

Sections:
- Brand story
- What Pretos Touch believes
- Product philosophy
- Customer focus
- Founder/brand image if supplied
- CTA to shop

Do not invent a founder story.

---

# 9. Contact `/contact`

Include configurable:
- Contact form
- Email
- Phone
- WhatsApp
- Social links
- Address if applicable
- Business hours if applicable

Never invent contact information.

---

# 10. Reviews `/reviews`

Show:
- Average rating if enough genuine reviews
- Rating distribution
- Review list
- Photos
- Verified purchase label if supported

Review submission:
- Authenticated/purchase-linked where possible
- Moderation status
- Anti-spam

---

# 11. FAQ `/faq`

Group questions:
- Ordering
- Delivery
- Returns
- Products
- Sizing
- Payments
- WhatsApp ordering

Use accessible accordions.

Do not use FAQ schema automatically for every accordion. Only output structured data when the content and search-engine eligibility requirements are satisfied.

---

# 12. Blog `/blog`

Structure:
- H1
- Featured article
- Category filters
- Article grid
- Pagination

Article card:
- Image
- Category
- Title
- Excerpt
- Date
- Read time

---

# 13. Blog article `/blog/[slug]`

Structure:
- Breadcrumb
- Category
- H1
- Author/date if available
- Hero image
- Article body
- Inline product/category CTAs
- Related articles
- Share buttons
- Newsletter CTA

Article content should be readable and genuinely useful.

---

# 14. Shipping `/shipping`

Clearly explain actual:
- Processing
- Delivery areas
- Delivery fees
- Estimated timelines
- Tracking
- Failed deliveries

Use owner-provided data.

---

# 15. Returns `/returns`

Explain actual:
- Eligibility
- Time window
- Condition requirements
- Hygiene restrictions
- Refund method
- Exchange rules

Owner must approve policy text.

---

# 16. Privacy `/privacy`

Use legally reviewed policy appropriate to the actual business and technologies.

Do not invent legal entity details.

---

# 17. Terms `/terms`

Use actual business/legal information.

---

# 18. 404

Include:
- Clear message
- Search
- Shop CTA
- Popular categories
- Home CTA

Do not leave a generic framework error screen.

---

# 19. Error pages

Create friendly error states for:
- Product unavailable
- Server error
- Network failure
- Checkout failure

Provide recovery actions.

---

# 20. Responsive behavior

Every page must be designed for:
- 320px
- 375px
- 390px
- 430px
- Tablet
- Desktop

No horizontal scrolling.

---

# 21. Page SEO contract

Every page component should expose:

```ts
type PageSEO = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
};
```

No page should inherit an incorrect generic title.
