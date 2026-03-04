import { memo } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import fiona from "../../../assets/Fiona.jpeg";
import jessica from "../../../assets/Jessica.jpeg";
import Building from "../../../assets/Building.jpg";

const ease = [0.22, 1, 0.36, 1];

const sp = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

/* ── Data ────────────────────────────────────────────────────────── */
const STAFF = [
  {
    name: "Fiona Williams",
    role: "Nursery Manager",
    pronouns: "Founder & Director",
    bio: "Fiona brings over 20 years of early years expertise to Little Haven. As both founder and nursery manager, she shapes every aspect of our approach — from curriculum to culture. Her background in Welsh Government's Flying Start programme gives her a deep understanding of what families truly need from a childcare setting.",
    qualifications: [
      "BEd (Hons) Early Years Education",
      "BEd (Hons) Leadership & Management",
      "Emergency & Paediatric First Aid",
      "Fire Warden",
      "Level 3 Catering",
      "EpiPen Certified",
    ],
    image: fiona,
    imagePosition: "object-top",
    accent: "text-primary-600",
    accentBg: "bg-primary-50",
    accentBadge: "bg-primary-600",
    flip: false,
  },
  {
    name: "Jessica Williams-Key",
    role: "Deputy Manager",
    pronouns: "Early Years Lead",
    bio: "Jessica is the heartbeat of our day-to-day operations. With her Level 5 diplomas in both Early Years Education and Leadership, she brings structure, warmth, and an infectious enthusiasm to every session. Parents consistently describe her as approachable, attentive, and genuinely invested in every child's journey.",
    qualifications: [
      "Level 5 Diploma — Early Years Education",
      "Level 5 Diploma — Leadership & Management",
      "Emergency & Paediatric First Aid",
      "Fire Warden",
      "Level 3 Catering",
      "EpiPen Certified",
    ],
    image: jessica,
    imagePosition: "object-[center_15%]",
    accent: "text-teal-600",
    accentBg: "bg-teal-50",
    accentBadge: "bg-teal-600",
    flip: true,
  },
];

