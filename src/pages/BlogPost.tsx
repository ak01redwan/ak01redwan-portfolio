import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();
  const { t } = useTranslation();

  // In a real app, you would fetch the post data based on the ID
  // For now, we'll use placeholder data
  const post = {
    title: t(`blog.posts.${id}.title`),
    date: 'March 15, 2024',
    excerpt: t(`blog.posts.${id}.excerpt`),
    category: t(`blog.posts.${id}.category`),
    author: 'AK01.REDWAN',
    content: `
      <p class="mb-6">This is a placeholder for the full blog post content. In a production environment, this content would be fetched from a CMS or a Markdown file.</p>
      <h2 class="text-2xl font-bold mb-4">The Importance of Modern Web Architecture</h2>
      <p class="mb-6">Building scalable and maintainable web applications requires a deep understanding of modern architectural patterns. From micro-frontends to serverless functions, the landscape is constantly evolving.</p>
      <blockquote class="border-l-4 border-emerald-500 pl-6 italic my-8 text-xl text-slate-700 dark:text-slate-300">
        "The best code is no code at all. The second best code is code that is easy to delete."
      </blockquote>
      <p class="mb-6">As developers, we must strive for simplicity while delivering complex functionality. This balance is what defines a senior engineer.</p>
      <h3 class="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>Prioritize performance and accessibility from day one.</li>
        <li>Choose the right tool for the job, not just the trendiest one.</li>
        <li>Documentation is as important as the code itself.</li>
      </ul>
    `
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 max-w-4xl mx-auto px-6"
    >
      <Link 
        to="/blog" 
        className="inline-flex items-center gap-2 text-emerald-500 font-bold mb-12 hover:gap-3 transition-all"
      >
        <ArrowLeft size={20} />
        {t('blog.backToBlog')}
      </Link>

      <header className="mb-12">
        <div className="flex flex-wrap gap-4 mb-6">
          <span className="flex items-center gap-2 text-sm text-slate-500">
            <Calendar size={16} />
            {post.date}
          </span>
          <span className="flex items-center gap-2 text-sm text-slate-500">
            <Tag size={16} />
            {post.category}
          </span>
          <span className="flex items-center gap-2 text-sm text-slate-500">
            <User size={16} />
            {post.author}
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
          {post.title}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 italic">
          {post.excerpt}
        </p>
      </header>

      <div 
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800">
        <h3 className="text-xl font-bold mb-6">{t('blog.sharePost')}</h3>
        <div className="flex gap-4">
          {/* Placeholder for share buttons */}
          <button className="px-6 py-2 bg-slate-100 dark:bg-slate-800 rounded-full font-bold hover:bg-emerald-500 hover:text-white transition-all">Twitter</button>
          <button className="px-6 py-2 bg-slate-100 dark:bg-slate-800 rounded-full font-bold hover:bg-emerald-500 hover:text-white transition-all">LinkedIn</button>
        </div>
      </div>
    </motion.div>
  );
}
