import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import { BLOG_POSTS, getPostBySlug, getAllSlugs } from '@/lib/blog-posts';

const SITE_URL = 'https://multiorigin.com';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.excerpt,
      siteName: 'MultiOrigin',
      locale: 'en_IN',
      publishedTime: post.date,
      authors: ['MultiOrigin'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return null;

  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);

  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost =
    currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'MultiOrigin',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'MultiOrigin',
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="min-h-screen pt-32 pb-20 px-4">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-orange-400 transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-display text-white mb-5 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime} read
              </span>
            </div>
          </header>

          <div className="border-t border-white/10 pt-10">
            <Content />
          </div>

          <div className="mt-14 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-500/[0.02] border border-orange-500/25">
            <h3 className="text-xl font-bold text-white mb-2">
              Ready to create your QR code?
            </h3>
            <p className="text-gray-400 text-sm mb-5">
              Generate custom QR codes with your brand colours, logo, and
              preferred format — completely free.
            </p>
            <a
              href="https://qr-generator.multiorigin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Open QR Generator <ArrowRight size={14} />
            </a>
          </div>

          {(prevPost || nextPost) && (
            <nav className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group p-5 rounded-2xl surface border border-white/8 hover:border-orange-500/30 transition-all"
                >
                  <span className="text-xs text-gray-500 mb-2 block">
                    Previous
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">
                    {prevPost.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group p-5 rounded-2xl surface border border-white/8 hover:border-orange-500/30 transition-all text-right"
                >
                  <span className="text-xs text-gray-500 mb-2 block">
                    Next
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">
                    {nextPost.title}
                  </span>
                </Link>
              )}
            </nav>
          )}
        </article>
      </main>
    </>
  );
}
