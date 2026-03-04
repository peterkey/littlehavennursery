import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];
const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

/* ── Feature item ────────────────────────────────────────────────── */
const FeatureItem = ({ text }) => (
  <div className="flex items-start gap-3">
    <div className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg className="w-3.5 h-3.5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <p className="font-sans text-sm text-neutral-700 leading-relaxed">{text}</p>
  </div>
);

/* ── NurseryPage template ────────────────────────────────────────── */
const NurseryPage = ({
  title,
  type,
  address,
  phone,
  location,
  service,
  openingHours,
  description,
  features,
}) => (
  <div className="min-h-screen" style={{ background: "#faf8f4" }}>

    {/* ── Hero ─────────────────────────────────────────────── */}
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "440px",
        background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)",
      }}
    >
      {/* Dot texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
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
          background: "radial-gradient(circle, rgba(125,178,255,0.12) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-16"
        style={{ minHeight: "440px", paddingTop: "8rem" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <Link
              to="/ournurseries"
              className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 hover:text-white/60 transition-colors"
              aria-label="Back to Our Nurseries"
            >
              ← Our Nurseries
            </Link>
          </div>

          {/* Type badge */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans text-xs font-semibold bg-white/10 border border-white/15 text-white/80">
              <span className="w-1.5 h-1.5 bg-teal-300 rounded-full" aria-hidden="true" />
              {type}
            </span>
          </div>

          <h1
            className="font-display font-semibold text-white leading-tight mb-3"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            {title}
          </h1>

          <p className="font-sans text-white/55 text-base leading-relaxed">{address}</p>
        </motion.div>
      </div>
    </section>

    {/* ── Main content ─────────────────────────────────────── */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ── Left: content ──────────────────────────────── */}
        <div className="lg:col-span-2 space-y-6">

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease }}
            className="bg-white rounded-2xl shadow-soft p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-px bg-primary-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
                About This Setting
              </span>
            </div>
            <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-5 leading-snug">
              About Our {type}
            </h2>
            <p className="font-sans text-neutral-600 leading-relaxed text-lg">{description}</p>
          </motion.div>

          {/* What we offer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease }}
            className="bg-white rounded-2xl shadow-soft p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-px bg-teal-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-teal-600">
                Included
              </span>
            </div>
            <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-7 leading-snug">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <FeatureItem key={i} text={feature} />
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── Right: contact sidebar ──────────────────────── */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.45, ease }}
            className="bg-white rounded-2xl shadow-soft p-7 sticky top-24"
          >
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-6">
              Contact &amp; Location
            </h2>

            <div className="space-y-5 mb-7">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" {...sp} aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="font-sans text-xs font-semibold text-neutral-500 mb-0.5 uppercase tracking-wide">Address</p>
                  <p className="font-sans text-sm text-neutral-700 leading-relaxed">{address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0" viewBox="0 0 24 24" {...sp} aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.34 12 19.79 19.79 0 011.27 3.45 2 2 0 013.27 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.4a16 16 0 006.54 6.54l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <div>
                  <p className="font-sans text-xs font-semibold text-neutral-500 mb-0.5 uppercase tracking-wide">Phone</p>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="font-sans text-sm text-primary-600 hover:text-primary-700 transition-colors duration-200 font-medium"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              {openingHours && openingHours.length > 0 && (
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" {...sp} aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div>
                    <p className="font-sans text-xs font-semibold text-neutral-500 mb-0.5 uppercase tracking-wide">Opening Hours</p>
                    <div className="space-y-0.5">
                      {openingHours.map((h, i) => (
                        <p key={i} className="font-sans text-sm text-neutral-700">{h}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-100 pt-6 space-y-3">
              <Link
                to="/booking"
                className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 bg-primary-600 text-white font-semibold font-sans text-sm rounded-full hover:bg-primary-700 shadow-medium hover:shadow-strong transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Book a Viewing
              </Link>
              <Link
                to={`/contact?service=${service}&location=${location}&source=${location}-page`}
                className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 border border-primary-200 text-primary-700 font-semibold font-sans text-sm rounded-full hover:bg-primary-50 hover:border-primary-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
              >
                Send an Enquiry
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </div>

  </div>
);

NurseryPage.displayName = "NurseryPage";
export default memo(NurseryPage);
