/**
 * Centralized Site Configuration & SEO Entity Constants
 * Single source of truth for domain, canonical URLs, identity graph, and schema generation.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://ak01redwan-portfolio.vercel.app'
).replace(/\/+$/, '');

export const SITE_CONFIG = {
  name: 'Abdulrahman Redhwan',
  fullName: 'Abdulrahman Khalid Abdullah Redhwan',
  fullNameAr: 'عبدالرحمن خالد عبدالله رضوان',
  shortName: 'Abdulrahman Redhwan',
  shortNameAr: 'عبدالرحمن رضوان',
  username: 'ak01redwan',
  
  title: 'Full-Stack Software Engineer & Technical Lead',
  titleAr: 'مهندس برمجيات شامل وقائد تقني',
  
  tagline: 'Bridging High-Throughput Software Architecture with Physical Hardware & CNC Automation',
  taglineAr: 'الجمع بين هندسة المنظومات البرمجية المؤسسية وتصنيع الآلات الفيزيائية المؤتمتة',
  
  description: 'Executive Portfolio of Abdulrahman Khalid Abdullah Redhwan (ak01redwan) — Full-Stack Software Engineer & Technical Lead specializing in Laravel 12, Nuxt 4, Next.js 16, .NET Core, automated CI/CD pipelines, and custom 3-axis CNC hardware automation. Based in Al-Mukalla, Hadhramaut, Yemen; providing remote engineering excellence globally.',
  descriptionAr: 'الملف المهني للمهندس عبدالرحمن خالد عبدالله رضوان (ak01redwan) — مهندس برمجيات شامل وقائد تقني، متخصص في Laravel 12 وNuxt 4 وNext.js و.NET Core وخطوط النشر المؤتمتة CI/CD وتصنيع آلات الـ CNC. المكلا، حضرموت، اليمن.',
  
  location: 'Al-Mukalla, Hadhramaut, Yemen',
  locationAr: 'المكلا، حضرموت، اليمن',
  country: 'Yemen',
  countryCode: 'YE',
  
  emails: ['ak01redwan@gmail.com', 'ak01redwan@madbootnova.com'],
  phones: ['+967 776 716 697', '+967 776 248 526'],
  
  agency: 'Madboot Nova',
  agencyUrl: 'https://madbootnova.com',
  repositoryUrl: 'https://github.com/ak01redwan/ak01redwan-portfolio',
  
  socials: {
    github: 'https://github.com/ak01redwan',
    linkedin: 'https://www.linkedin.com/in/ak01redwan',
    twitter: 'https://x.com/ak01redwan',
    stackoverflow: 'https://stackoverflow.com/users/ak01redwan',
    devto: 'https://dev.to/ak01redwan',
    medium: 'https://medium.com/@ak01redwan',
  },
  
  aliases: [
    'ak01redwan',
    'Abdulrahman Redhwan',
    'Abdulrahman Khalid Abdullah Redhwan',
    'Abdu Redwan',
    'Abdu Khalid',
    'Abdulrahman Khalid',
    'Abdulrahman K. Redhwan',
    'A. K. Redhwan',
    'AK',
    'ak01',
    'ak01code',
    'ak10redwan',
    'ak10code',
    'ak programmer',
    'ak developer',
    'ak code',
    'ak مبرمج',
    'ak المطور',
  ],
  
  aliasesAr: [
    'عبدالرحمن خالد عبدالله رضوان',
    'عبدالرحمن رضوان',
    'عبدو رضوان',
    'عبدو خالد',
    'عبدالرحمن خالد',
    'عبدالرحمن رضوان مبرمج',
    'عبدالرحمن رضوان مطور',
    'ak01redwan مبرمج',
    'ak01redwan مطور',
    'ak01code مبرمج',
    'ak01code مطور',
  ],
  
  coreSkills: [
    'Laravel 12',
    'Nuxt.js 4',
    'Next.js 16',
    'React 19',
    'Vue.js 3',
    'TypeScript',
    'PHP',
    '.NET Core',
    'C#',
    'SQL Server',
    'PostgreSQL',
    'MySQL',
    'REST APIs',
    'CI/CD Automation',
    'GitHub Actions',
    'Docker',
    'Redis',
    'CNC Machine Engineering',
    'G-Code & M-Code',
    'Arduino Embedded Systems',
    'GRBL / Marlin Firmware',
  ],
};

export function getAbsoluteUrl(path: string = ''): string {
  if (!path) return SITE_URL;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

export function getCanonicalUrl(path: string = ''): string {
  return getAbsoluteUrl(path);
}

export function getOgImageUrl(imagePath?: string): string {
  if (imagePath) {
    return getAbsoluteUrl(imagePath);
  }
  return getAbsoluteUrl('/og-image.png');
}

/**
 * Generates the Root Person and WebSite Schema.org Graph
 */
export function generateRootJsonLd() {
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: SITE_CONFIG.fullName,
        alternateName: [...SITE_CONFIG.aliases, ...SITE_CONFIG.aliasesAr],
        jobTitle: SITE_CONFIG.title,
        description: SITE_CONFIG.description,
        url: SITE_URL,
        image: getAbsoluteUrl('/profile.png'),
        email: `mailto:${SITE_CONFIG.emails[0]}`,
        telephone: SITE_CONFIG.phones[0],
        gender: 'Male',
        nationality: {
          '@type': 'Country',
          name: SITE_CONFIG.country,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Al-Mukalla',
          addressRegion: 'Hadhramaut',
          addressCountry: SITE_CONFIG.country,
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Al-Ahgaff University',
          url: 'https://ahgaff.edu',
        },
        worksFor: {
          '@type': 'Organization',
          name: SITE_CONFIG.agency,
          url: SITE_CONFIG.agencyUrl,
        },
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Full-Stack Software Engineer & Technical Lead',
          occupationalCategory: '15-1252.00',
          skills: SITE_CONFIG.coreSkills.join(', '),
        },
        knowsLanguage: [
          {
            '@type': 'Language',
            name: 'Arabic',
            alternateName: 'ar',
          },
          {
            '@type': 'Language',
            name: 'English',
            alternateName: 'en',
          },
        ],
        sameAs: [
          SITE_CONFIG.socials.github,
          SITE_CONFIG.socials.linkedin,
          SITE_CONFIG.socials.twitter,
          SITE_CONFIG.socials.stackoverflow,
          SITE_CONFIG.socials.devto,
          SITE_CONFIG.socials.medium,
          SITE_CONFIG.repositoryUrl,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_URL,
        name: `${SITE_CONFIG.shortName} (${SITE_CONFIG.username}) | Official Portfolio`,
        alternateName: [
          'ak01redwan Portfolio',
          'Abdulrahman Redhwan Portfolio',
          'موقع عبدالرحمن رضوان',
        ],
        description: SITE_CONFIG.description,
        inLanguage: ['en-US', 'ar-YE'],
        publisher: {
          '@id': personId,
        },
      },
    ],
  };
}

export function generateBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path),
    })),
  };
}
