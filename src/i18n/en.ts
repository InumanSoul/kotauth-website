const en = {
  nav: {
    features: 'Features',
    security: 'Security',
    roadmap: 'Roadmap',
    changelog: 'Changelog',
    resources: 'Resources',
    company: 'Company',
    documentation: 'Documentation',
    apiReference: 'API Reference',
    mcpDocs: 'MCP Docs',
    docs: 'Docs',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
    getStarted: 'Get Started',
    moreLanguages: 'More languages coming soon',
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
    mcpDocs: 'MCP Docs',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
    brandDescription:
      'Identity infrastructure for modern applications. Self-hosted, Docker-native, developer-first.',
    openSource: 'Open source under',
    mitLicense: 'MIT License',
  },

  hero: {
    titleLine1: 'Auth that lives in your stack,',
    titleLine2: "not someone else's cloud.",
    description:
      'Kotauth is the open-source, Docker-native identity platform. Enterprise-grade OAuth, OIDC and multi-tenancy, self-hosted in one command. The free alternative to Clerk, Auth0 and Keycloak.',
    getStarted: 'Get started free',
    tryDemo: 'Try the demo',
    alternativesLabel: 'A free, self-hosted alternative to',
  },

  whySelfHost: {
    eyebrow: 'Why self-host',
    title: "Your auth shouldn't be someone else's SaaS.",
    subtitle: 'Three reasons teams move their identity layer in-house.',
    reasons: [
      {
        title: 'Your data never leaves',
        body: 'Users, tokens and audit logs stay on infrastructure you control. No third party sits in your authentication path. Ever.',
      },
      {
        title: 'No per-MAU billing',
        body: 'Free and open source under MIT. Scale from ten users to ten million without a pricing tier, a sales call, or a surprise invoice.',
      },
      {
        title: 'Runs anywhere Docker runs',
        body: 'A ~120 MB image, non-root and read-only by default. Cloud, on-prem, air-gapped, or your laptop. One command to start.',
      },
    ],
  },

  compareSection: {
    eyebrow: 'Compare',
    title: 'How Kotauth stacks up',
    subtitle:
      'The differentiators that actually matter, measured against the self-hosted incumbent and the SaaS players.',
    capability: 'Capability',
    partial: 'partial',
    rows: [
      'Self-hosted, full data ownership',
      'Free at any user count',
      'One-command Docker deploy',
      'Modern admin UI',
      'AI-native management (MCP)',
      'White-label auth screens',
      'Air-gapped deployment',
      'Multi-tenant workspaces',
      'Developer experience',
    ],
  },

  featuresGrid: {
    eyebrow: 'Features',
    title: 'Everything you need for identity',
    subtitle: 'Complete authentication infrastructure with the simplicity developers expect.',
    exploreAll: 'Explore all features',
    items: [
      {
        title: 'OAuth 2.0 & OpenID Connect',
        description:
          'Authorization Code + PKCE, Client Credentials, token rotation, introspection and OIDC Discovery. Any OIDC client works out of the box.',
      },
      {
        title: 'Multi-Tenant Workspaces',
        description:
          'Isolated user directories, per-tenant RS256 keys, slug-routed APIs and independent security policies. One instance, many products.',
      },
      {
        title: 'Magic-Link Passwordless',
        description:
          'Email passwordless login with 15-minute one-time tokens and same-device binding. User-enumeration safe and fully MFA-aware.',
      },
      {
        title: 'Backup & Restore',
        description:
          'Encrypted tenant snapshots with PBKDF2 600k + AES-256-GCM. Export and import via CLI or admin API. Portable, schema-validated.',
      },
      {
        title: 'AI-Native Management',
        description:
          'Manage users, roles, sessions and audit logs from Claude, Cursor or any MCP client. 33 tools across 8 domains, scope-based access.',
      },
      {
        title: 'Docker-Native Deployment',
        description:
          '~120 MB image on GHCR. Non-root, read-only, no-new-privileges. One-command quickstart, auto-migrations, fully air-gapped.',
      },
    ],
  },

  mcpShowcase: {
    eyebrow: 'AI-native management',
    titleStart: 'Manage identity ',
    titleHighlight: 'in plain language.',
    subtitle:
      'The first self-hosted IAM with native Model Context Protocol support. Connect Claude, Cursor or any MCP client. 33 scoped tools, no SDK, no custom code.',
    mcpSession: 'MCP Session',
    oneCommand: 'npx @kotauth/mcp',
    oneCommandLabel: 'one command to connect',
    toolsTitle: '33 scoped tools',
    toolsDescription:
      'Every tool is guarded by API key scopes. Your AI assistant only gets the permissions you choose.',
    mcpDocs: 'MCP Documentation',
    viewOnNpm: 'View on npm',
    chat: {
      userMessage:
        "Bob's account may be compromised. Disable him, kill all his sessions, and show me the last hour.",
      assistantIntro: 'On it. Locking the account, revoking sessions, pulling the audit trail.',
      tool1Result: 'disable_user ✓ Account disabled · userId 87',
      tool2Result: 'revoke_session ✓ 2 active sessions revoked',
      tool4Result: 'userId: 87, last 60 min',
      summaryIntro: 'Done. Here\'s the last hour:',
      loginFailed: 'LOGIN_FAILED ×3 from 191.96.x.x',
      loginSuccess: 'LOGIN_SUCCESS from 191.96.x.x',
      userUpdated: 'USER_UPDATED email changed',
      summaryAnalysis:
        'Looks like credential stuffing, then account takeover. The email change confirms it.',
    },
    domains: [
      { label: 'Users', count: 10 },
      { label: 'Roles', count: 5 },
      { label: 'Groups', count: 6 },
      { label: 'Applications', count: 3 },
      { label: 'Sessions', count: 2 },
      { label: 'Audit Logs', count: 1 },
      { label: 'Attributes', count: 3 },
      { label: 'Claim Mappers', count: 3 },
    ],
  },

  authShowcase: {
    eyebrow: 'Auth experience',
    titleStart: 'Auth screens that ',
    titleHighlight: "don't look like auth screens.",
    description:
      'Production-ready login, registration, MFA and account pages, beautiful by default, fully white-labeled per tenant, zero rebuild required.',
    points: [
      {
        title: 'Server-rendered, zero JS overhead',
        body: 'Pure server-rendered HTML. No client framework, no hydration delay. First paint under 100ms.',
      },
      {
        title: 'White-label per workspace',
        body: 'CSS custom properties injected at render time. Each tenant gets its own colors, logo and favicon, with zero rebuild.',
      },
      {
        title: 'Complete screen set',
        body: 'Login, register, forgot/reset password, accept invite, TOTP MFA and email verification, all production-ready.',
      },
      {
        title: 'Three presets, full control',
        body: 'Start with Light, Dark or Simple. Override any token to match your brand without touching backend code.',
      },
    ],
    mockup: {
      signIn: 'Sign in',
      continueToWorkspace: 'to continue to Acme Corp',
      emailAddress: 'Email address',
      emailPlaceholder: 'you@acme.com',
      continue: 'Continue',
      or: 'or',
      continueWithGithub: 'Continue with GitHub',
      noAccount: 'No account? ',
      signUp: 'Sign up',
      themeHint: 'Light Dark Simple',
    },
  },

  ctaSection: {
    eyebrow: 'Live demo · no install',
    titleLead: 'Ready to own your',
    titleHighlight: 'authentication',
    description: 'Deploy Kotauth in under a minute. No credit card, no sales call, no lock-in.',
    getStartedFree: 'Get started free',
    launchDemo: 'Launch the demo',
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
