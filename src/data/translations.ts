// src/data/translations.ts
import { publicProjects } from './projects';
import { buildProjectTranslations } from './projects/translations';

// Los textos de cada proyecto viven en su entrada (src/data/projects/entries); aquí solo se exponen como claves.
const projectTexts = buildProjectTranslations(publicProjects);

export const TRANSLATIONS = {
  es: {
    ...projectTexts.es,
    // Navegación
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.trayectory': 'Trayectoria',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',

    // Proyectos relacionados
    'project.related.subject': 'Misma asignatura',
    'project.related.discipline': 'Misma área',
    'project.related.year': 'Mismo año',
    'project.related.technologies': 'Misma tecnología',
    'project.related.languages': 'Mismo lenguaje',
    'project.related.default': 'Proyecto relacionado',

    // 404
    'notfound.title': 'Esta página no existe',
    'notfound.text': 'Puede que el enlace esté roto o que el proyecto haya cambiado de dirección.',
    'notfound.home': 'Volver al inicio',
    'notfound.projects': 'Ver proyectos',

    // Hero
    'hero.status': 'Activo en el sector',
    'hero.name': 'Daniel Pérez Navarro -',
    'hero.title': 'Diseño & Desarrollo ',
    'hero.title_end': ' de Sistemas y Experiencias',
    'hero.description': 'Combino creatividad, diseño y tecnología para desarrollar videojuegos, aplicaciones y experiencias digitales, explorando nuevas herramientas y formas de convertir ideas en proyectos reales.',
    'hero.cta_projects': 'Ver Proyectos',
    'hero.cta_about': 'Sobre Mí',

    // Perfil
    'profile.title': 'Graduado en Diseño y Desarrollo de Videojuegos',
    'profile.job': 'Analista Junior de Soporte de Aplicaciones',

    // Stats
    'stats.projects': 'Proyectos Completados',
    'stats.experience': 'Años de Experiencia',
    'stats.areas': 'Áreas de Trabajo',

    // Services
    'services.title': 'Experiencia Técnica',
    'services.subtitle': 'Productos digitales de próxima generación donde me especializo',
    'services.s1_title': 'Diseño 2D & 3D',
    'services.s1_desc': 'Ilustración, Prototipado, Modelado y Texturización para distintos assets listos para entornos o juegos.',
    'services.s2_title': 'Desarrollo Web',
    'services.s2_desc': 'Sistemas frontend y experiencias web interactivas. Sistemas backend a través de bases de datos y APIs REST.',
    'services.s3_title': 'Animación',
    'services.s3_desc': 'Animación por keyframes y movimiento para escenarios, personajes e interfaces.',
    'services.s4_title': 'UX/UI',
    'services.s4_desc': 'HUDs intuitivos y diseño de interfaz centrado en el usuario para una experiencia inmersiva.',

    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Estos son algunos de mis trabajos más técnicos de estos años',
    'projects.view_all': 'Ver Todo',
    'projects.page_title': 'Mis Proyectos',
    'projects.page_subtitle': 'Galería al completo de mis proyectos desarrollados: desde videojuegos hasta diseño, arquitectura o animación 3D.',
    'projects.load_more': 'Ver más proyectos',
    'projects.show_less': 'Mostrar menos',
    'projects.search_placeholder': 'Buscar proyectos...',
    'projects.no_results': 'No se encontraron proyectos que coincidan con los filtros',
    'project.back': 'Volver a proyectos',
      'project.gallery.image': 'Imagen del proyecto',
    'project.challenges_title': 'Problemas encontrados y soluciones implementadas',
    'project.key_learnings_label': 'Aprendizajes Clave',
    'project.challenge_label': 'Desafío',
    'project.solution_label': 'Solución',
    'project.challenge_fallback': 'No se ha documentado el desafío específico.',
    'project.solution_fallback': 'La solución a este desafío está en proceso de documentación.',
    'project.story_title': 'Historia del Proyecto',
    'project.story_subtitle': 'El recorrido desde el contexto hasta el aprendizaje',
    'project.story.context': 'Contexto',
    'project.story.objective': 'Objetivo',
    'project.story.implementation': 'Implementación',
    'project.story.learning': 'Aprendizaje',
    'project.role_label': 'Mi Rol',
    'project.team_label': 'Equipo',
    'project.duration_label': 'Duración',
    'project.technologies_label': 'Tecnologías',
    'project.skills_gained_label': 'Habilidades Adquiridas',
    'project.highlights_label': 'Puntos Destacados',
    'project.status.completed': 'Completado',
    'project.status.in_development': 'En Desarrollo',
    'project.status.prototype': 'Prototipo',
    'project.status.paused': 'Pausado',
    'project.resources_title': 'Recursos y Enlaces',
    'project.resources_subtitle': 'Vídeos, documentos, demos jugables y enlaces del proyecto',
    'project.resources.open_external': 'Abrir en una nueva pestaña',
    'project.resources.play': 'Jugar',
    'project.related_title': 'Proyectos Relacionados',
    'project.resources.github': 'Código en GitHub',
    'project.resources.video': 'Vídeo',
    'project.resources.pdf': 'Documento PDF',
    'project.resources.prototype': 'Prototipo interactivo',
    'project.resources.audio': 'Audio',
    'project.resources.website': 'Sitio web',
    'project.type.academic': 'Proyecto académico',
    'project.type.degree_project': 'Trabajo de Fin de Grado',
    'project.type.personal': 'Proyecto personal',
    'project.type.freelance': 'Proyecto freelance',
    'project.tag.design_patterns': 'Patrones de diseño',
    'project.tag.3d_modeling': 'Modelado 3D',
    'project.tag.export': 'Exportación',
    'project.tag.texturing': 'Texturización',
    'project.tag.illustration': 'Ilustración',
    'project.tag.cognitive_development': 'Desarrollo cognitivo',
    'project.tag.gamification': 'Gamificación',
    'project.tag.narrative': 'Narrativa',
    'project.tag.graphic_design': 'Diseño gráfico',
    'project.tag.3d_animation': 'Animación 3D',
    'project.tag.characters': 'Personajes',
    'project.tag.game_design': 'Diseño de videojuegos',
    'project.link.play': 'Jugar',
    'project.link.explainer_video': 'Vídeo explicativo',
    'project.link.prototype': 'Prototipo',
    'project.link.report_pdf': 'Memoria PDF',
    'project.link.studio_website': 'Web del estudio',
    'project.link.visit_website': 'Visitar web',
    'project.link.demo_video': 'Descargar vídeo de demostración',

    // ============================================
    // ALIEN RUSH (ES)
    // ============================================

    // ============================================
    // ASTROFURY (ES)
    // ============================================

    // ============================================
    // FANTASY ISLAND (ES)
    // ============================================

    // ============================================
    // FLAPPY CHEF (ES)
    // ============================================

    // ============================================
    // GO FOR SPORTS (ES)
    // ============================================

    // ============================================
    // GOROBEIA (ES)
    // ============================================

    // ============================================
    // HISTERIA (ES)
    // ============================================

    // ============================================
    // HIT AND UFO (ES)
    // ============================================

    // ============================================
    // INTERNATIONAL WARFARE (ES)
    // ============================================

    // ============================================
    // MENTEANDO (ES)
    // ============================================

    // ============================================
    // RAKI (ES)
    // ============================================

    // ============================================
    // RAKI ANIMACIÓN (ES)
    // ============================================

    // ============================================
    // REDES SOCIALES (ES)
    // ============================================

    // ============================================
    // SÍ, SEÑOR OSCURO (ES)
    // ============================================

    // ============================================
    // THE WHISPERS OF SHADOWS (ES)
    // ============================================

    // ============================================
    // YUMALA (ES)
    // ============================================

    // About
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Conoce mi trayectoria, habilidades y pasiones',
    'about.resume_title': 'Resumen',
    'about.resume': 'Soy graduado en Diseño y Desarrollo de Videojuegos y actualmente trabajo en soporte de aplicaciones, mientras continúo mi formación en animación 3D.',
    'about.resume_2': 'Me gusta combinar diseño, tecnología y creatividad para dar forma a ideas y convertirlas en proyectos funcionales. He trabajado en videojuegos, ilustración, modelado 3D, interfaces y aplicaciones web, además de adquirir experiencia profesional en análisis de datos, monitorización y resolución de incidencias.',
    'about.resume_3': 'Disfruto aprendiendo nuevas herramientas, entendiendo cómo funcionan los sistemas y encontrando soluciones prácticas. Actualmente también utilizo la inteligencia artificial como parte de mi proceso de desarrollo, experimentación y aprendizaje.',
    'about.skills_title': 'Áreas de Trabajo',
    'about.skills_subtitle': 'Lo que hago y los proyectos que lo respaldan',
    'about.skills_related': 'Proyectos relacionados',
    'about.tools_title': 'Herramientas principales',
    'about.tools_subtitle': 'Las más representativas de mi trabajo, agrupadas por finalidad',
    'about.languages_title': 'Lenguajes y tecnologías utilizadas',
    'about.languages_subtitle': 'Tecnologías con las que he trabajado en proyectos y prácticas',
    'about.languages_note': 'Si quieres ver el nivel en detalle, consulta la sección de habilidades, en Trayectoria.',
    'about.location_title': 'Madrid, España',
    'about.clock_title': 'Hora local',
    'about.timezone': 'Hora de Madrid (UTC+1)',
    'about.available': 'Disponible para proyectos',
    'about.journey_title': 'Mi Trayectoria',
    'about.journey_subtitle': 'Un recorrido por mi formación y experiencia',
    'about.learning_title': 'Formación y Certificaciones',
    'about.learning_subtitle': 'Titulaciones, cursos completados y certificaciones en preparación.',
    'about.learning.credentials_title': 'Titulaciones oficiales',
    'about.learning.skills_title': 'Inventario por categorías',
    'about.learning.in_progress': 'En curso',
    'about.learning.completed': 'Completado',
    'about.learning.tag_university': 'Universidad',
    'about.learning.tag_work': 'Trabajo',
    'about.learning.tag_personal': 'Personal',
    'about.learning.short_courses_title': 'Cursos completados',
    'about.learning.pending_title': 'Certificaciones en preparación',
    'about.learning.current_title': 'Aprendizaje actual',
    'about.learning.current_description': 'Estoy ampliando mis conocimientos en animación 3D, desarrollo web moderno y herramientas para crear productos digitales.',
    'about.learning.view_credential': 'Ver credencial',
    'about.learning.pending': 'Pendiente de obtener',
    'about.timeline.period1': '2026 — Actualidad',
    'about.timeline.title1': 'Máster en Animación 3D para las Industrias del Entretenimiento',
    'about.timeline.desc1': 'Formación especializada en animación 3D aplicada a las industrias del entretenimiento, ampliando mis conocimientos de producción, herramientas y técnicas de animación.',
    'about.timeline.period2': 'Febrero 2025 — Actualidad',
    'about.timeline.title2': 'Analista de Soporte y Mantenimiento de Aplicaciones',
    'about.timeline.desc2': 'Soporte de aplicaciones y servicios digitales en producción, con participación en la investigación y gestión de incidencias, análisis de logs y datos, monitorización, validaciones operativas y documentación técnica. Trabajo con herramientas de observabilidad y plataformas de distribución audiovisual.',
    'about.timeline.period3': 'Septiembre 2021 — Julio 2026',
    'about.timeline.title3': 'Grado en Diseño y Desarrollo de Videojuegos',
    'about.timeline.desc3': 'Formación multidisciplinar en diseño y desarrollo de videojuegos, programación, arte digital, modelado y animación 3D, narrativa, interfaces y gestión de proyectos, aplicada a trabajos individuales y en equipo.',

    // Habilidades (Trayectoria)
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Inventario consultable de conocimientos y tecnologías',
    'skills.featured_title': 'Competencias destacadas',
    'skills.featured_subtitle': 'Selección representativa de mis fortalezas actuales',
    'skills.scale_title': 'Escala de autoevaluación',
    'skills.scale_note': 'Los niveles son una autoevaluación de mi autonomía actual, no una acreditación externa.',
    'skills.kind_skill': 'Competencias',
    'skills.kind_tool': 'Herramientas y tecnologías',
    'level.pending': 'Nivel pendiente de evaluar',

    // Buscador global
    'search.title': '¿Buscas algo concreto?',
    'search.subtitle': 'Ve directo al grano. Encuentra tecnologías, habilidades o proyectos sin recorrer todo el portfolio.',
    'search.label': 'Buscar en el portfolio',
    'search.open': 'Ir al buscador del portfolio',
    'search.menu': 'Buscador',
    'search.placeholder': 'Prueba con MongoDB, Unity, Animación...',
    'search.clear': 'Borrar búsqueda',
    'search.suggestions': 'Prueba con:',
    'search.hint': 'Usa las flechas ↑ ↓ para moverte por los resultados y Enter para abrir el seleccionado.',
    'search.result_one': '1 resultado',
    'search.result_other': '{n} resultados',
    'search.no_results': 'Sin resultados para «{q}». Prueba con otra tecnología, habilidad o proyecto.',
    'search.error': 'No se ha podido cargar el índice de búsqueda.',
    'search.more': 'Mostrar {n} más',
    'search.less': 'Mostrar menos',
    'search.group.projects': 'Proyectos',
    'search.group.skills': 'Habilidades',
    'search.group.experience': 'Experiencia y trayectoria',
    'search.group.education': 'Formación',
    'search.type.project': 'Proyecto',
    'search.type.skill': 'Competencia',
    'search.type.tool': 'Herramienta',
    'search.type.area': 'Área de trabajo',
    'search.type.category': 'Categoría',
    'search.type.experience': 'Experiencia',
    'search.type.timeline': 'Cronología',
    'search.type.degree': 'Titulación',
    'search.type.course': 'Curso',
    'search.type.pending': 'En preparación',
    'skills.intro_title': 'Conocimientos introductorios',
    'skills.intro_description': 'Tecnologías con las que he tenido un primer contacto o experiencia puntual. Las menciono para mostrar amplitud, no dominio.',
    'level.1.name': 'Nociones',
    'level.1.desc': 'Conocimiento inicial o experiencia puntual.',
    'level.2.name': 'Básico',
    'level.2.desc': 'Uso práctico con apoyo.',
    'level.3.name': 'Intermedio',
    'level.3.desc': 'Autonomía en tareas habituales.',
    'level.4.name': 'Avanzado',
    'level.4.desc': 'Soltura en tareas complejas.',
    'level.5.name': 'Muy avanzado',
    'level.5.desc': 'Autonomía elevada y capacidad para orientar a otros.',
    'featured.game-design': 'Diseño de videojuegos',
    'featured.digital-illustration': 'Ilustración digital',
    'featured.graphic-design': 'Diseño gráfico y composición',
    'featured.mongodb-data': 'MongoDB y análisis de datos',
    'featured.log-rca': 'Análisis de logs y causa raíz',
    'featured.incident-management': 'Gestión de incidencias',
    'featured.prompt-engineering': 'Prompt Engineering',
    'featured.ticket-management': 'Gestión de tickets',
    'about.tools_other_title': 'Otras herramientas utilizadas',

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
    'contact.sending': 'Enviando...',
    'contact.sent': '¡Mensaje enviado con éxito!',
    'contact.not_configured': 'El formulario aún no está conectado. Puedes escribirme directamente por email mientras tanto.',
    'contact.send_error': 'No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.',
    'contact.default_subject': 'Nuevo mensaje desde el portfolio',
    'contact.email_label': 'Email',
    'contact.social_label': 'Redes Sociales',
    'contact.location_label': 'Ubicación',
    'contact.available': 'Disponible para proyectos',
    'contact.hero_title': 'Si tienes una idea, contáctame',
    'contact.hero_description': 'Estoy abierto a nuevas colaboraciones, freelance y oportunidades de producto. Si tienes una idea o necesitas un enfoque creativo y técnico, hablemos.',

    // Footer
    'footer.copy': '© 2026 Todos los derechos reservados. ',

    // CTA
    'cta.title': 'Construyamos algo',
    'cta.title_accent': 'épico juntos.',
    'cta.description': 'Actualmente busco nuevas oportunidades y colaboraciones. Ya sea que tengas un proyecto en mente o solo quieras charlar, mi bandeja de entrada siempre está abierta.',
    'cta.button_contact': 'Ponerse en Contacto',
    'cta.button_cv': 'Descargar CV',

    // Filters
    'filter.clear': 'Limpiar filtros',
    'filter.discipline': 'Disciplina',
    'filter.context': 'Contexto',
    'filter.date_range': 'Rango de fechas',
    'filter.context.grado': 'Grado',
    'filter.context.master': 'Máster',
    'filter.context.personal': 'Proyecto personal',
    'filter.context.laboral': 'Proyecto laboral',
    'filter.min_year': 'Año mínimo',
    'filter.max_year': 'Año máximo',
    'filter.open': 'Filtros',
    'discipline.videojuegos': 'Videojuegos',
    'discipline.red': 'Red',
    'discipline.aplicaciones': 'Aplicaciones Móviles',
    'discipline.desarrollo-web': 'Desarrollo Web',
    'discipline.modelado-3d': 'Modelado 3D',
    'discipline.animacion-3d': 'Animación 3D',
    'discipline.ilustracion': 'Ilustración / Concept Art',
    'discipline.diseño-2d': 'Diseño Gráfico',
    'discipline.ux-ui': 'UX/UI',
    'discipline.arquitectura': 'Arquitectura de Software',
    'discipline.bases-datos': 'Bases de Datos',
    'discipline.devops': 'DevOps / Infraestructura',
    'discipline.analisis-datos': 'Análisis de Datos',
    'discipline.documentacion': 'Documentación Técnica',
    'discipline.ia': 'Inteligencia Artificial',

    // ==========================================
    // CATEGORÍAS (ES)
    // ==========================================
    'category.game_development': 'Videojuegos y experiencias interactivas',
    'category.design': 'Arte digital y UX/UI',
    'category.programming': 'Programación y desarrollo',
    'category.databases': 'Bases de datos',
    'category.support': 'Soporte y observabilidad',
    'category.streaming': 'Streaming y plataformas audiovisuales',
    'category.ai': 'IA y automatización',
    'category.cloud_devops': 'Cloud, DevOps y herramientas',

    // ==========================================
    // TIPOS DE CERTIFICACIONES (ES)
    // ==========================================
    'credential.type.degree': 'Grado',
    'credential.type.master': 'Máster',
    'credential.type.specialization': 'Especialización',
    'credential.type.short_course': 'Curso completado',
    'credential.type.pending': 'En preparación',
    'credential.master-3d-animation.title': 'Animación 3D para las Industrias del Entretenimiento',

    // ==========================================
    // TÍTULOS DE CERTIFICACIONES (ES)
    // ==========================================
    'credential.degree-game-design.title': 'Diseño y Desarrollo de Videojuegos',
    'credential.specialization-3d-animation.title': 'Especialización en Animación 3D para las industrias del Entretenimiento',
    'credential.claude-101.title': 'Certificate of Completion: Claude 101',
    'credential.claude-api.title': 'Building with the Claude API',
    'credential.ai-fluency.title': 'Certificate of Completion: AI Fluency Framework & Foundations',
    'credential.claude-code-action.title': 'Claude Code in Action',
    'credential.claude-architect-foundations.title': 'Claude Certified Architect — Foundations',

    // ==========================================
    // NOMBRES DE HABILIDADES (ES)
    // ==========================================
    'skill.game-design': 'Diseño de Videojuegos',
    'skill.game-programming': 'Programación de Videojuegos',
    'skill.level-design': 'Diseño de Niveles',
    'skill.scenario-design': 'Diseño de Escenarios',
    'skill.character-design': 'Diseño de Personajes',
    'skill.pixel-art': 'Pixel Art',
    'skill.digital-illustration': 'Ilustración Digital',
    'skill.graphic-design': 'Diseño Gráfico y Composición',
    'skill.digital-collage': 'Collage Digital',
    'skill.branding': 'Branding',
    'skill.3d-modeling': 'Modelado 3D',
    'skill.3d-animation': 'Animación 3D',
    'skill.pbr-texturing': 'Texturizado PBR',
    'skill.3d-lighting': 'Iluminación 3D',
    'skill.ux-ui-design': 'UX/UI Design',
    'skill.prototyping': 'Prototipado',
    'skill.csharp': 'C#',
    'skill.javascript': 'JavaScript',
    'skill.html-css': 'HTML y CSS',
    'skill.typescript': 'TypeScript',
    'skill.sql': 'SQL',
    'skill.java': 'Java',
    'skill.cpp': 'C++',
    'skill.python': 'Python',
    'skill.kotlin': 'Kotlin',
    'skill.react': 'React',
    'skill.nodejs': 'Node.js',
    'skill.astro': 'Astro',
    'skill.mongodb': 'MongoDB',
    'skill.postgresql': 'PostgreSQL',
    'skill.oracle': 'Oracle',
    'skill.data-modeling': 'Modelado y Comprensión de Datos',
    'skill.ticket-management': 'Gestión de Tickets',
    'skill.incident-management': 'Gestión de Incidencias',
    'skill.root-cause-analysis': 'Análisis de Causa Raíz',
    'skill.log-analysis': 'Análisis de Logs',
    'skill.technical-documentation': 'Documentación Técnica y Runbooks',
    'skill.troubleshooting': 'Troubleshooting',
    'skill.production-support': 'Soporte de Producción',
    'skill.monitoring': 'Monitorización',
    'skill.daily-checks': 'Daily Checks',
    'skill.functional-analysis': 'Análisis Funcional',
    'skill.metrics-analysis': 'Análisis de Métricas',
    'skill.event-correlation': 'Correlación de Eventos',
    'skill.grafana': 'Grafana',
    'skill.elastic': 'Elastic',
    'skill.conviva': 'Conviva',
    'skill.kibana': 'Kibana',
    'skill.marfeel': 'Marfeel',
    'skill.promql': 'PromQL',
    'skill.vod': 'VOD',
    'skill.content-ingestion': 'Ingesta de Contenidos',
    'skill.playback-validation': 'Validación de Reproducción',
    'skill.subtitle-validation': 'Validación de Subtítulos',
    'skill.geoblocking': 'Geobloqueo',
    'skill.cdn': 'CDN y Distribución de Contenido',
    'skill.live-streaming': 'Streaming en Directo',
    'skill.hls': 'HLS',
    'skill.cloudfront-streaming': 'Amazon CloudFront',
    'skill.fastly': 'Fastly',
    'skill.mpeg-dash': 'MPEG-DASH',
    'skill.video-transcoding': 'Transcodificación de Vídeo',
    'skill.prompt-engineering': 'Prompt Engineering',
    'skill.ai-assisted-dev': 'Desarrollo Asistido por IA',
    'skill.ai-agents': 'Orquestación de Agentes de IA',
    'skill.ai-code-validation': 'Validación de Código Generado por IA',
    'skill.task-automation': 'Automatización de Tareas',
    'skill.chatgpt': 'ChatGPT',
    'skill.claude': 'Claude',
    'skill.github-copilot': 'GitHub Copilot',
    'skill.gemini': 'Gemini',
    'skill.cloudflare-workers': 'Cloudflare Workers',
    'skill.deployment-validation': 'Validación de Despliegues y Releases',
    'skill.deployments': 'Despliegues',
    'skill.rollback': 'Rollback',
    'skill.cloud-storage': 'Almacenamiento Cloud',
    'skill.git': 'Git y GitHub',
    'skill.jira': 'Jira',
    'skill.confluence': 'Confluence',
    'skill.vscode': 'Visual Studio Code',
    'skill.visual-studio': 'Visual Studio 2022',
    'skill.miro': 'Miro',
    'skill.postman': 'Postman',
    'skill.aws': 'AWS',
    'skill.argocd': 'ArgoCD',
    'skill.aws-cognito': 'AWS Cognito',
    'skill.aws-lambda': 'AWS Lambda',
    'skill.aws-dynamodb': 'AWS DynamoDB',
    'skill.azure': 'Microsoft Azure',
    'skill.docker': 'Docker',
    'skill.gitlab-ci': 'GitLab CI/CD',

    // ==========================================
    // DESCRIPCIONES DE HABILIDADES (ES)
    // ==========================================
    'skill.game-design.desc': 'Diseño de mecánicas, reglas, progresión y experiencias de juego, con participación en la implementación y la integración en Unity y otras herramientas.',
    'skill.game-programming.desc': 'Implementación de mecánicas sencillas en Unity con C#, apoyándome en documentación y herramientas de IA.',
    'skill.level-design.desc': 'Planificación de la jugabilidad, los recorridos y la progresión de los niveles.',
    'skill.scenario-design.desc': 'Diseño de escenarios para videojuegos: concept art de entornos, modelado 3D de espacios y construcción de mapas, como en Fantasy Island, Gorobeia, Terra Trolls, The Rescue y Whispers of Shadows.',
    'skill.character-design.desc': 'Diseño conceptual de personajes y turn around, como base para su modelado 3D.',
    'skill.pixel-art.desc': 'Creación de sprites, animaciones y ambientes en pixel art para juegos 2D.',
    'skill.digital-illustration.desc': 'Creación de ilustraciones y concept art, cuidando la composición, con Photoshop y tableta gráfica.',
    'skill.graphic-design.desc': 'Diseño de piezas gráficas para redes sociales con Canva, cuidando la composición y la jerarquía visual.',
    'skill.digital-collage.desc': 'Composición de carátulas y piezas de arte conceptual mediante collage digital en Photoshop.',
    'skill.branding.desc': 'Creación de la identidad visual de equipos y proyectos.',
    'skill.3d-modeling.desc': 'Modelado de personajes, escenarios y props en 3ds Max, con un primer uso de Blender, principalmente en proyectos académicos como Raki y Fantasy Island.',
    'skill.3d-animation.desc': 'Prácticas de animación de personajes y objetos con keyframes, mocap, morphing y rigging (CAT), como en Raki Animación.',
    'skill.pbr-texturing.desc': 'Experiencia académica con UVs y texturizado de modelos en Substance Painter, principalmente en Raki.',
    'skill.3d-lighting.desc': 'Iluminación básica de escenas 3D: luces, sombras y ambientación.',
    'skill.ux-ui-design.desc': 'Diseño de interfaces centradas en el usuario con Figma, apoyado en investigación y pruebas con usuarios, como en Go For Sports.',
    'skill.prototyping.desc': 'Creación de prototipos interactivos en Figma para validar ideas con usuarios.',
    'skill.csharp.desc': 'Scripts de mecánicas y sistemas en Unity (Astro Fury, Histeria), apoyándome en documentación y herramientas de IA.',
    'skill.javascript.desc': 'Scripts para juegos con Phaser 3 y lógica de interfaces web, con apoyo de IA.',
    'skill.html-css.desc': 'Experiencia en la estructura y los estilos de interfaces web, incluida la maquetación responsive con Tailwind CSS y el apoyo de herramientas de IA.',
    'skill.typescript.desc': 'Primer contacto con el tipado estático en el código de este portfolio.',
    'skill.sql.desc': 'Consultas SQL (SELECT, INSERT, UPDATE, DELETE) para consultar y revisar datos en bases de datos relacionales.',
    'skill.java.desc': 'Experiencia académica básica con Java durante el grado.',
    'skill.cpp.desc': 'Programación orientada a objetos en C++ en el juego grupal ZombieRush.',
    'skill.python.desc': 'Experiencia académica básica con Python.',
    'skill.kotlin.desc': 'Aplicación Android con Jetpack Compose (Flappy Chef).',
    'skill.react.desc': 'Primeros pasos con la biblioteca de interfaces de usuario.',
    'skill.nodejs.desc': 'Primeros pasos con JavaScript en el servidor.',
    'skill.astro.desc': 'Framework web con el que está construido este portfolio.',
    'skill.mongodb.desc': 'Comprensión de la estructura de los datos, interpretación de consultas e investigación de inconsistencias en colecciones, tanto en prácticas académicas como en el trabajo.',
    'skill.postgresql.desc': 'Consultas y exploración de datos relacionales.',
    'skill.oracle.desc': 'Contacto puntual con Oracle para consultar datos.',
    'skill.data-modeling.desc': 'Comprensión de la estructura de los datos y de cómo se relacionan entre sí, para interpretar consultas e investigar inconsistencias.',
    'skill.ticket-management.desc': 'Registro, seguimiento y cierre de tickets de incidencias y solicitudes de soporte en el día a día.',
    'skill.incident-management.desc': 'Seguimiento de incidencias desde su detección hasta su resolución y cierre, incluidos problemas de reproducción en plataformas de streaming.',
    'skill.root-cause-analysis.desc': 'Búsqueda del origen de una incidencia relacionando logs, métricas y eventos.',
    'skill.log-analysis.desc': 'Investigación de logs en Kibana y Elastic para localizar errores y reconstruir qué ocurrió en una incidencia.',
    'skill.technical-documentation.desc': 'Redacción de documentación técnica y runbooks con los pasos para resolver incidencias recurrentes.',
    'skill.troubleshooting.desc': 'Diagnóstico y resolución de incidencias técnicas en aplicaciones en producción.',
    'skill.production-support.desc': 'Soporte operativo continuo de aplicaciones y servicios en producción: vigilancia de su estado y resolución de incidencias.',
    'skill.monitoring.desc': 'Seguimiento del estado de servicios y aplicaciones en producción mediante paneles de Grafana y Kibana.',
    'skill.daily-checks.desc': 'Revisiones operativas diarias para comprobar el estado de las aplicaciones.',
    'skill.functional-analysis.desc': 'Análisis del impacto funcional de las incidencias sobre usuarios y negocio.',
    'skill.metrics-analysis.desc': 'Interpretación de métricas y paneles para apoyar el diagnóstico de incidencias.',
    'skill.event-correlation.desc': 'Relación entre eventos e incidencias para orientar la búsqueda de causas, con apoyo del equipo.',
    'skill.grafana.desc': 'Lectura de paneles de métricas para seguir el estado de los servicios.',
    'skill.elastic.desc': 'Búsqueda y filtrado de logs y métricas durante la investigación de incidencias.',
    'skill.conviva.desc': 'Consulta de la analítica de experiencia de vídeo para detectar problemas de reproducción.',
    'skill.kibana.desc': 'Consulta básica de logs en Elasticsearch a través de Kibana.',
    'skill.marfeel.desc': 'Primer contacto con la analítica de tráfico y contenidos de Marfeel.',
    'skill.promql.desc': 'Primeras consultas de métricas con PromQL.',
    'skill.vod.desc': 'Revisión de la publicación y distribución de contenido bajo demanda.',
    'skill.content-ingestion.desc': 'Comprobación de la recepción y el procesado de contenido multimedia antes de su publicación.',
    'skill.playback-validation.desc': 'Comprobación de la reproducción en distintos dispositivos y navegadores.',
    'skill.subtitle-validation.desc': 'Verificación de los subtítulos y de su sincronización con el contenido.',
    'skill.geoblocking.desc': 'Comprobación de las restricciones geográficas de contenido por región.',
    'skill.cdn.desc': 'Comprensión de cómo la CDN entrega el contenido y revisión de su comportamiento durante incidencias de reproducción.',
    'skill.live-streaming.desc': 'Seguimiento de emisiones en directo (ingesta y distribución), con apoyo del equipo.',
    'skill.hls.desc': 'Lectura básica de manifiestos y segmentos al revisar problemas de reproducción.',
    'skill.cloudfront-streaming.desc': 'Consulta de CloudFront como CDN al investigar problemas de entrega de contenido.',
    'skill.fastly.desc': 'Consulta de Fastly como CDN al investigar problemas de entrega de contenido.',
    'skill.mpeg-dash.desc': 'Nociones del protocolo de streaming adaptativo DASH.',
    'skill.video-transcoding.desc': 'Nociones de conversión entre formatos y resoluciones de vídeo.',
    'skill.prompt-engineering.desc': 'Diseño de prompts claros y con contexto para obtener resultados útiles de ChatGPT, Claude y Gemini.',
    'skill.ai-assisted-dev.desc': 'Uso de IA para diseñar, programar, depurar y documentar proyectos propios como BONK, Menteando y este portfolio.',
    'skill.ai-agents.desc': 'Coordinación de agentes de IA para repartir y ejecutar tareas de desarrollo.',
    'skill.ai-code-validation.desc': 'Revisión y validación del código generado con IA antes de integrarlo.',
    'skill.task-automation.desc': 'Automatización de tareas repetitivas con scripts y herramientas de IA.',
    'skill.chatgpt.desc': 'Uso de ChatGPT para investigación, generación de contenido y apoyo al desarrollo.',
    'skill.claude.desc': 'Uso de Claude y Claude Code para desarrollo asistido, documentación y análisis técnico.',
    'skill.github-copilot.desc': 'Apoyo de GitHub Copilot al escribir y revisar código.',
    'skill.gemini.desc': 'Uso de Gemini para investigación documental y organización de información.',
    'skill.cloudflare-workers.desc': 'Integración de Cloudflare Workers junto con EmailJS en Menteando.',
    'skill.deployment-validation.desc': 'Comprobaciones técnicas antes y después de publicar una versión para confirmar que funciona correctamente.',
    'skill.deployments.desc': 'Seguimiento y comprobación de la publicación de nuevas versiones en producción.',
    'skill.rollback.desc': 'Seguimiento de reversiones de despliegues ante fallos o incidencias.',
    'skill.cloud-storage.desc': 'Consulta y comprobación de ficheros en almacenamiento en la nube (S3, Azure Blob).',
    'skill.git.desc': 'Uso de repositorios, ramas, commits y revisión de cambios, principalmente con GitHub Desktop y herramientas de desarrollo asistido.',
    'skill.jira.desc': 'Gestión de incidencias, tareas y proyectos, tanto en equipos académicos como en soporte profesional.',
    'skill.confluence.desc': 'Consulta y redacción de documentación técnica y colaborativa.',
    'skill.vscode.desc': 'Editor de código principal, con extensiones y personalización.',
    'skill.visual-studio.desc': 'IDE para escribir y depurar scripts de C# en Unity.',
    'skill.miro.desc': 'Pizarras colaborativas para lluvia de ideas y planificación en proyectos de equipo.',
    'skill.postman.desc': 'Pruebas básicas de APIs REST con colecciones y variables.',
    'skill.aws.desc': 'Consulta de servicios de AWS (CloudFront, Cognito, Lambda, DynamoDB, MediaTailor) para contextualizar incidencias.',
    'skill.argocd.desc': 'Consulta del estado de los despliegues en ArgoCD.',
    'skill.aws-cognito.desc': 'Nociones del servicio de autenticación de AWS.',
    'skill.aws-lambda.desc': 'Nociones de funciones serverless en AWS.',
    'skill.aws-dynamodb.desc': 'Nociones de la base de datos NoSQL de AWS.',
    'skill.azure.desc': 'Nociones del portal y los recursos de Azure.',
    'skill.docker.desc': 'Nociones de contenedores Docker.',
    'skill.gitlab-ci.desc': 'Nociones de pipelines de integración y despliegue en GitLab.',

    // ============================================
    // PROYECTOS: textos añadidos por la actualización de contenidos (ES)
    // ============================================
    'project.link.codigo_en_github': 'Código en GitHub',
    'project.link.concept_art_de_escenario_pdf': 'Concept art de escenario (PDF)',
    'project.link.concept_art_de_personaje_pdf': 'Concept art de personaje (PDF)',
    'project.link.github': 'GitHub',

    // Colecciones (BONK) y simulación de físicas (ES)
    'collection.games_title': 'Los juegos de la colección',
    'collection.play': 'Jugar en itch.io',
    'collection.details': 'Ver detalles',
    'collection.opens_itch': 'Se abre en itch.io en una pestaña nueva',
    'collection.back_to': 'Volver a',
    'collection.how_to_play': 'Cómo jugar',
    'collection.mechanics': 'Mecánicas principales',
    'collection.power_ups': 'Potenciadores temporales',
    'collection.upgrades': 'Mejoras permanentes',
    'collection.highlights': 'Características destacadas',
    'collection.technologies': 'Tecnologías',
    'collection.other_games': 'Más juegos de la colección',
    'collection.ai_note': 'Este juego forma parte de una colección desarrollada con asistencia de inteligencia artificial.',
    'collection.ai_note_link': 'Ver cómo se hizo',
    'project.tag.web_games': 'Videojuegos web',
    'project.tag.ai_assisted': 'Desarrollo con IA',
    'project.tag.physics_simulation': 'Simulación física',
    'project.tag.huion_tablet': 'Tableta Huion',
    'project.tag.pencil_charcoal': 'Lápiz y carboncillo',
    'project.tag.pencil_paper': 'Lápiz y papel',
    'project.link.bonk_itch': 'Colección BONK en itch.io',
  },

  en: {
    ...projectTexts.en,
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.trayectory': 'Career',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Related projects
    'project.related.subject': 'Same subject',
    'project.related.discipline': 'Same area',
    'project.related.year': 'Same year',
    'project.related.technologies': 'Same technology',
    'project.related.languages': 'Same language',
    'project.related.default': 'Related project',

    // 404
    'notfound.title': 'This page does not exist',
    'notfound.text': 'The link may be broken or the project may have moved.',
    'notfound.home': 'Back to home',
    'notfound.projects': 'View projects',

    // Profile
    'profile.title': 'Graduate in Game Design and Development',
    'profile.job': 'Application Junior Support Analyst',

    // Hero
    'hero.status': 'Active in the sector',
    'hero.name': 'Daniel Pérez Navarro -',
    'hero.title': 'Design & Development ',
    'hero.title_end': ' of Systems and Experiences',
    'hero.description': 'I combine creativity, design and technology to develop games, applications and digital experiences, exploring new tools and ways to turn ideas into real projects.',
    'hero.cta_projects': 'View Projects',
    'hero.cta_about': 'About Me',

    // Stats
    'stats.projects': 'Projects Completed',
    'stats.experience': 'Years Experience',
    'stats.areas': 'Work Areas',

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
      'project.gallery.image': 'Project image',
    'project.challenges_title': 'Challenges & Solutions',
    'project.key_learnings_label': 'Key Learnings',
    'project.challenge_label': 'Challenge',
    'project.solution_label': 'Solution',
    'project.challenge_fallback': 'No specific challenge has been documented.',
    'project.solution_fallback': 'The solution to this challenge is being documented.',
    'project.story_title': 'Project Story',
    'project.story_subtitle': 'The journey from context to learning',
    'project.story.context': 'Context',
    'project.story.objective': 'Objective',
    'project.story.implementation': 'Implementation',
    'project.story.learning': 'Learning',
    'project.role_label': 'My Role',
    'project.team_label': 'Team',
    'project.duration_label': 'Duration',
    'project.technologies_label': 'Technologies',
    'project.skills_gained_label': 'Skills Gained',
    'project.highlights_label': 'Highlights',
    'project.status.completed': 'Completed',
    'project.status.in_development': 'In Development',
    'project.status.prototype': 'Prototype',
    'project.status.paused': 'Paused',
    'project.resources_title': 'Resources & Links',
    'project.resources_subtitle': 'Videos, documents, playable demos and project links',
    'project.resources.open_external': 'Open in a new tab',
    'project.resources.play': 'Play',
    'project.related_title': 'Related Projects',
    'project.resources.github': 'Code on GitHub',
    'project.resources.video': 'Video',
    'project.resources.pdf': 'PDF document',
    'project.resources.prototype': 'Interactive prototype',
    'project.resources.audio': 'Audio',
    'project.resources.website': 'Website',
    'project.type.academic': 'Academic project',
    'project.type.degree_project': 'Final Degree Project',
    'project.type.personal': 'Personal project',
    'project.type.freelance': 'Freelance project',
    'project.tag.design_patterns': 'Design patterns',
    'project.tag.3d_modeling': '3D modeling',
    'project.tag.export': 'Exporting',
    'project.tag.texturing': 'Texturing',
    'project.tag.illustration': 'Illustration',
    'project.tag.cognitive_development': 'Cognitive development',
    'project.tag.gamification': 'Gamification',
    'project.tag.narrative': 'Narrative',
    'project.tag.graphic_design': 'Graphic design',
    'project.tag.3d_animation': '3D animation',
    'project.tag.characters': 'Characters',
    'project.tag.game_design': 'Game design',
    'project.link.play': 'Play',
    'project.link.explainer_video': 'Explainer video',
    'project.link.prototype': 'Prototype',
    'project.link.report_pdf': 'Project report PDF',
    'project.link.studio_website': 'Studio website',
    'project.link.visit_website': 'Visit website',
    'project.link.demo_video': 'Download demo video',

    // ============================================
    // ALIEN RUSH (EN)
    // ============================================

    // ============================================
    // ASTROFURY (EN)
    // ============================================

    // ============================================
    // FANTASY ISLAND (EN)
    // ============================================

    // ============================================
    // FLAPPY CHEF (EN)
    // ============================================

    // ============================================
    // GO FOR SPORTS (EN)
    // ============================================

    // ============================================
    // GOROBEIA (EN)
    // ============================================

    // ============================================
    // HISTERIA (EN)
    // ============================================

    // ============================================
    // HIT AND UFO (EN)
    // ============================================

    // ============================================
    // INTERNATIONAL WARFARE (EN)
    // ============================================

    // ============================================
    // MENTEANDO (EN)
    // ============================================

    // ============================================
    // RAKI (EN)
    // ============================================

    // ============================================
    // RAKI ANIMACIÓN (EN)
    // ============================================

    // ============================================
    // REDES SOCIALES (EN)
    // ============================================

    // ============================================
    // SÍ, SEÑOR OSCURO (EN)
    // ============================================

    // ============================================
    // THE WHISPERS OF SHADOWS (EN)
    // ============================================

    // ============================================
    // YUMALA (EN)
    // ============================================

    // About
    'about.title': 'About Me',
    'about.subtitle': 'Learn about my journey, skills and passions',
    'about.resume_title': 'Summary',
    'about.resume': 'I hold a degree in Game Design and Development and currently work in application support, while continuing my training in 3D animation.',
    'about.resume_2': 'I enjoy combining design, technology and creativity to shape ideas and turn them into working projects. I have worked on games, illustration, 3D modeling, interfaces and web applications, and I have also gained professional experience in data analysis, monitoring and incident resolution.',
    'about.resume_3': 'I enjoy learning new tools, understanding how systems work and finding practical solutions. I also use artificial intelligence as part of my development, experimentation and learning process.',
    'about.skills_title': 'Work Areas',
    'about.skills_subtitle': 'What I do and the projects that back it up',
    'about.skills_related': 'Related projects',
    'about.tools_title': 'Main Tools',
    'about.tools_subtitle': 'The most representative ones in my work, grouped by purpose',
    'about.languages_title': 'Languages and Technologies Used',
    'about.languages_subtitle': 'Technologies I have worked with in projects and practice',
    'about.languages_note': 'If you want to see a complete inventory of my skills and technologies, you can visit the Career page.',
    'about.location_title': 'Madrid, Spain',
    'about.clock_title': 'Local Time',
    'about.timezone': 'Madrid Time (UTC+1)',
    'about.available': 'Available for projects',
    'about.journey_title': 'My Journey',
    'about.journey_subtitle': 'A journey through my education and experience',
    'about.learning_title': 'Education and Certifications',
    'about.learning_subtitle': 'Degrees, completed courses and certifications in preparation.',
    'about.learning.credentials_title': 'Official degrees',
    'about.learning.skills_title': 'Inventory by category',
    'about.learning.in_progress': 'In progress',
    'about.learning.completed': 'Completed',
    'about.learning.tag_university': 'University',
    'about.learning.tag_work': 'Work',
    'about.learning.tag_personal': 'Personal',
    'about.learning.short_courses_title': 'Completed courses',
    'about.learning.pending_title': 'Certifications in preparation',
    'about.learning.current_title': 'Current learning',
    'about.learning.current_description': 'I am expanding my knowledge of 3D animation, modern web development and tools for building digital products.',
    'about.learning.view_credential': 'View credential',
    'about.learning.pending': 'Pending',
    'about.timeline.period1': '2026 — Present',
    'about.timeline.title1': 'Master’s in 3D Animation for the Entertainment Industries',
    'about.timeline.desc1': 'Specialized training in 3D animation applied to the entertainment industries, expanding my knowledge of production, tools and animation techniques.',
    'about.timeline.period2': 'February 2025 — Present',
    'about.timeline.title2': 'Application Support and Maintenance Analyst',
    'about.timeline.desc2': 'Support of digital applications and services in production, taking part in incident investigation and management, log and data analysis, monitoring, operational validations and technical documentation. I work with observability tools and audiovisual distribution platforms.',
    'about.timeline.period3': 'September 2021 — July 2026',
    'about.timeline.title3': "Bachelor's Degree in Game Design and Development",
    'about.timeline.desc3': 'Multidisciplinary training in game design and development, programming, digital art, 3D modeling and animation, narrative, interfaces and project management, applied to individual and team projects.',

    // Skills (Career page)
    'skills.title': 'Skills',
    'skills.subtitle': 'A searchable inventory of knowledge and technologies',
    'skills.featured_title': 'Highlighted skills',
    'skills.featured_subtitle': 'A representative selection of my current strengths',
    'skills.scale_title': 'Self-assessment scale',
    'skills.scale_note': 'Levels are a self-assessment of my current autonomy, not an external accreditation.',
    'skills.kind_skill': 'Skills',
    'skills.kind_tool': 'Tools and technologies',
    'level.pending': 'Level pending assessment',

    // Global search
    'search.title': 'Looking for something specific?',
    'search.subtitle': 'Get straight to the point. Find technologies, skills or projects without browsing the whole portfolio.',
    'search.label': 'Search the portfolio',
    'search.open': 'Go to the portfolio search',
    'search.menu': 'Search',
    'search.placeholder': 'Try MongoDB, Unity, Animation…',
    'search.clear': 'Clear search',
    'search.suggestions': 'Try:',
    'search.hint': 'Use the ↑ ↓ arrow keys to move through the results and Enter to open the selected one.',
    'search.result_one': '1 result',
    'search.result_other': '{n} results',
    'search.no_results': 'No results for “{q}”. Try another technology, skill or project.',
    'search.error': 'The search index could not be loaded.',
    'search.more': 'Show {n} more',
    'search.less': 'Show less',
    'search.group.projects': 'Projects',
    'search.group.skills': 'Skills',
    'search.group.experience': 'Experience and career',
    'search.group.education': 'Education',
    'search.type.project': 'Project',
    'search.type.skill': 'Skill',
    'search.type.tool': 'Tool',
    'search.type.area': 'Work area',
    'search.type.category': 'Category',
    'search.type.experience': 'Experience',
    'search.type.timeline': 'Timeline',
    'search.type.degree': 'Degree',
    'search.type.course': 'Course',
    'search.type.pending': 'In preparation',
    'skills.intro_title': 'Introductory knowledge',
    'skills.intro_description': 'Technologies I have had a first contact or one-off experience with. Listed to show breadth, not mastery.',
    'level.1.name': 'Basics',
    'level.1.desc': 'Initial knowledge or one-off experience.',
    'level.2.name': 'Basic',
    'level.2.desc': 'Practical use with support.',
    'level.3.name': 'Intermediate',
    'level.3.desc': 'Autonomy in everyday tasks.',
    'level.4.name': 'Advanced',
    'level.4.desc': 'Fluency in complex tasks.',
    'level.5.name': 'Very advanced',
    'level.5.desc': 'High autonomy and ability to guide others.',
    'featured.game-design': 'Game design',
    'featured.digital-illustration': 'Digital illustration',
    'featured.graphic-design': 'Graphic design and composition',
    'featured.mongodb-data': 'MongoDB and data analysis',
    'featured.log-rca': 'Log analysis and root cause',
    'featured.incident-management': 'Incident management',
    'featured.prompt-engineering': 'Prompt Engineering',
    'featured.ticket-management': 'Ticket management',
    'about.tools_other_title': 'Other tools used',

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
    'contact.sending': 'Sending...',
    'contact.sent': 'Message sent successfully!',
    'contact.not_configured': 'The form is not connected yet. You can email me directly in the meantime.',
    'contact.send_error': 'The message could not be sent. Please try again later.',
    'contact.default_subject': 'New message from the portfolio',
    'contact.email_label': 'Email',
    'contact.social_label': 'Social Networks',
    'contact.location_label': 'Location',
    'contact.available': 'Available for projects',
    'contact.hero_title': "Let's build something epic together",
    'contact.hero_description': "I'm open to new collaborations, freelance work, and product opportunities. If you have an idea or need a creative and technical approach, let's talk.",

    // Footer
    'footer.copy': '© 2026 All rights reserved. ',

    // CTA
    'cta.title': "Let's build something",
    'cta.title_accent': 'epic together.',
    'cta.description': 'Currently looking for new opportunities and collaborations. Whether you have a project in mind or just want to chat, my inbox is always open.',
    'cta.button_contact': 'Get In Touch',
    'cta.button_cv': 'Download CV',

    // Filters
    'filter.clear': 'Clear filters',
    'filter.discipline': 'Discipline',
    'filter.context': 'Context',
    'filter.date_range': 'Date range',
    'filter.context.grado': 'Degree',
    'filter.context.master': 'Master',
    'filter.context.personal': 'Personal project',
    'filter.context.laboral': 'Professional project',
    'filter.min_year': 'Minimum year',
    'filter.max_year': 'Maximum year',
    'filter.open': 'Filters',
    'discipline.videojuegos': 'Video Games',
    'discipline.red': 'Network',
    'discipline.aplicaciones': 'Mobile Apps',
    'discipline.desarrollo-web': 'Web Development',
    'discipline.modelado-3d': '3D Modeling',
    'discipline.animacion-3d': '3D Animation',
    'discipline.ilustracion': 'Illustration / Concept Art',
    'discipline.diseño-2d': 'Graphic Design',
    'discipline.ux-ui': 'UX/UI',
    'discipline.arquitectura': 'Software Architecture',
    'discipline.bases-datos': 'Databases',
    'discipline.devops': 'DevOps / Infrastructure',
    'discipline.analisis-datos': 'Data Analysis',
    'discipline.documentacion': 'Technical Documentation',
    'discipline.ia': 'Artificial Intelligence',

    // ==========================================
    // CATEGORIES (EN)
    // ==========================================
    'category.game_development': 'Games and interactive experiences',
    'category.design': 'Digital art and UX/UI',
    'category.programming': 'Programming and development',
    'category.databases': 'Databases',
    'category.support': 'Support and observability',
    'category.streaming': 'Streaming and audiovisual platforms',
    'category.ai': 'AI and automation',
    'category.cloud_devops': 'Cloud, DevOps and tools',

    // ==========================================
    // CREDENTIAL TYPES (EN)
    // ==========================================
    'credential.type.degree': 'Degree',
    'credential.type.master': "Master's degree",
    'credential.type.specialization': 'Specialization',
    'credential.type.short_course': 'Completed course',
    'credential.type.pending': 'In preparation',
    'credential.master-3d-animation.title': '3D Animation for the Entertainment Industries',

    // ==========================================
    // CREDENTIAL TITLES (EN)
    // ==========================================
    'credential.degree-game-design.title': 'Game Design and Development',
    'credential.specialization-3d-animation.title': 'Advanced 3D Animation',
    'credential.claude-101.title': 'Certificate of Completion: Claude 101',
    'credential.claude-api.title': 'Building with the Claude API',
    'credential.ai-fluency.title': 'Certificate of Completion: AI Fluency Framework & Foundations',
    'credential.claude-code-action.title': 'Claude Code in Action',
    'credential.claude-architect-foundations.title': 'Claude Certified Architect — Foundations',

    // ==========================================
    // SKILL NAMES (EN)
    // ==========================================
    'skill.game-design': 'Game Design',
    'skill.game-programming': 'Game Programming',
    'skill.level-design': 'Level Design',
    'skill.scenario-design': 'Environment Design',
    'skill.character-design': 'Character Design',
    'skill.pixel-art': 'Pixel Art',
    'skill.digital-illustration': 'Digital Illustration',
    'skill.graphic-design': 'Graphic Design and Composition',
    'skill.digital-collage': 'Digital Collage',
    'skill.branding': 'Branding',
    'skill.3d-modeling': '3D Modeling',
    'skill.3d-animation': '3D Animation',
    'skill.pbr-texturing': 'PBR Texturing',
    'skill.3d-lighting': '3D Lighting',
    'skill.ux-ui-design': 'UX/UI Design',
    'skill.prototyping': 'Prototyping',
    'skill.csharp': 'C#',
    'skill.javascript': 'JavaScript',
    'skill.html-css': 'HTML and CSS',
    'skill.typescript': 'TypeScript',
    'skill.sql': 'SQL',
    'skill.java': 'Java',
    'skill.cpp': 'C++',
    'skill.python': 'Python',
    'skill.kotlin': 'Kotlin',
    'skill.react': 'React',
    'skill.nodejs': 'Node.js',
    'skill.astro': 'Astro',
    'skill.mongodb': 'MongoDB',
    'skill.postgresql': 'PostgreSQL',
    'skill.oracle': 'Oracle',
    'skill.data-modeling': 'Data Modeling and Understanding',
    'skill.ticket-management': 'Ticket Management',
    'skill.incident-management': 'Incident Management',
    'skill.root-cause-analysis': 'Root Cause Analysis',
    'skill.log-analysis': 'Log Analysis',
    'skill.technical-documentation': 'Technical Documentation and Runbooks',
    'skill.troubleshooting': 'Troubleshooting',
    'skill.production-support': 'Production Support',
    'skill.monitoring': 'Monitoring',
    'skill.daily-checks': 'Daily Checks',
    'skill.functional-analysis': 'Functional Analysis',
    'skill.metrics-analysis': 'Metrics Analysis',
    'skill.event-correlation': 'Event Correlation',
    'skill.grafana': 'Grafana',
    'skill.elastic': 'Elastic',
    'skill.conviva': 'Conviva',
    'skill.kibana': 'Kibana',
    'skill.marfeel': 'Marfeel',
    'skill.promql': 'PromQL',
    'skill.vod': 'VOD',
    'skill.content-ingestion': 'Content Ingestion',
    'skill.playback-validation': 'Playback Validation',
    'skill.subtitle-validation': 'Subtitle Validation',
    'skill.geoblocking': 'Geoblocking',
    'skill.cdn': 'CDN and Content Delivery',
    'skill.live-streaming': 'Live Streaming',
    'skill.hls': 'HLS',
    'skill.cloudfront-streaming': 'Amazon CloudFront',
    'skill.fastly': 'Fastly',
    'skill.mpeg-dash': 'MPEG-DASH',
    'skill.video-transcoding': 'Video Transcoding',
    'skill.prompt-engineering': 'Prompt Engineering',
    'skill.ai-assisted-dev': 'AI-Assisted Development',
    'skill.ai-agents': 'AI Agent Orchestration',
    'skill.ai-code-validation': 'AI-Generated Code Validation',
    'skill.task-automation': 'Task Automation',
    'skill.chatgpt': 'ChatGPT',
    'skill.claude': 'Claude',
    'skill.github-copilot': 'GitHub Copilot',
    'skill.gemini': 'Gemini',
    'skill.cloudflare-workers': 'Cloudflare Workers',
    'skill.deployment-validation': 'Deployment and Release Validation',
    'skill.deployments': 'Deployments',
    'skill.rollback': 'Rollback',
    'skill.cloud-storage': 'Cloud Storage',
    'skill.git': 'Git and GitHub',
    'skill.jira': 'Jira',
    'skill.confluence': 'Confluence',
    'skill.vscode': 'Visual Studio Code',
    'skill.visual-studio': 'Visual Studio 2022',
    'skill.miro': 'Miro',
    'skill.postman': 'Postman',
    'skill.aws': 'AWS',
    'skill.argocd': 'ArgoCD',
    'skill.aws-cognito': 'AWS Cognito',
    'skill.aws-lambda': 'AWS Lambda',
    'skill.aws-dynamodb': 'AWS DynamoDB',
    'skill.azure': 'Microsoft Azure',
    'skill.docker': 'Docker',
    'skill.gitlab-ci': 'GitLab CI/CD',

    // ==========================================
    // SKILL DESCRIPTIONS (EN)
    // ==========================================
    'skill.game-design.desc': 'Design of mechanics, rules, progression and play experiences, taking part in implementation and integration in Unity and other tools.',
    'skill.game-programming.desc': 'Implementation of simple mechanics in Unity with C#, supported by documentation and AI tools.',
    'skill.level-design.desc': 'Planning the gameplay, routes and progression of levels.',
    'skill.scenario-design.desc': 'Environment design for games: environment concept art, 3D modeling of spaces and map building, as in Fantasy Island, Gorobeia, Terra Trolls, The Rescue and Whispers of Shadows.',
    'skill.character-design.desc': 'Conceptual character design and turnarounds, as a basis for 3D modeling.',
    'skill.pixel-art.desc': 'Creation of sprites, animations and atmospheres in pixel art for 2D games.',
    'skill.digital-illustration.desc': 'Creation of illustrations and concept art with attention to composition, using Photoshop and a graphics tablet.',
    'skill.graphic-design.desc': 'Design of graphic pieces for social media with Canva, paying attention to composition and visual hierarchy.',
    'skill.digital-collage.desc': 'Composition of covers and concept art pieces through digital collage in Photoshop.',
    'skill.branding.desc': 'Creation of the visual identity of teams and projects.',
    'skill.3d-modeling.desc': 'Modeling of characters, environments and props in 3ds Max, with first steps in Blender, mainly in academic projects such as Raki and Fantasy Island.',
    'skill.3d-animation.desc': 'Practice animating characters and objects with keyframes, mocap, morphing and rigging (CAT), as in Raki Animation.',
    'skill.pbr-texturing.desc': 'Academic experience with UVs and texturing models in Substance Painter, mainly in Raki.',
    'skill.3d-lighting.desc': 'Basic lighting of 3D scenes: lights, shadows and mood.',
    'skill.ux-ui-design.desc': 'User-centered interface design with Figma, backed by user research and testing, as in Go For Sports.',
    'skill.prototyping.desc': 'Creation of interactive prototypes in Figma to validate ideas with users.',
    'skill.csharp.desc': 'Scripts for mechanics and systems in Unity (Astro Fury, Histeria), supported by documentation and AI tools.',
    'skill.javascript.desc': 'Scripts for Phaser 3 games and web interface logic, with AI support.',
    'skill.html-css.desc': 'Experience with the structure and styling of web interfaces, including responsive layouts with Tailwind CSS and the support of AI tools.',
    'skill.typescript.desc': 'First contact with static typing in the code of this portfolio.',
    'skill.sql.desc': 'SQL queries (SELECT, INSERT, UPDATE, DELETE) to query and review data in relational databases.',
    'skill.java.desc': 'Basic academic experience with Java during the degree.',
    'skill.cpp.desc': 'Object-oriented programming in C++ in the group game ZombieRush.',
    'skill.python.desc': 'Basic academic experience with Python.',
    'skill.kotlin.desc': 'Android app with Jetpack Compose (Flappy Chef).',
    'skill.react.desc': 'First steps with the user interface library.',
    'skill.nodejs.desc': 'First steps with server-side JavaScript.',
    'skill.astro.desc': 'Web framework this portfolio is built with.',
    'skill.mongodb.desc': 'Understanding of data structure, interpretation of queries and investigation of inconsistencies in collections, both in academic practice and at work.',
    'skill.postgresql.desc': 'Queries and exploration of relational data.',
    'skill.oracle.desc': 'Occasional contact with Oracle to query data.',
    'skill.data-modeling.desc': 'Understanding of data structure and how data relates to each other, to interpret queries and investigate inconsistencies.',
    'skill.ticket-management.desc': 'Logging, tracking and closing incident and support request tickets on a day-to-day basis.',
    'skill.incident-management.desc': 'Following incidents from detection to resolution and closure, including playback problems on streaming platforms.',
    'skill.root-cause-analysis.desc': 'Finding the origin of an incident by relating logs, metrics and events.',
    'skill.log-analysis.desc': 'Investigating logs in Kibana and Elastic to locate errors and reconstruct what happened in an incident.',
    'skill.technical-documentation.desc': 'Writing technical documentation and runbooks with the steps to resolve recurring incidents.',
    'skill.troubleshooting.desc': 'Diagnosing and resolving technical incidents in production applications.',
    'skill.production-support.desc': 'Ongoing operational support of production applications and services: watching their status and resolving incidents.',
    'skill.monitoring.desc': 'Tracking the status of production services and applications through Grafana and Kibana dashboards.',
    'skill.daily-checks.desc': 'Daily operational reviews to check the status of applications.',
    'skill.functional-analysis.desc': 'Analysis of the functional impact of incidents on users and the business.',
    'skill.metrics-analysis.desc': 'Interpreting metrics and dashboards to support incident diagnosis.',
    'skill.event-correlation.desc': 'Relating events and incidents to guide the search for causes, with team support.',
    'skill.grafana.desc': 'Reading metric dashboards to follow the status of services.',
    'skill.elastic.desc': 'Searching and filtering logs and metrics while investigating incidents.',
    'skill.conviva.desc': 'Checking video experience analytics to detect playback problems.',
    'skill.kibana.desc': 'Basic log queries in Elasticsearch through Kibana.',
    'skill.marfeel.desc': 'First contact with Marfeel traffic and content analytics.',
    'skill.promql.desc': 'First metric queries with PromQL.',
    'skill.vod.desc': 'Reviewing the publication and distribution of on-demand content.',
    'skill.content-ingestion.desc': 'Checking the reception and processing of multimedia content before publication.',
    'skill.playback-validation.desc': 'Checking playback on different devices and browsers.',
    'skill.subtitle-validation.desc': 'Verifying subtitles and their synchronization with the content.',
    'skill.geoblocking.desc': 'Checking geographic content restrictions by region.',
    'skill.cdn.desc': 'Understanding how the CDN delivers content and reviewing its behavior during playback incidents.',
    'skill.live-streaming.desc': 'Following live broadcasts (ingestion and distribution), with team support.',
    'skill.hls.desc': 'Basic reading of manifests and segments when reviewing playback problems.',
    'skill.cloudfront-streaming.desc': 'Checking CloudFront as a CDN when investigating content delivery problems.',
    'skill.fastly.desc': 'Checking Fastly as a CDN when investigating content delivery problems.',
    'skill.mpeg-dash.desc': 'Basics of the DASH adaptive streaming protocol.',
    'skill.video-transcoding.desc': 'Basics of converting between video formats and resolutions.',
    'skill.prompt-engineering.desc': 'Designing clear prompts with context to get useful results from ChatGPT, Claude and Gemini.',
    'skill.ai-assisted-dev.desc': 'Using AI to design, code, debug and document my own projects such as BONK, Menteando and this portfolio.',
    'skill.ai-agents.desc': 'Coordinating AI agents to split and carry out development tasks.',
    'skill.ai-code-validation.desc': 'Reviewing and validating AI-generated code before integrating it.',
    'skill.task-automation.desc': 'Automating repetitive tasks with scripts and AI tools.',
    'skill.chatgpt.desc': 'Using ChatGPT for research, content generation and development support.',
    'skill.claude.desc': 'Using Claude and Claude Code for assisted development, documentation and technical analysis.',
    'skill.github-copilot.desc': 'GitHub Copilot support when writing and reviewing code.',
    'skill.gemini.desc': 'Using Gemini for document research and organizing information.',
    'skill.cloudflare-workers.desc': 'Integration of Cloudflare Workers together with EmailJS in Menteando.',
    'skill.deployment-validation.desc': 'Technical checks before and after publishing a version to confirm it works correctly.',
    'skill.deployments.desc': 'Tracking and checking the publication of new versions in production.',
    'skill.rollback.desc': 'Tracking deployment rollbacks after failures or incidents.',
    'skill.cloud-storage.desc': 'Checking files in cloud storage (S3, Azure Blob).',
    'skill.git.desc': 'Using repositories, branches, commits and change review, mainly with GitHub Desktop and assisted development tools.',
    'skill.jira.desc': 'Managing incidents, tasks and projects, both in academic teams and in professional support.',
    'skill.confluence.desc': 'Reading and writing technical and collaborative documentation.',
    'skill.vscode.desc': 'Main code editor, with extensions and customization.',
    'skill.visual-studio.desc': 'IDE for writing and debugging C# scripts in Unity.',
    'skill.miro.desc': 'Collaborative whiteboards for brainstorming and planning in team projects.',
    'skill.postman.desc': 'Basic REST API testing with collections and variables.',
    'skill.aws.desc': 'Checking AWS services (CloudFront, Cognito, Lambda, DynamoDB, MediaTailor) to put incidents in context.',
    'skill.argocd.desc': 'Checking the status of deployments in ArgoCD.',
    'skill.aws-cognito.desc': 'Basics of the AWS authentication service.',
    'skill.aws-lambda.desc': 'Basics of serverless functions in AWS.',
    'skill.aws-dynamodb.desc': 'Basics of the AWS NoSQL database.',
    'skill.azure.desc': 'Basics of the Azure portal and resources.',
    'skill.docker.desc': 'Basics of Docker containers.',
    'skill.gitlab-ci.desc': 'Basics of integration and deployment pipelines in GitLab.',

    // ============================================
    // PROYECTOS: textos añadidos por la actualización de contenidos (EN)
    // ============================================
    'project.link.codigo_en_github': 'Code on GitHub',
    'project.link.concept_art_de_escenario_pdf': 'Environment concept art (PDF)',
    'project.link.concept_art_de_personaje_pdf': 'Character concept art (PDF)',
    'project.link.github': 'GitHub',

    // Colecciones (BONK) y simulación de físicas (EN)
    'collection.games_title': 'Games in the collection',
    'collection.play': 'Play on itch.io',
    'collection.details': 'View details',
    'collection.opens_itch': 'Opens on itch.io in a new tab',
    'collection.back_to': 'Back to',
    'collection.how_to_play': 'How to play',
    'collection.mechanics': 'Main mechanics',
    'collection.power_ups': 'Temporary power-ups',
    'collection.upgrades': 'Permanent upgrades',
    'collection.highlights': 'Highlights',
    'collection.technologies': 'Technologies',
    'collection.other_games': 'More games in the collection',
    'collection.ai_note': 'This game is part of a collection developed with artificial intelligence assistance.',
    'collection.ai_note_link': 'See how it was made',
    'project.tag.web_games': 'Web games',
    'project.tag.ai_assisted': 'AI-assisted development',
    'project.tag.physics_simulation': 'Physics simulation',
    'project.tag.huion_tablet': 'Huion tablet',
    'project.tag.pencil_charcoal': 'Pencil and charcoal',
    'project.tag.pencil_paper': 'Pencil and paper',
    'project.link.bonk_itch': 'BONK collection on itch.io',
  }
};

// ✅ Función de traducción
export function t(lang: 'es' | 'en', key: string): string {
  const translations = TRANSLATIONS[lang] || TRANSLATIONS.es;
  return translations[key as keyof typeof translations] || key;
}