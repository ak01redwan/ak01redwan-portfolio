import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Twitter, Globe, Code2, Terminal, PenTool, Box, Image, Dribbble, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
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
    { icon: Mail, href: 'mailto:ak01redwan@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+967776248526', label: 'Phone' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-semibold mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t('hero.tag')}
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              {t('hero.name').split(' ').slice(0, 2).join(' ')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">
                {t('hero.name').split(' ').slice(2).join(' ')}
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
              {t('hero.desc')}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold transition-all flex items-center gap-2 group shadow-lg shadow-emerald-500/20"
              >
                {t('hero.viewProjects')}
                <ArrowRight size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl font-semibold transition-all"
              >
                {t('hero.contactMe')}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {socials.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-500 transition-colors p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                  title={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/ak01redwan/800/800" 
                alt={t('hero.name')} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500 rounded-2xl -z-10 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-full -z-10 opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
