export interface CaseStudy {
  slug: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  category: 'Full-Stack' | 'Hardware & Automation' | 'E-Commerce' | 'Enterprise Systems';
  categoryAr: string;
  role: string;
  roleAr: string;
  period: string;
  image: string;
  featured: boolean;
  summary: string;
  summaryAr: string;
  problem: string;
  problemAr: string;
  approach: string;
  approachAr: string;
  architecture: {
    description: string;
    descriptionAr: string;
    highlights: string[];
    highlightsAr: string[];
  };
  measurableOutcomes: {
    metric: string;
    metricAr: string;
    label: string;
    labelAr: string;
  }[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  titleAr: string;
  icon: string;
  description: string;
  descriptionAr: string;
  skills: {
    name: string;
    level: string; // 'Expert' | 'Advanced' | 'Proficient'
    context?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyAr: string;
  role: string;
  roleAr: string;
  period: string;
  periodAr: string;
  location: string;
  locationAr: string;
  description: string[];
  descriptionAr: string[];
  keyWins: string[];
  keyWinsAr: string[];
  technologies: string[];
}

export interface SocialProfile {
  platform: string;
  url: string;
  handle: string;
  icon: string;
}

export const PERSONAL_INFO = {
  fullName: 'Abdulrahman Khalid Abdullah Redhwan',
  fullNameAr: 'عبدالرحمن خالد عبدالله رضوان',
  shortName: 'Abdulrahman Redhwan',
  username: 'ak01redwan',
  title: 'Full-Stack Software Engineer & Technical Lead',
  titleAr: 'مهندس برمجيات شامل وقائد تقني',
  agency: 'Madboot Nova',
  agencyUrl: 'https://madbootnova.com',
  location: 'Al-Mukalla, Hadhramaut, Yemen',
  locationAr: 'المكلا، حضرموت، اليمن',
  experienceYears: '5+',
  emails: ['ak01redwan@gmail.com', 'ak01redwan@madbootnova.com'],
  phones: ['+967 776 716 697', '+967 776 248 526'],
  github: 'https://github.com/ak01redwan',
  education: {
    degree: 'B.Sc. Computer Science / Computer Information Systems',
    degreeAr: 'بكالوريوس علوم الحاسوب / نظم المعلومات الحاسوبية',
    institution: 'Al-Ahgaff University',
    institutionAr: 'جامعة الأحقاف',
    period: '2019 – 2023',
    gpa: 'Excellent with Honors'
  },
  languages: [
    { name: 'Arabic', nameAr: 'العربية', level: 'Native', levelAr: 'اللغة الأم' },
    { name: 'English', nameAr: 'الإنجليزية', level: 'Fluent / Professional', levelAr: 'طلاقة واحترافية' }
  ],
  differentiator: {
    headline: 'Bridging High-Throughput Software Architecture with Physical Hardware Engineering',
    headlineAr: 'الجمع بين بنية البرمجيات فائقة الأداء وهندسة الأجهزة المادية والآلات',
    narrative: 'I am a rare full-stack engineer who also designs and fabricates physical machines. I independently built a precision 3-axis CNC milling machine powered by G-Code/M-Code, Arduino integration, and GRBL/Marlin firmware. This dual mastery in software distributed systems and electro-mechanical hardware gives me an unmatched edge in solving complex engineering challenges.',
    narrativeAr: 'أنا مهندس برمجيات شامل نادر يجمع بين بناء المنظومات الرقمية وتصميم وتصنيع الآلات الفيزيائية؛ حيث قمت بتصميم وبناء آلة CNC ثلاثية المحاور تعمل بأكواد G-Code وM-Code ومتحكمات Arduino والبرمجيات المضمنة GRBL وMarlin. هذا التناغم بين هندسة البرمجيات والعتاد المادي يمنحني قدرة فائقة على حل التحديات الهندسية المعقدة من جذورها.'
  }
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'bandwal-academy',
    title: 'Bandwal Academy E-Learning Ecosystem',
    titleAr: 'منصة أكاديمية بندوال للتعليم الإلكتروني',
    subtitle: 'Enterprise E-Learning Platform with Automated Multi-Tier CI/CD & HLS Streaming',
    subtitleAr: 'منصة تعليم إلكتروني متكاملة مع خطوط نشر مؤتمتة وبث فيديو متكيف HLS',
    category: 'Full-Stack',
    categoryAr: 'تطوير شامل وقيادة تقنية',
    role: 'Full-Stack Developer & Technical Lead',
    roleAr: 'مطور شامل وقائد تقني',
    period: '2024 – 2025',
    image: '/images/bandwal-academy.svg',
    featured: true,
    summary: 'Architected and spearheaded the complete digital transformation of Bandwal Academy using Laravel 12 on the backend and Nuxt.js 4 (SSR) on the frontend. Engineered secure course access, interactive examinations, payment gateway integrations, and automated GitHub Actions CI/CD.',
    summaryAr: 'تصميم وبناء البنية التحتية لمنصة بندوال التعليمية باستخدام Laravel 12 وNuxt.js 4 SSR مع نظام امتحانات ذكي، بوابات دفع، وبث فيديو متكيف وخطوط نشر مؤتمتة بالكامل عبر GitHub Actions.',
    problem: 'The client faced slow manual deployments taking hours or days with frequent configuration mistakes. Furthermore, standard video hosting was vulnerable to unauthorized downloads, and students in low-bandwidth regions suffered severe buffering issues.',
    problemAr: 'واجه العميل صعوبات في عمليات النشر اليدوية البطيئة التي كانت تستغرق ساعات وأياماً مع أخطاء متكررة، بالإضافة إلى مشاكل تسريب وحماية الفيديوهات التعليمية وانقطاع البث للطلاب في المناطق ذات سرعات الإنترنت الضعيفة.',
    approach: 'Instituted a decoupled architecture with Laravel 12 providing robust Service-Repository patterns, policy-based authorization, and RESTful API Resources. On the client, built an ultra-fast Nuxt.js 4 application with server-side rendering (SSR), full bidirectional i18n (Arabic RTL / English LTR), and integrated HLS adaptive-bitrate video streaming.',
    approachAr: 'تطبيق بنية معمارية منفصلة قائمة على Laravel 12 مع طبقات الخدمة والسياسات الأمنية وموارد RESTful API، وتطوير واجهة مستخدم سريعة وفائقة الأداء عبر Nuxt.js 4 SSR تدعم ثنائية اللغة والاتجاه بالكامل وبث الفيديو المتكيف.',
    architecture: {
      description: 'Decoupled API-first architecture running automated Docker containers with orchestrated CI/CD workflows and Redis caching.',
      descriptionAr: 'معمارية معتمدة على الـ APIs المنفصلة وحاويات Docker وخطوط أنابيب CI/CD المؤتمتة وتخزين مؤقت عالي الكفاءة عبر Redis.',
      highlights: [
        'Laravel 12 API with strict policy-driven authentication and resource transformations',
        'Nuxt.js 4 SSR with auto-caching, route pre-rendering, and seamless RTL/LTR switching',
        'HLS Video Streaming with signed tokens preventing unauthorized media ripping',
        'Automated CI/CD pipeline targeting Staging and Production with rollback safeguards',
        'Automated examination engine with instant grading, randomized question banks, and certificate generator'
      ],
      highlightsAr: [
        'واجهة برمجية عبر Laravel 12 مع نظام سياسات أمني صارم وتحويل دقيق للبيانات',
        'تطبيق Nuxt.js 4 SSR مع توليد سريع للمسارات وتناغم كامل بين العربية والإنجليزية',
        'بث فيديو HLS مع تشفير وتوقيع رقمي يمنع القرصنة وتنزيل المحاضرات بدون إذن',
        'خطوط نشر مؤتمتة GitHub Actions لبيئات التجربة والإنتاج مع آليات استعادة فورية',
        'محرك امتحانات مؤتمت بالكامل مع تصحيح فوري وتوليد شهادات رقمية موثقة'
      ]
    },
    measurableOutcomes: [
      {
        metric: '< 3 Min',
        metricAr: '< ٣ دقائق',
        label: 'Automated CI/CD Deployment (Down from hours/days)',
        labelAr: 'زمن النشر المؤتمت الكامل (انخفاضاً من أيام وساعات)'
      },
      {
        metric: '99.9%',
        metricAr: '٩٩.٩٪',
        label: 'Video Delivery Uptime & Zero Piracy Leakage',
        labelAr: 'جاهزية بث الفيديو مع حماية تامة من القرصنة'
      },
      {
        metric: '98/100',
        metricAr: '٩٨/١٠٠',
        label: 'Lighthouse Performance & SEO Score on Nuxt SSR',
        labelAr: 'تقييم الأداء ومحركات البحث على Nuxt SSR'
      },
      {
        metric: '100%',
        metricAr: '١٠٠٪',
        label: 'Knowledge Transfer & Team Architecture Mentorship',
        labelAr: 'نقل المعرفة والخبرة المعمارية وتدريب الفريق'
      }
    ],
    technologies: ['Laravel 12', 'Nuxt.js 4', 'Vue.js 3', 'GitHub Actions', 'HLS Streaming', 'Docker', 'Redis', 'Tailwind CSS', 'TypeScript', 'RESTful API'],
    githubUrl: 'https://github.com/ak01redwan',
    liveUrl: 'https://madbootnova.com'
  },
  {
    slug: 'cnc-machine-automation',
    title: 'Custom 3-Axis CNC Machine (Hardware + Firmware + G-Code)',
    titleAr: 'آلة CNC مخصصة ثلاثية المحاور (عتاد مادي + برمجيات مضمنة)',
    subtitle: 'Electro-Mechanical Design, Microstepping Calibration, and G-Code Machine Automation',
    subtitleAr: 'تصميم كهروميكانيكي ومعايرة المحركات الخطية والتحكم الآلي بأكواد G-Code',
    category: 'Hardware & Automation',
    categoryAr: 'عتاد مادي وأتمتة صناعية',
    role: 'Hardware Engineer & Embedded Systems Developer',
    roleAr: 'مهندس عتاد ومطور أنظمة مضمنة',
    period: '2024',
    image: '/images/cnc-machine.svg',
    featured: true,
    summary: 'Independently designed, assembled, and calibrated a fully functional 3-axis CNC milling and cutting machine. Engineered the electrical circuitry, stepper motor drivers, Arduino microcontrollers, and flashed custom GRBL/Marlin firmware for precision G-Code toolpath execution.',
    summaryAr: 'تصميم وتجميع ومعايرة آلة CNC ثلاثية المحاور مخصصة للقطع والنقش الآلي، مع بناء الدوائر الكهربائية ومحركات الخطوة ودمج لوحات Arduino وبرمجة وتعديل GRBL وMarlin لتنفيذ مسارات G-Code بدقة متناهية.',
    problem: 'Off-the-shelf industrial CNC machines in the local region are prohibitively expensive and lack modular customizability for specialized fabrication tasks, requiring a custom-engineered, cost-effective electro-mechanical solution.',
    problemAr: 'ارتفاع تكلفة آلات الـ CNC الصناعية المستوردة وانعدام مرونتها للتعديل المخصص، مما تطلب ابتكار وتصنيع آلة محلية متكاملة تجمع بين القوة والدقة الهندسية والتكلفة الاقتصادية.',
    approach: 'Designed a rigid gantry structure with dual Y-axis lead screws, calibrated NEMA stepper motors with A4988/DRV8825 drivers for 1/16th microstepping, integrated an Arduino ATmega core, configured spindle relay controls, and tuned acceleration/feed-rate parameters in Marlin/GRBL firmware.',
    approachAr: 'تصميم هيكل ميكانيكي متين يعتمد على براغي الحركة الدقيقة ومحركات NEMA مع دوائر قيادة متقدمة للتحكم في الخطوات الدقيقة (Microstepping)، ودمج معالجات Arduino مع ضبط دقيق لمعدلات التسارع والسرعة في برمجيات GRBL/Marlin.',
    architecture: {
      description: 'Hybrid electro-mechanical control architecture coordinating high-level G-Code commands into real-time pulse-width modulated motor steps.',
      descriptionAr: 'معمارية تحكم كهروميكانيكية متطورة تترجم تعليمات G-Code/M-Code إلى نبضات كهربائية فائقة الدقة عبر المحاور الثلاثية.',
      highlights: [
        'Custom 3-Axis Cartesian coordinate mechanics with dual-lead precision screws',
        'Arduino-based central control unit running tuned GRBL 1.1 firmware',
        'Hardware limit switches and emergency e-stop circuitry for failsafe operation',
        'Real-time serial stream parsing of G-Code/M-Code toolpaths with feed hold and spindle PWM',
        'Sub-millimeter backlash compensation and stepper microstepping calibration'
      ],
      highlightsAr: [
        'نظام ميكانيكي كارتيزي ثلاثي المحاور مع براغي توجيه مزدوجة عالية الصلابة',
        'وحدة تحكم مركزية Arduino تعمل بإصدار مخصص من GRBL 1.1',
        'مفاتيح نهاية شوط ودائرة توقف طوارئ فيزيائية لحماية الآلة والمشغل',
        'معالجة متزامنة لأكواد G-Code وM-Code مع التحكم في سرعة دوران المحرك عبر PWM',
        'معايرة دقيقة لحساب تعويض الارتداد الحركي وضبط دقة الخطوات الدقيقة'
      ]
    },
    measurableOutcomes: [
      {
        metric: '0.05 mm',
        metricAr: '٠.٠٥ ملم',
        label: 'Repeatable Axis Positioning Accuracy',
        labelAr: 'دقة تحديد المواقع وتكرار الحركة للمحاور'
      },
      {
        metric: '3-Axis',
        metricAr: '٣ محاور',
        label: 'Full Cartesian Motion Automation (X, Y, Z)',
        labelAr: 'أتمتة كاملة للحركة الفراغية (س، ص، ع)'
      },
      {
        metric: '100%',
        metricAr: '١٠٠٪',
        label: 'Autonomous Fabrication from CAM to Physical Part',
        labelAr: 'تنفيذ كامل من مرحلة التصميم الرقمي إلى القطعة المادية'
      },
      {
        metric: '12,000 RPM',
        metricAr: '١٢,٠٠٠ د/د',
        label: 'Variable Spindle Speed Control via Software',
        labelAr: 'تحكم برمجي متكيف في سرعة دوران المغزل'
      }
    ],
    technologies: ['Arduino', 'G-Code', 'M-Code', 'CNC GRBL', 'CNC Marlin', 'Embedded C++', 'Java Processing', 'Hardware Circuitry', 'Stepper Drivers', 'PWM Control'],
    githubUrl: 'https://github.com/ak01redwan'
  },
  {
    slug: 'ecommerce-dotnet',
    title: 'Enterprise .NET E-Commerce & Custom Integrations',
    titleAr: 'منصات تجارة إلكترونية متقدمة عبر .NET Core',
    subtitle: 'High-Throughput Digital Commerce Ecosystems (srmedeco.com & madbootnova.com)',
    subtitleAr: 'منظومات تجارة إلكترونية عالية الكفاءة مع بوابات دفع وربط لوجستي مخصص',
    category: 'E-Commerce',
    categoryAr: 'تجارة إلكترونية وحلول رقمية',
    role: 'Lead Full-Stack .NET Engineer',
    roleAr: 'مهندس برمجيات رئيسي .NET',
    period: '2023 – 2024',
    image: '/images/ecommerce-platform.svg',
    featured: true,
    summary: 'Engineered two comprehensive enterprise e-commerce platforms (srmedeco.com and madbootnova.com) utilizing .NET / .NET Core, SQL Server, and custom nopCommerce / Smartstore integrations with tailored payment gateways and shipping logistics.',
    summaryAr: 'تطوير وتشغيل منصتين للتجارة الإلكترونية (srmedeco.com و madbootnova.com) عبر .NET Core وSQL Server مع تطوير إضافات برمجية مخصصة لبوابات الدفع والشحن في nopCommerce وSmartstore.',
    problem: 'Standard e-commerce engines lacked regional payment gateway plugins, experienced sluggish checkout pages under concurrent traffic, and suffered from slow database queries on extensive catalog filters.',
    problemAr: 'افتقار الأنظمة الجاهزة لدعم بوابات الدفع الإقليمية وبطء صفحات إنهاء الطلب عند تزايد الزوار وضعف أداء استعلامات قواعد البيانات عند تصفية المنتجات الكثيرة.',
    approach: 'Developed custom C# plugins adhering to clean architecture, implemented multi-tiered caching in memory and Redis, tuned SQL Server clustered indexes, and built high-converting checkout user experiences.',
    approachAr: 'بناء إضافات برمجية بلغة C# وفق معايير Clean Architecture وتطبيق التخزين المؤقت متعدد المستويات وتحسين فهارس SQL Server لرفع سرعة الاستجابة إلى أقصى حد.',
    architecture: {
      description: 'High-performance .NET Core micro-modular architecture connected to optimized SQL Server database clusters with secure payment gateways.',
      descriptionAr: 'معمارية برمجية قياسية تعتمد على .NET Core وقواعد بيانات SQL Server مفهرسة بدقة مع ربط آمن ببوابات الدفع.',
      highlights: [
        'Custom nopCommerce & Smartstore C# plugin engineering for payment & shipping',
        'Database query tuning reducing complex catalog filter latency by 70%',
        'Secure multi-currency payment processing with asynchronous webhook confirmation',
        'Modular architecture facilitating zero-downtime plugin updates'
      ],
      highlightsAr: [
        'تطوير إضافات C# مخصصة لبوابات الدفع وشركات الشحن على nopCommerce وSmartstore',
        'تحسين استعلامات قواعد البيانات مما خفض زمن تصفية المنتجات بنسبة 70٪',
        'معالجة آمنة للمدفوعات متعددة العملات مع تأكيد فوري عبر الـ Webhooks',
        'معمارية برمجية مرنة تسمح بتحديث الإضافات دون توقف المتجر'
      ]
    },
    measurableOutcomes: [
      {
        metric: '< 120 ms',
        metricAr: '< ١٢٠ ملي ثانية',
        label: 'Catalog & Checkout Page Response Time',
        labelAr: 'زمن استجابة صفحات المنتجات وإنهاء الطلب'
      },
      {
        metric: '70%',
        metricAr: '٧٠٪',
        label: 'Database Query Latency Reduction',
        labelAr: 'انخفاض زمن استعلامات قواعد البيانات'
      },
      {
        metric: '100%',
        metricAr: '١٠٠٪',
        label: 'Transaction Security & PCI Compliance Readiness',
        labelAr: 'أمان المعاملات المالية وجهوزية المعايير المصرفية'
      }
    ],
    technologies: ['.NET / .NET Core', 'C#', 'SQL Server', 'nopCommerce', 'Smartstore', 'Redis', 'REST APIs', 'Payment Gateways'],
    githubUrl: 'https://github.com/ak01redwan',
    liveUrl: 'https://madbootnova.com'
  },
  {
    slug: 'university-cms-electron',
    title: 'University Student & Course Management System',
    titleAr: 'نظام إدارة الطلاب والمقررات الأكاديمية بالجامعة',
    subtitle: 'Cross-Platform Web & Desktop Administrative Portal (Al-Ahgaff University)',
    subtitleAr: 'بوابة إدارية مشتركة للويب وسطح المكتب لجامعة الأحقاف عبر .NET وElectron.Net',
    category: 'Enterprise Systems',
    categoryAr: 'أنظمة ومؤسسات تعليمية',
    role: 'Full-Stack Software Developer',
    roleAr: 'مطور برمجيات شامل',
    period: '2022 – 2023',
    image: '/images/university-cms.svg',
    featured: false,
    summary: 'Engineered a comprehensive university administrative management platform for the Hadhramaut Center at Al-Ahgaff University. Built as a cross-platform solution utilizing .NET Core and Electron.Net for unified web and desktop executive administration.',
    summaryAr: 'تطوير منظومة إدارية متكاملة لمركز حضرموت بجامعة الأحقاف لإدارة شؤون الطلاب والمقررات والجداول الأكاديمية، باستخدام .NET Core وElectron.Net لتوفير تطبيق ويب وتطبيق سطح مكتب موحد.',
    problem: 'University registrars had to manage thousands of students using fragmented spreadsheets and outdated legacy software that caused grade discrepancies and lacked centralized audit logs.',
    problemAr: 'اعتماد إدارة الجامعة على جداول بيانات متفرقة وبرامج قديمة أدى لبطء استخراج كشوفات الدرجات وغياب سجلات التدقيق والمتابعة المركزية.',
    approach: 'Consolidated academic data into a normalized SQL database, exposed secure role-based services in .NET, and wrapped the client interface in Electron.Net for native offline-capable desktop execution alongside web accessibility.',
    approachAr: 'توحيد البيانات الأكاديمية في قاعدة بيانات منظمة مع طبقة حماية وصلاحيات متعددة المستويات، وتوفير تجربة سطح مكتب سريعة عبر Electron.Net تعمل بالتوازي مع بوابة الويب.',
    architecture: {
      description: 'Multi-tier enterprise client-server system with offline data caching and cross-platform desktop compilation.',
      descriptionAr: 'نظام مؤسسي متعدد الطبقات يجمع بين خادم موحد وتطبيقات ويب وسطح مكتب مع مزامنة بيانات آمنة.',
      highlights: [
        'Unified C# / .NET backend serving both web browsers and desktop clients',
        'Electron.Net desktop package with native OS printing and PDF grade generation',
        'Fine-grained role-based access control (RBAC) for professors, deans, and students',
        'Automated GPA calculations and academic transcript verification'
      ],
      highlightsAr: [
        'خادم موحد بلغة C# و.NET يخدم متصفحات الويب وتطبيقات سطح المكتب في آن واحد',
        'تطبيق سطح مكتب Electron.Net يدعم الطباعة المباشرة وتوليد كشوفات الدرجات PDF',
        'نظام تحكم في الصلاحيات (RBAC) للأساتذة وعمداء الكليات وشؤون الطلاب',
        'حساب آلي للمعدلات التراكمية وتدقيق تاريخ السجل الأكاديمي'
      ]
    },
    measurableOutcomes: [
      {
        metric: '12,500+',
        metricAr: '١٢,٥٠٠+',
        label: 'Student Academic Records Centrally Managed',
        labelAr: 'سجل أكاديمي للطلاب يدار مركزياً'
      },
      {
        metric: '100%',
        metricAr: '١٠٠٪',
        label: 'Elimination of Manual Grade Discrepancies',
        labelAr: 'القضاء التام على أخطاء رصد الدرجات اليدوية'
      },
      {
        metric: 'Cross-Platform',
        metricAr: 'متعدد المنصات',
        label: 'Single Codebase for Web and Windows Desktop',
        labelAr: 'كود موحد لتطبيقات الويب وسطح المكتب'
      }
    ],
    technologies: ['.NET Core', 'C#', 'Electron.Net', 'SQL Server', 'Windows Forms', 'RESTful APIs', 'Reports & PDF Engine'],
    githubUrl: 'https://github.com/ak01redwan'
  },
  {
    slug: 'restaurant-management-novelsoft',
    title: 'Real-Time Restaurant Management & POS Suite',
    titleAr: 'منظومة إدارة المطاعم ونقاط البيع اللحظية',
    subtitle: 'High-Throughput Order Queue, Kitchen Display, and Inventory APIs (Novel Soft)',
    subtitleAr: 'واجهات برمجية فورية لإدارة الطاولات وشاشات المطبخ والمخزون في شركة نوفل سوفت',
    category: 'Enterprise Systems',
    categoryAr: 'أنظمة إدارة وأعمال',
    role: 'Software Developer',
    roleAr: 'مطور برمجيات',
    period: '2023 – 2024',
    image: '/images/restaurant-system.svg',
    featured: false,
    summary: 'Developed real-time RESTful APIs, kitchen order routing systems, and inventory tracking modules at Novel Soft Company utilizing Node.js, Express.js, SQL Server, and Docker containerization.',
    summaryAr: 'تطوير واجهات برمجة تطبيقات سريعة ونظام توجيه طلبات المطبخ وشاشات نقاط البيع وتتبع المخزون في شركة نوفل سوفت عبر Node.js وExpress وSQL Server وحاويات Docker.',
    problem: 'High peak-hour order volumes frequently led to kitchen ticket drops, inventory count desynchronization, and network timeouts during concurrent point-of-sale transactions.',
    problemAr: 'تزايد ضغط الطلبات في أوقات الذروة كان يؤدي إلى تأخر وصول تذاكر المطبخ وتعارض بيانات المخزون وبطء عمليات الدفع المتزامنة.',
    approach: 'Architected event-driven Express endpoints with clustered SQL Server transaction locks, lightweight JSON serialization, and Dockerized environments ensuring identical behavior across branch locations.',
    approachAr: 'بناء مسارات Express.js عالية الاستجابة مع معاملات SQL Server محكمة تمنع تعارض البيانات وتوفير بيئة Docker متطابقة لكافة فروع المطاعم.',
    architecture: {
      description: 'Micro-services POS engine running on Node.js and SQL Server with robust transaction isolation.',
      descriptionAr: 'محرك نقاط بيع معتمد على خدمات Node.js وقواعد بيانات SQL Server مع حماية فائقة للعمليات المالية.',
      highlights: [
        'Sub-50ms API endpoint latency under peak load conditions',
        'Real-time kitchen order dispatch and status synchronization',
        'Automated ingredient-level inventory decrementing on order placement',
        'Docker container deployment across multi-terminal setups'
      ],
      highlightsAr: [
        'سرعة استجابة فائقة للـ APIs بأقل من 50 ملي ثانية تحت أقصى ضغط تشغيلي',
        'توجيه فوري لطلبات المطبخ وتحديث مستمر لحالة التجهيز',
        'خصم آلي ومباشر للمخزون على مستوى المكونات عند إصدار الفواتير',
        'نشر موثوق عبر حاويات Docker لجميع الأجهزة ونقاط البيع'
      ]
    },
    measurableOutcomes: [
      {
        metric: '< 50 ms',
        metricAr: '< ٥٠ ملي ثانية',
        label: 'POS Transaction & Order Dispatch Latency',
        labelAr: 'زمن تنفيذ العمليات وتوجيه طلبات المطبخ'
      },
      {
        metric: '0%',
        metricAr: '٠٪',
        label: 'Order Packet Loss During Peak Rush Hours',
        labelAr: 'فقدان تذاكر الطلبات أثناء أوقات الذروة'
      },
      {
        metric: 'Dockerized',
        metricAr: 'حاويات Docker',
        label: 'Seamless Multi-Terminal Branch Deployments',
        labelAr: 'نشر فوري ومتطابق عبر جميع محطات الفروع'
      }
    ],
    technologies: ['Node.js', 'Express.js', 'SQL Server', 'Docker', 'RESTful APIs', 'Git', 'Swagger'],
    githubUrl: 'https://github.com/ak01redwan'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Core Languages',
    titleAr: 'لغات البرمجة الأساسية',
    icon: 'Code2',
    description: 'Multi-paradigm mastery across statically typed and dynamic languages.',
    descriptionAr: 'إتقان عميق للغات البرمجة الكائنية والديناميكية وهندسة النظم.',
    skills: [
      { name: 'TypeScript / JavaScript', level: 'Expert', context: 'ESNext, Node, Browser Runtimes' },
      { name: 'C# / .NET', level: 'Expert', context: '.NET Core, ASP.NET, Windows Runtimes' },
      { name: 'PHP', level: 'Expert', context: 'Laravel 12, Modern OOP, Architecture' },
      { name: 'SQL', level: 'Expert', context: 'SQL Server, PostgreSQL, MySQL' },
      { name: 'Python', level: 'Advanced', context: 'Django, Automation, AI Services' },
      { name: 'Java', level: 'Advanced', context: 'Enterprise OOP, Processing' },
      { name: 'C++', level: 'Advanced', context: 'Embedded Systems, Microcontrollers' },
      { name: 'G-Code & M-Code', level: 'Expert', context: 'CNC Motion Control & Automation' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Distributed Systems',
    titleAr: 'الأنظمة الخلفية والخدمات السحابية',
    icon: 'Server',
    description: 'Scalable service architectures, microservices, and enterprise API design.',
    descriptionAr: 'معمارية الخدمات الموزعة، الـ Microservices وتصميم الـ APIs المؤسسية.',
    skills: [
      { name: 'Laravel 12', level: 'Expert', context: 'Service layers, Policies, Telescope, Jobs' },
      { name: 'Node.js & Express.js', level: 'Expert', context: 'High-throughput async APIs' },
      { name: 'Nest.js', level: 'Advanced', context: 'Modular TypeScript microservices' },
      { name: '.NET / .NET Core', level: 'Expert', context: 'Clean architecture, Web APIs, nopCommerce' },
      { name: 'Django', level: 'Advanced', context: 'ORM modeling, REST Framework' },
      { name: 'RESTful API & Swagger', level: 'Expert', context: 'Contract-first OpenAPI schemas' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend & Modern SSR',
    titleAr: 'واجهات المستخدم والأداء العالي',
    icon: 'Layout',
    description: 'Ultra-fast server-rendered web applications with flawless accessibility and design.',
    descriptionAr: 'تطبيقات ويب فائقة السرعة مدعومة بـ SSR مع إمكانية وصول وتصميم رفيع.',
    skills: [
      { name: 'Next.js (App Router)', level: 'Expert', context: 'Server Components, SSG, SEO, Turbopack' },
      { name: 'Nuxt.js 4 & Vue.js 3', level: 'Expert', context: 'Composition API, SSR, Pinia, Nitro' },
      { name: 'React.js 19', level: 'Expert', context: 'Hooks, Concurrent rendering, State' },
      { name: 'Tailwind CSS v4', level: 'Expert', context: 'Design tokens, Responsive & RTL layouts' },
      { name: 'Framer Motion', level: 'Advanced', context: 'Physics-based micro-interactions' }
    ]
  },
  {
    id: 'hardware',
    title: 'Hardware & Embedded Systems',
    titleAr: 'العتاد المادي والأنظمة المضمنة',
    icon: 'Cpu',
    description: 'Unique capability bridging digital code with precision physical machines.',
    descriptionAr: 'قدرة استثنائية تجمع بين الكود البرمجي والتحكم الفيزيائي في الآلات الصناعية.',
    skills: [
      { name: 'CNC Machine Engineering', level: 'Expert', context: '3-Axis Mechanical & Electrical Design' },
      { name: 'Arduino Microcontrollers', level: 'Expert', context: 'ATmega, Sensor & Actuator circuits' },
      { name: 'CNC GRBL & Marlin', level: 'Expert', context: 'Firmware calibration & pulse timing' },
      { name: 'Stepper Motor Drivers', level: 'Expert', context: 'A4988/DRV8825 Microstepping tuning' },
      { name: 'Java Processing', level: 'Advanced', context: 'Machine Vision & Visual Telemetry' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Automated CI/CD',
    titleAr: 'عمليات التطوير والنشر المؤتمت',
    icon: 'GitBranch',
    description: 'Zero-downtime automated deployment pipelines and container orchestration.',
    descriptionAr: 'خطوط نشر مؤتمتة بدون انقطاع للخدمة وإدارة الحاويات السحابية.',
    skills: [
      { name: 'GitHub Actions', level: 'Expert', context: 'Multi-stage Staging & Production CI/CD' },
      { name: 'Docker & Compose', level: 'Advanced', context: 'Multi-container reproducible stacks' },
      { name: 'Git & Version Control', level: 'Expert', context: 'Trunk-based & GitFlow branching' },
      { name: 'Linux Server Admin', level: 'Advanced', context: 'Nginx reverse proxy, SSL, Security' },
      { name: 'Laravel Telescope', level: 'Expert', context: 'Deep query & performance profiling' }
    ]
  },
  {
    id: 'desktop',
    title: 'Desktop & Cross-Platform',
    titleAr: 'تطبيقات سطح المكتب والمنصات',
    icon: 'Monitor',
    description: 'Unified cross-platform desktop applications for Windows and Web.',
    descriptionAr: 'تطبيقات سطح مكتب متكاملة لأنظمة Windows والويب بكود موحد.',
    skills: [
      { name: 'Electron.Net', level: 'Expert', context: '.NET Core cross-platform desktop wrapper' },
      { name: 'Electron.js', level: 'Advanced', context: 'Node.js native desktop packaging' },
      { name: 'Windows Forms (WinForms)', level: 'Advanced', context: 'High-performance native utilities' },
      { name: 'React Native', level: 'Proficient', context: 'Mobile component architectures' }
    ]
  }
];

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'madboot-nova',
    company: 'Madboot Nova',
    companyAr: 'مادبوت نوفا (Madboot Nova)',
    role: 'Founder & Technical Lead',
    roleAr: 'المؤسس والقائد التقني',
    period: '2024 – Present',
    periodAr: '2024 – حتى الآن',
    location: 'Al-Mukalla, Yemen / Remote',
    locationAr: 'المكلا، اليمن / عن بعد',
    description: [
      'Founded and currently lead Madboot Nova, an elite software engineering agency delivering high-throughput web platforms, SaaS ecosystems, and enterprise architectures.',
      'Direct full-stack architecture choices across Laravel, .NET, Next.js, and Nuxt.js, conducting comprehensive code reviews and mentoring engineering teams.',
      'Spearheaded the flagship Bandwal Academy e-learning platform and enterprise .NET e-commerce implementations, reducing deployment overhead by over 90% via automated GitHub Actions CI/CD.'
    ],
    descriptionAr: [
      'تأسيس وقيادة مادبوت نوفا، وكالة برمجية متخصصة في هندسة وتطوير المنظومات الرقمية عالية الأداء والتجارة الإلكترونية والمنصات السحابية.',
      'تحديد وتوجيه الخيارات المعمارية عبر Laravel و.NET وNext.js وNuxt.js، وإجراء مراجعات الأكواد وتدريب وتطوير الكفاءات الهندسية.',
      'قيادة تطوير منصة أكاديمية بندوال التعليمية وحلول التجارة الإلكترونية، وتخفيض زمن النشر بنسبة تفوق 90٪ عبر خطوط CI/CD مؤتمتة بالكامل.'
    ],
    keyWins: [
      'Built automated CI/CD reducing deployments from days to under 3 minutes',
      'Engineered enterprise e-commerce platforms handling thousands of transactions',
      'Mentored engineering teams in modern Nuxt.js SSR and Clean Architecture'
    ],
    keyWinsAr: [
      'بناء خطوط نشر مؤتمتة خفضت وقت النشر من أيام إلى أقل من 3 دقائق',
      'هندسة منصات تجارة إلكترونية متطورة تدير آلاف العمليات المالية',
      'تدريب فرق العمل على معايير Nuxt.js SSR وClean Architecture'
    ],
    technologies: ['Laravel 12', 'Nuxt.js 4', 'Next.js 16', '.NET Core', 'Docker', 'GitHub Actions', 'SQL Server', 'Tailwind CSS']
  },
  {
    id: 'cnc-project',
    company: 'Hardware Innovation Lab',
    companyAr: 'مختبر الابتكار والعتاد المادي',
    role: 'Hardware Engineer & CNC Maker',
    roleAr: 'مهندس عتاد ومبتكر آلات CNC',
    period: '2024',
    periodAr: '2024',
    location: 'Al-Mukalla, Yemen',
    locationAr: 'المكلا، اليمن',
    description: [
      'Independently researched, fabricated, and calibrated a custom 3-axis CNC milling machine with Arduino, stepper drivers, and G-Code automation.',
      'Integrated GRBL/Marlin firmware with custom microstepping pulse calibration achieving 0.05mm positioning precision.',
      'Bridged software algorithms and real-time physical actuation, implementing software spindle PWM and hardware safety interlocks.'
    ],
    descriptionAr: [
      'البحث المستقل وتصميم وتصنيع آلة CNC ثلاثية المحاور مخصصة مع متحكمات Arduino ومحركات الخطوة وأكواد G-Code.',
      'برمجة ومعايرة أنظمة GRBL وMarlin والتحكم في النبضات الدقيقة لتحقيق دقة حركة تصل إلى 0.05 ملم.',
      'الربط الهندسي بين الخوارزميات البرمجية والحركة الميكانيكية اللحظية وتطبيق أنظمة الحماية والسلامة.'
    ],
    keyWins: [
      'Achieved 0.05mm precision across 3 Cartesian axes',
      'Engineered automated toolpath execution from digital CAD/CAM',
      'Complete hardware fabrication from raw mechanical & electronic components'
    ],
    keyWinsAr: [
      'تحقيق دقة متناهية 0.05 ملم عبر المحاور الكارتيزية الثلاثة',
      'أتمتة كاملة لتنفيذ مسارات الأدوات من التصميم الرقمي إلى القطعة المصنعة',
      'تصنيع وتجميع متكامل للعتاد من المكونات الميكانيكية والإلكترونية'
    ],
    technologies: ['Arduino', 'G-Code', 'M-Code', 'GRBL', 'Marlin', 'Embedded C++', 'Processing', 'Hardware Schematics']
  },
  {
    id: 'novel-soft',
    company: 'Novel Soft Company',
    companyAr: 'شركة نوفل سوفت (Novel Soft)',
    role: 'Software Developer',
    roleAr: 'مطور برمجيات',
    period: '2023 – 2024',
    periodAr: '2023 – 2024',
    location: 'Al-Mukalla, Yemen',
    locationAr: 'المكلا، اليمن',
    description: [
      'Developed high-performance RESTful APIs and backend services using Node.js, Express.js, and SQL Server for commercial enterprise platforms.',
      'Engineered Windows Forms desktop modules with optimized SQL queries and local hardware integration.',
      'Utilized Docker containers and Git version control to ensure seamless multi-branch deployment and API documentation via Swagger.'
    ],
    descriptionAr: [
      'تطوير واجهات برمجة تطبيقات RESTful وخدمات خلفية عالية الأداء عبر Node.js وExpress وSQL Server للأنظمة التجارية.',
      'هندسة تطبيقات سطح مكتب عبر Windows Forms مع استعلامات SQL سريعة وربط مباشر مع الأجهزة الطرفية.',
      'استخدام حاويات Docker ونظام Git لضمان النشر السلس وتوثيق واجهات الـ APIs عبر Swagger.'
    ],
    keyWins: [
      'Engineered POS restaurant APIs with sub-50ms transaction latency',
      'Implemented transactional database locking preventing concurrent inventory race conditions',
      'Standardized API testing and documentation using OpenAPI/Swagger'
    ],
    keyWinsAr: [
      'بناء واجهات برمجية لنقاط البيع بزمن استجابة أقل من 50 ملي ثانية',
      'تطبيق آليات القفل في قواعد البيانات لمنع تعارضات وتضارب عمليات المخزون',
      'توحيد معايير الفحص وتوثيق واجهات الـ APIs عبر Swagger'
    ],
    technologies: ['Node.js', 'Express.js', 'SQL Server', 'Windows Forms', 'Docker', 'Git', 'Swagger']
  },
  {
    id: 'ahgaff-project',
    company: 'Al-Ahgaff University',
    companyAr: 'جامعة الأحقاف (مركز حضرموت)',
    role: 'Full-Stack Developer (University CMS Project)',
    roleAr: 'مطور برمجيات شامل (مشروع إدارة الجامعة)',
    period: '2022 – 2023',
    periodAr: '2022 – 2023',
    location: 'Al-Mukalla, Yemen',
    locationAr: 'المكلا، اليمن',
    description: [
      'Engineered the comprehensive Student & Courses Management System for the Hadhramaut Center at Al-Ahgaff University.',
      'Combined .NET Core and Electron.Net to deliver a unified cross-platform administrative solution for web and desktop environments.',
      'Modeled relational database schemas managing thousands of academic enrollments, transcripts, and course prerequisites.'
    ],
    descriptionAr: [
      'تطوير منظومة إدارة الطلاب والمقررات الأكاديمية لمركز حضرموت بجامعة الأحقاف.',
      'الجمع بين .NET Core وElectron.Net لتوفير تطبيق موحد لإدارة شؤون الطلاب عبر الويب وسطح المكتب.',
      'تصميم وبناء قواعد بيانات علائقية تدير آلاف السجلات الأكاديمية والدرجات والجداول الدراسية.'
    ],
    keyWins: [
      'Digitized academic records for over 12,500 active and alumnus students',
      'Delivered unified single-codebase web and Electron.Net desktop deployment',
      'Graduated with honors, presenting architectural innovations to university faculty'
    ],
    keyWinsAr: [
      'أتمتة وحفظ السجلات الأكاديمية لأكثر من 12,500 طالب وخريج',
      'تقديم حل برمجي موحد لكافة المنصات عبر الويب وتطبيقات سطح المكتب',
      'التخرج بمرتبة الشرف وتقديم أحدث النماذج المعمارية للكلية'
    ],
    technologies: ['.NET Core', 'C#', 'Electron.Net', 'SQL Server', 'REST APIs', 'PDF Engine']
  }
];

export const SOCIAL_PROFILES: SocialProfile[] = [
  { platform: 'GitHub', url: 'https://github.com/ak01redwan', handle: '@ak01redwan', icon: 'Github' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/ak01redwan', handle: 'Abdulrahman Redhwan', icon: 'Linkedin' },
  { platform: 'X / Twitter', url: 'https://x.com/ak01redwan', handle: '@ak01redwan', icon: 'Twitter' },
  { platform: 'Stack Overflow', url: 'https://stackoverflow.com/users/ak01redwan', handle: 'ak01redwan', icon: 'Terminal' },
  { platform: 'Dev.to', url: 'https://dev.to/ak01redwan', handle: 'ak01redwan', icon: 'Code2' },
  { platform: 'Medium', url: 'https://medium.com/@ak01redwan', handle: '@ak01redwan', icon: 'PenTool' },
  { platform: 'CodePen', url: 'https://codepen.io/ak01redwan', handle: 'ak01redwan', icon: 'Box' },
  { platform: 'Behance', url: 'https://www.behance.net/ak01redwan', handle: 'ak01redwan', icon: 'Image' },
  { platform: 'Dribbble', url: 'https://dribbble.com/ak01redwan', handle: 'ak01redwan', icon: 'Dribbble' },
  { platform: 'Email (Personal)', url: 'mailto:ak01redwan@gmail.com', handle: 'ak01redwan@gmail.com', icon: 'Mail' },
  { platform: 'Email (Agency)', url: 'mailto:ak01redwan@madbootnova.com', handle: 'ak01redwan@madbootnova.com', icon: 'Mail' },
  { platform: 'Phone / WhatsApp', url: 'https://wa.me/967776716697', handle: '+967 776 716 697', icon: 'Phone' }
];

export const BLOG_POSTS = [
  {
    id: 'ci-cd-github-actions-automation',
    title: 'Reducing Deployment Time from Hours to < 3 Minutes with GitHub Actions & Laravel 12 / Nuxt 4',
    titleAr: 'تخفيض زمن النشر من ساعات إلى أقل من ٣ دقائق عبر GitHub Actions وLaravel 12 / Nuxt 4',
    date: 'August 2026',
    dateAr: 'أغسطس 2026',
    category: 'DevOps & Architecture',
    categoryAr: 'العمليات وهندسة النظم',
    readTime: '6 min read',
    readTimeAr: '٦ دقائق قراءة',
    excerpt: 'How we eliminated manual deployment errors, automated testing, and achieved zero-downtime production deployments for the Bandwal Academy platform.',
    excerptAr: 'كيف قمنا بالقضاء على أخطاء النشر اليدوي وأتمتة الفحص الشامل وتحقيق نشر فوري بدون انقطاع لمنصة أكاديمية بندوال.',
    author: 'Abdulrahman Redhwan',
    content: `
      <p class="lead">Manual deployments are a ticking time bomb in enterprise systems. When a release requires SSHing into production, pulling Git commits, running composer install, compiling assets, and clearing caches manually, human error is inevitable.</p>
      
      <h3>The Problem at Bandwal Academy</h3>
      <p>Before implementing our automated pipeline, deployments required senior engineering attention, taking anywhere from 45 minutes to several hours. A forgotten database migration or cache clear often introduced temporary 500 errors during peak student hours.</p>
      
      <h3>The Architecture: Automated GitHub Actions Workflow</h3>
      <p>We designed a dual-stage CI/CD architecture targeting both Staging and Production environments:</p>
      <ul>
        <li><strong>Step 1: Parallel Testing & Linting</strong> — PHPStan strict analysis, Pest unit/feature test suites, and ESLint / TypeScript type-checks for Nuxt.js 4.</li>
        <li><strong>Step 2: Nuxt 4 SSR Production Build</strong> — Pre-compiling server-rendered Nitro output and optimizing WebP assets.</li>
        <li><strong>Step 3: Zero-Downtime Atomic Symlink Switch</strong> — Uploading release packages to isolated timestamped directories and executing zero-downtime atomic symlink swaps once all health-checks pass.</li>
      </ul>

      <blockquote>"Automating deployment isn't just about speed; it's about engineering confidence. When deploying takes under 3 minutes, teams release fixes continuously without fear."</blockquote>

      <h3>Measurable Outcomes</h3>
      <p>The entire pipeline reduced deployment duration to under 3 minutes, eliminated release regressions, and enabled continuous value delivery for thousands of active learners.</p>
    `
  },
  {
    id: 'building-cnc-machine-gcode-arduino',
    title: 'Building a 3-Axis CNC Machine from Scratch: Microstepping, G-Code Parsing & Marlin Firmware',
    titleAr: 'بناء آلة CNC ثلاثية المحاور من الصفر: الخطوات الدقيقة، معالجة G-Code وتعديل Marlin',
    date: 'July 2026',
    dateAr: 'يوليو 2026',
    category: 'Hardware & Embedded',
    categoryAr: 'العتاد والأنظمة المضمنة',
    readTime: '8 min read',
    readTimeAr: '٨ دقائق قراءة',
    excerpt: 'A deep technical journey into designing Cartesian mechanics, tuning A4988 stepper drivers for 1/16 microstepping, and flashing custom Arduino firmware for automated machining.',
    excerptAr: 'رحلة هندسية عميقة في تصميم الحركة الكارتيزية، معايرة دوائر محركات الخطوة للنبضات الدقيقة، وبرمجة متحكمات Arduino للتشغيل الآلي.',
    author: 'Abdulrahman Redhwan',
    content: `
      <p class="lead">Most web developers operate exclusively in virtual memory buffers and HTTP requests. Bridging the divide between digital software logic and electro-mechanical physical execution fundamentally sharpens your systems thinking.</p>
      
      <h3>1. Mechanical Rigidity & Cartesian Geometry</h3>
      <p>A CNC machine's accuracy is strictly bound by mechanical resonance and backlash. We engineered a dual-lead screw Y-axis configuration to prevent gantry deflection during rapid directional changes under load.</p>

      <h3>2. Microstepping & Pulse Calibration</h3>
      <p>Standard 1.8° stepper motors provide 200 full steps per revolution. By implementing 1/16th microstepping through precision driver tuning, we increased angular resolution to 3,200 pulses per revolution, yielding 0.05mm repeatable spatial accuracy.</p>

      <h3>3. Real-Time G-Code Interpretation</h3>
      <p>Commands such as <code>G01 X120.5 Y45.2 Z-1.5 F800</code> are parsed in real time by the ATmega microcontroller, computing trapezoidal acceleration profiles to prevent motor stall while maximizing cutting speed.</p>
      
      <blockquote>"Understanding physics, electrical timing, and mechanical tolerances makes you a vastly better software architect. Hardware leaves zero room for sloppy assumptions."</blockquote>
    `
  },
  {
    id: 'scaling-dotnet-ecommerce-nopcommerce',
    title: 'Architecting High-Throughput .NET Core E-Commerce Platforms & Custom nopCommerce Plugins',
    titleAr: 'هندسة منصات تجارة إلكترونية عالية الأداء عبر .NET Core وإضافات nopCommerce المخصصة',
    date: 'June 2026',
    dateAr: 'يونيو 2026',
    category: 'E-Commerce & .NET',
    categoryAr: 'التجارة الإلكترونية و.NET',
    readTime: '5 min read',
    readTimeAr: '٥ دقائق قراءة',
    excerpt: 'Best practices for custom payment gateway plugins, SQL Server index optimization, and distributed caching in enterprise .NET e-commerce systems.',
    excerptAr: 'أفضل الممارسات لتطوير إضافات بوابات الدفع المخصصة، تحسين فهارس SQL Server والتخزين المؤقت الموزع في أنظمة .NET.',
    author: 'Abdulrahman Redhwan',
    content: `
      <p class="lead">In enterprise digital commerce, page latency directly dictates conversion rates. A 100ms delay can reduce sales by up to 7%. Here is how we engineered high-speed .NET e-commerce platforms for srmedeco.com and madbootnova.com.</p>
      
      <h3>Custom Plugin Architecture</h3>
      <p>Rather than modifying core framework classes, we developed decoupled C# plugins using dependency injection, isolating regional payment webhooks and custom shipping calculations.</p>

      <h3>Database & Query Tuning</h3>
      <p>By analyzing execution plans in SQL Server and introducing covering non-clustered indexes on frequently filtered catalog dimensions, we reduced query execution time from 420ms to under 18ms.</p>
    `
  }
];

export const EXPERIENCE_ITEMS = WORK_EXPERIENCES;
export const BLOG_POSTS_DATA = BLOG_POSTS;

