/* ============================================
   Jorge Muro - Landing Page JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Publications Data ----
  const publications = [
    {
      id: 'quantum-computing',
      category: 'physics',
      date: '2025',
      readTime: { en: '1 min read', es: '1 min de lectura' },
      image: 'images/quantum-computing.png',
      en: {
        tag: 'Physics',
        title: 'Quantum Computing',
        desc: 'Dr. Muro explores the intersection of quantum mechanics and computing, covering the foundations and practical applications transforming technology.'
      },
      es: {
        tag: 'Física',
        title: 'Computación Cuántica',
        desc: 'El Dr. Muro explora la intersección de la mecánica cuántica y la computación, cubriendo los fundamentos y las aplicaciones prácticas.'
      }
    },
    {
      id: 'ia-trabajo',
      category: 'ai',
      date: '2026',
      readTime: { en: '3 min read', es: '3 min de lectura' },
      image: 'images/ia-trabajo.png',
      en: {
        tag: 'AI & Work',
        title: 'AI & the Future of Work',
        desc: 'Analysis of the radical transformation of the labor market by generative AI, exploring the structural crisis and the "broken talent ladder."'
      },
      es: {
        tag: 'IA y Trabajo',
        title: 'IA y el Trabajo Actual y Futuro',
        desc: 'Este artículo analiza la transformación radical del mercado laboral ante el avance de la inteligencia artificial generativa y la "escalera rota del talento".'
      }
    },
    {
      id: 'strategic-decisions',
      category: 'strategy',
      date: '2022',
      readTime: { en: '1 min read', es: '1 min de lectura' },
      image: 'images/strategic-decisions.jpg',
      en: {
        tag: 'Strategy',
        title: 'Strategic Decisions in Times of Change',
        desc: 'Exploring agility, foresight, and innovation in organizational decision-making for sustained growth and competitive advantage.'
      },
      es: {
        tag: 'Estrategia',
        title: 'Decisiones Estratégicas en Tiempos de Cambio',
        desc: 'Explorando la agilidad, la previsión y la innovación en la toma de decisiones organizacionales para un crecimiento sostenido.'
      }
    },
    {
      id: 'machine-learning',
      category: 'physics',
      date: '2025',
      readTime: { en: '1 min read', es: '1 min de lectura' },
      image: 'images/machine-learning.png',
      en: {
        tag: 'Physics / AI',
        title: 'Machine Learning & 2024 Nobel Prize in Physics',
        desc: 'How machine learning is revolutionizing modern physics through innovative research, highlighting AI-driven approaches.'
      },
      es: {
        tag: 'Física / IA',
        title: 'Machine Learning y Premio Nobel de Física 2024',
        desc: 'Cómo el aprendizaje automático está revolucionando la física moderna a través de la investigación innovadora y los enfoques impulsados por IA.'
      }
    },
    {
      id: 'markov-montecarlo',
      category: 'physics',
      date: '2026',
      readTime: { en: '1 min read', es: '1 min de lectura' },
      image: 'images/markov-montecarlo.png',
      en: {
        tag: 'Math & Risk',
        title: 'Markov Chains & Monte Carlo Method',
        desc: 'Discover how mathematical models predict weather or analyze stock markets using randomness to solve complex engineering and financial problems.'
      },
      es: {
        tag: 'Matemática y Riesgo',
        title: 'Cadenas de Markov y Método Monte Carlo',
        desc: 'Descubre cómo los modelos matemáticos predicen el clima o analizan la bolsa, usando el azar para resolver problemas complejos y tomar decisiones.'
      }
    },
    {
      id: 'qatar',
      category: 'strategy',
      date: '2026',
      readTime: { en: '1 min read', es: '1 min de lectura' },
      image: 'images/qatar.jpg',
      en: {
        tag: 'Geopolitics',
        title: 'The Day Qatar Burned',
        desc: 'Analysis of the global energy crisis of March 2026, triggered by the attacks on Ras Laffan facilities and the Strait of Hormuz blockade.'
      },
      es: {
        tag: 'Geopolítica',
        title: 'El Día que Qatar Ardió',
        desc: 'Análisis de la crisis energética mundial de marzo de 2026, desencadenada por los ataques en Ras Laffan y el bloqueo del Estrecho de Ormuz.'
      }
    },
    {
      id: 'elegir-pareja',
      category: 'strategy',
      date: '2025',
      readTime: { en: '1 min read', es: '1 min de lectura' },
      image: 'images/elegir-pareja.png',
      en: {
        tag: 'Leadership',
        title: 'How to Choose a Partner',
        desc: 'Practical advice and reflections on emotional compatibility, communication, and values to make conscious decisions in personal relationships.'
      },
      es: {
        tag: 'Liderazgo',
        title: 'Cómo Elegir Pareja',
        desc: 'Consejos prácticos y reflexiones sobre compatibilidad emocional, comunicación y valores para tomar decisiones conscientes en relaciones.'
      }
    },
    {
      id: 'epistemology',
      category: 'physics',
      date: '2025',
      readTime: { en: '1 min read', es: '1 min de lectura' },
      image: 'images/epistemology.png',
      en: {
        tag: 'Philosophy',
        title: 'Epistemology & National Development',
        desc: 'Presentation for Inventor, Scientist, and Researcher Day at the College of Engineers of Peru, analyzing the role of scientific knowledge.'
      },
      es: {
        tag: 'Filosofía',
        title: 'Epistemología y Desarrollo Nacional',
        desc: 'Exposición por el Día del Inventor, Científico e Investigador en el Colegio de Ingenieros del Perú, analizando el rol del conocimiento científico.'
      }
    },
    {
      id: 'fertilizantes',
      category: 'strategy',
      date: '2022',
      readTime: { en: '6 min read', es: '6 min de lectura' },
      image: 'images/fertilizantes.png',
      en: {
        tag: 'Geopolitics',
        title: 'Fertilizer Crisis & Famine Risks in Peru',
        desc: 'Analysis of agricultural vulnerability and international supply chain disruptions affecting national food security.'
      },
      es: {
        tag: 'Geopolítica',
        title: 'Crisis de Fertilizantes y Riesgo de Hambruna en Perú',
        desc: 'Análisis de la vulnerabilidad agrícola nacional y las interrupciones en la cadena de suministro internacional que afectan la seguridad alimentaria.'
      }
    },
    {
      id: 'ai-business',
      category: 'ai',
      date: '2021',
      readTime: { en: '1 min read', es: '1 min de lectura' },
      image: 'images/ai-business.jpg',
      en: {
        tag: 'AI & Work',
        title: 'Artificial Intelligence in Business',
        desc: 'Utilizing probability distributions (Normal, LogNormal, Triangular) in optimization models for supply chains and call options in mining.'
      },
      es: {
        tag: 'IA y Trabajo',
        title: 'Inteligencia Artificial en los Negocios',
        desc: 'Uso de distribuciones de probabilidad (Normal, LogNormal, Triangular) en modelos de optimización de cadena de suministro y opciones financieras en minería.'
      }
    },
    {
      id: 'investment-models',
      category: 'ai',
      date: '2021',
      readTime: { en: '1 min read', es: '1 min de lectura' },
      image: 'images/investment-models.jpg',
      en: {
        tag: 'Math & Risk',
        title: 'Investment Models & Monte Carlo Risk Measures',
        desc: 'Applying Monte Carlo simulation to predict financial performance and analyze potential investment returns under uncertainty.'
      },
      es: {
        tag: 'Matemática y Riesgo',
        title: 'Modelos de Inversión y Medidas de Riesgo con Monte Carlo',
        desc: 'Aplicación de la simulación Monte Carlo para predecir el rendimiento financiero y analizar retornos potenciales bajo incertidumbre.'
      }
    },
    {
      id: 'quantum-advances',
      category: 'physics',
      date: '2025',
      readTime: { en: '1 min read', es: '1 min de lectura' },
      image: 'images/quantum-advances.png',
      en: {
        tag: 'Physics',
        title: 'Quantum Mechanics: Scientific Advances',
        desc: 'Exploring the latest updates in quantum mechanics and their disruptive impact on computing, energy, and communication.'
      },
      es: {
        tag: 'Física',
        title: 'Mecánica Cuántica: Avances Científicos',
        desc: 'Explorando los últimos avances en mecánica cuántica y su impacto disruptivo en la computación, energía y telecomunicaciones.'
      }
    }
  ];

  const categories = [
    { id: 'all', en: 'All', es: 'Todos' },
    { id: 'physics', en: 'Physics & Math', es: 'Física y Matemática' },
    { id: 'ai', en: 'AI & Technology', es: 'IA y Tecnología' },
    { id: 'strategy', en: 'Strategy & Geopolitics', es: 'Estrategia y Geopolítica' }
  ];

  let activeCategory = 'all';

  const renderTabs = () => {
    const tabsContainer = document.getElementById('pubTabs');
    if (!tabsContainer) return;
    
    tabsContainer.innerHTML = categories.map(cat => {
      const label = currentLang === 'en' ? cat.en : cat.es;
      const activeClass = cat.id === activeCategory ? 'active' : '';
      return `<button class="pub-tab ${activeClass}" data-category="${cat.id}">${label}</button>`;
    }).join('');
    
    // Add click listeners to tabs
    tabsContainer.querySelectorAll('.pub-tab').forEach(button => {
      button.addEventListener('click', () => {
        activeCategory = button.getAttribute('data-category');
        renderTabs();
        renderArticles();
      });
    });
  };

  const renderArticles = () => {
    const gridContainer = document.getElementById('pubGrid');
    if (!gridContainer) return;
    
    const filtered = activeCategory === 'all' 
      ? publications 
      : publications.filter(pub => pub.category === activeCategory);
      
    gridContainer.innerHTML = filtered.map((pub, index) => {
      const data = currentLang === 'en' ? pub.en : pub.es;
      const readVal = currentLang === 'en' ? pub.readTime.en : pub.readTime.es;
      
      return `
        <div class="pub-card" style="animation-delay: ${index * 0.05}s">
          <div class="pub-card-image">
            <img src="${pub.image}" alt="${data.title}">
          </div>
          <div class="pub-card-content">
            <span class="pub-card-tag">${data.tag}</span>
            <h3 class="pub-card-title">${data.title}</h3>
            <p class="pub-card-desc">${data.desc}</p>
            <div class="pub-card-meta">
              <span>📅 ${pub.date}</span>
              <span>⏱️ ${readVal}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  };

  // ---- Navbar scroll effect ----
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });

  // ---- Hamburger menu ----
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });
  
  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // ---- Hero particles ----
  const particlesContainer = document.getElementById('heroParticles');
  if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (Math.random() * 6 + 5) + 's';
      particle.style.width = (Math.random() * 3 + 1) + 'px';
      particle.style.height = particle.style.width;
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      particlesContainer.appendChild(particle);
    }
  }

  // ---- Counter animation ----
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.ceil(current) + '+';
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target + '+';
          }
        };
        
        updateCounter();
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => counterObserver.observe(counter));

  // ---- Scroll reveal ----
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach(el => revealObserver.observe(el));

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ---- Contact form ----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Simple validation
      if (!data.name || !data.email) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Show success message
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = '✓ Message Sent!';
      btn.style.background = 'linear-gradient(135deg, #2ec4b6, #1a9e93)';
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        contactForm.reset();
      }, 3000);
    });
  }

  // ---- Language toggle (EN/ES) ----
  const translations = {
    es: {
      // Navigation
      nav_about: 'Sobre Mí',
      nav_expertise: 'Especialidades',
      nav_publications: 'Publicaciones',
      nav_books: 'Libros',
      nav_webinars: 'Webinars',
      nav_contact: 'Contacto',
      nav_articles: 'Artículos',
      nav_models: 'Modelos',
      lang_toggle_title: 'Change to English',

      // Hero
      hero_subtitle: 'Doctor en Física',
      hero_desc: 'Distinguido físico de la Universidad Nacional de La Plata, Argentina. Graduado en Negociación y Liderazgo de la Universidad de Harvard. Investigador científico y gerente fundador en proyectos de energía nuclear.',
      hero_cta_contact: 'Contacto',
      hero_cta_pub: 'Ver Publicaciones',
      stat_experience: 'Años de Experiencia',
      stat_publications: 'Publicaciones',
      stat_conferences: 'Conferencias',
      hero_badge: 'Universidad de<br>Harvard',

      // About
      about_label: 'Sobre Mí',
      about_title: 'Conectando Ciencia, Estrategia y Liderazgo',
      about_p1: 'El Dr. Jorge Muro Arbulú es un distinguido físico de la Universidad Nacional de La Plata, Argentina, con un grado en Negociación y Liderazgo de la Universidad de Harvard. Su combinación única de rigor científico y liderazgo estratégico ha moldeado su carrera en energía nuclear, inteligencia artificial y consultoría empresarial internacional.',
      about_p2: 'Como investigador científico del Instituto Peruano de Energía Nuclear y gerente fundador de la Oficina de Proyectos Nucleares del Servicio Industrial de la Marina (SIMA Perú), el Dr. Muro aporta una experiencia incomparable a cada proyecto.',
      cred_phd_title: 'Doctorado en Física',
      cred_phd_desc: 'Universidad Nacional de La Plata, Argentina',
      cred_harv_title: 'Negociación y Liderazgo',
      cred_harv_desc: 'Universidad de Harvard, EE. UU.',
      cred_nuclear_title: 'Investigación de Energía Nuclear',
      cred_nuclear_desc: 'Instituto Peruano de Energía Nuclear (IPEN)',

      // Expertise
      expertise_label: 'Especialidades',
      expertise_title: 'Áreas de Especialización',
      expertise_desc: 'Combinando física teórica, ciencia de datos y liderazgo estratégico para resolver desafíos complejos del mundo real.',
      exp1_title: 'Mecánica Cuántica',
      exp1_desc: 'Investigación en mecánica cuántica y sus aplicaciones prácticas en computación, energía y comunicaciones. Explorando los últimos avances que revolucionan la ciencia y la tecnología.',
      exp2_title: 'Energía Nuclear',
      exp2_desc: 'Gerente fundador de la Oficina de Proyectos Nucleares en SIMA Perú. Amplia experiencia en investigación de energía nuclear, gestión de proyectos y servicios de asesoría internacional.',
      exp3_title: 'Inteligencia Artificial',
      exp3_desc: 'Aplicación de IA, aprendizaje automático y distribuciones de probabilidad en modelos de optimización empresarial. Análisis del impacto de la IA en el futuro del trabajo.',
      exp4_title: 'Métodos de Monte Carlo',
      exp4_desc: 'Experto en simulación Monte Carlo para modelos financieros, pronóstico de riesgos, análisis de inversiones y toma de decisiones bajo incertidumbre.',
      exp5_title: 'Negociación y Liderazgo',
      exp5_desc: 'Experto en negociación y liderazgo formado en Harvard. Asesor de empresas internacionales en negociaciones complejas, resolución de conflictos y toma de decisiones estratégicas.',
      exp6_title: 'Investigación Científica',
      exp6_desc: 'Amplia trayectoria como investigador científico aplicando principios de física para resolver problemas del mundo real. Autor publicado en epistemología y desarrollo nacional.',

      // Publications Header
      pub_label: 'Investigación y Artículos',
      pub_title: 'Últimas Publicaciones',

      // Books
      books_label: 'Obras Publicadas',
      books_title: 'Libros y Publicaciones',
      book1_title: 'Toma de Decisiones bajo Incertidumbre',
      book1_desc: 'Una guía completa para aplicar métodos de Monte Carlo, distribuciones de probabilidad y modelos estadísticos para la toma de decisiones estratégicas en entornos complejos e inciertos.',
      book2_title: 'El Conflicto Perú - Ecuador: La Historia No Contada',
      book2_desc: 'Un análisis sin precedentes de la resolución de 1998 del conflicto territorial entre Perú y Ecuador, combinando la metodología del Proyecto de Negociación de Harvard.',
      books_cta: 'Consultar sobre Libros',

      // Webinars
      webinars_label: 'Eventos Online',
      webinars_title: 'Webinars y Conferencias',
      webinars_desc: 'Únase a las conferencias del Dr. Muro sobre mecánica cuántica, IA, liderazgo y toma de decisiones estratégicas.',
      web1_title: 'Mecánica Cuántica: Avances en Ciencia y Tecnología',
      web1_desc: 'Explore los últimos avances en mecánica cuántica y su impacto en computación, energía y comunicaciones.',
      web2_title: 'Proyectos con Métodos Monte Carlo',
      web2_desc: 'Aplicaciones prácticas del método Monte Carlo en toma de decisiones y pronóstico de riesgos para gestión de proyectos.',
      web3_title: 'Inteligencia Artificial en Negocios',
      web3_desc: 'Uso de distribuciones de probabilidad para modelos de optimización en cadena de suministro y escenarios de inversión minera.',

      // Contact
      contact_label: 'Contacto',
      contact_title: 'Trabajemos Juntos',
      contact_desc: 'Comuníquese para consultoría, conferencias, colaboraciones de investigación o servicios de asesoría empresarial.',
      contact_loc: 'Ubicación',
      contact_loc_value: 'Lima, Perú',
      contact_email_label: 'Correo',
      contact_web: 'Sitio Web',
      form_name: 'Nombre Completo',
      form_email: 'Correo Electrónico',
      form_subject: 'Asunto',
      form_message: 'Mensaje',
      form_submit: 'Enviar Mensaje',

      // Footer
      footer_about: 'Doctor en Física de la Universidad Nacional de La Plata, Argentina. Graduado en Negociación y Liderazgo de la Universidad de Harvard. Investigador científico y gerente fundador en energía nuclear.',
      footer_nav: 'Navegación',
      footer_resources: 'Recursos',
      footer_topics: 'Temas',
      footer_rights: '© 2026 Jorge Muro. Todos los derechos reservados. Lima, Perú',
      footer_design: 'Diseñado con ✨ precisión',
      whatsapp_title: 'Chatear por WhatsApp'
    },
    en: {
      // Navigation
      nav_about: 'About',
      nav_expertise: 'Expertise',
      nav_publications: 'Publications',
      nav_books: 'Books',
      nav_webinars: 'Webinars',
      nav_contact: 'Contact',
      nav_articles: 'Articles',
      nav_models: 'Models',
      lang_toggle_title: 'Cambiar a Español',

      // Hero
      hero_subtitle: 'Doctor in Physics',
      hero_desc: 'Distinguished physicist from the National University of La Plata, Argentina. Graduate in Negotiation & Leadership from Harvard University. Scientific researcher and founding manager in nuclear energy projects.',
      hero_cta_contact: 'Get In Touch',
      hero_cta_pub: 'View Publications',
      stat_experience: 'Years Experience',
      stat_publications: 'Publications',
      stat_conferences: 'Conferences',
      hero_badge: 'Harvard<br>University',

      // About
      about_label: 'About',
      about_title: 'Bridging Science, Strategy & Leadership',
      about_p1: 'Dr. Jorge Muro Arbulú is a distinguished physicist from the National University of La Plata, Argentina, with a graduate degree in Negotiation and Leadership from Harvard University. His unique combination of scientific rigor and strategic leadership has shaped his career across nuclear energy, artificial intelligence, and international business consulting.',
      about_p2: 'As a scientific researcher at the Peruvian Institute of Nuclear Energy and founding manager of the Nuclear Projects Office at the Industrial Service of the Navy (SIMA Peru), Dr. Muro brings unparalleled expertise to every endeavor.',
      cred_phd_title: 'Ph.D. in Physics',
      cred_phd_desc: 'National University of La Plata, Argentina',
      cred_harv_title: 'Negotiation & Leadership',
      cred_harv_desc: 'Harvard University, USA',
      cred_nuclear_title: 'Nuclear Energy Research',
      cred_nuclear_desc: 'Peruvian Institute of Nuclear Energy (IPEN)',

      // Expertise
      expertise_label: 'Expertise',
      expertise_title: 'Areas of Specialization',
      expertise_desc: 'Combining theoretical physics, data science, and strategic leadership to solve complex real-world challenges.',
      exp1_title: 'Quantum Mechanics',
      exp1_desc: 'Research in quantum mechanics and its practical applications in computing, energy, and communications. Exploring the latest advances revolutionizing science and technology.',
      exp2_title: 'Nuclear Energy',
      exp2_desc: 'Founding manager of the Nuclear Projects Office at SIMA Peru. Extensive experience in nuclear energy research, project management, and international advisory services.',
      exp3_title: 'Artificial Intelligence',
      exp3_desc: 'Application of AI, machine learning, and probability distributions in business optimization models. Analysis of AI\'s impact on the future of work and knowledge management.',
      exp4_title: 'Monte Carlo Methods',
      exp4_desc: 'Expert in Monte Carlo simulation for financial models, risk forecasting, investment analysis, and decision-making under uncertainty. Using computational algorithms for strategic outcomes.',
      exp5_title: 'Negotiation & Leadership',
      exp5_desc: 'Harvard-trained negotiation and leadership expert. Advisor to international companies on complex negotiations, conflict resolution, and strategic decision-making in times of change.',
      exp6_title: 'Scientific Research',
      exp6_desc: 'Extensive background as a scientific researcher applying physics principles to solve real-world problems. Published author on epistemology, national development, and applied science.',

      // Publications Header
      pub_label: 'Research & Articles',
      pub_title: 'Latest Publications',

      // Books
      books_label: 'Published Works',
      books_title: 'Books & Publications',
      book1_title: 'Decision Making Under Uncertainty',
      book1_desc: 'A comprehensive guide to applying Monte Carlo methods, probability distributions, and statistical models for strategic decision-making in complex, uncertain environments. Essential reading for managers, engineers, and researchers.',
      book2_title: 'The Peru - Ecuador Conflict: The Untold Story',
      book2_desc: 'An unprecedented analysis of the 1998 resolution of the territorial conflict between Peru and Ecuador, combining the Harvard Negotiation Project methodology with deep geopolitical insight. A unique perspective on shifting from positions to underlying interests.',
      books_cta: 'Inquire About Books',

      // Webinars
      webinars_label: 'Online Events',
      webinars_title: 'Webinars & Conferences',
      webinars_desc: 'Join Dr. Muro\'s lectures on quantum mechanics, AI, leadership, and strategic decision-making.',
      web1_title: 'Quantum Mechanics: Advances in Science & Technology',
      web1_desc: 'Explore the latest advances in quantum mechanics and their impact on computing, energy, and communications.',
      web2_title: 'Projects with Monte Carlo Methods',
      web2_desc: 'Practical applications of the Monte Carlo method in decision-making and risk forecasting for project management.',
      web3_title: 'Artificial Intelligence in Business',
      web3_desc: 'Using probability distributions for optimization models in supply chain and mining investment scenarios.',

      // Contact
      contact_label: 'Get in Touch',
      contact_title: 'Let\'s Work Together',
      contact_desc: 'Reach out for consulting, speaking engagements, research collaborations, or business advisory services.',
      contact_loc: 'Location',
      contact_loc_value: 'Lima, Peru',
      contact_email_label: 'Email',
      contact_web: 'Website',
      form_name: 'Full Name',
      form_email: 'Email Address',
      form_subject: 'Subject',
      form_message: 'Message',
      form_submit: 'Send Message',

      // Footer
      footer_about: 'Doctor in Physics from the National University of La Plata, Argentina. Graduate in Negotiation & Leadership from Harvard University. Scientific researcher and founding manager in nuclear energy.',
      footer_nav: 'Navigation',
      footer_resources: 'Resources',
      footer_topics: 'Topics',
      footer_rights: '© 2026 Jorge Muro. All rights reserved. Lima, Peru',
      footer_design: 'Designed with ✨ precision',
      whatsapp_title: 'Chat on WhatsApp'
    }
  };

  let currentLang = 'en';
  const langToggle = document.getElementById('langToggle');
  
  const updateDOMTranslations = () => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[currentLang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[currentLang][key];
        } else if (translations[currentLang][key].includes('<')) {
          el.innerHTML = translations[currentLang][key];
        } else {
          el.textContent = translations[currentLang][key];
        }
      }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (translations[currentLang][key]) {
        el.setAttribute('title', translations[currentLang][key]);
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (translations[currentLang][key]) {
        el.setAttribute('aria-label', translations[currentLang][key]);
      }
    });
  };

  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    langToggle.textContent = currentLang === 'en' ? '🌐 EN | ES' : '🌐 ES | EN';
    
    updateDOMTranslations();
    renderTabs();
    renderArticles();
    
    // Update HTML lang
    document.documentElement.lang = currentLang;
  });

  // Render publications initially
  renderTabs();
  renderArticles();

  // ---- Active nav link on scroll ----
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = navLinks.querySelector(`a[href="#${id}"]`);
      
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          link.style.color = 'var(--gold-400)';
        } else {
          link.style.color = '';
        }
      }
    });
  });

  // ---- Parallax effect on hero ----
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero-bg img');
    if (hero && scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });
});
