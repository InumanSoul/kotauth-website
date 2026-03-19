import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/PageSEO';

const LAST_UPDATED = 'March 2026';
const GITHUB_URL = 'https://github.com/inumansoul/kotauth';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold text-kotauth-text-primary font-mono mb-4 pb-3 border-b border-kotauth-surface-2">
        {title}
      </h2>
      <div className="text-kotauth-text-secondary text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

export function TermsPage() {
  return (
    <div className="pt-[72px]">
      <PageSEO
        title="Terms of Service — Kotauth"
        description="Kotauth's terms of service. Kotauth is open-source software provided under the MIT License. Review the terms governing use of the kotauth.com website and related services."
        path="/terms"
      />
      <div className="section-container py-20 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Header */}
          <span className="eyebrow mb-4 block">Legal</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-kotauth-text-primary font-mono mb-3">
            Terms of Service
          </h1>
          <p className="text-kotauth-text-muted font-mono text-sm mb-12">
            Last updated: {LAST_UPDATED}
          </p>

          <Section title="What this document covers">
            <p>
              These terms govern your use of <strong className="text-kotauth-text-primary">kotauth.com</strong> — the informational website for the Kotauth open source project. They do not govern self-hosted deployments of the Kotauth software; that is governed by the{' '}
              <a
                href={`${GITHUB_URL}/blob/main/LICENSE`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-kotauth-primary hover:text-kotauth-primary-light"
              >
                MIT License
              </a>
              {' '}under which the software is released.
            </p>
          </Section>

          <Section title="Use of this website">
            <p>
              This website is provided for informational purposes — to describe the Kotauth project, its features, and how to get started. You may browse, link to, and share content from this website freely.
            </p>
            <p>
              You may not use this website to: scrape content in a way that degrades service for other visitors, attempt to gain unauthorized access to any systems, or misrepresent Kotauth or its maintainers.
            </p>
          </Section>

          <Section title="The Kotauth software">
            <p>
              Kotauth is free and open source software released under the <strong className="text-kotauth-text-primary">MIT License</strong>. You may use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software subject to the conditions in that license.
            </p>
            <p>
              The MIT License is permissive. The short version: do what you want with it, keep the copyright notice, and don't hold the authors liable.
            </p>
            <p>
              <a
                href={`${GITHUB_URL}/blob/main/LICENSE`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-kotauth-primary hover:text-kotauth-primary-light"
              >
                Read the full MIT License →
              </a>
            </p>
          </Section>

          <Section title="No warranties">
            <p>
              This website and the Kotauth software are provided <strong className="text-kotauth-text-primary">"as is"</strong>, without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <p>
              We make no guarantees about the availability, accuracy, or completeness of content on this website. We may update, remove, or change content at any time without notice.
            </p>
          </Section>

          <Section title="Limitation of liability">
            <p>
              To the maximum extent permitted by applicable law, the Kotauth maintainers shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or the Kotauth software, even if advised of the possibility of such damages.
            </p>
          </Section>

          <Section title="Third-party links">
            <p>
              This website links to third-party websites (GitHub, Google Fonts, etc.). We are not responsible for the content or privacy practices of those sites. Links are provided for convenience and do not constitute endorsement.
            </p>
          </Section>

          <Section title="Changes to these terms">
            <p>
              We may revise these terms at any time. The "Last updated" date at the top of this page reflects any changes. Continued use of the website after changes are posted constitutes your acceptance of the revised terms.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about these terms? Reach us via the{' '}
              <Link to="/contact" className="text-kotauth-primary hover:text-kotauth-primary-light">
                contact page
              </Link>
              {' '}or open an issue on{' '}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-kotauth-primary hover:text-kotauth-primary-light"
              >
                GitHub
              </a>.
            </p>
          </Section>
        </motion.div>
      </div>
    </div>
  );
}
