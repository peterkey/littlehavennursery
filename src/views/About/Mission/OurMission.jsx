import { motion } from "framer-motion";
import WelcomeSection from "../../../components/AboutComps/Mission/WelcomeSection";
import Values from "../../../components/AboutComps/Mission/Values";
import Facilities from "../../../components/AboutComps/Mission/Facilities";
import Awards from "../../../components/AboutComps/Mission/Awards";
import PeaceOfMind from "../../../components/AboutComps/Mission/PeaceOfMind";
import HappyStaff from "../../../components/AboutComps/Mission/HappyStaff";
import HealthyLifestyles from "../../../components/AboutComps/Mission/HealthyLifestyles";
import LifelongLearners from "../../../components/AboutComps/Mission/LifeLongLearners";
import AffordableStressFree from "../../../components/AboutComps/Mission/AffordableStressFree";
import ContactUs from "../../../components/AboutComps/Mission/ContactUs";

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

const OurMission = () => {
  return (
    <>
      <motion.section variants={sectionVariants}>
        <WelcomeSection />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <Values />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <Facilities />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <Awards />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <PeaceOfMind />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <HappyStaff />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <HealthyLifestyles />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <LifelongLearners />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <AffordableStressFree />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <ContactUs />
      </motion.section>
    </>
  );
};

export default OurMission;
