import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { GradientGlow } from '@/components/GradientGlow';

const comparisons = [
  { feature: 'Self-hosted', kotauth: true, keycloak: true, saas: false },
  { feature: 'Docker-native', kotauth: true, keycloak: false, saas: null },
  { feature: 'Modern UI', kotauth: true, keycloak: false, saas: true },
  { feature: 'Developer experience', kotauth: true, keycloak: false, saas: true },
  { feature: 'Enterprise SSO (LDAP/SAML)', kotauth: null, keycloak: true, saas: 'paid' },
  { feature: 'OAuth/OIDC provider', kotauth: true, keycloak: true, saas: true },
  { feature: 'Multi-tenant orgs', kotauth: true, keycloak: true, saas: true },
  { feature: 'Bring your own database', kotauth: true, keycloak: true, saas: false },
  { feature: 'Free for self-hosting', kotauth: true, keycloak: true, saas: false },
];

function ComparisonIcon({ value }: { value: boolean | string | null }) {
  if (value === true) {
    return (
      <div className="w-6 h-6 bg-kotauth-success/10 flex items-center justify-center">
        <Check className="w-4 h-4 text-kotauth-success" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="w-6 h-6 bg-kotauth-error/10 flex items-center justify-center">
        <X className="w-4 h-4 text-kotauth-error" />
      </div>
    );
  }
  if (value === 'paid') {
    return (
      <span className="text-sm text-kotauth-warning font-medium font-mono">$$$</span>
    );
  }
  return (
    <div className="w-6 h-6 bg-kotauth-surface-2 flex items-center justify-center">
      <Minus className="w-3 h-3 text-kotauth-text-muted" />
    </div>
  );
}

export function ComparisonTable() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <GradientGlow 
        className="top-1/2 right-0 translate-x-1/2 -translate-y-1/2" 
        size={600}
        color="rgba(0, 119, 168, 0.15)"
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow mb-4 block">Comparison</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-kotauth-text-primary leading-tight mb-4 font-mono">
            Compare the alternatives
          </h2>
          <p className="text-lg text-kotauth-text-secondary">
            See why teams choose Kotauth for their identity infrastructure
          </p>
        </AnimatedSection>

        {/* Comparison Table */}
        <AnimatedSection>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-kotauth-surface-2">
                  <th className="text-left py-4 px-4 text-sm font-medium text-kotauth-text-tertiary font-mono">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-kotauth-primary/10 border border-kotauth-primary/30">
                      <span className="text-sm font-semibold text-kotauth-primary font-mono">Kotauth</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-kotauth-text-secondary font-mono">
                    Keycloak
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-kotauth-text-secondary font-mono">
                    Auth0 / Clerk
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.05,
                      ease: [0.16, 1, 0.3, 1] as const
                    }}
                    className="border-b border-kotauth-surface-2/50 hover:bg-kotauth-surface-1/30 transition-colors"
                  >
                    <td className="py-4 px-4 text-kotauth-text-primary font-mono">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex justify-center">
                        <ComparisonIcon value={row.kotauth} />
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex justify-center">
                        <ComparisonIcon value={row.keycloak} />
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex justify-center">
                        <ComparisonIcon value={row.saas} />
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
