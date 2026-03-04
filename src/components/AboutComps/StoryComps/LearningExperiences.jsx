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

const EXPERIENCES = [
  {
    title: "Creative Exploration",
    body: "Art, music, and storytelling help children express themselves and develop imagination in their own way.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Physical Play",
    body: "Movement and outdoor activities build coordination, balance, and confidence — bodies and minds developing together.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <circle cx="12" cy="5" r="1" fill="currentColor" />
        <path d="M20 5h-7l-1.4 2.8L9 5H2" />
        <path d="M9 5l-2 9h10L15 5" />
        <path d="M12 14v7" />
        <path d="M9 21h6" />
      </svg>
    ),
  },
  {
    title: "Cognitive Development",
    body: "Problem-solving and exploratory activities encourage independent thinking, decision-making, and resilience.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Social Interaction",
    body: "Group activities teach collaboration, communication, and empathy — the foundations of strong relationships throughout life.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Nature-Based Learning",
    body: "Outdoor and nature-rich experiences cultivate a sense of wonder and environmental awareness from the very earliest age.",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 22V12m0 0C12 7 7 4 2 4c0 5 3 9 10 8m0 0c0-5 5-8 10-8-1 5-5 9-10 8" />
      </svg>
    ),
  },
  {
    title: "Early Literacy",
    body: "Storytime, phonics, and early reading activities build language skills and a love of books that lasts a lifetime.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

/* ── LearningExperiences ─────────────────────────────────────────── */
const LearningExperiences = () => (
  <section className="py-20 sm:py-28" style={{ background: "#faf8f4" }}>
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
            What We Offer
          </span>
        </div>
        <h2
          className="font-display font-semibold text-neutral-900 leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          Rich, varied<br />
          <span className="text-primary-600 italic">learning experiences.</span>
        </h2>
        <p className="font-sans text-neutral-500 text-lg leading-relaxed">
          Every child is unique, and so is their learning journey. Our activities are designed to
          let children explore, create, and grow through hands-on discovery.
        </p>
      </motion.div>

      {/* Experience cards — 2-col left-aligned list on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease }}
            className="flex gap-4 p-5 bg-white rounded-2xl shadow-soft border border-neutral-100 hover:shadow-medium transition-shadow duration-300"
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${exp.iconBg} ${exp.iconColor}`}
            >
              <div className="w-5 h-5">{exp.icon}</div>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-base font-semibold text-neutral-900 mb-1.5 leading-snug">
                {exp.title}
              </h3>
              <p className="font-sans text-sm text-neutral-600 leading-relaxed">{exp.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

LearningExperiences.displayName = "LearningExperiences";
export default memo(LearningExperiences);
