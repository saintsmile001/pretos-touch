# Pretos Touch 🛍️

A production-ready, SEO-first, mobile-optimized ecommerce web application for **Pretos Touch** — a Nigerian consumer brand offering thoughtfully selected postpartum support, gentle baby care, wireless comfort bras, and women's wellness essentials.

---

## ✨ Key Features

- **🛍️ Product-First Catalog Discovery**: Homepage immediately highlights **Shop Best Sellers**, category navigation pills, visual category tiles, verified customer reviews, and educational wellness guides.
- **🇳🇬 Nigerian Commerce Tailored**: Dual conversion path supporting both standard online card/transfer checkout with localized state delivery calculations (Lagos vs nationwide states) and direct **WhatsApp Order** generation.
- **📱 Mobile-First UX**: Responsive from 320px up to desktop viewports with a sticky purchase bar on mobile.
- **⚡ SEO & Structured Data**: Built-in JSON-LD schemas (`Product`, `Offer`, `BreadcrumbList`, `Organization`, `Article`, `WebSite`), dynamic `sitemap.xml`, and search-engine optimized `robots.txt`.
- **✍️ Educational Content & Guides**: Integrated blog with contextual product recommendation banners.
- **🛡️ Clean Domain Modeling**: Backend-agnostic repository and service architecture.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & SSR)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with customized Pretos Touch design tokens
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
├── public/
│   └── images/              # Product, category, hero, and blog image assets
├── src/
│   ├── app/                 # Next.js App Router (pages & API routes)
│   ├── components/
│   │   ├── cart/            # Cart drawer & line items
│   │   ├── home/            # Homepage sections (Hero, Categories, Reviews, etc.)
│   │   ├── layout/          # Header, Footer, AnnouncementBar, Breadcrumbs
│   │   ├── product/         # ProductCard, Gallery, PurchasePanel, StickyBar
│   │   └── ui/              # Button, Accordion, Badge, EmptyState
│   ├── context/             # CartContext (LocalStorage) & ToastContext
│   ├── data/                # Initial seed data for products & categories
│   ├── lib/                 # Services, WhatsApp order generator, SEO & analytics
│   └── types/               # TypeScript domain models
└── README.md
```

---

## 📄 License
Private & proprietary to Pretos Touch.
