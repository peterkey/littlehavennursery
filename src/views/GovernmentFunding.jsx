import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO/SEO";

const ease = [0.22, 1, 0.36, 1];

const FUNDING_OPTIONS = [
  {
    title: "Foundation Phase (3–4 Year Olds)",
    description:
      "All 3–4 year olds in Wales are entitled to 10 hours of free early education per week during term time.",
    details: [
      { label: "Eligibility", value: "Available to all children aged 3–4 years in Wales" },
      { label: "Hours", value: "10 hours per week" },
      { label: "When", value: "Term time only (39 weeks per year)" },
      { label: "Notes", value: "Part of the Welsh Government's Foundation Phase curriculum" },
    ],
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
  },
  {
    title: "Childcare Offer for Wales (3–4 Year Olds)",
    description:
      "Working parents can access an additional 20 hours of free childcare, giving a total of 30 hours per week.",
    details: [
      { label: "Eligibility", value: "Both parents must work and earn £8,670–£100,000 per year" },
      { label: "Hours", value: "30 hours per week (10 Foundation Phase + 20 Childcare Offer)" },
      { label: "When", value: "Term time only (39 weeks per year)" },
      { label: "Notes", value: "Must apply through your local authority in Wales" },
    ],
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    title: "Flying Start (2–3 Year Olds)",
    description:
      "Some 2–3 year olds from lower-income families can access free childcare and early education.",
    details: [
      { label: "Eligibility", value: "Families living in Flying Start areas (check with your local authority)" },
      { label: "Hours", value: "12.5 hours per week" },
      { label: "When", value: "Term time only (39 weeks per year)" },
      { label: "Notes", value: "Available in specific areas across Wales — check eligibility" },
    ],
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
  },
];

const APPLICATION_STEPS = [
  {
    step: 1,
    title: "Check Eligibility",
    description: "Verify your child's age and your family's circumstances meet the Welsh Government criteria.",
  },
  {
    step: 2,
    title: "Contact Local Authority",
    description: "Apply through your local council in Wales (not HMRC like in England).",
  },
  {
    step: 3,
    title: "Receive Confirmation",
    description: "Your local authority will confirm your eligibility and provide next steps.",
  },
  {
    step: 4,
    title: "Give Details to Nursery",
    description: "Provide your confirmation details to us and we'll apply the funding to your account.",
  },
];

const INCLUDED = [
  "Qualified staff and Foundation Phase curriculum activities",
  "Healthy snacks and meals",
  "Learning resources and materials",
  "Progress tracking through Foundation Phase Profile",
  "Welsh language development opportunities",
];

const NOT_INCLUDED = [
  "Additional services (extra hours, special activities)",
  "Personal items (nappies, wipes, spare clothes)",
  "Transport to and from nursery",
  "Late collection fees",
  "Additional meals beyond the funded hours",
];

/* ── CheckItem ───────────────────────────────────────────────────── */
const CheckItem = ({ text, dark = false }) => (
  <li className="flex items-start gap-2.5">
    <div
      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
        dark ? "bg-white/10" : "bg-primary-50"
      }`}
    >
      <svg
        className={`w-3 h-3 ${dark ? "text-white/75" : "text-primary-500"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span className={`font-sans text-sm leading-relaxed ${dark ? "text-white/65" : "text-neutral-600"}`}>
      {text}
    </span>
  </li>
);

/* ── CrossItem ───────────────────────────────────────────────────── */
const CrossItem = ({ text }) => (
  <li className="flex items-start gap-2.5">
    <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg className="w-3 h-3 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <span className="font-sans text-sm text-neutral-600 leading-relaxed">{text}</span>
  </li>
);

