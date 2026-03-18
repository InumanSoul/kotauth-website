import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GradientGlow } from '@/components/GradientGlow';
import { PhaseCard, containerVariants, type Phase } from '@/components/PhaseCard';

const GITHUB_URL = 'https://github.com/InumanSoul/kotauth';

// ─── Data ────────────────────────────────────────────────────────────────────

const shippedPhases: Phase[] = [
  {
    number: 0,
    title: 'Foundation',
    tagline: 'Honest production-readiness baseline',
    items: [
      'Email verification on registration',
      'Password reset with signed expiring tokens',
      'Rate limiting on /login and /register per IP',
      'CSRF protection on all form endpoints',
      'Startup validation — refuses unsafe defaults in production',
      'Refresh token persistence with SHA-256 hashing',
      'HTTPS enforcement at startup (cookies, OIDC, OAuth callbacks)',
      'Server-side input validation across all endpoints',
    ],
  },
  {
    number: 1,
    title: 'Multi-Tenancy Core',
    tagline: 'The workspace model that makes Kotauth a platform',
    items: [
      'Flyway versioned schema migrations — safe for CI/CD and production upgrades',
      'Workspaces with slug routing, independent issuer URLs, and token TTL config',
      'Per-tenant OAuth2 applications with bcrypt-hashed secrets and redirect URIs',
      'Tenant-scoped user directories — same email is independent across workspaces',
      'Master workspace for platform admins, cleanly separated from user tenants',
      'Per-tenant RS256 key pairs provisioned on first use — no shared signing key',
      'Admin console — workspace list, application management, user management',
    ],
  },
  {
    number: 2,
    title: 'OAuth 2.0 / OIDC Compliance',
    tagline: 'Standards-compliant — any OIDC client library works without modification',
    items: [
      'OIDC Discovery document — GET /.well-known/openid-configuration',
      'JWKS endpoint for offline token verification',
      'Authorization Code + PKCE (required for all public clients)',
      'Client Credentials grant for machine-to-machine',
      'Refresh Token rotation — old token immediately invalidated on each use',
      'Token revocation (RFC 7009) and introspection (RFC 7662)',
      'Standard JWT claims: sub, iss, aud, realm_access.roles, resource_access.*',
      'Per-user session tracking with user- and admin-initiated revocation',
    ],
  },
  {
    number: 3,
    title: 'User Management Platform',
    tagline: 'The UI/UX layer that distinguishes Kotauth from Keycloak',
    items: [
      'Admin console — search, filter, paginate users; create, edit, disable accounts',
      'API key management — scoped keys with SHA-256 hashing, prefix stored for display',
      'Audit log viewer — paginated, filterable by event type',
      'Per-tenant SMTP with AES-256-GCM encryption of stored credentials',
      'User self-service portal — profile, password change, session listing and revocation',
      'RBAC — tenant roles, application-scoped roles, composite roles with BFS cycle detection',
      'Groups with nested hierarchy and role inheritance',
      'TOTP MFA (RFC 6238) with QR enrollment, verification, and recovery codes',
      'MFA policy per workspace: optional, required, required_for_admins',
      'REST API v1 — 30+ endpoints, OpenAPI 3.1 spec, Swagger UI',
      'Per-tenant branding — logo, primary color, workspace name on all auth pages',
    ],
  },
  {
    number: 4,
    title: 'Webhooks',
    tagline: 'Real-time event delivery — no polling required',
    items: [
      'Webhook endpoint management — register URLs, select event subscriptions',
      'HMAC-SHA256 signing on every delivery (X-KotAuth-Signature header)',
      'Asynchronous fan-out — webhook delivery never blocks the auth flow',
      'Exponential backoff retry — 3 attempts: immediate, 5 min, 30 min',
      'Delivery history per endpoint — status, response code, error detail',
      '8 event types: user.created/updated/deleted, login.success/failed, password.reset, mfa.enrolled, session.revoked',
    ],
  },
  {
    number: 5,
    title: 'Documentation & Release',
    tagline: 'The external surface that makes adoption possible',
    items: [
      'README with Docker quickstart — running in under five minutes',
      'Full environment variable reference with production guidance',
      'React SPA + TanStack Router integration guide (oidc-client-ts, auth guards, silent refresh)',
      'CONTRIBUTING guide — local setup, architecture constraints, migration conventions',
      'Security hardening: cookie.secure derived from KAUTH_BASE_URL at startup',
    ],
  },
];

