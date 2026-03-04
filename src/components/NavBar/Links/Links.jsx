import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Flyoutlink from "./Flyoutlink/Flyoutlink";
import OurNurseriesContent from "./Flyoutlink/FlyoutContent/OurNurseriesContent";
import AboutUsContent from "./Flyoutlink/FlyoutContent/AboutUsContent";
import FeesContent from "./Flyoutlink/FlyoutContent/FeesContent";
import { useState } from "react";

const homeUnderline = {
  backgroundImage: "linear-gradient(90deg, #448bc3, #2b78c7)",
};

const Links = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [homeHovered, setHomeHovered] = useState(false);

  const isActive = (path) =>
    currentPath === path
      ? "text-primary-700 font-semibold font-display"
      : "text-neutral-700 hover:text-primary-700 font-display font-medium";

  return (
    <div className="flex items-center gap-8">
      {/* Home */}
      <div className="relative flex items-center">
        <Link
          to="/"
          className={`${isActive("/")} transition-colors duration-200 text-[15px]`}
          onMouseEnter={() => setHomeHovered(true)}
          onMouseLeave={() => setHomeHovered(false)}
        >
          Home
          <span
            className="absolute -bottom-1.5 left-0 right-0 h-0.5 origin-left rounded-full transition-all duration-300 ease-out"
            style={{
              ...homeUnderline,
              transform: homeHovered ? "scaleX(1)" : "scaleX(0)",
              opacity: homeHovered ? 1 : 0,
            }}
          />
        </Link>
      </div>

      <Flyoutlink href="/ournurseries" FlyoutContent={OurNurseriesContent}>
        <span className={`${isActive("/ournurseries")} group flex items-center gap-1 transition-colors duration-200 text-[15px]`}>
          Nurseries
          <i className="bx bx-chevron-down text-base text-primary-300 group-hover:text-primary-500 transition-colors" />
        </span>
      </Flyoutlink>

      <Flyoutlink href="/about" FlyoutContent={AboutUsContent}>
        <span className={`${isActive("/about")} group flex items-center gap-1 transition-colors duration-200 text-[15px]`}>
          About
          <i className="bx bx-chevron-down text-base text-primary-300 group-hover:text-primary-500 transition-colors" />
        </span>
      </Flyoutlink>

      <Flyoutlink href="/fees" FlyoutContent={FeesContent}>
        <span className={`${isActive("/fees")} group flex items-center gap-1 transition-colors duration-200 text-[15px]`}>
          Funding
          <i className="bx bx-chevron-down text-base text-primary-300 group-hover:text-primary-500 transition-colors" />
        </span>
      </Flyoutlink>

      <Link
        to="/contact"
        className={`${isActive("/contact")} transition-colors duration-200 text-[15px]`}
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
