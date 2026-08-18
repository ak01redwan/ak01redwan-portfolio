import { Metadata } from 'next';
import BlogListClient from '../../components/BlogListClient';

export const metadata: Metadata = {
  title: 'Engineering Blog & Technical Insights',
  description: 'Articles on software engineering architecture, Laravel & Nuxt performance, automated CI/CD pipelines, and physical CNC hardware manufacturing by Abdulrahman Redhwan.',
  alternates: {
    canonical: 'https://madbootnova.com/blog',
  },
  openGraph: {
    title: 'Engineering Blog & Technical Insights | Abdulrahman Redhwan',
    description: 'Deep technical articles and guides on full-stack architecture, DevOps automation, and CNC machine design.',
    url: 'https://madbootnova.com/blog',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abdulrahman Redhwan Engineering Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Blog & Technical Insights | Abdulrahman Redhwan',
    description: 'Articles on software architecture, DevOps, and hardware engineering.',
    images: ['/og-image.png'],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
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
};

export default function BlogPage() {
  return (
    <>
      <script
        id="blog-breadcrumb-jsonld"
        key="blog-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogListClient />
    </>
  );
}
