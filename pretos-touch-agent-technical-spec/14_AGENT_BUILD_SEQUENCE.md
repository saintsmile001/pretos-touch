# Pretos Touch — Recommended Antigravity Build Sequence

## Objective

Build Pretos Touch in vertical slices rather than creating isolated pages.

## Phase 1 — Repository and architecture

Before implementation:
1. Inspect repository.
2. Identify framework.
3. Identify package manager.
4. Identify current routing.
5. Identify styling system.
6. Identify existing UI primitives.
7. Identify database/backend.
8. Identify deployment setup.
9. Identify environment variables.
10. Identify existing tests.

Do not replace working infrastructure unnecessarily.

## Phase 2 — Foundation

Implement:
- Design tokens
- Typography
- Layout
- Header
- Navigation
- Footer
- Button/input primitives
- Responsive container
- Toast
- Loading/error/empty states

Acceptance:
- Site shell works on mobile and desktop.

## Phase 3 — Catalog

Implement:
- Product data model
- Category model
- Product repository/service
- ProductCard
- ProductGrid
- Category pages
- Product page

Load the initial seed products as draft/test catalog data.

Acceptance:
- Every seed product renders through the same product template.

## Phase 4 — Homepage

Implement homepage sections using actual product/category data.

Acceptance:
- Homepage has no fake reviews or invented claims.
- Product links work.
- Category links work.

## Phase 5 — Search

Implement:
- Search input
- Search results
- Empty state
- Suggestions

Acceptance:
- Search does not expose internal errors.
- Search URLs are noindex.

## Phase 6 — Cart

Implement:
- Add to cart
- Quantity
- Remove
- Persistence
- Summary
- Empty cart

Acceptance:
- Cart survives navigation/refresh according to architecture.

## Phase 7 — Checkout integration

Connect the selected commerce/payment system.

Do not implement fake payment success.

Acceptance:
- Successful payment/order is confirmed by trusted server/provider state.

## Phase 8 — WhatsApp

Implement configurable WhatsApp ordering.

Environment/config:
`WHATSAPP_NUMBER`

Do not commit a real secret or business number into source control if environment configuration is more appropriate.

## Phase 9 — Reviews

Implement:
- Review display
- Review submission
- Moderation
- Rating summary

Never seed fake customer reviews.

## Phase 10 — Content/Blog

Implement:
- Article model
- Blog listing
- Article template
- Category navigation
- Product CTAs
- SEO metadata

## Phase 11 — SEO infrastructure

Implement:
- Metadata
- Canonical
- Open Graph
- Sitemap
- robots
- Structured data
- Breadcrumbs
- 404
- Redirect support

## Phase 12 — Analytics

Implement analytics abstraction and event tracking.

Do not scatter vendor calls through UI components.

## Phase 13 — Admin/CMS

If existing commerce/CMS provides admin:
- Use it.

Otherwise implement only the minimum admin required.

Do not spend excessive build time recreating a mature ecommerce admin system if an appropriate backend already exists.

## Phase 14 — QA

Run:
- Type checking
- Lint
- Unit tests where applicable
- Integration tests
- Build
- Mobile inspection
- Desktop inspection
- Accessibility checks
- SEO checks

## Phase 15 — Production hardening

Check:
- Environment variables
- Error logging
- Security headers
- Caching
- Image optimization
- Rate limits
- Webhook verification
- Backups
- Database migrations

## Final deliverable

The agent should leave a coherent, runnable Pretos Touch application rather than a collection of static mockups.
