import { memo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

const sp = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const inputCls =
  "w-full px-4 py-3 font-sans text-sm text-neutral-800 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 placeholder:text-neutral-400";

const FieldGroup = ({ label, children }) => (
  <div>
    <label className="block font-sans text-sm font-semibold text-neutral-700 mb-1.5">{label}</label>
    {children}
  </div>
);

const generateInitialMessage = (service, location) => {
  let message = "I'm interested in learning more about ";
  if (service && location) {
    message += `${service} at ${location}. `;
  } else if (service) {
    message += `${service}. `;
  } else if (location) {
    message += `your services at ${location}. `;
  } else {
    message = "I'm interested in learning more about your services. ";
  }
  message += "Please provide me with more information about availability, pricing, and next steps.";
  return message;
};

/* ── Contact ─────────────────────────────────────────────────────── */
const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
    service: "",
    location: "",
    source: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const service = searchParams.get("service");
    const location = searchParams.get("location");
    const source = searchParams.get("source");
    if (service || location || source) {
      setFormData((prev) => ({
        ...prev,
        service: service || "",
        location: location || "",
        source: source || "",
        subject: service ? `Enquiry about ${service}` : "General Inquiry",
        message: generateInitialMessage(service, location),
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const response = await fetch("https://formspree.io/f/xjkwgwzq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          service: formData.service,
          location: formData.location,
          source: formData.source,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        }),
      });
      if (!response.ok) throw new Error("Failed to send message");
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
        service: "",
        location: "",
        source: "",
      });
    } catch {
      setSubmitError("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "#faf8f4" }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "440px",
          background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)",
        }}
      >
        {/* Dot texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 w-[600px] h-[600px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(125,178,255,0.12) 0%, transparent 70%)",
          }}
        />

        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-16"
          style={{ minHeight: "440px", paddingTop: "8rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-7 h-px bg-white/35 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/45">
                Contact Us
              </span>
            </div>
            <h1
              className="font-display font-semibold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              We&apos;d love to hear<br />
              <span className="text-primary-200">from your family.</span>
            </h1>
            <p className="font-sans text-white/60 text-lg leading-relaxed max-w-xl">
              Whether you have questions about our approach, want to check availability, or simply
              want to chat — we&apos;re here and happy to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* ── Left: editorial contact details ──────────────── */}
          <div className="space-y-6">

            {/* Editorial contact block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease }}
              className="bg-white rounded-2xl shadow-soft p-8 sm:p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-7 h-px bg-primary-300 flex-shrink-0" />
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
                  Reach Us
                </span>
              </div>

              {/* Phone */}
              <div className="mb-8 pb-8 border-b border-neutral-100">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                  Call us
                </p>
                <a
                  href="tel:02920891825"
                  className="group flex items-center gap-4 no-underline"
                  aria-label="Call Little Haven Nursery"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500 flex-shrink-0 group-hover:bg-primary-100 transition-colors duration-200">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" {...sp}>
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 14.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.8 4h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 11.9a16 16 0 006.29 6.29l1.06-1.06a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <span
                    className="font-display font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors duration-200"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)" }}
                  >
                    (029) 2089 1825
                  </span>
                </a>
              </div>

              {/* Email */}
              <div className="mb-8 pb-8 border-b border-neutral-100">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                  Email us
                </p>
                <a
                  href="mailto:learn@littlehavennursery.co.uk"
                  className="group flex items-center gap-4 no-underline"
                  aria-label="Email Little Haven Nursery"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0 group-hover:bg-teal-100 transition-colors duration-200">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" {...sp}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <span
                    className="font-display font-medium italic text-neutral-800 group-hover:text-teal-600 transition-colors duration-200 break-all"
                    style={{ fontSize: "clamp(1rem, 1.6vw, 1.2rem)" }}
                  >
                    learn@littlehavennursery.co.uk
                  </span>
                </a>
              </div>

              {/* Address */}
              <div className="mb-8 pb-8 border-b border-neutral-100">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                  Find us
                </p>
                <a
                  href="https://maps.google.com/?q=Little+Haven+Nursery+Cardiff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 no-underline"
                  aria-label="Get directions to Little Haven Nursery"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500 flex-shrink-0 mt-0.5 group-hover:bg-primary-100 transition-colors duration-200">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" {...sp}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-display font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors duration-200 leading-snug"
                      style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
                    >
                      Rhydlafar Drive, Rhydlafar
                    </p>
                    <p className="font-sans text-sm text-neutral-500 mt-0.5">Cardiff CF5 6HU</p>
                  </div>
                </a>
              </div>

              {/* Opening hours */}
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
                  Opening Hours
                </p>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" {...sp}>
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-neutral-800">
                      Monday – Friday: 07:30 – 17:30
                    </p>
                    <p className="font-sans text-xs text-neutral-500 mt-0.5">
                      Closed on Bank Holidays
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Schedule a Visit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)",
              }}
            >
              {/* Subtle dot texture */}
              <div className="relative p-7">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative flex items-start gap-5">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white/80">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" {...sp}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-white mb-1.5 leading-snug">
                      Schedule a Visit
                    </h3>
                    <p className="font-sans text-sm text-white/60 leading-relaxed mb-4">
                      Want to see our nursery in person? Book a guided viewing — all viewings take
                      place at 10:00 AM on weekdays.
                    </p>
                    <Link
                      to="/booking"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-primary-700 font-semibold font-sans text-sm rounded-full hover:bg-primary-50 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-900"
                    >
                      Book a Viewing
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" {...sp}>
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35, ease }}
              className="rounded-2xl overflow-hidden shadow-soft h-[280px]"
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

          {/* ── Right: form ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease }}
            className="bg-white rounded-2xl shadow-soft p-8 sm:p-10"
          >
            <AnimatePresence mode="wait">
              {submitSuccess ? (
                /* ── Success state ─────────────────────────── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="flex flex-col items-center text-center py-10"
                >
                  <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-teal-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-3">
                    Message sent!
                  </h2>
                  <p className="font-sans text-neutral-600 leading-relaxed mb-8 max-w-sm">
                    Thank you for getting in touch. We&apos;ll get back to you within 24 hours on
                    the next working day.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="inline-flex items-center gap-2 px-5 py-3 border border-neutral-200 text-neutral-700 font-semibold font-sans text-sm rounded-full hover:bg-neutral-50 transition-colors duration-200"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                /* ── Form ──────────────────────────────────── */
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-7 h-px bg-teal-300 flex-shrink-0" />
                    <span className="font-sans text-xs font-semibold uppercase tracking-widest text-teal-600">
                      Get in Touch
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-1.5 leading-snug">
                    Send us a message
                  </h2>
                  <p className="font-sans text-neutral-500 text-sm leading-relaxed mb-7">
                    Fill in the details below and we&apos;ll get back to you as soon as possible.
                  </p>

                  {/* Enquiry details banner (URL-param pre-fill) */}
                  {(formData.service || formData.location) && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-primary-50 border border-primary-100 rounded-xl p-4 mb-6"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5">
                          <svg viewBox="0 0 24 24" {...sp}>
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-sans text-sm font-semibold text-primary-900 mb-1">
                            Enquiry Details
                          </p>
                          {formData.service && (
                            <p className="font-sans text-primary-800 text-xs">
                              <strong>Service:</strong> {formData.service}
                            </p>
                          )}
                          {formData.location && (
                            <p className="font-sans text-primary-800 text-xs mt-0.5">
                              <strong>Location:</strong> {formData.location}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <FieldGroup label="Your Name *">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className={inputCls}
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </FieldGroup>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FieldGroup label="Email Address *">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className={inputCls}
                          placeholder="jane@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </FieldGroup>
                      <FieldGroup label="Phone Number">
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className={inputCls}
                          placeholder="07123 456789"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </FieldGroup>
                    </div>

                    <FieldGroup label="Subject *">
                      <select
                        id="subject"
                        name="subject"
                        required
                        className={inputCls}
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Book a Viewing">Book a Viewing</option>
                        <option value="Enrollment">Enrolment</option>
                        <option value="Fees & Welsh Funding">Fees &amp; Welsh Funding</option>
                        <option value="Other">Other</option>
                      </select>
                    </FieldGroup>

                    <FieldGroup label="Message *">
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        className={inputCls}
                        placeholder="How can we help you today?"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </FieldGroup>

                    {/* Hidden fields */}
                    <input type="hidden" name="service" value={formData.service} />
                    <input type="hidden" name="location" value={formData.location} />
                    <input type="hidden" name="source" value={formData.source} />

                    {/* Error state */}
                    {submitError && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                        <p className="font-sans text-red-700 text-sm">{submitError}</p>
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 bg-primary-600 text-white font-semibold font-sans text-sm rounded-full hover:bg-primary-700 disabled:bg-primary-400 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" viewBox="0 0 24 24" {...sp}>
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                          </svg>
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>

    </div>
  );
};

Contact.displayName = "Contact";
export default memo(Contact);
