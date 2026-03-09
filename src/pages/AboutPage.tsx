import { motion } from 'motion/react';
import About from '../components/About';
import Experience from '../components/Experience';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <div className="bg-emerald-500/5 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">{t('about.tag')}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            {t('about.p1')}
          </p>
        </div>
      </div>
      
      <About />
      
      <div className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold mb-8">{t('about.philosophy.title')}</h2>
              <div className="space-y-6 text-slate-600 dark:text-slate-400">
                <p>
                  {t('about.philosophy.p1')}
                </p>
                <p>
                  {t('about.philosophy.p2')}
                </p>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-10 rounded-3xl border border-slate-100 dark:border-slate-800">
              <h2 className="text-2xl font-display font-bold mb-6">{t('about.values.title')}</h2>
              <ul className="space-y-4">
                {[
                  t('about.values.v1'),
                  t('about.values.v2'),
                  t('about.values.v3'),
                  t('about.values.v4'),
                  t('about.values.v5')
                ].map((value) => (
                  <li key={value} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Experience />
    </motion.div>
  );
}
