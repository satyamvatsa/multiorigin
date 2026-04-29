import type { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about MultiOrigin — India\'s creative brand studio and parent company of Anginat, AnginatLearning, and AnginatEvents. Discover our story, mission, vision, and the values that drive us. Trusted by Havells, Compunnel Inc, Accops, Apex Analytix, and more.',
  alternates: { canonical: 'https://multiorigin.com/about' },
  openGraph: {
    title: 'About MultiOrigin — Our Story, Mission & Values',
    description:
      'The story behind India\'s creative powerhouse — print, digital marketing, design & development. Parent of Anginat, AnginatLearning & AnginatEvents.',
    url: 'https://multiorigin.com/about',
  },
};

export default function Page() {
  return <AboutContent />;
}
