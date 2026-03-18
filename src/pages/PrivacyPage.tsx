import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LAST_UPDATED = 'March 2026';
const GITHUB_URL = 'https://github.com/InumanSoul/kotauth';

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

export function PrivacyPage() {
  return (
    <div className="pt-[72px]">
      <div className="section-container py-20 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Header */}
          <span className="eyebrow mb-4 block">Legal</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-kotauth-text-primary font-mono mb-3">
            Privacy Policy
          </h1>
          <p className="text-kotauth-text-muted font-mono text-sm mb-12">
            Last updated: {LAST_UPDATED}
          </p>

          {/* Content */}
          <Section title="What this policy covers">
            <p>
              This policy applies to <strong className="text-kotauth-text-primary">kotauth.com</strong> — the marketing and documentation website for the Kotauth open source project. It does not apply to self-hosted Kotauth instances you deploy yourself; those are governed by your own configuration and applicable laws.
            </p>
          </Section>

          <Section title="What we collect and why">
            <p>
              <strong className="text-kotauth-text-primary">Analytics (Google Analytics 4).</strong> This website uses Google Analytics 4 to understand how visitors find and use the site. GA4 automatically collects your IP address, browser type, device type, operating system, referring URL, pages visited, and approximate geographic location (country/city level). This data is processed by Google and subject to{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-kotauth-primary hover:text-kotauth-primary-light">
                Google's Privacy Policy
              </a>.
            </p>
            <p>
              <strong className="text-kotauth-text-primary">Contact form.</strong> If you use the contact form, your name, email address, and message are composed locally in your browser and sent via your mail client directly. We do not operate a form submission backend — nothing is stored on our servers.
            </p>
            <p>
              We do not collect passwords, payment information, or account credentials on this website. There are no user accounts on kotauth.com.
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              Google Analytics sets first-party cookies (<code className="text-kotauth-primary bg-kotauth-surface-1 px-1.5 py-0.5 text-xs">_ga</code>, <code className="text-kotauth-primary bg-kotauth-surface-1 px-1.5 py-0.5 text-xs">_ga_*</code>) to distinguish visitors and track sessions. These cookies persist for up to 2 years. We do not set any other cookies on this website.
            </p>
          </Section>

          <Section title="Legal basis for processing (GDPR)">
            <p>
              If you are in the European Economic Area (EEA), we process analytics data under <strong className="text-kotauth-text-primary">Legitimate Interests</strong> (Article 6(1)(f) GDPR) — specifically the interest of understanding how the site is used to improve it. If you object to this processing, you can opt out by installing the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-kotauth-primary hover:text-kotauth-primary-light">
                Google Analytics Opt-out Browser Add-on
              </a>
              {' '}or using a content blocker that blocks analytics trackers.
            </p>
          </Section>

          <Section title="Data retention">
            <p>
              Google Analytics retains event-level data for 14 months by default, then aggregates it. We do not retain any personal data independently of Google Analytics.
            </p>
          </Section>

          <Section title="Third parties">
            <p>
              We use Google Analytics (Google LLC, USA). Google is certified under the EU-U.S. Data Privacy Framework. We do not sell data to any third parties, nor do we use data for advertising purposes.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              Depending on your jurisdiction, you may have the right to access, correct, or delete data held about you, or to object to processing. Because we process analytics data through Google, requests related to that data should be directed to Google. For any other inquiry, contact us via the{' '}
              <Link to="/contact" className="text-kotauth-primary hover:text-kotauth-primary-light">contact page</Link>.
            </p>
          </Section>

          <Section title="The Kotauth software itself">
            <p>
              Kotauth is open source software licensed under the MIT License. When you self-host Kotauth, you become the data controller for the identity data your instance processes. This privacy policy does not govern that — you are responsible for your own compliance.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy as the website evolves. The "Last updated" date at the top of this page will reflect any changes. We will not make material changes without updating that date.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about this policy? Reach us via the{' '}
              <Link to="/contact" className="text-kotauth-primary hover:text-kotauth-primary-light">contact page</Link>
              {' '}or open an issue on{' '}
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-kotauth-primary hover:text-kotauth-primary-light">
                GitHub
              </a>.
            </p>
          </Section>
        </motion.div>
      </div>
    </div>
  );
}
