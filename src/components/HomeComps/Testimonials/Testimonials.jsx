"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCards } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className='relative bg-white rounded-2xl shadow-xl overflow-hidden'
  >
    <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600' />
    <div className='p-8'>
      <div className='mb-6'>
        <svg className="h-8 w-8 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className='text-lg text-neutral-700 leading-relaxed mb-6 italic'>
        "{testimonial.feedback}"
      </p>
      <div className='flex items-center justify-between'>
        <div>
          <h3 className='text-primary-600 font-semibold'>{testimonial.name}</h3>
          <p className='text-sm text-neutral-500'>Parent</p>
        </div>
        <div className='flex -space-x-2'>
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "KW, March 2024",
      feedback:
        "Little Haven has been an amazing experience for my child! The staff is caring and the environment is fantastic.",
    },
    {
      name: "LJ, November 2024",
      feedback: "Helped my son with all his additional needs",
    },
    {
      name: "RB, November 2024",
      feedback:
        "Little Haven has become so much more outgoing and confident. The staff are brilliant, they make her feel so comfortable here. I can't thank you all enough.",
    },
    {
      name: "KM, December 2024",
      feedback: "Thank you all for making DM time so enjoyable, for making her feel safe, happy and to grow and learn",
    },
    {
      name: "SS, December 2024",
      feedback:
        "Thank you for looking after CS over the past year.  he has had so much fun with you and has made some good friends",
    },
    {
      name: "KR, December 2024",
      feedback: "Thank you so much for helping RR grow.  I am very grateful to you all.",
    },
    {
      name: "LS, December 2024",
      feedback: "Thank you for all that you do for TK. You have always gone above and beyond",
    },
  ];

  return (
    <section className='relative py-24 bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute inset-0' style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              What Our Parents Say
            </h2>
            <p className='text-primary-200 text-lg'>
              Hear from our community of parents about their experiences at Little Haven Nursery
            </p>
          </motion.div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay, EffectCards]}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary-400',
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className='pb-12'
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard testimonial={testimonial} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
