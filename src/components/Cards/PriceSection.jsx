import PriceCard from "./PriceCard";

const PriceSection = () => {
  const ageGroups = [
    {
      name: "Under 2 Yrs",
      fullDayPrice: 82,
      halfDayPrice: 45,
      features: [
        "3 Meals & Healthy Snacks",
        "Nappies Provided",
        "Dedicated Care Team",
        "Open Hours (7:30-17:30)",
        "Minimum 2 Full Days"
      ]
    },
    {
      name: "2-3 Yrs",
      fullDayPrice: 80,
      halfDayPrice: 43,
      features: [
        "3 Meals & Healthy Snacks",
        "Bilingual (English/Welsh)",
        "Structured Learning",
        "Open Hours (7:30-17:30)",
        "Minimum 2 Full Days"
      ]
    },
    {
      name: "Over 3 Yrs",
      fullDayPrice: 80,
      halfDayPrice: 43,
      featured: true,
      features: [
        "3 Meals & Healthy Snacks",
        "Bilingual (English/Welsh)",
        "School Readiness Program",
        "Open Hours (7:30-17:30)",
        "Funding Available"
      ]
    }
  ];

  return (
    <section className='relative py-16 sm:py-24 bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden'>
      <div className='absolute inset-0 bg-[url("/grid.svg")] opacity-10'></div>
      
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>Simple, Transparent Pricing</h2>
          <p className='text-lg text-primary-100 max-w-content mx-auto'>
            Choose the perfect plan for your child's care and development. All prices include meals, snacks, and activities.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 lg:gap-12'>
          {ageGroups.map((group, index) => (
            <PriceCard 
              key={index}
              name={group.name}
              price={group.fullDayPrice}
              halfDayPrice={group.halfDayPrice}
              features={group.features}
              featured={group.featured}
            />
          ))}
        </div>

        <div className='mt-12 text-center space-y-6'>
          <div className='bg-white/10 rounded-lg2 p-6 max-w-3xl mx-auto'>
            <h3 className='text-xl font-semibold text-white mb-4'>Additional Information</h3>
            <ul className='text-primary-100 space-y-2 text-sm md:text-base'>
              <li>• Minimum attendance of 2 full days per week required</li>
              <li>• Full day runs from 7:30 AM to 5:30 PM</li>
              <li>• 10% sibling discount available for the eldest child</li>
              <li>• Government funding available for eligible 3-4 year olds</li>
              <li>• Childcare vouchers and tax-free childcare accepted</li>
            </ul>
          </div>
          
          <p className='text-primary-200 text-sm'>
            Prices effective from April 2024. Please contact us to discuss your specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
