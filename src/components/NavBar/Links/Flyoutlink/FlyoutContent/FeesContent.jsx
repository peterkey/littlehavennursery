import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3
    }
  }
};

const FeesContent = () => {
  const feeItems = [
    {
      title: "Our Fees",
      path: "/fees/our-fees",
      description: "View our transparent pricing and payment options",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 3H18C19.1046 3 20 3.89543 20 5V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3Z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3V21" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H16" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11H16" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 15H16" />
        </svg>
      )
    },
    {
      title: "Welsh Government Funding",
      path: "/fees/government-funding",
      description: "Foundation Phase (10 hours) + Childcare Offer (20 hours) = 30 hours free",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.27002 6.96L12 12.01L20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Tax-Free Childcare",
      path: "/fees/tax-free-childcare",
      description: "UK-wide scheme: Save up to £2,000 per year on childcare costs",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Universal Credit",
      path: "/fees/universal-credit",
      description: "Claim up to 85% of childcare costs when working",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="w-[800px] p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 text-primary-500">Fees & Welsh Government Funding</h3>
        <p className="text-sm text-neutral-600">Explore our fees and Welsh Government funding schemes</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {feeItems.map((item, index) => (
          <motion.div
            key={item.path}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            className="group relative"
          >
            <Link
              to={item.path}
              className="block p-4 rounded-xl hover:bg-primary-50 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-500 text-white shadow-lg shadow-primary-300/30 transition-all duration-300">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-medium text-neutral-800 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 group-hover:text-neutral-700">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">Welsh Government Schemes</h4>
          <p className="text-xs text-blue-800 leading-relaxed">
            Wales offers unique childcare funding including Foundation Phase (10 hours) and Childcare Offer for Wales (additional 20 hours) for working families.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeesContent;
