import { memo } from "react";
import { motion } from "framer-motion";
import ChairRoom from "../../../assets/ChairRoom.jpg";

const ease = [0.22, 1, 0.36, 1];

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const FEATURES = [
  {
    title: "Personalised Learning",
    description: "Our approach adapts to each child's strengths and interests, making learning meaningful and engaging for every individual.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Confidence & Independence",
    description: "By encouraging decision-making and self-reflection, children gain confidence and develop self-discipline at their own pace.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

/* ── UniqueChildren ───────────────────────────────────────────────── */
const UniqueChildren = () => (
  <section
    className="relative overflow-hidden py-20 sm:py-28"
    style={{ background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)" }}
  >
    {/* Dot texture */}
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.05]"
      style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
    />
    {/* Glow */}
    <div
      aria-hidden="true"
      className="absolute left-0 bottom-0 w-[400px] h-[400px] pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(125,178,255,0.08) 0%, transparent 70%)" }}
    />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-7 h-px bg-white/35 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/45">
                Self-Directed Learning
              </span>
            </div>
            <h2
              className="font-display font-semibold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              Every child<br />
              <span className="text-primary-200 italic">is unique.</span>
            </h2>
            <p className="font-sans text-white/60 text-lg leading-relaxed">
              No two children learn the same way. At Little Haven, we embrace self-directed learning and allow
              children to follow their natural interests, building confidence from the inside out.
            </p>
          </motion.div>

          <div className="space-y-4">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 + index * 0.1, ease }}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/[0.15] transition-colors duration-300"
              >
                <div className={`inline-flex w-11 h-11 rounded-xl items-center justify-center mb-4 flex-shrink-0 ${feature.iconBg} ${feature.iconColor}`}>
                  <div className="w-5 h-5">{feature.icon}</div>
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2 leading-tight">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-white/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.15, ease }}
          className="relative"
        >
          <div className="absolute -inset-3 bg-white/5 rounded-3xl rotate-2 -z-10" aria-hidden="true" />
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-strong">
            <img
              src={ChairRoom}
              alt="Children's activity room where each child can explore their unique interests"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

UniqueChildren.displayName = "UniqueChildren";
export default memo(UniqueChildren);
