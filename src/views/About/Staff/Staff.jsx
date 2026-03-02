import { memo } from "react";
import { motion } from "framer-motion";
import fiona from "../../../assets/Fiona.jpeg";
import jessica from "../../../assets/Jessica.jpeg";
import Building from "../../../assets/Building.jpg";

const ease = [0.22, 1, 0.36, 1];

const STAFF = [
  {
    name: "Fiona Williams",
    role: "Nursery Manager",
    initials: "FW",
    qualifications: [
      "BEd (Hons) Early Years Education",
      "BEd (Hons) Leadership and Management",
      "Emergency & Paediatric First Aid",
      "Fire Warden",
      "Level 3 Catering",
      "EpiPen Certified",
    ],
    image: fiona,
  },
  {
    name: "Jessica Williams-Key",
    role: "Deputy Manager",
    initials: "JW",
    qualifications: [
      "Level 5 Diploma in Early Years Education",
      "Level 5 Diploma in Leadership and Management",
      "Emergency & Paediatric First Aid",
      "Fire Warden",
      "Level 3 Catering",
      "EpiPen Certified",
    ],
    image: jessica,
  },
];

const STATS = [
  { value: "100%", label: "Qualified practitioners" },
  { value: "1:3", label: "Baby room ratio" },
  { value: "100%", label: "First aid trained" },
];

/* ── StaffCard ───────────────────────────────────────────────────── */
const StaffCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay: index * 0.1, ease }}
    className="bg-white rounded-2xl shadow-soft overflow-hidden group"
  >
    {/* Photo */}
    <div className="relative h-72 overflow-hidden">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover object-[center_20%] group-hover:scale-[1.03] transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      {/* Name overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-display text-xl font-semibold text-white leading-tight">
          {member.name}
        </h3>
        <p className="font-sans text-sm text-primary-200 mt-0.5">{member.role}</p>
      </div>
    </div>

    {/* Qualifications */}
    <div className="p-7">
      <p className="font-sans text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">
        Qualifications &amp; Certifications
      </p>
      <div className="flex flex-wrap gap-2">
        {member.qualifications.map((qual, i) => (
          <span
            key={i}
            className="inline-flex items-center px-3 py-1.5 rounded-full font-sans text-xs font-medium bg-primary-50 text-primary-700"
          >
            {qual}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

/* ── Staff page ──────────────────────────────────────────────────── */
const Staff = () => (
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
              About Us
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
            100% qualified, deeply caring, and committed to every child in our care.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ── Stats row ─────────────────────────────────────────── */}
    <section className="bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 divide-x divide-neutral-100">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, ease }}
              className="py-8 px-6 text-center"
            >
              <p
                className="font-display font-semibold text-primary-600 leading-none mb-1"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
              >
                {stat.value}
              </p>
              <p className="font-sans text-xs text-neutral-500 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Team section ──────────────────────────────────────── */}
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
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
              Our Team
            </span>
          </div>
          <h2
            className="font-display font-semibold text-neutral-900 leading-tight mb-3"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
          >
            Experienced practitioners,<br />dedicated to your child.
          </h2>
          <p className="font-sans text-neutral-500 text-lg leading-relaxed">
            Every member of our team holds a relevant qualification — and their passion for early years development shows in everything they do.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {STAFF.map((member, index) => (
            <StaffCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Commitment note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-12 bg-white rounded-2xl shadow-soft p-8 max-w-4xl"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                Our full team commitment
              </h3>
              <p className="font-sans text-neutral-600 text-sm leading-relaxed">
                Beyond our leadership team, every practitioner at Little Haven holds a relevant early years qualification. We invest continuously in training, professional development, and wellbeing — because happy, well-supported practitioners give children the very best care.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>

  </div>
);

Staff.displayName = "Staff";
export default memo(Staff);
