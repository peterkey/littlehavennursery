import { memo } from "react";
import { motion } from "framer-motion";

const OpenTimes = () => (
  <section
    className="relative overflow-hidden py-16 sm:py-20"
    style={{
      background: "linear-gradient(135deg, #1c2f5e 0%, #152244 55%, #1a2d52 100%)",
    }}
  >
    {/* Subtle ambient glow */}
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px]"
        style={{
          background: "radial-gradient(circle, rgba(125,178,255,0.10) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80"
        style={{
          background: "radial-gradient(circle, rgba(94,234,212,0.07) 0%, transparent 70%)",
        }}
      />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16"
      >

        {/* Left: Time display */}
        <div className="text-center lg:text-left">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">
            Opening Hours
          </p>
          <h2
            className="font-display font-normal text-white/92 leading-none mb-2"
            style={{ fontSize: "clamp(3rem, 6.5vw, 5.5rem)" }}
          >
            07:30 – 17:30
          </h2>
          <p className="font-sans text-white/45 text-lg tracking-wide">
            Monday – Friday, every week
          </p>
        </div>

        {/* Centre divider (desktop only) */}
        <div aria-hidden="true" className="hidden lg:block w-px h-24 bg-white/15 flex-shrink-0" />

        {/* Right: Tagline + info pills */}
        <div className="text-center lg:text-right max-w-sm">
          <p className="font-display text-xl italic text-primary-200/85 mb-7 leading-relaxed">
            &ldquo;A schedule designed to work for your family.&rdquo;
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 font-sans text-white/80 text-sm font-medium">
              <span className="w-1.5 h-1.5 bg-teal-300 rounded-full flex-shrink-0" aria-hidden="true" />
              Holiday Club Available
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 font-sans text-white/80 text-sm font-medium">
              <span className="w-1.5 h-1.5 bg-primary-300 rounded-full flex-shrink-0" aria-hidden="true" />
              Childcare Offer Accepted
            </span>
          </div>
        </div>

      </motion.div>
    </div>
  </section>
);

OpenTimes.displayName = "OpenTimes";
export default memo(OpenTimes);
