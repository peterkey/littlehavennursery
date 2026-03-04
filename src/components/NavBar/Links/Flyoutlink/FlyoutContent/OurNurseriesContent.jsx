import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const locations = [
  {
    name: "Rhydlafar",
    subtitle: "Little Haven",
    type: "Day Nursery",
    path: "/nurseries/rhydlafar",
    address: "Rhydlafar Dr, Rhydlafar, Cardiff CF5 6HU",
    phone: "029 2089 1825",
    badgeBg: "bg-primary-100",
    badgeText: "text-primary-700",
    cardBg: "hover:bg-primary-50/50",
    borderHover: "hover:border-primary-200",
    iconColor: "text-primary-500",
    arrowColor: "group-hover:text-primary-600",
  },
  {
    name: "Pentyrch",
    subtitle: "Little Haven",
    type: "Wrap Around Club",
    path: "/nurseries/pentyrch",
    address: "Pentyrch Primary School, Bronllwyn, Cardiff CF15 9QL",
    phone: "029 2278 1919",
    badgeBg: "bg-teal-100",
    badgeText: "text-teal-700",
    cardBg: "hover:bg-teal-50/50",
    borderHover: "hover:border-teal-200",
    iconColor: "text-teal-500",
    arrowColor: "group-hover:text-teal-600",
  },
  {
    name: "Radyr",
    subtitle: "Little Haven",
    type: "Wrap Around Club",
    path: "/nurseries/radyr",
    address: "Old Church Rooms, Radyr, Cardiff CF15 8DF",
    phone: "07361 214 326",
    badgeBg: "bg-teal-100",
    badgeText: "text-teal-700",
    cardBg: "hover:bg-teal-50/50",
    borderHover: "hover:border-teal-200",
    iconColor: "text-teal-500",
    arrowColor: "group-hover:text-teal-600",
  },
];

const OurNurseriesContent = () => (
  <div className="w-[680px] p-6">
    {/* Header */}
    <div className="flex items-baseline justify-between mb-5">
      <div>
        <h3 className="font-display text-2xl font-semibold text-neutral-900 tracking-tight leading-none">
          Our Nurseries
        </h3>
        <p className="text-xs text-neutral-400 mt-1">Cardiff & the surrounding area</p>
      </div>
      <Link
        to="/nurseries"
        className="text-xs font-semibold text-primary-600 hover:text-primary-800 flex items-center gap-1 transition-colors"
      >
        All locations
        <svg className="w-3 h-3" viewBox="0 0 24 24" {...sp}>
          <path d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>

    {/* Location cards */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-3 gap-4"
    >
      {locations.map((loc) => (
        <motion.div key={loc.path} variants={cardVariants}>
          <Link
            to={loc.path}
            className={`group block rounded-2xl p-4 border border-neutral-100/80 ${loc.borderHover} ${loc.cardBg} transition-all duration-300 hover:shadow-soft`}
          >
            {/* Type badge */}
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${loc.badgeBg} ${loc.badgeText} mb-3`}>
              {loc.type}
            </span>

            {/* Location name */}
            <p className="text-[10px] font-medium text-neutral-400 mb-0.5">{loc.subtitle}</p>
            <h4 className="font-display text-xl font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors leading-none mb-4">
              {loc.name}
            </h4>

            {/* Contact details */}
            <div className="space-y-1.5">
              <div className="flex items-start gap-1.5">
                <svg className={`${loc.iconColor} flex-shrink-0 w-3.5 h-3.5 mt-0.5`} viewBox="0 0 24 24" {...sp} aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-xs text-neutral-500 leading-relaxed">{loc.address}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className={`${loc.iconColor} flex-shrink-0 w-3.5 h-3.5`} viewBox="0 0 24 24" {...sp} aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.34 12 19.79 19.79 0 011.27 3.45 2 2 0 013.27 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.4a16 16 0 006.54 6.54l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <p className="text-xs text-neutral-500">{loc.phone}</p>
              </div>
            </div>

            {/* Visit arrow */}
            <div className={`mt-4 flex items-center gap-1 text-xs font-semibold text-neutral-400 ${loc.arrowColor} transition-colors duration-200`}>
              <span>Visit</span>
              <svg
                className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200"
                viewBox="0 0 24 24" {...sp}
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default OurNurseriesContent;
