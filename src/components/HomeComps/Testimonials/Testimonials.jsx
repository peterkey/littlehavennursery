import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

/* ── Testimonial data ────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    initials: "KW",
    name: "KW",
    date: "March 2024",
    feedback:
      "Little Haven has been an amazing experience for my child! The staff is so caring and the environment is truly fantastic.",
  },
  {
    initials: "LJ",
    name: "LJ",
    date: "November 2024",
    feedback:
      "Helped my son with all his additional needs — the practitioners truly go above and beyond to make every child feel included.",
  },
  {
    initials: "RB",
    name: "RB",
    date: "November 2024",
    feedback:
      "My daughter has become so much more outgoing and confident. The staff are brilliant — they make her feel so comfortable here. I can\u2019t thank you all enough.",
  },
  {
    initials: "KM",
    name: "KM",
    date: "December 2024",
    feedback:
      "Thank you all for making DM\u2019s time so enjoyable, for making her feel safe, happy, and able to grow and learn.",
  },
  {
    initials: "SS",
    name: "SS",
    date: "December 2024",
    feedback:
      "Thank you for looking after CS over the past year. He has had so much fun and has made some wonderful friends.",
  },
  {
    initials: "KR",
    name: "KR",
    date: "December 2024",
    feedback:
      "Thank you so much for helping RR grow. I am very grateful to you all — the care and warmth here is unlike anything else.",
  },
  {
    initials: "LS",
    name: "LS",
    date: "December 2024",
    feedback:
      "Thank you for all that you do for TK. You have always gone above and beyond, and it truly shows.",
  },
];

/* ── Stars ───────────────────────────────────────────────────────── */
const Stars = () => (
  <div className="flex items-center gap-0.5" aria-label="5 star rating">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

/* ── Testimonial card ────────────────────────────────────────────── */
const TestimonialCard = ({ t }) => (
  <div className="bg-white rounded-2xl shadow-soft p-7 h-full flex flex-col">
    {/* Quote icon */}
    <div className="mb-4 flex-shrink-0">
      <svg className="w-7 h-7 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
    </div>

    {/* Quote text */}
    <p className="font-sans text-neutral-700 text-base leading-relaxed italic flex-1 mb-6">
      &ldquo;{t.feedback}&rdquo;
    </p>

    {/* Attribution */}
    <div className="flex items-center justify-between gap-3 flex-wrap">
      <div className="flex items-center gap-3">
        {/* Avatar initial */}
        <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
          <span className="font-display text-sm font-semibold text-primary-600">
            {t.initials}
          </span>
        </div>
        <div>
          <p className="font-sans text-sm font-semibold text-neutral-800">{t.name}</p>
          <p className="font-sans text-xs text-neutral-400">
            Parent &middot; {t.date}
          </p>
        </div>
      </div>
      <Stars />
    </div>
  </div>
);

/* ── Testimonials section ────────────────────────────────────────── */
const Testimonials = () => (
  <section className="relative py-20 sm:py-28 bg-primary-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
      >
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
              Parent Stories
            </span>
          </div>
          <h2
            className="font-display font-semibold text-neutral-900 leading-tight"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
          >
            What families say<br />about Little Haven.
          </h2>
        </div>

        {/* Decorative oversized quote mark */}
        <div
          aria-hidden="true"
          className="font-display text-primary-100 select-none flex-shrink-0 hidden sm:block"
          style={{ fontSize: "9rem", lineHeight: 0.75 }}
        >
          &ldquo;
        </div>
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active !bg-primary-500",
          }}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={i} className="h-auto">
              <TestimonialCard t={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

    </div>
  </section>
);

Testimonials.displayName = "Testimonials";
export default memo(Testimonials);
