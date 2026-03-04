import { memo } from "react";
import { motion } from "framer-motion";
import ChildrenGardening from "../../../assets/ChildrenGardening.jpg";

const ease = [0.22, 1, 0.36, 1];

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const FEATURES = [
  {
    n: "01",
    title: "Creative Exploration",
    description: "Providing open-ended materials that allow children to create, imagine, and innovate — with no fixed outcome and no wrong answers.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Music & Movement",
    description: "Encouraging self-expression and rhythm through songs, dance, and interactive play that builds coordination and joy.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Open-Ended Play",
    description: "Using loose parts and natural materials to encourage imaginative play, discovery, and self-directed problem-solving.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Storytelling & Role Play",
    description: "Helping children develop language skills, social understanding, and confidence through imaginative role-playing activities.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
];

/* ── PlayCreativity ───────────────────────────────────────────────── */
const PlayCreativity = () => (
  <section className="py-20 sm:py-28" style={{ background: "#faf8f4" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header + image row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">

        {/* Left: header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-teal-300 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-teal-600">
              Play &amp; Creativity
            </span>
          </div>
          <h2
            className="font-display font-semibold text-neutral-900 leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
          >
            Learning through<br />
            <span className="text-teal-600 italic">play, every day.</span>
          </h2>
          <p className="font-sans text-neutral-500 text-lg leading-relaxed">
            Play is not just a pastime — it&apos;s the way children learn, explore, and express
            themselves. Our approach nurtures creativity and problem-solving skills in every activity.
          </p>
        </motion.div>

        {/* Right: image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.15, ease }}
          className="relative"
        >
          <div className="absolute -inset-3 bg-teal-50 rounded-3xl rotate-1 -z-10" aria-hidden="true" />
          <div className="relative rounded-2xl overflow-hidden shadow-strong aspect-[4/3]">
            <img
              src={ChildrenGardening}
              alt="Children exploring and playing creatively outdoors at Little Haven"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 to-transparent" />
          </div>
        </motion.div>

      </div>

      {/* Feature cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {FEATURES.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.09, ease }}
            className="relative bg-white rounded-2xl p-7 shadow-soft border border-neutral-100 hover:shadow-medium transition-shadow duration-300 overflow-hidden group"
          >
            {/* Muted number — decorative */}
            <span
              aria-hidden="true"
              className="absolute top-4 right-5 font-display font-bold text-neutral-100 leading-none select-none"
              style={{ fontSize: "3rem" }}
            >
              {feature.n}
            </span>

            <div className={`inline-flex w-11 h-11 rounded-xl items-center justify-center mb-5 ${feature.iconBg} ${feature.iconColor}`}>
              <div className="w-5 h-5">{feature.icon}</div>
            </div>
            <h3 className="font-display text-base font-semibold text-neutral-900 mb-2 leading-tight pr-8">
              {feature.title}
            </h3>
            <p className="font-sans text-sm text-neutral-600 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

PlayCreativity.displayName = "PlayCreativity";
export default memo(PlayCreativity);
