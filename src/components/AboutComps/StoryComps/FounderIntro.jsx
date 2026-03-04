import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Fiona from "../../../assets/Fiona.jpeg";

const ease = [0.22, 1, 0.36, 1];

const sp = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const STATS = [
  {
    value: "3",
    label: "Nurseries across Cardiff",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    value: "20+",
    label: "Years of experience",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

/* ── FounderIntro ────────────────────────────────────────────────── */
const FounderIntro = () => (
  <section className="py-20 sm:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* ── Photo ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="relative"
        >
          {/* Decorative offset frame */}
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 w-full h-full rounded-2xl border border-primary-100"
          />
          <div className="relative rounded-2xl overflow-hidden shadow-medium aspect-[4/5] max-w-sm mx-auto lg:max-w-none">
            <img
              src={Fiona}
              alt="Fiona Williams, Founder and Director of Little Haven Nursery"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Subtle gradient overlay at bottom */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 right-0 h-32"
              style={{
                background:
                  "linear-gradient(to top, rgba(12,43,94,0.55) 0%, transparent 100%)",
              }}
            />
            {/* Name badge */}
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-display font-semibold text-white text-lg leading-tight">
                Fiona Williams
              </p>
              <p className="font-sans text-white/70 text-xs mt-0.5 tracking-wide">
                Founder &amp; Director
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Copy ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
              Founder &amp; Director
            </span>
          </div>
          <h2
            className="font-display font-semibold text-neutral-900 leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
          >
            Meet the person<br />
            <span className="text-primary-600 italic">behind Little Haven.</span>
          </h2>
          <p className="font-sans text-neutral-600 text-lg leading-relaxed mb-4">
            With over 20 years dedicated to early childhood education across Wales, Fiona Williams
            founded Little Haven Nursery with a single vision: that every child deserves a warm,
            stimulating start to life.
          </p>
          <p className="font-sans text-neutral-500 leading-relaxed mb-8">
            Her background spans Flying Start community programmes, local authority childcare, and
            specialist early years settings — experience that shapes every decision made at Little Haven.
            Fiona personally oversees all three nurseries, ensuring the values she believes in are
            lived out every single day.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-start gap-3 p-5 bg-neutral-50 rounded-2xl border border-neutral-100"
              >
                <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-500">
                  <div className="w-4 h-4">{stat.icon}</div>
                </div>
                <div>
                  <p
                    className="font-display font-semibold text-primary-600 leading-none mb-1"
                    style={{ fontSize: "1.75rem" }}
                  >
                    {stat.value}
                  </p>
                  <p className="font-sans text-xs text-neutral-500 leading-snug">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <Link
              to="/about/approach"
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary-600 text-white font-semibold font-sans text-sm rounded-full hover:bg-primary-700 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Our Approach
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 border border-neutral-200 text-neutral-700 font-semibold font-sans text-sm rounded-full hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

FounderIntro.displayName = "FounderIntro";
export default memo(FounderIntro);
