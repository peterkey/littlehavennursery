import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";

const Booking = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-white to-primary-50"
    >
      {/* Header Section */}
      <section className="relative overflow-hidden bg-primary-600 text-white py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Book a Viewing</h1>
            <p className="text-lg text-primary-100">
              Schedule a visit to explore our nursery and see how we can provide the best care for your child.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Booking Info */}
          <div className="space-y-8">
            {/* Visit Information */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <FaClock className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Duration</h3>
                    <p className="text-gray-600">Approximately 30 minutes</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Little Haven Nursery, Rhydlafar Dr, Rhydlafar, Cardiff CF5 6HU</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <FaInfoCircle className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">What We'll Cover</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Tour of our facilities</li>
                      <li>Overview of our curriculum</li>
                      <li>Meet our staff</li>
                      <li>Discuss your child's needs</li>
                      <li>Answer your questions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] bg-white">
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
            </div>
          </div>

          {/* Right Column: Calendly Widget */}
          <div className="bg-white shadow-xl rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Visit</h2>
            <p className="text-gray-600 mb-6">
              Choose a convenient time for your visit. We look forward to meeting you and your child!
            </p>
            
            {/* Calendly Inline Widget */}
            <div className="calendly-inline-widget" 
                 data-url="https://calendly.com/your-calendly-url"
                 style={{ minWidth: '320px', height: '630px' }}>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Booking;
