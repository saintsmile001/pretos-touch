# Pretos Touch — Component Tree

## Architecture

Use a layered component architecture.

```text
app/
├── layout
├── routes
└── pages

components/
├── layout/
├── navigation/
├── ecommerce/
├── product/
├── collection/
├── content/
├── forms/
├── reviews/
├── seo/
├── analytics/
└── ui/
```

## Layout

```text
SiteLayout
├── AnnouncementBar
├── Header
│   ├── DesktopNavigation
│   ├── MobileMenuTrigger
│   ├── SearchTrigger
│   ├── AccountLink
│   └── CartButton
├── Main
└── Footer
```

## Navigation

```text
Header
├── Logo
├── DesktopNav
│   ├── ShopMenu
│   ├── PostpartumLink
│   ├── WomensWellnessLink
│   ├── BrasShapewearLink
│   ├── BabyCareLink
│   └── BlogLink
├── SearchButton
├── AccountButton
└── CartButton
```

## Homepage

```text
HomePage
├── HeroSection
├── FeaturedProductsSection
│   └── ProductGrid
│       └── ProductCard
├── CategorySection
│   └── CategoryCard[]
├── BrandBenefitsSection
│   └── BenefitCard[]
├── SocialProofSection
│   └── ReviewCard[]
├── FeaturedArticlesSection
│   └── ArticleCard[]
├── SocialUGCSection
└── NewsletterSection
```

## Shop

```text
ShopPage
├── Breadcrumbs
├── PageHeader
├── CategoryShortcuts
├── ProductToolbar
│   ├── FilterButton
│   ├── SortSelect
│   └── ResultCount
├── FilterDrawer
├── ProductGrid
│   └── ProductCard
└── Pagination
```

## Collection

```text
CollectionPage
├── Breadcrumbs
├── CollectionHero
├── CollectionIntro
├── ProductToolbar
├── ProductGrid
├── BuyingGuide
├── FAQAccordion
├── RelatedCollections
└── RelatedArticles
```

## Product

```text
ProductPage
├── Breadcrumbs
├── ProductPrimary
│   ├── ProductGallery
│   └── ProductPurchasePanel
│       ├── ProductTitle
│       ├── RatingSummary
│       ├── Price
│       ├── Availability
│       ├── VariantSelector
│       ├── QuantitySelector
│       ├── AddToCartButton
│       ├── BuyNowButton
│       └── WhatsAppOrderButton
├── MobileStickyPurchaseBar
├── ProductDescription
├── ProductBenefits
├── ProductSpecifications
├── ProductHowToUse
├── ProductCare
├── ShippingReturnsSummary
├── ProductFAQ
├── ReviewSection
└── RelatedProducts
```

## Cart

```text
CartPage
├── Breadcrumbs
├── CartHeader
├── CartItems
│   └── CartItem
├── CartSummary
│   ├── DiscountInput
│   ├── ShippingEstimate
│   ├── Subtotal
│   └── CheckoutButton
└── EmptyCartState
```

## Blog

```text
BlogPage
├── PageHeader
├── FeaturedArticle
├── BlogCategoryNav
├── ArticleGrid
│   └── ArticleCard
└── Pagination
```

## Article

```text
ArticlePage
├── Breadcrumbs
├── ArticleHeader
├── ArticleHero
├── ArticleContent
├── InlineProductCTA
├── ShareButtons
├── RelatedArticles
└── NewsletterSection
```

## UI primitives

Use existing framework primitives where available.

Core:
- Button
- Link
- Input
- Select
- Checkbox
- Radio
- Dialog
- Drawer
- Accordion
- Tabs
- Toast
- Skeleton
- Badge
- Card
- Separator

## Component rules

Components should:
- Accept typed props
- Avoid direct database access
- Avoid direct payment-provider calls
- Avoid hardcoded business details
- Be independently testable
- Support loading/error states when data-driven

Data access belongs in service/repository layers.
