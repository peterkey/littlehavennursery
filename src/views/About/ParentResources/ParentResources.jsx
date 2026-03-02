import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const FAQS = [
  {
    question: "What are your opening hours?",
    answer: "We're open Monday to Friday from 7:30 AM to 5:30 PM. We offer flexible half-day and full-day sessions to suit a range of working patterns.",
  },
  {
    question: "What age groups do you accept?",
    answer: "We welcome children from 6 weeks to 5 years old across three dedicated rooms: Baby Room (6 weeks–2 years), Toddler Room (2–3 years), and Kindergarten (3–5 years). Each room is designed for its age group.",
  },
  {
    question: "Do you provide meals?",
    answer: "Yes — all meals are prepared fresh each day by our in-house nursery cook. We provide breakfast, morning snack, lunch, afternoon snack, and tea. We cater for all dietary requirements, allergies, and weaning plans.",
  },
  {
    question: "What is your staff-to-child ratio?",
    answer: "We maintain ratios that exceed minimum requirements: 1:3 in the Baby Room, 1:4 in the Toddler Room, and 1:8 in Kindergarten. These ensure every child receives the attention they deserve.",
  },
  {
    question: "Do you offer funded places?",
    answer: "Yes. We're registered for Welsh Government funded childcare including the Foundation Phase (10 hours per week for 3–4 year olds) and the Childcare Offer for Wales (up to 30 hours for eligible working families). We also accept Tax-Free Childcare and Universal Credit.",
  },
  {
    question: "How do I arrange a visit?",
    answer: "Simply get in touch by phone, email, or through our online booking form. We'd love to show you around and answer any questions you have in person — no obligation, just a warm welcome.",
  },
];

const POLICIES = [
  {
    title: "Parent Handbook",
    description: "A comprehensive guide covering daily routines, settling-in processes, and all key nursery policies and procedures.",
    href: "/documents/parent-handbook.pdf",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Emergency Procedures",
    description: "Detailed information about our emergency procedures, including fire evacuation, medical emergencies, and safeguarding protocols.",
    href: "/documents/emergency-procedures.pdf",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
  },
  {
    title: "Illness Policy",
    description: "Our guidelines for managing illness and infection control — helping us keep all children and practitioners safe and healthy.",
    href: "/documents/illness-policy.pdf",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

/* ── FAQItem ─────────────────────────────────────────────────────── */
const FAQItem = ({ faq, isOpen, onToggle, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.06, ease }}
    className="border-b border-neutral-100 last:border-0"
  >
    <button
      onClick={onToggle}
      className="w-full py-5 flex items-center justify-between text-left gap-4 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-1 rounded-sm"
      aria-expanded={isOpen}
    >
      <span className="font-sans text-base font-semibold text-neutral-800 leading-snug">{faq.question}</span>
      <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-neutral-200 flex items-center justify-center transition-all duration-200 ${isOpen ? "bg-primary-50 border-primary-200" : ""}`}>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180 text-primary-600" : "text-neutral-400"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease }}
          className="overflow-hidden"
        >
          <p className="font-sans text-sm text-neutral-600 leading-relaxed pb-5">{faq.answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

/* ── ParentResources page ────────────────────────────────────────── */
const ParentResources = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="min-h-screen" style={{ background: "#faf8f4" }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "380px",
          background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(125,178,255,0.12) 0%, transparent 70%)",
          }}
        />

        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-14"
          style={{ minHeight: "380px", paddingTop: "7rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <Link
                to="/about"
                className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 hover:text-white/60 transition-colors"
                aria-label="Back to About Us"
              >
                ← About Us
              </Link>
            </div>
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans text-xs font-semibold bg-white/10 border border-white/15 text-white/80">
                <span className="w-1.5 h-1.5 bg-teal-300 rounded-full" aria-hidden="true" />
                Parent Resources
              </span>
            </div>
            <h1
              className="font-display font-semibold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Open, honest, and<br />
              <span className="text-primary-200">always accessible.</span>
            </h1>
            <p className="font-sans text-white/60 text-lg leading-relaxed">
              Everything you need to know — FAQs, key policies, and our commitment to keeping you informed every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ── Left: FAQs ────────────────────────────────── */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
                  FAQs
                </span>
              </div>
              <h2
                className="font-display font-semibold text-neutral-900 leading-tight mb-3"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
              >
                Questions we get<br />all the time.
              </h2>
              <p className="font-sans text-neutral-500 text-base leading-relaxed">
                Can&apos;t find what you&apos;re looking for? We&apos;re always happy to chat — just get in touch.
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-soft px-7 py-2">
              {FAQS.map((faq, index) => (
                <FAQItem
                  key={index}
                  faq={faq}
                  index={index}
                  isOpen={openFAQ === index}
                  onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
                />
              ))}
            </div>

            {/* Policies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mt-12 mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
                  Documents
                </span>
              </div>
              <h2
                className="font-display font-semibold text-neutral-900 leading-tight"
                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)" }}
              >
                Key policies &amp; documents.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {POLICIES.map((policy, index) => (
                <motion.div
                  key={policy.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, ease }}
                >
                  <a
                    href={policy.href}
                    className="block bg-white rounded-2xl shadow-soft p-6 hover:shadow-medium transition-all duration-300 h-full group"
                    aria-label={`Download ${policy.title}`}
                  >
                    <div className={`inline-flex w-9 h-9 rounded-xl items-center justify-center mb-4 ${policy.iconBg} ${policy.iconColor}`}>
                      <div className="w-4.5 h-4.5">{policy.icon}</div>
                    </div>
                    <h3 className="font-display text-base font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-200 leading-tight">
                      {policy.title}
                    </h3>
                    <p className="font-sans text-xs text-neutral-500 leading-relaxed">{policy.description}</p>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: contact sidebar ────────────────────── */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, ease }}
              className="bg-white rounded-2xl shadow-soft p-7 sticky top-24"
            >
              <h3 className="font-display text-xl font-semibold text-neutral-900 mb-4">
                Still have questions?
              </h3>
              <p className="font-sans text-sm text-neutral-600 leading-relaxed mb-6">
                We&apos;re always happy to chat. Give us a call, send an email, or pop in for a visit — there&apos;s no such thing as a silly question when it comes to your child.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:02920891825"
                  className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 bg-primary-600 text-white font-semibold font-sans text-sm rounded-full hover:bg-primary-700 shadow-soft hover:shadow-medium transition-all duration-200"
                >
                  Call 029 2089 1825
                </a>
                <Link
                  to="/contact"
                  className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 border border-primary-200 text-primary-700 font-semibold font-sans text-sm rounded-full hover:bg-primary-50 hover:border-primary-300 transition-all duration-200"
                >
                  Send a Message
                </Link>
                <Link
                  to="/booking"
                  className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 border border-neutral-200 text-neutral-600 font-semibold font-sans text-sm rounded-full hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200"
                >
                  Book a Viewing
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </div>
  );
};

ParentResources.displayName = "ParentResources";
export default memo(ParentResources);
