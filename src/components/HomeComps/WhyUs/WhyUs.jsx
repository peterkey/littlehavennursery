import { motion } from "framer-motion";

const FeatureCard = ({ emoji, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className='group relative'
    >
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-100 via-primary-50 to-primary-200 transform transition-all duration-300 group-hover:scale-105 group-hover:from-primary-200 group-hover:via-primary-100 group-hover:to-primary-300 shadow-soft group-hover:shadow-medium' />
      <div className='relative flex flex-col items-center p-8 sm:p-10 rounded-xl'>
        <div className='text-5xl mb-6'>{emoji}</div>
        <h3 className='text-xl font-semibold text-primary-800 mb-4 text-center group-hover:text-primary-900 transition-colors'>{title}</h3>
        <p className='text-neutral-700 text-center text-body-md leading-relaxed group-hover:text-neutral-800 transition-colors'>{description}</p>
      </div>
    </motion.div>
  );
};

const WhyUs = () => {
  const features = [
    {
      emoji: "🏡",
      title: "Safe & Secure",
      description: "A warm, protected space where safety is our top priority."
    },
    {
      emoji: "👩‍🏫",
      title: "Qualified & Caring Staff",
      description: "Experienced professionals dedicated to nurturing every child."
    },
    {
      emoji: "🎨",
      title: "Play-Based Learning",
      description: "Fun, engaging activities that inspire creativity and growth."
    },
    {
      emoji: "🍎",
      title: "Healthy Meals Provided",
      description: "Nutritious, balanced meals to keep little ones energized."
    },
    {
      emoji: "⏳",
      title: "Reliable Hours",
      description: "Consistent daily schedule from 7:30 AM to 5:30 PM for working families."
    },
    {
      emoji: "🤝",
      title: "Strong Parent Partnerships",
      description: "Open communication to support your child's development."
    }
  ];

  return (
    <section className='bg-neutral-50 py-16 sm:py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-display-sm md:text-display-md font-bold text-primary-700 mb-6'>
              Why Choose Us?
            </h2>
            <p className='text-body-lg text-neutral-700 max-w-content mx-auto'>
              A nurturing space where your child can play, learn, and grow with confidence.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
