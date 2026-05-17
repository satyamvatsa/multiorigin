export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  keywords: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-to-create-qr-code-free',
    title: 'How to Create a QR Code for Free — A Step-by-Step Guide',
    excerpt:
      'Learn how to generate custom QR codes for free in under a minute. Covers URL, text, WiFi, and vCard QR codes with tips for design and placement.',
    date: '2026-05-17',
    readTime: '5 min',
    keywords: [
      'free QR code generator',
      'create QR code online',
      'how to make a QR code',
      'QR code maker',
    ],
  },
  {
    slug: 'qr-codes-for-business-cards',
    title: 'QR Codes on Business Cards — Why Every Professional Needs One',
    excerpt:
      'A vCard QR code on your business card lets contacts save your details instantly. Here\'s how to create one and where to place it for maximum impact.',
    date: '2026-05-16',
    readTime: '6 min',
    keywords: [
      'QR code business card',
      'vCard QR code',
      'digital business card QR',
      'NFC business card',
    ],
  },
  {
    slug: 'restaurant-menu-qr-code',
    title: 'How Restaurants Use QR Code Menus — Setup Guide for 2026',
    excerpt:
      'Digital QR code menus save printing costs, update instantly, and improve the dining experience. Learn how to set one up for your restaurant today.',
    date: '2026-05-15',
    readTime: '5 min',
    keywords: [
      'QR code menu',
      'restaurant QR code',
      'digital menu QR',
      'contactless menu',
    ],
  },
  {
    slug: 'qr-code-types-explained',
    title: 'Types of QR Codes Explained — URL, vCard, WiFi, UPI, and More',
    excerpt:
      'Not all QR codes are the same. Learn the difference between static and dynamic QR codes, and when to use URL, vCard, WiFi, email, and UPI types.',
    date: '2026-05-14',
    readTime: '7 min',
    keywords: [
      'types of QR codes',
      'QR code formats',
      'URL vs vCard QR code',
      'WiFi QR code',
      'dynamic QR code',
    ],
  },
  {
    slug: 'custom-qr-code-with-logo',
    title: 'How to Create a Custom QR Code with Your Logo',
    excerpt:
      'Branded QR codes with custom colors and logos get up to 80% more scans. Here\'s how to design one that matches your brand identity.',
    date: '2026-05-13',
    readTime: '5 min',
    keywords: [
      'QR code with logo',
      'branded QR code',
      'custom QR code design',
      'QR code branding',
    ],
  },
  {
    slug: 'qr-codes-for-product-packaging',
    title: 'QR Codes on Product Packaging — A Complete Guide for Brands',
    excerpt:
      'From ingredient lists to warranty registration, QR codes on packaging connect physical products to digital experiences. Learn best practices and examples.',
    date: '2026-05-12',
    readTime: '6 min',
    keywords: [
      'QR code packaging',
      'smart packaging QR',
      'product QR code',
      'packaging design QR',
    ],
  },
  {
    slug: 'qr-code-vs-barcode',
    title: 'QR Code vs Barcode — What\'s the Difference and Which Should You Use?',
    excerpt:
      'Barcodes store up to 25 characters. QR codes store over 4,000. Learn the key differences, use cases, and when each format makes sense for your business.',
    date: '2026-05-11',
    readTime: '6 min',
    keywords: [
      'QR code vs barcode',
      'difference between QR code and barcode',
      'barcode vs QR code',
      '2D barcode',
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
