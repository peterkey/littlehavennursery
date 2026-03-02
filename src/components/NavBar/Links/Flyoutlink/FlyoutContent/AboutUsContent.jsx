import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBaby, FaUsers, FaUtensils, FaHeart,
  FaHistory, FaLightbulb, FaFileAlt, FaLeaf,
} from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

const sections = [
  { icon: FaHeart,      title: "Our Mission",        path: "/about/mission",          color: "text-rose-400" },
  { icon: FaHistory,    title: "Our Story",           path: "/about/story",            color: "text-amber-500" },
  { icon: FaLightbulb,  title: "Our Approach",        path: "/about/approach",         color: "text-yellow-500" },
  { icon: FaBaby,       title: "Age Groups",          path: "/about/agegroups",        color: "text-primary-400" },
  { icon: FaUsers,      title: "Our Team",            path: "/about/staff",            color: "text-teal-500" },
  { icon: FaFileAlt,    title: "Parent Resources",    path: "/about/parentresources",  color: "text-brand-400" },
  { icon: FaUtensils,   title: "Food & Nutrition",    path: "/about/foodandnutrition", color: "text-mint-500" },
  { icon: FaLeaf,       title: "Our Community",       path: "/about/community",        color: "text-emerald-500" },
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
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
              <span className={`${section.color} flex-shrink-0 w-4 h-4`}>
                <section.icon className="w-full h-full" />
              </span>
              <span className="text-sm font-medium text-neutral-700 group-hover:text-primary-700 transition-colors">
                {section.title}
              </span>
              <svg
                className="w-3 h-3 ml-auto text-neutral-300 group-hover:text-primary-400 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom tagline */}
      <div className="mt-4 pt-4 border-t border-neutral-100">
        <p className="text-xs text-neutral-400 italic font-display">
          "learning to play, playing to learn"
        </p>
      </div>
    </div>
  </div>
);

export default AboutUsContent;
