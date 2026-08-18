import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CASE_STUDIES } from '../../../data/portfolioData';
import ProjectDetailClient from '../../../components/ProjectDetailClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: 'Case Study Not Found | Abdulrahman Redhwan',
    };
  }

  const canonicalUrl = `https://madbootnova.com/projects/${study.slug}`;
  const outcomeHighlights = study.measurableOutcomes.map(m => `${m.metric} ${m.label}`).join(', ');
  const imageUrl = study.image.startsWith('http') ? study.image : `https://madbootnova.com${study.image}`;

  return {
    title: `${study.title} | Systems Architecture Case Study`,
    description: `${study.summary} Verified outcomes: ${outcomeHighlights}.`,
    keywords: [
      study.title,
      ...study.technologies,
      'Systems Architecture',
      'Full-Stack Engineering',
      'Case Study',
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
      title: `${study.title} — Systems Architecture Case Study`,
      description: study.summary,
      url: canonicalUrl,
      type: 'article',
      publishedTime: '2024-01-01T00:00:00.000Z',
      modifiedTime: '2025-01-01T00:00:00.000Z',
      authors: ['https://madbootnova.com'],
      section: 'Software Architecture & Engineering',
      tags: study.technologies,
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: `${study.title} Architecture Case Study`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.title} | Abdulrahman Redhwan`,
      description: study.summary,
      images: [imageUrl],
      creator: '@ak01redwan',
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) {
    notFound();
  }

  const imageUrl = study.image.startsWith('http') ? study.image : `https://madbootnova.com${study.image}`;
  const canonicalUrl = `https://madbootnova.com/projects/${study.slug}`;

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        '@id': `${canonicalUrl}#article`,
        headline: `${study.title} — Enterprise Engineering Case Study`,
        description: study.summary,
        image: [imageUrl],
        url: canonicalUrl,
        inLanguage: ['en-US', 'ar-YE'],
        datePublished: '2024-01-01T00:00:00.000Z',
        dateModified: '2025-01-01T00:00:00.000Z',
        proficiencyLevel: 'Expert',
        author: {
          '@id': 'https://madbootnova.com/#person',
        },
        publisher: {
          '@id': 'https://madbootnova.com/#organization',
        },
        about: study.technologies.map((tech) => ({
          '@type': 'Thing',
          name: tech,
        })),
        keywords: study.technologies.join(', '),
      },
      {
        '@type': 'SoftwareSourceCode',
        '@id': `${canonicalUrl}#software`,
        name: study.title,
        programmingLanguage: study.technologies.filter(t => !t.includes('DevOps') && !t.includes('Hardware')),
        abstract: study.summary,
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
            name: 'Projects',
            item: 'https://madbootnova.com/projects',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: study.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        id="project-detail-jsonld"
        key="project-detail-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <ProjectDetailClient slug={slug} />
    </>
  );
}

