import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO/SEO";

const ease = [0.22, 1, 0.36, 1];

const SCHEME_DETAILS = [
  {
    title: "How It Works",
    description:
      "For every £8 you pay into your childcare account, the government will add £2, up to a maximum of £2,000 per child per year.",
    items: [
      "Government contributes 20% of your childcare costs",
      "Maximum government contribution: £2,000 per child per year",
      "Maximum you can pay in: £8,000 per child per year",
      "Available for children up to age 11 (or 17 if disabled)",
    ],
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    svgPath: "M12 2v20M16 6H8.5A2.5 2.5 0 006 8.5 2.5 2.5 0 008.5 11h7a2.5 2.5 0 010 5H6M12 6h4M12 16h4",
  },
  {
    title: "Eligibility",
    description:
      "Both parents must be working and earning at least the equivalent of 16 hours at the National Living Wage.",
    items: [
      "Both parents must be working (or single parent working)",
      "Minimum earnings: £8,670 per year each",
      "Maximum earnings: £100,000 per year each",
      "Child must be 11 or under (or 17 if disabled)",
      "Available across the UK including Wales",
    ],
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    svgPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Benefits",
    description:
      "Save up to £2,000 per child per year on your childcare costs through this UK-wide government scheme.",
    items: [
      "Save up to £2,000 per child annually",
      "No need to wait for tax returns",
      "Flexible — use when you need it",
      "Can be combined with Welsh Government funding",
      "Works alongside Foundation Phase and Childcare Offer",
    ],
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    svgPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
];

const HOW_TO_USE = [
  { step: 1, title: "Open an Account", description: "Apply online through HMRC to open your Tax-Free Childcare account." },
  { step: 2, title: "Add Money", description: "Pay money into your account. For every £8, the government adds £2." },
  { step: 3, title: "Pay for Childcare", description: "Use the money in your account to pay your childcare provider directly." },
  { step: 4, title: "Keep Topped Up", description: "Continue adding money to maintain your 20% government contribution." },
];

const WELSH_INTEGRATION = [
  {
    title: "Combining with Welsh Funding",
    description: "Tax-Free Childcare can be used alongside Welsh Government schemes for maximum savings.",
    items: [
      "Use Foundation Phase hours (10 free hours)",
      "Add Childcare Offer hours (20 additional free hours)",
      "Pay for remaining hours with Tax-Free Childcare",
      "Maximum savings when combining all schemes",
    ],
  },
  {
    title: "Important Notes for Wales",
    description: "Some specific considerations when using Tax-Free Childcare in Wales.",
    items: [
      "Tax-Free Childcare is a UK-wide scheme",
      "Works with registered Welsh childcare providers",
      "Can be used for wrap-around care services",
      "Check provider accepts Tax-Free Childcare payments",
    ],
  },
];

const COMPARISON = [
  { scenario: "Without Tax-Free Childcare", monthly: "£1,000", annual: "£12,000", savings: "£0", highlight: false },
  { scenario: "With Tax-Free Childcare", monthly: "£800", annual: "£9,600", savings: "£2,400", highlight: true },
];

/* ── CheckItem ───────────────────────────────────────────────────── */
const CheckItem = ({ text, dark = false }) => (
  <li className="flex items-start gap-2.5">
    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${dark ? "bg-white/10" : "bg-primary-50"}`}>
      <svg className={`w-3 h-3 ${dark ? "text-white/75" : "text-primary-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span className={`font-sans text-sm leading-relaxed ${dark ? "text-white/65" : "text-neutral-600"}`}>{text}</span>
  </li>
);

/* ── TaxFreeChildcare ────────────────────────────────────────────── */
const TaxFreeChildcare = () => (
  <>
    <SEO
      title="Tax-Free Childcare - Little Haven Nursery"
      description="Learn how to save up to £2,000 per child per year on childcare costs through the government's Tax-Free Childcare scheme in Wales."
      keywords={["tax free childcare", "childcare savings", "government childcare scheme", "childcare costs Wales", "Welsh childcare funding"]}
      canonicalUrl="/fees/tax-free-childcare"
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
                UK-Wide Scheme
              </span>
            </div>
            <h1
              className="font-display font-semibold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Tax-Free<br />
              <span className="text-primary-200">Childcare.</span>
            </h1>
            <p className="font-sans text-white/60 text-lg leading-relaxed">
              Save up to £2,000 per child per year on childcare costs through this UK-wide government scheme.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
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
                The Scheme
              </span>
            </div>
            <h2
              className="font-display font-semibold text-neutral-900 leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              How Tax-Free<br />
              <span className="text-primary-600 italic">Childcare works.</span>
            </h2>
            <p className="font-sans text-neutral-500 text-lg leading-relaxed">
              This UK-wide scheme can be used alongside Welsh Government funding to maximise your savings on childcare costs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SCHEME_DETAILS.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1, ease }}
                className="bg-white rounded-2xl shadow-soft p-7 flex flex-col"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 ${detail.iconBg} ${detail.iconColor}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                    <path d={detail.svgPath} />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold text-neutral-900 mb-3 leading-snug">{detail.title}</h3>
                <p className="font-sans text-sm text-neutral-600 leading-relaxed mb-5 flex-1">{detail.description}</p>
                <ul className="space-y-2.5">
                  {detail.items.map((item) => <CheckItem key={item} text={item} />)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Use — steps ───────────────────────────────── */}
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
                Getting Started
              </span>
            </div>
            <h2
              className="font-display font-semibold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              Four steps to<br />
              <span className="text-primary-200 italic">start saving.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_TO_USE.map((step, index) => (
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

      {/* ── Welsh Integration ─────────────────────────────────── */}
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
                Using in Wales
              </span>
            </div>
            <h2
              className="font-display font-semibold text-neutral-900 leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              Combine with<br />
              <span className="text-primary-600 italic">Welsh funding.</span>
            </h2>
            <p className="font-sans text-neutral-500 text-lg leading-relaxed">
              Learn how to combine Tax-Free Childcare with Welsh Government schemes for maximum benefits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WELSH_INTEGRATION.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1, ease }}
                className="bg-white rounded-2xl shadow-soft p-7 border border-neutral-100"
              >
                <h3 className="font-display text-lg font-semibold text-neutral-900 mb-3 leading-snug">{info.title}</h3>
                <p className="font-sans text-sm text-neutral-600 leading-relaxed mb-5">{info.description}</p>
                <ul className="space-y-2.5">
                  {info.items.map((item) => <CheckItem key={item} text={item} />)}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Cost comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl"
          >
            {COMPARISON.map((scenario) => (
              <div
                key={scenario.scenario}
                className={`rounded-2xl p-7 ${
                  scenario.highlight
                    ? "bg-primary-600 text-white"
                    : "bg-white shadow-soft border border-neutral-100"
                }`}
              >
                <p className={`font-sans text-xs font-semibold uppercase tracking-widest mb-5 ${scenario.highlight ? "text-primary-200" : "text-neutral-400"}`}>
                  {scenario.scenario}
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Monthly Cost", value: scenario.monthly },
                    { label: "Annual Cost", value: scenario.annual },
                    { label: "Savings", value: scenario.savings },
                  ].map((row) => (
                    <div key={row.label}>
                      <p className={`font-sans text-xs ${scenario.highlight ? "text-primary-200" : "text-neutral-400"}`}>{row.label}</p>
                      <p className={`font-display text-2xl font-semibold ${scenario.highlight ? "text-white" : "text-neutral-900"}`}>{row.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
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
                Ready to Save?
              </span>
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
            </div>
            <h2
              className="font-display font-semibold text-neutral-900 leading-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
            >
              Start saving on<br />childcare today.
            </h2>
            <p className="font-sans text-neutral-500 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Our team can help you understand how to combine Tax-Free Childcare with Welsh Government funding
              to maximise your savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact?service=tax-free-childcare&source=tax-free-page"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold font-sans text-sm rounded-full hover:bg-primary-700 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Get Help from Us
              </Link>
              <a
                href="https://www.gov.uk/tax-free-childcare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 border border-primary-200 text-primary-700 font-semibold font-sans text-sm rounded-full hover:bg-primary-50 hover:border-primary-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
              >
                Apply on Gov.uk
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  </>
);

TaxFreeChildcare.displayName = "TaxFreeChildcare";
export default memo(TaxFreeChildcare);
