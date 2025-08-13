import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaDirections, FaPhone } from 'react-icons/fa';

const LocationCard = ({ name, address, phone, mapUrl, directionsUrl }) => (
  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <FaMapMarkerAlt className="w-6 h-6 text-primary-600" aria-hidden="true" />
      </div>
      
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-3 text-sm leading-relaxed">{address}</p>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 
                     font-medium transition-colors duration-200"
            aria-label={`Call ${name}`}
          >
            <FaPhone className="w-4 h-4" aria-hidden="true" />
            {phone}
          </a>
          
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 
                     font-medium transition-colors duration-200"
            aria-label={`Get directions to ${name}`}
          >
            <FaDirections className="w-4 h-4" aria-hidden="true" />
            Get Directions
          </a>
        </div>
      </div>
    </div>
  </div>
);

const MapEmbed = memo(({ className = "" }) => {
  const [selectedLocation, setSelectedLocation] = useState(0);

  // TODO: Replace with actual coordinates and map embed URLs
  const locations = [
    {
      id: 'rhydlafar',
      name: 'Little Haven Rhydlafar',
      address: 'Rhydlafar Dr, Rhydlafar, Cardiff CF5 6HU',
      phone: '02920 891825',
      mapUrl: 'TODO_GOOGLE_MAPS_EMBED_URL_RHYDLAFAR',
      directionsUrl: 'https://www.google.com/maps/dir//Rhydlafar+Dr,+Cardiff+CF5+6HU'
    },
    {
      id: 'radyr',
      name: 'Little Haven Radyr',
      address: 'Old Church Rooms Hen Ysgoldy\'r Eglwys, Radyr, Cardiff CF15 8DF',
      phone: '07361 214326',
      mapUrl: 'TODO_GOOGLE_MAPS_EMBED_URL_RADYR',
      directionsUrl: 'https://www.google.com/maps/dir//Old+Church+Rooms,+Radyr,+Cardiff+CF15+8DF'
    },
    {
      id: 'pentyrch',
      name: 'Little Haven Pentyrch',
      address: 'Bronllwyn, Pentyrch, Cardiff',
      phone: '02922 781919',
      mapUrl: 'TODO_GOOGLE_MAPS_EMBED_URL_PENTYRCH',
      directionsUrl: 'https://www.google.com/maps/dir//Pentyrch+Primary+School,+Bronllwyn,+Pentyrch,+Cardiff'
    }
  ];

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Our Locations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We have three convenient locations across Cardiff. Choose the one nearest to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location Cards */}
          <div className="space-y-4">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedLocation === index ? 'ring-2 ring-primary-500' : ''
                }`}
                onClick={() => setSelectedLocation(index)}
              >
                <LocationCard {...location} />
              </motion.div>
            ))}
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <div className="text-center p-8">
                <FaMapMarkerAlt className="w-16 h-16 text-gray-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Interactive Map
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  TODO: Google Maps embed will be displayed here
                </p>
                <p className="text-xs text-gray-400">
                  Currently showing: {locations[selectedLocation].name}
                </p>
              </div>
            </div>
            
            {/* Map footer with current location info */}
            <div className="p-4 bg-primary-50 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-primary-600" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-gray-900">
                    {locations[selectedLocation].name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {locations[selectedLocation].address}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Need Help Finding Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Public Transport</h4>
              <p className="text-sm text-gray-600">All locations accessible by local bus routes</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Parking</h4>
              <p className="text-sm text-gray-600">Free parking available at all sites</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Accessibility</h4>
              <p className="text-sm text-gray-600">Wheelchair accessible entrances</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

MapEmbed.displayName = 'MapEmbed';

export default MapEmbed;
