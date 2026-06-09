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
      youtubeId: 'wt_99tXFWPM',
      en: {
        tag: 'Physics',
        title: 'Quantum Computing',
        desc: 'Dr. Muro explores the intersection of quantum mechanics and computing, covering the foundations and practical applications transforming technology.',
        content: [
          "Quantum computing represents a paradigm shift in computer science, transitioning from classical bits (0 or 1) to quantum bits or qubits. By utilizing the principles of quantum mechanics, specifically superposition and entanglement, quantum computers can process complex data structures at speeds unimaginable with classical supercomputers.",
          "Superposition allows qubits to exist in multiple states simultaneously, meaning a quantum computer can evaluate millions of possibilities at once. Entanglement creates a correlation between qubits, so the state of one qubit instantaneously influences another, exponentially increasing processing power with every added qubit.",
          "The practical applications of this technology are vast, ranging from molecular modeling for drug discovery to cryptography, financial risk analysis, and solving complex logistical optimizations. Dr. Muro explores these foundations to bridge the gap between theoretical physics and industrial implementation."
        ]
      },
      es: {
        tag: 'Física',
        title: 'Computación Cuántica',
        desc: 'El Dr. Muro explora la intersección de la mecánica cuántica y la computación, cubriendo los fundamentos y las aplicaciones prácticas.',
        content: [
          "La computación cuántica representa un cambio de paradigma en la informática, pasando de los bits clásicos (0 o 1) a los qubits. Al utilizar los principios de la mecánica cuántica, específicamente la superposición y el entrelazamiento, las computadoras cuánticas pueden procesar estructuras de datos complejas a velocidades inimaginables.",
          "La superposición permite que los qubits existan en múltiples estados simultáneamente, lo que significa que una computadora cuántica puede evaluar millones de posibilidades a la vez. El entrelazamiento crea una correlación entre qubits, aumentando exponencialmente la capacidad de cálculo con cada qubit añadido.",
          "Las aplicaciones prácticas de esta tecnología son vastas, abarcando desde el modelado molecular para el desarrollo de fármacos hasta la criptografía y la optimización logística. El Dr. Muro explora estas bases para conectar la física teórica con la aplicación industrial."
        ]
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
        desc: 'Analysis of the radical transformation of the labor market by generative AI, exploring the structural crisis and the "broken talent ladder."',
        content: [
          "The rapid advancement of generative artificial intelligence is transforming the global labor market. Beyond the common fear of job displacement, this transition presents a structural crisis for pyramidal training models in technology and consulting firms.",
          "Traditionally, junior staff gain expertise by performing repetitive, entry-level tasks. However, as AI automates these junior-level tasks, the 'talent ladder' is broken, risking a future shortage of senior experts who possess the critical judgment needed to supervise AI outputs.",
          "Human oversight, domain expertise, and technical criteria remain essential. Organizations must redesign their training programs to ensure knowledge transfer and intellectual growth in the age of automation."
        ]
      },
      es: {
        tag: 'IA y Trabajo',
        title: 'IA y el Trabajo Actual y Futuro',
        desc: 'Este artículo analiza la transformación radical del mercado laboral ante el avance de la inteligencia artificial generativa y la "escalera rota del talento".',
        content: [
          "El rápido avance de la inteligencia artificial generativa está transformando el mercado laboral. Más allá del temor común al desempleo, esta transición presenta una crisis estructural para los modelos piramidales de formación en empresas de tecnología y consultoría.",
          "Tradicionalmente, los profesionales junior adquieren experiencia realizando tareas repetitivas. Al automatizarse estas tareas, la 'escalera del talento' se rompe, arriesgando una futura escasez de expertos senior capaces de supervisar los resultados de la IA.",
          "El criterio humano y la supervisión técnica siguen siendo esenciales. Las organizaciones deben rediseñar sus programas de capacitación para garantizar la transferencia de conocimientos en la era de la automatización."
        ]
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
        desc: 'Exploring agility, foresight, and innovation in organizational decision-making for sustained growth and competitive advantage.',
        content: [
          "Making strategic choices under pressure requires a combination of analytical frameworks and behavioral insights. In times of rapid market transformation, traditional static planning models fail to predict fluid scenarios.",
          "Dr. Muro applies Harvard's negotiation methodology, focusing on identifying underlying interests rather than fixed positions. By combining this with game theory and scenario analysis, decision-makers can construct flexible pathways to absorb uncertainty.",
          "Success lies in establishing high-performance collaborative teams, breaking organizational silos, and executing decisions with agility and foresight."
        ]
      },
      es: {
        tag: 'Estrategia',
        title: 'Decisiones Estratégicas en Tiempos de Cambio',
        desc: 'Explorando la agilidad, la previsión y la innovación en la toma de decisiones organizacionales para un crecimiento sostenido.',
        content: [
          "Tomar decisiones estratégicas bajo presión requiere una combinación de marcos analíticos y conocimientos del comportamiento. En tiempos de transformación del mercado, los modelos tradicionales de planificación estática fallan.",
          "El Dr. Muro aplica la metodología de negociación de Harvard, enfocándose en identificar los intereses subyacentes en lugar de posiciones fijas. Al combinar esto con la teoría de juegos y el análisis de escenarios, se construyen caminos flexibles.",
          "El éxito radica en establecer equipos colaborativos de alto rendimiento, romper los silos organizacionales y ejecutar las decisiones con agilidad y previsión."
        ]
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
        desc: 'How machine learning is revolutionizing modern physics through innovative research, highlighting AI-driven approaches.',
        content: [
          "The awarding of the 2024 Nobel Prize in Physics to John Hopfield and Geoffrey Hinton marked a historic recognition of the deep ties between statistical physics and computer science.",
          "Hopfield networks utilize the concept of spin systems (like the Ising model in physics) to create associative memory. Similarly, Boltzmann machines apply thermodynamic probability distributions to learn patterns in data. These physical models laid the foundation for modern deep learning neural networks.",
          "This convergence of disciplines proves that understanding fundamental physics is essential for explaining how AI models learn, adapt, and scale."
        ]
      },
      es: {
        tag: 'Física / IA',
        title: 'Machine Learning y Premio Nobel de Física 2024',
        desc: 'Cómo el aprendizaje automático está revolucionando la física moderna a través de la investigación innovadora y los enfoques impulsados por IA.',
        content: [
          "La concesión del Premio Nobel de Física 2024 a John Hopfield y Geoffrey Hinton marcó un reconocimiento histórico de los lazos entre la física estadística y las ciencias de la computación.",
          "Las redes de Hopfield utilizan conceptos de sistemas de espín (como el modelo de Ising) para crear memoria asociativa. Las máquinas de Boltzmann aplican distribuciones termodinámicas para aprender patrones. Estos modelos físicos sentaron las bases del aprendizaje profundo.",
          "Esta convergencia de disciplinas demuestra que comprender la física fundamental es esencial para explicar cómo los modelos de IA aprenden, se adaptan y escalan."
        ]
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
        desc: 'Discover how mathematical models predict weather or analyze stock markets using randomness to solve complex engineering and financial problems.',
        content: [
          "Markov Chains and Monte Carlo methods (often combined as MCMC) are powerful mathematical algorithms used to simulate complex probabilistic processes under uncertainty.",
          "A Markov Chain represents a system that transitions between states based solely on the current state, ignoring past history. Monte Carlo simulation uses random sampling to calculate deterministic outcomes that are mathematically intractable.",
          "Dr. Muro details how these tools solve high-dimensional integrations, predict climate variables, analyze financial volatility, and calculate nuclear reactor shielding properties."
        ]
      },
      es: {
        tag: 'Matemática y Riesgo',
        title: 'Cadenas de Markov y Método Monte Carlo',
        desc: 'Descubre cómo los modelos matemáticos predicen el clima o analizan la bolsa, usando el azar para resolver problemas complejos y tomar decisiones.',
        content: [
          "Las cadenas de Markov y los métodos de Monte Carlo (a menudo combinados como MCMC) son algoritmos matemáticos potentes para simular procesos probabilísticos complejos bajo incertidumbre.",
          "Una cadena de Markov representa un sistema que transita entre estados basándose únicamente en el estado actual. La simulación Monte Carlo utiliza muestreo aleatorio para resolver problemas que son intratables analíticamente.",
          "El Dr. Muro detalla cómo estas herramientas resuelven integraciones de alta dimensión, predicen variables climáticas, analizan la volatilidad financiera y calculan blindajes de reactores nucleares."
        ]
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
        desc: 'Analysis of the global energy crisis of March 2026, triggered by the attacks on Ras Laffan facilities and the Strait of Hormuz blockade.',
        content: [
          "The global energy crisis of March 2026 exposed the fragility of global supply chains when maritime bottlenecks are compromised.",
          "Following unexpected disruptions at Ras Laffan facilities in Qatar and the blockade of the Strait of Hormuz, maritime traffic of liquefied natural gas (LNG) dropped by 91%. This bottleneck instantly choked off 20% of the world's natural gas and petroleum supply, triggering energy shortages and price shocks in Europe and Asia.",
          "Dr. Muro analyzes how national security and energy independence rely on redundant distribution networks, strategic stockpiling, and alternative energy infrastructures."
        ]
      },
      es: {
        tag: 'Geopolítica',
        title: 'El Día que Qatar Ardió',
        desc: 'Análisis de la crisis energética mundial de marzo de 2026, desencadenada por los ataques en Ras Laffan y el bloqueo del Estrecho de Ormuz.',
        content: [
          "La crisis energética global de marzo de 2026 expuso la fragilidad de las cadenas de suministro cuando se comprometen los cuellos de botella marítimos.",
          "Tras interrupciones en Ras Laffan en Qatar y el bloqueo del Estrecho de Ormuz, el tráfico marítimo de gas natural licuado (GNL) cayó un 91%. Este cuello de botella ahogó instantáneamente el 20% del suministro mundial de gas y petróleo.",
          "El Dr. Muro analiza cómo la seguridad nacional y la independencia energética dependen de redes de distribución redundantes y reservas estratégicas."
        ]
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
        desc: 'Practical advice and reflections on emotional compatibility, communication, and values to make conscious decisions in personal relationships.',
        content: [
          "Choosing a life partner is one of the most critical decisions a person makes, yet it is rarely approached with analytical rigor.",
          "Dr. Muro explores this decision through the lens of Optimal Stopping Theory (known as the Secretary Problem in mathematics). According to this framework, to maximize the probability of selecting the absolute best candidate, one should reject the first 37% of potential options and then select the next candidate that is better than all previous ones.",
          "While human relationships involve emotional factors and shared values, applying scientific and negotiation criteria helps individuals move away from impulsive choices toward conscious and compatible decisions."
        ]
      },
      es: {
        tag: 'Liderazgo',
        title: 'Cómo Elegir Pareja',
        desc: 'Consejos prácticos y reflexiones sobre compatibilidad emocional, comunicación y valores para tomar decisiones conscientes en relaciones.',
        content: [
          "Elegir una pareja de vida es una de las decisiones más críticas, pero rara vez se aborda con rigor analítico.",
          "El Dr. Muro explora esta elección a través de la Teoría de la Parada Óptima (conocida como el problema de la secretaria). Según este marco matemático, para maximizar la probabilidad de elegir la mejor opción, se debe rechazar el primer 37% de los candidatos y luego seleccionar al siguiente que sea mejor que los anteriores.",
          "Aunque las relaciones humanas involucran factores emocionales, la aplicación de criterios científicos ayuda a alejarse de decisiones impulsivas y avanzar hacia relaciones compatibles."
        ]
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
        desc: 'Presentation for Inventor, Scientist, and Researcher Day at the College of Engineers of Peru, analyzing the role of scientific knowledge.',
        content: [
          "True national development is not merely an economic metric; it is rooted in a country's scientific and epistemological foundation.",
          "Epistemology—the philosophy of scientific knowledge—defines how a society validates truth, conducts research, and applies technology. Developing nations often import technology without building the cognitive infrastructure to understand, maintain, and innovate upon it.",
          "Dr. Muro advocates for an educational and policy reform that fosters critical thinking, scientific method validation, and local technological autonomy as the primary drivers of sustainable economic growth."
        ]
      },
      es: {
        tag: 'Filosofía',
        title: 'Epistemología y Desarrollo Nacional',
        desc: 'Exposición por el Día del Inventor, Científico e Investigador en el Colegio de Ingenieros del Perú, analizando el rol del conocimiento científico.',
        content: [
          "El verdadero desarrollo nacional no es solo una métrica económica; está arraigado en la base científica y epistemológica de un país.",
          "La epistemología — la filosofía del conocimiento científico — define cómo una sociedad valida la verdad e innova. Las naciones en desarrollo suelen importar tecnología sin construir la infraestructura cognitiva para entenderla.",
          "El Dr. Muro aboga por una reforma educativa y política que fomente el pensamiento crítico, el método científico y la autonomía tecnológica local."
        ]
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
        desc: 'Analysis of agricultural vulnerability and international supply chain disruptions affecting national food security.',
        content: [
          "The fertilizer supply shocks of 2022 revealed the deep vulnerability of Peru's agricultural sector and national food security.",
          "Due to complete reliance on imported synthetic fertilizers (such as urea) and disruptions in global distribution networks, local crop yields faced a catastrophic drop. The threat of localized famines became a real policy challenge.",
          "Dr. Muro analyzes this crisis by calling for strategic investments in organic fertilizer production, chemical diversification, and local agricultural resilience models."
        ]
      },
      es: {
        tag: 'Geopolítica',
        title: 'Crisis de Fertilizantes y Riesgo de Hambruna en Perú',
        desc: 'Análisis de la vulnerabilidad agrícola nacional y las interrupciones en la cadena de suministro internacional que afectan la seguridad alimentaria.',
        content: [
          "La crisis de fertilizantes de 2022 reveló la profunda vulnerabilidad del sector agrícola y la seguridad alimentaria en el Perú.",
          "Debido a la total dependencia de fertilizantes sintéticos importados (como la urea) y las interrupciones en la cadena de distribución global, el rendimiento agrícola nacional enfrentó caídas severas.",
          "El Dr. Muro analiza esta crisis haciendo un llamado a inversiones estratégicas en producción de fertilizantes orgánicos y resiliencia agrícola."
        ]
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
        desc: 'Utilizing probability distributions (Normal, LogNormal, Triangular) in optimization models for supply chains and call options in mining.',
        content: [
          "Integrating artificial intelligence into business decision-making requires modeling supply chain uncertainties and demand variables.",
          "Instead of using single-point average estimates, modern business optimization models utilize continuous probability distributions (such as Normal, LogNormal, and Triangular distributions) to capture a range of possible market conditions.",
          "Dr. Muro shows how these probabilistic AI frameworks optimize procurement processes, calculate call options in mining operations, and manage logistics risks under volatile demand curves."
        ]
      },
      es: {
        tag: 'IA y Trabajo',
        title: 'Inteligencia Artificial en los Negocios',
        desc: 'Uso de distribuciones de probabilidad (Normal, LogNormal, Triangular) en modelos de optimización de cadena de suministro y opciones financieras en minería.',
        content: [
          "La integración de la inteligencia artificial en la toma de decisiones comerciales requiere modelar las incertidumbres de la cadena de suministro.",
          "En lugar de estimaciones promedio de un solo punto, los modelos de optimización utilizan distribuciones de probabilidad (como Normal, LogNormal y Triangular) para capturar el rango de condiciones del mercado.",
          "El Dr. Muro muestra cómo estos marcos probabilísticos optimizan los procesos de adquisición y gestionan los riesgos logísticos bajo curvas de demanda volátiles."
        ]
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
        desc: 'Applying Monte Carlo simulation to predict financial performance and analyze potential investment returns under uncertainty.',
        content: [
          "Quantifying risk in large financial portfolios is impossible without computationally intensive simulations.",
          "By utilizing Monte Carlo simulations, investment managers generate thousands of random price paths based on historical asset volatilities and correlations. This allows the calculation of key risk metrics like Value at Risk (VaR) and Expected Shortfall.",
          "Dr. Muro details how these stochastic models provide a realistic view of capital protection limits and expected returns in volatile market scenarios."
        ]
      },
      es: {
        tag: 'Matemática y Riesgo',
        title: 'Modelos de Inversión y Medidas de Riesgo con Monte Carlo',
        desc: 'Aplicación de la simulación Monte Carlo para predecir el rendimiento financiero y analizar retornos potenciales bajo incertidumbre.',
        content: [
          "Cuantificar el riesgo en carteras financieras es imposible sin simulaciones computacionales intensivas.",
          "Mediante simulaciones de Monte Carlo, los administradores generan miles de trayectorias de precios basadas en volatilidades históricas. Esto permite calcular métricas clave como el Valor en Riesgo (VaR).",
          "El Dr. Muro detalla cómo estos modelos estocásticos proporcionan una visión realista de los límites de protección del capital y los rendimientos esperados."
        ]
      }
    },
    {
      id: 'quantum-advances',
      category: 'physics',
      date: '2025',
      readTime: { en: '1 min read', es: '1 min de lectura' },
      image: 'images/quantum-advances.png',
      youtubeId: 'wt_99tXFWPM',
      en: {
        tag: 'Physics',
        title: 'Quantum Mechanics: Scientific Advances',
        desc: 'Exploring the latest updates in quantum mechanics and their disruptive impact on computing, energy, and communication.',
        content: [
          "The subatomic world is governed by non-intuitive mechanics that have paved the way for the second quantum revolution.",
          "Recent experimental advances in quantum coherence and error correction are bringing superconducting quantum processors closer to commercial viability. These systems operate at temperatures near absolute zero to maintain the fragile states of qubits.",
          "Understanding these advances allows us to anticipate the massive disruption that quantum communication networks and quantum cryptography will bring to cybersecurity and data transmission."
        ]
      },
      es: {
        tag: 'Física',
        title: 'Mecánica Cuántica: Avances Científicos',
        desc: 'Explorando los últimos avances en mecánica cuántica y su impacto disruptivo en la computación, energía y telecomunicaciones.',
        content: [
          "El mundo subatómico está gobernado por una mecánica no intuitiva que ha allanado el camino para la segunda revolución cuántica.",
          "Los avances experimentales en coherencia cuántica y corrección de errores acercan los procesadores superconductores a la viabilidad comercial. Estos sistemas operan a temperaturas cercanas al cero absoluto para mantener los frágiles estados de los qubits.",
          "Comprender estos avances permite anticipar la disrupción masiva que las redes de comunicación y la criptografía cuántica traerán a la ciberseguridad."
        ]
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
        <div class="pub-card" data-id="${pub.id}" style="animation-delay: ${index * 0.05}s">
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
    updateModalTranslations();
    
    // Update HTML lang
    document.documentElement.lang = currentLang;
  });

  // Render publications initially
  renderTabs();
  renderArticles();

  // ---- Article & Video Modal Logic ----
  const modal = document.getElementById('pubModal');
  const modalOverlay = document.getElementById('pubModalOverlay');
  const modalClose = document.getElementById('pubModalClose');
  const modalBody = document.getElementById('pubModalBody');
  
  let activeModalArticleId = null;
  let activeWebinarData = null;

  const renderModalContent = () => {
    if (!modalBody) return;

    if (activeModalArticleId) {
      const pub = publications.find(p => p.id === activeModalArticleId);
      if (!pub) return;

      const data = currentLang === 'en' ? pub.en : pub.es;
      const readVal = currentLang === 'en' ? pub.readTime.en : pub.readTime.es;
      
      let mediaHtml = '';
      if (pub.youtubeId) {
        mediaHtml = `
          <div class="modal-video-wrapper">
            <iframe src="https://www.youtube.com/embed/${pub.youtubeId}?autoplay=1&rel=0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
          </div>
        `;
      } else {
        mediaHtml = `
          <div class="modal-image">
            <img src="${pub.image}" alt="${data.title}">
          </div>
        `;
      }

      modalBody.innerHTML = `
        <div class="modal-header">
          <div class="modal-tag-row">
            <span class="modal-tag">${data.tag}</span>
            <span class="modal-date">📅 ${pub.date}</span>
            <span class="modal-read-time">⏱️ ${readVal}</span>
          </div>
          <h2 class="modal-title">${data.title}</h2>
        </div>
        ${mediaHtml}
        <div class="modal-text">
          ${data.content.map(p => `<p>${p}</p>`).join('')}
        </div>
      `;
    } else if (activeWebinarData) {
      const { titleKey, descKey, videoId } = activeWebinarData;
      const title = translations[currentLang][titleKey];
      const desc = translations[currentLang][descKey];
      const tagLabel = currentLang === 'en' ? 'Online Event' : 'Evento Online';

      modalBody.innerHTML = `
        <div class="modal-header">
          <div class="modal-tag-row">
            <span class="modal-tag">${tagLabel}</span>
          </div>
          <h2 class="modal-title">${title}</h2>
        </div>
        <div class="modal-video-wrapper">
          <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen></iframe>
        </div>
        <div class="modal-text">
          <p>${desc}</p>
        </div>
      `;
    }
  };

  const updateModalTranslations = () => {
    if (!modalBody || !modal || !modal.classList.contains('active')) return;

    if (activeModalArticleId) {
      const pub = publications.find(p => p.id === activeModalArticleId);
      if (!pub) return;

      const data = currentLang === 'en' ? pub.en : pub.es;
      const readVal = currentLang === 'en' ? pub.readTime.en : pub.readTime.es;

      const tagEl = modalBody.querySelector('.modal-tag');
      const readTimeEl = modalBody.querySelector('.modal-read-time');
      const titleEl = modalBody.querySelector('.modal-title');
      const textEl = modalBody.querySelector('.modal-text');

      if (tagEl) tagEl.textContent = data.tag;
      if (readTimeEl) readTimeEl.textContent = `⏱️ ${readVal}`;
      if (titleEl) titleEl.textContent = data.title;
      if (textEl) {
        textEl.innerHTML = data.content.map(p => `<p>${p}</p>`).join('');
      }
    } else if (activeWebinarData) {
      const { titleKey, descKey } = activeWebinarData;
      const title = translations[currentLang][titleKey];
      const desc = translations[currentLang][descKey];
      const tagLabel = currentLang === 'en' ? 'Online Event' : 'Evento Online';

      const tagEl = modalBody.querySelector('.modal-tag');
      const titleEl = modalBody.querySelector('.modal-title');
      const textEl = modalBody.querySelector('.modal-text');

      if (tagEl) tagEl.textContent = tagLabel;
      if (titleEl) titleEl.textContent = title;
      if (textEl) {
        textEl.innerHTML = `<p>${desc}</p>`;
      }
    }
  };

  const openArticleModal = (id) => {
    activeModalArticleId = id;
    activeWebinarData = null;

    renderModalContent();
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const openWebinarModal = (titleKey, descKey, videoId) => {
    activeModalArticleId = null;
    activeWebinarData = { titleKey, descKey, videoId };

    renderModalContent();

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    
    // Stop any playing video by clearing the iframe src
    const iframe = modalBody ? modalBody.querySelector('iframe') : null;
    if (iframe) {
      iframe.src = '';
    }
    
    activeModalArticleId = null;
    activeWebinarData = null;
  };

  // Attach modal listeners
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Event delegation for publication grid
  const gridContainer = document.getElementById('pubGrid');
  if (gridContainer) {
    gridContainer.addEventListener('click', (e) => {
      const card = e.target.closest('.pub-card');
      if (card) {
        const id = card.getAttribute('data-id');
        if (id) openArticleModal(id);
      }
    });
  }

  // Event delegation for webinars grid
  const webinarsGrid = document.querySelector('.webinars-grid');
  if (webinarsGrid) {
    webinarsGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.webinar-card');
      if (card) {
        const cards = Array.from(webinarsGrid.querySelectorAll('.webinar-card'));
        const index = cards.indexOf(card);
        if (index === 0) {
          openWebinarModal('web1_title', 'web1_desc', 'wt_99tXFWPM');
        } else if (index === 1) {
          openWebinarModal('web2_title', 'web2_desc', 'wt_99tXFWPM');
        } else if (index === 2) {
          openWebinarModal('web3_title', 'web3_desc', 'wt_99tXFWPM');
        }
      }
    });
  }

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