const STATS = [
  {
    value: "100%",
    label: "Qualified practitioners",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    value: "1:3",
    label: "Practitioner-to-baby ratio",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "First aid certified",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

const COMMITMENTS = [
  {
    title: "All staff hold Level 3+ qualifications",
    body: "Every practitioner meets or exceeds Welsh Government requirements — not just leadership.",
  },
  {
    title: "Continuous professional development",
    body: "Regular CPD sessions keep our team up to date with the latest research and best practice.",
  },
  {
    title: "Bilingual capability",
    body: "Our team supports Welsh and English language development in line with the Foundation Phase.",
  },
  {
    title: "Safeguarding culture",
    body: "Safeguarding training is mandatory, regular, and embedded in everything we do.",
  },
];

/* ── ProfileCard ─────────────────────────────────────────────────── */
const ProfileCard = ({ member, index }) => {
  const accentCheck = member.accent === "text-teal-600" ? "bg-teal-50 text-teal-500" : "bg-primary-50 text-primary-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
      className={`grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden shadow-medium ${
        member.flip ? "" : ""
      }`}
    >
      {/* Photo column */}
      <div
        className={`relative lg:col-span-2 ${
          member.flip ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="relative h-72 lg:h-full min-h-[340px] overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className={`absolute inset-0 w-full h-full object-cover ${member.imagePosition} transition-transform duration-700 hover:scale-[1.03]`}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: member.flip
                ? "linear-gradient(to right, rgba(12,43,94,0.15) 0%, rgba(12,43,94,0.55) 100%)"
                : "linear-gradient(to left, rgba(12,43,94,0.15) 0%, rgba(12,43,94,0.55) 100%)",
            }}
          />
          {/* Role badge - top corner */}
          <div className="absolute top-5 left-5">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans text-xs font-semibold text-white ${member.accentBadge}`}
            >
              <span className="w-1.5 h-1.5 bg-white/60 rounded-full" aria-hidden="true" />
              {member.role}
            </span>
          </div>
        </div>
      </div>

      {/* Details column */}
      <div
        className={`lg:col-span-3 bg-white p-8 sm:p-10 flex flex-col justify-center ${
          member.flip ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
          {member.pronouns}
        </p>
        <h2
          className="font-display font-semibold text-neutral-900 leading-tight mb-4"
          style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)" }}
        >
          {member.name}
        </h2>
        <p className="font-sans text-neutral-600 leading-relaxed mb-7 text-[0.9375rem]">
          {member.bio}
        </p>

        {/* Divider */}
        <div className="h-px bg-neutral-100 mb-6" aria-hidden="true" />

        {/* Qualifications */}
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
          Qualifications &amp; Certifications
        </p>
        <ul className="space-y-2.5">
          {member.qualifications.map((qual) => (
            <li key={qual} className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${accentCheck}`}
              >
                <svg
                  className="w-2.5 h-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-sans text-sm text-neutral-700 leading-snug">{qual}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

ProfileCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    pronouns: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    qualifications: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    imagePosition: PropTypes.string.isRequired,
    accent: PropTypes.string.isRequired,
    accentBg: PropTypes.string.isRequired,
    accentBadge: PropTypes.string.isRequired,
    flip: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

/* ── Staff ───────────────────────────────────────────────────────── */
const Staff = () => (
  <div className="min-h-screen" style={{ background: "#faf8f4" }}>

    {/* ── Hero ─────────────────────────────────────────────── */}
    <section className="relative overflow-hidden" style={{ minHeight: "460px" }}>
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
              "linear-gradient(to right, rgba(12,35,70,0.92) 0%, rgba(12,35,70,0.65) 55%, rgba(12,35,70,0.25) 100%)",
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
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-16"
        style={{ minHeight: "460px", paddingTop: "8rem" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-xl"
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-6" aria-label="Breadcrumb">
            <Link
              to="/about"
              className="font-sans text-xs font-semibold text-white/45 hover:text-white/70 transition-colors duration-200 uppercase tracking-widest"
            >
              About Us
            </Link>
            <span className="text-white/25 text-xs">/</span>
            <span className="font-sans text-xs font-semibold text-white/70 uppercase tracking-widest">
              Our Staff
            </span>
          </nav>

          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-7 h-px bg-white/35 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/45">
              Our Team
            </span>
          </div>
          <h1
            className="font-display font-semibold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            The people behind<br />
            <span className="text-primary-200">every little moment.</span>
          </h1>
          <p className="font-sans text-white/65 text-lg leading-relaxed">
            100% qualified, deeply caring, and genuinely invested in every child who walks through our doors.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ── Stats bar ─────────────────────────────────────────── */}
    <section className="bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 divide-x divide-neutral-100">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease }}
              className="py-7 px-4 sm:px-8 flex flex-col sm:flex-row sm:items-center sm:gap-5"
            >
              <div className="w-9 h-9 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center flex-shrink-0 mb-3 sm:mb-0">
                <div className="w-4 h-4">{stat.icon}</div>
              </div>
              <div>
                <p
                  className="font-display font-semibold text-primary-600 leading-none mb-0.5"
                  style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)" }}
                >
                  {stat.value}
                </p>
                <p className="font-sans text-xs text-neutral-500">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Leadership profiles ────────────────────────────────── */}
    <section className="py-20 sm:py-28">
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
              Leadership Team
            </span>
          </div>
          <h2
            className="font-display font-semibold text-neutral-900 leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
          >
            Experienced practitioners,<br />
            <span className="text-primary-600 italic">dedicated to your child.</span>
          </h2>
          <p className="font-sans text-neutral-500 text-lg leading-relaxed">
            Our leadership team brings decades of combined experience and a shared belief that exceptional
            early years care starts with exceptional people.
          </p>
        </motion.div>

        {/* Profile cards — alternating layout */}
        <div className="space-y-8">
          {STAFF.map((member, index) => (
            <ProfileCard key={member.name} member={member} index={index} />
          ))}
        </div>

      </div>
    </section>

    {/* ── Whole team commitment ──────────────────────────────── */}
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
        className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(94,234,212,0.07) 0%, transparent 70%)",
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
              Every Practitioner
            </span>
          </div>
          <h2
            className="font-display font-semibold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
          >
            Our commitment runs<br />
            <span className="text-primary-200 italic">through the whole team.</span>
          </h2>
          <p className="font-sans text-white/60 text-lg leading-relaxed">
            Beyond our leadership, every practitioner at Little Haven is qualified, trained,
            and continuously developing — because great care is a team effort.
          </p>
        </motion.div>

        {/* Commitment grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {COMMITMENTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09, ease }}
              className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  className="w-4 h-4 text-teal-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-white/55 leading-relaxed">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="border-l-4 border-primary-400/40 pl-7 py-1"
        >
          <p className="font-display text-xl text-white/80 leading-relaxed italic">
            &ldquo;Happy, well-supported practitioners give children the very best care.&rdquo;
          </p>
          <p className="font-sans text-white/35 text-xs mt-3 font-semibold uppercase tracking-widest">
            Fiona Williams, Founder
          </p>
        </motion.div>

      </div>
    </section>

    {/* ── CTA ───────────────────────────────────────────────── */}
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-teal-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-teal-600">
                Come and Visit
              </span>
            </div>
            <h2
              className="font-display font-semibold text-neutral-900 leading-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            >
              Meet the team<br />
              <span className="text-teal-600 italic">in person.</span>
            </h2>
            <p className="font-sans text-neutral-500 leading-relaxed text-lg">
              The best way to experience Little Haven is to visit. Come and meet our practitioners,
              see our spaces, and find out whether we&apos;re the right fit for your family.
            </p>
          </motion.div>

          {/* Right — CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-start"
          >
            <Link
              to="/booking"
              className="inline-flex justify-center items-center gap-2 px-6 py-3.5 bg-primary-600 text-white font-semibold font-sans text-sm rounded-full hover:bg-primary-700 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" {...sp}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book a Visit
            </Link>
            <Link
              to="/admissions"
              className="inline-flex justify-center items-center gap-2 px-6 py-3.5 border border-neutral-200 text-neutral-700 font-semibold font-sans text-sm rounded-full hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" {...sp}>
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              How to Apply
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center items-center gap-2 px-6 py-3.5 border border-neutral-200 text-neutral-700 font-semibold font-sans text-sm rounded-full hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" {...sp}>
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              Get in Touch
            </Link>
          </motion.div>

        </div>
      </div>
    </section>

  </div>
);

Staff.displayName = "Staff";
export default memo(Staff);
