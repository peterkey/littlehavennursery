import { memo } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const FEATURES = [
  {
    n: "01",
    title: "Cognitive Development",
    description: "Encouraging problem-solving, memory skills, and logical thinking through hands-on experiences.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Emotional Wellbeing",
    description: "Helping children understand and manage emotions while building resilience and confidence.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Social Skills",
    description: "Encouraging cooperation, empathy, and teamwork through interactive group activities.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Physical Development",
    description: "Supporting gross and fine motor skills through movement, outdoor play, and hands-on learning.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

/* ── Feature card — vertical layout matching WhyUs ────────────────── */
const FeatureCard = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay: index * 0.08, ease }}
    className="relative bg-white rounded-2xl p-7 shadow-soft hover:shadow-medium transition-all duration-300 group overflow-hidden"
  >
    {/* Muted number — decorative */}
    <span
      aria-hidden="true"
      className="absolute top-5 right-5 font-display font-bold text-neutral-100 leading-none select-none group-hover:text-neutral-200/70 transition-colors duration-300"
      style={{ fontSize: "3.5rem" }}
    >
      {feature.n}
    </span>

    {/* Icon */}
    <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5 flex-shrink-0 ${feature.iconBg} ${feature.iconColor}`}>
      <div className="w-5 h-5">
        {feature.icon}
      </div>
    </div>

    {/* Title */}
    <h3 className="font-display text-lg font-semibold text-neutral-900 mb-3 leading-tight pr-10">
      {feature.title}
    </h3>

    {/* Description */}
    <p className="font-sans text-sm text-neutral-600 leading-relaxed">
      {feature.description}
    </p>
  </motion.div>
);

/* ── HolisticDevelopment ──────────────────────────────────────────── */
const HolisticDevelopment = () => (
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
          <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">Holistic Growth</span>
        </div>
        <h2
          className="font-display font-semibold text-neutral-900 leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          Developing the<br />
          <span className="text-primary-600 italic">whole child.</span>
        </h2>
        <p className="font-sans text-neutral-500 text-lg leading-relaxed">
          A child&apos;s growth isn&apos;t just about learning facts. We focus on cognitive, emotional, social, and physical development — ensuring children thrive in every aspect of their lives.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {FEATURES.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>

    </div>
  </section>
);

HolisticDevelopment.displayName = "HolisticDevelopment";
export default memo(HolisticDevelopment);
