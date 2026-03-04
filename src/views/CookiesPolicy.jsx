import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const ShieldIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
const EyeIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>;
const CogIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>;
const CookieIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><circle cx="12" cy="12" r="10" /><circle cx="9.5" cy="9" r="1" fill="currentColor" stroke="none" /><circle cx="15" cy="10.5" r="0.75" fill="currentColor" stroke="none" /><circle cx="10" cy="15" r="0.75" fill="currentColor" stroke="none" /><circle cx="14.5" cy="14" r="1" fill="currentColor" stroke="none" /></svg>;
const TrashIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" /></svg>;
const EnvelopeIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
const PhoneIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.34 12 19.79 19.79 0 011.27 3.45 2 2 0 013.27 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.4a16 16 0 006.54 6.54l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>;

const DOT_BG = "radial-gradient(circle at 2px 2px, white 1px, transparent 0)";

const lastUpdated = "2024-01-15";

const cookieTypes = [
  {
    title: "Essential Cookies",
    description: "These cookies are necessary for the website to function properly and cannot be disabled.",
    examples: ["Authentication", "Security", "Basic functionality"],
    icon: ShieldIcon,
    iconColor: "text-primary-600",
    iconBg: "bg-primary-50",
    badgeColor: "bg-primary-100 text-primary-700"
  },
  {
    title: "Analytics Cookies",
    description: "Help us understand how visitors interact with our website so we can improve it.",
    examples: ["Page views", "User behaviour", "Performance metrics"],
    icon: EyeIcon,
    iconColor: "text-teal-600",
    iconBg: "bg-teal-50",
    badgeColor: "bg-teal-100 text-teal-700"
  },
  {
    title: "Functional Cookies",
    description: "Remember your preferences and enhance your browsing experience.",
    examples: ["Language settings", "Form preferences", "Personalisation"],
    icon: CogIcon,
    iconColor: "text-primary-500",
    iconBg: "bg-primary-50",
    badgeColor: "bg-primary-100 text-primary-600"
  },
  {
    title: "Marketing Cookies",
    description: "Used to deliver relevant content and track the effectiveness of our communications.",
    examples: ["Social media", "Advertising", "Content recommendations"],
    icon: CookieIcon,
    iconColor: "text-teal-500",
    iconBg: "bg-teal-50",
    badgeColor: "bg-teal-100 text-teal-600"
  }
];

const cookieDetails = [
  { name: "session_id", purpose: "Maintains your session while using the website", duration: "Session only", type: "Essential" },
  { name: "csrf_token", purpose: "Protects against cross-site request forgery attacks", duration: "Session only", type: "Essential" },
  { name: "language_pref", purpose: "Remembers your preferred language setting", duration: "1 year", type: "Functional" },
  { name: "analytics_id", purpose: "Tracks website usage for improvement purposes", duration: "2 years", type: "Analytics" },
  { name: "marketing_consent", purpose: "Remembers your marketing preferences", duration: "1 year", type: "Marketing" }
];

const typeBadgeClass = (type) => {
  switch (type) {
    case 'Essential': return 'bg-primary-100 text-primary-700';
    case 'Analytics': return 'bg-teal-100 text-teal-700';
    case 'Functional': return 'bg-primary-50 text-primary-600';
    default: return 'bg-teal-50 text-teal-600';
  }
};

const ProseDot = () => (
  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
);

