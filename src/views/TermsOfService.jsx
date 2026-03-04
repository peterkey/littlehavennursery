import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const ContractIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>;
const CheckIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><circle cx="12" cy="12" r="10" /><polyline points="9 12 12 15 16 10" /></svg>;
const HeartIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>;
const XCircleIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>;
const EnvelopeIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
const PhoneIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.34 12 19.79 19.79 0 011.27 3.45 2 2 0 013.27 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.4a16 16 0 006.54 6.54l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>;
const InfoIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>;

const DOT_BG = "radial-gradient(circle at 2px 2px, white 1px, transparent 0)";
const lastUpdated = "2024-01-15";

const keyTerms = [
  {
    icon: ContractIcon,
    color: "bg-primary-50 text-primary-600",
    title: "Service Agreement",
    description: "The terms governing how we provide childcare services to your family."
  },
  {
    icon: CheckIcon,
    color: "bg-teal-50 text-teal-600",
    title: "Parent Responsibilities",
    description: "Obligations and expectations for parents and guardians."
  },
  {
    icon: HeartIcon,
    color: "bg-primary-50 text-primary-500",
    title: "Our Commitments",
    description: "What we promise to deliver — quality care, transparency, and partnership."
  },
  {
    icon: XCircleIcon,
    color: "bg-teal-50 text-teal-500",
    title: "Termination",
    description: "The conditions under which the service agreement may be ended by either party."
  }
];

const parentResponsibilities = [
  "Ensure children arrive on time and are collected promptly at the agreed time",
  "Provide accurate medical, dietary, and emergency contact information",
  "Notify us promptly of any changes to contact details or medical needs",
  "Ensure children are dressed appropriately for outdoor and creative activities",
  "Support our policies and procedures and treat all staff with respect",
  "Pay fees on time and in accordance with the agreed fee structure",
  "Attend parent review sessions and respond to communications in a timely manner"
];

const nurseryObligations = [
  "Provide a safe, nurturing, and intellectually stimulating environment",
  "Deliver the Foundation Phase curriculum aligned with CIW requirements",
  "Maintain appropriate staff-to-child ratios at all times",
  "Provide regular updates on your child's development and progress",
  "Ensure all practitioners are suitably qualified and DBS-checked",
  "Maintain appropriate insurance and health and safety standards",
  "Handle all complaints and concerns promptly and professionally"
];

const feeItems = [
  { label: "Fee Schedule", detail: "Fees are reviewed annually and may be subject to change with 30 days' written notice." },
  { label: "Payment Terms", detail: "Fees are due monthly in advance, typically on the 1st of each month." },
  { label: "Late Payments", detail: "Late payments may incur an administrative charge and could result in a suspension of the place." },
  { label: "Welsh Funding", detail: "We accept Welsh Government childcare funding including the 30-hour childcare offer where eligible." }
];

const healthItems = [
  "Regular risk assessments and safety inspections of all areas",
  "Practitioners trained in paediatric first aid and emergency procedures",
  "Robust infection control and hygiene practices",
  "Secure premises with controlled access for authorised persons only",
  "Practised emergency evacuation procedures"
];

const complaintSteps = [
  { n: "01", title: "Informal Discussion", detail: "Speak directly with the nursery manager to raise the issue and seek a resolution." },
  { n: "02", title: "Formal Complaint", detail: "Submit a written complaint to nursery management if the initial discussion does not resolve the matter." },
  { n: "03", title: "Investigation", detail: "We will conduct a thorough investigation and provide a written response within 28 days." },
  { n: "04", title: "External Review", detail: "If the matter remains unresolved, you may refer it to CIW (Care Inspectorate Wales) or other appropriate bodies." }
];

const ProseDot = () => (
  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
);

const SectionEyebrow = ({ label }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
    <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">{label}</span>
  </div>
);

