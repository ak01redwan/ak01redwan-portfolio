import { MetadataRoute } from 'next';
import { SITE_URL, getCanonicalUrl } from '../lib/siteConfig';

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        userAgent: 'Applebot',
        allow: '/',
      },
    ],
    sitemap: getCanonicalUrl('/sitemap.xml'),
    host: SITE_URL,
  };
}
