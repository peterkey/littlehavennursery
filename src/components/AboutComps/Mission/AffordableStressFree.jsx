import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

const sp = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const FEATURES = [
  {
    title: "Convenient & Reliable",
    body: "Our opening hours from 7:30 AM to 5:30 PM are designed to support working families — consistent, dependable care you can always count on.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Great Value",
    body: "We offer high-quality childcare at an affordable rate — giving you confidence that your child receives exceptional care without financial strain.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
];

const FUNDING = [
  { label: "15 hrs Free Childcare (2–3 yr olds)", to: "/governmentfunding" },
  { label: "30 hrs Free Childcare (3–4 yr olds)", to: "/governmentfunding" },
  { label: "Tax-Free Childcare", to: "/taxfreechildcare" },
  { label: "Universal Credit Support", to: "/universalcredit" },
];

/* ── AffordableStressFree ────────────────────────────────────────── */
const AffordableStressFree = () => (
  <section className="py-20 sm:py-28 bg-white">
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
          <span className="w-8 h-px bg-teal-300 flex-shrink-0" />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-teal-600">
            Fees &amp; Flexibility
          </span>
        </div>
        <h2
          className="font-display font-semibold text-neutral-900 leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          Affordable, flexible childcare<br />
          <span className="text-teal-600 italic">built around your family.</span>
        </h2>
        <p className="font-sans text-neutral-500 text-lg leading-relaxed">
          We understand the challenges of balancing work and family life — which is why we offer
          reliable, high-quality care at excellent value, with a range of funding options available.
        </p>
      </motion.div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {FEATURES.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1, ease }}
            className="bg-white rounded-2xl p-7 shadow-soft border border-neutral-100 flex gap-5 hover:shadow-medium transition-shadow duration-300"
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${feature.iconBg} ${feature.iconColor}`}
            >
              <div className="w-5 h-5">{feature.icon}</div>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2 leading-snug">
                {feature.title}
              </h3>
              <p className="font-sans text-sm text-neutral-600 leading-relaxed">{feature.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Funding options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease }}
        className="bg-neutral-50 rounded-2xl p-7 border border-neutral-100"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" {...sp}>
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="font-display text-xl font-semibold text-neutral-900">
            Government Funding Available
          </h3>
        </div>
        <p className="font-sans text-neutral-500 text-sm leading-relaxed mb-5">
          You may be entitled to free funded hours and other financial support to help with the cost
          of childcare. We&apos;ll guide you through every option available to your family.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {FUNDING.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-xl border border-neutral-200 text-sm font-sans text-neutral-700 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" viewBox="0 0 24 24" {...sp}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          to="/fees"
          className="inline-flex items-center gap-2 px-5 py-3 bg-teal-600 text-white font-semibold font-sans text-sm rounded-full hover:bg-teal-700 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          View All Fees &amp; Funding Options
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" {...sp}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>

    </div>
  </section>
);

AffordableStressFree.displayName = "AffordableStressFree";
export default memo(AffordableStressFree);
