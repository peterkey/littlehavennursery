import PriceCard from "./PriceCard";

const WrapAroundPriceSection = () => {
  const parkRoadServices = [
    {
      name: "Breakfast Club",
      fullDayPrice: 8,
      features: [
        "8am - 9am",
        "Ages 3+ Only",
        "Healthy Breakfast",
        "School Drop-off Service",
        "Qualified Staff"
      ]
    },
    {
      name: "Main Session",
      fullDayPrice: 22,
      features: [
        "9am - 12pm",
        "Ages 3-5 Years",
        "Structured Learning",
        "Qualified Staff",
        "Curriculum Activities"
      ]
    },
    {
      name: "Lunch Club",
      fullDayPrice: 10,
      featured: true,
      features: [
        "12pm - 1pm",
        "Radyr Primary Pupils",
        "Chaperone Service",
        "Healthy Lunch Time",
        "Safe Supervision"
      ]
    }
  ];

  const pentyrchServices = [
    {
      name: "Nursery Session",
      fullDayPrice: 20,
      features: [
        "9am - 11:30am",
        "Ages 2-3 Years",
        "Daily Sessions",
        "Healthy Snacks",
        "Term Time Only"
      ]
    },
    {
      name: "Wraparound Care",
      fullDayPrice: 26,
      featured: true,
      features: [
        "9am - 3:30pm",
        "Ages 3-5 Years",
        "Healthy Snacks",
        "Qualified Staff",
        "Curriculum Activities"
      ]
    },
    {
      name: "The Haven",
      fullDayPrice: 16,
      features: [
        "3:30pm - 5:30pm",
        "Ages 3-12 Years",
        "After School Club",
        "Healthy Snacks",
        "Fun Activities"
      ]
    }
  ];

  return (
    <section className='relative py-24 bg-gradient-to-b from-lavender-900 to-lavender-800 overflow-hidden'>
      <div className='absolute inset-0 bg-[url("/grid.svg")] opacity-10'></div>
      
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>Wrap Around Care Pricing</h2>
          <p className='text-lg text-lavender-100 max-w-2xl mx-auto'>
            Flexible and affordable care options at our locations
          </p>
        </div>

        {/* Park Road Location */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h3 className='text-2xl md:text-3xl font-bold text-white mb-3'>Park Road (Radyr)</h3>
            <p className='text-lavender-200'>Old Church Rooms, Park Road, Radyr</p>
            <p className='text-lavender-200 text-sm mt-2'>Contact: 07361 214326</p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 lg:gap-12'>
            {parkRoadServices.map((service, index) => (
              <PriceCard 
                key={index}
                name={service.name}
                price={service.fullDayPrice}
                features={service.features}
                featured={service.featured}
              />
            ))}
          </div>
        </div>

        {/* Pentyrch Location */}
        <div className='mb-16'>
          <div className='text-center mb-12'>
            <h3 className='text-2xl md:text-3xl font-bold text-white mb-3'>Pentyrch Primary School</h3>
            <p className='text-lavender-200'>Bronllwyn, Pentyrch, Cardiff</p>
            <p className='text-lavender-200 text-sm mt-2'>Contact: 02922 781919</p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 lg:gap-12'>
            {pentyrchServices.map((service, index) => (
              <PriceCard 
                key={index}
                name={service.name}
                price={service.fullDayPrice}
                features={service.features}
                featured={service.featured}
              />
            ))}
          </div>
        </div>

        <div className='mt-16 text-center space-y-6'>
          <div className='bg-white/10 rounded-xl p-6 max-w-3xl mx-auto'>
            <h3 className='text-xl font-semibold text-white mb-4'>Additional Information</h3>
            <ul className='text-lavender-100 space-y-2 text-sm md:text-base'>
              <li>• All services operate during term time only</li>
              <li>• Cardiff Childcare Offer registered</li>
              <li>• Childcare vouchers and other schemes accepted</li>
              <li>• Holiday club coming to Pentyrch in Summer 2025</li>
              <li>• Flexible booking options available</li>
            </ul>
          </div>
          
          <p className='text-lavender-200 text-sm'>
            Please contact your preferred location to discuss your specific requirements and book a visit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WrapAroundPriceSection; 