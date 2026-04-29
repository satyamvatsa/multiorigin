import type { Metadata } from 'next';
import ServicesContent from '@/components/ServicesContent';

export const metadata: Metadata = {
  title: 'Services — Print, Digital Marketing, Design & Development',
  description:
    'MultiOrigin offers print services, digital marketing, print design, and website & app UI/UX design and development. End-to-end creative solutions for brands across India. Trusted by Havells, Compunnel Inc, Accops, Apex Analytix, and more.',
  alternates: { canonical: 'https://multiorigin.com/services' },
  openGraph: {
    title: 'MultiOrigin Services — Print, Digital Marketing, Design & Development',
    description:
      'Full-service creative studio offering print, digital marketing, print design, and website & app development across India.',
    url: 'https://multiorigin.com/services',
  },
};

export default function Page() {
  return <ServicesContent />;
}
