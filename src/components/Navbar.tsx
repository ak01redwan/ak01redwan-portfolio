"use client";

import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Languages, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/context/LanguageContext';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md py-4 shadow-sm border-b border-slate-200/50 dark:border-slate-800/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div>
          <Link href="/" className="text-xl sm:text-2xl font-display font-bold tracking-tight">
            AK01REDWAN
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href) ? 'text-emerald-500 font-bold' : 'hover:text-emerald-500 text-slate-700 dark:text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            </div>
          ))}

          {/* Resume CTA */}
          <Link
            href="/resume"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-emerald-500/30 text-emerald-500 hover:bg-emerald-500/10 transition-colors flex items-center gap-1.5"
          >
            <FileText size={13} />
            <span>CV</span>
          </Link>
          
          <div className="flex items-center gap-3 border-l border-slate-200 dark:border-slate-800 pl-6 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-6">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 text-xs font-bold font-mono"
              aria-label="Toggle Language"
            >
              <Languages size={15} />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 transition-colors text-xs font-bold font-mono"
          >
            {i18n.language.toUpperCase()}
          </button>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    isActive(link.href) ? 'text-emerald-500 font-bold' : 'hover:text-emerald-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/resume"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-semibold text-emerald-500 flex items-center gap-2"
              >
                <FileText size={18} />
                <span>{t('nav.downloadCv')}</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
