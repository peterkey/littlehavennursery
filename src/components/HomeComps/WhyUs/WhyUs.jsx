import { memo } from "react";
import { motion } from "framer-motion";

/* ── Inline SVG icon atoms ────────────────────────────────────────── */
const sp = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const IconShield = () => (
  <svg viewBox="0 0 24 24" {...sp}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);
const IconUsers = () => (
  <svg viewBox="0 0 24 24" {...sp}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconStar = () => (
  <svg viewBox="0 0 24 24" {...sp}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconHeart = () => (
  <svg viewBox="0 0 24 24" {...sp}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" {...sp}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconMessage = () => (
  <svg viewBox="0 0 24 24" {...sp}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

/* ── Feature data ────────────────────────────────────────────────── */
const FEATURES = [
  {
    n: "01",
    Icon: IconShield,
    title: "Safe & Secure",
    description:
      "A warm, protected environment where your child's safety is our absolute priority — every single day.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
  },
  {
    n: "02",
    Icon: IconUsers,
    title: "Qualified & Caring Practitioners",
    description:
      "Every member of our team holds recognised childcare qualifications and shares a genuine passion for nurturing.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    n: "03",
    Icon: IconStar,
    title: "Play-Based Learning",
    description:
      "Inspired by Froebelian principles, we create rich, open-ended play experiences that build confidence and creativity.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
  },
  {
    n: "04",
    Icon: IconHeart,
    title: "Healthy Meals Provided",
    description:
      "Freshly prepared, nutritious meals and snacks keep little ones energised and build lifelong healthy habits.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    n: "05",
    Icon: IconClock,
    title: "Reliable Hours",
    description:
      "Consistent weekday care from 7:30 to 17:30, with holiday club available — built around working family life.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
  },
  {
    n: "06",
    Icon: IconMessage,
    title: "Strong Parent Partnerships",
    description:
      "We work with you, not just for your child. Open, honest communication keeps you involved every step of the way.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
];

/* ── Feature card ────────────────────────────────────────────────── */
const FeatureCard = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    className="relative bg-white rounded-2xl p-7 shadow-soft hover:shadow-medium transition-all duration-300 group overflow-hidden"
  >
    {/* Muted number — decorative background element */}
    <span
      aria-hidden="true"
      className="absolute top-5 right-5 font-display font-bold text-neutral-100 leading-none select-none group-hover:text-neutral-200/70 transition-colors duration-300"
      style={{ fontSize: "3.5rem" }}
    >
      {feature.n}
    </span>

    {/* Icon */}
    <div
      className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5 flex-shrink-0 ${feature.iconBg} ${feature.iconColor}`}
    >
      <div className="w-5 h-5">
        <feature.Icon />
      </div>
    </div>

    {/* Title */}
    <h3 className="font-display text-lg font-semibold text-neutral-900 mb-3 leading-tight pr-10">
      {feature.title}
    </h3>

    {/* Description */}
    <p className="font-sans text-sm text-neutral-600 leading-relaxed">
      {feature.description}
    </p>
  </motion.div>
);

/* ── WhyUs section ───────────────────────────────────────────────── */
const WhyUs = () => (
  <section className="py-20 sm:py-28" style={{ background: "#faf8f4" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section header — left-aligned, editorial */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl mb-14"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
            Why Choose Us
          </span>
        </div>
        <h2
          className="font-display font-semibold text-neutral-900 leading-tight mb-4"
          style={{ fontSize: "clamp(2.1rem, 3.5vw, 3rem)" }}
        >
          Six promises we make<br />to every family.
        </h2>
        <p className="font-sans text-neutral-500 text-lg leading-relaxed">
          A nurturing space where your child can play, learn, and grow with confidence — and where you always feel like a partner.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map((feature, index) => (
          <FeatureCard key={feature.n} feature={feature} index={index} />
        ))}
      </div>

    </div>
  </section>
);

WhyUs.displayName = "WhyUs";
export default memo(WhyUs);
