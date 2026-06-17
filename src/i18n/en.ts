const en = {
  nav: {
    features: 'Features',
    roadmap: 'Roadmap',
    docs: 'Docs',
    contact: 'Contact',
    demo: 'Demo',
    tryDemo: 'Try the Demo',
    getStarted: 'Get Started',
    github: 'GitHub',
  },

  footer: {
    product: 'Product',
    resources: 'Resources',
    company: 'Company',
    features: 'Features',
    security: 'Security',
    roadmap: 'Roadmap',
    changelog: 'Changelog',
    documentation: 'Documentation',
    apiReference: 'API Reference',
    community: 'Community',
    blog: 'Blog',
    contact: 'Contact',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms',
    brandDescription:
      'Identity infrastructure for modern applications. Self-hosted, Docker-native, developer-first.',
    copyright: 'Kotauth. Open source under',
    mitLicense: 'MIT License',
    privacy: 'Privacy',
  },

  hero: {
    eyebrow: 'Docker-Native Identity Platform',
    titleStart: 'Identity infrastructure for ',
    titleHighlight: 'modern applications',
    description:
      'The self-hosted authentication platform that combines enterprise power with developer experience. Deploy in seconds, scale with confidence.',
    tryDemo: 'Try the Demo',
    getStarted: 'Get Started',
    codeComment: '# Try Kotauth: one command',
    codeOutput: [
      'Starting Kotauth Server v1.16.0...',
      '✓ Identity server ready on port 8080',
      '✓ Admin dashboard available at /admin',
      '✓ Demo data loaded. Two workspaces ready',
      '✓ API documentation at /api/docs',
    ],
  },

  featuresGrid: {
    eyebrow: 'Features',
    title: 'Everything you need for identity management',
    subtitle:
      'Complete authentication infrastructure with the simplicity developers expect',
    exploreAll: 'Explore all features and technical details',
    items: [
      {
        title: 'OAuth 2.0 & OpenID Connect',
        description:
          'Authorization Code + PKCE, Client Credentials, token rotation, introspection, revocation, and OIDC Discovery. Spec-compliant. Any OIDC client library works out of the box.',
      },
      {
        title: 'Multi-Tenant Workspaces',
        description:
          'Isolated user directories, per-tenant RS256 key pairs with admin-initiated rotation, slug-routed APIs, and independent security policies. One instance, many products.',
      },
      {
        title: 'Magic-Link Passwordless Auth',
        description:
          'Email-based passwordless login with 15-minute one-time tokens and same-device cookie binding. MFA invariant preserved, user-enumeration safe. Workspaces can go fully passwordless.',
      },
      {
        title: 'Backup & Restore',
        description:
          'Encrypted tenant snapshots with PBKDF2 600k iterations + AES-256-GCM. Export and import via CLI or admin API. Schema-version compatibility validation. Portable bkp1 envelope format.',
      },
      {
        title: 'AI-Native Management (MCP)',
        description:
          'Manage users, roles, attributes, claim mappers, sessions, and audit logs from Claude, Cursor, or any MCP client. 33 tools across 8 domains, scope-based access. npx @kotauth/mcp to connect.',
      },
      {
        title: 'Docker-Native Deployment',
        description:
          '~120 MB image on GHCR. Runs as non-root (UID 10001), read-only filesystem, no-new-privileges. One-command quickstart, Flyway auto-migrations, 5 built-in CLI tools, and bundled Swagger UI. Works fully air-gapped.',
      },
    ],
  },

  mcpShowcase: {
    eyebrow: 'AI-Native Management',
    titleStart: 'Manage identity with ',
    titleHighlight: 'natural language',
    subtitle:
      'The first self-hosted IAM server with native Model Context Protocol support. Connect Claude, Cursor, or any MCP-compatible AI. No SDK, no HTTP, no custom code.',
    mcpSession: 'MCP Session',
    chat: {
      userMessage:
        "Bob's account may be compromised. Disable him, kill all his sessions, and show me what happened in the last hour.",
      assistantIntro:
        "On it. I'll lock the account, revoke active sessions, and pull the audit trail.",
      tool1Result: 'search: "bob" → userId: 87',
      tool2Result: '✓ Account disabled',
      tool3Result: '✓ 2 active sessions revoked',
      tool4Result: 'userId: 87, last 60 min',
      summaryIntro:
        "Done. Bob is locked out and both sessions are terminated. Here's the last hour:",
      loginFailed: '3 attempts from 191.96.x.x',
      loginSuccess: 'from 191.96.x.x',
      userUpdated: 'email changed',
      adminDisabled: 'by you, just now',
      summaryAnalysis:
        'Three failed logins from an unfamiliar IP followed by a successful login and an email change. Looks like credential stuffing. The email change confirms account takeover.',
    },
    oneCommand: 'One command to connect',
    toolsTitle: '33 tools across 8 domains',
    toolsDescription:
      'Every tool is guarded by API key scopes. Your AI assistant only gets the permissions you choose. Full RBAC, user lifecycle, session management, and audit log queries through conversation.',
    mcpDocs: 'MCP Documentation',
    viewOnNpm: 'View on npm',
    domains: [
      { label: 'Users', examples: 'create, list, update, disable, invite, assign roles' },
      { label: 'Roles', examples: 'create, list, get, update, delete' },
      { label: 'Groups', examples: 'create, list, get, update, manage members' },
      { label: 'Applications', examples: 'list, get, update settings' },
      { label: 'Sessions', examples: 'list active, revoke' },
      { label: 'Audit Logs', examples: 'query with filters' },
      { label: 'User Attributes', examples: 'list, set, delete per-user metadata' },
      { label: 'Claim Mappers', examples: 'list, set, delete JWT projections' },
    ],
  },

  authShowcase: {
    eyebrow: 'Auth Experience',
    titleStart: 'Auth screens that ',
    titleHighlight: "don't look like auth screens",
    description:
      'Production-ready login, registration, MFA, and account management pages, beautiful by default, fully white-labeled per tenant, zero rebuild required.',
    points: [
      {
        title: 'Server-rendered, zero JS overhead',
        body: 'Auth pages are pure server-rendered HTML. No client-side framework, no hydration delay. First meaningful paint in under 100ms.',
      },
      {
        title: 'White-label per workspace',
        body: 'CSS custom properties injected at render time. Each tenant gets its own colors, logo, and favicon with zero rebuild or CDN invalidation.',
      },
      {
        title: 'Complete screen set',
        body: 'Login, register, forgot password, reset password, accept invite, TOTP MFA, and email verification, all styled and production-ready.',
      },
      {
        title: 'Three presets, full customization',
        body: 'Start with Dark, Light, or Simple. Override any design token to match your brand without touching backend code.',
      },
    ],
    mockup: {
      signIn: 'Sign in',
      continueToWorkspace: 'to continue to your workspace',
      emailAddress: 'Email address',
      continue: 'Continue',
      or: 'or',
      continueWithGithub: 'Continue with GitHub',
      noAccount: 'No account? ',
      signUp: 'Sign up',
      themeHint: 'Click the theme tabs to preview. Same URL, different tenant config',
    },
  },

  codeShowcase: {
    eyebrow: 'Developer Experience',
    title: 'Provision, authorize, audit',
    description:
      'One consistent REST API across every resource. Scoped API keys per workspace, RFC-compliant errors, and a full audit trail baked in from day one.',
    features: [
      'Scoped API keys: Bearer kauth_{slug}_{key}',
      'Workspace-routed endpoints: /t/{slug}/api/v1',
      'RBAC with composite role inheritance and groups',
      'Custom JWT claims via user attributes + claim mappers',
      'Magic-link, Email OTP, and user invitation APIs',
      'Refresh-token replay detection + family revocation',
      'Encrypted backup & restore via CLI or API',
      'Immutable audit trail: 65+ event types',
    ],
  },

  liveDemo: {
    eyebrow: 'Live Demo',
    titleStart: 'See it running — ',
    titleHighlight: 'no install required',
    description:
      'A public instance with seeded data. Explore the admin console, user management, OAuth configuration, and audit logs. Data resets periodically.',
    launchDemo: 'Launch the Demo',
    highlights: [
      {
        title: 'Two workspaces',
        description:
          'Acme Corp and StartupLabs, each with isolated users, roles, and applications.',
      },
      {
        title: 'Pre-seeded users',
        description:
          'Admins, developers, and viewers already configured with roles and group memberships.',
      },
      {
        title: 'Full RBAC in action',
        description:
          'Roles, groups, composite inheritance, and audit trails, all populated and visible.',
      },
      {
        title: 'OAuth apps & API keys',
        description:
          'Registered applications with client credentials and scoped API keys ready to inspect.',
      },
    ],
  },

  comparisonTable: {
    eyebrow: 'Comparison',
    title: 'Compare the alternatives',
    subtitle: 'See why teams choose Kotauth for their identity infrastructure',
    headerFeature: 'Feature',
    features: [
      'Self-hosted',
      'Docker-native',
      'Modern UI',
      'Developer experience',
      'OpenAPI / Swagger docs',
      'Built-in CLI tools',
      'AI assistant integration (MCP)',
      'Air-gapped deployment',
      'Encrypted secrets at rest',
      'Account lockout',
      'User invitations',
      'Admin key rotation',
      'Custom JWT claims',
      'Magic-link passwordless',
      'Breached password detection (HIBP)',
      'Tenant backup & restore',
      'Admin impersonation',
      'Silent SSO (prompt=none)',
      'Redis distributed sessions',
      'App launcher',
      'Internationalization (i18n)',
      'Email OTP passwordless',
      'Client default roles',
      'Transactional email branding',
      'Refresh-token replay detection',
      'TOTP replay + lockout protection',
      'Non-root container',
      'Bootstrap API keys (env-managed)',
      'Multi-tenant CORS policy',
      'Enterprise SSO (LDAP/SAML)',
      'OAuth/OIDC provider',
      'Multi-tenant orgs',
      'Bring your own database',
      'Free for self-hosting',
    ],
  },

  architecture: {
    eyebrow: 'Architecture',
    title: 'Centralized identity for your entire stack',
    subtitle: 'One identity platform, unlimited applications',
    users: 'Users',
    identityServer: 'Identity Server',
    applications: 'Applications',
    adminDashboard: 'Admin Dashboard',
    steps: [
      {
        title: 'Unified Identity',
        description: 'One user base across all your applications',
      },
      {
        title: 'Simple Integration',
        description: 'Add authentication to any app in minutes',
      },
      {
        title: 'Complete Visibility',
        description: 'Monitor and manage everything from one dashboard',
      },
    ],
  },

  ctaSection: {
    titleStart: 'Ready to simplify your ',
    titleHighlight: 'authentication',
    questionMark: '?',
    description: 'Deploy Kotauth in under a minute. No credit card required.',
    tryDemo: 'Try the Demo',
    getStartedFree: 'Get Started Free',
  },

  contactSection: {
    eyebrow: 'Contact',
    title: 'Get in touch',
    description:
      "Kotauth is an open source project. Most conversations happen in public, and that's intentional. Pick the right channel below.",
    channels: [
      {
        title: 'Bug Reports',
        description:
          "Found something broken? Open a GitHub issue with reproduction steps and we'll triage it.",
        cta: 'Open an Issue',
      },
      {
        title: 'Community',
        description:
          'Questions, ideas, and general discussion. GitHub Discussions is where the community lives.',
        cta: 'Join Discussions',
      },
      {
        title: 'Contribute',
        description:
          'Want to add a feature or improve the codebase? Start by reading the contribution guide.',
        cta: 'View Repo',
      },
    ],
    noteLabel: 'Note:',
    noteText:
      'This is an open source project maintained in spare time. Response times vary. For security disclosures, use the contact form with subject "Security".',
    form: {
      messageSent: 'Message sent',
      thankYou: "Thanks for reaching out. We'll get back to you as soon as possible.",
      sendAnother: 'Send another',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      yourName: 'Your name',
      emailPlaceholder: 'you@example.com',
      selectTopic: 'Select a topic...',
      generalInquiry: 'General Inquiry',
      integrationHelp: 'Integration Help',
      featureRequest: 'Feature Request',
      security: 'Security',
      partnership: 'Partnership',
      other: 'Other',
      messagePlaceholder: 'Describe your question or request in detail...',
      sendMessage: 'Send Message',
      urgentNote: 'For urgent issues, use',
      githubDiscussions: 'GitHub Discussions',
    },
  },

  pages: {
    index: {
      title: 'Kotauth | Self-hosted authentication for modern applications',
      description:
        'The open-source, Docker-native identity platform. OAuth 2.0, OpenID Connect, multi-tenancy, white-label auth screens, AI-native MCP management, and webhooks. Deploy in seconds with a single docker compose up. Try the live demo at demo.kotauth.com.',
    },
    contact: {
      title: 'Contact | Kotauth',
      description:
        'Get in touch with the Kotauth team. Report bugs on GitHub Issues, join the community on GitHub Discussions, or reach out directly for integration help and partnership inquiries.',
    },
    notFound: {
      title: 'Page Not Found | Kotauth',
      description: "The page you're looking for doesn't exist.",
      heading: 'Page not found',
      body: "The page you're looking for doesn't exist or has been moved.",
      backToHome: 'Back to home',
    },
    privacy: {
      title: 'Privacy Policy | Kotauth',
      description:
        "Kotauth's privacy policy. We use OpenPanel for privacy-friendly, cookieless analytics. No personal data is sold or shared with third parties.",
    },
    terms: {
      title: 'Terms of Service | Kotauth',
      description:
        "Kotauth's terms of service. Kotauth is open-source software provided under the MIT License. Review the terms governing use of the kotauth.com website and related services.",
    },
    features: {
      title: 'Features | Kotauth',
      description:
        'Explore all features of Kotauth: OAuth 2.0, OIDC, multi-tenancy, MFA, magic links, RBAC, backup & restore, MCP integration, Docker-native deployment, and more.',
    },
    security: {
      title: 'Security | Kotauth',
      description:
        "Learn about Kotauth's security architecture: AES-256-GCM encryption, bcrypt password hashing, TOTP MFA, rate limiting, tenant isolation, and comprehensive audit logging.",
    },
    roadmap: {
      title: 'Roadmap | Kotauth',
      description:
        "See what's planned for Kotauth: upcoming features, improvements, and the development timeline for the self-hosted identity platform.",
    },
    changelog: {
      title: 'Changelog | Kotauth',
      description:
        'Release history for Kotauth. See what changed in each version: new features, bug fixes, security improvements, and breaking changes.',
    },
  },
};

export type Translations = typeof en;
export default en;
