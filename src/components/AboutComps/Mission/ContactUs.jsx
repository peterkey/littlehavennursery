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

const CONTACTS = [
  {
    title: "Email Us",
    body: "learn@littlehavennursery.co.uk",
    href: "mailto:learn@littlehavennursery.co.uk",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: "Call Us",
    body: "02920 891 825",
    href: "tel:02920891825",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 14.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.8 4h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 11.9a16 16 0 006.29 6.29l1.06-1.06a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    title: "Visit Us",
    body: "Little Haven Nursery, Cardiff",
    href: "https://maps.google.com/?q=Little+Haven+Nursery+Cardiff",
    isExternal: true,
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

/* ── ContactUs ────────────────────────────────────────────────────── */
const ContactUs = () => (
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
    {/* Glow */}
    <div
      aria-hidden="true"
      className="absolute right-0 bottom-0 w-[600px] h-[600px] pointer-events-none"
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
            Get in Touch
          </span>
        </div>
        <h2
          className="font-display font-semibold text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          We&apos;d love to hear<br />
          <span className="text-primary-200 italic">from your family.</span>
        </h2>
        <p className="font-sans text-white/60 text-lg leading-relaxed">
          Have questions or want to see our nursery in person? We&apos;d love to hear from
          you — and show you around our wonderful facilities.
        </p>
      </motion.div>

      {/* Contact cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {CONTACTS.map((contact, i) => (
          <motion.a
            key={contact.title}
            href={contact.href}
            target={contact.isExternal ? "_blank" : undefined}
            rel={contact.isExternal ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease }}
            className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5 text-white/70 group-hover:text-white group-hover:bg-white/15 transition-all duration-300">
              <div className="w-5 h-5">{contact.icon}</div>
            </div>
            <h3 className="font-display text-base font-semibold text-white mb-1.5 leading-snug">
              {contact.title}
            </h3>
            <p className="font-sans text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
              {contact.body}
            </p>
          </motion.a>
        ))}
      </div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25, ease }}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
      >
        <Link
          to="/booking"
          className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary-700 font-semibold font-sans text-sm rounded-full hover:bg-primary-50 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-900"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" {...sp}>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Schedule a Visit
        </Link>
        <Link
          to="/admissions"
          className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 text-white/80 font-semibold font-sans text-sm rounded-full hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-200"
        >
          Learn About Admissions
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" {...sp}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>

    </div>
  </section>
);

ContactUs.displayName = "ContactUs";
export default memo(ContactUs);
