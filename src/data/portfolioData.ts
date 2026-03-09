export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart functionality, payment integration, and user authentication.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/username/repo',
    liveUrl: 'https://demo.com',
    category: 'fullstack',
  },
  {
    id: 2,
    title: 'AI Image Generator',
    description: 'An application that generates images from text prompts using OpenAI API.',
    image: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=1000',
    tags: ['Next.js', 'Tailwind CSS', 'OpenAI API'],
    githubUrl: 'https://github.com/username/repo',
    liveUrl: 'https://demo.com',
    category: 'frontend',
  },
  {
    id: 3,
    title: 'Task Management API',
    description: 'A robust RESTful API for managing tasks with user roles and permissions.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
    tags: ['Express', 'PostgreSQL', 'JWT', 'Swagger'],
    githubUrl: 'https://github.com/username/repo',
    category: 'backend',
  },
];

export const skills: Skill[] = [
  { name: 'React', icon: 'react', level: 90, category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', level: 85, category: 'frontend' },
  { name: 'Node.js', icon: 'nodejs', level: 80, category: 'backend' },
  { name: 'Tailwind CSS', icon: 'tailwind', level: 95, category: 'frontend' },
  { name: 'PostgreSQL', icon: 'postgresql', level: 75, category: 'backend' },
  { name: 'Docker', icon: 'docker', level: 70, category: 'tools' },
];

export const experiences: Experience[] = [
  {
    company: 'Tech Solutions Inc.',
    position: 'Senior Frontend Developer',
    period: '2022 - Present',
    description: [
      'Led the development of a high-traffic React application, improving performance by 40%.',
      'Mentored junior developers and implemented best practices for code quality and testing.',
      'Collaborated with designers to create a comprehensive design system.',
    ],
  },
  {
    company: 'Web Craft Agency',
    position: 'Full Stack Developer',
    period: '2020 - 2022',
    description: [
      'Developed and maintained multiple client websites using various technologies.',
      'Integrated third-party APIs and services for enhanced functionality.',
      'Optimized database queries for better application responsiveness.',
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/username', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: 'linkedin' },
  { platform: 'Twitter', url: 'https://twitter.com/username', icon: 'twitter' },
  { platform: 'Dev.to', url: 'https://dev.to/username', icon: 'book' },
];
