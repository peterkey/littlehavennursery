import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

/* ── CTA button — supports internal (Link) and external (a) ──────── */
const CTAButton = ({ href, to, icon, children, variant = "primary", ariaLabel, fullWidth = false }) => {
  const base = `inline-flex items-center gap-3 px-5 py-3.5 rounded-full font-semibold font-sans text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${fullWidth ? "w-full justify-center" : ""}`;

  const variants = {
    primary: "bg-white text-primary-700 hover:bg-primary-50 focus:ring-white shadow-medium hover:shadow-strong",
    secondary: "border border-white/25 text-white/80 hover:bg-white/10 hover:text-white hover:border-white/40 focus:ring-white/50",
    accent: "bg-teal-400/15 text-teal-200 border border-teal-400/30 hover:bg-teal-400/25 hover:border-teal-400/50 focus:ring-teal-300",
  };

  const iconEl = icon ? <div className="w-4 h-4 flex-shrink-0" aria-hidden="true">{icon}</div> : null;

  if (to) {
    return (
      <Link to={to} className={`${base} ${variants[variant]}`} aria-label={ariaLabel}>
        {iconEl}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <a href={href} className={`${base} ${variants[variant]}`} aria-label={ariaLabel}>
      {iconEl}
      <span>{children}</span>
    </a>
  );
};

const calendarIcon = (
  <svg viewBox="0 0 24 24" {...sp}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const phoneIcon = (
  <svg viewBox="0 0 24 24" {...sp}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.34 12 19.79 19.79 0 011.27 3.45 2 2 0 013.27 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.4a16 16 0 006.54 6.54l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const envelopeIcon = (
  <svg viewBox="0 0 24 24" {...sp}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const locationIcon = (
  <svg viewBox="0 0 24 24" {...sp}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

/* ── CallToAction ─────────────────────────────────────────────────── */
const CallToAction = memo(({ className = "", compact = false }) => {
  const ctaData = [
    {
      icon: calendarIcon,
      to: "/booking",
      text: "Book a Viewing",
      variant: "primary",
      ariaLabel: "Book a nursery viewing",
    },
    {
      icon: phoneIcon,
      href: "tel:02920891825",
      text: "Call 029 2089 1825",
      variant: "accent",
      ariaLabel: "Call Little Haven Nursery",
    },
    {
      icon: envelopeIcon,
      href: "mailto:learn@littlehavennursery.co.uk",
      text: "Send an Enquiry",
      variant: "secondary",
      ariaLabel: "Send an email enquiry",
    },
  ];

  /* Compact mode — just two buttons inline */
  if (compact) {
    return (
      <div className={`flex flex-wrap gap-3 ${className}`}>
        {ctaData.slice(0, 2).map((cta, i) => (
          <CTAButton key={i} {...cta}>
            {cta.text}
          </CTAButton>
        ))}
      </div>
    );
  }

  /* Full section mode */
  return (
    <section
      className={`relative overflow-hidden py-20 sm:py-24 ${className}`}
      style={{
        background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)",
      }}
    >
      {/* Dot texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
      />

      {/* Ambient glow */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[300px]"
          style={{
            background: "radial-gradient(ellipse, rgba(125,178,255,0.13) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left: heading + info strip */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-7 h-px bg-white/30 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40">
                Get in Touch
              </span>
            </div>

            <h2
              className="font-display font-semibold text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Ready to join our<br />
              <span className="text-primary-200 italic">nursery family?</span>
            </h2>

            <p className="font-sans text-white/55 text-lg leading-relaxed mb-9">
              Get in touch today to arrange a visit and see why families across Cardiff choose Little Haven for their children.
            </p>

            {/* Info strip */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <div className="w-4 h-4 text-white/25 mb-2" aria-hidden="true">{locationIcon}</div>
                <p className="font-sans text-xs font-semibold text-white/65">Locations</p>
                <p className="font-sans text-xs text-white/35 mt-0.5">3 across Cardiff</p>
              </div>
              <div>
                <div className="w-4 h-4 text-white/25 mb-2" aria-hidden="true">{phoneIcon}</div>
                <p className="font-sans text-xs font-semibold text-white/65">Phone</p>
                <p className="font-sans text-xs text-white/35 mt-0.5">029 2089 1825</p>
              </div>
              <div>
                <div className="w-4 h-4 text-white/25 mb-2" aria-hidden="true">{calendarIcon}</div>
                <p className="font-sans text-xs font-semibold text-white/65">Hours</p>
                <p className="font-sans text-xs text-white/35 mt-0.5">7:30 – 17:30, Mon–Fri</p>
              </div>
            </div>
          </div>

          {/* Right: action buttons */}
          <div className="space-y-3">
            {ctaData.map((cta, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
              >
                <CTAButton {...cta} fullWidth>
                  {cta.text}
                </CTAButton>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

CallToAction.displayName = "CallToAction";
export default CallToAction;
