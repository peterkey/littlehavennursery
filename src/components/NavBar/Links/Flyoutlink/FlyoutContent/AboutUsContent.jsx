import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

const sections = [
  {
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Our Mission",
    path: "/about/mission",
    color: "text-rose-400",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 9 15" />
      </svg>
    ),
    title: "Our Story",
    path: "/about/story",
    color: "text-amber-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Our Approach",
    path: "/about/approach",
    color: "text-yellow-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Age Groups",
    path: "/about/agegroups",
    color: "text-primary-400",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Our Team",
    path: "/about/staff",
    color: "text-teal-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Parent Resources",
    path: "/about/parentresources",
    color: "text-brand-400",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M18 8h1a4 4 0 010 8h-1" />
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: "Food & Nutrition",
    path: "/about/foodandnutrition",
    color: "text-mint-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M17 3.34a10 10 0 110 17.32" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "Our Community",
    path: "/about/community",
    color: "text-emerald-500",
  },
];

const AboutUsContent = () => (
  <div className="flex w-[740px]">
    {/* ── Left editorial panel ── */}
    <div
      className="w-56 flex-shrink-0 flex flex-col justify-between p-7 rounded-l-2xl"
      style={{ background: "linear-gradient(160deg, #2b78c7 0%, #254762 100%)" }}
    >
      {/* Decorative circles */}
      <div className="absolute top-4 left-4 w-20 h-20 bg-white/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-12 h-12 bg-primary-300/10 rounded-full pointer-events-none" />

      <div className="relative">
        <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-primary-200/80 mb-4">
          About Us
        </span>
        <h3 className="font-display text-[1.55rem] font-semibold text-white leading-snug mb-4">
          More Than Childcare
        </h3>
        <p className="text-primary-100/80 text-xs leading-relaxed">
          Rooted in Froebelian principles and the Curiosity Approach — nurturing the whole child through play, relationship, and wonder.
        </p>
      </div>

      <Link
        to="/about"
        className="relative mt-6 inline-flex items-center gap-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-full px-4 py-2 transition-all duration-200 w-fit"
      >
        Our story
        <svg className="w-3 h-3" viewBox="0 0 24 24" {...sp}>
          <path d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>

    {/* ── Right links grid ── */}
    <div className="flex-1 p-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 gap-1"
      >
        {sections.map((section) => (
          <motion.div key={section.path} variants={itemVariants}>
            <Link
              to={section.path}
              className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary-50/70 transition-all duration-200"
            >
              <span className={`${section.color} flex-shrink-0 w-4 h-4`} aria-hidden="true">
                {section.icon}
              </span>
              <span className="text-sm font-medium text-neutral-700 group-hover:text-primary-700 transition-colors">
                {section.title}
              </span>
              <svg
                className="w-3 h-3 ml-auto text-neutral-300 group-hover:text-primary-400 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0"
                viewBox="0 0 24 24" {...sp}
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom tagline */}
      <div className="mt-4 pt-4 border-t border-neutral-100">
        <p className="text-xs text-neutral-400 italic font-display">
          &ldquo;learning to play, playing to learn&rdquo;
        </p>
      </div>
    </div>
  </div>
);

export default AboutUsContent;
