import { memo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO/SEO";

const ease = [0.22, 1, 0.36, 1];

const inputCls =
  "w-full px-4 py-3 font-sans text-sm text-neutral-800 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 placeholder:text-neutral-400";

const ADMISSION_STEPS = [
  {
    step: 1,
    title: "Initial Enquiry",
    description: "Contact us to discuss your child's needs and our availability.",
    svgPath: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
  },
  {
    step: 2,
    title: "Visit &amp; Tour",
    description: "Book a visit to see our facilities and meet our team.",
    svgPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    step: 3,
    title: "Application",
    description: "Complete the registration form and provide required documents.",
    svgPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
  },
  {
    step: 4,
    title: "Welcome",
    description: "Settling in sessions and your child's first day at Little Haven.",
    svgPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
];

const ELIGIBILITY_INFO = [
  {
    title: "Age Range",
    description: "We welcome children from 6 weeks to 5 years old.",
    svgPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
  },
  {
    title: "Opening Hours",
    description: "Monday to Friday, 7:30 AM to 5:30 PM.",
    svgPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    title: "Flexible Care",
    description: "Full-time, part-time, and wrap-around care available.",
    svgPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-500",
  },
  {
    title: "Funding Support",
    description: "30 hours free childcare and other Welsh Government schemes.",
    svgPath: "M12 2v20M16 6H8.5A2.5 2.5 0 006 8.5 2.5 2.5 0 008.5 11h7a2.5 2.5 0 010 5H6M12 6h4M12 16h4",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
];

/* ── Admissions ──────────────────────────────────────────────────── */
const Admissions = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    preferredStartDate: "",
    message: "",
    howDidYouHear: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.childName.trim()) newErrors.childName = "Child's name is required";
    if (!formData.childAge.trim()) newErrors.childAge = "Child's age is required";
    if (!formData.preferredStartDate.trim()) newErrors.preferredStartDate = "Preferred start date is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    // TODO: Implement form submission to backend/email service
    console.log("Form data:", formData);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
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
              We&apos;ve received your enquiry and will be in touch within 24 hours on the next working day.
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
    <>
      <SEO
        title="Admissions &amp; Enquiry"
        description="Start your child's journey at Little Haven Nursery. Learn about our admission process, book a visit, and get in touch with our team."
        keywords={["nursery admissions", "childcare enquiry", "nursery registration", "Cardiff nursery"]}
        canonicalUrl="/admissions"
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
                <span className="w-7 h-px bg-white/35 flex-shrink-0" />
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/45">
                  Admissions
                </span>
              </div>
              <h1
                className="font-display font-semibold text-white leading-tight mb-4"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
              >
                Start your child&apos;s<br />
                <span className="text-primary-200">journey with us.</span>
              </h1>
              <p className="font-sans text-white/60 text-lg leading-relaxed">
                Join the Little Haven family and give your child the best start in life. Our simple admission
                process makes it easy to get started.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Admission Steps ───────────────────────────────────── */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="max-w-2xl mb-14"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
                  The Process
                </span>
              </div>
              <h2
                className="font-display font-semibold text-neutral-900 leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
              >
                Simple four-step<br />
                <span className="text-primary-600 italic">admission process.</span>
              </h2>
              <p className="font-sans text-neutral-500 text-lg leading-relaxed">
                From your first enquiry to your child&apos;s first day, we&apos;re here to guide you every step of the way.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ADMISSION_STEPS.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.09, ease }}
                  className="bg-white rounded-2xl shadow-soft p-7 border border-neutral-100 relative group overflow-hidden"
                >
                  <span
                    className="absolute top-4 right-5 font-display font-bold text-neutral-100 select-none"
                    style={{ fontSize: "3.5rem", lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 ${step.iconBg} ${step.iconColor}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                      <path d={step.svgPath} />
                    </svg>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2 leading-snug pr-8"
                    dangerouslySetInnerHTML={{ __html: step.title }}
                  />
                  <p className="font-sans text-sm text-neutral-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Eligibility Info ─────────────────────────────────── */}
        <section className="py-20 sm:py-28" style={{ background: "#faf8f4" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="max-w-2xl mb-14"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-teal-300 flex-shrink-0" />
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-teal-600">
                  At a Glance
                </span>
              </div>
              <h2
                className="font-display font-semibold text-neutral-900 leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
              >
                Everything you need<br />
                <span className="text-primary-600 italic">to know.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ELIGIBILITY_INFO.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.09, ease }}
                  className="bg-white rounded-2xl shadow-soft p-7 hover:shadow-medium transition-all duration-300"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 ${info.iconBg} ${info.iconColor}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                      <path d={info.svgPath} />
                    </svg>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2 leading-snug">{info.title}</h3>
                  <p className="font-sans text-sm text-neutral-600 leading-relaxed">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Enquiry Form ─────────────────────────────────────── */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
                  Get Started
                </span>
                <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
              </div>
              <h2
                className="font-display font-semibold text-neutral-900 leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
              >
                Send us an enquiry
              </h2>
              <p className="font-sans text-neutral-500 text-lg leading-relaxed">
                Ready to begin your child&apos;s journey? Fill out the form below and we&apos;ll be in touch within
                24 hours on the next working day.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-soft p-8 sm:p-10"
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="firstName" className="block font-sans text-sm font-semibold text-neutral-700 mb-1.5">
                    First Name *
                  </label>
                  <input
                    type="text" id="firstName" name="firstName"
                    value={formData.firstName} onChange={handleInputChange}
                    className={`${inputCls} ${errors.firstName ? "border-red-300 focus:ring-red-400" : ""}`}
                    aria-invalid={!!errors.firstName} aria-describedby={errors.firstName ? "firstName-error" : undefined}
                  />
                  {errors.firstName && <p id="firstName-error" className="font-sans text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block font-sans text-sm font-semibold text-neutral-700 mb-1.5">
                    Last Name *
                  </label>
                  <input
                    type="text" id="lastName" name="lastName"
                    value={formData.lastName} onChange={handleInputChange}
                    className={`${inputCls} ${errors.lastName ? "border-red-300 focus:ring-red-400" : ""}`}
                    aria-invalid={!!errors.lastName} aria-describedby={errors.lastName ? "lastName-error" : undefined}
                  />
                  {errors.lastName && <p id="lastName-error" className="font-sans text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="email" className="block font-sans text-sm font-semibold text-neutral-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleInputChange}
                    className={`${inputCls} ${errors.email ? "border-red-300 focus:ring-red-400" : ""}`}
                    aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && <p id="email-error" className="font-sans text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block font-sans text-sm font-semibold text-neutral-700 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel" id="phone" name="phone"
                    value={formData.phone} onChange={handleInputChange}
                    className={`${inputCls} ${errors.phone ? "border-red-300 focus:ring-red-400" : ""}`}
                    aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && <p id="phone-error" className="font-sans text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="childName" className="block font-sans text-sm font-semibold text-neutral-700 mb-1.5">
                    Child&apos;s Name *
                  </label>
                  <input
                    type="text" id="childName" name="childName"
                    value={formData.childName} onChange={handleInputChange}
                    className={`${inputCls} ${errors.childName ? "border-red-300 focus:ring-red-400" : ""}`}
                    aria-invalid={!!errors.childName} aria-describedby={errors.childName ? "childName-error" : undefined}
                  />
                  {errors.childName && <p id="childName-error" className="font-sans text-red-500 text-xs mt-1">{errors.childName}</p>}
                </div>
                <div>
                  <label htmlFor="childAge" className="block font-sans text-sm font-semibold text-neutral-700 mb-1.5">
                    Child&apos;s Age *
                  </label>
                  <input
                    type="text" id="childAge" name="childAge"
                    placeholder="e.g. 2 years 6 months"
                    value={formData.childAge} onChange={handleInputChange}
                    className={`${inputCls} ${errors.childAge ? "border-red-300 focus:ring-red-400" : ""}`}
                    aria-invalid={!!errors.childAge} aria-describedby={errors.childAge ? "childAge-error" : undefined}
                  />
                  {errors.childAge && <p id="childAge-error" className="font-sans text-red-500 text-xs mt-1">{errors.childAge}</p>}
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="preferredStartDate" className="block font-sans text-sm font-semibold text-neutral-700 mb-1.5">
                  Preferred Start Date *
                </label>
                <input
                  type="date" id="preferredStartDate" name="preferredStartDate"
                  value={formData.preferredStartDate} onChange={handleInputChange}
                  className={`${inputCls} ${errors.preferredStartDate ? "border-red-300 focus:ring-red-400" : ""}`}
                  aria-invalid={!!errors.preferredStartDate}
                  aria-describedby={errors.preferredStartDate ? "preferredStartDate-error" : undefined}
                />
                {errors.preferredStartDate && (
                  <p id="preferredStartDate-error" className="font-sans text-red-500 text-xs mt-1">{errors.preferredStartDate}</p>
                )}
              </div>

              <div className="mb-5">
                <label htmlFor="howDidYouHear" className="block font-sans text-sm font-semibold text-neutral-700 mb-1.5">
                  How did you hear about us?
                </label>
                <select
                  id="howDidYouHear" name="howDidYouHear"
                  value={formData.howDidYouHear} onChange={handleInputChange}
                  className={inputCls}
                >
                  <option value="">Please select…</option>
                  <option value="search">Google Search</option>
                  <option value="social">Social Media</option>
                  <option value="recommendation">Recommendation</option>
                  <option value="driveby">Drove Past</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-7">
                <label htmlFor="message" className="block font-sans text-sm font-semibold text-neutral-700 mb-1.5">
                  Additional Information
                </label>
                <textarea
                  id="message" name="message" rows={4}
                  placeholder="Tell us about your child's needs, any questions, or specific requirements…"
                  value={formData.message} onChange={handleInputChange}
                  className={inputCls}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 bg-primary-600 text-white font-semibold font-sans text-sm rounded-full hover:bg-primary-700 disabled:bg-primary-400 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  "Send Enquiry"
                )}
              </button>
            </motion.form>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden py-20 sm:py-28"
          style={{ background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="flex items-center justify-center gap-2.5 mb-4">
                <span className="w-7 h-px bg-white/35 flex-shrink-0" />
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/45">
                  Next Step
                </span>
                <span className="w-7 h-px bg-white/35 flex-shrink-0" />
              </div>
              <h2
                className="font-display font-semibold text-white leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
              >
                Ready to take the<br />
                <span className="text-primary-200">next step?</span>
              </h2>
              <p className="font-sans text-white/60 text-lg leading-relaxed mb-8 max-w-lg mx-auto">
                Book a viewing to see our facilities in person and meet our wonderful team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-700 font-semibold font-sans text-sm rounded-full hover:bg-primary-50 shadow-soft hover:shadow-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Book a Viewing
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold font-sans text-sm rounded-full hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary-700"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.34 12 19.79 19.79 0 011.27 3.45 2 2 0 013.27 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.4a16 16 0 006.54 6.54l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Call Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

Admissions.displayName = "Admissions";
export default memo(Admissions);
