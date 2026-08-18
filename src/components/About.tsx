"use client";

import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  GraduationCap, 
  Cpu, 
  Server, 
  GitBranch, 
  Award, 
  FileText, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const stats = [
    { label: t('hero.stats.years'), value: '5+' },
    { label: t('hero.stats.ciSpeed'), value: '< 3 Min' },
    { label: t('hero.stats.precision'), value: '0.05 mm' },
    { label: 'Honors Degree', value: 'GPA 3.9+' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50/60 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Bio Text Column */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
              <Award size={14} />
              {t('about.tag')}
            </span>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight text-slate-900 dark:text-white tracking-tight">
              {t('about.title')}
            </h2>
            
            <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
              <p>{t('about.bioP1')}</p>
              <p>{t('about.bioP2')}</p>
            </div>

            {/* Academic Education Card */}
            <div className="mt-8 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  {t('about.educationTitle')}
                </h4>
                <div className="text-base font-bold text-slate-900 dark:text-white mt-1">
                  {isAr ? PERSONAL_INFO.education.degreeAr : PERSONAL_INFO.education.degree}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {isAr ? PERSONAL_INFO.education.institutionAr : PERSONAL_INFO.education.institution} ({PERSONAL_INFO.education.period}) • {PERSONAL_INFO.education.gpa}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                href="/resume" 
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-md shadow-emerald-500/20"
              >
                <FileText size={16} />
                {t('about.viewCv')}
              </Link>
              <Link 
                href="/projects" 
                className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-bold text-sm transition-all flex items-center gap-2"
              >
                {t('projects.title')}
                <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </div>

          {/* Stats Grid Column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 md:p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
              >
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-emerald-500 dark:text-emerald-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Philosophy & Tenets */}
        <div className="pt-16 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-3xl mb-12">
            <h3 className="text-2xl md:text-4xl font-display font-bold mb-4 text-slate-900 dark:text-white">
              {t('about.philosophyTitle')}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              {t('about.philosophyP1')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('about.tenets.t1'), desc: t('about.tenets.t1Desc'), icon: GitBranch },
              { title: t('about.tenets.t2'), desc: t('about.tenets.t2Desc'), icon: Cpu },
              { title: t('about.tenets.t3'), desc: t('about.tenets.t3Desc'), icon: Server },
              { title: t('about.tenets.t4'), desc: t('about.tenets.t4Desc'), icon: ShieldCheck }
            ].map((tenet, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800"
              >
                <div className="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-500 mb-4">
                  <tenet.icon size={20} />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {tenet.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tenet.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
