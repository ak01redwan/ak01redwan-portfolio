import { Metadata } from 'next';
import ProjectsClient from '../../components/ProjectsClient';

export const metadata: Metadata = {
  title: 'Engineering Projects & Enterprise Case Studies',
  description: 'Explore enterprise case studies by Abdulrahman Redhwan: Multi-Vendor Laravel 12 Platforms, Nuxt 4 SSR Portals, .NET Core Desktop Suites, Automated CI/CD, and 3-Axis CNC Machining Machines.',
  alternates: {
    canonical: 'https://madbootnova.com/projects',
  },
  openGraph: {
    title: 'Engineering Projects & Case Studies | Abdulrahman Redhwan',
    description: 'Deep architectural case studies spanning enterprise full-stack development and physical hardware automation.',
    url: 'https://madbootnova.com/projects',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abdulrahman Redhwan Engineering Projects and Architecture Case Studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Projects & Case Studies | Abdulrahman Redhwan',
    description: 'Enterprise case studies in Laravel 12, Nuxt 4, Next.js, and CNC hardware automation.',
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
      name: 'Projects',
      item: 'https://madbootnova.com/projects',
    },
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <script
        id="projects-breadcrumb-jsonld"
        key="projects-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProjectsClient />
    </>
  );
}
