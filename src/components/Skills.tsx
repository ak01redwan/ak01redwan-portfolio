import { motion } from 'motion/react';
import { Server, Layout, Database, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();

  const skillGroups = [
    {
      title: t('skills.categories.backend'),
      icon: <Server className="text-emerald-500" />,
      skills: ['Django', 'Laravel', '.NET', 'Node.js', 'NestJS', 'REST APIs', 'Microservices'],
    },
    {
      title: t('skills.categories.frontend'),
      icon: <Layout className="text-blue-500" />,
      skills: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      title: t('skills.categories.databases'),
      icon: <Database className="text-purple-500" />,
      skills: ['MySQL', 'PostgreSQL', 'SQL databases', 'Database optimization'],
    },
    {
      title: t('skills.categories.devops'),
      icon: <Terminal className="text-orange-500" />,
      skills: ['Git', 'Linux', 'Windows', 'API integrations', 'Payment gateways', 'Cloud hosting'],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">{t('skills.tag')}</h2>
          <h3 className="text-4xl font-display font-bold">{t('skills.title')}</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              className="p-8 bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-emerald-500/30 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <h4 className="text-xl font-bold mb-6">{group.title}</h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-sm rounded-lg border border-slate-100 dark:border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
