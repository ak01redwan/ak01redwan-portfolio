import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();

  const experiences = [
    {
      company: t('experience.items.exp1.company'),
      role: t('experience.items.exp1.role'),
      period: t('experience.items.exp1.period'),
      description: t('experience.items.exp1.desc'),
    },
    {
      company: t('experience.items.exp2.company'),
      role: t('experience.items.exp2.role'),
      period: t('experience.items.exp2.period'),
      description: t('experience.items.exp2.desc'),
    },
    {
      company: t('experience.items.exp3.company'),
      role: t('experience.items.exp3.role'),
      period: t('experience.items.exp3.period'),
      description: t('experience.items.exp3.desc'),
    },
    {
      company: t('experience.items.exp4.company'),
      role: t('experience.items.exp4.role'),
      period: t('experience.items.exp4.period'),
      description: t('experience.items.exp4.desc'),
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">{t('experience.tag')}</h2>
          <h3 className="text-4xl font-display font-bold">{t('experience.title')}</h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-10 h-10 bg-emerald-500 rounded-full -translate-x-1/2 hidden md:flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 z-10">
                  <Briefcase size={18} />
                </div>

                <div className="md:w-1/2">
                  <div className={`p-8 bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow ${i % 2 === 0 ? 'md:text-left rtl:md:text-right' : 'md:text-right rtl:md:text-left'}`}>
                    <span className="text-emerald-500 font-bold text-sm mb-2 block">{exp.period}</span>
                    <h4 className="text-2xl font-bold mb-1">{exp.role}</h4>
                    <p className="text-slate-500 font-medium mb-4">{exp.company}</p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
