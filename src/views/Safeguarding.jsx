import { memo } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO/SEO';

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const ShieldIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
const PhoneIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.34 12 19.79 19.79 0 011.27 3.45 2 2 0 013.27 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.4a16 16 0 006.54 6.54l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>;
const EnvelopeIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
const WarningIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>;
const EyeIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>;
const UsersIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>;
const ClipboardIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg>;

const DOT_BG = "radial-gradient(circle at 2px 2px, white 1px, transparent 0)";

const principles = [
  {
    icon: <ShieldIcon className="w-6 h-6" />,
    color: "bg-primary-50 text-primary-600",
    title: "Prevention",
    description: "We work to prevent harm by creating a safe environment and identifying risks early before they affect children in our care."
  },
  {
    icon: <EyeIcon className="w-6 h-6" />,
    color: "bg-teal-50 text-teal-600",
    title: "Vigilance",
    description: "Our practitioners are trained to recognise signs of abuse and neglect, and know exactly how to respond appropriately."
  },
  {
    icon: <UsersIcon className="w-6 h-6" />,
    color: "bg-primary-50 text-primary-500",
    title: "Partnership",
    description: "We work closely with parents, carers, and other professionals to protect children's welfare as a united community."
  },
  {
    icon: <ClipboardIcon className="w-6 h-6" />,
    color: "bg-teal-50 text-teal-500",
    title: "Documentation",
    description: "All concerns are properly recorded and reported according to statutory requirements without delay."
  }
];

const procedures = [
  { step: "01", title: "Recognise", description: "Practitioners identify signs of abuse, neglect, or harm to a child through observation and vigilance." },
  { step: "02", title: "Record", description: "An immediate written record of concerns is created with exact date, time, and descriptive details." },
  { step: "03", title: "Report", description: "Concerns are reported to the Designated Safeguarding Lead (DSL) within 24 hours on working days." },
  { step: "04", title: "Refer", description: "The DSL makes a formal referral to Children's Services if the concern warrants further investigation." }
];

const contacts = [
  {
    name: "Fiona Williams",
    role: "Designated Safeguarding Lead",
    jobTitle: "Nursery Manager",
    phone: "02920891825",
    email: "learn@littlehavennursery.co.uk"
  },
  {
    name: "Jessica Williams-Key",
    role: "Deputy Safeguarding Lead",
    jobTitle: "Deputy Manager",
    phone: "02920891825",
    email: "learn@littlehavennursery.co.uk"
  }
];

