import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

const sp = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const TRAINING = [
  {
    title: "Food Hygiene",
    body: "Safe preparation, handling, and storage of food for young children.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
      </svg>
    ),
  },
  {
    title: "Paediatric First Aid",
    body: "Trained and certified to respond calmly and effectively to medical emergencies.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Safeguarding",
    body: "Protecting children's wellbeing — recognising, responding to, and reporting concerns.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Speech & Language",
    body: "Identifying early language needs and supporting communication development.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Child-Centred Learning",
    body: "Facilitating self-directed exploration and building confidence through play.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a6 6 0 0112 0v2" />
      </svg>
    ),
  },
  {
    title: "Wellbeing & Involvement",
    body: "Supporting emotional security and active engagement in every child.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Health & Safety",
    body: "Maintaining a consistently safe, well-maintained environment for all.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Observations & Assessments",
    body: "Tracking each child's development with care, accuracy, and insight.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

/* ── StaffTraining ───────────────────────────────────────────────── */
const StaffTraining = () => (
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
            Professional Standards
          </span>
        </div>
        <h2
          className="font-display font-semibold text-neutral-900 leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          Trained in everything<br />
          <span className="text-primary-600 italic">your child needs.</span>
        </h2>
        <p className="font-sans text-neutral-500 text-lg leading-relaxed">
          Our commitment to continuous learning means every practitioner is trained, certified, and
          always developing — so you can trust your child is in expert hands.
        </p>
      </motion.div>

      {/* Training grid — compact two-column badge cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {TRAINING.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06, ease }}
            className="bg-white rounded-2xl p-5 shadow-soft border border-neutral-100 flex gap-3.5 hover:shadow-medium transition-shadow duration-300"
          >
            <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-500">
              <div className="w-4 h-4">{item.icon}</div>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-neutral-900 mb-1 leading-snug">
                {item.title}
              </h3>
              <p className="font-sans text-xs text-neutral-500 leading-relaxed">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease }}
        className="rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative px-8 py-10 sm:px-12 sm:py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="font-display font-semibold text-white text-xl leading-snug mb-2">
              Ready to find out if Little Haven is right for your family?
            </p>
            <p className="font-sans text-white/55 text-sm leading-relaxed">
              Visit us, ask questions, and meet the team — we&apos;d love to welcome you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link
              to="/admissions"
              className="inline-flex justify-center items-center gap-2 px-5 py-3 bg-white text-primary-700 font-semibold font-sans text-sm rounded-full hover:bg-primary-50 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              How to Apply
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center items-center gap-2 px-5 py-3 border border-white/25 text-white font-semibold font-sans text-sm rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </motion.div>

    </div>
  </section>
);

StaffTraining.displayName = "StaffTraining";
export default memo(StaffTraining);
