import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

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

const OurNurseriesContent = () => {
  const locations = [
    {
      title: "Little Haven - Rhydlafar",
      type: "Day Nursery",
      path: "/nurseries/rhydlafar",
      address: "Rhydlafar Dr, Rhydlafar, Cardiff CF5 6HU",
      phone: "02920891825",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Little Haven - Pentyrch",
      type: "Wrap Around Club",
      path: "/nurseries/pentyrch",
      address: "Pentyrch Primary School, Bronllwyn, Pentyrch, Cardiff CF15 9QL",
      phone: "02922781919",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 10H5C3.89543 10 3 10.8954 3 12V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V12C21 10.8954 20.1046 10 19 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 10V6C7 4.93913 7.42143 3.92172 8.17157 3.17157C8.92172 2.42143 9.93913 2 11 2H13C14.0609 2 15.0783 2.42143 15.8284 3.17157C16.5786 3.92172 17 4.93913 17 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Little Haven - Radyr",
      type: "Wrap Around Club",
      path: "/nurseries/radyr",
      address: "Old Church Rooms Hen Ysgoldy'r Eglwys, Radyr, Cardiff CF15 8DF",
      phone: "07361 214326",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="w-[800px] p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 text-primary-500">Our Locations</h3>
        <p className="text-sm text-neutral-600">Discover our nursery and wrap around clubs in the Cardiff area</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {locations.map((location) => (
          <motion.div
            key={location.path}
            variants={itemVariants}
            className="group relative"
          >
            <Link
              to={location.path}
              className="block p-4 rounded-xl hover:bg-primary-50 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 ${
                    location.type === "Day Nursery"
                      ? "bg-primary-500 text-white shadow-lg shadow-primary-300/30"
                      : "bg-lavender-500 text-white shadow-lg shadow-lavender-300/30"
                  }`}>
                    {location.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-base font-medium text-neutral-800 group-hover:text-primary-600 transition-colors truncate">
                      {location.title}
                    </p>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium transition-colors ${
                      location.type === "Day Nursery"
                        ? "bg-primary-100 text-primary-600"
                        : "bg-lavender-100 text-lavender-600"
                    } flex-shrink-0`}>
                      {location.type}
                    </span>
                  </div>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-start gap-2">
                      <IoLocationOutline className={`text-lg flex-shrink-0 mt-1 ${
                        location.type === "Day Nursery"
                          ? "text-primary-400"
                          : "text-lavender-400"
                      }`} />
                      <p className="text-sm text-neutral-600 group-hover:text-neutral-700">
                        {location.address}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoCallOutline className={`text-lg flex-shrink-0 ${
                        location.type === "Day Nursery"
                          ? "text-primary-400"
                          : "text-lavender-400"
                      }`} />
                      <p className="text-sm text-neutral-600 group-hover:text-neutral-700">
                        {location.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurNurseriesContent;
