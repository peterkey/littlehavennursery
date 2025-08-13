import { motion } from 'framer-motion';
import { FaClock, FaCalendarAlt, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
import SEO from '../components/SEO/SEO';

const OpeningHours = () => {


  const openingHours = [
    {
      day: "Monday",
      open: "7:30 AM",
      close: "5:30 PM",
      note: "Full day care available"
    },
    {
      day: "Tuesday",
      open: "7:30 AM",
      close: "5:30 PM",
      note: "Full day care available"
    },
    {
      day: "Wednesday",
      open: "7:30 AM",
      close: "5:30 PM",
      note: "Full day care available"
    },
    {
      day: "Thursday",
      open: "7:30 AM",
      close: "5:30 PM",
      note: "Full day care available"
    },
    {
      day: "Friday",
      open: "7:30 AM",
      close: "5:30 PM",
      note: "Full day care available"
    },
    {
      day: "Saturday",
      open: "Closed",
      close: "Closed",
      note: "Weekend care not available"
    },
    {
      day: "Sunday",
      open: "Closed",
      close: "Closed",
      note: "Weekend care not available"
    }
  ];



  const importantNotes = [
    "We are closed on all Bank Holidays",
    "Doors will close on Christmas Eve 2025 at 1:00 PM and will reopen on 5th January 2026 at 7:30AM",
    "We are open year-round except for the Christmas break",
    "Emergency care may be available during closures - contact us directly"
  ];

  return (
    <>
      <SEO
        title="Opening Hours & Term Dates"
        description="View our nursery opening hours, term dates, and holiday closures. We offer flexible childcare options from 7:30 AM to 5:30 PM, Monday to Friday."
        keywords={['nursery opening hours', 'term dates', 'holiday closures', 'childcare hours', 'Cardiff nursery']}
        canonicalUrl="/opening-hours"
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
              Opening Hours & Term Dates
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-100 max-w-content mx-auto"
            >
              Flexible childcare hours to fit your family's schedule. 
              We're open Monday to Friday with various session options available.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Daily Opening Hours</h2>
            <p className="text-lg text-gray-600 max-w-content mx-auto">
              We provide consistent, reliable childcare throughout the week
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-xl rounded-lg2 overflow-hidden">
              <div className="bg-primary-600 text-white px-8 py-6">
                <div className="flex items-center justify-center gap-3">
                  <FaClock className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Weekly Schedule</h3>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {openingHours.map((day, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-semibold text-sm">
                          {day.day.slice(0, 3)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{day.day}</h4>
                        <p className="text-sm text-gray-600">{day.note}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">
                        {day.open} - {day.close}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Important Information */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Important Information</h2>
            <p className="text-lg text-gray-600 max-w-content mx-auto">
              Please note these important details about our operating schedule
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-xl rounded-lg2 p-8 sm:p-12">
              <div className="flex items-center gap-3 mb-6">
                <FaExclamationTriangle className="w-6 h-6 text-amber-500" />
                <h3 className="text-xl font-semibold text-gray-900">Closure Information</h3>
              </div>
              
              <div className="space-y-4">
                {importantNotes.map((note, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{note}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg2">
                <div className="flex items-start gap-3">
                  <FaInfoCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Need to Know More?</h4>
                    <p className="text-blue-800 text-sm">
                      For specific dates, holiday arrangements, or emergency care options, 
                      please contact us directly. We're happy to discuss your individual needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About Our Schedule?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-content mx-auto">
            We're here to help you understand our opening hours and find the perfect care schedule for your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:02920891825"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg2 shadow-lg hover:bg-primary-50 transition-all duration-200"
            >
              <FaClock className="mr-2" />
              Call Us
            </a>
            <a
              href="mailto:learn@littlehavennursery.co.uk"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg2 hover:bg-white/10 transition-all duration-200"
            >
              <FaCalendarAlt className="mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OpeningHours;
