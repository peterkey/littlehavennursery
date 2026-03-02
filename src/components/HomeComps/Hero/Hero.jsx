import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ChildrenGardening from "../../../assets/ChildrenGardening.jpg";
import TeaParty from "../../../assets/TeaParty.jpg";
import RoomPanorama from "../../../assets/RoomPanorama.jpg";
import Food from "../../../assets/Food.jpg";
import Building from "../../../assets/Building.jpg";

/* ── Animation variants ──────────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

/* ── Stat item ───────────────────────────────────────────────────── */
const Stat = ({ value, label }) => (
  <div className="text-center lg:text-left">
    <p className="font-display text-xl font-semibold text-neutral-900 leading-none">{value}</p>
    <p className="text-[11px] text-neutral-400 mt-0.5 font-medium whitespace-nowrap">{label}</p>
  </div>
);

/* ── Hero ────────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="relative bg-[#fffdf8] overflow-hidden">

    {/* Subtle warm dot grid */}
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, #448bc3 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }}
    />

    {/* Decorative blush circles — top right */}
    <div aria-hidden="true" className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-100/30 rounded-full pointer-events-none" />
    <div aria-hidden="true" className="absolute top-12 right-12 w-56 h-56 bg-teal-50/50 rounded-full pointer-events-none" />

    {/* Bottom fade into next section */}
    <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-neutral-50/80 to-transparent pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-10">

        {/* ════════════════════════════════════════
            LEFT — Text content
        ════════════════════════════════════════ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center lg:text-left max-w-lg mx-auto lg:mx-0 order-2 lg:order-1"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-5 flex items-center gap-2 justify-center lg:justify-start">
            <span className="w-7 h-px bg-primary-300 flex-shrink-0" />
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-primary-500">
              Little Haven Nursery · Cardiff, Wales
            </span>
          </motion.div>

          {/* H1 — the hero moment */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-semibold text-neutral-900 tracking-tight leading-[1.04] mb-6"
            style={{ fontSize: "clamp(2.8rem, 4.8vw, 4.25rem)" }}
          >
            Where<br />
            <span className="text-primary-600">Curiosity</span><br />
            Leads to Learning
          </motion.h1>

          {/* Service badge */}
          <motion.div variants={fadeUp} className="mb-6 flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 border border-teal-200/70 text-teal-700 text-sm font-semibold rounded-full">
              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full flex-shrink-0" />
              Day Nursery &amp; Wrap Around Care
            </span>
          </motion.div>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            className="text-neutral-600 text-lg leading-relaxed mb-8 max-w-[430px] mx-auto lg:mx-0"
          >
            We nurture your child's natural curiosity through play-based learning — an environment where questions lead to discovery for children aged 0–12.
          </motion.p>

          {/* Mobile — single image card */}
          <motion.div
            variants={fadeUp}
            className="lg:hidden mb-8 relative mx-auto w-full max-w-xs"
          >
            <div className="absolute inset-0 bg-primary-100/40 rounded-3xl transform scale-105 rotate-1" />
            <div
              className="relative rounded-3xl overflow-hidden shadow-strong"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              <img
                src={ChildrenGardening}
                alt="Children exploring and learning at Little Haven"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10"
          >
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Viewing
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-primary-700 bg-white border border-primary-200 hover:bg-primary-50 hover:border-primary-300 rounded-full shadow-sm transition-all duration-200"
              >
                Our Approach
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-5 justify-center lg:justify-start flex-wrap"
          >
            <Stat value="15+" label="Years Experience" />
            <div className="w-px h-7 bg-neutral-200 flex-shrink-0" />
            <Stat value="3" label="Cardiff Locations" />
            <div className="w-px h-7 bg-neutral-200 flex-shrink-0" />
            <Stat value="0–12" label="Ages Welcomed" />
            <div className="w-px h-7 bg-neutral-200 flex-shrink-0" />
            <p className="text-[11px] text-neutral-400 font-medium">CIW Registered</p>
          </motion.div>
        </motion.div>

        {/* ════════════════════════════════════════
            RIGHT — Scattered photo collage
            Fixed 480px wide so positions are exact
        ════════════════════════════════════════ */}
        <div
          className="relative hidden lg:block order-1 lg:order-2 flex-shrink-0"
          style={{ width: "480px", height: "480px" }}
        >
          {/* Backdrop glow — centred in the cluster */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-primary-100/60 rounded-full blur-2xl pointer-events-none"
          />

          {/* ① Main photo — ChildrenGardening
               left=0 → right edge=290, top=40 → bottom=400
               This is the dominant anchor of the cluster              */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
            className="absolute top-10 left-0 w-[290px] h-[360px] rounded-3xl overflow-hidden shadow-strong z-20"
          >
            <img
              src={ChildrenGardening}
              alt="Children exploring nature at Little Haven"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/15 to-transparent" />
          </motion.div>

          {/* ② Room Panorama — top-right, left edge=260, overlaps main by 30px
               480-220=260 → right edge=480, top=0 → bottom=168             */}
          <motion.div
            initial={{ opacity: 0, y: -16, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="absolute top-0 right-0 w-[220px] h-[168px] rounded-2xl overflow-hidden shadow-medium z-10"
          >
            <img
              src={RoomPanorama}
              alt="Little Haven nursery room"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* ③ Tea Party — bottom-right, left edge=258, overlaps main by 32px
               480-222=258 → right edge=480, bottom=32 → top=278           */}
          <motion.div
            initial={{ opacity: 0, x: 24, rotate: 1 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ duration: 0.75, delay: 0.85, ease }}
            className="absolute bottom-8 right-0 w-[222px] h-[185px] rounded-2xl overflow-hidden shadow-strong z-30"
          >
            <img
              src={TeaParty}
              alt="Children enjoying tea party activities"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* ④ Food — bottom-left, overlaps main bottom-left corner
               left=8 → right edge=183, bottom=0 → top=335               */}
          <motion.div
            initial={{ opacity: 0, x: -16, rotate: -1 }}
            animate={{ opacity: 1, x: 0, rotate: 2 }}
            transition={{ duration: 0.65, delay: 1.0, ease }}
            className="absolute bottom-0 left-2 w-[175px] h-[145px] rounded-2xl overflow-hidden shadow-medium z-30"
          >
            <img
              src={Food}
              alt="Nutritious meals at Little Haven"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* ⑤ "Curiosity Approach" badge — floats over main photo top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1, ease }}
            className="absolute top-6 left-4 z-40"
          >
            <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-primary-100/70 shadow-soft rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
              <span className="text-[10px] font-semibold text-neutral-700 tracking-wide">Curiosity Approach</span>
            </div>
          </motion.div>

          {/* ⑥ "Play-Based" badge — between room panorama and tea party */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2, ease }}
            className="absolute right-1 top-[185px] z-40"
          >
            <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-teal-100/70 shadow-soft rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
              <span className="text-[10px] font-semibold text-neutral-700 tracking-wide">Play-Based Learning</span>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  </section>
);

export default Hero;
