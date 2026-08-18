"use client";

import { motion } from 'motion/react';
import { 
  Printer, 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Award,
} from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import Link from 'next/link';
import { PERSONAL_INFO, EXPERIENCE_ITEMS, SKILL_CATEGORIES } from '../data/portfolioData';

export default function ResumeClient() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen pt-28 pb-24 bg-slate-100 dark:bg-slate-950 print:bg-white print:p-0 print:m-0">
      
      {/* Top Actions Bar (Hidden on print) */}
      <div className="max-w-5xl mx-auto px-6 mb-8 print:hidden">
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-emerald-500 transition-colors"
          >
            <ArrowLeft size={16} className="rtl:rotate-180" />
            <span>{isAr ? 'العودة للرئيسية' : 'Back to Home'}</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-md shadow-emerald-500/20"
            >
              <Printer size={16} />
              <span>{isAr ? 'طباعة / حفظ PDF' : 'Print / Save as PDF'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Printable Resume Sheet Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 print:px-0">
        <motion.div 
          className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl print:shadow-none print:border-none print:rounded-none print:p-0 print:text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
                  {isAr ? PERSONAL_INFO.fullNameAr : PERSONAL_INFO.fullName}
                </h1>
                <p className="text-lg font-medium text-emerald-600 dark:text-emerald-400 mt-1">
                  {isAr ? PERSONAL_INFO.titleAr : PERSONAL_INFO.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {isAr 
                    ? 'المؤسس والقائد التقني في مادبوت نوفا • خبرة 5+ سنوات في هندسة البرمجيات والعتاد' 
                    : 'Founder & Technical Lead at Madboot Nova • 5+ Years Engineering'}
                </p>
              </div>

              {/* Quick Contact Chips */}
              <div className="text-xs space-y-1.5 font-mono text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-emerald-500 shrink-0" />
                  <a href={`mailto:${PERSONAL_INFO.emails[0]}`} className="hover:underline">{PERSONAL_INFO.emails[0]}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-emerald-500 shrink-0" />
                  <a href={`tel:${PERSONAL_INFO.phones[0]}`} className="hover:underline">{PERSONAL_INFO.phones[0]}</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-emerald-500 shrink-0" />
                  <span>{isAr ? PERSONAL_INFO.locationAr : PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={13} className="text-emerald-500 shrink-0" />
                  <a href={PERSONAL_INFO.agencyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{PERSONAL_INFO.agencyUrl}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="mb-8">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
              <Award size={14} />
              {isAr ? 'الملخص التنفيذي' : 'EXECUTIVE SUMMARY'}
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {isAr 
                ? 'مهندس برمجيات شامل وقائد تقني يمتلك أكثر من 5 سنوات من الخبرة المعمارية العميقة في بناء تطبيقات الويب الحديثة، المنظومات الموزعة، وأتمتة الآلات والعتاد الفيزيائي. مؤسس وكالة مادبوت نوفا (Madboot Nova)، وكبير المعماريين لمنصات التعليم والتجارة الإلكترونية، ومصمم وباني آلات CNC ثلاثية المحاور بمتحكمات Arduino وأكواد G-Code.'
                : 'Senior Full-Stack Software Engineer and Technical Lead with 5+ years of engineering mastery across modern web applications, distributed systems, and physical hardware automation. Founder of Madboot Nova, lead architect on enterprise e-commerce and higher-education CMS platforms, and maker of custom 3-axis CNC machines with Arduino and G-code automation.'}
            </p>
          </div>

          {/* Core Competencies & Skills */}
          <div className="mb-8">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
              <Code2 size={14} />
              {isAr ? 'القدرات الجوهرية ومجالات التخصص' : 'CORE COMPETENCIES & DOMAIN MASTERY'}
            </h2>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-900 dark:text-white mb-2">
                    {isAr ? cat.titleAr : cat.title}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((s) => (
                      <span key={s.name} className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Work Experience */}
          <div className="mb-8">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
              <Briefcase size={14} />
              {isAr ? 'الخبرات المهنية وسجل القيادة' : 'PROFESSIONAL WORK EXPERIENCE'}
            </h2>

            <div className="space-y-6">
              {EXPERIENCE_ITEMS.map((exp) => (
                <div key={exp.id} className="border-l-2 border-slate-200 dark:border-slate-800 pl-4 rtl:border-r-2 rtl:border-l-0 rtl:pr-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {isAr ? exp.roleAr : exp.role} • <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{isAr ? exp.companyAr : exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
                      {isAr ? exp.periodAr : exp.period} | {isAr ? exp.locationAr : exp.location}
                    </span>
                  </div>

                  <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300 mb-2 leading-relaxed">
                    {(isAr ? exp.descriptionAr : exp.description).map((d, idx) => (
                      <p key={idx}>{d}</p>
                    ))}
                  </div>

                  <ul className="space-y-1 mb-3">
                    {(isAr ? exp.keyWinsAr : exp.keyWins).map((win, idx) => (
                      <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1.5">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{win}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Credentials */}
          <div className="mb-8">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
              <GraduationCap size={14} />
              {isAr ? 'المؤهلات والشهادات الأكاديمية' : 'EDUCATION & ACADEMIC CREDENTIALS'}
            </h2>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {isAr ? PERSONAL_INFO.education.degreeAr : PERSONAL_INFO.education.degree}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {isAr ? PERSONAL_INFO.education.institutionAr : PERSONAL_INFO.education.institution}
                </p>
              </div>
              <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold shrink-0">
                {PERSONAL_INFO.education.period} • {isAr ? 'مرتبة الشرف' : PERSONAL_INFO.education.gpa}
              </div>
            </div>
          </div>

          {/* Verified Handles */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-between items-center text-xs font-mono text-slate-500 gap-3">
            <span>Primary Handle: @ak01redwan</span>
            <span>Agency: madbootnova.com</span>
            <span>{isAr ? 'المكلا، حضرموت، اليمن' : 'Al-Mukalla, Hadhramaut, Yemen'}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
