import { MetadataRoute } from 'next';
import { CASE_STUDIES, BLOG_POSTS_DATA } from '../data/portfolioData';
import { SITE_URL, getCanonicalUrl, getOgImageUrl } from '../lib/siteConfig';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  
  const createEntry = (
    path: string, 
    priority: number, 
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never', 
    image?: string
  ) => {
    const url = getCanonicalUrl(path);
    return {
      url,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          'en': url,
          'ar': url,
          'x-default': url,
        },
      },
      images: [image ? (image.startsWith('http') ? image : getOgImageUrl(image)) : getOgImageUrl('/og-image.png')],
    };
  };

  const staticPages: MetadataRoute.Sitemap = [
    createEntry('', 1.0, 'weekly'),
    createEntry('/about', 0.9, 'monthly', '/profile.png'),
    createEntry('/projects', 0.9, 'weekly', '/og-image.png'),
    createEntry('/resume', 0.85, 'monthly', '/profile.png'),
    createEntry('/blog', 0.85, 'weekly', '/og-image.png'),
    createEntry('/contact', 0.8, 'monthly', '/og-image.png'),
  ];

  const caseStudyPages: MetadataRoute.Sitemap = CASE_STUDIES.map((study) => 
    createEntry(`/projects/${study.slug}`, 0.85, 'monthly', study.image)
  );

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS_DATA.map((post) => 
    createEntry(`/blog/${post.id}`, 0.8, 'monthly', '/og-image.png')
  );

  return [...staticPages, ...caseStudyPages, ...blogPages];
}
