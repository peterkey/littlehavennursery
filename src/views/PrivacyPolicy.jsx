import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const ShieldIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
const EyeIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>;
const DatabaseIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>;
const UserCheckIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></svg>;
const EnvelopeIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
const PhoneIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.34 12 19.79 19.79 0 011.27 3.45 2 2 0 013.27 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.4a16 16 0 006.54 6.54l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>;

const DOT_BG = "radial-gradient(circle at 2px 2px, white 1px, transparent 0)";

const lastUpdated = "2024-08-10";

const dataCategories = [
  {
    title: "Personal Information",
    description: "Names, contact details, emergency contacts, and family information",
    examples: ["Child's full name", "Parent/guardian contact details", "Emergency contact information"]
  },
  {
    title: "Health & Medical",
    description: "Medical conditions, allergies, and health requirements",
    examples: ["Allergies and dietary restrictions", "Medical conditions", "Medication requirements"]
  },
  {
    title: "Educational Records",
    description: "Learning progress, observations, and development milestones",
    examples: ["EYFS progress reports", "Learning observations", "Development assessments"]
  },
  {
    title: "Attendance Records",
    description: "Daily attendance, arrival and departure times",
    examples: ["Daily attendance logs", "Arrival and departure times", "Absence records"]
  }
];

const dataRights = [
  { title: "Right to Access", description: "Request a copy of your personal data held by us at any time.", icon: EyeIcon, color: "bg-primary-50 text-primary-600" },
  { title: "Right to Rectification", description: "Ask us to correct inaccurate or incomplete information.", icon: UserCheckIcon, color: "bg-teal-50 text-teal-600" },
  { title: "Right to Erasure", description: "Request deletion of your personal data where applicable.", icon: DatabaseIcon, color: "bg-primary-50 text-primary-500" },
  { title: "Right to Object", description: "Object to certain types of processing of your data.", icon: ShieldIcon, color: "bg-teal-50 text-teal-500" }
];

const useItems = [
  { label: "Providing childcare services", detail: "To ensure your child receives appropriate care and education tailored to their needs." },
  { label: "Health and safety", detail: "To maintain a safe environment and respond swiftly to any medical needs." },
  { label: "Communication", detail: "To keep you informed about your child's progress and nursery activities." },
  { label: "Legal obligations", detail: "To comply with CIW requirements and other regulatory obligations." },
  { label: "Emergency situations", detail: "To contact you or emergency services when necessary." }
];

const sharingItems = [
  { label: "With your consent", detail: "When you have given us explicit permission to share specific information." },
  { label: "Legal requirements", detail: "When required by law or regulatory bodies (e.g., CIW, local authorities)." },
  { label: "Emergency situations", detail: "When necessary to protect your child's health and safety." },
  { label: "Service providers", detail: "With trusted third parties who help us provide our services (e.g., IT support, insurance)." }
];

const securityItems = [
  "Secure storage systems with encryption",
  "Access controls and authentication procedures",
  "Regular security assessments and updates",
  "Staff training on data protection and security",
  "Incident response procedures"
];

const retentionItems = [
  { label: "Child records", detail: "Until the child reaches 25 years of age (CIW requirement)" },
  { label: "Financial records", detail: "For 7 years (tax and accounting requirements)" },
  { label: "Incident reports", detail: "For 3 years after the incident" },
  { label: "Marketing communications", detail: "Until you unsubscribe or withdraw consent" }
];

const ProseDot = () => (
  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
);

