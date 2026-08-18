import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostClient from '../../../components/BlogPostClient';
import { BLOG_POSTS_DATA } from '../../../data/portfolioData';

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
      title: 'Publication Not Found | Abdulrahman Redhwan',
    };
  }

  const canonicalUrl = `https://madbootnova.com/blog/${post.id}`;

  return {
    title: `${post.title} | Engineering Insights`,
    description: post.excerpt,
    keywords: [
      post.title,
      post.category,
      'Software Architecture',
      'Engineering Insights',
      'Abdulrahman Redhwan',
      'Madboot Nova',
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': canonicalUrl,
        'ar-YE': canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title: `${post.title} | Abdulrahman Redhwan`,
      description: post.excerpt,
      url: canonicalUrl,
      type: 'article',
      publishedTime: '2025-01-15T00:00:00.000Z',
      modifiedTime: '2025-02-01T00:00:00.000Z',
      section: post.category,
      tags: [post.category, 'Software Engineering', 'Architecture'],
      authors: ['https://madbootnova.com'],
      images: [
        {
          url: 'https://madbootnova.com/og-image.png',
          secureUrl: 'https://madbootnova.com/og-image.png',
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
      images: ['https://madbootnova.com/og-image.png'],
      creator: '@ak01redwan',
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.id === id);
  if (!post) {
    notFound();
  }

  const canonicalUrl = `https://madbootnova.com/blog/${post.id}`;

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
        image: ['https://madbootnova.com/og-image.png'],
        author: {
          '@id': 'https://madbootnova.com/#person',
        },
        publisher: {
          '@id': 'https://madbootnova.com/#organization',
        },
        url: canonicalUrl,
        articleSection: post.category,
        keywords: `${post.category}, Software Architecture, Engineering Insights`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://madbootnova.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://madbootnova.com/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: canonicalUrl,
          },
        ],
      },
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

