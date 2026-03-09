import { motion } from 'motion/react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      
      {/* Brief About Section */}
      <div className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-display font-bold mb-6">{t('about.title')}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              {t('about.p2')}
            </p>
            <Link to="/about" className="text-emerald-500 font-bold flex items-center gap-2 group">
              {t('nav.about')}
              <ArrowRight size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white dark:bg-slate-950 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
              <div className="text-3xl font-bold text-emerald-500">150+</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">{t('about.stats.projects')}</div>
            </div>
            <div className="p-6 bg-white dark:bg-slate-950 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
              <div className="text-3xl font-bold text-blue-500">10+</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">{t('about.stats.years')}</div>
            </div>
          </div>
        </div>
      </div>

      <Skills />
      
      {/* Projects Preview */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-display font-bold">{t('projects.title')}</h2>
            <Link to="/projects" className="px-6 py-3 border border-slate-200 dark:border-slate-800 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
              {t('projects.tag')}
            </Link>
          </div>
          <Projects />
        </div>
      </div>
    </motion.div>
  );
}
