// src/data/translations.ts

export const TRANSLATIONS = {
  es: {
    // Navegación
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',

    // Hero
    'hero.status': 'Activo en el sector',
    'hero.name': 'Daniel Pérez Navarro -',
    'hero.title': 'Diseño & Desarrollo ',
    'hero.title_end': ' de Sistemas y Experiencias',
    'hero.description': 'Creando proyectos inmersivos a través del diseño innovador y el dominio técnico.',
    'hero.cta_projects': 'Ver Proyectos',
    'hero.cta_about': 'Sobre Mí',

    // Perfil
    'profile.title': 'Graduado en Diseño y Desarrollo de Videojuegos',
    'profile.job': 'Analista Junior de Soporte de Aplicaciones',

    // Stats
    'stats.projects': 'Proyectos Completados',
    'stats.experience': 'Años de Experiencia',
    'stats.passion': 'Compromiso',

    // Services
    'services.title': 'Experiencia Técnica',
    'services.subtitle': '¿En qué productos digitales de próxima generación me especializo?',
    'services.s1_title': 'Diseño 2D & 3D',
    'services.s1_desc': 'Ilustración, Prototipado, Modelado y Texturización para assets listos para entornos o juegos.',
    'services.s2_title': 'Desarrollo Web',
    'services.s2_desc': 'Sistemas frontend y experiencias web interactivas. Sistemas backend a través de bases de datos y APIs REST.',
    'services.s3_title': 'Animación',
    'services.s3_desc': 'Animación por keyframes y movimiento procedimental para personajes e interfaces.',
    'services.s4_title': 'UX/UI',
    'services.s4_desc': 'HUDs intuitivos y diseño de interfaz centrado en el jugador para un juego inmersivo.',

    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': '¿Cuáles han sido mis trabajos más técnicos estos años?',
    'projects.view_all': 'Ver Todo',
    'projects.page_title': 'Mis Proyectos',
    'projects.page_subtitle': 'Galería al completo de mis proyectos desarrollados desde videojuegos hasta diseño, ilustración y animación 3D.',
    'projects.load_more': 'Ver más proyectos',
    'projects.show_less': 'Mostrar menos',
    'projects.search_placeholder': 'Buscar proyectos...',
    'projects.no_results': 'No se encontraron proyectos que coincidan con los filtros',
    'project.back': 'Volver a proyectos',
    'project.challenges_title': 'Desafíos y Soluciones',
    'project.role_label': 'Mi Rol',
    'project.team_label': 'Equipo',
    'project.duration_label': 'Duración',
    'project.technologies_label': 'Tecnologías',
    'project.key_learnings_label': 'Aprendizajes Clave',
    'project.highlights_label': 'Puntos Clave',
    'project.challenge_label': 'Desafío',
    'project.solution_label': 'Solución',
    'project.challenge_fallback': 'No se ha documentado el desafío específico.',
    'project.solution_fallback': 'La solución a este desafío está en proceso de documentación.',
    'project.status.completed': 'Completado',
    'project.status.in_development': 'En desarrollo',
    'project.status.prototype': 'Prototipo',
    'project.status.paused': 'Pausado',

    // ============================================
    // ALIEN RUSH
    // ============================================
    'project.alien-rush.title': 'AlienRush',
    'project.alien-rush.desc': 'Juego competitivo en red donde 2 jugadores compiten 1vs1. Arquitectura cliente-servidor con servidor central que comunica mediante paso de mensajes a los jugadores.',
    'project.alien-rush.challenges': 'Sincronización en tiempo real entre dos jugadores. Gestión de latencia y desync en partidas online.',
    'project.alien-rush.solution': 'Implementamos un sistema de predicción de movimiento y corrección de errores mediante interpolación.',
    'project.alien-rush.role': 'Desarrollador Full Stack',
    'project.alien-rush.team': 'GG Team - 4 personas',
    'project.alien-rush.duration': '5 meses',
    'project.alien-rush.learnings': 'Aprendí a gestionar la sincronización en tiempo real y a manejar la latencia en partidas online.',

    // ============================================
    // ASTROFURY
    // ============================================
    'project.astrofury.title': 'Astrofury',
    'project.astrofury.desc': 'Sobrevive a oleadas de enemigos espaciales mientras el equipo de ingeniería te ayuda en tu aventura. Implementa patrones de diseño como State, Object Pooling, Flyweight, Singleton y Observer.',
    'project.astrofury.challenges': 'Implementar correctamente múltiples patrones de diseño en un proyecto cohesionado.',
    'project.astrofury.solution': 'Organizamos el proyecto en módulos independientes y aplicamos los patrones de diseño de forma progresiva.',
    'project.astrofury.role': 'Programador y diseñador de sistemas',
    'project.astrofury.team': 'EquipoT - 4 personas',
    'project.astrofury.duration': '4 meses',
    'project.astrofury.learnings': 'Aprendí a implementar patrones de diseño como State, Object Pooling y Observer.',

    // ============================================
    // FANTASY ISLAND
    // ============================================
    'project.fantasy-island.title': 'Fantasy Island',
    'project.fantasy-island.desc': 'Modelado y texturizado de un escenario 3D para videojuego. Desarrollo completo desde cero utilizando Sketchup y 3dsMax.',
    'project.fantasy-island.challenges': 'Crear un escenario 3D completo y coherente desde cero.',
    'project.fantasy-island.solution': 'Desarrollar el escenario completo, modelándolo a medida en Sketchup y exportándolo a 3ds Max.',
    'project.fantasy-island.role': 'Artista 3D, Modelador y Texturizador',
    'project.fantasy-island.team': 'Proyecto académico personal - Individual',
    'project.fantasy-island.duration': '4 meses',
    'project.fantasy-island.learnings': 'Perfeccioné mis habilidades en modelado 3D y texturizado.',

    // ============================================
    // FLAPPY CHEF
    // ============================================
    'project.flappy-chef.title': 'FlappyChef',
    'project.flappy-chef.desc': 'Videojuego móvil Android inspirado en Flappy Bird. Controla a un chef volador usando cámara, micrófono y acelerómetro.',
    'project.flappy-chef.challenges': 'Integrar sensores del dispositivo móvil en la jugabilidad.',
    'project.flappy-chef.solution': 'Desarrollamos un sistema de eventos que captura los datos de los sensores en tiempo real.',
    'project.flappy-chef.role': 'Desarrollador de aplicaciones para Android',
    'project.flappy-chef.team': 'Proyecto académico grupal - 4 personas',
    'project.flappy-chef.duration': '2.5 meses',
    'project.flappy-chef.learnings': 'Me adentré en el desarrollo móvil con Kotlin y Jetpack Compose.',

    // ============================================
    // GO FOR SPORTS
    // ============================================
    'project.go-for-sports.title': 'Go For Sports',
    'project.go-for-sports.desc': 'Videojuego de preguntas sobre deportes creado con Figma. Enfoque en accesibilidad y usabilidad.',
    'project.go-for-sports.challenges': 'Diseñar una experiencia accesible para diferentes perfiles de usuario.',
    'project.go-for-sports.solution': 'Entrevistas y pruebas con usuarios de diferentes edades y niveles de conocimiento.',
    'project.go-for-sports.role': 'Diseñador UX/UI',
    'project.go-for-sports.team': 'Proyecto académico personal - Individual',
    'project.go-for-sports.duration': '3 meses',
    'project.go-for-sports.learnings': 'Aprendí a realizar investigación de usuarios y a aplicar principios de accesibilidad.',

    // ============================================
    // GOROBEIA
    // ============================================
    'project.gorobeia.title': 'Gorobeia',
    'project.gorobeia.desc': 'Concept art de un videojuego donde Gorak defiende a su tribu. Arte digital con técnicas de ilustración en Photoshop.',
    'project.gorobeia.challenges': 'Crear un universo visual coherente para un mundo de fantasía.',
    'project.gorobeia.solution': 'Moodboard y sistema de colores definido para mantener la coherencia visual.',
    'project.gorobeia.role': 'Ilustrador y diseñador conceptual',
    'project.gorobeia.team': 'Proyecto académico personal - Individual',
    'project.gorobeia.duration': '2 meses',
    'project.gorobeia.learnings': 'Desarrollé mi estilo de ilustración digital.',

    // ============================================
    // HISTERIA
    // ============================================
    'project.histeria.title': 'Histeria: Los Fragmentos de la Mente',
    'project.histeria.desc': 'Roguelike narrativo pixel 2D que busca concienciar sobre la salud mental. Explora la mente fragmentada de una chica de 18 años.',
    'project.histeria.challenges': 'Crear una narrativa y transmitir emociones complejas a través de un videojuego.',
    'project.histeria.solution': 'Narrativa que se desarrolla a través de fragmentos de memoria. Pixel art para transmitir emociones de forma sutil.',
    'project.histeria.role': 'Programador y diseñador de narrativa',
    'project.histeria.team': 'SealyStudio - 5 personas',
    'project.histeria.duration': '6 meses',
    'project.histeria.learnings': 'Aprendí a realizar videojuegos de temática roguelike.',

    // ============================================
    // HIT AND UFO
    // ============================================
    'project.hit-and-ufo.title': 'HittAndUfo',
    'project.hit-and-ufo.desc': 'Juego competitivo en red inspirado en la rivalidad entre fuerza e inteligencia. Versión local y online.',
    'project.hit-and-ufo.challenges': 'Implementar comunicación en tiempo real entre clientes.',
    'project.hit-and-ufo.solution': 'Sistema de comunicación basado en eventos para sincronización entre clientes.',
    'project.hit-and-ufo.role': 'Desarrollador Full Stack',
    'project.hit-and-ufo.team': 'GG Team - 4 personas',
    'project.hit-and-ufo.duration': '3 meses',
    'project.hit-and-ufo.learnings': 'Mejoré mis habilidades en comunicación en tiempo real.',

    // ============================================
    // INTERNATIONAL WARFARE
    // ============================================
    'project.international-warfare.title': 'International Warfare',
    'project.international-warfare.desc': 'Simulación de campaña de financiación para un videojuego. Aprendizaje de diseño y desarrollo web.',
    'project.international-warfare.challenges': 'Diseñar una web profesional que simule una campaña de crowdfunding.',
    'project.international-warfare.solution': 'Interfaz limpia y profesional con secciones claras para la campaña.',
    'project.international-warfare.role': 'Desarrollador Web',
    'project.international-warfare.team': 'Proyecto académico grupal - 5 personas',
    'project.international-warfare.duration': '3 meses',
    'project.international-warfare.learnings': 'Aprendí conceptos sobre desarrollo web y financiación de videojuegos.',

    // ============================================
    // MENTEANDO
    // ============================================
    'project.menteando.title': 'Menteando',
    'project.menteando.desc': 'Web interactiva para fomentar el desarrollo cognitivo en adultos mediante ejercicios gamificados.',
    'project.menteando.challenges': 'Diseñar ejercicios cognitivos efectivos en formato digital.',
    'project.menteando.solution': 'Sistema de progresión adaptativa y gamificación para mantener la motivación.',
    'project.menteando.role': 'Desarrollador Full Stack',
    'project.menteando.team': 'Trabajo de Fin de Grado - Proyecto individual',
    'project.menteando.duration': '8 meses',
    'project.menteando.learnings': 'Desarrollo de aplicación web completa desde cero con principios de psicología cognitiva.',

    // ============================================
    // RAKI
    // ============================================
    'project.raki.title': 'Raki',
    'project.raki.desc': 'Modelado de personaje y arma para videojuego. Técnicas en 3dsMax y texturizado con Adobe Substance.',
    'project.raki.challenges': 'Crear un personaje estilizado con personalidad.',
    'project.raki.solution': 'Investigación de referencias y técnicas de escultura digital y texturizado PBR.',
    'project.raki.role': 'Artista 3D',
    'project.raki.team': 'Proyecto académico personal - Individual',
    'project.raki.duration': '3 meses',
    'project.raki.learnings': 'Mejoré mis habilidades de modelado en 3ds Max.',

    // ============================================
    // RAKI ANIMACIÓN
    // ============================================
    'project.raki-animacion.title': 'Raki, el defensor de Fantasy Island',
    'project.raki-animacion.desc': 'Proyecto de animación 3D que une Fantasy Island y Raki. Animaciones de escenario y personaje.',
    'project.raki-animacion.challenges': 'Integrar animaciones complejas en Unity.',
    'project.raki-animacion.solution': 'Sistema Mecanim de Unity con máquinas de estado y blend trees.',
    'project.raki-animacion.role': 'Artista y animador 3D',
    'project.raki-animacion.team': 'Proyecto académico personal - Individual',
    'project.raki-animacion.duration': '5 meses',
    'project.raki-animacion.learnings': 'Aprendí a integrar animaciones complejas en Unity.',

    // ============================================
    // REDES SOCIALES
    // ============================================
    'project.redes-sociales.title': 'Redes Sociales',
    'project.redes-sociales.desc': 'Plantillas de Canva para equipos de fútbol en redes sociales. Marketing deportivo y branding.',
    'project.redes-sociales.challenges': 'Crear plantillas versátiles que mantengan la identidad de marca.',
    'project.redes-sociales.solution': 'Sistema de plantillas modulares con identidad visual coherente.',
    'project.redes-sociales.role': 'Diseñador Gráfico',
    'project.redes-sociales.team': 'Proyecto personal - Individual',
    'project.redes-sociales.duration': '0.5 mes',
    'project.redes-sociales.learnings': 'Aprendí a diseñar para diferentes formatos y plataformas.',

    // ============================================
    // SÍ, SEÑOR OSCURO
    // ============================================
    'project.si-senor-oscuro.title': 'Sí, Señor Oscuro',
    'project.si-senor-oscuro.desc': 'Adaptación digital del juego de mesa de rol. Diseño de cartas ilustradas con Photoshop.',
    'project.si-senor-oscuro.challenges': 'Mantener la esencia del juego de mesa en la versión digital.',
    'project.si-senor-oscuro.solution': 'Diseño de cartas con iconografía clara y colores diferenciados.',
    'project.si-senor-oscuro.role': 'Ilustrador y diseñador de cartas',
    'project.si-senor-oscuro.team': 'Proyecto académico grupal - 6 personas',
    'project.si-senor-oscuro.duration': '2 meses',
    'project.si-senor-oscuro.learnings': 'Aprendí a adaptar un juego de mesa a formato digital.',

    // ============================================
    // THE WHISPERS OF SHADOWS
    // ============================================
    'project.whispers-of-shadows.title': 'The Whispers of Shadows',
    'project.whispers-of-shadows.desc': 'Concepto de videojuego 3D estilo Chibi ambientado en el Reino de las Sombras.',
    'project.whispers-of-shadows.challenges': 'Crear un mundo de sombras con estilo Chibi.',
    'project.whispers-of-shadows.solution': 'Estilo Chibi con proporciones exageradas y contrastes fuertes.',
    'project.whispers-of-shadows.role': 'Artista 3D y diseñador conceptual',
    'project.whispers-of-shadows.team': 'Proyecto académico grupal - 4 personas',
    'project.whispers-of-shadows.duration': '2 meses',
    'project.whispers-of-shadows.learnings': 'Aprendí a crear un mundo de sombras con estilo Chibi.',

    // ============================================
    // YUMALA
    // ============================================
    'project.yumala.title': 'Yumala',
    'project.yumala.desc': 'Carátula para PS4. Concept art de MOBA que combina magia, mitología y elementos modernos.',
    'project.yumala.challenges': 'Fusionar elementos antiguos y modernos en una composición visual coherente.',
    'project.yumala.solution': 'Collage digital combinando elementos mitológicos con diseños modernos.',
    'project.yumala.role': 'Ilustrador y diseñador',
    'project.yumala.team': 'Proyecto académico personal - Individual',
    'project.yumala.duration': '3 semanas',
    'project.yumala.learnings': 'Aprendí a fusionar elementos antiguos y modernos en una composición visual.',

    // About
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Conoce mi trayectoria, habilidades y pasiones',
    'about.resume_title': 'Resumen',
    'about.resume': 'Soy un profesional apasionado por el diseño y desarrollo de videojuegos, con experiencia en creación de mundos inmersivos y experiencias interactivas. Combino habilidades técnicas en programación y modelado 3D con una fuerte visión creativa.',
    'about.skills_title': 'Habilidades Técnicas',
    'about.skills_subtitle': 'Dominio de herramientas y tecnologías',
    'about.tools_title': 'Herramientas que manejo',
    'about.tools_subtitle': 'Software y tecnologías en mi stack',
    'about.languages_title': 'Lenguajes de Programación',
    'about.languages_subtitle': 'Lenguajes que domino',
    'about.location_title': 'Madrid, España',
    'about.location_sub': 'Operando globalmente vía remota',
    'about.clock_title': 'Hora local',
    'about.timezone': 'Hora de Madrid (UTC+1)',
    'about.available': 'Disponible para proyectos',
    'about.journey_title': 'Mi Trayectoria',
    'about.journey_subtitle': 'Un recorrido por mi formación y experiencia',
    'about.learning_title': 'Cursos, Certificados y Habilidades',
    'about.learning_subtitle': 'Base inicial montada desde tu inventario para poder escalarla.',
    'about.learning.metric_credentials': 'Credenciales',
    'about.learning.metric_skills': 'Habilidades registradas',
    'about.learning.metric_avg_level': 'Nivel medio (1-5)',
    'about.learning.metric_sources': 'Origen principal',
    'about.learning.credentials_title': 'Cursos y certificaciones obtenidas',
    'about.learning.skills_title': 'Habilidades obtenidas (inventario)',
    'about.timeline.period1': 'Febrero 2025 — Actualidad',
    'about.timeline.title1': 'Analista de Soporte y Mantenimiento de Aplicaciones',
    'about.timeline.desc1': 'EPAM Systems - Trabajando para Atresmedia. Soporte, mantenimiento y mejora continua de aplicaciones.',
    'about.timeline.period2': 'Septiembre 2021 — Julio 2026',
    'about.timeline.title2': 'Grado en Diseño y Desarrollo de Videojuegos',
    'about.timeline.desc2': 'Universidad Rey Juan Carlos. Formación en programación, modelado 3D, animación y narrativa.',
    'about.timeline.period3': 'Junio 2021',
    'about.timeline.title3': 'Prueba de acceso a la universidad - EVAU',
    'about.timeline.desc3': 'Calificación de 10.526 sobre 14, acceso al Grado en Diseño y Desarrollo de Videojuegos.',
    'about.timeline.period4': 'Septiembre 2019 — Mayo 2021',
    'about.timeline.title4': 'Graduado en Bachillerato Científico-Tecnológico',
    'about.timeline.desc4': 'IES La Laguna, Parla. Formación en ciencias, matemáticas y tecnología.',
    'about.tools_other_title': 'Otras herramientas',

    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Tienes un proyecto en mente? Hablemos',
    'contact.info_title': 'Información de Contacto',
    'contact.social_title': 'Redes Sociales',
    'contact.form_title': 'Envíame un mensaje',
    'contact.form_name': 'Nombre',
    'contact.form_name_placeholder': 'Tu nombre',
    'contact.form_email': 'Email',
    'contact.form_email_placeholder': 'tucorreo@email.com',
    'contact.form_subject': 'Asunto',
    'contact.form_subject_placeholder': '¿Sobre qué quieres hablar?',
    'contact.form_message': 'Mensaje',
    'contact.form_message_placeholder': 'Cuéntame sobre tu proyecto...',
    'contact.form_submit': 'Enviar Mensaje',
    'contact.email_label': 'Email',
    'contact.social_label': 'Redes Sociales',
    'contact.location_label': 'Ubicación',
    'contact.location_sub': 'Operando globalmente vía remota',
    'contact.available': 'Disponible para proyectos',
    'contact.hero_title': 'Construyamos algo memorable.',
    'contact.hero_description': 'Estoy abierto a nuevas colaboraciones, freelance y oportunidades de producto. Si tienes una idea o necesitas un enfoque creativo y técnico, hablemos.',

    // Footer
    'footer.copy': '© 2026 Daniel Pérez Navarro. Construido para la próxima generación.',

    // CTA
    'cta.title': 'Construyamos algo',
    'cta.title_accent': 'épico juntos.',
    'cta.description': 'Actualmente busco nuevas oportunidades y colaboraciones. Ya sea que tengas un proyecto en mente o solo quieras charlar, mi bandeja de entrada siempre está abierta.',
    'cta.button_contact': 'Ponerse en Contacto',
    'cta.button_cv': 'Descargar CV',

    // Filters
    'filter.clear': 'Limpiar filtros',
    'filter.hint': 'Haz clic en un filtro para activarlo/desactivarlo (múltiples permitidos)',
    'discipline.videojuegos': 'Videojuegos',
    'discipline.red': 'Red',
    'discipline.aplicaciones': 'Aplicaciones Móviles',
    'discipline.desarrollo-web': 'Desarrollo Web',
    'discipline.modelado-3d': 'Modelado 3D',
    'discipline.animacion-3d': 'Animación 3D',
    'discipline.ilustracion': 'Ilustración / Concept Art',
    'discipline.diseño-2d': 'Diseño 2D / Gráfico',
    'discipline.ux-ui': 'UX/UI',
    'discipline.arquitectura': 'Arquitectura de Software',
    'discipline.bases-datos': 'Bases de Datos',
    'discipline.devops': 'DevOps / Infraestructura',
    'discipline.analisis-datos': 'Análisis de Datos',
    'discipline.documentacion': 'Documentación Técnica',
  },

  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Profile
    'profile.title': 'Graduate in Game Design and Development',
    'profile.job': 'Application Junior Support Analyst',

    // Hero
    'hero.status': 'Active in the sector',
    'hero.name': 'Daniel Pérez Navarro -',
    'hero.title': 'Design & Development ',
    'hero.title_end': ' of Systems and Experiences',
    'hero.description': 'Creating immersive projects through innovative design and technical mastery.',
    'hero.cta_projects': 'View Projects',
    'hero.cta_about': 'About Me',

    // Stats
    'stats.projects': 'Projects Completed',
    'stats.experience': 'Years Experience',
    'stats.passion': 'Passion',

    // Services
    'services.title': 'Technical Experience',
    'services.subtitle': 'What next-gen digital products do I specialize in?',
    'services.s1_title': '2D & 3D Design',
    'services.s1_desc': 'Illustration, Prototyping, Modeling and Texturing for game-ready assets.',
    'services.s2_title': 'Web Development',
    'services.s2_desc': 'Frontend systems and interactive web experiences. Backend systems through databases and REST APIs.',
    'services.s3_title': 'Animation',
    'services.s3_desc': 'Keyframe animation and procedural movement for characters and interfaces.',
    'services.s4_title': 'UX/UI',
    'services.s4_desc': 'Intuitive HUDs and player-centric interface design for immersive gameplay.',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'What have been my most technical works these years?',
    'projects.view_all': 'View All',
    'projects.page_title': 'My Projects',
    'projects.page_subtitle': 'Complete gallery of my projects developed from video games to design, illustration and 3D animation.',
    'projects.load_more': 'Load more projects',
    'projects.show_less': 'Show less',
    'projects.search_placeholder': 'Search projects...',
    'projects.no_results': 'No projects found matching the filters',
    'project.back': 'Back to projects',
    'project.challenges_title': 'Challenges & Solutions',
    'project.role_label': 'My Role',
    'project.team_label': 'Team',
    'project.duration_label': 'Duration',
    'project.technologies_label': 'Technologies',
    'project.key_learnings_label': 'Key Learnings',
    'project.highlights_label': 'Highlights',
    'project.challenge_label': 'Challenge',
    'project.solution_label': 'Solution',
    'project.challenge_fallback': 'No specific challenge has been documented.',
    'project.solution_fallback': 'The solution to this challenge is being documented.',
    'project.status.completed': 'Completed',
    'project.status.in_development': 'In development',
    'project.status.prototype': 'Prototype',
    'project.status.paused': 'Paused',

    // ============================================
    // ALIEN RUSH
    // ============================================
    'project.alien-rush.title': 'AlienRush',
    'project.alien-rush.desc': 'Competitive online game where 2 players compete 1vs1. Client-server architecture with a central server that communicates with players through message passing.',
    'project.alien-rush.challenges': 'Real-time synchronization between two players. Latency and desync management in online matches.',
    'project.alien-rush.solution': 'We implemented a movement prediction system and error correction through interpolation.',
    'project.alien-rush.role': 'Full Stack Developer',
    'project.alien-rush.team': 'GG Team - 4 people',
    'project.alien-rush.duration': '5 months',
    'project.alien-rush.learnings': 'I learned to manage real-time synchronization and handle latency in online matches.',

    // ============================================
    // ASTROFURY
    // ============================================
    'project.astrofury.title': 'Astrofury',
    'project.astrofury.desc': 'Survive waves of space enemies while the engineering team helps you on your adventure. Implements design patterns like State, Object Pooling, Flyweight, Singleton, and Observer.',
    'project.astrofury.challenges': 'Correctly implement multiple design patterns in a cohesive project.',
    'project.astrofury.solution': 'We organized the project into independent modules and applied design patterns progressively.',
    'project.astrofury.role': 'Programmer and systems designer',
    'project.astrofury.team': 'TeamT - 4 people',
    'project.astrofury.duration': '4 months',
    'project.astrofury.learnings': 'I learned to implement design patterns like State, Object Pooling, and Observer.',

    // ============================================
    // FANTASY ISLAND
    // ============================================
    'project.fantasy-island.title': 'Fantasy Island',
    'project.fantasy-island.desc': 'Modeling and texturing of a 3D scenario for a video game. Complete development from scratch using Sketchup and 3dsMax.',
    'project.fantasy-island.challenges': 'Create a complete and coherent 3D scenario from scratch.',
    'project.fantasy-island.solution': 'Develop the complete scenario, modeling it in Sketchup and exporting it to 3ds Max.',
    'project.fantasy-island.role': '3D Artist, Modeler and Texturer',
    'project.fantasy-island.team': 'Personal academic project - Individual',
    'project.fantasy-island.duration': '4 months',
    'project.fantasy-island.learnings': 'I perfected my skills in 3D modeling and texturing.',

    // ============================================
    // FLAPPY CHEF
    // ============================================
    'project.flappy-chef.title': 'FlappyChef',
    'project.flappy-chef.desc': 'Android mobile game inspired by Flappy Bird. Control a flying chef using camera, microphone and accelerometer.',
    'project.flappy-chef.challenges': 'Integrate mobile device sensors into gameplay.',
    'project.flappy-chef.solution': 'We developed an event system that captures sensor data in real-time.',
    'project.flappy-chef.role': 'Android Application Developer',
    'project.flappy-chef.team': 'Group academic project - 4 people',
    'project.flappy-chef.duration': '2.5 months',
    'project.flappy-chef.learnings': 'I delved into mobile development with Kotlin and Jetpack Compose.',

    // ============================================
    // GO FOR SPORTS
    // ============================================
    'project.go-for-sports.title': 'Go For Sports',
    'project.go-for-sports.desc': 'Sports quiz video game created with Figma. Focus on accessibility and usability.',
    'project.go-for-sports.challenges': 'Design an accessible experience for different user profiles.',
    'project.go-for-sports.solution': 'Interviews and tests with users of different ages and knowledge levels.',
    'project.go-for-sports.role': 'UX/UI Designer',
    'project.go-for-sports.team': 'Personal academic project - Individual',
    'project.go-for-sports.duration': '3 months',
    'project.go-for-sports.learnings': 'I learned to conduct user research and apply accessibility principles.',

    // ============================================
    // GOROBEIA
    // ============================================
    'project.gorobeia.title': 'Gorobeia',
    'project.gorobeia.desc': 'Concept art for a video game where Gorak defends his tribe. Digital art using Photoshop illustration techniques.',
    'project.gorobeia.challenges': 'Create a coherent visual universe for a fantasy world.',
    'project.gorobeia.solution': 'Moodboard and defined color system to maintain visual coherence.',
    'project.gorobeia.role': 'Illustrator and conceptual designer',
    'project.gorobeia.team': 'Personal academic project - Individual',
    'project.gorobeia.duration': '2 months',
    'project.gorobeia.learnings': 'I developed my digital illustration style.',

    // ============================================
    // HISTERIA
    // ============================================
    'project.histeria.title': 'Hysteria: Fragments of the Mind',
    'project.histeria.desc': '2D pixel art narrative roguelike that raises awareness about mental health. Explore the fragmented mind of an 18-year-old girl.',
    'project.histeria.challenges': 'Create a narrative and convey complex emotions through a video game.',
    'project.histeria.solution': 'Narrative that unfolds through memory fragments. Pixel art to subtly convey emotions.',
    'project.histeria.role': 'Programmer and narrative designer',
    'project.histeria.team': 'SealyStudio - 5 people',
    'project.histeria.duration': '6 months',
    'project.histeria.learnings': 'I learned to create roguelike themed video games.',

    // ============================================
    // HIT AND UFO
    // ============================================
    'project.hit-and-ufo.title': 'HittAndUfo',
    'project.hit-and-ufo.desc': 'Competitive online game inspired by the rivalry between strength and intelligence. Local and online versions.',
    'project.hit-and-ufo.challenges': 'Implement real-time communication between clients.',
    'project.hit-and-ufo.solution': 'Event-based communication system for client synchronization.',
    'project.hit-and-ufo.role': 'Full Stack Developer',
    'project.hit-and-ufo.team': 'GG Team - 4 people',
    'project.hit-and-ufo.duration': '3 months',
    'project.hit-and-ufo.learnings': 'I improved my real-time communication skills.',

    // ============================================
    // INTERNATIONAL WARFARE
    // ============================================
    'project.international-warfare.title': 'International Warfare',
    'project.international-warfare.desc': 'Simulation of a crowdfunding campaign for a video game. Learning web design and development.',
    'project.international-warfare.challenges': 'Design a professional website that simulates a crowdfunding campaign.',
    'project.international-warfare.solution': 'Clean and professional interface with clear sections for the campaign.',
    'project.international-warfare.role': 'Web Developer',
    'project.international-warfare.team': 'Group academic project - 5 people',
    'project.international-warfare.duration': '3 months',
    'project.international-warfare.learnings': 'I learned concepts about web development and video game financing.',

    // ============================================
    // MENTEANDO
    // ============================================
    'project.menteando.title': 'Menteando',
    'project.menteando.desc': 'Interactive web to promote cognitive development in adults through gamified exercises.',
    'project.menteando.challenges': 'Design effective cognitive exercises in digital format.',
    'project.menteando.solution': 'Adaptive progression system and gamification to maintain motivation.',
    'project.menteando.role': 'Full Stack Developer',
    'project.menteando.team': 'Final Degree Project - Individual',
    'project.menteando.duration': '8 months',
    'project.menteando.learnings': 'Complete web application development from scratch with cognitive psychology principles.',

    // ============================================
    // RAKI
    // ============================================
    'project.raki.title': 'Raki',
    'project.raki.desc': 'Character and weapon modeling for a video game. Techniques in 3dsMax and texturing with Adobe Substance.',
    'project.raki.challenges': 'Create a stylized character with personality.',
    'project.raki.solution': 'Reference research and digital sculpting and PBR texturing techniques.',
    'project.raki.role': '3D Artist',
    'project.raki.team': 'Personal academic project - Individual',
    'project.raki.duration': '3 months',
    'project.raki.learnings': 'I improved my 3ds Max modeling skills.',

    // ============================================
    // RAKI ANIMACIÓN
    // ============================================
    'project.raki-animacion.title': 'Raki, Defender of Fantasy Island',
    'project.raki-animacion.desc': '3D animation project combining Fantasy Island and Raki. Scenario and character animations.',
    'project.raki-animacion.challenges': 'Integrate complex animations in Unity.',
    'project.raki-animacion.solution': 'Unity Mecanim system with state machines and blend trees.',
    'project.raki-animacion.role': '3D Artist and Animator',
    'project.raki-animacion.team': 'Personal academic project - Individual',
    'project.raki-animacion.duration': '5 months',
    'project.raki-animacion.learnings': 'I learned to integrate complex animations in Unity.',

    // ============================================
    // REDES SOCIALES
    // ============================================
    'project.redes-sociales.title': 'Social Media',
    'project.redes-sociales.desc': 'Canva templates for football teams on social media. Sports marketing and branding.',
    'project.redes-sociales.challenges': 'Create versatile templates that maintain brand identity.',
    'project.redes-sociales.solution': 'Modular template system with coherent visual identity.',
    'project.redes-sociales.role': 'Graphic Designer',
    'project.redes-sociales.team': 'Personal project - Individual',
    'project.redes-sociales.duration': '0.5 month',
    'project.redes-sociales.learnings': 'I learned to design for different formats and platforms.',

    // ============================================
    // SÍ, SEÑOR OSCURO
    // ============================================
    'project.si-senor-oscuro.title': 'Yes, Dark Lord',
    'project.si-senor-oscuro.desc': 'Digital adaptation of the tabletop role-playing game. Design of illustrated cards with Photoshop.',
    'project.si-senor-oscuro.challenges': 'Maintain the essence of the board game in the digital version.',
    'project.si-senor-oscuro.solution': 'Card design with clear iconography and differentiated colors.',
    'project.si-senor-oscuro.role': 'Illustrator and card designer',
    'project.si-senor-oscuro.team': 'Group academic project - 6 people',
    'project.si-senor-oscuro.duration': '2 months',
    'project.si-senor-oscuro.learnings': 'I learned to adapt a board game to digital format.',

    // ============================================
    // THE WHISPERS OF SHADOWS
    // ============================================
    'project.whispers-of-shadows.title': 'The Whispers of Shadows',
    'project.whispers-of-shadows.desc': 'Chibi-style 3D video game concept set in the Shadow Kingdom.',
    'project.whispers-of-shadows.challenges': 'Create a shadow world with Chibi style.',
    'project.whispers-of-shadows.solution': 'Chibi style with exaggerated proportions and strong contrasts.',
    'project.whispers-of-shadows.role': '3D Artist and conceptual designer',
    'project.whispers-of-shadows.team': 'Group academic project - 4 people',
    'project.whispers-of-shadows.duration': '2 months',
    'project.whispers-of-shadows.learnings': 'I learned to create a shadow world with Chibi style.',

    // ============================================
    // YUMALA
    // ============================================
    'project.yumala.title': 'Yumala',
    'project.yumala.desc': 'PS4 cover art. MOBA concept art combining magic, mythology and modern elements.',
    'project.yumala.challenges': 'Merge ancient and modern elements into a coherent visual composition.',
    'project.yumala.solution': 'Digital collage combining mythological elements with modern designs.',
    'project.yumala.role': 'Illustrator and designer',
    'project.yumala.team': 'Personal academic project - Individual',
    'project.yumala.duration': '3 weeks',
    'project.yumala.learnings': 'I learned to merge ancient and modern elements into a visual composition.',

    // About
    'about.title': 'About Me',
    'about.subtitle': 'Learn about my journey, skills and passions',
    'about.resume_title': 'Summary',
    'about.resume': 'I am a professional passionate about game design and development, with experience in creating immersive worlds and interactive experiences. I combine technical skills in programming and 3D modeling with a strong creative vision.',
    'about.skills_title': 'Technical Skills',
    'about.skills_subtitle': 'Mastery of tools and technologies',
    'about.tools_title': 'Tools I use',
    'about.tools_subtitle': 'Software and technologies in my stack',
    'about.languages_title': 'Programming Languages',
    'about.languages_subtitle': 'Languages I master',
    'about.location_title': 'Madrid, Spain',
    'about.location_sub': 'Operating globally via remote connection',
    'about.clock_title': 'Local Time',
    'about.timezone': 'Madrid Time (UTC+1)',
    'about.available': 'Available for projects',
    'about.journey_title': 'My Journey',
    'about.journey_subtitle': 'A journey through my education and experience',
    'about.learning_title': 'Courses, Credentials, and Skills',
    'about.learning_subtitle': 'Initial dataset built from your inventory, ready to scale.',
    'about.learning.metric_credentials': 'Credentials',
    'about.learning.metric_skills': 'Registered skills',
    'about.learning.metric_avg_level': 'Average level (1-5)',
    'about.learning.metric_sources': 'Primary source',
    'about.learning.credentials_title': 'Completed courses and credentials',
    'about.learning.skills_title': 'Acquired skills (inventory)',
    'about.timeline.period1': 'February 2025 — Present',
    'about.timeline.title1': 'Application Support and Maintenance Analyst',
    'about.timeline.desc1': 'EPAM Systems - Working for Atresmedia. Application support, maintenance and continuous improvement.',
    'about.timeline.period2': 'September 2021 — July 2026',
    'about.timeline.title2': "Bachelor's Degree in Game Design and Development",
    'about.timeline.desc2': 'Rey Juan Carlos University. Training in programming, 3D modeling, animation and narrative.',
    'about.timeline.period3': 'June 2021',
    'about.timeline.title3': 'University Entrance Exam - EVAU',
    'about.timeline.desc3': 'Score of 10.526 out of 14, access to the Degree in Game Design and Development.',
    'about.timeline.period4': 'September 2019 — May 2021',
    'about.timeline.title4': 'Graduate in Scientific-Technological Baccalaureate',
    'about.timeline.desc4': 'IES La Laguna, Parla. Training in science, mathematics and technology.',
    'about.tools_other_title': 'Other tools',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': "Have a project in mind? Let's talk",
    'contact.info_title': 'Contact Information',
    'contact.social_title': 'Social Networks',
    'contact.form_title': 'Send me a message',
    'contact.form_name': 'Name',
    'contact.form_name_placeholder': 'Your name',
    'contact.form_email': 'Email',
    'contact.form_email_placeholder': 'your@email.com',
    'contact.form_subject': 'Subject',
    'contact.form_subject_placeholder': 'What do you want to talk about?',
    'contact.form_message': 'Message',
    'contact.form_message_placeholder': 'Tell me about your project...',
    'contact.form_submit': 'Send Message',
    'contact.email_label': 'Email',
    'contact.social_label': 'Social Networks',
    'contact.location_label': 'Location',
    'contact.location_sub': 'Operating globally via remote',
    'contact.available': 'Available for projects',
    'contact.hero_title': "Let's build something memorable.",
    'contact.hero_description': "I'm open to new collaborations, freelance work, and product opportunities. If you have an idea or need a creative and technical approach, let's talk.",

    // Footer
    'footer.copy': '© 2026 Daniel Pérez Navarro. Built for the next generation.',

    // CTA
    'cta.title': "Let's build something",
    'cta.title_accent': 'epic together.',
    'cta.description': 'Currently looking for new opportunities and collaborations. Whether you have a project in mind or just want to chat, my inbox is always open.',
    'cta.button_contact': 'Get In Touch',
    'cta.button_cv': 'Download CV',

    // Filters
    'filter.clear': 'Clear filters',
    'filter.hint': 'Click a filter to toggle it (multiple allowed)',
    'discipline.videojuegos': 'Video Games',
    'discipline.red': 'Network',
    'discipline.aplicaciones': 'Mobile Apps',
    'discipline.desarrollo-web': 'Web Development',
    'discipline.modelado-3d': '3D Modeling',
    'discipline.animacion-3d': '3D Animation',
    'discipline.ilustracion': 'Illustration / Concept Art',
    'discipline.diseño-2d': '2D / Graphic Design',
    'discipline.ux-ui': 'UX/UI',
    'discipline.arquitectura': 'Software Architecture',
    'discipline.bases-datos': 'Databases',
    'discipline.devops': 'DevOps / Infrastructure',
    'discipline.analisis-datos': 'Data Analysis',
    'discipline.documentacion': 'Technical Documentation',
  }
};

// ✅ Función de traducción
export function t(lang: 'es' | 'en', key: string): string {
  const translations = TRANSLATIONS[lang] || TRANSLATIONS.es;
  return translations[key as keyof typeof translations] || key;
}