const plannedPhases: Phase[] = [
  {
    number: 6,
    title: 'Enterprise Federation',
    tagline: 'Connect Kotauth to corporate identity sources',
    items: [
      'LDAP / Active Directory user and group sync with configurable interval',
      'SAML 2.0 — SP-initiated and IdP-initiated flows',
      'External OIDC broker — relay to upstream providers (Azure AD, Okta)',
      'Cross-tenant federation with configured trust',
    ],
  },
  {
    number: 7,
    title: 'Advanced Authentication',
    tagline: 'Modern, phishing-resistant authentication methods',
    items: [
      'WebAuthn / Passkeys — MfaMethod enum is already extensible for this',
      'Magic links — passwordless email login with short-lived signed tokens',
      'SMS OTP via pluggable provider interface (no vendor lock-in)',
    ],
  },
  {
    number: 8,
    title: 'Observability & Operations',
    tagline: 'Production-grade insight into a running deployment',
    items: [
      'Prometheus metrics — login rates, error rates, token issuance, session count',
      'Structured JSON log output (logstash encoder in dependency tree)',
      'Webhook retry background sweep for deliveries missed during downtime',
      'Admin-initiated key rotation with configurable overlap window',
      'Helm chart with configurable replicas, probes, and secret management',
      'Zero-downtime rolling updates — session and key state compatibility guarantees',
    ],
  },
  {
    number: 9,
    title: 'Platform Expansion',
    tagline: 'Kotauth as a programmable identity layer',
    items: [
      'REST API expansion — bulk operations, user impersonation with audit trail',
      'Typed TypeScript/JavaScript SDK wrapping the REST API and OIDC flows',
      'Per-tenant HTML email template customization',
      'Audit log export to S3-compatible storage or SIEM webhook',
      'SCIM 2.0 — automated user provisioning from external HR systems',
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export function RoadmapPage() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <GradientGlow
          className="top-0 right-1/4"
          size={600}
          color="rgba(0, 119, 168, 0.1)"
        />
        <div className="section-container relative z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow mb-4 block">Roadmap</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-kotauth-text-primary leading-tight font-mono mb-6">
              What's built.<br />
              <span className="gradient-text">What's next.</span>
            </h1>
            <p className="text-lg text-kotauth-text-secondary mb-8 max-w-xl">
              V1.0 is complete — Phases 0–5 shipped as of March 2026.
              Every architectural decision and shipped feature is documented here.
              No vaporware, no undated promises.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-kotauth-primary hover:bg-kotauth-primary-light text-white font-mono h-11 px-6"
              >
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-kotauth-surface-2 text-kotauth-text-primary hover:bg-kotauth-surface-2 font-mono h-11 px-6"
              >
                <a href={`${GITHUB_URL}/discussions`} target="_blank" rel="noopener noreferrer">
                  Request a Feature
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-kotauth-surface-2 bg-kotauth-bg-secondary">
        <div className="section-container py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: 'Phases Shipped', value: '6' },
              { label: 'DB Migrations', value: '21' },
              { label: 'REST Endpoints', value: '30+' },
              { label: 'Architecture ADRs', value: '21' },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-2xl font-bold text-kotauth-text-primary font-mono">{stat.value}</p>
                <p className="text-xs text-kotauth-text-muted font-mono mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V1.0 Shipped */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px flex-1 bg-kotauth-surface-2 max-w-[40px]" />
              <span className="text-xs font-mono text-kotauth-success uppercase tracking-widest">
                V1.0 Complete
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-kotauth-text-primary font-mono">
              Shipped — Phases 0 → 5
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {shippedPhases.map((phase) => (
              <PhaseCard key={phase.number} phase={phase} shipped={true} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-container">
        <div className="border-t border-kotauth-surface-2" />
      </div>

      {/* Post-V1 Planned */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px flex-1 bg-kotauth-surface-2 max-w-[40px]" />
              <span className="text-xs font-mono text-kotauth-text-muted uppercase tracking-widest">
                Post V1.0
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-kotauth-text-primary font-mono mb-3">
              What's next — Phases 6 → 9
            </h2>
            <p className="text-kotauth-text-secondary max-w-xl">
              Planned but not yet scheduled. Priority order reflects market demand and dependency on existing foundations.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {plannedPhases.map((phase) => (
              <PhaseCard key={phase.number} phase={phase} shipped={false} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Architecture Decisions */}
      <section className="py-16 lg:py-24 bg-kotauth-bg-secondary border-t border-kotauth-surface-2">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <span className="eyebrow mb-3 block">Architecture</span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-kotauth-text-primary font-mono mb-3">
              21 Architecture Decision Records
            </h2>
            <p className="text-kotauth-text-secondary max-w-xl">
              Key decisions made during development, documented for contributors and auditors.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm font-mono border-collapse">
              <thead>
                <tr className="border-b border-kotauth-surface-2">
                  <th className="text-left py-3 pr-6 text-xs text-kotauth-text-muted uppercase tracking-widest font-normal w-16">ADR</th>
                  <th className="text-left py-3 pr-6 text-xs text-kotauth-text-muted uppercase tracking-widest font-normal">Decision</th>
                  <th className="text-left py-3 text-xs text-kotauth-text-muted uppercase tracking-widest font-normal hidden lg:table-cell">Rationale</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: '01', decision: 'Hexagonal architecture — zero framework imports in domain', rationale: 'Domain logic is independently testable; adapters are swappable' },
                  { id: '02', decision: 'Flyway for schema migrations', rationale: 'Versioned, irreversible migrations safe for CI/CD and production upgrades' },
                  { id: '03', decision: 'Separate write-only vs. read-only audit log paths', rationale: 'Auth path never blocks on query execution; read and write independently scalable' },
                  { id: '04', decision: 'All mutations routed through domain services', rationale: 'Validation and audit logging centralized; no mutation path bypasses business rules' },
                  { id: '05', decision: 'Client secret stored as bcrypt hash only — raw value shown once', rationale: 'A database breach does not leak application secrets' },
                  { id: '06', decision: 'Domain services return AdminResult<T> sealed types, not exceptions', rationale: 'Error handling is explicit and exhaustive; no surprise runtime exceptions' },
                  { id: '07', decision: 'Portal login uses OAuth Authorization Code + PKCE via built-in client', rationale: 'Portal and third-party apps authenticate identically; no separate session mechanism' },
                  { id: '08', decision: 'Master workspace for platform admins', rationale: 'Platform operator role is cleanly separated from end-user tenants' },
                  { id: '09', decision: 'Per-tenant RS256 key pairs, auto-provisioned', rationale: 'No single point of key failure; tokens verifiable offline via JWKS' },
                  { id: '10', decision: 'Refresh token rotation on every use', rationale: 'A stolen refresh token has a limited replay window; reuse revokes entire session chain' },
                  { id: '11', decision: 'Audit events recorded eagerly in the request path', rationale: 'No auth flow succeeds without a corresponding audit record' },
                  { id: '12', decision: 'PKCE required for all public clients', rationale: 'Defense against authorization code interception and client ID enumeration' },
                  { id: '13', decision: 'User lookup by (tenant_id, username) — no global namespace', rationale: 'Same email exists independently across workspaces; no cross-tenant leakage' },
                  { id: '14', decision: 'MFA pending state via HMAC-signed cookie, not server-side session', rationale: 'Stateless; no session table bloat; HMAC prevents userId forgery' },
                  { id: '15', decision: 'OAuth state param carries HMAC-signed nonce + OAuth params as Base64', rationale: 'No extra cookie or session required; state is self-contained and tamper-evident' },
                  { id: '16', decision: 'Social login auto-links by email address', rationale: 'Reduces friction for users with both local and social accounts on the same email' },
                  { id: '17', decision: 'Social OAuth adapters use java.net.http only', rationale: 'Lean fat JAR; minimal attack surface; no transitive dependency risk' },
                  { id: '18', decision: 'Social-registered users get a random unusable password hash', rationale: 'Account exists; password auth disabled until user explicitly sets one' },
                  { id: '19', decision: 'API keys use SHA-256, not bcrypt', rationale: '256-bit key entropy makes brute force infeasible; SHA-256 eliminates bcrypt latency per call' },
                  { id: '20', decision: 'API key prefix stored for display — first 16 chars of raw key', rationale: 'Human-friendly identification in admin UI without exposing the full credential' },
                  { id: '21', decision: 'Swagger UI loaded from CDN, not bundled', rationale: 'Saves ~7 MB from the fat JAR; no new Gradle dependencies required' },
                ].map((adr) => (
                  <tr key={adr.id} className="border-b border-kotauth-surface-1 hover:bg-kotauth-surface-1/40 transition-colors">
                    <td className="py-3 pr-6 text-kotauth-primary text-xs">ADR-{adr.id}</td>
                    <td className="py-3 pr-6 text-kotauth-text-secondary text-xs leading-relaxed">{adr.decision}</td>
                    <td className="py-3 text-kotauth-text-muted text-xs leading-relaxed hidden lg:table-cell">{adr.rationale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-kotauth-surface-2">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-kotauth-text-primary font-mono mb-1">
                Want to shape what's next?
              </h3>
              <p className="text-kotauth-text-secondary text-sm">
                Open an issue or start a discussion. This roadmap is driven by real use cases.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Button
                asChild
                className="bg-kotauth-primary hover:bg-kotauth-primary-light text-white font-mono"
              >
                <a href={`${GITHUB_URL}/issues/new`} target="_blank" rel="noopener noreferrer">
                  Open an Issue
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-kotauth-surface-2 text-kotauth-text-primary hover:bg-kotauth-surface-2 font-mono"
              >
                <a href={`${GITHUB_URL}/discussions`} target="_blank" rel="noopener noreferrer">
                  Discussions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
