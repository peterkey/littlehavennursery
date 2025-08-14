import { memo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';
import { Link, useSearchParams } from 'react-router-dom';

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
    source: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Read URL parameters and pre-fill form
  useEffect(() => {
    const service = searchParams.get('service');
    const location = searchParams.get('location');
    const source = searchParams.get('source');
    
    if (service || location || source) {
      setFormData(prev => ({
        ...prev,
        service: service || "",
        location: location || "",
        source: source || "",
        subject: service ? `Enquiry about ${service}` : "General Inquiry",
        message: generateInitialMessage(service, location)
      }));
    }
  }, [searchParams]);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://formspree.io/f/xjkwgwzq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
          userAgent: navigator.userAgent
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitSuccess(true);
      setFormData({ 
        name: "", 
        email: "", 
        phone: "", 
        subject: "General Inquiry", 
        message: "",
        service: "",
        location: "",
        source: ""
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitError("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone",
      content: "(029) 20891825",
      link: "tel:02920891825"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "learn@littlehavennursery.co.uk",
      link: "mailto:learn@littlehavennursery.co.uk"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      content: "Little Haven Nursery, Rhydlafar Dr, Rhydlafar, Cardiff CF5 6HU",
      link: "https://maps.google.com/?q=Little+Haven+Nursery+Cardiff"
    },
    {
      icon: FaInfoCircle,
      title: "Opening Hours",
      content: "Monday - Friday: 07:30 - 17:30",
      subContent: "Closed on Bank Holidays"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-white to-primary-50"
    >
      {/* Header Section */}
      <section className="relative overflow-hidden bg-primary-600 text-white py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg text-primary-100 max-w-content mx-auto">
              We'd love to hear from you. Whether you have questions about our facilities, want to schedule a visit,
              or need help with enrollment, our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 sm:p-12 rounded-lg2 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      {item.link ? (
                        item.title === "Email" ? (
                          <a
                            href={item.link}
                            className="text-primary-600 hover:text-primary-700 transition-colors block truncate"
                            title={item.content}
                          >
                            {item.content}
                          </a>
                        ) : (
                          <a
                            href={item.link}
                            className="text-primary-600 hover:text-primary-700 transition-colors block"
                          >
                            {item.content}
                          </a>
                        )
                      ) : (
                        <p className="text-gray-600">{item.content}</p>
                      )}
                      {item.subContent && (
                        <p className="text-sm text-gray-500 mt-1">{item.subContent}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Schedule a Visit Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 sm:p-12 rounded-lg2 border border-primary-200"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                    <FaInfoCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule a Visit</h3>
                  <p className="text-gray-600 mb-4">
                    Want to see our facilities in person? Book a visit and we'll show you around our nursery.
                  </p>
                  <Link
                    to="/booking"
                    className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg2 hover:bg-primary-700 transition-colors"
                  >
                    Book a Viewing
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg h-[400px] bg-white"
            >
              <iframe
                title="Little Haven Map"
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

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white shadow-xl rounded-lg2 p-8 sm:p-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            {/* Service Information Display */}
            {(formData.service || formData.location) && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6"
              >
                <div className="flex items-start gap-3">
                  <FaInfoCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1">Enquiry Details</h3>
                    {formData.service && (
                      <p className="text-primary-800 text-sm mb-1">
                        <strong>Service:</strong> {formData.service}
                      </p>
                    )}
                    {formData.location && (
                      <p className="text-primary-800 text-sm">
                        <strong>Location:</strong> {formData.location}
                      </p>
                    )}
                    {formData.source && (
                      <p className="text-primary-800 text-sm">
                        <strong>Source:</strong> {formData.source}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="(029) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Book a Viewing">Book a Viewing</option>
                  <option value="Enrollment">Enrollment</option>
                  <option value="Fees & Welsh Funding">Fees & Welsh Funding</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="How can we help you today?"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* Hidden Fields for Service Information */}
              <input type="hidden" name="service" value={formData.service} />
              <input type="hidden" name="location" value={formData.location} />
              <input type="hidden" name="source" value={formData.source} />

              {/* Error Message */}
              {submitError && (
                <div className="text-red-600 text-sm">{submitError}</div>
              )}

              {/* Success Message */}
              {submitSuccess && (
                <div className="bg-green-50 text-green-800 rounded-lg p-4">
                  Thank you! Your message has been sent. We'll get back to you within 24 hours on the next working day.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg2
                         hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                         focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed
                         transition-colors duration-200"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
