"use client";

import { motion } from 'motion/react';
import Projects from './Projects';
import { useTranslation } from '@/context/LanguageContext';
import { Github, ArrowUpRight } from 'lucide-react';

export default function ProjectsClient() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-slate-900 text-white py-20 mt-[-6rem] pt-[12rem] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-4">
            PORTFOLIO &amp; ARCHITECTURES
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6 tracking-tight">
            {t('nav.projects')}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
            {t('projects.desc')}
          </p>
        </div>
      </div>
      
      <div>
        <Projects />
      </div>
      
      <div className="py-24 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold mb-4 text-slate-900 dark:text-white">
            {t('projects.more.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto text-base">
            {t('projects.more.desc')}
          </p>
          <a 
            href="https://github.com/ak01redwan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition-all inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <Github size={18} />
            <span>{t('projects.more.github')}</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
