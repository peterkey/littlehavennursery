import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PriceSection from "../components/Cards/PriceSection";
import WrapAroundPriceSection from "../components/Cards/WrapAroundPriceSection";
import SEO from "../components/SEO/SEO";

const ease = [0.22, 1, 0.36, 1];

/* ── Fees ────────────────────────────────────────────────────────── */
const Fees = () => (
  <>
    <SEO
      title="Our Fees - Little Haven Nursery"
      description="View our transparent fee structure for childcare services. Competitive rates with flexible payment options and government funding available."
      keywords={["nursery fees", "childcare costs", "nursery prices", "Cardiff nursery fees", "childcare funding"]}
      canonicalUrl="/fees/our-fees"
    />

    <div className="min-h-screen" style={{ background: "#faf8f4" }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "420px",
          background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(125,178,255,0.12) 0%, transparent 70%)" }}
        />

        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-16"
          style={{ minHeight: "420px", paddingTop: "8rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <Link
                to="/fees"
                className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 hover:text-white/60 transition-colors"
              >
                ← Fees &amp; Funding
              </Link>
            </div>
            <h1
              className="font-display font-semibold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Our Fees<br />
              <span className="text-primary-200">transparent pricing.</span>
            </h1>
            <p className="font-sans text-white/60 text-lg leading-relaxed">
              Competitive rates for quality childcare — see exactly what&apos;s included in every session.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Fee Cards ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease }}
      >
        <PriceSection />
        <WrapAroundPriceSection />
      </motion.div>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28" style={{ background: "#faf8f4" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="bg-white rounded-2xl shadow-soft p-10 sm:p-14 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
                Get in Touch
              </span>
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
            </div>
            <h2
              className="font-display font-semibold text-neutral-900 leading-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
            >
              Ready to get started?
            </h2>
            <p className="font-sans text-neutral-500 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Have questions about our fees or want to discuss your child&apos;s care needs? We&apos;re here
              to help you make the best decision for your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold font-sans text-sm rounded-full hover:bg-primary-700 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Contact Us
              </Link>
              <Link
                to="/booking"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 border border-primary-200 text-primary-700 font-semibold font-sans text-sm rounded-full hover:bg-primary-50 hover:border-primary-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
              >
                Book a Viewing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  </>
);

Fees.displayName = "Fees";
export default memo(Fees);
