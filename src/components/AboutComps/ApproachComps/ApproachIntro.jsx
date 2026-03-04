import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const PRINCIPLES = [
  {
    title: "Child-Led Learning",
    description: "Children thrive when they have the freedom to explore and make decisions. We encourage curiosity and independence in every activity, every day.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Holistic Development",
    description: "We focus on cognitive, social, emotional, and physical growth — because a thriving child is so much more than their academic progress.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Natural Environments",
    description: "Using open-ended resources and nature-based play, we create spaces where children can explore, imagine, and discover at their own pace.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 22V12m0 0C12 7 7 4 2 4c0 5 3 9 10 8m0 0c0-5 5-8 10-8-1 5-5 9-10 8" />
      </svg>
    ),
  },
];

/* ── ApproachIntro ────────────────────────────────────────────────── */
const ApproachIntro = () => (
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
      className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
      style={{
        background: "radial-gradient(circle, rgba(125,178,255,0.12) 0%, transparent 70%)",
      }}
    />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-16"
      style={{ minHeight: "440px", paddingTop: "8rem" }}
    >
      <div className="w-full">
        {/* Hero copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl mb-14"
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-6" aria-label="Breadcrumb">
            <Link
              to="/about"
              className="font-sans text-xs font-semibold text-white/45 hover:text-white/70 transition-colors duration-200 uppercase tracking-widest"
            >
              About Us
            </Link>
            <span className="text-white/25 text-xs">/</span>
            <span className="font-sans text-xs font-semibold text-white/70 uppercase tracking-widest">
              Our Approach
            </span>
          </nav>

          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-7 h-px bg-white/35 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/45">
              Our Approach
            </span>
          </div>
          <h1
            className="font-display font-semibold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Froebelian principles.<br />
            <span className="text-primary-200">Curious by nature.</span>
          </h1>
          <p className="font-sans text-white/60 text-lg leading-relaxed max-w-xl">
            Choosing the right nursery is about finding a place that aligns with your values. At Little Haven,
            we base our approach on Froebelian principles and the Curiosity Approach — fostering independent,
            confident, and happy learners.
          </p>
        </motion.div>

        {/* Principle cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + index * 0.1, ease }}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300"
            >
              <div className={`inline-flex w-9 h-9 rounded-xl items-center justify-center mb-4 ${principle.iconBg} ${principle.iconColor}`}>
                <div className="w-4 h-4">{principle.icon}</div>
              </div>
              <h3 className="font-display text-base font-semibold text-white mb-2 leading-tight">
                {principle.title}
              </h3>
              <p className="font-sans text-xs text-white/55 leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

ApproachIntro.displayName = "ApproachIntro";
export default memo(ApproachIntro);
