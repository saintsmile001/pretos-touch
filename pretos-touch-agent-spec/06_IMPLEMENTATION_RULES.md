# Pretos Touch — Agent Implementation Rules

## Role

Act as a senior product designer, frontend engineer, ecommerce UX specialist, and technical SEO engineer.

Do not merely create visually attractive pages. Build a coherent production-quality ecommerce system.

## Before coding

1. Inspect the existing repository.
2. Identify framework, package manager, routing, styling system, and existing components.
3. Preserve useful existing infrastructure.
4. Do not replace the stack without a strong reason.
5. Identify environment variables and integrations.
6. Create a short implementation checklist from these specifications.

## Component architecture

Prefer reusable components such as:

```text
Layout
Header
AnnouncementBar
Navigation
MobileMenu
Footer
Search
Breadcrumbs

ProductCard
ProductGrid
ProductGallery
ProductInfo
Price
VariantSelector
QuantitySelector
AddToCart
BuyNow
WhatsAppOrderButton
ReviewSummary
ReviewList
ProductFAQ
RelatedProducts

CategoryHero
CategoryIntro
CategoryFilters

Hero
FeaturedProducts
CategoryTiles
TrustSection
ReviewsSection
BlogSection
SocialProofSection

ArticleCard
ArticleContent
NewsletterSignup

Modal
Drawer
Toast
LoadingState
EmptyState
ErrorState
```

Do not duplicate near-identical components for every page.

## Data-driven catalog

Products and categories should be data-driven.

Do not hardcode five separate product page implementations.

A single product template should render all products from structured product data.

## SEO implementation

Use the framework's recommended SEO/head mechanism.

Each page should be able to define:
- title
- description
- canonical
- Open Graph
- Twitter/social metadata
- robots directives where appropriate

Generate structured data from actual data.

Never hardcode fake ratings, prices or availability into schema.

## Social sharing

Product and blog pages should have:
- Open Graph title
- Open Graph description
- Open Graph image
- Twitter/X metadata where useful

Images should be correctly sized for social previews.

## Analytics

Create an analytics abstraction.

Track events such as:
- `view_item`
- `select_item`
- `add_to_cart`
- `remove_from_cart`
- `begin_checkout`
- `purchase`
- `search`
- `whatsapp_click`
- `newsletter_signup`

Do not hardcode vendor-specific logic throughout components.

## Performance

Prioritize:
- Image optimization
- Responsive images
- Lazy loading
- Font optimization
- Code splitting
- Server rendering/static generation where appropriate
- Minimal third-party scripts
- Avoid unnecessary animation libraries

Do not load tracking scripts before necessary consent/configuration requirements are satisfied.

## Security

Never expose:
- Secret API keys
- Payment secrets
- Admin credentials
- Private customer data

Use server-side operations for sensitive functionality.

Validate all server inputs.

## Accessibility

Every interactive component must be keyboard usable.

Images:
- meaningful alt when informative
- empty alt when decorative

Forms:
- labels
- errors
- descriptions where needed

Buttons:
- describe the action

Do not use clickable `<div>` elements where semantic buttons/links are appropriate.

## Error handling

Never leave the user with a blank page.

Provide:
- Loading state
- Error state
- Retry action where useful
- Empty state
- Friendly messages

## SEO anti-patterns to avoid

Do not:
- Stuff keywords
- Create duplicate pages
- Hide text solely for SEO
- Generate thousands of thin pages
- Fake reviews
- Fake locations
- Fake prices
- Use misleading schema
- Automatically index internal search results
- Put important text inside images only

## Content placeholders

If information is unknown, use explicit placeholders such as:

`[BUSINESS_PHONE]`
`[WHATSAPP_NUMBER]`
`[BUSINESS_EMAIL]`
`[DELIVERY_POLICY]`
`[RETURN_POLICY]`
`[BUSINESS_ADDRESS]`
`[SOCIAL_INSTAGRAM_URL]`
`[SOCIAL_TIKTOK_URL]`
`[PAYMENT_PROVIDER]`

Do not invent business details.

## Definition of done

A feature is not complete merely because it renders.

Verify:
- Desktop
- Mobile
- Keyboard navigation
- Empty states
- Error states
- SEO metadata
- Links
- Images
- Performance
- Accessibility
- Responsive layout

## Final QA checklist

### Brand
- Looks like Pretos Touch
- Consistent typography
- Consistent spacing
- Consistent buttons
- Professional product presentation

### Ecommerce
- Product pages work
- Variants work
- Cart works
- Checkout flow is coherent
- WhatsApp CTA works once configured

### SEO
- Titles
- Meta descriptions
- Canonicals
- Sitemap
- Robots
- Structured data
- Breadcrumbs
- Internal links
- Image alt text

### Social
- Open Graph
- Social preview images
- Shareable product URLs
- Campaign landing-page support

### Accessibility
- Keyboard navigation
- Focus states
- Contrast
- Labels
- Semantic HTML
- Reduced motion

### Performance
- Optimized images
- Minimal scripts
- Fast initial render
- No layout shift
- Mobile performance checked

## Important

Do not stop after creating the homepage.

Build the core system:
1. Layout
2. Navigation
3. Homepage
4. Category templates
5. Product templates
6. Blog templates
7. Cart
8. Checkout integration points
9. SEO infrastructure
10. Analytics abstraction
11. Policies/support pages
12. Error/empty states

Then test the entire user journey from social landing → product → cart → checkout.
