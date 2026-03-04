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
    title: "Curiosity & Imagination",
    body: "We encourage children to ask questions, explore ideas, and think creatively — setting the stage for a lifetime of discovery and wonder.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Creativity & Play",
    body: "Learning through play is at the heart of our approach — helping children develop problem-solving skills, confidence, and joy in their own abilities.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: "Exciting First Experiences",
    body: "We create a stimulating environment where children build positive, lasting memories of learning — a foundation that carries them through life.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

/* ── LifelongLearners ─────────────────────────────────────────────── */
const LifelongLearners = () => (
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
            Lifelong Learning
          </span>
        </div>
        <h2
          className="font-display font-semibold text-neutral-900 leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          Inspiring curious minds<br />
          <span className="text-primary-600 italic">from the very beginning.</span>
        </h2>
        <p className="font-sans text-neutral-500 text-lg leading-relaxed">
          At Little Haven, we inspire children to be enthusiastic, curious learners. Through play,
          creativity, and exploration, we lay the foundation for a lifelong love of learning.
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

      {/* Approach CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.25, ease }}
      >
        <Link
          to="/about/approach"
          className="inline-flex items-center gap-2 px-5 py-3 border border-primary-200 text-primary-700 font-semibold font-sans text-sm rounded-full hover:bg-primary-50 hover:border-primary-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" {...sp}>
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Discover Our Learning Approach
        </Link>
      </motion.div>

    </div>
  </section>
);

LifelongLearners.displayName = "LifelongLearners";
export default memo(LifelongLearners);
