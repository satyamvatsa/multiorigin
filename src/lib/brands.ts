export type Brand = {
  name: string;
  initial: string;
  tagline: string;
  shortDesc: string;
  href: string;
};

export const BRANDS: Brand[] = [
  {
    name: 'Anginat',
    initial: 'A',
    tagline: 'AI Voice Services Platform',
    shortDesc: 'Text to Speech, Speech to Text, Voice Chat & Voice Cloning across 10+ languages.',
    href: 'https://anginat.com',
  },
  {
    name: 'AnginatLearning',
    initial: 'AL',
    tagline: 'AI-Powered LMS',
    shortDesc:
      '500+ institutions, 100K+ learners. AI learning paths, biometric attendance, 40+ features free.',
    href: 'https://anginatlearning.com',
  },
  {
    name: 'AnginatEvents',
    initial: 'AE',
    tagline: 'AI-Powered Event Management',
    shortDesc:
      '50K+ events, 10M+ attendees. AI photo distribution, QR check-in, real-time analytics.',
    href: 'https://anginatevents.com',
  },
];
