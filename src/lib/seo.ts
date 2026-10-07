import { Product, Article, Category } from '@/types';
import { siteConfig } from '@/lib/config';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.brandName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/images/logo.png`,
    sameAs: [
      siteConfig.socialLinks.instagram,
      siteConfig.socialLinks.tiktok,
      siteConfig.socialLinks.facebook,
    ].filter(Boolean),
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.brandName,
    url: siteConfig.siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getProductJsonLd(product: Product) {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    image: product.images.map((img) => img.url),
    sku: product.sku || product.id,
    brand: {
      '@type': 'Brand',
      name: product.brand || siteConfig.brandName,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: product.price.currency,
      price: product.price.amount,
      availability: product.available
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      url: `${siteConfig.siteUrl}/products/${product.slug}`,
      seller: {
        '@type': 'Organization',
        name: siteConfig.brandName,
      },
    },
  };

  if (product.ratingAverage && product.reviewCount > 0) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: product.ratingAverage,
      reviewCount: product.reviewCount,
    };
  }

  return schema;
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.siteUrl}${item.url}`,
    })),
  };
}

export function getArticleJsonLd(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.featuredImage?.url || undefined,
    author: {
      '@type': 'Person',
      name: article.authorName || siteConfig.brandName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.brandName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.siteUrl}/images/logo.png`,
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.siteUrl}/blog/${article.slug}`,
    },
  };
}
