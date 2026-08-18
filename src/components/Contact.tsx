"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter, 
  Terminal, 
  Code2, 
  PenTool, 
  Box, 
  Image as ImageIcon, 
  Dribbble,
  CheckCircle2,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const socials = [
    { icon: Github, href: 'https://github.com/ak01redwan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ak01redwan', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/ak01redwan', label: 'X' },
    { icon: Terminal, href: 'https://stackoverflow.com/users/ak01redwan', label: 'Stack Overflow' },
    { icon: Code2, href: 'https://dev.to/ak01redwan', label: 'Dev.to' },
    { icon: PenTool, href: 'https://medium.com/@ak01redwan', label: 'Medium' },
    { icon: Box, href: 'https://codepen.io/ak01redwan', label: 'CodePen' },
    { icon: ImageIcon, href: 'https://www.behance.net/ak01redwan', label: 'Behance' },
    { icon: Dribbble, href: 'https://dribbble.com/ak01redwan', label: 'Dribbble' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate sending with SLA guarantee
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
              <Clock size={14} />
              {t('contact.tag')}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">
              {t('contact.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-10 max-w-md leading-relaxed text-base">
              {t('contact.desc')}
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-950 flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-800 group-hover:border-emerald-500 transition-colors">
                  <Mail className="text-emerald-500" size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">{t('contact.emailLabel')}</p>
                  <a href={`mailto:${PERSONAL_INFO.emails[0]}`} className="text-base font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors font-mono">
                    {PERSONAL_INFO.emails[0]}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-950 flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-800 group-hover:border-emerald-500 transition-colors">
                  <Phone className="text-emerald-500" size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">{t('contact.phoneLabel')}</p>
                  <div className="flex flex-col sm:flex-row sm:gap-4 font-mono text-sm font-bold text-slate-900 dark:text-white">
                    <a href={`tel:${PERSONAL_INFO.phones[0]}`} className="hover:text-emerald-500 transition-colors">{PERSONAL_INFO.phones[0]}</a>
                    <span className="text-slate-400 hidden sm:inline">•</span>
                    <a href={`tel:${PERSONAL_INFO.phones[1]}`} className="hover:text-emerald-500 transition-colors">{PERSONAL_INFO.phones[1]}</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-950 flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-800 group-hover:border-emerald-500 transition-colors">
                  <MapPin className="text-emerald-500" size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">{t('contact.locationLabel')}</p>
                  <p className="text-base font-bold text-slate-900 dark:text-white">
                    {isAr ? PERSONAL_INFO.locationAr : PERSONAL_INFO.location}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-4">
                {isAr ? 'القنوات والمنصات المعتمدة' : 'Verified Engineering Profiles'}
              </h3>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white dark:bg-slate-950 flex items-center justify-center border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-emerald-500 hover:border-emerald-500 transition-all shadow-sm"
                    title={social.label}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className="bg-white dark:bg-slate-950 p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl"
          >
            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-2">
                  {t('contact.form.successTitle')}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-sm mb-6 leading-relaxed">
                  {t('contact.form.successDesc')}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold font-mono transition-colors"
                >
                  {isAr ? 'إرسال استفسار آخر' : 'Send Another Inquiry'}
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('contact.form.namePlaceholder')}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t('contact.form.emailPlaceholder')}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    {t('contact.form.subject')}
                  </label>
                  <input 
                    type="text" 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t('contact.form.subjectPlaceholder')}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none text-sm"
                  ></textarea>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                  <span>{t('contact.slaDesc')}</span>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-70 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-emerald-500/20 text-sm cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>{t('contact.form.sending')}</span>
                  ) : (
                    <>
                      <span>{t('contact.form.send')}</span>
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 rtl:group-hover:-translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
