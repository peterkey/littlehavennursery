import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Flyoutlink from "./Flyoutlink/Flyoutlink";
import OurNurseriesContent from "./Flyoutlink/FlyoutContent/OurNurseriesContent";
import AboutUsContent from "./Flyoutlink/FlyoutContent/AboutUsContent";
import FeesContent from "./Flyoutlink/FlyoutContent/FeesContent";
import { useState } from "react";

const Links = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [homeHovered, setHomeHovered] = useState(false);

  const isActive = (path) => 
    currentPath === path 
      ? "text-primary-600 font-semibold" 
      : "text-neutral-600 hover:text-neutral-900";

  const homeUnderlineStyle = homeHovered 
    ? { transform: "scaleX(1)", opacity: 1 } 
    : { transform: "scaleX(0)", opacity: 0 };

  return (
    <div className='flex items-center gap-8'>
      <div className='relative flex items-center'>
        <Link
          to='/'
          className={`${isActive("/")} transition-colors duration-200`}
          onMouseEnter={() => setHomeHovered(true)}
          onMouseLeave={() => setHomeHovered(false)}>
          Home
          <span
            style={homeUnderlineStyle}
            className='absolute -bottom-1.5 left-0 right-0 h-0.5 origin-left rounded-full bg-primary-600 transition-all duration-300 ease-out'
          />
        </Link>
      </div>
      
      <Flyoutlink href='/ournurseries' FlyoutContent={OurNurseriesContent}>
        <span className={`${isActive("/ournurseries")} group flex items-center gap-1 transition-colors duration-200`}>
          Our Nurseries
          <i className='bx bx-chevron-down text-lg text-neutral-400 group-hover:text-neutral-600 transition-colors'></i>
        </span>
      </Flyoutlink>

      <Flyoutlink href='/about' FlyoutContent={AboutUsContent}>
        <span className={`${isActive("/about")} group flex items-center gap-1 transition-colors duration-200`}>
          About Us
          <i className='bx bx-chevron-down text-lg text-neutral-400 group-hover:text-neutral-600 transition-colors'></i>
        </span>
      </Flyoutlink>

      <Flyoutlink href='/fees' FlyoutContent={FeesContent}>
        <span className={`${isActive("/fees")} group flex items-center gap-1 transition-colors duration-200`}>
          Fees and Funding
          <i className='bx bx-chevron-down text-lg text-neutral-400 group-hover:text-neutral-600 transition-colors'></i>
        </span>
      </Flyoutlink>

      <Link 
        to='/contact' 
        className={`${isActive("/contact")} transition-colors duration-200`}
      >
        Contact
      </Link>
    </div>
  );
};

Links.propTypes = {
  page: PropTypes.string,
};

export default Links;
