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

const ETHOS = [
  {
    title: "Learning Through Play",
    body: "We follow the philosophy of 'learning to play, playing to learn' — children develop essential skills through meaningful, joyful experiences rather than rote instruction.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Child-Led Exploration",
    body: "Children are naturally curious. Our practitioners facilitate discovery rather than dictate outcomes — giving children space to lead their own learning journey.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Creativity & Imagination",
    body: "Art, music, storytelling, and open-ended play give children the freedom to express themselves — building confidence, self-discipline, and problem-solving from the inside out.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
        <path d="M17.5 12c0 2.485-2.462 4.5-5.5 4.5S6.5 14.485 6.5 12" />
      </svg>
    ),
  },
  {
    title: "A Nurturing Environment",
    body: "We create warm, safe, and intellectually stimulating spaces where children feel genuinely valued — forming close bonds with practitioners who know and cherish each child.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
];

/* ── LittleHavenEthos ────────────────────────────────────────────── */
const LittleHavenEthos = () => (
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
          <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
            Our Ethos
          </span>
        </div>
        <h2
          className="font-display font-semibold text-neutral-900 leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          More than childcare —<br />
          <span className="text-primary-600 italic">a way of seeing childhood.</span>
        </h2>
        <p className="font-sans text-neutral-500 text-lg leading-relaxed">
          At Little Haven, we believe early childhood is not preparation for life — it&apos;s a precious
          part of it. Everything we do flows from that belief.
        </p>
      </motion.div>

      {/* Ethos grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
        {ETHOS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.09, ease }}
            className="flex gap-5 p-6 bg-white rounded-2xl shadow-soft border border-neutral-100 hover:shadow-medium transition-shadow duration-300"
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconBg} ${item.iconColor}`}
            >
              <div className="w-5 h-5">{item.icon}</div>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-neutral-600 leading-relaxed">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Philosophy pull-quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease }}
        className="border-l-4 border-primary-200 pl-7 py-2 max-w-3xl"
      >
        <p className="font-display text-xl text-neutral-700 leading-relaxed italic">
          &ldquo;Learning to play, playing to learn.&rdquo;
        </p>
        <p className="font-sans text-sm text-neutral-400 mt-3 font-semibold uppercase tracking-widest">
          The Little Haven Motto
        </p>
      </motion.div>

    </div>
  </section>
);

LittleHavenEthos.displayName = "LittleHavenEthos";
export default memo(LittleHavenEthos);
