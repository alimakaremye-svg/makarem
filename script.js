/**
 * PORTFOLIO MODERN INTERACTIVE SCRIPT
 * Complete functionality: Themes, Languages, Canvas Particles,
 * Typing Effect, Tilt 3D, Stats Counters, Filtering, Modals, Forms & Toasts.
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. TRANSLATION & INTERNATIONALIZATION (AR / EN)
  // =========================================================================
  const translations = {
    ar: {
      siteTitle: "بورتفوليو احترافي | مطور ويب ومصمم واجهات",
      logoName: "مطور.برو",
      navHome: "الرئيسية",
      navAbout: "عني",
      navSkills: "المهارات",
      navServices: "الخدمات",
      navPortfolio: "أعمالي",
      navTestimonials: "الآراء",
      navContact: "تواصل معي",
      navHireMe: "وظفني الآن",

      // Hero
      heroStatus: "متاح للعمل الحر والمشاريع الجديدة",
      heroGreeting: "مرحباً، أنا",
      heroName: "طارق يوسف",
      heroRolePrefix: "أنا متخصص في ",
      heroDescription: "مهندس برمجيات ومطور واجهات تفاعلية بخبرة متقدمة في تحويل الأفكار إلى منتجات رقمية استثنائية تتميز بالسرعة، الجمال، وتجربة المستخدم السلسة.",
      heroBtnExplore: "استكشف أعمالي",
      heroBtnContact: "تواصل معي",
      heroBtnResume: "السيرة الذاتية (CV)",
      heroFollow: "تابعني على:",
      badgeExp: "سنوات خبرة",
      badgeProjects: "مشروع ناجح",
      badgeSatisfaction: "رضا العملاء",

      // Stats
      statProjects: "مشروع مكتمل",
      statClients: "عميل سعيد",
      statYears: "سنوات من الشغف",
      statSuccess: "دقة في الالتزام",

      // About
      aboutSubtitle: "نبذة تعريفية",
      aboutTitle: "من أنا وشغفي الرقمي",
      aboutLeadTitle: "أصنع تجارب رقمية لا تُنسى تجمع بين الأداء العالي والأناقة البصرية",
      aboutP1: "مرحباً بك! أنا مهندس ومطور برمجيات ذو شغف كبير بتصميم وبرمجة مواقع وتطبيقات الويب الحديثة. أمتلك خبرة تتجاوز الـ 5 سنوات في العمل على مشاريع برمجية متنوعة من البداية وحتى الإطلاق والنمو.",
      aboutP2: "هدفي ليس مجرد كتابة أكواد برمجية، بل بناء منتجات تضيف قيمة حقيقية لأصحاب الأعمال والمستخدمين. أركز بشدة على نظافة الكود (Clean Code)، سرعة التحميل الفائقة، والتجاوب مع جميع أحجام الشاشات.",
      feat1Title: "تصاميم حديثة ومبتكرة",
      feat1Desc: "واجهات تفاعلية عصرية وفق أحدث معايير UI/UX العالمية.",
      feat2Title: "سرعة استثنائية وأمان",
      feat2Desc: "تحسين فائق للأداء وتقليل زمن التحميل لتحقيق أفضل تجربة.",
      feat3Title: "كود نظيف وقابل للتطوير",
      feat3Desc: "بنية تحتية هندسية مرنة يسهل التعديل والتوسع عليها مستقبلاً.",
      feat4Title: "تجاوب شامل مع الأجهزة",
      feat4Desc: "تجربة تصفح متكاملة على الهواتف، الأجهزة اللوحية والشاشات الكبيرة.",
      aboutContactMe: "دعنا نعمل معاً",
      aboutLocation: "الرياض، المملكة العربية السعودية",
      aboutJobType: "دوام كامل / مشاريع مستقلة",

      // Timeline
      timelineHeading: "محطات الرحلة المهنية",
      time1Role: "كبير مطوري الواجهات والتطبيقات",
      time1Company: "Tech Solutions Inc.",
      time1Desc: "قيادة فرق التطوير وبناء منصات رقمية وأنظمة SaaS عالية الكفاءة مع أكثر من 50,000 مستخدم نشط.",
      time2Role: "مطور ويب متكامل (Full-Stack)",
      time2Company: "Digital Studio",
      time2Desc: "تطوير متاجر إلكترونية ومواقع للشركات وتكامل واجهات برمجية RESTful متقدمة.",
      time3Role: "مطور واجهات أمامية ومصمم UX",
      time3Company: "Freelance Hub",
      time3Desc: "تصميم وبرمجة واجهات مواقع مخصصة للعملاء مع التركيز على التفاعل والرسوم المتحركة.",
      time4Role: "بكالوريوس علوم الحاسب والمعلومات",
      time4Company: "جامعة الملك سعود",
      time4Desc: "تخرج بمرتبة الشرف الأولى مع تخصص في هندسة البرمجيات وتطوير النظم.",

      // Skills
      skillsSubtitle: "المهارات والتقنيات",
      skillsTitle: "ترسانتي التقنية والأدوات",
      skillsTabAll: "جميع المهارات",
      skillsTabFrontend: "الواجهات الأمامية (Frontend)",
      skillsTabBackend: "الواجهات الخلفية (Backend)",
      skillsTabTools: "الأدوات والتصميم (Tools & UX)",
      skillLevelMaster: "مستوى متقدم جداً",
      skillLevelExpert: "خبير محترف",
      skillLevelProficient: "متقن ومتمكن",
      cloudTitle: "تقنيات وبيئات أخرى أتعامل معها يومياً:",

      // Services
      servicesSubtitle: "ماذا أقدم لك؟",
      servicesTitle: "خدماتي الاحترافية",
      srv1Title: "تطوير تطبيقات ومواقع الويب",
      srv1Desc: "بناء مواقع وتطبيقات ويب سريعة وتفاعلية من الصفر وحتى النشر، متوافقة مع جميع الأجهزة والمحركات وتراعي أدق معايير الكود العالمي.",
      srv1F1: "مواقع تعريفية للشركات والناشئة",
      srv1F2: "تطبيقات الويب ذات الصفحة الواحدة (SPA)",
      srv1F3: "أنظمة إدارة محتوى ولوحات تحكم",
      srv2Title: "تصميم واجهات وتجربة المستخدم UI/UX",
      srv2Desc: "تحويل الأفكار المعقدة إلى واجهات بصرية جذابة وبسيطة الاستخدام تحقق أهداف النشاط التجاري وتمنح المستخدم تجربة مريحة وممتعة.",
      srv2F1: "نماذج أولية تفاعلية على Figma",
      srv2F2: "أنظمة تصميم متكاملة (Design Systems)",
      srv2F3: "دراسة رحلة وسلوك المستخدم",
      srv3Title: "تطوير المتاجر الإلكترونية",
      srv3Desc: "بناء متاجر إلكترونية احترافية مجهزة ببوابات الدفع الإلكتروني، سلات الشراء الذكية، وإدارة المنتجات والطلبات بكفاءة فائقة.",
      srv3F1: "ربط بوابات الدفع (Stripe, Mada, Paymob)",
      srv3F2: "تجربة شراء سريعة ومرنة في خطوة واحدة",
      srv3F3: "لوحات تحكم لإدارة المخزون والمبيعات",
      srv4Title: "تحسين الأداء وتهيئة SEO",
      srv4Desc: "تسريع زمن تحميل الصفحات إلى أقل من ثانية، وتحسين نتائج محركات البحث (SEO) للوصول إلى المراتب الأولى وجذب المزيد من الزوار.",
      srv4F1: "تحقيق أعلى درجات Google Core Web Vitals",
      srv4F2: "تهيئة الكلمات المفتاحية وعلامات Schema",
      srv4F3: "ضغط الموارد وتحسين الكاش والملفات",

      // Portfolio
      portfolioSubtitle: "معرض المشاريع",
      portfolioTitle: "نماذج من أعمالي المميزة",
      portFilterAll: "جميع المشاريع",
      portFilterSaas: "منصات SaaS",
      portFilterAi: "ذكاء اصطناعي",
      portFilterEcom: "متاجر إلكترونية",
      projDetails: "التفاصيل",
      projCode: "الكود",
      proj1Title: "CloudMetrics | منصة تحليلات الأعمال السحابية",
      proj1Desc: "لوحة تحكم تفاعلية متطورة لإدارة مؤشرات الأداء الحيوية، توليد التقارير المالية والبيانية الفورية، ومتابعة نمو المبيعات بدقة فائقة.",
      proj2Title: "NeuroFlow AI | منصة أتمتة العمل بالذكاء الاصطناعي",
      proj2Desc: "تطبيق ذكاء اصطناعي متكامل يساعد فرق العمل على صياغة المحتوى، تحليل المستندات المعقدة، والرد الآلي على استفسارات العملاء بدقة مذهلة.",
      proj3Title: "Aura Luxe | متجر أزياء وتجارة إلكترونية فاخرة",
      proj3Desc: "تجربة تسوق إلكتروني راقية تمتاز بتصميم داكن وفخم، سرعة تحميل مذهلة، فلترة فورية للمنتجات، وبوابة دفع آمنة وسلسة بالكامل.",

      // Testimonials
      testiSubtitle: "ماذا يقولون عني؟",
      testiTitle: "شهادات وثقة العملاء",
      t1Text: "\"العمل مع طارق كان من أفضل التجارب التقنية. سرعة في التنفيذ، دقة متناهية في التفاصيل وتصميم فاق كل توقعاتنا. زادت نسبة التحويل في متجرنا بأكثر من 45% بعد إعادة التطوير!\"",
      t1Name: "عبدالله الشهري",
      t1Role: "المدير التنفيذي، ريادة تك",
      t2Text: "\"مهندس محترف بكل ما تعنيه الكلمة. الكود منظم ونظيف جداً، وجميع المعايير تم تطبيقها باحترافية عالية. التزامه التام بالمواعيد والتواصل المستمر يمنحك راحة بال تامة.\"",
      t2Name: "سارة المنصور",
      t2Role: "مديرة منتج، مجموعة نمو الرقمية",
      t3Text: "\"قام ببناء منصة الـ SaaS الخاصة بنا بتقنيات حديثة جعلت النظام فائق السرعة وبأعلى درجات الأمان. ننصح بشدة بالتعامل معه لأي مشروع طموح يبحث عن الجودة الفائقة.\"",
      t3Name: "فيصل القرشي",
      t3Role: "مؤسس شريك، فيوتشر كلاود",

      // Contact
      contactSubtitle: "تواصل معي",
      contactTitle: "لنبدأ في بناء مشروعك القادم معاً",
      contactInfoHeading: "معلومات التواصل المباشر",
      contactInfoDesc: "سواء كان لديك مشروع جديد ترغب في تنفيذه، أو استشارة برمجية، أو فرصة عمل، يسعدني دائماً تواصلك وسأرد عليك خلال ساعات قليلة!",
      lblEmail: "البريد الإلكتروني:",
      lblPhone: "واتساب / هاتف:",
      lblLocation: "الموقع الجغرافي:",
      lblLocationCity: "الرياض، المملكة العربية السعودية",
      socialChannels: "حساباتي على الشبكات المهنية:",
      formTitle: "أرسل رسالة سريعة",
      formName: "الاسم الكامل *",
      formEmail: "البريد الإلكتروني *",
      formSubject: "نوع الخدمة / الموضوع *",
      optWeb: "تطوير موقع أو تطبيق ويب",
      optUiux: "تصميم واجهات UI/UX",
      optEcom: "متجر إلكتروني متكامل",
      optConsult: "استشارة برمجية / تحسين أداء",
      optOther: "موضوع آخر",
      formBudget: "الميزانية المتوقعة",
      formMessage: "تفاصيل المشروع أو الرسالة *",
      formSubmit: "إرسال الرسالة الآن",

      // Footer
      footerTagline: "تصميم وبرمجة حلول رقمية تلهم المستخدمين وتدفع الأعمال نحو المستقبل.",
      footerNavTitle: "روابط سريعة",
      footerWorkStatus: "حالة العمل الحالية",
      footerAvailTitle: "متاح للمشاريع الجديدة",
      footerAvailDesc: "جاهز للبدء فوراً في مشروعك القادم.",
      copyright: "جميع الحقوق محفوظة.",
      craftedWith: "تم التصميم والبرمجة بكل شغف وإتقان باستخدام HTML5, CSS3, & JS ⚡"
    },

    en: {
      siteTitle: "Professional Portfolio | Web Developer & UI/UX Designer",
      logoName: "Dev.Pro",
      navHome: "Home",
      navAbout: "About",
      navSkills: "Skills",
      navServices: "Services",
      navPortfolio: "Portfolio",
      navTestimonials: "Reviews",
      navContact: "Contact",
      navHireMe: "Hire Me Now",

      // Hero
      heroStatus: "Available for freelance & new projects",
      heroGreeting: "Hello, I am",
      heroName: "Tariq Youssef",
      heroRolePrefix: "Specialized in ",
      heroDescription: "Software Engineer & Interactive UI Developer with 5+ years of experience transforming ideas into high-speed, aesthetically stunning, and user-centric digital products.",
      heroBtnExplore: "Explore Work",
      heroBtnContact: "Get in Touch",
      heroBtnResume: "Resume (CV)",
      heroFollow: "Follow me on:",
      badgeExp: "Years Exp.",
      badgeProjects: "Finished Projects",
      badgeSatisfaction: "Client Satisfaction",

      // Stats
      statProjects: "Completed Projects",
      statClients: "Happy Clients",
      statYears: "Years of Passion",
      statSuccess: "Commitment Rate",

      // About
      aboutSubtitle: "About Me",
      aboutTitle: "Who I Am & My Digital Craft",
      aboutLeadTitle: "Crafting memorable digital experiences combining top-tier performance with visual elegance",
      aboutP1: "Welcome! I am a passionate software engineer and designer specializing in modern web ecosystems. With 5+ years building and scaling digital products, I take concepts from raw blueprints to high-performing live solutions.",
      aboutP2: "My focus extends beyond writing code—I build software that drives real business value. Clean code architecture, sub-second load times, and responsive cross-device experiences are standard in all my work.",
      feat1Title: "Cutting-Edge Design",
      feat1Desc: "Modern, dynamic interfaces built following global UI/UX standards.",
      feat2Title: "Speed & Security",
      feat2Desc: "Optimized pipelines, minimal latency, and hardened web security.",
      feat3Title: "Clean Scalable Code",
      feat3Desc: "Modular, well-documented architecture that scales smoothly over time.",
      feat4Title: "Full Responsiveness",
      feat4Desc: "Flawless rendering across phones, tablets, laptops, and ultra-wide screens.",
      aboutContactMe: "Let's Collaborate",
      aboutLocation: "Riyadh, Saudi Arabia",
      aboutJobType: "Full-Time / Freelance",

      // Timeline
      timelineHeading: "Career Journey Milestones",
      time1Role: "Lead Frontend & Web Applications Engineer",
      time1Company: "Tech Solutions Inc.",
      time1Desc: "Led frontend development teams building enterprise SaaS platforms serving 50,000+ active users.",
      time2Role: "Full-Stack Web Developer",
      time2Company: "Digital Studio",
      time2Desc: "Developed custom e-commerce stores, client portals, and integrated complex RESTful APIs.",
      time3Role: "Frontend Developer & UI Specialist",
      time3Company: "Freelance Hub",
      time3Desc: "Crafted interactive websites and user experiences with custom micro-animations and designs.",
      time4Role: "B.Sc. in Computer Science & Information Systems",
      time4Company: "King Saud University",
      time4Desc: "Graduated with First-Class Honors, specializing in Software Engineering and Distributed Systems.",

      // Skills
      skillsSubtitle: "Skills & Stack",
      skillsTitle: "Technical Arsenal & Tools",
      skillsTabAll: "All Skills",
      skillsTabFrontend: "Frontend",
      skillsTabBackend: "Backend",
      skillsTabTools: "Tools & UX",
      skillLevelMaster: "Master Level",
      skillLevelExpert: "Senior Expert",
      skillLevelProficient: "Proficient",
      cloudTitle: "Other Technologies & Tools in my daily workflow:",

      // Services
      servicesSubtitle: "What I Offer",
      servicesTitle: "Professional Services",
      srv1Title: "Web & SaaS Development",
      srv1Desc: "Building blazing-fast, responsive web applications from scratch through deployment, adhering to high-standard clean architecture.",
      srv1F1: "Corporate & Startup Websites",
      srv1F2: "Single Page Applications (SPA)",
      srv1F3: "Custom Dashboards & CMS",
      srv2Title: "UI/UX Design & Prototyping",
      srv2Desc: "Translating complex functional requirements into clean, high-conversion visual interfaces that users genuinely love navigating.",
      srv2F1: "Interactive Figma Prototypes",
      srv2F2: "Scalable Design Systems",
      srv2F3: "User Journey & Flow Research",
      srv3Title: "E-Commerce Architecture",
      srv3Desc: "Developing robust e-commerce solutions with frictionless checkout flows, secure payment gateways, and intuitive inventory management.",
      srv3F1: "Payment Gateways (Stripe, Mada, Paymob)",
      srv3F2: "One-step frictionless checkout",
      srv3F3: "Admin management panels",
      srv4Title: "Performance & SEO Optimization",
      srv4Desc: "Optimizing page load to sub-second speeds and ranking high on search engines with modern technical SEO best practices.",
      srv4F1: "Top Google Core Web Vitals scores",
      srv4F2: "Semantic markup & Schema tags",
      srv4F3: "Asset compression & caching strategies",

      // Portfolio
      portfolioSubtitle: "Featured Projects",
      portfolioTitle: "Showcase of Notable Work",
      portFilterAll: "All Projects",
      portFilterSaas: "SaaS Platforms",
      portFilterAi: "AI Solutions",
      portFilterEcom: "E-Commerce",
      projDetails: "Details",
      projCode: "Source",
      proj1Title: "CloudMetrics | Cloud Business Analytics Suite",
      proj1Desc: "An advanced real-time analytics dashboard monitoring vital metrics, generating instant financial charts, and tracking business velocity.",
      proj2Title: "NeuroFlow AI | AI-Powered Workflow Automator",
      proj2Desc: "Intelligent enterprise AI assistant helping teams draft content, parse complex contracts, and automate customer support effortlessly.",
      proj3Title: "Aura Luxe | Luxury E-Commerce & Fashion Store",
      proj3Desc: "A high-end retail experience featuring dark luxury aesthetics, instantaneous product filtering, and a seamless global checkout flow.",

      // Testimonials
      testiSubtitle: "Testimonials",
      testiTitle: "Client Reviews & Trust",
      t1Text: "\"Working with Tariq has been one of our smoothest tech experiences. Swift execution, meticulous attention to detail, and a redesign that boosted our store conversion rate by over 45%!\"",
      t1Name: "Abdullah Al-Shehri",
      t1Role: "CEO, Riyada Tech",
      t2Text: "\"A top-tier engineer in every sense. The codebase is remarkably clean, modern, and well-structured. His commitment to deadlines and transparent communication provided complete peace of mind.\"",
      t2Name: "Sarah Al-Mansoor",
      t2Role: "Product Lead, Nomow Digital",
      t3Text: "\"He engineered our SaaS platform with cutting-edge technologies, making the system ultra-fast and exceptionally secure. Highly recommended for ambitious digital projects!\"",
      t3Name: "Faisal Al-Qurashi",
      t3Role: "Co-Founder, FutureCloud",

      // Contact
      contactSubtitle: "Get in Touch",
      contactTitle: "Let's Build Your Next Big Project Together",
      contactInfoHeading: "Direct Contact Channels",
      contactInfoDesc: "Whether you have a new venture in mind, need technical consultation, or have an exciting opportunity, I would love to connect. I typically respond within a few hours!",
      lblEmail: "Email Address:",
      lblPhone: "WhatsApp / Phone:",
      lblLocation: "Location:",
      lblLocationCity: "Riyadh, Saudi Arabia",
      socialChannels: "Professional Networks:",
      formTitle: "Send a Quick Message",
      formName: "Full Name *",
      formEmail: "Email Address *",
      formSubject: "Service / Topic *",
      optWeb: "Web App / Website Development",
      optUiux: "UI/UX Interface Design",
      optEcom: "Complete E-Commerce Store",
      optConsult: "Tech Consultation / Optimization",
      optOther: "Other Inquiry",
      formBudget: "Estimated Budget",
      formMessage: "Project Details / Message *",
      formSubmit: "Send Message Now",

      // Footer
      footerTagline: "Designing and engineering digital products that inspire users and drive business into the future.",
      footerNavTitle: "Quick Navigation",
      footerWorkStatus: "Current Availability",
      footerAvailTitle: "Open for New Projects",
      footerAvailDesc: "Ready to start immediately on your next venture.",
      copyright: "All Rights Reserved.",
      craftedWith: "Designed and engineered with passion using HTML5, CSS3, & JS ⚡"
    }
  };

  // State management
  let currentLang = localStorage.getItem('portfolio_lang') || 'ar';
  let currentTheme = localStorage.getItem('portfolio_theme') || 'dark';

  const typingRolesAr = [
    "تطوير تطبيقات الويب الحديثة",
    "تصميم واجهات وتجربة المستخدم UI/UX",
    "هندسة المنصات السحابية و SaaS",
    "بناء المتاجر الإلكترونية فائقة السرعة"
  ];

  const typingRolesEn = [
    "Modern Web App Development",
    "UI/UX Experience & Interface Design",
    "Cloud Solutions & SaaS Architecture",
    "High-Converting E-Commerce Platforms"
  ];

  // Set Language Function
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const langLabel = document.getElementById('lang-label');
    if (langLabel) {
      langLabel.textContent = lang === 'ar' ? 'EN' : 'عربي';
    }

    // Update document title
    document.title = translations[lang].siteTitle || document.title;

    // Update all i18n DOM elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update placeholders
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const msgInput = document.getElementById('form-message');
    if (nameInput) nameInput.placeholder = lang === 'ar' ? 'مثال: محمد أحمد' : 'e.g., Alex Johnson';
    if (emailInput) emailInput.placeholder = 'example@domain.com';
    if (msgInput) msgInput.placeholder = lang === 'ar' ? 'اشرح فكرة مشروعك، الأهداف، وأي متطلبات خاصة...' : 'Tell me about your project, goals, and any specific requirements...';

    // Reset typewriter text list
    resetTypewriter();
  }

  // Language Button Handler
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  // Initialize Language
  setLanguage(currentLang);


  // =========================================================================
  // 2. THEME SWITCHER (DARK / LIGHT)
  // =========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');

  function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('portfolio_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.className = 'fa-solid fa-sun';
        themeIcon.style.color = '#f59e0b';
      } else {
        themeIcon.className = 'fa-solid fa-moon';
        themeIcon.style.color = '';
      }
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }
  setTheme(currentTheme);


  // =========================================================================
  // 3. AMBIENT PARTICLES CANVAS
  // =========================================================================
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = Math.min(width > 768 ? 45 : 20, 60);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = currentTheme === 'dark'
          ? `rgba(139, 92, 246, ${p.alpha})`
          : `rgba(99, 102, 241, ${p.alpha * 0.7})`;
        ctx.fill();

        // Connect nearby particles with subtle lines
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 100) * 0.15;
            ctx.strokeStyle = currentTheme === 'dark'
              ? `rgba(6, 182, 212, ${lineAlpha})`
              : `rgba(99, 102, 241, ${lineAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }


  // =========================================================================
  // 4. INTERACTIVE CUSTOM CURSOR (DESKTOP)
  // =========================================================================
  const cursorDot = document.getElementById('cursor-dot');
  const cursorOutline = document.getElementById('cursor-outline');

  if (cursorDot && cursorOutline && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = -100, mouseY = -100;
    let outlineX = -100, outlineY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    function animateCursor() {
      outlineX += (mouseX - outlineX) * 0.18;
      outlineY += (mouseY - outlineY) * 0.18;
      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover scale effect
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .project-card, .skill-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.6)';
        cursorOutline.style.borderColor = 'var(--accent-cyan)';
      });
      el.addEventListener('mouseleave', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.borderColor = 'rgba(139, 92, 246, 0.6)';
      });
    });
  }


  // =========================================================================
  // 5. TYPEWRITER EFFECT
  // =========================================================================
  const typedTextEl = document.getElementById('typed-text');
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingTimeout = null;

  function typeRole() {
    const list = currentLang === 'ar' ? typingRolesAr : typingRolesEn;
    const currentRole = list[roleIdx % list.length];

    if (isDeleting) {
      charIdx--;
    } else {
      charIdx++;
    }

    if (typedTextEl) {
      typedTextEl.textContent = currentRole.substring(0, charIdx);
    }

    let delay = isDeleting ? 45 : 90;

    if (!isDeleting && charIdx === currentRole.length) {
      delay = 2000; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx++;
      delay = 400; // Pause before starting new word
    }

    typingTimeout = setTimeout(typeRole, delay);
  }

  function resetTypewriter() {
    if (typingTimeout) clearTimeout(typingTimeout);
    roleIdx = 0;
    charIdx = 0;
    isDeleting = false;
    typeRole();
  }


  // =========================================================================
  // 6. HERO 3D TILT EFFECT
  // =========================================================================
  const tiltCard = document.getElementById('hero-tilt-card');
  if (tiltCard && window.innerWidth > 768) {
    tiltCard.addEventListener('mousemove', (e) => {
      const rect = tiltCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = -(y / rect.height) * 16;
      const rotateY = (x / rect.width) * 16;
      tiltCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    tiltCard.addEventListener('mouseleave', () => {
      tiltCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      tiltCard.style.transition = 'transform 0.5s ease';
    });

    tiltCard.addEventListener('mouseenter', () => {
      tiltCard.style.transition = 'none';
    });
  }


  // =========================================================================
  // 7. STATS NUMBER COUNTER ANIMATION
  // =========================================================================
  const counters = document.querySelectorAll('.counter');
  let animatedStats = false;

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedStats) {
          animatedStats = true;
          counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 1800; // ms
            const stepTime = 25;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
              } else {
                counter.textContent = Math.floor(current);
              }
            }, stepTime);
          });
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  }


  // =========================================================================
  // 8. SCROLL REVEAL ANIMATIONS
  // =========================================================================
  const revealElements = document.querySelectorAll('.reveal-item, .glass-card, .timeline-node');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));


  // =========================================================================
  // 9. SKILLS FILTERING & ANIMATION
  // =========================================================================
  const skillTabs = document.querySelectorAll('.skill-tab-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  // Trigger skill bar animation when skills section is visible
  const skillsGrid = document.getElementById('skills-grid');
  if (skillsGrid) {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skillCards.forEach(card => card.classList.add('animated'));
        }
      });
    }, { threshold: 0.2 });

    skillObserver.observe(skillsGrid);
  }

  // Filter skills
  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterCategory = tab.getAttribute('data-skill-tab');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterCategory === 'all' || category === filterCategory) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });


  // =========================================================================
  // 10. PORTFOLIO FILTERING & MODAL PREVIEW
  // =========================================================================
  const portfolioTabs = document.querySelectorAll('.portfolio-tab-btn');
  const projectCards = document.querySelectorAll('.project-card');

  portfolioTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      portfolioTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // Project Details Data
  const projectsData = {
    "1": {
      titleAr: "CloudMetrics | منصة تحليلات الأعمال السحابية",
      titleEn: "CloudMetrics | Cloud Business Analytics Suite",
      descAr: "منصة ويب متكاملة تقدم لوحات تحكم تفاعلية مع رسوم بيانية لحظية، تتبع حركة المبيعات وتوقع الإيرادات بدقة، مع إمكانية تصدير تقارير محاسبية فورية وتكامل تام مع قواعد البيانات الحديثة.",
      descEn: "An all-in-one web analytics suite featuring interactive dashboards with real-time telemetry, revenue velocity forecasts, instant report generation, and robust PostgreSQL connectivity.",
      img: "assets/images/project1.png",
      tags: ["Next.js", "TailwindCSS", "Chart.js", "PostgreSQL", "REST API"],
      featuresAr: [
        "لوحة مؤشرات حية بأكثر من 20 مخططاً بيانياً",
        "توليد تقارير PDF وإكسيل بضغطة زر واحدة",
        "نظام مصادقة متعدد المستويات وحماية أمان عالية",
        "تجاوب بنسبة 100% مع الهواتف والأجهزة اللوحية"
      ],
      featuresEn: [
        "Live dashboard featuring 20+ dynamic chart modules",
        "One-click PDF & Excel automated report generation",
        "Multi-tier role authentication and enterprise security",
        "100% fluid responsiveness across mobile & tablets"
      ],
      liveUrl: "#contact",
      githubUrl: "https://github.com"
    },
    "2": {
      titleAr: "NeuroFlow AI | منصة أتمتة العمل بالذكاء الاصطناعي",
      titleEn: "NeuroFlow AI | AI-Powered Workflow Automator",
      descAr: "تطبيق ذكاء اصطناعي ثوري يساعد الشركات وفرق العمل على صياغة المحتوى التسويقي، تلخيص العقود والمستندات الطويلة، وتوفير روبوت دردشة ذكي مدرب على بيانات العميل الخاصة.",
      descEn: "A breakthrough AI application helping teams draft marketing campaigns, summarize complex legal documents, and deploy customized chatbots trained on proprietary company datasets.",
      img: "assets/images/project2.png",
      tags: ["React", "OpenAI API", "Node.js", "Vector DB", "Tailwind"],
      featuresAr: [
        "تكامل مع أحدث نماذج الذكاء الاصطناعي GPT-4o",
        "دعم كامل للغة العربية والإنجليزية بدقة لغوية عالية",
        "قاعدة بيانات متجهة للبحث الدلالي السريع في المستندات",
        "واجهة محادثة عصرية مع إمكانية حفظ السجلات سحابياً"
      ],
      featuresEn: [
        "Deep integration with advanced GPT-4o LLM pipelines",
        "Full bilingual support for high-precision Arabic & English",
        "Vector search engine for instant semantic document lookup",
        "Modern conversational workspace with cloud sync"
      ],
      liveUrl: "#contact",
      githubUrl: "https://github.com"
    },
    "3": {
      titleAr: "Aura Luxe | متجر أزياء وتجارة إلكترونية فاخرة",
      titleEn: "Aura Luxe | Luxury E-Commerce & Fashion Store",
      descAr: "متجر إلكتروني استثنائي صُمم لعلامة تجارية فاخرة. يوفر تجربة تسوق ممتعة، فلترة فورية بالسمات والأسعار، سلة شراء ذكية، وربط متكامل مع بوابات الدفع الإلكتروني العالمية والمحلية.",
      descEn: "An exquisite luxury e-commerce experience built for upscale fashion retail. Features lightning-fast facet filtering, persistent smart carts, and localized frictionless payments.",
      img: "assets/images/project3.png",
      tags: ["HTML5", "CSS3", "JavaScript ES6", "Stripe API", "Headless CMS"],
      featuresAr: [
        "سلة شراء منبثقة تفاعلية بدون إعادة تحميل الصفحة",
        "ربط بوابات الدفع (Stripe, مدى, Apple Pay)",
        "معرض صور متعدد الزوايا للمنتجات مع تكبير عالي الدقة",
        "سرعة تحميل للصفحات أقل من 0.8 ثانية"
      ],
      featuresEn: [
        "Interactive flyout cart with instant state sync",
        "Seamless Stripe, Apple Pay, & local card gateways",
        "Multi-angle product showcase with HD zoom lens",
        "Sub-0.8s load times achieving 99+ PageSpeed scores"
      ],
      liveUrl: "#contact",
      githubUrl: "https://github.com"
    }
  };

  const projectModal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body-content');
  const modalClose = document.getElementById('modal-close');

  function openModal(projectId) {
    const proj = projectsData[projectId];
    if (!proj || !modalBody || !projectModal) return;

    const isAr = currentLang === 'ar';
    const title = isAr ? proj.titleAr : proj.titleEn;
    const desc = isAr ? proj.descAr : proj.descEn;
    const features = isAr ? proj.featuresAr : proj.featuresEn;
    const btnLiveText = isAr ? "طلب مشروع مماثل" : "Request Similar Project";
    const btnCodeText = isAr ? "عرض الكود" : "View Code";

    modalBody.innerHTML = `
      <img src="${proj.img}" alt="${title}" class="modal-project-img">
      <div class="project-tags">
        ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <h3 class="modal-project-title" id="modal-title">${title}</h3>
      <p class="modal-project-desc">${desc}</p>

      <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--text-heading);">
        ${isAr ? "أبرز مميزات المشروع:" : "Key Project Features:"}
      </h4>
      <ul class="modal-features-list">
        ${features.map(f => `<li><i class="fa-solid fa-check"></i> <span>${f}</span></li>`).join('')}
      </ul>

      <div style="display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
        <a href="${proj.liveUrl}" class="btn btn-primary" onclick="document.getElementById('project-modal').classList.remove('open');">
          <i class="fa-solid fa-paper-plane"></i>
          <span>${btnLiveText}</span>
        </a>
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <i class="fa-brands fa-github"></i>
          <span>${btnCodeText}</span>
        </a>
      </div>
    `;

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (projectModal) {
      projectModal.classList.remove('open');
      projectModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  // Bind Quick view buttons
  document.querySelectorAll('.preview-btn, .quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-project-id');
      openModal(id);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
      closeModal();
    }
  });


  // =========================================================================
  // 11. TESTIMONIALS SLIDER
  // =========================================================================
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const sliderDots = document.querySelectorAll('#slider-dots .dot');
  const prevBtn = document.getElementById('slider-prev-btn');
  const nextBtn = document.getElementById('slider-next-btn');
  let currentSlide = 0;
  let slideInterval = null;

  function showSlide(index) {
    testimonialCards.forEach((c, i) => {
      c.classList.toggle('active', i === index);
    });
    sliderDots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    const next = (currentSlide + 1) % testimonialCards.length;
    showSlide(next);
  }

  function prevSlide() {
    const prev = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
    showSlide(prev);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetSlideInterval(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetSlideInterval(); });

  sliderDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      resetSlideInterval();
    });
  });

  function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 5000);
  }
  function resetSlideInterval() {
    if (slideInterval) clearInterval(slideInterval);
    startSlideInterval();
  }
  if (testimonialCards.length > 0) startSlideInterval();


  // =========================================================================
  // 12. DIRECT CONTACT INFO COPY BUTTONS
  // =========================================================================
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(
            currentLang === 'ar' ? "تم النسخ للحافظة!" : "Copied to clipboard!",
            textToCopy
          );
          const icon = btn.querySelector('i');
          if (icon) {
            icon.className = 'fa-solid fa-check';
            setTimeout(() => {
              icon.className = 'fa-regular fa-copy';
            }, 2000);
          }
        });
      }
    });
  });


  // =========================================================================
  // 13. CONTACT FORM VALIDATION & TOAST NOTIFICATION
  // =========================================================================
  const contactForm = document.getElementById('contact-form');
  const toastNotification = document.getElementById('toast-notification');
  const toastTitle = document.getElementById('toast-title');
  const toastMsg = document.getElementById('toast-message');

  function showToast(title, message, isError = false) {
    if (!toastNotification) return;
    if (toastTitle) toastTitle.textContent = title;
    if (toastMsg) toastMsg.textContent = message;

    const iconEl = document.getElementById('toast-icon');
    if (iconEl) {
      iconEl.innerHTML = isError
        ? '<i class="fa-solid fa-triangle-exclamation" style="color: #ef4444;"></i>'
        : '<i class="fa-solid fa-circle-check" style="color: var(--accent-emerald);"></i>';
    }

    toastNotification.classList.add('show');
    setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 4500);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = document.getElementById('form-name').value.trim();
      const emailVal = document.getElementById('form-email').value.trim();
      const messageVal = document.getElementById('form-message').value.trim();
      const nameError = document.getElementById('name-error');
      const emailError = document.getElementById('email-error');
      const messageError = document.getElementById('message-error');
      const submitBtn = document.getElementById('submit-btn');

      // Clear previous errors
      if (nameError) nameError.textContent = '';
      if (emailError) emailError.textContent = '';
      if (messageError) messageError.textContent = '';

      let hasError = false;

      if (!nameVal) {
        if (nameError) nameError.textContent = currentLang === 'ar' ? 'الرجاء إدخال الاسم الكريم.' : 'Please enter your name.';
        hasError = true;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal || !emailRegex.test(emailVal)) {
        if (emailError) emailError.textContent = currentLang === 'ar' ? 'الرجاء كتابة بريد إلكتروني صحيح.' : 'Please enter a valid email address.';
        hasError = true;
      }

      if (!messageVal || messageVal.length < 10) {
        if (messageError) messageError.textContent = currentLang === 'ar' ? 'الرجاء كتابة تفاصيل لا تقل عن 10 أحرف.' : 'Please enter at least 10 characters.';
        hasError = true;
      }

      if (hasError) return;

      // Simulate sending state
      if (submitBtn) {
        submitBtn.disabled = true;
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `
          <i class="fa-solid fa-spinner fa-spin"></i>
          <span>${currentLang === 'ar' ? 'جارٍ الإرسال...' : 'Sending message...'}</span>
        `;

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          contactForm.reset();

          showToast(
            currentLang === 'ar' ? "تم إرسال رسالتك بنجاح! 🚀" : "Message Sent Successfully! 🚀",
            currentLang === 'ar'
              ? "شكراً لتواصلك، سأقوم بالرد على بريدك خلال ساعات قليلة."
              : "Thank you for reaching out! I will get back to you shortly."
          );
        }, 1200);
      }
    });
  }


  // =========================================================================
  // 14. CV DOWNLOAD SIMULATOR
  // =========================================================================
  const downloadCvBtn = document.getElementById('download-cv-btn');
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast(
        currentLang === 'ar' ? "جاري تحميل السيرة الذاتية (CV)" : "Downloading Resume (CV)",
        currentLang === 'ar' ? "تم بدء تحميل ملف PDF بنجاح." : "PDF resume download initiated."
      );
    });
  }


  // =========================================================================
  // 15. STICKY NAVBAR & ACTIVE SCROLL SPY
  // =========================================================================
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Header scrolled class
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top button
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scroll spy
    sections.forEach(sec => {
      const secHeight = sec.offsetHeight;
      const secTop = sec.offsetTop - 120;
      const secId = sec.getAttribute('id');

      if (scrollY > secTop && scrollY <= secTop + secHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${secId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  // =========================================================================
  // 16. MOBILE DRAWER MENU
  // =========================================================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, #mobile-hire-btn');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('open');
        document.body.style.overflow = '';
      } else {
        mobileDrawer.classList.add('open');
        mobileToggle.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Update footer year dynamically
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
