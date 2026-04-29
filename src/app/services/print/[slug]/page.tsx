import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PrintServiceDetail from '@/components/PrintServiceDetail';
import {
  PRINT_SERVICES,
  getServiceBySlug,
  getRelatedServices,
} from '@/lib/print-services';

const SITE_URL = 'https://multiorigin.com';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PRINT_SERVICES.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const url = `${SITE_URL}/services/print/${service.slug}`;

  return {
    title: service.meta.title,
    description: service.meta.description,
    keywords: service.meta.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: service.meta.title,
      description: service.meta.description,
      siteName: 'MultiOrigin',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.meta.title,
      description: service.meta.description,
    },
    category: service.category,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedSlugs);
  const url = `${SITE_URL}/services/print/${service.slug}`;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.hero.eyebrow,
    serviceType: service.category,
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
    description: service.meta.description,
    url,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      url,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.hero.eyebrow} options`,
      itemListElement: service.useCases.map((u) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: u.title,
          description: u.desc,
        },
      })),
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: 'Print', item: `${SITE_URL}/services/print` },
      { '@type': 'ListItem', position: 4, name: service.hero.eyebrow, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PrintServiceDetail service={service} related={related} />
    </>
  );
}
