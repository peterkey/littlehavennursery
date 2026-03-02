import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const PARTNERS = [
  {
    title: "Cardiff Nurseries",
    description: "We're based in St Fagans, near Radyr — at the heart of Cardiff's thriving communities. Cardiff Council provides helpful guidance for families looking for childcare in their area.",
    href: "https://www.cardiff.gov.uk/ENG/resident/Schools-and-learning/Early-years-and-child-care/Pages/default.aspx",
    external: true,
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Flying Start",
    description: "While Little Haven isn't a Flying Start centre, we work closely with Flying Start practitioners and share their commitment to high standards in early years care.",
    href: "https://gov.wales/flying-start",
    external: true,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    title: "Welsh Government Childcare Funding",
    description: "We're registered for Welsh Government childcare funding schemes including the Foundation Phase and Childcare Offer for Wales — providing funded hours for eligible families.",
    to: "/fees/government-funding",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Community Playthings",
    description: "All the purpose-built furniture and play equipment at Little Haven is made by Community Playthings — a company that shares our values of open-ended, child-centred play.",
    href: "https://www.communityplaythings.co.uk",
    external: true,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

/* ── Community page ──────────────────────────────────────────────── */
const Community = () => (
  <div className="min-h-screen" style={{ background: "#faf8f4" }}>

    {/* ── Hero ─────────────────────────────────────────────── */}
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "380px",
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
        style={{
          background: "radial-gradient(circle, rgba(125,178,255,0.12) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-14"
        style={{ minHeight: "380px", paddingTop: "7rem" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <Link
              to="/about"
              className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 hover:text-white/60 transition-colors"
              aria-label="Back to About Us"
            >
              ← About Us
            </Link>
          </div>
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans text-xs font-semibold bg-white/10 border border-white/15 text-white/80">
              <span className="w-1.5 h-1.5 bg-teal-300 rounded-full" aria-hidden="true" />
              Our Community
            </span>
          </div>
          <h1
            className="font-display font-semibold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Part of something<br />
            <span className="text-primary-200">bigger than ourselves.</span>
          </h1>
          <p className="font-sans text-white/60 text-lg leading-relaxed">
            The partners, organisations, and local connections that enrich the Little Haven experience — for children, families, and practitioners alike.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ── Partners section ──────────────────────────────────── */}
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="max-w-2xl mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
              Partners &amp; Resources
            </span>
          </div>
          <h2
            className="font-display font-semibold text-neutral-900 leading-tight mb-3"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
          >
            The connections that<br />strengthen our practice.
          </h2>
          <p className="font-sans text-neutral-500 text-lg leading-relaxed">
            We work with organisations that share our values — from local government funding schemes to the makers of our thoughtfully chosen play equipment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease }}
            >
              <div className="bg-white rounded-2xl shadow-soft p-7 hover:shadow-medium transition-all duration-300 h-full flex flex-col">
                <div
                  className={`inline-flex w-10 h-10 rounded-xl items-center justify-center mb-5 flex-shrink-0 ${partner.iconBg} ${partner.iconColor}`}
                >
                  <div className="w-5 h-5">{partner.icon}</div>
                </div>
                <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2 leading-tight">
                  {partner.title}
                </h3>
                <p className="font-sans text-sm text-neutral-600 leading-relaxed flex-1 mb-5">
                  {partner.description}
                </p>
                {partner.to ? (
                  <Link
                    to={partner.to}
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors duration-200"
                  >
                    Learn more
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : (
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors duration-200"
                    aria-label={`Visit ${partner.title} website (opens in new tab)`}
                  >
                    Visit website
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>

  </div>
);

Community.displayName = "Community";
export default memo(Community);
