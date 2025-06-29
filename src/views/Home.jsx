import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SEOImage from '../components/Common/SEOImage';
import SEOHeading from '../components/Common/SEOHeading';
import SEOLink from '../components/Common/SEOLink';
import { optimizeImage, preloadResource, lazyLoad } from '../utils/performance';
import HomeAboutUs from "../components/HomeComps/AboutUs/HomeAboutUs";
import CallToAction from "../components/HomeComps/CallToAction/CallToAction";
import Hero from "../components/HomeComps/Hero/Hero";
import MapLocations from "../components/HomeComps/MapLocations/MapLocations";
import OpenTimes from "../components/HomeComps/OpenTimes/OpenTimes";
import Testimonials from "../components/HomeComps/Testimonials/Testimonials";
import WhyUs from "../components/HomeComps/WhyUs/WhyUs";

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.61, 1, 0.88, 1]
    }
  }
};

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Lazy load non-critical content
    if (heroRef.current) {
      lazyLoad(heroRef.current, () => {
        // Load additional content when hero section is in view
      });
    }
  }, []);

  return (
    <>
      <motion.section 
        ref={heroRef}
        variants={sectionVariants}
        initial="initial"
        animate="enter"
      >
        <Hero />
      </motion.section>

      <motion.section 
        variants={sectionVariants}
        initial="initial"
        animate="enter"
      >
        <HomeAboutUs />
      </motion.section>

      <motion.section 
        variants={sectionVariants}
        initial="initial"
        animate="enter"
      >
        <OpenTimes />
      </motion.section>

      <motion.section 
        variants={sectionVariants}
        initial="initial"
        animate="enter"
      >
        <WhyUs />
      </motion.section>

      <motion.section 
        variants={sectionVariants}
        initial="initial"
        animate="enter"
      >
        <MapLocations />
      </motion.section>

      <motion.section 
        variants={sectionVariants}
        initial="initial"
        animate="enter"
      >
        <Testimonials />
      </motion.section>

      <motion.section 
        variants={sectionVariants}
        initial="initial"
        animate="enter"
      >
        <CallToAction />
      </motion.section>
    </>
  );
};

Home.metadata = {
  title: 'Home',
  description: 'Welcome to Little Haven Nursery, providing quality childcare in Cardiff. Our experienced staff and nurturing environment ensure your child\'s best start in life.',
  keywords: ['nursery', 'childcare', 'Cardiff', 'early years', 'preschool', 'daycare', 'Rhydlafar', 'Pentyrch', 'Radyr'],
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'Little Haven Nursery',
      'image': 'https://littlehavennursery.co.uk/images/og-default.jpg',
      'description': 'Quality childcare in Cardiff',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Your Street Address',
        'addressLocality': 'Cardiff',
        'postalCode': 'Your Postcode',
        'addressCountry': 'GB'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 'Your Latitude',
        'longitude': 'Your Longitude'
      },
      'url': 'https://littlehavennursery.co.uk',
      'telephone': 'Your Phone Number',
      'openingHours': 'Mo-Fr 07:30-18:00',
      'priceRange': '££'
    }
  ]
};

export default Home;