const PrivacyPolicy = memo(() => (
  <>
    <SEO
      title="Privacy Policy"
      description="Learn how Little Haven Nursery protects your privacy and handles personal information. Our comprehensive privacy policy ensures your data is secure and used responsibly."
      keywords={['privacy policy', 'data protection', 'GDPR', 'personal information', 'nursery privacy']}
      canonicalUrl="/privacy-policy"
    />

    {/* Hero */}
    <section
      className="relative overflow-hidden text-white py-20 sm:py-28"
      style={{ background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: DOT_BG, backgroundSize: "32px 32px", opacity: 0.04 }} />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(147,197,253,0.07) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-primary-300/60 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-300">Legal</span>
          </div>
          <h1
            className="font-display font-semibold leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}
          >
            Privacy{" "}
            <em className="not-italic text-primary-200">Policy</em>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mb-8">
            Your privacy matters to us. Learn how we collect, use, and protect your personal
            information in accordance with GDPR and UK data protection law.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
            <ShieldIcon className="w-4 h-4 text-primary-300" />
            <span className="font-sans text-sm text-white/80">Last updated: {lastUpdated}</span>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Introduction */}
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">Overview</span>
          </div>
          <h2 className="font-display font-semibold text-neutral-900 mb-6" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            Introduction
          </h2>
          <div className="space-y-4">
            <p className="font-sans text-neutral-600 leading-relaxed text-lg">
              Little Haven Nursery is committed to protecting your privacy and ensuring the security of your
              personal information. This privacy policy explains how we collect, use, store, and protect your
              data in accordance with the General Data Protection Regulation (GDPR) and other applicable
              data protection laws.
            </p>
            <p className="font-sans text-neutral-600 leading-relaxed text-lg">
              We are the data controller for the personal information we collect about you and your child.
              This means we are responsible for deciding how we use your personal information and ensuring
              it is handled lawfully and securely.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Data We Collect */}
    <section className="py-16 sm:py-24" style={{ background: "#faf8f4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">What We Hold</span>
          </div>
          <h2 className="font-display font-semibold text-neutral-900 leading-tight" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Data We Collect
          </h2>
          <p className="font-sans text-neutral-500 text-lg leading-relaxed mt-3">
            We collect various types of personal information to provide safe and effective childcare services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {dataCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="w-2 h-2 rounded-full bg-primary-400 flex-shrink-0" />
                <h3 className="font-display font-semibold text-neutral-900 text-xl">{cat.title}</h3>
              </div>
              <p className="font-sans text-neutral-500 text-sm leading-relaxed mb-4 ml-5">{cat.description}</p>
              <ul className="space-y-2 ml-5">
                {cat.examples.map((ex, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-neutral-300 mt-2.5 flex-shrink-0" />
                    <span className="font-sans text-neutral-600 text-sm">{ex}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How We Use / Data Sharing */}
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">Usage</span>
            </div>
            <h2 className="font-display font-semibold text-neutral-900 mb-6" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.875rem)" }}>
              How We Use Your Data
            </h2>
            <ul className="space-y-4">
              {useItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ProseDot />
                  <div>
                    <span className="font-sans font-semibold text-neutral-800 text-sm">{item.label}: </span>
                    <span className="font-sans text-neutral-500 text-sm leading-relaxed">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">Sharing</span>
            </div>
            <h2 className="font-display font-semibold text-neutral-900 mb-4" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.875rem)" }}>
              Data Sharing
            </h2>
            <p className="font-sans text-neutral-500 text-sm leading-relaxed mb-5">
              We do not sell, trade, or rent your personal information to third parties. We may share your
              data only in the following circumstances:
            </p>
            <ul className="space-y-4">
              {sharingItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ProseDot />
                  <div>
                    <span className="font-sans font-semibold text-neutral-800 text-sm">{item.label}: </span>
                    <span className="font-sans text-neutral-500 text-sm leading-relaxed">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Data Security */}
    <section className="py-16 sm:py-24" style={{ background: "#faf8f4" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">Security</span>
          </div>
          <h2 className="font-display font-semibold text-neutral-900 mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            Data Security
          </h2>
          <p className="font-sans text-neutral-600 leading-relaxed mb-8">
            We implement appropriate technical and organisational measures to protect your personal
            information against unauthorised access, alteration, disclosure, or destruction.
          </p>
          <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-6 sm:p-8">
            <ul className="space-y-3">
              {securityItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  </span>
                  <span className="font-sans text-neutral-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Your Rights */}
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">GDPR Rights</span>
          </div>
          <h2 className="font-display font-semibold text-neutral-900 leading-tight" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Your Rights
          </h2>
          <p className="font-sans text-neutral-500 text-lg leading-relaxed mt-3">
            Under data protection law, you have several rights regarding your personal information.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataRights.map((right, i) => (
            <motion.div
              key={right.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-6"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${right.color}`}>
                <right.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-neutral-900 text-lg mb-2">{right.title}</h3>
              <p className="font-sans text-neutral-500 text-sm leading-relaxed">{right.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Data Retention + Contact */}
    <section className="py-16 sm:py-24" style={{ background: "#faf8f4" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">Retention</span>
            </div>
            <h2 className="font-display font-semibold text-neutral-900 mb-4" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.875rem)" }}>
              Data Retention
            </h2>
            <p className="font-sans text-neutral-500 text-sm leading-relaxed mb-6">
              We retain your personal information only for as long as necessary to fulfil the purposes
              for which it was collected, including any legal or regulatory requirements.
            </p>
            <ul className="space-y-4">
              {retentionItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ProseDot />
                  <div>
                    <span className="font-sans font-semibold text-neutral-800 text-sm">{item.label}: </span>
                    <span className="font-sans text-neutral-500 text-sm leading-relaxed">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">Contact</span>
            </div>
            <h2 className="font-display font-semibold text-neutral-900 mb-4" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.875rem)" }}>
              Contact Us
            </h2>
            <p className="font-sans text-neutral-500 text-sm leading-relaxed mb-6">
              If you have questions about this privacy policy or how we handle your personal information,
              please contact our Data Protection Officer:
            </p>
            <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-6 space-y-4">
              <a
                href="mailto:learn@littlehavennursery.co.uk"
                className="flex items-center gap-3 group"
              >
                <EnvelopeIcon className="w-4 h-4 text-neutral-400 flex-shrink-0 group-hover:text-primary-500 transition-colors" />
                <span className="font-sans text-sm text-neutral-600 group-hover:text-primary-600 transition-colors">
                  learn@littlehavennursery.co.uk
                </span>
              </a>
              <a
                href="tel:02920891825"
                className="flex items-center gap-3 group"
              >
                <PhoneIcon className="w-4 h-4 text-neutral-400 flex-shrink-0 group-hover:text-primary-500 transition-colors" />
                <span className="font-sans text-sm text-neutral-600 group-hover:text-primary-600 transition-colors">
                  02920 891825
                </span>
              </a>
              <p className="font-sans text-xs text-neutral-400 pt-2 border-t border-neutral-100">
                We aim to respond to all privacy-related enquiries within 30 days on working days.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    {/* Policy Updates */}
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">Updates</span>
          </div>
          <h2 className="font-display font-semibold text-neutral-900 mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            Updates to This Policy
          </h2>
          <p className="font-sans text-neutral-600 leading-relaxed mb-5">
            We may update this privacy policy from time to time to reflect changes in our practices or for
            other operational, legal, or regulatory reasons. When we make changes, we will:
          </p>
          <ul className="space-y-3">
            {[
              "Update the \"Last updated\" date at the top of this policy",
              "Notify you of significant changes via email or through our website",
              "Provide you with an opportunity to review the changes before they take effect"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <ProseDot />
                <span className="font-sans text-neutral-600 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section
      className="relative overflow-hidden text-white py-20"
      style={{ background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: DOT_BG, backgroundSize: "32px 32px", opacity: 0.04 }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-4">
            Have Questions?
          </h2>
          <p className="font-sans text-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            If you need clarification on any aspect of our privacy policy or have concerns about how we
            handle your data, please don&apos;t hesitate to get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:learn@littlehavennursery.co.uk"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold font-sans rounded-full shadow-medium hover:bg-primary-50 transition-all duration-200"
            >
              <EnvelopeIcon className="w-4 h-4" />
              Email Privacy Officer
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold font-sans rounded-full hover:bg-white/10 transition-all duration-200"
            >
              General Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </>
));

PrivacyPolicy.displayName = 'PrivacyPolicy';
export default PrivacyPolicy;
