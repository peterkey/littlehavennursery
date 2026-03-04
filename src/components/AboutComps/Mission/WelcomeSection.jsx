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

const PILLARS = [
  {
    label: "Froebelian Approach",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 22V12m0 0C12 7 7 4 2 4c0 5 3 9 10 8m0 0c0-5 5-8 10-8-1 5-5 9-10 8" />
      </svg>
    ),
  },
  {
    label: "Curiosity-Led Learning",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    label: "Child-Centred Care",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

/* ── WelcomeSection ──────────────────────────────────────────────── */
const WelcomeSection = () => (
  <section className="py-20 sm:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

        {/* Left: heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
              Our Mission
            </span>
          </div>
          <h2
            className="font-display font-semibold text-neutral-900 leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
          >
            Where every child&apos;s journey<br />
            <span className="text-primary-600 italic">begins with love.</span>
          </h2>

          {/* Mission statement pull-quote */}
          <div className="border-l-4 border-primary-200 pl-6 py-1 mb-8">
            <p className="font-display text-xl text-neutral-700 italic leading-relaxed">
              &ldquo;We nurture curiosity, creativity, and confidence — giving every child
              the very best start to their lifelong love of learning.&rdquo;
            </p>
          </div>

          {/* Pillars */}
          <div className="flex flex-wrap gap-3 mb-8">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100"
              >
                <div className="w-3.5 h-3.5 text-primary-500">{pillar.icon}</div>
                <span className="font-sans text-xs font-semibold text-primary-700">
                  {pillar.label}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/about/approach"
            className="inline-flex items-center gap-2 px-5 py-3 bg-primary-600 text-white font-semibold font-sans text-sm rounded-full hover:bg-primary-700 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Discover Our Approach
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" {...sp}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* Right: supporting copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
          className="space-y-5 pt-2"
        >
          <p className="font-sans text-neutral-600 text-lg leading-relaxed">
            At Little Haven, we are dedicated to providing a nurturing and inspiring environment where
            children learn and grow through play. Our Froebelian approach ensures that every child
            receives the best possible foundation for a lifelong love of learning.
          </p>
          <p className="font-sans text-neutral-500 leading-relaxed">
            We follow the Curiosity Approach — using natural materials, authentic experiences, and
            open-ended play to spark wonder and self-directed discovery. Children make choices, build
            confidence, and develop into independent thinkers in their own unique way.
          </p>
          <p className="font-sans text-neutral-500 leading-relaxed">
            Everything we do flows from a deep respect for childhood itself. Not as a rehearsal for
            adulthood, but as a precious, irreplaceable stage of life — worthy of the very best care,
            attention, and joy.
          </p>
        </motion.div>

      </div>
    </div>
  </section>
);

WelcomeSection.displayName = "WelcomeSection";
export default memo(WelcomeSection);
