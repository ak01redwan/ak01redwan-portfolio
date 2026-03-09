import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.items.ecommerce.title'),
      description: t('projects.items.ecommerce.desc'),
      tech: ['nopCommerce', 'Smartstore', '.NET', 'C#', 'SQL Server'],
      github: 'https://github.com/ak01redwan',
      live: '#',
      image: 'https://picsum.photos/seed/ecommerce/800/600',
    },
    {
      title: t('projects.items.ai.title'),
      description: t('projects.items.ai.desc'),
      tech: ['Python', 'Flask', 'rembg', 'Docker', 'REST API'],
      github: 'https://github.com/ak01redwan',
      live: '#',
      image: 'https://picsum.photos/seed/ai/800/600',
    },
    {
      title: t('projects.items.university.title'),
      description: t('projects.items.university.desc'),
      tech: ['.NET', 'Umbraco', 'Python', 'Django', 'PostgreSQL'],
      github: 'https://github.com/ak01redwan',
      live: '#',
      image: 'https://picsum.photos/seed/university/800/600',
    },
    {
      title: t('projects.items.microservices.title'),
      description: t('projects.items.microservices.desc'),
      tech: ['Node.js', 'NestJS', 'Microservices', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/ak01redwan',
      live: '#',
      image: 'https://picsum.photos/seed/microservices/800/600',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">{t('projects.tag')}</h2>
            <h3 className="text-4xl font-display font-bold">{t('projects.title')}</h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-md">
            {t('projects.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group bg-white dark:bg-slate-950 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="flex gap-4">
                    <a href={project.github} className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.live} className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-4 group-hover:text-emerald-500 transition-colors">{project.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-semibold px-3 py-1 bg-slate-50 dark:bg-slate-900 text-slate-500 rounded-full border border-slate-100 dark:border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
