import { Metadata } from 'next';
import ResumeClient from '../../components/ResumeClient';

export const metadata: Metadata = {
  title: 'Executive Curriculum Vitae (CV) & Engineering Credentials',
  description: 'Official Curriculum Vitae of Abdulrahman Khalid Abdullah Redhwan (ak01redwan) — Founder of Madboot Nova, Full-Stack Engineer, Technical Lead, and Physical Hardware Maker.',
  alternates: {
    canonical: 'https://madbootnova.com/resume',
    languages: {
      'en-US': 'https://madbootnova.com/resume',
      'ar-YE': 'https://madbootnova.com/resume',
      'x-default': 'https://madbootnova.com/resume',
    },
  },
  openGraph: {
    title: 'Curriculum Vitae | Abdulrahman Khalid Abdullah Redhwan',
    description: 'Senior Full-Stack Software Engineer & Technical Lead CV and verification details.',
    url: 'https://madbootnova.com/resume',
    type: 'profile',
    firstName: 'Abdulrahman',
    lastName: 'Redhwan',
    username: 'ak01redwan',
    gender: 'male',
    images: [
      {
        url: 'https://madbootnova.com/og-image.png',
        secureUrl: 'https://madbootnova.com/og-image.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Abdulrahman Redhwan CV & Verified Credentials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curriculum Vitae | Abdulrahman Redhwan',
    description: 'Full-Stack Software Engineer, Founder of Madboot Nova, and Hardware Maker.',
    images: ['https://madbootnova.com/og-image.png'],
    creator: '@ak01redwan',
  },
};

const resumeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': 'https://madbootnova.com/resume#webpage',
      url: 'https://madbootnova.com/resume',
      name: 'Curriculum Vitae & Verified Credentials — Abdulrahman Redhwan',
      description: 'Executive CV detailing full-stack web engineering, .NET Core systems, CI/CD automation, and hardware CNC prototyping experience.',
      mainEntity: {
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
          name: 'Curriculum Vitae',
          item: 'https://madbootnova.com/resume',
        },
      ],
    },
  ],
};

export default function ResumePage() {
  return (
    <>
      <script
        id="resume-profile-jsonld"
        key="resume-profile-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeJsonLd) }}
      />
      <ResumeClient />
    </>
  );
}
