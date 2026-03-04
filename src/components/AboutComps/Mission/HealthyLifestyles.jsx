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
    title: "Nutritious Meals",
    body: "Our carefully planned menus are packed with essential nutrients, keeping children energised and ready to learn every session.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
      </svg>
    ),
  },
  {
    title: "Active Play",
    body: "Daily movement and outdoor activities build coordination, strength, and confidence — healthy bodies alongside healthy minds.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <circle cx="12" cy="5" r="1" fill="currentColor" />
        <path d="M9 19.5L8 21m8-1.5l1 1.5M9 19.5L6 17l1-4.5L9 11l4 1.5 4-1.5 1 4.5-3 2.5-1-2" />
        <path d="M12 12V7" />
      </svg>
    ),
  },
  {
    title: "Healthy Habits",
    body: "We teach children about healthy choices in a fun, engaging way — building lifelong wellness habits from the very earliest age.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 22V12m0 0C12 7 7 4 2 4c0 5 3 9 10 8m0 0c0-5 5-8 10-8-1 5-5 9-10 8" />
      </svg>
    ),
  },
];

/* ── HealthyLifestyles ────────────────────────────────────────────── */
const HealthyLifestyles = () => (
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
            Health &amp; Wellbeing
          </span>
        </div>
        <h2
          className="font-display font-semibold text-neutral-900 leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          Nourishing bodies<br />
          <span className="text-teal-600 italic">alongside growing minds.</span>
        </h2>
        <p className="font-sans text-neutral-500 text-lg leading-relaxed">
          We believe healthy habits start young. Through nutritious food, active play, and
          outdoor learning, we support children&apos;s physical development every single day.
        </p>
      </motion.div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {FEATURES.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1, ease }}
            className="bg-white rounded-2xl p-7 shadow-soft border border-neutral-100 hover:shadow-medium transition-shadow duration-300"
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${feature.iconBg} ${feature.iconColor}`}
            >
              <div className="w-5 h-5">{feature.icon}</div>
            </div>
            <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2 leading-snug">
              {feature.title}
            </h3>
            <p className="font-sans text-sm text-neutral-600 leading-relaxed">{feature.body}</p>
          </motion.div>
        ))}
      </div>

      {/* Food & nutrition CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.25, ease }}
      >
        <Link
          to="/about/foodandnutrition"
          className="inline-flex items-center gap-2 px-5 py-3 border border-teal-200 text-teal-700 font-semibold font-sans text-sm rounded-full hover:bg-teal-50 hover:border-teal-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" {...sp}>
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
          </svg>
          View Our Food &amp; Nutrition Page
        </Link>
      </motion.div>

    </div>
  </section>
);

HealthyLifestyles.displayName = "HealthyLifestyles";
export default memo(HealthyLifestyles);