const Safeguarding = memo(() => (
  <>
    <SEO
      title="Safeguarding & Policies"
      description="Learn about our comprehensive safeguarding policies and procedures. Understand how we protect children's welfare at Little Haven Nursery."
      keywords={['safeguarding', 'child protection', 'nursery policies', 'safety procedures', 'Cardiff nursery']}
      canonicalUrl="/safeguarding"
    />

    {/* Hero */}
    <section
      className="relative overflow-hidden text-white py-20 sm:py-28"
      style={{ background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: DOT_BG, backgroundSize: "32px 32px", opacity: 0.04 }} />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(147,197,253,0.08) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-primary-300/60 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-300">Policies & Procedures</span>
          </div>
          <h1
            className="font-display font-semibold leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}
          >
            Safeguarding &{" "}
            <em className="not-italic text-primary-200">Child Protection</em>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mb-8">
            Your child&apos;s safety and wellbeing is our highest priority. We have comprehensive
            policies and procedures in place to protect every child in our care.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
            <ShieldIcon className="w-4 h-4 text-primary-300" />
            <span className="font-sans text-sm text-white/80">CIW Registered &amp; Compliant</span>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Principles */}
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
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">Our Commitment</span>
          </div>
          <h2 className="font-display font-semibold text-neutral-900 leading-tight" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Our Safeguarding Principles
          </h2>
          <p className="font-sans text-neutral-500 text-lg leading-relaxed mt-3">
            We follow the highest standards of child protection and safeguarding in everything we do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-6"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${p.color}`}>
                {p.icon}
              </div>
              <h3 className="font-display font-semibold text-neutral-900 text-lg mb-2">{p.title}</h3>
              <p className="font-sans text-neutral-500 text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Procedures */}
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
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">Step by Step</span>
          </div>
          <h2 className="font-display font-semibold text-neutral-900 leading-tight" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Safeguarding Procedures
          </h2>
          <p className="font-sans text-neutral-500 text-lg leading-relaxed mt-3">
            Clear steps our practitioners follow to protect children&apos;s welfare at every stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {procedures.map((proc, i) => (
            <motion.div
              key={proc.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-6 relative overflow-hidden"
            >
              <div className="font-display font-semibold text-6xl text-primary-100 leading-none mb-4 select-none">
                {proc.step}
              </div>
              <h3 className="font-display font-semibold text-neutral-900 text-xl mb-2">{proc.title}</h3>
              <p className="font-sans text-neutral-500 text-sm leading-relaxed">{proc.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Contacts */}
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
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">Get in Touch</span>
          </div>
          <h2 className="font-display font-semibold text-neutral-900 leading-tight" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Safeguarding Contacts
          </h2>
          <p className="font-sans text-neutral-500 text-lg leading-relaxed mt-3">
            Our designated safeguarding leads are here to help with any concerns you may have.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {contacts.map((contact, i) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShieldIcon className="w-7 h-7 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-neutral-900 text-lg leading-tight">{contact.name}</h3>
                  <p className="font-sans text-primary-600 font-semibold text-sm mt-0.5">{contact.role}</p>
                  <p className="font-sans text-neutral-400 text-xs mt-0.5">{contact.jobTitle}</p>
                </div>
              </div>
              <div className="space-y-3 border-t border-neutral-100 pt-5">
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-3 group"
                >
                  <PhoneIcon className="w-4 h-4 text-neutral-400 flex-shrink-0 group-hover:text-primary-500 transition-colors" />
                  <span className="font-sans text-sm text-neutral-600 group-hover:text-primary-600 transition-colors">{contact.phone}</span>
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 group"
                >
                  <EnvelopeIcon className="w-4 h-4 text-neutral-400 flex-shrink-0 group-hover:text-primary-500 transition-colors" />
                  <span className="font-sans text-sm text-neutral-600 group-hover:text-primary-600 transition-colors">{contact.email}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Emergency */}
    <section className="py-16 sm:py-20" style={{ background: "#faf8f4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 sm:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <WarningIcon className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h2 className="font-display font-semibold text-red-900" style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)" }}>
                  Emergency Safeguarding Concerns
                </h2>
                <p className="font-sans text-red-700/80 text-sm mt-1">For immediate concerns about a child&apos;s safety</p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <p className="font-sans text-neutral-700 leading-relaxed">
                If you have an immediate concern about a child&apos;s safety or welfare, please contact us immediately.
              </p>
              <p className="font-sans text-neutral-700 leading-relaxed">
                <strong className="text-neutral-900">For urgent concerns outside our opening hours:</strong> Contact
                the police on <strong>999</strong> or Children&apos;s Services on{" "}
                <a href="tel:02920872087" className="text-red-600 font-semibold hover:underline">
                  029 2087 2087
                </a>{" "}
                (Cardiff Council).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:02920891825"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold font-sans rounded-full hover:bg-red-700 transition-colors shadow-soft"
              >
                <PhoneIcon className="w-4 h-4" />
                Call Nursery
              </a>
              <a
                href="mailto:learn@littlehavennursery.co.uk"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-red-200 text-red-700 font-semibold font-sans rounded-full hover:bg-red-100 transition-colors"
              >
                <EnvelopeIcon className="w-4 h-4" />
                Email DSL
              </a>
            </div>
          </div>
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
            Have Questions About Our Policies?
          </h2>
          <p className="font-sans text-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            We&apos;re committed to transparency and are happy to discuss any aspect of our
            safeguarding procedures or policies with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02920891825"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold font-sans rounded-full shadow-medium hover:bg-primary-50 transition-all duration-200"
            >
              <PhoneIcon className="w-4 h-4" />
              Call Us
            </a>
            <a
              href="mailto:learn@littlehavennursery.co.uk"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold font-sans rounded-full hover:bg-white/10 transition-all duration-200"
            >
              <EnvelopeIcon className="w-4 h-4" />
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  </>
));

Safeguarding.displayName = 'Safeguarding';
export default Safeguarding;
