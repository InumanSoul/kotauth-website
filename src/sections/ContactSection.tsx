import { useState } from 'react';
import { Github, MessageCircle, Bug, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GITHUB_URL = 'https://github.com/InumanSoul/kotauth';
const ISSUES_URL = `${GITHUB_URL}/issues`;
const DISCUSSIONS_URL = `${GITHUB_URL}/discussions`;

const channels = [
  {
    icon: Bug,
    title: 'Bug Reports',
    description: 'Found something broken? Open a GitHub issue with reproduction steps and we\'ll triage it.',
    cta: 'Open an Issue',
    href: ISSUES_URL,
  },
  {
    icon: MessageCircle,
    title: 'Community',
    description: 'Questions, ideas, and general discussion. GitHub Discussions is where the community lives.',
    cta: 'Join Discussions',
    href: DISCUSSIONS_URL,
  },
  {
    icon: Github,
    title: 'Contribute',
    description: 'Want to add a feature or improve the codebase? Start by reading the contribution guide.',
    cta: 'View Repo',
    href: GITHUB_URL,
  },
];

type FormState = 'idle' | 'sending' | 'sent';

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formState, setFormState] = useState<FormState>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');

    const mailtoSubject = encodeURIComponent(`[Kotauth] ${form.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const mailtoHref = `mailto:inumansoul@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      window.location.href = mailtoHref;
      setFormState('sent');
    }, 600);
  };

  const isFormValid = form.name.trim() && form.email.trim() && form.subject && form.message.trim();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-kotauth-bg-secondary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kotauth-primary/40 to-transparent" />

      <div className="section-container">
        <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow mb-4 block">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-kotauth-text-primary leading-tight font-mono mb-4">
            Get in touch
          </h2>
          <p className="text-kotauth-text-secondary text-lg">
            Kotauth is an open source project. Most conversations happen in public — that's intentional. Pick the right channel below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col gap-6">
            {channels.map((channel, index) => (
              <a
                key={channel.title}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
                data-reveal-delay={index * 100}
                className="group flex gap-5 p-6 bg-kotauth-surface-1 border border-kotauth-surface-2 hover:border-kotauth-primary/50 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-11 h-11 bg-kotauth-primary/10 flex items-center justify-center group-hover:bg-kotauth-primary/20 transition-colors">
                  <channel.icon className="w-5 h-5 text-kotauth-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-kotauth-text-primary font-mono mb-1 group-hover:text-kotauth-primary-light transition-colors">
                    {channel.title}
                  </h3>
                  <p className="text-sm text-kotauth-text-tertiary leading-relaxed mb-3">
                    {channel.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-kotauth-primary group-hover:text-kotauth-primary-light transition-colors">
                    {channel.cta}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </a>
            ))}

            <div
              data-reveal
              data-reveal-delay={300}
              className="p-5 border border-kotauth-surface-2 bg-kotauth-bg-primary/50"
            >
              <p className="text-xs text-kotauth-text-muted font-mono leading-relaxed">
                <span className="text-kotauth-text-tertiary">Note:</span> This is an open source project maintained in spare time. Response times vary. For security disclosures, use the contact form with subject "Security".
              </p>
            </div>
          </div>

          <div data-reveal data-reveal-delay={150}>
            {formState === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-kotauth-surface-1 border border-kotauth-surface-2 gap-4">
                <div className="w-14 h-14 bg-kotauth-success/10 flex items-center justify-center mb-2">
                  <CheckCircle className="w-7 h-7 text-kotauth-success" />
                </div>
                <h3 className="text-xl font-semibold text-kotauth-text-primary font-mono">
                  Message ready
                </h3>
                <p className="text-kotauth-text-secondary text-sm max-w-xs">
                  Your mail client should have opened with your message pre-filled. If it didn't, reach out directly on GitHub Discussions.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 border-kotauth-surface-2 text-kotauth-text-secondary hover:bg-kotauth-surface-2 font-mono"
                  onClick={() => { setFormState('idle'); setForm({ name: '', email: '', subject: '', message: '' }); }}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-kotauth-surface-1 border border-kotauth-surface-2 p-8 flex flex-col gap-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-mono text-kotauth-text-tertiary uppercase tracking-wider">
                      Name <span className="text-kotauth-primary">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-kotauth-bg-primary border border-kotauth-surface-2 px-4 py-2.5 text-sm text-kotauth-text-primary placeholder:text-kotauth-text-muted font-mono focus:outline-none focus:border-kotauth-primary transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-mono text-kotauth-text-tertiary uppercase tracking-wider">
                      Email <span className="text-kotauth-primary">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-kotauth-bg-primary border border-kotauth-surface-2 px-4 py-2.5 text-sm text-kotauth-text-primary placeholder:text-kotauth-text-muted font-mono focus:outline-none focus:border-kotauth-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-mono text-kotauth-text-tertiary uppercase tracking-wider">
                    Subject <span className="text-kotauth-primary">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-kotauth-bg-primary border border-kotauth-surface-2 px-4 py-2.5 text-sm text-kotauth-text-primary font-mono focus:outline-none focus:border-kotauth-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a topic...</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Integration Help">Integration Help</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Security">Security</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-mono text-kotauth-text-tertiary uppercase tracking-wider">
                    Message <span className="text-kotauth-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your question or request in detail..."
                    className="w-full bg-kotauth-bg-primary border border-kotauth-surface-2 px-4 py-2.5 text-sm text-kotauth-text-primary placeholder:text-kotauth-text-muted font-mono focus:outline-none focus:border-kotauth-primary transition-colors resize-none leading-relaxed"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid || formState === 'sending'}
                  className="w-full bg-kotauth-primary hover:bg-kotauth-primary-light text-white font-mono h-11 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  {formState === 'sending' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Opening mail client...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>

                <p className="text-xs text-kotauth-text-muted font-mono text-center">
                  This will open your mail client. For urgent issues, use{' '}
                  <a href={DISCUSSIONS_URL} target="_blank" rel="noopener noreferrer" className="text-kotauth-primary hover:text-kotauth-primary-light underline underline-offset-2">
                    GitHub Discussions
                  </a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