const CookiesPolicy = memo(() => (
  <>
    <SEO
      title="Cookies Policy"
      description="Learn about how Little Haven Nursery uses cookies on our website. Understand what cookies are, how we use them, and how you can manage your preferences."
      keywords={['cookies policy', 'website cookies', 'cookie preferences', 'privacy settings', 'nursery website']}
      canonicalUrl="/cookies-policy"
    />

    {/* Hero */}
    <section
      className="relative overflow-hidden text-white py-20 sm:py-28"
      style={{ background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: DOT_BG, backgroundSize: "32px 32px", opacity: 0.04 }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none" style={{ background: "radial-gradient(circle at 100% 100%, rgba(147,197,253,0.06) 0%, transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-primary-300/60 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-300">Legal</span>
          </div>
          <h1
            className="font-display font-semibold leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}
          >
            Cookies{" "}
            <em className="not-italic text-primary-200">Policy</em>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mb-8">
            Understand how we use cookies to improve your experience on our website, and
            how you can manage your preferences.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
            <CookieIcon className="w-4 h-4 text-primary-300" />
            <span className="font-sans text-sm text-white/80">Last updated: {lastUpdated}</span>
          </div>
        </motion.div>
      </div>
    </section>

    {/* What Are Cookies */}
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">Overview</span>
          </div>
          <h2 className="font-display font-semibold text-neutral-900 mb-6" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            What Are Cookies?
          </h2>
          <div className="space-y-4 mb-8">
            <p className="font-sans text-neutral-600 leading-relaxed text-lg">
              Cookies are small text files stored on your device when you visit our website. They help us
              provide a better experience by remembering your preferences, analysing how you use our site,
              and personalising content.
            </p>
            <p className="font-sans text-neutral-600 leading-relaxed text-lg">
              Cookies do not contain any personal information that could identify you individually, but
              they may contain information about your device and how you interact with our website.
            </p>
          </div>

          <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <CookieIcon className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <p className="font-sans font-semibold text-primary-900 text-sm mb-1">Cookie Notice</p>
              <p className="font-sans text-primary-700/80 text-sm leading-relaxed">
                By continuing to use our website, you consent to our use of cookies in accordance with
                this policy. You can change your cookie preferences at any time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Cookie Types */}
    <section className="py-16 sm:py-24" style={{ background: "#faf8f4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">Categories</span>
          </div>
          <h2 className="font-display font-semibold text-neutral-900 leading-tight" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Types of Cookies We Use
          </h2>
          <p className="font-sans text-neutral-500 text-lg leading-relaxed mt-3">
            We use different types of cookies for various purposes to enhance your browsing experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cookieTypes.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-6 sm:p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${type.iconBg}`}>
                  <type.icon className={`w-6 h-6 ${type.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-neutral-900 text-lg">{type.title}</h3>
                  <p className="font-sans text-neutral-500 text-sm leading-relaxed mt-1">{type.description}</p>
                </div>
              </div>
              <div className="ml-16">
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Examples</p>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((ex, j) => (
                    <span key={j} className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${type.badgeColor}`}>
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Cookie Details Table */}
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">Details</span>
          </div>
          <h2 className="font-display font-semibold text-neutral-900 mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            Specific Cookies We Use
          </h2>
          <p className="font-sans text-neutral-500 leading-relaxed mb-8">
            Below is a detailed list of the specific cookies we use, their purpose, and how long they remain on your device.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-neutral-100 shadow-soft">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-100">
                  <th className="px-5 py-4 text-left font-sans text-xs font-semibold uppercase tracking-wider text-neutral-500">Cookie Name</th>
                  <th className="px-5 py-4 text-left font-sans text-xs font-semibold uppercase tracking-wider text-neutral-500">Purpose</th>
                  <th className="px-5 py-4 text-left font-sans text-xs font-semibold uppercase tracking-wider text-neutral-500">Duration</th>
                  <th className="px-5 py-4 text-left font-sans text-xs font-semibold uppercase tracking-wider text-neutral-500">Type</th>
                </tr>
              </thead>
              <tbody>
                {cookieDetails.map((cookie, i) => (
                  <tr key={i} className={`border-b border-neutral-50 ${i % 2 !== 0 ? 'bg-neutral-50/50' : 'bg-white'}`}>
                    <td className="px-5 py-4 font-mono text-sm text-neutral-800 font-medium">{cookie.name}</td>
                    <td className="px-5 py-4 font-sans text-sm text-neutral-600 leading-relaxed">{cookie.purpose}</td>
                    <td className="px-5 py-4 font-sans text-sm text-neutral-500 whitespace-nowrap">{cookie.duration}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${typeBadgeClass(cookie.type)}`}>
                        {cookie.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Third-Party + Managing */}
    <section className="py-16 sm:py-24" style={{ background: "#faf8f4" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">Third-Party</span>
            </div>
            <h2 className="font-display font-semibold text-neutral-900 mb-4" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.875rem)" }}>
              Third-Party Cookies
            </h2>
            <p className="font-sans text-neutral-500 text-sm leading-relaxed mb-5">
              Some cookies are set by third-party services we use to enhance functionality and analyse
              website performance. These may include:
            </p>
            <ul className="space-y-3">
              {[
                { label: "Google Analytics", detail: "Helps us understand how visitors use our website" },
                { label: "Social Media Platforms", detail: "Enable social sharing and integration features" },
                { label: "Payment Processors", detail: "Secure payment processing for online transactions" },
                { label: "Content Delivery Networks", detail: "Improve website loading speed and performance" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ProseDot />
                  <div>
                    <span className="font-sans font-semibold text-neutral-800 text-sm">{item.label}: </span>
                    <span className="font-sans text-neutral-500 text-sm">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="font-sans text-neutral-400 text-xs leading-relaxed mt-5">
              These third-party services have their own privacy policies. We recommend reviewing their
              policies to understand how they handle your information.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">Preferences</span>
            </div>
            <h2 className="font-display font-semibold text-neutral-900 mb-4" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.875rem)" }}>
              Managing Cookies
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-sans font-semibold text-neutral-800 text-sm mb-2">Browser Settings</h3>
                <p className="font-sans text-neutral-500 text-sm leading-relaxed">
                  Most browsers allow you to block or delete cookies through their settings. You can block
                  all cookies, only third-party cookies, or set preferences for specific websites.
                </p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-neutral-800 text-sm mb-2">Cookie Consent Tool</h3>
                <p className="font-sans text-neutral-500 text-sm leading-relaxed">
                  Our cookie consent tool lets you accept or decline non-essential cookies and modify your
                  preferences at any time.
                </p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-neutral-800 text-sm mb-2">Mobile Devices</h3>
                <p className="font-sans text-neutral-500 text-sm leading-relaxed">
                  On mobile, you can manage cookies through your device settings or browser app. The
                  process varies by device and operating system.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
              <TrashIcon className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-sans font-semibold text-amber-900 text-sm">Important Note</p>
                <p className="font-sans text-amber-700/80 text-xs leading-relaxed mt-1">
                  Blocking certain cookies may affect the functionality of our website. Essential cookies
                  cannot be disabled as they are necessary for basic website operation.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    {/* Updates + Contact */}
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">Updates</span>
            </div>
            <h2 className="font-display font-semibold text-neutral-900 mb-4" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.875rem)" }}>
              Updates to This Policy
            </h2>
            <p className="font-sans text-neutral-500 text-sm leading-relaxed mb-5">
              We may update this cookies policy to reflect changes in our practices, technology, or legal
              requirements. When we make changes, we will:
            </p>
            <ul className="space-y-3">
              {[
                "Update the \"Last updated\" date at the top of this policy",
                "Notify you of significant changes through our website or email",
                "Provide you with an opportunity to review and accept the updated policy"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ProseDot />
                  <span className="font-sans text-neutral-500 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">Contact</span>
            </div>
            <h2 className="font-display font-semibold text-neutral-900 mb-4" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.875rem)" }}>
              Contact Us
            </h2>
            <p className="font-sans text-neutral-500 text-sm leading-relaxed mb-6">
              If you have questions about our use of cookies or this policy, please get in touch:
            </p>
            <div className="bg-neutral-50 rounded-2xl border border-neutral-100 p-6 space-y-4">
              <a
                href="mailto:learn@littlehavennursery.co.uk"
                className="flex items-center gap-3 group"
              >
                <EnvelopeIcon className="w-4 h-4 text-neutral-400 flex-shrink-0 group-hover:text-primary-500 transition-colors" />
                <span className="font-sans text-sm text-neutral-600 group-hover:text-primary-600 transition-colors">
                  learn@littlehavennursery.co.uk
                </span>
              </a>
              <a
                href="tel:02920891825"
                className="flex items-center gap-3 group"
              >
                <PhoneIcon className="w-4 h-4 text-neutral-400 flex-shrink-0 group-hover:text-primary-500 transition-colors" />
                <span className="font-sans text-sm text-neutral-600 group-hover:text-primary-600 transition-colors">
                  02920 891825
                </span>
              </a>
              <p className="font-sans text-xs text-neutral-400 pt-2 border-t border-neutral-100">
                We aim to respond to all cookie-related enquiries within 24 hours on working days.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    {/* CTA */}
    <section
      className="relative overflow-hidden text-white py-20"
      style={{ background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: DOT_BG, backgroundSize: "32px 32px", opacity: 0.04 }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-4">
            Need More Information?
          </h2>
          <p className="font-sans text-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            If you need clarification on any aspect of our cookies policy or have concerns about how
            we use cookies, please don&apos;t hesitate to get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:learn@littlehavennursery.co.uk"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold font-sans rounded-full shadow-medium hover:bg-primary-50 transition-all duration-200"
            >
              <EnvelopeIcon className="w-4 h-4" />
              Contact Privacy Team
            </a>
            <Link
              to="/privacy-policy"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold font-sans rounded-full hover:bg-white/10 transition-all duration-200"
            >
              View Privacy Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </>
));

CookiesPolicy.displayName = 'CookiesPolicy';
export default CookiesPolicy;
