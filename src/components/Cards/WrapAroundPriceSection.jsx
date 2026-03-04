import { memo } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import PriceCard from "./PriceCard";

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const ease = [0.22, 1, 0.36, 1];

const RADYR_SERVICES = [
  {
    name: "Breakfast Club",
    fullDayPrice: 8,
    features: [
      "8:00 am – 9:00 am",
      "Ages 3+ Only",
      "Healthy Breakfast",
      "School Drop-off Service",
      "Qualified Staff",
    ],
  },
  {
    name: "Main Session",
    fullDayPrice: 22,
    features: [
      "9:00 am – 12:00 pm",
      "Ages 3–5 Years",
      "Structured Learning",
      "Qualified Staff",
      "Curriculum Activities",
    ],
  },
  {
    name: "Lunch Club",
    fullDayPrice: 10,
    featured: true,
    features: [
      "12:00 pm – 1:00 pm",
      "Radyr Primary Pupils",
      "Chaperone Service",
      "Healthy Lunch",
      "Safe Supervision",
    ],
  },
];

const PENTYRCH_SERVICES = [
  {
    name: "Nursery Session",
    fullDayPrice: 20,
    features: [
      "9:00 am – 11:30 am",
      "Ages 2–3 Years",
      "Daily Sessions",
      "Healthy Snacks",
      "Term Time Only",
    ],
  },
  {
    name: "Wraparound Care",
    fullDayPrice: 26,
    featured: true,
    features: [
      "9:00 am – 3:30 pm",
      "Ages 3–5 Years",
      "Healthy Snacks",
      "Qualified Staff",
      "Curriculum Activities",
    ],
  },
  {
    name: "The Haven",
    fullDayPrice: 16,
    features: [
      "3:30 pm – 5:30 pm",
      "Ages 3–12 Years",
      "After School Club",
      "Healthy Snacks",
      "Fun Activities",
    ],
  },
];

const WRAP_NOTES = [
  "All services operate during term time only",
  "Cardiff Childcare Offer registered",
  "Childcare vouchers and other schemes accepted",
  "Holiday club coming to Pentyrch in Summer 2025",
  "Contact your preferred location to book",
];

/* ── LocationHeader ──────────────────────────────────────────────── */
const LocationHeader = ({ name, address, phone }) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
    <div>
      <h3 className="font-display text-2xl font-semibold text-neutral-900 mb-1 leading-snug">{name}</h3>
      <div className="flex items-center gap-2 text-neutral-500">
        <svg className="w-4 h-4 flex-shrink-0 text-primary-400" viewBox="0 0 24 24" {...sp} aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span className="font-sans text-sm">{address}</span>
      </div>
    </div>
    <a
      href={`tel:${phone.replace(/\s/g, "")}`}
      className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors duration-200 whitespace-nowrap"
    >
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" {...sp} aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.34 12 19.79 19.79 0 011.27 3.45 2 2 0 013.27 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.4a16 16 0 006.54 6.54l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
      {phone}
    </a>
  </div>
);

/* ── WrapAroundPriceSection ──────────────────────────────────────── */
const WrapAroundPriceSection = () => (
  <section className="py-20 sm:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="max-w-2xl mb-14"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-teal-300 flex-shrink-0" />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-teal-600">
            Wrap Around Care
          </span>
        </div>
        <h2
          className="font-display font-semibold text-neutral-900 leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          Before &amp; after school<br />
          <span className="text-primary-600 italic">care options.</span>
        </h2>
        <p className="font-sans text-neutral-500 text-lg leading-relaxed">
          Flexible sessions at our Radyr and Pentyrch locations, designed to fit around the school day.
        </p>
      </motion.div>

      {/* ── Radyr ───────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="mb-16"
      >
        <LocationHeader
          name="Radyr"
          address="Old Church Rooms, Hen Ysgoldy'r Eglwys, Radyr"
          phone="07361 214326"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RADYR_SERVICES.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1, ease }}
            >
              <PriceCard
                name={service.name}
                price={service.fullDayPrice}
                features={service.features}
                featured={service.featured}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Pentyrch ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="mb-10"
      >
        <div className="border-t border-neutral-100 mb-12 pt-12">
          <LocationHeader
            name="Pentyrch"
            address="Pentyrch Primary School, Bronllwyn, Pentyrch, Cardiff"
            phone="02922 781919"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PENTYRCH_SERVICES.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1, ease }}
            >
              <PriceCard
                name={service.name}
                price={service.fullDayPrice}
                features={service.features}
                featured={service.featured}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.2, ease }}
        className="bg-white rounded-2xl shadow-soft p-7 border border-neutral-100"
      >
        <div className="flex items-center gap-3 mb-5">
          <span className="w-7 h-px bg-teal-300 flex-shrink-0" />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-teal-600">
            Important Notes
          </span>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {WRAP_NOTES.map((note) => (
            <li key={note} className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-sans text-sm text-neutral-600 leading-relaxed">{note}</span>
            </li>
          ))}
        </ul>
        <p className="font-sans text-xs text-neutral-400 mt-5 pt-4 border-t border-neutral-100">
          Please contact your preferred location to discuss your specific requirements and book a visit.
        </p>
      </motion.div>

    </div>
  </section>
);

LocationHeader.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

WrapAroundPriceSection.displayName = "WrapAroundPriceSection";
export default memo(WrapAroundPriceSection);
