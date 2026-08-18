import { Metadata } from 'next';
import ContactClient from '../../components/ContactClient';
import { SITE_CONFIG, SITE_URL, getCanonicalUrl, getOgImageUrl, generateBreadcrumbJsonLd } from '../../lib/siteConfig';

export const metadata: Metadata = {
  title: `Contact & Architectural Consultation | ${SITE_CONFIG.shortName} (${SITE_CONFIG.username})`,
  description: `Initiate an engineering consultation or project inquiry with ${SITE_CONFIG.fullName} (${SITE_CONFIG.username}) — Full-Stack Engineer, Technical Lead, and Founder of Madboot Nova. Guaranteed SLA response within 24 hours.`,
  alternates: {
    canonical: getCanonicalUrl('/contact'),
    languages: {
      'en': getCanonicalUrl('/contact'),
      'ar': getCanonicalUrl('/contact'),
      'x-default': getCanonicalUrl('/contact'),
    },
  },
  openGraph: {
    title: `Contact ${SITE_CONFIG.shortName} (${SITE_CONFIG.username}) | Engineering Inquiry`,
    description: `Get in touch for enterprise software architecture, full-stack web platforms, API development, or hardware CNC automation projects.`,
    url: getCanonicalUrl('/contact'),
    type: 'website',
    images: [
      {
        url: getOgImageUrl('/og-image.png'),
        secureUrl: getOgImageUrl('/og-image.png'),
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `Contact ${SITE_CONFIG.fullName} — Engineering Consultation`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact ${SITE_CONFIG.shortName} (${SITE_CONFIG.username}) | Engineering Consultation`,
    description: `Full-Stack Software Engineer & Technical Lead. Direct consultation channel.`,
    images: [getOgImageUrl('/og-image.png')],
    creator: `@${SITE_CONFIG.username}`,
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${getCanonicalUrl('/contact')}#webpage`,
        url: getCanonicalUrl('/contact'),
        name: `Contact & Direct Engineering Consultation — ${SITE_CONFIG.fullName}`,
        description: `Direct inquiry channel for high-throughput software systems, cloud architecture, and CNC hardware projects with ${SITE_CONFIG.fullName}.`,
        mainEntity: {
          '@id': `${SITE_URL}/#person`,
        },
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
      ]),
    ],
  };

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
