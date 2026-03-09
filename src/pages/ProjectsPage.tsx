import { motion } from 'motion/react';
import Projects from '../components/Projects';
import { useTranslation } from 'react-i18next';

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <div className="bg-blue-500/5 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">{t('nav.projects')}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            {t('projects.desc')}
          </p>
        </div>
      </div>
      
      <Projects />
      
      <div className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">{t('projects.more.title')}</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            {t('projects.more.desc')}
          </p>
          <a 
            href="https://github.com/ak01redwan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:scale-105 transition-transform inline-block"
          >
            {t('projects.more.github')}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
