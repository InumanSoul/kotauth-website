import type { Translations } from './en';

const es: Translations = {
  nav: {
    features: 'Características',
    roadmap: 'Hoja de ruta',
    docs: 'Documentación',
    contact: 'Contacto',
    demo: 'Demo',
    tryDemo: 'Probar la Demo',
    getStarted: 'Comenzar',
    github: 'GitHub',
  },

  footer: {
    product: 'Producto',
    resources: 'Recursos',
    company: 'Empresa',
    features: 'Características',
    security: 'Seguridad',
    roadmap: 'Hoja de ruta',
    changelog: 'Historial de cambios',
    documentation: 'Documentación',
    apiReference: 'Referencia de API',
    community: 'Comunidad',
    blog: 'Blog',
    contact: 'Contacto',
    privacyPolicy: 'Política de privacidad',
    terms: 'Términos',
    brandDescription:
      'Infraestructura de identidad para aplicaciones modernas. Auto-alojado, nativo de Docker, pensado para desarrolladores.',
    copyright: 'Kotauth. Código abierto bajo',
    mitLicense: 'Licencia MIT',
    privacy: 'Privacidad',
  },

  hero: {
    eyebrow: 'Plataforma de Identidad Nativa de Docker',
    titleStart: 'Infraestructura de identidad para ',
    titleHighlight: 'aplicaciones modernas',
    description:
      'La plataforma de autenticación auto-alojada que combina el poder empresarial con la experiencia del desarrollador. Despliega en segundos, escala con confianza.',
    tryDemo: 'Probar la Demo',
    getStarted: 'Comenzar',
    codeComment: '# Prueba Kotauth: un solo comando',
    codeOutput: [
      'Iniciando Kotauth Server v1.19.2...',
      '✓ Servidor de identidad listo en el puerto 8080',
      '✓ Panel de administración disponible en /admin',
      '✓ Datos de demostración cargados. Dos workspaces listos',
      '✓ Documentación de API en /api/docs',
    ],
  },

  featuresGrid: {
    eyebrow: 'Características',
    title: 'Todo lo que necesitas para gestión de identidad',
    subtitle:
      'Infraestructura de autenticación completa con la simplicidad que los desarrolladores esperan',
    exploreAll: 'Explorar todas las características y detalles técnicos',
    items: [
      {
        title: 'OAuth 2.0 y OpenID Connect',
        description:
          'Authorization Code + PKCE, Client Credentials, rotación de tokens, introspección, revocación y OIDC Discovery. Cumple con la especificación. Cualquier librería cliente OIDC funciona sin configuración adicional.',
      },
      {
        title: 'Workspaces Multi-Tenant',
        description:
          'Directorios de usuarios aislados, pares de claves RS256 por tenant con rotación iniciada por el admin, APIs enrutadas por slug y políticas de seguridad independientes. Una instancia, muchos productos.',
      },
      {
        title: 'Autenticación Passwordless con Magic-Link',
        description:
          'Login sin contraseña basado en email con tokens de un solo uso de 15 minutos y vinculación de cookie al dispositivo. Invariante MFA preservada, seguro contra enumeración de usuarios. Los workspaces pueden ser completamente passwordless.',
      },
      {
        title: 'Backup y Restauración',
        description:
          'Snapshots de tenant cifrados con PBKDF2 600k iteraciones + AES-256-GCM. Exportación e importación vía CLI o API de administración. Validación de compatibilidad de versión de esquema. Formato de envelope portable bkp1.',
      },
      {
        title: 'Gestión Nativa con IA (MCP)',
        description:
          'Gestiona usuarios, roles, atributos, claim mappers, sesiones y logs de auditoría desde Claude, Cursor o cualquier cliente MCP. 33 herramientas en 8 dominios, acceso basado en scopes. npx @kotauth/mcp para conectar.',
      },
      {
        title: 'Despliegue Nativo de Docker',
        description:
          'Imagen de ~120 MB en GHCR. Se ejecuta como non-root (UID 10001), filesystem de solo lectura, no-new-privileges. Quickstart de un comando, auto-migraciones Flyway, 5 herramientas CLI integradas y Swagger UI incluido. Funciona completamente air-gapped.',
      },
    ],
  },

  mcpShowcase: {
    eyebrow: 'Gestión Nativa con IA',
    titleStart: 'Gestiona identidad con ',
    titleHighlight: 'lenguaje natural',
    subtitle:
      'El primer servidor IAM auto-alojado con soporte nativo de Model Context Protocol. Conecta Claude, Cursor o cualquier IA compatible con MCP. Sin SDK, sin HTTP, sin código custom.',
    mcpSession: 'Sesión MCP',
    chat: {
      userMessage:
        'La cuenta de Bob puede estar comprometida. Desactívala, cierra todas sus sesiones y muéstrame qué pasó en la última hora.',
      assistantIntro:
        'Entendido. Bloqueo la cuenta, revoco las sesiones activas y extraigo el historial de auditoría.',
      tool1Result: 'búsqueda: "bob" → userId: 87',
      tool2Result: '✓ Cuenta desactivada',
      tool3Result: '✓ 2 sesiones activas revocadas',
      tool4Result: 'userId: 87, últimos 60 min',
      summaryIntro:
        'Listo. Bob está bloqueado y ambas sesiones fueron terminadas. Esto es lo de la última hora:',
      loginFailed: '3 intentos desde 191.96.x.x',
      loginSuccess: 'desde 191.96.x.x',
      userUpdated: 'email cambiado',
      adminDisabled: 'por ti, recién',
      summaryAnalysis:
        'Tres intentos fallidos de login desde una IP desconocida, seguidos de un login exitoso y un cambio de email. Parece credential stuffing. El cambio de email confirma la toma de cuenta.',
    },
    oneCommand: 'Un comando para conectar',
    toolsTitle: '33 herramientas en 8 dominios',
    toolsDescription:
      'Cada herramienta está protegida por scopes de API key. Tu asistente de IA solo obtiene los permisos que elijas. RBAC completo, ciclo de vida de usuarios, gestión de sesiones y consultas de audit log a través de conversación.',
    mcpDocs: 'Documentación MCP',
    viewOnNpm: 'Ver en npm',
    domains: [
      { label: 'Usuarios', examples: 'crear, listar, actualizar, desactivar, invitar, asignar roles' },
      { label: 'Roles', examples: 'crear, listar, obtener, actualizar, eliminar' },
      { label: 'Grupos', examples: 'crear, listar, obtener, actualizar, gestionar miembros' },
      { label: 'Aplicaciones', examples: 'listar, obtener, actualizar configuración' },
      { label: 'Sesiones', examples: 'listar activas, revocar' },
      { label: 'Logs de Auditoría', examples: 'consultar con filtros' },
      { label: 'Atributos de Usuario', examples: 'listar, establecer, eliminar metadata por usuario' },
      { label: 'Claim Mappers', examples: 'listar, establecer, eliminar proyecciones JWT' },
    ],
  },

  authShowcase: {
    eyebrow: 'Experiencia de Autenticación',
    titleStart: 'Pantallas de auth que ',
    titleHighlight: 'no parecen pantallas de auth',
    description:
      'Páginas de login, registro, MFA y gestión de cuenta listas para producción, hermosas por defecto, completamente personalizables por tenant, sin necesidad de rebuild.',
    points: [
      {
        title: 'Server-rendered, sin overhead de JS',
        body: 'Las páginas de auth son HTML puro renderizado en servidor. Sin framework client-side, sin retraso de hidratación. First meaningful paint en menos de 100ms.',
      },
      {
        title: 'White-label por workspace',
        body: 'CSS custom properties inyectadas en tiempo de render. Cada tenant tiene sus propios colores, logo y favicon sin rebuild ni invalidación de CDN.',
      },
      {
        title: 'Set completo de pantallas',
        body: 'Login, registro, recuperar contraseña, restablecer contraseña, aceptar invitación, MFA TOTP y verificación de email, todo con estilos y listo para producción.',
      },
      {
        title: 'Tres presets, personalización total',
        body: 'Empieza con Dark, Light o Simple. Sobreescribe cualquier design token para que coincida con tu marca sin tocar código backend.',
      },
    ],
    mockup: {
      signIn: 'Iniciar sesión',
      continueToWorkspace: 'para continuar a tu workspace',
      emailAddress: 'Correo electrónico',
      continue: 'Continuar',
      or: 'o',
      continueWithGithub: 'Continuar con GitHub',
      noAccount: '¿No tienes cuenta? ',
      signUp: 'Regístrate',
      themeHint: 'Haz clic en las pestañas de tema para previsualizar. Misma URL, diferente configuración de tenant',
    },
  },

  codeShowcase: {
    eyebrow: 'Experiencia del Desarrollador',
    title: 'Provisionar, autorizar, auditar',
    description:
      'Una API REST consistente para cada recurso. API keys con scope por workspace, errores compatibles con RFC y un audit trail completo integrado desde el primer día.',
    features: [
      'API keys con scope: Bearer kauth_{slug}_{key}',
      'Endpoints enrutados por workspace: /t/{slug}/api/v1',
      'RBAC con herencia de roles compuestos y grupos',
      'JWT claims personalizados vía user attributes + claim mappers',
      'APIs de magic-link, Email OTP e invitaciones',
      'Detección de replay de refresh-token + revocación por familia',
      'Backup y restore cifrado vía CLI o API',
      'Audit trail inmutable: 65+ tipos de eventos',
    ],
  },

  liveDemo: {
    eyebrow: 'Demo en Vivo',
    titleStart: 'Míralo funcionando: ',
    titleHighlight: 'sin instalación',
    description:
      'Una instancia pública con datos precargados. Explora la consola de administración, gestión de usuarios, configuración OAuth y logs de auditoría. Los datos se reinician periódicamente.',
    launchDemo: 'Abrir la Demo',
    highlights: [
      {
        title: 'Dos workspaces',
        description:
          'Acme Corp y StartupLabs, cada uno con usuarios, roles y aplicaciones aislados.',
      },
      {
        title: 'Usuarios precargados',
        description:
          'Admins, desarrolladores y viewers ya configurados con roles y membresías de grupo.',
      },
      {
        title: 'RBAC completo en acción',
        description:
          'Roles, grupos, herencia compuesta y audit trails, todo poblado y visible.',
      },
      {
        title: 'Apps OAuth y API keys',
        description:
          'Aplicaciones registradas con client credentials y API keys con scope listas para inspeccionar.',
      },
    ],
  },

  comparisonTable: {
    eyebrow: 'Comparación',
    title: 'Compara las alternativas',
    subtitle: 'Descubre por qué los equipos eligen Kotauth para su infraestructura de identidad',
    headerFeature: 'Característica',
    features: [
      'Auto-alojado',
      'Nativo de Docker',
      'UI moderna',
      'Experiencia de desarrollador',
      'Documentación OpenAPI / Swagger',
      'Herramientas CLI integradas',
      'Integración con asistente IA (MCP)',
      'Despliegue air-gapped',
      'Secretos cifrados en reposo',
      'Bloqueo de cuenta',
      'Invitaciones de usuarios',
      'Rotación de claves admin',
      'JWT claims personalizados',
      'Passwordless con magic-link',
      'Detección de contraseñas filtradas (HIBP)',
      'Backup y restore de tenant',
      'Impersonación de admin',
      'SSO silencioso (prompt=none)',
      'Sesiones distribuidas con Redis',
      'Lanzador de aplicaciones',
      'Internacionalización (i18n)',
      'Passwordless con Email OTP',
      'Roles por defecto del cliente',
      'Branding en emails transaccionales',
      'Detección de replay de refresh-token',
      'Protección contra replay y bloqueo TOTP',
      'Contenedor non-root',
      'API keys bootstrap (gestionadas por env)',
      'Política CORS multi-tenant',
      'SSO empresarial (LDAP/SAML)',
      'Proveedor OAuth/OIDC',
      'Organizaciones multi-tenant',
      'Trae tu propia base de datos',
      'Gratis para auto-alojamiento',
    ],
  },

  architecture: {
    eyebrow: 'Arquitectura',
    title: 'Identidad centralizada para todo tu stack',
    subtitle: 'Una plataforma de identidad, aplicaciones ilimitadas',
    users: 'Usuarios',
    identityServer: 'Servidor de Identidad',
    applications: 'Aplicaciones',
    adminDashboard: 'Panel de Administración',
    steps: [
      {
        title: 'Identidad Unificada',
        description: 'Una base de usuarios para todas tus aplicaciones',
      },
      {
        title: 'Integración Simple',
        description: 'Agrega autenticación a cualquier app en minutos',
      },
      {
        title: 'Visibilidad Completa',
        description: 'Monitorea y gestiona todo desde un solo dashboard',
      },
    ],
  },

  ctaSection: {
    titleStart: '¿Listo para simplificar tu ',
    titleHighlight: 'autenticación',
    questionMark: '?',
    description: 'Despliega Kotauth en menos de un minuto. Sin tarjeta de crédito.',
    tryDemo: 'Probar la Demo',
    getStartedFree: 'Comenzar Gratis',
  },

  contactSection: {
    eyebrow: 'Contacto',
    title: 'Ponte en contacto',
    description:
      'Kotauth es un proyecto de código abierto. La mayoría de las conversaciones ocurren en público, y eso es intencional. Elige el canal adecuado abajo.',
    channels: [
      {
        title: 'Reportar Bugs',
        description:
          '¿Encontraste algo roto? Abre un issue en GitHub con pasos de reproducción y lo revisaremos.',
        cta: 'Abrir un Issue',
      },
      {
        title: 'Comunidad',
        description:
          'Preguntas, ideas y discusión general. GitHub Discussions es donde vive la comunidad.',
        cta: 'Unirse a Discussions',
      },
      {
        title: 'Contribuir',
        description:
          '¿Quieres agregar una funcionalidad o mejorar el código? Empieza leyendo la guía de contribución.',
        cta: 'Ver Repositorio',
      },
    ],
    noteLabel: 'Nota:',
    noteText:
      'Este es un proyecto de código abierto mantenido en tiempo libre. Los tiempos de respuesta varían. Para divulgaciones de seguridad, usa el formulario de contacto con asunto "Security".',
    form: {
      messageSent: 'Mensaje enviado',
      thankYou: 'Gracias por escribirnos. Te responderemos lo antes posible.',
      sendAnother: 'Enviar otro',
      name: 'Nombre',
      email: 'Email',
      subject: 'Asunto',
      message: 'Mensaje',
      yourName: 'Tu nombre',
      emailPlaceholder: 'tu@ejemplo.com',
      selectTopic: 'Selecciona un tema...',
      generalInquiry: 'Consulta General',
      integrationHelp: 'Ayuda con Integración',
      featureRequest: 'Solicitud de Funcionalidad',
      security: 'Seguridad',
      partnership: 'Colaboración',
      other: 'Otro',
      messagePlaceholder: 'Describe tu pregunta o solicitud en detalle...',
      sendMessage: 'Enviar Mensaje',
      urgentNote: 'Para asuntos urgentes, usa',
      githubDiscussions: 'GitHub Discussions',
    },
  },

  pages: {
    index: {
      title: 'Kotauth | Autenticación auto-alojada para aplicaciones modernas',
      description:
        'La plataforma de identidad de código abierto, nativa de Docker. OAuth 2.0, OpenID Connect, multi-tenancy, pantallas de auth white-label, gestión nativa con IA vía MCP y webhooks. Despliega en segundos con un solo docker compose up. Prueba la demo en demo.kotauth.com.',
    },
    contact: {
      title: 'Contacto | Kotauth',
      description:
        'Ponte en contacto con el equipo de Kotauth. Reporta bugs en GitHub Issues, únete a la comunidad en GitHub Discussions o escríbenos directamente para ayuda con integración y consultas de colaboración.',
    },
    notFound: {
      title: 'Página No Encontrada | Kotauth',
      description: 'La página que buscas no existe.',
      heading: 'Página no encontrada',
      body: 'La página que buscas no existe o fue movida.',
      backToHome: 'Volver al inicio',
    },
    privacy: {
      title: 'Política de Privacidad | Kotauth',
      description:
        'Política de privacidad de Kotauth. Usamos OpenPanel para analíticas sin cookies y respetuosas con la privacidad. No se venden ni comparten datos personales con terceros.',
    },
    terms: {
      title: 'Términos de Servicio | Kotauth',
      description:
        'Términos de servicio de Kotauth. Kotauth es software de código abierto bajo la Licencia MIT. Revisa los términos que rigen el uso del sitio web kotauth.com y servicios relacionados.',
    },
    features: {
      title: 'Características | Kotauth',
      description:
        'Explora todas las características de Kotauth: OAuth 2.0, OIDC, multi-tenancy, MFA, magic links, RBAC, backup y restore, integración MCP, despliegue nativo de Docker y más.',
    },
    security: {
      title: 'Seguridad | Kotauth',
      description:
        'Conoce la arquitectura de seguridad de Kotauth: cifrado AES-256-GCM, hashing de contraseñas con bcrypt, MFA TOTP, rate limiting, aislamiento de tenants y logging de auditoría completo.',
    },
    roadmap: {
      title: 'Hoja de Ruta | Kotauth',
      description:
        'Mira lo que está planeado para Kotauth: próximas características, mejoras y la línea de tiempo de desarrollo de la plataforma de identidad auto-alojada.',
    },
    changelog: {
      title: 'Historial de Cambios | Kotauth',
      description:
        'Historial de versiones de Kotauth. Mira qué cambió en cada versión: nuevas funcionalidades, correcciones de bugs, mejoras de seguridad y cambios incompatibles.',
    },
  },
};

export default es;
