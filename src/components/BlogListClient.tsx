"use client";

import { motion } from 'motion/react';
import { useTranslation } from '@/context/LanguageContext';
import Link from 'next/link';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_POSTS_DATA } from '../data/portfolioData';

export default function BlogListClient() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 max-w-3xl"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
          <BookOpen size={14} />
          {t('blog.tag')}
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold mb-4 tracking-tight">
          {t('blog.title')}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
          {t('blog.desc')}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {BLOG_POSTS_DATA.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-wider">
                  {isAr ? post.categoryAr : post.category}
                </span>
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-2xl font-bold font-display mb-4 group-hover:text-emerald-500 transition-colors text-slate-900 dark:text-white">
                {isAr ? post.titleAr : post.title}
              </h2>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {isAr ? post.excerptAr : post.excerpt}
              </p>
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-slate-100 dark:border-slate-800">
              <span className="text-xs text-slate-400 font-mono">{post.date}</span>
              <Link 
                href={`/blog/${post.id}`} 
                className="inline-flex items-center gap-1.5 text-emerald-500 font-bold text-sm hover:underline"
              >
                <span>{t('blog.readMore')}</span>
                <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
