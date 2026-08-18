"use client";

import { motion } from 'motion/react';
import Contact from './Contact';
import { useTranslation } from '@/context/LanguageContext';
import { Clock, ShieldCheck, MessageSquare } from 'lucide-react';

export default function ContactClient() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-slate-900 text-white py-20 mt-[-6rem] pt-[12rem] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-4">
            LET'S COLLABORATE
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6 tracking-tight">
            {t('nav.contact')}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
            {t('contact.desc')}
          </p>
        </div>
      </div>
      
      <div className="py-24">
        <Contact />
      </div>
      
      <div className="py-24 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col items-center">
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-500 mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{t('contact.extra.availability.title')}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t('contact.extra.availability.desc')}</p>
            </div>
            
            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col items-center">
              <div className="p-3.5 rounded-2xl bg-blue-500/10 text-blue-500 mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{t('contact.extra.response.title')}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t('contact.extra.response.desc')}</p>
            </div>

            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col items-center">
              <div className="p-3.5 rounded-2xl bg-purple-500/10 text-purple-500 mb-4">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{t('contact.extra.socials.title')}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t('contact.extra.socials.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
