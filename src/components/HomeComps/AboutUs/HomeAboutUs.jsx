import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import building from "../../../assets/Building.jpg";

const ease = [0.22, 1, 0.36, 1];

const HomeAboutUs = () => (
  <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

        {/* ── Left: Image with floating stat card ─────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease }}
          className="w-full lg:w-[46%] relative flex-shrink-0"
        >
          {/* Rotated accent behind image */}
          <div className="absolute -inset-3 bg-primary-50 rounded-3xl rotate-2 -z-10" aria-hidden="true" />

          {/* Main image */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-strong">
            <img
              src={building}
              alt="Little Haven Nursery — a warm, welcoming setting for children"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent" />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-5 -left-4 bg-white rounded-2xl shadow-strong px-6 py-4 z-10">
            <p className="font-display text-4xl font-semibold text-primary-600 leading-none">500+</p>
            <p className="font-sans text-xs text-neutral-500 mt-1 font-medium">Happy Children</p>
          </div>
        </motion.div>

        {/* ── Right: Content ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease, delay: 0.15 }}
          className="w-full lg:w-[54%]"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
              Our Story
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-display font-semibold text-neutral-900 leading-[1.06] mb-6"
            style={{ fontSize: "clamp(2.1rem, 3.5vw, 3.1rem)" }}
          >
            More than childcare —<br />
            a place to{" "}
            <span className="text-primary-600 italic">belong.</span>
          </h2>

          {/* Body */}
          <p className="font-sans text-neutral-600 text-lg leading-relaxed mb-10 max-w-[520px]">
            At Little Haven, we believe every child carries an innate curiosity waiting to be sparked.
            Our Froebelian approach creates an environment where children discover, question, and
            grow — guided by qualified, caring practitioners who treat every family as a true partner.
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-7 mb-10 flex-wrap">
            <div>
              <p className="font-display text-3xl font-semibold text-neutral-900 leading-none">15+</p>
              <p className="font-sans text-xs text-neutral-500 mt-1 font-medium">Years Experience</p>
            </div>
            <div className="w-px h-10 bg-neutral-200 flex-shrink-0" />
            <div>
              <p className="font-display text-3xl font-semibold text-neutral-900 leading-none">100%</p>
              <p className="font-sans text-xs text-neutral-500 mt-1 font-medium">Qualified Staff</p>
            </div>
            <div className="w-px h-10 bg-neutral-200 flex-shrink-0" />
            <div>
              <p className="font-display text-3xl font-semibold text-neutral-900 leading-none">3</p>
              <p className="font-sans text-xs text-neutral-500 mt-1 font-medium">Cardiff Locations</p>
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold font-sans text-white bg-primary-600 hover:bg-primary-700 rounded-full shadow-medium hover:shadow-strong transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Discover Our Approach
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </div>
  </section>
);

HomeAboutUs.displayName = "HomeAboutUs";
export default memo(HomeAboutUs);
