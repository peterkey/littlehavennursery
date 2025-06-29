import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useTransition } from "react";
import Fees from "../../views/Fees";
import Home from "../../views/Home";
import OurMission from "../../views/About/Mission/OurMission";
import Story from "../../views/About/Story/Story";
import Contact from "../ContactComps/Contact";
import BookingSection from "../../views/Booking";
import Community from "../../views/About/Community/Community";
import Approach from "../../views/About/Approach/Approach";
import FoodAndNutrition from "../../views/About/FoodAndNutrition/FoodAndNutrition";
import AgeGroups from "../../views/About/AgeGroups/AgeGroups";
import Staff from "../../views/About/Staff/Staff";
import ParentResources from "../../views/About/ParentResources/ParentResources";
import NotFound from "../NotFound";
import RhydlafarPage from "../Nurseries/RhydlafarPage";
import PentyrchPage from "../Nurseries/PentyrchPage";
import RadyrPage from "../Nurseries/RadyrPage";
import AboutUs from "../../views/AboutUs";
import FeesAndFunding from "../../views/FeesAndFunding";
import OurNurseries from "../../views/OurNurseries";

const AnimatedRoutes = () => {
  const location = useLocation();
  const [isPending, startTransition] = useTransition();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/about/ourmission' element={<OurMission />} />
        <Route path='/about/story' element={<Story />} />
        <Route path='/about/community' element={<Community />} />
        <Route path='/about/approach' element={<Approach />} />
        <Route path='/about/foodandnutrition' element={<FoodAndNutrition />} />
        <Route path='/about/agegroups' element={<AgeGroups />} />
        <Route path='/about/staff' element={<Staff />} />
        <Route path='/about/parentresources' element={<ParentResources />} />
        <Route path='/fees' element={<FeesAndFunding />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/booking' element={<BookingSection />} />
        
        {/* Nursery Location Routes */}
        <Route path='/ournurseries' element={<OurNurseries />} />
        <Route path='/nurseries/rhydlafar' element={<RhydlafarPage />} />
        <Route path='/nurseries/pentyrch' element={<PentyrchPage />} />
        <Route path='/nurseries/radyr' element={<RadyrPage />} />
        
        {/* Catch all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
