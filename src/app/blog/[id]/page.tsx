import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostClient from '../../../components/BlogPostClient';
import { BLOG_POSTS_DATA } from '../../../data/portfolioData';
import { SITE_CONFIG, SITE_URL, getCanonicalUrl, getOgImageUrl, generateBreadcrumbJsonLd } from '../../../lib/siteConfig';

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({
    id: post.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.id === id);

  if (!post) {
    return {
      title: `Publication Not Found | ${SITE_CONFIG.shortName}`,
    };
  }

  const canonicalUrl = getCanonicalUrl(`/blog/${post.id}`);
  const imageUrl = getOgImageUrl('/og-image.png');

  return {
    title: `${post.title} | ${SITE_CONFIG.shortName} Insights`,
    description: post.excerpt,
    keywords: [
      post.title,
      post.category,
      'Software Architecture',
      'Engineering Insights',
      SITE_CONFIG.fullName,
      SITE_CONFIG.shortName,
      SITE_CONFIG.username,
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': canonicalUrl,
        'ar': canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title: `${post.title} | ${SITE_CONFIG.shortName}`,
      description: post.excerpt,
      url: canonicalUrl,
      type: 'article',
      publishedTime: '2025-01-15T00:00:00.000Z',
      modifiedTime: '2025-02-01T00:00:00.000Z',
      section: post.category,
      tags: [post.category, 'Software Engineering', 'Architecture'],
      authors: [SITE_URL],
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
      creator: `@${SITE_CONFIG.username}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.id === id);
  if (!post) {
    notFound();
  }

  const canonicalUrl = getCanonicalUrl(`/blog/${post.id}`);
  const imageUrl = getOgImageUrl('/og-image.png');

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${canonicalUrl}#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: '2025-01-15T00:00:00.000Z',
        dateModified: '2025-02-01T00:00:00.000Z',
        inLanguage: ['en-US', 'ar-YE'],
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
        image: [imageUrl],
        author: {
          '@id': `${SITE_URL}/#person`,
        },
        publisher: {
          '@id': `${SITE_URL}/#website`,
        },
        url: canonicalUrl,
        articleSection: post.category,
        keywords: `${post.category}, Software Architecture, Engineering Insights`,
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: post.title, path: `/blog/${post.id}` },
      ]),
    ],
  };

  return (
    <>
      <script
        id="blog-detail-jsonld"
        key="blog-detail-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogPostClient id={id} />
    </>
  );
}
