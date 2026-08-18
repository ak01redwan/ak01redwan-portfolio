import { Metadata } from 'next';
import AboutClient from '../../components/AboutClient';

export const metadata: Metadata = {
  title: 'About Abdulrahman Khalid Abdullah Redhwan | Systems Architect & Maker',
  description: 'Full-Stack Software Engineer, Technical Lead, and Founder of Madboot Nova. 5+ years experience spanning enterprise SaaS, Nuxt/Laravel SSR, .NET Core, and custom 3-axis CNC hardware machine fabrication.',
  alternates: {
    canonical: 'https://madbootnova.com/about',
    languages: {
      'en-US': 'https://madbootnova.com/about',
      'ar-YE': 'https://madbootnova.com/about',
      'x-default': 'https://madbootnova.com/about',
    },
  },
  openGraph: {
    title: 'About Abdulrahman Redhwan | Full-Stack Engineer & Hardware Maker',
    description: 'Learn about Abdulrahman Redhwan — Founder of Madboot Nova, Technical Lead, and maker of automated CNC machinery.',
    url: 'https://madbootnova.com/about',
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
        alt: 'Abdulrahman Redhwan Biography and Engineering Profile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Abdulrahman Redhwan | Systems Architect & Maker',
    description: 'Full-Stack Software Engineer, Technical Lead, and Founder of Madboot Nova.',
    images: ['https://madbootnova.com/og-image.png'],
    creator: '@ak01redwan',
  },
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': 'https://madbootnova.com/about#webpage',
      url: 'https://madbootnova.com/about',
      name: 'About Abdulrahman Khalid Abdullah Redhwan',
      description: 'Detailed professional background, architectural tenets, and hardware engineering biography.',
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
          name: 'About',
          item: 'https://madbootnova.com/about',
        },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        id="about-profile-jsonld"
        key="about-profile-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <AboutClient />
    </>
  );
}
