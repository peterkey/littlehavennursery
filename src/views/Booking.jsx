import { memo } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const EXPECT_ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Duration",
    body: "Approximately 30 minutes",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Location",
    body: "Little Haven Nursery, Rhydlafar Dr, Rhydlafar, Cardiff CF5 6HU",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...sp}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Viewing Times",
    body: "All viewings take place at 10:00 AM on weekdays (Monday to Friday)",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
  },
];

const COVERS = [
  "Tour of our facilities",
  "Overview of our curriculum",
  "Meet our practitioners",
  "Discuss your child's needs",
  "Answer your questions",
];

const inputCls =
  "w-full px-4 py-3 font-sans text-sm text-neutral-800 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 placeholder:text-neutral-400";

const FieldGroup = ({ label, children }) => (
  <div>
    <label className="block font-sans text-sm font-semibold text-neutral-700 mb-1.5">{label}</label>
    {children}
  </div>
);

/* ── Booking ─────────────────────────────────────────────────────── */
const Booking = () => {
  const [state, handleSubmit] = useForm("xldlapzr");

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#faf8f4" }}
      >
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="bg-white rounded-2xl shadow-soft p-10"
          >
            <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-3">Thank You!</h2>
            <p className="font-sans text-neutral-600 leading-relaxed mb-8">
              Your viewing request has been submitted. We&apos;ll be in touch within 24 hours on the next working
              day to confirm your appointment.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold font-sans text-sm rounded-full hover:bg-primary-700 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Return Home
            </Link>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
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
              <span className="w-7 h-px bg-white/35 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/45">
                Book a Visit
              </span>
            </div>
            <h1
              className="font-display font-semibold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              See Little Haven<br />
              <span className="text-primary-200">for yourself.</span>
            </h1>
            <p className="font-sans text-white/60 text-lg leading-relaxed">
              Schedule a visit to explore our nursery and discover how we nurture and care for your child.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── Left: info + map ────────────────────────────── */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease }}
              className="bg-white rounded-2xl shadow-soft p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-px bg-primary-300 flex-shrink-0" />
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
                  Your Visit
                </span>
              </div>
              <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-6 leading-snug">
                What to expect
              </h2>

              <div className="space-y-5">
                {EXPECT_ITEMS.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconBg} ${item.iconColor}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-neutral-800 mb-0.5">{item.title}</p>
                      <p className="font-sans text-sm text-neutral-600 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-teal-50 text-teal-600">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" {...sp} aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-neutral-800 mb-2">What We&apos;ll Cover</p>
                    <ul className="space-y-1.5">
                      {COVERS.map((cover) => (
                        <li key={cover} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-2.5 h-2.5 text-primary-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="font-sans text-sm text-neutral-600">{cover}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease }}
              className="rounded-2xl overflow-hidden shadow-soft h-[300px]"
            >
              <iframe
                title="Little Haven Nursery Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2285.8924142478295!2d-3.284121823817714!3d51.51102651043905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1b79105870cb%3A0x5ca53d8a4961a49f!2sLittle%20Haven%20Nursery!5e1!3m2!1sen!2suk!4v1738684609327!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* ── Right: form ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease }}
            className="bg-white rounded-2xl shadow-soft p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-7 h-px bg-teal-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-teal-600">
                Schedule
              </span>
            </div>
            <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-2 leading-snug">
              Request a viewing
            </h2>
            <p className="font-sans text-neutral-500 text-sm leading-relaxed mb-7">
              Fill in the details below and we&apos;ll confirm your visit within 24 hours on the next working day.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FieldGroup label="First Name *">
                  <input id="firstName" name="firstName" type="text" required className={inputCls} placeholder="Your first name" />
                  <ValidationError prefix="First Name" field="firstName" errors={state.errors} className="font-sans text-red-500 text-xs mt-1" />
                </FieldGroup>
                <FieldGroup label="Last Name *">
                  <input id="lastName" name="lastName" type="text" required className={inputCls} placeholder="Your last name" />
                  <ValidationError prefix="Last Name" field="lastName" errors={state.errors} className="font-sans text-red-500 text-xs mt-1" />
                </FieldGroup>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FieldGroup label="Email Address *">
                  <input id="email" name="email" type="email" required className={inputCls} placeholder="your.email@example.com" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="font-sans text-red-500 text-xs mt-1" />
                </FieldGroup>
                <FieldGroup label="Phone Number *">
                  <input id="phone" name="phone" type="tel" required className={inputCls} placeholder="07123 456789" />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} className="font-sans text-red-500 text-xs mt-1" />
                </FieldGroup>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FieldGroup label="Child's Name *">
                  <input id="childName" name="childName" type="text" required className={inputCls} placeholder="Your child's name" />
                  <ValidationError prefix="Child's Name" field="childName" errors={state.errors} className="font-sans text-red-500 text-xs mt-1" />
                </FieldGroup>
                <FieldGroup label="Child's Age *">
                  <select id="childAge" name="childAge" required className={inputCls}>
                    <option value="">Select age</option>
                    <option value="0-6 months">0–6 months</option>
                    <option value="6-12 months">6–12 months</option>
                    <option value="1-2 years">1–2 years</option>
                    <option value="2-3 years">2–3 years</option>
                    <option value="3-4 years">3–4 years</option>
                    <option value="4-5 years">4–5 years</option>
                    <option value="5+ years">5+ years</option>
                  </select>
                  <ValidationError prefix="Child's Age" field="childAge" errors={state.errors} className="font-sans text-red-500 text-xs mt-1" />
                </FieldGroup>
              </div>

              <FieldGroup label="Preferred Viewing Dates *">
                <textarea
                  id="preferredDates"
                  name="preferredDates"
                  rows="3"
                  required
                  className={inputCls}
                  placeholder="Suggest 2–3 preferred weekdays (e.g. Monday 15th Jan, Wednesday 17th Jan)"
                />
                <ValidationError prefix="Preferred Dates" field="preferredDates" errors={state.errors} className="font-sans text-red-500 text-xs mt-1" />
              </FieldGroup>

              <FieldGroup label="Additional Information">
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows="3"
                  className={inputCls}
                  placeholder="Any questions, concerns, or anything helpful for us to know?"
                />
                <ValidationError prefix="Additional Information" field="additionalInfo" errors={state.errors} className="font-sans text-red-500 text-xs mt-1" />
              </FieldGroup>

              {state.errors && state.errors.length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="font-sans text-red-700 text-sm">Please correct the errors above and try again.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 bg-primary-600 text-white font-semibold font-sans text-sm rounded-full hover:bg-primary-700 disabled:bg-primary-400 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                {state.submitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting…
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" {...sp} aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    Request Viewing
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>

    </div>
  );
};

Booking.displayName = "Booking";
export default memo(Booking);
