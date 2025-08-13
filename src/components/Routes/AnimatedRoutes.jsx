import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import LoadingSpinner from "../Common/LoadingSpinner";

// Immediate load for critical routes
import Home from "../../views/Home";
import NotFound from "../NotFound";

// Lazy load non-critical routes for better performance
const AboutUs = lazy(() => import("../../views/AboutUs"));
const OurMission = lazy(() => import("../../views/About/Mission/OurMission"));
const Story = lazy(() => import("../../views/About/Story/Story"));
const Community = lazy(() => import("../../views/About/Community/Community"));
const Approach = lazy(() => import("../../views/About/Approach/Approach"));
const FoodAndNutrition = lazy(() => import("../../views/About/FoodAndNutrition/FoodAndNutrition"));
const AgeGroups = lazy(() => import("../../views/About/AgeGroups/AgeGroups"));
const Staff = lazy(() => import("../../views/About/Staff/Staff"));
const ParentResources = lazy(() => import("../../views/About/ParentResources/ParentResources"));
const FeesAndFunding = lazy(() => import("../../views/FeesAndFunding"));
const Fees = lazy(() => import("../../views/Fees"));
const Contact = lazy(() => import("../ContactComps/Contact"));
const BookingSection = lazy(() => import("../../views/Booking"));
const OurNurseries = lazy(() => import("../../views/OurNurseries"));
const RhydlafarPage = lazy(() => import("../Nurseries/RhydlafarPage"));
const PentyrchPage = lazy(() => import("../Nurseries/PentyrchPage"));
const RadyrPage = lazy(() => import("../Nurseries/RadyrPage"));
const OpeningHours = lazy(() => import("../../views/OpeningHours"));
const Safeguarding = lazy(() => import("../../views/Safeguarding"));
const PrivacyPolicy = lazy(() => import("../../views/PrivacyPolicy"));
const GovernmentFunding = lazy(() => import("../../views/GovernmentFunding"));
const TaxFreeChildcare = lazy(() => import("../../views/TaxFreeChildcare"));
const UniversalCredit = lazy(() => import("../../views/UniversalCredit"));
const CookiesPolicy = lazy(() => import("../../views/CookiesPolicy"));
const TermsOfService = lazy(() => import("../../views/TermsOfService"));

const AnimatedRoutes = () => {
  const location = useLocation();

  const LazyRoute = ({ component: Component, ...props }) => (
    <Suspense fallback={<LoadingSpinner />}>
      <Component {...props} />
    </Suspense>
  );

  return (
    <AnimatePresence mode="wait" key={location.pathname}>
      <Routes location={location} key={location.pathname}>
        {/* Critical route - loaded immediately */}
        <Route path='/' element={<Home />} />
        
        {/* About section routes - lazy loaded */}
        <Route path='/about' element={<LazyRoute component={AboutUs} />} />
        <Route path='/about/mission' element={<LazyRoute component={OurMission} />} />
        <Route path='/about/story' element={<LazyRoute component={Story} />} />
        <Route path='/about/community' element={<LazyRoute component={Community} />} />
        <Route path='/about/approach' element={<LazyRoute component={Approach} />} />
        <Route path='/about/foodandnutrition' element={<LazyRoute component={FoodAndNutrition} />} />
        <Route path='/about/agegroups' element={<LazyRoute component={AgeGroups} />} />
        <Route path='/about/staff' element={<LazyRoute component={Staff} />} />
        <Route path='/about/parentresources' element={<LazyRoute component={ParentResources} />} />
        
        {/* Other important routes - lazy loaded */}
        <Route path='/fees' element={<LazyRoute component={FeesAndFunding} />} />
        <Route path='/fees/our-fees' element={<LazyRoute component={Fees} />} />
        <Route path='/fees/government-funding' element={<LazyRoute component={GovernmentFunding} />} />
        <Route path='/fees/tax-free-childcare' element={<LazyRoute component={TaxFreeChildcare} />} />
        <Route path='/fees/universal-credit' element={<LazyRoute component={UniversalCredit} />} />
        <Route path='/contact' element={<LazyRoute component={Contact} />} />
        <Route path='/booking' element={<LazyRoute component={BookingSection} />} />
        
        {/* New pages - lazy loaded */}
        <Route path='/opening-hours' element={<LazyRoute component={OpeningHours} />} />
        <Route path='/safeguarding' element={<LazyRoute component={Safeguarding} />} />
        <Route path='/privacy-policy' element={<LazyRoute component={PrivacyPolicy} />} />
        <Route path='/cookies-policy' element={<LazyRoute component={CookiesPolicy} />} />
        <Route path='/terms-of-service' element={<LazyRoute component={TermsOfService} />} />
        
        {/* Nursery location routes - lazy loaded */}
        <Route path='/ournurseries' element={<LazyRoute component={OurNurseries} />} />
        <Route path='/nurseries/rhydlafar' element={<LazyRoute component={RhydlafarPage} />} />
        <Route path='/nurseries/pentyrch' element={<LazyRoute component={PentyrchPage} />} />
        <Route path='/nurseries/radyr' element={<LazyRoute component={RadyrPage} />} />
        
        {/* 404 route - loaded immediately for better UX */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
