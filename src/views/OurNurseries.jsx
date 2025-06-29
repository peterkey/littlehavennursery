import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OurNurseries = () => {
  const nurseries = [
    {
      title: "Little Haven - Rhydlafar",
      type: "Day Nursery",
      location: "Rhydlafar Dr, Rhydlafar, Cardiff CF5 6HU",
      description: "Our flagship day nursery providing exceptional care and education for children aged 0-5 years.",
      path: "/nurseries/rhydlafar",
      streetView: "https://maps.googleapis.com/maps/api/streetview?size=600x400&location=51.4885,-3.2675&heading=45&pitch=10&key=YOUR_API_KEY"
    },
    {
      title: "Little Haven - Pentyrch",
      type: "Wrap Around Club",
      location: "Pentyrch Primary School, Bronllwyn, Pentyrch, Cardiff CF15 9QL",
      description: "A welcoming wrap around club offering before and after school care for primary school children.",
      path: "/nurseries/pentyrch",
      streetView: "https://maps.googleapis.com/maps/api/streetview?size=600x400&location=51.5289,-3.2956&heading=45&pitch=10&key=YOUR_API_KEY"
    },
    {
      title: "Little Haven - Radyr",
      type: "Wrap Around Club",
      location: "Old Church Rooms Hen Ysgoldy'r Eglwys, Radyr, Cardiff CF15 8DF",
      description: "A nurturing wrap around club providing quality care for primary school children.",
      path: "/nurseries/radyr",
      streetView: "https://maps.googleapis.com/maps/api/streetview?size=600x400&location=51.5186,-3.2583&heading=45&pitch=10&key=YOUR_API_KEY"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-primary-600">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Our Nurseries
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90"
            >
              Discover our welcoming and nurturing environments across Cardiff
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nurseries.map((nursery, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <Link to={nursery.path} className="block">
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={nursery.streetView}
                    alt={`Street view of ${nursery.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{nursery.title}</h2>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      nursery.type === "Day Nursery"
                        ? "bg-primary-100 text-primary-600"
                        : "bg-lavender-100 text-lavender-600"
                    }`}>
                      {nursery.type}
                    </span>
                  </div>
                  <p className="text-primary-600 font-medium mb-2">{nursery.location}</p>
                  <p className="text-gray-600 mb-4">{nursery.description}</p>
                  <div className="flex items-center text-primary-600">
                    <span className="mr-2">Learn more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurNurseries; 