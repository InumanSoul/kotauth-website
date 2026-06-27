import type { Translations } from './en';

const es: Translations = {
  nav: {
    features: 'Características',
    security: 'Seguridad',
    roadmap: 'Hoja de ruta',
    changelog: 'Historial',
    resources: 'Recursos',
    company: 'Empresa',
    documentation: 'Documentación',
    apiReference: 'API Reference',
    mcpDocs: 'MCP Docs',
    docs: 'Docs',
    contact: 'Contacto',
    privacy: 'Privacidad',
    terms: 'Términos',
    getStarted: 'Comenzar',
    moreLanguages: 'Más idiomas próximamente',
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
    mcpDocs: 'MCP Docs',
    contact: 'Contacto',
    privacy: 'Privacidad',
    terms: 'Términos',
    brandDescription:
      'Infraestructura de identidad para aplicaciones modernas. Auto-alojado, nativo de Docker, pensado para desarrolladores.',
    openSource: 'Código abierto bajo',
    mitLicense: 'Licencia MIT',
  },

  hero: {
    titleLine1: 'Autenticación que vive en tu stack,',
    titleLine2: 'no en la nube de otro.',
    description:
      'Kotauth es la plataforma de identidad open-source y nativa de Docker. OAuth, OIDC y multi-tenancy de nivel empresarial, auto-alojados en un solo comando. La alternativa gratuita a Clerk, Auth0 y Keycloak.',
    getStarted: 'Comenzar gratis',
    tryDemo: 'Probar el demo',
    alternativesLabel: 'Una alternativa gratuita y auto-alojada a',
  },

  whySelfHost: {
    eyebrow: 'Por qué auto-alojar',
    title: 'Tu autenticación no debería ser el SaaS de otro.',
    subtitle: 'Tres razones por las que los equipos llevan su capa de identidad a casa.',
    reasons: [
      {
        title: 'Tus datos nunca salen',
        body: 'Usuarios, tokens y registros de auditoría permanecen en la infraestructura que tú controlas. Ningún tercero se interpone en tu ruta de autenticación. Nunca.',
      },
      {
        title: 'Sin facturación por MAU',
        body: 'Gratuito y open source bajo licencia MIT. Escala de diez usuarios a diez millones sin niveles de precios, llamadas de ventas ni facturas sorpresa.',
      },
      {
        title: 'Funciona donde funcione Docker',
        body: 'Una imagen de ~120 MB, sin root y de solo lectura por defecto. Nube, on-premise, air-gapped o tu portátil. Un comando para empezar.',
      },
    ],
  },

  compareSection: {
    eyebrow: 'Comparar',
    title: 'Cómo se compara Kotauth',
    subtitle:
      'Los diferenciadores que realmente importan, medidos frente al referente auto-alojado y los actores SaaS.',
    capability: 'Capacidad',
    partial: 'parcial',
    rows: [
      'Auto-alojado, propiedad total de los datos',
      'Gratis con cualquier número de usuarios',
      'Despliegue con un solo comando de Docker',
      'Panel de administración moderno',
      'Gestión nativa con IA (MCP)',
      'Pantallas de autenticación white-label',
      'Despliegue air-gapped',
      'Workspaces multi-tenant',
      'Experiencia de desarrollo',
    ],
  },

  featuresGrid: {
    eyebrow: 'Características',
    title: 'Todo lo que necesitas para identidad',
    subtitle: 'Infraestructura de autenticación completa con la simplicidad que esperan los desarrolladores.',
    exploreAll: 'Explorar todas las características',
    items: [
      {
        title: 'OAuth 2.0 y OpenID Connect',
        description:
          'Código de autorización + PKCE, Credenciales de cliente, rotación de tokens, introspección y OIDC Discovery. Cualquier cliente OIDC funciona sin modificaciones.',
      },
      {
        title: 'Workspaces Multi-Tenant',
        description:
          'Directorios de usuarios aislados, claves RS256 por tenant, APIs con rutas por slug y políticas de seguridad independientes. Una instancia, muchos productos.',
      },
      {
        title: 'Passwordless con Magic-Link',
        description:
          'Inicio de sesión sin contraseña por email con tokens de un solo uso de 15 minutos y binding de mismo dispositivo. Seguro contra enumeración de usuarios y compatible con MFA.',
      },
      {
        title: 'Backup y Restauración',
        description:
          'Instantáneas cifradas de tenant con PBKDF2 600k + AES-256-GCM. Exporta e importa vía CLI o API de administración. Portátil y con validación de esquema.',
      },
      {
        title: 'Gestión Nativa de IA',
        description:
          'Gestiona usuarios, roles, sesiones y registros de auditoría desde Claude, Cursor o cualquier cliente MCP. 33 herramientas en 8 dominios, acceso basado en alcances.',
      },
      {
        title: 'Despliegue Nativo de Docker',
        description:
          'Imagen de ~120 MB en GHCR. No-root, solo lectura, sin nuevos privilegios. Inicio rápido con un comando, migraciones automáticas, totalmente air-gapped.',
      },
    ],
  },

  mcpShowcase: {
    eyebrow: 'Gestión nativa de IA',
    titleStart: 'Gestiona la identidad ',
    titleHighlight: 'en lenguaje natural.',
    subtitle:
      'El primer IAM auto-alojado con soporte nativo del Protocolo de Contexto de Modelos. Conecta Claude, Cursor o cualquier cliente MCP. 33 herramientas con alcance, sin SDK, sin código personalizado.',
    mcpSession: 'Sesión MCP',
    oneCommand: 'npx @kotauth/mcp',
    oneCommandLabel: 'un comando para conectar',
    toolsTitle: '33 herramientas con alcance',
    toolsDescription:
      'Cada herramienta está protegida por alcances de clave API. Tu asistente de IA solo obtiene los permisos que eliges.',
    mcpDocs: 'Documentación MCP',
    viewOnNpm: 'Ver en npm',
    chat: {
      userMessage:
        "La cuenta de Bob puede estar comprometida. Desactívalo, elimina todas sus sesiones y muéstrame la última hora.",
      assistantIntro: 'En eso. Bloqueando la cuenta, revocando sesiones, obteniendo el registro de auditoría.',
      tool1Result: 'disable_user ✓ Cuenta desactivada · userId 87',
      tool2Result: 'revoke_session ✓ 2 sesiones activas revocadas',
      tool4Result: 'userId: 87, últimos 60 min',
      summaryIntro: 'Listo. Aquí está la última hora:',
      loginFailed: 'LOGIN_FAILED ×3 desde 191.96.x.x',
      loginSuccess: 'LOGIN_SUCCESS desde 191.96.x.x',
      userUpdated: 'USER_UPDATED email cambiado',
      summaryAnalysis:
        'Parece credential stuffing, luego toma de cuenta. El cambio de email lo confirma.',
    },
    domains: [
      { label: 'Usuarios', count: 10 },
      { label: 'Roles', count: 5 },
      { label: 'Grupos', count: 6 },
      { label: 'Aplicaciones', count: 3 },
      { label: 'Sesiones', count: 2 },
      { label: 'Registros de auditoría', count: 1 },
      { label: 'Atributos', count: 3 },
      { label: 'Mapeadores de claims', count: 3 },
    ],
  },

  authShowcase: {
    eyebrow: 'Experiencia de autenticación',
    titleStart: 'Pantallas de auth que ',
    titleHighlight: 'no parecen pantallas de auth.',
    description:
      'Páginas de inicio de sesión, registro, MFA y gestión de cuenta listas para producción, hermosas por defecto, totalmente personalizables por tenant, sin necesidad de recompilar.',
    points: [
      {
        title: 'Renderizado en servidor, sin sobrecarga de JS',
        body: 'HTML puro renderizado en servidor. Sin framework en el cliente, sin demora de hidratación. Primera pintura significativa en menos de 100ms.',
      },
      {
        title: 'Marca blanca por workspace',
        body: 'Variables CSS inyectadas en tiempo de renderizado. Cada tenant obtiene sus propios colores, logo y favicon sin reconstrucción.',
      },
      {
        title: 'Conjunto completo de pantallas',
        body: 'Inicio de sesión, registro, contraseña olvidada/restablecida, aceptar invitación, TOTP MFA y verificación de email, todo listo para producción.',
      },
      {
        title: 'Tres presets, control total',
        body: 'Comienza con Light, Dark o Simple. Sobrescribe cualquier token para que coincida con tu marca sin tocar el código del backend.',
      },
    ],
    mockup: {
      signIn: 'Iniciar sesión',
      continueToWorkspace: 'para continuar en Acme Corp',
      emailAddress: 'Correo electrónico',
      emailPlaceholder: 'tu@acme.com',
      continue: 'Continuar',
      or: 'o',
      continueWithGithub: 'Continuar con GitHub',
      noAccount: '¿Sin cuenta? ',
      signUp: 'Registrarse',
      themeHint: 'Claro Oscuro Simple',
    },
  },

  ctaSection: {
    eyebrow: 'Demo en vivo · sin instalación',
    titleLead: '¿Listo para ser dueño de tu',
    titleHighlight: 'autenticación',
    description: 'Despliega Kotauth en menos de un minuto. Sin tarjeta de crédito, sin llamadas de ventas, sin dependencias.',
    getStartedFree: 'Comenzar gratis',
    launchDemo: 'Lanzar el demo',
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
