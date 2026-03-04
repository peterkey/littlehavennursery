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

const SERVICES = [
  {
    title: "Supporting Families",
    body: "We have worked with thousands of families across Cardiff, providing accessible early education and fostering strong parent-practitioner relationships built on trust and open communication.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Early Years Education",
    body: "Quality learning experiences are our foundation. We focus on building confidence, creativity, and curiosity — the qualities that make children lifelong learners from the very start.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Community Impact",
    body: "Through years of involvement in Flying Start and public early years initiatives, we have helped build supportive communities where every child has the opportunity to thrive.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const IMPACT_STATS = [
  { value: "20+", label: "Years serving Cardiff families" },
  { value: "3", label: "Nursery settings" },
  { value: "100s", label: "Of children each year" },
];

/* ── DedicatedService ────────────────────────────────────────────── */
const DedicatedService = () => (
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
    {/* Ambient glow */}
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
            Dedicated Service
          </span>
        </div>
        <h2
          className="font-display font-semibold text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          More than a nursery —<br />
          <span className="text-primary-200 italic">a community commitment.</span>
        </h2>
        <p className="font-sans text-white/60 text-lg leading-relaxed">
          Our roots are in public service. That community spirit continues to shape how we run
          every nursery today.
        </p>
      </motion.div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1, ease }}
            className="bg-white/[0.06] border border-white/10 rounded-2xl p-7 backdrop-blur-sm"
          >
            <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-5 text-white/75">
              <div className="w-5 h-5">{service.icon}</div>
            </div>
            <h3 className="font-display text-lg font-semibold text-white mb-3 leading-snug">
              {service.title}
            </h3>
            <p className="font-sans text-sm text-white/60 leading-relaxed">{service.body}</p>
          </motion.div>
        ))}
      </div>

      {/* Impact stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease }}
        className="grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden"
      >
        {IMPACT_STATS.map((stat) => (
          <div key={stat.label} className="bg-white/[0.04] px-6 py-7 text-center">
            <p
              className="font-display font-semibold text-primary-200 leading-none mb-2"
              style={{ fontSize: "2.25rem" }}
            >
              {stat.value}
            </p>
            <p className="font-sans text-white/50 text-sm">{stat.label}</p>
          </div>
        ))}
      </motion.div>

    </div>
  </section>
);

DedicatedService.displayName = "DedicatedService";
export default memo(DedicatedService);
