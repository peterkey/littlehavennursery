import { memo } from "react";
import { motion } from "framer-motion";
import TeaParty from "../../../assets/TeaParty.jpg";

const ease = [0.22, 1, 0.36, 1];

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const FEATURES = [
  {
    title: "The Power of Play",
    description: "Play is not just fun — it's how children process the world, develop social skills, and explore their creativity.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Exploring the World",
    description: "Whether indoors or outdoors, we encourage children to engage with nature and ask questions about the world around them.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

/* ── ChildhoodMatters ─────────────────────────────────────────────── */
const ChildhoodMatters = () => (
  <section className="py-20 sm:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left: copy + cards */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
                Our Approach
              </span>
            </div>
            <h2
              className="font-display font-semibold text-neutral-900 leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Childhood is a<br />
              <span className="text-primary-600 italic">special time.</span>
            </h2>
            <p className="font-sans text-neutral-500 text-lg leading-relaxed">
              Childhood is not just preparation for adulthood — it&apos;s a valuable time in itself.
              Our goal is to nurture a love for learning that lasts a lifetime.
            </p>
          </motion.div>

          <div className="space-y-4">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 + index * 0.1, ease }}
                className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-6 hover:shadow-medium transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`inline-flex w-11 h-11 rounded-xl items-center justify-center flex-shrink-0 ${feature.iconBg} ${feature.iconColor}`}>
                    <div className="w-5 h-5">{feature.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-neutral-900 mb-1.5 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.2, ease }}
          className="relative"
        >
          <div className="absolute -inset-3 bg-primary-50 rounded-3xl rotate-2 -z-10" aria-hidden="true" />
          <div className="relative rounded-2xl overflow-hidden shadow-strong aspect-[4/3]">
            <img
              src={TeaParty}
              alt="Children enjoying tea party activities at Little Haven"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent" />
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

ChildhoodMatters.displayName = "ChildhoodMatters";
export default memo(ChildhoodMatters);
