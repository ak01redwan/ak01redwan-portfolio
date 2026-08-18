import { Metadata } from 'next';
import ProjectsClient from '../../components/ProjectsClient';
import { SITE_CONFIG, SITE_URL, getCanonicalUrl, getOgImageUrl, generateBreadcrumbJsonLd } from '../../lib/siteConfig';

export const metadata: Metadata = {
  title: `Engineering Projects & Architecture Case Studies | ${SITE_CONFIG.shortName}`,
  description: `Explore enterprise case studies by ${SITE_CONFIG.fullName} (${SITE_CONFIG.username}): High-Throughput Laravel 12 & Nuxt 4 Ecosystems, .NET Core Commerce, Automated Multi-Tier CI/CD, and 3-Axis CNC Machining Machines.`,
  alternates: {
    canonical: getCanonicalUrl('/projects'),
    languages: {
      'en': getCanonicalUrl('/projects'),
      'ar': getCanonicalUrl('/projects'),
      'x-default': getCanonicalUrl('/projects'),
    },
  },
  openGraph: {
    title: `Engineering Projects & Case Studies | ${SITE_CONFIG.shortName} (${SITE_CONFIG.username})`,
    description: `Deep architectural case studies spanning enterprise full-stack development and physical CNC hardware automation.`,
    url: getCanonicalUrl('/projects'),
    type: 'website',
    images: [
      {
        url: getOgImageUrl('/og-image.png'),
        secureUrl: getOgImageUrl('/og-image.png'),
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `${SITE_CONFIG.fullName} Engineering Projects and Architecture Case Studies`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Engineering Projects & Case Studies | ${SITE_CONFIG.shortName}`,
    description: `Enterprise case studies in Laravel 12, Nuxt 4, Next.js, and CNC hardware automation.`,
    images: [getOgImageUrl('/og-image.png')],
    creator: `@${SITE_CONFIG.username}`,
  },
};

export default function ProjectsPage() {
  const projectsJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${getCanonicalUrl('/projects')}#webpage`,
        url: getCanonicalUrl('/projects'),
        name: 'Engineering Projects & Enterprise Case Studies',
        description: `Portfolio of production systems, software platforms, and hardware builds created and led by ${SITE_CONFIG.fullName}.`,
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
      ]),
    ],
  };

  return (
    <>
      <script
        id="projects-collection-jsonld"
        key="projects-collection-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <ProjectsClient />
    </>
  );
}
