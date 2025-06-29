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
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-primary-100 to-primary-50 transform transition-transform duration-300 group-hover:scale-105' />
      <div className='relative flex flex-col items-center p-8 rounded-2xl'>
        <div className='text-4xl mb-4'>{emoji}</div>
        <h3 className='text-lg font-semibold text-neutral-900 mb-2'>{title}</h3>
        <p className='text-neutral-600 text-center'>{description}</p>
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
      title: "Flexible Scheduling",
      description: "Convenient hours designed to fit your family's needs."
    },
    {
      emoji: "🤝",
      title: "Strong Parent Partnerships",
      description: "Open communication to support your child's development."
    }
  ];

  return (
    <section className='bg-white py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl md:text-4xl font-bold text-primary-600 mb-4'>
              Why Choose Us?
            </h2>
            <p className='text-lg text-neutral-600'>
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
