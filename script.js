/* ============================================
   Jorge Muro - Landing Page JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Publications Data ----
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
      pdfLink: 'https://drive.google.com/file/d/1iPWRU-EyuyIV_O37vQ4g8BbWz5j4Jlc9/view?usp=sharing',
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
          "El rápido avance de la inteligencia artificial generativa está transformando el mercado laboral. Más allá del temor común al desempleo, esta transición presenta una crisis estructural para los modelos pirambidales de formación en empresas de tecnología y consultoría.",
          "Tradicionalmente, los profesionales junior adquieren experiencia realizando tareas repetitivas. Al automatizarse estas tareas, la 'escalera del talento' se rompe, arriesgando una futura escasez de expertos senior capaces de supervisar los resultados de la IA.",
          "El criterio humano y la supervisión técnica siguen siendo esenciales. Las organizaciones deben rediseñar sus programas de capacitación para garantizar la transferencia de conocimientos en la era de la automatización."
        ]
      }
    },


    {
      id: 'markov-montecarlo',
      category: 'physics',
      date: '2026',
      readTime: { en: '1 min read', es: '1 min de lectura' },
      image: 'images/markov-montecarlo.png',
      pdfLink: 'https://drive.google.com/file/d/1YBjvFmIByX7sXqmBOni_PRlRjWSfOyUb/view?usp=sharing',
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
      pdfLink: 'https://drive.google.com/file/d/1Bmqz-c6ItMFxyRNSP4NSkIImEivtTfN6/view?usp=sharing',
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
      id: 'models',
      category: 'physics',
      date: '2024',
      readTime: { en: '1 min read', es: '1 min de lectura' },
      image: 'images/models.jpg',
      pdfLink: {
        en: 'https://drive.google.com/file/d/1i9b9wVyYNdidtEKSR1k1QEOOUlNxDQ1m/view?usp=sharing',
        es: 'https://drive.google.com/file/d/1gk3ZRkhni5mu59GlVgFwLoUTQL3SaP1l/view?usp=sharing'
      },
      en: {
        tag: 'Models',
        title: 'Models',
        desc: 'Dr. Muro presents a collection of mathematical models, AI automation algorithms, and business process optimization frameworks.',
        content: [
          "Mathematical modeling and automation frameworks form the backbone of modern enterprise efficiency, enabling companies to predict outcomes and optimize resources under uncertainty.",
          "Through a structured collection of models, Dr. Muro highlights practical applications of algorithms, no-code integrations, and artificial intelligence in scaling operational productivity and automating complex business pipelines.",
          "Access the full documentation and repository of models to see detailed structures, equations, and implementation guidelines."
        ]
      },
      es: {
        tag: 'Modelos',
        title: 'Modelos',
        desc: 'El Dr. Muro presenta una colección de modelos matemáticos, algoritmos de automatización con IA y marcos de optimización de procesos.',
        content: [
          "El modelado matemático y los marcos de automatización constituyen la columna vertebral de la eficiencia empresarial moderna, permitiendo predecir resultados y optimizar recursos bajo incertidumbre.",
          "A través de una colección estructurada de modelos, el Dr. Muro destaca aplicaciones prácticas de algoritmos, integraciones no-code e inteligencia artificial para escalar la productividad operativa y automatizar flujos complejos.",
          "Acceda a la documentación completa y al repositorio de modelos para ver las estructuras detalladas, ecuaciones y pautas de implementación."
        ]
      }
    },


    {
      id: 'fertilizantes',
      category: 'strategy',
      date: '2022',
      readTime: { en: '8 min read', es: '8 min de lectura' },
      image: 'images/fertilizantes.png',
      en: {
        tag: 'Geopolitics',
        title: 'Fertilizer Crisis & Famine Risks in Peru',
        desc: 'Analysis of agricultural vulnerability and international supply chain disruptions affecting national food security.',
        content: [
          "As of April 2022, Peru's fertilizer deficit reached 180,000 tons of urea. Consequently, the national food outlook for 2022 registered an accumulated inflation rate of 3.15% by April, with the FAO projecting global food price increases of 8% to 22% for the remainder of the year.",
          "It is little known that it was not the writings of Rousseau and the encyclopedists that triggered the French Revolution (1789), but famine. Years of climate stress, financial instability, and political conflict converged brutally in 1788 and 1789. A severe drought in the spring of 1788 left basic crops stunted and withered, followed by one of the most severe hailstorms in recorded history on July 13, which devastated fields and vineyards. Grain shortages caused prices to skyrocket, forcing families that previously spent 50% of their income on food to allocate over 90% of their household budget to it.",
          "Earlier, from June 1783 and lasting eight months, a fissure in the Laki volcano in Iceland spewed 120 million tons of sulfur dioxide into the atmosphere. Crops and livestock were lost, prompting John Adams, future U.S. President and then ambassador in Europe, to write of the situation in France: 'The country is a heap of ashes. Grass is scarcely to be seen and all kinds of grain is short, thin, pale and feeble while the flax is quite dead... I pity these people from my soul.'",
          "Ultimately, it was the famine and a sequence of concurrent events that unleashed the French Revolution, in which 16,594 French citizens, including the king and queen, were guillotined. This historical precedent serves as a stark reminder that famine can act as a catalyst for severe social upheaval.",
          "Following the Russia-Ukraine war, rising gas prices triggered an international energy crisis, prompting the temporary closure of several fertilizer plants. Coupled with reduced gas and fertilizer exports from the United States and China, and maritime freight costs multiplying by at least five, the cost of both imports and exports soared.",
          "Another critical factor was China's zero-COVID policy. During the lock-down, Shanghai (representing over 3% of China's GDP and 10% of its total trade since 2018) was completely isolated, shutting down vital port infrastructure. Furthermore, China confined 400 million residents across 45 cities, severely disrupting global supply chains and port operations.",
          "According to the BBC, vaccination rates among the vulnerable over-80 demographic in China remained much lower than in other age groups. The country relied heavily on domestic vaccines, which struggled against newer variants. While strict lockdowns eventually eased, President Xi Jinping's insistence on zero-COVID policies hampered economic prosperity, although it did not threaten the government's stability.",
          "This caused widespread shortages of products and materials, including fertilizers. The surge in urea prices affected not only agriculture but also logistics: urea is a key component in producing diesel exhaust fluid, which is required to reduce emissions in diesel-powered transport vehicles.",
          "Consequently, forecasts warned of inflation, poverty, and severe food supply shortages. While the implications for national defense remain unpredictable, the effects on national development are clearly disastrous. This price hike struck Peru amidst an existing food insecurity crisis, which had worsened during the pandemic, leaving approximately 15.5 million Peruvians unable to access three healthy meals a day.",
          "Additionally, the World Bank noted that rising thermal coal prices in China led to power rationing in several provinces, forcing fertilizer factories to scale back production.",
          "Famine is a critical national security threat. Food is the most basic human need. Given the loss of state authority in areas like Las Bambas, Apumayo, and Cuajone, protests and riots could become uncontainable, generating widespread social lawlessness (anomie).",
          "Immediate solutions must include the urgent procurement of fertilizers and urea reactors. Although installation and startup take time, utilizing local natural gas resources ensures long-term availability. A dual-set urea manufacturing plant costs approximately US $10,000 with a throughput of 8,000 kg/hour, which is suitable for producing ammonium bicarbonate, ammonium chloride, and other key agricultural inputs. Isla guano is not a viable long-term solution as it is finite and can only fertilize 1% to 5% of arable land.",
          "Peruvian Constitution: Article 1.- The defense of the human person and respect for their dignity are the supreme end of society and the State."
        ]
      },
      es: {
        tag: 'Geopolítica',
        title: 'Crisis de Fertilizantes y Riesgo de Hambruna en Perú',
        desc: 'Análisis de la vulnerabilidad agrícola nacional y las interrupciones en la cadena de suministro internacional que afectan la seguridad alimentaria.',
        content: [
          "A abril de 2022, el déficit de fertilizantes fue de 180,000 toneladas de urea. Así entonces, el panorama de alimentación en el Perú, en 2022, tiene un índice de inflación acumulada a abril de 2022 de 3.15% y la FAO calcula que, en lo que queda del 2022, el precio de estos alimentos subirá entre 8% y 22% más en todo el mundo.",
          "Es poco conocido que no fueron los escritos de Rousseau y los enciclopedistas los que gatillaron la Revolución Francesa (1789). 'Los años de estrés climático, inestabilidad financiera y conflicto político convergieron brutalmente en 1788 y 1789. Una severa sequía en la primavera de 1788 dejó los cultivos básicos paralizados y marchitos. El 13 de julio de ese año, una de las tormentas de granizo más severas de la historia registrada azotó Francia. La tormenta cortó una franja de destrucción que golpeó y destruyó campos y viñedos. La escasez de cereales hizo que los precios se dispararan, y las familias que antes gastaban el 50% de sus ingresos en alimentos ahora dedicaban más del 90% de su presupuesto familiar'.",
          "Desde junio de 1783 y durante ocho meses, una fisura en el volcán Laki, Islandia, arrojó 120 millones de toneladas de dióxido de azufre a la atmósfera. Cosechas, ganado, etc., fueron perdidos lo que ocasionó que el futuro presidente de EE. UU. y embajador en Europa, John Adams escribiese sobre la situación en Francia: 'El país es un montón de cenizas. La hierba apenas se ve y todo tipo de grano es corto, delgado, pálido y débil mientras que el lino está bastante muerto... compadezco a esta gente de mi alma'.",
          "Entonces fue la hambruna y una serie de acontecimientos concurrentes, lo que desató la Revolución Francesa en la que 16,594 franceses, rey y reina incluidos, fueron decapitados. Sirva este ejemplo histórico para tener en cuenta que una hambruna puede ser la catalizadora de 'efervescencias sociales', cuando menos.",
          "Como consecuencia de la guerra Rusia-Ucrania, hay un aumento del precio del gas y una crisis energética internacional. También hubo un cierre temporal de algunas plantas de fertilizantes. Sumemos a ello la reducción de exportaciones de gas y fertilizantes en Estados Unidos y China y el incremento de fletes marítimos (multiplicados por cinco, cuando menos), lo que encarece todo lo que se exporta o importa.",
          "Otro factor de la mayor importancia es la política cero COVID impuesta por el gobierno de China, que aún no logra controlar la variante Ómicron del SARS-CoV-2 según vemos. En este confinamiento en China se decidió prolongar indefinidamente el cierre total de la ciudad cuando los casos aumentaron a más de 13.000 al día a principios de abril. El 1 de abril, las autoridades de Shanghái bloquearon toda la ciudad para detener la propagación del virus y pidieron a sus más de 25 millones de residentes que se quedaran en casa, siendo que Shanghái es responsable de más del 3% del PBI de China, y de más del 10% del comercio total de China desde 2018. Adicionalmente, China tiene confinados a 400 millones de habitantes de 45 ciudades, Shanghái en primer lugar. Es Indudable que el comercio mundial se ha resentido porque toda la infraestructura portuaria, o buena parte de ella, está cerrada.",
          "Según la misma fuente [BBC] las tasas de vacunación entre los mayores de 80 años -que se encuentran entre los más vulnerables- siguen siendo mucho más bajas que las de otros grupos de edad. Otro problema es que China ha dependido en gran medida de las vacunas producidas en el país, que han tenido problemas con la última variante. El estricto bloqueo de Shanghái para frenar un brote de COVID está por fin amainando. Pero China está lejos de alcanzar sus objetivos de cero virus. Se han registrado nuevos brotes en Pekín y Tianjin. El Presidente Xi Jinping está perjudicando la prosperidad de China, en parte por su insistencia en erradicar un virus inerradicable. Pero incluso mientras aumentan las tensiones en torno a sus políticas contra el virus, hay pocos indicios de que se produzcan desafíos reales al gobierno de Xi.",
          "Esto ha ocasionado que haya escasez de productos e insumos de todo tipo, no siendo los fertilizantes la excepción, con lo que las cadenas de suministro están siendo amenazadas pues el aumento en el precio de este componente químico no solo se está notando en la agricultura: la urea también es clave para producir el fluido de escape diésel, una solución que se utiliza para reducir las emisiones en los automóviles que usan ese combustible [BBC, News Mundo, 9 de diciembre de 2021].",
          "Por todo lo visto, no solo se pronostica inflación e incremento de pobreza sino también un posible desabastecimiento y encarecimiento alimentario con todo lo que eso conlleva. Las implicancias a la defensa nacional no son predecibles pero los efectos en cuanto al desarrollo nacional son, previsiblemente, desastrosos en cuanto a hambruna. Este aumento de precios en el Perú se enmarca en un contexto de inseguridad alimentaria, que se ha agudizado en los países de América Latina a raíz de la pandemia. Mariana Escobar, representante de la FAO en el Perú indicó que, a causa de la pandemia unos 15.5 millones de peruanos quedaron en esa situación. Es decir, no pueden acceder a tres comidas diarias y llevar una vida activa y saludable. La estimación de la FAO es que el hambre siga extendiéndose.",
          "Adicionalmente, para agravar las cosas, según el Banco Mundial, el aumento de los precios del carbón térmico en China provocó un racionamiento del uso de electricidad en algunas provincias y obligó a las fábricas de fertilizantes a reducir la producción.",
          "La hambruna es un serio problema nacional. Mucho más que cualquier otro puesto que la alimentación es una de las necesidades básicas y vitales de nuestra especie. No se pueden descartar manifestaciones y revueltas y, dada la pérdida del principio de autoridad en el país (v.g. Las Bambas, Apumayo, Cuajone), es posible que las manifestaciones o revueltas no puedan ser contenidas lo que generaría un incremento de la anomia o ausencia de ley y la degradación y carencia de normas sociales.",
          "En lo inmediato, compra de fertilizantes en donde los hubiere. No es de descartar la compra de reactores de urea de manera urgente que, aun cuando su instalación y puesta en marcha demorará, asegurará la disponibilidad de este insumo para la agricultura. Ello porque el insumo de las plantas que fabrican urea es el gas natural que en el Perú se encuentra en diversas locaciones. Teniendo en cuenta que una planta de fabricación de urea cuesta (más de dos sets) cuesta US $10,000 con una salida por set de 8,000 kg/hora, habiendo de mayores y menores tamaños a disposición en el mercado, siendo el equipo referido equipo adecuado para fabricar bicarbonato de amonio, cloruro de amonio, sulfato de amonio, nitrato de amonio, fosfato de monoamonio, etc. No siendo el guano de las islas una opción viable dado que es finito y solo alcanzaría para el 1-5% del área agrícola cultivable, según expertos consultados.",
          "Constitución Política del Perú: Artículo 1º.- La defensa de la persona humana y el respeto de su dignidad son el fin supremo de la sociedad y del Estado."
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
      book1_cta: 'Comprar en Amazon',
      book2_cta: 'Leer Libro',

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
      footer_design: 'Diseñado por Juankal',
      whatsapp_title: 'Chatear por WhatsApp'
    },
    en: {
      // Navigation
      nav_about: 'About',
      nav_expertise: 'Expertise',
      nav_publications: 'Publications',
      nav_books: 'Books',
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
      book1_cta: 'Buy on Amazon',
      book2_cta: 'Read Book',

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
      footer_design: 'Designed by Juankal',
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

      let actionBtnHtml = '';
      if (pub.pdfLink) {
        const link = typeof pub.pdfLink === 'object' ? (currentLang === 'en' ? pub.pdfLink.en : pub.pdfLink.es) : pub.pdfLink;
        const btnLabel = currentLang === 'en' ? 'Read Full Article' : 'Ver Artículo Completo';
        actionBtnHtml = `
          <div class="modal-action-row" style="margin-top: 2.5rem; display: flex; justify-content: center; width: 100%;">
            <a href="${link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="text-decoration: none;">
              📄 ${btnLabel}
            </a>
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
        ${actionBtnHtml}
      `;
    }
  };

  const updateModalTranslations = () => {
    if (!modalBody || !modal || !modal.classList.contains('active')) return;
    renderModalContent();
  };

  const openArticleModal = (id) => {
    activeModalArticleId = id;

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
