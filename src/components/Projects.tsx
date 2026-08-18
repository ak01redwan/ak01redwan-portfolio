"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ExternalLink, Github, Layers, Zap, Clock, ShieldCheck } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData';

export default function Projects() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'Hardware & Automation' | 'E-Commerce' | 'Enterprise Systems'>('All');

  const filteredStudies = filter === 'All' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(s => s.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
              <Layers size={14} />
              {t('projects.tag')}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
              {t('projects.title')}
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-md text-base leading-relaxed">
            {t('projects.desc')}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-slate-200 dark:border-slate-800 pb-4">
          {[
            { key: 'All', label: t('projects.filterAll') },
            { key: 'Full-Stack', label: t('projects.filterFullStack') },
            { key: 'Hardware & Automation', label: t('projects.filterHardware') },
            { key: 'E-Commerce', label: t('projects.filterEcommerce') },
            { key: 'Enterprise Systems', label: t('projects.filterEnterprise') }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                filter === tab.key
                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study, i) => (
              <motion.div
                key={study.slug}
                layout
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group bg-white dark:bg-slate-900/90 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Visual Preview */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                    <Image 
                      src={study.image} 
                      alt={isAr ? study.titleAr : study.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Category Overlay Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-emerald-400 text-xs font-mono font-bold">
                        {isAr ? study.categoryAr : study.category}
                      </span>
                    </div>

                    {study.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-bold tracking-wider uppercase shadow-md">
                          Flagship
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-3">
                      <span>{isAr ? study.roleAr : study.role}</span>
                      <span>{study.period}</span>
                    </div>

                    <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors text-slate-900 dark:text-white">
                      {isAr ? study.titleAr : study.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                      {isAr ? study.subtitleAr : study.subtitle}
                    </p>

                    {/* Highlight Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80">
                      {study.measurableOutcomes.slice(0, 2).map((metric, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="text-lg font-bold font-display text-emerald-500 dark:text-emerald-400">
                            {isAr ? metric.metricAr : metric.metric}
                          </span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                            {isAr ? metric.labelAr : metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {study.technologies.slice(0, 5).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 5 && (
                        <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-400">
                          +{study.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 pt-4 mt-auto">
                  <Link 
                    href={`/projects/${study.slug}`} 
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 group/link"
                  >
                    <span>{t('projects.viewCaseStudy')}</span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center gap-3">
                    {study.githubUrl && (
                      <a 
                        href={study.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-400 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="GitHub"
                        aria-label="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {study.liveUrl && (
                      <a 
                        href={study.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-400 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="Live Site"
                        aria-label="Live Demo URL"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
