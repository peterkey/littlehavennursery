import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToAction = () => (
  <section
    className="relative overflow-hidden"
    style={{
      background: "linear-gradient(160deg, #0c4a9e 0%, #083d87 55%, #0b4496 100%)",
    }}
  >
    {/* Top accent line */}
    <div
      aria-hidden="true"
      className="absolute top-0 left-0 right-0 h-px"
      style={{
        background: "linear-gradient(90deg, transparent, rgba(147,197,253,0.4), transparent)",
      }}
    />

    {/* Ambient radial glow */}
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]"
        style={{
          background: "radial-gradient(ellipse, rgba(125,178,255,0.14) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80"
        style={{
          background: "radial-gradient(circle, rgba(94,234,212,0.06) 0%, transparent 70%)",
        }}
      />
    </div>

    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Eyebrow */}
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-white/30 mb-6">
          Ready to take the next step?
        </p>

        {/* Heading */}
        <h2
          className="font-display font-normal text-white/95 leading-[1.08] mb-6"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
        >
          Find your little one<br />
          <span
            style={{
              background: "linear-gradient(130deg, #93c5fd, #bfdbfe)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            a second home.
          </span>
        </h2>

        {/* Body */}
        <p className="font-sans text-lg text-white/55 leading-relaxed max-w-xl mx-auto mb-12">
          We&apos;d love to meet your family. Book a viewing at any of our three Cardiff nurseries and see firsthand what makes Little Haven so special.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold font-sans text-primary-700 bg-white hover:bg-primary-50 rounded-full shadow-strong hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book a Viewing
          </Link>
          <Link
            to="/contact?service=general-inquiry&source=homepage-cta"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold font-sans text-white/80 border border-white/20 hover:bg-white/10 hover:text-white hover:border-white/30 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50"
          >
            Get in Touch
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </motion.div>
    </div>
  </section>
);

CallToAction.displayName = "CallToAction";
export default memo(CallToAction);
