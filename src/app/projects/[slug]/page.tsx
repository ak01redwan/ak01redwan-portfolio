import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CASE_STUDIES } from '../../../data/portfolioData';
import ProjectDetailClient from '../../../components/ProjectDetailClient';
import { SITE_CONFIG, SITE_URL, getCanonicalUrl, getOgImageUrl, generateBreadcrumbJsonLd } from '../../../lib/siteConfig';

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
      title: `Case Study Not Found | ${SITE_CONFIG.shortName}`,
    };
  }

  const canonicalUrl = getCanonicalUrl(`/projects/${study.slug}`);
  const outcomeHighlights = study.measurableOutcomes.map(m => `${m.metric} ${m.label}`).join(', ');
  const imageUrl = getOgImageUrl(study.image);

  return {
    title: `${study.title} | ${SITE_CONFIG.shortName} Case Study`,
    description: `${study.summary} Verified outcomes: ${outcomeHighlights}.`,
    keywords: [
      study.title,
      ...study.technologies,
      'Systems Architecture',
      'Full-Stack Engineering',
      'Case Study',
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
      title: `${study.title} — Systems Architecture Case Study`,
      description: study.summary,
      url: canonicalUrl,
      type: 'article',
      publishedTime: '2024-01-01T00:00:00.000Z',
      modifiedTime: '2025-01-01T00:00:00.000Z',
      authors: [SITE_URL],
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
      title: `${study.title} | ${SITE_CONFIG.shortName}`,
      description: study.summary,
      images: [imageUrl],
      creator: `@${SITE_CONFIG.username}`,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) {
    notFound();
  }

  const canonicalUrl = getCanonicalUrl(`/projects/${study.slug}`);
  const imageUrl = getOgImageUrl(study.image);

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
          '@id': `${SITE_URL}/#person`,
        },
        publisher: {
          '@id': `${SITE_URL}/#website`,
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
          '@id': `${SITE_URL}/#person`,
        },
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: study.title, path: `/projects/${study.slug}` },
      ]),
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
