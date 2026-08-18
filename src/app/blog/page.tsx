import { Metadata } from 'next';
import BlogListClient from '../../components/BlogListClient';
import { SITE_CONFIG, SITE_URL, getCanonicalUrl, getOgImageUrl, generateBreadcrumbJsonLd } from '../../lib/siteConfig';

export const metadata: Metadata = {
  title: `Engineering Blog & Technical Insights | ${SITE_CONFIG.shortName}`,
  description: `Technical deep dives on high-performance Laravel architecture, Nuxt 4 SSR, automated CI/CD pipelines, and custom 3-axis CNC hardware engineering by ${SITE_CONFIG.fullName} (${SITE_CONFIG.username}).`,
  alternates: {
    canonical: getCanonicalUrl('/blog'),
    languages: {
      'en': getCanonicalUrl('/blog'),
      'ar': getCanonicalUrl('/blog'),
      'x-default': getCanonicalUrl('/blog'),
    },
  },
  openGraph: {
    title: `Engineering Blog & Technical Insights | ${SITE_CONFIG.shortName}`,
    description: `Deep technical articles and architectural guides on full-stack web platforms, DevOps automation, and CNC machine design.`,
    url: getCanonicalUrl('/blog'),
    type: 'website',
    images: [
      {
        url: getOgImageUrl('/og-image.png'),
        secureUrl: getOgImageUrl('/og-image.png'),
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `${SITE_CONFIG.fullName} Engineering Blog`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Engineering Blog & Technical Insights | ${SITE_CONFIG.shortName}`,
    description: `Articles on software architecture, DevOps, and hardware engineering.`,
    images: [getOgImageUrl('/og-image.png')],
    creator: `@${SITE_CONFIG.username}`,
  },
};

export default function BlogPage() {
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${getCanonicalUrl('/blog')}#blog`,
        url: getCanonicalUrl('/blog'),
        name: `${SITE_CONFIG.shortName} Engineering Blog`,
        description: 'Technical insights covering high-concurrency Laravel architecture, Nuxt 4 SSR, automated CI/CD engineering, and CNC machine fabrication.',
        publisher: {
          '@id': `${SITE_URL}/#website`,
        },
        author: {
          '@id': `${SITE_URL}/#person`,
        },
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
      ]),
    ],
  };

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
