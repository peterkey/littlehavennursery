import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const SECTIONS = [
  {
    title: "Our Fees",
    path: "/fees/our-fees",
    description: "View our transparent fee structure and understand exactly what's included in every session.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 2v20M16 6H8.5A2.5 2.5 0 006 8.5 2.5 2.5 0 008.5 11h7a2.5 2.5 0 010 5H6M12 6h4M12 16h4" />
      </svg>
    ),
  },
  {
    title: "Welsh Government Funding",
    path: "/fees/government-funding",
    description: "Learn about Foundation Phase and Childcare Offer for Wales — funding all eligible families can access.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Tax-Free Childcare",
    path: "/fees/tax-free-childcare",
    description: "Save up to £2,000 a year through the UK-wide Tax-Free Childcare scheme — we'll show you how.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Universal Credit",
    path: "/fees/universal-credit",
    description: "Claiming Universal Credit? You may be entitled to support with childcare costs — find out more.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8v1m0 8v1m-6-5h2m8 0h2M5.05 5.05A7 7 0 1118.95 18.95 7 7 0 015.05 5.05z" />
      </svg>
    ),
  },
];

const FUNDING_STATS = [
  { value: "10", label: "Free hours", sub: "for all 3–4 year olds" },
  { value: "30", label: "Total hours", sub: "for eligible working families" },
  { value: "39", label: "Weeks / year", sub: "of funded provision" },
];

const SAVINGS_STATS = [
  { value: "30hrs", label: "Free childcare / week", detail: "for eligible 3–4 year olds in Wales", accent: "text-teal-300" },
  { value: "£2k", label: "Saved / year", detail: "via Tax-Free Childcare scheme", accent: "text-primary-200" },
  { value: "85%", label: "Costs covered", detail: "through Universal Credit support", accent: "text-teal-300" },
  { value: "3", label: "Funding routes", detail: "you can combine together", accent: "text-primary-200" },
];

/* ── FeesAndFunding ──────────────────────────────────────────────── */
const FeesAndFunding = () => (
  <div className="min-h-screen" style={{ background: "#faf8f4" }}>

    {/* ── Hero ─────────────────────────────────────────────── */}
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "440px",
        background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)",
      }}
    >
      {/* Dot texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(125,178,255,0.12) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-16"
        style={{ minHeight: "440px", paddingTop: "8rem" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-7 h-px bg-white/35 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/45">
              Fees &amp; Funding
            </span>
          </div>
          <h1
            className="font-display font-semibold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Quality childcare that&apos;s<br />
            <span className="text-primary-200">genuinely affordable.</span>
          </h1>
          <p className="font-sans text-white/60 text-lg leading-relaxed">
            Clear fees, Welsh Government funding, and practical guides to help your family access the support you deserve.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ── Savings stats bar ─────────────────────────────────── */}
    <div
      className="border-b border-white/5"
      style={{ background: "linear-gradient(135deg, #0a2248 0%, #0c2b5e 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {SAVINGS_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease }}
              className={`py-6 px-5 flex flex-col gap-1 ${i > 0 ? "border-l border-white/[0.07]" : ""}`}
            >
              <span
                className={`font-display font-semibold leading-none ${stat.accent}`}
                style={{ fontSize: "1.75rem" }}
              >
                {stat.value}
              </span>
              <span className="font-sans text-white/70 text-sm font-semibold">{stat.label}</span>
              <span className="font-sans text-white/35 text-xs leading-relaxed">{stat.detail}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* ── Section cards ─────────────────────────────────────── */}
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
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
              Explore
            </span>
          </div>
          <h2
            className="font-display font-semibold text-neutral-900 leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
          >
            Everything you need<br />
            <span className="text-primary-600 italic">to know about fees.</span>
          </h2>
          <p className="font-sans text-neutral-500 text-lg leading-relaxed">
            We believe every family should make an informed choice. Explore our transparent pricing and
            all the funding routes available to you.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {SECTIONS.map((section, index) => (
            <motion.div
              key={section.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease }}
            >
              <Link to={section.path} className="block h-full group">
                <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 h-full flex flex-col">
                  <div
                    className={`inline-flex w-11 h-11 rounded-xl items-center justify-center mb-5 flex-shrink-0 ${section.iconBg} ${section.iconColor}`}
                  >
                    <div className="w-5 h-5">{section.icon}</div>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-200 leading-tight">
                    {section.title}
                  </h3>
                  <p className="font-sans text-sm text-neutral-600 leading-relaxed flex-1 mb-5">
                    {section.description}
                  </p>
                  <div className="flex items-center gap-1.5 font-sans text-xs font-semibold text-primary-500 group-hover:text-primary-600 transition-colors duration-200">
                    <span>Learn more</span>
                    <svg
                      className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Welsh Funding highlight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="rounded-2xl overflow-hidden shadow-medium"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: copy */}
            <div className="bg-white p-8 sm:p-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-px bg-teal-300 flex-shrink-0" />
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-teal-600">
                  Welsh Government
                </span>
              </div>
              <h2
                className="font-display font-semibold text-neutral-900 leading-tight mb-4"
                style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)" }}
              >
                Up to 30 hours of funded<br />
                <span className="text-teal-600">childcare, free of charge.</span>
              </h2>
              <p className="font-sans text-neutral-600 leading-relaxed text-base mb-8">
                Wales offers some of the most generous childcare funding in the UK. All 3–4 year olds receive
                10 free hours per week, and eligible working families can access an additional 20 hours through
                the Childcare Offer for Wales.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/fees/government-funding"
                  className="inline-flex justify-center items-center gap-2 px-5 py-3 bg-teal-600 text-white font-semibold font-sans text-sm rounded-full hover:bg-teal-700 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Explore Welsh Funding
                </Link>
                <Link
                  to="/contact?service=funding&source=fees-page"
                  className="inline-flex justify-center items-center gap-2 px-5 py-3 border border-teal-200 text-teal-700 font-semibold font-sans text-sm rounded-full hover:bg-teal-50 hover:border-teal-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2"
                >
                  Ask Us About Funding
                </Link>
              </div>
            </div>

            {/* Right: stats */}
            <div
              className="p-8 sm:p-12 flex items-center"
              style={{ background: "linear-gradient(135deg, #0c4a9e 0%, #083d87 60%, #0b4496 100%)" }}
            >
              <div className="w-full">
                <div className="flex items-center gap-2.5 mb-8">
                  <span className="w-5 h-px bg-white/30 flex-shrink-0" />
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40">
                    Funding at a glance
                  </p>
                </div>
                <div className="space-y-7">
                  {FUNDING_STATS.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.1, ease }}
                      className="flex items-center gap-5"
                    >
                      <span
                        className="font-display font-semibold text-white leading-none flex-shrink-0"
                        style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
                      >
                        {stat.value}
                      </span>
                      <div>
                        <p className="font-sans text-white/85 font-semibold text-sm">{stat.label}</p>
                        <p className="font-sans text-white/40 text-xs mt-0.5">{stat.sub}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>

  </div>
);

FeesAndFunding.displayName = "FeesAndFunding";
export default memo(FeesAndFunding);
