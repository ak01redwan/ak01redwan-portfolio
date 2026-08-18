import { Metadata } from 'next';
import ContactClient from '../../components/ContactClient';

export const metadata: Metadata = {
  title: 'Contact & Architectural Consultation | Abdulrahman Redhwan',
  description: 'Initiate an engineering consultation or project inquiry with Abdulrahman Redhwan (ak01redwan) — Founder of Madboot Nova, Full-Stack Engineer & Technical Lead.',
  alternates: {
    canonical: 'https://madbootnova.com/contact',
  },
  openGraph: {
    title: 'Contact Abdulrahman Redhwan | Engineering Inquiry',
    description: 'Get in touch for enterprise software architecture, full-stack consulting, or hardware CNC automation projects.',
    url: 'https://madbootnova.com/contact',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Abdulrahman Redhwan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Abdulrahman Redhwan | Engineering Consultation',
    description: 'Full-Stack Software Engineer & Technical Lead.',
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
      name: 'Contact',
      item: 'https://madbootnova.com/contact',
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        id="contact-breadcrumb-jsonld"
        key="contact-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ContactClient />
    </>
  );
}
