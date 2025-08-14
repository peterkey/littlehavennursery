import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaCalendarAlt, FaFileAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import SEO from '../components/SEO/SEO';

const Admissions = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    preferredStartDate: '',
    message: '',
    howDidYouHear: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.childName.trim()) newErrors.childName = 'Child\'s name is required';
    if (!formData.childAge.trim()) newErrors.childAge = 'Child\'s age is required';
    if (!formData.preferredStartDate.trim()) newErrors.preferredStartDate = 'Preferred start date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // TODO: Implement form submission to backend/email service
    console.log('Form data:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your enquiry! We will be in touch within 24 hours on the next working day.');
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', childName: '',
        childAge: '', preferredStartDate: '', message: '', howDidYouHear: ''
      });
    }, 2000);
  };

  const admissionSteps = [
    {
      icon: FaPhone,
      title: "Initial Enquiry",
      description: "Contact us to discuss your child's needs and our availability",
      step: "1"
    },
    {
      icon: FaCalendarAlt,
      title: "Visit & Tour",
      description: "Book a visit to see our facilities and meet our team",
      step: "2"
    },
    {
      icon: FaFileAlt,
      title: "Application",
      description: "Complete the registration form and provide required documents",
      step: "3"
    },
    {
      icon: FaUserGraduate,
      title: "Welcome",
      description: "Settling in sessions and your child's first day",
      step: "4"
    }
  ];

  const eligibilityInfo = [
    {
      title: "Age Range",
      description: "We welcome children from 6 weeks to 5 years old",
      icon: "👶"
    },
    {
      title: "Opening Hours",
      description: "Monday to Friday, 7:30 AM to 5:30 PM",
      icon: "🕐"
    },
    {
      title: "Flexible Care",
      description: "Full-time, part-time, and wrap-around care available",
      icon: "🔄"
    },
    {
      title: "Funding Support",
      description: "30 hours free childcare and other government schemes",
      icon: "💰"
    }
  ];

  return (
    <>
      <SEO
        title="Admissions & Enquiry"
        description="Start your child's journey at Little Haven Nursery. Learn about our admission process, book a visit, and get in touch with our team."
        keywords={['nursery admissions', 'childcare enquiry', 'nursery registration', 'Cardiff nursery']}
        canonicalUrl="/admissions"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Start Your Child's Journey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-100 max-w-content mx-auto"
            >
              Join our Little Haven family and give your child the best start in life. 
              Our simple admission process makes it easy to get started.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple 4-Step Process</h2>
            <p className="text-lg text-gray-600 max-w-content mx-auto">
              From your first enquiry to your child's first day, we're here to guide you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Information */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Eligibility & Information</h2>
            <p className="text-lg text-gray-600 max-w-content mx-auto">
              Everything you need to know about joining Little Haven Nursery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eligibilityInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 sm:p-12 rounded-lg2 shadow-md text-center"
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Started Today</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-content mx-auto">
              Ready to begin your child's journey with us? Fill out the form below and we'll be in touch within 24 hours on the next working day.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-lg2 p-8 sm:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg2 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={errors.firstName ? 'true' : 'false'}
                  aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                />
                {errors.firstName && (
                  <p id="firstName-error" className="mt-1 text-sm text-red-600">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg2 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={errors.lastName ? 'true' : 'false'}
                  aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                />
                {errors.lastName && (
                  <p id="lastName-error" className="mt-1 text-sm text-red-600">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg2 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg2 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-2">
                  Child's Name *
                </label>
                <input
                  type="text"
                  id="childName"
                  name="childName"
                  value={formData.childName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg2 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.childName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={errors.childName ? 'true' : 'false'}
                  aria-describedby={errors.childName ? 'childName-error' : undefined}
                />
                {errors.childName && (
                  <p id="childName-error" className="mt-1 text-sm text-red-600">
                    {errors.childName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
                  Child's Age *
                </label>
                <input
                  type="text"
                  id="childAge"
                  name="childAge"
                  placeholder="e.g., 2 years 6 months"
                  value={formData.childAge}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg2 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.childAge ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={errors.childAge ? 'true' : 'false'}
                  aria-describedby={errors.childAge ? 'childAge-error' : undefined}
                />
                {errors.childAge && (
                  <p id="childAge-error" className="mt-1 text-sm text-red-600">
                    {errors.childAge}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="preferredStartDate" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Start Date *
              </label>
              <input
                type="date"
                id="preferredStartDate"
                name="preferredStartDate"
                value={formData.preferredStartDate}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg2 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  errors.preferredStartDate ? 'border-red-500' : 'border-gray-300'
                }`}
                aria-invalid={errors.preferredStartDate ? 'true' : 'false'}
                aria-describedby={errors.preferredStartDate ? 'preferredStartDate-error' : undefined}
              />
              {errors.preferredStartDate && (
                <p id="preferredStartDate-error" className="mt-1 text-sm text-red-600">
                  {errors.preferredStartDate}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-2">
                How did you hear about us?
              </label>
              <select
                id="howDidYouHear"
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Please select...</option>
                <option value="search">Google Search</option>
                <option value="social">Social Media</option>
                <option value="recommendation">Recommendation</option>
                <option value="driveby">Drove Past</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your child's needs, any questions you have, or specific requirements..."
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg2 shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Enquiry'
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-content mx-auto">
            Book a viewing to see our facilities in person and meet our wonderful team.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg2 shadow-lg hover:bg-primary-50 transition-all duration-200"
            >
              <FaCalendarAlt className="mr-2" />
              Book a Viewing
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg2 hover:bg-white/10 transition-all duration-200"
            >
              <FaPhone className="mr-2" />
              Call Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admissions;
