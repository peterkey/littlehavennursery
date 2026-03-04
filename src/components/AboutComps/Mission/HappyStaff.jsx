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

const FEATURES = [
  {
    title: "A Supportive Culture",
    body: "We nurture a workplace where staff feel valued, respected, and encouraged to grow — professionally and personally.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Passionate Practitioners",
    body: "Our team brings genuine energy and enthusiasm to every session — because they love what they do, and it shows in every interaction.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Happy Staff, Happy Children",
    body: "When practitioners feel supported and motivated, children thrive. A warm, positive team creates a warm, positive environment.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

/* ── HappyStaff ──────────────────────────────────────────────────── */
const HappyStaff = () => (
  <section
    className="py-20 sm:py-28 relative overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)",
    }}
  >
    {/* Dot texture */}
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
        backgroundSize: "28px 28px",
      }}
    />
    {/* Glow */}
    <div
      aria-hidden="true"
      className="absolute left-0 bottom-0 w-[500px] h-[500px] pointer-events-none"
      style={{
        background: "radial-gradient(circle, rgba(94,234,212,0.07) 0%, transparent 70%)",
      }}
    />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
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
            Our Culture
          </span>
        </div>
        <h2
          className="font-display font-semibold text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          Happy practitioners,<br />
          <span className="text-primary-200 italic">thriving children.</span>
        </h2>
        <p className="font-sans text-white/60 text-lg leading-relaxed">
          We believe that a motivated, well-supported team is the single most important factor
          in delivering exceptional early years care.
        </p>
      </motion.div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {FEATURES.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease }}
            className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5 text-white/70">
              <div className="w-5 h-5">{feature.icon}</div>
            </div>
            <h3 className="font-display text-base font-semibold text-white mb-2 leading-snug">
              {feature.title}
            </h3>
            <p className="font-sans text-sm text-white/55 leading-relaxed">{feature.body}</p>
          </motion.div>
        ))}
      </div>

      {/* Join the team CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease }}
        className="flex items-center gap-5"
      >
        <a
          href="https://uk.indeed.com/cmp/Parachutes-Childcare-Limited/jobs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary-700 font-semibold font-sans text-sm rounded-full hover:bg-primary-50 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" {...sp}>
            <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Join Our Team
        </a>
        <p className="font-sans text-white/45 text-sm">
          We&apos;re always looking for passionate early years professionals.
        </p>
      </motion.div>

    </div>
  </section>
);

HappyStaff.displayName = "HappyStaff";
export default memo(HappyStaff);
