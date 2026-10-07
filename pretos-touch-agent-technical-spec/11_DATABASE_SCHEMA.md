# Pretos Touch — Database Schema

## Goal

Provide a normalized database foundation for products, customers, carts, orders, reviews, content, and marketing.

The exact SQL syntax may be adapted to the selected database.

Recommended relational model:
- PostgreSQL-compatible database
- UUID primary keys
- Timestamps
- Foreign keys
- Indexed slugs and lookup fields

## Tables

### users

```text
id UUID PK
email VARCHAR UNIQUE
name VARCHAR
phone VARCHAR NULL
password_hash VARCHAR NULL
role VARCHAR
created_at TIMESTAMP
updated_at TIMESTAMP
```

Roles:
- customer
- admin
- editor

If authentication is delegated to a provider, store provider identifiers rather than passwords.

### categories

```text
id UUID PK
slug VARCHAR UNIQUE
name VARCHAR
description TEXT
image_url TEXT NULL
parent_id UUID NULL FK categories.id
seo_title VARCHAR NULL
seo_description TEXT NULL
sort_order INT
created_at TIMESTAMP
updated_at TIMESTAMP
```

### products

```text
id UUID PK
slug VARCHAR UNIQUE
name VARCHAR
short_description TEXT
description TEXT
category_id UUID FK categories.id
brand VARCHAR NULL
base_price_minor BIGINT
currency VARCHAR(3)
compare_at_price_minor BIGINT NULL
sku VARCHAR NULL
available BOOLEAN
how_to_use TEXT NULL
care_instructions TEXT NULL
shipping_info TEXT NULL
return_info TEXT NULL
seo_title VARCHAR NULL
seo_description TEXT NULL
canonical_url TEXT NULL
created_at TIMESTAMP
updated_at TIMESTAMP
```

Store money in minor units where appropriate.

### collections

```text
id UUID PK
slug VARCHAR UNIQUE
name VARCHAR
description TEXT
image_url TEXT NULL
seo_title VARCHAR NULL
seo_description TEXT NULL
sort_order INT
created_at TIMESTAMP
updated_at TIMESTAMP
```

### collection_products

```text
collection_id UUID FK collections.id
product_id UUID FK products.id
sort_order INT
PRIMARY KEY(collection_id, product_id)
```

### product_images

```text
id UUID PK
product_id UUID FK products.id
url TEXT
alt_text TEXT
width INT NULL
height INT NULL
sort_order INT
created_at TIMESTAMP
```

### product_variants

```text
id UUID PK
product_id UUID FK products.id
sku VARCHAR UNIQUE
title VARCHAR
price_minor BIGINT
compare_at_price_minor BIGINT NULL
currency VARCHAR(3)
available BOOLEAN
inventory_quantity INT NULL
image_id UUID NULL FK product_images.id
created_at TIMESTAMP
updated_at TIMESTAMP
```

### variant_options

```text
id UUID PK
variant_id UUID FK product_variants.id
name VARCHAR
value VARCHAR
```

### carts

```text
id UUID PK
user_id UUID NULL FK users.id
session_id VARCHAR NULL
currency VARCHAR(3)
created_at TIMESTAMP
updated_at TIMESTAMP
```

### cart_items

```text
id UUID PK
cart_id UUID FK carts.id
product_id UUID FK products.id
variant_id UUID NULL FK product_variants.id
quantity INT
unit_price_minor BIGINT
created_at TIMESTAMP
updated_at TIMESTAMP
```

Snapshot the unit price at cart/order boundaries according to the commerce architecture.

### orders

```text
id UUID PK
user_id UUID NULL FK users.id
order_number VARCHAR UNIQUE
status VARCHAR
payment_status VARCHAR
fulfillment_status VARCHAR
currency VARCHAR(3)
subtotal_minor BIGINT
shipping_minor BIGINT
discount_minor BIGINT
total_minor BIGINT
customer_name VARCHAR
customer_email VARCHAR
customer_phone VARCHAR
shipping_address JSONB
billing_address JSONB NULL
notes TEXT NULL
created_at TIMESTAMP
updated_at TIMESTAMP
```

### order_items

```text
id UUID PK
order_id UUID FK orders.id
product_id UUID FK products.id
variant_id UUID NULL FK product_variants.id
product_name_snapshot VARCHAR
sku_snapshot VARCHAR NULL
quantity INT
unit_price_minor BIGINT
total_minor BIGINT
```

Use snapshots so historical orders remain correct after products change.

### reviews

```text
id UUID PK
product_id UUID FK products.id
user_id UUID NULL FK users.id
customer_name VARCHAR
rating INT
title VARCHAR NULL
body TEXT
verified_purchase BOOLEAN
status VARCHAR
created_at TIMESTAMP
updated_at TIMESTAMP
```

### review_images

```text
id UUID PK
review_id UUID FK reviews.id
url TEXT
alt_text TEXT NULL
sort_order INT
```

### articles

```text
id UUID PK
slug VARCHAR UNIQUE
title VARCHAR
excerpt TEXT
content TEXT
featured_image_url TEXT NULL
featured_image_alt TEXT NULL
category VARCHAR
author_name VARCHAR NULL
status VARCHAR
published_at TIMESTAMP NULL
created_at TIMESTAMP
updated_at TIMESTAMP
seo_title VARCHAR NULL
seo_description TEXT NULL
canonical_url TEXT NULL
```

### FAQs

```text
id UUID PK
scope_type VARCHAR
scope_id UUID NULL
question TEXT
answer TEXT
sort_order INT
created_at TIMESTAMP
updated_at TIMESTAMP
```

`scope_type` examples:
- global
- product
- category

### redirects

```text
id UUID PK
from_path VARCHAR UNIQUE
to_path VARCHAR
status_code INT
created_at TIMESTAMP
```

Use for permanent URL changes.

## Indexes

At minimum:
- products.slug
- products.category_id
- products.available
- categories.slug
- collections.slug
- articles.slug
- articles.published_at
- reviews.product_id
- orders.order_number
- users.email

## Constraints

- Rating must be 1–5
- Quantity must be > 0
- Prices must not be negative
- Slugs unique
- Order totals cannot be negative
- Foreign keys enforced
- Delete behavior intentionally chosen

## Privacy

Do not store unnecessary customer information.

Protect:
- Email
- Phone
- Addresses
- Order information

Never log payment secrets.

## Admin

Admin UI should support:
- Product CRUD
- Category CRUD
- Collection CRUD
- Inventory
- Orders
- Reviews moderation
- Articles
- FAQs
- Redirects
- Site settings

Admin functionality may be provided by the selected ecommerce/CMS platform rather than custom-built if appropriate.
