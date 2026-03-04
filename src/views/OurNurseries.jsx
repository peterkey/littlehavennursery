import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Building from "../assets/Building.jpg";

const ease = [0.22, 1, 0.36, 1];

const NURSERIES = [
  {
    key: "rhydlafar",
    title: "Rhydlafar",
    fullName: "Little Haven — Rhydlafar",
    type: "Day Nursery",
    ages: "Ages 0–5",
    location: "Rhydlafar Dr, Rhydlafar, Cardiff CF5 6HU",
    description:
      "Our flagship day nursery offering Froebelian-inspired care and education for children from birth to five years old in a purpose-designed, stimulating environment.",
    path: "/nurseries/rhydlafar",
    typeBg: "bg-primary-50",
    typeText: "text-primary-600",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2285.8924142478295!2d-3.284121823817714!3d51.51102651043905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1b79105870cb%3A0x5ca53d8a4961a49f!2sLittle%20Haven%20Nursery!5e1!3m2!1sen!2suk!4v1738684609327!5m2!1sen!2suk",
  },
  {
    key: "pentyrch",
    title: "Pentyrch",
    fullName: "Little Haven — Pentyrch",
    type: "Wrap Around Club",
    ages: "Ages 4–11",
    location: "Pentyrch Primary School, Bronllwyn, Pentyrch, Cardiff CF15 9QL",
    description:
      "A welcoming wrap around club providing before and after school care for primary school children — a safe, fun continuation of the school day.",
    path: "/nurseries/pentyrch",
    typeBg: "bg-teal-50",
    typeText: "text-teal-700",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2285.008082588355!2d-3.3031652238166194!3d51.528648809151406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1a7563f9468b%3A0x3ca446636a2a0a8b!2sPentyrch%20Primary%20School!5e1!3m2!1sen!2suk!4v1738684802334!5m2!1sen!2suk",
  },
  {
    key: "radyr",
    title: "Radyr",
    fullName: "Little Haven — Radyr",
    type: "Wrap Around Club",
    ages: "Ages 4–11",
    location: "Old Church Rooms, Hen Ysgoldy\u2019r Eglwys, Radyr, Cardiff CF15 8DF",
    description:
      "A nurturing wrap around club in the heart of Radyr, delivering quality before and after school care in a warm, homely setting.",
    path: "/nurseries/radyr",
    typeBg: "bg-teal-50",
    typeText: "text-teal-700",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d455.63759593358543!2d-3.2565677116744!3d51.519258281439825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDMxJzA4LjYiTiAzwrAxNScyNC4wIlc!5e1!3m2!1sen!2suk!4v1738685113908!5m2!1sen!2suk",
  },
];

/* ── Nursery card ────────────────────────────────────────────────── */
const NurseryCard = ({ nursery, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay: index * 0.1, ease }}
    className="bg-white rounded-2xl shadow-soft overflow-hidden group hover:shadow-medium transition-all duration-300 flex flex-col"
  >
    {/* Map */}
    <div className="relative h-52 overflow-hidden flex-shrink-0">
      <iframe
        title={`Map showing ${nursery.fullName}`}
        src={nursery.mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
    </div>

    {/* Content */}
    <div className="p-7 flex flex-col flex-1">
      {/* Type badge + age badge */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-sans ${nursery.typeBg} ${nursery.typeText}`}
        >
          {nursery.type}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-sans bg-neutral-100 text-neutral-500">
          {nursery.ages}
        </span>
      </div>

      {/* Name */}
      <h2 className="font-display text-xl font-semibold text-neutral-900 mb-1">
        {nursery.title}
      </h2>

      {/* Location */}
      <p className="font-sans text-xs text-neutral-400 mb-4 leading-relaxed">
        {nursery.location}
      </p>

      {/* Description */}
      <p className="font-sans text-sm text-neutral-600 leading-relaxed flex-1 mb-6">
        {nursery.description}
      </p>

      {/* CTA */}
      <Link
        to={nursery.path}
        className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary-600 group-hover:text-primary-700 transition-colors duration-200"
        aria-label={`Explore ${nursery.fullName}`}
      >
        Explore this nursery
        <svg
          className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </motion.div>
);

/* ── OurNurseries page ───────────────────────────────────────────── */
const OurNurseries = () => (
  <div className="min-h-screen" style={{ background: "#faf8f4" }}>

    {/* ── Hero ─────────────────────────────────────────────── */}
    <section className="relative overflow-hidden" style={{ minHeight: "420px" }}>
      <div className="absolute inset-0">
        <img
          src={Building}
          alt="Little Haven Nursery building"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(12,35,70,0.88) 0%, rgba(12,35,70,0.55) 55%, rgba(12,35,70,0.2) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-14"
        style={{ minHeight: "420px", paddingTop: "7rem" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-7 h-px bg-white/35 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/45">
              Our Nurseries
            </span>
          </div>
          <h1
            className="font-display font-semibold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Three welcoming settings<br />
            <span className="text-primary-200">across Cardiff.</span>
          </h1>
          <p className="font-sans text-white/65 text-lg leading-relaxed">
            From day nursery to wrap around care — find the Little Haven that&apos;s right for your family.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ── Nursery cards ────────────────────────────────────── */}
    <section className="py-20 sm:py-28" style={{ background: "#faf8f4" }}>
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
            <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
              Find a Nursery
            </span>
          </div>
          <h2
            className="font-display font-semibold text-neutral-900 leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
          >
            Choose the site that works<br />
            <span className="text-primary-600 italic">for your family.</span>
          </h2>
          <p className="font-sans text-neutral-500 text-lg leading-relaxed">
            Each Little Haven site has its own warm character, but all share the same high standards and Froebelian values.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NURSERIES.map((nursery, index) => (
            <NurseryCard key={nursery.key} nursery={nursery} index={index} />
          ))}
        </div>

      </div>
    </section>

  </div>
);

OurNurseries.displayName = "OurNurseries";
export default memo(OurNurseries);
