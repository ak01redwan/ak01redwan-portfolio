"use client";

import { motion } from 'motion/react';
import { Briefcase, Building, Calendar, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export default function Experience() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
            <Briefcase size={14} />
            {t('experience.tag')}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            {t('experience.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
            Track record across high-scale enterprise software development, distributed systems, and physical hardware R&D.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCE_ITEMS.map((exp, i) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 bg-emerald-500 rounded-full -translate-x-1/2 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 z-10">
                  <Briefcase size={14} />
                </div>

                {/* Content Box */}
                <div className="ml-10 md:ml-0 md:w-1/2">
                  <div className="p-6 md:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-lg">
                        {isAr ? exp.periodAr : exp.period}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {isAr ? exp.locationAr : exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mt-2">
                      {isAr ? exp.roleAr : exp.role}
                    </h3>
                    
                    <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                      <Building size={14} className="text-slate-400" />
                      <span>{isAr ? exp.companyAr : exp.company}</span>
                    </div>

                    <div className="space-y-2 mb-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {(isAr ? exp.descriptionAr : exp.description).map((desc, idx) => (
                        <p key={idx}>{desc}</p>
                      ))}
                    </div>

                    <div className="space-y-1.5 mb-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-100 dark:border-slate-800">
                      <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                        KEY MEASURABLE OUTCOMES:
                      </div>
                      {(isAr ? exp.keyWinsAr : exp.keyWins).map((win, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{win}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies list */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
