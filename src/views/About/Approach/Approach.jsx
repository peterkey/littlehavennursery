import { motion } from "framer-motion";
import ApproachIntro from "../../../components/AboutComps/ApproachComps/ApproachIntro";
import ChildhoodMatters from "../../../components/AboutComps/ApproachComps/ChildhoodMatters";
import HolisticDevelopment from "../../../components/AboutComps/ApproachComps/HolisticDevelopment";
import PlayCreativity from "../../../components/AboutComps/ApproachComps/PlayCreativity";
import RelationshipsMatter from "../../../components/AboutComps/ApproachComps/RelationshipsMatter";
import SafeEnvironment from "../../../components/AboutComps/ApproachComps/SafeEnvironment";
import UniqueChildren from "../../../components/AboutComps/ApproachComps/UniqueChildren";

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

const Approach = () => {
  return (
    <>
      <motion.section variants={sectionVariants}>
        <ApproachIntro />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <ChildhoodMatters />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <RelationshipsMatter />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <UniqueChildren />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <HolisticDevelopment />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <PlayCreativity />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <SafeEnvironment />
      </motion.section>
    </>
  );
};

export default Approach;
