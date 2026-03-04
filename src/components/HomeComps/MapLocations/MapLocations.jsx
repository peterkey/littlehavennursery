import { memo } from "react";
import { motion } from "framer-motion";

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const LOCATIONS = [
  {
    key: "rhydlafar",
    name: "Rhydlafar",
    address: "Rhydlafar Dr, Rhydlafar, Cardiff CF5 6HU",
    phone: "029 2089 1825",
    phoneTel: "02920891825",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2285.8924142478295!2d-3.284121823817714!3d51.51102651043905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1b79105870cb%3A0x5ca53d8a4961a49f!2sLittle%20Haven%20Nursery!5e1!3m2!1sen!2suk!4v1738684609327!5m2!1sen!2suk",
  },
  {
    key: "pentyrch",
    name: "Pentyrch",
    address: "Pentyrch Primary School, Bronllwyn, Pentyrch, Cardiff CF15 9QL",
    phone: "029 2278 1919",
    phoneTel: "02922781919",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2285.008082588355!2d-3.3031652238166194!3d51.528648809151406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1a7563f9468b%3A0x3ca446636a2a0a8b!2sPentyrch%20Primary%20School!5e1!3m2!1sen!2suk!4v1738684802334!5m2!1sen!2suk",
  },
  {
    key: "radyr",
    name: "Radyr",
    address: "Old Church Rooms, Hen Ysgoldy\u2019r Eglwys, Radyr, Cardiff CF15 8DF",
    phone: "07361 214326",
    phoneTel: "07361214326",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d455.63759593358543!2d-3.2565677116744!3d51.519258281439825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDMxJzA4LjYiTiAzwrAxNScyNC4wIlc!5e1!3m2!1sen!2suk!4v1738685113908!5m2!1sen!2suk",
  },
];

/* ── Location card ───────────────────────────────────────────────── */
const LocationCard = ({ location, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    className="bg-white rounded-2xl shadow-soft overflow-hidden group hover:shadow-medium transition-all duration-300"
  >
    {/* Embedded map */}
    <div className="relative h-48 overflow-hidden">
      <iframe
        title={`Map showing ${location.name} nursery location`}
        src={location.mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 group-hover:opacity-0 transition-opacity duration-300"
      />
    </div>

    {/* Card content */}
    <div className="p-7">
      {/* Location name */}
      <h3 className="font-display text-xl font-semibold text-neutral-900 mb-4">
        {location.name}
      </h3>

      <div className="space-y-2.5 mb-5">
        <div className="flex items-start gap-2.5">
          <svg className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" {...sp} aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p className="font-sans text-sm text-neutral-600 leading-relaxed">{location.address}</p>
        </div>
        <div className="flex items-center gap-2.5">
          <svg className="w-4 h-4 text-primary-400 flex-shrink-0" viewBox="0 0 24 24" {...sp} aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.34 12 19.79 19.79 0 011.27 3.45 2 2 0 013.27 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.4a16 16 0 006.54 6.54l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          <a
            href={`tel:${location.phoneTel}`}
            className="font-sans text-sm text-neutral-600 hover:text-primary-600 transition-colors duration-200"
            aria-label={`Call ${location.name} nursery`}
          >
            {location.phone}
          </a>
        </div>
      </div>

      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors duration-200"
        aria-label={`View ${location.name} on Google Maps (opens in new tab)`}
      >
        View on Google Maps
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" {...sp} aria-hidden="true">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>
    </div>
  </motion.div>
);

/* ── MapLocations section ────────────────────────────────────────── */
const MapLocations = () => (
  <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl mb-14"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
            Find Us
          </span>
        </div>
        <h2
          className="font-display font-semibold text-neutral-900 leading-tight mb-3"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
        >
          Three nurseries<br />across Cardiff.
        </h2>
        <p className="font-sans text-neutral-500 text-lg leading-relaxed">
          Find us at any of our nursery sites, all serving Cardiff and the surrounding South Wales area.
        </p>
      </motion.div>

      {/* Location cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LOCATIONS.map((location, index) => (
          <LocationCard key={location.key} location={location} index={index} />
        ))}
      </div>

    </div>
  </section>
);

MapLocations.displayName = "MapLocations";
export default memo(MapLocations);
