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
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.title} | Abdulrahman Redhwan`,
      description: post.excerpt,
      url: canonicalUrl,
      type: 'article',
      authors: ['Abdulrahman Khalid Abdullah Redhwan'],
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['/og-image.png'],
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

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: '2025-01-15',
        author: {
          '@type': 'Person',
          name: 'Abdulrahman Khalid Abdullah Redhwan',
          url: 'https://madbootnova.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Madboot Nova',
          url: 'https://madbootnova.com',
        },
        url: `https://madbootnova.com/blog/${post.id}`,
        articleSection: post.category,
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
            item: `https://madbootnova.com/blog/${post.id}`,
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

