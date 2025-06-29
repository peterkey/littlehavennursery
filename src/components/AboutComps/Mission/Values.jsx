import { motion } from 'framer-motion';

const ValueCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className='group relative'
  >
    <div className='absolute inset-0 bg-gradient-to-br from-primary-50 to-white rounded-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl' />
    <div className='relative p-8 flex flex-col items-center'>
      {/* Icon Container */}
      <div className='relative mb-6'>
        <div className='absolute -inset-2 bg-primary-100 rounded-full opacity-50 group-hover:opacity-100 blur transition-opacity' />
        <div className='relative w-16 h-16 flex items-center justify-center bg-primary-600 text-white rounded-full'>
          {icon}
        </div>
      </div>

      <h4 className='text-xl font-semibold text-primary-900 mb-4'>{title}</h4>
      <p className='text-neutral-600 text-center leading-relaxed'>{description}</p>
    </div>
  </motion.div>
);

const MissionAndValues = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Care and Support",
      description: "We provide the highest level of care and support, ensuring every child feels safe and loved as they learn and grow."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Creativity and Innovation",
      description: "We encourage creativity and innovation through play-based learning, helping children develop new skills and ideas."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Child-Centered Learning",
      description: "Our learning approach is always child-centered, focusing on individual needs and fostering curiosity, independence, and growth."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: "Passion and Commitment",
      description: "We are passionate about early childhood education, and we are committed to giving every child the best possible start in life."
    }
  ];

  return (
    <section className='relative py-24 bg-gradient-to-b from-white to-neutral-50 overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-[0.03]'>
        <div className='absolute inset-0' style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #518dbb 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl md:text-4xl font-bold text-primary-600 mb-6'>
              Our Mission and Values
            </h2>
            <p className='text-lg text-neutral-600 leading-relaxed'>
              At Little Haven, we are dedicated to providing a nurturing and inspiring environment where children learn and
              grow through play. Our Froebelian approach ensures that every child receives the best possible foundation for
              a lifelong love of learning.
            </p>
          </motion.div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {values.map((value, index) => (
            <ValueCard key={index} {...value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionAndValues;
