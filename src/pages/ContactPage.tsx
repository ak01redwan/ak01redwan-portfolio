import { motion } from 'motion/react';
import Contact from '../components/Contact';
import { useTranslation } from 'react-i18next';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <div className="bg-purple-500/5 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">{t('nav.contact')}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            {t('contact.desc')}
          </p>
        </div>
      </div>
      
      <Contact />
      
      <div className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('contact.extra.availability.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400">{t('contact.extra.availability.desc')}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t('contact.extra.response.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400">{t('contact.extra.response.desc')}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t('contact.extra.socials.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400">{t('contact.extra.socials.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
