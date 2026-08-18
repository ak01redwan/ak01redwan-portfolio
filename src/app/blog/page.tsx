import { Metadata } from 'next';
import BlogListClient from '../../components/BlogListClient';

export const metadata: Metadata = {
  title: 'Engineering Blog & Technical Insights',
  description: 'Articles on software engineering architecture, Laravel & Nuxt performance, automated CI/CD pipelines, and physical CNC hardware manufacturing by Abdulrahman Redhwan.',
  alternates: {
    canonical: 'https://madbootnova.com/blog',
    languages: {
      'en-US': 'https://madbootnova.com/blog',
      'ar-YE': 'https://madbootnova.com/blog',
      'x-default': 'https://madbootnova.com/blog',
    },
  },
  openGraph: {
    title: 'Engineering Blog & Technical Insights | Abdulrahman Redhwan',
    description: 'Deep technical articles and guides on full-stack architecture, DevOps automation, and CNC machine design.',
    url: 'https://madbootnova.com/blog',
    type: 'website',
    images: [
      {
        url: 'https://madbootnova.com/og-image.png',
        secureUrl: 'https://madbootnova.com/og-image.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Abdulrahman Redhwan Engineering Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Blog & Technical Insights | Abdulrahman Redhwan',
    description: 'Articles on software architecture, DevOps, and hardware engineering.',
    images: ['https://madbootnova.com/og-image.png'],
    creator: '@ak01redwan',
  },
};

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Blog',
      '@id': 'https://madbootnova.com/blog#blog',
      url: 'https://madbootnova.com/blog',
      name: 'Abdulrahman Redhwan Engineering Blog',
      description: 'Technical insights covering high-concurrency Laravel architecture, Nuxt 4 SSR, automated CI/CD engineering, and CNC machine fabrication.',
      publisher: {
        '@id': 'https://madbootnova.com/#organization',
      },
      author: {
        '@id': 'https://madbootnova.com/#person',
      },
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
      ],
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        id="blog-collection-jsonld"
        key="blog-collection-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogListClient />
    </>
  );
}
