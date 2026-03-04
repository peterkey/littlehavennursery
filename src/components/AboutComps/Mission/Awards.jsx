import { memo } from "react";
import { motion } from "framer-motion";
import CIW from "../../../assets/CIW.png";
import SnackAward from "../../../assets/SNACK-AWARD-LOGO.jpg";
import SunAccredited from "../../../assets/sun-accredited-logo.jpg";

const ease = [0.22, 1, 0.36, 1];

const sp = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const AWARDS = [
  {
    logo: CIW,
    alt: "Care Inspectorate Wales",
    title: "Gold Standard Plus",
    body: "Recognised by Care Inspectorate Wales for outstanding quality in early years education and childcare — the highest level of inspection outcome.",
    accent: "border-primary-200",
    accentBg: "bg-primary-50",
  },
  {
    logo: SnackAward,
    alt: "Healthy Snack Award",
    title: "Healthy Snack Award",
    body: "Awarded for providing balanced, nutritious snacks that promote healthy eating habits — a commitment to children's physical health from day one.",
    accent: "border-teal-200",
    accentBg: "bg-teal-50",
  },
  {
    logo: SunAccredited,
    alt: "Sun Accreditation",
    title: "5-Star Hygiene Rating",
    body: "Maintaining the highest standards of cleanliness and food safety across all our kitchens — inspected and rated by the local authority.",
    accent: "border-amber-200",
    accentBg: "bg-amber-50",
  },
];

/* ── Awards ──────────────────────────────────────────────────────── */
const Awards = () => (
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
            Recognition
          </span>
        </div>
        <h2
          className="font-display font-semibold text-neutral-900 leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          Accredited, inspected,<br />
          <span className="text-primary-600 italic">and recognised.</span>
        </h2>
        <p className="font-sans text-neutral-500 text-lg leading-relaxed">
          Our commitment to exceptional care has earned us recognition across multiple areas.
          These awards reflect what our families already know — Little Haven sets the standard.
        </p>
      </motion.div>

      {/* Award cards with real logos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {AWARDS.map((award, i) => (
          <motion.div
            key={award.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1, ease }}
            className={`bg-white rounded-2xl shadow-soft border-2 ${award.accent} overflow-hidden hover:shadow-medium transition-shadow duration-300`}
          >
            {/* Logo strip */}
            <div className={`${award.accentBg} px-6 py-5 flex items-center justify-center h-28 border-b ${award.accent}`}>
              <img
                src={award.logo}
                alt={award.alt}
                className="max-h-16 max-w-full object-contain"
              />
            </div>
            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-4 h-4 text-primary-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  {...sp}
                >
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <h3 className="font-display text-lg font-semibold text-neutral-900 leading-snug">
                  {award.title}
                </h3>
              </div>
              <p className="font-sans text-sm text-neutral-600 leading-relaxed">{award.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Future ambitions note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.25, ease }}
        className="bg-neutral-50 rounded-2xl p-7 border border-neutral-100 flex gap-5 items-start"
      >
        <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-500">
          <svg className="w-5 h-5" viewBox="0 0 24 24" {...sp}>
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1.5">
            Always striving further
          </h3>
          <p className="font-sans text-sm text-neutral-600 leading-relaxed">
            Our journey doesn&apos;t stop here. We continuously aim for excellence — applying for
            sector-leading awards and striving for top inspection results. Your child deserves the
            best, and that&apos;s exactly what we&apos;re committed to delivering.
          </p>
        </div>
      </motion.div>

    </div>
  </section>
);

Awards.displayName = "Awards";
export default memo(Awards);
