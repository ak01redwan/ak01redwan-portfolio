import { Metadata } from 'next';
import Hero from '../components/Hero';
import HardwareDifferentiator from '../components/HardwareDifferentiator';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import GitHubActivity from '../components/GitHubActivity';
import Contact from '../components/Contact';

export const metadata: Metadata = {
  title: 'Abdulrahman Khalid Abdullah Redhwan | Full-Stack Software Engineer & Technical Lead',
  description: 'Founder of Madboot Nova. 5+ years experience architecting high-throughput SaaS, e-commerce, and automated CI/CD workflows, plus physical 3-axis CNC hardware automation with Arduino and G-code.',
  alternates: {
    canonical: 'https://madbootnova.com',
  },
  openGraph: {
    title: 'Abdulrahman Khalid Abdullah Redhwan | Full-Stack Software Engineer & Technical Lead',
    description: 'Senior Full-Stack Engineer bridging scalable software architectures (Laravel 12, Nuxt 4, Next.js, .NET Core) with physical CNC hardware automation.',
    url: 'https://madbootnova.com',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abdulrahman Khalid Abdullah Redhwan — Software Engineer & Technical Lead',
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="relative">
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Software + Hardware Differentiator Spotlight */}
      <HardwareDifferentiator />

      {/* 3. Categorized Capabilities & Skills */}
      <Skills />
      
      {/* 4. Enterprise Case Studies */}
      <Projects />

      {/* 5. Career Experience & Leadership */}
      <Experience />

      {/* 6. Live GitHub Engineering Feed */}
      <GitHubActivity />

      {/* 7. Contact & Architecture Consultation */}
      <Contact />
    </div>
  );
}
