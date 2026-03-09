import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { label: t('about.stats.years'), value: '10+' },
    { label: t('about.stats.projects'), value: '150+' },
    { label: t('about.stats.clients'), value: '80+' },
    { label: t('about.stats.code'), value: '1M+' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">{t('about.tag')}</h2>
            <h3 className="text-4xl font-display font-bold mb-8 leading-tight">
              {t('about.title')}
            </h3>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                t('about.features.f1'),
                t('about.features.f2'),
                t('about.features.f3'),
                t('about.features.f4')
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="font-medium text-slate-800 dark:text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="p-8 bg-white dark:bg-slate-950 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-4xl font-display font-bold text-emerald-500 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
