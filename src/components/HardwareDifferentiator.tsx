"use client";

import { motion } from 'motion/react';
import { Cpu, Cog, Zap, ArrowRight, Activity, Terminal } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

export default function HardwareDifferentiator() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <section className="py-20 relative overflow-hidden bg-slate-900/40 border-y border-slate-800/60">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
            <Cpu size={14} />
            {t('differentiator.badge')}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight">
            {t('differentiator.title')}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            {t('differentiator.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Hardware Visual Card */}
          <div className="lg:col-span-7 bg-slate-950/90 rounded-3xl border border-slate-800 p-6 md:p-8 shadow-2xl relative group overflow-hidden">
            {/* CNC Machine Graphic */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-800/80 mb-6 bg-slate-900">
              <Image 
                src="/images/cnc-machine.svg" 
                alt="Custom 3-Axis CNC Milling Machine by Abdulrahman Redhwan" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                G-CODE AUTOMATION: 0.05mm
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <div className="text-xl font-bold font-mono text-emerald-400">Arduino Core</div>
                <div className="text-xs text-slate-400 mt-1">ATmega Microcontroller</div>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <div className="text-xl font-bold font-mono text-cyan-400">GRBL / Marlin</div>
                <div className="text-xs text-slate-400 mt-1">Firmware Flashing</div>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <div className="text-xl font-bold font-mono text-indigo-400">1/16 Stepping</div>
                <div className="text-xs text-slate-400 mt-1">Precision Motion</div>
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-5 space-y-6">
            {/* Pillar 1: Enterprise Web */}
            <div className="p-6 bg-slate-950/60 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Terminal size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t('differentiator.softwarePillar.title')}
                </h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t('differentiator.softwarePillar.desc')}
              </p>
            </div>

            {/* Pillar 2: Physical Hardware */}
            <div className="p-6 bg-slate-950/60 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Cog size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t('differentiator.hardwarePillar.title')}
                </h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t('differentiator.hardwarePillar.desc')}
              </p>
            </div>

            {/* Action CTA */}
            <Link 
              href="/projects/cnc-machine-automation" 
              className="inline-flex items-center justify-between w-full p-4 rounded-xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-transparent border border-emerald-500/30 text-white font-semibold hover:border-emerald-400 transition-all group"
            >
              <span>{t('differentiator.viewHardwareStudy')}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform text-emerald-400" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
