import { Github, Linkedin, Twitter, ArrowUp, Terminal, Code2, PenTool, Box, Image, Dribbble, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    { icon: Phone, href: 'tel:+967776248526', label: 'Phone' },
  ];

  return (
    <footer className="py-12 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#" className="text-xl font-display font-bold tracking-tighter">
              AK01<span className="text-emerald-500">.</span>REDWAN
            </a>
            <p className="text-sm text-slate-500 mt-2">
              © {new Date().getFullYear()} ak01redwan. {t('footer.rights')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4">
            {socials.map((social) => (
              <a 
                key={social.label}
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-500 transition-colors"
                title={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-50 dark:bg-slate-900 hover:bg-emerald-500 hover:text-white transition-all group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
