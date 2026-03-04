import { memo } from "react";
import { motion } from "framer-motion";
import Room from "../../../assets/Room.jpg";

const ease = [0.22, 1, 0.36, 1];

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const FEATURES = [
  {
    title: "Family Partnerships",
    description: "We work closely with families to ensure consistent care and support for each child's development journey.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Caring Practitioners",
    description: "Our dedicated practitioners build strong bonds with children, providing emotional security and support.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Peer Relationships",
    description: "We foster positive interactions between children, helping them develop social skills and empathy.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Community Connection",
    description: "Children learn about their place in the wider world through community engagement and cultural activities.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

/* ── RelationshipsMatter ──────────────────────────────────────────── */
const RelationshipsMatter = () => (
  <section className="py-20 sm:py-28" style={{ background: "#faf8f4" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Left: image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease }}
          className="order-2 lg:order-1 relative"
        >
          <div className="absolute -inset-3 bg-teal-50 rounded-3xl -rotate-2 -z-10" aria-hidden="true" />
          <div className="relative rounded-2xl overflow-hidden shadow-strong aspect-[4/3]">
            <img
              src={Room}
              alt="A welcoming room where children build relationships and learn together"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 to-transparent" />
          </div>
        </motion.div>

        {/* Right: copy + cards */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-teal-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-teal-600">
                Connection &amp; Care
              </span>
            </div>
            <h2
              className="font-display font-semibold text-neutral-900 leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Relationships are<br />
              <span className="text-teal-600 italic">the foundation.</span>
            </h2>
            <p className="font-sans text-neutral-500 text-lg leading-relaxed">
              Children develop best when they have strong, positive relationships with their families,
              practitioners, peers, and the world around them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 + index * 0.08, ease }}
                className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-5 hover:shadow-medium transition-shadow duration-300"
              >
                <div className={`inline-flex w-10 h-10 rounded-xl items-center justify-center mb-4 ${feature.iconBg} ${feature.iconColor}`}>
                  <div className="w-5 h-5">{feature.icon}</div>
                </div>
                <h3 className="font-display text-base font-semibold text-neutral-900 mb-1.5 leading-tight">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-neutral-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

RelationshipsMatter.displayName = "RelationshipsMatter";
export default memo(RelationshipsMatter);
