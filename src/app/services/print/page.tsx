import type { Metadata } from 'next';
import PrintHubContent from '@/components/PrintHubContent';
import { PRINT_SERVICES } from '@/lib/print-services';

const SITE_URL = 'https://multiorigin.com';
const URL = `${SITE_URL}/services/print`;

export const metadata: Metadata = {
  title:
    'Print Services in India — PVC, NFC, RFID Cards, Lanyards, Packaging, T-Shirt & Flex | MultiOrigin',
  description:
    'India\'s end-to-end print partner. PVC cards, NFC smart cards, RFID access cards, custom lanyards, premium packaging, t-shirt printing & large-format flex banners. Bulk orders, custom shapes, eco materials, fast pan-India delivery.',
  keywords: [
    'print services India',
    'printing services',
    'PVC card printing',
    'NFC card printing',
    'RFID card printing',
    'lanyard printing',
    'custom packaging printing',
    't-shirt printing India',
    'flex banner printing',
    'commercial printing India',
    'bulk printing services',
    'corporate printing',
    'event printing',
    'print partner India',
    'MultiOrigin print',
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    url: URL,
    title: 'Print Services in India — PVC, NFC, RFID, Lanyards, Packaging & More',
    description:
      'End-to-end print services across India — cards, lanyards, packaging, apparel & signage. Bulk pricing, free design, fast delivery.',
    siteName: 'MultiOrigin',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Print Services in India — MultiOrigin',
    description:
      'PVC, NFC, RFID cards, lanyards, packaging, t-shirt printing, flex banners — under one roof.',
  },
  category: 'Print Services',
};

export default function Page() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: 'Print', item: URL },
    ],
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Print Services Catalogue — MultiOrigin',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: PRINT_SERVICES.length,
    itemListElement: PRINT_SERVICES.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/services/print/${s.slug}`,
      name: s.hero.eyebrow,
    })),
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Print Services',
    serviceType: 'Commercial Printing',
    provider: {
      '@type': 'Organization',
      name: 'MultiOrigin',
      url: SITE_URL,
      email: 'contact@multiorigin.com',
      telephone: '+919650582767',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
      },
    },
    areaServed: { '@type': 'Country', name: 'India' },
    description:
      'Full-service commercial printing partner: PVC cards, NFC & RFID smart cards, lanyards, custom packaging, t-shirt printing, and flex/large-format printing.',
    url: URL,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Print Services Catalogue',
      itemListElement: PRINT_SERVICES.map((s) => ({
        '@type': 'Offer',
        url: `${SITE_URL}/services/print/${s.slug}`,
        itemOffered: {
          '@type': 'Service',
          name: s.hero.eyebrow,
          description: s.meta.description,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PrintHubContent />
    </>
  );
}
