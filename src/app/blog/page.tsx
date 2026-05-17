import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog-posts';

const SITE_URL = 'https://multiorigin.com';

export const metadata: Metadata = {
  title: 'Blog — QR Code Guides, Tips & Business Use Cases',
  description:
    'Practical guides on QR codes for business cards, menus, packaging, and branding. Learn how to create, customise, and use QR codes effectively.',
  keywords: [
    'QR code blog',
    'QR code guides',
    'QR code tips',
    'MultiOrigin blog',
    'QR code business',
  ],
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/blog`,
    title: 'Blog — QR Code Guides & Tips | MultiOrigin',
    description:
      'Practical guides on creating and using QR codes for business, marketing, and branding.',
    siteName: 'MultiOrigin',
    locale: 'en_IN',
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndex() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-center">
          <span className="eyebrow mb-4 inline-flex">
            <span className="eyebrow-dot" />
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-display text-white mb-4">
            QR Code Guides{' '}
            <span className="gradient-text">&amp; Insights</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Practical tips on creating, customising, and using QR codes for
            your business, packaging, and marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-6 rounded-2xl surface border border-white/8 hover:border-orange-500/40 transition-all card-hover"
            >
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={12} />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime} read
                </span>
              </div>
              <h2 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-400 group-hover:gap-2.5 transition-all">
                Read More <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
