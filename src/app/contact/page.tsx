import { Metadata } from 'next';
import ContactClient from '../../components/ContactClient';

export const metadata: Metadata = {
  title: 'Contact & Architectural Consultation | Abdulrahman Redhwan',
  description: 'Initiate an engineering consultation or project inquiry with Abdulrahman Redhwan (ak01redwan) — Founder of Madboot Nova, Full-Stack Engineer & Technical Lead.',
  alternates: {
    canonical: 'https://madbootnova.com/contact',
    languages: {
      'en-US': 'https://madbootnova.com/contact',
      'ar-YE': 'https://madbootnova.com/contact',
      'x-default': 'https://madbootnova.com/contact',
    },
  },
  openGraph: {
    title: 'Contact Abdulrahman Redhwan | Engineering Inquiry',
    description: 'Get in touch for enterprise software architecture, full-stack consulting, or hardware CNC automation projects.',
    url: 'https://madbootnova.com/contact',
    type: 'website',
    images: [
      {
        url: 'https://madbootnova.com/og-image.png',
        secureUrl: 'https://madbootnova.com/og-image.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Contact Abdulrahman Redhwan — Engineering Consultation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Abdulrahman Redhwan | Engineering Consultation',
    description: 'Full-Stack Software Engineer & Technical Lead.',
    images: ['https://madbootnova.com/og-image.png'],
    creator: '@ak01redwan',
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://madbootnova.com/contact#webpage',
      url: 'https://madbootnova.com/contact',
      name: 'Contact & Direct Engineering Consultation',
      description: 'Direct inquiry channel for high-throughput software systems, cloud architecture, and CNC hardware projects.',
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
          name: 'Contact',
          item: 'https://madbootnova.com/contact',
        },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        id="contact-page-jsonld"
        key="contact-page-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactClient />
    </>
  );
}