/* ── GovernmentFunding ───────────────────────────────────────────── */
const GovernmentFunding = () => (
  <>
    <SEO
      title="Welsh Government Funding - Little Haven Nursery"
      description="Learn about Welsh Government funding options for childcare including Foundation Phase, Childcare Offer for Wales, and Flying Start."
      keywords={["Welsh government funding", "Foundation Phase", "Childcare Offer Wales", "Flying Start", "childcare funding Wales"]}
      canonicalUrl="/fees/government-funding"
    />

    <div className="min-h-screen" style={{ background: "#faf8f4" }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "420px",
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
          style={{ background: "radial-gradient(circle, rgba(125,178,255,0.12) 0%, transparent 70%)" }}
        />

        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-16"
          style={{ minHeight: "420px", paddingTop: "8rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <Link
                to="/fees"
                className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 hover:text-white/60 transition-colors"
              >
                ← Fees &amp; Funding
              </Link>
            </div>
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans text-xs font-semibold bg-white/10 border border-white/15 text-white/80">
                <span className="w-1.5 h-1.5 bg-teal-300 rounded-full" aria-hidden="true" />
                Welsh Government
              </span>
            </div>
            <h1
              className="font-display font-semibold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Welsh Government<br />
              <span className="text-primary-200">Childcare Funding.</span>
            </h1>
            <p className="font-sans text-white/60 text-lg leading-relaxed">
              Access Welsh Government-funded childcare hours to reduce your costs and give your child the best start.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Funding Options ───────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-2xl mb-14"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
                Available Funding
              </span>
            </div>
            <h2
              className="font-display font-semibold text-neutral-900 leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              Schemes you may<br />
              <span className="text-primary-600 italic">be entitled to.</span>
            </h2>
            <p className="font-sans text-neutral-500 text-lg leading-relaxed">
              The Welsh Government provides several funding schemes to help families with childcare costs.
              Here&apos;s what&apos;s available and how to access it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {FUNDING_OPTIONS.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1, ease }}
                className="bg-white rounded-2xl shadow-soft p-7 flex flex-col"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 ${option.iconBg} ${option.iconColor}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold text-neutral-900 mb-3 leading-snug">
                  {option.title}
                </h3>
                <p className="font-sans text-sm text-neutral-600 leading-relaxed mb-5 flex-1">
                  {option.description}
                </p>
                <div className="border-t border-neutral-100 pt-5 space-y-3">
                  {option.details.map((d) => (
                    <div key={d.label}>
                      <span className="font-sans text-xs font-semibold text-neutral-500 uppercase tracking-wide">{d.label}</span>
                      <p className="font-sans text-sm text-neutral-700 mt-0.5">{d.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Apply ─────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 sm:py-28"
        style={{ background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)" }}
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
          className="absolute left-0 bottom-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(125,178,255,0.08) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-2xl mb-14"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-7 h-px bg-white/35 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/45">
                How to Apply
              </span>
            </div>
            <h2
              className="font-display font-semibold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              Four simple steps<br />
              <span className="text-primary-200 italic">to get started.</span>
            </h2>
            <p className="font-sans text-white/60 text-lg leading-relaxed">
              Applying for Welsh Government funding is straightforward. Follow these steps to access the support your family deserves.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPLICATION_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.09, ease }}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6"
              >
                <div className="w-10 h-10 rounded-full bg-primary-500/60 border border-primary-300/30 text-white font-display font-semibold text-base flex items-center justify-center mb-5">
                  {step.step}
                </div>
                <h3 className="font-display text-base font-semibold text-white mb-2 leading-snug">{step.title}</h3>
                <p className="font-sans text-sm text-white/60 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ───────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-2xl mb-14"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-teal-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-teal-600">
                Important Information
              </span>
            </div>
            <h2
              className="font-display font-semibold text-neutral-900 leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              What&apos;s covered<br />
              <span className="text-primary-600 italic">by funding.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1, ease }}
              className="bg-white rounded-2xl shadow-soft p-8 border border-neutral-100"
            >
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-5 leading-snug">
                What&apos;s included
              </h3>
              <ul className="space-y-3">
                {INCLUDED.map((item) => <CheckItem key={item} text={item} />)}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2, ease }}
              className="bg-white rounded-2xl shadow-soft p-8 border border-neutral-100"
            >
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-5 leading-snug">
                What&apos;s not included
              </h3>
              <ul className="space-y-3">
                {NOT_INCLUDED.map((item) => <CrossItem key={item} text={item} />)}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28" style={{ background: "#faf8f4" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="bg-white rounded-2xl shadow-soft p-10 sm:p-14 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
                Get Support
              </span>
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
            </div>
            <h2
              className="font-display font-semibold text-neutral-900 leading-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
            >
              Need help with<br />Welsh funding?
            </h2>
            <p className="font-sans text-neutral-500 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Our team is happy to guide you through the application process and answer any questions you have
              about funding eligibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact?service=welsh-funding&source=government-funding-page"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold font-sans text-sm rounded-full hover:bg-primary-700 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Ask Us About Funding
              </Link>
              <a
                href="https://gov.wales/childcare-offer-wales"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 border border-primary-200 text-primary-700 font-semibold font-sans text-sm rounded-full hover:bg-primary-50 hover:border-primary-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
              >
                Welsh Government Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  </>
);

GovernmentFunding.displayName = "GovernmentFunding";
export default memo(GovernmentFunding);
