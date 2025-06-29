import { motion } from "framer-motion";
import AmazingTeam from "../../../components/AboutComps/StoryComps/AmazingTeam";
import BackgroundHistory from "../../../components/AboutComps/StoryComps/BackgroundHistory";
import DedicatedService from "../../../components/AboutComps/StoryComps/DedicatedService";
import FounderIntro from "../../../components/AboutComps/StoryComps/FounderIntro";
import LearningExperiences from "../../../components/AboutComps/StoryComps/LearningExperiences";
import LittleHavenEthos from "../../../components/AboutComps/StoryComps/LittleHavenEthos";
import PurposeDesignedSpaces from "../../../components/AboutComps/StoryComps/PurposeDesignedSpaces";
import StaffTraining from "../../../components/AboutComps/StoryComps/StaffTraining";

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

const Story = () => {
  return (
    <>
      <motion.section variants={sectionVariants}>
        <FounderIntro />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <BackgroundHistory />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <DedicatedService />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <LittleHavenEthos />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <LearningExperiences />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <PurposeDesignedSpaces />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <AmazingTeam />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <StaffTraining />
      </motion.section>
    </>
  );
};

export default Story;
