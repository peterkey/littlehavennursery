import { memo, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Hygiene from "../../assets/Version 1 Badges 5.png";
import Snack from "../../assets/SNACK-AWARD-LOGO.jpg";
import Ciw from "../../assets/CIW.png";
import SunSafe from "../../assets/sun-accredited-logo.jpg";
import logo from "../../assets/little-haven-logo-all-pale.jpg";

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

// Staggered fade-up animation
const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
  }),
};

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/ournurseries", label: "Our Nurseries" },
  { to: "/fees", label: "Fees & Funding" },
  { to: "/opening-hours", label: "Opening Hours" },
  { to: "/contact", label: "Contact" },
];

const LEGAL_LINKS = [
  {
    to: "/safeguarding",
    label: "Safeguarding",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    to: "/privacy-policy",
    label: "Privacy Policy",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    to: "/cookies-policy",
    label: "Cookies Policy",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="9" cy="9" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="10" r="0.75" fill="currentColor" stroke="none" />
        <circle cx="10" cy="15" r="0.75" fill="currentColor" stroke="none" />
        <circle cx="14.5" cy="14.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    to: "/terms-of-service",
    label: "Terms of Service",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=100057491857373",
    label: "LHN Rhydlafar on Facebook (opens in new tab)",
    name: "Facebook · Rhydlafar",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/profile.php?id=100067759774550",
    label: "LHN Pentyrch on Facebook (opens in new tab)",
    name: "Facebook · Pentyrch",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/profile.php?id=100084282005921",
    label: "LHN Radyr on Facebook (opens in new tab)",
    name: "Facebook · Radyr",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/littlehavennursery_/",
    label: "Little Haven Nursery on Instagram (opens in new tab)",
    name: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

const BADGES = [
  { src: Snack, alt: "Snack Award – Healthy Eating Accreditation", href: null },
  { src: Hygiene, alt: "Hygiene Badge – Food Safety Excellence", href: null },
  { src: Ciw, alt: "CIW – Care Inspectorate Wales", href: null },
  {
    src: SunSafe,
    alt: "Sun Safe Nurseries Accreditation",
    href: "https://www.sunsafenurseries.co.uk/",
  },
];

// Footer background gradient — deep forest teal into midnight
const FOOTER_BG = "linear-gradient(160deg, #0e3d38 0%, #0a2d28 55%, #0d3040 100%)";
const WAVE_FILL = "#0e3d38";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer role="contentinfo" aria-label="Little Haven Nursery footer">
      {/* Wave transition */}
      <div aria-hidden="true" style={{ lineHeight: 0, display: "block" }}>
        <svg
          viewBox="0 0 1440 72"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "72px" }}
        >
          <path
            d="M0,36 C180,72 360,0 540,36 C720,72 900,0 1080,36 C1260,72 1350,18 1440,36 L1440,72 L0,72 Z"
            fill={WAVE_FILL}
          />
        </svg>
      </div>

      {/* Footer body */}
      <div ref={ref} style={{ background: FOOTER_BG, position: "relative", overflow: "hidden" }}>
        {/* Ambient glow orbs */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute"
            style={{
              top: "-6rem",
              right: "-6rem",
              width: "32rem",
              height: "32rem",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(94,234,212,0.10) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute"
            style={{
              bottom: "2rem",
              left: "-7rem",
              width: "26rem",
              height: "26rem",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(167,243,208,0.07) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">

          {/* ── Brand statement ──────────────────────────────────── */}
          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-14"
          >
            <img
              src={logo}
              alt="Little Haven Nursery"
              className="w-16 h-16 object-contain mx-auto mb-5 rounded-full"
              style={{ filter: "drop-shadow(0 0 18px rgba(94,234,212,0.22))" }}
            />
            <p className="font-sans text-xs uppercase tracking-widest text-white/30 mb-4">
              Little Haven Nursery
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-white/90">
              Learning to play,{" "}
              <br className="hidden sm:block" />
              <span
                style={{
                  background: "linear-gradient(130deg, #5eead4 0%, #a7f3d0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                playing to learn.
              </span>
            </h2>
          </motion.div>

          {/* ── Three-column grid ─────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-14">

            {/* Column 1: Contact */}
            <motion.div
              custom={1}
              variants={fade}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <p className="font-sans text-xs font-medium uppercase tracking-widest text-white/25 mb-6">
                Get in Touch
              </p>

              <div className="space-y-4 mb-7">
                <div className="flex items-start gap-3">
                  <svg className="w-3.5 h-3.5 text-teal-300/60 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" {...sp} aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <span className="text-sm text-white/65 leading-relaxed block">
                      St Fagans, Cardiff, Wales
                    </span>
                    <span className="text-xs text-white/35 block mt-1">
                      Serving Cardiff &amp; surrounding areas
                    </span>
                  </div>
                </div>

                <a
                  href="tel:02920891825"
                  aria-label="Call us at 02920 891825"
                  className="flex items-center gap-3 text-sm text-white/65 hover:text-teal-300 transition-colors duration-200 group"
                >
                  <svg className="w-3.5 h-3.5 text-teal-300/60 flex-shrink-0 group-hover:text-teal-300 transition-colors duration-200" viewBox="0 0 24 24" {...sp} aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.34 12 19.79 19.79 0 011.27 3.45 2 2 0 013.27 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.4a16 16 0 006.54 6.54l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  029 2089 1825
                </a>

                <a
                  href="mailto:learn@littlehavennursery.co.uk"
                  aria-label="Email us at learn@littlehavennursery.co.uk"
                  className="flex items-center gap-3 text-sm text-white/65 hover:text-teal-300 transition-colors duration-200 group"
                >
                  <svg className="w-3.5 h-3.5 text-teal-300/60 flex-shrink-0 group-hover:text-teal-300 transition-colors duration-200" viewBox="0 0 24 24" {...sp} aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="break-all">learn@littlehavennursery.co.uk</span>
                </a>
              </div>

              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium font-sans border border-teal-400/30 text-teal-300 bg-teal-400/10 hover:bg-teal-400/20 hover:border-teal-400/50 transition-all duration-200"
              >
                Book a Viewing
                <span aria-hidden="true" className="text-teal-300/70">→</span>
              </Link>
            </motion.div>

            {/* Column 2: Navigation */}
            <motion.div
              custom={2}
              variants={fade}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <p className="font-sans text-xs font-medium uppercase tracking-widest text-white/25 mb-6">
                Explore
              </p>
              <nav aria-label="Footer navigation">
                <ul className="space-y-3">
                  {NAV_LINKS.map(({ to, label }) => (
                    <li key={to}>
                      <Link
                        to={to}
                        className="group flex items-center gap-2.5 text-sm text-white/55 hover:text-white/95 transition-colors duration-200"
                      >
                        <span className="inline-block h-px w-0 group-hover:w-4 bg-teal-300/70 transition-all duration-300 flex-shrink-0" />
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>

            {/* Column 3: Social + Legal */}
            <motion.div
              custom={3}
              variants={fade}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <p className="font-sans text-xs font-medium uppercase tracking-widest text-white/25 mb-6">
                Follow Our Story
              </p>
              <ul className="space-y-3 mb-9">
                {SOCIAL_LINKS.map(({ href, label, icon, name }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex items-center gap-3 text-sm text-white/55 hover:text-teal-300 transition-colors duration-200 group"
                    >
                      <div className="w-3.5 h-3.5 flex-shrink-0 text-white/25 group-hover:text-teal-300 transition-colors duration-200" aria-hidden="true">
                        {icon}
                      </div>
                      {name}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="font-sans text-xs font-medium uppercase tracking-widest text-white/25 mb-4">
                Legal
              </p>
              <ul className="space-y-2.5">
                {LEGAL_LINKS.map(({ to, label, icon }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="flex items-center gap-2.5 text-xs text-white/40 hover:text-white/75 transition-colors duration-200 group"
                    >
                      <div className="w-3 h-3 flex-shrink-0 text-white/20 group-hover:text-white/60 transition-colors duration-200" aria-hidden="true">
                        {icon}
                      </div>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ── Accreditation badges ──────────────────────────────── */}
          <motion.section
            custom={4}
            variants={fade}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            aria-labelledby="footer-accreditations"
            className="mb-10 py-8 border-y border-white/10"
          >
            <h2 id="footer-accreditations" className="sr-only">
              Accreditations and Awards
            </h2>
            <p className="font-sans text-xs uppercase tracking-widest text-center text-white/20 mb-7">
              Accreditations &amp; Awards
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {BADGES.map(({ src, alt, href }) => {
                const card = (
                  <div className="rounded-xl p-4 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all duration-300 h-full">
                    <img src={src} alt={alt} className="h-12 w-auto object-contain" />
                  </div>
                );
                return href ? (
                  <a
                    key={alt}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${alt} (opens in new tab)`}
                  >
                    {card}
                  </a>
                ) : (
                  <div key={alt}>{card}</div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Bottom bar ─────────────────────────────────────────── */}
          <motion.div
            custom={5}
            variants={fade}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-sans"
          >
            <p className="text-white/30">
              © {currentYear}{" "}
              <span className="text-white/50 font-medium">Parachutes ChildCare Ltd.</span>{" "}
              All rights reserved.
            </p>
            <div className="flex items-center gap-1.5 text-white/25">
              <span>Made with</span>
              <svg className="w-2.5 h-2.5 text-rose-400/60" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
              <span>for little ones</span>
            </div>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";
export default memo(Footer);
