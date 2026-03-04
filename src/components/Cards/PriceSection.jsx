import { memo } from "react";
import { motion } from "framer-motion";
import PriceCard from "./PriceCard";

const ease = [0.22, 1, 0.36, 1];

const AGE_GROUPS = [
  {
    name: "Under 2 Years",
    fullDayPrice: 82,
    halfDayPrice: 45,
    features: [
      "3 Meals & Healthy Snacks",
      "Nappies Provided",
      "Dedicated Care Team",
      "Open Hours (7:30–17:30)",
      "Minimum 2 Full Days",
    ],
  },
  {
    name: "2–3 Years",
    fullDayPrice: 80,
    halfDayPrice: 43,
    features: [
      "3 Meals & Healthy Snacks",
      "Bilingual (English/Welsh)",
      "Structured Learning",
      "Open Hours (7:30–17:30)",
      "Minimum 2 Full Days",
    ],
  },
  {
    name: "Over 3 Years",
    fullDayPrice: 80,
    halfDayPrice: 43,
    featured: true,
    features: [
      "3 Meals & Healthy Snacks",
      "Bilingual (English/Welsh)",
      "School Readiness Programme",
      "Open Hours (7:30–17:30)",
      "Welsh Funding Available",
    ],
  },
];

const ADDITIONAL_INFO = [
  "Minimum attendance of 2 full days per week required",
  "Full day runs from 7:30 AM to 5:30 PM",
  "10% sibling discount available for the eldest child",
  "Government funding available for eligible 3–4 year olds",
  "Childcare vouchers and Tax-Free Childcare accepted",
];

/* ── PriceSection ────────────────────────────────────────────────── */
const PriceSection = () => (
  <section className="py-20 sm:py-28" style={{ background: "#faf8f4" }}>
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
            Day Nursery — Rhydlafar
          </span>
        </div>
        <h2
          className="font-display font-semibold text-neutral-900 leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          Simple, transparent<br />
          <span className="text-primary-600 italic">pricing.</span>
        </h2>
        <p className="font-sans text-neutral-500 text-lg leading-relaxed">
          All prices include meals, snacks, and activities. Welsh Government funding is available for children aged 3–4.
        </p>
      </motion.div>

      {/* Price cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {AGE_GROUPS.map((group, index) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.1, ease }}
          >
            <PriceCard
              name={group.name}
              price={group.fullDayPrice}
              halfDayPrice={group.halfDayPrice}
              features={group.features}
              featured={group.featured}
            />
          </motion.div>
        ))}
      </div>

      {/* Additional information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.25, ease }}
        className="bg-white rounded-2xl shadow-soft p-7 border border-neutral-100"
      >
        <div className="flex items-center gap-3 mb-5">
          <span className="w-7 h-px bg-primary-300 flex-shrink-0" />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
            Important Notes
          </span>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ADDITIONAL_INFO.map((info) => (
            <li key={info} className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-sans text-sm text-neutral-600 leading-relaxed">{info}</span>
            </li>
          ))}
        </ul>
        <p className="font-sans text-xs text-neutral-400 mt-5 pt-4 border-t border-neutral-100">
          Prices effective from April 2024. Please contact us to discuss your specific requirements.
        </p>
      </motion.div>

    </div>
  </section>
);

PriceSection.displayName = "PriceSection";
export default memo(PriceSection);
