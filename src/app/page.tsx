import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'MultiOrigin — Building Brands That Matter',
  description:
    'MultiOrigin is India\'s full-service creative brand studio offering print, digital marketing, print design, website & app UI/UX design and development. Parent company of Anginat, AnginatLearning, and AnginatEvents. Trusted by Havells, Compunnel Inc, Accops, and more.',
  alternates: {
    canonical: 'https://multiorigin.com',
  },
  openGraph: {
    title: 'MultiOrigin — Building Brands That Matter',
    description:
      'India\'s full-service creative brand studio — print, digital marketing, design & app development. Parent of Anginat, AnginatLearning & AnginatEvents.',
    url: 'https://multiorigin.com',
  },
};

export default function Page() {
  return <HomeContent />;
}