const TermsOfService = memo(() => (
  <>
    <SEO
      title="Terms of Service"
      description="Read our terms of service for Little Haven Nursery. Understand the agreement between parents and the nursery, including responsibilities, policies, and procedures."
      keywords={['terms of service', 'nursery agreement', 'parent responsibilities', 'childcare terms', 'nursery policies']}
      canonicalUrl="/terms-of-service"
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
            Terms of{" "}
            <em className="not-italic text-primary-200">Service</em>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mb-8">
            Understanding the agreement between families and Little Haven Nursery —
            our commitments to you, and what we ask in return.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
            <ContractIcon className="w-4 h-4 text-primary-300" />
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
          <SectionEyebrow label="Overview" />
          <h2 className="font-display font-semibold text-neutral-900 mb-6" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            Introduction
          </h2>
          <div className="space-y-4 mb-8">
            <p className="font-sans text-neutral-600 leading-relaxed text-lg">
              These Terms of Service govern the provision of childcare services by Little Haven Nursery
              to parents and guardians and their children. By enrolling your child, you agree to be
              bound by these terms — please read them carefully and contact us if you have any questions
              before proceeding.
            </p>
            <p className="font-sans text-neutral-600 leading-relaxed text-lg">
              We believe the best childcare is built on trust and transparency. These terms are designed
              to be clear and fair, setting out mutual expectations so every family can feel confident
              and secure.
            </p>
          </div>

          {/* Notice banner */}
          <div className="flex items-start gap-4 bg-primary-50 border border-primary-100 rounded-2xl p-5 sm:p-6">
            <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
              <InfoIcon className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <p className="font-sans font-semibold text-primary-800 text-sm mb-1">Legally Binding Agreement</p>
              <p className="font-sans text-primary-700/80 text-sm leading-relaxed">
                By enrolling your child at Little Haven Nursery, you acknowledge that you have read,
                understood, and agree to these terms and conditions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Key Terms Overview */}
    <section className="py-16 sm:py-24" style={{ background: "#faf8f4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <SectionEyebrow label="At a Glance" />
          <h2 className="font-display font-semibold text-neutral-900 leading-tight" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Key Terms Overview
          </h2>
          <p className="font-sans text-neutral-500 text-lg leading-relaxed mt-3">
            These terms cover the essential aspects of our service agreement and our mutual responsibilities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyTerms.map((term, i) => (
            <motion.div
              key={term.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-6"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${term.color}`}>
                <term.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-neutral-900 text-lg mb-2">{term.title}</h3>
              <p className="font-sans text-neutral-500 text-sm leading-relaxed">{term.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Service Description */}
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionEyebrow label="What We Provide" />
          <h2 className="font-display font-semibold text-neutral-900 mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            Service Description
          </h2>
          <p className="font-sans text-neutral-600 leading-relaxed mb-6">
            Little Haven Nursery provides early years education and childcare for children aged 3 months
            to 5 years. Our services include:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Full-time and part-time childcare options tailored to your family's needs",
              "Early years learning based on the Foundation Phase curriculum and Froebelian principles",
              "Nutritious meals and snacks prepared on-site",
              "Regular progress updates and parent consultation sessions",
              "Safe, stimulating indoor and outdoor learning environments"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <ProseDot />
                <span className="font-sans text-neutral-600 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-sans text-neutral-500 text-sm leading-relaxed">
            Services are provided during our published opening hours, excluding bank holidays and
            scheduled closure periods. We will give as much notice as possible of any planned closures.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Parent Responsibilities + Nursery Obligations */}
    <section className="py-16 sm:py-24" style={{ background: "#faf8f4" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionEyebrow label="Families" />
            <h2 className="font-display font-semibold text-neutral-900 mb-4" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.875rem)" }}>
              Parent Responsibilities
            </h2>
            <p className="font-sans text-neutral-500 text-sm leading-relaxed mb-6">
              As a parent or guardian, you have certain responsibilities to ensure the smooth
              running of our services and the wellbeing of your child:
            </p>
            <ul className="space-y-3">
              {parentResponsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ProseDot />
                  <span className="font-sans text-neutral-600 text-sm leading-relaxed">{item}</span>
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
            <SectionEyebrow label="Little Haven" />
            <h2 className="font-display font-semibold text-neutral-900 mb-4" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.875rem)" }}>
              Our Obligations
            </h2>
            <p className="font-sans text-neutral-500 text-sm leading-relaxed mb-6">
              We are committed to delivering high-quality, Froebelian childcare and will
              fulfil the following obligations to every family:
            </p>
            <ul className="space-y-3">
              {nurseryObligations.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ProseDot />
                  <span className="font-sans text-neutral-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>

    {/* Fees and Payment */}
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionEyebrow label="Payments" />
          <h2 className="font-display font-semibold text-neutral-900 mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            Fees and Payment
          </h2>
          <p className="font-sans text-neutral-600 leading-relaxed mb-8">
            Our fee structure and payment terms are designed to be clear and straightforward.
            For full fee details and Welsh Government funding eligibility, please visit our{" "}
            <Link to="/fees" className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
              Fees &amp; Funding page
            </Link>.
          </p>
          <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 divide-y divide-neutral-100">
            {feeItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 sm:p-6">
                <span className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                </span>
                <div>
                  <span className="font-sans font-semibold text-neutral-800 text-sm">{item.label}: </span>
                  <span className="font-sans text-neutral-500 text-sm leading-relaxed">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Health and Safety */}
    <section className="py-16 sm:py-24" style={{ background: "#faf8f4" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionEyebrow label="Safety" />
          <h2 className="font-display font-semibold text-neutral-900 mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            Health and Safety
          </h2>
          <p className="font-sans text-neutral-600 leading-relaxed mb-8">
            The health and safety of every child, practitioner, and visitor is our highest priority.
            We maintain rigorous standards including:
          </p>
          <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-6 sm:p-8">
            <ul className="space-y-3">
              {healthItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  </span>
                  <span className="font-sans text-neutral-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="font-sans text-neutral-500 text-sm leading-relaxed mt-6">
            Parents must inform us immediately of any health concerns, allergies, or medical conditions
            that may affect their child — even if you have told us before, please remind us of any changes.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Termination and Withdrawal */}
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionEyebrow label="Endings" />
          <h2 className="font-display font-semibold text-neutral-900 mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            Termination and Withdrawal
          </h2>
          <p className="font-sans text-neutral-600 leading-relaxed mb-8">
            Either party may end the service agreement. We will always work with families to resolve
            issues before considering termination.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-2 h-2 rounded-full bg-primary-400 flex-shrink-0" />
                <h3 className="font-display font-semibold text-neutral-900 text-lg">Parent Withdrawal</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Written notice of at least 4 weeks is required",
                  "Fees are payable in full for the entire notice period",
                  "All outstanding fees must be settled before the final day"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ProseDot />
                    <span className="font-sans text-neutral-500 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-2 h-2 rounded-full bg-teal-400 flex-shrink-0" />
                <h3 className="font-display font-semibold text-neutral-900 text-lg">Nursery Termination</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "A serious or repeated breach of our terms or policies",
                  "Non-payment of fees",
                  "Behaviour that compromises the safety of children or staff"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ProseDot />
                    <span className="font-sans text-neutral-500 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Complaints and Disputes */}
    <section className="py-16 sm:py-24" style={{ background: "#faf8f4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <SectionEyebrow label="Complaints" />
          <h2 className="font-display font-semibold text-neutral-900 leading-tight" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Complaints &amp; Disputes
          </h2>
          <p className="font-sans text-neutral-500 text-lg leading-relaxed mt-3">
            We are committed to resolving any concerns promptly and fairly. Open communication is the
            foundation of everything we do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {complaintSteps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-6 relative overflow-hidden"
            >
              <div className="font-display font-semibold text-6xl text-primary-100 leading-none mb-4 select-none">
                {step.n}
              </div>
              <h3 className="font-display font-semibold text-neutral-900 text-xl mb-2">{step.title}</h3>
              <p className="font-sans text-neutral-500 text-sm leading-relaxed">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact */}
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionEyebrow label="Contact" />
          <h2 className="font-display font-semibold text-neutral-900 mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            Questions About These Terms?
          </h2>
          <p className="font-sans text-neutral-600 leading-relaxed mb-8">
            If you need clarification on any aspect of these terms before or after enrollment, our
            management team is happy to help.
          </p>
          <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-6 sm:p-8 max-w-md space-y-4">
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
              We aim to respond to all enquiries within 24 hours on working days.
            </p>
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
            Ready to Join Our Family?
          </h2>
          <p className="font-sans text-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            If you&apos;re happy with our terms and would like to enrol your child, we&apos;d love to
            welcome you to Little Haven. Feel free to get in touch first — we&apos;re always happy to chat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold font-sans rounded-full shadow-medium hover:bg-primary-50 transition-all duration-200"
            >
              Start Enrolment
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold font-sans rounded-full hover:bg-white/10 transition-all duration-200"
            >
              Ask a Question
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </>
));

TermsOfService.displayName = 'TermsOfService';
export default TermsOfService;
