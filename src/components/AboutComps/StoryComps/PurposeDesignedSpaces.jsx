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

const SPACES = [
  {
    title: "Natural Light & Air",
    body: "Large windows and open spaces flood our nurseries with natural light, creating a bright and welcoming atmosphere children love coming into.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
  {
    title: "Homely Atmosphere",
    body: "Our spaces feel warm and inviting — like a home away from home — so children settle in quickly and feel comfortable throughout the day.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Dedicated Learning Zones",
    body: "Each area is purposefully structured to support different types of learning — reading corners, sensory tables, construction areas, and creative studios.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Outdoor Exploration",
    body: "Safe and engaging outdoor spaces encourage movement, discovery, and a genuine connection with the natural world across all seasons.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 22V12m0 0C12 7 7 4 2 4c0 5 3 9 10 8m0 0c0-5 5-8 10-8-1 5-5 9-10 8" />
      </svg>
    ),
  },
  {
    title: "Creative Spaces",
    body: "Art, music, and role-play areas give children the tools to develop imagination, creative expression, and the confidence to make things their own.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 013.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: "Safe & Stimulating",
    body: "Every detail — from furniture height to play equipment — is chosen with both safety and learning potential in mind. Nothing is there by accident.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

/* ── PurposeDesignedSpaces ───────────────────────────────────────── */
const PurposeDesignedSpaces = () => (
  <section className="py-20 sm:py-28 bg-white">
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
            Our Spaces
          </span>
        </div>
        <h2
          className="font-display font-semibold text-neutral-900 leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          Designed around<br />
          <span className="text-teal-600 italic">how children learn.</span>
        </h2>
        <p className="font-sans text-neutral-500 text-lg leading-relaxed">
          Our nurseries are carefully designed to be safe, engaging, and inspiring. Every space
          encourages creativity, exploration, and a sense of belonging.
        </p>
      </motion.div>

      {/* Spaces grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SPACES.map((space, i) => (
          <motion.div
            key={space.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.08, ease }}
            className="p-6 bg-white rounded-2xl shadow-soft border border-neutral-100 hover:shadow-medium transition-shadow duration-300"
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${space.iconBg} ${space.iconColor}`}
            >
              <div className="w-5 h-5">{space.icon}</div>
            </div>
            <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2 leading-snug">
              {space.title}
            </h3>
            <p className="font-sans text-sm text-neutral-600 leading-relaxed">{space.body}</p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

PurposeDesignedSpaces.displayName = "PurposeDesignedSpaces";
export default memo(PurposeDesignedSpaces);
