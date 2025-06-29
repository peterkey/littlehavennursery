import Hygiene from "../../assets/Version 1 Badges 5.png";
import Snack from "../../assets/SNACK-AWARD-LOGO.jpg";
import Ciw from "../../assets/CIW.png";
import SunSafe from "../../assets/sun-accredited-logo.jpg";

const Footer = () => {
  return (
    <footer className='bg-white border-t border-neutral-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16'>
        {/* Badges Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center pb-12 border-b border-neutral-200'>
          <div className='flex justify-center'>
            <img 
              src={Snack} 
              alt='Snack Award Logo' 
              className='h-16 object-contain opacity-90 hover:opacity-100 transition-opacity' 
            />
          </div>
          <div className='flex justify-center'>
            <img 
              src={Hygiene} 
              alt='Hygiene Badge' 
              className='h-16 object-contain opacity-90 hover:opacity-100 transition-opacity' 
            />
          </div>
          <div className='flex justify-center'>
            <img 
              src={Ciw} 
              alt='CIW Badge' 
              className='h-16 object-contain opacity-90 hover:opacity-100 transition-opacity' 
            />
          </div>
          <div className='flex justify-center'>
            <a 
              href="https://www.sunsafenurseries.co.uk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              <img 
                src={SunSafe} 
                alt='Sun Safe Nurseries Accreditation' 
                className='h-16 object-contain opacity-90 hover:opacity-100 transition-opacity' 
              />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-12'>
          {/* About Us */}
          <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-neutral-900'>About Us</h2>
            <p className='text-neutral-600 leading-relaxed'>
              At Little Haven, we believe in more than just childcare. We're dedicated to giving every child the best
              start in life through an environment where fun and learning go hand in hand. Each day here is an exciting
              adventure, designed to inspire curiosity and spark creativity. From future scientists to artists and
              athletes, we provide a magical space where children can take their first steps toward becoming the heroes of
              tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-neutral-900'>Quick Links</h2>
            <ul className='space-y-3'>
              <li>
                <a 
                  href='#' 
                  className='text-neutral-600 hover:text-neutral-900 transition-colors'
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href='#' 
                  className='text-neutral-600 hover:text-neutral-900 transition-colors'
                >
                  Fees and Funding
                </a>
              </li>
              <li>
                <a 
                  href='#' 
                  className='text-neutral-600 hover:text-neutral-900 transition-colors'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-neutral-900'>Follow Us</h2>
            <ul className='space-y-3'>
              <li>
                <a 
                  href='#' 
                  className='group flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-colors'
                >
                  <i className='bx bxl-facebook text-2xl text-primary-600 group-hover:text-primary-700'></i>
                  <span>LHN Rhydlafar</span>
                </a>
              </li>
              <li>
                <a 
                  href='#' 
                  className='group flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-colors'
                >
                  <i className='bx bxl-facebook text-2xl text-primary-600 group-hover:text-primary-700'></i>
                  <span>LHN Pentyrch</span>
                </a>
              </li>
              <li>
                <a 
                  href='#' 
                  className='group flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-colors'
                >
                  <i className='bx bxl-facebook text-2xl text-primary-600 group-hover:text-primary-700'></i>
                  <span>LHN Radyr</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-12 pt-8 border-t border-neutral-200 text-center'>
          <p className='text-sm text-neutral-500'>
            © {new Date().getFullYear()} Parachutes ChildCare Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
