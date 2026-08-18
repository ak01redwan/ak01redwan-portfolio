import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CommandPalette from '../components/CommandPalette';
import Providers from '../components/Providers';
import { SITE_CONFIG, SITE_URL, getCanonicalUrl, getOgImageUrl, generateRootJsonLd } from '../lib/siteConfig';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_CONFIG.fullName} (${SITE_CONFIG.username}) | Full-Stack Software Engineer & Technical Lead`,
    template: `%s | ${SITE_CONFIG.shortName} (${SITE_CONFIG.username})`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    ...SITE_CONFIG.aliases,
    ...SITE_CONFIG.aliasesAr,
    ...SITE_CONFIG.coreSkills,
    'Full-Stack Software Engineer',
    'Senior Software Engineer',
    'Technical Lead',
    'Backend Engineer',
    'Software Architect',
    'Systems Architect',
    'API Engineer',
    'DevOps CI/CD Engineer',
    'Yemen Software Engineer',
    'Hadhramaut Full-Stack Developer',
    'Mukalla Software Developer',
    'Remote Software Engineer',
    'Arabic Full-Stack Developer',
    'مهندس برمجيات شامل',
    'قائد تقني',
    'مطور ويب',
  ],
  authors: [{ name: SITE_CONFIG.fullName, url: SITE_URL }],
  creator: `${SITE_CONFIG.fullName} (${SITE_CONFIG.username})`,
  publisher: SITE_CONFIG.fullName,
  category: 'technology',
  classification: 'Software Engineering, Systems Architecture & Hardware Prototyping',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.svg'],
  },
  openGraph: {
    title: `${SITE_CONFIG.fullName} (${SITE_CONFIG.username}) | Full-Stack Engineer & Technical Lead`,
    description: SITE_CONFIG.description,
    url: SITE_URL,
    siteName: `${SITE_CONFIG.shortName} (${SITE_CONFIG.username}) Portfolio`,
    locale: 'en_US',
    alternateLocale: ['ar_YE', 'ar'],
    type: 'website',
    images: [
      {
        url: getOgImageUrl('/og-image.png'),
        secureUrl: getOgImageUrl('/og-image.png'),
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `${SITE_CONFIG.fullName} (${SITE_CONFIG.username}) — Full-Stack Software Engineer & Technical Lead`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.fullName} (@${SITE_CONFIG.username}) | Full-Stack Engineer`,
    description: SITE_CONFIG.description,
    images: [getOgImageUrl('/og-image.png')],
    creator: `@${SITE_CONFIG.username}`,
    site: `@${SITE_CONFIG.username}`,
  },
  alternates: {
    canonical: getCanonicalUrl(),
    languages: {
      'en': getCanonicalUrl(),
      'ar': getCanonicalUrl(),
      'x-default': getCanonicalUrl(),
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdData = generateRootJsonLd();

  return (
    <html lang="en" dir="ltr" className="dark" suppressHydrationWarning>
      <head>
        <script
          id="root-schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Providers>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none font-bold"
          >
            Skip to main content
          </a>
          <Suspense fallback={null}>
            <CommandPalette />
          </Suspense>
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>
          <main id="main-content" className="flex-grow pt-24">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
