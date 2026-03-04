import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO/SEO";

const ease = [0.22, 1, 0.36, 1];

const HOURS = [
  { day: "Monday",    abbr: "Mon", open: "7:30 AM", close: "5:30 PM", isOpen: true },
  { day: "Tuesday",   abbr: "Tue", open: "7:30 AM", close: "5:30 PM", isOpen: true },
  { day: "Wednesday", abbr: "Wed", open: "7:30 AM", close: "5:30 PM", isOpen: true },
  { day: "Thursday",  abbr: "Thu", open: "7:30 AM", close: "5:30 PM", isOpen: true },
  { day: "Friday",    abbr: "Fri", open: "7:30 AM", close: "5:30 PM", isOpen: true },
  { day: "Saturday",  abbr: "Sat", open: "Closed",  close: "",         isOpen: false },
  { day: "Sunday",    abbr: "Sun", open: "Closed",  close: "",         isOpen: false },
];

const NOTES = [
  "We are closed on all Bank Holidays.",
  "Doors will close on Christmas Eve 2025 at 1:00 PM and reopen on 5th January 2026 at 7:30 AM.",
  "We are open year-round except for the Christmas break.",
  "Emergency care may be available during closures — contact us directly to discuss your needs.",
];

/* ── OpeningHours page ───────────────────────────────────────────── */
const OpeningHours = () => (
  <>
    <SEO
      title="Opening Hours & Term Dates"
      description="View our nursery opening hours, term dates, and holiday closures. We offer flexible childcare options from 7:30 AM to 5:30 PM, Monday to Friday."
      keywords={["nursery opening hours", "term dates", "holiday closures", "childcare hours", "Cardiff nursery"]}
      canonicalUrl="/opening-hours"
    />

    <div className="min-h-screen" style={{ background: "#faf8f4" }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "380px",
          background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(125,178,255,0.12) 0%, transparent 70%)",
          }}
        />

        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-14"
          style={{ minHeight: "380px", paddingTop: "7rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-7 h-px bg-white/35 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/45">
                Opening Hours
              </span>
            </div>
            <h1
              className="font-display font-semibold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Consistent hours, built<br />
              <span className="text-primary-200">around your family.</span>
            </h1>
            <p className="font-sans text-white/60 text-lg leading-relaxed">
              Open Monday to Friday, 7:30 AM to 5:30 PM — with flexible session options to suit every working pattern.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Hours table ───────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-2xl mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
                Weekly Schedule
              </span>
            </div>
            <h2
              className="font-display font-semibold text-neutral-900 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            >
              Daily opening hours.
            </h2>
          </motion.div>

          <div className="max-w-2xl">
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden border border-neutral-100">
              {/* Header row */}
              <div className="grid grid-cols-3 px-6 py-3 bg-neutral-50 border-b border-neutral-100">
                <span className="font-sans text-xs font-semibold text-neutral-400 uppercase tracking-widest">Day</span>
                <span className="font-sans text-xs font-semibold text-neutral-400 uppercase tracking-widest">Hours</span>
                <span className="font-sans text-xs font-semibold text-neutral-400 uppercase tracking-widest text-right">Status</span>
              </div>

              {/* Day rows */}
              {HOURS.map((row, index) => (
                <motion.div
                  key={row.day}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, ease }}
                  className={`grid grid-cols-3 items-center px-6 py-4 border-b border-neutral-50 last:border-0 ${
                    !row.isOpen ? "opacity-45" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <span className="font-sans text-xs font-semibold text-primary-600">{row.abbr}</span>
                    </span>
                    <span className="font-sans text-sm font-medium text-neutral-800">{row.day}</span>
                  </div>
                  <span className="font-sans text-sm text-neutral-700">
                    {row.isOpen ? `${row.open} – ${row.close}` : "Closed"}
                  </span>
                  <div className="flex justify-end">
                    {row.isOpen ? (
                      <span className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                        Open
                      </span>
                    ) : (
                      <span className="inline-flex items-center font-sans text-xs font-medium text-neutral-400 bg-neutral-100 px-2.5 py-1 rounded-full">
                        Closed
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Important info ────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-2xl mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
                Good to Know
              </span>
            </div>
            <h2
              className="font-display font-semibold text-neutral-900 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            >
              Closures &amp; important dates.
            </h2>
          </motion.div>

          <div className="max-w-2xl space-y-4">
            {NOTES.map((note, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, ease }}
                className="flex items-start gap-4 bg-white rounded-2xl shadow-soft p-5"
              >
                <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  </svg>
                </div>
                <p className="font-sans text-sm text-neutral-700 leading-relaxed">{note}</p>
              </motion.div>
            ))}

            {/* Contact note */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, ease }}
              className="flex items-start gap-4 bg-primary-50 rounded-2xl p-5"
            >
              <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-primary-800 mb-1">Need specific dates or arrangements?</p>
                <p className="font-sans text-sm text-primary-700 leading-relaxed">
                  Get in touch and we&apos;ll be happy to discuss your family&apos;s individual needs — including emergency cover during closures.
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, ease }}
            className="flex flex-col sm:flex-row gap-3 mt-10"
          >
            <a
              href="tel:02920891825"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary-600 text-white font-semibold font-sans text-sm rounded-full hover:bg-primary-700 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 029 2089 1825
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-primary-200 text-primary-700 font-semibold font-sans text-sm rounded-full hover:bg-primary-50 hover:border-primary-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
            >
              Send a Message
            </Link>
          </motion.div>

        </div>
      </section>

    </div>
  </>
);

OpeningHours.displayName = "OpeningHours";
export default memo(OpeningHours);
