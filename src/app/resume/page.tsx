import { Metadata } from 'next';
import ResumeClient from '../../components/ResumeClient';
import { SITE_CONFIG, SITE_URL, getCanonicalUrl, getOgImageUrl, generateBreadcrumbJsonLd } from '../../lib/siteConfig';

export const metadata: Metadata = {
  title: `Executive Curriculum Vitae (CV) & Verified Credentials | ${SITE_CONFIG.shortName}`,
  description: `Official Curriculum Vitae of ${SITE_CONFIG.fullName} (${SITE_CONFIG.username}) — Full-Stack Engineer, Technical Lead, and Physical Hardware Maker with 5+ years of production experience in Laravel, Nuxt, Next.js, .NET Core, CI/CD, and CNC automation.`,
  alternates: {
    canonical: getCanonicalUrl('/resume'),
    languages: {
      'en': getCanonicalUrl('/resume'),
      'ar': getCanonicalUrl('/resume'),
      'x-default': getCanonicalUrl('/resume'),
    },
  },
  openGraph: {
    title: `Curriculum Vitae | ${SITE_CONFIG.fullName} (${SITE_CONFIG.username})`,
    description: `Senior Full-Stack Software Engineer & Technical Lead CV, verified competencies, and academic credentials.`,
    url: getCanonicalUrl('/resume'),
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
        alt: `${SITE_CONFIG.fullName} CV & Verified Credentials`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Curriculum Vitae | ${SITE_CONFIG.shortName} (${SITE_CONFIG.username})`,
    description: `Full-Stack Software Engineer, Founder of Madboot Nova, and Hardware Maker.`,
    images: [getOgImageUrl('/og-image.png')],
    creator: `@${SITE_CONFIG.username}`,
  },
};

export default function ResumePage() {
  const resumeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${getCanonicalUrl('/resume')}#webpage`,
        url: getCanonicalUrl('/resume'),
        name: `Curriculum Vitae & Verified Credentials — ${SITE_CONFIG.fullName}`,
        description: `Executive CV detailing full-stack web engineering, .NET Core systems, CI/CD automation, and hardware CNC prototyping experience of ${SITE_CONFIG.fullName}.`,
        mainEntity: {
          '@id': `${SITE_URL}/#person`,
        },
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Resume', path: '/resume' },
      ]),
    ],
  };

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
