import type { Translations } from './en';

const pt: Translations = {
  nav: {
    features: 'Recursos',
    security: 'Segurança',
    roadmap: 'Roadmap',
    changelog: 'Changelog',
    resources: 'Recursos',
    company: 'Empresa',
    documentation: 'Documentação',
    apiReference: 'API Reference',
    mcpDocs: 'MCP Docs',
    docs: 'Docs',
    contact: 'Contato',
    privacy: 'Privacidade',
    terms: 'Termos',
    getStarted: 'Começar',
    moreLanguages: 'Mais idiomas em breve',
  },

  footer: {
    product: 'Produto',
    resources: 'Recursos',
    company: 'Empresa',
    features: 'Recursos',
    security: 'Segurança',
    roadmap: 'Roadmap',
    changelog: 'Changelog',
    documentation: 'Documentação',
    apiReference: 'Referência da API',
    mcpDocs: 'MCP Docs',
    contact: 'Contato',
    privacy: 'Privacidade',
    terms: 'Termos',
    brandDescription:
      'Infraestrutura de identidade para aplicações modernas. Auto-hospedada, nativa de Docker, feita para desenvolvedores.',
    openSource: 'Código aberto sob',
    mitLicense: 'Licença MIT',
  },

  hero: {
    titleLine1: 'Autenticação que vive na sua stack,',
    titleLine2: 'não na nuvem de outra pessoa.',
    description:
      'Kotauth é a plataforma de identidade open-source e nativa de Docker. OAuth, OIDC e multi-tenancy de nível empresarial, auto-hospedados em um único comando. A alternativa gratuita a Clerk, Auth0 e Keycloak.',
    getStarted: 'Comece grátis',
    tryDemo: 'Testar a demo',
    alternativesLabel: 'Uma alternativa gratuita e auto-hospedada a',
  },

  whySelfHost: {
    eyebrow: 'Por que auto-hospedar',
    title: 'Sua autenticação não deveria ser o SaaS de outra pessoa.',
    subtitle: 'Três razões pelas quais as equipes trazem sua camada de identidade para dentro de casa.',
    reasons: [
      {
        title: 'Seus dados nunca saem',
        body: 'Usuários, tokens e registros de auditoria permanecem na infraestrutura que você controla. Nenhum terceiro fica no seu caminho de autenticação. Nunca.',
      },
      {
        title: 'Sem cobrança por MAU',
        body: 'Gratuito e de código aberto sob licença MIT. Escale de dez usuários a dez milhões sem faixas de preço, ligação de vendas ou fatura surpresa.',
      },
      {
        title: 'Roda onde o Docker rodar',
        body: 'Uma imagem de ~120 MB, sem root e somente leitura por padrão. Nuvem, on-premise, air-gapped ou seu notebook. Um comando para começar.',
      },
    ],
  },

  compareSection: {
    eyebrow: 'Comparar',
    title: 'Como o Kotauth se compara',
    subtitle:
      'Os diferenciais que realmente importam, medidos frente ao líder auto-hospedado e aos players de SaaS.',
    capability: 'Capacidade',
    partial: 'parcial',
    rows: [
      'Auto-hospedado, propriedade total dos dados',
      'Gratuito com qualquer número de usuários',
      'Deploy com um único comando de Docker',
      'Painel de administração moderno',
      'Gestão nativa com IA (MCP)',
      'Telas de autenticação white-label',
      'Deploy air-gapped',
      'Workspaces multi-tenant',
      'Experiência de desenvolvimento',
    ],
  },

  featuresGrid: {
    eyebrow: 'Recursos',
    title: 'Tudo o que você precisa para identidade',
    subtitle: 'Infraestrutura de autenticação completa com a simplicidade que os desenvolvedores esperam.',
    exploreAll: 'Explorar todos os recursos',
    items: [
      {
        title: 'OAuth 2.0 e OpenID Connect',
        description:
          'Authorization Code + PKCE, Client Credentials, rotação de tokens, introspecção e OIDC Discovery. Qualquer cliente OIDC funciona sem ajustes.',
      },
      {
        title: 'Workspaces Multi-Tenant',
        description:
          'Diretórios de usuários isolados, chaves RS256 por tenant, APIs roteadas por slug e políticas de segurança independentes. Uma instância, muitos produtos.',
      },
      {
        title: 'Sem Senha com Magic-Link',
        description:
          'Login sem senha por email com tokens de uso único de 15 minutos e vínculo ao mesmo dispositivo. Seguro contra enumeração de usuários e totalmente compatível com MFA.',
      },
      {
        title: 'Backup e Restauração',
        description:
          'Snapshots criptografados de tenant com PBKDF2 600k + AES-256-GCM. Exporte e importe via CLI ou API de administração. Portátil e com validação de schema.',
      },
      {
        title: 'Gestão Nativa de IA',
        description:
          'Gerencie usuários, papéis, sessões e registros de auditoria a partir do Claude, Cursor ou qualquer cliente MCP. 33 ferramentas em 8 domínios, acesso baseado em escopos.',
      },
      {
        title: 'Deploy Nativo de Docker',
        description:
          'Imagem de ~120 MB no GHCR. Sem root, somente leitura, sem novos privilégios. Início rápido com um comando, migrações automáticas, totalmente air-gapped.',
      },
    ],
  },

  mcpShowcase: {
    eyebrow: 'Gestão nativa de IA',
    titleStart: 'Gerencie identidade ',
    titleHighlight: 'em linguagem natural.',
    subtitle:
      'O primeiro IAM auto-hospedado com suporte nativo ao Model Context Protocol. Conecte Claude, Cursor ou qualquer cliente MCP. 33 ferramentas com escopo, sem SDK, sem código personalizado.',
    mcpSession: 'Sessão MCP',
    oneCommand: 'npx @kotauth/mcp',
    oneCommandLabel: 'um comando para conectar',
    toolsTitle: '33 ferramentas com escopo',
    toolsDescription:
      'Cada ferramenta é protegida por escopos de chave de API. Seu assistente de IA recebe apenas as permissões que você escolher.',
    mcpDocs: 'Documentação MCP',
    viewOnNpm: 'Ver no npm',
    chat: {
      userMessage:
        'A conta do Bob pode estar comprometida. Desative ele, encerre todas as sessões dele e me mostre a última hora.',
      assistantIntro: 'Pode deixar. Bloqueando a conta, revogando sessões, buscando o registro de auditoria.',
      tool1Result: 'disable_user ✓ Conta desativada · userId 87',
      tool2Result: 'revoke_session ✓ 2 sessões ativas revogadas',
      tool4Result: 'userId: 87, últimos 60 min',
      summaryIntro: 'Pronto. Aqui está a última hora:',
      loginFailed: 'LOGIN_FAILED ×3 de 191.96.x.x',
      loginSuccess: 'LOGIN_SUCCESS de 191.96.x.x',
      userUpdated: 'USER_UPDATED email alterado',
      summaryAnalysis:
        'Parece credential stuffing, depois tomada de conta. A troca de email confirma isso.',
    },
    domains: [
      { label: 'Usuários', count: 10 },
      { label: 'Papéis', count: 5 },
      { label: 'Grupos', count: 6 },
      { label: 'Aplicações', count: 3 },
      { label: 'Sessões', count: 2 },
      { label: 'Registros de auditoria', count: 1 },
      { label: 'Atributos', count: 3 },
      { label: 'Mapeadores de claims', count: 3 },
    ],
  },

  authShowcase: {
    eyebrow: 'Experiência de autenticação',
    titleStart: 'Telas de auth que ',
    titleHighlight: 'não parecem telas de auth.',
    description:
      'Páginas de login, cadastro, MFA e gerenciamento de conta prontas para produção, bonitas por padrão, totalmente white-label por tenant, sem necessidade de rebuild.',
    points: [
      {
        title: 'Renderizado no servidor, zero overhead de JS',
        body: 'HTML puro renderizado no servidor. Sem framework no cliente, sem atraso de hidratação. Primeira renderização em menos de 100ms.',
      },
      {
        title: 'White-label por workspace',
        body: 'Variáveis CSS injetadas em tempo de renderização. Cada tenant recebe suas próprias cores, logo e favicon, sem nenhum rebuild.',
      },
      {
        title: 'Conjunto completo de telas',
        body: 'Login, cadastro, esqueci/redefinir senha, aceitar convite, TOTP MFA e verificação de email, tudo pronto para produção.',
      },
      {
        title: 'Três presets, controle total',
        body: 'Comece com Light, Dark ou Simple. Sobrescreva qualquer token para combinar com sua marca sem tocar no código do backend.',
      },
    ],
    mockup: {
      signIn: 'Entrar',
      continueToWorkspace: 'para continuar na Acme Corp',
      emailAddress: 'Endereço de email',
      emailPlaceholder: 'voce@acme.com',
      continue: 'Continuar',
      or: 'ou',
      continueWithGithub: 'Continuar com GitHub',
      noAccount: 'Não tem conta? ',
      signUp: 'Cadastre-se',
      themeHint: 'Light Dark Simple',
    },
  },

  ctaSection: {
    eyebrow: 'Demo ao vivo · sem instalação',
    titleLead: 'Pronto para ser dono da sua',
    titleHighlight: 'autenticação',
    description: 'Faça o deploy do Kotauth em menos de um minuto. Sem cartão de crédito, sem ligação de vendas, sem lock-in.',
    getStartedFree: 'Comece grátis',
    launchDemo: 'Abrir a demo',
  },

  pages: {
    index: {
      title: 'Kotauth | Autenticação auto-hospedada para aplicações modernas',
      description:
        'A plataforma de identidade de código aberto e nativa de Docker. OAuth 2.0, OpenID Connect, multi-tenancy, telas de auth white-label, gestão nativa com IA via MCP e webhooks. Faça o deploy em segundos com um único docker compose up. Teste a demo ao vivo em demo.kotauth.com.',
    },
    contact: {
      title: 'Contato | Kotauth',
      description:
        'Entre em contato com a equipe do Kotauth. Relate bugs no GitHub Issues, junte-se à comunidade no GitHub Discussions ou fale diretamente conosco para ajuda com integração e propostas de parceria.',
    },
    notFound: {
      title: 'Página Não Encontrada | Kotauth',
      description: 'A página que você procura não existe.',
      heading: 'Página não encontrada',
      body: 'A página que você procura não existe ou foi movida.',
      backToHome: 'Voltar ao início',
    },
    privacy: {
      title: 'Política de Privacidade | Kotauth',
      description:
        'Política de privacidade do Kotauth. Usamos o OpenPanel para analytics sem cookies e que respeitam a privacidade. Nenhum dado pessoal é vendido ou compartilhado com terceiros.',
    },
    terms: {
      title: 'Termos de Serviço | Kotauth',
      description:
        'Termos de serviço do Kotauth. O Kotauth é um software de código aberto fornecido sob a Licença MIT. Revise os termos que regem o uso do site kotauth.com e dos serviços relacionados.',
    },
    features: {
      title: 'Recursos | Kotauth',
      description:
        'Explore todos os recursos do Kotauth: OAuth 2.0, OIDC, multi-tenancy, MFA, magic links, RBAC, backup e restore, integração MCP, deploy nativo de Docker e muito mais.',
    },
    security: {
      title: 'Segurança | Kotauth',
      description:
        'Conheça a arquitetura de segurança do Kotauth: criptografia AES-256-GCM, hash de senhas com bcrypt, MFA TOTP, rate limiting, isolamento de tenants e logging de auditoria completo.',
    },
    roadmap: {
      title: 'Roadmap | Kotauth',
      description:
        'Veja o que está planejado para o Kotauth: próximos recursos, melhorias e o cronograma de desenvolvimento da plataforma de identidade auto-hospedada.',
    },
    changelog: {
      title: 'Changelog | Kotauth',
      description:
        'Histórico de versões do Kotauth. Veja o que mudou em cada versão: novos recursos, correções de bugs, melhorias de segurança e mudanças incompatíveis.',
    },
  },
};

export default pt;
