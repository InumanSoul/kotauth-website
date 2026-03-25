import { ContactSection } from '@/sections/ContactSection';
import { PageSEO } from '@/components/PageSEO';

export function ContactPage() {
  return (
    <div className="pt-[72px]">
      <PageSEO
        title="Contact — Kotauth"
        description="Get in touch with the Kotauth team. Report bugs on GitHub Issues, join the community on GitHub Discussions, or reach out directly for integration help and partnership inquiries."
        path="/contact"
      />
      <ContactSection />
    </div>
  );
}
