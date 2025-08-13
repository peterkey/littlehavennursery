import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Building from "../assets/Building.jpg";
import RoomPanorama from "../assets/RoomPanorama.jpg";
import Room from "../assets/Room.jpg";
import ChairRoom from "../assets/ChairRoom.jpg";

const OurNurseries = () => {
  const nurseries = [
    {
      title: "Little Haven - Rhydlafar",
      type: "Day Nursery",
      location: "Rhydlafar Dr, Rhydlafar, Cardiff CF5 6HU",
      description: "Our flagship day nursery providing exceptional care and education for children aged 0-5 years.",
      path: "/nurseries/rhydlafar",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2285.8924142478295!2d-3.284121823817714!3d51.51102651043905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1b79105870cb%3A0x5ca53d8a4961a49f!2sLittle%20Haven%20Nursery!5e1!3m2!1sen!2suk!4v1738684609327!5m2!1sen!2suk"
    },
    {
      title: "Little Haven - Pentyrch",
      type: "Wrap Around Club",
      location: "Pentyrch Primary School, Bronllwyn, Pentyrch, Cardiff CF15 9QL",
      description: "A welcoming wrap around club offering before and after school care for primary school children.",
      path: "/nurseries/pentyrch",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2285.008082588355!2d-3.3031652238166194!3d51.528648809151406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1a7563f9468b%3A0x3ca446636a2a0a8b!2sPentyrch%20Primary%20School!5e1!3m2!1sen!2suk!4v1738684802334!5m2!1sen!2suk"
    },
    {
      title: "Little Haven - Radyr",
      type: "Wrap Around Club",
      location: "Old Church Rooms Hen Ysgoldy'r Eglwys, Radyr, Cardiff CF15 8DF",
      description: "A nurturing wrap around club providing quality care for primary school children.",
      path: "/nurseries/radyr",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d455.63759593358543!2d-3.2565677116744!3d51.519258281439825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDMxJzA4LjYiTiAzwrAxNScyNC4wIlc!5e1!3m2!1sen!2suk!4v1738685113908!5m2!1sen!2suk"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-primary-600 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={Building} 
            alt="Little Haven Nursery Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-600/60" />
        </div>
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
                  <iframe
                    title={`Map of ${nursery.title}`}
                    src={nursery.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
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