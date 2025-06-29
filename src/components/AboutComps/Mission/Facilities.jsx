import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className='group relative'
  >
    <div className='absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl' />
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

const Facilities = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "High-Quality Furnishings",
      description: "We use only the best quality furniture and materials, chosen for their durability and safety, ensuring a comfortable learning environment."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Safe, Inspiring Spaces",
      description: "Every space is designed with children in mind — providing an inspiring, safe environment for them to grow, play, and learn."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Stimulating Play Areas",
      description: "Our nursery includes dedicated play areas that promote creativity, learning, and physical activity, all designed with children's development in mind."
    }
  ];

  return (
    <section className='relative py-24 bg-gradient-to-br from-primary-900 to-primary-800 overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute inset-0' style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
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
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              The Very Best Facilities
            </h2>
            <p className='text-lg text-primary-100 leading-relaxed'>
              Our custom-designed nursery has been thoughtfully crafted to provide the perfect environment for your child to
              learn, grow, and explore. With spacious rooms, modern design, and high-quality furnishings, we aim to provide
              an inspiring space where children can thrive.
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className='flex flex-col lg:flex-row gap-16 mb-24'>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='lg:w-1/2'
          >
            <h3 className='text-2xl font-bold text-white mb-8'>
              Custom-Designed Nursery
            </h3>
            <div className='space-y-6 text-primary-100'>
              <p>
                The nursery's layout is spacious and modern, designed with every child's needs in mind. Our 2018
                refit included a full redesign of the space, creating a safe and inspiring environment for children to
                explore.
              </p>
              <p>
                Community Playthings, leaders in creating educational environments, played a key role in this process.
                They helped us select the best furnishings and play areas to stimulate creativity, curiosity, and
                learning.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='lg:w-1/2'
          >
            <div className='relative'>
              <div className='absolute -inset-4 bg-primary-100/20 rounded-2xl transform -rotate-6' />
              <div className='relative aspect-[4/3] rounded-xl overflow-hidden bg-primary-200'>
                <img
                  src='/images/nursery-facility.jpg'
                  alt='Modern nursery facility with high-quality furnishings'
                  className='w-full h-full object-cover'
                />
              </div>
              {/* Decorative Elements */}
              <div className='absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500/20 rounded-full blur-xl' />
              <div className='absolute -top-4 -left-4 w-16 h-16 bg-primary-300/20 rounded-full blur-lg' />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
