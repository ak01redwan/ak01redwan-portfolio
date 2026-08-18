import { Metadata } from 'next';
import ResumeClient from '../../components/ResumeClient';

export const metadata: Metadata = {
  title: 'Executive Curriculum Vitae (CV) & Engineering Credentials',
  description: 'Official Curriculum Vitae of Abdulrahman Khalid Abdullah Redhwan (ak01redwan) — Founder of Madboot Nova, Full-Stack Engineer, Technical Lead, and Physical Hardware Maker.',
  alternates: {
    canonical: 'https://madbootnova.com/resume',
  },
  openGraph: {
    title: 'Curriculum Vitae | Abdulrahman Khalid Abdullah Redhwan',
    description: 'Senior Full-Stack Software Engineer & Technical Lead CV and verification details.',
    url: 'https://madbootnova.com/resume',
    type: 'profile',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abdulrahman Redhwan CV',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curriculum Vitae | Abdulrahman Redhwan',
    description: 'Full-Stack Software Engineer, Founder of Madboot Nova, and Hardware Maker.',
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
      name: 'Curriculum Vitae',
      item: 'https://madbootnova.com/resume',
    },
  ],
};

export default function ResumePage() {
  return (
    <>
      <script
        id="resume-breadcrumb-jsonld"
        key="resume-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ResumeClient />
    </>
  );
}
