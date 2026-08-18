"use client";

import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Terminal, 
  Code2, 
  PenTool, 
  Box, 
  Image as ImageIcon, 
  Dribbble, 
  Mail, 
  Phone, 
  FileDown, 
  Cpu, 
  Sparkles, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { PERSONAL_INFO, SOCIAL_PROFILES } from '../data/portfolioData';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const stats = [
    { label: t('hero.stats.years'), value: '5+' },
    { label: t('hero.stats.ciSpeed'), value: '< 3 Min' },
    { label: t('hero.stats.precision'), value: '0.05 mm' },
    { label: t('hero.stats.deployments'), value: '100%' },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center pt-8 pb-16 overflow-hidden">
      {/* Background Ambience & Grid */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-12 left-10 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-500/10 dark:bg-blue-500/15 rounded-full blur-[140px]" />
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-15 dark:opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7">
            {/* Status & Role Pill */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {t('hero.tag')}
              </span>

              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 py-1.5 px-3 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                {t('hero.agencyTag')}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] mb-6 tracking-tight">
              {isAr ? PERSONAL_INFO.fullNameAr : PERSONAL_INFO.fullName}
            </h1>

            {/* Value Proposition */}
            <p className="text-xl sm:text-2xl font-display font-medium text-emerald-600 dark:text-emerald-400 mb-4 leading-snug">
              {t('hero.valuePropHeadline')}
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
              {t('hero.valuePropDesc')}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link 
                href="/projects" 
                className="px-7 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition-all flex items-center gap-2 group shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                {t('hero.exploreProjects')}
                <ArrowRight size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/contact" 
                className="px-7 py-4 border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl font-bold transition-all shadow-sm hover:-translate-y-0.5"
              >
                {t('hero.initiateContact')}
              </Link>

              <Link 
                href="/resume" 
                className="px-5 py-4 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 bg-transparent text-slate-700 dark:text-slate-300 rounded-xl font-semibold transition-all flex items-center gap-2 hover:text-emerald-500"
              >
                <FileDown size={18} />
                {t('nav.downloadCv')}
              </Link>
            </div>

            {/* Verified Social Profile Links */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase text-slate-400 mr-2 rtl:ml-2 rtl:mr-0">Channels:</span>
              {SOCIAL_PROFILES.slice(0, 8).map((social) => (
                <a 
                  key={social.platform}
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors p-2 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-lg"
                  title={social.platform}
                  aria-label={social.platform}
                >
                  {social.platform === 'GitHub' && <Github size={18} />}
                  {social.platform === 'LinkedIn' && <Linkedin size={18} />}
                  {social.platform.includes('X') && <Twitter size={18} />}
                  {social.platform === 'Stack Overflow' && <Terminal size={18} />}
                  {social.platform === 'Dev.to' && <Code2 size={18} />}
                  {social.platform === 'Medium' && <PenTool size={18} />}
                  {social.platform === 'CodePen' && <Box size={18} />}
                  {social.platform === 'Behance' && <ImageIcon size={18} />}
                  {social.platform === 'Dribbble' && <Dribbble size={18} />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Visual Tech Stack & Avatar Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card with Glassmorphism */}
              <div className="p-6 md:p-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl relative overflow-hidden">
                
                {/* Visual Avatar Header */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-slate-950 border border-slate-800">
                  <Image 
                    src="/images/profile-avatar.svg" 
                    alt="Abdulrahman Khalid Abdullah Redhwan" 
                    fill 
                    priority
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ak01redwan
                  </div>

                  <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/40 text-cyan-400 text-xs font-mono font-bold">
                    Yemen 🇾🇪
                  </div>
                </div>

                {/* Key Technical Highlights */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800/80 pb-2">
                    <span>ARCHITECTURAL CALIBER</span>
                    <span className="text-emerald-500 font-bold">SENIOR / LEAD</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/60 flex items-center gap-2">
                      <Layers size={14} className="text-emerald-500" />
                      <span>Laravel 12 / Nuxt 4</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/60 flex items-center gap-2">
                      <Cpu size={14} className="text-cyan-500" />
                      <span>CNC / Arduino</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/60 flex items-center gap-2">
                      <Sparkles size={14} className="text-blue-500" />
                      <span>Next.js 16 / React 19</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/60 flex items-center gap-2">
                      <Terminal size={14} className="text-indigo-500" />
                      <span>.NET Core / SQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div key={item.label} className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-display font-extrabold text-emerald-500 dark:text-emerald-400 mb-1">
                {item.value}
              </div>
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
