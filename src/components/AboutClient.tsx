"use client";

import { motion } from 'motion/react';
import About from './About';
import Skills from './Skills';
import HardwareDifferentiator from './HardwareDifferentiator';
import Experience from './Experience';
import { useTranslation } from '@/context/LanguageContext';

export default function AboutClient() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-slate-900 text-white py-20 mt-[-6rem] pt-[12rem] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-4">
            ARCHITECT PROFILE
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6 tracking-tight">
            {t('about.title')}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
            {t('about.bioP1')}
          </p>
        </div>
      </div>
      
      <About />
      
      <HardwareDifferentiator />

      <Skills />

      <Experience />
    </div>
  );
}
