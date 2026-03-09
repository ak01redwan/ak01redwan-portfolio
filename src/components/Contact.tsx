import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Terminal, Code2, PenTool, Box, Image, Dribbble } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  const socials = [
    { icon: Github, href: 'https://github.com/ak01redwan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ak01redwan', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/ak01redwan', label: 'X' },
    { icon: Terminal, href: 'https://stackoverflow.com/users/ak01redwan', label: 'Stack Overflow' },
    { icon: Code2, href: 'https://dev.to/ak01redwan', label: 'Dev.to' },
    { icon: PenTool, href: 'https://medium.com/@ak01redwan', label: 'Medium' },
    { icon: Box, href: 'https://codepen.io/ak01redwan', label: 'CodePen' },
    { icon: Image, href: 'https://www.behance.net/ak01redwan', label: 'Behance' },
    { icon: Dribbble, href: 'https://dribbble.com/ak01redwan', label: 'Dribbble' },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">{t('contact.tag')}</h2>
            <h3 className="text-4xl font-display font-bold mb-8">{t('contact.title')}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-md leading-relaxed">
              {t('contact.desc')}
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-950 flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-800 group-hover:border-emerald-500 transition-colors">
                  <Mail className="text-emerald-500" size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{t('contact.info.email')}</p>
                  <p className="text-lg font-bold">ak01redwan@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-950 flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-800 group-hover:border-emerald-500 transition-colors">
                  <Phone className="text-emerald-500" size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{t('contact.info.phone')}</p>
                  <a href="tel:+967776248526" className="text-lg font-bold hover:text-emerald-500 transition-colors">+967 776 248 526</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-950 flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-800 group-hover:border-emerald-500 transition-colors">
                  <MapPin className="text-emerald-500" size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{t('contact.info.location')}</p>
                  <p className="text-lg font-bold">Yemen</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">{t('contact.extra.socials.title')}</h4>
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white dark:bg-slate-950 flex items-center justify-center border border-slate-100 dark:border-slate-800 text-slate-400 hover:text-emerald-500 hover:border-emerald-500 transition-all shadow-sm"
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-slate-950 p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    placeholder={t('contact.form.placeholder.name')}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    placeholder={t('contact.form.placeholder.email')}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">{t('contact.form.subject')}</label>
                <input 
                  type="text" 
                  placeholder={t('contact.form.placeholder.subject')}
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">{t('contact.form.message')}</label>
                <textarea 
                  rows={5}
                  placeholder={t('contact.form.placeholder.message')}
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-emerald-500/20">
                {t('contact.form.send')}
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
