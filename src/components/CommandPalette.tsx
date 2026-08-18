"use client";

import { Command } from 'cmdk';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Home, User, Briefcase, Mail, FileText, Moon, Sun, Languages, Cpu, Layers } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import { CASE_STUDIES } from '../data/portfolioData';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  // Toggle the menu when ⌘K or Ctrl+K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-slate-950/60 backdrop-blur-md px-4">
      <div 
        className="fixed inset-0" 
        onClick={() => setOpen(false)}
      />
      <Command 
        className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col"
        loop
      >
        <div className="flex items-center border-b border-slate-200 dark:border-slate-800 px-4">
          <Command.Input 
            autoFocus
            placeholder={t('command.placeholder')} 
            className="flex-1 h-14 bg-transparent outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-500 text-sm font-medium"
          />
          <div className="text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">ESC</div>
        </div>

        <Command.List className="max-h-[350px] overflow-y-auto p-3 scrollbar-hide">
          <Command.Empty className="p-4 text-center text-sm text-slate-500">
            {isAr ? 'لم يتم العثور على نتائج مطابقة.' : 'No matching results found.'}
          </Command.Empty>

          <Command.Group heading={t('command.navigation')} className="text-xs font-mono font-bold text-slate-400 px-2 py-2">
            <Command.Item 
              onSelect={() => runCommand(() => router.push('/'))}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors text-sm font-medium"
            >
              <Home size={16} className="text-emerald-500" />
              <span>{t('nav.home')}</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push('/about'))}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors text-sm font-medium"
            >
              <User size={16} className="text-blue-500" />
              <span>{t('nav.about')}</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push('/projects'))}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors text-sm font-medium"
            >
              <Briefcase size={16} className="text-purple-500" />
              <span>{t('nav.projects')}</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push('/resume'))}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors text-sm font-medium"
            >
              <FileText size={16} className="text-emerald-500" />
              <span>{t('nav.downloadCv')}</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push('/blog'))}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors text-sm font-medium"
            >
              <FileText size={16} className="text-indigo-500" />
              <span>{t('nav.blog')}</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push('/contact'))}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors text-sm font-medium"
            >
              <Mail size={16} className="text-cyan-500" />
              <span>{t('nav.contact')}</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading={t('projects.tag')} className="text-xs font-mono font-bold text-slate-400 px-2 py-2 mt-2 border-t border-slate-100 dark:border-slate-800/60">
            {CASE_STUDIES.map((study) => (
              <Command.Item
                key={study.slug}
                onSelect={() => runCommand(() => router.push(`/projects/${study.slug}`))}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors text-sm"
              >
                <div className="flex items-center gap-3">
                  {study.slug.includes('cnc') ? <Cpu size={16} className="text-amber-500" /> : <Layers size={16} className="text-emerald-500" />}
                  <span className="font-semibold">{isAr ? study.titleAr : study.title}</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">{isAr ? study.categoryAr : study.category}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading={t('command.theme')} className="text-xs font-mono font-bold text-slate-400 px-2 py-2 mt-2 border-t border-slate-100 dark:border-slate-800/60">
            <Command.Item 
              onSelect={() => runCommand(toggleTheme)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors text-sm"
            >
              <Moon size={16} className="text-amber-400" />
              <span>{isAr ? 'تبديل المظهر (ليلي / نهاري)' : 'Toggle Theme (Dark / Light)'}</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(toggleLanguage)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors text-sm"
            >
              <Languages size={16} className="text-emerald-500" />
              <span>{isAr ? 'Switch to English' : 'التبديل إلى العربية (Arabic)'}</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
