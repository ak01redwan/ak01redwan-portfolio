"use client";

import Link from 'next/link';
import { Home, Briefcase, FileText, ArrowLeft, Layers, Compass } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

export default function NotFound() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-mono font-bold uppercase tracking-wider mb-6 border border-emerald-500/20">
        <Compass size={14} />
        <span>HTTP 404: ROUTE_NOT_FOUND</span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
        {isAr ? 'الصفحة غير موجودة' : 'Page Not Found'}
      </h1>

      <p className="text-slate-600 dark:text-slate-400 max-w-lg mb-10 text-base sm:text-lg leading-relaxed">
        {isAr
          ? 'عذراً، الصفحة أو دراسة الحالة التي تبحث عنها غير متوفرة أو تم نقلها.'
          : 'The page, engineering case study, or research publication you are looking for has been relocated or does not exist.'}
      </p>

      {/* Quick Discovery Navigation Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl w-full mb-10 text-xs font-semibold">
        <Link
          href="/"
          className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 shadow-sm flex flex-col items-center gap-2 transition-all hover:-translate-y-0.5"
        >
          <Home size={18} className="text-emerald-500" />
          <span>{t('nav.home')}</span>
        </Link>
        <Link
          href="/projects"
          className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 shadow-sm flex flex-col items-center gap-2 transition-all hover:-translate-y-0.5"
        >
          <Layers size={18} className="text-blue-500" />
          <span>{t('nav.projects')}</span>
        </Link>
        <Link
          href="/blog"
          className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 shadow-sm flex flex-col items-center gap-2 transition-all hover:-translate-y-0.5"
        >
          <FileText size={18} className="text-purple-500" />
          <span>{t('nav.blog')}</span>
        </Link>
        <Link
          href="/resume"
          className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 shadow-sm flex flex-col items-center gap-2 transition-all hover:-translate-y-0.5"
        >
          <Briefcase size={18} className="text-cyan-500" />
          <span>{t('nav.downloadCv')}</span>
        </Link>
      </div>

      <Link
        href="/"
        className="px-7 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-2"
      >
        <ArrowLeft size={16} className="rtl:rotate-180" />
        <span>{isAr ? 'العودة للرئيسية' : 'Return to Home'}</span>
      </Link>
    </div>
  );
}
