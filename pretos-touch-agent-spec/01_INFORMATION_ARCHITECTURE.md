# Pretos Touch — Information Architecture

## Goal

Create a scalable ecommerce information architecture that makes it easy for users and search engines to understand Pretos Touch.

## Site hierarchy

```text
Home
├── Shop
│   ├── Postpartum Care
│   ├── Women's Wellness
│   ├── Bras & Shapewear
│   ├── Baby Care
│   └── Beauty & Personal Care
├── About
├── Reviews
├── Blog
│   ├── Postpartum
│   ├── Women's Wellness
│   ├── Baby Care
│   ├── Bras & Shapewear
│   └── Buying Guides
├── FAQ
└── Contact
```

## URL rules

Use short, readable, lowercase URLs.

Good:
- `/products/postpartum-belt`
- `/collections/postpartum-care`
- `/blog/how-to-use-a-postpartum-belt`

Avoid:
- `/product?id=123`
- `/category/women-products-final`
- `/blog/post-123`

## Category page structure

Each category page should have:

1. Breadcrumb
2. H1
3. Short category introduction
4. Product grid
5. Filters/sorting where useful
6. Category buying guide
7. FAQs
8. Related categories
9. Internal links to relevant educational content

The category introduction should be useful, not a keyword-stuffed paragraph.

## Product discovery

Users should be able to reach products through:
- Main navigation
- Category pages
- Search
- Homepage
- Blog posts
- Related products
- Social landing pages
- Internal links

## Search

Search should support:
- Product names
- Product categories
- Synonyms
- Partial matches

Examples:
- "postpartum"
- "belly belt"
- "baby nail"
- "period"
- "menstrual"
- "push up"
- "bra"

Show a helpful empty state when there are no results.

## Filtering

If catalog size warrants it, support:
- Category
- Price
- Availability
- Size
- Color
- Product type

Do not create thousands of indexable filter URLs.

## Footer

Include:
- Shop
- Categories
- Customer care
- Shipping
- Returns
- FAQ
- Contact
- About
- Blog
- Social links
- WhatsApp
- Privacy
- Terms

## Internal linking

Important relationships:

Postpartum product → postpartum category → postpartum educational articles

Menstrual product → women's wellness → period education

Baby nail trimmer → baby care → baby grooming articles

Bra/shapewear product → category → buying guides

Blog articles should always link naturally to relevant products and categories.
