import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PriceCard = ({
  name = "",
  price = 0,
  halfDayPrice = 0,
  features = [],
  featured = false,
}) => (
  <div
    className={`relative rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 ${
      featured
        ? "bg-primary-600 shadow-strong"
        : "bg-white shadow-soft hover:shadow-medium border border-neutral-100"
    }`}
  >
    {/* Top accent bar for featured */}
    {featured && (
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: "linear-gradient(to right, rgba(125,211,252,0.6), rgba(94,234,212,0.8), rgba(125,211,252,0.6))" }}
        aria-hidden="true"
      />
    )}

    {/* ── Header: name + price ─────────────────────── */}
    <div className="px-7 pt-8 pb-6">
      {featured && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-sans text-xs font-semibold bg-white/15 text-white/90 mb-4">
          <span className="w-1.5 h-1.5 bg-teal-300 rounded-full" aria-hidden="true" />
          Funding Available
        </span>
      )}

      <h3
        className={`font-display text-xl font-semibold mb-5 leading-snug ${
          featured ? "text-white" : "text-neutral-900"
        }`}
      >
        {name}
      </h3>

      {/* Full day price */}
      <div className="flex items-baseline gap-1 mb-1.5">
        <span
          className={`font-sans font-medium text-lg ${
            featured ? "text-primary-200" : "text-neutral-400"
          }`}
        >
          £
        </span>
        <span
          className={`font-display font-semibold leading-none ${
            featured ? "text-white" : "text-neutral-900"
          }`}
          style={{ fontSize: "3rem" }}
        >
          {price}
        </span>
        <span
          className={`font-sans text-sm ml-1 ${
            featured ? "text-primary-200" : "text-neutral-400"
          }`}
        >
          / full day
        </span>
      </div>

      {halfDayPrice > 0 && (
        <div className="flex items-baseline gap-1">
          <span
            className={`font-sans text-sm font-medium ${
              featured ? "text-primary-300" : "text-neutral-400"
            }`}
          >
            £
          </span>
          <span
            className={`font-display text-2xl font-semibold ${
              featured ? "text-white/75" : "text-neutral-500"
            }`}
          >
            {halfDayPrice}
          </span>
          <span
            className={`font-sans text-xs ml-1 ${
              featured ? "text-primary-300" : "text-neutral-400"
            }`}
          >
            / half day
          </span>
        </div>
      )}
    </div>

    {/* ── Divider ──────────────────────────────────── */}
    <div
      className={`mx-7 h-px ${featured ? "bg-white/10" : "bg-neutral-100"}`}
      aria-hidden="true"
    />

    {/* ── Features + CTA ───────────────────────────── */}
    <div
      className={`px-7 py-6 flex-1 flex flex-col ${
        featured ? "" : "bg-neutral-50/40"
      }`}
    >
      <ul className="space-y-3 flex-1 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                featured ? "bg-white/15" : "bg-primary-50"
              }`}
            >
              <svg
                className={`w-3 h-3 ${featured ? "text-white" : "text-primary-500"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span
              className={`font-sans text-sm leading-relaxed ${
                featured ? "text-white/85" : "text-neutral-700"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`w-full inline-flex justify-center items-center py-3 px-5 rounded-full font-semibold font-sans text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          featured
            ? "bg-white text-primary-700 hover:bg-primary-50 focus:ring-white shadow-soft hover:shadow-medium"
            : "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-soft hover:shadow-medium"
        }`}
      >
        Enquire Now
      </Link>
    </div>
  </div>
);

PriceCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  halfDayPrice: PropTypes.number,
  features: PropTypes.arrayOf(PropTypes.string),
  featured: PropTypes.bool,
};

export default PriceCard;
