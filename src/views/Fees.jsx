import { motion } from "framer-motion";
import PriceSection from "../components/Cards/PriceSection";
import WrapAroundPriceSection from "../components/Cards/WrapAroundPriceSection";

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

const Fees = () => {
  return (
    <motion.div variants={sectionVariants}>
      <PriceSection />
      <WrapAroundPriceSection />
    </motion.div>
  );
};

export default Fees;
