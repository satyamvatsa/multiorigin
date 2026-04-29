import type { Metadata } from 'next';
import BrandsContent from '@/components/BrandsContent';

export const metadata: Metadata = {
  title: 'Our Brands — Anginat, AnginatLearning & AnginatEvents',
  description:
    'Explore the brands under MultiOrigin: Anginat (AI Voice Services — Text to Speech, Speech to Text, Voice Cloning), AnginatLearning (AI-powered LMS for 500+ institutions, 100K+ learners), and AnginatEvents (AI event management platform, 50K+ events, 10M+ attendees).',
  alternates: { canonical: 'https://multiorigin.com/brands' },
  openGraph: {
    title: 'MultiOrigin Brands — Anginat, AnginatLearning & AnginatEvents',
    description:
      'Discover Anginat, AnginatLearning, and AnginatEvents — three distinct brands united by MultiOrigin\'s commitment to quality and creative excellence.',
    url: 'https://multiorigin.com/brands',
  },
};

export default function Page() {
  return <BrandsContent />;
}
