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

  return {
    title: `${study.title} | Enterprise Case Study`,
    description: `${study.summary} Key outcomes: ${outcomeHighlights}.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${study.title} — Systems Architecture Case Study`,
      description: study.summary,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: study.image,
          width: 800,
          height: 500,
          alt: study.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.title} | Abdulrahman Redhwan`,
      description: study.summary,
      images: [study.image],
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

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        headline: study.title,
        description: study.summary,
        image: [study.image],
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
        url: `https://madbootnova.com/projects/${study.slug}`,
        about: study.technologies,
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
            item: `https://madbootnova.com/projects/${study.slug}`,
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

