import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function BlogPage() {
  const { t } = useTranslation();

  const posts = [
    {
      id: 'p1',
      title: t('blog.posts.p1.title'),
      date: 'March 15, 2024',
      excerpt: t('blog.posts.p1.excerpt'),
      category: t('blog.posts.p1.category')
    },
    {
      id: 'p2',
      title: t('blog.posts.p2.title'),
      date: 'February 28, 2024',
      excerpt: t('blog.posts.p2.excerpt'),
      category: t('blog.posts.p2.category')
    },
    {
      id: 'p3',
      title: t('blog.posts.p3.title'),
      date: 'January 12, 2024',
      excerpt: t('blog.posts.p3.excerpt'),
      category: t('blog.posts.p3.category')
    }
  ];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-5xl font-display font-bold mb-4">{t('blog.title')}</h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">{t('blog.desc')}</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-emerald-500/30 transition-all group"
          >
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-4 block">{post.category}</span>
            <h2 className="text-2xl font-bold mb-4 group-hover:text-emerald-500 transition-colors">{post.title}</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">{post.date}</span>
              <Link 
                to={`/blog/${post.id}`} 
                className="text-emerald-500 font-bold hover:underline"
              >
                {t('blog.readMore')}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
