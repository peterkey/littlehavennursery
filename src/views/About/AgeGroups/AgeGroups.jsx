import { memo } from "react";
import { motion } from "framer-motion";
import SleepRoom from "../../../assets/SleepRoom.jpg";
import ChairRoom from "../../../assets/ChairRoom.jpg";
import Room from "../../../assets/Room.jpg";
import Building from "../../../assets/Building.jpg";

const ease = [0.22, 1, 0.36, 1];

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const AGE_GROUPS = [
  {
    title: "Baby Room",
    ageRange: "6 weeks – 2 years",
    ageBadge: "bg-primary-50 text-primary-600",
    description:
      "A safe, nurturing haven where your littlest one can explore and grow at their own pace. Our dedicated baby room is staffed at the closest ratio — because every small discovery matters.",
    image: SleepRoom,
    alt: "Baby Room with sleep area at Little Haven Nursery",
    features: [
      "Stand-alone room with dedicated milk kitchen",
      "Free-play exploration and sensory activities",
      "Cosy, calm nap-time area",
      "Separate outdoor play space",
      "Curiosity Approach ethos throughout",
    ],
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-14v5l3 3" />
      </svg>
    ),
  },
  {
    title: "Toddler Room",
    ageRange: "2 – 3 years",
    ageBadge: "bg-teal-50 text-teal-700",
    description:
      "A stimulating, joyful environment designed to encourage independence, friendship, and early learning through play. This is where confidence begins to bloom.",
    image: ChairRoom,
    alt: "Toddler activity room at Little Haven Nursery",
    features: [
      "Age-appropriate activities and natural materials",
      "Structured learning through play",
      "Outdoor play area access",
      "Social development focus",
      "Gentle potty training support",
    ],
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Kindergarten",
    ageRange: "3 – 5 years",
    ageBadge: "bg-primary-50 text-primary-600",
    description:
      "Our custom-designed kindergarten space prepares children for school while keeping learning playful. Children thrive in an environment that respects their curiosity and celebrates their individuality.",
    image: Room,
    alt: "Kindergarten learning environment at Little Haven Nursery",
    features: [
      "Custom-designed learning environment",
      "Quiet 'Cwtch' area for rest and reflection",
      "Welsh language integration",
      "School transition support activities",
      "Rich outdoor learning opportunities",
    ],
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

/* ── AgeGroupCard ────────────────────────────────────────────────── */
const AgeGroupCard = ({ group, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay: index * 0.1, ease }}
    className="bg-white rounded-2xl shadow-soft overflow-hidden group"
  >
    {/* Image */}
    <div className="relative h-52 overflow-hidden">
      <img
        src={group.image}
        alt={group.alt}
        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      {/* Age badge overlay */}
      <div className="absolute top-4 left-4">
        <span className={`inline-flex items-center px-3 py-1.5 rounded-full font-sans text-xs font-semibold ${group.ageBadge} bg-white/90 backdrop-blur-sm`}>
          {group.ageRange}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-7">
      {/* Icon + title */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center flex-shrink-0">
          <div className="w-4.5 h-4.5">{group.icon}</div>
        </div>
        <h3 className="font-display text-xl font-semibold text-neutral-900">{group.title}</h3>
      </div>

      <p className="font-sans text-sm text-neutral-600 leading-relaxed mb-6">{group.description}</p>

      {/* Features */}
      <div className="space-y-2.5">
        {group.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <div className="w-4.5 h-4.5 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-2.5 h-2.5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-sans text-xs text-neutral-600 leading-relaxed">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

/* ── AgeGroups page ──────────────────────────────────────────────── */
const AgeGroups = () => (
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
            A room shaped for<br />
            <span className="text-primary-200">every stage of childhood.</span>
          </h1>
          <p className="font-sans text-white/65 text-lg leading-relaxed">
            From tiny babies to confident kindergarteners — age-appropriate care, beautifully designed spaces, and practitioners who truly understand each stage.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ── Age group cards ───────────────────────────────────── */}
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
              Our Rooms
            </span>
          </div>
          <h2
            className="font-display font-semibold text-neutral-900 leading-tight mb-3"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
          >
            Three rooms.<br />One consistent warmth.
          </h2>
          <p className="font-sans text-neutral-500 text-lg leading-relaxed">
            Each room is designed around the developmental needs of the children within it — creating environments where little ones feel safe, stimulated, and celebrated.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AGE_GROUPS.map((group, index) => (
            <AgeGroupCard key={group.title} group={group} index={index} />
          ))}
        </div>

        {/* Philosophy note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-12 bg-primary-50 rounded-2xl p-8"
        >
          <div className="max-w-3xl">
            <p
              className="font-display font-normal text-primary-800 leading-relaxed italic"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
            >
              &ldquo;Children don&apos;t move through rooms on a timetable — they move when they&apos;re ready. Our transitions are gentle, unhurried, and always led by the child.&rdquo;
            </p>
            <p className="font-sans text-xs font-semibold text-primary-500 mt-4 uppercase tracking-widest">
              Little Haven Philosophy
            </p>
          </div>
        </motion.div>

      </div>
    </section>

  </div>
);

AgeGroups.displayName = "AgeGroups";
export default memo(AgeGroups);
