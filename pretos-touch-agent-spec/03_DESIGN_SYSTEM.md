# Pretos Touch — Design & UX System

## Brand direction

Pretos Touch should feel:

**Warm + modern + trustworthy + feminine + premium-accessible**

The site should feel like a real Nigerian consumer brand, not a generic dropshipping store.

## Visual principles

### Use
- Strong product photography
- Generous whitespace
- Clear hierarchy
- Rounded but restrained UI elements
- Editorial-style content sections
- Clean cards
- Strong typography
- Subtle motion
- Real customer imagery when available

### Avoid
- Excessive gradients
- Too many colors
- Overly decorative fonts
- Excessive animations
- Stock-photo overload
- Giant text that pushes products below the fold
- Fake urgency
- Countdown timers unless genuinely required

## Suggested color system

Use a restrained neutral foundation with one strong Pretos Touch brand accent.

Suggested starting tokens:

```css
--background: #FAF8F6;
--surface: #FFFFFF;
--text: #171717;
--muted-text: #6B6B6B;
--border: #E7E2DE;
--brand: #6E3B4A;
--brand-dark: #4F2733;
--accent-soft: #F2E6E8;
--success: #287A4B;
--danger: #B42318;
```

These are starting values, not mandatory. Preserve contrast and accessibility.

## Typography

Use a highly readable modern sans-serif for most UI.

Optional:
- Serif/display font for selected editorial headings
- Never use decorative fonts for body text

Typography hierarchy:
- Display
- H1
- H2
- H3
- Body
- Small
- Label

## Buttons

Primary:
- Strong brand color
- High contrast
- Clear action

Examples:
- Shop Now
- Add to Cart
- Buy Now
- Order on WhatsApp

Secondary:
- Outline or neutral

Do not use more than two primary button styles.

## Product cards

Each product card can contain:
- Product image
- Badge if genuinely applicable
- Product name
- Rating if real
- Price
- Compare-at price if applicable
- Quick add where useful

Do not overcrowd cards.

## Homepage hero

Desktop:
- Split or editorial layout
- Product/lifestyle image
- Strong headline
- Supporting copy
- Primary CTA
- Secondary CTA

Mobile:
- Prioritize headline + product visual + CTA
- Avoid tiny text

## Mobile-first

Design for approximately:
- 320px+
- 375px
- 390px
- 430px
- Tablet
- Desktop

Test:
- Header
- Navigation
- Product gallery
- Cart
- Checkout
- Forms
- Sticky mobile CTA

## Product page UX

Mobile product page should keep the buying action accessible.

Recommended:
- Image gallery
- Product info
- Price
- Variant
- Quantity
- Sticky Add to Cart / Buy Now bar
- Product details
- Reviews
- FAQ

## Accessibility

Target WCAG AA quality.

Must include:
- Visible focus states
- Keyboard navigation
- Labels for inputs
- Alt text
- Sufficient contrast
- Reduced-motion support
- Semantic landmarks
- Proper heading hierarchy
- Accessible dialogs/drawers
- Touch targets large enough for mobile

## Motion

Use subtle motion only:
- Hover elevation
- Fade/slide on reveal
- Image transitions
- Cart feedback

Respect `prefers-reduced-motion`.

## Social proof

Use:
- Real reviews
- Real UGC
- Customer photos
- Verified purchase indicators if the commerce system supports them

Never fabricate social proof.

## Photography direction

Prefer:
- Clean product photography
- Natural lifestyle photography
- Diverse Nigerian/African representation where appropriate
- Close-up product detail
- Product-in-use images

Avoid:
- Generic unrelated stock photos
- Misleading product visuals
