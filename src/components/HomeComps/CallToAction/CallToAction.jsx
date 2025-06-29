import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className='relative overflow-hidden'>
      {/* Background with gradient and pattern */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800'>
        <div className='absolute inset-0 opacity-10' style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
        <div className='max-w-3xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative elements */}
            <div className='flex justify-center mb-8'>
              <div className='relative'>
                <div className='absolute -inset-4 blur-xl bg-white/20 rounded-full' />
                <svg className="relative w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
            </div>

            <h2 className='text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight'>
              Join the Little Haven Family
            </h2>
            <p className='text-xl text-primary-50 mb-12 leading-relaxed'>
              Give your child the best start in a safe, fun, and nurturing environment. Enroll today and be part of
              something special!
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link
                to='/contact'
                className='inline-flex items-center px-8 py-4 text-lg font-medium text-primary-700 bg-white rounded-xl shadow-lg hover:bg-primary-50 transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-primary-600'
              >
                Get in Touch
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link
                to='/about'
                className='inline-flex items-center px-8 py-4 text-lg font-medium text-white border-2 border-white/20 rounded-xl hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-primary-600'
              >
                Learn More
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className='absolute bottom-0 left-0 right-0'>
        <svg className="w-full h-12 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default CallToAction;
