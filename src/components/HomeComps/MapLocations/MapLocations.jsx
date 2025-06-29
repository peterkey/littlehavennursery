import { IoCallOutline, IoLocationOutline, IoOpenOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const LocationCard = ({ location, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className='bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300'
  >
    {/* Map Container */}
    <div className='relative h-48 overflow-hidden'>
      <iframe
        title={location.name}
        src={location.mapSrc}
        width='100%'
        height='100%'
        style={{ border: 0 }}
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        className='w-full h-full'
      />
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/20 group-hover:opacity-0 transition-opacity duration-300' />
    </div>

    {/* Content */}
    <div className='p-6'>
      <h3 className='text-xl font-bold text-primary-600 mb-3'>{location.name}</h3>
      
      <div className='space-y-3 mb-4'>
        <div className='flex items-start gap-2'>
          <IoLocationOutline className='text-primary-500 text-xl flex-shrink-0 mt-1' />
          <p className='text-neutral-600 text-sm leading-relaxed'>{location.address}</p>
        </div>
        <div className='flex items-center gap-2'>
          <IoCallOutline className='text-primary-500 text-xl flex-shrink-0' />
          <p className='text-neutral-600 text-sm'>{location.phone}</p>
        </div>
      </div>

      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
        target="_blank"
        rel="noopener noreferrer"
        className='inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors'
      >
        View on Google Maps
        <IoOpenOutline className='ml-1' />
      </a>
    </div>
  </motion.div>
);

const MapLocations = () => {
  const locations = [
    {
      name: "Little Haven - Rhydlafar",
      address: "Rhydlafar Dr, Rhydlafar, Cardiff CF5 6HU",
      phone: "02920891825",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2285.8924142478295!2d-3.284121823817714!3d51.51102651043905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1b79105870cb%3A0x5ca53d8a4961a49f!2sLittle%20Haven%20Nursery!5e1!3m2!1sen!2suk!4v1738684609327!5m2!1sen!2suk",
    },
    {
      name: "Little Haven - Pentyrch",
      address: "Pentyrch Primary School, Bronllwyn, Pentyrch, Cardiff CF15 9QL",
      phone: "02922781919",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2285.008082588355!2d-3.3031652238166194!3d51.528648809151406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1a7563f9468b%3A0x3ca446636a2a0a8b!2sPentyrch%20Primary%20School!5e1!3m2!1sen!2suk!4v1738684802334!5m2!1sen!2suk",
    },
    {
      name: "Little Haven - Radyr",
      address: "Old Church Rooms Hen Ysgoldy'r Eglwys, Radyr, Cardiff CF15 8DF",
      phone: "07361 214326",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d455.63759593358543!2d-3.2565677116744!3d51.519258281439825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDMxJzA4LjYiTiAzwrAxNScyNC4wIlc!5e1!3m2!1sen!2suk!4v1738685113908!5m2!1sen!2suk",
    },
  ];

  return (
    <section className='relative py-24 bg-gradient-to-b from-neutral-50 to-white overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-[0.03]'>
        <div className='absolute inset-0' style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #518dbb 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center max-w-3xl mx-auto mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-primary-600 mb-4'>
            Our Locations
          </h2>
          <p className='text-lg text-neutral-600'>
            Find us at any of our convenient nursery sites in the Cardiff area.
          </p>
        </motion.div>

        {/* Location Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {locations.map((location, index) => (
            <LocationCard key={index} location={location} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapLocations;
