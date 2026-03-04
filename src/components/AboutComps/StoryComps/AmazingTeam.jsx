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

const ROLES = [
  {
    title: "Nursery Managers",
    body: "Our managers oversee day-to-day operations, ensuring a safe, consistent, and enriching environment that lives up to our values every single day.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Deputy Managers",
    body: "Working alongside the managers, our deputies bring hands-on expertise and provide calm, experienced leadership across all sessions.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Childcare Practitioners",
    body: "The heart of our nurseries. Qualified and passionate, our practitioners build warm, trusting relationships with every child in their care.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Support Staff",
    body: "From administrators to kitchen staff, our support team keeps everything running smoothly so that practitioners can focus fully on the children.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Trainees & Apprentices",
    body: "We invest in the next generation of childcare professionals, mentoring trainees and apprentices through structured, supportive development programmes.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path d="M12 14V9" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    title: "Ongoing Professional Development",
    body: "Our whole team continuously grows through specialised training in early childhood education — because great care requires constant learning.",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

/* ── AmazingTeam ─────────────────────────────────────────────────── */
const AmazingTeam = () => (
  <section
    className="py-20 sm:py-28 relative overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)",
    }}
  >
    {/* Dot texture */}
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
        backgroundSize: "28px 28px",
      }}
    />
    {/* Ambient glow */}
    <div
      aria-hidden="true"
      className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
      style={{
        background: "radial-gradient(circle, rgba(125,178,255,0.1) 0%, transparent 70%)",
      }}
    />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="max-w-2xl mb-14"
      >
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-7 h-px bg-white/35 flex-shrink-0" />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/45">
            Our People
          </span>
        </div>
        <h2
          className="font-display font-semibold text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          An extraordinary<br />
          <span className="text-primary-200 italic">team of people.</span>
        </h2>
        <p className="font-sans text-white/60 text-lg leading-relaxed">
          Our practitioners and support staff are the soul of Little Haven. Each one chosen for
          their warmth, expertise, and genuine love of working with children.
        </p>
      </motion.div>

      {/* Team roles grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ROLES.map((role, i) => (
          <motion.div
            key={role.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease }}
            className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5 text-white/70">
              <div className="w-5 h-5">{role.icon}</div>
            </div>
            <h3 className="font-display text-base font-semibold text-white mb-2 leading-snug">
              {role.title}
            </h3>
            <p className="font-sans text-sm text-white/55 leading-relaxed">{role.body}</p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

AmazingTeam.displayName = "AmazingTeam";
export default memo(AmazingTeam);
