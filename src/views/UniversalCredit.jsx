import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO/SEO";

const ease = [0.22, 1, 0.36, 1];

const KEY_POINTS = [
  {
    title: "What It Covers",
    description:
      "Universal Credit can help cover up to 85% of your childcare costs, up to certain monthly limits.",
    items: [
      "Up to 85% of childcare costs covered",
      "Monthly limits apply based on age",
      "Must be working to claim childcare costs",
      "Can be claimed alongside other benefits",
      "Available across the UK including Wales",
    ],
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    svgPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Monthly Limits",
    description:
      "The amount you can claim depends on your child's age and your circumstances.",
    items: [
      "Children under 16: Up to £646.35 per month",
      "Children 16–17: Up to £646.35 per month",
      "Disabled children: Up to £1,108.04 per month",
      "Limits apply per child, not per family",
      "Rates are the same across the UK",
    ],
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    svgPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8v1m0 8v1m-6-5h2m8 0h2M5.05 5.05A7 7 0 1118.95 18.95 7 7 0 015.05 5.05z",
  },
  {
    title: "Eligibility",
    description:
      "You must be working and claiming Universal Credit to be eligible for childcare cost support.",
    items: [
      "Must be claiming Universal Credit",
      "Must be working (including self-employed)",
      "Childcare must enable you to work",
      "Provider must be registered and approved",
      "Available to Welsh residents",
    ],
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    svgPath: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
];

const HOW_TO_CLAIM = [
  { step: 1, title: "Check Eligibility", description: "Verify you're working and claiming Universal Credit." },
  { step: 2, title: "Report Childcare Costs", description: "Tell Universal Credit about your childcare costs in your online account." },
  { step: 3, title: "Provide Evidence", description: "Submit receipts or invoices from your childcare provider." },
  { step: 4, title: "Receive Payment", description: "Childcare costs will be included in your Universal Credit payment." },
];

const WELSH_INFO = [
  {
    title: "Using with Welsh Funding",
    description: "Universal Credit childcare costs can be used alongside Welsh Government schemes.",
    items: [
      "Can be used with Foundation Phase hours",
      "Works with Childcare Offer for Wales",
      "Cannot be combined with Tax-Free Childcare",
      "Check with your work coach for guidance",
    ],
  },
  {
    title: "Welsh Childcare Providers",
    description: "Universal Credit works with registered Welsh childcare providers.",
    items: [
      "Must be registered with Care Inspectorate Wales",
      "We are a registered provider",
      "Can be used for wrap-around care",
      "Applies to all our locations",
    ],
  },
];

const KEY_REQUIREMENTS = [
  "You must report childcare costs every month",
  "Costs are paid in arrears (after you've paid them)",
  "You need to keep receipts and invoices",
];

const ADDITIONAL_NOTES = [
  "Changes in circumstances must be reported immediately",
  "Childcare costs are paid separately from your main Universal Credit",
  "Cannot be used alongside Tax-Free Childcare scheme",
];

const COVERED = [
  "Registered childcare provider fees",
  "Before and after school care",
  "Holiday childcare",
  "Childminder costs",
  "Nursery fees",
];

const NOT_COVERED = [
  "School fees",
  "Activities and clubs",
  "Transport costs",
  "Food and meals",
  "Personal items",
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

/* ── UniversalCredit ─────────────────────────────────────────────── */
const UniversalCredit = () => (
  <>
    <SEO
      title="Universal Credit Childcare - Little Haven Nursery"
      description="Learn how to claim childcare costs through Universal Credit in Wales. Get up to 85% of your childcare costs covered when you're working."
      keywords={["universal credit childcare", "childcare benefits", "working tax credit", "childcare costs Wales", "Welsh childcare benefits"]}
      canonicalUrl="/fees/universal-credit"
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
                Benefits Support
              </span>
            </div>
            <h1
              className="font-display font-semibold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Universal Credit<br />
              <span className="text-primary-200">Childcare Support.</span>
            </h1>
            <p className="font-sans text-white/60 text-lg leading-relaxed">
              Get up to 85% of your childcare costs covered through Universal Credit when you&apos;re working in Wales.
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
              How Universal Credit<br />
              <span className="text-primary-600 italic">childcare works.</span>
            </h2>
            <p className="font-sans text-neutral-500 text-lg leading-relaxed">
              Universal Credit can help working families with childcare costs, including those already using
              Welsh Government funding schemes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {KEY_POINTS.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1, ease }}
                className="bg-white rounded-2xl shadow-soft p-7 flex flex-col"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 ${point.iconBg} ${point.iconColor}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                    <path d={point.svgPath} />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold text-neutral-900 mb-3 leading-snug">{point.title}</h3>
                <p className="font-sans text-sm text-neutral-600 leading-relaxed mb-5 flex-1">{point.description}</p>
                <ul className="space-y-2.5">
                  {point.items.map((item) => <CheckItem key={item} text={item} />)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Claim — steps ─────────────────────────────── */}
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
                How to Claim
              </span>
            </div>
            <h2
              className="font-display font-semibold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              Four steps to<br />
              <span className="text-primary-200 italic">claim your support.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_TO_CLAIM.map((step, index) => (
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

      {/* ── Welsh Info + What's Covered ──────────────────────── */}
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
              Universal Credit<br />
              <span className="text-primary-600 italic">in Wales.</span>
            </h2>
            <p className="font-sans text-neutral-500 text-lg leading-relaxed">
              Learn how Universal Credit childcare costs work with Welsh Government schemes and providers.
            </p>
          </motion.div>

          {/* Welsh cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {WELSH_INFO.map((info, index) => (
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

          {/* Important info + what's covered */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1, ease }}
              className="bg-white rounded-2xl shadow-soft p-7 border border-neutral-100"
            >
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-5">Key Requirements</h3>
              <ul className="space-y-2.5 mb-6">
                {KEY_REQUIREMENTS.map((note) => <CheckItem key={note} text={note} />)}
              </ul>
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-4">Additional Notes</h3>
              <ul className="space-y-2.5">
                {ADDITIONAL_NOTES.map((note) => <CheckItem key={note} text={note} />)}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2, ease }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-soft p-7 border border-neutral-100">
                <h3 className="font-display text-lg font-semibold text-neutral-900 mb-4">Costs Covered</h3>
                <ul className="space-y-2.5">
                  {COVERED.map((item) => <CheckItem key={item} text={item} />)}
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-soft p-7 border border-neutral-100">
                <h3 className="font-display text-lg font-semibold text-neutral-900 mb-4">Not Covered</h3>
                <ul className="space-y-2.5">
                  {NOT_COVERED.map((item) => <CrossItem key={item} text={item} />)}
                </ul>
              </div>
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
                Need Help?
              </span>
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
            </div>
            <h2
              className="font-display font-semibold text-neutral-900 leading-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
            >
              Questions about<br />Universal Credit?
            </h2>
            <p className="font-sans text-neutral-500 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Our team can help you understand how to claim childcare costs through Universal Credit
              and how it works alongside Welsh Government funding schemes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact?service=universal-credit&source=universal-credit-page"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold font-sans text-sm rounded-full hover:bg-primary-700 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Ask Us for Help
              </Link>
              <a
                href="https://www.gov.uk/universal-credit/childcare-costs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 border border-primary-200 text-primary-700 font-semibold font-sans text-sm rounded-full hover:bg-primary-50 hover:border-primary-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
              >
                Government Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  </>
);

UniversalCredit.displayName = "UniversalCredit";
export default memo(UniversalCredit);
