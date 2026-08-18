import { Metadata } from 'next';
import AboutClient from '../../components/AboutClient';
import { SITE_CONFIG, SITE_URL, getCanonicalUrl, getOgImageUrl, generateBreadcrumbJsonLd } from '../../lib/siteConfig';

export const metadata: Metadata = {
  title: `About ${SITE_CONFIG.shortName} (${SITE_CONFIG.username}) | Systems Architect & Maker`,
  description: `Biography and engineering philosophy of ${SITE_CONFIG.fullName} (${SITE_CONFIG.username}) — Full-Stack Software Engineer & Technical Lead specializing in enterprise SaaS, Laravel, Nuxt SSR, .NET Core, CI/CD, and custom 3-axis CNC hardware automation.`,
  alternates: {
    canonical: getCanonicalUrl('/about'),
    languages: {
      'en': getCanonicalUrl('/about'),
      'ar': getCanonicalUrl('/about'),
      'x-default': getCanonicalUrl('/about'),
    },
  },
  openGraph: {
    title: `About ${SITE_CONFIG.shortName} (${SITE_CONFIG.username}) | Full-Stack Engineer & Hardware Maker`,
    description: `Learn about ${SITE_CONFIG.fullName} — Full-Stack Engineer, Technical Lead, and maker of automated CNC machinery.`,
    url: getCanonicalUrl('/about'),
    type: 'profile',
    firstName: 'Abdulrahman',
    lastName: 'Redhwan',
    username: SITE_CONFIG.username,
    gender: 'male',
    images: [
      {
        url: getOgImageUrl('/og-image.png'),
        secureUrl: getOgImageUrl('/og-image.png'),
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `${SITE_CONFIG.fullName} Biography and Engineering Profile`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About ${SITE_CONFIG.shortName} (${SITE_CONFIG.username}) | Systems Architect`,
    description: `Full-Stack Software Engineer & Technical Lead. Software systems & CNC machine automation.`,
    images: [getOgImageUrl('/og-image.png')],
    creator: `@${SITE_CONFIG.username}`,
  },
};

export default function AboutPage() {
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${getCanonicalUrl('/about')}#webpage`,
        url: getCanonicalUrl('/about'),
        name: `About ${SITE_CONFIG.fullName}`,
        description: `Detailed professional background, architectural tenets, and hardware engineering biography of ${SITE_CONFIG.fullName}.`,
        mainEntity: {
          '@id': `${SITE_URL}/#person`,
        },
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
      ]),
    ],
  };

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
