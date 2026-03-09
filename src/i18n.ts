import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact',
        blog: 'Blog'
      },
      hero: {
        tag: 'Full Stack Software Developer',
        title: 'Building Scalable Digital Systems',
        name: 'Abdulrahman Khalid Abdullah Redhwan',
        desc: 'Senior Full Stack Developer and Systems Architect with 10+ years of experience specializing in backend architecture, high-performance APIs, and scalable web applications.',
        viewProjects: 'View Projects',
        contactMe: 'Contact Me'
      },
      about: {
        tag: 'About Me',
        title: 'Architecting robust systems for the modern web.',
        p1: 'I am Abdulrahman Khalid Abdullah Redhwan, a Full Stack Software Developer with more than 10 years of experience. I specialize primarily in backend development, system architecture, and building scalable web applications that stand the test of time.',
        p2: 'My expertise spans multiple programming languages and frameworks, with a proven track record of building modern web platforms, e-commerce systems, robust APIs, and microservices. I am deeply passionate about clean code, design patterns, performance optimization, and Big O analysis.',
        stats: {
          years: 'Years Experience',
          projects: 'Projects Completed',
          clients: 'Happy Clients',
          code: 'Lines of Code'
        },
        features: {
          f1: 'System Architecture',
          f2: 'Backend Excellence',
          f3: 'E-commerce Solutions',
          f4: 'Performance Tuning'
        },
        philosophy: {
          title: 'My Philosophy',
          p1: 'I believe that great software is built on a foundation of maintainability and scalability. My approach focuses on performance optimization and the implementation of robust design patterns to solve complex architectural challenges.',
          p2: 'Whether it\'s transitioning legacy systems to modern architectures or building microservices from scratch, I prioritize clean code and system resilience to ensure long-term success.'
        },
        values: {
          title: 'Core Values',
          v1: 'Scalability by Design',
          v2: 'Clean Code Standards',
          v3: 'Performance Optimization',
          v4: 'Architectural Integrity',
          v5: 'Continuous Innovation'
        }
      },
      skills: {
        tag: 'Expertise',
        title: 'Technical Skillset',
        categories: {
          backend: 'Backend & Architecture',
          frontend: 'Frontend Development',
          databases: 'Databases & Optimization',
          devops: 'Tools & Infrastructure'
        }
      },
      projects: {
        tag: 'Portfolio',
        title: 'Featured Projects',
        desc: 'A showcase of my work in building scalable applications, e-commerce integrations, and specialized web tools.',
        viewAll: 'View All Projects',
        more: {
          title: 'Looking for more?',
          desc: 'I have worked on numerous software systems including desktop applications, AI-powered tools, and complex CMS platforms. Let\'s discuss how my experience can help your project.',
          github: 'Visit My GitHub'
        },
        items: {
          ecommerce: {
            title: 'nopCommerce Integrations',
            desc: 'Building custom payment and shipping integrations for nopCommerce and Smartstore platforms.'
          },
          ai: {
            title: 'AI Background Remover',
            desc: 'Web application built with Python, Flask, and rembg for automatic image background removal.'
          },
          university: {
            title: 'University CMS Systems',
            desc: 'Architected and built the Ahgaff University website using .NET/Umbraco, later transitioned to Python/Django.'
          },
          microservices: {
            title: 'SrmedEco Platform',
            desc: 'A microservices-based e-commerce system providing digital solutions and complex integrations.'
          }
        }
      },
      experience: {
        tag: 'Journey',
        title: 'Professional Experience',
        items: {
          exp1: {
            company: 'Madboot Nova',
            role: 'Senior Software Engineer',
            period: 'Present',
            desc: 'Providing software systems, hosting services, and e-commerce solutions. Leading web development and architectural design for diverse client needs.'
          },
          exp2: {
            company: 'SrmedEco',
            role: 'Full Stack Developer / Architect',
            period: '2018 - 2022',
            desc: 'Developed a microservices-based e-commerce platform. Focused on digital solutions, API integrations, and system scalability.'
          },
          exp3: {
            company: 'Ahgaff University',
            role: 'Lead Web Developer',
            period: '2014 - 2018',
            desc: 'Built the university website using .NET and Umbraco. Later led the transition to a modern system using Python and Django.'
          },
          exp4: {
            company: 'Freelance / Consulting',
            role: 'Software Developer',
            period: '2012 - 2014',
            desc: 'Worked on various web applications, custom plugins for payment/shipping providers, and desktop applications.'
          }
        }
      },
      contact: {
        tag: 'Contact',
        title: 'Let\'s build something scalable together.',
        desc: 'I am available for senior-level roles, architectural consulting, and high-impact software projects.',
        info: {
          email: 'Email Me',
          phone: 'Call Me',
          location: 'Location'
        },
        form: {
          name: 'Full Name',
          email: 'Email Address',
          subject: 'Subject',
          message: 'Message',
          placeholder: {
            name: 'Abdulrahman Redhwan',
            email: 'ak01redwan@gmail.com',
            subject: 'Project Inquiry',
            message: 'Tell me about your project needs...'
          },
          send: 'Send Message'
        },
        extra: {
          availability: {
            title: 'Availability',
            desc: 'Open to senior backend-focused roles and system architecture consulting.'
          },
          response: {
            title: 'Response Time',
            desc: 'I typically respond within 24 hours.'
          },
          socials: {
            title: 'Socials',
            desc: 'Connect with me on professional and developer platforms.'
          }
        }
      },
      blog: {
        title: 'Insights & Articles',
        desc: 'Thoughts on software engineering, architecture, and technology.',
        readMore: 'Read More',
        backToBlog: 'Back to Blog',
        sharePost: 'Share this post',
        posts: {
          p1: {
            title: 'Scaling E-commerce with nopCommerce Integrations',
            excerpt: 'Exploring best practices for building custom payment and shipping integrations...',
            category: 'E-commerce'
          },
          p2: {
            title: 'Modernizing University Systems: .NET to Django',
            excerpt: 'A case study on transitioning large-scale CMS systems to modern architectures...',
            category: 'Architecture'
          },
          p3: {
            title: 'Microservices Architecture for Scalable Platforms',
            excerpt: 'Deep dive into building resilient and maintainable microservices systems...',
            category: 'Backend'
          }
        }
      },
      footer: {
        rights: 'All rights reserved.'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        about: 'عني',
        projects: 'المشاريع',
        contact: 'اتصل بي',
        blog: 'المدونة'
      },
      hero: {
        tag: 'مطور برمجيات متكامل',
        title: 'بناء أنظمة رقمية قابلة للتوسع',
        name: 'عبدالرحمن خالد عبدالله رضوان',
        desc: 'مطور برمجيات متكامل أول ومهندس أنظمة مع خبرة تزيد عن 10 سنوات متخصص في هندسة الأنظمة الخلفية، وواجهات البرمجة عالية الأداء، وتطبيقات الويب القابلة للتوسع.',
        viewProjects: 'عرض المشاريع',
        contactMe: 'اتصل بي'
      },
      about: {
        tag: 'من أنا',
        title: 'هندسة أنظمة قوية للويب الحديث.',
        p1: 'أنا عبدالرحمن خالد عبدالله رضوان، مطور برمجيات متكامل مع خبرة تزيد عن 10 سنوات. أتخصص بشكل أساسي في تطوير الأنظمة الخلفية، وهندسة الأنظمة، وبناء تطبيقات الويب القابلة للتوسع التي تصمد أمام اختبار الزمن.',
        p2: 'تمتد خبرتي عبر لغات برمجة وأطر عمل متعددة، مع سجل حافل في بناء منصات الويب الحديثة، وأنظمة التجارة الإلكترونية، وواجهات البرمجة القوية، والخدمات المصغرة. أنا شغوف بالكود النظيف، وأنماط التصميم، وتحسين الأداء، وتحليل Big O.',
        stats: {
          years: 'سنوات الخبرة',
          projects: 'مشاريع مكتملة',
          clients: 'عملاء سعداء',
          code: 'أسطر برمجية'
        },
        features: {
          f1: 'هندسة الأنظمة',
          f2: 'التميز في الأنظمة الخلفية',
          f3: 'حلول التجارة الإلكترونية',
          f4: 'ضبط الأداء'
        },
        philosophy: {
          title: 'فلسفتي',
          p1: 'أعتقد أن البرمجيات العظيمة تُبنى على أساس من القابلية للصيانة والتوسع. يركز نهجي على تحسين الأداء وتنفيذ أنماط تصميم قوية لحل التحديات المعمارية المعقدة.',
          p2: 'سواء كان الأمر يتعلق بنقل الأنظمة القديمة إلى معماريات حديثة أو بناء خدمات مصغرة من الصفر، فإنني أعطي الأولوية للكود النظيف ومرونة النظام لضمان النجاح على المدى الطويل.'
        },
        values: {
          title: 'القيم الجوهرية',
          v1: 'القابلية للتوسع حسب التصميم',
          v2: 'معايير الكود النظيف',
          v3: 'تحسين الأداء',
          v4: 'النزاهة المعمارية',
          v5: 'الابتكار المستمر'
        }
      },
      skills: {
        tag: 'الخبرات',
        title: 'المهارات التقنية',
        categories: {
          backend: 'الأنظمة الخلفية والمعمارية',
          frontend: 'تطوير الأنظمة الأمامية',
          databases: 'قواعد البيانات والتحسين',
          devops: 'الأدوات والبنية التحتية'
        }
      },
      projects: {
        tag: 'أعمالي',
        title: 'المشاريع المميزة',
        desc: 'عرض لأعمالي في بناء التطبيقات القابلة للتوسع، وتكاملات التجارة الإلكترونية، وأدوات الويب المتخصصة.',
        viewAll: 'عرض جميع المشاريع',
        more: {
          title: 'هل تبحث عن المزيد؟',
          desc: 'لقد عملت على العديد من أنظمة البرمجيات بما في ذلك تطبيقات سطح المكتب، والأدوات المدعومة بالذكاء الاصطناعي، ومنصات إدارة المحتوى المعقدة. دعنا نناقش كيف يمكن لخبرتي أن تساعد مشروعك.',
          github: 'قم بزيارة GitHub الخاص بي'
        },
        items: {
          ecommerce: {
            title: 'تكاملات nopCommerce',
            desc: 'بناء تكاملات دفع وشحن مخصصة لمنصات nopCommerce و Smartstore.'
          },
          ai: {
            title: 'مزيل خلفية الصور بالذكاء الاصطناعي',
            desc: 'تطبيق ويب مبني باستخدام Python و Flask و rembg لإزالة خلفية الصور تلقائياً.'
          },
          university: {
            title: 'أنظمة إدارة محتوى الجامعات',
            desc: 'هندسة وبناء موقع جامعة الأحقاف باستخدام .NET/Umbraco، وتم نقله لاحقاً إلى نظام حديث باستخدام Python/Django.'
          },
          microservices: {
            title: 'منصة SrmedEco',
            desc: 'نظام تجارة إلكترونية يعتمد على الخدمات المصغرة ويوفر حلولاً رقمية وتكاملات معقدة.'
          }
        }
      },
      experience: {
        tag: 'مسيرتي',
        title: 'الخبرة العملية',
        items: {
          exp1: {
            company: 'Madboot Nova',
            role: 'مهندس برمجيات أول',
            period: 'الحاضر',
            desc: 'توفير أنظمة البرمجيات، وخدمات الاستضافة، وحلول التجارة الإلكترونية. قيادة تطوير الويب والتصميم المعماري لاحتياجات العملاء المتنوعة.'
          },
          exp2: {
            company: 'SrmedEco',
            role: 'مطور متكامل / مهندس أنظمة',
            period: '2018 - 2022',
            desc: 'تطوير منصة تجارة إلكترونية تعتمد على الخدمات المصغرة. التركيز على الحلول الرقمية، وتكاملات واجهة البرمجة، وقابلية توسع النظام.'
          },
          exp3: {
            company: 'جامعة الأحقاف',
            role: 'مطور ويب رئيسي',
            period: '2014 - 2018',
            desc: 'بناء موقع الجامعة باستخدام .NET و Umbraco. قاد لاحقاً عملية الانتقال إلى نظام حديث باستخدام Python و Django.'
          },
          exp4: {
            company: 'عمل حر / استشارات',
            role: 'مطور برمجيات',
            period: '2012 - 2014',
            desc: 'العمل على تطبيقات ويب متنوعة، وإضافات مخصصة لمزودي الدفع والشحن، وتطبيقات سطح المكتب.'
          }
        }
      },
      contact: {
        tag: 'اتصل بي',
        title: 'لنقم ببناء شيء قابل للتوسع معاً.',
        desc: 'أنا متاح للأدوار رفيعة المستوى، والاستشارات المعمارية، ومشاريع البرمجيات عالية التأثير.',
        info: {
          email: 'راسلني',
          phone: 'اتصل بي',
          location: 'الموقع'
        },
        form: {
          name: 'الاسم الكامل',
          email: 'البريد الإلكتروني',
          subject: 'الموضوع',
          message: 'الرسالة',
          placeholder: {
            name: 'عبدالرحمن رضوان',
            email: 'ak01redwan@gmail.com',
            subject: 'استفسار عن مشروع',
            message: 'أخبرني عن احتياجات مشروعك...'
          },
          send: 'إرسال الرسالة'
        },
        extra: {
          availability: {
            title: 'التوفر',
            desc: 'متاح حالياً لأدوار الأنظمة الخلفية رفيعة المستوى واستشارات هندسة الأنظمة.'
          },
          response: {
            title: 'وقت الاستجابة',
            desc: 'عادة ما أرد في غضون 24 ساعة.'
          },
          socials: {
            title: 'التواصل الاجتماعي',
            desc: 'تواصل معي على المنصات المهنية والبرمجية.'
          }
        }
      },
      blog: {
        title: 'رؤى ومقالات',
        desc: 'أفكار حول هندسة البرمجيات والمعمارية والتكنولوجيا.',
        readMore: 'اقرأ المزيد',
        backToBlog: 'العودة للمدونة',
        sharePost: 'شارك هذا المقال',
        posts: {
          p1: {
            title: 'توسيع التجارة الإلكترونية مع تكاملات nopCommerce',
            excerpt: 'استكشاف أفضل الممارسات لبناء تكاملات دفع وشحن مخصصة...',
            category: 'التجارة الإلكترونية'
          },
          p2: {
            title: 'تحديث أنظمة الجامعات: من .NET إلى Django',
            excerpt: 'دراسة حالة حول نقل أنظمة إدارة المحتوى واسعة النطاق إلى معماريات حديثة...',
            category: 'المعمارية'
          },
          p3: {
            title: 'معمارية الخدمات المصغرة للمنصات القابلة للتوسع',
            excerpt: 'غوص عميق في بناء أنظمة خدمات مصغرة مرنة وقابلة للصيانة...',
            category: 'الأنظمة الخلفية'
          }
        }
      },
      footer: {
        rights: 'جميع الحقوق محفوظة.'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
