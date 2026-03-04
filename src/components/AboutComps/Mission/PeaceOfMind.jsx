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

const SAFETY = [
  {
    title: "Secure Learning Spaces",
    body: "Our indoor and outdoor areas are designed to be safe, stimulating, and fully secure — allowing children to explore freely and parents to relax.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
  },
  {
    title: "Strict Access Control",
    body: "Only authorised parents and guardians may enter our premises. Our secure entry system ensures a safe environment at all times.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
  },
];

const COMMUNICATION = [
  {
    title: "Real-Time Updates",
    body: "Stay informed about your child&apos;s activities, meals, and learning progress throughout the day — you&apos;re always in the loop.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    title: "ParentZone App",
    body: "Our ParentZone app delivers updates, photos, and messages directly to your phone — a window into your child&apos;s day, whenever you need it.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
];

/* ── PeaceOfMind ─────────────────────────────────────────────────── */
const PeaceOfMind = () => (
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
            Peace of Mind
          </span>
        </div>
        <h2
          className="font-display font-semibold text-neutral-900 leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          Secure, safe, and<br />
          <span className="text-primary-600 italic">always in touch.</span>
        </h2>
        <p className="font-sans text-neutral-500 text-lg leading-relaxed">
          Your child&apos;s safety and happiness are our top priorities. We provide a secure,
          nurturing environment while keeping you informed every step of the way.
        </p>
      </motion.div>

      {/* Two groups side-by-side on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

        {/* Safety */}
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-5">
            Safety &amp; Security
          </p>
          <div className="space-y-4">
            {SAFETY.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09, ease }}
                className="bg-white rounded-2xl p-6 shadow-soft border border-neutral-100 flex gap-4 hover:shadow-medium transition-shadow duration-300"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconBg} ${item.iconColor}`}
                >
                  <div className="w-5 h-5">{item.icon}</div>
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-neutral-900 mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-neutral-600 leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Communication */}
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-5">
            Frequent Communication
          </p>
          <div className="space-y-4">
            {COMMUNICATION.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09, ease }}
                className="bg-white rounded-2xl p-6 shadow-soft border border-neutral-100 flex gap-4 hover:shadow-medium transition-shadow duration-300"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconBg} ${item.iconColor}`}
                >
                  <div className="w-5 h-5">{item.icon}</div>
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-neutral-900 mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-neutral-600 leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* ParentZone app download */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease }}
        className="bg-white rounded-2xl p-7 shadow-soft border border-neutral-100"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-teal-600 mb-1">
              Download Free
            </p>
            <h3 className="font-display text-xl font-semibold text-neutral-900 mb-1.5">
              ParentZone App
            </h3>
            <p className="font-sans text-sm text-neutral-500 leading-relaxed max-w-md">
              Stay connected with your child&apos;s daily activities, photos, and progress reports —
              all in one secure place.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="https://apps.apple.com/gb/app/parentzone/id1439187506"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-900 text-white font-semibold font-sans text-sm rounded-full hover:bg-neutral-800 transition-colors duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=me.parentzone.live&hl=en_GB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-neutral-200 text-neutral-700 font-semibold font-sans text-sm rounded-full hover:bg-neutral-50 transition-colors duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  </section>
);

PeaceOfMind.displayName = "PeaceOfMind";
export default memo(PeaceOfMind);
