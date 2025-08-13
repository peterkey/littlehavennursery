import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoCallOutline, IoLocationOutline, IoTimeOutline } from 'react-icons/io5';

const NurseryPage = ({ 
  title, 
  type, 
  address, 
  phone, 
  location,
  service,
  openingHours,
  description,
  features
}) => {
  // Debug logging to identify duplicate rendering
  console.log('NurseryPage rendered with data:', { title, type, address, phone, location, service });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-primary-600">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90"
            >
              {type}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg2 shadow-sm p-8 sm:p-12 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our {type}</h2>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </motion.div>

            {/* Features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg2 shadow-sm p-8 sm:p-12 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>


          </div>

          {/* Right Column - Contact Info */}
          <div className="lg:col-span-1">
            {/* Contact Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-lg2 shadow-sm p-8 sm:p-12 mb-8 sticky top-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <IoLocationOutline className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600">{address}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <IoCallOutline className="w-6 h-6 text-primary-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <a href={`tel:${phone}`} className="text-primary-600 hover:text-primary-700">
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <IoTimeOutline className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Opening Hours</h3>
                    <div className="text-gray-600">
                      {openingHours.map((hours, index) => (
                        <p key={index}>{hours}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-gray-200">
                <div className="space-y-3">
                  <Link
                    to={`/contact?service=${service}&location=${location}&source=${location}-page`}
                    className="w-full inline-flex justify-center items-center px-4 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    Enquire Now
                  </Link>
                  <Link
                    to="/booking"
                    className="w-full inline-flex justify-center items-center px-4 py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors duration-200"
                  >
                    Book a Visit
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NurseryPage; 