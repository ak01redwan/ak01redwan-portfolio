import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CommandPalette from '../components/CommandPalette';
import Providers from '../components/Providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://madbootnova.com'),
  title: {
    default: 'Abdulrahman Khalid Abdullah Redhwan | Full-Stack Software Engineer & Technical Lead',
    template: '%s | Abdulrahman Redhwan (ak01redwan)',
  },
  description: 'Executive Portfolio of Abdulrahman Khalid Abdullah Redhwan (ak01redwan) — Founder of Madboot Nova, Full-Stack Engineer & Technical Lead specializing in Laravel 12, Nuxt.js 4, Next.js, .NET Core, automated CI/CD pipelines, and custom 3-Axis CNC hardware engineering.',
  keywords: 'Abdulrahman Khalid Abdullah Redhwan, ak01redwan, Abdurhman Khalid Abdullh Redwan, عبدالرحمن خالد عبدالله رضوان, Full-Stack Software Engineer, Technical Lead, Madboot Nova, Laravel 12, Nuxt 4, Next.js 16, .NET Core, CNC Machine, G-Code, Arduino GRBL Marlin, CI/CD Automation, Yemen Software Engineer',
  authors: [{ name: 'Abdulrahman Khalid Abdullah Redhwan' }],
  creator: 'Abdulrahman Khalid Abdullah Redhwan (ak01redwan)',
  publisher: 'Madboot Nova',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Abdulrahman Khalid Abdullah Redhwan | Full-Stack Software Engineer & Technical Lead',
    description: 'Senior Full-Stack Engineer, Founder of Madboot Nova & Physical Hardware Maker (CNC, G-Code, Arduino). 5+ years building high-throughput SaaS, e-commerce, and automated CI/CD architectures.',
    url: 'https://madbootnova.com',
    siteName: 'Abdulrahman Redhwan Engineering Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abdulrahman Khalid Abdullah Redhwan — Full-Stack Software Engineer & Technical Lead',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdulrahman Khalid Abdullah Redhwan | Full-Stack Software Engineer & Technical Lead',
    description: 'Founder of Madboot Nova. Full-Stack Engineer bridging scalable software architectures (Laravel, Next.js, .NET) with physical CNC hardware automation.',
    images: ['/og-image.png'],
    creator: '@ak01redwan',
  },
  alternates: {
    canonical: 'https://madbootnova.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://madbootnova.com/#person',
      name: 'Abdulrahman Khalid Abdullah Redhwan',
      alternateName: [
        'ak01redwan',
        'Abdurhman Khalid Abdullh Redwan',
        'عبدالرحمن خالد عبدالله رضوان'
      ],
      jobTitle: 'Full-Stack Software Engineer & Technical Lead',
      description: 'Senior Full-Stack Engineer, Founder of Madboot Nova, and Physical Hardware Maker with 5+ years of experience.',
      url: 'https://madbootnova.com',
      email: 'mailto:ak01redwan@gmail.com',
      telephone: '+967776716697',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Al-Mukalla',
        addressRegion: 'Hadhramaut',
        addressCountry: 'Yemen'
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Al-Ahgaff University',
        url: 'https://ahgaff.edu'
      },
      worksFor: {
        '@type': 'Organization',
        name: 'Madboot Nova',
        url: 'https://madbootnova.com'
      },
      sameAs: [
        'https://github.com/ak01redwan',
        'https://www.linkedin.com/in/ak01redwan',
        'https://x.com/ak01redwan',
        'https://stackoverflow.com/users/ak01redwan',
        'https://dev.to/ak01redwan',
        'https://medium.com/@ak01redwan',
        'https://codepen.io/ak01redwan',
        'https://www.behance.net/ak01redwan',
        'https://dribbble.com/ak01redwan'
      ],
      knowsAbout: [
        'Full-Stack Web Development',
        'Laravel 12',
        'Nuxt.js 4',
        'Next.js 16',
        'React 19',
        'TypeScript',
        '.NET Core',
        'C#',
        'SQL Server',
        'Automated CI/CD',
        'GitHub Actions',
        'CNC Machine Engineering',
        'G-Code & M-Code',
        'Arduino Microcontrollers',
        'GRBL and Marlin Firmware',
        'Docker'
      ]
    },
    {
      '@type': 'Organization',
      '@id': 'https://madbootnova.com/#organization',
      name: 'Madboot Nova',
      url: 'https://madbootnova.com',
      logo: 'https://madbootnova.com/icon-512.png',
      founder: {
        '@id': 'https://madbootnova.com/#person'
      },
      description: 'Elite software engineering agency delivering high-throughput web platforms, SaaS ecosystems, and enterprise architectures.'
    },
    {
      '@type': 'WebSite',
      '@id': 'https://madbootnova.com/#website',
      url: 'https://madbootnova.com',
      name: 'Abdulrahman Redhwan Portfolio',
      publisher: {
        '@id': 'https://madbootnova.com/#person'
      },
      inLanguage: ['en', 'ar']
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
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
