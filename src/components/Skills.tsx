"use client";

import { motion } from 'motion/react';
import { 
  Code2, 
  Server, 
  Layout, 
  Cpu, 
  GitBranch, 
  Monitor, 
  Database,
  CheckCircle2,
  Terminal
} from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-6 h-6 text-emerald-500" />;
      case 'Server': return <Server className="w-6 h-6 text-blue-500" />;
      case 'Layout': return <Layout className="w-6 h-6 text-cyan-500" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-amber-500" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6 text-indigo-500" />;
      case 'Monitor': return <Monitor className="w-6 h-6 text-purple-500" />;
      default: return <Database className="w-6 h-6 text-emerald-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/40">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/5 dark:bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
            <Terminal size={14} />
            {t('skills.tag')}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            {t('skills.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            {t('skills.desc')}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={cat.id}
              className={`p-6 md:p-8 bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group ${
                cat.id === 'hardware' ? 'md:col-span-2 lg:col-span-1 border-amber-500/20 bg-amber-500/[0.02]' : ''
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform duration-300 border border-slate-200/60 dark:border-slate-700/60">
                    {getIcon(cat.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display mb-2 text-slate-900 dark:text-white">
                  {isAr ? cat.titleAr : cat.title}
                </h3>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {isAr ? cat.descriptionAr : cat.description}
                </p>

                {/* Skills list */}
                <div className="space-y-2.5 mb-6">
                  {cat.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs"
                    >
                      <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {skill.name}
                      </div>
                      {skill.context && (
                        <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 truncate max-w-[150px]">
                          {skill.context}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{cat.skills.length} Capabilities</span>
                <span className="text-emerald-500 font-semibold">Production Caliber</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
