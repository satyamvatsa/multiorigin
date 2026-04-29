import type { Metadata } from 'next';
import ContactContent from '@/components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us — Get in Touch',
  description:
    'Contact MultiOrigin for print, digital marketing, design, and web & app development services. Email: contact@multiorigin.com | Phone: +91 9650582767. We respond within 24 hours.',
  alternates: { canonical: 'https://multiorigin.com/contact' },
  openGraph: {
    title: 'Contact MultiOrigin — Let\'s Build Something Together',
    description:
      'Get in touch with India\'s creative brand studio. Email contact@multiorigin.com or call +91 9650582767.',
    url: 'https://multiorigin.com/contact',
  },
};

export default function Page() {
  return <ContactContent />;
}
