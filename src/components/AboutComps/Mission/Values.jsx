import { memo } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const sp = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const VALUES = [
  {
    title: "Care & Support",
    body: "We provide the highest level of care and support, ensuring every child feels safe, known, and loved as they learn and grow alongside their peers.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Creativity & Innovation",
    body: "We encourage creativity through open-ended play, helping children develop new skills, ideas, and the confidence to express themselves freely.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Child-Centred Learning",
    body: "Our approach is always child-centred, focusing on individual needs and fostering curiosity, independence, and growth at every child's own natural pace.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Passion & Commitment",
    body: "We are passionate about early childhood education and committed to giving every child the best possible start — not just in school, but in life.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

/* ── Values ──────────────────────────────────────────────────────── */
const Values = () => (
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
          <span className="w-8 h-px bg-teal-300 flex-shrink-0" />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-teal-600">
            Our Values
          </span>
        </div>
        <h2
          className="font-display font-semibold text-neutral-900 leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          The principles that<br />
          <span className="text-teal-600 italic">guide everything we do.</span>
        </h2>
        <p className="font-sans text-neutral-500 text-lg leading-relaxed">
          Our values aren&apos;t a statement on a wall — they shape how our practitioners think, act,
          and relate to every child and family each day.
        </p>
      </motion.div>

      {/* Values grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {VALUES.map((value, i) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.09, ease }}
            className="bg-white rounded-2xl p-7 shadow-soft border border-neutral-100 flex gap-5 hover:shadow-medium transition-shadow duration-300"
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${value.iconBg} ${value.iconColor}`}
            >
              <div className="w-5 h-5">{value.icon}</div>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2 leading-snug">
                {value.title}
              </h3>
              <p className="font-sans text-sm text-neutral-600 leading-relaxed">{value.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

Values.displayName = "Values";
export default memo(Values);
