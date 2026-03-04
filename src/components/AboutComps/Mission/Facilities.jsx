import { memo } from "react";
import { motion } from "framer-motion";
import Building from "../../../assets/Building.jpg";

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
    title: "High-Quality Furnishings",
    body: "Only the best quality furniture and materials — chosen for durability, safety, and their ability to inspire play.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Safe, Inspiring Spaces",
    body: "Every space is designed with children in mind — safe enough to explore freely, stimulating enough to spark curiosity.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Stimulating Play Areas",
    body: "Dedicated areas for creative play, physical activity, reading, sensory exploration, and outdoor discovery.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

/* ── Facilities ──────────────────────────────────────────────────── */
const Facilities = () => (
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
      className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
      style={{
        background: "radial-gradient(circle, rgba(125,178,255,0.1) 0%, transparent 70%)",
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
            Our Facilities
          </span>
        </div>
        <h2
          className="font-display font-semibold text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          A space designed<br />
          <span className="text-primary-200 italic">for childhood to flourish.</span>
        </h2>
        <p className="font-sans text-white/60 text-lg leading-relaxed">
          Our custom-designed nursery has been thoughtfully crafted to provide the perfect
          environment for children to learn, grow, and explore at every stage.
        </p>
      </motion.div>

      {/* Two-column: text + photo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="space-y-5"
        >
          <h3 className="font-display text-2xl font-semibold text-white leading-snug">
            Custom-designed — top to bottom.
          </h3>
          <p className="font-sans text-white/65 leading-relaxed">
            Our 2018 refit was a complete reimagining of the space — carried out in partnership
            with Community Playthings, leaders in creating educational environments. Every area
            was purpose-built to inspire curiosity and support children&apos;s development.
          </p>
          <p className="font-sans text-white/50 leading-relaxed">
            From the warm, homely baby rooms to the vibrant outdoor areas, every detail has been
            chosen with intentionality. The result is a nursery that truly feels like a second home.
          </p>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="relative"
        >
          {/* Decorative offset */}
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-2xl border border-white/10"
          />
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-strong">
            <img
              src={Building}
              alt="Little Haven Nursery — modern, purpose-designed facilities"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {FEATURES.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.09, ease }}
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

    </div>
  </section>
);

Facilities.displayName = "Facilities";
export default memo(Facilities);
