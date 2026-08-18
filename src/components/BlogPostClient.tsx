"use client";

import Link from 'next/link';
import { motion } from 'motion/react';
import { useTranslation } from '@/context/LanguageContext';
import { ArrowLeft, ArrowRight, Calendar, Tag, User, Clock, Terminal, CheckCircle2 } from 'lucide-react';
import { BLOG_POSTS_DATA } from '../data/portfolioData';

interface BlogPostClientProps {
  id: string;
}

export default function BlogPostClient({ id }: BlogPostClientProps) {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const post = BLOG_POSTS_DATA.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Publication Not Found</h1>
        <Link href="/blog" className="text-emerald-500 font-bold hover:underline">
          Return to Engineering Blog
        </Link>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 max-w-4xl mx-auto px-6"
    >
      <Link 
        href="/blog" 
        className="inline-flex items-center gap-2 text-emerald-500 font-bold mb-8 hover:gap-3 transition-all text-sm group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
        <span>{t('blog.backToBlog')}</span>
      </Link>

      <header className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-10">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
            {isAr ? post.categoryAr : post.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
            <Calendar size={14} />
            {isAr ? post.dateAr : post.date}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
            <Clock size={14} />
            {isAr ? post.readTimeAr : post.readTime}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
            <User size={14} />
            {post.author}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-extrabold mb-6 leading-tight tracking-tight text-slate-900 dark:text-white">
          {isAr ? post.titleAr : post.title}
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed italic">
          {isAr ? post.excerptAr : post.excerpt}
        </p>
      </header>

      {/* Article HTML Content */}
      <div 
        className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed space-y-6 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:font-display [&_h3]:text-slate-900 dark:[&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-4 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2 [&_blockquote]:border-l-4 rtl:[&_blockquote]:border-l-0 rtl:[&_blockquote]:border-r-4 [&_blockquote]:border-emerald-500 [&_blockquote]:pl-6 rtl:[&_blockquote]:pr-6 [&_blockquote]:italic [&_blockquote]:text-xl [&_blockquote]:my-8 [&_blockquote]:text-slate-800 dark:[&_blockquote]:text-slate-200 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded-md [&_code]:bg-slate-100 dark:[&_code]:bg-slate-800 [&_code]:font-mono [&_code]:text-xs [&_code]:text-emerald-500"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Share / Author Footer */}
      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">Written by Abdulrahman Redhwan</h4>
          <p className="text-xs text-slate-500">Full-Stack Software Engineer & Founder at Madboot Nova</p>
        </div>

        <div className="flex gap-3">
          <a 
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent('https://madbootnova.com/blog/' + post.id)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-xs font-bold rounded-xl hover:bg-emerald-500 hover:text-white transition-all"
          >
            Share on X
          </a>
          <a 
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://madbootnova.com/blog/' + post.id)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-xs font-bold rounded-xl hover:bg-emerald-500 hover:text-white transition-all"
          >
            Share on LinkedIn
          </a>
        </div>
      </div>
    </motion.article>
  );
}
