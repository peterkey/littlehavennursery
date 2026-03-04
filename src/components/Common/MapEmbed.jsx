import { memo, useState } from 'react';
import { motion } from 'framer-motion';

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const PinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...sp}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const LocationCard = ({ name, address, phone, directionsUrl }) => (
  <div className="bg-white rounded-2xl shadow-soft p-6 border border-neutral-100">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
        <PinIcon className="w-6 h-6 text-primary-500" />
      </div>

      <div className="flex-1">
        <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">{name}</h3>
        <p className="font-sans text-neutral-500 mb-3 text-sm leading-relaxed">{address}</p>

        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
            aria-label={`Call ${name}`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true" {...sp}>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.34 12 19.79 19.79 0 011.27 3.45 2 2 0 013.27 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.4a16 16 0 006.54 6.54l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            {phone}
          </a>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200"
            aria-label={`Get directions to ${name}`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true" {...sp}>
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            Get Directions
          </a>
        </div>
      </div>
    </div>
  </div>
);

const MapEmbed = memo(({ className = "" }) => {
  const [selectedLocation, setSelectedLocation] = useState(0);

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
      address: "Old Church Rooms Hen Ysgoldy'r Eglwys, Radyr, Cardiff CF15 8DF",
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
    <section className={`py-16 bg-neutral-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">Find Us</span>
          </div>
          <h2 className="font-display font-semibold text-neutral-900 leading-tight" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
            Find Our Locations
          </h2>
          <p className="font-sans text-neutral-500 text-lg leading-relaxed mt-3">
            We have three convenient locations across Cardiff. Choose the one nearest to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`cursor-pointer transition-all duration-200 ${selectedLocation === index ? 'ring-2 ring-primary-400 rounded-2xl' : ''}`}
                onClick={() => setSelectedLocation(index)}
              >
                <LocationCard {...location} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-soft overflow-hidden border border-neutral-100"
          >
            <div className="bg-neutral-100 h-80 flex items-center justify-center">
              <div className="text-center p-8">
                <PinIcon className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                <h3 className="font-display text-lg font-semibold text-neutral-500 mb-2">Interactive Map</h3>
                <p className="font-sans text-neutral-400 text-sm mb-4">Google Maps embed will appear here</p>
                <p className="font-sans text-xs text-neutral-400">Currently showing: {locations[selectedLocation].name}</p>
              </div>
            </div>

            <div className="p-4 bg-primary-50 border-t border-neutral-100">
              <div className="flex items-center gap-3">
                <PinIcon className="w-5 h-5 text-primary-500" />
                <div>
                  <div className="font-sans font-semibold text-neutral-900 text-sm">{locations[selectedLocation].name}</div>
                  <div className="font-sans text-sm text-neutral-500">{locations[selectedLocation].address}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

MapEmbed.displayName = 'MapEmbed';
export default MapEmbed;
