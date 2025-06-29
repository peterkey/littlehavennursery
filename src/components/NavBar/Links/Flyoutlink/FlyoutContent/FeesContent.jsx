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
      title: "Fee Structure",
      path: "/fees",
      description: "View our transparent pricing and payment options",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2V22M16 6H8.5C7.11929 6 6 7.11929 6 8.5C6 9.88071 7.11929 11 8.5 11H15.5C16.8807 11 18 12.1193 18 13.5C18 14.8807 16.8807 16 15.5 16H6M12 6H16M12 16H16" />
        </svg>
      )
    },
    {
      title: "Funding Options",
      path: "/fees/funding",
      description: "Learn about available funding and support",
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
      path: "/fees/tax-free",
      description: "Save up to £2,000 per year on childcare costs",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-primary-600 mb-2">Fees & Funding</h3>
        <p className="text-sm text-gray-500">Explore our fees and available funding options</p>
      </div>

      <div className="grid gap-4">
        {feeItems.map((item) => (
          <motion.div
            key={item.path}
            variants={itemVariants}
            className="group relative"
          >
            <Link
              to={item.path}
              className="flex items-start p-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-100 group-hover:text-primary-700 transition-colors">
                  {item.icon}
                </div>
              </div>
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                  {item.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Special Offer Banner */}
      <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-100">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="w-8 h-8 text-primary-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.09003 9.00008C9.32513 8.33175 9.78918 7.76819 10.4 7.40921C11.0108 7.05024 11.7289 6.91902 12.4272 7.03879C13.1255 7.15857 13.7588 7.52161 14.2151 8.06361C14.6714 8.60561 14.9211 9.29312 14.92 10.0001C14.92 12.0001 11.92 13.0001 11.92 13.0001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="ml-4">
            <h4 className="text-sm font-medium text-primary-900">Need Help?</h4>
            <p className="mt-1 text-xs text-primary-700">
              Contact us to discuss your childcare needs and funding options
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesContent;
