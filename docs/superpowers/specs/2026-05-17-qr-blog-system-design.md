# QR Generator Blog System — Design Spec

## Goal

Build an MDX-based blog system on multiorigin.com that publishes 7 SEO-optimized posts targeting keywords around QR codes. Each post naturally links to `qr-generator.multiorigin.com` to build backlinks and drive traffic.

## Architecture

- **MDX content files** in `src/content/blog/` — one `.mdx` per post
- **Blog index page** at `/blog` — card grid with title, excerpt, date, read time
- **Individual post pages** at `/blog/[slug]` — rendered MDX with Article schema
- **Shared blog layout** with consistent header, reading width, and footer CTA
- **No external CMS or database** — all content is static MDX committed to the repo

### MDX Setup

Use `next-mdx-remote` for rendering MDX content at build time. Each MDX file has frontmatter:

```yaml
title: "..."
slug: "..."
excerpt: "..."
date: "2026-05-17"
keywords: ["...", "..."]
readTime: "5 min"
```

A utility in `src/lib/blog.ts` reads the content directory, parses frontmatter, and returns sorted post metadata.

### SEO Per Post

- `<title>` and `<meta description>` from frontmatter
- Canonical URL: `https://multiorigin.com/blog/{slug}`
- Open Graph and Twitter card metadata
- JSON-LD Article schema with author "MultiOrigin"
- Breadcrumb structured data

## Blog Posts

| # | Slug | Target Keywords | Angle |
|---|------|----------------|-------|
| 1 | how-to-create-qr-code-free | free QR code generator, create QR code online | Step-by-step how-to, CTA to tool |
| 2 | qr-codes-for-business-cards | QR code business card, vCard QR | Professional networking use case |
| 3 | restaurant-menu-qr-code | QR code menu, digital menu QR | Restaurant/hospitality use case |
| 4 | qr-code-types-explained | types of QR codes, URL vs vCard vs WiFi QR | Educational explainer of all QR types |
| 5 | custom-qr-code-with-logo | QR code with logo, branded QR code | Branding/design angle |
| 6 | qr-codes-for-product-packaging | QR code packaging, smart packaging | Ties into MultiOrigin print services |
| 7 | qr-code-vs-barcode | QR code vs barcode, difference QR barcode | Comparison/educational |

### Content Guidelines

- 800-1200 words per post
- 1-2 natural links to `qr-generator.multiorigin.com` per post (not forced)
- Cross-links to `/services/print` where relevant (posts 2, 5, 6)
- Practical tone — helpful, not salesy
- Each post ends with a brief CTA section pointing to the QR generator

## Blog Index Page

- Grid of cards (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
- Each card shows: title, excerpt, date, read time
- Sorted by date descending
- Page metadata targets "MultiOrigin blog" and "QR code guides"

## Dependencies

- `next-mdx-remote` — MDX rendering
- `gray-matter` — frontmatter parsing
- No other new dependencies needed
