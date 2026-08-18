"use client";

import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  Clock, 
  Zap, 
  FileCode,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CASE_STUDIES } from '../data/portfolioData';

export default function ProjectDetailClient({ slug }: { slug: string }) {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) {
    notFound();
  }

  // Related projects
  const otherProjects = CASE_STUDIES.filter((s) => s.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* Top Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-emerald-500 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform" />
          <span>{t('projects.caseStudyDetails.backToProjects')}</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-900 border border-slate-800 text-white relative overflow-hidden shadow-2xl">
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                {isAr ? study.categoryAr : study.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {study.period} • {isAr ? study.roleAr : study.role}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold mb-6 leading-tight tracking-tight">
              {isAr ? study.titleAr : study.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              {isAr ? study.subtitleAr : study.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              {study.liveUrl && (
                <a 
                  href={study.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/25"
                >
                  <ExternalLink size={18} />
                  <span>{t('projects.caseStudyDetails.liveDemo')}</span>
                </a>
              )}
              {study.githubUrl && (
                <a 
                  href={study.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all flex items-center gap-2 border border-slate-700"
                >
                  <Github size={18} />
                  <span>{t('projects.caseStudyDetails.sourceCode')}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Breakdown Layout */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Visual Architecture Showcase */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl">
              <Image 
                src={study.image} 
                alt={isAr ? study.titleAr : study.title} 
                fill 
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 1. Problem Statement */}
            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-red-500/10 text-red-500 dark:text-red-400 border border-red-500/20">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                  {t('projects.caseStudyDetails.problem')}
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                {isAr ? study.problemAr : study.problem}
              </p>
            </div>

            {/* 2. Engineering Approach */}
            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20">
                  <Zap size={24} />
                </div>
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                  {t('projects.caseStudyDetails.approach')}
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
                {isAr ? study.approachAr : study.approach}
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                <div className="text-xs font-mono font-bold text-slate-400 mb-2">SYSTEM ARCHITECTURE SUMMARY:</div>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  {isAr ? study.architecture.descriptionAr : study.architecture.description}
                </p>
              </div>
            </div>

            {/* 3. Architecture Highlights */}
            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/20">
                  <Layers size={24} />
                </div>
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                  {t('projects.caseStudyDetails.architectureHighlights')}
                </h2>
              </div>
              <ul className="space-y-4">
                {(isAr ? study.architecture.highlightsAr : study.architecture.highlights).map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm md:text-base">
                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Column (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Measurable Outcomes Card */}
            <div className="p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2 mb-6">
                <Sparkles size={20} className="text-emerald-400" />
                <h3 className="text-xl font-bold font-display">
                  {t('projects.caseStudyDetails.outcomes')}
                </h3>
              </div>

              <div className="space-y-6">
                {study.measurableOutcomes.map((outcome, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80">
                    <div className="text-3xl font-bold font-display text-emerald-400 mb-1">
                      {isAr ? outcome.metricAr : outcome.metric}
                    </div>
                    <div className="text-xs text-slate-300 leading-snug">
                      {isAr ? outcome.labelAr : outcome.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Card */}
            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold font-display mb-4 text-slate-900 dark:text-white">
                {t('projects.caseStudyDetails.techStack')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-mono font-medium border border-slate-200/60 dark:border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Contact CTA */}
            <div className="p-8 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent rounded-3xl border border-emerald-500/20 text-center">
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                Require a Similar Architecture?
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Consult with Abdulrahman on high-throughput web systems, CI/CD automation, or custom hardware controllers.
              </p>
              <Link 
                href="/contact" 
                className="inline-block w-full py-3.5 px-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-sm transition-all shadow-md shadow-emerald-500/20"
              >
                Initiate Architecture Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* More Case Studies Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
        <h3 className="text-2xl font-bold font-display mb-8">Other Enterprise Case Studies</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((other) => (
            <Link 
              key={other.slug} 
              href={`/projects/${other.slug}`}
              className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all flex items-center justify-between group"
            >
              <div>
                <span className="text-xs font-mono text-emerald-500 font-bold mb-1 block">
                  {isAr ? other.categoryAr : other.category}
                </span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  {isAr ? other.titleAr : other.title}
                </h4>
              </div>
              <ArrowRight size={20} className="text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
