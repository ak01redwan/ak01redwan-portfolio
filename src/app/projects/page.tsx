import { Metadata } from 'next';
import ProjectsClient from '../../components/ProjectsClient';

export const metadata: Metadata = {
  title: 'Engineering Projects & Enterprise Case Studies',
  description: 'Explore enterprise case studies by Abdulrahman Redhwan: Multi-Vendor Laravel 12 Platforms, Nuxt 4 SSR Portals, .NET Core Desktop Suites, Automated CI/CD, and 3-Axis CNC Machining Machines.',
  alternates: {
    canonical: 'https://madbootnova.com/projects',
    languages: {
      'en-US': 'https://madbootnova.com/projects',
      'ar-YE': 'https://madbootnova.com/projects',
      'x-default': 'https://madbootnova.com/projects',
    },
  },
  openGraph: {
    title: 'Engineering Projects & Case Studies | Abdulrahman Redhwan',
    description: 'Deep architectural case studies spanning enterprise full-stack development and physical hardware automation.',
    url: 'https://madbootnova.com/projects',
    type: 'website',
    images: [
      {
        url: 'https://madbootnova.com/og-image.png',
        secureUrl: 'https://madbootnova.com/og-image.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Abdulrahman Redhwan Engineering Projects and Architecture Case Studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Projects & Case Studies | Abdulrahman Redhwan',
    description: 'Enterprise case studies in Laravel 12, Nuxt 4, Next.js, and CNC hardware automation.',
    images: ['https://madbootnova.com/og-image.png'],
    creator: '@ak01redwan',
  },
};

const projectsJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://madbootnova.com/projects#webpage',
      url: 'https://madbootnova.com/projects',
      name: 'Engineering Projects & Enterprise Case Studies',
      description: 'Portfolio of production systems, software platforms, and hardware builds created and led by Abdulrahman Redhwan.',
      isPartOf: {
        '@id': 'https://madbootnova.com/#website',
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
          name: 'Projects',
          item: 'https://madbootnova.com/projects',
        },
      ],
    },
  ],
};

export default function ProjectsPage() {
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
