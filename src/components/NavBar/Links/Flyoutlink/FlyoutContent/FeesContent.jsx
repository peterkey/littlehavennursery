import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

const stats = [
  {
    number: "30",
    unit: "hrs",
    label: "Free per week",
    detail: "Foundation Phase (10hrs) + Childcare Offer (20hrs)",
    path: "/fees/government-funding",
    bg: "from-primary-50 to-primary-100/50",
    border: "border-primary-100 hover:border-primary-200",
    numColor: "text-primary-700",
    hover: "hover:from-primary-100/80 hover:to-primary-200/40",
  },
  {
    number: "£2k",
    unit: "",
    label: "Saved per year",
    detail: "Tax-Free Childcare scheme — get 20p for every 80p you spend",
    path: "/fees/tax-free-childcare",
    bg: "from-teal-50 to-teal-100/40",
    border: "border-teal-100 hover:border-teal-200",
    numColor: "text-teal-700",
    hover: "hover:from-teal-100/80 hover:to-teal-200/40",
  },
  {
    number: "85%",
    unit: "",
    label: "Costs covered",
    detail: "Universal Credit support for eligible working parents",
    path: "/fees/universal-credit",
    bg: "from-mint-50 to-mint-100/40",
    border: "border-mint-100 hover:border-mint-200",
    numColor: "text-mint-700",
    hover: "hover:from-mint-100/80 hover:to-mint-200/40",
  },
];

const FeesContent = () => (
  <div className="w-[640px] p-6">
    {/* Header */}
    <div className="flex items-baseline justify-between mb-5">
      <div>
        <h3 className="font-display text-2xl font-semibold text-neutral-900 tracking-tight leading-none">
          Fees & Funding
        </h3>
        <p className="text-xs text-neutral-400 mt-1">Welsh Government schemes & UK support options</p>
      </div>
      <Link
        to="/fees/our-fees"
        className="text-xs font-semibold text-primary-600 hover:text-primary-800 flex items-center gap-1 transition-colors"
      >
        Our fees
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>

    {/* Funding stat cards */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-3 gap-3 mb-4"
    >
      {stats.map((stat) => (
        <motion.div key={stat.path} variants={itemVariants}>
          <Link
            to={stat.path}
            className={`group block bg-gradient-to-br ${stat.bg} ${stat.hover} border ${stat.border} rounded-2xl p-4 transition-all duration-250 hover:shadow-soft`}
          >
            <div className="flex items-baseline gap-0.5 mb-1">
              <span className={`font-display text-[2rem] font-bold leading-none ${stat.numColor}`}>
                {stat.number}
              </span>
              {stat.unit && (
                <span className={`text-sm font-semibold ${stat.numColor} opacity-70`}>{stat.unit}</span>
              )}
            </div>
            <p className="text-sm font-semibold text-neutral-800 mb-1.5 leading-tight">{stat.label}</p>
            <p className="text-[11px] text-neutral-500 leading-snug">{stat.detail}</p>
          </Link>
        </motion.div>
      ))}
    </motion.div>

    {/* Welsh Government callout */}
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className="flex items-start gap-3 bg-gradient-to-r from-brand-50/80 to-primary-50/60 border border-primary-100/60 rounded-xl p-3.5"
    >
      <span className="text-xl flex-shrink-0 leading-none mt-0.5" aria-hidden="true">🏴󠁧󠁢󠁷󠁬󠁳󠁿</span>
      <div>
        <p className="text-xs font-semibold text-brand-800 mb-0.5">Welsh-exclusive childcare support</p>
        <p className="text-[11px] text-brand-700 leading-relaxed">
          Wales offers <strong>Foundation Phase (10 hrs)</strong> and the <strong>Childcare Offer for Wales (20 hrs)</strong> — giving eligible working parents up to 30 hours of funded care per week.
        </p>
      </div>
    </motion.div>
  </div>
);

export default FeesContent;
