import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const FEATURES = [
  {
    title: "Secure Environment",
    description: "Childproofed spaces and a secure entry system ensure safety at all times, giving parents complete peace of mind.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Health & First Aid",
    description: "All practitioners are trained in paediatric first aid and follow strict health and hygiene protocols every day.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Emotional Wellbeing",
    description: "Our practitioners build warm, caring relationships so every child feels supported, valued, and truly confident.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Safeguarding",
    description: "Comprehensive safeguarding policies and regular training ensure child protection is embedded in everything we do.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
];

/* ── SafeEnvironment ──────────────────────────────────────────────── */
const SafeEnvironment = () => (
  <section
    className="py-20 sm:py-28 relative overflow-hidden"
    style={{ background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)" }}
  >
    {/* Dot texture */}
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.04]"
      style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
    />
    {/* Glow */}
    <div
      aria-hidden="true"
      className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(125,178,255,0.10) 0%, transparent 70%)" }}
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
            Safety &amp; Wellbeing
          </span>
        </div>
        <h2
          className="font-display font-semibold text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          Children deserve to<br />
          <span className="text-primary-200 italic">feel safe.</span>
        </h2>
        <p className="font-sans text-white/60 text-lg leading-relaxed">
          A child&apos;s ability to learn and grow depends on feeling safe, secure, and cared for.
          At Little Haven, we create an emotionally nurturing and physically secure environment
          where children can explore and develop with full confidence.
        </p>
      </motion.div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {FEATURES.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.09, ease }}
            className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5 text-white/70">
              <div className="w-5 h-5">{feature.icon}</div>
            </div>
            <h3 className="font-display text-base font-semibold text-white mb-2 leading-snug">
              {feature.title}
            </h3>
            <p className="font-sans text-sm text-white/55 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Closing CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25, ease }}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
      >
        <Link
          to="/booking"
          className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary-700 font-semibold font-sans text-sm rounded-full hover:bg-primary-50 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-900"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" {...sp}>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Book a Visit
        </Link>
        <Link
          to="/about/mission"
          className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 text-white/80 font-semibold font-sans text-sm rounded-full hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-200"
        >
          Explore Our Mission
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" {...sp}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>

    </div>
  </section>
);

SafeEnvironment.displayName = "SafeEnvironment";
export default memo(SafeEnvironment);
